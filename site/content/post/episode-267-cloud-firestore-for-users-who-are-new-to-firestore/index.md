+++
audioDuration = "00:35:26"
audioFile = "Google.Cloud.Platform.Podcast.Episode.267.mp3"
audioSize = 50960944
categories = ["Firestore", "Database", "NoSQL"]
date = "2021-07-14"
description = "Brian Dorsey and Mark Mirchandani are talking intro to Firestore this week with fellow Googler Allison Kornher."
draft = false
episodeNumber = 267
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Cloud Firestore for Users who are new to Firestore"
image="/post/episode-267-cloud-firestore-for-users-who-are-new-to-firestore/images/hero/hero-EP-267.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ok8j1z/episode_267_cloud_firestore_for_users_who_are_new/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Brian Dorsey](https://twitter.com/briandorsey) and [Mark Mirchandani](https://twitter.com/markmirch) are talking intro to Firestore this week with fellow Googler Allison Kornher. Allison, a Cloud Technical Resident, starts the show telling us about the program and how it brought her to Firestore.

Allison takes us through the differences between SQL and NoSQL databases and describes the four categories of NoSQL databases: family, document, key value, and graph. Firestore is a scalable, flexible NoSQL document database. To illustrate the uses and benefits of Firestore, Allison walks us through a delicious pizza example. Each document in the database belongs to a collection, which is used to organize these documents. Firestore documents are assigned an identifier and can be quickly changed and called within their collections. Because these documents are stored in an implicit schema in key value pairs, developers have control over the details of database organization and data change and growth are easy to manage. The availability of subcollections further adds to the flexibility of Firestore database design.

Choosing a database type will depend on the situation, and Allison suggests this starts with a look at CAP theorem. If a document database is your database of choice, Allison gives our listeners tips for getting started with Firestore and clearing any hurdles along the way. 

##### Allison Kornher

Allison is a Cloud Technical Resident and has worked helping startups looking to join GCP and in the Premium Tier Cloud Support organization with a focus on Storage.

##### Cool things of the week

