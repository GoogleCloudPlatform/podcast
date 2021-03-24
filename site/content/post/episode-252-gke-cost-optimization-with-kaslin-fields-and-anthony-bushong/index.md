+++
audioDuration = "00:50:42"
audioFile = "Google.Cloud.Platform.Podcast.Episode.252.mp3"
audioSize = 72907887
categories = ["GKE", "Kubernetes", "Budgeting"]
date = "2021-03-24"
description = "This week on the podcast, fellow Googlers Kaslin Fields and Anthony Bushong chat with hosts Mark Mirchandani and Stephanie Wong about how to budget and optimize spending with Google Kubernetes Engine."
draft = false
episodeNumber = 252
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "GKE Cost Optimization with Kaslin Fields and Anthony Bushong"
image="/post/episode-252-gke-cost-optimization-with-kaslin-fields-and-anthony-bushong/images/hero/hero-EP-252.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/mcaqau/episode_252_gke_cost_optimization_with_kaslin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, fellow Googlers [Kaslin Fields](https://twitter.com/kaslinfields) and [Anthony Bushong](https://twitter.com/agmsbush) chat with hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Stephanie Wong](https://twitter.com/stephr_wong) about how to optimize your spending with Google Kubernetes Engine. 
 
Cost optimization doesn't necessarily mean lower costs, Kaslin explains. It means running your application the best possible way and accommodating things like traffic spikes while keeping costs as low as possible. As our guests tell us, standard best practices can aid in optimization, but when it comes to efficiently running on a budget, there are more tips and tricks available in GKE. One of GKE's newest operation modes, Autopilot, means Kubernetes nodes are now managed by Google. Customers pay by the pod so the focus can be on the application rather than the details of clusters and their optimization. Best practices for resource utilization and autoscaling are included with Autopilot.

Kaslin and Anthony break up Google's GKE cost optimization tips into four categories: multi-tenancy, autoscaling, infrastructure choice, and workload best practices and tell us how company culture effects these decisions. Proper education around Kubernetes and GKE specifically is the first step to using resources the most efficiently, Anthony tells us. Keeping tenants separate and resources well managed on multi-tenant clusters is made easier with Namespaces. Scaling pods and the infrastructure around them is an important part of optimization as well, and Anthony helps us understand the best practices for fine tuning the autoscaling features in GKE. Scaling infrastructure to handle spikes or lulls is an automatic feature with Autopilot, helping projects run smoothly. To control workloads efficiency, GKE now offers a host of features, including horizontal, vertical, and multidimensional pod autoscaling. 

Later, we walk through the steps for implementing some of these optimizations decisions while keeping your application running. GKE Usage Metering is a useful tool for measuring tenant usage in a cluster so resource distribution can be managed easier. 

##### Kaslin Fields

[Kaslin](https://twitter.com/kaslinfields) is a Developer Advocate at Google Cloud where she focuses on Google Kubernetes Engine.

##### Anthony Bushong

[Anthony](https://twitter.com/agmsbush) is a Specialist Customer Engineer at Google Cloud, where he focuses on Kubernetes.

##### Cool things of the week

* A2 VMs now GA—the largest GPU cloud instances with NVIDIA A100 GPUs [blog](https://cloud.google.com/blog/products/compute/a2-vms-with-nvidia-a100-gpus-are-ga)
* How carbon-free is your cloud? New data lets you know [blog](https://cloud.google.com/blog/topics/sustainability/sharing-carbon-free-energy-percentage-for-google-cloud-regions)
     * Our third decade of climate action: Realizing a carbon-free future [blog](https://blog.google/outreach-initiatives/sustainability/our-third-decade-climate-action-realizing-carbon-free-future/)

##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Best practices for running cost-optimized Kubernetes applications on GKE [docs](https://cloud.google.com/solutions/best-practices-for-running-cost-effective-kubernetes-applications-on-gke)
* Docker [site](https://www.docker.com)
* Autopilot overview [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
* Namespaces [docs](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
* Kubernetes best practices: Organizing with Namespaces [blog](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-organizing-with-namespaces)
* Optimize cost to performance on Google Kubernetes Engine [video](https://www.youtube.com/watch?v=ry7XfEHivgE)
* Using node auto-provisioning [docs](https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning)
* Scaling workloads across multiple dimensions in GKE [blog](https://cloud.google.com/blog/topics/developers-practitioners/scaling-workloads-across-multiple-dimensions-gke)
* Enabling GKE usage metering [docs](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering#enabling)
* Kubernetes in Google Cloud Qwiklabs [site](https://www.qwiklabs.com/quests/29)
* Kubernetes Engine Qwiklabs [site](https://www.qwiklabs.com/focuses/878?parent=catalog)
* Cloud Operations for GKE Qwiklabs [site](https://www.qwiklabs.com/focuses/5157?parent=catalog)
* Earn the new Google Kubernetes Engine skill badge for free [blog](https://cloud.google.com/blog/topics/training-certifications/how-to-get-the-new-optimize-costs-for-google-kubernetes-engine-skills-badge?utm_campaign=CDR_kas_GCP_earnkubernetesengine_031721)
* Beyond Your Bill [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKJx6FwJMRcsnFIkkNFtsX9)
* Cloud On Air Webinar: Hands-on Lab: Optimizing Your Costs on Google Kubernetes Engine [site](https://cloudonair.withgoogle.com/events/multi-cloud-challenge)
* Cloud OnBoard [site](https://cloud.google.com/training/cloudonboard)
* Adopting Kubernetes with Spotify [video](https://www.youtube.com/watch?v=eFE-X8FlyLQ)






