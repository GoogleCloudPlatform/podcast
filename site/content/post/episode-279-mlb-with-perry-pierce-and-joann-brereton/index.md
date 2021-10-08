+++
audioDuration = "00:41:34"
audioFile = "Google.Cloud.Platform.Podcast.Episode.279.mp3"
audioSize = 99770542
categories = ["Baseball", "Kubernetes"]
date = "2021-10-06"
description = "This week, Mark Mirchandani and Brian Dorsey welcome Perry Pierce and JoAnn Brereton of Major League Baseball to the show to talk sports and cloud."
draft = false
episodeNumber = 279
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "MLB with Perry Pierce and JoAnn Brereton"
image="/post/episode-279-mlb-with-perry-pierce-and-joann-brereton/images/hero/hero-EP-279.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/q2p3qh/episode_279_mlb_with_perry_pierce_and_joann/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) welcome [Perry Pierce](https://twitter.com/ppierce11) and JoAnn Brereton of Major League Baseball to the show to talk sports and cloud. Baseball teams are independently owned franchises, Perry explains, with MLB acting as the oversight corporation. This keeps game play fair and consistent. Like most large corporations these days, technology has become a vital business tool for MLB. Their partnership with Google facilitated a shift from on-prem to the cloud, allowing MLB to take advantage of advanced capabilities like scaling and managed services in a safe environment. JoAnn talks about the process of this shift and the teams at Google that helped make it happen. She details the systems that MLB has moved to GCP, like game scheduling, umpire management, backend systems, and especially the draft.

The amateur draft, a multi-day event, has a special set of challenges that MLB and Google had to overcome. Analyzing player statistics and updating which players have been picked and who is still available are important information for teams. These stats must update quickly and accurately. On the backend, the Electronic Baseball Information System (EBIS) is the MLB software making this all happen, and JoAnn helps us understand the technical side of this Kubernetes-built platform. Google monitoring and EBIS-specific tools keep the draft running smoothly. Our guests take us through this list of tools employed and why they were chosen. 

We hear more about the process of moving such a complicated system to the cloud and what MLB did to make the shift easier. Perry and JoAnn talk about the testing done before draft days to ensure a smooth experience for all and important lessons they learned. To wrap up the show, our guests offer advice, stressing the importance of observability and starting small. Major League Baseball trademarks used with permission.

##### Perry Pierce

