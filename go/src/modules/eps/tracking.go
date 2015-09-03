package eps

import (
	"math/rand"

	ga "github.com/jpillora/go-ogle-analytics"
	"golang.org/x/net/context"
	"google.golang.org/appengine/urlfetch"
)

const gaUA = "UA-66340814-1"

//sendGADownloadEvent sends GA an
//event that has the category of "episode-download" and an action
//of the episode file name.
func sendGADownloadEvent(ctx context.Context, ep string) error {
	client, err := ga.NewClient(gaUA)
	client.UseTLS = true
	client.CacheBuster(string(rand.Int()))
	client.HttpClient = urlfetch.Client(ctx)

	//TODO: Set the IP

	if err != nil {
		return err
	}

	event := ga.NewEvent("episode-download", ep)

	return client.Send(event)
}
