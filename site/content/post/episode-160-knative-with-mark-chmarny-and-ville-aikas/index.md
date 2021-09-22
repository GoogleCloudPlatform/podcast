+++
audioDuration = "00:34:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.160.mp3"
audioSize = 50504545
categories = ["Knative", "Kubernetes", "GKE"]
date = "2019-01-30"
description = "This week, Mark welcomes Gabi as his new co-host. and they discuss Knative with Mark Chmarny and Ville Aikas."
draft = false
episodeNumber = 160
hosts = ["Mark Mandel", "Gabriela Ferrara"]
title = "Knative with Mark Chmarny and Ville Aikas"
image="/post/episode-160-knative-with-mark-chmarny-and-ville-aikas/images/hero/hero-EP-160.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/8H4Dvahri8v"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ale46d/episode_160_knative_with_mark_chmarny_and_ville/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

We're back! This week, [Mark](https://twitter.com/Neurotic) welcomes [Gabi](https://twitter.com/gabidavila) as his new co-host! Listen in as they discuss Knative with [Mark Chmarny](https://twitter.com/mchmarny) and [Ville Aikas](https://twitter.com/AikasVille). 

So what is Knative? Mark and Ville explain that Knative is basically a way to simplify Kubernetes for developers. This way, developers can focus on writing good code without worrying about all the aspects of Kubernetes, such as deploying and autoscaling. Knative helps with these functions automatically. Knative also supports many languages which allows developers to bring their own stack. The day-to-day of developing doesn't change, which is the beautiful thing about Knative! 

Knative is open source and easy to deploy. Developers can find installation guides online for any Kubernetes certified instance of service. A link to the installation guide for Knative on GKE is in our show notes.

<!--more-->

##### Mark Chmarny

