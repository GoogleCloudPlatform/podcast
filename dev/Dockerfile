FROM golang:1.4.2

RUN apt-get update && apt-get -y install wget less unzip python zsh git make cleancss
WORKDIR /

#install cloud sdk
RUN wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.zip && unzip -q google-cloud-sdk.zip && rm google-cloud-sdk.zip
RUN /google-cloud-sdk/install.sh --usage-reporting=true --path-update=true --bash-completion=true --rc-path=/root/.bashrc
ENV PATH /google-cloud-sdk/bin:$PATH

RUN gcloud components update app preview app-engine-python --quiet

#install appengine
ENV APPENGINE_VERSION=1.9.25
RUN wget -O appengine.zip https://storage.googleapis.com/appengine-sdks/featured/go_appengine_sdk_linux_amd64-$APPENGINE_VERSION.zip && unzip -q appengine.zip && rm appengine.zip

ENV PATH /go_appengine:$PATH

# install go tooling
RUN go get github.com/constabulary/gb/...
RUN go get code.palmstonegames.com/gb-gae
RUN go get github.com/golang/lint/golint
RUN go get golang.org/x/tools/cmd/goimports
RUN mv /go/bin/* /usr/local/bin
RUN rm -rf /go

WORKDIR /root

#oh-my-zsh, because how do we live without it?
RUN git clone https://github.com/robbyrussell/oh-my-zsh.git

#Hugo
RUN wget https://github.com/spf13/hugo/releases/download/v0.14/hugo_0.14_amd64.deb -O hugo.deb
RUN dpkg -i hugo.deb
RUN rm hugo.deb

ADD startup.sh /root/startup.sh
RUN chmod +x /root/startup.sh

RUN mkdir /project
WORKDIR /project

# Hugo server port
EXPOSE 1313