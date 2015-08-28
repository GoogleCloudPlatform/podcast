#
# Makefile for the Go modules
#

#Check all the code things - fmt, imports, vet and lint
code-check: fmt imports vet lint

#Go Format all the code
fmt:
	goapp fmt ./...

#Update all imports, and remove any that aren't necessary, for all go files we can find.
imports:
	find -name '*.go' -exec goimports -w {} \;

#vet everything, test it for
vet:
	go vet ./src/...

#lint everything, make sure it conforms
lint:
	golint .