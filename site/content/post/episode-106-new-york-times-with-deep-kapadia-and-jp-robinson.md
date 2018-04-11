+++
audioDuration = "00:31:17"
audioFile = "Google.Cloud.Platform.Podcast.Episode.106.mp3"
audioSize = 45300763
categories = ["App Engine", "Kubernetes", "BigQuery", "Cloud Endpoints", "Customer"]
date = "2017-12-06"
description = "Deep Kapadia and JP Robinson from New York Times join Mark and Francesc to discuss how they use Google Cloud Platform to serve the New York Times to its readers."
draft = false
episodeNumber = 106
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "New York Times with Deep Kapadia and JP Robinson"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/URiZvoYRKBc"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7hzin8/episode_106_new_york_times_with_deep_kapadia_and/"
+++

[Deep Kapadia](https://twitter.com/durple) and [JP Robinson](https://twitter.com/jprbnsn) from [New York Times](https://www.nytimes.com)
join [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) to discuss how they use Google Cloud Platform
to serve the New York Times to its readers.

<!--more-->

##### About JP Robinson

[JP Robinson](https://twitter.com/jprbnsn) maintains NYT’s internal and open source tools and frameworks that are related to the Go programming language. 
He also lead backend development of NYT’s games platform. Recently his team completely rewrote our backend with Go and GCP tools. 
In doing so they’ve managed to significantly lower request latencies and cut costs in half.

##### About Deep Kapadia

[Deep Kapadia](https://twitter.com/durple) manages the Infrastructure and Delivery Engineering, Site Reliability and
Test Automation teams at The New York Times. His teams are responsible for providing other engineering teams 
with tools and processes needed to get their jobs done on a day to day basis. 
His teams recently have been working on building the GKE deployment pipeline and enabling other teams 
to migrate to the Cloud from our physical datacenters and also moving their entire edge and routing 
caching architecture from internally hosted varnish to Fastly. They also helped move most of their site behind HTTPS.

##### Cool things of the week

- Cutting cluster management fees on Google Kubernetes Engine [blog](https://cloudplatform.googleblog.com/2017/11/Cutting-Cluster-Management-Fees-on-Google-Kubernetes-Engine.html)
- Coming in 2018: GCP’s Hong Kong region [blog](https://cloudplatform.googleblog.com/2017/11/coming-in-2018-GCPs-Hong-Kong-region.html)
- Introducing an easy way to deploy containers on Google Compute Engine virtual machines [blog](https://cloudplatform.googleblog.com/2017/11/introducing-an-easy-way-to-deploy-containers-on-Google-Compute-Engine-virtual-machines.html)

##### Interview

- New York Times Crossword [site](https://www.nytimes.com/crosswords)
- Moving The New York Times Games Platform to Google App Engine [blog](https://open.nytimes.com/moving-the-new-york-times-games-platform-to-google-app-engine-e9337f2c9444)
- New York Times in 1996 [webarchive](https://web.archive.org/web/19961112181513/http://nytimes.com/)
- Google App Engine [site](https://cloud.google.com/appengine/) [docs](https://cloud.google.com/appengine/docs/)
- Cloud Datastore [site](https://cloud.google.com/datastore/) [docs](https://cloud.google.com/datastore/docs) 
- Kubernetes Engine [site](https://cloud.google.com/kubernetes-engine/) [docs](https://cloud.google.com/kubernetes-engine/docs/)
- Cloud Pub/Sub [site](https://cloud.google.com/pubsub/) [docs](https://cloud.google.com/pubsub/docs/)
- Google BigQuery [site](https://cloud.google.com/bigquery/) [docs](https://cloud.google.com/bigquery/)
- Cloud Endpoints [site](https://cloud.google.com/endpoints/) [docs](https://cloud.google.com/endpoints/docs/)
- Drone GAE [github](https://github.com/NYTimes/drone-gae)
- Drone GKE [github](https://github.com/NYTimes/drone-gke)
- Marvin [github](https://github.com/NYTimes/marvin/)
- openapi2proto [github](https://github.com/NYTimes/openapi2proto)
- gRPC [site](https://grpc.io)
- New York Time Open [site](https://open.nytimes.com)

##### Question of the week

What best practices are there for securing a Kubernetes Engine Cluster?

- Precious cargo: Securing containers with Kubernetes Engine 1.8 [blog](https://cloudplatform.googleblog.com/2017/11/precious-cargo-securing-containers-with-Kubernetes-Engine-18.html)

##### Where can you find us next?

Mark will be Montreal in December to speak at [Montreal International Games Summit](http://www.migs17.com/en/home/).
  
Melanie will be at [NIPS (Neural Information Processing Systems)](https://nips.cc/) in Long Beach and will also be attending [Black in AI](https://blackinai.github.io) on December 8th.

{{< transcript "MARK: Hi, and welcome to episode number 106 of the Weekly Google Cloud Platform Podcast. I am Mark Mandel. And I'm here with my colleague, Melanie Warrick. How are you doing, Melanie?" >}}

MELANIE: Hi Mark, I'm doing good. How are you doing? 

MARK: I'm good. You're not here in San Francisco. Where are you? 

MELANIE: I'm in Los Angeles. I'm attending NIPS this week, which is the Neural Information Processing Summit. 

MARK: Very nice, very nice, getting some nice sunny weather, I hope. 

MELANIE: Yes, definitely warm and sunny, this wonderful holiday season. 

MARK: Great. 

MELANIE: It's very on theme. 

MARK: Wonderful. Well, I'm very used to a warm December, being from Australia. 

MELANIE: I was going to say, it's probably familiar, right? 

MARK: Yeah, exactly. 

MELANIE: How is it for you doing Christmas without the warmth now? What is that like? 

MARK: December's barbecue season. I don't understand why it would be any different. 

MELANIE: And you can still barbecue. It's not like you really can't. 

MARK: It's true. It's true. 

MELANIE: But anyway, we should go ahead and get to the meat of what we are really here to talk about, which is the "New York Times" interview that was with Deep Kapadia and JP Robinson. They come to us to talk about how "New York Times" is using GCP. And Deep Kapadia is the executive director of engineering, while JP Robinson is the principal software engineer. Of course, after this interview, we're going to touch on our Question of the Week, which is about-- Mark, you want to set that up? 

MARK: Yeah, so we're going to have a chat about best practices for securing your Kubernetes ending cluster and the containers that run upon them. 

MELANIE: And of course, before we do all of that, we'll get to what are the Cool Things of the Week. 

MARK: Awesome, so Cool Things of the Week, we have a lot of Kubernetes stuff and container stuff. I will start with my favorite one. Because cheaper is good. We are cutting the cluster management fees on Google Kubernetes Engine. So if you've ever used GKE on us before, you may know that previously, if you had more than six nodes running on GKE, it was $0.15 an hour. Now effective immediately, actually effective as of before this podcast came out, $0. 

MELANIE: That's a good thing, constant reduction, lots of reduction. 

MARK: Yeah really, that's it, very simple. 

MELANIE: And another thing for the week that we wanted to mention is that GCP is going to be available in Hong Kong in 2018. 

MARK: Yeah, so if you live in that region, 2018 is going to be a good year. 

MELANIE: Definitely. 

MARK: Another region for you. 

MELANIE: Reducing latency all the time. Last thing? 

MARK: Last thing, there's a really cool article about introducing an easy way to deploy containers on Google Compute Engine. I like this one. Because sometimes, you're like, oh, I have a container. Maybe you found something on Docker Hub that you like. Maybe you want to run Redis, or some sort of WordPress instance, or who knows what, right? But it's on Docker Hub as an image. But you're like, Kubernetes, that seems like a lot of work. I just want to run this on a single VM, sitting somewhere, or maybe in a group. I just want something simple. Now, you can basically go over to GCE Compute Engine and say, hey, I'd like to create an instance. And here's the container I want you to run on it. Boom, done. 

MELANIE: Nice. 

MARK: It's really cool. And you can tie that into managed instance groups, too, and auto-scaling if you need to. But I really think it's kind of nice just to have this really simple thing where you're like, oh, I just need to run an instance of Redis or something like that. And then it's just very simple to set up with something out of Hub.Docker.com. 

MELANIE: All right, so let's go ahead and get started with the interview. 

MARK: Excellent, let's go talk to our friends at "New York Times." Today, I am extra excited. I'm always excited to have two wonderful people here joining us today, Deep Kapadia and JP Robinson, both from the New York Times. Thank you so much for joining us today, here to talk about basically everything you do with GCP and "New York Times." JP, how are you doing? 

JP: Wonderful, thanks. 

MARK: Good. Deep, how are you doing today? 

DEEP: Excellent, thank you so much. 

MARK: Excellent. Yeah, thanks again for agreeing to join us on the podcast today to talk about everything you do with GCP at the "New York Times." before we get stuck into that-- and I'm super excited to do that-- why don't you tell us a little about who you are and what you do. Deep, why don't you go first? 

DEEP: Yeah, so I'm the director of engineering. I run our infrastructure, and operations teams, and also our test automation team, which is something I picked up along the way at some point. And my teams are mostly responsible for pretty much managing all of our cloud infrastructure tooling, which includes the Google Cloud Platform. 

FRANCESC: Cool. What about you, JP? 

JP: I am principal software engineer. Really, I own and maintain all of our internal and open source libraries and packages, when it comes to the Go programming language. And I also lead back-end development for our games team, so for the crossword and all the fun toys. 

FRANCESC: Yeah, we used that as a Cool Thing of the Week not that long ago, when you wrote a blog post on how you moved the crossword to a [? pension ?] in Go. That was a really good blog post. Not only because it was about Go-- 

MARK: But also because it was about games. 

FRANCESC: But partly, yeah. 

MARK: Awesome. All right, OK, so let's talk high-level first. I'm guessing probably Deep is the best question for this. So "New York Times," isn't this a paper publication? What do you actually do on the internet? 

DEEP: Oh, that's an interesting one. So yes, we started out as a paper publication in 1851. But since then, we've embraced other ways of telling stories, one of them being telling stories online. We, in fact, launched our first website, believe it or not, in 1996, before most people had a website. 

MARK: Nice. 

DEEP: We've had an online presence for a long time. And along the way, we've transformed the way we tell stories. We're doing a lot of publications just for consumption online. So we have huge video production team. We also have a daily podcast called "The Daily." We also have a virtual reality app. If you have an Android or iOS phone, you can download it from the app stores. So there's a lot of things we've experimented with along the way. But most importantly, we have our website, which is fairly well-trafficked. I think our homepage used to get about 50 million hits a day. I don't know what the latest number is, at this point. And JP has all his games apps that he can tell you guys about. 

JP: Sure. So yeah, beyond just servicing up the news and all of our news products associated with that, we have had historically, along with the website, our crossword as a digital offering. And a big push from that, when it comes to technology, is that not only are we serving up the crossword, but we allow you to play the crossword on one device, and then we try to seamlessly sync it to all of your devices that may be logged in. 

MARK: Nice. 

JP: So yeah, it's a lot of stuff. And on top of that, all these products and services also have a layer of personalization built in. So there's obviously a lot of technology backing all of that fun stuff. And We're constantly trying to come up with new ways of repurposing our content, right? So we we've always had recipes in our content management system. 

But at one point, decided, how about we build a cooking app, where people can have annotations on their recipes and actually share their recipes with each other, et cetera? So somewhere along the line, we created a new products division, which was building all these experiments and trying to see if we could prioritize them. As it stands now, our cooking app has its own our own stream of revenue. It's available on the app store. And you can just buy a subscription to it. So there's definitely lots of different things. 

FRANCESC: Cool. So while you were describing all of the cool things you do, I actually went through the Internet Archive. And I found a screenshot of your web page on November 12, 1996. And I've got to say, I'm very happy that we've evolved. Because that's very, very cool web page. I'll put a link on the show notes. And It's actually worth seeing back then and now again. 

MARK: Yeah, it's genuinely fantastic. 

FRANCESC: It is, yeah. 

JP: It truly was just a single GIF. That's all we put up. 

FRANCESC: Yeah, it was a GIF. That's it. It is pretty cool. Anyway, since you've been talking a little bit about all of the cool things you do on the "New York Times," but our audience is into technical details. Tell us a little bit about how you do this. We know you're using App Engine for some of the things. Do you use App Engine for everything? How does this work? 

DEEP: No, actually we don't use the App Engine for everything. So I mean, we are in a bit of a transition right now. So as I said, we've had a website since a while now. So at some point, our operations became large enough for us to consider having our own data centers. So we were running in our co-located data centers-- we have one on the east coast one, on the west coast, and a few peripheral ones here and there. We have one in our building in Manhattan, which is quite expensive real estate for a data center. 

So we've largely been running applications in our own data center with a layer of virtualization on top of the bare metal that we're running. About six years ago I think, we decided to start looking at like this cloud thing that people are talking about. So we started building some apps in the Amazon Cloud. But one of the things we tried to do was pretty much replicate what we're doing in our data centers in the cloud, which was probably not the most ideal way to go about it. 

So at some point, we decided we needed better abstractions to build our applications. Granted, we're largely a news media organization. So I mean, technology isn't quite our forte, even though we're pretty good at it. We feel like we want to be building more applications and less infrastructure. So that prompted us to go and evaluate what we were doing. 

And at some point, we decided that we want to move entirely to the cloud. So that's where Google comes in. And for some of the applications, it seemed like App Engine was a really good fit, especially JP started looking at the App Engine sometime last year. And he found it a very good fit for some of the applications he was building. But on the whole, when we look at some of the applications we have, a lot of those could be containerized fairly easily. So Google also provided us with a very good abstraction to deploy containers, which was Google Container Engine or GKE. And it gives us all the benefits of running in Kubernetes without actually having to run Kubernetes ourselves. 

So both App Engine and GKE together were a bit of a game changer for us on the application development side. And as I said, we were running our own data centers. we also had this large Hadoop cluster that we were doing for all sorts of data processing and data analysis. At some point, our data team decided to try out BigQuery. They were completely blown away with all the features it had and the ease of use. So BigQuery was sort of like the gateway drug for us to start looking at other Google abstractions. And then that led to us using App Engine and Kubernetes. 

FRANCESC: Yeah, we've heard that many times. People try BigQuery. And after that, they're like oh wow, yeah, that's cool. 

MARK: That is cool. So I'm actually kind of curious to probably dig a little deeper. App Engine, Kubernetes, this is a common thing I hear from a lot of people. How do you end up choosing which piece goes on which platform? 

DEEP: At this point, we don't, in the sense that we give people the option and say, figure out what works for you the best. What my team did was we provided our users with a consistent way to deploy on both App Engine as well as Kubernetes. We use a CI tool called Drone. And we host a Drone internally. And we built a couple of plugins that allow us to deploy the code on GKE or App Engine. 

And both those plugins seem to work, for the most part. Of course, definitely people are always asking for more and more features, and that kind of stuff, and for the pipeline to be more and more fancy. People want to do all sorts of blue/green deploys and things like that. But for the most part, it seems to work, if you want to get your code from your laptop to App Engine or GKE. And then they decide what works best for them. 

Typically, if it's a Go application, I often see JP swooping in and giving them the spiel about all the benefits of going on App Engine standard, et cetera, et cetera. And he can tell you more about that. But that's typically how things have been working so far. 

MARK: JP, did you want to weigh in? 

JP: Sure. So yeah, I mean, it really comes down to, what's the basic thing you're building? Oftentimes for us, it's just a simple API or something like that. I need to store some data and retrieve it later, that kind of stuff. And a lot of times, it really just comes down to App Engine and Datastore is really enough. I find that we still make GKE an option, in case you need to do something crazy or something that's not necessarily API service oriented. 

Even for my work sometimes, I have a process that just needs to generate PDFs. I can't really do that in App Engine. So I just have something listening to Pub/Sub generating PDFs and then spitting them back on Pub/Sub. So really, if it's something basic, something simple that you can build in a day, a lot of times, I will just point people to App Engine. And they don't have to worry about anything beyond the product. And for Kubernetes reasons if you want to get crazy. 

FRANCESC: Cool. I'm curious about the developer experience. You told us a little bit about the Drone plugins that you use that, by the way, we also used as a Cool Thing of the Week a long time ago. 

MARK: You see the show a lot. 

FRANCESC: Yeah, because they're open-source. And we love open-source. Could you tell us a little bit more about, how does it look when you are actually testing? Do you have a QA environment different to the App Engine? Do you have different App Engine projects? How do you manage all of this? 

JP: So from an App Engine perspective, we generally have a project per environment. I've got one for staging, one for production, and one for our sandbox, or lab, or whatever you want to call it. And we do is just a normal Git flow. You'll check in a feature branch. Once that gets blessed onto our development branch, it will get pushed out to one environment. Once it's merged into master, it will go to the stage and environment. And then we will tag the repo with a release. And that will kick off a production deployment. So it's pretty straightforward. And it's very similar for GKE or App Engine, really just kind of Git oriented and event driven. 

DEEP: What JP said. 

MARK: As we mentioned before, you open-sourced the plugins for Drone. So I'm curious. As an organization, is open-source something that's important to you? Or has it just been you thought these might be useful for other people? What was the story with that? 

DEEP: Both. We definitely want to be a part of the open-source community. But at the same time, we also want to be using tools that can be supported widely. So that was one of the very big reasons for us to look at Drone in the first place. And then on top of that, once we found out that this could be completely useful and there is not nothing proprietary about a fairly simple plugin that just deploys code to a set of GKE instances, it was pretty much a non-brainer for us to say, let's just open-source it. 

But on the whole, we do find ourselves embracing a lot of open standards and open-source technologies. One of the other big reasons for us to buy into GKE was Kubernetes itself being an open standard. As I said, we did dabble in AWS for a long time. And a lot of our workloads still run in AWS. I know this is a GCP podcast. But the thing is, something like Kubernetes would maybe, at some point, also allow us to run workloads in AWS as well as GCP. So it's a fairly open standard. It's portable. As long as we're deploying to containers, we should be able to more workloads to just about anywhere. 

So that was one of the things. And the other thing is we use a lot of tools from HashiCorp. They're all written in Go. So at least on the deployment automation side of things, we're trying to use a lot of Go. And a lot of the Go community is already embracing open-source. It's online. And we're often contributing to some of the HashiCorp products. So we do contribute to Terraform. We've contributed to a couple other things. We've also contributed to Kubernetes a little bit. So it allows us to also shape the direction of some of these things as well. 

JP: From my perspective too, I think when we're open sourcing these tools, and libraries, and things like that, not only is it for us to help other people and to be part of the open-source community, but from my perspective, it often helps us make that tool or that library better. I've even had like several-- Marvin, our App Engine framework for Go, immediately after we published it, we had some nice contributors from Google themselves that helped us clean it up and make it better. I just love random people on internet fixing my things really. 

MARK: That's super cool. You mentioned something there, Deep, really side-handedly. Because you're still running a little bit on AWS. Are you still also running on prem? Are you running your own data center still? Did you end up finishing that migration? What happened there? 

DEEP: So no, we haven't finished the migration yet. We are slated to finish it in the second quarter of 2018. We are still in the middle of this huge, huge migration from our data centers completely to the cloud. 

JP: We just finally-- I think Games, we are the first people, I think, to get complete public traffic off of AWS in the past couple of weeks now, which has been really nice. 

DEEP: To give you more context, thought, our website is going to be hosted on GKE as well. So if you go to NYTimes.com on your mobile phone, you are hitting a GKE cluster at that point. 

MARK: Woo! 

FRANCESC: Nice. OK, so you've mentioned that you have systems running on Google Cloud Platform. You have systems running on Amazon. And you also have systems running on [? premise. ?] Now, the question is, how do you even monitor all of these things together? 

DEEP: So that's a hard one. Because a lot of these systems are at very different states of maturity. So we do have an infrastructure and a systems team that was already managing our data center, that was actually building things for our data center and managing things in our data center. So they continue to exist at this point, and will continue to exist for the foreseeable future. Because there is a lot of craft already out there in our data centers. 

And a lot of these systems are going to be forklifted. So things that were running on VMs will probably continue to run on VMs, unless we replatform them to either run on something like App Engine or containers. So that's not going away. We have we have the traditional way of maintaining and managing the systems in our data centers. For AWS, there is a little bit more automation. We were using-- or we still are using Puppet and some configuration management tools to manage some of the systems in Amazon. 

However, on the Google Cloud, we've gone all in and said, we're going to do Kubernetes. And we're going to do containers, and use Drone, and have this faster CI pipeline that allows us to deploy stuff to Google. Over time though, we hope that, once we're fully in the cloud-- both Google and Amazon-- we can use certain abstractions that allow us to deploy code, either in Google or Amazon the same way. 

So one of the ways that we're trying to rationalize some of the infrastructure automation is by using tools like Terraform, which has support for both Google as well as Amazon. Again, one of the choices with Kubernetes, as I said, was it could run either in Google or Amazon. So as we get more and more systems in the cloud, we want to converge ways we manage things. 

JP: I think one interesting way that we've also tried to manage part of this transition is that, as services in Google are needing services in Amazon, we're actually running cloud endpoints in AWS to expose those services. So it's actually been a nice way for us to get out of the mentality that everybody's really defense via firewalls to actually expose ourselves to the public securely, using common tools. 

DEEP: Yeah, there's actually a story to that. And I don't know. I know you guys like stories. 

FRANCESC: We love stories. 

MARK: We love stories. Go for a story. 

DEEP: When we first started looking at Google-- as I said, we've have traditionally done things a certain way. And we're trying to replicate our data center on Amazon. So any app deployed to Amazon or our data center should be indistinguishable from each other, right? That was the philosophy we wanted to go with. So we tried to do that with Google. We quickly learned that we were basically fighting what was inevitable. 

With Google, it assumed a zero trust network. There was no clear notion of private networking at the time. Now, I know you guys have VPCs, and peering, and things like that. But we're talking about a year ago. GCP didn't have that. So there was no easy way for applications to talk to each other that existed in different projects, or applications that we were building in GCP to talk to services that were sitting in our data center. Because our data center was behind a firewall. And we couldn't really open open those ports up. 

So what we started doing was we found a novel way around it, which was using Google Cloud Endpoints. And it allowed us to basically stand up something in our Amazon environment using the Cloud Endpoint Service Proxy to actually proxy all the traffic to our data centers from Google. So the teams that were moving at a faster pace than Google were able to continue building in Google by exposing some of the underlying services in our data center and Amazon. So that was our learning. If teams want to move at their own pace, they can continue to move at their own pace. And let's not try and fight this whole private networking battle in Google. Because you know what? Let's just assume a zero trust network. 

FRANCESC: Great. So what you're saying is that you are basically exposing most of your APIs in the open. But you're doing so in a secure way. So I'm curious about how you're doing that. Are you doing OAuth2? What's the exact authentication system are you using there? 

DEEP: Mostly, some of the APIs were retrofitted to have auth token in front of them. Others that could be modified a little bit more are using JWP to secure themselves. And then in other cases, some APIs already had auth mechanisms built in, which allowed us to just use a proxy as is. 

FRANCESC: And in order to communicate with each other, you are using directly HTTP with JSON? So the rest of the APIs, are you using any kind of gRPC or any other RPC framework? 

DEEP: Yes and no. I mean, yes and yes, sorry. So for the older APIS, they were already JSON over rest. We are definitely looking into GRPC. I know some of JPs APIs are already built with gRPC as the transport mechanism. And JP can tell you a little bit more about that. But we also recently released our publishing pipeline, which is basically the content pipeline. 

When a reporter and an editor enter a story into our CMS, as it has to basically go through a whole workflow, where it gets published to a pipeline. And there are all these consumers that are waiting for the new edits, or new updates to a story, or an entirely new story, or any new assets to a story. They're all listening to this pipeline. And the transport mechanism for the pipeline is gRPC. And the pipeline basically is a large message log sitting on top of [? Kafka. ?] 

MARK: Interesting. JP, can you tell us a bit more about your experience with gRPC? I'm curious to know. 

JP: Sure. So like I said, most of my services are running on App Engine, where most of our external traffic is actually coming from user-facing apps and things like that. So most of our authentication and things like that are just using our existing "New York Times" user authentication. It gets interesting when we start going to the service-to-service type of authentication. 

When it comes to App Engine itself, we actually get to rely on that one specific header. Its like the ex app ID header. And we can just guarantee that that will sign the incoming request. And we know it's from our app. Kubernetes starts getting fun with gRPC, though. We recently launched one service, where it is a gRPC service underneath the hood with Cloud Endpoints on the front running on GKE. 

Since we are also calling this service from App Engine, we're actually also leaning on the fun feature that Cloud Endpoints does the HTTP JSON translation to gRPC for us. And that actually ties back to one of our open source tools called OpenAPI to Proto, where we actually describe our API in an OpenAPI spec and generate protobufs that mimic that OpenAPI spec with the HTTP annotations. So we can describe our service in an API spec, translate it to protobuf, hand it to Cloud Endpoints. And it's exposed in both of those transport styles quite seamlessly for us. It's kind of nice. 

FRANCESC: That's really cool. 

MARK: That's very cool. As much as I'd love to talk to you both about all this stuff forever, we are running out of time just a little bit, actually quite a lot. So before we wrap up, is there anything else that you might want to tell people, or to plug, or if there's something particularly amazing that you've done, or a lesson that you've learned that you want to share that we haven't managed to touch on yet? Is there anything you'd like to add? JP, we have you right now. 

JP: Sure. For me, honestly, moving all the Games platform to Google Cloud has been a rather wonderful experience, honestly. We just get to worry about our product, and the problems we should be solving, and not necessarily common infrastructure problems and the like. It's actually been quite nice. And with a team of two people, we are able to do quite a lot. 

MARK: Excellent. Deep, yourself? 

DEEP: What I've learned is I think we want to build more tooling around being able to help teams move faster. So I think that's where we want to be. We want to shift our mentality from being traditional systems people-- people who manage infrastructure-- to people who actually build automation around the Google infrastructure. So I think that, to us, has been a very interesting shift in mentality. And if there are other organizations who are trying to make the shift, I think that's where they will find a lot of bang for their buck, in terms of investing in talent. I think we made that investment. And I think we're reaping the benefits at this point 

FRANCESC: I wanted to add one more thing, which is for everyone that is interested in the "New York Times" and everything you do in tech. You do have Open.NYTimes.com, which is basically where we've taken like half of our Cool Things of the Week. So yeah I just wanted to say. So JP Robinson, you write a lot in there. But there's also other people that write not only to Go, but also CSS and stuff like that. So I just wanted to thank all of the authors in there. Because it is really, really cool content. 

JP: Awesome. Yeah, thanks for the shout out. 

MARK: Cool. Well, yeah, thanks to both of you, Deep, JP, for joining us. I really appreciate you taking the time to hang out with us and chat about everything you're doing in "New York Times." 

DEEP: Thank you so much. 

JP: Yeah, our pleasure, thanks. 

FRANCESC: Thank you. 

MELANIE: Thanks, JP and Deep. We appreciate the insights on how you guys are using GCP. So Mark, let's get to the Question of the Week. How do you secure a Kubernetes cluster? What are some best practices to securing a Kubernetes cluster? 

MARK: I'm glad you asked. Because I'm able to reference a wonderful blog post that has been written on the GCP blog. 

MELANIE: It's very helpful. 

MARK: From product manager Aaron Small, it's great when other people do my research for me. 

MELANIE: Exactly. 

MARK: Actually, there's a bunch of different things that you can do, in terms of security best practices for your Kubernetes cluster. I'll definitely put a link in the show notes to the blog post, so you can read it yourself. There's a few things in here that I think are particularly good. There's a bunch of stuff in there about using least privilege service accounts on your nodes. So basically, when you set up the nodes of the new Kubernetes cluster, you can give them permission to do certain things within your cluster. 

You may or may not want to do that. So if there's no necessary reason for say a particular node to access Pub/Sub for example, or Google Cloud Storage, maybe there's no reason for them to do that, then you might want to turn that off. If there's no reason for them to be accessing other Compute Engine instances, you can set up firewalls to do that sort of thing. 

Other nice stuff in there, there is a Kubernetes web UI. You can actually turn that off. There's a command line here to turn off the UI. The UI has administrative access to do pretty much anything. So if somebody gets access to it, which they shouldn't, you can turn that off. That means that then you can look down how things happen inside of your Kubernetes cluster. And it's also worth noting that the Attribute Based Access Control was disabled by default in Kubernetes 1.8. 

And that gave a lot more access to Kubernetes. Now, RBAC, which is the Role Based Access Control, was released as beta in Kubernetes 1.6. It's now the default in 1.8. And there's commands in here if you want to turn that off for existing, if you want to turn off that Attribute Based Access Control. Anyway, go for RBAC. RBAC is the one you want. That is the one you want. 

MELANIE: So basically, you can turn everything off, and cap it all, and keep anybody accessing things you're not even using. 

MARK: Exactly. Yeah, so use RBAC. RBAC's good. And also, if you want to get into the nitty gritty, you can also do cluster network policies. So you can basically do firewall rules for pods, defining how they can talk to the outside world or between themselves as well. And that's another way you can also look things down. But definitely read the blog post. It's well worth your time. And it will give you some ideas on how you can get things locked down and more secure. 

MELANIE: Great. OK, so Mark, are you going anywhere fun for December? 

MARK: December, still going to MIGS. So I'll be in Montreal as of next week. Montreal International Games Summit, that's where I'll be. You'll be at NIPS. So you're still NIPS. What are you doing? 

MELANIE: Right, so this week, I'm at NIPS. And I am physically here through the week. And at the end of the week, there's actually an event that I'm going to be attending, which I'm looking forward to. And that's specifically an event for Black in AI, which is an organization that is fostering basically a community of researchers that identify, self-identify as black and/or their allies. So it's an event that's going to be happening at the Marriott Renaissance Long Beach hotel. For anybody who's in the area and wants to come, please come check it out. 

MARK: And that's December the 8th, if I'm reading this right. 

MELANIE: That is December 8, on Friday, between 1:00 and 6:00. 

MARK: Fantastic. 

MELANIE: And we'll have a link on the blog. 

MARK: Cool, all right, Melanie. Well, thank you once again for joining me for yet another episode of the podcast. 

MELANIE: Thanks Mark. I think next week is the full-- we're finally going to have an interview together. 

MARK: Yeah, we're actually doing an interview together next week. 

MELANIE: Yeah, next week is the end of year review, too. So we bring back Francesc. And we're going to go through and talk about what have been the popular episodes for the year, as well as some personal favorites. 

MARK: It's a good episode. I know how it goes. 

MELANIE: Definitely. 

MARK: Awesome. 

MELANIE: All right. 

MARK: Thank you very much to all of our listeners. And we'll see you all next week. 
{{< /transcript >}}