+++
audioDuration = "00:29:44"
audioFile = "Google.Cloud.Platform.Podcast.Episode.212.mp3"
audioSize = 42817482
categories = ["Data Management", "SQL", "Databases"]
date = "2020-03-18"
description = "It's all about data management this week on the podcast as Brian Dorsey and Mark Mirchandani talk to Google Cloud Product Marketing Manager, Amy Krishnamohan."
draft = false
episodeNumber = 212
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Data Management with Amy Krishnamohan"
image="/post/episode-212-data-management-with-amy-krishnamohan/images/hero/hero-EP-212.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/fktu0q/episode_212_data_management_with_amy_krishnamohan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

It's all about data management this week on the podcast as [Brian Dorsey](https://twitter.com/briandorsey) and [Mark Mirchandani](https://twitter.com/markmirch) talk to Google Cloud Product Marketing Manager, [Amy Krishnamohan](https://twitter.com/amykrishnamohan). Amy starts the show by explaining that Cloud SQL is a fully managed relational database service that recently added Microsoft SQL Server to its repertoire. We talk about SQL Server's migration from 2008R2 to a newer version, the process involved, and how it's effecting customers. Luckily, Cloud SQL for SQL Server is very backwards compatible, making the process easy for Google Cloud customers! Cloud SQL also offers other tools to make using Microsoft SQL Server easier with Google Cloud, including shortcuts to set up the high availability function.

Amy talks later in the show about what companies are a good fit for Microsoft SQL Servers on Google Cloud. She explains the steps to set up and tear down, how licensing works, and what the best use cases are for Microsoft SQL Servers on Google Cloud. In the future, Cloud SQL will have a managed AD service available.

A multi-cloud strategy is important, according to Amy. It is up to each company to research cloud services and pick the best vendors and products for themselves and their clients. Cloud SQL for SQL Server is a way to bring two great products together for the benefit of consumers.

<!--more-->

##### Amy Krishnamohan

