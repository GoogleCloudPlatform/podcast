+++
audioDuration = "00:42:53"
audioFile = "Google.Cloud.Platform.Podcast.Episode.271.mp3"
audioSize = 61675541
categories = ["Networking", "Data Center", "Cloud Migration", "Enterprise Networking"]
date = "2021-08-11"
description = "Guest Ryan Przybyl is back this week to tell hosts Lorin Price and Stephanie Wong more about service networking and what the future holds for the networking field."
draft = false
episodeNumber = 271
hosts = ["Stephanie Wong", "Lorin Price"]
title = "The Future of Service Networking with Ryan Przybyl"
image="/post/episode-271-the-future-of-service-networking-with-ryan-przybyl/images/hero/hero-EP-271.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/p2hpiw/episode_271_the_future_of_service_networking_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Guest Ryan Przybyl is back this week to tell hosts Lorin Price and [Stephanie Wong](https://twitter.com/stephr_wong) more about service networking and what the future holds for the networking field. Picking up from last week, Ryan starts by detailing the products and features Google has developed to help enterprise customers shift to a service networking architecture. He walks us through an example scenario and explains how a company might work with Google to gradually shift.

Google continues to grow in the service networking space. As client requirements are identified or changed, Google continually develops products to satisfy the varying networking needs. Ryan talks about tools like Network Intelligence Center, which allows network visibility and aims to ease the transition for traditional networking specialists. He talks about the Grow with Google Model, a term he coined to describe the step-by-step path his team helps enterprises take in the journey to full service networking. The process can take years and Ryan encourages clients to revisit their models periodically to take full advantage of new Google product offerings. He addresses the financial aspects of the networking shift as well. 

Ryan offers advice for companies looking to move to the cloud and tells our listeners his thoughts on the future of networking.

##### Ryan Przybyl

Ryan Przybyl is a Networking Specialist at Google Chicago, and has held roles in both Cloud Customer Engineering and Google's Network Operations. Prior to Google, Ryan was the Senior Director of Sales Engineering for Level 3 Communications. Ryan's focus is on helping customers understand Google Cloud's networking technologies while ensuring customers make use of Google Cloud best practices. When not talking with customers, Ryan is usually working with product and engineering teams to ensure Google Cloud is developing the right networking products for the future.

##### Cool things of the week

