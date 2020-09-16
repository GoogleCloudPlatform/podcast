+++
audioDuration = "00:37:34"
audioFile = "Google.Cloud.Platform.Podcast.Episode.231.mp3"
audioSize = 54115177
categories = ["Machine Learning", "Data Analytics", "Data Migration"]
date = "2020-08-12"
description = "Priyanka is back this week, joining Mark as we talk machine learning and big data with our guests Prabhu Palanisamy and Jarrett Garcia."
draft = false
episodeNumber = 231
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "SpringML and Iron Mountain with Prabhu Palanisamy and Jarrett Garcia"
image="/post/episode-231-spring-ml-and-iron-mountain-with-prabhu-palanisamy-and-jarrett-garcia/images/hero/hero-EP-231.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/i8hdo3/episode_231_springml_and_iron_mountain_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Priyanka](https://twitter.com/pvergadia) is back this week, joining [Mark](https://twitter.com/markmirch) as we talk big data with our guests Prabhu Palanisamy and Jarrett Garcia. Iron Mountain, a data management company, securely stores hard-copy and online data for enterprise customers. SpringML aides enterprises in the use of data analytics and machine learning to transform their projects. With the help of SpringML and Google Cloud, Iron Mountain migrated much of their data to datalakes and cloud storage for easier access and manipulation of the data. 

Jarrett and Prabhu talk about the process of migrating so much data, including the main goals of their partnership. First, they established systems that could be repeated and help Iron Mountain understand when data is moved, destroyed, migrated, and more. We discuss the next steps taken, learning how Iron Mountain moved so much data to the cloud. Using Google products like DataFlow, BigQuery, and Cloud Composer, SpringML was able to take the data from Iron Mountain's landing zone and transform it. Prior planning meant that the system was optimized and ready from the beginning, complete with automation and tools to make a fast, effective migration of data without any restructuring. Later, the data visualization is done by GSuite, Google Data Studio, and Looker so Iron Mountain and their customers can use the data for analysis.

Later in the show, Jarrett describes real-life situations in which Iron Mountain has helped manage, migrate, and store data for customers. Prabhu details the lessons SpringML learned while working on this project and offers advice to other developers. He talks about the future of the project, explaining that now that the data has been migrated, more detailed analytics can be performed and machine learning projects added on to augment Iron Mountain's offerings.

##### Jarrett Garcia

Jarrett Garcia recently joined Iron Mountain as the Director of Enterprise Data. At Iron Mountain, Jarrett is working closely with the executive leadership team to build a robust Enterprise Data Platform in the cloud. His partnership with Google Cloud is a critical component to the transformation journey. Before coming to Iron Mountain, Jarrett worked as a Lead Architect at Nielsen within their Technology R&D team to create an AI/ML platform in the cloud. Jarrett has been at the forefront in introducing modern technologies into the organization such as Docker, TensorFlow, and Kubernetes. Before that, he lead the Data Science technology team where he spent over a decade building analytic tools and ushering in new technology.

##### Prabhu Palanisamy

Prabhu Palanisamy is co-founder of SpringML. He has a long history of running data-driven consulting organizations from Software AG to Appirio. Building on relationships he created leading integration and analytics services, Prabhu co-founded SpringML, a next generation data analytics company that serves data intensive industries. Prabhu constantly questions the conventional way of doing things and finds ways to be creative and innovative for customer business problems. 

##### Cool things of the week