[Amy Krishnamohan](https://twitter.com/amykrishnamohan) is Product Marketing Manager at Google Cloud responsible for databases. She has diverse experience across product marketing, marketing strategy and product management from leading enterprise software companies such as MariaDB, Teradata, SAP, Accenture, Cisco and Intuit. Amy received her Masters in Software Management from Carnegie Mellon University.

##### Cool things of the week

* Introducing Cloud AI Platform Pipelines [blog](https://cloud.google.com/blog/products/ai-machine-learning/introducing-cloud-ai-platform-pipelines)
* Finding a problem at the bottom of the Google stack [blog](https://cloud.google.com/blog/products/management-tools/sre-keeps-digging-to-prevent-problems)
* Larger local SSD storage available now [blog](https://cloud.google.com/blog/products/storage-data-transfer/larger-local-ssd-storage-available-now)
* Compute Engine gets machine images [blog](https://cloud.google.com/blog/products/compute/compute-engine-gets-machine-images)
* Google Cloud Next Update [site](https://cloud.withgoogle.com/next/sf)

##### Interview

* Microsoft SQL Server [site](https://www.microsoft.com/en-us/sql-server/default.aspx)
* Google Cloud SQL [site](https://cloud.google.com/sql)
* BigQuery [site](https://cloud.google.com/bigquery)
* GCE [site](https://cloud.google.com/compute)

##### Question of the week

Lift and shift, move and improve, or re-architect: How do we "move and improve"?

* GCP Podcast Episode 211: Digital Services with xMatters [podcast](https://www.gcppodcast.com/post/episode-211-digital-services-with-xmatters/)
* Importing virtual disks [docs](https://cloud.google.com/compute/docs/import/importing-virtual-disks)
* Create machine image from virtual appliance file (OVA/OVF) [docs](https://cloud.google.com/compute/docs/machine-images/create-machine-images)
* Tutorial: Getting started with Migrate for Compute Engine [docs](https://cloud.google.com/migrate/compute-engine/docs/4.9/getting-started)
* Whitepaper: Velostrata technology for mass migrations into Google Cloud Platform [whitepaper](https://cloud.google.com/files/understanding-the-velostrata-technology-for-mass-migrations-into-google-cloud-platform.pdf)
     
##### Where can you find us next?

We're working from home for a while!

Brian will be looking at getting a kind of weekly "reading group" of people who work with VMs and want to get better. Ping him on Twitter if you're interested!

Mark will be working on more video content and a cool nickname for Brian!

{{< transcript "[MUSIC PLAYING] MARK: Hello, everyone, and welcome to episode 212 of the weekly Google Cloud Platform podcast. As always, I'm Mark, and I'm here with my-- we came up with a term earlier-- my odd colleague, Brian. But we can come up with a better adjective than that, Brian." >}} 

BRIAN: Oh, anyway, hi, I'm Brian. Thanks for listening, everybody. 

MARK: OK, I will work on it. I will have some homework. I will find an adjective that appropriately describes what it's like to work with Brian, other than the fantastic, the awesome, the great Brian. 

We can do better than that. I will grab a thesaurus and do some work. 

BRIAN: Slightly afraid and enthusiastic. 

MARK: Brian, tell us about who we're going to be talking to today. 

BRIAN: So, we have Amy Krishnamohan, who is going to talk to us about running SQL Server on Google Cloud, and in particular, managed SQL Server on Google Cloud. 

MARK: Oh, that's going to be awesome. I mean, obviously, SQL Server has been around for quite a while. And we'll probably talk a little bit more about some of the workloads that run on SQL Server and why it's cool to run them on Google Cloud. 

BRIAN: And when we say SQL Server here, we're talking about Microsoft SQL Server. 

MARK: Microsoft SQL Server on Google Cloud. 

BRIAN: Exactly. 

MARK: All right, we'll get more into detail there. 

And I've got a fun question for the week. Continuing our topic of migration, Brian will tell us a little bit more about some of the terms we use for migrating to the cloud and some strategies around it. 

BRIAN: Awesome. looking forward to it. 

MARK: But before we do any of that, let's talk about our cool things of the week. 

[MUSIC PLAYING] 

I've got two cool stories. The first one is that we've actually got a beta launch for Cloud AI Platforms Pipelines. I've done a little bit of work with Kubeflow recently and Kubeflow Pipelines, which are basically like an enterprise way to structure out a full machine learning workload, right. 

So I've done a little bit in Jupyter, and that's great for a notebook. But when you get a bit more complicated, there's actually a lot of different pieces that go into the full workflow, such as taking the data, preparing it, actually running the training, tuning the training, and then serving. 

So I think if you're interested in that, I definitely recommend checking out the Platform Pipelines in beta so you can try it out, as well as reading a bit more about how Pipelines work. And I think there's a lot of work being done by the Kubeflow Pipelines team to make this really extendable. So I definitely recommend giving it a try. 

One other fun story to share is "Finding a Problem at the Bottom of the Google Stack." I'm actually not going to spoil this one. It's just worth reading. 

It's kind of a cool story about a interesting problem that you typically don't think about when you look at infrastructure. We talk a lot about managed services, like we were just talking about and what that looks like. This one would not often come up. 

Not going to spoil it, again. Just go read it. It's a really fun, short little article on a very interesting problem and how the Google teams kind of investigated it. 

BRIAN: Is it too far to say that clouds are still made up of physical machines? 

MARK: I mean, I think this is a great reminder that hey, as big and as wide and as vast as the cloud is, that server is somewhere. And it potentially has other hardware around it. 

BRIAN: So when you look at the show notes, the link for that is "Finding a Problem at the Bottom of the Google Stack." 

MARK: Very clever. 

BRIAN: And then I've got a couple things. We made a few announcements around VMs just in the last few weeks. And one is just the usual pace of cloud. Things get bigger and faster and the like. 

So our local SSD offerings for VM, sometimes you just need the absolute lowest latency for search or some other workloads. And so you often do that with local SSD, and those just got up to three times bigger. So you can have up to 9 terabyte local SSD if you need them for your workloads. 

And the next one, I'm really excited about. It's called machine images for Compute Engine. And from the very beginning, our VMs have had disk, images which, in my opinion, gives you almost 80% of what you want from a SAN, right. 

You can snapshot it. You can make new copies of it. You can back them up. And you can use them everywhere, which is lovely. 

But it's the disk level, and there's a lot of other things that go into making a machine. You've got this configuration around networking, what machine type it is, how much memory it's got. 

Maybe we set some metadata to make the application run a certain way. Maybe it's made up of multiple disks. 

And a machine image takes all of that information and treats it as one. So you can take a snapshot of that entire machine state, the configuration and how it's used, and this stuff, and then take that and make another machine from it-- or use it as a backup, in case you need to roll back to that state at a later time-- all the way to actually synchronizing the snapshot of multiple disks, so it all happens at once, and you're sure that you have the exact point in time state for the machine. So that's really exciting, I think, for people using VMs. 

MARK: Yeah, I think I'll ask you a little bit more about that in our question of the week as well. But it does sound like a very cool way to be able to capture-- like you said, a VM is more than just the Google Compute instance. There's so much more behind it with disks and so on and configuration. So let's dive into that a little bit later. 

BRIAN: Sounds good. And this is the time where let's get right to the interview. 

[MUSIC PLAYING] 

So, Amy, thank you so much for joining us. Could you tell us a little bit about who you are and what you do at Google? 

AMY: Hi, everyone. My name is Amy Krishnamohan. So I do product marketing at Google Cloud. Previously, I used to work at many different database companies like MariaDB, Teradata, and SAP specific /4HANA databases. So I've been in the database industry for a while. 

And then one thing that's really exciting to me, it is that the database is actually very, very important part of everybody's business. And I'm very happy to market about that product. 

MARK: Which is great, because today we're here to talk about a super exciting announcement that Brian actually talked about, I think, in the podcast two weeks ago. 

But we're here to talk about SQL Server, or Cloud SQL for SQL Server going generally available. 

AMY: Yes, it is a very exciting product. And one thing that you did note, that it is actually very hard to pronounce. It's the Cloud SQL for SQL Server. So I feel like it is almost like a tongue twister. 

MARK: Cloud SQL for SQL Server. Cloud SQL for SQL Server. Cloud SQL for SQL Server. 

BRIAN: This is Microsoft SQL Server. 

AMY: Yes. That's correct. 

MARK: But it's Cloud SQL for SQL Server. 

First of all, can you give us a quick refresher on Cloud SQL? 

AMY: So Cloud SQL is a fully managed relational database services. So we traditionally had MySQL Postgres instances, and now we added a new family, SQL Server. 

And as you can see, in all three products, every product has a name, SQL, because relational databases really love SQL, Structured Query Language, and everybody loved to use that. 

MARK: Woo! 

AMY: [LAUGHS] And a really good part was, when we launched this product, people asked why Microsoft SQL Server is on Google Cloud. But interestingly, when we launched the alpha, which was last year at Next, the alpha interest was extremely big. 

We got a lot of customers who are knocking on our door and saying, hey, I heard you're deploying SQL Server. Can I try it? Can I actually be an alpha customer? 

So we had a lot of customers requesting the services. And turns out that many people, many of our customer running their analytics on BigQuery AI and machine learning, or using GCE, they have mission critical application running on SQL Server. 

And a lot of transactional data reside there. And think about if our SQL Server is running on different clouds, they also need paid egress charges to make the data coming to BigQuery or our GCE instances. So to avoid that, many people tried to migrate that. 

And also, another use case that we've seen a lot is that people are using SQL Server in on-premises, and they want to use cloud services for a quick testing in dev environments, because it's very easy to provision those services. 

BRIAN: Got it. I haven't talked about it too much, but I actually used to do a lot of work with SQL Server in a previous life. So I'm excited to see this. It's a really great database. 

One thing that I thought was super curious, is I notice the blog post highlights as the primary thing, a migration from SQL Server 2008 R2. Like, 2008. Really? 

AMY: Yeah. Surprisingly, 2008 version of SQL Server is the most popular version. So 60% of customers are still running in 2008 version. And that actually went end of life last year in March, 2019 March. 

But people are still holding onto it, because they are running a mission critical application on top of it. And this database migration is always painful. 

MARK: Yeah, I mean, obviously, it's kind of a testament to say that 12 years later, this is still one of the most used versions of SQL Server. And we know that a lot of enterprise apps are using SQL Server to power their database needs. So it's really interesting to hear about that. How is end of life going to affect new users? 

AMY: So a lot of customers are now looking to migrate those services. And obviously, Google Cloud really wants to provide opportunity for customers to migrate to Google Cloud SQL for SQL Server. 

And the really good news is that SQL Server is really backward compatible. So if you're running on 2008 version, you just need to take a backup and load that backup file on storage, and run it on 2017 version that we provide. And it just works. It's like magic. It's a great product. 

BRIAN: That is amazing. It's probably still true that they're doing this, but they actually run a compatibility lab where they restore backups and traces from real apps that customers have and run them through as they do new versions to make sure that everything works the same way. 

So maybe a lot of hard work on their part, but it's amazing. That's awesome. 

AMY: Yeah. And a lot of people are also asking question about why running Microsoft SQL Server on Google Cloud. They believe in multi-cloud. 

Running their cloud environment in the multiple cloud really hedges against anything that can happen in certain cloud vendor. So they want to run the Micro SQL Server on the Azure platform for their production workloads, but they want to keep the test and dev environment in Google Cloud and vice versa. 

So many customer are running those Microsoft workloads in different cloud vendors. 

MARK: Yeah, it speaks very well to what you said earlier about how, especially when you're looking at an enterprise who might have hundreds of applications out there on different clouds, you're going to want to be able to host your database close to your app so that you can minimize the time and cost of egress. 

So it's actually just more flexibility for people to run a wider variety of tools in Google Cloud, as well as all their other environments. 

AMY: That's correct. 

BRIAN: I think the blog post mentioned high availability work. There's something special going on in the Google Cloud SQL version. Is that right? 

AMY: Yes. So Google Cloud Cloud SQL for SQL Server provides built-in high availability, which is a really neat feature. So Microsoft SQL Server has always on feature, which is used for their high availability. 

It is a great product. It makes sure that the SQL Server is highly available in multiple regions. But it is quite complex to setup, and it comes with the additional licensing cost. 

So the way we're approaching high availability at Cloud SQL is we have a built in button called HA. And once you click it, we make standby instances right next to primary instances and do the asynchronous backup to those in the storage level. 

So neat part is that, because we are doing a storage-level replication, there is no additional licensing required to make this feature available. 

BRIAN: That's awesome. And it works reliably and everything? Because you're moving blocks around underneath, right? 

AMY: Yeah, that's correct. And we have a heart monitor so we check the primary instances every one minute and then make sure that if you don't see any activities happening in the primary instances, we auto-fail to the standby instances. So from the application side, they will not see any changes when the primary instance failed. 

MARK: It's a managed database server, so having this high availability option, obviously, is going to be something that a lot of larger companies are definitely going to be interested in having. 

What about resizing the instances? Or what happens when you've got one running for a while and you need to add more storage to it? 

AMY: Yeah, the storage also grows automatically. So it comes with a great Cloud SQL feature that happens across all products of the Cloud SQL. When you add more and more data into your databases, your storage grows automatically as the data grows. 

BRIAN: That's awesome. This all sounds really good. What gotchas are there? What things should people be aware of? 

AMY: Something about the maintenance. So Cloud SQL, obviously, we are working with a lot of open source databases as well as enterprise databases. So there is some maintenance work required. 

If the vendor published security patches or some upgrade, we need to also make sure that our customers are using the latest version and secure bits of the SQL Server. So there is some maintenance that will happen. 

But we do want customers to avoid any busy time of the week when the maintenance happen, because it requires so much downtime. So now we rollout a feature called Maintenance Windows where customers can select when the maintenance can happen, given a week. And they can select the date as well as a time. 

So it really works well for retail customers where they have a big instance like Black Friday. They can avoid those days for the maintenance. 

MARK: Yeah, it sounds really valuable. And I think that, overall, I mean, with high availability, with automatically growing storage, and then with the customization of maintenance windows, you've really got a solution here. 

And it sounds like this is-- all of the Cloud SQL, whether using MySQL Postgres or Cloud SQL for SQL Server, it sounds like, no matter what you're using there, you have all the flexibility to really run production workloads with it. 

AMY: Yes. We provide a really great feature as well as a really easy to use maintenance. 

MARK: So one of the other questions that usually comes up, especially for a lot of Microsoft products, is licensing. How does the licensing work for Cloud SQL for SQL Server. 

AMY: So Cloud SQL for SQL Server, we have a reseller agreement with Microsoft. So customers can pay for the Compute, the network disks, just like virtual machines. 

And then SQL license as a fee is built into per CPU core hour. So you can check out more details about the licensing fee on our website. 

BRIAN: But it's basically kind of a cloud-like billing. So you only pay for when you're using it? 

AMY: That's correct. Yes. 

BRIAN: Fantastic. 

MARK: Yeah, I mean, that flexibility in the cloud is so important, because, I think, Brian, you were mentioning earlier that some of the things you had worked with involved the need to spin up even a production quality SQL Server environment and then be done with it in 30 minutes. And that's not something you could really do beforehand. 

You needed to handle a huge license. You needed to have, obviously, the hardware available. So when we talk about the cloud flexibility and easy to scale, having SQL Server fall under that same category, I mean, that's just awesome. 

BRIAN: Oh, it's fantastic. And yeah, to go into a little more detail on that anecdote, we had multi-sites. We had a dozen plus sites that were all running SQL Server with MERGE replication between them. And you try to make changes to this environment, and it was extremely difficult to test. 

We, of course, had a SQL Server in the lab, and we'd bring it back up in there and run your code against it. But sometimes things happen in the more complex production environment that didn't happen in a lab. And being able to spin up a smaller version of things quickly or run tests more often-- in fact, I noticed just you can choose the different versions. 

So being able to test against the enterprise version for an hour and then just turn it back off would have been amazing. I don't know. That's how I would have used it. How are you seeing people use it now? 

AMY: We see large customers are using the same ways they are running their SQL Server, but migrating to the Cloud SQL for SQL Server in exactly the same way, running their mission critical transactional applications. But also, we see a large number of people using this for a test environment, like you mentioned, because it's so easy to spin up SQL Server instances. 

So what they do is, they just take a backup of their on-prem SQL Server and then load it into our Cloud SQL instances, and then test the new features there, and then, again, load it back to their on premises. 

MARK: When you're able to combine the Google Cloud flexibility and the ability to use different pieces of the cloud for short periods of time, combined with their already existing SQL Server apps, it sounds like it's a really good experiment for them to try out to really give people more flexibility about where they host their applications and kind of adopting that multi-cloud strategy. 

BRIAN: And this seems like a really good place to try things out, right. You don't necessarily like to move your production stuff over immediately. 

Run some tests. Run some tests environments. See how that works. Get used to it. 

Databases are super important, so you have to trust that it works reliably. This is a good place to get started. 

MARK: So what's coming up for SQL Server? Obviously, it just went generally available not too long ago, and people can get their hands on it now. But what can they look forward to? 

AMY: So a customer has two ways to run the SQL Server on Google Cloud. So many customers are running SQL Server on our Compute Engine. 

And then we also have a managed AD service available for those customers who are using SQL Server on Compute. 

And if you want to leverage a fully managed SQL Server like Cloud SQL, we will also have a managed AD coming up in the future, which will provide really great access control for SQL Server. Obviously, managed AD is a complex topic. 

BRIAN: So Active Directory-- I don't know. It's how Microsoft-heavy shops control identity and access, know who's who, that sort of thing. I think it's the kind of thing that you're either really excited to have managed or have no idea what it is. 

So if you're really excited about this, awesome. If not, maybe let your local IT folks know, and they'll be really excited. 

MARK: So one of the things you mentioned earlier was that you'd worked in a couple of different database shops, and you'd seen what it looks like to market to these people the multi-cloud strategy, right. Google's been talking about multi-cloud for a while. 

And I think we're seeing a lot of big enterprises looking to be more interested to what it looks like, how do we actually implement it, what are the steps there. Could you share a little bit of light, based on your experience, about where the value is and what the steps look like? 

AMY: Yes, so multi-cloud strategy is actually very, very important, because every company, every vendor has their strength. And it's really up to the customer to take advantage of the biggest strengths that they want to leverage, too. 

So rather than just focus on only one vendor and one product, it's really great to explore different type of product and then really find the one that's right for your customers and right for your use cases. 

The similar anecdote, like myself, I'm from South Korea, and I am married to my husband, who is from India. It is a multi-cultural environment. 

I'm having a great time, and as you can hear, I have a two-year-old son, which actually is really, really adorable and cute. So multi is actually a great way to go. [LAUGHS] 

BRIAN: Oh, fantastic. 

AMY: Yeah. [LAUGHS] 

BRIAN: Thank you so much for joining us, Amy. And I know I learned a lot. I hope everybody else did. Really appreciate you spending time with us today. 

AMY: Thank you. 

MARK: Thanks so much to Amy for coming in. Again, there is something very jarring in my brain about, oh, it's Microsoft SQL Server on Google Cloud. But I think at this point, she made some great points about why that would be available on Google Cloud and the benefit that it offers, especially to large-scale customers that have been running SQL Server for years and years. 

BRIAN: And like I said, most of the systems that are built on that or require it really need SQL Server. Often, it's just so nice to have that managed and handled for you. SQL Server's a really great product, and I love having it available for us. 

MARK: So hopefully people are super excited by that. And, to get people even more excited, I think it's time to go into our question of the week. 

[MUSIC PLAYING] 

So, Brian, the past couple of weeks, we've been talking about migration as a whole. The first thing I wanted to ask-- and this is going to be kind of a two-part question. The first part is, we talk a lot about terminology, and there's these terms like lift and shift, move and improve, re-architecting, microservices from a monolith. Give us a brief rundown, just real quick, on what those are. 

BRIAN: Yeah, totally. And I think lift and shift is almost a classic phrase at this point. And it basically refers to taking a VM that you're hosting somewhere, on your own data center or your own offices, and putting that in a cloud somewhere, right. So you're lifting it and shifting it to a cloud. And you don't really change much of anything else. 

And I think we're starting to use this phrase, move and improve, more. And it starts with basically the same thing. 

But the clouds, all of them have gotten so much better. So just by running the VM in Google Cloud, you get a lot of advantages. 

And so we want to talk about the moving and improving, where you don't actually have to change the application so much, but you get these extra advantages from being up in the cloud. And also, you're very, very close to getting additional things. So the improvements are incremental and closer at hand and easier to do. 

So we try to capture that feeling in the phrase, move and improve. And I think it's trying to capture-- we're always talking about the new shiny stuff, right. 

And you can put things in containers in Kubernetes and all the stuff. But there's a middle ground for a lot of applications that's really useful, and especially longer running things that maybe don't have full teams on them. And so you can get a lot of advantage there. So that's that move and improve sort of thing. 

And then even almost to turn it back, because you've been talking about microservices and other kinds of stuff, so you can go as far as you want on the kind of re-architecting later. And there's advantages to doing that, especially when you've got an active dev team on stuff or you're building a new part of a system or an entire new system. 

Looking at going-- people use the phrase, cloud native, right. So go as close to the grain of the tool as you possibly can. And I think that makes a lot of sense. But I think it makes sense to also just kind of look at each project you have and where it sits in there. 

MARK: Yeah, I mean, Priyanka gave some great advice last week about how to consider doing the re-architecture from monolith to microservices and what kind of things you should keep in mind. And as we know, that's not always possible for a variety of reasons. 

So that's, I think, kind of where this move and improve idea really comes in handy, is when you aren't able to do a full re-architecture. 

So can you tell us a little bit more about when the move and improve model makes the most sense and some of the tips for how you might do that? 

BRIAN: Right. I think concretely, for an existing system that is already running on a set of physical computers or virtual machines, it's almost always going to make sense to start by a straight up move and then an incremental re-architecting towards microservices, if that's where you're going, right. 

So no matter what, it's actually a really good place to start. Because otherwise, your reshaping your system and running it in a different environment at the same time. So you can separate those out, reduce risk, and get some advantages around backups, networks, monitoring, all kinds of stuff just right away. 

So you get less risk and you get more benefits earlier than if you try to do it all at once. So that's the core reason I think it makes sense to do that. 

There are cases where you may essentially stop there. But you get a lot of advantages, even if you do that, right. 

So there's cases where you either don't want to or can't touch the code that the system is made up of. Like maybe there isn't a development team on it anymore. Maybe the software that's running is something you bought or the like, right. 

It may also be that it's not the right time. It's this thing you intend to do at some point, but other stuff is higher priority. And you want to get the most value you can out of it, but this isn't the right time to do that particular project. 

But it still needs to be more reliable, faster, backed up, maybe monitored the same way and then all kinds of other variations around that, right. Basically, there's some sort of constraint, whether it's policy, time, money, priorities. Whatever it is, you may not be able to change all the things the way you want to right away. 

So it makes sense to do this. Should we get into the details of how that is actually done, in concrete terms? 

MARK: Yeah. I mean, I think there's a lot of confusion around, do I just export the disk file for a VM and move it onto Google Cloud? Will that let me capture all the benefits of being in the cloud? Or at that point, am I just lifting and shifting? 

BRIAN: Right. And so let's get to that-- like you mentioned, disk images. What does it actually look like to do this? 

So first off, I'm going to say, if you have software that you already have a recipe for how to install it, or maybe you've got some scripts for how to install it, or you're using Terraform or something, you should use those to recreate the virtual machines in a new environment. Because you already have this kind of automation, programmability. It's going to give you more flexibility in the long run. 

That said, there's a lot of systems that have been set up by someone else. Maybe you've inherited it. It's your responsibility to keep it running now, but it's unclear exactly-- I've been in this situation. 

You're like, eh, there's a lot going on in this machine, and I'm not going to touch it. Or it's just not the right time, or what have you. 

So in that scenario, if it's already running in a VM, you've got a lot of options, actually. So you can essentially export that disk and then move that disk to Google Cloud. You basically upload it to cloud storage and run some commands. 

And you can turn that into a disk that's in our VM area and start a VM from it, or start a VM and add that as a data disk. Either way. You can move it that way. 

Additionally, using what we talked about earlier, machine images now, you can actually take a more complex configuration of maybe multiple disks or some other configuration of information from a virtual machine and actually take that entire virtual appliance file-- so if you have a file that's in an OVA format or OVF, you can take those files and base a new machine image off of that. 

If you're either not running in VM-- like you're running on physical machines-- or you want more nuanced control over this process-- maybe you can't take the machines down so much, or you can't afford a lot of downtime or a few other scenarios-- you can actually use some technology from Velostrata that we acquired, that is now called Migrate for Compute Engine. 

And that installs software on both ends, does a lot more active moving of the data. So it's actually doing live streaming of the blocks. 

And I encourage you to look at the whitepaper that's in the show notes here for full details, because it actually does a lot more than you'd expect and gives you much more control over when, how you actually move authority over between these things. 

So it's copying a system while it's running and letting you move the traffic over or move it back, things like that. And all of that on a system that you may not be able to peek into or know the exact state of it. Even if you don't completely understand all of the things that are going on inside there, you can reliably move it from one place to another. So I think it's pretty exciting. 

MARK: So there's a lot of options there. And you can use a combination of all of them depending on your situation. 

So if you've just got some very basic machines, then you can probably just get their images and upload them, like you said earlier. Or you can go the more complex route and move over the appliance as a whole. 

Or even do these other migrations. I know that the Velostrata technologies also has converting VMS to containers and then hosting those on Kubernetes. 

There's a couple of blog posts out there about migrating for GKE and what that looks like. So I think it's very cool, but it does kind of the same thing. 

You don't see as much of the actual stuff being done, so it's a little bit more of a black box. But it basically takes your virtual machines and turns them into a container. So it's very, very cool, but it's also very complicated. 

BRIAN: That's amazing, and I need to dig into that more. 

But I really encourage people to give this a try. And if you're trying just a proof of concept, like a straight restoring of a disk to there and make sure things work, I think it's really worth doing. 

And when you do, you basically get the advantage of being on the same networks that we use to serve YouTube, right. So your applications are going to have lower and more consistent latency for your users. 

You've got a bunch of options around backups. You can automate snapshots. You can, like we talked about before, have disks that actually live in multiple zones within a region at the same time. 

If you're using other things in cloud, you can use the same monitoring and alerting you're using via Stackdriver and the logs there as well. 

And then it just brings you close to all of our data tools for the machine learning and AI bits or BigQuery for some ad hoc analysis of logs and the like. Everything's just kind of close. So-- 

MARK: The moving helps you then with improving. 

BRIAN: Ding. 

MARK: That's why they call it move and improve. Well, that makes a lot more sense. 

Thanks so much, Brian. And of course, we will have a huge collection, I think, of links in the show notes for people who want to read more about the variety of different methods we talked about. Or even, like you said, just try it out for yourself. Depending on your situation, there's a lot of options. 

Awesome. So before we wrap up, Brian, what cool projects are you working on right now? 

BRIAN: Yeah. So as you maybe are able to tell, I'm kind of into VMs. And I think there's a lot of folks at different organizations who like, maybe you're the only person at the organization who really cares about it, or there's a few of you. 

And I'd like to try to gather folks together in some sort of online fashion and do sort of a reading group. Maybe we pick a blog post or recipe or something and try it out and see how it works, or share lean coffee style, where people bring topics and go around the room and talk about what challenges they're having. And other people can just share their experience with working with those sorts of things. 

So I'm going to try to get a group of VM lovers, or people who want to get better and better at VMs to help their organizations out. 

So it's very much in the brainstorming, forming kind of stage. So if this sounds interesting to you, please drop me a note on Twitter, and we'll try to get a small group together, and iterate on it, and make it useful to everybody. 

MARK: Yeah, I mean, that sounds like a great idea, especially now when we're doing a lot of different forms of interaction for people. Especially over online, hanging out, I think it's pretty cool to have, like you said, kind of like a coffee chat. 

BRIAN: Exactly. How about you? 

MARK: Well, I mean, again, in this world of online content, I am creating more videos. And of course, super excited to work on some videos that are actually going into the Next digital experience as well. 

So as for people who have been to Next before, we had a lot of cool physical showcases that were on the show floor that you could touch interact [INAUDIBLE]. And that's a little tougher now that we are going to a digital event. 

So we're all working pretty heavily over the next couple of weeks to see what that looks like and try to bring as much of that to the digital experience as we can. So super excited to be working on stuff for Next. 

BRIAN: Awesome. Looking forward to seeing how it turns out. 

MARK: Awesome. Well, thank you so much for joining me, my resplendent colleague, Brian. I may have been thesaurus-ing while we were recording. 

BRIAN: Wow. 

MARK: And I just love saying resplendent. 

BRIAN: It's a fantastic word. 

MARK: Right? And so therefore, you will always be resplendent. Well, you already were resplendent. You don't need me to call you that. 

BRIAN: Insert glorious thesaurus word here. Thank you, Mark. Thank you, everybody listening. See you next week. 

MARK: See you. 

[MUSIC PLAYING]