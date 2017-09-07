+++
audioDuration = "00:38:22"
audioFile = "Google.Cloud.Platform.Podcast.Episode.90.mp3"
audioSize = 55483882
categories = ["OCTO"]
date = "2017-08-15T01:07:49Z"
description = "Mark and Francesc welcome the incredible Greg DeMichillie into their studio this week, to talk all about Google Cloud’s Office of the CTO, and how it works with enterprise companies."
draft = false
episodeNumber = 90
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Office of the CTO with Greg DeMichillie"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/B2z1feMi4e6"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6u31l1/episode_90_octo_with_greg_demichillie/"
+++

[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) welcome the incredible 
[Greg DeMichillie](https://twitter.com/gregde) into their studio this week, to talk all about Google Cloud's
Office of the CTO, and how it works with enterprise companies.

<!--more-->

##### About Greg DeMichillie

[Greg](https://twitter.com/gregde) has 20 years experience in creating great computing platforms for developers and IT alike. He has been at Google since before the inception of Google Cloud Platform and as Director of Product he lead the product teams for App Engine, Compute Engine, Kubernetes & Container Engine, as well as the Developer Console, SDKs, and Billing system. He has delivered keynote presentations and product demos at events such as Google I/O and Google Cloud NEXT as well as interviews with the New York Times, Wall St Journal, and other publications.

Prior to joining Google, he had leadership roles at variety of companies including Adobe and Amazon, as well as a decade at Microsoft where he was a developer on the first version of Visual C++, the development manager for Microsoft’s Java tools, and lead the product team for the creation of C#.

##### Cool things of the week

- Cloud SQL for PostgreSQL updated with new extensions [blog](https://cloudplatform.googleblog.com/2017/08/Cloud-SQL-for-PostgreSQL-updated-with-new-extensions.html) [docs](https://cloud.google.com/sql/docs/postgres/extensions) [issue tracker](https://cloud.google.com/support/docs/issue-trackers#feature_requests) [discussion group](https://groups.google.com/forum/#!forum/google-cloud-sql-discuss)
- Celebrating Six Months of Open Access, plus The Met on Google BigQuery [blog](http://www.metmuseum.org/blogs/digital-underground/2017/six-months-of-open-access-plus-google-bigquery)
- Deploying Clojure applications to Google Cloud [blog](https://circleci.com/blog/deploying-clojure-applications-to-google-cloud/)
- Announcing price cuts on Local SSDs for on-demand and preemptible instances [blog](https://cloudplatform.googleblog.com/2017/08/announcing-price-cuts-on-Local-SSDs-for-on-demand-and-preemptible-instances.html)

##### Interview

- How the queen of Silicon Valley is helping Google go after Amazon’s most profitable business [article](http://www.businessinsider.com/how-diane-greene-transformed-googles-cloud-2016-6)
- Lush migrating to Google Cloud in 22 days [blog](https://www.blog.google/topics/google-cloud/how-google-cloud-transforming-european-business/)
- Evernote migrating to Google Cloud [blog](https://blog.evernote.com/blog/2017/02/08/evernote-reaches-the-cloud/)
- Google Cloud Summit Sydney [site](https://cloudplatformonline.com/Summit-Sydney-2017.html) 
- Google Cloud Summit Paris [site](https://cloudplatformonline.com/Summit-Paris-2017.html)
- Google Cloud Summit Seattle [site](https://cloudplatformonline.com/summit-seattle-2017.html)
- Google Cloud Summit Chicago [site](https://cloudplatformonline.com/summit-chicago-2017-schedule.html)
- Google Cloud Summit Stockholm [site](https://cloudplatformonline.com/Summit-Stockholm-2017.html?utm_campaign=-team-ss)
- Look out for more Summits in: Singapore, Kuala Lumpur, Bangalore, Munich, and Sau Paulo

##### Question of the week

Is there a way to access the Kubernetes dashboard without running `kubectl proxy`? Such as, if I wanted to view or control
my Kubernetes cluster from my phone? 

- Kubernetes UI [docs](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
- `kubectl proxy` [docs](https://kubernetes.io/docs/tasks/access-kubernetes-api/http-proxy-access-api/)
- Creating Authorized Networks for Master Access [docs](https://cloud.google.com/container-engine/docs/authorized-networks)
- Google Cloud Shell [site](https://cloud.google.com/shell/) [docs](https://cloud.google.com/shell/docs/)

##### Where can you find us next?

Francesc is going on holidays!!! But he just released a [justforfunc](http://justforfunc.com) episode on [Contributing to the Go project](https://www.youtube.com/watch?v=DjZMKKfNVMc),
and will be presenting at [Google Cloud Summit in Sydney](https://cloudplatformonline.com/Summit-Sydney-2017.html) in September. 

Mark is entering crazy season, and will be presenting at [Play NYC](http://play-nyc.com/), then speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.
He'll then be speaking at [Gameacon](http://www.gameaconvegas.com/) and [Austin Game Conference](http://austingamecon.com/) and attending [Strangeloop](https://www.thestrangeloop.com/) once he's done with all that.

{{< transcript "FRANCESC: Hi, and welcome to episode number 90 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm doing exceptionally well today. How are you doing, Francesc? 

FRANCESC: I'm doing pretty good, pretty good. Last pod before I go on my holiday. So pretty excited about that, actually. 

MARK: Yeah, I'm pretty excited about you going on holidays too, actually, I have to admit. 

FRANCESC: Oh, yeah. 

[LAUGHTER] 

Not seeing you for a couple weeks, you know, that's what I live for. Also very happy because we finally got to be joined by Greg DeMichillie. 

MARK: Yes. I'm so excited. I've wanted him on the podcast for a really long time. And it really, really, really makes me happy to have him here to come talk to us about Office of the CTO. 

FRANCESC: I like better the other name, OCTO, O-C-T-O, OCTO. 

MARK: OCTO. 

FRANCESC: It sounds, I don't know, like the villain of a James Bond movie, OCTO. 

MARK: I like it. I like it. I like it. I feel like there should be a lair somewhere with a mountain. 

FRANCESC: Also at the end we'll have-- I'm going to mispronounce his name-- but I'm going to say his name is "Eetamar," but it may be "Eyetamar." Hi, "Eyetamar," "Eetamar." Sorry for mispronouncing your name. He sent a bunch of Kubernetes questions. And by a bunch I mean a bunch. 

We got one of them, and we're going to be answering it today, which is, OK, so I'm on the go. I just have access to my mobile phone. How do I access the Kubernetes dashboard? Can I do that, and if so how? So we'll talk about that at the end. 

But before that, we have our cool things of the week. And I'm going to let you start. 

MARK: So I'm going to start from the bottom of our list and go up. Maybe that's fun. But we've had Postgres, or PostgreSQL support in beta on Cloud SQL here at Google Cloud Platform for a little while. What's been really great is we've got a bunch of feedback, both on our issue tracker as well as the discussion group, that we'll link in the show notes about how people are using Postgres and what sort of extensions and features they want to have enabled in the managed solution that we're running. 

What's been great about that is we've now enabled 19 different extensions across four categories, including stuff for geographic applications, a variety of new data types, enhanced functionality for new processing languages, as well as, like, some miscellaneous stuff around text search, cryptography, integer aggregations, and a whole bunch of other stuff. 

FRANCESC: Nice. 

MARK: We'll link to the blog post, which was written by our boss, Greg Wilson, a developer advocacy lead. 

FRANCESC: Hi, Greg. 

MARK: Hi, Greg. I hope you're listening. And also to the documentation that shows you all the interesting little bits that actually have been now enabled. So please go try those out. And if there's also other stuff that you want to see available that you usually use on Postgres, please feel free to add stuff to the issue tracker or the discussion group. 

FRANCESC: So I have a stupid question about this, which is, how do you pronounce this database? Do you pronounce it "Postgres Q-L"? "Postgree Sequel?" 

MARK: I tend to just say "Postgrez." 

FRANCESC: OK. OK. OK. OK. 

MARK: Yeah. That's what-- I don't know. 

FRANCESC: I don't know, because the S is capital. Anyway, so let's go with the second thing of the week, which I'm going to choose to be, ooh, this one. This one is cool. The Met, the Metropolitan Museum in New York, they created an open data set that is available on BigQuery, and they have 375,000 images of public domain from their collection, which is under Creative Commons 0. 

So that's a lot of images that you can play with. And if you're interested in doing, like, image processing, machine learning, all of these things, they're all available for you right now. So I'd say go play with them. Also, if you like art, which you should, you can also go and see the art because they're also really beautiful. 

MARK: Awesome. Well, I'm going to take the Clojure one, which is kind of cool. Because I know you put this up, but I'm going to steal it-- 

FRANCESC: I know. I put it for you. 

MARK: --because it's great. Thank you. So on the "CircleCI" blog, there is an article talking about Clojure-- Clojure with a J, a language that I used to write a lot of and still quite like-- talking about continuously deploying Clojure apps to Google App Engine and specifically Google App Engine Flexible. A super interesting article, I think, from two perspectives, even if you don't write Clojure, one of which is, they use the Flexible environment and build their own Dockerfile for it. 

So if you're interested to see, like, if there is a language that isn't necessarily supported right out of the box, how you can go about doing that as well as setting it up so that it is continuously deployed such that once you push something to your repository, it goes all the way through and ends up on App Engine. So it's a super cool article. 

FRANCESC: Nice. And is this for our App Engine Flexible or Standard? 

MARK: Yes. It's flexible. 

FRANCESC: OK. Because App Engine Standard now should also support Clojure? 

MARK: Yeah, so you can do it, from what I understand. There are steps that you either need to have a Gradle or Maven build. If you're doing Clojure, then you're probably not necessarily using those tools. So there's a bit more complexity there. You could probably also do the same thing, though. 

FRANCESC: Cool. Followup question. Were you ever as big in the Clojure community as you were in the ColdFusion community? 

MARK: No, no. It's relative. 

[LAUGHTER] 

I think I was definitely bigger in the ColdFusion community. Yes, it's true. 

FRANCESC: Big fish, small pond or something like that. 

MARK: There you go. Something like that. Exactly. 

FRANCESC: Cool. So we're going to go over the last cool thing of the week, which is cool thing of the week because it means that you're going to save money. You can attach local Solid State Disks, SSDs. So you can attach them to any kind of Google Compute Engine instance. And before, it had the same price no matter what kind of instance you were attaching it to. 

Now, whenever you're attaching them to either on-demand or preemptible instances, they will be way, way, way cheaper. To the point that if you are attaching them to an on-demand instance, it will be 63% less than what it was before. And for preemptible instances, it's 71% cheaper than before. 

It is a huge discount, so if you're doing things like running MapReduce or batch jobs where you need a lot of really fast storage, you can use local SSDs with preemptible machines, and it's going to be incredibly affordable now. So yay. 

MARK: Yay. Priced lower. Good. 

FRANCESC: Yeah, I like it. It's simple. It's cheaper. Like it better. 

MARK: Exactly. Wonderful. Awesome. So why don't we go chat with our now good friend Greg DeMichillie and talk all about OCTO? 

FRANCESC: Sure. Let's go to that. 

MARK: So I'm really, really, really excited to have someone on the podcast that I've wanted to have on the podcast for a really, really long time. Greg DeMichillie, director of product management, Cloud CTO Office. Greg, how are you doing today? 

GREG: I'm doing great. I'm flattered that you wanted to have me on here. I've been listening for a while, so I'm just-- I'm just happy to be here. 

FRANCESC: It's been a long time. So thank you, thank you so much for joining. 

MARK: Yeah, absolutely. So we got you in today. We want to talk about OCTO, what it is, what that relationship's like with the customer. Before we do that, can you tell us a little bit about what you do at Google, like, your history? Like, what do you do here? 

GREG: Sure. So I'm-- I've been at Google now just around five years. I used to say I joined Google Cloud Platform before there was a Google Cloud Platform. When I joined, we had App Engine and BigQuery and App Engine and BigQuery. 

MARK: No Datastore? Was there no Datastore then? 

GREG: We had Datastore. I always think of that as really being-- at that point Datastore was only usable from App Engine. So I sort of think of it as one-- I'm still the holdover that forgets that Datastores now actually can be used from any product. So yeah, I started back at the beginning of GCP. 

For the first few years I led product management for the compute side. So App Engine, Compute Engine, Kubernetes, the billing system, the tools, the SDKs, that sort of stuff. And then as we've grown, it's just been amazing. 

And about a little, I would guess, a year ago, we saw-- with Diane Greene joining to run the organization-- we saw this huge increase in the number of really big customers. You know, brands that anybody out there would recognize that wanted to talk about Google Cloud. And they needed somebody or a group of people who were technical. 

I mean, I'm an engineer by training, right? In between this meeting, I was compiling TensorFlow from sources on my laptop a couple of hours ago to get one that was optimized for my particular processor. So I'm an engineer at heart, but I've done this long enough that I also understand what businesses and enterprises and C-level execs think and want. And so I view my role, and I view the CTO's office role, it's really two ways. 

I mean, you know, like you guys, you're developer advocates. Your job is to advocate for Google to developers, but then also to do the reverse, right? To advocate for those developers back to Google. I kind of view my job as the same thing. Except instead of developers, my job is to advocate for these senior executives at some of these big companies, right? 

And just like you don't think about one product, you think about the whole platform, it's kind of the same. I don't think about just data storage, just machine learning, or just Compute Engine. I spend time with those customers, and then I try to help the product teams across the whole suite understand that set of customers and understand what they care about and their pain points. 

So I really think it's very similar to DevRel except it's not for-- it's not aimed at individual developers. It's aimed at the C-level executive, the senior technical people in their organizations. 

And it's fun, because it means in the morning my day might be one part meeting with some SVPs of a customer, a potential customer. It might be sitting in on a tech review for a new upcoming release of a product. And then in between, like I said, I was compiling TensorFlow from sources a little bit earlier today. So it's kind of fun to be able to do all that. 

FRANCESC: So all of this kind of reminds me of previous episodes we've done lately on customer engineers and customer reliability engineers. And a lot of these people that are kind of different points of contacts to Google Cloud. How are you different or how are you similar to, like, for instance, let's say, like strategic customer engineers? 

GREG: Sure. So, I mean, the thing is to remember is that, when you're dealing with a company that's as big as, you know, HSBC or a company as big as, you know, Snapchat or Spotify, they're filled with people at every level. They have people who want to talk to somebody who can write code for them. They also want to talk with people who can think about the business. So one difference is, the main difference is sort of who we interact with in the organization. 

So you know, we tend to spend most of our times with the SVPs, the CIO, the CTO, the directors of engineering, and those sorts of things. We view our job as to sort of be an advisor to them. We're not in sales, and I think that's kind of an important distinction. Like you, we're part of the engineering team. 

And so those sorts of customers like having someone they can talk to that they know is focused on the long term. Like, I'm not-- my job isn't to retire quota for the sales team this quarter, right? My job is to think about the two-year journey this customer is on and to try to-- try to optimize for the long term. 

And so that's-- and it's helpful that we just are in engineering, right? We're that much closer to the product development team. But, you know, it's a horrible cliche of "it takes a village," but there's truth to it, right, in that a customer like this needs technical account managers. They need customer engineers. They need-- any big company needs a lot of help and assistance. When you're talking about something as big as, you know, abandoning your data center and moving to the cloud, right, that's a huge change for a company to make. 

FRANCESC: So you mentioned some really big names like HSBC, Snapchat, which it's kind of funny that they're both in the same sentence because they're so, so different. 

GREG: Isn't that true? Isn't that true? That's what makes the job fun, though. 

FRANCESC: Yeah, and it's pretty amazing. Of those customers, can you talk a little bit about what kind of customers we're working with? 

GREG: Yeah. So obviously I can talk about the ones that are public. One of the fun things about the job is, like you, we get involved with customers sometimes really, really early. And for me, the fun is the breadth of it. I like, you know, one minute we're working with the Walt Disney Company and you're talking about-- I mean, the people who build the theme park I grew up going to as a kid, right? Then it might be Spotify, and what a really cool company with thinking about how to revolutionize music. And then it'll be a bank suddenly. And OK, now you got to switch your head to thinking about the way a bank works. 

Actually, that gives me-- it's a good point to talk about is the CTO office is-- it's a fairly large team. And I would say one part of the team are people like me, fundamentally technologists who've been at Google a reasonably long time and who understand the whole product mix. But the other part are Brian Stevens, our CTO, uses this great phrase. He calls them "recovering CTOs." That is, they're former CTOs of companies like GE Manufacturing or an oil and gas company. 

So they come in with this really, I understand this vertical market. I mean, in some ways I think of them as like a universal translator. Do you know what I mean? Like, we speak-- we speak containers and they speak hydrogeological analysis, right? They can translate technology speak into the language of an industry. 

So part of the fun things about the job is, I get to work with people who have, like, all sorts of really interesting kind of crazy backgrounds. And they aren't-- they aren't just kind of engineering people like me, but they're also people who come from an oil and gas or a finance or a manufacturing background. And so that means that we work with companies all over the board and worldwide. 

So for me, that's the fun part of the job. Even as an individual engineer, I liked the demo. I liked showing off what you'd built to somebody. Do you know what I mean? Like, when you build something cool and you show it to a customer or user and you see them go, oh, wow, that's neat! That to me was always the really fun part of the job. 

So in some ways now, I get nothing but the fun part. You know what I mean? So it's perfect for me. 

MARK: No, that sounds very interesting. So I guess that means, then, like, you were talking about people who have verticalized. So maybe if you're working with, like, a large banking customer, you might go in to talk about the broader picture, but you might also bring in, say, if there's somebody has a verticalized title for finance within OCTO as well, so you have that sort of team coming in. 

GREG: Well, and that's also-- you made a good point. You talked about bringing other people in. OCTO does not have a monopoly on smart people. And so part of our job is to know folks like you and folks like the PM team and the engineering team. So if we're having a conversation with somebody and it turns out somebody in their organization really needs to understand, I don't know, how the Kubernetes scheduler works or something like that, we draw on the rest of the product and the engineering team. 

And the good news is, most of the product and engineering people I talk to, like, a chance to go sit down with a real customer, I mean, that's gold. When you're building products that are used by thousands or millions of people, sometimes it can be hard because it's easy to get divorced and separated from the actual user because you don't know them. But if you take an engineer and you have them sit there in a whiteboard with-- like, one of our network engineers sits on a whiteboard with a network operator at Spotify and they sketch problems out together. 

That sticks, do you know what I mean? Like, that encounter sticks with that person. And when they go back and do the rest of their development, they will think about that particular customer they talked to. So-- so we also try to really connect the dots where we can so that the engineers get that sort of direct interaction when it makes sense. 

FRANCESC: So I'm curious. As a customer of Google Cloud Platform, what should I expect from the Office of the CTO? Would you say it's just a first point of contact for them to figure everything out? Or what does it, then? 

GREG: That's important. That's a good point. You know, we're-- Google Cloud Platform is obviously large and growing. We have a lot of different customers. The CTO office, you know, doesn't scale in that sense, right? Even with a team of 40 that's-- do the math-- that's not big enough to support 1,000 customers. 

So we have a bit of a process to determine where we engage. It's largely driven by the needs of the product teams and the needs of the sales teams. Our primary focus is on those, you know, call it the 500, 1,000, the biggest companies, the biggest brands. And not just by revenue, but in terms of their brand and their brand value. 

Obviously, there are certain customers that, if we bring them onto the platform, they tell a great story that helps other customers. So we have a bunch of different criteria for what we look at. The sad part is we can't engage with every customer that we would want to. There is just not enough of us. So unfortunately, we have to do a little bit of a triage. 

The good news is, though, the other part of the job that I really enjoy is, many of us are very active at things like Google Cloud Next and the summits. We were very big in the New York one. I obviously went to San Francisco. I'm getting ready to go to Google Cloud Summit in Sydney. 

FRANCESC: Me too. 

GREG: And I'll be in Paris and, I think, Munich. So if you come to those events, that's also a chance to interact with us and to get some advice and guidance and just talk to us about Google Cloud and how that works. 

FRANCESC: This makes me think about doing Cloud Next in San Francisco. There was actually a special track for these kind of most important strategic customers. Is that something that you also do or-- 

GREG: Yeah, we work very closely with that. That's-- there's these things called Leaders Circle that-- 

FRANCESC: Exactly. 

GREG: --that we run sort of-- I don't want to say in parallel-- but the attendees are invited by Google to come to this. They're usually the more senior executives. They will go to the keynotes, and then they'll come to-- instead of going to the engineering code breakouts, they go to their own sort of set of breakouts that talk about some business issues and business strategy and that sort of stuff. So yeah, we're very-- we're very involved in those. And again, that's another fun opportunity for us to sort of understand what's going on or what these customers actually need from us. 

So I love that part of the job. Again, Next and Summit and those sorts of things. I think that's the fun part, right, to actually get out and talk to people and show what you've done. 

MARK: Actually, I'm now quite curious as well. As you say, you've got a long history of engineering. What do you find are the big differences between sort of working with-- like, I know we're developer advocates. We work at a developer level. You work at probably like more of a CXO kind of level. What do you find the big difference there in terms of the expectations or what people are looking for out of either GCP or from you as the Office of CTO? 

GREG: Well, I mean, first, what's the same is you have to be grounded in technical reality, right? I can't do my job if I don't have some understanding of how TensorFlow works and how Kubernetes works. And I don't have any code contributions that have ever been pushed into those repos. I don't think I ever will. 

But it starts with, you have to be grounded in a technical reality. Because at the end of the day, the customer is buying technology from you and they want to know, does it work? Does it-- will it work to solve their problems? And so it starts with just like you, that same grounded in reality part. 

What's different is, my slide decks don't really have code samples anymore, but they have technical material. I do talk about things like spanner scaling. Or I do talk about things like machine learning training and how much compute do you need. How much data is enough to build a decent ML model. 

It is technical, but I don't-- I don't have code samples and APIs in my slides anymore. My demos aren't opening up an IDE and editing code. They're slightly different. 

But what stays the same is, you have to be grounded in the technical truth and reality. Because otherwise you're not helping, right? You're just selling. 

MARK: Yeah, that makes sense. The other thing I was curious about as well is, what does an engagement with the Office of the CTO look like? I know, like, CEs, obviously-- or not obviously-- CEs have, like, regular meetings and stuff like that. Is it the same for Office of the CTO as well? 

GREG: Yeah, that's a good point. First, it's important to understand we usually are involved early on in the early process. And then we usually phase out a bit once the customer is fully on board. I mean, where we really try to help is, there's that point when the customer is trying to get their sea legs under them. Do you know what I mean? 

They know they want to be on the cloud. They know it's different. They don't quite necessarily know which project should be their first project, which should be their second. So we're very intensely involved in that sort of early phase. 

Once the customer's really ramped up and in production and they know Google Cloud Platform really well, then our sort of interaction phases out, because now the strategic customer engineers, all the rest of Google's technical team, can help them work with that customer over time. So we tend to be very involved in sort of the early on phases and then phasing out a bit. 

We stay in touch with them because we also run our customer advisory boards and those sorts of things. So we stay in touch with them. But the depth of the engagement, instead of being on the phone or on a GVC once a week or flying out to London, which in the early phases, you know, we literally will be talking with someone at one of these companies once a week, multiple times a week. It eventually phases out, and it becomes more of a checking in periodically. 

MARK: Cool. And it sounds like you've helped a lot with some fairly large migrations into the cloud. Have there been any particular lessons you've learned along the way that maybe our listeners might want to be interested in? 

GREG: I think right now there's a lot of block and tackle work of, you know, migrating data and security and all those sorts of things. But I think the biggest one I would say is, when I look at companies that migrate really quickly versus companies that take a long time, often the difference isn't so much in the technology of the company. It's in the approach the company takes. The companies that move fast move fast because there is one or more leader in the company who's committed to making it happen fast. 

Because look, there'll be hiccups along the way. And companies that move fast, they don't allow everything to grind to a halt when they hit that first hiccup. They sit there and say, OK, we've got to solve it. Let's move that to the side. Let's get some smart people on at solving it. And let's keep everything else moving forward. 

The companies that take a long time, sometimes that stuff's like Velcro and you get stuck on it. You know what I mean? And so the companies that take longer, often it's because everything starts to sort of slow down when you hit the inevitable issues or hiccups. And everybody-- I mean, companies are big. This stuff's complicated. 

But I think that's probably the biggest difference is, if you-- you can move quickly, but as an organization you have to sort of be committed to that, that we're going to move quickly. When we hit problems, we're going to figure out how to not sidetrack them but work on them without everything else grinding to a halt. And that, to me, is the pattern I see sort of when you see the companies that have really been fast moving. 

The other thing is, pick a pilot project and just start. Like, some companies won't start anything until they know everything. And you'll never know everything, right? Pick a pilot. That pilot will teach you so much about how the cloud works and the APIs and the consoles. You'll learn 10 times as much out of that first pilot project as your second one, because it's when you're learning everything about how all these pieces fit together. So it's incredibly valuable. 

So I really encourage people to do that as early as they can because you'll come out of that with so much more knowledge about how all these things work together. So yeah, be committed to it, know that you're going to have issues, and be committed to not letting those make everything stop. Find a pilot, start a pilot. Get something so-- like I said, you get your sea legs under you, right? 

And it's not quite so much of a strange world. And that approach, when we see that, that's what we see customers that end up moving really fast. 

FRANCESC: So you were saying customers that move fast versus customers that move slow. How fast is fast? 

GREG: Well, I don't remember the exact number, but, you know, Evernote, I think, is a pretty remarkable example of how quickly they moved from their on-prem environment to Google Cloud, including petabytes of data. And as you might imagine, with Evernote, they wanted to make sure they were really satisfied with security of their customers' information and all those sorts of things. Like, they were an example. 

Lush Cosmetics in the UK, I think the number was 28 days or something like totally insane. I'd have to go back and look. They were on stage at Next in San Francisco, and they talked about the speed with which they moved. 

So these things can be done in order of a month or two if you're committed and if you're all hands on deck in that way. And so Evernote and Lush were two examples of companies that just did it really, really quickly. 

Now that doesn't mean everybody can do it that quickly. But again, in those companies, they just-- they were committed to it. They had an attitude of, we're going to just work through the problems as they come up. And we like that. Do you know what I mean? 

Like, I think one of the things that customers that work with us find is that, at Google, I think for all of us, we really do think of this as a partnership with the customer. We don't want to be a build software, throw it over the wall to the customer, you know, good luck figuring it out. We really want to have an engineer-to-engineer relationship with these customers. And I find they appreciate that. And that's another reason they can move fast. 

FRANCESC: Yeah, I think that that is a common theme over all the episodes we've been doing with CRE and CE and [INAUDIBLE] and all of those E's. 

GREG: Yeah. Well, just-- even if you're in a customer-facing role, we hire for people who just are, I would say, an engineer at heart. And by that I mean, like solving problems. You know what I mean? That like technology. That think this stuff is just cool, you know? And that's certainly me and you. 

FRANCESC: I have one last question. We're almost running out of time, but I have one more question. You mentioned that the speed at which companies are able to move to the cloud depends mostly on their willingness or their, like, how ready they are as an organization to move. Is that for companies that are doing basically like, I think it's lift and shift? Or is it more like, are they rewriting some of their components? 

GREG: Yeah. Obviously that's a big variable. Obviously that is. If you are just taking an existing system-- and obviously, no two companies are alike. If you have a mainframe, things are more complicated, right? If you have SPARC stations or other sorts of strange hardware. So I don't-- I don't mean to say every customer, if they just-- if they just willed it could move in the speed with Lush or Evernote did. 

But I would say that even large companies can start-- can have significant work going on in the cloud if they want to. So that's not the same as saying, you've completely shut down your data center and you're completely-- because again, large customers have large systems so. But you can-- but you can start the move now. Do you know what I mean? 

I think Eric Schmidt said that at Cloud Next. Like, get to the cloud now. That doesn't mean get out of everything now. But it means start now. And this just comes up over and over again. When I took-- customers are fascinated by artificial intelligence and machine learning. And my message to them is the same thing. Start investing now. 

This is a different way to program. This is a different way to think about application development. You need to start now because you need to develop the technical skills. You need to understand what it is you're trying to do. So yeah, I think Eric Schmidt had it right. 

It almost doesn't matter your industry. You can start now. 

MARK: Cool. All right, we are unfortunately running out of time here. But before we wrap up, is there anything that you want to make sure we mention or you want to plug, or is there just something cool that you want to talk about that you want to make sure that's on the podcast? 

GREG: I mean, I would just say, keep coming to the Cloud Next and the Cloud Summit events. Right after this meeting, I'm going to go. We're talking about some new demos we're going to hopefully unveil at some of the future cloud summits. I love talking to customers there, so-- and it's a great opportunity to come and meet with the DevRel, the PMs, the engineers, the customer engineers, the people who built this technology. 

And I always say about these events. If you go to a conference and all you do is sit in the sessions, you've missed the real value. The real value is the hallway conversations that you can have. And so sign up for-- we're coming to Sydney, Singapore, Kuala Lumpur, Bangalore, Mumbai, Munich, Stockholm, Paris, Seattle, Chicago. So we're coming all over the world. Sao Paolo, Mexico City. 

FRANCESC: Amsterdam. 

GREG: Did I forget any? I'm visualizing the spreadsheet in my head. 

MARK: That was impressive. That's pretty good. 

FRANCESC: So many of them, yeah. 

GREG: No, really. Come to those events. In one day, it's a great way to get a sense of not just where Google Cloud Platform is but where we're going and a chance to talk with the people who are building it and to have a voice in shaping that. So I'm big believers in those. 

FRANCESC: Great. We'll make sure to have a bunch of links in the show notes to all of those events if you want to attend. So make sure that you check it out and register. And other than that, thank you so much, Greg, for taking the time today to talk a little bit about OCTO. 

GREG: It was my pleasure. Thank you. 

MARK: Thank you. 

FRANCESC: Thanks again to Greg DeMichillie for coming and joining us today to tell us a little bit about OCTO, what they do, and in general for just hanging out with us. He's a pretty cool guy. So thanks for spending time with us today. 

He mentioned at some point that the Lush migration from on premise to the cloud, he thought it was 28 days. But at the end of the interview he was like, hey, make sure this is not too little because I'm not completely sure on the exact number. So we checked and he was actually wrong. It was not 28 days. It was 22, which-- 

MARK: It's just less. 

FRANCESC: Yeah, which is even faster, which is pretty crazy. 

MARK: Yeah. 

FRANCESC: In 22 days they actually migrated from on premise to Google Cloud Platform. Pretty impressive. 

MARK: That's crazy. 

FRANCESC: But now I guess it's time to go with the question of the week. Thanks, Mark, for confirming that the name is actually pronounced "Eetamar," not "Eyetamar" or anything like that. So thanks, Itamar, for your questions because you sent a bunch of them. We decided to go with the last one you sent, which is about, is there a way to access the Kubernetes dashboard without running kubectl proxy? 

And the context is, for instance, if I want to do something quickly on the road from my mobile phone. So what do you think? Is there a way to do this? 

MARK: This is an interesting question. I think the answer is kind of no-ish because reasons. So let's kind of work through them. So generally speaking, if you want to access the UI-- so if you're not familiar, Kubernetes comes with a dashboard. It gives you a visualization to what Kubernetes is doing. But it also allows you to sort of deploy stuff, edit stuff, basically, you know, administer your whole cluster if you want to do it through UI. 

Generally speaking, you want to use the kubectl proxy because that's going to give you security. That's the secure way you're going to log in with your credentials. And that's all going to be set up and work the way it should do. 

In previous versions or depending on your setup for your Kubernetes proxy, you could access the UI through the IP address of your master. That was, OK, it works. Generally, though, I think you'll find on newer versions of Kubernetes, that won't work nearly as well or just won't work at all because things like RBAC and things like that. So you have policies that say what you can access from where. 

I think that's probably a good thing, because you really don't want, like, accessing-- people from outside of the world accessing your master. That's pretty bad. 

FRANCESC: Because the dashboard is not only a dashboard in the-- in the point is like read only. You can actually delete stuff, right? 

MARK: Yeah. Yeah. You can delete pods. You can edit, like, your YAML file configurations. Like, you could basically do whatever you like in there. 

FRANCESC: Maybe even access secrets, so yeah. 

MARK: Yeah. If you wanted to access stuff or, like, see what was going on from your phone, unfortunately right now you don't have access to Cloud Shell from your phone. But I would say you could fire up a small VM, logging SSH into that from your phone, and run kubectl commands and still be able to see what's going on. 

FRANCESC: I checked, and indeed the Android application does not provide a Cloud Shell yet. But I pinged the PM, being like, dude, come on. 

MARK: I reckon we should have that. That's my opinion. 

FRANCESC: Especially because you can actually access it through the web. Like, you can actually visit [INAUDIBLE] or google.com from your mobile phone and start Cloud Shell from there. But there is some problem in there too, and the typing does not work that easily. Which means that, at the end of the day, kind of hard to use. But the good thing about Cloud Shell is that you can also do the port preview so you will be able to access as a web server your Cloud Shell, right? 

And this is actually totally secure because only if you're signed in with your account, you will be able to access that port. Which means that you should be able-- you will be able to use kubectl proxy and access it securely. Because otherwise, if you do it the way you were saying, if you create a small instance and you SSH into it-- which you can do from the Android app, by the way-- then the problem is that then, yes, kubectl, whatever, will work. 

Kubectl proxy will open a port, but then you need to open it from the outside. And then anyone can access it. So we go back to the problem that anyone could access your dashboard, which is a really bad idea. So I guess the answer is, don't do it? 

MARK: I would say the answer then is, just open your laptop. Use Cloud Shell to get in. Then you can still do it on the road. You don't need the tools, necessarily, on that laptop. And then you can continue to work forward from there. 

But I will say, thanks so much for this question. It actually spent us a bunch of time to be like, what's going on? Can we actually access Cloud Shell from Android? Like, what way could we do this? 

And so it's great to explore this stuff. So please continue to send us questions. We love them. 

FRANCESC: Yes. As a result, I'll be filing two bugs. So you know, thank you. 

MARK: Awesome. So Francesc, what are you up to? I know you're going on holidays. 

FRANCESC: Yes. 

MARK: Is that all you're up to, or have you got other things that you want to talk about? 

FRANCESC: That's basically everything I want to think about right now. On top of that, I'm also working on-- so I just released justforfunc episode on how to contribute to the open source project, which is really cool. If you've not contributed to an open source project, Go is a very good one to start with. So check it out. And then after that, I actually got the confirmation that in September I will be going to Sydney. So I'm very excited about that one. What about you? 

MARK: So I'm about to enter a crazy season. So I will be at Play NYC doing stuff about games. So Play NYC in New York in a couple of weeks. PAX Dev, which will be in Seattle on the 29th. PAX West shortly after that. Then Gameacon a couple weeks after that. And then Austin Game Conference about a week after that. And then Strange Loop about a week after that. 

FRANCESC: Nice That sounds-- 

MARK: Yeah, it's gonna be-- 

FRANCESC: That sounds intense. 

MARK: It's gonna be fun! I'm already tired. 

FRANCESC: Other than that, are you doing something interesting? 

MARK: Well, people do keep bugging me to keep writing the Kubernetes and game server series, which I do want to do. I've started writing some more stuff on the eighth version of that too. 

FRANCESC: Yeah, that's a cool one. Nice. Well, I think it's almost time to say goodbye. But why not remind everyone how to get in touch with us so they can send us more questions? Or send us things saying hi or whatever, like, we miss you? 

MARK: Excellent. All right, Francesc, are you willing to give this a shot? 

FRANCESC: Whoo! OK. Let's try this. 

MARK: All right. So there's a website. 

FRANCESC: gcppodcast.com. 

MARK: They can email us. 

FRANCESC: Hello@gcppodcast.com. 

MARK: They can reach us on Google Plus. 

FRANCESC: + GCPPodcast. 

MARK: On Reddit. 

FRANCESC: In the separated /r/gcppodcast. 

MARK: On Twitter. 

FRANCESC: @GCPPodcast. 

MARK: And on Slack. 

FRANCESC: Yeah. I think it's the podcast channel in the GCP Community Channel? Yes? 

[LAUGHTER] 

MARK: So it is the podcast channel on the Google Cloud Platform Community Slack, which you can reach on bit.ly/gcp-slack. 

FRANCESC: One day I will learn that. Thanks, Mark, for such an awesome episode and for remembering how to join Slack. 

MARK: And thanks to everyone for listening. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}