* Google Cloud Next Week 5: Data Analytics [site](https://cloud.withgoogle.com/next/sf/sessions#data-analytics)
* Best practices for performance and cost optimization for machine learning [site](https://cloud.google.com/solutions/machine-learning/best-practices-for-ml-performance-cost)
* Building smarter games with Machine Learning [video](https://www.youtube.com/watch?v=30y9zk5COqw)
* Anthos in a Minute [video](https://www.youtube.com/watch?v=xfwlbt3QZrM)
* What is BigQuery? [video](https://www.youtube.com/watch?v=So-tVyBQt8E&list=PLTWE_lmu2InBzuPmOcgAYP7U80a87cpJd&index=5)

##### Interview

* SpringML [site](https://springml.com)
* Iron Mountain [site](https://www.ironmountain.com)
* BigQuery [site](https://cloud.google.com/bigquery)
* Google Cloud Storage [site](https://cloud.google.com/storage)
* Dataflow [site](https://cloud.google.com/dataflow)
* Cloud Composer [site](https://cloud.google.com/composer)
* GSuite [site](https://gsuite.google.com/)
* Data Studio [site](https://datastudio.google.com/u/0/navigation/reporting)
* Looker [site](https://cloud.google.com/looker)
* Scaling Data-Driven Insights Across a Complex Global Organization with Looker and BigQuery [site](https://cloud.withgoogle.com/next/sf/sessions?session=DA113&gate=true#data-analytics)

##### Tip of the week

Nick Orlove tells us a bit more about what to think about when optimizing BigQuery:

  * What is BigQuery? [video](https://www.youtube.com/watch?v=d3MDxC_iuaw)
  * Visualizing query results [video](https://www.youtube.com/watch?v=AlKKZuULIxM)

##### What's something cool you're working on?

Priyanka has been working on [GCP Comics](https://medium.com/google-cloud/gcpcomics/home) and [Sketchnote](https://www.youtube.com/watch?v=hEK5SMzI_n4&list=PLTWE_lmu2InBzuPmOcgAYP7U80a87cpJd).

{{< transcript "[MUSIC PLAYING] MARK: Hey, there, everybody, and welcome to episode 231 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with Priyanka. Hey, Priyanka, how you doing?" >}}

PRIYANKA: Hi, everyone. I am absolutely amazing. 

MARK: Oh, that's awesome to hear. And of course, we are always excited to have our listeners here joining us for another fantastic episode. And today we've got quite a bit of content to go through. So to kick things off, Priyanka, can you tell us who we're going to be talking to later today? 

PRIYANKA: So today, yeah, we are going to talk to Jarrett from Iron Mountain and Prabhu from SpringML. And they are going to give us a sneak peek into how they executed the migration for Iron Mountain data sets. 

MARK: Yeah, it was super interesting conversation. And they also did a Next talk. We'll put the link in the description, because I think it should be out. And we get to talk to them a little bit about how they approach the migration and what that looks. Of course, Priyanka, you've done a bunch of work with SpringML, as they're a pretty good partner of Google Cloud. And they touch a lot of areas. 

PRIYANKA: Yeah, they do touch a lot of areas. We'll probably include the previous conversation that we had with them, not on the podcast, but I was invited at their office to talk about some of their other projects in the conversational AI space. So just if you are interested in that, we'll include those discussions, as well. They are absolutely amazing in dealing with certain scenarios around machine learning, as well. 

MARK: Super, super cool. And after our conversation there, we'll actually get a BigQuery tip from our friend Nick Orlove. But before we get into that, why don't we go ahead and do our Cool Things of the Week? 

[MUSIC PLAYING] 

PRIYANKA: Let's start with Next. 

MARK: Well, of course, as people know, it is week five of Google Cloud Next. And this week is all about data analytics. So kind of fitting that we'd be talking to Iron Mountain and SpringML out about their data analytics migration. But there's a ton of great talks out there. So head to the link down there if you want to check out some of the sessions. There's just a bunch of great content for Next, so it's always exciting to see that. 

And I wanted to call out one very recent story that got published here, which is actually a new solution guide on being able to save money with machine learning. Like you said before, everyone loves saving money. And obviously, machine learning is a very wide area so this solution guide is absolutely massive. It is-- we don't count in pages anymore, but it is a huge web page. And there is so much information on there. 

I wouldn't sit down and read it top to bottom. But I would go through, and you can look at some of the different areas. And think about what you're doing, and maybe get some best practices tips. It's a very, very cool guide, and it just covers so many things. And because we're also talking about machine learning-- and I realize that means I'm just doing my multiple cool things. But that's fine, everything's cool. 

PRIYANKA: [LAUGHS] 

MARK: We also have a video from our friend Dale, who was on the podcast a couple of episodes ago. And she actually has released a new video called "Building Smarter Games with Machine Learning." It's a fun little video into looking at what machine learning can do for games, so definitely recommend you check that out. 

PRIYANKA: Those are a lot of cool things of the week, all super interesting. I'm definitely going to go check out the game episode that Dale had done. Along the lines of data analytics, and in that theme, I just published BigQuery Sketchnote this week. And that could be interesting to see, because I have included some of the cool, new Next announcements in there, like BigQuery Omni and Data QnA and those types of features, that are still in private alpha, but pretty cool. So check that out. We'll include that in the description below, as well. 

Just along the lines of data analytics, that came to mind. And then the other cool thing of the week, in this Cloud Bytes series, in the previous episodes, we talked about the launch of CloudBytes. We just finished the first season of Compute. 

So we are already through, and the last episode gets released last week on Sunday. And that was about Anthos. So we covered Anthos, which is a huge topic in literally just about a minute. So if you just want to take a sneak peek into what it is, if it is for you or not, then that would be a great episode to check out. 

MARK: Yeah, those CloudByte episodes are really great, because they do such a great job of kind of summarizing the main pieces about this. And like you said, Anthos is a big area to talk about. So summarizing that in about a minute is no easy challenge. But this is a great video to check out. So we'll leave all a whole bunch of links in the show notes for people who are interested in checking some of this content out. 

And with all of that out of the way, why don't we go ahead and jump into our interview with Jarett and Prabhu. Jarett and Prabhu, thank you so much for joining us. Can we kick things off by saying, who are you and what do you do? 

JARRETT: My name is Jarrett Garcia. I run the enterprise data platform at Iron Mountain. 

PRABHU: Thanks, Jarrett. Hi, Mark. My name is Prabhu Palanisamy. I am part of the SpringML team. We are a premiere Google Cloud partner that specializes in data migration analytics and machine learning. 

MARK: Awesome. So I think to understand a little bit more, can we hear more about, I guess, Iron Mountain and SpringML? Like what do the companies actually do? 

JARRETT: So Iron Mountain is used by lots and lots of companies. We do records management and data management. So we have tons of warehouses. You'll see our trucks in the streets and you'll see us at hospitals collecting medical records. So all that office space that you use to store your files, we take them away and put them in a nice big warehouse. 

PRABHU: Spring ML, we started in 2015 to help enterprises in their digital transformation journeys. We saw firsthand how data-driven organizations were able to transform themselves and take advantage of analytics and machine learning. We wanted to be the partner of choice to help customers in this transformation. 

PRIYANKA: Awesome. Well, I have worked with SpringML before, on a couple of chatbot applications using Dialogflow. So I'm very familiar with that aspect of what SpringML does. I'm very curious to now get into this conversation about Iron Mountain and that solution with SpringML. So before we kick that off, if we could dive a little bit into, why did Iron Mountain want to migrate the data, and what was the plan behind it? 

JARRETT: Iron Mountain in itself, we have a lot of mergers and acquisitions. We're in 50-plus countries. And all of those countries each have different instances of warehouse management solutions. The difficulty comes in is when a customer, like a global customer comes to us, and says, hey, what's the total number of space that I'm using in your warehouse? 

Today, it could take us 6 to 12 weeks to get an answer for them. Because what ends up happening is, we have to go and look at each of the systems, pull all of the data for each of those systems. And then somebody's got to pull it all together. And then you've got to put together a nice little PowerPoint slide. 

What we decided to do is-- we're going Google. We're a G Suite company now. We're also going Google as far as our cloud provider. So the idea of standing up a centralized data lake, we'll also have a subset of the work for MDM, as well, master data management. We're using BigQuery as our data lake and also to support the MDM. 

The idea behind it, though, now is we want to be able to get global views of that data, so our executives don't have to wait 12 weeks to get a customer an answer. So to setup feeds from all of our different systems, land all the data into the data lake, normalize it, and create reportable views that we can tie into different VI tools, like Google Data Studio or Tableau or Looker. 

MARK: Yeah, this is kind of a classic migration story, right? Taking something that previously wasn't on the cloud, moving to the cloud, and all the challenges that probably came up with that, which we'll talk about in a bit. But I want to also hear, Prabhu, from your side, what was the role that SpringML really played in this? 

PRABHU: In terms of SpringML contribution, this was focused on execution. For example, I saw Jarrett as a change agent for Iron Mountain data. Jarrett came into an established organization and set up a vision for how organizations to look at cloud. So from our perspective, that made SpringML's focus much clearer, like basically, a realization of a vision that Jarrett and team were putting together. 

So we came and asked the subject matter experts on Google Cloud, and worked as one team to make this realization as quickly as possible. So what steps were taken to execute this humongous task? It seems like it has been a lot of work to create the data lake in BigQuery, and then migrate the data in there. So we're curious to hear what those steps were. 

JARRETT: So a couple of things that we did, we didn't solve the problem overnight. We didn't even, as part of the engagement, solve the problem completely. We had two things that we wanted to get out of the engagement with SpringML. One was, establish a solid architecture, a framework, and a reusable pattern. And again, we talked about landing data into Google Cloud Storage, using tool sets to sock it into GCP, transform it, and then land it into BigQuery. 

So we looked at data flow, bq load. I think we kind of kicked the tires on a bunch of different options. We also cut it back to like one use case. So we have something called record center optimization, where we're looking at the activities that happen within the warehouse. 

So what we did was we took two different systems. We have one that's more North America, Central America based that we call Skip. And then we have another one which is called [? O'Neil, ?] which is more Asia, Europe, Africa. What we want to do is start to merge that data together, so that we could, again, have that one central global view of how activities are happening in the warehouse. So at the end of the day, if we can answer how many destructions happen globally, it was a big win for us. 

PRIYANKA: Is this for the migration or the data lake that you had created? Is this for a specific customer, or is this for Iron Mountain, in general, and then all the data lives in this data lake? 

JARRETT: It's for Iron Mountain in general, while in the future we do hope that our customers will get benefits from it. So today, we do have data feeds that our customers are asking us to provide. To be honest, they probably could be modernized. So I think the data lake, once established, it's solving our internal, what's the world look like today. Tomorrow can also do something similar for our client. 

MARK: So I'm curious to hear-- obviously, you're talking about a large amount of global data. Do we have any kind of rough number that we can put to this? 

JARRETT: You'd be surprised. It really isn't a lot of data. I would say it's probably about two terabytes worth of data. 

MARK: That's sizable. 

JARRETT: Yeah, in past engagements, I've seen definitely bigger, but this wasn't unsurmountable. I don't think we were running into really big data problems. And so far, BigQuery has been phenomenal. Our response times are really good on any of the queries that we're trying to do, any of the transformations that we're trying to do. So so far, so good. 

MARK: Yeah, let's talk about that in better detail, because there's a lot of work that has to go with taking the actual data and getting into BigQuery. And like you said, a big part of that is also transforming. So can you walk us through what steps were actually taken to get the data into BigQuery? 

PRABHU: I can give a quick overview, and then Jarrett can pile up on the business functions. So from SpringML perspective, Jarrett and team gave us the access, like the end system access, and also built kind of a landing zone for us to import up on. So that way, we have a clear path of picking up big data, and then do the necessary transformation. But at the same time, not too much fragment out the mapping and on the business conditions from various systems. 

So the team came up with the landing zone to be able to pick up the necessary data files and started the design on the BigQuery. And in the process, we also started the automation, which is the CI/CD, the continuous integration deployment, right from the design itself. So that way, it didn't look like an integration of extraction and loading and visualization. We were thinking about, how do we do that DevOps optimization right from the ground up. So when the project went live, it meant that the automation, the integration, as well as the end user analytics was set up in the [INAUDIBLE]. 

MARK: Yeah, that makes a lot of sense, because you want to capture any new data that comes in as it comes in, and without having to rewrite it or do a bunch of batch jobs. So what technology did you use to actually do the transformations? 

PRABHU: From the pipeline standpoint, it was Dataflow, and loading in to BigQuery in the right table schemas and views associated with it. We kept the mapping and transformation to be as minimal less possible, so that way, the business functions or the nature of translations are held in the right place from the in-house systems. And the Dataflow focused on concurrency and the speed of loading it into BigQuery. 

PRIYANKA: I'm curious, from the Iron Mountain perspective, just going a little bit high level here, when would a customer come to Iron Mountain and want to migrate their data? What are certain situations when people would need help from Iron Mountain, for example? 

JARRETT: When you say migrate their data, you mean from record center, like the document standpoint? 

PRIYANKA: Yeah. 

JARRETT: Oh, I think there's a lot of regulatory issues. And again, we talk about, from a global footprint, how long you have to keep medical records, how long you have to keep mortgage records and stuff like that. And again, instead of them storing them in their office space, they're working with us to be able to do that. 

As a matter of fact, Google is one of our big customers. And we're doing a lot what data storing backups and stuff like that for them. There's a big need for it, and Iron Mountain's definitely got a global footprint and definitely knows how to handle those types of situations. 

MARK: And like you said, obviously that involves a lot of data for Iron Mountain to manage trade, which is kind of the whole reason this project makes sense, is to give you that better visibility. And it sounds like, since moving all of this data into BigQuery, you were able to kind of get some better response times to asking those types of questions. 

JARRETT: Yeah. So when we talked about record center and how much activity was happening in the warehouse, COVID is a great example of where we actually use that data. Because the data was being loaded nightly, we were able to take a look and see. As COVID was evolving, we could see how it was impacting the business. So as we expected, we saw a huge degradation in the activity in the warehouses as we were closing warehouses. 

And then again, as the local countries or the local counties were starting things back up, we could start to track and see the upswing, as well. So you kind of saw that U curve happening. And we were able to utilize that a lot of that data to look at and see how behavior in the warehouses globally was being impacted. 

MARK: So like you said, the data was coming in on a nightly basis. And then it has to, once again, as we talked about, get into BigQuery. And probably you mentioned a little bit about how that went through Dataflow. So let's break that down. What are the actual steps that took it from a nightly schedule, the data coming in from Iron Mountain side, to get it into BigQuery? 

PRABHU: In terms of integration-- so Dataflow is the ingestion framework picked up the right respect to data files into BigQuery. And DevOps automation piece of it, to me, the integration runs, so it can either result in a success, or it fails, or it fails midway, et cetera. We used the Cloud Composer, the platform to schedule integration batchers, and tightly integrate to logging and monitoring with stat driver. 

So all the activities of the integration pull has long been monitored for future analysis. So the components that enable to have that is the CI/CD pipeline. Basically, the Cloud Composer, acting as the scheduler, as well as doing all the necessary logging and monitoring, to ensure that files are properly imported and whole operations for reprocess or resubmitted reflect [INAUDIBLE]. 

MARK: But as I understand, like you said, Cloud Composer kind of scheduling everything, and then handing it off to Dataflow, but at the end of the day, you switched away from Dataflow, right? 

JARRETT: Yeah, we did. I think one of the big factors that came into this was that, SpringML was setting us up to succeed, kind of a launching pad, to upscale our internal IT resources to become more and more cloud savvy. One of the things that we found that Dataflow didn't have at the time, but our resources did have, was a lot of knowledge about SQL. 

So bq load actually ended up being something that was a little bit more supportable for us. Because at the time, Dataflow didn't have the SQL add-on or plug-in, which I believe now they're launching something similar to that. But in order for us to be able to maintain the environment and continue to build on to it, we just found that bq load was a little bit more aligned with our IT team's skill sets. 

MARK: I mean, obviously, it's great to hear that it was fairly easy to switch over from one to the other, or at least it was caught early on enough that your team was able to pivot. So what does bq load do, in terms of actually putting the data into BigQuery? 

PRABHU: BigQuery has a set of commands to do the transactional load into a system, right? And the advantage is it is, it's a bunch of SQL clips that can be built by SQL developers. And you can automate that functions. And given the flexibility and the nature of the data where it is limited mapping, those are some of the commands that we were able to utilize it. And from Jarrett's team perspective, they were able to pick it up very quickly as well. So from our perspective now, we can utilize all the functions right off of the BigQuery itself with no external dependencies. 

PRIYANKA: So you have the data. You got it into using bq load, which is a set of SQL queries. You got it into BigQuery. And then Composer is actually helping you manage and maintain how to transform the data. And then from there, now it sits in BigQuery, and you can do analysis on top of it. So there's analysis happening. But at the same time, there might be visualization dashboards, as well. So do you want to touch a little bit on how the visualization is happening? What are the different tools used there? 

JARRETT: You summarized it perfectly. Composer's helping manage the flow of the data from the time it's landing into the storage. We had two layers. What we wanted to do was keep the data from the source system in its original form. And again, my background is data science, so we don't want to muck up the data too much. We wanted to keep an original copy. And we call that our ingestion layer. 

And then what happens is, Composer, as well as bq load, were able to transform. So I would say like denormalize the data, so it becomes a little bit more of a reporting set. And again, you don't want users to have to go look up activity codes or stuff like that. So we wanted to minimize the foreign key type things that happen with data, so that the end user, when they're trying to build out their dashboards, they have all the pertinent data there. They're not having to look up what the country code is, for example. 

So we call that the reporting layer. So then what we did was we used G Suite. We also have Google Data Studio, so we're able to use Google Data Studio to connect into BigQuery reporting layer, as well as we did some example dashboards in both Looker and Tableau for the use case. So so far so good. 

All the tools have integrated very well with BigQuery. We haven't had any performance issues with any of them working. It's been nice to be able to give our end users a data set that's enriched enough for them to be able to go ahead and start to be able to play with. 

PRIYANKA: Yeah. And it must be good to also have access, especially within BigQuery. Like you can share with different audiences-- so you have the data scientists within your teams, versus somebody who is just going to be analyzing the data, versus somebody who is only going to be looking at the report. So I always like that feature of being able to share and give the right access to people who need that kind of access. 

JARRETT: Yeah, it's been really well accept-- everybody has-- definitely, the demand that we've gotten since we've first highlighted-- like we did a little showcase after the first was done, and we'd just been inundated with different parts of the business coming, saying, hey, how can we get it on this? A lot of people are excited about what they're seeing. They're seeing the benefits. And give the executives some cool graphics, and they want to see some more. 

MARK: I hate to make this whole thing sound like a BigQuery commercial, but it really is pretty awesome. And it does some pretty amazing things. So I'm glad to hear this really concrete and great use case of people actually using it. I am curious, for SpringML, when you actually went through the entire process, what would you say is the biggest takeaway that you could learn from this process that you might take into future jobs? 

PRABHU: A couple of things, to me, would be the realization is straightforward. Like say I have my existing analytics legacy environment. I need to modernize it and use managed services, meaning serverless architecture, where possible and rebuild it in a cloud-based infrastructure. The first piece is the access, like the network and ability to connect to the relevant data sources and pull it. 

And Jarrett and team did a very good framework to make sure that we don't get caught up into that VPN, firewall, opening up ports, to make that process easier, to get that [INAUDIBLE] started with, what is important to [INAUDIBLE]. So it's very easy to get caught up into the IT guidelines and compliance and security. So that's one who really helped us. 

The second is the translation and mapping rules. Every data warehouse, over a period of time, particularly for systems that are running for many years, has several functions, one of mapping, [INAUDIBLE] table architecture, where, OK, this mapping, we had to do this for this particular function I'm having. We looked at the architecture and kind of simplified it. 

We don't want to get bogged down by the business functions. And sometimes, it will go many days or many years back to figure out why that change was done. And again, the team did a phenomenal job of making sure that we don't get caught up into that environment of why, what, how, figuring out what is required, how do we keep that pipeline simple to get the import. 

And the third is making that visualization as an option, meaning in the sense as the choices for end users. Once the heavy lifting was done, the data structures were set up. The team members were able to see and touch and feel their data in their own terms. So obviously, we gave choices of building it in local at dashboards. And I know users that were comfortable with Tableau, they were able to bring. It was very interesting to see. Once the stage or the environment is set up, how users stack [INAUDIBLE] interacting with DevOps. 

MARK: You mentioned a lot went into the cleansing of data and what that looks like. And obviously, it was a very collaborative project between SpringML and Iron Mountain, to make sure that you weren't dealing with a huge amount of transformation as it gets put into BigQuery, trying to separate some of that from the source, and then minimizing amount of transformation, it sounded like was pretty key in being able to do this project quickly. 

JARRETT: Again, we had a lot of great subject matter experts that we had within Iron Mountain that helped ease that. And we were able to give SpringML mappings, because the different activities are all coded differently by the different countries and the different instances. So without the support of our subject matter experts, we wouldn't have been able to so quickly gotten that holistic view. And then we were able to provide all that information to SpringML for them to basically code it all in. 

PRIYANKA: Well, so is there anything else that we have missed or that you would like to mention before we wrap things up here? 

JARRETT: I think from my end, it was an extremely successful MVP. I think we validated the architecture. We gave the business some great capabilities that we didn't have before. Since then, we've engaged with SpringML on a second engagement, this one looking at warehouse inventory. So how many millions of square feet of boxes do you have within our warehouses? So that's due to wrap up here in the next couple of weeks. It's been a really good engagement. And I know our executives will be extremely excited to see the output of that, as well. 

PRABHU: This is a journey, like starting off in an established organization. And these like the new-- the first set of workflows. And once we are able to set this as a framework or a repeatable process, one we can accelerate similar projects-- so for example, the things that we were able to accomplish it in the first MVP, we were able to reuse most of the design framework to expedite the next project. And this is a framework, this is a process that we are putting together. 

And now this can be like a modern design for future workflows. And now that advantage is, BigQuery, in my opinion, is a platform, not just a product. So to me, now it's a data warehouse. In one slice, if we look at it, it's an ML platform, too, because we can now build BiqQuery ML models directly on top of it. 

BigQuery comes up with BI Engine for fast-performing queries. So all of that is available for our disposal. In one place, it can be looked at as a data lake, one from [INAUDIBLE] data warehouse, the other one BI Engine, BQ ML. Those are all the things that we are excited to work with Jarrett and team to make that realization possible. 

PRIYANKA: So what you're saying is, basically, if you do this heavy lifting just once to get the data in from all of these sources, and then once it's in data lake-- in this case, you're using BigQuery. But you could also use cloud storage, for example, and then connect from there to BigQuery. But once it's in there, now you have opened up the possibilities to do machine learning, to do analysis, to do a lot more with it. So this heavy lifting has really opened up gates to a lot of different projects. 

PRABHU: Exactly, yep. 

MARK: Awesome. And for people who want to get a little bit more information, there's a Next session that people can actually watch as well, right? 

PRABHU: Yep, we have our session in the data analytics week. I think it's the session number 113. I'm happy to send those to you. 

MARK: Yeah, we'll put a link in the show notes for anyone who wants to watch that session and maybe give a little bit of a deeper dive at the actual process. Well, Prabhu and Jarrett, thank you so much for coming in and sharing your story. We really appreciate it. 

PRABHU: Thanks for having us. 

JARRETT: Thank you. 

PRIYANKA: Thank you. 

MARK: See, I always love hearing from real customers about how they're doing things. And it was great to hear about some of the considerations that they had to really think about when you're talking about making a migration. What do you do? How do you do it? How do you measure it? And then what does that enable? 

PRIYANKA: It was also great to hear SpringMLs perspective on it, because they helped spearhead the migration. And they also had some best practices that they shared. So migration in general, it is a daunting task, like whatever it is that you are migrating, even if it is tiny or big. 

We have lots of content around migration and best practices, because it all comes down to best practices when it comes to migration. There is no one correct answer. It's just whatever fits your workload and your piece of application that you are trying to move. So it was awesome to hear how Iron Mountain and SpringML tackled the scenario for their data sets. 

MARK: Yeah, absolutely. And make sure to check out the next talk if you want to get some more deeper details on how they did it. And of course, a big part of data analysis in general-- there's a lot of tools at Google Cloud that are useful for that-- but one of the ones that kind of comes up the most often is BigQuery, because it is such a powerful tool and it is so awesome. And of course, with BigQuery, it's very SQL compatible. So people who have backgrounds with SQL, it's very easy to go in there and start doing things. 

But it's still its own very complex system. And there's really a lot to BigQuery that you may not know about. So for our Tip of the Week, I wanted to turn to our friend Nick Orlove, and ask him, hey, how can we understand a little bit more about optimizing BigQuery, and what should we be thinking about? 

[MUSIC PLAYING] 

NICK: Happy to help, Mark. As you've discussed, analyzing data is quite useful. It empowers users and applications to make intelligent data-driven decisions. Whether your decision is building a more personalized shopping experience for customers or aggregating event logs to flag potential security incidents, the ability to quickly analyze data can make your application more meaningful and relevant to your users. 

Notice the phrase that I used there was quickly analyze. And that's because, when it comes to query and data, I think we can all agree that a slow query can be a really painful experience. So that's why I'm here to talk about optimizing BigQuery query performance. To address this, I think there are two questions which are relevant. First, what can slow down a query in BigQuery? And second, how do I troubleshoot a query that might be running slow? 

Let's first look at what slows down a query. In a basic sense, queries that do less work perform better. And in BigQuery, the amount of work required depends on a few factors-- how much data your query reads and writes, how complex your query is, how much information needs to be shuffled between query stages, and finally, is your query performing any SQL antipatterns. Some of these concepts are pretty obvious, such as, the more data you read and write, the slower your query is likely to be. 

BigQuery is a commoner database, so an easy solution here is to treat it as such. For example, try to avoid running broad SELECT statements or SELECT stars. And instead, only query the columns that you actually need. In addition, prune your queries using table partitioning and clustering, which filter out unnecessary data from even being read. 

This fix alone can make a world of a difference. You can also reduce the amount of data written by avoiding things like repeated joins and subqueries. Instead, consider leveraging nested fields, or materialize subquery results into another table if queried often. 

The complexity of your query can also have a large impact on the amount of computation required. And some simple tips and tricks can help. For instance, try to avoid things like repeatedly transforming the same data. And man, I know that I'm definitely guilty of transforming the same series of strings into timestamps multiple times in a single query. 

Another tip is, if your use case allows it, try to use approximate aggregation functions instead of exact aggregations. I've seen firsthand how much faster an approximate count distinct is compared to a count distinct. And you can also optimize your query's join patterns by considering the order in which you join the data. It's recommended to place the largest table first, then followed by the smallest, and then by decreasing table size. 

On the topic of joins, try to avoid self joins and joins that have a lot of data skew or maybe are unbalanced. It's also best practice to reduce the amount of data that is processed before you execute a join. By reducing the data early in the processing cycle, you'll reduce the amount of data that needs to be processed, shuffled, and materialized. 

Now, onto our second question-- how do I troubleshoot a slow query? This is often a challenge, because it can be hard to know if your query is performing subpar or has room for improvement. To address this. I have two solutions you can leverage. The first is the native BigQuery query plan and timeline in the Cloud Console this provides information on how many stages your query had to undergo, how many rows were inputted and outputted in each stage, and how much time was spent on each execution step. 

This can be useful because it breaks down your query and allows you to see how BigQuery approaches it behind the scenes. The second solution is an awesome tool called BQ Visualizer. BQ Visualizer is an open source tool that was built by our stellar Google Professional Services team. It can be used to visualize the flow of execution stages within a BigQuery job. 

And it's really helpful in breaking down complex queries and identifying areas of potential concern. We'll provide links to the tool in the show notes. But just know that it's a free tool that is available as both a web app, as well as a GitHub repo. One of the cool features of this tool is that it offers directional tree mapping of all stages in your query so that you can see exactly what feeds into each stage, even for really complex queries. This can help visualize problematic characteristics in your query, like joining against the same table repeatedly, or improperly using subqueries. I know of an example where this tool was able to identify a series of width clauses, which were making BigQuery reread the same 1.3 billion records six times. 

Well, that was a lot of information. But I do hope it proved useful. Keep exploring your data, keep discovering new insights, and remember, stay curious. 

MARK: Awesome. That's a great tip, Nick. And of course, we have some links in the show notes to "BigQuery Spotlight," which is a series that he and Alicia worked on to go over some of these BigQuery best practices and that really awesome visualization-- so some very, very cool stuff there. So Priyanka, what have you been working on since the last time we chatted. 

PRIYANKA: So I talked about the BigQuery Sketchnote, which is what I worked on the last week. And I'm looking for topics for next week. And I think some of the ones that are coming to mind-- actually, there's been so much attraction that people have reached out on LinkedIn and Twitter to do some specific ones. So I'm skimming through the requests right now and trying to make sure I cater to what the developer community is looking for. 

And I think some of the ones that I have narrowed are around the biggest main content today, which was migration, so how do you actually migrate, some best practice around that. That has gotten a lot of requests. So I'm thinking about that. And there's obviously some others that are around just the products that we've been doing. 

So I'm working through all of that. And then the next page of the comic strip is coming out in the next three weeks or so here. So I'm working through some of the content for that, which is always very exciting. It takes a lot of time to come up with those. 

MARK: Yeah, I mean, obviously, you've been keeping very busy and creating this content, which people, like you said, they're loving the content. Because it really is a great way to summarize a lot of best practices and a lot of information and a pretty cool and usually fun way, to kind of see that. So make sure you check out Priyanka's Twitter, which we'll have linked in the show notes there, too-- to check out all the different content that you've been making, and of course, to let Priyanka know if you have any cool ideas. Because that's what you want, right, is more people telling you what they want? 

PRIYANKA: Exactly, because none of this is useful if you're not benefiting from it, right? So I want to make sure that I'm creating something-- it's of course fun for me to create, but I want to be creating something that's also something that you're looking for. So yes, please do let me know directly if you're interested in a specific set of content. 

MARK: And of course, we always think our listeners for joining us here. And like Priyanka said, I mean, we wouldn't be doing this if it weren't for you. So thank you for tuning in. Thank you for checking out all of our content. Thank you for listening. 

[MUSIC PLAYING] 

And we'll see you all next week. 

PRIYANKA: Thank you, bye. 

MARK: Because if you think about it, computers are basically magic, right? 

PRIYANKA: Yep, it's all magic. [LAUGHS] 
