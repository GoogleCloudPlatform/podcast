+++
audioDuration = "00:41:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.92.mp3"
audioSize = 60196277
categories = ["Games", "Customer"]
date = "2017-08-30T01:07:49Z"
description = "Michael Will, director of technical operations at Phoenix One Games, joins us today to tell us about their migration from their own hardware to the cloud, how they did it, and what they learned from it."
draft = false
image="/images/post/phoenixone.png"
episodeNumber = 92
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Phoenix One Games with Michael Will"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/MrmnzYgY1uY"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6x0mlq/episode_92_phoenix_one_games_with_michael_will/"
+++

[Michael Will](https://www.linkedin.com/in/michael-will-30576a1/), Director of
Technical Operations at [Phoenix One Games](http://www.guardiankingdoms.com/),
joins your co-hosts [Mark](https://twitter.com/Neurotic) and
[Francesc](https://twitter.com/francesc) today to tell us about their migration
from their own hardware to the cloud, how they did it, and what they learned from it.


<!--more-->

##### About Michael Will

Michael is experienced in the design and deployment of high performance compute
clusters both from hardware and software aspect with a parallel
execution and solution architecture focus from IBM 390 running Linux
to Penguin Computing commodity hardware for 10+ years, applying in the
last 5 years to his passion for real time strategy gaming at Phoenix
Age / Kabam / Phoenix One Games.

##### Cool things of the week

- Moving The New York Times Games Platform to Google App Engine [New York Times blog](https://open.nytimes.com/moving-the-new-york-times-games-platform-to-google-app-engine-e9337f2c9444?mcubz=0)
- Introducing Network Service Tiers: Your cloud network, your way [GCP blog](https://cloudplatform.googleblog.com/2017/08/introducing-Network-Service-Tiers-your-cloud-network-your-way.html)
- Titan in depth: Security in plaintext [GCP blog](https://cloudplatform.googleblog.com/2017/08/Titan-in-depth-security-in-plaintext.html)
  - Final Day at Cloud Next [gcppodcast 67](https://www.gcppodcast.com/post/episode-67-final-day-at-cloud-next/)


##### Interview

- Google Compute Engine [docs](https://cloud.google.com/compute/)
- Gaming Solutions on Google Cloud Platform [docs](https://cloud.google.com/solutions/gaming/)
- Google Cloud Storage [docs](https://cloud.google.com/storage/)
- [Couchbase](https://www.couchbase.com)
- Google Cloud and Couchbase Server: Zero to Millions of Operations in No Time [couchbase.com](https://www.couchbase.com/resources/presentations/google-cloud-and-couchbase-server-zero-to-millions-of-operations-in-no-time.html)
- VERTICA database [info](https://www.vertica.com/)

<div style="text-align: center">
  <a href="http://www.phoenixonegames.com/"><img src="/images/post/phoenixone.png" style="margin: auto; width: 25%">
  <p>Phoenix One Games</p>
  </a>
</div>


##### Question of the week

How to secure an App Engine application?

- App Engine login (required/admin in your [app.yaml](https://cloud.google.com/appengine/docs/standard/python/config/appref)), only Google accounts.
- OAuth2: [Firebase Authentication](https://firebase.google.com/docs/auth/)
[Auth0](https://auth0.com/).
- [Cloud Identity-Aware Proxy](https://cloud.google.com/iap/docs/app-engine-quickstart)
- [App Engine firewall](https://cloudplatform.googleblog.com/2017/08/introducing-App-Engine-firewall-an-easy-way-to-control-access-to-your-app.html) (beta)


##### Where can you find us next?

Francesc just released another [justforfunc](http://justforfunc.com) episode on [Go Type Aliases](https://www.youtube.com/watch?v=Vg603e9C-Vg),
and will be presenting at [Google Cloud Summit in Sydney](https://cloudplatformonline.com/Summit-Sydney-2017.html) in September. 

Mark is entering crazy season, currently speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.
He'll then be speaking at [Gameacon](http://www.gameaconvegas.com/) and [Austin Game Conference](http://austingamecon.com/) and attending [Strangeloop](https://www.thestrangeloop.com/) once he's done with all that.

{{< transcript "FRANCESC: Hi, and welcome to episode number 92 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing? " >}}

MARK: I'm very excited because after this we're going to have lunch. 

FRANCESC: Yes, me, too. So hungry right now. Also excited because we're going to be talking to Michael Will, who works at a company called Phoenix One, and they do video games. 

MARK: Yes, one of my favorite topics. He has a really cool story about basically how he took his whole infrastructure from on prem to dedicated hardware, brought it all over to the cloud. Basically, he's an almost direct [INAUDIBLE] shift. It's pretty cool. He got some benefits and he had to learn some lessons, and he's going to share them all with us. 

FRANCESC: Yeah, also a very cool guy. He's definitely a geek in the hardware stuff, so interesting to hear his experience of moving from I know every single piece of hardware and running to I'm running on the cloud. 

MARK: Yep. 

FRANCESC: Yep, very cool. And then at the end, we'll have a question of the week, which is about security, secure on App Engine. How do you make sure that only who you want to use a webpage are able to use that web page? 

MARK: Ooh. 

FRANCESC: Yep, magic. Magic is one of the options indeed. And before that, we have the cool things of the week. One of them-- and I'm going to go with it because it involves not only App Engine but also Go-- is the New York Times. So J.B. Robinson, which is a Principal Software Engineer at the New York Times, also user of Go and lover of cats, wrote-- 

MARK: Is that the important bit? 

FRANCESC: That's his bio. Wrote a very cool blog post explaining how the New York Times migrated their [INAUDIBLE] work page from-- I think they were using a LAMP-like architecture, they say. I don't know exactly what they mean by that. But they migrated the whole thing to App Engine, running in Go, and they explain how happy they are about it. It's very cool because they actually give a decent amount of technical detail. 

It's not only about, oh, we moved. They also talk about how they do monitoring and other things, how they use pop-ups in order to do push style for subscriptions, things like this. It's very interesting-- a lot of detail. Check it out. I think it's definitely worth reading. 

MARK: Yeah, they do some interesting stuff around auto-scaling, which I thought was interesting, but I think the real takeaway here was they managed to cut their infrastructure costs in half doing this. So I thought that was pretty impressive. 

FRANCESC: Yeah, there's a line basically saying that their previous setup on a cloud provider competitor was not elastic enough and that App Engine actually fixed this because it's able to scale up and down super fast and super easily. So definitely check it out. And if you have some similar case, like you have huge peaks of traffic followed by no one using your app, it's definitely worth it to have a look at how App Engine handles autoscaling. 

MARK: Absolutely. So the second cool thing of the week I'm kind of excited about-- it's probably a bit nerdy, but it's kind of cool-- we just announced-- now it is alpha, so you need to get white listed for it. I'll say that up front. But we just announced network service tiers, which I think is super, super cool. 

So one of the things with Google Cloud is we run our own network. It's the same network that we run for Gmail and Maps and everything. This is super fast and super great, except for the fact it is kind of expensive. Because we run our own hardware and we do a lot of cool stuff for you. 

Sometimes, though, you don't want that super fast network. You want something that's maybe fairly similar to what some other cloud providers have who don't run their own networks, and you want it at a cheaper price point. So now we have this thing called network service tiers such that you can have either the standard, which is our premium tier, where you have great consistency, great speed, everything else. 

And then you have the standard tier, which uses much more of the public internet and much less of our network, but that does mean that you're paying a whole lot less-- so maybe if you're moving files, like large files from one place to another but you don't really care how quickly they get there. Like, if they get there in the next day or so, it's fine. So you don't have to pay those huge egress costs if you're moving them from, say, a data center to us or back again-- all sorts of things like that. 

That means then, yeah, you don't care as much about latency. You don't care necessarily about consistency because it is over the public internet. You can save yourself some money. So it's actually really, really cool. I'm actually really excited about this. 

FRANCESC: Cool. I like that it's actually configured, I see, at resource levels, so you can basically decide for every instance or instance template or load balancer into what network tier you're going to be using that. So it's not like all in, all out. You could be like, well, for this specific thing I need to read it fast so I'm going to go with premium. With this whole thing, it's the map previews that might take longer-- I don't care-- then you can go with basic for that. 

MARK: The right network for the right job. 

FRANCESC: Yep. Very, very cool-- and also saving money, which I like that. And then we have the last cool thing of the week. Actually, there were way too many cool things of the week, but the last one we chose-- it's about Titan, which both of you and I have one on our desks. 

MARK: Yes, we do. 

FRANCESC: Yeah. So Titan is a really cool microchip that Google designed specifically for Google purpose-built servers. So it's something that we run into only a Google and on Google Cloud 2 and allows us to do really cool security things that we thought, this kind of hardware you wouldn't be able to do it. 

So there's a new blog post that covers Titan in depth. It's definitely in depth. It's a pretty long one, but you will be able to understand not only what are the basics, like what is Titan and how it's built, like from basic point of view, but also what it empowers us to do and what kind of security we can manage, like, for instance, make sure that if someone accesses something we're able to see it and the logging can not be tampered with-- stuff like that, like really, really powerful things explained in a lot of detail. 

And if you are interested in knowing more, but you're too lazy to read, like me, you can also listen to the episode that we did back in March. It was the final day at Cloud Next, which was episode 67, where we interviewed Cornelius Willis, who is the Head Marketing at Google Cloud Platform and Neal Mueller, who is the Product Marketing Lead also at Google Cloud. And they told us a little bit about it. It is a very cool thing and goes very well on your earrings, apparently. 

MARK: Yeah. No, I love this. It just goes to show, I think, what levels we go to as a company to ensure security that we write these chips ourselves, build these chips ourselves, make these chips ourselves such that we can be like, these machines are ours, the software that's running on them is ours. Everything that's happening on this machine has not been tampered with in any way, shape, or form, and we make sure that we are in that from end to end. And that's like, yay-- security yay. 

FRANCESC: Yeah, it is pretty amazing, but at the same time incredibly important to make sure that your workloads are running where you really think they are running. 

MARK: Exactly. 

FRANCESC: So yeah, very cool. 

MARK: Awesome. Well, why don't we go have a chat with Michael Will, talk to him about his game "Guardian Kingdoms"? 

FRANCESC: Sounds good. Let's do that. 

MARK: So it is an absolutely pleasure today to join one of my friends onstage from New York, Michael Will, Director of Technical Operations at Phoenix One Games. Michael, how are you doing today? 

MICHAEL: Excellent. How are you? 

MARK: I'm very, very well. Thank you so much for joining us, coming to talk to us about Phoenix One Games, your newly released game "Guardian Kingdoms"-- I don't know if you can still count it as new anymore-- that you have on mobile. But before we get stuck into that and how you use Google Cloud Platform, why don't you tell us a little bit about who you are and what do you do at Phoenix One Games? 

MICHAEL: Hi. I'm Michael Will. I work at Phoenix One Games as a Director of Technical Operations. So I took care of the backend of the game, basically. I have a systems engineering background, hardware. I used to make high performance compute classes at Penguin Computing before I went into the gaming industry. And so with that focus, I'm also designing my backend, and we will talk about the details of what that means later. 

FRANCESC: Cool. So tell us a little bit about "Guardian Kingdoms"-- what it is. What is it? 

MICHAEL: So "Guardian Kingdoms" is a real-time strategy game that's similar to "Clash of Clans," in the sense that you build your own kingdom and you defend it against other people and you build up resources and so on. But what's unique about this is that you actually have massive real-time gameplay with three people on your side, three people on the other side, and all of them draw up hundreds of units. So your battlefield is full of thousands of units moving, and it's really pretty exciting. 

FRANCESC: Cool. So there's basically six players for every game, but every player-- 

MICHAEL: Up to. 

FRANCESC: Up to six players. 

MICHAEL: So the thing is you are organizing alliances, just like you would be in those other games. But the nice thing is that if you get attacked, they all get notifications on their phone, and they can actually help you and participate. Or they can just observe. So it's like you might have 10, 15 people observing the game and two people on your side that are supporting you, and they can join at any moment. So it really can turn also the game around, which is fun. 

FRANCESC: Cool. So let's talk a little bit about how it's implemented. It's a mobile game. What runs on the mobile, what runs on the backend? Tell us a little bit how it's provided. 

MICHAEL: So it's basically a typical client server-type, multi-tier application. So the phone is your client. It does all the graphics, and it connects through HTTPS REST to a web farm, if you want, that implements the API for the game. And so anything that your phone client asks of the game, the game first validates. 

So if you say I want to spend 50 gold on upgrading this tower, then it will basically verify that you actually have that before it does that. So the battle simulations I actually done on battle servers that are implemented in C++, and we use some artificial intelligence scripting, using newer technology in there for best performance. And then the backend servers, the web farm, the API basically to the game-- that's instrumented in PHP. 

MARK: Cool. So I think the interesting story here is that you used to run basically this whole thing on bare metal, and you did that for quite a while. Can you tell us a bit about what that experience was like and what you did there? 

MICHAEL: Yeah, it's more of a hardware systems engineering approach. So you basically design web servers, database servers, and so on. And with the servers, you basically look at which ones are most critical and those who make us redundant as possible inside of the server. So you basically architect for server resiliency. 

And so for a database server, that means I want to have redundant power supplies, so that if one of the power cables gets disconnected by accident or one of the power supplies fails, system keeps running. And it can be hard-swapped out. And the same goes for a disk drive. So there's hardware rate, which means you have a bunch of disks' data redundantly distributed amongst them. 

And so if one of the disks fails, an operator can replace a disk drive without the system shutting down, and it can just keep writing its data. And it will reshuffle the data as a new disk that's inserted. So hardware systems engineering's focus here is that you actually look into details as, do I wanted two right controllers for best performance, do I want to have multiple volumes and stripe across the whole [INAUDIBLE]. 

So you can do a lot of optimization there. And you also want to control the firmware and be really very specific about what you end up putting into production that you have tested and you know it works. And so that's the hardware systems engineering focus that you have, basically. 

And what's different now in the cloud is you don't have that access anymore to the detail, which at first seems like a problem. But it actually is a blessing, because it allows you to change your approach. So I'm no longer a hardware system engineer, but rather I'm a distributed systems engineer. And so instead of looking at a single server never going down, what I do instead is I look at the servers never going down by having enough servers and having failover and building to my software [INAUDIBLE]. 

MARK: Cool. So let's dig deeper into that. So you had sort of your hardware. It was kind of working. It seems to me like it was working. What were the reasons why you actually ended up transferring over to the cloud? I mean, obviously you were talking about moving to more of a software focus, but were there other aspects of that as well? 

MICHAEL: So a typical problem that a startup like us faces is that we need to match our costs with revenue or potential revenue. So we don't want to overspend, basically, because every dollar that we don't spend on unnecessary stuff idling around we can put towards acquiring players that actually bring revenue. And so what we found is that with the hardware it's kind of hard to scale up and down. 

So we had a nice contract that would allow us to say, OK, we don't need those servers anymore. And then they say, OK, by the end of the month you stop paying for it, which is OK. But at best it makes you think, oh, it's the 31st; we really need to cancel the server now. Otherwise we pay another month for it. 

And so the other thing is if you want to scale up, because you got more players and the system starts slowing down and you're like, oh, I need 20 more web servers, they can give them to you in two days. But then you're writing them for another week and reject some, get some replacements, and get some miscommunication cleared up. And by the end, it's two weeks. So especially if it's database servers, you will definitely need two weeks to put them into production. And so that's rather slow moving, and so the promise of the cloud, of course, is that you can spin up stuff in minutes and shut it back down and that you only pay for it when you use it. 

FRANCESC: Cool. So I'm wondering-- you give a little bit of the reasoning behind moving to the cloud. But how easy or hard was it? Did you need to write many things or basically all the things that you had already just worked? 

MICHAEL: It's basically super easy, because we were already a Linux-focused, open source architecting shop. So everything we did was LAMP stack, basically. Originally, we did really use Linux, MySQL, Memcache, and that kind of stuff, and then we replaced MySQL and Memcache with Couchbase at some point to have less dependency on individual servers going down. Remember the original problem? 

And so that all translates very well into running it on the cloud, because it's also Linux. And I can use the same services as before. So one important piece for PHP developers is knowing how does my code perform or in general. So if a request comes in and I want to have a feel for why I log in slower or what are the slowest requests that I need to focus on-- and so we use a service that's called New Relic that basically is like PHP Xdebug but with all the crazy tools that take up all your engineering time to evaluate what you found. 

And so what it allows is basically see statistics in real time basically, see, oh yeah, for some reason logins got slower and purchases of this one item have really slowed. And then you see stack traces of the actual execution of the code. 

You can see, oh, we did 1,000 games on Couchbase; I thought we were just going to do 10. Let me look at the code and fix this. So we can use the same servers like we used to before. So it's dropping the same kind of stuff. 

MARK: Cool. So which actual GCP products are you using, then? 

MICHAEL: So we use basically Compute Engine, because for me, as somebody who used to be obsessive about firmware on individual components, it's basically, OK, I have to let go of this micromanaging a little bit. And the first step is replicating the same architecture on the cloud so I can basically have a load balancer, I have my web servers, I have my battle servers, I have Couchbase and what other services I use. Like, Vertica is another database that we use for analytics. 

And we use Redis for matchmaking and that kind of stuff. That all runs the same way, and the way we deploy it is with Chef. And that used to be the same on the hardware as it is now, except for it's much more flexible and goes faster and I can do it with less impact on the cost. 

FRANCESC: So now I'm wondering-- you were talking about how passionate you were about hardware. Moving into the cloud, did you use custom machines? Because you can tune exactly how much RAM, how many CPUs and stuff like that you used. Or what kind of instances did you move to? 

MICHAEL: I basically maximized memory for the database servers and for the computer to basically not be bottlenecked. And basically the approach is get the maximum first and then tune it down later as you notice what you really need. 

MARK: I think when we spoke previously, you got some nice notifications from us, saying that maybe you want to lower some usage there. 

MICHAEL: Right. So I mean, the tools that Google builds are just great. And especially in comparison to other cloud vendors, I have to say that's really been one of the reasons why we went with Google is how quickly we were able to bring up a prototype and then say, hey, that prototype we will actually turn into production, can we do this tomorrow kind of thing. 

And so one of the tools is the web interface where you can basically customize your machines, and it even teaches you how to use it and automate it. There's a little button that you can click, and then you see what the REST code would have been to achieve what you are trying to do. 

FRANCESC: Super useful. 

MICHAEL: So the same web interface also shows you which machines that you're running are under-utilized, and it actually gives you recommendations on paring it down to save money, which is kind of cool. So it shows you, oh, yeah, you have only been using 20% of RAM of this machine. Why don't you use a custom machine and you can save $50 a month on this machine? 

FRANCESC: Cool. You mentioned that for the database instances you were maximizing RAM. What about storage? 

MICHAEL: Storage-- well, you pay per gigabyte, right? So originally, I also maximized that until I realized the cost impact to its fullest. I mean, we did back off the [INAUDIBLE] originally. But it really is a different mix of costs that you have to be aware of, especially if you plan to do what we are doing, which is have some of the instances turned off so we don't get billed for the CPU time at all. 

But you can bring them up really fast without having to reinstall everything on them. And the storage that's attached, however, is going to be billed as if it is running because it is occupying the space. So you pay for what you're using, basically. 

FRANCESC: But for the storage, were you using persistent disks, or what kind of disks were you using? 

MICHAEL: So Couchbase uses network-attached participant disks. So SSDs for our lowest latency, highest IOPS was the goal. Code And then we used your Google Server's so-called Google Storage in order to do backups. So instead of having a separate file server, like we used to do, we now basically just drop it into Google Storage, which is really easy to use also with the tools that you have. 

Besides the web interface, there's a command line interface that's really easy to integrate into your scripts. So I just run a few lines of shellcode, and basically I can spool data from one system to the other with it. So what I'm doing is the battle servers stay logged out, like the actions that happened and when people drop a lot and so on. 

And all this data is basically just a big, large file, and I just have a Cron script running that drops it into a directory on Google Storage. And then I have a different system that, again, in the Cron job just takes everything that it finds there and then takes it apart and inserts it into Vertica as comma separated value files, which gives you the highest throughput. 

MARK: Actually, you just brought up Vertica, which is I know like a big data processing tool? 

MICHAEL: Yeah, it's like big query, but it's for smaller capacity, if you want. It's basically a relational database that's column-oriented. That means inserts are really slow, but selects are super fast. So if I run a query on a billion rows, I can get a response in under two seconds, sometimes under one second. 

FRANCESC: And that's used more for analytics and what happened previously before, so it's not real time or anything? 

MICHAEL: Right. It's an offline thing, so basically the game emits events like, oh, player x purchased this or did that action or tried to cheat or whatever. We detect in the game, and it basically gets collected and then rerun analytics on it. We also use an external service called Periscope for basically graphing that kind of stuff. So you can have your queries in there and get nice dashboards, and it basically talks directly to our Vertica backend. 

FRANCESC: Cool. I have so many questions right now. 

MARK: I have loads, too. 

FRANCESC: So the first question that I have is-- so you're using SSDs to store the database, but you're also storing some of that information into Cloud Storage. Then you read from Cloud Storage, kind of like MapReduce, whatever, like a big batch process, and then you store that into Vertica. Is that correct? 

MICHAEL: Right. That's kind of how it is in terms of getting analytics data into a queriable system. 

FRANCESC: And once it's in Vertica, you're actually storing again on SSDs so that the access is really fast. 

MICHAEL: Right. 

FRANCESC: OK, cool. So my questions are-- 

MICHAEL: And in RAM, of course, because the Vertica servers have lots of RAM and so the idea is-- 

FRANCESC: In order to make it actually fast. 

MICHAEL: Yes. 

FRANCESC: So my first question is, when you're storing on Cloud Storage, then it means that basically you read only once and then you just leave it there forever. Are you using something like nearline or codeline, or have you considered these things? 

MICHAEL: We have considered it, but time is precious. So what we do is basically we just have it on whatever the default was at the time, and then we will tune that later. The main cost, really, is in the actual SSDs, the network-attached disk drives, more than the nearline storage, if you will. 

FRANCESC: Cool. And then the second question is, since you're doing that offline batching process, how are you doing those? Is that also machines running on GCE? 

MICHAEL: Yep, everything there runs on GCE. 

FRANCESC: And then whenever you're doing something offline, my question is always the same. Are you using preemptible machines or, again, it's something that you might consider later on? 

MICHAEL: Beats me. I mean, I want the systems to be as up, as reliable as possible. That's still the system engineer talking. So I see them migrate every now and then, and for a real-time game that's actually not really great. 

But it works fairly well, so it's OK. And in particular, what I've seen is that you hot migrate the image and within a second it can respond again, or a few seconds. And I think that only works really because the image doesn't contain all the data, but the network-attached disk can be pointed to from the new location easily. 

FRANCESC: Then that offline batch actually needs to be active all of the time, right? So it's not like an offline thing that it runs every day. It runs continuously? 

MICHAEL: It runs continuously, yeah. It's a constant feeding processes. It's just that it's decoupled from the actual game play. 

FRANCESC: OK. That makes total sense. 

MARK: So actually, this is interesting, too. From first glance, talking about what we're talking about, everything is for the GCE; you're running your own sort of analytics pipeline. Probably the only managed service you're probably using is, like, Cloud Storage and maybe some load balancing. Was that a direct choice to basically use more of our infrastructure as a service? Or what was the reasoning behind that? 

MICHAEL: Well, the first approach was I have this hardware architecture that runs on bare metal, and now how do I make this run on the cloud? And then what services are there that could make it easier? So we were even looking at replacing Couchbase with DataStore. 

But of course, our code makes too many requests, so that's not really feasible at this point in time. Because before it was free and now there will be a transaction, each transaction costing a little bit. And so we ruled that one out. We also looked a lot into BigQuery because of Vertica and machines eventually will run out of space. 

And that's the promise of higher performance by having more hard RAM resources thrown at it from the Google side. And so that didn't pan out in the first iteration, so we didn't use that. But we needed to replace a file server with [INAUDIBLE] file server, but then we saw that it's much easier to use with Google Storage. And it's also kind of unbounded. I can just throw at it. It never says, oh, disk full, unlike the file server that needs babysitting. 

FRANCESC: During the migration, did you just move the whole thing all of sudden, like the whole system stopped from your on prem and moved it to the cloud? 

MICHAEL: So we were actually in development when we made a decision on where to run. So we had previous games that were running on bare metal and that still are that we have left behind when we move companies around. And it's also running great there, but I don't have to worry about those anymore. 

And so the new approach was, OK, we could do it the old-fashioned way or we can do it the new way. And what really brings us the value besides the nice tools is that we can actually do a lot more load testing and development where you can just put together a copy of the live system or even a bigger system than the live system and run it completely independent of the live system and load test it for a few hours, 30, 40 servers. And then you shut them back down and you don't pay for them anymore after that. 

You can just delete them and they're gone. Whereas in the previous approach, we would have to have some dedicated test hardware and would always have to extrapolate what it probably would be like in the bigger version and so on. So it kind of opens up possibilities that just were not that before. 

FRANCESC: When you're doing these tests, how do you measure the performance? Are you using New Relic for this and tracking-- 

MICHAEL: New Relic is one part of it. But New Relic is looking at individual transactions, but what I'm looking for is volume and throughput. And so one open source tool that's really useful, then, for that is JMeter. It's written in Java, and it has a nice Java UI for basically making test plans and so on. 

And you run a system with just one web server, print out all the queries that come, all the posts that go through it when you test with your phone. And you basically see, OK, when my phone installs, these are the steps it will take. And then you can convert those into basically a JMeter test plan that can do 1,000 of them in parallel. And then you run some of them on a few servers, and then you get basically 4,000 requests coming in. And you run it over and over again. 

MARK: So is that just HTTP requests, or is that also stress testing against your battle servers, which I know are C++? 

MICHAEL: It's all implied. So the activity that you do is just like the phones will do. So it has consequences. It's the same thing, basically. It starts the battles. It doesn't do the randomized stuff that real players would do, and there won't be the same kind of delays. 

But in order to get a worst case scenario done, like if I really have 1 million installs a day of people that really play a lot, basically, then I can see how many servers do I need for that. And will it go down or will it survive? And so I'm looking at overall throughput of installs, and then I identify weak points. And I see, oh, yeah, I need more of my battle servers than I thought, or I need to look at some of the requests slowing down suddenly. Because they're all focused too much on Redis and overloaded-- stuff like that. 

FRANCESC: Cool. So I wonder, other than for the flexibility of being able to scale up and down and at systems for testing and QA and stuff like that, what are other benefits that you've seen-- or even what are the problems that you've seen-- by migrating to the cloud? 

MICHAEL: Challenges of migrating to the cloud, of course, at first is psychological. 

FRANCESC: Your dear machines. 

MICHAEL: Like, is this going to go away overnight and then what do I do? So of course, we have backups that are basically proven, and I prove it to myself every now and then that I can build a new system to back up data and that actually still works. So that's a good thing. But again, this is something that the cloud really supports. 

The other challenge that we found was I was kind of optimizing on hardware, and I was thinking I'd do the same optimizations on the cloud. But sometimes simpler is just better. So for the Couchbase server, for example, I was used to having two right controllers, four volumes that are giving me a maximum IOPS, basically, if I stripe across them. 

And so I tried the same approach on the cloud. And in theory, that should really work, but in reality, it was actually better to just use a single volume that is then larger and that has been handled by Google on the backend in order to maximize IOPS. And so that was one of the lessons learned, is basically don't try so hard to do the same optimizations because it might actually be in the way of success. 

FRANCESC: Yes. Go for the simple thing, and then, as you were saying, test it and find how to make it faster later. That's cool. 

MICHAEL: Another one is don't try to use all the services upfront. Like I said, we were learning a lot and spending a lot of time on which services to use. And the approach to first shift it into the cloud and then disassemble it later and look at, well, if I take this apart, can I actually use some of the services-- initially, I was really thinking about a file server I could rule out quickly. But the Couchbase-- that will take us a while to re-architect so that we don't have so many transactional costs, for example. 

FRANCESC: You've migrated to pre-cloud-oriented point. You have all of these servers running on the cloud and everything. Are you planning on future migrations to other services? What is the future roadmap? 

MICHAEL: Well, the future is always right open. So we're fast moving in terms of the features that we're using. I was looking just recently at the translation API. 

So I was thinking like, oh, we have all these international chats going. There are chat rooms in Italian, some in Chinese, some in Arabic. Wouldn't it be nice if you could look at basically what they are saying, besides having to have language domain experts in the company that can tell me? 

And so I was looking at that. So that's one interesting thing. And then of course, we're always curious and learning more about machine learning. 

And every day you come up with new services and new stuff. So that's what we like about Google in general is you guys are fast moving, just like we are, and very innovative and cutting-edge. And so new options always come up. 

FRANCESC: I guess we are running out of time, according to Mark's hand gestures. So is there anything else that you'd like to mention that we may have missed? 

MICHAEL: Well, an anecdote would be-- and I hinted to that earlier-- the tools that we used to basically prove to ourselves that this is easy to use and it was much easier than other cloud providers led to the situation that we basically had a system that was meant as a prototype but that was going to be put into production. And we were like, hey, can you do this tomorrow. And then they're like, well, you have infinite resources, but you have to negotiate a quota first. 

And quota is basically a framework for how much will you potentially use, and it's kind of reserved resources so that they don't run out of resources just when you need them. And so I think engaging early to increase the quota when you want to go live-- that's an important thing. And yeah, that was maybe one takeaway, is it's so easy that you could just move right into production quickly. 

FRANCESC: Are you working with customer engineers, sales engineers, or any kind of those people in order to do those quotas? Or is it completely automated? 

MICHAEL: Well, it's somewhat bureaucratic. So there's a form and you fill it out, and then you talk about it. But you have very strong technical people and also a really good sales guy that I work with who understands the technology just as good as I do. And so it was really easy to talk with him about, OK, this is important to us and that one isn't. And then he made it happen on the back and then pushed it forward. 

FRANCESC: I guess that ties very well to all of our other episodes on customer engineers and sales engineers and customer reliability engineers and all that stuff. 

MICHAEL: Lots of resources. That's generally what I like. 

FRANCESC: Wonderful. And so also, to make sure we get all the plugs in, the app is out. So "Guardian Kingdoms" is out on iOS, and Android is coming soon. 

MICHAEL: Yes, definitely by the end of the year, you will see an Android version. 

MARK: Wonderful. We'll have links in the show notes to the website, so everyone who wants to go play the game can find it. 

MICHAEL: Play "Guardian Kingdoms." 

MARK: Fantastic. Well, Will, thank you so much for spending time with us and answering all our ridiculous questions, or maybe not so ridiculous. We really appreciate you taking the time. 

MICHAEL: Yeah, same here. 

FRANCESC: Thanks so much to Michael Will to spend some time today and tell us a little bit about the whole experience of migrating something as hard to migrate a game environment from like very well-known hardware to the cloud and how everything worked out really well. Very, very cool. 

MARK: Awesome. Yeah, thanks again to Michael. It was really good story, and I think he had a really good take on the right steps to take when migrating and when to make those tradeoffs about, do I use the new things, do I just continue with what I know and then just make small steps, which they did. I thought that was a really, really interesting take. Why don't we move on to our question of the week? 

FRANCESC: And so the question is a pretty general one, but that has many answers and has a new one since not that long ago. So the question is, OK, how do I secure an App Engine application? And by securing it, I mean that only the people I want to access the web page will be able to access it. 

That is the only one that we care about right now. There is one which is the typical one that I've been using forever, which is basically on your app.yaml, you can say "log in required," or even log in admin, for specific endpoints. So you can say, well, this webpage here-- you need to be logged in to access it. 

Now, if someone tries to access it and they're not logged in, what happens is the App Engine framework will actually redirect that to a log in page that only works for Google accounts. And then you need to log in in there. And by Google accounts, I also mean Google Apps. So if you have [INAUDIBLE], for instance-- one of those-- it will log in and then go back to the same webpage, and this time you will be authenticated. So it will work. 

Similarly, you can also say that log in is not required, but admin. And when you do this, not only you need to be authenticated, but you need to be also an owner of the project where that App Engine is hosted. So for instance, let's say that we added some kind of authentication for GCP Podcast. 

Everybody could authenticate to those, but only Mark and I would be able to use those that are marked as log in admin. These are also very useful for when you're doing things like Cron jobs. Cron jobs-- these are one of the things that you really don't want anyone to be able to hit. Because in general, they are expensive. You don't want someone to go and hit like that one second for the rest of the day. 

MARK: And obscurity is not security. 

FRANCESC: It is not. It can help a little bit, but someone will find it at some point. So yeah, it is important to be able to do required admin stuff like that. So that is one of the options. 

MARK: And it's worth noting that only works with Google accounts. 

FRANCESC: Yes. It only works with Google accounts-- a Google Apps account. 

MARK: So second way-- I love what you've written here. "You do you." I love that. 

FRANCESC: Everything goes. You do you. 

MARK: So basically build your own authentication into your app. Maybe use something like DataStore for the backend storage, build your own OAuth provider, who can do existing OAuth providers. 

FRANCESC: So your passwords with anything encrypted in them. Don't use salt. 

MARK: Ha, ha, ha. Whatever level that you are comfortable with, please don't do that. 

FRANCESC: Do not do that. 

MARK: So more work, obviously, but that enables you full control over everything from how you want people to authenticate and what you want to build into. 

FRANCESC: And also, following the same idea of using OAuth 2, you do not need to implement the whole thing by yourself. OAuth 2 is kind of hard to implement. It's never fun. But there's providers that allow you to do this basically with zero effort. One of them, my favorite one, is Firebase Auth. 

Firebase Authentication will allow you to provide a very simple way of doing authentication using OAuth 2. And not only with Google accounts, but also with Facebook, Twitter. And I think they even support GitHub and stuff. They support a bunch of them. 

And you don't need to do anything on your side. Everything you do is you receive a token, and then you use a library to try to identify what user is behind that token. Super cool. In a very similar way, Auth0 does something quite similar. So check those out if what you want to do is authentication with many different kinds of accounts and you don't really want to tie yourself to one provider. 

MARK: So we also have this neat thing called the Identity-Aware Proxy. 

FRANCESC: Yes, also known as BeyondCorp. 

MARK: Yeah, mostly internally. 

FRANCESC: I like it. 

MARK: Yeah. So Identity-Aware Proxy is actually kind of cool in that it is a layer that sits in front of App Engine, as well as some other products if you really want to, that enables you to basically control complete access based on who these people are. So you can set up roles and responsibilities. Again, this is linked to Google accounts, so keep that in mind that if somebody comes in who's not meant to access this app then they don't even get to hit that URL. That never happens. 

And you can set up a bunch of rules. This is nice because not only can you apply it in one place. You could then apply it in multiple places around your organization from multiple apps as well, which is quite nice. 

FRANCESC: Yeah, it is really cool. Let's imagine that you have a company and that company has four or five different applications and you want to use the same authentication schema for all of them, which makes sense. This is probably the easiest way to do it. Rather than having authentication on every single one of those apps, what you do is you protect those apps with the cloud Identity-Aware proxy. Or actually, you could do both. 

MARK: Yeah. You could do it. The nice thing as well is the identity-aware proxy will pass through who the user is. So it not only provides access protection, but also has basically a user log in to get that information as it comes through. 

FRANCESC: And one of the cool things is that this is something that will stop a request from getting to your application in the first place, unless it's been authenticated. So it's pretty good. App Engine, for instance-- if you keep on hitting it, you will have an instance running. It might even scale up if you've got a lot of traffic. If that traffic is not authenticated, that traffic will never hit your instance, so you're good. 

MARK: That's pretty cool. Now, if I want to lock it down to just a section of IPs-- 

FRANCESC: Yes. So that's what we call a firewall, and that's the new thing. We have an App Engine firewall, and it is as simple as it sounds. It is a firewall where you can say only requests coming from these specific IPs or this range of IPs is able to hit my app. If they're not coming from those IPs, they will be dropped, so your application will not receive any of that traffic. 

MARK: Very nice. I think if I wanted to use these in combo, I would probably do something like cloud identity-aware proxy, plus an App Engine firewall. So if I've got, say, a corporate network, I know what my IP range is. So I know, OK, this can only come from within these IP ranges, and then I IP on top of that so that I have both layers. Maybe if I accidentally configure IAP I still have the added protection of the IP range and vice versa. 

FRANCESC: Yeah. I don't know. I think that cloud identity-aware proxy is secure enough. 

MARK: It's pretty great. 

FRANCESC: Yeah, so but cloud identity-aware proxy-- it makes it so you need to authenticate. So probably what I would do is use cloud identity-aware proxy for all the things where users are using it, but then use App Engine firewall for when you have a different system that is hitting you. And you know what IP you're using. Kind of like a remote Cron job or something like that. 

MARK: Yeah, you could do that, too. 

FRANCESC: It could help, I think. 

MARK: There's probably lots of layers you can put this stuff together. 

FRANCESC: Actually, maybe we should do an episode on this. 

MARK: It would be cool. 

FRANCESC: Because that was a lot of information. 

MARK: Yeah. Awesome. So you've got lots of fun tools to play. But before we wrap up today, Francesc, what are you up to? What are you doing? Where are you going? What's happening? 

FRANCESC: I'm going to the land of kangaroos and koalas and going to Australia for the Cloud Summit in Sydney, which will take place Wednesday 13 of September. After that, I'll be back for a week, and then I'll go to next in Chicago, where I will we be speaking about TensorFlow. I'm very excited. I'm doing a lot of machine learning lately. 

MARK: Nice. You look like you're enjoying that. 

FRANCESC: I know. I'm going to be speaking about TensorFlow and how to use it. And then in October, I'll be to Velocity in London to speak about performance profiling with Go. 

MARK: Nice. 

FRANCESC: What about you? 

MARK: So when this episode comes out, I'll be on the second day of Pax Dev, and then I'll be attending Pax West, playing all the games with all my friends, which I'm super excited about. Then after that I have Gameacon Las Vegas in September, as well as Austin Game Conference and then attending Strange Loop. And strangely enough as well-- no pun intended, actually-- 

FRANCESC: Wow. 

MARK: Yeah, that's great. So in October, I will be heading to Australia as well. So I will be speaking at DevFest Melbourne, which is in October, so the 21st of October. 

But then I'll be doing all the stuff at Melbourne International Games Week. So I'm speaking at GCAP, Game Connect Asia Pacific. I'm hoping to speak at Pax Australia. We shall see. But at the very least, I'll be there and I will also be at Unite Melbourne as well. So if anyone wants to say hello, drop me a line. 

FRANCESC: I've got to congratulate you on your very native pronunciation of Melbourne. 

MARK: Well, I did live there for most of my life. 

FRANCESC: It sounds very, very local. I like it. Yeah. 

MARK: Awesome. So, Francesc, thank you so much for joining me yet again for another episode of the podcast. 

FRANCESC: Thank you, Mark, and thank you all for listening. 

MARK: And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}