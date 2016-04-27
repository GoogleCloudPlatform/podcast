+++
audioDuration = "00:29:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.23.mp3"
audioSize = 42977562
categories = ["Humble Bundle", "Case Study", "App Engine", "BigQuery"]
date = "2016-04-27T01:07:49Z"
description = "Andy Oxfeld, Engineering Manager, tells us all the details about how Humble Bundle runs on Google Cloud Platform."
draft = false
episodeNumber = 23
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Humble Bundle with Andy Oxfeld"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/ZCu4ZRhXRuy"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4gp4i5/episode_23_humble_bundle_with_andy_oxfeld/"
+++

Andy Oxfeld, Engineering Manager at Humble Bundle,
tells your hosts [Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) all the details
about how Google Cloud Platform powers [Humble Bundle](https://www.humblebundle.com/friends-of-nintendo-3ds-wiiu).
<!--more-->

##### About Andy

Andy Oxfeld manages the engineering department at Humble Bundle.
He's been with the company for four years and worked on almost
every part of our codebase at some point. Prior to being at Humble
Bundle, he worked at Electronic Arts for four years on games
such as Warhammer Online: Age of Reckoning.

##### Cool thing of the week

- An independent organization just ranked Google as the best cloud, beating Amazon [news](http://finance.yahoo.com/news/independent-organization-just-ranked-google-205459705.html)

##### Interviews

- Humble Bundle has raised over $70 Million for charity.
- [App Engine](https://cloud.google.com/appengine/) to handle speaky traffic.
- Codebase written in [Go](https://golang.org).
- [Google Cloud Datastore](https://cloud.google.com/datastore/) to store data.
- [Task Queues](https://cloud.google.com/appengine/docs/python/taskqueue/) to be able to retry tasks (payments) and to schedule events.
- [Memcache](https://cloud.google.com/appengine/docs/python/memcache/) to reduce latency and increase throughput.
- [Dedicated Memcache](https://cloud.google.com/appengine/docs/python/memcache/#Python_Configuring_memcache) for heavy users and more predictable performance.
- Best Practices for App Engine Memcache [article](https://cloud.google.com/appengine/articles/best-practices-for-app-engine-memcache).
- [Datastore Backups](https://cloud.google.com/appengine/docs/python/console/datastoreadmin#backup_and_restore_data) into a [Cloud Storage](https://cloud.google.com/storage/) bucket.
- [BigQuery](https://cloud.google.com/bigquery/what-is-bigquery) to analyze huge datasets in seconds.
- __Using only managed services removes their need for DevOps team__.
- [Google Cloud Storage](https://cloud.google.com/storage/docs/overview) to store static images.
- [Stackdriver](https://cloud.google.com/stackdriver/) for monitoring and alerts.
- [PubNub](https://www.pubnub.com/) for real time communication - we also discuss [Channels API](https://cloud.google.com/appengine/docs/python/channel/) and [Firebase](https://www.firebase.com/).
- Join [Humble Bundle](https://jobs.humblebundle.com/) and work with Google Cloud Platform!

##### Question of the week

Kubernetes 1.2 doesn't have a concept of schedule tasks, how do you handle them?

- Kubernetes jobs [docs](http://kubernetes.io/docs/user-guide/jobs/).
- [Cron jobs](https://en.wikipedia.org/wiki/Cron) on [Compute Engine](https://cloud.google.com/compute/).
- Scheduled tasks with Cron on App Engine [docs](https://cloud.google.com/appengine/docs/python/config/cron).
