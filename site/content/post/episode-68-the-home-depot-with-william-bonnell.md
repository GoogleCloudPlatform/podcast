+++
audioDuration = "00:35:54"
audioFile = "Google.Cloud.Platform.Podcast.Episode.68.mp3"
audioSize = 51933844
categories = ["SRE", "CRE", "Customer"]
date = "2017-03-15T01:07:49Z"
description = "Mark and Francesc talk to William Bonnell, Senior Director of SRE at The Home Depot about SRE culture, and the CRE team as well."
draft = false
episodeNumber = 68
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "The Home Depot with William Bonnell"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/7ASJgwXLAR6"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5zl430/episode_68_the_home_depot_with_william_bonnell/"
+++

This week brings us back to an interview that we did while at [Cloud Next](https://cloudnext.withgoogle.com/) last week.
[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) talk to 
[William Bonnell](https://www.linkedin.com/in/williambonnell/), Senior Director of SRE at
[The Home Depot](http://www.homedepot.com/) all about SRE culture, and the CRE team as well.

<!--more-->

##### About William Bonnell

[William Bonnell](https://www.linkedin.com/in/williambonnell/) is Senior Director of 
Site Reliability Engineering at [The Home Depot](http://www.homedepot.com/) - managing the e-commerce
and order management systems, support millions of customers per day!

##### Cool things of the week

- 100 announcements (!) from Google Cloud Next '17 [blog](https://blog.google/topics/google-cloud/100-announcements-google-cloud-next-17/)
 - Identity-Aware Proxy (IAP) for Google Cloud Platform (Beta) [site](https://cloud.google.com/iap)
 - Cloud.google.com/community [site](https://cloud.google.com/community/)
 - Cloud SQL for Postgre SQL (Beta) [site](https://cloud.google.com/sql/)
 - 64 Core machines + more memory [blog](https://cloudplatform.googleblog.com/2017/02/Google-Cloud-Platform-your-Next-home-in-the-cloud.html)
- A new issue tracker for Google Cloud Platform [blog](https://cloudplatform.googleblog.com/2017/03/a-new-issue-tracker-for-Google-Cloud-Platformud.html) 
- Happy Pi Day! [site](https://pi.delivery/)

##### Interviews

- 24/7 resiliency (Google Cloud Next '17) [youtube](https://www.youtube.com/watch?v=6sHI6U92KvQ)
- Smart, Secure, and Modern app delivery for enterprises and cloud-natives (Google Cloud Next '17) [youtube](https://www.youtube.com/watch?v=v7U4oH1XnPw)
- Building Microservices [book](http://shop.oreilly.com/product/0636920033158.do)
- Production-Ready Microservices [book](http://shop.oreilly.com/product/0636920053675.do)
- Site Reliability Engineering [book](https://landing.google.com/sre/book.html)
- Introducing Google Customer Reliability Engineering [blog](https://cloudplatform.googleblog.com/2016/10/introducing-a-new-era-of-customer-support-Google-Customer-Reliability-Engineering.html)
- Managed Instance Groups [docs](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances)

##### Question of the week

Why should I be using Cloud Spanner, rather than Cloud SQL? (Thanks AJ!)

- What's the difference between Google Cloud Spanner and Cloud SQL? [quora](https://www.quora.com/Whats-the-difference-between-Google-Cloud-Spanner-and-Cloud-SQL/answer/Zdenko-Hrcek)
- Cloud Spanner [docs](https://cloud.google.com/spanner/docs/)
- Cloud Spanner Pricing [docs](https://cloud.google.com/spanner/pricing)

##### Where can you find us next?

Mark will be heading to [Polyglot Vancouver Meetup](https://www.meetup.com/PolyglotVancouver/events/238312555/) in April,
and then on to [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/)

Francesc will be presenting at [Gophercon China](http://www.bagevent.com/event/357764) in April.  

{{< transcript "FRANCESC: Hi, and welcome to episode number 68 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm doing well, Francesc. It's all over. Next is over. 

FRANCESC: Listen to this-- silence. 

MARK: Silent, I know. 

FRANCESC: No background music, no background noise. We are back to our studio. Cloud Next is over. 

MARK: Yep. 

FRANCESC: It was amazing. But we're also very happy it's over. 

MARK: [CHUCKLES] 

FRANCESC: 'Cause that was pretty intense. 

MARK: It was pretty intense, but it was really cool. I had an amazing time. And I think a lot of people did as well. 

FRANCESC: It was amazing meeting so many people. Thanks to every single one of the people that came by and took pictures and just, like, waved at us or came in and said, hi. 

MARK: Yep. 

FRANCESC: Asked questions and all that stuff. If you have pictures with any of us or whatever the podcast, send it to us. 

MARK: Yeah, send it to us. 

FRANCESC: To the computer, the podcast, or we'll repeat all of these things at the end. 

MARK: Yep. 

FRANCESC: But yeah, send them to us. We'd love to have a little bit of, like, a photo album remembering-- 

MARK: Yeah, that would be cool. 

FRANCESC: --the good memories, yeah. 

MARK: Nice. And thanks to everyone who sent me photos of dogs for my birthday. 

FRANCESC: Oh yeah, happy birthday. 

MARK: That was nice. I appreciated that. 

FRANCESC: That was very cool. 

MARK: All right. Cool. Why don't we get started? So we've got our interview today, which is with William Bonnell, from the Home Depot. 

FRANCESC: The Home Depot, yeah, indeed. 

MARK: Where we're going to talk about SRE stuff at the Home Depot and-- 

FRANCESC: Yeah, we interviewed him during Cloud Next. So you'll hear some of that beautiful background that you might be [CHUCKLES] used to it now. But it was an amazing interview. 

MARK: Yeah, it really was. 

FRANCESC: We really, really enjoyed it. 

MARK: Yep. 

FRANCESC: And then at the end we'll have the question of the week. We recorded that question during Cloud Next. 

MARK: Yep. 

FRANCESC: But we will give you the answer today. But before that, we will start with our Cool Things of the Week. And this time, we have 101 Cool Things of the Week. 

MARK: Yeah, cool things-- yeah, I think that's good. So I don't think we can go through them all quite clearly for time constraints. But there is a blog post-- "100 Announcements from Google Cloud Next 2017," from acquisitions, partnerships, new products, releases. 

FRANCESC: I really like Identity-Aware Proxy because it's a thing that we've been using internally for quite a while. And it just makes things way easier. So if you're a developer and need to make sure that some services are accessible only to your employees or specific people, but you don't want to handle authentication by yourself, go check it out. It is pretty cool. 

MARK: Yeah. 

FRANCESC: But I mean, there's so much stuff. 

MARK: So much stuff. If you had to pick-- so you've got one. So pick another one. What's another exciting one? 

FRANCESC: Ooh, community sites. 

MARK: Oh, I was going to do that. 

FRANCESC: Yeah. 

MARK: You took that one. 

FRANCESC: Cloud.google.com/community is beta. And basically, it allows you to have documentation that is editable. Well, kind of. Like, basically, you can send pull request and fix it. 

MARK: Yeah. 

FRANCESC: So that is very, very nice. Very happy about that one. 

MARK: Yeah, that's going to be great for community people to come in and help us with our documentation or help with tutorials and samples. 

FRANCESC: Yeah. 

MARK: Super excited about that. 

FRANCESC: What about you? 

MARK: Ooh, so many. I'm going to go with Postgres. 

FRANCESC: Nice, yeah. 

MARK: I feel like I have to go Postgres. I feel like we should give that some love. There have been so many people who have been clamoring for Postgres for so long. And I'm so happy for it finally to be with us. 

FRANCESC: Yep. 

MARK: That I am super, super, super happy about that. And for a second one-- second one, I like 64 Core machines. 

FRANCESC: Oh yeah. 

MARK: Give me all the CPU. 

FRANCESC: 64-- now you can create a 64 Core machines with I don't know how many terabytes-- not terabytes of RAM. Like-- or is it terabytes? How much-- 

MARK: It is-- where are we? We have doubled the number of virtual CPUs you can run in an instance from 32 to 64 and up to 416 gigabytes of memory per instance. 

FRANCESC: OK, so it's not terabytes yet. But we're just getting-- 

MARK: Halfway there? 

FRANCESC: Yeah, halfway there. 

MARK: Close to halfway there? 

FRANCESC: And then you can also add 8 GPUs, and you have the most powerful machine (CHUCKLING) you can imagine. 

MARK: Yeah, why even bother buying a machine at home? Like, just use that constantly. All right, so I think there's definitely Cool Things of the Week. There's one other cool thing I want to mention really quickly because it came out just before Next. And I think it kind of-- it got buried a little. 

So there's a new issue tracker for Google Cloud Platform. And there's one, like, this is the one centralized tracker-- 

FRANCESC: Yeah. 

MARK: --which is super cool. So you can go to issuetracker.google.com. And you can go there and search through it for any public issues for basically any of our products, which is super sweet. 

FRANCESC: Not only Google Cloud Platform but actually just Google. So you'll see bugs for everything. Basically, anything that the whole point here is not as much for you to submit more bugs but to also track what we're working on, and what are the things we're trying to fix, and stuff like that. 

MARK: Yeah. 

FRANCESC: So it's a very good point to go and see it. 

MARK: And also it's just a discoverability thing, right? Before, you kind of had to be like, which product am I looking at? Which bug tracker is it working on? I need to go find it. Now there's just one place for you to go. If you need to submit a bug or check on a bug, this is the one place you can do it. 

FRANCESC: It is definitely nice. I didn't know that this existed, and I used it yesterday. 

MARK: [CHUCKLES] 

FRANCESC: I was actually tracking an issue. So there you go. 

MARK: Awesome. Well, why don't we go have a chat with our friend William from the Home Depot? 

FRANCESC: Sounds good. Let's do that. 

MARK: I'm super excited to have William Bonnell here joining us on the Moscone floor at Cloud Next. He is senior director of site reliability engineering at Home Depot. William, how you doing today? 

WILLIAM: I'm doing well. I'm really excited to be here. I actually been looking forward to talking to you guys the whole time I've been here. 

FRANCESC: Same for us. It's been amazing to see Home Depot on the keynote and on the floor. It's been everywhere. And it's very exciting to be able to have you to tell us a little bit about what you're actually doing at Home Depot with SREs and CREs and all the Cloud stuff. So-- 

MARK: Yeah, but before we do that, you want to tell us a little about what you do at Home Depot, what's your role there, and, like, what does that involve? 

WILLIAM: Sure. So I'm responsible for the reliability engineering strategy at the Home Depot. So that's broad across the entire enterprise. My specific responsibilities in terms of teams that I manage are our e-commerce-- so that's the customer-facing e-commerce part of the business-- and then our back-end order management-- so everything we're doing with order management. 

We're talking millions of customers per day come to the website. And we're processing millions of transactions and orders on the back end every day. So I'm kind of looking after that every day. 

FRANCESC: Nice. So two things-- first one is, I noticed that we say Home Depot, and you said the Home Depot. What is the correct way of saying it? 

WILLIAM: The Home Depot. It's kind of-- 

FRANCESC: The Home Depot. 

MARK: Oh, OK. 

FRANCESC: Good, OK. 

WILLIAM: The Home Depot, THD. We actually call ourselves THD, like a acronym kind of way. 

FRANCESC: It is like the internet. 

MARK: Got it, yeah. 

WILLIAM: Yeah, or The Ohio State University. 

[CHUCKLING] 

FRANCESC: And second question is what does your stack look like? Like, you said that you have process a bunch of events per day. How do you process those? Are you on premise? Are you in the cloud? 

WILLIAM: Well, right now, we're in the middle of kind of a hybrid. We have on-premise, and we have cloud. We've actually been working with Google for about two years to move our e-commerce platform to the Google Cloud Platform. So we're a little bit of in a hybrid today. 

We actually talked about that. We had a couple speaking sessions this conference where we actually talked about that architecture. So we're about 75% into the Google Cloud Platform now. 

MARK: Nice. 

WILLIAM: And we're finishing it up this year. 

MARK: So that's really interesting. OK, so, like, can we get some history there? Like, it sounds like you were originally on prem. And then, like, at some point you made the decision to shift. Like, what happened there? Why did you make that decision? 

WILLIAM: Sure. So we had a kind of a classic legacy e-commerce platform that we'd been running for many years. And that really got to the point where it served us well for many years. But it got to the point where it was constraining us. It was constraining us both from a infrastructure scalability standpoint-- very hard to kind of scale it out. Plus, we had a big monolithic database that was almost impossible to scale out at our level of scale. Imagine running a 5-plus-billion-dollar web site on pretty much a single database. 

And of course, you can scale that up. And you can do some things there. But that was constraining us. But in addition to that, the velocity of our business was constrained. The throughput of being able to deploy constant innovation to it was constrained with the type of platform we were on. And so we were looking for, first and foremost, we were looking for building a custom platform that would allow us to innovate much faster. We had gotten to the point where the old platform where we could deploy weekly-- that was as good as we could do-- was a weekly deploy. 

FRANCESC: That is pretty good. 

WILLIAM: And we wanted to get to the point where actually-- and we're doing that now-- we're deploying many times a day, many different things everyday. 

FRANCESC: Nice. So yeah, you gave a little bit of the reasons why you decided to move to the cloud. How did you move to the cloud? 

WILLIAM: So we moved to the cloud kind of chipping away one piece at a time. We actually had, even before we started working with Google, we had actually started pulling out some of the pieces of the e-commerce platform into a microservices-like architecture. So we might pull out something like the product information page on the site, or could be the promotions engine-- things like that. We started pulling some of those pieces out into our on-premise environment even before we started with Google. 

And then we continued with that strategy. So we say, one of the first things we launched into Google was our Store Finder. So that thing about Store Finder is a service, kind of self-contained. We can build a development team around it. They can innovate and push as often as they want. And they don't have to go coordinate with the team that's doing the Cart. 

In our old platform, the Cart team and the Store Finder team had to push their changes together. It didn't really make a whole lot of sense. But that's the way our deployment architecture worked. 

MARK: So actually we get this question kind of all the time when people are like, I have this thing, and I want to move it to the cloud. How did you choose which pieces to move when or what part to take out? Was there like a safety consideration? Or you wanted to get a new feature out? How did you make those decisions? 

WILLIAM: Yeah, I mean, that's kind of challenging. It really depends on-- I mean, there's a number of factors there. One of the things that we've been doing throughout this migration-- and it's taken us the last couple of years-- is still using our on-prem e-commerce platform as the nucleus. 

So that's kind of the nucleus. And as we're pulling pieces out, we're still running things through that central hub. And so that can make calls out to services, for example, that we may launch in the Google Cloud Platform. So we've just been doing that piecemeal. 

The other thing that we did was we did some of the things that may be a little easier or less transactional initially, like I mentioned the Store Finder. That's something that's a service that doesn't have a transactional nature. It's more of a read-only type of service. 

FRANCESC: Yeah, I think that it's worth mentioning, there's a book that I've been reading about specifically this topic. Like, the question you asked, there's a whole book on it. 

MARK: Yeah-- I'm sure there's more than one. 

WILLIAM: Oh, right. 

FRANCESC: Yeah, there's a book. I think it's pretty good. 

WILLIAM: Well, there's a "Building Microservices" book, which is the O'Reilly book. 

FRANCESC: Exactly, by Sam Newman? That's exactly what I had, yeah. 

MARK: Oh, nice. 

WILLIAM: Yeah. 

FRANCESC: It is a very good book, exactly covering those topics. So if anyone in the audience is curious about it, I definitely recommend it. 

WILLIAM: Yeah, and that's actually a book I know specifically was one that we had talked a lot about internally, even before we went on this journey. There's another one also, and the name's slipping my mind. But it's an O'Reilly book. Just came out recently. 

It was written by an SRE at Uber. But it's about running microservices, operating microservices in production. 

FRANCESC: Nice. Since we're talking about books, have you read the SRE book, the Google SRE book? What do you think about it? 

WILLIAM: Yeah, I've most definitely read the Google SRE book. Excellent book. A great theme. I really like the approach where they chose real SREs within Google to actually write chapters that they're experts in. That really worked well. I've read the book. Actually, I have a Ben Treynor-signed copy of the book, which I'm very excited about. 

MARK: Very nice. 

FRANCESC: That is very fancy. [CHUCKLES] 

MARK: So now I'm curious, though. So you're director of SRE at the Home Depot-- got to get that right. 

WILLIAM: The Home Depot. 

FRANCESC: The Home Depot. 

MARK: Do you see any major differences in terms of how you do SRE at THD or versus what you've seen or at least externally from Google? Like, how's that setup for you? 

WILLIAM: Yep. Well, and I'll mention it really isn't external from Google in the sense that we've been very engaged with Google's Customer Reliability Engineering team. We've been heavily engaged with them. And so they've helped inform us on Google's way of doing SRE. 

A couple of things I would mention there is the historical context that the Home Depot and our e-commerce team is-- we kind of historically had more of what you might call a web-engineering or web-operations team, where we're managing the infrastructure. It's more manual. We do have some automation in there. But the infrastructure itself is not manual, and the provisioning's much harder. 

So as we've evolved into the SRE model, we did that at the same time as we migrated to the Google Cloud Platform. And the big difference there is we're interacting with the infrastructure everything. Firewall, compute, storage-- you name it, we're interacting with it through APIs. And we're provisioning things automatically. So we're no longer logging into servers and making changes. We're doing everything in an automated way. That's been really important to us. 

MARK: No longer picking up [? Rex ?] servers and physical firewalls and stuff? 

WILLIAM: No, not at all. In fact, that's a distant memory for us. And it's just something we don't even think about. So that's a force multiplier for us. So rather than spending those calories on that type of work, we're spending the calories on automating our platform. 

FRANCESC: That is great. So you mentioned that you know SRE culture, too, because you were interacting with CRE. Could you tell us a little bit more about your experience interacting with them? 

WILLIAM: Sure. So Dave Rensin, who kind of invented the idea of CRE, created the idea of CRE within Google, and Luke Stone, approached me in the probably summertime last year with this idea-- and this idea was bringing SRE principles to customers-- and wondered if I'd be interested. And before they could finish asking me the question, I said yes, I would definitely be interested in that. 

And one of the things I think a lot about when I'm thinking about public cloud and I'm thinking about enterprises considering public cloud, there's a couple big considerations for an enterprise. One of them is, of course, going to be cost. And so thinking about how to manage that properly in the cloud is important. 

But the second one is reliability because if you have an enterprise, and they're a little nervous about going to the cloud, and they start pushing mission-critical workloads out there, and they fail, regardless of whether it's the cloud provider's fault or not, they're going to potentially pull back. And so the idea of CRE is to, especially for very large customers, is to help them build out the practices of reliability so that they're actually successful when they deploy their workloads out to the cloud. It's not trivial. 

FRANCESC: So you've been working with CRE for quite a while, I imagine. Is there any moment that you think, like, it was fun or interesting that you could share? 

WILLIAM: Well, there's actually probably a lot of moments. First of all, I'll say the team-- AJ and Matt Brown, Adrian Hilton, Luke Stone, Dave Rensin-- I mean, this is a really crack team of-- I mean, this is some really talented SREs. I mean, and one of the topics that we explored even in the happy hour with them with the [? Bens ?] the other day is the software engineer versus reliability engineer-- how do you get the talent into reliability engineering teams? It's clear that Google hires the best talent in the world into their SRE teams. 

And so these guys definitely demonstrated a very deep understanding of how to run large-scale production systems. And so the team was really, really, really insightful. They did Googly things, SRE things, like application reliability reviews. And they did deep dives. 

Actually, one of the things we talked about in the very beginning of the conversation with Dave and Luke was if they were going to do this, and share fate with us, and be in our Black Friday war room, they wanted us to remediate any high-risk items they found. So we agreed to that. And we did that. 

MARK: So actually, you bring up an interesting point. So I used to do a lot of e-commerce stuff. Black Friday is a very big time for a lot of people who do e-commerce stuff. How is your Black Friday? 

WILLIAM: Yeah. 

FRANCESC: [CHUCKLES] 

WILLIAM: No, our Black Friday was great. In fact, Paul Gaffney, our SVP of development, had mentioned that in the keynote, that this last Black Friday, we had half of our site on prem and half of our site in the Google Cloud Platform. So a lot of risk even there. You think about not even just in the Google Cloud Platform, but the interconnectivity and so forth with our on-premise platform. 

And so we talked a little bit about that in the keynote. But just to cut to the chase, it was a very successful Black Friday. 100% availability, performance was rock solid. And the Google CRE team was right there with us. They were right there in a virtual war room with us the whole time. 

FRANCESC: Well, congratulations on that. I know it's not easy, so-- 

WILLIAM: No. Nope, it's not. And it's getting harder and harder. I mean, with the type of architecture, the microservices architecture and the amount of change we have, it's getting harder and harder every year. 

FRANCESC: Great. So I'm curious about how did you handle that Black Friday, meaning what is the stack behind it? Are you running on Compute Engine? What are you doing? 

WILLIAM: Yeah, one thing I'll mention that is probably interesting-- and it actually came up in my talk on Wednesday-- is we didn't have the provision server six months in advance only to have them sit around for the remainder of the year, right? So we actually, at CRE's recommendation, we actually increased our quotas and actually bumped up our capacity about a week before Black Friday, just in case, like, if we lost a region, we wouldn't have any blips there. And then that's when we got through Cyber Monday, we just provisioned that back down. So right there-- the power of the cloud, the elasticity of the cloud, right then and there is a huge deal for us. 

In terms of platform, so we've been working with Google for about two years now. So some of the choices we made were architecturally the right choice at the time two years ago. So we're very much on Compute Engine. We're not running in containers at this point. But that's mostly just because it wasn't mature at the time when we started doing this. 

FRANCESC: Managed instance groups? 

WILLIAM: Oh yeah, we're definitely using managed instance groups. We're running out of multiple regions. In each region, we have multiple zones. 

We actually took this opportunity-- when we were building our platform, we actually took the opportunity from the ground up to build every application hot, hot. So everything we have is hot, hot. We actually just did a-- and I call it a DR test. It doesn't feel like a DR test anymore, but we just recently did a DR test where we basically just shut all the traffic off to the US East just to see how that would behave. 

FRANCESC: Hmm. 

WILLIAM: And I mean, all of our workloads run hot, hot. So it was a nonevent for us. That's pretty huge for us. 

MARK: So you use the term hot, hot. For those people who aren't familiar, what do you mean by that? 

WILLIAM: Right, so I mean active, active. I mean, you have an application that, I mean, it's-- and the easiest case, where it's not transactional. That's just deploying it to multiple-- and in my case, it would be multiple data centers, multiple regions, ideally. In the case where you have a transactional system, you have your back-end data that's actually replicated across those regions. 

MARK: Cool. And you were also talking about before, like you were hitting certain scale limits with, like, your database. Have you actually started moving data into Google Cloud as well and, like, splitting that out per server? 

WILLIAM: Oh, yeah, definitely, yeah. So every microservice, if they need a database, they have a database. We generally-- I mean, not every service we have needs a database. Sometimes it could be a search platform-- those sorts of things. 

But everyone that needs a database-- that was a big principle for us because in the old world, everything ran against the same database. And that created some constraints. 

FRANCESC: We talk about databases. Can you talk a little bit about how do you store your data? 

WILLIAM: Sure. So in our case, our primary database is Cassandra. We actually decided-- 

MARK: How nice. 

WILLIAM: --to self-manage our own database. That's something-- we're actually looking at the database platforms that are available-- Cloud SQL, Cloud Datastore, even Spanner. Spanner's actually very exciting. 

If you think about, I mean, we're a top 10 internet retailer. And you think about our Cart Service and Checkout Service-- something like Spanner would be very attractive. 

MARK: Mm. 

WILLIAM: Of course, that's just in beta now. It wasn't even something we knew about, other than the white paper and CockroachDB and so forth. 

FRANCESC: Yeah, basically came out last week, so it's normal you have not integrated yet. 

[CHUCKLING] 

WILLIAM: Right. So we decided to manage our own Cassandra. And that has been-- you know, Cassandra being eventually consistent, you might say, hey, how do you run transactional things that in the old world you might expect acid type of transactions? But what we found is that the Google network is so reliable and so fast that even though Cassandra is eventually consistent, it updates almost instantaneously. So we see very few problems with the eventually consistent model there. 

MARK: And I know Francesc is going to ask this question, so I'm going to jump in on it. 

FRANCESC: [CHUCKLES] 

MARK: What languages do you develop with? 

WILLIAM: Yeah, Mako-- sorry, Francesc. [CHUCKLES] 

FRANCESC: OK, well, thank you so much for taking your time. 

[CHUCKLING] 

WILLIAM: We actually have-- one of our kind of pieces you guys might be interested-- I can tell you a little bit about that. But Java's our primary platform. 

FRANCESC: OK. 

MARK: Mm-hm. 

WILLIAM: That's primarily because we're a large enterprise. And at most enterprises you would talk to, like Home Depot, it's probably going to be Java. Maybe you'd find .NET as well. But those are going to be your primary programming languages. And that was easier for us to kind of migrate to. 

We are, though, opening up the ability for development teams to use other development platforms. So that's our primary one. 

FRANCESC: And you mentioned you have a bunch of different microservices. How do you communicate across them? 

WILLIAM: Yep, so we communicate-- so internal load balancer was not available when we decided to go into Google. And so we actually created a mechanism. And we've actually talked to some other companies did similar things. 

We used Consul for service discovery. And so we built that into ours. So if one service wants to call another, we go through Consul basically, look up the service, and then make a direct call to it. 

FRANCESC: Nice. And RPC-wise, are you using something really, like, similar to gRPC. Did you build your own thing? 

WILLIAM: Yeah, we're just using RESTful APIs. 

FRANCESC: Cool. 

WILLIAM: gRPC is something we're looking at. Again, availability of these things hasn't been there. 

FRANCESC: Yeah, it's also pretty new, yeah. 

WILLIAM: Yeah. 

MARK: So now I'm also curious. We were talking about that split between going from, like, monolithic, on-prem, and now you're in microservices. How has that impacted, like, your CI/CD, your testing infrastructure, which probably also impacts your reliability, et cetera, et cetera? 

WILLIAM: Oh yeah, I mean, it's like a firehose. I mean we just-- 

MARK: Yeah. 

WILLIAM: There's constant changes, and that's a good thing. And we're doing much smaller changes. And when we have problems with them, we also built-- I talk about leveraging multiple zones in multiple regions and leveraging Cloud Deployment Manager for doing those deploys and being able to roll them out and drain traffic as we need to. 

So when we have problems, the problems are much smaller than they were before. If we were doing a big weekly release and we had a problem, you'd feel a lot more. Now we're able to do the changes. Yeah, you might have a little problem. 

So we're seeing that teams are-- also, this is something we're encouraging. And remember, I'm the guy-- kind of the ops guy, if you will. So I might be the last person you would expect. 

But we're encouraging teams to spend less time-- I mean, not no time-- but less time on testing and performance testing in the lower lifecycle in, like, a test environment just because a lot of times, that's just simulated. Until you actually get into production and get some traffic on it, get some real customer traffic, you don't really know what you're going to get. 

MARK: And I'm guessing then your roll-back system is very simple and automated. So, like, if you put something out there, maybe you put, like, 10% traffic on it, see how it does. 

WILLIAM: That's right. 

MARK: And you can always roll it back. 

WILLIAM: Yeah, and that's been key to everything we're doing from the very beginning is make sure all those are completely automated. 

FRANCESC: So moving a little bit away from all the tech stack, even though it's super interesting, you were in the keynote. Tell us a little bit about what was the message. What happened up there? 

WILLIAM: Sure, so I wasn't in the keynote. 

FRANCESC: Yeah, I mean the Home Depot-- 

MARK: You-- the Home Depot, yeah. 

FRANCESC: Yeah, right. 

WILLIAM: So Paul Gaffney spoke. And one of the things he talked about was kind of mentioned the Black Friday. That was a big deal for us. And for him to talk about that as a retailer-- you said you were in e-commerce-- and how important that is to put the trust in Google to be able to run those kind of workloads speaks volumes. 

And really, we wanted to highlight that for the world and say, hey, this is a platform that we're finding highly reliable, excellent performance. And then with the CRE engagement on how to operate these things at scale. That was the message that we wanted to convey in the keynote. 

FRANCESC: Nice. And on top of that, there were also two sessions? Do you remember the names? 

WILLIAM: Sure. So the session I did, I did with Luke Stone, who's on the CRE team, and Mahesh from the Network SRE Team. It was called 24/7 Resiliency. So it was Luke's idea. He did a great job facilitating it. 

And then the idea was thinking about-- and actually, this is actually a really important principle-- is turtles all the way down. You've got the network SRE team. They run the network. The cloud team doesn't really have to know a whole lot about what the network team is doing, provided the network team's not causing any issues. And then the cloud SRE team is providing service to us. We don't really have to know a whole lot. I mean, we don't care when you're patching load balancers, and you're patching servers, and those sorts of things. We don't really care about that. We don't need to know about that. 

And then you come to our layer, the application. And we're running our application and then our SRE team. And so it's really everybody playing their position and doing it well. 

MARK: Excellent. And I believe you also had a microservices talk as well? 

WILLIAM: Yeah, we had a microservices talk. On the third day, Ravi [? Yadula ?] talked with-- and those names are slipping my mind because it wasn't my session. But we talked about-- the Googlers talked about security and load balancing. And then we reviewed our microservices, also our lessons learned. 

And it was kind of interesting because I think those are the sessions your customers like because I could see people, like, taking pictures of the screen. Like the lessons learned one, I could see people taking pictures of that because that's what really resonates with other people thinking about using Google. 

FRANCESC: And for all the people that were not there or were not able to take pictures of the screen, all of those talks were recorded. And by the time this episode comes out, they will be already online. So we'll have links to the videos on the show notes. 

MARK: Sweet. All right, cool. So we're running out of time just a little bit. Is there anything else you want to, like, highlight or plug or anything you haven't talked about yet-- 

WILLIAM: Sure. 

MARK: --that you think is really interesting? 

WILLIAM: Well, we talked a little bit about that prior to this. But the question around DevOps versus SRE-- 

MARK: Oh yeah. 

WILLIAM: --and what's the difference, at least from my perspective. 

FRANCESC: Oh, true. 

WILLIAM: And so DevOps-- and we actually had something called DevOps within the Home Depot. But DevOps in most companies I've talked to seems to be much more CI/CD, build pipeline automation related, and kind of automating all those things in the testing and deployment of your application. Site reliability engineering, with the way we've implemented it, also with our relationship with Google, is much more around the production environment and automating and engineering the production environment for high-availability performance, et cetera. So that's how we've implemented it at the Home Depot. 

I will say, I think you asked the question earlier, our level of-- I mean, everybody we hire into our team, which by the way, we're hiring. Home Depot is hiring. 

MARK: Good to know. 

WILLIAM: Everybody we hire into our team is going to have some kind of automation background, generally Python. Other programming languages are fine because we're interacting with the Google APIs. But our level of software engineering, I think comparable to Google, is probably not quite there. We want to grow it over time. We think about Google. They say, hey, 50% of their time is actually building software. We're not quite there yet. But that's something we're interested in marching toward. 

FRANCESC: Amazing. So for people that might have companies not maybe as big as the Home Depot but that are right now on premises, and they're considering moving to the cloud, what would be your piece of advice? 

WILLIAM: So I would say, one, regardless of where you host-- whether it's on a cloud that you have in your data center, whether it's a Google Cloud Platform, or a competitor-- you need to build your application cloud native, right? 12-factor app and all the things that kind of go into building your application in that way. You need to build it in smaller pieces so you can do independent development and deploys so you can get the business velocity. That would be the number one thing. 

But the second thing I would mention, especially when you're building applications at scale, is the operational side of it. I think don't underestimate the complexity of trying to run all-- especially if you embrace a microservices architecture. Don't underestimate the complexity of running all those pieces at four nines of availability. 

MARK: Awesome. Well, William, thank you so much for taking time and coming and hanging out here at Cloud Next. We really appreciate you just talking to us. It was really super fascinating. 

WILLIAM: My pleasure. I was really excited about doing it. I appreciate you guys giving me the opportunity. 

FRANCESC: Thank you very much. 

WILLIAM: Thank you. 

FRANCESC: So thanks again to William for taking the time out of his, I'm sure, busy Cloud Next schedule to talk to us for such an interesting topic. 

MARK: Yep. 

FRANCESC: SREs-- one of the favorite topics, other than Kubernetes maybe, in the podcast. And it is always good to see how all the people outside of Google are doing it. 

MARK: Yeah, and it was also great to hear about his experiences with CRE as well. 

FRANCESC: Oh yeah, very, very cool. OK, so I guess it's time to go with a Question of the Week. As an experiment, we actually have someone asking a question. 

MARK: Yeah, we have our friend AJ. 

FRANCESC: OK, so let's listen to the question. 

AJ: Yeah, so Cloud Spanner looks fantastic. And I'm really excited to try it out. I'm wondering for a business that's currently using something maybe like MySQL or another Google database product, when would it make sense for them to look at switching? And why would it make sense for them to switch? 

MARK: So that was a great question, AJ. Francesc, I know you found actually a really nice answer on Quora that we can link to. 

FRANCESC: Yeah, we actually-- [CHUCKLES] so I searched Google. What's the difference between Google Cloud Spanner and Cloud SQL? 

MARK: Yeah. 

FRANCESC: And I found a question on Quora with the title "What's the Difference Between Google Cloud Spanner and Cloud SQL?" 

MARK: How fortuitous. 

FRANCESC: And it is a very good answer. So we'll definitely link to it. I'm going to try to say the name of the person that wrote the answer. It's Zdenko Hrcek. 

MARK: That seems good to me. 

FRANCESC: Hrcek, I think. 

MARK: Sure, sure. 

FRANCESC: And if someone knows how to pronounce, I'd say that probably this some Slavic language. If anyone knows how to pronounce it, I love to be corrected about this. Zdenko says, the main difference is that Spanner is horizontally scalable, and Cloud SQL is not. 

What does that actually mean? Well, it means that Cloud SQL is vertically scalable, which means that if your server is getting too small for you, you can make that server bigger. 

MARK: Yep. 

FRANCESC: So you can add disks. You can add memory. You can add CPUs. But you cannot really add servers. 

MARK: Yep. 

FRANCESC: So-- 

MARK: So once you hit that vertical limit, you're kind of stuck. 

FRANCESC: Yeah. The whole thing is that if you want more servers, you could actually do it. But then you start basically paying for the extra cost of those SQL servers connecting to each other. And it doesn't scale that well. 

MARK: Yeah, you could do read replicas. But, like, you're obviously, like, doing write replicas. 

FRANCESC: Yeah. 

MARK: They're, like, weird. 

FRANCESC: For read replicas-- yeah read replicas-- that works. 

MARK: That works. 

FRANCESC: For write replicas-- 

MARK: No. 

FRANCESC: --it doesn't really work. Now with Spanner, it allows you to do this. Basically, for every node that you add, you get extra throughput. 

MARK: Mm-hm. 

FRANCESC: So you get extra memory, extra CPUs, extra everything, but also extra throughput, which is what you really care about. Extra throughput both for read and write. 

MARK: Nice. 

FRANCESC: So with that, basically, if you have a cluster of banner nodes, and at some point you're like, oh, we're very close to the capacity, I want to scale these up, you just add a node. That's it. You don't need to do anything extra, which is really cool. 

Now, you need to take into account that, yes, it allows you-- so Spanner allows you to basically do the same cool things that you can do with SQL for select statements. So when you're reading, you can do pretty much the same. 

MARK: Mm-hm. 

FRANCESC: When you're writing to, though, the semantics are slightly different. You cannot use SQL, for now at least, to write into Spanner. You're going to need to use the gRPC or Arrest APIs. 

MARK: Yeah, but those are like idiomatic APIs for each language that uses it. 

FRANCESC: Yeah. 

MARK: So it's not like you're writing an insert command, rather than writing an insert statement. 

FRANCESC: Yeah, so basically, the thing to take into account is that if you have something brewing with Cloud SQL and you want to migrate Spanner-- 

MARK: There's a bit of work. 

FRANCESC: --you may need to change that a little bit. Not for the reads, for the writes, you may need to change it. So something to take into account. 

MARK: Now it's also worth noting, Cloud Spanner is going to be a bit more expensive-- 

FRANCESC: Yes. 

MARK: --than Cloud SQL. So I figure it almost comes down to how much data do you expect to have, or how much data do you have? And what sort of read and write throughput do you need? 

If maybe you have, I don't know, 100,000 records or so, maybe you keep that all in Cloud SQL. If you start getting into millions or billions, and you need to be able to have access to those and interact with them in a transactional way, in a high read-write throughput way, then maybe then that's when you start looking at something like Spanner. 

FRANCESC: So yeah, just to give you an idea, the node-per-hour cost is $0.90, which is not that much. But again, it can go up to, like, $600, something like that, I think, per month. 

MARK: Mm-hm. 

FRANCESC: So Cloud SQL, you can have definitely way, way cheaper than that. Now the difference is that at some point, you cannot make Cloud SQL go faster. Spanner, you can always make it go faster. 

MARK: So I'm probably not going to move my personal WordPress site to Spanner. 

FRANCESC: My personal web page is very happily on data store running on a [? pendient ?] standard. 

MARK: Nice. 

FRANCESC: Which means that I'm not paying for anything. 

MARK: There we go. 

FRANCESC: Yep, so that's pretty nice. But yeah, if you have something way bigger than my personal web page, which is basically every single project that we created-- 

[CHUCKLING] 

--you may want to use something like this. 

MARK: Wonderful. So now things have calmed down a little. But I think you're jet-setting off, at least in a few weeks? 

FRANCESC: Yeah, so I'm actually staying around San Francisco for a little bit, which you know is always exciting because now we have, like, nice weather. Hey, people from New York, how is it going? But afterwards, my next trip is going to be for April 15 and 16, I will be in Gophercon China in Shanghai. 

MARK: Nice. 

FRANCESC: Very excited about trying to speak in Mandarin there. 

MARK: Yeah. 

FRANCESC: Yeah, what about you? 

MARK: So I am also staying in San Francisco for a few weeks. But then I will be off to Vancouver. I'll be doing a little Meetup Polyglot Vancouver. I'll be there presenting on gRPC and Kubernetes. 

FRANCESC: Cool. Now that you mentioned gRPC, we should definitely talk about this. So this is coming out on the 3.15, which is pi plus 1. Ooh, yesterday was pi day. And we released a demo for pi day, which is a pi API because-- 

MARK: Yes. 

FRANCESC: --it sounds cool. And it's a gRPC plus Arrest API with web sockets and all that stuff. So you can basically build visualizations on top of it. If you want to learn more about it, you should go check it out on pi.delivery. It's totally a top-level domain. 

MARK: Nice. 

FRANCESC: Apparently. I didn't know. 

MARK: Cool. 

FRANCESC: But yeah, pi.delivery. And you're going to see a bunch of demos. You can, like, visualize pi and play pi. So you can, like, actually see the music. But also, you're going to see documentation on how to use the API. 

And all of this is powered on Google Cloud Platform with cloud end points and container engine and Go. 

MARK: Yeah, and gRPC. 

FRANCESC: And gRPC and Go. 

MARK: And you helped build it, right? 

FRANCESC: Yes. That's why it's Go, yeah. [CHUCKLES] 

MARK: Yeah. And that's super cool. Actually, I was playing with that earlier today, and it's very, very cool. 

FRANCESC: Yeah. So that could have been a cool thing of the week, except we forgot about it. So there you go. 

MARK: There we go. 

FRANCESC: You got it at the end. 

MARK: Extra cool thing of the week. But yeah, cool. So yeah, after I'm in Vancouver for a Polyglot Meetup, I'm going to be at the East Coast Game Developers Conference. And then after that, I'll be at Vector. That will be from the 16th of April and the 21st, respectively. 

FRANCESC: Nice. Sounds lots of fun. 

MARK: Awesome. Well, Francesc, it's been a harrowing few weeks. But I am so glad to be back in this voiceover booth with you. Thank you for taking the time once again. 

FRANCESC: Thank you, again, for taking the time. And thank you all for listening to this episode. And to every single person that was there at Next, thank you so much for coming and saying hi. 

MARK: Absolutely. And see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}