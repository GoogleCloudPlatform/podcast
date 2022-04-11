+++
audioDuration = "00:39:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.299.mp3"
audioSize = 94709066
categories = ["Apache Beam", "Data Processing", "Open Source", "Big Data"]
date = "2022-04-06"
description = "On the podcast this week, your hosts Stephanie Wong and Mark Mirchandani talk about the data processing tool Apache Beam with guests Pablo Estrada and Kenneth Knowles."
draft = false
episodeNumber = 299
hosts = ["Stephanie Wong", "Mark Mirchandani"]
title = "Apache Beam with Kenneth Knowles and Pablo Estrada"
image="/post/episode-299-apache-beam-with-kenneth-knowles-and-pablo-estrada/images/hero/hero-EP-299.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/txqnp3/episode_299_apache_beam_with_kenneth_knowles_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, your hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Mark Mirchandani](https://twitter.com/markmirch) talk about the data processing tool Apache Beam with guests [Pablo Estrada](https://twitter.com/polecito) and [Kenneth Knowles](https://twitter.com/KennKnowles). 

Kenn starts us off with an overview of how Apache Beam began and how Cloud Dataflow was involved. The unique batch and stream method and emphasis on correctness garnered support from developers early on and continues to attract users. Pablo helps us understand why Beam is a better option for certain projects looking to process large amounts of data. Our guests describe how Beam may be a better fit than microservices that could become obsolete as company needs change. 

Next, we step back and take a look at why batch and stream is the gold standard of data processing because of its balance between low latency and ease of "being done" with data collection. Beam's focus on the correctness of data and correctness in processing that data is a core component. With good data, processing becomes easier, more reliable, and cheaper. Kenn gives examples of how things can go wrong with bad data processing. Beam strives for the perfect combination of low latency, correct data, and affordability. Users can choose where to run Beam pipelines, from other Apache software offerings to Dataflow, which means excellent flexibility. Our guests talk about the pros and cons of some of these options and we hear examples of how companies are using Beam along with supporting software to solve data processing challenges.

To get started with Beam, check out Beam College or attend Beam Summit 2022.

##### Kenneth Knowles

