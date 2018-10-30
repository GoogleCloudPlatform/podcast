FROM golang:1.11

RUN apt-get update && apt-get -y --force-yes install wget less unzip python zsh git make cleancss openssh-server python-crcmod \
                        python-setuptools python-dev build-essential libmagic-dev
WORKDIR /

#sshd setup - https://docs.docker.com/engine/examples/running_ssh_service/
RUN mkdir /var/run/sshd
RUN echo 'root:pw' | chpasswd
RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile
EXPOSE 22

#install cloud sdk
RUN wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.zip && unzip -q google-cloud-sdk.zip && rm google-cloud-sdk.zip
RUN /google-cloud-sdk/install.sh --usage-reporting=true --path-update=true --bash-completion=true --rc-path=/root/.bashrc
ENV PATH /google-cloud-sdk/bin:$PATH

RUN gcloud components update app app-engine-python --quiet

# install go tooling
RUN go get github.com/constabulary/gb/...
RUN go get github.com/PalmStoneGames/gb-gae
RUN go get github.com/golang/lint/golint
RUN go get golang.org/x/tools/cmd/goimports
RUN mv /go/bin/* /usr/local/bin
RUN rm -rf /go/*

WORKDIR /root

#oh-my-zsh, because how do we live without it?
RUN git clone https://github.com/robbyrussell/oh-my-zsh.git

#Hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.38/hugo_0.38_Linux-64bit.deb -O hugo.deb
RUN dpkg -i hugo.deb
RUN rm hugo.deb

RUN easy_install pip
RUN pip install eyeD3 pathlib
RUN mkdir /tools
ADD tag.sh /tools/tag.sh
RUN chmod +x /tools/tag.sh
ADD album.png /tools/album.png

ADD startup.sh /root/startup.sh
RUN chmod +x /root/startup.sh

RUN mkdir /project
WORKDIR /project

# Hugo server port
EXPOSE 1313

#AppEngine Port
EXPOSE 8080
