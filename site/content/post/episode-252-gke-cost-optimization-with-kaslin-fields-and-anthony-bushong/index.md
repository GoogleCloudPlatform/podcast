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

 {{< transcript "[DANCE MUSIC PLAYING] STEPHANIE: Hey, everyone. And welcome to episode number 252 of the weekly Google Cloud Platform Podcast. I am Stephanie Wong. And I am here with my colleague Mark Mirchandani again. Hey, Mark." >}} 

MARK: Hello, everybody. It's nice to be here again, of course. Thank you, Stephanie. 

STEPHANIE: Yeah, of course. So Mark, we had a really exciting conversation. Can you be the one to tease the content today? 

MARK: [CHUCKLING] Oh, how the turntables-- [RECORD SCRATCHING] Oh, yeah, absolutely. Yeah, we had a really great conversation talking about one of my favorite subjects, as always, cost optimization, yay! No, but actually, it's super exciting. And we get to talk to our good friends, Kaslin and Anthony, specifically around cost optimization for GKE. 

And I think one of the most important points is that it's really about efficiently using resources. And while that may not be an exciting subject for some people, if you're working at a huge company and you've got hundreds of thousands of applications that are being run in a variety of environments, efficient resource usage is really important. So we dive into all kinds of great stuff talking about that, things that you can look out for on GKE, and some best practices. It's a great conversation. 

STEPHANIE: Yeah, I think you all are going to be surprised with the amount of useful tips and even things to watch out for that you're going to learn. So stay tuned. We're I'm going to jump into that. But before we do that, let's talk about cool things of the week. 

[DANCE MUSIC PLAYING] 

MARK: Absolutely, so today, I've got something really, really cool, which is the GA of these A2 VMs. And if you're like me, I don't remember what these numbers and letters stand for. But what's important about these A2s is that they have 16 NVIDIA A100 GPUs. 

[CROWD "OOH"ING] 

Which I know is more letters and more numbers. And what I think it means is that these are some really hefty machines that can do a lot of GPU work. I think it's super cool. I think Jon Foust would be super excited to talk about this, as well. 

STEPHANIE: Yeah. 

MARK: But check out the blog post. It's a really cool machine type that really, I think will open up new possibilities for people who really do have that intense need for resources. 

STEPHANIE: Yes, very, very mind blowing in the scale and performance for things like machine learning, training, inferencing, high performance computing. But related to data centers, I have a very exciting announcement that I did a video for. But Google Cloud just released something called carbon free energy percents for our Cloud regions. And this is all trying to progress toward this new sustainability goal that we have. 

So just to give you some context, back in 2007, Google achieved carbon neutrality. And then in 2017, they purchased enough solar and wind energy to match our global electricity consumption. And now our new goal is to run on carbon free energy everywhere at all times within 10 years. 

It's a pretty big goal. And so now you have the ability to see a region's carbon free energy, which tells you on average how often that region was supplied with carbon free energy on an hourly basis. That way you can actually pick lower carbon regions for your new Cloud applications. 

MARK: Yeah, I love to see this. It's so super cool. And this is information that you really wouldn't have otherwise. And so it's super interesting to see, not only like, you can actually make an environmental impact depending on how you run your workload. And that could be a big factor. 

And obviously, you probably have to have a pretty big workload to make an impact on it. But I think it's a super cool variable that you can kind of play around with and understand. Hopefully, everybody is obviously into more green technologies. 

I think it's just a really cool data point to have. And it's really good to see. And I'm sure that we're going to see some massive improvements over the next coming years, as we try to get more data centers online and try to get them all more green. 

STEPHANIE: Yeah, we have some exciting announcements this year. And so stay tuned because I know we're going to have future podcast on sustainability as a topic and what you can do specifically on Google Cloud. So keep up to date with that. 

For today, we said that we're going to talk about cost optimization. And we are bringing back on our friends Kaslin and Anthony, who work day-to-day with customers on this topic to give them some deep dives on best practices and how to optimize their clusters. So why don't we go ahead and jump into our conversation? 

MARK: Plus, if you think about it, efficient resource usage is like being green because you're not wasting the electricity. 

STEPHANIE: Yes, oh my gosh. 

MARK: I don't know if that's true. 

STEPHANIE: Yeah, I tell people all the time, the best way to have efficient green energy uses is the energy that you don't use whatsoever. So this definitely ties into that. 

MARK: Oh, yeah, all right, well, let's turn it over to the experts. 

STEPHANIE: So welcome, Kaslin and Anthony, joining the GCB podcast again. We love to have you here. Today, we're talking about cost optimization with GKE, which you're both very familiar with. Why don't you both start off by just talking about who you are, where you are at Google, and what it's been like working with cost optimization for some of your customers? 

KASLIN: I'm Kaslin Fields. And I'm a developer advocate here at Google Cloud, where I focus on GKE, Kubernetes, containers, Cloud Native, DevOps type topics are my jam. So I'm excited to be here today to talk about GKE and various tools for optimizing it. 

ANTHONY: And my name is Anthony Bushong. I am a specialist customer engineer focused on app modernization, which is really just an umbrella term for all the things like GKE, software delivery. That's a whole podcast on what that actually means. I basically work with our strategic customers on Kubernetes, and it's fun. 

MARK: And I'm sure there's been a ton of takeaways working with different customers. And I think we're going to try and dive into that, especially when we talk about cost optimizing GKE. And of course, we're going to include in the show notes some of the links that things that we talked to. 

But I think to get things started, we talked about Kubernetes a lot on the podcast. What is cost optimization when you're thinking about Kubernetes? Isn't the whole point of Kubernetes just to put stuff on there and then it works? 

