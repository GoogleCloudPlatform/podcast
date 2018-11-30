+++
audioDuration = "00:31:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.156.mp3"
audioSize = 46008574
categories = ["Grace.health", "Women's Health"]
date = "2018-11-21"
description = "Happy Thanksgiving! On this episode, Mark and Melanie learn about Grace Health with co-founders Therese Mannheimer and Roman Jasins."
draft = false
episodeNumber = 156
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Grace Health with Therese Mannheimer and Roman Jasins"
image="/post/episode-156-grace-health-wiith-therese-mannheimer-and-roman-jasins/images/hero/hero-EP-156.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/AV1qPHecGmk"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9z5mwg/episode_156_grace_health_with_therese_mannheimer/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Happy Thanksgiving! On this episode, [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) learn about [Grace.health](https://twitter.com/gracehealth_) with co-founders [Therese Mannheimer](https://twitter.com/teddschen) and Roman Jasins. Grace.health's goal is to give women control of information about their own bodies, allowing them to make informed healthcare decisions. Grace.health is a female health companion that lets women track and plan their periods, fertility, and ask questions. It is a global undertaking, hoping to reach not just the tech savvy woman, but all women in all markets worldwide.

Stigmas and taboos around the world portray periods as dirty and contagious, preventing women from being able to work, go to school, or even sleep in the house. Grace.health's goal is to educate people to help limit these superstitions and allow women to live fuller lives. With Grace.health, women know when their periods are coming or when the are ovulating so they can make the proper plans. 

In the longterm, Grace.health hopes to be a tool to not only help women identify any health concerns but also find a healthcare professional and get the treatment necessary.

<!--more-->

##### Therese Mannheimer

[Therese](https://twitter.com/teddschen), one of the founders of Grace.health, is an experienced business developer and product person who believes that the best way to solve problems is to put relevant solutions into the hands of people. She is also co-founder of the Allbright Foundation that works with driving opinion around meritocracy. 

##### Roman Jasins

Roman is CTO and co-founder of Grace.health.

##### Cool things of the week

* Building IoT Applications on Google Cloud [video](https://www.youtube.com/watch?v=WkHlJfY5YZ4)
* Getting started with Kubeflow Pipelines [blog](https://cloud.google.com/blog/products/ai-machine-learning/getting-started-kubeflow-pipelines)
* Subatomic particles and big data: Google joins CERN openlab [blog](https://cloud.google.com/blog/topics/inside-google-cloud/subatomic-particles-and-big-data-google-joins-cern-openlab)
     * GCP Podcast Episode 145: ATLAS with Dr. Mario Lassnig [podcast](https://www.gcppodcast.com/post/episode-145-atlas-with-dr-mario-lassnig/)
* Istio Routing Basics [site](https://medium.com/google-cloud/istio-routing-basics-14feab3c040e)

##### Interview

* Grace Health [site](https://grace.health/)
    * Google Cloud Startup [site](https://cloud.google.com/developers/startups/)
* Dialogflow [site](https://dialogflow.com)
* FEM International [site](http://feminternational.org)
* UN [site](http://www.un.org/en/index.html)
* Doctors Without Borders [site](https://www.doctorswithoutborders.org)
* The Hunger Project [site](http://www.thp.org)

##### Question of the week

With background cloud functions - how can I set them up to retry on failure?

* [Background functions](https://cloud.google.com/functions/docs/writing/background)
* [Retrying Background Functions](https://cloud.google.com/functions/docs/bestpractices/retries)

##### Where can you find us next?

Mark and will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Melanie will be at [SOCML](https://sites.google.com/view/socml-2018/home) in November and [Black in AI](https://blackinai.github.io) and [LatinX](http://www.latinxinai.org) in December.

{{< transcript "[MUSIC PLAYING] MARK: Hi. And welcome to episode number 156 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague, Melanie Warrick. You are back. Yay!" >}}

MELANIE: Yay! Just for a minute, because there's a lot of smoke outside. 

MARK: Yeah. 

MELANIE: How are you doing, Mark? 

MARK: It's nicer inside than it is outside. 

MELANIE: Yeah, definitely. 

MARK: San Francisco is having a fun time. 

MELANIE: It's definitely been very difficult lately. 

MARK: Excellent. So who are we talking to today? 

MELANIE: Yes. It is Therese and Roman, who are with Grace Health. And so we're going to talk to them about their company and the work they do for women's health-- especially kind of from a worldwide perspective. But yeah, it's a good interview. 

MARK: It is a good interview. 

MELANIE: I'm really glad we got a chance to capture this one. As we do, we will start out with our cool things of the week and we will end with the question of the week. And the question of the week is, with background Cloud functions, how can I set up to retry on failure? I do not know. But I'm sure I will know by the end of the podcast. 

MARK: You will. 

MELANIE: I will. 

MARK: You will. 

MELANIE: Anyways-- 

[LAUGHTER] 

All right, Mark. Do you want to kick off the cool things of the week? 

MARK: Sure. So coming up first, one of our favorite-- well, one of our favorite? They're all our favorite teammates. Let's be honest. 

MELANIE: We don't pick favorites? 

MARK: Yeah, we don't pick-- 

MELANIE: We do, but we don't, but we do-- 

MARK: Yeah. They're all our favorites. 

MELANIE: --but we kind of don't. 

MARK: One of our favorite developer advocate friends, Gabe Weiss, has done IoT applications on Google Cloud Video, which is a recap of the stuff he did at Next. It's about a three and a half minute presentation that you can get basically the gist of what he's talking about very, very quickly. 

MELANIE: Yes. You should check that out if you want to play around with IoT on Google Cloud. Another one we want to mention is this blog post on subatomic particles and big data, which is basically about Google joining the CERN Lab-- CERN Open Lab, to be specific. And this is really an opportunity where CERN is using Google Cloud to help advance and improve upon what they do, and the kind of data that they collect. So it's really interesting. I mean, CERN, we've talked about it before. We have a podcast that we did earlier this year. And so if you want to hear more about how Google Cloud is going to be supporting their data needs, you can check out this blog post. 

MARK: Awesome. 

MELANIE: Yeah. 

MARK: Speaking of favorite developer advocates, we have yet another one on the list. Favorite developer advocate, Mete Atamel, did a blog post recently talking about SDO routing basics. Basically they have taken-- they're building basically a Hello World app from the ground up using SDO, and taking you through all the steps-- which actually is something I really want to go through. So if you're interested in SDO but you want sort of a very basic step by step tutorial taking you through that, you mean want to check out this blog post. 

MELANIE: And last but not least, Amy [INAUDIBLE], who is one of our colleagues, as well, and we-- 

MARK: Favorite developer advocate, as well-- 

MELANIE: Always. 

MARK: --just to be clear. 

MELANIE: Everybody. Everybody's favorite. And Amy was also on the podcast earlier this year. She just released a blog post that talks about the Kubeflow pipelines, and how you get started with them. And I know you guys did a lot of Kubeflow stuff last week. 

MARK: We did. 

MELANIE: So this is a nice little follow on to that. This will basically help you-- it's a component of Kubeflow that will help you compose, deploy, manage, and end machine learning workflow. So if you want to understand that and see a great example of it, you can read her blog post. 

MARK: Fantastic. Awesome. 

MELANIE: All right. 

MARK: Shall we go chat with Therese and Roman? 

MELANIE: I think that sounds like a plan. 

MARK: Let's do it. 

MELANIE: This week, we have with us two wonderful people from Grace Health. We have Therese Mannheimer, who's the founder. And we have Roman Jasins. Thank you both for joining us. 

THERESE: Thank you. 

ROMAN: Thank you. 

MELANIE: So Therese, can you tell us a little bit about yourself? 

THERESE: Yes, sure. I have a business background, and have been an entrepreneur the majority of my career-- starting different projects and also a foundation working to drive opinion around female representation in management teams and boards. But I've also spent around seven years in a design agency learning about design thinking, business design strategy, and also how to really work with real problems and challenges to be able to help more people and build relevant services. 

MELANIE: That's great. And Roman, what about you? 

ROMAN: I'm a technologist with a technical background. So I've been helping people like Therese, building their dream products and services, and working very closely with engineers. I used to be an engineer myself way back, but then had to go into management. 

MELANIE: You had to. You were forced. 

ROMAN: But I always enjoyed to triangulate between design, product, and engineering. And that's where I think the most fun is when it comes down to development. 

MELANIE: Great. So Therese, I know you're the founder. Roman, what is your role again on Grace Health? 

ROMAN: I'm CTO and Co-founder, as well. 

MELANIE: Co-founder as well? And so how did you all come up with-- or what is Grace Health? 

THERESE: We're a company that wants to create change worldwide, and let women own the information and data about their own body so that they can make more informed decisions. And we have a grand vision to really make female health accessible to all women across the globe. But we've broken it down into steps to make it like where do we start, and what type of issues to address first. And so the first thing we're doing is building a-- what we like to call-- female health companion, that lets women track and plan their periods, understand their fertility and reproductive health, and then ask all the questions that they want on what's happening around their bodies, sexuality, identity, and everything related. 

MELANIE: That's great. Roman, was there anything you wanted to add in terms of the company and the goals behind it? 

ROMAN: I think this is very well summarized by Therese. And obviously, the vision is global so it needs to scale globally and be available literally for women in different environments, different needs. 

THERESE: I think what is worth adding is also that we have looked at emerging markets as a very interesting new market to try and build things for us, since many of the products out there are built for more westernized markets. But we don't intend to sort of cut back on technology. We really want to build high end, new technology things with a very lightweight interface. So it's still a very high tech company that we're building and with very smart and interesting integrations. 

MARK: Was there a particular catalyst for this? What was the reasoning and the reasons behind when you started this project? 

THERESE: Both yes and no. I think coming from a business background just also had me have this more economic perspective in mind. But then it was really my background in a design agency that helped me convert user insights into business. And that's also what I was working with. So understanding how to transform user needs and behaviors into real products and services that could generate an income and be a valid business was something that I couldn't escape from. It just hit me really strongly. I want to solve real issues for many people. 

And then at the same time, I was part of building Allbright-- that I mentioned-- which is a foundation that really wants to talk about meritocracy. And so what we, as women, can do when we just have the best possible platform to do it is incredible. And so those two fields just emerged for me after leaving my previous job. And so I really wanted to see, what if we take everything we know about this technology and make it much more accessible and make it like-- what do we scale it back down? So that was the embryo for the idea, and then we went for it. And so yes, now we're building a whole product and company around it. 

MELANIE: And what's the goal in terms of impact that you're trying to have with this product? 

THERESE: There are many. Of course, it's almost impossible to just name a couple. But we want all women to feel informed enough to make decisions for themselves. We want all children who are coming into this world to be wanted. And we hope to really make sure that all women and girls can go to school and work as they should without ever having to be sort of prevented by the fact that they're women and there might be on their period. 

MELANIE: And actually, I just want to take a note of that from the standpoint of-- for those who are listening who may not know this, can you expand a little bit more about that issue-- why that's an issue? 

THERESE: So this is a huge issue-- that many, many, many millions of women and girls around the globe are unable to attend school and go to work as they should due to the fact that there are stigmas and taboos around the world, in different types of cultures that tell us that women are dirty, unclean, contagious, that you can catch the demon, or all sorts of different types of ideas that are generated from way back, and that are not founded in facts but are really preventing young girls and women to live their lives to the fullest. 

And it's not only an efficiency issue when it comes to girls and women not going to school. That affects, of course, national economics and socio-economics-- that's only half the population can really act and the work to their fullest. But can you just imagine how that must feel for someone to feel dirty or to not be allowed to sleep inside the house when you're menstruating-- for something so simple as actually being able to give life? 

MELANIE: Right. 

THERESE: There is a huge misconception. There's a huge mis-education, dis-information, and also just fables-- just made up stuff-- that we want to break away from, and really start to import or give real access to real knowledge and break away from everything that has to do with taboos and stigma. 

MARK: Nice. OK. So you have this project you're working on. But what is the project you're building? And how does it come about these problems? 

THERESE: So what we've done is that we have had an early stage pilot that we launched in February. The embryo for that was to really see if we can have girls and women understand when their period is coming and how they can prepare for it best-- to make sure they have a collection method ready, to make sure they're mentally and emotionally prepared. But also, that period is something that many women can feel. But ovulation and fertility and when you can become pregnant or not is something that most women don't know about-- even in Western countries. 

MELANIE: True. 

THERESE: I didn't even know about it before I was pregnant or I wanted to become pregnant. 

MELANIE: True. 

THERESE: And so just understanding like, oh, this is what's happening in my body-- and also being able to match symptoms to what is, in fact, happening-- is super important to be able to make informed decisions. So the idea was to make something very lo-fi. And what we've done now is we've created a service where you-- inside of Facebook Messenger or Messenger Lite, currently- can use sort of a conversational app. It's a chat bot that you talk to, basically like a friend. 

And so we say, hi, I'm Grace Health. I'm a female health companion. I'm a specialist in female health, and you can ask me anything about the reproductive cycle or fertility. And then we start asking you about how old are you, what's your name, what do you want me to call you, when was your last period. And we collect the data manually, but in a very conversational and friendly way. And then we will ask you about where you are, so that we can ping you timely. 

But then very much we'll have proactive pings on our end. We will know-- if we also know how long your cycle is-- when to inform you best and give you a heads up in time, notify you around your period and fertile period. And we will also send you information about education. Like, if you're tired at this point, it can be due to hormonal changes in your body. It's normal to feel tired. And so we have a lot of proactive pings and notifications. 

But then we also have a very extensive set of contents that is reactive, which means that if you ask me why is this happening-- I have tender breasts, what type of discharge am I experiencing, is this normal, when can I get pregnant, when is my fertile period-- we can also respond. So we are there at your convenience 24/7 to also answer all of your questions. 

MELANIE: Wow. How did you build this? 

ROMAN: So it's what Therese already hinted-- that there's quite an extensive library of content that is nuanced and relevant in different contexts. So there is a back end platform that Facebook Messenger-- and more messengers in the future-- integrate into. And this is currently costed in Google Cloud, which kudos to you guys for building that. It makes our life much easier-- allows us to focus on the core of the product instead of worrying about scalability and infrastructure management. 

And we're storing all this in a quite dynamic database and model that is changing as we learn as we go along. Because in the heart of it all is this predictive algorithm, or a model that we are coming up and trying. Because if you get the notifications or the pings that we talked about in the wrong time, then the value is lost. It needs to be timely. It needs to be in the right chunk. It needs to be served in a way that is understood. Conversational UI is great for this, because we're using it everyday. And everyone feels comfortable, but it's also quite open ended in the way that user asks questions. 

So it's easy if you get it done right. Otherwise, it could look quite silly and unsophisticated. So there is an API, obviously, that we built. And overall setup is as modular as we can keep it at this point in order for us to stay agile and nimble and adjust and calibrate as we get more data from the users. And then there is several integration points to which we deliver the conversation experience to things like Messenger. 

MARK: Are you using out of the box tools like, something like Dialogflow or something like that? Or are you rolling your own, or how is that working? 

ROMAN: It's a mix. We are heavily relying on Dialogflow, and it helps us with natural language processing and many other things. But since quite a lot of what we're doing doesn't exist today-- there is no tools that predict your next period or take all the variables into the account-- we had to build in our building our own back end libraries and APIs for that, which we integrate. So if you would look at how it's set up, there are certain things that we get through Dialogflow or through Google Tooling. But there are certain things that we get directly and then send to Google, to Dialogflow, in order to interpret it properly and then get it back and send it back to the user. 

MELANIE: What are some of the biggest challenges you have with the UI that you're building? 

ROMAN: It's the fact that it is so free for the user. There is a freedom of choice on how you interact, what you say, how you say it. Constraining people with menus or users with menus and links takes a lot of headache away. But when you have to expect unexpected and handle it in the way where it makes sense to the user-- that's quite challenging. And it's also very rewarding when you get it right. So language processing-- natural language processing and machine learning is something that we breathe and live everyday. 

Scalability, of course, something that we are aware and keeping top of the mind. But again, the choices that we made going with Google Cloud Platform also based on the fact that Google helps us with scaling that part. So this is less of a concern for us. But then again, since it's a global service, of course it will be an issue as we scale as a company. It's the cultural context, and how one thing that we say or we hear mean something else in a different region of the world. This is more and more becoming apparent. And we're trying to find interesting and creative ways of handling that. 

THERESE: Can I also add, when it comes to UI-- 

MELANIE: Yeah. 

THERESE: Since you asked about UI, is also that we have a UI at the moment that is without visualization. And visualization like diagrams, infographics, anything that you can rest your eye on that has sort of a self-explanatory purpose, we don't have at the moment. We will have. That we have to rely on super intuitive content. We need to be super timely with our pings and notifications. 

And so we're basically resting on having enough skills to really tell you the same story without having support of any type of images. And that's where the tonality comes in, and the timings are super important. But we are, of course, also looking into how we can combine text with visual stimuli going forward. But it's an experimental effort. But, of course, it's super challenging when we're only relying on text. 

MARK: Nice. Roman, you mentioned scalability and how Google Cloud is helping you with that. Can you dig a little deeper there? I'm curious to hear-- like, you mentioned Dialogflow. Are there other particular products that you're using that maybe are the more platform as a service or anything like that, that are really helping you solve the scalability problems? 

ROMAN: Absolutely. We're storing data in Firebase. We're relying on Google functions, and generally tried to use as many managed solutions that you have. Not always possible, because we have our own needs that might not be supported at the time. So then we default to compute instances, and run our own solutions on it. No in-memory store could be an example of something like this. But yeah, basically the entire stack top to bottom-- we keep as much as possible in the Google Cloud. 

MELANIE: And I imagine getting the data, too, is its own challenge. How are you engaging with the community? Or are there ways for if there's others who are interested in contributing to this, for them to engage with you? 

THERESE: That's a really good question. And at the moment, we are very much focused on building the core product. But the scalability of these data sets, and the interest in them are, of course, something that's driving us a lot. And so how not only do we contribute or how we collaborate with others when they want to contribute to our data set, but also how we can collaborate and contribute to research and to be part of clinical trials that actually can help build smarter services and products and medicines for women relating to female health. But all of this is yet to come. And we are in some early discussions with really interesting partners, but nothing that I can disclose at this moment. 

MELANIE: That's fair. Well, my understanding is you're part of the startup program through Google. Is that right? 

THERESE: Yeah, that's right. 

MELANIE: So how has that been? What kind of support have your received from the startup program? What has that been like? 

THERESE: Initially, we had a contact with Daniel at Google who has been super helpful with making introductions. Of course, we were granted credits that have been very useful for us, since we're bootstrapping or a very cash light entity, and trying to really save. And, of course, credits have been very valuable for us now setting up. But also, Daniel has been incredibly useful and helpful in connecting us to the right resources, enabling smart collaborations with different entities within your organization. But, of course, I think we have still yet to explore to the full capabilities of this program. I think there is much more we can make use of. 

ROMAN: Absolutely. If I can add to that-- having access to the brains and to the experience that engineers and designers and developers at Google have is instrumental for us. Because we're coming up with something that we haven't seen yet done elsewhere. I mean, the chat bots or conversational URI have been picking up and been solving quite interesting problems-- from customer service to automation of different kind of maintain tasks. 

But we are trying to create a real meaningful conversation where you don't necessarily perform linear tasks. You sometimes just need to talk and find out whether what you're experiencing is normal or not. So creating something that doesn't break in those scenarios is not trivial. And we often feel that what we're trying to design actually is not mainstream, and may be even far from being mainstream-- might not even be possible for a while. So having someone that you can bounce this with and having dialogue is very important for informing our roadmap, what we focus on. Not just solving specific problems-- the technical problems that we're facing today. So we would love to do more, as much as possible of these kind of interactions. 

MELANIE: Nice. Well, I want to take it to one other question that's a little different, but similar in terms of your data and the data you're working with in the community you're working with. How are you helping to ensure their privacy of information, if they want that? 

ROMAN: First of all, we try to never ask something we don't need. User is always in focus, and we only ask for things that we need to have in order to be precise, to be relevant, and calibrate for the user. Then obviously, even though we process and store the data, it is user data. And if for some, reason they decide to discontinue using Grace, that's the choice that we will respect and remove or release data to them. And we're also clear with the intent before you start using the service, what we do and why we ask for certain things. 

THERESE: I think also it's a very, very important to stress that we're dealing with the most sensitive of health data you can ever imagine. And so, of course, data encryption, data security, the storage of the data is incredibly important so that we will never be facing being hacked, or any type of leakage of this data since it's probably the most sensitive that you can ever come across. So ensuring each and every user's integrity and privacy is top priority for us. 

And it's also very important-- for example, since we have a business model that entails the handling of data-- which means that we want all of our users and the women to understand the value of the data that we have on them, and to also have them grant access whenever we suggest a collaboration or say like, you seem to be pregnant. Could this be of interest to talk to an insurance provider that we are partnering with? That is semi dealing with their data, but something that they give consent to. So having our users understand the terms of service is not only something we want them to agree on, but also understand. Because it's part of the education of why it's valuable. 

MELANIE: That's great. 

MARK: That's amazing. I'm also just curious just generally speaking, as well. Do you collaborate with any other women's health programs or non-profits or any groups like that? 

THERESE: Good question. And, of course, that is a very natural collaboration set up for us. We are in a couple of discussions, actually. And at this moment, we are mainly focusing on developing the product and making sure that it's so good that we can scale quite rapidly. And what we're doing now is creating smart and strategic partnerships with little bit smaller groups. But we're also talking to bigger NGOs, as this service could be an excellent leave behind. 

And as you know, you've mentioned FEM International. Many of these organizations-- UN, for example, Doctors Without Borders, Hunger Project-- they leave. They go out and they do educations in schools and in homes and in houses. And we want Grace there to be a perfect leave behind that could not only measure the success rate of this education, but also successfully measure behavioral change. 

MARK: Excellent. 

MELANIE: Wonderful. What do you see this evolving into? What is the future plans for Grace Health? 

THERESE: Ooh, world domination. No, but-- 

[LAUGHTER] 

MELANIE: Sounds great. 

THERESE: We really want Grace to be a household name. We want us to be the first stop, and the first place you turn whenever you have an issue. And we also want to create a service that not only provides you with education, but actual health care. And so part of our vision is to-- in the near future, or in the future at least-- to be able to provide actual health care inside Grace, which is even stressing the point of accessibility-- which means many women don't have a doctor close by, which means it could take them days or weeks to even get there. 

Some might not have the money, or afford it. And so how do we not only ensure that they know that something might be wrong, but actually get health care inside the service? That is a very important part of our vision. So that's why we're not only saying we are a female health companion, but we want to build a mobile, global health company that is oriented towards female health. 

MELANIE: I like that. 

MARK: If people want to access Grace Health, I know you mentioned it's through Facebook Messenger. Is there a website, or should I search for something? How do I find this thing? 

THERESE: Yeah. So we have actually also seen how users behave. When a woman gets a recommendation from a friend, per se, she might actually get the referral within our service. But she might also just tell her friend that this service has helped me. And then we have seen that behavior of going to the website, or just searching online-- going to Google and search is very big. So we've created a website that's quite user-centric. 

And so that when you get to Grace.Health, you can actually press a button that says use Grace now or try Grace now, which takes you straight to the service. So for anyone who wants to try it can go to Grace.Health and go through our website straight, or you go to Facebook Messenger and search in the search field for Grace Health Period Tracker. 

MELANIE: Perfect. Well, thank you both for coming on. Is there anything else that you wanted to share before we let you go? 

THERESE: No. The only thing I think is interesting-- speaking of the start up program for Google Cloud-- I don't know if it's relevant for you now, but something that we would really like to see more of is sort of allocating resources to really help us make use of this platform in the best way possible. So one thing is granting access to credits. 

But as Roman also mentioned, we're doing something that is now being quite exploratory and groundbreaking. We're pushing some boundaries. So for us to really be able to leverage that platform to the full extent, and to also be able to make a really strong case for Dialogflow-- also having access to an engineer or to be part of a bouncing session with someone who is really well known in the product could be very valuable for us. 

ROMAN: Absolutely. Couldn't agree more. And we're also very happy to share deeper insights that sometimes hard to put in the web forum of things that we have tried and they didn't work, or did for them differently. So all this, we're very happy to have this two way conversation with Google. 

MARK: Fantastic. Well, Therese, Roman, thank you so much for your time. This sounds like an amazing project, so please keep continuing with it. 

MELANIE: Yes. 

MARK: It's just amazing. 

MELANIE: Thank you. 

MARK: And yes, thank you very much for joining us. 

THERESE: Thank you for having us. 

ROMAN: Thank you for having us. 

MELANIE: Thank you, Therese and Roman, very much for coming on the podcast. I'm glad we got a chance to get you on. I know we've been working on that actually most of the year. 

MARK: Yeah, for a while. 

MELANIE: So it was good to finally get that podcast in place. 

MARK: Indeed. 

MELANIE: Well, Mark, with background Cloud functions, how can I set up to retry on failure? 

MARK: Great question. 

MELANIE: I know. It's such a good question. 

MARK: It's such a good question. 

MELANIE: It's so amazing. 

MARK: So if you're running a Cloud function but you want it to respond to something like a Google Cloud pubsub topic or a change in Google Cloud Storage Bucket or maybe a Firebase event, you're going to write a background function. But maybe that background function talks to something that's intermittently down-- like, maybe there's a database that needs to go into maintenance sometimes or a third party API that needs to go down or isn't necessarily stable as you would like. So you want to make sure that these retry until basically, they pass. This is actually pretty straightforward. 

So when you deploy your background function, you can basically add a dash dash retry to it. You can the same thing to the console, as well. And that will retry until it succeeds. You should probably be aware that retrying a failure does cause your function to be retried repeatedly until it successfully executes. 

MELANIE: And you don't want to end up with infinity retry loops. 

MARK: Yup, or the maximum retry period has elapsed-- which can be multiple days. So if it's a bug or anything like that, you'll need to delete it. But make sure that you test your stuff before you do stuff. But it's pretty straightforward. It's a really easy thing to just be able say hey, retry. You don't have to build any logic into your code. It will just do that for you. 

MELANIE: And if you want to avoid infinity retry loops, you can set an end condition to avoid that. 

MARK: Oh, nice. Yes. That's a good idea, too. 

MELANIE: Yes. 

MARK: Awesome 

MELANIE: It's good best practice. Thank you, Mark. All right, Mark, where are you going to be? 

MARK: Where am I going to be? I will be in KubeCon in December. I'm pretty excited. I looked through the schedule, and I've planned out everywhere I'm going. I'm really excited about KubeCon. 

MELANIE: You know all the places? 

MARK: Yep. 

MELANIE: All the places you will go? 

MARK: I think so. And yourself? 

MELANIE: I will be at this un-conference at the end of the month in Toronto. And that is also known as [INAUDIBLE] or however you want to pronounce the acronym. 

MARK: That's going to be cold. 

MELANIE: Yeah, yeah. 'Cause you know, I like to be cold. 

MARK: Yeah. 

MELANIE: I just hope it's not as much smoke in the air. And then I'm going to be in Montreal. 'Cause, you know-- 

MARK: Also cold. 

MELANIE: --Montreal's going to be so much warmer. But I'm going to go to these two workshops at a conference that are known as Black In AI and Latin X. I went to Black in AI last year, and it was really fantastic. So I highly recommend it if you have the ability to go there or you're going to be in the Montreal area. 

MARK: Fantastic. 

MELANIE: Yeah. 

MARK: Awesome. Well, Melanie, thank you for joining me on the podcast for yet another week. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

