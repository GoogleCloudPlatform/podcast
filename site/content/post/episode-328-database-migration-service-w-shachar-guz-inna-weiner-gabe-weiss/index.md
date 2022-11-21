+++
audioDuration = "00:40:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.328.mp3"
audioSize = 57640903
categories = ["Data Management", "Residency"]
date = "2022-11-16"
description = "Gabe Weiss and Stephanie Wong talk with guests Shachar Guz and Inna Weiner about Google's Database Migration Service and how it helps companies move data to the cloud."
draft = false
episodeNumber = 328
hosts = ["Stephanie Wong"]
title = "Database Migration Service with Shachar Guz, Inna Weiner, and Gabe Weiss" 
image="/post/episode-328-database-migration-service-w-shachar-guz-inna-weiner-gabe-weiss/images/hero/hero-EP-328.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/yx0tuu/episode_328_database_migration_service_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) talks with guests Shachar Guz, Inna Weiner, and [Gabe Weiss](https://twitter.com/gabeweiss_) about Google's Database Migration Service and how it helps companies move data to Google Cloud. What typically is a complicated process, DMS simplifies everything from planning to security to validating database migrations.

DMS has undergone some changes since last we spoke with Shachar and Gabe. It's gone GA and helped thousands of customers benefit from the service. Migrations are possible from any PostgreSQL database source to AlloyDB for PostgreSQL, which is designed to support HTAP data (transactional and analytical). One of the most exciting updates is the introduction of the DMS modernization journey, which allows customers to change database type during migration (heterogenous). In addition, migrations with DMS can be set up to continuously replicate data between the old and new database. With this feature, developers can compare the application performance against the old vs. new database. 

Inna talks about the benefits of keeping your data in the cloud, like secure, reliable, and scalable data storage. Google Cloud takes care of the maintenance work for you as well. DMS takes security seriously and supports multiple security methods to keep your data safe as it migrates. We talk about the different customers using DMS and how the process works for homogeneous and heterogeneous migrations. Before you even start, Gabe tells us, DMS helps you prepare for the migration. And tools like Dataflow can help when customers decide full migration would be too difficult. We talk about the difference between Datastream and DMS and use cases for each.

We wrap up the show with a look at the future of DMS.
 
##### Shachar Guz

Shachar is a product manager at Google Cloud, he works on the Cloud Database Migration Service. Shachar worked in various product and engineering roles and shares a true passion about data and helping customers get the most out of their data. Shachar is passionate about building products that make cumbersome processes simple and straightforward and helping companies adopt Cloud technologies to accelerate their business.

##### Inna Weiner

