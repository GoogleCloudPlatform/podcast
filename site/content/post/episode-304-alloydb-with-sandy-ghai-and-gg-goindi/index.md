+++
audioDuration = "00:47:35"
audioFile = "Google.Cloud.Platform.Podcast.Episode.304.mp3"
audioSize = 68543978
categories = ["Database", "Data Management", "PostgreSQL", "Spanner", "BigQuery", "CloudSQL"]
date = "2022-05-18"
description = "AlloyDB for PostgreSQL has launched and hosts Mark Mirchandani and Gabe Weiss are here this week to talk about it with guests Sandy Ghai and Gurmeet Goindi"
draft = false
episodeNumber = 304
hosts = ["Mark Mirchandani", "Gabe Weiss"]
title = "AlloyDB with Sandy Ghai and Gurmeet \"GG\" Goindi"
image = "/post/episode-304-alloydb-with-sandy-ghai-and-gg-goindi/images/hero/hero-EP-304.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ushkzq/episode_304_alloydb_with_sandy_ghai_and_gurmeet/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

AlloyDB for PostgreSQL has launched and hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Gabe Weiss](https://twitter.com/gabeweiss_) are here this week to talk about it with guests Sandy Ghai and Gurmeet Goindi. This fully managed, Postgres compatible database for enterprise use combines the power of Google Cloud and the best features of Postgres for superior data management.

AlloyDB began years ago as a solution to help manage huge data migrations to the cloud. Customers needed a way to take advantage of the benefits of cloud, modernizing their databases as they migrated in an easy, flexible, and scalable way. Databases had to maintain performance and availability while offering enterprise customers optimal security features and more. We learn why PostgreSQL is important in the equation and how AlloyDB is built with Google scaling abilities and ML while supporting open source compatibility.

We talk about data analytics workloads and how AlloyDB handles in-the-moment analytics needs. Our guests describe and compare different database offerings at Google, emphasizing the solutions that set AlloyDB apart. We chat about the types of projects each database is best suited for and how AlloyDB fits into the Google database portfolio. We hear examples of customers moving to AlloyDB and how they're using this new service. Clients have been leveraging the embedded ML features for better data management.

##### Sandy Ghai

[Sandy](https://twitter.com/oneoftheghais) is a product manager on GCP Databases and has been working on the AlloyDB team since the beginning.

##### Gurmeet "GG" Goindi

[GG](https://www.linkedin.com/in/goindi/) is a product manager at Google, where he focuses on databases and attends meetings. Prior to joining Google, GG led product management for Exadata at Oracle, where he also worked on databases and attended meetings. GG has had various product management, management, and engineering roles for the last 20 years in Silicon Valley, but his favorite meetings have been at Google. He holds an MBA from the University of Chicago Booth School of Business.

##### Cool things of the week

* Google I/O [site](https://io.google/2022/)
* Introducing "Visualizing Google Cloud: 101 Illustrated References for Cloud Engineers and Architects" [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-visualizing-google-cloud-101-illustrated-references-cloud-engineers-and-architects)
* Meet the people of Google Cloud: Priyanka Vergadia, bringing Google Cloud to life in illustrations [blog](https://cloud.google.com/blog/topics/inside-google-cloud/meet-people-google-cloud-priyanka-vergadia)
* Working with Remote Functions [docs](https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions)
 
##### Interview

* AlloyDB for PostgreSQL [site](https://cloud.google.com/alloydb)
* AlloyDB Documentation [docs](https://cloud.google.com/alloydb/docs?hl=zh-cn)
* AlloyDB for PostgreSQL under the hood: Intelligent, database-aware storage [blog](https://cloud.google.com/blog/products/databases/alloydb-for-postgresql-intelligent-scalable-storage)
* PostgreSQL [site](https://www.postgresql.org)
* Introducing AlloyDB for PostgreSQL [video](https://www.youtube.com/watch?v=kdq42PrRgDo)
* Introducing AlloyDB, a PostgreSQL-compatible cloud database service [video](https://www.youtube.com/watch?v=o5pKfH0Tonw)
* BigQuery [site](https://cloud.google.com/bigquery)
* Spanner [site](https://cloud.google.com/spanner)
* CloudSQL [site](https://cloud.google.com/sql)

##### What's something cool you're working on?

Gabe is working on some exciting content to support landing the AlloyDB launch.

{{< transcript "[MUSIC PLAYING] MARK: Gabe, I have to ask you. Are you sitted down? Seated?" >}}

GABE: I'm seated. 

MARK: In a comfortable position? 

GABE: My seat and tray table are in an upright and locked position. I'm go for launch. 

MARK: I have to tell you, I was looking at something earlier. And you and I did a podcast. You remember, we traveled and we did that podcast with HerdX way back in the day. 

GABE: We did. That was the cow folks. That was HerdX. Yeah, absolutely, I love that. 

MARK: Between that episode launching and this episode launching, this episode that we're recording right now, is 1,001 days. 

GABE: No! 

MARK: 1,001 days between that episode and this episode. 

GABE: You know what breaks my brain most about that, that means that was three years ago, which breaks my noodle that that much time has passed since that podcast. Absolutely, 100% clear as a bell remember going to the Austin office and finding the studio and getting set up and having the HerdX folks come. I absolute recall. 

MARK: Yeah, you and I sat down. And that was the last time, first of all, that you and I were working on the podcast at the same time. 

GABE: Yeah. 

MARK: And just like you were saying, I remember it clear as day. That was such a formative memory in my mind. And yes, it has been three years. 

GABE: Wow, OK, let's not let it go three years before we do this again. 

MARK: [LAUGHING] All right, new full-time host Gabe and I, all talking all the time. 

GABE: I mean, I would settle for once a year. I love being on the podcast. And I love working with you on them. So I absolutely would love to do this more often than that. 

MARK: 1,001 days, that's the new bar to beat. 

GABE: All right. 

MARK: So as long as we can do it more often than that. 

[LAUGHTER] 

GABE: Nice low bar, great. 

MARK: Yeah, speaking of which, hey, everybody. And welcome to episode 304 of the weekly "Google Cloud Platform Podcast." I'm Mark Mirchandani. And as you may have heard, we are here with Gabe Weiss, who hasn't been here in 1,001 days. 

GABE: Hey-o. 

MARK: Well, since you and I have been on a podcast. 

GABE: That's right. 

MARK: And today, we are talking about a brand new product launch. 

GABE: Super sweet. Yeah, we're really, really excited. Last week at I/O, we announced it. It was AlloyDB. We're going to get into it with a couple of the product managers, which is great to have them here. I've been working super closely with these folks leading up to this launch. 

And it's been quite the experience launching a product at Google. That's something I have not done one this big. This is, we call it a tier I launch, is what we call it at Google. And it is a big deal. Lots of moving parts. Lots of people involved. Lots of eyeballs. It's exciting. 

MARK: Yeah, just like you said. We get Sandy and GG and yourself to all sit down and talk about AlloyDB. And we go into a lot of interesting-- obviously what it is and how it works. But just like you were saying, it's also like, yeah, this is a big Google launch. And big Google launches are complicated. We didn't even get a chance to talk about that. 

GABE: No, right? Just the mechanics of how does a launch happen, no, we didn't. That would be a cool podcast to make. All right, let's talk. 

MARK: Shoot. 

GABE: Because I think that's actually-- how these launches work, how Google does business. We tout CI/CD and all of the-- how people should produce product. Google does do it quite different. But it's a different mechanism for a company of hundreds of thousands than it is for pretty much anyone else. So we do have some kind of unique ways of doing things, which that could be cool. 

MARK: Yeah, that'd be a fun one. OK, let's try and make that happen because there is so much that goes into it. And yeah, I mean, Google is a company that obviously is unlike many other companies. But we're not the only big company that does things. 

GABE: That's right. 

MARK: So I'm sure a lot of people might be interested to hear a little peek behind the curtains, as it were. 

GABE: Yeah, how the sausage is made. 

MARK: Exactly. Well, we're going to get into all the-- not the launch details; hopefully that'll be coming up soon-- but all the details around AlloyDB. Before we do that, why don't we go ahead and do our cool things of the week. 

[MUSIC PLAYING] 

GABE: Nice. Yeah, absolutely. So I teased at it. I hinted at it. But Google I/O, Google I/O is just a cool conference. It's Google's developer-focused conference, right? We have Cloud Next as one of our other big ones. And that one's also-- we have developers there. But it's really a marketing event at the end of the day. 

But Google I/O is for developers, consumers of Google stuff. It's awesome. And to be able to be part of that process with this launch has been so cool. Have you been? Have you been to Google I/O? 

MARK: Well, yeah, I mean, the last in-person one I think I was at before, gosh, that was probably 2018. 

GABE: [CHUCKLING] 

MARK: I was at the 2019 one, I'm pretty sure. 

GABE: Yeah, yeah, yeah. It's been virtual, right? 

MARK: Yeah, I mean, it's a wild ride. And it's also really interesting because, like you said, it's a very developer-focused conference. And on top of that, it's also across all of Google. 

So Android and Chrome and so many other smaller different offshoots, the things that aren't Cloud are all featured there and are very much actively engaging with the developer audience. They get a chance to come there. And we're starting to see a little bit more Cloud representation, I feel like. And probably AlloyDB is a great example, right? 

GABE: Yeah, it's so funny to hear you say, the other offshoots of Google, like Chrome and Ads. And it's like, well, OK, maybe we're the offshoot. But it's nice to see that Cloud is getting more representation, right? Like, that's the biggie, is for when I first started, a lot of our work was, no, really, Google has a cloud. 

[LAUGHTER] 

MARK: Yeah, that's a very fair point. That's right, yeah. 

GABE: So thankfully we've moved well past that point. But now it's great to see the larger audience, the broader developer audience getting super psyched about Cloud. And we had our own keynote this year, which was great. We haven't had that in the past. So it's fun being part of this developer audience. 

MARK: So definitely check out the website for I/O if you want to catch up on everything that happened. There's obviously a whole bunch of launches, announcements, cool features, cool talks. So always a great resource to, well, to check out and learn. 

GABE: All right, so what's next? 

MARK: Yeah, so I actually have two-- it's kind of the same cool thing because it is with our great, great friend, Priyanka, who has been on the show many, many times. And Priyanka has launched a book of different Cloud architectures. 

So if you follow Priyanka on the various social channels, she has done a tremendous amount of work on a whole bunch of different types of content. And one of the ones that really resonated with our developer audience were these illustrated architecture guides. And so she's put them all together into a book. 

And so we've got two blog posts, one that talks a little bit more about the book. And then one just talks a little bit more about meeting people behind Google Cloud. And they featured Priyanka to talk a little bit more about the work she's doing. So I highly recommend you check those out. 

We've seen a lot of people getting really excited about this book. And I just did a podcast with Kaslin. And she was featuring that she had the book in her hands, right? And she was super excited to have it. So I think it's awesome. 

GABE: The book is so cool. The illustrations, I didn't realize that she was planning on doing a book together. I worked with her on a couple of the illustrations for some of the products that I've been focusing on. And I think someone brought up that my name is actually in the book because I worked with her on the-- 

MARK: Yeah! 

GABE: I know, right? I didn't realize. No one talked to me about it. It just kind of showed up. And someone was like, dude, your name's in a book. I'm like, my name's in a, what? And that's how I found out about the book. And it really is. 

Priyanka is so good at taking these Google products that are admittedly built for the millions of users, which means they can be a little hard to understand sometimes. They're a little obtuse to individual folks. 

She is amazing at translating, morphing, and squeezing all of that awesomeness into these illustrated pages that give you a really strong sense of what the product is, why you might want to use it, and easy, easy, easy to understand. Please do check it out. It's really a cool book. 

MARK: Yeah, I definitely recommend following Priyanka on, again, all the social channels because she's always putting out tremendous content, just like you said. A big part of it is navigating and deciding on products to use and which ones to try out. And those can be complicated because Google has so many-- Google Cloud has so many different cloud products. It can be tricky to understand them. So something like this is always super appreciated. And we see great response from the community around it. 

GABE: All right, one more. 

MARK: One more. 

GABE: I wanted to find one that was database themed to come with our AlloyDB talk. So BigQuery, for those that don't know, is our data analytics warehouse. This thing is petabytes of data. And you want to analyze it and look at it and massage it and find out cool stuff with data, this is the product that you want to be using. 

And they recently have come out with-- so databases often have what's called user-defined functions. You can create a custom function within your SQL queries that just packages up some functionality, lets you do stuff. 

So BigQuery has added something we're calling remote functions which is magic. It's pure magic. It lets you define a function in our Cloud Functions. So it's arbitrary, whatever. It's a method that decides you want to find out what the weather's like in Abu Dhabi. You can totally do that now. 

BigQuery has added the ability to call out to those functions from inside your SQL query and use it right inside the data query. So basically it gives you access to every Google API everywhere because you can call that stuff from Cloud Functions and then use whatever you've gotten from that in your SQL query in the database. It's awesome. I'm super excited to play with it. 

MARK: Yeah, I mean, this is just one of those-- I think this is probably one of the best examples I've seen that really shows the power of Cloud Functions in general, this idea of, I'm going to take this very modular idea and put it in a place where it can easily be executed and scaled and then call it from the middle of a query, which, like you said, I mean, "magic" is probably the only word that could possibly describe exactly what that lets you do because you can pretty much do anything now. 

GABE: I'm curious. Normally when you're creating user-defined functions, you are so limited by the language and the constraints of the database you're working in that I think most people that create these functions have that just natural, oh, I'm going to create a user-defined function. I'm going to keep the scope of what I'm doing super tight because I know I don't have a lot of stuff at my disposal. 

This just blows that out of the water. I want to find out what people are doing with it. If anyone goes to play with it that's listening, please send us a message because I want to know. You can do anything. So I want to know, what are you doing? 

MARK: Anything obviously is what they're doing. They're just doing anything and everything. 

GABE: Right, yeah, yeah. [LAUGHS] But I want specifics. 

MARK: Awe, yeah, so that probably helps [INAUDIBLE] better. 

GABE: I want to know. I want to know. 

MARK: That is, I think, such a cool functionality. And I'm super excited, like you said, to see what people come up with because it's going to literally be everything and anything. It's super, super exciting. 

So we'll have a link in the show notes so you can check out how that works. And then I think right now it's Preview mode. But once that comes out and you get a chance to put your hands on it, the sky's the limit-- beyond the sky because we're in the cloud already, right? So we're beyond the sky. 

GABE: That's right. That's right. 

MARK: Yeah, it's how it works. [CHUCKLES] Speaking of incredibly smooth segues, why don't we jump into our actual conversation, where we get to talk to Sandy, GG, and Gabe all about AlloyDB? 

[MUSIC PLAYING] 

Sandy, Gabe, and GG, thank you so much for joining us. To get things started, can you give us a little bit of an introduction? 

SANDY: Hey, yeah, I'm Sandy. I am a product manager on GCP databases. And I'm really excited to talk about a product I've been working on for a while now. So I've seen AlloyDB since the very beginning in many ways. And yeah, really excited to be here. 

GABE: And I'm Gabe Weiss. I'm a developer advocate manager for Cloud databases on Google Cloud. And I, too, am very excited to dive in to talking about AlloyDB. 

GURMEET: [CHUCKLES] Thanks, Gabe and Sandy. Oh, my name is Gurmeet Goindi. I go by "GG." I lead the database [INAUDIBLE] product portfolio from a product standpoint for Google Cloud databases. 

And like Sandy mentioned, we have been working on this for quite some time. And we are very happy to bring it to you, as you might have heard in our announcement that came out last week. And happy to go deep dive with this audience today and share why we did this, who we did this for, and how can you make it better for all the users of this product. 

MARK: Yeah, absolutely. And what we're talking about today is around the announcement of AlloyDB. But before we get into the specifics of that, I think it'd be helpful to talk a little bit around the Cloud landscape of databases. 

There's always going to be a conversation, I think, about whether or not things should be in the Cloud. So I'm curious to get your initial reaction to, hey, how has this changed, especially over the past 10, 15 years around taking data, storing it in the Cloud, and using Cloud-native technologies? 

SANDY: Yeah, I mean, I guess I can start with where AlloyDB began maybe three or four years ago in Google Cloud. We've seen a large number of customers, as they migrate their applications to the Cloud, the database is the heart of that. It's a hard piece to migrate because you're moving data. But it's also a piece that customers spend a lot of strategy on and thinking about what the right way to modernize is when they move to the Cloud. 

And we're seeing a trend in the industry where customers are moving off of these old-guard databases. Often they're expensive, proprietary, don't have the portability that customers need today, and that have these unfriendly licensing terms, and moving towards databases that are more open source in nature, where customers can have that portability, have a better cost model. 

And these customers are really thinking about, what do they want to standardize on for the future? What's the base of innovation that's going to help them modernize not just their application but their business? 

And so AlloyDB was really born out of this question of, how do we help these customers who are struggling to get off the databases that they use today and migrate to the databases they want to use tomorrow? And so it's Postgres compatible. That allows for that portability. 

Postgres is an awesome, mature database service with a lot of enterprise capabilities and functionalities, a really extensive ecosystem. And AlloyDB has been able to give it some of that increased availability, increased scale, increased performance to meet the needs of customers coming from on-premise legacy systems. 

MARK: We talk a lot about, why Postgres? We're seeing a big move in the industry, like Sandy said, to these open standards to avoid all of this lock-in stuff. And this is especially true in the developer world. 

As a developer, when we go deep on a technology, we want to know that that knowledge is portable, that it will move from place to place. So we're seeing a lot more on the database end of things, a lot more standardization on standard SQL, and so like MySQL Postgres, the open-source databases. 

And so trying to be sure that one of our big messages in DevRel is meet the developers where they're at. And so we wanted to be sure that we've developed a product that meets that developer base where they're at. 

So Postgres compatibility was-- in my mind, that was number one for me, was, how close can we be to 100% compatible? Can we get there? Can we put out a product that gives us everything we need for this enterprise scale and still be totally open and accessible to all of the developer audience so it's a nice easy onboard? 

GURMEET: And to build on what Gabe said, what's really important for our enterprise customers is as and when they move to Cloud, which we know from Gartner's recent survey that almost 75% of all new database applications are being developed in the Cloud, they still want to maintain a very high level of availability, a very high standard of performance. 

The databases have to be as resilient as they have been for them for decades. At the same time, giving them the security tenants that their application needs to meet various compliance and regulatory challenges, as well. So that posed a great problem for us to solve. 

And as you know, Googlers love to chomp on the most difficult problems in the world. How we take this Postgres compatible database built on Google scale-out compute and Google scale-out storage with a healthy dose of ML that goes through our system design in each aspects of a stack? That's how Google builds systems. 

It's not that it's an afterthought. This is how we think about things and layer on the controls and the availability and the resilience that our enterprise databases need, still maintaining full open-source compatibility so that customers can bring in their app any day and then move back to on premises or to any other clouds that they like without making any code changes, and have the commercial benefits that a cloud can provide. I think Mark dwelled on many aspects to it, but back to you to bring us together here. 

MARK: Yeah, I mean, there's a ton of points in there that I think are really worth diving a bit deeper on because they are really important points when someone needs to say, how do I choose which database I'm going to use? How do I choose where I'm going to host it? Those are complex decisions, especially for large organizations that could be running tens if not hundreds of different types of applications that have different needs. 

And so when we talk about what it looks like to host these things in the Cloud, there are a whole bunch of checklist decisions that need to get made. I obviously want to dive into what AlloyDB is, since we've hinted at it a lot and talked about what it is and how it uses Postgres and how it's compatible with Postgres. So I think that would probably be the next immediate question, is like, hey, let's get an introduction to what AlloyDB is. 

GURMEET: I think nobody better than Sandy can give us that interaction. Sandy was there on day one. And Sandy was there when we launched it. So, Sandy, back over to you to lead us [INAUDIBLE] 

SANDY: [LAUGHS] You're building me up too much, GG. But no, AlloyDB is a fully managed, fully Postgres compatible database for enterprise-grade, commercial-grade workloads. So it can handle those more demanding, both transactional and analytical workloads because it's powered by some Google native technology, again combining the best of Google with the best of Postgres for a really awesome database. 

It's four times faster than standard Postgres for transactional workloads and up to 100 times faster for analytical queries. It also has a four nines uptime SLA, which is inclusive of database maintenance. So again, really hitting those core enterprise needs of availability, performance, and scale while delivering everything customers love about Postgres. 

GABE: So one thing I wanted to ask, because I've already been asked this question a lot, what do we mean when we say "analytic workload," because are we talking about BigQuery analytics? Are we talking about, I need to run a dashboard? I know we're not. This is a totally leading question. But I wanted to put it out there so that we can help preempt this particular question. What are we talking about when we say an "analytic workload?" 

GURMEET: Yeah, [CHUCKLES] I think the definition gets completely blurred when you ask your favorite developer capability. It's very rare to have a database that only does transactions. Every operational database has a healthy dose of what folks might call reporting, folks might call dashboarding, folks might call analytics, folks might call hybrid transactional and analytical workloads. 

If you ask some of our analysts, folks might call it translytics. The more people out there, the more acronyms. But what it actually means is, I'm going to have a developer. I have a very highly optimized transactional apps. 

But as and when I'm doing those transactions, I do need to do some quick lookups. I do need to do some minor joins to have a better result of my transactional updates. Maybe I have to show up a report on a daily basis or a periodic basis. That's the workload we are referring to. 

The scope and the feature sets BigQuery brings in is that where they target the persona of somebody who is munching this data to get insights. What we are trying to do here is we are processing data in an operational sense and giving you real-time insights to make that operational ingestion go better and not do a full-fledged data mining or a data analysis kind of operation. 

GABE: Exactly. I always think of it as operational analytics-- not real time, because we don't want to talk about real time. But in the moment analytics versus hindsight analytics. Like, am I looking at the performance of something? Am I looking at the history of something? Or am I needing that information right away? And for AlloyDB, the focus really is on that in the moment, is reactive UIs, an application that needs to present some kind of information back to the users. That's really where we wanted to make AlloyDB shine. That was the goal. 

MARK: Yeah, I think there's two really interesting questions that come out of that, especially as AlloyDB is a new product. And a lot of people are probably going to be really interested in checking it out and hearing where it really-- as you were saying, Sandy, all the great statistics behind how it gets used and its performance. 

I think the first question is around Postgres, right? We've seen a lot of noise around Postgres. And it's been growing and growing. And there's been a lot of people who are interested in it. So I think we could talk a little bit more about why Postgres and how developers are responding to that. 

I think the second part is, this is not Google's first or second or third database product. And we talked a little bit about BigQuery there as one example. There are a lot of different tools that are available. So is there some advice and some information that we can share that kind of helps people understand what the landscape of different database offerings look like? 

SANDY: Yeah, I think there definitely are. Do you want to start with Postgres? Or do you want to start with-- let's start with Postgres. OK. So as Gabe mentioned, there are a lot of reasons that we're really excited about Postgres. It is where we see a lot of enterprise customers, especially those migrating from on-premise, our standardizing. And we think that's for good reason. 

It's open source. It has full portability. It's managed by a community that's really strong, really friendly, available for support. It has a lot of enterprise capabilities and functionality, so things like parallel query and a diverse set of data types. 

It's also got that extensive ecosystem of extensions. So you have things like geospatial support that you can add in via an extension. So it's a really great database. What we're so excited about with AlloyDB is that it really is optimized for Postgres. 

We were looking at Postgres developers' specific pain points that they're having, as well as a pain points of those trying to migrate over Postgres. It's not a bolt-on to another system. This was really specifically built for Postgres. 

And a good example of that is when I look at the pain points that Postgres developers see, things like vacuum, which is a way of reclaiming storage in Postgres, or resource management, managing disk and managing memory, we have really targeted approaches to make those pain points smaller. And so while it is this great, general-purpose database that I think a lot of customers from a lot of different places can benefit from, we're also really excited and invested in the specifics of Postgres and how to make that better. 

GURMEET: No, very well said, Sandy. And talking about the various choices you get to run Postgres on Google Cloud, we at Google Cloud are committed to Postgres and success of Postgres and the success it brings to our customers. 

We have made very strategic investments when it comes to AlloyDB, which is a brand new way of marrying the best of Google Cloud with Postgres, to taking a Postgres interface and deploying it on Spanner, which allows the Postgres developer who is used to the Postgres API and the Postgres ecosystem build with Spanner and get the global scale and the [INAUDIBLE] that only Spanner can provide. At the same time, we have a lot of users who manage many databases at the same time, like MySQL, SQL Server, Postgres. 

Cloud SQL is a great alternative for those customers. It provides a fully managed experience across all the database engines. And between Cloud SQL and AlloyDB, we maintain full compatibility with Postgres API, support all the extensions, support all the flags. 

GABE: Just to add to what the two of them have said, we have kind of a "pick your menu" for Postgres, right? We've seen the Spanner interface for Postgres offers you the ability to access Spanner's features with Postgres. So it's a limited set, right? You don't get everything that Postgres gives you. But if you need Spanner, this gives you a familiar way to access those Spanner features. 

Then we've got Cloud SQL, which is our managed Cloud SQL, which takes away a lot of the boilerplate, having to deal with managing your database. A lot of your backup and high availability stuff gets taken care of for you. Or if you really want full control, there's nothing wrong with running Postgres on a VM. 

So you can spin up a Compute Engine and run Postgres. If that's what you need for your application, there's some specific things that you might need to do. So AlloyDB fits into that as yet another facet of that need of what you need with Postgres. 

So if you need these enterprise class features specifically or if you need to manage high analytics-style workloads that the other options might not be able to handle quite right, so if you need that combo of enterprise features and the scalability factor and full Postgres compatibility, that's really the sweet spot for AlloyDB, where it fits in. So we realized that there was a gap in what we had but didn't offer that combo of everything to really satisfy that customer. So we wanted to be sure that we covered our bases. 

SANDY: Yeah, I do want to be clear that I am actually really excited about all of the databases in our portfolio. I think all of them are enterprise grade. All of them integrate with really awesome Google security tools. They have best-in-class availability. There is a standard that we maintain across all of our database services. They're served by database migration service. 

And so all of these are really good choices. I think what we love about having a standard interface between them, whether it's full compatibility with Cloud SQL and AlloyDB or partial compatibility with Spanner, is you can take the same developers who are familiar with the same APIs and also sometimes the same applications and find the right thing for your workload. 

Sometimes that's going to be Spanner. If you really want strong consistency across multiple regions or the business cost of downtime is so high that you really truly need five nines of availability, Spanner is amazing. And there are certain workloads that should go there. At the same time, there are certain workloads that should go on Cloud SQL and others that should go on AlloyDB. 

And you as a customer have the flexibility to put your workload where you want without a lot of changes to the application or without having to hire a completely new set of developers with different skill sets. And again, it integrates with all of the open-source tooling. It's consistency around these different types of workloads that this portfolio as a whole can offer. 

MARK: Yeah, I think you all have touched a lot on where almost that niche is that AlloyDB is really designed to help people run and work on enterprise-grade Postgres workloads, which obviously for a lot of people who are either coming from a different Postgres scenario or they're looking to start a database from scratch and trying to understand what makes sense for their application, hopefully AlloyDB is something they can consider as a good solution for that. 

One of the points that you've touched on is that lock-in idea and Postgres being open source and AlloyDB supporting basically full movement of people, where they can host it here today. They could host it somewhere else tomorrow. Can you talk a little bit more about that goal and that intention from AlloyDB? 

GURMEET: Sure, so at Google, we have a commitment to build trusted open Cloud for our customers. That's the goal our [INAUDIBLE] out for the company. And we are marching towards that. 

And what does "open" mean? And there's so many definitions and so many nuances that "open" can define. In this context, what we felt is the developers can develop against AlloyDB or can develop against PostgreSQL and have full portability between these two environments without changing a single line of code. It will just run better, faster, have more availability, than doing it yourself. But you'll get full compatibility between these two environments. 

GABE: Yeah, the developer cost of change is rough, both from a tech stack perspective of having to learn a new tech stack, from a technical debt perspective of, now I have to change my application and how that works. That was forefront. 

Having an open standard, open Postgres compatibility, and being able to know that whatever you're switching from, whether it's an on-premise locked-in solution, a commercial licensing situation, or Postgres that you've been running yourself that maybe you don't want to be managing yourself anymore, there's cost to all of these things. So if we can minimize the transition costs but keep it open so that, yes, we understand running on AlloyDB is going to change how you think about running your application. 

Having the power of Google Cloud behind your application is-- it's not lock in. It's slightly different. But the technology doesn't change so you can take your stuff and move it everywhere. 

The attraction to running it on our stuff is all of the things that we've been talking about, the best-in-class availability, the security, all of those things that you get. That's why we made the product, right? If it was just a compatibility thing, we'll just throw a Postgres database at you and say, have fun. But we don't. 

We built this product because we know what we bring to the table has huge value for customers, developers out in the world. But we wanted them to feel safe, knowing that they could decide they don't want to be with us anymore and not worry about having that technical debt added on as an additional decision point on whether or not they want to use our technology. 

MARK: Yeah, I think that speaks really strongly to the combination of meeting developers and technical practitioners where they are and also just the general benefits of running different types of workloads in the Cloud, which tends to be a lot of Cloud providers are working on really cool and interesting technologies that would be difficult, if not impossible, for traditional, you should say, or maybe on-premise folks to match that type of scale. 

So AlloyDB sounds like a really interesting product. Obviously we've been talking about it being a fully managed Postgres solution with a lot of under-the-hood performance benefits that people can run basically just like you'd run any other Postgres workload. Can we talk a little bit about some of the workloads that y'all have seen and some of the cases that you use to help design and really focus in the purpose of AlloyDB? 

SANDY: Yeah, we can definitely talk about some of those workloads. There are a couple that I've been really excited about. We have some customers who are starting to explore some heterogeneous migrations to AlloyDB from legacy proprietary databases. 

And so watching them go through that evaluation, looking at the performance, looking at the availability, and seeing what that looks like has been really interesting. We've also seen customers coming from Postgres, migrating in open-source ERP application that the customer doesn't have any control over their application code, and run into scale issues, and then try and migrate that over to AlloyDB and see that even though they don't control the application, everything just works. 

And they're also able to eliminate their scale issues with no tuning, no additional configuration work. Some other use cases I've been excited about are customers who are really doing those more operational, analytical-style workloads. 

So one of our customers runs a customer insights platform and is allowing their customers to do real-time querying on their operational data to get insights to their data. So a couple of exciting ones. Gabe, do you want to jump in with a couple more? 

GABE: Yeah, I was going to say, so traditionally when you have a situation where you've got a database that's got heavy transactions, a lot of updates, a lot of rights, so standard stuff, and then you also hammer it with a lot of reads and a lot of data gathering, that slows everything down. You end up with a bottleneck. 

And the traditional way that you solve that problem is you set up read replicas. And there's a weight to that, to managing these read replicas. And that's one of the really cool things about AlloyDB, is we do replication. That's the way that we handle it. 

And mechanically, we set up the read pool for you. So you specify how big you want that read pool to get. And then we handle all of the load balancing, all of the maintenance pieces, all of the links that we have between them. 

Normally, that becomes an operational cost to your infrastructure, where you have to think about all of these pieces linking together your data. And with AlloyDB, that's one of the big things that we take off your plate. And we talk about having the machine learning and the AI pieces built in. A lot of that is to analyze where the load goes. 

So when your read pool is doing things, we are smart about handling that load so that you don't end up with these logjams and spikes that can slow down your database. That's key. So we talk about the workloads that we want to handle. 

These, and I'm hesitant to keep saying "hybrid," because it's [INAUDIBLE] is not quite right, but these kind of hybrid workloads where you have both transactions and heavy reads at the same time, that's a sweet spot for AlloyDB. 

GURMEET: I could chime in one of my favorite use cases in which we're probably extending what transaction database can do today. As the introduction of what we call augmented transactions, or intelligent transactions, these are very unique to AlloyDB feature in which we allow customers to call in a pre-trained ML model in our Vertex AI stack directly from the SQL. 

So while a developer in his or her app is updating a particular application doing this insert, they can do a quick look-up against Vertex AI, get an inference, and update the table with that inference in real time. And we do believe that customers will use this for things like which web page should I show on my mobile app next when a customer buys object A versus object B? Is this particular transaction a fraud transaction? 

At the same time, we also enable bulk processing at the same stage because a lot of times you'll have to do things like sentiment analysis. And a [INAUDIBLE] there will not help you. [CHUCKLES] So we do enable customers to do batch-operated augmented transaction, as well. 

What we are hearing from our customers, they want a two-step process for them in open-source space. And with AlloyDB, the inferencing comes closer to the database. And this joins the inferencing piece with the developer experience. 

So the data scientist can keep working on the model. And the developer can keep working on the application. And they can do this in parallel. And with time, the model gets better. But there is no tech debt to address to use that model, that your application will keep benefiting from the same point to do that model. 

MARK: Yeah, I mean, those are some really interesting examples of obviously the amount of work and research that went into designing AlloyDB because it sounds like you took a lot of different perspectives and use cases into consideration and then designed a tool that really is very, very focused on solving those. That AI example, I think, is a fascinating one because you don't traditionally think about that from the database perspective. 

And a lot of databases are growing, and really interesting ways to build that in. But suddenly when you have this fully managed solution in the Cloud, you also have access to, well, the rest of the Cloud and all the different resources that are available. 

GURMEET: Very well said. This goes back to the point how Sandy opened this. This brings the best of Google to the best of Postgres. And so this is one more of those examples that highlights that. 

SANDY: Yeah, I might jump in with a quick, quick plug, as well, since we're talking about AI/ML. One of the things I'm also most excited about with the product is the way AI/ML are actually embedded into the database to help with the management of the database. 

So we talked a little bit earlier about some pain points that customers experience, right-- vacuum, resource management. Another one we talked about is that analytics pieces that accelerators that we've added. And AlloyDB has all of these adaptive autopilot capabilities, some of them powered by AI/ML, to make these management functions non-existent. 

So for example, for that analytics accelerator, our vectorized columnar engine will automatically learn based on what a customer's workload is which columns and tables should be in a columnar format to optimize performance. For vacuum, we're going to look at CPU and I/O statistics on the VM and throttle vacuum to make sure that we're optimizing having vacuum happen while also having minimal performance impact. 

And the same thing with memory management. When a Postgres user is setting memory, it's static. How much is allocated to the share buffer cache? With AlloyDB, we can make that dynamic and make sure that we're allocating as much memory to the buffer cache while minimizing the risk of out-of-memory errors. 

And so there are a lot of little pieces of embedded AI/ML and adaptive systems that make everything about managing the database easier. You don't have to be a Postgres expert to use AlloyDB. 

MARK: Well, I think that leads us very nicely into the next question, which is like, OK, all this sounds really awesome. Obviously there's a lot of, again, under-the-hood optimization that would make this an ideal place to run a Postgres workload. How do I get started? What are the best ways for me to use the product and then learn more about how all these different features work? 

GURMEET: You call your sales rep, ask him to show up [INAUDIBLE]. And then he will give you a big contract to sign. No, no, no, we're not doing that. Sandy, tell us how [CHUCKLES] this works. That was the old [INAUDIBLE] nightmare. 

SANDY: Yeah. 

GURMEET: It's much easier now. Sandy, lead us here. 

SANDY: I mean, you go to cloud.google.com/alloydb and get started. We have tons of docs available to help you set up your first cluster. It's available in our UI as well as GCloud. And we have an API available. And so create an instance. 

GABE: I was just going to say it's Postgres. So yeah, go create a cluster and just use it. 

SANDY: Connect your application to it. 

GABE: Exactly. 

SANDY: Yeah. 

GABE: Yeah. 

SANDY: [CHUCKLES] 

GABE: If you're familiar with Postgres, working with AlloyDB is going to feel just like home. 

GURMEET: Yeah, it will just run faster, better. But it will feel exactly like how-- the application interaction will be similar. You just get your results faster. So get used to that. And the system will remain up for much longer times than you're used to that. But other than that, it's just connect to it. And you're good to go. 

SANDY: I love that, Gabe-- "it'll feel like home." I love that. It's totally true, yeah. 

MARK: Well, it sounds like it's a pretty easy product to get started with, then. And then for all the Cloud products, it's always a case of try it out, right? Take a workload. Take a sample workload. Take a proof of concept. Try running it. And seeing what you get, seeing how you can interact with it is always the best way to really get started with it. 

GURMEET: And one thing I'd like to add, Mark, the public preview is available for you at no cost. Play with it. Share the feedback. Share some love with us. And we'll see what best we can do with the feedback you have for us. Thank you. 

MARK: Yeah, we are actually just about out of time. So before we wrap things up here, is there anything else that y'all want to call out or share with our listeners, especially as they're hopefully going to be really excited to get their hands on AlloyDB? 

GABE: I would add, so we've got some fun stuff that's come out with it. We've got a fun animated video that we've produced that kind of gives a little bit of this overview and explains a bit of the pieces. We've got some deep-dive technical blogs on a couple of different things, like how we did the storage, the columnar engine that we mentioned, the caching memory management stuff. 

We've got some really good resources. So just if you want to dive into more from a reading, watching perspective, we've got more stuff that you can look at. 

SANDY: I might also add, all of us, I think, are on Twitter and excited [CHUCKLES] to hear about how you used it. So try a #GoogleAlloyDB, and let us know what you think. We're really excited to hear about it. 

MARK: Awesome. We'll make sure to put a bunch of links in the show notes to the things that y'all just mentioned, too, so people can learn more and, again, just try and get things started. So again, Gabe, Sandy, GG, thank you all so much for joining us today. 

GURMEET: Thanks, Mark, for having us. 

MARK: Once again, thanks so much to Sandy and GG and of course yourself, Gabe, for having that conversation. I had no background on AlloyDB. 

So it was super exciting to hear about not only why we created it and this goal of, hey, this is the best place to run Postgres, but also all the different details we went into around thinking about which database to choose. How do I make sure it's compatible with all my existing things? How do I make sure that if I write or I have a Postgres application, I don't have to really worry about lock in. I can just run it here. And if I end up moving it someday, that's fine. Nothing changes. Just the performance of AlloyDB is amazing. 

GABE: Yeah, that's been kind of the goal the whole time. It's funny working on a product like this. There's so many things that go into it, so many decisions, so many technical choices. There's a lot. And we've got a lot of content that we went super deep on some of the choices that we made. 

We just published-- there's a super deep technical on how we did the memory caching stuff. I think we mentioned it in the interview. There's a blog post that goes into super detail about the implementation stuff because we wanted to share one of the themes of open source. We wanted to share a lot of these details about technically how we accomplished what we did because the tech is legit. 

I'm always skeptical. Like, oh, yeah, it's this new awesome database. It's going to be better than everything. It's like, is that real? 

As a practitioner myself, I always approach that kind of discussion with a grain of salt. And I got to say, the technology that has built this AlloyDB product is legitimately awesome. I'm so happy. It's a great win for Postgres. You get Postgres, plus. It's awesome. 

MARK: I think it's also a really good argument for thinking about tools in general. There are so many different tools out there. I mean, we were just talking about how many Google Cloud offers as products, right? 

But it's also this case of, if you have a "one size fits all" tool, it can be really challenging in order to optimize it for all those different uses. But when you get a tool that's really good at one thing, and AlloyDB is really good at running Postgres databases, then you really can do a lot of behind-the-scenes optimization. And especially, again, the scale that Google has and the ability to build this very, very advanced technology to run that is unparalleled, right? 

GABE: Yeah. 

MARK: And so if you have a Postgres database, AlloyDB is probably just one of the best places to run it. 

GABE: We hope so. No, we know so. 

MARK: [LAUGHS] Yeah. 

GABE: I mean to say we know so. 

MARK: There it is. 

GABE: It's about getting people on board, playing with it, and understanding it, and then iterating. Figure out what's the next thing that it needs, and making sure that everyone uses it and tells us. Like, what is it? What do you want? We'll give it to you. Just let us know. 

MARK: So that's the call to action for everybody. If you're running Postgres or you're just curious about it, try out AlloyDB. We put a whole bunch of links in the show notes for people who listened to the conversation and are interested. It's there. It's available. Try it. 

GABE: Yeah, definitely go and use it right now. There is no allow listing. There's no permission blocks on it. You can just grab it now, use it, create your clusters. And away you go. If you've got a Postgres application, just point it at the AlloyDB instance. It will work. 

MARK: Yeah, that's the coolest part, right? It's just plug in, and it works. I think it's amazing. I'm hoping to get my hands on it myself. And I'm sure lots of people are going to be really excited to try it out. 

GABE: Sweet. 

MARK: Cool, man. Well, Gabe, like we were just saying before, it's been a while since you've been on the podcast. What have you been up to? 

GABE: Yeah, so we talked about the last podcast that we did was for this company that, it was an IoT company because back then I was working on IoT. Although, that happened almost three years ago now-- databases. So actually recently, I took a management role. I stepped up. So now I'm leading developer advocacy for Cloud databases. 

It's pretty cool. Instead of just focusing on one or two products of our database portfolio, now I get to think strategically about all of them, which is cool because we've got a lot of good stuff. Our database products are all really, really well developed. 

And I, myself, am not as familiar with some of them as I should be. I haven't, in my career, had a lot of opportunity to play with Redis. I know it's awesome. And I know memory caching is a huge performance. But I haven't, as a developer, as a practitioner, I haven't needed to use it. 

So now that I manage the portfolio with Cloud Memorystore, it falls under me now. So I get to play with it and learn about it and strategically think about how we can get developers successful with it. That's what I've got going on, is just wrapping my head around all the Cloud databases. It's pretty cool. 

MARK: And if you're a listener who isn't sure about which database you should be using, I'm pretty sure Priyanka has several different graphics that can help you decide what are the different use cases for each of these databases. 

GABE: She does, indeed. And they're true. They are true statements about how to pick which one to choose. It's great, yeah, yeah. 

MARK: We know because Gabe's name is on them. 

GABE: Only one, only one-- caveat. 

[LAUGHTER] 

But yes, no. 

MARK: Hey, it still counts. You're still in the book. 

GABE: That's true, that's true. 

MARK: That's what matters. All right, well, thank you so much to all of our listeners for taking this journey with us. And hopefully you get a chance to try out AlloyDB. Like we said, all those links are going to be in the show notes. So thank you all so much for listening. And we'll see you all next week. 

[MUSIC PLAYING]