+++
audioDuration = "00:39:34"
audioFile = "Google.Cloud.Platform.Podcast.Episode.225.mp3"
audioSize = 56991711
categories = ["Audit Logging", "Cyber Security", "Event Driven Systems"]
date = "2020-07-01"
description = "This week, Mark Mirchandani and Priyanka Vergadia learn all about Cloud Audit Logging with fellow Googlers, Philip O'Toole and Oscar Guerrero."
draft = false
episodeNumber = 225
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Cloud Audit Logging with Philip O'Toole and Oscar Guerrero"
image="/post/episode-225-cloud-audit-logging-with-philip-otoole-and-oscar-guerrero/images/hero/hero-EP-225.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hjeyzf/episode_225_cloud_audit_logging_with_philip/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) learn all about Cloud Audit Logging with fellow Googlers Philip O'Toole and Oscar Guerrero. Our guests explain the importance of Cloud Audit Logs to keep track of your GCP resources so you know who, what, where, and when things were done. Our guests explain the types of logs GCP offers and why each is important for security. The interview continues with a discussion the various other benefits of audit logging, including proof of compliance and measuring of risk.

Because audit logs have the ability to create more data than some businesses can use, Philip and Oscar help our listeners understand how to choose the correct logging services for their needs, and we learn how Cloud Logging can help users digest their data. Philip describes how audit logs and event driven systems can benefit businesses, explaining how event driven systems can be built and pushed with GCP. Oscar continues the conversation with audit logging in G Suite. The Cloud Logging team is continuing to expand offerings, so be on the lookout!

##### Philip O'Toole

