+++
audioDuration = "00:38:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.60.mp3"
audioSize = 54957776
categories = ["Fission", "Kubernetes", "Serverless"]
date = "2017-02-08T01:07:49Z"
description = "Answering the call from last episode, Soam Vinasi joins us today to tell us about Fission, a Function as a Service framework built on top of Kubernetes."
draft = false
episodeNumber = 60
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Fission with Soam Vasani"
image = "/images/post/fission-logo.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/fPNaFLNvxMj"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5sudhi/episode_60_fission_with_soam_vasani/"
+++


Answering the call from last episode, [Soam Vasani](https://twitter.com/soamv) joins
your co-hosts, [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc),
today to tell them about Fission, a Function as a Service framework built on top of Kubernetes.

<!--more-->

##### About Soam

[Soam Vasani](https://twitter.com/soamv) is a software engineer at Platform9
Systems Inc, where he works on the Fission framework. In the past he's worked
on distributed storage and other stuff at VMware. He's interested in languages,
tools and frameworks, and distributed systems.

##### Cool thing of the week

- Highly Available Kubernetes Clusters [blog post](http://blog.kubernetes.io/2017/02/highly-available-kubernetes-clusters.html)
- Continuous Delivery in a microservice infrastructure with Google Container Engine, Docker and Travis [Medium](https://medium.com/google-cloud/continuous-delivery-in-a-microservice-infrastructure-with-google-container-engine-docker-and-fb9772e81da7#.s2wqicy6f)
- Delivering a better platform for your SQL Server Enterprise workloads [blog post](https://cloudplatform.googleblog.com/2017/02/delivering-a-better-platform-for-your-SQL-Server-Enterprise-workloads.html)


##### Interview

- Fission: Serverless Functions as a Service for Kubernetes [blog post](http://blog.kubernetes.io/2017/01/fission-serverless-functions-as-service-for-kubernetes.html)
- Kubernetes [home page](https://kubernetes.io)
- Fission: Serverless Functions for Kubernetes [fission.io](http://fission.io/)
- Fission's code [GitHub](https://github.com/fission/fission)
- Fission examples [GitHub](https://github.com/fission/fission/tree/master/examples)
- Serverless Computing [Wikipedia](https://en.wikipedia.org/wiki/Serverless_computing)

<div style="text-align: center">
    <img src="/images/post/fission-logo.png" style="width:400px; max-width:80%">
</div>

##### Question of the week

Is there a way for me to secure my websocket connections on GCP?
- TCP SSL Load Balancer [docs](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/)
- Deploying WebSockets cluster to GCP with Let’s Encrypt certificates [Medium](https://medium.com/google-cloud/deploying-websockets-cluster-to-gcp-with-lets-encrypt-certificates-5ebb7fc1e245#.iyqbcy64z)

##### Were will we be?

Mark just released a blog post on [game development sessions at Cloud Next](http://www.compoundtheory.com/cloud-next-for-game-developers/).
Next he will be at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc, who just released a new episode of [#justforfunc](https://youtube.com/c/justforfunc) and a
[demo for Go plugins](https://github.com/campoy/golang-plugins),
will speak at the Go 1.8 [release party](https://www.meetup.com/golangsf/events/236673793/)
in San Francisco. A bit later he'll also be at [Gophercon India](http://www.gophercon.in).

{{< transcript "FRANCESC: Hi, and welcome to episode number 60 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy. And I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing?" >}}
MARK: I'm good. Thanks, Francesc. How are you doing? 

FRANCESC: I'm pretty tired. It's been a long day. It is a Saturday. And I have been working. I've been working. I've been having fun at [INAUDIBLE] all day long. But also very happy to be here for a very awesome interview, actually. How are you? Let's not be impolite. 

MARK: I'm doing-- 

FRANCESC: How are you? 

MARK: I'm good. It's a Saturday. But you know what? With travel schedules and work being how it is, this is when we found time to record. I'm also excited about today's episode. We're talking about FaaS, Functions as a Service. I've never actually said the word FaaS before. I think that's fantastic. 

FRANCESC: Is that how you pronounce it? 

MARK: How else would you pronounce it? 

FRANCESC: I don't know, Faas-- 

MARK: Faas, fuzz 

FRANCESC: Like the ice cream, Haagen-Dazs. It's faz. 

MARK: I could get behind faz. I could do faz. Actually I like that a lot. We're talking with Soam Vasani about Fission, the functions as a service thing that works on top of Kubernetes. So that's pretty cool. 

FRANCESC: It is very awesome, because basically the way it happened is that we gave them a shout-out doing our last episode. It was one of the cool things of the week. And we said, hey, it'd be awesome if you're listening to this. Let us know. And we'd like to interview you. Well, that happened, basically. 

MARK: Pretty much. We were like, hey, what are you doing on Saturday? 

FRANCESC: So pretty awesome, and after that interview with Soam, we are going to have our question of the week, which is about all the things that I love-- networking, so HTTPS and web sockets and load balancing. How do you make all of those things work together nicely on Google Cloud Platform? 

MARK: Before we do that, though, why don't we get stuck into our cool things of the week? 

FRANCESC: Let's do that. 

MARK: We have so many. Where do we want to start? I'll tell you what. I will start with one of my favorite things-- obviously, Kubernetes. 

FRANCESC: One of the favorite topics. 

MARK: One of my favorite topics. So there is an article that came out on the Kubernetes blog about running highly available Kubernetes clusters. So basically the standard community system right now runs on a single master that works reasonably well, in that if the master falls over, it's fine. It doesn't actually destroy anything. 

But if people have been looking for multi-master set-ups, especially high availability set-ups across multiple regions, there's a great article showing how that's currently being supported on Google Compute Engine in the Kubernetes 1.5 release. And it shows you all the commands you need to use to set that up, which is nice. 

FRANCESC: So what happens now? If you're saying that if now we have two masters for higher availability, what happens if you have a master and it goes down? Does that mean that the whole cluster goes down? 

MARK: No, it doesn't, which is pretty good. So you should monitor your masters. That's important. But if your master does go down, all your pods continue to keep running like they would do normally. So this is how you can do upgrades. And if something horrible happens, then that's great-- then that's not great. Something horrible happens, then you're covered. Your services aren't going to go down. And your systems aren't going to go down. But if your master goes down, keep an eye on it. And then bring it back up quickly. But it's not going to mean your services are going to die, which is pretty cool. 

FRANCESC: Nice following on the topic of Kubernetes, there is another blog post-- it's a Medium post from-- Jacopo Daeli. I'm going to assume he's Italian. And it's about Kubernetes and how to do continuous deployment to Google Container Engine with Travis AI. 

MARK: Yeah, it's pretty cool. He steps you through all the things. I learnt something new in this. I was looking through it. There's a cube CTL set image command that lets you change images on deployments and daemon sets and stuff. I've done that by editing YAML files and then applying. But it's kind of cool that you can do it just in a single command. 

FRANCESC: Yeah, that is cool. I didn't know either that you could do that, actually. It's pretty fun. Why don't we go to the third to last question-- question, no-- cool thing of the week, which is about SQL Server Enterprise. I think that now we have pre-configured images for them. 

MARK: Yeah, it looks like we have pre-configured images for Microsoft SQL Server Enterprise and Windows Server Core on Compute Engine. 

FRANCESC: Cool. And I think that's one of the coolest parts of this, is that there's also some instructions to set them up with high availability and disaster recovery, which means that basically you're going to be running every single instance in a different zone. So even if one whole zone goes down, you still have your database running all the time, which is very important. And disaster recovery, which means that you will not lose a single piece of data, which is something that we all want to have. 

MARK: I think this is also kind of cool. It's mentioned here, as well, that finally all of the Windows Server images are now enabled with Windows Remote Management support, which is pretty nice if you need to manage fleets of Windows machines. 

FRANCESC: Nice, cool. I think it's time to go talk to Soam. What do you think? 

MARK: Sounds good to me. Let's go do that. So today's episode is brought to you by what happens when you reach out via your podcast and say, hey, it would be really great if we interviewed that person on the podcast. And they listen to the podcast. And then they come. And they are on the podcast, which is really cool. So I would like to introduce Soam Vasani. Soam, thank you so much for joining us today. How are you doing? 

SOAM: Great, how are you? Thanks for having me. 

MARK: Yeah, really, really good. Before we get stuck into talking about Fission IO, why don't you tell us a little bit about who you are, what you do, the company you work for, all that good stuff? 

SOAM: Yeah, so I joined Platform 9 about a year ago. It's a company that does SaaS managed. It started out as SaaS managed system for on Prime infrastructure. So people who were at their house, and you'd get an online control plan for them. And we started doing open stack. And then about a year ago, we started working with Kubernetes as well. 

And I worked for a while at VMware. That's how I know some of the people who started the company. And I had worked on various things at VMware, infrastructure management stuff, some storage systems, and some other random projects in between. And so I joined here and was working on this Kubernetes management plan. And then maybe about four to six months ago, I started working on Fission. 

MARK: Cool. And what is your role on Fission? 

SOAM: So I'm the software engineer on it. It's actually mainly just one person right now. So I guess I'm software engineer and doing a little bit of marketing, you can say, but talking about it to other people as well. So yeah, a little bit of everything. 

FRANCESC: So I'm actually curious about, you told a story a little bit about how you got started with Kubernetes. But how did Fission IO start? When did someone be like, oh, we should have functions on Kubernetes? Could you tell us a little bit about that? 

SOAM: So the actual thing started in a hackathon. We have these little internal company hackathons every few months. And I'd been simultaneously excited about AWS lambda and serverless around the same time. And also because we were taking Kubernetes to companies who hadn't really worked with containers before at all. And so both Docker and Kubernetes were new to them. 

They knew that they were excited about Kubernetes and wanted to use it. And we'd take it to them, and apply it. And then their the next question would be, how do I do something useful with this? And we didn't have any helpful answer other than go read the manual. Try out some examples, and so on. 

So we really wanted something where we can give users something where a really simple app can be brought up in the first day that you have a Kubernetes cluster. And so this hackathon provided a really short way to make some kind of prototype. That's when we made this Nagios thing, which basically wrapped a Nagios function at runtime into a container and brought it up as a server, so then you could start doing requests to it. So it is only prototype about six months ago. 

MARK: Cool. So on the Fission website, it says, serverless functions for Kubernetes. What does that mean? What does that actually look like, say, as the developer experience and also just conceptually? 

SOAM: So even though we say functions, it's actually modules, more properly. So the programmer writes a Nagios or Python module with one function as the entry point, as the sole export of that module. And then Fission takes that and turns it into an HTTP server that runs on Kubernetes. And it also manages the lifecycle of that service, creating it, instantiating it when there's a request, killing it when it's idle, scaling it, potentially. Things like that. 

So the programmer has a simple interface. They write a module and a function, which takes a context. The context contains the request and so on. And they just implement the server there. And then Fission is responsible for taking it from a source code file to running servers on Kubernetes. 

FRANCESC: So you mentioned one thing, which I guess it's because of the way you build your containers, which is you said that you were able to do Python and Nagios. I myself, am a little bit of Go-fer. Is Go coming at some point? Or is there is any reasons why Go is not supported? Instead, you're supporting these languages that are interpretive, which I assume there is. 

SOAM: Yeah, so this is an exciting topic. This is what we're working on right now. 

FRANCESC: Yay. 

SOAM: So today our function, it goes from a source code file directly into the execution environment. And Fission framework hits the dynamic loader that's inside that container and loads that function and routes a request to it. So now we want to enhance this by plan a bit, to add support for compile languages, to add support for dependency resolution step, so installing dependencies, linking them in whatever way as defined in the language. 

So what we're doing is taking a step back, looking at how we define these language environments and saying, OK, today we just have an execution environment. Now you also need a build environment. And the build environment is Fission will just say, OK, your source code goes as some sort of artifact into the build environment. And in a language-specific way, the build environment turns that source artifact into a dynamically loadable, runnable artifact. 

So you basically get-- so for, in the case of Go, you would upload a set of source files and maybe some spec of dependencies. And then the builder would output either a binary or maybe plug-ins using Go's new-ish plug-in support. And then the execution environment would load that plug-in. And Fission would be responsible for orchestrating this, running the build when the user uploads a function, managing compile errors and that iteration cycle, and then transporting the binary, storing it, caching it, and so on. 

So the infrastructure for Go support is being built right now. And then on top of that, we'll build the Go lang support. 

MARK: Do you have other languages in the pipeline as well? 

SOAM: Yes, so we already have Nagios, Python. Somebody contributed PHP and C#.net. C#.net support is interesting, because it's a compiled language. But what it does is it compiles it at runtime. So that's an interesting way to do it. It's not ideal. We want to change that. But it is supported for now. So those are the languages. There's a contributor who's working on Ruby right now. And like I said, we're working on the support for compile languages. 

MARK: Cool. So you touched on it a little bit before, but I'd like to talk about it specifically. Why serverless? Why is that a thing? What does that mean to you? And why was this so important to you when you came up with this project? 

SOAM: I think the term serverless itself is a bit vague. So I think the general idea is that it's to ask, what's the simplest interface you can have to write applications that still can be used in production? They're still useful, usable to create services in production. And I think this functions as a service is one approach to that. I'd say it's not 100% proven yet. But we think it'll get there. 

Serverless, so I think functions as a services is maybe a more precise or a more specific form of serverless. But to answer your question-- why serverless?-- I think there's a pattern there of saying how simple can we make this and still be useful? And I think there's different approaches to that. And functions as a services is one approach that I'm excited about. 

FRANCESC: So the question that I have now, it's the question that pretty much started this episode, which was not that long ago, we had the monolith. And we had one binary. And for that binary, we had a bunch of code. That's it. 

Now, next we move to microservices. And all of a sudden we have a bunch of different binaries or processes. And at the same time we might have a bunch of different repos. And now we're moving to functions. And I'm curious about how do you manage the complexity of having so many different pieces of source code that are somehow related but possibly stored in different places? How do you manage them? 

SOAM: So there's a few questions there. I think when you have a large set of functions, how do you put them together? We decomposed our application into a bunch of little pieces. Now how do we put the pieces back together? And compatibility is one of the issues there. 

So I think this is a bit of an open area for functions as a service. I think it's a bit of a language and framework design problem. So we're going to try a few things. So I think one thing that we need is support for some composeability. So you need using code to be able to compose other functions together. 

Today, most of the FaaS implementations don't do that very well. You create an event or HTTP request. And you can call other functions. But there isn't a formal way to call other functions through the framework itself. And so we need that. So we need some sort of composeability. 

And I think we need some sort of grouping-- either modules, name spaces, packages, something like that that can let you assemble your functions together. So you still have some notion of separation between functions. But a program after all, like you said, is many functions and modules. So you need some constructs to group them. And then that will also help with the compatibility question, because then you can version the repository as a whole. 

So we don't have any of this today. But some ideas on what to do, for example, you might have a git repo with a manifest at the top level, something that looks kind of like a Kubernetes YAML file. And so it would say, OK, this function is-- this subdirectory or this set of files over here forms the function here. It imports that module over there. And this other set of files is this other function. And the whole thing is versioned as a whole. 

And so you could imagine deploying. You could imagine pointing the Fission tools at that manifest. And the thing wraps it up as some sort of package. And Fission figures out how to run that. So that's very hand-wavy and a little vague. We want to experiment with something like that. Like I said, it's not a solved problem. And we're going to try things out and see how that goes. 

Today the main utility tends to be-- maybe because of this problem-- in smaller use cases, especially like event handling and web hooks, a small slack bar, that sort of thing. 

MARK: That's actually what I was going to actually segue into, which is great. I was going to ask you, then, given what you said, what do you think the major use cases for this? I know personally, when I looked at this, the fact that Fission can handle not only HTTP events but also Kubernetes events, to do the glue stuff within Kubernetes. Was that what you think it would be used for? What are the use cases you think are going to be particularly useful here? 

SOAM: So I think initially, it's very useful for small rest APIs. A web hook is basically one end point rest API, you could say. And slack box and little automation, like OK, let's pipe events from Kubernetes or other sources into that system. And use that to glue it into other infrastructure. I expect that to be the main use case. And I see, the actually usage also tends to be like that. 

So we haven't done [INAUDIBLE], some CI systems or automated builds, triggers, some functions. And we track test failures and so on using these things. The idea of having a bigger app implemented this way, it's definitely something we'd like to reach. But that's definitely a more speculative use case. We'll have to see how that goes. 

I am excited about that use case. I think it would be really nice to be able to specify, mostly in a language-neutral way, how a rest API should be deployed and run on Fission and have Fission take care of that after deployment and scaling and things like that. But we're not quite there yet for bigger programs. 

FRANCESC: So [INAUDIBLE] is you mentioned a couple of use cases, like managing some events and stuff. Could you tell us a little bit about what are the use cases for which you think that functions as a service is a much better metaphor than, let's say, infrastructure as a service or platform as a service? 

SOAM: This, again like today, the event handling stuff is the best use case for that. If you just want to write, say, some trigger for-- for example, we were just discussing this within the company a few days ago. We had this source code cross-referencing tool that today pulls our git repositories. 

And so we figured we could just change it to have a small web hook that's triggered every time you do a commit to a repo. And that and that web hook would go and poke this source code indexing thing that would re-index whatever changed or at least the repo that changed. And then you wouldn't have to pull the git repo. 

So now if you imagine implementing this as either infrastructure as a service or microservices, you have to-- it's a little bit more involved. You have to create the service around it. If you're running it on a VM, you have to worry about the whole operating system. If you're on Kubernetes, you're definitely a bit better off. But I think where this function as a service helps is that you don't have to worry about-- you don't quite have to worry as much about the capacity of the cluster in terms of the number of services you deploy. 

So in some sense, creating a service becomes cheaper, both in terms of development cost and runtime infrastructure cost. So basically our cluster capacity becomes more a function of usage then of the size and number of services that you've deployed. 

MARK: Cool. So I'm curious about something else as well. Fission is built on top of Kubernetes. Why did you choose Kubernetes as the platform? What was the reasoning behind that? 

SOAM: So a few different things. One is that Kubernetes provide so much of the stuff that we'd have to build if we didn't use Kubernetes or something like it. That from a purely implementation point of view, it just makes a lot of sense. We don't even know about nodes. Discover Kubernetes completely takes care of the cluster management itself. 

We don't have any real scheduler. We might have some scheduling decisions to make. But Kubernetes takes care of the bulk of scheduling decisions. We don't have to do any complex storage integration. We would just be able to use Kubernetes volumes, that networking secret management. 

So in terms of dumb implementations, Kubernetes takes us way ahead than where we would if we started without it. So that's one story from an implementation point of view. From a user's point of view, we think-- so I don't think functions as a service will replace the idea of microservices or just putting services in containers and running long-lived services, because there's plenty of cases where you want to do that. 

Let's say you're running Redis. It doesn't make any sense to kill Redis when it isn't doing requests, because it would lose all its memory. So obviously that has to be a long-lived process. So if you're using that, then the question is, as part of your bigger-- as part of your overall solution, how do you mix together functions as a service and regular services? 

And I think Kubernetes is a good place to bring those all together, because you can get service discovery maybe between these things. And you can just easily have them on the same cluster. You could, in the future, maybe do some smart things with scheduling. And what else? So basically interrupt with services, the implementation advantages, the reuse of Kubernetes concepts, like secrets, volumes, and so on. 

And I think there's also an operational benefit. You don't want to run two clusters, one for services and one for functions. It's better to have fewer systems that you manage. So if you're already managing a Kubernetes cluster, managing its nodes, managing [INAUDIBLE] and its state, then you might as well spend that effort to run functions on. And so if you have something like a log monitoring framework, and monitoring stuff like Prometheus, you could just reuse that with Fission. 

FRANCESC: So I'm curious about, you were talking about all the cool things about building on Kubernetes. So I'm going to go the other way and ask you, what was the biggest challenge about building something like Fission on top of Kubernetes? 

SOAM: For the most part, once I got past the learning curve, figured out how to use the client, a lot of things was super doable. The API is very complete. It's very comprehensive. I can talk about a few challenges that we just haven't solved yet. 

So one thing is volumes. I spoke about how it's awesome that we can reuse Kubernetes storage management. But the way volumes work conflicts with the way we dynamically load functions. So let me roll back a bit. When we started this, we tried to just take a function, wrap it in an image, and just clear Kubernetes deployment on a service using that image on demand. 

But that takes a few seconds at best. Even if you re-pull the image and cache it everywhere, that still takes a few seconds. And when people do function as a service, they expect a faster cold start-- on the order of 100 milliseconds, even less sometimes. But that's the goal we've aimed for so far. 

So to do that, we needed to have already running parts. And so when you create-- when you add support for Nagios or Python to Fission, then Fission creates a pool of these parts that are already running before you even have any requests for a function. 

And then when the request comes in, the functions are loaded in there and run. And that has a smaller overhead, because the overhead of starting a part was already taken before the request came in. 

So now what to do with things like volumes, because it's not possible today, neither in Docker nor Kubernetes, to mount a volume on an existing running part, as far as I know. I've tried to figure this out. But it looks like that is not possible today. 

So if your function wants to use a volume, then you have to lose the cold start optimization, which means you have to start the part when the function request comes in. Or we have to figure out something separate from the way volumes work today, like maybe have a separate part that then the function can connect to get at its storage, something like that. But basically mounting storage is a challenge we haven't figured out yet. 

FRANCESC: Maybe one of our listeners may be able to help with that. 

SOAM: Yeah, I hope so. Today the answer is that we would have, maybe, some sort of separate mode where you lose the cold start optimization if you really want volumes. 

FRANCESC: Cool. So I have one more very short question. What language did you use to implement this? 

SOAM: It's all in Go. 

FRANCESC: Nice. 

SOAM: It's actually my first non-trivial Go project, so very much learning as I go. I had a few initial puzzling moments with Go. But now I like it a lot. And I'm very excited to be using it. I started with it, because Kubernetes is written in it. And also it seemed to be getting popular. I didn't have a strong reason to adopt Go over something like Nagios, which is what I was familiar with before. But I've really enjoyed making this in Go. 

MARK: Cool. We're definitely running out of time. So very quickly, what is the plans for the future? What's on the roadmap for Fission? 

SOAM: I think we addressed a few major pieces of effort. The current major effort is improving that function pipeline, supporting compile languages. After that, we want to get that improving the developer workflow a bit, dealing with having better support for versioning. We have very, very basic versioning support today. There is support. But it's a bit manual. It doesn't interact with Git as nicely as we'd like. 

And then there's more language support, better integration with Kubernetes volumes, secrets, config maps, and of course, integrations with more events sources. Integration with some sort of message queue does not-- maybe Kafka or something like that. And finally we have a lot of performance tuning to do. We don't do R scaling today. But we need to do that both up and down, things like that, and also latency improvements, both in cold start and in the fast path. 

MARK: Cool. Soam, thank you so much for joining us today. I think we're going to have to cut it there, just because we're running out of time. But we really appreciate you definitely for coming down and talking to us, especially on a Saturday. We really love that. It was really interesting to talk about Fission with you. 

SOAM: This was awesome. Thank you so much for having me. 

MARK: Thank you. 

FRANCESC: Great, that was a great interview with Soam. Thank you so much for taking the time, as you said, especially on a Saturday, to talk to us and tell us a little bit about why and how you implemented a FaaS on top of Kubernetes. 

MARK: Super, super cool, as I said before, I'm quite interested in how you can use this to basically build quick little bits of glue inside Kubernetes and connecting that to other things. 

FRANCESC: Yeah I'm very excited, especially about the about the Go support coming soon, maybe using Go plug-ins, which is something that's coming with Go 1.8 the pre-release. Actually, probably right now as we're talking. The Go 1.8 will be released on Wednesday. So that should be cool. 

MARK: Cool. Well, why don't we move into our question of the week? I know you had a particularly interesting one about web sockets. 

FRANCESC: So as I was saying at the beginning of the episode, it's about something that I really don't know that much. But it is important. Many people know that you know if you have global service, you need to do load balancing. And many people know that if you want to have a very responsive web page, web sockets can help you. And we all know that it is important to secure all of the things with HTTPS. 

But when you try to use web sockets over HTTPS load balancer, if you read the documentation, it says, no, you cannot do that. What's the deal with this? 

MARK: What is going on here? 

FRANCESC: What is going on? 

MARK: What is going on? So it's a good question, and one I've definitely run into before. So yes, if you're doing HTTP or HTTPS load balancing, we have a global layer 7 load balancer to help support that. That load balancer doesn't support web sockets. So it's like, what do I do? 

So web sockets themselves aren't HTTP. Web sockets run over TCP protocol. They're negotiated and managed by HTTP, by the browser and the server to where do I connect to and where. But they are a TCP connection. So we need a TCP load balancer is essentially what we need. And Google Cloud Platform has a TCP load balancer, which is great. But what we also want is we want SSL support, because much like HTTP and HTTPS, security good. 

So what we can do then is we set up a TCP load balancer, a network load balancer. But we set it up with what's called an SSL proxy. And once we do that, things pretty much work as you would expect. 

So when you go to set up your network load balancer-- and actually the console.cloud.google.com has a really nice interface for this now, where if you go in there, and you're like, hey, I need load balancing from my network, it will give you the options. You can then select TCP load balancing. And then when you go into configure, it'll actually ask you connection termination. Do you want an SSL proxy? Or do you just want straight TCP? 

So you are then able to select Proxy, and then go configure from there. So you're totally able to do web sockets. You just need a slightly different type of load balancer to rum them over. 

FRANCESC: Little side question about it. You mentioned that when it's an SSL load balancer, you can choose TCP. Is there anything else you can choose? Can you choose UTP? 

MARK: You can totally do that as well. It actually has that as three options when you go in-- HTTP or HTTPS load balancing, TCP load balancing, as well as UTP load balancing as well. 

FRANCESC: Awesome. 

MARK: Well I think that's bringing things to a close. Francesc, you up to anything particularly interesting. Is there Just for Func? I hear that might be there a Just for Func? 

FRANCESC: Yes I did release a new Just for Func episode finally. And it was very successful. It is implementing flappy bird. I call it flappy gopher, because it's written in Go. And in two days, it got almost 3,000 views. So I guess that people like it, lots of fun. 

And also I've been working with the Go plug-ins, actually. They come with Go 1.8. And I wrote a demo about it. And we'll have a link to that. So if you want to do hot code swapping in Go, which is something that was not doable until this version, check out the repo. It's everything on Git Hub already. So it's easy. And what about you? 

MARK: What about me? When this comes out, there will be a blog post live on my website. I actually just wrote one for if you're a game developer, and you want to come to Cloud Next, which is literally the week after GDC. And you want to come there. And you're like, hey, maybe there's some game development sessions that are relevant for me. There are actually quite a few. So if you do anything with backender or multiplayer games or anything like that, we have enough stuff around location-based games and all sorts of interesting stuff. Maybe well worth a read. 

But otherwise, just getting ready for GDC and Next. Those are my big things. GDC's going be huge. Next is going to be huge. 

FRANCESC: For me, it is going to be, you know, coming back to San Francisco soon, and GopherCon India, and then Cloud Next, which is going to be pretty intense, as you're saying. But ready for that. I'm actually very excited, lot of podcast things going on for that. So very excited about all the planning and hopefully seeing many of our listeners out there. 

MARK: Yeah, absolutely. We will be set up at Cloud Next. So please come up. Say hello. We may have some swag. We may. 

FRANCESC: Yes, I'm sure we'll have some t-shirts. 

MARK: T-shirts, stickers, we'll find some stuff. We'll definitely find some stuff. 

FRANCESC: So I think that today, it's a very good day to remind our listeners how they can get in touch with us, if they want to ask questions or propose some topics, or just say that they love us, whatever they feel like saying. So why don't we do that? Let's do it the other way around today. So I'm going to say the medium and you say the handle. So let's start with the easy ones. We have a web page. 

MARK: GCPpodcast.com or cloud.Google.com/podcast. 

FRANCESC: Great. We do have an email, too. 

MARK: Hello@gcppodcast. 

FRANCESC: And we, if I remember correctly, we have a Twitter. 

MARK: @Gcppodcast. 

FRANCESC: We have Google+. 

MARK: +GCPpodcast. 

FRANCESC: We are on Reddit. 

MARK: At /r/gcppodcast. 

FRANCESC: On Myspace, now we're not. 

MARK: We are not on Myspace. 

FRANCESC: Which one else? I'm forgetting Slack. We are also on Slack. We have a channel. 

MARK: Yeah. Hash podcast on the Slack Google Cloud community. 

FRANCESC: And I think that's it. 

MARK: That is it. No, I just want to make a quick shout-out. If you do something that's cool-- if you're like, hey, I wrote a blog post, or I have an open source project, or anything like that, and you think it'd be interesting for the podcast, please send it through. We're always looking for more cool things of the week done by the community. 

FRANCESC: And also something that we proposed last year, if you have questions, and you'd like to send them to us as an audio file, that'd be awesome. So we could use your own voice on our podcast. That'd be awesome. You'd become, basically, famous instantaneously. So this is an important area to take. 

MARK: Absolutely. Great. Well, Francesc, thank you for joining me yet again for another week. 

FRANCESC: Thank you for waking up early on a Saturday. 

MARK: No problem, and talk to you all next week. 

FRANCESC: Yeah, talk to you all next week. 
{{< /transcript >}}