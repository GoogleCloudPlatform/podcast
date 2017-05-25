// Copyright 2017 Google Intt. All rights reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to writing, software distributed
// under the License is distributed on a "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.

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
