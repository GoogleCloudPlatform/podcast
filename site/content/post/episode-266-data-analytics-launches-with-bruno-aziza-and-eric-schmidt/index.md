+++
audioDuration = "00:44:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.266.mp3"
audioSize = 63885346
categories = ["Data Cloud Summit", "Dataplex", "Analytics Hub", "Big Query Omni"]
date = "2021-07-07"
description = "Stephanie Wong and Jenny Brown are your hosts this week, discussing data analytics with the yin and yang of the field, Bruno Aziza and Eric Schmidt."
draft = false
episodeNumber = 266
hosts = ["Stephanie Wong", "Jenny Brown"]
title = "Data Analytics Launches with Bruno Aziza and Eric Schmidt"
image="/post/episode-266-data-analytics-launches-with-bruno-aziza-and-eric-schmidt/images/hero/hero-EP-266.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ofn2dv/episode_266_data_analytics_launches_with_bruno/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and [Jenny Brown](https://twitter.com/jbrojbrojbro) are your hosts this week, discussing data analytics with the yin and yang of the field, [Bruno Aziza](https://twitter.com/brunoaziza) and [Eric Schmidt](https://twitter.com/notthateric). Our guests introduce us to three new Google offerings, Big Query Omni, Dataplex, and the Analytics Hub, and discuss the uses and implications of each and how they work together to achieve goals.

Bruno and Eric describe challenges in data analytics and how Google uses these as opportunities to create problem-solving systems that solve real client problems. Through real-world examples from companies like Equifax, we see how companies are getting more information from their data in a way that creates actionable opportunities to improve customer experiences. 

For multi-cloud companies, Big Query Omni gets the most out of data that exists in multiple clouds. To accomplish this, Google takes the analytics to the data and is able to reach all appropriate data across clouds without having to move it. This allows for cheaper analysis with much less system downtime. Support for Azure was added this year. 

The new Dataplex software helps customers intelligently manage data assets, especially in distributed systems. Dataplex lets companies automatically discover data, make data secure without having to move it, and apply governance and policies centrally so the data is accessible. Rather than sit unused, data can now be found easily, analyzed securely, and put to work for companies no matter where their data lives.

For analytic asset sharing, Analytics Hub lets companies coordinate with others to get the most use out of their data efficiently. Analytics Hub gets to data value as quickly and easily as possible. Companies can publish, discover, and subscribe to shared assets, create exchanges that combine data sets, and curate exchanges of data and insights for full information sharing.

##### Eric Schmidt

