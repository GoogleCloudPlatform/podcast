+++
audioDuration = "00:34:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.126.mp3"
audioSize = 50480748
categories = ["Beam", "Spark", "Distributed Computing", "Big Data", "Open Source", "Data Streaming"]
date = "2018-05-09"
description = "This week our colleague, Holden Karau, joins us to talk about Spark and Beam."
draft = false
episodeNumber = 126
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Beam and Spark with Holden Karau"
#image="/images/post/Don't_Panic.svg.png"
linked = true
googlePlusLink = "https://plus.google.com/u/0/b/117267610519909886476/+Gcppodcast/posts/GMQs6Uop5vy"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8i8o7i/beam_and_spark_with_holden_karau/"
+++

[Holden Karau](https://twitter.com/holdenkarau) is on the podcast this week to talk all about Spark and Beam, two open source tools that helps process data at scale, with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl). 

<!--more-->

##### Holden Karau

[Holden Karau](https://twitter.com/holdenkarau) is a transgender Canadian open source developer advocate @ Google with a focus on Apache Spark, BEAM, and related "big data" tools. She is the co-author of Learning Spark, High Performance Spark, and another Spark book that's a bit more out of date. She is a commiter on and PMC on Apache Spark and committer on SystemML & Mahout projects. She was tricked into the world of big data while trying to improve search and recommendation systems and has long since forgotten her original goal.

##### Cool things of the week

- Twitter's collaboration with Google Cloud [blog](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2018/a-new-collaboration-with-google-cloud.html ) & [tweet](https://twitter.com/gregsramblings/status/992506460734025728)
- Kaggle CERN TrackML Particle Tracking Challenge Competition [site](https://www.kaggle.com/c/trackml-particle-identification)
- Open-sourcing gVisor, a sandboxed container runtime [blog](https://cloudplatform.googleblog.com/2018/05/Open-sourcing-gVisor-a-sandboxed-container-runtime.html) & [repo](https://github.com/google/gvisor)
- Announcing Stackdriver Kubernetes Monitoring [blog](https://cloud.google.com/blog/big-data/2018/03/testing-future-apache-spark-releases-and-changes-on-google-kubernetes-engine-and-cloud-dataproc)
- MLPerf: collaborative effort to standardize ML benchmarks [site](https://mlperf.org/)

##### Interview

- Spark [site](http://spark.apache.org/) & [community site](https://spark.apache.org/community.html)
- Beam [site](https://beam.apache.org/)
- Cloud Dataflow [site](https://cloud.google.com/dataflow/) & [docs](https://cloud.google.com/dataflow/docs/)
- Cloud Dataproc [site](https://cloud.google.com/dataproc/) & [docs](https://cloud.google.com/dataproc/docs/)
- Using Spark on Kubernetes Engine [blog](https://cloud.google.com/solutions/spark-on-kubernetes-engine)
- Testing future Apache Spark releases and changes on Google Kubernetes Engine and Cloud Dataproc [blog](https://cloud.google.com/blog/big-data/2018/03/testing-future-apache-spark-releases-and-changes-on-google-kubernetes-engine-and-cloud-dataproc)
- Spark Packages [site](https://spark-packages.org/)
- Spark testing base [repo](https://github.com/holdenk/spark-testing-base)
- Flink [site](https://flink.apache.org/)
- Arrow [site](https://arrow.apache.org/)

Upcoming Talks:

- [PyCon 2018](https://us.pycon.org/2018/) & Debugging PySpark [talk](https://us.pycon.org/2018/schedule/presentation/97/)
- [Scala Days](https://eu.scaladays.org/) & Keeping the "fun" in Spark [talk](https://eu.scaladays.org/lect-6920-keeping-the-%22fun%22-in-apache-spark%3A-datasets-and-fp.html) 
- [Strata London](https://conferences.oreilly.com/strata/strata-eu) & Understanding Spark tuning with auto-tuning [talk](https://conferences.oreilly.com/strata/strata-eu/public/schedule/detail/64759)
- [J on the Beach](https://jonthebeach.com/) & General Purpose Big Data Systems are eating the world [talk](https://jonthebeach.com/speakers/29/Holden+Karau)
- [Spark Summit 2018](https://databricks.com/sparkaisummit/north-america) & Accelerating TF with Apache Arrow on Spark [talk](https://databricks.com/session/accelerating-tensorflow-with-apache-arrow-on-spark-bonus-making-it-available-in-scala)

##### Question of the week

I have a continuous integration build process setup with Container Builder, but it’s all sequential. I want to speed things up by processing parts of it in parallel. How do I do that?

- Configure Build Step Order [docs](https://cloud.google.com/container-builder/docs/configuring-builds/configure-build-step-order)

##### Where can you find us next?

Mark can be found streaming [Agones](https://agones.dev) development on [Twitch](https://twitch.tv/markmandel).

Melanie is speaking at the [internet2 Global Summit](https://meetings.internet2.edu/2018-global-summit/), May 9th in San Diego,
and will also be talking at the [Understand Risk Forum](https://understandrisk.org/event/ur2018/) on May 17th, in Mexico City.


Special shout out: [Google I/O](https://events.google.com/io/) and [PyCon](https://us.pycon.org/2018/) are both happening this week

{{< transcript "MARK: Hi, and welcome to Episode Number 126 of the Weekly Google Cloud Platform podcast. I'm Mark Mandel, and I'm here with my colleague, as always, Melanie Warrick. How are you doing today, Melanie?" >}}

MELANIE: I'm doing good. How are you doing? 

MARK: I'm doing very well. 

MELANIE: Good. 

MARK: Very chipper today. I'm feeling very-- 

MELANIE: You are very chipper. 

MARK: I am very chipper today. 

MELANIE: Well, so this week, Mark, we're going to be talking with Holden, who's one of our colleagues, about Beam and SPARC. 

MARK: Yeah, two great open-source projects for processing big data at scale. 

MELANIE: Definitely. Before that, as always, we talk about our cool things of the week. And we do our question of the week at the end. And this week's question of the week is, I have a continuous integration build process set up with Container Builder, but it's all sequential. I want to speed things up by processing parts of it in parallel. How do I do that? 

But first, as always, cool things of the week. So Twitter is moving parts of its process to GCP. And we have a link to the blog post that talks about that, as well as some other additional kind of funny little bits. Apparently, it's moving its cold data storage and flexible compute Hadoop's clusters to Google Cloud Platform, which is over 300 petabytes of data. 

And fun fact, Greg Wilson, our fearless leader, had pointed out that back in the day, for any of you out there who watched "Star Trek, Next Generation"-- 

MARK: I did. 

MELANIE: --may have noticed that Data, the actual robot, admitted to his brain having about 100 petabytes of data. 

MARK: So Twitter has more data than Data. 

MELANIE: Basically. 

MARK: Cool. 

MELANIE: That's cool. Maybe we will finally see Data come to life. Another cool thing of the week, Kaggle is running a contest in collaboration with CERN, CERN being a research organization that operates the largest particle physics laboratory in the world. And so this competition in particular is taking a lot of their data that they've collected and getting outside support, in terms of seeing can machine learning assist in high energy physics at discovering and characterizing new particles? 

What's cool about the competition, outside of the fact that there's $25,000 prize money-- 

MARK: Nice. 

MELANIE: --that's associated to it, always good, is that it's coming in two parts. And so the first part of the competition is going to be made in July. And they'll be focusing on more of the high score, and it's more about the accuracy. And this aligns with the conference IEEE, WCCI competition that's being presented in July. And then, there's a throughput phase that's really more focused on the speed, in terms of processing. And so, this is aligned to a phase that's between July to October, and will wrap up at Neural Information Processing Systems Conference in December. 

MARK: Nice. 

MELANIE: Yeah. 

MARK: So we've got a bunch of announcements around, strangely enough, containers and Kubernetes. I think one of the ones I'm really excited about is a product called Gvisor, which we open-sourced back in May 2nd. This is really interesting. This is a new kind of sandbox that provides secure isolation for containers, while still being more lightweight than a virtual machine. 

So it integrates with Docker Kubernetes. But really, I think, what's kind of exciting about this is it really imposes a very strong, secure isolation layer for when you want to run code that you don't necessarily trust. Maybe it comes from outside, or you're opening things up, or maybe you just want the extra layer of security. I think it's really, really cool in that it really allows you to be able to run things in a very secure environment. 

Now, there is a tradeoff. At its core, there is a userspace kernel that basically emulates the Linux kernel, which does mean that the flexibility that you get comes at the price of higher per system call overhead. And there are some details in the blog post. 

But this is really exciting look for integrations with Docker. There's a sample in the blog post about how you can run it with Docker right now, some experimental support, potentially within Kubernetes, as well, that's going to come down the line. So there's some really interesting opportunities here for being able to build some really interesting platforms for customers on top of this technology. I'm really excited about it. 

MELANIE: And then, one of our colleagues, Ian Lewis, has a demo that-- there's a video, actually, at the end of the blog post, we'll include in the show notes. And you should check it out. 

MARK: Absolutely. Speaking of Kubernetes, of course, we announced the Stack Driver Kubernetes monitoring system. Basically, this is really cool. I really like this, too. It's essentially a single pane of monitoring glass for your Kubernetes cluster, whether or not they run on us or on GKE, or whether they run on Prem, or other places. 

This is great, too. It also hooks into Prometheus, which is pretty much the standard or the default open-source monitoring system, as well. So you've got a lot of options there. I really like this. Right now, it's running on what looks like-- it will be available in production clusters as soon as Kubernetes hits 1.10 on Kubernetes Engine. 

But you can try it right now, if you want to run an alpha cluster on us and take it for a spin. That should be available to you so you can see what it's like. And we definitely want to hear your feedback. So in the blog post that we'll link to, there is a Google group where you can send all sorts of questions and feedback to, as well. 

MELANIE: Great. One last thing we're going to mention for this week is that Google Research is actually participating in mlperf.org, which is this effort to basically set benchmarks to measure systems performance for both training and inference in machine learning performance. So this is a collaborative effort that's going on across a number of different corporations, as well as education institutions and research organizations, and University of California Berkeley, Stanford, Harvard, Google, Intel, Baidu, AMD. So basically, they're working together to try to come up with common standard benchmarks, which I think is really wonderful. And we will include the link in the show notes, and you can check it out. 

All right, Mark, we had a lot of cool things of the week, especially because CubaCon was last week. 

MARK: Yes, it was. 

MELANIE: Now I think it's time for us to go talk with Holden. 

MARK: Let's do it. Today, I am particularly excited to have the always effervescent Holden Karau with us today. Holden, how are you doing today? 

HOLDEN: I'm good. I've got coffee, which I've been told not to drink. And so, I'm really looking forward to when this is over, and I can drink my coffee. 

MARK: Awesome. Well, thanks for joining us today to chat about Beam and SPARC. Before we do that, though, do you want to tell us a little bit about who you are, and what you do here at Google, and all that sort of stuff? 

HOLDEN: Sure. So I focus mostly on open-source big data tools, so things like Beam, SPARC, to a lesser degree, other things like Kafka, which are not data processing, per se, although moving more in that direction. And that's sort of my main focus, is the open-source tools that we have. And I mostly do sort of external facing work, not a lot of internal stuff. But I do occasionally have delightful conversations with people about ways we can make our products, which are built on top of these open-source things, more awesome. 

It's fun. People pay me to write open-source code and fly around the world. So my life is pretty cool. 

MELANIE: And how did you get involved with SPARC and Beam, to begin with? 

HOLDEN: So I got involved with SPARC from the last time I was working at Google. There was this thing called FlumeJava, which was kind of cool. But I couldn't use it for any of my personal projects. And somehow, back then, I still had time in my life for personal projects. 

And I was like, I really want to use this software. But you know, I can't. So I looked around for an open-source reimplementation of Google technology, which is a pretty common approach in the big data world. And I found SPARC. And I was like, oh, cool. This uses functional programming. This is awesome. That's sort of how I got started with SPARC. And that was a lot of fun. 

MELANIE: Was that in Scala, when you were working with it? 

HOLDEN: I mean, SPARC started in Scala. And it's still in Scala now. But you can use it in other languages, as well. But for me, Scala was actually a pretty good fit. I'd just come from Foursquare, where everything was built in Scala. 

And I really like functional programming. I think it's kind of a nice way of thinking about the world. And so, I really enjoyed a framework that really put a functional approach to dealing with data. I felt it was a really cool fit. 

MARK: Cool. Let's take a small step back. For those people who aren't as familiar with, say, Spock or Beam, what's the kind of problem that those products are trying to solve. 

HOLDEN: Both SPARC and Beam, and a lot of other things in this space, essentially solve the problem of, you have a lot of data and you want to do something with it. And it's too much data to fit on a single computer or maybe even a few single computers. And it's about splitting the problems up, distributing both the data and the computation, and then collecting the results back in a way that you can use them. 

So some of the classic problems where people use this are things like training recommendation systems, where you have a lot of information from all of your different users. Other times, it's things like fraud detection, where we'll have a lot of transactions, and we'll want to train models. It's not just machine learning. It's also often used for ETL. So we might have an old legacy database, which we also want to expose in a nicer way. And so you might have a batch job which comes in and, you know, picks up your data from your legacy database and makes it available to people to do sort of exploratory analytics on. 

MELANIE: And where did Beam come from? 

HOLDEN: Beam came from sort of a large number of different Google projects. It's sort of the grandchild, in a way, of MillWheel and other things like this. So it's the grandchild of a lot of Google big data tools. 

It brings a lot of the learnings that we've had from working on MapReduce, and working on things like MillWheel, and other analytics tools, and brings them all together into one place. The idea is that Beam will provide a portability layer from Google Dataflow, which exposes all of these cool tools to people to use to things besides Google Dataflow, because as much as we love people that use Google tools, not everyone wants to write their code against just a Google back, and they want to be able to run it in multiple places. 

Some people have analytics jobs, which they need to do both on data which is less secretive, and then they have similar jobs which have to be run on super secret data, which they can't put in the Cloud yet for maybe regulatory reasons. And so having a system which is able to both run in the Cloud and run on Prem is a really cool idea. And it's one where we have perhaps not quite delivered what we set out to do initially. But I'm really excited about the direction we're taking with it this year. I just yesterday was at Fling Forward, where we were talking about some of the work which we've been doing around making Beam on top of Flink, which is an open-source Apache project, a better experience for people. 

MARK: So this sounds great. But you work on SPARC and on Beam. 

HOLDEN: Yeah. 

MARK: Are they competing open-source products, or what's the relationship there? 

HOLDEN: So it's complicated, right? I want to be clear, there's also Apache Flink, and other open-source runners, which do similar data processing tools. And we all take slightly different approaches to solving the same problem. And at the end of the day, what happens is, we tend to go and steal the best ideas from each other, because it's open-source and we can do that. Everyone wins this way, right? And we also, by competing with each other to some degree, push the state of the market forward. 

And so in some places, Beam and SPARC are competitors. In other places, you could actually use Beam on top of SPARC. And so they can be complementary. And it's really confusing, if you're not from an open-source background, to think of this mixture of competing and cooperating at the same time. But I think it's a really good model. 

MARK: Are there particular cases where you would use, say, one or the other, or together, or-- 

HOLDEN: The cases where you would use Beam is probably more around streaming. Historically, SPARC Streaming has had maybe not as great support as in Beam, although SPARC Streaming is, of course, also improving. One of the things which continues to happen in these places is, you know, we'll do something cool, someone else will do something cool. 

Sometimes it will actually be the same developer in two different projects. There's pieces of code that I've written which are not the same code, but accomplish the same task in both SPARC and Beam. Anyways, back to Beam, more likely to use it if you're interested in portability between Google Cloud and an On-Prem solution, or other things like that. 

SPARC, though, for example, has much more options in terms of machine learning. Beam takes, from a programmatic standpoint-- Beam SDK is very much focused around sort of whole program optimization. And it's really cool, and you can do a bunch of interesting things as a result. But because of the way it was initially built, it's kind of difficult to do iterative algorithms, like Gradient Descent, which are really common in machine learning. And so, SPARC has a more full featured set of machine learning tools that are available for it, right now, although of course, you know, Beam is looking at what it can do to improve its machine learning options. And none of these things really will remain static. 

MELANIE: So you've talked about how they're both open-source. We also have them at GCP. And so how does that work? They're manage versions of these products-- 

HOLDEN: Indeed. 

MELANIE: --and if so, what are they? 

HOLDEN: Glorious Employer provides excellent managed solutions. 

[LAUGHTER] 

MELANIE: I wasn't teeing that one up at all for that one, yeah. 

HOLDEN: There's Dataflow, where you can run Beam. Beam on top of Dataflow is a really good experience. SPARC actually has two different managed back ends, which you could use at Google, and different levels of support associated with those different back ends, both in terms of just functionality and actual support. 

So Dataproc is probably what most people think of as the managed solution for SPARC at Google. I'm really excited about where we're going with that. There's a lot of exciting improvements we can make there. 

The other one, which is new, because in SPARC 2.3, we added support for Kubernetes-- and this is really exciting, because it now means that SPARC can run on top of things like GKE. And actually, one of the things-- it's a little clunky to use right now. But with SPARC on top of Kubernetes, you really need a separate distributed file system available, because it doesn't tend to ship with one, whereas SPARC on Dataproc traditionally ships with an HDFS yarn provider. And so, running SPARC on Kubernetes in the Cloud is a much better experience, because you tend to have an object store like GCS available to use. 

So it's pretty cool. SPARC on GKE is like a managed service. But if you run into difficulties, I mean, it's like a managed service on the Kubernetes side. And if you run into SPARC specific difficulties, you're probably not going to get as much support as you would if you were in Dataproc. But it's a really fun way to try out cutting-edge stuff. And I actually have a blog post on the GCP Big Data blog about how you can try out different new versions of SPARC-- and actually, not that I'm just trying to get people to do my work for me-- 

MELANIE: But you are. 

MARK: It's called delegation, I believe. 

HOLDEN: Well, no, no, this is-- it's delegation when we're-- 

MARK: Efficiency. 

HOLDEN: --at the same company. And it's valued partnership building. 

MELANIE: There you go. 

HOLDEN: That's going in my personal accomplishments, if anyone actually picks up these tasks. Please do. So one of the things which I would really like the community's help with, and especially if you are a SPARC user-- if you're not, don't feel obligated to do this at all-- but come release time, we have this process where we make candidates for release, right? And that's like, we think this is a pretty good release. But we're limited by the workloads that we know about, right? And this is open-source we, not the Google we. 

And so, the people involved with the SPARC project, like the core developers, it's a large set of people. But it's not, you know, completely representative of actual users. And if you wanted to, and you were using GCP, you could try out your workloads on top of SPARC with GKE with one of these release candidates, with the instructions in that blog post. 

And if it doesn't work, you can let us know so we don't release broken software and have to patch it later, right? You can help us catch our bugs earlier. And we can make better software together. 

MARK: So if you already have maybe a production workload set up on, say, GKE or something like that, you could spin it up and just take it for a test run and see what happens? 

HOLDEN: Totally. But definitely, take it for a test run in an account with lower permissions, so that you don't overwrite your data, just in case we screwed up really badly. 

MARK: Or make a copy, or something. 

HOLDEN: Yeah, yeah, sure. Copies are cheap-- 

MARK: [LAUGHTER] 

HOLDEN: --right? I don't actually know how much we charge for anything. 

MARK: Cloud privilege, I understand that. 

MELANIE: What's changed to make both Beam and SPARC put so much focus on non-JVM languages? 

HOLDEN: So I think the biggest change is that deep learning is very cool right now. And people are trying to raise money in Silicon Valley. I mean, we're not. We are a publicly traded company. But a lot of the open-source companies are like, ooh, I need to add some AI to my-- 

MELANIE: Spread some AI on that, it looks good. 

HOLDEN: Yeah, yeah. It looks a lot better. We're not just a big data company, we're a big data machine learning company. But you know, big data machine learning isn't as cool as big data deep learning. 

There are some JVM tools for deep Learning. But there's not quite the same full range of options as there are in Python or other languages. And a lot of people really want to be able to just copy and paste that Python code and have it run, rather than translate it into Java, because it's a lot less work for raising your next round of funding. And so really, it comes down to people in Java now are actually wanting to use Python code. And this is really exciting, as someone whose job it is to make Python and Java work together. That's my role, to a large degree. 

MELANIE: Those communities don't always get along, too. 

HOLDEN: No, historically, they have very nice things to say about each other. 

MELANIE: Yes, they do. They very much respect, wholeheartedly, each other's different point of views on coding. But anyways, yes, you were saying? 

HOLDEN: Yeah, super awkward when you're in between those two communities, and you're just like, hmm, maybe let's stop making fun of classes, or like, I know that Jill's a thing, but it's not that bad. Anyways, whatever-- 

MELANIE: And I actually like both languages for different reasons, and don't like both languages for different reasons. But yes, I can see where the disconnect comes from. 

HOLDEN: But getting back to the main point of your question, people are now trying to use Python code from Java. And it's really exciting because the Python people have always been trying to use some of the big data Java code. And now that both sides are working together rather than just random people like me hanging out in the middle, you know, there's a lot more interest. And so you see projects like Apache Arrow, which are really exciting and provide a common data format between the different languages so they can inter-operate a lot better. And so this is, I think, really exciting. 

MARK: Is it just Python, or like-- 

HOLDEN: No, Arrow is not just Python. It's Python, R, Java-- I think JavaScript, but don't hold me to that one, and Go, people were talking about on the mailing list. And I'm sure there's more that I'm just not keeping up with. I mostly care about the Python community. But other things are good, too. 

MARK: And does that mean, then, you can use those languages on SPARC or Beam as well, or is that just Python and Java derivatives? 

HOLDEN: Yeah, so it doesn't mean that we can necessarily use those languages together in SPARC. We can use both Python and R. In Beam, there's actually interesting work being done to add support for Go, which is actually something that I demoed yesterday at Flank Forward. Word Count is the best demo ever at a big data conference. We counted a lot of words, genuine big data. 

So Beam doesn't actually depend on Arrow. Because Beam has this sort of Google lineage, it actually uses flat buffers and other things like this, which are very similar to Arrow, but, you know, have a slightly different and pretty uninteresting ways, unless you really like C++ code, which is fine, too. 

It's more or less unrelated, but they're following similar approaches. And just because we have a common format to get the data between each other, there's this other sort of challenge where we have to figure out a way to take our functions and serialize them, and send them across the wire and deal with that in a nice way for execution on another machine. And so in Python, that's a moderate amount of work, and we use like a weird custom serializer to make it happen. In Go, it's also a non-trivial amount of work. 

And so, there's other problems that have to be solved to make a language work here. But having a common data format is one of the prerequisites. So it's exciting to see that part get unlocked for more languages. 

MARK: Nice. For someone who hasn't touched SPARC or Beam, what does the development cycle look like? How does that whole process go? If I'm like, I have some data and I want to process it to either learn something about it, or change it, what does that look like? 

HOLDEN: So they actually have slightly different processes, as common sort of first paths. In SPARC, it's really common to get started by opening up a Notebook and sort of just poking at your data for a while, to be like, I wonder, maybe it does-- no, that doesn't work. OK, what about this? And it's a very iterative nature. 

That tends to be more for Python and Scala developers. Java developers, you know, you open up a new project, you make a Jar, you submit it to the cluster. You take a look at it. And it's a little more heavyweight when you're working in Java. And it's also a little more heavyweight when my cost to test something out is compiling my project and submitting the Jar. Even though it may take similar amounts of time, the mental overhead is more than Shift Enter. 

And so for Java developers, it tends to be more like, you'll print out your schemas, you'll look at it, you'll make a quick test pipeline. And then you'll sample the data and run it through to see what happens. And with Python and Scala developers, in the SPARC line, you tend to use a Notebook and sort of poke at it that way. 

MARK: So more like an online REPL type thing. 

HOLDEN: Yeah. 

MARK: Nice. 

HOLDEN: And in the Beam line, the online REPL thing, not so happy just yet. 

MARK: OK. 

HOLDEN: It's more focused around sort of traditional jobs where you submit, you know, a package to the cluster. 

MARK: So basically, I write some code in some language, I submit it to the cluster, and it's the clusters job that splits that up and paralyzes that work? 

HOLDEN: Yeah, totally. If you really want, you can do things slightly differently. One of the things which I do, because I travel so much, is I'll also, if I'm working with non-sensitive data, I'll sample my data and save it locally to my machine. And then both Beam and SPARC have this concept of a local mode runner, where you can just run your stuff against a local copy of your data to just check and make sure that it works. So you know, your development cycle isn't super long. You're not always having to submit something to the cluster. You can just try stuff out locally before you run it on your genuine big data. There's air quotes around that, just to clarify. 

MELANIE: Nice. What type of machine learning options are there? 

HOLDEN: In SPARC, there's a lot of different machine learning options. From just sort of a design point of view, writing iterative algorithms in SPARC is a lot easier than writing iterative algorithms in Beam. So things like Gradient Descent are just a little easier to write in SPARC, just because of how these two platforms were developed. 

And so, SPARC has kind of a head start and a lead there. And so, you can do linear regression, you know, just classic good old fashioned stuff. You can make your decision trees. You can make your random forests, sort of all of the classical, both regression and classification algorithms. And then there's also this collection of SPARC packages, which essentially comes from-- I mean, there's just not enough ML reviewers inside of SPARC. And when people show up with new algorithms, I'm just like, I could read your paper, or I could take a bath, and then-- 

MELANIE: --and read it while you're in the bath. 

HOLDEN: Yeah, no. 

MELANIE: No. 

HOLDEN: That's where email gets done. 

[LAUGHTER] 

MELANIE: That's important. 

HOLDEN: Very important. But no, so it's just like-- the amount of work to review an algorithm for inclusion is really, really high, because you want to make sure it's correct. And you also want to make sure that it's maintained. And nothing against grad students, I love grad students and their code, but pretty frequently, a lot of people will show up with an algorithm that they've implemented in SPARC from part of their grad project. And it's just like, we'd love to take this. But we also know you're going to graduate really soon. And who's going to maintain this when you go work in industry, or, you know, go and become a full professor. Maybe you'll get your new tiny grad students to look after this. But I'm not sure. 

If you want to go and try that grad student code, you can totally go to sparc-packages.org and scroll through the list of grad student machine learning models, and pick your favorite one, and just hope they keep it up to date, or your business process changes before you need any bug fixes. Or you can become a machine learning developer yourself, which is great. And if you make your business process depend on it first, well, there's not a lot your boss can do. 

MELANIE: Whether you're doing machine learning or not, what does it look like to contribute to Beam and SPARC? 

HOLDEN: Totally. So they're both open-source projects. And they're both within the Apache Foundation. And this is cool, because it means that there's some common elements of culture between the two. Obviously, the people are different-- or sorry, not obviously, but the people are different between the two to some degree. And so there are different cultural practices that have developed. But there's sort of a common framework for how you go about those. 

In both cases, you start by subscribing to the developer mailing list. And it tends to be dove dash subscribe at Beam or SPARC dot Apache dot org. And then you can subscribe to the mailing list. And you can start to see what other developers are working on. 

And then you can also say, hi, what's up? I'm new here. Does anyone want to give me some guidance? If you do that on the SPARC project, there's a really good chance you'll get ignored. If you do that on the Beam project, it's more likely people will be like, yay, new friends. 

And this is mostly just because Beam is a younger open-source project than SPARC. And so it's easier to be like, I don't have 200 other people I'm already working with. Here's a new person. Let's do this. And in SPARC, it's like, I have 200 open pull requests that I need to review. If you come with some code, I'll help you, but not yet. 

And so that can be a little different. In both cases, Jira is used to track the issues. You can go into Jira. You can look at open issues. You can look at things which people have maybe tagged as starter issues. They're broken down by components. 

So I myself personally mostly go and look at either the Python or ML issues in each project and see if there's anything that people are encountering, as either bugs or improvements, that I want to work on. And those are things that I pick up and do. And then, they're both on GetHub. They both accept pull requests. And you can sort of go from there. 

They each have their own contributing guide, as well, on their website, so that you can look at it. And they have style guides, as well, because when you have open-source projects like this, you want a consistent style, even though, you know, we don't work at the same company and don't have the same shared style guide. So each project has its own style. 

Switching between the two projects is great because the styles are different. And that's just super easy to keep straight in my head. And I love my life. 

MELANIE: What are you excited about the work you're doing? 

HOLDEN: Well, so there's different kinds of excitement, right? There's excitement about code, and there's excitement about code other people are writing. And then there's excitement about people that I get to meet when I go out into the open-source world. 

So the excitement about code that I'm writing is mostly-- there's some stuff around improving the speed at which Python and Java are able to work together. And that is something I'm personally really passionate about. And I'm excited to make that more awesome. And actually, I have a talk at SPARC Summit S.F. about how you can use that to use TensorFlow inside of SPARC. And you can use similar techniques inside of Beam, but it's more complicated. And so that talk will probably be a quarter later, once I work out some more bugs, so one thing, then the other thing. 

Code other people are writing that I'm excited about-- there's a lot of really interesting, exciting things in both projects, which are happening around sort of improving the SQL experience. And I think this is a thing which is often overlooked, at least among people like myself. 

MARK: Is this a BigQuery experience type thing, and type of SPARC? Is that kind of how that works? 

HOLDEN: It's similar to BigQuery, except it runs with the SPARC engine. So it's less managed. And there's sort of more of a maintenance overhead. But the idea is that you can write SQL queries against your traditional big data. 

The nice thing about that is, if you work with someone from maybe more of a data analyst background who might be more comfortable working with SQL, they might produce some really cool insights. And then it becomes your job to productionize them. And then that can sometimes mean rewriting SQL in the Java. And that's about no units of fun. 

But instead, because it has an integrated SQL engine, you can, you know, just plop that SQL statement in and then rewrite the critical path, or the expensive parts, into your Java code while keeping most of this existing SQL code. Or if, you know, the SQL code runs fine, you can just plop it into your Jar and consume it downstream in the rest of your ETL pipeline. Anyway, so there's improvements happening in both Beam and SPARC around SQL. And that's really exciting to see that happening. 

MELANIE: Are there any other improvements or future features that you're looking forward to? 

HOLDEN: Yeah. In both cases, they're open-source projects. So there's features which I think might happen. But it's really difficult to say for sure what will happen, because it comes down to what the community ends up wanting. And even if, for example, I were to show up with code, there's no guarantee that that's going to be what the community wants. I can commit my stuff in SPARC. If we don't have a consensus, it's considered impolite to make changes-- more than impolite. 

But it's important that we all work together. And so, there's things which are far enough along that I'm pretty sure they're going to happen. The SQL improvements are going to happen. And everything else is a little more, eh, who knows if it'll happen? 

MELANIE: Nice. 

MARK: That's fair. 

MELANIE: Well, you mentioned that you've got a lot of talks that you do. And were there any talks in particular that you wanted to talk about that you're going to be doing soon? 

HOLDEN: Yeah. So I have some ones that I'm excited about. I'll be at PyCon very soon, as well. I'll actually go from PyCon to Scala Days, which is very symbolic of my life in a lot of ways. Both of those talks are exciting. And I love both the Python and Scala communities. So I'm really looking forward to that in May. 

And I'll also be at Strata London, and then J on the Beach. I've never been to J on the Beach before. But from what my coworkers have told me, it's a really amazing conference. So I'm looking forward to that, as well. 

MELANIE: What does the J stand for? 

HOLDEN: Java. 

MELANIE: Java? OK. 

HOLDEN: And SPARC Summit S.F., of course, in June. I'm really excited about that talk. I think it's going to be really cool. And I really hope my demo doesn't crash. 

MELANIE: Nice. I don't know, J on the Beach makes me think, like, sandals, standing out on the beach, with a projector. 

HOLDEN: I don't think it's actually physically on the beach, although I did go to-- 

MARK: Now I'm disappointed. 

[LAUGHTER] 

MELANIE: Me, too. 

HOLDEN: Well, no, I mean, I could be wrong. I went to a conference in Amsterdam where I was like, there's no way this is actually on the water. And I was like, oh, this is on a boat on the water. OK. 

MARK: Cool. 

HOLDEN: Cool. And so, if it is, I can get out my mermaid tail, probably. And that will be an exciting opportunity to give a mermaid presentation. But-- 

[MUSIC PLAYING] 

[SPLASH] 

MARK: Nice. 

MELANIE: Sweet. 

MARK: All right, well, before we wrap up today, is there anything we haven't mentioned, or something cool you want to talk about, or-- 

HOLDEN: So one of the other things, which I'm passionate about, as well, is testing and validating these big data pipelines. I think it's really important. It's often overlooked, because it's a little harder to do than on our other projects. And a lot of humans, when encountered with a problem slightly harder, which literally does not catch on fire, just kind of walk around it. And while it doesn't catch on fire, it does catch on fire later. 

In a little survey that I ran with a few hundred respondents, 15% of people said that their big data pipelines caused serious production outages. And that's a lot. And I enjoy not having to keep an up-to-date resume. And I assume other people do, too. 

I also don't want the software projects that I work on to be responsible for my death. So I think people should definitely test their SPARC and Beam code. In SPARC, there is this project called SPARC Testing Base, which I work on, which makes it easier to test your code. And in Beam, it's actually really nice. There's some built-in primitives for doing high quality testing. 

There's things called [INAUDIBLE], which make it really easy to do pipeline assertions in Beam. And I think they're really cool, and perhaps underused. And so I would always encourage people, please test and validate your pipelines. If you don't know how, I have talks on the subject. 

MARK: Awesome. We'll chuck some in the show notes. Well, Holden, thank you so much for joining us, and hanging out with us today. It was an absolute pleasure. 

MELANIE: Yes. 

HOLDEN: Thank you for having me. And I can drink my coffee now, right? 

MARK: Yes, you can. 

MELANIE: Yes, you can drink your coffee. And yes, it was a lot of fun. So we're glad you joined us. 

HOLDEN: Yay. I didn't even swear that much. 

MELANIE: Or at all. 

MARK: Thank you very much. 

MELANIE: Thank you again, Holden. That was wonderful to talk with you about SPARC and Beam. And I really had fun, actually, hearing her perspective on the world around us, actually. 

MARK: Yeah, no, it's always great to chat with Holden. Big fan, big fan. 

MELANIE: Yes. All right, Mark, question of the week. 

MARK: Question of the week. 

MELANIE: So I have a continuous integration build process set up with Container Builder. But it's all sequential. So to speed things up, how would I basically process parts of it in parallel? 

MARK: So I found this out the other day, and I got really, really excited about it. I'll talk through basically how I've got things set up so that it probably gives some context. So I've got a continuous build process running, strangely enough, for [INAUDIBLE]. It has a bunch of build steps, right? I run tests, and then I build some images. And then I put those images up on Container Registry, right, like pretty standard, continuous integration type things. 

But they're all sequential, right? So I have to wait for my tests to finish before my Build Image-- like, I start building my container images. Or actually, so I have to run my tests, and then build my binaries, then push my binaries into the container image, and build the image, right? And it's all sequential. 

Now, in theory, I could run my tests at the same time I'm building my binaries, right? There's really no reason why I have to wait for one or the other. If either of them fail, then that's it. We're done. And I didn't think you could do this in Container Builder. But you can. 

So there is basically a configuration option called Wait For. We'll put a link in the show notes to the exact documentation. But there's a configuration option for each step that you can put in Wait For. You can put Wait For Dash, which just says, start it right away. I don't care. I'm not going to wait for anything else. 

But you can also give IDs to steps. And then basically, you just say, wait for this list of IDs. And then-- so you can do both splittings, so you can split out. So you know, first one starts, and then three will go. And then you can do joining back again, until you wait for all of these steps to complete. And it comes back. And so. You can do parallel processing, and speed up your builds. 

MELANIE: That's great. Well, thanks for that tip of the week. So Mark, you're going anywhere fun, fabulous, speaking someplace soon? 

MARK: I don't think I am at the moment. Still doing stuff for Next, still live streaming on Twitch. 

MELANIE: And this week, I/O is happening, as we speak. 

MARK: Yes, there's that, too. 

MELANIE: That is going on. 

MARK: You're not going down I/O, are you? 

MELANIE: I'm not going to I/O, because I will be in San Diego, actually, the day this is launched, which I will be at Internet to Global Summit, speaking on a panel, and-- 

MARK: Nice. 

MELANIE: --probably either before or after this gets launched. So yeah, that's this week. 

MARK: Cool. Excellent 

MELANIE: Well, Mark, it's been fun. 

MARK: Yeah, thanks again for joining me on this week's episode of the podcast. 

MELANIE: Thank you. 

MARK: And thank you all for listening. And we'll see you all next week. 
{{< /transcript >}}