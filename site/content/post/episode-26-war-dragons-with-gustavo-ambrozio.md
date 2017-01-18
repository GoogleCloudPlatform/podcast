+++
audioDuration = "00:32:16"
audioFile = "Google.Cloud.Platform.Podcast.Episode.26.mp3"
audioSize = 46503472 
categories = ["App Engine", "Customer", "Gaming"]
date = "2016-05-18T01:07:49Z"
description = "Gustavo Ambrozio, from Pocket Gems, tells us about how they implemented and how they run War Dragons with the power of Google Cloud Platform."
draft = false
episodeNumber = 26
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "War Dragons with Gustavo Ambrozio"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/PZjQAbwyaXV"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4jxt9q/episode_26_war_dragons_with_gustavo_ambrozio/"
image="/images/post/war_dragons.png"
+++

[Gustavo Ambrozio](https://twitter.com/gpambrozio), from [Pocket Gems](http://pocketgems.com/), tells us about how they implemented and how they
run [War Dragons](http://wardragons.com/) with the power of Google Cloud Platform.

Learn how an incredibly popular mobile game can scale and provide social features,
analytics, while keeping high throughput that enables low latency.

<!--more-->

##### About Gustavo

[Gustavo](https://twitter.com/gpambrozio) is a software engineer from Brazil with over 20 years experience, almost 8 years of
iOS experience (basically since the first iOS SDK was released) and founder of CodeCrop
Software. Gustavo has worked on everything from server software, corporate systems and now
is having fun living in sunny California developing mobile games for Pocket Gems.

##### Cool thing of the week

- How to get your ASP.NET app up on Google Cloud the easy way [blog post](https://cloudplatform.googleblog.com/2016/05/how-to-get-your-ASP-NET-app-up-on-Google-Cloud-the-easy-way.html)

##### Interviews

- [War Dragons](http://wardragons.com/) is a game by [PocketGems](http://pocketgems.com/)
- Google App Engine [docs](https://cloud.google.com/appengine)
- Scaling mobile games to a global audience using App Engine and Cloud Datastore [GCPNext video](https://youtu.be/9nWyWwY2Onc)
- Google Cloud Datastore [docs](https://cloud.google.com/datastore/docs)
- Google Cloud Memcache [docs](https://cloud.google.com/appengine/docs/python/memcache/)
- Splitting Traffic over App Engine versions [docs](https://cloud.google.com/appengine/docs/python/splitting-traffic)
- Google Task Queue Overview [docs](https://cloud.google.com/appengine/docs/python/taskqueue/)

##### Question of the week

- Everything You’ve Always Wanted to Know About Go Web Apps (But were afraid to ask) by Mark Bates [video](https://vimeo.com/115940590)
- A Survey of 5 Go Web Frameworks [blog post](http://thenewstack.io/a-survey-of-5-go-web-frameworks/)

##### Where can you find us next?

- We are both be speaking at [Google I/O](https://events.google.com/io2016/?gclid=CjwKEAjwsMu5BRD7t57R1P2HwBgSJABrtj-RLdXJancAhPAnY5w1dvQSvdfStpL7MTr3Pf6pvdYlLRoCfS_w_wcB) next week!
- Mark will then be at [Change the Game SF](https://cloudplatformonline.com/ChangeTheGameSummit-SF_Registration.html) 
- Francesc will speak at [goto; Chicago](http://gotocon.com/chicago-2016/presentation/Go%20tooling%20in%20action) next week and then will be riding the [AIDS/Lifecycle](http://www.aidslifecycle.org/) and if you want you can [donate](http://campoy.cat/alc).

<div style="text-align: center">
<img src="/images/post/war_dragons.png" width=500px alt="War Dragons">
</div>

{{< transcript "FRANCESC: Hi, and welcome to episode number 26 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing today?
FRANCESC: Very good, very happy, and very excited about the interview to Gustavo, Gustavo Ambrozio.
MARK: Yes, Gustavo Ambrozio from Pocket Gems is here today to talk to us about their game War Dragon and how their back-end infrastructure works.
FRANCESC: Yep. I love the talk that you gave with him at GSP next. I thought it was a very--it was a very interesting talk 'cause there was a lot of interesting technical aspects and also a bunch of dragons. So that's always good.
MARK: Whenever there's dragons, that's awesome.
FRANCESC: Yep, and he's back to, basically, tell us a little bit more about all the details and all the things behind the scenes on--what is the name? War of dragons?
MARK: War Dragons.
FRANCESC: War Dragons.
MARK: Yeah. 
FRANCESC: War of dragons is a worse name. I like War Dragons. 
MARK: War Dragons.
FRANCESC: Yeah, and after that, we're gonna be talking about Go. 
MARK: Yeah, we have a nice follow-up question from one of our listeners. Hiren, who is one of our, I think, more prolific commenters on the podcast.
FRANCESC: Yeah.
MARK: I challenge anyone to beat him for number of comments.
FRANCESC: We should send him a t-shirt. Like, we still have not done it yet.
MARK: Yeah. He's been on the podcast too. 
FRANCESC: Yeah. He deserves a t-shirt, maybe two. 
MARK: Yep.
FRANCESC: But before that, we're gonna be talking about the cool thing of the week, as often. And it's actually a very interesting cool thing of the week, and it's since .NET was open sourced some time ago, this effort has now been doable, which is you can now run .NET applications on Google Cloud Platform. 
MARK: Yeah, this is pretty cool. I know some people will be like, "But wait, couldn't I have just spun up a Windows instance before and done this myself regardless?" But I think the cool thing is is we've got now .NET client libraries for connecting to things like Cloud Datastore and other services that we have. So you want to not just run just regular old applications, but you want to interact with some of the managed services we have. I think that's a really, really cool offering. 
FRANCESC: Yeah. There's a blog post, and we'll put a link to it on the show notes, but basically, the important thing that I think is very exciting, is the fact that you--if you like running .NET applications and you really know how to do it, now you can still do it and be--and use some of the infrastructure that Google Cloud Platform offers. So one of them is Google Cloud Datastore. We talked about many times. So basically, this way of basically deploying--storing data that scales is completely managed so you don't have to care about it. There's a bunch of examples. There's a Hello World tutorial. There's a bookshelf tutorial. But basically, give it a try and let us know what you think about it. 
MARK: Yeah. That'd be great. 
FRANCESC: Okay, so I guess it's time to go and talk to Ambrozio. I keep on changing his name. I guess it's--
MARK: Well, that's his last name, so--
FRANCESC: Yeah, so Mr. Ambrozio. 
MARK: There we go.
FRANCESC: Gustavo.
MARK: Yeah, let's go chat with Gustavo. Thanks so much to Gustavo Ambrozio for joining us today.
GUSTAVO: Hi.
MARK: Lead software engineer at Pocket Gems and one of the genius brains behind War Dragons. How are you doing today?
GUSTAVO: Wow, I'm doing better now that I'm a genius. I didn't know that. But yeah, thank you. Thank you for that. Thanks for having me. 
MARK: More than happy to give compliments like that. So thanks so much for coming to talk to us today about Pocket Gems, about War Dragons, about the game itself. But why don't you tell us a little bit about who you are, what you do, all that sort of good stuff. 
GUSTAVO: So yeah, I've been--I'm a software engineer. I've been a software engineer for I don't know how long. I started when I was 15. Even before college, I started programming and today I'm 42. So you do the math there. I don't think I've ever done anything else in my life. I love it, and mostly I've worked in Brazil on non-gaming related stuff, some boring corporate stuff. And then, at some point, I started coming here, to San Francisco, a lot. And I just--I wanted to move here. I was like, "This is my place." This is where, you know, software engineers have to come, is the, you know, it's kind of like the--your--what do you call it?
MARK: The mecca. The mecca.
GUSTAVO: The mecca, yeah. So I decided to come here. So I started looking for a job, and I found Pocket Gems. They interviewed me. They hired me. They gave me a visa. So I moved, and I've been working there for the last three and a half years making games and having fun and yeah, you know, creating stuff. It's awesome. I love it. 
MARK: Excellent. So I know that you've been behind a game called War Dragons...
GUSTAVO: Yep.
MARK: Which has had some pretty decent success. 
GUSTAVO: Yes, we did. 
MARK: Wonderful. Do you want to tell us a little bit about the game, what it's about, what's the style of game, all that sort of fun stuff?
GUSTAVO: Okay, so the game War Dragons is a highly-polished, 3D, real-time strategy mobile game where you collect and control hundreds of dragons to take out enemy bases. In short, you get to control a lot of awesome-looking dragons and blow up a lot of stuff. It was Pocket Gems' first #D game with real-time synchronous multiplayer battles and our first game to come out with social features from day one, features like chat, guilds, forums, leader boards, all of that. That's the first game that, on day one, we had that. It's--development wise, it was our longest game from start to release. We never had a game that had that size before. We never had a game that had the size of the team that we have right now. So it was a great learning experience for us at Pocket Gems, to have to create a new--a new 3D engine. We had to create a lot of real-time communication stuff for mobile. It was a really exciting project to work on. 
FRANCESC: Cool, so I wanted to add, also, since you just showed us, that on top of having so many cool features, you also have a very cool ad, and I thought it was amazing.
GUSTAVO: Thank you. Yeah.
FRANCESC: So we'll put that on the show notes. It is--it is super cute and creepy and the same time. 
GUSTAVO: Yeah, we're trying to reach an audience of, like, this is supposed to show in, like, Comedy Central and ESPN. So imagine you're, like, a person, like, 30 years old, and you're watching ESPN and that thing comes on. It's, like, it's kind of weird. You have to watch it to understand what I'm saying but it's probably gonna get your attention a little bit. 
FRANCESC: Yeah, we'll put it in the show notes. That's for sure. 
GUSTAVO: It's very fun.
MARK: It's definitely--it's definitely worth watching. It's hilarious. 
FRANCESC: It really made me laugh, yeah.
GUSTAVO: Yeah, we like it. We like it. 
FRANCESC: Cool. So you said it was an--it's an Android game, and I'm interested on the Android side of it, too, but could you explain a little bit about. Since it's an Android game, what is the part on the Cloud? Like, why are you using the Cloud and how? 
GUSTAVO: So it's in Android and iOS. We started with iOS. We just released our Android version roughly a month ago. 
FRANCESC: Oh, cool.
GUSTAVO: And the Cloud, basically, allows us to--we need the Cloud to do all the social features. We need the Cloud--because it's a--it's a game where everybody's bases matter and everything, like, you can affect the game of other players. It's a very connected game. We need to have that connectivity. We need to have all the Cloud to support those features. So it's very, very heavily based on the Cloud. Like, we have a lot of features that are based on the Cloud. We like to release new events, for example, every week. We have, like, special events, and all of our special events are heavily based on Cloud technology. They're not built on the phone. We have something very generic on the phone, and then we can just push different events every week just using our Cloud technology. It also allows us to have, like, Android and iOS players at the same--playing together at the same time. 
MARK: Nice.
GUSTAVO: So it doesn't matter if you're playing Android, if you're playing iOS, you're gonna battle people with--within other platforms as well. 
MARK: Cool, and it also allows you to do a lot of stuff with analytics as well, doesn't it? 
GUSTAVO: Yeah, we've been doing analytics on the Cloud for, like, since the beginning of Pocket Gems. Like, basically, this--we always have a lot of heavy analytics on the Cloud for all of our games, right? So we have already this built into all of our games. We have a common platform that every game sends all their events and all the data that we need to figure out what are users enjoying, here? What are users not enjoying? Right? We'd use it to do A/B testing to see if a new feature is something that the users are gonna like or not, and then we decide to release features based on that data. 
FRANCESC: Cool. Are you also using analytics not only for features but also to, like, analyze performance and stuff like that? 
GUSTAVO: Yeah, so one part of the analytics that we do is collect performance from devices so you know, like, we can split by device type and by platform, and we know what places of the game are slowing down the user, where places are using too much memory. So we can also use that data to drive our development to make our game perform faster, have, you know, better FPS. We're always trying to have, like, very smooth animation, and it's--which is really hard with the range of devices that we work with. Like, if you have a very high-end device, it's easy to do that. But when you go to the lower-end devices, that we still want to support because still a lot of people are using those devices, it becomes really, really hard. And having all that data to help us focus on an area of the game that we need to improve performance and make the game smoother for everyone. 
MARK: Great. So obviously you've got a backend infrastructure. You're on our podcast which probably means you're using Google Cloud Platform. 
GUSTAVO: Yes.
MARK: Do you want to tell us a little bit about like, sort of, what backend infrastructure you're using, how you're using it, that sort of stuff?
GUSTAVO: Yeah, we've been using Google App Engine heavily since the beginning of Pocket Gems. So, like, from the first game that when, you know, our founders were--the company was just two people, the two founders, they started using Google App Engine, and we haven't looked back. Like, Google App Engine has worked for us really, really well and has continued to work with every game that we build. So we use Google App Engine a lot. We use Datastore a lot. We use probably every feature that Google App Engine has to offer we are using in very different ways, very, we think, innovative ways that we've used Google App Engine. There's a--I don't know if you want to mention the talk we did at GCP Next.
MARK: Definitely.
GUSTAVO: Yeah, so there's that talk. We talk about--a lot about that. We go into some more, like, technical details. We have some interesting tricks that we use at Pocket Gems to be able to run our games in a--in a smooth way in the Cloud. So I think we're also gonna put that on the--on the show notes. 
FRANCESC: Cool. So something I'm curious about, and I always ask this question every single time I see people doing real time. How are you doing it on App Engine?
GUSTAVO: So the part about real time. We're using a company called Pub Nub. 
FRANCESC: Okay.
GUSTAVO: So Pub Nub does a lot of real-time stuff as well. So because we already had a partnership with them, we decided to use that for real time. So--and I don't know what they have in their backend, to be honest.
MARK: Okay.
GUSTAVO: But we do some stuff which is near real time in Google App Engine. It's--it has low latency so you can do stuff like that if you're using it in a clever way. Like, we do a lot of stuff that requires us to be real time, like all the battle reports and know--whenever you're fighting someone you need to distribute resources.
MARK: Yeah.
GUSTAVO: That's all done using the Google App Engine. 
FRANCESC: Cool. 
MARK: So you're essentially doing, like, all your user data and your game data and, like, your matchmaking. All that stuff's in App Engine?
GUSTAVO: Yeah, all that part is in App Engine. Yeah, matchmaking, whenever you need to battle someone, like, to figure out who is a good user for you to battle. Because, like, we have millions of users and some of them have super strong bases and some of them have super, you know, weak bases because they just started playing. So you need to figure that out. That is all done using Google App Engine. We have leader boards which is also very computationally heavy. We use that on Google App Engine, actually, using some code that Google released as open source for leaderboards.
MARK: Yeah.
GUSTAVO: So we found that when we were building our leaderboard tech, and we said, "Yeah, let's use that." So we started using that, and we modified that a little bit to suit our needs. But that's the base of our leaderboard. What else is the very complicated there? Well, all the game user data. We do support people playing in multiple devices. That's also done through the Cloud. So whenever you, you know, quit your game, we save all your data in the Cloud, and if you load that game in another device, we load all that data from the Cloud. So all that game state management is done on Google App Engine. All our A/B testing is done using Google App Engine. We can release new dragons, for example, without releasing a new version of the game. We can do something like that, and it's all done using Google App Engine. Even our asset management is done using Google App Engine and using the Google Frontend cache. It's really fast for us. 
FRANCESC: Cool. So I'm assuming that when you say Google App Engine for--to store data, you're actually using the Datastore?
GUSTAVO: For the files, I'm not sure how we're doing that.
FRANCESC: Okay.
GUSTAVO: I'm not sure if it's Google Datastore. I think it is actually using Google Datastore. 
MARK: Could be Cloud Storage, maybe.
FRANCESC: Yeah, for files. 
GUSTAVO: Yeah, I'm not sure that part. I don't know. That part is really, really, like, we built that in the beginning. I never had to touch that code. This has been working for us for, like, six years I think.
MARK: It just works.
GUSTAVO: Yeah, it's just been working forever. 
MARK: That is good.
GUSTAVO: Yeah. Yeah. 
MARK: So obviously you've had some success. How have you had to, like, change how your application has been built since been running on App Engine, running on Datastore? Have you needed to make many changes to it as you--the scale of how many loads and how many players and how many games and battles have grown?
GUSTAVO: No. We haven't, like, at least since I started working with Pocket Gems, this has been working, like, wonderfully. We've never had to worry about our servers going down and all of that. It just--things just work. When we released War Dragons, we've--we had, like, big spikes that--it's showed in that presentation. You can see the big spikes that we had in, like, number of battles I think is the graph that I had, there. And we didn't have to touch anything. We didn't have to, you know, call Google and say, "Hey, we're gonna have a big spike here. So you guys better be ready." No, it's--it works and, you know, it scales up and scales down as you need it, and things just work. We have--we had a few adjustments that we did basically to control the costs that we have in Google App Engine. So there's some stuff that we were doing and the way that we designed it, it was using, like, too much--too much data. Or it was using--it was doing too many Datastore calls. So we redesigned a few of those things to do less calls and still have the same functionality to drive our costs down.
MARK: I believe you were using memcache a lot to do that, right?
GUSTAVO: We use memcache to do that. It's also in the presentation if people want some detail on how we do that. It's a very clever way to use memcache and Datastore and task queues. We use all of that technology and we were able to drive our cost down a lot. 
MARK: Great. I'm also really curious. I mean, you just released Android. You've had an iOS version out for a long time. Did you have to change the App Engine code at all for each individual, like, platform, for your mobile platform? Or was it the same? Or what happened there? 
GUSTAVO: Not at all. It doesn't change anything. We have, like, you can imagine we have a bunch of client code that we say, "If is Android, do this. If it's iOS, do this."
MARK: Yep. 
GUSTAVO: But on our platform side, on the Google App Engine side, I don't believe we have any of that. Any of that. All the communication is done completely the same. 
FRANCESC: Cool. Could you--could you tell us a little bit about how you're doing it? Is it a REST API, or?
GUSTAVO: It's mostly REST API. Like, it's really easy to build REST APIs on top of Google App Engine. So we mostly use RESTful APIs. With a few exceptions there, for example, for--just to get files is not REST. It's just plain old HTTP...
MARK: Yeah.
GUSTAVO: There's not a lot of stuff going on there. But for all the data communication, it's all doing REST. And with Jayson as the--as the formatter we send back and forth. And it's really easy to use. On the mobile side as well, like, there's, you know, millions and, like, thousands of libraries out there that's gonna do that for you right out of the box without using anything, like, crazy. 
FRANCESC: So the question that I always ask too, for people that write code on App Engine, are you writing it in Go?
GUSTAVO: Sorry?
FRANCESC: Is it written in Go? What is the language that you use for [inaudible].
GUSTAVO: Oh, we use Python.
FRANCESC: Python, cool.
GUSTAVO: We use Python.
FRANCESC: It's fine. It's fine.
GUSTAVO: No, Python is awesome. I love Python. I haven't written anything in Go. So I'm not gonna--not gonna bad-mouth it, so. 
MARK: Excellent. So you do some really interesting things. We covered this in our presentation, but I'd like to just go over it again because I think it was really clever. How you use App Engine versions and match those up to client versions. Do you want to talk a little bit about how that works?
GUSTAVO: Sure. So, you know, Google App Engine versions, for people that don't know, it's basically, you can deploy various versions of your code in Google App Engine. Then, Google App Engine's gonna give you a different URL for every version that you have. Traditionally, this is used for testing. So if I'm a developer, and I'm developing a new feature, I don't want to keep deploying that to production. So we deploy that to a different version of Google App Engine, and then I can test that using that different URL, right? Without disturbing production code. But at Pocket Gems, we devised a different use for that. So whenever we release a new version on mobile, what happens is sometimes we have to break compatibility with a previous version of Google App Engine. And traditionally, people have been doing that with if...else. If...else, if version is this, do this. If version is that, do that. And then you end up with a lot of code that is old code and awful to read, right? So we don't like that. So what we do is, we basically, whenever we releasing a new version of Google App Engine, we don't care about breaking compatibility. And what we do is, when we released a new version of the game, we first deploy the version, the new version, we deploy in a different URL. And we configure our client code to go to that URL instead. So then, when people start downloading that new version, they go to the new version of Google App Engine. And the old versions still go to the old version. So we don't break compatibility there. Like, it all works for everyone. And then, at some point, what we do is, we force users to upgrade. So a few days after we release something, we force users to upgrade. Then, everybody upgrades, and we are able to take down the old version, and now, the new version becomes what is called the default version. And everybody just connects to that version. So we're able to very easily break compatibility without actually breaking anything. 
FRANCESC: That is very cool. I guess that that's the power of being able to force clients to be updated. That is, yeah.
GUSTAVO: Yeah, we didn't have to do that. Like, we only do that because also, we sometimes break compatibility between--in battle. So when you're battling people online with--the new version might have a different spell that we created. And then, if I'm fighting you and you have the old version, and I do that spell, that spell's not gonna work on your end. 
MARK: Yeah, hmm.
GUSTAVO: So now things become out of sync. So we break compatibility basically not because of server code. Like, if you think about server code, we could just keep, like, ten versions running there. 
MARK: Yeah.
GUSTAVO: Right? It doesn't--it wouldn't cost us much or anything else, I think, more. And it's not--it wouldn't be such a big deal. But there's this client part that does break compatibility when people are playing with each other online that would break. So that's why we force people to upgrade, basically.
FRANCESC: Yeah, that is interesting. Otherwise, people could use the strategy of, "I'm not gonna upgrade. So no one can attack me." 
GUSTAVO: Yeah, but then you can't attack anyone, and yeah, there's. 
FRANCESC: Yeah. 
MARK: Yep.
GUSTAVO: Yep. You lose a lot if you don't do that. And the social aspect of the game, I think, is one of the most important parts. We've been seeing that that social aspect of it is what drives people back. Like, we have guilds too. So you--everybody's part of a guild, and your guild just placed together to fight other guilds. And your guild members can help you, when you attack, with their dragons. So that aspect is really important for everyone. So you can see people. Whenever we release a new version, I get a message from my guild leader saying, "Hey, you should upgrade your game because otherwise we can't help you." And, you know, "So upgrade right now so we can all still help each other." So it's a really--it's really--that aspects really nice. So upgrading is important for users not just for us. 
MARK: Great. So obviously we--I mean, not obviously, but we also covered this in the presentation. But again, I thought this was really interesting. You use, like, Datastore in some really interesting ways to do matchmaking. You want to talk a little bit about how that process works? I know you also use task queues and some other fun stuff. 
GUSTAVO: Yeah, so for matchmaking, it's kind of a complicated thing because what I said before. You have millions of users, and every user's gonna have a different level. So what we created, basically, we created a concept of bucketing users into matchmaking, like, similar matchmaking levels. So whenever you do something that changes what your power would be. Like, for example, you upgraded a building or you upgraded a dragon or you just applied some different, what we call, runes to a dragon. For example, your powers change there. You become more powerful. And whenever something like that happens, we put a task in the task queue to basically recalculate what bucket you should be in. And then, at some point, that task queue runs. We recalculate your power, and we see in what bucket is better for you to be. And then we place you in that bucket. That bucket now, like, that you--that bucket now is something that whenever you want to battle someone, we just go to that bucket and we pick some player that's in that bucket. We know that they're gonna have a very similar--very similar level to you. So the battle's gonna be challenging. It's not gonna be something that's gonna be super easy for you to beat or it's gonna be impossible for you to beat. We know that, you know, it's possible to beat. You're gonna lose some. You're gonna win some. But it's possible. But with millions of users, we couldn't find any better way to--better way to do that and still be, like, perform well, right? Because whenever you battle, that's one of the most important things. We need to respond really fast. We want to--we want you to go into battle as fast as we can. So if we have to wait for, you know, the server to come back with something and it takes five seconds, it's gone. Like, your user is already out of the game by that point. 
MARK: Great. So you're able to leverage task queues to be able to push that into the background, so the user doesn't have to wait for it, and we can keep that data, that complicated data processing, happening in the background. 
GUSTAVO: Yeah, and it's not that important to change your bucket right then, right? You can wait a few seconds. Your previous bucket is still competitive. It's still very similar to what you are, right? You're not gonna be super easy. So if we--if it takes five, ten seconds to change your bucket it's not a big deal. So we can--we just push that to the task queue and the task queue does that calculation for us in the background. 
MARK: Excellent. Cool. 
FRANCESC: So I think that we're actually running out of time. But, as always, we like to give the opportunity of telling us whatever you feel like you left out. 
GUSTAVO: I just want to say that we are--we are hiring engineers right now. We're hiring--especially we're trying to--we're looking for managers and leads. It's really--it's a hard position to fill. So take a look at our website. We're gonna have that in the--in the notes I believe as well. Take a look there, and if you're interested, just contact me. It's Gustavo@pocketgems.com. If you're around for a Google I/O, if you want to come and visit the office, send an, you know, just shoot me an email. You can come. We're here in the city pretty close to where the conference is gonna be. 
MARK: I've been up to the offices. The offices are very nice.
GUSTAVO: Yeah. Yeah, we have a very nice office. Thank you. 
FRANCESC: I have not been invited yet, so. Just saying. 
GUSTAVO: All right. You're officially invited now. 
FRANCESC: Cool. 
GUSTAVO: Yeah, whenever you want to come. Yeah, so we have that position open. We're also gonna be here for--I'm gonna be at WWDC. If you're here for WWDC, just look me up as well. We can--we can chat. We're happy to have you in the office and show you around. 
FRANCESC: Cool. Well, thanks so much for taking the time today to come to the office and talk to us. 
GUSTAVO: Thanks for having me. Your office is also really awesome. 
MARK: Thank you. Cheers. 
FRANCESC: Thank you very much, Gustavo, for such a great interview. I learned a lot, and I saw a lot of dragons on the video. You should definitely check it out again. That ad is very, very funny. 
MARK: Yes. 
FRANCESC: But we are almost about to finish the episode. But we will not finish before the question of the week. And the question of the week, as we said, is coming from Hiren Patel. 
MARK: Yeah, he messaged us after listening to our episode and was quite interested in Go but hadn't played with it. He comes from a Python background. Was immediately curious about web frameworks in Go. It's a common question. I've heard it definitely a few times before. 
FRANCESC: Yeah, it's actually very--it's a very interesting question 'cause, especially for people coming from Python, and even more coming from Ruby, they tend to miss these frameworks. Such as, if you're coming from Ruby, you know there's Ruby on Rails. 
MARK: Yep. 
FRANCESC: If you're coming from Python, there--you know, there's Django. 
MARK: Yep. 
FRANCESC: If you're writing Go, what's up? 
MARK: Yeah. 
FRANCESC: Yeah. So there's actually--my advice on this is, frameworks are--so, the first thing to understand is actually the difference between what a framework and a toolkit is. And while in many languages you're gonna be finding frameworks, such as Ruby on Rails is clearly a framework, frameworks will force you to adapt your code to whatever they feel the code should look like. 
MARK: Mm-hmm. 
FRANCESC: So that is something that if that is what you're trying to follow, that's totally fine. And if your use case matches what they are providing, then it's great. 
MARK: Yep. 
FRANCESC: Now, when you try to modify it might be really hard. So instead, what the Go community tries to drive towards, it's toolkits. So you have a bunch of toolkits. You have things like--my favorite one is Gorilla. 
MARK: Love Gorilla. 
FRANCESC: Yeah. It's a web framework. It's very, very simple, and basically, you can pick and choose whatever you need to use. So you have like, "Oh, I need to use a different way of routing requests around my web handlers." There's a way of doing that. There--I need to do sessions, or whatever. Like, there's a bunch of different tiny packages that basically you can add to your code and they'll integrate very well with the standard net/http package. So that is great, and if you want to know more about others, there's actually a bunch of them. We will put a link to a post from last year, from The New Stack, that basically, they cover five Go frameworks. And there's Beego, which is an actual framework. There's Martini, which is a very lightweight framework that uses a lot of reflection. There's, like, kind of, like, trying to be like Go on Rails, and it did not work that well. So the author of that framework, Jeremy Saenz, hi Jeremy, he created a second version. It's called Negroni. It's much simpler. It's much more lightweight. So if you think about doing--using something that's out, Negroni's also a very good options. And there's GoCraft, and then there's also Gorilla. So check it out, and also, there's a very good talk from my friend--I lost the link.
MARK: Mark Bates. 
FRANCESC: From my friend Mark Bates. He used to be a Rubist, and basically, he gave a talk at Gotham Go two years ago. And the talk was about, "Okay, so where is Go on Rails?" And he basically answers that question. So the name of the talk is everything your--you've always wanted to know about Go Web Apps but were afraid to ask. And of course, we'll have the link to that on the show notes soon. 
MARK: No, that sounds great. I think, I mean, we talked a little bit about it but I think the standard library has defined such a nice set of, like, standard interfaces and way to--ways to, like, interact and manipulate it. That I feel like the Go community is more about composable libraries and, like, composable toolkits to build the eventual software that you need. Than--rather than building one huge monolith of opinionated framework. 
FRANCESC: So that is--that is actually something that I really appreciate, and I'm thinking about maybe writing about it, is about the power of very simple interfaces and how they allow you to extend the behavior of the existing code, right? So if you think about it, the http package has this interface handler…
MARK: Yeah.
FRANCESC: That has only one method, serve http, super simple.
MARK: Yep. 
FRANCESC: But that actually powers all the other toolkits we have on it.
MARK: Yeah, and it's--and, you know, makes that super, super powerful. It's very unique C, right? You write the one tool for the one thing and then you pipe that to another thing and another thing, another thing. 
FRANCESC: Yep. Yeah, interface is like the pipes of Go? Yeah, why not. Why not. I can say the channels are the pipes of Go. Yeah, both, whatever. But yeah, anyway, check the video. Check the pod--the blog post and let us know what you think about it. 
MARK: Absolutely. 
FRANCESC: And before we leave, I think it's important to mention the fact that we, in our cool thing of the week, you might have heard it, like, yesterday. A lot of cool things going on at Google I/O. 
MARK: Yep. 
FRANCESC: We will be covering them during next episode. Until then, just--you can check the videos and everything is being...
MARK: Yep.
FRANCESC: Not open sourced, streamed, live streamed. 
MARK: Live streamed. If you check the hashtag #IO16, I'm sure there'll be plenty of content out there.
FRANCESC: I think it's gonna be hard not to--not to find out all the new things before next week. But in the meanwhile, I'm hoping you will find them--find them around, and we will cover them next week. And next week, we'll be talking with John Feminella.
MARK: Yeah, we're gonna have a interesting chat about unikernels which is something up and coming. It keeps popping up in conversations. So we're gonna have a good, deep conversation about that.
FRANCESC: Yep. So if you're curious about unikernels, tune in next week. 
MARK: Great. All right, well, we'll definitely be at I/O--well, now, when this podcast is released. 
FRANCESC: Now. Right now.
MARK: Right now. Where are you gonna be after that?
FRANCESC: So I'm going to be--so by next week, I will be in Chicago for GOTO. And after that, I'm going to try to relax. Well, actually, as I said, I'm gonna be biking from San Francisco to L.A. It's LifeCycle. But in the meanwhile, I'm going to be preparing my talk for July in GopherCon.
MARK: Oh, yes. 
FRANCESC: Yeah, and today I got a very exciting piece of news which is I will be doing the opening keynote.
MARK: ooh. 
FRANCESC: I am very excited. 
MARK: Nicely done.
FRANCESC: Kind of--kind of scary to be doing the opening keynote at GopherCon when one of the speakers literally created the language. Rob Pike will be there too, speaking, so.
MARK: No pressure. Just no pressure. No pressure at all. 
FRANCESC: No pressure. No pressure. But yeah, super excited about that opportunity. 
MARK: Excellent. I think my big one's coming up June 3rd, here at the Google SF office. We are having the Change the Cloud Summit. So if you're interested in building games and interacting with the Cloud, either from a multiplayer or possibly analytics perspective, definitely sign up. We'd love to have you come and hang out with us for a day. 
FRANCESC: Cool. Well, thanks so much, again, for taking the time to record this episode with me today. 
MARK: Thank you for taking the time to record it with me. 
FRANCESC: And talk to you next week. 
MARK: See you next week. 
{{< /transcript >}}