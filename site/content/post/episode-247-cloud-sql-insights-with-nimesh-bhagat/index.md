+++
audioDuration = "00:33:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.247.mp3"
audioSize = 47557994
categories = ["Cloud SQL Insights", "Database"]
date = "2021-02-17"
description = "This week on the podcast, Mark Mirchandani and Gabi Ferrara talk with Nimesh Bhagat about Cloud SQL Insights."
draft = false
episodeNumber = 247
hosts = ["Mark Mirchandani", "Gabi Ferrara"]
title = "Cloud SQL Insights with Nimesh Bhagat"
image="/post/episode-247-cloud-sql-insights-with-nimesh-bhagat/images/hero/hero-EP-247.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/lm0ijf/episode_247_cloud_sql_insights_with_nimesh_bhagat/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, [Mark Mirchandani](https://twitter.com/markmirch) and [Gabi Ferrara](https://twitter.com/gabidavila) talk with Nimesh Bhagat about Cloud SQL Insights. This powerful tool enables developers to diagnose database issues for faster, smoother performance.

Nimesh tells us the inspiration for Cloud SQL Insight's development and describes its biggest benefits. One of the important aspects of Insights is the ability for developers to gain an application-centric view by allowing them to tag database queries with SQL comments. These tags are aggregated in Insights and give developers a visual of the database queries. Here, developers can see load patterns and use that information to improve database efficiency. Cloud SQL Insights offers managed database analysis that helps developers understand the past and predict the future.

Simplifying the journey of database debugging, Nimesh explains, was the goal of creating Cloud SQL Insights. He takes us through the process of using the software, pointing out the improvements Insights makes over the old way. Cloud SQL Insights only launched in January, but it's already helping numerous clients with their projects. Nimesh describes these real-world uses, including Major League Baseball experience as part of Insights Early Access Program.
 
##### Nimesh Bhagat

Nimesh is a product manager at Google Cloud, he leads Cloud SQL Insights. He has worked across engineering and product roles, building highly available and high performance enterprise infrastructure used by Fortune 500 companies. His passion lies in combining powerful infrastructure with simple user experience so that every business and developer can build software at scale and velocity.

##### Cool things of the week