[Inna](https://www.linkedin.com/in/inna-weiner) is a senior technical leader with 20+ years of global experience. She is a big data expert, specializing in deriving insights from data, product and user analytics. Currently, she leads engineering for Cloud DMS. Inna enjoys building diverse engineering organizations, with common vision, growth strategy and inclusive culture.

##### Gabe Weiss

[Gabe](https://twitter.com/gabeweiss_) leads the database advocacy team for the Google Cloud Platform team ensuring that developers can make awesome things, both inside and outside of Google. That could mean speaking at conferences, writing example code, running bootcamps, writing technical blogs or just doing some hand holding. Prior to Google he's worked in virtual reality production and distribution, source control, the games industry and professional acting.

##### Cool things of the week

* Flexible committed use discounts — a simple new way to discount Compute Engine instances [blog](https://cloud.google.com/blog/products/compute/save-money-with-the-new-compute-engine-flexible-cuds)
* Understanding transactional locking in Cloud Spanner [blog](https://cloud.google.com/blog/products/databases/transaction-locking-in-cloud-spanner)
* Interactive In-console Tutorial [site](https://console.cloud.google.com/?walkthrough_id=spanner--create-sample-app-finance-pg?utm_source=codelabs&utm_medium=et&utm_campaign=CDR_swo_databases_spanner-neos_gcppodcast_110722&utm_content=-)
 
##### Interview

* Database Migration Service [site](https://cloud.google.com/database-migration)
* GCP Podcast Episode 262: Database Migration Service with Shachar Guz and Gabe Weiss [podcast](https://www.gcppodcast.com/post/episode-262-database-migration-service-with-shachar-guz-and-gabe-weiss/)
* AlloyDB for PostgreSQL [site](https://cloud.google.com/alloydb)
* PostgreSQL [site](https://www.postgresql.org)
* Datastream [site](https://cloud.google.com/datastream)
* Dataflow [site](https://cloud.google.com/dataflow)
* CloudSQL [site](https://cloud.google.com/sql)
* Spanner [site](https://cloud.google.com/spanner)

##### What's something cool you're working on?

Gabe has been tinkering with new Google Cloud databases and managing a new team.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hello, everyone, and welcome to episode number 328 of the weekly Google Cloud Platform Podcast. This is Stephanie Wang and today I'm here with Gabe Weiss." >}}

GABE: Hey-oh. 

STEPHANIE: What's up, Gabe? 

GABE: You know, talking databases. Talking data movement. Exciting things. 

STEPHANIE: Your favorite topics, yes. So, OK, this is the perfect person for the perfect episode. What are we going to talk about today? 

GABE: One of the big things that happen in the world is, where does your data live? Data residency, where can you get the most out of your data? Our opinion, it's in the Cloud. So today, we have our friends from Tel Aviv to talk about how we get your data there. Talking Database Migration Service. It's going to be-- it's a great conversation about all things. What you should think about, why we care about it, why you should care about it, and how we can make it easy. 

STEPHANIE: Yes. There's a lot packed into this episode. And Shachar, Inna, Gabe, you as well, I feel like we have a great combination of folks here from the product eng and DevRel side to talk about their journey building this product. I also feel like we should have a separate episode on just your career journeys. 

GABE: Oh jeez. [LAUGHS] 

STEPHANIE: We get a little sneak peek of it in this episode, but yeah. Just waiting to hear what's in store for you to learn about Inna's journeys and how that ties into a Database Migration Service. But before we get into that, why don't we go ahead and cover some of the cool things of the week? 

[MUSIC PLAYING] 

GABE: So what's the first thing that you saw that was super awesome this week? 

STEPHANIE: So there's a ton happening on the blog and on the interwebs around Google Cloud, but one thing that caught my eye was that we just came out with a new flexible committed use discount. So these are spend-based commitments for predictable and simple flat rate discounts. So for example, you get 28% off for one year and 46% off for three years. So it's pretty sizable. And that can apply across multiple VM families and regions. 

So it's kind of similar to resource-based committed use discounts. You can apply flexible CUDs across projects within the same billing account and to VMs of different sizes and tendency to support changing workload requirements and keeping costs down. So check that out if it applies to you and it makes sense. This is clearly a huge way that you can lower your cost. 

GABE: A lot of people don't understand that everything is negotiable. So make sure that you don't miss out on discounts like this. 

STEPHANIE: Absolutely, yeah. I mean, there are two ways about it-- like, taking advantage of these available discounts and also of course optimizing your cost by optimizing your resource utilization on Google Cloud. And we also have recommendations powered by AI to help you lower costs in general for things that are not being utilized fully or efficiently in your environment. So there's lots we can do there. There's a whole actual video series about optimizing costs in Google Cloud, so check that out. But what about you, Gabe? What caught your eye? 

GABE: So I love that you talk about optimization, because something that caught my eye is that Cloud Spanner-- our global scale database product-- just came out with a new thing about query insights around lock contention. 

So this is a real common problem in databases where, for certain types of transactions, you have to lock things so that you can complete your transaction without other stuff coming in and having issues there. So lock contention happens when two different queries need access to the same resource at once and the database goes, no. Hold off, I've got to do this other thing before I get to you. When you have a global database and you've got a ton of thing hammering your database all at once, lock contention happens. 

So sometimes it can be kind of hard to figure out what's causing the contention, like what queries are actually causing the locks to happen. How can I optimize that so it happens less often? Spanner does a really good job of trying to avoid these situations, but it does happen. 

So now we've got a visualizer that helps you see when that lock contention happens and dive down and get some introspection on what's going on, what queries are causing it. So you can tug the thread a little bit so that you can figure out what's going on so you can fix this. That's what caught my mind. That's a big deal for people that use these high throughput databases. Lock contention is a big deal. So being able to debug and figure out what's going on is a really great tool for our developers. 

STEPHANIE: Amazing. I mean, it sounds necessary for a highly consistent database like Spanner. And so to get an inside look into the nuts and bolts of how it works and how you can optimize for it seems really, really relevant for folks who are hands on with it there. 

GABE: 100%. 

STEPHANIE: So this is related. Yeah, related to our episode topic. I know we have a full house here. So why don't we go ahead and dive into our conversation with Shachar, Inna, and you? 

[MUSIC PLAYING] 

STEPHANIE: All right, welcome to the GCP Podcast. And welcome back to some of you. To kick it off, for those of you who have not been on the podcast yet, I want to give a quick intro. So maybe we'll start with Shachar. 

SHACHAR G: Hi, everyone. I'm Shachar Guz. I'm the product manager for the Database Migration Service. Very happy to be here again. 

INNA W: Hey, my name is Inna Weiner and I'm the engineering lead for Database Migration Service. And actually, I'm a long time Googler. I've been at Google for 15 years. 

STEPHANIE: Wow. 

INNA W: Happy to be here. 

STEPHANIE: That's a Google veteran right there. [CHUCKLES] And how about you, Gabe? 

GABE: Hey, everybody. Glad to be back. I'm Gabe Weiss. I am a developer advocate on Cloud databases. 

STEPHANIE: Amazing. We have a full house today. This is great. So we talked about DMS was it last year maybe? And we had, Shachar, you and Gabe here on to introduce DMS or Database Migration Service. But for those who may not have listened to this episode before, why don't we give a good primer? What is DMS? 

SHACHAR G: So DMS is Database Migration Service. It's the native migration tooling for all customers that want to migrate their databases to our Google Cloud databases offering. Basically DMS offers a simple, straightforward, seamless way to move the databases, regardless if it's homogeneous migration or heterogeneous migrations. 

STEPHANIE: And DMS, or Database Migration, makes sense as a use case of course to the Cloud. But why is this traditionally a challenge and what problem is DMS solving? 

INNA W: When I think about data migration, first of all in my previous role which I finished recently, I was the lead for data warehouse for search and assistant for Google. So as you can imagine, data is something I've been working with and thinking about a lot. 

So data migrations are hard and complex. And when I think about data migration, it actually resembles a personal experience I've had recently, which is relocation of my family from the US to Israel. So imagine this-- me, three kids, my husband, and a dog. My own migration actually resembles the data migration. 

So step number one is an assessment. So just like with data, you have to think about what do I need in order to move. What can I keep behind? How much will it cost me? And then you get to step number two, which is the prep work. Or in databases case, the schema conversion. So you need to decide how your new thing is going to look like. 

In my case, find a new apartment. Do I need new furniture? Think about new placements for my kids at schools. And then when all of that is done, you get to the actual move. And as you probably know, data movement or people movement is never smooth. For example, for me, we had to ship our dog separately on a separate airplane, which was not fun and not easy. But actually, similarly with a database migration, you might need to go through multiple iterations until you're actually get it right. 

And then the last step is data validation. So in my case, you actually need to open all the boxes and see if all the things you planned to move indeed moved. So this phase, as you can imagine, sometimes will last forever. And I know how many of you moved recently, but there are always these two or three boxes that you never open until the next move. 

STEPHANIE: I love that. 

GABE: I love the analogy too because something that you touched on that I think a lot of the times folks don't think about is, as you're doing these database migrations, you get to make the decision about maybe everything doesn't come through. It gives you that opportunity to do this kind of spring cleaning. 

Like when I move-- hopefully I never have to move again, but every time I move it's been about OK, how did I do things before? What did I do the last time I did this problem and can I optimize for this next move? Like how I packed things in a previous move just didn't work and now I've got that kind of experience. 

Data movement's the same way. When I do a database migration, you learn so much about what works, what doesn't work. So Database Migration Service, DMS, makes a lot of boilerplate decisions for you. It makes a lot of the initial decisions that you might need to make easier. Because we're using a lot of the native techniques for a lot of these migrations, you don't need to think about a lot of these steps. It kind of handles a lot of that for you. And the UI then walks you through a lot of those initial steps so that it makes the decision easy. It's like if you had a concierge helping you move across the world. 

Similarly, DMS is like that concierge which helps you make the right, smart decisions from those early steps so that you don't lose boxes or ship them to the wrong house. 

STEPHANIE: That's a great way to extend the analogy, a concierge or a travel agent to help you with the move. And I think similarly, you might have the same house or the same database environment in different places, but you still need to make sure that your data isn't getting lost. You might have your dog or a data point traveling on their own plane over, but it gives you that peace of mind to make sure it takes care of some of those details for you. 

So we talked about DMS last time, but what has changed since our last episode? I know it's been a little bit of time. So can you cover some of the latest updates here? 

SHACHAR G: Yeah. So actually quite a bit, right? So last time we spoke, it was I think very close to the general availability of the service. So since then, we migrated like thousands of customers and we were able to move a lot of workloads from multiple sources, especially MySQL Postgres to our Cloud SQL offering. 

So we extended our support and we actually introduced two new use cases that you can do using DMS. The first one is a migration from any Postgres source. So regardless if it's on other clouds, on your own premises, on any VM, even in Google Cloud, move it to the new AlloyDB for Postgres that I know that Gabe is just eager to talk about it. 

And the second one is we introduced the modernization journey, which is a way for customers to move out of their proprietary databases and in specific Oracle to the offering of Cloud sync for Postgres. We basically took the hardest problem, which is changing not only where you are, changing like the database that you're using. 

So instead of previously we only supported homogeneous, which for example was MySQL to-- classic for MySQL Posgres to classical Postgres. Now we're supporting Oracle to Cloud sync for Postgres. And again, always with the goal of helping you do it in a simple way. That you will need to do some work, but we're trying to reduce that and to help you to predict exactly what the work that needs to be done. 

STEPHANIE: Changing database type seems like it's been a challenge in existence for quite some time. Just from a product perspective, why did we decide to take that challenge on? 

SHACHAR G: One of the key inputs we hear from customers, so customers love the homogeneous use case, right? Love to move and don't really love to change things. They're people, right? You don't want to change what you do. You want to keep doing that. 

But in some cases, preventing from this change costs them a lot of money. There is the budget they are spending on licensed databases that they keep paying on a yearly basis. And they're basically dependent on that. They can't really move to an open source database to accelerate the business. 

So when customers came to us and said, we must have some simple way to do it with a native GCP solution to do this modernization or moving from Oracle to the open source Cloud suite for [INAUDIBLE] in order to enjoy the community and to enjoy all the great things that Postgres. And by the way, in specific Cloud SQL Postgres and AlloyDB for Postgres can offer. 

Of course, we want to be there. We want to support them. This is a direction the DMS took from the get-go, which is basically helping customers achieve every use case they have regardless if it's homogeneous or heterogeneous. Doing that using DMS and Oracle to Postgres is only our first step in implementing those modernization journeys. 

STEPHANIE: That's really exciting. And it makes sense from the standpoint of opening up the options for our customers. And you've mentioned Postgres quite a few times. I know that Postgres has a lot of activity around it lately. And we did an episode around Next about Postgres is happening. 

We have a Postgres interface for Spanner. We have Postgres Cloud SQL. And we have AlloyDB. And Forrest, who we had on the podcast, was talking about it like this is a current version of Linux with the amount of open source activity happening around Postgres. So I want to learn a little bit more about AlloyDB since it was one of our most exciting launches this past I/O. But Gabe, you were a pretty big part of that, right? 

GABE: I have been. I got put onto AlloyDB, boy, almost two years ago now. So it was mid-development so that I could be sure that, as the engineer team went into it-- so just quick, AlloyDB is our Postgres-compatible world scale database. We've done some magic to the Postgres kernel under the covers to optimize for specifically analytic style workloads. 

So, in databases, we tend to talk about two different kinds of workloads-- OLTP and OLAP. So one is a transaction, more of a real time back and forth kind of conversational workload. And then OLAP, which is analytics-based, which is, let's get some smarts out of our data. Let's figure out what we've got. Let's crunch some numbers and figure out what some trends are-- that kind of workload. 

There's a third type, which they call HTAP. It's the hybrid mode transactional analytical processing. And that's really what our lab is aiming at. Postgres is an OLTP engine. It's really optimized for very quick transactions, in-outs. The lock times are designed to be short so you get very low latency response times from your database. So a lot of the times, those two things are kind of orthogonal. 

When you have a database that's designed for analytics, because it's designed to crunch this large amount of data, it's not the fastest in the world. There's usually some latency involved in your querying. And conversely, if you've optimized your database to do very fast returns, if you've got a ton of data, now what do you do? If you've got to scan a million rows, you've got to scan a million rows. That's going to take some time to get your data out of it. 

So our engineering team have done a ton of work to kind of flip that on its head a little bit and optimize Postgres to be able to do a lot quicker work on the analytics side of things. So we're not talking about a data warehouse. It's not a thing that's ever going to replace something like a BigQuery. If you have petabytes of data, you don't want to put it in AlloyDB. That's not what it's aimed for. 

But if you want to be able to do things like real time analysis of your data and offer that back to the user in a responsive application, that's what we're talking about. So if you want to be able to do aggregate queries of the data that you've got-- not necessarily long tail analytics, but really looking at your data and handing it back. 

So a good example is kind of a traditional example. In retail, if you want to offer suggestions to someone based on their previous experience or an aggregate of all the people shopping on a platform, that's the kind of thing we're talking about. Where you want to be able to, as they click into their cart, oh hey, have you thought about x? That kind of workload is what we're talking about. And that's really what AlloyDB is aiming at. 

SHACHAR G: Yeah. I just want to add that, based on what Gabe is saying, you would imagine that the migration for this type of a service, for this high tier database would be challenging. So because AlloyDB is Postgres compatible, the migration journey for customers using DMS is identical to Postgres-to-Postgres Migration. It means that it's super simple, no additional pre-work. 

Let's say that if you compare the migration process of Postgres to CloudSQL Postgres or Postgres to AlloyDB for Postgres, they are exactly identical. So every customer that's used us to move to classical Postgres will understand and will see it's identical. 

And by the way, it's a good way to basically do a POC of AlloyDB even if you're in CloudSQL Postgres. So it will take you two minutes to set up. You have a new cluster-- a new, shiny cluster-- and you can use it to test AlloyDB for Postgres. So that's really exciting for us. 

GABE: 100%. So it's something I want to highlight too which, just to be explicit about it, one of the awesome things about DMS is when you do your migrations, you can set it up as a continuous migration. So the data is flowing between the old and the new. 

When you first set it up-- before you promote, before you say, OK, my target where I'm migrating my stuff to, I want that to be my main instance now-- before you click that step-- and it's a click button in DMS-- before you do that, your data exists in both places. So that's like the perfect way to do a POC to see side-by-side how the performance of your old database is against the new one. 

Because your application, you can set up an environment where it's just looking at one, then the other and compare apples to apples. You can really look at it and say, OK, before I do this migration, here's what my application is performing like. OK, now let's look at the new one. And now I can look at the performance profile and really see the change and the difference between the two. It's a really cool feature that I don't know if we undersell it or I just maybe I need to talk about it more, I don't know, but I love that about DMS. That it doesn't just a one shot, do it. You can leave it in this state where you can compare both with your live data. 

STEPHANIE: Correct me if I'm wrong in terms of terminology, but it's like a continuous replication that's happening. You can choose when you turn down the traffic from, let's say, instance A on CloudSQL and direct all other traffic to instance B on AlloyDB. But what you're saying is, before you even do that, you can test the performance of your application against both simultaneously. 

GABE: Exactly. 

SHACHAR G: To go back to Inna's analogy-- basically the last part, to check that all the boxes are there and all the stuff are there-- in DMS, we are not coming to take the boxes before we are proving that, before you're finalizing this entire process. This is exactly the time that you have for doing the validation to keep it as live as long as you want because we know that customers would like. 

There are customers that, for example, are doing like dual writing, right? They're writing to the source. They're writing to the target. They're checking that everything works as expected. So regardless how we want to do this validation, we are allowing that. 

By the way, one last thing about it-- I know that I've already addressed it. But PG, Postgres to AlloyDB, uses native replication, uses pglogical as well as Postgres-to-Postgres So again, it's another advantage. It's highly reliable, highly secured, with the highest level of fidelity possible. 

That means again, the customers are able to expect what they will get. They are not using like a black box, they don't know what is the mechanism. pglogical is like a highly adopted and used migration technology across the industry. 

GABE: Yeah. A well-worn path for sure. 

STEPHANIE: Amazing. OK, so you've clearly been busy over the last year and a half on doing all of these feature updates and these heterogeneous migrations to support modernization journeys. So I want to zoom out a little bit and talk about what it's been like to be on the product team for this data movement journey at Google. Can you talk a little bit about what has made you excited and some of the benefits of putting data in the Cloud? 

INNA W: Sure, I can take that. So as someone who has been working with data at Google for a very long time, I really learned to appreciate the benefits of keeping the data in the Cloud. And at Google, we almost take it for granted. And now when it's possible for us to deliver that infrastructure that was developed at Google and make it available for our customers, that's really, really exciting for me. 

For example, Cloud products and Cloud databases are not an exception. They offer reliable and scalable infrastructure with emphasis on security data integrity and data protection. So while all of that is taken care of, you can invest your time in building your applications and innovating on your products, trying things out. 

And, as was previously mentioned, you can try your application on both your on-prem database and the on-Cloud database to see what works, what doesn't work, where you can deliver faster, et cetera, et cetera. 

And one last thing-- once you do that, you can actually stop worrying about your data being available, fast, up to date when you are the one taking care of the on-prem, all the maintenance work. So once your data is on the Cloud, all that maintenance work is taken care of and handled by Google. 

STEPHANIE: Clearly there is a lot of opportunity to invest your time and money in innovating. Now I know that with DMS, it's taking care of a lot of things under the hood, including connectivity mechanisms. So can you cover a little bit about what types of connectivity we provide and maybe what we plan on providing and why it's secure? 

INNA W: First of all, when we think about data migration or databases migration, the real hard problem is connectivity. And with DMS, we work with all types of customers and security is very important to us because we know that it's very important to our customers. We support multiple private and secure connectivity methods via VPN and interconnect both to your source database and to your target database. We supply guided experiences to simplify connecting to Google Cloud and we also provide dedicated support for the more complex use cases. 

One additional thing to mention is that we do not install any agents at the customer source database or target database, which makes it even more secure. 

STEPHANIE: Yeah. Security is obviously a very important concern, so it's nice to know that we've streamlined a lot of the components necessary to perform these migrations. We have lots of customers with different use cases here. So now that we have this introduction of this new modernization journey support, can you talk a little bit about the main differences between the types of customers and their expectations they have from DMS? 

SHACHAR G: Yeah. There are multiple differences between the two types of customers and two types of journeys. So in essence, what we got like when we started with homogeneous, our approach was we heard customers and customers basically said, I just want it to work as a one-click, right? All customers want one click and want even zero clicks, right? You want it to happen without actually doing anything, which is great. This is what I expect from any services that I use. 

So in general, for homogeneous migration, when customers are using the exact same engine-- MySQL, MySQL Postgres-to-Postgres-- they want a one click that it will just work. We achieve that in DMS. They need to do, and I think Gabe addressed that early on, a very little amount of configuration. They just need to configure a couple of things on the source in order for us to be able to access the source. But after that, it's very easy. 

And we see that. Again, more than 85% of migrations the DMS are doing are underway in less than an hour. When you say underway in less than an hour, it means that it takes them a very short time to prepare a migration. The migration would be ready to start. We are allowing customers to check on the configuration before that. We're allowing them to test. So for homogeneous, it's a one click migration. And we actually don't want the customers to feel ourselves, right? We want them to basically do a couple of steps and that's it. 

The modernization journey, I'm always talking about simplification of it. But in essence, modernization and moving from one engine to another engine is a complicated, complex journey. Customers don't expect it to be one click. They wish it would be one click. I wish it to be one click as well. But there are multiple things you need to do. 

You need, for example, to understand dependencies of your database and your application. You need to understand which teams you need to talk to, right? You're doing database migration. You would expect that only like the database team would be on charge on that. 

But not exactly, because you have the networking team that need to achieve the connectivity. You have the application team that is writing the application and have some database code in the application layer and now they need to change it. Instead of writing that in Oracle, they need to change it to write to Postgres. So there is a team effort. 

In NDMS, we understand this is a team effort. We understand that it's a complex process. And what we are trying to do, we are trying to make it as simple as possible by first frontloading all the information that the customer needs in order to use the MS before starting the migration. 

In the lack of a better term, they fail early rather than fail late. So it's not that they're starting the migration and then like a day after, it's failing and now I need to go back. We're allowing them to test everything ahead of time. We basically introduced a new thing with the we call conversion workspace. This is basically the playground for customers to explore with any conversion they need to do from one language to another language. So we're allowing them to do as much as possible before starting migration. 

And customers do expect that this process would be a bit more complicated, but they expect this service that they are using to reflect everything they need to do and everything they are doing wrong and everything that has any warning, any errors they might have. So homogeneous, heterogeneous are totally two different things. In DMS, we understand the complexity and we're trying to remove any minor hurdles the customer has. 

GABE: And to add to that, too, it's more than just removing these complexities too. One of the things that I appreciate about DMS is that it gives you all the information about what the complexities are beforehand. Like, it tells you what the prerequisites are for these types of migrations within the UI. So you get a sense of, before you even start your journey, what you have to do. 

And there are times that you're going to look at that journey and you're looking at moving across the world and decide this is too much. Like, I just I don't want to do this. And DMS helps give you those tools to be preemptive of that. There are times that as our customers are looking at doing these modernization journeys, that they're going to make the decision. You know what, this is too much. I cannot move my data from point A to point B. There's too many complexities. There's too much stuff. And we try and address those cases too. 

One of the things that I wanted to kind of touch on is part of this larger conversation is data movement in general is a topic that's hot right now-- not just migrations necessarily, but data residency. Where does your data live? Where can we get it to where it can be the most use? 

And here at Google, we've kind of internalized that as there are groups where we don't do that. We make the decision not to move the data. And instead we've got tools like Dataflow where you want to just do a huge MapReduce on your data and move just part of it, for example. Or Datastream, our change data capture product. These are products designed for when a wholesale migration might not make sense, but you need the data somewhere else for some reason. 

Either you've got your operational database, you don't want to change that-- there's too much tooling, there's too much stuff built around it-- but you still want to get some analytics out of it. All right, we've got tools like Datastream now where you can hook it up to your transactional database and move either all of it or some portion of that data to something like BigQuery, where now you can run your analytics on your warehouse. 

So for us, it's really taking a step back and looking at these data movement journeys and really thinking about where can you get the most out of your data. We know it's in the Cloud. So if you're on-prem, that's just get yourself off-prem. Use Database Migration Service. Get yourself to the Cloud. Do that lift and shift. Get yourself to where your data can get a broader use across a platform. 

Once it's there, now you can make more fine grained decisions about should I modernize, should I move my data from legacy database to Postgres or whatever that piece is? Or should I just move part of my data and use just a portion of it somewhere else? And that's really a big part of it, is making that decision point of what should I do with my data. 

STEPHANIE: Yeah. That's a great way to think about it. And it sounds like we've done a lot of consideration about the amount of homework that customers need to do ahead of time, but we're also equipping them with the information they need. I have a good friend that just moved to Madrid and she wishes she had a one-click or a guide or a full, extensive list of all the things that she had to keep in mind before moving to Spain, but now she's left with having to deal with a lot of things now that she's already there. So it'd be great if we had that across the board on all of our life use cases, right? 

But it sounds like DMS is doing a good balance of getting you to your destination and then from there you have many other options once you're in the Cloud. But you mentioned Datastream as another potential use case. I know that this is a question we sometimes get from customers, but can you just clarify one more time the difference between Datastream versus DMS? Datastream, again, it does change data capture. So you get streaming or low latency data from MySQL Postgres, AlloyDB, and Oracle databases. But it sounds like it could be confusing maybe. So do you mind clarifying? 

GABE: I think the simplest way to think about it is Datastream and CDC, Change Data Capture, is copying the data. And migration is moving the data. So when you're using CDC, it's not actually deleting your data off of your original data source, it's leaving it there. With a database migration service, DMS can leave them in both places until you really shift to the new one, but the idea is you want to actually move where the data is living from point A to point B. Does that jibe with you, Shachar and Inna? Does that make sense? 

SHACHAR G: Yeah. In general, the way to understand it is for migration customers-- regardless homogeneous migrations, heterogeneous migration-- they want everything. It's not only the data. It's not only the data is important, they want, for example, the stored procedures and the functions and everything that exists, all the metadata of the database. It's never just the data, right? 

Why? Because at the end of the day, they want to switch over from the source or destination. So they need everything. They need all the entities. When you're using Datastream, the customer there wants to replicate the data. And usually the application is to a data warehouse like BigQuery. In the BigQuery, stored procedures, functions are less relevant. So the two products are different and are optimized in the way they're built to a different way. 

But it's two ways to move data. And we wanted GCP in general to cover any type of journey that the customer wants to do, regardless if it's replication or migration or ETL or any type of journey that you want. We want to support you doing that. 

STEPHANIE: Makes sense. 

INNA W: So when you were talking about data replication for analytical use cases, typically you want to look at masses of data. So in that sense, if a single record drops or a very, very low number of records are dropped, it doesn't make any difference or makes very, very little difference. And the replication can just continue and you're going to get your aggregated results that are still very much correct and what you're looking for. 

While when you are looking at data migration, you want to actually deprecate your source at some point. And what we need is to make sure that there's really, really high fidelity between everything that's at your source and whatever you want to migrate is actually migrated. So the data integrity component here is very, very important in the DMS or data migration journey, unlike the replication for different use case, for example analytical use case like Datastream. 

GABE: We really want to be sure the dog makes it to your destination. 

STEPHANIE: Correct. Never want to leave the dog behind. This is great because I just love getting this insight from the product team, because you get to see how you're thinking about the problem and the types of factors that you find most priority. In this case, you have the data integrity piece of it. 

Now looking towards the future, we have a lot more in store, I'm sure. What are some use cases or different environments that we're looking to work on? 

SHACHAR G: So there is a lot we are planning to do in the next 12 months, next 24 months. And backlog and product roadmap is full. We want to meet customers where they are. In every use case they want to achieve, we want them to use DMS. One of the things that's currently missing is a seamless way to move from SQL Server to CloudSQL, SQL Server. We see a huge adoption of CloudSQL, SQL Server and this is one key homogeneous use case that we are going to, in a lack of better term, attack in the following year. 

In addition, in the modernization journey we see there is a lot of demand for migration to Spanner, for example, from MySQL and all [INAUDIBLE]. So again, we want to enable customers to enjoy all the great things that Spanner can provide. And Gabe, I know you're excited about Spanner as well. 

GABE: I am, yes. We talk about the global scale and how do we address it. Cloud SQL is an amazing product for managing the various transactional database engines. But if your application needs more of a global scale, Spanner is unique in the market where having the global write consistency is a huge differentiator for a lot of our customers. It's a relatively common use case of needing low latency access globally. And there's really not any database on the market that does it better than Spanner does. 

So having an easy way-- we've done a lot of work on Spanner, making it more accessible. We call it the democratization of Spanner, where we've got things like the free trial now where you've got 90 days to try Spanner for free. You can get a partial node. You can get processing units for Spanner so you don't have to pay for a full node's worth of processing, bringing the monthly cost down to make it more accessible. 

DMS, to be able to get Spanner as a target, is another link in that chain. It's to be able to ease adoption for these databases that really meet your application where you need it to perform. This transformative journey of using something like AlloyDB where it's still Postgres but now you need that extra oomph out of what you're doing, or you've got situations where you need this global write consistency or Spanner's reliability. 

Spanner has 5 nines of reliability. It's ridiculous how much uptime you can guarantee out of something like Spanner. So if your applications need that reliability or globalness, then being able to get your data into it, we want to ease that journey. We want to make it as easy as possible to get your data there. 

STEPHANIE: So the modernization journey continues for both us and our customers. And hopefully DMS is a big part of that for them. So we have a lot in store. We have a lot that we've already done. But what are some final takeaways? Anything that we missed that you'd like to mention before we wrap things up? 

INNA W: So as Shachar mentioned, we've got a lot to offer already and we have a lot of things planned for the next year. But we are just at the beginning of our own service journey and we're looking forward to hearing from our customers what migrations should be prioritized, what else did we miss and we should work on. So please do reach out. 

GABE: You can reach out in all kinds of ways. If you're part of an account that has a sales rep, an account rep, that's a good way to get feedback back to us, especially if it's a blocker anyway. For me, I'm active on a lot of social media and I love hearing this stuff and I can channel it directly back to the product teams. I'm pretty easily findable across social media. I'm active on LinkedIn, if you want to just find me. 

SHACHAR G: I think that one of the things for me personally to work on, database migration in general. The problem is super easy, right? It's not hard to understand what the customer wants to do. They want to move from here to here. They want to do it fast. They want it to be simple. But what we hear from customers in every type of use case that we try to implement is different. 

And every customer is different. You have customers that have a database from the 70s they want to move to the top notch Spanner database. And you have customers that just moved like two years ago and now want to move again. 

So for us, I think the thing that I'm not most excited about, but the thing that I'm looking forward and like final thoughts that I have is that I do hope that next time that we'll be here, we'll have much more use cases that we can cover and much more variation of customers that we can support. 

Because I know that even though we cover a lot of ground, there are so many databases that are not on the Cloud and customers that are not enjoying all the great ways of the migration to the Cloud. And this is what, again, keeps me awake at night and makes me excited when I get up to work. 

STEPHANIE: For such a simple to understand problem, it seems like the solution can be hard to achieve and there are so many permutations of different combinations. But I feel very confident, because I have the best people in the room right now who are able to tell that story and build that solution, product engineering, and DevRel. So I just want to thank you all for being here on the podcast and teaching us about what you've been working on all this time. Thank you. 

INNA W: Thank you for hosting us. 

SHACHAR G: Thank you. 

GABE: Thanks for having us. 

STEPHANIE: Wow. What a full conversation with the product team, engineering, [INAUDIBLE]. We had great representation there to learn about all of the various factors you have to take into account when it comes to database migration. We would love for it to be a one-click button experience, which it can be, it sounds like, for homogeneous migrations, which is already a huge achievement. But it sounds like the challenge space is wide and has a lot of considerations. But y'all are doing a great job. 

GABE: It's funny. We touch on this as part of our conversation, thinking about the matrix of point A to point B in the world that we now live in with the proliferation of databases and different environments that people live in. I love talking to those two about this stuff, because they live, breathe this world and they have such great insight. I love talking with them. 

STEPHANIE: Yeah. Shachar said it keeps him up at night, so we know we have the people, the right people, on the job here. 

GABE: That's right. 

STEPHANIE: So, Gabe, you are living, breathing database data in general as well. So what are you working on these days? What excites you? 

GABE: You know, trying to keep on top of the speed at which Google is moving, that's the best part for me. I get to tinker with all the stuff that's coming. So I know we mentioned the Spanner insight stuff. And I'm now managing, which is a new world for me. I've been managing the team since April now. So getting my hands on other databases that I haven't gotten a chance to play with, that's what I've got going on. I am learning the spectrum of Google Cloud databases, which is awesome. So I'm getting back to my roots and learning, which is fun. 

STEPHANIE: Yeah, that's what I've heard DevRel can be like. We're learning so we can teach others that we're all on the same journey. But you're also impacting the people that you're managing and that's great. So congrats on all the success so far. I know it's been a whirlwind with AlloyDB and everything too this year. 

GABE: It has. 

STEPHANIE: They're keeping you busy here. 

GABE: [LAUGHS] Definitely. 

STEPHANIE: All right. Well, thanks so much, Gabe, for co-hosting and being a guest here. And hopefully we'll get you back on again soon. And for everyone else, we'll see you all next week. 

GABE: Awesome. 

STEPHANIE: Sweet. 

[MUSIC PLAYING]