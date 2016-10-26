+++
audioDuration = "00:37:50"
audioFile = "Google.Cloud.Platform.Podcast.Episode.48.mp3"
audioSize = 54513920
categories = ["Networking", "Security"]
date = "2016-10-19T01:07:49Z"
description = "Ines Envid, a Product Manager for Cloud Networking, joins the podcast today to tell us how mind blowing Google's network is and how you can make the best of it!"
draft = false
episodeNumber = 48
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Networking with Ines Envid"
image = "/images/post/PLCN.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/iBfofmYaJaz"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/58bblf/episode_48_cloud_networking_with_ines_envid/"
+++

[Ines Envid](https://twitter.com/inesenvid1), a Product Manager for Cloud Networking,
joins the podcast today to tell us how mind blowing Google's network is and how you
can make the best of it!

Let [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
ask all the questions about VPCs, Load Balancers, and Routers you always wanted to
know the answer to.

<!--more-->

##### About Ines

Ines is a product manager in Cloud Networking. She has dedicated her career to in product,
and development roles for carrier and enterprise networking infrastructure and applications,
from access, edge and backbone cores. Ines is currently leading the Google cloud networking
VPC topology and policy product areas.

##### Cool things of the week

- New undersea cable expands capacity for Google APAC customers and users [blog](https://cloudplatform.googleblog.com/2016/10/new-undersea-cable-expands-capacity-for-Google-APAC-customers-and-users.html)
- Managing containerized ASP.NET Core apps with Kubernetes [blog](https://cloudplatform.googleblog.com/2016/10/managing-containerized-ASP.NET-Core-apps-with-Kubernetes.html)
- We’re Hiring [join us!](https://www.google.com/about/careers/cloud/)

<div style="text-align: center">
  <img src="/images/post/PLCN.png" style="margin: auto;">
  <p style="font-size: 0.75em">New undersea cable expands capacity for Google APAC customers and users</p>
</div>

##### Interview

- Google Cloud Networking [docs](https://cloud.google.com/products/networking/)
- Google Cloud Security [docs](https://cloud.google.com/security/)
- Google Security Whitepaper [research](https://cloud.google.com/security/whitepaper)
- Using Networks and Firewalls [docs](https://cloud.google.com/compute/docs/networking)
- Google Cloud Load Balancer [docs](https://cloud.google.com/load-balancing/)
- VPCs: Virtual Private Clouds aka Cloud Virtual Networks [docs](https://cloud.google.com/virtual-network/)
- IP addresses, ranges, and subnetworks [docs](https://cloud.google.com/compute/docs/vm-ip-addresses)
- Google Cloud VPN [docs](https://cloud.google.com/compute/docs/vpn/overview)
- Jupiter Rising: A Decade of Clos Topologies and Centralized Control in Google’s Datacenter Network [research](http://research.google.com/pubs/pub43837.html)
- Want to learn the more? [Using Google’s cloud networking products: a guide to all the guides](https://cloudplatform.googleblog.com/2016/09/uusing-Googles-cloud-networking-products-a-guide-to-all-the-guides.html)

##### Question of the week

How do I use the [Proxy protocol](http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt) with a network load balancer?
How can I know the IP address of the original sender in a TCP connection over Load Balancers?

- SSL proxy for Google Cloud Load Balancing [docs](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/#proxy-protocol)

##### Were will we be?

You can find [Mark](https://twitter.com/neurotic) at [Connect.Tech](http://connect-js.com/)
in Atlanta from October 20th to the 22nd, and the week after that [GAMEACON](http://www.gameacon.com/gameacon-ac)
in Atlantic City.

[Francesc](https://twitter.com/francesc) is working on more episodes of
[justforfunc](https://youtube.com/c/justforfunc) before he goes to Brazil
next month for [GopherCon Brasil](https://2016.gopherconbr.org/en/) and
[GCPNext Brazil](https://cloudplatformonline.com/NEXT2016-Brazil.html).

{{< transcript "FRANCESC: Hi, and welcome to episode number 48 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing? " >}}
MARK: I'm good. Thanks, Francesc. How are you doing?

FRANCESC: Pretty good. Pretty good. Very happy to be recording in a room with no lights. Because we discussed last time that someone broke the door. Well, someone broke the lights.

MARK: Yeah, it's a very dark room.

FRANCESC: Yeah, it's pretty romantic, to be honest. So very happy today to have-- yeah, very happy to have the first Spaniard in the podcast. She's Ines Envid, Ines Envid-- since I can actually pronounce it in Spanish, I know how to do that-- and she's a product manager in the Cloud Networking team for the Google Cloud Platform. And we're going to be talking about, basically, all the things you can do with the network and why Google Cloud Platform network is so amazing.

MARK: Yeah, no, it's a really great chat. I know so little about VPCs and VPNs, and other things of that nature that it's great to sit down and talk to someone who actually knows what that stuff is here.

FRANCESC: Yeah, this was one of the episodes where I learned the most, basically, because I didn't have much of an idea of what you could do with it. I know TCP and  GDP. That's pretty much it. I know what they mean.

MARK: You know what they mean? Good. That's good.

FRANCESC: Yeah, don't ask me. So and after that, after the chat, we'll have the question of the week, which is also related to networking.

MARK: Yeah, actually, that was completely non-intentional, but it actually works really well.

FRANCESC: Yeah, it's going to be about network load balancers and some weird protocols I had never heard about.

MARK: Yeah, the Proxy Protocol.

FRANCESC: The Proxy Protocol and how to use it on a network load balancer Google Cloud platform.

But before that, we have the Cool Thing of the Week. And as usual, I think, yeah, it's renamed the Cool Things of the Week. So the first one is we put a cable down somewhere, we install a cable.

MARK: Yeah, it's a really big cable of internet goodness that goes between Hong Kong and Los Angeles, this Pacific Light Cable Network.

FRANCESC: And it is 12,800 kilometers of cable that allows you to send 120 terabits per second, which is pretty amazing.

MARK: Yeah, you consume a lot of Netflix over that.

FRANCESC: Oh, yeah. Yeah, you can stream the Netflix per second, basically. It is pretty amazing. So yeah, that's going to help a lot on people that are doing-- if you have a server, one in LA, another one in Hong Kong, the connection now is going to be pretty amazing.

MARK: Yeah. On top of that, there's a really great article for our .NET users out there. There is a maintain containerized ASP.NET Core apps with Kubernetes. I quite like this one, especially because now that .NET Core is open source, you can run it on Linux, which is super cool, which means you can run it on all the stuff that's on top of Linux, including Docker and container orchestration.

So it's a really cool little article that talks you through how to build Docker containers. You can actually use the standard Microsoft .NET Docker container you can get off Docker Hub, and then how to build your projects on top of that, and then finally get it into Kubernetes and Container Engine.

FRANCESC: Yeah, it is definitely taking also-- if you have never tried, you can actually run Windows in a container, which is pretty amazing.

MARK: That's amazing.

FRANCESC: Yeah, that's something that if you're interested on Windows in containers, you should definitely check it out. I thought you were going to say that you especially liked this post because it was written by someone from our team, Mete.

MARK: I totally missed that. That is cool.

FRANCESC: It is actually written by Mete. Maybe we should interview him to have a .NET episode.

MARK: We should.

FRANCESC: We should to that, yeah.

MARK: We should absolutely do that.

FRANCESC: And we have one last Cool Thing of the Week, which is that we are hiring. So Google Cloud Platform, we have a pretty big team--

MARK: Yep.

FRANCESC: --I got to say, and we're hiring like crazy for basically everything.

MARK: Yeah, account executives, sales engineers, solution architects, engineers.

FRANCESC: But also, technical leads and account executives. No, you said account executives. I think that also for marketing. And we're basically hiring for everything. So if you would like to work with us, check it out. We'll have a link to the Careers page on the show notes.

MARK: And in theory, if you come work on Cloud, you could one day be on the podcast.

FRANCESC: If you don't work on Cloud, you could also be on the podcast.

MARK: That's also true. That is fair. That is fair. That is fair.

FRANCESC: Yeah. But yeah, you could get to get lunch with us regularly, which is actually pretty cool. OK, so I think that it's time to go talk with Ines.

MARK: I think so. Let's do that.

FRANCESC: So I'm very happy today to welcome our first Spaniard to the Google Cloud Platform Podcast. She's Ines Envid, and she's a product manager for Cloud Networking. Hello, Ines. How are you doing?

INES: Hi. Doing great. How are you?

FRANCESC: Very happy to have you. So we're going to be talking about many different things. Networking is a very, very wide topic. But before we get started, why don't you tell us a little bit about you and what do you do at Google.

INES: Sure. So I've been a long-term technology person working in networking. So I've been doing a lot of enterprise and carrier, working from Access to Edge to Backbone. And I've been transitioning to a public cloud, and I'm so excited to be now part of Google, where we're building one of the most amazing infrastructures and products in the planet.

FRANCESC: Cool. So can you tell us a little bit, so from a very, very high point of view, what is networking? Like, machines talking together to each other, but what do you do with networking, really?

INES: So yeah, you have machines, and that's a good starting point, but you cannot do much unless you are able to actually give them a channel to talk. So networking is all about making that communication efficient and flexible so that you can actually build topology that is allowing, only the most primitive types of communication machine to machine, but you're actually able to build your multicast, your broadcast environments. So it is a way of providing the plumbing, if you wish, for machines so that we can actually build richer applications on top of them.

MARK: Cool. So I guess there sounds like there's probably almost several components to networking. There's the hardware side that runs in our data center and then there's the software side that probably we talk about as well as GCP.

Why don't we start the hardware side? What makes our stuff good? What's so special about the network that we run on?

INES: Sure. So traditionally, networking has been running in dedicated boxes and everything was really about having dedicated ASICs, dedicated FPA. So it's very hardware-oriented and that build, in the last decades, great technology, which was deployed on-premises, was deployed at the edge and the backbones. And those machines, bridges, routers, load balancers, they kept developing, and of course, the requirements on performance, on functional capabilities just are more and more demanding.

But also as part of that evolution, in the last year, it has been very exciting, all the transition about being able to actually run those in more, not dedicated hardware, but more hardware that is used for any of the compute functions today can actually be used to build great networking equipment. So together with the trend to have a lot more distributed environment, because what allows, actually, to have the performance is that you are not bottlenecked to a single box, where you would actually have great hardware to run it, but then you can start distributing those functions, and then you need a lot of logic in order to do that.

And what it makes Google infrastructure great is that it has been investing on data center, which actually provide all the distribution across the globe, where you are actually be able to send your traffic as needed and distribute it to the right points closest to the applications where it makes more sense for latency and for performance.

And of course, Google has been building on that to deploy different [INAUDIBLE] and the back-ends for all the search and YouTube and all the infrastructure. So leveraging on that is also a starting point for building Cloud functions.

So that is really, I think, the best asset the Google Cloud is able to leverage that great infrastructure and provide the secure environment for users to build their applications the same way that Google has actually built their infrastructure applications.

MARK: Nice. So you said two words that I almost understood. At least I knew one of them was ASIC, which we used before once, which it is Application-Specific Integrated Circuit. You also said FPA?

INES: Oh, FPA. It's similar. It's hardware purpose-built for networking functions where you actually do lookups for packets.

MARK: OK. Interesting.

INES: You apply firewall rules. So it is really a very efficient way of processing packets that it was necessary, really, in the past in order to provide good performance for networking capabilities.

FRANCESC: Cool. I was wondering if you could discuss one of the-- every single time someone talks about Google networking, there is always Jupiter that comes out, like, that really cool and powerful magic, basically, thing. What is that exactly and why is it so important?

INES: So Jupiter is actually just a fabric that is really providing high capabilities in terms of bandwidth and performance, and it really is built by having very flexible modules that communicate with each other. And modularizing that and being able to scale it provides a way for communicating data centers in a way that we don't have bottlenecks in the network. So it is just basically a highly scalable architecture for networking.

FRANCESC: Just that.

INES: Just that.

FRANCESC: No, that's pretty amazing. The fact that the network is not the bottleneck, that is pretty impressive. Cool.

So it is really impressive that we have all of that amazing infrastructure to build applications on top by running a Google Cloud platform. But from a more pragmatical point of view, what can I do? Like, if I have my virtual machines, right? My virtual machines, I just start them and they can communicate to each other. What else should I do?

INES: Right. So let me then get started, now that we've talked a little bit about the infrastructure, the first thing that customers can actually, or users can leverage on the infrastructure is the fact that that network is global. Global mean, we at Google have our own backbone infrastructure with the dedicated links. So it is our own network-- actually, there's two of them-- that are just dedicated for Google to communicate their data center.

So based on that, users can build their sandboxes with a global scope, which is very unique in the industry, because you can have your private RFC 1918 space, which is the private IP space, spanning all around the globe. So you can do very unique things, like having database replication across regions or providing things like global load balancing, which allows you to have your back-ends distributed across regions for redundancy purposes.

And we provide some very unique technologies to have a single [INAUDIBLE] for load balancing that it sends you via a technology that we call Anycast to the closest cluster where you have your applications. So that actually provides you the best of both worlds. A very global scope, while when you're actually making a request, it sends you to the closest point for latency purposes. So the first thing is global.

Second thing is you start building your security on top of that. Once you have decided where you need to have your applications, that you need to make sure that they're secure. And in order for them to make secure, your build your firewalls on top of that. Those are all networking functions that are implemented.

Going back to the first part of the conversation, they are built at the host level, so truly, truly distributed so that they don't provide any bottlenecks to your network while they're securing your applications right at the point where they live, so that you can set up your firewalls for how those applications can communicate. Your user interface is [INAUDIBLE] applied at your network level, but when it actually gets applied, then it goes to the host where your applications are living, so they get secure at that same point.

So you have your global network. You have your firewalls built on top of that, that will give you your security. Then you need to connect to the rest of your application. So most of the use cases will involve having to transition, migrate from existing capabilities. So you need things like VPN, which we fully manage as well, as a service, in order to connect securely with your on-premises and you can federate your environment.

So it is really great starting point for building your sandbox. And then on top of that, there's plenty of applications that we can talk about, but that is kind of the topology plumbing, security aspect of your sandbox, where you can then just build anything you need.

MARK: OK, cool. That sounds great. But I know we have a variety of tools and products, like VPNs, you were talking about, load balancers, but as well as a whole bunch of other stuff that I, personally, don't know a huge amount about what they do.

So why don't we take a practical example? So we have a web server. It wants to talk to the outside internet, so that's great, but it also talks to a database maybe hosted on a VM or something, but we don't want that database to be accessible to the outside internet. How would I set that up using our networking tools?

INES: Oh, that's a great example. So first, you want to make sure that you really don't have access to the internet from the applications or the VMs that they don't have to. And the first thing you can do, you can actually protect that with different layer, which is always a good idea.

I think, first is, you want to make sure that you have firewall rules that are actually not allowing for any connections that are coming from the outside to actually reach that machine. So we provide what we call stateful firewalls, which what it does is, really, you set up a rule which applies to the whole session. So as soon as the session requests comes, if it matches a certain pattern, then you allow or deny. And then if you actually deny that session, like there's no more chances for any of their following up packets of that session to actually enter. So that provides a very easy way of setting up the firewall.

So you can set up other networking level those type of rules. And again, they could apply to your host where your database are living. So it is, as well, very scalable, where you're actually applying those.

The other thing that you can actually do is enforce that those project actually doesn't have the capability of having VMs with external IPs at all. So that will be an enforcement, not so much on the user, but it's actually trying to change the behavior, but at the project level, so that regardless of which role someone is using, the enforcement, it is done. So that will be for the database.

And then obviously, for your front-ends, you have the capabilities of pinging just specifically the ports for the web application or specifically the ports that you are trying to reach. And if you're using capabilities like HTTP load balancing, then we provide the proxy solution, which, again, is the same that Google uses for production, so the front-ends are the same and there is very rich capabilities, for instance, for DOS protection in order to find patterns that could be possible attacks for your application.

So if you're using Google's load balancing as a service, you get advantage, by default, by all those rich capabilities that are already there.

FRANCESC: Nice. So what you're saying is that if I have a bunch of instances that are running my web server, just by putting a load balancer in front of them to facilitate the access and share just one single IP, I'm also gaining that protection against denial of service and these kind of attacks.

INES: That's correct. And--

FRANCESC: Nice.

INES: --those capabilities are, again, the same that apply to the external access communication that happens for any of the Google applications, so leveraging on those existing capabilities is a great asset.

FRANCESC: Cool. What about VPCs? I've heard about VPCs many times and I'm almost sure it means virtual private-- what is the C? I could have network.

INES: Cloud.

FRANCESC: Cloud. Oh, right. Oh, wow.

INES: Yeah, you build a cloud, but it's virtual and it's private, so it all goes with advantages.

FRANCESC: So are VPCs something that could help on what you were talking? What is actually a VPC and how could it help make our solution safer?

INES: So the VPC, it's really-- you can think of it, again, I used the term before, but you can think of it as the sandbox where you are actually running your application. So if you, as a user, have your production environment, your production environment is going to run in a private space. You don't want to expose it to the internet. So those applications in your production environment are going to be talking across each other. You have rules that are going to define how they actually communicate and you have your perimeter defined for those applications. Any communication external, then, is going to be controlled, again, with firewall rules.

So it gives you private space, like in an in-network, and it will be a private IP space where you are mapping your  applications, you are running your services while you are securing against the outside world.

And there are great ways of leverage that sandbox and that private IP applications when you're actually working in Google environment. Some of them are, for instance, access to Google services like Storage or big data or BigQuery, where there is all the data ingestion and data processing capabilities. You can actually access those from your VPC, which is, again, your private environment, privately as well. So that when you're communicating your workloads to get access to all the APIs and service capabilities that Google offer, think as well about machine learning APIs. So you do that in a secure way via private communication.

So it's really a way of building, truly, your private cloud while it is all virtualized, because it gives you the illusion that you are running your own infrastructure, you're running your own services. But what it does is, of course, gives you all the flexibility of you need extra capacity. You don't really need to worry about bringing new hardware. It gives you the illusion that it's all your infrastructure. You can actually secure it and make sure that it's not accessible by anyone else. Gives you the isolation with the rest of the tenants that, of course, lives in Google Cloud, but then you have all the nice private capabilities.

MARK: Now I'm going to ask this question and I could be totally wrong, which is totally fine. So does subnetworks relate to VPCs?

INES: Right. So the subnetworks, it will be, if your VPC's your sandbox, then you carve out IP space in networking. So it is the IP range that is going to be used for IP allocation for certain applications.

So you just want to make sure that if you're running, let's say, in your case, you were talking about web servers, and you're working, you're talking about databases, you may want to have your web servers having IPs allocated from a specific space, your database is having IP ranges from a different space. And as you actually grow with more applications, you want to have some way of aggregating the IP space to those, because it makes it so much easier to communicate to those when you have a way to aggregate how you're referring to them in the networking.

MARK: I guess then that means that, OK, so yeah, if you have one set of services or one application that you just want to make sure will never ever talk to another set of services or an application--

INES: That's right.

MARK: --for anything, like just a very particular path through, that's just another layer of network security that you can put in front of stuff.

INES: That's correct. And the way it helps is, again, when you're talking about which applications can talk with your on-premises, which applications can talk with each other, you usually express those policies in terms of IP ranges. So if you map your applications to those IP ranges, then it makes sense to actually then express those policies, based on those IP ranges and you can map it easily.

FRANCESC: Cool. Something very related to the IP ranges and how you define rules on top of that is you can also define rules on top of labels, right? You can say, oh, I'm going to type all these virtual machines with labels saying, these are web servers, and then all of the others saying, oh, these are, I don't know, MySQL instances or whatever. And then you can say, a web server cannot talk to other web servers, because why could they? Is that kind of the same power as IP ranges? Do we have it just for convenience or is there actually a specific use case that we should keep in mind?

INES: Yeah, that's a very good question. So we want to use as much flexibility as possible, where we're actually giving the user the policies. So the way they actually express the communication rules, it could be with IP ranges, but you can use metadata in order to make it even more flexible. So the labels are metadata that apply to specific VMs, so that when you express who can talk with who, if you have more granularity that cannot be expressed with IP ranges, you still have the possibility of doing that by applying metadata to the specific instances that you want to secure the communication with. So it gives you yet another layer of flexibility on top of the IP ranges on how you actually express your policies.

MARK: Nice. Cool. So we talk a lot about, at Google Cloud, particularly, hybrid cloud. Officially, on-prem with cloud providers, networking would seem like that's a big part of that, making sure we have secure communication between your on-premise systems and what we have running in the cloud. What do we have that enables us to do that? How would that work? How does that happen?

INES: Yeah, so there's many different ways of communicating with on-premises. Usually, when you're communicating privately to on-premises, you want to have some security as well. So once you actually cross the internet, if you have certain applications living in Google Cloud and you still have certain applications that live on your infrastructure and your premises, once you start communicating them, you obviously need to go through internet to build that bridge.

So there are several techniques. One of the most popular is to use IPsec tunnels, so BPS in order to provide that secure communication. So we offer completely managed VPN building on top of IPsec that can connect your BPC, your sandbox, so specifically your sandbox then, to make sure it's only your application who can actually talk with your on-premises.

And we provide capabilities of up to a [INAUDIBLE] per second IPsec tunnels that can be actually horizontally scaled, so that you can actually build bandwidth on top of that.

There are other ways of delivering that communication between prem and Google. And there are many applications these days, as well, like the more modern applications, they actually have application-level security. So they usually have SSL as part of their application communication. So some of the users might decide that they don't need the transport security, and they use the application instead.

Doing that, you can just have a regular pairing agreement with Google or you can actually, if you are a smaller user, you can pair with any carrier, so that you don't actually need to maintain your own ASN and there's a [INAUDIBLE] that you need to maintain.

So pairing with Google comes with certain requirements. So for smaller users, you just compare with any carrier. We have plenty of agreements and have that communication plane.

And then on top of that, you can either use IPsec, as we talked, or you can build your applications secure and just communicate through SSL.

MARK: We also have this thing called Cloud Router. I don't understand what it does, but it seems to be  doing, like, kind of related to what it is that we do here, in terms of talking about on-prem, because it does do stuff over Cloud VPN, but I-- like I said, this networking stuff confuses me. So I'm very happy here and I can ask really dumb questions.

INES: Yeah. So once you communicate to on-premises, you have certain workloads that get represented by prefixes in your VPC and then you have certain applications that get represented by prefixes in your on-premises. So in order for those two prefixes to actually be able to reach each other--

MARK: What do you mean by prefixes?

INES: IP.

MARK: Oh, OK. Got it.

INES: IP ranges. So in order for those IP ranges to be able to reach each other, you need to set up routes and then you need to say, my IP range 1 needs to be sent to my IP range 2, and the other way around. So you could always hard-code that and say, like, all the traffic destined to my IP range 2, I am going to send it with the next hub, this tunnel, then you're done, But then what happens if you then add an IP range 3? Then you need to go and remember you need to configure another route, otherwise you won't be able to communicate.

So what Cloud Router provides is dynamic advertisement of those routes, so then those can be seen from on-premises as reachable through the tunnel, so then you don't really need to worry about reaching your applications across. So it is built with BEP capabilities or dynamic routing protocol, and then it allows you to have a lot more automated way to communicate in your environments.

FRANCESC: Cool. So I have one last question, which is, OK, so I just started-- I have my virtual machines running. I just started them. And I am running, whatever, Fortress or something like that. I have my database and one single web server. What is the first thing I should take into account? Or what is the resource that I should start reading to make sure that what I'm doing is not incredibly wrong and I'm going to be hacked in less than a minute?

INES: So you want to set up just a simple VM into your network to run  an applications. So a very simple setup. So first thing, you start the VM. You don't configure it with public IP, if you don't really have to. So just make it private. When you configure your VM, you're going to have your capability so, selecting whether you want to actually locate a public IP or not.

You want to add metadatas with [INAUDIBLE] you want to set up a specific rules for that specific workload that might be distinct from others that ping your own subnetwork. So you configure those on your VM, because then based on that, you can actually set up policies that get associated to that.

Then you make it part of a subnetwork. So your subnetwork is going to define from which IP range it gets located. Is it private? And you're pretty much set up for your VM.

Now what you need to do is to start building your firewall rules on top of that. So what you're going to say is now set that this specific VM can only receive traffic from source 1111, because that is a trusted application, while all the rest, I'll block. So actually, by default, we block all the traffic. And if you want to talk with anyone, you need to actually go and open it up so that you can talk with your application. So you will build that firewall. You can say, apply only to this label, which is the metadata that you set up in your VM. And at that point, you are pretty much up and running.

FRANCESC: Cool. We are pretty much running out of time.

MARK: Yeah, very much so. In fact--

FRANCESC: But is there anything else, that you would like to mention something, some topic that we might have forgotten?

INES: Not really. I think one of the things that we are most proud of with Google networking is really the amazing infrastructure that is sitting behind. So it is the performance, the type of throughput that we have for communicating to VMs. Like, for instance, within a cluster, we can have up to 14 kilobit per second, which is pretty amazing. The latency, we can reach around 100 microseconds.

FRANCESC: That is slightly better than my Wi-Fi.

INES: So it is, in terms of performance, latency, it is definitely top-class network. And leveraging on that, then are all the policies that we talk about, so then it helps you to have the perception that you are just unique in that infrastructure and that you aren't just operating your own environment, well, you are having all these amazing capabilities and access to storage. And if you need to spin 100 more instances, you don't need to worry about buying more servers, and then all the sudden, you get the same great capabilities that you had in the first instance that you built.

So I think this is one of the biggest assets of Google Cloud.

FRANCESC: Yes. What you were saying before, building on the shoulder of giants--

MARK: Yeah, exactly.

FRANCESC: --same topic again. Yeah, wonderful.

MARK: All right. Well, thank you, Ines. Thank you so much for joining us. We really appreciate you taking the time to come and have a chat with us.

INES: Oh, thank you.

FRANCESC: Thank you very much.

MARK: Thanks so much to Ines Envid for joining us today. First of all, I hope I pronounced your name correctly. And second of all, it was a great conversation. I'm definitely going to get stuck into the networking tools that we were talking about today and looking at how I can lock down all my services, and my VMs, and everything else that I run inside the cloud.

FRANCESC: Yeah, I think that it really made sense to have such an episode after the cloud abuse. Cloud abuse, it was mainly about, yeah, if you have issues with abuse, probably you're being hacked. So this one is, don't get hacked and there's how to avoid it. So yeah, very interesting. Lots of documentation, so check the show notes. Definitely there's going to be a lot of links to cool things that you should probably take into account if you are the one responsible for the security in your network.

MARK: Absolutely.

FRANCESC: So to finish with the episode, we have one more network thing, which is the question of the week. Is it coming from Luna?

MARK: It is coming from Luna, one of the good people who hang out on our Slack channel for Google Cloud.

FRANCESC: Yeah, she's cool. Hello, Luna. So yeah, she sent a question that I did not understand much about it, but to be honest, I actually did not know, but OK. So there's the thing that some of you might know, which is so you have a request that-- an HTTP request that goes through a proxy-- ah, sorry, through a proxy, through a load balancer, and when you get it, the IP of the packet that you receive actually is the origin is the load balancer, not the customer that actually sent you the request.

But there is this thing that allows you to know what is the actual origin, which is included as a header in the request, and that is for HTTP. But what about TCP? TCP does not have headers?

MARK: No.

FRANCESC: So how do you do that?

MARK: So it's an interesting one. So say you're-- classic example is you're building a game or something, like you have a WebSocket connection or something that is purely TCP-based, right? You're not doing HTTP. But you want to know where your originating IP address is from and, again, same issue, right? Your network load balancer is going to be the one that's the IP you're going to see.

So exactly like you would have, say, an X-Forwarded header with HTTP, there's a thing called the Proxy Protocol that is built exactly for this. So the Proxy Protocol we'll have in the show notes. You can read all about it, but it's basically a convenient way to safely transport sort of connection information across a TCP connection.

FRANCESC: So I can use that on my traditional TCP load balancer?

MARK: So that's the interesting question. So we have a network load balancer. Unfortunately, it doesn't support the Proxy Protocol. That's the standard network load balancer, which is a regional load balancer. But we do have a TCP SSL load balancer. That's a load balancer that will terminate an SSL connection, which you should be using, because SSL, good.

FRANCESC: SSL--

MARK: Secure, yay.

FRANCESC: --is always good.

MARK: And not only is it not regional, it is global, which is also great. But one thing it does do is it does support the Proxy Protocol. So if you want to be able to send that information across, it will do that for you quite easily, which is super, super, super cool.

FRANCESC: Very nice. Yeah, I was reading the documentation, which we will link from the show notes, as usual, and yeah, it looks like it's very simple. So nice.

MARK: Yeah, it's really straightforward to use. You can even update the Proxy Protocol header for the proxy you like right in the command line tools or through the development console as well. So that's information you want to go send across, use an SSL load balancer, and it's global, which is fantastic, and it'll do exactly what you need.

FRANCESC: OK. So before we finish, what are you going to be doing? Are you traveling somewhere?

MARK: I am traveling. I will be at CONNECT.TECH in Atlanta, literally, the day after this episode airs. And then later in the month, I will be at Gameacon in Atlantic City.

FRANCESC: Cool. Very nice. I'll be hanging out around here, working on videos and stuff like that, and I will be running office hours in the Launchpad, which we should very quickly mention. It's a new space where you can come and learn things about Google Cloud platform, and Android, and basically anything in San Francisco. So if you are a local, come check it out. I'll be there on Tuesday 25th of October from 9:00 AM to 1:00 PM. So come ask questions if you have any.

MARK: Yeah, if you want to learn about Go and Cloud and all the things.

FRANCESC: Yeah, and after that, of course, I'll be going to Brazil for GopherCon Brasil. Right. Sorry about that.

MARK: Cool. Got any new Just for Func episodes coming out?

FRANCESC: Yes, I recorded it for the third time in a row, and I think this time it actually worked out.

MARK: This time it will work out.

FRANCESC: Yeah, I'm editing. So probably by the time this episode is out, there will be also another episode of Just for Func out, right on time.

MARK: Fantastic.

FRANCESC: Yep.

MARK: Well, Francesc, thank you so much for joining me yet again this week.

FRANCESC: Thank you, Mark, and thank you all for listening.

MARK: All right then. See you all next week.

FRANCESC: See you.
{{< /transcript >}}