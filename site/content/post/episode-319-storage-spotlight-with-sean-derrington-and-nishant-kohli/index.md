+++
audioDuration = "00:30:58"
audioFile = "Google.Cloud.Platform.Podcast.Episode.319.mp3"
audioSize = 44613739
categories = ["Storage", "Product Launches", "GKE", "Enterprise", "Security"]
date = "2022-09-14"
description = "Host Stephanie Wong chats with storage pros Sean Derrington and Nishant Kohli this week to learn more about cost optimization with storage projects and exciting new launches in the storage space!"
draft = false
episodeNumber = 319
hosts = ["Stephanie Wong"]
title = "Storage Spotlight with Sean Derrington and Nishant Kohli"
image="/post/episode-319-storage-spotlight-with-sean-derrington-and-nishant-kohli/images/hero/hero-EP-319.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/xe7adw/episode_319_storage_spotlight_with_sean/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Host [Stephanie Wong](https://twitter.com/stephr_wong) chats with storage pros Sean Derrington and [Nishant Kohli](https://twitter.com/NishantKohliIoT) this week to learn more about cost optimization with storage projects and exciting new launches in the Google Cloud storage space!

To start, we talk about the Storage Spotlight of years past and the cool Google Cloud products that Google is unveiling this year. Optimization is a huge theme this year, with a focus not only on cost optimization but also performance and resource use as well. Enterprise readiness and storage everywhere, Sean tells us, are the  most important pillars as Google continues to improve offerings. We learn about Hyperdisk and the three customizable attributes users can control and the benefits of Filestore Enterprise for GKE for large client systems.

Nishant talks about Cloud Storage and how clients are using it at scale for their huge data projects. Specifically, Google Storage has been working to help clients with large-scale data storage needs to optimize costs with Autoclass. Storage Insights is another new tool launching late this year or early next year that empowers better decision-making through increased knowledge and analytics of storage usage.

GKE storage is getting a revamp as well with Backup for GKE to help clients recover applications and data easily. Google Cloud for Backup and DR helps keep projects secure as well. This managed service is easy to use and integrate into all cloud projects and can be used with on prem projects and then backed up into the cloud. This is ideal for clients as they shift to cloud or hybrid systems. Companies like Redivis take advantage of some of these new data features, and Nishant talks more about how Autoclass and other tools have helped them save money and improve their business.
 
##### Sean Derrington

Sean is the Group Product Manager for the storage team. He is a long time storage industry PM veteran; he's worked on Veritas, Symantec, Exablox (storage startup).

##### Nishant Kohli

