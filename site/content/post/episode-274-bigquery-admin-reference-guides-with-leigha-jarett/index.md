+++
audioDuration = "00:26:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.274.mp3"
audioSize = 64703515
categories = ["Data Storage", "Data Management", "Data Governance", "API"]
date = "2021-09-01"
description = "Your hosts Stephanie Wong and Alicia Williams talk about BigQuery Admin Reference Guides with guest Leigha Jarett."
draft = false
episodeNumber = 274
hosts = ["Stephanie Wong", "Alicia Williams"]
title = "BigQuery Admin Reference Guides with Leigha Jarett"
image="/post/episode-274-bigquery-admin-reference-guides-with-leigha-jarett/images/hero/hero-EP-274.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/pfy5zx/episode_274_bigquery_admin_reference_guides_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Your hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Alicia Williams](https://twitter.com/presactlyalicia) talk about BigQuery Admin Reference Guides with guest [Leigha Jarett](https://twitter.com/leighajarett). Leigha tells us a bit about the origins of the Admin Reference Guide, which was developed to address frequent customer questions. The series of guides and videos covers onboarding topics from resource hierarchy and APIs to BigQuery tables and storage in an effort to help new admins get started.

The team's Reference Guide on tables helps admins understand the difference between federated and native tables, and Leigha tells our listeners some tips for using each type. Slots and reservations for workload management in BigQuery can be challenging to understand, but these Reference Guides and accompanying videos offer clear explanations. Optimizing projects for speed and monetary efficiency are important topics for any client, and Leigha and the optimization team have addressed these concerns as well. Tips for monitoring, data governance, and the secure sharing of data are also included in their video series, BigQuery Spotlight.

We wrap up with a discussion on BigQuery APIs and how easy it is to integrate BigQuery and other Google products. 

##### Leigha Jarett

