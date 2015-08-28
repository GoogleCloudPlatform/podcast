# GCP Podcast Website

## Development (Website)

Make sure you have access to the `gcppodcast` project, so you will be able to pull the dev Docker image.

### Pull down the dev Docker image
`make pull` (requires gcloud, which I assume you have installed already)

### Start an interactive shell (ZSH)
Run `make shell` to fire up a shell so you can interact with the application.

If you want an extra shell, in the same container, run `make attach`.

To get an extra shell that has root access `make attach-root`

#### Within /site

Make targets that can be run within the `site` directory
which is for the static site generation and deployment.

##### Run Interactive Hugo Server (port 1313)
`make server`

##### Minify Assets
`make assets`

##### Deploy the Project to App Engine
`make deploy` - This will not make the version default. Useful if you just want to test/share a version live.

`make deploy-default` - This will replace the default version (but the old version is kept, in case)

#### Within /go

Make targets that can be run within the `go` directory
which is for dynamic modules, such as the module that tracks
episode downloads



## Development (Docker Image)

### Build the docker image
`make build`

### Push the Docker image up to GCR.
`make push`

# Licence

Apache 2.0

This is not an official Google product.