KASLIN: Ideally, but we all know that in reality, things can be a little bit messy. The first way that you do something might not be the most optimal way to do that thing. And the same thing is true when you're moving applications on to Kubernetes. 

So when you're thinking about GKE and moving all of your applications onto Kubernetes or starting to develop applications on Kubernetes, there are a variety of things you can think about to make sure that you're following best practices for using Kubernetes itself, and also for thinking about how the way that you're running those applications will affect your costs in the long run. So we're going to be talking today about a variety of different tools and tips and best practices. And we're going to relate them back to what they mean to cost. 

A lot of them are just basic Kubernetes best practices. So they'd be good best practices, whether you're thinking about costs as your main point or not. But we'll relate them back to how they impact your costs. 

ANTHONY: Like that meme that maybe has floated around Twitter, around where you basically have a large scale truck driving around one or two boxes of payload. You can just provision the largest GKE cluster. You get a couple of containers up and running. And yeah, it'll work. 

You can probably expose it to all the things that you want to make your application run successfully. But there's probably a much more efficient way to utilize the resources of that truck. And I think that's really where cost optimization and GKE come into play. It's like, OK, we figured out that this truck works, and it can drive things around. How do we do it efficiently and properly? That's the sum of it. 

STEPHANIE: Yeah, that's a great analogy. And were mentioning, we have a lot of best practices published online about just how to run GKE clusters optimally. But the spin on it here is how it relates to cost optimization. And sometimes, it's both performance and cost related. You get best of both worlds often. 

But can you frame why the challenge is difficult? How is this so hard? Or is this a different way of thinking about things? 

ANTHONY: So I think that when we really look at the evolution of Kubernetes, it was a really exciting technology and was on the heels of Docker getting popularity, as far as a really clean interface for developers to access these low level features in the Linux Kernel to package up their applications. And so Kubernetes was hot of that tail. And so I think as adoption, at least just in my experience, as adoption picked up, it was really hard to establish governance, if you will. 

And that's a stuffy word. But people ran a lot of proof of concepts. People were able to do things quickly and successfully. And those proof of concepts that were intended to demonstrate the capabilities of the technology eventually evolved into production use cases. 

And so that's where I think, as Kubernetes is much more mature than it was five years ago, I think that customers are now looking back and saying, OK. How do we operate GKE and Kubernetes clusters in a cost optimized way? But how do we actually go back and start to implement some of these practices in the large footprint that built up over those five years? 

KASLIN: An important point here is that we're talking about cost optimization. That can throw people off a little bit to begin with because you're thinking, oh, I'm going to reduce all of my costs. That's not necessarily what we're talking about here because we're going to be talking about, what are your applications actually doing? What do they actually need? 

Maybe sometimes you're going to have big spikes in traffic, and you're going to need to make sure that you have all the resources you need to be able to handle that spike. That's going to raise your costs because you're going to need more resources to handle it, but it's optimized for what you need it to do. So this whole concept is around optimizing. It's about loading that truck up really efficiently as best we can, and trying to avoid any extra costs aside from what we really need to do, what we want to do. 

STEPHANIE: Yeah, I think that's a really good distinction because you're saying that it's not about just bringing the total dollar amount down, but it's really about reaching a higher level of efficiency of your workloads running. 

MARK: And so as we get into those topics, not every tip is going to be applicable to every person. It's really going depend on your workloads. It's going to depend on what you're doing. 

But I think we'd be remiss not to mention that GKE Autopilot, something that has recently come out. And when you think about Kubernetes, there's a lot of different ways. You could be running like minikube on your local environment, you could be running Kubernetes on an on-prem place, you could be running GKE, and then you could be running GKE Autopilot. So with all of these different options, what are some of the perspectives that you should think about with efficiency in these different environments? 

KASLIN: What people have generally thought about with GKE is this managed Kubernetes service where the control plane is taken care of for you, and you can run all of your workloads. You pick out your nodes. You pick out the compute instances that your workloads are actually going to run on. You create your node pools. You have some management overhead with those node pools. And you have to think about security and networking involved with that cluster. 

So GKE Autopilot is a new mode of operation for GKE where Google is now taking care of your nodes, as well. We'll talk a little bit later about what exactly that means. But basically, you are now paying per pod or pay per workload. You're not worrying about which compute instances to pick. Google's taking care of that for you. 

So Autopilot lets you focus more on what those applications are doing, how many resources they're taking, how they're running on Kubernetes. So that's going to change your frame of reference for looking at how you're going to optimize for costs because in GKE, you're mainly paying for each of those nodes. Your largest unit of cost is going to be those compute resources that make up your cluster. 

But in Autopilot mode, we're talking about the resources that your pod is using. So a lot of the same concepts will apply, and a lot of the same best practices and tools and tips will still be important. But you're looking at a slightly different frame of reference, depending on whether you're using GKE Standard mode or Autopilot mode. 

STEPHANIE: Yeah, and there are still opportunities for you to customize your configuration a little bit, right, with Autopilot? 

KASLIN: Right, so basically, one way that people have been thinking about GKE Autopilot, a lot of people have been comparing it to serverless because it sounds a bit like that. You're paying per workload, so you're thinking about the application and how that's running. But it's really more like Kubernetes but nodeless because you're not really worrying about the infrastructure nodes that make up the Kubernetes cluster. 

But you still have the full Kubernetes API. It's based on Kubernetes. It really is a Kubernetes cluster underneath. You can interact with it using kubectl. You can do things like running DaemonSets, which generally you wouldn't be able to do with serverless. So this is a mainly Kubernetes API focused offering. 

