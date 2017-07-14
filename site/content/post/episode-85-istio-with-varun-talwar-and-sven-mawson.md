+++
audioDuration = "00:34:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.85.mp3"
audioSize = 49258950
categories = ["gRPC", "REST", "Open Source", "Monitoring"]
date = "2017-07-12T01:07:49Z"
description = "Due to popular demand, this week Francesc and Mark are joined by Varun Talwar and Sven Mawson to discuss all things Istio, an open platform to connect, manage, and secure microservices"
draft = false
image="/images/post/istio.png"
episodeNumber = 85
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Istio with Varun Talwar and Sven Mawson"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/XvMidbBUq7x"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6mun9g/episode_85_istio_with_varun_talwar_and_sven_mawson/"
+++

Due to popular demand, this week [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
are joined by Product Manager [Varun Talwar](https://twitter.com/varungyan) and Senior Staff Software Engineer
[Sven Mawson](https://twitter.com/SvenMawson) to discuss 
all things [Istio](https://istio.io/), an open platform to connect, manage, and secure microservices.   

<!--more-->

##### About Varun Talwar

Product Manager in Google Cloud; founding PM on [@grpcio](https://twitter.com/grpcio) and [@IstioMesh](https://twitter.com/IstioMesh)

##### About Sven Mawson

Software Engineer in Google Cloud; founder of [@IstioMesh](https://twitter.com/IstioMesh)

##### Cool things of the week

- gSlack: Integrating Google Cloud Platform with Slack [blog](https://blog.doit-intl.com/gslack-9391be7c191a)
- Solution guide: Building connected vehicle apps with Cloud IoT Core [blog](https://cloudplatform.googleblog.com/2017/06/solution-guide-building-connected-vehicle-apps-with-Cloud-IoT-Core.html) [solution](https://cloud.google.com/solutions/designing-connected-vehicle-platform)
- Why did the Gopher spend so much at the drug store? [punchline](https://twitter.com/Neurotic/status/884462047852863488)
- Super Mario Run Case Study [youtube](https://www.youtube.com/watch?v=-29lW2EWock)

##### Interview

- Istio [home page](https://istio.io/) [overview](https://istio.io/docs/concepts/what-is-istio/overview.html) [design goals](https://istio.io/docs/concepts/what-is-istio/goals.html)
- OSI Network Model [wikipedia](https://en.wikipedia.org/wiki/OSI_model)
- Kubernetes sidecar containers [blog](http://blog.kubernetes.io/2015/06/the-distributed-system-toolkit-patterns.html)
- Installing Istio [docs](https://istio.io/docs/tasks/installing-istio.html)
- Monitoring via [Prometheus](https://prometheus.io/) ([podcast](https://gcppodcast.com/post/episode-82-prometheus-with-julius-volz/)) and [Grafana](https://grafana.com/)
- Envoy L7 proxy [homepage](https://lyft.github.io/envoy/)
- Istio Ingress Controller [docs](https://istio.io/docs/tasks/ingress.html)

<div style="text-align: center">
  <a href="https://istio.io/"><img src="/images/post/istio.png" style="margin: auto;"></a>
</div>

##### Question of the week

If I want to apply Istio to an existing Kubernetes application, how do I do it?

- Managing microservices with the Istio service mesh [blog](http://blog.kubernetes.io/2017/05/managing-microservices-with-istio-service-mesh.html)
- `istioctl kube-inject` [docs](https://istio.io/docs/reference/commands/istioctl.html#synopsis-5)

##### Where can you find us next?

Francesc will be at [GopherCon](https://www.gophercon.com/) in Denver. He also recently released the [Go Tooling in Action](https://github.com/campoy/go-tooling-workshop) workshop
and a new [justforfunc](https://www.youtube.com/watch?v=c5ufcpTGIJM) episode!

Mark will be speaking at [Google Cloud Summit, New York](https://cloudplatformonline.com/summit-NewYork-2017.html) with Phoenix One Games in July,
as well as TA'ing the [Kubernetes Bootcamp](https://cloudplatformonline.com/summit-NewYork-2017-Bootcamp.html). He also
released the [second blog post](http://www.compoundtheory.com/scaling-dedicated-game-servers-with-kubernetes-part-2-managing-cpu-and-memory/) in his series about running Game Servers on Kubernetes.  

{{< transcript "FRANCESC: Hi, and welcome to episode number 85 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm very, very, very well. How are you doing? 

FRANCESC: I am very, very, very well, too. And yeah, in San Francisco for the last day before GopherCon, very, very, very, very excited about that. 

MARK: Yeah, it'll be good. 

FRANCESC: Yeah, and also very excited about a really cool project. I love open-source, and we've been talking about Kubernetes, we'll be talking about Prometheus, we'll be talking about so many projects that are related somehow to the Cloud Native Computing Foundation. And this one is not yet there, but-- 

MARK: Maybe soon. 

FRANCESC: Yeah, I think it will be. We're going to have the luck to talk to Varun Talwar, which is the product manager of Istio, and Sven Mawson, which is one of the software engineers working there. 

MARK: Yeah, super excited to have them on the podcast, to talk about how Istio, one of the first Kubernetes native projects-- I love that-- 

FRANCESC: It's not even Cloud native, it's Kubernetes native. 

MARK: Kubernetes native projects to help with microservices, and help you manage and administrate them, and basically do all the stuff that everyone kind of needs to do. 

FRANCESC: And at the end, we'll actually have a question of the week related to Istio. Which is, OK, so I want to use Istio on my Kubernetes [INAUDIBLE]. I already have an application, what's the best way to get started? And there's actually a very good solution that was created. So we'll just talk about that. But before that, we have a bunch of cool things of the week. So why don't we go with them first? 

MARK: Yeah, so the first one coming up is a gentleman by the name of-- or I assume gentleman, a person of note whose name is Vadim Solovey. I think I got that vaguely right. 

FRANCESC: According to his picture, he has a beard, so yeah. I'm pretty sure it's a guy, yeah. It's the G slack thing. 

MARK: Yeah, so he wrote a blog post stepping through a thing called G Slack, integrating Google Cloud Platform with Slack. Which was basically set up so that there was a bot that will tell you when things happen inside your Google Cloud Platform project. So if you want nice visibility across your project inside Slack, he shows how that you can set up essentially Stack driver logging, going to Pub/Sub, then going to some Cloud functions to filter which notifications you want to receive, and then finally pushing that into a Slack channel. 

FRANCESC: Nice. 

MARK: It's a really nice little article. And I think if I had a team that was doing a bunch of stuff on a Google Cloud Platform project, I think this would be a really nice way of giving them just visibility of what's happening. 

FRANCESC: Lots of people use Slack. I've seen many integrations where you do things through Slack. So you deploy Kubernetes cluster with Slack or whatever. But I like this one because it's actually the other way around. It's basically Google Cloud Platform letting you know that something's weird with your Slack project, or whatever, or that everything is fine. 

MARK: Everything is fine, or just somebody did a thing. Hey, somebody deployed the Kubernetes, or somebody push data to datastore, whatever it is you want to know about. 

FRANCESC: I like it. Very, very cool. Next we have also a blog post explaining how to-- so it's a solution on the Google Cloud Platform blog, not podcast. And it explains how they build connected vehicle apps with Cloud IoT Core. I didn't know what Cloud IoT Core was. And actually, we just sent an invite to someone by the name of Gabe. Hey, Gabe. 

MARK: Hey, Gabe. 

FRANCESC: We want to have you for the podcast to talk about Cloud IoT Core. Well, basically what Cloud IoT Core does, it allows you to not only do a dating session from IoT devices, but also manage the devices themselves. So all the authentication, the authorization, but even updating the software running on those devices themselves is managed by these firmware. 

So it's really cool, and they explain how using this and MQTT, which is a kind of message queue that we use to send in stuff to Cloud Pub/Sub in Cloud Dataflow. You're basically getting like how to manage those vehicles, and then how to ingest all of the data that is coming from it. It is very cool. It is very intense. Like, there is basically every single-- you have App Engine, Compute Engine, Container Engine, Cloud Storage, Big Table, Cloud Dataflow, Big Query, TensorFlow, Cloud Dataflow again, in Pub/Sub. 

MARK: Bingo. 

FRANCESC: Yay. Oh, and IoT Core. 

MARK: Oh, of course, yes. 

FRANCESC: So a very interesting use case covering a lot of ground. So go check it out if you're into IoT, or if you're just curious about how we can do cool things with lots of data. And then we have a cool thing of the week, which is not necessarily technology related, but I'm going to let you go with it. 

MARK: Yeah. So there is a wonderful gentleman here in this SFO office by the name of Bill Prynne. Bill, how you doing? He regularly writes these jokes on the wall in the office as you walk in, and today was fantastic. It was, why did the gopher spend so much time at the drugstore? Because he didn't believe in generics. 

FRANCESC: It is so bad but I like it. 

MARK: I had to share it, because it was fantastic. 

FRANCESC: It is really good. I saw it this morning when I got to the office, and I was like, OK, I'll take it, I'll take it. Very good. I think maybe if Bill keeps on cracking at these good jokes, maybe we should start using them as part of a section, the joke of the week. 

MARK: Yeah, I like it. I like it. Finally, though, we have a very short video. If anyone is familiar with Mario, and I'm sure many of you are, there's a mobile application that came out a little while ago called "Super Mario Run." It was quite popular. It was actually running on Google Cloud Platform, and there was a show video that was made about how it was put together, and the team that made it at Nintendo and DNA, products they use at GCP. It's a very short, it's like two minutes worth of video. But it's subtitled, so if you don't know Japanese it's certainly fine. But it's a super cute video where you can see Mario run around. 

FRANCESC: And not only that, but you also get to see the engineers actually using Google Cloud Platform, and you can see they're managing all the monitoring with Stackdriver, they're using BigQuery to run queries to see how the analytics are doing extract deeper information. Is really cool. And then there's Mario jumping around, so you can't go wrong with Mario. 

MARK: Exactly. Awesome, well, why don't we go have a chat with Varun and Sven, and talk to them about Istio? 

FRANCESC: Sounds good, let's do that. 

So I am very happy to welcome today to members two the Istio team. Working from Monteview, joining from Sunnyvale I think, we have Varun Talwar. Hello, Varun, how are you doing? 

VARUN: Hey, I'm doing well. 

FRANCESC: And we also have Sven Mawson. How are you doing, Sven? 

SVEN: Doing great. Good to be here. 

FRANCESC: Awesome, thank you for coming. So before we get started talking about what Istio is, and I will be asking the question, what does it actually mean? Like that word, because we love Greek words now in the cloud. Why don't we talk a little bit about who you are and what you do? Let's start with Varun. We had you for episode 15 of the podcast talking about gRPC, what are you up to now? 

VARUN: Hey, Francesc. Good to be back. Besides gRPC, I'm now working on this new project called Istio. I'm very excited to be talking to you guys about it, and hopefully our listeners are as excited as we are building it. 

FRANCESC: And you're acting as a product manager in the team? 

VARUN: Yes, I'm a product manager in Google Cloud, and we're working on open source. 

FRANCESC: Awesome. What about you, Sven? 

SVEN: Yeah, I'm one of the founders of the Istio project. I'm a software engineer. I've been working in the API management and service management space at Google's for a while, and managing the team delivering Istio. 

MARK: Cool, all right. So why don't we get started with the basic question. So from a high level, what is Istio? Varun, you're the PM, we can see get a good explanation out of you. 

VARUN: All right, happy to do it. Let's see if I can do it. Istio is an open platform to connect, manage, and secure services. That's what you would read, even if you go to our website, istio.io. Essentially it's an open service mesh where we would like developers and operators to not have headaches about how to connect services, how to think about making them resilient, how to secure them, and how to manage their runtime. We would like Istio to be able to do that for developers and operators across all environments and clouds. 

And when I say services, it's really all kind of services, not necessarily just micro. It could be anything you're building, you know, MySQL, API surface, a really small micro service within your app. So for payments or shopping in any given language. So Istio takes an approach of working with polyglot environments. No matter what language you write your services in and no matter where you deploy, Istio would like to give you a uniform substrate between your application and network, which can take care of connectivity between services, resiliency between services. 

So resiliency includes things like retries, failover, all of the good stuff in distributed systems. Securing services. We think internal services should be as secure as external ones. So security by default. And have complete observability and visibility of metrics all the way from L3 to L7 across all your services. 

FRANCESC: Cool. So that sounds like a great description from that point of view product manager. You mentioned the first description that you gave of the whole project set was something about a service mesh. What does it mean to be a service mesh? What is a mesh? 

VARUN: So it's a fairly new term, so it's worth explaining what that is. Essentially think about a layer, and some people call the L5 layer, which is basically a layer between your application and your network. And when you think about it, we are injecting a proxy next to every service. And those are in the data path of all the service to service communication. And they are all interconnected, and also connected to a common control plane. And that interconnected set of proxies which are living next to every service is what typically is being called as the service mesh. 

The reason it's so interesting is that once you think of mesh as a layer which exists like a network does, you can at the application layer start to offload things like connectivity, resiliency, security, visibility to that layer. So historically you would do this in either application libraries. So if you're building in Java, or Python, or Go, there's a bunch of libraries in each of these language environments that you would import, and logic into those. And/or you would do L3 level security and policy, like IP whitelisting, firewalling, VPNing, VPCs peering, and so on. 

So we think service mesh is a space between the two which can offload a few things from L7 and give policy driven controls to operate your network. 

MARK: So the service mesh is kind of the bit that sits between everything. It's kind of like the dark matter of the universe? 

VARUN: Haven't described it that way yet. 

MARK: So a service mesh isn't all the different services that talk to each other, but instead the piece that sits between them and make sure that everything is OK between all of them. Would that be about right? 

VARUN: Yes. It's the piece that makes sure that if you think of all your services as sort of nodes in a graph, mesh is basically making sure you don't have to think about managing the edges. And everything that you have to do on the edges, which is how do I connect them, how do I retry my connections there, how do I load balance my connections there, how do I apply a policy on connections, so that's one way to understand what the mesh is. 

FRANCESC: Cool. So we're talking a little bit about level 7, level 3 level 5. Just a little bit for context, I guess, it's worth mentioning that I'm assuming you're referring to the OSI levels of networking, where a level 3 is networking, level 7 is application? 

VARUN: That is correct. 

FRANCESC: What does it mean, level 5, for you? What does it actually mean for you? According to this, it means session, which is kind of an ambiguous term. 

VARUN: Yeah. Classic OSI stack is what I'm referring to. L3 is TCP, L4 as HTTP. gRPC also in a similar bucket. So yeah, I am saying, I guess, things above the HTTP layer. Again, L5 is sort of just a description to say it's above the network and below the application. I don't think it's a formal concept in the OSI stack. 

FRANCESC: So then from the point of view of a developer, you basically is like, until so far, let's say that you have two services. And that they're running like on Google Cloud Platform or Compute Engine or something. You have two services, and you want to do an HTTP request. One of the services is exposing a REST API. So what you normally do is you just send an HTTP request. 

So HTTP will be the transport, network would be TCP. Whatever goes below, we don't care. 

VARUN: Right. 

FRANCESC: How easy a change is this? What is the change in the whole thing that allows us to have all the security, and monitoring, and all that good stuff you were talking about? 

VARUN: Essentially, service A talking to service B in a Kubernetes environment, which is what we have prioritized this to have today, but we would hope to take it to other environments soon. You would basically install Istio, and we would transparently intercept the A to B traffic. We would deploy what we call a site call proxies, are basically proxies next to A and B, just to keep it simple. And all A to B communication then becomes the local proxy A to local proxy B communication. 

And once you do that, and once Istio has intercepted the traffic, the proxies are smart to do resiliency things like retries, circuit breaking, failovers. And once Istio is intercepting the traffic, you can apply policies like, hey, don't make more than 100 calls per minute from A to B, or a rate limit, or a quota. You could also do load balancing between A and B without the applications having to do anything. You could get all the telemetry between A and B in terms of latency at a rate QPS between A and B without the applications having to import and wire in monitoring libraries, which you would typically do. Sven, you want to expand on that? 

SVEN: Sure, yeah. So the way I think about this is that Istio is sort of making your network a lot smarter. So from an application view, you don't have to know about all the stuff that's going on. It's just suddenly your network now is more resilient, because you get all these retries, and circuit breaking, and the things Varun was talking about. And you get all these policies, and you don't have to actually go and write any code to do any of that. It's just sort of automatic. 

And under the hood, yeah, we're adding these [INAUDIBLE] proxies, and we're intercepting traffic. But that sort of implementation detail that can change in future versions of this. The idea is really just we want to make that network operate at the service level, at the application level, and be able to do a lot of these things and people are having to write custom code in their application to do today, the network should basically handle that for them. 

MARK: Cool. Varun, you touched on this a little bit. You said there was a priority for Kubernetes. I've heard this referred to as Kubernetes native, which I kind of think is quite cute. And Sven, you might answer this best. Why was that decision made to prioritize Kubernetes and make that the base platform for Istio? 

SVEN: So there's sort of a couple different parts to that. One is that we were sitting very close to the Kubernetes folks, so that made it easy to talk to them about problems we were having. More seriously, Kubernetes provides a lot of value and provides a lot of services that we didn't have to go and implement. So it provides the service registration mechanisms, and orchestration, and all these other pieces, and even actually has some built in authentication that we're taking advantage of. 

So it really helped us get to market a lot quicker with this project, because it had all those pieces we didn't have to rebuild ourselves. So that was a big part of why Kubernetes was sort of the first target. 

FRANCESC: Awesome. OK, so let's talk practically then. So say I'm a developer, this sounds really cool. I don't want to write all this retry logic myself, or do all the security stuff myself. I want to install Istio and have a play with it. How do I do that? How do I make this thing work with my applications? 

SVEN: If you're writing on Kubernetes, you can just go to istio.io, and we have sort of a tutorial section. And one of those tutorials is installing Itsio. It takes about five, 10 minutes. You can install it in your cluster, and then there's a bunch of actually sort of walkthroughs and different things you can do with it after that. So you play with the routing, you can play with the policy enforcement. Authentication actually you don't really have to do anything. It just automatically secures your communication for you. But then if you want to write policies against who is acting in your mesh, you can do that. 

So it's actually pretty easy. I'm sort of surprised every time I go and do a demo how easy it is to get started with this thing. It's really just 10 minutes to get something useful up and running. 

MARK: And then if I want to configure Istio, like you're talking about being able to set up connectivity or load balancing, how do I go about doing that? 

SVEN: Right, so Istio comes with a command line tool called Istio Control that users familiar with Kubernetes queue control, it's very similar to that. It's sort of modeled on it. Basically you do the same thing you would with Kubernetes. You write a file, and then you run these to control and pass it the name of the file, and it goes and configures Istio. That's how you do things like set up a quota. So you could write a file that says, user A calling service B only gets 100 UPS. That's maybe one or two lines of configuration. You run these to control, and now that will actually be enforced. 

FRANCESC: Cool. And with this you really get things like quota, as we were talking, things like retrying in case the service is down. What about the monitoring? Is it a dashboard there, does it integrate with other services like Stackdriver? How does this work? 

SVEN: Right, so one of Istio's philosophies is that we don't want to build things that other people have built. So we didn't build any monitoring ourselves, right? We're using other monitoring systems. The first one we support is Prometheus. And we sort of come with out of the box Prometheus support, out of the box a Prometheus dashboard, actually, that will automatically show you all your services, and their traffic, and errors, and a bunch of other useful things. And there's metrics that we collect by default, and then you can go ahead and extend that as a user, and add more metrics, add better dashboard and alerts, whenever you want to do. 

VARUN: Just one line to add, what Istio gives you is more traffic signals, more L7 metrics into the systems that you're already using for monitoring. So back to our example, A talking to B, yes, you're interested in how much CPU utilization, and network bandwidth, and resources being used by A and B, but you're probably more interested in what is the latency from A to B? What is the error rate between A and B? How many respond calls by percentage? So the things at L7 that you're interested in, you just sort of get out of the box. 

MARK: I'm actually very specifically thinking of that example where I would probably have had some sort of try catch error code on both sides of my application that would have caught that error either sending or receiving, and then sent that up to some sort of monitoring unit. But now with Istio, I can put this in between, and it's going to handle that sort of thing for me. 

SVEN: Right, yeah. 

MARK: Which that sounds really cool. 

FRANCESC: Yeah, I just wanted to mention that for our listeners, for more context on Prometheus, we actually released an episode with one of the founders of the project, Julius Volz with episode 82. So if you want to know more about it, go check it out. 

MARK: So I was going to ask another question since we also have Varun here. I know there's some-- I don't want to call it magic, there's some special bits and pieces in there that are particular for gRPC as well that sort of work out of the box. Can you talk about some of those? 

VARUN: Yeah, so, you know, the approach here is it should work even if your services are gRPC services. So Istio should work the same way. Hopefully better, because you're getting the HTTP 2 advantages and so on. So the interesting thing here is the proxy in Istio understands gRPC. So basically you don't have to do any transcoding from like REST to gRPC. You don't have to do that heavy lifting because the proxy understands them. 

So our goal here is to have such works with Gypsy services as well of course in future we can make it even better that you can have the policies you apply and you know security principles you apply they can work with tool gRPC services even with our proxy so we had our area but I think our goal is to enable people to have all these capabilities if you use a proxy in the middle or you order a few just build with gRPC, you still get a lot of the connectivity resiliency and similar kind of traffic management and policies that Istio supports. 

MARK: And won't Istio do gRPC to REST conversion as well? 

SVEN: It will eventually. It hasn't quite yet. 

MARK: Oh really? OK. 

SVEN: It's on our roadmap, so yes it will. 

MARK: I got excited. I was reading it and I saw that, and I was like, oh, that's so cool. 

FRANCESC: Yeah, that sounds really interesting. Actually, since we're talking about the roadmap-- 

SVEN: Yeah, we're targeting the next release. Yeah, that's actually a feature that there's someone in the community actually created a gRPC gateway that does that based on the sort of standard annotations that Google released. And we've also released a Cloud Endpoints product that also does this, and yeah. We're very committed to letting people write gRPC services and have those people using gRPC, but also people just using HTTP. 

FRANCESC: Cool. So since we're talking about the road map, I wonder before we talk about the road map is, is Istio version 1.0 ready? Is this something that should be running in production, not yet? And if not, when? 

SVEN: The version so far is actually 0.1. 

FRANCESC: OK. It's like 1.0, just the other way around. 

SVEN: Exactly. The smallest number we could come up with. So we don't actually recommend people use this on production. The proxy itself, the Envoy proxy, is production ready. It's been in production environments for at least a year, if not longer at Lyft. But the other pieces are new. And so people are worried about it at all, they probably shouldn't rely on it yet. We're furiously working on more stability, more performance, more reliability of those components to make sure that the bar of quality is much higher on the next release. And that's where we expect people should have no problems with using this in production. 

That said, I think there's already people using this in production and doing fine with it. So buyer beware, but there are people doing that. 

FRANCESC: Cool. So please do not use this in production, but even though some already do. 

MARK: But if you are, make sure you submit feedback so that the product can get better. 

SVEN: Exactly, yes. Keep the notes coming. 

FRANCESC: So then the question is, what is the roadmap, what are the next features that you're working on, what should we expect in the coming months, or maybe next year? 

SVEN: Yeah, so we're actually trying to really pretty often. So we're actually hoping to get least two more releases in this year. The next release, so there's a lot of stability, and performance, and sort of figuring things out going into that. So we learned a lot in the first release. A lot of it was duct taped together to try and just make all the pieces work, and maybe not necessarily that sort of right long term design. We're trying to finalize, for example, how partners, and vendors, and other interested parties can add their over backends, and their own futures to Istio, and do that very simply. Today it's a little bit harder than we'd like, so we're doing a lot of refactoring to clean that up. 

Probably the biggest item in the next release is actually going to be support for raw VMs. So outside Kubernetes, being able to run this on just bare VMs. Which means you can run it basically anywhere, although it will be more effort than Kubernetes. Kubernetes is one line, raw VMs will take more because you have to write all the different parts yourself, right? 

So that's probably the biggest piece. And then after that, hopefully in the sort of third release, what I really want to see is what we call hybrid, which is maybe I'm running a couple of different clusters and some VMs, and you want all those to be part of one mesh, and be able to communicate with each other, and have consistent authentication and security, and all the goodness that Istio brings. 

That is actually a very difficult task, but we're hopefully up for it. So hopefully in the third release, that'll be coming out. 

MARK: Very nice. So actually that's interesting. So you mentioned [INAUDIBLE] cluster. So does Istio work outside-in, or does it work-- if I have two Kubernetes clusters and I want to send the information between them, I'm guessing the monitoring is separate and the aggregation is separate. But even if I have just external people using my APIs, that'll still come in through Istio otherwise. It's not just internal to Kubernetes? 

SVEN: So yeah, that's a great question. So Istio does come with what's called an ingress controller. So if you're just using Kubernetes, Kubernetes has an ingress resource that lets you configure how things coming into the cluster act, really on the HTP level only. And Istio has an implementation of that so that the envoy proxy basically acts as an inner ingress proxy and secures everything once it hits that point. So once things are into the Istio mesh, everything gets secured. 

But yeah, we have that part. What we don't have yet is those two clusters knowing about each other, and being able to do things like global load balancing across things, and failover, and the really cool stuff you can do once you know about everything in both places. 

FRANCESC: That sounds really interesting. Before we finish, we're kind of running out of time, but there is one question that I said I would ask, and I didn't ask yet. Which is, what does Istio mean? 

VARUN: As you know, we love Greek words here at Google Cloud. And they seem to do well in open source. So technically I think it's sale in Greek. [INAUDIBLE], Kubernetes, we're sort of going with the analogy. We're not just Kubernetes first, we'll also take inspiration from their naming. So with that name, there was another hope that we would get ist.io, but figured that wasn't available. And we're soon going to have stickers. So it becomes a real project when you have stickers. 

MARK: When you have stickers? 

FRANCESC: And t-shirts. 

MARK: What about t-shirts? Do we get t-shirts? 

VARUN: We have t-shirts already. 

FRANCESC: So then the web page for those that would like to learn more about the project is istio.io? 

VARUN: Yes. Istio.io is the website, and I think there's decent documentation on getting started. 

FRANCESC: And I'm just looking at it, and it's adorable. 

SVEN: I was just going to real quick say that on istio.io, there's also a lot more of this sort of philosophy behind Istio as well as just getting started. So you can learn more about why we created it, and how it works, and what the driving philosophies are behind it, which at least I think's pretty interesting. 

FRANCESC: Great. Well thank you so much for taking the time today to tell us a little bit about Istio and get us excited about the roadmap. 

VARUN: Awesome, thanks for having us. 

SVEN: Yeah, it's great to be here. 

FRANCESC: So thanks again to Varun and Sven to spend the time to tell us a little bit more about Istio, about the goals, and the roadmap, and a little bit of the history of it, too. So very, very interesting open source project. And the question of the week for today is actually related to the same topic. It's about Istio and, of course, Kubernetes. And the question is basically, I used Kubernetes, I love it, and I'm already using it with some applications. My applications, I have all the [INAUDIBLE] demos to describe the services, and the pods, and all that stuff. And I want to use Istio. How do I do this? What is the best way? Is there like maybe some tutorial to explain how to do this? 

MARK: Yeah, so this is a really good question. So overarching, there is actually a really great blog post on the Kubernetes blog-- we'll link to it in the show notes-- "Managing Microservices with the Istio Service Mesh." Where what it does is it takes an existing book info application, and then goes and applies Istio to it so that you can see metrics around ingress traffic in and out and see how that works. 

The thing that it highlights, and I think that's kind of neat, is Istio comes with Istio CTL, or Istio control depending on how you like to pronounce those things. 

FRANCESC: Istio Cuddle. 

MARK: No, no. Istio CTL. And one of the commands it has is a thing called Kub inject. Basically the documentation reads that the envoy side car that Istio uses isn't automatically injected with Istio, at least not yet. It's a project in progress, so they may get there eventually. But instead you can use this cube inject command on Istio CTL where you can hand it a Kubernetes YAML, and then it will change the configuration for you. 

And basically you can do that as many times as you like. And then as the project Istio changes-- which it probably will, it's still in progress-- you can keep redoing that to apply that inverse envou side car in a canonical way for Istio going forward. So it's actually a really nice little toolkit showing how you can do things. 

FRANCESC: It is interesting. I think that, yeah, the way the show how to do it is like cube CTL apply of the output of running Istio CTL cube inject. I'm not a huge fan of that. I think that probably if you're generating some intermediate YAML, you'd like to store that-- 

MARK: You'd like to keep it. 

FRANCESC: --somewhere. Yeah, just in case. 

MARK: Yeah, I think you should keep the original and what you've generated so you can always reapply and see what differences happen. 

FRANCESC: Yeah. But other than that, super cool tool. If you're getting started with Istio, have a look at it. Definitely the blog post. Super interesting, lots of detail. Just a little complaint about it. They show how you can run on the book info, they get a bunch of different languages. So there's models written in Python, Java, Ruby, and Node. Yeah. 

MARK: What's the problem? I don't understand. 

FRANCESC: I know, I know, I know. 

MARK: It's fine. 

FRANCESC: Yeah, sure. But yeah, other than that, very good, very interesting project. They even describe how once this has been done, you can start seeing all the graphs and monitoring on Grafana. So very, very cool. Definitely check it out, and try that cube inject. 

MARK: Cube inject. 

FRANCESC: [INAUDIBLE]. 

MARK: Awesome. So I believe when this comes out, you're going to be at Gophercon? 

FRANCESC: Yes, by the time this comes out, I will be getting ready to teach my workshop at Gophercon on performance analysis of Go programs using pprof and the Go tracer. 

MARK: Nice. 

FRANCESC: Yeah, lots of content in there. It's going to be fun, it's going to be a full day of performance profiling. So yeah. 

MARK: Sounds good. And speaking of workshops, I know you just released one, too, that's been doing very well. 

FRANCESC: Yeah. So I made a video a long time ago when I went to Go Con, Chicago. And it was called "Go Tooling in Action," and I made a workshop from it for QCon. I was in two weeks ago, and I open sourced the thing. And it got like 1,200 stars on GitHub, so Yeah, I'm famous now. I made it. I don't think I'm going to open source anything else ever again. 

MARK: Good. 

FRANCESC: Yeah, I'm done. 

MARK: You're done. 

FRANCESC: Yep, I'm done. And also since we're talking about things that I've released lady, I just released also the latest episode JustForFunc. I help to log stuff, and manage errors, and handling signals, and stuff like that to make programs that are really robust. And it's a code review from a piece of code that Sandeep wrote, Sandeep [INAUDIBLE] from our team. What about you? What are you up to? How is your open-source life going? 

MARK: Good, it's going well. So I will be at New York summit next week. 

FRANCESC: Cool. 

MARK: Which is cool. I'll be TAing, there's a Kubernetes boot camp that's happening the day before. So if you're interested in getting kickstarted from a basic level what Kubernetes is doing, I'll be there helping that out. There's also an ML and TensorFlow one that's also going on at the same day. 

FRANCESC: Is that still open for people to subscribe? Will we have a link in the show notes? 

MARK: Yes, Yes. Definitely there will be link to the show notes. It is the day before the summit, and there is still plenty of room for people to get involved. Which is good. And most recently, I finally got to the second part of what apparently is going to be a five part blog post series on scaling and deploying dedicated game servers with Kubernetes. 

So I've just put out one that's all about how to manage memory on Kubernetes. So this may not be necessarily specific to game servers. You may find it kind of interesting if you're just like, how much memory is my process using, and should I put limits on it? And that kind of stuff. 

FRANCESC: Yeah, regardless of your interest in video games or specifically [INAUDIBLE] soccer, I think it is very interesting, it shows basically how to monitor how much memory, how much a CPU you have in your cluster, which is cool. Rather than having it per pod, you can also see like a little bit more a bigger idea of what the whole cluster is up to. 

MARK: Yeah. But also like if you're like, I don't even know how much memory my pod's using. 

FRANCESC: Yeah, true. 

MARK: Which is useful. Awesome. Well, Fransesc, thank you once again for joining me for a wonderful episode of "The Google Cloud Platform Podcast." 

FRANCESC: Thank you, Mark, and thank you all for listening. 

MARK: All right, and we'll see you all next week. 

{{< /transcript >}}