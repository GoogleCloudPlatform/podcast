+++
audioDuration = "00:36:32"
audioFile = "Google.Cloud.Platform.Podcast.Episode.277.mp3"
audioSize = 52546606
categories = ["Storage", "Data Storage", "Filestore", "GKE"]
date = "2021-09-22"
description = "On the podcast this week, our guests Brian Schwarz and Sean Derrington discuss the ins and outs of the new storage launches with your hosts Stephanie Wong and Jenny Brown."
draft = false
episodeNumber = 277
hosts = ["Stephanie Wong", "Jenny Brown"]
title = "Storage Launches with Brian Schwarz and Sean Derrington"
image="/post/episode-277-storage-launches-with-brian-schwarz-and-sean-derrington/images/hero/hero-EP-277.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ptbs6i/episode_277_storage_launches_with_brian_schwarz/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, our guests Brian Schwarz and Sean Derrington discuss the ins and outs of the new storage launches with your hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Jenny Brown](https://twitter.com/jbrojbrojbro). Brian gives light introductions to the five facets of Google's data storage portfolio, like the primary storage solutions for files, storage of backups of data, and data transfer software and hardware.

Lately, the Google team has been enhancing existing data solutions and building new ones. Cloud Storage's multi-region and custom dual-region options easily let customers keep data safe and accessible. Our guests explain what happens behind the scenes to make these features so effective. Brian and Sean describe the user experience, including how clients can see when data is being replicated and where. New capabilities like Turbo Replication allow more modernization for clients moving to the cloud as well.

Sean talks about the new Filestore Enterprise, which allows companies to move critical apps to the cloud quickly and securely, and we learn why accurate, fast file and  data replication is so important for these large customers. If there is corruption or accidental deletion of a file, Brian and Sean tell us about the fail-safes that are in place and the process for recovery. Filestore Enterprise, Filestore Basic, and GKE working together offer a more customized approach for large clients, allowing them to allocate their critical projects to Enterprise and other less important applications to Basic. Stateful applications in containers are becoming more popular as well, and our guests tell us how Backup for GKE is the easiest way to protect GKE workloads.

##### Brian Schwarz

Brian has had 20 years in product management in data center infrastructure. Before Google, he spent time at Veritas, Cisco, and most recently Pure Storage.

##### Sean Derrington

Sean has spent 20 years in storage product management. Before Google, he spent time at Veritas, Exablox, and StorageCraft.

##### Cool things of the week

