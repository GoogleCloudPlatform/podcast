+++
audioDuration = "00:35:47"
audioFile = "Google.Cloud.Platform.Podcast.Episode.301.mp3"
audioSize = 85873414
categories = ["Spanner", "Database"]
date = "2022-04-20"
description = "This week, we're busting myths around Google Spanner with our guests Pritam Shah and Vaibhav Govil."
draft = false
episodeNumber = 301
hosts = ["Mark Mirchandani", "Max Saltonstall"]
title = "Spanner Myths Busted with Pritam Shah and Vaibhav Govil"
image="/post/episode-301-spanner-myths-busted-with-pritam-shah-and-vaibhav-govil/images/hero/hero-EP-301.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/u81xpw/episode_301_spanner_myths_busted_with_pritam_shah/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, we're busting myths around Cloud Spanner with our guests Pritam Shah and Vaibhav Govil. [Mark Mirchandani](https://twitter.com/markmirch) and [Max Saltonstall](https://twitter.com/maxsaltonstall) host this episode and learn about the fantastic capabilities of Cloud Spanner. Our guests give us a quick run-down of Spanner database software and its fully-managed offerings. 

Spanner's unique take on the relational database has sparked some myths. We start by addressing cost and the idea that Spanner is expensive. With its high availability achieved through synchronously replicating data, failures are virtually a non-issue, making the cost well worth it. Our guests describe other features that add to the value of Spanner as well. Workloads of any size are a good fit for Spanner because of its scalability and pricing based on use.

Despite rumors, Spanner is now very easy to start using. New additions like the PostgreSQL interface and ORM support have made the usability of Spanner much more familiar. Regional and multi-regional instances are supported, busting the myth that Spanner is only good for global workloads. Our guests offer examples of projects using local and global configurations with Spanner.

In the database world, Vaibhav sees trends like the convergence of non-relational and relational databases as well as convergence in the OLTP and OLAP database semantics, and he tells us how Spanner is adapting and growing with these trends. Pritam points out that customers are paying more attention to total cost of ownership, the importance of scalable and reliable database solutions, and the peace of mind that comes with a managed database system. Spanner helps customers with these, freeing up business resources for other things.

This year, Spanner has made many announcements about new capabilities coming soon, like PostgreSQL interface on spanner GA, Query Insights visualization tools, cross-regional backups GA, and more. We hear all about these awesome updates.

##### Pritam Shah

 Pritam is the Director of Engineering for Cloud Spanner. He has been with Google for about four and a half years. Before Spanner, he was the Engineering Lead for observability libraries at Google. That included Distributed Tracing and Metrics at Google scale. His mission was to democratize the instrumentation libraries. That is when he launched Open Census and then took on Cloud Spanner.

##### Vaibhav Govil

Vaibhav is the Product lead for Spanner. He has been in this role for the past three years, and before this he was a Product Manager in Google Cloud Storage in Google. 
Overall, he has spent close to four years at Google, and it has been a great experience.

##### Cool things of the week

