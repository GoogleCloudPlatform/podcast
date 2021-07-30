+++
audioDuration = "00:28:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.269.mp3"
audioSize = 41411312
categories = ["Monitoring", "Data Storage"]
date = "2021-07-28"
description = "Philip O'Toole and Reed Taylor teach Stephanie and guest host Terry all about the new features in Google Cloud Logging on this episode of the podcast."
draft = false
episodeNumber = 269
hosts = ["Stephanie Wong", "Terry Ryan"]
title = "Cloud Logging with Philip O'Toole and Reed Taylor"
image="/post/episode-269-cloud-logging-with-philip-otoole-and-reed-taylor/images/hero/hero-EP-269.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/otdt2f/episode_269_cloud_logging_with_philip_otoole_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Philip O’Toole](https://twitter.com/general_order24) and Reed Taylor talk with [Stephanie](https://twitter.com/stephr_wong) and guest host [Terry Ryan](https://twitter.com/tpryan) all about the new features in Google Cloud Logging on this episode of the podcast. Cloud Logging provides users with management and analyzation of project logs, the reports that describe the state of every system in a project.

Reed walks us through Cloud Logging, including a list of features and how other GCP products integrate well with Logging. Once logs are sorted, Cloud Logging also provides tools for detailed query and analysis of log data. But storage and management of logs is as important as sorting and analyzing, and Reed tells us why this third component is vital. 

New features in storage and management promise to streamline the process. Log Buckets, for example, allow the separation of routing and storage, while Log Views make secure field-level access possible. Log Retention means users can dictate how long different types of logs are stored. These new features help users comply with standards and regulations in the data space. Our guests give more examples of how these tools improve logging tasks.

##### Philip O'Toole

