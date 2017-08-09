+++
audioDuration = "00:30:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.75.mp3"
audioSize = 44111398
categories = ["Kubernetes", "Container Engine"]
date = "2017-05-03T01:07:49Z"
description = "In this episode Mark and Francesc have a great interview with Chen Goldberg, the Engineering Director for Container Engine and Kubernetes at Google."
draft = false
episodeNumber = 75
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Container Engine with Chen Goldberg"
image="/images/icons/compute/Container-Engine.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/8zYrsTtX6xY"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6914t7/episode_75_container_engine_with_chen_goldberg/"
+++

In this episode [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc)
have a great interview with [Chen Goldberg](https://twitter.com/GoldbergChen), the Engineering Director for 
Container Engine and Kubernetes at Google - discussing all about why Kubernetes is open source and the
integrations that [Google Container Engine](https://cloud.google.com/container-engine/) has with the wider 
Google Cloud Platform. 

<!--more-->

##### About Chen Goldberg

[Chen](https://twitter.com/GoldbergChen) leads the Container Engine and OSS Kubernetes project engineering team in Google Cloud. Chen is a technology 
leader with +18 years of demonstrated expertise	leading global	engineering teams, product R&D initiatives,
and high-profile customer	engagements	with Fortune 500 enterprises.

Chen has a customer-centered development philosophy and believes open source is the best way to 
innovate and develop incredible technologies that are accessible and beneficial to everyone.

##### Cool things of the week

- New Singapore Region [locations](https://cloud.google.com/about/locations/) [docs](https://cloud.google.com/compute/docs/regions-zones/regions-zones)
- HTTP(S) Load Balancer supports WebSockets natively [tweet](https://twitter.com/Prajaktaplus/status/856895146448764928) [docs](https://cloud.google.com/compute/docs/load-balancing/http/#websocket_proxy_support)

##### Interview

- Container Engine [site](https://cloud.google.com/container-engine/) [docs](https://cloud.google.com/container-engine/docs/)
- Google Container Engine - The easiest way to use containers in production [youtube](https://www.youtube.com/watch?v=_yk1tTHYBvg)
- Installing Kubernetes on Linux with kubeadm [docs](https://kubernetes.io/docs/getting-started-guides/kubeadm/)
- Kubernetes 1.6 [announcement](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html)
- Creating a Container Engine Cluster [docs](https://cloud.google.com/container-engine/docs/clusters/operations)
- Upgrading a Container Cluster [docs](https://cloud.google.com/container-engine/docs/clusters/upgrade)
- KubeCon Keynote [youtube](https://www.youtube.com/watch?v=FccAGOZqInk)
- Scalability updates in Kubernetes 1.6: 5,000 node and 150,000 pod clusters [blog](http://blog.kubernetes.io/2017/03/scalability-updates-in-kubernetes-1.6.html)
- RBAC support for Kubernetes [blog](http://blog.kubernetes.io/2017/04/rbac-support-in-kubernetes.html) [docs](https://kubernetes.io/docs/admin/authorization/rbac/)
- Kubernetes Community [github](https://github.com/kubernetes/community)
- Borg and Kubernetes with John Wilkes [podcast](https://www.gcppodcast.com/post/episode-46-borg-and-k8s-with-john-wilkes/)
- Helm [github](https://github.com/kubernetes/helm)
- Special Interest Group List [github](https://github.com/kubernetes/community/blob/master/sig-list.md)

<div style="text-align: center">
  <a href="https://cloud.google.com/container-engine/"><img src="/images/icons/compute/Container-Engine.png" style="margin: auto;"></a>
   <p style="font-size:0.8em">Container Engine<p>
</div>

##### Question of the week

Q: If I need to access an external private git repository from within Container Builder, how do I do that?

- Cloud Builder [docs](https://cloud.google.com/container-builder/docs/)
- Google Cloud Source Repositories [site](https://cloud.google.com/source-repositories/) [docs](https://cloud.google.com/source-repositories/docs/)
- Google Cloud Storage [site](https://cloud.google.com/storage/) [docs](https://cloud.google.com/storage/docs/)

##### Where can you find us next?

Mark is going to be hosting the [Playcrafting + Extra Life Game Jame & Game Fest](https://www.eventbrite.com/e/playcrafting-extra-life-game-jam-tickets-32637618997), raising
money for UCSF Benioff Children's Hospitals. Finally he'll be in Sweden for [Nordic Games Conference](http://conf.nordicgame.com/) as well.

Francesc will be presenting at the [2017 Gopherfest](https://www.meetup.com/golangsf/events/238748981/) in San Francisco!
Francesc has also released a new [Just for Func episode](https://youtu.be/nhElL62BSn0), doing a code review of an IRC package's API.

{{< transcript "FRANCESC: Hello, and welcome to episode number 75 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm very well, Francesc. How are you doing? 

FRANCESC: Very good. Very excited to have the engineering director, nonetheless, of Google Container Engine. 

MARK: Yeah, we're gonna have Chen Goldberg joining us. She is super, super cool, super, super smart, and very passionate about containers and open source. 

FRANCESC: I love how effortlessly you pronounce the name. 

MARK: Years of practice. 

FRANCESC: Yeah. Yeah, and she's gonna be telling us a little bit about Kubernetes itself. But also, what is the difference between Kubernetes, Containter Engine, about the community? And it's a very interesting interview. I really loved-- learned a lot from it. And then after that, we have a question of the week that comes from Slack. 

MARK: It does come from Slack. One of the users-- I'm gonna mispronounce this. It's like a handle. [? Sha_HelloIda. ?] 

FRANCESC: Sure. 

MARK: Yeah, it's words. We're talking about the Cloud Builder and how to access external repositories if you want to access them within your build steps. 

FRANCESC: Interesting. We'll have-- also to mention, real quick what Cloud Builder is because I don't think we've mentioned it before. 

MARK: No, we should do it and settle that. 

FRANCESC: Yeah, so we'll do that. But before that, we have our cool things of the week, as usual. And we have two of them. You have the one. I have the one. So I'm gonna let you go first with the one about-- apparently someone complained that this had not been yet-- 

MARK: Yeah. 

FRANCESC: --a cool thing of the week. 

MARK: It hasn't been a cool thing yet. We've got to the point where people are like, you didn't mention this thing. We're now mad. 

FRANCESC: Yeah. 

MARK: I love it. Yeah, so if you haven't looked at the location section of Google Cloud Platform and having a look at all the regions we have, you may not have noticed that there is a new Singapore region that is now available. 

FRANCESC: Yup. 

MARK: So you'll find that there are two zones in that region-- Asia Southeast 1-A and Asia Southeast 1-B. They have lovely Intel Xeon processors and 64-core machine types as well as local SSDs sitting there waiting for you to take advantage of them. 

FRANCESC: Yup. It is pretty awesome. If you are anywhere around there, you should be also able to see [? GCping-- ?] 

MARK: [? GCping. ?] 

FRANCESC: --being a little bit faster if you're closer to one of those data centers. So yeah, from here in San Francisco, a little bit far away. It's actually probably the farthest away. 

MARK: I'm getting 174 milliseconds. 

FRANCESC: Yeah, that is the farthest away we are. That's probably our farthest data center from San Francisco right now. So, it kind of makes sense. But if you're there, it's way closer. That makes sense. So yeah, check it out. And I think that not all the services are available yet, but you can find that information on the documentation page that we will link from the show notes. 

MARK: Exactly. Cool. And so what did you have as a cool thing of the week, Francesc? 

FRANCESC: The second cool thing of the week is, actually, a tweet that I saw from Prajakta Joshi. And I checked who she was and turns out that she's a product manager for Google Cloud Platform. And she was talking about the fact that there is a new thing supported by HTTP load balancers, which is web sockets. 

MARK: Web sockets! 

FRANCESC: Yay! It is pretty amazing, because if I remember correctly, we actually talked about how to deal with this not too-- 

MARK: We did. 

FRANCESC: --long ago. And it was not the easiest or nicest of experiences. So it is awesome that now it's fixed. So if you want to use web sockets over HTTPS load balancer, which is the global load balancer, you can just do it. It is very simple. We have, as always, a link to the documentation from the show notes. And I don't think there's much to say other than it just works. 

MARK: Yeah, it looks really, really cool. It is worth noting that if you have configured client IP or generated code session affinity for your load balancers, then your web socket connections from a client are sent to the same backend instance. So it respects the sticky sessions. 

FRANCESC: Yeah, which is important for web sockets, obviously. 

MARK: But otherwise, yeah, it looks like it's just really good to go, which is great. 

FRANCESC: So that's awesome. I'm very happy about it. And also, I didn't know about Prajakta Joshi. So I searched on Google, and I saw that she also talked at GPC Next. She seems really cool. So if you're listening to this Prajakta, you're very, very, very invited to come and join in the podcast and talk about a little bit networking and all the cool things on Google Cloud Platform. 

MARK: Definitely. Definitely. Awesome. Well, why don't we go have a chat with Chen and talk to her all about GKE and Kubernetes. 

FRANCESC: Sounds good, let's do that. So it's an honor today for me to welcome the engineering director of GKE, nonetheless, Chen Goldberg. How are you doing? 

CHEN: Great. I'm very happy to be here. Thank you for inviting me. 

FRANCESC: Yeah, very happy. Like We met at a party right after Cloud Next, and since then, I really, really wanted you to come to the podcast and tell us a little bit about how it is to be working at GKE. But before you start talking about GKE and all the details of Kubernetes and all that cool stuff, why don't you tell us a little bit about who you are and what you do at Google? 

CHEN: So I'm an engineering manager. That means that I'm passionate about building teams, and helping building teams to be productive, and building products that consumers and users like. And while I have always been very drawn to infrastructure, I was able to bring that passion to users into the infrastructure world. And at Google, I'm doing my dream job because open source means building a huge team [INAUDIBLE] helping making sure that the community is productive and a happy community. And we have a great product at GKE. So I'm having a great time. 

MARK: All right, cool. So why don't we start with-- let's start with an easy question. So what is GKE? What is Google Container Engine? 

CHEN: Google Container Engine is a platform that helps you manage your containerized application the same as Google does. We and Google have been managing an application within containers, like Gmail and Maps, for over 12 years now. And with GKE, we're able to provide the same service and offering to Google Cloud Platform users. This means that when you are choosing GKE, you can really focus on developing your application. And GKE allows you to quickly deploy your application, and make it available to users as a service. 

And we are responsible for the productization of your service. And the differentiation is it's an amazing technology of Kubernetes, which is the heart of GKE, together with Google Cloud Platform, in general, which means all the goodness of Google Network, and storage, and machine learning. It is available. And on top of everything, I think what's very unique for Google, and we are known for, is our operational excellence. Our [INAUDIBLE] ability engineers and the practices that we have built throughout the years are being implemented for users through GKE. 

FRANCESC: So not that long ago, we had an amazing episode. We had the chance to have John Wilkes talking about Borg and Kubernetes. But for those that have not listened to any of our Kubernetes episodes, could you tell us a little bit about why is Kubernetes a thing? What is cool about it? 

CHEN: Everything. 

FRANCESC: Of course. 

CHEN: As I said before, Kubernetes is the heart of Google Container Engine. It's an open source platform for automating deployment, scheduling, and operations of containerized applications across clusters. With Kubernetes, you are able-- once you are familiar with containers and you have microservice applications, you are able to deploy your applications quickly and in a predictable way and scale on the fly, which means that it's very easy to meet a changing demand, together with Kubernetes. 

MARK: Cool. So then what's the difference, or possibly the relationship, between Kubernetes and Container Engine? How does that work? 

CHEN: The first thing is that Kubernetes is open source, and it runs anywhere. This is also the main differentiation between Borg, our internal container centric infrastructure, and Kunbernetes. For the team that founded Kubernetes, it was very important to make it open source, because we understand that cloud today, while we see that it's a very popular trend, still most of the workloads are not running in cloud, but they are running on premise. So we know that if people want to move to containers, and they want to be agile and to quickly deploy, they're actually looking to do it not in the cloud but in other environments. 

So the team really wanted to make something open source that it would be easily adopted. So that's one. And the second thing is that, by making it open source, we are building a very rich ecosystem around it. So you have many other tools that are bridging the gap if it's from developer experience, security, storage, and network, and more. 

FRANCESC: So then that means that, basically, I can get Kubernetes and run it, basically, anywhere. And every single time I say, you can run Kubernetes everywhere, it comes to my mind-- the demo that Ray Tsang did, where he runs Kubernetes on a cluster of Raspberry Pis, so it's one on top of each other, which is very cool. So you can run it virtually anywhere, but we offer a way to run it on GKE-- Google Container Engine. What is the benefit of running it on Google Container Engine rather than just installing it on your own cluster? 

CHEN: First of all, just being off a new cluster in Kubernetes is not something how to do, OK? We actually invested a lot in making it easy with tools like [? kubeadm, ?] and we even emphasize that it will be easy in a consistent way across different platforms wherever you run it. The value of GKE, or Container Engine, is by the offering of what happens next. 

So you spin off your cluster. This is great. Then even if you start to deploy your application on that cluster, how do you keep that cluster updated? How do you get the most recent Kubernetes versions? Google Container Engine is where 1.6 is already available. We're always the first one to make innovation of Kubernetes available within the Kubernetes community. 

And we are doing it without compromising quality. So when we make it available on GKE, we have tested it. And we make sure that it will work well for our customers. We are upgrading automatically, both the master-- the control plane of the cluster-- and the nodes. And we provide you out-of-the-box integration to everything that you need to actually serve customers for your application, so integration with network and load balancing and storage, and just solving all the infrastructure challenges for you. 

What I often hear from developers is two things. GKE is the best and easiest way to try out Kubernetes, because it's so easy to speed up a cluster. But the more important thing, it's the easiest and fastest way to make your application productized. So if you are a startup, for example, and you want to quickly set up something and maybe serve in multiregions, GKE and GCP is a very easy way to go. 

MARK: So you mentioned updates. And I'm curious about that, because since Kubernetes is built for failure-- for reliance, resilience against failure-- I'm assuming that that might help with the update [INAUDIBLE] But how does it work? Do I even care when the update happens, from 1.5 to 1.6, for instance? 

CHEN: So, first of all, this is some of our secret sauce of how we do it in GKE. 

MARK: Interesting. 

CHEN: And no, you shouldn't care. And of course, we make sure that we will not introduce risks. There is a way, if someone wants to opt out, but we think at Kubernetes, we are making sure that we are [INAUDIBLE] compatible. We can upgrade for you. And usually you don't know, and you don't care. 

The machines themselves that are part of the Kubernetes clusters are more tricky. This is the area where some would prefer to opt out of those capabilities, especially if they have, in their application design, some constraints that we cannot foresee. But overall, we are making the upgrade while we mitigate the risk, making sure your application continues to serve as you would expect. 

FRANCESC: That's cool. 

MARK: Cool. And you talked about it a little bit, but I'd love to hear some more detail. So GKE was sort of integrated more with GCP, like there are certain things out of the box that are available. Can you talk a bit about the features and tools that are directly integrated into the hosted Kubernetes solution that we were run? 

CHEN: I think that the most thing to highlight is the infrastructure, for example, RVMs, powered by Google Compute Engine. You can have flexible machines. You can decide exactly what types of machines you will have. They are the fastest to start up. And this is very unique to GCP. 

And network, of course, works out of the box. We allow you to integrate into the IM capabilities of the rest of GCP. And also what we lately see more and more is how GKE customers are leveraging the machine learning services available on GCP. So those are just few examples of the power of GKE, together with GCP. 

FRANCESC: Cool. So let's talk a little bit about GKE. We just had the 1.6 version of Kubernetes released. And you mentioned that it's already available on GKE. What is the coolest thing, in your opinion? What is your favorite feature of all the things that are new? 

CHEN: I am excited usually about the big things that we are trying to do. And then there are multiple features that allow us to move forward. Aparna and I keynoted KubeCon in Berlin when we announced 1.6. It was talking about how Kubernetes is moving forward in supporting multi-workloads and multi-users at scale. And to me, that's the exciting part that I look forward this year with Kubernetes. 

When you are running your applications at scale within a cluster, this is where it becomes the most efficient. This is where it's exciting. This is where you need to invest less in operating the cluster itself. So there are two examples of features that are really helping us move forward there. So one is supporting 5,000 nodes of a single cluster. This is also available on GCP. 

FRANCESC: That is huge. 

MARK: That's good. 

CHEN: But it's not just about right size. It's not all that matters. We have, for example, introduced a better-- what we call RBAC-- Role Based Access Control, which gives you more [? orginality ?] of permissions within a cluster. So if before it was harder to have multiple teams, for example, work within a cluster, it meant that you were forced to have multiple clusters. Now, that's no longer the case. And I think that's the most exciting. 

FRANCESC: Basically, the whole idea here is that rather than having-- like at a startup, you have maybe three clusters for three different teams working together. Now, you have one cluster that may be a little bit bigger, but now you have all the things running together. 

CHEN: Yes. 

FRANCESC: That is really cool. 

CHEN: Yes. And just to make sure that we don't confuse anyone, we still recommend separating development environment from production environment. 

FRANCESC: That's a very good point, OK. 

MARK: Good. 

CHEN: But other than that, yes, definitely having multiple teams or multiple services, even in production serving from the same cluster. 

MARK: So just from an outside perspective, or even from an inside perspective, it seems like the community surrounding Kubernetes is just growing by leaps and bounds, even in the last six months to a year. Do you have any involvement in that? 

CHEN: Yes. I think this is what was most exciting for me in this role, is helping to build this community. Kubernetes, as an open source project, is very unique by-- for the reason that we encourage and we want to have more contribution. So we're actively working on increasing the percentage of Google contribution into Kubernetes. When we started, Google contributed 76% of the commits, and right now it's in the low 40s. 

MARK: Nice. 

CHEN: And it's not like my team is not growing. We grow fast. We're still hiring, if anyone is interested. It is just that we make sure that the community grows even faster than we do. And that's important for us. We found that a product or technology like Kubernetes will not be successful without it. Let's take the promise of runs anywhere. For that, we need users to actually run it anywhere. We know we don't do it. We know that we are experienced with our GKE users and what we know from Google. 

But we have Red Hat, for example, or CoreOS. They are running on premise-- Kubernetes-- and managing it. Their feedback is very important for the community. We see others that are helping with developer experience, and simplification, and network, and security. Just having all of those expertise together and getting that feedback really fast is what makes Kubernetes so special in my mind. 

FRANCESC: So I guess we've been talking around this topic for, basically, the whole time, but we keep on talking about community. And I guess that the fact that it is open source helps the community, but not only. Can you tell us a bit about why is Kubernetes open source to start with? 

CHEN: So, first of all, as engineering managers, or in general, as engineers, I think it's very hard to compete with technologies that are not open sourced. I mean, there is a limit of how many people a single company can put into a single product. And I think it is something that is very clear with Kubernetes. The amount of investment right now, it was calculated about 400 engineering years already. 

FRANCESC: Wow. 

MARK: Wow. 

CHEN: That's huge. I don't have such a big team to support it. I mean, for me as an engineering manager, and also the team, we think that the innovation pace is unmatchable when choosing an open source. And also for Google, specifically, I think open source matters. But it matters more in cloud. 

We talked about the portability aspect, which is very important. We keep saying to our customers, we want you to have a choice. So you have the freedom to come to Google Cloud Platform but also have the freedom to leave. We want you to stay, because this is the best cloud for you. 

FRANCESC: Obviously. 

MARK: We're biased. 

CHEN: But people can live, and they choose to stay. Openness is not just about choosing the platform, but also the flexibility-- which tools to use. There are so many CI/CD tools and that, by the way, keeps changing. And there will be always new technologies. So by making it open source, we know that new technologies will continue to be introduced into Kubernetes and supported because it's open source, because it's easy to do it. And when building a community in Kubernetes, we invest probably half of our time in building Kubernetes as a technology and half of the time around building the community and making it easy to develop on top of Kubernetes. 

So if I'm now a startup that wants to integrate into Kubernetes, or just a vendor or even an enterprise customer, I think this is a reason why they like open source. You can tailor it to your own need. And we invest a lot in extensibility. We care about fragmentation, and, in general, making sure that the success of Kubernetes is sustainable. 

FRANCESC: Great. So since you're talking about the fact that there's a very big interest of people building on top of Kubernetes-- and we've actually interviewed Helm. 

MARK: Yup. 

FRANCESC: We've interviewed a bunch of different people, building stuff. Like [? Fission ?] is also is on top of Kubernetes. 

MARK: Yup. 

FRANCESC: A bunch of different projects that run on Kubernetes, which is amazing. So what is the coolest or the most interesting one that you've seen lately? 

CHEN: I wouldn't say the most interesting, but I can say something that I was passionate about-- 

FRANCESC: Yeah. 

MARK: Sounds good. 

FRANCESC: Let's go with that. 

CHEN: --and I was investing more in is definitely Helm. Kubernetes started with a very infrastructure-oriented people, and many ops people. And last year, our main focus was making sure it's easy for developers to start using Kubernetes. And I don't think we are done yet, but with Helm, I think it's amazing the amount of charts that we have that support the multiple workloads, different type of workloads. 

And we make sure that everything that we produce-- and by "we," we say we because it's a community effort-- of course, led by [INAUDIBLE] team-- to make sure that everything is tested, and that when we release new releases we want to make sure that things are still working as expected. So that's one thing that I'm really excited about from within the Kubernetes community. But that's just one example. 

FRANCESC: That's awesome. Since you're mentioning [INAUDIBLE], they were on the news not that long ago, because they're joining Microsoft. What is your view on all of this? What do you think? 

CHEN: First of all, I think this is exciting for the Kunbernetes community because this is just evidence to show how companies realize the value of Kubernetes. And it also validates our belief that developers want openness and flexibility in the cloud. More specifically, for [INAUDIBLE], [INAUDIBLE] are friends, and are very important member of the community of Kubernetes. And I'm really happy for them. And I hope that with this acquisition, they can do more for Kubernetes. 

FRANCESC: Awesome. Well, we're kind of running out of time. But is there anything else that you'd like to add? Any topic that we've forgotten, or anything else that you'd just like to mention? 

CHEN: Yes. I think that we haven't touched it. We talked about the technology and openness, but one thing that I am passionate about-- definitely as an engineering manager-- is about building the right culture. And I think that the right recipe to build a strong team is having a very strong culture and set of values. That's the thing I like the most about Kubernetes. It's about openness and appreciating feedback, inclusiveness, and diversity. From the moment I joined Kubernetes' community, I felt comfortable and respected. And I hope everybody else feels like that. And I would welcome everybody to join us. 

FRANCESC: Yes. So to segue from there, if people want to get involved with the Kubernetes community, where should they go? 

CHEN: That's a good question. Kubernetes can be very overwhelming with the size of it. We have a concept, which we call the special interest groups. There are smaller groups within the community of people working together on an area they are passionate about. There is about 25 of these, and we can add in the notes the exact link to that. 

I think the best way is just to choose an area you care about and join one of these special interest groups. Then you will know the people by name. You can see the faces on GVC, or Zoom, or whatever meeting two-way you'll be using there. And that will probably be the easiest one. 

I can highlight one specific. We have the [? contrib ?] experience special interest group, which is focusing on the contributor experience. So even if you know nothing about Kubernetes, but you know something about developer experience and open source, that will be the easiest way to get involved. 

FRANCESC: That's great. We'll have a bunch of links from the show notes to point to all of those special interest groups. And also, we'll have a bunch of links to different talks from KubeCon. I know that your keynote was really good, so if people are interested in learning more, I think it's a very good place to go to. 

MARK: Excellent. Well, Chen, thank you so much for joining us. It was super great to have you on the podcast. 

CHEN: Thank you very much. 

MARK: Thanks, again, to Chen for joining us. It was really great to have a chat with her and hear about her opinions and her perspective on Container Engine and Kubernetes. 

FRANCESC: Yeah, and just talking to her, because she's awesome. 

MARK: Yup. 

FRANCESC: Now, we're going for our question of the week. And as we said, it's a question of the week coming from Slack, from the username [? Sha_HelloIda ?] or something like that. So the question is, "If I want to access a private repo from container builder, how do I do it?" 

MARK: Cool. So this depends. So-- 

FRANCESC: Yeah. I guess before we start answering the question, we should mention, what are those things? What is a container builder? And what is a private repo? So, container builder? 

MARK: Container builder is, essentially, like an automated system for building containers [? on ?] [? site ?] Google Platform. It can be fired manually, so you can actually run it locally to basically use the cloud to build containers in the cloud. But you can also have it run on, say, when a git repo gets pushed to, or something like that, and then have it trigger automatically. It can have multiple build steps and can do just more than just building a simple container. So it's a pretty nice little piece of foundation work for a building continuous integration and continuous delivery systems. 

FRANCESC: Yeah, what I like about it is the fact that it allows you to build containers very easily, and you can run it directly from gcloud, so gcloud container build submit something. 

MARK: Mhm. 

FRANCESC: You don't need to install Docker on your machine. If you don't have it, that's fine. You can still build your containers and push to the container with repository-- or container registry, actually-- and then access it from there. So that's pretty awesome. So to do that, container builder accesses repos. It downloads code from places. And when it's a public repo, no matter where it is-- well, it's public, so you can access it. 

MARK: Yup. 

FRANCESC: But what if it's private? 

MARK: OK, so you're working probably on some sort of commercial application. You don't want it to be exposed the outside world. There's a couple options here. So Google Cloud Platform does allow you to have source repositories. They are private repositories, private git repositories, that come with Google Cloud Platform. 

FRANCESC: And they're pretty awesome. I use them all the time. 

MARK: I use them, too. They're really super simple. So if you're running Google Cloud Builder in the same project as the source repository that you have your code in, then there's not gonna be a problem. It should be able to grab that code, pull it down, do what it needs to do. Sweet. It's perfect. If you have your social repository in a different project, you will need to configure some permissions on that repository so that your external repository can then access it. So basically, give that the builder project access to that source repository so we can do that. 

FRANCESC: Makes sense. 

MARK: If you have something like a private git repo on say, like GitHub, then we're gonna need to get some SSH keys. 

FRANCESC: So how do you do that? 

MARK: How do we do that? So in the future, hopefully this should be a whole lot easier, and there will be nice steps. The solution that we talk about having now, basically, is store those keys in a private Google Cloud Storage bucket. 

FRANCESC: OK. 

MARK: So put them somewhere so that the outside world can't get to them, but that project can. And then, within your build step, just download those keys from git storage bucket, put them in the appropriate space, probably in an SSH folder. And then you'll be able to access your git repository, pretty much exactly as you would do normally. 

FRANCESC: Nice. I wonder if it could be also doable from if you started a metadata server, or something like that? But it's probably easier to do it on Google Cloud Storage. That's actually something that people do not realize. You can just drag and drop files from your desktop to the bucket, which is pretty amazing. 

MARK: It's pretty easy. And then you've got also a lot of control, because you have all the ACLs, you know the Access Control Lists, and that kind of stuff as well. 

FRANCESC: That's a very good reason to do it that way, yeah. 

MARK: Yeah. So Container Builder, pretty flexible. You can do a lot with it. It's actually really, really cool. 

FRANCESC: Yeah, it is definitely worth trying. I'm gonna be playing with it soon, because there's this new thing, the Docker build that is multistep. I don't know if you've heard about it. 

MARK: I have not. 

FRANCESC: It allows you to do things when you want to build something, and you want to put all your tooling and compilers and stuff. And then you want to generate a binary, and you want that binary to be in the smallest container image possible. 

MARK: Oh, yeah. 

FRANCESC: So it allows to do exactly that. 

MARK: That's similar to what I do by hand, but. 

FRANCESC: Exactly, but less makefiles. 

MARK: Huh. 

FRANCESC: I know, it may sound a little bit sad for you to have less makefiles, but it's actually a good thing. So, yeah, I'm gonna be playing with that, and I'm pretty sure that Container Builder is a very nice way to do that. 

MARK: OK, cool. I think, yeah-- I think we're gonna have to look at that a little bit later. 

FRANCESC: Yup. 

MARK: What are you up to? What are you doing? Where are you going? Anything interesting on the calendar? 

FRANCESC: So by the time this episode comes out, I'll be arriving in New York, and I had presented already last Monday. So May 1st, the Google Developer Group New York City, talking about endpoints with our dear friend, Brett. He will be talking about cloud functions. 

And after that, I'll be back right on time for Google I/O because-- I will not be going to Google I/O, but on May 15th, I will be hosting Gopherfest San Francisco, which is a very cool event hosted here in the San Francisco-- well, in the launchpad, which is by the San Francisco office. 

MARK: Mhm. 

FRANCESC: Lots of cool talks about Go community, et cetera. What about you? 

MARK: Cool. So the week that this podcast comes out, I'll be helping host the Extra Life & Playcrafting Game Jam. We'll be raising money for kids in hospital. Then I don't go anywhere for a week, which is really nice. 

FRANCESC: Crazy. 

MARK: And then the week after that I go to Sweden to Nordic Game Conference, where I'm off to talk about Kubernetes and game servers, and all the good stuff there. 

FRANCESC: Nice. And right after that-- and it'll be right after Google I/O, so there will be some fresh announcements, probably. 

MARK: There'll be something. 

FRANCESC: We should do some-- a special episode or something. 

MARK: Something like that sounds like a reasonable thing to do. 

FRANCESC: We'll see. 

MARK: Excellent. Well, Francesc, thank you again for joining me for yet another episode of the podcast. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}
