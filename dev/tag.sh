#!/bin/bash
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
