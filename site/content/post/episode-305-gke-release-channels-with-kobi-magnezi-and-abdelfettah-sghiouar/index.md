+++
audioDuration = "00:47:55"
audioFile = "Google.Cloud.Platform.Podcast.Episode.305.mp3"
audioSize = 69017338
categories = ["GKE", "Kubernetes"]
date = "2022-05-25"
description = "Kaslin Fields and Mark Mirchandani learn how GKE manages their releases and how customers can take advantage of the GKE Release Channels for smooth transitions."
draft = false
episodeNumber = 305
hosts = ["Mark Mirchandani", "Kaslin Fields"]
title = "GKE Release Channels with Kobi Magnezi and Abdelfettah Sghiouar"
image="/post/episode-305-gke-release-channels-with-kobi-magnezi-and-abdelfettah-sghiouar/images/hero/hero-EP-305.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/uxmtic/episode_305_gke_release_channels_with_kobi/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Kaslin Fields](https://twitter.com/kaslinfields) and [Mark Mirchandani](https://twitter.com/markmirch) learn how GKE manages their releases and how customers can take advantage of the GKE release channels for smooth transitions.  Guests [Abdelfettah Sghiouar](https://twitter.com/boredabdel) and [Kobi Magnezi](https://twitter.com/magnezi) of the Google Cloud GKE team are here to explain.

With releases every four months or so, Kobi tells us that Kubernetes requires two pieces to be managed with each release: the control plane and the nodes. Both are managed for the customer in GKE. The new addition of release channels allows flexibility with release updating so customers can adjust to their specific project needs. Each channel offers a different updating mix and speed, and clients choose the channel that's right for their project. The idea for release channels isn't a new one, Kobi explains. In fact, Google's frequent project releases, while keeping things secure and running well, also can be customized by choosing from an assortment of channels in other Google offerings like Chrome.

Our guests talk us through the process of releasing through channels and how each release marinates in the Rapid channel to be sure the version is supported and secure before being pushed to customers through other channels. We hear how release channels differ from no-channel releases, the benefits of specialized channels, and recommendations for customers as far as which channels to use with different development environments. Abdel describes real-world use cases for the Rapid, Regular, and Stable channels, the Surge Upgrade feature, and how GKE notifications with Pub/Sub helps in the updating process. Kobi talks about maintenance and exclusion windows to help customers further customize when and how their projects will update. 

Kobi and Abdel wrap up with a discussion of the future of GKE release channels.

##### Kobi Magnezi

[Kobi](https://twitter.com/magnezi) is the Product Manager for GKE at Google Cloud.

##### Abdelfettah Sghiouar

[Abdel](https://twitter.com/boredabdel) is a Cloud Dev Advocate with a focus on Cloud native, GKE, and Service Mesh technologies.

##### Cool things of the week

* GKE Essentials [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg)
* KubeCon EU 2023 [site](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe-2023/)
* KubeCon Call for Proposals [site](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/cfp/)
* Kubernetes 1.24: Stargazer [site](https://kubernetes.io/blog/2022/05/03/kubernetes-1-24-release-announcement/)
     * GCP Podcast Episode 292: Pulumi and Kubernetes Releases with Kat Cosgrove [podcast](https://www.gcppodcast.com/post/episode-292-pulumi-and-kubernetes-releases-with-kat-cosgrove/)
* Optimize and scale your startup on Google Cloud: Introducing the Build Series [blog](https://cloud.google.com/blog/topics/startups/introducing-the-build-series)
 
##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Autoscaling with GKE: Overview and pods [video](https://www.youtube.com/watch?v=7naCIxIaV1M)
* GKE release schedule [dcos](https://cloud.google.com/kubernetes-engine/docs/release-schedule)
* Release channels [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
* Upgrade-scope maintenance windows [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#scope_of_maintenance_to_exclude)
* Configure cluster notifications for third-party services [docs](https://cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
* Cluster notifications [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-notifications)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Agones [site](https://agones.dev/site/)

##### What's something cool you're working on?

Kaslin is working on [KubeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) and new episodes of [GKE Essentials](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg).


