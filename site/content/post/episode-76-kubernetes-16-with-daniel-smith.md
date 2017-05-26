+++
audioDuration = "00:36:18"
audioFile = "Google.Cloud.Platform.Podcast.Episode.76.mp3"
audioSize = 52576867
categories = ["Kubernetes"]
date = "2017-05-10T01:07:49Z"
description = "This week Mark and Francesc have an in depth chat with Daniel Smith about the recent Kubernetes 1.6 release and all the amazing new features found therein."
draft = false
episodeNumber = 76
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Kubernetes 1.6 with Daniel Smith"
image="/images/post/Kubernetes.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/YeCmzfharDf"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6adnwn/episode_76_kubernetes_16_with_daniel_smith/"
+++

This week [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) have an in depth chat with
[Daniel Smith](https://twitter.com/originalavalamp) about the recent [Kubernetes 1.6](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html)
release and all the amazing new features found therein.

<!--more-->

##### About Daniel Smith

Currently TL of the API Machinery sub-team, [Daniel](https://twitter.com/originalavalamp) has been working on Kubernetes since before it was open sourced, 
and contributed enough in the early days that he’s still one of the top contributors overall. 
Before that, Daniel worked on Borg and briefly on AppEngine. He lives in Mountain View with his wife and two children.

##### Cool things of the week

- Cloud OnBoard (North America) free training events [site](https://cloudplatformonline.com/2017-Onboard-Northam.html)
- IPv6 Termination for HTTP(S), SSL Proxy, and TCP Proxy Load Balancing [docs](https://cloud.google.com/compute/docs/load-balancing/ipv6)
- Putting gRPC multi-language support to the test [blog](https://cloudplatform.googleblog.com/2017/05/putting-gRPC-multi-language-support-to-the-test.html)
- gRPC with Varun Talwar [podcast](https://www.gcppodcast.com/post/episode-15-grpc-with-varun-tarwal/)
- gRPC at CoreOS with Brandon Philips [podcast](https://www.gcppodcast.com/post/episode-43-grpc-with-brandon-philips/)
- Simon Says with Sandeep Dinesh [podcast](https://www.gcppodcast.com/post/episode-51-simon-says-with-sandeep-dinesh/)

##### Interview

- Kubernetes [site](https://kubernetes.io/)
- Kubernetes 1.6: Multi-user, Multi-workloads at Scale [blog](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html)
- Five Days of Kubernetes 1.6 [blog](http://blog.kubernetes.io/2017/03/five-days-of-kubernetes-1.6.html)
- Go client for Kubernetes [github](https://github.com/kubernetes/client-go)
- etcd [github](https://github.com/coreos/etcd)
- Kubernetes Federation [docs](https://kubernetes.io/docs/concepts/cluster-administration/federation/)
- Kubernetes Role Based Access Control (RBAC) [blog](http://blog.kubernetes.io/2017/04/rbac-support-in-kubernetes.html) [docs](https://kubernetes.io/docs/admin/authorization/rbac/)
- Kubernetes Assigning Pods to Nodes [docs](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/)
- Advanced Scheduling in Kubernetes [blog](http://blog.kubernetes.io/2017/03/advanced-scheduling-in-kubernetes.html) 
- Kubernetes Custom Schedulers [docs](https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/)
- Dynamic Provisioning and Storage Classes in Kubernetes [blog](http://blog.kubernetes.io/2016/10/dynamic-provisioning-and-storage-in-kubernetes.html) [docs](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#dynamic)
- Kubernetes Container Runtime Interface [blog](http://blog.kubernetes.io/2016/12/container-runtime-interface-cri-in-kubernetes.html)
- Kubernetes scheduling GPUs [docs](https://kubernetes.io/docs/tasks/manage-gpus/scheduling-gpus/)

<div style="text-align: center">
  <a href="https://cloud.google.com/container-engine/"><img src="/images/post/Kubernetes.png" style="margin: auto;" width="50%"></a>
</div>

##### Question of the week

Q: Francesc and Mark discuss "What is the first thing you do when creating a Google Cloud Platform project?"

- Google Cloud Platform Console [site](https://console.cloud.google.com)
- `gcloud init` [docs](https://cloud.google.com/sdk/gcloud/reference/init)
- `gcloud` configuration [docs](https://cloud.google.com/sdk/gcloud/reference/config/configurations/)
- Identity and Access Control - Adding Owners [docs](https://cloud.google.com/iam/docs/concepts)
- Cloud Abuse with Swati Kulshreshth and Emeka Okonkwo [podcast](https://www.gcppodcast.com/post/episode-47-cloud-abuse-with-swati-and-emeka/)
- Google Cloud Platform Support with Terrance Shepherd [podcast](https://www.gcppodcast.com/post/episode-24-support-with-terrance-shepherd/)

##### Where can you find us next?

Francesc will be presenting at [2017 Gopherfest](https://www.meetup.com/golangsf/events/238748981/) in San Francisco,
teaching at [Onboard Buenos Aires](https://cloudplatformonline.com/2017-OnBoard-BuenosAires.html) and running a 
workshop at [QCon New York](https://qconnewyork.com/)
  
Mark is going to be in Sweden for [Nordic Games Conference](http://conf.nordicgame.com/), and while he won't be there,
if people are in San Francisco they should head over to the [Playcrafting & Extra Life 24 Hour Game Fest](https://www.eventbrite.com/e/playcrafting-extra-life-24-hour-game-fest-tickets-33350827222)
where we are raising money for the UCSF Benioff Children's Hospitals.

{{< transcript "FRANCESC: Hi, and welcome to episode number 76 of the weekly \"Google Cloud Platform\" podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I am good! How are you doing today? 

FRANCESC: I'm very happy to be back to San Francisco-- with nice weather and everything-- after a pretty awesome week in New York. 

MARK: Yeah, very nice. Sounds like you had a bit of fun over there. 

FRANCESC: Yeah. I'm very excited to be talking again about Kubernetes. Last week, we had Chen Goldberg from GKE talking about why Container Engine is open source and the difference between Container Engine and Kubernetes. And this week, we have Daniel Smith, a software engineer working in the Kubernetes team, to talk about all the cool new things that come in with Kubernetes 1.6, which came out not that long ago. 

MARK: No, it was several weeks ago. Yeah. Basically, Daniel and I nerd out for about 20 minutes on Kubernetes. 

FRANCESC: Yeah, and I try to understand some of the things. I use Kubernetes. But, like, I keep it very-- like, the basics. If you're interested in the-- really, the newest things, like deep, deep technical topics-- this episode is going to be for you. I'm sure you will enjoy it. And then, at the end, we have a question of the week, which is kind of cool. But like, what you do when you create a Google Cloud Platform project? 

MARK: Yeah, what are the first things? 

FRANCESC: Yeah. Personally. So we will answer them personally. 

MARK: Yeah. 

FRANCESC: Because we actually don't agree. But, you know, whatever. 

MARK: That's good. 

FRANCESC: We'll talk about that at the end. But before that, we have the Cool Things of the Week. And the first one is about this new program-- it's called Cloud OnBoard. Basically, it's a full training event that's going to be happening all around the world. For now, it's been announced the dates and places for North America. So we'll have a link in the show notes. And I think that there's a bunch of them. I think I saw Austin-- 

MARK: Got Dallas, Austin, and Toronto. There should be more coming, I expect. There's 12 cities in US and Canada. 

FRANCESC: Oh, yeah, Chicago, Vancouver, San Francisco, LA, Seattle, Atlanta, Boston, Washington, DC, and New York City. So a bunch of them. And even better than that-- there's actually also more events on this type, so you can go and learn more about Google Cloud Platform all around the world. So I know that I'll be attending one in-- actually, I'm going to ask Mark to say the capital of Argentina. 

MARK: I massacred this before. Buenos "A-res"? No, Buenos Aires. 

FRANCESC: Buenos Aires. That's very good. Yeah, there you go. So Buenos Aires will be one of those places. But I'm sure will be many more that we'll be announcing sometime soon. So just listen to the podcast and we'll let you know. 

MARK: Yeah. Free full-day training programs. 

FRANCESC: Yeah, they're really cool. So pretty excited out about those. The second Cool Thing of the Week is a very cool thing of the week. It's IPv6. 

MARK: Yeah. So we've got IPv6 finally supported. 

FRANCESC: Yay! 

MARK: Well, we have beta. It's in beta. IPv6 termination for HTTP(S) load balancing, SSL proxying, and TCP proxy load balancing. 

FRANCESC: Yeah. 

MARK: So if you have IPv6 needs, we are able to provide those for you. 

FRANCESC: Yeah. Because you know, I think that this year is the last year-- like, this year is the year of Linux on the desktop. And the year we ran out of IPv4 addresses. I think this is the same year. 

MARK: Linux on the desktop is coming. 

FRANCESC: Yeah, yeah, yeah. 

MARK: Soon. 

FRANCESC: Absolutely. So, yeah, if you want to use IPv6, which I definitely recommend-- there's actually a couple of conferences that already moved completely to IPv6. [INAUDIBLE] is one of them. 

MARK: Oh, interesting. 

FRANCESC: Kind of cool. It forces you to update a lot of different things. But yeah, if you want to use it, check it out. We'll have a link in the show notes. And then the last Cool Thing of the Week comes from Mete Atamel, who is a developer advocate, Google Cloud Platform, specialized in .NET technologies, and he's based in London, if I don't remember-- if I remember correctly. And he wrote a really cool blockbuster in gRPC. Specifically from the point of view of-- everybody says that gRPC is really good to have interoperation or support-- to have multiple prime languages in the same system. Is that actually true? 

So he talks about how to make something that you have a server running Java and the client is actually running .NET-- actually using C#, if I remember correctly. And it is really cool. And, actually, if you don't know gRPC that much, we have a couple of episodes on gRPC, I think. 

MARK: Yeah, we do. So episode 15-- gRPC with Varun Talwar, PM for gRPC. We go through that. We also have a great chat with Brandon Philips from CoreOS in episode 43. 

FRANCESC: Oh, yeah. That was really good. 

MARK: Which was really, really good. And in episode 53, we have one of our fellow developer advocates, Sandeep Dinesh. Comes and joins us and talks about how he and I put together the game Simon and used gRPC to make it. 

FRANCESC: Oh, yeah, Simon Says. That's cool. 

MARK: Make it very scalable in multiplayer over the internet. 

FRANCESC: Yeah, so, check it out. I'm going to be talking about gRPC more often now, because I did a little demo with Go. And it is an amazing experience. I really liked it. 

MARK: gRPC is really nice. No, I agree completely. 

FRANCESC: So, yeah, check it out. Check the episodes out. We have all of those links in the show notes, as usual. 

MARK: So, yeah. Why don't we go have a chat with Daniel about Kubernetes? We should probably give a little small proviso before we jump in. 

FRANCESC: Yeah. 

MARK: Because Daniel and I do nerd out a lot about some of the more advanced features that have come in in Kubernetes. So if you are new to Kubernetes, don't feel like these are features you have to use. These are really just there for if the default things, like services and deployments, aren't necessarily working for you in the way that you need it to for your very specific workload-- 

FRANCESC: Yeah. 

MARK: --this is the configuration options that Kubernetes gives you to enable to tailor it to exactly what you need. But if you're just getting started in Kubernetes, maybe have a listen, keep it in the back of your head, in case, one day, you're, like, oh, there was this thing I might need. But if you're just getting started, it's interesting, but you don't have to worry about it too much. 

FRANCESC: Yeah, I think that is telling that these are features that were not included ins Kubernetes until version 1.6. 

MARK: Yes. 

FRANCESC: And many people are using it in production already. So very probably, you don't need them. But if you want to know about them, Daniel is here to tell us about it. 

MARK: Cool. So let's go chat with him. 

FRANCESC: So, I'm very happy to welcome to the podcast Daniel Smith. Daniel, you are a software engineer and TL-- Tech Lead or Team Lead, I'm actually not even sure-- at some random, weird part of Kubernetes? GKE? Tell us about it. What you do-- what do you do at Google? 

DANIEL: Hi. Yeah, yeah, honestly, I'm not sure what TL stands for either. So I'm the TL of the API machinery sub-team at Kubernetes. We've broken-- as the Kubernetes team has grown, we've broken it into a bunch of small groups-- small-ish groups. So my group is the API machinery group. And our goal is to take care of the API machinery. So this is the stuff that the-- sort of the guts of Kubernetes. The plumbing between clients and servers and between the server and the storage back end. Making client libraries, making the stuff that lets people write new APIs. 

MARK: Oh, so does that mean you're responsible for client-go? 

DANIEL: [LAUGHTER] Yes. 

MARK: I've used that! 

DANIEL: Oh, good. 

MARK: It was good. I used it. It was-- it worked well. 

DANIEL: We will try not to go over to what I think about Go's dependency management system. 

FRANCESC: OK, so let's continue talking about something else. 

[LAUGHTER] 

So we have you today to talk about the latest Kubernetes version-- Kubernetes 1.6. I was going to say 1.8, because that is Go. But no, it's 1.6. And also we'll talk, at some point, the fact that you just migrated also to-- Kubernetes just migrated to Go 1.8. So, pretty happy about that. So what is new in Kubernetes 1.6? What is the biggest pieces of information you think everybody should know? 

DANIEL: If you look at our documentation, we've got a number of areas. We've increased the scale. Federation is to beta. RBAC is to beta. RBAC is a security feature. There's some new scheduling tricks that you can do-- a few other things. 

MARK: I would-- let's talk about scale. Because obviously scale and federation-- those seem to be two fairly hot topics. I believe Kubernetes now goes up to 5,000 nodes. Is that correct? 

DANIEL: Yeah, that's correct. So we now enforce our-- we promise our SLO over 5,000 nodes-- 5,000-node clusters. This-- and the SLO is-- we respond-- the control plane responds to API requests in under a second, 99% of the time. 

MARK: I was going to say-- so that's interesting. Can you tell us actually, like, how that was possible? Like, what actually changed? Is there changes under the hood or what happened there, so that that would be possible-- so that can happen? 

DANIEL: Yeah, the scalability team made a bunch of changes to make this happen. One of the larger ones is switching to etcd version 3. We were previously on etcd 2. That was actually a pretty large effort that was done by [? Wojciech ?] in Poland and my own team member, Matt, here. Put in a lot of work getting that set up and we had lots of help from friends at CoreOS. 

FRANCESC: So, is it true that etcd 3-- one of the biggest changes is that it actually uses gRPC instead of REST. Is that what you think brought the performance gain? 

DANIEL: So, that's actually a detail about the etcd client library. So, yes, it does-- it does use gRPC. But we actually got that benefit just by switching to the client library, so etcd itself scales better if you use the version 3 format. 

FRANCESC: Oh, nice. 

MARK: Very cool. And like, we know federation's a pretty thing in Kubernetes. Can you tell us sort of, A, what is Kubernetes federation? And B, like, what's new in 1.6 that we can take advantage of now? 

DANIEL: You know, after you get a cluster to a certain size, it becomes very problematic if something goes wrong, right? So after a certain size, it's better to start running multiple clusters and-- you know, you don't want the blast radius to be too big, if something happens to your control plan. So federation is a way of presenting multiple clusters under a single control plane. 

It's not new. We've had it for a while. But it is growing up and I think it went to beta this time around. And it can do it can do some things, like manage pods for you, manage replication controllers. I think it's got services. So you can sort of manage multiple clusters at the same time. 

FRANCESC: How does it look when you use federation? Does that mean that kubectl has a special mode? So-- when you deploy to the world or-- what does it look like? 

DANIEL: Yeah. So, I'm a little bit in danger of telling you stuff I don't know. But, yeah, you point-- you point your kubectl-- you set your kubeconfig file to point to the federation control plane, and it's got its own set of controllers that just maintain configuration. Like, say you want a service to run in multiple clusters. You can make a-- it looks just like the regular config file from Kubernetes. There's maybe a couple extra fields that help it find how many clusters-- in which clusters you want it to run. 

FRANCESC: Nice. So, I guess that since we've talked about how you can run bigger jobs through both larger clusters and also many clusters through federation, the next thing that you mentioned was RBAC. What is RBAC? What does it stand for? 

DANIEL: Ah, what does it stand for? How about I tell you what it does? 

[LAUGHTER] 

FRANCESC: Sounds good. 

MARK: Is it Role-Based Access Control? 

DANIEL: Yeah, Role-Based Access Control. Yeah, that makes sense. So basically, Kubernetes is starting to grow up, and we're getting more fine-grained control over security. When people think of security, I think there's sort of two topics that that covers. One is identity, or what we call authentication. And the other is permissions, or what we call authorization. And so RBAC is about authorization. 

It is a way of specifying sort of really, really fine-grained permissions on various aspects of your cluster. So you can specify like a resource, a verb, and an actor-- a person or a group-- and say, you know, yes, you can do this. No, you can't. And-- so this is more fine-grained than we've had previously. Well, I think we've had RBAC previously, but it's going to beta this time around. 

MARK: So, it's kind of like IIM, but for Kubernetes specifically. 

DANIEL: Yeah, it is exactly like IIM for Kubernetes. It is more fine grain. 

MARK: OK, cool. So if I'm a large organization, and I want to have certain maybe senior developers who are able to push to production, but maybe my more junior people, I'm going to let them push to dev or staging, then I've got controls there that I'm able to take advantage of to do that. 

DANIEL: Yeah, absolutely. 

MARK: What's the authorization hooks there? Like, should I be able to hook it into-- I don't know-- like, an LDAP system, or my own custom authentication, or what's available there? 

DANIEL: Kubernetes supports multiple ways of getting identity. So LDAP will give you identity. If you're running a GKE installation, then you get identity from the Google system. One of the things we added is a subject access review API. So you can actually-- if you have permission to do it-- you can actually call a Kubernetes control plane and ask, does this person have permission to do this thing on this cluster? 

MARK: Sure, OK, cool. So the thing that I'm actually personally quite excited about and something I've been playing with a bit is the advance scheduling stuff. I think this is super, super cool. There's several different things here. Which one do we want to talk about first? So, there's a whole bunch of stuff around pod affinity that I think is really interesting. Can you tell us about that? 

DANIEL: I was reading about it last night just to make sure I understood it. There's a couple of different affinity settings. There's affinity for nodes and affinity for pods. Affinity for nodes is like, you know, you'd prefer or you must-- your pod prefers a particular node or it must schedule on a particular node. 

Pod affinity is even more interesting. That is for situations where you want to be co-located with another set of pods, or you want to be not co-located with a set of pods. So pod affinity is for when you want to schedule taking account of the other pods that are on a node or in an availability zone. So, it's if you have pods that need to be scheduled together or shouldn't be scheduled together. 

Suppose you have workloads that need high bandwidth communication between each other. Like, you're doing some sort of machine learning something. And you want them to be in a network segment that has high connectivity. So you can set up labels on your node saying like what your topology is. And you can sort of select over what other pods have been scheduled in this topology section. And do I want to be scheduled close to those pods? Or maybe you want to spread for disaster tolerance. You could say, I want to be scheduled away from these other pods. 

MARK: So an interesting question then. So I can have multiple containers running inside a given pod. Why would I choose to use pod affinity to bring other pods together versus putting them all together in the same pod just with multiple containers? What benefits do I get there? 

DANIEL: I think that's really for very different use cases. Like, if you're putting multiple things inside one pod, you're saying that your scaling is literally 1 to 1. If-- you know, if you have, like, I don't know-- a web front end and a database sinker in one pod, you are getting exactly one of those-- one of each every time you scale up or scale down. If you have services that need to scale separately but still be co-located-- like, maybe you've got one database that serves several different web services? The services may need to be close to the database, but you don't want to scale 1 to 1. So, in that case, you want separate pods for each. 

MARK: So you're talking about on the pod side, you've got ways to coordinate where pods should be close to each other or affinity against each other. But then you can also control things on the node side as well? Is that right? 

DANIEL: Yeah. Yeah. So there's a new beta feature-- node taints. And I like to think of this as like the role-playing game sense of like-- the node is tainted by some dark magic. This is-- you're basically setting a flag on the node. And then the system will prevent any pod that doesn't tolerate that flag from landing on the node. 

So you could use this for, like, if you've got nodes that have GPUs or local SSD, and you want normal pods not to schedule on those. Because you want to leave-- you want to leave those free for workloads that really take advantage of the unique feature. So you could taint those nodes with, say, you know, GPU true. And then only pods that actually say, I tolerate the GPU taint can land there. You can use this to do all sorts of cool stuff. 

Along those same lines, there is an alpha feature. So the system is continuously health-checking nodes. And after a while, it will-- like, if a node stops calling-- if a node stops phoning home, the system will set its status to unknown. And if it doesn't come back, it will eventually just kick all the pods off of the node. You can now set some flags and treat that event as a taint itself. So you can sort of control how long your pods are willing to tolerate a node that is possibly unresponsive. 

MARK: So the question I kind of had is-- it sounds like pod affinity and node taints kind of do the same things but from different directions. When should I choose one over the other? 

DANIEL: I think, clearly, if you want to-- if you want your pods to do stuff based on other pods in the system, then you definitely want to use pod affinity. If you want your pods to schedule depending on facts about your nodes, then you probably want to use node taints. The other distinction is taints are for keeping pods off of nodes. And affinity is for getting pods onto nodes. So if you really want to set up an exclusive relationship, you need both. 

MARK: All right, so the final thing on the event schedule stuff, which is also kind of interesting, is custom schedulers. I mean, up until this point, Kubernetes has kind of had the scheduler, which has kind of been the one true way. But now you can kind of mess with it a bit. What's that all about? 

DANIEL: So, specifically, this feature is you leave the default scheduler running and you start up your own scheduler beside it. You can set with a field in your pods which scheduler you would like your pods to be scheduled by. And you can do this-- I don't know. Maybe if you've got some special logic that isn't covered by affinity or taints or [? breading. ?] Like, if you've got something custom that needs to happen, you can write a scheduler that does that for you. And then you can have your pods go through that scheduler instead of the default one. 

MARK: And I think I saw one of our teammates, Ian Lewis, [INAUDIBLE] a blog post for the Kubernetes blog-- I will link to it in the show notes-- wherein I think I saw-- yeah, he wrote a custom scheduler in bash. So there doesn't seem to be a limit on the language that you can write your custom schedulers in. Is that-- is that correct? 

DANIEL: You know, one of the best things about Kubernetes, I think, is just the fact that our APIs are truly open. There's no secret APIs. All of the stuff that the default system components do is stuff you can do. And, you know, you can do it through the Go client library. You can do it through kubectl and bash. Doesn't-- the system doesn't really-- doesn't really care what's on the other end of the API. We're starting to come out with libraries in other languages. There's a pretty full-featured Python library now. So, yeah, you can write it in bash. I wouldn't recommend it, but if that's what floats your boat. 

FRANCESC: Cool. So I had a question regarding not scheduling anymore. But sometimes you want to scale your cluster, you need more volumes. You need storage. The only way to create this is either you create it by yourself, or you want to create it automatically. And I think in 1.4, dynamic provisioning was added. And there's something new about it, but I don't know what it is. What's going on with dynamic storage provisioning? 

DANIEL: So, I think this feature is pretty awesome. Let me give some background on the storage system in Kubernetes. Because a large part of Kubernetes is workload portability, right? We want you to be able to write your application targeted at Kubernetes and then run it in multiple cloud environments. 

Now it turns out that cloud environments don't all do storage volumes the same way. So to get around this we have a concept which is persistent volume. And we have another concept called persistent volume claim. And the idea is you write your workload to talk to a persistent volume claim. And you allocate persistent volumes from the cloud provider. So if you go to a different cloud provider, all that has to change is the logic that's producing the volumes-- like your application doesn't even notice. 

And so what's new here is that there's a storage class that's introduced-- a storage class object. And that is basically a thing that can automatically produce persistent volumes. So it frees cluster administrators from having to do that. 

FRANCESC: Nice. So I'm curious about-- you mentioned the storage claim. Could that be seen as basically the API that someone needs to satisfy to be able to provide storage volumes for Kubernetes? Which means that basically like there's one for Google Cloud, but also if you want to run it on other cloud provider or even on premise, that's what you should be implementing? 

DANIEL: So if you wanted to port Kubernetes to a particular cloud environment, the thing that you want to produce is a controller-- a controller logic. So I haven't looked-- I haven't looked at the dynamic storage provisioning feature in, like, a code level. But there must be a controller. And if you want it to port to a different cloud environment, you would write an implementation of that controller-- 

FRANCESC: Cool. 

DANIEL: --that would look for, like, unsatisfied claims against a storage class, and then you'd select the appropriate, like, volume settings, size, et cetera, from your cloud environment. 

MARK: Cool. Is there any other-- like, I know-- I mean, those seem to be the big highlights, I think, we've covered there. But are there any other little things that have also been added that are kind of cool and interesting? 

DANIEL: Sort of. Some under the hood stuff, I think, is probably worth mentioning. A bunch of work has been done in-- on something called the container runtime interface. And this effort is probably not super user-visible. But it will make some things easier for us in the future. And basically, the idea is kubelet, which is the node agent, has two responsibilities. Basically, like, on one side, it's talking to the Kubernetes API and getting workloads and reporting back, et cetera. And on the other side, it's talking to the container runtime-- which is usually Docker-- and is starting containers, stopping them. 

So the container runtime interface's effort is to sort of split this down the middle, and let the container runtime part of that be out of process to kubelet. So that it is easier for people to implement that, kubelet can focus on correctly implementing the Kubernetes API. 

Another cool thing that kubelet is doing-- I'm excited about this because it is fixing a longstanding issue that we've had sometimes-- is kubelet is now declaring space for system daemons. Called this feature node allocatable. And the idea is the system components, like kubelet itself, Docker, other daemons that are running on the system, they take up some ram, they take up some CPU. And if you don't take that into account, the scheduler will stuff so much stuff onto the node that it will go out of memory and start killing things. So it's pretty cool to have this put in to the node stats, so that the scheduler can take account of this and not overload nodes. 

MARK: Cool. Now I think we've covered all the stuff that's pretty much available in beta. But we've had some new alpha features as well, that I know we don't necessarily support it out of the box without clicking some check boxes and saying, this is fine if you set yourself on fire. 

DANIEL: Yeah. 

[LAUGHTER] 

MARK: Do you want to talk about-- 

DANIEL: Yeah, you can make an alpha cluster but you can never upgrade it. 

MARK: Yeah, exactly. It's all on you. But what new alpha features are available right now? 

DANIEL: So one thing I'm excited about is out-of-tree cloud providers, which is we're splitting our-- there's multiple control plane components in Kubernetes. And one of them is called controller manager. That sort of groups all the various controllers that are running the system. Kubernetes is kind of built out of this control loop pattern where we have these components that basically are doing one thing and they're watching-- you know, they're watching your replica set. It wants five pods, they're looking at the cluster, you only have four, so it will make a new one. 

The whole system is built out of this sort of control loop. We're sort of splitting that binary up, so that the ones that are specific and married to a cloud provider are in a different binary. So that you can run the standard controller manager binary and also the one appropriate for your cloud environment. If you were doing a bare metal installation or something, you could just take a look at that skeleton, see what it provides, and write your own implementation. 

Another thing I'm excited about which is alpha support is GPUs. So we handle GPUs as resources on nodes now. 

FRANCESC: Could you tell us a little bit more about it? What does it look like to-- say, I want to use GPUs like-- let's say there's someone that wants to do like video game stuff and they need the video rendering stuff. How do you, like-- 

DANIEL: You know, I haven't played with that particular feature. So I have-- I'm probably not the best person to ask. You know, I thought it was targeted more towards machine learning folks. 

FRANCESC: Oh, interesting. 

DANIEL: It maybe-- it probably also works for people who need to do renders. But I think it's targeted towards machine learning. 

FRANCESC: Yeah, that's a good point. 

MARK: So more exposure to the [INAUDIBLE] stuff and that kind of stuff in there. Sort of like NVIDIA cards and things like that. 

DANIEL: Yeah. I don't know that we go into that level of detail. I think it's just the kubelet notes that, hey, I've got this many GPUs available and the scheduler can see that pods want, you know, one to a few GPUs and it can track that as a resource. 

FRANCESC: Cool. One more question I wanted to ask you is, do you know a little bit about how was it to migrate to Go 1.8? Was it an easy thing or-- 

DANIEL: Yeah. So we did just get to Go 1.8. I think we got there yesterday, maybe the day before. So Kubernetes 1.6 is still built with 1.7. But on head, we are on Go 1.8. And it seems cool so far. I've been running it on my personal system for a while. I'm excited to see more. 

MARK: Cool. We are running out of time a bit, but what's on the road map for Kubernetes going forward? I saw there have been drops on 1.7 for, like, alpha releases and stuff. But what sort of stuff can we see coming down the pipeline? 

DANIEL: I'll just focus on what I and my team are working on. I think we've got some cool stuff planned. Something that-- the sorts of things that get me excited in Kubernetes are the things that make it easier for the ecosystem to develop, and for us to get more components that interoperate with Kubernetes. And so in that vein, we're working on API aggregation. 

This is the idea that you can take your own API and aggregate it seamlessly with the Kubernetes API. We have various folks in the ecosystem, like OpenShift, who basically are operating something that's very, very similar to Kubernetes, but it's actually a fork, if you look under the hood. Like, they have very painful merges when Kubernetes increments version. So the idea here is the people who want to add this sort of API can run it on top of Kubernetes, instead of operating a fork. 

And this should make it much easier to add APIs. You should be able to add multiple APIs in the same cluster. So yeah, this is what I'm looking forward to. 

MARK: Is that like linked to third-party resources? Is that kind of in that same vein as people who want to add their own resources to Kubernetes and make it do special things? 

DANIEL: Yeah. It is similar, and this was a really hot topic last quarter. If you poke around the API machinery sig docs, you'll find one that I put out there that was comparing and contrasting the two. I think the short story is that Kubernetes needs both third-party resources and API aggregation going forward. 

Third-party resources-- the target audience there is it's really easy to get something up and running. Doesn't take a lot of effort. It works with kubectl already. So it's like low effort, easy to use, not necessarily full-featured. And the idea with aggregation-- API aggregation-- it's a little bit more heavyweight. Probably you're only going to do this if you really want to fundamentally alter or add some really fundamental API concept. But you would do this-- we offer-- we're going to offer a library. 

You'd compile, you'd run your own API server, you make an entry in the aggregation API, and then that would get integrated with kubectl. And if you do things that way, you'll get all the power of the API system, so you can do all the fancy validation you want. You can write super custom admission controller. You can do strange defaulting. Anything you like. 

FRANCESC: Great. I think that we're pretty out of time by now. So thank you so much for taking the time to tell us a little bit about all the cool things that are coming with Kubernetes 1.6. It was very interesting. 

DANIEL: Cool. Thanks for having me. 

MARK: Yeah, thank you so much. 

FRANCESC: So thanks, Daniel, for such an interesting conversation. There was a lot of those things that I'm not sure I completely understood what they were for. Because, you know, like, there's really advanced stuff there. If you felt that way, do not fear. That's normal. I guess. But thanks-- yeah, thanks. It was really, really interesting. And it makes you think about, like, all of those little features that probably you will not need. But the day you'll need them, they're there. 

MARK: Cool. So why don't we have a chat about the question of the week? I thought this would be a bit interesting if we just talked a little bit about. So you create a Google Cloud Platform project. 

FRANCESC: Yeah. 

MARK: What's the first thing you do? 

FRANCESC: Let me say my things first. 

MARK: Go. 

FRANCESC: So normally what I do is I create my projects all the time from the console-- from console.cloud.google.com. 

MARK: I do the same. 

FRANCESC: And then what I do is I go to my terminal and I do GCloud in it to set up all the configuration. So whenever I do anything from GCloud, it will be actually referring to that. And I do this partly because I have three different accounts linked to my GCloud. So I want to make sure that I do what I do in the project that I'm trying to. Otherwise, you will get errors and it's kind of annoying. 

MARK: Do you use configurations? Or do you just use the-- just re-- like, re-auth on the same account? 

FRANCESC: Yeah, I do not use configurations. 

MARK: OK. 

FRANCESC: I just do re-auth. And it's very easy. It works very well. There's a product manager for GCloud here. I wish that I could have directory-dependent configurations. 

MARK: That would be nice. 

FRANCESC: Consider that as a feature request-- 

MARK: Feature request. 

FRANCESC: --from the podcast. But, yeah, just GCloud in it, and that works pretty well. And then, well, right after that, I'm going to go to the console again. And it seems very often what I'm doing is I'm going to be running somehow compute and compute engine instances. And you need to activate that API. What I do is I go to the Compute Engine tab, and then just click in there. The API starts activating. 

That takes a couple of minutes. So it's always the first thing you do. You don't pay for having it activated. So even, like, I really-- it's like sometimes in the Phone App Engine, I still will activate the API. 

MARK: Just by habit. 

FRANCESC: Just because, you know, that's what I do. But yeah, that's pretty much it. And then check that billing account is set up and all of these things, so I can actually start working on the project directly. What about you? 

MARK: So I'm very similar to you, in that I set up my project through console.cloud.google.com. Strangely enough. 

FRANCESC: You don't use the deployment manager for that? 

MARK: So you could. 

FRANCESC: You could, I know. 

MARK: You can. I haven't played with that yet. But I may one day soon. In fact, maybe I will. Maybe I will do that, now that I think about it. Because I have a few steps. The first thing I do, actually, is I make sure I have multiple owners on the account. I start it with my email address, and then I have a secondary email address that I use to make sure there are multiple emails on the account, just in case. Always a good thing to have, just in case one account-- something happens to it. 

FRANCESC: Yeah. 

MARK: And then you can still have access to your projects. Ideally, multiple people is a good idea. But, yeah, multiple owners is always good. And then basically-- this is, like, not really a step-- but make sure that the emails-- the owners of my accounts-- I make sure those are email accounts that I actually look at on a regular basis. Because if anything goes bad with your project-- in fact, we had a conversation with the abuse team at one point-- 

FRANCESC: Yeah. 

MARK: Right. If anything bad happens to your project-- say somebody compromises one of your systems or something like that happens-- then that's the email address you're going to get a message out to. So you want to receive those. Those are really important, because otherwise you can get your project shut down and that would be sad. 

FRANCESC: Yep. 

MARK: And that would make you very, very sad. So definitely I like having multiple owners and making sure that those emails are monitored. 

FRANCESC: Going back to the topic-- you were talking about abuse and support. Yeah. Reading those emails is really important. Because, you know, when you receive one of those emails, they're actually important and you need to answer them. There's two episodes where we cover a little bit about this and the best practices on, like, how to make sure that your projects are following the terms of services and all of these things. 

There's episode 47 with Cloud abuse. And we had Swati Kulshreshth and Emeka Okonkwo. And then on episode 24, we also had Terrance Shepherd talking about Google Cloud Platform support. We-- yeah, we cover all the little things that you might want to do-- especially, I'd say, that the biggest piece of advice is make sure those emails do not go to, like, some account that nobody reads. 

MARK: Yeah, don't send them to dev. No. Like, don't do that. That's bad. 

FRANCESC: Yeah. 

MARK: Well, Francesc, it's wonderful talking with you again. Where are you going to be in the next few weeks? What are you up to? So, next week I will be here in San Francisco for GopherFest. That's going to be on Monday. And after that, I will be on my way to some really quick holidays. And by the end of the month, I will go to Buenos Aires for the OnBoard event. That's going to be pretty cool. And next, I will be going to [? QCOM. ?] I'm actually very excited about that. 

MARK: Oh, cool. 

FRANCESC: I have this video, "Go Tooling in Action," that-- pretty popular. And I'm making a workshop out of that and I'll be running it on [? QCOM ?] New York. I'm pretty excited about that. That will be at the end of June. What about you? 

MARK: So next week, I will be off to Sweden for a Nordic Games conference, which should be lots of fun. I'll make a shoutout-- I'm not going to be there-- but if anyone is in San Francisco on Saturday, the second part of the Playcrafting and Extra Life Game Jam is their GameFest, which is this weekend. And basically it's a free event. 

For 24 hours, you can go play games. They're going to be streaming stuff. Just basically raising money for kids in hospitals, so super, super cool. And it's in Launchpad space here in San Francisco. Make sure we'll linked to that. And then I go on some holidays a bit as well, actually. 

FRANCESC: Very nice. 

MARK: Yeah. 

FRANCESC: I heard that there's this little thing event-- Google I/O. 

MARK: Oh, yeah, that is coming up, isn't it? 

FRANCESC: Yes. You will not be attending. 

MARK: I will not be attending. I'll be in Sweden. 

FRANCESC: I will not be attending. 

MARK: OK. 

FRANCESC: But I know that many of you might be attending. Let us know how it goes. We're going to be interviewing some people about some things that might be happening at Google I/O. And you'll have an episode on that after. 

MARK: That was very vague. I like it. 

FRANCESC: I know. It's very secret. Nobody knows what's going on. 

MARK: And what's great is we could slot in anybody and no one would know. 

FRANCESC: Exactly. Thanks, Mark, so much for such an amazing episode. I feel like this episode without you would have been way harder, because I really did not know what we were talking about. So thank you so much. 

MARK: And thank you to you, Francesc. And thank you very much to everyone who's listening. 

FRANCESC: See you all next week. 

MARK: See you all next week. 
{{< /transcript >}}