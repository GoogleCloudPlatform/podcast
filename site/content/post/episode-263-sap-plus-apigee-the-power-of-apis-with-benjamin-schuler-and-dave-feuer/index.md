+++
audioDuration = "00:38:47"
audioFile = "Google.Cloud.Platform.Podcast.Episode.263.mp3"
audioSize = 55769267
categories = ["API Management", "Data Storage", "Data Security"]
date = "2021-06-09"
description = "Max Saltonstall and Carter Morgan co-host the podcast this week and talk APIs with our guests Benjamin Schuler and Dave Feuer."
draft = false
episodeNumber = 263
hosts = ["Max Saltonstall", "Carter Morgan"]
title = "SAP + Apigee: The Power of APIs with Benjamin Schuler and Dave Feuer"
image="/post/episode-263-sap-plus-apigee-the-power-of-apis-with-benjamin-schuler-and-dave-feuer/images/hero/hero-EP-263.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/nw0vsp/episode_263_sap_apigee_the_power_of_apis_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Max Saltonstall](https://twitter.com/maxsaltonstall) and [Carter Morgan](https://twitter.com/carterthecomic) co-host the podcast this week and talk APIs with our guests, [Dave Feuer](https://twitter.com/readyaimfeuer) and Benjamin Schuler. Apigee, an API management platform that is a part of Google Cloud, focuses on all steps of the digital product life cycle to make API management easy for clients. The software company SAP provides data storage and other business support for different types of  companies across the world. Together, Apigee and SAP allow data to be collected, stored, organized, and securely accessed and shared with other applications.

The shift to e-commerce and the desire for tailored experiences has driven the need for more API usage and therefore better API management. SAP and Apigee, with their myriad features, allow businesses to keep up with these increasing demands efficiently. We hear examples of how companies are leveraging these tools and use cases where the power of SAP and Apigee benefit customers most. Our guests describe the developer experience as well. We talk about the process of creating a project with both SAP and Apigee and why both tools working together makes the developer's job easier. Planning your project with an "API first" mindset means choosing APIs and SAP software early in the planning process to better align your project with your business goals. Apigee can help you manage these APIs securely, letting you choose the data that is shared. The use of both SAP and Apigee helps companies to realize long-term efficiency and streamlined operations as development becomes easier with each additional API. 

##### Benjamin Schuler

Benjamin Schuler is a Solution Manager for SAP at Google Cloud with a focus on topics around application modernization. Prior to joining Google, he was working directly for SAP’s consulting unit and helped companies move parts of their SAP landscape to the cloud. When he is not busy populating spreadsheets or adding yet another //TODO: to his demo apps, he likes to get out onto the water for some freeride kitesurfing.

##### Dave Feuer

