+++
audioDuration = "00:20:43"
audioFile = "Google.Cloud.Platform.Podcast.Episode.172.mp3"
audioSize = 30310616 
categories = ["Cloud Next", "Next", "Anthos", "Istio", "Kubernetes"]
date = "2019-04-12"
description = "Welcome to day three of Next!"
draft = false
episodeNumber = 172
hosts = ["Mark Mandel", "Aja Hammerly", "Jon Foust", "Mark Mirchandani"]
title = "Next 2019 Day 3"
image="/post/episode-172-next-2019-day-3/images/hero/hero-EP-172.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bcjjey/episode_172_next_2019_day_3/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Welcome to day three of Next! More awesome interviews await in this episode, as hosts [Mark Mirchandani](https://twitter.com/markmirch), [Aja Hammerly](https://twitter.com/the_thagomizer), [Mark Mandel](https://twitter.com/Neurotic), [Jon Foust](https://twitter.com/syntxerror1) and their guests explore more of Next.

To start, Dan of Viacom joins Mark and Jon to talk about his job in the TV business and why he loves Istio. 

Host-turned-guest Aja and Lauren of the Developer Relations team sat in the booth to talk with the Marks about the developer keynote at Next. Aja and Lauren elaborate on how they work to promote Next and put together content inclusive of all aspects of Google Cloud. 

Mark and Mark hear how Yuri from Scotiabank is using Kubernetes to help advance Scotiabank's latest projects. Anthony from Google joins the conversation, too. 

And lastly, we tease you with a short interview with Andrew of MongoDB to speak more on the partnership between MongoDB Atlas and Google Cloud. Andrew will be joining us for a full interview on the podcast later this year!

<!--more-->


##### Interviews

