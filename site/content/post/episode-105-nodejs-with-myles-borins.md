+++
audioDuration = "00:32:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.105.mp3"
audioSize = 37358939
categories = ["Node.js", "JavaScript", "Open Source", "Chrome V8"]
date = "2017-11-29"
description = "Myles Borins joins the podcast to share all his knowledge about Node.js!"
draft = false
episodeNumber = 105
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Node.js with Myles Borins"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/VNnho9DN9GF"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7gfxqr/nodejs_with_myles_borins/"
+++

[Myles Borins](https://twitter.com/mylesborins) talks with [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) about Node.js from its history, how to contribute, the consensus-seeking governance, and why it's important to Google Cloud Platform. 

Node.js is an open-source, JavaScript runtime environment built on Chrome's V8 JavaScript engine, and Google is a Platinum Member of the Node.js Foundation.     

<!--more-->

##### About Myles Borins

Myles Borins is a developer, musician, artist, and maker he works for Google as a developer advocate serving the Node.js ecosystem he graduated with a Master of Music Science and Technology from c.c.r.m.a. a.k.a the center for computer research in music and acoustics

##### Cool things of the week

- Reduced GPU prices on GCP and preemptible local SSDs [blog](https://cloudplatform.googleblog.com/2017/11/new-lower-prices-for-GPUs-and-preemptible-Local-SSDs.html)
- Skylake processors now available in 7 regions [blog](https://cloudplatform.googleblog.com/2017/11/Skylake-processors-now-available-in-seven-regions.html)
- New Episodes of Learn TensorFlow and Deep Learning, without a PhD:
    - Modern Convolutional Neural Nets [video](https://www.youtube.com/watch?v=vaL1I2BD_xY&feature=youtu.be)
    - Modern RNN Architectures [video](https://www.youtube.com/watch?v=pzOzmxCR37I)
    - Deep Reinforcement Leanring [video](https://www.youtube.com/watch?v=aRKOJHRbXeo)

##### Interview

- Node.js [site](https://nodejs.org/en/)
- Node.js on Google Cloud Platform [site](https://cloud.google.com/nodejs) [docs](https://cloud.google.com/nodejs/docs/)
- Node School [site](https://nodeschool.io/)
- Node.js with Justin Beckwith [podcast](https://www.gcppodcast.com/post/episode-20-nodejs-with-justin-beckwith/)
- App Engine [site](https://cloud.google.com/appengine/) [docs](https://cloud.google.com/appengine/docs/)
- Cloud Functions [site](https://cloud.google.com/functions/) [docs](https://cloud.google.com/functions/docs/)
- Kubernetes Engine [site](https://cloud.google.com/kubernetes-engine/) [doc](https://cloud.google.com/kubernetes-engine/docs/)
- Introduction to Kubernetes: How to Deploy a Node.js Docker App [site](https://www.sitepoint.com/kubernetes-deploy-node-js-docker-app/)
- Socket.io [site](https://socket.io/docs/)

##### Question of the week

How do you give public postmordems?

- Fearless shared postmortems - CRE life lessons [blog](https://cloudplatform.googleblog.com/2017/11/fearless-shared-postmortems-CRE-life-lessons.html)

##### Where can you find us next?

Mark will be Montreal in December to speak at [Montreal International Games Summit](http://www.migs17.com/en/home/).  
Melanie will be at SOCML (Self-Organizing Conference on Machine Learning) end of this week and [NIPS (Neural Information Processing Systems)](https://nips.cc/) in Long Beach next week.

{{< transcript "MARK: Hi, and welcome to episode number 105 of the \"Weekly Google Cloud Platform Podcast.\" I am Mark Mandel, and I'm here with my colleague, Melanie Warrick." >}}

MELANIE: Hey, Mark. 

MARK: Hi, Melanie. How are you doing today? 

MELANIE: I'm good. How was Thanksgiving for you? 

MARK: Thanksgiving was good. I just hung out with some friends. How about yourself? 

MELANIE: Same. It was really nice to have some time with friends and family. And food. 

MARK: Food. 

MELANIE: That's my favorite part about a holiday. 

MARK: That's a lot of food. Yeah. 

MELANIE: Yeah. 

MARK: That's true. Well, awesome. So this week, we have Myles Borins joining us. A fellow developer advocate, but active participant in the Node.js community. We are going to have a good chat with him. 

MELANIE: That will be fun, and that is still going to be with Francesc, because Francesc did all these great interviews before he left several weeks back. Mark, and Francesc, and Myles will have a good chat about Node.js. And also to note that Google is a platinum sponsor of the Node Foundation. 

MARK: Yep. Yep. So we're going to talk about that involvement, as well. And then after that, we're going to have an interesting discussion around blameless postmortems, but how to do public blameless postmortems. Ones that you share with the outside world. 

MELANIE: That's not always an easy thing to do, but constructive criticism is crucial to improve things. OK. But before we get into all of that, let's talk about the cool things of the week. So to get us started, one of the things that I definitely think is very cool is that Google has cut the prices on GPUs. And specifically, the NVIDIA Tesla GPUs, which are attached to our on-demand Google Compute Engine, virtual machines. And basically, it's been cut by about 36%. 

MARK: That's pretty awesome. And as well as that, if you're doing a batch job processing with GPUs, they've also lowered the price of preemptible local SSDs by almost 40%, compared to on-demand local SSDs. Basically, things are cheaper. 

MELANIE: Cheaper is good. 

MARK: Cheaper is good. 

MELANIE: And GPUs, they're popular, especially when you get into machine learning, especially when you get into Deep Learning. So having machines that you can use that are cheaper are very helpful. 

MARK: That is good. So speaking of doing machine learning, and big compute jobs, and batch processing, and all that stuff, we're now offering the Skylake GPUs in extra regions that we weren't doing before. So now we have them available in South Carolina, Mumbai, and Singapore, joining Iowa, Oregon, Belgium, and Taiwan, bringing the total number of GCP regions with Skylake to seven globally. 

MELANIE: Nice. Seven's a good number. 

MARK: Seven is a good number. And just for fun, we're also lowering the price. 

MELANIE: That's even better. 

MARK: Yeah. So lowering the cost of Skylake VMs by 6% to 10%, depending on your configuration. 

MELANIE: Seems to be in theme, frankly, with the way this last week has been. Everything's getting like cut in price. OK. 

MARK: Yeah. It's like an online sales time. It's after Thanksgiving, in the US, at least. 

MELANIE: Yeah. 

MARK: So, you know, seems like a common trend. 

MELANIE: Last thing we want to mention is Martin Gardner, who's also a developer advocate on our team, was speaking earlier this month at Devoxx, and he extended his series he's been doing around. How to do TensorFlow without a PhD, or I think Deep Learning without a PhD. And in this series, he's added on to information around Deep Learning and Modern Convolutional Neural Nets, as well as he's talking about RNN Architectures and Deep Reinforcement Learning. So those videos, we have the links to them, and we're going to be putting them up on our blog. 

MARK: Super great resources to learn about all this stuff. It's-- 

MELANIE: It's very, very helpful to let people know that you don't have to necessarily dive deep and spend many years understanding before you can experiment with this. 

All right. Let's go ahead and dive into the interview. So next up, it will be with Myles, and Mark, and Francesc. 

FRANCESC: I am very happy today to welcome a new member of our team. Actually, not that new. 

MARK: Not that new. 

FRANCESC: He has been here for a while. Myles Borins. How are you doing, Myles? 

MYLES: I'm doing great. And feeling really new. 

FRANCESC: Yeah, that's good. 

MARK: He's still got that new DA smell, though. 

FRANCESC: Yeah. Not looking that new anymore though. But anyway, so we have Myles. He is going to be joining us to talk about Node and we're going to be talking about Node, and the governance, and how it works in all the open source organization, and all of that stuff. 

But before we start with all of that, why don't you tell us a little bit about yourself. What do you do Google? 

MYLES: Yes. So, as was mentioned, my name is Myles. My other name is Borins. Together it's Myles Borins. And I'm a Developer Advocate on Google Cloud Platform. I focus primarily on Node.js, but I also you know dabble in Compute, and Kubernetes, and Cloud Functions. And pretty much anywhere you can run Node or do Node-y things. I'm on the technical steering committee of the Node.js Foundation, where I was recently elected the Technical Steering Committee Director, so I also sit on the board of directors of the Foundation. 

I'm one of the primary release managers running most of our LTS programs, so most of the version 4 and version 6 releases, and some of the version 8 releases are coming from me. And lately, most of my work has actually been around V8, and making sure that the Node project can have the most modern versions of V8 as possible. 

MARK: Cool. Actually, so actually why don't we start with some history? I mean, most people probably know what Node is, but maybe some people don't, so why don't you tell us a little about the language, where it came, sort of what's that background like? 

MYLES: Yeah, totally. I can give like-- I'll give a super abridged version of the keynote that I gave at Node Interactive recently. Google was there. We had about like five different talks and three keynotes. And one of mine was one of the closing keynotes. 

And I called it Node.js Wave Six and it was just about how like there's been many different waves of Node. Node was originally created in 2009 by Ryan Dahl and presented at JSConf.eu. That would be what we would consider Wave 1. And Ryan was the BDFL, which is short for benevolent dictator for life of the project, for about, like, I think two or three years. 

And then the project was taken over by Isaac Schleuter, who ran the project for a similar amount of time. And then TJ Fontaine, not TJ Holowaychuk, TJ Fontaine took over for what I would dub Node Wave 3. The project was forked in 2015 into io.js, which was Node Wave 4. And it was put into a Foundation later that year, which was theoretically Node Wave 5, and that was the release of Node.js 4.0. 

Since then, Node has been in a Foundation for the last two years. We're up to Node.js 8 right now. Node.js 9 is coming out at the end of this month. And, yeah, like, we've been doing a lot of discussion about Node Wave 6, because we're starting to feel a little bit of the growth pain now and trying to re-imagine some of our governance and technical direction to allow us to continue to scale. 

FRANCESC: So I think it's pretty cool that you were mentioning at least two different organizations. You mentioned the technical steering committee, and you also mentioned the Foundation. What are those? Let's start with the Foundation, for instance. What is the Node Foundation. 

MYLES: Yeah, so the Node.js Foundation is a nonprofit. I believe it's a 501(3)(c). That's like the thing that nonprofits are? Maybe I got one of those digits wrong. But the Foundation has a number of different member partners. And each of the member partners donate money based on their membership level. There's silver, gold, and platinum. 

Google recently came in as a platinum sponsor, and that actually brought one of our colleagues, Sarah Novotny, to the board of directors, which is really exciting. The board of directors is made up of representations, one person for each member from the platinum level of sponsorship. And then a certain number of members from both gold and silver, depending on how many sponsors there are in each of those levels. 

The board of directors right now is, I want to say, 11 people. And those 11 individuals are essentially responsible for the fiduciary duty of the of the Foundation. So the Foundation has all this money. What do we use the money for? How does it get handled? 

The Foundation itself owns the code base of Node.js and has lawyers on-hand, so like, if someone decides to sue us because they think that we're causing problems with licenses and stuff, the Foundation would protect us. That actually is like, one thing that's really great about foundations in general for open source software is it protects all of the maintainers and contributors. 

So if you're a contributor and you contributed code that maybe somehow down the line had some GPO in it, and you didn't know, the Foundation would be there to support and help you. 

The technical steering committee and the board of directors kind of report to each other. Although in like a classic org structure, you would maybe see the board of directors as higher than the TSC. I, as the TSC Director, am kind of the emissary between both of those organizations. 

One of the interesting things about our technical governance though is that the board of directors has no technical oversight over the project, nor does the Foundation. The project's technical governance is completely overseen by the technical steering committee, and the volunteers on it. So the board can't show up and be like, hey, we want you to [INAUDIBLE] gRPC into the binaries of Node. You know, that wouldn't fly. 

But members of the Google team who are represented on the TSC have been working really hard to get HTTP/2 natively supported not behind a flag in Node 8, which will allow us to have non-binary versions of gRPC. So you can have influence, and corporations can drive influence, but not through money. It's through participation, action, and engagement. 

MARK: So what exactly does the TSC do? 

MYLES: So there's a little bit of a loaded question, because we're in the process of figuring out what the TSC should do. What the TSC has historically done has been responsible for the overall technical governance and direction of the project. So this has to do with high-level initiatives, and high-level vision. 

So we've been doing, since April, for example, plans for having more modern versions of the 8 and the 8.x LTS release. And that's involved ongoing work from various TSC members. At the moment, whenever there is kind of certain levels of technical disagreements, those get floated to the TSC to either have the technical steering committee itself reach consensus over, or vote, if necessary. 

I think one thing that's worth mentioning is the technical project of Node itself is governed in a model called consensus seeking. So essentially, any person on the planet can send a poll request to Node, and if a committer has signed off on it, and it has been there for more than 48-hours without anyone rejecting it, we consider that seeking consensus, and it can just land on Master. 

We have a number of processes in place from testing, to CI, to smoke testing, to the waterfall of our release process that offer many different lines of where we can catch things if they end up being problematic. If they land too quickly. But generally, we've been trying to empower our committers as much as possible. 

And we try to, as much as possible, not have things go to a vote. And even further, not go to the technical steering committee. So we had a technical steering committee meeting this morning, for example, and we spent the first third of it talking about the new version of V8. They recently turned off escape analysis because of a bug, which makes async/await slower. And so we had to do some planning about how are going to handle that. 

The other third of it was spent talking about our build infrastructure and ways in which we can improve and make our CI and build infrastructure more reliable. And then a third of it was spent talking about a document we're drafting right now on higher-level expectations for leaders in the project. 

And so all of those things are things that are under the purview of the TSC currently. Although I'd really like to see us move the TSC towards more forward-facing proactive initiatives, finding things that need to be done, creating initiatives around it, finding champions and stakeholders to lead those initiatives, rather than the day-to-day handling of code conflict. And finding more ways to empower our collaborators to handle that. 

One of the challenges that we have right now is that as far as like, career growth in the project goes, you become a collaborator and then your next kind of thing you could do is be on the steering committee. And not everyone really cares about governance stuff. There's-- I almost consider it like, similar to like, a management track, an individual contributor track in a corporation. 

And so right now what we're trying to do is figure out what are more individual tracks, individual contributor tracks, that we can be making for our collaborators, so they can have career growth, and project growth. Have things that they can report back to their organizations about like, things that they're doing, and why the money being invested makes sense. We're actually-- we've been talking to Sarah Novotny and taking some notes from how the Kubernetes project does it. And we may do some iteration based on that. 

FRANCESC: So do some-- you mentioned something that sounded almost dangerous to me, especially coming from the Go community, which is you mentioned that if someone sends a change to the language, and it has not been rejected during 48 hours, and it passes all tests and stuff, then it just basically gets merged? 

MYLES: Mhm. 

FRANCESC: So can I just go now and like, I don't know, do something crazy and like, I'm going to add Go routines to Node.js. Why not? And I just said may change in and if I sent it on Friday, maybe luckily Saturday, Sunday, well, no one will notice, and we'll get merged? 

MYLES: So three different things there. The first being, there's actually an extension to the rule for weekends that make it 72 hours. 

FRANCESC: Oh, OK. That's good. 

MYLES: The second would be is you would actually need collaborators to sign off on it. So, like, we trust our collaborators. 

FRANCESC: Oh, OK. 

MYLES: We give commit bits. There's about 100 people with commit bits. We trust those people to make the right decision. If they don't, then they have to answer for it. And the third is like our waterfall release process that we have, offers, as I said, like, maybe it's on Master, but we can revert from Master pretty quickly. 

And the last bit is, and this is kind of counter-intuitive, we don't actually control the language at all in Node, right? We embed V8, which is a JavaScript virtual machine from the Chrome browser. V8 implements the ECMA-262 specification that's specified by tc39, which is the technical committee that makes the JavaScript language. 

So we're actually downstream from the language itself. So we make-- I know I'm being pedantic, but I just thought people may be interested in this. 

FRANCESC: No, that's an important difference. Right. 

MYLES: So you can't go, for example-- I mean, like, in theory, if you wanted to, you could go and make c++ changes to V8 to change the way that strings work to be not to the specification, but no one is going to sign off on that landing. 

FRANCESC: Mm. 

MYLES: And we have pretty strict process around like, what can land on V8. And, generally, we don't land anything into the V8 tree that hasn't been approved upstream. 

MARK: So you've mentioned this a couple of times. But let's talk about it directly. You talked about how Google is now a platinum sponsor. Sarah Novotny is now on the board, I think it was. 

MYLES: Hm. 

MARK: So what does that entail? Like, what is platinum sponsorship? Like, you talked a little bit about it. And what does it mean now that Google is part of this program? 

MYLES: Yeah, so if you go to Node.js.org, at the top of the page, there's a link that says Foundation. And if you click on Board there, you can see a little bit more information about the board, and who's on there. We can notice that I actually need to send a poll request, because Sarah Novotny's name is not on there yet. And I'll do that after this call. 

But the board of directors, as far as how the Foundation is concerned and what we get, we've given a certain amount of money to the Foundation at a platinum level of sponsorship. That gives us a seat at the board of directors. And having a seat at the board of directors allows us to have, to a certain extent, a say in how that money is being used, and how the project is being supported, and how higher-level initiatives are being done. 

So the majority of the things that the board focuses on tend to either be in a support role to the core project, or in a marketing role to Node itself. So the Foundation's responsible for throwing Node Interactive, which was the big conference that we were at last year. And the money that's in the Foundation floats the conference being able to happen until it gets back the money from ticket sales. 

The money in the Foundation also pays for the salaries of our executive team. So we have an Executive Director. We have an Education Community Manager. We have a number of different marketing individuals that we have on contract from the Linux Foundation. Which is worth mentioning, the Node Foundation is actually like a child project to the Linux Foundation, who has-- I'm definitely not using the correct terms, but the Linux Foundation has like, a process of spinning up foundations under the Linux Foundation. Which is how the Node Foundation was formed. 

There is marketing subcommittees, and there is like interest groups that get spun up, depending on different things that need to be done, and different projects that are going on. But at the highest level, the board is handling mostly judiciary duties. 

One of the great things that they signed off on, for example, two years ago, was creating a travel fund for collaborators who are not with member companies to be able to attend our events and collaborator summits. So, I think, up until this point, we've probably spent almost $50,000 over the last two years flying out and supporting various collaborators from the project, attending our events and collaborator summits. 

And actually any collaborator, or even member-- it's not always clear. But we try to let people know. Anyone who's a member of the Foundation, which cost $50, is eligible to apply for a travel stipend. Generally, these all have to be approved by the technical steering committee, and they're not going to approve individuals who are not actively participating. But if you're even just like mildly participating in the project, and you pay 50 bucks, or if you even just get a committed and get on a working group, you get that membership for free. 

You can get free trips around the world on the Foundation's dime to go and collaborate with people. And this is like a really great service that we offer. We have students, and we have education faculty, we have people working for small companies. People who normally wouldn't necessarily get these opportunities get to be able to come out and still be a large part of the project. 

MARK: Cool. And you mentioned that Sara Novotny has joined you. Many people probably know her from her work she has done in Kubernetes. You mentioned she's brought some of her experience about managing open source projects from Kubernetes over to the Node Foundation. Are there any particular lessons-- 

MYLES: Yeah. 

MARK: --or interesting stories out of that? 

MYLES: So it's actually like a fun kind of dragon eating its own tail kind of thing. When the Kubernetes Foundation was starting to put together their governance model was right around the time that I joined Google, and they were really interested in how Node had done things, and things that we thought worked, and things that we thought didn't work. 

And I ended up having a call with them. I was one of many people that they ended up interviewing in the process of coming up with their governance model. And then, now that they've solidified the governance model and are moving forward with it, we then went back and interviewed them to find out like, hey, what did you do? 

And one of the biggest differences that they have-- which as Googlers you're going to recognize some of these patterns. They don't actually have the idea of a committer. They have reviewers. They have acceptors. They have owners. And they have maintainers. The maintainers, there's only a handful, and those are the only ones who actually have ownership over the repo. But they actually have a commit QBot. 

And so reviewers can go and review any code. They can like plus one and minus one things. But if an accepter accepts something, they can totally accept it, even if a reviewer has minus one'd something. An owner has like veto rights over all of that. I also could be totally not doing justice to how that actually works. This is what I've learned in the last five days. But from that, what we're trying to look at in Node is what kind of level ups for our committers could we offer? 

And ones that we're thinking about, for example, would be like security. A lot of people want to get more involved in the security work for the project. So we're looking-- and this is something we would talk to the Foundation about. We would be like, we would go, and talk to the board of directors and say, hey, can we find money to create a security training and onboarding for committers? 

And then, when we create that program, which will then probably also have to go to legal for due diligence, we would be able to take committers who are interested and put them through this onboarding, which would then have them trained for being involved in handling embargoed security information. 

And we're looking at changing our embargo policy right now so that we can bring in more people to review stuff and have a much smaller team of people who are actually like, handling security vulnerabilities as they come in. We're talking about spinning up a mentorship program where like, again, if you go through like, a certain training or like, a number of different things, you can kind of get a mentorship bit in the same way that you get a commit bit. And now you can be responsible for mentoring people in the project. 

So we're trying to find a handful of different initiatives like this. Even potentially explicitly dividing the difference between reviewers and landers of code, which is like kind of straight lifted from the Kubernetes technical governance structure. 

FRANCESC: So all of this sounds very good, but now I'm going to ask a question that you might not like, but that that's my job. So why does Google pay you to do this? 

MYLES: Sh. 

[LAUGHTER] 

It's good to see. Well, first of all, I'm no scrub. 

[LAUGHTER] 

MARK: That's a reference to the-- 

FRANCESC: Inside joke. 

MARK: Terrible inside joke. We're referring to the TSC as TLC. Yeah. That's a very bad joke. Plus we're showing our age. 

FRANCESC: Let's go to the [INAUDIBLE]. 

MARK: Yes. Yes. Just creep along. 

[LAUGHTER] 

MYLES: So on top of not being a scrub, Google is investing a lot of money in Node. And this includes better support on App Engine. We have quite a number of like full-time SUIs who are working on Node-related projects, such a Stackdriver or Cloud Functions. Node being successful, Node working, and Node being stable and reliable is part of a major story for us selling our products and services that we're building on top of Node. And building for use of Node. 

I don't have all of the numbers, and I don't want to say something that's wrong. So I'm going to hand-wave it a little bit. But I do know that I've seen numbers that show down on like, App Engine Flex, Node is one of the most often spun up platforms. 

On GitHub, JavaScript is the number one language. Guess what number 10 is? 

FRANCESC: Pascal. 

MYLES: TypeScript. 

FRANCESC: I actually thought you were going to say Go. And I was like that that's-- 

MYLES: No, that would be-- I think Go is like three or something, and it's growing real fast. No, but it's just-- I mean, it's sandwiching the top 10. And like, even just the language that compiles to JavaScript is one of the fastest growing platforms that's out there. I think that there is a certain form of empathy in the code itself. And some of the new patterns that are coming out in the language, such as async/await are making it even more approachable for developers. 

And it's just really amazing how quickly you can get up, and get running, and get prototypes going. And, yeah, maybe it will never outperform like really, really, really well-written Go routines. But I think for a lot of people, especially when you can scale horizontally, it's good enough. And they care more about developer velocity than engineering purity. 

And that's not to say that you can't engineer really, really cool stuff with Node, too. But just more in the sense that, for a lot of teams, the velocity of a Node is a huge sell. And Google has recognized that. And is investing in the platform. So having me kind of like right in there I see it as kind of hedging the bet. It's like, they need to invest on Node being healthy, and Node being successful, or all the other money is kind of flushed down the toilet 

FRANCESC: That's a very good point. 

MYLES: Do I get to keep my job now? [LAUGHS] 

FRANCESC: We'll talk about that later. 

[LAUGHTER] 

So you mentioned real quick that one of the reasons is like, we actually invest heavily in Node, because we also use heavily Node, and we provide ways to use Node on our Google Cloud Platform. Is there something that you could share about life what is the future? Like is a typical question, that normally you say, no, because we don't share about that. But is there any roadmap you'd like to share? 

MYLES: Well, one thing that's coming pretty soon that's exciting is WebSockets. For myself, like, the first time I ever used Node was actually building an art installation where I wanted to use a website to pick between different states. And I tried a whole bunch of different ways of doing it, and I kept failing both gracefully and miserably. 

And eventually I came across this tutorial using Node in socket I/O, and I had a prototype up and running in like 10 or 15 minutes. And that's kind of, to me, like, that's the magic of Node. It's like if you've just written a little bit of website-y things, you can actually get something that does what you need to do in fairly short order. WebSockets are a really, really great tool for quickly prototyping distributed applications, chat applications, games, which I know Mark has a lot of feelings about. 

And so this isn't only for Node. But I do think that like the eventual support of WebSockets on App Engine and Google Cloud Platform as a whole outside of just Kubernetes is like a huge win for the various platforms that will get it. 

MARK: And what stuff do you really like about GCP and Node right now? 

MYLES: So about GCP and Node right now, I'm a big fan of Cloud Functions. I think it's a really cool way to slowly break away complexity from applications. One of the examples that I often use is just like a mailer. So like, if you're having someone who signs up for like a website for an account, and then when they sign up for the account, you want to send them a welcome email or something like that. These small little tasks are easily broken out into Cloud Functions. Things that don't need to be extremely like, performant. If they have a cold boot, it's not the end of the world. If they come 30 seconds later, it's not a big deal. 

You know, you can really quickly, without a lot of oversight, just break out all this complexity from like larger scale applications and utilize it. That's one place. Kubernetes Node Docker, that stack I'm so excited about. You combine that with like multi-cloud and federating over spaces, and I think it's a really-- oh, oh, my god. I'm going to say it. I think it's going to create a digital transformation. 

[LAUGHTER] 

FRANCESC: Whoa. 

MYLES: Sorry. Sorry. But genuinely, like, I'm really excited about that technology stack. It's not without its warts, but I think Google has first-class support for Kubernetes. Is it's really easy to get started with GKE. And there isn't too much of a ritual that you need to do to get a Node app up and running in a cluster. 

FRANCESC: Cool. What about Node itself? What are the things that are coming up with Node that you think are very exciting? 

MYLES: Yeah, so, well, just last night, I was finishing up our 8.7.0 release, which is going to have a newer version of V86.1 in it. There There's discussions that we're going to try to get V86.2 into Node 8, which would give us import as a keyword, which is dynamic import. That's part of our ES module support that we're introducing into Node, which is pretty exciting. 

MARK: Cool. All right. Well, we are running out of time, but we do like to give our guests the one shot to be able to say basically whatever they want. [LAUGHS] Is there anything you want to plug, or anything we haven't managed to mention in today's episode that you want to make sure our listeners hear? 

MYLES: Yeah, so cloud.google.com/nodejs, you can go there to like, just learn about getting started with Node on Cloud Platform. I didn't really plug Stackdriver too much. There's some real magic with Stackdriver that you can do for like live debugging of apps that are in production. You know, write an app with console.log, deploy it with Stackdriver on GCP, and your logs are just there. And you can just look at them. And that's really cool. 

If you're also looking at getting started with Node, nodeschool.io is a really amazing place to go and look. There's tons of tutorials that you can run in your terminal there are really great at getting people up and running. And if you look it up, there's a high probability that you have a local Node school chapter where you can show up and get live mentoring to help you through the problems. 

FRANCESC: Nice. 

MARK: Great. Well, Myles, thank you so much for taking the time with us today. It was really great to hear all about Node, and its governance, and how Google Cloud has been organized. 

MYLES: Well, thank you for inviting me, and giving me some tender loving care, as you listen. 

[LAUGHTER] 

FRANCESC: Thank you. 

MARK: See you. 

MELANIE: All right. Well, thanks, Myles, for that. That was great. It was good to get some overview of the Node.js Foundation, and appreciate the insights that you're able to share. 

I think it's time for our question of the week. Ready? I feel like we need a drum roll for this. 

[DRUM ROLL] 

How would you do a public blameless postmortem? 

MARK: Cool. So this is an interesting topic. I am definitely not going to claim to be an absolute expert on it. And I'm going to start referring listeners to some other articles. But the whole idea here being is we've talked about doing blameless postmortems on other episodes about doing SRE stuff. 

But there's a great article that came out recently from our CRE team, our Customer Reliability Engineering team, about how to do public ones, right? So if something goes down, something bad happens, there's an outage. How do you put out a postmortem -- basically saying and why should we put out a postmortem saying, like, this is what went wrong, and this is what we should do. 

So, I think there's a lot of things we can talk about here. I think the short version-- and you should definitely read the article. It's really great. Is like why should you do this? And I think the idea here is also about customer trust. So what would you actually put in a postmortem? 

So something like why did it happen? Right? So what went wrong? Could it have been worse? And also, like, how can you make sure that it didn't happen again? So, as a customer, you can read this and be like, oh, I see something went wrong, we're all human. These things happen. But I can see that you've put things in place now that will ensure that this thing won't happen again. 

That aids trust. That transparency aids trust, and I think that's good for everyone. 

MELANIE: It's important to be able to focus on how to improve, or how to make things better. It's also important to think about what you don't want to say. And to drive that trust. You definitely don't want to say the names of the humans involved. You don't want to say the names of the internal systems. You want to avoid customer-specific information. 

So focus on what went wrong, and talk about it from a how can we make this better. Avoid the blame game. 

MARK: Yes. Absolutely. And definitely be aware of your audience, as well. And how much information is the right amount information. And I think there is definitely leeway, and some gray area there, in terms of how you want to do that. 

MELANIE: Yeah, they make a great point about how much information is too much information? As well as how much do you want to make sure is protected? That you don't want to give away certain details about the way your system runs, like, how much traffic you have on it. So you to be a little careful about that, as well. But make sure people have enough information to understand what went wrong and how that got approved. 

MARK: Yeah, and there is definitely-- they link to a bunch of prior art here, as well. Not to say like schadenfreude or like, some really good examples of this being done, where GitLab accidentally deleted its postscript database. Cloudflare had some issues. [INAUDIBLE] had some issues. We definitely do this a lot, too, if you look at the Cloud status page. That will link in the show notes, as well. Whenever we have an outage, you'll see a little postmortem in there, as well. So definitely have a look at how we do that internally, as well. 

It's definitely an interesting thing. And I think it's good for customer trust. But also is a learning experience for everyone else also builds-- especially large distributed systems. 

MELANIE: Great. All right. I think we covered the question of the week. , So, Mark, where are we going to be in the next month? 

MARK: The next month or so, so, yep, as I said before, I'm going to be in Montreal in December, speaking at the Montreal International Game Summit. I'm going to Montreal in winter. I still haven't decided if this is a good idea or not. 

MELANIE: You know I've actually done that once. I would highly recommend bringing a lot of layers. 

MARK: Yeah. Yeah. 

MELANIE: A lot of heavy coats, and gloves. But it's really pretty, too. It can be really pretty with the snow. 

MARK: I can imagine that. What are you up to? What are you doing? 

MELANIE: So at the end of this week, I'm actually participating in the self-organizing conference on machine learning that we have at Google. And it's a conference that's bringing in a number of different external and internal folks who participate in machine learning space to share knowledge in a very unconference style. And that's going to play out on Thursday and Friday this week. 

And then next week is the conference that we all like to go to, in the machine learning, Deep Learning, and research scientist space, known as NIPS, or Neural Information Processing Systems conference. And that's taking place down in Long Beach. And that's all next week. 

MARK: Machine learning people really like their acronyms, huh? 

MELANIE: Sure do. 

[LAUGHTER] 

But really, who doesn't? 

MARK: That's true. 

MELANIE: It's funny how many acronyms exist out there. All right. I think that covers it for us. 

MARK: Yeah, so Melanie, thank you for joining me this week. 

MELANIE: Thank you. 

MARK: And thanks to all our listeners for listening. And we'll see you all next week. 
{{< /transcript >}}