ANTHONY: The only thing I'd add on top of that is that when you look at GKE Autopilot, it just reduces the surface area of these cost optimization best practices that you have to put into play. As Kaslin mentioned, a lot of that becomes Google's ownership, as far as who's managing the nodes, where that responsibility model falls for the user. I think that the interesting thing that we're, hopefully, going to tug at a little bit in this podcast is that, really, the magic of GKE Autopilot is just taking a really opinionated stance on how you use the GKE Standard knobs. So some of the best practices that we talk about in GKE Standard, those are already baked in the underlying technology and opinion that GKE Autopilot enforces for users. Very interesting relationship across that, too, but hopefully not too confusing when navigating the cost optimization aspect of it. 

MARK: And so, yeah, let's dive into those best practices and those things that really are both cost optimization. But as, Kaslin, as you mentioned earlier, it's really about just efficient uses of resource, and where are the different areas that you can actually focus on as you deploy your workload or multiple workloads to Kubernetes. So the first thing we'll do is we'll make sure that we include a link to the collection of tips. 

It's a lengthy list. There's a lot of different topics that are covered in there. But let's break down some of those and talk about what they are, how to implement them, and what some of the things to think about are. So where do we get started? 

KASLIN: So there are four main categories that I break these tips into. Multi-tenancy, which is using your Kubernetes clusters to take care of multiple tenants of that cluster. Autoscaling your Kubernetes clusters, I talked earlier about spikes in traffic or lulls in traffic. How do we handle those? How can we automate handling those? 

Picking the right infrastructure, so if we're talking about GKE Standard, I mentioned you have to pick out the compute instances that you're using. So you'll have to think about, how do you best pack those instances with the types of workloads you're going to be running on that Kubernetes cluster? Then workload best practices, general tips for running things in Kubernetes efficiently. There's also another component here, which falls over the entire array of topics, I think, which is culture. Which is, how do these practices impact how the responsibilities of managing your Kubernetes clusters are aligned within your organization? 

ANTHONY: I cannot emphasize that enough, what Kaslin just said on culture. I think the best practices guide that we're referencing, it's built by the solutions team. Fernando Rubbo led that effort there in collaboration with product. 

So it's really interesting to see that you can try to approach it as a technical problem. And I think our solutions, our product team, Kaslin and I see this when customers. But it really boils down to the cultural aspect because all these different knobs on aspects of Kubernetes that we'll get into get exposed to different teams in different ways. How those are exposed to teams are reflected in the culture, the relationship between the operations, the relationship they have with developers, and what abstraction layers and contracts they define with one another. 

So yeah, culture is a big one, for sure, maybe not necessarily where to start, but to understand that it's crosscutting across all those four different categories that Kaslin mentioned. When we think of shifting costs to the left, generally, a term in tech that I hear thrown around is shifting things left. And when we think about what that means, I think about it as getting further away from production. 

So baking this into all of the automation from when I am a developer, I'm starting to build something locally. And that's going to end up in some Kubernetes cluster somewhere else at some point in production. Shifting left means getting closer to that environment. And so I think it's interesting as far as the pieces that you can push left. 

Maybe I'll just dive into some of it, like education and training on how developers actually consume resources in Kubernetes. So I think I'll start with what developers know. And Kaslin, feel free to jump in and keep me honest here. 

But it's oftentimes, developers don't find out about Kubernetes until they need to. And I think we need to change this. When you think about how your resources are consuming in this platform that your company has given to you and exposed to you, it's important that folks understand the basics of Kubernetes, the resource requests, resource limits, how they can allocate that to their applications based on performance and maybe buffered that they'd like to add. 

The most scary thing is when developers will apply a Kubernetes manifest with no limits. And then we start to think, OK, well, I've allocated a set of [INAUDIBLE]. But in theory, I can consume whatever else overhead or available resources are there on the node. So there's education for developers. 

And then operators can start to shift some of those enforcements or governances. But they can shift that into admission, too. Can we set resource quotas for the name spaces that these developers are deploying to? Or can they set limit ranges to ensure that we are actually defining the minimum and maximum that these developers really have some freedom with it? So really getting that left and handled before a pod ever starts running in a Kubernetes cluster is really important. 

STEPHANIE: Yeah, and that's interesting that you brought that up because I was just talking to someone who, at their previous company, they had been an application developer and didn't really know much about Kubernetes. But they did have an operator team set up their clusters for them. And so what they ended up doing was more or less throw it over the fence. And I'm not sure that they're aware of the resource quotas or the utilization of the resources in the back end. But it seems pretty common that that might be actually the culture in a lot of organizations. 

KASLIN: Yeah, this is where what I mentioned earlier, DevOps, really comes into play because Kubernetes brings the developer skillset and the operator skillset closer together. There are these operator concerns that we generally think of in the operator space of using resources efficiently, making sure that you have limits, managing infrastructure. But then this is all about running code. 

It's about running actual applications, which we define in our Kubernetes manifests, which are yaml files. Can debate whether or not that's code, per se, but you still have to write a file to do that. So it brings these disciplines a little bit closer together. And when you're thinking about how to run these applications on Kubernetes, does that fall in the operator bucket or the dev bucket? And so this is why a lot of companies have been adopting this new DevOps methodology of bringing those two skill sets closer together. 

MARK: So we're starting with that idea and trying to bring some of that education to, hopefully, the entire team. Let's talk about the breakdown of those four categories you mentioned, starting with multi-tenancy What does that mean? And what role does it really play in efficient resource usage? 

KASLIN: So Anthony mentioned a little bit earlier about namespaces. If you're thinking about a multi-tenant cluster, we're saying that there are multiple teams or multiple users that are going to be running workloads, running applications on the same cluster. How do we keep those separate? And how do we make sure that they have all of the resources they need to be able to do what they need to do, make sure that nobody is pushing anybody else off the cluster kind of thing? 