[Mark](https://twitter.com/mchmarny) is a Technical Program Manager for Serverless focusing on enabling customers to be successful with our serverless portfolio on GCP, and driving community awareness of our serverless products on GKE. Prior to that Mark lead the Partner Engineering team for Data, Analytics and ML at Google. Before Google, Mark was the Sr. Director of Datacenter Solutions Group at Intel. 

##### Ville Aikas

[Ville](https://twitter.com/AikasVille) is a member of the Technical Oversight Committee for Knative, leads Knative Eventing, and (with Matt) conceived ducks for K8s.  Previously, Ville worked on Helm, K8s Service Catalog and Kubernetes (before it was Kubernetes). Before the OSS stint Ville was a TL for Google Cloud Storage.

##### Cool things of the week

* Let the sunshine in: opening the market for more renewable energy in Asia [blog](https://blog.google/outreach-initiatives/sustainability/let-sunshine-opening-market-more-renewable-energy-asia/)
* Get Go-ing with Cloud Functions: Go 1.11 is now a supported language [blog](https://cloud.google.com/blog/products/application-development/cloud-functions-go-1-11-is-now-a-supported-language)
* Building Google's Game of the Year with Cloud Text-to-Speech and App Engine [blog](https://cloud.google.com/blog/topics/inside-google-cloud/building-googles-game-of-the-year-with-cloud-text-to-speech-and-app-engine)
* Welcome to the service mesh era: Introducing a new Istio blog post series [blog](https://cloud.google.com/blog/products/networking/welcome-to-the-service-mesh-era-introducing-a-new-istio-blog-post-series)

##### Interview
* Knative [site](https://cloud.google.com/knative/)
* Knative Blog [blog](https://blog.knative.dev)
* Knative on GitHub [site](https://github.com/knative/)
* Kubernetes [site](https://kubernetes.io)
* MiniKube [site](https://kubernetes.io/docs/setup/minikube/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Cloudevents [site](https://cloudevents.io)
* Knative Install on Google Kubernetes Engine [site](https://github.com/knative/docs/blob/master/install/Knative-with-GKE.md)
* Knative Slack [site](https://knative.slack.com)

##### Question of the week

[How long does it take for Cloud SQL to detect an outage and trigger High Availability failover?](https://cloud.google.com/sql/docs/mysql/high-availability)

##### Where can you find us next?

Gabi will be discussing the awesome new features of MySQL 8.0 at [PHP UK - London](https://www.phpconference.co.uk/schedule/) and you will be also able to find her at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf)

Mark will be at [GDC](https://gdconf.com) in March, [Cloud NEXT](https://cloud.withgoogle.com/next18/sf), and [ECG](http://ecgconf.com) in April

Our guests will be at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf) and [KubeCon Barcelona](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/)

{{< transcript "[MUSIC PLAYING] MARK M.: Hi. And welcome to episode number 160 of the weekly Google Cloud podcast. I'm Mark Mandel. And I'm here with my colleague Gabi Ferrara. Hello, Gabi. How are you doing today?" >}} 

GABI: Hello, Mark. I'm good. How are you? 

MARK M.: I'm good. Thank you so much for joining me on the podcast. It's very exciting to be working with you. 

GABI: Yeah. First time. So let's see how that goes. 

[LAUGHS] 

MARK M.: I think it's going to go great. Before we get into the podcast, do you want to tell people a little bit about yourself, just so they get to know you? 

GABI: So I'm a new buyer here. I'm a developer advocate at Google Cloud for storage and databases, mostly focusing on Cloud SQL, which it is offered for MySQL and Postgres. And sometimes I do other stuff, like make Memorystore or get in the middle of stuff that's none of my business, like Knative. 

[MARK LAUGHS] 

MARK M.: Excellent. Yeah. Speaking of Knative, that is what we are going to be talking about today. So we're going to be talking with Ville and Mark, talking about Knative and all the things you can do about it. And then after that, we're going to have our usual question of the week where I'm going to ask Gabi a question about Cloud SQL and how long it takes to detect an outage and trigger high availability failover. Are you ready? 

GABI: OK. 

MARK M.: Excellent. We always do our cool things of the week. Gabi, do you want to go first with one of your cool things of the week? 

GABI: So we are opening a new renewable energy plant in Asia right now. We only had before in the Americas and Europe. 

MARK M.: Nice. 

GABI: So Google announced they're doing a new renewable energy plant in Asia. And that's cool because before we only had in America and Europe. So that's going to be a 10 megawatt plans of solar array. And I don't know how much that power is, but I think it powers a lot of stuff on that in the same place. 

MARK M.: I think it's a lot. 

GABI: Yeah. 

MARK M.: Awesome. And we'll have a link to some details of that in a blog post in the show notes as well. I'm really excited because we're getting going with Cloud Functions. 

[AUDIENCE GROANING] 

That's a terrible pun as well. But Go 1.1 is now a supported language on Cloud Functions, which makes me really happy because I write really terrible JavaScript. And I try and write Cloud Functions. And it's always a mess. Now I can write it in the language that I'm much more familiar with. 

So if you want to play with that, that is available now in beta, which is awesome. So you can write HTTP functions with Go. You can run it against events. So if you're a Go lover, like I am, you can take advantage of that right now. 

GABI: Another cool thing of the week, it's the Google game of the year, which use a Cloud Text-to-Speech API and app engine. And they talk about how they were able to save costs, not having to hire a new actor every time they needed to add new stuff on their game, and also being scalable with app engines. So give it a shot at that blog post there. 

MARK M.: Yeah. You can actually go straight to the link and bring it up. It's actually a really cute game that you can play. 

GABI: Yeah. 

MARK M.: I really like it. It's fun. Finally, we also have a new blog post series by fellow developer relations person Megan O'Keefe, who is a developer programs engineer, talking about SDOs. So it's a series of articles talking about SDO and how it plugs into a variety of things, actually, that I really like. So it's a basic discussion about having service mesh and where that's applicable, but then also going into where that's been integrated into things like Knative, talking about multicluster SDO, all that kind of stuff. 

So going to have a link to the first one that's in the show notes. But keep an eye out for follow-up articles after that. 

Awesome. Well, Gabi, why don't we go chat with our guests and learn all about Knative. 

GABI: OK, let's go. 

MARK M.: So big thanks to Mark Chmarny and Ville Aikas for joining us today to talk about Knative. Thanks so much for joining us. How are you doing today, Ville? 

VILLE: I'm doing great. Thanks for having us. I'm really excited to talk about Knative. So thanks for having us. 

MARK M.: Awesome. And how are you doing, Mark? 

MARK C.: Doing good. Excited as well with Ville and talking about Knative. Thank you for having us. 

MARK M.: Fantastic. Awesome. So before we get stuck into Knative, do you want to tell us a little about who you are and what you do? Ville, why don't you go first? 

VILLE: I'm one of the founders of the Knative project. That's something that I've been working on for the last year and a half almost now. Prior to that, I've been working on several open source projects. Helm, Kubernetes, Service Catalog, and so forth. And before that, worked on Kubernetes before it got open-sourced. And then a stint in Google Cloud Storage. So all cloud all the time. 

MARK M.: Awesome. Mark, do you want to follow up? 

MARK C.: Yeah. I'm a technical program manager for Serverless at Google. Recently, however, it's been much more closer to a developer advocate type of role, working on the Knative open source project as well as the GKE add-on, which is based on Knative. 

That kind of transition of a role really came from the early days where we were super scrappy. We had a small team on Knative. And everybody did two or three jobs. But as the team grows, and we're bringing new people on, much more focused on Knative ecosystem, driving community awareness, partners, contributors, speaking engagements, blogs, demos, and so forth. So I'm excited to work more and more with the outside contributors to Knative. 

GABI: OK. Thank you, Mark. We're happy to have you here, too, to talk about Knative. And I would be really happy to learn a bit more about Knative today because my knowledge is a bit thin on this subject. I just know a bit of Kubernetes. And I'm really excited to see what you have to show us about the subject here. 

MARK M.: Yeah. Why don't you give us sort of a high level overview of, like, what's the problem that Knative is trying to solve? 

VILLE: Sure. So one of the things that we did with the Kubernetes was we really-- this is my words. I think we gave the cloud and the developers assembly language for the cloud. So you want to go and get stuff up and running in the cloud-- the instruction set, if you will-- and provide it Kubernetes. 

And Kubernetes is great. The problem is that there's a lot of pieces that you have to go ahead and understand in order to effectively use it. And for the most part, the developers don't really need to know all those things, ideally. But they are exposed to it in order for them to actually get things up and running. 

So as we looked around for a while, we realized that there is a need for a higher level abstraction at Kubernetes level that would allow us to go ahead and meet the developer's need much more closely. And that's sort of where the Knative comes. So if you think about the Kubernetes and even SDO as well, as kind of the assembly language, Knative is bringing you something like the LeapC or standard Leap. That's how I think about it. 

So there's a lot of the problems that are being solved all over the place, especially at the serverless base. And we kind of wanted to bring all of our friends and all the knowledge and solve those problems in one place and then go ahead and focus on building super awesome developer experiences on top of that. 

MARK C.: If I could just maybe add something to this, I think this should be no surprise to the regular audience of this podcast that Google bet pretty big on Kubernetes in SDO. 

MARK M.: A little bit. 

MARK C.: If we kind of look a little higher up the stack, where the developers of applications on Kubernetes actually are, I think, to some degree, they just want to write code. They don't want to deal with building Docker images, uploading them to registry, deploying different services, exposing them to internet, and all the other mechanical things that are related to deploying an application. 

So at the end of the day, really, Knative solves for the experience of the developer on Kubernetes that it would not require them to know every single aspect of what Kubernetes is. And the analogy that Ville uses around the low level kernel-- it's spot on-- is kind of something that we're hoping nobody ever has to think about when they are developing applications on Knative, what's underneath. 

GABI: I have a question. So you say that you don't want developers to be worrying about every aspect of Kubernetes, of how could the load balancer, for instance Knative, would solve that problem for you. Like, they are a load balancer that would expose the load balancing-- 

MARK C.: Yeah. 

GABI: --on Kubernetes. And my question I ask-- because a lot of the problems that people have, it's because we need to create a Docker image. So you have a YAML file there. Then you have a YAML file for Kubernetes. And does Knative solve that problem to have to deal with different configuration files to do just one deployment? 

MARK C.: That's an excellent question. I'm sure Ville can speak to that, too, being come closer to technical side. But on a developer side, I think the things that you will see that directly speak to that kind of friction that you just described is being able to skip the entire Docker image as a requirement for somebody who wants to use Knative. 

So we have use cases where address directly deploying from a source code. And Knative still builds that Docker image for you behind the scene. But you, as a developer, don't have to worry about it. 

Furthermore, just like you have pointed out, once you deploy that thing, usually, people are excited because the Hello World application comes up. But if you're looking at kind of day two or day five problems, where the application is now successful, and dealing with some of the autoscaling problems that developers normally have to deal with, this is another area where Knative really helps you because you don't have to think about it. It's based on autoscaling. And when you, audience, goes away, so does the resources that are required to run your application on top of-- in Knative. 

GABI: Thank you. 

MARK M.: Now, this sounds really cool. So just to take a step back a little bit in some ways, we said sort of like we're deploying things, we're deploying applications. Like, what does that mean to you? Am I deploying Redis with this? Or what kind of things am I deploying? 

VILLE: That's a great question. Yeah. So typically, the first target market, really, for Knative, is what is typically the serverless, a.k.a. stateless, services. It is things like functions. We want to make sure that you have a very similar user experience for both or the developer experience for both of these, whether it's an application or a function. So you don't have to go and have that mental shift, which is, oh, I'm doing function-y stuff, or I'm doing application-y stuff when typically, the lifecycle and the development processes and practices are very, very similar. You have some code that I would like you to run for me, and don't screw it up, please. 

MARK M.: Awesome. Is there particular languages that are supported in Knative now? Or can I bring my own stack if I want? 

VILLE: Bring your own stack. 

MARK C.: Yeah, that's the beauty of Knative. The word that we keep using to describe that is this idiomatic experience. If you are developing applications in Node, Java, Python, C#, you bring that same exact experience. And you don't change your day to day operations to kind of adapt to Knative. You follow the same procedures you would develop your application somewhere else. 

There is no extra attributes you have to put on top of your functions. There is no extra configurations out of your code that you have to do in order to make it work for Knative. Knative is kind of built on an assumption that there is a serverless container that we will run. And we also hope you were building that container. 

To a large degree, Knative is polyglot from that standpoint. Anything that can be containerized can be run on Knative as long as it's an, right now, HTTP application. 

VILLE: Absolutely. 

MARK M.: Sweet. So I can write functions in like Haskell or something. 

VILLE: If that's what you like, yes. 

GABI: Even PHP? 

VILLE: Even PHP. 

GABI: I know. Not a lot of people like it. But, like, even PHP? 

VILLE: Bring it. Yes. 

GABI: You know? Oh. 

MARK C.: Yes. PH-- 

GABI: I like it. 

MARK C.: Even PHP. 

MARK M.: Awesome. So if I want to build like a little Knative application, what does that experience look like? How does the tooling work? What does that flow look like? 

MARK C.: Knative kind of has two different entry points, so to speak. For people kind of familiar already with Kubernetes itself, and they've been kind of used to interacting with Kubectl, the command line for-- the CLI for Kubernetes, you can just follow the exact same methodology. You build your application. You build your container. And you deploy it, except that when you land, it kind of lands as a Knative service that inherits a lot of the properties of the platform I just explained, which is like autoscaling and being able to be configured dynamically and so forth. The routes management. 

If, however, you're coming to Knative as a developer who has not worked on top of Kubernetes before, there's a growing number of tools in the community to kind of enable you to deal directly with the code and not have to build images yourself. So the use case of a source to a URL, this is one that we often point to where you develop the application, for example, in Go. And using the built pipelines that are developed inside of Knative, you can actually execute a pipeline which will build that code from your repository, private or public, on Git or GitHub and sog that code and build that image for you and deploy it. So all of that is happening on the cluster, which gives you a lot of benefits around obfuscating that or using the resources only during the built phase and then being able to use them to host your application after the fact. 

MARK M.: Is there tooling, as well, for like local development? Or do I have to push everything up to the cloud every time I'm working? 

MARK C.: We do have some initial implementation of Knative on top of a Minikube. Obviously, some of the requirements that come with SDO and Kubernetes are a little more resource hungry. But we have people who have successfully done that. So you could actually imagine running the entire stack on your local laptop. Yes. 

VILLE: But for most cases, you don't even need the entire stack because you can just treat it as either just the local web server or run all your unit tests and integration tests and everything else. And then the kinds of things that you might not care about when you do a local development, like, well, does it scale to zero? Does it go away? It's like, no, no, no, it does. Don't worry about it. Just push it in the cloud. And we'll handle that for you. 

So there's kind of the operational aspect that we hide for you that you typically don't necessarily have to worry about when you're doing local development. But as Mark pointed out, yeah, you can do that with the Minikube or anything else. 

MARK C.: And GCP provides developers with a free tier. And I think, with our latest release, we actually have a model in which you could use the free tier to run small instance, single node instance of Knative on GKE. 

GABI: We list on our Knative website four features in the skins. Mainly, serving, build, events, and serverless on GKE. I have a question regarding about events. 

We say here that it would be a universal subscription, delivery, and management of events. Would be that similar to a Pub/Sub service? Or it's a different kind of event? What do you mean by the events in here? 

VILLE: That's a great question. So eventing is typically-- lends itself very well the Knative execution environment because it's serverless. Right? So if no events are happening, a.k.a. a tree falls in the forest, nobody hears about it. Right? 

But the eventing is a piece that says, look, we want to have a principled understanding of-- 

GABI: Yeah. 

VILLE: --the events. So in a Pub/Sub event, for example, happens, or a Pub-- somebody publishes an event into a Pub/Sub, you want to say, please execute this function for me. And yes, we support-- that was a direct answer to your question. But in addition to it, it might be something as somebody pushed some code to GitHub, or somebody uploaded an image to Google Cloud Storage or S3 or whatever else, where there's an action. Some other system happened. 

And you want to decouple those in such a way that you don't have to understand, how did it happen? You just say, you know what? When something happens over there, let me know about it. So the eventing, you can go ahead and describe what these events look like. And then you can go and describe strategies, a.k.a. what should happen when that event fires. So if you want to do something simple like thumbnailing, which is a pretty classic example, you would say, OK, when somebody uploads an image into a Cloud Storage bucket, please go ahead and run this little piece of code. So that's what the eventing concerns itself with. 

GABI: Thank you. 

MARK M.: Awesome. And does that mean, as well, that you can extend that eventing mechanism? So if you want to have your own custom events for, I don't know, random things that happen inside maybe your application or something, could you respond to those? 

VILLE: Yeah. Absolutely. That's one of the things that makes me super excited is the fact that I do think that this model of computing is going to be made so much more approachable to different people. If you have a very rich eventing ecosystem. So the more events you have, the more desire there is to go and process those and so forth. 

So being able to go ahead and create new event sources is something that we have been thinking about very hard and making sure that that is very, very easy, and it behaves and looks the same everywhere. So I personally would like to go ahead and make sure that you, as a developer, again, don't have to worry about reading a whole bunch of instructions and clicking and dragging and copying and pasting. But you just say, hey, just give me those events because that's what I care about as a developer, not about, how does it happen? I just say, give me some events. 

GABI: So I don't need to have RabbitMQ running inside Knative to be able to get my events? I can use Knative itself to manage those events for me? 

VILLE: Yes. 

MARK C.: One of the nice things that I like to talk about eventing, that often registers with the community or the developers outside who often don't deal with Knative on a daily basis, is the decoupling of the event source from the actual processing of events. So when you are writing something that's supposed to act when it's triggered by event, you really don't have any awareness or any code in your little processor that is aware of that, which means that you can bind that processor and processing function to a number of different events, as long as that message type is defined. 

And this is where Knative, also, is pretty innovative with regards to adopting cloud events, which is kind of a common way of defining events across the internet, which is strongly typing the different properties that each event will have while allowing for extensions of the different data components that come with that. So Knative supports CloudEvents 0.2 right now, which is the current version of CloudEvents. 

VILLE: Yep. 

MARK C.: And this is where the industry is collaborating on making sure that we are able to talk to each other as a number of different sources increases over time. 

MARK M.: Is that like an open standard or something? 

MARK C.: Yes. It is actually CNCF, I believe, project. 

MARK M.: Oh, wow. I didn't know about that. All right. So from the other side of that-- and you touched on it a little bit earlier. So as a developer, I'm like this sounds awesome. I love it. But how do I install this? How do I run this? Like, what does the operator experience kind of look like here? 

MARK C.: Because this is an open source project, you actually can take the installation guides that are already published in a repository and deploy Knative to any Kubernetes-certified instance of a service. So obviously, GCP has a great Kubernetes service, called GKE. But other cloud service providers also have that. You can also install to your own Kubernetes on premise. 

So the decision would be basically based on the fact of two factors. One is the locality or, as seen, do you need to have applications somewhere close, located to your data source that's not available somewhere else, or something like that? Or to the operational model. If you are already managing your own Kubernetes cluster, installing Knative on top of that would be potentially a nominal set of scripts that you install and be done with that. 

However, a growing number of companies are actually not interested in operating their own Kubernetes cluster. They like the common API. And they like that kind of certification across different cloud service providers but being able to deploy those applications on top of that surface and not be locked into a particular provider. So Knative, in that case, works very well with GKE. 

At next-- last year, so it's been probably seven months, we've launched GKE add-on that by including one additional flag or one checkbox during the UI provisioning, you can bring the entire Knative stack that's being validated to work for that particular version of GKE. 

So out of the box, you're getting the full Knative stack that's already configured for you. And you're ready to develop your first application as soon as that stack is available. GKE currently takes about, what, 3 minutes to provide the entire stack. So you have a pretty quick provisioning capability for yourself. 

GABI: Back tracking a bit off the example that Mark gave, I'm like, oh, that means I can't run Redis on Knative. And Ville said, no, it's more stateless applications. Right? So what kind of application or code should it not be running inside of Knative? I'm a big advocate for not running databases inside Kubernetes because working in stateful applications is complicated. So is that true, also, for Knative? 

VILLE: So let me make sure I understand. So you're saying that stateful applications shouldn't be running on Knative? 

GABI: I'm asking that. 

VILLE: Yeah, so typically not because one of the things that we want to do is provide the pay-as-you-go model so that-- 

GABI: Mm-hmm. 

VILLE: --resources are not being used. Typically, most stateful applications require you to have something up and running all the time. However, because Knative is built on top of Kubernetes, one of the things that you can do is that you can run all these things alongside your Knative. And you just reach out to the Kubernetes directly. 

So I know while you might not be a fan of running stateful applications, even on Kubernetes-- 

GABI: [LAUGHS] 

VILLE: --you do have that option because there is a lot of great abstractions in the Kubernetes [INAUDIBLE] and, like, standardizing disks and everything else like that. 

GABI: Yes. 

VILLE: So with things like that, you can go ahead and get the best of both worlds, if you will. It's the developers that really want to focus on the stateless applications and functions and whatnot. They can go ahead run in the same cluster. They just have a different API, that is a higher level, that targets only the things that they should really have to worry about. 

GABI: Thank you. 

MARK M.: And that actually probably segues nicely into what I'm thinking about, which is, so if I'm running the managed version of Knative, do I still have access to a Kubernetes API, like the Kubernetes cluster that it's working on, or is that completely hidden from me at that point in time? 

MARK C.: It is still available to use. When you check that extra box or include, then, one extra flag during the GCloud command to provision a cluster, you're really not losing any of that Kubernetes capability. You're just adding one extra item on top of that. So you still have that Kubernetes API if you wanted to. 

You can interact directly with Knative for the applications that don't require the entire stack. But we're trying to not hide any of the capabilities that Kubernetes has because obviously it's popular and it's really being adopted by a lot of different companies. So there's no point of doing this. 

But in the same time, for the developers who don't need to know the entire scope of the schema for a particular deployment or service, kind of creating very well-defined, principle objects that are easy to understand for a developer-- service, route, configuration, something that just by understanding the meaning of the word, you kind of know what it's supposed to do-- great credit goes to the initial thought leaders on this, like Ville and others who kind of thought about like, what would I call that? What would it need to do if I was a web developer and wanted to create something there? 

So I think that has proven to be a very elegant way of addressing those common problems that developers have. But if you are not able to accomplish something that you need, you're not falling very far. The Kubernetes itself is still there underneath. It gives you a comfort to be able to adapt to the use cases that Knative, perhaps, is not designed for. 

MARK M.: Fantastic. If either of you had to choose one of your favorite features out of Knative, what would you choose? 

MARK C.: Ooh, that's a good one. Ville? 

VILLE: I like scale to zero. I'm always coming up with rando things. And I spin things up. And then I forget about them. And then I come in, and I don't have to remember to go clean up. So if I start some jobby job somewhere and go home, I don't want to, halfway through home, remember like, oh, no, I left the stove on. My house is going to burn down. It's like Knative is going to just clean it up. 

GABI: Or a surprise bill. 

VILLE: Yeah. Or a surprise bill. Yes, exactly. 

MARK C.: Yeah. You know, it's hard to be autoscaling. We often list this on a same level like many other features. But I think it often goes underappreciated by even the users of Knative because it's just there. And things, when you don't look at it, it's not there. But when you look at it, or somebody else is looking at it and using it, it's there. It's pretty powerful. 

I think the other thing I would highlight there is that when we give people the power of Knative, as in the easy-deploying applications, and people coming from microservices world were starting to deploy 20, 30 different applications on top of that, quickly realizing that maybe not all of them need to be exposed to the outside world, maybe we should just kind of expose one UI application or a service endpoint for API and then hide everything else. And I think with the recent release of 0.3, a week or two weeks ago, of Knative, we've added to this cluster local provisioning for services, which with a single label-- single attribute in a configuration, you're saying this is only to be used by other services in this cluster, not by anybody outside. People already are talking about appreciating this very much because it allows them a lot more flexibility with the type of applications they're deploying on Knative. 

MARK M.: I wanted to dig a little deeper on the scale the zero part. That's something I've actually just remembered I've always been thinking about with Knative. 

So in a traditional Kubernetes world, you have pods, and you have nodes in your cluster. But if you have scale to zero on the functions within Knative, what happens to the nodes in that cluster? Do you scale the nodes to zero? How does that work? 

VILLE: Yeah. So in that case, we do not spin the nodes down to zero. So Knative doesn't do that for you. So we just take care of the pods for you. 

MARK M.: Got it. 

VILLE: So you would have to do something in addition to go ahead and actually scale the cluster itself properly, to go and bring the nodes in and out. 

MARK C.: Yeah. Knative will deal with optimizing the efficiency of using your cluster. 

MARK M.: Got it. 

MARK C.: And by creating more demand on the physical resources, it gives the signal to Kubernetes to scale horizontally. So Kubernetes will see the pressure. 

MARK M.: Mm-hmm. 

MARK C.: Will provision a new node. And it's probably not something that dynamically will happen transparently to the users who suddenly need to be offloaded to another node. But even then, it's getting better and better with how fast that can be done behind the scenes. 

MARK M.: So you can use the Kubernetes node autoscaler in conjunction. That works? 

MARK C.: Yes. If your cluster's configured for autoscaling, Knative will benefit from that just by running on top of that. 

VILLE: Exactly. 

MARK C.: But the only other thing maybe, perhaps, adding here, in addition to those features, are kind of-- feel bad for identifying the cluster local and nothing else. Some of the things that we've done in the GKE version of Knative-- so if you provision Knative using the GKE add-on, you're obviously getting the Knative components, but you're also getting a lot of additional service integration from GCP itself. You're getting Stackdriver integration for logging. Some tracing information, you get there. You get some monitoring. 

So increasingly, this feels like a fully managed service, even though the open source components, you have to do a lot of this yourself. In case of GKE add-on, it feels like something that you can kind of say, Google, this is your problem. Solve that for me. Don't page me in the middle of the night when one of the pods doesn't start. I will just write my applications. 

GABI: Ville and Mark, what to expect to the future of Knative, either open source or on GCP. What you should expect? 

VILLE: One of the things that we are working very, very hard is making the developer experience easy. That part, I hope we have convinced you of. 

The other thing that we are putting a lot of work into is making sure that the Knative stack, itself, is manageable. So we want to make sure that when our operator friends, either whether it's at Google or some other companies that are running and providing the Knative stack, that they have the confidence that the stack can be managed, which means you can go ahead and have seamless upgrades. The new versions roll out. You have a high degree of confidence that everything is going to go and just keep on running and everything else. 

So that's where we are spending a lot of effort right now. That is not really developer-facing. But it's very important to me, personally, is to ensure that the stack itself can be managed. 

GABI: Just a question that popped up now in my head when you were explaining that. 

VILLE: Uh-huh? 

GABI: You said that it's going to manage full versions, updates, upgrades. Let's say one thing like [INAUDIBLE] happens again. With Knative, would I have to go manually patching all my servers? Or it just is going to do everything for me? And I do not have to worry about that? 

I just thought about that because we did have that problem recently. Not we as we as an IT community. And that was a big problem. Would Knative native help on that? 

VILLE: Knative itself wouldn't really help. But it would be taking advantage of, basically, the cluster operators that are providing the underlying cluster. So for example, our tireless Google SRE folks would just make sure that it just goes away. So Knative, no. But because we are building on top of Kubernetes, then everything that we get from Kubernetes and managed Kubernetes properly is fully out of the box. 

MARK M.: Really standing on the shoulder of giants, as we say. 

VILLE: That's exactly right. 

MARK C.: And in GKE, now we have those flags for autorepair and autoupgrades. So if those two options are checked when you provisioned Knative, you are benefiting from that very thing. You will get control, plain upgrade, and you will get the autorepair of the nodes. 

MARK M.: Fantastic. 

MARK C.: I think coming back to the future of Knative, just doubling down a little more on what Ville was saying, with 0.3 release, I think we really have not talked about it this way publicly, but maybe we should a little more. It's probably the very first release that kind of solves for a lot of the friction points that we've gotten in feedback from the community. 

So people, when we first announced 0.1 release during Next in San Francisco, there was few customers that actually were using that at the time. But the community was still not providing a lot of feedback of actual real-world use cases. 

Over the last seven months, we actually started getting meaningful feedback from actual users, people who run that for workloads that-- I'm not sure of their production but something that is ready to provide some kind of meaningful feedback. With 0.3 release, we've actually implemented many of the solutions for many of the friction points that we've heard about from the community. So you will see kind of that emphasis going forward, going all the way to the proverbial 1.0 release, which we will hopefully have soon-- no timelines to speak of yet. 

But I think that emphasis on making sure that people are able to leverage that to build real world applications that are not just Hello Worlds but something that helps them solve real problems, it's something that's very close to the entire team, both on engineering as well as on the product side. We make sure that those things are addressed or, first of all, captured from the community through either Slack channels that we use, or issues in our GitHub repositories, or even empathy sessions with customers and trying to kind of observe how they use that system, and then going back and making sure that those issues are addressed in our pretty frequent cadence release, which is now every six weeks. 

MARK M.: So yeah actually, to that point, you mentioned Slack. If people want to get involved with Knative or want to learn more or maybe contribute, where should they go? 

MARK C.: You should follow Ville on Twitter, first of all. No. 

[LAUGHTER] 

We do have a public channel. So the official channels are-- the issues and comments-- frankly, you don't have to open an issue. You can just open a comment in a repository in GitHub. So github.com/knative. You can also join knative.slack.com, which is a whole organization dedicated with a number of different channels for clients or monitoring or security, whatever is interesting to you. And Knative Twitter is also-- KnativeProject on Twitter is also a good place to kind of raise concerns or even ask a question or comment. 

Ville and I are also on the social media at points. So just grab us at conference. Reach out to anybody on the team. And we'd definitely love to hear from you. 

VILLE: Yeah. And that-- just more the community aspect, the conversations that happen in Slack. And it's very, very welcoming. And it's fantastic to get new users, new contributors, new kick in the tires. What is this thing? It's a great community. 

MARK M.: Awesome. Well, I think, actually, we're just about out of time. So I think we'll wrap things up there. I think that was great. So Ville, Mark, thank you so much for coming on and telling us all about Knative. 

VILLE: Thank you so much for having us. That was a lot of fun. 

MARK C.: Yeah. That was great. Thank you. 

GABI: Thank you all. 

MARK M.: Thanks again to Mark and Ville for joining us on the podcast to talk about all the cool things Knative. But now I have the really hard questions that I'm going to ask Gabi about Cloud SQL. Are you prepared? 

GABI: I am. 

MARK M.: Excellent. Question of the week. How long does it take for Cloud SQL to detect an outage and trigger high availability failover? How good is our stuff? 

GABI: So short answer, 60 seconds. 

[DING] 

But a lot happened to that to be detected. 

MARK M.: Yep. 

GABI: So every second, the primary instance-- or your master, depending on the terminology you use-- sends a light to our system that obeys, which it is a heartbeat. And if it doesn't detect a heartbeat signal for 60 seconds, it will trigger the failover. And the stand-by instance will be the new primary instance that you're having there. So you always have a hot standby replica there. And that's how long it takes to activate the failover. 

Now, the failover may take a bit more because it depends on the replication. And that's a lot of stuff that we can cover in another podcast. 

MARK M.: Awesome. Sounds like we should do a whole Cloud SQL episode. 

GABI: [LAUGHS] Well, I hope people want to see that. 

MARK M.: I'm sure they will. Excellent. Well, that's really good to know. Fantastic. 

Well, Gabi, where are you going to be? What are you up to? What cool things have you got going on? 

GABI: So this February, I'll be talking about the awesome new features of MySQL 8.0 at PHP in London. 

MARK M.: Ooh. 

GABI: So come out and see if you want to know the cool tricks about MySQL 8. 

MARK M.: Awesome. That sounds really good. I will be at nothing immediately in the next few weeks. I actually need to renew my Visa. Yeah, small detail. It's a little thing. It's fine. 

[SIREN] 

GABI: [LAUGHS] A small detail. 

MARK M.: But I am looking forward to GDC. I will be at GDC, Game Developers Conference, in March. I'm really looking forward to that. There's going to be a really big Google presence there. We're going to have a booth. We're going to have presentations. Keep an eye out. We'll definitely be talking about that more. 

I will also be at Cloud Next, as I assume you will be, Gabi. 

GABI: Yes, I will. 

MARK M.: Yeah. So probably doing various things there as well. So keep that on your radar. 

GABI: Database-y. 

MARK M.: You'll be doing database things. I'll probably do game-y things and all sorts of other stuff. And finally, this is a little bit further out, but in April, I will be presenting at the East Coast Games Conference. I'm going to be talking about Argones. I'm going to actually do some presenting about sort of open source strategy as well and why I think the games industry should be doing more stuff in the open source realm. So that should be kind of fun as well. So lots of good stuff on the horizon. 

GABI: A lot of stuff. 

MARK M.: Well, Gabi, thank you so much for joining me on the podcast, the very first podcast of the year. But thank you so much for joining me on it. I appreciate it. 

GABI: Thank you, Mark, for having me here. I hope I didn't [BLEEP] up anything. 

[GABI LAUGHS] 

MARK M.: No, you did a [BLEEP] wonderful job. And thanks to everyone for listening. And we'll see you all next week. 

GABI: See you laters. 

[MUSIC PLAYING] 

[DOG BARKING] 

MARK M.: That was going to happen. 

[MOUTH NOISES] 

Come here. 

[KEYS DROPPING]