# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask, redirect, request
import os
import random
import sys
from urllib.parse import urlencode
from urllib.request import Request, urlopen


app = Flask(__name__)


@app.route("/dl/<episode_key>")
def redirect_episode_download(episode_key):
    # Logs event to Google analytics and redirects to episode in GCS
    range_req = request.headers.get("Range", None)
    user_agent_str = request.headers.get("User-Agent")

    # Log request in Google Analytics if it's not a range request
    # or the range starts at the beginning of the file
    if not range_req or range_req.replace("bytes=", "")[0] == "0":
        try:
            track_event(request, episode_key, user_agent_str)
        except Exception as e:
            print(e)

    #  Flushing stdout to avoid log buffering
    sys.stdout.flush()

    # Redirect to episode in GCS
    return redirect(os.environ.get("STORAGE_BUCKET") + episode_key, code=302)


def track_event(req, episode_key, user_agent_str):
    data = {
        "v": 1,
        "t": "event",
        "tid": os.environ.get("GA_TRACKING_ID"),  # Tracking ID.
        "ec": "episode-download",  # Event category.
        "ea": episode_key,  # Event action.
        "uip": req.remote_addr,  # IP Override.
        "uid": req.remote_addr,  # User Id.
        "dr": req.referrer,  # Document referrer
        "z": random.randint(100000, 900000)  # Cache busting.
    }

    request = Request(
        "https://www.google-analytics.com/collect", urlencode(data).encode()
    )
    request.add_header("User-Agent", user_agent_str)
    response = urlopen(request)

    if response.getcode() != 200:
        raise Exception(response.read())


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