So that's where Kubernetes namespaces come in. Namespaces are a useful tool within the Kubernetes API that allows you to separate areas of workloads. And using Kubernetes' role based access controls, you can control who has access to which namespaces so that you know that the right teams are deploying into the right namespaces. They have access to mess with workloads only in their designated areas of the cluster so that you can also set limits on the namespaces so that you know that each team has their own allocation of resources. And they're not pushing each other onto the corners of the cluster so that they all have the right amount of resources. 

ANTHONY: Exactly, when it really comes to multi-tenancy, it's using these different pieces that Kaslin and I have mentioned to cleanly and fairly share the cluster. Oftentimes, there may be teams that enforce this outside of the cluster. But as an operator, you want to ensure that folks aren't stepping on each other's toes. Because ultimately, and we'll talk a little bit about dividing infrastructure, because namespaces are a logical abstraction defined in the Kubernetes model. These teams have applications that are co-located on a given machine, a VM, essentially. 

And so what can we start to do to make sure that, as those resources are being shared across different teams, that, let's say, one misconfiguration for one team, because standards or resource quotas weren't enforced, all of a sudden trigger this large autoscaling event that eventually ties together a whole bunch of events, from scaling up the cluster, perhaps unnecessarily, causing disruption with the other tenants in that cluster. As Kubernetes has evolved, folks are looking to the multi-tenant models to basically reduce overhead so that we don't have cluster sprawl, to share that environment, to make sure that it's efficiently being used, and to "cost optimize" it, quote unquote. These bits like limit ranges, resource quotas, same defaults essentially, need to be defined. 

STEPHANIE: Right, and you just mentioned autoscaling as something that happens either by accident or by design. But we have these functions built into GKE, as well, including horizontal and vertical pod autoscaling. So can cover just how somebody can use these, either in conjunction, or if there are any gotchas that people should be aware of? 

ANTHONY: Sure, yeah, absolutely. So I think these things are intrinsically linked. But maybe it helps to start by talking about the two different dimensions of autoscaling. And one is scaling your actual pods in your containers. And then there's the aspect of scaling the infrastructure that is responsible for running those pods. 

And it's a very interesting model. If you think, let's take Kubernetes out of the picture. When we think of previous models, whether it's VMs or Google Compute Engine, managed instance groups, the way things are autoscaled, so horizontally by adding more VMs, is on CPU utilization of the infrastructure itself, so the actual VM. You can go in today and set this in Google Compute Engine and decide, OK. I want my VMs to scale based on a VM utilization. 

But in the Kubernetes model, we are inherently tied to allocatable resources. So when we define those requests for Kubernetes pods, that essentially ties into your reservation of a set of CPU and memory on a given VM. And so when we think about that, we actually can see that I can actually provision a pod requesting a certain amount of CPU. And it's achieving terrible utilization, but Kubernetes will reserve all of the requests for that given workload. 

So I think when it comes to efficiency and cost optimization, it's really important that we tune it and bring a different frame of reference from traditional methods in the past. So when we think of scaling out the infrastructure, because we're not looking at utilization, we're actually looking at what is allocatable to the pods running in that cluster. That's probably a whole other podcast on how the Kubernetes scheduler works. 

But it's basically looking for spaces that have the available amount to satisfy a given pod's resource request in a cluster. And when it finds out that it can't, it will look to all the different node pools and say, OK. I need to add more of this machine or more of this machine to handle the incoming pods that are trying to run on the cluster. 

So that's the infrastructure aspect. And then there's the aspect of how you auto scale the workloads, which again will eventually trigger the infrastructure underneath it. Maybe Kaslin, if you want to throw in just how we think of workload autoscaling, because I know that ties into some of the autopilot stuff, as well. 

KASLIN: Yes, so this is something that actually helped me understand how GKE Autopilot mode changes things a lot. So we talked about cluster autoscaling, being able to scale up the number of nodes in your cluster, scaling out the infrastructure that the cluster is made out of. Those things are very important when we think about cost optimization for GKE Standard mode, in particular, because that's the main thing you're paying for is that underlying infrastructure. 

As Anthony said, if you are optimizing your workloads, then you will hopefully be able to run the right amount of infrastructure underneath. So optimizing the workloads are very important, as well. But the actual number of machines that you're running is going to most directly impact your cost. 

That being said, in Autopilot mode, essentially Google is running your nodes for you. So basically, Google is doing the cluster auto provisioning and node auto provisioning. So you no longer have to worry about which compute instances you're running. You don't have to worry about setting up autoscaling for those infrastructure pieces. 

Instead, you're paying per pod. So now, that workload autoscaling, horizontal pod autoscaling, and vertical pod autoscaling, those become the ones that more directly impact your cost. When you run more of a certain workload, you'll be paying more for that. 

Or the vise versa is very important to mention here. Whether you're talking about infrastructure autoscaling or pod autoscaling, if you're running more than you need and you have a lull in traffic, autoscaling can also scale down what you don't need. So this is a great point for that optimization concept. It'll do what you need it to do to take care of your workloads, the traffic that you're running, whether that means reducing costs or increasing them to handle a spike. 

MARK: It's a trade-off. You want to have the infrastructure ready so that if you have some kind of scaling event, an increase in traffic, then you'll want to add more pods, which would be horizontal pod autoscaling. And then if there's no place to put those pods, then Kubernetes says, well, I need to make more machines, or I need to find more machines to put these pods somewhere. 

