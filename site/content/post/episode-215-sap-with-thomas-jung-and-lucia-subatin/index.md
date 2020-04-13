+++
audioDuration = "00:42:00"
audioFile = "Google.Cloud.Platform.Podcast.Episode.215.mp3"
audioSize = 60392247
categories = ["SAP", "ERP", "CRM", "SRM"]
date = "2020-04-08"
description = "Brian Dorsey and Mark Mirchandani team up this week to speak with Thomas Jung and Lucia Subatin about SAP. "
draft = false
episodeNumber = 215
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "SAP with Thomas Jung and Lucia Subatin"
image="/post/episode-215-sap-with-thomas-jung-and-lucia-subatin/images/hero/hero-EP-215.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/fx910w/episode_215_sap_with_thomas_jung_and_lucia_subatin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Brian Dorsey](https://twitter.com/briandorsey) and [Mark Mirchandani](https://twitter.com/markmirch) team up this week to speak with [Thomas Jung](https://twitter.com/thomas_jung) and [Lucia Subatin](https://twitter.com/LuciaBlick) about SAP. SAP, the company that builds software and other technology components, is probably best known for their Enterprise Resource Planning software that helps businesses with everything from accounting to order management. Their Customer Relationship Management software helps companies with things like marketing campaign management and sales, while SAP's Supplier Relationship Management software helps clients manage large supply chains. 

Thomas explains how companies can get started with SAP products and integrate them into their current systems. Once SAP products are employed, clients benefit from a better understanding of their complete business and a more efficient company. SAP developers must have great communication skills, as they take SAP products and tailor them to each individual company, whether on-prem or in the cloud. Later, Lucia and Thomas describe instances when clients may want to take their core businesses and enhance them with technologies like AI and how this is possible.

To wrap up the episode, Thomas and Lucia introduce us to SAP products like HANA, their Cloud Application Programming Model, and security measures. 

<!--more-->

##### Thomas Jung

