// episode redirector, and tracker of analytics
package eps

import (
	"net/http"

	"github.com/gorilla/mux"
)

const bucket = "https://storage.googleapis.com/eps"

//init
func init() {
	r := mux.NewRouter()
	r.HandleFunc("/dl/{episode}", redirectEpisodeDownload)
}

//redirectEpisodeDownload implements a redirect to downloading the
//audio file that comes into the param {episode}.
func redirectEpisodeDownload(w http.ResponseWriter, r *http.Request) {

}
