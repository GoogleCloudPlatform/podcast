+++
audioDuration = "00:23:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.144.mp3"
audioSize = 34180354
categories = ["Mercari", "GKE", "Kubernetes", "Microservices", "Identity Management System"]
date = "2018-08-29"
description = "Mark and Melanie sat down with Taichi and Tonghui of Mercari at the Google NEXT conference."
draft = false
episodeNumber = 144
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Mercari with Taichi Nakashima and Tonghui (Terry) Li"
image="/post/episode-144-mercari-with-taichi-nakashima-and-tonghui-terry-li/images/Next18-GroupShot.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/M1EcLYTqirs"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9bau8a/episode_144_mercari_with_taichi_nakashima_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

This week we learn about how Mercari is handling migrating from an on-prem monolithic infrastructure to cloud microservices architecture with GKE. [Terry](https://twitter.com/ummterry) and [Taichi](https://twitter.com/deeeet) share with [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) what drove the decision for the change, the challenges and what the team has learned from the transition. The real value for this change has been about making the platform more scalable as they grow to meet the needs of their millions of daily active users. It's another great interview we captured out of Google NEXT.

<!--more-->

##### Taichi Nakashima

[Taichi](https://twitter.com/deeeet) is a tech lead for the microservices platform at Mercari. Prior to Mercari, he was a backend engineer at Rakuten, building internal Platform as a Service. Mercari chose microservice architecture as their next development platform, and built two teams to proceed with the migration. One is the microservice platform team that is building a platform that can deploy any microservices, and the other is the microservice development team that are focusing on migrating the current monolithic API to microservices. Mercari use GKE as a platform and GCP as the main infrastructure for microservices.

##### Tonghui (Terry) Li

[Tonghui](https://twitter.com/ummterry) joined Mercari in April 2018 and is responsible for migrating the monolithic backend API to a microservice architecture. Prior to Mercari, he was a tech lead of Indeed, working on different components of the job search engine including Title Normalization, Location system, Job Search API, and more.

##### Cool things of the week

* How to call the Cloud AutoML API from a web app [site](https://github.com/sararob/automl-api-demo)
    - GCPPodcast Episode 108: Launchpad Studio with Malika Cantor and Peter Norvig [site](https://www.gcppodcast.com/post/episode-108-lauchpad-studio-with-malika-cantor-and-peter-norvig/)
* Who is this street artist? Building a graffiti artist classifier using AutoML [blog](https://cloud.google.com/blog/products/ai-machine-learning/who-street-artist-building-graffiti-artist-classifier-using-automl)
* Datastore Transactions, Batches and Perf! [video](https://www.youtube.com/watch?v=626UFM0dy8g&list=PLIivdWyY5sqK5zce0-fd1Vam7oPY-s_8X&index=42) and [twitter](https://twitter.com/GCPcloud/status/1034077025244463104)
* Deploy only what you trust: introducing Binary Authorization for Google Kubernetes Engine [blog](https://cloud.google.com/blog/products/identity-security/deploy-only-what-you-trust-introducing-binary-authorization-for-google-kubernetes-engine )

##### Interview

* Mercari [site](https://mercari.com)
* Microservices on GKE at Mercari [site](https://speakerdeck.com/tcnksm/microservices-on-gke-at-mercari)
* Continuous Delivery for Microservices with Spinnaker at Mercari [site](https://speakerdeck.com/tcnksm/continuous-delivery-for-microservices-with-spinnaker-at-mercari)
* Microservices [site](https://microservices.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Terraform [site](https://www.terraform.io)
* Spinnaker [site](https://www.spinnaker.io)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
    - GKE On-Prem - Managing Across Hybrid IT Environments with Open Architectures (Cloud Next '18) [video](https://www.youtube.com/watch?v=w4rkYV4Chfw)
* Mercari on GitHub [site](https://github.com/mercari)
* BigQuery [site](https://cloud.google.com/bigquery)
* Mercari Engineering Blog [blog](https://tech.mercari.com)
* kubectl [site](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* Google Cloud AutoML [site](https://cloud.google.com/automl/)

<div style="text-align: center">
  <a href="https://twitter.com/deeeet/status/1022255276164968448"><img src="/post/episode-144-mercari-with-taichi-nakashima-and-tonghui-terry-li/images/Next18-GroupShot.jpg" style="margin: auto; max-width: 70%;"></a>
  <p style="font-size:0.8em">Photo credit: Taichi Nakashima</p>
</div>

##### Question of the week

How do I use my existing identity management system with Google Cloud Platform? [site](https://support.google.com/a/answer/60224) and [blog](https://cloud.google.com/blog/products/identity-security/using-your-existing-identity-management-system-with-google-cloud-platform)

##### Where can you find us next?

Mark is at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/). Find him and say hi.

In September, Mark will be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo) and Melanie will be at [Deep Learning Indaba](http://www.deeplearningindaba.com). You can find both of us at [Strangeloop](https://www.thestrangeloop.com).