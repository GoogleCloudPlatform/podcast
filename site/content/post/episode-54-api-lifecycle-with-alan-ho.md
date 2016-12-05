+++
audioDuration = "00:35:55"
audioFile = "Google.Cloud.Platform.Podcast.Episode.54.mp3"
audioSize = 50311537
categories = ["API"]
date = "2016-11-30T01:07:49Z"
description = "This week Alan Ho from Apigee joins your cohosts Francesc and Mark to talk about the lifecycle of an API."
draft = false
episodeNumber = 54
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "API Lifecycle with Alan Ho"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/HFse177rHEz"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5fqslt/episode_54_api_lifecycle_with_alan_ho/"
+++

This week [Alan Ho](https://twitter.com/karlunho) from [Apigee](https://apigee.com) joins
your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic) to talk about the
lifecycle of an API.

<!--more-->

##### About Alan Ho

[Alan](https://twitter.com/karlunho) is an engineer and entrepreneur, and leads developer advocacy for 
[Apigee](https://apigee.com) - an API Management provider newly
acquired by Google Cloud. In addition to helping out customers build better APIs, he organizes API conferences and
technical talks on all things APIs. Prior to Apigee, he had started a mobile application performance monitoring company
(acquired by Apigee), and had built large scale web services at Amazon.

##### Cool thing of the week

- Kompose: a tool to go from Docker-compose to Kubernetes [blog](http://blog.kubernetes.io/2016/11/kompose-tool-go-from-docker-compose-to-kubernetes.html)

##### Interview

- Crafting Interfaces that Developers Love [ebook](https://pages.apigee.com/web-api-design-website-h-ebook-registration.html?int_source=resources-main&int_medium=website&int_campaign=ebook&int_content=api-design)
- Open API Initiative [site](https://www.openapis.org/)
- Swagger API Framwork [site](http://swagger.io/)
- Uber's APIs: Giving Developers the Keys to Innovation [blog](https://apigee.com/about/blog/developer/ubers-apis-giving-developers-keys-innovation)

##### Question of the week

When using [Ruby](https://www.ruby-lang.org), developing with Cloud Services, such as storage, how can I write my code such that it's
portable between Cloud Providers?

- Fog [site](http://fog.io/)
- Google Cloud Provider for Fog [github](https://github.com/fog/fog-google/)
- Create a VM with Fog & Ruby: Cloud Minute [YouTube](https://www.youtube.com/watch?v=09-OlnQ6fGs)
- Upload to Google Cloud Storage with Fog: Cloud Minute [YouTube](https://www.youtube.com/watch?v=lhWE6GTphXM)

{{< transcript "FRANCESC: Hi, and welcome to episode number 54 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey Mark, how are you doing?" >}}
MARK: Hi, I'm doing pretty well. How are you doing Francesc. 

FRANCESC: Pretty good. Pretty good. Very busy day with lots of podcasting actually today. But very excited about having, actually, someone completely new. He's a Noogler I'm going to say. 

MARK: Yeah 

FRANCESC: Yeah. He's been working at Google for two weeks. But actually, mostly like two days. And he just joined after Google acquired-- 

MARK: Apogee. 

FRANCESC: Apogee. That's the name. I totally forgot the name. 

MARK: Yeah. 

FRANCESC: Yeah. So we're going to be talking about what is an API, and what is the API lifecycle? And it's a very interesting conversation. He's been doing this for quite a while, so he has a lot of insights on-- 

MARK: Yeah. 

FRANCESC: --what you should be looking at when you expose your API to the world. 

MARK: And it's more than you might think. 

FRANCESC: Oh yeah. There's a lot of things. 

MARK: There's a lot of stuff. 

FRANCESC: Yeah. It is not just like, oh, you should use HTTPS, which you should. 

MARK: Yeah. 

FRANCESC: It's way more than that. So very interesting conversation. 

MARK: Yeah, and after that, we have a little extension from the conversation we had with Aja last week, talking a little bit more about Ruby. 

FRANCESC: Yeah. 

MARK: Talking about how you can interact with, say Google Cloud Services, but with an API and a set of libraries that allow you to not have vendor lock-in. So you could move it to another cloud provider if you so desired. 

FRANCESC: Yeah. Very interesting. Actually, it makes me wish we had something like that for Go. 

MARK: Oh. 

FRANCESC: Yeah. I wonder if there is. We should take it up. 

MARK: We should. 

FRANCESC: But before we get into all of those topics, we have a cool thing of the week, which is brought by yourself Mark. 

MARK: It is. It is. It's brought by me. Yeah. Yes, I brought it by reading blogs. 

FRANCESC: Good job. 

MARK: It's that kind of day. So recently, on the community's blog, there is a really cool tool called Kompose. That was a great alliteration. Kompose with a K. So if anyone who has worked with Docker before-- quite often people, they start working with Docker. And that's cool and it's great. And then they often go to Docker Compose when they have multiple containers they want to work with and have them work together. 

And a question I see quite often in the community is, oh, I've got this Compose thing. But then I want to go to Kubernetes. And I know about Compose, but I don't know about Kubernetes. What do I do? I don't know. And so, this is actually an Open Source tool that lets you take Docker Compose, as well as a Docker DAB file, or a Docker Distributed Application Bundle, and then you can convert it into Kubernetes deployments and services using this command line tool-- either to push it directly up to-- 

FRANCESC: Kubernetes master? 

MARK: Yeah. Or actually just create the files themselves, and then you can edit them as you see fit. 

FRANCESC: Cool. That is pretty nice. So basically, it is like a one-off thing. Like you have a big Compose file that you spent a lot of time building. And rather than having two of them, [INAUDIBLE] just use that, and boom, done. 

MARK: Yeah. Then you're good to go. I think it's a really nice little way of learning about containers and sort of extending them further into different things. And then also, if you're doing a compare and contrast against Swarm versus Kubernetes, it's an easy way to bounce between the both as well. 

FRANCESC: That is very cool. Cool. I think it's time to go talk with our new co-worker, Alan Ho. 

MARK: Let's go do that. 

FRANCESC: So I'm very happy to welcome Alan Ho to the podcast. Hi Alan. How are you doing? 

ALAN: Doing well. 

FRANCESC: So very excited because you're actually the first person that we interview that comes from Apogee. You were a lead developer for advocacy for Apogee? 

ALAN: That's right. Yeah. 

FRANCESC: Could you tell us a little bit more about what you do? 

ALAN: So my main job is to help our customers essentially build better APIs. So I do a lot of-- I work with developers. I also work with not just developers, but also architects to build their API programs-- and help build a better APIs. Give them some tips, and consulting, help them with the project, and I give a lot of feedback to our own product team about the usage of Apogee. 

MARK: And I believe this is your second day at Google, is that right? 

ALAN: Well, technically this is my second week at Google. So we on-boarded last Wednesday. But I was out at an API conference last week right after we on-boarded in Chicago. So second day in the Venice office. 

FRANCESC: Nice, being Venice-- the one in Los Angeles, not Venice, Italy? 

ALAN: No, the one in Los Angeles. You're right. 

FRANCESC: Oh, it's less fancy. It's still pretty cool though. Nice. So we've said the words API-- well the words-- the letters API many, many times already. Why don't you give us your definition of what an API is? 

ALAN: Yeah. Well, an API is an Application Programming Interface. But today, there's a lot of application-- been having APIs forever. But today, when we say APIs, we usually specifically refer to web APIs. Web APIs hosted in the cloud or within your own data center. And so, I think there's nothing-- APIs, probably the better question to ask is not what is an API? But rather, what makes a good API versus a bad API? 

FRANCESC: Then answer that question. 

MARK: Yeah, what does make a good API versus a bad API. 

FRANCESC: We're totally happy with that. Different question too. 

ALAN: Yeah. I think the primary difference is kind of your mindset. And so, there's the mindset for a lot of developers when they create APIs, they think about just exposing their interface, their application through a HTTP interface. That's one way to think about it. But good APIs think more about the consumer. They think about it as, what's the easiest way that a consumer can derive value from the application I built? 

And when I say the easiest way, that means there's a lot of things that are necessary to happen. It's not just throw on an interface and have a PDF to let you code against it. But there's a lot of different steps you need to take for building an API. But I want to turn it around. How does VCP think about APIs? And what makes a good API for VCP standpoint? 

FRANCESC: That's a very good question. I'd say that it's something that empowers our customers to do whatever they need in the easiest and most efficient way. I think that that is maybe a decent definition. I don't know. What do you think Mark? 

MARK: I think you gave a very good answer Francesc. 

FRANCESC: OK. And that was not even prepared. Nothing like that. Yeah, so I think that what you were pointing out is it is not just about giving a way to access our services. Because otherwise, doing phone calls could be also an API somehow. 

ALAN: That's right. 

FRANCESC: It is really as making it as efficient as possible. 

MARK: I think they should bring back fax machines. I think that's-- 

FRANCESC: Oh yeah. 

MARK: --that's what I'm waiting for. 

FRANCESC: --definitely a good API. 

MARK: That's how I'm going to build my API interfaces from now on. 

FRANCESC: So now we have kind of a good definition of what a good API is, let's talk about why. Why would a company create an API? 

ALAN: Yeah. There's actually multiple, I would say, stages of value that a company can create an API. So the first reason is a lot of companies are now building their software actually as micro services. And all micro services communicate by API. So any company that is building a micro service today is essentially building an API. 

That's kind of like the lowest level of value in my opinion. Because it's all about making sure that you create these connected applications and let teams not have to work on one big monolithic application. So maybe that's the lowest level. The second level of companies who are making APIs is that they want to expose their software as a product, right? So basically, especially if you want to create a developer-- if you want to create a-- if you have a core value proposition, and you need to enable developers to build on top of it, they were exposed to the product. 

And the classic example is mobile apps. Today, if you have a mobile app, it talks through an API. It's usually not a web page. And even if it is a web page, it's usually a single-page app. So they're calling APIs. 

MARK: So really, you need APIs so that you could have, potentially, a variety of clients or front ends to be able to access the information that your business or your service kind of provides. Would that [INAUDIBLE]? 

ALAN: Correct, yeah. And it sounds simplistic, but that is the case. And I think the highest form of APIs, though, is more building an ecosystem. For example, Walgreens-- a lot of people know Walgreens is a place where they can pick up drugs or print out pictures. So what they found is that when people go pick up a picture, they end up doing other things. Like they buy some chips, or they might buy a toy, or do some grocery shopping, things of that sort. 

In fact, they found people who does something on the web and mobile, and then come into the store and do something, have almost a 6x increase in the amount of revenue that they spend per store visit. So it becomes an advantage to have as much usage of mobile prior to going into the store. So what they did is they opened up their API to all these photo apps. 

There's tons of photo apps out there, and what they let you do is they allow people to print their photos straight from these photo apps in the store, and pick it up in the store. So that way, they drive a lot of foot traffic, and they have an ecosystem of applications that are driving this foot traffic into the store. So there's multiple kind of levels of reasons and business reasons why you can use APIs. And it just all matters on which particular use case and what drives the most business value. 

FRANCESC: Cool. So as soon as you start doing things like this, though, where you are exposing your API to the world, there's a bunch of things that you're going to need to start handling, like security-- but also like quotas. And I mean, someone is going to need to pay for those pictures. How do you manage those things? 

ALAN: Well so, as we talk about application development life cycles, in a similar way there is what we call the API lifecycle. And I'll step through kind of, and there are probably eight major steps of doing development. And feel free, if you've got questions, feel free to interrupt me. And those steps kind of breaking down to design, develop, securing your API, publishing your API, scaling it, monitoring it, analyzing the people who use the API. And last but not least, monetizing your API. 

And so, for each of these steps there's going to be a set of other tasks to do. For example, when you're creating your API-- sorry, when you're first designing your API, what we recommend is that you start sharing the design of your API with your consumers as quickly as possible. One of the very popular standard is Swagger, which has now been re-branded to Open API. That's a very, very easy way and a language-agnostic way to actually understand whether people like your API in the first place. 

So getting customers to actually start having the design, making sure you have the tools to circulate that and co-edit those APIs, almost like you're editing a Google Doc, is going to be very, very important for making sure your API is consumable. And then the next step of that is that when you're developing your APIs-- I'm not talking about developing the application logic, but your actual APIs-- there's a lot of things you also need to do too. So for example, if your back end so happens to be an old school SOAP service, you may want to create an API with out of the box-- use some way to convert SOAP to REST. 

And especially if you have more complicated use cases, you might actually have to use JavaScript, or Node, or something of that sort to facade your existing back end. Then the next step of that would be to secure your API. So we're talking about having OAuth, SSL-- putting in some, what I would call threat protection for detecting SQL injection attacks, things of that sort. One of the things that people don't realize with APIs is that, unlike web pages, you can leak a lot more data through an API than a web page. 

And a lot of times when people develop their APIs, they try to develop their APIs for as many consumers as possible. So they end up returning lots and lots of information through the API, which is a very, very bad practice. So making sure your API is stripping out things that are sensitive, things that the customer really doesn't need, becomes a very important insecurity. And last but not least, today we got a lot of denial-of-service bots out there, or bots that scrape websites. 

Bots are now getting smart to the point that they can scrape the APIs themselves. So being able to detect what we call low and slow attacks, and then doing things like a honeypot so that you can direct people to a fake API, a mock API, instead of your real data becomes really important from a security standpoint. 

MARK: So it sounds like there's a bit of a balancing act there too. Because obviously, if you've got, say an ecosystem that you're building, and you want people to come and use your APIs, you kind of want to expose as much as possible. But on the flip side, you don't want to expose anything that may be sensitive or harmful. How do you combat that, or at least find that right level of the sweet spot of where that could be? 

ALAN: So that's where what I would actually do is I would look at the particular use case. You might have an API that might be used in a B to B scenario. once Like a server calling that API. Or it might be used directly by a mobile app. In those scenarios, what I would personally recommend is that you split out. You split them into two different APIs. The one for the mobile app might have less information, and it would be definitely protected by OAuth. 

And then, the one that's meant to be called from a server, it might have a different authentication authorization mechanism and serve more data through it. So my recommendation is that if you have multiple use cases that are very, very different, that serves different information-- don't try and jam it all into one API. But rather, have multiple APIs. Now remember, just because you have multiple APIs doesn't mean that you can't still have one implementation. It just means creating multiple facades on the same back-end system. 

MARK: Cool. 

FRANCESC: Cool. There is a question that I've got a couple of times. And since you're here, I wonder if you could answer it. Which is, let's imagine that you want to have your API available to the world. And you have an interest on as many people as possible using it. But you have terms of service. 

How do you make sure that only the people that have agreed to terms of services or things like that-- people that are not doing something that you can see there is abuse of your API have access to it? What are the kind of techniques that you would recommend for that? 

ALAN: So I mean, if you go to most cloud providers, they basically have different quota limits for each user. So the first thing you want to do-- if you want to expose it to the world, the number one thing to do is create a portal, a developer portal where people can, in a self-service way, get API keys. And when they sign up for these API keys, you can assign different quota limits for each of the-- depending on what service they're signing up for. 

And then within a gateway-- this is a purpose of why you would want to have a gateway in front of your APIs. The gateway would be able to do counting and making sure that people don't exceed their particular limits. 

FRANCESC: Cool. So I think I interrupted you in the middle of the API life cycle. So we were talking about how to secure an API. What would be the next step? 

ALAN: So yeah, so after you secure your API you would publish it so that the world can see it. And publishing an API, a lot of times people say, oh, I just need to publish the API in a developer portal if I have a public API. Well, the truth is, even if your API is only being used within your own company, it's probably a good idea to publish it so that people within your own company are not kind of reinventing the wheel. It's also really important to have some sort of issue developer keys even within your own org so that you know who within the company is using your APIs. 

And allows you to communicate to those people when the APIs are going to change, are deprecated. And last but not least, you need that for charge-backs as well. 

MARK: Yeah, so that sounds interesting as well. Now I don't know a huge amount of Swagger about Open API, but does that sort of help with that process of being able to communicate about what's published and what's not published, and how those things work? 

ALAN: Yeah. So the great thing about Swagger is that after you define your model and you define your APIs, you can actually annotate your Swagger document and put the documentation within Swagger itself. And what it'll do is that you can use Swagger editors to generate the documentation-- live, interactive documentation. 

MARK: Cool. 

ALAN: So instead of just having a PDF file, you can create a live, testable UI that you can actually-- essentially, kind of like do curl commands. And it would give you the actual results. So after publishing, then the next thing you need to do is scale your API. And there's multiples, from a scalability standpoint, if your API is being called from many, many clients around the world, you need to make sure that you have almost like a CDN. You have points of presence in many, many different data centers all around the world, especially as close as possible to the consuming client. 

So Apogee has many, many datas-- depending on what kind of service use on-prem version or the cloud version, we're geo-distributed in lots of data centers. And we're going to also be moving not just-- and our main one that we use is Amazon Web Services. But in the future, we're obviously going to be doing Google Cloud and other cloud platform providers out there too. The other thing too is that from a scaling standpoint, it's also really important to remember that you can put things like caching in your gateway, which will reduce a lot of the API calls to your very back-end systems. 

And that could drastically reduce the cost that you need to scale your system. 

MARK: Makes sense. 

ALAN: And then, after you kind of scale the system, the next thing is you've got to make sure the thing doesn't fall over. So having all the dashboards-- application performance monitoring dashboards, and logging dashboards-- becomes really important. And one of the things I tell people is that yes, you might have logging and application performance monitoring on your app. But if you have monitoring and logging at the application interface-- at the API layer-- it actually gives you a much better sense of what the customer is actually experiencing. 

So having monitoring at that layer, not at the application layer, but the programming interface layer, it helps you quickly diagnose whether your customers are having poor-- are meeting their SLAs, things of that sort. Because your application is somewhat-- it doesn't understand which particular users are using that API. Nor does it understand the level of the SLA that they have promised the user. But at the API tier, it does understand that. So that's where it becomes very valuable. 

And then two more steps, just two more. After you make sure that your thing is-- your API is stable and it's meeting it's SLAs, then you've got to figure out who's actually using your API. So when you creating these APIs, it's almost like a funnel. A lot of times developers would sign up for the API. And then, maybe 30% or 40% of them might actually send an API call. And then, of that another, maybe 10%, might actually use your API on a regular basis. 

And just understanding those steps become very important because as developers are using your-- going down this, what I call the developer funnel, you may want to engage them in a different way. So for the people who have used your API, there's actually kind of a magic cut-off point. We found that developers use your APIs for three weeks, and maybe not sending traffic every day. But they use your API for three weeks. You see that the engagement of that user and the propensity for them to buy the product is way, way higher. 

So kind of understanding who's using your APIs and targeting them in a right way becomes really important. 

MARK: Just a quick question. When you say who's using those APIs, do you mean specifically which applications are using those APIs, or actually which possible customers, through those applications, are using those APIs? 

ALAN: Both Both. Both. Yeah. So you may want to see are iOS applications using me more, are Android applications using me more? You might want to segment your applications by the type of app. But then, you might want to support-- you might want to slice and dice between the types of companies that are using it. So is it a startup developer? Or is it a large enterprise? All right, a large enterprise, they're very likely to pay you a lot more money. But if it's a startup developer for a hard startup, you still may want to engage them because they can provide you a lot of great free press for your APIs. 

So understanding who is using you API is-- it becomes critically important for learning how to engage those customers. 

MARK: Cool. 

FRANCESC: Cool. So I think that you mentioned there was a one last. 

ALAN: Yeah. One last one is you've got to make money. 

FRANCESC: Profit. 

ALAN: Right. Profit, exactly. So being able to charge people's credit cards for-- the simple way of thinking about monetization is the Amazon Web Services way. You charge per API call. But the reality is, when talk about these API ecosystems, for example, Walgreen's. They don't charge for their API at all. Because they want people to use their API so that more people come into the store and spend more money. So instead, they might have internal charge-back mechanisms to charge other business divisions whenever their APIs are being used. 

There's multiple-- when you think about monetization, you need to think about directly monetizing it, indirectly monetizing it, or internal charge-backs within your organization. 

FRANCESC: Cool. 

ALAN: So that, yeah, that's the life cycle. 

FRANCESC: So that seems like there's a lot of things that you should take into account whenever you're going to publish an API. Which I guess that's the reason why Apogee exists at all. So I was wondering if you could give us a pretty high view of how does it look to go through this API lifecycle Using Apogee. 

ALAN: Yeah. So Apogee is an API management platform that-- I mean, our goal is to make it very fast for you to get through this life cycle. Because I just rattled off a ton of steps. But the way that we do it is that we provide design tools. So we have a Swagger editor, a Swagger/Open API editor that we've contributed from the Open Source standpoint. But we also have it built into our product. So we encourage people to create their API design, then load their APIs, then proxy their APIs through Apogee's gateway. 

And that provides you the ability to add security, monitoring, analysis on top of it. And then, we allow people to publish developer portals in a turnkey fashion so that you don't have to mess around with Drupal or your own CMS system. And then, we have out-of-box connectors for monetization. So whether it's something like payment providers, things of that sort, we just accelerate it. And we provide all the connectors for you to make it stand up your API program as quickly as possible. 

MARK: Awesome. I think we'll definitely get you back to do a more in-depth analysis of exactly what Apogee can do in the API space. But since we're running out of time, some final questions. I wanted to ask, what's the coolest or your favorite? What's the most interesting API you've come across in all your time working with APIs? 

ALAN: Oh. What's the coolest API? I would say, very recently the Uber APIs are the most interesting. The Uber API, Uber provides APIs so that you can call a cab from anywhere. And this allows you to-- they actually do multiple things. They allow you to call. They have an API to pick up anybody or anything and deliver it to somewhere else. And that drastically changes how local commerce is done because when you create a store and things of that sort, there's an automatic assumption of how-- you create stories based on how far it takes to drive there, or the reach of the store. 

And suddenly, when you have an API that lets you deliver almost anything anywhere within a city in less than 30 minutes, it drastically increased the-- you drastically change how stores should be thought about, and how you can connect with customers. And they also have cool APIs too that, even if you're in an Uber and going to the store, you can monitor what every single person is doing. And then, assuming the user gives permission, and even let them know about products that you're about to see, or before you get into the store itself. 

So they've kind of created this end-to-end trip experience, which is really going to change how people build apps, as well as how people actually-- potentially how cities can be arranged for shopping, as well as living. So I think that is probably the most game-changing API that I've kind of worked with so far. 

FRANCESC: Cool. 

ALAN: And you can go on and on Apogee blog to-- I had a webcast with their Chris Messina, the guy who used to work at Google and invented the hashtag. And he goes through all of those cool use cases. 

MARK: Cool. We'll have a link to that on the show notes as usual. 

FRANCESC: Awesome. All right, before we finish up, is there anything interesting or anything we haven't managed to cover that you want to talk about before we wrap things up here? 

ALAN: Make APIs great again. Just joking. No. That it builds great APIs. If you have any questions, I'm always available via Twitter. And you we'll also have some show notes, get a hold of me. Thank you. 

FRANCESC: Cool. We'll have a link to your Twitter from the show notes if anyone wants to contact you. Great. Thank you so much. 

ALAN: Take care. 

MARK: Thanks. Thanks again, to Alan for joining us today. A very interesting conversation, more at a sort of higher level about APIs. But I think that's really, really good and really interesting. Just a lot of things to sort of consider and talk about when building APIs for services and people to use. 

FRANCESC: Yeah, I think that this is going to be a good reference episode that we might be able to use as a table of contents of topics to go over in more depth. Because every single one of those steps he mentioned in the API lifecycle, I think, deserve an episode. 

MARK: Yeah. They could definitely-- 

FRANCESC: So it's going to be-- 

MARK: --be their own episode. 

FRANCESC: --fun. Yeah. Great, so let's go with the question of the week. And the question of the week today comes not from Aja, but the answer comes from Aja. And the question is, OK, so let's imagine that I'm building this application. And I want to use some cloud provider. So let's say that I'm currently using storage, so S3 on Amazon. 

And I'm considering moving to Google Cloud storage at some point. Is there any way that I can write code against an API or a library that will abstract the detail of what is the cloud provider? So then, to my question would be easier. 

MARK: Yeah. So I think this is really cool. So actually, Aja, who was on the episode last week, does a Cloud Minute video on covering exactly this with storage specifically. But there's a great Ruby library called Fog that literally does exactly what you're talking about. It acts as an abstraction to a variety, quite a wide variety of cloud providers, through compute, DNS storage, and several other services that are commonly available across cloud providers. 

And what makes this really, really powerful is, yeah, I could be running on, say AWS interacting with S3. I work against the API. And then if I want to be like, oh, let's see how this works on Google Cloud storage. Maybe it's better, maybe it's worse. Let's find out. All I didn't do is basically change my provider with my authentication details, credentials, et cetera. And then, I'm good to go. 

I don't have to change my code. I can just push stuff up into Google Cloud storage, or whatever it is I'm working with. And then I can keep on moving on from there. 

FRANCESC: It is very cool. I was checking now the list of providers they have. And it is more than all the cloud providers I know. It is crazy. There's like 30 of them. It is pretty amazing. So whatever it is you might be considering using, I think it's a good idea if you're writing Ruby to go check it out and have an idea what kind of APIs you could use across any provider. 

MARK: Yeah. Cool. So Francesc, thanks again for hanging out with me. Are you doing anything special. I know we have our team off-site coming up. 

FRANCESC: Yeah. So currently, if ever thing went fine, by the time this episode is out, I'm currently hanging out in Shanghai. 

MARK: Nice. 

FRANCESC: Yeah. So pretty excited about that. Holidays basically, and after that, back to the United States to have an off-site with the whole team in Los Angeles. 

MARK: Excellent. 

FRANCESC: So I guess I'll see you there. 

MARK: Yeah, yeah. I will be there. That's where I will be next week-- or the week after that I should say as well. I'm just going to be kind of hanging out around San Francisco. Things are winding down for the rest of the year. So. 

FRANCESC: Cool. And then get ready for next year where I'm, actually, just to give a very short list of things, of places I'm going to be. I will be at GoLab I/O in Florence. Then I'll go to FOSDEM in Brussels, then I go to GopherCon India. And I think that's it for now. That's after February. So yeah. 

MARK: That's pretty good. All I'm really concerned about is Next and GDC. 

FRANCESC: Oh yes, that's in February. 

MARK: Yeah. 

FRANCESC: OK, that's going to be fun. So yeah. Busy, busy year next year. But for now, for this year, pretty calm. Very excited about not doing much. 

MARK: Excellent. Well, like I said before, thank you so much for joining me for yet another week. Have a wonderful trip. And we'll see you all next week. 

FRANCESC: Thank you. And yeah, see you all next week. 
{{< /transcript >}}