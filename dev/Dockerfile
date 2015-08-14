FROM debian:jessie

RUN apt-get update && apt-get -y install wget less unzip python zsh git make cleancss
WORKDIR /

RUN wget https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.zip && unzip -q google-cloud-sdk.zip && rm google-cloud-sdk.zip
RUN /google-cloud-sdk/install.sh --usage-reporting=true --path-update=true --bash-completion=true --rc-path=/root/.bashrc
ENV PATH /google-cloud-sdk/bin:$PATH

RUN gcloud components update app preview app-engine-python --quiet

WORKDIR /root

#oh-my-zsh, because how do we live without it?
RUN git clone https://github.com/robbyrussell/oh-my-zsh.git

RUN wget https://github.com/spf13/hugo/releases/download/v0.14/hugo_0.14_amd64.deb -O hugo.deb
RUN dpkg -i hugo.deb
RUN rm hugo.deb

ADD startup.sh /root/startup.sh
RUN chmod +x /root/startup.sh

RUN mkdir /project
WORKDIR /project

# Hugo server port
EXPOSE 1313