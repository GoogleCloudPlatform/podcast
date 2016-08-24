+++
audioDuration = "00:33:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.40.mp3"
audioSize = 48297185
categories = ["Rodeo FX", "Customer", "Preemptible VMs"]
date = "2016-08-24T01:07:49Z"
description = "Mark is back right on time to interview Alan Fregtman, a pipeline developer working at Rodeo FX. Alan will explain how Google Cloud Platform enables Rodeo FX artists to create amazing visual effects faster."
draft = false
episodeNumber = 40
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Rodeo FX with Alan Fregtman"
image="/images/post/rodeo.jpg"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/J6QLazKQEhE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4zda0i/episode_40_rodeo_fx_with_alan_fregtman/"
+++

[Mark](https://twitter.com/Neurotic) is back right on time to interview
[Alan Fregtman](http://twitter.com/alanwritescode), a pipeline developer working at
[Rodeo FX](http://www.rodeofx.com/en/home).
Alan will explain how Google Cloud Platform enables Rodeo FX artist to create amazing visual effects faster.

Rodeo FX is very well known for their work on Game of Thrones, Deadpool, and many others.
I recommend watching this demo video to get an idea of their talent.

<iframe src="https://player.vimeo.com/video/175620233" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/175620233">Game Of Thrones - Season 6 - VFX Breakdown</a> from <a href="https://vimeo.com/rodeofx">Rodeo FX</a>.</p>

<!--more-->

##### About Alan

In the industry for 8 years ranging from commercials work to tv series and now film,
[Alan Fregtman](http://twitter.com/alanwritescode) (also on [imdb](http://www.imdb.com/name/nm4729415/))
has been holding technical roles throughout his career, beginning as a character
rigger and currently a pipeline developer at Rodeo FX in Montreal, where he has
been for the last 4 years. He specializes in developing tools for the CG side of
the film visual effects pipeline, including Rodeo’s integration of the Google
Cloud Platform for use in cloud rendering.

##### Cool thing of the week

- Cloud SQL, Cloud Bigtable and Cloud Datastore are now generally available
- Improved performance, security and platform support for databases (Low-latency for Google Cloud Storage Nearline storage)

[Announcement](https://cloudplatform.googleblog.com/2016/08/why-Google-Cloud-Platform-is-ready-for-your-enterprise-database-workloads.html)

##### Interview

- [Rodeo FX](http://www.rodeofx.com/en/home) has worked on many shows: [demo](https://vimeo.com/175620233)
- GCE Custom Machine Types to adapt to the movie needs [docs](https://cloud.google.com/compute/docs/machine-types#custom_machine_types)
- Preemptible VM instancesc for their reduced cost [docs](https://cloud.google.com/compute/docs/instances/preemptible)
- Salt Stack to keep all machines configured [docs](https://saltstack.com/)
- FDT: Fast Data Transfer for really fast transfer of ... data [docs](http://monalisa.cern.ch/FDT/)
- Creating a Google Cloud VPN [docs](https://cloud.google.com/compute/docs/vpn/creating-vpns)
- GlusterFS to manage their in-house file system [docs](https://www.gluster.org)

For more information:

- How GCP helps Rodeo FX extending their rendering capacity, presented by Jordan Soles [YouTube](https://www.youtube.com/watch?v=bPg4qYMhDWo)
- Videos by Rodeo FX on [vimeo](https://vimeo.com/rodeofx/videos)

##### Question of the week

How to create a Managed Instance Group from a VM?

1. Delete your instance keeping your disk
1. Create a custom image from your disk [docs](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images)
1. Create a new Instance Template with them image
1. Create an Managed Instance Group with the template

What if you can't delete the instance?

1. Create a snapshot from your running disk [docs](https://cloud.google.com/compute/docs/disks/create-snapshots)
1. Create a new disk from the snapshot
1. Go to step [2] above