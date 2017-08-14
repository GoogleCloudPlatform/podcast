+++
audioDuration = "00:31:18"
audioFile = "Google.Cloud.Platform.Podcast.Episode.89.mp3"
audioSize = 45315012
categories = ["Open Source", "Customer", "Kubernetes", "Container Engine"]
date = "2017-08-09T01:07:49Z"
image="/images/post/heroiclabs.png"
description = "Today we have the honor to be joined by Alim Jaffer and Mo Firouz from Heroic Labs to discuss their open source framework for social and realtime apps and games."
draft = false
episodeNumber = 89
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Heroic Labs with Alim Jaffer and Mo Firouz"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/D9fQG3TKAwW"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6sn1de/episode_89_heroic_labs_with_alim_jaffer_and_mo/"
+++

Today [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/Neurotic) have the honor to be joined
by [Alim Jaffer](https://twitter.com/alimjaffer) and
[Mo Firouz](https://twitter.com/mofirouz) from Heroic Labs to
discuss their open source framework for social and realtime
apps and games.

<!--more-->

##### About Alim Jaffer

A member of the founding team, Alim joined Heroic Labs in 2016 as
the VP of Product after having worked in startups focused in the
games and health verticals.

He is based in Vancouver, Canada and San Francisco. 

##### About Mo Firouz

Mo cofounded Heroic Labs and is part of the core engineering team.
Mo has worked on various products in Heroic Labs including the core
Nakama server as well as Heroic Managed Cloud where he was primarily
responsible for automating server provisioning and the monitoring
stack with Kubernetes. Mo previously worked as a system architect
in VisualDNA and built scalable big-data analytics systems, and
prior to that built realtime high frequency trading systems.

##### Cool things of the week

- CRE life lessons: What is a dark launch, and what does it do for me? [blog post](https://cloudplatform.googleblog.com/2017/08/CRE-life-lessons-what-is-a-dark-launch-and-what-does-it-do-for-me.html)

- Cloud Dataproc is now even faster and easier to use for running Apache Spark and Apache Hadoop [announcement](https://cloud.google.com/blog/big-data/2017/07/cloud-dataproc-is-now-even-faster-and-easier-to-use-for-running-apache-spark-and-apache-hadoop)

- Canary Deployments using Istio [blog post](https://istio.io/blog/canary-deployments-using-istio.html)

##### Interview

- Heroic Labs [heroiclabs.com](https://heroiclabs.com/)
- Heroic Labs on GitHub [repository](https://github.com/heroiclabs)
- Heroic Labs [Documentation](https://heroiclabs.com/docs)
- [Google Container Engine](https://cloud.google.com/container-engine)
- [CockroachDB](https://www.cockroachlabs.com/)

<div style="text-align: center">
  <a href="https://heroiclabs.com/"><img src="/images/post/heroiclabs.png" style="margin: auto;"></a>
</div>

##### Question of the week

Accessing Cloud SQL instances from Cloud Functions?

Use SQL Proxy, as for the Managed Instance Group, which we cover on [episode 81](https://gcppodcast.com/post/episode-81-cloud-dataflow-with-frances-perry/).

- [Connecting MySQL Client from Compute Engine](https://cloud.google.com/sql/docs/mysql/connect-compute-engine)
- [About the Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy)
- CloudSQL Proxy [GitHub repo](https://github.com/GoogleCloudPlatform/cloudsql-proxy)

##### Where can you find us next?

Francesc just released a [justforfunc](http://justforfunc.com) episode on [Contributing to the Go project](https://www.youtube.com/watch?v=DjZMKKfNVMc). He'll be soon taking some well deserved holidays!

Mark will be speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.

{{< transcript "FRANCESC: Hi, and welcome to Episode number 89 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm doing very well. Having a very good day. How are you doing? 

FRANCESC: Pretty good. Very, very happy with the amazing episode we have today about video games. So you're going to be excited too. 

MARK: Yep. 

FRANCESC: And it's about video games, but also open source at the same time, so even better. 

MARK: Yeah, and Kubernetes. So it's like all my favorite things. 

FRANCESC: Yeah. We're going to be talking with a true gentleman, Alim Jaffer, and Mo Firouz, both from Heroic Labs. And they're going to be telling us a little bit about what they do and how you can use it on Google Cloud Platform if so you wish. 

And then after that we'll have a question of the week, which actually comes from one of our coworkers. He came to my desk yesterday asking, hey, how do you do this? And I was like, I do not know. So we figured out and we have an answer. And it's about how to access Cloud SQL instances from Cloud Functions. Fancy. 

My question was like, why do you do this? Cloud Functions is super hipster and Cloud SQL is not, so why? 

MARK: Because by joining these two things together, magic things happen. 

FRANCESC: Yeah. But that will be at the end. Before that, we have our cool things of the week. 

MARK: Yeah. And this week we have returned once again with the CRE team, the Customer Reliability Engineering team. If you haven't listened to those podcast episodes, you definitely should. They're fantastic. 

They are talking about dark launches and what it does for me. So basically, if you are, say, reimplementing a service or adding new functionality to a service that could potentially break old things, you can run it in the background. And they talk about how you can proxy the traffic between the old service and the new service. 

That new service, the customer never sees it. The end user never sees it. And then you diff the data between and see what's changed, and whether it's actually doing what it's supposed to be doing with real information. 

FRANCESC: Yeah, I actually did this in my previous company before joining Google. I was working at a company, Amadeus, and we migrate out of an IBM mainframe called TPF. And we re-wrote the whole thing on Linux and with C++. 

To make sure that these actually work the best way was doing this. You have a proxy. You get all of the traffic from production. You send it to both the old and new services. And then every single time you get the responses, you compare them. You always send the one that you trust, which is the old system. 

But every single time there's a difference, you log it and you found an issue. By the time you don't have any more issues, it means that you're pretty much ready to migrate. 

MARK: That's pretty good. 

FRANCESC: Yeah, I just didn't know that it was called dark launch. 

MARK: I did not know that too, so. 

FRANCESC: It's so Star Wars-y. I like it. 

MARK: Yeah, I just want to do it now because of that. 

FRANCESC: The second cool thing of the week is about Dataproc. And the newest version of Dataproc has been released. So it's Cloud Dataproc 1.2. For those that like to use Dataproc, it's basically the easiest way to start Spark and Hadoop clusters on Google Cloud Platform. 

Those two servers have also been updated to the latest version. So we have 2.2.0 for Apache Spark and 2.8.0 for Apache Hadoop. So check it out. It's going to be even faster. 

And there's a bunch of new small features. So if you're using Dataproc with Apache Spark, or Hadoop, or whatever you are using from Dataproc, check it out. There is a blog post that we will link from the show notes. 

MARK: Awesome. And it seems like I'm on a theme today where I'm talking about how to safely deploy new things. There's a blog post actually back in June, but I just noticed it today and I thought it was really good talking about how you can do canary deployments using Istio. 

FRANCESC: Cool. 

MARK: So if you've ever been using, say, Kubernetes and you've thought to yourself, how do I make it so that 10% of my users get this new thing and like 90% get the old thing, and make sure we do a slow roll out? Or maybe you only want to determine like, just give it to the internal users that we have at our company so they can dog food it before it goes to the wider audience. How you can do that. 

There's a whole blog post here talking about how you can take advantage of Istio, another open source project which we have a previous episode on as well, and how you can set up configuration for that to make that happen. It's actually cool. I didn't know this was in Istio and now I'm super excited and really want to play with it. 

FRANCESC: Yeah, it is really cool. There is actually one of the things that I really, really like from App Engine. App Engine allows you to do this very easily, and basically based on the same thing. Either you go with percentage or also you can go with cookies so you can target specific things. These are even more powerful because you can even apply regular expressions of the values of the cookies in order to decide what version they're going to hit. So that's really, really cool. 

MARK: Awesome. Well why don't we go chat with our pals over at Heroic Labs and hear about what they're doing all with Kubernetes as well. 

FRANCESC: Sounds like a good idea. Let's do that. 

MARK: I am very happy today to be joined by two amazing people from Heroic Labs, Alim Jaffer and Mo Firouz. How are you both doing today? Alim? 

ALIM: Great. And thanks very much for having us, Mark. Happy to be here. 

MARK: Wonderful. And Mo, how are you doing today? 

MO: I'm very well, thank you. 

MARK: Excellent. Thank you so much to both of you for joining us to talk about Heroic Labs and your experience at Google Cloud Platform. But before we go into that, why don't you tell us a little bit about both of you. Alim, why don't you go first. 

ALIM: Yeah, sure. So I've been working in start ups for a couple of years now. I'm based out of Vancouver, Canada, although I spend a fair bit of time in San Francisco as well. It's kind of my second home. And I'm the VP of Product here at Heroic Labs. So my job here is to handle the product, the waterfalls, making sure we're moving in the right directions for the industry, and generally taking ownership over Nakama itself. 

MARK: Cool. What about you, Mo? 

MO: I'm one of the co founders of Heroic Labs. We started this company around two years ago, back in 2015. And I've been basically part of the engineering team, working on various products. And most recently on Nakama [INAUDIBLE] server and the integration with Google Cloud Platform. 

MARK: Cool. So I guess that you should be able to answer this question. What is Heroic Labs? What do they do? 

MO: So we build server infrastructure for games and apps. We provide an open source server called Nakama. That's on Github right now. You can go and download it. And what it does it takes care of all the infrastructure needs, all the back end needs of a game or an app. 

We have Social APIs for games. We have Social APIs for chat, for real time, multiplayer, leader boards, data storage, and basically all sorts of building blocks that games and app needs to build to service a live game or a live app. 

ALIM: So in short what we do is our primary product is Nakama. What we call it it's an open source distributed game server. It's designed to power an entire back end for games and apps. One of the big changes for us was going the open source route with Nakama, and we've had a phenomenal reception to it. And we've designed it to be real time first. 

FRANCESC: I want to make sure that I understand correctly what Nakama is. So is it more like a framework? Is it a library? Can you use any language with it? What does it look like to develop a game on top of Nakama? 

ALIM: Sure, so it is your entire back end. Everything from your user accounts, to your data storage, to real time multiplayer, to matchmaking. We handle all of that. So you can build, say, a Clash Royale style game off of Nakama and not need any third party services except for things like analytics and anything you wanted to do on the data side there. 

It's written in Google's Go programming language. And we have an embedded scripting engine written in Lua so that you could add custom scripts to it to customize to suit more your specific game play. 

FRANCESC: Cool, so does that mean that in order to write a video game on top of Nakama, I have to use Go? Or how does that work? 

ALIM: No, absolutely not. So we have a first-class client [INAUDIBLE] for Unity, for Unreal Engine. We're going to be releasing a JavaScript one in the next few weeks, as we've had a lot of demand for HTML5 games and also just apps in general. Because what you power for games is really a superset for apps. So anything that can power a game can certainly power an app. And we plan on expanding this to kind of become a base framework for games and apps moving forward. 

MARK: Cool, so now I really want to get into the GCP side of things as well. But what I really want to know is you said that this is an open source product that you can provide a source for. Why is it open source? Can you talk a little bit about that decision making process and why you ended up building it that way? 

ALIM: Yeah, absolutely. It was quite the contentious issue internally for a while. It was this strong debate of do you go open source and give away, essentially, your secret sauce? Or do you keep offering a closed source solution as so many people have? One of the big pushes, we were already working towards it, but when Parse announced their shut down it did a lot of harm to the industry, both on the games and apps side, where people went oh, it turns out we can't trust these things. 

And there's already a large 'not invented here' syndrome in the industry where people want to build their own tech. So by going open source we wanted to offer people both the comfort of knowing they can own the technology, but also the transparency behind it, where they get to work with it, do what they want with it, fork it, modify, have it suit their needs. 

But the big thing was to offer it to everyone and go, look, it's not going to disappear. You can play a part of this and we can build something bigger moving forward. It gives you the ownership and control, but simultaneously you get something that's productized because we're still working on it every single day and constantly adding improvements to it, along with the community members who are also contributing. So it's a bit a growing that community out and also getting adoption out there, and open source is by far the best route forward for that. 

FRANCESC: Cool. I was checking right now the fact that you actually have all of your code on Github under Heroic Labs. And you even have all the planning on what you're working on. That's really cool. 

ALIM: Yeah, we're real firm believers in the open source philosophy and that our roadmap needs to be public. And we want influence. Basically what we work on next is based on our customers and based on our community. So when they say, oh hey, we want matchmaking. We're starting to get our games out there and we need a better way to matchmake. That became our next priority. 

And it's something we're firm believers in. That we don't build games ourselves. It's not our desire to. But those who are building games can help us work together on here's what we need and here's why we need it, and we can make sure it works on a scalable level. 

MARK: Now I know, so Mo maybe this is a question for you, I know on the website, it talks about CockroachDB. But you also basically build your platform on top of other open source products as well. Can you talk a bit about what those are and why you made those decisions? 

MO: Yes, so CockroachDB being obviously the biggest one because that's the only database that Nakama needs to basically run. Nakama's and our philosophy is, if you think about the CAP theorem, Nakama is the high variability side of stuff and Cockroach is the consistency side of stuff. 

And we sort of give the [INAUDIBLE] to Cockroach to take care of for us, while we take care of being highly available to the games for various use cases. We use various technologies on top of Nakama and to build Nakama on. So say, Kubernetes for instance is one of them. Ansible is another one. To drive various parts of our deployment process. We use various Go libraries like Zap for login within Go. Or Protocol Buffers, for instance. We use Erlang analytics in part of our platform. And it's a combination of all of those open source projects that have sort of led Nakama being what it is right now. 

Nice Nice, I really like that you're using so many languages. Sounds very exciting. Are you hiring? [LAUGHING] 

MO: We are always hiring, yes. We can talk about that after the podcast. 

FRANCESC: OK, good. 

MARK: Francesc, don't leave me. 

ALIM: No free lunch like Google though. I'm sorry. 

FRANCESC: Oh, yeah. Then no. So now we've talked a little bit about all the open source side of things, you mentioned that you run on Google Cloud Platform. Could you tell us a little bit, how does it look like? What products are you using exactly? 

MO: So I guess the main crust of it all is the Container Engine. We use Container Engine to power Kubernetes, and obviously that uses Compute Engine instances. And part of the Container Engine is used to contain the registry. 

So we upload our images into the Container Registry, and get Docker and get Kubernetes to run within the Container Engine system. And part of that comes at the login and monitoring that. We use Stackdriver for, pretty much exclusively at this point. The sort of a core line storage for storing various snapshots of Cockroach's database for restore and backup purposes. And load balancer, both sort of L7 and L4 load balancers for various web socket and HTTP traffic. 

MARK: Sounds really cool. How are you deploying your Nakama to GKE or Kubernetes? Are you doing anything special there, or is it just like straight deployments, or can you talk about that? 

MO: So remember when I mentioned that we run the path from code in [INAUDIBLE] on Erlang? So that niche of the platform is what drives how we run our managed cloud and how we deploy Nakama into Google Cloud Platform. So we have obviously we have a built box. That sort of build in the Nakama images, the Docker images. And now push them into Container Registry. 

Then we tell our little app that we've created that lives within Container Engine to talk to Kubernetes' API to create new server instances and run [INAUDIBLE] version of Nakama and Cockroach we need to given the configuration that we have for Kubernetes within the Kubernetes cluster effectively. 

That's sort of how-- that little Erlang and [? LXE ?] app that we've written, we call it the managed cloud servers. The actual sort of app runs Kubernetes and actually talks with the Kubernetes API, so we can have a fully automated managed cloud system. 

MARK: So does that mean you wrote a client in Erlang for Cloud and Kubernetes? 

MO: Yes, yes, we did, Yes. It wasn't fun, but yes, we did. 

MARK: Are you going to open source it? 

MO: I think it needs a bit more clean up in some places, but we've already talked internally about open sourcing part of the stack. Because one of the reasons we actually went down to open source for Nakama is what we've discovered and what we really like about the gaming space is that it's sort of a tightly knit industry, where everyone sort of helps each other out. 

And we want to give back something to the game industry and to the ecosystem. And taking that idea we want to do the same thing around certain libraries, or certain clients. For instance, in this case Kubernetes Erlang client or Lexia client and give that back to the community. Because we appreciate a lot and obviously have taken a lot from the community, and I think it's time for us to give something back. So we will do that at some point, yes. 

FRANCESC: Cool. At some point you were talking about how you are able to scale, while keeping strong consistency. And I'm curious about how you do that exactly. You mentioned that you're using CockroachDB. Are those CockroachDB instances running on top of Kubernetes on GKE? Do you run it separately? How does that work? 

MO: So Cockroach does run on GKE and runs on GCP. Cockroach is basically a distributed SQL engine that's highly available, and they claim that it survives disasters. What we've seen so far is that it does survive disasters, not that we've gone through many of the cases so far yet. 

What we can do with CockroachDB is we can cluster them together. And we can start with, say, one node of Cockroach. We can use that. It fills up. Put two or three or four of the nodes to get it to form a cluster. And when it's joined the cluster, it will sort of load balance data on the disk and copies it across to various nodes while it's trying to join the cluster. 

So we will always have the high validity and strongly consistent data. It's not like, say for instance, Cassandra database, where your client needs to talk with a specific set of nodes in the cluster, not all the nodes. What happens in Cockroach is you talk to one cluster node and it sort of replicates the data in the background transparently for you across all the nodes. 

FRANCESC: Cool. And so I know that CockroachDB is based somehow on Spanner, and that one of the powers of Spanner is the fact that it uses atomic clocks. Could you talk a little bit about is CockroachDB also using the NTP service that Google Cloud Platform provides? How does it scale? Do you know this, or is it just magic? 

MO: So it's partly magic. When you're running CockroachDB, you don't really get exposed to that level of detail. We certainly haven't told it to use any sort of NTP servers within GCP. It does come with NTP services inside, and it does sink together between different nodes. 

It's sort of very much hands off. You basically tell it, OK, so here's were the Cockroach node live, and go ahead and connect to them. And it sort of figures out which node came first, what is the master node where the data exist. Although the term master is a very specific term instead of distributed system. And how to replicate. It sort of uses a raft protocol to sort of know exactly where the nodes are, and what they tend to replicate, and how to do it rather. 

FRANCESC: Cool, so I'm going to stop asking you questions of databases. Maybe we should also have like an episode with CockroachDB or something. Yeah, CockroachDB people, if you're listening to this. Please let us know if you'd like to come. 

But you say that you run all of your servers basically on GKE. How do you deploy? Are you using Container Builder? Are you using something homemade? 

MARK: Like Jenkins. 

FRANCESC: Like Spinnaker or Jenkins. Or how does it work? 

MO: We do use a sort of slightly modified version of Jenkins sort of as a build box. And to drive the build box and to drive the deployment we use Ansible. And To drive Ansible we have a bot in Slack that we type commands on to basically drive Ansible and tell it commands to do through the bot. 

So we are out in bars or in pubs, as we have it in London. We can just basically connect to the Ansible bot through the Slack app and just tell it to to redeploy something. That's sort of the methodology around it. 

ALIM: Yeah, I kind of remember a story where we-- I can't remember what movie we went to. It was at the Jason Bourne movie and Andre had to use the Hero bot in Slack for something. 

MO: I think it was one of those things because me and Chris were quite into the movie, and we didn't really care at that point what happened. So Andre was the one on call. So, yes, Andre did that, yes. 

ALIM: It's an incredibly useful tool. 

MARK: And just for clarification so that people know how they're using the took. You're using Ansible to push changes like container images and stuff like that into Kubernetes itself? Or are you interacting with, say, the cluster? Or is it like across the whole thing? Like how is that working? 

MO: No, the pushing the images are done by effectively the built box that we have. So we push whatever code that we need to push into sort of Github. And then we have a continuous integration hook that builds the image on the build box. And then from there, the image is ready inside Container Registry. 

And then we use Ansible to say, OK, Google managed cloud servers, go and grab this image from the Container Registry and tell Kubernetes to deploy that into this server for this namespace. 

MARK: Wow, I actually didn't know Ansible had Kubernetes stuff. That's actually super cool. 

MO: No, Ansible doesn't have Kubernetes. Ansible talks with our server, the managed cloud, the Erlang node. And then the Erlang node drives Kubernetes and tells it, OK, so here's the app that I have. Here is a namespace for this particular person or particular customer. 

The way we've designed the Kubernetes namespace is one namespace per customer, effectively, on that particular Kubernetes set of clusters. And we work with our managed cloud saying, OK, so this is the customer's namespace. Go and deploy this particular image, say Nakama 1.0, into that person's namespace, and update it all, and then obviously update this schema that needs to be migrated, and so on and so forth from there. 

MARK: Gotcha. So you've basically used the APIs that Kubernetes has given you so that you can build your own, basically, control plane to control exactly what's going on inside your cluster? 

MO: Yes. And that Erlang node, that managed cloud server node, also talks with the Google API to set up the various DNS records and set up various firewall rules. Because there are certain firewall rules, for instance for websocket connections, that you can't set through the Kubernetes Ingress because they're just not exposed there. So we have to talk directly with the Google Cloud Platform within sort of the L7 load balancers to configuration to update them to say, OK, set a timeout of this particular connection to x minutes, for instance. So we can have a live web circuit connection going. 

MARK: Cool. So that was actually interesting. That was an interesting lesson that you seemed to have learned about how to manage GCP with Kubernetes. Have there been any other particularly good lessons that you've learned along the way that possibly our listeners might want to learn from as well? 

MO: From the top of my mind I can't think of anything else. There were a couple of details that weren't mentioned in documentation that we sort of found out while we were implementing, but there weren't many. There were maybe a couple. But this was maybe four or five months ago, so I can't really recall exactly what those details were. 

But generally speaking so far, I'm really, really, really happy with Kubernetes and I'm really happy with Google Cloud Platform. I can say that sort of hands down. It's been a breeze figuring it all out. 

ALIM: Yeah, I mean we've done deployments on Azure, on AWS, GCP. And I will say we've been the happiest with GCP, both for network reliability and also for the services offered. Its kind of best suited for us at the moment. 

FRANCESC: So since you mentioned that you've done deployments on a bunch of different clouds, I wonder why the cloud? What are the benefits for you to be running those game servers on the cloud? 

ALIM: With the cloud itself, we know how the cloud came to prominence 10, 15 years ago where it really started to grow and it allowed all these other tech companies to come up. You no longer need to spend two grand to get a basic web site running. You could start building some really cool tech. 

And now that I feel the cloud is more or less mature, yes, there are some outages. Yes, things happen. But the general usage of the cloud, it would be hard to argue it's incredibly mature. And now as people are getting content with it, there seems to be a bit of an arms race, in my opinion, and Mo feel free to jump in at any point, where between AWS, GCP, Azure, and all of them, where something we call the verticalization of the cloud. 

Where now they're starting to offer more bespoke services for each vertical. So for example, games. I know games is growing and each cloud is trying to go after it more and more because it's going to continue to grow and be larger and larger. And as games go online more, as there's more multiplayer, as consumers expect games to do more, it's going to take more resources to do. And it also takes a lot of complexity to build. 

So we kind of view the verticalization of the cloud as each cloud starting to offer more bespoke services to build on top of, but that way they don't have to start from scratch just from the virtualization layer. And that's kind of also where we see Nakama going. Where it becomes a vertical upon clouds to build forward. 

MARK: Cool. Yeah, I just realized one thing as you said it. Where does that name Nakama come from? 

ALIM: Oh, sure. So it's a Japanese word. So one of the guys, Chris, one of the founders is huge into anime. Loves it to death. We're trying to get him out to Tokyo as soon as possible so he can fulfill that dream. And I believe it's literally translated as friends who are as close as family. 

And so the whole point of Nakama was we believe games are getting incredibly social, and it's very much a social server. We have a social graph built innately into it. So you can do queries like show me friends of my friends who are not yet my friends. And Nakama seemed to suit that pretty well. 

It was going to be the project name and then we just all fell in love with it and said, it's perfect for what we need. So friends who are as close as family, essentially. 

MARK: Cool, all right, well, unfortunately we are running out of time here just a little bit. But before we wrap up, is there anything either of you want to be able to mention, or haven't managed to mention, or just want to plug something in general, maybe an event you're going to be at or something where people can find you? What else is there that we haven't managed to cover yet? 

ALIM: Sure. A general plug I'd like to make is, we've gone over this a couple of times now with it being open source, but we truly would love the community to come around us. Whether you work in games, whether you work in apps, whether you're just curious about back end technologies, we'd love the community to get around it. 

We have a Gitter channel. All of our engineers are on it. As you mentioned earlier, Mark, we do have a public roadmap. We'd really like people to just get involved, to open pull requests, offer bug fixes or even just bug reports. It's very important to us as a team and also as this technology grows that people get engaged with it, so we are the stewards, but we're not the only people working on it. 

We'll be at Pocket Gamer Helsinki in September. I believe it's in mid-September. We'll be at Mobile Games Forum in Seattle in October. We have team members in Austin, Texas, San Francisco, Vancouver, London, England. So if you're in any of those places, feel free to reach out to us and we'd love to talk and just get your feedback on it. And if you want to get involved, let us know. And we are, as mentioned earlier, we are of course hiring. If you're a distributed systems engineer we want to hear from you. 

MARK: Mo, you got anything else to add? 

MO: Yeah, just one last thing, which I think Alim missed out is part of all of this stuff, I think next week or maybe the week after that, in the next seven to eight days, we are going to be releasing the first stable version, the 1.0 of Nakama. So it's going to be out there, and it's going to be downloadable on Github, and it's going to be stable. And so we would like to see more games and apps use it going forward. 

MARK: Awesome. 

ALIM: Yeah, it's a huge milestone for us, so we're very excited. We already have games that are using Nakama with millions of players, but this is the official 1.0. We're here to stay. This is a stability marker, and we're super excited moving forward to have it. 

FRANCESC: That's awesome. Well, congratulations, and thanks both Alim and Mo for taking the time today to tell us a little more about Nakama, but also especially about how you built it and all that cool stuff. We learned a lot. 

ALIM: Yeah. Thanks for having us, guys. 

MO: Definitely. Thanks for having us. 

MARK: Thank you very much. 

FRANCESC: Thanks to Alim and Mo from Heroic Labs for taking the time to tell us a little bit more about all the cool video games that you can build on top of GKE quite easily with the open source framework. They're open source, so check it out. We have a link to their Github repos on the show links. It's sort of worth having a look and maybe even contributing. It's open-source, after all. 

MARK: Yeah, definitely. Super cool stuff they're building. And, yeah, I'm excited to see what they build on top of GKE. 

FRANCESC: I think it's time to go with other question of the week. And the question of the week came yesterday from our coworkers, because we're on the same team. Gabe Wise. He's a Developer Advocate that just joined recently doing Internet of Things at Google Cloud Platform. 

And something he was doing is he's actually logging the temperature. He has a little sensor that sends the current temperature through, I don't know exactly what, but ends up running through Cloud Functions. And then he wants to store that piece of data from Cloud Functions to a SQL instance running on Cloud SQL. 

Now the problem is that in order to access Cloud SQL, there's a couple of ways of doing this. One of the ways is by using App Engine, or by using the App Engine service account. Now that does not work with Cloud Functions because the App Engine is a different environment. 

The other option is to say, well, I'm going to allow the connection from this IP. 

MARK: But in Cloud Functions it's serverless. Is there even an IP? 

FRANCESC: What is the IP of no server? Zero? I don't know. So yeah, you cannot do that either. So how do you do it? And basically the solution is pretty simple. Is you use a proxy. 

So what you're going to do is there's going to be a proxy running with a specific IP that you can then hit from there. And whenever you connect to that proxy, the proxy will connect to the SQL instance. And since that proxy has a stable IP, you can whitelist the IP of the proxy instead. 

So it's pretty simple and it keeps all the security and stuff. And the cool thing is that you don't even need to write this yourself because there is an open source solution that is written here at Google Cloud Platform. It's called Cloud SQL Proxy. 

So we'll have a link in the show notes to both the repo, which is worth checking out, and also documentation. 

MARK: And it's also worth noting that we did a previous episode where we talked about this as well. 

FRANCESC: Yes, we have the Episode 81 where we talked with Francis Perry, and we talked about this. So it's basically same solution, but at that time it was about, well, I have a managed instance group. So you could have used an IP range because you could define that. But with Cloud Functions you cannot do that anymore. 

Yeah, for Cloud Functions it's actually pretty easy. Gabe did this yesterday and it worked. So check it out if that's what you're trying to do. 

MARK: Nice. I like this as well because it doesn't matter if you're using, say, Cloud Functions. You could use it for managed instance groups. You can use it for a bunch of other things. 

FRANCESC: You can even use it from App Engine if you want to. 

MARK: So Cloud Proxy gives you a lot of flexibility, but giving you all the security at the same time too, which is also really, really nice. 

FRANCESC: Yeah, that's an important part. Because we try tried just like maybe you can write this 0.0.0.0 slash 32. 

MARK: Which you can. I mean you shouldn't. 

FRANCESC: Actually, it doesn't do it. 

MARK: Oh, really? 

FRANCESC: Yeah, I feel good about it. It's like just open my instance to the world. Not a good idea. 

MARK: It wouldn't let you? OK, well that's good to know. Excellent. All right, wonderful. Well, Francesc, before we finish up today, where are you going? What are you up to? I think you're going on holiday soon aren't you? 

FRANCESC: Yes, by the time this episode comes out, I will be packing for my trip to Spain. I am going to be there for two weeks. And then in September I'm not completely sure yet, but I might go to New York. I might go to Sydney. In October 17th and 18th I will be at Velocity Conf in London, and I will be teaching performance profiling workshop for Go. And after that probably go to Paris. We'll figure that out later. 

MARK: Nice. 

FRANCESC: What about you? 

MARK: August and September is going to be busy. So I'll be speaking at PAX Dev. I'll be at PAX West. I'll be speaking at Gamer Con Las Vegas. I will be speaking at Austin Game Conference. And then I'll be going to one of my favorite places in the world, Strange Loop, just as an attendee to hang out and chill. 

FRANCESC: Jealous. That's going to be awesome. 

MARK: I'm so excited. 

FRANCESC: Cool. Well thank you so much, Mark, for taking the time today to record, yet again, an amazing podcast. 

MARK: And thank you, Francesc, for joining me once again. 

FRANCESC: And thank you all for listening. 

MARK: And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}