[Thomas Jung](https://twitter.com/thomas_jung) is Head of Developer Advocacy - a team within the SAP Developer & Community Relations organization.  The Developer Advocates inform and educate about SAP and related development technologies and also act as the voice of external developers within the SAP organization.

##### Lucia Subatin

Chocolate, cats, computers. [Lucia](https://twitter.com/LuciaBlick) spends a lot of time with the computer, either solving problems or starting trouble. She likes to architect technology solutions to help enterprises run more efficiently. Her cats and chocolate help her bring innovations.

##### Cool things of the week

* Google Cloud learning resources at no cost for 30 days [blog](https://cloud.google.com/blog/topics/training-certifications/expanding-at-home-learning)
* Powering up caching with Memorystore for Memcached [blog](https://cloud.google.com/blog/products/databases/fully-managed-memorystore-for-memcached)

##### Interview

* SAP [site](https://developers.sap.com/)
* OData [site](https://www.odata.org)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Cloud Knative [site](https://cloud.google.com/knative)
* SAP TechEd [site](https://events.sap.com/teched-usa/en/home)
* Cloud Run [site](https://cloud.google.com/run)
* Google Cloud Platform Podcast Episode 166: SAP HANA with Lucia Subatin and Kevin Nelson [podcast](https://www.gcppodcast.com/post/episode-166-sap-hana-with-lucia-subatin-and-kevin-nelson/)
* Qwiklabs [site](https://www.qwiklabs.com)

##### Question of the week

How do I get started with caching? Why should I cache? Brian tells us more about caching, [Memcached](https://memcached.org), and [Redis](https://redis.io).
     
##### Where can you find us next?

Brian is taking it day by day right now.

Mark will be making more videos!

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 215 of the weekly Google Cloud Platform podcast. I'm Mark, and I'm here with Brian today. Hey, Brian, how are you doing?" >}}

BRIAN: Hello, hello. 

MARK: Always good to work with you. 

BRIAN: Likewise. 

MARK: And of course, we're excited for today's episode. First things first, Brian, can you tell us who we're going to be talking to this week? 

BRIAN: Yeah, so we're talking with Thomas Jung and Lucia Subatin about SAP. And I know it's not necessarily relevant to everyone. Not everybody's using SAP, but I found it way more interesting than I expected it. Really looking forward to you hearing it. 

MARK: Yeah, it's a super, super exciting conversation. And I think that it is really helpful because one of the earliest questions we ask is, tell us what SAP means and what that actually means to people who are using it, whether that's a large company that is working with SAP from a business-to-business perspective, all the way down to a developer, right? 

What does that mean for you if you're working on this huge product that has all these different integrations? What different pieces of SAP are actually going to be used? So I mean, it was a good conversation, and I'm definitely excited to have you all hear it. 

But before we do that, let's talk about our cool things of the week. 

[MUSIC PLAYING] 

BRIAN: So we just announced Memcached support for the hosted Memorystore service. We've had Redis. It's now in GA. And both of these are in memory key value stores, and Redis does some more things as well. But Memcached has been around longer, and I think it's arguably even more ubiquitous. So I think that'll be really useful to a lot of folks. In memory caching shows up in nearly every architecture of the system, so take a look at that. 

MARK: So it's a cool tool to try around, and it's in beta right now, right? 

BRIAN: Yep. So it's just in a beta, and it's fully managed. So basically you get a socket endpoint, and that's all you have to worry about. 

MARK: So I think that might actually make for a great question of the week, and we'll dive a little bit more into what it means to use caching and maybe some tips for getting started. 

BRIAN: Oh, well, I'll try to get prepared. 

MARK: Awesome. Well, my cool thing of the week is this quick, little posting that is actually exciting. It's just so awesome to hear. They're actually releasing a whole bunch of different resources that Google Cloud normally uses, but they're making them free for this month. And some of the big ones are Coursera and QuickLabs. Pluralsite's in this list as well. 

And they just have a variety of different topics, all written by different people, some of which who work at Google, some of which don't. Pretty much everything you can think of for the cloud is covered in these different environments. And so just click on the link in the show notes below. You can get the information. But I'm pretty sure you can just visit these sites. I've done the QuickLabs one, and you just have access for 30 days. 

We're also doing some Cloud Study jams, which is something that's been done on the Cloud on Air platform before. And those are basically like interactive walkthroughs, where we'll have someone come on and do the actual QuickLab with you. So it's a great way to get started on some of these longer courses or QuickLab quests that are made up of a bunch of different labs and learning content to have someone kind of walk you through, help along. 

You can ask questions. There's moderators standing by to help you through those things. It's just a really, really great resource. So all of those combined and all of this being free, if you've got some free time on your hands, definitely recommend checking these out and brushing up on any new topics. With our cool things out of the way, let's go ahead and get to talking with Thomas and Lucia. 

[MUSIC PLAYING] 

Thomas, Lucia, thank you so much for joining us today. First of all, can you give us an introduction on who you are and what you do? 

LUCIA: I am Lucia Subatin. I work in Google Cloud consulting, and I specialize in SAP migrations and infrastructure. 

THOMAS: And I'm Thomas Jung, and I work for SAP. I am the head of the developer advocacy team at SAP, where we focus on one-to-one communications with individual developers, trying to help them learn what's out there, what's available, and hopefully make their lives a bit better and easier. 

LUCIA: And I have to say that Tom is very good at that. I used to work with him and even consumed his materials even before meeting him. So yeah, I can vouch for that. 

BRIAN: Love it, love it, love it. I just have to say, anything about making devs and ops life easier makes me happy. 

THOMAS: Well, that's what we try to do. 

BRIAN: I'm going to kick it off here, though, because I have to admit, this is not an area I'm super familiar with. And I hear SAP a lot. It seems like it means different things, or it's big or small. I'm not actually sure what it means when you say SAP. Can you kind of break it down for me? 

THOMAS: Yeah, I think part of the confusion is, is SAP is the name of the company, but people sometimes throw that term out there when they actually refer to our flagship product, which is our ERP software. They call it SAP. Even though it has its own name, now S4, so a lot of times, as I said, people just associate the two things. 

But SAP is a software company, has a lot of different products, technology components, like on a database. We have our cloud platform, which runs on top of various different hyperscalers, but provides business level technology, like workflow and portal services and things like that. But of course, we're probably best known for our business software, ERP, CRM, SRM, supplier relations management, things like that. 

BRIAN: So you just hit three TLMs. 

THOMAS: I know. 

LUCIA: Yeah. 

THOMAS: Oh, yeah. It's a lot of acronyms. 

MARK: So can you tell us what those acronyms are and kind of give us a brief overview of what they mean? 

THOMAS: Yeah. The granddaddy of them all, ERP, Enterprise Resource Planning, which isn't even really a very good name these days. That's kind of the backbone that runs most companies, right? It's your accounting software, together with your ability to purchase things, which just about everybody does, the ability to take in orders. 

Whatever kind of business you're doing, you have to be able to accept orders from a customer and your ability to manufacture or procure those products to sell to your customers. And it's one big integrated piece of software, where all those things live together and share common data model. 

CRM, Customer Relationship Management, that is a little bit more advertising, marketing, sales campaign, all those sort of things that salesmen and marketing people do, right? Which I know a lot less personally about that side of the world. I came from the manufacturing customer. 

And then SRM, Supplier Relationship Management, that's when you have large supply chains. And you need some software to help you manage all the places you buy from, how much to purchase, when to purchase it, to make sure does this stuff arrives at the right time, all these challenges about making sure that everything comes together, so you don't have extra supply sitting around and you're able to get product out at the right time. 

So all these things that whether you run a software company in which you're producing a software, creating widgets, pipe, whatever, a hard product, the software accommodates all those range of scenarios. 

LUCIA: That's also a great point about your initial question and that this is big. And it is big. And one of the reasons why it's huge is not only all the functionality that the software covers per se, but also all of the different industries that are covered by SAP. 

So I, for example, had the pleasure of implementing in an airline. So part of the understanding the business process and translating them into the system meant going into a hangar and looking how they did maintenance of planes. So yes, it's huge because we're talking about at least 30 industries that SAP covers. 

BRIAN: Let's talk a bit more about that user journey because ultimately, like you said, ERP is a huge, huge, heavy term that means quite a number of things for quite a number of people. So if you're in an organization and it's some way and somehow, you've been told, hey, it's time for us to start using SAP, which it sounds like they usually mean S4, that's about all the information you get sometimes. What does that look like? Where do you start with? 

THOMAS: Yeah, and that is usually the way it happens. I mean, it is the type of software that an individual will go and download, right? It's a big thing that sits somewhere else in a big data center or in the cloud now, most likely, and your company as a whole decides to implement it, right? They come to SAP and then they say, wow, we're going to buy your software. And we need 10,000 licenses, 100,000 licenses, or whatever, and then you, as an end user, get one of those licenses, right? 

So it's a very different onboarding experience than maybe a consumer piece of software where you individually are interacting with that. And a lot of our customers, their individual employees may only interact with the software indirectly. They may not even realize they may be running a point of sale terminal, and all that data is going into an SAP system on the backend, but they don't directly interact with it. 

Or they might be in the accounting department and directly running transactions in the SAP software. Or if we focus as they do on developers, what usually gets plopped down on their desk is to say we're implementing SAP. Now figure out how to interface our existing systems with it and write this report, and then you're all of a sudden thrust into a world of technology that maybe you've never experienced before. 

Because we have a legacy of technology that's there, we have a certain amount of openness certainly to the outside world. But there's a lot to learn about the business side of things. Understanding the data model and the business rules and things like that are just as important as the programming languages and interfaces and technical whatnots of the SAP software. 

BRIAN: So from someone who's in IT somewhere, you're either the ops person or this integration kind of person. You know an internal system well, or maybe you're the cloud person or team inside there and you come into this. What problem does this help me with, right? What is this like when you're in that role? What's the normal flow look like, and how do you be successful there? 

THOMAS: It can be overwhelming at first because like I said, there's new terminology. It's got its own language. There's so much history to the product. It's one of the things about our products, ERP in particular and the technology it runs on. We have decades of backwards compatibility. That's both the curse and a wonderful thing. 

There are programs. I know personally one of the first programs that I wrote in an ERP system 24 years ago is still running that company yet today. So it can be an overwhelming amount of history to absorb. But I think if you say what's in it for you, you're going to get close to your business, right? This is software that's going to put you in the heart of what your business does, whatever that is. 

And you're going to get super immersed in that business process by the necessity of the way the software works and even the technology. You are going to become an expert on the business side of things as well. So if you look at this from a career aspect or how it impacts you directly, the SAP technology world is often away into other parts of the business as well because you are going to pick up a tremendous amount of business knowledge working in this area. 

Now that's my perspective from having worked for an SAP customer. I'm interested, Lucia, you've worked with customers, but you came more from the consulting world. How does that reflect the way you experienced it? 

LUCIA: From a consultant perspective, even when I was a purely SAP consultant, it was a super career booster. And I would do it all over again, even if it meant visiting a lot of weird places. There were [INAUDIBLE] there. 

I mean, not everything was as nice as the hangar, but it was completely worth it and there was a lot of traveling. There was a lot of international projects and of course, a lot of impact because you're touching the biggest companies there are in the world. And you're making them run more efficiently. 

And this is something that SAP says in a lot of marketing material, but I think it's actually true. If you look at it from a business perspective, you are helping them get rid of paperwork, get rid off processes that have flaws. You're helping them automate stuff. You're helping them be more lean in terms of consumption. And that also has an impact on the environment a lot of times. 

So from a business perspective, the impact is huge when you're touching those things. And then there's a lot of variety of things in which you can go into. I mean, all of those products, like if you want to be in the CRM space, the Customer Relationship Management, the entire technical stack itself is completely different as if you were in the HR space. 

The HR space I always say is a little tricky because when something goes wrong, you do not want the entire company looking at you because they are not getting paid. And that's the kind of responsibility that you could have in having your hands as an SAP developer. 

And even if you're not an SAP developer, but you're interested in gaining the business knowledge, SAP has been progressively opening up to open source tools, which make it very easy for somebody who has deep cloud native or SRE knowledge to that ecosystem, too. 

BRIAN: So this is really interesting. As somebody who's always, if I'm perfectly honest, like, SAP just seems big and scary and something off in the distance that I never saw before. But one of my frustrations as a developer-- I think a lot of people share this-- is everything is so abstract. It's hard to connect back to what's really going on at your business or your company. And you want to make things more real. And this is an angle I hadn't really considered where this is where things get real for the business. 

THOMAS: Yeah, it's the kind of work that you do as an SAP developer, continuing to perpetuate the misuse of the term there. But let's just focus on an ERP developer then, an SAP, ERP developer. The kinds of work that you're going to do is not very abstract. I mean, I remember the kinds of stuff that I would do, inventory reports, writing tools to optimize how many boxes we can fit in the back of a truck, and the optimal configuration to fit them into the truck. 

Even accounting, which is kind of not very real, if you will-- there's a lot of moving numbers around-- it's pretty easy to see the direct impact that has on your business. I mean, you're writing reports that are calculating the sales that you have coming in versus the costs going out. I mean, this is what's keeping your company going. And you're right in the center of it. It's not abstract at all. 

But by that measure, a lot of developers that work in the SAP ecosystem by necessity have to spend more of their time focused on the business and don't necessarily always go as deep in the technology side, the nuts and bolts of things. They want more pre-configured things that we can put together in the right way for the business without having to always invent all the low level stuff themselves. 

BRIAN: So it's kind of a gluing kind of like thing, like connecting the dots. 

THOMAS: Yeah, it has a necessary impact on the way we as developers work. I mean, I've worked also kind of outside the SAP space and some cloud native stuff. And our own internal developers have to deal with more of that low level stuff, building software as a service on the web, where we have to scale applications. 

They're very focused on the technology, but often, they have no idea how that technology is then utilized by the business, whereas most SAP developers, mostly ERP developers, CRM developers, really in tune with how their software is used by the business, not as much about how the technology goes into it. 

BRIAN: So then this becomes kind of a high priority for SAP S4 developers or ERP developers to really, like you said, understand their business and then start to either glue pieces together or write custom components, kind of build on top of that platform to really add the direct value to their business, whatever that may be, from, like you said, stocking boxes in the back of a truck, figuring out the custom thing that needs to be-- like, what's, basically, the intersection between your business needs and what the ERP kind of software offers to begin with. 

THOMAS: Yeah, absolutely, and having to understand the business requirements and speak the business language and being able to translate that into what the technology can do as well. That's a pretty key component. I think communication skills, written, verbal, I mean, they're important in any developer role, but because the SAP ERP developer is often a bridge between the business and the software, that is even more of a critical skill as well. 

BRIAN: So I want to talk on something you mentioned earlier about deploying SAP, this ERP software in the cloud or on-prem. And then we were just talking about kind of plug-ins to that system, or either building components or reusing existing ones. What does that look like for SAP when it's in the cloud? 

LUCIA: So for developer per se, operating with an SAP system that is set in on-premise versus it set in on Google Cloud Platform, there's hardly any differences. Because SAP has a lot of interfaces and none of those interfaces go straight into the Google Cloud Platform. 

However, something that I've been working on with a team here is how to help those developers who are used to ABAP development-- that is one of SAP's proprietary languages, something I actually got started on, and-- 

THOMAS: How did we go 20 minutes without mentioning ABAP? 

LUCIA: Exactly. It was about time. So ABAP is a proprietary language from SAP and it runs on the application stack for SAP. And it's only deployed on SAP, but it allows these developers to translate all of this business knowledge into queries and develop a program without actually worrying about whatever is underneath. 

So these developers have all this business domain knowledge, and they have great deep knowledge on ABAP. But then they want to do something else. Then they want to add some machine learning, or they want to add components that are sitting in the cloud, like an API, or deploy a container to use some other language and call something else, like a translation, something very simple and necessary, but that may not necessarily be comfortable or a good practice to call within the ABAP stack. 

So that's when I help them go and navigate the Google Cloud and deploy the best serverless for a container or whatever option we have there for them to enhance their SAP ecosystem. 

THOMAS: Yeah, I think we joked about not having mentioned ABAP up to this point. I mean, that's a key part here, is that it's a very specialized development environment and a very specialized language. It's highly optimized for business logic and highly optimized, like we said, to kind of allow developers to focus on assembling pieces without having do a lot of low level technology wiring. 

But that also means that it's not the right choice when you do need to move outside of that environment. I mean, I've done some crazy things in ABAP over the years, but it's not a general purpose development environment. So now when we want to take the core business, and as Lucia said, extend it, do something really innovative with it, whether that's shop floor automation, RPA, hooking in AI to analyze your supply chain and stuff like that, we see these cool cutting-edge technologies, and they can enhance the core business. 

And that's where plugging in to additional functionality outside that ABAP core becomes so important. It's the companies that are innovative. They're the ones that are pushing the edge and need to connect up those things to their core. I mean, you can kind of sit there in your box and live in the ERP world, and that will only take you so far in today's world. If you want to stand out in your industry, you need to be plugging in some of these innovative things. So that's exactly where you get into the process that Lucia was talking about. 

BRIAN: Let's get more concrete here. We've been talking about this ERP system and maybe some serverless and some containers or whatever. What does that integration look like? Does it show up as HTTP requests, or is it like calling out to a shell or some sort of Pub/Sub thing? Or what actually is it when you're making a connection? 

THOMAS: Not calling out to a shell, not from the ABAP environment. That would be evil. That's heavily frowned upon these days. But HTTP, we're heavily, on our side in the technology, heavily invested in OData. So RESTful services with some opinionated structure to them, and we are doing a lot more Pub/Sub, message bus based sort of things, replication based upon events to the cloud. 

And that's a good way to connect up things in a very asynchronous manner, whereas the HTTP requests are more synchronous. So as we take on our premises in the cloud and we integrate it with non-SAP technologies, Pub/Sub is used a bit more as well. 

We've also-- we're not totally behind the times when it comes to technology, web sockets and direct TCP/IP communication. When we do talk about RPA or shop floor integration directly to the SAP software, we can do some cool stuff there as well. Abstract it technologically from the ABAP developer because they just see like an event in a queue, and they don't know if it came across web sockets, TCP/IP, whatever, or open message bus. 

We've removed that technology. Once again, we provide a super opinionated platform. When it comes to ABAP, we've made all the low level technologies decisions for you so you can focus on using that in your business logic. 

MARK: But that means you're kind of giving people who are using S4 a real effective way to be cloud native, right? I mean, now that you're not worrying about a lot of the underlying specific pieces that you might need to deal with, you're really more focused on how do I use this variety of cloud tools on top of S4 to integrate my business logic with kind of the cloud functionality. 

THOMAS: Yeah, I think that's the pro and con of any heavily opinionated environment, is we've made nearly all the technology decisions for you when you say you want to run this in our software. Of course, if you want to break outside of those decisions, then you interface something to it. We've hopefully given you enough open points to do that. 

But it lets you leverage that technology, and like I said, that 24-year-old program that I wrote now runs on a system on a hyperscalar in the cloud. And it didn't have to be rewritten to do that. It didn't have to be recompiled or anything. It's that abstraction layer allowed-- over 24 years, the technology that runs underneath it has changed drastically. But the business logic and the business rules that it was implemented have not changed and they continue to run. 

BRIAN: I just wanted to let that sit for a moment. Because that's huge. Hardly anything in software lives for more than a few years, it feels like. 

THOMAS: Unless you work in the SAP space. Then you get used to that idea that things have to live for decades, not for a number of years. I put that out there not as though it's an exception or some crazy thing. That's the norm in our environment. And that's part of the challenge that we face as we move to Cloud Native, we as SAP face. 

How do we keep that level of continuity and consistency and backwards compatibility in a world where the technology is changing? It feels like every year, there's something new. And even though we try to abstract a lot of that, it's harder and harder these days to keep that rapid pace of change from impacting the customer's business functionality. 

BRIAN: So the more connections you have to other things, the more places that that can fail and on and on and on. 

THOMAS: Exactly. Lucia, you're nodding your head heavily there. You live that on a daily basis. That's what keeps you in business, right? 

LUCIA: Exactly, yeah. Well, there are two sides of this coin. One is you should see the faces of the ABAP developers when I tell them they should be committing code daily. Because they're used to much longer life cycles because the aim is to get the system stable, and there's a lot of risk aversion when you're transporting something into a production. Also because it has a great impact on the business, right? And nobody wants to live their business not operating or stopped in a factory or something like that. 

But at the same time, there's the other side where you come in and say, hey, Cloud Native, you're going to deploy daily. You're going to make changes. You're going to make tests automatically. And they're like, what? Wait. How is that going to happen? Reconciling that world, at least for me ever since I joined Google from SAP, has been a lot of fun. 

BRIAN: Could you share an anecdote or two from that of where things have worked especially well or poorly? 

LUCIA: Well, I saw a project that they were using just from the project perspective. They had a waterfall project, and then they wanted to be agile. So they translated everything to Jira. The activities were in Jira. 

BRIAN: Oh, Jira, got it, so the ticketing system. 

LUCIA: Right. And the waterfall project was in the project plan, so having the balances in Jira, of course, is very challenging. But this team really wanted to innovate. So at the end of the day, we ended up going back to the Jira and tracking the dependencies manually. 

But it's part of the learning curve, right? So there's this notion of wanting to innovate, wanting to do something fresh, and of course, things stay in the middle here because you have people asking for their reports and their reports need to be the same way they've been for the past 40 years. 

And then you have people saying, hey, I want to be agile. I want to have a Scrum Master because the title sounds fine. Then everybody else is new in it, right? So that's something on the learning curve. Then on the other side, there's a couple of customers who are already going into different of our platforms. 

The one that I have been pushing, even when I was at SAP, was Cloud Run. Because it's very easy to have something up and running and deployed in there. We actually built something with Thomas for SAP TechEd last year. SAP TechEd is like our Cloud Next, so a developer oriented event. And we built an end-to-end hands-on mission based on using Cloud Run and one of SAP's models for development as a way of enhancing. 

And we got great feedback out of it because it's very easy for a developer who hasn't seen any of these containers before to go in and deploy something, have it up and running. And then they go back into the familiarity of the SAP supplication programming models, and in this case, enhancing Hana. 

MARK: So what's Hana? 

THOMAS: Hana is SAP's piece in-memory database, so full RDBMS, SQL compatible database, but instead of processing everything on disk like most traditional databases, it is designed to do all of its processing in memory, so not just a cache or using memory. 

Because it is built from the ground up to do everything in memory, it allows us to optimize all kinds of algorithms, the sorting algorithms, the summation, and things like that upon assumptions that it's going to be executing its data directly in the CPU cache or in main memory. 

So it gives us a lot of speed and it gives us a lot of ability to not have to, in our world with analytics and reporting and things like that, pre-create a lot of aggregates so that the reports can run fast. Hana, we can run in real-time against the transactional data without pre-aggregating or combining it into different cubes, different ways of looking at it. And we can slice and dice it in real-time. So that's been a pretty innovative thing that SAP has done. Hana is just now celebrating its 10 year birthday. 

MARK: You know, that's a great example of a very concrete offering by SAP that I assume it similarly can run in the cloud, or it can run on-prem, or you can kind of customize it to your environment. Are there other tools that you think might come up? Again, earlier, we kind of talked about the company has decided to work with SAP for an individual developer that can be very challenging. You can feel very insurmountable because it's such a big offering. What are some other tools like Hana or S4 that you feel like could be good for people to know about? 

THOMAS: Well, I mean, when we look at it from a technology side, we've talked about how in the ERP world, you've got the ABAP environment. But we actually have a set of tools for Cloud Native development as well, what we called the cloud application programming model. It's just really where we've taken Node or Java and we've taken open source components, everything from Spring Boot to Express Stack onto the node side. 

But then what we tried to do was we tried to look at like what ABAP does in abstracting some of the technology and providing business semantics. And we did that for Node and Java. There's a whole programming environment there if you don't want to slip totally into the business side, if you want to develop on the edge and interface. 

And then those applications, because they're very cloud native and they're microservice designed, can deploy directly hyperscalar infrastructure, Cloud Run, things like that. We have technology for AI, but taking a very business slant to it, not trying to-- we're often utilizing, building on top of things like what Google's done in the AI space, but then applying business specific libraries that utilize the core AI functionality and bringing it into the business world, whether that's, for instance, taking AI rules and AI engines and providing pre-built business content for doing safe fraud analysis and purchase ordering, things like that. 

So we apply the business semantics to the technology that partners like Google are creating. What are some others here, Lucia? What are some that maybe you've worked on? 

LUCIA: For ML, one that I remember is looking at matching invoices that are coming on paper to invoices that are in the SAP stack, which sounds easy, but it's not as easy because most of the references are lost. And then that's one of the most boring manual tasks that I've ever seen. It's really-- 

BRIAN: For anyone who's dealt with that, I don't think they think it sounds easy. 

LUCIA: It's not easy because there's a lot of guessing. And sometimes I remember one of these users a long time ago, there was no machine learning, that we were trying to help them with this. And they were telling me that sometimes, for whatever the reason, they got invoices that way were not for that company. They were for another company in another floor in the same building. But that's how cryptic it could get. And now we have a machine learning process, helping those users out. 

BRIAN: So we only get to the stuff that you need the real expertise for, not just the stuff that's obvious. 

LUCIA: Exactly, yeah. It's better use of the humans, right? And then there's some progress being smarter for the monitoring of systems of the actual infrastructure, and that includes security or security breaches. Something that we do internally at Google, there are some efforts to help customers do that with their SAP systems, like detect racial information or detect that somebody is trying to break into one of your systems or whatever is exposed to the internet, which isn't unusual, but it still happens, right? 

BRIAN: That's awesome. 

THOMAS: Well, hopefully, what you see is there's very little pure technology that SAP creates for the sake of technology or for a general purpose. Everything that we produce generally has a direct tie to some business functionality. And almost all of it goes back to that ERP heart and soul in one form or another. So everything's driven by those few business processes that we named off earlier. It drives all of our investment and usage of technology. 

BRIAN: So keeping it real. And I think you're also pushing our tech forward. I'm coming from the VM side of things. And so one of the main pushes for larger and larger VM sizes is SAP Hana, where at least 12 terabyte memory VMs to try to run these in-memory databases. So thank you. 

THOMAS: Yeah, that is an area definitely where we're pushing. I think the whole industry, I mean, for a number of years with Hana, as soon as you show customers the value of real-time reporting, then they want to have more and more data in memory. It starts off with, oh, let's just take a few core accounting things and put it in memory. And then you can do month end close much faster. 

Then they see how fast that is, and then it's oh, let's also do our MRP run, our manufacturing resource requirements planning. And then pretty soon, it's everything in the business. And then before you know it, you need more memory and more CPUs than what most of the industry was prepared to offer in the beginning. And it's really pushed the edge of the envelope, but not for the sake of the technology itself, but to enable those business processes to run faster and in real-time. 

BRIAN: That's awesome. So this has been an incredibly enlightening conversation. Are there any final things that either of you would like to highlight before we close up? 

THOMAS: Hopefully, people have a little better idea of what it's like to be an SAP developer. If it was just sort of a black box to you before and maybe it was this other team in your company that did things and you weren't sure what they did, maybe have a little better idea of what that is. 

A little different than maybe the rest of the software development industry, not SAP developers in general, but business application developers, take a little different mindset, a little different approach, but also take on a little bit more of the business knowledge. They're a little bit of a jack of all trades. 

LUCIA: And I think I can hint that we are working on some QuickLabs that are showing some integrations and some Cloud Native development. But yeah, I don't want to jinx them because they're not fully fleshed out, but that's something that we're working on with Thomas and his team. 

BRIAN: Cool, so watch the QuickLabs site for that. We'll put a link to the QuickLabs entry points. You can look for SAP later. Thank you both so much for the time. 

THOMAS: Yeah, thank you. It was a really good discussion. 

LUCIA: Thank you for having me, too. 

MARK: Thank you so much to Thomas and Lucia for coming in. Super interesting to hear about-- we were talking earlier before the interview. And again, SAP can be a very daunting word because there's so many pieces of it. So it was great to have that kind of clarity and understanding of what these different pieces are, what that probably means, and how that really affects you when your company or your project is going to be involved with SAP. 

BRIAN: I totally agree. And I'm just almost repeating myself again, but I just really love the focus on a kind of developer who understands their business really well and the technology and that bridging sort of thing. I think there's a lot of folks who either they want to get into development from business or they want to get more businessy from development, and they like that interplay. There is a huge need for that out in the world in SAP or in other organizations. So go for it, people. 

MARK: That's a great point, and having someone who really understands the business side of things when they're developing an application or an API especially, it's easy to lose sight of why you're building that and to get caught up in kind of a vacuum almost, where you're just focused on the features. And you're like, well, no, we need to see how this really affects the business. Regardless of whether you're using SAP or not, that's just really helpful to think about when you're making something new. 

BRIAN: I think you could even argue that that's how you really get to be a 10x developer. 

MARK: And on that note, I've got some questions for Brian that hopefully he can 10x as well. 

BRIAN: Nah, no. 

MARK: Yes, yes, yes. I think it's time for our question of the week. 

[MUSIC PLAYING] 

So Brian, earlier, you talked about Memcached being available for Memorystore. And Memorystore also supports Redis. That's great, but if we're kind of coming at this from a new to caching layer, what does this mean? What does it look like to cache? I mean, I guess there was a question in there about why caching in the first place, but at the root of all of this, let's talk a little bit more about how to get started with caching and why should I cache. 

BRIAN: Just caching in general, it shows up at every level of the compute stack, all the way down in our disks and networks and inside the CPU. It's everywhere. So of course, it gets used in applications as well. And Memcached and later, Redis, a really nice abstraction of using memory for multiple processes. So they are a key value store with a kind of simple text protocol that you talk to over a socket. And it stores that information in-memory. And when you ask for it again, you get it back. 

And then Redis adds some additional kind of data types and features on top of that. You get some straightforward queuing. You get a little more kind of structured sub key value pairs if you want and some other things. But by and large, it's that same primary need of store a thing, get a thing back. 

The other thing that they get used for a lot is counters. So if you want to store-- just add one every time something happens, and you want that to be super responsive and low overhead, a new memory place may be a really good place to do that. And as another concrete example, I guess, is keeping high scores, like in a game or something like that. Because you actually need to handle the traffic of every single game that's happening on the backend or caching cookies or tokens or things like that on the back of a website. 

So they get used pretty much everywhere. If you read architectures for different systems, I think you will almost always find Memcached or Redis in there somewhere. Since it's so ubiquitous, how do you get started with it? I think because it is so common, there's really good support for it in nearly every framework. 

So if you're already using a framework that does some sort of database interaction, chances are pretty good it has a configuration place that you would say, oh, here's how to get to my Memcached server or my Redis server. And it will handle the caching in an optimized way for that framework. So that's actually probably the place to start. So concretely, if you're using Django or Rails or something like that, there's a config point in there. And that'll be true for nearly every framework. 

Additionally, at the application level, if there are some additional-- you know every time you call this function, it's really expensive and you want to cache the results for a certain amount of something like that, there are libraries for Redis and Memcached in nearly every language I think, probably every programming language. So look up those words in your language, and get going with it. 

If you're up for a little bit of exploration, I encourage you to go spend an hour talking to them directly. Because if you set up Memcached or Redis, it listens on a socket. And you can actually Telnet to it and talk to it in text. And the protocol is really straightforward. And it really helps understand exactly what's really going on when you're doing it. So anyway, there's just some-- I guess like everything, the answer to how to get started is it depends. And in this case, it depends what software you're using and what language it's written in. 

MARK: And it's something that people need to think about when you're looking at what your entire application looks like, what parts are going to make sense to cache. Like you said, there's probably some parts of your application that might need much more rapid response. And so that might be a great place to put something like a Redis or a Memcached because you can kind of handle it there. 

We also talked in our interview about large in-memory databases like SAP Hana. I've always been taught that disk is slow and memory is fast and at the very broad, broad sense. So a lot of in-memory databases are great places to put caches. What would you do with a cache for an in-memory database? How can you go faster? 

BRIAN: Oh, that's a really good question. I want to bring Thomas back now. My speculation is that the point of being an in-memory database is that it's as fast already. So you're not going to get a lot of benefit by adding another caching layer in most cases, unless there's a bunch of processing that goes with it or something. I wonder if it might make sense to kind of work earlier in their quest. 

I think you may have even suggested this when we were talking about this idea and before the show. But maybe up at the HTTP request level, if there's things that are pages that only get updated every so often, they can get cached automatically with something like Varnish, and the request never makes it to the database at all. So that would be faster than a database request, even for an in-memory database. 

MARK: So there's a lot of things to think about. And again, it really does, like most things, it depends on what your application looks like, what the structure looks like, what you're trying to build. But if you just are running off of pure, like right now, on disk stuff, this Memorystore for Memcached could be a great place to get started and seeing what you can hold in an in-memory database, not having to worry about actually managing it because it is a managed service, and then just being able to communicate with it directly. 

BRIAN: And even just adding that one line of config will have dramatic effects on the speed of your application, number of database queries that happen. And like all things in cloud, if you optimize it, it uses fewer resources and then almost always costs you less money to do that. So it's worth adding that config line, I think. 

MARK: Yeah, I think that does make it pretty obvious. Having that one config like might be worth it. So hopefully that helps people get started, and of course, to check out Memorystore for Memcached. Well, with all that being said, Brian, any cool things you're working on? 

BRIAN: Honestly, I'm kind of taking things day by day right now. 

MARK: It's a busy time, and I think a lot of us are maybe reassessing some projects that we're working on, trying to figure out what makes sense. As always, you can come and hear us on the weekly "Google Cloud Platform" podcast. And you know I'm always working on a variety of different videos that I'm excited to launch on the YouTube channel. So those are probably the things I'll be working on for quite a while. 

BRIAN: Thanks for spending time with us, everybody. 

MARK: All right, we'll see you all next week. 

[MUSIC PLAYING]