Baseball is what [Perry Pierce](https://twitter.com/ppierce11) loves and tech is what he does.  Living at the intersection of sports and tech is a cool place to be!

##### JoAnn Brereton

JoAnn loves baseball and tech, so she's happy to be working at a job where she gets to do both.   

##### Cool things of the week

* Cloud NAT explained! [blog](https://cloud.google.com/blog/topics/developers-practitioners/cloud-nat-explained)
* Build your data analytics skills with the latest no cost BigQuery trainings [blog](https://cloud.google.com/blog/topics/training-certifications/free-google-cloud-bigquery-training)
* Introducing Workflows callbacks [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-workflows-callbacks)

##### Interview

* MLB [site](https://www.mlb.com)
* MLB Draft [site](https://www.mlb.com/draft/2021)
* Kubernetes [site](https://kubernetes.io)
* Grafana [site](https://grafana.com)
* Inside Baseball: How MLB Transactions Actually Get Done [blog](https://blogs.fangraphs.com/inside-baseball-how-mlb-transactions-actually-get-done/)
* LBi Software [site](https://www.lbisoftware.com/home)

##### What's something cool you're working on?

Brian has been working on a [YouTube series on VMs](https://www.youtube.com/playlist?list=PLIivdWyY5sqIteZONy-rTwyf3w3OddFQ1) with Carter Morgan.

Next week is Google Cloud [Next](https://cloud.withgoogle.com/next)!

{{< transcript "[UPBEAT MUSIC] MARK: Hey there, everybody, and welcome to episode 279 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and today we're here with Brian. Hey, Brian. How are you doing?" >}}

BRIAN: Hello, hello. 

MARK: Always exciting when we get a chance to sit down and chat, and we have a super cool episode this week. 

BRIAN: Tell me more. What's the main topic? 

MARK: We are talking about MLB, or MLB, as we just talked about. MLB, of course, is short for Major League Baseball, and we are talking all about-- might be a little bit surprising, right, because you think about Major League Baseball, and you're thinking, oh, hey, this is a sport. What does the sport have to do with the cloud? Well, Brian, I'm glad you asked me that question. 

BRIAN: What does the sport have to do with the cloud? 

MARK: We're actually going to be talking about the draft from this year and all of the different technology that went into making that work. And that's how we're going to tie the baseball kind of story with the cloud story. It's a really great conversation. 

We're going to have two folks from MLB, Perry and Joanne, they're going to come in. And they talk about, basically, the draft from this year, the system that MLB has built to handle the draft, all the different technical requirements, and not only the amount of work that went into planning this actual draft, but also how do they execute on it, and how that's changed a little bit with COVID, and how they had to respond to that. 

It's a super great conversation, and we really get into some great details about how they planned and tested for an architecture to support a very big event when the draft is going on. There's a ton of folks who are obviously really interested in getting this data as quickly as possible and staying up to date, so we dive into how they built that. 

BRIAN: It seems like, in general, the abstract version of that use case is, I think, pretty common across a lot of companies, as you say, especially when we're all working in all the places at once. 

MARK: Yeah. And we talk about it in the interview itself, but a big part of some of the stories that we get to tell to folks when we're talking about building out and kind of architecting is around kind of spiky workloads. I think this is a great example. I think this is one of the best examples of a spiky workload because you have a massive influx of demand all at once. And so planning and testing for that is super difficult. 

BRIAN: I imagine this has to be pretty transactional as well. You don't want to have different people end up on different teams or something. Interesting. OK. 

MARK: It's a very high priority and very, very tight timing. So we talk all about that kind of stuff. It's a great conversation. But before we jump into that, why don't we do our cool things of the week? 

[UPBEAT MUSIC] 

BRIAN: My cool thing is kind of a discovery for me. I didn't know this existed. So I want to talk about it. It's Cloud NAT. So Priyanka [INAUDIBLE] wrote a blog post introducing this recently, and we'll have the link in there. But in some ways, it's kind of the inverse of a load balancer. 

I think a lot of people may be familiar with NATs at home, you know, where you've got one connection to the internet and a whole bunch of computers at home or phones and things, and they all need to get out without sharing their IPs with the world. It's a similar thing in a cloud cluster where, if you can, you want to minimize the number of machines that have public IP addresses. 

But still, the way computers work these days, pretty much everything needs some internet access. So you want to be able to have outbound connections without people being able to kind of knock on your door. So this is a way of doing that part of networking. But the twist is that it's actually a distributed service. 

So like our load balancers, when you set up a load balancer for Google Cloud, you're not configuring any particular computer that could get full. You're configuring a whole data center's worth of computers or more. And the same thing is true for this NAT stuff, it looks like, which is really neat. 

So it looks like it'll never be a bottleneck for your traffic for any particular machine trying to communicate. So that's super powerful. And then I was reading through the docs, and it just looks very complete. If you need to be using some of the protocols, like STUN or TURN, that allow you to initiate connections so that things can still get back in when you start them, you can set up a server so you can deal with those protocols as well. 

And I think the feature I'm kind of most surprised about-- I didn't know it existed-- it allows you to manually configure a set of addresses for that outbound traffic. The reason that's exciting is, quite a few services still want you to give them a list of IP addresses, and they'll create an allow list and only allow traffic from those addresses to come through. And maybe that's not the perfect or end-all of security practices, but it's pretty common. And often, you need to be able to do it. 

And this allows that to work in a really consistent way without giving a public IP address to each of your machines. So I'm really excited about that. I think it solves a real problem. 

MARK: Yeah, that sounds super cool. And, of course, like, this kind of theme that we have or we see a lot, I should say, where there's a lot of different ways to solve the same problem, but it's really going to depend on what configuration, what your business logic needs, what your infrastructure needs are. And so it's great to see another way of kind of offering that solution in a way that doesn't involve spinning up a VM and then running it yourself because then you have a lot of other trade-offs that go with that. 

BRIAN: And I should mention, Compute Engine has had that ability from the beginning to say, I want all traffic for machines that don't have a public IP address to go through this other machine. So you can still set up a proxy and do that kind of thing if you want to, but this way, you don't have a single bottleneck, and there's nothing you need to run. Check it out. 

MARK: OK, I've got two cool things of the week myself. The first one is just a quick shout-out to, of course, our friend Leah. She's been working on a bunch of content. And she's put up some bigquery content on YouTube and on the cloud blog. But she's also got this blog post that we'll link to in the show notes that talks about some free bigquery training opportunities. 

And for anyone who knows me, I love free. So always excited to call those out. And for folks who are interested in learning more about bigquery whether you're just getting started with it or if you want to kind of sharpen your skills, I always recommend checking out these training opportunities. 

BRIAN: And I'm going to dive in there. If you don't know what bigquery is, definitely at least check it out because it is a really unusual thing that's like database-ish, but not a database, and it makes the things that are hard to do in databases easy, basically, like, really big stats queries or like needle in the haystack kind of queries. So really worth checking out if you've got a lot of data to analyze. 

MARK: Yeah, that's a great point, we actually have a tremendous number of episodes where we've talked about different products and features around bigquery. And so if you are new to bigquery, it's a super cool technology, and it does kind of take in a spot that is not what you would traditionally expect from a database. Check that out. 

But the other cool thing I wanted to call out here was a blog post by Gilham who is talking about-- actually, he created a tutorial that you can follow, and all the code's on GitHub, about doing callbacks in workflows. I think we've talked a little bit about workflows in the past. 

It's kind of an orchestration solution where you can set up a chain of events, especially between different cloud functions or different services. So you can say, do this, then go to the next thing, then take those results, go to the next thing, and create this entire chain. 

Well, now you can use callbacks with that. And so he walks you through in this tutorial an example of being able to basically send off a request. And then instead of waiting for a response for that request, just pass over a callback URL and then have it kind of pick up the workflow from where it left off-- basically a really strong way to do asynchronous workflows, especially when you might have, let's say, a piece of your workflow that depends on manual intervention or human intervention. Like, that's going to be something that you can now do with these callbacks. 

BRIAN: Got it. Halfway through that, I was like, callbacks I get in terms of software, but like, in terms of workflows? Anytime you have something that you may need to wait a long time for. 

MARK: Yeah, exactly, it's a much better solution than basically just waiting and constantly pinging, right, or polling it's so much easier to just say here, just let me know when you're done, I'll be over here. I'm ready. 

BRIAN: That's really cool. 

MARK: Yeah, it's a super cool tutorial, so check those out if you're interested. All right, well, with our cool things out of the way, why don't we go ahead and jump into our main conversation with Perry and Joanne? 

[UPBEAT MUSIC] 

Joanne and Perry, thank you so much for joining us. To get things started, can you give us a little introduction? 

PERRY: So I'm Perry Pierce. I'm vice president of Baseball Enterprise Systems here at MLB. I've been here for five years. And I'm very excited to be here. Thanks for having us on. 

JOANNE: And hi, I'm Joanne Brereton. I'm a director of software engineering, reporting into Perry. And I've been working for Major League Baseball, for six years, and I am very happy to be joining you on the podcast. 

MARK: Absolutely, we're thrilled to have you here. I think the first question, and for some of our listeners, I think most people will probably be familiar with what MLB is. But for anyone who isn't, can we just get a quick introduction of, like, who MLB is? 

PERRY: Absolutely. So Baseball is actually a set of franchises. So each of the teams that you follow is actually a franchise and is independently owned and operated, and MLB is the corporation that oversees everything that happens among the 30 franchises. So think of us as the central office for on the field, off the field rules, et cetera, so that the independent franchises all operate under the same level playing field. 

MARK: And I think a lot of people are probably familiar with America's pastime, baseball. But it's definitely interesting to think about what this has to do with-- I think about baseball. It's a sport. I'm not a super sport person myself, but it's interesting to talk about the technology side of things. So MLB and Google Cloud have a partnership. Can we talk a little bit more about what that partnership looks like? 

PERRY: So as many companies have done, and MLB has done-- so when I first got here six years ago, we were primarily an on-prem operating environment. So we had our own data centers, we had redundant data centers in different locations, et cetera. Moving to the cloud became in vogue. It was something that we thought was an important initiative for us to take on for total cost of ownership as well as opportunities for us to leverage other people's compute capabilities and expertise to allow us to build more complicated and more sophisticated solutions. 

MARK: We talk about a lot on this podcast about kind of the journey from on prem to cloud and the different decision factors that go into that journey. And it's different for every single company. What type of data are we looking at for baseball, which, you know, it's a sport, so it's going to have a lot of statistics. But there's also a whole host of other things that y'all are doing on the compute side, right? 

JOANNE: So we've moved a number of systems to GCP. In our own organization in baseball enterprise, we've moved not just the IBIS system, which we're going to be talking about a little bit later, which actually runs the draft and a number of other things, we've also moved systems around game scheduling and broadcast around umpire management, some things around prospect management and prospect's entry into the draft. 

And also, we've moved a bunch of sort of just back-end systems. You may have seen the dugout iPads that the players have. The back-end systems for that are running on GCP. And we also have, in addition to the draft system that's run on IBIS, which again, we'll be talking about, we also run a Slack bot that's also part of that draft, and the back-end for that as well as also running on GCP. 

MARK: Yeah, I mean, I want to get into the details of IBIS, and we'll talk a little bit more about what makes that such an interesting system that was built. But you know, this has been a partnership with MLB and Google Cloud for a little while. Can you talk a little bit more about some of the different teams inside of Google that you worked with, such as the PSO team. 

JOANNE: We've worked with them primarily on tracking important events, like the draft, opening day where you have postseason coming up, mostly helping us to make sure that we stay up and running during these very important events. We do have weekly meetings with them, and we talk about what system are we migrating next. And also, we get very involved in jewel events, like the draft, which we talked about, just to make sure, again, that we're up and running, that we're able to observe everything that's going on in the background and keep things running smooth. 

MARK: So yeah, let's talk about the draft because obviously it's a pretty big event for the folks who are into baseball, but it's also a high demand event for, I'm sure, the folks working at MLB, to make sure that it goes smoothly. Let's talk a little bit more, like what exactly is the draft, and what makes it such kind of a big challenge to make sure it stays up and running? 

PERRY: Absolutely. So the rule four draft, as we call it, or the amateur draft takes place over a couple of nights in the summer. It had been in June, and most recently, we did it in July as part of the All-Star game. And it involves drafting of players so that they can have exclusive rights to sign those players. 

We did 20 rounds this past year. In the past, we've done as many as 40. But this year, there was over 600 players picked. So think of it as like your ultimate fantasy sports draft. It's a smaller user base because it's not every fantasy sports player, but the demands are still extreme because of the fact that people want to know and feed into their analytics systems. 

Who's been taken? Who should I take next? So a lot of the decision in the analytics systems that the clubs have built is supported by the picks as they come in. And so it needs to be high availability. We need to give them the draft pick as soon as it's made so that they can start their own analytics process behind it. 

Not to mention that we're on TV, so you've got ESPN this past year. MLB Network typically will show the first day of the draft as well. So any noticeable delays or interruptions will be noticed, not only by the clubs, but it will be noticed on TV. So we really want to make sure that we do a lot of checking along the way and make sure that when a pick is submitted, it's confirmed, and then we push it out to all our downstream consumers. I mentioned the club systems, but as well, what you see on Twitter, where MLB draft is tweeting, you know, who gets picked, from what school, et cetera. That's all driven by IBIS confirming the pick that was made by the clubs into our system. 

MARK: So let's talk a little bit more about the technical side of IBIS. What does it actually look like, and how do you kind make sure that it has that high availability? 

JOANNE: I can talk a little bit to that. So the back-end of IBIS is six or seven services now that we run. They're basically Spring Boot services. Then we also have a front end. That's what the users and the commission are all using to drive the draft. That's running on the Cloud CDN. All of the back-end services are running in Kubernetes right now. 

In addition to that, we also run Vertex, which manages some of the real-time messaging that goes on with IBIS as well. I think the biggest concern that we have is we have a very spiky system during the draft. People are logging in all at once. We have 30 clubs, plus the commissioner's office, plus many other people logged into the system at the time, taking a look at it, making sure that the draft picks are going through correctly. 

And we definitely want to make sure that no one gets dropped during that period. We want to make sure that none of the picks get missed. And we want to make sure, more than anything, that the information is correct, that the folks are getting through the system. So that's a very big part of it. 

So the whole thing is a pretty good scaling challenge for us. Given that we're only over a couple of hours, it has to be perfect. So we do a lot of redundancy. We do everything on the fly, and basically, as things go. But the system, as we're running it, it will also be creating the contracts as well. 

So everything is sort of getting done at once in that system, and we just have to make sure that everything is scaling correctly. We do an awful lot of monitoring on the back-end system. IBIS has its own tools that we're using to track teams as they're logging into the system. We make sure that they stay logged in. We use Google's own monitoring tools. Plus, we use Grafana, Yeager, and a lot of tools around monitoring Kubernetes itself to make sure that everything is staying up. 

MARK: I definitely want to break down some of those details because I think it's really cool to see, and it's such a great example, I think, when we talk about spiky workloads, right, these workloads that have to handle a pretty increased demand fairly quickly. I think the draft is probably, actually, a fantastic example of where I'm sure you have just this enormous burst of traffic all at once and then these people who are logging into the system, as you kind of mentioned before, Perry and Joanne, about not only kind of the people watching and the nation watching on TV, but also all of the stuff that happens in the back end, like the contracting and the complexities that go into someone actually picking a player. 

So let's talk about that architecture side, right? I mean, knowing that it's going to be a huge demand for a short period of time, what led you to some of the decisions of the tools that you're using? 

JOANNE: Well, it's interesting. I mean, this started out as a Tomcat application on prem, and we had intended, when we first decided to get out of our on-prem system, the original intention was that we were going to lift and shift it onto compute engines as is, pretty much, just running the VMware. But we started to take a closer look at Kubernetes to take advantage of the scaling of it. 

And we had some tools built in-house for Kubernetes that would make this process go a little bit easier. So that decision became very easy once we started to build it up and it started to actually work. And between that and also using some reactive messaging through Vertex, it became a lot easier to manage and a lot easier to not have to worry about scaling as much ahead of time. We could do some mock drafts and then start to decide how many pods do we need here, how many pods do we need-- on part that's writing the contracts, how many things do we need to be bringing up for those actually running the draft itself? 

MARK: Yeah, I'm curious about the mock draft part of it, because can you accurately simulate the amount of scale that you get on a typical kind of major draft event? 

JOANNE: Actually, we do. We have a couple of tools for that as well. We have a mock draft that's automated. We actually have an automation engine that will do picks and send them out to all the places that it's supposed to go. We also do mock drafts with human beings. And we do that, certainly, to make sure that people are comfortable with the system. 

And we've also done, recently, some very good resiliency testing. We actually ran a mock draft where we started knocking over various parts of the system, shutting down pods here and there, shutting down pieces of the database to see how far we could push it. That gave us a lot of lessons as to, what do we actually need during the real live event to keep this thing going? 

MARK: Yeah, I think it's an interesting one, especially when you're talking about these kind of decoupled services and having the ability to take independent services offline and build your system around that. Can you talk a little bit more about that process, where you were thinking about maybe lifting and shifting and then moving over to kind of this new architected system? How difficult was that, especially for the folks who work inside MLB to they make that conversion? 

JOANNE: I think it actually became easier because a lot of the Spring Boot applications that we have here at MLB had been heading toward Kubernetes anyway. So I think it actually ended up being easier to do that. I don't know, Perry, what do you think? Do you agree with that? 

PERRY: Yeah, I would say we didn't make this our first foray. We did some of our easier systems to get our feet wet, understand and start to build a cookbook or a run book on how to do it so that when we tackled the bigger IBIS system, it became a little more prescriptive. There was still more to do, and we did learn some additional things. 

But most of the unknowns had been known, and we were able to work through them using some of those smaller projects beforehand, which greatly eased our ability to get there with the architecture that we needed. 

MARK: Yeah, another interesting thing that you had mentioned is the idea of doing mock drafts, not only simulating them, but also with bringing in humans and kind of doing a whole event, which is a pretty interesting take but also a really smart one. How did those events go? 

PERRY: Actually, pretty well. We actually do multiple of them every year because we can't necessarily guarantee that every club has the same group of people involved in the draft every year. It's just a once a year, three-day event. So there's a lot of moves in the off season and whatnot. 

So we do mock drafts, not only with the technical groups at the clubs, with the club personnel that are actually making the picks in the front office. So we actually do API-level testing with the clubs, where we implement some of the automated picking that Joanne mentioned earlier so that they can verify that their connections to our APIs are correct. 

And we actually simulate some of the edge cases, like for example, I am a right fielder and a first baseman. But I'm going to be drafted as a first baseman. That's a position change, so we need to make sure that the clubs can handle when a position change is made. Or, in some cases, like they're a pitcher and whatever, they're going to become a pitcher, so making sure that all those cases are correct. 

Additionally, this past year, we had the ability to undo a pick. So there is something that went wrong. I picked Bob Smith, but there are three Bob Smiths, the ability to back out of that and re-enter the correct Bob Smith was set up for this year. So we had to make sure all the clubs and their interaction with the APIs were correct. 

The third mock draft that we did was actually with the club personnel that were doing the picks on our user interface. So we did tech as well as front end user testing and training, essentially, and go through a couple of rounds, simulate some of the position changes, tell them, OK, we want you to pass this pick. We want you to change position on this pick, so that they understood how to work the user interface. And that was a great success because as a result, we avoid hiccups when the actual draft goes on. So consider it a formalized dress rehearsal. 

MARK: Yeah, I mean there's nothing quite testing your application to put it in front of users and let them test it. That's always the best kind of feedback. At the same time, I'm sure a lot of companies find it very challenging to also fully simulate production, right, because there's always going to be some surprise, there's always going to be something that goes on that you maybe couldn't or didn't think of when it came time to actually run a live event. 

PERRY: Absolutely. Another great example is, you do all your testing in an office environment. Well, guess what? Club X decides they're going to be at the local hotel so they can be off-site, and it's using a hotel internet connection, which is notoriously unreliable. 

You know, one year, we had a club in Arizona that actually had a power failure, and they actually had to switch to a small hot spot to do the draft because their facility lost power. So you're right, those kind of things can and will happen. So some of the failover testing, brownout testing Joanne spoke about before, plus these dress rehearsals, avoid all the unknowns relative to our system. And then the other issues, you can manage a little bit as they come up. 

JOANNE: It's worth mentioning the Slack bot as well, Perry, that kind of helped us on kind of entry into the system to make sure that, again, the clubs were able to sort of enter via Slack, that they were about to put into IBIS. And it was sort of another double check of making sure that we had the right Bob Smith, as Perry mentioned, and that he went to this school, and he wants to be called Bob instead of Robert. So having these sort of extra tools around I think kind of helped us get a hold on quality there. 

MARK: So like we were just saying too, I mean, there's no testing like production testing. And so y'all put this system into production this year. How did the draft go? 

PERRY: The draft actually went very well. This year we actually had a little bit of a twist. In 2020, we were a fully remote draft for the first time because of COVID. This year, we had a core group of people in Denver alongside our baseball operations team. And then the ability for the clubs, if they had issues, to call into that war room with any questions or concerns. 

We also had a team in New York set up to support systems and monitor as things were going on. Think of it as mission control. So we had mission control in Denver, and then I would speak to the back room, just like they did in the Apollo days. And the New York team acted as the support team if they had a question in the room or if they needed to raise an issue to the room. 

As well, we had various other parts of the system that we had to make sure were running. Joanne mentioned the Slack bot before. We also did a few other options that we added as well. As you saw in some of the commercials, we actually had a draft day screen that's suitable for broadcast. And a lot of clubs use that in their rooms as well. 

So we had to make sure that that was all working correctly for them as well. If you didn't happen to see it on TV, we included a screenshot here for you to take a look at. But basically, it's essentially a real-time display for the clubs as to who's packed in what order and by which club. 

And then, more importantly, where are we in terms of who's next? So hey, I've got four more picks to go before my pick is made. We also drive a teleprompter. So in addition to IBIS managing all the outputs to social media, to various club outputs as well, one of the other things it does is, as you know, like if you watch the NFL draft, the Commissioner Goodell comes up with a handwritten index card that says, "with the 10th pick in this draft," we actually automated that process. 

So there's actually-- in the podium, there's an embedded monitor with that information that IBIS is actually generating and pushing out to him so that he can read it without needing to bring up a card or anything like that. So all of that is part of this big IBIS system. And all the practices and the dry runs and the mock drafts we did made for a very smooth process. You know, it's one of those, the adage that perfect practice makes perfect, not just practice, but perfect practice. So we kept drilling ourselves till it went well, and then that caused us to have success come the draft day. 

MARK: Yeah, I mean, it's fantastic to see that everything, obviously, went smoothly. And as you mentioned, there's a tremendous amount of different pieces that are all kind of needing to depend on this system running. And any one of those systems not working well could be a big problem, right? And not having that information could be a big problem for certain clubs or for certain groups of folks. 

So it's really kind of cool to see that everything went well. We talked a little bit about the lessons that y'all learned, especially when it came to practicing this and putting it through a bunch of different tests to make sure that it stayed up and that it was stable. What types of lessons did y'all and the technical teams learn as you were implementing these practices and as you were kind of architecting this out? 

JOANNE: We learned, certainly, that we could trust the scaling of Kubernetes, which was really nice to be able to see. I think also we've learned, certainly over the last two years by necessity, how to be a much more distributed draft and how to do it, both when we're all dispersed and when certain bunches of us are in a room coordinating through a mission control system. So that was really good to see. 

The other thing that we've learned over the years is there's no such thing as too much observability being able to see the performance, see how much memory we're using, see how much capacity we're using for the CPU, see is our error budget being managed well, are we getting good latency from our calls. Or the queues and the topics working correctly, I think any place that we can put observability has been a win for us. So that's something I think we've learned. 

PERRY: I think another thing we've learned too is that there are other stakeholders that are in parts of these events that we learned to make sure we're in the room, or we had ready access to. So for example, our network infrastructure team, to make sure that if we were having any internal networking errors, we could turn to our right, and they were right there to help us. 

Or infosec-- we do a lot of monitoring of our inbound traffic across mlb.com as well as the entirety of MLB. So if there is any kind of an issue that we need to address, we can go to our infosec folks and make sure that they're addressing anything that we see or that they say, hey, there's something going on. So to be alert, we may see a slowdown or whatever. 

But having them in the room with direct access, huge benefit. Last year, we did it over Zoom and had a coordinated Zoom call. But two years ago, we kind of had them on call as opposed to in the room. And we found, as we've learned, having them directly here for us, especially for this kind of a jewel event, is critical. 

JOANNE: And we had Google hooked up into that as well. We should probably let you know that, that they were also online very much with us. And it was great to have them nearby. Everything worked pretty well as far as we were concerned with our Kubernetes cluster and everything attached to that, but it was definitely good to have Google available in a pinch if we really needed any assistance there. 

MARK: Yeah, one of the things we've actually talked about a number of times on this podcast , and we've talked with different companies about how they actually execute large-scale events-- the draft is probably one of the premier examples of a large-scale event-- but is really having all these different technical teams stay connected and stay up to date with, obviously, what's going on, but also kind of how their team plays into the bigger picture. 

Is that something that MLB has always done, has that kind of changed over time? And we mentioned a little bit about COVID and what kind of impact that had. How did that kind of play out as you were planning out these large events? 

JOANNE: One of the things that COVID taught us is how to kind of connect on purpose to each other, really make communication every bit as much of the job, probably more so, than even the technical part. So when it came to connecting again this year, it made it that much easier. 

PERRY: If we had to stop and think about it, when everybody is in the same office, it is easy to just pick up the phone and call somebody, and you hope you get them. With Slack and other messaging platforms, you can sort of get to people easy, but you can't always guarantee a response. 

So having them co-located is obviously the best. Either physically or live in a Zoom link, at least have somebody who can reach to the extended team that's been involved. And we've grown over time too. I mean, in the past five, 10 years, teams typically had full control of their entire domain. 

Now, in these large, distributed systems, there are a lot more cross functional aspects to these larger systems that didn't exist five years ago. And you really need to consider those cross-functional aspects-- dependent teams, dependent systems, that you need to make sure you have thought through and have on board ready to support you because our first draft was at 7:00 PM Eastern, right? 

Most people in the East Coast here in New York, 7:00 PM, it's dinnertime, I'm settling down with the family and whatnot. Now, getting them to be aware that, hey, you may need to time shift your day for this particular jewel event, absolutely critical so that everyone was on high alert so that we can make sure, you know, that goes all the way from our compute platform in Google Cloud all the way to our internal team's networking and infosec as I mentioned before. 

MARK: Yeah, I mean, the human element is obviously critical to executing these large-scale events. The other point that you made earlier, Joanne, is about observability. And so I would love to hear a little bit more about how that focus for observability. I mean, it sounds like it went successful, right, which is a good thing, but how that focus came to be and kind of what the result of that was. 

JOANNE: We're going to have to do a shout-out for the observability team at baseball. I know Riley Burton's had a lot to do with that here. They've built a nice infrastructure for us to collect traces, to collect logs, puts it together into some nice charts that we can look at so we can tell right away if trends are going down or up in a way that they shouldn't be. 

We also have a pretty well-stocked alerting system that tells us if-- we have a consistent ping that basically happens that checks whether you can even log into our system or whether our back-end services are down, and we're constantly checking those as well. So we have a lot of eyes, both artificial and real eyes, on the system at all times. 

You really, as a person physically, can't be looking everywhere at once. So it's really good to have these automated systems that are looking at our systems at all times to make sure that it's healthy and that we're staying healthy throughout the draft and throughout all the other things that we have to do with IBIS. 

PERRY: I agree with you, Joanne. And a shout out goes to a lot of our infrastructure teams. Our corporate infrastructure team does a lot of heavy lifting in terms of instrumenting and getting the metrics so that they can be observable. Observability is easy once you start surfacing the metrics. 

The hard part is surfacing the metrics and making sure they're exposed so they can be monitored. And so our corporate infrastructure team did a lot of heavy lifting in terms of trying to standardize that across all our platforms so that we could have a standardized observability platform rather than a point solution, which is what a lot of people do, you know, that first step, every system, you know, they determine, ah, it's critical, nah, it's not. Then they do point solutions. We now have a platform that we can put everything on, so that whether it's critical or not, it's always going to be critical for somebody that it's up and running. Otherwise we wouldn't have it there to begin with. 

MARK: Yeah, I'd almost love to hear more details on what that journey looked like and what were the choices that went into creating a unified platform for being able to very effectively raise any information to the critical folks as soon as possible. 

JOANNE: That's pretty much it. We could probably get you in touch with our infrastructure teams, so-- 

MARK: That would be a good follow-up conversation, for sure. 

PERRY: Yeah, absolutely. So from there, we've used tools like Grafana, we use Pingdom. We've got some other tooling that's in place that runs seamlessly on the Google Cloud platform that enables us to ramp up these solutions very quickly and easily. So adding a new product into that space is very simple and is not a heavy lift for us at all. 

So this is a major event for y'all. And so for other companies that are looking at kind of similar scale or kind of taking a platform that existed on prem and then moving it to the cloud, what's some of the advice that you think is most critical? I think we've talked a little bit about observability being a key part of it. But what other advice can you offer to folks who might be taking a similar journey? 

JOANNE: I think, from my perspective, is start with a smaller project. And we did. We didn't do IBIS first. We did some other applications first that were smaller in scope and scale until we got good at doing that. That's when we started the bigger things like IBIS. 

But definitely start with your smaller things. Get used to understanding how containers work, how Docker works, how Kubernetes works, before you dive in wholesale. Other than that, I think keep learning, even after you've put it out there because things change rapidly in this business. 

PERRY: And I think that's where testing, specifically automated testing, helps a lot because as you make changes to these systems, whether it's just a lift and shift or you've made a change to how it's architected, having automated tests that be able to verify coverage and that you are sure you're getting the same results out at the end without manual testing is absolutely key. 

So you know, the more automated tests you have, the easier it will be because you will find fewer things. As part of a regression test, sometimes you come up with, wow, we haven't seen that issue before, but it turns out it was failing in on-prem system too, you just never caught it. But now that it's in the cloud, you're starting to see it. 

So, like for like, the bug was still there. And people say, oh, well, that was part of the cloud migration. No, it wasn't. It was actually a latent defect you caught from earlier. So having that automated testing, you can design quality in as opposed to test it after the fact is important. 

MARK: So for the folks who want to learn more about IBIS specifically, are there any places where we can kind of include a link in the show notes for them to learn more? 

PERRY: Absolutely, so there's actually an interesting article that ran in FanGraphs a few years ago about the IBIS system and what it does for Major League Baseball. Essentially, it is the system of record for all MLB players and amateur players regarding their status in our pipeline. 

So as I like to call it, womb to tomb tracking of a player through their life, including when they leave MLB and come back as a manager or a coach. We'll put up the FanGraphs blog on it, but it's a really good in depth discussion about what IBIS does in addition to the draft. And as well, if you go onto mlb.com, there's a whole section of the website that's dedicated to the draft and the MLB Pipeline, which is new amateurs that are coming in for next year. And that all feeds into this draft event that happens every summer. 

MARK: And then, of course, there will be a draft next year. Curious if there's any thoughts y'all have based on how this year went-- sounds like pretty smoothly-- for changes that are going to need to be implemented before next year. I'm sure it's obviously hard to predict the future. But I'm sure there's some things that have come up. 

PERRY: There are some process changes. We'll implement those as new business rules come in. People may not know there is a collective bargaining agreement process that's underway right now between the Major League Baseball and the Players Association. So a result of those negotiations may be further changes that we need to make to the draft and some of the business rules around it. 

But we likely will be a remote event, given how exciting this year's event was in Colorado. Speculating pretty loosely here that I wouldn't be surprised if the event occurs in Los Angeles. It seems like a pretty nice place to go. But also, just in terms of the gravitas in terms of the sports landscape in Los Angeles will make it a fun place to do that event. So we're looking forward to that. 

MARK: All right, well, we're just about out of time. But before we wrap things up, is there anything else that we didn't get a chance to mention that y'all think would be worth calling out? 

PERRY: Absolutely. So as you know, it's nearing the end of the regular season. We've got the postseason up on the way. Teams are positioning to try and get into the playoffs. We've got the playoffs all throughout October. Hopefully your team is still in it in either the wild-card race or in the division races. And we'll have some exciting baseball to observe right up until the end of the World Series at the end of October. 

JOANNE: I think Perry got it there. The postseason is going to be big, and you should tune in. 

PERRY: So one other of our key partners in all this and make us better than we really are is our enterprise products team. They do a great job interfacing with our users and the clubs to make sure that what we implement meets their requirements the first time and have really done a great job specifying cool, slick user interfaces and have really excelled in designing what I consider a best-in-class user experience. 

JOANNE: They drive all the requirements to what we're going to put on the screen and drive how the draft is going to work. So yeah, definitely kudos to the enterprise product group. So yeah, I also want to point out that our business partner also at LBI Software out on Long Island, they've also been a partner throughout the history of IBIS and have done a great job in also helping us out to code the system and test it. They've done a great job with IBIS and many other projects that we have in-house. 

PERRY: Yeah, having a trusted development partner has been invaluable to us to be able to ramp at scale. But also from a business knowledge and expertise and bringing that knowledge in-house has been a key part to our success to be able to deliver systems that meet all the requirements and the non-documented requirements because they know how the business works. 

MARK: And I think that's a great example of, there's kind of the tired old adage of, it takes a village. But it really does take a whole bunch of folks from MLB, from MLB's partners, from all the folks that are using the software, and Google being involved as well, right? Like all of these teams working together is really what makes this such a successful event. 

PERRY: Absolutely. I mean, a size of IBIS is a couple million lines of code, and it is the tip of the iceberg that the user sees. There's a lot that happens underneath. For example, making it so that a GM can approve a transaction on his cell phone. That's something that five years ago, people were like, we really hope we can do that. 

Well, we were able to deliver that. Those kind of experiences are not easy if you don't think about them up front and design them into what you're building as opposed to trying to make it work that way after the fact. 

MARK: Awesome. Well, Perry and Joanne, thank you so much for coming on. Definitely super exciting to hear about how this system worked and, of course, super excited to see how it evolves over time. 

PERRY: Great. Thanks so much for having us. 

JOANNE: Thank you so much, Mark. 

MARK: We talk about a lot of different things on this podcast. It's always great to get into the concrete specifics and say, hey, here's an example of an actual, real event that a lot of people care about. What does the technology look like to support something like that? So Brian, it's been a little bit since we chatted. What have you been working on recently? 

BRIAN: Yeah, I think the main visible thing is Carter and I's episode series about virtual machines. We're now up to five episodes out, so there is a link to the playlist in the notes. And it's "VMS End to End." But I'm just really excited about it because it's kind of podcast-y style. So if you're into this, then you might enjoy it. 

But it's like, Carter and I just talking about VMs. And, you know, he starts as a skeptic, like I do a lot of containers, why do I need to know about VMs? And I try to convince him that they're worth his time. So if that sounds interesting or if you're trying to convince somebody else, please take a look. 

MARK: I kind of think we should do a podcast episode on it. 

BRIAN: Well, maybe we should include those. 

MARK: Well, hey, let's put it together. I mean, what else are we on this podcast for? And of course, one of the big things I would be remiss not to mention is that next week is Google Cloud Next, so we're going to have a bunch of conversation next week around that. There's a whole bunch of announcements going out now, so it's going to be hopefully not as long as last year's. Last year's was, I think, nine weeks, and this year, it's just going to be one week. 

BRIAN: Good. 

MARK: But there's going to be a bunch of cool announcements, and we're going to have a great conversation next week. So stay tuned for that. 

BRIAN: That's next week, right? So-- 

MARK: That's next week. 

BRIAN: Good. 

MARK: Next, next week. Actually, it depends on when they listen to this podcast. 

BRIAN: Oh, no, it's either next week or next, next, next, next, some number of next weeks. 

MARK: It could be any number of weeks. That's the beauty of audio. 

BRIAN: It's the play on words that never stops giving. Well, next is next. 

MARK: Yes. 

BRIAN: Please go take a look. 

MARK: Stay tuned and/or revisit the past to enjoy some quality next content. And of course-- 

BRIAN: There we go. 

MARK: --thank you all for listening. We'll see you all next week. 

BRIAN: See you next time. 

NARRATOR: Major League Baseball trademarks used with permission. 

[UPBEAT MUSIC]