+++
audioDuration = "00:32:00"
audioFile = "Google.Cloud.Platform.Podcast.Episode.175.mp3"
audioSize = 46478100
categories = ["MongoDB", "Database", "JSON"]
date = "2019-05-01"
description = "On the podcast today we have a fascinating interview from our time at Cloud Next '19!"
draft = false
episodeNumber = 175
hosts = ["Mark Mandel", "Jon Foust"]
title = "MongoDB with Andrew Davidson"
image="/post/episode-175-mongodb-with-andrew-davidson/images/hero/hero-EP-175.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bjjpcc/episode_175_mongodb_with_andrew_davidson/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast today we have a fascinating interview from our time at Cloud Next '19! [Mark](https://twitter.com/Neurotic) and [Jon](https://twitter.com/syntxerror1) went in-depth with Andrew Davidson about MongoDB to find out what they do and how they do it.

MongoDB is a document database that stores JSON natively, making it super easy for developers to work with data in a way that’s similar to how they think about building applications. The database is scalable, highly available by default with built-in replication, has an intuitive query language, and can be run anywhere.

MongoDB Atlas is a global database service that runs on Google Cloud; it automates deployment and provisioning, and ongoing operations such as maintenance, upgrades, and scaling with no downtime. Atlas is a declarative model to manage your databases easily, is easy to migrate to, and offers advanced features such as global clusters for low latency read and write access anywhere in the world.

In the future, Andrew sees a world where we think in terms of JSON-style documents instead of just tables. MongoDB can help make that happen.
 
<!--more-->

##### Andrew Davidson

Andrew Davidson, a Silicon Valley native who lives in NYC, is the Director of Cloud Products at MongoDB with a focus on MongoDB Atlas, MongoDB's global database as a service. He previously worked on scaling global mapping operations at Google, has a background in physics, and has lived extensively in South Asia.

##### Cool things of the week

