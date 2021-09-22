+++
audioDuration = "00:26:28"
audioFile = "Google.Cloud.Platform.Podcast.Episode.163.mp3"
audioSize = 38521643
categories = ["Cloud SQL", "SQL", "Database"]
date = "2019-02-20"
description = "We're learning all about Cloud SQL this week with our guest, Amy Krishnamohan."
draft = false
episodeNumber = 163
hosts = ["Mark Mandel", "Gabriela Ferrara"]
title = "Cloud SQL with Amy Krishnamohan"
image="/post/episode-163-cloud-sql-with-amy-krishnamohan/images/hero/hero-EP-163.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/REtWPky1hnW"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/asq8j4/episode_163_cloud_sql_with_amy_krishnamohan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

We're learning all about Cloud SQL this week with our guest, [Amy Krishnamohan](https://twitter.com/amykrishnamohan). Amy's main job is to teach customers about the products she represents. Today, she explains to [Mark](https://twitter.com/Neurotic) and [Gabi](https://twitter.com/gabidavila) that Cloud SQL manages services for open source databases, and she spends a little time elaborating on the other database management services Google has to offer.

Cloud SQL is a relational data storage solution. Relational data storage is very structured, almost like a table or spreadsheet, making it easier to analyze the data.  Cloud SQL is capable of scaling out and up, meaning it can scale for traffic patterns and for storage. In comparison, NoSQL databases are very unstructured. If you're not sure what kind of data is coming in, you can sort the data first and analyze it later. Each approach has its pros and cons and each is suitable for different types of projects.

Recently, Cloud SQL released a feature making it easy to move from on-prem to the cloud. In the future, they will continue to streamline the process of moving between the two spaces.

<!--more-->

##### Amy Krishnamohan

[Amy](https://twitter.com/amykrishnamohan) is Product Marketing Manager at Google Cloud responsible for Databases. She has diverse experience across product marketing, marketing strategy and product management from leading enterprise software companies such as MariaDB, Teradata, SAP, Accenture, Cisco and Intuit. Amy received her Masters in Software Management from Carnegie Mellon University.

##### Cool things of the week

* Process Workflows with the new Google Docs API [blog](https://cloud.google.com/blog/products/g-suite/process-paperwork-pronto-with-the-new-google-docs-api)
* Jib 1.0.0 is GA—building Java Docker images has never been easier [blog](https://cloud.google.com/blog/products/application-development/jib-1-0-0-is-ga-building-java-docker-images-has-never-been-easier)
     * GCP Podcast Episode 151: Java & Jib with Patrick Flynn and Mike Eltsufin [podcast](https://www.gcppodcast.com/post/episode-151-java-and-jib-with-patrick-flynn-and-mike-eltsufin/)
* A guided tour in Google Earth that explores Black history [blog](https://www.blog.google/products/earth/journey-us-voyage-through-black-history/)
* Author: Gabe Weiss - Publishing series: Cloud IoT step-by-step
     * Cloud IoT step-by-step: Connecting Raspberry PI + Python [site](https://medium.com/google-cloud/cloud-iot-step-by-step-connecting-raspberry-pi-python-2f27a2893ab5)
     * Cloud IoT step-by-step: Cloud to device communication [site](https://medium.com/google-cloud/cloud-iot-step-by-step-cloud-to-device-communication-655a92d548ca)
     * Cloud IoT step-by-step: Quality of life tip - The command line [site](https://medium.com/google-cloud/cloud-iot-step-by-step-quality-of-life-tip-the-command-line-ce23046867d4)

##### Interview

* Cloud SQL [site](https://cloud.google.com/sql/)
* Cloud SQL Features [site](https://cloud.google.com/sql/docs/features)
* MySQL [site](https://www.mysql.com)
* PostgreSQL[site](https://www.postgresql.org)
* Cloud MemoryStore [site](https://cloud.google.com/memorystore/)
* Cloud Bigtable [site](https://cloud.google.com/bigtable/)
* Cloud Firestore [site](https://firebase.google.com/docs/firestore/)
* Cloud Spanner [site](https://cloud.google.com/spanner/)
* GCP Podcast Episode 62: Cloud Spanner with Deepti Srivastava [podcast](https://www.gcppodcast.com/post/episode-62-cloud-spanner-with-deepti-srivastava/)
* Mongo [site](https://www.mongodb.com)
* Getting to know Google Cloud SQL [video](https://www.youtube.com/watch?v=OV-gak1CUU4)

##### Question of the week

[What is a virtual column in a database?](https://en.wikipedia.org/wiki/Virtual_column)

- Generated columns [blog](https://blog.gabriela.io/2016/10/17/understanding-generated-columns/) and [docs](https://dev.mysql.com/doc/refman/5.7/en/create-table-generated-columns.html)

##### Where can you find us next?

Amy will be at the [Postgres Conference](https://postgresconf.org) in New York on March 19.

Gabi will be at [PHP UK](http://www.phpconference.co.uk/) in London and [Cloud NEXT](https://cloud.withgoogle.com/next/sf) in April.

Mark will be at [GDC](https://gdconf.com) in March, [Cloud NEXT](https://cloud.withgoogle.com/next/sf), and [ECG](http://ecgconf.com) in April.

- Diamond Partner Q&A: Google's Mark Mandel Has The Tools To Help You Make Great Games [article](https://gdconf.com/news/diamond-partner-qa-googles-mark-mandel-has-tools-help-you-make-great-games)

{{< transcript "[MUSIC PLAYING] GABI: Hi, and welcome to episode number 163 of the weekly Google Cloud podcast. I'm Gabi Ferrara, and I'm here with my colleague Mark Mandel. Hello, Mark." >}} 

MARK: Hey, Gabi. How are you doing? 

GABI: I am good. How is Australia? 

MARK: Australia is warm. It's quite nice. I'm not complaining. 

GABI: Oh, I'm jealous. 

MARK: It's pretty good. And-- 

GABI: New York is quite cold. 

MARK: Oh, gosh, yes, I bet it is. And I'm very pleased to announce that my visas have all been cleared. 

SPEAKER 1: 640s are in. [INAUDIBLE]. 

[POLICE RADIO CHIRPS] 

SPEAKER 2: That's correct. 

MARK: So very soon, I will be let back into the United States. 

GABI: [LAUGHS] So welcome back soon. 

MARK: Welcome back soon indeed. So who are we talking to today? 

GABI: Today we're going to be talking to Amy Krishnamohan. She's Product Marketing Manager for Google Cloud Databases. And today she's going to be talking about Cloud SQL for us. 

MARK: Oh, awesome. And then speaking of Cloud SQL and other database-y things, after that, for our question of the week, I'm going to be asking you about, what is a virtual column in a database? This is not something I've heard of before. 

GABI: Oh, it's very useful. But you're going to like it. 

MARK: Oh, I'm intrigued. Before we do all of that, as per usual, we have our Cool Things of the Week. Gabi, I think you found some particularly fun stuff. 

GABI: Yes. We announced new Google Docs APIs for process workflows, making it easier for partners and other people to integrate with Google Docs. We have, for instance, Zapier, Netflix, and Final Draft. 

MARK: Nice. 

GABI: Yeah, it was presented at Next 2018, and now it's available for people to use it. 

MARK: Fantastic. 

GABI: And you, Mark? 

MARK: Speaking of tools that are available to use, Jib 1.0.0 is now generally available. So Jib is an open-source project for simplifying building containers for your Java applications. Woof, that was a mouthful. There's integration with Scaffold for Java and Kubernetes. And it's basically integrated with Gradle and Maven. 

We had a show on it previously when it was sort of around when it first came out. That was episode number 151, if you want to check that out. But if you're building containers and you're using Java, you might want to check out Jib. It can simplify your containerization process considerably. 

GABI: Cool. And this month now, it's the Black History Month. Google Earth, it's making a guided tour through history across advocacy business, education, and technology, and everything more related to the Black History Month in the US. It's called The Journey of Us. 

MARK: Nice. 

GABI: So check it out. 

MARK: That's fantastic. And last but definitely not least, I wanted to make a mention of a blog series that one of our fellow developer advocates, Gabe Weiss, has been running called Cloud IoT Step-by-Step. He's on episode number three right now on his blog series. Basically, it is a series looking at how to connect your IoT devices to cloud IoT. He starts really simple and gets really a little bit more complicated as he goes. But we'll have links in the show notes if you want to look at connecting your IoT devices to the cloud. 

GABI: Ooh, I need that. Not losing my keys anymore. 

[JINGLING] 

[LAUGHTER] 

MARK: That sounds great. Well, I'll tell you what, Gabi. Why don't we go have a chat with Amy, and I can learn new things about Cloud SQL? 

GABI: OK, let's go. 

MARK: Yes. 

GABI: Today we're going to be talking about Cloud SQL with Amy Krishnamohan. She's Product Marketing Manager for Google Cloud. And her area of expertise is databases, as mine. Amy, talk to me about what you do and who you are. 

AMY: So yeah. Hello, my name is Amy Krishnamohan. Thanks, Gabi. And I do product marketing at Google Cloud. And my focus is on databases. So as a product marketer, we really try to make sure that our customer understands our product and how it is differentiated in the market. 

MARK: Awesome. So I have to admit something. I haven't touched a relational database in a really long time just because I do weird things mostly in game worlds. But a lot of people do. So can you give us, at a high level, what is Cloud SQL? 

AMY: So Cloud SQL, in the very simple term, is managed services for open-source databases like MySQL and Postgres. So relational database has been existing for almost 30, 40 years. So I think everybody kind of knows about what relational database is. But nowadays you've seen the emergence of databases everywhere. 

I think in the DBEngine ranking itself, there is 250 databases existing right now. But interestingly still, the relational databases like MySQL and Postgres is still dominant database that everyone is using. So we are providing a fully managed service for those open-source databases, so that people can use those database without really having a burden of managing them. 

GABI: Thank you, Amy. So beyond Cloud SQL, what other products we support at Google Cloud for the databases? 

AMY: Yeah. So Google Cloud Database actually offered wide variety of databases to serve various needs that customers have. So Cloud SQL is focusing on relational database for open-source database, like MySQL and Postgres. And then we also have a Cloud Memory Store, which provides a fully managed service for Redis, for in-memory caching. 

And then there are-- also, other interesting databases are born at Google. The one is Cloud Bigtable. So we call it as NoSQL Wide Column Database Services, which powers a lot of the services like YouTube. And then the Cloud Firestore, which is document databases. And then it stores a lot of mobile and web app data. And it is server-less. It is very integrated with Firebase. So it is extremely easy to build a mobile application based on that. 

And finally, I think the most shining star database at Google is Cloud Spanner. 

[TWINKLE] 

It is a relational database and globally consistent, which is actually-- I think everybody thought that it was impossible. So it's something that Google made the impossible possible databases. 

GABI: Yeah, it's [INAUDIBLE], right? 

AMY: Mm-hm. Yeah. 

MARK: Yeah. And if people want to hear about Spanner, episode number 62 of the "Google Cloud" podcast. I actually would love to hear just your take on relational data storage. I expect there's probably some of our listeners who probably grew up maybe just working on something like Mongo or working in something unstructured. So I'd love to hear your take on, what is relational data storage? And maybe how has it changed in the last 30-odd years? 

AMY: So relational databases is really-- the easiest way to think is like table. So if you look at a sheet, you have a really clean table that has a defined column, a defined row, and the data is extremely ordered. So before you store the data, you need to know what data type it is. 

Is it going to be number? Is it going to be text? What the size is going to be? So it all need to be predefined. So I would call that relational database as really, really structured and well managed databases. So it is mainly used for a lot of transactional systems, like financial systems or ERP systems, where you know exactly what data is going to come in. 

So a lot of people these days are using NoSQL or unstructured databases. Those are when you don't know the data, what kind of data is coming in, you can just store the data first and then analyze later. 

So there is the pros and cons for each databases. Because relational database is extremely well structured, it is actually much easier to analyze data, because you know exactly what data is in it. And then you can use a SQL language, which is actually very easy to learn, and then query those data easily. 

Whereas if you are using NoSQL or an unstructured database like Hadoop, you really don't know what data is inside your databases. So you need to actually identify and investigate what data you have and then also build kind of custom analytics to analyze those data. It has very different use cases. Sometimes relational databases are just suitable for certain use cases. And then unstructured NoSQL databases is good for certain use cases. 

MARK: What sort of use cases? 

AMY: So a lot of the use cases that we see, like IoT, where data is just pouring in. Or we have a lot of social media or gaming, the use cases that our data is not really structured, those are really good for the Hadoop or NoSQL databases. 

And then if the data is actually extremely important, like transaction-wise, and then you cannot lose those data-- for example, if you deposit the money in the bank, you need that data to be consistent and stored safely in certain databases. So you cannot have unstructured or NoSQL databases. You have to put those data in the relational databases. 

GABI: So how does Cloud SQL scale inside the Google Cloud? 

AMY: So Cloud SQL scales in two different ways. First one is a scale out, and the other one is a scale up. So scale out is using read replicas when there is a lot of traffic coming in. There is a replica of the Cloud SQL. You can create it in different zones. And you can route those traffic to the read replica, so that not one instance doesn't get bombarded with so many traffic. So all the traffic can be routed to a different zone. 

And then the other one, the scaling up, where we can just scale the storage, we have automatic storage increase feature. So whenever data is coming in, our storage will increase the size automatically for you. 

MARK: Can you also scale up in terms of memory and CPU? Or is it just storage? 

AMY: Just storage. 

GABI: Which is interesting, because if you're inputting files, like a lot of stuff, and then you're out, you're just-- it's full, it's like, yeah, that's not cool. 

AMY: Yeah. We actually have a customer case where one of our customers tried to enter all the GIS information in the Postgres instance at Cloud SQL. And then after three hours-- he was using on prem initially. And after three hours, the job failed. And then when the job failed, it means that everything got canceled and rolled back to original state, which is actually very devastating after waiting three hours. 

But when they were using Cloud SQL, they could see that the storage was increasing automatically as a job is progressing. 

MARK: How nice. Are there any interesting trade-offs between scaling out, scaling up, that people should be aware of or people keep in mind while doing scaling? 

AMY: Scaling up, the IOPS side is actually dependent on the storage inside. So when you actually provision your instances, we always recommend to provision the storage in a bigger capacity if you want to get more IOPS. So when you actually provision Cloud SQL in our console, you will be able to see the IOPS metrics automatically increase as you assign more storages. So that is actually a very important point. 

GABI: So all the features that Cloud SQL has and the features that you talked about here-- is there any one, especially for you, that you like, that it's more particular for your liking? 

AMY: Yeah. Actually, one of the feature that I think it is very popular is a high availability feature that we recently announced at the Postgres Instances. So Cloud SQL for Postgres has a high-availability feature where we have primary instances. And there's the standby instances that it is really not feasible to customers. But what the standby instances do, they always connect with the primary instance and they replicate this data asynchronously. 

So it doesn't really impact the performance. It happens really transparently, so customer will not notice anything. And then what we do is we also do continuous health monitoring. So we keep sending a signal to primary instance to see if the primary instance is healthy. 

And if we don't hear anything back, I think it is about 60 seconds, we automatically switch primary instances to standby instances. Failover happens automatically. So application really not notice when there's a system that goes down, because we have standby instances that are fully backed up to serve all the traffic. 

MARK: That's super cool. That also gives me another interesting question around updates of MySQL or Postgres. How are those managed? Because obviously, I'm guessing there's new versions that come out and people are going to want to upgrade. I'm guessing that's part of a whole managed service? 

AMY: Yes. So our managed service provides all the updates-- version update, OS patch, and things like that. So there is a Maintenance window, where a customer can choose. And from that, we provide all the maintenance. So there is a little bit of downtime while that is happening. But we take care of all the updates for you. 

GABI: What kind of features would you like to see in the future being implemented on managed databases? Not necessarily on Cloud SQL, but managed databases in general? That you see normal on-prem have, but on managed databases you don't have yet? So what kind of features would you like to see there? 

AMY: I think that the most important one is really having an integrated experience. So streaming data to the data warehousing systems. So all the transactional data can go to Analytics platform very easily and back and forth or have some sort of federated query where you can query the data from transactional system as well as an analytic system back and forth, so that people don't have image about, like, hey, I need to go to this database to get this data or go to the other database to get this data. Having this kind of data siloed. So really having a universal data platform access. That would be, actually, a really great feature. 

MARK: That sounds really interesting. And I'm curious as well, we were talking about unstructured and structured data. Are you seeing features from the unstructured world kind of creep their way into the more structured databases as well? 

AMY: Yes, definitely. So I think a lot of people mention about data lake becoming a data swamp. 

MARK: What does that mean? Tell us more. 

[LAUGHTER] 

AMY: Yeah. A lot of issues that I think many customers are having is that they felt the unstructured database was really cool, because they can just store the data so easily. You don't need to define the table. You don't need to define the schema or anything. But once you try to analyze those data, it's becoming really a big headache. Either you need to create a custom code to decipher all this data and then make sure data is in the right order. 

So a lot of the unstructured databases now are trying to implement the SQL layer on the top, so that people can query those datas easily, using known languages like SQL. But I think the most important thing is the reason why I really like relational databases-- because it's kind of putting the disciplines first. So you need to have clean data first if you want to do clean analytics. 

[SPRITZING] 

[SQUEAKING] 

[LAUGHS] Yeah. 

GABI: So you cannot have data consistency if you are free to do whatever you want. 

AMY: Exactly. Yes. 

GABI: Although, relational databases-- and Amy knows probably more than I do now-- you can't have unstructured data. We just don't recommend it. Like JSON or XML even. 

AMY: Totally. Yeah. I think Postgres is actually one of the best database to handle the JSON. That's what I heard. Yeah. So it is not like a structured database. Like, Postgres cannot handle the unstructured data. But yeah, still, in my opinion, still JSON and XML is semi-structured. So it does have a structure, and it is easy to query. 

But when it goes to really unstructured data, a lot of tendencies for people is to, OK, we'll analyze later, let's just store first. And I think that is more about governance or processing on how to manage your data. 

MARK: I'm not saying I've stored XML in a database before, but I've stored XML in a database before. 

[DISCORDANT VIOLIN SOUNDS] 

[LAUGHTER] 

GABI: We all have our sins, Mark. 

MARK: It was the '90s. It was fine. In terms of high availability, one thing I don't think we've touched on is, how do we deal with zones and regions? How do we handle that? Is that something that's also managed inside Cloud SQL? 

AMY: At Cloud SQL, we provide a zone of high availability. So if that one zone failed, the other zone would come. If you are looking for a more regional or global high availability, I really highly recommend to look into Cloud Spanner. So in relational databases, actually, the high availability and the consistency is actually a very difficult problem to solve. 

So when you have data in, let's say, the United States and you want to make sure that the exact same data is available in Japan-- and so we have to have a consistency of data. Data has to be replicated exactly the same way, right? And then the data gets committed from the multiple places. Like, somebody might store the data from Japan, or somebody might try to insert data from the United States. 

And all those transactions happen all at the same time. So in order to make sure that those data is replicated consistently, Google really had made some innovation like something like a true clock, where we know the exact order of the transaction. And then it is really relying on GPS satellite clock, not the normal clock that you are using. 

So that consistency sounds really simple, but making the reality happen in the relational database is actually extremely hard. So high availability around the globe, if you want to make that consistency happen, that Cloud Spanner, I think it is the only database that is available right now. 

GABI: And if people want to learn a bit more, where should they go? 

AMY: I would highly recommend going to Cloud.Google.com website. It has all the information about Cloud SQL. And then our YouTube has a lot of interesting information about the Cloud SQL as well. So especially if you search for Cloud Next, that has a lot of interesting sessions that we are covering about the Cloud SQL too. 

MARK: Awesome. I'd love to hear more about your history with the database market. I mean, you mentioned previously there's over 200 databases now. Have relational databases changed along with the innovation that's happening in the database market? Or have they stayed fairly stable? Or what's happening there with customers and the technological changes to databases? 

AMY: So relational databases have not been changing a lot. Actually, if you see the, really, history about MySQL, or Postgres, or the enterprise databases, so SQL Server, Oracle, DB2, they have a heavy functionality to make sure that the data transaction is secured and consistent. 

So there are a lot of features, but the core of the logic has not changed a lot. The only change that we have seen in the last maybe 5 to 10 years is that they included functionality to handle JSON, XML, like semi-structured data. So they have a BLOB column where they can insert those kind of data type. 

I feel that the reason why it's not changing it-- because the core requirements for using relational database is to making sure that the transaction happens securely. And then that doesn't change, whether in the banking system or health care system. All the mission-critical system, that core requirement doesn't change. So I don't think that is going to change much. 

GABI: So you told us what is your favorite Cloud SQL feature. What is your favorite database feature? 

AMY: Yeah. My favorite database feature is SQL, because it's very easy to learn. You can make SQL extremely complicated. And I've seen SQL written with, like, 50 lines of code, which is actually quite crazy. 

MARK: I've done that. 

AMY: But my opinion, I think it's the most straightforward language that you can learn easily. And then the power that it has is actually extremely strong. And then the skill set that brings the people, it is so important. That's why I think a lot of unstructured database companies are trying to employ SQL layer on the top, because they just need it, right? If you want to scale your databases, you want everyone to use it. And if you want everyone to use it, you want to make it easy to use. And I think SQL really makes that happen. 

GABI: I agree. 

MARK: So what sort of fun things can people expect from Cloud SQL in the future? 

AMY: For Cloud SQL, we just released an external master feature, where people can migrate all from on prem to cloud very easily with just a click of a button. So I think we will try to really provide those kind of seamless experiences more to the customer. So whether they are using on prem or cloud, it's very easy to move back and forth. 

MARK: So I have one more question, which is, what is the most interesting or strange thing that you've seen someone do with a relational database? 

[LAUGHTER] 

AMY: The most interesting that I've seen is actually using the relational database as an analytical database. There are many companies that are using MySQL and Postgres as their analytical databases. And they're complaining about the performance. So MySQL and Postgres is a transactional database. It needs to be used for transactional, not for analytical. 

MARK: So how many records are we talking about? 

AMY: Yeah, they are actually using the Select query-- Select All when there are 20 columns in the table with millions of rows. And they're complaining that they are not getting the results fast, which is not the right use case. 

GABI: Yeah. 

MARK: Right. 

GABI: I've felt that pain before. 

AMY: Yes. And it does happen. 

MARK: So Amy, before we go, is there anything we haven't touched on or anything you want to highlight or talk about? Events or anything cool going on that you want to make sure that we get on the podcast before we leave? 

AMY: On March 19, we will be at the PG Conference at New York. And we will have a full-day session on Google Cloud Databases. So that session, if you come to that, you will be able to hear everything about the Cloud SQL, all the interesting features, as well as all the Google databases. So we are going to bring in a lot of Google engineers, PMs, and Dev Rel, like Gabi, who are expert in knowing all databases. And they're going to talk about interesting features of databases there. 

GABI: So thank you, Amy, for coming to our podcast. It was a pleasure having you here and explaining to us all the cool things about relational databases. 

AMY: Thank you. 

MARK: Awesome. Thank you so much. Definitely learned a whole bunch of new stuff. It was good. So we have our question of the week, and I get to ask you fun questions, which is really good. I get to learn more new, cool things. So we were talking before the episode. You were talking about virtual columns in a database. And I was like, what is that? 

[COMPUTER BEEPS] 

So Gabi, what is a virtual column in a database? 

GABI: So do you know what a view is on a database? 

MARK: No, tell me. Let's say I don't. I have no idea what a view is. What's a view? 

GABI: A view is-- let's say you have a complicated query that you execute multiple times. And you create a view to make it easier to see the results of the query that you execute multiple times. 

MARK: OK. 

GABI: A virtual column, it's like a view, but it's inside a table. So instead of making complex queries, let's say you have a table of products sold and you have how many items are sold and the price. And you want to know the total price. Remember, numbers are tricky. 

So making the math on the Java side, on the PHP side, on the Python side to know the total could be trickier. So if you have a virtual column saying, what is the total, and you can say the total is the items, the quantity, times the price. Then you have how much it costs as a product. So you have, on the single source of truth, the right value for your product price. 

MARK: Nice. 

GABI: So in the end, it's quite useful. Yeah. And the values are calculated on the fly. 

MARK: Oh, very, very cool. Is this supported across different SQL databases, or is this like particular ones? 

GABI: So from the open source database, this is mostly supported by MySQL. It's not supported Postgres, but you can get around with a view, as I said before. And off-the-shelf databases, there are a couple like Oracle, SQL Server that supports it also. 

MARK: Awesome. And I can see we've got stuff that's going in the show notes, so people can check that out too. 

GABI: Yup. Thank you. 

MARK: Fantastic. Awesome. So what other things are you doing coming up soon? Are you going anywhere, writing anything, doing any fun stuff? 

GABI: Well, I catch a flight to London to be there to talk about PHP UK and MySQL 8. And then Cloud Next in April. 

MARK: Excellent. 

GABI: And you, Mark? 

MARK: I will be at GDC later in March. I'm actually pretty excited. I did a little spotlight interview, because we're sponsoring GDC. So if you want to hear about what Google is up to and what Google Cloud is up to at GDC, make sure to check that out. It's got links to our mailing lists and some of our announcements. But we have more stuff coming, so it's pretty exciting. But yes, I'll also be at Cloud Next. I'll be presenting there. And later in April, I'll be at East Coast Game Conferences talking about all sorts of other fun stuff. 

GABI: And Agones, I imagine. 

MARK: Yeah, Agones, open source, all the good things. All my favorite things. All my favorite things. 

GABI: Good, good. Thank you, Mark. 

MARK: Awesome. Well, Gabi, thanks again for joining me for yet another week on the podcast. 

GABI: Thank you for having me here. Always a pleasure. 

MARK: Wonderful. And thank you all for listening, and we'll see you all next week. 

GABI: See you next week or later. I don't know. 

MARK: Ha! 

GABI: [LAUGHS] 

[MUSIC PLAYING] 

Hi, and welcome to episode number 163 of the weekly "Google Cloud Plod--" mm. 

MARK: [LAUGHS]