And if you have to spin up new infrastructure to do that by spinning up new VMs, basically, that's going to take time. That's a very expensive process. But if there's spare machines sitting around, A, it'll be faster to schedule those pods, but then, B, you're paying for machines that might not be utilized. So there's got to be some kind of decision that you make when you're setting up autoscaling, whether it's infrastructure level or whether it's pod level, to really decide on, hey. What is the trade-off between the money I want to spend being prepared and the money I want to save by not wasting resources, right? 

KASLIN: Yeah, this guide gives some excellent tips around that. And Anthony and I have both been working on a Qwiklabs skill badge, which can walk you through some hands on labs on all of these topics. And one of those labs covers autoscaling. And in that lab, even, we talk about what are the strategies available to you to make sure that you have the right amount of headspace available where you're not using the extra space in the nodes yet. 

But if you're expecting to see a traffic spike, you want to make sure that that stuff is already provisioned so that you can handle the spikes very quickly, rather than having to take the time to spin up new nodes or new workloads. Then it has some recommendations for how to calculate that and also for tooling for how to do that. For example, the autoscalers, one of them has the balanced mode versus optimized mode. I can't remember the exact terms right now. 

But the balanced mode is basically allowing a little bit more space on the nodes so that if there is a spike, you'll be able to handle it a little bit quicker, a little bit smoother. Whereas the more optimized version is trying to keep things really more efficiently packed so that you're just paying for the resources that you're using. And if you have a spike, it might take a little bit longer, but maybe that's OK. It depends on what you're doing. 

STEPHANIE: I have a quick question as it relates to Autopilot, going back to that for just a second. Are you saying that the infrastructure and the node autoscaling is handled for you so you don't necessarily need to worry about over provisioning? And then at the same time, it can scale back down so that, again, over provisioning isn't a necessity in that case? 

KASLIN: Right, in the case of Autopilot, one thing that I didn't mention earlier that, this is a good point to mention, is Autopilot actually introduced a new SLA for pod availability. So this is a new and exciting thing where if you are running pods in GKE Autopilot mode, if you're running them in a highly available way across multiple zones, then there is an SLA on the availability of those pods. So you do still have to think about running those pods in a highly available way. 

But what we're really thinking about here is the pods. So we're saying, we will take care of your workloads. We'll take care of your pods and ensure that they will be available to you when you need them. So that means the nodes underneath, we just don't want you to have to think about them. Just think about making sure that you've got your pods set up right, you've got your workload set up right, they're going to run right in Kubernetes. We'll make sure that there's resources for them to run on. 

ANTHONY: When you think of the model of GKE Classic or Standard, so I talked a little bit about how the autoscaler works. It's looking for available resources. One interesting trait of the cluster autoscaler is that it can only scale up available node pools that already exist within the cluster. 

So when we think of a node pool, we think of a very specific machine shape around vCPU, memory, and the like. And there are plenty of scenarios where I may request a pod to consume a certain amount of CPU and memory that isn't supported by one of the node pools that exists in the cluster. And so it's put into this weird, little, internal pending state, an area where all bad things live. And it's in between having been created but never scheduled and running in the cluster. 

And so if we think of GKE Classic, we actually have an implementation of cluster autoscaler built in called node auto provisioning. So when you turn that on in a given cluster, you might actually be like, oh, OK, I see that this amount of requests come in. No node pools can actually satisfy that. 

Maybe it's asking for 100 vCPU. I don't know, whatever. But actually, 100 vCPU would probably break a lot of VMs, too. 

So let's just say, it's an amount of vCPU not covered by one of those node pools. And then it'll say, OK, well, actually, node auto provisioning, I can actually determine within a given guardrails of how many vCPU I'm allowed to run in the cluster. Let me provision a new node pool that can actually make sure that this pod successfully gets scheduled. That's magical. 

Imagine if you're a data science team. And you have a constant number of jobs being provisioned to your cluster that perhaps they're dynamically changing because of the different types of jobs that are being scheduled. It's really hard to use cluster autoscaler and predict that you would always have the right node pool to satisfy those workloads. So node auto provisioning turns that on, that ability to provision new nodes and new node pools with proper configuration. 

What GKE Autopilot actually does under the hood is it says, OK, well, we're actually going to make the best of both worlds, cluster autoscaler and node auto provisioning. We're just going to turn that on. You don't even have to think about operators, don't have to think about pre-provisioning a node pool. 

They just say, OK, well, here you're provisioning pod requests for CPU and memory. And under the hood, node auto provisioning is saying, OK, well, here we go. These are the VMs that we're going to spin up to satisfy these workloads. So it's like, Autopilot basically just removes the operator responsibility to configure and think about this. But it's all of the magic that's still built into GKE Classic into a wonderful user interface. 

MARK: And there're still going to be scenarios where you might want to have that level of control because depending on, the autoscalers can be really handy. But if you have really, really niche requirements or you're orchestrating just a ton of different workloads at once, there are things you can do. And I think this speaks to the other two buckets that you mentioned earlier, Kaslin, about infrastructure and about workload best practices. So let's talk a little bit about what you can think about in those cases, especially relevant when you're working on something like GKE Standard or Kubernetes on-prem or whatever. What do you need to think about from the infrastructure side and the workload side? 

ANTHONY: Maybe we could start with the workload side. It might help to just outline what we have around controlling workloads efficiency and then build on top of that, as far as workflow best practices. So when we think of workloads, we talked a bunch about cluster autoscaler, node auto provisioning. Kaslin mentioned [INAUDIBLE] but these are really critical to call out when we think of workload autoscaling. 

