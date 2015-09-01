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

	path := bucket + ep

	log.Infof(ctx, "Redirecting file download to: %v", path)

	http.Redirect(w, r, path, 307)
}
