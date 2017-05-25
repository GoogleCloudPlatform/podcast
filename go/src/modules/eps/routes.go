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

// Package eps redirects episode download requests to GCS.
package eps

import (
	"net/http"
	"strings"

	"github.com/gorilla/mux"

	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
)

const (
	bucket     = "https://storage.googleapis.com/eps/"
	episodeKey = "episode"
)

func init() {
	r := mux.NewRouter()
	r.HandleFunc("/dl/{"+episodeKey+"}", redirectEpisodeDownload)

	http.Handle("/", r)
}

// redirectEpisodeDownload redirects the user to the a file stored in GCS.
func redirectEpisodeDownload(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	vars := mux.Vars(r)

	ep, ok := vars[episodeKey]
	if !ok {
		http.NotFound(w, r)
		return
	}

	log.Debugf(ctx, "Header: %#v", r.Header)

	// Don't send GA events for Range requests.
	if rge, ok := r.Header["Range"]; !ok || strings.HasPrefix(rge[0], "bytes=0-") || rge[0] == "" {
		if err := sendGADownloadEvent(ctx, r, ep); err != nil {
			log.Errorf(ctx, "Error sending GA Event: %v", err)
		}
	}

	path := bucket + ep
	log.Infof(ctx, "Redirecting file download to: %v", path)
	http.Redirect(w, r, path, http.StatusTemporaryRedirect)
}
