+++
audioDuration = "00:36:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.262.mp3"
audioSize = 52784634
categories = ["Database Migration", "Cloud SQL", "Serverless", "Managed"]
date = "2021-06-02"
description = "Stephanie Wong and cohost Gabi Ferrara talk about the exciting launch of Database Migration Service at Google."
draft = false
episodeNumber = 262
hosts = ["Gabi Ferrara", "Stephanie Wong"]
title = "Database Migration Service with Shachar Guz and Gabe Weiss"
image="/post/episode-262-database-migration-service-with-shachar-guz-and-gabe-weiss/images/hero/hero-EP-262.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/nqqeqg/episode_262_database_migration_service_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and cohost [Gabi Ferrara](https://twitter.com/gabidavila) talk about the exciting launch of Database Migration Service at Google. Our guests this week, [Shachar Guz](https://twitter.com/shacharguz) and [Gabe Weiss](https://twitter.com/GabeWeiss_), start the show explaining DMS, focusing on the ease of infrastructure management for cloud users. 

Migration is made simpler with DMS, and Shachar and Gabe walk us through the process of using this powerful new service. Our guests outline some hurdles to migration and how DMS and the DMS documentation help developers overcome them. Shacher tells us the steps companies should take before and after running DMS to ensure projects run correctly and business logic is preserved as well, and Gabe stresses the importance of testing. 

Database Migration Service focuses on open source, and we talk about why this is an important benefit. In addition, the thorough explanations embedded in DMS help users navigate easily, serverless technology means projects are fast and efficient, and native applications are leveraged for better transparency. And it's free. 

##### Shachar Guz

Shachar is a product manager at Google Cloud, he works on the Cloud Database Migration Service. Shachar worked in various product and engineering roles and shares a true passion about data and helping customers get the most out of their data. Shachar is passionate about building products that make cumbersome processes simple and straightforward and helping companies adopt Cloud technologies to accelerate their business.

##### Gabe Weiss

Gabe works on the Google Cloud Platform team ensuring that developers can make awesome things, both inside and outside of Google. Prior to Google he's worked in virtual reality production and distribution, source control, the games industry and professional acting.

##### Cool things of the week

