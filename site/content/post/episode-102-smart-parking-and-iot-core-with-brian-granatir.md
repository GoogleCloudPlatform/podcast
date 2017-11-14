+++
audioDuration = "00:36:11"
audioFile = "Google.Cloud.Platform.Podcast.Episode.102.mp3"
audioSize = 52328237
categories = ["IoT", "Serverless", "Big Data", "Customer"]
date = "2017-11-08T01:07:49Z"
description = "Brian Granatir comes on the podcast this week to tell us all about the New Zealand company Smart Parking taking advantage of IoT Core and our Serverless products!"
draft = false
episodeNumber = 102
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Smart Parking and IoT Core with Brian Granatir"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/MRyDfWWQHQk"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7bn7l8/episode_102_smart_parking_and_iot_core_with_brian/"
+++

Brian Granatir comes on the podcast this week to tell us all about the New Zealand company [Smart Parking](https://www.smartparking.com)
taking advantage of [IoT Core](https://cloud.google.com/iot-core/) and our [Serverless products](https://cloud.google.com/serverless/)!

This is also the inaugural episode of [Melanie](https://twitter.com/nyghtowl) joining [Mark](https://twitter.com/Neurotic) on the podcast! 

<!--more-->

##### About Brian Granatir

Brian Granatir has been developing for the cloud since the beginning, back in 2007.  He left Oregon and moved to New Zealand to be with his future wife in 2014.  In 2017, he joined Smart Parking to help with the development of their new Smart City platform built on GCP.  Before becoming a developer, Brian spent 3 years as a screenwriter in Hollywood.

##### Cool things of the week

- Demystifying ML: How machine learning is used for speech recognition [blog](https://cloudplatform.googleblog.com/2017/11/demystifying-ML-how-machine-learning-is-used-for-speech-recognition2.html)
- GCP arrives in India with launch of Mumbai region [blog](https://cloudplatform.googleblog.com/2017/10/GCP-arrives-in-India-with-launch-of-Mumbai-region.html)
- Cloud SQL for PostgreSQL adds high availability and replication [blog](https://cloudplatform.googleblog.com/2017/11/Cloud-SQL-for-PostgreSQL-adds-high-availability-and-replication.html)

##### Interview

- Smart Parking [site](https://www.smartparking.com)
- IoT Core [site](https://cloud.google.com/iot-core/) [docs](https://cloud.google.com/iot/docs)
- Cloud Pub/Sub [site](https://cloud.google.com/pubsub/) [docs](https://cloud.google.com/pubsub/docs/)
- Cloud Functions [site](https://cloud.google.com/functions/) [docs](https://cloud.google.com/functions/docs/) 
- Cloud Datastore [site](https://cloud.google.com/datastore/) [docs](https://cloud.google.com/datastore/docs)
- BigQuery [site](https://cloud.google.com/bigquery/) [docs](https://cloud.google.com/bigquery/docs)
- Google Data Studio [site](https://cloud.google.com/data-studio/) [docs](https://support.google.com/360suite/datastudio/?hl=en#topic=6267740)

##### Question of the week

How do I configure a PostgreSQL Cloud SQL instance for high availability?

- Configuring an Instance for High Availability [docs](https://cloud.google.com/sql/docs/postgres/configure-ha)

##### Where can you find us next?

Mark will be Montreal in December to speak at [Montreal International Games Summit](http://www.migs17.com/en/home/).

Melanie will be speaking at [QCon](https://qconsf.com) is San Francisco next week!

{{< transcript "MARK: Hi, and welcome to Episode Number 102 of the weekly Google Cloud Platform podcast. I am Mark Mandel, and I'm here with my colleague Melanie Warrick. Hello, Melanie. How are you doing today?" >}}

MELANIE: Hi, Mark. I'm doing good. How's the jet lag treating you? 

MARK: It's not too bad. Just got back from Australia last week. Melatonin is wonderful. It helps remarkably. 

MELANIE: Yeah, I definitely can find there's some benefit to that as well as sunlight, getting lots of sunlight once you get back. 

MARK: Absolutely. Cool. So this week we have a wonderful interview with Brian Granatir. He's come to talk to us all about Smart Parking, IoT Core, serverless, all sorts of amazing, cool stuff. 

MELANIE: Yeah, I'm excited actually to hear this interview because I think this is a problem that-- it seems so obvious that technology can help us with. So it's great that we have him on. But something to note for everybody is if you didn't catch this from last week, Francesc is still doing the main interviews. Those have been prerecorded for the interviews that are going on through the rest of the year, while I'll be helping with the intros and outros up until the end of the year, and then we'll be taking on the main content from there. 

MARK: Awesome. I'm so excited, so glad to have you. 

MELANIE: Yeah. So don't be surprised or shocked if Francesc is still there. 

MARK: The ghost of Francesc. 

MELANIE: I know. That's good. 

MARK: Excellent. And then after the main content, we have our question of the week. We'll be talking about how do you configure a Postgres Cloud SQL instance for high availability. But before we get into all that, why don't we talk about our cool things of the week. Melanie, did you want to go first? 

MELANIE: Sure. I'll start with a couple. I'm going to mention that they've got this article that's out there on the Google Cloud Platform blog, and it talks about how machine learning is used for speech recognition. It's kind of a nice overview and touches on just looking at wavelengths, applying Fourier transform, also using hidden Markov models. Not Mark as in Mark who's speaking, but Markov. 

[LAUGHTER] 

MARK: And it has a pretty diagram that I can click things on that-- 

MELANIE: Yeah, there is a nice diagram. And the link will be provided on the GCP podcast blog. 

MARK: Excellent, cool. We should probably make note of the fact that GCP now has a whole brand new region, which is pretty amazing, in the Mumbai region. So another great spot in the APAC region. They have availability for App Engine, Compute Engine, Container Engine, Dataproc, Data Lab, a whole bunch of other stuff as well. But the really cool thing I think for that area is that you're able now to pay in local currency as well. So now if you want to pay for Google Cloud Platform products, you can do so in rupees. 

MELANIE: And also it definitely is a value from a latency standpoint. 

MARK: Absolutely. And there's definitely so much cool tech going on in that region. So it should be really, really, really exciting. 

MELANIE: Definitely. 

MARK: Awesome. Finally, we have high availability and replication for Cloud SQL for Postgres. That was definitely a missing feature for a little while, and a lot of people gave us feedback on that. So if you need failover or you want to be able to set up read replicas for your Postgres instances, that is now available for you to take advantage of on Google Cloud Platform. 

MELANIE: It'll be fun. All right, well, I think it's time for us to get into the interview. 

MARK: Yeah, let's go talk to Brian. 

FRANCESC: I am very excited today to welcome Brian Granatir, senior software developer and technical lead at Smart Parking and also owner of six dogs, living in New Zealand but from Oregon. Hello. How are you doing? 

BRIAN: I'm doing wonderful. Thanks for having me. 

FRANCESC: Thank you for joining us. So before we get started talking about Smart Parking and how it is to be a developer down there-- not in Australia this time, but in New Zealand, why don't you tell us a little bit about yourself, what you do, who you are. 

BRIAN: Yeah. So like you said in the intro, I'm Brian. I've been a software developer for a long time, probably since the beginning of this whole cloud thing. So my original beginnings were with Hewlett Packard and did some work there and then transitioned over here to New Zealand, and I've worked with a couple of companies here. And like you said, proud owner of a large, massive pack of dogs and proud to be a kiwi. So that's kind of the short/long about me. 

FRANCESC: Cool. All right, well, why don't you tell us a little about Smart Parking-- or I should say parking. Oh, God-- I'm used to hanging out with-- 

BRIAN: Smart Parking. 

FRANCESC: Smart Parking. 

BRIAN: Smart Parking. 

FRANCESC: Make sure the accent's coming out. Why don't you tell us a little about Smart Parking? And what does it do? What's it all about? 

BRIAN: Yeah, so Smart Parking is a company that develops parking technologies. So for most of our clients, that's in-ground sensors or what we call camera gateways. And we've been developing that for years and years now, and we have installations in New Zealand, Australia, the UK, Dubai, Singapore, and a few other places. I can never keep track of all of them. 

And so we've been working on these for years and the services and the mobile apps and everything to support that. And then at the start of this year we began our new endeavor, which was to create a smart cities platform. And what the goal of that is to take all of these different devices and messages that you might get from a city, be it traffic, parking, weather, energy grids, lighting, and kind of bring them all together, kind of connecting the IoT of things together into one platform and then driving meaning off of that. 

FRANCESC: Cool. I'd love to dig more into what actually the Smart Parking stuff is. You said you're doing analytics. Is it just like who parks where, what, why? Or is it realtime stuff that when people come to a car park, they can be directed to free parking? This actually sounds really cool. So I'm super curious about what it does. 

BRIAN: Yeah, definitely. Yeah, so what we do is we offer never services. So the one that's very common is sometimes you'll go to a parking structure and they'll tell you there's 12 bays available on the second floor, but there's 150 bays available on the third floor. And our sensors are detecting those vehicles arriving and going. 

They also help with enforcement. So very common in downtown areas or near government buildings, they'll put in our sensors and say, well, you got 30 minutes. And then after you got on for 30 minutes, we can-- we can let an enforcement officer know to go over and ticket the person. So sometimes when you get those tickets, you can curse our names. 

But then also we offer a variety of other services. Like I mentioned, we do have a mobile app that people can use and say, hey, well, I'm driving downtown. I want to find parking near the stadium. Can you help me out? And we'll tell you what the parking availability is in various areas and help navigate the driver to it. 

FRANCESC: Cool. And I'm curious. All of this-- what kind of technology are you using? Are you using the cloud? It sounds like internet of things. Tell us a little bit about that. 

BRIAN: Yeah. So the old platform-- so what we've professionally referred to as Version 2 was all 100% home built. So it's using custom-built devices that are installed underground and custom gateways that broadcast the stuff back to our network services and goes to our servers. We did do a transition of those servers out to AWS. I mean, that was kind of the structure that worked for us for a long time. 

But now with the new platform, we've actually built the whole thing out on Google Cloud Platform, which gave us a whole new set of opportunities. And this is when we started to embrace the internet of things, right, not just our device, but any device that wants to be able to kind of join our party is able to send us the messages, and we're able to aggregate, analyze, and act upon all those different devices. 

FRANCESC: Cool. So how do you do that? 

BRIAN: Well, that's the real magic of it. So the real trick to it is first and foremost you gotta get the data in. So you have to get it all coming to us, and that's where the IoT thing comes in. And there's a lot of different devices out there, everything from R sensors, which are parking sensors in the grounds, to-- there's even trash cans that will tell you when they're too full. There's lighting sensors, the IoT-- the actual devices. 

So we need to get that coming into us, first and foremost. And that's what we use IoT Core for. So Google I think just made the-- they did. They made their announcement to make the public for the beta. We've been using that now for a couple of months. And that has really helped us get the data in. 

Then once you get the data in, that's where you start having to say, all right, how am I going to normalize this? How am I going to take data from trash cans and data from parking and data from traffic to be able to make a picture? So one of the things that we like to do is we like to use examples of what a city might do for this. 

So we might be able to detect, all right, well, suddenly at 9:00 PM we see a bunch of people partying, all the parking's emptying out in the downtown area. Maybe a concert's emptied. In our platform, the idea is that we can detect that and say, hey, well, we see a whole bunch of people are leaving the downtown area. Let's change our traffic lights to help outbound traffic leaving downtown. 

So that's the kind of idea of a smart city, right? Taking data from one thing, putting it somewhere else. Taking the fact that we've detected there's a giant rainstorm over I-5 and what I want to do is then reduce the speeds for everyone there on the digital signs. 

So you have to say, all right, we got the data, we have the goal. Now, how do we get that all to work together? And that's been the kind of magic we've been working on. We've been using an event-driven architecture to do that. So we look at everything as events, and we also use what's called spatiotemporal tagging. So it's space and time. Yeah, there's some amazing articles. I mean, you drop that word in conversation, people like ooooh. 

We use spatiotemporal tagging, and then we use temporal reasoning. Those are all great things. There's some amazing white papers. But it basically comes into the idea that everything comes into us, and it knows the place, and it knows the time. And then what we do is we use the event-driven architecture to make these aggregates and start clumping them together. We make these basically events of events, so without getting too technical, and temporal reasoning-- 

FRANCESC: Get as technical as you like. It's fine. 

BRIAN: Yeah, yeah. Well, I highly recommend that there's some great papers on temporal reasoning out there, and it's actually becoming a really big thing because with AI and machine learning-- which is another thing that we like to leverage-- you start looking at things in the relationship of what happened when. And what you do is you put them in these things called intervals, and intervals are made up of smaller events. So, for example, a lecture could be an interval, and during the lecture I could say introduction, Brian makes a joke, Q&A, and then wrap-up. And that's an interval. It's a sequence of events. 

And then what you can do is you can use those intervals in relationship to bigger and smaller intervals. So you can say, hey, well, an interval could be a work day, which is made up of four lectures and a lunchtime. And then what you do is you start using logic that says all right, well, if I've seen A happen before B but C hasn't happened yet, then I trigger some sort of behavior. 

So it's easy to say those examples. Getting it actually implemented in a way that people can easily-- normal humans can interact with it is kind of the trick. And we've used a couple of methodologies to do that. So that's kind of the overview. Get the data in through IoT Core, do some big old processing with event architecture, do some temporal reasoning on spatiotemporal tags, and there you go, smart city. That easy. 

FRANCESC: OK, so you say get the data in for my IoT Core. Where does that go? Does that go to GCP? Does it go to a particular GCP product or products? 

BRIAN: Yes, yes. 

FRANCESC: How does that part work? 

BRIAN: Yeah, and so this is the part that I-- this is why I was happy to do this podcast, because a lot of this is the magic of actual GCP coming in. So one of the things that we did was when we were sitting there saying, all right, we know what we want to do. We want to get this data in from cities. 

One of the biggest concerns was just the sheer volume of the data, right? Just parking alone, you have hundreds of events per parking spot-- per single lot, per hour, right? Cars coming and going, staying. And our sensors don't send you messages that are just like, oh, the vehicles left. The vehicles come. No, they're actually reporting as often as they get changes in the sensor. So an IR or a magnetic change could be caused by a whole bunch of things. It's sending a message to us. 

So just parking alone, let alone putting in traffic, weather or any other data, is just a huge volume of data. And so this is one of the reasons that we turned to Google. Google's products and services are built to work with Google's problems, right? You're talking Google scale. Cities are pretty big. Not quite Google scale, right? 

So if we can use systems that will handle the entire internet, they'll probably work on cities. They're still pretty big, but not quite as big. So that was the first thing. We said, all right, we want to use Google. But fortunately, Google's different services have best practices baked in, right? They really do. They have this kind of philosophy-- not only did they design it to meet their needs, they also designed it to meet the kind of sciencey side of things, right? That the best practice is baked in. 

So we said all right, let's use Google. That's going to meet our scale. I mean, I'd never done anything with GCP before starting this project. I was an AWS person, did AWS for a decade, loved the-- loved it. And then we said, well, we're going to go try Google for this thing. 

And then you just start putting the boxes together, right? It takes up the-- like I've said, it sounds really, really complicated. But building it's actually really, really fast. So you bring in messages from IoT Core, and then they go into a Pub/Sub. So people who are maybe familiar with the queues that Pub/Subs are love them. The very backbone of what we do, and in many ways is the very backbone of a real event-driven architecture is being able to have these kinds of queues that people subscribe to. They can get notified of events. 

So messages come in, cars left, traffic is going up. We've detected increased precipitation. Those messages come in. They get routed into queues in Pub/Sub, and then the systems that subscribe to it are Cloud Functions. So Cloud Functions are Google's serverless architecture. 

I love me Cloud Functions. They're amazing. If you haven't written anything in Cloud Functions, I recommend anyone who does web services to do it. It's similar to AWS's Lambda. But again, it's built in to kind of deliver this through this massive scale. So messages come in, they get routed out through the queues through Pub/Sub, and then we have Cloud Functions pick them up, and then they start doing their processing. 

They do one thing, and they do one thing really well. So this is the dream, right? You may have heard, we want microservices, right? Everyone's like that's the goal. We want microservices. And I've tried building microservices. Now this is my third attempt, and it is the first time I've actually been able to achieve true microservices. And that's because a couple of things. One, you run these Cloud Functions. They're little serverless functions, right? They do one thing. They do that thing really well. They come online when they're needed, and then they shut down. And so that's the step, right? 

And so our system, which was all that complicated stuff I said, all the fancy word I used, is nothing more than a set of dots connected together that are these little Cloud Functions, and every single one of them, with the exception of one-- which is the one function I hate-- is under 100 lines of code. In fact, almost all of them are under 30 lines of code. They literally bring the thing in, do one thing, and then pass it on. 

And so that's the trick, right, taking a very complicated thing and then breaking it down so everything that comes in our system for the adventure and architecture junkies, commands coming in, we convert them to events. And then we just have things react to those events, right, creating new commands, creating new events, creating new commands, creating new events. 

And the secret sauce comes into being able to find a way to say I'm going to use that geospatial-- that spatiotemporal data. So the time and the location to be able to start grouping together these events and then try to grip meaning from the larger view of what a city is going on, what's the actual living, happening events within the city. 

FRANCESC: Cool. So that gives us a actually pretty specific idea even of how you do what you do. But there is a piece of all of this that I'm actually very interested in. You were saying once we have the data, then we do this. How do you get the data? How does the data go from the sensors to that Pub/Sub? Could you tell us a little bit more about that? 

BRIAN: Yeah, and that's where IoT Core comes in. So this is the thing that was kind of the secret, the thing that kind of unlocked it for us. So previously what we did is we said, well, we're going to get a device, and it's going to send us information. It's going to go into one of our gateways, and we're going to handle it. 

But now with IoT Core we're able to say, well, what we want to do is we want to let any device send us a message in. So IoT Core is basically a management platform for devices. Google has one. AWS's one, I think, is called AWS IoT Platform, for reference. And it fills in this new gap where you say, well, I've got a device, and I need it to get me this message. 

Now, that used to be really painful, but IoT Core gives you the security, which is-- I mean, if I can say, hey, something's giving me the security and it's Google security, so you know it's really good. So they give you the security. They also let you do the device management where you say, hey, I'm going to install a new device. Here are the credentials. It makes the communication. It sets up all the routing. And then you can then start sending messages in and you also have a feedback loop so you can send messages back out. 

So let's say I need to push a firmware update or I need to do something like that, it handles that two-way communication. So I don't know how familiar you are with IoT, but IoT basically consists of sensors, devices, connected to gateways. They may be co-located with the sensor, but that's the thing that's responsible for handling the communication. At this point it just talks to IoT Core. 

There's actually a lot of companies that are making gateways. Intel being one of them and a couple others that you guys-- I'm pretty sure you have a good partner list on the website. They make the gateways that fill in that. So you can say, well, I've got a device over here, but I didn't really think about how I was going to handle the communication. They do gateways. 

Our system, we offer a SmartSpot for our SmartCloud, which is a generic gateway that allows you to say, hey, I'm going to accept broadcasts from any device, package them up, and then send them into the SmartCloud or IoT Core, management's front end or the back, and that goes off IoT Core. 

And then so you basically-- you kind of get this thing. You get devices; they're sending you this data. And I'm sure, like a lot of people, when you first heard about IoT Core-- well, maybe it's just me. I'm kind of skeptical about a lot of stuff, right? When people told me the cloud was the next big thing, I'm like, uhh, that's just servers, guys. But then now I love the cloud. I couldn't live without it. 

Then when they said, oh, here comes IoT, and I'm like, well, IoT-- what, smart fridges are going to connect with my smart shopping cart? It's going to connect everything together, and everything's going to work magically. Well, it's one of those things you're like, it's a pipe dream. Give it another 20 years, right? 

But the introduction of these kind of platforms, these management services, this IoT Core has basically removed that hurdle. Now you can say, hey, I've got it installed. It's connected to these devices. They're getting the security certificates installed through the process of just getting them-- the installation process, and then the data just starts flowing in. And IoT Core allows you to direct that into a Pub/Sub. It's connected directly into the server. So IoT Core allows you to do that. 

So to give kind of assessment of how it went, we started with our own homegrown system. We got IoT Core into the private beta. It took one of our engineers, Ken-- I think it took him three days to transfer everything over from the old system to IoT Core. So we went from using our stuff to using IoT Core, which has Google security, hooks directly into the Pub/Subs, everything, three days, one engineer. 

That was one of the things that just kind of sold me on the whole thing. And guess what, we've had the thing up and running. I haven't touched it since. I haven't done a thing to it. We just installed more devices. We installed more gateways. That's it. And we haven't had any problems. We haven't had anything fall over. We haven't had any issues. It's just worked. It's just sending me a ton of data. And it's that easy. 

FRANCESC: So I'm kind of curious now as well, because I knew nothing about the IoT side of things. I'm guessing-- I'm guessing you have some kind of manufacturing process for building these devices or constructing them in some way. Is there some special hooks into IoT? Like, how do you get the IoT Core thing on the device? I mean, you must have some kind of factory? How does that work? 

BRIAN: Yeah, yeah, yeah. So I mean, we do build-- we do have custom-built sensors for ours, so the ones that we do install. But that actually isn't required. You don't have to actually go this whole custom route. So what you can do is you basically have two parts, right? So part one is the thing that's doing the sensing. So it could be something that detects the amount of particles of bacteria in your fridge to tell you how much your butter's rotten. I don't know. Or it could be a sensor that tells you how many cars are driving over a road, or it could be something that tells you parking. 

You build the sensor. You build the device. And then all you need to do is have something that takes that information, packages it up, and then sends it through. So those are the gateways. So you can be a-- kind of separation of the two, right? You don't have to build both of them. They don't need to be custom. The sensors usually are. But the gateways definitely don't need to be. 

But you can make it be anything you want. So one of my developers-- right now we're prototyping some other stuff, and he just made it so that his webcam is an IoT thing, and anytime a blue object passes in front of it, it detects that a blue object has passed in front of it. We're using Google's Vision API to detect the analysis. So something blue passes in front of it-- one of our developers happens to like to wear a blue jacket. So he walks in front of it. Whenever that camera detects it, it packages up, sends it through a gateway, which it's just self-contained in the code. And it literally hits IoT Core. So his webcam, with a little bit of code behind it, is literally an IoT device designed to detect the presence of blue objects. 

So you could do anything you want for these IoT things. And you don't want to be restrictive, right? If you say, oh, you gotta have a special gateway. You gotta have a special handshake or anything, that's where you start basically making it a walled garden. But you don't want that. 

So our SmartSpots are designed to facilitate what you usually see in cities. You see radio frequencies, right? So you don't get to run wires, and very often the Wi-Fi stuff is not going to give you the kind of-- well, it just hasn't been deployed across cities. But our in-ground sensors, radio frequencies. These smart trash cans, radio frequencies. So our SmartSpot's designed to sit there and say, well, I'm going to take in any message coming over radio frequencies. I'm going to package it up. I'm going to wrap it with information, and then I'm going to send it to the SmartCloud. 

And then we take it, and then when it gets to the back end where it'll say, oh, that's from a trash can. Let's decode it, and then let's turn it into a command that goes into event and blah, blah, blah, blah, blah. 

FRANCESC: Cool So getting in all this data-- where are you storing it? Obviously, you're doing a lot of analytics and processing and all sorts of other fun stuff over the top. Where does this actually end up? 

BRIAN: Yeah. And that's the other thing. So I think one of the things that you have to also look at is just the scale, like I said, right? Lots of data. So for us what we wanted to do was say, well, we want to be able to make the databases two things. One, we need our databases to be very simple. All right, because I don't want to have to generate and maintain shifting schema. So we went with NoSQL. 

And two, we want to be true microservices, which means that every single one of our little functions, every single service has its own database, right? So if you're telling me, hey, we have currently I think in our connected dots, our Pub/Subs to Cloud Functions to Pub/Subs to Cloud Functions, I think there's currently 89 dots, 89 functions that have 89 databases. 

How do we do that? Well, we use Google's Datastore. So Datastore is their NoSQL thing, and actually in Cloud Functions I can take any object, just literally a chunk of JSON object, and I can just say, save it to Datastore. And it's that simple. It's literally one line of code, and I'm just taking data and I'm putting it in. And then when I need to get it later, I pull it out. 

And so you get this synergy, this connectivity between all of these different services. Pub/Subs feeding into the Cloud Functions. Cloud Functions leading into Datastore. And the best thing about it is it's incredibly scalable and super cheap, like crazy cheap. And that's the thing that makes it so that you can be fearless with your databases. That's the thing that I think I really, really like. When you're sitting there-- and I've used different databases for everything you could imagine across every cloud service. 

But the thing that you want to be is you want to be really fearless. You want to be, hey, I've got a new service. I just spun it up. It does nothing but take in the data that's coming in from a sensor, and it checks if the IR's within a known range. Otherwise, it sends an alert. And I just want to maintain everything it's ever read in a database, right? 

And in old days you'd be like, oh, how many messages is that going to be? Well, I'd probably average around 1,000 a minute, right? Oh, that's going to add up. Maybe we'll archive it. Maybe we're going to do something. But what you can do is you can say, no, actually just put it in Datastore. It's super easy. It's super cost effective. It scales great, and it's just there on demand. 

So that's the things that we love. It's just that one extra thing that I don't have to think about. I don't have to think about maintaining databases. I don't think about, oh, how, are our costs going to go. And I mentioned the cost, right? It's like-- I looked at the numbers for it this morning about some of what-- our cost things and stuff. 

So, for example, on our dev site-- so remember, we use Pub/Sub. So Pub/Sub's the queuing service. We have a third of a terabyte of data on the dev-- on the dev, not the staging, not the production. On our dev one where we're just kind of running test data and stuff there. So we're running through about a third of a terabyte of data going through Pub/Sub there. 

And I think it's like, yeah, $16 to push all that data. So you're looking at that scale, right? You're saying, I'm getting data. I'm branching it like crazy. I mean, everywhere, every event is going into different Pub/Subs so that you can subscribe to these different events, cost of $16 for a month for the data we are pushing through there. 

For the Pub/Subs, so those little dots, the little microservices that do one thing and do them really well-- in September we had 96 million invocations. That was 3,300 processing hours. So we were using 3,300 of our serverless server time. All that together, 130 bucks. So this is literally the data that we're getting from-- just deluges of data coming in from these sensors, telling us their readings every few seconds, every minute, very-- depending on device, costs us 130 bucks to manage-- to process that data. 

And then you say, all right, where are we going to put it? We're going to put it in good old Datastore. We think we had around 200 million reads going through the system. So we're storing all that data. We're reading it 200 million times. We're doing all this stuff, and it costs us a hundred bucks. So we're looking at a sophisticated platform that is built to match the modern architecture, this event-driven architecture, and you're able to do it cost effectively. 

The first time I ever pitched event-driven architecture-- and it comes with aggregates, it comes with all these other things. I was sitting there talking with colleagues, and we're going through it, and we're like, man, to do this right, you're going to have to have a ton of databases. You're going to have to have tons of systems. You're going to have to have tons of these things. The cost is just going to be too much, just like it's a great architecture. It makes a lot of sense, but it doesn't make a lot of sense financially. 

And that was one of the really painful moments being a professional, right? You're like, I got it. I got the secret. I can do this thing using event-driven architecture, but then when you look at it, you're like, it's too expensive. Just go do it the old way. 

But with GCP and Pub/Sub and Cloud Functions and Datastore, you're actually free to make these kinds of new era architectures, these event-driven architectures, all these other ones that are out there, really say, hey, it's the domain. It's the main that's going to decide what I'm going to do, not the costs. And that's really liberating, right? 

So I am literally taking just deluges of data, and I'm just storing it. And I'm not just storing it once. I may store it multiple times, right? I might say, well, I got it in and here's information about the device. It goes to another-- branch to another command, another Cloud Function, and it's seeing the same thing, and they're both saving it. 

And if you told me literally a year ago, hey, Brian, you're going to duplicate, triple replicate all this data, and you're just going to put it all over the place and you're not going to be afraid of it, I'd have been like, yeah, that's a pipe dream, right? No, I'm going to have my one row per device. I'm not going to maintain a time series that has literally every single change in the record, and I'm going to do it across multiple systems, and I'll be able to do it, write it, pull it, access it for $130. Never. Thought it never would happen. But Google gives you that chance. 

FRANCESC: Cool. Sorry, we are running out of time. So I just want to get to one more thing before we finish. 

BRIAN: I blather on, man. 

FRANCESC: That's all right. You're excited. I love it. So you have the data. It's in Datastore. Analytics-- obviously, then, you're talking about machine learning. You're doing all that kind of stuff. Are you doing that directly through Datastore? I mean, Datastore's aggregation is not great. How do you make that stuff work? 

BRIAN: And that's the other thing. So I'm glad you brought that up, because one of the things is you get the data in. You store the data. But then how do you act upon it? How do you get that meaning? How do you say, oh, well, I want to take data on the devices that were telling me parking, and I want to co-locate it with the devices from traffic, right? How do I do that? And this is where BigQuery comes in. 

So BigQuery is probably the granddaddy of all Google services. This is probably the reason most people listen to these podcasts. This is probably the reason most people initially go look at GCP. BigQuery is their true big data analytics system, and it basically allows you to go over-- and I've seen demos and I've done it myself where you can go over terabytes and terabytes of data. You can run these massive queries, and they'll respond in five seconds, just going over these just huge data sets. 

And so that's the key, right? So we get in Datastore, but we also replicate it into two BigQuery. So I have a non-SQL database, which is really easy for me to interact with. It's super easy to do it. And then I find aggregates, which is another event-driven architecture system-- terminology rather that says I'm co-locating certain events to make an aggregate, a view of something. So I take those aggregates, and I put them into an SQL database by putting them in BigQuery. 

And from there, I can go and do these huge, wonderful queries across these massive data sets. And that's another thing, too, go back a year and tell me, hey, Brian, you're going to take data. You're not only going to put it in just tons of non-SQL databases, but you're also going to replicate it in an SQL database just to make it easy to query, because people know how to write a SQL. They know how to do all this stuff. 

So being able to say, hey, you're going to do those two things because it's cost efficient, I just would have said, that's the future. There's no way that's going to happen. But it's right here. We've been doing it, and it's just been amazing. 

And there's another thing that goes hand-in-hand with it, right? You get the data in there, you query it. But how do you make it look good? So Google has Data Studio. Data Studio allows you to say, hey, well, I've got data in BigQuery. I want to make it look like a graph. I want to make it look like a chart. I want to make a dashboard. And it's real easy for people to go through and do it. 

I tell people we had a project manager on our team. So nothing against project managers. Love me project managers. We had a project manager. She sat down, and we said, here's Data Studio. It's hooked into our occupancy parking data, you know, go nuts. And she sat down and learned Data Studio, learned how to query it through our massive data sets. And she made a whole report, and it took her a day. 

And she's not an expert in SQL. She's not an expert in any of these things. She just sat down, connected the dots for the Datastores, made some graphs, and was able to present a report to one of our clients. And you're like, wow. 

So this is often referred to as the democratization of data. This is data that's not only available, but it's not going to cost you an arm and a leg to do a query over it, and it responds in a way that anyone could access it. Not just us super geeks. Project managers, data analysts, marketing, PR people, they can all do it. 

FRANCESC: Cool. So we're definitely running out of time. But that was a very, very interesting conversation. It's really, really nice to hear someone as passioned as you are. Is there anything else that you'd like to add? If not, I actually have a final question for you. 

BRIAN: Yeah, go ahead for the final question. If you ask me to kind of add stuff to it, we'd probably be here another hour. 

FRANCESC: Yeah, so the final question is-- the final question is, I can see in your bio you were a screenwriter for Hollywood for three years. 

BRIAN: Yes, yes. So before I got into computer science, I did go down the route of the liberal arts degree, and I did get a degree in English. I did end up in Hollywood and worked there as a screenwriter for a few years, quite a shift to go from that and then get into computer science, but it was a lot of fun. 

FRANCESC: Makes sense. You're pretty good at telling stories, I can tell that. 

BRIAN: Well, thank you. 

FRANCESC: Well, I guess the time is over. So thank you so much for taking the time today to tell us your story and to let us understand a little bit better how Smart Parking uses so much data in order to do smart choices. 

BRIAN: Yeah, wonderful. Thank you so much. And I mean, I'll just give a shout out to-- while I've got a little chance to just all the people at Google. I like to say that Google GCP is not only the system I use, but you guys are also my DevOps team. You guys are my support team. You guys are also our R&D team. 

I literally have had times where I come back from the weekend, and I will find that my system is running 10% faster. I didn't do a thing. Google improved their Cloud Functions because Cloud Functions are amazing. And of course, I took the credit for everything. So you guys made me look really good. Good work, R&D team. I want to just say thanks so much and keep it up. 

FRANCESC: All of us guys and girls say you're welcome. 

BRIAN: Yeah, yeah. 

FRANCESC: Thank you again. 

BRIAN: All right, cheers. 

MELANIE: All right, thanks, Brian, for the interview. That was really great information, and good to hear that you had such a positive experience with GCP. I will switch us over to asking what the question of the week is. So Mark, you want to run with that? 

MARK: Sure. So we were talking previously about how Postgres now has high availability capabilities where it didn't before. But the question is, how do I actually go about setting that up? It's actually really straightforward. There are APIs. But the simplest way is basically going into your Cloud SQL Instances page. You'll see now that there is a high availability regional checkbox that will be under your instance. It doesn't have to be a old instance. You can create a whole new one as well. 

But basically, yeah, the checkbox is there. You turn it on, enable order backups and high availability, click Save, and you are pretty much good to go. What's also really nice about this is if you want to test what happens when, say, failover happens or your database goes down and it flips over to the backup, there is G cloud as well as an API that you can call. 

Basically you can call gcloud SQL instances failover, and that will take down your primary instance, and then flail you over to your secondary. And then you'll be able to see exactly what your application is doing. This is probably something you want to do while everyone's sitting around, rather than at 3 o'clock in the morning if something goes wrong so that you can be prepared and see what happens. 

MELANIE: Nice. And then I'm going to throw in a second question of the week. Mark, how are you handling Francesc leaving? 

MARK: It's sad. I'm very sad. Francesc and I worked together for two years, but I am very excited to have you on board, Melanie. I'm really quite excited to see what ends up happening with us in the podcast. 

MELANIE: Me, too. And with that, I also said, where are you going to be next week? Do you have any upcoming talks or activities? 

MARK: Yeah, So I'm not going anywhere for a little while. I just got back from Australia, as everyone just heard. But I will be at the Montreal International Games Summit in December, December 11. How about yourself, what are you up to? 

MELANIE: So next week for San Francisco QCon, I'm going to be speaking on a panel about machine learning and AI on the 13th. 

MARK: Oh, very cool. That sounds very exciting. 

MELANIE: It should be. I'm looking forward to it. 

MARK: Wonderful. 

MELANIE: Thanks for getting me started with our first podcast as the intros and outros. 

MARK: And thank you for joining me for an episode, and I look forward to many to come. 

MELANIE: Definitely. 

MARK: All right, and we'll see you all next week. 
{{< /transcript >}}