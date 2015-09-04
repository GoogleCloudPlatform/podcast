package eps

import (
	"math/rand"

	"net"
	"net/http"
	"strings"

	ga "github.com/jpillora/go-ogle-analytics"
	"golang.org/x/net/context"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine/urlfetch"
)

const gaUA = "UA-66340814-1"

//sendGADownloadEvent sends GA an
//event that has the category of "episode-download" and an action
//of the episode file name.
func sendGADownloadEvent(ctx context.Context, r *http.Request, ep string) error {
	client, err := ga.NewClient(gaUA)
	client.UseTLS = true
	client.HttpClient = urlfetch.Client(ctx)

	client.CacheBuster(string(rand.Int()))

	ip := getIP(ctx, r)
	log.Debugf(ctx, "Ip found: %v", ip)
	client.IPOverride(ip)
	client.DocumentReferrer(r.Referer())

	if err != nil {
		return err
	}

	event := ga.NewEvent("episode-download", ep)

	log.Debugf(ctx, "Event: %#v", event)

	return client.Send(event)
}

//getIP returns the IP
func getIP(ctx context.Context, r *http.Request) string {
	if ipProxy := r.Header.Get("X-Forwarded-For"); len(ipProxy) > 0 {
		//could potentially be a list
		log.Debugf(ctx, "Found X Forwarded!: #v", ipProxy)
		ipProxy = strings.Split(ipProxy, ",")[0]
		return strings.Trim(ipProxy, " ")
	}

	if strings.Contains(r.RemoteAddr, ":") {
		ip, _, err := net.SplitHostPort(r.RemoteAddr)

		if err == nil {
			return ip
		}

		log.Warningf(ctx, "Could not split RemoteAddr of %v with error: %v", r.RemoteAddr, err)
	}

	return r.RemoteAddr
}