[Leigha](https://twitter.com/leighajarett) is a developer advocate on the Google Cloud Data & Analytics team. She focuses on making sure developers using tools like BigQuery and Looker are getting the most possible value from their data. 

##### Cool things of the week

* Analyze Cloud Spanner data in BigQuery with federated queries [docs](https://cloud.google.com/bigquery/docs/cloud-spanner-federated-queries)
* Release notes dataset in BigQuery [docs](https://cloud.google.com/bigquery/docs/release-notes) and [XML feed](https://cloud.google.com/feeds/bigquery-release-notes.xml)
     * Google Cloud release notes [docs](https://cloud.google.com/release-notes) and [XML feed](https://cloud.google.com/feeds/gcp-release-notes.xml)
     * Release notes in Cloud Console [site](https://console.cloud.google.com/release-notes?pli=1)
     * Top 25 Google Search terms, now in BigQuery [blog](https://cloud.google.com/blog/products/data-analytics/top-25-google-search-terms-now-in-bigquery)

##### Interview

* BigQuery Admin Reference Guide Blog Recap [site](https://cloud.google.com/blog/topics/developers-practitioners/bigquery-admin-reference-guide-recap)
* BigQuery Admin Reference Guide blog posts [site](https://cloud.google.com/blog/search;query=bigquery%20admin%20reference%20guide;paginate=25;order=newest)
* BigQuery Spotlight Video Series [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqLAbIdmcMwsxWg-w8Px34MS)
* BigQuery [site](https://cloud.google.com/bigquery)
* BigQuery Documentation [docs](https://cloud.google.com/bigquery/docs)
* Cloud Spanner [site](https://cloud.google.com/spanner)
* Data Catalog [site](https://cloud.google.com/data-catalog)
* Apps Script [site](https://www.google.com/script/start/)
* Looker [site](https://cloud.google.com/looker)

##### What's something cool you're working on?

Alicia is building new BigQuery architectures in order to understand the journey and identify potential pain areas that may need more support.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone. And welcome to episode number 274 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. And I am here with my very own teammate, Alicia Williams." >}}

ALICIA: Hello. 

STEPHANIE: How's it going, first-time host? 

ALICIA: I know. It's good. I'm a little nervous, but feeling pretty good here on this sunny afternoon. 

STEPHANIE: Nervous? It's just me and you talking in a virtual room right now, right? 

ALICIA: Totally. There's no one else listening. 

STEPHANIE: There's nobody else. Well, for everyone out there, Alicia is one of my favorite team members. Also I think the funniest team member that we have-- although there is some fierce competition on our team, I will have to say. I'm definitely last place, though. 

ALICIA: I have listened to Mark on this podcast. I am not even going to try to compete. 

STEPHANIE: You both have different senses of humor and I think they're both fantastic. So you're up in the running for sure. 

ALICIA: Aw, thanks. 

STEPHANIE: Well, I was going to make you do a fun fact. But I also heard that you're not fun. [LAUGHS] 

ALICIA: This is why I don't join new teams, because they always ask me for a fun fact. And I don't have one. Or Two Truths and a Lie-- I'm very bad at lying, so both those games are hard for me. 

STEPHANIE: Yeah. I always have to sit down and really think hard. And you know what I've started to do actually? I have a note going in my phone for fun facts. 

ALICIA: I'm afraid if I searched my Keep app, there might be a fun fact. And also songs I'll never sing at karaoke. They're there, in case I get guts one day. But they're not going to happen. 

STEPHANIE: Usually people have a list of the songs that they love to sing. And it's probably smart that you just avoid the ones that you're not going to do. Anyhoo, Alicia, tell us what we're talking about today. 

ALICIA: Yes. So we have Leigha Jarett also from our team coming in today to talk about her BigQuery admin guide and series that's about to come to its full culmination this week. And I'm super happy to have her here. This guide covers such a broad and comprehensive range of topics for the BigQuery admin, so it's a really cool discussion. Leigha's super sharp, super smart, and I've learned a lot reading this guide. 

STEPHANIE: I have, too. It's a great guide. Lots of content and details in it for admins and analysts alike, so can't wait to jump into that. But first, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

ALICIA: You can now analyze Cloud Spanner data in BigQuery using federated queries, which is something that Leigha talks about in her series, actually. This is actually a new data source for federated queries. You might want to query your Spanner data for various reasons, like if you're doing an ad hoc analysis-- or you really want your insights in real time, so you need to be able to query the Spanner Database directly-- or if you're building some dashboards. 

So now you can run these federated queries directly on the Spanner data. So you don't need to move the data or copy the data first. And then you can actually join that data with other data in BiqQuery as part of your query. So it's a really cool, new generally available feature. You want to know how I heard about this? 

STEPHANIE: Yes. 

ALICIA: Do you? We might have discussed it. But in the release notes data set that's part of the BigQuery public data sets, it just got added. 

STEPHANIE: Oh, right. 

ALICIA: Yeah. You've heard about this? 

STEPHANIE: The release note data set in BigQuery. Yes, I tweeted about it because I thought it was very cool. We now have a data set available in BigQuery for you to query things like, what are all the security bulletins from the last six months? Or what are the latest 10 feature releases on BigQuery? So go ahead and check it out. You can see all the release type fields, like features, fixes, changes, et cetera. 

And it also is now supplementing our other ways of accessing our release notes, like in our documentation and XML feed, along with vCloud console. And this is in addition to a data set that came out earlier this year as well, which was the Trends data set. And that made Google Trends data available as a BigQuery data set. 

Now, we're streamlining the access to the data set, which was traditionally more manual. And now you can access it in a safe, secure, and private manner and measure things like topics or search term interests on Google Search from a particular city. Whether you're a marketer, executive, or operations manager, you can ask what people are searching for to inform your analyses. So lots of cool work being done in the data set world. 

ALICIA: The release notes data set is pretty cool, but I have a feeling people might be extra excited about the Google Trends data set. So thanks for mentioning that one, too. 

STEPHANIE: Yeah. And this is a perfect segue, because we are going to be talking more about BigQuery and all of the great advice and guidance that Leigha has. So let's go ahead and jump into our conversation. 

[MUSIC PLAYING] 

Hey, Leigha. Thanks so much for joining the podcast. I know you're on our team, so we're super excited to have you here. And why don't we go ahead and start off by learning about your background and some of your work on BigQuery? 

LEIGHA: Sure, thanks. I'm really happy to be here, too. I've listened to the podcast before and it's super cool to be a guest today. But my name is Leigha and I'm on the Developer Advocacy Team, like you mentioned. 

I specifically focus on BigQuery. And sometimes I do work with other data tools, like Dataflow or Vertex API and Looker. But today, I think we're going to talk mostly about BigQuery. 

ALICIA: Yeah, I'm super pumped to have you here, because I've actually been working a little bit with you on the BigQuery admin guide on the video side. And as part of this podcast, I read your blog post, too. It's amazing. So what really was the impetus for starting with writing this BigQuery admin guide? 

LEIGHA: Yeah, it's a great question. So I spend a lot of my time meeting with our biggest BigQuery customers, talking to them about specific topics or use cases and trying to answer their questions. And in a lot of these engagements, I heard the same questions and topics come up over and over again. So instead of reusing this material in a bunch of one-on-one conversations, I thought it would be better to try to publish this in a series that could hopefully be used as training material by our customers when they're onboarding new admins onto their BigQuery teams. 

STEPHANIE: I'm so impressed with it. It's incredible, because you have 8 to 10 videos and blog posts planned or already completed. So you really broke down a lot of these key topics into an approachable way. And especially in two different formats-- for those who want to learn visually, in a video, and for those who want to get a little bit of a deeper dive, through the blog posts. So can you cover what topics you go over in the series? And maybe cover what's the most popular, in demand one that you've done so far? 

LEIGHA: Yeah, sure. So I tried to cover all the different topics that I thought would be relevant for someone who is onboarding onto BigQuery, but from an administration perspective. So the topics include basically the resource hierarchy, how BigQuery fits into the broader Google Cloud resource environment. We talk about different tables in BigQuery. We talk about routines and jobs, which are just execution resources. 

And then we talk about storage, query processing, query optimization, and I think we wrap things up with a tour of the BigQuery APIs-- so a landscape of all the different APIs. And then how you can monitor your BigQuery deployment for ongoing optimizations. Oh, and then I think I forgot to mention data governance is in there, too. 

STEPHANIE: Also, I should mention that you just completed the series and you still have one blog post, right? 

LEIGHA: Yeah, but the last blog post, I think, is actually just going to wrap everything up so that you have one link to go to when you're trying to find any of the videos or individual blogs. 

ALICIA: That's great. When you talk about diving into the tables, that reminds me of the cool thing of the week we just talked about, which is being able to analyze Cloud Spanner data in BigQuery using federated queries. So do you have any tips or high level information to add about what federated tables are versus native tables in BigQuery and when you use each of them? 

LEIGHA: Yeah. So in our second post on tables, I talk a bit about the difference between keeping your data outside of BigQuery and using federation, versus bringing your data inside of a BigQuery table. Basically the key difference is the file format that's going to be used-- so whether or not it's transformed into BigQuery's optimized format that we go into in our storage video, which is called Capacitor. So there are pros and cons to both approaches. 

If you have data in Spanner, it might be tied to your actual application. So data is getting generated. And if you replicate it into BigQuery, you might have a lag in the information. Or maybe you have two sources of truth for different types of processes, which might lead to confusion down the line. So to basically solve those needs, federation offers a great way to keep your data in Spanner, but still join it onto other data sets in BigQuery. 

On the flip side, Spanner is really built for analyzing transactional systems. So when you're talking about large-scale analytics, it might make sense to replicate that data into BigQuery storage. And like I said, we go into it in detail in those posts. So if you're interested in external tables versus native tables, definitely check it out. 

STEPHANIE: What I love about the post is that you don't just go straight into your guides or advice on what option is the best for different use cases. But you also describe the foundation of how it's architected, either for compute or storage, so that we get a better understanding of why things are managed a certain way and why you should go one route versus another. So one of the topics that you cover is slots and reservations. And that's something that I know many people would like to learn about, in order to effectively manage their workloads. So is that something that you have covered pretty excessively in the series? 

LEIGHA: Yeah. You're so right. And that comes up all the time when we talk to customers. And I also see questions about it all over Twitter and Stack Overflow. So slots can sometimes be a difficult concept to understand. And they're unique to BigQuery, so you don't hear about them in other data warehouses. So it's always like a net new topic for BigQuery developers. 

So I do spend a lot of time trying to dig into what a slot is. In one of our videos, we talk about what slots are used for and how they're basically workers that execute parts of the queries. And then in our post on monitoring, we go into detail on how you can monitor slot consumption and how you can use that information to figure out if using reservations-- which basically allow you to purchase and allocate buckets of slots to specific workloads-- is the right path for your organization. 

ALICIA: Yeah, along the lines of really digging in deep and understanding how BigQuery works, I also read you had a post on how to optimize your SQL to make it faster to make it run less expensively. And this seems like a topic that actually both admins and analysts would be really interested in. So I read the admin guide and learned a lot as somebody who's traditionally been an analyst. But I think we should probably tell analysts to read through this, too. 

LEIGHA: That's very true. And it's a great thing that you mention the query optimization. First of all, I need to give credit to our amazing professional services team. I did not think of those optimization techniques on my own. This came from tons of experience that they have in digging into customer queries that are analyzing petabytes of data at a time and highlighting the most common optimization techniques that have the biggest win for our customers. 

But since you mentioned that, yeah, query optimization is valuable for a lot of different people. And we're working on trying to include a lot of this directly into the BigQuery documentation itself for that very reason. We want to make sure that this information is really discoverable for all types of people who are interacting with BigQuery. 

STEPHANIE: Yeah, that's fantastic. I know another topic that has become really front and center recently has been data governance. And for everyone that may not know-- even though it's been heard of so many times recently-- it's made to ensure your data is secure, private, accurate, and available. And so we have a ton of features within BigQuery to help with data governance that you cover pretty deeply in one of your blog posts, like how to classify information, how to use Data Catalog tags, and ingest and stage or share data. And Alicia, you have some videos that are in there from your series, too, so awesome. You'll have to share each other's work. But what are some key takeaways, Leigha, for data governance? 

LEIGHA: Yeah, that was a great point. And shout-out to Alicia for her video on IAM with BigQuery, which is Identity Access Management. So in our video, we really didn't go into too much detail on how IAM works for BigQuery or Google Cloud. And so we focused on other governance factors, like discoverability, and tracking metadata, and categorizing your data. So that's all made possible through BigQuery's integration with Data Catalog, which is still a fairly new product and is constantly evolving. 

So I really wanted this video to just bring awareness to BigQuery administrators that this product exists and how valuable it can be, for not only making assets in BigQuery discoverable to other users, but also tracking metadata like, where did this information come from; different data quality scores; or even how sensitive certain columns are, so that you can create column-level security policies to make sure that only people with highly sensitive credentials are able to access highly sensitive columns and so on. 

And we also talk about integrations with other tools, like DLP, which allows you to scan data for sensitive information or mass data. And we talk a little bit about leveraging orchestration tools, like Composer, to string these different products together and build fully fledged data governance pipelines that both track data quality score, and run SQL validation tests, and just track other metadata, like the security or clearance levels needed to access it. 

ALICIA: Yeah, I feel like DLP is just perfectly positioned for these integrations with BigQuery, so it's great those can be built to be easier and easier to use as an admin. 

LEIGHA: We're doing a really good job of integrating a lot of our data products together. And that's one of the benefits of using BigQuery, is that it's a part of the entire Google Cloud platform. So right from Data Catalog, I can find BigQuery assets without needing to do any work on my part. And right from BigQuery, I can click a button that says Scan with DLP. So it's important that everyone's aware of all these products, because sometimes you're working in your little BigQuery bubble and forget that other things exist. 

ALICIA: I love when there's a button and I can just click on it. I do that all the time. As an analyst, I think in BigQuery, I've been using the console a lot. And so actually, when you started talking about the different BigQuery APIs, I actually love that you called out Apps Script, because the last time Alicia visited GCP podcast was about three years ago. 

And I was working on Google Workspace and using the BigQuery advanced service from Apps Script, which I think is awesome. But I got to learn about all the other different BigQuery APIs and what they're used for. What is the most popular API? And what's your favorite, I guess? Mine would definitely be the advanced service in Apps Script. 

LEIGHA: Yeah, I think that the most popular one is probably just the core BigQuery API, which is what I did to demo in Apps Script. A really cool thing you could do is write an Apps Script that just queries BigQuery using a parameterized query and then populates Google Slides with the results. 

STEPHANIE: Cool. 

LEIGHA: I don't know about you guys, but I worked as a data scientist at Pepsi. And I spent a lot of hours copy and pasting query results into slide decks. 

ALICIA: Been there. 

LEIGHA: So I was like, I wish we had this when I worked there. So I think it was definitely the most commonly used one, but I would have to say my favorite is the Data Q&A API, which is still in preview. But it's basically the first step in introducing natural language processing into BigQuery. So business users can ask a question in natural language and this API will translate it into a SQL query that's sent back to BigQuery. It's still in the early stages, but it's just a cool step in the direction that data analytics as a whole is going into. 

ALICIA: Yeah, I can't wait to see the first demos of how our customers use that. And I'm sure I'll get to see those at NEXT or any time when we're talking with customers. So cool-- I'll keep an eye out for that. 

LEIGHA: Yeah. And I think that's another point that this is just one part of the entire Google Cloud platform. That API was actually built on top of our algorithms that are powering CCAI, like Contact Center Artificial Intelligence, that builds chat bots that our customers use for their own companies. So this is all made possible because we're all inside of Google using this awesome technology under the hood. 

STEPHANIE: Yeah, absolutely. It's really awesome to see those integrations and expanded use cases. And going back to even just the use case of porting over query results into slides, there can be very simple and utilitarian use cases, too. There's so much out there that I think a lot of users aren't even aware of. So it's nice that these guys bring those to light. 

One of the other topics that I think have become more important as well in not just the BitQuery world, but also with machine learning pipelines, et cetera, is being able to make sure you can manage and monitor the tools that you're using to help ensure that your deployments are efficient and also cost effective. So tell us a little bit about your approach to monitoring on BigQuery. 

LEIGHA: Yeah. So this, again, like all the topics here, was something that was brought up a lot in my conversations with customers. They're like, I don't really know where to start. There are a lot of different ways you can look at what's going on in your BigQuery deployment. You have the GCP billing reports, where you can see how much you're being charged for different aspects of the BigQuery service. You have BigQuery's new admin resource charts, which allow you to look at slot utilization and consumption. 

We have just Cloud Monitoring, where you can build your own reports, and also Cloud Logging, which you can build your own reports from log data. And then BigQuery has the information schema views, which allow you to write queries inside of BigQuery to get metadata or usage statistics. 

So basically, when you start to think about how you're going to monitor BigQuery, it can be overwhelming, because there are so many different options and a lot of things you could probably accomplish using any one of those sources. So we really tried to highlight use cases that are most relevant for each one of those data sources. And when it makes sense to actually export them back to BigQuery itself and build out your own custom reports using a tool like Looker or Data Studio. 

So in that video, we don't only talk about monitoring slots-- which is what I mentioned before-- but we also talked about managing costs and specifically digging into areas where you might want to change the way you're loading data into BigQuery or how you're storing data in BigQuery. And we also talk about using the audit logs to look at data access policies and who's looking at what data for more of those data governance use cases. 

ALICIA: It's so helpful to bring it all together, because the platform is getting so big. So knowing where to go-- there's reasons these things live in different places. But sometimes you want to get that bird's eye view of all of them. And I just love the inception of being able to see monitoring data for BigQuery, in BigQuery, at times. 

LEIGHA: Me, too. I think that as well. I'm like, if I am a BigQuery user, I feel pretty comfortable in BigQuery. So that's probably the first place I'm going to go when I'm trying to get an answer to a question. 

ALICIA: So taking together all of these videos, all these blog posts, where is the best place people can go to learn more or to check out these resources? 

LEIGHA: Yeah, so I will send a link to our last blog post. That will have links to all the other posts. And the videos are embedded within those posts. You can also check out the BigQuery spotlight series on YouTube-- that's just #bigqueryspotlight-- to look at all the BigQuery spotlight videos, including the ones that are in this series and ones that you've worked on in the past, Alicia, and other videos that have been produced by our customer engineering team. 

ALICIA: And it sounds like it'll be included in the documentation at some point soon. So that'll be right where you're looking. 

LEIGHA: Exactly. That's what I was going to say is that not only are some of the content being added to net new pages, but maybe you'll see my face pop up in some videos that are embedded in existing documentation pages. 

ALICIA: That will be delightful. 

STEPHANIE: Well, that's amazing. And one thing that I noticed with the videos that you have is that you've also labeled the topics based on the level of comfort that you have with BigQuery and where you're at with your journey. So intermediate level or advanced. So for people who are starting to learn more or want to get more ingrained in it, what's the best way to approach watching these videos or blog posts? 

LEIGHA: Yeah, I would definitely say start with that overview blog that I will send a link for you to include in the description of this episode. And it will put the content in the right order so that you're getting started with modules that build on top of each other and you get progressively into the more advanced concepts. 

STEPHANIE: Great. Well, thank you so much, Leigha, for covering your blog posts and videos. They're amazing. They're so useful. I really enjoy watching all the videos. So for everyone else, we are definitely going to include the links to all the guides and videos in the show notes. And Leigha, thank you so much. Let's have you on back soon. 

LEIGHA: Yes, thank you. 

ALICIA: Thank you. 

LEIGHA: And if any listeners have ideas for a future series or videos, definitely reach out to me on social media. 

STEPHANIE: Cool. We can include your Twitter handle on the show notes as well. Wow, so I love these guides because it gives you very specific information to turn you from a regular user of BigQuery that you know of today into a real power user and administrator of BigQuery. 

ALICIA: Yeah, I would say I agree completely. As somebody that's been doing analysis on BigQuery, I feel like this guide is not just for the admin. It's for the analysts and it's really going to up my game. I know my queries could definitely use some optimization, make it a little faster. 

And as somebody that's been using the console, I think the BigQuery APIs and looking through those-- I'm starting to build some more data ingestion pipelines. And so I know those are going to be really important. So getting familiar with that through this guide is going to be great. So I already have some to-dos. And I only let myself take two action items out of every meeting, so we're full up here. 

STEPHANIE: You are setting yourself up for success there. So that makes sense. So what did you think of the query optimizations? Because I know that was something that you found particularly interesting. 

ALICIA: Well, reading all of the tips around how BigQuery works. And so when you join data or when you run certain clauses in SQL-- and how BigQuery parses that and runs it. Just understanding how to make things more efficient is going to be super useful. I've really just been writing MySQL and appreciating the fact that BigQuery is going to always run faster than how it was in the old days. 

But knowing that I could make a query even more efficient is something that, if I was going to run a query over and over again-- same production-- that I really want to make sure I spend the time to optimize that query. So I really appreciate having the tips from both Leigha-- but her going out to the team and getting folks that have been talking to customers and doing this work. And getting all of their knowledge is super helpful. It just one-ups my game without me having to do a lot of work. 

STEPHANIE: Yeah, I agree. I think that what I mentioned in the conversation is that she takes the time to actually walk through how BigQuery works and why these optimizations, in particular with BigQuery, are so effective. For example, she talks about understanding how joins work and how BigQuery combines data and the relationships and correlation between different disparate sources of data. And then she'll dive into hashing or hash-based joins. So it's a great way to fully understand the infrastructure that you're working with. 

ALICIA: Yeah, so I think it's really helpful for admins-- say a company decides to move to BigQuery. So you have a place to start as an admin, completely guided journey for going from 0 to 60 so that you know what you need to know to design your data warehouse and to get it started off on the best foot possible. And understanding the best practices, but also knowing how it works so that if you need to do something slightly different for your organization, you know why and how. So it's really, I think, going to be a big landing spot for our customers. And I think it already is with what she's already put together. 

STEPHANIE: I agree. For everyone listening, bookmark these pages-- the blog posts, the videos. When you are ready to either use BigQuery more or understand how you can administer better, get better data governance, better query optimization, this is your place to go. So with that, Alicia, I know you've been working on things related to BigQuery. What are you excited about? 

ALICIA: Yeah, so I'm working with one of our teammates, Shane, right now on some of the really top customer user journeys of moving data into BigQuery and why you might want to use different architectures. And getting to hands-on build those architectures so I can see what the pain points are, what works well, what doesn't work well-- how I can describe that to users wanting to follow that journey. So it's been really fun getting to understand the top reasons people bring data into BigQuery and the best ways to do it. 

STEPHANIE: Very cool. We'll be sure to include that as a shout out on the podcast when you are done with it, with Shane. 

ALICIA: Definitely. 

STEPHANIE: All right, well thank you so much, Alicia, for co-hosting today. And for everyone else, we will see you all next week. 

ALICIA: Thanks for having me. 

[MUSIC PLAYING]