* BigQuery admin reference guide: Tables & routines [blog](https://cloud.google.com/blog/topics/developers-practitioners/bigquery-admin-reference-guide-tables-routines)
* Top 25 Google Search terms, now in BigQuery [blog](https://cloud.google.com/blog/products/data-analytics/top-25-google-search-terms-now-in-bigquery)
* Three security and scalability improvements for Cloud SQL for SQL Server [blog](https://cloud.google.com/blog/products/databases/improving-cloud-sql-for-sql-server-security-and-scalability)
* GCP Podcast Episode 247: Cloud SQL Insights with Nimesh Bhagat [podcast](https://www.gcppodcast.com/post/episode-247-cloud-sql-insights-with-nimesh-bhagat/)
* GCP Podcast Episode 163: Cloud SQL with Amy Krishnamohan [podcast](https://www.gcppodcast.com/post/episode-163-cloud-sql-with-amy-krishnamohan/)

##### Interview

* Cloud Firestore [site](https://firebase.google.com/products/firestore)
* Cloud Firestore Documentation [docs](https://firebase.google.com/docs/firestore)
* Cloud Firestore explained: for users who never used Firestore before [blog](https://cloud.google.com/blog/topics/developers-practitioners/cloud-firestore-explained-users-who-never-used-firestore)
* Gabi on Twitter [site](https://twitter.com/gabidavila)
* Datastore [site](https://cloud.google.com/datastore)
* BigTable [site](https://cloud.google.com/bigtable)
* Firebase Realtime Database [site](https://firebase.google.com/docs/database)
* Memorystore [site](https://cloud.google.com/memorystore)
* Cloud Spanner [site](https://cloud.google.com/spanner)
* GCP Podcast Episode 248: Cloud Spanner Revisited with Dilraj Kaur and Christoph Bussler [podcast](https://www.gcppodcast.com/post/episode-248-cloud-spanner-revisited-with-dilraj-kaur-and-christoph-bussler/)
* All you need to know about Firestore: A cheatsheet [blog](https://cloud.google.com/blog/topics/developers-practitioners/all-you-need-know-about-firestore-cheatsheet)

##### What's something cool you're working on?

Brian has been working on [sharing a persistent disk between Google Compute Engine VMs](https://stackoverflow.com/questions/26910960/share-a-persistent-disk-between-google-compute-engine-vms).

* Cloud Storage [site](https://cloud.google.com/storage)
* Cloud Filestore [site](https://cloud.google.com/filestore)
* Cloud SQL [site](https://cloud.google.com/sql)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 267 of the weekly Google Cloud Platform podcast. I'm Mark. And today, I'm here with my colleague, Brian. Hey, Brian. How are you doing?" >}}

BRIAN: Hello, hello. 

MARK: It's been a while since we've had a chance to do one of these. 

BRIAN: I brought something fun for you that I hope will blow your mind. 

MARK: Oh, do it. Let's see it. 

BRIAN: It's at the end. 

MARK: Oh, it's at the end? Oh, that's right. You told me about this, and I immediately forgot. I'm super excited to talk more about this because you told me this thing, and I said, hold on. Let's save it for the show, because I did not know this was possible. 

BRIAN: The teaser is sharing disk across multiple machines. Is it a thing? 

MARK: I have a picture of a hard drive just being strapped into two computers at once. And that doesn't make any sense. Well, definitely excited to hear more about that. But before we do, of course, we have a great conversation today. Brian, can you tell us what it's about? 

BRIAN: Yeah. So Allison is going to walk through this blog post she wrote about Firestore. And the intro for people who haven't used it before, it's a hosted document database that is super handy and deeply integrated with Firebase. So let's get into our cool things and then on into the deeper discussion with Allison. 

MARK: Yeah, it's definitely a great conversation, so looking forward to that. But as you said, why don't we kick it off with our cool things of the week? 

[MUSIC PLAYING] 

Today, I've got one cool thing-- actually, it's multiple cool things. So I'm cheating, but whatever-- from our good friend Leah Jarrett, who is putting together a collection of guides-- which is why it's more than one cool thing-- all about BigQuery. And so she's been working on both videos and blog posts. We'll have a link to the blog posts and the videos right in there so you can check that out, too. 

And it's a bunch of introductory concepts to BigQuery. This one in particular is about tables and routines and how does BigQuery store that information? What does it look like from a GCP project perspective? It's super helpful information, especially for users who maybe use BigQuery a little bit but haven't really gotten the in-depth details on how it stores data and how it actually grabs things. 

So I love these videos. It's really awesome to see these blog posts that reiterate it. I think it's a great series. So super, super many thanks to Leah for putting this together. And of course, I recommend everyone go check them out. 

BRIAN: That is super cool. And BigQuery is one of those things that, till you know that it exists, it would never occur to you to ask about it because it lets you talk SQL to a big data set, but almost the opposite of databases where everything's a table scan and things that are hard in regular databases are easy. Just kind of a surprising thing. So I'm excited about BigQuery. 

And it's a great segue into one of the two things that I was going to talk about. So the first one is built on top of BigQuery and exposed that way. Folks out there may have heard that we have this thing called Google Cloud data sets, which are public data sets that are-- different organizations around the world publish various stuff. And we have some scripts set up to pull those things in and expose them as BigQuery tables and data sets overall, which is neat. So you can just query those and have at it. There's all kinds of public data there. 

One of the newest ones-- and maybe the newest-- is actually we are sharing out the Google Trends data, so the top 25 searches over time and a bunch of other kind of details around them. If you've ever done one of those or seen in an article, people are like, hey, if you do this search term and that search term, you can see the graph over time and how popular. That is that sort of data but available in BigQuery, which I think is really neat. 

MARK: Yeah. The whole public data sets program is super awesome because you do get to see all these cool data sets that people are sharing. And then it's really fascinating to think about, well, once you have that data, it's interesting in and of itself. But then you can also think about, what kind of applications can you build with that? 

And I think there's been a couple of classic examples of looking at New York City traffic data, or New York City taxi data I think was the public data set. And you can use that to figure out, where are good spots to put things? I think the applications are pretty much unlimited. And so when seeing the search terms in the same way, this data is super cool. It's super interesting. But then the next step is, what can I do with it? 

BRIAN: Yeah. And at a high level-- the way I take notes in a class has turned into-- instead of taking detailed notes, I take notes that look like search terms. I feel like almost everything is turned into search terms. So in a way, visibility into what the main things people are searching for and asking about in the world is kind of a view into what's top of mind for the world. So I think it's neat to have that just right there and available in a programmatic way. 

MARK: Absolutely. 

BRIAN: Like you say, you can mix and match their stuff. So that's cool. Next one continues the theme of databases but at a different angle-- relational stuff. So we have this thing called Cloud SQL. And I think I'm right that it has three different databases that can be managed and run for you-- MySQL, Postgres, and a lot of folks may not know that we have Microsoft SQL server as one of the options there. So it runs on Windows and runs a regular Microsoft SQL server instance. 

And we just added a couple more features to general availability for that that I think might be the deciding factor for whether or not people could use it in some situations. So I wanted to share these out there. And one of them is Adds Active Directory integration. So you can delegate all of the authentication and authorization for the databases to the normal way that's set up in most Windows organizations and then cross region replicas. So you can set up replication across failure domains in cloud so that it's way more likely your database is up all the time. That's super useful. 

MARK: Yeah, I think those are features that a lot of people are going to really appreciate. And obviously, any feature that makes it easier to use that makes it more powerful is good. And so I'll also make sure that we put in the show notes a couple of conversations we've had about Cloud SQL, including one of the cool features that came out for it called SQL Insights that we had a great conversation about. 

There's a lot of cool stuff going on in Cloud SQL. It's more than just a hosted database. So definitely recommend checking that out. It's really fascinating stuff. Well, with all of our cool things out of the way, why don't we go ahead and grab Allison and dive into our conversation around Firestore? 

[MUSIC PLAYING] 

BRIAN: And here we are with Allison Corner. And we're going to talk about Firestore. And she wrote a really detailed blog post explaining it for users who've never used it before. So I want to run through that. But first off, Allison, who are you? What do you do? Whatever you'd like to share. 

ALLISON: So hi, everyone. I'm Allison Corner. And I am a Cloud Technical Resident here at Google. I've been working here for almost a year now. And I've been currently working as a technical account manager and Cloud consultant. 

MARK: Yeah, I wanted to ask a little bit more about the Technical Residency and what does it actually look like? 

ALLISON: Yeah. So the Technical Residency is a program for a college new grads. And we have one year of training. So we start out with three months intensive of just learning everything Cloud. And then for me, I went through three rotations of customer engineer, technical support engineer. And then, in professional services, I'm doing technical account manager and cloud consulting. And at the end of it we get to pick one of those to be our job from here on out. 

BRIAN: That's amazing. So you see this really broad swath of both Google and users of Google Cloud. 

ALLISON: Yeah, it really gives us a great insight into different parts of the business and how we can work together and create that collaboration across different spaces that don't normally have that much insight into what the other world does. So it's a really great experience to do that. 

BRIAN: That sounds awesome. I want to do that rotation now. 

MARK: It's such a great idea, right, because you really get to see what it looks like from inside of Google because when you're outside of Google, you probably don't see a lot of the differences. But those are very different roles that interact with different customers in different ways. And so it's a fantastic-- it sounds like a fantastic opportunity to really see how those different teams work and then, like you said, how they all collaborate because there's just a tremendous amount of collaboration between those teams, and frankly every team at Google. 

ALLISON: Yeah, absolutely. 

BRIAN: OK. So we're here talking about Firestore. Could you give us a really high level-- what is it? And how does it compare to other databases? 

ALLISON: Firestore is a NoSQL document database that gives you a lot of flexibility when storing your information, as well as allowing you to scale to massive sizes with the amount of data you're trying to store. 

MARK: And so databases are a pretty complicated field, especially now when there are so many options. And there's a lot of different ways a databases store information. And I think one of the biggest kind of differences that comes up in databases is this whole concept of SQL versus NoSQL. And we've talked a little bit about this before, but at a high level, kind of what is the SQL versus NoSQL distinction? And where in that line does Firestore sit? 

ALLISON: In case our listeners who aren't familiar with SQL databases, the easiest way to think of that is like a spreadsheet and you just store information in rows and columns. It's more complex than that, but that kind of gives you a structural idea of how that works. And so with that comes some limitations in terms of flexibility. So if I want to store information in one row of that spreadsheet about only one row, I have to create a column that spans every single row of that spreadsheet. 

So there can be some waste of storage space. Depending on a lot of different circumstances, the impact of that will be different. And then there's also the struggle once you get into actual SQL of sometimes changing your schema might require downtime of your database. And that can be very difficult to change. So if the information you're trying to store is changing and not consistent over time, SQL database can have some limitations on that side. 

Now, another thing to consider also is the size of the data that you're trying to store. So a SQL database is able to expand to really large sizes. But at a certain point, with most SQL databases, you'll start hitting some limitations and reach a level where things become very complex. 

So to give you an example of this, if you have a spreadsheet and you have used every single row in that spreadsheet and you've hit that limit, you're going to have to make a second spreadsheet and start storing information in there. Now, if you want to analyze information that's spread across two spreadsheets, it begins to become more complex. And so that's a simple version of how you can see where this complexity is going to start to grow as your data grows to a massive scale. 

MARK: SQL databases have been around for a while. I'm obligated to probably plug in Gabby's Twitter here. As one of our resident database experts, she loves talking about databases and always has a tremendous amount of information on them. But that kind of describes what the SQL side looks like. What about the NoSQL side? 

ALLISON: Yeah. So the NoSQL side is actually a broad group of categories of databases. So the main four categories that we have are column family, document, key value, and graph databases. And each of them has different features that they're good at and different features that they're not so good at. So it's really going to be use case dependent what type of database you want to look into using. 

And for people who are interested in learning more about how to pick a database, I'd suggest googling what is CAP theorem and reading up on that and beginning to understand some of the different nuances of things that you can gain and lose from each type of database. 

BRIAN: Go right into the core trade offs of some of the big stuff there. You're not messing around. So where does Firestore sit in this range of NoSQL databases you mentioned? 

ALLISON: So Firestore is what is considered a document database. And it does fit pretty nicely into that category. You will see some of the database offerings we have fit into multiple different categories of these NoSQL databases. So the other offerings that we do have on GCP are Datastore, Firestore, Bigtable, Firebase Realtime Database, and Memorystore. 

MARK: Yeah, that is a lot. But like you said, those different databases all have their own advantages. And whichever one that you've decided your team is going to use or your application is going to use, ideally you'll find a solution for that in the Cloud in one of these. And of course, we recently had an episode on Spanner-- I'll make sure we put a link into that one too, but that's also a newer interesting way that they've approached the more SQL side of databases while trying to solve for some of the other problems. So I'll make sure to put a link to that in the show notes. 

ALLISON: Yeah, Spanner's certainly interesting, caveating a lot of the limitations that you see with typical SQL databases. 

BRIAN: Got it. That makes a lot of sense. And I guess this is the big picture. It's an engineering thing, so there's always going to be trade offs among all of the options, right? 

ALLISON: Yeah, absolutely. 

BRIAN: So what is Firestore? 

ALLISON: Yeah. So Firestore is a document database, as I said before, which is a category of NoSQL databases that lets you store information. So just to go through an example of how this might work, let's say that you are going out to get pizza with some of your friends, but you don't remember every single order of your friends. So you're going to write down a list called pizzas. 

And in that list, you have your first friend named Maria. And she wants pizza with no cheese, tomato sauce, and it cooked extra. So you add that as a bulleted list under her name. And then you add Fred's name because he also wants pizza. And you have a bulleted list under his name of mozzarella and tomato. 

And so this right here is your concept of a collection. So pizza is the collection. Maria and Fred are your documents within that collection. 

MARK: So besides ordering a tremendous amount of pizza-- one for each person-- it sounds like it's relatively unstructured because there were some properties that Maria had that weren't present in the document that belonged to Fred, right? 

ALLISON: It's a great thing to call out in that each document can be very unique in the data that it stores, which is a huge benefit if you're changing your fast growing business and you have different data needs coming in at all different times and you need to adapt those really quickly. That's something that Firestore is really good at doing. 

BRIAN: So you mentioned a couple of words here that I'm not sure I understand in the Firestore context. You mentioned documents, collections. I guess, what are the pieces that make a Firestore database? 

ALLISON: Yeah. So we have the collection, which-- all of your documents will live inside of a collection. And this is essentially used to organize your information. So if I'm a pizza shop, I might have collections for pizzas, for pastas, and for salads. 

And a document is-- when I defined Maria, the document itself is Maria. And it contains the information about the pizza that Maria wants. And so that is the unit of storage that Firestore uses. 

MARK: So that makes sense for these kind of preferences for the folks like Maria and Fred. What would you need to do if you wanted to take that to the next step? So let's say we were going to add to this whole database schema an ordering system and you would actually store an order that somebody made. Is there a way to do document references? What would be the best way to architect that? 

ALLISON: So all documents have a unique identifier that we can use to reference them with. And that's a way to point to where your information is. So for example, we can kind of go through how I would turn a sentence of what I would say to someone to get me that pizza information into what that code would look like. And then we can go further into how we might build this out to include orders. 

So if I wanted you to go get me the information about Maria's pizza, what I would probably say to you is, on the list of pizzas that you have written down, can you get the information about Maria's pizza? And if I switch that up to include Firestore terms specifically, I would say, from Maria's pizza collection, can you please get the document for Maria from the Firestore database and save it as Maria's pizza? And so that kind of is the same task but using words that are specific to Firestore. 

And then finally, moving that into code, which can be hard to communicate over spoken, but we'll try our best, we would say var for variable Maria's pizza, which is where I want to save this information, is equal to db, which is short for database, dot collection, and then within parentheses in quotes pizza dot doc, which is short for document, and end parentheses, in quotes Maria. So essentially, you can see how this is coming from our natural spoken language of asking someone to get that pizza all the way down into this reference that I can use for a computer and code. And so I think this is a good time where we should probably go into talking about how the information is accessed in terms of key value pairs. 

So when information is stored in Firestore, it's stored in a key value pair. And this is very important because information needs to be stored in what is called an implicit schema. So an implicit schema is how you define where and how you're going to store information. And the way you can think of this is in your home you have a dresser. And in your dresser you put pants in one drawer, shorts in one drawer, socks in the other drawer. 

Now, you can decide that you want to dump all of your laundry into one drawer and you're not going to be able to find anything and it's a mess. And that's kind of an implicit schema. It's your job to ensure that you put your pants in your pants drawer, your socks in your sock drawers, and your shorts in your shorts drawer. 

In an enforced schema, which is what you get with a SQL database, you have all these different drawers, but I physically cannot put socks in the drawer that is not for socks. So I'm guaranteed every time I open that drawer I will get my socks out of it. And that's where your flexibility comes in, is I'm not forcing you to put something in that space. But you need to make sure that the information is where it should be. 

MARK: That makes a bold assumption that I don't store all of my clothes in a giant heap, which-- 

BRIAN: That's a different kind of database, though. 

MARK: Yeah, that's a different data structure. My database at that point is just a giant text file, essentially. OK. So you have these different schema. And that very much relates itself also to this SQL versus NoSQL scale discussion that we were having earlier because it talks about how much flexibility you can and can't have and what the trade offs of that are, because sometimes you do want that flexibility. And sometimes you absolutely don't want to have that freedom. 

So it sounds like Firestore is a little bit more on the implicit side instead of the explicit side. 

ALLISON: Yes. Firestore is very much implicit. It is your job to make sure that where your information is and that you have the same names that you're going to call it every time so that you can write code to find that information instead of reaching your hand into your sock drawer and pulling out some shorts if you've put everything in the same drawer. 

BRIAN: Am I right in thinking that one of the big benefits you get from that is if you have a new kind of clothing, you just get a new drawer? 

ALLISON: Yeah, absolutely. You can just get a new drawer. You can decide that maybe more things go into the existing drawer. Maybe I want to combine things together. And it gives you that ability to change and grow very rapidly without a lot of issues in that field. 

BRIAN: Our overall context here, as people who are new to Firestore-- are there any other key concepts you think people should have? 

ALLISON: Yeah, so another key concept I think would be good to go over is the concept of the subcollection. And a subcollection is a collection that is associated with the document. So to think of this back to our pizza example, we have Maria's pizza. And she wanted no cheese, tomato sauce, and she wanted it cooked extra. 

And now, maybe we'll have a subcollection for toppings. Then, within that, we'll have a document of spices-- and they want oregano and basil-- and another document for veggies, and they want onion and artichoke. And so something that's important to realize here is that each subcollection within a document-- you can have a document has a subcollection. You can have a document that doesn't have a subcollection. You have complete flexibility there to change things as well. 

MARK: And you kind of walked us through the code earlier for grabbing a collection and then grabbing the document of that. How does the code change if you're doing a subcollection? 

ALLISON: Pretty much the same. You just point straight down to the subcollection and get that information. It's not very much different from before. 

MARK: So we talked a lot about what the structure of Firestore looks like. And I think that will help people, especially who haven't used it before. What do you think the best way to get started with Firestore is for people who are either interested in practicing it, trying it out, or maybe even investigating it for a potential business case? 

ALLISON: Yeah, absolutely. So I'd say the easiest way to really get started would be read through my blog post. It has a different example on it. So if this one didn't make sense to you, maybe the other one will make more sense. 

Then, there are some documents linked at the end of that to help you get started on Firestore. And my recommendation would just be, try it out. See what you can create. And really play around with it to understand how it works. 

It can be hard to conceptualize these things until you've seen it working. So just get your hands dirty and see what you're able to make. 

MARK: And there's a tremendous amount of great tutorials on the Firebase website. The Firebase community is super, super active. And they love their developers. So there's always super cool stuff going on there. 

BRIAN: OK. I love this "get your hands dirty," "iterate through things," "try them out." It's the best way to learn. If people get stuck, what do you recommend? 

ALLISON: Yeah. So the way I like to help people moving forward if you get stuck is, instead of telling you what to do, it's telling you how to search for it. So when I first started using this, I was studying business, not technology. So searching and how to search for things is really important. So I'll go ahead and give you some great search terms you can use to get started. 

And so the first thing is if you're trying to learn more about this type of database, I would suggest searching, what is a document database, and how do you use a document database? If you are trying to decide which database you should use, I would suggest just go ahead and look into CAP theorem and go down that long rabbit hole of everything in there and come to a conclusion from that. It's really great to just keep reading all of that information because there's so much of it. And then finally, if you want help designing your database, I would try researching a document database implicit schema design. 

MARK: Well, first of all, I think the how to search about these challenges is absolutely brilliant. I almost want to add that to every single piece of content we create because it's such a realistic standpoint of like, well, here's how you actually think about these types of problems. And the reality is I think a lot of us spend a lot of time searching for tips and for guidance. So definitely, I completely love that idea. 

But I also think that there's a tremendous amount of helpfulness, like you mentioned earlier, Allison, in just getting your hands on it and trying it. Again, those references are super, super helpful for trying it out, seeing what works. And there are going to be some cases where Firestore is going to be a great solution. And there's going to be other cases where there's going to be other solutions for it. And the best way to make that determination is to hopefully get a chance to try all these technologies out. 

ALLISON: Yeah, I absolutely agree with you. Getting your hands dirty is the only way to get started. How I started using this database and how I got my footing in here because I did come from a business background and not a technical background-- so for me, I graduated from Texas A&M University with my BBA and MS from in management information systems. So I did start out with some benefits of management information systems background. 

But when I first started using this database, I was in the beginning of my undergrad. I didn't know what JSON was at the time. And I was really struggling to even understand what on Earth this documentation was saying. And I had actually needed to use this database because I had created an app that I made in our dining hall in an hour that I posted about on Facebook. And I woke up the next morning and the whole thing was crashed because there was too much traffic. And everything spiraled out of control because I didn't have that scalability that I needed. 

And so I chose to use this database. And it was just hit with those, what is this? How do I write this code? What is this language? I've never heard of this before. And so my goal with this was to help with some of those barriers of, I assume that you know JSON is. I assume that you know what something else is. 

That is a pretty good assumption to make for a lot of people in the tech industry. But for entrepreneurs or people coming in from a different perspective, those can be barriers to entry. And that's kind of what I'm trying to address. 

BRIAN: That is awesome. So if you're coming from that background as well, this blog post is going to be a good place to go. Try it out, everybody. Thank you so much for spending time with us and sharing that perspective. I hope that enables a lot of you-- because business folks know their domain better than anybody else. When you're in the middle of things that your department or your part of the company is working on, you know it better than anybody else. And so the more tools you have to work with that, the better, I think. 

ALLISON: Absolutely. 

MARK: And I love the idea of technology solving problems instead of creating problems. Some technology definitely creates some issues. But I think largely, what a great example of like, hey, I have this case of the dining hall issue. And I need to solve it. But I don't want to have a PhD in computer engineering or computer science to solve this problem. I just want to be able to store this information and use it. 

So it's always really, really cool to hear stories like that. And I'm also very glad that it sounds like Firestore was an awesome solution for it. 

ALLISON: Yeah. And you never know where it'll end up. I started out trying to figure out how to make a Firestore database. And here I am working at Google. Life can take many turns when you just get your hands dirty and try and learn something new. 

BRIAN: Could not think of a better place to wrap. Thank you so much. 

ALLISON: Thanks for having me on the podcast today. 

MARK: Thank you so much to Allison for coming on and talking about Firestore. I was really, actually, super surprised to hear a little bit more about the Technical Residency program. I thought that was just the coolest thing because I love the ability for people to go in and get hands on, try out different roles in quick succession, and then see how do these teams operate? How do they collaborate? But more to the point of our conversation, there was some great conversation around Firestore. 

And I think it's also worth calling out that our good friend Priyanka has also put out a little quick guide and cheat sheet on Firestore. We'll make sure to put a link to that in the show notes as well. And I think it just reiterates a lot of the stuff that Allison was saying about how Firestore works and what you might do with it. 

BRIAN: And it's just such a unique database. It just is a different mix of the trade offs than you see almost anywhere else. So I really think it's worth evaluating that as part of your process. 

MARK: Yeah. One of the points we didn't really get to spend too much time on was this idea of, there's a whole bunch of different databases out there. Not all of them are going to solve all of the other database's problems. They each have a good scope. And so when you're a developer or you're a business person-- or really anybody, any human-- and you're trying to decide what database to use, there's a lot of different thought that goes into, well, what's going to work for my team? What's going to work for my application? What's going work for my business? 

And so while it would be nice to have, oh, this database is better than all the other databases, that's not going to happen. That's not a thing that exists. And so I know that the Firestore database this is also really good for folks who are in the Firebase ecosystem because there's a whole bunch of tools that Firebase also has to work within those. But you can also use Firestore by itself. 

There's a lot of decisions to be made there. And it's really going to depend on your use case. So starting from researching CAP theorem, all the way to choosing a database-- 

BRIAN: [LAUGHS] 

MARK: Yeah, that's a tough place to get started, but sure. Why not? 

BRIAN: That's awesome. OK. Well, I'm just still excited about this. And we teased it up front, so I want to get into this question I saw on Stack Overflow that I think is just surprising. 

MARK: I'm surprised even by the question being asked, which is, how do you share a persistent disk between compute engine VMs? And so my first immediate response is, you can share a persistent disk between compute engines? [LAUGHS] 

BRIAN: Yes. 

MARK: How do the wires-- 

BRIAN: You just plug it into all the computers. No. I think this is a great example of how, with virtual machines in the cloud, we're trying to expose the concepts of using a regular computer that you would have in front of you under your desk or something and doing it in the cloud. But whether that's in the cloud or on VMware, it's all virtualized. So there's another layer of these between it. So the disk you're talking about goes through a translation layer and the CPU and all that kind of stuff. 

The difference between running it on a local computer and running it in the cloud is that, in addition to that being an abstraction layer, the thing that's behind the abstraction layer might not actually be just one of the actual things. So I like to think about it is, most of of them we're thinking about VMs, we're thinking of slicing up one computer and giving you a piece of that so you can run multiple VMs on the same machine. And that is happening in the cloud. 

But some of the stuff, and disks in particular, are actually a slice of the data center. So the way we give you that abstraction of a disk in Google Cloud is low down-- in the operating system level, disks are what we call block devices. So there's this chunk of data that you're always reading and writing in these chunks. And the backing behind that in Google Cloud is almost never on the same disk. 

So instead of one physical disk behind it, you might have hundreds or thousands of disks. And when you read five blocks in a row, those could come from five different computers. So since there's already this separation of concerns there, it lets us do a bunch of the stuff that you might normally need a SAN, a Storage Area Network, to do. 

In fact, normally, when you turn the machine off on Google Cloud and you turn it back on, it probably is on a different host entirely and we're connecting the same disk to it. So every time you use a persistent disk, our default disks are all Network Attached Storage over this block interface. And so every time you turn one on, it's connecting between two different things, even normally. 

So when you want to share data-- and you almost always do on VMs. If you've got more than one, you start wanting to share stuff. And it's computers, so you can use all the regular network stuff. And we'll talk about that a little bit. 

But since the disk itself is this abstraction and you normally do this with data disks, you can actually mount the same disk on multiple VMs, and they can all read from it. Now, that feature has been in compute engine since the beginning, this idea of mounting a read-only disk across a whole bunch of machines. It's more straightforward. There's no contention. You can just read from all of them. 

MARK: So to summarize so far, we know that the virtualization of everything essentially really gives you the power to abstract away the complexity of what these actual things look like. Could be the 1,000 disks. It could be some huge array of disks that you don't really care about. All you want to know is here's the disk that I want. Here's where my data is. And that's where my data is going to be. 

So if I have multiple computers or multiple, in this case, instances pointing to this kind of box of my-- and I'm doing wild hand gestures, which nobody can see. And that's fine-- can point to my data, then great. Everybody can read from it. And that's great. Everyone's happy. 

But wait, there's more. 

BRIAN: Yeah. So we recently, mid-last year, added the ability to have those dismounted with multiple writers. You actually have multiple computers that are reading and writing from the same block device, which opens up for some corner cases. I want to be fair. It only works with certain file systems, which implies certain OSes because many file systems are assuming it's just on one computer, which is kind of the default. 

So you've got to be a little careful. And it's worth testing out your scenario specifically, but you can actually mount these read write on multiple machines. And that also opens up, even if you're not doing that, the ability to have a couple of machines writing and a huge swath of machines reading from the same thing, which can simplify a lot of stuff. 

MARK: I imagine that's probably the most common use case, where you'll have a couple of primary machines that are responsible for writing and then everything else, as a secondary machine, is going to be reading. 

BRIAN: So that and the inverse. So what you described there-- so if you have a bunch of web servers, for example, that are all pulling from the same set of files, you might update that. And then everybody's up to date. So that's that exact scenario. 

The other scenario that I think is pretty common is a bunch of worker nodes. Maybe you're doing some big transcoding or rendering job or something and they're all writing to the same bucket and then you can use it from there. 

MARK: Where is the logic that is responsible for figuring out the multiple writer scenario? 

BRIAN: It's a little bit of shared. So at the lowest level, our PDs are a list of blocks. And you can attach that list to multiple machines. And you can read them all out. And now you can write them. 

But there is a little bit of cooperative behavior at the file system level once you have multiple writers. So anyway, be careful. But it does work. 

I think it's worth also mentioning there's some alternatives to this. I think the high level thing is it's really useful to be able to cooperate and have a shared view of the world. And to not have that be attached to any one computer, that's what gives you options and scalability in the cloud. So there's other things you can do. 

I think perhaps the most common recommendation-- and I think it's used in almost every architecture you see out there-- is using an object store, so Google Cloud Storage, for example. If you have the option of updating your apps or writing your apps directly, it's very straightforward to reason about and very, very scalable. And it's very often the right choice. It's commonly used for a reason. It's really, really powerful. 

But a lot of apps are expecting a file system, or you're doing an integration thing. And that's where you either need something like this shared persistent disks or using file source. So NFS is a common protocol on Unix, Linux machines. And we have a hosted thing that, just to make our episode more complex, is called Cloud Filestore. 

MARK: Filestore, not to be confused with Firestore. 

BRIAN: Exactly. Not at all confusing. 

MARK: And I certainly haven't made that mistake earlier this episode. 

BRIAN: Good. Good to know. Yes, so hosted stuff there. And then, of course, you can also just put it in a database. So we've been talking about Firestore and Cloud SQL in this episode. And then it's computers, so you could run your own thing. You could almost anything you like. 

I think it's worth knowing that you can actually share these disks like a super SAN sort of thing. 

MARK: It seems very similar to our earlier point about databases in the terms of, you're not always going to have a quote unquote "best option" for what you need to do. It's going to depend on your application, again, your business logic, whatever. And I think you bring up a great point. When you're using maybe existing applications or applications that you don't have the control over that you can change or it's simply not a feasible or economical choice to change it, then they expect a file system. And so you want to give them the file system that's going to work the best but still be scalable. 

And when you get into those complex scenarios, it's great to have all these different options. But if you're building from a new application and you don't really have some of the constraints, especially if you're working with like more legacy stuff, then object store is definitely growing in popularity. I think a lot of newer apps are leaning towards that side. And it's great. It's fantastic. But it's not the end all be all. 

BRIAN: Exactly. There we have it. Yes, you can in fact connect disk without wires to multiple machines. 

MARK: It's all virtual, anyway. So I was talking about wires before, but I guess they're all virtual wires. And then the whole analogy just kind of falls apart. So how do you actually set up a persistent disk across these multiple machines? 

BRIAN: It's, in fact, the same set of commands. So you can either do it as your starting machine. Or there's some APIs that you can either call directly or use the GCloud or through the console to attach a new disk or an existing disk to an existing VM. 

MARK: Couldn't be easier. Well, I'm sure it could be easier if you just thought it and it happened. But we're not there yet. 

BRIAN: I'm not there yet. I don't want to turn my thoughts directly into compute instances. 

MARK: Let's not go down that rabbit hole right now. In fact, I think we're just about out of time for this episode. So Brian, thank you so much for joining us today. And to all of our audience, thank you so much for listening. We'll see you all next week. 

BRIAN: Databases are awesome. Virtual machines are awesome. All of you are awesome. Talk to you soon. 

[MUSIC PLAYING]