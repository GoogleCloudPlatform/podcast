#
# Hugo site management
#

server: clean
	hugo server --bind=0.0.0.0 --watch

clean:
	-rm -r public

build: clean
	hugo

deploy: build
	gcloud preview app deploy app.yaml --project gcppodcast --no-promote

deploy-default: build
	gcloud preview app deploy app.yaml --project gcppodcast --promote

categories:
	grep categories content/post/*.md | sed "s/.*\[\(.*\)]\.*/\1/" | tr "," "\n" | sed "s/.*\"\(.*\)\".*/\1/" | sort | uniq -c | sort -nr