* Unlock the power of change data capture and replication with new, serverless Datastream [blog](https://cloud.google.com/blog/products/databases/new-cloud-based-cdc-replication-across-databases)
     * Introducing Dataplex—an intelligent data fabric for analytics at scale [blog](https://cloud.google.com/blog/products/data-analytics/introducing-google-cloud-dataplex)
     * Data Cloud Summit [site](https://cloudonair.withgoogle.com/events/summit-data-cloud)
     * Google Cloud's New 2021 Analytics Launches [video](https://www.youtube.com/watch?v=DG1mOPMXJvw)
     * Bringing multi-cloud analytics to your data with BigQuery Omni [blog](https://cloud.google.com/blog/products/data-analytics/introducing-bigquery-omni)
* Applied ML Summit [site](https://cloudonair.withgoogle.com/events/summit-ml-practitioners)

##### Interview

* Database Migration Service [site](https://cloud.google.com/database-migration)
* DMS Documentation [docs](https://cloud.google.com/database-migration/docs)
* Cloud SQL [site](https://cloud.google.com/sql)
* Network Intelligence Center [site](https://cloud.google.com/network-intelligence-center)
* Introducing Database Migration Service [video](https://www.youtube.com/watch?v=Wh7koygb1ZE)
* Best practices for homogeneous database migrations [blog](https://cloud.google.com/blog/products/databases/tips-for-migrating-across-compatible-database-engines)
* Database Migration Service Connectivity—A technical introspective [blog](https://cloud.google.com/blog/topics/developers-practitioners/database-migration-service-connectivity-technical-introspective)
* Migrating MySQL data to Cloud SQL using Database Migration Service Qwiklab [site](https://google.qwiklabs.com/quests/161)

##### What's something cool you're working on?
Gabbi is going to [CrimeCon](https://www.crimecon.com) for fun!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hi, everyone, and welcome to episode number 262 of the weekly Google Cloud Platform Podcast It's Stephanie Wong here, back again, and today I'm with Gabi. How are you, Gabi?" >}} 

GABI: I'm good. Glad to come back to the podcast. I like talking a lot. 

[LAUGHTER] 

And today, hope we can get good new information to share with you. 

STEPHANIE: Yeah, no. And so today-- the reason why I brought you on, Gabi, of course, is because of the topic. You're the perfect co-host to have, and I'm really glad to have you back on. It's been a little while. So what are we talking about today? 

GABI: We're talking about DMS. [INAUDIBLE] launch-- Database Migration Service was launched, I think, in February, if I recall correctly. It's Shachar and Gabe. Gabe is my co-worker on database things for Google and Shachar is a product manager for this product. 

STEPHANIE: Yes. So I invited them on because I was excited about this launch. I wrote up a quick blog post, I read Gabe's blog post. I thought it was pretty exciting launch in the space of database migration. It makes it really easy to migrate over from Postgres, MySQL, and other sources over to Cloud SQL on Google Cloud. And so they're going to dive into more details about how this is different than the rest on the market, and exactly what the experience is like for the admins and DBAs using the product. 

But before we go into that, let's go ahead and talk about the cool things of the week. 

[MUSIC PLAYING] 

All right, Gabi, lots of things happening in the database and analytics world last week. What's the cool thing of the week for you? 

GABI: We just launched Datastream. It is a service for streaming your data from your transaction database, also known as OLTP, to your data warehouse database, which is OLAP. That process usually involves ETLs, which means extract transform load, and involves a lot of text, CSV, or tab-separated files. And although a BigQuery performance [INAUDIBLE] it's actually very much impressive. But it could take a long time because it depends a lot of computer resource, disk speed. 

So Datastream, it's kind of like-- not actually a service. It's more like always running. It's like a trigger on the database. Once you do it, it triggers another event, and sends that data to the data warehouse. So your data on the data warehouse doesn't get that stale, you know? You don't have to do those big batch jobs, cron jobs to get the data from one point to another. So that's why it's awesome. 

STEPHANIE: Yeah, it's super exciting. I actually interviewed the head of data analytics last week about it, and what he called it is a serverless change data capture and replication service. So you're right-- having those updates frequently applied is, I think, a game changer, especially for a database. 

GABI: Yes. It is going to make that pipeline, as you call, data pipeline way more friendly. 

STEPHANIE: Yeah. And there were a bunch of other launches, right? There was like 15 or so launches at the Cloud Data Summit last week. 

GABI: Yeah. We're on fire. 

STEPHANIE: Do you want to talk a little bit about BigQuery Omni for Azure? 

GABI: So BigQuery Omni, it's-- I like it-- [INAUDIBLE]. So their main [? motor ?] is like separating storage from computing. For those who are not familiar with BigQuery, every time you run-- before you run the query, it tells you how much data it's going to scan to process that, and that can be changed. Like, what kind of resources you're going to use. But the part of processing all that data amount, the storage amount can be very expensive. 

So being able to separate also gives you the ability to run the BigQuery engine, like analytical engine, on top of other cloud providers. So if you're not a cloud provider, you kind of can make a-- use the tools of BigQuery that already connects to Looker, for instance, without having to rewire everything to the other data sources you have. The main problem with data, it's like how to unify all the data? And that kind of helps on that kind of problem. 

STEPHANIE: Yeah. And so for everyone listening, check out the Google Cloud Data Summit that happened last week. If you register, you still get access to all of the talk, sessions, keynotes on demand. Like I said, 15 plus launches, so definitely want to learn about that, plus it's Datastream, BigQuery Omni for Azure, Dataplex, Google Looker on Azure, Analytics Hub, and more. 

But we actually have another summit happening next week on June 10, which pairs very nicely with our Cloud Data Summit, and it's called the Applied ML Summit. So if you're curious about the latest that's happening in machine learning-- we just launched Vertex AI, for example-- check out the sessions there. 

They're going to be talking about not just Vertex, but also what's happening in the next five years in machine learning, a little bit more about MLOps and model monitoring, which Vertex is highly focused on, and how Google really does ML, in addition to how to build and train custom models. And even talk about career growth as a data scientist or someone working in machine learning today. So we'll include the links in the show notes. 

So yes, lots happening around data, machine learning, and more. And to kick things off for today, we're talking about Database Migration Service. So let's go ahead and jump into our conversation with Gabe and Shachar. 

[MUSIC PLAYING] 

All right, welcome to the podcast, Shachar and Gabe. Thanks so much for joining to talk about DMS. So before we get into it, why don't you go ahead and start off by telling us about your roles at Google? 

GABE: I'm Gabe Weiss. I'm a developer relations engineer at Google Cloud. It's our new title, so I have to get used to saying it. And I'm mostly a generalist, but right now I'm focusing on databases and application modernization. 

SHACHAR: And I'm Shachar Guz. I'm a product manager in the Database Migration Service team. 

STEPHANIE: Thanks so much for coming on to talk about this new, exciting launch. I've been waiting a couple of weeks to have you on since I learned about it last month, and just to get into it right away, when we're talking about hosting a database in the cloud, what do people truly get out of deciding to migrate to the cloud? 

GABE: So there's a lot of stuff. When you talk about doing anything in the cloud, the biggest win is having all of your infrastructure kind of handled for you. So a lot of the stuff that you usually have sysadmins or IT folks that are managing your networks and all of your applications and doing all of that maintenance work and making sure your backups are all set, the cloud really removes all of that. 

So the biggest win of getting to the cloud, in my mind, is removing all of that overhead. As an engineer, we have this boilerplate code that we tend to write over and over again. This is kind of the same thing, but infrastructure. 

And then on top of that, your data is all in the cloud, which means you get kind of follow on features for fun. A lot of people talk about analytics. So if you've got your data in the cloud, so specifically getting your database up there means you now have access to all of the cool machine learning and AI and anything that you might want to operate on your data. It's all in the cloud already, so you don't have to worry about moving your data from point A to point B. 

GABI: So what is the best way to make going to the cloud easier? You mentioned DMS. Can you tell us how it work and how could achieve this task for our customers? 

SHACHAR: In general, we want to make the migration as simple as possible. So I would never say that the migration and database migration is easy, right? It's always complicated. There is a decision that needs to take place. 

And our role in the Database Migration Service is to make this as simple as possible with homogeneous migration, meaning that migrating from MySQL to MySQL, Postgres to Postgres, we want to make it as simple as possible because you don't have a lot of the phases that-- for example, if I'm migrating from, let's say, [? OAuth ?] to Postgres, I need to do. 

So when you go homogeneous, we want to make it simple and we want to see that transition as fast as possible and without any disruption to a service, without any downtime, and actually without a lot of work from the customer end. 

STEPHANIE: Yeah and I know that database migration, as you said, has been a challenging task, even prior to this trend of migrating to the cloud. So in your opinion, what are some of the biggest challenges? Because-- connectivity tests, along with compatibility between source and target, and also uptime for the services that are dependent on the database. So what's hard about this? 

GABE: For me, networking has been kind of the wrinkle in all of this, especially with DMS. When I first sat down to play with it, I had a lot of trouble with connectivity because I kind of did the hard thing, which was I had a local database behind my myriad of firewalls and I wanted to move it up to the cloud. And getting the two to talk to each other was really the hardest part. 

Once they can talk, the rest of it's really easy. I mean, DMS, it's all of the stuff in UI, all of the guidance that it gives is really clear. And as long as you have satisfied the prerequisites that it lays out for you, as long as you have done that piece-- I don't want to kind of downplay how hard that can be. Absolutely, that can be hard. Like, if you have a lot of configuration around your on-premise database or your existing production database, that can be a challenge to unwind that and pull that thread out. 

But once you've done that, the actual migration piece itself is the easy part. Shachar said that that's like the goal of DMS, was to make this piece easy amongst all the other decisions you have to make. For me, it's definitely the connectivity piece, making sure that Google Cloud and wherever your database is living-- as long as those two can talk to each other, for me, that's the hard part. 

SHACHAR: I totally agree with Gabe, and I think that one thing to remember is that you need to achieve the connectivity any [INAUDIBLE]. If, for example, you want to connect to Cloud SQL, you want to run anything, you need to achieve this connectivity. The thing that I want to mention is that basically, with DMS, you're not maintaining any servers. So you're not maintaining any application instances or stuff like that. 

Once you're achieving the connectivity, that's it. You are no longer, like, the owner of the instance. You don't need to provide it more power, you don't need to provide it less power. DMS and Cloud SQL [INAUDIBLE] will take care of everything else. 

GABI: So it's basically like human being relationship. Like, communication's always harder, right? 

[LAUGHTER] 

But once you get it, this stuff flows. You don't need a lawyer in the middle like a [INAUDIBLE] service [INAUDIBLE]. 

GABE: There's less renegotiation with DMS. 

GABI: Yeah, I always say the tech imitates human life, and I think connectivity is the same thing, you know. 

GABE: Totally. 

STEPHANIE: So in a nutshell, DMS, Database Migration Service. You mentioned it's serverless, it's managed. So what is it and what does it cover from this migration process? 

SHACHAR: Database migration is, as I was saying, a complicated process. So let's take, for example, heterogeneous migration. So I want to move from OAuth into Postgres. I will need to do schema conversion, I will need to do assessment, I will need to understand-- I need to discover the databases that I have. 

I will need to do a lot of work in order to understand what do I have, where do I want to migrate it, which changes I want to do, actually doing the migration, and then validating that everything worked as expected. This is that heterogeneous use case. With the homogeneous use case, which is actually what DMS is now supporting, you don't need to do schema conversion. Assessment is quite minimal, right? 

I have-- let's say that they have an on-premise database that is MySQL 5.7. I just need to decide which version I want. So I want to move to 5.7 or I want to move straight to 8. And DMS takes the part of the database migration, actually moving the data and the schema, and does it for you, configuring everything that needs to be configured as part of DMS. And DMS basically takes the data, takes the schema, takes everything and put it in Cloud SQL. 

Homogeneous is easy. We said lift and shift. Everything is everything, but is it really everything, or is this like more work that needs to be done that you're not doing? And then it can answer with users, other parts. And I think that the best way to answer that is there are stuff that we are not migrating-- for example, users and so on-- but we have a very detailed documentation that was tested by customers, and customers are providing us feedback. 

And with any detail that doesn't exist, the documentation, we're adding it to the documentation. So the documentation basically covers everything, if people that will hear it will understand that they need to read the documentation and there is work. 

STEPHANIE: So you mentioned that it achieves this use case of lift and shift. Is it really all encompassing, though, or is there extra work involved? 

GABE: There's always extra work to be involved. There's-- for example, like on MySQL, the users table doesn't get brought over automatically. In the documentation, we have really detailed concepts-- people that have done database migrations heavily. Under the covers, we use the DB engines, some of the native processes to do this migration. So anyone out in the world like DBAs understand how to do these migrations. They're familiar with, like, the pglogical for Postgres. 

And there are pieces when you do a migration that don't come automatically with those native processes, and that's understood. So in our documentation, we list all of that out, so that as long as you're following along-- so if you've got all the prerequisites, what you then need to do to follow up and make everything complete is this extra-- exactly, the wrap-up. 

So no, it's not complete end to end, but there's a ton of extra pieces that DMS wouldn't be able to cover. Like there's going to be business logic and application changes that you need to make also. And obviously, DMS doesn't know about your application. So yes, there's others. This takes care of the core migration piece of getting your data itself safely from point A to point B into Cloud SQL. 

SHACHAR: We spoke to a lot of customers, right? To hundreds of customers that-- actually, before they used the DMS and after they used DMS. And one thing that we learned is that if you want to do a migration, you need to run as much PoCs as possible. You need to run the test migration to see that all the data was migrated properly, that your application can connect to the new database. So you need to test and then retest and then retest, and then, only then actually do something with your migration. 

So even if you read all the documentation, run a test, check that you have everything that you need to have on the other side, check that your application can connect, check that you have the performance that you want to get, and only then do the migration of the production database. 

GABE: And that's a biggie. I want to add onto that. He said, test your performance. I can't tell you how many people I talk to that come back to me and say, god, Cloud SQL's really slow. I'm like, it's really slow? OK, well, what are you doing? It's like, well, I had this application run against my local database and it was super fast, and then I connected it to the Cloud database and it's super slow. It's like, let me explain the internet to you. 

[LAUGHTER] 

You know, it's like one of those things that people don't think about it, though. And when they start to do these tests, they understand when they start the process, maybe, I want to do a complete on-premise to cloud migration. I want to bring my application to the cloud, I want to bring my database to the cloud, I want to bring everything up there. And they start by moving the data. That's often a common first step, is they'll move their database into the cloud. 

And you have to be careful at that stage of the testing to understand if your application's still local and your database is remote, there's going to be things that are going to go weird. If your application is relying on a certain amount of latency and all of a sudden it's getting a lot more latency, it might mess up in very bizarre ways. This is like the cloud version of measure twice, cut once. 

This is kind of the same thing. Like, you really want to test the heck out of your whole end to end process as much as you can before you flip that, OK, we're going live production on the cloud step. 

SHACHAR: The DMS is a great way to do, like, a PoC of Cloud SQL. You're now considering moving to a managed database, right? You have your database somewhere. You're managing everything and you heard about the good stuff that is going to a managed database, and now you want to test it. It's a great way to go to the console, DMS is free, create a migration job, move the data, check how Cloud SQL is performing, and then do your big migration. 

One of the guidelines was to make it as simple and faster as possible, so you can get a PoC very fast. You can start and then end, like, after five minutes. You have a migration job, you have an instance, and you can start actually testing Cloud SQL. 

STEPHANIE: I just want to underline that, because I think that's so huge that you mentioned it's free and it's serverless and it's managed. An incredible use case is to use it as a PoC for compatibility to the cloud. And there's so many steps involved that you just covered for validation, like assessing the impact of a potential migration, preparing the database ahead of time, setting up a connectivity, data replication, and then migrating the actual database and validating. 

So it seems like this is a great way to test that. You mentioned that the destination could be Cloud SQL. What other source and targets are supported in this case, and are we sort of focusing our efforts in open source at the moment? 

SHACHAR: So currently, DMS supports Cloud SQL as a target. So wherever you are-- so it can be on-prem, it can be any managed VM that you have, it can be Google Cloud Engine, it could be AWS Aurora, RDS, EC2-- wherever you are, we can bring you to Cloud SQL. 

And this is true for MySQL and Postgres and SQL Server that will come soon. You can migrate for MySQL one version up So let's say that you're on 5.7, you want to move to 8. And in Postgres, you can migrate from any version to any version up. So let's say that now you're 9.6 and you want to migrate straight to 13, go ahead. You can do that. 

Our current destination is Cloud SQL. We want to basically boost the migration to Cloud SQL. And this is our focus at the moment with this product. Regarding OSS, Gabe? 

GABE: The focus on OSS, there's a couple of things here. Yes, we are focusing on open source. It's been a shift for a while, but we're seeing it kind of accelerate, which is the idea that larger companies don't want to be vendor locked anymore. It used to be back in the day, people just used Oracle. If you needed a database, you wanted to use Oracle. 

And the plus is you got an enterprise-grade database engine that was tried and true and people knew how it worked and it was an established business model, and it was kind of an anchor. The negative is you had to use Oracle. And if Oracle did anything, you were sort of stuck by whatever their policy changes were, whatever their license changes were, their technology. You had to use their stuff. 

The advantage of using an open source is you can kind of do it anywhere. You can fork it if you want, like we see in [INAUDIBLE] from the MySQL engine. So there are ways that you can avoid getting locked into a specific company's policy. In dev rel we have a saying-- meet the developers where they are. And so we've seen the market start to shift to that, and so we wanted to be sure that we're paying attention to that. 

And a lot of our managed services will be doing that where you can still use your open source, but we'll manage it for you. Which means if you ever panic and you're like oh gosh, I can't be locked into Google anymore, that's fine. You've got your open source engine. You can just pop it and manage it yourself again, or take it where you want to go. We want to be clear that we will provide a lot of benefit by having you be with Google. Obviously, we're a business. We're running it that way. But we don't want you to feel like you have to be with us. 

So that provides a lot of trust between us and the companies that-- the customers that we work with. And open source is a huge part of that, and we want to be sure that we're keeping things open. And we just want to be sure that the open source world and people contributing to that as developers, as customers, as us, that remains a major force in the market. And so we want to be sure that we're supporting that. 

GABI: You two mentioned about connectivity usually being an issue, the communication itself, and also customers may have concerns about data integrity because, come on, data is the most important part of your business. Software you could throw away, but the data you can't. And they usually get to worry about downtime and connectivity plays into that, and sometimes on the transport, you could lose data. So what steps is DMS doing to mitigate that kind of problem? 

GABE: Like I mentioned before, ensuring that you have a solid network connectivity between point A and point B is really the key beginning of that. Once you've established that-- and there's a bunch of different ways in DMS you can do that. We have reverse SSH tunneling, there's a bunch of different options about how you want to connect your source database to the target. And I think I even said it-- like, I had a lot of trouble getting my local database connected up at first because I had all these firewalls and all this stuff that I had to manage. 

And one of the tools that I actually used was something that I didn't even know we had in Google Cloud which I'm going to mention it now, because it's awesome. So Network Intelligence Center is this cool extra thing that we've got in GCP, where you basically give it a source and target IP and say, hey, can I connect? And it will give you kind of a traceroute. It'll do a POP connectivity between point A and point B. 

While it can't give you a ton of detail outside of Google's network, once you're inside Google's network, it gives you this really cool, detailed introspection of like, oh, yeah, your firewall is doing this, that, or the other, but it's allowing this traffic but blocking this traffic. And you can see in kind of a network graph what it looks like to have this connectivity. I used it a lot to debug when I was coming in. Were my problems on my side, on my home firewalls? Was it on the Google Cloud firewall side? I didn't know. And this tool helped me with that. 

So then data consistency stuff, because we're using the native replication features of the database engine, these are tried and true. They've been tested a bajillion times over. They're in use daily by everyone that does a migration using these database engines. So everybody uses pglogical out in the world knows Postgres migration works this way. And if there's a problem with it, it gets found by the community fast and the community is really responsive at fixing it because it's built in. 

So since we aren't doing anything super fancy, that's what allows us to have this kind of guarantee on that side of things, that what we're using is going to be solid for our customers. 

STEPHANIE: Yeah, so I've used Network Intelligence Center many times, including connectivity tests, and I've played around with DMS, and the user experience has been phenomenal in terms of just how easy it is and clear it is to show the validation steps and the connectivity. So thinking about the landscape, there are many migration services that exist out there in general. There's companies solely based on creating these services between databases. So what makes DMS different in this case? 

SHACHAR: So I think that what makes DMS special is the way that we're approaching a side of simplicity. So DMS, if you ever use it, you know that there is a lot of documentation inside the product that will help you to understand what you need to do very early in the process. So there are other services when you're getting quite late in the process, you're starting the migration, and then after 15 minutes, it's failing because you didn't do one configuration in the start. 

With DMS, we're basically offloading all the information in the beginning and really allowing you to test the migration configuration actually before starting the migration. And that basically highlights any configuration issues that you might have. In addition, DMS is severless, so you don't need to deploy any servers. And again, this is comparing to other services where you are the owner of the instance that's actually doing the migration. 

And one more thing is that in the homogeneous use case, in the like to like, we are using native application. So there are many services that have-- like, the application entity is like a black box that you don't know what is going on underneath and basically need to rely on actual service documentation in order to understand if there are any issues you need to rely on, like the product blogs or whatever. 

With DMS, we are relying on native applications, so MySQL, pglogical, transactional. So it will be easier for the customers to understand what's going on under the hood because we wanted to make it simple. 

STEPHANIE: And don't forget, you mentioned it's free, right? 

SHACHAR: Yeah, exactly. So DMS for these homogeneous use cases-- again, because we're using native application, we want to have you on Cloud SQL as fast as possible. You know, it's a lift and shift. DMS is free for those types of use cases. 

GABI: Based on the cost effectiveness of having actually migration service already built into Google Cloud and not actually have to pay to use that-- beyond the ease of use, what else people should be looking for when migrating? Like, for instance, best practices to do a database migration? Because not everybody has a DBA available. So what is the tips that you can give us? 

SHACHAR: We invested a lot in our in-product documentation and out of [INAUDIBLE] documentation, and we actually published quite a bit of blogs regarding connectivity, best practice in homogeneous migrations, how to prepare your MySQL, how to establish connectivity. So there is a lot of content. So if you don't have any best information, just open DMS. And then wherever you are, you can either read the documentation within a product or you can Google search for our blogs on how, for example, to establish connectivity. 

So one thing is if you're uncertain of something, read the documentation and you will find answers there. The second thing is that when you're starting to create the migration, we added the option to save in the middle of the migration creation. So it's not that you're creating the migration and then if you're losing it, that's it, you need to start from scratch. You can save it as draft, go back, read some stuff. 

For example, you're stuck in connectivity. So you can save the migration, talk to the people that are in charge of connectivity in your organization, get the details that you want, and then go back and continue where you are. You're not losing any of the progress. And in addition, as I said, we are doing test migration job, which is basically testing the configuration. So the warnings that you will get, the errors that you get will be descriptive and will allow you to understand what is missing. 

In addition that we have a designated section in our Docs suite, diagnose issues that has like, oh, that you got? This is what you need to do. If you got any connectivity issue, we have a full doc of how to debug your connectivity. Again, we're trying to make it as simple as possible and to give you all the information that you want from the get go. 

GABE: We've mentioned before-- test, test, test, test, test. You want to talk best practices, like, test, test, test, test, test. In my mind, that's the best time you can spend preparing with these kinds of migration stuff is do your PoCs, your proof of concepts. Do test migrations, do a test app, do everything you can to test each piece of your whole pipeline for your application before you flip any bits to production. Like, just test the heck out of it. 

SHACHAR: And one thing that I want to mention is that sometimes it's something that is like, people don't think about it when they do migration. It's always like a process that makes them afraid of doing the migration is that actually, when you're running the migration, as long as you didn't do the switch of, I'm now writing to my source, I'm now-- and changing it to I'm now writing to the destination, basically, your application is not affected, right? 

You can run the migration, you can [INAUDIBLE] application for two months. You can run the application for six months. Until the point that you feel 100% positive, and then you can do the switch. There is no real risk on your source application, other than DMS is consuming some application resources. 

But this is not something that you need to be afraid of. Your customers will not be impacted at all when you're running the migration until the point that you're saying OK, I'm done. I'm done, and I'm now going to switch from old source to the new Cloud SQL instance. So don't treat it as a high risk process. It's not. Until the point that you're doing the switch, it's not. You're still using your old source with your old database until the point that you feel positive about it, and this is connecting to the part of test, test, and test. 

STEPHANIE: That's beautiful. And that's exactly what I was saying earlier, was just how easy the experience is. And it's prescriptive and a diagnosis, and it really makes sure that you feel confident, along with making sure that you're implementing the right amount of testing with continuous replication until you are at that point that you're ready. 

So it's clear that there's been a lot of forethought that went into designing this product for a very simplified and unified experience. I'm curious to learn about some customers that have been able to use it already. 

SHACHAR: Actually, we had, like, a lot of users using DMS. We had a private preview of alpha that we basically escorted every customer that we had in order to understand their use case, to know what is the feedback from DMS. We were actually getting a lot of feedback along the way from customers. 

And I think that one use case that I want to mention is Freedom Financial Network that actually has a great blog on our site. They're actually a financial service that had 1 terabyte of data in their on-prem that was hosted in Rackspace. And basically, when they started planning for the migration, they planned that the migration will take days, right? It would take a lot of preparation. 

They even consider doing dump and restore, so basically taking all the data, do what we call an offline migration when you basically have a lot of downtime. So if they would take all the data, just do a backup and then pass it to Cloud SQL, it would cost something around 15, 20 hours of downtime. When they started using DMS, they spoke to me and they said, yeah, we really want to move to a microservice architecture, but we don't want that much of a downtime. 

And then when they started using DMS, they didn't predict it, but they actually managed to move their entire database within hours with minutes of downtime, which you will always have some downtime, you always have the downtime of writing to one application, then changing the configuration to write to the new destination. But again, I want to emphasize, they were predicting downtime of hours, so a business disruption. In the end of the day, it was minutes of downtime. And this is one of the use cases that we saw. 

GABI: And just to complement what Stephanie said before, what you're saying about this use case, usually, the hardest part is not migrating the data. It is discovering when there is a right time to turn the switch. You know, there's a lot of things that can go wrong. Maybe-- it's going to happen in any migration you do database-wise, you know, like any service you do. 

The flipping moment is the hardest one, and that's why we say there is no way to have no downtime, because it will have a bit. But correct me if I'm wrong, Gabe and Shachar, DMS make that risk quite lower compared to the usual migration paths, right? 

GABE: It lets you see the risk-- in a safe to your source data way, evaluate what the risk is. There's unknowns always, right? You flip that switch and who knows what could happen. But at least with the database side of things, DMS helps you enable a way to test it without affecting your source at all. 

SHACHAR: Actually, one very cool metric that we saw is that we saw that most of, or many of our customers' migration at least 50% are from other clouds, which is very interesting to understand. One very common theme that we had from customers is that basically, they use DMS to migrate their services to Cloud SQL. And then they can basically use the entire ecosystem of GCP. 

They wanted to use BigQuery. They wanted to use federated queries from BigQuery to Cloud SQL. They wanted to use all the goodness of GCP. And basically, moving to Cloud SQL with DMS was the first step of doing so. So we saw a lot of customers moving their transactional databases in order to use the great analytics capabilities of GCP. 

STEPHANIE: I love it. Yeah, a lot of it is just understanding your risks, and it becomes so much more manageable once you know it. And the second advantage is opening up the possibilities of using other cloud services. So as we wrap up, where can people get started and learn more? 

GABE: We've got a lot of good content that we did around the launch-- you know, best practices blogs, connectivity blogs-- to kind of help. Our documentation is fantastic-- cloud.google.com/database-migration. You'll find it. If you search Google Database Migration Services, you'll find the documentation and all of the other good stuff that we've put up. I would just jump in and do it. Migrate your stuff. 

GABI: Just do it. 

STEPHANIE: Do it. Migrate all the things! Well, thank you so much, Gabe and Shachar, for jumping on. Thank you for your work demystifying database migrations and making this actually a way less stressful experience than it's made out to be. Congratulations on the launch. 

[MUSIC PLAYING] 

All right, so that was our convo with Gabe and Shachar. Gabi, you work with them every day all the time. So what do you think of learning about DMS in more depth? 

GABI: So the thing-- I worked with Gabe, actually, on the launch more on the background. I'm not-- Gabe is amazing person on the camera. I'm not very much good as you are also awesome Stephanie. I'm more a voice person and I don't like writing much. What I found impressive was the actually speed. I think those data centers from one place to another have this secret connection, you know. 

And I thought I did a lot of migrations on my daily job as a data engineer before. Migrating is the single most complicated problem, because availability. If you have [INAUDIBLE] downtime a long time, as Shachar put it. So downtime is the biggest concern. And I was very impressed with the whole steps of the DMS. As Gabe pointed out, connectivity-- if you figure that out, you'll figure data part easily, you know? 

STEPHANIE: Exactly. 

GABI: What I was very impressed was how quickly it is. And I don't think we touched on the episode. That's another one that's very nice. You can set up to continuously migration, which means you started the job, but you don't migrate at once. It continues running after a while to pick up the new changes. So it means you start the process, you know, that big database, you start migrating it, and you finally say, OK, we're going to migrate today. You don't have to do everything again. So it's very nice. 

STEPHANIE: Yeah. I think what I found striking about the product is, again, the simplification of it and reducing the headaches that are normally associated with database migrations. As we know, it's not the easiest task. But also, the connectivity, like you said. I think they're working on more use cases to make it easier. Like, for example, they're allowing for IP allow lists or doing a reverse SSH tunnel. There's VPNs or VPC peering. So a wide range of options that you have there to give you that ease of mind. 

And then the other thing that I found interesting was the validation and the continuous replication just to make sure that everything is set in stone and it's trusted before you decide to fully point your application to the new instance. So yeah, I loved it. But Gabi, you're back now. I know you took a little bit of a break. So what are you excited about? What are you working on these days? 

GABI: It's not about work, actually. I'm very excited about-- I'm in love with true crime. Not about the crime itself, but how people solve crimes. In another time, I would love to be an investigator. But there's this conference in Austin that I'm going this week. It's CrimeCon. It's going to be fun. 

STEPHANIE: Wait, what? 

GABI: And I'm very excited about that. 

STEPHANIE: This is awesome. CrimeCon? OK. 

GABI: Yeah, it's a true crime conference. I really love it. It's very nice because there is like 70% of the speakers are women. 

STEPHANIE: Oh. 

GABI: And I was saying wow, I wish tech conference were like this. 

STEPHANIE: I'm excited for you to head over to that conference and put your investigative hat on and, well, have fun there. And hey, if we have another episode about all of these new other launches that just came out in the data world, I'm definitely having you back on the podcast. 

GABI: Actually, I work on data world, but I also always focus on developers. So I don't know any, like, operational stuff, like how to keep the server running. 

[LAUGHTER] 

So whatever [INAUDIBLE] I always focus on-- and I think everybody should focus on the developer experience. That's what I try to do. So you're welcome to come to my side, too. 

STEPHANIE: Oh hey, yeah, then in that case, we'll have you back on next week and every other week. 

[LAUGHTER] 

GABI: OK. Well, have fun and let me know whatever you want, and everybody be safe. 

STEPHANIE: Thank you. Thanks, everyone, We'll see you all next week. Bye. 

GABI: Bye. 

[MUSIC PLAYING]