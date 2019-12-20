# Copyright 2018 Google Inc. All Rights Reserved.
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

import main
import mock
import pytest
import sys


@pytest.fixture
def client():
    main.app.testing = True
    return main.app.test_client()


def test_empty_payload(client):
    r = client.get("/", json="")
    assert r.status_code == 404


@mock.patch("main.track_event", mock.MagicMock(return_value=200))
def test_log_and_redirect(client):
    r = client.get("/dl/Google.Cloud.Platform.Podcast.Episode.207.mp3")
    assert r.status_code == 302
    assert main.track_event.called


def test_does_not_log_range_requests(client):
    with mock.patch("main.track_event") as track_event:
        client.get("/dl/test", headers=[("Range", "bytes=10-100")])
        assert not track_event.called


def test_logs_beginning_range_requests(client):
    with mock.patch("main.track_event") as track_event:
        client.get("/dl/test", headers=[("Range", "bytes=0-100")])
        assert track_event.called
