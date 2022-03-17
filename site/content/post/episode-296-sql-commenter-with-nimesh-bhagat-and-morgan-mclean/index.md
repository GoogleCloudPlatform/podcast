+++
audioDuration = "00:42:32"
audioFile = "Google.Cloud.Platform.Podcast.Episode.296.mp3"
audioSize = 102080820
categories = ["SQL", "Database Observability", "OpenTelemetry", "Splunk"]
date = "2022-03-16"
description = "First time co-host Jan Kleinert joins Mark Mirchandani this week to talk about database observability and the cool tools that make it possible."
draft = false
episodeNumber = 296
hosts = ["Mark Mirchandani", "Jan Kleinert"]
title = "SQL Commenter with Nimesh Bhagat and Morgan McLean"
image="/post/episode-296-sql-commenter-with-nimesh-bhagat-and-morgan-mclean/images/hero/hero-EP-296.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/tfmugu/episode_296_sql_commenter_with_nimesh_bhagat_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

First time co-host [Jan Kleinert](https://twitter.com/jankleinert) joins [Mark Mirchandani](https://twitter.com/markmirch) this week to talk about database observability and the cool tools that make it possible. Morgan McLean and Nimesh Bhagat describe database observability, which uses metrics, logs, and other tools to help users understand the health of your database. 

We talk about Object Relational Mappers and the challenges with using these for debugging database performance. SQL Commenter helps database observability in two ways: it is both a library and a standard, Nimesh tells us. He describes the process for us, detailing exactly how SQL Commenter effects projects. Recently, SQL Commenter was donated to OpenTelemetry to augment the observability offerings, create an application standard, and make it easier for developers to use a variety of different tools and languages. Engineers can get end-to-end traces no matter which database technologies they use.

Morgan tells us about Splunk and how information from SQL Commenter is taken into Splunk and used. Backend data like metrics from Cloud Monitoring and client libraries can be correlated together with SQL Commenter and brought into Splunk for full stack observability. Nimesh offers client examples to help us understand how these useful tools integrate for optimal observability. He tells us about the databases and ORMs supported by SQL Commenter. Our guests and co-host Jan give tips to help our listeners get started with SQL Commenter and talk about what they're looking forward to in the future of observability.

##### Nimesh Bhagat

Nimesh is a product manager at Google Cloud, he leads Database Observability. He has worked across engineering and product roles, building highly available and high performance enterprise infrastructure used by Fortune 500 companies. His passion lies in combining powerful infrastructure with simple user experience so that every business and developer can build software at scale and velocity.

##### Morgan McLean

Morgan is ​​Director of Product Management at Splunk and co-creator of OpenCensus / OpenTelemetry.

##### Cool things of the week

* Google Cloud Innovators [site](https://cloud.google.com/innovators)
* Redesigning the Cloud SDK + CLI for easier development [blog](https://cloud.google.com/blog/products/application-development/redesigning-the-cloud-sdk-cli-for-easier-development)
     * GCP Podcast Episode 291: Redesigning the Cloud SDK and CLI with Wael Manasra and Cody Oss [podcast](https://gcppodcast.com/post/episode-291-redesigning-the-cloud-sdk-and-cli-with-wael-manasra-and-cody-oss/)
* What is Active Assist? [video](https://www.youtube.com/watch?v=A2VgO5N_B7g)
     * GCP Podcast Episode 235: Active Assist with Chris Law + MariaDB SkySQL with Robert Hedgepeth [podcast](https://www.gcppodcast.com/post/episode-235-active-assist-with-chris-law-and-skysql-with-robert-hedgepeth/)
 
##### Interview

* SQL Commenter [site](https://google.github.io/sqlcommenter/)
* Sequelize [site](https://sequelize.org)
* SQL Alchemy [site](https://www.sqlalchemy.org)
* ADO.net [site](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/ado-net-overview)
* GCP Podcast Episode 247: Cloud SQL Insights with Nimesh Bhagat [podcast](https://www.gcppodcast.com/post/episode-247-cloud-sql-insights-with-nimesh-bhagat/)
* OpenTelemetry [site](https://opentelemetry.io)
* Splunk [site](https://www.splunk.com)
* Cloud Monitoring [site](https://cloud.google.com/monitoring)
* Cloud Spanner [site](https://cloud.google.com/spanner)
* Cloud SQL [site](https://cloud.google.com/sql)
* Cloud Trace [site](https://cloud.google.com/trace)
* Sqlcommenter now extending the vision of OpenTelemetry to databases [blog](https://cloud.google.com/blog/products/databases/sqlcommenter-merges-with-opentelemetry)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody. And welcome to episode 296 of the weekly Google Cloud Platform Podcast. I'm Mark. And today, I'm here with first timer to the GCP podcast, Jan. Hey, Jan. How are you doing?" >}} 

JAN: Hey. How are you doing, Mark? 

MARK: I'm doing well. It's super exciting to always have new people on the podcast. Of course, you've been around Google for a while. But it's a podcast. And we're always really, really excited to have new people come in and share their points of view. And of course, you're actually part of the interview that we have today, right? 

JAN: Yeah, and I'm really looking forward to it. I think it's going to be a lot of fun. I always enjoy listening to the podcast. So it's pretty exciting to get to be on it. 

MARK: Yeah, I mean, speaking of which, do you want to tell us a little bit more about who we have on today? 

JAN: Absolutely. We have Nimesh who is a product manager here at Google Cloud and Morgan from Splunk. And they're going to be talking to us a bit about Sqlcommenter and OpenTelemetry and database observability in general. 

MARK: Yeah, this is a really cool conversation. And it's actually kind of a follow up to a conversation we had last year with Nimesh when we were talking about Cloud SQL Insights. Part of that we went into Sqlcommenter. And of course, we'll talk more about it in the interview. But I'll make sure to put a link in the show notes for people who want to go out and check out that previous episode because we do talk a lot about what are the challenges with databases and database observability. And we get into a lot of that in this conversation. 

JAN: Yeah, absolutely. I think we're getting a little bit deeper into kind of how it actually works and some of the problems that it can solve for developers, not just within Cloud SQL but more broadly. 

MARK: Yeah, it's super exciting. But before we jump into that, why don't we go ahead and do our Cool Things of the Week? 

[MUSIC PLAYING] 

JAN: My cool thing of the week is the Google Cloud Innovators program which is a place for members of the technical community to go to connect, learn more about Google Cloud and the technologies, and receive access to live events, be able to connect with developer advocates as well as each other, and learn from each other. 

And there is also our very first Innovators Hive event coming up at the end of March on March 29th and 30th. This is going to be an opportunity to meet and interact virtually with other members of the Innovators community as well as Googlers. There's going to be a lot of great content, workshops, community meetups and things like that. If you'd like to sign up, you can go to cloud.google.com/innovators to learn more about the program and the event. 

MARK: Yeah, I love to hear about stuff like this because I feel like we always get really great reception from the folks who are involved. They're just always hungry for more opportunities and content and ways to not only meet the people who are working at Google Cloud, but also hear about what's up and coming. 

What are some of the cool tools and the best practices? And then to get their hands on-- and a lot of these events I know have very interactive portions with demos and teaching opportunities. So it's really cool to hear. 

JAN: Yeah, that's right. And I think that many of us are kind of hungry for connection and interaction and learning from others right now. So hopefully this is one of those opportunities that'll give us all a little bit more of that. 

MARK: Well for my Cool Thing of the Week, as always, I'm going to have two cool things. The first one is a blog that talks about the redesign of the Cloud SDK and CLI. This is actually an episode we had just a few weeks ago where we brought on some of the product team to talk a bit more about some of the strategies. 

But this blog post does a great job of summarizing, hey, this is what the SDK looks like. This is what the CLI looks like. And I think it's really helpful because those haven't been the super, most obvious things in the past to get started with. And it's always exciting to hear more about it. 

So for folks who do use the SDK or the CLI, I definitely recommend checking out the blog post so they can kind of get a quick idea of what it looks like now. And hopefully it's all obviously built to facilitate the usage of it. And then if you want to learn a bit more, we'll put a link in to that previous episode so you can hear a bit more about the thought process and the full landscape of things. 

JAN: Yeah, I think you're totally right, Mark. SDKs and CLIs are often not like, the flashy cool things that get all the attention. But they're really critical for developer experience and productivity. So it sounds like a really good resource. 

MARK: One of the other great conversations we had a little while ago is around Active Assist. And this is a really cool up and coming feature inside of Google Cloud. And our team has been able to create some content around it. So we've just started releasing a couple of videos that introduce Active Assist and recommenders. I'll put the video in the show notes as well. But it's a really quick, just, introduction to what Active Assist is. 

And then there's going to be a couple more videos, which we're still in the process of releasing this month, that go over what the recommenders are, how they kind of look for different areas like cost, performance, and security, and kind of how you can think about scaling them from manual-- like, let me set up this recommendation, all the way to how do I kind of integrate that into my DevOps pipeline? 

JAN: That's awesome. I have found the recommenders to be helpful in my own work in finding things like databases that are maybe not being used or things that are approaching capacity. So letting people know what all of the things are that they can accomplish with these is really important. 

MARK: Yeah, I love to see it. And I'm super excited for this content to keep coming out. But enough about that. Why don't we go ahead and jump into our conversation with Morgan and Nimesh? 

[MUSIC PLAYING] 

Jan, Morgan, Nimesh, thank you so much for joining us today. To get things started, can you tell us a little bit more about yourselves? 

JAN: Sure, I am Jane Kleinert. I lead a team of developer advocates in Google Cloud that focus on infrastructure, which includes databases, Compute, networking, and things like GKE and Anthos. 

MORGAN: My name is Morgan McLean. I'm a Director of Product Management at Splunk. I work on Splunk Observability Cloud, where I'm responsible for all of our cross-cutting or platform-level functionality. That includes how we get data in. It also includes OpenTelemetry, a project that we at Splunk are heavily associated with and I'm also one of the co-founders of. 

NIMESH: Hi, I'm Nimesh Bhagat. I'm one of the product managers at Google Cloud. I lead database observability. Our team's mission is to help customers detect, troubleshoot, fix, and prevent database problems through observability. 

MARK: That's 100% what we're here to talk about today, right, is database observability and some of the challenges that that causes. I think a natural kind of question to get started off with is what is database observability, specifically around databases? And what are the kind of challenges that underlie it? 

NIMESH: Database observability helps you understand the health of your databases with telemetry data, such as metrics, traces, and logs. So that you as a user can detect, troubleshoot, fix, and prevent database-related problems. 

MARK: If our listeners are familiar with observability, the ability to understand the state and status of their systems and drive problems to resolution-- if you've used a lot of tools in this space, a lot of them are very focused on the back end services you've developed or the client applications you've developed. An area that perhaps there's a little less maturity is in giving you full visibility of your stack all the way down to databases, right? 

So historically there's been a lot of very specialized database analytics tools. And they're great. But generally, they don't tie in to the broader observability tooling that most people these days have started to adopt. And so database observability is really extending this observability vision to include nitty gritty details about database performance so you can have the nice single pane of glass or whatever. 

But you can have a nice experience. So you can trace problems on your front end all the way down through your infrastructure, through your back end applications, all the way down to individual database transactions or to generalized database performance. 

JAN: So I understand many developers out there, particularly if they're full stack and not database experts themselves, end up using ORMs. How does that play into database observability? Does it make it easier? Does it cause challenges? 

NIMESH: Google, when we started building for managed databases observability offering insights, there are two mega-trends which we saw. One was more and more developers were responsible for databases. And second was changing architecture with microservices-- modern architectures. So many of the developers who are not database experts or who do not have a lot of formal training with databases are being asked to manipulate database or write code for databases. 

And they're using ORMs today to program their databases. Now the biggest challenge with this is you could write a piece of code in Java and it might be converted into a number of lines of code inside SQL. Now if you were someone who's troubleshooting a problem and looking at a particular query which is slow, you have no clue which part of the application code is causing this. And that is a gap which I called an app database gap, which ORMs create. 

MARK: Yeah, I mean, ORMs are great, right? They abstract away a lot of the expertise that you would typically need with databases. And they make it really, really easy as a developer to quickly interact with data in your database, to filter things down to effectively issue some kind of query and get results. And that's why they've been so popular for years, right? 

And you think back even to the days of Ruby on Rails and Active Record and things like-- ORMs are great. They make rapid application development a reality for tons of developers. But they're super hard to debug the performance of. And the performance of many of them-- it's gotten better. But as we all know, it's often in ORMs historically, it hasn't been amazing. 

And so it's a place where there's this gap of understanding. You might be really good at profiling your own application's code performance. But you're not going to debug what's going on in the ORM because most of it's waiting on the database. It might have written a really inefficient query. It's hard as a developer to understand what is actually going on. 

NIMESH: One of our customers said, we love ORMs until they stop performing well. You usually get mixed emotions with ORMs-- wow and oh, no. You get both of those reactions with ORMs. 

MARK: That's fair. I mean, I definitely have had both of those. And I think it's actually probably worth taking just 30 seconds or so for folks who haven't heard of an ORM before. Can we talk just quickly about what they are and how, kind of, all over the place they were back in the day? 

MORGAN: And still are to an extent. So ORM I think stands for object relational mapper? 

JAN: Yep, that's right. 

MORGAN: OK, good. I got it right. So it basically, as a developer, typically if you're querying any kind of relational database, you would write SQL queries. And if you know and love SQL, that's great and you can do that. But ORMs allow you to interact with the database using something more akin to objects, basically, in your code and methods on those objects. And so it's a very natural way as a developer to pull in data, interactive data, even in many cases to write data to the database. 

The challenge is that the ORM is basically translating whatever you're doing in your code in whatever language you're using to SQL. In some cases, that's trivial, right? If you're just using an ORM to query a couple of rows of a basic filter out of a table, then great. All is good. 

But if your query is resulting in a bunch of joins and other complicated shenanigans inside of the database, the ORM is not always great at auto-gening that code in a way that is performant or in some cases that's sort of easily debug-able. Hence, the challenge that we're discussing today. 

JAN: Some of the ORMs that are out there that helps make it a little more concrete for folks are things like Sequelize and [? Connects ?] for node-- I think SQLAlchemy for Python. Some of those types of things are what we're referring to here. 

MORGAN: Like, ADO.NET for .NET, yeah. 

JAN: Mm-hmm. 

MARK: Yeah, and so that totally makes sense what you were saying earlier, Nimesh, is that sometimes when these ORMs can help the developer experience. But they can also make, it sounds like-- observability and kind of understanding what's going on and being able to debug a big, big problem. So one of the things we've actually talked about before-- the last time you were on the podcast, Nimesh, was about Sqlcommenter. 

And I think we're going to talk a little bit more about how Sqlcommenter can kind of help observability. But for folks who didn't hear the last episode, can we get a quick refresher on what Sqlcommenter is? 

NIMESH: Sqlcommenter is a standard and a library. As a standard, it provides you with specification, which is compliant with OpenTelemetry. Now it's an OpenTelemetry standard. So it gives you a specification, how you can pass the application tags and traces from application to the database. And second, it's a library, which auto-instruments ORM. 

So for example, you were Sequelize and you wrote a piece of code in your favorite language over there. The library will auto-instrument application code into tags in Sqlcommenter and pass it to the database code. So now that you have both your application tags and context, you can look at-- hey, this query came from this piece of code. And by the way, I can trace it back easily as well. 

JAN: So Nimesh, you mentioned that Sqlcommenter is part of OpenTelemetry. So I understand that it was recently donated to the OpenTelemetry project. What does that mean exactly? And what were some of the reasons behind it? 

NIMESH: If you were to step back, let's go back to why we created Sqlcommenter. Going back to the original comment which I made is when we were planning to build database observability and we saw two megatrends in the industry. One was the rise of developer changing application architectures. So when you have a developer, how they're different than DBA typically is through the responsibility, skills, and tooling. 

In terms of the responsibility, they are responsible for the entire stack starting from application to their database. In terms of their skills, many of them are usually not data experts. Many of them use ORMs, as we said. The third one is tooling. Many of them do not come to you in databases. They use their favorite application performance monitoring tool. So as we thought about database observability, we thought we have to make database observability application-centric, which means you can see database to the lens of your application. 

Now in order to achieve that, we had to stick context of application to databases. And we created Sqlcommenter, which parses tags and traces from application to the database. And we created this. And we open-sourced it because we thought this is overall good for the community. And this can be further extended to many libraries and many languages and ORMs. 

Once we launched, we saw this huge amount of download and interest from the community, from our partners, various other Cloud vendors, about taking the Sqlcommenter and making it more available to entire community via OpenTelemetry. That's the genesis of why we took Sqlcommenter into OpenTelemetry because we realized the vision of both Sqlcommenter and OpenTelemetry were similar. We both wanted to create a standard by which the application and database could talk to each other. 

MORGAN: Yeah, and another thing worth mentioning is OpenTelemetry was already really tightly associated with distributed tracing, right? So this is the ability to watch transactions as they go across your entire stack. So for example, if you're running an e-commerce website and someone presses checkout. And you have an array of microservices that are running your site, maybe like 20 of them. 

That checkout event is probably going to be processed initially by front end service. And it's going to get passed down to a catalog and a whole bunch of other things. And a distributed trace lets you see that entire end-to-end transaction between all these services that occurred from someone pressing checkout in this example. Where the power-- and where I think a lot of the motivation for Sqlcommenter to work with OpenTelemetry came from is-- first off, it's great Sqlcommenter is getting you this correlation between a particular piece of code that's calling the database. 

But also being able to associate this with a specific distributed trace all the way down to a database is somewhat novel. You'd think that that's a common thing because we have distributed traces between our backend services. But that last step of adding spans, adding links on these traces to actual individual database calls was not totally common in the past. And so there was a bit of a gap. And Sqlcommenter is helping fill that gap. 

MARK: That makes a lot sense. And I can see why it would be a good thing to have something like Sqlcommenter teamed up with OpenTelemetry. But this stuff's really complicated now, right? And the world of deploying applications is not as simple as monoliths used to be 10, 20 years ago. Distributed tracing is hard. Distributed tracing down to a database is even harder. 

So it's kind of cool to see how these things work together and how that being as part of the open source community is also going to help people kind of move that forward. I think that's an important point because Morgan, you currently work for Splunk. And it'd be great to obviously have you talk a little bit about who Splunk is and what they do. But also talk about what that relationship is like between Splunk and lots of other vendors to the open source community. 

MORGAN: Yeah, it is. It's a great question, right? And this often comes up. I was actually on a podcast earlier today where I was asked about why do vendors participate in OpenTelemetry. And what is Google's interest and Splunk's interest and all the various other observability vendors and the various Cloud platforms who are there. It's really interesting because for the observability vendors, when you explain it from their perspective, it's pretty obvious why they participate in OpenTelemetry and why they like things like Sqlcommenter. 

And that's getting data into a system like Splunk or various others to analyze it to give insights and show you distributed traces and application maps and generate alerts and everything else that people expect. In terms of getting the data in, it's actually a really hard problem. Everyone assumes that it's like some trivial, like, just go write an agent. You're done. What's the big deal? 

There's thousands of different pieces of software that people want to observe. That includes databases, by the way. But it also includes the various RPC libraries and applications they've written in their own languages and message queues and pieces of infrastructure and everything else. 

And so capturing information from those, especially in a standardized way where you can correlate or compare information from various disparate sources, is shockingly challenging. And so that's-- to answer the first half of your question, why do the observability vendors and others invest in this space? It's because that's incredibly hard. And the more coverage, the more breadth they can get, the more successful they can be as businesses. 

Additionally, the more time and energy and frankly, just engineering firepower they can put behind their actual products-- their analytics, their visualizations, everything else, as opposed to having huge teams just focused on building their own agents that only work for them. For the Cloud vendors, of course, they also offer SaaS services in addition to offering their own observability tools. So they not only-- I mean, I'm sure Google would love more people to use Cloud Monitoring and Cloud Trace and everything else. 

But in addition to that, Google also wants the people who use Spanner and the people who use Cloud SQL and all the other various databases that Google offers to be able to use tools like Splunk and other open source and third party proprietary tools to inspect the performance of those. Because they want people to have a good experience of them. And also, I mean, I was working at Google previously. And I remember one of the reasons why Spanner founded OpenTelemetry. 

And it was basically, like, people pick up the phone and scream at us and say Spanner is broken for whatever reason when something goes wrong. And 95% of the time-- I might be exaggerating a bit. But the vast majority of the time, it's them calling Spanner in a weird way, using the APIs in ways that they didn't expect. I hesitate to call it user error. But it's things that they can solve on their own. 

But without observability, without visibility, their outages are longer. They have a worse experience of the database products. And because we're using third party tools, companies like Google and the other Cloud vendors need to expose this telemetry and these correlations in a way that the end users can consume in any type of observability tool, not just the ones specific to that Cloud vendor. 

JAN: So you mentioned that getting data into these tools can be difficult. And if I'm understanding correctly, so Sqlcommenter is injecting some of this information about the application, about the traces into SQL comments. So now you have that maybe in your database logs. What happens next? So how can that information make its way into these tools like Splunk or others? 

MORGAN: Yeah, so I think Nimesh can probably speak to this a bit more than I can. But I'll talk to the more general problem. So generally when you're using one of these databases, you have two real sources of telemetry. One is the backend database itself. So for Saas services, like let's say Cloud SQL at Google. This is exposed through metrics inside of Cloud Monitoring, logs inside of Cloud Logging. 

As a user, you don't need an agent or any kind of SDK because this data is generated by Google SaaS service. And then it's exposed through those APIs. And so you can consume it within the Cloud Monitoring, Cloud Logging products, or you can siphon that data out to Splunk or wherever you really wanted to go. The other source of data is the client libraries or SDKs that you're using to call into the database. 

And so these are where you tie into things like distributed traces and what have you. And so you have your client side telemetry and you have your server side telemetry. Where Sqlcommenter comes in is it allows you to correlate these things together. As for the mechanics of how that actually works, I will defer to Nimesh though. 

NIMESH: Morgam, you summarized it well. What we do inside GCP and Cloud SQL is we collect this telemetry by SQl comments. And there's a part of slow query logs [INAUDIBLE]. And the majority of the tools, third party tools, have a way to take in, put out slow query logs and visualize the slow query logs as slow queries then aggregate them to tags which are there in those comments. 

But the other thing which we have gone a step further is we take sample query plans. These are aggregate query plans. And what we do is as we get a trace ID from the client side, we use that trace parent, tie our query plan. And then write it to Google Cloud Trace. Now if you are Splunk, you could take the trace. As a result, you'll get an end-to-end trace. 

So you think about it-- before database, maybe you had seven spans. A new database span is added with query plan and returned to Cloud Trace. And now you take this Cloud Trace. You can see this end-to-end inside Cloud Trace or inside Insights. But at the same time, given that this is an OpenTelemetry compliance trace, you could export this to Splunk. 

MORGAN: Exactly. In fact, I don't know if any products on the market today pull in spans from Google Cloud Trace yet. But once they do, then they can get these end-to-end traces. And I believe, Nimesh, correct me if I'm wrong. But the intent of this project is-- obviously you just gave an example using Cloud SQL. 

But that various other databases, database technologies, ones that are Saas, ones from other vendors, ones that people run on their own, self-manage-- we'll all adopt this, right? So you can pull out spans or logs through some mechanism. 

It will probably vary by database-- out of the database backend. And you'll have an ID, typically the trace parent, which is the same type of ID we use in the trace itself. It's quite native-- that will show you an end-to-end transaction. So you have this sort of single correlation ID, the trace ID, that you can use from the data on both ends. 

And then quite magically, you have all of this internal database data-- these internal database operations showing up for an individual transaction in an individual trace in a way that you couldn't really do before in any consistent manner. 

There were some experiments done. I know a few years ago-- of Cloud Spanner that I was part of. But I don't think those really led to much. As far as I know, this is kind of the first time that this is more generally available for people in a useful way and in a way that other databases can copy and use on their own, which is why there's a lot of benefits of this being an OpenTelemetry because that will spur that. 

NIMESH: That's right. One clarification I would add, Morgan, is there's something special which Cloud SQL has done over the year to create those query plans and attach it at. 

MORGAN: Sure. 

NIMESH: In many ways, it's a call to every other database service out there-- 

MORGAN: Yes. 

NIMESH: --to do that because in absence of it, yes, you might be surprised that I only get logs. I don't get traces. I get tags but I don't get traces. You have to go a step ahead and do this part of critical-- new type of data. 

MORGAN: Yeah, I'm with you. 

MARK: And that's really kind of one of the most exciting parts about this, if I can summarize that really well-- is that the part of bringing Sqlcommenter to OpenTelemetry and trying to create a standard that everybody can consistently agree upon is that it'll make it much more possible for folks to use a variety of different tools because people have different backgrounds. And people have different enterprise requirements. 

And so you don't know what set of tools they're going to use. And they can't always use a managed service like Cloud SQL that's going to have that extra ability kind of already built into it. So all of this kind of belonging to OpenTelemetry really encourages everyone to agree on the standard-- work together. And then create tools that all benefit from each other instead of trying to argue over it. Would you say that's right? 

MORGAN: Yeah. And so that if you're using a five or 25-- doesn't really matter how many different database technologies in a large application deployment. You can get these end-to-end traces that go all the way into the database from all of them in a consistent manner, such that you can analyze them using the same tools or different tools if you want. The beauty of OpenTelemetry is that you can send the data to as many destinations as you would like. And so you can continue. 

You can get the enhancement to your broad observability tool. If you've standardized on one in your entire organization as many do, you can get that end-to-end visibility, including these new database parts. But it still doesn't preclude you if you have a favorite, very specialized database tool. You can keep using that. That's fine. 

And if anything, you can use these correlation IDs, these trace IDs to jump between those two contexts. And so really, no matter what type of tooling you want or no matter how your teams are structured around their tools, you win. There's so many scenarios in OpenTelemetry that are like this. This is just another example. But you really get maximum flexibility and maximum insight at the same time. 

JAN: So if I'm a developer who's just listened to you both talk about this and I am convinced that this could make my life easier and I implement Sqlcommenter, what advice could you give me on how to make use of this information that I've now got? What's an example of how I could use this to troubleshoot a problem? 

NIMESH: Yeah, I can give you an example of a customer which we spoke this week. This customer is using Go root wrappers around a SQL code which tag their queries and send the OpenTelemetry transparent context to Cloud SQL. At the end of this two hours, the customer started seeing-- and let me paint the person now. This was one person responsible for an entire stack in a fast growing startup. So this person has to keep an eye, is there anything going slow? 

So what this customer did is using Cloud Trace to monitor all the cases on a weekly basis, daily basis to see, are any of the traces showing high amount of latency? And once they see that, they can pick a trace. And they say, oh my god, this is a problem inside SQL today where the sequential scan is happening suddenly. 

What this customer would have done previously would have been they had to go to the application traces then the database and then try to stitch those two together. Because of this, this developer is able to see the entire stack and detect any performance regressions. 

MARK: Yeah, I mean, that's pretty telling that somebody saw the real value behind it. And it sounds like there isn't a Go library for it already. And so they built their own. And hopefully, as part of that wonderful, open source ecosystem that this exists in, that's something that other people will find valuable and equally contribute more and more to because that's really the goal here, right-- is everybody can use this as an open standard. 

NIMESH: The other scenario with how this plays out, Jan, is it's not necessarily the person who wrote the code is debugging this code when there is an on-call. And the scenario which I've seen this played out more and more is you do land upon something like Cloud SQL Insights or some other tool. And what you see is a bunch of queries. 

And let's say you had a complex architecture where, as Morgan explained, one service calls another, calls another-- and a bunch of servers is calling this golden database, which is usually the bottleneck. And at that point of time, the two things which we see-- that people go to top tags in our case and see, oh, which service is causing this pain? Was this analytical team which fired up something which we did not expect? 

And then when they see that service and they look at the query, they can quickly detect the source of the problem. So this is during the troubleshooting journey is another common scenario which I'm seeing, Jan. More and more customers are using this to go from detection that there's a slowness to determine the root cause and also the source of the problem, which is also very important to do that at the middle of the night. 

JAN: Yeah, I can see how that would definitely save a lot of time and frustration, particularly if you're responsible for troubleshooting a code base that isn't yours. We've talked a little bit about Cloud SQL and we've talked about Go, which is a language that we don't currently have a supported framework for Sqlcommenter. What databases are supported out of the box today, at least with the basic Sqlcommenter functionality? Some of those standard database engines like MySQL PostgreSQL-- what else do we have support for currently? 

NIMESH: The databases we support today, PostgreSQL, MySQL, MariaDB, SQLite, and of course Cloud SQL. These are the databases which we support. But generally, the concept anyone produces slow query logs or similar-- all those databases could, in theory, be supported. 

MARK: Yeah and hopefully this is one of those scenarios where this conversation won't age well and tons more will be added to it because that's what you want to see. And that's obviously the big goal, right? 

MORGAN: Yeah, no, I mean, like we were talking about earlier, much of the impetus for this from Nimesh and your team who worked on this and the reason you've brought it to OpenTelemetry is hoping that this becomes a thing that everyone can take advantage of. And that will occur because hopefully, most database vendors and open source projects who produce these databases will go put this functionality into those as well. 

JAN: Yeah for example, I know with use of MySQL who might be using some of the PHP ORMs, it would be wonderful to have some support for that or community involvement to help us getting support for that into Sqlcommenter. That could really help bring this functionality to a whole other audience of people. 

MORGAN: A quick question for Sqlcommenter. Do you need compatibility with specific ORMs for Sqlcommenter or is it more just the underlying database driver? Like on Java, do you need compatibility of some popular Java ORMs or is it just JDBC that you integrate with? 

NIMESH: There are two parts to this. One is the specification. But the other one is auto ORM instrumentation. So if you need auto ORM instrumentation, we do have five or six ORMs which we support, like Django, SQLAlchemy, Hibernate. But let's say these are not one of the supportable ORMs. And someone has to go and add that piece of magic, which is auto instrument ORMs. 

MORGAN: It's another integration, OK. 

JAN: And Nimesh, that's what you describe the customer that you spoke to this week had done. They wanted to use Go. There's not a supported Go integration. And so they read up on the spec on the Sqlcommenter website and just did it themselves? 

NIMESH: Yeah. Another one which I saw from the community, Go Ent, E-N-T-- someone in the community added a Go ORM support for Sqlcommenter. I saw this announcement a few months back. This is, again, exciting to see that everyone is interested, excited. PHP, Go, these are other common languages people want support for. 

MARK: And ultimately, that's kind of the recurring message that we've brought up a few times, right? But that is a big reason and it sounds like a big advantage to having Sqlcommenter in OpenTelemetry as a whole, is that people are going to catch wind of it. They know that this is a really big problem. And they're going to develop solutions to solve it for themselves and then contribute that to solve it for other people. 

We've talked a little bit about how this kind of automatically plays in if you're using Google Cloud stuff, like Cloud SQL, Cloud Tracing, and Cloud Monitoring. Is there really nothing that needs to be done to take advantage of this if you're inside of an entirely Google Cloud environment? And what would that look like if you're using a partial Google Cloud environment along with some other offerings? 

NIMESH: If you were using Cloud SQL, you need to install Sqlcommander and enable Cloud SQL. And then it just works. There's no setup, no management. But let's say you were using Cloud SQL and Splunk today. Then there is a part which you have to export. If you're using Splunk, Dynatrace, AppDynamics, you have to export your spans and metrics to Splunk. We do plan to make this easier in our roadmap where we hope that we can export this more conveniently for our partner ecosystem. 

MORGAN: Yeah, to clarify, so if you're using-- let's say for example in Google Cloud and you've got a GC EVM that's talking to a Cloud SQL instance. And you've got code written there in Java. That's your code. So you'd always need to configure the OpenTelemetry part that's using Sqlcommenter to export data somewhere. That includes some of the Sqlcommenter data but also includes all your various app spans and metrics. And you can export that to Splunk Observability Cloud. You can export that to Google Cloud Monitoring. You can export that to all the destinations that OpenTelemetry supports. 

The second part that I think Nimesh was getting at, the part that doesn't exist today, is you would also need Splunk Observability Cloud to pull in the spans from Google Cloud trace, which is where the backend spans that are correlated with that are stored. That functionality doesn't exist today. Again, I don't actually know if any of the vendors are pulling in GCP Trace data yet. But once they do-- and certainly as a customer, there are ways you can pretty quickly just make this work on your own if you have to shepherd the data yourself. Then you'll get the full end-to-end trace in these solutions. 

And so there's conversations we've had with the Google Cloud Trace team about how to pull those in. And the same is true on the other Cloud vendors, by the way, right? I think technically, some vendors pull in things from Amazon X-Ray. But it's not that common for the third party vendors to pull in spans yet, mostly because the Cloud vendors are all in the midst of switching to the W3C Trace Context standard trace format. 

And until they do that, historically there hasn't been much point at pulling in the spans because they wouldn't be correlated with anything else. So a bunch of things in flight, but once they're done it's going to be great. 

MARK: So with all that being said, I think ultimately the question to be asked is what's the best way to get started with Sqlcommenter today? 

JAN: Great question. So there are some resources available to help you get started. Sqlcommenter has a website-- I think we're going to include the links in the show notes, where you can, one, read about the specification. See which databases and frameworks and ORMs are supported. There's also really good sample code snippets for each of those. So if you're using Django, you can see, OK, here's what I need to do to enable Sqlcommenter in my application. And it's delightfully little code that you have to actually modify. 

So if you're using a supported ORM, you just need to go look at that. Figure out-- let's say if it's node, npm install, whatever it is you need to include those packages. Enable it in your code. And then if you're using Cloud SQL, just make sure that query insights is enabled. And you should start being able to see the data. You want to make sure, of course, you've got logging turned on and all of those things too. But if you're already logging data, you're already using OpenTelemetry, adding Sqlcommenter on is not a lot of extra work. 

MARK: So we've talked a lot about how this is a great starting point to bring Sqlcommenter-- bring it open source. Get people working on it. Get people excited about it. What would you say for each of you is kind of your favorite thing that you're looking forward to or the thing you're most excited about in the near future for Sqlcommenter and really for the entire space of observability? 

MORGAN: For me, it's seeing Sqlcommenter get picked up by more databases, more data sources-- become more of a standardized thing. It's a really powerful donation. It's fantastic. But right now, I believe the only implementations are within GCP. But the intent of this donation, as we've touched on so many times during this podcast, is that it will be picked up by other database backends whether they're self-managed, open source, or Saas solutions or whatever. And that it'll become just common-- another thing. 

And to me, what I'm looking forward to after that is the joy from developers who can actually understand how transactions take place all the way down to their databases. Because that's just such a gap today. As soon as things touch databases, there's a lot of developers who say I have no expertise here. I feel afraid. I'm out of my element. And even for those who know what they're doing, it's troublesome and painful to debug. And so I'm excited just to see how this makes things a lot easier for people. 

JAN: Yeah, that's similar to what my hopes are, too. So at the end of last year, I had the opportunity to speak about Sqlcommenter at a developer event. And there was a lot of excitement. I kind of asked the room-- I was like, is this something useful for you? Does this get you excited? And they're nodding, yes, yes. This is solving a problem that we have, which was just nice validation to hear. 

But I remember one of the developers in the room was so excited about the query insights visualization that is within Cloud SQL, which is what I had used for a demo because I work for Google Cloud. And Cloud SQL is great. But in his company, they aren't allowed to use GCP. They have to use a different Cloud vendor. 

And so he was like, oh, well I want this everywhere. I want to be able to have this kind of visualization built in whatever type of database I end up using for my job. So my hope is that we'll be able to enable that type of easy, centralized, app-centric troubleshooting and debugging for databases in all the places developers need it. 

NIMESH: I couldn't add anything more. At the end of the day, we want developers to be excited and do more things with databases. And the dimensions of the problem we would like to solve is, one, they can use their favorite choice of APM tooling-- get that level of telemetry, ease of use visualization. And at the same time, they can pick their favorite programming language-- ORMs, be it [INAUDIBLE] be it Java, be it Ruby. 

So the hope in the next six months to one year, Sqlcommenter becomes a language or a standard which is adopted across languages, across ORMs, across database vendors, across APM vendors. Then you move the burden of instrumentation, managing agents to focusing on simplicity. Everyone wins if Sqlcommenter is successful. The developer wins. The [INAUDIBLE] wins. The APM tooling ecosystem wins. The community wins. That's the power of Sqlcommenter. 

It's been a very interesting journey for me. As I worked through Sqlcommenter, it started solving problems which we are seeing with our developers. But once we launched, we've been delighted to see the impact it has created for everyone in the ecosystem. 

MARK: And that brings up a really, actually, a good question is, as you mentioned, Jan, a lot of these things are all baked into the Google Cloud environment. But not everybody has the ability to use that or doesn't want to use it. So what would it actually take for these other Cloud providers slash other database engines, what would it actually take for them to implement kind of all of the benefits from Sqlcommenter? 

NIMESH: One thing is importing the data. As Sqlcommenter spits out tags and traces of SQL comments, the SQL comments needs to be taken by the database. Second part is the query plan span needs to be added to the existing trace plan. And then it should be made easy to export all this telemetry data to customers' favorite tooling. All of this is possible now given that the application side of complexity of instrumentation is done. Now it's adding a span and then making it easy to export. 

MARK: So for people who do-- obviously are interested in maybe adding the Sqlcommenter functionality into the database engines, we'll put Nimesh's home phone number in the description so you can just give him a call and ask him. But really, where would you like people to go to not only learn more about Sqlcommenter, but what would be the best place for them to kind of talk about and ask questions if they were interested in implementing it? 

NIMESH: GitHub repo would be a good place. We've seen people file bugs, put request on this one. The second one is OpenTelemetry SIGs. Language-specific SIGs are the other places where if you are interested, you could join and make a contribution, provide feedback. 

MORGAN: If you dive into those right now-- like, Sqlcommenter was just donated and so it's still fairly fresh. And so there may be a lack of familiarity. But that definitely long term, I think, is the place where these integrations will take place. Short term, really, I think probably it's the Sqlcommenter GitHub repo. 

MARK: Awesome, well we'll make sure to put in a bunch of links into the show notes so people who are interested can follow along and hopefully find some more of those communities to join. And really, as you just mentioned, the whole point of this is for it to grow, for more people to take advantage of it. 

It sounds like a lot of people already have a pretty positive reception of it. So I'm really excited to see how that moves forward. Unfortunately, we are just about out of time. So before we close things out, is there anything else that we didn't get a chance to mention or any other final mentions? 

NIMESH: Try it out and share your feedback with us. 

MARK: This is a podcast. So we could have some sort of corny sponsor message for Sqlcommenter or OpenTelemetry. I don't know. 

NIMESH: Buy one, get one free. 

MARK: It's open source. It's not how it works. 

MORGAN: Correct. 

MARK: All right, well, Jan, Morgan, Nimesh, thank you all so much for coming in. Super excited to talk about Sqlcommenter, and of course, super excited to see how it evolves in the future. 

MORGAN: Yeah, we're excited, too, especially within the OpenTelemetry community. 

JAN: Yeah, thanks so much. 

NIMESH: Thanks for having me, Mark. 

MARK: Once again, thanks so much to Morgan, Nimesh, and you, Jan, for coming in and kind of answering questions. It was kind of interesting to have you on both the question asking side and the question answering side for that interview. 

JAN: Yeah, for sure. It was interesting for me, too. And I learned a lot, even though this is an area I've already been working in to some degree. 

MARK: Yeah, I love this story that we kind of talked about here, which is probably pretty common at Google. But Google creates something that it thinks is good. And then we see a lot of positive reception. And then we release it out into the open source community. And then people really take it. 

And I think this is a really interesting one because I think as everyone on that interview said, database observability really is a difficult challenge. And having a standard solution to it and having everyone kind of agree on that standardization-- which I guess is what standardization means, is really beneficial because it's just a win-win for everyone involved. 

JAN: Yeah, and I think that standardization and ability to standardize on a common way of doing this, but then also have the flexibility to get it into whatever tools you need to use-- that's really powerful. And it's an exciting area to try to move forward. 

MARK: Yeah, that's a great point, right? This is really up to all of these different, obviously, technical practitioners who are actually working on databases, but also all the different tools, all the different vendors that are creating software and other tools around using databases. They're the ones who have to do a little bit extra work to get this integrated. But the benefit comes down to the users and to the tools because it's just making this problem of observability a much more real and concrete scenario for people to deal with. 

JAN: Yeah, and I really think it helps with getting that whole observability picture that spans everything from networking, traffic, your application, and now also the database activity, to really give you the full picture and minimize the number of tools the developer has to learn, places they have to go, and helps the whole team. 

MARK: Yeah so if you're interested in learning more, definitely check out the links in the show notes. And don't forget, this is still a pretty new thing, the introduction of it to OpenTelemetry. So I'm sure we're going to hear a lot more about it in the upcoming years as people start to really get their hands on it-- as more and more vendors get involved. It's just going to be uphill from here. 

Awesome, well Jan, thank you so much for hosting with us. And of course for our listeners, thank you so much for listening. We'll see you all next week. 

JAN: Bye. Thanks again for having me on. 

[MUSIC PLAYING]