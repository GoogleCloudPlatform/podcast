+++
audioDuration = "00:31:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.256.mp3"
audioSize = 45509743
categories = ["Green Computing", "Sustainability", "Carbon Free"]
date = "2021-04-21"
description = "This week on the podcast, Stephanie Wong and Alexandrina Garcia-Verdin are diving into an important topic for our global community: sustainability and carbon aware computing."
draft = false
episodeNumber = 256
hosts = ["Alexandrina Garcia-Verdin", "Stephanie Wong"]
title = "Carbon Aware Computing with Kendal Smith and Chris Talbott"
image="/post/episode-256-carbon-aware-computing-with-kendal-smith-and-chris-talbott/images/hero/hero-EP-256.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/mvkl1y/episode_256_carbon_aware_computing_with_kendal/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, [Stephanie Wong](https://twitter.com/stephr_wong) and Alexandrina Garcia-Verdin are diving into an important topic for our global community:  sustainability and carbon aware computing. Kendal Smith, program manager for Carbon Intelligent Computing, and Chris Talbott, leader of the sustainability product marketing efforts at Google Cloud, start the show telling us why sustainability is so important in the tech world. 

Environmentally conscious data centers are an important part of Google Cloud sustainability efforts. Using computing in the smartest way possible, Kendall tells us,  is the root of green computing. Wind, solar, and other low or carbon-free energy sources are employed at Google Cloud data centers to accomplish this goal. Kendall  and Chris detail the green goals Google has met or exceeded, including carbon neutrality in 2007, and future goals for Google.

Chris explains how Google Cloud customers have taken advantage of Google's sustainability practices and been inspired in their own businesses. Kendall details the Carbon Intelligent Computing Platform and how they adjust compute times to align with available carbon-free energy. We hear about Google's sustainability metrics, including the Carbon Free Energy Percentage, and how these measurements can help Google and its customers run environmentally friendly applications. Chris describes the process he and his team go through when helping Google clients design their carbon aware strategy.

To wrap up the show, our guests talk about the future of de-carbonized computing at Google.

##### Kendal Smith

Kendal is the Program Manager for Carbon Intelligent Computing at Google, which reduces the carbon footprint of Data Centers by exploiting flexibility in compute workloads. She also helps Google engineers build products efficiently, as well as advise other Bets on carbon measurement and tracking. 

##### Chris Talbott

Chris leads sustainability product marketing and customer engagement efforts for Google Cloud, and works on opening new Google Cloud data centers throughout the globe. He helps customers improve the environmental impact of their IT operations and identify new opportunities to tackle climate change challenges with cloud technology.

##### Cool things of the week

