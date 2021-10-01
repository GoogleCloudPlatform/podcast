+++
audioDuration = "00:34:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.278.mp3"
audioSize = 49859839
categories = ["API", "Apigee"]
date = "2021-09-29"
description = "Alexandrina Garcia-Verdin and Stephanie Wong host this week's episode all about managing non-REST APIs."
draft = false
episodeNumber = 278
hosts = ["Stephanie Wong", "Alexandrina Garcia-Verdin"]
title = "Managing non-REST APIs like GraphQL and gRPC with Nandan Sridhar and David Feuer"
image="/post/episode-278-managing-non-rest-apis-like-graphql-and-grpc-with-nandan-sridhar-and-david-feuer/images/hero/hero-EP-278.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/pxzih8/episode_278_managing_nonrest_apis_like_graphql/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Alexandrina Garcia-Verdin](https://twitter.com/open_eco_source) and [Stephanie Wong](https://twitter.com/stephr_wong) host this week's episode all about managing non-REST APIs. Guests [Nandan Sridhar](https://twitter.com/srinandans) and [Dave Feuer](https://twitter.com/readyaimfeuer) start the show introducing our listeners to Apigee, a full life cycle API management tool, and the three tenets of Apigee that streamline the relationship between producers of APIs and their users.

APIs have come a long way as technologies have changed, and David explains the evolution of API development and how it relates to the newer non-REST APIs. The consumption of applications has significantly changed, but Nandan points out that developer strategies and experiences have also changed. These advances have led to the popularity of non-REST APIs. APIs are being used in new ways David tells us, and through examples, we hear how Apigee is helping these companies realize their cutting-edge API goals. 

Nandan helps our listeners understand the difference between REST and non-REST APIs and the advantages of the latter in today's technological environments. Each of the four main types of non-REST APIs have their specialities, he explains, like GraphQL which is great for experiences, and gRPC, which has special communication features that increase efficiency. Our guests elaborate on the exciting features of these two protocols and how their uses will continue to innovate business and consumer interactions into the future. 

Our guests offer advice for companies and developers looking to take advantage of these non-REST APIs and help us understand the role Apigee plays in protecting the quality of all types of APIs.

##### Dave Feuer

