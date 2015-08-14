#
# Hugo site management
#
THEME=gcppodcast

server:
	hugo server --bind=0.0.0.0 --theme=$(THEME) --watch

assets:
	cleancss -o ./themes/$(THEME)/static/css/styles.min.css ./themes/$(THEME)/static/css/styles.css

clean:
	-rm -r public

build: clean
	hugo --theme="$(THEME)"

deploy: build
	gcloud preview app deploy app.yaml

deploy-default: build
	gcloud preview app deploy app.yaml --set-default