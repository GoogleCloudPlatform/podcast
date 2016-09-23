+++
audioDuration = "00:39:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.30.mp3"
audioSize = 57150234
categories = ["Analytics", "Gaming", "BigQuery", "Pub/Sub", "Dataflow"]
date = "2016-06-15T01:07:49Z"
description = "Analytics is an essential part of many platforms, but it is specially important for gaming. Today we discuss how Google Cloud makes analytics simpler and super powerful."
draft = false
episodeNumber = 30
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Gaming Analytics Platform with Kir Titievsky, Eric Anderson, and Tino Tereshko"
externalimage = "https://cloud.google.com/solutions/mobile/images/telemetry-01-reference-architecture.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/1kdX8jkX4Je"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4o7ind/episode_30_gaming_analytics_platform_with_kir/"
+++

Analytics is an essential part of many platforms, but it is specially important for gaming.
Today we discuss how Google Cloud makes analytics simpler and super powerful.
[Kir Titievsky](https://twitter.com/kir_titievsky) from [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/overview),
[Eric Anderson](https://twitter.com/ericmander) from [Google Cloud Dataflow](https://cloud.google.com/dataflow/), and
[Tino Tereshko](https://twitter.com/thetinot) from [Google BigQuery](https://cloud.google.com/bigquery/) will tell your co-hosts
[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
how those three products get together to power an amazing analytics solution for gaming.

<!--more-->

##### About Kir

Kir Titievsky is product manager on Google Cloud Pub/Sub which helps users build analytics
pipelines & integrate services, massive and small.  He has come to GCP after building
mobile enterprise apps for Googlers as well as products for advertising & media agencies
at DoubleClick. Before Google, Kir designed advertising recommendation engines as a data
scientist. Kir once took a detour to get a PhD in Chemical Engineering from MIT.

##### About Eric

Eric Anderson is a product manager on Dataflow, a stream and batch data processing service.
Before Dataflow, he started a growth analytics team in Google Cloud. Previously he worked
at AWS and GE. Eric holds an engineering degree from the University of Utah and MBA from
Harvard.

##### About Tino

Tino Tereshko is a Technical Program Manager for BigQuery, the world’s only serverless
analytics Data Warehouse. Before joining the BigQuery team, Tino worked with strategic
cloud customers as a Solutions Architect. Prior to Google, Tino worked in stream processing,
financial analytics, and even spent some time as a quant developer.

##### Cool thing of the week

- BigQuery 1.11, now with Standard SQL, IAM, and partitioned tables! [post](https://cloud.google.com/blog/big-data/2016/06/bigquery-111-now-with-standard-sql-iam-and-partitioned-tables)

##### Interview

- Building a Mobile Gaming Analytics Platform - a Reference Architecture [docs](https://cloud.google.com/solutions/mobile/mobile-gaming-analysis-telemetry)

<img src="https://cloud.google.com/solutions/mobile/images/telemetry-01-reference-architecture.png" width="100%">

- Google Cloud Pub/Sub [docs](https://cloud.google.com/pubsub/overview)
- Google Cloud Dataflow [docs](https://cloud.google.com/dataflow/)
- Google BigQuery [docs](https://cloud.google.com/bigquery/)
- ETL: Extract, transform, load [Wikipedia](https://en.wikipedia.org/wiki/Extract,_transform,_load)
- Apache Beam Project [docs](http://beam.incubator.apache.org/)
- MapReduce: Simplified Data Processing on Large Clusters [research paper](http://research.google.com/archive/mapreduce.html)
- The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing [research paper](http://research.google.com/pubs/pub43864.html)
- Pushing the Limits of BigQuery [video](https://www.youtube.com/watch?v=6Nv18xmJirs)

##### Question of the week

- Google BigQuery Public Datasets [docs](https://cloud.google.com/bigquery/public-data/)
- The first TB is free! [pricing](https://cloud.google.com/bigquery/pricing#query-pricing-details)

{{< transcript "FRANCESC: Hi, and welcome to episode number 30 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with Mark Mandel, my colleague. Hey. How you doing?" >}}
MARK: Hey, Francesc. How you feeling? You've been on a bit of a long journey. 
FRANCESC: Yeah, a little bit sore, you know? Like, biking 600 miles apparently makes you tired. It's weird. Yeah. 
MARK: Who knew? 
FRANCESC: Yeah. Who knew? Very happy to be sitting on chairs that are slightly bigger than the one on my bike. Yes. I'm very happy about that. And today's episode 30, which is a pretty good number. 
MARK: Yeah. 
FRANCESC: A very, very big number, 30 already. 
MARK: I'm proud of you, man. You've done a good job. 
FRANCESC: Yeah, you too. 
MARK: Thank you. 
FRANCESC: Not as good as mine, but pretty good. 
MARK: Thanks. All right. I'll try. I'll bring my game up. I'll bring my game up. 
FRANCESC: Yeah. And to celebrate that we have episode number 30, we're actually bringing not one, not two, but three guests today. 
MARK: It's crazy. 
FRANCESC: Yeah. So we're going to have three different product managers-- actually two product managers and one technical program monitor. So Kir Titievsky from Google Cloud Pub/Sub, Eric Anderson from Google Cloud Dataflow, and Tino Tereshko from Google BigQuery. And we're going to be talking about basically how you can do big data analytics for mobile. 
MARK: Yeah. So there's actually a gaming solution that you could probably apply to several other things on our website that we can go to. And we're going to step through that and look at all the different pieces that enable that and why you should use those. 
FRANCESC: So we're going to be talking a lot about big data during the main content, but also during the question of the week. The question of the week is going to be about BigQuery. But before we even start with those, we have the cool thing of the week. And guess what? It is about BigQuery too. 
MARK: It's another BigQuery point. 
FRANCESC: Yes. 
MARK: Nice. 
FRANCESC: It's BigQuery everywhere. And I'm actually pretty excited about this one because I used to do a lot of SQL. And as you might know, Google BigQuery supported a dialect of SQL that was very similar to SQL, but there were some slight differences. Well, the latest version has standard SQL now. So if you know SQL, you just know BigQuery now. So that is pretty cool. 
MARK: That is pretty cool. I know when I was using it, especially like things around joins and stuff like that. And you'd try and do it, and you'd be like, oh, I can't. And then you'd read the docs, and they're like, oh, just add this extra special little thing that's just extra special. 
FRANCESC: Yeah. 
MARK: And if you didn't know what it was, you were kind of stuck. 
FRANCESC: So now everything is just standard SQL, which is great. I'm very excited about that. 
MARK: That's pretty awesome. 
FRANCESC: There's also support for IAM. So we did an episode not that long ago about it, Identity and Access Management. So you have finer control on who can access and who can do what on BigQuery. And then you were pretty excited about the last one, the time-based table partitioning. 
MARK: Yeah. So you no longer have to actually manually span out your partitions, say, like this is January's data, February, et cetera. BigQuery is going to do that for you out of the box, which just means it's a little less work that you need to do. 
FRANCESC: Yeah. And less work is always better. 
MARK: Yes. 
FRANCESC: Cool. The episode today is going to be kind of long. So why don't we go and talk directly to our friends from the big data? 
MARK: Sounds good to me. 
FRANCESC: Cool. 
MARK: We are joined today by three product managers talking about gaming analytics platform. We are joined by Kir Titievsky, Eric Anderson, and Tino Tereshko. I think I got that vaguely right. Was that vaguely close? 
TINO: You got it. 
MARK: Excellent. 
TINO: Better than most people. 
MARK: I'm pretty excited because this is the most number of people we've been interviewing on the podcast ever, so it's going to be a bit interesting. But I think it's going to go pretty well. So before we get stuck sort of into the meat of it, why don't we get you all to tell us a little about yourselves? I'm going to go based on the order that I have in the document. So Kir, do you want to go first? Tell us a little about yourself and who you are. 
KIR: Hi there. I am Kir Titievsky, and I'm the product manager for Google Cloud Pub/Sub. I've long been trying to figure out how exactly to explain why I'm excited about it. And it finally struck me today. It's that it made networking asynchronous. It's fast but it's asynchronous. You know how the network, you could just call somebody. You could call somebody on the phone, and if they were there, you could have a synchronous conversation. If they were not there, you were stuck. Now, email came along and it made that whole thing asynchronous. So you could just instantly shoot somebody an email or an instant message and it was there if they're on the other side. And the second, if they're not, it could wait for them for days. Pub/Sub did the same thing for just general networking, shipping data around. So that's what I'm excited about. 
MARK: Cool. And what is your location right now? I'm just curious about how many people in different places we have. 
KIR: Oh, this is exciting. I think we've got the entire country represented-- the corners, right? I'm in New York today. 
MARK: Cool. All right. Eric, how about yourself? 
ERIC: Sure. I'm Eric Anderson. I'm a product manager on Dataflow. If it's interesting, I've been at Google for three years now, started on a little data science team, and have been on Dataflow for maybe a year and a half. Let's see. I'm based normally in Mountain View, on my way to New York for some conferences, and currently in Salt Lake City, Utah. 
MARK: Excellent. And Tino, yourself? 
TINO: Hi there. I'm Tino Tereshko. I'm a Technical Program Manager for BigQuery, which is Google's serverless, fully-managed, petabyte-scale, analytics data warehouse. BigQuery is used widely at Google across all of the Google organizations. And we have lots of really exciting customers to speak of as well. I'm out of Seattle. I've been at Google for almost three years, and I've been on the BigQuery team for about a year. 
MARK: Cool. Yeah. And then we are here in San Francisco. So San Francisco, Seattle-- 
KIR: New York. 
MARK: New York, and Salt Lake City, was it? 
ERIC: That's right, yeah. Don't forget it. 
KIR: You left the coasts, Eric. You left the coasts. 
ERIC: It's almost like a layover in between them, though. I'll be there shortly. 
FRANCESC: Very cool. And we have then-- we have Pub/Sub, we have Dataflow, and we have BigQuery. What are the relationships across all of them? 
MARK: Yeah. So we're here to talk about sort of a reference implementation we've had on the website for awhile. Talking about building a mobile gaming analytics platform, which is a solution people can go online. We'll have the link in the show notes for people available. Do one of you three want to volunteer to talk about what this is and how it works? It seems to kind of cut across all three of your segments. 
KIR: Sure. I'll go first. And you guys tell me when I get things wrong. 
MARK: Sounds good. 
KIR: This is Kir. So the reason I got excited about doing this particular podcast, aside from being a loyal listener, is that I recently heard the interview you guys did with the gaming company. It was War of Dragons, right? 
FRANCESC: Yep 
MARK: Yeah. 
KIR: Yes. And they were talking about their pipeline, which looked very much like our reference diagram, which you can find on the Google Cloud site, which looks something like this, for those of you who are not looking at the website or listening. It's a client, be it on your mobile phone or not, talking to a front end server, and then needing to hand over the data for processing to a set of three things. You push the event data to Cloud Pub/Sub, which then gets pulled into Dataflow, where it gets transformed, where it gets massaged, where you enrich your data or strip what you don't need. And then you finally put the results in BigQuery. That's sort of a standard stack. 
MARK: Just before you go any further, do you want to take a step back and say what sort of data are we talking about here? The reference is mobile gaming analytics. But can you give people an example of what sort of data we'd be ingesting? 
KIR: Oh, absolutely. And by the way, I highly recommend those of you who are listening to go back-- I think it would be two or three episodes-- to hear a very detailed account of how this works for this for War of Dragons. But you're just talking about user events, right? Whenever somebody finds that coin, kills the dragon, their score goes up. They bought something. As a mobile app developer or mobile game developer in particular, you're interested in understanding how these events tie together so you can start optimizing your game, right? So you're looking for those gems-- gems of little interactions at work or those that slow down your users. In a way, this is sort of the same story that you might be working on if you're just optimizing a site, right? Think Google Analytics, right? For game developers, this is especially important because it's such a dynamic and competitive field that you have to really understand exactly what your users are doing at any point of the game. 
MARK: Cool. All right. So you've got a bunch of game data coming in-- players doing stuff, maybe beating bosses or levels and stuff. And you need a way to ingest that and then send that on somewhere else. 
KIR: Right. Ultimately, you want to make sure that the game developers and the data scientists on the team, who oftentimes are the same person-- sometimes not, depending on how big the company is-- can actually make sense of this data. And so I think BigQuery is the thing that makes it possible to examine the vast volume of data quickly. But AppStream-- so the combination of Cloud, Pub/Sub, and Dataflow-- are the things that make it possible to ingest the data and transform it as it's streaming. 
MARK: Cool. All right. So it sounds like, looking at the diagram, the first step is Pub/Sub. So my question is, why Pub/Sub? Why is this the first step? 
KIR: So you can think of Pub/Sub as another solution for logging. If you think about the old-school way of doing things, your LAMP stack back in the day, every time you would get a web request, you would respond to the user and dump a record to a system log or Apache log or however you had your setup done. And so then you might go, and you would have a subsystem that would trawl through the logs, put them in some kind of ETL loop. And every so often, you would just sort of ingest the log, put it into a MySQL database. And then somebody on the other end would go and look at the data to try to figure out what's happening. What's happened as we went away from having single stacks to having multiple servers or microservices implementing many of the applications, especially games, because they're so vastly distributed. As soon as you start talking about players playing in different sides of the country, if Eric and I were playing today, we'd have to somehow communicate and synchronize things between a server that's close to Utah and a server that's close to New York City. You're dealing with a system that's not a single stack, right? Something is far away from that disk. So how do you have a solution that looks a little bit like just very quickly writing to log so that you can process these event data later, but that works for a completely distributed set of microservices or just servers? And that's Pub/Sub. Pub/Sub is-- I don't know. A silly example, it's like email or instant messaging for machines. Instead of writing to a log, any machine anywhere in the world can just put a message on Pub/Sub and say, hey, a player just killed a dragon. Done. From there on, the front ends can focus on servicing the users and the back ends can just read those messages from Pub/Sub to figure out what to do with them. 
FRANCESC: Cool. So you mentioned a couple times the three magic words, ETL. Could you explain a bit what those are and what that means for our audience? 
KIR: I'm glad that you consider "ETL" the magic words, Francesc. Eric, do you want to take this one on, since you are in the middle? 
ERIC: Sure. Yeah, yeah. So commonly, this is just Extract, Transform, Load. So you've got data on point A and you want to move it to point B. Maybe move it. Maybe you're just looking to change it. Data is often immutable, and so changing involves moving. So you're going from, in this case, Pub/Sub to BigQuery. You're going to extract it from Pub/Sub, transform it, and load it into BigQuery. But ETL is traditionally more often used when you're moving database to database or file system to database, anytime you're moving data around. 
FRANCESC: Cool. So in this case, we could say that the E in ETL could be Cloud Pub/Sub. That's how you're extracting that information from all the data sources? 
ERIC: That's right. 
FRANCESC: Cool. And what happens next? 
ERIC: Yeah. So this moves us into Dataflow. And this is the T in ETL. We're going to transform the data. You might be asking yourself, why are we transforming the data? There's a lot of things that we could do here in Dataflow. You might be-- we mentioned enriching the data. So you have events, raw events from a user. You may just want to add a location that is found elsewhere. You have the IP address of the client. You could transform that now into a geographical location. You could be joining the data against databases that you have to pull in additional user data to add more color to your eventual analysis. A lot of people are doing schema transformations. Another situation you may hit is if you've got old clients running some version of the game, you have newer clients running another version of the game. They're sending different kinds of events. You could normalize those schemas in Dataflow so that everything that hits BigQuery is in the shape you expect and the shape that's easy to analyze. So I guess those are a few examples of what you're doing in Dataflow. 
FRANCESC: Cool. So that means that basically, Cloud Dataflow, what it's doing is just doing those transformations to be able to then store it in some nice way that you might be interested. What is Cloud Dataflow exactly? 
ERIC: Yeah. So Dataflow is a stream and batch data processing service. It's also a programming model and a set of SDKs. That programming model and SDKs were recently submitted to Apache and now are referred to as Apache Beam. It's an incubating project. But we can get into more of that later. But the service itself is a-- as I said-- bash and stream processing engine. You describe currently in Java, very soon in Python, the transformations you want to apply on data. You describe also the sources you're going to pull from, and where you're going to sync or persist the data when the transformations are over. And this, in the case of Java, JAR file is sent to the service. And the service itself spins up virtual machines in Google Cloud and manages all the complexities of distributed computing that are going on there, including ensuring correctness and fault tolerance. And then, once that data is all persisted to your storage system-- in this case, BigQuery-- we tear down the VMs, tear down the job, and report to you all the logs and statistics that happened during the process. 
FRANCESC: So is it like MapReduce? 
ERIC: Yeah. I could have started there. Yes. So this is Google's MapReduce system, and also a more recent stream processing system, MillWheel, combined under a single SDK. 
KIR: What's really cool about it is that-- this is Kir in New York again-- is that I feel like it works the same way whether it's pulling a single event off Pub/Sub or if you're doing two million QPS. You basically just define a single transformation. In many cases, if you're just looking at a single event at a time, you don't even have to know how many events you're going to process. Dataflow just abstracts all of that for you. Is that right, Eric? 
ERIC: Yes, totally. And maybe taking that even further, part of the reason we went out with building Dataflow, because there's existing alternatives in the marketplace, is the holy grail, particularly with this gaming setup, is recreating the session. You have all these complex events coming in from users all over the place and different situations. They all flood the system. And making sense of that in aggregate is really tricky. Dataflow has built-in primitives to recreate sessions and allow you to analyze sessions, which is typically ultimately what people are after here. We move events from out-of-order into in-order within Dataflow. And then, once they're in order, we then can apply windowing strategies, we call them, to group those events. In this case, I mentioned sessions would be really useful. You can group them by a user session and then perform some analytic function on that user session, like what happened after this event? Or how many of these events happened? What's the average of those events? And then that can all be sent and persisted to BigQuery. 
TINO: I'm happy to add my thoughts on this. This is Tino from the BigQuery team. What Dataflow allows you to do-- and Pub/Sub, of course, as well-- is it really changed the model of how developers look at their game data. Instead of collecting summary events-- things like I just picked up a sword, or things like I just killed a boss-- instead of choosing which events you want to collect and analyze at a future date, this daisy chain of services allows you to look at everything, have a holistic view of your data. And that really allows you to analyze your game from very, very different angles than ever before possible. And the second thing that it allows you to do is imagine what the maps space was before Waze came along. Before Waze, if you had a section of the road and you wanted to figure out, what was the traffic pattern on the road on Friday between 5 and 6 o'clock in the evening, you'd have to run a SQL query and say, generally at that period, it's 15 miles an hour. All right. Let's paint it red. Now with Waze, you have a real-time processing engine that collects the data, pushes it through this ETL pipeline, and feeds it back into the application. And so now with Waze, we know right this moment that is a green section of the road. And you can do the same thing with gaming, right? You can adjust how your games work by feeding the data directly back into the game itself, which really unlocks a lot of possibilities for game developers. 
MARK: Yeah. So you can really adjust your game play on the fly, depending on what events are happening inside that game. 
TINO: Exactly. Exactly. 
MARK: Excellent. OK. And we've got to the E and the T. Why don't we talk a little bit about the L? I'm guessing the L, then, is BigQuery. Would that be correct? 
TINO: In my opinion, the L is the result of loading data into BigQuery. And once data is loaded into BigQuery-- hopefully prepared and clean and nice to look at-- you're able to analyze that data through any pure, ad hoc data scientist exploration mode. You don't have to plan how you want to analyze the data in BigQuery. It gives you the freedom to look at your data in any way imaginable. You can look at historical data going back several years. You can look at data in real time that gets fed to BigQuery through Dataflow and Pub/Sub. And you can look at massive, massive amounts of data. So this holistic, raw data viewpoint is really enabled by BigQuery. You can-- 
KIR: So I think you're talking about the fourth step. There's a letter that we have missed. It should be either P or M-- P for Profit or M for Magic. I don't know which one it is. But I think it speaks to the point that it's not just about the loading, right? It's about being able to make sense of the data in the same place where you just keep it, where you keep the result. 
TINO: Yep. That's exactly it. And BigQuery doesn't require you to think very hard about whether you have keys or indexes, or whether your data sets are too big. You just load your data into BigQuery, and you use plain, regular, standard SQL to analyze it. And because BigQuery doesn't require you to stand up massive amounts of infrastructure, to leverage massive amounts of infrastructure for your analysis, the doors really open up. You can do a whole lot very, very quickly with BigQuery. 
KIR: Actually, that's a point that could be made about all three of the tools we're talking about here. I think we're kind of in this nice Google Cloud, which is managed services. Neither Pub/Sub nor Dataflow or BigQuery require you to provision much. They're services. They just run. If you think about doing ETL in the traditional way, you have to think about the physical machines where this happens. I still vividly remember once decommissioning a mainframe. It was a fun adventure with moving a box on wheels and several people from a data center into a truck. You don't even have to think about that anymore in principle, which in my head is magical in all three of the steps, but in BigQuery in particular. I don't know if-- 
TINO: Yeah. You bring up a really good point. There's this new buzzword that's coming around. It's actually an old buzzword, but it's become reinvented, called serverless. You're seeing this with Google Cloud functions and AWS Lambda. But serverless generally applies to really tiny little jobs that get executed without having to stand up a cluster. Pub/Sub, Dataflow, BigQuery is serverless big data. You're able to analyze big data at scale in any way you want in real time without standing up servers. Serverless big data is really a reality today with these services. 
MARK: Great. Just to recap on some of that a little bit as well, it sounds like the combination of the three is exceptionally powerful. And it sounds like Pub/Sub for ingesting messages at scale, Dataflow for handling stuff in real time, even for transformations, but also analyzing game play and whatnot, and then BigQuery for maybe more after the fact. What can we find out that we don't already think we know or go exploring? Would any of you agree with that? 
ERIC: Yeah, certainly. You've described two ways of stacking these. And these are the ones that Tino brought up already. We could ingest data, apply transformations in real time in Dataflow, and then feed that back into the game loop. Or we could also then-- not or, but in addition to-- we could push that to BigQuery and persist it for soon and future analysis. 
KIR: Totally. Thinking back to my days as a data scientist in ads, which is its own kind of game, I used to work building recommendation engines for ads. What practically happens for you as a data scientist, which would be the type of user oftentimes who is sitting in front of a BigQuery interface, and you're doing ad hoc querying. You're testing hypotheses very quickly. And as you find things that work, you practically push them up the stack. You go and talk to the engineers who write Dataflow code once you find that right combination of levers that need to be pulled. And you start implementing the things that came out of your ad hoc querying in Dataflow. Or if you're not on Dataflow, of course, you're going from whatever your ad hoc solution is to wherever it is that your live code is running. 
MARK: Cool. So I was actually just thinking. So say I am a game developer or some sort of application developer with a lot of interface interaction and a lot of data coming through, and I want to implement this strategy. Should I start by working on, say, the Pub/Sub end? Should I start by just implementing BigQuery and start getting data into that? How much of this should I try and take in one big go? What's the easiest step? Should I go BigQuery, then maybe add Dataflow down the line, and then Pub/Sub down the line? Or should I start with Pub/Sub? What's my entry point here? I'm sure you all have different takes. 
KIR: Yeah. We'll give you three different entry points. 
MARK: Absolutely. 
KIR: I would say, for a game developer, it really very much depends on where your data is today. If you're, like many game developers, using App Engine for front end, you have a fantastic option, which is just cloud logging. You export all of your logs directly from App Engine into BigQuery or Pub/Sub. So I would say there-- again, depending on how you're writing your logs-- you should start with BigQuery, because when you don't know exactly what you're trying to implement, you should start with the ad hoc solution. Look at all of your logs. See what you can find out. When you export raw logs, you have an ability to analyze them very quickly. But because the schema are not applied, because you're not enriching the data, you're not necessarily getting the best out of the data, or your workflow is not necessarily great. It's a bit of a pain. And so if you get to a place-- as I'm sure you will-- where you are seeing some return on that work, where you're starting to get some insights about what the users are doing, right? Swords are good. Pickaxes are not so good. That's where you need to go to the cloud console and say, hey, now let's try this Dataflow and Pub/Sub thing. So you can start publishing your logs to Pub/Sub, and then from there bringing up Dataflow job to analyze them, transform them, apply the schema, and go to BigQuery. I think your third step might be, OK, now that you've taken stuff that you've been dumping to logs and put it through this pipeline, you've gotten comfortable, you can start publishing. Instead of writing to logs and then recovering that data from Google Cloud Logging, you may just publish directly to Pub/Sub. That's a possibility. I think a very exciting entry point for some of the game developers-- and maybe for website and services developers-- actually, really anybody who uses Google Analytics, there's another direct entry point with BigQuery. Is that right, Tino? I was talking about the export. There's one flavor where you get all of your data already parsed and nicely packaged. How does that work? 
TINO: Yes. Google Analytics Premium is an enterprise level offering of Google Analytics, and it comes with daily BigQuery experts. 
KIR: It was pretty sweet. I used it for the last Android app we developed, where we instrumented the app to report all the events. It wasn't a game. It wasn't a game. It was an app for booking rooms. But it was pretty sweet to just have all that data in BigQuery immediately without any intermediate steps. 
TINO: I think a lot of the gaming companies that we see start-- BigQuery is so easy to use and so easy to get started with. We even have public data sets in BigQuery that you don't even need to know SQL to start using them. We pre-built dashboards for our customers to look at. It's so easy to get started with BigQuery. It helps you understand the shape of your data very, very quickly in a very ad hoc fashion. The folks generally try BigQuery first. And then, as their pipelines mature, as they want to go more real time, as they want to enrich the data or create that feedback loop, they start implementing, inevitably, Dataflow and Pub/Sub into the equation as well. That's my take. 
ERIC: And I think what's interesting about what we've said so far about how you set up these pipelines initially and grow them is there's no throwaway code. There's no decision that says, oh, this is how you prototype. And then once you reach scale, you have to throw that all away. And then you do it this other way, which is much more complicated and has fewer features, but it can handle the scale you need. The way you set up your pipeline for scale or for prototype is the same. And in both cases, it's fairly straightforward. Going back to what Kir said about starting out with logs in BigQuery or a Pub/Sub pipeline, in either case, Dataflow logic can be re-used. So you can write a batch job on your BigQuery log export. And then once you pipe that in through Pub/Sub, you can apply that same logic, the same code, to the streaming pipeline. Also, Dataflow comes with a local running solution. So if you want to mess on your laptop from a Pub/Sub or from BigQuery, that same experience works there locally. And then you just push it to the cloud for the scale runs. 
MARK: Cool. So unfortunately, this is a great conversation, but we are running out of time just a little bit. I will go through each of you. If there is anything we haven't covered-- and I'm sure there's a lot-- that you want to highlight or plug, please feel free to do so. And then I think we're going to have to wrap up, unfortunately. Going by order of appearance, Kir, did you want to go first? 
KIR: No. I don't want this to end. Too much fun. No. But I'll say this. I think this notion that there is a service that allows you to connect things in the cloud, it will work like a logging system where you just dump messages into it, and they can be recovered at any point anywhere in the world, is a pretty amazing prospect for me. And just in general, the Pub/Sub paradigm in itself is pretty cool once you start getting into the distributed computing side of computing, which is everything today. And in Cloud Pub/Sub, that's just kind of delivered to you on a silver platter. It just kind of works. So I think I would encourage game developers-- and really anybody who is interested in collecting data from their mobile apps or website apps-- to think about how all the data from the different endpoints and the different services comes together. It's not just plain networking anymore. You've got to have something a little fancier. 
MARK: Excellent. And Eric? 
ERIC: Sure. Thanks for having me. I'm very excited to see what these game developers do. When you have time to devote to actually developing your game and getting insights from your data, and not standing up distributed analytical pipeline systems and babysitting clusters, I think awesome things happen. So thanks for having us. I'm excited to see what people build. 
MARK: Excellent. And finally, Tino? 
TINO: Yeah. Thanks for having me, guys. I will add that if folks want to find out more about what's possible, I would encourage you to look at a YouTube video of the Google Cloud Platform Next, which is a conference that we had in March. One of our awesome customers, Kabam Games-- they make Marvel games and Fast and Furious games-- they spent about 25 minutes discussing how they're using BigQuery and all the other services that we have. And it's a really, really interesting use case. They discover how folks make in-game purchase decisions. What about where is the most fraud comes from? Or if they introduce bosses that are overpowering, how do they discover that? How do they understand their imperfections in their games? And potentially what's even more interesting is that Kabam Games launches a lot of titles. And they're not sure when some of these titles can be small or very, very successful. And BigQuery, Dataflow, and Pub/Sub allows them to not think about scale. They build the same way for one customer as they do for 10 million customers. That's a great luxury for a game developer. 
MARK: Excellent. 
FRANCESC: Great. Well, thank you so much to the three of you for taking the time to share that very interesting conversation with us. 
KIR: Thank you, Mark. Thank you, Fransesc. 
TINO: Thank you. 
ERIC: Thank you very much. 
MARK: All right. Cheers. 
TINO: Cheers. Have a good one. 
FRANCESC: Thank you again to Kir, Eric, and Tino for such an interesting conversation. I learned a lot about it. And I hope that you got excited about the whole idea of putting those three different products together to basically understand better what your application and people are doing with your applications. 
MARK: Yeah. No, I really actually liked it. I learned a lot, particularly about Dataflow. I hadn't really thought about what was possible in terms of the transformation aspect of it. I found that particularly interesting. 
FRANCESC: Yeah. Very excited. Let's see if some of our listeners have some similar story of how they're using it. And maybe you can send us a little bit about how you're doing it, or your questions and comments about it. We're looking forward to that, as always. 
MARK: Absolutely. 
FRANCESC: And why don't we go with the question of the week? 
MARK: Yeah. So this is, I think, an interesting one, especially based on what we're talking about today. Looking at BigQuery, maybe it's something that you want to play with, but you don't have maybe a big dataset of your own. Maybe you're like, I don't have just terabytes of data lying around. It's not something I generally do. So are there datasets available to me that I can just get in and play with and see the power of BigQuery and see whether it's a really good fit for me? 
FRANCESC: Yeah. And the answer, obviously, is yes. I've been using these for demos because it is pretty cool. You can basically just go there and start running queries on huge datasets. And we have a link in the show notes to that dataset. It's somewhere like cloud.google.com/bigquery/publicdata. 
MARK: It's pretty close. 
FRANCESC: Something like that. And you will see that we have a bunch of them. There's like USA Names. So you can see all the different names from the births that occurred in the United States since 1879, which has been quite a while. So you can do analysis, like what was the most common name during a year, or in the '90s, or whatever. You can totally do that. It's very easy. There's also some others that are actually surprisingly interesting, like we have all the stories and comments from Hacker News from 2006. So you can do a lot of really cool analysis based on that. I know that the demo from Next used this dataset to create things, like in what primary language people cursed most and things like that. There was Hacker News. I don't know if GitHub is here. 
MARK: There was some data there from GitHub. I definitely saw that. 
FRANCESC: Yeah. So anyway, there's a bunch of different datasets. And you can definitely check them out. The good thing is that you're going to be able to click there and then go directly to the BigQuery console, where you can start running your queries. 
MARK: And you can do up to-- what is it?-- a terabyte of processing for free. 
FRANCESC: Yeah. I think it's either a terabyte or five terabytes. I don't remember right now, but it's a lot of data. 
MARK: Yeah. So you can totally do that. So it gives you a good chance to really play with it, get your feet wet, and maybe probably find some interesting things happening in some big datasets. I'm seeing there's a dataset here for Dota 2. I'm kind of curious to see what's in there. 
FRANCESC: Hm. 
MARK: Well, excellent. Fransesc, thank you very much for joining me yet again this week. 
FRANCESC: Thank you, Mark. And I guess since it's episode 30 and we haven't done it for quite awhile, should we-- 
MARK: Remind people where they can get in contact with us? 
FRANCESC: Exactly what I was trying to say, yes. 
MARK: Yeah, I know. You've been bicycling for a long time. It's OK. I understand. So. 
FRANCESC: Yeah. So we have a web page. 
MARK: GCPPodcast.com. 
FRANCESC: And not only that, but cloud.google.com/podcast now. 
MARK: Yeah. 
FRANCESC: Yes. So GCPPodcast.com. We are on Twitter. 
MARK: @GCPPodcast. 
FRANCESC: On Reddit. 
MARK: At /r/gcppodcast. 
FRANCESC: On Google+ 
MARK: At +GcpPodcast. 
FRANCESC: And I think that's it. 
MARK: On Slack, there is #podcast. 
FRANCESC: On Slack, yes. 
MARK: And also, they can contact us by email, hello@gcppodcast.com. 
FRANCESC: Great. Well, looking forward to all of your messages regarding these episodes and others. 
MARK: Yes. 
FRANCESC: And talk to you all next week. 
MARK: See you next week. 
{{< /transcript >}}