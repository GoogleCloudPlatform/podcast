+++
audioDuration = "00:37:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.257.mp3"
audioSize = 53946340
categories = ["Kubernetes", "GKE"]
date = "2021-04-28"
description = "Kaslin Fields joins Stephanie Wong hosting the podcast this week as we talk all about GKE Autopilot with our guests Yochay Kiriaty and William Denniss."
draft = false
episodeNumber = 257
hosts = ["Kaslin Fields", "Stephanie Wong"]
title = "GKE Autopilot with Yochay Kiriaty and William Denniss"
image="/post/episode-257-gke-autopilot-with-yochay-kiriaty-and-william-denniss/images/hero/hero-EP-257.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/n0jh7t/episode_257_gke_autopilot_with_yochay_kiriaty_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Kaslin Fields](https://twitter.com/kaslinfields) joins [Stephanie Wong](https://twitter.com/stephr_wong) hosting the podcast this week as we talk all about GKE Autopilot with our guests Yochay Kiriaty and William Denniss. GKE Autopilot manages tasks like quantity and size of nodes so deploying workloads is faster and machines are used efficiently. Autopilot also offers cluster management options, including monitoring the health of nodes and other components.

William and Yochay explain that GKE Autopilot was built to aid companies in the efficient use of resources and give clients more time to focus on their projects. Important efficiency features that are optional in GKE, like multidimensional pod autoscaling, are employed automatically for clients in Autopilot, giving clients peace of mind. Kubernetes best practices are auto-deployed for projects so clients can rest assured things will run as quickly and smoothly as possible without extra work.

Kubernetes is a great way to manage containers, and our guests describe cases where this tool is best suited. We compare GKE standard mode and Autopilot, and Yochay tells us when developers might choose standard mode to allow for more specific customization. He talks about migrating between standard and Autopilot clusters with the goal of easy migration by the end of this year. Security is important for GKE, and we talk about the Autopilot security configurations and why they were chosen. 

Later, our guests walk us through the process of a Kubernetes project on Autopilot, highlighting decisions this tool makes automatically for you and why. Though Autopilot sounds very much like a serverless offering, William explains the differences between tools like Cloud Run and GKE Autopilot. We also hear about the future of Autopilot, including some exciting new features coming soon.

##### Yochay Kiriaty

Yochay is a Product Manager for GKE responsible for security.

##### William Denniss

William is a Product Manager for GKE Autopilot. He's currently writing a book called Kubernetes Quickly.

##### Cool things of the week