[Philip O’Toole](https://twitter.com/general_order24) is an Engineering Manager at Google Pittsburgh, leading development teams working on GCP’s Cloud Logging Platform. Prior to Google he led development teams at InfluxDB, Loggly, and Riverbed Technology. You can find him on the web at https://www.philipotoole.com.

##### Reed Taylor

Reed Taylor is a Senior Product Manager at Google Pittsburgh, just last week marked his 10th “Googleversary” since starting at the office.  In that time he’s worked on a range of products including Google Search, Google Shopping, and AdWords.  Reed joined GCP just this Spring, and is now focused on Logging products within the Cloud Operations suite.

##### Cool things of the week

* Grow your ML skills with free offer from Coursera [blog](https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-launches-ml-academy-with-free-training)
* Advancing our trusted cloud with engineered-in, invisible security [blog](https://cloud.google.com/blog/products/identity-security/security-summit-2021-google-expands-trusted-cloud)

##### Interview

* Google Cloud Logging [site](https://cloud.google.com/logging/)
* Google Cloud Logging Documentation [docs](https://cloud.google.com/logging/docs)
* Managing log buckets [docs](https://cloud.google.com/logging/docs/buckets)
* Managing log views on your log buckets [docs](https://cloud.google.com/logging/docs/logs-views)
* Data Governance for Log Data Whitepaper [site](https://services.google.com/fh/files/misc/whitepaper_data_governance_logs_how_to.pdf)
* Principles for Security and Managing Logs Whitepaper [site](https://services.google.com/fh/files/misc/whitepaper_data_governance_logs.pdf)

##### What's something cool you're working on?

Terry has been working on tutorials for the Cloud Ops team. His recent [Cloud Logging tutorial](https://console.cloud.google.com/getting-started?tutorial=cloud_ops_logging&pli=1) is available now.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, what's up everyone and welcome to episode number 269 of the weekly Google Cloud Platform podcast it's Stephanie Wong here again. And now I'm here with my colleague and teammate, Terry. Terry, what's up? " >}}

TERRY: Not much, Stephanie, happy to be here 

STEPHANIE: Yeah, thanks for jumping on. I thought the topic was appropriate for you. So I knew I had to get you in the room. For everyone else, Terry, what are we talking about today? 

TERRY: Today we have Philip O'Toole and Reed Taylor, who are from the Cloud Logging team, the engineering manager and the PM respectively. They just pushed out a whole bunch of new features for Cloud Logging, which is cool, and also teased a number of upcoming features that really make Cloud Logging a lot more interesting and basically open up a lot of doors to new things that you can do with logs. 

STEPHANIE: I'm not going to lie, but I don't have that much experience with logging in general, but I know that you have created some tutorials for it, you have had some experience with logging, so I'm excited to learn more. How about you? 

TERRY: Definitely. It's one of those things where everybody needs it. It's not always necessarily the most exciting thing, but man, when you need logs, you need logs, and the set of announcements that they have really help make that better. 

STEPHANIE: Exactly. So before we jump into the conversation, let's go ahead and dive into the cool things of the week. 

[MUSIC PLAYING] 

TERRY: So something I found that I'm really excited about is that Google has teamed with Coursera to create a new ML Academy and a new offering around it. Basically, what you do is you come to a seminar, and that seminar talks about AI's impact on the job market, and you get a free demo of training models with Vertex AI, which is a new offering from Google Cloud around ML. You sign up for that, and you get a free month of access to the Preparing for Google Cloud Certification Machine Learning Engineer Professional Certificate, which is a really wordy way of saying our certification to become a Google Cloud Certified ML engineer. 

You have to go to the seminar first, which is, I believe, July 22, and you can watch it live, answering questions about it, what not. Or you can watch the screen cast any time after that, up until August 31, and then you can claim the offer and get a month of access to that certification content. 

STEPHANIE: Sweet, yeah. I mean, who doesn't love free 99, especially when it comes to online training to get you jump started on your AI journey. And if you haven't heard too much about Vertex AI, I know we've talked about it a little bit on the podcast before, but this would be a good opportunity to learn more about it. 

So my cool thing of the week is around our new security products. So last week we talked about how to approach a secure software supply chain, and tomorrow is our Cloud on Air event around that, but we also had a Security Summit last week as well. And we had a lot of new announcements around security. We launched Cloud IDS, which is our cloud-native, managed intrusion detection system that helps detect malware, spyware, command-and-control attacks, and other network based threats. And it's actually built in collaboration with Palo Alto networks and their advanced threat security technologies. 

And the cool thing about this is that soon, IDS will integrate with our Security Command Center and Chronicle. So if you haven't heard of Chronicle it's our cloud-native security analytics platform, which also had a major milestone as well. And they have new integration with our analytics platform Looker and also a BigQuery. Definitely check out the blog post to learn more about these products, because there's more information about our new automated SecOps options as well. So check it out. And now let's go ahead and jump into our interview with Phillip and Reed. 

Phillip and Reed, thanks so much for joining the GCP podcast. Why don't you start by telling us a little bit about yourselves and what you do here at Google Cloud? 

PHILIP: Hi Stephanie. My name is Philip O'Toole. I'm an engineering manager based in Google Pittsburgh, where I'm responsible for the design and development of the Google Cloud Logging platform. 

REED: And my name's Reed. I'm a product manager. I work with Phillip, also in Google Pittsburgh. I'm relatively new to Google Cloud. I've been with that team for coming up on my three-month mark at this point. But I've been with Google for-- actually, just this week I crossed my 10 year Googleversary. So with the company for some time, but fairly fresh face to Cloud. But outside of work, I actually have some hobbies where I've done some work inside of GCP. And so it's not entirely new to me as a product. Just shifting from being a user to focusing on it as a product, which is exciting. 

TERRY: So can you tell me what actually is GCP Cloud Logging. There's a whole lot of CloudOps other than logging, and sometimes lines get blurred. So what actually encompasses Cloud Logging? 

REED: I guess we could start by reminding ourselves what log data actually even is, and why we care about it. It represents everything that every component of any active system cares to say about its state while it's running, and that runs from the highest layers of whatever our application is right on through all the libraries and APIs through operating systems, VMs. Everything might be saying something about its state. And that transcript, as it's playing out, represents the complete record of everything that's gone on, including security relevant stuff and audit logs and other types of things that can be very, very important to keep a hold on. 

So for, one thing this is incredibly valuable, assuming that you want to know what's going on, and number two, it's incredibly voluble. There's just so much of this data that it's very common to need tools to both capture and then analyze this type of information so that you can use it for the day-to-day tasks that we all need to get done. 

So GCP Cloud Logging is a comprehensive multi-cloud analysis and management tool for log data. It's part of the bigger GCP Cloud Operations Suite as you mentioned, and ops management. So you have monitoring and trace and debugging and other things right alongside. Cloud Logging is built along with those to work great on GCP specifically, because it's tightly integrated with Google Cloud's offerings, and those products automatically push their data straight into Cloud Logging. 

But as I mentioned, it's also a multi-cloud system for doing on prem log storage and analysis, as well as that for logs that we're bringing in from other sources. So it really is a comprehensive tool for understanding a deployed system. 

TERRY: What are some of the key things that Cloud Logging offers-- the feature set. 

REED: So first of all, you've got collection. We have to bring in everything that's coming. I'll mention again here that the GCP services are already emitting the right logs, and we have a team-- actually, Phillip and I work specifically on making sure that everything that's part of the cloud platform is already doing a good job of causing the logs to make their way to the right places, but that's also in general purpose capabilities. 

Second, the logging platform offers routing. The log router inside of the cloud platform is a product unto itself. It has evolved, in a way, into a kind of Swiss army knife tool for handling and managing logs and where they go, because it operates at such large scale and it has a very generalizable capability to move this data around as it arrives. And so you can obviously support basic operations like the creation management of log syncs, but we also see people using it to do stuff we never even envisioned-- sending information out into different forms of analytics or capturing specialized forms of business intelligence, you name it. 

And then third, there's the ability to do queries and perform analysis over the logs data. And this is sort of what I was alluding to a minute ago. We keep them around because we need to know stuff. And so the bulk of that telemetry and observability, all those insights and alerting, that all comes out of these logs analysis capabilities. So everybody is diving deep, they're touching on the logs through the platform, and when we're looking at aggregates, this is all built on top of these querying analysis capabilities. So that's the place that our team also spends a lot of time is on the native ability to analyze and understand log data right in the platform. 

There's one other component of Cloud Logging to consider and that's where we actually spend most of our time today, which is specifically the storage and management of the logs. We have to decide which ones we're going to keep, how and where we're going to store them, and what are we going to do with them once they're there. A lot of exciting stuff to talk about in that domain. 

STEPHANIE: So you're basically saying that log data management is, in many ways, just as important as query and analysis. And we do talk about that a lot. So why is this the case, and why is the management aspect of it so important? 

REED: So obviously storing the logs is a necessity if we're going to look back at them. If you're storing the logs, you're routing them to the storage, and then that means you're managing logs. So it can be easy to take those basics of storage almost for granted. We integrate it directly and, for many deployments, it's easy to set up if not automatically set up. But as long as the storage capabilities and configuration in those setups match your use case, you may not have to do more. But where things get interesting and exciting is that we're offering increased ability to control and do more sophisticated things at that layer. 

Odds are many users care about the rotation or retention and access controls for logs. These are things we talk about a lot-- fundamentals. And then security applications and compliance, governance, and auditing-- these are also very commonly discussed. But increasingly we see that customers are finding it valuable or even necessary, if not mandatory, to manage finer grain details of logs data, like how they're routed, and where they're stored, and finer grained details of who has access to which pieces of information that are in the logs. 

So today, rather than focusing on debugging issues with the router or trying to manage the storage, we can talk about capabilities we're adding to that management side, including some that are out on the horizon that Philip can maybe tell us about later. 

TERRY: You mentioned stuff on the horizon, which is like catnip for us-- we want to hear what's the latest and greatest. So what kind of features are on the horizon for Cloud Logging? 

REED: The first concept that's interesting to talk about might be log buckets. Log buckets allow users to explicitly separate the routing and the storage of logs. That's usually tied together. But for a bunch of different reasons, including some that I'll mention in a second here, like we've now enabled customers to manage the syncs and how logs are rooted in a manner that's independent of the underlying storage. 

That's not necessary for all situations, but where it is, it can make things much simpler in terms of management tasks, because you don't necessarily need to perform the same repetitive thing if, let's say, we have data that is living in multiple places that all that routing does not need to be maintained multiple times. We also have cases where certain setups and deployments just wouldn't be possible without allowing those two things to be separated. 

And, in fact, that's a useful segue into data regionalization, specifically data residency. In the changing times, we now see that a lot of cloud customers have really specific requirements about where and how their logs data gets stored. So we've updated and extended the management tools, as well as a number of other platforms' components that touch this information to make that data residency a first class part of the overall logging suite for people who need it. 

And then a third thing is log views. So I've been a product manager for almost 20 years and a Cloud user for a number, as I mentioned, but I'm new to thinking about this space from the product mindset. Views is a term that originally confused me. I now understand this to really be talking about access control and access control techniques specifically that are finer grained than some we've ever had before. This has been a wishlist item for a long time. And as an example, log views allow for field level access controls, which were never previously possible. 

So in a lot of applications there might be records that are of interest across a number of different job roles, but where specific pieces of data might have PII or they might have other pieces of sensitive information that aren't necessary. For example, managing IT ops or other things, it's now possible to section off and protect that type of information from view without needing to necessarily have a filter and be rerouting and duplicating things or doing other kinds of work that just aren't strictly required. 

Lastly, we have retention. Log retention used to be fixed at 30 days. We had 400 day retention for audit logs, but now that's vastly more flexible and it's applied on a log bucket basis. Philip, maybe, could you tell us some more about why that's exciting? 

PHILIP: Retention has become very important because not all logs have the same value. Some, such as operational logs that are telling you what your cluster did this morning when you're trying to debug a performance issue, those logs generally are not that important once a performance issue has been solved. But then you have very important standards like PCI and the credit card company standards that mandates that other types of log data needs to be kept for much longer-- I think it's 13 months is the rule. 

So with different types of retention, you can now support different types of workloads. Perhaps the logs from your billing service need to be kept for 13 months, but the logs in your operations only be kept for 30 days. So that is really helpful. 

REED: That's interesting. I think we see this in general with the product, where we're working to support an increasingly diverse range of more sophisticated applications, many of which have more nuance needs as it bears on the management of the log data itself, independent of the analysis of the log data and making use of it after the fact. 

STEPHANIE: Wow, that's incredible honestly, because of the changing security and data locality requirements and all the new compliance that comes out every single year. So I can see the trend moving towards more control over this. And Terry mentioned that this is the catnip that we all look for, learning about these launches. You already gave us a lot to chew on here, covering everything from retention to the log buckets and log views, but why don't we go ahead and talk about how we can actually apply these new concepts in real practice. Do you have any thoughts on best practices here? 

PHILIP: I'm pretty excited about the way you can take what readers described as these fundamental building blocks and really build some real solutions on top of the Cloud Logging platform. One of the first ones is, in some ways, kind of obvious. But we have many customers now that have important requirements to meet a regulatory regime, such as FedRAMP-- that's the US government standard for data management. 

And so literally now being able to specify the region where your log data is to be stored and where that log data can't leave makes it so much easier to meet these regulations. And if you combine that with our new regionalized endpoints and send your log data there, that the logging product can guarantee that your log data won't leave a particular geographical region. So that's a really nice thing that has been introduced with regionalization. 

Another best practice, which is probably my favorite one with the introduction of log buckets, is we can now do cross-project routing. So a GCP project is a fundamental concept in GCP. And up to now, as Reed was saying, the logs could only be stored in the project that they were received by. But now what you can do with log buckets is you can receive logs in one project and have them automatically routed to another project. 

And the reason this is very useful is imagine you're a security administrator in your company. You can now automatically set up, with just a single configuration, that all the projects in your organization should automatically route a copy of your audit logs into another special, secure project that only you have access to. 

And this is great because that means the security personnel will always have a secure copy of all the activity as recorded by all those logs in their project, independent of what the individual owners of those projects-- who may be developers or support personnel or whatever-- independent of the way they configure their project. So this really brings centralized secure logging to your GCP projects at an organization level, which is so important. 

REED: My last best practice that I'm a great fan of, which we're seeing happen a lot, is we're a multitenant cloud platform in GCP. But of course, many of our customers in turn build their own multitenant systems, and so what views and buckets-- and particularly views-- also allows you to do is build a new multitenant layer on top of your log management. So you can use GCP Cloud Logging system and have centralized logs, but you can now, using views and buckets, silo certain parts of that log data virtually for different teams inside your organization. 

So let me give you an example, perhaps you're running a big GKE cluster. And on that GKE cluster, you run developer workloads, you run building workloads, perhaps you run some quality control workloads. And all of the log data from that cluster is going into the single GCP project, because you want centralized management. But you also want to make sure that each party-- developers, testers, billing-- only see their own logs. 

You can do that now with views. You can hand out a view to each of the different teams, and this effectively makes it looks like only their logs are in the project, and it's actually locked down and people can't circumvent it. So using views to build your own multitenant view on top of your centralized log management system is actually a really popular application and an emerging application of some of the new features that Reed has listed. 

So they're just three of them. So bringing it all together, you can now create a bucket, mandate that those logs should be stored in a certain region, with specific retention, and then you can use views to create temporary or permanent secure views into different slices of that log data. Really important stuff to help people meet their regulatory needs. 

TERRY: It's cool, one of the things I've noticed when I'm talking about any of our tech to audiences is that a lot of times I'll have to throw in like things to help people understand the scale of what we're doing. I remember one for networking, which was like we transfer the Library of Congress 10 times a second with this. Do you have those kind of "wow" numbers or stats about logging to kind of help people get a sense of what kind of capacities we're dealing with? 

PHILIP: I sure do. It's a fascinating space, and in some ways it just reinforces the point that Reed was saying earlier on, that the sheer volume of log data is very large. It's large for our customers, and it's very large for us. I've been in the logging business now for over 10 years, building various systems, and it's pretty exciting to work on Cloud Logging system because it is literally one of the largest in the world. Not alone are we receiving log data from end users out there, but the systems that we build have to collect log data from all the big GCP services, such as BigQuery and Cloud SQL and Compute Engine. And we do that so our users have all the log data from the software that they are running right there, but it's an amazing engineering challenge. 

I mean, just to give you an idea, I checked the numbers recently. We are ingesting and indexing in real time 2 and 1/2 exabytes per month of data. That's 2 and 1/2 billion gigabytes every month. And like I said, we have to ingest and index out in real time. So that's an amazing number. And I tried to get some context for it, so I actually looked this up before I came onto the podcast, and it turns out that all the words ever were spoken by humanity is 5 exabytes. So that means after two months, we have indexed an equivalent amount of data. 

So the volume is enormous, and it's not going away. And I guess that's why we're lucky to have the big backends that Google have spent the last 20 years developing. So we're pretty fortunate to be able to use the same infrastructure that YouTube runs on and Google Search, and so forth. So we can turn around and offer that kind of reliability to our end users. We can promise that the log data will be there when they need it. But just the volume is truly something else. 

REED: Can I throw in, I'm glad that the retention of every word spoken by humans is not as robust. I feel like some things are best left in the past, perhaps. 

STEPHANIE: Thank goodness for that. But 2.5 billion gigabytes-- that's just mind boggling. 

PHILIP: 2.5 exabytes. 

STEPHANIE: Exabytes. Honestly, I can't even wrap my head around that. Really, it's just insane. So it underlines the fact that-- you're right-- it's an integrated system with a lot of the storage systems that we've built at Google that are a huge part of the other products that we offer on Google Cloud. You've talked today about the need for log management as well as the analysis layer on top of it that we've been able to provide. And we have more exciting features coming out this year. So is there anything that we missed today, and what should we be looking for in the future? 

PHILIP: I think the future is going to be very interesting. And we have a new product manager, like Reed, on the team, so we're even more excited with the ideas that our product managers have come up with. I say to our development teams to build even interesting stuff. 

You know, Stephanie, I think it's intriguing. If you take a step back, we spent today talking about management. Not really query and analysis, but the actual management of the data. And the management of the data is just as critical to its analysis for successful modern computer systems, particularly with all of us moving to the cloud. And when I think about where the product's going to go next, from the point of view of an engineering manager, I see a cycle that I think some people out there, particularly other engineers and developers, might find interesting. 

Cloud Logging products often start by offering very impressive analytics features, and as a result, they become even more popular. But then those products have to enter a development phase to help users manage the sheer amount of data that users are sending to the logging system. So the product development teams, like ours at Cloud Logging, then dedicate significant resources to improving log management itself. And that's what Reed and I have actually spent a lot of time talking about today. 

But then, of course, better management enables even more log data to be sent, which requires even better analysis. So I do think from an engineering point of view, Cloud Logging is coming to an end in a log management development cycle, and we're in our investments on insights. So I would say I hope we can return, in the near future, to tell you about the next generation insights that we'll be providing. And also I think getting rid of data silos is a big theme now within Cloud Logging and GCP generally. And that is something that hopefully we can return in the future to tell you more about. 

REED: I guess I'll throw in that my own recent experience, I've been working on a lot of consumer features. I was working in search most recently, and in that environment I became very attuned to just how little time everybody has. And this is, of course, just as true when people are getting their jobs done as it is when they're trying to figure out if you're going to spend too much on something or figure out what the right thing to fix a problem is or whatever. 

So I'm excited because I see these advancements as opening doors for us both on the frontiers of what our most sophisticated customers are going to need, but at the same time offering opportunities for us to make the early work, that of developers and so on, easier and more manageable. 

TERRY: That's absolutely great. So if I'm either a new GCP customer or someone who hasn't really dug into logging, what would you suggest I do to get started? 

PHILIP: I'll definitely recommend our public documentation. We put a lot of time into that, and we should include a link to it in the notes. The other thing we've put a lot of investment into recently as well is we've written a series of white papers especially around how to configure and use GCP Cloud Logging system to meet various regulatory and compliance regimes. So I think there's great public resources on the CloudOps page of GCP and, in particular, the white papers. So be on the lookout for those. 

STEPHANIE: Terry, I feel like you can answer this too, because you have published, or are working on, some tutorials that are in console for Cloud Logging. Is that right? 

TERRY: Yeah, we have a tour of Cloud Logging that we just put out. We'll include the link in the materials, but basically what it does is it walks you through each of the individual pieces, showing you this is the Query Builder, this is the Results panel, and then actually has you set up a job that generates a lot of logs in a short period of time, so that you can actually see how to get the answers for your app out of Cloud Logging. We'll include the link there. 

STEPHANIE: Well, Philip and Reed, thank you so much for coming on the podcast once more to talk about the next launches that we can look forward to in Cloud Logging. 

PHILIP: Thank you Stephanie, it's been great. 

REED: Absolutely. 

STEPHANIE: So you often think about the surge of data in the past decade, but you tend to think more about data coming from mobile devices, or multimedia streaming, machine learning. To me, at least, I don't often think about the abundance of log data generated by all the systems that support these services. And so, I just found the numbers astounding. 

TERRY: With all of what you mentioned there, teams are left with just an exorbitant amount of data to have to deal with. Cloud Logging does a lot of the heavy lifting for you, which is really great. Basically, there are so many times where I have started up with a Google process or one of the Google Cloud products and it just starts spitting logs without me having to do anything for it, which is great because you often don't know that you need logs, and you don't know the logs that you need until you actually have a problem. 

And when that problem is a security problem or compliance problem or governance issue, or just an everyday ordinary developer trying to figure out what is going wrong with their app, having all of that done for you and put into one place without having to think about it is such a huge burden off my shoulders as a developer. 

STEPHANIE: That's well said. You don't know that you need it until you need it, which is an unfortunate circumstance. But also just the fact that collecting logs has just become more important than ever, and that's part of what they were talking about today. It seems to be that there are more features around just making it more manageable for developers, because of the abundance of data. So just trying to sift through it is a huge undertaking for people. I think the log views, the collection, the ability to unburden teams and manage access-- that seems to be the direction we're going in to make it easier for developers and whoever needs to look at the logs at the end of the day. 

TERRY: I think there's a lot of pressure. We kind of forget sometimes-- at least my development window is I develop for my own purposes, and I'm developing to explain all this stuff to our audience of Google customers. But so many other issues come up with security and governmental certifications, things like FedRAMP, that logging just has to be done right. And having easier ways to manage that, having ways of storing all this stuff for the various levels of retention that you have to have-- again, it's all about unburdening the developer or the teams or the systems folks, let the platform do it for you instead of you having to do that work for yourself. 

STEPHANIE: Yeah, beyond developer experience, there's also a very strict requirement circumstance and landscape these days with the compliance. So it was a really helpful conversation, and Terry, I know we already brought this up, but there are some awesome things you're working on, so I wanted to give you a chance to give it a plug. 

TERRY: Sure, well thanks a lot. So part of the reason why Stephanie graciously invited me on this week is that I've been working on tutorial content for the CloudOps team just released one for Cloud Logging itself, which is just basically a little tour of the Cloud Logging interface to get people started. The great thing about these tutorials that I'm working-- and I got to not use the internal name for it because it's sort of meaningless externally-- we call them walkthroughs. 

But what's great about them is that they're for a different type of learning style where you call up the actual cloud console and you get little pointers that say like, click on this piece of the console. Instead of you having to read directions, having to switch back and forth between what's on a web page and what's in the console, it's right in the console. And then it also gives pointers that, when you click on something, it'll actually go over and highlight that thing, so you know the exact thing to click on. 

And so I find, having worked with similar types of tutorials with different technologies, it's a great way to learn, and I'm so happy that we're now doing this with Google Cloud. And I'm really glad I get to bring this to everyone. So hopefully we'll link the tutorial for Cloud Logging here, because I think that could be really helpful for your listeners. And yeah, that's what I've been working on. 

STEPHANIE: I mean, if we didn't link that, it would be a total missed opportunity. I have done the tutorial myself. And you're talking about learning styles-- that is my learning style. It's so easy to have everything in the console. It's just so valuable. So thank you for the work there. I know some other teammates of ours have also collaborated on it, but you've just done a fantastic job, so cheers to you. 

TERRY: Thank you, yeah, the rest of my teammates that have been working on it have really made it easy to look good with this stuff. It's been a group effort. Thank you for highlighting them. They really deserve it too. 

STEPHANIE: Of course, we're proud of everyone here. All right, well until next time. We're going to have to say bye to everyone. So see you all next week. 

TERRY: See you. 

[MUSIC PLAYING]