+++
audioDuration = "00:35:58"
audioFile = "Google.Cloud.Platform.Podcast.Episode.273.mp3"
audioSize = 51719029
categories = ["Kubernetes Resource Model", "Anthos", "GKE"]
date = "2021-08-25"
description = "This week on the podcast, we welcome guest Megan O’Keefe to talk about KRM and Kubernetes with your hosts Mark Mirchandani and Anthony Bushong."
draft = false
episodeNumber = 273
hosts = ["Anthony Bushong", "Mark Mirchandani"]
title = "Working with Kubernetes and KRM with Megan O'Keefe"
image="/post/episode-273-working-with-kubernetes-and-krm-with-megan-okeefe/images/hero/hero-EP-273.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/pbgeb4/episode_273_working_with_kubernetes_and_krm_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, we welcome guest [Megan O’Keefe](https://twitter.com/askmeegs) to talk about KRM and Kubernetes with your hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Anthony Bushong](https://twitter.com/agmsbwho). To start the show, Megan gives us a quick rundown of Kubernetes, an open-source tool to orchestrate containers and manage other GCP resources. She explains the difference between declarative and imperative to help us better understand the basics of Kubernetes.

We tackle the challenges people face when beginning their Kubernetes journey and how it works with other open-source projects, like Anthos. This year, Megan and her team have been working to help developers understand the Kubernetes Resource Model, a concept that helps define how companies can organize and run clusters, enforce policies, and more for improved standardization across multiple teams. 

Megan explains GitOps, a deployment model for Kubernetes focusing on Git, and takes us through examples of implementation. We learn about Config Sync and how it helps with optimizing and automating GitOps. Megan goes over some other valuable tools, including Open Policy Agent and Gatekeeper, which help developers specify not just which resources are allowed, but also what kinds of things are allowed within each resource. 

We wrap up the show with a discussion on streamlining the development process with strategic use of Kubernetes and the help of open-source tools like Skaffold. Megan also talks about controllers like Config Connector that help with deploying to a GCP project and the things she finds most exciting about this space.

##### Megan O’Keefe

