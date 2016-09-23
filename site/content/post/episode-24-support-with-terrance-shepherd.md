+++
audioDuration = "00:33:30"
audioFile = "Google.Cloud.Platform.Podcast.Episode.24.mp3"
audioSize = 48264571
categories = ["Support", "Cloud SQL"]
date = "2016-05-04T01:07:49Z"
description = "Today our guest star host, Brian Dorsey, and Mark interview Terrance Shepherd about his role as a Solutions Engineer in Cloud Support."
draft = false
episodeNumber = 24
hosts = ["Francesc Campoy Flores", "Mark Mandel", "Brian Dorsey"]
title = "Google Cloud Platform Support with Terrance Shepherd"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/Qbua4deCUqE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4hvdn5/episode_24_google_cloud_platform_support_with/"
+++

Today our guest star host, [Brian Dorsey](https://twitter.com/briandorsey),
and [Mark](https://twitter.com/neurotic) interview
Terrance Shepherd about his role as Technical Solutions
Engineer working for Google Cloud Platform's Support Team.
<!--more-->

##### About Terrance

Terrance is a Technical Solutions Engineer working for Google Cloud
Platform's Support Team. He has been working to help customers
from single person developers to Enterprises with 100's of Developers
for the last 16 months. Terrance also leads the Cloud Platform Support
new product review process, where the Support team has input on
usability, reliability and supportability of few product or features
released. All new features and product received the Support Team's
approval before available to customers.


##### Cool thing of the week

- You can now configure Pub Sub with Deployment Manager [docs](https://cloud.google.com/deployment-manager/configuration/create-configuration-file)
- ISO and privacy certifications [blog post](https://cloudplatform.googleblog.com/2016/04/now-playing-new-ISO-security-and-privacy-certifications-for-Google-Cloud-Platform.html)
- More on security at [cloud.google.com/security](https://cloud.google.com/security)


##### Interviews

- Google Cloud Platform Support: [cloud.google.com/support](https://cloud.google.com/support/)
- Google Cloud SQL [docs](https://cloud.google.com/sql/docs/)
- Google Cloud SQL General Log tips [docs](https://cloud.google.com/sql/docs/mysql-flags#tips-general-log)


##### Question of the week

How can I connect my application running on Google Cloud Platform to other Google services like Google Docs?

- Google Apps APIs [docs](https://developers.google.com/google-apps/)
- Google API Explorer [console](https://developers.google.com/apis-explorer/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 24 of the Weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc, how you doing today?
FRANCESC: Pretty good. Pretty jetlagged, but very happy to be back to the United States. 
MARK: Yeah. We're actually in separate places right now. This hasn't happened very often. 
FRANCESC: Yeah. Yeah, we will Tweet about the pictures of our studios today. They're pretty precarious I'm gonna say. 
MARK: Yep, you're down in Mountain View. I'm all the way in Kentucky. It's lots of fun.
FRANCESC: Yep. And actually since we're traveling, both of us, we were not able to interview the same person at the same time, so what is the main content today? 
MARK: Yeah, so I interviewed Terrance Shepherd with one of our coworkers and previous interviewer, interviewees, Brian Dorsey. Terrance talked to us about Google Cloud Platform Support. It was a really interesting interview. 
FRANCESC: Cool. I'm actually--So I have--I still haven't heard the interview itself. I will soon. But I'm sure there's gonna be--Like, did you ask questions of what is the funniest thing that's happened? 
MARK: I didn't quite get the funniest thing, but I definitely got some really interesting stories about problems that people have had on Google Cloud Platform like common things or weird things and some solutions as well. 
FRANCESC: Cool. Yeah, looking forward to that. And after that interview, we also have the "Question of the Week." What is the "Question of the Week" about today?
MARK: So it's not something necessarily quite as Google Cloud Platform related, but definitely Cloud related, and a question we get quite often which is how to go about coordinating or connecting, say, like, an App Engine app or something else on Google Cloud Platform to other Cloud services we have at Google such as, like, Drive or Calendar. 
FRANCESC: Yeah, that is actually a question that I've had many times, so I'm sure that many of our listeners will consider that pretty useful. 
MARK: I think so as well. 
FRANCESC: But yeah, before that, we're gonna go through the "Cool things of the Week." Today with an "s" 'cause there's actually two of them.
MARK: Yeah. Yeah, so the first one, it's something for some reason is very near and dear to my heart. I have a particular love for Deployment Manager. 
FRANCESC: Which is surprising 'cause I assume that these things, you can make them with a big, big (inaudible) file. I don't know. 
MARK: I really like Deployment Manager, so if you're not familiar to Deployment Manager, it's a way to declaratively basically specify the infrastructure you run on Google Cloud Platform. I was super happy to see that recently they have support now for PubSub. So if you want to create topics or subscriptions within Deployment Manager, you can do that through that now--You couldn't before.--which is really, really cool. PubSub is a tool that I love. It's a messaging publish subscribe service that we run. It's super, super powerful, and it lets you build some really nice distributed systems. 
FRANCESC: Yeah, that is actually really cool 'cause it was the last step, so we could get rid of our deploy script for Cloud Spin. 
MARK: Yeah. 
FRANCESC: Now every thing can actually be done with just one Deployment Manager file which is very nice. 
MARK: Yeah, I was thinking that would be really great for Cloud Spin.
FRANCESC: Yeah, we still need to write it, but you know. 
MARK: Exactly. Now, what's the--What's the second "Cool thing of the Week" that we found?
FRANCESC: The second "Cool Thing of the Week" is actually with certifications, and it's about ISO certifications, so we (suddenly we) got two more, two more, two new certifications for the Google Cloud Platform, and I'm sure you have the numbers. I know that one is for privacy, and the other one is for security. I never remember the names. 
MARK: Yeah, we did ISO 27017 for Cloud security, and ISO 27018 for privacy. Those are the two new ones, and we also renewed our ISO 27001 certificate for the fourth year in a row. 
FRANCESC: Cool. And this actually covers basically all the things in Google Cloud Platform, so Dataflow, Bigtable, Container Engine, DataProd, Container Registry, Compute Engine, App Engine, etcetera, etcetera. Basically all the things that you can imagine, they are covered by this ISO certificate, so if it's something that--Very often it's a requirement depending on the instance (strategy) you're a part of. It's always good to know that we got you covered. 
MARK: Yep. And I think just the general take away, like, we really care about security. We really care about privacy. This is just another thing that we do in that area. 
FRANCESC: Yeah, absolutely. And we'll put up the link on the show notes, but there's a Cloud.Google.com/security that's something that you want to learn more about. 
MARK: Absolutely. So why don't we get stuck into the interview with Terrance with Brian joining me as cohost. Does that sound good? 
FRANCESC: Yeah, sounds good. Let's talk to both of them. 
MARK: Sounds great. We are joined today by Terrance Shepherd who has agreed to talk to us about Google Cloud Platform Support. How are you doing today, Terrance?
TERRANCE: I'm doing pretty good. 
MARK: That's pretty great. 
TERRANCE: How are you?
MARK: I'm pretty good. Having a good day so far. We have a bit of a guest host today. Unfortunately Francesc is traveling, and I had a minor medical emergency, so we had to reschedule a few things, but Brian Dorsey is here with us again as a guest host. How are you doing today, Brian?
BRIAN: Hello-hello. Good day. I hope you're all healthy. 
MARK: Yes. Yes, much better. Much better. Got a clean bill of health today. 
BRIAN: Okay, good. 
MARK: Excellent. So Terrance, why don't you tell us a little bit about yourself, what you do, the things you do at Google, etcetera, etcetera. 
TERRANCE: So my job title is called "Technical Solutions Engineer." It is under the Cloud Platform Support umbrella, and what I basically do is customers come to the support team when they're very anxious or they have a problem, and I'm there to help guide them to a solution that makes them less anxious or resolves the issue. 
MARK: So Terrance, we talked a little bit about support. You said "support" a couple of times when you were explaining what it is you do, but like, what is "support?" What does that actually mean to Google Cloud Platform? 
BRIAN: What's an example of a kind of problem we help with with support? 
TERRANCE: Good question. So it really ranges on the issue, right? So we'll help you anything from any of your billing issues, like, you want to change the credit card you're paying with, or you know, you're finally at a point in which your credit card limit is less than the bill you have on Cloud Platform, so we'll help you get to the next level of, you know, paying via wire transfer or--We call it offline billing, right, where it's not like a credit card that's charged, you sweep. We'll help you with bugs you think might be in the system. We'll help you get all the information needed and required to report it to engineering. We'll work with engineering to make sure they're actually working on the bugs so customers who are running into issues don't get that any more. We work on things prior to even customers reporting problems, right? So like, we'll--We look at products before they even get in customer hands. We'll look at the error messages that are gonna be generated and be like, "Hey, is that an error message that a customer can actually use and, like, figure out their own problem," right? You know, we very much want people to come and ask us questions, but at the same time, we want people to be able to use the product without having to come to us, only coming to us when they're in a very, very odd situation. 
BRIAN: Got you. So you're both helping people directly and like, systematically improving things so that, you know, that help isn't even needed in the future. Is that true?
TERRANCE: Yeah. Basically--Well, we want to keep our jobs, but at the same time, we don't want to keep our jobs. Like--Right? 
BRIAN: So you're actually kind of just trying to make things better so that, you know, you can move on to kind of deeper and deeper things rather than--
TERRANCE: Yeah, yeah, yeah. We want to--We don't want to be your typical support team. We want to be the people that you partner with and help grow your company on our platform, right? When you have the questions, the tough, the nitty-gritty stuff, we want to be the team you come to or you ask advice to. We don't want to be--We don't want to be the team you go to when it's like, "Oh, I got an error," right? 
BRIAN: Got you.
TERRANCE: We will--We're happy to do that type of stuff, right, but we don't want you to have to come to us for that type of question. 
MARK: Excellent. 
BRIAN: So that takes it even further than we usually think about support. 
TERRANCE: Yeah, we're really not your, like, average support team. We very much try to be the best at what we can do, right? Like, we spend a lot of time--Well, I think a lot of people spend a lot of time interacting with support teams, and you know, like--You know, your cell phone providers, you know, you have to go to them 'cause some thing's not working right--Not to knock any cell phone providers, but sometimes when you go to them, they're not always the most helpful people they can be, and that's, like, the number one goal for us is be the most helpful, right? We aren't going to just reject you or say we can't help you. We're actually gonna try to answer whatever the question is, right? Just as long as it's within what we can do. 
BRIAN: So what are those parameters? Are they broken up into groups, or like, what can we do? Is it, like, broken up into tiers, or like--
TERRANCE: So we technically support all of the products under the Google Cloud Platform, but some times that confuses some of our customers, right? Like, some times we get questions for like, "Oh, we have--Like, oh, I ran out of quota on the maps API," right? Maps API technically isn't under Cloud. Even though it's an API and it used to be in the developer's console, right, we'd sometimes get questions for that. But like, if you have a question with translated API, that's under the Cloud umbrella, you know, the Vision API, App Engine, those are all the sorts of products we really help with. 
BRIAN: Got you. 
MARK: Cool. So if I have a question--Say, I'm running on Google Cloud Platform, like, where do I go? Does it matter, like, if I'm on a maybe different support package or do I go to the same place or what's--What avenues are available to me?
TERRANCE: So if you're on one of our higher tiers, right, so silver, gold, or platinum, we always recommend that you come--you sign in to the Google for Work Support Center which is how you file cases with various support teams here at Google. It's where you file support cases with my team. And we always recommend you come to us first. If you're on the bronze level, right, you can post your questions on the Stack Overflow or the Google groups public issue trackers, and they're all there and monitored by our team. But it's not where you can get one-to-one support, right? If you want individual customized responses and questions, the Google For Work Support Center's gonna be your best place. But if we see a question, and we think it's gonna benefit the community, we have a whole team of people that sit and watch all of those mediums and will answer questions if it's gonna benefit the entire community. 
MARK: Okay, so going up through the tiers, we were talking about bronze, silver, gold, platinum, I believe everyone is enrolled in bronze immediately, like, just because you're part of Google Cloud Platform. Is that correct? 
TERRANCE: That is correct.
MARK: Excellent. Okay, and that's what gives you--Like, as soon as you're there, like, bronze is really, like--That's where you're reaching out to support through what you're talking about. So there's community mediums. There's developer communities. Stack Overflow, and those things are--Those things are monitored by the support engineers. Is that correct? 
TERRANCE: That is correct. Yep, we have a whole team that monitors all of our what we call "one-to-many" support mediums. 
BRIAN: And then you also interact with other people using Google Cloud there, right? You know, people who--Other customers, other users, other people with similar experience in those public communities. 
TERRANCE: Yeah, some of our bigger communities such as the--It's called "GCE Discuss," or "GCE discussion." It's a Google group. It's actually really popular with members of the community actually helping each other, and Support actually doesn't have to provide a lot of help or nurturing in those types of situations, and actually the community's really active there. You'll also find a lot of our product engineers on Stack Overflow, right? They all follow most of Stack Overflow. Most teams that have a Stack Overflow tag also follow along and provide answers there. Like, I know the BigQuery Team, you will actually get answers from real BigQuery engineers. 
BRIAN: Oh, awesome. 
TERRANCE: Like, if you have questions there that are like, "I don't quite understand how this function works," BigQuery engineers are there, and they go, "Hey, yeah, here's this," and then they bring back the information, and actually they improve their documentation usually. 
BRIAN: That's fantastic. 
TERRANCE: But yeah, they answer the question. 
MARK: Excellent. So the silver, gold, and platinum, those do cost extra money, right? 
TERRANCE: Yes. 
MARK: So I see they all have sort of different benefits to those, but I think I know the answer to this question, but I'm gonna ask it anyway. What do you think is, like, the one big reason for people, like, why people should pay for support at Google Cloud Platform? 
TERRANCE: So the reason why people should pay for support is the tailored experience. In the Google Group forums or Stack Overflow, the answers to the questions are gonna be generic and try to help facilitate a conversation for a wide variety of audience, right, people coming to it later. In the paid support, you get tailored one-to-one answers that address your very specific needs and usually involve exactly what you're doing. 
MARK: Cool. And I see also in, like, the gold level, it's not just, "Hey, I've got a problem." But I believe it's also like, "I'm trying to find the best way to do this. Can you help me work that out?" Is that true?
TERRANCE: Yeah. That's something we do actually quite regularly, and I have some really great stories about things along those lines.
BRIAN: Oh, let's hear it. 
MARK: Yeah, let's hear them. 
TERRANCE: Yeah. So one of them, right, we had a customer. They're a really big video game now, but before they got really big, right, they called us up, and they were like, "Hey, we have a problem." And you know, we sat there, and we helped them, and we actually had two different support reps sit on the phone with them for eight hours one day, eight hours the next day, and then four hours on the third day, and we actually, like, helped it. It was actually quite interesting to watch to see, like, the support rep and the customer, like, they'd have conversations, and then (Grady) would be like, "All right, let's go grab a snack, right? We'll come back in 15 minutes, and we'll continue the conversation." These are kind of the types of things that we don't mind doing, and it's part of that, like, additional help. And really they were--They were having some issues around Cloud SQL, and we were helping them get past the growing pains that some customers experience with Cloud SQL. 
MARK: Brilliant. So that sounds like it's really great in not just the "Hey, I've got a problem," but you know, "I haven't used this platform before," or "I haven't built this particular thing before," and it allows you to kind of have that sanity check or like, that extra pair of eyes to be able to see, "Am I not doing something completely and utterly crazy?" 
TERRANCE: Yeah. Most of the support reps generally pass a full Google Engineering interview, and so we all have experience with distributed systems and scaling systems, and so actually what we really--Where you get, like, the best benefit from the gold and platinum support is actually people who have done these things, and so in this case with this past customer, they had a proof of concept. It was running on Google SQL, and then they tried to throw, like, 200 times load at it, and they're like, "It kind of fell over." And so like, we were helping them facilitate through those types of things. 
BRIAN: What's the solution there 'cause I want this to scale. I'm gonna hit it 200 times on my project too. What's the answer? 
TERRANCE: Sure you will. So actually this was before Cloud SQL was--or Cloud SQL V2 was a big thing, and so we actually helped them install and configure and load test my SQL running on GCE, and that helped them out quite a bit. 
BRIAN: And if somebody were running in to this similar situation today, what would the recommendation be? 
TERRANCE: Cloud SQL V2. 
BRIAN: Okay. That much faster?
TERRANCE: Yeah. So Cloud SQL V1 has a couple of limitations. You know, like the number of connections you can have or how big it is, and the way this customer was going, they needed a lot more power, right, and so Cloud SQL V2 wasn't quite ready even for beta at the time, and so we really--I would recommend it now. Like, it's, you know, many more connections, much bigger instances. It's pretty amazing. 
MARK: Awesome. So that sounds like a pretty specific case. Are there any common things that people often come to Support for, like things you often see quite regularly?
TERRANCE: Yeah. There's a couple of things. Most of them actually come from either GCE or Cloud SQL. There seems to be a trend here. So connection limits in Cloud SQL is something that happens all the time. Something else that happens from Cloud SQL is some times we have to perform maintenance on your instances, and so some times they get rebooted as part of the maintenance, but customers like to enable a flag called "the general log" on their Cloud SQL instances, and so even though we've rebooted your instance, and it was only down for 15 seconds as we rebooted it, some times it can take up to five hours for your Cloud SQL instance to recover because it's trying to go through the general log, right?
BRIAN: Wow. Okay, wait, how do we avoid this on my thing that's gonna go to 200x? 
TERRANCE: So Cloud SQL V2 allows you to add your own MySQL flags, so just don't add the "enable general log" MySQL flag. 
BRIAN: And then we're okay. Okay.
TERRANCE: Yeah. But that's something that happens quite often. So the general log's, like, really good for debugging, but people forget to disable it when they go to, like, into production, and so then they get bitten by this--Most people around 30 minutes, right, but like--And then customers try to reboot there 'cause you can do that. Once it comes back up, you can reboot your Cloud SQL instance, and so they only actually cause themselves more pain when they click the "reboot" button. And so like--
BRIAN: Yeah, it takes much longer. 
TERRANCE: Yeah, they'll get 15 minutes in and be like, "Reboot," and it's like, really just--You got to be patient. You got to wait. There's nothing we can do for your instance. You just got to wait. So disable your general logs. Make sure those are disabled. 
BRIAN: Got you.
TERRANCE: Rule number one in Cloud SQL, don't enable the general log.
MARK: That's a great lesson for the day. 
TERRANCE: On GCE, some of the things that some times catch customers is the live migrations. You know, we try to make them as painless as possible, but there are some pieces of software out there that can't handle, you know, five seconds of the network not being available, so like, distributed clustered systems, like, send them, like, sub millisecond or sub second heartbeats, and if you fail, like, two of them, it's like, your node's dead, right, and so we've handled that a couple of times of being like, "Yeah, live migration some times can take one or two seconds, and your software's health beats are a little too aggressive, so if you can, you know, turn them down, your system won't be--You won't have to do manual recovery of your (inaudible) system every time there's a live migration." 
BRIAN: Got you. 
TERRANCE: So like, those are kind of the common ones that I--Well, another common one is actually firewall rules. Those trip people up all the time. I was actually handling one today where some customers really like to, like, limit their firewall rules to be, like, their office's IP address, but very few people actually have a static IP address, and so when their office--Like the IP address of their office changes, they're like, "Why can't I (SSH) into my instances?" And it's like, "The IP address you're trying to log in in is different than your firewall rules allow." So like, you have to coach customers through those sorts of things. 
BRIAN: Got you. So I'm on, you know, a cable connection or something in my office, and it's on (Inaudible) DNS, and one day it just changes. 
TERRANCE: Yeah. You know, some times I see a customer's firewall rules, and it's, like, "Brian's home IP address," and they're like, "I can't log in from home," and it's like, "Yep, looks like your IP address changed." 
BRIAN: So can you just look at these for customers? 
TERRANCE: Look at what?
BRIAN: Like, my firewall rules, can you just look at that?
TERRANCE: Yeah. I can--
BRIAN: Wait, really? 
TERRANCE: With restrictions, yeah. 
BRIAN: Okay, how does that work?
TERRANCE: So first off, you need to tell me that there's a problem, and then as with every thing at Google, every thing is logged, and you need a reason to do any thing, right? So when you submit a case, I can look at your--the meta information of your project--so like, which firewalls you have and which instances you have. I can't actually log in to any of them, but I can see the, like, name of your instances. So if you're like, "Oh, my web server 01 is acting up," I can actually go and see which instance in your project is that and then be able to inspect information about it like how much CPU it's using, how much disk and RAM it's using. 
BRIAN: Okay, so it's part of requesting support, but I'm kind of asking you to be able to take a look at the meta data around the project. 
TERRANCE: Yes.
BRIAN: Okay. 
TERRANCE: It'd be really hard to do our job without being able to do that. Or the alternative is we play the game of "can you run this G Cloud command and send me the output," right? And so that is a possibility, but it's not the most efficient way for us to help you solve your problem, right, and that's--When you're already anxious, and you're down in production, you'd rather we just tell you how to solve the problem than asking you to run 15 commands for us. 
BRIAN: Got you.
MARK: That makes a lot of sense. I want to return a little bit to the different tiers inside Support so that people can kind of have a feel for what cure they might want to use depending on where they're at with, like, their Google Cloud Platform usage. Bronze seems very obvious because, well, you're already signed in. We talked a little bit about silver, I think, to the degree that you're like, "Okay, you get the personalized experience." For me, looking at gold, it seems like the big win there is you get that consultive ticket, so you get that ability to be able to ask, you know, "Give me a guide on how to build this thing. I've never done it before." At what point do you think people should be moving from silver to gold? Is it just because they have that sort of need? And then also, like, what point do you think people should be moving from gold to platinum? 
TERRANCE: So the big thing, I think, changing from silver to gold is when you need that 24x7 support. That's really the big difference between silver and gold 'cause you're like, when your stuff is down on the weekend, and you need someone to answer your questions so your business is back up and running, gold is the right one. 
MARK: And specifically that phone support as well, yeah? 
TERRANCE: Yeah, phone support as well. And so even if you look at the target response times on things--So when you're down in production, right, I would call that a "P1" ticket, like, "priority 1, I'm down. I'm losing money." We target to respond within one hour, right? When you're on a silver level, the target to response is four business hours. So if you're down on the weekend, it could be up until 1:00 Australia time on a Monday when we would start responding to you. So if you're on the Pacific time, it'd be about, like, 9:00 p.m. Sunday.
MARK: Okay.
TERRANCE: And then from gold to silver, it's only a--Or from gold to platinum, it's only an extension of that, so we target responses in 15 minutes. So if you're a really big customer, and you lose thousands, tens of thousands, millions per a minute down, platinum's the place to be. 
MARK: That makes sense. 
BRIAN: And it looks like the difference there is this critical impact issues versus high-impact issues. What's the difference there?
TERRANCE: So critical impact is like, "System is down in production, and I'm losing money." High-impact--It's hard to describe, but things just short of that are high-impact. It's always hard to--So like, it would be classified as priority, so P1's are like, "system's down and losing money in production." P2 it would be high-impact. It's always hard to describe what a P2 is. So we support you on the weekends with P2 stuff. 
BRIAN: Okay. So I notice the disk is filling or some sort of, like, performance degradation or you know, kind of things are trending towards bad, but they haven't actually failed yet.
TERRANCE: Yeah, so like, not that it happens often, but let's say, for example, you're putting a lot of objects into GCS, and GCS--as an example--GCS has an error rate of 1%, and you start seeing GCS go to 2%, 3%, 4, 5? That would be a time to file a P2 to get on platinum--Well, if you had platinum.--and tell us, like, "Hey, GCS error rates are going up." I mean, our engineering team should already be aware of it, but like, that would be a P2 thing of like, "We're kind of going towards the bad situation. Can you identify and solve it before we are actually down in production?"
BRIAN: Okay. 
MARK: Brilliant. Okay. So we're starting to run out of time just a little bit, but all this support stuff sounds really great. So how do I sign up? What's the best way to get started?
TERRANCE: So you can sign up for silver and gold just by clicking the buttons on Cloud.Google.com/support. It'll actually tell you how to do it. For platinum support, it requires a little more work and a little more effort. Usually involves a sales team member to actually start the process in an offline contract. Not necessarily strictly there, but that's generally how the process goes. 
MARK: Cool. But I can access buttons for that to get in contact through that same URL I believe. 
TERRANCE: Yep. 
MARK: Wonderful. All right, and is there anything else about support that we haven't covered or you'd want to say or plug or any thing extra that you want to add? 
TERRANCE: Probably the only thing to add is that--or to reiterate--is that the people you're talking to on the other ends are basically Google engineers. It's the same people that--comes out of the same talent pool as SWEs or SREs here at Google, and they just have some extra skills that we think make them good to be in this position. 
BRIAN: That's awesome. 
MARK: That is very, very cool. All right. Well, Terrance and Brian, thank you so much for joining me today and joining us here on the Google Cloud Platform Podcast. That was a super interesting conversation. 
TERRANCE: Thanks. 
FRANCESC: So thank you so much to Terrance for taking the time to talk to us today. Actually not to us, but talked to Brian and Mark. Thank you, Brian, also for helping us with this interview. 
MARK: Absolutely. He jumped in because I had to reschedule every thing 'cause I managed to hurt myself with my dog. 
FRANCESC: Yeah, that's a long story, but fortunately every thing is fine, and Brian is a--He's actually awesome. Not only he's helping us having good mikes, now he's also helping us interviewing people. 
MARK: Yep.
FRANCESC: Next step is he will actually just run the podcast by himself. 
MARK: Probably, yeah.
FRANCESC: Yeah, which is totally fine. I'm looking forward to that. Cool. So let's go with the "Question of the Week." 
MARK: Absolutely. So we were talking about this a little before. Basically it sort of runs along the lines of say you have your app running on something like App Engine, and you want to connect to one of the other Google services that sort of run in the Cloud such as, like, Calendar or possibly Drive. I've had this question before as well. I have no idea how to do it, but I do believe you do, Francesc. 
FRANCESC: Yeah, and I actually got the same question but in a slightly different way. I'm gonna share it 'cause I thought it was really cool. There was these people that were doing a little application where you could take a picture. This picture could be sent to the Cloud Vision API. They get the OCR on that, so "character recognition" on that image, and then create a new document on Google Docs with the text recognized from the image which I thought it was very useful. 
MARK: That's cool.
FRANCESC: So yeah. So the part is like, "Okay, so the Google Cloud Vision API obviously you use the API. How do you do, like, the Docs part of it?" And there's actually a couple ways of doing it, but the easiest one is using simply the REST API. Most Google services, they provide an API, and it's mostly REST APIs. There's also some times a gRPC APIs, but you're gonna see REST APIs which means that you can use them from anywhere, and you can use them very easily from your own machine if you want to try them out. There's also something that I think that people should know about if you've never tried it. It's Google API's explorer which is actually basically a playground where you can see all the APIs we offer, and then you can directly from there just fill the gaps, like, fill the fields that you want to try and then just run it, and it manages all the authentication part of it. So it's very nice. But obviously you can also do that from any prominent language running anywhere, so you can do it directly from Compute Engine, from Container Engine, and if you're doing it from App Engine, you're gonna need to use things like URL Fetch which allows you to do (HCP) requests from an App Engine instance to the outside world. 
MARK: Cool. Now, do I need to build those (restoral) requests myself, or are there any, like, SDKs or client tools that I could use to make my life a little bit easier? 
FRANCESC: Yeah, that is a very good question. So if you are the kind of person that wants to create every thing by himself, by themselves, it's totally fine. You can totally do that, but we also offer a bunch of libraries that basically offer the same functionality but in an idiomatic way. So for instance, for Google Docs, you can see that there's, like, a Java, Java script.net object. You see PHP, Python, and then also Dart and Go, obviously, and not just (inaudible), and I'm pretty sure there's even more than that, but basically all of those libraries are developed some times by our engineers, so basically they're gonna be very, very idiomatic, and they're gonna feel like normal libraries. Some times for other services, you will see that they're actually auto generated, so it will not be as idiomatic, but still it's easier than writing the whole request yourself. 
MARK: That makes a lot of sense. 
FRANCESC: So yeah. So you can check it out. We'll have the links on the show notes, and that way you can easily integrate Google Cloud Applications with Google services. 
MARK: Sweet. That sounds really great. Excellent. Well, we both seem to be a little bit out and about, but any particular events you're gonna be at in the next few weeks, Francesc? 
FRANCESC: So I've heard about this conference, and that sounds very interesting. I think it's cool. Google I/O?
MARK: I've heard about this. What is that? 
FRANCESC: Yeah, I don't know. It's gonna be happening in Mountain View, so yeah, I'll be there. We'll be there. 
MARK: We'll be there. 
FRANCESC: I'm gonna be speaking--Yeah, I'm gonna be speaking about Google Cloud Spin. 
MARK: Excellent. I will be there also talking about multiplayer games with Firebase. 
FRANCESC: Cool. And after that, I will go to Chicago for my first time ever for GoTo. 
MARK: Very nice. I'll also be standing around at some of the areas we'll have at Google I/O, so you can come and talk to Googlers and sort of chat to us about your problems or other things you want to solve as well, so definitely swing by. I'll be there as well as many of my peers. 
FRANCESC: Cool. Yeah, I'll be also there wearing a Google Cloud Platform Podcast t-shirt. 
MARK: I would never take that t-shirt off. I am constantly wearing that t-shirt. 
FRANCESC: Yeah, you're actually wearing it right now. 
MARK: I am wearing it right now. Absolutely. 
FRANCESC: That's amazing. Just for people to know, we have more than one, so we actually wash them. There's more than one Google Cloud Platform t-shirt--Google Cloud Platform Podcast t-shirt. There you go. Great. So before we say goodbye, why don't we remind people how to contact us 'cause I think there's something new today. 
MARK: There is something new today. There's a new URL that you can reach our website. I know it doesn't seem like a big thing. You can get to us at GCPPodcast.com. 
FRANCESC: It is a huge thing. 
MARK: It's pretty cool. Now you can get to us at Cloud.Google.com/Podcast, makes us feel very, very official or even extra official. 
FRANCESC: Yeah.
MARK: But yeah, Cloud.Google.com/Podcast will take you to GCPPodcast.com and the two of us. 
FRANCESC: Yeah, very cool. Also if you want to send us an email, you can send it to Hello@GCPPodcast.com. We're also on Twitter. 
MARK: At @GCPPodcast.
FRANCESC: We are also on Google+.
MARK: As +GCPPodcast.
FRANCESC: We have a sub Reddit. 
MARK: At /R/GCPPodcast
FRANCESC: And at Slack community, no, Slack channel.
MARK: Slack community, yeah. Inside the Slack community we have a channel. It's #Podcast that you can reach us at as well. 
FRANCESC: And I'm almost sure I'm forgetting some thing as usual, but--
MARK: No, I think that's it. I think we're good. 
FRANCESC: Wow. Amazing. 
MARK: Yeah. 
FRANCESC: I remembered all of them. Cool. So thank you very much, Mark, to take time off your trip to Kentucky to record this episode. 
MARK: Absolutely. Wouldn't miss it for the world. 
FRANCESC: And looking forward to talking to you next week face-to-face next time. 
MARK: Yeah, see you back in San Francisco next week. 
FRANCESC: See you. 
MARK: Bye.
{{< /transcript >}}