+++
audioDuration = "00:31:12"
audioFile = "Google.Cloud.Platform.Podcast.Episode.14.mp3"
audioSize = 44942759
categories = ["Storage", "Cloud Storage", "Cloud Bigtable", "Cloud SQL", "noSQL", "Paul Newson"]
date = "2016-02-24T01:07:49Z"
description = "In the fourteenth episode of this podcast, your hosts Francesc and Mark interview Paul Newson, a Developer Advocate for Google Cloud Platform and former Software Engineer on the Cloud Storage team at Google."
draft = false
episodeNumber = 14
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Storage with Paul Newson"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/FNJsej8UCww"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/47dj9w/episode_14_storage_with_paul_newson/"
+++

In the fourteenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Paul Newson](https://twitter.com/newsons_nybbles).
Paul is now a Developer Advocate for Google Cloud Platform but was a Software
Engineer in the Cloud Storage team.
Together they discuss the multiple options available for data storage on the
cloud and the trade offs to be taken into account while choosing one.
<!--more-->

##### About Paul

Paul currently focuses on helping developers harness the power of Google Cloud
Platform to solve their big data problems. Previously, he was an engineer on
Google Cloud Storage. Before joining Google, Paul founded a startup which was
acquired by Microsoft, where he worked on DirectX, Xbox, Xbox Live, and Forza
Motorsport, before spending time working on machine learning problems at
Microsoft Research.

Follow Paul on Twitter [@newsons_nybbles](https://twitter.com/newsons_nybbles).

##### Cool thing of the week

- Opinionated Deployment Tools & Kubernetes [blog post](http://blog.jonparrott.com/building-a-paas-on-kubernetes/) and [Github repository](https://github.com/jonparrott/noel)
   
##### Interview

- When to Pick Google Bigtable vs Other Cloud Platform Databases [blog post](http://terrenceryan.com/blog/index.php/when-to-pick-google-bigtable-vs-other-cloud-platform-databases/).
- Where Should I Store My Stuff? - slightly outdated [video](https://www.youtube.com/watch?v=B_EVh19Y5Rw).
- Choosing a Storage Option [docs](https://cloud.google.com/docs/storing-your-data).
- Google Drive [docs](https://developers.google.com/drive/).
- Google Cloud Storage [docs](https://cloud.google.com/storage/docs/overview).
- Google Cloud Datastore [docs](https://cloud.google.com/datastore/docs/concepts/overview).
- Google Cloud SQL [docs](https://cloud.google.com/sql/docs/introduction).
- Google Cloud Bigtable [docs](https://cloud.google.com/bigtable/docs/).
- Google BigQuery [docs](https://cloud.google.com/bigquery/what-is-bigquery).
- Google Cloud Dataflow [docs](https://cloud.google.com/dataflow/what-is-google-cloud-dataflow)

<div style="text-align:center">
<img alt="A decision tree on Google Cloud Storage" src="/images/post/storage-tree.svg">
</div>

##### Question of the week

Question from Jeff Schnitzer: Can you use Java 8 features in Standard App Engine?

- Google App Engine Standard Environment [docs](https://cloud.google.com/appengine/docs/about-the-standard-environment).
- Google App Engine Managed VMs [docs](https://cloud.google.com/appengine/docs/managed-vms/).
- Retrolambda [Github repo](https://github.com/orfjackal/retrolambda).

{{< transcript "FRANCESC: Hi, and welcome to episode number 14 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my very, very illustrious colleague Mark Mandel. Hey, Mark, how are you doing?" >}}
MARK: I'm good, thanks. How are you doing, Francesc?
FRANCESC: Pretty great, very excited about today. We're gonna be having our first episode ever about storage.
MARK: Storage is a very exciting topic.
FRANCESC: And very--very vast. There's a lot of things to talk about storage.
MARK: It's true. I think, you know, it's one of those things that everyone kind of has to do it but may not necessarily think about it all that much.
FRANCESC: Yup. So yeah, we're gonna have our colleague Paul Newson, specialized in storage, and he's gonna be telling us everything we want to know about it, so very excited about that.
MARK: Yup.
FRANCESC: But before that, cool thing of the week.
MARK: Cool thing of the week. I particularly like this one as it plays with Kubernetes, and I like Kubernetes a lot. One of our fellow Googlers, John Wayne Parrott, he wrote an article recently called "Building a [inaudible] on Kubernetes," or, "Opinionated Deployment Tools and Kubernetes." He built sort of a--he calls it a proof of concept. It actually looks really interesting, platform as a service solution called Noel on top of Kubernetes and sort of looking at how you can explore Kubernetes to build some more interesting things. It's pretty cool. It sort of sits in that sort of Hiroko-ish space where, you know, you can do a Git push, and it'll build things and then put it up on Kubernetes for you. It's quite cool indeed. He has a really nice demo that shows it sort of in action where he does a Git push, and then it sort of builds a Docker file and then sort of takes that live and builds a new version of it kind of in that sort of App Enginey-type way as well. It's really kind of a nice mixture of different paradigms, and it sort of explores how you can say, "Okay, cool, we have this great infrastructure of Kubernetes. What can we lay on top of that, you know, to make things either better for my particular use case, you know, or just better overall maybe?"
FRANCESC: Yeah, no, I really like it. I went through the article. The two things that I prefer the most, by the way, one of them was the demo itself, which is built on asciinema.
MARK: Yeah, I'd never seen that before. I was really--I really liked that.
FRANCESC: I had never seen that before. For people listening, it's--basically looks like a video, but it's actually--so it looks like a screenshot of a terminal, but you can actually select the text in it.
MARK: Yeah, yeah, you can see--like, if you want to copy the commands the person used, it's awesome.
FRANCESC: Yeah, so that's pretty amazing, and also what I like is the first phrase of the whole post, which is, "You should be building on top of Kubernetes, seriously." I really like it.
MARK: A sentiment I can definitely get behind.
FRANCESC: Yeah, I was like, "After that, okay, I'm sold. It's a good article." No, but seriously, it's a very, very good article, and I think it's very interesting, especially 'cause even--like, if you want to build or not on top of Noel or Noel or I don't know--I actually don't know how to pronounce that.
MARK: I call it Noel.
FRANCESC: I'm gonna call it Noel 'cause it's, like, kind of French for Christmas, you know.
MARK: Okay.
FRANCESC: Happy. So either if you want to use it or not, I think it's quite interesting to see how you can build higher abstractions above Kubernetes, how all of these simple concepts of pods and services and replica controllers, they all match together to allow you to build really, really cool stuff, really.
MARK: Yup.
FRANCESC: So yeah, we'll definitely have the link to that blog post on our show notes as always.
MARK: Wonderful. So why don't we have a chat with our friend Paul?
FRANCESC: Let's go for that.
MARK: Let's do it. We are joined today by yet another of our most excellent of colleagues. A gentleman by the name of Paul Newson is joining us today to talk with us about storage in the cloud. Paul, how are you doing today?
PAUL: I'm doing well. Thanks, Mark.
MARK: Thank you so much for joining us.
PAUL: It's my pleasure.
MARK: So if people don't know who you are, which I hazard a guess is simply not possible, do you want to give us a little bit about yourself and your background and sort of what you do at Google and that sort of fun stuff?
PAUL: Sure. So I'm a developer advocate as Google as you just mentioned, which means I get to do fun things like this with my time. Developer advocate's one of the titles that we give software engineers who work in developer relations, so we get to come out to conferences and talk to customers and give presentations and basically make people aware of the awesome stuff we have in the Google Cloud Platform and hopefully inspire them to use it, teach them how to use it, and so I'm very excited to be here today. Before I was a developer advocate for the Cloud Platform, I had the privilege of working on the Cloud Platform for about three years. I was a software engineer on the Cloud Storage team, which is how I have become known as the developer advocate who seems to know something about storage and why you've asked me to come here and talk about it today.
FRANCESC: Nice, and yeah, actually, that's the whole point of the episode. We want to know more about storage, and this is our first episode that--where we're going to cover storage specifically, and there's so many options that we don't want to make, like, a deep dive on every single option because the podcast is half an hour, not half a day, so we're gonna have to concentrate on, "Okay, I have some data. I want to store it. What do I do?"
PAUL: Yeah, so I'm gonna try to kind of give you a roadmap or a decision tree about, you know, "I have this stuff, and it kind of looks like this, so what's the best fit for me?"
FRANCESC: Nice.
MARK: Awesome.
PAUL: And there's sort of a couple of nodes on that decision tree. First let's talk about your data, which is, you know, is it structured or is it unstructured? If it kind of looks like a table, you know, it has rows and columns, roughly speaking, you're looking at structured data, and we have a number of options for that. If it's just a big bag of bytes and you're sort of handing it to us and saying, "Here's a big bag of bytes. Please store this for me. I'm gonna ask for it later," that's unstructured storage, so, you know, to a first approximation, you can think of the unstructured storage like images, videos, zip files. You know, there's probably internal structure to these objects, but as far as the storage services are concerned, it's just a bag of bytes, and we're just gonna faithfully reproduce these bytes in the same order you gave them to us and hand them back to you. So in terms of a--and then kind of the other dimension which we can sort of look at the different options you have are fully-managed, no-ops, you know, Cloud-native storage services versus, "I want to run my existing storage infrastructure which I'm running on my own servers. I just want to run that in the cloud," so we kind of have the lift-and-shift versus the Cloud-native approach. So if we're talking about Cloud-native unstructured storage, that's kind of the simplest conversation to have. If you are a developer, which if you're listening to this podcast I'm assuming is the case, you're most likely gonna use Google Cloud Storage for that because that's the--that's the one where your application is in control of the data. There's a conversation to be had about Google Drive and where that fits into this, and you know, so if your application--you know, you're adding something that kind of looks like a new app in--alongside other apps that are being used and you want to interact with data that's stored in spreadsheets and docs or maybe your own file format but it kind of looks and feels a lot like Docs or Sheets does, there's a--there may be a place for Google Drive in that scenario, but I'm going to assume for the rest of this conversation that, you know, it's--that Google Cloud Storage is gonna be your unstructured option there, and that's in terms of the--you know, the fully-managed, fully-hosted no ops. You just store the stuff, and it's our problem how to serve it up when it gets--when you ask for it later. You know, if you're looking for, you know, more of a lift-and-shift solution, you can easily run whatever your existing solution is on our VMs, and we have persistent disk in a variety of flavors that can be used to store that. There's a lot more ops overhead to doing that, right? Because you need to be aware of, you know, how is my data replicated across multiple VMs so I don't have a single point of failure if I'm using something like local SSD? There is--if you are using a persistent disk, then you're not going to necessarily lose the data if there's a problem with a particular VM, but you may have an interruption to being able to serve that data while you bring a new VM up to attach to that persistent disk. So that's kind of your options for unstructured data. 
FRANCESC: So I have a quick question about structured versus unstructured. The way you described it was kind of like if it has columns, it is structured, and if it's just a bag of bytes, then it's not structured. What about a bag of JSONs?
PAUL: That's an interesting question. 
MARK: Semi-structured.
PAUL: So it kind of depends how you're going to use it and how you want to be able to look up those JSONs.
FRANCESC: Okay.
PAUL: So if you--you know, I kind of view JSON as an interchange format in that--for example, when you load--when you send a row of information to BigQuery, to load it into BigQuery, you give it to BigQuery in JSON format, so you could arguably say that BigQuery is storing, you know, a whole bunch of JSON data because that's how you gave it to BigQuery, but really, it's not. That was just the interchange format that you used to hand the data to BigQuery so it could figure out, you know, which pieces of data fit into which columns. There are databases which are kind of native JSON databases. I'm not super familiar with them, so I'm not going to talk about them and say something incorrect, but if you are super familiar with one of those and you understand how to run it in a high-availability way, you know, again, you can run those types of solutions on Compute Engine VMs, and, you know, you have all the advantages of running in the cloud, but there's a lot more ops overhead on you because you're the one who's setting up that software. You're making sure that you have the right OS patches, you know, and so on and so on and so on.
FRANCESC: Hmm. [pause] Cool, so--
PAUL: So did that actually address the question you were asking?
FRANCESC: Yeah, yeah, absolutely. So--okay, so then we've covered a little bit where to store it when the data is not structured, so you just--as you said, I really like that expression, the bag of bytes. What if I have something more structured?
PAUL: All right, so if you have something more structured, we have a few--we have a few options for that. I'm gonna say that with no other information at my disposal except that you're saying, "I've got some structured data and I’m building an app," the go-to answer is gonna be Cloud Datastore. Cloud Datastore is a structured NoSQL database. It scales gracefully in terms of both performance and cost from zero bytes up to terabytes, and it has a very flexible schema. You don't have to define your schema up front. This Cloud Datastore is available as its own standalone, you know, service, but it was born as the data store solution for App Engine, so it's really, really well optimized for these serving scenarios where you have relatively small pieces of data that you want to look up by keys and there's structure within that data in that you have individual properties within each of these rows. It gives you some limited querying functionality, and it also has some support for cross-row transactions, which can be very important for certain applications. So with no other additional information, I'd say go with Cloud Datastore. It's probably the answer you want, but the other thing I would, you know, put up for your consideration is if you have--if you're working in a context where you have very deep knowledge of relational databases and you want a relational database solution because that's what you know how to program, that's what your staff knows how to program, or you want to take advantage of some of those features like relational integrity and a very structured data model, then you should also look into CloudSQL, which is a fully hosted MySQL solution. The CloudSQL solution, there are now two generations of it. I would encourage you to look into the second generation. It's not generally available at the time we are having this interview, but you should go to our website and see if it's generally available now. It's certainly available for you. It's in beta right now. You can go--you can go play with it, and it is very scalable. It can handle a lot of scenarios. For most applications, it's probably going to be sufficiently scalable. It's only if you are expecting a runaway success and you're gonna need to scale into the terabytes of data that you may find that it doesn't scale, you know, high enough for your needs. So that's kind of the SQL versus NoSQL node of the tree. If you are, you know, heavily into relational databases, you love relational databases, we have a hosted service where we handle the operations, and that would be CloudSQL. If you are far more comfortable with the NoSQL way of doing things, then Cloud Datastore would be your choice. So those are kind of the two go-to solutions, but there's a third one, a third structured solution I should talk about, which is Cloud BigTable. Cloud BigTable is kind of a lower-level NoSQL solution. It is also a NoSQL solution, but we're talking about really heavy machinery. The guidance we give is that if you're storing less than a few terabytes of data, Cloud Datastore is probably the way to go. In terms of when to consider moving to Cloud BigTable, we recommend sort of a 1--an approximate 1-terabyte minimum of data before Cloud BigTable is going to be a cost-effective way to start storing your data. The other hurdle to consider with Cloud BigTable is that you are using a lower-level API, whereas with Cloud Datastore you have a SQL-like language that you can use if that's something you're familiar with. It also has some higher-level libraries which you can use to access it, like the NDB library that's available as part of App Engine. With Cloud BigTable, you're using the HBase API, which, if you're familiar with it, is great, and if you already have a bunch of existing code which uses it, then this is exactly what you should be looking into. However, it is a lower-level API. It basically gives you sort of put-get-scan semantics, not higher--there's no cross-row transactions. There's no sort of query language or anything like that. It's very much a low-level put-get-scan sort of API.
MARK: Is there, like, particular applications or particular types of data that would be, like, very, like--that are usually used in [inaudible] something like BigTable, like, there's a particular use case? That's the word I’m looking for, a particular use case that this would be pertinent for?
PAUL: Well, the other characteristic that BigTable has, which is really, really nice for some scenarios, is extremely low latency, single-digit millisecond latency in the 99th percentile for reads and writes, which is pretty amazing. The other thing that BigTable gives you the opportunity to do is mix your--what I'd call your serving workloads with your analytics workloads on one database, which is often very difficult to do. You know, this is why, you know, people have data warehouses, right? You have your operational database, which is kind of your serving database, the one that is--that your web--your mobile app or your website is hitting and getting the most up-to-date data, and then you sort of replicate that into another analytics system which has a slightly older view of the data, and then you run your analytics on that. With Cloud BigTable, the latency is low enough you can use it as your operational--as a fantastic operational database. You can also, for example, just run a MapReduce or a DataFlow directly against your BigTable, and if you provision your BigTable with enough resources, it can handle both the analytics workload and the serving workload simultaneously, so if you have a scenario that looks like that, BigTable's definitely worth looking into.
FRANCESC: Very nice. So we've seen structure versus unstructure, so for unstructured we said that Cloud Storage could be probably the best solution in general, like, the go-to solution. For structured, depending on how much you structure it, so you may go with SQL or NoSQL, and for NoSQL we said that if you really want the real thing and you have a huge amount of data and you want amazing performance, then you should consider BigTable, but otherwise Datastore should be the go-to solution for most of the cases.
PAUL: Yup, and that's all true.
FRANCESC: Cool, so what about when you want to run something slightly different? Like, you're saying, "Yeah, okay, so if you have a non-SQL, you should go with Datastore." What if I’m already running MongoDB or stuff like that? How--what could people should do for those?
PAUL: Yeah, again, you can just lift and shift those into the cloud. We've got these great VMs. You can choose the VM size that you want. You can cluster it in whatever way you want that your favorite package, you know, allows you to do. You can choose to run it on, you know, the hard drive-backed persistent disk, the SSD-backed persistent disk, or local SSD depending on how much performance you want and whether the software package you're using gives you, you know, the resilience to failures. So--but again, now you're not talking about a Cloud-native, no-ops, fully-managed solution at that point. Like, there's a lot more responsibility on you to understand what's going on. It's just like running it on your own machines. It's just it happens to be running on our machines instead.
MARK: We've talked in the past kind of, like, compute as a continuum. This is almost like--this is pretty much storage as a continuum.
FRANCESC: Yeah, basically.
MARK: Where you're like, "Do you want us to run everything for you and manage all that stuff for you, or do you want to just, you know, create your own persistent disks and worry about, like, what the IOps are on this particular SSD?"
PAUL: Right. So there's one other structured storage solution we have which is definitely worth talking about, and that's BigQuery. People--a lot of people will approach our platform, and they'll look in the storage selection--in the storage section in our console, and they won't see BigQuery there 'cause it's hiding under big data where it should be because it's a really great analytics tool. Like, that is its natural home. So a lot of people won't think about using it as a storage medium, but it's actually a fantastic way to store your data. The--it costs you the same per byte to store, you know, archival data in BigQuery that it would cost you to store it in Cloud Storage durable reduced ability class of storage, for example. The price of those two things, those two types of storage is the same per byte, but by storing it in BigQuery you can run a SQL query against it, and you can run massive SQL queries against it, and talking about the continuum of computing, the continuum of storage here, you don't need to say--you don't need to tell us when you run a BigQuery query, "Oh, by the way, I'd like you to dedicate, you know, ten 32-core servers to this query, please, and I need this much throughput." You just give us your query. You gave us your data. Then you give us your query, and we give you the answer as fast as we can, and we have these very large clusters that are already provisioned which are this sort of massive shared tenant solution so that, you know, when I'm running my query, I get to chew up a huge portion of those resources, and then my query's done. In the next ten seconds someone else's query is taking up those resources, so you get these sub-minute, you know, slices of time on these huge analytics clusters to answer just the question you're asking it. It's really quite an impressive model, and I encourage you to, particularly for data that is not on your serving path, data that you're going to primarily use to gain insights from, put it in BigQuery and keep it there, and then you can always do these ad hoc queries against it in the SQL language that you and your analyst probably already know and are very proficient with. Now, somebody might say, "But wait. I need to run a data flow against it 'cause I'm doing something like building a machine learning model, for example, which I can't do--you know, I've got to run my own custom code, and I can't do that in SQL," and there are some features of BigQuery where you can plug code in, but it is far more structured than what you could so in something like Dataflow, so in that scenario, that's okay. You can still read all of your information out of BigQuery in your Dataflow job or your MapReduce job if you're using Dataproc with our connectors, so you're not limited to only using SQL for your analysis. So there's really no reason to not store your longterm archival analytics data in BigQuery. That's where you should be using it for your data warehouse.
FRANCESC: Nice. So--okay, so I think that now I almost understand all our options that we have for Cloud storage, so just to go over all of them quite quick, we made a distinction between what we're saying is pretty much managed and Cloud-native, and we still have a bunch of other possibilities which is like, you build it on top of VMs and you install whatever you feel like it, but for the ones that we propose, as Cloud natives we have Cloud Storage for unstructured and then CloudSQL for SQL, Datastore for non-SQL, for NoSQL, BigTable for NoSQL that runs incredibly fast.
MARK: And is huge.
FRANCESC: And is huge, and then we also have BigQuery, which I really had not think about a storage solution, but I really--yeah, I can definitely see it. I really like it.
MARK: It's interesting, actually. You could almost say that BigQuery sits in a weird space between, like, SQL and NoSQL 'cause you can do fun stuff like query JSON out of it and--but still have a schema at the same time if you wanted to. It's like, you can do--
FRANCESC: Yeah, BigQuery's kind of an amazing product, actually. It's in the middle of many, many, many cool tools that we have at Google. Cool, so is there anything else that you could like to mention before we finish with this interview?
PAUL: Actually, that's a fine question. Let's see. Well, we've touched on the big managed services. I guess the one thing I'd like to leave is there is a--there is definitely a place for lifting and shifting existing applications into the cloud as a way to get, you know, a win out of using the public cloud without having to do a lot of redevelopment, so I certainly don't want to discourage people from doing that. However, if you're writing something new, I highly, highly, highly encourage you, even if it's not what you're currently familiar with, to--instead of doing a lift and shift where you're running your own thing on your own VMs and you're taking on all that operational burden, I highly encourage you to see, "Can I build my application on these Cloud-native, fully-managed, no-ops solutions?" because they will allow to you scale very, very high very, very easily without hiring, you know, an equal number of humans to the amount you scale to manage the operations of these things, so if you are approaching the cloud and doing something new, I highly encourage you to preferentially investigate the fully-managed, no-ops solutions we have to offer.
FRANCESC: Yeah, I definitely agree with that, especially not only for storage but also for computing as we were talking. Like, if you are able to run your code on App Engine, it will pay off very, very soon 'cause you don't need to manage absolutely anything, so yeah, that's a great piece of advice, I think.
MARK: Definitely. Well, thank you very much for joining us, Paul. We really appreciate you taking the time.
PAUL: It's been my pleasure. Thanks a lot for having me on the show.
FRANCESC: Thank you, and I'm sure that we will have more storage-related episodes in the podcast soon, so see you soon.
PAUL: All right, thanks a lot, guys.
MARK: Cheers.
FRANCESC: Bye. So thank you very much, Paul, for this amazing interview. I learned a lot.
MARK: Yeah, definitely.
FRANCESC: And yeah, actually, I know that this is the first episode of a series of episodes where Paul's gonna be here explaining a bunch of stuff about storage 'cause there's a lot of things that are really useful, and at the end of the day, everything we do is you process data and then you store it somewhere.
MARK: Yup.
FRANCESC: So yeah, very important topic. Okay, so let's go for our third section of the episode, the question of the week.
MARK: Yeah.
FRANCESC: So I think that you got a pretty good one today.
MARK: I think so. It's probably a topic that some people have definitely heard around the traps. The topic was brought up directly by--to me by a gentleman the name of Jeff Schnitzer, started talking about using Java 8 in standard App Engine. That's a long-discussed topic of monumental proportions.
FRANCESC: Yup.
MARK: But what sort of options do you have if you want to start using Java 8 on App Engine?
FRANCESC: Okay, so the quick answer is Java 8 on App Engine doesn't work yet.
MARK: Yeah.
FRANCESC: On classic App Engine, what we call normal App Engine, but if you want to, you can use it directly on managed VMs.
MARK: Yes.
FRANCESC: So it's something that works really well, and you can get all the nice things of Java 8.
MARK: Definitely.
FRANCESC: Now, the thing is that we are actually working on having Java 8 supported on standard App Engine, but App Engine is a pretty complex product. It has a different runtime. We change a little--like, we make it so it's very safe and scales very well, so, you know, that takes engineering effort.
MARK: It's not an easy process by any stretch of the imagination.
FRANCESC: Yeah, we're definitely working on it. We know that people want it, and I mean, we're developer advocates, so we're definitely pushing also.
MARK: We appreciate it as well, yes.
FRANCESC: Yeah, we're also pushing internally to make sure that this happens, and it will happen. When? Well, we cannot really say a date, but sometime soon. I hope very, very soon, but who knows? But in the meanwhile, I've also heard that there's actually some way of getting the feel like you're using Java 8 without actually having it?
MARK: Yeah, so obviously standard App Engine, you're only limited--or you're limited to Java 7, but there's a great project out there called Retrolambda, so while you don't get the full features of everything that comes in Java 8, if you want to use the lambda expressions but still have it fall back to Java 7, you can totally do that within App Engine. We promote this all probably a lot more within Android because of the Java 7 requirements there, but no, you can totally use it on App Engine. It's gonna make your syntax a whole lot nicer, especially if you've started playing with lambdas a lot more in Java, and it'll work down to--it'll work down to Java 7, so. If you haven't played with it within your GAE standard applications with Java, I reckon give it a fun go. I think it'll be a really pleasant experience.
FRANCESC: And if you really want to have actual lambdas which are real lambdas and closures and things like that, you can also just migrate to Go. Nah, just kidding.
MARK: Not that you're biased in this sphere in any way, shape, or form.
FRANCESC: Yeah, so yeah, we'll have a link to the GitHub repo for Retrolambda on the show notes so you can have a look at it. Great, so before we finish, as usual, where will you be next time we speak together?
MARK: I will be--so coming up in a couple of weeks, I think it is. Yeah, it is a couple of weeks, Launch Hackathon on the 26th of February. I will be there. I will be at GDC. That is ramping up. We're gonna have a great Google booth, super excited about that.
FRANCESC: Yeah, it's gonna be fun.
MARK: Definitely come by. We're gonna have Cloud Spin. We're gonna have all sorts of fun stuff happening at that event, so that's gonna be awesome, and then after that I will be at Strata.
FRANCESC: Nice.
MARK: How about yourself?
FRANCESC: So by the time this podcast comes out, I will be flying across the ocean coming back from Dubai, so there's GopherCon Dubai that will happen yesterday when this podcast comes out.
MARK: [Inaudible].
FRANCESC: So yeah, on February 23rd there's GopherCon in Dubai, and after that, yeah, it's gonna be a--quite a busy month with South by Southwest, GDC here in San Francisco, and there's also DroidCon in San Francisco, so--and all of those things, of course, same week.
MARK: Yeah. Oh, yeah, I'll be at GCP Next too. This is how much stuff's on. I completely forgot.
FRANCESC: And GCP Next, yeah. So yeah, it's gonna be a fun month in March, yeah. Looking forward to April.
MARK: Yes, very much looking forward to April. My birthday's in March too. I'd completely forgotten that. Wonderful, well, thank you very much for joining us yet again, Francesc.
FRANCESC: Thank you very much, and as usual, if you have any questions, any suggestions, any comments, feel free to contact us. I don't think we need to do it today. Do we need to do it today?
MARK: I think we're okay today.
FRANCESC: I think we're okay. Let's do it next week again.
MARK: We'll do it next week, wonderful.
FRANCESC: But yeah, contact us. We're very happy to hear from all of you.
MARK: Definitely.
FRANCESC: And as usual, thank you for much--for being here with me today, Mark.
MARK: Yeah, thank you, Francesc.
FRANCESC: And talk to you next week.
MARK: See you next week.
{{< /transcript >}}
