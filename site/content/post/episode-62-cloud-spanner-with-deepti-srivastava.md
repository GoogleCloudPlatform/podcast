+++
audioDuration = "00:39:34"
audioFile = "Google.Cloud.Platform.Podcast.Episode.62.mp3"
audioSize = 57196002
categories = ["Spanner", "Storage"]
date = "2017-02-22T01:07:49Z"
description = "Deepti Srivastava joins Francesc and Mark to talk about Cloud Spanner: the globally distributed, horizontally scalable, relational database that also provides global consistency and ACID transactions"
draft = false
episodeNumber = 62
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Spanner with Deepti Srivastava"
image = "/images/post/spanner.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/K5Yzqiu7x36"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5vjtbk/episode_62_cloud_spanner_with_deepti_srivastava/"
+++

On the heels of the Cloud [Spanner](https://cloudplatform.googleblog.com/2017/02/introducing-Cloud-Spanner-a-global-database-service-for-mission-critical-applications.html) 
launch, [Deepti Srivastava](https://twitter.com/TheDeepti) joins your hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
on this week's podcast to talk all about this globally distributed, horizontally scalable, relational database that also provides global consistency
and ACID transactions!

<!--more-->

##### About Deepti

[Deepti Srivastava](https://twitter.com/TheDeepti) is passionate about technology and its ability to be a positive change enabler. 
As Product Manager for [Cloud Spanner](https://cloud.google.com/spanner/), on Google’s Cloud Platform, Srivastava works on best in class 
Cloud Databases and Storage technologies. Srivastava is an enthusiastic member of Women@Google and a 
passionate advocate of STEM education, especially for girls. She also enjoys dancing, snowboarding and all things fashion.

##### Cool thing of the week

- Each Google Cloud Product described in 4 words or less [tweet](https://twitter.com/gregsramblings/status/832223967096090624) [doc](https://docs.google.com/spreadsheets/d/1yf4hTH6J7qLiP5TLtykqWwJpj-XS3DNObchMdeDVJlE/edit) 
- Google Cloud and YouTube-8M Challenge [blog](https://cloud.google.com/blog/big-data/2017/02/google-cloud-and-youtube-8m-challenge-predict-youtube-video-tags-for-a-chance-to-win-up-to-30k)

##### Interview

- Cloud Spanner [site](https://cloud.google.com/spanner/) [docs](https://cloud.google.com/spanner/docs/)
- Introducing Cloud Spanner: a global database service for mission-critical applications [blog](https://cloudplatform.googleblog.com/2017/02/introducing-Cloud-Spanner-a-global-database-service-for-mission-critical-applications.html)
- Inside Cloud Spanner and the CAP Theorem [blog](https://cloudplatform.googleblog.com/2017/02/inside-Cloud-Spanner-and-the-CAP-Theorem.html)
- Quizlet Tests Cloud Spanner — The Most Sophisticated Cloud Database [blog](https://quizlet.com/blog/quizlet-cloud-spanner)
- Don't Give Up on Serializability Just Yet • Neha Nerula [youtube](https://www.youtube.com/watch?v=utl3RyJE5SI)
- CAP Theorom [wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)
- Spanner: Google’s Globally-Distributed Database [white paper](https://research.google.com/archive/spanner.html)
- Spanner, TrueTime and the CAP Theorem [white paper](https://research.google.com/pubs/pub45855.html)
- Cloud Next: Cloud Spanner 101: Google's mission-critical relational database [schedule](https://cloudnext.withgoogle.com/schedule#target=cloud-spanner-101-googles-mission-critical-relational-database-c06ae372-7b21-4e2c-b3cd-ca6625e87aa9)
- Cloud Next: Cloud Spanner 201: getting the most out of Cloud Spanner [schedule](https://cloudnext.withgoogle.com/schedule#target=cloud-spanner-201-getting-the-most-out-of-cloud-spanner-4cba186f-e62e-4d11-8073-a84cb0f75936)
- Ben Sigelman will present Spanner: Google’s Globally-Distributed Database [youtube](https://www.youtube.com/watch?v=mYV6_OaZeEs#) 

<div style="text-align: center">
  <img src="/images/post/spanner.png" style="margin: auto;">
  <p><small>Spanner: No-Compromise Relational Database Service</small></p>
</div>

##### Question of the week

How do I run a mail server on the cloud?

- Sending Mail from a Virtual Machine [docs](https://cloud.google.com/compute/docs/tutorials/sending-mail/)
- Sending Email with SendGrid [docs](https://cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid)
- Sending Email with Mailgun [docs](https://cloud.google.com/compute/docs/tutorials/sending-mail/using-mailgun)
- Sending Email with Mailjet [docs](https://cloud.google.com/compute/docs/tutorials/sending-mail/using-mailjet)
- SMTP relay: Route outgoing non-Gmail messages through Google [docs](https://support.google.com/a/answer/2956491)

##### Were will we be?

Mark will be at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc will be at [Gophercon India](http://www.gophercon.in), 
at [Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=google-cloud-endpoints-serving-your-api-to-the-world-8eaeb271-f0ea-4638-af94-16c0b2b80bf6),
and then [Gopher China](http://gopherchina.org/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 62 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good, thanks, Francesc. How are you doing today? 

FRANCESC: Doing great. Very, very, very happy about having the opportunity to interview someone about Cloud Spanner. 

MARK: Yeah. 

FRANCESC: And not only "someone," but the product manager of Cloud Spanner. 

MARK: Yeah, it's going to be really, really cool. Super looking forward to that because Spanner is really interesting. 

FRANCESC: In a minute, we will be joined by Deepti Shrivastava. She's the project manager for Could Spanner. And after that, we will have a Question of the Week that comes directly from the amazing Jessie Frazelle. 

MARK: Ooh. 

FRANCESC: I know. Which is related to how to run mail servers on the Cloud-- specifically on Google Cloud Platform, obviously. 

MARK: Obviously. 

FRANCESC: Yeah, but before that we have our Cool Things of the Week, as usual. 

MARK: Yeah, so the first Cool Thing of the Week comes from our boss, really. Greg Wilson, the fantastic "Greg's Ramblings" on Twitter, which is a picture of each Google Cloud product described in four words or less. 

FRANCESC: Yeah. When he says picture, I think he means screenshot. 

MARK: Yes. 

FRANCESC: It's not a picture of the products. But it is basically like, what is Cloud Dataproc? Well, it's Managed Spark and Hadoop. OK. 

MARK: Yeah. What is Cloud Logging? It is centralized logging. Yeah, that is-- 

FRANCESC: But some of them are very, very useful. Some of them are obvious, like Speech API. It converts speech to text. Cool. But when you're reading something that you might not know that much what it is, like, for instance-- I don't know-- like what is-- let me see-- Cloud Shell. Shell is kind of a weird thing to say. It's actually a browser-based terminal CLI. 

MARK: Yeah, or Cloud Bigtable is HBase compatible NoSQL. 

FRANCESC: Yeah, I don't know. I really like it. I think it is a very useful cheat sheet to have around-- especially if you're trying to explain to people what Google Cloud has. This is a very good thing to share easily. We have a screenshot but also we have a spreadsheet on Google Docs that you can go and copy, paste, and modify as you wish. 

MARK: Awesome. For the other Cool Thing of the Week-- I thought it was a particularly nice one on the big data side-- we currently are having a challenge with Google Cloud and YouTube, to predict YouTube video tags for a chance to win up to 30k. 

FRANCESC: Nice. 

MARK: So in partnership with YouTube, Google Research, and Kaggle, Google Cloud Platform basically has set up this thing where you have a public dataset with, I believe, it's about 8 million video tags. 

FRANCESC: So close. 7 million video URLs, which is around 450,000 hours of video and 3.2 billion, with a b, audiovisual features. That's a big number. 

MARK: That's a big number. 

FRANCESC: Yeah. 

MARK: That is actually a big number. Yes, OK. Why'd they call it 8M? OK. Interesting, but that's fine. 

FRANCESC: Oh, yeah, interesting. 

MARK: Yeah. That's where I got the number. 

FRANCESC: They call it 8M because they have 7 million YouTube videos? 

MARK: Yes. 

FRANCESC: Interesting. Yeah, whatever. 

MARK: So basically, using Cloud Machine Learning, TensorFlow, or basically any of your favorite machine learning frameworks, the challenge is to develop classification algorithms so you can basically accurately assign labels to the videos that are playing. So you can use those videos that are available in that dataset to build your own classification systems and hopefully win like 30k. 

FRANCESC: Nice. I don't think I will have time to get in to do it but you can use, yeah, Google Cloud Machine Learning, TensorFlow, or whatever you feel like using. 

MARK: Yeah. 

FRANCESC: So if you have any cool software that you think could do it better than everything else, go. Go for it. 

MARK: Yeah. And it's worth noting, too, right-- so specifically we'll link to the page-- but you can sign up for basically a Google Cloud Platform trial account, if you want to try it out. And there is a process there if you end up using more than the $300 that you get with free trial, and you're working on this, and you want more credits, there is a form there that you can apply for as well to get some extra credits so you can keep working on what you're working on. 

FRANCESC: Cool. So I guess it's time to go chat with Deepti about Cloud Spanner. 

MARK: Let's go do that. 

FRANCESC: So I'm very, very happy to welcome today to the podcast the Cloud Spanner product manager, Deepti Shrivastava. How are you doing? 

DEEPTI: Very good, thank you. That was very good pronunciation. 

FRANCESC: Thank you. I've been practicing. 

[LAUGHTER] 

DEEPTI: Good job. 

FRANCESC: So we are very excited about having you today, especially because, you know, Cloud Spanner was launched a couple days ago, really. 

MARK: Yeah. 

FRANCESC: And there's so many people that have so many questions about Cloud Spanner, and the difference between Cloud Spanner and Spanner, and what does it do, and the CAP theorem with-- did we break it, all that stuff. But before we get into all of those details, why don't you tell us a little bit about yourself and what you do at Google? 

DEEPTI: Sure. So my name is Deepti Shrivastava. You did a great job with that, by the way. 

FRANCESC: Thank you. 

DEEPTI: I am the product manager for Cloud Spanner. I've been at Google for a little over four years. And I was actually responsible for launching the internal Spanner service, as well. So I have a long history with Spanner that I'm very excited to share today. 

FRANCESC: Nice. 

MARK: Excellent. All right, so let's get stuck in. So from a high level, what is Cloud Spanner? 

DEEPTI: So Cloud Spanner, which we launched this week-- very exciting for all of us in Spanner and, as well as in the general Google Cloud. We're very excited to have that product-- is a fully managed, horizontally scalable, relational database service, that can have ACID transactions and SQL semantics, without giving a performance and high availability. 

So that was a lot of words. Let's unpack. Basically, what Spanner or Cloud Spanner does is, it gives you the best of both worlds. So it gives you the best of traditional relational databases, as well as traditional non-relational or NoSQL databases. So what that means is, we have schemas, DDL statements, strong typing, SQL querying, and much more in that category. 

But we also have horizontal charting that can span multiple availability zones and multiple regions across the globe. And we can do all of this without compromising on performance or high availability. And, to top it all, we've offered this as a fully managed service. So you don't have to worry about managing this database yourself. It's completely managed on the Cloud Platform with our SRE team and the entire infrastructure that Google runs. 

FRANCESC: Yeah, kind of like what we did with Bigtable but for relational. 

DEEPTI: Correct. 

FRANCESC: Nice. So you mentioned that you were responsible for the internal launch of Spanner and also for Cloud Spanner, which is the external service. Could you talk a little bit about the differences between those two? A little bit of the history of how these happened? 

DEEPTI: Sure. So let me tackle the first thing first. So Cloud Spanner is basically the internal Spanner service that we've been running for multiple years, which has been developed for even more years, and its just a repackaging of that service as a Google Cloud Platform service. So we basically integrated with the Cloud Platform-- things such as billing and providing the APIs through the various rest and GRPC methodologies et cetera, right? 

So it's the same service. The underlying infrastructure is exactly the same. And it's run by the same SRE team-- or managed by the same SRE team that manages the internal service as well. There is really no difference except for the way you access the service. 

MARK: So it really sounds like another example of where we've taken stuff that we've built inside Google, and managed inside Google, and run inside Google, and had power all our stuff inside Google, and just said, hey, customers, here's a thing that you might want to use as well. 

DEEPTI: You know, so I've been asked this question from customers, as well. Because they're like, are you just throwing what you had internally externally and just expecting people to handle whatever you throw out there? And that's not what we've done. We've actually spent a lot of time both evaluating whether Spanner would be a useful external service to Cloud customers. 

And then we spent a year or so in our Early Access Program, where we had customers sort of working with us as partners, evaluating sort of what the API should look like, how we should offer it. What are the features that need to be there? So what do our Enterprise customers actually need? Because Spanner itself has a huge surface area of features in API. We didn't make it complicated and confusing for the customers. And there was actually a demand for something like Spanner. And then we developed that as the Cloud Spanner service and launched it. 

FRANCESC: Cool. So going back to the question about the history. 

DEEPTI: Mm-hmm? 

FRANCESC: So when I joined Google, I was a software engineer and I was working in AdWords back end, and everything was mSQL, everywhere, and it was fun. And then everyone started migrating to Spanner. 

DEEPTI: Yup. 

FRANCESC: And for me it was pretty crazy because at the same time that we were migrating to Spanner, everybody else was migrating to non-relational databases. Why did we create-- rather than moving to Spanner? Or the question would be, why would you use Spanner instead of Bigtable or something like that? 

DEEPTI: That's an easy answer. Bigtable is not a relational database. It's a wide column store or key value store at the end-- at the bottom of it, right? It's a non-SQL system. And Spanner is a essentially traditional relational system with scale. But to go back to the history, so basically about 2007-ish or so, Google was facing the issues that current Enterprise, or just current companies, face today. Which is they really need relational transactional semantics, because that makes development of applications easier, and it makes reading about things that you really care about, like your bank accounts and things like that, much easier because you have transactions. 

But with the explosion of data, there is so much data, and you want so many more insights from that data, that our traditional, single box vertical solution for the database doesn't actually work, right? So you need to go to NoSQL or something that's scaled down. And that becomes really problematic because if you choose the NoSQL solution, then you have to build all the transactional semantics and such in the application. You don't get SQL. You get something SQL-like, which you have to train your developers on using this exact esoteric thing, et cetera, et cetera, et cetera. 

So we were facing the same challenge. And so a group of engineers like Jeff Dean and Sanjay, Andrew Fikes, and a whole bunch of other people kind of got together and started to look at, what can we do about this? And that's where Spanner came from. So we wanted to have a transactional system with relational semantics and strong schemas and types, which also provided horizontal scalability, with global presence and those qualities. Because that's what Google applications themselves need, like AdWords. 

MARK: Yeah. 

DEEPTI: And then many more since then. And so that's kind of the history of Spanner. And as we developed it, we realized that, actually, SQL is really useful as a way to sort of access this data. And it's very prevalent. And it makes the lives of the developers much easier to use standard SQL. And so we built in a SQL engine into Spanner, which is what we offer now, today, which uses what we call standard SQL, which is [INAUDIBLE] 2011 compliant with extensions. 

FRANCESC: So does that include things like joins and stuff like that? Like fancy, cool things that you can do with SQL? 

DEEPTI: Yes. So it's a query-only, so select only, sort of SQL interface. 

FRANCESC: OK. 

DEEPTI: But yes, it has joins, you can join across many tables-- any number of tables-- in your database. You can do inner joins, outer joins. You can do indexes. We have strong secondary indexes, like you have with any other database. Those indexes are called local or global, depending on whether you use interleaving or not, which again, you can look these things up on the site. 

FRANCESC: Yeah. Mm-hm. So I watched a talk not that long ago from someone that used to work at Google. I don't know. Maybe you know her, because she used to work in that team. Neha Narula? I don't know if you've ever heard about her, but she gave a really good talk. 

DEEPTI: I have not. OK. 

FRANCESC: She gave a really good talk about [? serializability ?] and the CAP theorem and stuff like that. And she talks a lot about what is consistency and what are all the different definitions of consistency? Which is like, what is consistency? 

DEEPTI: Do you mean global consistency, or consistency in general? 

FRANCESC: What is the consistency we care about? Because I've heard about global consistency, sequential consistency, and causal consist-- 

DEEPTI: Yeah. 

FRANCESC: There's many kinds. So could you tell a little bit about-- 

DEEPTI: Sure. 

FRANCESC: --what is this thing that people talk about when they say consistency, related to Spanner and Cloud Spanner? 

DEEPTI: So first of all, consistency is a whole topic in and of itself, and people get very religious about it. So I don't want to get there. 

FRANCESC: OK, good. 

DEEPTI: But to put it simply, basically there is-- eventual consistent systems or eventually consistent systems, which basically means you do an operation and eventually-- we can't guarantee when-- but eventually all parts of the system will see that change. 

FRANCESC: OK. Bigtable would be one those? 

DEEPTI: One of those. Exactly. 

FRANCESC: OK, Datastore. 

DEEPTI: Datastore is one of those. And then there is-- causal consistency is if you are in the path of something happening. So if you observe one thing and then observe another thing as a causal relationship between those. If there is a causal relationship between those two, then you will see the outcome. If there isn't, then you don't see a change reflected. Right? 

And then what Spanner has or Cloud Spanner offers is strong consistency, which again, depending on who you talk to, has different definitions. But basically, strong consistency means that if you commit a change, and if the system says it's committed-- as in the system accepts it-- then all parts of the system see that change instantaneously or immediately. There is no concept of, I saw some change but you didn't. 

If you queried the system from someone else or in a different point in time or whatever, there is no such thing as eventually getting the information. You either have the information or you don't. And you have it together or you don't have-- you have it all together or you don't. And this is kind of what traditional databases offer as strong consistency. That's what ACID transactions actually mean, as you know. 

FRANCESC: Yeah. 

DEEPTI: Atomicity, Consistency, Isolation, and Durability. 

MARK: OK. 

DEEPTI: [INAUDIBLE] this consistency. 

MARK: So I'm going to bring up the magic elephant in the room. 

FRANCESC: The magic elephant. 

[LAUGHTER] 

MARK: The magic elephant. So we've talked about a little bit about CAP theorem, right? So consistency, availability, partition tolerance. Does that mean we beat it? Or-- 

DEEPTI: Do you mean beat the CAP theorem? 

[LAUGHTER] 

FRANCESC: Yeah. 

MARK: Yeah, did we beat it? As in we defied laws of physics? Like, what are we doing here? 

DEEPTI: Yeah, so we certainly did not defy the laws of physics. Let's put that out there. So the question is, does Spanner break CAP theorem? Not really. What Spanner does is, it always chooses consistency over availability. So it always chooses c over a, in face of partitions. 

MARK: OK. 

DEEPTI: So CAP theorem is consistency, availability, and partitions, and how do you-- or network partitions, to be specific-- and how does a system handle that? Do you choose c or a in the face of partitions, is the very basic answer. And what we say is that Spanner always opts for consistency, hence we are a strongly consistent system. 

However, because we can leverage Google's networking and network stack, which are highly optimized, and because we've built Spanner to be a highly optimal system when it comes to these things, we can actually get very high availability and performance, as well. So Spanner offers up to 5 nines of availability and we can be this strong [INAUDIBLE] highly available, even in the face of partitions, because of the optimized Google network and our own optimize stack. 

So I would recommend that anybody who's really interested go look at Eric Brewer's paper on this exact topic. It's called "Spanner and the CAP theorem." 

MARK: Yeah. 

DEEPTI: We linked to it from our web site, which is cloud.google.com/spanner. It's a full research paper written by the person who wrote the CAP theorem. 

MARK: Yeah. 

DEEPTI: He has a more-- that paper has more-- 

FRANCESC: I think he knows what the CAP theorem is. 

MARK: Yeah, yeah, yeah. 

DEEPTI: Yeah. 

[LAUGHTER] 

He can get into that in much more detail. 

MARK: Awesome. Well, so you mentioned a little bit before, obviously, where you said there's a SQL query language that you could use for querying-- so basically listing data or aggregating and stepping through it. 

DEEPTI: Mm-hm. 

MARK: So if I'm a developer, how do I go in and alter it or like add data to it? What does that interaction look like? 

DEEPTI: So first of all, we have DDL statements. So if you want to change your schema, you use general DDL statements like Alter Table, Drop Table, Add Column, whatever. The interesting thing about Spanner is that all these schema changes happen online, which means you don't have to bring down your database in order for the database to reconfigure itself or re-lay out the data for these things, which is super cool. 

Also, if you want to alter data, read, write, edit, do CRUD operations, then we actually have to go through the program Ad Hoc API to do that. We don't offer insert, update, delete in SQL currently. We have plans to provide that later but currently we don't have that, so you have to use the program Ad Hoc API. However, we've tried to make that API as close to SQL as possible, so you do do inserts, like the key words are insert, update, or delete. 

MARK: Oh, cool. 

DEEPTI: And we have a mutation API so you can put all these different statements together into mutations. For reads, you can use a Read API. If you're familiar with Read APIs from NoSQL systems, it's a much easier transition. And you can also use SQL. So you can do select star from table-- 

MARK: Nice. 

DEEPTI: --where x equal to foo or something. 

FRANCESC: So the API you were mentioning, not the SQL API but the other one, is that based on GRPC? 

DEEPTI: Yeah, so we offer the client libraries in what we call all silver languages, but right now we're offering them in Java, GO, Python, and Node.js. 

MARK: Cool. 

DEEPTI: And we'll have PHP, and Ruby, and C Sharp later in the year. 

MARK: Very, very cool. 

DEEPTI: And we expect that most customers-- because these are the most popular languages that we know of and we've seen requests for, most customers should be able to just use these client libraries, instead of having to code against the REST API or the GRPC API. We also have a JDBC driver that's a read-only JDBC driver for those who are interested in that or more familiar with those semantics. 

FRANCESC: That is very cool. 

MARK: That is very cool. 

FRANCESC: Nice. So let's talk about if I'm a developer-- well, I am a developer. 

MARK: You are a developer. 

[LAUGHTER] 

FRANCESC: But if I was to create a new project, why would I use Spanner? In what use cases are you saying, this is like, oh, yeah, you should go with Spanner rather than-- I don't know-- like Cloud SQL or maybe Datastore or Bigtable? 

DEEPTI: Sure. That's a very common question, actually. And I think, once you look at what you're trying to accomplish with your data storage system, then it becomes much easier. So as I said, Spanner is scale-out relational. So if you have a relational data and you really like MySQL, or all your data is in MySQL, and it fits in your MySQL instance or Cloud SQL instance, then you should just use Cloud SQL, the managed MySQL service. 

However, if you're running out of the capacity for that MySQL or Cloud SQL instance because you have way too much data or way too much work load, where that cannot be handled by one vertical solution, then Spanner is a great alternative. Because if you're running into the seams of your MySQL box, then you have two alternatives, either to go to a sharded MySQL solution, which has a whole set of issues that you have to deal with-- managing and maintaining that-- or you then have to transition to NoSQL, which you give up all those-- 

FRANCESC: Yeah, goodbye. 

DEEPTI: --cool things we talked about. 

FRANCESC: Goodbye transactions. 

DEEPTI: Correct. 

FRANCESC: Yeah. 

DEEPTI: So in that case, you don't have to make that trade off. You go to Spanner, basically. In terms of when to use Datastore or Bigtable and Spanner, as I said, Bigtable is a key value store or a wide column store. It doesn't have SQL or strongly-typed schemas, or multi-role transactions and things like that. But it's great for large scale data analytics and things like that. So you can totally see that. 

Also, it's not synchronously replicated. So Spanner by default, out of the box, is synchronously replicated, which means when you write to Spanner, you're actually writing to n different replicas, which are in our regional configuration is three replicas. Whereas-- and they're not eventually consistent, they're a strong-- 

MARK: Yeah. 

DEEPTI: It's synchronously replicated without compromising our performance. 

MARK: Nice. 

DEEPTI: And then Datastore store is a object store, essentially, or a document store. It's a key-- so, again, doesn't have the same relational semantics that Spanner or MySQL have. So again, if you don't need relational semantics or if you just want to-- it's a great product to get started on, as well. Like if you have low QPS or low query numbers, and you just want to get started and use a consistent data store, which is, again, multi-region and available-- highly available-- then I think Datastore is a great option. 

MARK: So now I'm really curious, like BigQuery-- 

DEEPTI: Mm-hmm? 

MARK: I know a lot of people who will take data from maybe Datastore or other places, put shit into BigQuery so that they're able to do large scale querying for analytics. Sounds like Cloud Spanner will handle that workload as well? Where does the line get drawn there? 

DEEPTI: Yeah, so I think this is the OLTP versus OLAP conversation because BigQuery is ultimately a data warehousing solution, but in the Cloud and with scalability. So its really meant for running OLAP style. 

FRANCESC: What is OLAP? 

DEEPTI: Sorry. Yeah, so OLTP stands for Online Transaction Processing and OLAP stands for Online Analytics Processing. 

MARK: Right. I see. OK. 

DEEPTI: So the cool thing about BigQuery is that you can actually import data from different data sources, and then combine them, and then run analytics on them-- so do aggregations and roll ups and things. You can have as much data as you need or as little data as you need and you can run a bunch of queries on this. Spanner is your operational database. BigQuery is not an operational database, right? 

So Spanner is where you put your production data. That's where you run your mission critical application. And then if you want to combine that data with other sources, or if you want to run sort of a billing pipeline that's monthly aggregations or something like that, then you transfer that data in to BigQuery. Then you can join it with other data sources or just run long running operations on it, as well. 

FRANCESC: I think we should do, definitely, an episode on all the different ways of storing data because we keep on adding more. And we had one, episode 14, I think, that was like-- 

MARK: Hm, that was a while ago. 

FRANCESC: --storage in the Cloud. We should remake that because there's so many cool things going on. So there's so many other topics that I'd like to cover. There's like TruTime and super cool stuff with atomic clocks and stuff, but I don't think we're going to have the time to cover all of those. 

DEEPTI: Sure. 

FRANCESC: So could you share some good place, like a talk or a document? Where could I start learning more about these things? 

DEEPTI: It depends on what you want to learn. Are you talking about Spanner or-- 

FRANCESC: About Spanner. How-- the magic sauce behind it. 

DEEPTI: Yeah. So of course there is a canonical 2012 OSDI research paper that you can see on research.google.com. That's a great starting place to understand where Spanner came from. But in terms of Spanner right now and Cloud Spanner, the service specifically, I would recommend going to our technical documentation page, which is cloud.google.com/spanner/docs. 

We actually have a white paper section there where we kind of basically talk about the technical details of some parts of our system that we've learned are very exciting to a lot of our developers. And we kind of try to open the hood a little bit so that people can understand, well, how do reads and writes work? And how do queries work? And how do you optimize queries? And how do you have efficient schemas? Things like that. So I would recommend that white paper section, as well. 

FRANCESC: And is there by any chance any sessions going on at Cloud Next? Is anyone at Cloud Next going to talk about Spanner? 

DEEPTI: I don't know. 

FRANCESC: I'm going to see them if they are. 

DEEPTI: Actually, we have at least two sessions on Cloud Spanner. There is the Spanner 101-- or sorry, Cloud Spanner 101 and Cloud Spanner 201. So I would recommend people who are going to Next to attend those if they want to learn more about Spanner. 

FRANCESC: Awesome 

DEEPTI: Yeah I think-- as the name suggests-- one of them is more of a broad overview, and the second one is-- 

FRANCESC: And they're all going to be recorded. So if you cannot attend, don't worry. We've got you covered. 

MARK: Yeah. 

FRANCESC: We release that later on. I don't know exactly the dates, but soon. 

MARK: Yeah. So I'm also wondering, is anyone-- do you know, publicly, about anyone who's using Cloud Spanner now in the wild? What are they doing with it? 

DEEPTI: Yeah, so actually, as I said earlier, we ran an Early Access Program that generated tremendous interest. And many companies signed up for that, to try it out and to give us feedback, which is where we took the time to then generate or create the Cloud Spanner product. Two of them are actually mentioned in our blog post that we had for the Cloud Spanner release, and on our product page, which is cloud.google.com/spanner, which is Quizlet and JDA. Quizlet actually did a deep dive sort of analysis because they have a sharded MySQL solution. 

MARK: Oh, nice. 

DEEPTI: And yeah, they had all sorts of problems with it. So they were looking for the next generation thing that they could go to and hopefully forget about all the headaches that they had with the sharded solution. So they have a pretty in-depth technical blog that they wrote that is, again, linked from our product page, as well. 

FRANCESC: And we'll have links to that on the show notes. 

DEEPTI: Great. Yeah, so I think those two are definitely exciting. Now that we are a public product, we expect more and more customers to sign up and obviously use this for their mission critical and production workloads. 

MARK: So I'm curious, as well, what was-- were there any big surprises, as well, when people sort of started playing with Spanner? Were you like, I never thought anyone would do that with it or something interesting like that? 

DEEPTI: Because we'd been running Spanner service internally, we'd kind of come across most of those kind of questions. I will say, the level to which people were excited about SQL surprised us-- 

FRANCESC: Yeah. 

DEEPTI: --a little bit. Internally at Google, as you were saying, people are very excited about the NoSQL-- 

MARK: Yeah, it is-- 

DEEPTI: --API. Or used to be, anyway. Now we have over 2,000 customers using Spanner. So-- 

MARK: Nice. 

DEEPTI: But it's interesting when we did these hack we did hack days with some of our customers, which was very exciting to us. And everybody that like looked at SQL, they were like, no, you can't do this. Can you? And then-- 

MARK: Then we were like, yes, we can. 

DEEPTI: Yeah. So we decided to keep the-- 

FRANCESC: Select star across the world. 

MARK: Yay. 

DEEPTI: Pretty much. And we kept the SQL API and have decided to grow it, as well. So that's cool. 

FRANCESC: So you mentioned that you were think about growing it. What are the kind of things we might expect from Cloud Spanner going on? 

DEEPTI: Yeah, in terms of roadmap, I think we obviously are planning to become generally available, towards the middle of this year. We have a multi-region solution coming out right after. And then the general idea with Spanner is to-- or the general plan-- is to integrate with other GCP services, such as DataFlow, BigQuery, Pub/Sub, all those kinds of things, so that GCP can be your one stop data shop, where you can use Spanner for your production workload, but also have messages using Pub/Sub that can automatically happen and you can automatically transition your data into BigQuery for those federated queries and things like that. So I think we have an interesting year plus ahead. 

MARK: So where is Spanner specifically targeted? Like size of company, pricing, where does that position itself in terms of the audience that would be participating in using it? 

DEEPTI: So Spanner, it actually doesn't really matter which size company you are. Really, it's about what features do you look for and does Spanner have them or not? So it could be for SMEs or it could be for enterprises. I can tell you that, from a feature point of view, we definitely have-- we're enterprise ready with the features. We have IAM, which is identity and access management, in the beta product already. We have audit logging. We have encryption addressed by default. We have a JDBC diver. As I said, we have SQL, which is [INAUDIBLE] 2011 compliant and we have client libraries. 

So we are definitely enterprise ready, but I think any size company can take advantage of these features without extra effort. So it kind of comes free-- as part of the system out of the box. And so even if you're a startup or a small company, but your data is your prized possession-- it's your business intelligence or your business strong point-- then you can start with Spanner, and then you don't have to worry about ever having to deal with scale or managing that database or provisioning for disaster recovery by replicating it into multiple availabilities. All of those things come sort of built in and by default. 

So it has a lot more than just scalable relational database to offer. And, as I said, it has high availability, it has high performance. It can grow and grow as your data grows, and you don't have to worry about it. You focus on your business and growing it, and we take care of the rest. 

MARK: So if I'm a four person team but I want to build the Pokemon Go, I should be looking towards something like this, rather than just putting MySQL in my own box somewhere? 

DEEPTI: I mean, I would say if you're looking at putting your MySQL on your own box, sure, but then you don't get all the availability and management-- 

MARK: Yeah. 

DEEPTI: --out of the box that you-- 

MARK: But yeah, I know I'm going to get this huge pipeline of traffic, then I need to build accordingly. 

DEEPTI: Yeah. I would say the other aspect here, which I've heard a lot about over the last couple of days since we've launched, is pricing. There has been a lot of consternation on whether it's really priced for smaller companies. And I would say, we put a lot of thought in our pricing. And I think we are very competitively priced for the value that Cloud Spanner offers. 

If you really look across the Cloud data storage offerings, with competitors and such, I think we are pretty well priced. You're getting a fully managed, very high availability service. So imagine you're not having to get out of bed in the middle of the night because your database machine crashed, or because it's running out of memory, so you have to provision more memory. 

I mean, just talk about pricing a little bit really quickly. So when you buy a node, you actually get three replicas of the node. 

MARK: Oh. 

FRANCESC: Oh, wow. 

DEEPTI: That means three different availability zones. 

FRANCESC: I was going to ask you that because that is not the case for Bigtable, for instance. Right? In Bigtable, you need to create a cluster with three nodes. 

DEEPTI: Sure. 

FRANCESC: Here, one node is enough. 

DEEPTI: One note is enough. It's the lowest. 

FRANCESC: Nice. 

DEEPTI: We do recommend that you create or get three nodes, just for production grade availability and traffic. But really, you can buy one node. But the point is that one node gives you three replicas-- three nodes in three different availability zones-- all of which are live nodes. They can all serve data and all-- they're not just sitting there as a master-slave kind of configuration. 

FRANCESC: No. 

DEEPTI: Because as I said earlier, Spanner is synchronously replicated. So there is no-- it's all what would be called master-master replication. You get fully managed high availability, you get SQL, you get the scalability, and you get these regional and multi-region configurations when they launch. So there's a lot there that you're getting out of Spanner for the price that we're offering it. 

FRANCESC: No, I think it's definitely worth taking into account that the fact that you don't need to take care of like-- what happens if your database disappears. Because, I don't know, we've heard about stories of these things happen and the fact that you know that you don't even need to care about it, at all, that is-- I don't know. If I was running a company, I'd definitely consider it. 

MARK: Yeah. 

DEEPTI: Yeah, I mean it's a trade off between how much time do you and your developers and your IT staff spend managing your database versus building applications and growing your business, and what the trade off looks like. 

FRANCESC: Nice way to put it. 

MARK: Cool. All right, well, I think we are running out of time a little bit but I'll ask, is there anything we haven't covered? Or something you want to plug or promote or announce that we haven't managed to cover in the half an hour we've been running so far? 

DEEPTI: I mean, there's so much more that you can learn about Cloud Spanner and Spanner. There's definitely a layered chocolate cake here and you can keep un-layering it or unpeeling it. There is a plethora of information on our site's page and, as I mentioned, the white papers. So I would definitely go there and check it out, and see if you can't find what you're looking for there. 

FRANCESC: And I'll actually plug something here. There is a very good talk that is from "Papers We Love," which is a talk about the Spanner paper given by an ex-Googler engineer that was working in the team. And it's a pretty amazing talk. So I'll try to put that in the show notes, too. I guess it's a good place to start if you're not into reading papers. 

DEEPTI: Sure, yeah. And of course, once the GCP Next talks happen, they will also be-- 

MARK: Oh yeah, I'm very excited about those. 

DEEPTI: separately recorded. 

MARK: Yeah, excellent. All right, Deepti, thank you so much for joining us today. That was-- actually, that was an amazing learning experience. I learned way more-- 

FRANCESC: Oh, yeah. 

MARK: --Spanner than I knew previously and I'm very excited about it. 

DEEPTI: Well, I'm glad! I'm glad to be here. Thank you for having me, and I hope this is useful to all your listeners. 

FRANCESC: Yeah. I'm sure it was helpful for me, at least. 

MARK: Yeah. 

FRANCESC: So, I hope it will helpful for them. 

DEEPTI: Cloud Spanner for everyone in the world. 

MARK: There you go. 

FRANCESC: Thank you so much. 

DEEPTI: Thanks. Thanks for having me. 

MARK: Thank you so much to Deepti for joining us for a fascinating interview. I still can't decide if Spanner is entirely magical unicorns, but it is pretty amazing in terms of what it does. 

FRANCESC: It is definitely powered by magical unicorns. 

MARK: Yeah. 

FRANCESC: Yeah. 

MARK: Definitely. 

FRANCESC: Absolutely 

MARK: Absolutely. Cool. So why don't we go to the Question of the Week, sent to us by the amazing Jessie Frazell. 

FRANCESC: Yeah, so as part of her, basically let's call it integration into Google, she decided to basically move all her stuff to Google Cloud Platform. And she came up with this little problem. She wanted to run an SMTP server-- so a mail server-- on Google Cloud Platform, and it turns out that it doesn't work. So she asked me, how is this? And why not? And I mean, it is in the docs, but I think that it is something that could be a little bit surprising, so I guess it's worth discussing. 

MARK: Yeah, so it is definitely worth noting. Google Compute Engine specifically doesn't allow outbound connections on 25, 465, and 487, basically because spam and abuse and bad things. 

FRANCESC: Yeah, basically there's this thing called IP reputation. So if you're sending emails, the IP where the email is coming from-- IP forward-- is actually very important. So if we allowed everyone to send e-mails from there, the IPs would probably lose their reputation quite fast. 

MARK: Yeah. 

FRANCESC: So it's something we don't really want to do because it would be bad for our customers. 

MARK: Yeah. 

FRANCESC: And also because it would be a very easy way to generate lots of spam, and spam is not good. So then we have these limitations but you can work around it quite easily. You can use some services that are already available, and we have documentation of how to use them. So you can use SendGrid, MailGun or Mailjet. Those are the ones we have for implementation. And I think you used one of them. 

MARK: Yeah, so they all come with free tiers. I use SendGrid, personally. So SendGrid comes with a free trial of up to 12,000 transactional emails free each month. My blog does not send out anywhere near that many e-mails, so it works really, really well. 

FRANCESC: Even though you send it to all of your fans? 

MARK: All of my fans. Like my mom, and a couple of cousins. 

FRANCESC: It's a big family, 12,000. 

MARK: Yeah. 

[LAUGHTER] 

FRANCESC: Cool. And then there's also another option, which is you can send email through Google. We have an SMTP relay service. And basically what you do is, you send it through Google Apps, even though the email is not Gmail. So there's these little servers that allows you to send it from your server but through Google. And all the documentation will be linked from the show notes. So if this is something that you want to do, go to the documentation. And of course, remember that even though you might use these services, you still need to add firewalls to make sure that the traffic actually goes through, as we discussed in the networking episodes we had a long time ago. You can go find them. They're very interesting. 

MARK: Cool. All right. Well, that sounds like that kind of solves that problem. What are you up to, Francesc? What are you getting up to? I know we are leading up to Next, which is kind of hectic and crazy, but you got anything else in the cards? 

FRANCESC: So by the time this episode comes out, I will be in India-- in GopherCon India, in Pune. Pu-nay, which is how you pronounce it, by the way. 

MARK: You know now. 

FRANCESC: Yeah, now I know. After that, I'll stay a couple of days in Mumbai and then I'll come back for Cloud Next. And then after that, I'll be getting ready to go to GopherCon China, in Shanghai. 

MARK: Very nice. 

FRANCESC: Yeah, what about you? 

MARK: So when this comes out, the week after that will be Game Developer Conference. 

FRANCESC: Oh yeah, talk about that. 

MARK: Which is terrifying because lots to do there. Yeah, I will be around. If anyone wants to meet up, feel free to ping me directly on Twitter, @Neurotic. I'm definitely going to be floating around the booth, and a variety of events we're sponsoring, and our sponsored talk, and all sorts of other fun stuff. And then, yeah, you and I are heading off to Next. 

FRANCESC: Yeah. And actually, you were mentioning that if someone's coming to GDC, they should let you know. If anyone is coming to Cloud Next-- 

MARK: Yeah. 

FRANCESC: --let us know. We will have t-shirts. 

MARK: We will have t-shirts. We will have a booth space set up. We'll be doing recordings again, like we did last year. 

FRANCESC: And we'd love to meet you. 

MARK: Yes. 

FRANCESC: So come say hi. We always appreciate that. Well, Mark, thanks again for such an interesting episode today. 

MARK: Yeah, Francesc. Thank you for joining me once again. And thanks to everyone for listening, and we'll see you all next week. 

FRANCESC: Talk to you all next week. 
{{< /transcript >}}