We have horizontal pod autoscaling, vertical pod autoscaling, and I'll start with those two. So horizontal pod autoscaling, you can define metric thresholds, typically CPU utilization. But there's support for external or custom metrics that are looking to add more replicas of a given workload because the threshold of that metric has been crossed. So CPU utilization has crossed 70% on average across all the replicas. So that's how you horizontally scale workloads. 

There's also vertical pod autoscaling. This is an autoscaler that will adjust CPU and memory on your behalf. This can be really challenging, actually, to pair up with horizontal pod autoscaler because both of them might be looking at CPU and memory and trying to do different things. And it becomes a bit of a challenge. 

So in GKE there's a third bit that we've recently added called multi-dimensional pod autoscaling. And this is a single resource that you define that can scale horizontally based on CPU and vertically change pod requests for memory. So I think when it comes to workloads and if we're thinking about workload best practices, it's important to know that these are the bits that will help you add more replicas. 

And all of those are hinged on pod requests and limits. So it's really important to really consider how you're allocating those to given workloads. Once you have that understanding, it's important to know that you have to start to, as Kaslin mentioned, you're just incorporating now Kubernetes best practices. Because if we're constantly having pods start and restart and stop and reschedule, we're adding more replicas, we're taking them down. 

We want to make sure all of this is done with minimal disruption to our end users. We can't be so lost in the infrastructure and config, that like, OK, we did all this, and then we had all this disruption during scaling events. It's important that we incorporate workflow best practices for Kubernetes workloads when using these autoscalers. 

And so some of that might be ensuring that we gracefully handle shutdowns. So if we're scaling down, that we actually properly allow pods to finish requests that they're handling, things like that. That's why workload best practice is important. 

KASLIN: Right, and you mentioned earlier GKE Standard versus Autopilot. All of these workload best practices are going to be very important whether you're talking about Standard mode or Autopilot mode because you're going to be running your workloads either way. It's just when you're running Standard mode, you also have to think a little bit more about the nodes. 

And I wanted to point out another difference between the Standard mode and Autopilot mode, which is in Standard mode, those compute instances that make up your nodes are actually there in your environment. And if you wanted to SSH into those virtual machines, you could do it. And you could see from that point all of the things that are running on that virtual machine. 

So there are, of course, security concerns with locking down those nodes, that type of thing. But that's one case where, if your organization does something with your nodes where you really care about having the SSH access for some reason, then that might be one reason why you would want to run GKE Standard mode over Autopilot mode. But generally speaking, it's all about the workloads. So these best practices for running your workloads on Kubernetes, pod disruption budgets, horizontal pod autoscalers, vertical pod autoscalers, multi-pod autoscalers in the GKE case, and Kubernetes liveness and readiness probes, which I don't think we mentioned earlier. 

Which is basically giving Kubernetes decision trees to determine, is this workload up and running? Is it ready to receive traffic, or do we need to wait for it? And is this workload up and running, or does it need to be restarted? That's the liveness versus readiness piece. Those are all important things that you're going to have to think about no matter where you're running your Kubernetes cluster, no matter what type of cluster it is. 

ANTHONY: Absolutely, I think it's always funny when the example of SSH comes into play because we don't really think about GKE Autopilot, or maybe it's just me, but as a secure default, as well. But a lot of folks want to, if they don't like living life on the edge and making sure anyone can just SSH into the nodes, they actually want to turn that off. And that is actually non-trivial when it comes to, well, how do I think about this in GKE Classic? 

So we're moving the nodes. There's also the security aspect to that, too. So I just wanted to throw that out. It's definitely another bit for Autopilot. 

But going back to pod disruption budgets, this ties in directly to some of the things that we're talking about around autoscaling. We want to be able to scale infrastructure up and down quickly based on pod requests because that's ultimately, in GKE Classic, as Kaslin said, that's the unit of cost. We're paying for that compute. 

But sometimes, we want to make sure, most critical services have a certain amount of pods running to actually make sure that our users don't see disruption. So pod disruption budgets are great to configure on a workload level. This is the maximum available number of pods for this workload, or this is the minimum available that I need. And then we can actually block on disruption events, whether those are upgrades or potentially removing a node. 

I think it's like this balance that once that education is there around, oh, you have all these different pieces in the Kubernetes API and GKE API to configure your cluster. How do we use all these to match what we want out of our cluster while still getting efficient utilization making sure we're keeping costs down? Those workload best practices absolutely feed into the autoscaling aspect. 

And not to repeat myself, but it goes back to the culture. You got to make sure that folks who are either, A, directly employing workloads to Kubernetes are aware of these resources. Or some other teams have begun to build their own abstraction layer. So developers get this one config file, and it translates into all of this stuff in Kubernetes manifest. 

So how can we make sure that we package that into that extraction process, too? So I'm not here to debate on how much Kubernetes should be exposed to developers. That's for another time. But I think no matter which way you go, whether you're directly configuring this or you build your own abstraction layer, it's important to take into account these features. 

STEPHANIE: This is all to say that there are many points of consideration that we just covered. Best practices around multi-tenancy the culture of your organization, breakdowns of some of the autoscalers, workload versus the actual infrastructure best practices. So for somebody who needs to keep in mind handling graceful shutdowns or not having any disruption to end users during these scaling events, what's the best way for a team to start to even implement some of these things? 

KASLIN: Yeah, so we've talked about several components of best practices here that affect that. One thing is the pod disruption budgets that we mentioned, which is a Kubernetes feature where you say, I want to make sure that I have at least this much, essentially, of my application up at a time. Only this much can go down at any given time. 

So Kubernetes, if more than that goes down, make sure that you're spinning up new ones to make up for that. So that's a way of managing the disruption of your workloads. And then on the infrastructure side, if you don't have enough nodes, for whatever reason that might be, there are ways that you can configure autoscaling to help you manage those types of events. Anthony, you might have a few more tips on that, as well. 

