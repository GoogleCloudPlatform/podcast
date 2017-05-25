#!/bin/bash
# Copyright 2017 Google Intt. All rights reserved.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to writing, software distributed
# under the License is distributed on a "AS IS" BASIS, WITHOUT WARRANTIES OR
# CONDITIONS OF ANY KIND, either express or implied.
#
# See the License for the specific language governing permissions and
# limitations under the License.

# to install eyeD3 - sudo pip install eyeD3

# Arguments Name of mp3, Episode number, title of episode

# name of the file
FILE=Google.Cloud.Platform.Podcast.Episode.$2.mp3
# directory the script
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "Applying name and format to: $1, for episode $2, with title $3"
cp $1 $FILE
echo "Removing all tags"
eyeD3 --remove-all $FILE
echo "Applying tags"
eyeD3 --artist="Google Cloud Platform" --album="Google Cloud Platform Podcast" --track=$2 \
      --genre="Podcast" --recording-date=`date +"%Y"` --title="$3" \
      --url-frame="WPUB:https\://www.gcppodcast.com" \
      --url-frame="WCOP:http\://creativecommons.org/licenses/by/3.0/" \
      --add-image="/tools/album.png":FRONT_COVER \
      $FILE