[Eric](https://twitter.com/notthateric) is the Head of Advocacy for Data Analytics at Google and has been with us for almost 8 years. He comes to us from Microsoft, where he led Advocacy and Evangelism there, too.  Eric is an expert in products like BigQuery, Dataflow, Dataproc and leads a team of leaders who help customers turn data into value. In his downtime, Eric is also a Dj at KEXP 90.3 Seattel - KEPX.ORG where he guest hosts a modern global music show. You can find Eric on Twitter.  His handle is [@notthateric](https://twitter.com/notthateric) - not to be confused with the ‘other Eric Schmidt’ here at Google.  In fact, internally, we affectionately call him “cloude”.

##### Bruno Aziza

Bruno is the Head of Data & Analytics at Google Cloud and specializes in everything data, from data analytics, to business intelligence, data science, and artificial intelligence.

Before working at Google, Bruno worked at companies like Business Objects when it went IPO and Oracle, where his team led one of the fastest turnarounds in the business analytics industry. He led the launch of startups like Alpine Data (now part of Tibco), Sisense and AtScale and he helped Microsoft grow its Data unit into a $1B business. Bruno has been educated in the US, France, the UK, and Germany. He has written two books on Data Analytics and Performance Management.  And he has a monthly column on Forbes.com on everything Data, AI and Analytics. 


##### Cool things of the week

* BigQuery row-level security enables more granular access to data [blog](https://cloud.google.com/blog/products/data-analytics/bigquery-provides-tighter-controls-over-data-access)
* Expanding access to quantum today for a better tomorrow [blog](https://cloud.google.com/blog/products/compute/ionq-quantum-computer-available-through-google-cloud)
* Expanding partner solutions at the network edge [blog](https://cloud.google.com/blog/topics/anthos/expanding-partner-solutions-at-the-network-edge?es_id=aeba4798c6)

##### Interview

* Data Cloud Summit [site](https://cloudonair.withgoogle.com/events/summit-data-cloud?utm_source=cloud_sfdc&utm_medium=email&utm_campaignFY21-Q2-NORTHAM-summit-onlineevent-er-gc-data-cloud-summit=&utm_contentgen-reg-invite-emails-calendar=)
* Bringing multi-cloud analytics to your data with BigQuery Omni [blog](https://cloud.google.com/blog/products/data-analytics/introducing-bigquery-omni)
* Dataplex [site](https://cloud.google.com/dataplex)
* Analytics Hub [site](https://cloud.google.com/analytics-hub)
* Intelligent Data and Analytics Fabric [video](https://cloudonair.withgoogle.com/events/summit-data-cloud?talk=t2_s2_intelligent_data_analytics)
* GCP Podcast Episode 253: Data Governance with Jessi Ashdown and Uri Gilad [podcast](https://www.gcppodcast.com/post/episode-253-data-governance-with-jessi-ashdown-and-uri-gilad/)
* Public Data Sets [site](https://cloud.google.com/solutions/datasets)
* Smart analytics reference patterns [site](https://cloud.google.com/architecture/reference-patterns/overview)
* Data and Analytics Sharing at Equifax: Immediate, Interconnected, Scalable, and Secure [video](https://cloudonair.withgoogle.com/events/summit-data-cloud?talk=t2_s3_data_analytics_sharing_equifax)
* BigQuery ML [site](https://cloud.google.com/bigquery-ml/docs)
* Learn more about these launches [site](https://www.youtube.com/watch?v=DG1mOPMXJvw)

##### What's something cool you're working on?

Jenny has been working on [Google Cloud Reader episodes](https://feeds.transistor.fm/google-cloud-reader) on BigQuery Explained.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 266 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong back again, and here, I'm with Jenny." >}}

JENNY: Woo-hoo, it's true. I'm here! 

STEPHANIE: You're here in your beautiful home in San Diego. How's it going over there? 

JENNY: It is going really nice. I absolutely cannot find anything to complain about. So it's a pretty good day over here. How are you doing? 

STEPHANIE: I'm good. I just want to say that in your background, Jenny has a really amazing a potted plant ecosystem happening behind there, and it looks pretty nice. A little terrarium life. 

JENNY: Yeah, we've got a lot of plants going on over here. 

STEPHANIE: That's been the pandemic trend, right? 

JENNY: Oh, yeah. These are my new friends, and we get along really, really well. 

STEPHANIE: One of your pots has eyes on it, so I'm afraid that you might be talking to it. Maybe I need to set up more meetings with you. 

JENNY: You'll find out later. It's fine. It's fine. Let's not worry the folks at home, right? [LAUGHS] 

STEPHANIE: Yeah, exactly. Everything is fine. 

JENNY: Yeah. 

STEPHANIE: With the fire behind you. So Jenny, what are we talking about today? 

JENNY: Today, we are talking about the latest and greatest in our data analytics announcements from our Data Summit this year. Pretty cool stuff. 

STEPHANIE: Yeah, we had a lot of announcements at the Data Summit. So we brought on Bruno Aziza, who is the director of our outbound products management for data analytics, and also Eric Schmidt, who is also in our DevRel organization. He is the head of advocacy for data analytics. So no better people to jump on the podcast to talk about those things. But before we dive into it, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

All right, so the first cool thing of the week that I want to cover is that we have a new announcement around the general availability of BigQuery row-level security. And this gives you a way to control access to subsets of data in the same table, but for different groups of users. So just to give some context, in many cases, sensitive data is commingling with nonsensitive data. So you want access restrictions to the sensitive data, and those need to be enabled based on factors like data location or presence of any financial information. So with row-level security on BigQuery, that extends this principle of least privilege access and gives you fine-grained access control policies in BigQuery tables. And BigQuery currently supports access controls at the project data set table and column level. So if you want to read more about how this all works, check out the article that we're going to link so you can learn about the new row access policies. 

JENNY: Got to more granularity wherever possible, right? Another really cool thing that I'm pretty excited about is quantum computing. It's totally the next technological revolution, and it can really help change the world, but only if people have access to it. So in order to help developers, researchers, enterprises alike, we really want to emphasize the partnership that we've got to access IonQ's high-fidelity 11-qubit system via Google Cloud in just a few clicks. So billing and provisioning is handled all through your existing Google Cloud accounts, and you're going to be able to access the power of quantum computing. 

STEPHANIE: OK, so this has been a really interesting, fun topic that everybody loves hearing about, because they talked about it at I/O as well. But you mentioned IonQ. 

JENNY: Absolutely. So they are a company. They are a leader in trapped ion quantum computing. And we've partnered with them to bring this capability to the Google Cloud Marketplace for folks to be able to use, because, again, we can help solve societal problems like climate change, helping develop better batteries with quantum electrochemistry, AI use cases, medicine use cases. There's so much going on here. But we want to make sure that folks have access to this so that they can reap all of those benefits. 

STEPHANIE: Yeah, I'm really excited about this, and I encourage you all to check it out on the Google Cloud Marketplace. So another partner announcement that I do want to quickly mention is that we have a ton new edge partners. So late last year, we announced a new initiative to bring partner solutions to our network edge. So we've had a ton of response at launch. We have more than 30 partners joined to deliver more than 200 solutions to the edge on Google Cloud. And so this article outlines 20 additional partners, including a couple that I'll mention now. 

AirHop Communications for real-time, AI and ML-driven, 4G, 5G, ran automation. We have [? Aricto. ?] We have Keysight, Cognition AI, Leverage, NetApp, Phoenix Real-Time Solutions, and much, much more. So check it out to see if any of them fit your requirements for edge computing. And without further ado, let's go ahead and jump into our conversation with Eric and Bruno. [MUSIC PLAYING] 

Eric and Bruno, so today, we're talking about data, and why it matters, and how you can succeed with it. First off, why don't you start by telling us a little bit about yourselves. 

ERIC: Sure, thanks for having me. I'm Eric Schmidt. I head up developer advocacy for data analytics in Google Cloud. Been at Google almost eight years now, and before coming to Google, I led advocacy and evangelism efforts over at Microsoft just across the pond. And at Google, I focus on products like BigQuery, DataFlow, DataProc, and lead a team of advocates who help customers turn data into value. In my downtime, I spend time in my studio DJing, as well as DJing at KXP 90.3 here in Seattle, or at kxp.org, where I host a modern global music show. You can find me on Twitter @notthateric, not to be confused with the other Eric Schmidt of Google fame. And one known fact internally, my email LDAP is Cloudy, just to help disambiguate the two of us. [LAUGHS] 

STEPHANIE: I love it! 

BRUNO: Well, hi, everyone, and thanks for having me on this. I'm Bruno Aziza. I'm the head of data analytics for Google Cloud. And I don't have a hobby like Eric does. All I care about is data analytics. I've got a pretty boring life. I read books about data over the weekend. 

So if you don't know me, and you've been in the data world, I've been doing something wrong, because all I've been doing is data. So I worked for Business Objects right after the IPO, worked for Oracle where we did an amazing turnaround on data analytics. I also had the opportunity to launch a couple of startups. [INAUDIBLE] labs, that got bought by [INAUDIBLE], [? SightSense, ?] AppScale, and just like Eric, I also worked at Microsoft right when we crossed the $1 billion revenue line as a business for data. 

If you hear a little bit of an accent, that's because I'm French. So I've been here in the US for 20 years, but I have studied in France, in the UK, and Germany. And I also am very passionate about the topic. So that's why I've written two books on performance management and also how the monthly [INAUDIBLE] on talks.com where I talk about everything data, AI, and analytics. And my email is easy to guess. It's brunoaziza@google.com my last name reads forwards and backwards the same way. So it's an easy way to remember me. 

STEPHANIE: Nice. Wow, so we have eat, breathe, dream about data analytics, and we have DJ on the weekends. I think we might need to sample something from you so we can feature it in this episode, Eric. [LAUGHS] 

ERIC: We'll work on that. 

STEPHANIE: We'll do it. So OK, it sounds like we have a little bit of a yin and yang between you two, which we talked about before this call. And today in the conversation, I think what we discussed is that Bruno, you're going to set the scene with industry context, and some customer examples about data analytics, and some of the exciting launches that we had this year, and then, Eric, you'll tell us how you can actually use our technology to achieve your organization's business goals. So why don't we go ahead and just dive straight into it, Bruno? 

BRUNO: Sure. I mean, we talk about the opportunities and the problems in data and analytics, and there certainly are still lots of problems and lots of opportunities that we can go out and solve. I think-- spent a lot of time with customers, and their biggest challenge is taking the fast-moving, fast-growing, disconnected data mesh and take value out of it, right? So if you think about where the industry has gone to, is data now is part of an ecosystem that's generated by your organization, your customers, your partners. 

And do we know where it's going? We're not going to talk about IDCs, forecasts, 175 zettabytes we'll be creating in the next five years. If you know what a zettabyte is, it's 21 zeros, so that's a lot of data. 

STEPHANIE: Uh-huh. 

BRUNO: But the problem is the majority of customers are still complaining about the fact that they can't get value out of the data. Two quick stats for you. Over 2/3 of the data that's produced actually never gets analyzed. So if you think about that, and you think about the opportunities left, behind it's pretty gigantic. 

And then, when they're able to do something with it, almost 70% of the companies aren't able to actually say that they're able to realize tangible and measurable value from data. So there's gigantic opportunity just sitting right in front of us, and that's why it's exciting to be in the data business today. I've been in this market for 20 years, and finally, it's cool. And so I'm excited to be working with folks like Eric to help our organizations innovate with data. 

STEPHANIE: Yeah, I can imagine. And so you were talking about how there's a lot left on the table there. Can we learn a bit more about why this is happening? 

ERIC: For sure, yeah. And just to set some context, if you think about the arc of innovation and the ecosystem that's growing around data, when I was a product manager at Microsoft back in the early 2000s on SQL Server, we were focused on trying to figure out how to build a better on-premise database for transactional processing. And then, the entire market globally shifted towards, how do you extract value from these transactional systems-- in essence, trying to figure out how to drive business intelligence and decision support-- or for those who remember that phrase, right? DSS-- that was all the rage back then. And it was a big shift in the market. 

And then, as we moved forward into the cloud, companies started to realize that aggregation and synthesis across these various silos of transactional systems, whether you're on SQL Server, or Oracle, or maybe a burgeoning purpose-built warehouse, the idea was to aggregate data as much as possible so you could potentially gain more insight across these various silos. And echoing Bruno's stats, there was this growth of data that was happening at the same time. But in the last eight to 10 years, things have just hockey sticked, because there are so many more applications. Obviously, the internet is driving a lot of the growth of this data. Everything is an IoT device, even us as humans. We're just constantly emitting data through the apps and the devices that we're using. 

So the race now has shifted beyond just warehousing, and it's shifted towards being able to extract insights and value from that data, primarily from the lens of looking forward, not posthumously, or not, necessarily, just focused primarily on the past. And this is where the challenge is, because how can you wrangle and put your arms around all that massive amount of data that you have collected over the last three, four, five, 10 years, or maybe even if a startup, for the past couple of years, activate it on now, and look at the future through a high level of precision and accuracy? That's what's happening right now. That's where the real challenge is. And you'll see some of that, maybe, play out in this dialogue today where we're talking about we've solved a lot of the problems in the past around warehousing, and aggregation, and BI, and now, we're heavily focused on helping people to understand what's going to happen, potentially, in the future. 

BRUNO: You see how quickly the space has evolved, from Eric talking to you, in the last 10 years, putting one on-premise system, to now, obviously, a lot more data. But also, CIOs and data officers are pressured to innovate with data. And they have gigantic questions like, where should my data be? Should it be in one cloud? Should it be in multiple clouds? And on top of that, they've got a real opportunity to enable their business communities. 

So let me just give you a few more stats, just so you get a sense of how deep the problem is. 86% of analysts today struggle because their data is out of date. 90% of employees say that their work is slowed down by unreliable data. And 80% of the analytics that we do today is still descriptive. So while we're moving really fast, creating a lot of data, evolving infrastructure, there's still this missing link on, how do I enable the technical organization as an organization to really enable business counterparts, business analysts, and information workers to innovate with that massive amount of data? And so it's a challenge, but it's also a great opportunity, because today, setting up systems that do that at large scale is a lot easier than when Eric was trying to figure it out with Microsoft. 

STEPHANIE: Yes, exactly. I mean, it is a continuously accelerating field with the amount of the volume, velocity-- the three V of data. And so I just want to hone in a little bit more into the actual technology issues that exist, and also some of the solutions that your team has recently announced, Bruno. Because I know last time I counted, I think we had something between 13 and 15 new services and programs launched at our recent Data Cloud Summit this year. We're not going to be able to cover all of them today in our conversation, but talk to me about DataPlex. 

BRUNO: First of all, you're right, it would take us hours to cover all the innovations we introduced at the Data Cloud Summit. So I'd highly encourage everyone to go to the URL. I know [INAUDIBLE] this is part of the show, so you can get access to all the sessions. It's free. It's all recorded. And you'll hear from amazing customers like Equifax, Deutsche Bank, KeyBank, Rackspace, Zebra Technologies. You'll also hear from digital natives like PayPal, and Wayfair, and Workday, Electronic Arts, and so forth. 

And so I think that's really what's important, is, of course, our job here is to deliver innovation for customers to realize value. So I would prioritize, go and listen to the sessions. From an innovation standpoint, we've been spending a lot of time listening to what customers need, and there's at least three key issues they care about. The first one is this issue of multi-cloud. So data is no longer is something that you manage centrally and holistically, and certainly not just on-premise. And we know that to win, customers have to think about data as part of an ecosystem. 

So for that, we announced just this past month BigQuery Omni for Azure-- who, if you remember, we shipped BigQuery Omni for AWS last year, so this is a continuation of that. We also announced Google Looker on Azure, which now gives you an opportunity to run Looker next to your data if it is hosted on Azure. So lots of flexibility around working in this complex multi-cloud world. 

The second issue and opportunity, really, for customers is the intelligent management of their data assets. If you think about as their environment is becoming more complex, more diverse, more distributed, they need solutions like data fabrics. So we introduced a product called DataPlex. That's our intelligence data fabric. 

And then, the third issue that customers often encounter is really the ability to securely share analytics assets within a company, but also with the companies and partners that do business with. Think about retailers that need to share logistics information, inventory information, and so forth. So for that, we introduced a great product called the Analytics Hub. Those are at least three products that should matter to people listening to us-- multi-cloud, intelligent data fabric, and Analytics Hub. 

JENNY: Awesome. So let's circle back a little bit to multi-cloud. You mentioned BigQuery Omni. Can you tell us a little bit more about what that is and why it matters? 

BRUNO: Yeah, I think everyone listening to us today is probably confronted with the issue of cloud adoption and multi-cloud adoption. It's pretty clear, you look at research, more than 80% of businesses reported they're using multi-cloud this year. More than 90% of them say they have plans to have a multi-cloud provider strategy. So basically, companies run in a multi-cloud world today, and it's not going to slow down. In fact, it's probably going to accelerate. 

And so while we look at the ecosystem here, and our competitors really will require that you move, copy your data from one cloud to the next, our approach is a little different. We meet you where you're at. And so what that means is BigQuery Omni lets you query the data where it is stored. 

And it could be stored in Google Cloud. It could be stored in AWS. Now, it could be stored in Azure. And we allow you to do that without cross-cloud movement or copies of the data. That's really where BigQuery Omni is going to enable your organization to get up and running quickly. Because if you think about BigQuery Omni's core engine, essentially, it runs the necessary compute on the clusters in the same region of where your data resides. So instead of taking the data to the analytics, we're taking the analytics to the data. 

So imagine the situation where you're a Google and an AWS customer, and you're using BigQuery Omni to query, for instance, Google Analytics 360 ads data that's stored in your Google Cloud, but you also want to query the logs data that's in your e-commerce platform that's stored in AWS SS3. And so this is where this product allows you, from one single pane, to do this cross-analytics work. 

And then, of course, on top of that you can easily build a [INAUDIBLE] Data Studio dashboard, so you can envision your cross-cloud data. So we just announced here at the event the BigQuery Omni for Azure. And so I'm really excited about this, because for the first time now, customers are able to do cross-analytics across Google, Amazon, and Microsoft Azure. This is really at the core of our multi-cloud strategy for analytics. It makes it easy for customers to analyze data wherever it's stored. 

At the event, we had this great session by Electronic Arts, who talked about their multi-cloud marketing attribution model, and that's breaking across information silos. So we expect this offer is really going to help organizations solve a lot of issues around this highly distributed data environment that they're dealing with today. 

STEPHANIE: Yeah, can I just jump in for a quick second? Because I think this is huge, just knowing about the existing problem space when it comes to data warehousing between clouds and environments. So if you are able to bring the platform to your various siloed data sources, that essentially eliminates the issue of having to move vast amounts of data into a single source, which typically has been the case. So how is this being received? Is this really helping to solve that issue, now that you're able to deploy the BigQuery platform over, let's say, on Amazon? 

ERIC: I can jump in to share some context from what we see with customers that are adopting. There's probably three or four things right off the top of my head that stand out. So one, you talked about not having to move data. And definitely of value whenever you have a massive amount of data and you want to do aggregation, inquiry push-down-- so say reducing 10 terabytes-- or maybe a couple of petabytes-- to maybe one row. You're trying to get a very, very fine-grained piece of analysis out of that aggregation. One of the key use cases for being able to run BigQuery on AWS as well as Azure-- so taking the power of BigQuery engine and being able to do that reduction without having to move data. 

Because yeah, the cost is one thing, just moving the data around. Then you think about latency-- so it takes time to move that data. So you are also reducing or just eliminating the latency aspects there. 

Others that come to mind if you think about security models, enterprise, who has maybe implemented a very specific security model, maybe on Azure with Active Directory, they may not want to just rip and replace and try to migrate that security model over en masse to another cloud provider. So they can maintain their existing security model, also getting the benefits from aggregation. 

Another one could also be governance. So beyond security, think about governance, lineage, logging, et cetera. Again, enterprises have typically built these purpose-built systems. And although they do decompose and re-platform these cross-cloud, there is a nice sweet spot for Omni to help folks-- maybe it can be a couple of months, or it could even be a couple of years-- managed and maintain existing systems without having to migrate them immediately. 

STEPHANIE: That's interesting, because earlier in this year, we actually had Jessie and Uri on the podcast to talk about their book about data governance. So I can see the intersection between their takeaways, and the lessons that they've been able to impart on the community, and how this platform and our new approach is making it much easier for them-- not just coming from top down, but the actual folks within an organization who are responsible for maintaining these systems and managing pipelines, et cetera. So I can see that this will have a big impact for all the users of data. But do you have any thoughts about that? 

BRUNO: The other aspect here is the aspect of agility. So you don't want to be thinking constantly about data movement and optimizing pipeline to get to the end results. And so I think when you think about BigQuery Omni, in addition to everything Eric just talked about is this idea that, hey, you know what? If your job is to deliver value from data, now we've given you a platform that allows you to do that across any data. 

Now, in the topic of governance, this ties very nicely with the second product announcement that we talked about at the event. And Eric just talked a little bit on the complexity here, that companies did environments are becoming more complex right. And now you've got data everywhere-- that's true-- and your data is diverse. It's sophisticated. It's distributed. You have data in your data lakes. You have data in your warehouses, your database, your data [INAUDIBLE]. You have data on-premise. You have data across multiple clouds. And so the question is, how do I provide, now, value, as well as manage my [INAUDIBLE] data, manage my data quality, and govern? 

And so we know this is a nightmare operationally for organizations, because they either have to move data around, or duplicate processes, and create their own homegrown solutions to manage the data. And to be honest, these solutions become obsolete the minute or the second the data changes. And so what we see is that talking to customers and asking them, hey, what do you think about the status of your data governance capabilities? And a vast majority of them will tell you, they are at various levels underdevelopment. And that gets in the way of creating a well-articulated data strategy. 

Now, of course, here, we believe that organizations should be able to essentially have the freedom to choose where do they store their data based on clients' performance, whatever is important to them. They should have the tools to make it available to everyone, while making sure they have security and governance centrally to manage all that. And that's why we built DataPlex. So it's a product I'm really excited about, because it brings a lot of the intelligence to this really complex, convoluted issue of distributed data and allows you to do three things, essentially. 

First one is automatically discover data. That's really important, so that you don't have to struggle with that one step. Then, second, we want to intelligently curate, secure, and manage your data without actually having to move it, which is fairly complex to doing, and we feel we have the competitive advantage to enable you to do that, not just in our own stack, but also, ultimately, in other stacks. 

Finally, we want to make sure that once you've done these two things, you can apply governance and policy centrally, because we want to make sure, of course, that the data is accessible to the people that really need to have it. And so we build this capability from the ground up. This is for distributed data, and we have a broad and ambitious vision for it. Out of the gate, of course, we're going to make sure we focus and a great job on the Google Cloud-first assets-- so think about BigQuery and other assets that we already manage at scale. 

But if you're listening here, and you're struggling with this issue of managing data at scale, know that you're not alone. There are many customers like that. In fact, one customer that did a great job at the summit is Equifax's Kumar Menon. He's the SVP of data fabric. So this concept of data fabric is becoming really hot. You could see people now have a title, line to that. And then, you'll hear from him on how, particularly in a highly-regulated industry like financial services and insurance, how they think about the intelligent data fabric. 

STEPHANIE: Thank you so much for that, Bruno. Eric, how do you see this helping your customers-- the data engineers and data scientists alike? 

ERIC: Sure, I want to index on the first value prop that Bruno brought up around DataPlex, which is focused on discovery. As a data engineer and data scientist, this is what gets me really, really excited about DataPlex as a product, but more so how it's going to help fellow engineers and scientists inside of large organizations. I think the number is roughly around 70% of data that's collected by organizations goes unanalyzed. So Bruno had shared some stats about just the challenges around accessing and getting value from data. 

So as a data scientist I would look at it and, say even if it's 50%. Can you imagine if like half of the data that your enterprise is collecting never gets analyzed, but yet you are spending time, and effort, and money storing it and putting governance and security on top of it, et cetera? It's kind of mind-blowing. 

So the discovery aspects of DataPlex will help automatically open up the availability and the metadata for the data itself. And this is going back to a question. I was like, how is this going to help engineers and data scientists? This is typically like step zero, step one whenever you're going down an analysis or a hypothesis journey. I need to go find the data, so being able to automatically discover it will help drive efficiency. 

And then, from there, discovery takes you into the questions of, well, now that I see it, what is this thing? What are these columns? What are their names? What are the column types? Where do they come from? What are the descriptions? If they're aggregations, what are the aggregations of? Then, the more efficient you can get through that process, then the faster you get to actually analyzing the data. 

So the discovery piece, I was laughing a little bit whenever Bruno was listing off the value prop, because it's like, it does this, this, and this. All of those are true. But from my perspective, the discovery piece is the most important, because then that unleashes the power of the engineer, and the scientist, and the analyst. 

And then, from there, if you go into an admin or an engineering perspective, being able to do enterprise-grade governance on top of that data, it's not only value, it's an absolute requirement. Because if you think about unleashing the access to now, say, 50% or 70% of data that wasn't being activated before, that puts a lot of pressure on the admin, DataOps, DevOps, and security team inside an organization. So being able to do highly flexible and scalable governance on the data will then basically remove pressure from the rest of the organization and, in essence, let the engineers and data scientists do what they want to go do and what they need to go do, which is extract insight from the data. 

STEPHANIE: Yeah, and I think we just saw there the yin and the yang at play here between you and Bruno. So thanks for providing the context around that. And we've just covered a lot here, but there is at least one more thing that I do want to talk about, which are data exchanges. Bruno, I know you mentioned that at the beginning, so I want to make sure that people hear about this, and what it is, and how it connects with the solutions that Eric and your teams work on. So tell us about it. 

BRUNO: Yeah, you're right, Stephanie, that I could talk to you about these innovations for three hours. So I'm happy you're managing the time here. And so we've talked about multi-cloud, and we've talked about governance, which are big, big issues for companies dealing with data. And this third issue I'm particularly excited about, because this is about sharing analytics assets. 

We know today that sharing data is hard. There are lots of options, of course, for data marketplaces out there, and they have great offers to let you download the data and start working with it. And frankly, data sharing is not new. I think it was invented in the '80s or the '90s. But the problem with data sharing today is at least, there are two issues with it. 

One is the process itself. So when you think about traditional data sharing, it requires a batch data pipeline to extract the data from one database, then you store it in a [INAUDIBLE] file, then you transfer the data to your endpoint into yet another database. You end up making multiple copies, which end up costing you more storage, particularly if you're dealing with multi-petabyte data sets. And then, once you're done with that, you still have to do a bunch of work. And sometimes, you run into the risk of bypassing data governance processes. 

So that's problem number one, is the process with data sharing today, if you think about the old way of doing data, is really an issue. But beyond that, the second issue is the issue of value. Getting a platform to deliver data to people is great, and if you're able to manage that infrastructure, that's excellent, but it's just a beginning. There's a lot more work that happens after this. Often, I joke that traditional data sharing platforms, for that matter, they are really like gift cards. It's a great thought, it's a great gift, but now, you've got to do a lot more. 

So for instance, if I take, for example, when's your birthday? 

STEPHANIE: It's in August. 

BRUNO: August, OK. And so we're recording this a little bit before that. So that's coming up. So if I give you a gift card for your birthday, you're probably going to think, well, Bruno, that's nice and thoughtful, but realistically, I just gave you errant. You now have to take that gift card, you have to convert it into something of value and get something that you really want. So when I think about traditional ways of doing data sharing, it's basically the same thing, is that it's a great start, But now, I just gave you a bunch of work to get to the finish line. 

And our job in the data analytics business should be about getting you to value as fast as possible. And we know this, by the way, because we've been offering data sharing for almost a decade here. BigQuery has had cross-organizational in-place data sharing capabilities since the beginning, since 2011. In fact, if you look at recent metrics, in April, I think, over a seven-day period, over 3,000 different organizations sharing 200 petabytes of data. And that's just numbers. They don't include the sharing between departments of the same organization. 

So you can imagine the amount of insights we have about companies doing this at scale. And the context and experience that we've now learned tells us that customers want a lot more. That's why we built the Analytics Hub. The Analytics Hub is a service that allows companies to, of course, publish, discover, and subscribe shared assets, allows publishers to create exchanges that combine unique data sets from Google with commercial industry and public data sets, and lets publishers really curate these exchanges internally and externally, and also see the metrics at an aggregated level so they know what exchange is popular, what's working. 

And notice here, I'm not calling this a data exchange anymore. We are past sharing just data. We want people to share insights. So for instance, you take a service like BigQuery, we have embedded BigQueryML on top of BigQuery. That's just built-in capabilities. Our competitors have bolted on their machine learning capabilities. We want to get you to value as fast as possible. 

So with Analytics Hub, we think we going to open the opportunity for more organizations to do much more than sharing data. We can share machine learning models. We can share enriched dynamic dashboards, et cetera, et cetera. And so that's where I think we're going to be participating in this new economy of sharing more than just data. Hopefully, Jenny, you know enough about what you care about that I don't have to give you a gift card. I can actually give you everything you need to get what you really want. 

JENNY: I was going to say, that would be the first time I think I've gotten a birthday gift that filled that void. So don't tell my parents. 

STEPHANIE: [LAUGHS] 

JENNY: And I love the way that you gave that example. It really does-- even if you're not dealing with tons of data at your own company, it really does bring it home and make it much easier to understand there. And this also connects really well with the design pattern initiatives that you all are driving. Can you tell us a little bit more about this? 

ERIC: Sure, I'll jump in on the design patterns piece. And I do want to underscore an element, though, to the Analytics Hub announcement that Bruno just talked about. BigQuery has been providing data access and data democratization almost since day 0, whenever it was built. So this whole idea of separation of the query engine from the storage engine has enabled both organizations-- so almost all the organizations I work with leverage BigQuery, really as both a warehousing and then a data mark function, to basically provide access to all different types of data sets inside an organization. But you-- developers, engineers, scientists out there-- also have access to hundreds of data sets that exists in our Public Data Sets program today. So if you're thinking about needing additional data to enrich what you already have, of course, a lot of these data sets, commercial data sets, will be coming on board in the Analytics Hub launch. 

Today, we have existing public data. You can go get data for NOAA Weather, federal census data, sports stats, liquor sales in Iowa, COVID information-- all types of data. And we have hundreds of customers that I know of off the top of my head that I work with who build in and on those public data sets today. So I'm really excited about analytics, but I also want to give a high five to the existing Public Data Sets program, because it adds a ton of value. 

One of the values that it accrues to is our design patterns work. So this is something that we be kicked off roughly about a year ago in partnership with Bruno's team. And the idea here is to build something that is beyond a simple kind of how-to sample-- like it's bigger than a breadbox but smaller than a refrigerator. If you think about an engineer or data scientist, what they really want to know is how to do something, and the why, versus just showing them, here's a particular feature. 

The moniker, if you will, the name that we have for this, we call them "design patterns." And the idea is to take a business problem-- something that's grounded in business workflow and aligned to a vertical like retailing, life sciences, finance, et cetera-- and then align it to a specific business challenge. So we built patterns for things like propensity to purchase, churn analysis, recommendation systems for different types of use cases, fraud detection, et cetera. And what you can do as a practitioner and consumer of these patterns is look at our code that we wrote to solve the problem end-to-end, then read the whitepaper and the blogs that we write. Because some people, they read code, but they also want to know the reasons why we did things. 

And for folks who would rather watch versus read, we're also building video assets that complement the written blogs, as well as the code. And then, we've also been hosting live events. We're bringing hundreds or sometimes thousands of practitioners into our working space and letting them connect with the folks who are building these patterns. So it ends up creating this nice bidirectional environment, versus just reading something and consuming it in a unidirectional way. 

And the last piece that I'll highlight here is that we're not just looking at this from one perspective. So we cross-connect things. Like part of this pattern, you're going to need to implement some data engineering discipline, and maybe some data analytics and warehousing discipline, maybe some BI, and some data science, and some ML, and also, maybe, some DevOps or DataOps. Those are all the things that are required in order to build out a pattern. 

So I encourage you to go out. You can Google for them. We'll leave you links as well on this publication. But we're always looking for more pattern ideas beyond just what [INAUDIBLE] team. Although, they've been doing an awesome job feeding us. We always like to hear from customers. 

Because ultimately, at the end of the day, this is what is probably the most exciting part about this job, is whenever we write something that resonates with-- even if it's a single customer. And we get all types of feedback on the patterns. We get an email saying, I just picked this pattern up. It's the exact solution for what I needed. High fives to everyone. Or, we're maybe 50% of the way, and then they want to go pick up a call with us or maybe have a discussion with Bruno's team in order to figure out how to, potentially, commercialize some of this work. 

BRUNO: I want to add something to what you're saying here, Eric, because I think this is where all of the technology we just talked about, this is where it all comes together. And these patterns are not, Eric and Bruno just coming up with ideas to do. They all come from the community-- customers, partners telling us, I need to solve problems Y. And as we establish this problem is broad and is going to help the community holistically, we go out and build them. 

Let me give you a few examples, right? You think about propensity to purchase. You think about, if you're in retail, product recommendation systems. If you're in telco, anomaly detection, demand forecasting. If you're in financial services, real-time credit card fraud detection. And those originate from customers who also have this desire to build the solution. 

We go out, we give them the simple data set, the architecture guidance, the simple code. So it gets them started. And the great news here is that all this is free. And so if you think about it, as I said at the beginning, our job here is we are going to do everything we can to get you to value faster. And so design pattern is a great example of how we do that. 

STEPHANIE: And that right there is invaluable, as you mentioned, because your audience and the users of these products are, as you said, practitioners. They're looking for practical examples that are going to effect change in their day-to-day at their organization. So I just can't over-emphasize the importance of having these community-led and -driven design patterns that you've built. 

And also, at the end of the day, as practitioners, we are all looking to apply our skills, and learn, and continuously implement the latest the newest technology to make our lives easier, to have more impact, right? So go ahead and check that out. And just to let people know, how can they get started with some of these things that you just mentioned? 

BRUNO: Simply go to the Data Cloud Summit site. Like I said, all you need to do is register. All the sessions are available for you for free. 

On the design pattern, before Eric talks about them, I also want to tell you that this idea here has taken off in a way, now, we have partners of ours building design patterns. So you think about a company like [? Quantafi ?] or [INAUDIBLE] for instance, that partnered with our team to go out and build those. So certainly in the community, if you have ideas, don't shy away. Just reach out to us and say, look, I'm trying to do this thing. This design pattern over here doesn't really quite answer it. Let us know, because we're here to help you. But I'll let Eric kind of close the reference to the design pattern site. 

ERIC: Sure, yeah. If you just go up to cloud.google.com/architecture, you can see all of our artifacts for architecture. And specifically, there's a reference patterns section. And then, there's a taxonomy for the different types of patterns that we've built. If you don't see one that resonates with you and you're looking for one, hit me up on Twitter. @notthateric, my DMs are open. And we do get a lot of feedback from folks, both for whenever we publish, and then after the fact. And my team is very, very vocal, so if you follow me on Twitter, you can also see who am retweeting on my team. 

STEPHANIE: And remember, folks, it's @notthateric. It's literally @notthateric. It's the best handle. 

JENNY: Can't get over that. It's hilarious it really is. OK, well, before we wrap up anything, that you want to leave the audience with about all these exciting announcements that we just covered? 

BRUNO: The main thing I would tell everyone is, don't hesitate to engage with us. LinkedIn, Twitter, email us. You have our email address. I'm not going to give you my phone number, but this is as close as it gets here. 

We want to understand the blind spots. We know that you're making a choice in partnering with Google. We feel very strong about our ability to innovate and deliver, and we want to hear from you what's working and what's not working. So that would be my one call to action, is reach out to us and let us know how we can help you. 

ERIC: Yeah my call to action is, if you're new to Google Cloud, immerse and digest what we're doing around fully-managed services. So if you're coming to the cloud and haven't taken time to understand what BigQuery is, why it was built the way it was, and the value that it adds, immerse yourself in it, because it is a fundamentally different way of doing warehousing, [INAUDIBLE] and democratization at scale. 

The same applies for DataFlow which is our fully managed environment for batch and stream processing. The reason why I bring this up is because if you haven't run on the platform, most of the folks who look at it and say, this is how I've been running on other clouds or on-premise, and this feels very different to me. So how do I trust you? What's your story around openness, and interoperability, and integration? And a lot of that we talked about today. 

So the fact that we have BigQuery running across Cloud, or most of these products are all built on standards-based services, standard SQL, et cetera, I would immerse yourselves in those things. And then, you could jump into the patterns to see, what is the intersection between fully managed product and a particular business use case? Hit me up on Twitter, and we can carry forward the discussion and go have a beer with Bruno. 

JENNY: [LAUGHS] Great guidance. Well, I just want to thank you both for being on the podcast. And all I can say is, let's have you back on to go through the rest of the 12 to 13 other announcements one day [LAUGHS]. 

BRUNO: Any time. 

ERIC: Thank you. 

STEPHANIE: So that was an awesome conversation, and just like how data amounts are increasing, we had a lot of information going on there. Something that I really appreciated was the incredibly strong analogy game that Eric and Bruno brought to the table. 

JENNY: Yeah. 

STEPHANIE: Right? I mean, especially with that gift card, which I will be waiting for. But that gift card analogy, of giving someone an errand or telling them what they need to do, rather than actually seeing what they want and going for that specifically. With the amounts of data that we have, it's really, really challenging and can be overwhelming, frankly, for a lot of businesses to derive value from that. And so I really appreciated all of these different ways that we're now enabling folks to relate to problems that we've already identified, bring up their own issues that they want to be looked into and resolved, or work with all these different public data sets or ways of querying their own data in order to derive value and to get those incredibly potent and powerful insights from the information that we already have available to us, or that they already have available to them. 

JENNY: Yeah. 

STEPHANIE: What a showstopper, right? 

JENNY: Yeah, yeah. And you're just talking about the problems that data presents. And it reminds you of that saying that's like, mo' money, mo' problems. 

STEPHANIE: [LAUGHS] And in the data world, it's like mo' data, mo' problems. 

JENNY: Right? 

STEPHANIE: It is hard to wrangle data, and collect it, and realize that you have petabytes of data sitting in your data warehouses, data marts, et cetera. And it's hard to drive value, as you said. But seeing that Eric was mentioning that this is becoming an increasingly interdisciplinary world, so your data teams need to understand both the analytics, experimentation, pipeline data engineering world, but also DevOps, security, data governance. 

You essentially need to envelop yourself in the extended world of data analytics. And then, on top of that, you need to be able to operationalize it. How do you build in best practices and maintain control over your data, and how do you share data safely outside and within your organization? 

So with the Analytics Hub, for example, you can publish your data sets for consumers and subscribers of your data to get better ROI on what you're collecting. And I agree, some of his stats were jaw-dropping. But we've seen that they've used community feedback to inform our product strategy. They're taking a huge part of the data movement out of the equation, which has traditionally been a big overhead for companies that have data siloed in various locations, including multi-cloud. 

Behind the scenes, BigQuery Omni now enables you to run the Anthos clusters within BigQuery as a managed service and actually get the data from storage derived from AWS S3 buckets, et cetera. So this is just changing the game. It really is. 

JENNY: It's making things so much easier. You don't have to just be under an avalanche of data at this point. You're able to pick a path or discover a path, because we're bringing that value to the table. It's really, really cool stuff, just to put it mildly. 

STEPHANIE: So yes, so some of these things are either in preview or private alpha. We're going to include the links, of course, to the product pages. That's where you'll be able to sign up online if you want to get your hands on BigQuery Omni, for sure, Analytics Hub, DataPlex, there's Data Stream. There's a bunch of products that we didn't even get to today. So definitely check that out. 

But as we wrap up, Jenny, anything that you're working on that's related to this? 

JENNY: Oh, you betcha! I'm really glad you asked. 

STEPHANIE: [LAUGHS] 

JENNY: So if you're new to BigQuery, Eric recommended that you really immerse yourself in that. And something that I am working on that really pairs nicely with that is the "Google Cloud Reader Podcast." We actually had a few of our teammates Carter and Alicia read through some really, really wonderful "BigQuery Explained" articles. So we've got four of those up there for you, and feel free to check out all the other episodes too and let us know what you think about that. But that's pretty much it, because you know I'm only doing one thing here at a time. [LAUGHS] 

STEPHANIE: I've absolutely loved those "Cloud Reader" episodes. So definitely check that out. And Jenny, thanks so much for co-hosting. Love having you on. 

[MUSIC PLAYING] 

JENNY: Absolutely. I'm excited to be on here as always and can't wait to be back. 

STEPHANIE: Yeah, and for everyone else, we'll see you next week. 

JENNY: Bye!