+++
audioDuration = "00:38:09"
audioFile = "Google.Cloud.Platform.Podcast.Episode.88.mp3"
audioSize = 55171996
categories = ["Kubernetes"]
date = "2017-08-02T01:07:49Z"
image="/images/post/Kubernetes.png"
description = "Tim Hockin, one of the engineers that started the Kubernetes project, joins Francesc and Mark to talk about all of the cool stuff coming up with Kubernetes 1.7."
draft = false
episodeNumber = 88
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Kubernetes 1.7 with Tim Hockin"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/abvm6xbFRp5"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6r5fff/episode_88_kubernetes_17_with_tim_hockin/"
+++

[Tim Hockin](https://twitter.com/thockin), one of the engineers that started the Kubernetes project,
joins [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) to talk about
all of the cool stuff coming up with Kubernetes 1.7.

<!--more-->

##### About Tim Hockin

Tim was one of the first engineers on Kubernetes and GKE, where he has been involved in things
like networking, storage, node management, API, plugins, and more.  Before Kubernetes, he worked
on Google’s internal systems, Borg and Omega, mostly on the node management side, and on Google’s
machine management, hardware bringup, and kernels.

He has been contributing to open-source projects since 1995, when he first learned C.

##### Cool things of the week

- Cloud Shell’s code editor now in beta [announcement](https://cloudplatform.googleblog.com/2017/07/Cloud-Shells-code-editor-now-in-beta.html)
- How App Engine helped power Super Mario Run [blog post](https://www.blog.google/topics/google-cloud/how-app-engine-helped-power-super-mario-run/)
- New hands-on labs for scientific data processing on Google Cloud Platform [blog post](https://cloud.google.com/blog/big-data/2017/07/new-hands-on-labs-for-scientific-data-processing-on-google-cloud-platform)

##### Interview

- [kubernetes.io](https://kubernetes.io/) is an open-source system for automating deployment, scaling, and management of containerized applications.
- Kubernetes 1.7: Security Hardening, Stateful Application Updates and Extensibility [blog post](http://blog.kubernetes.io/2017/06/kubernetes-1.7-security-hardening-stateful-application-extensibility-updates.html)
- [Kubernetes 1.7 release notes](https://github.com/kubernetes/features/blob/master/release-1.7/release-1.7.md)
- Kubernetes StatefulSets [docs](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- Kubernetes API Aggregation [GitHub issue](https://github.com/kubernetes/features/issues/263)
- Extend the Kubernetes API with CustomResourceDefinitions [docs](https://kubernetes.io/docs/tasks/access-kubernetes-api/extend-api-custom-resource-definitions/)

##### Question of the week

When should I use a pod and when a container?

Tim Hockin's slides are [here](https://speakerdeck.com/thockin/kubernetes-understanding-pods-vs-containers).

##### Where can you find us next?

Francesc just released a [justforfunc](http://justforfunc.com) episode on [Go Testing](https://www.youtube.com/watch?v=hVFEV-ieeew&t=61s). He'll be soon taking some well deserved holidays!

Mark will be speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.

{{< transcript "FRANCESC: Hi, and welcome to episode number 88 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good. I had a nice, relaxing weekend, so it's super good to be back. How are you doing? 

FRANCESC: Doing great. Also great, great, great weekend of machine learning and son, so yeah. 

MARK: Nice. I did nothing technical. I was at the beach. It was fantastic. 

FRANCESC: I studied a little bit, but it was fun. I loved it. And today we're going to have a really cool conversation about a topic that we all love, Kubernetes, and specifically about Kubernetes 1.7. with someone that we had been wanting to have in the podcast for quite a while, Tim Hockin. And he's-- 

MARK: Oh, you want to say his title-- 

FRANCESC: He's principal software engineer, I think. 

MARK: Principal, I think so. 

FRANCESC: Principal software engineer in Google, and he's one of the people that really started to Kubernetes project. So he knows a lot about it, of course. 

MARK: Super happy to have him on the podcast. Then we're going to have a related question of the week at the end of the episode talking about what are best practices for how I should use pods, containers. How should I structure these things? 

FRANCESC: Yeah, you can put all of your things in a container. Does that mean you should? 

MARK: Really? 

FRANCESC: So yep, we'll talk about that at the end. But before that, we have our cool things of the week as usual, and the first one is something that I have used before, especially for demos, and it is super cool. I'm pretty sure most of you know about Cloud Shell, which is the little shell that you can get directly from the Google Cloud console for which you don't even need to pay. It's like that little shell that is part of your project, so you have all the authentication and all the tooling. You have like GCloud, kubectl-- "cube cuttle"-- and all-- 

MARK: kubectl. 

FRANCESC: And all of those tools, already installed by default, which is really cool. Now, it also comes with an editor. So if you don't want to edit to your files with Vim-- I don't know what you're doing [INAUDIBLE], but-- 

MARK: Or [INAUDIBLE]. 

FRANCESC: Or [INAUDIBLE]. But you rather edit them like a normal person, with a weird mouse and moving around, you can now, which is really cool. It's a very simple thing. You just need to go and click on Edit Files on the left side of the Cloud Shell. There is a place that will show you all of the files that you have. You can edit them there, and then you can access those files directly from Cloud Shell. 

So for instance, let's say your using kubectl, you can edit your .YAML file directly on that editor and then go kubectl-create-f whatever, which is very nice. 

MARK: Cube-Control. 

FRANCESC: Whatever. 

MARK: It's fine. But no, it is actually a super cool project. It's based on the open source Eclipse Orion project. It comes with keyboard shortcuts, syntax highlighting, code completion, find and replace for basically a lot of supported languages and configuration files. 

FRANCESC: And I guess the new thing is that this is actually now a GA. It used to be beta for quite a while, and now it is a GA, which is really cool. I have been using it, and I definitely recommend trying it if you've never used it before. 

The second one is about App Engine and video games. Yes. It is about how App Engine helped power Super Mario Run. Super Mario Run is a really cool video game that is available on both iOS and Android, and it was kind of a big deal. And it had huge scaling challenges because it's like Nintendo-- 

MARK: Nintendo, Mario. 

FRANCESC: Yeah, like Pokemon Go, whatever. Whenever you make a really big game like this, it's going to go really, really viral. So they explained how they did it to have zero problems during the launch, which is pretty amazing. They explained all the architecture and how basically everything is App Engine. But they explained also how they did push notifications for the all the phones, how they make it so it runs faster. So there's a lot of Memcache stuff. 

And then all the analytics. Part of the things was that you'll see Cloud Pub/Sub and Dataflow and BigQuery. And then [INAUDIBLE] is a little bit sprinkled on top, of course. 

MARK: Yeah, it's super cool. They simultaneously launched in 150 countries at the same time. 

FRANCESC: As you do. 

MARK: They didn't even do-- it's quite regular for game companies to do a staggered rollout across nations. Pretty crazy how they did that. One of the companies behind it, D-E-N-A, DENA, was able to complete a test with three million accesses per second when looking at using Cloud Data Store for their persistence layer. It's pretty awesome seeing the amount of scale they were able to achieve. 

I would say a pretty successful launch. I was pretty impressed with how seamless it all seemed to go. 

FRANCESC: Yeah. And the cool thing is, I think it was like last week or two weeks ago-- that we used as one of the cool things of the week, that little video that explains a little bit how Mario Run was done. Well, that video is part of the blog post, but that doesn't give any detail compared to how detailed the rest the blog post is. So definitely go read it even if it just to see Super Mario running and jumping around. 

MARK: Cool. And so finally, last cool thing of the week is a series of seven hands-on labs for scientific data processing on Google Cloud Platform, going through plotting recent earthquake activity to building image processing with Apache Spark to machine learning and a variety of other ones as well. There is a variety of technologies, too, so it's not just TensorFlow. It's a bunch of stuff. 

And the nice thing is you can either do this as just like a step-by-step. So if you have your own GCP project, you want to do it that way. So it's available basically with the [INAUDIBLE] documentation, but you can also do it through Qwiklabs as well, which means if you just want to have Qwiklabs fire up a quick GCP project for you temporarily without you having to do a lot of the work, it's able to do that as well, which is super nice. 

Yeah. There's a whole bunch of really interesting stuff from TensorFlow to just using BitQuery. 

FRANCESC: This is really cool. I feel like after spending the weekend doing machine learning this may be a good continuation. I really like that one of the projects is to predict the correlation, not causation-- even though in this case I'd say that it's highly correlated-- of the mean daily temperature versus how many people call 311 complaining about their hot water not working. Surprisingly, people complain more about the hot water not working when it's really cold. 

MARK: Huh? Funny, that. 

FRANCESC: Yeah 

MARK: Who knew? 

FRANCESC: Definitely check it out. There's a lot of really cool projects. There's actually a bunch of them. 

MARK: Yeah, seven. It's pretty cool. So why don't we go have a chat with our new friend Tim and talk all about Kubernetes 1.7. 

FRANCESC: Sounds good. Let's do that. 

So it is a huge honor today to be joined by Tim Hockin. Tim Hockin is a principal software engineer here at Google and also one of the first engineers working in the Kubernetes project, which is pretty awesome. So Tim, welcome to the podcast. How are you doing? 

TIM: I'm well, thank you. I'm glad to be here today. 

FRANCESC: Thank you for joining us. We're going to be talking today mostly about Kubernetes and the latest version, 1.7. But before we get started into all the details and new features and stuff, why don't you tell us a little bit about yourself and what you do here on Google? 

TIM: Sure. Well, I've been at Google a very long time, but most recently I've been working on the Kubernetes and Google Container Engine project. I was one of the first engineers on the project, one of the original four I like to say. I work on things like networking, storage, API, node, federation, plugins, cloud provider, those sorts of things, mostly the lower level parts of the system-- the infrastructure for the infrastructure if you will. 

I'm also working on things like governance and steering committee, setting overall direction for the project, both inside Google with Container Engine and with Kubernetes proper. Though I reserve the right to hold opinions on things that I don't necessarily work on, which I think every contributor to the project has probably run into. 

I also do a lot of outreach and evangelism. I go and talk to a lot of customers and users and would-be users and conferences and those sorts of things. 

FRANCESC: Yeah. I've seen you on stage a couple of times. I've got to say those talks are really, really good. 

TIM: Thank you. 

FRANCESC: You mentioned that you've been at Google for a very long time. And I'm curious, for how long? 

TIM: I joined in 2004, so that puts me at 13 years. 

MARK: Wow. OK. 

FRANCESC: That is a very long time. 

MARK: Nice, nice. 

FRANCESC: Nice. 

MARK: That's super cool. So we've had several episodes on Kubernetes, but I always love asking this question because we get different perspectives on the project, which I think are really interesting. So if you had to give sort of like two- or three-minute description of what Kubernetes is if people haven't come to it before, how would you describe Kubernetes? 

TIM: Kubernetes is-- in a sentence, it's a container management system. I think the important part here is that it's a cluster management, and it brings these new ideas-- or not new, but a different idea of how people should manage their workloads. It takes the lessons that we've learned by doing this for a long time at Google and brings it out and shows people sort of how we work, why we think it's a successful way to work, and brings forward these primitives. 

So it's somewhat opinionated in that it's got some basic ideas of how we think you should do things, but it's not very opinionated in that there's a lot of flexibility and you can do things in many, many ways within the bounds of Kubernetes. And you can evolve your operations over time. 

We bring this idea that you should manage your workloads in aggregate instead of in singletons. You should not be thinking about which particular instance of your application is doing what. You should be thinking about the number of replicas you need and the scale out, and the resources should be allocated and managed by the system automatically. These are not problems that people, humans, are good at thinking about. We should let the machines deal with those problems. 

MARK: Awesome. You mentioned previously as well that you do some governance and some aspects of sort of the community. It seems like the community is a huge deal, the fact that it exists and how large it is for Kubernetes. Can you talk a little about it? Is it still growing? Like, what's happening with the community right now? 

TIM: The community is the single most important facet of the Kubernetes project. It is the reason that Kubernetes is as successful as it has been. The community, it's enormous. It's overwhelming honestly. The last time I looked we had over 2,500 contributors across all of our different repos coming from literally hundreds of companies. We're pulling in somewhere between 40 and 50 commits a day to the codebase. We're pushing our 50,000 commit number soon. It's incredible that we have this many people working on this little idea that we had. 

And the community has just been such an integral part of the process. It has simultaneously forced us to be more open with how we do things, which has been really good for the project. But it's also forced us to let go of parts that we wanted to work on or that historically we've sort of owned. And we've let community own things, and it's been overall wildly successful and incredibly difficult. 

FRANCESC: So I'm wondering, we mentioned community, how big is the community? How many contributors? Could you tell me how many people are actually working on Kubernetes? Let alone using it, but actually actively developing it? 

TIM: Sure. I mean, the number of total unique contributors is over 2,500. That doesn't mean that 2,500 people are contributing on a regular basis. A lot of those are one-time contributions or people who contributed and then went away to do something else. I don't have the number off the top of my head, but I'd say it's probably on the order of several hundred 30-day unique contributors from dozens and dozens of companies. 

I mean, obviously, we have big contributors in companies like Red Hat, and we have many, many smaller contributing companies, and we have a lot of people who are just starting to contribute. Our Slack is filled with thousands of people asking and answering questions from each other all day long. Our mailing list is incredibly useful, and people are there answering questions for each other. 

We have thousands of GitHub forks. We have hundreds of meet-ups around the world. By most metrics, we're the busiest project on GitHub. So yeah, those are some basic numbers for you. 

FRANCESC: Nice. I like to think of myself as one of the contributors because I fixed one typo in the documentation once. 

TIM: There you go. You are one of those 2,500. 

MARK: I better do something. I better get stuck in there. 

FRANCESC: Yep. I got a cool T-shirt that says kontributor with a K. 

MARK: Nice. 

FRANCESC: So there you go. 

MARK: There you go. 

FRANCESC: So let's get started a little bit with more technical stuff. Kubernetes 1.7 has a lot of new things. I was looking at the release notes, and it's kind of amazing and almost scary how many new things are coming. But why does it have a little bit about what are the main topics and your favorite features maybe? 

TIM: Sure. I mean, the release notes are overwhelming, right? It's like 30 pages of release notes. You have to remember Kubernetes is an enormous surface area. Everything from network infrastructure to the API to the machinery that drives the APIs to all the workloads, all of these things are being driven by different teams. We have over 100 people at Google working on it, and those people are doing full-time work. So the rate of change is just huge. 

It's not really that surprising when you look at the surface area of it. It's when you sit down to try to read the release notes and ingest the whole thing at once that it becomes scary. 

What are my favorite parts? I mean, obviously, I'm a little biased towards the parts that I'm closest to. And I'm close to them because I'm interested in them. But some of the things that I thought were really cool in the 1.7 release are things like network policy, which went GA, which lets you sort of describe micro-segmentation on your network. We have this ability to preserve client IPs across load balancers now, which is something that people asked for a long time. 

We have this new aggregated API system, which I think is just phenomenally cool. We've been talking about it for literally two years and working out how to get it done. And now that it works, it's actually pretty awesome. We have lots of new small features that make the overall distributedness of the system better, things like initializers which lets you do out-of-process, asynchronous initialization of objects. 

We have audit logging finally, and it's just a super cool feature for you to be able to see who changed what and when about my cluster. We have the beginnings of a much more secure system. We have encryption at rest. We're working on moving all of the cloud providers out of our tree. I'd like to say I'm kicking Google out of Kubernetes. It's a really big deal because it's going to help the codebase scale, and that's going to allow us to expand more broadly. 

We've got a new metrics API, which means we can finally start to do things like autoscaling based on custom metrics. The internal runtime interface, the CRI, we removed all of the legacy Docker code. It's now only CRI Docker, which is a phenomenal internal cleanup. We have local storage that's been introduced, which is something that people have been asking for a long time. I mean, I could go on and on, but these are some of the things that jump out to me about this release. 

MARK: Yeah. So there's really nothing going on at all. It's just pretty quite. 

FRANCESC: Yeah. Kubernetes-- I don't know, 200 engineers? They're That not doing much. 

MARK: Yeah. I don't know. 

FRANCESC: So instead of trying to list all of them-- because, as you mentioned, there so many of them-- I think that we have a list of the ones that we consider to be the coolest. So why don't you go first with some of your favorites and we ask Tim to explain a little bit why it's important. 

MARK: So Tim actually brought up one of my favorites. So it feels like Kubernetes in the beginning was kind of like we think you were going to solve sort of the 80% rule. This is what we think 80% of the people need, and then as we've headed down the road map, things have got more-- we still do that, but we're now going to allow you to have hooks and things you can do to really customize Kubernetes to be exactly what you need for exactly what your workload is. 

So that brings me to things like the API aggregation-type stuff that you alluded to earlier. Can you sort of explain what that is and how that works? I think this is a really, really cool thing. 

TIM: Sure. So one of the things I think that makes Kubernetes is really powerful is the consistent API. We have one API server that has a set of semantics for how you interact with it, and all of our APIs conform to that same API server. And they're all discoverable in the same way, and they're all sort of interoperable in the same way. And what that means is you can have one set of tooling and one client concept that works across all of those different APIs. 

And like you said, it's sort of the 80% rule, although I don't think we're quite at 80% yet. But the things that we know how to handle natively, built into Kubernetes, and then there's this wide landscape of ideas that people have of things either that they want to add to Kubernetes but they need to prove themselves first, or things that they don't want to add to Kubernetes but they want to use with Kubernetes in the same way as Kubernetes but probably will never be part of the core system. 

And we've heard that people who want to do this, and what we've given them is this aggregated API. And so what it means is you can essentially run your own program in your cluster or out of your cluster-- it doesn't really matter. The program will register with the API server as a specific Sub API, and then you can use all the existing tooling that you've got-- kube control and all of the other pieces-- and they just work with the new API as if that type that you just registered was part of the built-in API. 

When you post an HTTP request to our API server, it gets passed through on to your own API server where you have a chance to validate it, do it admission control, do sanity checking of the input, reject the request if you need to. And if you accept it, then it becomes a stored object in the same way that anything else in the Kubernetes system works. 

And it's essentially transparent to the client. Because something like kubectl does automatic probing of the API server, you can in fact just start using it without any changes needed in your client. 

MARK: So has this got a relationship to custom resource definitions? Is that right? 

TIM: Yeah. So we started talking about this aggregated API idea a couple of years ago. And when we scoped it out, it was sort of big and hairy and complicated. And so the predecessor to custom resource definitions, which was third-party resources, was sort of the poor man's version of aggregated API. It was a simple way to do essentially the cruddy operations-- create, read, update, and destroy-- but it didn't have the opportunity for you to hook in and do synchronous validation. 

You could never do a sort of schematic check on it to make sure that-- say you have an integer field and it has to be greater than 10, there was no way for us to validate that. You had to do that sort of after the fact, and that was great and it lets people do a lot of really neat prototyping stuff really, really cheaply. But I think the aggregated API gives you a much more robust way to take those ideas into production. 

FRANCESC: So would you say that custom resource definitions is kind of a good way to start if you want to enhance the API? But if you want to get more serious, you should go with API aggregation? Or should just use API aggregation rather than custom resource definitions? 

TIM: I think you said it right. I think custom resource definition is the way you start. It's the lowest barrier to entry to making extensions to the Kubernetes API. In fact, we request anybody who's trying to propose a new Kubernetes API that you start with something like a CRD and you demonstrate the value of what you're working on. You work out the API, and you implement your backends against it. And you sort of get everything sorted out. And then when that looks pretty good, then we can talk about inclusion as a built-in API, or we can talk about moving it to something like aggregated API, or you can leave it as a CRD if that's sufficient for you and it and it satisfies what you need to do. 

CRD is the lowest barrier to entry. Aggregated API is a significantly higher barrier to entry, but not nearly as high as adding something built in. 

FRANCESC: Cool. Let's move to the next topic. I'm curious about this thing because I've always heard about it as being something that people consider an anti-pattern, which is PetSets or StatefulSets. You are more things to StatefulSets in this release. Could you tell us a bit about what is, first, StatefulSets and then when to use them? 

TIM: Sure. Now, PetSet is sort of a dirty word, so-- 

FRANCESC: Yeah, I know. 

TIM: So the idea stems from this pets/cattle analogy that has sort of made its way around the space. And Kubernetes really embraces the idea of cattle and scale out and replicas. And that's really good for a large class of work where you can just add more copies of your thing and it will scale. 

It doesn't really satisfy the case of, I have a database. I have something that's really important, and I have to protect that state. And this pattern sort of is at the bottom of every major application. It's the database. It's your mongo. It's your MySQL. So once we decided we were successful enough at Stateless applications, these scale-out, web-serving sort of applications, people wanted to run Stateful applications. 

They said, well, how does Google do it? And we said, well, the Google model within Borg is a little different than the Kubernetes model, and we took a hard look at what people were trying to do. And we came up with this idea of sort of a different primitive that has some of the same properties as deployments or replica sets, but is different in really fundamental ways. And that was what became what was then called PetSet, which evolved into StatefulSet. 

And some of the differences are things like you're not going to scale it out in general. And if you do, it's not a cavalier operation. You can't just throw another replica. It's typically something where maybe you have a quorum and so you have to have an odd number of replicas, or you need to do sort of an introduction step where you introduce a new replica and it meets all of the other replicas and then you can add a second one. So you can't add five at a time, for example. 

And the identity of these replicas sort of matters. Whether you're shard one or shard two actually is significant. And maybe you have state that you're storing that is related to your particular index in this array. And so these are the sort of primitives that are added. Within a replica set or a deployment, replicas are all assumed fungible. You don't have an index. You don't have an ordinal number. Nobody is the zeroth entry. And within a PetSet or a StatefulSet, you absolutely do right you know exactly how many replicas you have, and you know which one you are. 

And it is tied to volume, so you can have a volume that goes with each copy of your StatefulSet application. And there's rules about how upgrades are done across StatefulSet replicas. And we've taken that the assumption that there must be state here so be super, super careful, and we've traded. Instead of being really fast at doing rolling updates, it's much more careful and much more safe, which means things are going to be necessarily slower and more complicated. 

So now, that said, what's changed in 1.7 is we've extended it to support things like rolling updates. So previously, StatefulSet didn't even support rolling update. If you wanted to update your application, you had to manually go through and remove each replica and let each replica get replaced. And so now we actually have a rolling update ability where you can kick it and it will do that automatically for you. 

MARK: Awesome. So Francesc and I have listed both two of our favorite sort of things in this list. Tim, do you have a particular favorite one you want to go deeper onto? 

TIM: I mean, I love network policy. I think it's a really cool API. It's been beta for a while, but it's finally GA. Network policy lets you sort of abstractly describe the graph of your application, like which things are allowed to talk to which other things. And then you can enforce at the network level, anything that's not described by this graph is disallowed. And so my frontends can talk to my middle tier, and my middle tier can talk to my database. My frontends can never talk to my database. And my frontends can never talk to each other because that would be weird. 

And once I've done it once I've drawn that graph, then if I have the right sort of network installation-- and it's an abstract API-- so if you have the right network config, then you turn it on and the network config will start enforcing it. And suddenly those packets between the frontend and the database just get dropped. They go away into the ether, and there's nothing that, if your frontend got compromised somehow, it cannot attack the database. 

MARK: That's super cool. I didn't know that. So as an interesting aside, then, is that somehow related to what's going on in, say, the Istio project? Or is this outside of your purview? 

TIM: No. So network policy is at the layer 3, layer 4, IP plus port. Istio is at layer 7. It's really aware of identity, and it's using that as it's rules. They are very similar, and I think they're complimentary. Network policy can act as a really nice backstop behind Istio policies or layer 7 policy. Istio is just a specific implementation of that. 

So I think they work well together. I think space is very new, and we're still trying to figure out exactly what is going to happen there. 

FRANCESC: Cool So we already have been talking for over 20 minutes, so we're almost running out of time. But before we do that, I actually would like to talk a little bit about the future. So is there anything on the road map, 1.8 or later, that you'd like to mention that you're excited about? 

TIM: I don't want to pick on any one thing from the 1.8 road map. There's a bunch of features. You can go look at the features repo and see what people are working on for 1.8. I like to think a little bit further out and see what the major trends within the system are. 

MARK: Yep. 

TIM: I think extensions and modularity is a major trend. You've seen a lot of work happening here with CRDs, with aggregated APIs, with plug-in systems, with things like Ingress, which are sort of abstract APIs, with cloud providers, with now kube control. Plugins, you can actually do client-side plugins. 

I think that the directions with Istio are really interesting. I think we don't really know what we're doing there yet, but I think that it has demonstrated that this is a really cool space. I think things like Service Broker are really exciting, and I think that that is going to be a big part of how people consume services and Kubernetes in the future. 

I'm looking forward to better cloud support. As more cloud support Kubernetes more natively, we're getting better primitives out of these clouds. I know the team here at Google Cloud is obviously working very hard to make Google Cloud support containers more directly. 

I think we're going to see really cool things with easier and richer installation and configuration of clusters, more consistent hybrid stories. So you can run clusters in multiple locations and sort of use the same tools, Right now, it's open source, so it's sort of the Wild West and everybody is doing their own thing. And I think we're coming to a place where we can start to get some convergence. 

I think the local storage idea is just scratching the surface. I think we're going to see a lot better system debug ability introspection, a lot less reasons to SSH into your machines and a lot better sort of automatic tooling. These are the big trends that I'm paying attention to. 

Security, obviously, we're getting better at. With the encryption at rest, we'll have more secrets and off plugins and secret plugins and encryption providers and automatic identity providers and those sorts of things. 

FRANCESC: Nice. Well, I have to ask a question. 

TIM: Yeah. 

FRANCESC: "Kube CTL," "kube control," or "kube cuttle"? 

TIM: In my real life, I say "kube cuttle." 

MARK: Nice. 

TIM: When I'm talking publicly, I sometimes say kube control because apparently that's what most people expect it to be. But I still think they're wrong, and it's "kube cuttle." 

FRANCESC: Nice. I was curious because you actually used both words during the podcast. 

TIM: Yes. I caught myself. I try to say kube control when I'm presenting something. And I caught myself say "kube cuttle" once. 

FRANCESC: I think "kube cuttle" is the way to go anyway. So yeah. 

MARK: I have a twitch in my eye. It's probably going to go away any minute now I'm sure. 

TIM: Well, the alternative that I proposed on Twitter, which didn't get a whole lot of likes, was "kub ectl," which is obviously in alignment with ioctl, right? 

FRANCESC: Yeah, true. Yeah. 

MARK: "Kub ectl," you know what? I could get behind that. I could totally get behind that. 

FRANCESC: We need to make T-shirts. 

MARK: That's fantastic. Cool. Well, we could talk to you for ages and ages and ages. But before we wrap up, is there anything at all that you want to mention or plug, or is there a feature that you just think is amazing we haven't managed to cover it that you want to talk about before we wrap up things here? 

TIM: I mean, I think I've talked about all my favorite pet features. The thing I want to plug most is the community. I want people who are listening who maybe are using Kubernetes but aren't really participating to come and participate. The water's warm. Come and file bugs. Try things out. And every time something doesn't work the way you think it should, every time you have a little bit of friction, file a bug. This is how I became the top bug filer is by trying the system out and trying to push the boundaries of what the API can do and finding weird places where things didn't work the way I expected them. 

And surprise is never a good thing. So I want everybody who's using the system to file a bug every time you get surprised. And come in. And if you've got some pet thing that you want to see changed, the code is daunting because of the size of it, but we'll help you find the places where you need to tie in and scratch your own itches. 

This is open source. It's been a wildly successful open source project. I think it's demonstrated the real power of open source. I just want more people to participate and engage. We need help on things like contributor experience. We need help on things like tooling. You don't have to be a PhD systems engineer to participate in this community. You can come in and help us with our build systems, with our shell scripts, with our tools and test infrastructure and with our GitHub bots. 

You know, all of these things, I think, are relatively low barrier to entry. Even docks. Just contributing to the docks is massively important. The number one complaint that we hear about Kubernetes over and over again is that the docks could be better. And they're getting better. We need help. Many hands make light work. 

MARK: That reminds me. I have a patch that I've had as a to do that I've been wanting to put in for like four weeks that I should do. 

TIM: This time next year I'd like the contributors number to be 5,000 instead of 2,500. 

MARK: Nice. 

FRANCESC: That's challenging, but OK. 

MARK: We're recording on the 28th of July. If we come back in a year's time, we'll have Tim on. We'll see if you're right. 

TIM: Deal. 

MARK: Deal. Awesome. Well, Tim, thank you so much for spending time with us. We really appreciate it. This has been a great conversation around Kubernetes, and thank you so much for helping start the project. I mean, I love Kubernetes. It's one of my favorite things of all time. 

FRANCESC: Thank you so much. 

MARK: So thank you so much for joining us. 

TIM: Thank you guys for having me. 

MARK: Thanks again to Tim for joining us for today's interview. As we've said a couple of times, definitely wanted to have Tim on the podcast for a really, really, really long time, so glad we could manage to find a great time for us to sit down and have a chat, learn a whole bunch of stuff about Kubernetes 1.7. I'm super excited about this release 

FRANCESC: Yeah. This was one of those interviews that I really didn't want to finish. 

MARK: Yeah. 

FRANCESC: So many questions, and he's such a cool guy. I wanted to keep talking to him. But anyway, I guess it's time to go with our question of the week, which fortunately is about the same topic. 

MARK: Yeah. So it seems like a fairly common question in a lot of ways, and I've definitely come across this before, where it's like, OK I have pods. I have containers. How much stuff do I put inside my containers? How much stuff do I put inside my pods? Is there this magical silver bullet for a rule that I can just apply for just giving me the best way to do this? Francesc, tell me more. 

FRANCESC: The answer is no. There is no silver bullet because that's the whole point about silver bullet. Maybe they exist. I don't know. 

MARK: They exist for werewolves. 

FRANCESC: Whatever. Sure, OK. Anyway, not really, but there is some good practices or a good way of understanding what pods versus containers are that might help you guiding the decision between putting everything in a pod or everything in a container or whatever you want to do. 

And there is actually really good talk by a very good friend, Tim Hockin. 

MARK: Strangely that. 

FRANCESC: Strangely. We have a link on the show notes, And it's called "Kubernetes, Understanding Pods versus Containers." And he uses a very cool metaphor, which you imagine that you're thirsty. And if you're thirsty, I could give you just a bunch of particles, like electrons and neutrons and protons, and then you do it, right? And it's like sure, but no. That's not very helpful. 

That could be like, well, you have all of these different libraries and tools and things and it just gives them to you. You want them to be organized in some way in order to be useful. So yeah, you cannot drink fundamental particles. That's not a good idea. 

The second part is like, well, I'm just going to give you like hydrogen and oxygen, and you figure out. And that may be like containers. You have a container which is hydrogen-- hydrogen, by the way, is one proton, one neutron, one electron. Oxygen is one proton, one neutron, one electron. So you have that, and just like, OK, still not good enough. 

So sometimes what a container is not enough. You want a higher level of organization. And that's exactly when you put them together and you're like, oh, what if I put together the hydrogen and the oxygen, and put two hydrogens and one oxygen? Now, all of a sudden, there's two containers of hydrogen and one container of oxygen, and you have water, which is a pod. 

MARK: Cool. 

FRANCESC: So that's the whole idea. Hydrogen is a useful thing by itself, but it is when you put it together with another hydrogen and oxygen that you get this other useful thing which is water. Imagine that you want a sweet water. Sweet water is it called? 

MARK: Yeah, sweet water. Water with sugar in it. 

FRANCESC: Sugary water. You could put it together. In a single pod, you get put the sugar and the water. But then the problem is that the sweetness of the end product is fixed. You cannot augment the amount of water or sugar without augmenting the other one. 

MARK: And maybe I find it too sweet. 

FRANCESC: Yeah. So the whole idea is that, well, if you have it in different pods, all of a sudden your cluster can scale up the amount of water or scale down the amount of sugar independently from each other. And that's the whole idea. 

So you have containers, which are like basic useful things-- hydrogen, oxygen. Then you have pods, which are useful things, which are like water and sugar. And since they are separated, you can actually scale them differently. And I think that's a beautiful metaphor. 

MARK: I think that works really well. So basically, I want to think about, what are the things that need to be held together but what are the things that I want to keep separate, and making sure those two rules don't necessarily overlap in ways that I don't mean them to. 

FRANCESC: If you go to an example with three-layered tier whatever-- 

MARK: So I might have my database. I don't want that to scale up and down. I want that to stay relatively static. So that's one that might-- a database process that runs inside a container, probably in something like a StatefulSet, and I might run just one of them. 

FRANCESC: Or you might have like a distributed one, where you have a cluster. And you have like three of them, but they're three and they're pretty stable overall. And then you have the web servers, and the web servers and maybe have more of those. And maybe inside of every single web server, there's a pod and you have one thing which is that microservice to do something and then you have the other one which is log. Log in without the microservice doesn't make any sense. So you put them together inside of a pod. 

But if you have customer microservice and they content microservice, they may be different. Because you maybe you need more traffic into customers than the other one that is add content. So that's a whole metaphor, the water-sugar. 

MARK: And by the same token, you wouldn't want to mix your web stuff with your database because we don't want to scale up the database at the same time as we'd scale our web stuff. Keep that all separate. 

I like that. That's a cool metaphor. 

FRANCESC: It's a very, very good metaphor, so I thought it was a really good way of explaining it. I do not think there's a recording for this talk. But he slides are there, so we'll have links in the show notes so you can check them out. 

MARK: Wonderful. All right, Francesc. Before we wrap up today, what are you up to? Where are you going? Is there a Just for Funk? I'm sure there's this Just for Funk. 

FRANCESC: So there was Just for Funk that I published last week, and it's doing really well. I think it's almost like 4,000 views. It's about testing and testing web servers and stuff like that, which apparently people like. 

MARK: Nice. 

FRANCESC: After that, I will be releasing one next week, which might include some guest stars such as this guy called Mark Mandel if he ever records with me. Who knows? 

MARK: Who knows? 

FRANCESC: Who knows? But other than that, I'm going to be going to Spain to enjoy some holidays, and then I'll be back in September. I'm not sure what I'm going to be doing in September. I might go to Australia. 

MARK: Nice. 

FRANCESC: Yeah. 

MARK: That would be good. 

FRANCESC: Yeah. Sydney. 

MARK: The irony is impressive, but that's good. 

FRANCESC: What about you? 

MARK: What am I up to? So I'm not going anywhere until the end of August, where I will be speaking at Pax Dev and then attending Pax itself. After that, September's crazy. I'll be at GamerCon Las Vegas. I'll be at Austin Game Conference, and I'll be attending Strange Loop as well, one of my favorite conferences. 

FRANCESC: Oh, Strange Loop. Yeah, that's going to be fun. 

MARK: Yep. Super, super excited about all of that stuff. 

FRANCESC: Very cool. 

MARK: Awesome. 

FRANCESC: Well, it's almost time to finish. But before we finish, there is something that we have not done a very long time. 

MARK: Let's do it. 

FRANCESC: Which is, so we love talking to you people. Send us your questions of the week. Send us your cool things. Send us everything. Send us even jokes. We love jokes, or pictures of puppies. In order to do so, you have a bunch of different ways of doing it. One of them is Twitter. 

MARK: At GCPPodcast. 

FRANCESC: We're also on Google+ 

MARK: Plus GCPPodcast. 

FRANCESC: We also have a subreddit. 

MARK: /R/GCPPodcast 

FRANCESC: We have a web page. 

MARK: GCPPodcast.com 

FRANCESC: We have emails. 

MARK: At hello@GCPPodcast. 

FRANCESC: Too many ats there, but whatever. And finally, we are also on Slack. 

MARK: At the hash podcast channel on the GCP community Slack, you can find at bit.ly/GCP/Slack. 

FRANCESC: That is amazing that you can remember that. So anyway, thanks Mark so much for taking the time today to talk about Kubernetes with Tim Hockin. Thanks again to Tim Hockin for letting us interview him. 

MARK: Yeah. And thank you everyone for listening, and we'll see you all next week. 

FRANCESC: See you all next week.
 
{{< /transcript >}}
