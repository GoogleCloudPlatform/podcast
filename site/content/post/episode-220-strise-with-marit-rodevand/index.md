+++
audioDuration = "00:40:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.220.mp3"
audioSize = 58944322
categories = ["Strise", "AI", "Machine Learning", "Knowledge Graph"]
date = "2020-05-13"
description = "Priyanka Vergadia hops back into the host seat this week, joining Mark Mirchandani to talk to Marit Rødevand of Strise."
draft = false
episodeNumber = 220
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Strise with Marit Rødevand"
image="/post/episode-220-strise-with-marit-rodevand/images/hero/hero-EP-220.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/gj4ts7/episode_220_strise_with_marit_rødevand/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Priyanka Vergadia](https://twitter.com/pvergadia) hops back into the host seat this week, joining [Mark Mirchandani](https://twitter.com/markmirch) to talk to [Marit Rødevand](https://twitter.com/MaritRodevand) of [Strise](https://twitter.com/striseai). Strise is an AI-driven enterprise company using knowledge graphs to gather and analyze massive amounts of information, depositing it into a web-based interface to help large clients such as banks solve data-driven problems. Strise's web-based data platform is customizable, flexible, and capable of keeping up with the fast-paced world of technology so enterprise companies aren't constantly putting time and resources into reworking old or building new software. To do this, Strise uses knowledge graphs rather than typical databases to create what Marit calls a future-proof data model. 

Marit explains knowledge graphs in detail, emphasizing that they can reduce training of machine models, allow new data to be input easily, and make analyzing unstructured data much easier. Knowledge graphs take data that would normally only make sense to humans and in effect translate it for computers. Using banking as an example, she details how information about customers can be collected and analyzed thoroughly to help the bank come to conclusions about credit-worthiness or possible criminal activity. 

On Strise's platform, Marit tells us that the information is now available to the end user who provides feedback to the system, marking things as relevant or irrelevant, rather than leaving those decisions to a data scientist outside of the client's field. This means that massive amounts of information could be stored in the knowledge graph, across many industries, and each user only gets the data he or she needs.

Google Cloud tools such as Kubernetes Engine, Dataproc, and Pub/Sub have played an integral roll in the creation of the Strise data pipeline.  Marit explains how Strise gets their data, how it's input into the knowledge graph, and how these Google tools help to keep Strise running.

<!--more-->

##### Marit Rødevand