* Run code samples directly in the Google Cloud documentation [blog](https://cloud.google.com/blog/topics/developers-practitioners/run-code-samples-directly-google-cloud-documentation)
* Why representation matters: 6 tips on how to build DEI into your business [blog](https://cloud.google.com/blog/topics/research/6-tips-on-how-to-build-dei-into-your-business)
* Google Cloud announces new Cloud Digital Leader training and certification [blog](https://cloud.google.com/blog/topics/training-certifications/google-cloud-cloud-digital-leader-certification-and-training)
* Google Cloud Next [site](https://cloud.withgoogle.com/next)

##### Interview

* GKE [site](https://cloud.google.com/kubernetes-engine)
* Google Cloud Storage [site](https://cloud.google.com/storage)
* Filestore [site](https://cloud.google.com/filestore)
* Filestore Enterprise [docs](https://cloud.google.com/filestore/docs/enterprise)
* New storage features help ensure data is never lost [blog](https://cloud.google.com/blog/products/storage-data-transfer/google-cloud-expands-storage-portfolio-with-latest-launches)
* Announcing Filestore Enterprise, for your most demanding apps [blog](https://cloud.google.com/blog/products/storage-data-transfer/google-cloud-announces-filestore-enterprise-for-business-critical-apps)
* Announcing Backup for GKE: the easiest way to protect GKE workloads [blog](https://cloud.google.com/blog/products/storage-data-transfer/google-cloud-launches-backups-for-gke)
* Webinar: What's New with Storage at Google Cloud [site](https://cloudonair.withgoogle.com/events/whats-new-with-google-cloud-storage?utm_source=podcast&utm_medium=et&utm_campaign=FY21-Q3-global-PM973-onlineevent-er-storage_launch)

##### What's something cool you're working on?

Jenny is working on [Google Cloud Reader](https://feeds.transistor.fm/google-cloud-reader) and further audio formats for all your favorite cloud content.

{{< transcript "[UPBEAT MUSIC] STEPHANIE: Hey, everyone and welcome to episode number 277 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. Back again after a couple of weeks. And today, I am with G-G Gebru." >}}

GEBRU: It's me. Hey, happy to be here. 

STEPHANIE: So good to have you here. So Gebru, I know you have done a lot of work in this storage aura of a space at Google Cloud but what are we talking about today on this episode? 

GEBRU: We're going to talk about some really cool releases that just came up Prev Next and everything. Yeah, we've got some really cool storage launches that we're going to talk about, backup for GKE, Sim dual region stuff, filestore enterprise. Just a lot of really good things coming your way to make your life easier. 

STEPHANIE: Yeah, a lot of announcements that all came out in the span of this past week. And we're going to be talking to Brian Schwartz and Sean Derrington who are both in product management for storage at Google Cloud. So we're excited to get them on. But first, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

All right, so one of the most exciting cool things of the week that happened this past week that made a fairly big splash on social media was that you can now run code samples directly in the Google Cloud documentation. So that actually means that you don't have to leave the docs page, you can sign into your Google account, open Cloud Shell's online terminal in the documentation, and run code as if you were using it in the Cloud Console. 

So it makes it a lot easier by putting Cloud Shell at your fingertips. You don't have to switch contexts or switch between the documentation and the terminal Window to run commands. It even includes command line tools and programming languages already installed. So you don't need to track down libraries or deal with dependencies. So yeah, very exciting. Definitely encourage you all to just go ahead and go to the docs and try it out. 

GEBRU: Yeah, that's going to really help with the whole switching of Windows and all that. I can't even count how many times I've lost a Window and I've needed to beg for forgiveness as I scrambled to try and find it. Even just for myself, it really takes a lot of time. So I'm really excited about that. 

STEPHANIE: Yeah, we don't need more context switching because we have way too much of that on a daily basis. 

GEBRU: Exactly. I'm really stoked about the ebook that we've just recently released with some tips on how to build diversity, equity, and inclusion into your business. Because as most people know, those aren't just buzzwords. They're super critical components of workplace culture and that's what's really going to help each and every single one of your employees feel psychologically safe, and included, welcomed, and valued. They're going to understand what they bring to the table, and it's not just productivity focused, and it's not just visual focused either. It's actually a really important signal for healthy work culture. And when it's done right, it also does happen to create a thriving environment that's going to foster more engagement. 

It does have impacts on productivity as well and ultimately that's what's going to help people innovate. If they feel safe and if they're using tools also that don't make them take extra steps, they're going to have more time to innovate and they're going to feel more comfortable bringing their full selves to the table. And we can all derive value from that, from our customers to internally. It's going to be really, really helpful. So definitely check out that little free ebook that we've got going on there or like a little guide. It's got some pretty good stuff in there. 

STEPHANIE: I love it, yes. I think we can all agree a psychological safety and inclusion are so critical for a healthy work culture that we can all be proud of and feel really empowered in. 

GEBRU: Yeah, right? 

STEPHANIE: Yeah. So I have another couple that I wanted to quickly mention. Google Cloud just came out with a new cloud digital leader learning path. So in addition to the other certifications we offer, this one is designed to upskill individuals and teams that work with technical Google Cloud practitioners. So you can also contribute to these Cloud related business decisions. So go ahead and check out the blog post to learn more on how you can sign up for it. I've already seen a lot of positive feedback online. So go ahead and check that out. 

The next one I also want to mention is, yes, we've talked about Next a couple of times but it is coming up in a couple of weeks. So we came out with our catalog for our sessions online. Definitely, go ahead and take a look at them. I'm speaking in a few sessions, and you can also create your own custom playlist. I have mine up on my Twitter, if you want to go check it out, but go ahead and create your own so that when the event starts you can quickly Map out what you want to head to right away. And that's at g.co/cloud/next. All right, Gebru, I think it's time. 

GEBRU: Storage time, let's go. 

[MUSIC PLAYING] 

STEPHANIE: Hi Sean, Hi Brian. Thanks so much for being on the podcast. So for everyone listening tell us about what you do here at Google Cloud. 

BRIAN: Brian Schwartz, I'm in the product management team here at Google, work specifically on all of our storage and data storage products. 

SEAN: Sean Derrington, also in Google Cloud, product management focusing on our storage solutions. 

GEBRU: Very cool. And for those who might not know or haven't seen any of my videos, could you describe our storage portfolio a little bit? 

BRIAN: Sure. I'll jump in. We really have five areas of the data storage portfolio we really work on. The first three are classic primary storage options, block file and object solutions, Google Cloud storage, filestore, persistent disk, local SSD, really make up primary storage. We've spent a lot of time building out backup archive DR capabilities to protect the data. So in some senses that's the second most important thing in data. 

Of course, we also do quite a bit of work in data transfer. Helping customers move large sets of data to the cloud, data as gravity is an often used term that people use. So we have a variety of technologies we've built to help deliver that with hardware and software. And we have a pretty broad set of ecosystem partners we work with as well to augment our portfolio, to give customers choice. I think openness is a good attribute that we espouse here at Google Cloud and we really walk the walk. So we spend quite a bit of time working with a number of partners in all those areas as well. 

STEPHANIE: It's exciting to see how much our storage portfolio has grown over the past several years. And often when companies are thinking about Cloud storage is the first step on their pathway to Cloud. So this is a very foundational aspect of our product portfolio. So you're both here today because you want to talk about some exciting things that are happening in the space. Give us a sneak peek of what we're in for. 

BRIAN: So Sean and I are excited to talk about a number of, essentially, enhancements and innovations, and frankly new products we're adding to the portfolio. Three big elements, some big enhancements to Google Cloud Storage or object storage platform and two new products. One in the filestore area for file storage and another one essentially for backup data protection, specifically in the container area around GKE, our Kubernetes engine platform. 

GEBRU: Very cool. And now one advantage that our customers have had for years with Cloud storage specifically is the option for multi region or dual region. How many customers do you see that are actually using this option? 

BRIAN: It's really popular here at Google. The multi cloud and multi region obviously has a long history in content distribution. We have a number of customers that essentially distribute data around the world to consumers and things like that. So these multi region buckets have a long and successful history. Similar to how YouTube essentially operates, a number of our customers essentially have the same business models and do the same thing. Increasingly, dual region is being used by some of our analytics and AI customers to essentially ingest data in multiple regions and also take advantage of the capacity we have in multiple regions. So performance, load balancing, it also provides good disaster recovery for customers who want that extra kind of belt and suspenders model. They're super popular. 

SEAN: A lot of our customers they look at the multi region or dual region as a way to provide high availability and compute in storage where they need to. But in the event that anything would happen in a particular region, it's all a single bucket regardless of which regions the data is coming from. So from an operational standpoint, it makes it very, very simple for people to write to a bucket and if it's coming out of Toronto or another region in Canada or two different regions in the US, depending upon how they set it up, it's completely transparent to the applications. 

STEPHANIE: That's awesome. 

BRIAN: This concept of multi region and the dual region as a pretty long history in data storage. Even on premise customers have tried to do things like this with replication over the years with asynchronous replication. It's a very important and most companies figured out ways to do it. It's relatively complex because you had multiple independent systems that you're trying to stitch together, both storage and networking, because any kind of dual region or multi region has a lot of network and data transfer dependencies. So it's been an area of a lot of investment for most customers. 

And one of the things that Sean touched on, which I just wanted to echo, is the simplicity aspect of it. The term I like to use is continent size buckets. This is one namespace. It's one of these things that you get the scalability that Google built for themselves, built inside of these in a really simple to consume way. So you get the benefits of what you traditionally had tried to do but in a super simple way with these one namespace buckets that just span regions. It's just natively built into the systems. 

STEPHANIE: Yeah and this reminds me of a way that one of our colleagues here describes VMs because it's kind of a shift in mental model. But we were talking about how we're deploying VMs at Google. You can think of it like you're taking a slice of a data center or a slice of our overall global scale computing infrastructure. And I think it's a way that we can think of storage too. 

BRIAN: We have such an incredible technology foundation to build in Google Cloud just from the history that comes from Google. We have all these consumer facing applications that people have used with Maps and search that got this incredible infrastructure, data centers, and networks, and storage capability, and compute et cetera. And in Google Cloud, we've really been able to harness that and provide some of those capabilities to our end users in ways that's really unique and interesting. 

Distributed systems are really complex to build when you get really into details of how they're engineered. Google obviously solved a lot of those problems for some of our applications and we've been able to capture that and provide it to customers in really simple to consume ways. Most customers, to use the replication example again, would spend a lot of time and energy to set up, configure, monitor or troubleshoot these systems. Here, it's like a radio button in the Cloud Console. To turn it on it's so simple. People almost under appreciate what happens underneath the covers but it's just because we have this great foundation at Google to play with and build from. 

GEBRU: Yeah, that's one of my favorite things about Google Cloud is that we're giving the infrastructure that we've worked years and years to build and accomplish for all of these consumer products. We're giving access to other customers to use those. And there's nothing better than when an end user can take all of that complication for granted because they can just accomplish their end goal. That gets me every single time. 

Circling back a little bit, you all have mentioned how simple and straightforward this is, but when customers select those options, the data is being replicated across regions, as you mentioned, and how do customers actually know when the data has been replicated? And also, what happens if there's an impact to any one of those regions? 

SEAN: So that's one of the things from the simplicity standpoint is when they select the regions, one of the enhancements that we're making is that they can now select custom dual regions. So historically they've been able to select dual region and then we as Google will choose the appropriate regions and they're predefined. But with the custom dual region options, organizations can now choose which two regions they want to. 

So for data sovereignty purposes or I mentioned before about putting compute and storage close to each other, they can actually do that based upon where they're actually running their resources, based upon GPU availability and so forth. So what they know is that the data is going to be replicated there in those two regions all the time on a continuous basis. And that's one of the things that we do is we have strong consistency. 

And Jenny mentioned the applications we support for Google. This is the same infrastructure. We're supporting $8 billion plus users on so we know how to do this on a global scale. But now we're giving admins the opportunity to find which two regions they would like their Cloud Storage to reside in and that's going to be strong consistent. So they do have that confidence that the data is written to both locations consistently every time. 

GEBRU: Awesome. 

STEPHANIE: So how do we know when it's being replicated across both regions? 

BRIAN: We've had some new options about replication and how it's going to happen. Traditionally, in data replication there's these two important terms or concepts that people understand about recovery point objective and recovery time objective. The recovery point objective gets to the heart of your question, Stephanie, which is how long does it take to copy the data between the two sites? The reason it's important is if you ever lost one of the sites, you need to know how much data was potentially lost. That's why this recovery point objective or RPO is such an important concept to think about when you build any IT system, but typically Cloud systems. 

And we've introduced some new essentially capabilities to define what that RPO is. It's really innovative and unique in the public cloud and hyperscale industry to have defined RPOs backed by SLAs in object storage that traditionally is not the history that these technologies come from. So we're introducing turbo replication, which essentially is a 15 minute RPO backed by an SLA. So we've really put a lot of time and effort into the development of it to make sure you have enough compute in networking inside of our large data centers so that we can ingest your data. 

You might be ingesting a lot of data in one region and essentially we'll copy all that data to a second region and the custom dual region within 15 minutes, 100% of your data there. And that's really important because getting 99% of your data to a second location is not terribly interesting for a lot of enterprises, because that last 1% could be absolutely critical to managing their supply chain, managing our bank accounts, and other things like that. You've got to protect all the data, not just part of it. So there is still standard replication in place, but this new Turbo Replication is targeted tier one applications, more important production applications that are increasingly using object storage. 

It's another big trend as you see customers move from on-prem to the Cloud, is increasing use of object storage where they may have traditionally used file storage. So this really opens up more opportunities for app modernization and taking advantage of some of these new capabilities. 

STEPHANIE: That's awesome and honestly I love the name. Turbo replication, you can't get better than that. And, yeah, I think that this is all very supportive of this new and more robust SRE practice operations and building these strict RPOs at companies, especially in finance, health care, et cetera that need their data to be reliably in storage. So I want to move a little bit and talk about some of the other launches that you had introduced. Tell us a little bit about what else you have on the table. 

SEAN: The other big announcement that we've made is around file storage. Brian mentioned kind of lift and shift, but one of the things is organizations are looking app modernization as which applications are what slice, Stephanie as you said, of the VMs they're going to move to the cloud? And which ones are early candidates? Which ones are longer term candidates? And not everybody is going to be able to rewrite applications that take advantage of object storage and nor should they. 

So with files stored enterprise, it's actually where they can now have higher levels of availability and more enterprise rich features to move critical applications to the Cloud, SAP in particular. And so with filestore enterprise, they can actually have regional availability of four nines and design critical applications that run their business in a highly visual fashion which they have not been able to do before. And so now they can deliver the same benefits that they were maybe on-prem they can deliver those same things in the Cloud and have all the operational benefits of Google Cloud and the other things that go along with that to make that justification to say, yep, this is time to move a critical app into Google. 

GEBRU: Very cool. And the need to not really set all of those things up and it's just a matter of a few clicks of the mouse is invaluable. I would imagine. So tell us a little bit more about what that data replication means to customers. 

SEAN: The simplicity, Jenny, that you mentioned is one of the things that in about less than a minute you can create NFS share, name it, define what region you want it in and it's done and available for your applications. And underneath the covers, we're handling a lot of the complexity because filestores are fully managed NFS scale storage service. So with those few clicks of the radio buttons, we're actually replicating the data synchronously across multiple zones within a region for availability. 

So if you contrast that with the typical way of setting up a dual controller on-prem and synchronous replication with campus clusters, that's extremely complex to make sure you have all the lines and the volumes assigned correctly and set up appropriately for that data and continuity and that high availability. But with filestore enterprise, it's a few clicks. And from the operational simplicity, you can certainly do that with an enterprise. But the same APIs that you've been using maybe with filestore basic or filestore high scale in the past or gcloud APIs, they are all identical across the product family. So you take each slice of your applications. 

They may have different storage requirements and some people may want filestore basic for things but people may want the high availability of enterprise, but they don't have to change the way that they've been managing storage over time. So it helps to drive down those operational costs for doing things the same way repeatedly for different applications. 

STEPHANIE: That's incredible, yes. Having a single, unified experience is key here and I could see that's happening across our product portfolio, not just with filestore enterprise, filestore basic et cetera but across many more of our analytics products, vertex et cetera. So going back to just talking about data replication in this space, what does data replication actually mean when it boils down to talking about customers? 

SEAN: So I would say the data replication, Stephanie, really has to do with what SLA Google Cloud is going to deliver to customers. So they can design their applications with four nines as an SLA. So there are teeth behind the SLA that we're saying that file system is going to be available 99.9% of the time. So in the event that your application is accessing the data-- So take SAP as an example again, that middle tier, that application tier, customers want to design a NetWeaver application to be highly available. 

So if something impacts one zone within a region, the other NetWeaver apps and the other zones within the region continue to process SAP's critical functions and the business keeps going. And that's what we do underneath the covers with filestore. So what it means to the business is that there is no failover operations, there's no RPO or RTO they have to go through if there's a zonal impact within a given region, because of this high level of availability that we're providing. 

BRIAN: Yeah and it just may be tied to another part of the Google portfolio. The persistent disk offering we have it's another part of our storage portfolio. For block storage we have an offering inside a persistent disk called regional PD that essentially synchronously replicates data. It copies data to two zones. Every time the application writes, we essentially say mirror the right and send it to the second zone. 

So if you ever lost an entire zone, let's say there's some massive natural disaster or something like that, I guess the proverbial network cut, somebody does construction outside the building and somehow cuts all the connections to a given zone, that you have all the data in the surviving zone, such applications like SAP can keep running. It's really just about protecting and insulating the users of these applications and the business workflows that sit on top of them from any kind of physical errors and things like that that could happen to these systems. 

And the filestore enterprise essentially brings that same type of capability to the file area. And it has another set of use cases because there's a bunch of applications like Sean mentioned, like SAP and a bunch of other traditional enterprise applications that need a file interface. They need to share files between different parts of the application, the apps communicate through the file system essentially, or they're codified to back up their data into a given file system and recover data from it in workflows. So it's really about just providing that type of capability in this new filestore enterprise offering. It's similar to regional PD but extends the filestore capabilities in a very similar fashion. 

GEBRU: So you mentioned the high availability and the data replication, but what if something actually happens? What are the options then for the users? 

SEAN: You mean that if somebody accidentally deletes a file or the application corrupts it? Yeah, that's a problem. So what we've done with enterprise is we actually now enable customers to take snapshots of their file system. And so admins can take snapshots whenever they like to and they can keep those recovery points for n period of time, depending on what they want to do. But the ease of use that we've done is we've actually provided them the ability to go back and recover an individual file or an entire file system in less than 10 minutes. And that's actually pretty substantial, because when you start looking at the capacities that the file systems can be, start talking about multi terabytes and 10 terabytes file systems, recovering all of that in less than 10 minutes is pretty substantial and pretty significant than what people are used to. 

So they can roll back to any prior point in time. So thinking about the unthinkable as you mentioned, Jenny, well, if something happens to the data. But you may also want to just test stuff. So what if I iterate on this and I want to roll back to the prior good known point? And it was all part of my intention. It gives admins an easy way to do that. 

BRIAN: I was just going to add one point to Sean's comment about snapshots. An easy way to think about the difference between replication and snapshots is replication is often used to protect against physical failures, physical outages, loss of zones. It's important to have protection from these types of things, the proverbial network cut. Snapshots essentially can protect you against forms of logical protection, corruption of data, human error, proverbial deletion of the file by accident, failed software upgrades, you need a roll back point. 

So in some senses, replication and snapshots complement each other. They provide a similar type of capability. They're all about copies of the data, but they really serve different use cases or different scenarios that exist, in forms of upgrades and physical oddities and stuff like that. So they're very complementary. And the nice thing with files for enterprise is essentially covers both use cases. It's inherent inside the offering that you get the capability to use both of these. 

GEBRU: That's awesome. And they seem to work in less time than you'd have to even freak out about the problem to begin with, which is always a benefit. 

STEPHANIE: Yes, we can all understand how painful it is to experience corrupt files and how frustrating it can be-- how long it can take to recover those files. But to know that you can get terabytes worth of data in 10 minutes it's honestly very impressive. So congrats on the ability to achieve that with our new launch here. Earlier, you were talking about SAP a little bit Sean, and how high availability is, of course, very important for these critical applications, but what other applications is filestore enterprise well equipped for? 

SEAN: So one of the things that we've been doing with filestore is we've been working with GKE workloads. And a lot of times, organizations have stateless applications and they've designed it such that that's perfectly fine to do where if the application fails, the storage fails, you just rebuild it and you're off and running and that's by design. This is one of the advantages of containers. But more and more we're seeing customers run stateful applications in GKE, which means that they now need to reconsider in some cases the storage that's going to support those applications. 

And they can certainly use local SSD and persistent disk with GKE, which a lot of customers do. And customers have been using filestore basic for a long time with GKE as well. And that just really all depends upon what types of applications you're going to run. In GKE, they're going to require you to block or file storage. But now with filestore enterprise, it gives customers another choice of, if I'm going to run a critical application in GKE, I need that high availability and I need the snapshot recovery that we just spoke about. So now, I can support more applications that are more important potentially to my business with filestore enterprise but I could also use filestore basic for maybe less important applications that don't need that same level of high availability that we spoke about with enterprise. 

Also, coming back to what applications need what type of storage, it may be object storage. So with Cloud storage, they could do that as well. And so if you think about the high availability of filestore enterprise with pod failovers and the regional availability, they may design the same thing with object storage. Just all depends upon the application type and the appropriate storage is going to support those. 

GEBRU: Yeah, I love how it's always a conversation. It's not just a one size fits all situation. It could be but it's a one size fits exactly what you're going to be needing to do. We're going to give those folks the options to match things they don't have to rewrite applications or do any of that mess, which really does double down on the simplicity when you think about it, which is always wonderful. So you told us a little bit about GKE and stateful applications, do they need backup? 

BRIAN: They absolutely do. And increasingly they need more backup because as Sean mentioned, we're seeing more and more stateful applications in containers. So essentially stateful meaning there's data storage happening there that you care about. Databases, we're seeing increasingly open source databases, MySQL, PostgreSQL, things like that running in containers, things that traditionally ran in VMs and were protected through VM backups now are being moved over to containers to take advantage of all the awesomeness of GKE and the flexibility and agility that it gives you from software development. 

As the stateful applications and databases move over, you need to protect them similar to how you protected them in the past in VMs. And that really gets the third part of the announcement in the new products we're bringing. So we have a new product that we're introducing, Backup for GKE. Essentially, it's an extension to the GKE platform. Although it's a new product, when you look at the UI, it's just another option in a menu to take advantage of that allows you to set some simple policies that are regularly going to take snapshots of the data. So you have these protection points, you can roll back to them. It protects not only the data in the database, but also the cluster configuration itself. So like how the Kubernetes cluster was actually set up and configured. 

So like in the event of a disaster, if you ever had a situation where an entire region went away, you have all the data you need in the snapshot as well as the configuration of the cluster. So you could restart the cluster in another region in Google. And the disaster is the easy thing people talk about. I like to think about a big natural disaster. In many cases, that's not the thing that happens is common or the reason these used are much more about, hey, I'm moving a bunch of applications to another region. I have another data center. My company acquired another company and now they have a data center on the East Coast where we used to be on the West Coast, and we're going to try to move a cluster over there. Things like that happen. 

We're having easy checkpoints to basically capture the data. And the cluster configuration just provides good protection and flexibility for customers to accomplish these tasks. And that's really what the backup for GKE offering is really designed to do. 

STEPHANIE: So one, that's fantastic, but two, I find it interesting because I know that one of the big pushes behind Kubernetes, initially, at least, was this idea of having a modular microservice based architecture that was stateless in nature. And so I'm curious, how popular are stateful applications running in containers these days? 

BRIAN: There was a Cloud Native Computing Foundation survey done last year. That one showed this 50% of the people in the survey were running stateful applications. Certainly, we're well known for Kubernetes here at Google, have a long history in the space. The stateless facet of microservices are not going away but you're increasing use of these stateful applications. And we have so many customers for Kubernetes. We've obviously saw this trend a while ago, designed a system, sent wicked smart engineers off to go build it, and that's why we're excited to talk about it's available. And basically customers are going to have access to it today. 

And we see the trend accelerating as more and more applications come over from VMs and traditional, on-prem data centers into the Cloud, they are increasingly getting modernized, they are trying to take advantage of these microservices and fast development cycles. So it's 50% today, but if I had to hypothesize, the number is going to be even higher next year and the year after. 

GEBRU: It's neat to see the way that things are progressing. And now in your words, why would you say that the new backup feature for GKE is interesting? 

BRIAN: To me, it's really about simplicity. And I think across a couple of the topics we've talked about today, we've echoed the simplicity term, it's really important to us here at Google. And for backup for GKE, it's just natively built into the system. It's so easy to use and consume. It's so much easier I think than traditional environments where you had to just buy separate products and have maybe a lot of different vendors in place and every system had its own terminology and learning to do. And you really needed this like vast set of experts that were really nuanced in all these different technologies. We've really made it easy, so you don't even need to be a backup expert to take advantage of this thing. 

You can be a Kubernetes admin who maybe thinks a lot more about the application tier and take advantage of backup for GKE, because it's just kind of built in and integrated into the Console. And I think that just pervades the overall theme of the storage investments, but also just more broadly here at Google about trying to make the complex simple. Technology is pretty complicated when you really get down to it and we really want to try to simplify that and make it easier for people to build and run these applications so they can focus on their applications and their business and less about the gory details of IT infrastructure. 

I work on data storage, our goal is to put ourselves out of business at some level. So you don't even know it and think about it. That's really the ideal state, because customers want to spend less time managing storage. And it's our job to try to build capabilities that just make it work easier so they just spend less time thinking about it. 

GEBRU: Yeah, less time managing and more time innovating which is, honestly, if we're working to put ourselves out of business in a way that that's pretty much what we're doing too, right? 

SEAN: Yeah and in addition to the simplicity that Brian mentioned, it's also the trusted aspect of it. So as customers are deploying applications and moving them into the Cloud, they're going to run historically stateless applications at GKE. But they still have stateful applications are really important that they haven't been able to provide the storage and the data protection services to run in GKE. So they have to run them outside of GKE. 

They're running them in the compute engine and then they're tying it all together, which is fine and it's certainly worked for a long time, but now they have that trusted aspect to be able to use filestore enterprise for the availability of the storage. The snapshots of the file system they can back up the GCC infrastructure. So now they can begin to move all of the applications and all proverbial-- Not every application but now they can begin to rethink how they can deploy applications that best suit themselves to use Cloud native technologies, to deliver more operational benefits, and business benefits to their company. 

BRIAN: It's kind of an overwrought term, but I'm going to say it anyway, data is the most valuable asset in most companies. It's the one thing that is 100% unique to your company, your customers, your supply chain, your intelligence about how your business runs. It's irreplaceable. If you ever lost all the data in a company, the company would probably go out of business in many situations. You can recover from availability problems, outages as painful as they are, as awkward as they are and impactful to end users and customers, they pale in comparison to actual true data loss that you can't get back. 

And that's why, look, we spend a lot of time here at Google protecting data. And a lot of these offerings that we're coming out with today, yes, they're simple to use but the main theme is building a trusted foundation for you so you never lose the data and you have the appropriate options that you need to tune the data protection for the different applications that you have in your environment. Because that is the heart of the company at some level is this data and we take the responsibility of protecting it incredibly seriously here at Google. 

STEPHANIE: Yeah, I mean, absolutely, data should be treated like a company's golden goose and it should be protected. And I also agree, I think backup is not going to be a company's competitive advantage and yet it's so essential and necessary to get right. So these launches absolutely act as a huge unblocker to not only migrate to GKE, but also really expand their ability to reach RPOs and their own SLOs for data protection, as well as utilize these new features in filestore enterprise. So for all of these that you've just mentioned today, where can people go to learn more about these launches? 

BRIAN: The best place is obviously the Google website, new product pages, but importantly, we've posted some blogs on the Google Cloud blog to encapsulate the offerings. But there's also a live webinar we're going to do in the middle of October. If you're listening to this before then you can go and look at the bottom of the link. There's a reg link to go and register for the webinar. Come here from some of the engineers and other folks who actually built these products, here's some interesting customer stories about some of the early access customers who had access to these and have used them, why they're using them, how they're using them. And if you listen to it after October 6, we'll obviously have a recording available, a webinar so you can get access to it on the bottom of the blog as well. 

SEAN: And then one other area you can look is actually filestore enterprise. I did a session at Next with SaberRD. So depending upon when you're listening to this it'll be October 12th and you'll hear how SaberRD is actually going through their IT modernization and looking to leverage filestore enterprise. 

GEBRU: Very cool. Thanks for that. And we will be sure to have all those links in the description available to you to make things a little bit easier. And now, is there anything that we've missed or anything that you want to mention before we go ahead and wrap things up? 

BRIAN: No, just big thanks to everyone who's listened to the podcast. Hopefully you learned a bit more about some of the options you have here on Google to simply protect and trust us with your data. So thank you so much. 

STEPHANIE: All right, well, thank you so much Brian, Sean and we hope to have you back on soon. 

SEAN: Yeah, thanks Stephanie. Thanks Jenny. 

BRIAN: Thank you. 

STEPHANIE: Bye. So I loved learning about those storage launches because not only do we hear about one launch in the span of a week but we had over three-plus feature launches across the gamut of storage products here. So obviously they've been doing a lot of work the past 6 to 12 months and it's not even Next yet. 

GEBRU: We've got a lot going on. And all of it really does support those applications that need high availability. We know that you can't just compromise when you make moves to the Cloud and all these launches really address individual issues in a big way that are going to make modernization journeys so much easier across the board and much more impactful for enterprises as well. 

STEPHANIE: So first off, just my thoughts on the dual region GCS buckets, it's based on Colossus and Spanner which we've developed internally and what it gives you, which I love this terminology or phrasing, a continent sized storage system. So essentially you get a single namespace, a.k.a. a bucket that spans regions. And yeah, I just love that you can treat it like a continent, as a single bucket and it really simplifies the application programming model. 

GEBRU: It's really, really nice. 

STEPHANIE: And then secondly, the custom region selection is very impressive, not only because it allows you to now select your own region pairs, but you can more easily reach your regulatory and compliance requirements and optimize your application performance. So let's say you're a financial company working with market data in Frankfurt or London, then you can choose regions that meet those data locality requirements that need to be near those locations. 

GEBRU: Yeah it's really cool. And we had that dual region before. Google Cloud used to automatically select those regions for you or present those pairs for you but now you get to choose. So it actually suits your business needs, which is really, really cool. And I absolutely love all of the backup and recovery solutions that we've got going on now, which previously you would have to do some custom code or piece things together if you wanted to do an on-prem or Cloud solution. 

The hybrid approach was fine, but these backup solutions really, really do suit the majority of needs for folks without having to add a ton of customization for them internally. So we've got the files to enterprise snapshots, which are going to help you recover an individual file or an entire file system in less than 10 minutes from any of the prior snapshot recovery points, which is so incredibly powerful. You don't need to deploy all these gigantic disaster recovery solutions. You're able to just, boom, get it done. 

STEPHANIE: Yeah, absolutely. And what I find super impressive is the GKE backup solution just solidifies the fact that GKE is really maturing for a stateful workloads. And so we're going to see making, restoring those stateful workloads much simpler and faster. So, yeah, excited about that. So Gebru, thanks for hosting but everyone's curious, what are you working on these days? 

GEBRU: Well, for a change of pace I do have that Google Cloud reader podcast which has been going on for a little while. Still really excited about it and we're going to be expanding the audio format in the coming months as well. So please do stay tuned for another way to consume your favorite Cloud content and listen to my voice even more. 

STEPHANIE: Yes Gebru, you have another podcast. So everyone check it out. We will include the link in the show notes. And remember Google Next is coming up soon and we're both excited to see you all there. Thanks again, Gebru, and see everyone next week. 

GEBRU: Absolutely. Glad to be here. Bye y'all. 

[MUSIC PLAYING]