#
# Hugo site management
#

server: clean
	hugo server --bind=0.0.0.0 --watch

clean:
	-rm -r public
	-rm ./static/css/main.css
	-rm ./static/css/main.css.map

build: clean assets-update
	hugo

deploy: build
	gcloud preview app deploy app.yaml

deploy-default: build
	gcloud preview app deploy app.yaml --set-default