* Cloud Next [site](https://cloud.withgoogle.com/next/sf)
* Next On Air [site](https://cloud.withgoogle.com/next/sf/next-onair)
* Google Cloud Next '19: Day 3 Run Channel [video](https://www.youtube.com/watch?v=iHgK-Q9abyc)
* Google Cloud Next '19: Day 3 Build Channel [video](https://www.youtube.com/watch?v=cvmq9S3a3AY)
* Google Cloud Next '19: Day 3 Collaborate Channel [video](https://www.youtube.com/watch?v=ILNonseR6GE&t=8s)
* Day 3 at Next ‘19: A look back at an amazing week [blog](https://cloud.google.com/blog/topics/inside-google-cloud/next19-recap-day3)
* Playlist: All Sessions - Google Cloud Next '19 [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqIXvUGVrFuZibCUdKVzEoUw)
* Viacom [site](https://www.viacom.com)
* How Viacom modernized its Intelligent Content Discovery Platform with Google Cloud [blog](https://cloud.google.com/blog/topics/customers/how-viacom-modernized-its-intelligent-content-discovery-platform-with-google-cloud)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Anthos [site](https://cloud.google.com/anthos/)
* Istio [site](https://cloud.google.com/istio/)
* Developer Keynote: Get to the Fun Part (Cloud Next '19) [video](https://www.youtube.com/watch?v=W16iHlo2TuE)
* Jenkins [site](https://jenkins.io)
* Slack [site](https://slack.com)
* Cloud Run [site](https://cloud.google.com/run/)
* Announcing Cloud Run, the newest member of our serverless compute stack [blog](https://cloud.google.com/blog/products/serverless/announcing-cloud-run-the-newest-member-of-our-serverless-compute-stack)
* GCP Podcast Episode 167: World Pi Day with Emma Haruka Iwao [podcast](https://www.gcppodcast.com/post/episode-167-world-pi-day-with-emma-haruka-iwao/)
* Dev Zone Walkthrough (Cloud Next '19) [video](https://www.youtube.com/watch?v=8oriRm5n8uY)
* Dev Zone Experiment Pizza Authenticator (Cloud Next '19) [video](https://www.youtube.com/watch?v=LzXQjDnTnnY)
* Scotiabank [site](http://scotiabank.com)
* Kubernetes [site](https://kubernetes.io)
* Google Cloud Next '19: Day 2 Product Innovation Keynote (Justin Arbuckle at 25:23) [video](https://www.youtube.com/watch?v=PZ1Lqxfs1yw)
* Securing Kubernetes Secrets (Cloud Next '19) [video](https://www.youtube.com/watch?v=DNKcRUyz4Hw)
* MongoDB [site](https://www.mongodb.com)
* MongoDB Atlas [site](https://www.mongodb.com/cloud/atlas)

##### Where can you find us next?

The GCP Podcast will be back to its regular schedule next week!

{{< transcript "[MUSIC PLAYING] AJA: Hi, this is Aja. Welcome to episode 172 of the Google Cloud Platform Podcast. We're here at Next, and we're going to be talking to a lot of great folks today. So let's get to that." >}} 

MARK MANDEL: Sounds great. Let's do it. 

DAN: Easy enough. 

MARK MANDEL: So I'm super excited to have an old friend of mine come join the podcast today, Dan Skaggs. How're you doing, Dan? 

DAN: I'm doing well. It's been a long time. 

MARK MANDEL: It's been a long time. Dan and I know each other through Adobe ColdFusion for many, many years. 

DAN: Way back in the day. 

MARK MANDEL: Way back in the day. Yeah, Dan, do you want to us a little bit about yourself and what you do? 

DAN: So currently, I work for Viacom. And I lead engineering teams, building internal web app suites for our content supply pipeline, from getting new music videos and episodic content movies from ingest, all the way through to our central archive and all of the different steps that are required to make different renditions, and metadata, and such, so. 

MARK MANDEL: Fantastic, and what are you doing here at Next? 

DAN: So we are just starting our journey into moving a bunch of stuff into GCP. And so this is just kind of a learning-- get up to speed on some of the various offerings and kind of see from an architect standpoint, what we can take advantage of, as we're looking to move applications into GKE and move media into Google Cloud Storage. So this is kind of an intro to the whole ecosystem for me. 

JON: Amazing. So I'm pretty sure you're pretty excited about a couple of the announcements that have come out of Google Next. 

DAN: There's been some good stuff here. The Anthos product looks amazing. Of course, I don't work personally in our cloud engineering group. I kind of work with them, and I'm a customer of them. So they're the one making those decisions. But we've been having a bunch of conversations around dinner and stuff around some things that have been announced here this week. 

MARK MANDEL: Yeah, then you said that you had a couple of things you wanted to talk about that were particular interesting to you. 

DAN: Yeah, so one professional and one personal. Professionally, my teams are building microservice architecture, rightsized service they call it. And so the Istio product, looking for centralized consolidated management and discovery of our services, being able to not have every team that's building each one of those services have to worry about how to integrate Active Directory authorization or make sure that they're keeping our infosec people happy, being able to put that on top of and kind of outside of and apply it to our services, there's just so many benefits to doing that. 

Plus, it gives us a lot more visibility across different sets of teams that don't normally interact. Hey, I need a service. Well, somebody else already over here has built this. Let's see if we can use that. So we're looking forward to that from a couple of different angles. And our Cloud engineering folks are really excited about getting that up and going, too. 

MARK MANDEL: What's been one of your favorite things that you've seen in session so far? I know you mentioned a couple of things, but I'm sure you have other stuff. 

DAN: One of the things that most energized me, I sat in a panel yesterday called The Future of Health-- 

MARK MANDEL: Oh, interesting. 

DAN: --with some folks from consulting and the industry, as well as people-- a lady from National Institutes of Health and the Google Health representative. That was literally inspiring and energizing hour from-- I'm a big advocate of people having access to their own data and owning their own data. And when you look at it from the health care side, I would love nothing more than to have all of my health data where I can get my hands on it. And if I go to a new provider, then I can say, OK, you get access to this for the next five days. 

MARK MANDEL: Here's my USB key. 

DAN: Right, or I push a button, and the cloud says, send it to his system, right? It's even easier. So that angle of it appeals to me as a data geek, so to speak. But then also the ability for me to voluntarily push that into big data to aid in studies and research. And anonymize it and say-- be able to tell these research organizations you can use my health data for x purposes and know that that's respected. 

And some of the things that they were talking about that are coming and that they're working on, trying to get industry standardization-- and of course, we have some government rules that are going to force a little bit of that over the next year or two-- is very exciting. I have several family members that are in health care spaces, various types of providers. And so that's something that's always been kind of an energizing thing for me to get in and talk about. And after having run a health care startup for a few years, too, it really is something that hits pretty close to home. 

JON: That's amazing. I've actually done a little health care stuff in my past life. Glad to see that we-- Google Cloud and a lot of our health partners are actually fulfilling something that really means a lot to you. 

DAN: Yeah, they had one stat where-- was it the Human Genome Project took a billion dollars in 10 years? And then that was in, I think, 2003. By 2010, I believe, if I remember the numbers correctly, it took $10 million and months. And so the advent of these machine learning ecosystems, and the big data, and stuff to be able to squash that time and the cost has to be nothing but beneficial for people that are researching cures for diseases and conditions that we are experiencing now. So it's just amazing. 

MARK MANDEL: It's just exciting stuff. 

DAN: It is. 

MARK MANDEL: Fantastic. Well, Dan, thank you so much for coming and hanging out with us-- 

DAN: You bet. 

MARK MANDEL: On the show floor. And I hope you enjoy the rest of your Next. 

DAN: Appreciate you having me on. 

MARK MANDEL: So I am absolutely delighted to have both Lauren and Aja sitting here with the two Marks-- one-half of the Google Mark Club, I just want to be clear. 

MARK MIRCHANDANI: Slightly over one-half, as we have 3 and 1/2 members. 

MARK MANDEL: We have 3 and 1/2 members. 

AJA: Does Marc with a C not count? 

MARK MANDEL: No, Marc with-- 

MARK MIRCHANDANI: Oh, no. 

MARK MANDEL: Oh, no. 

MARK MIRCHANDANI: We have more. Oh, wait, so is Marc with a C-- let's discuss this later when we can figure it out. 

MARK MANDEL: Let's talk about this later. Anyway, so more importantly, Lauren and Aja, how are you both doing today? 

LAUREN: I'm just pondering how many Marks does it take to promote Google Cloud right now, so. 

AJA: All of them. 

MARK MANDEL: Several. More than several. 

AJA: I'm a little tired. We're two days into a very, very large conference. But everyone seems to be happy. So that's great. 

MARK MANDEL: Yeah. Lauren, do you want to tell people a little bit about yourself? I know people know Aja because Aja's super famous. 

LAUREN: Yeah, my name's Lauren Buchman. I work in the developer relations team, and I do developer marketing. 

AJA: And we like Lauren because she understands developers because she has been through many of their pain points. 

LAUREN: I just didn't know that that's what was happening. 

AJA: You don't have to know about it at the time to learn the valuable lessons. 

LAUREN: I tried to deploy websites for clients in the past. And not knowing how to load balance to WordPress sites, I didn't realize I was learning some of those DevOps and deployment pain points along the way, but. 

MARK MANDEL: Fantastic. Well, we brought you here today to talk about the developer keynote. We were having an interesting discussion before where were learning all sorts of interesting stuff about how that came to be. 

AJA: Yeah, and we've had a developer keynote the last couple of years at Next. But figuring out what to include in it is really hard. And Lauren's got some more insights on this, but part of the reason it's hard is that we use the phrase technical practitioner. And there's a lot of different people with different interests under that label. 

LAUREN: Yeah, I mean, when we were saying, hey, what are some things that we can say as we're telling people about Next about why they should come? And it ended up being almost a three page document where we were talking about, what is a specific thing that a data engineer will get out of it versus a data scientist? And not even talking about app development and are we going to talk about what it takes to write your apps, but like some of the backend stuff that you need to make work. So yeah, it's a diverse group. 

AJA: It is a diverse group and all sorts of backgrounds. We've got folks who've been doing this forever. We've got folks who have very tight ties to operator. We've got folks more like myself, who kind of dabble in everything. And we have approximate knowledge of many things, and we've got folks who specifically focus on very, very small subsets of data science related to specific industries. And trying to build content for all of those people in a compelling way is really challenging, as it turns out. And as this event gets bigger and as Google Cloud has more products, it gets harder. It doesn't get easier with experience. 

MARK MIRCHANDANI: So what's the solution there? I mean, do you just keep abstracting upwards until you're not talking about anything in specific? Or do you start breaking out into more-- a keynote for data scientists, and a keynote for developers, and a keynote for operators? 

AJA: Well, we only have one keynote stage, which makes lots of things a challenge. We have spotlight sessions, which are kind of like more tailored keynote type things. But I mean, the temptation is there to abstract, but as our lovely podcast guests know, when we have people who don't talk about anything concrete, it can get a little boring. So I don't know if we figured it out yet. 

LAUREN: Yeah, I think you kind of have to just say we're going to talk about one or two things in depth. And not everybody in the audience is going to get exactly what they're interested in. But hopefully, it will be valuable because they may learn a little bit about what their colleagues or other folks on their teams are dealing with. 

MARK MANDEL: So if people didn't catch the Livestream or haven't yet watched the YouTube recording, can you give us a brief synopsis of the sort of things people actually saw on stage, other than the two of you? 

AJA: So I'll start with the first half, and then maybe you can take over and talk about the second half, Lauren. So we started out with an app that was written by several of our PMs, and product managers, and software engineers, trying to demonstrate bringing multiple of our products together. Because one of the things that we've heard from folks in the past at Next is that each org inside Google talks about their launches, but there isn't enough content for folks who are trying to bring a lot of Google products together. And that was our game of life demo. 

And we also showed integrating with common tools, like Jenkins and Slack. And we had Slack Ops as part of that. And then I came onstage and told people all the stuff that they already know but like hearing again, about how to have sustainable DevOps practices and how you need a good team. And then Lauren, that's when you came on stage. 

LAUREN: I did, and I was able to bring three different customers on stage. So we heard first from a company called Wix. You know Wix. It's like a website building tool. And so they demoed a new developer tool that they've built on top of GCP, and we actually built a chat bot on stage in less than 60 seconds. It's kind of fun, like checking out how you can find a boat in the Bahamas and seeing natural language in our-- 

AJA: MLP. 

LAUREN: Yeah, MLV, there it is. But yeah, we built a chatbot on stage in about 60 seconds and got to see how that worked. And then we had Arctic come on stage, and they showed us an Anthos demo, which was kind of cool. The demo gods were not on our side at that point. And somebody had not actually logged into Jenkins, so we had to follow up a little bit. 

MARK MIRCHANDANI: It was handled super well, though. 

MARK MANDEL: Yes, it was. 

AJA: And we now know that it was a live demo. It was not a prerecording. 

LAUREN: Yeah, exactly. 

MARK MIRCHANDANI: Which is good to know. 

LAUREN: And then we got to hear from this woman, Twinkle Desai from Kohl's. And she came out and talked about how she's been managing her SRE teams. 

AJA: And then we had many of your favorite DevRellers and friends doing five to 10 minute demos of various things. We had Emma, who I know was on the podcast this week and on the podcast in the past, showing all of her awesome pie. And we had captain BigQuery himself, Felipe Hoffa-- 

MARK MANDEL: Nice. 

AJA: In his cape because-- 

MARK MANDEL: Very important. 

AJA: He needed a mask, but he also says that he's too pretty for a mask. So he was showing us all sorts of cool stuff you could do with data, including the fact that you can now delete data from BigQuery, which is something that people have been asking for. Steren talked to us about what is this Cloud Run thing that everyone's excited about. And they deployed a OpenOffice container. 

MARK MANDEL: Oh, fancy. 

AJA: [INAUDIBLE] I mean, the point is, is that just because you have an on-prem system, you've got legacy code, doesn't mean you can't actually containerize stuff. And I think that's a super important message for folks to get. Because a lot of folks think they can't try the new stuff because their code's old. And no, no, there's lots of folks who are putting really old stuff, like Fortran and COBOL, in containers. And that's cool. 

And then Cloud E, not that Eric, Eric Schmidt showed up, and he talked to the chief data scientist, I believe, from the Golden State Warriors. And they talked about the fact that the Golden State Warriors' data problems look a lot like the data problems that a lot of big companies have. And then there was an awesome surprise at the end. And you just have to watch the video to find out. 

MARK MIRCHANDANI: That's a good teaser. 

MARK MANDEL: Oh, teasers. 

AJA: I'm good at teasers. 

MARK MANDEL: Nice. 

MARK MIRCHANDANI: Then a lot of those showcases or some of the dev roles, people that were up there, are also the cool demos that were over in the Dev Zone here at the showcase floor. So could can actually play around with some of the stuff that Felipe put together with the BQML and of course, Emma's Pi Day experiment. 

AJA: Yeah, I forgot that all that stuff's here. And there was a recorded tour of the showcase that will hopefully be up on YouTube at some point in the next couple of weeks, too, so people can see. 

LAUREN: Did they capture the pizza authenticator that they had over there in the showcase area? 

AJA: They did. 

MARK MANDEL: In fact, I think you can go to it online from memory. 

AJA: Yeah, all of the experiments that came out of the new online experiments team, including Pizza Authenticator, are available online. 

MARK MANDEL: Yes, if you need to know specifically what area of the world your pizza comes from, you can do that. 

MARK MIRCHANDANI: There were a lot of harsh discussions. It started a lot of animosity there. It was surprising. 

AJA: People have feelings about pizza. 

LAUREN: Yeah, Chicago deep dish versus New York style is like the tabs and spaces of the food world. 

MARK MIRCHANDANI: Right, Felipe? 

MARK MANDEL: Excellent. Well, thank you to both of you for coming and hanging out with us here in the booth. I know it was a late night last night. So I appreciate you putting in the effort. 

AJA: Thank you for talking to us, Mark and Mark. 

LAUREN: Yeah, thanks, guys. 

MARK MIRCHANDANI: Thanks, all. Hey, everyone. So we're really excited to have Yuri and Anthony here, actually. Anthony from Google and Yuri from Scotiabank. And of course-- 

MARK MANDEL: I'm here, too. 

MARK MIRCHANDANI: I'm here. 

MARK MANDEL: Both Marks. 

MARK MIRCHANDANI: Both the Marks are here. 

MARK MANDEL: Yeah, both Marks. 

MARK MIRCHANDANI: So first of all, Yuri, who are you, and what do you do? 

YURI: Hey. So guys, thanks for having me on that podcast. And my name is Yuri Litvinovich, and I'm a senior cloud engineer working for Scotiabank. And right now, I'm building the Cloud Platform based on Google Kubernetes Engine. And Google is our big partner in our digital transformation journey that bank is undergoing these days for a number of years now. And we're just starting. 

MARK MANDEL: Nice. How are you enjoying Google Kubernetes Engine? 

YURI: I really like it. I really love it, I would say. And this is something that we've found as a great technology for a particular use case of running applications and running contenders in the cloud. And we love the power of GKE as a managed Kubernetes solution. And-- 

MARK MANDEL: It's good. 

YURI: Yeah. It's really good. 

MARK MIRCHANDANI: I like that tagline, right? Google Kubernetes Engine-- it's good. 

MARK MANDEL: It's good! 

MARK MIRCHANDANI: And so what was kind of summary of the announcement that y'all had with Google Cloud? 

YURI: Oh, it was another great Google Cloud conference this year. I really like the advancement that Google Cloud does in its technologies, and in particular, I really like Anthos, how Cloud Services Platform got its new name and all the powers that came with it. And this is something that Scotiabank is interested in. And our platform that we're building is called Cloud Application Platform. As I said, it's based on GKE. We're going to utilize the power of Anthos for that platform. 

MARK MIRCHANDANI: And you've been working with Anthony on the Google Cloud team as well to kind of help your team train up on Kubernetes? 

YURI: Yeah, exactly. Anthony did great Kubernetes training for us some time ago. And it got the team up to speed to a higher level. And yeah. 

ANTHONY: I think the coolest part is just seeing kind of the excitement across all the different teams that kind of attended this training here. And I think that it shows just kind of how broad this space for Kubernetes is, right? There's certain features that the security team was interested in talking about, so we dove into that. There's a lot of networking specific questions. So it's just interesting to see how kind of Google Kubernetes Engine-- it's good. That's the tagline. 

MARK MANDEL: It's good. It's good. Marketing not equipped. 

ANTHONY: Has really brought a lot of features across these different spaces, right? So if you look at security, we have binary authorization. If you look at some of the container native load balancing, for folks in these different kind of specializations, there's something for them in Google Kubernetes Engine. So it was exciting to talk about-- with the team at Scotiabank on that. 

MARK MANDEL: It almost sounds like we should do a full episode on this. 

MARK MIRCHANDANI: Oh, strange, hm. 

YURI: I would be happy to elaborate and tell you guys more about the exciting stuff we're doing at Scotiabank. 

MARK MIRCHANDANI: So maybe, perhaps possibly stay tuned for what will definitely be a full episode. 

YURI: And I would highly recommend to watch the presentation by Justin Arbuckle, our senior vice president. 

ANTHONY: That's right. 

MARK MANDEL: Oh, nice. 

YURI: He did a great keynote talk on the latest state of things of Scotiabank go into the cloud. So definitely stay tuned and check it out. 

MARK MANDEL: Have you had a chance to get to any presentations or sessions here at Next? 

YURI: Yeah, a bunch of them, and I like talk about the GKE secrets management presentation. There was a very good deep dive on how you integrate GKE clusters with both third party key management solutions, but also Google KMS and definitely lots of things to think about and also good connections to work with. 

ANTHONY: Yeah, and that was given by Seth Vargo, right? 

YURI: Yeah, it was given by Seth Vargo. And also, Alexander-- 

MARK MANDEL: It's OK. We'll have links in the show so you don't have to worry about it. 

MARK MIRCHANDANI: Don't worry. 

YURI: Sounds good. Sounds good. 

MARK MIRCHANDANI: Yeah, I mean, I think there was a lot of cool talks over the past couple days and today, covering the entire ecosystem. I'd be interested in hearing since you're doing such a deep dive on Kubernetes, what would you say the top of your wish list is? 

YURI: Oh, that's a very good question. And I can give you a really big wish list of things we would like to have in its full power. But we're working on that. And the partnership with Google is very satisfying to us. So I believe everything that we need, we'll get it done. 

MARK MIRCHANDANI: I like that. All right, well, I think we're just about out of time. So anything else you want to call out? Where are you going to be? Any other cool events coming up that you want to talk about? 

YURI: Oh, I'm very happy with what we have here. And I'm sure there are more events coming like Google Cloud Next next year, but also the summit that's happening in Toronto this fall, I'm excited to-- I'm looking forward to visiting that. 

MARK MANDEL: Fantastic. Well, Yuri, thank you so much for joining us on the podcast and doing this episode with us today. 

YURI: Thank you very much-- 

MARK MIRCHANDANI: Thanks, Yuri. 

YURI: Marks and Anthony. 

Both Marks and Anthony. 

YURI: Both Marks and Anthony. 

MARK MANDEL: Thanks to you, Andrew Davidson from MongoDB, for joining us for our daily episode here on the show floor. Andrew, how are you doing? 

ANDREW: Doing great, thank you, having a great time at Next. 

MARK MANDEL: Excellent. Thank you so much for joining us. Very quickly, I want to hear about your experience here at Next. But why don't you give us a quick, like, MongoDB, what is it? 

ANDREW: Sure, MongoDB is the most popular modern general purpose database. And we're really excited to have MongoDB Atlas close partnership announced this week with Google Cloud. MongoDB Atlas is our global database as a service. Everyone should go out and try it, free forever, free tier for everyone to get started and experience what modern application development with a database that doesn't get in the way could be like. 

JON: You got Jon here, and I got a couple of questions about Next. What is your favorite thing that you've seen on the Next floor? 

ANDREW: I've got to say on a big picture level, I just love seeing the level of excitement, all of the companies that are here, everyone who's coming here to really learn about Google Cloud Platform to see how much Google's really put into this, that this is very much a big part of the future of Google. I feel that energy, so it's real. Talking to all of the community members like MongoDB, but all the others who you're so open to working with, I love seeing that. And it's really fostering a great community. 

MARK MANDEL: Fantastic. What's been some of your favorite announcements here so far? 

ANDREW: So I'm pretty biased on that one. I really love the announcement of Google-- 

MARK MANDEL: That seems reasonable. 

ANDREW: Google announcing MongoDB Atlas is an increasingly deep partnership with Google, including MongoDB Atlas as a native part of the Google Cloud console coming up later this year. Just in general, working very closely together. Great support from the Google team. 

MARK MANDEL: So a short teaser for our listeners, I know we're going to have a full episode with you coming up later after Next. But do you want to tell them a little bit about what we're going to talk about? 

ANDREW: Sure, I mean, we're going to talk a little bit about the evolution of databases over time, and why folks have shifted to this new model of JSON document style databases in MongoDB, and why getting it as a service in the cloud on GCP is just the easiest way to modernize one's application stack. 

JON: And we're also going to talk about Davidson's law. Apparently, Andrew has his own laws of technology now. 

ANDREW: These guys named it. No. 

MARK MANDEL: Well, fantastic. Well, Andrew, thank you so much for coming to join us today. Thank you so much for being part of Google Cloud. We look forward to hearing more from you in a later episode. 

ANDREW: Thanks so much for having me. 

MARK MANDEL: Thanks so much for everyone here at Next joining us and everyone who came past the booth. It was great to see you all. It was great to get interviews. It was great to get all the content that we've got that we'll be releasing in coming weeks. So see you all next year. 

[MUSIC PLAYING]