[Dave Feuer](https://twitter.com/readyaimfeuer) is Senior Product Manager at Apigee, a part of Google Cloud Platform. Previously, Dave ran the Platforms & Strategies practice at a boutique consulting firm, designing and implementing developer programs for Fortune 100 companies. Prior to that, Dave ran enterprise product development and software engineering at IDT and Net2Phone, a telecommunications and payments company. Dave started his career as an embedded software development engineer, and frequently questions how he ended up spending so much time in Google Slides.

##### Nandan Sridhar

[Nandan Sridhar](https://twitter.com/srinandans) works in the Product Management team at Google Cloud, Apigee. Nandan’s expertise includes API design standards, API security and microservices. 

##### Cool things of the week

* What’s your org’s reliability mindset? Insights from Google SREs [blog](https://cloud.google.com/blog/products/devops-sre/the-five-phases-of-organizational-reliability)
* Climate TRACE [site](https://www.climatetrace.org)

##### Interview

* Apigee API Management [site](https://cloud.google.com/apigee)
* GraphQL [site](https://graphql.org)
* GraphQL Documentation [docs](https://cloud.google.com/apigee/docs/api-platform/develop/graphql#graphql-options)
* Announcing Apigee’s native support for managing lifecycle of GraphQL APIs [blog](https://cloud.google.com/blog/products/api-management/how-to-manage-graphql-apis-in-apigee)
* Getting started with Apigee API management using Apigee [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqIYex7RAyE7fCKeKZBTLAJl)
* gRPC [site](https://grpc.io)

##### What's something cool you're working on?

Alexandrina has been working on the [Getting Started with Apigee API Management](https://cloud.google.com/apigee) YouTube series.

[Next](https://cloud.withgoogle.com/next) is coming up soon, too!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 278 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and I am back here once again with AGB." >}}

AGB: Hello. 

STEPHANIE: So how have you been lately? I know it's been a couple of months, at least, since we've had you on the podcast. 

AGB: I've been doing great lately. Thank you for asking. 

STEPHANIE: That's awesome. AGB, who and what are we talking about today? 

AGB: We have the awesome Nandan and David from the Apigee product team. We'll be talking about managing non-REST APIs like GraphQL and gRPC and diving into some cultural best practices for using APIs in general. 

STEPHANIE: Yes. Well, I admittedly know very little about non-REST APIs, so I am looking forward to the conversation. But first, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

So my cool thing of the week is a really amazing blog post by not just one author, but it's actually by our SRE Team here at Google. I know many, many people have been very interested in our book that we've launched in the past, and so this blog post is a really up-to-date version of how organizations should approach SRE practices for themselves. As we know, reliability should be in the fabric of how we all execute, but many companies tend to limit their reliability efforts to what happens after an outage, right? 

So our goal is to help you improve and adopt product reliability practices that will permeate the ethos of your organization. It's not meant to be super prescriptive or apply to all organizations, but it's a way to help you develop your team's culture on the road and give you more of a reliability continuum. And you can also use the blog post to see where you should be on the reliability spectrum. 

AGB: I love that SRE has become very top of mind, and I'm really happy organizations are prioritizing these frameworks and pros more. And, well, to pivot to my cool thing of the week, well, I'm super pumped to share that Climate TRACE, which is the world's first independent, real-time, greenhouse gas monitoring platform. It uses Google Cloud Machine Learning, and it just launched. 

It's really been remarkably hard to put together a bunch of data worldwide, and so these folks have been able to kind of tackle that and find human-caused greenhouse emissions, which is pretty key to working with climate change issues. And as a fun fact, the project won a grant by google.org. It's actually made up of 10 core organizations all coming together and is Al Gore's-- one of his favorite projects. He's very vocal about it. I'm very excited about it. 

In general, their mission is to make a universal, independent, and timely source of truth reality, which I think is super beautiful. And yeah, check them out at climatetrace.org. 

STEPHANIE: Wow. Big applause to that team that's working on Climate Trace. And, AGB, I know you yourself keep up to date with a lot of the happenings around sustainability efforts and climate protection, so I know I can count on you for the latest information here. So thanks for bringing this amazing project to light. 

AGB: My pleasure. 

STEPHANIE: With that, I think we are ready to hear more from David and Nandan about non-REST APIs and Apigee, so let's go ahead and dive into the conversation. 

[MUSIC PLAYING] 

David and Nandan, of course I have to ask you to first just tell us about what you do here and introduce yourself. 

NANDAN: I'm Nandan Sridhar. I'm a product manager with Apigee. I joined Apigee five years ago, just before the acquisition. I focus on the gateways, or the runtime aspects of Apigee, as well as security and the hybrid product of Apigee. 

DAVID: Thanks, Nandan. Hi all, I'm Dave Feuer. Like Nandan, I also joined about five years ago, just after the acquisition, and I'm a product manager on the Apigee team. I focus on our vertical solutions as well as new products and new features inside Apigee. So great to be here. 

STEPHANIE: Yeah. So before I jump into all these curious questions I have, just for everyone who might not have heard about Apigee just yet, can you just give a brief overview of the product suite? 

NANDAN: Certainly. So Apigee is a leader in what we define, or what Gartner has defined, as a full lifecycle API management. API management has sort of three pillars to it. Now, obviously the words already contain API management, so you're managing APIs. But what we really mean by that is we are managing the relationship between producers or providers of APIs with consumers of APIs. And we do that with three basic tenets. 

The first is, there is a gateway or a runtime that enforces policies, like who can do what, which consumers get access to which APIs, how much of it. Then there is a consumability aspect, or a marketplace, where you can publish documentation, view what APIs are available, subscribe to them, and lastly, view analytics for how these APIs are being used, who's using them, and so on. These capabilities are what Apigee provides that other enterprises use to build their API programs. 

STEPHANIE: That's amazing. And it's a great, simple way that you described it. Producers of APIs connecting with consumers and the lifecycle management, including managing analytics, monetization, and more. So I know that today we are actually talking about this introduction of non-REST APIs, but before we jump into that, what was it like developing APIs in the '90s versus today? Can you help us paint a picture of where we're headed in this space with APIs? 

DAVID: So in the '90s, everything was very monolithic, right? We didn't have a lot of different pieces of IT infrastructure that had to work together. A lot of it was sort of-- we had one big infrastructure blob, that we would then bet on, let's say, one specific company for a lot of that IT infrastructure. And then we had to figure out how we'd program it, right? How do we access it? Et cetera. So there was this whole revolution that came where IBM with WebSphere and Microsoft with different N-tier technologies. 

They had web services-based architecture and web services-based infrastructure, and so you could very quickly and easily figure out what your IT infrastructure supported because it was sort of built into your IDE, your integrated developer environment, and so you could go and right click, and you'd get all the functions that were reflected inside of the web services description, and it was very easy and very buttoned up. 

And what happened was there was this explosion of the internet, and this explosion of the web, that led to what we call today the internet economy, right? And so it's no longer about, how do I access my internal infrastructure-- of course, it's important-- but it's also, how do I access other infrastructures? How do I look at a developer program as a strategic asset in my business, and how do I figure out from a business perspective, how do I start to take all these new functionalities that other companies have and package it together to deliver new products to my consumers? 

So in the '90s, when everything was very monolithic and everything just started to break out into different tiers of infrastructure, it was very easy to introspect your own APIs, but as soon as you had to start to figure out other APIs, there was this need for a developer journey. There was a developer discovery aspect of, how do I sell my APIs? How do I offer my APIs? And so there were developer portals and a developer experience, and it was this whole idea of treating the developer like a customer. 

And so that's completely changed the way APIs work. I think one of the big shifts that we see today is that APIs are not just about modernization and not just about internal infrastructure. It's about business and growth strategies and all these new ways of developing products using assets from other companies as well. 

NANDAN: I have another aspect to add to what Dave said, and that's a very, very important point that Dave said, which is consuming applications have tremendously changed, from mobile applications to other kinds of applications that have certainly changed. But the other major difference I see is things that have changes in the realm of developer productivity. And I come from a time when SOAP and SOAS services ruled everything. 

And I came from an enterprise where it was really hard. Agility was not a key thing. It took many months to go from development to production. To get access to a single service took a lot of time. And these are, I think, some of the reasons which led to REST-based APIs becoming more popular. 

AGB: Just as there were language wars in the past, and knowing which language to pick in order to build your application, do you feel there's similar battle in the API world that folks are currently faced with? 

DAVID: Totally. In developer culture, I think we start to see this very sort of tribal behavior where we can get very emotional and very dedicated to a specific way of doing things. And as we know, in many situations, the language itself is not as important as, let's say, the algorithms you choose to use, or the design and architecture you choose to take. The language simply helps you sometimes in that specific direction. 

But we see a lot of the same sorts of things where you have people that are almost obsessed with a given language and love it and want to keep using it, and you see that same sort of behavior, that tribal sort of behavior, with APIs as well. So you'll have your group of people that love REST and REST APIs. You'll have your GraphQL developers who love using GraphQL and want to do everything in GraphQL. And then, of course, you've got the whole gRPC community that's really trying to have everybody embrace gRPC and figure out different ways to drive gRPC compatibility and gRPC out there. 

And I think a lot of the same sorts of tribal behaviors exist in the API protocol world, the same way they did in the developer language world. So totally. 

NANDAN: Totally agree with Dave's point. So one of the reasons customers and developers broke away from SOAP was because it is very rigid with its rules and so on. And definitely, REST-based APIs and some of these other APIs are much more relaxed with rules. But that also means that you have these two groups that kind of form. People who are one of those REST fanatics, that you shall build REST this way, or else it's wrong. 

And then there are others who just take their SOAP services, wrap them in curly places, and think, all right, my API design is done. And the truth always lies somewhere in the center. Pragmatic REST design or pragmatic API design usually is the right answer, but I totally see API design being a very heated debate within enterprises. 

AGB: That makes sense. And just to kind of pivot more from an Apigee perspective, we just launched a series of short videos on the Google Cloud Tech YouTube channel called Getting Started with API Management Using Apigee, for those interested. But for now, David, can you tell us a little bit more about how APIs and Apigee play a role today, especially based on all the challenges you were mentioning earlier? 

DAVID: So, yeah, we talked a little bit about the '90s. We talked a little bit about how APIs used to be about, let's say, accessing infrastructure, right? It's no longer about that. I mean, of course there's a need to access infrastructure, but I think there's a few new movements happening where we see customers using APIs in new and innovative ways and really helping drive new, creative business strategies based on APIs. 

So great example is we have a large Telco customer that's actually using APIs to create a digital nervous system for their business. And so they're able to use different aspects of that nervous system to recompose new business applications very quickly, and very easily roll these new complex offers out to customers, where previously it was taking them 12 to 18 months, which is typical in telecommunications. And now they can do it in six to eight weeks, developing whole new offers, including a SKU in everything and getting that to market. 

So they've built this digital nervous system where they can very quickly compose applications based on APIs, and that's really completely changed the way they do business and the speed at which they can respond to customer demand and all of that. So that's super exciting. 

The second one-- and I'm going to talk about three now-- the second one is really about enriching a brand's digital experience. So if you think of how we've been trained to really expect brands and experiences to be wherever we are in our flow-- if it's a Google Home in the kitchen, if it's an Apple Watch out and about, if it's my in-car experience, if it's my phone experience-- wherever I'm at, I expect my favorite brands to be there and available the way I want them to be. We call that the age of assistance. 

So if you think about that, that's all about APIs. It's like, how do I get my brand to be much more digital and much more sensitive to customers and leveraging CRM and all those things to be not just available but also available and personalized? It's the whole mobile and social approach. That's a completely new thing. And so we see brands saying, I need to use APIs in order to get myself into experiences so that I'm there whenever consumers need me. That's the second way that customers are using APIs, like a new and innovative way. 

And the third one is really an ecosystem extension where we see brands saying, we can get to certain communities of people, or we can get to certain demographics, we can get to certain geographies, we can get to certain people that other brands can't, so how can we open that up as a channel, and really allow others to leverage our existing ecosystem in order for them to get to market in new and creative ways, and in order for those brands to capitalize on this existing channel to this market? 

So going back to financial services, for instance, there's a bunch of demographics that are not very popular in consumer banks, but they're very popular with digital banks, right? So how can the consumer bank sort of leverage the digitalness of other companies that are much more in tune with customer needs and customer wants. And so that's all APIs, where they're using APIs to sort of get that ecosystem extension out of the market. 

STEPHANIE: Yeah, it's a really great visual that you presented there, talking about how your Telco customer uses APIs like a nervous system that's more decentralized and allows them to produce their services faster and have service to service communication, and then this shift over towards this usability by brands for their customers. But the way I see it is that at the end of the day, both are customers-- whether they're internal customers, whether they're brands trying to reach new consumers in ways that they see fit-- but it's no surprise that APIs have become so explosive and standardized today. 

But I know that today we wanted to talk a little bit about this shift towards non-REST API formats because primarily, they have been an uptake of REST APIs in the past decade or so. So, Nandan, let's take a step back. First, just explain for the audience, what is the difference between REST and non-REST APIs and why are non-REST API formats picking up? 

NANDAN: Before we begin with that, let's very quickly see what REST is. And I'm not going to quote all of Roy Fielding's paper on this, but it primarily is a resource-based model of accessing objects. So if you took customer, and now you match it with HTTP. So if you use the HTTP GET, you do a GET on customer, you're trying to access a customer. You POST HTTP on customer, and now you're creating a customer. 

Roughly speaking, that is what most people come to understand as REST. I'm highly simplifying it for this, but roughly, that's what it means. But not everything that an enterprise does quite fits this model of a resource model. We are not always manipulating customers. We are not always expecting a simple request and a response type of a scenario like the one I described. Let's talk a bit about some of the popular non-REST, because each one has found a sweet spot into what problem areas they solve. 

Roughly speaking, there are about four popular non-REST types of APIs. There is a WebSockets, AsyncAPIs, there's GraphQL, and then there's gRPC. These four, I think, are the most popular non-REST models of building it. Of these, again, each one has a sweet spot. GraphQL APIs, which had its beginnings at Facebook, was really meant for building APIs for experiences. Let's take an example, and the same customer object as an example. 

A customer at a bank probably has 100 fields describing the customer, if not more. And you're not going to show all these hundreds fields if you're on a mobile device or a tablet or your web page. You're going to show different things. And what GraphQL allowed you to do is not to build three or four different experience APIs, one for each type of device, but to let the consumer ask for what it is that they wanted. So a mobile device could say, I just want these five fields because that's all I have the real estate to show for, and that's it. 

So the consumer asks for what they want, and the provider fulfills that. Very different from REST, where you just access the resource customer, and what you get is what you get. So GraphQL that way allowed developers to build one API that could work for different types of consumers. The second type of API, which is WebSockets, allowed for some degree of bidirectional communication. Example, you're on a page, and you want your stock ticker to keep getting updated. 

That's a classic example for why one would use WebSockets. There's no user interaction here. Every few seconds, you just want your stock to get updated. It's a great way for your web page to communicate with the server and get the latest on why your stock is behaving. So it's not your traditional model of an API. The server, the minute it gets a new stock update, pushes that information to your web page, and now you can see what your current stock price is. 

So it's not a traditional request-response model. The other one that we'll focus on is gRPC. Now, gRPC has many similarities with SOAP. SOAP was a text-based protocol, or standard, if you will, built over HTTP. SOAP also had RPC in its standard and, of course, a separate document style. And a lot of things gRPC shares with SOAP, with the big difference being gRPC communicates not over text, but over binary protocol. 

And this was primarily done because Google wanted to save on network bandwidth, get the efficiencies of transmitting over binary, and that is what gRPC does. So you get the efficiencies of sending larger data over the network without necessarily consuming as much bandwidth. But the biggest benefit that you get with gRPC is that you have a contract, which is the proto file, which both consumers and providers can adhere to. 

And it's very good for describing processes that are very PC centric. One place where gRPC differs from SOAP is that it allows for bidirectional communication. So clients and servers can both exchange requests at the same time. Either can initiate requests, and that provides for some very interesting patterns. Lastly, AsyncAPIs, which mostly covers event and event streaming type of use cases, which is something that we won't be discussing in today's podcast, but it's another category of APIs which perhaps deserves its own session. 

AGB: Thank you for that amazing and quick overview of GraphQL and gRPC protocols. And as well for Apigee, earlier. Now, just from an API-building perspective, is there anything that personally excites you about any of these items that we've mentioned? 

NANDAN: So GraphQL is exciting because of the possibilities that it does. Of course, as previously mentioned, each consuming application can kind of get to what they want, but I think the power of GraphQL comes in requesting resources that needs to come from many places. For example, very often in a banking situation, it's not just that you want customer info, but you want some account info and so on. And these are coming from multiple sources. 

And GraphQL can help you stitch these together with a single call and say, you want some customer info, some account balance info, or credit or lending products. And now you can make all of this with one call and say, these are the three things that I want about this customer. And that's why GraphQL is very exciting, because you can be very expressive about what you want with very few lines in your request. 

gRPC is separately very exciting because of the efficiency that it brings in, especially for what one would call as internal APIs. Optimizing a single call may not seem much, but when you optimize all the API calls within the data center in large enterprises, that efficiency leads to something big. 

Plus the fact that gRPC is very, very contract centric, using proto files also makes it very easy for developers to know exactly what to look for, what to expect in a request and a response, and so on. So for very different purposes, I'm very excited about these two protocols. 

AGB: Dave, I was speaking to you about this before we jumped on. You also had expressed a lot of excitement. How about we hear a little bit about what your thoughts are? 

DAVID: We don't even realize how much underlying infrastructure has influenced the way we interact with applications, right? For instance, whenever we want to book a plane ticket, we have to be very explicit about when we do queries for like, if you want this date, you choose that day. If you want another date, you have to completely fill out a new form and do another query for that other date. And the reason is it's hitting a mainframe, and so it can't be very efficient. 

And so almost like a typewriter keyboard layout, right? The UI is specifically made to influence slowing you down from creating too many queries, right? So the fact that we can start to see all of this flexibility around different protocols and the fact that that can start to influence new user experiences, and going back to all these innovative use cases for APIs driving ecosystem extensions and new digital sensitivity towards a customer's flow and what they're doing throughout the day, all of that can now be influenced by all these different APIs, right? 

So Nandan was talking about how GraphQL was created originally for experience APIs, and that's 100% correct. But we're starting to see innovative applications of fan-out, right, which is the fact that one GraphQL query can create a whole bunch of different sub-queries to different resources because it treats all your resources like one graph, right? That is actually beneficial for certain use cases around network function virtualisation and software-defined networking. 

And so it wasn't the intention for GraphQL to create those sorts of new innovative use cases, but it's driving them, right? So we're seeing new developer behavior and we're seeing new benefits out of these new APIs. Where gRPC might be considered the most complex option because you have to deal with protobots and sort of treat the objects and serialize them into your code, and that might seem scary and daunting at first. 

It actually creates a certain amount of safety because you know exactly what to expect and you know exactly what you're requesting, as opposed to the dynamic nature of GraphQL where you don't necessarily know exactly what's going to be requested or what's going to be returned. So you have to define that as the developer. So where gRPC might be thought of as the more complex, more efficient solution, it actually is creating secondary benefits, and GraphQL is as well. 

So because of these secondary benefits and all of these sort of developer sensitive oriented tooling that's coming to market, I'm super excited about the fact that we're going to see a whole bevy of new applications and use cases as a result of these new protocols. And that's what gets me excited every day. 

STEPHANIE: That's awesome. So clearly, we have a huge adoption coming our way of these non-REST API formats. So how can IT teams really manage this increase in adoption here? 

DAVID: I think it's tough, right? I think if IT teams try to lead by imposing a standard and saying, you must create REST APIs, then you're going to get a certain type of developer thriving in that environment, and many other developers either looking for a new role or simply not thriving, right? There are really good reasons to choose other protocols. And so what we should really be doing is figuring out how to facilitate creativity and how to enable developers to use the protocol they want, assuming they've sort of gone through the right thinking around them and use of that protocol actually adds a net business benefit. 

IT teams should be thinking about how to best enable and best facilitate those developer experiences. So the way I see it is while REST may have had all the best practices and the long history of being managed inside of large enterprises, we can take some of those best practices from the REST world and we can bring them to the non-REST world. So we can take best practices and bring them to, let's say, GraphQL. And we can say, OK, well, we know, for instance, that GraphQL has one endpoint, not multiple endpoints, right, and interactions are different and documentation is different and all that. 

But we can say, for instance, you need to be consistent. So where we would have, in the REST world, where we would say, don't have a GET, list employees by department. Instead, you should have a GET slash employees. What would that look like in GraphQL and how can you drive the same use of, let's say, nouns and verbs and plurals and not singular, in order to make a more intuitive developer experience and make it easier for developers to understand what API you're offering simply by using the API? 

So the self-documenting aspects and consistency, and the idea that submitting and retrieving data don't need to be mirrored operations. So in REST, we have this whole thing called CQRS, which means that you can basically request and retrieve data differently from different sources. And in GraphQL, we see that plenty of times. Mutations, which are actually requesting data in GraphQL, tend to be a lot more complex in retrieving it. 

And so we take those REST best practices and say, well, you can submit the data with REST and retrieve it using GraphQL and get a lot of the benefits of GraphQL. So taking the REST paradigm and really taking those rules and those patterns and bringing them to new protocols is something that we find incredibly valuable and we see enterprises struggling with, but succeeding with as well. So that's great. And we have early indications that there's a lot of great learnings we have from 20, 30 years of really solid programming practice to bring to the new protocol world. 

The second is that if you want developers to thrive and create an environment where developer enablement is sort of the core of creativity in your software development practice, you can't impose the use of REST. You need to figure out how you're going to manage all these different APIs, and that means authorization and authentication, observability, and all these sorts of different areas of API management that are super important in the old protocol world. How do you bring that to the new protocol world? 

That's sort of how we're thinking about productization of APIs. So you normally think about API products in the context of, as a developer, how do I learn, how I buy, how do I get, how do I use new APIs and new digital products? How do we bring those learnings and bring those to other API styles? So what do we think of when we think about what a developer portal is for GraphQL? What is a developer portal look like for gRPC? How do they try it out, right? 

How do all of these developer interactions work? And so we think API management is a key part of that, basically productizing APIs with these new protocols the same way we've been productizing them with REST-based APIs. And so that's something that we are building and we're working towards. 

STEPHANIE: So this is a perfect segue, because, Nandan, I wanted to ask you how Apigee specifically can help with this management. 

NANDAN: The key summary I took away from David's excellent explanation is that there are some qualities of service we want to provide to APIs. How do you discover and search them, how to protect them, and then how can you observe what's happening with them. And you'll notice that the keyword here was APIs. It didn't matter what that style of API was. And so whatever one would want for REST, it's exactly the same thing one would want for gRPC, for GraphQL, for any other style. 

I want to find out how to use this GraphQL API, which means that I want a developer portal where I can see what the GraphQL schema looks like. And then I want to try that API, and Apigee can help with that. And as a provider, just like I protect my REST resources from overconsumption or rate limiting or from RBAC and say, oh, is this person allowed to access this REST resource or this GraphQL operation or query, I can do exactly that. 

So I can protect the GraphQL API as an example and protect it from being overconsumed through rate limiting. So lastly, once consumers are using this platform, you now want to have metrics over who's using my API and how long did these APIs take to process, and so on. Just like one got experience with REST APIs, you'll get a similar experience for GraphQL APIs that tells you how long your operations took, queries, for example, to process. 

So expectation from the customer is the same. What Apigee provides is the same qualities, but basically level the playing field that your style of API doesn't matter. You should expect the same. 

AGB: And just to add one thing, I love that you can use Apigee both for internal or external discovery and analytics and monitoring. But one of the cool things that I also liked about it was that if you do externalize it, then you can create three tiers. So I thought that was very handy. I've been really enjoying this conversation, and as we are wrapping up to final thoughts, what would you like to inspire developers and technical practitioners to look into more, especially with all this new information? 

DAVID: You probably already have heard this in my tone and sort of the way I'm very passionate and excited about technology in general, but I really feel like we should be very clear about what the business problems are that we're trying to solve, and let's make sure that we choose the right technologies to solve those business problems, as opposed to being very tribal or imposing what security said was the only way to do something, right? 

Let's reconsider how best to meet the needs of the business using the right protocol, right? If the needs are much more oriented towards efficiency and really driving the best possible developer experience to make sure that we have 100% fidelity and knowing exactly what's going to be requested and have all the tooling that you would expect around, let's say, a pre-serialized format, choose gRPC. It's the right solution. If you're really trying to figure out how you get the most developers in the world using your API and it's a fairly straightforward API and it lends itself really well to the REST format and the REST canonical URL view and HTTP verbs and all that, by all means, use REST. Don't feel forced to use some new format just because you want to try it, right? 

And of course, we talked a little bit about the benefits of GraphQL, right? But certainly, use GraphQL where it makes sense, and make sure that you're insisting on the same level of developer experience and developer sensitivity that you are with REST when you form your GraphQL and you create GraphQL that looks a lot more like API products than a SQL query, right? Because it's very easy to get into that on just accessing a data graph that mode, right? 

So make sure that we're choosing the right technology to meet the business needs as opposed to choosing the right technology because we want to be aggressive about trying new things or very tribal about what's always worked. 

STEPHANIE: Well, that's fantastic. Instead of maybe a protocol war in this case, it's more of diplomacy here. And you're doing some great work here, staying at the forefront, staying ahead of the trends to make sure that Apigee is well equipped for a great developer experience. So thanks so much for the work that you're doing, and we had a great conversation here with you, Nandan and David. 

DAVID: Thanks, Stephanie. I did have one more thing. We've done a lot of work to think through a lot of these challenges and work with our developers to work through a lot of the challenges associated with productizing the APIs and these different protocols. Try it with Apigee. Try it once. Sign in for a free trial. Use it. Play with it. I'm sure you'll be very impressed with what you see. 

Nandan and I have worked very hard to make sure that we've built these features into Apigee, along with the rest of the Apigee product development team and engineering team, so that the approach that you have and the benefits that you have when you're trying to build APIs and new protocols, we're able to extend those benefits in every possible way so that you build API products that help reflect what you are trying to do. So don't be afraid. Don't be shy. Please go to the Google Cloud page for Apigee and try a free trial. We think you'll like what you see. 

NANDAN: What makes a product complete is, of course, the product capabilities, but also a vibrant community. We have a great community. It's very active. People from both the Apigee engineering team, product team, as well as people from outside, answer questions, share experiences. So please do that. And second, we've got a great four-minute video for developers. We understand how people quickly want information, bite-sized information, so don't miss the four-minute videos. 

STEPHANIE: Yes, we'll include all those links in the show notes, so great resources to end on. Thanks again. 

AGB: Bye. 

STEPHANIE: So it's clear that we can learn from the best practices of REST APIs and extend them to non-REST APIs. If you look at it, non-REST APIs like GraphQL differ quite a bit from REST APIs in terms of endpoints, interactions, documentation, and discovery. But like non-REST APIs, they still need to be managed end to end across their lifecycle, including how you can productionize those, right? And at the end, I think one of David's points is that product strategy is really driven by business goals. 

So the question is, how can non-REST API protocols help us accomplish these business goals? And now that we know that there's such a huge proliferation of non-REST APIs, of course we need to extend API management features to non-REST. At the end of the day, non-REST formats like GraphQL and gRPC will become dominant and influence these business outcomes. 

AGB: Yeah, I totally agree. And another great learning lesson I picked up from them is that in order for organizations to build what they need, either for their customers or internally, is to empower the developers in the organization to use the APIs that they deem are right for them. And basically, that flexibility goes a really long way, both in helping retain talent-- because folks can build things they are passionate about in a way that they know best-- as it also increases the velocity in which applications can be built as well. 

STEPHANIE: Yeah, having automation around security protocols, monetization, and monitoring, that's really going to help catalyze developers' productivity, in a sense. And so, yeah, I think this was a really amazing conversation that we've had today with David and Nandan. But AGB, I know we just mentioned this during our conversation, but you're working on something along these same topics, right? 

AGB: Thank you for letting me share. Yeah. I just happened to finish making a YouTube series on getting started with Apigee API management, as I mentioned earlier. And it's on our Google Cloud channel now. My peer Kurt and I put a lot of love into it. It's basically seven short episodes, and by short, I mean four to 10 minutes each. And it covers things like, what are coming use cases? How to test out Apigee with a trial account. How does the user and the admin portal work? As well as how to monitor activity or understand your analytics charts, et cetera. 

STEPHANIE: Amazing. Yeah. So we'll definitely include the link in the show notes. Everybody should check it out. I know how much heart and soul and work you've put into this series, so great job. For everyone else, thank you so, so much for listening. Get ready for Next. It's coming up in just a few short weeks. So check out g.co/cloud/next to make your own playlist and see what else we got going on. See you all next week, and thanks, AGB. 

AGB: Thank you. 

[MUSIC PLAYING]