* Consume services faster, privately and securely - Private Service Connect now in GA [blog](https://cloud.google.com/blog/products/networking/private-service-connect-is-now-generally-available)
* Elevate your security with new Secret Manager features and integrations [blog](https://cloud.google.com/blog/products/identity-security/google-cloud-secret-manager-adds-free-of-charge-tier-and-more)
* Google named a Leader in 2021 Gartner Magic Quadrant for Cloud Infrastructure and Platform Services again [blog](https://cloud.google.com/blog/products/gcp/google-cloud-a-leader-in-2021-gartner-iaas-mq)

##### Interview

* Google Cloud Networking Products [site](https://cloud.google.com/products/networking)
* Private Service Connect [docs](https://cloud.google.com/vpc/docs/private-service-connect)
* Private Service Connect and Service Directory: A revolution to connect your application in Cloud [video](https://www.youtube.com/watch?v=TYumathiFRI)
* Migration to Google Cloud: Getting Started [docs](https://cloud.google.com/architecture/migration-to-gcp-getting-started)
* What's New in Networking [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqK_yw5KHsGVYd--ZCIoUwEM)
* The future of service networking [video](https://www.youtube.com/watch?v=J8nn3Elzwx4)
* Traffic Director [site](https://cloud.google.com/traffic-director)
* Envoy Proxy [site](https://www.envoyproxy.io)
* Network Intelligence Center [site](https://cloud.google.com/network-intelligence-center)

##### What's something cool you're working on?

Lorin is working on Private Service Connect [docs](https://cloud.google.com/vpc/docs/private-service-connect).

Stephanie is working on new episodes of [What’s New in Networking](https://www.youtube.com/playlist?list=PLIivdWyY5sqK_yw5KHsGVYd--ZCIoUwEM).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hello, hello, and welcome to episode number 271 of the weekly Google Cloud Platform podcast. This is Stephanie Wong, and I am back with Lorin." >}} 

LORIN: Hey, Stephanie. Thanks for having me back again. 

STEPHANIE: I love having you on the podcast. So we have to do more of these. But there's one thing that we forgot to do last time that I can't let slide. And that is finding out your fun fact. 

LORIN: Yeah. Yeah. And for the listeners, Stephanie doesn't actually know this one yet. So my fun fact is I have a hidden talent. I'm actually a singer. I grew up singing, and I was in an all-female acappella group all four years of college. If you look hard enough on YouTube, you can actually find some of my old videos. 

When I say old videos, there's like videos from probably middle school up there. Yeah, my singing is online. I've been in some Google talent shows that I've sung for. So yeah, that's my fun fact, my secret talent. 

STEPHANIE: Oh my gosh. That's amazing. Yeah, I had no idea. And I'm not going to put you on the spot to make you sing right now. But I am going to tell everyone to check all your videos out online. That is Lorin Price, L-O-R-I-N Price. Check it out online. 

LORIN: Thanks. 

STEPHANIE: So, Lorin, OK. We are back again because we are bringing back Ryan [? Presbolt, ?] our colleague, to talk about networking once again. But why don't you give us a little sneak peek about what he is going to talk about this time. 

LORIN: Yeah, so last week Ryan touched on really what traditional networking was compared to what service networking is. So today, Ryan is going to be talking more about the future of service networking, and what that looks like. 

STEPHANIE: Perfect. I'm really excited to get his take on that, and where this is all heading. But first, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

LORIN: So I actually have a correction from last week. So last week we talked about Private Service Connect, PSC, going GA. And we actually have more features GA than what I originally touched on. So PSC for ILB is actually GA as well. And this is the ability for producers and consumers to use third-party services with private IPs in your VPC. 

So that is my correction. And my actual cool thing of the week for this week is we have some new features and integrations out for Secret Manager. And in case you're not familiar with Secret Manager, it is a Google cloud service that provides a secure and convenient way to store API keys, passwords, certificates, and other sensitive data. 

So some of the new features that we have out, is we actually have a new free tier that allows you to have six secret versions, three rotation events, and do 10,000 API calls for the month. Secret Manager has now increased its SLA to 99.95%. And it's now available in all GCP regions. 

And for those customers that want to use Secret Manager to store and process regulated data, Secret Manager is now validated for compliance use cases as well. And we will link the articles so you can check out the compliance details for Secret Manager. And we also now support customer managed encryption keys, auto expiring secrets, eTags, and server side filtering. 

STEPHANIE: What? Wow. They have made some very welcome and incredible updates to Secret Manager. I mean, who doesn't love free, right? It's awesome. And I think I read that since it's come out, Secret Manager has secured millions of workloads now, and they're still providing a lot of features, like replication policies, and support for VPC perimeters too. So really exciting stuff. 

My cool thing of the week is actually some really exciting news, which is that Google Cloud is named a leader in the 2021 Gartner Magic Quadrant this year again. [PARTY HORN] Woo-hoo. Woo-hoo. 

So this blog post, if you want to check it out, talks about some of the incredible advancements and reasons that we were put into the Magic Quadrant as a leader again. Some of them that I will quickly rattle off are we have the largest single no GPU enabled VM in the industry, with up to 16 nVidia A-100 instances. So this is really great for your ML workloads. 

We're also the only cloud to support scale out on our 96 terabyte SAP HANA instances, so that you can bring your critical workloads to Google Cloud. And then in terms of lowering your cost in the cloud, we recently just came out with our Tau VMs, a new Compute Engine instance type, or machine family. And this offers the best price performance among leading cloud for scale out workloads. 

Additionally, we have predictive auto-scaling for VMs, GKE autopilot. We have a lot of openness and portability with extended Anthos on bare metal and Microsoft Azure. So a lot of support for multi-cloud and hybrid, in addition to additional GKE open source software support for EPPF. 

So lots of things packaged into that blog post, if you want to read more about it and get some additional context on where we're at in comparison to other cloud providers for our results in the Magic Quadrant. 

LORIN: Yeah. I think it's awesome that we're continuing to expand upon the features for our infrastructure. I think it allows customers to really pick for what they need for their specific workloads. It just makes things easier for our customers to run what they want in GCP. 

STEPHANIE: Yeah, absolutely. And we're about to hear some of the additional advancements that we've made in the networking world when it comes to our model of service-oriented networking, and how we're helping our customers move over to the cloud. 

So let's go ahead and dive back into our second conversation with Ryan. 

[MUSIC PLAYING] 

STEPHANIE: Ryan, to kick it off, last night we talked about customers moving newer applications to the cloud and adopting service-oriented networking functionalities. So what do we provide as a stepping stone to enable enterprises who do use traditional networking models? 

RYAN: Yeah, so I think Google is continuing to evolve our networking layer constructs. And I think all the cloud providers are doing this, right? And there's a lot of interesting internal conversations that I have with engineers and product managers. 

I think everybody wants to work on the newest, latest, greatest things, right? And I'm constantly having to remind people that there's a lot of fundamental stuff that we still need to work on as well. And maybe it's not the bright, shiny object sexy thing to work on. But it's very critical for an enterprise. 

The more products and tools I can offer to sort of replicate your data center environment, which I sort of touched on last time. The more of those features I have, the more you can kind of pick and choose how you want to migrate, and what stepping you want to integrate. 

So you could have sort of like, OK, I'm going to move like this, and it's going to be literally a mirror image of my data center. And that assumes we have every networking product working every way you wanted it. You could do that. And then say after I migrate to 10,000 applications, I'm going to make this change, and that's going to be my first stepping stone. 

The reality is none of the cloud providers are completely there yet. We're having to literally re-engineer 50 years of telecom into this cloud environment, into the SDN, and we're building all sorts of products and features that maybe have been very traditional for many, many years. 

But the bottom line is because we're building all these constructs, not necessarily from scratch, but we have to build all those features in, right? So as an example, if you do a lot of routing with, say, communities and local pref and things like that at a routing layer, that's not something you could just bring into Google Cloud today and use like a cloud router to do that. 

So that's like a function that isn't there, that we need to continue to evolve. And all cloud providers are sort of in this boat. So in terms of those stepping stones, like I want to be able to continue to push Google and continue to build all of those tools that give the customer those stepping stones to say I want to make these little incremental changes. 

The worst thing I have to do is get with the customer and say, you can't do it. It has to be done this way. Because as I mentioned before, depending on what that particular way is, that could be in very big chunk to bite off, and be very difficult for the customer to adopt. 

So I'm always cognizant of that. And that's why, again, coming from a very traditional networking background, I'm always pushing us to keep developing those small stepping stones that customers can place to help them make that change. 

Now, a good example of, let's say you were a traditional network infrastructure sort of set up, and you wanted to, say, start introducing some of these service sort of constructs. 

So I talked about PSC, Private Service Connect, before. You could say I want to use PSC to front end a particular Google API. And I just want to try it out that way. Or maybe you're using a cloud service. Maybe using something like Snowflake, or something else that's really designed and kind of grew up in the cloud. 

And that would be a great place to introduce some of these service sort of layer constructs into the model, where you're not trying to all a sudden change everything. But you're just saying, I want to front maybe the Google APIs with a PSC endpoint. 

Tons of customers use Google APIs every day to do all sorts of things. That would be a great stepping stone. And then you get to sort of understand how does PSC work. And then you sort of say, OK, instead of using it for Google APIs, I can start putting my services behind it. 

But it gives you, again, that small stepping stone about saying, hey, I need to take this super critical service, and now I need to start exposing it via PSC endpoint, and crossing my fingers and hoping it works. There are little like stepping stone things like that that you can make before you say I want to launch into like Traffic Director and service meshes, and dealing with service discovery, and all those fun things. 

STEPHANIE: Yeah, and for those who haven't heard of Traffic Director, et cetera, those are all part of this new way of operating networks in containerised environments. For example, if you're running Kubernetes and a cluster, they have something called envoy. Or also, if you've heard of Istio. 

These are all other levels of abstraction to actually operate in a service oriented model for containerised environments. It's a whole nother world that people have to start to understand and start to incorporate into their strategy. 

But just talking about for the people who do want visibility and control over building something like a NAT gateway, and handling routing, what's been the response from providers like Google Cloud? 

RYAN: There's still things that we are building. Like when you take PSC, and it's being a managed service where we're handling that, and we're handling routing under the covers, right? Let's take the NAT case. 

We understand that there's still product development work that we have to do on that functionality. And we are constantly evolving that. So this is kind of what I'm referring to when we talk about customers aren't always comfortable with losing that visibility, but it's incumbent on your cloud provider to understand where you're coming from, and why you're coming from there, and continue to evolve their networking technology. 

Now, that being said, NATing is nothing new, right? It is a very old technology. It's been around for a long time. It's just certain levels of functionality we have yet to develop. So I think this is a key point. I think most people agree like the service networking model is the way forward. 

If you look 20 years from now, everybody is going to be using that paradigm, I think. And it's easy to continue to say that's the cutting edge stuff, let's go and develop that stuff. Versus something that's, say, like NATing, that is an old technology. One approach is, well, let the customers manage it. They can put their own NAT gateways in there. They can do things themselves, and there are ways to do this stuff. 

But we want to continue to enable customers with easy to use, easy to consume services. So like I said, we're doing more work on the NAT front to expand our capabilities. So a customer who is maybe not entirely comfortable using PSC because they lose some visibility things, we're giving them more and more of that network layer functionality, so that they can build, again, kind of what they have in the data center to replicate it as much as possible, to give them that comfort factor of getting into cloud, and then once they're in cloud start to look at some of these other technologies. 

STEPHANIE: And I do know that we have some visibility and intelligence options. For example, we just came out in the last couple of years, Network Intelligence Center, which gives you visibility for things like running connectivity test between end points, or monitoring your performance through dashboard. Or looking at your topology from a visual standpoint. 

And so this seems like it's more in the realm of a service-oriented model. But do you consider this an overlapping area where we can start to build bridges and allow traditional networking architects and engineers understand how to get visibility in a service oriented environment? 

RYAN: Yeah, it's really interesting because I've been in the space for 20 years, and I've touched, I don't know how many thousands of networks. But networks are kind of like a fingerprint. They're all slightly different. And it's our job to sort of understand that. 

But one fundamental is being able to troubleshoot them when they break. And as I mentioned earlier, when you move into the cloud, when you move into sort of RSDN and how things have been built under the hood, that isn't always easily understandable by customers. 

So tools like Network Intelligence Center are designed to help bridge that gap. You may have a very traditional way of troubleshooting your network and saying like, OK I can see all these paths. But things like a trace route, for example, which is a very common troubleshooting tool, it doesn't always give you the information that maybe it would in your data center, where you can see like, OK, I'm hopping here. I'm hopping here. I'm hopping to a firewall. I'm going through the firewall. I'm helping to another router. 

You don't typically get that kind of information. So just as an example, when you build a VM, we program route tables onto that VM. We program firewall rules on that VM. So if traffic isn't getting to that VM, is it because it can't route to that VM? Is it because there's a firewall rule that's blocking the traffic? 

Again, from a traditional networking standpoint of view, you might use trace route and say, oh, I see it went from the original server. It went to the router. From the router, it went to the firewall. And then I see it stop. Oh, well, it's the firewall that's blocking it. The firewall that routes all this stuff live on the VM. 

What is it that's actually causing the packet not to get there? So that's where things like Network Intelligence Center, they help bridge that gap. Not so much as bridging the gap to Service Network, but bridging the gap to cloud in general, and helping somebody like onboard to Google. 

And then we sort of sit down with them and say like, well, if things aren't working, here's a tool you can use that's actually designed to work with our SDN, and takes all of these constructs into consideration. It looks at routes. It looks at the firewall or security topology that you've overlaid on there. 

And it'll tell you, oh, it gets to a certain point, and a route doesn't exist. Or it gets to a certain point, and a firewall rule is blocking the packet. That's a great example of a Google tool that we've developed, even just for somebody who's trying to build a very network-centric architecture, but who's dealing with the operational challenges of migrating away from their data center, to bring it into the cloud and still give you a tool to say operationally troubleshoot something if it's not working. 

STEPHANIE: Right, and I think it's key to note that there are tools and modes of thinking that still are applicable in this case. You can always run a trace route, even if your applications live in the cloud. And we also have tools and logging and monitoring like Cloud Trace. 

So I think it's sort of just understanding where to map certain concepts and how they translate into the cloud. But do you find most companies, in general, who operate in a network-centric model more or less eager to adopt this service-oriented model of networking? 

RYAN: Eager to adopt, like I said, I think depending on who you talk to, it might be a yes and might be a no. Again, having a traditional network engineering background, it's a little bit scary when you start talking about we're going to put a whole bunch of sidecar envoy proxies in there, and we're going to start talking about service meshes and service discovery, and we're going to start abstracting the network, where this service needs to connect to another service. 

We'll just put you to the envoy proxy, and let the envoy proxy figure out how to handle this. Again, you're kind of abstracting the network away as a networking guy, it's kind of like, well, are you abstracting my job away? This is what I've been dealing with for 20 years. 

And the answer is ultimately no. Like the network still exists. But it's a fundamental shift, like a mental shift that you're having to make to sort of adapt with the times. So I think most people see like that is the path forward. But on one level, it seems kind of simple. 

You talk about like, oh, we're going to talk about service network and we're going to talk about service meshes and service discoveries. And even if you decide to break a monolithic app down into microservice and things like that, it's easy to whiteboard this stuff out sometimes. 

Implementing it is a total nother ballgame. If you want to see a really good video on this, if you go to the envoy proxy website, Matt Klein over at Lyft did sort of a history of Lyft and sort of how they integrated a lot of these level constructs into Lyft's environment. 

It is a great-- getting your head around a monolithic app being broken due to these smaller services, and really what service networking really looks like, and all the complexities around it. It's probably an hour-long watch, but I thought Matt did a really good job of describing like, hey, this seems easy on one hand, but in reality, it is a lot more complex. 

So to your point, this is why these very large traditional enterprises, they see that path forward, but it's super scary when you start watching videos like that, and you start dissecting this and say, I got to move 5,000 applications, and somebody wants to use this model. There's all this complexity that's going to get added to things, and things I have to solve for. 

And oh, by the way this, is a way of thinking that I maybe never had to have in the past. So that becomes very scary. Even though people know that, like I said, in 20 years it's going to be sort of second nature, and network engineers are just going to be brought up that way, and that's going to be the way that things work, it's scary to do it now. 

So even though they want to do it, and I think they see that's the path forward, if that is the only path we present to them, that would be a showstopper. Especially for like a large complex enterprise. So I think a lot of people see the vision, but again, implementing it is a totally different ballgame, and that's where it becomes incumbent on having all those networking constructs to make it easy and path of least resistance to move into the cloud for a large enterprise. 

And I call this a Grow with Google model. So while we have a lot of people that are hyped on the service architecture model, it's kind of like the Grand Canyon, right? I can't expect somebody to leap across the Grand Canyon. I have to get them into the environment, and then I have to build these small stepping stones. 

I have to start introducing things kind PSC, kind of like I mentioned, using it to move front-end Google APIs. Introduced as a small stepping stone, so that they can take these small steps to get across the Grand Canyon, and aren't trying to make this fundamental leap from here's where I am today, to here's where Google sees us in the future. 

It's just too big and too much for most companies, even if the acknowledge that they're going to go down that path. It's a path of small stepping stones. You don't want to take a leap off the cliff and then find out there's no safety net beneath you. Now you're free falling, and your cloud deployment has gone completely sideways, and there's too many changes. And that's just a mess. 

STEPHANIE: That would be a bad situation. But I mean, you're right. It's growing with Google. And I think we're continuously investing in providing those stepping stones that better translate and map to traditional networking models. 

Meanwhile, customers are also becoming more accustomed to adopting, and are taking on the approach of service-oriented models with the emergence of their newer applications that are cloud native. 

And one other interesting point is that, when we hear the term digital transformation, it's like that's thrown around a lot. But what does that actually mean? And you were talking about the journey for a company to move from monolithic to microservices. And Matt Klein's presentation was talking about how it really encompasses more than just decoupling your applications and building a brand new architecture. 

But that really boils down to not just the application level, but things like the infrastructure and the networking level as well. And so when you're saying digital transformation, it really encompasses many, many things. And so it's not just the story of networking. But it's a story of potentially having to shift this mode of thinking for your infrastructure, your networking, and your application layer logic. 

RYAN: Exactly, and it's kind of what I mentioned the first video too, right? There's the technology aspect of it, how to improve the technology. But then there's how does the organization operate. I can build a lot of things, and tons of different network architectures with our customers. But at some point, I have to hand it over to an operations team. 

And the only thing I can ever guarantee about any network that I build is it will break at some point. That's like the one guarantee I'm willing to make. So it's not just a matter of like take the technology and implement technology, but it's also, like I was mentioning in the previous conversation, thinking about how you operationalize this stuff. 

What sort of operational impacts does it have to your existing monitoring suite, the existing tools you use, the existing processes, the existing mindset that a network engineer goes through to troubleshoot a problem? If you're trying to abstract more of the network away, you've got to think about like, well, how do I troubleshoot problems when the service doesn't work? 

If I don't have visibility to everything, and maybe I'm using some Google tools that are new to me, it's going to be a little bit of a cultural shift. So I think there is the technology shift, but there's a whole other set of considerations that customers need to make here. 

STEPHANIE: Yeah, and you were just talking about having to overcome technical debt. And we're trying to provide a path of least resistance for our customers. But what does that begin to look like? What is Google Cloud doing in this space to provide an easier path or a lower barrier to entry? 

RYAN: Again, I think this goes back to having the right tools in the toolbox. And to me, tools are features and capabilities at a networking layer. So the path of least resistance ideally is I'm going to take my data center, and I'm going to forklift it in the entire same way that operates today in Google Cloud, with zero changes. 

That would be the ideal, I guess, path of least resistance, because literally nothing changes. The bottom line is that's basically impossible. You can't do it, for a number of reasons, OK? So when we're having those conversations with customers, we talk about what are the stepping stones that a particular customer can adopt, and that they can get their head around using. 

Even just the concept of like our basic level VPC. If you're talking about a data center, a data center is a physical building, a physical location. And your network, when you start to talk about the local area network, or in that data center, it's Dallas, Texas as an example. 

And then you move into cloud, and you're like, well, now I have this construct of a VPC, which is kind of like my data center network, but it can be a global construct. OK, that's interesting. Well, how do I set up routing in there? How do I do all this stuff? 

Oh, we tell people all the time. Like you don't have to do a lot, because our Andromeda SDN will take care of a lot of things. It's different from a lot of our competitors, where you're having to build a lot of network infrastructure, like VPN sort of things to connect region A to region B. 

That starts to look in some ways like connecting two data centers. I got to build network between them. Then you come to Google and it's like, well, I can run stuff in Europe, but I can run stuff in APAC, and it can seamlessly talk together? Yeah. And you don't have to build any network? Sure, we take care of all that for you. Again, we've kind of abstracted it under the hood. 

So that's just an example of the fundamental difference. You could build a VPC that exists only in one region and kind make it look and feel like a data center. But generally speaking, I would advise a customer not to do that. So that would be one of those sort of stepping stones. 

Let's start thinking about your network as this global construct that exists in a different way than an individual data center does. So the more sort of tools I have in the toolbox-- and again, when I say tools, I'm talking about product features to say, OK you do things this way today, and changing that piece of your environment is too difficult for you to do? OK, I want to be able to let you move that over apples to apples. 

But this other piece of the environment, maybe we can move from apples to oranges. And this other piece, I can more drastically change from like apples to cherries, right? That's what I do every day. I'm talking to customers and figuring out how do we move from here to here, but get some of the advantages of cloud. 

Even if we're talking about just network-centric things. We're not talking about any of the service-oriented models yet. So the more products I can have, the more things that I can help Google to develop, to help customers do that, creates more and more paths of least resistance. 

And then once they get in there, then we start having all of the fun conversations, or hey, what is the next iteration look like? But again, I'm also, as I mentioned the last time, people yell at me because I'm like, hey, this is the way it could look now. In six months, it could look like this. Another six months, it could look like that. 

I understand that that's not always possible for people, but I always want to present that as options, to say like you could be doing this in six months, and you could be doing that in a year, and you could be doing this in two years. And let's talk about what your network looks like two years out. What do you want it to look like? And how do we help you take it from where it is today to where you want it to be in two years, three years, four years. 

STEPHANIE: Yeah, and I think that eases the concern when you are looking at it from the perspective of being a partner over the span of years, as opposed to we're asking you to make an entire shift of model, and thinking in the span of six months. 

But rather, how can we get you to this new world of service orientation over the span of two to three years, which is more, I think, reasonable for people to accept. I think you've also mentioned that you have a viewpoint that Google Cloud and other providers should be providing more traditional networking tools, or at least the ability to translate what you've been doing in your current environment into the cloud. 

So when you say these things, do you mean offer more customization, the ability to control more of the routing layers, things like that? Or is it more just about tools in the toolbox? 

RYAN: Yeah, I mean, again, when I say tools, I'm talking about product features and things like that. So one I mentioned earlier with routing is let's say you do a whole bunch with BGP filtering policies and things like that, or you're using local pref in a certain way to drive routing. 

That's not something we offer today with our Cloud Router. It's something I'm talking to the Cloud Router team about and saying like, hey, what can we do to sort of offer more and more of these basic-level features that customers are using within their data center to manipulate routing? 

Those are the type of things that I'm talking about with the teams. And when I say like offer these tools and these products, the more of those I have in the toolbox-- and I use that term loosely, a toolbox-- allows us, again, to create that apples to apples sort of scenario. 

Now, the one thing that's different that I do want to sort of talk about too is when you build a data center, it's typically a very capital intensive thing. You're going up there and you're buying all this equipment. It's what we call heavy CapEx model. 

You go buy all these routers and switches, and they have a whole list of features. And you put them in the data center, and you use them for 5 years, 10 years, 15 years, whatever. And then what happens is once they've lived their life, you have another big capital spend, and you upgrade that router, and you get a whole bunch more feature functionality out of it potentially. 

This is kind of the mindset that people have done. I built the data center day one, and it's going to live that way for the next 5 years or 10 years. I'm going to make small incremental changes, but I'm not going to make any fundamental changes, because I spent all this capital over here. 

Cloud flips that model on its head. You're not buying routers anymore. It is a very OpEx driven model. So you're paying for these services month over month. You're not saying I have this huge bucket of cash I'm spending here. And then 10 years down the road, I'm having another huge bucket of cash. 

So why is that important? Well, in this OpEx model where you're buying more managed services, like I was saying, we're constantly introducing new features and new tools in the toolbox to change the architecture, and to change the way that you can do things. 

So if you have this mentality of I built it this way, and then it's going to live for five years, and I'm going to change it, you're not getting the full advantage out of cloud. The whole point of cloud, in some ways, is to be able to make changes more periodically. 

Even if, again, go back to the customer who yelled at me and said it's very difficult for us to do. The more you can adopt that mindset, the more you can capitalize on the evolution that cloud is making. If we're launching new features, and we're giving you new capabilities, you want to continuously be integrating them, not thinking like you do in a traditional center model, where I got this model, I'm going to change it in five years. 

It's like I tell customers every six months, you should be looking at like what do we need to change in the architecture. How do we roll this architecture forward? How do we get closer to where we want to be two years, three years, five years from now? But do it in like six months changes. 

So back to sort of what we talked about stepping stones. These are sort of the stepping stones. Like how do I introduce this? And then the next six months, how do I introduce this? And it makes it easier to move from where you are, your starting point in cloud today, to where you want to be in five years. 

Versus hey, I want to go from this model. Five years, I want to integrate five years of Google product development into the architecture. Then it becomes very similar to what we're talking about right now. You're trying to cross that Grand Canyon. It's too big of a shift. 

But if you're taking those incremental changes every six months, it's much easier to get to your two-year vision, your five-year vision, versus maybe that traditional mentality. So again, I think people need to think about cloud differently just from that standpoint. 

It's an OpEx model. You're not spending CapEx, which should make it easier for you to be integrating these changes over the course of time, versus making these very large step function changes to the way things are running in the cloud environment. 

STEPHANIE: Yeah, I mean, it's just the same as how many things are changing when it comes to DevOps when it comes to how you run your infrastructure. Because infrastructure as a service inevitably means that you can and should be running your virtual machines for a temporary period of time, and you should deprovision what's not needed. 

And in the same case as this, I think that with service oriented models, you can run at peak efficiency, because you can constantly introduce new optimizations in your architecture or take advantage of cloud native features. Like for example, multicast IP, which means that you can have the same front-end IP for your load balancer, that can help distribute traffic to back end all over the world. Which is something that would traditionally be more or less difficult to do and an on-premise data center that you're independently operating yourself. 

RYAN: Yeah, and you cast IPs and be able to leverage them and leverage or L7 load balancer constructs. We did a whole video on that and why that is a great thing. That is something we highly recommend to customers, to be able to use that and capitalize on that, because not a lot of customers are able to do that in a traditional center environment today. 

So that's just one example of a Google networking feature, the Anycast IP front ending an L7 load balancer. That when we talk to customers and we say, what are those stepping stones? It's like, well, how do we integrate this? How do we integrate these sort of technologies that maybe you aren't using today to make your application more highly available and more scalable? 

STEPHANIE: Kind of building off of that, what is your advice for these network based more traditional model companies who are hesitant to move to the cloud? 

RYAN: So I've been at Google six years. I would say when I started, early on we were having a lot of conversations with customers around what do I move to the cloud? Cloud is new. I'm not sure I want to dip my toes in there. 

And I think customers that we saw four or five years ago that were dipping their toes in are now like fully on board with Cloud. So what they moved four or five years ago was like non-business critical stuff. It's like I'm going to treat this kind of as a sandbox. I'm going to move some non-business critical stuff over here. I'm going to play with it. I'm going to get familiar with it. 

And as it evolved, now they're moving business critical things. Think of like a retailer as an example. The gold mine application for a retailer is their point of sale application. If that doesn't work, they basically don't have a business. They can't sell. 

So it is like the most business critical application in some ways for a retailer. It's not the first application you move to cloud. So if you're sort of taking that mindset of I want to dabble in cloud-- and the customers that were dabbling, say, even like two or three years ago, now we're starting to see those customers come back and say, OK, now I'm very comfortable with the cloud. I'm comfortable the environment what we've built, and everything has functioned, and I've gotten a lot of great uplift from moving into the cloud. Let's have that whole conversation around all of my super business critical applications. 

So if you're a customer who maybe hasn't dabbled in there, I think take the same mentality that a customer did four or five years ago. What can you move into the cloud? What can you start doing to experiment with things? And that could be in a very network-centric model. Or it could be, hey, I want to start taking advantage of this software as a service offering that I can put a PSC endpoint into a cloud VPC and start accessing the service that way. 

I mentioned Snowflake earlier. It's just a good example. But there's lots of those sort of companies out there that you could take advantage of like those PSC endpoints. So even if you aren't really moving a whole ton of stuff to the cloud, but you want to start dabbling with the service model in GCP, like there are ways to do that. 

So I think there's not one answer here. But I think if you take that model of just move something, whether it's a very network-centric thing, or I'm going to start adopting the service model, and you start doing it now, you'll be in the same path two or three years from now that we're seeing with customers that I was working with a few years ago, that it was like, OK, we're dipping our toe in, and now they're like full bore. We're moving everything. How do we move all this stuff as quickly as you possibly can? 

But unless you start down that path, then you never really make any progression. So again, you could be down the networking model and do something that is very comfortable. It looks and feels like your data center. It operates really like your data center. And if that's like your comfort zone, and the stepping stone that you want to take, great, go and do it. 

If you're like, I want to be a little more aggressive. I want to sort of start looking at some of these future models. I start looking at these service oriented constructs. I want to start trying to adopt them. You can do that too with baby steps. 

So There's no sort of one answer to that question. It's all sort of, again, what is the comfort factor for that company? And again, there's the technology conversation. And then there's the, OK, how do I operate things? Because like I said, anything we build will break at some point. 

So make sure you're not just making decision of like this is really cool new technology, I want to go and use it. Make sure you're thinking about what is right for my business from an operational standpoint. What else needs to change if I do this? And that may make you more comfortable with moving to the cloud and saying, OK, I can do this with very minimal change. 

Or it may make you scale it back a little bit and say, OK, there's some things I'm not sort of comfortable with. Maybe I need to scale back my deployment, or maybe not be quite as aggressive. But again, that's something that's so individual to every customer, it's hard for me to give you like one answer. 

That's where myself and my peers come in. Like let's talk about it. Let's talk about what those concerns are. And because we know our platform and we know the tools that exists, maybe you say, well, this is my concern area over here. Like how am I going to get visibility to it? 

Well, we've got a lot of tools that can give you visibility into what's happening, whether it's from a security perspective, a network Intelligence center, our stack driver logging and monitoring. Like we spend a lot of times integrating those things with call it just traditional ways of viewing the network. 

So whatever your concern is, we want to bubble those concerns up, and we want to talk through what some possible solutions are. I try to not be the sales guy. I try to say, let's look at the landscape and look at all the options, and then let you make a decision that's right for you as a customer in your business. 

STEPHANIE: Yeah, I think you having that background in traditional networking helps you understand where a lot of these customers are coming from. And it is about crawl, walk, and run. But I do see that some customers are probably going to think, OK, well I don't really have a project that would require me to be in the cloud just yet, because everything's operating on premise. 

But perhaps there is a team that is the cloud disruptor at the company who might have a test project, or a test dev environment that they want to start operating in the cloud. And so, thus, I think that relationship between network and the developers or other teams would be important in that case is to actually identify these cases where you can start adopting these models in the cloud. 

But I do want to zoom out just a little bit and talk about the future of where this is all heading. Where do you see cloud networking heading? I see that we're getting to a point where things are converging with networking and service oriented models. But what do you think is going to be the future for cloud and for Google Cloud in this space? 

RYAN: So it's definitely, as we've been kind of orbiting around this service networking model, that is the future, hands down. Like I don't see it being anything other than this. And again, just look at how Google operates. 

We operate services. Even though, like I talked about earlier, we run a very complex network, at the end of the day, we don't run a network to run the network. We run services. The network is just part of it. 

As an example, you look at how our SRE teams operate. We have SRE teams that operate in kind of these verticals, so they operate this service. This service has networking as part of it. But there's a lot of other components. And that's how our SRE teams operate. 

Now, we have a networking SRE team that kind of goes horizontally across things. You're always going to have some level of expertise there. But I see us as an operating company who are operating services. We're building the structure around these services themselves. 

And then there's the stuff that's kind of wrapped around them to support those services. And that includes networking, and all of the constructs that exist in networking. It will continue to evolve to be more of this service-oriented construct, whether we like it or not. 

And like you said, I can empathize with customers, because there's some level of uncomfortability, if that's a word. But I get very uncomfortable just trying to learn all that stuff and trying to sort of get my head around it, because it's not my background. 

I'm like traditional router guy, like let's build the routes, let's do all this stuff. The whole concept of service discovery and service meshes, like I get it at the surface, but when you peel back the onion you realize just how complex it is. And when you don't have 20 years of experience doing it, it's very daunting. 

So I think to answer your direct question, that is the future. 20 years from now, I think networking-- there'll be a lot more managed services in play that is obfuscating or managing a lot of the networking. And the network engineer 20 years from now will probably be very different than the network engineer who works in the industry today. 

So if you're a young network engineer and you're just started, you want to start digesting all of that stuff, because that's going to be very commonplace in 10 years. Hopefully, at that point, maybe I'm retired and I don't have to worry about it. 

But that is where things are going. Like this is the whole point of having these conversations. Three years ago, I wasn't having these conversations. Now, more and more of the conversations are like the service oriented constructed, and what is Google offering here? And what is Google's vision of the future? 

And it really is all of these sort of things. And I've got to just sort of bite the bullet and get my head around it and learn it and figure it out. And to your point, that's where I empathize with our customers who are having to do the same thing. 

Is traditional networking ever going to completely go away? Absolutely not. Like it's always going to be there. You need-- routers still exist, and routes still exist to move bits and bytes back and forth. It's just a matter of how they're built and sort of the constructs that we're using over the top that I think change. And you start to be less focused on the network, and start focusing more on the services themselves. 

STEPHANIE: Well, you are going to have a very important job in, at least for now, in the next few years, before you retire because you're going to be the translator in this case for our customers who are thinking about shifting over. 

RYAN: Yeah, and I'd love for people that are watching this, you know, was this interesting to hear for us talk about? What are some other topics you'd like to see us talk about? I have things I think are great and interesting, but I'd love to hear from people that are out there in the world. And happy to look at your comments and brainstorm about how we can deliver some more content to you. Thanks for having me, Stephanie. 

STEPHANIE: Well, thanks so much for jumping on. One of the things that I loved that Ryan said was talking about how at the end of the day, customers don't want to ignore the long-term investment that they've had for their more complex network topologies, and also the operational systems they have in place. 

The cloud model is very different. It's all about integrating new product updates frequently. So we're really flipping the model on its head. And it's not realistic to expect our customers to do the same right away. 

LORIN: I totally agree. It could really be an overwhelming project to take on. I was actually working with a telco customer last year that really understood the vision of service networking and wanted to shift more of running on that model. But they had a ton of technical debt in there on-prem environment. 

I mean, we're talking about running Sun Solaris. They had mainframes. They had lots of third-party vendor apps. Really, all the kinds of technical debt that you can think of, they had it. But we worked with them. And we started breaking it down into little pieces that they could do one step at a time. 

They started off by building a single serverless microservice that runs on Cloud Run. That added some new functionality to what was already existing in their environment. And once they realized that they could break it down, they had the small win of the super small microservice. They realized it was doable. 

So we started scoping kind of a larger project that turned into building an API middle layer using service networking. And this was between the legacy back ends that currently existed, all that technical debt, and the downstream applications. 

I've since moved on from working with them. So I haven't been able to see this through. But this approach really works when taking on service networking modernization projects. 

STEPHANIE: Yeah, and I think we've talked about Private Service Connect already. But this is going to really change the game to connect those legacy applications, SaaS applications, and services running in Google Cloud, because it's effectively abstracting a lot of that traditional networking away, so that you can still integrate all these heterogeneous services running in different places. So I'm sure it's going to change the conversation we have with customers moving forward a lot. 

LORIN: Yeah, yeah. And as Ryan said, I think the next 20 years are going to be super interesting. He's absolutely right. Three years ago, I was not having conversations about service networking. Heck, the conversations about microservices were still really new. 

I remember going to different tech conferences and going to the breakout sessions on service networking, and even Kubernetes, and things like that. And those were the sessions that were always super packed. It was standing room only. 

Because no one was doing it yet, right? Like it was so brand new. And now, people are doing it. Like they're trying it. But now we're kind of moving into this stage of perfecting it and really getting comfortable with the technologies, you know, like Traffic Director and Service Mesh and things like that. But I'm so excited for the journey. 

STEPHANIE: Yeah, absolutely. And I feel like this is a good moment to also mention that I am working currently on a video series called What's New in Networking. You might have seen our previous episodes. And I'm doing it with your teammates, Lorin, David, and Cynthia. And we are coming out with another season and more episodes soon, so check back in. 

We're going to include a link in the show notes for you to watch all of the episodes. But we cover core infrastructure updates, service networking updates, edge, security, load balancing, and more. So be sure to check it out to learn about all of these more hidden, new feature updates that we've been coming up with pretty frequently. 

And with that, Lorin, thank you so much for cohosting. This was wonderful. I love the personal perspective you've been able to provide on our conversation with Ryan. 

LORIN: Yeah, thank you so much for having me again. And hopefully, I can come back sometime soon. 

STEPHANIE: Yes. And for everyone else, thank you all for listening, and we'll see you all next week. 

LORIN: Thanks for listening, everyone. 

[MUSIC PLAYING]