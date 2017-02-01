+++
audioDuration = "00:36:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.38.mp3"
audioSize = 51947885
categories = ["SRE", "Paul Newson"]
date = "2016-08-10T01:07:49Z"
description = "Paul Newson is back to the podcast to tell us about his experience as an SRE, or Site Reliability Engineer. They keep Google and Google Cloud running and he explains to us how they make that happen."
draft = false
episodeNumber = 38
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Site Reliability Engineering with Paul Newson"
image="/images/post/sre-land.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/ZHGsgYwbi1M"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4x2qog/episode_38_site_reliability_engineering_with_paul/"
+++

[Paul Newson](https://twitter.com/newsons_nybbles) is back to the podcast to tell us about his
experience as an SRE, or Site Reliability Engineer. They keep Google and Google Cloud running
and he explains to your cohosts  [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) how they make that happen.

<!--more-->

##### About Paul

[Paul](https://twitter.com/newsons_nybbles) currently is going through a six month
rotation as a Software Reliability Engineer,
previously he focused on helping developers harness the power of Google Cloud Platform
to solve their big data problems. Before that, he was an engineer on Google Cloud Storage.

Before joining Google, Paul founded a startup which was acquired by Microsoft, where he
worked on DirectX, Xbox, Xbox Live, and Forza Motorsport, before spending time working
on machine learning problems at Microsoft Research.

##### Cool thing of the week

- Introducing Cloud Natural Language API, Speech API open beta and our West Coast region expansion [blog](https://cloudplatform.googleblog.com/2016/07/the-latest-for-Cloud-customers-machine-learning-and-west-coast-expansion.html)

##### Interview

- What is ‘Site Reliability Engineering’? [Interview](https://landing.google.com/sre/interview/ben-treynor.html)

<div style="text-align: center">
  <img src="/images/post/sre-land.png" width="50%">
</div>

- Google Cloud Platform opens its first West Coast region [TechCrunch](https://techcrunch.com/2016/07/20/google-cloud-platform-opens-its-oregon-region-to-better-serve-the-west-coast/)
- Site Reliability Engineering [Book](https://landing.google.com/sre/book.html)
- Go Programming Language [Homepage](https://golang.org)
- Keys to SRE - SREcon14 [YouTube](https://youtu.be/n4Wf14e2jxQ)
- Adventures in SRE-land: Welcome to Google Mission Control [blog](https://cloudplatform.googleblog.com/2016/07/adventures-in-SRE-land-welcome-to-Google-Mission-Control.html)

##### Question of the week

- How Kubernetes Updates Work on GKE [blog](http://terrenceryan.com/blog/index.php/how-kubernetes-updates-work-on-container-engine/)

##### Were will we be?

- Francesc is working on a video series [justforfunc](https://www.youtube.com/playlist?list=PL64wiCrrxh4Jisi7OcCJIUpguV_f5jGnZ)
- Mark will be at [PAX DEV](http://dev.paxsite.com/) in Seattle and then [Strange Loop](http://www.thestrangeloop.com/) in St Louis

{{< transcript "FRANCESC: Hi, and welcome to episode number 38 of the Weekly Google Cloud Platform Podcast. I am Francesc Campoy. And I'm here with my colleague Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How are you doing today? 

FRANCESC: Very good, very good-- very, very happy to have a repeating guest today. 

MARK: Yeah, Paul Newson's going to be joining us again. First time he talked to us about storage. But now it's going to be something totally different. 

FRANCESC: Yeah, apparently he changed teams for a little bit. I'm hoping he will come back. But yeah, he's going to be sharing what he's been lately up to, which is really cool. So yeah-- very, very interesting interview. I was checking. Yeah, that was episode 14. 

MARK: Ooh. 

FRANCESC: Episode 14-- storage with Paul Newson. Episode 38-- other stuff with Paul Newson. 

MARK: It's like if you divide it by 2, it's exactly twice. 

FRANCESC: No. 

MARK: Except my math is totally wrong. Numbers are hard. 

FRANCESC: OK, anyway-- so yeah, we're going to be talking with Paul Newson about his new role as an SRE and what it is to be an SRE. And then we have the question of the week, which is guess what again? 

MARK: A little bit about Kubernetes. 

FRANCESC: Nope, not this time. Well, actually, Google Container Engine-- so yes, it is Kubernetes again. It is about how to upgrade your Container Engine-- 

MARK: Cluster. 

FRANCESC: --clusters to newer versions, and how to do that. But before that, we're going to be talking about two cool things of the week. 

MARK: Yeah, we have a couple of really great announcements. First of all, we released a whole new API under our cloud machine learning spectrum-- Cloud Natural Language API, which is really cool, and the Cloud Speech APIs. They kind of work hand in hand. It's pretty sweet. 

You can send basically audio to it. And it's able to basically take the text-- go speech to text, which is really awesome, but also do things like sentiment analysis, entity recognition, syntax analysis, to do way more stuff than I can understand about the English language and various other languages as well, and break it down into verbs and adverbs and what's important and what's not, and do all sorts of other fun things with it. 

FRANCESC: Yeah, it is really cool. And one of the things that I really love is this entity analysis, which sounds kind of abstract. But it is able to tell you things like-- if you have a text that says, oh yeah, last year I went to the Big Apple, it will tell you, oh, the Big Apple? You mean New York. It will actually make those links, which is pretty amazing. It is not just basic text analysis. It's way more than that. It is very impressive. 

MARK: It is really impressive. The other thing that we announced is a whole new region. 

FRANCESC: Yes. Because why not? 

MARK: Why not? We don't have enough data centers or computers. So we now have a region in US west. 

FRANCESC: Yeah, and we're going to be talking a little bit more about that during the interview. Because apparently our colleague Paul was somehow related to this. Yeah, very interesting. 

MARK: It's pretty cool. I'm just reading now that initial testing shows that users who are in Vancouver, Seattle, Portland, San Francisco, and Los Angeles can expect to see a 30% to 80% reduction in latency. 

FRANCESC: Nice. 

MARK: That's pretty good. How can you complain about that? Excellent. So that seems like some cool stuff. But why don't we do some other cool things, like go talk to Paul? 

FRANCESC: Yeah, let's go with that. 

MARK: Sounds good to me. 

FRANCESC: So I'm very happy to introduce Paul Newson. Hey, Paul. How are you doing? 

PAUL: I'm doing great. How are you? 

FRANCESC: Very happy to have you back to the podcast. We had you a long time ago, when you used to be a developer advocate, to talk about storage. I don't even know what episode was that. 

MARK: It was really early. 

PAUL: I think it was a single digit. It was that early. 

FRANCESC: That was years ago. 

MARK: A lifetime ago. 

FRANCESC: And now you're back. You're not a developer advocate anymore. So who are you? What do you do? Hi, Paul. 

PAUL: So my name's Paul Newson. And I am indeed still a developer advocate. But I'm doing this really cool rotation program called Mission Control, where I get to be a Google SRE, which is a Site Reliability Engineer, for approximately six months. And I get to learn what site reliability engineering is all about. It's something I've been really curious about for a long time. I've been at Google now a little over six years I think. 

And for the first few years I was here, I was a software engineer on cloud storage. And at the end of my time there, I was really curious about SRE. And I nearly did a Mission Control rotation. But instead, I decided to turn left instead of right and became a developer advocate and ended up on a team with you folks. And so a few months back, I was having a great conversation with Brian Dorsey, who you both obviously know, about how difficult it is to talk about reliability with our customers as a developer advocate. 

I mean, it's hard to describe. What is the conversation you can have about that? And I realized, you know what I'd really like to be able to do is talk about site reliability engineering at Google. But I just don't feel like I know enough to have that conversation. I didn't feel like I could really represent the whole site reliability engineering philosophy and approach to reliability really well. 

So then I hit on the idea of, maybe now's the time for me to do this Mission Control rotation and really learn what this is all about. So that's what I did. And I started on that in May. And I guess it's July now. So I'm a couple of months in. 

And so it's still just the beginning. One of the things that I'm excited to do while I'm on this rotation is write about it on the Google Cloud Platform blog. So I did that a couple of weeks ago I think. And now I'm here talking to you guys on the podcast. 

FRANCESC: Yeah, the blog post was amazing-- really loved it. 

MARK: Absolutely. So let's find out. So what is a site reliability engineer? 

PAUL: So site reliability engineering is, to quote Ben Treynor, what happens when you put a software engineer in charge of an operations function. So the history of the term-- he's the one who coined the phrase. Because they wanted to have a phrase or a name or a title for, what do we call these software engineers who aren't building features into the product, but are instead concerned with making sure the product can scale up, and making sure the product is reliable, and doing all of that in a sustainable way that doesn't burn people out? And that's what site reliability engineering was meant to capture. 

Other companies may call it SRE. They may call it something else. Broadly, it is an operations function. We think we add a little twist to it that at least was novel at the time. DevOps is also sort of mixed in there. It's all kind of in the-- we're not building features. We're talking about how you do something like this reliably and well and scalably. So that's kind of what, in a not so brief nutshell, site reliability engineering is about. 

FRANCESC: Yeah, it's a role that I really like at Google. Because it's I think very different to what other people expect from DevOps. I know that SRE people write lots of code. They deal with a great amount of code. But my favorite thing about them is you have SRE jackets. 

[CHUCKLING] 

PAUL: I don't have an SRE jacket. 

FRANCESC: You don't have it yet. You better get one. Those are amazing. 

PAUL: Well, I'll tell them you said so, Francesc so that now they have to give me one because you said it publicly on the podcast that I should get one. So maybe that's just what I need. But yeah, there's a badge. It's a leather jacket. You can choose your style. There's a few different styles. 

There's a badge that you can put on it, which is modeled after the badges that they would have at NASA Mission Control for each mission. They would have a mission patch for each mission, which I think the astronauts would wear. And then they would have a mission patch for the mission control people as well. 

And so somebody came up with the idea long ago that, wow, it would be really cool to have that style of patch on a jacket just to show, hey, we're SREs. We keep Google up. 

FRANCESC: Yeah, those are really cool. And the patch has a slogan? 

PAUL: Yes. And I'm not going to try and pronounce the Latin. 

MARK: Aw, come on. Try it. 

PAUL: No. No. 

FRANCESC: Come on. You're from Canada. They speak Latin up there I think. 

[CHUCKLING] 

PAUL: But it's based on the motto that Gene Kranz coined for mission control, which I believe is-- oh man. You'd think I'd have this by heart. 

FRANCESC: Because hope is not a strategy. Is it that one? 

PAUL: That is a different one. 

FRANCESC: Oh. 

PAUL: Hope is not a strategy is an unofficial SRE slogan. But this one is tough and competent. 

FRANCESC: Oh, OK. Cool. 

PAUL: That was the Mission Control slogan. And that's what's on the actual patch. But hope is not a strategy is also one of the things that is an SRE slogan. And the philosophy there is anything that can go wrong will go wrong pretty much. And hoping it won't go wrong is not a viable strategy when you do things at the scale that Google does. 

Because at some point, if you have enough servers doing enough things in enough data centers, then something that happens once in a million is happening constantly at Google. Because we're doing millions and millions and millions of things all the time. So those very, very rare bugs that might hit a small service once a year could hit us once a day or once a minute. So hope is not a strategy is a very important slogan for SRE. 

MARK: Sometimes you even get struck by lightning four times in a row. 

PAUL: Yes. [CHUCKLING] And then it happens a second time. 

MARK: But one thing I love about that is I just know that there is probably an SRE or a [INAUDIBLE] person somewhere who's like, all right, now we need to protect this against [INAUDIBLE]. 

[CHUCKLING] 

There's someone with that plan with a document saying, this is what we need to prevent against going forward. 

PAUL: So you can't predict every failure. That's an interesting thing, right? So what you want to do is have sort of a culture and a process for dealing with whatever it is that comes up. Because you can't predict everything. In fact, this job would be extremely boring if all we ever did was respond to the same problems over and over again. 

It's actually an explicit goal that we should never have the same problem twice. Because we had it once already, we did a post-mortem on it, we figured out why it happened, and we fixed whatever that was. So every time the pager goes off, it should be a new and novel thing you've never seen before. 

So that's what you have to practice for. You can't practice for the specific scenario. You have to work on things that are generic across problems, across incidents. You need a good incident response sort of method that people understand. 

I can't speak to that right now. Because I haven't learned that part. I'm currently embedded with the Google Compute Engine SRE team. And one of my goals for this quarter is to be trained up to go on call so hopefully I can go on call next quarter. 

But currently, I don't understand the incident response process that we have here. So I'm not going to pretend to say something intelligent about it here on the podcast. But I know it exists. And I see it in action. And I watch. 

I was thinking this morning, actually, anticipating this interview. And I was thinking, you know, I feel like we should have t-shirts that say "Keep calm and SRE." Because it's kind of this very-- like even when stuff is going wrong, people are pretty chill. Because it's like, this is the job. And people are set up to succeed in it. You have the resources. You have the backup. You're not out there by yourself. And it happens all the time. 

MARK: It's kind of like being on call, like you're part of emergency services. Your job is to put out fires. Or your job is to save people. Your job is to basically sit there and say, OK, things are going to go wrong all the time. And our job is to make sure that they go as best as they can. 

PAUL: And that's half the job, I would say. And this is a really, really important thing to understand about SRE, and probably, I would say more broadly, modern operations of large scale services. So let's do a thought experiment. You ship a service that runs. And it's running on 10 servers. And you need to pay one person full time to do sort of manual things to those servers to keep them up. 

We call that toil, where it's something that you do. It's necessary. It's important. But basically, what you're doing is you're returning the service to a good state. 

And now you get lots of new customers. And you have 20 servers. Now you need two people to do that, assuming your toil scales with the number of servers you have. Then let's say you don't add servers. Let's say you have these really sharp developers who come up with these awesome new features, and they deploy these new features. And that increases the surface area of the product. The product got bigger, even though it's not more servers or more users. 

So now you're growing in multiple dimensions. If you need to scale the number of people doing toil on your service with the number of servers or the number of users or the amount of traffic or the amount of features, then eventually, you're going to have an ops team which is unsustainably huge. You won't be able to hire enough people to take care of your service. 

So I would almost say the more important role of SRE-- we're well known for, we carry the pager for the services we support. We are on the front lines. That's what everybody thinks of. Even internally at Google, usually that's what everyone thinks of when they think of SRE. But we spend less than half of our time doing that. And we spend more than half of our time writing code and doing engineering work so that the toil does not scale with the size of the service. 

Because let's take Google Compute Engine as an example. Our usage is growing. That's probably not a secret. And we are constantly launching new features. Just look at the Cloud Platform blog. So we're growing in all the dimensions that you can imagine. The product is growing much much, much faster than the size of the SRE team supporting it. In fact, the size of the SRE team supporting it is roughly constant if you look at the feature set that one team is supporting. 

So how is it possible that the service can get so much bigger and the team that is sort of on the front lines on call for it doesn't grow? Well, that's because that team is constantly doing work to make the service easier to keep up, easier to monitor, easier so that things that might have happened a year ago that required manual intervention just happen now. 

We have programs for that. Like if it's something that you can do without really discerning human judgment, you just write a program for that. And then it does it for you. If you know what the solution is, you just write a program for it. And then you deploy that program. And then you make sure that program's up. 

FRANCESC: That reminds me of the joke-- if you're not good, I'll replace you with a script. That's something like that. Basically, that is your job. 

PAUL: Exactly. We don't want to hire more SREs to do the same thing that we're doing. We want to write scripts for what we're doing today, and then go do something interesting tomorrow that we haven't done before. 

FRANCESC: So talking about things that are interesting, you said that you are not on call and that you're doing other things. One of those things is actually a pretty amazing thing. It is a new region on Google Cloud Platform. 

PAUL: That's correct. I had the privilege of being peripherally involved in the unveiling of our new US West One region this past week, which was a really great experience. And I want to be super clear here that many, many, many other people did tons and tons and tons of work over many weeks to actually bring up a new region. 

Servers need to actually arrive at places and be put in racks. And all kinds of services need to be turned up and monitored on those things. And then the very, very, very last step is we sort of flick a switch. And now it appears to the world. And everybody can see all this hard work that's happened over a period of time. 

So my part in that was I got to be somewhat involved in flipping the switch, so to speak. Because something that I'd been working on was how we do configuration changes for our Google Compute Engine. Let me step back a second. 

Any change you make to your service carries some risk, right? If you want a 100% reliable service, never change anything. And then it won't break, right? But that's not what customers want. Customers want new regions. Customers want new features. We need to do these things because even if we tried to stay static, our customers wouldn't. They would bring new workloads to us. 

So we're constantly modifying and changing the system. And the interesting part is, how do you do that as safely as possible? So I was involved with, all right, we're going to unveil this new region. How do we want to do this? What are the series of steps we want to go through? What are the checks and balances along the way? And how long do we want it to take-- things like that. And so I got to be involved in defining that process, which was mostly just writing down stuff I'd learned from all the people around me in the past couple of months. 

But I just happened to be the person who was collecting that information, then presenting it as a plan. And then people much more knowledgeable and experienced than I said, yes, this plan makes sense. Go do it. And then I wasn't even the one flipping the switch. Because if you're going to modify a production service, the person who should be doing that is the person who's on call. So I essentially presented this plan to the people who happened to be on call, who happened to be carrying the pager at that moment in time, and said, all right, here's how we're going to do this. And then they went and did it. 

So it was lots of fun. I really enjoyed it. And now I want to get more involved in how we turn up regions and be involved in one from beginning to end. We've announced that we're going to do a lot of these over the next year or so. So there should be lots of opportunity for me to get involved in that. 

FRANCESC: Cool. I have a small question for you from earlier, because I'm actually just curious. You talked about doing a rotation through SRE. Do people normally do rotations? Like do they come and they go, or is it a permanent position? How does that normally work? 

PAUL: So SRE is usually a permanent position. But we have this thing called the Mission Control program. Because a lot of software engineers who have worked at other companies come to Google. And they come to Google as a software engineer. 

And they may be interested in how to run a service at really high scale, kind of like I was when I came here. But they may have come from a culture where operations is not as well regarded, and where the operations function is not as well supported as it is at Google. So they may be hesitant to become an SRE. They might think, man, I don't want to carry the pager. That just sounds like it's going to be draining. It's going to take over my whole life. 

So this is a way for them to come into SRE, learn all about it, get trained up, carry the pager, and see if this is something that they like to do. And what often they discover along the way is, wow, real engineering work happens here. I'm still writing code most of the time. But I'm also doing these really cool things with these huge systems that I can't believe they let me touch this stuff. It's fantastic. 

And then they have the experience of carrying the pager. And they realize, oh, Google understands how to make being on call a sustainable thing that doesn't ruin your life. We have the advantage of being a global company. So the Google Compute Engine team that I'm embedded with, for example, is in our Seattle office. But we have a sister team in the London office, which is conveniently about eight time zones away. So when we're sleeping, they're on call. And when they're sleeping, we're on call. It makes it far more sustainable than the typical, you're the ops guy. Here's your pager. It could ring at any time. Good luck to you. 

MARK: Yeah, I still have stress-induced dreams of getting woken up at 4 o'clock in the morning to battle some fire that happens on some server. 

PAUL: Right, and that's not how we do it here. Because it's not sustainable. Our management in SRE views SREs as a rare and valuable resource that it's hard to hire into this position. And once we have somebody in this position, we want to take care of them and make sure that they want to stay in that position. 

Because we can't possibly hire enough. This is the other reason why we need to make sure that we don't need to scale the number of SREs with the size of our services. Because we couldn't possibly hire enough if that's what we were doing. 

So we have guidelines around how many incidents an on-caller should be taking care of in a particular shift. Then if it goes above a certain threshold, that's a warning sign that this service is now not sustainable. And we need to stop focusing on features, or shift our focus from launching new features to, make this a more sustainable service. 

Because if we don't, it's going to run away. These feel like sort of the slippery slopes. Once you get a certain velocity of unmanageability, then suddenly, you're spending all of your time trying to deal with the unmanageability. And you can't make progress anymore. 

So we have these metrics, which we review on a regular basis. How many incidents are we seeing per shift? Are our engineers spending a majority of their time actually doing work to make the service more maintainable, more sustainable, versus just doing manual toil? And so coming back to the Mission Control rotation, you get into SRE, and you realize, wow, Google has figured out how to make this work. 

And not only that-- this is fun. This is rewarding. I like the people I'm doing it with. This is great. I want to keep doing this. I'm not scared of it anymore. So roughly half the software engineers who come through-- and software engineers from a development team who previously had been working on launching new features, roughly speaking-- who come through a Mission Control rotation, they choose to stay as SREs after the rotation. And that becomes their permanent job. 

There's other people who are just hired straight into SRE because they were doing SRE-like work at another company. Or maybe they just take the plunge. And they say, you know, I really want to get my hands on these huge services. And they make the plunge. 

But to answer your question, the Mission Control rotation program is officially a rotation program that lasts for six months. But really what it is is a chance to experience SRE. And then you get to make a choice at the end. SRE would probably love to have you stay. But you can always go back to a typical development position as well. 

FRANCESC: Or developer advocacy. 

PAUL: Or in my case, developer advocacy. 

FRANCESC: We want you back. 

MARK: I was going to say, now I'm a little worried we're going to lose you. 

FRANCESC: I have a couple of questions regarding this. The first one is you said that you still write a lot of code. And you know my question now. What language? 

PAUL: Oh, well, you'll be happy to hear, Francesc, that I am currently learning Go. 

MARK: Whoa! 

FRANCESC: There you go. 

PAUL: Because the system that I will be enhancing with new features is written in Go. 

FRANCESC: Nice. 

PAUL: And Go is a very popular language among SREs for all reasons I probably don't need to tell you, Francesc, other than just being awesome. You know, it's also very fast. But it's because previously, Python was very popular among SREs, mostly because of that really fast iterative development. 

And with Go, you get that. But it's not an interpreted language, which personally-- I'm going to expose my bias now. I really like languages that actually compile to something, and where types have meaning and I'm not getting type errors at run time-- my personal bias. Use the tools you like. But I'm a C programmer at heart. So Go makes me very, very happy. 

FRANCESC: And you were saying that it is hard to hire SREs. And that is why when Google hires SREs, we try to keep them as happy as possible. What are the skills you think are the most important to have to become an SRE, or to be a good SRE? 

PAUL: Well, I'm going to try and accurately repeat things I've heard others say. Because I don't feel I'm really qualified to give my own answer to this question. But we sort of have two types of people who typically come in and interview for SRE and are successful and become successful SREs. 

One is what you would expect from pretty much applying to a software engineering role at Google. Same skill set-- you're a software engineer. You know how to write code. You know how to architect systems. Hopefully you have some distributed systems knowledge. Those people can come in and become successful SREs. And in fact, most people who are coming through the Mission Control program fit that profile. 

Then there's what they call the system engineer. That's what they call it. And these are people who may not have the formal software engineering background. Like maybe they didn't graduate from a computer science or computer engineering program. But they have been architecting and building and operating large scale systems as part of their work and part of their career. And they come in with a particular mindset and a set of experiences, which is super valuable. And so there's a path for them as well within SRE, both in terms of being hired and progressing in their career. 

And what we've found is that it really doesn't matter which of those two profiles you meet. These people who may not have the formal software engineering or computer science background, they're still writing code today. Lots of people write code who don't have that background, and there's lots of people who do it very well who don't have that background. 

And they come in. And they make equally good contributions. But they also tend to bring a set of experiences and knowledge of low level systems and often networking, which is super useful to SRE. And then these two sort of populations mix together. And everyone learns from each other. And it's fantastic. 

MARK: Cool. All right, well, we're starting to run out of time unfortunately. This is a great conversation. But before we run off, is there anything you'd like to mention or touch on or something we may have missed in our questions that you want to say? 

PAUL: Oh, let's see. Oh yeah, there's a couple things. One is take everything you've heard here with a grain of salt. This is obviously just my opinion based on a few weeks of hanging out with these people. And I'm not an expert on SRE. So please bear that in mind. 

But there's also a couple of other resources I'd like to point people towards. At SREcon14, I believe, Ben Treynor gave a talk where he walks through the principles of SRE. And a great deal of what I've told you here today I learned from watching that talk and other talks like it. So if this is an interesting topic to you, it would be very well worth 45 minutes of your time to go watch Ben Treynor talk about this instead of listening to me. 

And then if that really whets your appetite, and you really want to go deep, there was a book released recently called "Site Reliability Engineering." And that's a great read. I'm still working my way through it. I don't know all the material in it. 

And I think there's a lot of good wisdom in there. It was written by people who are SREs at Google. It's sort of a series of essays on a series of important topics. I think there's a lot of really good knowledge in there. So that would be a fantastic resource. 

And then finally, if you are interested in this topic but don't have the time to read the book or can't set aside the 45 minutes, just keep watching the Google Cloud Platform blog. Because I hope to publish more little nuggets of my experience there in a way that won't take you hours and hours to consume, where I can introduce some of the concepts and some of the aha moments I've had along the way. And maybe you can share. 

Because I'm on this journey from not understanding this stuff to hopefully understanding this stuff. And I hope to publish some of those aha moments along the way when I have these realizations about what's important and what's cool. And maybe you can vicariously share in those with me on the blog. 

FRANCESC: Excellent. That is great. We'll have links to every single one of those things that you said in the show notes. 

MARK: Absolutely. But Paul, thanks so much for coming to join us today. It's been an absolutely fascinating conversation. 

PAUL: It's my pleasure. And maybe we can do this again, maybe in the new year after I've had my rotation, and I can correct all of the mistakes that I made in this interview and add more detail. 

FRANCESC: I think that's a deal. 

MARK: Done. 

FRANCESC: Yeah, great, thank you so much. 

PAUL: You're welcome. Thanks. Good talking to you guys. 

MARK: That was an amazing conversation with Paul. Thanks so much to him for coming and joining us today. I learned so much more about SREs than I think I even imagined I would. So it was awesome. 

FRANCESC: Yeah, I am very happy that he was the one proposing that he will come back before he finishes rotation. Because he's totally doing that. 

MARK: Yes, absolutely. 

FRANCESC: We'll have him back again. That's for sure. 

MARK: 100%. But why don't we get into our question of the week, which is looking at when you have a Container Engine cluster set up on GKE. Obviously, new versions of Kubernetes come up. And you want to upgrade to them. How do you handle that? I know part of it is sort of automated. Part of it's not. How do you manually process that through and make sure you have the least amount of down time and sort of manage that within your schedule for your application? 

FRANCESC: So yeah, that is a question that many people ask quite often. So one of our coworkers, Terry Ryan, wrote a blog post about it. And we'll have a link on the show notes as usual. But basically, the answer is, OK, so the masters will be upgraded automatically at some point not too long after the new version has been released. The master will be rebooted. And you don't need to care about this. Everything just happens. It's invisible. It's magic. And it's beautiful. 

Now, we don't do this for nodes. Why? Well, because imagine that you are getting a huge amount of traffic. And at the moment, we decide that is a perfect moment to restart your nodes-- not great. So you can restart them either by just restarting them. You will get a new node. And that new node will have the new version of Kubernetes. Or also you have a way to upgrade manually. 

MARK: MARK: Yeah, there's a series of G Cloud commands, like upgrade commands. And you can also do it through the web interface as well. It says in our documentation, generally, you want to be upgrading in a timely manner. Nodes that are more than two minor versions behind the master may not work properly. So you should be upgrading your nodes. But yeah, the blog post sort of covers the several different ways you can do it and how you can make your upgrades happen in a timely fashion. 

It also has some discussion of things like node pools and what not, what to do when you have volumes mounted, and how to manage that, and some other minor point as well. It's pretty comprehensive. 

FRANCESC: Yeah, I really like the fact that the easiest way to upgrade a node pool or even a master is to just go to the information on Google on the console. And you click on Upgrade Available. And that's it. That is incredibly simple. But of course, if you want to do it through G Cloud so you can write your own script or whatever, that is totally doable and very simple. And we also explain how to do it on the blog post. 

MARK: Absolutely. So before we run away, I know that you're not necessarily traveling anywhere. But you have a new video series. 

FRANCESC: Yes, that is true. So yeah, I'm sure that some of you know MPJ from funfunfunction. So basically, I'm just copying him and doing slightly different things. 

MARK: Inspired by. 

FRANCESC: I'm totally inspired by him. So if you don't know him, go check it out. He's done many videos. And basically what I'm trying to do is just me hacking on stuff. The first episode is actually not even hacking. I saw some code in the wild on GitHub and decided that it needed some code review. So it's a video of myself doing a 35-minute code review talking about how to improve Go code. And the name is Just For Func. 

MARK: Oh nice. 

FRANCESC: 'Cause func like function in Go. 

MARK: Nice. 

FRANCESC: I'm pretty happy with that. 

MARK: It's a good one. I like it. Excellent. Well, I'll actually be in the middle of Australia when this episode comes out. But after that, I will be at PAX Dev in, what is that, late August. And then mid-September, I will be at Strange Loop hopefully doing something. I haven't quite worked out what yet. 

FRANCESC: Nice. Strange Loop is a really cool conference. 

MARK: It's a really cool conference. They have unsessions there. So if anyone has any suggestions for an unsession that they might want to see, please send that through. I'd be interested in maybe putting something together based on that. 

FRANCESC: Cool. Well, I think we're out of time, so I'm just going to thank you again for taking the time to interview our awesome colleague Paul. 

MARK: And thank you for spending time with me as well. 

FRANCESC: And thank you to all our listeners for listening to us. 

MARK: Absolutely. And we'll see you all next week. 

FRANCESC: See you. 
{{< /transcript >}}
