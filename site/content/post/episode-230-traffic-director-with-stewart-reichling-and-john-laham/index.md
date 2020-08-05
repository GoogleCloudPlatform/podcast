+++
audioDuration = "00:47:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.230.mp3"
audioSize = 68575067
categories = ["Distributed Systems", "Microservices", "Proxy", "Service Mesh"]
date = "2020-08-05"
description = "Oh the podcast this week, Mark Mirchandani and Brian Dorsey talk with fellow Googlers John Laham and Stewart Reichling about Traffic Director, a managed control plane for service mesh."
draft = false
episodeNumber = 230
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Traffic Director and Microservices with Stewart Reichling and John Laham"
image="/post/episode-230-traffic-director-with-stewart-reichling-and-john-laham/images/hero/hero-EP-230.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/i494po/episode_230_traffic_director_and_microservices/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Oh the podcast this week, [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) talk with fellow Googlers John Laham and Stewart Reichling about Traffic Director, a managed control plane for service mesh. Traffic Director solves many common networking problems developers face when breaking apart monoliths into multiple, manageable microservices. We start the conversation with some helpful definitions of terms like data plane (the plane that data passes through when one service calls on another) and service mesh (the art of helping these microservices speak with each other) and how Traffic Director and the Envoy Proxy use these concepts to streamline distributed services.

Envoy Proxy can handle all sorts of networking solutions, from policy enforcement to routing, without adding hundreds of lines of code to each project piece. The proxy can receive a request, process it, and pass it on to the next correct piece, speeding up your distributed system processes. But Envoy can do more than the regular proxy. With its SDX APIs, services can configure proxies automatically, making the process much more efficient. In some instances, the same benefits developers see with a distributed system can be gained from distributed proxies as well. To make distributed proxy configuration easy and manageable, a managed control plane system like Traffic Director is the solution. Traffic Director not only helps you facilitate communication between microservices, it also syncs distributed states across regions, monitors your infrastructure, and more. 

##### Stewart Reichling

Stewart is a Product Manager on Google Cloud Platform (GCP), based out of Cambridge, Massachusetts. Stewart leads Product Management for Traffic Director (Google's managed control plane for open service mesh) and Internal HTTP(S) Load Balancing (Google's managed, Envoy-based Layer 7 load balancer). He is a graduate of Georgia Institute of Technology and has worked across strategy, Marketing and Product Management at Google.

##### John Laham

John is an infrastructure architect and cloud solutions architect that works with customers to help them build their applications and platforms on Google Cloud. Currently, he leads a team of consultants and engineers as part of the Google Cloud Professional Services organization, aligned to the telco, media, entertainment and gaming verticals.

##### Cool things of the week

* Week four sessions of Cloud Next: Security [site](https://cloud.withgoogle.com/next/sf/sessions#security)
* Weekly Cloud Talks by DevRel Week 2 [site](https://cloudonair.withgoogle.com/events/talks-by-devrel)
* Weekly Cloud Talks by DevRel Week 3 [site](https://cloudonair.withgoogle.com/events/talks-by-devrel?talk=infrastructure-weekly-recap&utm_source=google&utm_medium=blog&utm_content=next-devrel-wk3-recap)
* Cost optimization on Google Cloud for developers and operators [site](https://cloud.google.com/solutions/cost-efficiency-on-google-cloud)
     * GCP Podcast Episode 217: Cost Optimization with Justin Lerma and Pathik Sharma [podcast](https://www.gcppodcast.com/post/episode-217-cost-optimization-with-justin-lerma-and-pathik-sharma/)

##### Interview

* Traffic Director [site](https://cloud.google.com/traffic-director)
* Envoy Proxy [site](https://www.envoyproxy.io)
* NGINX [site](https://www.nginx.com)
* HAProxy [site](https://www.haproxy.com)
* Kubernetes [site](https://kubernetes.io)
* Cloud Run [site](https://cloud.google.com/run)
* Service Mesh with Traffic Director [site](https://cloud.withgoogle.com/next/sf/sessions?session=NET206&gate=true#infrastructure)
* Traffic Director Documentation [site](https://cloud.google.com/traffic-director/docs/traffic-director-concepts)
* gRPC [site](https://grpc.io)
* Traffic Director and gRPC—proxyless services for your service mesh [blog](https://cloud.google.com/blog/products/networking/traffic-director-supports-proxyless-grpc)

##### Tip of the week

[This week, we're talking about IAM Policy Troubleshooter](https://www.youtube.com/watch?v=CbU2NKX6Dxc).
     
##### What's something cool you're working on?

Brian is working on the Weekly Cloud Talks by DevRel we mentioned in the cool things this week and continuing his Terraform studies.

Check out the [Immutable Infrastructure](https://www.youtube.com/watch?v=78pkMNXDAjk) video we talked about last week.

##### Sound Effect Attribution

* "Jingle Romantic" by Jay_You of [Freesound.org](https://Freesound.org)


