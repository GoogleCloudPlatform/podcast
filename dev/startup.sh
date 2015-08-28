#!/usr/bin/env sh
groupadd --gid $HOST_GID $HOST_USER
useradd $HOST_USER --home /home/$HOST_USER --gid $HOST_GID --uid $HOST_UID --shell /usr/bin/zsh
echo "$HOST_USER:pw" | chpasswd

cp -r /root/oh-my-zsh /home/$HOST_USER/.oh-my-zsh
chown -R $HOST_USER:$HOST_USER /home/$HOST_USER
chown -R $HOST_USER:$HOST_USER /google-cloud-sdk

/usr/sbin/sshd
su $HOST_USER