* A new collaboration with Google Cloud [blog](https://blog.twitter.com/engineering/en_us/topics/infrastructure/2018/a-new-collaboration-with-google-cloud.html)
* Don't fear the authentication: Google Drive edition [blog](https://cloud.google.com/blog/topics/developers-practitioners/dont-fear-authentication-google-drive-edition)

##### Interview

* Cloud SQL Insights [docs](https://cloud.google.com/sql/docs/postgres/insights-overview)
* Cloud SQL Documentation [docs](https://cloud.google.com/sql/docs/postgres)
* GCP Podcast Episode 163: Cloud SQL with Amy Krishnamohan [podcast](https://www.gcppodcast.com/post/episode-163-cloud-sql-with-amy-krishnamohan/)
* Google Cloud Monitoring [site](https://cloud.google.com/monitoring)
* Database observability for developers: introducing Cloud SQL Insights [blog](https://cloud.google.com/blog/products/databases/get-ahead-of-database-performance-issues-with-cloud-sql-insights)
* Introduction to Cloud SQL Insights [codelab](https://codelabs.developers.google.com/codelabs/cloud-sql-insights-intro#0)
* Boost your query performance troubleshooting skills with Cloud SQL Insights [blog](https://cloud.google.com/blog/topics/developers-practitioners/boost-your-query-performance-troubleshooting-skills-cloud-sql-insights)
* Introducing Sqlcommenter: An open source ORM auto-instrumentation library [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-sqlcommenter-open-source-orm-auto-instrumentation-library)
* Introducing Cloud SQL Insights [video](https://www.youtube.com/watch?v=qN7x3ngwz1o&feature=emb_logo)
* Cloud SQL Github [site](https://github.com/GoogleCloudPlatform/cloudsql-proxy)

##### What's something cool you're working on?

Gabi is working on several things, including Schema Migrations with CI/CD pipelines. She is always available on Twitter and she offers free [office hours](http://gabi.tips/slots)!

##### Sound Effects Attribution

* "Small Audience Laugh" by Tim Kahn of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 247 of the weekly Google Cloud Platform podcast. As always, I'm Mark. And today we're here with Gabi. This is the first time you've been on the podcast this year." >}} 

GABI: This year, yeah, I thought I was on the [INAUDIBLE]. I'm happy to be back here. 

MARK: Yeah, we're glad to have you back. It's been a very interesting and strange time. But we're super glad to have you back. And of course, we have a great conversation today. Gabi, can you tell us who's going to be joining us today? 

GABI: I love all database things. So they're going to talk to Nimesh. He's a product manager for the Google Cloud SQL team. And we added on our Managed Database offering, a new observability tool. And you may get some insights. 

MARK: Some insights, ey, from this unnamed tool. Well, I think we're going to find out a little bit more about that. But before we dive into that conversation with Nimesh. Of course, we've got to do our cool things of the week. 

[MUSIC PLAYING] 

GABI: So we announced this week collaboration with Twitter, Google Cloud, and Twitter. I put the blog post link there for you to see. Twitter uses Hadoop. They have a huge number of clusters there. 

And Hadoop, for those who are not familiar, is actually based on the Google white paper of MapReduce. So it's like coming full cycle, which I find it amazing. And their systems now holds about 300 petabytes of data across thousands of servers. And they are aiming with that collaboration to improve their scalability and availability. So I think that's going to be good for Twitter users and for us. 

MARK: Yeah, I think that's awesome. I mean, like you said-- 

GABI: It's a good problem solved. 

MARK: Yeah, it's a huge amount of data. And so like no matter what you're dealing with in terms of data analysis, that's a lot of petabytes. So you can't just throw a single virtual machine at it and tell it to analyze some stuff. It turns out that doesn't scale so well. So it was really cool to hear about it. 

GABI: I just wonder how they're going to move that. They're going to put like a container there? 

MARK: This is one of those ones where you just load up a truck full of hard drives, right? Isn't that the cheapest way to move this much data? 

GABI: I think it's the fastest, not the cheapest. 

MARK: That's true. OK, fair enough. It's probably the fastest way to do it. But I mean, hey, you've got to get that data into there somehow. 

So I think it's really cool to hear about Twitter and such a phenomenal case study of being able to analyze that data. And I think hopefully that encourages other businesses that are dealing with large data problems to think about all the different routes you can take because there are multiple ways to slice and dice that data. Hadoop is a great example of one. But there's lots of solutions there. And it's super cool to hear about what they're going to be doing. So I can't wait to hear more about that as they actually start implementing it. 

GABI: So you, Mark, what do you have to talk about? 

MARK: Yeah, so of course, our good friend Gabe from the Google Cloud Developer Advocacy team has created a blog post that talks about something you really don't think about too, too much, which is how to access Google Drive. But instead of having to deal with OAuth, which admittedly can be extremely challenging, he actually has a little workaround to do it with a service account. And I think this is a really cool example of being able to think about Google Drive from a cloud perspective because obviously, all these things are connected on the cloud sense. 

But you really wouldn't normally think of authenticating files in Google Drive from Google Cloud. And so it's a great way to meet in the middle between these two different solutions instead of saying, OK, well, we could spin up a storage bucket and put files there. Instead, let's use the drive interface, which is super friendly and intuitive for people, but actually still be able to access that from an API using a service account. It's a really cool and very quick blog post for people. 

So I highly recommend checking it out. And thinking again, this is a different way to handle a problem. And I think it's super, super cool to see how Gabe came up with a solution for it. 

GABI: As you said, you could have put it in a bucket. But then you don't have to create a front end, and you know, sign URL's with the permissions. But the idea for this, it is to be a public folder. But what Google storage is, technically speaking, it doesn't have folders. And it's all objects. So that solves that problem. Just like for everybody, not just technical protection is to get the data just from Google Drive then or through, I don't know, your Google Cloud dashboard or connecting and getting another service account just to download objects. 

MARK: Yeah, I'm definitely a big fan of not having to create an unnecessary front end. Like, hey, let's use the one that already works. 

GABI: Yeah, exactly. 

MARK: Awesome, well, with our cool things out of the way, why don't we go ahead and get some insights into Cloud SQL. 

[MUSIC PLAYING] 

Awesome, well, hey, Nimesh, do you want to start things off by giving us a quick introduction? 

NIMESH: Hello, everybody. My name is Nimesh Bhagat. I'm one of the product managers on the Cloud SQL team. I'm excited to be on the show today. 

MARK: Absolutely, and we're happy to have you. And of course, today we're talking about something that is pretty new and pretty exciting. So to get things kicked off, Cloud SQL, we've talked about before on the podcast. We're talking about MySQL and Postgres and very similar databases. But today we're talking about Cloud SQL Insights. So the first question, what is Cloud SQL insight's? 

NIMESH: Yeah, you're right. It's right off the press. We launched this on January 28th. Cloud SQL Insights helps developers troubleshoot and diagnose database performance issues. 

As you know, if you're using a database, performance problems can be because a database is running slow. And Cloud SQL Insights is a new tool, which will help developers triage and fix those issues. 

GABI: How that's going to help technical practitioners or developers on the data they journey that they have, as you said, to debug those problems that may arise there regarding to the database? 

NIMESH: I'll share one of the customer stories. When I got onto this project early on, I was talking to this customer who had 800 instances. And they were growing fast, and a team of DBA of three people is constant. And all the developers were used to reaching out to their DBA team every week. 

Hey, DBA, I have this problem. Can you help me fix this? The reason what the customer shared was the tooling did not exist for developers to have a self-service experience. The existing tools-- first you need to understand in terms of journey that there is a performance problem. And it is because of data base. 

Then you have to define which is a slow query. Why is the slow query slow? And what is the source of the problem? That's a journey. 

And Postgres MySQL engines have been awesome in terms of the telemetry that they produce. But customers, the developers, need access to that telemetry. They should know which view to use, which metrics to use. What we are doing is trying to simplify the journey for our developers. 

MARK: And just like you said, it's more complicated now than I think it probably ever has been to really understand what is going on inside of a database. And then to ask all that responsibility of someone who is actually more focused on the application later, it's a kind of a mismatch of how do you actually solve a problem. 

NIMESH: If you look at why this is happening now, what we saw were three trends-- this changing platform, two, this changing application patterns, and third, this changing persona. What customers are using as they move to cloud and they start using these managed database services, services which completely managed, their operational overhead is gone and they can focus more on innovation. 

As a result, the amount of stuff they get built for their customers is just increasing. As a result, what you see is the rate of increase in data in these instances which are there in their fleet are increasing. 

In terms of changing application patterns, which we see is-- as you pointed out, Mark, there's growth in microservices as an architecture. What this has done is, A, allowed customers to ship things fast instead of having one release which will impact database once in a few months, more and more releases are impacting databases on a regular basis. So the velocity has increased. The scale has increased. 

And third which we see is changing persona. The people who big database applications are going from, necessarily, a specialist SQL developer to a full stack developer. And with DevOps, the operator and the developer are coming close together. So the person who is looking at database performance issues is not necessarily only the operator of the DBA, but also the developer [INAUDIBLE]. 

So that's what we have seen. And that's where we realized we need a tool which is custom built for this new volume. 

GABI: That's why I lost my job as a data engineer. 

[LAUGHTER] 

Just joking. How does the Cloud SQL Insights bridge to the application to figure out what is going on to the database slow query log or any other observability that you need on the database? How that does happen? 

NIMESH: Yeah, so I think there are three things that you have to think about over here. One is what is the tool developers use. Second is how can all the database telemetry be application-centric. Because they manage application. And the third part of the puzzle over here is how can you simplify it for the developer if they have to diagnose this issue. 

So starting with your first question, how does a developer get an application-centric view, what we see is, as a number of microservices, for example, communicate with each other and then they communicate with the database, someone who's guarding the database, today, in the world, they will see top 10 queries. Those top 10 queries could be coming from a number of different services or parts of business logic. And I call it that as a tree view. 

What do you really want to see is a forest view. Did my Payment team ship something recently which is causing the challenge? Or did someone run an analytical report-- which is not that uncommon-- and as a result, the database load spiked up. What you get to see today is a bunch of selecting updates, which is hard to collect back to the application. 

So to bridge this gap, we enable developers to tag their queries in terms of SQL comments. And those tags come to Cloud SQL Insights. And give you a visual view which is application-centric. So you can come to the dashboard and say, the Payment Services is taking the most load. And you see a spike at 1:00 AM at night. 

We can talk about the other part, which is a key part, is the journeys of these developers do not start inside the database typically. The journey starts inside their favorite application performance monitoring tool. They measure the latency of the endpoint. 

So first you need access to all the rich database telemetry for the developer. And for that, there is growing open standards like open telemetry. The metrics and the traces are exported in a form which can be easily accessed into their favorite application performance monitoring tool. It improves their life significantly. Because then the tooling doesn't have to change. They continue to get that rich information. 

So with Insights, we are following open telemetry standards. As a result, developers can access the tools via open APIs such as Cloud monitor and Cloud Trace. And an important critical part over here is, when you're looking-- if database is a problem, you need to know the traces of the database. 

And typically what tends to happen is you run into a problem, you find a top query, and then you run an EXPLAIN ANALYZE plan after the fact. You get an execution plan. And you have to investigate which part of the query is slow. What Insights has done is we take a sample executed query plans and they are exported in open telemetry format. So those traces can be connected back into an application tracing. 

Inside our tool, we also give you this end-to-end view. So that is being very well received in my mind, because it gives you this end-to-end application tracing view. It tells you where the source of the problem is. And the visualization helps you easily spot which part of the query is slow. 

MARK: So it's a lot like bringing some of the best practices and some of the recent innovations and being able to debug and monitor a bunch of different application-level things. And bringing that to the database, which traditionally has been very opaque and very hard to really kind of investigate and debug. 

NIMESH: This innovation has been happening in the space for a while. And we are just building on top of it, making sure that database is part of the entire story where an application performance monitoring tool can easily see the database. 

And also one of the parts which I would bring up over here is to reduce this friction for a developer, what is needed is a completely managed to wherein they do not have to look to go to DBA and request to install an agent or manage the performance of the performance monitoring tool, or this metric is going to get stored. All of that has been taken away. We start taking things for granted when we move to cloud. But when we look at the performance monitoring part, just eliminating those frictions also empowers developer with a turnkey solution. 

MARK: It's like DevOps for databases. 

GABI: [CHUCKLES] 

MARK: DataOps. 

GABI: So you know what is the biggest liar of the world? 

MARK: What's that. 

GABI: The query planner. Nimesh knows that. It always lies. It's going to say, I'm going to do this, this, and that. And then you look. No, I'm just going to do the full table scan. 

[LAUGHTER] 

MARK: It's exactly to the point of why something like Cloud SQL Insights is so interesting. Because the tools that have been available have been very challenging to use. And I love that point you made earlier Nimesh, is like, well, you can explain exactly what's going to happen in this query, but that's not what already happened. 

And it's really hard to look in the past. Actually, right now, it's kind of impossible. But something like SQL Insights helps that happen. 

NIMESH: That's right. And that's where the movement towards observability is not just troubleshooting. You have the access to the data, which is historically present, so that you can understand what has happened in the past and also predict the future. And that is where collecting this telemetry and having it available when there is a problem is a big win for developers. 

And I want to also talk about the complexity. As you said, the existing tools have been challenging. We did user research, a bunch of usability studies. And we saw developers jump through different tools, one tool to find which is the top query, another tool to find what is the query plan, have to run a query plan, another tool to find the source of the problem-- which user or which host is causing this? Another set of stacks to figure out which piece of the code is causing this. 

The beauty about simplicity is when you pack all of this into a simple, easy-to-use journey. That is a big part of innovation over here. We just take those things for granted unless you see something which is built in. With Insights, I do believe we have achieved that. 

GABI: So you mentioned that you're using SQL comments to get those trace information to add to Cloud SQL Insights that's open telemetry standard. And when you're writing the SQL query by itself, you can add the comments by itself. But what happens when you're using a framework with a specific ORM. How are you going to deal with that? 

NIMESH: So when we spoke to a number of our customers and we did a survey, a huge percentage of those customers use ORMs. Our developers, many of them, for the reason of ease of use, velocity, skill, are using their favorite programming language. They use Java or Ruby in order to manipulate the database, access the database. 

And what they said, one of the customers gave a quote-- ORMs are very easy to use but extremely hard to diagnose. The reason is either write this piece of single line of code-- and it can be three, five, six, lines of SQL queries-- and you're not able to connect that tool. I call that an app-database gap which ORMs generate. 

So we saw this as a big opportunity as we're thinking about application-centric monitoring. So what Sqlcommenter does is, for top six ORMs, including the likes of Django, we provide a package called Sqlcommenter. You install this on your application library. And we have open-sourced it. You install it on your application server, and it automatically instruments your model view, controller route, application. 

So when you look at the database, you can easily find out which combination of these tags was causing the slowness. So you are able to connect what is happening inside your application, which was not written in SQL, with the SQL queries. Again, that has been very well received. And I had a customer who stated that, oh, you know, this gives us more confidence to continue to use ORMs. So I think Insights plays a big role in that too. 

MARK: ORMs, or Object Relational Mappers for people who haven't used them, are really great, especially for scalable systems when you're trying to abstract the details of those SQL queries away, which is a good idea in a lot of cases because then you can make the developer less responsible for the specific structure of the query and more focused on what's the actual logic I need. 

So by building that into the ORM, you're really saying you can keep using this structure-- again, you don't need to be a DBA to write this code-- but we're going to have these additional metrics and other telemetry that comes through without you having to think about it. And yeah, if you've ever looked at some of these automatically-generated queries, they're a nightmare. They're completely unpassable. 

GABI: I'm going to keep quiet on that. 

MARK: [CHUCKLES] 

NIMESH: Yeah, and we will help you connect the two worlds. And customers, we have heard, are going to use this very differently. What this gives them is the freedom to go allow developers to use ORMs. But what is important is how a quick observability into which of these ORMs or which queries are not doing well. Find out, if required, they decide, for the topmost queries, they could go and hand-write those SQL queries and optimize them. 

So it's not always going to be that ORM is going to be the only answer. What ORMs will bring is velocity. If tuning is possible on the ORM, the ORMs will be tuned. But having that view and knowing which queries to optimize is, again, a big win for our customers. 

GABI: So it's interesting how you said the user journey, when the database sent some alert because some threshold is set-- but when I worked as a data engineer, one of the problems that I had, sometimes the alarms would not go off because technically there was nothing wrong. But we knew it wasn't a perfect application. It had some stuff that could be improved. 

So a lot of the times, I would look on the database side-- and I didn't have that link that Cloud SQL Insights give-- and figure out why that query, as a said, is running a lot of times or being that slow. 

And one of the things-- I call it's the n-plus-1 problem. Let's say you have a users list. You list on your users on your back office. And you want to get their state. And usually it on the address table. You have a for loop. Like, for each user, get the address. Because it's not on the same user. User could have multiple addresses. 

So what happens is-- why it's n plus 1. Let's say you're displaying 10 users. So you do the user query plus 10 other queries to get the address. And then I had to guess which part of the code that was that was doing all those firing queries that weren't necessary. 

How do you think that Cloud SQL Insights may have on the opposite path? You know what I'm saying? 

NIMESH: Interesting question. And we encountered this question with one of our customers. When you look at the top 10 queries, those are the ones which, necessarily, there's not an ongoing problem, but let's say you look at the top 10 queries. Typically what you see is that there are top 10 queries, there are top 10 users, and then there are top 10 hosts, your top 10 across each of them. And it's very hard to connect all of them together. 

So what we did-- and this is a hard problem. This is where a lot of Google engineering infrastructure comes into the picture. Because storing that cardinality, for every top queries, what are the top users and top hosts, is a hard problem. But we are able to do that with our awesome infrastructure inside GCP. 

So when you click on one of the queries, we tell you which are the top users and which are the top hosts. And if it happens a query which was running 5,000 times which it wasn't supposed to run, taking a look at Cloud SQL Insights, can immediately say, oh, this user is the one who is sending 97% of those queries. And you can quickly reach out to the user. 

You can find the user. But what about the piece of code that the user has created? That's the next question. So we follow open telemetry standard. And we do query plan. So what we will do is, inside Insights, you will have one of these sample query plans. One you click on it, if you have open telemetry enabled and end-to-end tracing enabled, we help you visualize, right inside that query, next to the query, where is this query originating from? So you quickly find the user and a piece of code which is causing this. 

So I hope this would help you next time you run into such a problem, Gabi. 

MARK: So that's a really great example of how you can take something like the database user, the queries that are being run, and these insights kind of really help you understand what's going on. And I think that everyone's case is going to be different. 

The key here is that the insights are actually making certain new things available, like really a much better visibility into your actual database usage. And you know, earlier, you mentioned that we had a bunch of customers that, of course, are trying this out and are super excited. Can you share any stories from any of these customers about how they've been using this? 

NIMESH: As I mentioned, we launched GA of Cloud SQL Insights in January. Prior to that, we are in early-access program across large retail customers to early-stage startups. And one of the customers that you mentioned in our launch blog is Major League Baseball. Major League Baseball uses Cloud SQL for live game data. And they are looking forward to use this in their testing. They use this in order to find queries which are running slow, find out which users are causing the challenge, and they plan to use this in order to diagnose any ongoing issues on the PostgreSQL databases. 

MARK: OK, so we've talked a lot about why SQL Insights exists. Let's talk a little bit more about the actual how to do it. 

So how do you actually get into the console? How do you actually enable SQL Insights? What does that look like? And does it work on everything Cloud SQL? 

NIMESH: Great question. So let's break the question. The first one is how someone can use this. Right now, you go to the Cloud SQL instance list page. Click an instance. On the left navigation, you'll find the query insights. You click on it. And you can enable it. Or you can do it while provisioning. You just checkmark a box, you launch Cloud SQL Insights. And there are a bunch of other fields. Also you can collect, like, IP addresses-- extremely simple, just checkbox. It does not require any restart no disruptions. And you can access that dashboard right into Cloud SQL Insights. 

Also I want to note all these metrics are available inside Cloud Monitor. So you could pull all of these metrics via Cloud Monitor APIs, create custom dashboards in Cloud Monitor, or take it into Prometheus, if you would like. And also, you can set alerts on any of those metrics as well. 

We started in our first launch on PostgreSQL. But you can expect us to extend this to other engines inside Cloud SQL in the future. 

GABI: So since it was recently launched, we do have a blog post about the launch. And we do have a Codelab. And if I recall correctly, it uses Node.js. So on the launch page that we're going to link on the podcast page, you'll see how to store it, how to use it. 

And what I want to ask you, Nimesh, when I look on the Sqlcommenter package on GitHub, because it's open-sourced, it shows all the database. And you mentioned that's going to be future on other engines. So it's safe to assume that someone just using the Sqlcommenter could integrate that other open telemetry tools. 

We like Cloud SQL. We like GCP. But it's one of our commitments to the open-source community to give back. How do you see that? 

NIMESH: The problem that Sqlcommenter solves is ability to connect the application code to the database. And this is applicable through different programming languages, different ORMs. And it need not be Cloud SQL itself. We have customers running self-managed. Some have customer self-managed MySQL, for example, on GCP or anywhere on-prem or other cloud providers. Or Sqlcommenter can be used by anyone in order to instrument those queries. The name is Sqlcommenter. By definition, it adds all those tags into SQL comments. And those appear in slow query logs. 

So as a developer, as a sophisticated user, sometimes you can go grab things in your slow query logs. Or you can build awesome dashboards, like what Cloud SQL Insights has done, for you to analyze your ORM. All of those approaches are possible. 

So yes, this is our way to give back to the community so that this challenge of using ORMs can be solved everywhere and we can further unlock more developers to start writing database code and build more things. 

MARK: Yeah, I love to see it. And of course it's really easy to do on Cloud SQL, which obviously, like you said, is just a checkbox. But being able to run that anywhere, I think, will hopefully have a lot of people pick up, try it out, see what challenges and issues they run into, and help just move everything forward. 

NIMESH: Since we have launched, we have seen a number of developers have shown interest on this. And we'd like to hear from you. If you would like to contribute to the next ORM or support the next programming language, reach talk to us on GitHub. And we would love to chat with you. 

GABI: I just wanted to add on that I see Sqlcommenter as like a safety net for developers that are afraid of writing queries for ORM. Because it is challenging. And I know a lot of people that start just doing query builders. And then they're like, oh, I need to write raw SQL. Uh, I don't remember. [CHUCKLES] 

So it's kind of going to take away a bit of that fear and make them feel more secure that, if they do something wrong there is a way to trace back of what was done wrong. And I find that empowering. 

MARK: Yeah. And I think, in the world that we're in-- and we started off talking a little bit about this-- there is so much power inside of all these different tools you can use in the cloud. Naturally you're going to have people who end up needing to touch many different pieces without necessarily having eight years of experience and knowing how to write SQL queries and being a DBA. 

So it's always super, super exciting to hear about stuff like this. And hopefully, obviously, people get a chance to try it out and see what works. And like you said, Nimesh, as they get more and more familiar with it, we'll see more language support and of course more database support. So super excited to see what comes out of that. 

Before we wrap things up, is there anything else we want to mention or anything else that you want to link people to? 

NIMESH: Yeah, we had three blogs which went out. One of them was describing the feature. The second one was around how to-- Jen, our DevRel lead, has written a blog about how you could use Cloud SQL Insights. Third one is about Sqlcommenter. 

Beyond that, we have a very good video giving you an overview of Cloud SQL Insights. And then there is a Codelab. So there's plenty of material out there for you to get started. And please reach out to us with your feedback. Because we would love to hear. And we're excited to build more on what we have got started over here. 

GABI: And of course, the docs. 

MARK: Oh yeah. 

GABI: [CHUCKLES] 

NIMESH: Yeah. I'm looking forward to more people discovering Insights. Already, I think, it was in January the most trending thing on Twitter handle. I am excited how developers are excited. So thank you for doing this, Mark and Gabi, to bring this voice to the developers. 

MARK: Absolutely. Thank you so much for coming in, Nimesh. 

GABI: Thank you, Nimesh. 

NIMESH: All right. 

MARK: Once again, thank you so much to Nimesh for coming in. I mean, it's so cool to see. Because yeah, I mean, obviously, Gabi, you've been working in the database space for quite a while. And so I'm really curious to kind of hear your thoughts on how much of a game-changer this is. 

GABI: So what happens is, a full stack engineer today is different from a full stack engineer from like five years ago. Like just the amount of JavaScript that you need to know-- and it's kind of crazy. I can't do that. I'm from the time of Prototype and script.aculo.us. That's how we did animations [INAUDIBLE]. 

MARK: [CHUCKLES] 

GABI: But it's nice, because this is a way to lower the barriers for people that already have a lot of responsibility and they need to debug their code that they know that maybe the bottleneck is on the database. And that's a cool case for democratizing AI. Like that way we're democratizing observability, you know? 

MARK: That's a great way to look at it, though, right? Because again, this is something that was traditionally limited to a lot of specialists. And you kind of had that problem that Nimesh talked about, where you have a scaling issue because your team of data specialists may not scale as fast as the number of databases you have. 

And it just kind of breaks down the structure of how you actually interact with this, how you actually analyze it, and then, of course, as your systems grow, you're going to need to be able to figure out where the problem areas are and solve them. And that's just not something that works when you have one team of three people who are responsible for managing 80-plus databases. 

GABI: As I said on the podcast, the biggest liars the query planner. And for everybody that works-- even like the developer that had to do an EXPLAIN on a query, it's a nightmare. 

[HORROR MOVIE MUSIC] 

[SHRIEK] 

[BOTH CHUCKLE] 

It's like a [INAUDIBLE] stack trace that's huge and you don't know what's going on. And with Insights, you're going to see, from the links we're going to post here, there is a visual part of it. And you can actually understand what's going on-- and that's amazing-- without having to fully understand how the database works. 

MARK: Yeah. And so it sounds like a great starting point for people would be to hop into the console. If they have any Cloud SQL instances running Postgres, then you can jump in there, turn it on, and just use that built-in dashboard. 

But the next step, of course, is to take all that data that's being exposed through open telemetry and hook it up to whatever your favorite tools are. 

GABI: We like open source. And we did it thinking about the open-source standards. So you know, it's all about hybrid cloud now. And I think it's aligned with the Google Cloud Messaging. 

MARK: Absolutely. So we'll make sure to include, in the show notes, not only the links to, of course, SQL Insights, but also to the open-source implementation so people can check that out, try it out, and of course leave any feedback as you get a chance to try it. 

Well, Gabi, like we said earlier, it's been a while since we've had a chance to chat. What have you been working on? 

GABI: Yeah. Quick rundown-- 2020, hard for everybody. But I got like, you know, when you're a deer on the road, and the car is coming to hit you, and you just can't move? I felt like that for a long time. 

MARK: Oh jeez. 

GABI: So I didn't do anything for a while [CHUCKLES] because I didn't know what to do, you know? My life completely changed. 

But now I'm getting back on my feet. And I've been working on a lot of cool stuff, mostly trying to help people with best practices around schema migrations because people have usually a software, may have a monolith, may have some microservice. And they usually put the migration, create table after table, on their monolith. Sometimes it's not a good idea. 

And what is it going to be my goal now is to work around and show practices around that and how that can actually help you scale beyond that using serverless and that kind of architecture even. 

And as always, I am available on Twitter with my direct messages open. And also my pinned tweet, you're going to see a poster which is my office hours. So you can grab 20 minutes to talk to me. (WHISPERING) And you don't have to pay anything. 

MARK: [CHUCKLES] Well, I mean, obviously, it's so great to get advice from someone who's spent so much time working with databases and kind of understanding what is the best way to plan a migration or to execute specific migrations. So I think those office hours are a great idea, Gabi. 

GABI: It's not just Google Cloud stuff. You can ask me any database stuff. 

MARK: [CHUCKLES] 

GABI: I could talk about all the cloud stuff-- not like App Engine or Cloud Run-- but I'm not the best person to talk about that. [CHUCKLES] But any database question you have-- like, oh, my query's slow, that kind of stuff. Why? Well, you can see Cloud SQL Insights. But I can help with that too. 

MARK: Yeah, these office hours are going to be a lot shorter now. Because it's just going to be like, well, show me the picture of Cloud SQL Insights and I'll just walk you through it. 

GABI: Exactly. [CHUCKLES] 

MARK: Perfect. All right, well, to all of our listeners, thank you so much for tuning in. Hope you learned something. And we'll see you all next week. 

GABI: See you all whenever I'm back. 

[BOTH CHUCKLE] 

[MUSIC PLAYING]