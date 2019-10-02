+++
audioDuration = "00:37:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.196.mp3"
audioSize = 54187919
categories = ["Gaming", "Kubernetes"]
date = "2019-09-25"
description = "Mark Mandel and Jon Foust return this week to host Jesse Houston, CEO of Phoenix Labs."
draft = false
episodeNumber = 196
hosts = ["Mark Mandel", "Jon Foust"]
title = "Phoenix Labs with Jesse Houston"
image="/post/episode-196-phoenix-labs-with-jesse-houston/images/hero/hero-EP-196.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/d9690f/episode_196_phoenix_labs_with_jesse_houston/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mandel](https://twitter.com/Neurotic) and [Jon Foust](https://twitter.com/syntxerror1) return this week to host [Jesse Houston](https://twitter.com/gtez), CEO of Phoenix Labs. Jesse goes into detail about their online, multiplayer game Dauntless, a hunting action game that brings friends together from every platform to fight giant monsters. Users can even switch platforms, say from Xbox to Playstation, and pick up right where they left off. 

Later in the show, Jesse describes the hurdles of building such a huge game and how Phoenix Labs overcame them. Late nights and holiday hours helped them create "no downtime deploys", so users can continue to play even as the game updates. Because big projects sometimes come with big problems, Jesse also emphasized the importance of developing crisis management skills to help get through tough times. We talk more specifically about what it takes to build and run Dauntless, from GCP products such as GKE, Bigtable, and BigQuery, to tricks with scaling and management. In the future, Dauntless will be available on the Switch, new expansions will be released, and more.

<!--more-->

##### Jesse Houston

