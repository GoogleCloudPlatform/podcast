#!/usr/bin/env sh
# Copyright 2017 Google Intt. All rights reserved.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to writing, software distributed
# under the License is distributed on a "AS IS" BASIS, WITHOUT WARRANTIES OR
# CONDITIONS OF ANY KIND, either express or implied.
#
# See the License for the specific language governing permissions and
# limitations under the License.

groupadd --gid $HOST_GID $HOST_USER
useradd $HOST_USER --home /home/$HOST_USER --gid $HOST_GID --uid $HOST_UID --shell /usr/bin/zsh
echo "$HOST_USER:pw" | chpasswd

cp -r /root/oh-my-zsh /home/$HOST_USER/.oh-my-zsh
chown -R $HOST_USER:$HOST_USER /home/$HOST_USER
chown -R $HOST_USER:$HOST_USER /google-cloud-sdk

/usr/sbin/sshd
su $HOST_USER