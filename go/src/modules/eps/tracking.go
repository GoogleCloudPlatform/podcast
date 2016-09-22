package eps

import (
	"fmt"
	"math/rand"

	"net/http"

	ga "github.com/jpillora/go-ogle-analytics"
	"golang.org/x/net/context"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine/urlfetch"
)

const gaUA = "UA-66340814-1"

// sendGADownloadEvent sends GA an event that has a
// category of "episode-download" and an
// action of the episode file name.
func sendGADownloadEvent(ctx context.Context, r *http.Request, ep string) error {
	gac, err := ga.NewClient(gaUA)
	if err != nil {
		return err
	}
	gac.HttpClient = urlfetch.Client(ctx)
	gac.UseTLS = true

	gac.CacheBuster(fmt.Sprintf("%x", rand.Int63()))
	gac.IPOverride(r.RemoteAddr)
	gac.UserID(r.RemoteAddr)
	gac.DocumentReferrer(r.Referer())
	gac.UserAgentOverride(r.UserAgent())

	event := ga.NewEvent("episode-download", ep)

	log.Debugf(ctx, "Event: %#v", event)
	log.Debugf(ctx, "Client: %#v", gac)

	return gac.Send(event)
}