[Kenn Knowles](https://twitter.com/KennKnowles) is chair of the Apache Beam Project Management Committee. Kenn has been working on Google Cloud Dataflow—Google’s Beam backend—since 2014. Kenn holds a PhD in programming languages from the University of California, Santa Cruz.

##### Pablo Estrada

[Pablo](https://twitter.com/polecito) is a Software Engineer at Google, and a management committee member for Apache Beam. Pablo is big into working on an open source project, and has worked all across the Apache Beam stack.

##### Cool things of the week

* Under the sea: Building the world’s fiber optic internet [video](https://www.youtube.com/watch?v=N0ng8R0_Tis)
     * Discovering Data Centers [videos](https://www.youtube.com/watch?v=2R-UVdw6thI&list=PLIivdWyY5sqI7lzvVHfp4zbwp3Xaub2jm)
* Google Data Cloud Summit [site](https://cloudonair.withgoogle.com/events/summit-data-cloud-2022)
* It’s official—Google Distributed Cloud Edge is generally available [blog](https://cloud.google.com/blog/products/infrastructure-modernization/google-distributed-cloud-edge-is-ga)
     * GCP Podcast Episode 228: Fastly with Tyler McMullen [podcast](https://www.gcppodcast.com/post/episode-228-fastly-with-tyler-mcmullen/)
* Save big by temporarily suspending unneeded Compute Engine VMs—now GA [blog](https://cloud.google.com/blog/products/compute/save-by-suspending-vms-on-google-compute-engine)
 
##### Interview

* Apache Beam [site](https://beam.apache.org)
* Apache Beam Documentation [site](https://beam.apache.org/documentation/)
* Dataflow [site](https://cloud.google.com/dataflow)
* Apache Flink [site](https://flink.apache.org)
* Apache Spark [site](https://spark.apache.org)
* Apache Samza [site](https://samza.apache.org)
* Apache Nemo [site](https://nemo.apache.org)
* Spanner [site](https://cloud.google.com/spanner)
* BigQuery [site](https://cloud.google.com/bigquery)
* Beam College [site](https://beamcollege.dev/)
* Beam College on Github [site](https://github.com/griscz/beam-college/blob/main/day2/B1_Beam_College_Advanced_Windows_and_Triggers_a_practical_guide_v0_9_0.ipynb)
* Beam Developer Mailing List [email](mailto: dev@beam.apache.org)
* Beam User Mailing List [email](mailto: user@beam.apache.org)
* Beam Summit [site](https://2022.beamsummit.org)

##### What's something cool you're working on?

Mark is working on a new Apache Beam video series [Getting Started Wtih Apache Beam](https://www.youtube.com/watch?v=65lmwL7rSy4&list=PLIivdWyY5sqIEiHGunZXg_yoS7unlHNJt)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 299 of the weekly Google Cloud Platform Podcast. I'm Stephanie Wong, and I am here back with my colleague Mark Mirchandani." >}}

MARK: Hey, everybody-- excited to be here for episode 299, which is one episode away from 300 episodes. That blows my mind. 

STEPHANIE: I know. And when was it when you started co-hosting? 

MARK: I've been here for several thousand episodes of our 300 that we've done. It feels like it's been quite a bit. Yeah, actually, I'll have to look that up and see which was the first episode I was on. But it's been-- 

STEPHANIE: Yeah. 

MARK: --such a great ride to chat with people and just have so many great conversations, so-- super excited to be here for 299 and super excited to continue being here. 

STEPHANIE: Yeah. Well, this episode is actually something I know is near and dear to you, Mark. You've talked about this topic quite a bit, so tell us what we're covering today. 

MARK: Yeah, absolutely. So today we're going to be covering something I realized we haven't really covered that much on the podcast before, which is both Apache Beam and Google Cloud Dataflow. And you might ask your first question, which is what's the difference between Dataflow and Apache Beam? And that's actually where we start our conversation, because we get to hear a little bit about the history of Beam. And we talk about its place in both the open-source community, but really in the idea of data processing and understanding, hey, data processing's really hard to do. 

Why is it hard? What makes it hard? How does Beam approach that? This is a really great conversation for us to get a understanding of how Beam works from a high level. But Beam is really complicated. There's really a lot going on there. So hopefully we can come back and definitely talk more about getting hands on with it. But we'll go over some great conversation, again, covering the history, how Beam works, and then we'll have a couple of resources in the show notes if people want to get hands on with it-- which I highly recommend doing. Again, it can be tricky, and it's worthwhile to spend that time getting hands on, playing around with it. 

STEPHANIE: And you're coming out with a video series already about Apache Beam, so that's a really good resource to start off with. But yeah, this episode was great. We got to talk to the engineers working on Apache Beam here at Google, and they're also part of the open-source committee for it. So you really get to meet the folks who are working on this day to day. But before we get into the conversation, why don't we go ahead and cover the cool things of the week? 

[MUSIC PLAYING] 

All right, so I have a really exciting cool thing of the week, and that is I have been working on a video about sub-sea cables and fiber optic technology at Google. And I've been doing it over the last year interviewing lots of folks, so-- super excited that it's finally come out on YouTube. So we'll be sure to include the link. But it is an honor to be able to do something very exciting and get to go and meet the people in person this past year. 

MARK: Yeah. It's such a spectacular video. And I know that, Stephanie, you've been working with a ton of people to make this video happen. And it's just super fascinating to see, because we get a little chance here and there to talk about some of the technology that makes all of this possible, but the giant deep sea cables that power the interwebs are truly such an amazing piece of technology, so hearing more about that-- and actually, you talk a little bit about that in your discovering data centers videos that you've done before too. 

So if people are obviously interested in learning more about that, I definitely recommend checking out the discovering data center content, because there's a ton of really cool behind the scenes information that you get to learn about that you wouldn't normally think when you're just using the cloud as a product. 

STEPHANIE: Yeah. Thank you so much, Mark. And you're right. As people might not know, much of the cloud is not actually in the clouds. It's undersea. And so I'm here to discover all of that and showcase how it all works to folks out there. My second cool thing of the week is that the Cloud Data Summit is today, April 6. It's live now. You can go ahead and register through the link in the show notes, but if you're unable to go live, you can watch everything on demand. 

And you'll be able to meet and see our partners and our cloud data leaders, who are going to be announcing our latest products features, our latest product announcements, and going through a bunch of customer case studies, talking about data warehousing, data processing, database strategy, and much more. 

MARK: Yeah. These are always a super cool time, and it always-- of course, there's going to be announcements that are going to come out for existing products, for new products. So I'm sure we'll be hearing about some of those new launches. And hopefully we'll get a chance to interview the people behind them at the podcast, and get real deep into what's going on, why it's super cool. There's so much going on in the world of data, I'm sure we'll never have any shortage of announcements to talk about. 

STEPHANIE: Yes. OK, one last quick little announcement that I'm going to add here is that the Google Distributed Cloud is out, generally available today. And that is what empowers customers to run 5G core and radio access networks at the edge. So you can do things like machine learning, anomaly detection using things like Nvidia GPUs out on our edge using our partner networks from our partners, like Bell Canada and Verizon. So get excited. 

MARK: Yeah. This is a super cool announcement. I think, obviously, there's going to be a lot of cases where people want to be able to control where their compute is happening, and edge is a great way to do that. We actually had a really fascinating interview. I think it was about two years ago now. I'll make sure to put a link to it in the show notes. 

But we had the CTO of one of our partners, Fastly, on the show, and we spent a lot of time talking about edge and what that truly means. So I would highly recommend checking out that episode. If you want to learn a little bit more about it. But it's kind of cool to see that this is just yet another offering that Google Cloud is bringing to people who want more control over how they compute and process their data. 

STEPHANIE: Exactly. And now, speaking of compute and having more control, I know that we also are coming out with a new release for Compute Engine, right? 

MARK: Yeah. This one's super cool. The ability to suspend and resume compute virtual machine workloads is such an amazing-- obviously, a lot of people's computers have had this functionality for a while. And virtual machines-- one of the best parts about them is being able to really control, OK, well, I can take this, I can make it more portable. I can start and stop it, but I can also suspend and resume it. 

And this is really an important way to save money on the cloud, because when you think about the workloads that you might be running in your virtual machines, especially when it comes to something like a development or a staging environment, you probably don't need that running 24/7. In some cases, you do. There's nothing you can do about that. 

But if you don't, suspend and resume is a great way to take that workload and suspend it, and then bring it back when you do need it. And then you're not paying for the compute or the memory resources. You're only paying a little bit for the storage. Say, for example, you have your entire development team working regular hours on a Monday to Friday basis, which is probably the case for a lot of people. 

You could suspend your dev workloads potentially every night and on the weekends, and then you're really cutting your compute costs by like 60%, at least for the dev environment. And that could be a huge saving if you have a widely distributed dev team. So that's just one example. But I highly recommend checking out this blog post, of course, but really just trying the feature out, and then thinking about, oh, how can you use this for yourself? 

You could set up a simple scheduler to suspend and resume workloads. You could even set up some triggers based on how people are logging in to resume the workloads as they need it. There's a ton of flexibility here, and it's going to depend on your use cases to see what's correct. But it's an exciting feature that just makes everyone's lives easier and save some money, and so I'm a pretty big fan. 

STEPHANIE: Of course, he would be-- Mark Money Mirchandani. 

MARK: Someday that will-- yeah. We'll keep doing it. 

STEPHANIE: I'm going to keep doing it. 

MARK: But I do love money. 

STEPHANIE: All right, well, let's go ahead and dive into our conversation with Kenneth and Pablo. 

[MUSIC PLAYING] 

MARK: Pablo and Ken, thank you so much for joining us today. To get things started, can you tell us a little bit more about yourselves? 

PABLO: Hi. I'm Pablo Estrada. I'm a software engineer here at Google. And I am also a [? commuter ?] in Apache Beam. I've been in the project now for a few years, and I work in all areas of the project, and also do a lot of community stuff for the open-source community. 

KEN: Ken Knowles-- I am a software engineer at Google. I have been with Beam since it started, and I'm currently the chair of the Project Management Committee-- which, I think, Pablo, you didn't mention you're on the Project Management Committee. You're managing all sorts of things [INAUDIBLE] and they are the governing body for the project inside the Apache Software Foundation. 

STEPHANIE: That's amazing. I feel like this is the heart of Silicon Valley gold, the chairs of open-source committees in our presence. But for people like me, who have a general idea of Apache Beam, but don't the full story to it, can you tell us about what Apache Beam is? 

KEN: So there's the technical bit and there's the historical bit, and they're both interesting. And I guess it all starts with big data. Apache Beam-- it's a model for general big data processing. You need much computers to do something, and you're the programmer trying to get at them all to coordinate and do something in parallel across a zillion machines. 

And there's not a million ways to do that, so Cloud Dataflow is Google's product for that. And where Beam came from within that context is we produced Cloud Dataflow, and just as an artifact of how we designed it, you could run your data flow pipeline locally on your laptop or you can also launch it on the cloud service. And so we wrote the code so you could plug in how it's going to run. 

And the library you use to rate your pipelines, your data processing pipelines then, was open-source, in sort of a throw it over the wall model they call it sometimes. We build it internally, but we release it open-source so everybody has the code, and they can take it and do what they want. But there wasn't really a community around it. 

And some people from Data Artisans at the time, and I believe it was Cloudera-- they took this architecture, where you could plug it in and run it however you want. They ran it on Flink, and they made adapters so you could take a data flow pipeline, and run it on Flink and run it on Spark. At least to me, that sort of was part of the spark to say, oh, this is actually a generalized thing. And so we got together and we actually said, OK, we have three companies plus-- and then we also had an initial contributor, I believe from PayPal. 

And we took the code that people were writing and we needed a neutral place to host it. So that would be a foundation. And of course, we wanted a place we could all continue to collaborate on it. And so the donation of what was the Cloud Dataflow SDK to the Apache Software Foundation came about that way. And we simultaneously had donations from multiple companies, which is fairly unusual, as I understand it, in open-source for a project to start with donations from a bunch of different people getting poured into a repository. That's a piece of the history. I didn't go back into the prehistory of Google's history of processing that led to this, but that's sort of the history of the open-source-- the origin story, as it were. 

MARK: Yeah. It's a model that we have seen a couple of times before at Google. It seems to be kind of common that Google will try and create this way of solving these problems, because Google has a lot of data to process, as it turns out, among other things. I think the really interesting part that you brought up, Ken, is when you take this and you release it out there, if it's a pattern that people don't like, then they're not going to contribute to it. 

So clearly, people saw something that they liked when data flow or when that kind of model got open sourced. And they said, hey, wait, I can use this for my-- and I'm sure PayPal is a fantastic example, because they probably process immense amounts of data. And so it sounds like they saw this and said, hey, I really want to use this, and then we found different ways to run it. That's a really cool story to hear, and it's exciting to know that people saw that and saw a lot of value in it. 

KEN: Since you mentioned them seeing value in it-- obviously, I think a lot about what is the value here-- as an open-source project, not just our own product that runs these pipelines-- not just Dataflow, but Beam at the time had a completely-- and we still do have this unified batch and streaming model that was what we were doing at the time. 

We were saying, you know what-- can actually have the same pipeline, or the same connector, or logic, and you can run it in a batch in a streaming context, and you can mix the two. And you need to mix the two. And so that was something that was really unique, and that drew in a lot of people, because there weren't a lot of streaming systems that had the rigorous semantics that Beam had. 

We have exactly once. We have true correctness. When you say this is-- the output is going to be like some aggregation of the input, you know that it actually is, which is not the case for most streaming systems historically. They might lose some data. They might duplicate some data. And I would say, still today that's a big emphasis of Beam is that level of correctness. We took that as a given that we're not going to compromise on that, and that was a new approach at the time. So I think that really drew people in. 

STEPHANIE: Yeah. It's super interesting, because I know that stream processing data is really difficult, because you have to balance things like correctness cost and latency. You might make a decision where you want to wait for data, but that increases latency. Or perhaps you do aggregate the data, but then it increases cost and potentially the correctness of the data. So this kind of introduces the challenges around processing data. Why does Beam exist with these in place? 

PABLO: I think, often, when people have, let's say, a service or some app that is generating data continuously, and they might want to get some insights out of this data-- and so initially they might be inclined to maybe write a microservice that will consume data from [INAUDIBLE] something like that. Maybe they'll use a little database to do aggregations and things like that. 

And they can count events, they can do averages, things like that. But over time, perhaps the use case will become more complicated. They might want to understand how certain users are navigating their app, or. They might want to have alerting, or any sort of more complex analytic where this microservices kind of bootstrap approach becomes a little obsolete. 

And then that's when they might want to think about the frameworks that let you not worry so much about how things will execute, and worry more about what are the semantics about, how do you deal with the time the events occurred? How do you deal with when the events come into your pipeline for processing? And if you need to do multiple aggregations, how do you do that? And yeah, so I think that's where Beam and other frameworks like it fit in very well. 

KEN: Something I didn't mention about my professional history is that I was doing analytics for companies prior to joining Google, and I was doing just that. I was rolling these customized things. So there was something ingesting the data, doing a little bit of making it so that you could stick it in a database. And then later you'd query that database, and you hope that you've got all the data in the database so you can actually query what you want. 

But sometimes you'd be like, oh, no. Actually, I need that data to be in the pipeline. Otherwise, I can't query the database for what I want. And it's just a nightmare really without a framework. And I was working without a framework in of the early 2000s, mid 2000s a little bit. And you come up with all these different ways and what if you're like, oh, I got to change my logic and rerun it over all my historical data? 

And now, if your model was a little microservice that's like a state machine that reacts to events as they're coming in, first of all, that doesn't deal well with reordered stuff on a network. It already has problems, but it also doesn't just automatically let you go and reprocess old data, or run experiments, or test whether or not your logic is sound against historical data. So that was a long story that was saying, yeah, you should use a framework like Beam. 

And you really must have streaming and batch unified, because it's all-- and they need to be. In the Beam way of talking about it, we talk about event time, which I think you've mentioned. You can't just have something that reacts to incoming data. You need something that has a model of what the incoming data logically represents. You might not be receiving it in the order that it happens exactly. 

And that's even more so for archive data. You want to receive all the events at once and very quickly process it. So the unified batch and streaming-- it's even bigger than unifying batch and streaming. It's eliminating that distinction and saying there's just a continuum of how out of order your data is, from a little to a lot. And you can do different things based on that. 

And I got way off on a tangent, but without a framework, it's really hard to navigate or adjust what you're trying to do there. So Beam's strength is that it really focuses on the core logic. And it leaves a lot of flexibility for engines to make decisions about how they're going to execute that logic. 

MARK: Yeah. So I want to dive into a little bit more about how Beam works, because I think the points you made were really important. And some people haven't done much data processing at all beyond maybe looking at a database and doing some simple calculations that way. But can we get a really, really quick high level overview of some of those points you just mentioned? 

What's the difference between batch and streaming? Why is streaming inherently a much more difficult challenge? And then the inherent understanding of data isn't typically ordered-- that's a big, big thing that comes up a lot in data processing, but let's talk really quickly about why that is. 

KEN: There are two aspects to that that also tie into why it's hard. I will say, one difference between batch and streaming that is different from the use case is that, in streaming, there's typically a presumption of wanting low latency often-- not always. If you're going to have a huge torrent of data and you're just trying to archive it, latency actually doesn't particularly matter. But in general, streaming-- people think of it as something where you want the data to update, end to end, your logic has to execute fairly quickly with low latency. It's very important. 

You asked two questions, so I'll answer the first question with two answers that are both topics of their own. And the other one is, of course, that when you have a batch of data, you know when you're done. That's a key thing. I'm paraphrasing somebody else who said, in batch you know when you're done, and in streaming you don't. You're basically waiting. 

Let's say I want to make sure I got all the data from yesterday. How long do I wait before I say, all right, that's it? And what do I do if something comes in a week from now? I'm increasing the time scale to put it on a human scale. For a computer, this can be like milliseconds or seconds where the same logic is relevant. And it really depends on your use case, I suppose. In high frequency trading, it's even smaller time intervals. 

I don't mess with that, but those kinds of questions arise in streaming. They exist. They're fundamental logical questions, whether or not you're using a streaming system, per se. If you're a bank and you're going to send out an invoice, you've made a decision about how long you're going to wait for information about what should be on the invoice. And if something comes later, you do have to issue some kind of correction, and you need a plan for that. 

And that's a streaming problem, whether or not you implement it via something like the streaming model of Beam, your business case. And almost everything is essentially. And so you start to see batch as just a way to implement streaming by just repeatedly doing batch jobs, and then having some logic around those batch jobs that turns it into a continuous business operation. 

PABLO: Yeah. I would add, as an example, thinking of invoices, maybe a business will have quite literally a batch job that they'll run on the 5th of every month, and it'll compute the invoices for all of their customers from the last month. Eventually they might start thinking, OK, maybe we want to start telling our customers forecasts about what will be their costs at the end of the month, or we want to reduce the latency when we send them the invoice. 

We don't want to wait until the 5th of the month. We want to send it immediately after the month ends. And so they'll start thinking about, how do they process that data in more real time, and how they'll also, in batch, have issues where maybe the job failed on the 5th, and they'll have to rerun it on the 6th. Yeah, a lot of this use case is starting batch and becoming more streaming. 

STEPHANIE: That's super helpful, just what you said about describing batch as almost a version of streaming, or you start with batch, it turns into streaming, but it's really driven by the use case of the business. And the tool that you end up implementing is driven by that logic as well. But circling back to Beam, because earlier you were describing Beam as never sacrificing correctness of the data-- I just want to go back to that a bit. Can you talk a little bit more about Beam, and how it works, and why you've decided to never sacrifice the correctness? 

KEN: Yes. So the decision to never sacrifice correctness-- in a way, it's to make sure you can address every use case. Or if there is some data going to be dropped, or duplicated, or something like that, it doesn't happen in the framework, doesn't happen as part of Beam. It happens as part of the logic that a user's authored-- because it's extremely hard to go the other way is how I would put it. 

Being actually correct composes well. You can take things that compute correct answers, and when you put them together, they compute a correct answer. When you take things that almost compute the correct answer, you put them together, and all bets are off pretty quickly. So it's really the only option. 

There's certainly a philosophical part where it's just like-- we care about this in our bones. But from like a technological point of view, this compositional argument is what I think about. And from a business point of view, I think it's just we want to serve people for whom correctness is mandatory. And it also saves you a lot of trouble, because I think the thing that was popular, I suppose, at the time was the lambda architecture-- which, honestly, I was doing lambda architecture before it was cool. 

You have something that's streaming, and it sort of does something that's mostly kind of correct. And I think, at some point, I had some [INAUDIBLE] system with some microservice listening to what was coming in. And you update the database, and then overnight some other thing, which was like, at that time, a bespoke program written in Scala operating over [INAUDIBLE] logs with overwrite all the data. Just completely wipe the results. 

That's one version of lambda architecture. People probably take issue with how I'm characterizing lambda. But the other way is to have two storage systems, one of which is the-- instead of wiping the data, you have something that's reading both storage systems and choosing whichever one is currently more accurate. Truth is Beam is really good for that too, because you can run your streaming data, and then overwrite it with batch if you want using Beam. 

That was really popular, and so you end up having to compute everything twice and deal with whatever happens in between the inaccurate results and the accurate results. And it's just a lot more work, honestly, to have. 

STEPHANIE: And cost-- that's the other thing. 

KEN: And cost, yeah. It's funny. I'm so used to using the word work and cost interchangeably. And in software engineering, you're always like, how much compute do I need to save to make this worth it and all this? 

PABLO: Something I was going to add is I think Beam itself does exactly once and implements full correctness, but it also kind [INAUDIBLE]. So if you're a user that cares a lot more about super low latency, you'll write your Beam pipeline to emit results as early as possible, and not need to wait for all of the data to be there. 

And if you care a lot about correctness, you might do this, but you might also allow, if data comes late, to make sure that it will be processed. And so Stephanie, you spoke about this earlier, about this trade-off between the costs, and the correctness, and the latency. And so if you want to have full 100% correctness, then you might have to, for instance, cache a lot of your data for a longer time so that, if there's late data, you can get this late element and compute some aggregation with your previous elements that you had already received. 

And so Beam offers a lever to move around this trade-off. Do I want to have very, very low latency and just get the results as early as possible, or do I want to make sure that any result that I get will be correct? Do I want to have a little bit of both, if I want to have forecasting and things like that? 

MARK: And that's kind of the really powerful and interesting part of Beam is that it really does have, it sounds like, the flexibility to do all of these things-- and do them at the same time, because you might want to get those results early and then wait for the actual full set of data to come in before replacing those. That's super cool to hear. 

And it's also really interesting that this was a model that was built as Dataflow, but then released to an open-source community. And so of course, as an open-source community's going to work on it, they're going to make changes to it, but it still has this portable element, where you can choose where you want to run the pipeline. If that's your local machine, great. If it's more distributed platforms, or if it's even back on Dataflow, that's really interesting as well. So what does that picture look like for Dataflow, now that people basically can take Beam and choose where to run it? 

KEN: You have all these options. I think, at this point, there's varying supports for Apache Flink, Apache Spark, Apache Samza, you've got Apache Nemo has the ability to run Beam pipelines. I'm leaving some out for the-- just for time really. I don't want to show any lack of respect for-- there's all these really awesome contributions. But those, I think, are the ones that come to mind. 

| get a lot of discussion and contribution right now anyhow. And yeah, I think that the choices will revolve around what the capabilities of the engines are. So Cloud Dataflow-- obviously, it's a cloud service, so it has really awesome no operational-- no ops. Yeah. Anyhow, it is auto-scaling, and it really takes advantage of Beam's most powerful features. 

But you can't run Dataflow on your laptop. You can't run Dataflow on premises in general. So it's not the getting started story there. If you want to, say, run streaming on premises, you've got Flink as a really good option. If you're looking for, say, really quick interactive latencies-- maybe you already have a Spark cluster-- a lot of people already have a Spark cluster-- you can, in fact, get started with Beam or experiment with porting your existing workloads to Beam using the infrastructure you've already got. 

PABLO: I do spend some time thinking about how organizations adopt these sort of tools and frameworks. And so maybe sometimes it'll start with one team that has data, and they'll implement it. But a lot of organizations sometimes will spin up a data analytics team or a streaming team, and something that happens that I've heard from others, and I think that's something that our team also went through, is a streaming team offers a platform for the rest of the company, for instance, to run their streaming workloads. 

And so a lot of what this streaming team will end up doing is educating other teams about what that means, and supporting the teams to onboard onto this stream processing engine, and sometimes being on call if the pipelines are not performing as expected, et cetera. And so the team initially provided Google internal stream processing engine. And so there were a lot of things that they were learning and trying to scale up the support for teams that use this sort of service. 

And so I think there's, yeah, lots of trade-offs on-- if you have a team, you want to run it on Dataflow, or you want to run it on Flink, or you want to run it on any other engine, you might want to consider all of these things. How are you going to support your teams? Do you want to let your teams take care of their clusters if they're running their own runner? Or do you want to support them on Dataflow as a platform? 

So yeah, there's a lot of trade-offs. It's an interesting question. For us, I think we also-- as we develop a managed service for Beam, I think we also have to think about how we support our users through this product interface, and also through this open-source community interface. And we do a little bit of both. 

STEPHANIE: So speaking of some of these trade-offs, I'm curious about hearing real case scenarios of customers or users who have really had to manage that decision making on their own as well and implement the tool. So can you share any stories, or examples, or your favorite data job that you've seen someone build? 

PABLO: One data job that I really, really liked-- this is not so much the general production use case, but this was a very cool data job. There's this consulting company called ML6. They were trying to build a prototype where they would analyze a stream of images, and this stream of images would be basically video from a soccer match. And so they would do machine learning on this video real time to try to keep the lowest latency, but they would try to detect events on a video stream. 

And so events that they would detect, for instance, would be the start of the game. So when the game started is when you start the transmission for the live stream for viewers. And whenever you have a score, you want to add it up to your analytics and things like that. And so they implemented all of this with very low latency, and basically, yes, a pipeline that would take [INAUDIBLE] stream of images and do a bunch of very interesting machine learning on it. So I thought that was super cool. 

STEPHANIE: I was just talking to my brother two nights ago about how Twitch still uses people to moderate their live streams to make sure that people aren't live streaming football matches and games. And I was like, really? They're still using people to moderate everything? Maybe it's possible that they could eventually have this use case where they would be able to just automate all of this too. 

PABLO: It's a hard problem, but there's very cool applications. 

KEN: A different favorite thing that has occurred to me while you were talking-- since you mentioned the platform teams at different companies, it's a really fun highlight for me. I love how Beam's been used at LinkedIn. There are participants in the dev list that really work on Beam and contributed the Samza runner. The folks at LinkedIn-- they build it. 

And what's really cool is that they found us, and they were like, this Beam adds value-- running Beam on Samza adds value for our users-- and noticed and adopted Beam's portability framework in order to run Python-based pipelines on Samza, which is not a capability they had. It's like the meta use case. You were asking about specific very cool pipelines, which-- I think I'm not going to even try to come up with anything half as cool as what Pablo mentioned. 

But in terms of cool use cases that Beam enables in that organizational structure that Pablo was describing, that's the sort of thing I love to see. Beam has this really unique-- not just portability across engines, but the ability to mix and match languages in the same pipeline. And that's something that really gives people who are using any engine a capability that they probably don't have any other way. 

PABLO: It's also hard to mention all of the use cases that Beam and Dataflow have. There's a lot of uses. Sometimes they'll stream data into their data warehouse. And there's been some new use cases where people are using Beam and Dataflow for data migration. 

So in Dataflow, we have a close integration with this [INAUDIBLE] Cloud Datastream, where you'll start your stream of changes, which Cloud Datastream will start archiving change histories from databases, and then you can start Beam job that will run on Dataflow, and that will consume this history of changes. And it will either sync it to BigQuery as data warehouse, or you can use it to sync those changes into-- we have support for JDBC, so basically any transaction processing database if you want to do a migration. 

And recently, the Cloud Spanner team has also been working on real-time replication from Spanner onto BigQuery, which is also a very cool use case where, because Spanner has full information about the event time of their events, we don't need to worry about late data in their pipeline, because Spanner has really excellent time semantics. And so we can make a replication into BigQuery where, on the BigQuery table, at any moment in time you'll see a copy of the exact state of the Spanner table at a moment in time. Other examples have this eventual consistency, but this particular Spanner use case has full consistency, which is cool. 

MARK: That's awesome. I love to hear how many use cases. There are, because again, this goes back to the point that people really see a lot of value in this entire model, and they're going to continue to expand on it in the ways that make the most sense, because whatever their business logic is-- and tons of businesses are going to have different ways that they want to do data processing, but they all clearly having a unified model is just a great way to approach it. So if people want to learn more or get started with Beam, what are some of the best resources for them to get started and/or to learn what's going on? 

PABLO: First of all, I would recommend the Beam website. And there's also a series of content that is being developed by some people in the community. It's called Beam College. So it's beamcollege.dev. We're trying to get together a series of videos that have high-quality walkthroughs of different Beam features. 

And we also have lots of notebooks and training materials. I can share some links, and we can get them probably on the podcast description or something. And if they want to get more involved with the community, I would recommend that they start participating in the mailing list. So Beam, as an open-source project, has a public open mailing list where users and developers can ask questions, discuss features, et cetera. These are dev @ and user @ beam.apache.org. We'll share links to all of that. 

STEPHANIE: Yes, we will definitely include all those links in the show notes. But any upcoming events? I think there's some exciting stuff coming up, right? 

PABLO: For this July, we have Beam Summit 2022. So in the last two years we had virtual events, but this year we're doing a hybrid event. So we're going to livestream all of the talks, but we're going to have people attend in person. The event is happening in Austin, Texas from July 18 to 20. So all of the information is available at beamsummit.org. 

We've just closed the call for proposals. So we've received proposals for talks. We have a lot of interesting talks. Some of the use cases that I mentioned will be presented there. Yeah, I'm pretty excited about it. 

MARK: That's awesome to hear. And it sounds like there's going to be a lot of cool announcements coming up. But also, just for people who want to learn more, there's a ton of resources. So those show links are going to have a lot of information. I've step through those notebooks. I've gotten a chance to do that recently, and it was super helpful just to see how everything works. 

And really, it's a complicated product. There's a lot that can go on in Beam, so it's great to get your hands on it and start learning, because that's really how you start to approach the complexities of it. Unfortunately, we are just about out of time, so Ken, Pablo, is there anything else you all wanted to mention before we wrap things up? 

PABLO: If anyone is curious about this, I will say, I think I'm very lucky to be working in an open-source project, but also a product where we get to interact with our users and our customers a lot. And so if you're curious or interested, you can come to any of the forums that we have for the open-source project. You can go and Stack Overflow. We also monitor Stack Overflow. And so we-- in general, most of the people in the engineering team are happy to talk to users, and exchange ideas, discussions, and help people out. So we'll be happy to chat with anyone. 

KEN: I'm just going to +1 that. I love interacting directly with users on all the mailing lists and Stack Overflow as a way to write about what's happening and help someone out. You may have already said this, but I want to emphasize even more that the membrane between user and developer is porous. We encourage users to come and fix their problems. But in general, you're very empowered. 

There's some stats that I've shared at talks I give about Beam that the vast majority of people who contribute to beam contribute like 1 to 10 commits. We have core Google developers and developers from other companies building Beam as a framework, but we have hundreds of people just saying, oh, I need this little thing. And it's awesome. And it's super fun to learn about it, and we're reaching people that there's no way we could if that wasn't possible. I just want to encourage users to talk to us. And also, if there's something that's not quite right, feel really empowered to propose the change, make the change. It's open-source. 

STEPHANIE: Awesome. Well, thank you so much, Ken and Pablo, for joining us today. 

PABLO: Thank you. 

KEN: Well, thank you too. 

STEPHANIE: So as mentioned many times already, data processing, especially with streaming, can be a very hard problem. It's very complex. There's a lot of difficulties between latency versus cost versus correctness. And yeah, I think this whole conversation really laid it out for me to understand how much of a burden it can be. But Beam handles some of that complexity for you. 

MARK: Yeah. It is inherently-- it's a difficult problem to solve. And Beam is not a super easy model to start working with immediately, but it is very powerful. And as we mentioned in that interview, the way that Beam thinks about handling data and making sure that you're getting 100% of your data and figuring out when certain data is going to come in, there's so much that Beam does that makes handling this data possible. 

And that's really important if you want 100% correct handling of streaming workloads, which is something a lot of people definitely want as data becomes increasingly fast and more complicated. There's always going to be a case to help make sure that we need to calculate tons of stuff. And so Beam is a really cool tool. As you mentioned earlier, Steph, we're publishing these videos that are going to hopefully be a good starting point. 

But I think one of the great references is Beam College, which-- the link will be in the show notes there. But there's a bunch of resources for different talks and different labs that you can do yourself, and getting up to speed with that stuff. I highly recommend it, because it can be a tricky problem to figure out. But once you're using it, it's just-- the potential is unlimited absolutely. 

STEPHANIE: Yeah. And one mental model that was very helpful for me was talking about how, when you're doing batch, when you're done. When you're doing streaming, you don't necessarily know when each window is finished. And that's where the concept of windowing comes in. And we can probably do an entire other podcast episode on just that. 

MARK: We could easily do an entire episode on watermarks and [? triggers, ?] and I probably would only understand it slightly more after it, because it is complicated. It's really hard, but that's the reality when it comes to handling streaming data is that this is a really difficult problem to solve. So Beam does some amazing stuff. So of course, many thanks to our guests for coming in and telling us more about it. And hopefully people want to learn more-- tons of links in the show notes for you. 

STEPHANIE: Yeah. Speaking of this video series you're working on, what's the outline of it so people can get excited? 

MARK: Yeah, absolutely. So this first video that has come-- out and the link will be in the show notes there-- will be for the introduction to Beam. And then, from there, we're going to talk a little bit about a batch data example. That video, I think, will probably be out a few days after this episode comes out. And then the next ones are going to dive more into those topics that look at streaming, at windowing, at watermarks, and triggers, because there's a lot of complexity, again, in that type of information. 

And we try to present it in a cool, hopefully funny way. I really enjoyed working on these videos, and of course, working with Debbie, who is just amazing to work with as a whole-- super exciting to always have a chance to work with her. But yeah, we're going to talk a little bit more about streaming data and windowing how Beam works with all those. And then there's a ton of topics that we have in the future set for those episodes, so-- excited to see these videos come out, excited to see how people receive them, and then hopefully to continue making more. 

STEPHANIE: Awesome. Everyone check that out. And Mark, once again, thanks for co-hosting with me. And for everyone else, we'll see you next week. 

MARK: Bye, everybody. I'm legally and contractually obligated to raise the octave of my voice and say, bye, everybody-- 

STEPHANIE: Yeah. 

MARK: --and wave, even though nobody can see me. 

STEPHANIE: Bye, everybody. Bye, everybody. Bye, everybody.