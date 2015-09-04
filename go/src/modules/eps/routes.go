// episode redirector, and tracker of analytics
package eps

import (
	"net/http"

	"github.com/gorilla/mux"
	"google.golang.org/appengine"
	"google.golang.org/appengine/log"
)

const bucket = "https://storage.googleapis.com/eps/"
const episodeKey = "episode"

//init
func init() {
	r := mux.NewRouter()
	r.HandleFunc("/dl/{"+episodeKey+"}", redirectEpisodeDownload)

	http.Handle("/", r)
}

//redirectEpisodeDownload implements a redirect to downloading the
//audio file that comes into the param {episode}.
func redirectEpisodeDownload(w http.ResponseWriter, r *http.Request) {
	ctx := appengine.NewContext(r)
	vars := mux.Vars(r)
	ep, ok := vars[episodeKey]

	if !ok {
		http.NotFound(w, r)
		return
	}

	log.Debugf(ctx, "Header: %#v", r.Header)

	path := bucket + ep

	log.Infof(ctx, "Redirecting file download to: %v", path)

	//ignore mid range requests, as it's just trying to start
	//from a mid point in the podcast
	if rge, ok := r.Header["Range"]; (!ok || rge[0] == "bytes=0-" || rge[0] == "") {
		err := sendGADownloadEvent(ctx, r, ep)

		if err != nil {
			log.Errorf(ctx, "Error sending GA Event: %v", err)
		}
	}

	http.Redirect(w, r, path, 307)
}
