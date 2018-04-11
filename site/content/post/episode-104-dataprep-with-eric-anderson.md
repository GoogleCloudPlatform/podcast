+++
audioDuration = "00:25:44"
audioFile = "Google.Cloud.Platform.Podcast.Episode.104.mp3"
audioSize = 37358939
categories = ["Data Analysis", "Dataprep", "Dataflow", "Data Munging", "Big Data"]
date = "2017-11-22"
description = "Eric Anderson joins the podcast to talk about how Dataprep is simplifying data wrangling!"
draft = false
episodeNumber = 104
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Dataprep with Eric Anderson"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/2ktWkKh2kmk"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7eso4i/episode_104_dataprep_with_eric_anderson/"
+++

On this week's podcast, [Eric Anderson](https://twitter.com/ericmander) shares how [Dataprep](https://cloud.google.com/dataprep/) helps summarize, transform, visualize and cleanup data on the Google Cloud Platform. When doing data analysis, typically data munging can take up most of the time and this serverless tool helps optimize the process.    

<!--more-->

##### About Eric Anderson

Eric is a Product Manager at Google working on Cloud Dataprep and recently Cloud Dataflow. Previously he was at Amazon Web Services, Harvard Business School, General Electric and University of Utah. He’s from Salt Lake City, Utah and lives in Mountain View, California with and wife and three kids.

##### Cool things of the week