ANTHONY: Yeah, I think to the bits that you described, certainly all places you could start. I think we've rattled off so many features. And it can be a little bit to get started, as far as there's so many options and so many different roads to start implementing these. They don't really come with a nice, easy On button to turn on in your cluster. 

If you are lost, and you're not even in the headspace to say, OK. I actually have a problem that pod disruption budgets in conjunction with either cluster autoscaler or something like that can actually solve. Perhaps one of the things we haven't talked about yet is GKE usage metering. 

So this is actually really something that will help you take stock of rough estimates of how much tenants in a given GKE cluster are consuming. So if you're like, OK, let me just understand who's actually consuming what, and if this actually seems like a fair distribution or a fair chargeback model, as far as the different teams running on GKE. What you can do is enable GKE usage metering in a given cluster. 

And so what this will actually do is write a whole bunch of data per namespace. And again, going back to why namespaces are important around organization, what are the resources being used in each of those namespaces? What are the resources being requested in each of those namespaces? 

Cluster operators can then look at these dashboards and say, OK. I actually now have a better understanding of what tenants are using around CPU, around memory, and how much that actually costs. So when you enable this feature, it writes a whole bunch of data to BigQuery. And we provide some Data Studio templates to build these dashboards. 

And then you can start to take stock into, OK, there's these tenants that may be having issues with efficiently using the CPU. Let's actually talk to them and talk about, again, how we properly set resource requests and what have you. Can we set up autoscaling, scaling up, scaling down? That's, I think, a great place to start, even if you don't know what problem you're trying to solve yes, is like, OK. Let's just get an understanding of what's in the cluster and how much that costs per team. 

KASLIN: And I think it's important to say that this is a lot of different stuff to take in all at once. Definitely a situation where you need to crawl before you can run. So start with one or two things that you think might be helpful to you. 

Start understanding those. If you see any benefits there, move onto the next thing. But always keep the problem that you're trying to solve at the top of your mind, and you'll be going in the right direction. 

MARK: And like you said, Kaslin, there's so much stuff here that, really, A, it's going to apply to what specific scenarios. But if you try to implement all of this at once, you're going to have a bad time. And I think that's really where the resources, and we'll put a bunch of them down in the show notes. But can you talk a little bit more about some of the things that we've put together to help people through this, like the Qwiklabs you mentioned earlier? 

KASLIN: Yeah, there are a lot of resources that we're trying to put out there so that it's easy for you to find this information and easy for you to consume it in a way that works for you. So the Qwiklabs are one option where we have individual hands on labs that cover important best practices in each of these topic areas that we've been talking about today. We also have a skill badge there where you go through all of them. And you do a challenge at the end to make sure that you understand all of these topics. 

We also have a YouTube series, which Mark was the star of on his Beyond Your Bill series, where he talks about all of these best practices, as well. And he covers them in a similar form to what we've been covering today in terms of the topics. And they go along really nicely with the labs. 

So when you do the certification, you actually go through the videos as well as the labs. And then of course, in the documentation, if you were to go to the Google Cloud documentation and search for GKE cost optimization, you would be able to find this guide that we've been referencing, which is a lot more detail than we're going into today. If you want to learn about all of these different topics, it's a great place to reference and find more information. 

STEPHANIE: Awesome, is there anything else that we missed that you might want to mention before we wrap up? 

KASLIN: And if anyone out there wants to hear more about this stuff, you've just listened to this whole podcast. But if you would like to listen to me at least talk about this stuff more, I'm going to be giving a webinar on cost optimization on Google Cloud OnAir live webinars. So definitely look for that if you want to see me talking about this more. 

And I actually go through one of the Qwiklabs there. And I walk through the steps and show you what it's like to actually go through that Qwiklab yourself. So there's some great tips there for getting hands on with this. 

ANTHONY: Maybe some words of encouragement, it can be a little bit overwhelming to look at all the different pieces that are tied to efficiency and cost optimization in GKE. But I promise you, when you look at these resources in Fernando's guide, and it'll be linked to the podcast, a lot of these can just be implemented piece by piece. So I think really just ask yourself, what problems am I trying to solve when trying to increase efficiency? 

So an example, there's a talk actually that a customer, OpenX, gave with our product management team during Next of last year, where they actually review that they had a scheduling issue. And so they came up with a lot of different things to do around the infrastructure, whether it was choosing the right infrastructure or machine types to actually optimizing how workloads get scheduled. They had a concrete problem. 

And definitely take a look at that talk, and see if some of those apply to you. But even if they don't, start looking through the guide. And understand that most of these can be adopted over time. 

We don't need you to adopt them en masse for you to have an efficient cluster. These are overall just quality of life improvements and definitely can follow that crawl, walk, run, methodology. And you'll be fine. You'll be off to the races, for sure. 

KASLIN: And one more thing that I'm doing is, on GKE more generally, it won't be specifically on cost optimization best practices, but more on getting started with GKE in general. I'll be doing a Cloud onboard session, which will be a longer session, several hours of workshops and learning together, which will be coming out later. We'll put links and information in the podcast description. 

STEPHANIE: Yes, absolutely. Well, thank you so much, Kaslin and Anthony. There were so many good nuggets of information in that. And even if it seems overwhelming, that was amazing wisdom to end on. 

I also think that there are a lot of things coming out when it comes to GKE. And as the culture around Kubernetes matures, there will be more opinionated approaches, including about cost optimization. So thank you. Can't wait to have you on again next time. 

KASLIN AND ANTHONY: Thanks for having us. 