[Megan O’Keefe](https://twitter.com/askmeegs) is a Developer Relations Engineer at Google Cloud, helping developers build platforms with Kubernetes and Anthos.

##### Cool things of the week

* Listen up! Google Cloud Reader reaches 50 episodes [blog](https://cloud.google.com/blog/topics/developers-practitioners/listen-google-cloud-reader-reaches-50-episodes)
* Private Pools Overview [docs](https://cloud.google.com/build/docs/private-pools/private-pools-overview)

##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* KRM [site](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/architecture/resource-management.md)
* KRM Tutorial Demos [site](https://github.com/askmeegs/build-a-platform-with-krm)
* Build a platform with KRM: Part 1 - What’s in a platform? [blog](https://cloud.google.com/blog/topics/developers-practitioners/build-platform-krm-part-1-whats-platform)
* Build a platform with KRM: Part 2 - How the Kubernetes resource model works [blog](https://cloud.google.com/blog/topics/developers-practitioners/build-platform-krm-part-2-how-kubernetes-resource-model-works)
* Build a platform with KRM: Part 3 - Simplifying Kubernetes app development [blog](https://cloud.google.com/blog/topics/developers-practitioners/build-platform-krm-part-3-simplifying-kubernetes-app-development)
* Build a platform with KRM: Part 4 - Administering a multi-cluster environment [blog](https://cloud.google.com/blog/topics/developers-practitioners/build-platform-krm-part-4-administering-multi-cluster-environment)
* Build a platform with KRM: Part 5 - Manage hosted resources from Kubernetes [blog](https://cloud.google.com/blog/topics/developers-practitioners/build-platform-krm-part-5-manage-hosted-resources-kubernetes)
* I do declare! Infrastructure automation with Configuration as Data [blog](https://cloud.google.com/blog/products/containers-kubernetes/understanding-configuration-as-data-in-kubernetes)
* Multi-cluster Use Cases [docs](https://cloud.google.com/anthos/multicluster-management/use-cases)
* CNCF Kubernetes Overview [site](https://landscape.cncf.io)
* Anthos [site](https://cloud.google.com/anthos)
* Anthos Technical Overview [docs](https://cloud.google.com/anthos/docs/concepts/overview)
* Anthos Config Management [site](https://cloud.google.com/anthos/config-management)
* Config Sync Overview [docs](https://cloud.google.com/anthos-config-management/docs/config-sync-overview)
* Guide To GitOps [site](https://www.weave.works/technologies/gitops/)
* Policy Controller Overview [docs](https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller)
* Kustomize [site](https://kustomize.io)
* Cloud Code [site](https://cloud.google.com/code)
* Config Connector Overview [docs](https://cloud.google.com/config-connector/docs/overview)
* Crossplane [site](https://crossplane.io)
* Skaffold  [site](https://skaffold.dev)
* Open Policy Agent [site](https://www.openpolicyagent.org)
* Backstage [site](https://backstage.io)

##### What's something cool you're working on?

Anthony shared info about GKE on [the podcast last week](https://gcppodcast.com/post/episode-272-gke-turns-six-with-anthony-bushong-gari-singh-and-kaslin-fields/) and he's been working on his [video series](https://www.youtube.com/watch?v=vf3KF3DO0Oo) on GKE cost optimization. The [solutions guide](https://cloud.google.com/architecture/monitoring-gke-clusters-for-cost-optimization-using-cloud-monitoring) and [white paper](https://cloud.google.com/resources/principles-of-cost-optimization-whitepaper) are great resources for this topic.

{{< transcript "MARK: Hi, and welcome to episode number 273 of the weekly Google Cloud Platform Podcast. I'm Mark, and today I'm here with Anthony. Hey, Anthony. How are you doing?" >}} 

ANTHONY: Hey, what's up, Mark? 

MARK: Great to have you. We were able to chat with Anthony last week because we were talking about GKE's sixth anniversary. And so it felt appropriate to have on our current guest. Anthony, can you tell us who our guest for today is going to be? 

ANTHONY: Yeah, Mark. Today we have the pleasure of having Megan O'Keefe. They are a developer relations engineer specifically focused on GKE, Kubernetes, and Anthos. 

MARK: And today we're going to be talking all about KRM, the Kubernetes Resource Model, as I understand it, but I'll learn a lot more about what it actually means in this conversation, huh? 

ANTHONY: Yeah. I think it's also something that's evolved over time, right? So really excited to hear from Megan about the evolution of the Kubernetes API and how it's become much more extensible to serve more than just Kubernetes resources. 

MARK: Definitely excited to get into that. But before we do, why don't we go ahead and do our cool things of the week? 

[MUSIC PLAYING] 

So for my cool thing of the week, we've got a blog post announcing that the "Google Cloud Reader" has reached 50 episodes. Yay! That is some awesome work from our great teammate Jenny Brown, who has been working on creating a podcast similar to the podcast you're listening to now that does audio recordings of some of the Google Cloud blogs as well as a few other resources. So it's been something that's been really cool to see, as I think it's a great way for other folks to get a chance to kind of keep up with all of the different posts on the Google Cloud blog-- it's a ton of posts-- and be able to actually listen to them. 

Before now we used to have a lot of commuting time, and that was a great time to catch up on news, and podcasts, and sorts of things. I don't know if people are still commuting now. But if you are, it's a great way to kind of keep up with the same resources, information, or if you just want to have an alternative way to listen to that, the "Google Cloud Reader" podcast is a great way to keep on top of those resources. 

ANTHONY: Yeah. We still have morning routines, right? 

MARK: Yeah. 

ANTHONY: Even if it's not a commute. 

MARK: Yeah. It's different than it used to be. But I still love being able to put on audio, or podcasts, or audio books, and kind of go about doing some other things while listening to those. Always a good time. 

ANTHONY: Absolutely. Yeah. My cool thing of the week is Google Cloud Build has launched a new mode of Cloud Build. So if you're not familiar with Cloud Build, it's a way to run automated sets of tasks, which we call builds. It's most commonly used for things like continuous integration, but can also be used for any general infrastructure automation. 

So private pools is a new mode for Cloud Build that actually allows connectivity to your private resources within a VPC. And so I think us just opens up a whole set of new use cases that Cloud Build, which previously didn't have VPC connectivity, was not able to fulfill. So it's a really, really, really cool way for folks to use a GCP native automation engine that can connect to, again, private resources. This could be your private GitHub enterprise, or pretty much anything that's over a VPC, or connected over a VPN, even in your own data centers. 

MARK: Yeah. I love to see it. Even if you're using cloud technologies, you're probably not 100% in the cloud. You probably have a mix of different resources, or even different clouds that you're running things on. So it's always cool to see examples of new technologies that help you kind of operate across multiple surfaces, because that's probably more realistic for businesses and enterprises that will be running tons of applications. 

ANTHONY: Cloud does not exist in a vacuum. 

MARK: That's a good way-- I think it's a much more succinct way of putting it. Well, with our cool things out of the way, why don't we go ahead and jump into our conversation with Megan? 

[MUSIC PLAYING] 

All right. Well, Megan, thank you so much for joining us. To get things started, can you give us a little introduction? 

MEGAN: Sure, absolutely. Yeah. Hi, Mark. It's great to be here. My name is Megan O'Keefe. I am a developer relations engineer at Google Cloud. I've been here for about three years working on Kubernetes things, Anthos, and really all things containers. 

MARK: And we have a whole kind of conversation diving a little bit more into the details of Kubernetes. But I think just to level set for in case people haven't heard of Kubernetes, which seems unlikely, but maybe haven't worked with it, can you give us kind of a quick overview of what Kubernetes is and why people use it? 

MEGAN: Yeah. Kubernetes is one of those things where I think it's talked about a lot. And I remember when I was first learning it a few years back, I found it a little confusing. And I think now in hindsight, a lot of the reason for that is because Kubernetes, I see it as kind of two things. It was created about seven years ago as a container orchestration project. It is a tool that is open source that allows you to keep all of your containers alive and provides automation around that. 

But since Kubernetes launched, it has kind of grown into this larger thing where it has a very powerful brain, the sort of API-driven architecture that allows you to manage other kinds of resources that aren't containers in a very declarative and almost like self-healing kind of way. And this has resulted in a very large ecosystem and a set of tools that work with and around Kubernetes as well. So it's kind of those two things. 

MARK: And one thing I've definitely found interesting that I think would be helpful-- I struggled with this when learning Kubernetes as well-- was this idea of declarative versus imperative. I'm not sure if other people have kind of gone through that same process that I did, but it would be great to just get a quick overview of what the difference between those two are. 

MEGAN: Yeah, absolutely. So I like to think of imperative as kind of a verb. So if you've ever run a Docker container locally, you would run a command, like Docker run, run being a verb. You're telling the Docker desktop app on your computer to run a container image. Declarative is more about nouns instead of verbs. It's saying, what do I want to run? And it's specifying almost like your desired state in more of a static way. 

So with Kubernetes, you actually have a file that you fill out with, OK, here's the image, and then here's some other fields as well, but you let Kubernetes take care of the verbs, or the actual deployment. And this allows for more intelligence, things like grouping, servers together into clusters. And Kubernetes is smart about where it will assign that container. That's declarative. And there's other tools as well. Terraform being an example. 

ANTHONY: Yeah. So it definitely makes sense from the breakdown of declarative versus imperative, and also the focus of how you see Kubernetes specifically on this API that lets you treat multiple machines as one, and things like that. So working in the Kubernetes space, what are some of the challenges that you've observed when people try to realize these benefits or take advantage of this declarative API? 

MEGAN: Yeah. It's a great question. I think there's a few ongoing challenges today. I mean, certainly, the Kubernetes ecosystem has grown a lot. And there's a lot of tools to accomplish much of what you need to do when it comes to one cluster. Once you start operating multiple clusters, whether that is multiple clusters on prem, or even clusters spanning different vendors, like different cloud providers, things can get very complex, very quickly. 

The reason for that is the Kubernetes API and its control plane knows about itself, and it can kind of operate as a unit and handle lots of nodes at once. But once you start having multiple of those control planes, multiple API servers, then you have to worry about getting those files, those declarative nouns to all of those various clusters. And this can result in some concerns around consistency and security. So that's one big challenge, I think. 

And the other is just kind of the size of the cloud native and Kubernetes ecosystem. And I've talked to some customers and developers that just experience a lot of decision fatigue. What do I use to do CI/CD? What do I use for storage networking, container runtimes? There's all these decisions that folks have to make. And it can be a bit overwhelming. 

MARK: Yeah. I mean, as you mentioned, Kubernetes has been around for quite some time, seven years. Just last week we did a podcast on the sixth anniversary of GKE. And that's just one of many, many tools that exists in this ecosystem. So like, it is complicated. And I can't imagine someone coming into this fresh and being like, hey, I need to start from scratch. Which of the 80,000 tools do I need to use to actually get my application deployed? 

So let's talk a little bit more about what the open source space looks like. I mean, Google isn't the only company, obviously, offering tooling around Kubernetes, right? 

MEGAN: Oh, yeah, absolutely. And I think one thing I really like about working in this space is that you have a lot of open source tools, as well as proprietary first party products. And often, talking to developers, they're usually dealing with a mix of things. They might be using the open source Envoy Proxy, which is a CNCF project to do service mesh, or even just as an ingress proxy. But then they might be using Azure AKS to do managed Kubernetes, and using all those things together. 

And I personally have sort of stopped keeping up with every new project in the CNCF landscape because there are hundreds. But I think it is really cool to almost have that privilege of choice and to see lots of different use cases and people mixing and matching tools to whatever ends they need in their organization. 

MARK: And an important kind of tool in that world, especially from the Google perspective, is also Anthos, right? 

MEGAN: Absolutely. And I think working in the Anthos space has also been very interesting, because as you said, GKE is about six years old as a product. It has come very far. Now we have different modes of running it, lots of customization. 

But Anthos is still relatively new. It launched only about two years ago in 2019. And certain environments that Anthos supports-- so Anthos is designed for hybrid multi-cloud, things that don't just run in Google Cloud data centers. That's still a very nascent space. So things like running Google software on customer data centers and on bare metal, that's almost like a new paradigm with Anthos. And I think a lot of customers, and even Google, were still trying to figure out the right balance. 

Because Anthos includes open source APIs, too, you have that element, and wanting to keep up with the ecosystem with things like Open Policy Agent and Istio. And it's definitely complex, but very fun to work in as well. 

ANTHONY: There's a handful of problems that sort of came up while you were describing what Anthos does. I heard service mesh. So trying to handle communications between micro service architecture, but I also heard like Open Policy Agent, which as I understand it, is focused on providing constraints and security around your cluster, what gets deployed to your cluster. So I think if you had to sum it up, if it's possible, for Anthos, in one sentence, what is it looking to achieve, I guess, as a platform? 

MEGAN: Yeah, absolutely. And I think you'll hear people describe Anthos as different things. I like to describe it as the path to Kubernetes with Google. So emphasizing that it's a path towards Kubernetes. A lot of customers and developers that we talk to have virtual machines, serverless. They're using a pass. They might have a combination of things. 

And they might not have adopted Kubernetes yet. Anthos can still be for them. We have tools like Migrate for Anthos, which is all about getting virtual machines into containers on GKE. And it's also a way to sort of expand your Kubernetes platform with best practices tools. And so Open Policy Agent policy controller is one path to do that. 

MARK: Right. And one of the most interesting things there-- I think you kind of hinted on this, too-- is that like this is different for every single company, right? Some companies are starting from scratch and looking at, hey, I've got this huge amount of virtual machines that I want to migrate. Some companies are in the cloud-first ecosystem, and they already know what all these containerized tools and technologies are, and they're already familiar with it. It's just going to be different for every company and different for what they're trying to achieve, right? 

MEGAN: Yes, absolutely. And I think one nuance and thing that gets tricky is oftentimes we talk about Kubernetes as an API that you might not want to expose to all your developers. So what we hear is a lot of platform teams building sort of custom bespoke platform layers that face their own developers. And so we've got now open source tools, first party proprietary tools, as well as in-house software. And with the large enterprises, that triad is what you see pretty commonly. 

And it's really cool that some of these companies-- Spotify being an example-- have open sourced their own developer facing platforms and their own abstractions. There's a project called Backstage that they put out that provide guidance to organizations who might not want to be building that kind of stuff from scratch. But I think that's a really key point. 

I think even with the power and customization that Anthos provides, it is very likely, given the breadth of the Kubernetes API, that you're going to want to build something more opinionated on top, especially if you're a large organization. 

ANTHONY: Yeah. So definitely what I'm hearing there is really how powerful the Kubernetes API is, that it could satisfy all these various different types of configurations and architectures, cutting across multiple clouds, or even data centers, or for some folks, even edge environments. So I think that we'd love to hear more about the work that you've done with the Kubernetes API and the Kubernetes resource model. So tell us a bit about the content that you've put out this year around that. 

MEGAN: Yeah, absolutely. So this year, I put out a content series called "Build a Platform with the Kubernetes Resource Model." And this was a demo series on GitHub with a set of accompanying blog posts that was all about just this problem, which is you're an organization. You're a platform team. You serve multiple developers and teams. You have multiple clusters in GKE or elsewhere. How do you deal with it all? How do you get that declarative config to those clusters? How do you enforce policies? What's the developer story and what kinds of abstractions can you add on top? And kind of providing sort of a first set of steps towards that comprehensive platform using Anthos tools and GKE. 

MARK: Let's take a step back there. So you mentioned the Kubernetes Resource Model, or KRM. What is the Kubernetes Resource Model? 

MEGAN: KRM is not a tool or a product. It's kind of just a concept. And it refers to the Kubernetes API resource model. So this is a piece of the architecture of Kubernetes itself that defines what those declarative configs should look like, whether it's defining what a container should be, whether it's defining some other custom resource that can deal with something outside of the cluster. All of those resource types kind of have to look the same. They have certain fields, like metadata and API version, and they have their own spec. And these are often defined in YAML files. These are static files that you can push to a Git repo. 

And once you have those resources, the API server running in the Kubernetes cluster has an idea of what that resource model is. And it knows what to do with those kinds of resources and how to actuate on them using what's called controllers, which is I see this resource type, and I know what to do with it, and how to take action, and do those verbs on that declarative object. 

MARK: Right. Yeah. I mean, that fits in with what you were saying earlier. But you also just mentioned that sometimes the KRM can refer to Kubernetes things, things that exist in the Kubernetes space, but also things that exist outside of the Kubernetes space. What does that look like? 

MEGAN: Resource model, I think, is a really important part of that phrase, which is Kubernetes provides the basis of that. So there are a set of core Kubernetes APIs that are part of any distribution of Kubernetes. This would be something like a deployment, a service, a secret. These are core Kubernetes objects. 

But the powerful thing about the Kubernetes API is that it can be extended with what's called a Custom Resource Definition, or a CRD. Anybody can really define what one of these is. It could be something very arbitrary, like I'm an organization, and this is what my factory resource looks like for one of the factories in my business. 

Or it could actually define something that is a workflow that lives completely outside of the cluster. So it could be something like a hosted load balancer running in Google Cloud. And what allows that to actually happen is that custom controller that you or an open source tool maintains. And this knows what to do with that custom resource. So in the case of a hosted load balancer, it's some Google code that's actually running in your cluster. That's like, ah, load balancer, I know what to do with that. And combined, you can actually use KRM to define both Kubernetes and non-Kubernetes resources. 

ANTHONY: And across all of that, it remains the declarative sort of interface, right? For not just Kubernetes objects, but for all these cloud resources that you might consider, you're actually defining sort of your end state. And the controllers are what implement sort of all that logic to make it happen, right? 

MEGAN: Yeah. That is absolutely true. And so the other really powerful thing is once everything is in that YAML KRM format, and it's sort of all together, whether that's in a CI/CD repo, or elsewhere, it allows you to standardize in other ways. For example, running certain types of validation on resources, enforcing policies using the same policy engine for both Kubernetes and non-Kubernetes. A lot of possibilities, I think, open up. 

ANTHONY: That's pretty powerful, thinking about how this shifts, how traditionally config was pushed out to a fleet of servers that run infrastructure or that run applications. So I think that sort of what I'm starting to get is a picture of deploying all of these declarative resources to a single cluster, right? And so we actually have the magic of just providing declarative manifests. 

But I think earlier you talked a little bit about multi-cluster challenges. And now I'm trying to think, OK, if we have all these declarative manifests for these various resources, and we try to expand that across clusters, the challenge is becoming clear, right? Because maybe I have imperative ways of deploying that declarative config to those multiple clusters. So I guess, like, is that a challenge that users are seeing? I'm sort of trying to reach here. I want to confirm with you. 

MEGAN: Absolutely. And I think even once you get into three clusters, four clusters, even if you have something like a loop in your CI/CD that's for all of these clusters, it can get complicated. And more than that, if you think about CI/CD and the way those systems typically run, it's kind of one and done. I see a change in a repo, I maybe run some tests on it, I build and tag images, inject the image tag, kubectl apply, one and done. 

So if somebody were to go into your prod cluster and actually change your resource or delete a namespace, something bad-- that's what's called configuration drift. And if you have a lot of clusters, it can be hard to manually have eyeballs on all of those clusters to make sure that doesn't happen. And so there has sort of come a need for things that are actually outside of CI/CD that can manage these Kubernetes resources. 

MARK: So I think this is something that has been bouncing around, especially lately, the open source communities, this idea of GitOps. What is GitOps? What does it actually mean? And in the kind of examples that you were just talking about, which is basically like, hey, I've got multiple clusters. I need to set up some kind of scalable way to do CI/CD. What does all of that actually look like in terms of implementing it and avoiding configuration drift? 

MEGAN: So GitOps is actually a term that was coined by Weaveworks several years ago, as Kubernetes was becoming more mature. And it kind of refers to a deployment model for Kubernetes or other declarative systems that focuses on Git, where you have a source of truth-- that's often one or more Git repositories-- where your configuration is stored. And different mechanisms for automation can be watching those repos and taking action. 

So CI/CD, I think, is definitely part of GitOps. There's a model that I really like to use in demos and things where source code lives in one Git repo, and Kubernetes configuration lives in another Git repo. And you can set up a set of CI/CD pipelines to deal with pull requests, build and tag images, deploy things to staging, deploy to production. 

But even then, you still have that problem of one and done and configuration drift. There is a Google tool, actually, that was released a few years back, and very recently now is available to all GKE customers called Config Sync. And this is something that lives outside of CI/CD. It's actually an agent that runs inside of your cluster. And it watches a repo often separate from your source code and your source Kubernetes config. It watches Git for changes. And it's also watching your cluster to make sure that there is a match. 

So for example, if you need a certain service account or a certain base layer resource deployed to all your clusters at once, you can actually have Config Sync and all of your clusters point at that same Git repo. That way, it's going to be syncing changes to all of the clusters at once. 

And then if somebody goes into one cluster and makes a change, Config Sync is going to know this. And it's going to be like, I'm going to bring it back to where it needs to be. So taken together, I think, CI/CD tools and Config Sync can allow you to achieve this sort of GitOps automation in a way that avoids config drift, and also gives your developers some speed and some agency. 

ANTHONY: Yeah. I can definitely see how moving that to a pull model, where it essentially scales with one agent that you're describing per cluster, definitely helps fix some of the one and done pipeline problems. Some of the things that you might have in the CI/CD pipeline-- you might have security checks or something like that. When you move to sort of the GitOps model, where does security and policy come into play that was traditionally maybe handled by a stage in your pipeline or something like that? 

MEGAN: Yeah. It's a great question. I think with GitOps, it's a bit interesting in that, yes, with something like Config Sync, I think you are preventing a bad actor or someone from accidentally deleting a necessary resource that might be important for security, so like service account, or a role-based access control, something like that. 

But Config Sync itself doesn't impose any restrictions on what can be in that Git repo. So all it knows is what am I supposed to deploy. So what there has sort of come a need for, and this was the case in open source as well a few years ago, is almost like a runtime gate that is actually sitting right at the Kubernetes API server and looking at everything coming in, no matter if it's deployed with CI/CD, Config Sync, kubectl apply. 

No matter how a config is getting in, you need a way to make sure that it is compliant with whatever policies your organization has. And so there is an open source project called Open Policy Agent. There's a flavor of that project called Gatekeeper, which is a Kubernetes admission controller, that can enforce rules that you write, like, this role-based access control can't do that, but it can do this. So it's not just what kinds of resources are allowed, but within each resource spec, what kinds of things are allowed. 

And this is an incredibly powerful tool. And there's actually a managed version of this within Google called Policy Controller with some default constraints. A constraint being a rule about a piece of config. I find this project and product very exciting, because it allows you to scale out to multiple clusters and be secure in what ends up getting deployed, even if something bad lands in Git. 

MARK: Yeah. And I think it's important to also think about bad actors, not necessarily always as malicious people, but also sometimes it's just folks who are making changes that they don't quite understand the implications of, or they somehow have gotten access to something they're not supposed to have. And they're just, oops, wrong cluster, right? There's a lot of different reasons that's really important to have these controls in place, because accidents do happen. 

So this tooling makes a lot of sense from the administrative point of view, right? There's a ton of stuff that folks can set up that can help them configure and kind of keep the configuration safe across multiple different clusters. But that's all from the administrative standpoint. What does this look like for someone who's like writing an application or a developer? How are they supposed to kind of understand all of the complexity here? And what role do they play when they're trying to just write an application? 

MEGAN: The thing I like to stress, especially with customers operating larger environments with lots of teams, is you don't have to expose every app developer to all of the stuff going on. They do not need to know how to configure Config Sync, or the policy controller constraint, template a cluster, and set up a new one. 

If you think about it, what does an app developer usually need to do? Write code, test their code, pull requests, code reviews, approvals, monitoring, getting things into stage, getting things into production. And certainly in every organization, that sort of division of labor might look different. Some organizations have SRE. Some don't. 

But that's the overall picture. And I think making sure that that process is as streamlined and speedy as possible helps make sure that developers can feel empowered to deliver code quickly, and also, importantly, that changes can be smaller. It's not this sort of, OK, a PR is going to take a really long time to land, so this change needs to be really big. 

And then that can help with things like smaller changes might be a bit easier to roll back incrementally. And so thinking about the sort of overall concept of DevOps and sort of streamlined speedy development, Kubernetes can help with this. But I think only if you are a bit strategic about it within your org. 

And I think that this is really an area where peripheral tools, especially in open source, can help a whole lot. And there are two that I really, really like to use. The first one is called Skaffold. This is an open source project that works with any Kubernetes. And it can watch your source code locally, see if you're making changes as soon as you save a file. So you're building a Java app. You save that Sprint Boot service in your IDE. Skaffold's like, OK, I see some changes. I'm going to deploy a test container into your development cluster. And it allows for that speedy development. 

Another tool that I really like is called Customize. So one problem with Kubernetes YAML is that if you have multiple environments or flavors of your app, it can get a bit duplicated, or you could just be dealing with a lot of YAML files all over the place. There's a lot of tools out there, like Helm, that help you deal with things like this. I really like customize because there's no templating language. It is all just Kubernetes YAML. 

So you can, for instance, have a set of base config that's just valid Kubernetes YAML, and then have a development overlay on top of that with config that is specific to developers, like enabling debug level logs in the environment. And you don't need a whole separate YAML for that, just a little snippet. And customize knows how to kind of sandwich it all together and deploy it into development. 

And you can use those same configs for staging and production as well using different overlays that specify different things. So I really like those tools. So it's really all about abstraction. And that's what I really try to stress with app developers. Kubernetes is complex. Don't expose everyone to it. 

ANTHONY: Yeah. I'm definitely loving the narrative that's coming together just from what you've described here. It's really, I think, what some of the Kubernetes founders have described. Kubernetes is a platform for building platforms. So part of that is making sure that what's exposed to developers is actually right in their wheelhouse, so what you described, right? Things like building features, and shipping code, and less on dealing with some of the config that can be handled by the platform. I truly love that. 

One of the things I want to kind of dig in a little more on what you described is some of the non-Kubernetes resources that can be utilized with the Kubernetes Resource Model, or managed, or deployed. So I think provisioning things like databases or VM instances, how would you do this with the Kubernetes Resource Model or the Kubernetes API? 

MEGAN: Yeah. It's a great question. So there's a lot of very new tools and APIs around this. I would say hosted resources in the Kubernetes Resource Model is like a very new area. But there's some exciting work being done. So first off, Google Cloud does have a product in this space called Config Connector. And this is like Config Sync in that it is an agent running in your cluster. But it's a bit different in that rather than deploying resources, it's basically a set of controllers that knows what to do with Kubernetes config for cloud-hosted resources. 

So this could be something like a Google Cloud SQL database, an IM service account, a Compute Engine instance defined as YAML. And Config Connector will take care of deploying those to your GCP project. So that's how I would recommend doing it with Google Cloud. 

But if you operate in a hybrid or multi-cloud environment, things can be a bit tricky. So Config Connector only works with Google Cloud. So fortunately, at least AWS and Azure both have their own first-party tools that are similar. There are controllers that know how to deal with hosted resources in those respective cloud providers. So there's nothing stopping you from running the different hosted controllers. 

But there are projects, Crossplane being an example, of APIs and tools that try to span multiple providers at once. So if you're using AWS Azure and GCP, you could actually use Crossplane and its APIs to deal with hosted resources across all three, using the same tool, the same set of custom resources with different sort of branches for each cloud provider. So it's really all about kind of what's going to work best for you, depending on what environment you have set up. 

ANTHONY: Yeah. That's really compelling, because as much as we'd like to think that all applications are self-contained within Kubernetes-- I mean, most folks that I work with or interact with-- I'm sure you see something similar-- there's often dependencies that just are not within the Kubernetes cluster, or within the Kubernetes API's native resources, right? 

MEGAN: One of the demos that I actually added to the series was needing to self-serve certain things. So imagine you have developers that need easy access to virtual machines with certain operating systems. They might not have a local environment like that. Say they need that to do something with the Kubernetes platform. I think when it comes to things like databases, or VMs, or any kind of resource, you're absolutely right. Kubernetes is not in isolation. 

MARK: I can't imagine Crossplane being a very simple thing for folks to kind of take on, because it's aiming at what I can tell is a very complex space. When you're looking at multiple clusters of Kubernetes, you're talking about a tremendous amount of complexity and getting those synced up. But then when you're talking about multiple cloud providers, which is a very realistic scenario for kind of large companies that are looking at either creating fault-tolerant systems or just taking advantage of the different advantages of different cloud providers, there's a tremendous amount of complexity there. 

So it sounds like Crossplane is still something that's very early. And there's probably going to be a lot of growth in that space. But what is the most exciting thing for you when you hear about these projects that are really aimed at tackling massive scale problems like this? 

MEGAN: There's honestly a lot that excites me. So I'm remembering the very first KubeCon talk I gave in 2018. I was doing early work on edge computing and multi-cluster platforms. And it was all back then just like very early. We had to write everything from scratch. And I think what you're seeing are more tools that acknowledge that multi-cluster Kubernetes is a thing that a lot of folks want to do. 

And because the use cases are so different-- many edge small footprint clusters, a few clusters, but they're spanning multiple cloud providers-- I think you're still seeing these sort of unified use cases around, OK, CI/CD, base layer config, monitoring, policy, that do span the different use cases. And that's what I'm most excited about, kind of getting folks unified around, OK, what do we all need, whether it's open source or products, kind of everyone kind of sharing what they've learned and what's worked for them. So I'm just overall excited about where the multi-cluster space is going to go. And it's certainly come a long way since I started working on this. 

ANTHONY: Awesome. So where can listeners go to kind of get their hands on some of this and take a look at least some of the baseline things that they should be considering when creating this platform based on KRM? 

MEGAN: All of the demos are available and ready to use on GitHub. And I think we can link those down below. And then each of the five blog posts are on the "Google Cloud" blog, and they're linked from the demos as well. So hopefully, those should be easy to find as well. And within each of the demos, there's a whole bunch of other links to learn more, because this is definitely a large topic with many different facets. 

MARK: Yeah. I love the demos that you've put together. So I highly recommend people check those out. The links will be in the show notes. It's such a cool kind of walk-through, especially for folks who are new into this space, to kind of see what this looks like in action and actually get some hands-on practice, which is always one of the most valuable things you can do. 

So unfortunately, we're just about out of time. But as we wrap things up, is there anything else you want to mention? And actually, I do want to ask you, like, what's the number one thing you want folks to kind of think about as they walk away from this conversation and thinking about Kubernetes and KRM? 

MEGAN: I would say one-- if you are new to Kubernetes, if this is uncharted territory for you, Kubernetes has a learning curve. And I think no matter what side of it you're learning, it might take some time. But I think that the investment in a lot of cases is absolutely worth it if this is something that you want to adopt. And there are many resources that are designed for different levels. 

And the second thing I would say is if you are experienced with Kubernetes and you are looking to expand your platform, maybe adopt some tools, it's a very broad space. And I would recommend actually starting with open source, things like Skaffold, Customize, Open Policy Agent, and kind of exploring, even seeing what do the different cloud providers offer before going down a well-defined path, because this is still an evolving space. So don't be afraid, lots of resources, but also, yeah, it's definitely a bit complex. 

MARK: Yeah. Well, thankfully, we have great content like yours to help get people started. So thanks again, Megan, for coming in and sharing some of your work with us. 

MEGAN: Yeah. Thank you so much for having me. I really appreciate it. 

MARK: Once again, thank you so much, Megan, for coming in. Definitely learned a lot, and I think it's also really helpful to understand the scope of kind of KRM, but really just Kubernetes in general, right? There's so much to it, and it's a lot more than just running an application, or running a few services. 

I think we were talking about this before with your cool thing, too, Anthony. We were talking about being able to take cloud technologies and scale them across all these different surfaces. And I think that was a good part about the Kubernetes Config Connector, right? 

ANTHONY: Absolutely. I mean, I'm definitely interested in walking through some of the content that Megan had put together around building a platform with KRM, specifically not just Kubernetes resources, but how you can also extend this into databases or pretty much anything else that can be provisioned in GCP. 

MARK: Yeah. I think it's super cool. And I definitely highly recommend for those folks who are interested to go check out Megan's content and kind of get started, because it does very much go through this hands-on process, which we've said this a number of times, but I think that's probably the best way to learn, I feel like, is always kind of getting your hands on, and trying it out. And it's just a really cool set of five pieces that let you kind of walk through that process of spinning up resources and using KRM. So huge fan of it. Definitely go check it out. 

Well, Anthony, we had you on as a guest for the GKE sixth birthday episode. But what have you been working on since then? 

ANTHONY: Outside of being in the hot seat on your podcast, I have also had the opportunity to work on a brief video series which covers how to build monitoring systems for GKE cost optimization. It's basically geared for costs for cluster administrators who are managing a GKE cluster for multiple tenants, and how do you actually make sure that you're able to understand whether or not those tenants are efficiently using the resources that they're requesting. 

MARK: Yeah. It's a great series. I think there's some previous videos in that one that we had worked on before where it really just explores a whole bunch of different concepts. And I think they're becoming more and more important as folks are kind of learning more about Kubernetes, trying to really stretch the limits of it, and really trying to understand, OK, well, I can throw all of my applications at Kubernetes, and maybe I figured out how to scale effectively. But the next question is, how do I make sure I'm not wasting resources? And how do I look at monitoring and optimizing the resources that I am using and to make them kind of fit better for my applications? 

ANTHONY: Yeah. It definitely builds on a lot of the content that you put out. I think one thing that's new within this video series is that we also have a technical white paper on how you can actually set this up with cloud monitoring. And so yeah, it's definitely worthwhile to, as you mentioned before, just getting your hands on an example system, an example cluster, and take a look at what that looks like. 

MARK: Yeah. That's a good point. We should put a link to the white paper and the solutions guide into the show notes. So we'll make sure we do that, because those are really great resources. They're definitely a lengthy resource to try and take a look at a whole bunch of things, because there isn't going to be like a switch that you can just flip, other than maybe GKE Autopilot. 

But there isn't going to be like a switch that you can just flip and have everything be 100% optimized. There's usually a lot of work that does go into understanding what you're using, how you're using it, and kind of where are the different levers that you can eventually kind of tune in to what's perfect for your applications and your workloads. So these guides are super helpful to help you think about different parts, and then start to apply them. 

ANTHONY: Yeah, absolutely. We'll include those links in the description. 

MARK: Awesome. Well, I hope everyone enjoyed the conversation today. And for all of our listeners, we'll see y'all next week. 

[MUSIC PLAYING]