* Level up on Android with Indie Games Accelerator [blog](https://www.blog.google/technology/developers/indie-games-accelerator-2019/)
* Berglas [site](https://github.com/GoogleCloudPlatform/berglas)
* American Cancer Society uses Google Cloud machine learning to power cancer research [blog](https://cloud.google.com/blog/topics/customers/american-cancer-society-uses-google-cloud-machine-learning-to-power-cancer-research)
* Efficiently scale ML and other compute workloads on NVIDIA’s T4 GPU, now generally available [blog](https://cloud.google.com/blog/products/compute/efficiently-scale-ml-and-other-compute-workloads-on-nvidias-t4-gpu-now-generally-available)
     * GCP Podcast Episode 168: NVIDIA T4 with Ian Buck and Kari Briski [podcast](https://www.gcppodcast.com/post/episode-168-nvidia-t4-with-ian-buck-and-kari-briski/)
* After school, this teen tracks climate change with NASA [blog](https://www.blog.google/products/earth/liza-goldberg-earth-engine-nasa/) 

##### Interview

* MongoDB [site](https://www.mongodb.com)
* MongoDB Atlas [site](https://www.mongodb.com/cloud/atlas)
* JSON [site](https://www.json.org)
* Virtual Private Cloud (VPC) [site](https://cloud.google.com/vpc/)
* Kubernetes [site](https://kubernetes.io)
* MongoDB Charts [site](https://www.mongodb.com/products/charts)
* MondgoDB Stitch [site](https://www.mongodb.com/cloud/stitch)
* MongoDB University [site](https://university.mongodb.com)
* MongoDB.local [site](https://www.mongodb.com/local)
* MongoDB World [site](https://www.mongodb.com/world)

##### Question of the week

How can I access Google Cloud Shell from any terminal?

* Introducing the ability to connect to Cloud Shell from any terminal [blog](https://cloud.google.com/blog/products/gcp/introducing-the-ability-to-connect-to-cloud-shell-from-any-terminal)
* gcloud alpha cloud-shell ssh [site](https://cloud.google.com/sdk/gcloud/reference/alpha/cloud-shell/ssh)
* gcloud alpha cloud-shell scp [site](https://cloud.google.com/sdk/gcloud/reference/alpha/cloud-shell/scp)
* gcloud alpha cloud-shell get-mount-command [site](https://cloud.google.com/sdk/gcloud/reference/alpha/cloud-shell/get-mount-command)

##### Where can you find us next?

Jon and Mark will be at [IO](https://events.google.com/io/).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to Episode Number 175 of the weekly Google Cloud Platform podcast. I'm Mark Mandel, and I'm here today with my colleague Jon Foust. Jon, how are you doing?" >}} 

JON: I'm doing great. 

MARK: That's good, glad to hear it. I hope it's warmer in New York than it is here in San Francisco. 

JON: I don't think so. It's like 50. It's like 50 degrees right now. 

MARK: OK, that's not particularly warm. So this week we're talking to Andrew Davidson from MongoDB, talking all about the platform, and how people can use it on top of Google Cloud. 

JON: Very awesome. Got to meet him on the showcase floor a little bit earlier. So really excited to talk to this guy. 

MARK: But before we talk to Andrew, we have our usual question of the week where you're going to ask me how can I access the Google Cloud shell from any terminal. It's like magic. 

JON: Yeah. It sounds very interesting. 

MARK: But before we do that, we have our usual cool things of the week. 

[MUSIC PLAYING] 

Jon, why don't you go first? I know you have a good one. 

JON: Sure. We are announcing the Indie Games Accelerator, which is a program that is accepting the top indie developers and flying them out to our Google Singapore office, where they will attend a program that helps them manifest their actual game and get ready for Google Play. 

MARK: Very nice, very nice. As we both know, we both love games. 

[VIDEO GAME SOUNDS] 

JON: Yeah. 

MARK: Exactly. I want to highlight a project that was started and worked on by one of our team members, Seth Vargo. It is a project called Berglas. I'm going to assume I'm pronouncing that correctly. It is an open source project that is a command line tool and library for storing and retrieving secrets on Google Cloud. 

So basically, if you just want a really nice, wrapped up tool for taking things like passwords, things that are secret credentials, things like that, encrypting them with KMS, storing them, retrieving them, that kind of stuff, Berglas is for you. You should check it out. We'll have a link in the show notes. 

JON: Moving on, we are talking about the American Cancer Association using Google Cloud to empower their cancer research. The study accepts a little bit more than 184 men and women and looks into their height, weight, demographic characteristics, personal family history. And they use this data to actually help analyze breast cancer tissue samples and other things that they are trying to fight. Because, you know, cancer is one of the leading causes of death in America. 

MARK: Awesome work. So our good friends NVIDIA, we've had a recent episode talking about their T4s back in February, Episode 168. But the great news is the T4 is now generally available. So if you have particular needs around high performance computing, machine learning, training and inference, data analytics, graphics, et cetera, you can now take advantage of general availability of the NVIDIA T4 GPU. 

JON: And I think it's generally available in roughly around eight regions right now. 

MARK: That seems about right, yeah. 

JON: And to wrap things up, this is a really cool story. There's a 17-year-old scientist who's interning at NASA, named Liza Goldberg, who's actually using Google Earth Engine to analyze forest change at a global scale. So she's tracking climate change, which is really awesome. 

MARK: Very, very cool. Inspirational. 

JON: Yes. 

MARK: Excellent. Well, why don't we go chat with our buddy Andrew, and he can tell us all the things about MongoDB. 

[MUSIC PLAYING] 

JON: Welcome. We are joined today by Andrew Davidson from MongoDB. Hey, Andrew, how's it going? 

ANDREW: Doing real well, thank you. Good to be on the floor of the Google Next Conference Expo. 

MARK: Awesome. 

JON: Awesome. You want to tell us a little bit about yourself? 

ANDREW: Sure, yes. I'm Andrew Davidson. I'm the Director of Cloud Products for MongoDB. We're a company with a global headquarters in New York City, but we're all over the world. And I live in New York, been there about six years now with MongoDB. But I'm from the Bay Area originally, so I'm really happy to be getting my fill of burritos while I'm in town. 

MARK: Nice. So that's a lengthy title you have there, Director of Cloud Services. What does that mean? 

ANDREW: Yeah, I mean, I primarily focus on MongoDB Atlas, which is our database as a service from a product perspective, so ensuring that what we're building is a great experience for our customers, giving them a global database as a service on GCP for MongoDB. 

JON: As a former New Yorker, welcome. Well, actually, what is MongoDB? Because a lot of us haven't actually touched MongoDB in a while, some of us. So yeah, feel free to tell us what that is. 

ANDREW: Sounds good. Yeah. We talk to folks who range the whole spectrum of-- I used MongoDB n years ago, and my experience of that was probably something that was this thing I could download and I found online or on some tutorial, like, back in 2014. To folks who are-- 

JON: That's kind of accurate, actually, but yeah. 

ANDREW: There's those folks. And then there's folks building mission critical applications on MongoDB today, who know it kind of inside and out. And then there's folks who haven't used it all, and they've just been using relational databases, table-based database their whole life. So MongoDB is a document database. 

And basically the reason why it took off, the reason why it's just been so popular, really the core reason is it just stores natively the JSON data model, which is what developers love. They take their objects right in their code, and they get to write them directly to the database. They don't need that object relational map anymore. They don't have that impedance mismatch. 

And then with that JSON data, which is the new standard across the board, with MongoDB they can index into any of the fields, into any of the arrays, subdocuments. So they don't give up any of the rich queryability that they need to build modern applications. 

MARK: Nice. Is that what you find, generally speaking, why you see customers coming to, like, NoSQL in general? Is it that added flexibility? Is that kind of what's going on there? 

ANDREW: That's a great question. We don't tend to use the term NoSQL. I'll tell you why in a minute. 

In my view, NoSQL is kind of-- a lot of people, when they hear that, I think they think of a specific kind of database called key-value. And key-value is kind of a subset of what MongoDB can do, because-- it's a simple naive document where you just index on one field and look up on it. That's essentially key-value. But the ability to also be able to index on any compound set of fields, et cetera, makes it a much more rich structure. So document kind of becomes the superset of key-value and something more like our traditional table-based databases. 

The reason that's important is what drove the adoption of these NoSQL databases over the last 10 years-- 

MARK: Although you don't use that term. 

JON: Yeah. 

ANDREW: Well, when I say "these," I'm talking-- 

MARK: Oh, you mean broadly, yeah, OK. Go. 

ANDREW: What drove the adoption was basically scalability and availability requirements forcing us to break away from traditional, monolithic, table-based databases. So a lot of us mentally, when we hear NoSQL, we jump into the idea of super scalable key-value stores. But all of a sudden, with key-value stores, you give up all the queryability. So you end up doing a ton of ETL into relational systems just to kind of maintain your reporting, et cetera. 

MongoDB is this perfect sweet spot. You've got that JSON data model we talked about. You've got the scalability that comes from a distributed system, comes from horizontal scale-out with MongoDB sharding. You've got the high availability that comes from the distributed system, replication built in, fault tolerance, auto failover. You've got the ability to move the data and have it be where it needs to be, closest to users. So you've got data locality latency concerns. 

All of that you can only do with the distributed systems. You need a modern database for that. And then you've got the ubiquity of being able to run it anywhere, ranging from the developer laptop to corporate data center to Google Cloud on MongoDB Atlas as a service. So I think we're uniquely positioned in the market to have all those things. And that's what's just driving modern application developers for general purpose workloads. 

JON: So you just mentioned Atlas. And I know that we have just announced our partnership with MongoDB. You care to talk a little bit more about Atlas for our listeners? 

ANDREW: Sure. So MongoDB Atlas is a global database as a service for MongoDB. It's elastic, meaning you can scale at any time, vertically, horizontally, with no downtime. It's very much a declarative model. 

So what we've kind of seen is this proliferation of application developers are moving to a model where they're breaking everything up into microservices. And each microservice in the new paradigm will typically have its own database behind it. And what that means is there's kind of a proliferation of large numbers of databases, more than ever before. You don't just kind of have that one large monolith database someone's maintaining in the middle anymore. Instead there's dozens of them around the shop, doing all kinds of little services to massive back ends for the core of the application. 

What that means is you need to be able to abstract away all of the overhead concern, frankly, plumbing that goes into managing not just databases but everything underneath them-- the infrastructure, the cloud instances, the operating system, the networking security configurations, and all of the rest-- and instead have it be encapsulated in just declarative, API call ready, descriptive. I get a cluster now when I want it. Snap my fingers, and I'm in app dev, and I get my database. That's the model for Atlas, and it's just exactly what folks expect today. 

But a lot of MongoDB users don't actually know MongoDB Atlas exists. And they're kind of still doing the traditional model of-- I download MongoDB, the piece of software. I install it on my Google Cloud instance. And then I have to manage that. So one of the main reasons I'm excited about this announcement is we'll get the awareness out. All of our MongoDB community of users out there, for them to not know that Atlas exists, and that they can easily live migrate into it and suddenly get all the benefits of being in the modern world of true as-a-service at the data tier, it's a game changer for them. 

MARK: Actually, you said something really interesting there, just real quickly. You said that you couldn't migrate. Is there like easy migration paths? Because I've done that. I mean, I was spun up for like three or four VMs. I'm running replication across them or however I want to set it up. And then if I want to go from that to Atlas, is that an easy journey? 

ANDREW: Great question. Yeah, so it's a very easy journey. So you'd spin up an Atlas cluster. You then click into our live migration. And basically from there, you can connect to a MongoDB cluster that's running in your own self-managed environment on GCP, or you can connect to your environment on the data center on prem. 

And basically we're going to pull the data over, do the initial sync, and then we're going to apply all the changes that have happened since the start of it, get you caught up in terms of the operation time. Once you're caught up, you can literally just bounce your app servers pointing at the new connection string, and you're over. 

MARK: Does that mean then you can do hybrid cloud too? 

ANDREW: So MongoDB is very much built for that world. You can run it in any context. I wouldn't say that an Atlas cluster can span both Google Cloud, for example, and on prem exactly. But it's more like you can have clusters in both contexts and use MongoDB in the same way in both places. 

MARK: That makes sense. 

ANDREW: Consistently. 

MARK: That makes sense. 

ANDREW: It's the same API for the developer, essentially, no matter where you're running it. 

JON: Gotcha. So I happened to stop by the MongoDB booth, and I got to talk with the very, very friendly folks over there. And one of the things that came out of our conversation was the mention of global VPCs. So I was wondering if you could tell our listeners a little bit more, although, I found out about it at the booth. 

ANDREW: To be completely honest, we love Google Cloud Platform. We're big fans of it. We've been close partners for really the last three years, when Atlas launched three years ago. And this announcement that came out this week about our much deeper partnership is just a continuation of that. And one of the reasons we've always loved Google Cloud is the nature of the global VPC, which, frankly, the other cloud platforms just don't have. 

MARK: Can you explain what that is for people who don't know? 

ANDREW: Basically, it means that you can, inside of a virtual private cloud, inside of a virtual network, as a Google Cloud user, you can easily build your networking across any set of regions around the world. You don't have to set up, frankly, a VPC per region and figure out how to connect them all to each other, which is like an end-to-end many challenge. Instead it's just one big network environment globally. 

And the reason why we find that really compelling and symbiotic with MongoDB Atlas is that we specialize in doing something called global clusters. A global cluster is a cluster that essentially has different zones around the world that can take writes inside of the same cluster. 

So I might have my US portion of my global cluster, my European portion, and my Southeast Asia portion. And customers in the US, for example, and Canada, and nearby, their data will automatically read and write to the US portion of the cluster. European data will read and write to the Frankfurt portion, let's say. And the same Southeast Asia customers will read and write to Singapore. So the data doesn't have to leave the region, and it gives you in-region latencies. 

Now, that's super powerful, and it's something that we have in Atlas. It's easy to configure that. And actually, literally the way you use it is you define in your document, in your schema, you put a little location field that describes the country of where the client is, and that's where the document goes in the cluster. Simple as that. That's fine and good. But the question is, can our customer actually use this? Can they connect to it easily and build their app tier on top of that database? 

MARK: Yep. 

ANDREW: On Google, it's so easy, because all they have to have is one global VPC on their app tier as well. They can set up their app instances all over the world and have them connect to that Atlas cluster, which is simply one VPC peering connection into GCP, and we're good to go. 

MARK: That's amazing. That global cluster, is that specific to Atlas, or is that-- 

ANDREW: Yes. So you could do that yourself with MongoDB. I mean, this is-- ultimately, we're using capabilities that the core database engine has. But it's just the epitome of-- 

MARK: It's just easy. 

ANDREW: Yeah, if you do it yourself, there's so much setup, and it's just all that stuff that nobody wants to be doing anymore. Because it's far removed from what matters to their business, their customers. 

But being able to build in-region latency experiences for a global audience, we see that as a very compelling thing for more and more customers who, for a long time, have gotten away with providing excellent experience for US customers, and maybe not-- OK for Europe, and then sort of, rest of world, we'll figure it out later. Increasingly, it's like, no, these are huge economies growing fast. We can't afford to deprioritize them. Let's give them great experience. 

We've got amazing adoption on Atlas in countries like India, I think. Some of the largest fantasy cricket leagues in the world, for example, are running on Atlas. And it's just a real testament to how folks can come in on their own, sign up, get going, and reach any level of scale so quickly. 

MARK: No, that's super cool. We've sort of alluded to it a couple of times. But we're talking about that deeper partnership with Google Cloud. Can you tell us a little bit about that, especially for people who weren't here at Next or didn't see the livestreams? 

ANDREW: Yeah. So what was announced by Thomas Kurian in the keynote on Tuesday morning of this week was Google recognizes the strategic importance of openness and of harnessing the open source community, of which MongoDB is a key part at this point. And so as part of that, Google has worked very closely with us, and we're going to continue working very closely to build out a first class experience for MongoDB Atlas native to the Google Cloud console. 

So this is the kind of thing where it's ongoing work to keep making it a better and better experience, initially to be more of a marketplace integration, but eventually, it's going to be the kind of thing where inside of Google Cloud console, you can essentially describe the Atlas cluster you want, and you deploy it. 

MARK: Right. 

ANDREW: So it's all about making it easier than ever. It's all about aligning our go-to-market operations so that our customers don't have to sort of feel like, who should I be talking to? All the incentives are lined up appropriately. And I think it's just a testament that Google realizes it should open up to the community and that that's going to be a win for its customers. 

Kubernetes has been a game changer for Google, because it has enabled Google to level the playing field between the cloud providers, make it easier to move around. And our whole philosophy with MongoDB is that it should be super easy to run your database anywhere consistently, as well. So it's a lot of synergies with the whole strategy Google's got. And we think it'll just make it easier for everyone to migrate into Google Cloud on Atlas. 

MARK: No, it sounds amazing. I guess that means then where like it doesn't matter whether a customer comes to you and they're like, we want to run on this Google Cloud, or they come to us and they're like, we're looking for MongoDB solution. People end up pretty much in the same place. 

ANDREW: It's a win-win for both parties. 

JON: Mark, I don't know if you happened to stop by the MongoDB booth-- 

MARK: I have not had the chance, no. 

JON: --but I actually got to see Atlas in action. And one of the things that really struck me as really amazing was your analytics and your metrics. 

ANDREW: Sure. 

JON: And monitoring your clusters anywhere. So can you speak a little bit more about that for our listeners who will not be able to see that, depending whether or not they use the instance or not? 

ANDREW: Yes, so I'll tell you. You know, everyone on the line, it's really as simple as Google MongoDB Atlas, sign up. You can do a free forever, free tier sandbox anytime. You can deploy your cluster and be up and running in a couple minutes time. Super easy. We've got all kinds of courseware and tutorials to learn how to build an app on it, if you're interested. 

You know, we've got all the bells and whistles you need for a production database, ranging from real-time monitoring to historic metrics to index suggestions based on slow queries. We've got a Data Explorer. So you can go in there and really look at your schemas and update your documents, do anything you need, run queries. But absolutely, MongoDB, our sweet spot has always been operational database, OLTP, the back end of online applications, engagement applications, strategic applications where customers are interfacing. 

But increasingly, folks have needs, of course, to be able to report on and understand what's going on in those environments. And so we've got the ability to spin up-- again, going back to our distributed system-- you can spin up an analytics replica called an analytics node. And you can actually, with true workload isolation, do deep aggregations, leveraging all those same indexes, and do any kinds of reporting you want on top of your online cluster, and truly have it isolated, that same connection string, super easy to set up. And that allows you to not necessarily need to do those burdensome ETL jobs to your traditional, wherever you're going with it. 

But also we've got something called MongoDB Charts, which basically gives you native business intelligence visualization-- 

MARK: Oh, nice. 

ANDREW: --on top of the MongoDB data model. None of the other popular BI solutions out there really excel at the JSON data model. They always kind of have you force that into the tables idea, and you lose the fidelity. Whereas, what we've built with MongoDB Charts is we want to give up that fidelity. And instead, you can unwind arrays and deal with subdocuments in a totally MongoDB-native manner and build all those beautiful visualizations. 

MARK: Do you have some sort of DSL for writing those queries to pull stuff into charts? Like, how do I build charts on that? 

ANDREW: Yeah, so if you deploy MongoDB Atlas, you just click into Charts on the left side, and it's just a native part of the Cloud Platform. 

MARK: Yeah, but if I'm like, oh, I want a pie chart with this data, is there a particular tool that I use? 

ANDREW: It's literally-- we've got a beautiful GUI right there for it. 

MARK: You'd be like, oh, yeah, I just point and click and do stuff. Nice, very nice. 

JON: Also, what seemed very interesting was the ability to shard your clusters. The demo for that was pretty amazing, especially when you have to deal with failovers and everything like that. So can you speak a little bit about that? 

ANDREW: Yeah, sure. So let's talk a little bit more specifically about how the distributed system works in MongoDB. There's kind of couple layers to talk about. Before we talk sharding, which is more about scalability, let's talk about replication, which is about high availability. 

So in MongoDB Atlas, for example, every cluster's automatically minimum three node replica set on the back end. That's simply three replicas, spread across availability zones in your target Google Cloud region, or you can go across multiple Google Cloud regions if you want to withstand full region outages, that kind of thing. 

Now, the way that replication works is essentially between those three, they elect a leader, a primary, we call it, where writes go. And the other two follow that. If that one ever goes down, then the other two among themselves will elect a new primary. So this gives you that high availability that you need, with like a two second auto failover in the event that there's an outage of that primary. 

MARK: Right. 

ANDREW: And this is a key building block that allows us to also do the vertical scalability seamlessly. In other words, if you want to double your throughput because Black Friday is coming up, or your game is super popular, or whatever your reason for scaling up, that's a couple of clicks in the Atlas UI or an API call. 

And what we'll do is actually scale you up in such a way that we'll leverage that distributed system. We're going to do secondary, then a secondary, then a primary, causing one of those quick two-second elections, we call them-- all meaning that, essentially, you have a no-downtime way of scaling up or down at any time. So that's vertical scalability, which is really good for quick reactions to demands. 

MARK: When you say vertical scalability, that's like increasing CPU and memory? 

ANDREW: Yeah, CPU and memory and storage, et cetera. 

MARK: Yep. 

ANDREW: So that's really good for-- just basically I would describe it as I need to quickly scale, especially if I might want to scale back down later. 

Now, there's another kind of scaling, which is what sharding is all about, horizontal scale out. It's not so much about like quick, reactive scaling. It's more for like long term linear scale out. 

So let's say I've got a million new users coming on the platform every three months. Maybe I need a new shard to be added every three months as a result. We can simply do that in Atlas. So you set up your cluster. Every three months you add a new shard. And then basically you're just distributing your cluster horizontally. 

What's going to happen on the back end is subsets of the documents that are in collections, which is kind of like MongoDB's name for what you traditionally might have called a table, those documents in those collections will be spread across the available shards. And there's various strategies for how one selects their shard key, depending on what you want to optimize for, et cetera. But essentially this means that you can go up to any level of scale. 

And that's why for those of you who may have kids on the line, or for those of you who are yourselves addicts, if you're playing "Fortnite" all night, the level of scale that powers the back end at "Fortnite," that's MongoDB. And the reason that's possible is again the sharding, the scale out capability. You just can't do that level of scale without sharding. 

But for a lot of applications, start simple, a single replica set. Vertically scale, and then you can start scaling out when you need to. 

MARK: An interesting, maybe, question on the sharding aspect as well. I assume there are controls in there for like redundancy of data, things like that, basically. So you don't have just like one copy of data on one machine, right? 

ANDREW: So that's what the replication is. In other words, yes. I kind of jumped over that. Every shard in Atlas just automatically is a replica set. That's just a building block you don't have to worry about. So you can have n shards, but each of those shards is always going to be spread across those AZs, Availability Zones, in GCP, or across the multiple regions, if you prefer. 

MARK: Right. So I'm curious what your favorite feature of MongoDB is? 

ANDREW: That's a great question. So I mean, I've talked already about just the fundamentals of the JSON data model. I think a favorite new feature that I would have to mention-- there's two-- one was in MongoDB 3.6, which again, capabilities that folks who used MongoDB years ago just have no idea about, probably. 

In 3.6, we introduced change streams, which lets you follow what's happening, changes in the database, and do all kinds of interesting triggers based on that. On top of MongoDB Atlas, we've got a serverless layer called MongoDB Stitch, and you can do things like triggers and functions based on changes in those change streams and power all kinds of real-time applications that way. 

But then the other one that I have to mention, just because we've been waiting on this for a long time, in MongoDB 4.0, which came out last year, we introduced multi document ACID transactions in MongoDB which was-- 

MARK: That's a lot of words. 

ANDREW: That's a game changer. Yeah. 

People think they need transactions. They oftentimes-- in MongoDB, because we have atomic transaction at the document level, they oftentimes don't need them because you're not spreading your data across tables anymore, so everything changes. You denormalize into a document that describes the business entity. That's the MongoDB model. 

But still, being able to, when you need them, have transactional semantics to be able to change multiple documents together. That was a key building block that went into hardening MongoDB, came out last year. And that's a huge step forward for us. 

MARK: Nice. So what's been also the most interesting, or maybe weird thing, that you've seen people do with MongoDB that you can talk about publicly? 

JON: Of course. 

ANDREW: Yeah, I mean, I have to search my mind on that one, only because there's so much. It's absolutely incredible to have the scale of customers that we've got. Like, Atlas alone has got about 10,000 customers, 400% year over year growth. But I kid you not, we have 300,000 users of our free tier. Look at the MongoDB community at wild, it's hundreds of thousands of MongoDB users doing all kinds of stuff. So it's more like every day I'm exposed to millions of different use cases for MongoDB. 

And it's everything under the sun, ranging from, like I said before, powering your most popular game in the world, "Fortnite," to fantasy cricket leagues in India, to a tier one banking application that powers your mobile device-- that's running on your mobile device. Some of the more interesting use cases range from-- basically, think about the apps that you know and love the most, think about like dating apps, think about things that are really about engaging your real life, making your real life more fun and interactive with other people. I think some of those are our work. It's really interesting some of the IoT applications where folks have devices out in the real world that do all kinds of interesting things and bring it all home. Those are also quite interesting. 

JON: So you mentioned community. I was wondering, what kind of support does MongoDB give for their community? 

ANDREW: Sure. I mean, MongoDB has just enormous community. We've got these community created MongoDB user groups, which happen really in cities all over the world. I invite everyone to check out their local MongoDB user group-- I'm sure you can find it on Meetup-- and go in there and just connect with the local folks. 

We've got something called MongoDB University, which has over 1 million, literally over 1 million registrants, if you can believe it, which is going to provide on-demand video-style coursework for folks to learn about MongoDB, whether they're Python developers, node developers, Java, or coming from a DBA background, all kinds of courses there. You know, there are incredible tutorials, documentation. We focused a ton on all of that stuff. 

We recognize that we're in a long term secular shift, a multi-decades, secular shift away from a world where we think in terms of tables, to a world in which we think in terms of JSON style documents, and that we need to continue to help everyone evolve how they think. And it doesn't happen overnight. So we really focus on so much of that. 

We do a MongoDB roadshow, conference style, called MongoDB.local, which run in cities all over the world. There's one of those happening every few weeks. And then we have our big annual conference MongoDB World in June in New York City. 

Let's talk a little bit about that secular shift that's happening, because I think it's controversial to kind of say we all came up on table-based databases. And we're going to start seeing it shift, I think, across the board towards JSON rich structured data-style databases. It's controversial, because we're all hardwired to expect table-based databases. 

Now, I'm going to argue that the reason table-based databases were introduced, and why they have become ubiquitous, is that if you look at their origin back in the 1970s, at that time, the key problem table databases was solving was that storage was the key cost bottleneck in computing. You could throw as many people at a problem as you wanted, but you needed to optimize for storage. So it was important to normalize everything as much as possible to just simply reduce storage footprint. 

Flash forward to 2019, I always ask people this, what do you think the primary cost, or just what is the primary bottleneck of today? 

MARK: Well, I don't want to answer wrong. I'd feel bad. 

JON: Me too. Let's see. 

ANDREW: People have all kinds of different answers. But I would argue the key bottleneck today is our minds, particularly developers' minds. 

MARK: OK. 

ANDREW: So if a developer can feel superpowers by using a data model that has no impedance mismatch, database that has no impedance mismatch with the data model they already use natively in their code, they can do a heck of a lot more, faster. And when storage is, frankly, commoditized very cheap, everything has switched. 

So it's not that this change happens overnight. There's just so much inertia. I mean, databases are not things that change fast. It's a huge cost to refactor. And there's no way all these table-based databases are just going to become MongoDB. I mean, that's not going to happen overnight. You know, we're realists. We recognize that maintenance mode, status quo applications, they're not going to change. Even if they move to the cloud, they're not going to be materially changed. 

What's happening is folks are looking at their applications, and they're moving to modern databases like MongoDB for applications that are on the cutting edge of what matters to those businesses. Whether they're upstarts trying to disrupt, or they're established companies that have a strategic business initiative that they know they need to thrive on or else they will be disrupted. Those are the apps where they need to benefit from the modern tools of agility that developers can wield like MongoDB. So it's sort of this-- we're going to see it adopted more and more. But the cool thing is it's being adopted in the most exciting applications, not in those status quo ones. 

So to answer your question around someone who's thinking about making the shift from table-based databases to MongoDB, my suggestion is-- it sounds scary, but all you need to do is look at your code. So if you're a Java developer, or a Python developer, whatever it is, look at your code. Look at your objects. Imagine if you didn't have to have an object relational map, and you could simply take that object, write it directly into the database. Index on any field in that database, so you can query it however you want later. And when you read it back to the database, it's simply your object again, using MongoDB's built-in drivers for all the programming languages. 

It's really as simple as that. It's all of a sudden, it's not that scary. It's like, there's actually not much there. You're just going directly to the database instead of going through that mapping layer that introduces this traditional pain. 

Now, folks are scared of this too, because there's so much that has gone into integrity and schemas. And people really, for good reason, have built mature applications over time with a lot of controls in there, and they can get scared of adopting MongoDB, like it's going to be a Wild West of schemas. And that's where I would say, we have something called JSON schema. So you can control your schemas in MongoDB if you want to, but with the full richness, flexibility, and expressiveness of JSON. Again, it's just all the benefits of what our modern tool chain looks like. 

MARK: Fantastic. 

JON: I'm not going to lie. Your speech on bottlenecks and databases makes me believe that pretty soon there will be something called Davidson's law. 

ANDREW: Cool. 

MARK: So what can people expect from MongoDB in the near future? Like are there any cool and updated new features coming soon? 

ANDREW: There are always cool and new features coming soon with MongoDB. Generally, I don't like to share what's coming in this forum, because we like to-- 

MARK: So, ongoing investment, as they say. 

ANDREW: I'll be honest. We're a public company now. You know, we've got these incredible public numbers that everyone in the world sees. And as a result, there's things I can't share. But I can tell you that you should always stay tuned, particularly. Traditionally, we've made our biggest announcements at MongoDB World, which is happening this June in New York City. 

JON: And is there any way we can follow online? Say a newsletter or something we can sign up for to find any more news? 

ANDREW: Absolutely. You can follow us on #MongoDB, of course, on Twitter. You can really sign up on any of our websites. 

But my main suggestion for you is just sign up for MongoDB Atlas today, particularly if you're a developer out there, and you just want to give it a go. Five minutes to get started. Have a "hello, world" experience with MongoDB in the cloud, free forever, free tier on GCP. We have free regions all over the world for you to try, all the tutorials you need to get started. And have that "aha" moment with MongoDB, so you get what's going on. And I think you'll immediately see how you can use it to solve problems that matter to you. 

MARK: Fantastic. Well, thank you so much for joining us here at Next in the Podcast House. 

ANDREW: Thanks so much for having me. Great to meet you guys. 

JON: Nice to meet you too. 

So thank you to Andrew Davidson from MongoDB. It was a great and very interesting chat. I had a lot of fun. 

And moving on, we're going to go into our question of the week. 

[MUSIC PLAYING] 

How can I access Google Cloud Shell from any terminal? Mark? 

MARK: That is a very good question, Jon. 

So if there's people who aren't familiar with Google Cloud Shell, this is a really cool little thing that if you go into the Google Cloud console, there's a little icon that looks like a terminal. Click that. And inside your browser, it will pop up a terminal that has like basically all the standard tooling that you need for doing, mm, just about anything, so like G Cloud, Git, Go, Python, et cetera, et cetera, et cetera. 

It's super handy. It persists. If your home directory ever resets, and if you come back to it after a while, it'll bring all the stuff back again, you know, for a period of time. Really, really handy stuff. 

But you might find there are scenarios where you're like, wow, I really wish I could access my Cloud Shell from the terminal just on my local machine. There's a bunch of different tools that are available now. They're in alpha, but you will have links to them in the show notes. If you run G Cloud alpha Cloud Shell SSH, it will SSH into your Cloud Shell terminal, and make it available locally, basically through SSH, which is super, super nice. 

You can also use the G Cloud alpha Cloud Shell commands to SCP files up and down. So if you want to bring local files to the machine, or bring them down as well. 

But the thing that gets me actually really excited is that the G Cloud alpha Cloud Shell command has a Get Mount command. So if you're running Linux or Mac OS, and basically anything that can support SSHFS, it'll give you the command to mount your Cloud Shell locally using SSHFS. 

I think this is super cool. Because maybe if you're running on a machine, maybe it doesn't have as much power or maybe as much network bandwidth as you would have running on GCP itself in the Cloud Shell environment, what you could do is mount your directory locally. Use your local tools to edit those files. And then run your commands to, say, dock or build something, or pull down things off the internet that might be really large. Do that in the Cloud Shell environment, and then have access to that, but still have your local tooling as well. I think that's super cool. I'm very excited about it, so I want to give it a shot. 

JON: Yeah, it sounds pretty cool. And I can tell from the excitement in your voice that you're about to start playing with it right after this. 

MARK: Probably. Awesome. All right, well, Jon, before we wrap up today, where are you going? Are you doing anything fun in the near future? 

JON: Well, I will be attending my first Google I/O next week. So that's going to be pretty awesome. 

MARK: It is going to be pretty awesome. And I will see you there. I will be there as well, giving a talk. And I think we're both staffing office hours and probably some demo stuff, too. 

JON: Yeah, so if you're around, be sure to come stop by and say, hey we heard your voice. 

MARK: Yup. Will probably be able to find us over in the games area. 

JON: Right. 

[VIDEO GAME SOUNDS] 

MARK: All right. Well, Jon, thank you so much for joining me this week on the podcast. 

JON: Thank you. You know it's always a pleasure. 

MARK: And thank you all for listening. And we'll see you all next week. 

JON: Yup. See ya. 

[MUSIC PLAYING] 

[AUDIO OUT]