#
# Hugo site management
#

server: clean
	hugo server --bind=0.0.0.0 --watch

clean:
	-rm -r public

build: clean
	hugo

deploy-legacy: build
	appcfg.py --application=gcppodcast --version=`date +%s` update .

deploy: build
	gcloud preview app deploy app.yaml

deploy-default: build
	gcloud preview app deploy app.yaml --promote