* Active Assist’s new feature, predictive autoscaling, helps improve response times for your applications [site](https://cloud.google.com/solutions/active-assist)
* Maximizing developer productivity [video](https://www.youtube.com/watch?v=JypfRNRmaXk)

##### Interview

* Google Carbon Aware Computing Workshop 2021 [site](https://docs.google.com/forms/d/e/1FAIpQLSeo6O4-RNGex3k0Ci1qiDw1vgUOedbTbKii7-YZ2cqJCgvW3g/viewform?resourcekey=0-OWLZFWcuUjH5N2lzDa12dw)
* Our data centers now work harder when the sun shines and wind blows [blog](https://blog.google/inside-google/infrastructure/data-centers-work-harder-sun-shines-wind-blows/)
* How carbon-free is your cloud? New data lets you know [blog](https://cloud.google.com/blog/topics/sustainability/sharing-carbon-free-energy-percentage-for-google-cloud-regions)
* Google Cloud Region Picker [site](https://googlecloudplatform.github.io/region-picker/)

##### What's something cool you're working on?

Alexandrina is working on a new series called People & Planet AI. The first episode, [Recovering global wildlife populations using ML](https://www.youtube.com/watch?v=hUzODH3uGg0) is out now. She's also been working on internal websites to share climate information.

Stephanie has been working on a blog post about AppSheet Automation, which we talked about in-depth [last week on the podcast](https://www.gcppodcast.com/post/episode-255-appsheet-automation-with-jennifer-cadence-and-prithpal-bhogill/). 

 {{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone. Welcome to episode number 255 of the weekly Google Cloud Podcast. I am Stephanie Wong once again. And here, I am with Carter Morgan, who is another new host that I haven't had the pleasure of having on just yet. So welcome to the podcast again, Carter." >}} 

CARTER: Hey, Stephanie. Thanks for having me. I'm super excited. What are we talking about this week? 

STEPHANIE: So we are talking to Jennifer and Prithpal from the AppSheet team. And they just came out with a new product called AppSheet Automation. So we're going to be diving into what that is, and how this no-/low-code experience is changing the game for a lot of people. So I'm pretty excited to dive into that. 

CARTER: I'm excited, too. I love AppSheet. I think you know that about me. But, you know, before that, I think the GCP Podcast, they always do something, like cool things of the week, right? 

STEPHANIE: Yep, yep. So let's go ahead and jump into the cool thing of the week first. 

[MUSIC PLAYING] 

OK. So I want to highlight a couple things from our team. We work on the Online Content team here at Google Cloud under Developer Relations. So two exciting things have come out. So I'm going to talk about the first one, which is called a choose your own adventure series that our teammates put out. 

This brings me back to the '90s. I used to read books that are choose your own adventure. You know, you are reading a novel, and you flip to page 89. You flip back to page 26 depending on what you choose. And if y'all have seen the Netflix series "Bandersnatch," very similar to that, interactive. 

It's super fun. It's great. I'm proud of Max, Bukola, Roger, and Seth, who have created this really extensive 16-part series based on what you choose for the characters in the videos. And what it's about is a hot, new, fake startup who's found explosive growth overnight. And luckily, they run on Google Cloud. 

And so you are here dealing with whether they should choose manage instance groups, load balancers, content delivery networks, and more than that. What happens when a tiny company gains national attention and user traffic is skyrocketing? Should they scale up their back ends or speed up the delivery of their assets? How do they handle data analysis at scale while protecting privacy? 

Can you help them navigate their scaling challenges in this choose-your-own-adventure video series? Everyone, please check it out. We're going to have a link in the description. It is a super fun and engaging series. I had a ton of fun going through and a couple of laughs. So go ahead and check that out. 

What about you, Carter? What's the other thing? 

CARTER: OK. Well, keeping it in the spirit of the team and cool things the team have done, our teammate Alexandrina Garcia-Verdin did this project called "Recovering Global Wildlife Populations using ML." And they use a lot of Google technology to really focus on sustainability and make it so that people that care about the environment-- which should be all of us-- that want to be able to help out, can do so without being intrusive, without having to go into these habitats and maybe disrupt them. 

And so what they are using is machine learning, this AI platform Unified, which uses AutoML. And what they're doing is they're taking a bunch of images with all these cameras set up in the wildlife, and they store those in cloud storage, and then an ML model is running over that and analyzes it and comes back with a bunch of insights. And there was a ton that's interesting. So definitely check out the blog and the video. 

But something I found really interesting is that normally these kind of ML models take days to run. And somehow, they made this work in two to three hours. So I think it's great that Google was able to partner with people in leading conservation organizations to build this project. It's called Wildlife Insights. So if you're interested in that, definitely check it out. It is a very cool thing of the week. 

STEPHANIE: Yeah. It's also right in line with Earth Day. I feel like it's perfectly timed. But I'm super proud of AGV for coming out with this series. She's worked really hard on it. It's a great format, very engaging, great footage, interviews with the people from the organization. And there's more to come in that series. So a round of applause for our team this week. We've had some pretty big wins. 

[APPLAUSE SOUND EFFECT] 

CARTER: Yeah. I'm proud of them. Proud to be a part of this team. 

STEPHANIE: Same. All right. So before we get too excited, let's go ahead and jump into our interview with Jennifer and Prithpal from AppSheet. 

[MUSIC PLAYING] 

OK. We are here with Jennifer and Prithpal to talk about AppSheet Automation. Thank you both so much for coming on to the podcast today. 

JENNIFER: Yeah, thank you for having us. This is exciting. 

PRITHPAL: Super excited to be here. 

STEPHANIE: Yeah. So, OK. AppSheet Automation. We haven't talked much about AppSheet recently, so why don't you both start off by telling us a little bit about your roles, what you do, and a little bit about AppSheet? 

JENNIFER: So my name is Jennifer. I am a product marketing manager on AppSheet. I've been with the company for some time. I was with AppSheet before acquisition. So I've been through that whole journey as we've grown with the Google Cloud family. 

PRITHPAL: And so this is Prithpal. I'm the lead product manager for AppSheet. And super excited to be part of the AppSheet journey. I've been part of Google Cloud prior to the acquisition and have been impressed ever since we had AppSheet in our family. And now with Automation, looking forward to some exciting days ahead. 

CARTER: Very cool. I'm super excited about this episode. Could you tell us and the audience just a little bit about what is AppSheet itself as a platform or tool? 

JENNIFER: Yeah, absolutely. So AppSheet is a no-code platform that provides anyone the ability to build applications without code. And we'll talk about this more in detail in a bit. But that could be a line of business user, It could be an IT professional, it could be someone looking for a personal project. Like renovating your house, for example, you could build an application to help manage that. It does this all with intelligence and with your data. 

So instead of having to learn a coding language, your spreadsheet fills that gap. 

STEPHANIE: We've talked about automation. We mentioned it briefly. But why automation in the world of AppSheet? Can you give us a little bit of historical background of how we got to this point in the product strategy? I know you also mentioned that there was an acquisition. So where are we at now? 

PRITHPAL: So I think automation is actually a very common part of many of our customers' daily lives. And today, they are using AppSheet to be able to automate some of those capabilities and use cases. However, we felt like although we had some basic building blocks for automation within the platform, it lacked like a first-class focus and feature set. 

So with AppSheet Automation, we are really able to now provide first-class capabilities for our customers to better automate their processes and leverage the power of the unified platform to build some awesome apps and also powerful automations. 

JENNIFER: And then from a kind of cultural and timely moment perspective on why no-code is really embracing this concept of automation-- I'm going to go in kind of a roundabout journey here, but I promise it makes sense to stay with me through this. 

CARTER: OK, OK. 

JENNIFER: So when automation was first being discussed within the AppSheet context, I don't think we had planned that a pandemic was going to happen. And a result of that has been that we've all really been re-evaluating how we live, how we work, and what our families are, right? I mean, this is something that every individual in every organization is starting to re-examine. 

The group that's all on this podcast right now, we're all based in the US. So I'm going to talk about a few things from a US perspective. Also, just as a white woman living in America who happens to work, a few of these things are going to be really important. 

But humans operate in a system that is built by and for a default person. And that person typically tends to be a white male. There's a really, really good book by Caroline Criado Perez called "Invisible Women." Highly, highly recommend everybody read it. I actually keep it on my desk all the time, full of tabs, because there's some great data points in there. 

But she talks about this concept of default maleness and how we're all trying to adjust to that in different ways all of the time. That causes mental fatigue, for one. In her book she points out that one of the big drivers of the workforce is that men receive paid labor, and women are the unpaid labor. That unpaid labor, according to McKinsey, is worth $10 trillion in GDP. 

STEPHANIE: Wow. 

JENNIFER: That's an estimate, because it's actually too complex to calculate that number, which speaks to a different problem entirely from a global perspective. Why am I discussing all of this when it comes to this context of automation? Because, again I told you, I was going to take you on a little bit of a journey with this. 

So one, technology does not happen in a silo, period. Like, it has real-world implications and real-world impact and consequences for how we live our lives and how we work, period. Again, this is through a mainly US lens, but this is going to be echoed throughout the world in different ways. 

Two, when it comes to our time, our time is the only renewable resource we don't have. Money we can make, trees can grow to produce new things, et cetera, just as an example. But there are a number of other things that can be reproduced. That time is something we'll never get back. 

Employees are losing an estimated 20% of their time to tasks that could be automated. Those are manual, tedious things that we are all losing our time to each week. That's one day per week that we're losing. And that causes a lot of frustration. 

It's also mind space and time that we could use to focus on either high-impact work. Or when we revisit that kind of gender concept again, it's also a mental space that women can use to navigate their day-to-day lives, focus on work or remove the emotional burden, or provide space for that emotional burden that we often have to carry throughout our days. 

The likability piece, for example, is something that takes a lot of mental strain. That's compounded even more when you factor in race, class, those within the trans community, et cetera. So I'm not saying automation fixes all of these things on a systemic level by any means. But when you combine no-code and automation together, it does provide a technological solution to some of the problems that systemic issues have created. 

So there's a huge opportunity there that we're ignoring. And last little thing I'll mention is from a retention standpoint for companies. This one's really big. 85% of the workforce is disengaged right now. We either don't like our jobs or frustrated. We're not happy. 

Can you imagine if 85% of your workforce got up and left because they were spending their time on work they didn't want to do? We can fix that. We should probably as a culture re-examine that, and use technology like this to help. 

STEPHANIE: Wow. 

CARTER: I love all that. You took us on a journey right there, and it was an important one. You know, I want to back that up a little bit, because like me, I have ADHD. So my brain doesn't always do things that are very manual or easy to automate. A lot of my life is actually finding tools that automate some of this stuff. 

And so that's why I'm so excited about AppSheet. And I love what you say-- like, 20% of time lost to manual tasks that can be automated. Those are huge, huge, huge, huge gains that we could get by just putting some time into tools that help remove that burden. 

JENNIFER: Absolutely agree. 

STEPHANIE: The other thing I was going to say is, most people talking about automation are saying it from a business perspective. This is going to save your company's revenue and bottom line. But what you're doing here is contextualizing from the perspective of people's day-to-day lives. And it does have real tangible benefits. 

And you're saying it's not going to solve all these systemic issues, but it can help you focus on higher-value work, as well as give you opportunity to make movements in the areas that matter-- for women or whatever other marginalized groups that you may be a part of. So thank you for putting it from that perspective. 

PRITHPAL: In a sense, it actually helps companies innovate much faster. If you look at today's currency, which is differentiation and innovation, it is really achieved by all the knowledge workers focusing on high-value tasks, as you mentioned. 

So with automation, a lot of the manual day-to-day tasks can really be automated behind the scenes. It really helps companies differentiate and innovate by focusing on the higher-value stuff so they can take to market much more faster because they have automation in place. 

CARTER: So when it comes to this automation, you said earlier there's a unified platform. So I take it that people are able to use a lot of different apps or automations in one central location. How does that work? 

PRITHPAL: Yeah, let's talk a little bit about that. That's a great question. This has been our design principle from the get-go. What we mean by a unified platform really is, any application creator can actually use the exact same platform and the same editor area to be able to build delightful applications and powerful automations, without having to leave their screen. 

This is actually very important, because we hear repeatedly from many customers that they have to, in some cases, work with completely disparate or separate platforms for building apps and automation and put in the extra task of wedding them together to get something meaningful working. Well, that's one big area where AppSheet really differentiates. 

Because it's a unified platform for apps and automation, the app creator can go into the console, create the apps, wedding automations right from the same screen. And that has huge productivity gains for them to be able to roll out anything that they're looking to do much faster. 

JENNIFER: I was going to say, Carter, you mentioned the ADD piece earlier. So imagine doing all of this work within one screen. You don't have to switch between multiple tabs unless you're going into your data source itself, but you can build these automations on top of the applications that they're running within, without having to jump around. 

CARTER: Sounds like heaven. 

JENNIFER: That's a huge shift in how we're working now. It's pretty remarkable. 

PRITHPAL: As you're talking about data, I think one thing to also note is, one of the other key design principles that AppSheet is built on is, you data stays where it is. AppSheet does not require you to move data into our cloud. You simply point and click to your data source, and all the magic happens. AppSheet is able to read your data, transact, and build applications on it, and now also use automations to be able to drive many processes, all based on wherever your data is located. 

STEPHANIE: Yeah. And I think there are two things here. It can lower the barrier and make it more enjoyable experience and democratize that experience of development for more people within the business. At the same time, it makes the developer experience for those traditional developers more delightful, because it's unified. 

Talking about some actual use cases here, do you have canonical use cases of current customers that you've seen using AppSheet Automation? 

PRITHPAL: Oh, there are actually several of them. And I think I'll just maybe touch on a few different ones which have been a lot more common. So I think a very simple use case is on employee onboarding. We have several customers who are actually leveraging the platform to solve those kind of use cases. 

It's as simple as when employees get on to a company, they want to be able to share some useful and contextual information, like sending them links or an employee handbook, provisioning accounts in the background for many different systems. These are all tasks which you'd be surprised many customers still rely on some manual ticket creation. But with AppSheet Automation, a lot of them can be very quickly automated using a bot, which can really drive a lot of these steps for you behind the scenes as new employees get on board. 

So employee onboarding, that happens to be a very popular one. Some of the other ones we see are in the area of field service and customer support. So we have several customers where they use, as an example, Salesforce for their customer support operations-- keeping track of customer relationships, so and so forth. 

And there are many times where they have field service team within the same organization which really want to be able to stay on top of incoming customer requests, and so they want really reliable automation in place to be able to synchronize these systems together so none of the field service team or the customer support team has to wait for each other and synchronize anything manually. The automation bots can actually help keep the systems in check. 

And lastly, I think, there are at large use cases around document processing. So we have several of our customers who have invoices, as an example, that they receive for which they need to make payments against. And in many cases, usually they are human beings who are going to an email, downloading that invoice, try to just figure out what the payment is, and make it. 

Today, you can leverage the power of AppSheet Automation to be able to automatically process documents using our intelligent document processing capabilities which have been powered by Google Cloud AI, and really make for a very, very smooth operation for streamlining a lot of the invoice processing. 

JENNIFER: And I want to mention one thing really quickly about all of these use cases that he mentions. At the center of all of this-- and this kind of goes back to some of the points we raised at the top of this discussion-- there's a human in the loop. The machine is not doing all of the work. The human is providing context for what the bots need to be doing and performing. 

They are part of the conversation. They're just not doing the heavy lifting. 

PRITHPAL: That's a great point, Jennifer. Let's take a concrete example of that. So in invoice processing, you have-- in some cases, this could be based on maybe the invoice amount, so rapidly use AppSheet to be able to say, if the invoices are greater than $1,000, maybe a finance manager needs to get involved. And the platform needs to make sure that it only processes the payment if approval is received from that finance manager. 

So that's a great example of how approvals can be leveraged into the mix. And because it's a unified platform for apps and automation, customers can actually use the app componentry of AppSheet to build some really, really custom approvals, which is pretty awesome. 

CARTER: That is very powerful. And so we're starting to touch on this idea of intelligence and AppSheet being smart enough to handle a wide variety of use cases, you said-- employee onboarding or document processing. So AppSheet can pull in all these different data sources from all these wide ranges. How does it know how to look at that data? 

Is there some way of processing this data from different sources or somehow intelligently saying, we want to do this action with that type of data? 

JENNIFER: Oh, you're asking for a look behind the curtain, Carter. This is very like "Wizard of Oz" moment right now. [LAUGHS] 

STEPHANIE: Hopefully we're asking the right people. 

PRITHPAL: Let's take a step back and think about what intelligence is broadly within the AppSheet platform. One of the other key design principles for AppSheet have been, it's powered with intelligence. But what that means is AppSheet at multiple levels has intelligence baked into the platform. 

So let's take some concrete examples. So one of the first few things we do with a platform is point AppSheet to a data source. AppSheet is a schematized system, which means once you point us to a data source, which is Sheets, or dataVoice, or Salesforce in this case, it starts to understand the structure of your data. It understands and identifies dependencies, relationships. 

So as an example, an order has line items. It understands these common collection and dependency types and is trying to bring a mental model and graph in its memory to say, but what are some of the operations and things that someone can do with orders and the line items? So that's step one. 

Step two is, as app creators use the platform, using things like keyword search, we're able to understand the intent, and we leverage the power of Google AI and use natural language processing to be able to compose those keywords into, well, what exactly are they trying to do? 

So as an example, if they go and try to create a bot and type in some keywords when they click on a new bot, and if they put in order and update and amount, well, we can really triangulate that and say, well, perhaps they're looking to build a bot which wants to trigger something based on an order update at a specific amount. In those cases, the platform can very quickly compose suggestions. And if the user selects those suggestions, they actually have a pre-implemented bot ready to go-- a completely working bot which they can tweak and iterate as they go, and really helps immensely in terms of cutting down the time that customers need to be able to build these automations. 

STEPHANIE: Wow. That's impressive. It's taking care of a lot of that day zero/day one development that is usually most of the heavy burden. And I think also, just the fact that it's intent-aware and leveraging a lot of Google's expertise in building these APIs for machine learning is just a reflection of how we are continuing to push the boundaries in this space. 

Curious whether or not this platform can be extended beyond just machine learning. APIs that are built into it already. But can people integrate other Google APIs? 

PRITHPAL: AppSheet is built with openness in mind from the get-go. So ever since the conception of AppSheet, we've always supported things like invoking webhooks. So as an example, if you need to call any REST API, we have first-class support for it in the platform since a long time. 

We recently, last year, added support for an AppSheet data source for Apigee. And that is the other product within the business application platform portfolio for Google Cloud. And as you know, Apigee can really help manage and secure the APIs for several different use cases. 

But the good news is, any of those APIs can actually be interacted directly from within AppSheet using the Apigee data source for AppSheet. What that means is you can point, click, and create applications, against those APIs, using all kinds of views and advanced charts very quickly you can create application against APIs. 

So it's fairly open. They can also connect to any API which works against the OpenAPI standard, as an example. Webhooks are supported. 

One of the other things you're going to see us do a lot, and which is also in the roadmap, is around becoming much more tight with the Workspace ecosystem. And what I mean by that is we have several of our customers who are using Apps Scripts today to be able to extend and put in some custom logic that they want to be able to do on top of APIs. 

With AppSheet, now you can actually tap into that ecosystem and directly interface with Apps Scripts functionality that you built in, and use that within the apps and automation. 

JENNIFER: That openness has been part of AppSheet's mission. As Prithpal mentioned from the beginning, that's why we consider ourselves a democratized platform. We meet you where you're at, no matter where that may be, and help you build applications and automations, all with your data and the power of no-code. 

CARTER: Listening to this conversation, and I'm seeing places where there's a lot of things that I do currently with Apps Script that I think would be a lot easier and a lot quicker, and probably a lot more powerful, if I looked into and learned more about AppSheet. 

So what about automation within Workspace and G Suite? Because I do a lot within Google Docs. How does AppSheet work there? 

PRITHPAL: One way to think about that is, we've had this add-on for Sheets since a while. And what that means is you're able to point, click, and create an app from a sheet while being in the Sheets interface. So just adding on to what Jennifer mentioned, we bring the platform to you wherever you are. 

If you are a knowledge worker which uses Sheets, as an example, to manage your day, with the AppSheet add-on, you can just point and click and generate an app from that experience within minutes. That's number one. 

And number two, in terms of automation specifically and how it blends well with the extended Workspace ecosystem, you can imagine things like Drives and Docs have a lot of tools that they support today. The simple approvals-- essentially you have a doc when people are collaborating, and they want one person to do what looks good to me and then pass the baton to the other and the other. We can use AppSheet now to really extend those approvals and bring in support for complex approval. 

Because AppSheet works with a variety of data sources which is not limited to just Sheets, but also supports databases, applications like Salesforce and SAP, you can really bring the power of all the enterprise applications and really extend the kind of approvals that you support within the Workspace ecosystem. So that's number one. 

I think number two, we also have a lot of initiatives in flight, which can make for an awesome experience in terms of, as an example, document-based processing. Let's just kind of talk about that briefly. Recall, documents are things in general which are fairly central to many of our customers' use cases and business processes. 

One example of there is to kind of leverage some more Google goodness, in this case, specifically Google Document AI, to be able to take a look at a document and automatically extract. So as an example, if you present an invoice which is uploaded to a Drive folder, AppSheet can inspect that, extract content from that PDF as an example, put data into a structured way in a table, and trigger a process which can then work on that data in that table. That is very powerful. And all of this occurs using a simple point and click. 

So I know we kind of span different spaces. We spoke about Workspace and how AppSheet has been present in the Workspace ecosystem from the get-go. In fact, the name of the product and the company, AppSheet, was building apps, easily against Sheets. 

Next, we covered a little bit about how automation directly kind of complements the Workspace ecosystem brings to our customers. And thirdly, we also touched a little bit on the second part of the intelligence piece, which is intelligent document processing using Document AI. 

STEPHANIE: Amazing. I mean, I just want to emphasize this, because even in my previous company, this is something that customers had always asked for. We need something to automate workflows, especially for approval processes, that are very cumbersome-- whether it is receiving invoices, doing approvals that kick off another process, and then sending an email with a PDF summarizing the whole thing and making sure that kicks off something else. 

But then in this case, it's even more so, because as you said, we are extending that capability using automated processes, the magic, I'll say, of machine learning APIs, and the fact that it's extensible to APIs that you're developing and managing on Apigee and other sources that sit within the Workspace ecosystem. 

So I feel like we're at the cusp of this moment right now where we are beyond just making glue that sticks all these pieces together, but we are allowing you to actually do more than that, and things that you really don't want to take care of yourself. Like, who wants to actually develop an entire custom ML model that you may not want to spend the resources, like Document AI, for example? 

PRITHPAL: Typically, we find customers have a separate vendor solution just for the document processing piece. Imagine the power of all that in a unified platform delivered through AppSheet. I think it's pretty powerful. 

JENNIFER: And one thing we should add, just speaking of being on the cusp of something, and to kind of bring culture back into the conversation a little bit-- companies at large are re-evaluating how they want their employees to work and how they want their employees to spend their time, right? And that's something that we'll come out of this pandemic with a new understanding of what that will look like. 

We have a number of individuals who are reaching out to us, organizations from around the world, who are saying, can you find me people who are AppSheet experts, no-code experts, to work full-time as an employee for me to develop no-code applications and automations to help our company be successful? If you go on freelancing websites now, you will find roles for AppSheet no-code developers. 

We call them creators. They're put on the postings as developers. But it's fascinating that this is happening. And the expectation is that the demand is only going to continue to grow. I think 2 billion people, potentially, could be what's called a citizen developer. 

STEPHANIE: So looking towards the future, what can we look forward to in terms of AppSheet and AppSheet Automation? 

JENNIFER: Upskilling is really important right now. McKinsey had another report come out just a few weeks ago that said 25% of the workforce needs to consider upskilling in an effort to keep up with the times for what jobs are demanding now. No-code is a way for those-- and no-code automation, I should add-- are ways for those that don't have STEM degrees, they aren't coders by nature, or they just don't have the patience, frankly, to learn how to be a coder, to be involved in the conversation around technology and make real change and real impact, while also getting something they need in the process as well. 

PRITHPAL: So let's talk a little bit about the strategy and the product roadmap going forward. We have been fairly focused on some of the key design principles that have led us to where we are today. And we absolutely plan on continuing that. Some of that our intelligence is going to be pervasive all throughout the platform. So you're going to see us spend a lot of time in getting the suggestions at multiple levels-- suggestion for building bots, suggestions for selecting steps within processes, so on and so forth. They're going to continue to get better and better. 

On the intelligence bucket, you're also going to see us support things like invoices, W-9's, and receipts. You will see us continuing to support and add support for additional document types as we go along. That's another big focus area for us. 

Third, today in terms of AppSheet Automation, we support events externally for Sheets and Forms through Sheets, and Salesforce. But you will see us rapidly expand that portfolio to include support for eventing for a variety of other data sources, including things like databases, SAP, so on and so forth. So that's the third area of focus. 

I think, broadly, you can expect the automation capabilities to be a common source and a continuous source of investment for us, so including capabilities for a new persona type. So as an example, today we predominantly cater to an app creator and an admin who would be responsible for governing how the platform gets used, who has access to certain things, so on and so forth. 

But increasingly, we are seeing the need for this third persona type called the operator. So let me explain a little bit. What I mean by that is, great, now you've built some automation. Let's say the app creator has created some automation, and the automations are running in the background. 

Well, because they are now digitizing a lot of the manual work for you, some individual-- it could be the app creator, or it could be the admin-- but we feel that there's a third persona type called the operator who really has to be on top of, are the automations running successfully, are the bots executing these processes on time. 

So one example of that is the use of AppSheet for AppSheet. And what I mean by that is, with AppSheet Automation, you actually have an AppSheet app which we call as the action monitoring app, that allows you to be able to have deep insights into the state of your bot runs. So you can see when the bots ran, what kind of status they were on, what kind of data was processed, so on and so forth. 

JENNIFER: Super meta. Super meta AppSheet. 

PRITHPAL: That's a great analogy, right? So you will see us continue our investment in that area. And I think the future is extremely bright. We are super excited to be able to provide advanced capabilities, and really just help our customers digitize their processes, and more importantly, leverage the no-code constructs to be able to provide this platform for solving many use cases, including Workspace ones, but also addressing a wide variety of open-ended use cases around APIs, things which are built on the Google Cloud Platform, services, so on and so forth. 

JENNIFER: And one more thing to add-- and I know I'm biased, because I work closely with AppSheet on this-- but one of the coolest parts about what we're doing and where we're going is, we do all of this with our app creators. And by that, I mean we have a very, very engaged app creator community that has been along for this ride with us. 

We developed automation in partnership with a number of individuals who have been very active with us for quite some time, and provided insight, inspiration, et cetera, to help us improve. And that's something that's not going away in our product. In fact, we're doubling down on it. 

So if you're interested in becoming a part of that, come hang out with us. Prithpal and I spent a lot of time in our community space. But it's really cool to see new people coming into this space providing insight, their diverse sense of thought, into rethinking how development should be for the greater human good. 

CARTER: Jennifer, you just touched on the next thing I was going to ask. I was going to say, OK, I'm so excited, I want to get started, where can I meet people? Where can I interact with people? So you said there's community spaces? 

JENNIFER: The first thing, if you're not already an AppSheet user, sign up at AppSheet.com. If you have certain plans within the Google ecosystem, you actually already have access-- I think at certain levels of enterprise, you have a level of access of AppSheet-- but make sure you have an account on AppSheet.com to start building applications. 

I cannot emphasize the community enough. We also hold webinars and office hours where you actually get to hold Q&As with myself and a few other product experts to learn more about what we're doing, and provide your inputs, and get a sneak peek sometimes at roadmaps that we're working on. 

PRITHPAL: This app-- once you do get started on AppSheet.com, it's free to start. You can just create an account within minutes. We have a ton of sample apps which many of our initial, or novice, if you would, users can just use those sample apps. They are completely prebuilt apps. They can be customized within minutes. And they give a great kick-start to your app building journey, and automation building journey as well now, within AppSheet. 

JENNIFER: And those in particular are really powerful to helping understand the relationship between data structure and how that is expressed in your applications. If you copy and start working with one of the template apps-- which, again, are free of charge-- you can look under the hood and see how the data has been structured to build that particular app. So you can recreate that in other data that you're working with, and you can modify to suit whatever your needs are or start from scratch, build a new app inspired by that application template that you started with. 

STEPHANIE: So there is no reason people shouldn't give it a try, because you are sharing all the magic in this conversation today about the intelligence, about how you can get sample apps and learn about how the data structures have been built. So encourage everybody to try it out. We're going to include all of the links for everyone listening in the description for these resources. 

Before we wrap up, I do want to ask-- anything else that you would like to mention? 

PRITHPAL: One thing. I think we are going to have a moment very soon. So continue checking in on the different channels that we advertise on. I think we are super excited for our customers to take this next wave of the journey with us. 

Automation is a big, big focus area for the AppSheet platform. And it will continue to grow. And on some accounts, we're just getting started. Automation, some analyst quote says and puts the space at about $70 billion overall. With AppSheet Automation, we just scratch the surface. There are a lot of exciting things which are planned in the roadmap. 

So I think we're going to continue to just kind of keep rolling and roll out some exciting capability for our customers and, more importantly, help them make their lives easier and innovate very, very quickly. 

JENNIFER: And I think for me, I would add, work is changing now, and no-code is a really big part of that conversation of how work is changing. And I know I've mentioned a lot of data points on what that is and how that can look in the future. But be a part of the conversation sooner rather than later, because if you're not, then you have to play catch-up. 

And nobody likes playing catch-up, especially when they start to realize how much time they could have saved, how much of their life they could have gotten back, and how different their experience could have been. You really have nothing but regret if you don't get started now. So join us while we hopefully make your life a little better. 

STEPHANIE: Awesome. I think also we've mentioned this, but be a part of the conversation, because it sounds like you both are listening intently on what the community feedback is and even for those who are just getting started on that journey. So I want to thank you both for jumping on the podcast. We learned so much today. 

So hope to have you back again soon-- maybe next quarter when there's new things coming out on the roadmap. 

CARTER: It was a really good convo. Thank you both. 

PRITHPAL: Thanks for having us. 

JENNIFER: Thank you so much for having us. 

STEPHANIE: Yeah. So I loved how Jennifer started it off by explaining automation in the context of who it actually impacts-- women, other groups-- and the amount of time it saves for people to be able to work on higher-impact work, not just about the company's bottom line and revenue, which is also obviously very important and what people talk about in the context of automation usually. 

But really at the source of it, people are still behind it. It's still human-centric work. We're really just automating the parts that can be more easily done by a computational task, or by recognizing the repetitive actions by humans. What do you think? I know you worked with AppSheet in the past, right, Carter? 

CARTER: Yeah, you know, I've done a little bit. I made the most pointless application ever with AppSheet. But I loved it. It was a great experience. For context, I made this application that would basically read in subtitles-- so a CSV file. It would read them in. And then I could go and mark those subtitles and say, this is thing A, this is thing B, this is thing C. And later, I realized I could just use like Markdown H1, H2, H3 headings. 

But what was really promising was this idea that I could have a family or like a suite of applications that were domain-specific, that were tailored to the needs of my organization or my company. Like, Steph, we work on a podcast. And I can't tell you how many times I wish I had a tool to automate some of these steps-- like, maybe ingesting interest responses and turning that into a doc. Things that aren't hard, they're repetitive, they take up time, that's what AppSheet is really good for. 

I think it makes it so that anyone that's part of the project-- you don't have to be a programmer, you don't have to be a coder-- if you see a problem, you now have the tools be able to go and fix it and make pipelines more efficient. 

STEPHANIE: Exactly. And it boils down to, again, democratizing these opportunities for people to take part of a low-/no-code experience. But at the same time, it opens up these opportunities for existing developers to learn new skill sets and become a valuable asset for organizations in different ways. And it also expands these canonical use cases beyond just subtitles, like what you were doing, but organization-specific, like employee onboarding, field services, integration with external sources like Salesforce, or doing invoices and document processing. 

And of course, obviously this episode was focused on AppSheet Automation, which now brings in new capabilities like intelligent document processing and other ML APIs that are part of the Google Cloud Suite. So in your case, with subtitles, we could have brought in document processing using our Google Cloud Content AI to extract structure from these text-based data in the CSV sheet. 

CARTER: And it was really cool because even back then when I used it-- this was maybe six months ago, a year, somewhere in that range-- it was already able to look at it and say, oh, this is a date, this is a number, this is a string. And so now they're adding on top of that to have even more intelligence and even more intent-aware, context-aware knowledge inferred from the data. 

That is just-- it's icing. It's beautiful. Like, I'm really excited to go back in and try that out. I'm probably going to do that sometime this weekend. 

STEPHANIE: Yeah, just bringing in new data schemas and automatically recognizing that from Sheets and other parts of Workspace. So excited to see what's on the roadmap for Jennifer and Prithpal, and hope to get them on back again to talk about the new capabilities and features. But it sounds like beyond what we can do today, they are working closely with the community and companies who are re-evaluating how they want their employees to work and spend their time. So cheers to them. 

So in terms of what you're working on, I know you have some exciting things coming up. 

CARTER: Well, I'm super excited. And this one involves you. I think it's time to, I don't know, maybe take this podcast-- take it to YouTube, take our talents around. I think it's time to expand the podcast a little bit. 

STEPHANIE: Yeah. I definitely agree. I feel like there's more we can do with the podcast. And we are actively thinking of creating ways to make it more engaging, dynamic, available to more people beyond just audio. 

CARTER: That's so exciting. So that's the exciting news. That's what I'm working on. 

STEPHANIE: Cool. I'm super excited to work closely with you, because obviously we worked on podcasts for a while-- not this one. But I'm excited to be leading this one moving forward, especially with you. 

I do want to mention, also, that it is the month of Earth Day, which is coming up next week. And so what I'm excited to be working on is another episode around sustainability. Google Cloud is doing a lot on the compute side. And I think translating the concept between cloud computing usage and the actual physical and energy utilization at the data centers, I think it's an important conversation topic to ensure that people feel empowered to be a part of it, and that they have the tools necessary for them to make sustainably aware decisions when they are running in the cloud. So keep a lookout for our new episodes coming out for that. 

I'm also going to be speaking on our community platform called C2C with some of our sustainability folks on the Google Cloud side. So you can sign up for that and hear some exclusive interviews that we'll be doing there. Beyond that, thanks, Carter, for jumping on. Thanks for our guests. And to everyone listening, we will see you all next week. 

[MUSIC PLAYING]