[Dave Feuer](https://twitter.com/readyaimfeuer) is Senior Product Manager at Apigee, a part of Google Cloud Platform. Previously, Dave ran the Platforms & Strategies practice at a boutique consulting firm, designing and implementing developer programs for Fortune 100 companies. Prior to that, Dave ran enterprise telecommunications product development and software engineering at IDT and Net2Phone, a telecommunications and payments company. Dave started his career as an embedded software development engineer, and frequently questions how he ended up spending so much time in Google Slides.

##### Cool things of the week

* AI Simplified: Managing ML data sets with Vertex AI [blog](https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-how-to-create-and-manage-data-sets)
* Create your own journaling app without writing code [blog](https://blog.google/products/google-cloud/create-your-own-journaling-app-without-writing-code/)
     * AppSheet Journal [site](https://www.appsheet.com/samples/Journaling-app-to-easily-log-and-view-journal-entries)

##### Interview

* Apigee [site](https://cloud.google.com/apigee)
* Apigee Setup [site](https://apigee.google.com/setup)
* SAP [site](https://www.sap.com/index.html)
* Apigee: Your gateway to more manageable APIs for SAP [blog](https://cloud.google.com/blog/products/api-management/how-google-cloud-lets-you-do-more-with-sap)
* Accelerate the time to value of your SAP data with Apigee [video](https://www.youtube.com/watch?v=DzemdcnNtl4&list=PLBgogxgQVM9th8pUai8d5wZzyYeF5xMu_&index=18)
* GCP Podcast Episode 54: API Lifecycle with Alan Ho [podcast](https://www.gcppodcast.com/post/episode-54-api-lifecycle-with-alan-ho/)
* GCP Podcast Episode 219: Spotify with Josh Brown [podcast](https://www.gcppodcast.com/post/episode-219-spotify-with-josh-brown/)
* Conrad Electronic: Powering next-gen retail with BigQuery and Apigee API management [site](https://cloud.google.com/customers/conrad-electronic/)
* Schlumberger chooses GCP to deliver new oil and gas technology platform [blog](https://www.blog.google/products/google-cloud/schlumberger-chooses-gcp-to-deliver-new-oil-and-gas-technology-platform/)
* Schlumberger Selects Google Cloud for its Enterprise-Wide SAP Migration and Modernization [site](https://cloud.google.com/press-releases/2021/0429/schlumberger-sap)

##### What's something cool you're working on?

Max is documenting how Google & Alphabet made the move to SAP. He's also working on a Discord bot on Google Cloud and ITRP series launch.

Carter is working on a SAP content video series and teaching in the Equity Through Technology program.

{{< transcript "[MUSIC PLAYING] CARTER M: Hi, and welcome to episode number 263 of the weekly Google Cloud podcast. I'm Carter Morgan, Developer Advocate for Google Cloud, and I'm here with my colleague and friend, Max Saltonstall." >}}

 MAX S: Good to talk with you today. Tell me, what really cool stuff has been coming out this week? 



CARTER M: OK, so I just got to check this out. I was really excited to see this really cool new series from Priyanka Vergadia, and she's a Developer Advocate on the Google Cloud team as well. Basically, a simplified AI, and I don't know if that's the name of the actual series but that's what the series is about. It's simplifying AI, making it understandable, and she just put out two videos so far that I saw-- Vertex AI, which is this new, unified platform for handling every phase of the ML pipeline. 



So whether you're ingesting or analyzing or transforming data, well, they have tools for that under this new Vertex API Platform. Whether you're training models or evaluating data they have tools for that. And if you're deploying, they have tools for that. 



And so what is really cool is Priyanka has made some blog posts. She's made videos explaining all this, and so if you want to know more about AI, if you want to know more about this suite of tools, definitely check that out. 



MAX S: Awesome. You've told me about many of the cool journaling and tracking tools that you've used. Sounds like there's some neat news about how to create your own one of those with AppSheet? 



CARTER M: You know I'm a huge fan of anything automated. Especially if I don't have to code, because that takes time. I just saw this new-- basically like a sample of a no code journaling application. 



It comes with calendar integrations, like a form to fill out data, add little notes to your day. Chris Bailey was the one who wrote that, and there's a blog post on the Google Cloud blog about that. 



But basically they are using AppSheet so that you could just easily make a calendar. And so, you know, I'm a big fan of bullet journaling. I'm a big fan of other tools like that. So I want to go through this and see how easy it would be for myself to build my own, very specialized journaling application. 



So those are the two cool things that I saw this week I was happy about. We're going to get into this episode, which I'm excited about, because it's all about SAP and Apigee, the power of APIs, and how we can use those to basically simplify our lives as developers. 



I'm going to stop right now, and while I stop will you tell us just a little tease about some of the things that you're working on? And then we'll get into the episode. 



MAX S: Sure, yeah. I have been actually working with some of the folks in our finance team internal to Google and Alphabet on how we made the move to SAP, which-- changing what system you use, especially when you're switching vendors, not just updating versions, it is a monumental change. And so I'm really excited about these posts because we're going to be detailing how we went about it, how we structured that transition, the different pieces, and how we decided to order them. 



And how we made it something that improved our efficiency and our scalability. Because Google and Alphabet have grown a lot and that's also increased the complexity of the kind of financial data that we need to manage and secure. 



CARTER M: It's funny because we're doing this episode, but I'm also doing a video series on SAP and why you would want to use it, how to use a Google Cloud-- so that's why this episode is exciting to me. I guess I'll tease some of the main episode content. We have Dave Feuer coming on who's a senior product manager, does product management, and he's really going to be focused on explaining Apigee-- the hows, the whys, the whats of it. 



And then we also have Benjamin Schuler on this episode, and he is a solution manager, but focused on SAP strategy and architecture. So customer stories and adoptions, how they can use the systems they already have but bring those over to Google Cloud-- and basically it's a win-win for everybody in that case. And so I'm excited because I'm working on some SAP videos. 



It's such a large product area. It's a suite of tools that everyone uses, and it's hard to dive into. And so I don't know about you, but for me I'm excited about this episode because I hope it helps to clarify what's happening. 



MAX S: I liked how the combination of SAP and Apigee can let companies of all sizes turn the data they've gathered through doing business into its own source of revenue or innovation and lets these systems play well together so that you can create some really interesting either cross-company or cross product opportunities for efficiency or for accessibility or just for easing the developers experience so that they have a better time getting to and using the humongous amount of data stored in SAP. 



CARTER M: Yes, so I think, without further ado, Max, we introduced the guests. Let's get this started. 



[MUSIC PLAYING] 



MAX S: Thank you very much for joining us, David, Benjamin. I'm really glad you're here. Can you tell us just a little bit about what it is that you do at Google? 



BENJAMIN S: Happy to. So hi, everyone. My name is Benjamin Schuler. I am one of the Solution Managers here at Google Cloud, and I focus on the SAP solution management. So what I do, basically, is I help customers and partners use Google Cloud infrastructure to optimally run their SAP systems inside of the Google Cloud data centers. 



DAVID F: And hi all, I'm Dave Feuer. I'm a senior Product Manager on the Business Applications Platform Team, which is the Apigee team. And I'm focused on platforms and ecosystems, and how we can help companies best participate in the promise of the internet economy. My main focus is on really figuring out what are the friction points that corporations have in adopting sort of the new way of thinking and developer oriented thinking, API led thinking, and how we can help those companies really achieve their goals. 



CARTER M: Welcome, both of you. I'm very excited for this episode. I think the first thing I want to ask is, Dave and Benjamin, respectively, what is Apigee and what is SAP? Can we give brief descriptions of these two platforms or products? 



DAVID F: Apigee is an API management platform, which is a little bit different than what you might be thinking in terms of sort of an API management gateway, right? And we're really focused on doing everything necessary in order for companies to extract value by building a business platform, which means everything from how developers learn about an API, how they get that API, how they pay for that API-- we have a whole monetization module-- really everything associated with the digital product lifecycle when you think about APIs as digital products, that's what we're focused on solving. 



BENJAMIN S: So SAP actually is a German software company. It's not a single application, but they actually have multiple applications that support businesses in all different areas and industries to better run their business processes and store a lot of the data that needs to be processed during any business transaction. And what these transactions can be is they can be between employee paycheck management, customer invoicing, they can relate to production planning for capacity utilization or even things like forward-looking, demand forecasting-- 



And what SAP is really great it is they don't just support the processes inside a single company, but they can also support companies that are doing business together to make sure that the collaboration between different companies can run smoothly. And that, for example, in the automotive industry a parts supplier can check, for example, inventory levels at a car manufacturers plant. 



MAX S: So how did these two come together to help customers and small and large businesses? 



BENJAMIN S: So I guess if I had to take a fast description of how they can run better together or they can be combined-- with SAP typically you have a system to system transaction. So a lot of the data transfers are happening one database to another. But all of that runs in the background. It's not something that you as a user or as a consumer will be exposed to. 



But then there are many more applications that you can think of that want to rely on parts of that data. For example, when you are tracking a shipment. You want to have your customers be able to see what's the current status of my shipment. So you would try to expose maybe some of your SAP data through a web application. And that's where APIs can play a big role, and that's where an API management platform or even more sophisticated platform like Apigee can come in. 



DAVID F: When I think about the problem, I really think about the problem in three specific different domains. The first is that accessing data in SAP is complex. SAP has tens of thousands of APIs. They're actually exposed in multiple different protocols. 



So if you're a developer and you want to perform a business function, when you come to a portal that has tens of thousands of APIs there's very little chance of you, in any reasonable period of time, being able to leverage those APIs really build something meaningful to solve your business problem, right? 



So being able to take SAP data and rationalize it into API products to then expose them to a developer community to drive engagement and to drive onboarding so that developers can leverage APIs in very little time in order to see business value-- that's one of the challenges of SAP that Apigee helps solve. 



The second is that data governance is challenging. You don't necessarily want to expose all of your SAP data to everybody. So if you think about developer programs in terms of channels-- you may have internal programs. 



You may have internal groups that are using SAP data. You have external partners that are using SAP data. You may have third party developers that are asking for access to that data or partners that need access to data, for instance, for returns in order to be able to very quickly provide returns as a service to you as a company. That data governance needs to be managed on a developer by developer basis. And so that data governance is something that we help solve for SAP in order to open up SAP data to developer programs. 



And the third is really reliable access to all of the data from SAP. As Benjamin mentioned, SAP is multiple different systems, SAP is a company. And so all those different systems frequently have copies of data, different data that looks the same. So it's important for the folks who are actually managing and running SAP to expose the most relevant data and the most reliable data in Apigee in order to get that to developers. And so being able to provide reliable access to the right data is something else that we do very well with SAP. 



CARTER M: Yeah, I can definitely see the benefits there of being able to partition or maybe secure certain parts of your infrastructure from one group to another. But something I'm curious about-- I saw this stat that said something like 78%, 80% of all business transactions touch a SAP system. And so why now would we need or do we need more API management or better API management? 



DAVID F: I think we're at a really interesting time in development in the internet economy. And obviously COVID-19 has accelerated things, so we're much more attuned to buy online, pickup in store or simply buying online and getting shipped to us. So I think we're seeing a lot more of a shift towards e-commerce in general. And I think that drives a lot of systems utilization because you don't necessarily have people going back to a store room and checking in shoes are in stock and then coming and offering them to you. 



You know, I think the second is that there's two other trends that are happening. The first is that CRM systems and the tailored experience of social media has created what we call the Age of Assistance, where fundamentally customers expect a personalized experience and they expect that experience to be available wherever they are in whatever activity they're doing. 



And so there's a need for a whole bunch of apps to help support that behavior. So it might be your Google Home when you're in the kitchen. It might be your phone when you're on the go. It might be your in-vehicle experience when you're driving. 



They all require a plethora of apps, and so there have to be systems to support those apps. And so connectivity back into the underlying real-time systems that run these businesses is paramount. 



You know, there's something else that's happening as well, which is to say the internet economy is exploding. We're seeing that a move from product versus product paradigm to ecosystems versus ecosystems competition has created a completely new relevancy for a lot of, let's say, retail, right? 



But even your ability to, let's say, buy paint and get the paint colors that you want and be able to go online and see those paint colors and perhaps get some samples shipped to you and all of that-- that entire experience is completely online, and you can see that the pay providers are trying to create ecosystems where they have relationships to talk about which paints match which furniture and all of that. 



So there's sort of this explosion of internet-based businesses and the internet economy. And I think that's driving a lot of technology and technologists to say what are the new and interesting things we could do with our existing businesses to help meet customer needs? 



CARTER M: One thing I'd be curious about, and maybe Benjamin could come in on this-- are you seeing customers actually using Apigee to unlock some of the power of SAP? 



BENJAMIN S: Yes, absolutely. David already mentioned a couple of good use cases why Apigee can help SAP customers and developers that to try to access the SAP system. I think the one thing that I would like to add to that is there is always a little bit of hesitance when it comes to opening up the SAP system for the first time for people that are not inside your SAP core development team, right? 



Because many people say that SAP systems are like the crown jewel of your company. So if that system stops, your production stops. Your shipping stops. 



MAX S: It's where all the money is, too, right? 



BENJAMIN S: Exactly. Your finance processes run, so you want to keep that system as protected as possible. And that's not just from a security standpoint, that's also from a load perspective. If you have tens of thousands of developers or applications accessing your SAP system, it could create a lot of load on the SAP system. And that's where, if you put a platform like Apigee out in front of it, you can also introduce mechanisms like caching, where data that is frequently pulled from the SAP system but doesn't change much-- you don't have to file all of these requests back to the SAP system, right? 



You can, for example, load a product catalog once a day and then the subsequent 1,000 requests that come towards the product catalog will just run against the cache in your API instead of going back to the back end system-- in this case, the SAP system. 



And that's, I think, one of the easy entry steps where customers can see instant benefit without even having to come up with new business cases of, like, selling that data. Because I think while it's possible with Apigee that's then the next step. So there's not just one reason to do it. And there are, I think, multiple ways to get started with it, and that's the interesting thing. 



MAX S: Does this make it tougher for developer teams, if they have to learn this whole set of SAP interactions plus the Apigee-- is this two tools to learn or can it be making our lives easier? 



BENJAMIN S: So I guess the initial question is exactly the one that you're asking, right? Why do we need a second tool to do something that SAP might already offer. And I guess the answer is, if you look at it holistically, you won't find many companies where they just have SAP systems. 



They have many other third party systems that also provide APIs but in their own proprietary format, or maybe some will use open standards, some won't. But you always have multiple systems in your entire IT landscape, and SAP just being one of them. 



So instead of looking at it and saying, OK, if I have people that know SAP, would it be more work for them to learn how to use Apigee now? If you turn it around and ask the question, how many different interfaces do I have today? And wouldn't it be easier to say, let's use Apache 2 get them all into a unified platform behind a unified portal and make it actually easier for developers to access data from the systems regardless of the underlying back end system that they want to access? 



CARTER M: That just makes a lot of sense. Since SAP, there's a lot of distributed systems. It makes sense to try and unify them under API management of some sort. 



DAVID F: So Max, it's a great question, but I think it sort of slants the question in a specific direction, right? In other words, does it make life harder for the internal teams maintaining SAP or maintaining those internal systems? And I think in the short term, it might make life a little bit harder. But I think that's not our focus. 



I think our focus is enabling those teams to sort of leapfrog their value proposition beyond I'm creating an integration point for internal applications, to I'm creating a business platform for external applications, where each external developer that integrates with my system-- actually, we can represent thousands of new users, new customers, new user journeys, and new use cases. 



And so the question that I would be asking if I were a technology leader, is how can I take my existing investment and infrastructure and turn it on its head to provide services to third parties to really take my value proposition that's currently running my business and help it run 100 other businesses, right? That's, I think, the question that we constantly ask. 



So if there's a little bit more work to expose those integration points as API products, as digital products that are developer focused and developer first, that investment is well worth it because the return on investment is huge. 



MAX S: It's basically an extension of every company is now a data company, whether they like it or not. 



DAVID F: Absolutely. 



CARTER M: I love that insight, Max, that you had. Every company is now a data company. But then that takes me back to the company we all work for right now, Google. Why does Google care about this? Why is Google investing in Apigee or SAP integrations, and what not? 



DAVID F: Google is heavily invested in solving customer problems and making sure that, in enterprises, IT infrastructure are managed with the best technology we can possibly deliver to them. And so I think if we look at what the problems are that major corporations are having today-- just as an example, Conrad Electric-- they have 400 plus internal systems and they had to unify them. 



They had to unify those data sources, and they wanted reporting, analytics, they wanted process automation, and all of that. So they used Apigee in front of all of that to abstract all of those underlying systems and create one unified layer to access the systems. That alleviated a significant friction point for Conrad Electronics. 



So if you consider that, enterprise friction points around becoming a data driven company, unifying existing systems, modernizing applications is a huge challenge. We're doing our best to solve those problems and a partnership with SAP is what's really enabling us to solve those problems for customers that have multiple systems, including SAP, and being able to take those and extract even more business value along with the rationalization of that infrastructure. 



CARTER M: That makes a lot of sense. Benjamin, would you say for like, SAP, for Google the benefit here is that there's a lot of customers where they have distributed platforms or hybrid platforms, and that's something where Google has a lot of experience. And so I think maybe that's an area where we can help. 



BENJAMIN S: With the cloud trend that has been going on, SAP customers are also thinking about where will I be running my SAP systems in the future. And today they might not be running their SAP system with any of the Cloud Infrastructure providers. 



They would still have their SAP system running in their own data center or with their hosting provider, which is totally fine. But instead of postponing all of the application projects and saying, well, let's not connect anything new to the system because in the next three years we're going to move the system somewhere else. We don't know yet. 



MAX S: It's only going to take three years to move your SAP system? That sounds fast. 



BENJAMIN S: Don't name me on that timeline there. If you want to start with your application modernization play today, you can already connect your on premise system to the new applications. And then if you're moving that system later, it's important that changing the backend is an easy task, right? So you don't have to rewrite 20, 50, 200 applications that have been created to connect to your backend system. 



That's one of the things why Google is so interested to show all of these different possible use cases for SAP customers today, regardless of where they are running their system. And then customers can use the time to explore how all of these different cloud services can be incorporated with these new applications, for example. 



So nothing's stopping you from saying, let's connect my SAP backend in this application together with, let's say, a machine learning service that's running on Google Cloud, or something that I am running in my Anthos managed cluster somewhere in a multi-cloud environment. So there are many different use cases that customers can think of today that they might implement over the course of the next couple of years, and they don't have to wait until their SAP system is running in, let's say, target state. 



DAVID F: To that point, I think there's a really interesting trend that we all see occurring in IT, which is service decomposition, right? We find that these legacy sort of monolithic infrastructures are able to be better positioned to serve business needs by decomposing them. By turning them into microservices and small pieces of functionality, and identifying that functionality independent of other functionality so that we can iterate on that and put QA into that get that into production separate from the rest of these systems. 



And I think a lot of the work that's going on with SAP is really figuring out which of the pieces of SAP systems that add the most value or that can add the most value to my business. And then how could I decompose my business processes so that I get that piece of SAP available where I need it, when I need it-- whether it's a product catalog or whether it's a process for a quote to cache, or whether it's really any aspect of SAP. 



So the question is, if I think in terms of absorptive capacity, what is a company's ability to recognize the value of new information, assimilate it, and apply it to commercial ends? That's been solved by SAP internally. 



And I think the big challenge that we have is decomposing our legacy systems in order to make them valuable externally, right? And figure out, how do I create new applications and new experiences and new third party services that I can then reap the benefits of? 



So part of the reason I think we're looking at moving SAP to the cloud is to get that benefit. To say, not only is it cheaper and more efficient for me to run SAP, but it's also very easy for me to get access to SAP and access to all this great functionality that's sitting there. 



And so I think part of that service decomposition challenge is saying, what are the business needs? What are the API products that our customers need? How can I identify them and then how can I take a sort of step-by-step rational approach that says, here's what I'm going to move now. Here's what I'm going to move later. Because I know this is much more valuable and that's less valuable, right? 



CARTER M: So this makes a lot of sense. Earlier we talked about the C-level benefit. We said if you use Apigee, you're going to be able to expand who your business can reach through these APIs being exposed externally. 



But now if we're talking internally, it seems like developers have a lot less surface area that they have to learn because we're breaking down, decomposing all these large, complex systems into smaller ones that are more modular. 



DAVID F: More digestible. 



CARTER M: More digestible, yes. Does that seem to be one of the benefits? Because I think earlier we said, let's not focus on the short term. But it seems like even in the short term, there's going to be a lot of benefits to just having a more manageable application and platform to work with. 



DAVID F: Absolutely. I think to Max's point about becoming a data driven company, right? Being able to have data at your fingertips to very quickly turn around and create new value propositions, whether they're internal or external, is incredibly valuable, and I know that, for instance, we have a number of customers that are looking to monetize their data. And that's a terrific goal, but there's tons of value with indirect monetization as well. 



So figuring out ways that I can take information that I know, if I were looking to integrate a third party return system, being able to do seasonal replenishment so that when I bought a sweater and try to return it three months later it didn't go to the place where it was shipped from but it actually went to the place where it was cold and so that sweater was much more needed. 



So for instance, if I bought something in a warm weather area in the winter and then wanted to return it three months later, it would actually get returned to a cold weather area, that's information that's typically stored in SAP. So the question is, if I were using a third party for returns, how do I get that third party that information so that I get much better inventory distribution and seasonal replenishment of inventory items that even include my return system? 



And so those business processes we don't really think about, but they drive a ton of value, a ton of efficiency, and they're a massive opportunity for folks with SAP to open their systems and become more data driven and make more intelligent decisions. That's really what we're aiming to do. 



CARTER M: So my next question that would be, what does it look like integrating or bringing in Apigee into your platform, whether it's SAP or something different? What is the process of going, I don't have Apigee, I have these systems that I want to basically wrap up in these APIs and be able to get all these benefits from-- where do you start with that? 



DAVID F: I think the most important thing is to figure out what you want to do. Obviously, we'd love to talk to you about how Apigee can help. But what is your business goal? What's your business strategy? And what are the sorts of API products you're looking to build? 



Is it a partner ecosystem? Is it an internal ecosystem? Is it application modernization? What are the goals that you're trying to achieve. 



And then start to say, OK, what are the APIs that would help you achieve those goals? We call that API led decision making. Frequently, you'll hear it referred to as API first. The question is what are the API products and how are they going to enable you to meet your business outcomes? 



And then once we figure that out, then it's like, OK, here are the personas, here are the application experiences, here's the APIs you should build-- let's talk about the underlying systems that enable that and what we have to do with those systems in order to help you align that goal. 



And we're really focused on sort of that motion because exposing APIs is something that's not new. We've been doing that since the 1970's. What's really new is the fact that the value is actually consumption of those APIs, not exposure. 



So starting with the consumption end and saying who are the customers, what are the experiences, and what are we trying to enable ensures that your technology stack and your technology approach is really tightly aligned with your business goals versus your technology goals. Because we're really focused on helping our customers grow and making sure that they get business value out of these initiatives, and so that's how we go about it. 



We say, what are your business goals? We typically include a special group called the cloud value advisors who really focus on what the value proposition is to the company and understand what the full context is of these initiatives, and then start from there. 



Start outside and API first to make sure that we're consistently aligning the technology efforts with business goals. 



BENJAMIN S: The interesting thing is there's not the one right way to do it right. So as diverse as SAP customers are, as diverse as the landscapes are, as diverse are the ways of how you can get started. 



What is common with most implementations or with these engagements is that it's rarely a full company blown adoption of introducing Apigee into your business processes. But rather you have specific parts of your business that see the need to say, if only we had easier access to the data inside SAP, we could do these things better, faster, or more efficient or we could connect to partners in emerging markets, for example, if only we were able to open up our systems more easily to them. 



And I think that's how most companies get started, right? They have business units that have an idea and they say, well, if we can find an easy way, we can show the value of opening up the SAP system. And then if they are successful, they can propagate that story and they can advertise it, and then the good thing is, once you've built an API, once you've opened up the access for a particular part of your SAP system, everybody else can use it without having to go through the same painful process of understanding how can we get the data out of SAP, what are our security guidelines, what our data governance principles that we need to adhere to, right? 



You do it once and then for the first application it's going to take a little bit longer. But then application 2 to 50-- you can reuse all of the work that has already been done, and the APIs can help you scale to many of the applications. And that's what is common with all of the engagement stuff you're seeing. 



DAVID F: There's frequently this pattern where Apigee used as building blocks, right? So how do I get a user ID from a user name, et cetera. Then these building blocks tend to scaffold up so that as companies build these value propositions they've got these reusable building blocks, these reusable API products, that add a ton of value in the future. 



So not only are you actually building something for the consumers you have now, but you're also building these building blocks so that these companies can very quickly compose business applications and digital products from the existing building blocks, adding very little new functionality, to create a ton of value. Because the building blocks are already there. So you don't have to re-engineer every API product from scratch. You've actually got a lot of building blocks that you built for the first API product that you can reuse. 



So, Max, when you said earlier isn't this more work, aren't adding a second system? It might be a little more work up front, but in the long term you're getting significant amount of value because you can really recompose all of those pieces of business functionality into new offerings and new value propositions very quickly and easily without engineering it completely from zero. 



MAX S: It sounds like it's enabling a company to just make their own ecosystem and do it incrementally instead of all at once so that then they can take advantage of other developers or other companies consuming the data that they choose to expose in the way they choose to expose it or the functionality. And then that leads to better processes, better partnerships, better operations. 



DAVID F: Yeah, exactly. You know it's something that we see a lot. Not just in retail but also in financial services and telecommunications. There's sort of these different lines of businesses that have a thick wall in between them. They operate like silos. 



But once you start to discover each other's APIs, then they start to cooperate because they realize, hey, you can save me two sprints worth of time if I could just use that API product, and we see this sort of natural cohesiveness and collaboration evolving organically because all these teams want to get more to market and spend less time doing and get more value out of their infrastructure. 



CARTER M: It's interesting. I don't know what just happened, but in this last bit of conversation something clicked for me, and I see this same pattern on a smaller scale. So not just on like large businesses but even personal development tools where they've exposed an API, and now this tool is so much more useful because it can integrate with your Google Calendar, and it couldn't do that before. Or it can integrate with your to do management tool, whatever that was. 



Just like Benjamin was saying, someone went through and did the hard work of learning how to integrate this and then publishing that integration for other people. And now a ton of people can use it in different ways. So it sounds like Apigee allows that to happen at business scale, like enterprise scale even. 



DAVID F: Absolutely. That's a perfect description. I love it. 



CARTER M: So is there anything else that we missed in this conversation? 



BENJAMIN S: The one message that I would give the audience of people who are interested in wanting to try that out is if you have access to, or if you have SAP systems running in your landscape, just try it out. Find an SAP module that you are familiar with, that you can identify the data objects with, that maybe the product master or maybe you know customer record. Maybe you are working with sales orders. 



Just think of a simple use case that you think might benefit the business users, the teams around you, and give Apigee a go and connect to it. Because having that first connection and seeing how easy it is to consume these APIs is actually the first step of taking away some of that fear or hesitation. 



MAX S: Do you run into common pain points or common opportunities that you've seen multiple companies have in terms of ways to make SAP a little bit smoother, easier for them to use through APIs? 



BENJAMIN S: I think the largest pain point is that, if you're not familiar with this if you data model, it's really difficult for a web developer to understand, for example, how a sales order is composed of, right? Because it's not just one document. Like if you get a sales order invoice, for example, as a consumer you just see one or two pages of a PDF document. 



But that actually is composed of, I don't know, seven different SAP objects. Because you have your customer data, you have your address data, you have sales order header, sales order items, you have product information, you have pricing data-- so all of that is combined in this one document. I think it's the same for developers that are new to SAP. 



When they need to connect to the system, it can be a bit scary because you need to know a lot about the SAP specifics, and that's actually something that gets easier if someone else who has that SAP knowledge breaks it down into consumable services so that everybody else can easily say, hey, this is my sales order. This is my invoice. 



CARTER M: Yeah, that does sound like it'd be a lot for me to pick up if I was just diving in. So I'm glad I'm getting this context now. 



Dave, is there anything with Apigee that you're like, we should have touched on this? I wish customers or people listening knew about this. 



DAVID F: You know, there's a term called headless commerce, which is a retail oriented term that basically describes how commerce companies are really becoming decentralized architectures that have multiple different systems, both first party and third party systems. And they're basically in the business of orchestrating between all of those systems in order to drive the most value, which is very unique. 



In banking, you have the ledger ultimately of all your customers. In telecommunications, you have the network, right? In health care, you have the medical records. So in all of these different businesses you have very unique value propositions associated with a single, core piece of infrastructure, and in retail you don't. 



So retail is really kind of moving back to headless infrastructure. And if we think about headless infrastructure or what it is, it's really about building a digital nervous system around all of your IT assets so that you can very quickly compose new business applications from all of these IT assets. 



So I guess the one point I would like to make is that as you start to think about your compos-ability-- your ability to very agilely move to build new applications and new experiences and drive new things to customers, and you think about that in the context of a digital nervous system, think about the fact that the only way you can be able to do that is if you have all of those tools at your fingertips. And the only way to do that is by focusing on developer experiences and developing programs. 



That's I guess one point that we didn't touch on today. And people think of SAP as heavy core infrastructure but really it's so much more, right? 



And getting access to all of the business value that's in SAP and being able to put that in the hands of the key developers who can take that business value even further for your business-- that's something that we find is super important, and that's sort of the digital nervous system approach that I want to mention today. 



CARTER M: Thank you so much for that. So I know that we have a lot of tools for people to be able to start up SAP instances and whatnot with the Cloud Run and Cloud Build, and I know that there is a way to use Apigee for free. 



BENJAMIN S: There's a link that we can put in the description of the notes. Definitely go over there and check it out. And I guess on your comment of spinning up the SAP system. I mean, there are developer instances that you can spin up that don't need that much resources so you don't have to get that large SAP system yet. 



If you have access to it, then great. I think there's also some easy ways on the Google Cloud Marketplace to spin up at least a SAP database and connect to it. SAP is just one of the examples of how you can use Apigee, right? So if you don't have Apigee today and if you don't have SAP in your IT landscape today, it doesn't mean that Apigee can't give you any use. 



CARTER M: Well, thank you so much. I've learned so much from both of you today, and I'm sure all of our listeners have. 



DAVID F: Thank you. 



BENJAMIN S: Happy to be part of it. It was really fun. 



DAVID F: Thank you for having us. 



CARTER M: Wow, all right, so I had a lot of questions about SAP. I had a lot of questions about Apigee. 



MAX S: I think I still have some questions about SAP myself. 



CARTER M: Yeah, 100%, but it's really interesting to see how people are using it and how much has changed. Especially in the last year, where everyone is commerce business. And I think you said this during episode, but every business now is a data business as well. 



MAX S: Yeah, finding creative ways to put that data to use and to let others access it while that first seems sometimes scary can be the thing that unlocks a lot of new potential and innovation. 



CARTER M: I think it was Dave that made the point-- it's not about creating the APIs, it's about the consumption of them and who can consume them. How easily can they consume them, because that's what's going to open up a lot of potential for your business down the road. 



I've never had to think about it too much. Like the types of projects I work on, I don't have to build APIs that are consumed by other people. But I'm seeing now, more and more, how important that is, even for small application developers because there's so many other ecosystems you can plug into if you have a good API that's manageable and that's easy to consume. 



MAX S: Totally. It's an opportunity to even make new ecosystems, new sets of players that work well together that can create some amazing functionality. 



CARTER M: Yeah. I wish I'd asked this during the interview and maybe you have some insights here. The term API first-- API first design-- that's not something I've heard before. 



Like I hear a lot of people talk about customer centric or product centric, but even here although, I think it was Dave, said API first he still focused on the customer, in this case the company, what they were trying to do. What are your goals? Then let's come with the API. 



So I'm not clear on that terminology yet. I want to look into that more. But I'm like, oh, I'm excited. I just learned about something else I need to go and research and learn more about. So to me, that's a good episode. 



MAX S: Lots of stuff to learn about, for sure. 



CARTER M: Yeah. So, Max, we teased it at the top of the episode. What are you working on? 



MAX S: I've been having a lot of fun working on a Discord bot that I'm trying to run on Google Cloud. So I've been goofing off with Discord a lot more over the last few months, because I can't go out and see people. And I'm noticing a lot of bots that do different things like moderate or play music or sometimes even have interactive games that you can play. 



So I had an idea for a collaborative word game. And I grabbed a friend and we've been spinning up this new bot and learning how to integrate GitHub, and Google Compute, and Discord's APIs, and it's been really cool. 



CARTER M: So does the bot itself live on Google servers running somewhere? Or-- how does that work? 



MAX S: Yeah, so the bot's code we're writing in GitHub. The code then runs on Compute Engine, and then using Discord APIs it can basically be added to any Discord server. So it can run not just in one place but in 100 places, and it can still have that one constant data store so that your status with, say, this word game is the same no matter which place you're playing it. 



CARTER M: Oh, wow. OK, I can't wait to see this. And then is this going to turn into some kind of content, like blog posts or videos? 



MAX S: Yeah, we got a blog post about the early start up steps and getting it working just with a Hello, world kind of example. And then we're going to dig into a little bit more about instancing and scale, because if you do have a lot of people interacting with it you want to be able to handle those requests quickly. But you can't just run multiple copies of the code or one signal to the bot could get two or three responses, and that's not at all appropriate. 



CARTER M: Yeah, no, I can't wait to check this out. Are you working on any other series right now? 



MAX S: We're writing about some folks who've gone through the Information Technology Residency program, which is a program that Google's IT department set up to bring early career folks into It and into tech support, teach them a lot about how Google runs, and kick start an IT career, and then set them up for any number of different next steps. 



So I've been profiling actually about two dozen people who've gone through this program over the last 10 or 11 years and detailing what kind of journey they took before, during, and after that program. It's been really fun just getting to know this really cool, diverse set of people from a lot of backgrounds and who've landed in a lot of different jobs. 



CARTER M: Oh, wow. Yeah, I'm happy to hear that. And it's probably got to feel very rewarding to be working on that. 



I'm getting to do something similar. I'm going to be teaching one of the cohorts on the ETT program, so the Equity Through Technology program. 



MAX S: That's awesome. 



CARTER M: Yeah, I'm so excited. You know, because I was brand new to the cloud five, six years ago when I joined, and Kelsey Hightower came and kind of mentored me and said, here's what you need to know. Here's what you need to learn. 



And so to be on the other end five, six years later and now I can share my insights and help other people get along and maybe in five, six years they'll teach the next batch of people. I'm excited about it and a little nervous but very excited to be able to help out in that way. 



MAX S: That's awesome. 



CARTER M: I said at the top of the episode I'm doing some SAP videos. So this episode was helpful. And then I'm like, OK, I have a better understanding of this entire ecosystem. But that's all for us, and that's all for me today. Max, it was great again to host with you. I hope we get to do this again soon. 



MAX S: Yeah, it's good to see you. Thank you. 



CARTER M: And Thanks, everyone, for listening. We'll see you all next week. 



[MUSIC PLAYING] 