[Jesse Houston](https://twitter.com/gtez) is a games industry veteran with over 18 years experience in the gaming space. Houston fell in love with games at an early age and found his footing in the games industry by applying to a QA position in a local paper. Previously, Houston has held lead producer roles at both Riot Games on League of Legends, and BioWare on the Mass Effect series. He also served as Production Director at Ubisoft, overseeing Technical Project Management, Pipeline Planning, Development and Design, among other responsibilities. Houston formed Phoenix Labs with Sean Bender and Robin Mayne to create deep multiplayer games that bring players together.

##### Cool things of the week

* Virtual display devices for Compute Engine are now GA [blog](https://cloud.google.com/blog/products/compute/virtual-display-devices-for-compute-engine-now-ga)
* Container-native load balancing on GKE are now GA [blog](https://cloud.google.com/blog/products/containers-kubernetes/container-native-load-balancing-on-gke-now-generally-available)
* How to deploy a Windows container on Google Compute Engine [blog](https://cloud.google.com/blog/products/containers-kubernetes/how-to-deploy-a-windows-container-on-google-compute-engine)
* Agones 1.0 [site](https://agones.dev/site/blog/2019/09/16/1.0.0-a-huge-milestone/)

##### Interview

* Phoenix Labs [site](https://phxlabs.ca)
* Dauntless [site](https://playdauntless.com/landing/)
* Dauntless Updates [site](https://playdauntless.com/roadmap/)
* Dauntless on Twitter [twitter](https://twitter.com/PlayDauntless)
* Cloud Bigtable [site](https://cloud.google.com/bigtable/)
* Kubernetes [site](https://kubernetes.io)
* BigQuery [site](https://cloud.google.com/bigquery/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Redis [site](https://redis.io)
* Introducing Google Customer Reliability Engineering [blog](https://cloud.google.com/blog/products/gcp/introducing-a-new-era-of-customer-support-google-customer-reliability-engineering)
* Cloud SQL [site](https://cloud.google.com/sql/)

##### Question of the week

[What is the difference between Premium vs Standard network?](https://cloud.google.com/network-tiers/)

##### Where can you find us next?

Jesse will be speaking at the [Montreal International Game Summit](https://megamigs.com/en/migs-home/). You can see Phoenix Labs at many other gaming conferences, including [Pax](https://www.paxsite.com), [TwitchCon](https://www.twitchcon.com), and [GDC](https://www.gdconf.com).

Mark is taking some vacation time, then he'll be at [Kubecon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/).

Jon will also be at [Kubecon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/), as well as taking some personal time to attend several weddings.

##### Sound Effect Attribution

* "Fantasy Orchestra" by BigManJoe of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to Episode 196 of the weekly Google Cloud Platform Podcast. I am Jon, and I'm here with my colleague, Mark. Hey, Mark. How's it going?" >}}

MARK: I'm all right. How are you doing, Jon? 

JON: Pretty good. We had a pretty long series of trips together. 

MARK: Yeah. 

JON: And it's good to wind down and just get back to our listeners. 

MARK: Yeah. Back in San Francisco for a couple of weeks. And then I'm going on vacation. 

JON: Yeah. 

[LAUGHTER] 

MARK: Excellent. So who are we talking to today? 

JON: So yeah, we're going to talk to Jesse Houston, CEO and co-founder of Phoenix Labs. And if you guys don't know who Phoenix Labs, it is, they made several games, one of them being very successful, being "Dauntless." And I've played it quite a bit and it's pretty cool. 

MARK: It's a pretty cool game. Yeah, awesome. And then after that, we've got our Question of the Week, as per usual. We're asking me what the difference is between premium versus standard network. Why would I use one over the other? 

JON: Sounds good. So let's get into our Cool Things of the Week. 

MARK: Let's do that. 

[MUSIC PLAYING] 

JON: Our first Cool Thing of the Week is Virtual Displays for Compute Engine in now GA. So what that means is when you remote into your actual server, your Windows instance, you can actually create virtual displays specifically for your VM that's running its own separate CPU. Which is awesome, because you don't have to allocate GPUs for it. So that means that this can be less expensive. 

MARK: Very nice. Awesome. Speaking of going GA, cloud-native load balancing on GKE is now generally available. So if you're not familiar with that, basically you want to do load balancing to your containers running on top of GKE. This is a more efficient way of doing so. 

So this is basically what they call network endpoint group load balancing. Basically it means that your traffic is going from your load balancer directly to your container, rather than meandering its way around your cluster to eventually end up at a pod. We'll have a link in the show notes to the blog post. They have a great diagram explaining this really well. But yeah, if want to take it for a spin, it's now GA. 

JON: That's awesome. Our next Cool Thing comes from one of our fellow developer advocates, Mete Atamel. He has written a blog post on running a Windows container app on GCE. 

MARK: Oh, nice. 

JON: So it's pretty awesome, because if you're getting started running containers and dealing with containers in Docker, this helps you run a Windows instance. And Mete really focuses and targets the .NET community. So he goes through all of the steps of creating a container app and then building a Docker image and then deploying on GKE. So it's awesome. 

MARK: Very nice. Very cool. And last but not least is a special plug out to-- well, essentially myself and the rest the team that works on the Agones project, of course. 

So Agones is the open-source platform for running multiplayer game servers on top of Kubernetes. You may have heard me mention it once or twice. We went 1.0 as of about a week ago. 

JON: Congrats. 

MARK: So it's a really big milestone, which is super cool. So we now have a stable API service and we're ready for production workloads. And we're definitely picking up a lot more people using it in production. So very, very exciting stuff for Google Cloud for Games. 

JON: Awesome. And congratulations. 

MARK: Why, thank you very much. Well, Jon, why don't we go have a chat with Jesse, and talk all about Phoenix Labs and "Dauntless"? 

[MUSIC PLAYING] 

So this week, we are joined by Jesse Huston, CEO and co-founder of Phoenix Labs. He is one of the people behind the hot new game-- well, I don't if it's new, actually. That's a good topic-- "Dauntless," which has been doing very well lately. But Jesse, how are you doing? 

JESSE: I am doing really well. Thanks, Mark. 

MARK: Excellent. Excellent. So for people who aren't familiar with you or Phoenix Labs, why don't you tell us a little bit about yourself and what you do? 

JESSE: Yeah, so you gave me the best introduction that I think I've ever had. So yeah, I started Phoenix Labs about five years ago now. We have been basically, from the beginning, making "Dauntless." 

"Dauntless" has been out in its most recent form. It's in a wide-release, full-access form, since May. So we launched on May 21. Prior to that, we did various rounds of betas from an open beta last year, and then the year prior to that, we had a closed beta. So "Dauntless" has actually been around for about three years, just in various soft-launched forms. 

Just to give you an idea of what "Dauntless" is, because I always speak like everybody knows. So it's called a hunting action game. It's about you and your friends getting together on any platform, coming together, fighting big monsters that we call behemoths. And then you collect their bits and you go back into the city and you hang out and you forge new weapons and armor. And you go back and kill bigger, scarier-- these big boss encounters. 

JON: I remember the open beta when it was at Google Cloud Next last year. That was my first Next. So I do remember the beta. You did mention that you can pretty much play with your friends on any platform. So I'm assuming that's cross-platform. 

JESSE: Yeah. 

JON: Right? 

JESSE: Yeah. So we're the third game ever to allow what we call the "one 'Dauntless' experience." So the idea of, if you're on PC and I'm on Xbox and Mark is on PS4, we could all play together. And that you guys could switch consoles and it would be totally just fine. Where it's a pretty crazy thing, but we love the fact that not only can we play together, but we can be on each others' trends lists. And we can swap back and forth and that kind of stuff. 

MARK: Just to be clear, I'm a PC gamer. 

JESSE: Good. 

[LAUGHTER] 

MARK: Not to disparage other people playing console. I just-- I can't play games with a controller. I can't do it. 

JESSE: It's funny. I actually play "Dauntless" with a controller on PC. 

MARK: Oh, interesting. Interesting. There are certain types of games like that, I just end up looking at the sky or the floor, and that's just my life. 

JESSE: [LAUGHS] 

JON: Oh, totally. 

MARK: Cool. So since-- you said you've been running "Dauntless" for over three years. It's an online multiplayer game, so-- 

JESSE: Yeah. 

MARK: Us in the industry-- oh, god. I don't say that. It's awful. But we refer to that as a live service online game. It's an ongoing game. 

What's that like? Can you tell us a little bit about, what is a live service game? And what is the experience of running it like? 

JESSE: We knew from the get-go that we wanted to be a live service game. We call it a live service game, too. And so literally from the first line of code written, or the first submit, anyways, under Perforce, had to come with a deployment step. And so we started running dedicated servers like four years ago. 

Initially, it was a total mess. We do these things called holiday builds, or we used to do them when we were still in a really closed state where we try and get everything in just before the holidays. And then while we did the studio closure, everybody would play. And I can remember in, I think it was 2015's holiday build, myself and the technical director basically did 12-hour shifts through the entire holiday-- 

JON: Oh, my god. 

JESSE: --writing Python scripts, just to keep the game from falling over with, like, 150 people playing. Not at the same time-- period. Like-- 

MARK: Right. 

[LAUGHTER] 

JESSE: There would be, like, 10 people playing and we'd have to do manual log rotations and all this other stuff. That kind of experience really taught us all of the things that we needed progressively as we launched. And so there's a lot of stuff on May 21 that went wrong, but a lot of stuff that actually went really right, because we had been doing it progressively bigger. 

And having never turned the servers off in four years really helps just get used to it. A lot of companies that go into the live environment tend to have to all of a sudden slow down, because they're like, oh, what is updating? Whereas it's no big deal. 

In the last two weeks, we've patched five times, and most players only saw one patch, for example. A lot of our stuff doesn't need to take the game servers down all the time. And it's been a great learning experience either way. 

JON: That's the best way to go. Not having to actually turn off your game in order to get a patch. It doesn't really mean any downtime. Because I hate those games where you have updates. 

JESSE: Yep. 

JON: You have to wait three hours. And I'm like, now what I do with my life? 

JESSE: It's been really interesting, that experience, by the way. Xbox and PlayStation don't have tools to support that kind of experience of the no-downtime deploys. And so we've gotten the opportunity to work with them and do a little bit of teaching on our own, on what that experience can feel like, and that it's OK, and that that doesn't mean that there's going to be rampant hacking or some sort of other vulnerabilities. Downtiming and deploying don't need to be the same thing. And it's actually been a really cool experience, getting to of introduce gamers on these platforms to that experience. 

JON: Let's go back a little bit and talk about going from 150 gamers to a full launch. And let's talk about scaling. Can you tell us a little bit how your team went about scaling this to support a full-time launch? And then you've gone from 150 to God knows how many players you have now. 

JESSE: Initially when we did everything, it was all-- everything was super manual. So we would deploy a VM, manually upload a build. And initially, it was on Windows boxes only. And it was all, put your IPs in by hand and that kind of stuff. 

Then we basically just kept iterating to add more and more automation through the processes. And then as you're flexing that and as you're adding more players, stuff just breaks. And so a lot of our scaling efforts were around just fixing what was broken and making sure that we're then able to see into the future far enough that we could see the next most vulnerable thing. 

More recently, SQL databases-- there was a bunch of-- our inventory was on SQL and we had millions and millions of players showing up every day. And just the transaction rates were just way too high for whatever SQL was ever going to be able to handle, as so we were able to move over to Bigtable. And we had to do that in a no-downtime world as well, so that was super exciting. 

Having to write basically a service that would check Bigtable. And if it wasn't there, then go get it from SQL. And then load it into Bigtable and then give the response back to players and that kind of stuff. And so through that whole experience, though, we've basically been like, OK, well, that's the next thing that's going to fall over. Let's go and harden it or re-architect it or what have you. 

And we've gone from hardcore VM-based, call it like 2014-2015 thought processes on how stateful game servers should run to-- almost everything now runs in Kubernetes. We were able to basically load a bunch of stateful services into that, and now all of our game servers, for example, are in [INAUDIBLE]. 

And that's been hugely helpful, because we don't have to worry about things like VM management nearly as much. It's just like, OK, cool. Fire up a pod. Put some players on it. If the pod has a problem, no big deal. It can die and it doesn't take down dozens and dozens of players. It only affects four. 

Whereas historically, if a VM died, which would happen once or twice a day, it could take down thousands of players. And so we don't have that problem anymore. So we've been super lucky that we've just been able to iterate that way. 

MARK: Nice. Can you give us a sense of-- yeah, Jon mentioned scale. Can you share numbers about how big a player base you have? Or at least something general? 

JESSE: Yeah. So I think we've announced it, so hopefully we have. Otherwise my PR guy is going to come at me with a lightning bolt. But we've got about 15 million players who are actively playing "Dauntless." 

A great group of folks, and that's across the three platforms. And we're moving into Switch next, which we're really excited about all those new players coming in. And then mobile in the next year or so. 

MARK: Fantastic. 

JON: Yeah, I'm actually getting it on Switch, so-- 

JESSE: Oh, dude. It's so good. A surprisingly great experience. 

MARK: So yeah, you've mentioned dedicated game servers. 

JESSE: Mm-hmm. 

MARK: Do you have a variety of different backend services, or what does that architecture look like, a little bit? 

JESSE: So it's entirely inside of GCP, and we basically have-- when a user logs in, there's a bunch of various accommodation of both REST-based and gRPC calls that happen to various services. And those are a combination of Java and Python microservices that live in [INAUDIBLE]. And then once you've gone through all that stuff, we drop you onto a big, heavy C++ based game server that manages most of what you experience as a player from what the behemoth is doing and where you're at-- what the city looks like, that kind of thing. 

And so each of those pods will have anywhere from four to 50 players on them at any given time. And there are two big ones. There's the concept of a city and then an island server, and they're different, because one requires a behemoth and the other one requires lots of players. And so we keep them somewhat separate. 

And then the other is this cloud of other services around it, from inventory to store management to persistent data storage to telemetry and analytics and stuff like that. And largely, we shim a lot of calls from basically the client and the servers. And we farm it out to other Google services from BigQuery and that kind of stuff. 

JON: I would imagine that there has to be some type of reasoning for taking this type of approach and going for using these backend services. So I'm not sure if you want to share your secret sauce as to why you made these design choices. 

JESSE: We're pretty lucky this isn't the first time that we have built a scalable game server, because we've got a lot of folks, from myself from Riot. We've got some folks from EA. We got some folks from PopCap. 

And so we brought together a bunch of learnings from previous, call it big AAA experiences. And as we thought about how we've historically built stuff, there's always those lists you make at the end of any given product cycle where you're like, man, I wish-- next time I would totally do it like this. And in the forefront of that has always been horizontal scaling. 

If I look back to some of my previous games, there's always that one service that's super monolithic. And we try and just throw more RAM at it or more CPUs. And there's just no way, you know. 

MARK: I've heard this story a few times before. 

[LAUGHTER] 

JESSE: Yeah, right? And we've done that, too. Like-- 

MARK: Just rewrite it in C++. It's fine. 

JESSE: Yeah, exactly. There's a couple of Redis boxes lying around in our platform still that are very warm at any given time. And that's not a knock on Redis, by the way. Redis is amazing and has lots of good uses. We've just been like, ah, it just scales infinitely on that one thread. [LAUGHS] 

And so as we came together and architected it, we knew that we wanted to get a lot more horizontal scaling in. And so we just keep looking for that. And also, if you think back to the 2012 days and through 2015, the industry was still very much nascent in terms of cloud hosting. It was still considered a bad idea. And especially on stuff like the idea of DevOps. 

I'm trying to remember when the Phoenix project was actually written. But the idea of DevOps, for example, was completely unknown. And things like continuous delivery in terms of a live product service were still only things that Google and Facebook could do. And as an indie studio, there's no way. 

And we've been really lucky in that we're now at a time in the industry where a lot of those processes are well thought through, and they make sense in core product loops. And players are also willing to get into the mindset of, oh, if I give feedback today, tomorrow I might see that change, or even faster. So we did a big deploy yesterday. 

And one of the players was like, hey, this one quest line doesn't unlock this thing. And 30 minutes later, we deployed the fix. And he was like, oh, wow. That's bloody amazing. And it's like, no, that's the cool part of what 2019 can provide. 

MARK: Nice. That's a particular interest of my personally. You chose Kubernetes and GKE, specifically even for running dedicated game servers, which is not publicly something that people talk about. Why did you make that decision? 

JESSE: (LAUGHING) If I'm being honest with you, it's because I'm cheap. 

MARK: That's not a bad reason. 

[LAUGHTER] 

JESSE: One of the big problems that come with game server hosting is the buffer warmth. There's all of the game servers that you've got in use, and then stuff that's currently turned off, and then stuff that's not in use but has to be turned on to handle any kind of matchmaking spikes that happen. And my historical life has taught me that if I'm doing this in stack and rack land, I have to be able to have enough capacity for my spikes, and I have to leave them turned on all the time, and I'm paying the bills on all of these boxes. 

And if I'm living in VM land, VMs can take-- initially, a Windows VM could take up to two or three minutes to provision. And so we always had to have, call it five minutes of buffer at any given time. And if you think about "Dauntless," "Dauntless'" experience can be as low as three-minute game sessions, right? So waiting around for five minutes to have capacity is really bad, so we have to keep quite a bit more buffer than that. 

And things like garbage collection, like services that we would install in these boxes can take a while, like just cleaning up logs and getting replays off the boxes and all this other stuff, and making sure everything's in the same state. Those processes could take upwards of five minutes as well. And so we'd have to keep, call it 10% or 15% extra capacity online at any given time. 

Whereas in GKE, I basically can keep 1% extra capacity online. I just need to make sure that there are no completely full boxes at all. And given how rapid the pods come on and offline, there's this nice automatic load balancing that ends up happening. And so actually, I just-- I keep a tiny little bit of buffer. 

And it's also super nice that it spills over like, so if we get like a crazy spike-- I don't know. If an outage happens, for example, in one region, no big deal. Players can spill over. We can very, very, very, very quickly spin up capacity elsewhere. And there can be a really nice, tight integration with our matchmaker so that players don't even notice. 

JON: Awesome. So I'm curious, because when "Dauntless" launched, I'm assuming that-- now we're in 2019 and everything's written in the cloud. What is the trickiest part of scaling the game? I've seen launches go off and then immediately servers went down because they weren't anticipating those numbers. 

JESSE: Oh, that happened with us. 

MARK: Yes. Talk us through it. 

JESSE: Yeah, we had all sorts of fun, exciting times. So we knew a lot more players are going to show up. You owned consoles. There's a validation moment that happens with all of this PR rolling up. We've got all these influencers. So we know that there's a bunch more players showing up. 

And the interesting problem that games have that I love, but I hate is that there's not really a nice, easy way of load testing without real humans. And so finding a quarter million humans or whatever to come and log into a game before it's launched is literally impossible. And so we needed to basically think about the new way. 

And so we did all of the usual stuff with load testing. Every service has a locus thing which just like blops the living heck out of every endpoint. And we saw what we thought our load could be, but that's still not representative. And so we were able to actually basically analyze what real players did in the closed beta, and use that data to inform bots. 

And then the cool parts about Kubernetes is we were then able to spin up, literally, hundreds of thousands of bots to play "Dauntless," headless. They were still real accounts. Just they didn't have graphics. And they knew what to do, because they represented real-life players. And so we were able to just spin up thousands and thousands and thousands of them. 

And so that actually got us a ton of really good information, and then it started shutting off our video game. And we couldn't figure out why. And so the Thursday before launch, every time that we did a bot test that had more than 40,000 people playing in it, it would shut off Prod. 

MARK: Ouch. 

JESSE: We'd be running it in a different environment, and then all of a sudden, Prod would shut off, and we couldn't figure out why. Turns out, by the way, that when you write a botnet, anti-botnet protections that you put in place work. 

MARK: Oh. 

[LAUGHTER] 

And a whole bunch of gameplayers looks like a botnet. 

JESSE: Yeah, exactly. So that took a long time for us to figure out what was wrong. These groups that you work with to write these protections-- part of how they do it is they cut off all communication. 

Yeah, so we basically DDoS'ed ourselves into submission, right through the day before launch. Finally got that fixed. And then the fact is, the play patterns changed, and a lot more people showed up than we ever expected. Probably three or four times more folks showed up than any of our expectations. 

MARK: Congratulations. 

JON: [LAUGHS] 

JESSE: Thank you. Yeah. Great first-world problem to have, right? But we're really, really, really, really concerned with delivering a great experience. And so a lot of what we were trying to do at that point then was trying to get ourselves back up and running as fast as possible, setting up things like Bigtable and moving a lot of our databases over to Bigtable. 

And as well, trying to communicate effectively, and then inching up. Cool. Well, what if we let 10,000 more players in? All right, cool. 

We inch that up. OK, what's the next thing that starts to become unstable? The launch week between Tuesday to Tuesday, we did 1,712 deploys. 

MARK: Wow. I thought you were so-- I was watching this from the sidelines as a fan of GCP and games. And I thought that you did something I thought was actually really cool in terms of like, you captured players at certain points, and then only allowed certain numbers in and had a queuing system. 

JESSE: Yeah. 

MARK: That was something I don't think I've seen many other people do, and I thought that was really interesting. Can you talk us through that? 

JESSE: Some of the other games that I've worked on in the past, what ends up happening when the services get full is they just kind of keep layering them in there and having a semi-degraded service until the whole thing cascades over. And so our thought process was, what if there was a very thin version of the game that spoke just enough of the language of the servers to basically leave them in a queue? And have enough call homes that scaled wildly until like-- and then what if we made it so that could take 100 times our wildest dreams of players? 

The queue itself, for example, is-- coming back to Redis, it was basically a little Python app that had like 500 lines of code that just touched a Redis box and had-- whenever you got put in a queue, depending on where you are in the queue, it would basically say to the client, hey, cool. Come check back in in x number of seconds. Here's where you are in line. 

Because at one point, I think we have 300,000 players in queue. And we were accepting, like, 50 players a second or something like that into the game. And so that queue was quite long. And just the act of checking the queue would have taken down the service all by itself. And so we actually had to write in this graceful fall-off or whatever, so that it would only check back in once every three or four minutes when you were more than an hour in queue and that kind of thing. 

The nice thing about that, too, is we could also overload the messages that the queue would tell players. If something was really going wrong, we could change the text in that box and say, hey, we're having this other problem. So queue times are going to be even longer and that kind of thing. And that's been really, really helpful. 

JON: Oh, nice. 

JESSE: And then anybody that actually made it through the queue got a reward-- these little titles that are in your game. So we also recorded all the players who sat in the queue and made it through. And so the message that you would get, like the error code, was called Queen Bee-- queue blocked. And so the title that you would get in the game is the Slayer of the Queen. So-- 

JON: That's awesome. So I could imagine that given all of the things you had to go through at launch, that there had to be some people that tried to reach out on our end to actually help you with the launch and any type of other integration that you had to do. So I'm curious about how our professional teams helped you out. And I'm not sure exactly which teams you actually met with, but-- 

JESSE: Oh. 

JON: Hopefully, you could speak to that just a bit. 

JESSE: Yeah, for sure. So we've had a great relationship with the GCP folks since open beta launch. Actually, our account manager was there when I pushed the big button on open beta 18 months ago or whatever. And he actually brought the champagne. 

JON: [LAUGHS] 

JESSE: And so we basically got the opportunity to work with the CRE team and the GCP technical account managers and the service account managers and stuff like that through the build-up to launch. And that gave us a lot of insight of what could fall over and what couldn't. The weekend before launch, when we were running into the, we don't know why our game isn't turning on, because we're DDoS'ing ourselves, for example, we had five folks from CRE and from the GCP technical team on site. And they stayed up all night with us, helping. 

We set up desks in the War Room. We have basically a big common space in the studio that we normally use for [INAUDIBLE], we basically set up 15 desks. And then as launch happened, everybody was on site with us, helping call the shots. We had a dedicated Google Hangout PC with a big monitor that was pointing into the room, that folks from Google could phone in and help. 

Then at one point, we had something like 50 Googlers supporting us during the launch. It was really awesome. I have the opportunity of working on a relatively cool thing. Working on games is interesting, and so as folks heard that we were doing this thing, and at one point, we had folks from the GCP Linux kernel team heard that we were having a kernel panic issue because of some reason. 

And next thing I know, I got some dude that understands how all that crazy business works, and he's writing kernel patches for us, just 'cause it's interesting. And he couldn't log in. And he's like, well, I got nothing better to do. 

[LAUGHTER] 

Let me go and fix your kernel panic. So it's like, great. Let's go. It was really wild. Folks were coming in from all over the place. We got custom versions of the Kubernetes masters written for us, because we were putting a load on the masters like no one at Google had ever seen. 

And we were basically turning on and off so many pods per second. Like at one point, our master was getting something like 2,500 requests per second. And that's two orders of magnitude bigger than Google had ever seen before, even on their own services. And they're like, well, OK. I guess we have to make a snowflake version, as it was called, for you guys. And so it was super supportive-- everybody from capacity planning. 

We were 3x off what our craziest numbers were, and so we had the capacity planning folks phoning in, going-- just finding servers for us. And every time that we would find servers, eight hours later, the problems shifted to a new area of the world. And so they were coming back online to find us more servers throughout the world. And it was a really awesome experience overall. 

MARK: Yeah, that sounds great. I'd love to know, as well, even more about that CRE experience. Were they highlighting things that, you're like, this stuff is amazing. And then were they like, this part, they're like, mm, I don't know. Or like, what did that whole thing look like as you engaged with CRE? 

JESSE: Yeah, so over the six months towards launch, they would come on site and take a look at our tech stack with us, take a look at the usage patterns, and go hey, have you thought about maybe not using, like, Cloud SQL for all of your off and inventory? Oh, yeah, yeah. It's going to be fine. 

We load tested it to eight million bazillion. And they're like, yeah, cool. No, that's not going to work. 

[LAUGHTER] 

Have you thought about Bigtable? Nah, we don't need Bigtable. The old ways. That's the right stuff. No, no, no. No, it's not the right stuff. OK, sure. Cool. 

Then sure enough, yeah, it's the wrong choice. [CLEARS THROAT] Bigtable was the right way. 

But a lot of it was just them coming on site, being able to leverage all of this institutional knowledge that's built up at Google and with other partners, and really just poke really gentle holes in what we were building, and our thought processes, and giving us a lot more context. And we basically just came up with this very prioritized list of stuff that we needed to fix. And the issues that we had on May 21 were just the next stuff that we couldn't get to in time. 

Which was really super awesome, because the stuff that was way above there was way harder to fix. So stuff that we could turn around in under a day ended up being the stuff. And so they basically continued to pay attention through the launch and started projecting out, going hey. As an example, we were using-- so again, in SQL. SQL was the bane of our existence, I think. 

We were doing binary logs for all of our transactions. And at one point, we got a call. I think it was on Friday after launch going, cool. So you're going to run out of hard disk space on the largest instance that Google can make, just due to binary logs. Your whole service is going to fall over in three days. 

MARK: Small problem. 

JESSE: [LAUGHS] It was like-- 

[LAUGHTER] 

Cool. Thank god you called. We've got three days. All right. How do we fix this? 

And it's just been that kind of thing where, while we were eyes deep in the immediate fire, the CRE team ended up just having that one week plus out perspective, and spent time coming up with solutions, too. Like, OK, cool. Instead of this, do this other thing. And when it got really crazy, they opened up various editors and were supporting us directly. So it was pretty cool. 

JON: That sounds awesome. Glad you could cooperate with a lot of people. And it's kind of funny how games bring people together, isn't it? 

[LAUGHTER] 

MARK: Yeah. 

JESSE: Right? We always talk about that in the product side, but never in the development side. At least none of the companies that I've ever worked with before had, call it the presence of mind or the openness to invite other companies to support. 

And it was really sweet getting to work with Google on the fact that because they were just like, we'll happily come into your house and help you. Just open the door. And we're like, yeah, Google. Please. 

[LAUGHTER] 

JON: Just wipe your feet. 

JESSE: Yeah, right? Come on in. I beg you. So anyway, it was a good experience. 

JON: That's awesome. So I'm curious. If you could do this all again-- granted, you let us into your house. 

JESSE: Yeah. 

JON: What is the one thing that you would do differently? What is the one thing you would possibly change? If you have something. 

JESSE: That's such a weird, loaded question. Because-- 

[LAUGHTER] 

The way I look at that is like, what didn't we see? The assumption there is that I'm smarter today than I was yesterday, or that I had inherently bad judgment then. I don't think I would have changed anything given the knowledge that we had. I think we did a really good job. 

I think if I could have seen or learned something ahead of time, I think I would have liked to have done a better job with log management. I know that's really explicit, but there were a couple of things that took a little longer for us to identify because of how we did log management. As an example, it took a long time for us to get load testing back online, because we didn't know that we were DDoS'ing ourselves. 

That was in the logs from the first outage. We just didn't see it. We didn't know what to look for. We didn't know what to read. There's 415 errors that were getting spun out. 

It wasn't until I think it was Sunday night or Monday, really, really early in the morning, that one of our engineers was like, what's error 415? I don't know. Google search away, and oh, [BLEEP]. 

[LAUGHTER] 

But it took multiple days before we got to it, because we were just like-- we just didn't do a good job there. The other thing that I think I would do personally differently is, I don't think my career really taught me a lot about crisis management. 

JON: Oh, interesting. 

JESSE: And so in the minutes of sleep that I was getting, or the minutes of downtime that I was getting post-launch, I was doing a lot of reading about how firefighters actually manage crisis. And even just that small amount of learning that I got in that week in terms of-- I noticed a thing, OK, cool. Who does this really well? OK, firefighters do. 

OK, quick. Go find literally a textbook on how to be a fire captain and how to think about how to put a burning house out and how to tell folks to go and do the right work. Just that a little bit of extra knowledge was really critical. 

And if I could have learned something ahead of time that I'm more intelligent about now, I would have liked to have been better at crisis management. Just as a general leadership trait. A lot of leadership folks and technical leadership manuals and blog posts and all this other stuff talk a lot about vision and empowerment and all this other stuff that I ascribe to really aggressively. 

But on the other hand, when-- for lack of a better term, when [BLEEP] hitting the fan and the building's literally on fire, it's a very different set of skills than trying to espouse a vision and getting up in front of teams and this kind of stuff. And it definitely highlighted a personal weakness for me, where just literally, keeping focused on task on the right stuff and not accidentally getting people into a flailing place and that kind of stuff. I'm continuing to invest more of my personal growth time on that kind of stuff. 

MARK: Awesome. 

JON: What's coming next? Can you tell us about what's coming next? Or anything really cool? 

JESSE: Yeah, there's a lot of really cool stuff coming. We just announced our next weapon with Nintendo, so we're obviously coming to Switch this year. Not many months left in this year, so it's soon. 

It's a lot of fun. We just showed it at PAX. There's a whole bunch of new expansion content coming up. We're-- the way I describe it, we're just getting started. We'll probably come out of early access or whatever we're calling the game right now soon-ish, and just keep pumping in more value into it. Team is ripping and raring to go, or however that saying is. 

MARK: Something like that. 

JON: [LAUGHS] 

JESSE: Yeah. [LAUGHS] 

JON: So we'd like to ask you before you go, is there anything that we missed that you might want to mention? 

MARK: And you going to be anywhere particularly? You want people to come find you or anything like that? 

JESSE: Obviously, anybody who's keen on "Dauntless," feel free to give it a try. Play dauntless.com. I personally-- I'm going to be giving some talks over at the Montreal International Game Summit in November on leadership and growing teams and companies and lessons learned and that kind of stuff. 

Otherwise, we've got a bunch of GC talks as well that we've done that are recorded on how we scaled "Dauntless" and how we built it. Feel free to check those out. They're really cool. 

MARK: Awesome. 

JON: So I have one personal question before we let you go, because you're probably the second CEO of a game that I've talked to. How many hours have you have logged in "Dauntless"? 

JESSE: Oh, my god. How many hours have I logged in "Dauntless"? Thank god we don't have a slash played command. 

JON: [LAUGHS] 

JESSE: Probably more than I'd like to admit. It's-- 

MARK: [LAUGHS] 

JESSE: We used to actually have this counter at the studio for number of Drask kills. So Drask is this big, green, scaly lightning lizard thing. And he was the first production-quality behemoth we had. I was the first at the studio to 1,000 kills, and those fights used to take 20 minutes long. 

So-- and then I stopped letting us use the counter, because it was either non-productive or life destroying. One of the two. Probably not the most-played version since May at the studio, for sure. 

That probably goes to either Quentin, one of our web devs, or maybe Tanner, one of our artists. Quentin's max-level gear on everything, and he rivals some of our best streamers now. I can punch with the best, but not as much as I used to, sadly. 

MARK: Fantastic. All right. Well, Jesse, thank you so much for hanging out with us today. It's been a pleasure talking to you. 

JESSE: Oh, hey. It's my pleasure. Thank you so much for having me. 

JON: See you. 

JESSE: All right. Take care, guys. 

JON: So we want to give a big thank you to Jesse Houston for joining us on this week's podcast. Very, very interesting conversation on how "Dauntless" and Phoenix Labs got started on GCE. All their headaches they've gotten-- all the things they had to go through. And it's awesome to see one of our success stories, especially in games. 

MARK: Absolutely. 

JON: So let's get into our Question of the Week. 

[MUSIC PLAYING] 

So our Question of the Week is, what is the difference between premium and standard network? 

MARK: Ooh, this is a good question. So this is fun. 

[DRAMATIC MUSIC PLAYING] 

So way back in the day, there was but one network, and there was only one network to choose. And that was what we currently refer to now as premium tier networking. So the short answer here is, the way Google's network works is we try and get you onto our network as fast as possible. 

So we have much of our own fiber, and it runs out of the water and all that kind of cool stuff. So we basically try and get you from your internet service provider directly to our points of presence. We have over 100 around the world. And then get you inside the Google network, where we can control everything. It runs over our network, and it works really nicely. 

This is the premium tier. This is basically high-performance routing. We're able to do some other things, like have our Cloud load balancing to be global, [INAUDIBLE] global SLAs-- things like that. This is basically what you want when you want performance, super fast. 

But what we also have is what we call standard tier, which is very similar to basically what a lot of other cloud providers provide, wherein you spend the vast majority of your time over the public internet. So you're not running over a network. Just going to be a little slower. You're going to have a little bit less of a consistent experience, but it's cheaper. 

This is where we're not going to try and get you on our network as fast as possible. We're going to leave you on the public network. And so you're going to be on a lower-performance tier, but it is cheaper. 

So maybe if cost is what you're trying to optimize for, the standard tier could be really good. But if speed is what you're looking for, then the premium tier could be really good. And you can choose either one as you see fit, for each workload as you require it. So it really depends on what your needs are. 

JON: Awesome. So Mark? 

MARK: Yes. 

JON: Where are you going to be going? 

MARK: Where am I going? What I doing? That's a good question. So first, I'm going on vacation in a few weeks. So I'm very excited about that. 

JON: [LAUGHS] Well deserved. 

MARK: Well, I hope so, yes. It's well overdue. So I'm doing that. And then after I get back from vacation, I will be at KubeCon, as I know you will be as well. 

JON: Yes, I will. 

MARK: I believe we're doing some workshops. Probably some Agones and some Open Match workshops for anyone who works in the games industry. Probably floating around in a bunch of talks and stuff like that as well. 

Literally, I just got back from finishing a bunch of other things. So I haven't actually made all my plans for KubeCon yet. There's more stuff coming, I'm sure. But come and say hi, either way. 

JON: And I also will be at KubeCon, and I will be doing all of the above that Mark just mentioned. [LAUGHS] 

MARK: Yep. 

JON: And I will be attending several weddings in the upcoming months. 

MARK: Oh, exciting. 

JON: All of my friends decided to get married together, so that means more flying. 

MARK: That works. That works. But yeah, we'll make sure we have some Google Cloud Platform podcast stickers, especially. I need to bug one of our friends, April, and make sure that we have some Agones and Open Match stickers to hand out, as well. 

JON: I definitely need the new Open Match one. 

MARK: Yeah, definitely. 

JON: All right. 

MARK: Well, Jon, thank you very much for joining me on the episode this week. 

JON: Thank you very much. It's been a pleasure, as always. And we would like to thank you all for listening on this episode. Have a good time and see you next week. 

MARK: See you later. 

[MUSIC PLAYING]