[Nishant](https://twitter.com/NishantKohliIoT) has a decade plus of Object Storage experience at Dell/EMC and Hitachi. He's currently Senior Product Manager on the storage team.

##### Cool things of the week

* Cloud Next 2022 [site](https://cloud.withgoogle.com/next/register)
* Integrating ML models into production pipelines with Dataflow [blog](https://cloud.google.com/blog/products/data-analytics/influsing-ml-models-into-production-pipelines-with-dataflow)
* Four non-traditional paths to a cloud career (and how to navigate them) [blog](https://cloud.google.com/blog/topics/training-certifications/cracking-the-google-cloud-career)
 
##### Interview

* What’s New & Next: A Spotlight on Storage [site](https://cloudonair.withgoogle.com/events/storage-spotlight)
* Google Cloud Online Storage Products [site](https://cloud.google.com/products/storage)
* GCP Podcast Episode 277: Storage Launches with Brian Schwarz and Sean Derrington [podcast](https://www.gcppodcast.com/post/episode-277-storage-launches-with-brian-schwarz-and-sean-derrington/)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Filestore [site](https://cloud.google.com/filestore)
* Filestore Enterprise [site](https://cloud.google.com/filestore/docs/enterprise)
* Filestore Enterprise for fully managed, fault tolerant persistent storage on GKE [blog](https://cloud.google.com/blog/products/containers-kubernetes/gke-and-filestore-enterprise-better-together)
* Cloud Storage [site](https://cloud.google.com/storage)
* Cloud Storage Autoclass [docs](https://cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.storage.v2.Bucket.Autoclass)
* GCP Episode 307: FinOps with Joe Daly [podcast](https://www.gcppodcast.com/post/episode-307-finops-with-joe-daly/)
* Storage Insights [docs](https://cloud.google.com/recommender/docs/insights/using-insights)
* GCP Podcast Episode 318: GKE Turns 7 with Tim Hockin [podcast](https://www.gcppodcast.com/post/episode-318-gke-turns-7-with-tim-hockin/)
* Backup for GKE [docs](https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/concepts/backup-for-gke)
* Backup and DR Service [site](https://cloud.google.com/backup-disaster-recovery)
* Redivis [site](https://redivis.com)

##### What's something cool you're working on?

Stephanie is working on new video content and two [Next](https://cloud.withgoogle.com/next/register) sessions: one teaching how to simplify and secure your network for all workloads and one talking about how our infrastructure partner ecosystem helps customers.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode 319 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and today I'm here with-- drum roll, please--" >}} 

[DRUM ROLL] 

--Stephanie Wong. 

[RIMSHOT] 

[LAUGHS] 

Yes, you are all in for a treat because it's just me here today, hosting. But hey, I'm here on every other week or so anyway. And you know, I think my teammates needed a well-deserved break. They're either in the heat wave of California that we just had, and they're out on a pool. Or they went to Burning Man, or they just plain wanted to take an extra few days off for Labor Day. So I don't blame them. 

But we have some great content up here today. We-- I, should say-- just had a great conversation with Sean and Nishant, who are the product leads for our storage products. And if you're thinking storage, really? Well, we had a lot come out. We just had a storage launch day or storage spotlight, if you will. It's this event online, and they both had some great presentations about some of the biggest launches of this year so far. 

And so they're here today to talk about any and all things storage-- block storage, object storage, storage for GKE. There's a lot going on. So we're going to get them in here in just a second. But of course, even though it's just me today, I'm not going to skip out on the Cool Things of the Week. 

[MUSIC PLAYING] 

First Cool Thing of the Week is something that I cannot, cannot forget to mention. Google Cloud Next is happening-- yes, virtually, still. But it is open and available to register for online at cloud.withgoogle.com/next/register. Yes, we're going to have that link in the show notes as well, or just search Cloud Next Register. 

And you're going to be able to, for free, join us live online along with 1 million builders, dreamers, leaders for Google Cloud Next, 2022. And we're all going to learn and grow together to take on what's next. Again, access is complementary. I am going to be in a couple of the sessions. I'll let you know in just a little bit about which ones those are. But yeah, definitely don't miss it. We have more launches on top of what we are talking about today for storage. 

Now, I have two other Cool Things, because it's me and I can do whatever I want today. So my next Cool Thing is a really awesome blog post by one of our developer advocates for Dataflow. Dataflow is one of our data analytics tools for batch and streaming. And Dataflow recently announced the general availability support for Apache Beam's Generic Machine Learning Prediction and Inference Transform. It's called RunInference. 

So in this blog post, they take a deeper dive on that Transform capability. And you're going to go through an actual full-blown example and walkthrough of how you can use RunInference to transform and remove large chunks of boilerplate data pipelines that incorporate machine learning models. So take a look at that. It's very detailed. And if you are in the data engineering world, you're going to love this because it will expand your capability to be able to do machine learning in production. 

And then the last Cool Thing of the Week that I want to mention is just a fantastic blog post written by Forrest Brazeal. He's the head of content here. He actually had me featured and one of the videos that I wrote about how to get into Cloud from non-traditional backgrounds. But that is just one video in a series. There are a bunch of videos talking about how you can get into Cloud from IT, how you can get in Cloud from Help Desk and how you can get into Cloud without a degree. 

Priyanka did that video along with Forrest and a couple of others in our team. So definitely don't forget to check that out. If you're interested in getting a career in Cloud, these videos give you some actual, tactical tips. Forrest has a lot of background in this area so check out the blog post for a series of them. All right. Well, that's enough cool things for one person, I would say. So let's go ahead and dive into our conversation about storage with Sean and Nishant. 

[MUSIC PLAYING] 

Sean and Nishant, thanks so much for joining for another exciting Storage Launch Day. 

SEAN: Thanks, Stephanie. It's great to be back on the show. Hard to believe it's already been a year. 

NISHANT: Yeah. Thank you, Stephanie, for having us. 

STEPHANIE: Yes. We've had Sean on last year for the inaugural Storage Spotlight. And this time around, we're having the second time around, none less exciting than last year. Nishant, I know this is your first time on the podcast. But why don't you start with giving us a quick intro of what you do here at Google, and then I'll pass it back to Sean to do the same. 

NISHANT: Sure, thank you, Stephanie. Yeah. I'm one of the outbound product managers for our Google Cloud Storage product. So excited to be on and love to chat about key exciting things we're announcing. 

SEAN: Like I said, Stephanie, it's great to be here. I'm in the Storage Product Management team here, as well, looking across our portfolio of offerings. And as you said, we've got a number of exciting announcements that we just made last week. 

STEPHANIE: We have a Storage Spotlight Day. If you all listening haven't checked it out, definitely go ahead and take a listen. We've had you both actually do some talks there. And so those are up on demand. And we have those links in the show notes. But storage-- why are we talking about storage? 

Because we're talking all the time about these services and products that are coming out in the Cloud. That storage is sort of automated, taken care of for you, in some cases. But it's still so hugely important for a company to really keep top-of-mind. So from your perspective, Sean, why storage? Why are you in the storage space? 

SEAN: Storage is one of those unsung heroes, if you will. Everybody needs it, and not everybody unfortunately thinks about it from the beginning. And one of the great things about Google Cloud is that we have a lot of experience of delivering massive scale applications, continental or even global scale applications-- think YouTube and Gmail, et cetera-- which is all really fine and good. 

And that's all built on our cluster file system, Colossus. This is just a ridiculously large capacity. Can't even mention how big it is, but it's just, like, as big as you think and it's bigger than that, right? This is a foundation that we've been running applications on for years. This is now the same basis, if you will, the same technology that we're now building solutions that enterprises can use for their business. 

And it's a different delivery model of Google delivering a service to an application versus delivering a storage service that enterprises can consume, whether it be block, file, or object. And we'll get into some of those details, but this is all just crazy technology stuff that really is something that can be thought of in afterwards, in terms of, I'm just going to subscribe to so much performance or capacity and really take advantage of a managed service. 

However, there are a lot of nuances that have to come into play when you design a continental scale application, that there are differences and things you have to think about with storage. As easy as we're trying to make it, we're not done yet. And that's some of the things that we're going to talk about a little bit. 

STEPHANIE: Yeah. I mean, to have a Storage Day dedicated to is a testament to how much exciting stuff is happening in this space. So what about from you, Nishant? 

NISHANT: No, I think Sean kind of summed it really well. It is an unsung hero, but it does need storage to function, everything, especially-- I kind of talk about storage in the sense of working on human-generated data. And that's transformed into now machine-generated data. And the volume of data that's being generated is far exceeding what we can manage. 

So having capacity at scale and a continent scale is a key attribute that definitely excites me. I've been in the object store industry for over a decade plus. And I don't think we're going anywhere slower. It's just going faster and faster, TikToks of the world and other capabilities generating more content than we can store. So I think that just keeps us exciting, capability wise, and especially focused in the enterprise space. 

STEPHANIE: Yeah. Just from a consumer standpoint, when I think about how I'm constantly paying a little bit more when I have more Google Photos backing up all my photos, I'm like, how is this trend going to keep continuing for eons into the future? So it's a big problem space. And I'm sure in the last decade, you've seen it change in the industry so much from a technological standpoint. 

So we have these launches this year. Can you talk about some of the themes that we've been focusing on since last year's Storage Day? What have we been really doing in the space? Sean? 

SEAN: We've really been focusing on optimization. This is-- clearly, as you'd expect from a product development perspective, these don't happen overnight. So this is really a long-term planning that we had in place about how customers can optimize their environment. And that's optimizing not only the cost but also storage utilization and performance and how do we optimize their own resources. 

Because as you started off by asking about, is it just a managed service-- well, that's true. But somebody still has to check a few boxes, make a few mouse clicks, type in a few commands, and so forth. So we still have a ways to go to make it even easier than what we have been doing today. And so as we talk to customers, they're really kind of three overall pillars that we are focusing on. 

And that's number one, enterprise readiness. Companies that are going to bring applications into Google Cloud, how are we going to deliver enterprise-scale applications, both in terms of reliability-- and files for Enterprise is an example, with four nines of regional SLA availability for those critical applications like SAP and even GKE. 

Or high-performing applications needs with files store high-scale, where you have high-performance computing workloads that need 26 gigabytes per second of throughput for that, or improving our block storage with persistent disk extreme. So there are things that companies just have to do to kind of run-of-the-mill, if you will, the day-to-day things. 

But there are also a lot of the data-driven applications that are consuming all that storage you were referencing for photos and so forth, with Cloud Storage enhancements for analytics. And if you look at what we've done to make it easy for companies to deliver continental scale applications with our dual region option for Cloud Storage where they can replicate between nine different regions across three continents, all into a single bucket and all to the same API access, regardless of storage class, is something that's unique to Cloud and unique to Google Cloud. 

And this is one of the things that we're doing for availability of those applications, in addition to making sure that they can not only have a recovery time objective of zero to be all failover for one region in a single bucket, to actually add that option to replicate the data in what we call turbo replication with a 15 minute RPO. So you have an R2 of zero, an RPO of 15 minutes for petabytes of capacity or tens of petabytes of capacity is just unfathomable. 

And then lastly, really, around storage everywhere. So this is really the notion of, yes, a lot of applications are coming to Google Cloud. But there is still an Edge presence on premises. And that's where our Google Distributed Cloud Edge Appliance comes into play, where you have companies like Neuro that have distributed on-premises workloads. 

They have their autonomous driving vehicles collecting data all day. They pull into the shop. They upload the data to the appliance, and it's really a transition into getting that data into the Cloud for further training in AI/ML workloads. And it's not a transfer-- not a one-time transfer. It's more of a daily occurrence. And so it's bridging that Cloud boundary, if you will, down to the customer's data center. 

STEPHANIE: Wow. Wrapping your head around what you just said-- 26 gigs of throughput needed and also having storage options with a 15 minute RPO for petabytes of data-- can we just sit with that for a second? Because it is pretty impressive just thinking back to where we've started when it comes to storage. Like, when the first storage area networks were developed and where we are today, with having multiple users and the type of latency needs that we have today, it's quite impressive. 

SEAN: And, Stephanie, those are the things we talked about largely last year and have delivered just this year. So we're not even talking about the new stuff, this year's Storage Spotlight yet. This is all things that we've been busy this year, even ahead of the announcements the last week, so. 

STEPHANIE: I think that's a perfect segue way, because I was going to ask about some of the key launches and what are we talking about this year. Maybe start with things that kind of fall into the Enterprise Readiness space. 

SEAN: It's really around-- I would characterize as block storage, right? If you take the typical application, they're going to run SQL Server. I'm going to run SAP in Google Cloud. How would it make it easier for customers to optimize their deployment? And so that's where we announce the next generation of persistent disk called Hyperdisk. 

So Google Cloud Hyperdisk is really that option that gives customers three levers to turn, if you will-- IOPS, Throughput and Capacity. And so you're going to start to see this roll out next quarter, in Q4 this year, particularly focused on the higher-end workloads. It's going to be called Hyperdisk Extreme. As the name implies, it's going to be for those most demanding database workloads where you've got to get the sizing right. 

Coming back to what you said at the opening, Stephanie, about sizing application and what makes storage interesting is that people have to think about it from the beginning. And historically, they've gone through a long planning cycle about IOPS and trying to figure out what the application is going to need from the business, not only on day one but also day 365, and how does that change over time. 

And so with Hyperdisk, we're really giving customers that option to optimize and make it easy to provision IOPS, Throughput, and Capacity on day one. But as the application changes over time, tune those knobs. Make those adjustments as needed, without going through a lot of arduous tasks of migrating data around. And then the other is really around files for enterprise with GKE. 

We're seeing more and more stateful workloads running in Kubernetes. And that really depends upon availability of data. Because you can't have a stateful workload that you can't, number one, back up, or have multiple pods have access to the same data for failover and availability reasons. 

And so now, that same four-nine SLA of regional availability with Filestore Enterprise we've brought to GKE already, but now we're actually optimizing how customers can maximize a storage utilization and carve up 100 different shares of capacity for 100 pods to be able to write to the same data at the same time. And that really changes the way customers and the flexibility that gives customers to deploy stateful workloads in GKE. 

STEPHANIE: Yeah, that's been an initial challenge, I think, with containerized environments is having to have these modularized architectures that need to access the same storage in order to have stateful applications be deployed on Kubernetes. So it's like we've matured a lot in this space, and storage has been a huge part of that calculation. Nishant, is there anything else that has stood out to you in this Storage Day for Enterprise Readiness? 

NISHANT: Oh, yeah, there's a lot of exciting stuff that we've introduced in our Cloud storage world. Sean talked about just volume of data that we have to manage now. Customers are taking advantage of our Cloud storage at a continent scale. But at the same time, they're worried about the cost. So the three pillars that we talk about-- cost, performance, and capacity-- one of the key aspects is cost. 

How do I manage my cost at billions and trillions of objects or petabytes, exabytes of data? That seems to be a daunting task for our customers. And often, they don't know what workloads are coming to our object stores. They're just turning applications or bringing in applications from a business use case perspective. So managing that whole aspect of what applications create what kind of workload and managing what data should go in what class of storage tends to be pretty daunting. 

So we're now introducing what we call our Autoclass capability for Cloud Storage, where it's really our easy button. You click it and forget it and set it. And now, based on your access patterns, we'll ensure that the data is sitting in the right storage class based on your access. And we'll make sure that we're optimizing your cost along the way. 

So a lot of our customers have started to figure that out at a get go, where they have to understand the application workload and start to plan that. And so we want to take that planning away, or have to reduce that aspect of planning. So Autoclass really sets us apart from our competition and also helps our customers. 

Now, I think of it in two ways. We do give our customers flexibility to be what we call the advanced users-- do it yourself. They can build their own patterns and usage and decide which storage class they want to retain the data in. That's perfectly fine. So you continue having those advanced users. 

But the ones that just want to have simplicity and ease, but still manage their costs on their behalf, then Autoclass does that for them. So from that perspective, the capability gives them a great scale, but also the flexibility of just simplicity that we can provide. 

STEPHANIE: It'd be hard to achieve that on your own. And I have a lot of thoughts about what you just said. Because when it comes to cost optimization with storage, we actually had an episode on FinOps, which is a kind of growing area, especially with regards to Cloud. And so it's this intersection between finance and operations. 

And so the more that we can automate these things and do these recommendations and activate these related features we have to optimize your storage, which can be a larger operational burden for OpEx, this is great. I mean, I haven't seen it across the industry. And I think you just mentioned it might be one of our unique launches this year or two, so that's super exciting. 

And when it comes to the 15 minute turbo replication and having multi-regional single buckets-- I heard this phrase the other day. It's like, when startups are thinking about choosing a Cloud provider, choose a provider and first start to think about multi-region, not multi-Cloud. 

And that's what you really need to prioritize when it comes to having that Enterprise Readiness and availability before you start to think, OK, let me just choose across all these providers. It's like, can we get one that really gives us the capability just to be multi-region. 

NISHANT: Spot on. And then, lastly, another amazing feature that we've introduced is really around our storage insight. Now, when we talk about the volume of data you're generating, as much as we can automate, there are certain aspects we cannot. So we do want to give insight into the customer what type of data they're storing. So our initial launch of Storage Insight is going to be during this year or early next year, as well, which is giving them knowledge of what capacity they're storing. 

In those trillions of objects, what kind of data are they storing? Can we give them the visibility into that? Are there any patterns in that storage data that they can then facilitate? And also other aspects could tie into-- you talked about FinOps and compliance space. Customers are looking at insight of what type of data I'm storing in my buckets. 

Am I giving access to customers that shouldn't have access to that data? Should that data not be publicly accessible? There could be PII data in there. So really, all those aspects-- giving our storage insight service to begin with can give them kind of directional guidance, not just from a managing capacity perspective, but managing information. 

So we really want to grow from-- of course, Cloud Storage is all about storing data at massive scale. But we want to get to managing information for our customers, and then giving them insight how they can operate their business better, how they can manage their application better, how they can optimize their application for best workload. 

So for example, they have analytical workloads. We talked about dual region, how we can co-locate compute and storage together. So getting that depth of knowledge from their data, they can then decide what's the right storage class for them or right storage operations they want to do, and cool features and functionalities that we're introducing, when to set it. 

And then also thinking about, from a security perspective, some of the challenge we've heard from our customers-- hey, am I managing all my data across with the right keys, encrypted keys across the board? Are we rotating them enough? So having that global policy level of information across all their buckets is another key attribute that they can take advantage from our storage insight service. 

STEPHANIE: There's a lot happening, clearly. And recently, we just had an episode on GKE because it just turned seven. And we have much more exciting features coming out with that product. But I know you were talking a little bit about what we have for storage when it comes to GKE, Sean. What are we announcing around GKE and the theme of storage everywhere? 

SEAN: Yeah, happy belated birthday to us, right, Stephanie? 

STEPHANIE: Yeah. [CHUCKLES] 

SEAN: So I talked about Filestore Enterprise. So that's kind of on the storage side for those stateful workload deployments. But the other part that goes along with this is you have to be able to recover an application that you really care about. If you can't recreate the application or the data easily, you've got to back it up. 

And we've been doing this for a long time in VMware on prem or GCVE in Google Cloud or GCE. But now, we're actually delivering this for Kubernetes. And this is actually something that is-- it's our own development. We developed this to be integrated directly within the Cloud Console. 

So now you've got a couple of mouse clicks. Choose which workspaces or pods you want to protect, where you want to protect them locally or in another region. And then, on the recovery side, you have that same granularity of, I'm going to recover everything or I'm going to recover a portion of my environment. 

And you really have to have that forward thinking about protecting the applications, having the Filestore data being available across multiple pods for availability. Or if you're using persistent disk with GKE, you back up that data with backup for GKE. And so it's a really changing of a mindset about being able to run more and more different applications that are typically more important, if you will, in terms of stateful, but not necessarily. 

But it really is supporting that customer journey throughout their transformation and optimization process, because not every customer is going to go directly to GKE. They're going to have a portion of things that they're going to run in VMs and others are going to be run in containers. 

STEPHANIE: Yeah, it's a good point. It's usually very much so a heterogeneous environment. And so it needs to be adaptive in terms of being able to support these different deployments. So I know we mentioned security just a moment ago with storage insights. But is there any more you can talk about when it comes to the security of data? 

SEAN: Yeah. It really comes back to the heterogeneity you mentioned, Stephanie. And that backup for GKE is obviously protecting that environment. However, you've got to think about everything else. And this is where we're announcing Google Cloud for backup and DR. This is also now directly integrated into the Cloud Console. 

For those that are familiar, this is from the Actifio acquisition that we made a little bit ago. But now it's a fully managed service, so there's nothing else for a customer to install. Just point, click which applications you want to protect, where you want to protect them and what that policy looks like. 

And so for GCVE with VMware or GCE and VMs, databases and applications, we can now protect applications running in the Cloud consistently. You have the protection for GKE applications. So you're really providing that consistency for security and data protection across all of the environments, across that heterogeneous deployment you were mentioning. 

But then the other thing that with backup and DR that we're announcing is that, yes, the in-Cloud protection's there. But if you're running VMware on premises, you can use the same capability to protect those VMs on premises and back them up to Google Cloud. So as you're thinking about potentially a hybrid deployment and a migration strategy of what's going to be moved when into Google Cloud, you have that option to back up from on prem to the Cloud or within the Cloud. 

STEPHANIE: You have options, yeah. I love it. We talked a little bit about cost optimization earlier in the conversation, but I want to circle back to it, just because I know storage, as I mentioned, is such a fundamental building block. But there's also ballooning storage, which we said. And that comes with ballooning costs. And OpEx, especially in today's age, is tightening up for a lot of companies. So what are we doing to help with cost optimization? 

SEAN: Yeah. So I would say a couple of things, Stephanie. On the operational side, Nishant talked a little about Autoclass, where we've now given them the easy button, if you will. So now they can apply this Autoclass policy to an entire bucket, very simply. And that can manage billions or trillions of files and move data down. 

And if you think about the cost of standard all the way down to archive, archive is a fraction of the cost of standard. And as cheap as Cloud Storage is, if you're taking 10%, 15%, 20% of the cost standard, that's a significant cost savings over time, right? So that's number one. 

Number two, I talked about Hyperdisk and how giving customers three knobs to turn between IOPS, Throughput, and Capacity. So they can rightsize that. But then also, we're introducing storage pools for Hyperdisk. And this is going to be the notion of think of thin provisioning now in the Cloud. 

So we've done this on premises for years, where you provision block storage and you overprovision, and you actually are using less physical storage. Same notion here-- we're now giving customers that flexibility to optimize a storage utilization with Hyperdisk and storage pools so that they can actually, as you'd expect, save some money and actually rightsize how those applications are consuming storage. 

And then also with Filestore Enterprise in the multi shares, carving up files for instances to be more granular and increase that storage utilization with smaller shares just helps to rightsize, again, those pod deployments with GKE. 

STEPHANIE: Very nice. I love the themes of right sizing and auto classing. This is a trend that is definitely super valuable. And of course, I know that for many of our launches, we don't do this alone. We take so much feedback from our customers to help guide where we want to take the products next, of course. This is not an exception. So were there any customer use cases and stories that you have from some of these launches? 

NISHANT: Yeah. And, Stephanie, that's valid. Any launches we have prior, we do work closely with our customers. And similarly here, reDevice is one of our customers that they're in the research industry. They aggregate research data and then they provide that to the end user, the applications. They're from analytics perspective or research aspect perspective. 

And one of the challenges that they generally have is they don't know when that research data is important. Now, they have to retain that data forever. But in early stages of research, that data is fairly active, but then eventually becomes dormant. So they want to be able to have some sort of capabilities-- i.e., Autoclass. And based on the access patterns where they don't have to continuously poll the users, are you done with this data, just migrate or move that data to the right storage class and start saving them costs. 

And one thing that struck us when we were talking to them is it's more about human failure or accidents that happen where we do move the data to the lower storage class costs, but when you access that data, it starts to adhere more cost to you because there's operation charges there. So with our Autoclass capability, we automatically move that data to standard storage and ensure that, on subsequent reads, you're not paying the heavy penalty of retrieving that data. 

So not only we're automating getting you to the lowest cost tier, but at the time of access and when you want to get that data, we'll move it to the right storage class or the hotter storage class and ensure that you can use that data at any given time. Throughout this whole thing, you don't-- the application doesn't need to change. It's a single API. 

And even at our lower cost storage, the latency to read that data is milliseconds. So from the end user perspective, they don't have to change their architecture. They don't have to change their application. They get the same functionality they were getting, regardless of what storage class they're sitting in. 

So from their perspective, it made their life as a storage admin or the owner of the infrastructure so much simpler that they can then focus those engineering resources in the part of the business that mattered, is really collecting that research data. One of the things the customer said, once this thing is GA'd and ready to go, they expect 90% of their data will be managed under this capability, which is a huge thing from their perspective. And I think they can take huge advantage of this capability as it comes out. 

STEPHANIE: Yeah, no. That's amazing. I was going to say that I'm sure the red flag that people wave when they hear Autoclass, that sounds great. But if it's going to affect how easily I'm going to be able to pull that data back down, if there's cost differences, if it's going to be difficult for my application to be compatible with such differences, then that's going to be a big decision factor. 

But if it's easy and seamless, then why not, right? [CHUCKLES] That's great. So can you step back real quick, Sean, and summarize some of these launches and where they fit into our broader portfolio to help our customers secure their data, simplify operations, and optimize the cost? 

SEAN: If you take a look at what we've done, it's really across the portfolio, the storage that we have. A lot of different applications are going to come to the Cloud. Not everything is going to be leveraging object storage. Not everything is going to be leveraging block storage. 

So we have to really think about what we can do to optimize deployments as customers are thinking about their enterprise readiness or the data driven applications or if you look at storage everywhere. And so if you think about block storage, introducing Hyperdisk, the next generation persistent disk, could give customers knobs to tune the performance and capacity. 

We've announced capabilities around Filestore Enterprise to right size that storage utilization within stateful workloads for GKE and multi write or deployment scenarios. We've got the data protection side of things, backup for not only GKE but also Google Cloud backup and DR for GCVE and GCE and other databases. 

But then we also have Cloud Storage and the Autoclass you were just talking about, making it easy to tier data back and forth between the different storage classes without the additional charges, so optimizing that placement and giving customers the information that they need to make informed decisions about what objects are where with Storage Insights. And so we've certainly been busy, again, across the portfolio, block, file, object, and data protection this year. 

STEPHANIE: Yes, you certainly have. And to anyone who's questioning, storage, we're talking about storage, yes, there's so much that has to do with storage. It's so fundamental still. And so thank you so much. Is there anything that you want to mention before we start to wrap up? 

SEAN: I think you mentioned at the top of the show, if you didn't have a chance to see Storage Spotlight, it's available on demand. 

STEPHANIE: Yes. For anyone who is listening out there, we have the links in the show notes. Storage Spotlight, second year in a row. We're going to keep with this trend because, clearly, there's a ton happening. Nishant and Sean, I just want to thank you again for coming back on. 

NISHANT: No, thank you for the time. 

SEAN: Yeah, thanks, Stephanie. 

STEPHANIE: All right. I wasn't wrong, right? Tons of stuff happening around storage when it comes to optimization, cost optimization, capacity optimization, performance optimization. We talked a lot about right sizing, auto classing, Filestore Enterprise, Hyperdisk. We have lots going on around the theme of simplicity and ease of use with data protection. 

We have GKE backup and Google Cloud backup and disaster recovery. And I love the use case that they went over when talking about reDevice. So I'm really glad that we got Sean back on and included Nishant this time around. It's probably going to be an annual tradition that we just have Storage Spotlight and have them jump on. 

Because I know a lot of you might not have the time to check out the full on-demand video of that happening. And so the podcast is such an easy way to get the product team on and give you a great summary of some of the exciting things that are happening in the storage space. 

Now, I know we always talk about what we're working on. And so I just want to give a quick update that I am doing some exciting video content with one of our latest partners. And I'm not going to give too much away, but you're going to see it at Next, a cool partner announcement. And so I'm going to hopefully be able to showcase that video soon. 

And then, in terms of Next, I'm also doing two sessions. One is for networking, which if you've seen my videos, you know that I love talking about networking. And this session covers how you can simplify and secure your network for all workloads in the Cloud. So we're going to be covering all of the announcements related to networking. 

And then I am also in a session for our partner, Ecosystem, where I bring on Rubrik and Exabeam to talk about how you can take on security in the Cloud using some of their tools, alongside the analytics capabilities in Google Cloud. So check that out. 

I know it might not be everyone's cup of tea for the sessions I'm in, but we've got a ton coming from our VPs, GMs, obviously Thomas Kurian. Priyanka is in some, too. So definitely come hear from these leaders. And I'm going to keep reminding you about Next for the next several weeks. Sorry. I'm not sorry. [LAUGHS] But for now, this is Stephanie Wong, and I will see you all next week. 

[MUSIC PLAYING]