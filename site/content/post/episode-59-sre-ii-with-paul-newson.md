+++
audioDuration = "00:43:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.59.mp3"
audioSize = 62548122
categories = ["SRE", "Paul Newson"]
date = "2017-02-01T01:07:49Z"
description = "Our beloved teammate Paul Newson is back from his SRE rotation to tell us about all the lessons that he learned during all these months."
draft = false
episodeNumber = 59
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "SRE II with Paul Newson"
image = "/images/guests/PaulNewson.jpg"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/W1ZJ5hmSuRv"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5rh1aj/episode_59_sre_ii_with_paul_newson/"
+++

Our beloved teammate Paul Newson is back from his SRE rotation to tell us
about all the lessons that he learned during all these months.
Your co-hosts, [Mark](https://twitter.com/Neurotic) and
[Francesc](https://twitter.com/francesc), are as always here to ask all
the burning questions.

<!--more-->

##### About Paul

[Paul](https://twitter.com/newsons_nybbles) is an SRE Advocate at Google.
As part of Google’s Cloud developer relations team, he helps our customers
understand reliability best practices based on his experiences working as a
Site Reliability Engineer (SRE) on Google Compute Engine and as a Software
Engineer on Google Cloud Storage.

Before joining Google, he cofounded a tiny game technology startup, sold it
to Microsoft, where he then worked on DirectX, Xbox, Xbox Live, and Forza
Motorsport, before spending some time working on interesting machine learning
problems in Microsoft Research.

Outside of work he enjoys rock climbing, motorcycling, and other activities
that demand complete focus.

He doesn't often post on social media, but when he does, he does it at
[@newsons_nybbles](https://twitter.com/newsons_nybbles).

<div style="text-align: center">
    <img src="/images/guests/PaulNewson.jpg" style="width:200px; border-radius:100%;">
</div>

##### Cool thing of the week

- Fission: Serverless Functions as a Service for Kubernetes [Kubernetes blog](http://blog.kubernetes.io/2017/01/fission-serverless-functions-as-service-for-kubernetes.html)
- CRE Life Lessons [blog post series](https://cloudplatform.googleblog.com/search/label/CRE)
- The SRE book is now free! [read it online](https://landing.google.com/sre/book.html)

##### Interview

More episodes with Paul Newson:

- Storage with Paul Newson [episode 14](https://gcppodcast.com/post/episode-14-storage-with-paul-newson/)
- Site Reliability Engineering [episode 38](https://gcppodcast.com/post/episode-38-site-reliability-engineering-with-paul-newson/)

More links:

- The SRE book [home page](https://landing.google.com/sre/book.html)
- SLOs, SLIs, SLAs, oh my - CRE life lessons [blog post](https://cloudplatform.googleblog.com/2017/01/availability-part-deux--CRE-life-lessons.html)
- A Google SRE explores GitHub reliability with BigQuery [blog post](https://cloud.google.com/blog/big-data/2016/10/a-google-sre-explores-github-reliability-with-bigquery)
- Introducing Google Customer Reliability Engineering [blog post](https://cloudplatform.googleblog.com/2016/10/introducing-a-new-era-of-customer-support-Google-Customer-Reliability-Engineering.html)

##### Question of the week

The question today comes from [StackOverflow](http://stackoverflow.com/questions/41960664/in-app-engine-flexible-environment-how-can-i-see-which-version-of-a-service-is
).

How can I see which version of an App Engine service is the default?

- app.services/get [docs](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services/get)
- Microservices Architecture on Google App Engine [docs](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine)

##### Were will we be?

Mark will be at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc is doing a European tour, after speaking at [golab](https://golab.io)
and [GolangBCN](https://www.meetup.com/Golang-Barcelona/events/237049935/) he's
currently in Paris and on his way to the Go Devroom at [FOSDEM](https://fosdem.org).
A bit later he'll also be at [Gophercon India](http://www.gophercon.in).

{{< transcript "FRANCESC: Hi, and welcome to episode number 59 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. Thanks, Francesc. We are apart once again. It's very sad. 

FRANCESC: Yes, we are very, very far apart. Last episode, I made you wake up really early. This time you're making me stay up late. Well, it's, like, 9:30 PM. 

MARK: Yeah, which is about the time I'd normally be in bed. So it's pretty late. 

FRANCESC: So yeah, Mark is lucky to be in San Francisco, while I'm enjoying this ugly city. No one has heard about it. It's called Paris in France. Yeah, you know. 

MARK: Oh, yeah, Paris is the worst. I hate being in Paris. 

FRANCESC: Yeah. And yeah, it's so weird. It's like, people speak different-- I don't know. I don't know if I like it. 

But yeah, we have a very cool episode today. 

MARK: Yeah, we have a return guest yet again. Love it when our guests come back Paul Newson is returning to speak to us about his SRE rotation once more. He's now actually finished it, so he's coming to talk to us about being a site reliability engineer. 

FRANCESC: Yeah, and it is very interesting. Because even though he has pretty much the same messages as he had at the beginning, basically, saying, you know, I think that these are the things that are the most important, now he's like, oh, yeah, those are definitely the things that the most important. He's gone through battle, and came back with some lessons that he's going to share with us. So very good interview. Very excited about it. 

MARK: Exactly. The fire has tempered the steel. 

FRANCESC: Pretty epic. I like it. And then after that, we're going to have a question of the week related to App Engine. App Engine and services that used to be called modules, and which one is the default one, and versions, and stuff like that. 

MARK: Cool. All right, well, that's great. 

Well, before we go talk to Paul, why don't we talk about our cool things of the week? I particularly like the first one. It has to do with one of my favorite things, Kubernetes. 

FRANCESC: Yep. 

PAUL: So it is a open source project by the name of Fission, a serverless functions as a service for Kubernetes. So if you've become a fan of, like, quote, unquote, "serverless programming" or anything of that sort of mantra, this could be really cool, because it is an open source implementation of being able to run functions on the cloud, but on an open source project like Kubernetes. 

FRANCESC: Yeah, it is pretty cool. I'm actually-- I'm going to try it. I saw that, I think, the only languages that are supported for it by now are Python and JavaScript. 

MARK: Yep. 

FRANCESC: But I said by now, because I hope that that's going to be changing soon. But I will definitely have a look at it, because it's a very interesting thing of having, basically, the same idea of having cloud functions, but it is completely open source, so you can run it on your premises or you can run it on GKE, and you have full control of whatever things they're doing. So that's pretty great. 

MARK: Yeah, the thing that I'm kind of excited by, so you can respond to HTTP requests, which fair enough, standard HTTP stuff. But the thing I quite like is it will respond to Kubernetes events. 

FRANCESC: Ooh. 

MARK: So as different stuff happens inside your cluster, you can respond, like, fire up different things inside your cluster. It could be really interesting ways to do things like custom auto scaling or custom provisioning, something that I'm playing with a lot. So I think that's quite cool. 

FRANCESC: That's a pretty interesting thing. And I felt it was the same concern with everything that is related to functions as service, which is, how are people going to manage their source codes? I think that that's a very interesting thing that not many people have thought about it. And I'm very excited about what is going to happen. Are we going to have spaghetti functions? Who knows? 

MARK: You know what we should do? We should reach out to the people behind Fission, see if we can get them on the podcast. 

FRANCESC: That's a good idea. That's a good idea. There you go. 

MARK: Well, if you're listening, just reach out. We would love to have you. 

FRANCESC: Yeah. Hello, friends. And then we have the second part, the second cool thing of the week, it's actually this kind of fractal is a bunch of things. It's a series of blog posts, which are completely on topic with today's interview, because it's about CRE, which is not SRE. It's CRE, which is Customer Reliability Engineering. And basically, those are the people that are SREs for our customers. 

And they go through, as you were saying, fire the temples, the what? I already forgot. 

MARK: Fire tempers the steel. 

FRANCESC: There you go. So yeah, they go through the fire that tempers the steel, and then they write about it. So there's a bunch of blog posts. I had not seen them before. And those are some of the blog posts I'm going to be reading while flying around the world. They look very interesting. And the cool thing is that it is not, like, theoretical things, are things that actually happen and how to solve them. 

MARK: Yeah, I particularly-- I think if you listen to this episode, we talk a lot about SLOs and SLAs, which you'll hear about later, and there's a whole blog post about those particular topics and why they're important. So if you want to learn more about those particular things, you want a little light reading, it's definitely a place to go check out. 

FRANCESC: And I actually just realized that we have one more cool thing of the week, which is actually-- 

MARK: Ooh, really? 

FRANCESC: --incredibly cool. Yes. And it's not in the show notes yet, but the SRE book is now free. 

MARK: Yes! That is totally true. Yes. 

FRANCESC: So go read it. It is totally awesome. I have two copies of it, one that I bought, another one that I got for free. And now maybe I will get another one for free. But it is definitely worth it. There's so much stuff to learn from it. 

MARK: Yes. Yes, you should definitely do that. And we will definitely have a link to that in the show notes. 

FRANCESC: Yeah, absolutely. 

MARK: OK, cool. So I think it's now time to go talk to Paul. 

FRANCESC: Yeah, our colleague. And it's an honor, because he's the first SRE advocate ever. He coined the term. And he said it was coined in 2016. So it's been a long time since then. 

MARK: Yeah, SRE advocate 2016, Paul Newson. That's where it came from. Cool. 

FRANCESC: There you go. 

MARK: Let's go talk to him, then. 

FRANCESC: Let's do that. So very happy to welcome our dear friend Paul Newson back to the podcast for the third time, owning the record of number of appearances in this podcast other than for Mark and I. So Paul Newson, how are you doing? 

PAUL: I'm doing great today. How are you guys? 

FRANCESC: Doing great. Very happy to have you back after-- I was looking at it. We had in February 24, 2016, so almost a year ago, we had you for Storage with Paul Newson. And then 14 times 2 plus 10, which is 38, we had you to talk about site reliability engineering. And that was almost six months ago. And you've been learning a lot about site reliability engineering since then, so we were very happy to have you back to talk about that 

PAUL: Yeah, I think at the end of the previous podcast, I made a suggestion that, hey, maybe after I'm done with my mission control rotation, I can come back and maybe share a few more insights. Hopefully, know more about what I'm talking about than I did the first time around when I'd only been doing it for a few weeks. 

MARK: Before we get stuck into that, for people who don't know who you are, do you want to give us a little spiel about you? 

PAUL: Yeah, sure. 

FRANCESC: [INAUDIBLE] people that didn't know. 

MARK: And I'm sure most people know who he is. Yeah. 

PAUL: Oh, yeah. Yeah, I'm that internet famous, I'm sure. No, I don't expect anyone to know who I am, unless, of course, you listened to the previous episode of the podcast. And if you did, that was months ago. So why would you remember that far back? 

But I am a developer advocate at Google. I work on the cloud developer relations team with Mark and Francesc. But for the past eight months, I did a very interesting rotation where I embedded myself with one of our site reliability engineering teams, specifically, the site reliability engineering team that looks after Compute Engine. 

And the idea was to hopefully learn enough about site reliability engineering that I could go out as a developer advocate and talk about it, because telling the story of how we manage our services, and by extension, if you're using our cloud platform, how we manage the infrastructure that you're using, is a very interesting story to tell. And it's something that I hope I can share with people and give them some confidence that you want to run your stuff on our stuff. That was the idea at the beginning. 

And I would say that I've certainly learned a lot of things that I want to tell people about. And hopefully, we can touch on some of those today. 

But what's interesting is that the SRE culture that I just embedded myself into for eight months has a lot of insights that are useful to more than just Google. This isn't something that is Google-specific or Google-only. There are other people in our industry who are doing great work that's very similar to what we do here at Google. And there are very real lessons that you can apply to your services running on our services from how we do on-site reliability engineering at Google. So now I'm very excited to go out and share some of those things with the broader community. 

MARK: Cool. And so a very quick recap as well for people who, unfortunately, didn't listen to the previous episode, what is Site Reliability Engineering? What is an SRE? 

PAUL: So site reliability engineering is what Google calls the operations function. And to once again quote Ben [? Trainer, ?] like I did last time, it's what happens when you put a software engineer in charge of your operations function. And so what you end up with is a culture of automation and a culture of using software to make the operations problem better or easier or faster. 

And as I touched on in the last episode, there are some really important insights to this. Because when you operate at very high scale, if you try and scale the number of people taking care of your stuff, with the amount of stuff that you have, it quickly becomes an out-of-control problem. 

So instead what you do is you hire people who are really good at automating things. And yes, you do some manual work along the way. But your primary job, the thing you spend more than half of your time on, is automating that toil, as we call it, away. 

So those are sort of the two halves of site reliability engineering. There's a certain amount of keeping Google up, responding to incidents, being on call. And then the majority of the job is building software to make the services easier to run, so that as you double your customers and double again and double again, and you add more features and add more features, and you increase the surface area of this product, you don't also have to double the size of your operations teams again and again and again, because that just becomes impossible to do. 

FRANCESC: So it's kind of like that thing of go away or I will replace you with a simple shell script, but to yourself. 

PAUL: Yes, exactly. You want to automate yourself out of a job as quickly as possible, so that you can go on to something newer and interesting. 

A common characteristic of many site reliability engineers at Google is they get bored very easy. So you do something once, you do it twice, and then you write a script. It's a very common thing in our industry. It's not unique to Google at all. But we do try to live up to that way of doing things. 

Because for us, it's not just a case of, well, I don't want to do it a third time, it's a case of by the time you have to do it a third time, you've got these other things that are piling up as well. So you want to automate these things as quickly as you can. Otherwise, pretty soon you won't be able to keep up with it. You just won't be able to do it manually anymore. 

FRANCESC: So yeah, so that is very interesting. We covered that in the previous episode, episode 38? 38? 34. 

MARK: 38. 

FRANCESC: 38. 

PAUL: Yeah, I feel like I'm repeating myself for a lot of this. 

FRANCESC: No, but it is very interesting. And I guess that if people are interested on what is the whole philosophy behind SRE, they should just go listen to that episode. 

MARK: Yeah. This is SRE, the sequel. 

FRANCESC: Yeah, this is SRE, the SQL. So I guess you've been an SRE for a bunch of months, six months, eight months. 

PAUL: Yeah, it was eight months. And I'm still wrapping up a couple of projects for the SRE team I was on. 

So by the time I'm done, it will have been nine, 10 months of SRE work, which is-- I'm pretty happy with that. It was a good body of work. It was enough time for me to really, hopefully, make a positive impact on the team that hosted me, and not just suck knowledge out of their heads, but also to be able to internalize it and really walk in their shoes for long enough to be able to represent their world view to the internet out there today. 

MARK: Cool. So when we first had you on, you'd been on, I think, for about a month. Now, obviously, you've been there for eight. How did the end differ from the beginning? How do you feel like your impression has changed since that time period of being in SRE? 

PAUL: So I actually went back and re-listened to the previous podcast this morning in the hopes that I wouldn't repeat myself. Well, that's exactly what I just did, because those thoughts were in my head, but hopefully, they're still interesting to this audience. 

I made some statements at that time about, you know, I'm just new at this and I'm mostly repeating what I've heard. And honestly, a lot of the things I said in that previous podcast, they stand up today quite well. 

So if you go back and listen to that, not only do I think they still are quite applicable and quite accurate, but I received feedback from some fairly senior Google SREs who listen to this podcast, and they were quite positive. They said, hey, you really did a good job of representing what we do. And we find we're often misunderstood not just in the industry, but even within Google as what is the difference between development teams, SRE teams, and what is traditionally thought of as operations. 

However, I'd say the big difference between what I had experienced at that time and what I've experienced now is since then, I got trained up enough so that I actually went on call and carried the pager. So I was the first responder for a piece of Google Compute Engine for several weeks since I spoke to you guys last. And that was a very interesting experience. 

FRANCESC: I would call that-- yeah, I would panic, probably. 

MARK: Interesting? Terrifying? 

FRANCESC: Yeah. Interesting is a nice way of putting it. 

PAUL: Yeah, it's an interesting experience, and it can be terrifying, I got to say. The first time that I saw my name listed on the page that shows who's on call, that was a little bit surreal. 

And now to be fair, I've been on call before. I worked on the Cloud Storage product before I joined developer relations. That product, I was on call for that product at the time, but I helped build it. So I really felt like, well, throw whatever you want at me. I know how this thing works from beginning to end. I can probably troubleshoot what's going on. 

This was a very different experience for me, and is more typical of the SRE experience, where you are given something that somebody else has built, and yes, you become very familiar with it over time, but I can't possibly know it as well as the people who built it, right? So I've gone from being on call for something that I built to being on call for something I didn't. And that was a little bit terrifying. 

But what was very reassuring was you're not out there alone. It's not like, here's the pager, good luck, we'll see you in a week. There's an entire team. Yes, you are the first responder, but there is an entire team there to back you up. And mostly what you need to do is apply good judgment on when to escalate and when to bring other people in, and also know what are those paths to do that. 

So I was primary on call when we had what is called an incident, which is something that's significant enough that you need to bring other people into it. You can't just fix it quickly yourself. And so I had the experience of going through the entire incident management process. And it really begins a lot earlier than when you go on call. You do a lot of training. You learn about your product. You do projects in your project. You shadow other people. You are secondary. And then eventually, you become primary, and you are on point. 

But when you declare an incident at Google, there is a tool that we use that to sort of track the state and the status, and show how are you communicating about it? Where do people go if they want to participate in the response? 

And at no point during the incident was I the one fixing the problem. It was all about making sure that people who could fix the problem were on the case and doing the right things. 

And then when the when the incident was mitigated and service was back at 100%, at that point you start a postmortem. And this is something I talked just a little bit about in the previous interview, but I now know much more deeply, having gone through it. 

These postmortems are incredibly useful things. Google has what we call a blameless postmortem culture. So the idea behind writing a postmortem is not to figure out who made a mistake and then to punish the guilty. It's actually the opposite of that. You assume that we believe that the people who were involved in the incident response, the people who are on call at the time, are qualified to be there. They've been trained as well as we can. They are well-meaning and well-intentioned. 

And when things go wrong, it's not because people should have done better. It's because the environment around them, the tools, the processes, the monitoring, the alerting, these things somehow could be better. And if you want to avoid this problem in the future, you need to change these tools, the processes, or change the product, so this particular type of problem can never occur again. And that's what the postmortem is supposed to bring out. 

So you write the postmortem. Everybody adds their thoughts to it. You file a bunch of follow-up items, because a document that nobody reads and nobody acts on is no good to anyone. These things are filed and tracked the same as any other product issue. 

And then at some point, you have what we call an incident review meeting, where a group of people who work on that product and the people who were involved in the particular incident will get into a room and review the postmortem. 

And this is also a very interesting experience, because it does a couple of things. One, it helps improve the postmortem, because you have people there who weren't directly involved, but who are very experienced and bring a fresh perspective, and they might think of additional things that you didn't think of that we can follow up on to make the product better. 

But the second thing it does is it socializes this particular incident among the responders, the people who might respond to have to respond to things in the future, and it builds this culture around we learn from these problems we have in the past to make things better. And these review meetings are an important part of that. 

So I think the question was, originally, what's different now from the beginning? And I'd say the most significant difference between what I knew then and what I know now comes from living through being on call and handling incidents at Google. 

FRANCESC: So that sounds like it's very interesting. And for those that do not have the privilege of being able to do what you did and becoming an SRE for almost a year, I guess that there's many resources out there. I think that one of my favorite ones is the SRE book. 

PAUL: Yes. 

FRANCESC: I guess you would recommend that book. [INAUDIBLE] 

PAUL: I would highly recommend that book. In fact, I sat next to-- when I went through my orientation, we had some senior SREs who'd been at the company doing the SRE role for years come and have lunch with us. And one of them said, yeah, everybody who's an SRE should read this book. I learned things from this book. This is somebody who's been doing it at Google. 

Because the way this book was put together was, it was sort of crowdsourced within the SRE organization. So what you really have, when you when you have that book, is a collection of authoritative essays written by the person at Google who knows that subject the best, right? So for example, there's a chapter on postmortems, which I just discussed, and a chapter on incident response, which I just discussed. And they were written probably by different people, and probably by the people who were best positioned to really write the authoritative treatment of that subject. Well, nobody at Google is going to be as knowledgeable about all of the subjects covered by that book as the individual authors of each chapter. So longtime SREs at Google get benefit from reading that book. So yes, I do highly, highly recommend it. 

FRANCESC: So for those that are too lazy to read that book, like me-- I actually have read the book, and I think it's amazing. But for those that do not have the time to read the book, if you were to highlight one specific theme or one concept that is very, very important for an SRE, something that you may have discovered during this year, what could that be? 

PAUL: So I think the most surprising, and I won't say it surprised me, because it was a concept I was really aware of from my previous work on cloud storage, but the importance of having really well-thought-out service-level objectives. The surprise isn't that that's important. The surprise, to me, was how central that is to everything you need to do to think about reliability. 

MARK: So what is a service-level objective? 

PAUL: So a service-level objective is-- let me back up a second. A service-level indicator is something you can measure about your service. So let's say, for example, let's just take a simple request response sort of HTTP service. A very simple service-level indicator is, what percentage of my responses are 500 class? So error rate. And that's a very relevant metric that you should probably be tracking and have on a graph and maybe even alert on. 

But what turns a service-level indicator into a service-level objective is sitting down and asking yourself, well, for this indicator, what is the threshold? What is our goal? What are we trying to reach here? 

So for example, if we're talking about error rate, maybe you want to be three 9s. So you're going to give yourself a goal of 999 times out of 1,000, you are going to serve a non-500 response. Maybe that's the goal of your service. And maybe that's appropriate for your service. But you have to think about it from the customer's point of view. 

What is that transaction? What is that HTTP request you've been given? Is your service something where all these HTTP requests are idempotent and can be easily repeated with exponential backoff? 

Three 9s is probably very sufficient for something like that. Because what's the client going to do? What's the user going to do? Well, the client's software is probably going to retry automatically for them, and the user will never notice that a 500 was served. 

So what transforms an SLI into an SLO is this user insight that you have to bring, and say, for this indicator, what is an acceptable threshold beyond which we shouldn't go? Now, a lot of people would call that an SLA, a Service-Level Agreement. And at Google, we try very hard to be clear about what is an SLI, Service-Level Indicator. It's just something we measure. There's a graph somewhere that you can go look at that tracks whatever that metric is. 

A service-level objective is an SLI with a threshold of some kind applied to it, some sort of goal. An SLA is a legal contract between two companies that are doing business together. And they kind of look like SLOs sometimes, but really, the SLA is the contract. You can have lots of services that have SLOs with no SLA whatsoever. 

I collaborated with Felipe, our colleague, on a post about Github reliability a few months back. And you know, Github is a service. If you're just using their free service, they have no SLA. It wouldn't make sense to have a service-level agreement. You're not paying them any money, how can they give you a credit? What are they going to do, like, write you a check, because they gave you a 500? 

MARK: That'd be nice. 

PAUL: It doesn't that doesn't make sense. But I'm quite sure that internally at Github they have objectives for how many errors they want to serve. They have SLOs even though they don't have a public-facing SLA. 

So the SLO is the thing that drives your decision-making around almost everything you do with your service. And I'd say that is what I found the most surprising. That is the most valuable insight that I've come away with from this rotation. 

Let's say, for example, you're trying to figure out, how many regions do I need to run in? And so you can analyze your architectures to say, well, if I run in one region, multiple zones in one region, I can expect this sort of reliability. If I run in multiple regions, I can expect more reliability, because I'm now more redundant across more geographies. 

Should I do it? It's more expensive. It's more engineering work. If your SLO demands that you need that redundancy, then yes, you should do it. If your SLO doesn't demand that you need that redundancy, then you shouldn't do it, because you're just wasting money. If your SLO is well-chosen, your customers will not notice the difference between meeting it and exceeding it greatly. There's no extra value to exceeding your SLO greatly if you've chosen it well. 

An example would be that most people connect to internet services through networks that only provide three or four 9s to them. So while you could provide five 9s for your website, that additional reliability is pretty much imperceptible to your customers. You are spending a lot of effort and money providing a higher level of reliability that provides no value to your customers. 

Now, there are, of course, services where this doesn't apply, right? Anything that is life safety critical, anything where each request may have-- like, failing a request has an actual cost each time. They may require a different calculus on how to think about your SLO. But that's something that no one can decide for you, right? 

You understanding your users and having empathy for them and thinking about your product, only you can choose your SLO. But once you do, that can help guide architectural decisions, operational decisions, deployment decisions, technology decisions, and so on, and so on. 

MARK: Yeah, I think we've had very interesting discussions about having SLOs drive, like, feature development in terms of how much work should we put in on this thing, because changes are essentially risk? 

PAUL: Right. Yeah, so the other thing-- that's a very, very good point. I think I made the point in the previous interview that if you want to have a service that is 100% reliable, that's easy. Never change anything. I exaggerate, of course. Even then, depending on your service, you still wouldn't have 100%. 

But the point is, every change you make to your service carries some risk with it. But how do you decide if that risk is worth it? 

This is a fantastic feature. We absolutely have to ship it. We have to ship it tomorrow. How do you how do you think about the risk of shipping that feature? Well, have you met your SLO this month? Do you have some error budget left over? 

We talk about SLO and error budget, they're sort of two sides of the same coin. If you have, say, a 99.9% SLO, that means you have a 0.1% error budget. If you haven't served any errors this month, yeah, it's risky to push this new version. But if something bad happens, well, you'll just eat into your error budget. That's what it's there for. 

On the other hand, if you've had problems this month and you've already exhausted your error budget, give your users a break, and wait until you've had some periods of high reliability and you've replenished your error budget before you push that change. 

It also reflects on things like, well, how do you push your changes? One of the great recipes for how to have a wonderful global extended outage is to push a change everywhere, all at once, and have no rollback plan. That's a great recipe for an extended global outage to your service. 

Instead, if you do your rollouts progressively, so you push it a little bit over here, wait, monitor, see if anything goes wrong, push a little bit more, wait, monitor, see if anything goes wrong, and so on, and so on. You can do this over a period of hours, over a period of days, over a period of weeks even, depending on what your service-- what SLO are you trying to make. What is the right pace to push out your changes? That depends on your SLO. 

Like, all of these questions, I can't tell you whether minutes, days, or weeks is the right pace for your rollout. You can only answer that based on what SLO you're going for, and that will guide you in the decision to what kind of rollout and what pace of rollout you need to do. 

And then again, do I absolutely need to have a rollback plan for this? Well, the now SRE that lives on my shoulder says, of course, you need a rollback plan. That's the most important thing you can have, a rollout. 

But looking at it objectively, if you have a very low SLO, and you can basically re-push your entire service in a couple of hours and a couple of hour outages well within your SLO, then I guess you could push without a rollback plan. 

But one of the best ways to improve your reliability is not to never break anything, but to make sure you can always fix it quickly, right? Because outages that are measured in minutes are not as painful as outages that are measured in hours or, heaven forbid, days. 

So having great, well-tested rollback plans and rollback tools such that, yeah, sure, I'm pushing this thing, and I pushed it here, and then I waited 24 hours. And then I pushed it here again, and I waited another 24 hours, and then I saw something was wrong. Well, now I can roll back. And not that many people were affected to begin with, and we were able to mitigate it really quickly. 

MARK: Cool. Well, we're definitely coming up on time. So we could talk about this for hours on end. 

Before we finish up, is there anything we haven't covered? Or maybe what you're next up to? What are you doing next after this rotation? 

PAUL: So let's see, if you like what I have to say about this topic, and you didn't find a half an hour of me rambling on about it to be enough, I'm hoping to put together a talk for NEXT. So come to the conference. Come see my talk. And I also hope to basically take this message on the road, and get out to other events and talk about these things. 

The other thing that I'm hoping to do, I had a goal, and I think I spoke about it in the first podcast, to almost write a diary of my mission control rotation. I thought it would be really cool if people could sort of play along with me as I went through. Turns out being an SRE can be rather all-consuming. 

So my series of blog posts turned into two blog posts, but I have another one on the way. And I'm hoping to continue to do more, because these insights are pretty timeless. So keep an eye on the GCP-- on the Google Cloud Platform blog. And hopefully, you'll see some things from me there on this topic. 

And the other thing I'm hoping to do is, I now feel like I have a very good understanding of how Google approaches this. One of my hopes for going out into the community and going to these conferences and talking about this is not just to stand there and say, hey, this is how Google does it, you should do it this way too, but I want to learn a lot more about, well, how do people who aren't Google do this? 

There's a broader community out there doing things that they call ops or dev ops or sometimes SRE, and I want to understand, what does this look like if you're not Google? Because I believe that'll be really important for us to guide our customers to do the right things. Like, some of the things that we do at the scale we operate at may not apply-- some of them may-- to our customers. 

The other thing I'll do is just give a quick mention of this program we have now called Customer Reliability Engineering. This is essentially SREs who work directly with customers. It's a very small program. It's just getting started. We wrote a blog post on it. 

I won't say any more about it, because I'm not an expert on it, but I just want to make you aware that it exists. You should go read the blog post. And if you're curious about it, there's probably some contacts in there you can follow up with. 

MARK: Excellent. 

FRANCESC: Great. Well, looking forward to seeing your talk at Cloud Next. Just in case people are wondering, that will be in San Francisco, March 8 to 10. So see you there. And thank you, again, for taking the time to tell us about your experience. And looking forward to reading all of those blog posts that I hope you're going to be writing soon. 

PAUL: Thanks, guys. 

MARK: Thanks, again, to our always reliable colleague Paul Newson for joining us. We had a splendid conversation about being an SRE and all the things involved. Super, super interesting stuff. And yeah, the SRE book is free, so there is no excuse not to go read it. 

FRANCESC: Yeah, it's definitely worth a read. And it's actually very well-written. It's like, basically, instead of a really big book with just one message, it's a bunch of little stories of how we do things at Google. So it's easy to read. You can read any of the sections that you care about. So definitely worth reading, especially for the price, which is free right now. So yeah. 

MARK: Awesome. All right. So let's get stuck into the question of the week. 

FRANCESC: Let's do that. 

MARK: So we're talking about App Engine. So if you're using App Engine, and so App Engine allows you to have multiple versions of an app up in the cloud and running, which is really, really useful. But if I'm using an App Engine, and I want to see which version of my service that I have up and running in the cloud, which one's default? Which is the one that everyone is seeing when they access my usual URL? Francesc, can you help me out? 

FRANCESC: Yeah. So there's a couple of things about this question. So first, I think the important thing is to understand that inside of a single App Engine application, you can have actually many services, which is what we used to call modules, and which are the same thing. We just changed the names, basically. And every single one of those modules can be written in a completely different language. So it can be cool. You can have some Python and then some Go and something written in Java. 

MARK: We do that on the podcast, actually. 

FRANCESC: We do. We do, absolutely, because we have one module in Go and one module which is static content, so they're independent. 

And then inside of each one of those modules, we can have many versions. And that is very useful, especially when you're doing AB testing, or just testing, basically. If you want to have something tested on in prod, which is not a great idea, but we all do it. So you're going to deploy it, and then make sure it actually works before you send all your customers to that new web page or that new service. 

So before, we actually had that concept of the default version, meaning that if you did not specify which version you were going to target, then you could target that default version. And that thing actually went away. There's no such thing as default version. 

Instead what we have is we have traffic splitting, which means that you could do something like actual AB testing, saying, I'm going to have 50% of the traffic going to version A, then 25% going to version B, and another 25% going to version C. 

MARK: So I could also smoke test new features. Like 10% of the traffic gets a new feature-- 

FRANCESC: Yeah. 

MARK: --then test it out, and make sure, obviously, it works. And then if it does, I can just increase the traffic that it receives. 

FRANCESC: Absolutely. You can do AB testing. You can do experiments, and see it was like, only 1% of the people hating the web page, [INAUDIBLE] see these new feature to see if they like it or not. 

MARK: Nice. 

FRANCESC: That means, basically, that you cannot check which one is the default version of a service. Instead what you can do is you can list all the versions in a service. And when you do that, there's a REST API called apps.service slash get. So you do a REST API there, and you get a list of all the versions running in the service, and which is the traffic split that they got. 

So the [INAUDIBLE] default would be 1, which is 100% of the traffic. But you could get, like, as we're saying, 0.5, 0.25, or whatever else you want. 

MARK: So it's not quite as simple as the default option used to be, but is much more flexible in terms of what you can actually do. 

FRANCESC: Yeah, basically, you can still implement that default version saying 100% traffic goes there, but you can do much more, which is actually very good. 

MARK: That sounds good. I like it. Excellent. All right, Francesc, I know you're still out and about and having fun in Europe. Where are you going to be over the next little while? 

FRANCESC: So I'm going to go to Brussels next for FOSDEM, where I'm going to be joining two of our coworkers. I'm going to be joining Felipe Hoffa, which we interviewed a long time ago about Big Data and BigQuery. And also, I will meet with Ray, which we interviewed last week about Java. 

So we'll all get the three of us there. So if you're around, come say hi. And after that, I'll be coming back to San Francisco for just a little bit, basically, do laundry, and then go to GopherCon India. 

MARK: Nice. 

FRANCESC: Yeah, very excited about India. 

MARK: Excellent. 

FRANCESC: How about you? 

MARK: Still doing same old, same old. Very busy getting things ready. GDC is turning out to be a huge game developer conference here in San Francisco. We're sponsoring multiple events. It looks like we're going to have a booth, which is great. A little last minute, but fun, fun fun. So we'll be running things at the booth. I'll be sure to tell everyone what's going on there shortly. 

A Sponsored? Session. I'm doing a lightning talk at the Developer Day. Lots going on. So I'm getting that all ready. And then, yeah, Cloud Next comes the week after, which will be fun, fun, fun as well. I know you and I are both speaking. 

FRANCESC: Yes. 

MARK: That's going to be a delightful time. And I believe we also have space for the podcast. So if you want to come and hang out, and maybe get a recording in that we may or may not use later, definitely swing past and say hello at the podcast. 

FRANCESC: Absolutely. 

MARK: Well, Francesc, it was a pleasure and a delight to talk to you once again. Missing you here in San Francisco, but it'll be nice to have you back here soon. 

FRANCESC: Same here. Pleasure. And I'll be back to San Francisco very, very soon. And so see you soon. And thanks, everyone, for listening. And talk to you all next week. 

MARK: See you all next week. 
{{< /transcript >}}