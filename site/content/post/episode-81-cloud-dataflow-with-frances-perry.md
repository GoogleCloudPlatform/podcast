+++
audioDuration = "00:34:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.81.mp3"
audioSize = 49543092
categories = ["Dataflow", "Open Source", "Apache Beam", "Big Data"]
date = "2017-06-14T01:07:49Z"
description = "Cloud Dataflow and its OSS counterpart Apache Beam are amazing tools for Big Data so we asked Frances Perry, the Tech Lead and PMC for those projects, to join us and tell us more about it."
draft = false
image="/images/icons/bigdata/Cloud-Dataflow.png"
episodeNumber = 81
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Dataflow with Frances Perry"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/WH6jMt64WX8"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6h8v9g/episode_81_cloud_dataflow_with_frances_perry/"
+++

Cloud Dataflow and its OSS counterpart Apache Beam are amazing tools for Big Data.
So today your co-hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
interview [Frances Perry](https://twitter.com/francesjperry),
the Tech Lead and PMC for those projects, to join us and tell us more about it.

<!--more-->

##### About Frances Perry

[Frances Perry](https://twitter.com/francesjperry)
is a software engineer who likes to make big data processing easy, intuitive, and efficient.
After many years working on Google’s internal data processing stack, she joined the Cloud Dataflow team to
make this technology available to external cloud customers. She led the early work on Dataflow’s unified
batch/streaming programming model and is now on the PMC for Apache Beam.

##### Cool things of the week

- Rewriting [moviegolf.com](https://moviegolf.com) [Medium](https://medium.com/google-cloud/rewriting-moviegolf-com-e5c01fd396dc)
- App Engine users, now you can configure custom domains from the API or CLI [announcement](https://cloudplatform.googleblog.com/2017/06/App-Engine-users-now-you-can-configure-custom-domains-from-the-API-or-CLI.html)
- Join the gRPC/Istio community day June 26th at Google Sunnyvale [twitter](https://twitter.com/IstioMesh/status/871780296651354112)

##### Interview

- Cloud Dataflow [homepage](https://cloud.google.com/dataflow/)
- Apache Beam [homepage](https://beam.apache.org/)
  - Java SDK Quickstart [docs](https://beam.apache.org/get-started/quickstart-java/)
  - Python SDK Quickstart [docs](https://beam.apache.org/get-started/quickstart-py/)
- Cloud Dataflow, Apache Beam and you [announcement](https://cloud.google.com/blog/big-data/2016/08/cloud-dataflow-apache-beam-and-you)

<div style="text-align: center">
  <a href="https://cloud.google.com/dataflow/"><img src="/images/icons/bigdata/Cloud-Dataflow.png" style="margin: auto;"></a>
</div>


##### Question of the week

How can I connect all the instances in a Managed Instance Group to CloudSQL securely?
 
- [Connecting MySQL Client from Compute Engine](https://cloud.google.com/sql/docs/mysql/connect-compute-engine)
- [About the Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy)
- CloudSQL Proxy [GitHub repo](https://github.com/GoogleCloudPlatform/cloudsql-proxy)

##### Where can you find us next?

Francesc just released a new [#justforfunc episode](https://youtu.be/yuW6BwOS8Eg?list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ)
where he explains how to use cgo.

He will be running a workshop at [QCon New York](https://qconnewyork.com/) on Go tooling based on
[this video](https://www.youtube.com/watch?v=uBjoTxosSys), after that he'll be at GopherCon in Denver!

Mark is still on vacation - but don't worry, he'll be back soon!

{{< transcript "FRANCESC: Hi, and welcome to episode number 81 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel." >}}
Hey, Mark. How you doing? 

MARK: I'm doing very well. How are you doing, Francesc? 

FRANCESC: Doing great. It is Monday afternoon here in beautiful San Francisco. I think it's Tuesday where you are? 

MARK: I've genuinely lost track of what day it is. I am on vacation. This is how I vacation apparently. In Australia, currently. But I couldn't give up on the podcast. Had to still be here. 

FRANCESC: That has to be nice, not even knowing what day is anymore. Even though you're on vacation, we're still having our podcast. And today, actually it's going to be a very interesting one. We have Frances Perry. She's a software engineer that works with the Cloud Dataflow team. And she's going to be here to explain everything about it. We interviewed her a long time ago at GCP Next, not this year, but the year before, for a very quick chat. And she's back to explain way more in detail what Cloud Dataflow and Apache Beam are. So very, very excited by that. 

MARK: Yeah. It's a super, super-cool interview. And then after that, we have a question of the week talking about how to securely connect to Cloud SQL instances. But when you're dealing with scalable infrastructure and maybe your IP address range is not particularly stable. 

FRANCESC: Yeah. It is cool because I actually did not know about this. So probably, many of you will not know about it. Or maybe it's just a thing that I did not know and everybody else knows, which is fine, too. 

MARK: But that's the best thing about this podcast. We learn stuff all the time. It's fantastic. 

FRANCESC: No matter if you want it or not. But before all of this content, we have, as always, our cool things of the week. And we have one, which you added, which is rewriting moviegolf.com 

What is this? I actually do not know what moviegolf.com is. 

MARK: I hadn't heard of this either. I came across this post. It's on Medium. It is actually a really cool article by this gentleman, Ross Light, who has this site, moviegolf.com, that it's a trivia game that I think his dad wrote, like eight years ago. And he decided that he was going to take, basically, what he had previously and rebuild it and sort of re-architect it for Google Cloud Platform, and how to do it. 

And it's kind of a really nice step through of all the decisions he made, the trade-offs he made. Eventually, ended up just running it on a GCE instance with a couple of Docker images running Go, which I thought was really cool. 

FRANCESC: I am actually not shocked that it was written [INAUDIBLE] Go. Because as soon as you said the name, actually, Ross Light, is the team lead for Go on the Cloud team at Google. So it totally makes sense that he would do something like this. It looks like a super interesting Medium blog post, so I will definitely read it. And there's a lot of really cool things, like he talks about not only the infrastructure, but also the code. 

I think he mentions somewhere gRPC. Or was it just me? No, that was totally me. But yeah. Basically, the whole idea is like the six degrees of Kevin Bacon, which lets you find how many degrees of separation are in between a person and Kevin Bacon, taking into account every step as someone has done a movie with someone else. 

MARK: Yeah. And that's cool. He goes through. He's like, OK, do I use App Engine? Do I use Container Engine? Do I use GCE instances? Why did I choose which one thing I did? So it's a good trade-off discussion. 

FRANCESC: Yep. Very, very cool. We have a second cool thing of the week. And I'm actually very excited about this one. Even though it's the third one on the list, I'm going to say on the second because I am very excited about it. 

Many of you might have applications running on App Engine. And many of you might have custom domains, such as [INAUDIBLE] for instance. Every single time your HTTPS, your SSL certificate, is too old, you need to change it. And to do so, you actually need it to login into the console because there was no API. 

Well, that has been fixed. There is now an API. And also, that API is also accessible directly from G Cloud. So that's super-cool. And I'm looking forward to people hacking something to make it. So let's encrypt. We'll update the HTTPS, the SSL certificates as soon as you need them. So very excited about that. Super-cool. I have been waiting for this for quite a while. So really cool that we have it now. We have a link on the show notes to the announcements. But basically, that is the most important thing you need to know. There's an API. Yay. 

MARK: Yeah. I know, Francesc, that's going to make your life a whole lot easier. I know when you've been managing SSL sets on GCP podcast, that it's been driving you crazy. Cool. So a final thing, which has to do with gRPC and the newly hot Istio. We have heard all the comments and emails that people have sent us. We are looking to do a podcast in the near future on Istio. Don't worry, we have heard you. We definitely want to do it. 

FRANCESC: Yes. 

MARK: But if you're in the Bay Area, or specifically, Sunnyvale, and you're interested in coming down for a community day, there is going to be one on Monday, June the 26th, down in Sunnyvale. We'll have links in the show notes, where there will be developers for gRPC and Istio. If you want to go down, have a chat with them, talk about what's going on, and talk about the open source and ongoing efforts. Bring your laptop, and show up, and they'll be cool stuff going on. 

FRANCESC: Nice. That sounds like a very cool place to learn about the new technology and make cool friends, too. 

MARK: I'm always up for making cool friends. 

FRANCESC: Yeah. Cool. So I guess it's time to go talk to Frances Perry about Dataflow. 

MARK: Yeah, let's do that. 

FRANCESC: I am very happy today to welcome Frances Perry, a tech lead on Cloud Dataflow. And also, a PMC at Apache Beam. Hello, how are you doing, Frances? 

FRANCES: Doing well. Thanks for having me. 

FRANCESC: And I am very excited to have you because it is actually not the first we have you. It's the second one, but that was long time ago. 

FRANCES: Yeah, that was over a year ago. 

FRANCESC: Yeah. At GCP Next, you gave an amazing talk on Dataflow. And since then, many things have changed. So we will be talking about all the new things about Dataflow and Apache Beam. But before that, why don't you tell us a little bit about yourself and what you do at Good Google. 

FRANCES: So I'm a Tech Lead on the Cloud Dataflow project, where I focus particularly on the user-facing surface of the project. So that's our client-side SDKs, monitoring UIs, tooling, documentation. And basically, making sure that at the Cloud Dataflow service, we give users a coherent vision for how they're executing their processing pipelines. 

MARK: Cool. All right. So at a high level, what is Dataflow? What is this thing? And what does it get used for? 

FRANCES: Yeah. So Cloud Dataflow is a fully-managed service that's fully integrated with Google Cloud Platform for executing batch and streaming data processing pipelines. So you can think of it sort of as a successor to systems like MapReduce. But it also brings in a lot of the more recent streaming technologies. So it can do both, sort of your traditional batch ETL-style things as well as real-time applications. 

FRANCESC: Cool. So when I think about MapReduce, I think basically it's like big data. You run a big job, and then you're done. You run it during the night. And hopefully, the morning after you have the results. But you're saying that Dataflow also allows you to do streaming. What kind of use case have you seen? Why would I use Dataflow? 

FRANCES: So I think the thing that makes Dataflow really unique is basically two things. So there's, first of all, the programming model or the way you write your programs. And then, there's also the service, which is fully no knobs and fully managed. So basically, it tries to do as much of the tuning and things as it can for you. 

On the programming model side, this is really where we're tying into Apache Beam. And so this programming model that you use for describing your data processing is really a new way to think about how to process data across distributed systems. 

So if you go back to 2004, what MapReduce did we publish that paper is really gave us a new set of abstractions for thinking about what until then had been an extremely complex problem about how to process data in parallel across multiple machines, and have fault tolerance, and be able to do it efficiently at scale. So we think of basically the Beam model and the way that you're writing these programs as doing that next step, but now for unifying both batch processing and your real-time streaming processing. 

MARK: So what exactly is real-time streaming? What does that mean, like for a lot of people who don't necessarily deal with that? 

FRANCES: So this could be anything where you're processing, really, an infinite amount of data. So if you think about the way data is generated these days, it's really often in an infinite stream. 

So I think one of my favorite examples to use is a mobile gaming application. So let's say that we've just launched some new mobile gaming application. And we've got users all around the world frantically crushing candy-- doing something to earn points for their team, right? And these scores are coming back to our system. And we want to go ahead and analyze, what's the top-scoring team right now? 

So in a system like that, once the game launches, that data just keeps coming in, right? In traditional sort of batch-style processing, what you'd do is chunk your logs into days. So here's my logs from Monday. And now I can analyze them, right? So Tuesday at 1:00 AM, I can start analyzing Monday's logs because I have all that data. So that's sort of doing it in a batch-style system. 

But in a streaming or a real-time system, you want to be doing things as the data arrives. You want much lower latency. You want to have a leaderboard that you're displaying of the current top team, right? So both low latency is important there. And also, because of distributed systems, you need the flexibility to handle data that comes in out of order. 

Because if you think about how distributed systems work, you can't guarantee that your data will come in immediately on time. Right People's network connections get delayed, phones go offline, and so on. So you need to be able to adjust and process these sort of out-of-order infinite data sets. 

FRANCESC: Cool. So we've been mentioning two sides of the same thing. We've been mentioning on one side the programming model, which is kind of like MapReduce, but better. It has new operations and whatever. And then on the other side is the runtime. Is that the separation in between Dataflow and Apache Beam? What are the difference there? 

FRANCES: So originally, when we started with Dataflow, when it went into GA in 2014, they were the same. We had the Dataflow service and the Dataflow SDK, which you used to program against the service. But more recently-- so about last January, what would that be? 2016. We donated those SDKs to the Apache Software Foundation and helped kick-start the Apache Beam project. So now that is exactly true. Basically, Apache Beam is this way of reasoning about your programs and Apache Beam pipelines can run in multiple places. One of those places is on the fully-managed cloud Dataflow service. The other options are things like on Apache Spark, Apache Flink, and other common open source runtimes. 

FRANCESC: Let's go back to that. We said that the runtime is different. If you're running MapReduce, it's patching. While you're running Dataflow, you get streaming. But what about the programming model? What is the main difference between those? Is there also, like map-shuffle-reduce phases, or how does that work? 

FRANCES: So I think there's really two big differences there between sort of a MapReduce API and what Beam gives you. The first one is that the way you specify your business logic is higher level. When MapReduce came out, people realized they could solve basically any class of problem in a MapReduce if you sort of took your algorithm, twisted it enough, distorted it enough, and shoved it into that map-shuffle-reduce structure. So a lot of the newer systems, including Spark and Flink and Cloud Dataflow and Beam, are doing things where they give you a higher-level graph abstraction for talking about the different transformations you want to do to your data. And then we ensure that the system is able to sort of optimize that down into a lower-level thing. 

So if you think about something like function composition. If you want to take a data set and you want to go through it and you want to tokenize it to pieces, and then you want to take each word and you want to lowercase them, right? When you're writing that in a MapReduce-style system, you would do that in a single map operation, where you take the line of text, you tokenize it, and you lowercase it and output those lowercase words. 

What you're doing there is you're being forced to hand-optimize or fuse two unrelated pieces of logic into one method in order to get the efficiency out of the system. Because you don't want to go through large data sets multiple times. 

On the other hand, with these newer styles of systems, we separate that out and let you as the user write your business logic at a higher-level abstraction. So you can think about the logical phases not as they are most efficient to execute, but as they make the most sense for your algorithm for expressing what you're trying to do. And then you let the system do those optimizations to run them efficiently. 

And this is basically the same difference that people have had with assembly language, and then higher-level languages coming along later. You let the system do the boring nastiness of really getting every ounce of efficiency out and you give somebody the right set of abstractions to talk about what they're trying to do. 

FRANCESC: So does that mean that what you're doing then-- you're describing this graph, like this pipeline using the Apache Beam language. Well, let's call it a language, like API or whatever. And that is Apache Beam. And you generate that graph. And how you run it is completely independent. And that's where you could run it on Cloud Dataflow, or Spark, or any other runner. Is that correct? 

FRANCES: That's exactly correct. Yep. 

FRANCESC: That is very cool. 

MARK: So I'm actually curious about one actual thing as well, too, about finding the right spot for using these tools. Quite often when we talk about people who have gone to higher abstractions or other technologies other than MapReduce for doing these sort of big data date set-type stuff, we talk about BigQuery a lot for obvious reasons. So as a general rule of thumb, where do you find that people are like, oh, Dataflow is a better fit for this. Whereas, BigQuery is a better fit for this? Where do you draw that line? 

FRANCES: Well, I think they do absolutely overlap in some use cases. But I think if you've ever tried to write some really complex SQL queries, you will hit up against the bounds of what that abstraction is really suitable for, at least for mere mortals. So something like Beam does give you sort of a little bit more flexibility there. But I think there is a lot of interest, for example, in the Beam community in writing a SQL DSL that runs on top of Beam. So they are quite related. 

There's been additional functionality added to BigQuery to get better join support. And there's been a lot of improvements over the years that have brought these two systems closer together. But really, I think there's less of a cliff when you're running in Dataflow, like the types of things you can do are just more flexible. You can integrate with a much more different data sources. Sort of the streaming, the real-time capabilities are there. 

FRANCESC: So since you're mentioning data sources, I think that that's an interesting thing. We talked about pipelines. What do we connect normally? 

FRANCES: Anything you want. 

FRANCESC: Anything we want? 

MARK: Anything. I'm connecting my socks to Dataflow. 

FRANCES: Go for it. Beam is really designed to be extensible in many different ways. And so one of those is the input format that you're writing to. So Beam has an API called the source API that you can use to teach Beam about a new data format. 

And the reason you need to sort of teach it explicitly about the format is that we want to make it very easy to run this efficiently in parallel. So if you think about a new data format, you need to be able to answer questions like, how big is that data format? How would you split it into x pieces? And then, how would you read a piece? And those are really what are required for the different runners behind Beam to take that and parallelize it across multiple workers. Sort of chunk that data set up into pieces and hand them out to different workers. 

One thing Beam does that's more advanced than many of the older APIs out there is adds a notion of what we call dynamic work rebalancing. So as you're teaching Beam about a new input format, and you're telling it how you're reading sort of a chunk of that format, Beam also asks you to provide signals about your progress through that. And then potentially, stop early. 

So what that lets a system do is divide the input set into 10 pieces, farm them out to 10 workers, realize that one of the workers is really, really slow, and tell that worker, actually, you're only 20% of your way through your data. Can you please stop at 40%? I'm going to steal that last 60% and reassign it to somebody else who's got idle cycles. Dynamic work rebalancing has been a huge thing for improving straggler shards, which is sort of this really common problem in distributed data processing, where either because of slow machines or data characteristics or something, you end up with a huge number of parallel machines sitting idle while one machine chunks away on the remainder of the work. 

MARK: So going to assume there are a bunch of like connectors for like GCP stuff, like I'm guessing Pub/Sub, things like that. Does that mean then you have to teach it how to use Pub/Sub, or does that work out of the box? 

FRANCES: Yeah, thank you for clarifying that. We have a lot of built-in connectors. Your Standard GCP ones are there-- BigQuery, Pub/Sub, all the various textual formats, which can of course come from GCS. 

One of the things that I'm really excited about kick-starting the Apache Beam ecosystem is really that open source environment is where the diversity of connectors is really coming from. So since we sort of kick-started Beam in the last year, we've probably added 15 new connectors. There's Cassandra and Kafka and Kinesis and all sorts of things coming out of that, which I think is really great for helping people get their data into the systems that they need to process it in. 

MARK: It sounds like there's a great relationship there between Apache Beam and Dataflow. So on the Dataflow side, I'll ask, what integrations with other GCP systems-- you just talked about that sort of stuff. But is there logging, or alerting, or-- 

FRANCES: Absolutely. 

MARK: What integrations does it have with GCP specifically on Dataflow side? 

FRANCES: So we're trying to integrate as tightly as we can with so many of the other systems. Because when you come to GCP as a platform, what you're really looking for is for all those systems to work beautifully together. 

What happens when you actually launch a Dataflow job is that you write an Apache Beam pipeline. And you're running a program somewhere. It could be locally on a server of your own somewhere, that's describing the shape of this data processing DAG, this graph that you want to run. 

So then what happens, that gets serialized into JSON and sent to the Dataflow service. And this is the description, sort of the outline of the processing. And some of that processing will include serialized bits of user code. This is the actual things you want to do for each element. 

But from the Dataflow system's perspective, it basically has a plan or a map-- a plan of the different processing. It then spins up a bunch of GCE workers, who it will actually farm all that work out to. So your code that you've written to process all your elements is happening on GCM VMs. But those VMs are going to be fully managed and auto-scaled by the Dataflow service. So you don't need to worry too much about how to manage them, but they're there if you need them. 

As those VMs are processing each of your elements, they're logging into Cloud Logging. And then we have some really great integration with Cloud Logging that lets you very easily sort of search your logs right in the Dataflow UI and see what different portions of your pipeline are logging. We're adding some additional integration with different tools in Stackdriver to get better monitoring of how your watermarks are going, what your errors are, all these types of things. 

FRANCESC: We've covered the input. We've covered while it's running, how you can see what's going on. What about the output? Do you store it in a file? Can you choose? Or is it more like you were mentioning that there was like SQL [INAUDIBLE] that you can run? 

FRANCES: So basically, just like you can teach the system about new kinds of input formats and we have a bunch of common ones built-in, same thing will hold for outputs. So you can very easily write to BigQuery and GCS, Pub/Sub, your standard sinks. And also, if you have something else you need to do. You want to call out to a third-party system, or write a custom file format, or something like that, you have the flexibility to teach the system about additional things there as well. 

FRANCESC: Interesting. So does that mean that for instance, if I'm doing streaming, how often do I write to the output? 

FRANCES: That's going to be very application-specific. What we liked about Beam is that you write your application logic, sort of the thing you're doing to your program, once. And then it's very easy to customize that same algorithm for different latency situations. 

So if you think about writing-- going back to our mobile gaming example. If you think about writing a computation that sums the scores per team, you write that transformation just as if it were taking a big collection, a Pcollection, of team and score events. And basically, summing them up across unique teams. 

Then, when you run that, you can apply it in different ways. You can window it, which means you want that computation applied over different slices of event time. You can say, take that integer summation and give me a sum per hour, or per minute, or per day. And choose sort of the scope of that. 

You can also customize the triggering, which is how the relationship to processing time comes into play. You can say, I want you to sum it over all time, but I want to know an update of what the current score is every hour. So I want you to sort of accumulate over all time, over the bigger window, but I want smaller updates. 

You can also say, and I want to know if late data comes in. Because one of the things you'll find in a streaming system is somebody is playing our mobile game on a transatlantic flight. They're in airplane mode. And then they land four or five hours later. They have to reconnect to a network. And so it's sort of you're getting a score that comes into the system multiple hours delayed and you have to figure out how to adjust that into the computations that you've already been performing. 

FRANCESC: Cool. So you said something that took me back to the time I wrote a Cloud Dataflow job, which is that Pcollection. And I'm actually a Go developer. And I know that Pcollection is a very, very Java thing to say. 

I know that you can run Dataflow. Well, you can program [INAUDIBLE] Beam pipelines with Java. Is there any other languages? And what is the plan in there? 

FRANCES: Right. So I think one of the things we're really excited about with Beam is that we've designed the system from the beginning to really focus on extensibility and portability. To the point where it's designed to support multiple SDKs as the community is interested in writing them. Those SDKs really are just generating that graph, which is itself just a language agnostic plan, a representation of the computation. It's only the little bits of user code in that plan that are a specific language. So it's actually quite an extensible format. And then the different runners can take that plan and go ahead and run it very easily. And then, they just need to know how to basically call back into the specific language on a per-element basis. 

So what that enables is the community to really grow by adding new SDKs and setting them up so that new SDKs can run across all the different runners. So that's the vision, that it's a fully mix and match of choose an SDK, choose a runner. Life is good. 

Visions are never-- they're always a journey. So where Beam is at right now is that we have a Java SDK that ports across, I think, four different runners in the main line branch and another runner on a development branch. And then, we also have a Python SDK that's fully merged on the master branch, but we don't yet have the portability story totally fleshed out for that. So the Python SDK right now can run locally for development and testing. And it can run on the Cloud Dataflow service. And the community is actively working towards getting that running across the other runners as well. 

FRANCESC: So what does a pipeline look when you've described it in a language? Meaning is there like some JSON way of communicating that to the runtime? Like XML? 

FRANCES: Beam will have a language-agnostic format that it can use to do that interchange. For the users, we won't have them interact with that directly. 

Taking a conceptual abstraction, which is what the Beam model really is-- this idea of Pcollections and parallel [INAUDIBLE], grouped by keys, windowing, triggering-- we haven't even gone through all these yet-- and materializing it in different languages for specific user communities is a challenging problem because you want to make sure that the abstractions feel native. 

When in Python, do as the Pythonians do, something like that. You don't want it to feel like it's a Java abstraction forced into a different format. So that takes sort of a subtle touch to both make the abstractions clear as to what they are and also, feel native to the different language communities. 

MARK: Very nice. Awesome. We've talked about some of the technical stuff and we've talked about Dataflow and we've talked about Beam. I'm curious. So Beam is running inside the Apache Foundation. How is the organization structured there? I'm guessing we're still heavily involved there? Like what that's open source community look like? 

FRANCES: So Google had the bulk of the code for the original Dataflow Java SDK. And we had a couple of other partners we were working with at Cloudera and data artisans and talent who are writing runners and other sort of things that could integrate with this SDK. And so together, the group of us basically proposed the Apache Beam project to the Apache Software Foundation and donated the sort of initial code base. 

And since then, we've really grown into a full-fledged community. When you're working with the Apache Software Foundation, it's very an open community driven by individuals. So it's not specific corporations doing things, but you're really acting on behalf of the project. 

So I think one of the things we're the proudest of is how we were able to take something that was originally, basically, a proprietary single-company thing and start to transition it into an open ecosystem with a whole bunch of diverse perspectives, new people coming in being welcomed into the community. That's been quite the journey for the last year for many of us. 

MARK: OK. And I'll ask you, because I'm quite curious, what's the most interesting or crazy or imaginative thing that you've seen somebody do with Dataflow? 

FRANCES: I always have trouble answering this question because it's such a general framework that you can do basically anything. I think for me, the thing that is the most compelling is really the sort of mobile gaming application. Because what I really like about that is it brings home pretty easily, I think, the complexities of working in these real-time distributed systems. 

If you go and look on the Cloud Dataflow site, we have a mobile gaming walk-through. What we do there is show you how you build a simple batch pipeline to do your summations of you team scores or something. And then you start adjusting it until by the end, you've got a really complex streaming pipeline that's working over real-time data, ruling out spam robots. What we've built is something that can really give you a gentle ramp to learning and adding these new technologies. And that gives you so much flexibility for how you, as a developer, adjust your programs as things move along, as your needs change. Because they will. 

People have been doing batch for a very long time. People know that they should probably be doing stream processing. But it's kind of hard. It's kind of complex. So what we really want to do is let you sort of pick and choose. And as your needs change, be able to very flexibly shift your style of processing. 

MARK: Cool. So we're running out of time a little bit, but has there been anything that we haven't had a chance to mention, or you want to make sure you plug, or make sure the listeners hear about? 

FRANCES: Yeah. Since I'm on the SDK side of things, I haven't talked too much about the Dataflow service and it's no knobs approach to things. So I think one of the things that people realize is maintaining and tuning your own cluster can be-- not only is it a pain to manage those things. You also end up needing to change that tuning as your data sizes change or your processing changes. 

So one of the things that's really exciting about Dataflow is that it's fully auto-tuning. So it will choose the number of workers that your pipeline needs to run. And it can change that over time. And that's either because you've got a streaming pipeline and you had a huge spike of user traffic, right? And all of a sudden, you're going to need to drastically scale up. Or you're processing a large number of logs and you drastically filter it down into just a small data set, and then expand that out again. 

Even though your pipeline might run for 12 hours, there might be a period there in the middle where there's very little processing to do. You want to be able to throw a lot of machines at the beginning, scale them down while they're idle because there's no additional data to process it, and then scale them back up as you need to. 

MARK: Awesome. 

FRANCESC: Cool That sounds like a great experience for developers. So one last question. For people that want to learn more about Dataflow/Apache Beam, what's the link? 

FRANCES: Yeah. So I would start on cloud.google.com/dataflow. That's got all your basics about the Cloud Dataflow project. 

For Beam, you'd go to beam.apache.org. 

FRANCESC: Perfect. Well, thank you so much for taking the time today to talk to us and explain a little bit more about what Cloud Dataflow and Apache Beam are. Thank you. 

FRANCES: Excellent. Thanks, guys. 

MARK: So thanks again to Frances for joining us today to tell us all about Dataflow. Really great conversation. And really interesting, especially because I don't play as much with the big data space. So I really enjoy hearing about what capabilities we have in this area for big data and analytics. And especially, streaming data. So much thanks to Frances for joining us today. 

FRANCESC: Yeah, definitely. Definitely an interesting conversation. I learned a lot. And I'm still not sure if I'm going to be using-- now if I use Dataflow, I don't know if I will write Java, or Python, or just wait until there's a Go SDK for that. 

MARK: You know you want to write Python. 

FRANCESC: Have to wait. 

MARK: You want to write Java, I know you do. 

FRANCESC: Yeah Or JavaScript. Anyway, it's time for our question of the week. It comes from one of our listeners, [INAUDIBLE]. And he's asking about, OK, so I'm trying to set up my web application with Cloud SQL, which is a great idea. If you need to run a SQL database, Cloud SQL is a great place to do so. He's saying that the app is running on GCE, Google Compute Engine, and he wants to implement autoscaler and manage instance groups. 

Now, the problem is that when you want to set up a connection with Cloud SQL, one of the ways of doing this is to white list the IP of the instance that will connect to it. Now, if you have a managed instance group, you do not know necessarily how many instances you're going to have. So how do you do this? 

And I came up with a solution. And I'm going to say it first, but then we're going to talk about the actual good solution that you gave. 

My solution was, well, if there's anyway you can know what is the range of IPs that your instances will have, then it should be quite easy to just simply white list the range of IPs that you might have. But now, the problem is that, what if that range is limitless? Like you don't really know how many instances you're going to have. You may have 2 and maybe 12. But at some point, maybe you'll have 20. And then, those 8 that you didn't count on-- well, they will not be able to connect. So that is not really a very scalable solution. So you came up with a very, very good solution. So why don't you go and explain? 

MARK: I didn't personally come up with this. Engineers at Google did. 

FRANCESC: You came out with the name of a solution, I guess. 

MARK: Yeah. So there is this really-- I think it's a neat sort of thing called the Cloud SQL proxy. It works both for MySQL and Postgres. Basically, it is an agent that you can run on your machine. So in this instance, we're talking about Compute Engine. But you could run on Container Engine, Docker instances, even locally on your client as well. So it's an agent you install. You provide it some credentials. So basically, service keys much like you would do with just about anything else. And you can do that through local environments or files, all sorts of different stuff. 

FRANCESC: And I'm pretty sure it also even works with default credentials. So if you're running on GCE, it just automatically works. 

MARK: Yeah. So there's lots of nice ways of doing it. And then, so you run this agent locally and its job is to securely over SSL proxy the local connection you have for, say, MySQL from the local machine or that agent specifically over to the Cloud SQL instance. So this means then if you're running this proxy and it has the right credential setup and everything's great and you're running it locally, you don't need to do IP ranges. You just connect to your Cloud SQL proxy and it handles that whole security thing for you. 

It's actually pretty easy to set up. It's just a little agent you can set up and run if you want to run it. There are also a series of walk-throughs that are available in the documentation that show you how to do it from Compute Engine, from Container Engine, local client, that kind of stuff, too. So it's pretty great. 

And most of all, it's also open source. You can go and have a look at how it all works. It's on GitHub. And you can check it out, too. 

FRANCESC: Nice. Cool. So I hope that that answers the question of [INAUDIBLE]. He also mentions, hey, you still don't have an episode on Cloud SQL, which gave us an idea of, maybe we should do it an episode on Cloud SQL. 

MARK: Yeah. Always love the suggestions from the community. It gives Us ideas for content. Awesome. Well, Francesc, thanks again for joining me for yet another episode. 

Have you been up to anything interesting? I think I saw a new "Just for Funk" episode just came out? 

FRANCESC: Yes. I finally released it just eight days late. Because you know, Australia and things. But Australia. Sorry, Argentina. You're in Australia. I was in Argentina, a different country. But yeah, it came out. It's about Cgo. So how to call C libraries from Go. It is pretty cool, even though I made it. But I actually learned a lot by doing it. 

So if you've ever wondered how to do it, go watch it. Also, I'm actually getting ready for going to New York very soon on the 26th. At the same time at the Eastern meetup that we mentioned in [INAUDIBLE], I will actually be in New York for [INAUDIBLE]. We'll be running Go Tooling in Action Workshop. So pretty excited about that. 

What about you? Are you ever coming back to the Bay Area? 

MARK: I am coming back. My house is there. And so is my dog. And I need to come home for my dog. 

FRANCESC: Good. So it's not about me. It's about the dog. 

MARK: It's about the dog. Priorities. I am coming back, yes. So I'll be back in a little while. 

Where am I going to be? I don't know where I'm going to be for the next little while. I'm spending some time in San Francisco working on some projects. I have a secret project in the works that I haven't told anyone about. But I expect I'll also have some blog posts out more about game servers and Kubernetes coming out in the next few weeks as well. So I'm taking a little travel respite. We'll see what happens. 

FRANCESC: Very, very cool. 

MARK: Awesome. Well, Francesc, thanks again for joining me. I know I said that before, but I really appreciate you taking the time. I love doing these episodes with you. So thanks again for yet another week. 

FRANCESC: Thank you, Mark, for taking time out of your, I'm sure, incredibly busy, crowded vacations. But well-deserved vacations. 

MARK: Thank you. 

FRANCESC: And thank you all for listening. 

MARK: See you all next week. 
{{< /transcript >}}