* Google Cloud Region Picker [site](https://gcp-region-picker.web.app)
     * Faster, cheaper, greener? Pick the Google Cloud region that’s right for you [blog](https://cloud.google.com/blog/topics/sustainability/google-cloud-region-picker-helps-you-make-the-green-choice)
* 5 resources to help you get started with SRE [blog](https://cloud.google.com/blog/products/devops-sre/5-google-sre-resources-to-get-started)

##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Autopilot Overview [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
* GCP Podcast Episode 252: GKE Cost Optimization with Kaslin Fields and Anthony Bushong [podcast](https://www.gcppodcast.com/post/episode-252-gke-cost-optimization-with-kaslin-fields-and-anthony-bushong/)
* Multidimensional Pod Autoscaling [docs](https://cloud.google.com/kubernetes-engine/docs/how-to/multidimensional-pod-autoscaling)
* Docker [site](https://www.docker.com)
* Cloud Run [site](https://cloud.google.com/run)
* Introducing GKE Autopilot: a revolution in managed Kubernetes [blog](https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot)
* Creating an Autopilot cluster [docs](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster)

##### What's something cool you're working on?

Kaslin has been working on [KubeCon EU](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/?utm_source=Google&utm_medium=Paid%20Search&utm_campaign=KubeConEU2021&gclid=Cj0KCQjwyZmEBhCpARIsALIzmnJ3JrhGFhjhoQyfSffVlYY_X_MNWR_oUQoR9HdXwxj0VLZlrmTpMLEaApKIEALw_wcB) as a volunteer and will be presenting there as well.

 {{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 257 of the weekly Google Cloud Platform Podcast. I'm Stephanie Wong. And today, I am here with Kaslin Fields. Hey, Kaslin." >}} 

KASLIN: Thanks for having me, Stephanie. I'm Kaslin Fields, and I'm a developer advocate at Google Cloud, where I focused mainly on Google Kubernetes Engine. As a developer advocate, I aim to work with users and developers to understand their needs and to advocate for those needs internally. 

STEPHANIE: Yes. Thank you so much for joining me, Kaslin. You are such a perfect person for today's episode. And I'm really excited about our topic today. We are going to be talking about one of our most exciting launches this year, GKE Autopilot. 

It's a new mode of operation GKE that we've been waiting for. Developers can focus on their workloads and leave the management of underlying infrastructure on Google SREs. We are talking to two product managers who have worked on Autopilot's inception, Yochay Kiriaty and William Denniss. Before we jump into that, let's cover the cool things of the week. 

[MUSIC PLAYING] 

KASLIN: Our first cool thing this week is a new Google Cloud Region Picker. It's a tool that helps customers assess key inputs, like price, latency to their end users, and very importantly, carbon footprint, as they choose which Google Cloud region to run on. There's a blog post where you can learn more. And you can find links to both the blog post and the Region Picker tool in the description for this episode. 

STEPHANIE: Yeah, it's a great tool with levers you can push and pull for all of those things. So definitely check that out we're going to have the links in the description. And my cool thing is a blog post about five resources to get you started on SRE. 

SRE is Site Reliability Engineering. It's an essential part of engineering here at Google, a mindset, a set of practices to ensure systems reliability. But not everyone knows the best places to start to implement SRE in their own organizations. 

So this blog post outlines our top resources at Google Cloud for getting started, things like assessing your journey, SLI and SLO fundamentals and more all right without further ado, let's jump into our conversation with Yochay and William. 

[MUSIC PLAYING] 

All right. Yochay and William, welcome to the "GC Podcast." I'm super excited to have you both on. Why don't you just go ahead and start by telling us a little bit about your role in what you do here at Google Cloud. 

WILLIAM: Thanks for having us. I'm William Denniss a product manager at Google Cloud. And I'm product manager for GKE Autopilot. My goal is to make the best managed Kubernetes platform for all the developers and operators out there. I'm also writing a book on Kubernetes called "Kubernetes Quickly." 

YOCHAY: Hi everyone, and I'm Yochay Kiriaty. I'm also a product manager on the GKE team responsible for security and basically the cluster lifecycle management. 

KASLIN: Awesome. So to kick us off here, I'd love it if you could tell us a little bit about GKE Autopilot. What is this new thing that we're talking about today? 

WILLIAM: Right, so GKE Autopilot is a new mode of operation for GKE, where we're automating a lot of the operations that you would previously have to worry about on GKE. For example, in the past, when you create a cluster, you would have to be thinking about how many nodes that you want to-- nodes being virtual machines. 

So you'd have to think about, like, if I'm going to deploy Redis, I may need to create three nodes of two cores each. And then you would deploy the application and sort of hope that it fit on those nodes. Or maybe you'd set up auto scaling. But thaere was kind of a lot of work you would have to do. 

So with Autopilot, one of the first things that you will notice if you go and use it is you can just deploy a workload. And we figure out what quantity and size of machines that are needed to run that. There's a lot of other benefits, as well, kind of beyond that starting experience. 

Google also takes more operational responsibility over these clusters. So once the nodes are created for you, we also actually manage them more. We have a three nines pod uptime SLA for the first time on GKE that covers your workloads that run on these things. And we changed how they're built as well. 

STEPHANIE: So you mentioned that this is a new, managed mode of GKE. And so we hear managed a lot in Cloud. What is managed in this case? How much is managed? 

WILLIAM: So in this case, in the past, you would have to worry if your VMs were running or not. And there's certain software running on those VMs that in the past no kind of Google operator was monitoring the health of, things like Kube-DNS. So with these new product, the Google team has more signals. We have a 24/7 on-call that's looking at these nodes to ensure that everything's running. 

It's essentially just taking over more of that responsibility of the kind of platform-level components. The goal here, and the North Star, would be that the only component that you would need to worry about, that your own SRE team, if you have it, or just ops team would need to worry about would be whether or not your actual service itself is running, and not needing to care about the health of the underlying components. 

KASLIN: So I feel like we've been through kind of a journey over these last several years with Kubernetes, from Kubernetes being open-sourced, and then the cloud providers started coming out with the managed services, which started to make running Kubernetes is a little bit easier. And then we started to have this serverless thing too. So what was kind of the impetus between creating this Autopilot mode of operations for GKE? And how does it kind of fit into this process? 

WILLIAM: The goal of Autopilot, really, is to create the best possible managed Kubernetes platform. It essentially assumes that you want to use Kubernetes. So when you talk about comparisons to other technologies like serverless, that's kind of a different architectural decision that you're making. And it can be a very good one, there are some applications that are very, very suited towards that. 

But this product is explicitly designed to create the best Kubernetes platform that we think we can offer. So, if you want to use Kubernetes, and there are lots of reasons, I think we're probably going to get into later, of why that would be the case. But when you've kind of decided that you're going to be architecting on Kubernetes, from that point on, we wanted to create the best possible platform, the most fully-managed platform we could to serve Kubernetes workloads. 

And so that was why we introduced it alongside GKE standard as a mode of operation to give people a more automated way to use it and a way to focus on just the Kubernetes constructs. 

YOCHAY: One of the largest pain points we are addressing with the GKE Autopilot is seams, or the connection point between Kubernetes and GCP, specifically node pools, and VMs, and nodes, and managing all of that, as William mentioned before. That was one of the biggest things. We have great evidence of customers' difficulties with this, which usually translate into highly inefficient node pools and resource usage. 

So one of the things that we are addressing with the Autopilot is, from the customer point of view, we are just providing that experience. Like, hey, you don't need to really care about those kind of resources anymore, you just deploy your pods and magic happens. 

And an additional benefit that happened out of this is basically the resource efficiencies will be high end on that part. But this is something that Google is on the hook to solve, but the customer doesn't really care. And with that in mind, it can really focus only on specific Kubernetes API that they care for their applications. 

WILLIAM: Yeah, and if I could expand on that, you mentioned, Yochay, that in the past, people would have to use node pools and configure that. So I think a good way to look at this is to think that Kubernetes itself is an API, which you use to describe your deployments. And then, sitting under that, with GKE Standard is an entire other API, which is the GKE API, which has things like the node pool API, where you configure node pools, where you configure auto scaling, where you turn features on and off. 

What we did with Autopilot is that we essentially reduced the GKE API down to, like, one call, which is create cluster-- list clusters, delete clusters, what have you. But it's really that one call. You don't have the rest of the complexity of that API, so you issue one command, or you do it in the UI, you create the cluster. And from that point, you only have to deal with the Kubernetes API. So it vastly simplifies the developer experience there. 

STEPHANIE: Yeah, and I find this really interesting, because Kaslin, you and I had a conversation just a couple episodes ago with Anthony Bushong about how, when it comes to cost optimization, we talk about horizontal versus vertical pod auto scaling, we talked about how that includes scaling pods or scaling infrastructure cluster auto scaling, where you're managing the CPU and memory. And in comparison to VMs with, like, managed instance groups, you have to set the CPU utilization for the VM. 

But for pod requests on Kubernetes, you're inherently tied to the allocation of resources, and you only get a set of CPU and memory on the VM. And so you can only scale to the available node pulls in the cluster. And you have to be able to allocate enough nodes for the workload, while remaining as efficient as possible. 

So it seems like along with the simplicity, the beauty of Autopilot is that you only now need to worry about the pods, while allocation of resources is handled for you. 

WILLIAM: Yeah, exactly. In fact, this works really well with the horizontal pod auto scaling and the vertical pod auto scaling. It's exactly like you said. In the past, you would have to configure both. You would have to have your pod scaling, and then you'd have to have nodes scaling as well, kind of independently to match that. Whereas with this, everything scales kind of perfectly with the HPA, with the horizontal pod auto scaling. And you literally only pay for the pods that the HPA would create in that case, and there's no overhead. 

KASLIN: And another great thing to mention there would be the multidimensional pod auto scaler, which is also a new thing that we've been coming out with. 

YOCHAY: So, HPAs and VPAs are on by default, and multidimensional auto scaling is basically just GA as well, as we'll be-- soonish will be integral into part of Autopilot. But the main aspect of it is that, again, the core emphasis is that with those technology, basically, the node pools that have been created for you are heterogeneous. It's like, we don't really care for the shape and size of the VM that's actually supporting your workloads, as long as we have enough off and big enough machines to basically run all your workload. 

We are thinking about some other aspects in the future in terms of a number of pods per VM and, so forth. We might get to talk a little bit later. But the bottom line is, all those features that are being created in our optional, in standard, are basically being integrated as part of the basic offer within Autopilot to kind of streamline that experience. It's obviously just to provide the best practices that we believe are true for any cluster running on GKE. 

KASLIN: So we've talked a lot about how GKE Autopilot mode kind of streamlines the path from getting your apps onto Kubernetes, and the ways that it provides this even more managed to than previous managed Kubernetes community services offering. But a lot of folks are still getting started with understanding Kubernetes itself and why they might want to use that. So can you speak a little bit to why folks might want to use Kubernetes in the first place? 

WILLIAM: Yeah, absolutely. So Kubernetes is described often as a container orchestrator, which is really just a fancy way of saying it manages containers for you. And perhaps, before we talk about the orchestration part, a brief word about containers. Containers is kind of the modern way to package an application. 

In the past, you might have uploaded binaries to a host. And then by and by, that replaced with creating virtual machines, that you could package things up in virtual machines. And containers is kind of the last iteration of that. 

They're a lot more lightweight than containers, because you share common resources, like the kernel, between the instances. So they're all more lightweight in terms of the size and also execution. But you also get a lot of the same benefits of, like, isolation, and so on and so forth. 

So where Kubernetes comes in is, once you move to containers and you want to allocate, like, 10 containers onto a host, or 20, or however many it is, you need some way to do that. And you can do that without Kubernetes. You can just install Docker and just start running containers if you like. But then you have problems of, like, well, what happens if a host were to go away, like, a hardware fault? 

And what about if you need to attach storage to that container and have that storage persist between that container moving from one host to another, and a lot of things like that. Not to mention, you know, how to kind of pack things in really tightly. 

And so Kubernetes comes along, and provides that orchestration layer, and sort of solves that problem for you by helping you place all those containers on hosts and keep them running. And how it works is that you essentially create Kubernetes objects, like a deployment or a stateful set, that specifies these workloads. And then Kubernetes has the job of allocating those containers and keeping things running. 

As to why it's so popular, I think one of the reasons is that it's a very, very expressive API. You can certainly run, like, a stateless web application, you know, which is like kind of classic, easy to deploy application. So you can definitely do that. But it can also do lots of other things, like if you want to run MariaDB with stateful, like, block storage attached, you can run that, if you want to run Redis, or if you want to render a movie frame-by-frame. 

All these different types of workloads can be describing Kubernetes terms, and the platform can handle it. So I think while there's a bit of a learning curve, the expressiveness of the platform makes it a valuable skill to learn. And you can really kind of solve most deployment problems that you have. 

STEPHANIE: Yeah, and while Kubernetes is the latest iteration of this trend towards streamlining, running workloads, Autopilot is, in some ways, the latest iteration of a more simplified experience on GKE. And what I noticed is that there is a trend towards this maturity of Kubernetes users, and even if people are still in the beginning of their journey. What we're now instilling in our customers is more of an opinionated stance on what these best practices are. And we're building that now into a new mode that people can get up and running very quickly with GKE Autopilot. 

And I have to ask the inevitable question that we're going to get from our developers. But when would someone, in fact, use standard mode over Autopilot? 

YOCHAY: The ideal situation would be, like, try to use Autopilot, or use Autopilot as default, or basically anything that you are trying to do with the GKE or Kubernetes. Our goal is to get Autopilot to the extent that it is completely as compatible with Kubernetes API as possible. With that in mind, we do have some constraint, because in order to provide that level of SLA and management, we need to control some aspects of the node and the Kubernetes deployment. Henceforth, we have a little bit of-- few sets of constraints. 

The most notable one is that you can't run any privileged pods, because you have the capabilities of mutating the node to the point where we would no longer be able to provide a managed experience for you. So there are a few constraints. They're all listed. 

And basically, if your workload meets those constraints, then first you need to figure out, hey, do I really need to provide my workload those constraints? Because some of them would improve the little bit of your security posture, some of them would improve your manageability aspect of it. They're all created to enable our team to carry that pager for you in terms of how to know how the Kubernetes components on the nodes are running. So there will be number one, those constraints. 

With that in mind, we do have customers that, for a number of reasons, need that extra level of control over the node, for whatever reason. They need some sort of optimization. We have a customer that needs to basically stripe SSDs across multiple nodes VM to create a virtual disc, to do a bunch of stuff. So all of those experiences are very highly optimized, usually comes with a very seasoned operational teams as well that can actually carry and manage that job for you. 

Even at that point, even for those kind of scenarios and examples, I would bet that the majority of dev and test clusters, or environments, could actually benefit from Autopilot, irrespective of those special configurations that you have for your deployment. You can have 10, 15, 20 production clusters that are highly optimized, but you can also have 200 other clusters that are used for dev tests. And those also need to be managed if they're on standard, to a certain extent. They're easier to recreate, but still, you need a lot of work to be able to handle that. 

With that in mind, basically, this is how I would say. I would say if you're already using Kubernetes, and you're hooked with Kubernetes API, start with Autopilot. And then for whatever reason, that doesn't work for you, you can go with standard. And we have the tools. And I mean, the developer experience has a dry run. And you can verify in advance if any of your workloads violates any of the Autopilot constraints that we have. 

KASLIN: So speaking of the constraints, and the differences between reasons folks might want to use Autopilot versus standard mode, we've talked about how there are a few different cases, like wanting to have more control over the nodes, or certain constraints in Autopilot mode, which may mean that people want to use standard mode. But with all of the awesome managed capabilities that can make things a lot smoother with Autopilot, a lot of folks might want to start there, and maybe move into a standard later if they find that maybe they have some needs that Autopilot isn't well suited for. So what is the process like if people want to migrate between standard and Autopilot mode? 

YOCHAY: Today, if you start, you can't really migrate in between the two. But we are on the verge of providing the capability of supporting migration from Autopilot into Standard. So you can create a cluster in Auto, and you can start work. And if, for whatever reason, you need that extra level of control and the constraints are blocking you, then you can basically perform a one-time operation that will convert your Autopilot clusters into GKE Standard. 

In details of what it will do, it will do an upgrade, in-place upgrade on your node pool, and will remove the constraints that we have. What you'll end up getting is a GKE Standard cluster with all the bells and whistles that was configured for your Autopilot. So you'll get the best configuration that we can guarantee at this point. 

However, you will be on the hook for the node pools, and management of those nodes and so forth, which is what we give you with Autopilot. So that's one way, from Autopilot to Standard. From Standard to Auto, currently we don't have any automation. There's easy way to kind of verify. 

So you can do basically Kube Cuddle apply with dry run on the server. This will basically go through your deployment and provide you a list with anything that is violating the rules, and you can-- go ahead and start fixing them. Once you've done that, currently, you'll need to create a new cluster and migrate. 

Sometime in the future, we have to see exactly when, we are planning on the idea of trying to automate the procedures. So once your workload is capable of running on Auto, then we will be looking to automate either an in-place, or we'll see how exactly we'll do it, to automate the experience of migrating from GKE Standard cluster into a GKE Autopilot cluster. So hopefully by end of year, we'll have easily migration in between the two. 

STEPHANIE: Yeah. So you have a lot more coming down the pipeline this year in terms of features and more flexibility built into it. But I also hear that there are new features around security and networking that you're going to be covering in a series of blog posts. So can you talk a little bit about this series? 

YOCHAY: As I said about the migration from Auto to Standard, we believe that the Autopilot cluster, in terms of configuration, has an optimized configuration for production, basically. It's very easy to create the Kubernetes cluster today on GKE. You can gcloud create containers, and you get the default, and something is running and working. But I wouldn't take the default standard container just like it is into full-blown production, right? For a number of reasons. 

With Autopilot, it's pretty close to that level, from perf and scale, and most of the security configuration, and security posture that is provided with Autopilot by default. The delta is very minimal in terms of what action you need to take it to production. So what we are planning to do is come out with, basically, a list of blog that will provide insights into, hey, why is the Autopilot configuration looks like it is? 

Because if you migrate in Auto from Standard, you'll see all the configuration. In any case, you can see all the configurations. It's like, Kube Cuddle will give you all the information that you need to know about your cluster, including node structure, sizes, and all of that. 

So we're not hiding anything. And on the contrary, we want to basically explain why have we made the decision of the feature of Autopilot configuration and setting the way that we did it. Security is one of them. Network, the amount of nodes, the size of the cluster, all of those also in terms of very importance for IP starvation, or IP usage, or waste, to be more accurate. We have the same thing with security, performance, overall config and manageability. 

So we will come up with a series of blogs [INAUDIBLE] provided insight into why is Auto cluster configuration as it is. 

KASLIN: So there are a lot of great new tools that Autopilot gives us that help to manage the experience of using Kubernetes. We talked about how, with Autopilot mode, you're not really dealing with the nodes anymore. Google is kind of handling spinning up the nodes, and choosing the sizes, and doing things like that. And I'm sure a lot of operators out there who have to deal with hardening nodes, and spinning up nodes, and dealing with nodes a lot of the time are wondering how this could change the way that they interact with clusters. So what are things that operators would no longer have to worry about with GKE Autopilot? 

WILLIAM: There's a lot to unpack here, so maybe just starting with the resource allocation. And so one thing is that operators no longer have to worry about the cluster resources. So they can just-- in the pod spec, [? deployment, ?] specify the resources that you need, and then we'll create the appropriately sized cluster. 

That may not sound like a big deal, but it actually eliminates, like, a lot of toil. In the past, you would need to be quite concerned about what different nodes you needed to handle different workloads. And certainly, we have a lot of auto scaling features, so you can kind of configure it. But you would need to configure it appropriately. Whereas, with Autopilot, you sort of focus at the Kubernetes layer, specify your pods correctly, and we'll bring up the infrastructure to match. 

This also helps around things like bin packing. So a common concern would be, well, I've allocated enough resources. Have I allocated too much? Right? Or what about the empty space because I've packed in a bunch of pods, but there's like a little bit extra on the nodes that's kind of getting wasted. Do I have to try and create, like, a small workload that can fit in and kind of utilize that space, or do I need to enable bursting? There's kind of all these questions trying to get the most efficiency out of it. 

Since we now charge per pod resource request, you no longer have to worry about the bin packing. That's essentially Google's problem. Maybe we're not going to be that great at doing that at the beginning. You don't really care. It's the same price for you, and something for us to optimize now, not you. So that that's a huge saving there. 

Another one I hear often is around, like, kind of cost chargebacks, too. If you run a big cluster with a bunch of different teams using it, you probably care about, which team is consuming these resources? That's a common question. 

So, when you have multiple teams sort of sharing nodes, it can actually be hard to know which portion of that node cost should get allocated to what team, you know? And you have to kind of look at, well, OK, you know, we've got three of team A's pods on this node, and two of team B's, and you look at the size. And then you're like, OK, what about the system workloads on that pod, right? What about the unallocated capacity? Who pays for that? 

With our new model, here, it's simple arithmetic. You can just look at the pod resource requests, times it by our price sheet, and that's how much people are paying for it. You don't have to worry about all these other questions. 

As far as monitoring is concerned, the Google team is doing a lot more monitoring of the solution. So in the past, certainly not everyone was doing this, but some customers I spoke to, they had dedicated teams looking at the health of VMs, at the health of nodes at various metrics there. And that's something that perhaps you don't need to do as much anymore as well. 

YOCHAY: On the hardening side of things, partially because we were blocking some access to the nodes, for example, you can't really SSH into a node, which is one common request that we are having, one of the requirements that needs to happen on some of the compliance regimes that are accessible there. We've done some work to basically try to follow as much as we can from the CIS benchmark and GKE hardening guard lines to be able to provide a core hardening for GKE. 

Most of the items under the GKE hardening guidelines are automatically enabled and configure for GKE Autopilot. And the rest probably would be once we finish some gaps. Those, again, tools and existing features that GKE has accumulated over five years that ideally would be on by default, but if we just turned them on by default, there would be some side effect that may not be desirable for some customers. 

With Autopilot, it's kind of a fresh start for us. So we can pull all of that experience in. And we've documented a lot of the stuff that we also plan to do in the future as well in dev terms, so there'll be no surprises down the road. 

STEPHANIE: Yeah, so it's pretty clear that it's handling a lot of these tasks and simplifying even chargebacks to teams, and how you would organize these teams. So would you agree that this effectively lowers the learning curve for GKE? And how important do you think it is for operators, and even developers, to understand the resource side of things? 

YOCHAY: The short answer is yes but, obviously, like everything in life, slightly more complex. It does reduce the learning curve, that's for sure. It's completely reduced, or eliminates, the infrastructure conversation. 

It removes the need to understand GCP, node pools, VMs, and all of that stuff from GKE. It doesn't solve any of the learning curve that's required to basically create your deployments and everything that is associated with the Kubernetes API, a.k.a. all the yamls. So those don't really go away. 

But it allows you to purely focus on your Kubernetes API without the need to learn too much of the GCP underlines to understand how it all works together. Obviously, it's desired that you do understand how everything works together eventually. If you want to run a large and meaningful production environment within GCP, there is a little bit more than just running your computes. But at least if you want to start, it definitely reduces the learning curve for GKE/GCP initially. 

WILLIAM: It's kind of a more pure Kubernetes platform, I think, where you focus just on the Kubernetes layer. And so, if you're coming from another Kubernetes platform, for example, or if you have a good book on Kubernetes, everything that you've learnt from that should be applicable to this platform. You don't have to kind of relearn on a bunch of things. 

I like to kind of say, you know, we're implementing Kubernetes kind of warts and all. So like, Kubernetes is not perfect, right? Nothing's perfect. There are some rough edges to it. We're not actually trying, for the most part, to smooth over those rough edges, right? What we're trying to do is give you all of Kubernetes in a platform. 

So what that means is that you read a book about Kubernetes, you watch a video, you learn how to use it with, like, minikube, or the included vision of Kubernetes that comes with, like, the Docker desktop, or use it on another cloud, or on prem, or wherever, on a bunch of Raspberry Pis, you can then just move those workloads, run them on Autopilot with hopefully no modification at all, because it's providing the full Kubernetes experience. We're trying not to deviate from that. And where Kubernetes is complex and has a bit of a learning curve, sure, that's still there. 

KASLIN: A lot of the new features and capabilities that Autopilot introduces kind of sound a lot like serverless. I've seen a few people comparing it to serverless offerings. It feels kind of like this serverless mindset of, I want to just focus on my code, and making sure that my apps are running, and I don't want to worry about the underlying infrastructure component. So can you talk a little bit more about how GKE Autopilot mode is different from serverless offerings, like Cloud Run? 

WILLIAM: Yeah, I guess the simple answer is, it's that, but for Kubernetes. That's the goal. The longer answer would be it all comes down to the API. If you're designing around the serverless API, which is kind of request-driven, very rapid scaling, then that's great. You should be using that. 

If you have other needs, though, maybe more traditional needs, you have a server that runs, like you want to run Apache, which is server process that is listening on a socket for connections. Anything like that, you often find yourself walking down the Kubernetes path. And so why should the serverless people have all the fun, right? Like, we should have a good platform for these other applications. 

And I'm not going to judge you if you want to run Redis or MariaDB or something in your cluster, you know? That's a very, very common use case, right? So we want to have a platform that can handle all these other things. And it really just comes down to the API. 

If you believe that the Kubernetes API is the right API to represent your deployments, then we think this is a really, really good solution. I'm sure the serverless team will definitely make the case for serverless. And it's a really exciting product as well. If you have something that can be delivered by serverless API, then that's probably the right path for you. So I think it really depends on what your deployments look like, and how complex they are, and maybe how much, like, legacy stuff you have, you know? 

But one thing I've had a couple of times from people is like, multiple teams in the company, and they're not all using the same technology. And so one nice thing about Kubernetes is that it pretty much allows you to platform everybody on the same technology stack. You can run serverless on Kubernetes, and you can run databases, and custom, stateful things that almost look like VMs on Kubernetes. So there's a very wide range of workloads. 

And the takeaway is, if you want the Kubernetes API, then you need to use Kubernetes, obviously. And we think that this is the best way to use Kubernetes. If that model works for you, then use Cloud Run fully managed, and you'll have a great time on that product as well. 

STEPHANIE: Nicely said. And I have to admit, the only thing I could hear in my head while you were talking was, Kubernetes just wants to have fun, or GKE, in this case. 

[LAUGHTER] 

No competition there with serverless, but great explanation of that. So just to touch on pricing a little bit, I mean, it is more expensive. So what's the deal with your position on that? 

YOCHAY: It's listed as more expensive, but what you're getting-- a few things. As we mentioned through the other answers, you no longer need to manage any of the resource utilization that you have, or nodes, or VM, or node pools. So what data shows-- and there's also many external example that believes the annual Datadog report. The last one suggested that a lot of customers, like up in the 80s, are running extremely highly inefficient Kubernetes deployment because it's hard for users to figure out, like, what's the right resource [INAUDIBLE]. 

The limits are not required. A lot of people just don't configure them. And anyway, long story short, there is huge inefficiencies. So we believe that by focusing on the pods, providing the whole experience around the Kubernetes API on the pod level, we are basically no longer creating the need to create managed VMs and node pools. And with that in mind, you're basically paying just for the pods. 

And in retrospective, we believe that majority of customers, definitely on the smaller clusters, will basically not see any impact. Could be a wash, because we'll basically just pack better for them. And comparing to what they're using today, with all the inefficiencies that are built in will basically go away for them, because they're literally just paying for the pods. 

So it may seem more expensive. In reality, I believe that it won't be an issue. 

WILLIAM: Yeah, if I could add something just on the inefficiency question. This one definitely comes up a lot, because people do a comparison of like, hey, looks like it's a little more expensive. What's the deal? But right now, the node resources get spent on four broad categories. 

You have the kubelet and the kernel overhead, which is essentially the operating system and the Kubernetes overhead. So that's kind of one category. There's a second category, which is system pods. So system pods, like kube-proxy, take up some resources. Then you have your workloads, which is the actual thing you want to run. And then finally, you have the unallocated space. 

They're kind of like four buckets where those node resources get spent. With GKE Autopilot, the only one bucket that you pay for is your pods. You're not paying for the operating system overhead. You're not paying for the system pods. As Yochay mentioned, you're not paying for the unallocated space, which actually we see is-- can constitute a fairly high percentage of the cluster. 

So by eliminating the charges, essentially, for those three categories of where your results get spent, and only billing for the pods, take a look at it, you might be pleasantly surprised, if you compare it correctly like that. Do an apples-and-apples comparison of like, how much am I paying for my pods on the standard mode of operation, how much am I paying for my pods on Autopilot? That's a fair comparison. Not like, one CPU versus one CPU, because there's all that overhead. 

So yeah, as Yochay mentioned that for a lot of people, it might be close to a wash. And that's, of course, before you factor in all the benefits, like lower operations cost and better developer efficiency. So we think that's pretty competitive on the pricing. Definitely encourage you to do your own analysis there and arrive to your own conclusions. But don't get put off by the sticker price. It's not exactly apples to apples. 

KASLIN: I've recently been talking with customers and users about Autopilot mode versus Standard mode. And I was talking to a user who uses Horizontal Pod Autoscaling to scale out replicas of their deployments. And they mentioned, for example, in the evening, they'll scale down their deployments, as not as many people are using them, so they don't need to be running all of those pods. 

But in GKE Standard mode, where you're paying per node, if that autoscaler happens to leave just one or two pods running on a node that's not using that node very efficiently, then something like Autopilot, where you're paying per pod, could be a better solution to make use of that more efficiently. So that's another case where this using resources more efficiently and paying per pod kind of comes into play. 

WILLIAM: And certainly, like, for dev test clusters as well, with Autopilot, you can just kubectl delete the pods of your testing namespace before you go home for the weekend, and you won't be paying for anything. It's a good habit to have. 

STEPHANIE: So I want to talk about some of the new exciting features. Do you mind just covering a few of them? 

WILLIAM: A couple of things coming. Where we're looking to expand the number of partner solutions we offer on Autopilot. So at the beginning, we launched just with Datadog and GitLab as supportive partners. We're looking at expanding that list, working actively with some of our top partners right now. That's definitely high on people's minds. 

We talked about earlier, some of the conversion between Autopilot and Standard, and then eventually back the other way. Popular one, which we'll be adding pretty soon is support for admission webhooks. There are a couple of features that didn't quite make the general availability cut like that. But basically, we're just going through kind of cleaning up some of those things now and then looking at the roadmap ahead. 

YOCHAY: We will also enable later this summer the custom gatekeeper rules. If anybody is trying Autopilot today, if you look at a namespace, you see the gatekeeper is deployed by default. So we are-- by essence, we're using that to kind of enforce all of the rules we've talked earlier. 

And this blocks customers from generating their own custom ones. So we'll solve that problem. So anybody can create any custom rules. Also, admission webhooks will shortly be supported as well, which will unblock additional number of customers that currently requires that as well. 

WILLIAM: Yes, so definitely if you are trying it out and there's something preventing you from using it, has some missing feature, some gap, do let us know. We're actively taking feedback, and we'll try and prioritize it for you. 

STEPHANIE: If people want to get started with Autopilot, where can everyone go to learn more? 

WILLIAM: So I think the Docs site is the best place to start. The document is called Autopilot Overview, and it's incredibly comprehensive. It kind of covers all of the architecture. 

It compares and contrasts the differences to the standard mode of operation. So if you're very familiar with GKE, that's a great kind of comparison to look at to see what the differences are. Even if you're new to GKE completely, it's also a good place to start. We kind of cover all the basics. 

It also lists some of the restrictions. As Yochay mentioned earlier, a couple of restrictions we have in place in order to provide all these great features, like management, and so if you want to get a detailed list of what they are, that's listed there as well. So yeah, I'd probably recommend that document as the starting point. 

YOCHAY: And [INAUDIBLE] console, basically, when you create a new cluster, there is a tutorial for Autopilot as well. It's very easy to go. It's literally a number of clicks, and then you're off to the races in order to deploy your workloads, so also very highly recommended. 

STEPHANIE: Yes, I've tried that myself, and I love how simple it is right from the console. So all of these links will be included in the description of the episode. And I just want to thank you both, Yochay and William, for jumping on. This was an awesome, awesome episode. I was super excited to hear about GKE Autopilot this year, so big congrats on the launch and your book. Thank you so much! 

YOCHAY: Thank you for the opportunity, thanks for the time. 

WILLIAM: Thanks for hosting us. Really appreciate it. 

STEPHANIE: GKE Autopilot is such an exciting launch to me because it is the new mode of operations for GKE, designed to reduce the cost of managing your clusters, and it allows you to optimize your clusters for production. And you still have control over your cluster for selecting the things like the size of the nodes and the way it scales if you want to. But if you would rather focus on your applications and let somebody else manage everything else, then GKE Autopilot is for you. 

At the same time, you still get transparency. You can see the details that you need about your cluster. Kube [INAUDIBLE] is available. And you have security, networking, the number of nodes, and the size of your cluster. 

And I loved how William talked about not having to worry about bin packing or maximizing the efficiency of your nodes. That is all taken care of for you. And for teams that are sharing nodes oftentimes, now it's clear who is consuming what amount on the cluster. You also have best practices around infrastructure sizing, auto scaling, security, networking, and more. And all of these learnings from Google Cloud are passed on to you, for you. 

KASLIN: Yeah, GKE Autopilot mode is really exciting to me, because my career has been kind of focused around Kubernetes in the enterprise. And GKE Autopilot mode feels like this new evolution toward letting enterprises focus on what really matters to their businesses, while they can kind of offload some of their challenges that they don't want to work with to someone else. With GKE Autopilot mode, they're allowing Google to take care of more of their infrastructure and operational challenges, while allowing their ops teams, their dev ops teams, to focus on other challenges that are more important to their business. So I'm really excited to see how customers start using it. 

STEPHANIE: Yeah, and there are clearly a lot of things happening in the space right now. So is there anything that you're working on around this time that's exciting? 

KASLIN: For me, it's been KubeCon, KubeCon, KubeCon lately. 

[LAUGHTER] 

KubeCon U is May 4 through 7 for 2021. And as a Cloud Native Computing Foundation Ambassador, I try to volunteer to help out around the conference in a variety of ways, even when it's virtual. In terms of speaking, I'm also participating in a panel on non-code contribution, and a presentation on pod resource requests and limits, and also a maintainer track session on my open-source work. So it's been really busy. 

STEPHANIE: Yeah, I mean, if this was all in-person, you'd be running around. So congrats on all the work that you've been doing here. There are tons of things happening in the Kubernetes space to be talked about this year at KubeCon. 

So everyone, be sure to register online. We are going to include that link in the description. And I just want to thank you, Kaslin, and everybody else for listening today. We will see you all next week. Thanks, bye. 

[MUSIC PLAYING]