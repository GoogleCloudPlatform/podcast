#
# Hugo site management
#

SASS_FILES=./static/css/sass/main.scss:./static/css/main.css

server: clean assets-update
	hugo server --bind=0.0.0.0 --watch

assets-update:
	sass --update --style=compressed $(SASS_FILES)

assets-watch:
	sass --watch $(SASS_FILES)

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