[Marit Rødevand](https://twitter.com/MaritRodevand) is the CEO & co-founder of Strise, an AI startup from Norway who is signaling a new era of enterprise software. 

Strise makes the world’s information useful across the enterprise. Their novel approach by utilizing a knowledge graph to power their data platform, allows Strise to break data silos, end customization projects, and bring new insights from unstructured data. Strise is currently helping leading Nordic banks and financial institutions to solve their hardest data-driven problems within KYC/AML, risk, and sales.

Strise recently announced their Seed round from Maki.vc, the leading Nordic early stage investor, who invests in deep tech & brand-led startups.

Marit has a background from Cybernetics & Robotics at the Norwegian University of Science and Technology (NTNU). In university, she co-founded Rendra, a construction SaaS, who was later acquired. Marit started as Entrepreneur in Residence at NTNU where she spun Strise out of a research project that focused on new data models as a foundation for better AI. 

##### Cool things of the week

* BakeML [site](https://whatareyoubaking.com)
     * David East's Firebase Podcast [podcast](http://firebasepodcast.googledevelopers.libsynpro.com)
* Automating BigQuery exports to an email [blog](https://cloud.google.com/blog/products/data-analytics/automating-bigquery-exports-to-an-email)
* Cloud OnBoard [site](https://cloudonair.withgoogle.com/events/noram-may-cloudonboard)

##### Interview

* Strise [site](https://strise.ai)
* A world in text — Strise [blog](https://medium.com/strise/a-world-in-text-strise-12209ec20445)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Helm [sote](https://helm.sh)
* Dataproc [site](https://cloud.google.com/dataproc)
* Operations [site](https://cloud.google.com/products/operations)
* Cloud Run [site](https://cloud.google.com/run)
* Cloud Pub/Sub [site] (https://cloud.google.com/pubsub)
* Cloud DNS [site](https://cloud.google.com/dns)
* Cloud Storage [site](https://cloud.google.com/storage)
* GCP Podcast Episode 198: SeMI Technologies with Laura Ham [podcast](https://www.gcppodcast.com/post/episode-198-semi-technologies-with-laura-ham/)
* Building on Google Cloud with SeMI Technologies - Stack Chat [video](https://www.youtube.com/watch?v=Jrl_MmHVzUY)
* Knowledge graphs with Weaviate - Stack Chat [video](https://www.youtube.com/watch?v=Jrl_MmHVzUY)
* Natural Language Data Processing with Mito.ai - Stack Chat [video](https://www.youtube.com/watch?v=_eCJBIZikVI)

##### Question of the week

Zach answers the question "What's a cool thing in Cloud that many people may not have thought about?" [GSuite](https://gsuite.google.com) and [Apps Script](https://developers.google.com/apps-script)
     
##### What's something cool you're working on?

Priyanka wrote this post on [13 Most Common Google Cloud Reference Architectures](https://medium.com/google-cloud/13-most-common-google-cloud-reference-architectures-23630b46326d) and her parents were [on the news](https://twitter.com/pvergadia/status/1259322212512722947) for the vegetable garden they've been working on. She's also been working with [material design components](https://material.io/components) and [firebase hosting](https://firebase.google.com/docs/hosting/).
And [The Data Show](https://www.youtube.com/watch?v=hgxAnw1Re8k) with Yufeng and Felipe is going strong!

{{< transcript "[MUSIC PLAYING] MARK: Hello and welcome to episode 220 of the weekly Google Cloud Platform podcast. I'm Mark. And I'm here with my colleague Priyanka. Hey, Priyanka. How you doing? " >}}

PRIYANKA: Hi, Mark. How are you? 

MARK: I'm doing great as always. Super excited to get a chance to chat with you and, of course, super excited to be on another episode of the podcast. 

PRIYANKA: Yeah, me, too. Me too. It's not been too long so I'm actually excited to be back here. 

MARK: As always. We've got some great, great content on that theme. Today's episode is going to be very machine learning oriented, right? We've got a great guest coming to tell us a little bit more about their work with machine learning. Can you give us a little bit of information about who they are? 

PRIYANKA: Absolutely. So we are going to be talking to Marit from Strise. And she's going to tell us all about consolidating data, and the value of breaking these silos of data, and then using it in a form where they're creating knowledge graphs on their platform that you can just easily consume off of the data. So it takes away that effort of creating big data analytics-type platforms just for yourself. 

And then when you start to ask questions to this platform, you realize that the question has changed, or the data has changed, or something has changed. And then you have to maybe go over that again. So I'm really excited to talk to Marit because we're going to learn more about knowledge graphs and then learn how to consolidate some of these data sets, which is a big problem right now. 

MARK: So super, super excited for that interview as well as a cool question of the week where we're going to have our friend Zach Akil back again. He was on the podcast a few weeks ago. He's done an episode way back when talking more about his work. But we're going to go ahead and ask him what's kind of a cool thing that many people in cloud may not have thought about. 

We'll get into that after the interview. But before we do any of that, why don't we go ahead and jump into our cool things of the week? 

[MUSIC PLAYING] 

PRIYANKA: I would like to start because I'm really excited about this one. 

MARK: Go for it. 

PRIYANKA: This week, if you've not been following Twitter, I saw Sarah Robinson, who is our amazing machine learning developer advocate. She is super into baking. And also she's super into machine learning. So she combined the two things together. And she came up with this cool machine learning model which tells you about whether you're baking from the recipe and the composition of the recipe as to what you're making, whether it's bread, cookies, or cake. So you put all of these things in there. 

If you want to check out what she's built in this model, you can check it out at whatareyoubaking.com. And you can also read her blog on Twitter. So I thought that was really cool because the times we are in, I have never baked before but I'm thinking of starting to do that. But yeah. If anybody else is excited about baking and machine learning, you should definitely check that out. It's amazing. 

MARK: Yeah. I think it's a really neat project. And I also want to give a shout out to David East, who was helping Sarah with some of the Firebase stuff. But David East also launched his own Firebase podcast. So he's been working on that for quite a while. Definitely recommend it. 

And I think Firebase is a great platform too. Kind of build these really quick and cool tools, which I think is what Sarah started with. She said, oh, I'm doing a ton of baking. Why don't I try to go ahead and build my ML knowledge into this. And I think she came up with something really cool. 

PRIYANKA: Yeah. 

MARK: So that's a cool demo. And another cool blog post I actually just read just earlier is about how to make sure that you can get some exports from BigQuery set to your email. It's really short. It's really easy. It just uses Scheduler to run some functions code more or less. But it's a great little walkthrough of how to set this thing up. 

But it's this cool demo for something that's very regular. Right. Like I need this data exported to my email. I need it every day, every week, something like that, all the times we're running reports on BigQuery data. So it's a really cool, neat, and very quick tutorial to set up yourself so that you can have BigQuery email you stuff. 

PRIYANKA: So if I have like a report that I have created in BigQuery. I can just send it as an email to the group of people if I wanted to? 

MARK: Well, basically, right. So you have to do a little bit of glue with cloud functions. And then you have Scheduler to set up when you want it. You have functions to run the BigQuery job. BigQuery exports it to cloud storage. Storage gives you a signed URL. And then you use a final function to have the signed URL emailed to you. 

The blog post gives you all the detail, but it's very common. Like you said, you'll need to have BigQuery stuff. You want to export it to people on a regular basis. This is a quick and easy way to do just that. 

PRIYANKA: That's amazing. I will check it out. 

MARK: Yeah. I thought it was a fun little demo. And I also want to mention that, coming up next week, will be two different Cloud On Air events. Now Cloud On Air is a platform that Google Cloud uses to create these interactive learning events. 

There's going to be two coming up on May 19 and May 20 where you'll be able to learn not only some of the basics of Google Cloud but also a little bit of a deeper dive on Google Kubernetes engine. It's a free event. You can sign up for it. Obviously, it's all virtual. It's very easy to set up for. I think they're both half day events. 

And they're super, super cool examples of ways that you can get some instructor-based learning, because you get to have someone kind of walk you through it, and then oftentimes they'll mix in live labs where the instructor will go through the lab with you and make sure you don't get stuck on any sticky points. And then there is also the Cloud Hero online challenge, which I think you've done some work with in the past, right, Priyanka? 

PRIYANKA: I have. It's actually a fun little game. And you do a bunch of labs. And you're competing with other people on the labs. And the faster you do them, the more points you get in your leaderboard. It's a game. It's fun. So I would encourage you to participate in it. End of the day you learn something out of it, because you're doing the labs and that's the game. So yeah. 

MARK: Yeah. So if you're free on the 19th or the 20th, make sure to check that out. Could be a really cool learning resource, especially if you're just getting started. And then they host events like this all the time so make sure to stay tuned in case they have events coming down the road. So with all of our cool things out of the way, why don't we go ahead and jump right into our conversation with Marit? 

PRIYANKA: Yeah. Let's do it. 

MARK: Thank you for joining us so much, Marit. First of all, can you tell us who you are and what you do? 

MARIT: Yeah. So my name is Marit Rodevand. I am the co-founder and CEO of an AI startup from Norway called Strise. 

MARK: So I guess the first question is what does Strise do? So at Strise, we believe in the AI enabled enterprise. There is a massive shift in enterprises going data driven. And we have created a data platform based on a knowledge graph that is able to gather and analyze a lot of information from the outside world and bring it into the enterprise in the form of a web-based interface that helps mainly large financial institutions and banks with some of their hardest data driven problems which are related to anti-money laundering. It's about credit risk, and sales, and prospecting. 

PRIYANKA: So for those of us who may not be very familiar with knowledge graphs and what they mean, maybe we start with a brief explanation of what a knowledge graph is. 

MARIT: Yeah. So I think I'm just going to take it back even one more step. And you know, in large organizations, there's always this notion and this problem of doing customization projects. So you're in big enterprise. You buy some kind of software. 

And with that software, you buy a lot of IT consultants and some customization project that goes on for four months and then you decide to change something and you have to do it again. And then the world is changing so fast so you always have to change something, which you're stuck in this loop. 

And we believe that in the future of enterprise software, you're not going to have this situation where you buy empty software and you fill it with data yourself. But as an enterprise, you just log onto a data platform where all the data you need is. And it's actually surfaced all the way to the end user, the person who's going to use this in their work process. 

And in order to do so, like in order to support any data driven process in the future, you need a future proof data model to base all of this on. And that is this graph or a knowledge graph. It's actually Google who coined that term, but it's a new way of organizing data where in the old paradigm you would have more of typical data base structures. 

But in this new paradigm, which I think, and at Strise we think is the future, you have data modeled in such a way or in the same way that we humans think about it. It's nodes with relations. So whenever you want to model some new data, you just put it in. You don't have to change the old stuff. It's just about putting new stuff in. 

And we can go into more about this, but having data modeled in this way drastically reduces a lot of the training data you need for certain machine learning models. It enables us to build transferable models. And it's enabled us to particularly be really good at analyzing unstructured data, so textual data and also combining it, or data from all kinds of different data sources. 

PRIYANKA: I'm curious because I have never worked with knowledge graphs before, but I'm just curious as to once you have things in the knowledge graph, say I add more data later. So I guess what you're alluding to is it incrementally adds the data to create other nodes or additional relationships with the new data that you have added so it's less work as more and more data keeps coming in. 

MARIT: You could think about it like that. And I think you can also try to conceptually put the data into two buckets. It's on one hand what constitutes the knowledge graph or the graph structure you have. And that's just a way for a computer to understand how the world is connected. And you know in the same way that I understand that Google is a company, you are an employee of Google, you're also a female, you work with podcasts-- just this notion of understanding how things work. 

And a good starting point for this is actually Wikipedia, which is actually a graph structure that people can use. And it gives you a very good general overview of how a lot of the stuff in the world is connected. But it obviously lacks a lot of stuff as well, such as information about the business world, all of the companies in the world, what products are they making, who are their competitors, and so forth. 

So you would have to enrich the structure. But it gives you a really solid foundation of what's the world like in a way that a computer can understand it. And once you have this, you can start analyzing batch data or streaming data sort of through this graph. 

For instance, you can analyze financial data. You can analyze online web content. You can analyze the Panama Papers, or you can analyze all of the news or any official announcements, just anything that you get your hands on. Customer service APIs. And suddenly this sort of structure of the world becomes a dynamic content you could say. You know what's going on with every single company, and their owners, and et cetera. You can infer competitors. 

And we are using all of this data and putting it into like a super simple, web-based interface that uses all of this data into work processes that requires it. And what's also really good is that once you have data in this way, it's sort of a unified knowledge layer across an organization. You break data silos. 

PRIYANKA: Now I'm starting to think more and more in terms of-- say, customer support. So there are multiple channels in which a customer can contact any company's support, for example. And whether they're coming from phone or chat or even if they are writing something on social media about your brand or company, we can take all of those data points and create a knowledge graph and create relations off of it. And then maybe take internal decisions on how to maybe improve customer support services within the team. 

MARIT: You could do that. We don't do that as of now. In these anti-money laundering and credit risk processes, it's all about uncovering risk signals throughout, for instance, complex ownership structures. Bringing all of that data in, unifying it, making sense of it, presenting it in a super simple way. So that you can-- you know, work processes that you would spend a lot of time. People gathering information themselves, putting it together. 

Now they use Strise. All of that information is gathered for you. So you as a human can then make a decision. OK, is this a high-risk customer? Should we give them credit? Or are they actually involved in some shady business and I should investigate them further? So bringing all of this together. 

And this is actually really complex. And Google is obviously good at it as well. But it's about analyzing a lot of unstructured data. Taking, for instance, a piece of textural information. We humans, we can read a text and we just understand it. It's at a human abstraction level. But then for a computer to do the same, that's really complicated, because you would have to take this full text. 

And you'd need to break it down into the smallest pieces possible. Like, this is a word. This is a sentence. Then you need to find the entities. OK, there is a company whose name is mentioned here. Is it Apple or apple the fruit? OK, what do actually all of these mean? And then you build on top of that in the hierarchy so that you can reconstruct all of the meaning of the text in a way that a computer can understand it. 

And that's what you are able to do with knowledge graphs. You can rebuild a piece of unstructured data that only makes sense to humans and rebuild all of that meaning into a structure that a computer can reason on a human abstraction level. And that's super powerful, because suddenly you are left with data modeled on a human abstraction level on which you can run machine learning, which means that you have so much fewer features. 

And you need so much less training data, because the computer reasons in the same abstraction level as humans. For instance, a good example of that is that, OK, a user of Strise logs into Strise and then they have a corporate portfolio that they are responsible for looking out for credit risk signals. 

And then all over the online and other types of data sources, you could find potential credit risk signals. But then the user says, no, this is not relevant for me. This was not relevant for my role as a credit risk officer and a credit risk perspective. And instead of having a situation where you're only trained for that specific use around that specific content, you do, like, no, this type of user doesn't like this type of content for this type of work process. 

And that training can then be used all across all users, regardless of which country they're in, regardless of their portfolio, without really exposing any sensitive customer information. And that's super powerful. So going from a paradigm where you would need 10,000 annotations to solve one problem for one customer, you need a few hundred solve the same problem for all of our customers across all of their customer portfolios. 

And today, actually, 70% of all of our relevance training data comes from users. And we're a startup. It's actually quite funny, because in the beginning, we have this annotation tool. And I did some training myself. And there's just so little that required to reduce noise and get stuff up on a really high-functioning level. So that's really cool. 

MARK: So what's key in what you just mentioned is the ability to, like you said, take a lot less data and still get some really relevant insights from it. And I think you mentioned earlier talking about how enterprises are looking for solutions like this, because it counteracts this idea of taking some software, spending months and months to customize it. And by the time you're done, everything's different so you need to redo it anyway. 

There's a lot of challenges with that model. And so bringing a knowledge graph into machine learning seems to be a great way to try and reduce the amount of time and investment and energy it takes to start to get predictions. I'm curious to hear more about your thoughts on the enterprise customization model and why this knowledge graph solution seems to be such a good fit for them. 

MARIT: So in the traditional way-- or this customization paradigm that we are currently in-- it's based on old data models, where you have to decide beforehand what goes into your table, what button do you want, what data do you want that button to surface. And you program specifically for that. But the world is changing so fast. 

Just take, for instance, this COVID-19. If an enterprise then wanted a button-- which of my customers are affected by COVID-19-- you would have to go back and on a fundamental data modeling level, just change that in order to bring that button in. And you wouldn't even have necessarily the data available. 

But the thing with a knowledge graph is that it is a future-proof data model. Data is modeled on a human abstraction level, so any question is available for you as long as you have the data. So in this COVID-19 case, for instance-- which is sort of valid now. We've worked with a lot of banks who are wondering about who of their customers are affected. And the data points in that lies in some financial records, a lot in online news, companies' own websites, in layoff numbers, et cetera. 

We bring in all of that data. And we're really good at figuring out which companies are affected. So when a customer then says to us, yeah, we really want to know which of our companies are affected by COVID-19, you just ask that question to the data. And you just get it out. It's all about the data you have available, not so much about the structure itself. 

MARK: Yeah, we did a previous episode that talked a little bit more about knowledge graphs and how they work. And I think a lot of companies are picking that up and finding very, very interesting ways to take solutions from knowledge graphs and apply them to, like you said, an ever-changing world where everything is just moving so fast. 

MARIT: Yes. This concept of knowledge graph is rapidly gaining traction and the customization paradigm in a lot of ways. But what I believe-- and we believe-- will be the future, is that instead of everyone sitting in their own company and creating a graph structure which models how the world is connected and utilizing that to process data, that doesn't make sense. Because the world is only connected in one way, you could say. 

It's only sort of one truth on the companies exist and who are their owners. And there's no multiple truth to this. So that's why we believe that instead of everyone creating their own, there will be platforms-- such as Strise-- that has already created this structure and is already processing a lot of the data that everybody needs. 

Everybody needs to know what's going on with these sets of companies and these sets of market and products. And then they will just log into such platforms and get the answers they need. Think about it. There is only one Google and one Facebook and one Netflix in the consumer space. You just log in and there's the information personalized to you. 

In the same way, in the future, there's not going to be customization projects where everyone sits and tries to fit the same data into the same types of software. There will be data platforms where you log in and there's the information you need personalized to your role-- the work processes, the customers you have, the areas that you care about, and the ability to connect your own data into such structures that already has the capabilities of bringing together and analyzing data from all kinds of sources-- all kinds of languages and formats-- and make sense of it. 

And one important point is that we have started out with making the world's information useful across the enterprise. And taking this out into a web-based interface to fuel these specific work processes related to anti-money laundering, credit risk in sales, and prospecting, which relies so much on readily-available data that we can bring in. 

And it's all the way to the end user, right? Because so many data platforms today are only available for data scientists. So it would be someone bringing together data that a data scientist could use to create something for someone who works in credit risk. But again, in the customization paradigm, that leaves the user layers of management and layers of IT projects separated from the data they need. 

But if you're able to bring it all the way out to the user and they can then start giving feedback to the system-- yeah, this was relevant for me, this was not relevant. And then once you have this new way of creating machine learning models that requires so much less feature, so much less training data, then you can actually start personalizing. 

Or the users themselves can get the data they need, without having to do eight months of customizing a business intelligence system that a data scientist then again spends four months of taking out some experiment for the credit risk departments. 

PRIYANKA: That brings me to a thought process, not just about the data and making the data available faster. So I'm really curious to understand how you're using some of the Google Cloud tools in creating this data pipeline. 

MARIT: Well, in order to orchestrate such a big system-- because it really is-- our knowledge graph currently consists of 40 million entities connected by relation. So this interconnected web, almost. And in this knowledge graph, which is the data structure, we have more than 6 billion pieces of information. 

So it could be anything that we have captured and analyzed. So this would be like 6 billion equivalent rows in a database, you could say. So that's a big system. And we have a pretty solid Google Cloud pipeline. We use the Kubernetes engine with Helm. We use Dataproc, Apache Spark for batch. We use Stackdriver, Google Cloud Run, Google Pub/Sub, Cloud DNS and Cloud Storage. 

So I think we have 100 terabytes of cloud storage for anything from snapshots of our graph to just raw data. It's a pretty big production system. I think we have something like three Kubernetes clusters. It's like 80 nodes, 350 CPUs, 70 services deployments, and 100 terabytes of cloud storage. 

MARK: So it's a lot of Google Cloud usage, which is obviously fantastic. Could you talk a little bit more about how the application actually works? So like, where you're collecting the data from and then how it gets put into the graph? 

MARIT: Yeah. So first of all, this graph is basically just the truth on how the world is connected. In a lot of companies-- including ours-- a good starting point for getting to that is Wikidata, the database behind Wikipedia, which gives you this sort of starting point. This is how a lot of stuff in the world is connected. 

But it lacks so much, particularly when it comes to the business world. Like companies and ownership structures and products, et cetera. But then once we have this structure in place, then we can start analyzing all kinds of data through this graph, you could say. And that is a lot of online web content. It's a lot of different web pages. It's a lot of direct integrations with financial data, official government announcements. 

It's even stuff like Panama Papers. That's really important for the business world. And also, some of our customers' internal systems. Such as for instance, a customer service API or some internal systems for flagging fraudulent transactions and these kinds of things. And this comes in all kinds of both textual content and different languages, so unstructured data and some structured data as well. And that all just ties together beautifully in this data model. 

MARK: So it sounds like a lot of it is based on a lot of data ingestion. And then you kind of make sure the data fits rightly. And then you put it into the graph and then it kind of has all these relationships, both the ones that it's explicitly told about and then relationships that will be inferred from the existing data. Kind of the whole point of the knowledge graph. 

So now you've got all this different data that's in the graph and able to be used. I'd love to hear a concrete example, if you can share any, about a user that is using Strise to collect this information and the insights they get out of it. 

MARIT: Yeah. So let's take, for instance, someone in charge of credit risk for a large corporate portfolio in a large bank. Basically, if a bank becomes a customer of ours, we set up an integration. Or they send us just their entire customer list. Maybe they have 20,000. They send that to us. And the next day, everyone who is responsible for any of those just log in. 

And then they get the information personalized to their work process. So for instance, someone in charge of monitoring credit risk for let's say 500 companies, they just log in. And there is all of their companies with any kind of credit risk signal related to them, analyzed, structured, and new types of insights organized in a very different way. 

So they would get that. And then for instance, someone who works in anti-money laundering who is in charge of just checking. Is there anything going on with this ownership structure? Have they any business with a blacklisted country, or what's up? They get information surfaced only for that. And someone who has a key account to us-- maybe 50 customers-- and whose job is to sell them as much financial product as possible will get a different type of information. 

So it's all about giving the insights related to that specific role. But the beauty of it all is it's the same companies. It's just different information you surface. So Strise is also this unified knowledge layer that is used throughout the organization to fuel all of these different work processes. And we have started with those who require a lot of insights about the outside world, you could say. Because that's information that is available and really, really hard to make sense of and create value out of. 

PRIYANKA: I'm curious here. Do you get questions like security and how is the data secure? It seems like this is generic data and a graph made out of that. And these companies are able to use the information that Strise has procured and arranged in a format that's usable for them. Do you hear any security risks? What type of conversations come up around those lines? 

MARIT: Yes, of course, people are concerned about their data. And we do process sensitive data in terms of, here are their customers and also maybe the line of credit they're giving to them and how important they are for them, et cetera. And particularly, when that data is used in the two main drivers of profitability for banks. I mean managing your risk and selling more financial products. So people are concerned. 

But I think it's never been an issue. You have your GDPR in order. And then it's just about having a sound data processing agreement. And well, we've never had any issues with having our data in Google Cloud. It's never been a problem. We've just shown that we have everything in order. And that's it. So that's been really great as well. This would have been different just a few years ago. But now large institutions are OK with purchasing from smaller companies who are cloud-native, such as ours. 

MARK: Yeah, I think that we had talked, actually, last year. A Stack Chat video-- we'll put the link in the show notes. But that one goes over a little bit more of the technical side of how the data was ingested. The company was called Mito.ai at the time, right? 

MARIT: Yeah. 

MARK: And it sounds like that's changed to Strise now. And I'm sure some of the technology has changed too. But I'd love to hear more about why you founded Strise and where you think the real value there is for people. 

MARIT: Yeah. So actually, Strise was founded on this notion of OK, there needs to be a better way of modeling and utilizing data in a way where it's just effortless for anyone to make sense of whatever data you want. We're originally a spinoff from a technical university that was founded with a very technical vision. 

And that has progressed over time, particularly when we see that you can solve this immensely expensive customization paradigm that's due to all of these outdated data models where you just put in data in a table. And if you wanted to change the table, it just costs so much overhead and effort. 

And it's just so important that we move on to a better system, because it costs too much money and costs so much frustration for people, particularly when it comes to both sales and risk. And actually in anti-money laundering as well, we see that we can cut so much time from a person by having this information gathered and presented for them. 

So you're able to save so many man hours. And so much frustration, just having a computer do that work for a human. So the human can do the really hard work of deciding, OK, but what action should we actually take on this? Do we want them as a customer? Should we actually investigate? Is this company actually involved in some sort of money laundering situation? Instead of spending one day gathering the information and from there doing the conclusion, we can save so much time. 

MARK: So obviously a big point of this is targeted towards enterprises that are dealing with a ton of data. If somebody wants to get started with Strise or to try the technology or to basically get their hands on it, is there a quick path for them to pick it up and give it a try? 

MARIT: Yeah. They can just request a demo and send over their corporate accounts. And then they would be able to try it the same day. 

PRIYANKA: Great. Is there anything else that we have missed so far or you would like to touch on? 

MARIT: I think it's just really important that we get to this point, because data silos is a really big problem. And customization project is costing a lot of money. And everyone, basically, sits and does that on the same type of data. OK, obviously we analyze a lot of textual data. Like, unstructured data. One of the hardest things for a computer to understand. 

We humans, we read a text and we just get it. And we can reason on top of that. But transferring that ability to a computer is just insanely hard. And that process can be done with a graph structure, because you take a text. You break it down to the smallest pieces, like this is a word. This is a sentence. Or is it text at all? 

And then you start doing, oh, OK, this is an entity. This is the name of a company, a person, a location. So you build on top of that. And then you figure out that, OK, so it's a text about some company acquiring another company. You figure out there are two companies mentioned in this text. 

Then the next step is to figure out the direction of that event. So this company bought the other company. Something that we humans understand effortlessly that computers just don't. And then you can start just adding on top of this, until you get back to that human abstraction level, but only in a computerized way. 

And then suddenly, you have computers who can reason on textual content in the same way that we do. And that's-- getting to that point is what really reduces your machine learning training data. That enables you to do really powerful transferable knowledge. It's about reducing the number of features into a machine learning model. 

So you can use simple models on extremely complex problems, because you suddenly are stuck with really few features that just are able to represent your content or data in a high, high abstraction level way. And that's one of the really powerful things about this new data model. And it's a powerful change. And we're one of the ones driving this change. And it's going to be important-- really important-- in the future. 

MARK: I think we're seeing a lot of buzz around knowledge graphs, the power of how they unlock ML. And I think it's really interesting to hear more about how artificial intelligence can become faster and more accessible to everybody, based on the types of data they have, the amount of data they have, and just whatever situation they're in. So Marit, thank you so much for coming in and telling us a bit more. And it's really exciting to hear about how Strise is kind of tackling these changes. 

MARIT: Thank you. 

MARK: Once again, thank you so much to Marit for coming in. You know, I had a great chance to work with her last year when we were doing some of the Stack Chat filming. But I also want to make sure we call out-- we had an episode on knowledge graphs not too long ago. So if you're interested in-- and I don't remember the episode number off the top of my head. 

But if you're interested in learning a little bit more about that, we were able to talk a little bit more about knowledge graphs there. And then I had another video with Bob over at SeMI Technologies, talking more about knowledge graphs as well. So there's a lot of cool content out there for people who are interested in learning more about this and maybe even building some systems of their own. 

PRIYANKA: Great. It was a very, very enlightening conversation. So I really appreciate Marit being on the show with us and sharing what Strise is doing. 

MARK: Yeah, it's super cool. And she kind of mentioned that you could go to the website and sign up for a demo and look at it that way. But of course, plenty of people also want to build their own solutions, much like Sarah's solution with the baking. So we have so many great people here at Google. I wanted to give them a chance to talk about things that they thought were interesting or things that they learned that were super cool. 

So for this question of the week, I wanted to talk to Zach, who we've talked to a couple of times before. And I asked him what's a cool thing-- obviously you work a lot in machine learning. But what's something really interesting that people maybe haven't thought about or a pathway that might help people, trying to build demos? 

So he came up with a very cool tip, talking about how to more easily use some of those ML APIs. So why don't we turn it over to Zach, and he can tell us a little bit more about his cool work. 

ZACH: So when I first started at Google, I was all about building cool demos. My background was all in full-stack web development, so I kind of already had the tool set to build these quirky demos all from scratch and have a nice UI and stuff. But when I wanted to actually tell people, what's a practical way to go about implementing these APIs, I felt kind of guilty just washing over the fact that you still have to build an app around it. Which is kind of a high bar of entry if you just want to use the API. 

And so something really cool that I found out the past month or two-- and it was actually inspired by what [? Alicia ?] was doing. And she gave me some really cool demos that use AutoML, but all using Forms and Sheets as the interface for them. And I've actually built a few demos now using, say, the Vision API, that ingest data via a Google Form and then outputs the results in a formatted way using the Sheets output. 

And I'd say that's a really cool thing to look into. If you just want to do something useful with the machine learning API but don't want to have to build all the things around it, look into Apps Script and the G Suite tools. There's a lot of recipes and examples of how you can authenticate to those APIs while still in Apps Script. 

So I think that's a really useful thing. Because then people are just like-- if you're working at a company and you just want to start ingesting, like someone has either an image that they want to run through the Vision API-- you can build it into a Form. And just send them a link to the Form. You submit that link and we can analyze the image and stuff. 

An example of one I built was does this image contain a billboard that has writing on it that is a sensitive topic? I used a Google Form. And then there's an option for input file, which links to a Google Drive file. So the person uploads a image to the Form, hits submit. In the Google Sheets, that runs a function which just calls the Vision API to run the OCR, so the text detection on the image. 

And then it just outputs text found into a cell in that Sheet. And because now it's in a Sheet, I can just do a quick find look up. Is this word in this cell? If so, format the cell to be read. And then we know to follow up with that image, that it might contain a sensitive topic. All in Google Suite, G Suite. And so it's all immediately portable to anyone who wants to use it, to whoever they want to use it with. So yeah, G Suite with the APIs. I think it's going to be a very powerful and accessible mix to know about. 

MARK: Very cool tip from Zach. I really like it. And you know, he brings up a really good point about having to build these applications around the ML APIs. They're super easy to use. They're super easy to demo. But when you actually want to build an app, it takes some work. So I think people like Zach and Sara are building really, really cool demos and trying to make it as lightweight as possible, so that you can just get to the core concept. 

What's your cool idea that you thought of and you said, well, I wonder if this will work with ML? Turns out, a, I bet it will. And b, we want to make it as easy as possible for you to build those. 

PRIYANKA: Yeah. Mostly for all the machine learning APIs that we have available right now, they solve the most common problems. So if you're looking into images, if you're looking into videos, chances are you don't really have to build your own model. And it might be just sufficient to use the already available model. 

So I'm pretty sure that's what Zach is talking about in his tips. And on the other hand, in Sarah's example, she's actually building a model. So it's like two different spectrums of things. So it gives you an idea of when you need to build your own model, versus when you can actually use what's already available because you need to have that knowledge of picking the right tools for the job. 

MARK: So hopefully, again, all of this will inspire you to come up with an idea and build it. And hopefully there's lots of great resources out there to make you do exactly that. Well, before we wrap things up, Priyanka, are there any cool projects you're working on? 

PRIYANKA: Well, the last time I was on, we were in the middle of 13 days of GCP. So last week, we finished our 13 days. And I summarized it in a cool blog post about all the 13 different most common architectures that have been requested by multiple people to work on. So you can check that out. Link to blog post in the description and show notes. 

But other than that, just for fun, I'm trying to learn to set up website on Firebase hosting. And I'm using Google Material Design components for that. So there has been a fun little side project going on from my side. I might also wrap it up into Cloud Run eventually and then host it. Just tooling around with different things there. 

If you haven't checked out-- and we did talk about this earlier in the cool things. But if you haven't checked out Yufeng and Felipe Hoffa's Data Show, they do this data show, I think, three times a week now on YouTube Live. So check it out if you're interested in data and machine learning in general. That's a cool place to be and hang out with them. They do live coding. Very, very cool. I showed up on one of the episodes and it was amazing. 

And on a personal note, I'm really excited to share that my parents have made this kitchen garden during this interesting time. And the local news found it interesting. And they published it in the newspaper. So my mom is on a local newspaper. Yay. 

MARK: Well, now of course, you know the next step is to build a machine learning model to help them grow their plants. I mean, that's obviously all we've been talking about today. So clearly that can be added to your long list of things you're already working on. 

PRIYANKA: Yeah, I would be super excited to work on that. But yeah, I was actually thinking about agriculture and planting and all of that. And taking pictures of different things that they've made and then maybe applying some machine learning to it. But yeah, anyway. A topic for another time. 

MARK: Awesome. Well, we'll make sure to include a bunch of links in the show notes for people who are interested in any of those. I mean, there's so much great content right now. If anything, there's just content in every area that you could be interested in tenfold. Anytime you're bored, sitting on the couch, you don't know what to watch, try out some of this stuff. 

Because there's so many great people at Google and outside of Google who are just creating all this great content-- showing off demos, showing off videos, podcasts, whatever it is. There's a great wealth of resources right now, so take advantage of it. 

PRIYANKA: Yeah. 

MARK: And on that note, I think we'll go ahead and wrap it up. Thank you all for tuning in. And we're super excited to talk to you next week. 

PRIYANKA: Thank you all. Bye. 

MARK: Well, I think it sounds more authentic when you have a garbage truck in the audio, because it lets people know that you're human. And that you have to deal with garbage like most humans do. 

PRIYANKA: Like most humans, yeah. 

MARK: Welcome to episode 220 of the garbage truck podcast. All garbage trucks, all the time. 

PRIYANKA: Yay.