- Intel Performance Libraries and Python Distribution enhance performance and scaling of Intel Xeon Scalable ('Skylake') processors on GCP [blog](https://cloudplatform.googleblog.com/2017/11/Intel-performance-libraries-and-python-distribution-enhance-performance-and-scaling-of-Intel-Xeon-Scalable-processors-on-GCP.html)
- The hidden costs of cloud [blog](https://medium.com/google-cloud/the-hidden-costs-of-cloud-ddb702495e93) and [Server Density podcast](https://www.gcppodcast.com/post/episode-69-server-density/)
- Monitor and manage your costs with Cloud Platform billing export to BigQuery [blog](https://cloudplatform.googleblog.com/2017/11/monitor-and-manage-your-costs-with.html) and [Public Datasets podcast](https://www.gcppodcast.com/post/episode-83-public-datasets-with-mike-hamberg-and-will-curran/) 
- Kaggle TensorFlow Speech Recognitiion Challenge [site](https://www.kaggle.com/c/tensorflow-speech-recognition-challenge)

##### Interview

- Cloud Dataprep [site](https://cloud.google.com/dataprep/) [docs](https://cloud.google.com/dataprep/docs)
- Cloud Dataflow [site](https://cloud.google.com/dataflow/) [docs](https://cloud.google.com/dataflow/docs)
- 7 Steps to Mastering Data Preparation with Python [blog](https://www.kdnuggets.com/2017/06/7-steps-mastering-data-preparation-python.html)
- Design Your Pipeline [blog](https://beam.apache.org/documentation/pipelines/design-your-pipeline/)
- Apache Beam [site](https://beam.apache.org/)

##### Question of the week

What is feature engineering?

- Intro to Feature Engineering with TensorFlow [video](https://www.youtube.com/watch?v=d12ra3b_M-0)

##### Where can you find us next?

Mark will be Montreal in December to speak at [Montreal International Games Summit](http://www.migs17.com/en/home/).  
Melanie will be at [NIPS (Neural Information Processing Systems)](https://nips.cc/) in Long Beach in December

{{< transcript "MARK: Hi, and welcome to episode number 104 of the weekly Google Cloud Platform Podcast. I am Mark Mandel and I'm here with my colleague Melanie Warrick." >}}

MELANIE: Yes, it's good to be here. 

MARK: It's good to be here nice and early in the morning. But this week, we're having a really great conversation with Eric Anderson talking all about data prep. And all about how you can get your messy data clean, especially when you have lots of it. 

MELANIE: Yes, he's going to definitely touch on the values of what you can use data prep for. And one of the things that covers is how it can be useful for future engineering, which is going to be our question at the end of the interview, to talk about what is future engineering. 

But first what we want to get to is the cool things of the week. And to start off our cool things of the week, last week we were talking about performance analysis. 

One thing we want to share is that Google is actually making Intel performance libraries freely available on Google Cloud Platform. The good thing about this is that is actually allowing the Intel Xenon Scalable Skylight Processors more performant. 

MARK: Oh, yeah. Try saying that three times. 

MELANIE: I'll try to say that a lot. 

MARK: Cool. I guess if you're doing-- this is something outside of my purview-- but I guess if you're doing Python-based scientific programming, this seems like the sort of thing that you'd be interested in. 

MELANIE: I think so. In terms of what it can be useful for, for sure. But it's just the idea of being able to make your processors more performant and at the end of the day. Like it's great to have a fast chip but if you can't actually run it as fast as it should be, then that's a problem. 

MARK: All right. For our second cool thing of the week, there's actually a couple of articles kind of joined together. Starting with an article written by David Mytton. You may recognize that name as the CEO of Server Density. 

We had them on the podcast-- or him specifically on the podcast on episode 69 talking about how they use Google Cloud Platform. He has a really cool article where he refers to it as the hidden cost of cloud. 

It's a really interesting article talking about basically how if you were moving from, say, something that's probably more of a rented VPC or a VPS, I mean, or maybe you're running you're own data centers, the differences in costs that can occur when you're moving to the cloud and how you can mitigate that and basically watch what's happening with that. 

And what's kind of cool is reading that is we literally just put GA that the export for cloud platform billing from the export to that BigQuery just went GA. So if you want to dig deeper into how your billing is working, especially across products or across projects, this is a really nice tool for doing that. 

And there's links in the blog post to basically visualize your spend over time with Data Studio. If you're not familiar with Data Studio, it's a great way to visualize your data that sits inside BigQuery. And there's actually a drop-in demo that basically takes your billing data and drops it straight into Data Studio with some really nice pre-built visualization, so you can see exactly what's going on inside your billing and see what money you're spending and where. And then you can extend it from there, depending on how your business is run and your application needs. 

MELANIE: This is actually a really great thing to have, considering I know that's the top-of-mind priority for most companies when they're working with anything around servers. So it's good that they have this type of tool available or they have this kind of information available. 

All right. So the last thing we wanted to mention was the fact that Kaggle is running a competition where you can basically use TensorFlow for speech recognition. They have 65,000 short sound clips that are multiple people saying 30 different types of words. And the idea is that you, in essence, are going to come up with a model that will help identify what is being said. 

So that is running for the next two months. And it's got a prize of $25,000. And we're going to have a link on our blog that will help take you to where it's at. But I mean, if you just look up Kaggle speech and TensorFlow, you'll easily find it. 

MARK: This is cool. Kaggle does some great stuff. 

MELANIE: I know they do. 

MARK: Big fan. Big fan. 

MELANIE: If nothing else, even if you're not going to do the challenge, it's kind of great to see the data sets that they have available to play around with and experiment with. I always tell people when they ask me how do I get started with machine learning or where do I get data from-- and I'm like, go to Kaggle. 

MARK: Yeah. That makes a lot of sense. Awesome. Why don't we go have a chat with Eric and talk all about Dataprep? 

MELANIE: Sounds good. 

MARK: Today I am pleased and delighted to have Eric Anderson, product manager for Cloud Dataprep. Eric, how are you doing? 

ERIC: I'm doing great. Thanks for having me. 

MARK: Excellent. Thanks so much for joining us. I'm super keen to hear more about Dataprep. It's something I haven't personally used a lot-- so definitely interested in what it is and what it does. But before we do that, why don't you tell us a little bit about who you are, what do you do at Google, everything about you, your five-year plan, just all the good stuff. 

ERIC: Right. Yeah. So speaking of five years, I've been four years at Google, all of it on Cloud, which is a fairly long time for Google Cloud years. 

Let's see, I grew up in Salt Lake City, Utah. I still go back, probably, annually and spend a little time whitewater rafting there, a little rugby there. But now I just do computers and hang out in the Bay Area. 

MARK: Awesome. Cool. So Dataprep-- this is a thing. Can you give us, like, the 30,000-foot view? Like, what is this product? What is it meant to do? 

ERIC: Sure. Anyone who has worked with data has felt the pain of data preparation. We talk a lot about all the interesting things you can do with data, visualization, algorithms, analysis. And usually we talk about it on pretty nice and clean data. 

But in the real world, there's friction, air resistance, and there's bad data. And it's everywhere. So Dataprep focuses on that initial step used to do any kind of data work, which is to get your data in the position, in the structure, you know, joined with the proper data sets that you want so that you can then go on and do analysis. So it's kind of a top of-the-funnel, first-of-the-workflow product. 

MARK: And when you say data or data set, what does that mean? Does that mean, like, I'm at home working on my spreadsheet for my taxes? Or does that mean something else? 

ERIC: It could. But really, we're talking, generally, about large sets, what you might define as big data. Presumably, these are things that are hard to see and find all the errors just visually. And so, yeah, when you can't see all the data, then Dataprep might be the thing to help you clean it up. 

FRANCESC: So I'm trying to understand it a bit more. This is kind of like a filter to basically clean your data. And I understand that concept. But what does it look like to use it? 

Data is a very generic thing. What does it look to clean, like-- I don't know-- phone numbers or to clean like credit card numbers. It's completely different. And there's different algorithms involved with that. But what does it mean to clean the data? 

ERIC: Sure. And I'll back up to give you kind of a mental model and also some mental images. You're familiar with spreadsheets. Everyone is. And you can see your data. 

FRANCESC: Unfortunately, yes. 

ERIC: Yeah. Right. So bad. But good, also, so good. So you've got a mental, like, a grid of your data in a spreadsheet. But also some of us may be familiar with, like, ETL tootling or other type of data tooling where you would describe the flow and processing steps, in which case you're not looking at your data at all. You're just looking at the transformations or steps that are done to change your data-- equally valid approaches. 

But in the case of the latter, you know, the ETL tooling or when you see a diagram with the transformation steps, it's hard to know exactly what your data looks like at any point in time. You can see what the logic-- being applied to it, but you don't know what that logic is being applied in the way you want it, if you're getting the inputs and outputs expected. 

So what we've done is kept you in kind of the spreadsheet paradigm. So with Dataprep, you're looking at a grid of your data. But because you can't see all of your data at the same time, we've added additional visual elements to give you the sense of the complete data set. 

So we sample data. So you're looking at a representative sample. We apply some visual distributions at the top of each column, give you a sense for the distribution of columns. We also detect type and provide some validation on those types, again, to give to you-- while you can't see the whole column, you can see outliers, you can see anomalies using these visual cues. 

MARK: So talking about messy data or cleaning data, like, what does that mean? I just assume that all data sets are perfect, aren't they? 

ERIC: Sure. I mean, it's not like they're always erroneous. And data sets might be fine for one situation and not so clean or fine for another situation. We're all probably familiar of, like, somewhat erroneous data, like outliers or anomalies that aren't representative. 

You can imagine transaction information, and people make returns or improper transactions. I'm using, like, point-of-sale, for example, information, if you wanted to use that as an example. Not everything that passes through the [? cregister ?] is something that you want to track, perhaps, as an analyst. 

And so, yeah, part of it might be cleaning and removing those erroneous-- or anomalies. There might be other things done as part of preparation enrichment. Or joining is fairly obvious and straightforward. 

You know, you may have-- It's very common to have several different data sources that you want to combine into a single, fully enriched table, structuring your data. So you have a single column with a fully defined address, but it's hard to filter on states when they're embedded in a string. And so you might want to parse out a column into several different columns, for example, so you may have structuring steps. 

Aggregation is also common. You know, you have single records, perhaps, and you want to aggregate these in daily totals or into hourly totals. These are all things that can be done in Dataprep. 

FRANCESC: So all of these steps, though, sound like something that you could write yourself. Is Dataprep, like, a library of filters that are useful for common data signs? Or is it more than that? 

ERIC: Yes, certainly. So the common alternatives might be SQL. You could write it-- if this was, like, stored in a SQL-compliant database of sorts, you could apply SQL operations to this. Another alternative common one would be Python or other scripting language. There's some great Python libraries where you can take things as a table or a frame of data and apply transformations to it. 

In both of those cases, again, you're not able to see the data itself, and you're not able see intermediate data. And you're not able to get a-- kind of a sense for the full data set at one time. There are certain popular patterns I've used myself. I should say, like data scientists or data analysts will have a cocktail of common queries and/or scripts that they'll throw at a new data set, you know, describe the columns, you know, show me the distributions of each column. 

So we've kind of packaged all those common tasks into a single view. And in addition to just showing you the view of your data, we can then let you transform it without having to write scripts. So if you're very familiar in Python or SQL, you might be productive, but even then, we find that even Python and SQL experts find themselves really productive in Dataprep. 

So yeah, in addition to just viewing your data, you can also create transformations-- in some cases, no-code transformations. There's an interesting-- I'll just jump right into it-- how that's possible. We talked about the distributions and the anomaly detection that provides those visual cues. 

Selecting those visual cues will select the subset of data that applies and then will suggest-- Dataprep will suggest, in kind of like real time, likely transformations to apply to that subset. So if we showed you a bunch of states and 10% of those states were not actual states, they were territories of the United States or something, and you wanted to-- you select those, we might suggest you remove them. We might suggest you do other parsing steps on them. 

And then you can choose that transformation. So you've gone from explore and understand my data to remove some anomalies without writing any code. This has just been, like, reactive gestures to the interface. 

MARK: So not only is Dataprep a GUI so that you can visualize your information, there's also some nice machine learning behind the scenes or something like that to basically give you suggestions on ways you could make your data possibly, quote unquote, better? 

ERIC: Right, right, right. Yeah. And you know, you're the only judge of better, but we've learned from experience what-- or the algorithms learned from experience what is likely to be interesting to you. And we serve you up several options, and you pick from those. 

FRANCESC: So what does it look like to you, this Dataprep? How do you get the data into it or out of it because, at the end, it really feels like you're basically improving the data. So I see it as a pipe-- 

ERIC: Sure. Yeah, 

FRANCESC: --of, like, a bigger process. How do you connect it to other things? 

ERIC: The integration points for Dataprep are through GCS and BigQuery. So we accept all the standard file formats you might expect us to on GCS. And then we accept BigQuery tables. We'd like to expand that over time, but we've actually found that this solves, you know, the 90% use case for GCP users. 

MARK: Is this, like, a one-time thing? Or is this something that could be put in a pipeline of ongoing streaming data? 

ERIC: The thing we want to solve really well initially is the-- necessarily-- the one-time experience. And we're delivering on that. And that's something that's been pretty exciting to us. 

But as soon as you saw something one time, as an analyst or as a scientist or whoever, most people then want to-- you know, they want to schedule that thing to run all the time or check that into production. And so we are in the process of adding those features. 

Scheduling is soon to arrive to allow you to schedule that execution to happen on some time basis. And then eventually, we want to support the ability to programmatically execute those transformations by other means. 

FRANCESC: Cool. So I was watching a video on Dataprep, and it looks really cool. And now I get a little bit more the idea of, like, it really looks like a super-powered spreadsheet. It's really cool. 

But also one of the things that I saw was when you click on Run Job, you see Cloud Dataflow. 

ERIC: Yeah. 

FRANCESC: What is the relationship between Cloud Dataflow and Cloud Dataprep? 

ERIC: Great. Yeah, great question. We're pretty excited about that relationship. So for those of you who don't know, Dataflow is a massively parallel data processing service and/or framework, depending on how you look at it. And so it's very powerful, and it's based on technology we've been developing at Google for a long time-- MapReduce, Flume, et cetera. 

So to have Dataflow at your fingertips is awesome, but a lot of people aren't ready to use Dataflow through it's also expressive and powerful APIs. Currently Java and Python are supported. 

And Dataprep, what it allows you to do is to express these things in an intuitive, visual way using Dataprep. And then you can know that even though I'm having a great spreadsheet experience-- that behind the scenes, I'm going to have, also, an awesome, massively parallel, powerful processing experience. 

So when you hit Run Job, we take the logic you've generated on the sample using either predicted transformations or your own custom transformations, we package that logic and pass it to Dataflow. And Dataflow creates a job that reads from your source and writes to your destination with all the processing logic you defined. 

FRANCESC: And it feels like, once you have that running-- Cloud Dataflow, one of the cool things is that you can run it as a batch process. Or you can also run it as something that is continuously running, and as soon as you get some input, you get the output on the other side. 

Is that possible with Cloud Dataprep? Like, you basically define a continuously running Dataflow job, and then you can just send things into the input and get the clean version on the other side? 

ERIC: Yeah. Continuously running is something that's never really been done in the frame of data preparation industry, if you want to call it that, or landscape. Data preparation has always been kind of a batch thing. 

What's neat about where we're at today with Dataprep-- yes, it's batch-only today. But it is-- because we're running on Dataflow, we are submitting Beam pipelines. And the Beam program model allows both batch and streaming. So it would be a natural evolution for us to go into streaming in the future. 

And that's something I think would be super exciting. And we've heard some requests from that from our users. 

MARK: So actually, the [INAUDIBLE] probably segues into a nice question. When should a customer choose either Dataprep or Dataflow? It sounds like there is crossover there. Streaming seems like an obvious choice because of Dataprep, but are there are other features there that may make one-- someone choose one over the other? 

ERIC: Yeah. Sure. So I'll start with some of the obvious, if you want to call them, limitations. One way to think about it is that Dataflow is-- it kind of just supports almost anything. It's a programming interface so that you can almost do anything with Dataflow, even things that maybe you shouldn't do with Dataflow. 

What Dataprep provides you-- it's a constrained-- I should describe that we have-- your transformations create kind of script steps. And we use a human-readable script within Dataprep that then is translated into the Beam SDK. 

So yeah, because we're using a DSL on Beam, there's certainly-- we're constrained to the limits of that DSL, which is fairly expressive, and we actually think it's more expressive than SQL. So you should have plenty of room to grow there. 

But yeah, currently, today, for example, you couldn't pass arbitrary code to Dataprep. For that type of use, you want to bounce out to Dataflow and do everything there. It is possible to, of course, chain these into a workflow. Because we're reading and writing from common sources, GCS and BigQuery, you could combine Dataflow and Dataprep into sequenced pipelines. 

But more to the comparison-- so, yeah, if you prefer a visual environment, if you prefer a human-readable script, language, Dataprep's a great place for you. If you prefer the expressiveness of a programming language and/or maybe some of the, like, data engineer-y processes around a programming language-- you know, if you want to write unit tests, if you want to write other kinds of tests, Dataflow and a programming language is the right place for you. 

MARK: Is there any limitation on what sort of data formats Dataprep can handle? Obviously, you've got BigQuery, but if you said GCS-- 

ERIC: Right, yeah. 

MARK: --I can put anything I want into GCS, so-- 

ERIC: Yeah. So we take, like, text formats, and we're going to be able to, like, open most things. But we're limited to a handful of formats in which we understand the structure. So like Avro, CSV, JSON-- these are all supported. 

There's a few others. Actually, Excel files are also supported. We should add Sheets to that list, but it's not there yet. 

And then I was going to mention, like, for example, XML isn't supported, although it's like-- it's similar to JSON in a semi-structured file format. You'll be able to read XML, but you won't be able-- it won't come in as a structured format like the same way that we do JSON, for example. 

MARK: Cool. So what I would love to know is if people are interested in Dataprep, or they seem like this is interesting, what's a great resource they can go to learn more about it? 

ERIC: Sure. And actually, also, to give you some point, like, where we're at in our kind of timeline and launch and that sort of thing-- resources. So we have a quickstart available and docs available. The quickstart is like-- we give you some sample data and suggest some transformations. 

If you're familiar with the Google Cloud Platform Codelabs, there's actually already a couple set up. Some of them are designed for using Dataprep in the context of machine learning, which is something we can discuss. And there have been a couple blogs out there. 

It's still nascent. I'm going to go ahead and jump into where we're at, kind of, in our rollout. We announced Dataprep, you know, that we were working on this, originally in the spring at Google Cloud Next 2017. And it was then in a what we call a private alpha release for some time-- or private beta release. 

And then we opened it up to a public beta just a few weeks ago. So now anybody-- you know, all you listening can go find it in the Cloud console among all the other products. What you should look forward to is some additional feature releases and a general availability at some point in the future. 

MARK: Nice. You mentioned Dataprep and machine learning. Machine learning is the hot word, so, like, what's the connection there? 

ERIC: I just wanted to add as many buzz words as possible. Often we think about data preparation in the context of business intelligence or, kind of, data analyst work, in which case a lot of that work is-- it can be plumbing, kind of like ETL. 

It can also be a little more higher level, like you're trying to arrive at some answers, and you're preparing a data set for those answers. But the analysis is fairly straightforward using straightforward tools downstream-- data visualization, simple aggregations. 

In the case of, maybe, more advanced machine learning and data science, even those that are, you know, very comfortable in Python or whatever common machine learning or data science interface you prefer, we've actually found some people that prefer to jump over to Dataprep to do their data preparation. So in a machine learning data science workflow, you're going to take these, maybe, multiple data sets, and you're going to combine them in some way. 

And then you're going to do some exploration to make sure that you don't have too much noise or anomalous data. And you're also going to do what we-- feature engineering. You're going to make some-- assess-- judgment about what you think are the important features. And you're going to put those in unique columns, and then you might normalize those columns-- all in preparation for then applying your kind of out-of-the-box algorithms. 

That upstream work around combining the data set can be done in Dataprep. The feature engineering work, in fact-- actually separating out the important features in the unique columns and normalizing them-- can be done in Dataprep. If you're familiar with Kaggle, which is this machine learning and data science kind of competition and forum community-- one of the big Kaggle users who has won a few contests was super excited about Dataprep and has been using it in his Kaggle work. 

So there's some interesting work there. Just to touch on the workflow-- these people are probably doing initial work in Python, realizing that they have, you know, some data issues or strange behavior in their algorithms, and it might bounce out to Dataprep using GCS or BigQuery as the interchange point. And they can go back to their Python environment, for example, and pick up the new data sets that are cleaned. 

MARK: Cool. It seems like we're running out of time just a little bit. But before we do that, we always like to give our guests an opportunity to plug anything that they think is important or if there's something that we haven't mentioned yet. Is there something you want to add to the podcast, make sure it gets in? 

ERIC: Yeah. I should plug that we're really excited, we're really eager to get some feedback on Dataprep. We've got a lot of positive responses and with that a bunch of feature suggestions, use cases we hadn't considered, and then that's informing our roadmap. 

There's a big surface area to Dataprep. There's a lot of, like, you know, bells, whistles, knobs. And so there's plenty of room to explore and suggest new things and places where we can improve. And we'd love to hear from you. 

FRANCESC: Quick question-- is there-- so is there any specific way that people might want to use to provide that feedback to you and the team? 

ERIC: We'd love to hear from you on Stack Overflow. We monitor Stack Overflow. We also are soon to introduce a discussion forum email alias that you can join. 

In addition to those channels, which are available to anyone, there's common, other channels. You can go to the Google Cloud meet ups and pass information through channels there. 

MARK: Cool. Eric, thank you so much for joining us today and chatting to us all about Dataprep. 

ERIC: Hey, thanks for having me. 

MELANIE: Thanks, Eric-- great information about Dataprep and Dataflow. 

Now what we want to do is drive into the question of the week. 

MARK: So we were chatting before about the idea of features and feature engineering in the podcast we did with Eric. And so we were chatting, and I don't know a lot about this space, so I figured I'd ask you Melanie about, like-- what is the importance of features in regards to machine learning? And why do we need to do feature engineering? Why is that a thing? 

MELANIE: So feature engineering is something that has been a priority to developing models in machine learning. And it's required a lot of work in the past. 

Particularly, it's used to help drive out or define specific attributes of properties about the data set that doesn't necessarily come across with raw data. And it helps you identify what's more important to help drive the predictive models that you're building. 

Like I said, it's something that has required a lot of manual labor in the past. It can play a large role in terms of the preparation or lead up to developing models. But with deep learning becoming such a popular thing in the last few years, feature engineering in particular has become something that we see as being automated through deep learning. 

But the reality is it's not fully automated through deep learning. It's definitely one of those things that is still necessary to do some level of analysis, so to speak. And so it's good that Dataprep is providing that opportunity to be able to help with the feature engineering process. Yeah, that's what it's useful for. 

All right. Now Mark, one other question I'm going to ask for the week is what are you doing for Thanksgiving? And yes, I'm totally-- I'm totally asking the Australian in the States-- what are you doing for Thanksgiving? 

MARK: What am I doing for Thanksgiving? Being-- probably spending a lot of time at home. I'm going to catch up with some friends, have some food, drink some wine. 

MELANIE: That sounds nice. 

MARK: That kind of thing. What are you up to for Thanksgiving? 

MELANIE: Same thing. It's nice to have friends that you can go visit and not have to get on a plane. 

MARK: Nice. But speaking of getting on a plane, are you going anywhere, speaking at anything over the next couple of months? 

MELANIE: In December I'm going to be going to the NIPS conference, which is this conference that's really focused around the machine learning AI community. 

MARK: Nice. 

MELANIE: What about you? 

MARK: Yeah. I'll be at the Montreal International Game Summit in December. But other than that, yeah, things are calming down for the year nicely, which is pretty good. 

MELANIE: Are you going to Montreal? I'm surprised. I didn't know you were going to Montreal. I had no knowledge. 

MARK: Yeah. Yeah. I'll keep mentioning it every week. I just want people to come say hello if they happen to listen to the podcast. Awesome. 

Well, Melanie, thank you so much for joining me for yet another episode of the podcast. 

MELANIE: Yes. We managed to pull this one out early in the morning, so we can get this for Thanksgiving, period. 

MARK: Yep. And we'll see you all next week.

{{< /transcript >}}