STEPHANIE: And you just heard Anthony and Kaslin talking about GKE cost optimizations, which I found very fascinating. What about you, Mark? 

MARK: Yeah, I loved it. I think we had a slightly longer than normal conversation, but it was a ton of fun. I think we got to learn a lot of different things. I definitely recommend checking out the guide. We're going to have quite a few links, I think, in the show notes for people to follow up on. 

One of the subjects I think we just ran out of time before we got to cover it was bin packing and the real decisions that go behind actually choosing the infrastructure that you run GKE on. We talked a lot about Autopilot and what that means. And I think we'll have some cool announcements for Autopilot coming up soon. 

But when you're not running Autopilot, you still have to really think about the infrastructure you're running on, the nodes part of it Kaslin was mentioning. That's probably the bulk of the cost and the bulk of the resources. And so when you're thinking about the nodes, one of the really cool tips that, I think if give you actually check out some of the Google Cloud Next Videos that feature OpenX, which was the customer that Anthony mentioned. 

They have this really cool way of thinking about bin packing, which is, for people who don't use Kubernetes as much, bin packing is really the right way to figure out the sizing of your containers. And trying to maximize, how do you fit these containers onto these nodes that you have? So if you have a bunch of really large containers and a bunch of really small containers and a bunch of maybe medium sized nodes, they might be able to run the large container and the small container. 

Vise versa, you can also choose the right size of nodes that fit your containers. And so one of the cool things that OpenX talked about was this powers of two rule that I thought was just awesome. And I think a lot of companies are probably going to start doing something like this where you think about your containers in powers of two. So is this container a two, a four, a 16, and so on? 

And then when you limit everything to just powers of two, you can choose the right infrastructure to match. So if your workload is a bunch of two's, then you can probably save a lot of money by buying a single, let's say, "32," quote unquote, sized server and fitting up to 16 of your nodes on there. There's system stuff, so you probably won't be able to fit all 32. 

But that idea, I think, is a really cool way to simplify it and actually make buckets for your containers. So instead of trying to optimize each and every single application, you have a better rule of guidelines. One of those links should contain that video. I think they do a great job of walking through what that means. 

But bin packing is such an important concept when it comes to optimizing resource usage. I just wanted to make sure that we give it the appropriate call out and that people really think about that. And also, the solution guide mentions some more detail on that. So I highly recommend checking it out, super, super handy, but yeah, absolutely loved the conversation. 

STEPHANIE: This is the type of insight that emerged after this entire community has matured, and we have big customer use cases like this. And that's what I found very interesting is how quickly this has evolved. It went from one person managing a cluster. And now customers have larger teams. 

And as Anthony mentioned, it's easy to just throw money at the problem. But you really need to dig deep and understand, take an inventory of how you're running these applications within clusters so you can find areas of optimization. For example, using the power of two, finding areas where you can just standardize these guidelines, so you don't have to think too difficultly about how to personalize each thing or customize it. 

MARK: Yeah, absolutely, and of course, a big part of that is the cultural shift that we talked about and what that means. And we did a video with Spotify probably a few years ago now, where they talked a little bit about how they opened up Kubernetes to their developers. And helping them understand Kubernetes and helping them manipulate Kubernetes so that they can have a better idea of how these applications are being deployed into production was such a critical part of their culture shift. 

So it was definitely interesting to hear more about that, and definitely something that people should think about when they're talking to their companies and trying to advocate for adopting new technologies. You really do need to be aware that not everybody has that same mindset. And helping shift your team's culture over can be probably the most valuable thing to starting these conversations and drilling into the details that are really advanced resource efficiency. 

STEPHANIE: Yeah, I think that's the benefit of this emergence of DevOps culture and having developers understand what infrastructure their workloads and services are running on, and also understand the paradigm shift between running VMs in a typical environment. Anthony was talking about a departure from understanding autoscaling that's based on CPU utilization. And now GKE is really operating more within the constraints of the number of pods allocated or the machine types allocated for your clusters and specific workloads. So it's a change in paradigm and understanding of it. But once your teams operate within those confines and constraints, that's when you really hit maximum efficiency. 

MARK: Yeah, and it's hard. This isn't a click a button, solve a problem. Well, I guess maybe with GKE Autopilot it is. But in general, it's hard. This stuff takes time. 

And so I'm really glad we got to have that conversation. Like we've talked about, there's going to be so many links for people to check out. And then that whole methodology of crawl, walk, run is super important. 

Start small. Figure out where you can do simple things. I think one of the examples we talked about before is maybe not GKE-specific. 

But like, hey, if you've got dev machines, consider shutting them off at night when you're not using them right. That could actually save you a fair amount of money at the end of the day. And as we were just talking about, it's a little bit greener, too. That's a really easy thing that you can do. And then all the way to some of the concepts that talked about here will definitely take a lot of time to implement, but can really be worth it depending on how your workloads are running in GKE. 

STEPHANIE: There are a multitude of resources that we just listed and concepts that we talked about during the conversation. So take it in bite-sized chunks. We're going to include all the links to the resources. And let us know your thoughts, what's working for you, what isn't. We're hoping to get more conversations like this on the podcast soon. 

So thank you, everyone, for joining us again. Thanks, Mark. You're always an awesome host. Love your jokes. 

MARK: [LAUGHING] 

STEPHANIE: We need your humor on the show. Without it, it's just boring with me. 

MARK: Aww, that's the nicest thing I've ever heard. Thank you. I'm sure every single one of our listeners feels exactly the same way, no room for debate. 

STEPHANIE: Some people are rolling their eyes now. 

[CHUCKLING] 

We'll see you all next time. 

MARK: Bye, everybody. 

[DANCE MUSIC PLAYING] 