* Our plans to invest $9.5 billion in the U.S. in 2022 [blog](https://blog.google/inside-google/company-announcements/investing-america-2022/)
* A policy roadmap for 24/7 carbon-free energy [blog](https://cloud.google.com/blog/topics/sustainability/a-policy-roadmap-for-achieving-247-carbon-free-energy)
* SRE Prodcast [site](https://sre.google/prodcast/)
* Meet the people of Google Cloud: Grace Mollison, solutions architect and professional problem solver [blog](https://cloud.google.com/blog/topics/inside-google-cloud/meet-the-people-of-google-cloud-grace-mollison)
     * GCP Podcast Episode 224: Solutions Engineering with Grace Mollison and Ann Wallace [podcast](https://www.gcppodcast.com/post/episode-224-solutions-engineering-with-grace-mollison-and-ann-wallace/)
 
##### Interview

* Spanner [site](https://cloud.google.com/spanner)
* Cloud Spanner myths busted [blog](https://cloud.google.com/blog/products/databases/cloud-spanner-myths-busted)
* Spanner: Database Unlimited Series [videos](https://goo.gle/SpannerDatabaseUnlimited)
* Getting started guide [tutorials](https://cloud.google.com/spanner/docs/tutorials)
* PostgreSQL interface [docs](https://cloud.google.com/spanner/docs/postgresql-interface)
* Cloud Spanner Ecosystem [site](https://www.cloudspannerecosystem.dev)
* Spanner: Google’s Globally-Distributed Database [white paper](https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf)
* Spanner Docs [docs](https://cloud.google.com/spanner/docs/tutorials)
* Spanner Qwiklabs [site](https://www.qwiklabs.com/focuses/1774?parent=catalog)
* Using the Cloud Spanner Emulator [docs](https://cloud.google.com/spanner/docs/emulator)
* GCP Podcast Episode 62: Cloud Spanner with Deepti Srivastava [podcast](https://www.gcppodcast.com/post/episode-62-cloud-spanner-with-deepti-srivastava/)
* GCP Podcast Episode 248: Cloud Spanner Revisited with Dilraj Kaur and Christoph Bussler [podcast](https://www.gcppodcast.com/post/episode-248-cloud-spanner-revisited-with-dilraj-kaur-and-christoph-bussler/)
* Cloud Spanner federated queries [docs](https://cloud.google.com/bigquery/docs/cloud-spanner-federated-queries)

##### What's something cool you're working on?

Max is working on a new podcast platform and some spring break projects.

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 301 of the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani, and today I'm here with Max Saltonstall. Hey, Max. How are you doing?" >}}

MAX: I'm doing well. Thanks for having me. 

MARK: Always a fun time when we're working together, Max. [LAUGHTER] As always, super excited to have you here. And today we actually have a really cool episode. Max, can you tell us who's going to be on the episode? 

MAX: Yeah, so we've got Vaibhav and Pritam from the Spanner team, and they're telling us all about where Spanner fits into the database ecosystem, what some of the really cool features are, and most importantly busting some of the most common myths and misperceptions that people have about when or who can use Spanner. 

MARK: Yeah, it's a really great conversation, and we obviously get into the details with the interview. But for people who have heard of Spanner or haven't tried it out yet or for people who have kind of started to work with it, this is a really great conversation. Because I think it sheds a lot of light on some of the truths behind Spanner, and we get into, like you said, those myths that get busted to talk about where people have thought about where Spanner fits. We'll get into it with the interview. But before we do that, why don't we go ahead and jump into our cool things of the week. 

[MUSIC PLAYING] 

MAX: So Sundar posted on the Cloud blog and on Twitter a big investment in US offices and data centers. And I was really glad to see an awesome photo of one of the newest buildings in New York City where I'm working. A very cool new pier that has been part of the historic water side of Manhattan and has now been really extensively renovated and turned into some Google office space and some event space. And I think we'll soon have a ground floor pedestrian food court type of vibe thing going on, and I can't wait to see that. It's been really neat watching it. I think it's been under renovation for, I don't know, 72 years, probably. 

MARK: It sounds about right, yeah. That's correct math, I believe. 

MAX: Yeah, no, math is my specialty. The other neat thing that I was excited to read about was a plan to really focus on completely carbon-free energy. And this is another post on the Cloud blog with an eye towards how to set policy for a full-grid decarbonization. I think it's awesome to see Google pushing this forward and moving faster, I think, than a lot of other big tech companies. 

MARK: Yeah, I mean it kind of reminds me of some of the new features that are actually in the console, too, that have been exposing some of that sustainability information and kind of giving that power to folks who are running kind of massive cloud workloads. Hey, let me see the sustainable impact of this. Are there decisions I can be making that could affect that? Obviously not all decisions can so easily be made, but with more information, I think it's really cool to hopefully have a lot more companies commit to being a little bit more eco-friendly, as it were. 

MAX: Maybe a lot more because I don't know how much time we've got left. 

MARK: Yikes. On that note, I've got two cool things of the week. First off, we've had a couple of conversations on the podcast around SRE and SRE-related topics. I think that's an area of forever growing interest because it is so common for, especially people who need to run incredibly large workloads, to really understand what their systems, what their infrastructure, how do they make sure that they're actually creating reliable solutions. So on that kind of awesome topic, there's actually a new podcast coming out, the SRE podcast or the prodcast as they call it. 

We've got a link in the show notes there, but for the folks who were really interested in learning more about SRE and SRE-related topics, I would highly recommend kind of checking out this podcast. Because it's going to give you kind of the more focused content around SRE and SRE topics. So I'm really excited to see what episodes they come out with. I think they only have two episodes so far, but I'm sure it'll be a very long-lived and very informative podcast. 

MAX: I'm excited for them to dig into some of the ways that we do incident response when there's an outage or there's something breaks, and how do we make sure that we understand and remedy that as fast as possible? 

MARK: And my second cool thing of the week is that there's a series of blog posts on the Google Cloud blog that focus on meeting the people inside of Google Cloud. And one of the recent ones was around an amazingly awesome person, Grace Mollison, who was actually on our podcast not too long ago talking about solutions engineering. I highly recommend checking out that podcast episode because Grace is, first of all, amazing, and second of all, it was a really informative episode to understand what the solutions engineering team does, what they work on, and how they contribute to the larger Google Cloud picture. 

But also check out this blog post so you can read a little bit more about Grace's journey. And I'm sure there'll be tons of other blogs and other people to meet behind Google Cloud. So I'm really excited to see more of that, and we get to meet the faces behind Google Cloud which is always a lot of fun. 

MAX: Yeah, I love that series, and I think it's great to shine a light on some of the really neat backgrounds that have led people to these jobs at Google. 

MARK: Yeah, I think Grace has a note about pyrotechnics in her background which is a pretty far cry from Google Cloud solutions engineering. So definitely worth a read. 

MAX: All right, well, with our cool things out of the way, why don't we go ahead and jump into our interview. 

[MUSIC PLAYING] 

MARK: Vaibhav and Pritam, thank you so much for joining us today. To get things started, can you give us a quick introduction about yourselves? 

VAIBHAV: My name is Vaibhav Govil. I'm the product lead for Spanner. I have been in this role for the past three years, and before this I was actually a product manager in Google Cloud Storage. Overall, I have been in Google for a period of four years now. And so far it has been a great experience for me. Pritam? 

PRITAM: Yeah, thank you, Vaibhav. My name is Pritam Sham. I'm the Director of Engineering for Cloud Spanner. I've been with Google for about four and a half years, and before Spanner I was the engineering lead for observability libraries at Google. That included tracing distributed metrics at Google scale. My mission at that time was to democratize instrumentation libraries, and that's when I launched Open Census, and then I took on the responsibility for Cloud Spanner. 

MAX: So just as a quick refresher for those who might not be super familiar, can you give me a little overview of what Spanner is? 

VAIBHAV: So Cloud Spanner is a fully-managed, horizontally-scalable relational database service. So let me expand a little bit on that sentence which I just said. So there are three things which I'm going to talk about, first and foremost, the fully managed aspect about Spanner. What we mean by it is Google takes care of doing all the binary deployments, applying patches to Spanner, basically taking care of all the things which you traditionally have to worry about in a typical relational database service. We do that for you. 

Spanner also offers industry-leading five nines availability. There's no concept of a maintenance downtime. Even the schema changes that you are doing will be done while you are completely online. Now talking about the second thing which I mentioned which is horizontal scalability. Just to put things in perspective, Spanner consistently processes over 1.2 billion requests per second, and it's used by some of the most demanding workloads both internally with the likes of Ads, YouTube, as well as externally by some of the largest retailers, financial service companies, as well as technology companies. 

Last but not the least, Spanner in addition to offering horizontal scalability as a full relational database. And what do we mean by that? So it is a database service which offers asset transactions, full SQL support, and the same kind of consistency which you can get from a single node MySQL or PostgreSQL database. All in all, this is a very unique differentiated database service offered by Google and GCP. Because typically horizontal scalability is something which you only get from non-relational databases. You get that kind of scale without compromising on any of the consistency from a relational database service which has full SQL support, and that is Spanner for you. 

MARK: I love that summary. And Spanner is such a cool technology. There's been a lot of cool buzz about it for the past few years, and I'm sure we'll see plenty of exciting things. 

We've actually had some conversations about Spanner on the podcast before, so we're going to have links in the show notes for people who want to kind of get that deeper dive into Spanner. But today, we're actually talking about some of the big myths that come up with Spanner. It is a cool technology. It's very unique in the way that it does things, and I think it broke a lot of molds for how people understood relational databases. 

So there's a quick blog post. We'll also have that in the show notes. But I wanted to dive right into these myths and see if we can kind of answer why people think about Spanner this way and how they can kind of understand how Spanner isn't actually working in that way. So the first thing we'll start with is the myth that Spanner really is quite expensive to use. I'd love to hear more about why that's really not the case. 

PRITAM: Yeah, thanks for asking that question, Mark. So the truth is that when you're looking at the cost of a database, it's better to consider the Total Cost of Ownership, right-- I'm going to refer to it as TCO-- and the value it offers, rather than the raw list price. So I'm going to talk about four things when it comes to TCO. First is availability, then price performance, reduced operational costs, and cost controls. So let's look at all of them in detail, right? 

So when it comes to availability, typically, a relational database, the customer has to spend time and money in setting up a HA replication for high availability and take on additional operational overhead due to it. Spanner provides high availability and reliability by synchronously replicating data. So when it comes to disaster recovery, Spanner offers a zero RTO and a zero RPO for zonal failures in case of regional configurations and regional failures in case of multi-regional instances. So super high availability. 

The second is the price performance. It takes a lot to get consistent performance from a database at any scale. Spanner's promise is that consistent performance at any scale, and then you pay for what you use. It is best in class from a highly scalable, highly consistent relational database service perspective. 

The third thing I wanted to talk about is reduced operational cost. So with Spanner, customers enjoy zero downtime upgrades and zero downtime schema changes. There is no maintenance window. And sharding is automatically handled, so the challenges associated with scaling up traditional databases don't exist. I would say that customers can spend more time innovating and less time administrating the database. 

And the last thing I wanted to talk about when it comes to TCO is cost controls. So recently, we launched something called committed user discounts. Basically, these are deeply discounted prices in exchange for your commitment to continuously use Spanner. So if you commit using Spanner regularly for one year, you can get 20% discount. And for three years, you can get 40% discount. 

So those are the four things I wanted to mention when thinking about TCO. Now, I want to pass on two pro tips for cost savings. First is the emulator, right? 

So Cloud Spanner has an emulator that provides a full set of API and full SQL service when it comes to Spanner features. And our customers love it, because they can run it locally for prototyping, for development, for testing. And this is open source, and there is no additional cost for it. 

The other thing is, we have a community-maintained open source autoscaler. So you can use the autoscaler to rightsize your instances. So in a nutshell, I would say that if you consider the total value that Spanner offers, I will argue that it is being offered at an incredible price point. 

MAX: Thank you very much. The other myth that we hear a lot is that Spanner is really only for use with really massive workloads. Is that true? 

VAIBHAV: No, actually not. In fact, what we hear from customers is, they want a managed relational database service that offers them the high availability and scale insurance for their workload. In fact, we have multiple two-people companies who are now using Spanner, and this has been something which has been possible with a capability which we launched last year, which is called as granular instant sizing. 

And what granular instant sizing is, it enables you to use Spanner at $65 a month. So earlier, before that, Spanner was offered as a single node product with which you can do quite a lot. Based on YCSB test numbers, you can do 10,000 reads or 2,000 writes with one single node Spanner, which was great for large workloads. But with granular instant sizing, you can buy 1/10 of the node. 

And we introduced a new unit called as processing unit, where one node equals 1,000 processing unit. And you can buy 100 processing unit. And you can build your entire workload with a 100 processing unit Spanner instance. 

So in terms of price of entry, a lot of customers are utilizing granular instant sizing for their workloads. We have big customers who have now standardized on Spanner for both small and large workloads. In fact, we have a lot of small and medium sized businesses who have now adopted Spanner because they want to build for the future. They want to make sure that, just in case, when they hit that massive scale, they are protected because they have built on Spanner, and they prepare themselves for that future. 

MARK: Yeah, I feel like those really go hand in hand with the cost myth that it's very expensive. But the reality is that you need to look at the bigger picture of the total cost of ownership, like you were saying earlier, Pritam, but also this idea of, hey, there's a lot of options that you can choose in order to make sure that the actual usage fits what you need. That would kind of impact the cost and the size of your workload. 

I love the point about also building for the future. One of the other myths that we hear a lot too is that it's not really a familiar technology and that it can be kind of a high cost of onboarding to use Spanner. So would you say that's the case? 

PRITAM: That's a really good point, and it used to be true. Let me expand. So historically, our customers could use mutations or GoogleSQL on top of the RPC or REST API. And they are all optimized for performance and ease of use. But we have introduced some new offerings recently to make Spanner more familiar. Before I get there, let me take a step back and tell you about our mission. 

Our mission is to democratize Cloud Spanner. So we want to make it available to everyone for all kinds of workloads at all kinds of price point. So we've heard from our customers that they would like Spanner's scale and capabilities but with a more familiar interface. 

So recently, we introduced a support for PostgreSQL interface on top of Spanner. So it supports a core collection of open source Postgres data types, DVLs, and syntaxes, and information schema views. So you get the familiarity of Postgres and relational semantics at Spanner scale. 

The other thing we have done is ORMs. So we've recently added support for a lot of popular ORMs and frameworks like Hibernate, JDBC. These allow use of Cloud Spanner through APIs defined by these frameworks, again, making it very familiar for folks who are used to these frameworks and ORMs. 

MAX: That sounds like you've made the onboarding or ramp up process now much smoother for a lot of different kinds of developers, which is awesome. One of the things I've sometimes heard is that Spanner is really useful for those customers that have a global workload. Is that true? 

VAIBHAV: No. Again, this is something which we have heard from our customers as well. But something to point out is, Spanner offers both regional and multi-regional instances. 

And just to provide a little bit more information on what is a regional and a multi-regional instance, a regional instance is a local regional-based instance where-- something like US West One or US Central One-- where your data is located in a very local geography. And a Spanner multi-regional instance would have minimum three regions in a geography. So that geography can be US, Europe, Asia, any of those. 

We in fact also offer multi regions which can be global in nature, where, in addition to those three regions, there can be read-only replicas which can be spread throughout the globe in different continents. So depending on the needs and wants of the workload, customers pick a particular instance configuration. And those requirements from the workload are related to its availability, data residency, and performance. 

Just for example, retail and financial service customers, they demand the highest availability and typically choose Spanner multi-regional deployments. In addition, we have technology customers who have a global user base, and they would like to serve their customers locally by using Spanner read-only replicas. And they prefer to use multi-regional configuration. On the other hand, talking about regional instances, we have gaming customers who typically choose regional Spanner configuration as it mostly aligns with their local user base. And Spanner ultimately gives them the scale insurance which is really critical for their success. 

MARK: Yeah, and I think it comes all the way back down to the configuration, right? Spanner is this global database that works for really, really massive workloads, but you can configure it to kind of fit the needs that you have. And so it's really got the flexibility built in. One of the things that we hear is that Spanner really only works for people who are migrating from a relational database workload. Is that the case? 

PRITAM: Well, that is not completely true. So what is true is that the majority of our default customers and workloads come from relational databases. But we do have customers who migrate their workloads from non-relational databases to Spanner. These customers want to take advantage of relational semantics at non-relational scale. 

So there are customers who originally went with a non-relational database, NoSQL database, because they wanted unlimited scale. But they missed out on relational semantics. What I would say is, don't underestimate the power of getting strong consistency at unlimited scale. If you have not already read, Uber has published a blog where they talk about the complexity they had to introduce at an application layer to get some of the relational properties while using a NoSQL non-relational database for scale. 

MAX: I love the prospect of getting strong consistency at unlimited scale. I'm ready. So these are really helpful myth busting Q&A, and I'd love to hear from you, what are some trends that you're hearing about in the databases world? 

VAIBHAV: Yeah, this is a really interesting question, and this is actually something which both Pritam and I concern ourselves quite a bit. This is something which we think on a daily basis, where the market trends are, what our customers are asking, and what we should be building and preparing for. So I'll talk about a couple of trends which I have noticed, and after that, I'll hand it over to Pritam. 

One of the first trends which I have personally noticed is conversion of non-relational and relational database worlds, and this is quite evident. If you look around in the industry, you would see non-relational databases like MongoDB. They are now adding support for asset transactions and things of those nature, while relational databases, like PostgreSQL and even Cloud Spanner, we are adding support for document, with introduction of semi-structured data types like JSON. And we will continue to offer more support in terms of indexing capabilities and things of those nature. So if you just notice from that, the non-relational as well as the relational databases world are converging in a lot of ways. 

So the second trend which I'd like to talk about is the convergence of OLAP databases and OLTP database capabilities. Traditionally, customers have used an OLTP database for transactional workloads with low latency requirements. And then they copy the data in an analytical database to perform analytical tasks. They want to generate insights from the data and do real-time decision making from that. 

This type of a solution requires maintaining multiple copies of the data. Hence, data cataloging and governance controls are required. It introduces operational overhead on the users. So customers now demand a fair amount of analytical capabilities in the OLTP database and vice versa. In case of OLAP databases, they would like more transactional capabilities. 

To that effect, in terms of Spanner, we recently announced BigQuery federation, where a customer using BigQuery can directly query the data in Spanner and join that data which is already present in BigQuery in real-time. And this removes a lot of operational overhead and friction which is there. We'll continue to innovate in this space, and you will hear about a lot of upcoming capabilities in this area from GCP. 

PRITAM: I will build on top of what Vaibhav said, and I will add three more things that, in my opinion, these are the trends that I have been seeing. So first is, I am noticing that customers are paying more and more attention to TCO, Total Cost of Ownership. So a huge team of DBAs, on-prem databases, massive licensing cost, open source solutions that need shard management are no longer viable, right? So I'm noticing that customers are realizing that. 

What customers really want is a scalable, reliable, always available, no downtime, managed database that just works. They really want to focus their resources on providing value to their business and not on database management. So that's number one. 

The second thing I'm noticing is consolidation of workloads on few common databases. So instead of having many, many databases for different types and sizes of workloads, which means they have to learn to manage, maintain those databases, maintain the code, maintain the systems that interact with these databases, people are consolidating. So for relational databases, regardless of the size of workload, they will consolidate and have only one database. 

And the third thing I would say is, there is this tremendous pace of innovation that I'm noticing, and especially, the pandemic has fueled this. So when you don't have to worry about managing and scaling databases, there is a tremendous advantage, right? And companies who have been waiting out on the digital transformation and modernization of their stack have been taking this plunge. And when you free up your resources, when you free up people, your business can be truly transformed, as now, you can work on things that truly are differentiating to your business. 

MARK: Yeah, it's really interesting to hear about these trends, because databases, of course, as a general technology have been around for quite a long time. So it's really exciting to hear about how cloud and how, of course, Google working with Spanner is able to really bring some significant transformation to some of the things that people might have thought were just an unfortunate cost of business when using databases, like a maintenance window, right? So with those trends in mind, can you share anything about any new upcoming events or announcements in relation to what Spanner is planning on doing this year? 

VAIBHAV: Absolutely, Mark. There's quite a lot which Spanner team is doing with some of the announcements we discussed as part of this conversation which we just had. I would bucket our announcements in two categories. I'll speak about the democratization of Spanner initiative and some of the capabilities we are going to introduce in that bucket, and then I'll hand it over to Pritam to talk about some of the enterprise capabilities which we'll be launching really soon. 

So in terms of democratization of Spanner, something which we discussed earlier was around PostgreSQL interface on Spanner. It was introduced last year. We are soon going to do a GA for PostgreSQL interface on Spanner, just so everyone knows. Means, since we launched it last year, we have seen tremendous traction for this particular capability with our customers, with a lot of new customers who are now trying Spanner, as they really can see the benefit of using Spanner with a familiar interface. So we are really excited about bringing this capability in GA, and you will soon hear that from us. 

Second is about granular instant sizing. This is something which I talked earlier. And this truly democratizes Spanner, offering all the unique capabilities of Spanner, whether it's from the scale insurance perspective, some of the high availability aspects, at a price point which is super easily available for our customers. It's extremely unique, and there's a lot of excitement in the market. So it has been in preview since last year, and we are going to announce it in GA relatively soon. 

Last but not the least, on the observability side, again, democratizing Spanner to make it easy and accessible for our customers. I'm thrilled to announce that we'll be soon launching something called as Query Insights. And Query Insights is a set of visualization tools which provide an easy way for developers and database administrators to quickly confirm, identify, and analyze query performance issues on Spanner. Now, we have designed Query Insights using some familiar design patterns with world class visualizations, and I'm really glad the way the product has come together. And I'm sure our customers would be thrilled with the experience which we are going to offer. 

There's a three-part journey to it. First and foremost, we want to offer the capabilities so a user can confirm that there is a problem with inefficient queries. And this is something you can do by looking at total CPU utilization graph. 

Second, there is a identify phase in which, out of the many queries which might be causing this high CPU utilization in a given time window, the users would be able to identify the specific query. And third is the analyze phase, where they can really dig deeper into the specific query with query details, to analyze what might be the root cause for that high latency and high CPU utilization. So this will be the three-part journey which we'll enable via Query Insights, and you will soon see it released on Cloud Spanner. Pritam, do you want to talk about the enterprise capabilities which we'll be bringing to the market? 

PRITAM: Yeah, thank you, Vaibhav. I am excited to talk about two specific features which are coming up soon. The first one is cross regional and cross project backups. So this is something that we are going to GA soon. 

So cross regional backups allows users to copy backups from a Cloud Spanner instance in one region to another. This helps with data protection in case of a regional failure. It will also help you to restore backups from one project to a different-- or one instance to another. 

The second capability that I'm really excited about is Spanner change streams. So this was something that was announced recently at the Google Data Summit. Change streams allows customers to track changes within their database based on their configuration and to access and integrate this data with other systems. So this means that you can easily replicate the database changes to BigQuery for analytics, or trigger a downstream application behavior through Pub/Sub, or capture database changes for auditing or archival in GCS. So I'm really looking forward to the general availability of both these features very soon. 

MAX: That sounds like a lot of awesome new capabilities coming to Spanner for a wide variety of audiences and use cases. If folks want to learn more about Spanner or give it a try, what should they do next or where can they go? 

VAIBHAV: Yeah, there are multiple avenues which we provide. So first and foremost, public Cloud Spanner page is a place where you can learn about what Spanner is and everything. We offer Qwiklabs. So you can search for Spanner Qwiklabs and you can try Spanner using that. 

Pritam mentioned about Emulator. It is totally free. And along with Emulator comes sample applications which we have developed. 

There's also a open source ecosystem community which exists for Cloud Spanner, and we welcome everyone to take a look. The website for that is cloudspannerecosystem.dev, or dev. And there are a lot of tools which our customers, our partners, ex-Googlers have contributed into that community. And you can learn a lot even just looking at some of those tools and applications which have been developed. We really like contributions and value all the feedback which our customers give, so we look forward to connecting with the customers. 

PRITAM: Yeah, I would like to add one thing to that. So I always tell people that Spanner is one of the most sophisticated distributed systems that happens to be an amazing database. And if you have not already read the Spanner paper, please do read it. And take it for a ride. Let us know how you like it. 

MARK: We'll make sure to put those links in the show notes, because there are obviously a lot of different resources out there for people to learn. I recommend the Qwiklabs as a great way to get hands on. And it sounds like the Emulator, which I haven't had a chance to play around with yet, is a pretty cool way to learn it. 

Because it is a new technology, and it does things a little bit differently. But thanks to all the things that I think you've pointed out in this conversation, it has a lot of really cool features. So I'm sure a lot of people can get a lot of value out of that. Unfortunately, we are just about out of time. So before we wrap up, Vaibhav, Pritam, is there anything else you would like to mention or call out for our listeners? 

VAIBHAV: No, the only thing which we'd like to say is, as you mentioned, Mark, Spanner is a super exciting technology. A lot of our customers are benefiting from it. We appreciate the time which the listeners have given us to learn more about Spanner, and we value any feedback which they may have to share with us. And this is the only way we'll continue to improve and innovate on our customers' behalf. 

PRITAM: And I would say, feel free to reach out. If you have feedback, questions, or if you want to have a lively discussion, we are always open. And if you are doing a proof of concept or if you need help, we are always available to help you. 

MARK: Awesome. Well, again, thank you so much for joining. Really appreciate it. Hopefully we'll get a chance to talk to you all soon. 

MAX: Thank you very much. 

PRITAM: Thank you. 

VAIBHAV: Thank you. 

MARK: Once again, thank you so much to Vaibhav and Pritam for coming in. I mean, I learned a lot about Spanner. It's obviously a very cool technology, but it was really interesting to hear about these different myths and kind of preconceptions that people have of Spanner. 

It's a paradigm-busting technology. It really did something very unique, I think, in the world of databases, and I think there's a couple out there now besides Spanner. But it really brought the concepts of relational databases to a form of scale that wasn't possible before. And so with that being kind of a new technology, the number of improvements that they were able to talk about in that interview was also really cool, because it's more than just like, OK, well, here's a relational database that's actually scalable. It's also like, here's all the different features we're adding to it to help people make better use of it. 

MAX: Yeah, I also love the point that this is fully managed, which means you're not dealing with all the overhead of scaling, and sharding, and replicating, and all of that, which takes a huge operational burden off of your hands but also means that you get a level of reliability that most companies can't do in a home-rolled database solution. The other quote that really sticks out to me is, "Don't underestimate the power of getting strong consistency at an unlimited scale." And I think it's really the best of both worlds. It's have your cake and eat it too kind of thing. And we're now rolling out-- like the granular instant sizing, we're rolling out ways for people to use it in even smaller bites of cake, which I'm excited about. 

MARK: I'm always excited about smaller bites of cake, but one of my favorite announcements was definitely around the Spanner committed use discounts, right? Because databases traditionally are a workload that you are going to kind of have on 24/7, right? They're are always going to be up. And so getting a discount for running those is kind of just like free money. 

MAX: Who's not going to run it that long? 

MARK: Right. It's very unlikely, right? So I think it's pretty cool that the committed use discounts are there. I think, like you said, the granular instances-- there's just a lot of really interesting features that make it more usable in a way that, hopefully, more people can get a chance to try it out. 

And the points about total cost of ownership and really understanding what that looks like from a broad perspective instead of just looking at like the hourly cost are hugely important. Like you said, the fully managed side is a massive upgrade from having to kind of manage it yourself. And then what happens when it goes down? What's your backup strategy? All these problems that frankly just may not be interesting problems to deal with. 

MAX: You don't want those curve balls. 

MARK: Right, 100%. So Max, it's been a little while since you've been on the podcast. What have you been up to lately? 

MAX: So with this whole pandemic thing and people being stuck at home, I've noticed an increased popularity in what I like to call audio-only videos, or some people call them podcasts. But the idea-- [LAUGHS] we've got a bunch of different podcasts at Google, right? This being one of them, but there's the "Kubernetes Podcast," "Google Cloud Reader," "Cloud Security Podcast"-- 

MARK: The SRE podcast? 

MAX: Yeah, the SRE podcast, "That Digital Show"-- the more I look around, the more I find. So what I've been working on with some of our teams that power the software behind cloud.google.com and all the documentation and information we provide is a platform to share those podcasts in a more unified and united way. And I'm pretty excited. It is just about ready to launch, and it'll let people scroll through episodes, see all the different podcasts, see related content in a way that we haven't brought these things side by side at all before. 

MARK: Yeah, I'd love to see it. And there's tons of great episodes. And I think as we get a chance to feature so many different things on the "Google Cloud Platform Podcast," there's opportunities for new podcasts to spin off, and really like hyper focused, either mini podcasts or full on podcasts that focus on specific areas, which is just a great idea, right? So that way, people who can kind of show more interest in an area stay tuned for that. And then, of course, we'll be covering all kinds of fun stuff on the "GCP Podcast." So it's an exciting way to see all the different information right at your fingertips. 

MAX: Exactly. The other thing is, as soon as we're done recording, spring break starts at this household, at least for my kids. They're going to be off school for Friday and then the rest of the weekend and the rest of next week. So besides prepping a lot of food for the Passover Seder that we're going to be with family tomorrow, I'm going to be coming up with some interesting projects to keep them occupied. I think there might be some coding, there might be some cardboard creations, and we're definitely going to spend a lot of time at the library. 

MARK: Yeah, I'm sure there'll be a board game or two somewhere in there as well. 

MAX: Per day. 

MARK: Per day. So what you're saying is, a programming board game is in the works. 

MAX: I wish I could make something as cool as "Robot Turtles," but I'm not that cool. 

MARK: Well, there's tons of cool board games out there, of course, as we've talked about before. And I'm sure you'll get a fun time playing them over spring break. Well, for all of our listeners, thank you so much for tuning in. We will see you all next week. 

MAX: Take care. 

[MUSIC PLAYING]