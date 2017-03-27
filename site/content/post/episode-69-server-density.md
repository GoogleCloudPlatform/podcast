+++
audioDuration = "00:38:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.69.mp3"
audioSize = 54830120
categories = ["Bigtable", "Customer"]
date = "2017-03-22T01:07:49Z"
description = "The CEO and founder of Server Density, David Mytton joins the podcast today to tell us about their experience igrating from on-premise MongoDB to Cloud Bigtable."
draft = false
episodeNumber = 69
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Server Density with David Mytton"
image="/images/post/serverdensity.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/5khvCKvjZ56"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/60wi39/episode_69_server_density_with_david_mytton/"
+++

The CEO and founder of [Server Density](https://serverdensity.com), [David Mytton](https://twitter.com/davidmytton),
joins the podcast today to tell your co-hosts
[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) about
their experience migrating from on-premise MongoDB to Cloud Bigtable.

Server Density provides an open source logging and monitoring solution running on Google Cloud Platform.

<!--more-->

##### About David Mytton

[David Mytton](https://twitter.com/davidmytton) is founder and CEO of [Server Density](https://serverdensity.com),
a scalable infrastructure monitoring software company. He built the original version of the product and founded the
[HumanOps community](http://www.humanops.com/) to discuss and share how to improve the human aspects of running
infrastructure following experiences being on-call 24/7 for the first few years of the company.

##### Cool things of the week

- TensorFlow and Deep Learning without a PhD [part 1](https://www.youtube.com/watch?v=u4alGiomYP4) and [part 2](https://www.youtube.com/watch?v=fTUwdXUFfI8)
- Discover and redact sensitive data with the Data Loss Prevention API [blog](https://cloudplatform.googleblog.com/2017/03/discover-and-redact-sensitive-data-with-the-Data-Loss-Prevention-API.html)
- [Digging deep on PHP 7.1 for Google App Engine](https://cloudplatform.googleblog.com/2017/03/digging-deep-on-php-71-for-google-app.html)

##### Interview

- Server Density [homepage](https://serverdensity.com)
- Mongo DB [homepage](https://www.mongodb.com/)
- Google Cloud Bigtable [docs](https://cloud.google.com/bigtable/)
- OpenTSDB: The Scalable Time Series Database [docs](http://opentsdb.net/)
- Google Container Engine [docs](https://cloud.google.com/container-engine/)
- Apache Kafka [project](https://kafka.apache.org/)
- Designing your Bigtable schema [docs](https://cloud.google.com/bigtable/docs/schema-design)
- [HumanOps community](http://www.humanops.com/)
- Bigtable in action (Google Cloud Next '17) [YouTube](https://www.youtube.com/watch?v=KaRbKdMInuc&list=PLIivdWyY5sqI8RuUibiH8sMb1ExIw0lAR&index=35)

<div style="text-align: center">
  <img src="/images/post/serverdensity-h.png" style="margin: auto;">
</div>

##### Question of the week

What region should I use to optimize access from where I am?

- [GCPing](http://www.gcping.com/)

Google Cloud Load Balancing [docs](https://cloud.google.com/load-balancing/)

##### Where can you find us next?

Mark will be heading to [Polyglot Vancouver Meetup](https://www.meetup.com/PolyglotVancouver/events/238312555/) in April,
and then on to [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/)

Francesc just releasd the [last episode](https://youtu.be/jy9XKfYjtwE?list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ)
of the Flappy Gopher miniseries of [JustForFunc](https://youtube.com/c/justforfunc),
and then will be presenting at [Gophercon China](http://www.bagevent.com/event/357764) in April.  

{{< transcript "FRANCESC: Hi, and welcome to episode number 69 of the weekly "Google Cloud Platform" podcast. I am Francesc Campoy. And I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good. How are you doing? 

FRANCESC: I am very good. I feel relaxed after Cloud Next is over. 

MARK: Yeah. 

FRANCESC: And now, yeah, we don't have anything to do, right? 

MARK: I just nap now. That's just what I do. 

FRANCESC: And Google I/O. 

[LAUGHTER] 

But, you know, nothing-- we're cool. We're cool now. And we have today a very cool interview with one of our customers. So we're going to have David Mytton from Server Density. We'll see exactly what they do. They do not do dance servers. There was a joke there. 

[LAUGHTER] 

But they basically built a logging and monitoring logging solution. And it's open source, runs on Google Cloud Platform. And they had a very interesting story of migrating from on-premies MongoDB to Bigtable. 

MARK: Yep. And then after that we will have our question of the week, where are we looking at latency times across the GCP network. 

FRANCESC: Where should I run my machine so my customers in this area are the happiest? We'll answer that question. But before that, we have, as usual, our cool things of the week. And I'm going to start with the one that I brought, because I think it's super cool. 

MARK: Go on, then. this 

FRANCESC: Weekend I watched a bunch of Cloud Next talks. Like we said, I was binge watching Next. And one of the talks-- actually two of the talks that really blew my mind were from Martin Gorner from our team. He gave two talks on TensorFlow. They're called "TensorFlow and Deep Learning Without a PhD." And it turned out very well because I do not have a PhD. And he basically goes from what are the basics of TensorFlow to training a neural network with all the works of William Shakespeare and generating new William Shakespeare random, like, fiction you could say-- 

[LAUGHTER] 

--William Shakespeare fan fiction-- with a [INAUDIBLE] network. And the result is amazing. He also uses the same technique to generate Python code. So he trains the TensorFlow neural network with the TensorFlow source code. And that he generates neo TensorFlow code. 

MARK: It looks like it would work. It would look, in theory-ish, like close. 

FRANCESC: Yeah, to the point that it starts with the Apache V2 license on top of the files. It is actually pretty amazing. It generates code that looks like I could have written it, really. So also, I don't write that good Python, so I guess that's why. 

[LAUGHTER] 

MARK: We probably can't judge. 

FRANCESC: Yeah. But go check it out. It's like two hours of content, but it's definitely worth your time if you are curious about what you can do with deep learning and you want to learn from scratch and without getting too much detail into the mathematical concept behind it. You just want to know how to do it. 

MARK: Cool. My cool thing is the announcement of the Data Loss Prevention API, which I actually think is really cool. When I first actually saw this, I just saw the video. And I was like, oh, that's really neat. And then I realized it was our product, in which case, I was actually really excited. 

So the cool thing about this is it's, again, a predefined machine-learning tool. But what it does is it will remove and sort of classify sensitive information, so Social Security numbers, credit card numbers, phone numbers all sorts of other types of sensitive data. And you don't really have to do a huge amount of work for it. So you can just send it at the API, and then it'll send it back going, oh, hey, let's just redact all these things from it, which is pretty sweet. 

FRANCESC: Yeah. So I discovered this thing during one of the Cloud Next keynotes. 

MARK: Mm-hm. 

FRANCESC: And  it was really cool because they show, like, imagine that you're in a chat, right? And you're talking to someone, and you're like, hey, I will need your, I don't know, your account number. And they're like, yeah, there's my account number. There's my Social Security number. There's my address and there's how to find my children. 

It's like maybe not give me that. But now it's already in the chat, so you're storing it. And with this API, basically, you're able to find all the things that are sensitive and filter them out. So you can now give access only to the people that should be having access to this. The amazing thing is that it also works on images. I don't know if you saw that. 

MARK: Oh, I didn't see that. 

FRANCESC: Yeah. They have an example where they put a picture, and the picture is a picture of a credit card, right? And the credit card-- it removes all of the credit card number but not the name of the person, because the name of the person is not considered as sensitive. But the credit card number is. So it is pretty cool. 

MARK: It is really, really cool. 

FRANCESC: Yeah, it's pretty amazing. I guess that's one of the things that you can do when you have amazing deep learning with TensorFlow-- (LAUGHS) 

MARK: Yes, exactly. 

FRANCESC: --like, getting back to the one before. And we have one more cool thing of the week. And I'm going to say, is this really cool? No, just kidding. (LAUGHS) 

MARK: Ugh. You know how to make friends, don't you? 

FRANCESC: Just kidding. Just kidding. I think it is very cool. And it is pretty exciting that we have PHP 7.1 on Google App Engine. 

MARK: Awesome. Yeah, so if PHP's your thing and you're looking to use the latest version of PHP in your App Engine Apps, you can now deploy PHP 7.1 on App Engine Flex. It's got built-in containers and built-in tooling there. So you can just get that up and running really, really fast, as well as using pretty much all of your favorite frameworks, from Laravel, Symfony, WordPress, and more. 

FRANCESC: Yeah, fair warning, I guess-- this is a App Engine Flexible environment, which it is pretty cool. And it is now not beta; it's just general availability since Cloud Next. We announced that. So go have a look. And if you're not into PHP-- you know there's some people like that-- there's many other languages that you can run on App Engine Flex, so go check it out. Like, if you're running Node.js or Ruby or whatever, we have easy ways to run that code also on Google App Engine Flexible environment. 

MARK: Yeah. And I'll make a quick shout out. One of the people who sits next to us in the office, Brent Shaffer, he wrote the blog post. Hi, Brent. It's a really nice blog post. And there's also a really great video in there about deploying PHP applications on App Engine. 

FRANCESC: He says he listens to the podcast. Let's see if he actually does. (LAUGHS) 

MARK: --find out. 

FRANCESC: Great. So I guess it's time to go talk to David Mytton from Server Density. 

MARK: Let's get to that. 

FRANCESC: I'm very, very excited today to welcome our guest, David Mytton, CEO and co-founder of Server Density. How are you doing, David? 

DAVID: I'm good, yeah. How are you? 

FRANCESC: Doing great. Very excited about all the things that you have to tell us. I always love architecture talks, and I think that you have a lot to tell us about that. But before we get into all the details, why don't you tell us a little bit about yourself and what do you do at Server Density. 

DAVID: Yeah, sure. So I'm the co-founder and CEO at Server Density. We are a software-as-a-service-based scalable infrastructure monitoring company. So we help our customers save time and money by providing advanced server and website monitoring. 

So it's alerting, waking people up in the middle of the night when stuff's going wrong, fancy graphs, and integrations across all the cloud providers. And we've got some customers like the NHS, with the emergency response service and ambulances here in the UK, and also Drupal, Firebox. And I suppose the graphing is what we're going to be talking about a bit. 

MARK: Cool. And so what do you do at Server Density? 

DAVID: So I started the company back in 2009. So at that point, I was doing everything. I'm, along with my co-founder, who I was working on the design and the interface, we put a lot of time and effort into that, building our own graphing, the interface. But I built the original version of the product, including our original time-series database. And over the years have hired engineers who are actually qualified and have rewritten most of the code that I wrote in the old days. And so now I'm responsible for, I suppose, the overall company vision, how we execute on things. I am working on the commercial side as well as dipping in here and now in the engineering. 

FRANCESC: Cool. So could you tell us a little bit about what is Server Density, like, how it is to use it? Do you have an API and people just call for every single log line? Do you open a TCP connection? How is the experience, the developer experience with Server Density? 

DAVID: So there's two different parts to the product. The first one and the original use case is server monitoring. And then that's complemented by availability monitoring. And with the server monitoring side of things, there's an open source agent. So I wrote the original version of that, and its packaged up, and you install it onto your servers. 

It runs. It executes commands to pull in system statistics and ties in with all the applications that you might be running on the server, so databases, web servers, that kind of thing. And it then creates a payload in JSON, sends that data back to us over HTTPS. And that comes into the Server Density platform. 

From there it runs through an alerting engine. And that's where we will decide if the alerts that you've configured as a customer are going to be triggered, whether we're going to email you, SMS you, send messages through to Slack or HipChat or anything like that. And then it routes it to the time-series storage engine so that we can store that data for historical reporting, building graphs, and showing up dashboards. And then the second part is the availability monitoring. And we have locations around the world. 

That's where we will poll your APIs, public application, end points, anything that's available online. We're looking at the availability and the performance. And then everything is accessible through our mobile apps, our web interface, and also through our API. 

FRANCESC: Nice. So one of the things that surprised me out of the whole thing that you said was to log stuff, your open-source agent, what it does, it sends JSON payload over HTTP. And I'm wondering why is that? Why not like something like GRPC, other than the fact that, of course, when you created the agent, GRPC was not a thing, but like any other option, binaries or whatever? 

DAVID: So there were two main reasons. The first one is that HTTP is a very well-known protocol. And outbound HTTPS, because we encrypt the payload, is typically available on most environments. Or if it's not directly available, then often there's a proxy. And avoiding a custom protocol means that it's very easy to convince people to open firewall rules if they need to for outbound connectivity. And then the second reason is in the early days, I didn't really know much about scaling services, scaling web services. 

But I did know about how to set up load balances and to scale web. And I thought that it would be easier to scale something just by using load balances and Apache at the time, now nginx than inventing a custom protocol. 

MARK: So you talked a little bit about before-- you said you set up the original implementation of how Server Density works. Can you talk us a little bit through that? I believe you weren't running on Google Cloud. You were doing some other different things? 

DAVID: Yes, that's right. So there's a couple of different steps. And we have migrated to a large portion of the application over to Google Cloud. But there's still a few bits in our old infrastructure that's gradually being moved over, over the next few months. But what I can talk about is how it was before. And then we can go into all the cool stuff on Google Cloud by how it is now. 

MARK: Sounds good. 

DAVID: So when the payload comes in-- well, when it came in through our system-- it goes into the intake part of the application. So this is just an endpoint, and HTPS end point. And the data comes in, and that is then passed through load balancers, which were Apache in the original days and are now running off nginx. And that is inserted into a queuing system, which we built on top of MongoDB. 

The data is stored there and then very quickly is pulled out by the rules engine. The original version of that was in PHP. That was the first language that I had learned. And it has a bad reputation, but it's incredibly versatile in being able to do stuff really quickly. 

So the rules engine looks are the payload. It does a quick check to make sure it's valid JSON, the account exists, the account is fully paid up and is active. And then it will pass through all the data and compare it to the alerts that are configured. And we do a number of different checks to see if [INAUDIBLE] is already open. 

If it is already open, then we might not want to send another notification immediately. And there are different rules that allow us to send notifications at different times once the [INAUDIBLE] been opened or waiting for a certain period of time for an alert condition to exist for a couple of minutes before we send notifications. But it's all based on customer configuration. 

If we decide to send a notification, then there's a separate queue, again, in some MongoDB-based queue. And our notification service, which has been rewritten into Python-- that was the second language that I learned. And that is what sends emails, sends SMSes, ties into push notification gateways, and sends that out to the customer. And then there's a second route which goes into MongoDB for the time-series storage as well. 

So that's for the graphing and the reporting. So there's these two channels, one for letting, where it goes through the rules engine and then we discard it. Then there's a second channel where it goes into the time-series format, is transformed into an optimized storage format, and then goes into MongoDB. 

MARK: Yeah, So this was the previous implementation, right, that was running all these MongoDB instances? Is that right? 

DAVID: Yes, that's right. And that was running on bare metal servers software. And we had hundreds of gigabytes of RAM, many terabytes of SSDs. And it was several years worth of iterations on that that  I did in the very beginning to give us really, really fast loading graphs for, was the most commonly accessed time view, which is usually the last couple of hours up to the last 24 hours for customers, and then is slightly less optimized in terms of the graph loading time for time periods going beyond that. 

MARK: So I'm curious now. So are you running like your own sort of sharded MongoDB replica sets? How are you managing that? Was that all just a manual process? How was that managed? 

DAVID: Yep, it was the MongoDB replica sets with sharding. So there was a single database and a single collection in MongoDB, and that would split it out into different granularites. So the agent reports back every minute, and we store that data every minute for a week. And then it's also, at the same time, written in a different database to give hourly averages. And that data is stored forever. And due to the architecture of MongoDB at the time, the database-level lock that they had, which has now being improved significantly in the latest storage engines, we split them out into different databases and sharded them separately. 

But aside from that being kind of a limitation of Mongo, it also allowed us the benefit of being able to split them out into different clusters based on the use case, because hourly data is accessed less often. And so we could have cheaper hardware to power that cluster. 

FRANCESC: Cool. So you were mentioning that that is previous architecture. So what about the new one? What were the issues or what were the advantages on the new architecture that made you move? 

DAVID: Yeah, so there were a couple of challenges. And we reached these I think about a year ago, so the beginning of last year. We got to the point where the current system was no longer scaling. In particular, we had to spend a lot of time maintaining that infrastructure. 

So we didn't own the servers, but they were bare metal servers. And we were renting them from SoftLayer. And every so often we'd have disk failures or hardware failures. We'd have to deal with upgrading them. And so that was just a lot of time-consuming maintenance that our team had to do. 

We also wanted to build a lot more features. And because we'd completely custom designed essentially the database schema to fit this and the APIs, all the functionality and the whole architecture around it, it was a completely custom system. And we're a small team. We're 20 people. Majority of them are engineers. 

But we have so many feature requests coming in that we didn't have enough time to dedicate to building or spending a lot of time building time-series data functionality, so things like doing math functions, being able to pull back data from different granularities and combine it, all the aggregations, all of these standard features that you'd expect to be able to see, we just didn't have time to build them. Then, also, scaling was a challenge. So the replication and scaling in MongoDB is pretty good. But you can do it in a linear fashion. You have to set up an entirely new cluster for a new shard. And then data has to move around and migrate. 

You've got to make sure that there's enough overhead to move that data. And so adding new clusters in was an overhead. And then finally, it's very expensive to buy all that memory and all those SSDs. And it was a fun thing to say that we've got terabytes of SSDs. But when you're actually looking at the overall cost, it was really expensive. 

MARK: Excellent. So what does the new architecture look like? I think you're on GCP now. What are you using? What's connected to what? 

DAVID: Yep. That's right. So the time-series database that was MongoDB is now Cloud Bigtable. And that is running obviously on Google Cloud. But the intake aspect of it is still in SoftLayer. It's just in a new architecture. And it was about 18 months ago, two years ago, that we rewrote that bit. And unfortunately, the Pub/Sub product wasn't fully available. 

So we ended up having to build it ourselves on top of Kafka and Storm. So to go back to how the data comes in, so it's coming in from the agent. It goes into that intake part again. So instead of it going into a MongoDB queue, it now goes into Kafka. So Kafka is the Apache open-source project queuing system. 

That's then pulled out using Storm, which is a big-data event-base processing system. It basically gives us a framework to process all that data. The rules engine was rewritten from PHP into Python. That's the language that we've standardized across the whole company. And new things are written in Python now. And so all the rules engine was replicated in Python with our modern test suite and integration tests and everything that you'd expect from a properly planned and written project, rather than something that I wrote and then scaled over the years. And then the notification system, again, that first route is still the same with some improvements. But that's in Python still. And then the second reaches the entirely new bit on top of Google Cloud Platform. 

So part of this, also, it's also the first bit of our migration over to Google Cloud. So we had the challenge of running the primary infrastructure in SoftLayer, but having the time-series database running on Google Cloud Platform. And what we have to do is because the system is built in a microservices architecture, then we have all these APIs internally. And so it is relatively straightforward to extract this entire component, move over to Google, and have it continue to communicate over HTTPS, even across the internet, which is what we did. 

So that second route now looks like just an internal API exposed over HTTPS. And that goes into the Google load balancers. And that gives us the high availability and the scalability. The internal API is written in Python again. And it's just exposing the functionality. It's a very light wrapper on top of open TSDB, which is the Time-Series Database product that we use. 

This is open source and has allowed us to solve that problem of not having enough time to build all the features that we want into the time-series database because it has so many different features available out of the box that we're now starting to build into the product. And we've been able to contribute a few fixes back as well because it's an open-source project. And then the final part of it is the Open TSDB is talking to Cloud Bigtable. And that's where the actual storage of the data sits. 

MARK: Cool. Tell us a little bit about how Open TSDB works and how that whole thing kind of goes together. I'm quite curious about it. 

DAVID: Yeah, so the Open TSDB instance is entirely stateless. So we're running that on Google Container Engine. So it's all shiny, new containers running on Kubernetes, which was a lot of fun to write and to play around with. But essentially gives you an optimized storage format, which has a driver to install that into Cloud Bigtable. And it then gives you an API to be able to query the data and has various functions so you can aggregate and perform math functions on top of the data. And it's query based on [INAUDIBLE]. So this gives us all those features that we wanted in terms of being able to offer the graphing to our customers. 

MARK: And how's the experience been in terms of being able to scale Bigtable? How's that worked for you? 

DAVID: So the best part of it probably is that it's a completely managed service. And this was one of the biggest reasons for us moving over. So when I wrote the original version of our MongoDB system, I chose MongoDB because there was nothing else available. Bigtable didn't exist as a publicly available product. And databases, like Cassandra, which have a good reputation for time-series data, didn't exist the first time I came to work with MongoDB. And so it gave us a really good product that scaled over the years to have really, really fast rights. And I'm surprised at how it scaled over, well, seven years, really, of the company existing. 

But it required a huge amount of my time. And then when we hired people, it required a lot of time internally to continue to maintain it. And so just being able to have a database product that's managed by Google, all the fail over, the redundancy, the design, everything is just handled by Google so that we don't have to deal with any of that. And it's not a general purpose database. 

It's very specifically designed for time-series data. And that means we get incredible performance from it. And that allows us to reduce the costs just because we don't need all that expensive hardware. And then specifically in terms of the scalability, it's essentially linear. 

We know that we can get 10,000 writes per second per node. And we just press a button, and in a couple of minutes we have a new node. And within about 20 to 30 minutes the data has rebalanced across the entire cluster, and we've added an extra 10,000 writes. 

FRANCESC: Could you share a little bit of the amount of traffic that you're doing? Or what's the difference in cost between running your own servers-- you say that you were owning so many SSDs-- to just migrating everything to Cloud Bigtable? 

DAVID: Yep, so the cost of Cloud Bigtable is a lot more predictable because we can see exactly how many writes per second we're buying for the per-node cost. And the graphing that Google Cloud Platform control panel provides is pretty good, and it just shows us the absolute numbers. That means we can see pretty easily the exact number of writes that we're doing and how we need to scale it. 

When it came down to MongoDB and the previous architecture, was not as transparent in terms of being able to see where we're at in terms of the scalability. There's no direct correlation between the number of writes and the hardware that we have. And so we have a lot of benchmarking and testing. And typically we would see that we needed to scale through proxy metrics, like the response times or the APIs, rather than actually knowing that we're hitting the limits of the writes that the product can provide. 

MARK: Cool. So I'm actually curious. You talked about what's seemingly all the good stuff. Were there any interesting challenges or issues that you ran into moving over to GCP and Bigtable and the new architecture? 

DAVID: Yes. So there were two interesting situations that were worth talking about. So the first time that we started the test workload onto Bigtable, we did some tests in MongoDB and looked at the number of metrics that we were writing per second and then stimulated some test traffic into Bigtable to see if that actually was true, that the theory actually played out. And we saw that we were doing hundreds of thousands of writes per second more than we actually predicted. And that completely blew away our cost calculations because you get 10,000 writes per second per node. And you just pay per node. And it looked like we were going to go into 200, 300 nodes on a Bigtable, which would have been cool to say and was fun discussing with your engineers. 

But then we discovered the Open TSDB shipped with an outdated driver. And it was released before you released a new batch API. And so your engineer suggested that we upgrade to a test version of the driver, which we did. And in our test workload, which was doing 100,000 writes per second, as soon as we switched over to the new driver, it went down to 3,000 writes per second, which is a pretty significant difference. It was a big relief the our actual calculations were correct and our original cost projections were correct. And 

Then the second lesson that we learned from that was to do with the keys. And this is really important when you're querying the data. So the original key was based on an account ID. So every account within Server Density gets a unique ID and then also the metric name. And the more items that we have in an account, the more data that had to be queried. And by item, I mean like a server. 

So if we're looking for load average, for example, then the original key was to look at the account ID and then look at load average. But that would query across every single server within the account. And so in our performance testing, that quickly revealed that we'd made a mistake with the query, with the key query design. And we needed it to be much more granular. Because for our really small accounts, it was fine. 

But for our accounts with thousands and thousands of servers, their response time was just completely unacceptable. And so we played around with a few different options. And the obvious one was just to drop in the item ID in the middle. So instead of just being account ID and then a metric name, it became account ID, item ID, and then the metric name. And that reduced query times from 30 to 40 seconds in some cases down to less than a second in most cases, which is much more acceptable when you're just loading a dashboard. 

FRANCESC: Yeah, nice. Yeah, I guess that is one of the things that I've heard many times about Bigtable. Bigtable is, after all, a key value store-- [INAUDIBLE], but basically, a key value store. So I guess that choosing the keys is a very, very important part of it. Is there any other aspects of, like, any best practices that you may hear, something that you learned saying, hey, this is how you should be doing keys, other than what you just mentioned? 

DAVID: I think the key to designing the right key set up is to actually test it. And we tested with small data sets to begin with. And it was only when we then started testing with the production simulation that we discovered this performance problem, which in hindsight is pretty obvious and something that could easily be picked up. 

But it was just a just a simple mistake in not having a diverse enough testing set. And that, I suppose, is also similar to the problem we had with the driver, in that once you start putting production workload through it, that's when it really shows up the problems. Otherwise you would just assume just a couple of thousand writes per second as a test workload is a reasonably sized workload for many people. But as soon as you start pushing actual production data through, that's when these little things will show up. 

MARK: Cool. Well, we're slowly running out of time here. Is there anything we haven't asked you or anything you want to mention or plug or anything like that before we finish up? I 

DAVID: So I think the only thing would be the human ops community that I've started and now running in the US and also in Europe which has come out of my experiences in the early days of Server Density being on call 24 hours a day for a couple of years, but now more recently talking to our customers. And it's a community and a series of meet-ups where we get companies and individuals to come along and talk about how they're running the human side of their operations. So we tend to focus on all the cool, shiny tools and systems that we have in place but don't pay enough attention to the humans that are running the systems in the sense of fatigue, getting too many alters, all the stress of being on call, and how different companies deal with that. 

So we've run an event in San Francisco. We're during one in April in New York. And were also running one in London. So please have a lock on humanops.com. 

FRANCESC: Nice. And since we're talking about events, it seems like we'll see you at Cloud Next? 

DAVID: Yes, that's right. On 8th of March I'm going to be speaking about this, about the migration. I've got some call architecture diagrams so you can visualize what I've just been talking through. And we'll see. I've also got the graph of that change to the driver with that massive drop from 100,000 down to 3,000 writes per second. 

FRANCESC: Sounds awesome. 

MARK: Great. Well, thank you so much for joining us today, David. That was a super interesting conversation. 

DAVID: Excellent. Thank you. 

FRANCESC: So thanks again to David for such an interesting interview. It was pretty enlightening to be able to see how someone could go from such a huge traffic running on MongoDB on premise to migrating all of that basically while the-- I think the metaphor is changing the engine on a car while it's moving or something like that? 

MARK: I think people generally say train, but, yeah, that works. It doesn't matter. It still works as a metaphor. 

FRANCESC: I'd say on a train it's easier because you can just [INAUDIBLE] it. But whatever. 

[LAUGHTER] 

That's not the important thing. It was a very interesting thing. And if you're interested in knowing more about this, this interview was recorded right before Next. But during Next they had a very cool session called "Bigtable in Action-- Powering Billion-User Services and Meeting Customers' Challenges." And it is available online, so you can go check it out now. And you'll see Sami Zuhuruddin from Google Cloud. He's a Senior Solutions Architect. And also David Mytton, our friend we just interviewed, which is the CEO of Server Density. And finally, Anthony Fox, which is Director of Data Science at CCRI. 

So go check it out. There's a lot of good lessons to be learned in there. 

MARK: Yep. No, always love really interesting stories where people have moved from one place to another and why they did that-- super, super interesting stuff. 

FRANCESC: Yeah, it's definitely war stories, that there's failures in there and lessons in there that you could learn so you can avoid them. So go check it out. 

MARK: Fantastic. Well, why don't we move on to our question of the week. Today's question of the week, we want to talk about ping times. So you're building your next amazing application. And you say to yourself, which regions should I put this in for Google Cloud Platform, which ones are going to give me the lowest latency? So is there an easy way to be able to find out what my latencies could be? 

FRANCESC: Not only is there an easy way. But it has an amazing name. 

[LAUGHTER] 

It is GCPing. So like GCP but with I-N-G at the end, which also it's "ping," so, you know, gcping.com and it is a very simple service. It is created by someone working at Google, Jason Hall. He just made this available. It's a very simple service. It has one F1 micro instance running every single one of our regions and basically just shows you the average ping time from your laptop, or whatever you're using, maybe your phone, to all of those instances. And it's pretty cool. 

Because, like, for instance, right now for me, I can see that from San Francisco the shortest ping is US West 1 which is not surprising. But I was actually surprised that Europe West 1 is slightly longer than Asia East 1, which kind of makes sense because Asia East is just the ocean so we have a cable going through. But US West 1, there's actually you need to go through the United States and then through the ocean. 

MARK: Oh, yeah, there's like mountains and stuff in the way. 

FRANCESC: Yeah, so it kind of makes sense, right? But if you didn't think about it, even flying actually, I'd say that Paris is shorter than Hong Kong. Apparently that doesn't count. 

MARK: That doesn't count. We have cables. But one thing I really like about this is there's a global row in there. So what he does is he set up a global HTTP load balancer which will then route requests to the nearest healthy instance. So it's neat about that is you can actually see that, OK, so for-- yeah, for me, again, same in San Francisco, US West 1. I get about 28 milliseconds. And your mileage may vary, for obvious reasons. 

But then my global is 31 milliseconds. So there's a small difference as it goes to the load balancer there of a few milliseconds. But you can pretty much determine where it's actually routed you to the correct place that is closest to you. 

FRANCESC: Yeah it is very cool because you can imagine that if you want your instance to be accessible from your-- like your application to be accessible and fast everywhere in the world, yeah, you need to have that global HTTP load balancer. That is the answer, basically. But if you are dependent on a specific region, just, yeah, gcping.com, and you can see which one is the closest one. 

MARK: Cool. All right, Francesc, where are you off to? What are you up to? What are you doing? 

FRANCESC: So I'm going to be recording one more episode. Actually, I just released an episode of "Just for Funk" again. And so forth those that do not know what "Just for Funk" is, it's this YouTube series that I've been creating for quite a while now and I just finished with Flappy Gopher. So now we have like a clone of Flappy Bird [INAUDIBLE] completely in Go. Pretty funny fun episode I did. 

MARK: It's cute, yep. 

FRANCESC: Yeah. And then I'm going to be doing another one soon. But right after that, I'm going to China. I'm going to Shanghai to speak at GopherCon China and also going to be running some workshops there, still not completely planned. But if you are in the region around Shanghai, definitely check it out because I'll been trying to do some Go and Kubernetes workshops. 

MARK: Sweet. 

FRANCESC: What about you? 

MARK: So I'm heading off to Vancouver. I'll be there for the week. I'll basically be working out of Vancouver for a bit. But while I'm there, I'll be doing a polyglot Vancouver talk. I'll be talking about GRPC and Kubernetes. I will say if anyone's in Vancouver and there's stuff that you think I should check out or do or tech stuff or anything along those lines or presentations you might want made, drop me a line. DMs are open on Twitter. 

Outside of that, I will be the East Coast Games Conference talking about game servers and Kubernetes. And then shortly after that I will be at Vector. That will be from the 18th of April onwards. 

FRANCESC: Nice. If you want things to doing in Vancouver, I have some very good recommendations for restaurants. The food there is so good. 

[LAUGHTER] 

MARK: Oh. Yes, Vancouver food is excellent. 

FRANCESC: Well, I think it's been a while since we have not done this. But I'm going to try to reverse the roles this time. So you're going to say where, and I'm going to say how. 

MARK: OK. So what's the website? 

[LAUGHTER] 

FRANCESC: gcppodcast.com. 

MARK: The email address? 

FRANCESC: hello@gcppodcast.com. 

MARK: Twitter? 

FRANCESC: @gcppodcast. 

DAVID: Reddit? 

FRANCESC: /r/gcppodcast. 

MARK: Google ? 

FRANCESC:  gcppodcast. 

MARK: Slack? 

FRANCESC: Oh, wow. Yeah, that one's not going to-- 

MARK: #podcast? 

FRANCESC: #podcast in the Google Cloud Platform Community that you can access through bit.ly slash-- 

MARK: --gcp-slack. 

FRANCESC: Exactly what I said. 

MARK: Exactly. 

FRANCESC: So there you go. If you have any proposals, questions, we're still looking for more questions of the week. We did last episode with that question of the week that was a recording from someone. If you send us a recording with your question, we will definitely use it. It is always fun to hear our listeners. So send those our way. And as always, thank you, Mark, for yet another amazing episode. 

MARK: And thank you, Francesc, for joining me for yet another episode. 

FRANCESC: And thank you all for listening. 

MARK: And we'll see you all next week. 

FRANCESC: See you. 
{{< /transcript >}}