Philip O'Toole is an Engineering Manager at Google Pittsburgh, leading development teams working on GCP's Cloud Logging Platform, including Audit Logging. Prior to Google, he led development teams at InfluxDB, Loggly, and Riverbed Technology. You can find him on the [web](https://www.philipotoole.com).

##### Oscar Guerrero

Oscar Guerrero is a Product Manager at Google New York, focused on Data Privacy and Compliance, in particular Audit Logging. Prior to Google, he consulted on Cloud based Financial Risk systems and was a Program Manager at Microsoft in Commerce, Xbox, and Cloud Recommendations. 

##### Cool things of the week

* The new Google Cloud region in Jakarta is now open [blog](https://cloud.google.com/blog/products/infrastructure/new-google-cloud-region-in-jakarta-now-open)
* Cloud SQL database instances now discounted [blog](https://cloud.google.com/blog/products/databases/cloud-sql-database-instances-now-discounted)
     * Beyond Your Bill [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKJx6FwJMRcsnFIkkNFtsX9)
     * Understanding and analyzing your committed use discounts [video](https://www.youtube.com/watch?v=xVW1m-uBWAM) 
* Now available: Next OnAir '20 schedule, sessions, learning, and resources [blog](https://cloud.google.com/blog/topics/google-cloud-next/next-onair20-schedule-sessions-learning-and-resources-available)

##### Interview

* Cloud Audit Logs [site](https://cloud.google.com/audit-logs)
* Cloud Audit Logs Documentation [site](https://cloud.google.com/logging/docs/audit)
* Cloud Logging [site](https://cloud.google.com/logging)
* Cloud Logging Documentation [site](https://cloud.google.com/logging/docs)
* BigQuery [site](https://cloud.google.com/bigquery)
* Google Cloud Storage [site](https://cloud.google.com/storage)
* Operations (formerly Stackdriver) [site](https://cloud.google.com/products/operations)
* Chronicle [site](https://chronicle.security/enterprise-security)
* Splunk [site](https://www.splunk.com)
* G Suite audit logging information [guide](https://cloud.google.com/logging/docs/audit/gsuite-audit-logging)
* Google G Suite to Splunk HEC Configuration [blog](https://www.splunk.com/en_us/blog/partners/google-gsuite-to-splunk-hec-configuration.html)
* Anthos [site](https://cloud.google.com/anthos)

##### Tip of the week

This week, we have a tip from our Customer Engineering friend, Anthony Bushong, about audit logging in Kubernetes. You can find great documentation on this [here](https://cloud.google.com/kubernetes-engine/docs/how-to/audit-logging) and [here](https://cloud.google.com/logging/docs/logs-based-metrics).
     
##### What's something cool you're working on?

[Cloud Bytes](https://www.youtube.com/watch?v=brhA9uaz7Xs) launched on Sunday and the 2nd episode of the [Drawing Board](https://www.youtube.com/watch?v=VDBhvexAj8I) launched late last week! Continuing to work on these.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 225 of the weekly Google Cloud Platform Podcast. I'm Mark, and I'm back again with Priyanka-- a double-dose of Priyanka week after week. I'm so excited." >}}

PRIYANKA: Oh, yay! Me too. 

MARK: How are you doing, Priyanka? 

PRIYANKA: I'm great. Happy to be here. It's always so much fun talking to you. 

MARK: Absolutely, and always, of course, a great time with you-- and with our guests. So Priyanka, can you tell us who we're going to be talking to today? 

PRIYANKA: We are going to be talking to Philip and Oscar from our Audit Logging Team and they're going to share a lot about how to gather logs within Google Cloud and then how to audit your infrastructure using these logs. 

MARK: Yeah, I think it's really important. And while logging may not be probably the most exciting thing, I think it's really important to kind of understand what's available. And we get into a really good conversation about, like, what should you think about when you're looking at logging-- so definitely some great tips in there. 

And then after that, for our helpful tip of the week, we're going to bring on yet another guest to talk to us a little bit more about logging in Kubernetes. So stay tuned for that. Before we get into any of those, why don't we go ahead and jump into our cool things of the week. 

[MUSIC PLAYING] 

PRIYANKA: I am really excited about this new launch of a new region in Jakarta. So GCP now has an additional region for folks in Asia. If you have services that have users that are in Asia, it's very exciting, because now you can serve the content closer to them. You can have your databases, your compute closer to where the users are. So very, very exciting news-- it was launched late last week. So do check it out if you're interested in expanding your reach. It's a perfect announcement to look into. 

MARK: Yeah, I think it's always great to have more options for where you want to host your stuff. And of course, it's always important to host it closer to where your users are-- so super, super exciting to see. 

Once again I actually have two announcements. The first one I'm going to do-- I'm super excited about-- is that Cloud SQL, the database service, now has committed use discounts. So this is a couple of things. First of all, if you're not familiar with committed use discounts, this is kind of a way that you can sign up for a one or three-year commitment, and then you can save a lot of money. 

And traditionally, that was available for your compute instances. So you could say, I'm going to use a certain number of cores. I know that I'm going to use them, because I have a pretty static workload. I can just pay a lot cheaper for those different cores, and then I'm saving a pretty good chunk of money. Now that's available for Cloud SQL. So whether using Postgres, MySQL, or SQL server, you have a great way to save money. 

And the other thing they actually did with this is they actually lowered the price of Cloud SQL overall to match the sustained use discount pricing. So it's just a little bit cheaper for everybody, because databases, I feel like, are generally pretty consistent in terms of usage, right? You're not going to turn your database on and off-- or maybe you will if you have some special requirements. 

But traditionally speaking, I think a lot of people have that as a static workload. So I'm super excited to stay committed use discounts out for that. Go check that out. I've done some previous content on committed use discounts if you haven't heard of that. So maybe we'll put a link to the video in there. 

PRIYANKA: I've also found one of your other series on just how to manage your billing better and understanding that. That's very useful, too. So while we're at it, maybe we'll just include the links to that series, as well. 

MARK: Why not? Absolutely. And of course, the other second and probably much, much bigger announcement is that some more details have actually come out about Cloud Next. So we have been talking about it for a while. It's obviously changed over this year as to what it's going to look like. And now it's a pretty long-- I think it's about an eight-week event. 

[BUZZER SOUNDS] 

MAN: Actually, that event will last for nine weeks. 

MARK: So the full details are published. We'll have a link down there. But if you're interested in seeing all the cool things that are going to come out at Next, I highly recommend checking out the link and understanding, because each week kind of has a topic. And all the talks are going to be released for that week about that topic. So you can, obviously, pay attention to every single week. But if you have a few things you're more interested in, then those weeks might be more relevant for you. 

When Priyanka and I were at the last Next event in person, it was quite a show. So trying to translate that into a digital event is a very different experience. But I think there's still going to be a lot of really cool content to watch. 

PRIYANKA: Yeah, and I think if you are interested in something really specific, then you can watch that and then fit it in your schedule and timelines. So start looking at that stuff now and planning your Next watches based on that. 

MARK: So some very, very cool things this week. But with all that being said, why don't we go ahead and dive right into our interview with Philip and Oscar. 

[MUSIC PLAYING] 

PRIYANKA: Cool. So Oscar and Philip from our Audit Logs team, we would love to talk to you today. And I'm so excited. Can we start with who you are and what you do? Oscar? 

OSCAR: Sure. Hi, Priyanka. Hi, Mark. So I'm Oscar. I am actually the Product Manager for the Cloud Audit Logs Team. I'm also part of the Data Privacy and Compliance Team at Google Security. 

PHILIP: Yeah, my name is Philip O'Toole. I'm an Engineering Manager based in Google Pittsburgh. I manage a couple of teams within the Cloud Logging product. But one of the teams I specifically manage is Cloud Audit Logging, which we'll chat about today. 

MARK: We wanted to talk about this from before, because we were having a great conversation with the folks over at Chronicle. And one of the questions that kind of came up is making sure you're aware of what's going on in the Cloud. And so this conversation came to audit logs. And so I'm really excited to have you both here. But I think that first and foremost question is, what are audit logs in Google Cloud? 

PHILIP: So it's actually pretty simple in some ways. Audit logs are, basically, the system of record in GCP that tell you everything that's happening to your GCP resources. They tell you who did this, when they did it, from where they did it. And that's clearly pretty important. 

When you think about it, it's one of the two most important security systems in GCP. So you've got one system, Identity and Access Management, which lets you decide what the folks in your organization can do. And then you've got Cloud Audit Logging, which actually tells you what those people did. And that's the real power of it. 

MARK: Yeah, that makes a lot of sense. And it sounds those two together are a great way to implement the first layer of security, right? Understanding who can do what and then, more specifically, what they actually did with that access. So with that being said, the audit logs kind of containing the what people did-- what does that look like? What kind of data actually goes in there? 

PHILIP: There's two main types, right? If you think about it, what's the most important thing in some ways from an administrative point of view up in your Cloud deployment? It's who has access to your resources, how they're configured, when they were created, maybe when they were deleted, and so forth. 

That information, the configuration changes, that's the most basic sense. And we call those admin activity logs. And we think they're so important that you actually can't even disable them. And they're free to all their users. 

Then the second tier of audit logging is the one that tells you who accessed your data, who read it, who changed it, who modified it. And we call those data access logging. That is the second tier, but the main difference with that is it's not always on. You have to explicitly go and turn that on. One of the main reasons being, Mark, actually is because it can actually be very, very large volume-- very powerful but very large. So that when you have to turn on. So they are the two types-- admin activity and data access. 

OSCAR: There's a third type that I think is very interesting and also very useful for customers that are looking into compliance. But it's our goal to actually maintain trust with our customers. And those are they Access Transparency logs. Those logs enable visibility to companies as to what Googlers are doing in their system. 

And normally these are tied together with access justifications, where we actually tell you, this is the reason why Google went and accessed your component, your resource on the Cloud, to make sure that there is nothing weird happening. And you have full visibility, and you can trust our engineers doing their job properly. 

MARK: And a common reason that you would do something like having the access from Google would be like for support cases, right? 

OSCAR: Precisely. 

PRIYANKA: So given all these three different types of logs, how would someone interested in security leverage these logs? Can we touch a little bit on that? 

OSCAR: The first thing that any customer must do is actually get access to their security data link. And you can do that in Google, particularly, with the help of Cloud Logging, which is the other team that Philip actually manages. And what you can do over there is actually export your logs into BigQuery, into GCS for long-term storage, or into another platform, like Splunk or something like that. 

But also, you can actually have access to them natively in Google through Cloud Logging and Monitoring. So after that, you actually want to know what type of threats you're interested in. 

And let me give you two examples that are very relevant today. During COVID, a lot of people are working from home. So a company needs to check what accounts are being compromised. And an easy way to spot that is mapping the locations of those sign-ins and where those accounts are being used. And that data is actually included in Audit Logs as an IP address. 

As a good example would be spotting malicious insiders. A way you could do that is actually looking at the audit logs of your IAM policy changes and who is actually providing or removing IAM policy from a different bucket, for instance, in your storage resources or access to the endpoint of a website, for instance. 

MARK: Right, and I think that's a great point, because maybe there's some malicious insiders. But there's also just people who may accidentally change policies that they don't mean to. So having an audit trail of being able to track that back and say, oh, you know, someone accidentally removed access from a storage bucket, like you said. They didn't mean to, or they didn't know what they were doing. Obviously, someone probably should have removed that role from user if they didn't know what they were doing. But I think it's a great way to kind of double-check on what that looks like. 

Now, you mentioned that there's a couple of different tools involved here beyond just the Audit Logging. As far as I understand, the Cloud Operations Suite now-- and a lot of that used to be Stackdriver. And even back when it was Stackdriver, Stackdriver had a lot of different pieces. So what are the tools that people are looking at now inside of Google Cloud to really get an eye on their security? 

OSCAR: There's quite a few, Mark, actually. I believe in Google we're building an ecosystem to solve your problems security-wise. You get the complete open space to do whatever you want in something like the Operation Suite, Cloud Logging and Monitoring. 

You get the query for anything, create your own filters, do your own queries-- really interesting stuff. You can also do some threat-hunting, for instance on BigQuery. Once you decided to export your data link, it's easy to go run ML models or anything you actually need to accomplish these more complex threat-hunting actions. 

Let's say you need some help actually defining what kind of threats you're interested in. At that point, the Security Command Center comes into play. And the Event Threat Detection component over there uses all of the power of Google and knowledge of Google [? Security ?] to provide automatic detection for a lot of threats that could exist in the ecosystem, including OS detections or the IAM issues I was talking about earlier, as well. 

Lastly, if you have a hybrid system or a very heavy on-prem system, you can actually leverage tools like Chronicle or Splunk, where you can join all of the data across your different clouds, across your different infrastructure, and try to put those together and get the benefit of threat detection as well as threat-hunting in one single platform. 

PRIYANKA: Those are some great tools and aren't covering different sets of use cases. Can you touch a little bit on what benefits can customers get using Audit Logging? 

OSCAR: The first benefit you actually get out of audit logs is your [INAUDIBLE] operations you are able to monitor and do any kind of devops to support your engineering systems and get your help monitoring, your usage metrics-- make sure that everything is going well and make sure that the right people are acting on your system. 

The second one is security. Everything I've been talking about about threat detection and threat-hunting-- all of that is in there. The third one is going to be compliance evidence. The first thing you need to submit to your regulator is going to be audit logs and, as Philip mentioned, the IAM configurations and policies that you have set up. You can also check when you're actually out of compliance based on the audit log systems. 

Lastly, if you're in an uber-regulated area, like financials or health care, you can actually start measuring your risk components and submit their audit logs as part of your risk inputs or risk evidence. 

MARK: So I want to get back to something Philip mentioned earlier. You said that some of these logs were enabled out-of-the-box. And those are some of the admin actions that happen in a project. And some of them you have to enable manually. 

But of course, if you enabled everything, you'd probably have way more information than you ever wanted and way less value than you could really derive out of it. Can you talk a little bit more about how to decide what the important things to enable are and kind of the decision making that goes into choosing which logs you want to enable? 

PHILIP: It actually depends which are interested in, right? So GCP, the platform allows you to enable this high-volume data access logging on a service-by-service basis. One way you can do it is take a look at what are the most important tiers of technology that you have deployed within your system. 

Databases are a classic example. So one of the most common things that operators turn on data access logging for is databases. Why? Because even in this world of stateless, serverless functions, databases are still that persistent store that often keep the most important data belonging to a company. You look at where your most valuable data is being stored, and then you can turn on data access logging just for those services. So people often turn it on for databases. Though the volume can be quite high, they do turn it on. 

The second thing they'll then consider is turning it on for GCS buckets, their cloud storage. So a lot of their longer-term archival data storage is often stored in GCS. So you will see, by its nature, data access logging is usually turned on for the data access systems. And then you can start rolling back with risk and potential for data loss and intrusion. And I think that's how many folks actually decide. 

And this is something we can talk about in another moment. The other way to think about it is just turn everything on, right? And then filter out and exclude using the Cloud Logging Platform generally, which we can talk about in a moment, to then filter out what you don't want. Or, potentially turn it all on and route it all to GCS storage itself, allowing you to store the logs for longer and for cheaper and doing forensic analysis later. 

What you're going to turn on depends where your most valuable data is stored and, crucially, how quickly you want to be able to respond and notified to a potential incident. And by picking those services and picking your response time, that can help you decide what data access logging, I think, you would want to turn on. I don't know if Oscar has any other spin on it, but that's what I see our customers, how they approach it. 

OSCAR: I think you're hitting the nail, Philip, actually. The first risk every internet company is looking at is the fact that they will leak the data of their customers. And for that, you want to make sure you have enabled audit logs in all of your storage locations-- whether it's GCS, or databases, or anything else-- to make sure that you are aware when that happened, you are aware of your impact, as well, how many customers got leaked, and where did that happen from. All of that information will be in that access log. 

MARK: Yeah, I think it was really interesting, because you mentioned being able to export it to BigQuery. And BigQuery's got some built in ML tools, so you can probably do some analysis on that-- or exporting it over to GCS. Probably from there, you can take it into any other tool, do analysis on it, maybe build some models based on that. 

But there's still going to be a really high-- I mean, from what I'm understanding, there could still be a very high kind of signal-to-noise ratio in terms of the sheer amount of things that you choose. One of the interesting points to talk about is definitely what you just mentioned about logging and then excluding. So how does that work, and what's the relationship between audit logs and then Cloud Logging as a whole? 

PHILIP: That's a key thing to understand, because sometimes it can be easy to conflate the two. So Cloud Logging is GCP's in-built, large-scale logging ingestion and analysis system. It's a product, but it's also a platform into which you can send log data. 

So audit logs go into GCP Cloud Logging. And the moment they enter that system, you've got all the advantages that Google has built for this logging system, you've got a lot of redundancy and replication. It's highly reliable. It's low latency. But it also gives you all the power of analysis and query and exports and exclusions. 

So the first thing you can do is, once the data enters Cloud Logging, you can apply some pretty useful filters on that system that can either filter out the high-volume data access logs. That's called an exclusion. You could export them out Cloud Pub/Sub for analysis by another system. Or you can send it into the Cloud Logging query and analysis system itself, which has got very nice features in terms of analysis, understanding what events are happening most, is a particular actor doing something all the time. All the power of Google's Cloud Logging analysis system is actually there. 

And another thing you can do to try and get this quantity of data access logging and admin accessing logging under control is even an alert on it, Mark, right? So one particular example people use is there may be some key GCS buckets that store really important data. If an operator or someone else was to inadvertently delete that bucket, you can set up alerting on an admin activity log or a data access log to see if a file had been removed. All that power is available to you once the audit logs flow into the Logging platform. 

And that is kind of the relationship between the two. Audit Logging is a product, and then Cloud Logging is the platform which ingests those logs by default and then offers all the analysis and query that Google has built into that particular system. 

PRIYANKA: And then you can export the data to different platforms that we just talked about into different SIEMS and to BigQuery and other places and do whatever else that you would like to do on top of that. 

PHILIP: Exactly, and I know this is something that's very important to Oscar. I would say exporting is one of the biggest applications. You mentioned both that if one of those other [? SIEMS-- ?] it's a very important integration point. And we have some high-profile partners that really have actually built custom analysis for Google's Cloud Audit Logs. 

I mean, at the end of the day, Cloud Logging doesn't want to be a cul-de-sac for the audit logs, right? It wants to allow you as a user to send those logs where they best meet your needs. And one of those needs that many of our customers do is BigQuery. BigQuery is one of the most popular export destinations we have-- brings enormous power and allows you to even join those audit logs with other operational data that you have in your system. So you can get both the security view of your system and an operational view of your system. Combine the two in BigQuery, and you can start to do some very powerful things. 

PRIYANKA: And Oscar, would you like to add something there around how people do custom processing using these logs from exports? 

OSCAR: I would like to add something to that, particularly around the type of customers that we have. The customers, as they grow in complexity, they actually need a system that can aggregate data from other places. If you're mainly centric in GCP-- and I know Cloud Logging supports AWS logs, as well-- you want to stick to Cloud Logging. 

But if you actually have, let's say, a very in-depth, on-prem data set servers-- data server [? lake ?] or something like that-- you actually want to have those in either a SIEM or BigQuery, depending on the capabilities that you want. If you want to do some ML analysis, for instance, in all of these logs while joining all information into a full infrastructure, let's say, coming from Forseti, then you want to put that in BigQuery. And you're going to find very, very interesting things by doing that. 

PRIYANKA: So you'd use something like Pub/Sub to create those events and then from there, create an ingestion mechanism to wherever you decide the sync of that data to be. 

OSCAR: And one of the components that we have released in partnership with Splunk is a template of how to import your data directly into Splunk, and particularly G Suite logs, where they are mapped natively to the data model inside of Splunk. So you can leverage all of their reporting capabilities, as well. 

MARK: So you've kind of got your first line here by using the logging solution right in GCP. You can do compliance, right? Put it in GCS, store it there, put a bucket lock on it so nobody's deleting it, make sure it gets stored in case you ever need that-- hopefully not, but you just want to have it there. Then you've got BigQuery, where you can do all kinds of modeling. And then you've got things like Splunk and other SIEMS, where you can really do your security analysis of it. 

I think that, hopefully, paints a pretty good picture of what probably a lot of customers are doing. Are there any other kinds of things that you see customers doing that might be interesting learning points for our listeners? 

PHILIP: I have one, actually, that I think folks would be interested in learning about. It's an emerging application. You're seeing it in industry a lot. And this is kind of event-driven systems. I was at the RSA conference there a couple of months ago, and I saw a presentation by one bank that uses audit logs from across all public clouds, but they also mentioned GCP, particularly, where they like to build event-driven systems from audit logs, because audit logs, as well as being a security stream, basically they are an event that's submitted by the Cloud Platform every time something of significance happens. 

So I see teams that build event-driven systems so anytime a VM is started and deployed [SNAPS FINGERS] an audit log is sent out. And they use that to trigger their deployment systems to maybe go in and update the software in the VM and make sure that it's the running the latest code. So that is one particular application that's definitely emerging. And we support that. You can send your events out Cloud Pub/Sub and trigger events that keep your infrastructure up to date. Event-driven systems are becoming very popular. And audit logs, at least in GCP, are kind of being the de facto trigger for much of these systems. 

MARK: Yeah, I think it's a good point to then dive into, like, what does the technology look like for these audit logs. How are they built? And how might someone go about building an event-driven system based on that? 

PHILIP: I find the logging space, actually, quite fascinating, Mark. And the intersection of security and logging is really interesting. When you think about it, logging presents this particular challenge, whereby the data volumes are enormous, and yet the system has to remain responsive at all times, particularly in the face of an outage or maybe a security instance that you've just known about. 

It often isn't enough to say, well, I'm receiving all this Audit Logging data, but it will be available for reporting in a week. That's no good to anybody, right? So you have to have these large volumes but make them queryable almost immediately. And that's where the power of the GCP's Cloud Logging really comes in. It's really, really interesting. It's such a low-latency system that when you combine that with this real-time security stream that is Audit Logging it's a very powerful system that allows you to build alerts for security, build alerts for event driven systems and so forth. 

And we get into the tech a little bit here. I think people might find it interesting, particularly the more technical folks. A lot of our time on the Cloud Audit Logging team is actually spent making sure that the services that our users using GCP [? emits ?] quality, consistent, structured audit logs in a timely manner. 

And so we put a lot of effort into, like, pushing the Audit Logging support deep into GCP's infrastructure. And that allows users to be comfortable that the Audit Logs will be emitted when they're supposed to be emitted and won't change and so forth. It's actually really a powerful application. 

And we also monitor these logs quite a bit to make sure that each service is meeting its obligations with regards to sending these logs when they're supposed to and so forth, because we know that those compliance and security compartments are really important. Cloud Logging is actually an enormous system. The amount of data that generates is quite large. And audit logs are-- there a significant percent of fraction of the data that's flowing through. 

So from a technical point of view, it's fascinating. We have integrated over 150 services in GCP with Audit Logging over the last couple of years. And so the coverage is really good. So when it comes to security analysis and event-driven systems, the audit logs are a great fit. 

PRIYANKA: But that's not just limited to Cloud, right? It also expands to other areas. 

PHILIP: That's correct, and actually audit logs and the Cloud Logging system-- it's so central to GCP that we are actually integrating other very important sources of data. I know one that's very important to Oscar, and you mentioned it earlier, is we're now increasing our integration with G Suite. So all the very, very important admin and data access activity that is happening at the G Suite application is now becoming available as Audit Logs. And our customers have been calling out for this, and I'm not-- this is something I know is close to Oscar, so he may like to talk a little bit more about it. 

OSCAR: I think the first thing customers really want about it is a centralized view of everything. Their relationship with Google is in a single pane of glass. It's what they find the most attractive. Now, the fact that we're a very reliable system in providing all of those audit logs is probably the secondary part. But what they can do with that data is probably the most interesting. 

Let me give you an example of what actually comes down in these G Suite logs. One of the events that we actually enabled is login logs. Now, these login logs can tell you if we suspect that your account was hacked, for instance, whether you need to go out and investigate because we're not sure, or whether there was even a government attack on a specific account in your organization. These are very powerful events that you can leverage for your security and compliance. 

Another interesting thing that you can look at is, hey, maybe there's a bad insider trying to add external users to your organization that shouldn't belong in there. All of that data is going to be centralized in these G Suite logs and through the Cloud Audit Logs platform. 

MARK: How do you actually enable the logs for G Suite to be aggregated in the Cloud Logging? 

OSCAR: It's actually very simple, Mark. All you have to do is go to your management UI inside of your G Suite organization and enable the sharing bit for your audit logs into GCP. 

PRIYANKA: OK, great. And then if you were to just enable them in general, how would you go about doing that to get started in getting Audit Logs? Is it just a button? Do people go to Google Cloud Console? How can they get started. 

OSCAR: So for the general user that just wants to see audit logs for any of their deployed infrastructure, all they have to do is navigate in their Console of GCP to navigate to Operations and Logging. From there, just go to the Log Viewer, which is our main tool to view your logs in Cloud Logging. Once you have selected your project, you'll see your Administrative Logs already there. They are enabled by default, and you don't have to do absolutely anything. 

PRIYANKA: Awesome. That sounds simple. 

OSCAR: Philip, would you like to tell us how the data access logs work and how they can enable them? 

PHILIP: Yeah, as I mentioned earlier, its data access logging is not enabled by default. So take a few minutes. Visit the IAM page. You'll see all the services listed there that support data access logging. And use that criteria that Oscar and I mentioned earlier on. Where do you think your most sensitive infrastructure is? What would you be most worried about if somebody got access to? Perhaps what do you want to alert on with any changes with regards to read and write access to your data? 

And start enabling services one at a time. Perhaps see what it does to your logging volume. Tweak your exclusion filters or your export filters in cloud logging. And build it up. You do that through the IAM Console. And that's how you enable Data Access Logging on a service-by-service basis. And it's always reversible you can always turn it off. 

Logging can be very verbose. It's no harm to turn on a lot of the start and then pare it back and find that place that meets your security and compliance needs. But IAM is the main place to turn on your data access logs. 

MARK: Again, we kind of talked about this earlier. But the two main reasons you don't want to just enable it on everything is because, one, it will generate some cost. And then two, you're just going to end up with way more logs that might be useful to you, because you might get a log statement for any time anyone even looks at something. So it really does come down to understanding what's right for your business, focusing in on that. 

But I really liked what you said about starting off big and then maybe paring it down to understand using the exclusions. Are there any other good tips for people as they start to enable all these logs, or especially as they start to aggregate them, how they should be thinking about it and what they can do to make it more valuable to them? 

PHILIP: One thing, as well, you should keep an eye out for is you may have a robot account or an automated account that is accessing your systems. That is one of the first things that you would probably want to filter from any data access logging that you've turned on. So that's a tip, is separating out the automated accesses from the human accesses. That is one thing that you should definitely keep an eye on. 

And set up your exclusion filters to drop that data once it reaches Cloud Logging. That's one very important practice that I would suggest. And once you have those filters, you have them set up, and now you should see a much clearer view of the human-generated accesses within your system. That's definitely an important tip. 

Take the time to learn a little bit about audit logs. Study the documentation. And the reason I say that is, while each service will emit a different type of audit log, the metadata that goes with each audit log is the same. So you as an operator can always rely on the source IP address, the browser agent, if they used one, the identity of the person who did the action. 

So while audit logs will vary somewhat from service to service, the key important details of who, where, when, and what will always be there. So it's worth studying the documentation a little bit, because a little bit of knowledge will go a long way when it comes to understanding and processing your audit logs. 

PRIYANKA: Well, this was very, very enlightening, and I definitely learned a lot. Is there anything that we have missed so far that you would like to mention before we wrap up here? 

PHILIP: There is a couple of really interesting things coming along. I would say one of the most important things that Audit Logging is coming to next is GCP has this very important initiative called Anthos, based on GKE. Audit Logging, as it applies across the entire product suite offered by GCP, be it hybrid or on-prem, we're actively working on how does the audit logging story work when you as an operator or a developer are running software not just in the cloud but on-prem, as well. 

So that's a really interesting space. We're definitely developing some solutions there. There is many new features coming in the Cloud Logging space generally that will make it even easier for operators to manage their Audit Logging data securely and make sure that it can't be accessed by folks that shouldn't have access to it, and so forth. So I would stay tuned. 

The great thing about the way we've built the system-- I say this as a developer-- I think it's really great-- is all the new features that arrive in the Cloud Logging system generally-- query, analysis, and storage-- are all available to Audit Logging. And we have some great features coming up then in the future, so stay tuned. And maybe, Mark and Priyanka, if you'll have us back, we can talk about those again in the future. 

MARK: Absolutely. We'd love to. And of course, we'll make sure to include some links to the documentation below, because it sounds like that's probably the best place to get started in really understanding how to enable the features here. And then probably to play around with it probably is the next best step to enable the Logging, see what happens, try out some exporting. And then I think, Philip, you made a great point earlier-- really understanding what's the most important data to you-- starting there and then kind of paring your way down. 

Yeah, we'd love to have you back once some more of the features get launched and maybe talk about any other exciting prospects. I'm sure there will be plenty of great news coming down the line with Anthos and Logging in the near future, I'm sure. All right, well, Oscar and Philip, once again, thank you so much for coming on and talking to us. Definitely appreciate it. And like Priyanka said, I think we learned a lot. 

OSCAR: Thank you for having us. 

PHILIP: Bye-bye. 

PRIYANKA: Thank you. 

MARK: Once again, thanks so much to Philip an Oscar for coming in-- definitely learned a lot. Again, logging is probably a really interesting topic that you really should kind of consider how you're going to be storing your data, what you're going to be storing. And I think for most people, the action item is there to go look at audit logging if they're using GCP right now to go check it out and see what they want to enable. What is the data that's most important to them and how can they make sure they have that? 

PRIYANKA: Like we heard, it's just as simple as just going in and enabling it and seeing what's in there-- so worth looking at what's going on, what's happening, and then deciding what you want to do with it. So do go check it out. I think it's really exciting. 

MARK: Well, since we were talking about Logging-- and we've had a lot of security-focused episodes lately, so if you've missed a couple of the past episodes, and you're interested in security, out of the past six or so, I think three of them have been security-related. It's a really wide area of conversation there's so many different ways to look at security. And I think understanding at least the basics, hopefully, is very valuable. 

And so with that in mind, I wanted to understand a little bit more about how logging can apply to everyone's favorite orchestrator of containers, Kubernetes. So I went to the person that I love to get answers from, Anthony Bushong, and asked him, you know, can you tell us a little bit more about how someone might approach logging with Kubernetes? 

[MUSIC PLAYING] 

ANTHONY: Thanks, Mark. What up, everyone? Today I'll be talking about the importance of GKE Audit Logging and Cloud Monitoring. Now, both components are critical to running GKE in production, especially for the increasing number of GKE users who are building a platform for multiple application teams to use. 

When supporting multiple teams in the same environment, implementing Kubernetes Audit Logging is critical for cluster operators to have a chronological record of who and what is interacting with their Kubernetes control plane. GKE implements Kubernetes Audit Logging by integrating with Google Cloud's Operation Suite, specifically Cloud Logging. Some of you may know it by its former name, Stackdriver Logging. 

Now, there are two critical components to using this in production. The first, of course, is actually having the audit logs. For admin activity, GKE makes this available by default. So if you wanted to, immediately after creating a GKE cluster, you can actually navigate to cloud logging and begin to write log queries to navigate the admin activity in your cluster. 

This functionality standalone is great. For example, this satisfies certain PCI requirements that users might be subject to when running in GKE. However, by itself, this does not actively bubble up logs to cluster operators. There may be certain more pressing security events reflected in logs that they may want to actively understand when these events actually happen. 

So for these types of events, it may benefit them to extend GKE Audit Logging with Cloud Monitoring. With this integration, cluster operators are actually able to actively monitor and receive alerts on specific events captured in logs. For instance, users may find it important to create alerts on when role-based access control configurations are changed unexpectedly or when potentially untrusted clients are interacting with their API server-- let's say, from an outside unknown IP range. Events like these could potentially signal either bad actors or misconfiguration of permissions. 

Now, the way that we would actually use cloud monitoring with this is via logs-based metrics. So users can create these logs-based metrics based on the number of times a specific event is counted in logs collected over a user-defined time series. Users can then define alerts based on a condition on these logs based metrics. For instance, users may never want to see an unexpected role-based access control change at the cluster level, so any count of logs with that event greater than 0 should fire an alert. 

Now, once this alert is defined, users can actually tie this to various notification channels, be it Simple, email, or even integrations with other platforms that are commonly used, like PagerDuty. There are additional links that are going to be provided with this podcast that'll actually guide you through configuring this. 

So that's all I got. Thank you for your attention, and I wish you all well. 

PRIYANKA: Well, that was amazing tips coming from Anthony. You should definitely check out, especially if you're working with containers and Kubernetes, what Audit Logging has in store for you. So go ahead and check that out. 

MARK: Awesome. Well, before we wrap things up, Priyanka, you want to give us a little teaser to some of the cool things you're working on? 

PRIYANKA: So last week when I was here, we were talking about a new series that was going to launch. So this week, it has launched and it's called "Cloud Bytes." 

BOTH: Yay! [LAUGHING] 

PRIYANKA: So if you didn't check YouTube, Google Cloud YouTube channel on Sunday, the first episode has dropped there. I would really love to know what you're thinking about it-- the format, everything pretty much is a new style. So would love to hear everything from you in terms of feedback and how you're enjoying that content. So that's one. 

And then the second episode of "Drawing Board" just launched, as well, which was late last week. So go ahead. Enjoy that. It is on Cloud Storage. So I think Cloud Storage is the topic that most people relate to because, in some way, shape, or form, you are storing some sorts of images, content, files, videos. You are looking into the storage option, like Cloud Storage. So check that out. And as far as what's going on or what I'm working on, these little series I'm committed to improving and making further episodes on-- so just working continuously on those. 

MARK: Awesome. I know there's a lot of stuff going on. Obviously, we've seen a lot of people start to create some really great online content. So those two shows are on the Google Cloud Platform YouTube channel. And of course, Priyanka, you and I have worked with that channel before. A lot of our content's there and some other really, really great videos, which I think is why we're always referencing to the cool things that people are creating. 

So if you haven't had a chance, actually, I definitely recommend checking out the YouTube channel. There's so much great content out there. I think really the problem is there's just not enough time to sit down and watch all of them. 

PRIYANKA: Yep. Yeah, so whatever it is that your interest is in, just pick those playlists, pick those topics, and just watch what excites you and what you're working on. 

MARK: Awesome. Well, for everyone who is listening. Thank you so much. And we're super excited to talk to you next week. 

PRIYANKA: Thank you, everyone. Bye. 

[MUSIC PLAYING] 

MARK: Really, I mean it's actually a stark reminder of how difficult it has been to not have human contact. How can we even high five? 

PRIYANKA: There's no way. 

MARK: And there's no sound. 

PRIYANKA: You can't feel it. 

MARK: The whole high five is just absolutely ruined. 

PRIYANKA: Yep. [LAUGHS]