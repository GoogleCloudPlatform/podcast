+++
audioDuration = "00:36:28"
audioFile = "Google.Cloud.Platform.Podcast.Episode.202.mp3"
audioSize = 52910246
categories = ["Supersolid", "Gaming", "Agones"]
date = "2019-11-06"
description = "This week, Mark and Jon bring us a fascinating interview with Kami May of Supersolid, a gaming company in London."
draft = false
episodeNumber = 202
hosts = ["Mark Mirchandani", "Jon Foust"]
title = "Supersolid with Kami May"
image="/post/episode-202-supersolid-with-kami-may/images/hero/hero-EP-202.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dsl4ry/episode_202_supersolid_with_kami_may/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Mark](https://twitter.com/markmirch) and [Jon](https://twitter.com/syntxerror1) bring us a fascinating interview with [Kami May](https://twitter.com/kamiliamay) of [Supersolid](https://twitter.com/supersolidgames), a gaming company in London. With the help of Kami May, Supersolid recently launched their first multiplayer game, Snake Rivals. This session-based game puts players in an arena where they can choose from three modes: endless, gold rush, or battle royale.

To produce the game, Supersolid makes use of many GCP products. Snake Rivals is powered by Kubernetes and Agones, which Kami chose because it offers functionality that works well with gaming. It provides server allocation which allows players to continue play even during an update, has the ability to scale, allows labeling, allows for different gaming modes, and more. To reduce latency, Supersolid operates in nine regions. Supersolid uses BigQuery and continuously gathers data so they can make adjustments to make sure game play is efficient, fun, and functional. Kami explains that navigating the world of multiplayer gaming for the first time was tricky, but the Google support team has been very helpful!

<!--more-->

##### Kami May

[Kami May](https://twitter.com/kamiliamay) is a Senior Server Developer at London-based mobile games studio, Supersolid. Her lifetime passion for video games drove her to join the games industry soon after graduating from university in 2016. Since then, Kami has worked on multiple titles for mobile, PC, and console. Most recently, she's been bringing Supersolid's most ambitious project to date - Snake Rivals - to life, powered by Agones on GCP. In her free time she can be found at the top of the ladder on Path of Exile, chasing the 6k MMR dream on Dota 2, or searching for London's best fried chicken.

##### Cool things of the week

* Keep Parquet and ORC from the data graveyard with new BigQuery features [blog](https://cloud.google.com/blog/products/data-analytics/keep-parquet-and-orc-from-the-data-graveyard-with-new-bigquery-features)
* Machine Learning: An Online Comic from Google AI [site](https://cloud.google.com/products/ai/ml-comic-1)
* Bring Your Own IP addresses: the secret to Bitly’s shortened cloud migration [blog](https://cloud.google.com/blog/products/networking/bring-your-own-ip-addresses-the-secret-to-bitlys-shortened-cloud-migration)

##### Interview

* Supersolid [site](https://supersolid.com)
* Snake Rivals [site](https://supersolid.com/games/snake-rivals)
* Agones [site](https://agones.dev/site/)
* Kuberentes [site](https://kubernetes.io)
* Go [site](https://golang.org)
* Cloud Load Balancing [site](https://cloud.google.com/load-balancing/)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Supersolid Careers [site](https://supersolid.com/careers)
* Snake Rivals on Google Play [site](https://play.google.com/store/apps/details?id=com.supersolid.snake&hl=en_US)
* Snake Rivals on iTunes [site](https://apps.apple.com/my/app/snake-rivals-pvp-games/id1440185894)

##### Question of the week

What are best practices for setting up user accounts in Cloud IAM?

* [Quickstart Guide](https://cloud.google.com/iam/docs/quickstart)
* [Service Accounts Docs](https://cloud.google.com/iam/docs/service-accounts)
* [Using IAM Securely](https://cloud.google.com/iam/docs/using-iam-securely)
     
##### Where can you find us next?

Mark will be working on blogs and videos at home.

Jon will be at [AnimeNYC](http://animenyc.com), [Kubecon](https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/) in November and Google Kirkland for an internal hackweek.

##### Sound Effect Attribution

* "Small Group Laugh 4, 5 & 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Human has been Nutralised" by cityrocker of [Freesound.org](https://Freesound.org)
* "Laser Automatic Heavy" by dpren of [Freesound.org](https://Freesound.org)
* "Gong Sabi" by Veiler of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to episode 202 of the weekly Google Cloud Platform Podcast. I'm Jon Foust, and I'm here with my colleague and friend, Mark. Hey, Mark. How's it going?" >}}

MARK: Hey, Jon. Always good to see you. 

JON: [LAUGHS] Well, we can see each other right now. 

MARK: Well, OK. It is good to see you now and always. 

JON: Yes. [LAUGHS] 

MARK: And I feel like the past month has just been so full of different activities, we haven't had much of a chance to chat until now. 

JON: Yeah, we also need to find some time to play some games online as well. 

MARK: It's just a bucket of fun whenever we get to work together. 

JON: [LAUGHS] On this episode of the podcast, we're going to be talking to Kami May from Supersolid. They're going to talk about their new game "Snake Rivals," and how they built it using Google Cloud. 

MARK: Yeah, it was really awesome to get a chance to chat with Kami. You wouldn't think about the amount of work that needs to go into a mobile game like this. 

Because when you think about it from the mobile perspective, it's just playing a game. But there's all these servers in the back end, and you have to figure out how to actually run those and then distribute it out based on the number of players and scale it. So it's a really, really great conversation. 

JON: Right, and it's kind of interesting as well because "Snake Rivals" actually runs on Agones, which is an open source project. And that's not something that a lot of companies would take the leap on using, especially when it's just in its infancy. 

I think Kami is going to mention how early on they started using Agones and how engaged they were in the community. So it's kind of interesting to see a studio actually jump on board with the open source project, and really run with it, and to see how successful they've become with "Snake Rivals." 

MARK: Yeah, it was a great conversation. And I get the feeling that if we say Agones three times fast, Mark Mandel, will appear and give a tech talk on how I built it. 

SPEAKER 1: That was when I suddenly thought, "What if there was a library for hosting, running, and scaling dedicated game servers on Kubernetes?" What a bonzer idea. 

JON: Right. [LAUGHS] And then we're also going to get into our question of the week, which is "What are our best practices for setting up user accounts in cloud IAM?" 

MARK: Yeah, I've heard this one from a lot of people, especially with relation to some of the billing content that's been coming out. And I think there's some great best practice tips. I feel like there's a good baseline. We'll link to a quick start in the show notes as well. 

But it's really helpful for everyone just to kind of get a feel for how the IAM part works of Google Cloud so that you're able to make sure that you've got the right details and the right access for people. So we'll go into that a little bit later. 

JON: Right. I struggled when I first joined, and I was ramping up on a bunch of things, giving myself and others who wanted to collaborate the right privileges to my projects. And it was quite a journey, but I can say that I'm up there with the big boys now. [LAUGHS] So let's get into our cool things of the week. 

[MUSIC PLAYING] 

So the first thing, BigQuery has now had beta support for [INAUDIBLE] and Parquet, and ORC file formats in cloud storage. And these new features allow you to build a bridge between your data sets and help you be a little bit more flexible. 

So your data stays in your preferred open source formats in cloud storage. And you can use BigQuery's standard SQL for analytics and data processing. So check the blog post out. I don't want to ruin too much, but it's quite interesting. Parkay. 

SPEAKER 1: Butter. 

JON: [LAUGHS] 

MARK: Yeah, I think it's a great way for people to have more ways to use BigQuery without needing to go through some sort of ETL process or without having to change their files. 

The more ways you can ingest and then query that data, the easier it is, the better off you'll be. 

JON: Right. And we've come a long way from ETL. And I can say that it's been quite a hassle dealing with bad data sets. I'm just glad to see additional features being built onto BigQuery. 

MARK: Absolutely. Well, the coolest thing I found this week was this fun little machine learning comic. Actually, I have no idea where it came from. It just kind of popped up on my radar. But I actually liked it a lot. It follows a worker working for a typically difficult boss, going down the path of machine learning. 

And then a robot and a cat come out of nowhere because, well, why not, and teach her a little bit about machine learning and some of the basic concepts there. And machine learning is absolutely very far from my area of expertise. So I'm really excited to-- I read through it. I'm like, oh. I start to get these concepts now. So I'm really excited to have this comic available. 

It'll definitely be in the show notes. And I highly recommend it, even if you're not in that area whatsoever, just to get a baseline understanding of what some of these terms are about, and to see if it peaks any interest. 

And it sounds like they're going to be coming out with a second one that goes more into neural nets. So I'm sure that will be way over my head, but I'm definitely looking forward to it. 

JON: That's awesome. I don't think I would put cats and robots together, so I'm kind of interested. I might take a look. 

[CAT YOWLING] [GUNFIRE] 

SPEAKER 2: (COMPUTERIZED VOICE) The human has been neutralized. 

MARK: Well, everyone knows machine learning is only for identifying pictures of cats, right? 

JON: [LAUGHS] And clouds and cheese. 

MARK: Oh, yes, I forgot about cheese. 

SPEAKER 1: Don't forget dogs. 

JON: Yes. 

[LAUGHTER] 

And to round things off for the cool things of the week, Bitly has actually migrated to Google Cloud. So that means you can bring your own IP addresses to Google Cloud network. 

And you're going to be able to distribute those and load balance those across 20 different regions. So if you're familiar with Bitly and all it's features, they're now on Google Cloud. Go give it a whirl. 

MARK: Yeah, I think a lot of people use Bitly mainly link shortening, but it's great to be able to bring your own IP address and have a lot more control over that process. 

JON: Exactly. All right, so now we're going to be joined by Kami May, and she's going to tell us a little bit more about Supersolid and how they got started with Google Cloud. 

[MUSIC PLAYING] 

So on this episode, we're joined today by Kami May from Supersolid. Hey, Kami. How are you doing? 

KAMI: I'm good. Thank you. 

MARK: So Kami, we're very excited to have you on the podcast. I've actually seen a lot of your work, and I've heard quite a bit of you from a specific Slack channel that you're a part of. Can you tell us a little bit more about who you are and what you do? 

KAMI: Sure. I'm Kami. I'm senior server developer at Supersolid. We are an indie mobile game studio based in London. And last week, we launched our first ever multiplayer game, "Snake Rivals." 

It's now live on iTunes and Google Play. And my biggest role in this project was to bring the game online. And we chose to use Agones and placed in GCP. 

JON: Awesome. Can you tell us a little bit more about "Snake Rivals?" Because both Mark and I are very big gamers, so we would love to hear more about it. 

KAMI: It's a session-based game. So you go into the arena, and you have three modes to choose from. There is Endless, where you just play until you get bored. The goal is to get you the longest snake. There is Gold Rush, where the goal is to kill as many snakes as you can in three minutes. And there is Battle Royale. That is a very self-explanatory mode. 

[LAUGHTER] 

It's basically like Slither.io, but on steroids. 

[LAUGHTER] 

MARK: So it's that classic snake game that I think most people probably remember, possibly-- 

KAMI: Yes. 

MARK: --from their had old cell phones, but now taken up a notch with multiplayer. 

KAMI: In 3D graphics. 

JON: I can imagine with these specific game modes, especially with a battle royale mode, there's probably a need for a very, very massive scale. Can you tell us a little bit more about how you got up-to-date in running with Agones? 

KAMI: Sure. So when we planned this game, we didn't really have any experience on how to solve the online problems because we have never made a multiplayer game before. 

And so we looked into a few options, we did a lot of research. And we stuck that Kubernetes must be the way to go because in terms of price and resource management, it would cost the least to do what we need. 

And we looked into a few options on where to go with the Kubernetes. And we found Agones project at that time. It was extremely early in development process. It was in August 2018, but we decided to give it a go anyways because we have such a small team. 

It was only two server developers working on this game. One of them was purely a game server developer. So he didn't do any sort of demos. And then there was me, who had to figure it all out. And there was really no time for me to write everything and launch the game in a year. 

So due to lack of resources, we decided to give a go to Agones, even if it was alpha project at that time. We tried it, and it worked for us. It worked very well. And we stuck with it. And it launched 0.1 just as we launched our game, so it was extremely good timing. So we went into production as Agones was released in full release rather than any sort of beta. 

MARK: Which is just amazing timing, first of all. 

KAMI: Yes, [LAUGHS] it was. 

JON: [LAUGHS] 

MARK: But obviously, if Mark Mandel were here, he could explain Agones, and I'm sure several of our podcast listeners have heard it before. Let's give a basic rundown for people who may not have heard of it. What did Agones do that was different from just running Kubernetes by itself? 

KAMI: OK, so Agones is a custom resource on top of Kubernetes. And it has very basic functionality that is absolutely required for game servers, such as server allocation and not killing the allocated servers that already having players on it. 

So even if you roll out the update in mid-session, players that are already in session should never lose their progress at that time. So it had simple allocation. It had ability to scale, even though it was not, at first, in Agones when we started using it. and I had to write custom code to do that, but in further releases, they added those features. 

There is also ability to scale during live. So let's say we suddenly have a massive surge in players, we can simply change the buffer, deploy, and, with no downtime, we have a lot more available servers. 

It also has a way to add labels so we know what's going on in that particular game mode. It has different fleets, so we can have different game modes in different fleets. 

So for example, our game server code is the same code for all modes. We just add different variables to set environment for different game mode. So all those features were crucial for a game. And without Agones, I would have to write it all myself. 

JON: Awesome. So it sounds like there were things that were kind of hard, especially when you first started using Agones because it was only 0.1. So I can imagine that there were some things that were kind of hard and some things that were really easy. So can you tell us a little bit more about what you found very hard dealing with and what you found very, very simple. 

KAMI: So I guess, difficulties were the bugs. [LAUGHS] So I guess, when you start using the software, you're aware that it's an alpha release. But because you're so brand new to this whole scene, you are unsure whether it's a bug or whether it works as expected. 

There were a lot of conversations on Slack, where I would bring it all up, and I was able to find quite a few bugs. I think it was also because we went into production with Agones very early on, and we found a lot of things that otherwise simulated scenarios wouldn't be able to catch. 

There was a bug where, if the pod shut down, the game server would remain. And so the games server would not point to any pod. So those things were quite difficult to deal with. A lot of manual work had to be done. 

And, I guess, the easy part was literally the rest. 

JON: [LAUGHS] 

KAMI: Like it was just very easy, even if you have no previous experience using Kubernetes. If you have some server engineering knowledge, it will be quite straightforward. 

MARK: Yeah, because you mentioned that you were coming into this with one other game server engineer. And between the two of you, you didn't have a lot of familiarity with, sounds like, even Kubernetes itself. 

KAMI: No, we didn't use Kubernetes at all before. All we used was Heroku actually. Our previous games are very kind of single player type of games where you have some validation, and it just needs to have an HTTP server that validates your actions. 

In this case, we need a TCP connection validate all the movements of the players. And this all has to be separate servers for each game. So this was something that we didn't really do before. 

We had some guidance from Google once we decided to go with Google, and that was very helpful. We had some courses given to us. They gave us some credits to view the Google University type of thing. And that was all very useful. 

JON: That's awesome. I can hear a lot of troubleshooting coming from Google, but I'm curious. Working with Agones and in open source manner-- I know that you're a part of the Slack, because I'm also a part of that's Slack. And I know how quite frequently you post in that Slack. So I'm pretty sure you and Mark are really good best friends. But can you tell us a little bit more about how it is dealing with a gaming solution in open source? 

KAMI: I did have to go through a lot of logs in the Agones sidecars to find out what's going on, when it is our fault, when it is Agones doing something funny. 

And I find that when we got to the point where we had to really dig into the logs, they were written so well and so descriptively, it would like literally point to the issue almost straight away. So that was extremely useful. 

There are some times that you're not quite sure what you can do about the issue, and you go through Agones source code, even though I've never written a line in Go. 

I just look through the source code to find where the code is coming from, where is this error coming from to try and figure out what is going wrong. And I think it being open source really helped because I could really find where the issue was coming from sometimes. 

MARK: So obviously, you were using Agones from when it was still in testing phase. And it sounds like there was a lot of active communication between you, Mark, and other people working on it, which actually is pretty cool. Right? 

Sometimes you get to work on open source platform, and you can make some pull requests and those sorts of things. But it sounds like there was a really active communication channel. 

How did that kind of affect your launch window? When you've got a deadline, game developers often have a big rush, especially towards the end when they're trying to get ready to launch. How is that communication kind of-- did it help you, obviously, in kind of launching the game? 

KAMI: Yeah, I think so. Actually, we had a lot of calls ongoing in the year. We had meetings last year with Google and Mark. And we also had some third party coming in assessing our setup to tell us whether or not we're production ready. 

They looked at our setup. They said it was very good, [LAUGHS] especially considering the team size. There were some really good pointers. So there were difficult questions we had to ask because we really didn't know which direction to take. 

And the example is global load balancer. How do you load balance six different regions under one IP? Those things we were not aware of. And asking Google really helped us to come with solutions. And we already had deadlines set quite a long time ago that was not relevant to the help. 

So we had a deadline that was promised by our CEO to Google and Apple, and we had to deliver. And, I guess, there was one hiccup that we had, which was quite unpleasant, is that our quota increase was really delayed. And we were quite unsure whether or not we would get enough quota in time for launch. 

However, once we emailed our account manager, that was all done so quickly. [LAUGHS] So I think it's just reaching out to people at the right time is the key. And Google is extremely helpful at that. 

JON: Awesome. So it sounds like there were a couple of things that seemed to start to get to you towards launch. So I'm kind of curious, what happens post-launch? 

What happens when your game's running and everything looks very well? But there needs to be a plan. I'm know Agones scales very well, but there needs to be a plan for any type of server improvements that can happen post-launch. So can you tell us a little bit about that? 

KAMI: Yeah, sure. So our further plan is actually-- currently, we have nine clusters. So we're live in nine different regions for now. We'll Google assess in the future and remove some of them if they have no load. 

So currently, each region is very independent, and they all have all the services running in each region. However, that's not very cost-efficient. And some services are not very time-sensitive. So we want to move all of those into the central cluster, probably in the US east region, and save money on resources but also to improve updating. 

So right now, deployments are quite elaborate. We have to deploy to each region. And we would want to make minimal changes to each region. And having it all centralized would make it a lot easier. 

MARK: Well, ultimately, it's like a trade-off, right? It's a trade-off between being able to have these regions closer to the people who are playing the game versus kind of the complexity of the deployment pipeline. But in the case of actually playing a game, especially a networked game, it's always going to be to minimize the latency for those players, right? 

KAMI: Yes, so game servers will most definitely remain in all the regions that we want to provide the non-sensitive data, like just validating when you change your name, saving your preferences. This doesn't require immediate response. So it's fine if it has a bit of latency. 

JON: So I'm curious, how do you actually measure exactly where you wanted to locate? 

KAMI: So this was a [LAUGHS] big problem. We were looking at the map, and we were looking at what zones does Google provide and really thinking what we want to do. 

So for launch, we really wanted minimal latency for everyone around the world. So we kind of went above and beyond and created nine different regions. Once we have more data, once we know what ping is where, we can assess and decide maybe some regions are not really required. 

Because in Asia, we have three different regions. That seems a bit of an overkill. So for now, we have nine, and we decided it just by looking at the map and thinking what latency would be effective for everyone. Because this game can't hold more than 150 MS latency. Post that, it gets hard to play. 

MARK: So that means there's probably a lot of work going into the data collection of users playing the game and understanding what kind of metrics you can measure on them. Can you talk a little bit more about getting information from the players that have played since launch? 

KAMI: Well, all of this data is coming from the cloud, so we have a lot of data analytics going into our BigQuery. I'm not a data analyst, but our all data analytics is also on Google. 

And we have local dashboards that we can check every day, so that's one of the things we usually do every morning. We open the [? looker ?] and look what went wrong, and hope nothing did. 

So all of the analytics comes from actual client. We sometimes get some feedback from players, but it's usually less useful because we need to know exactly what happened for that case. 

JON: So I could imagine that dealing with a lot of servers, and there has to be a lot of logs that you have to deal with as well. So I'm not sure if you're using any Google products for that. How do you trace the logs for anything that can possibly go wrong with any of your users? 

KAMI: Google has amazing log tool. Like this was so good, life-saving. It makes searching for particular logs extremely easy, Obviously, we had to put some work into it. 

We had to make sure that our logs print out the data that would be useful for debugging. So we had many iterations over releases to know, oh, we are trying to deal with this issue, but we are missing this data. 

So we keep adding to the point where, in production, now are more or less confident if something goes wrong, we can find what happened to you because we have sufficient logging. And Stackdriver makes it so easy to find it. It's so useful. 

MARK: Well, it sounds like you've gotten a lot of advantage out of using the Google Cloud ecosystem as a whole, right? You mentioned BigQuery, Stackdriver, and then, of course, Agones on Kubernetes. Are there any things that you've run into that you feel like were missing or things that you feel like would have helped you along that way faster? 

KAMI: I guess, there are some things that are there but are harder to set up. So like I'm really not a professional here with VPCs or load balancing stuff. 

And I have to such as kubemci to set up local load balance across clusters and further dig into it to add like some HTTPS security certificates on top of that. And all of these things are quite difficult and [LAUGHS] a high level to me. 

So I guess, all the documentation that I found on the website was extremely useful to get myself going. But you can't make things easier. It seemed to be quite good so far. 

MARK: Yeah, I'm happy to take the "everything is perfect and awesome" answer. 

JON: So Supersolid, can you tell us a little bit more where you guys are located and any plans for the near future? Because I know Agones has been really great for you, both in production and open source. 

But I could imagine a Supersolid probably has a lot more plans, and I could imagine, if you want to talk about that, any other plans for like any large-scale massive multiplayer games as well. 

KAMI: Yes. So Supersolid does have a few games in mind, and they have been in prototype, soon to be in production. However, to my to my disappointment, not massive multiplayer games. 

JON: OK. 

KAMI: Unfortunately, I won't get to bring any of multiplayer games online soon, but maybe in the near future as it was. 

MARK: I'm right here. I'm downloading "Snake Rivals" right now so I can play it. Why not just add an MMO version of "Snake Rivals"? You've already got Battle Royale, so now just create an open-world concept, have the snakes roam, around level up by, I assume, eating apples and collecting coins. I'm telling you, that was a great pitch right there. 

[LAUGHTER] 

KAMI: I'm not a game designer. I don't get to have a say. I just bring games online. 

JON: [LAUGHS] I actually have a surprise. I pinged Mark in chat, and he told me to tell you, "Hi." 

KAMI: Hi, Mark. 

SPEAKER 1: Hello there. Sorry, I couldn't make it, but I'm quite busy with Agones. 

JON: [LAUGHS] 

MARK: Well, I know a lot of people get confused about the two Marks on the podcast. 

SPEAKER 1: Honestly, I'm shocked by that. The two of us don't sound anything alike. 

MARK: I would love to have a two-Marks podcast. Maybe that'll be our successor. Mark and I can go spin off a separate one. 

KAMI: Ace of a notion. I love it. But I got a ping from somebody saying how disappointed they were that I was leaving the podcast. And I said, well, that's nice. Unfortunately, it's the other Mark. 

JON: [LAUGHS] 

MARK: It still felt nice to me for someone to say, "So, I'll take it." 

JON: Were you always in the gaming space when it came to being a senior server engineer. Right? 

KAMI: So I graduated in 2015, and my first job was in telecoms. That was quite unrelated to what I do now. That was more like analyzing data. But as soon as I got an opportunity to join the gaming industry, I just took it. In early 2016, that's when I started working in games. 

JON: That's a really big shift from going from telecoms to games. I would assume that you really wanted to be in the space. You are probably a gamers as well? 

KAMI: Yes, very much so. So I like to spend most of my free time playing video games, in particular, PC-- PC Masters. 

[LAUGHTER] 

MARK: Whoa, whoa, whoa. As a representative of the console subrace, I will always feel more comfortable with a controller in my hands. 

[LAUGHTER] 

KAMI: I do have a Switch. That's the only console I have. 

MARK: The Switch is nice. It's a lot of fun. It's easy to port move around. And I think that if you see a lot of mobile games, you can kind of feel like this plus a lot of extra features could make a really fun Switch game. 

KAMI: Yes, definitely. 

MARK: So when is "Snake Rivals" coming to Switch? 

KAMI: Oh, man. 

[LAUGHTER] 

Unfortunately, I think the answer is never. 

JON: [LAUGHS] 

MARK: All right, well, maybe the next game. 

JON: I'm with you on the PC side. So I'm curious, what games are you really interested in. I can see you shaking your head, Mark. I'm sorry, man. [LAUGHS] 

KAMI: I guess the game that I've spent a lot of time playing recently is "Path of Exile." So every league, I clock in about 50 hours a week, on top of my full-time job. 

JON: Nice. 

KAMI: And I guess I really like "Tetris." That's probably one of the only games that I'm extremely good at. So that's on the Switch. 

JON: [LAUGHS] 

KAMI: What else? I do like "DOTA." However, I haven't played recently. It's been kind of a lost love. I've spent 3,000 hours playing it. It's kind of burnt out at this point. 

[LAUGHTER] 

And yeah, anything that comes out and is great, like "GreedFall." I'm really excited to play "Outer Worlds." Is that the one? So yeah, I'm a bit of a mixed bag. Everything that's good, I'm going to play it. 

JON: That's great. Mark and I compete locally in "Smash" all the time. I'm more of a competitive first-person shooter type of person. So you just might see me playing like "Overwatch" or "Call of Duty." And as far as MMOs, I've probably played "Final Fantasy XIV." 

So I'm kind of curious, being a gamer, did that really inspire you to get into the space? Because, like I said, it's a very, very big shift from telecoms. 

KAMI: Since I was 14, I knew I was going to be programming games. I was useless at art or anything else, really. So I thought, I'll just do programming. It's great. Anyone can do programming. So since I was 14, that was always something that I knew I'm going to do. That here I am. 

MARK: Wow, I think there's a lot of people who they feel like they want to be in the gaming world. It actually turns out it's very competitive. It's a very challenging space to be. So there's a lot of work that goes into kind of getting in and staying in that industry. 

KAMI: I think it is a job of passion. For example, server engineers are very hard to come by. And a few of our co-workers that are server engineers are not from the gaming industry. They don't play video games or any sort of games, but they're just good programming. 

I guess, it depends. Maybe there is more competition in art or maybe production. But in programming, please come. [LAUGHS] Please come, programmers. 

[LAUGHTER] 

MARK: Well, it's probably a good call-to-action that Supersolid is probably hiring, right? 

KAMI: Yes, we are. So any game programmers or server developers, hit us up. Go to supersolid.com to the Jobs page in London. And if you're interested, apply. We're a good place to be. 

JON: Yeah, I enjoy coming to London all the time. I should actually be coming back to London early next year, so maybe we can sync up and have some lunch. Maybe you can recommend some good places for me. 

KAMI: Sure, I can. 

JON: I'm really looking forward to seeing Supersolid probably at any upcoming game conferences, like GDC or PAX's. So it was really fun to see you guys mentioned because that's where I first heard of "Snake Rivals." 

KAMI: Yeah, our CEO was doing a talk, and he had us prepare him all the information. So it was very nice to see him actually talk and understand what's going on behind the scenes. 

JON: Yeah, I'm pretty sure it's pretty rough to ramp your CEO up on all the technical details for a gaming conference. [LAUGHS] 

KAMI: He did very well. I was impressed. 

JON: Yeah, he did. 

MARK: And then, of course, people can download "Snake Rivals" on iOS and Android. 

KAMI: Yes. 

MARK: And of course, they can find the Supersolid website. Are there any other ways that people can kind of see what Supersolid is doing and what's upcoming? 

KAMI: Yeah, just visit our website, or find us on Twitter @supersolid. And please play our "Snake Rivals" game. If you find any bugs, don't forget to leave some feedback, and we will make sure we address it. 

MARK: The first step, of course, is to figure out if it's a Supersolid bug or an Agones bug. 

KAMI: Yes, that's very important. 

SPEAKER 1: $50 says it's Supersolid. 

[LAUGHTER] 

JON: Yeah, so we'll be sure to link Supersolid both on iOS and Android in our show notes for all of our listeners. So Kami, it's been an absolute pleasure having you on this episode. And we look forward to hearing from you and Supersolid in the near future. 

KAMI: Thank you very much. 

JON: Well, thank you, Kami, for joining us on this episode. It's really great to see the adaption of open source gaming projects and games. And also, it's really interesting to see the journey that Kami and Supersolid has taken with "Snake Rivals," starting with Agones from its early stages, 0.4 release to almost like manage release. 

So it's kind of great to see that full journey and how they've been utilizing all of our Google Cloud Platform tools to actually help keep their game very successful. 

MARK: Yeah, it was really great to see exactly how easy it was for them to use Agones, but also how involved they were in kind of helping ping out these issues. 

I really liked what Kami said about she had never touched Go in her life before, but everything was well-written enough and easy to understand enough that she was able to jump in and find out what was going wrong. 

And so that just kind of speaks to a really, really cool open source project. And it sounds like, hopefully, as Agones moves down the road, there'll be plenty more case studies of other people having really great experiences with it. 

JON: So we're going to jump into our question of the week. 

[MUSIC PLAYING] 

What are the best practices for setting up user accounts in Cloud IAM? 

MARK: Yeah, there is definitely a tremendous amount of best practices. But I think it's also important for everyone, no matter what kind of role you're using Google Cloud Platform in, to get at least a baseline understanding of Cloud IAM. 

So I'll link to a quick-start guide and do a checklist guide. But some of the bigger ones that I've seen come up recently are, of course, Cloud recommends this least privilege principle. And this is the idea that you're only giving people exactly the permissions that they need and no more. 

Typically, this is done just to prevent mistakes from happening. If you've got someone who is going to be working in a development environment, you want to give them the right permissions for that development environment. 

But you also want to make sure that they only have the permissions that they need, such as spinning up Compute Engine instances rather than spinning up some other products that you don't plan on using. 

That could be really important when you're in a large organization because it'll be really hard to track down if someone accidentally spins up something very expensive. And then you don't realize it until way down the road, and you've got this big bill to pay because of just a simple error. So it's always really important to be very thoughtful about it, and that's why the Cloud IAM also lets you create custom roles. 

So I know we've all been in that boat where we're just like, OK, someone needs to get something done. Let's just give them project owner role and then they'll just take care of it. But that's really not-- 

[LAUGHTER] 

That's really not the best way to do things because you can easily get yourself into trouble with just having someone-- you know, it's usually just by accident, having some accidental resources spin up or something shut off. So I recommend creating custom roles for that. 

And on top of that, you're also able to assign roles to groups rather than users. And this kind of falls into this idea of reasonable redundancy. Where if you have someone who is responsible for some very important thing on some very important project, and then that person is no longer around for some reason or isn't available, you're going to be in a lot of trouble if that person has that task they need to do. 

So a big example for finance teams is making sure that you have a billing administrator. Because there are some things only a billing administrator can do. 

So a great example for that is instead of assigning it to a user, assign it to a group. In an G Suite, you can have a group or you can have groups in other ways. And once you have a group, you can then kind of add and remove people from that group as your staff or your employee might change so that you're not having to update that role every single time. You can just have this trusted pool of users. 

This can give you an easy way to have that reasonable level of redundancy in case someone isn't available without having to go in and edit IAM all the time. 

So we'll link to those in the checklist in the notes. I think they're really great for people to review. I definitely recommend people going to check out the IAM interface and playing around with it just to get a quick feel of how the roles work and maybe creating a custom role. 

So that in the future, when they get into larger and more complex scenarios, you'll have a better understanding of what are the best principles to enact there when you're adding them. 

JON: Awesome. I've actually played around with the custom roles. And it's actually what I use as a go-to when I am asking someone to work on something, whether it's internal or external, and I want them to only be able to use, for example, like a service account. 

So I assign a role to a service account and give them privilege and use of that hard actual service account, the JSON file you actually download. And they can use that freely for whatever purposes that I give them. And it's really good because like when I'm doing game demos, it's really good to allow them to access and make any type of request that you would normally do with an account owner or any like small demo that you're working with and only give them the privileges that they need. 

That means it's just read and write privileges, and that's just about it. So custom roles has definitely been a powerful feature that I've utilized. And I definitely recommend our listeners to take a good look at it. 

MARK: We'll make sure to include a link for service accounts as well. Because that's something I didn't mention, but that is another kind of best practices. If you're talking about having a human go in and do things, you're going to typically give it to that user's account. 

But if you want to have them call an API, or work from machine, or any code, you actually want to use a service account because then you have even more control over that access. 

So a couple of helpful references for people who are interested in that. But if you don't want to read all that, my recommendation is just go to the IAM pages and play around with them and get a feel for how it is. 

JON: So Mark, where are you going to be? Are you traveling anywhere? Or have you been finished traveling? 

MARK: [SIGHS] I am finished traveling. I think by the time this episode airs, I'll be landing from a quick trip to Austin to work with some customers out there. But then after that, I am going to try and remain in the city of San Francisco for as long as possible. We'll see if I make it beyond a couple days. 

But generally speaking, I'm going to try and stay local and just work on some cool new content that I've been planning out for the past few months. What about you, Jon? 

JON: For me. I am going to be attending Anime NYC. 

[GONGS] 

Which is going to be pretty fun. I went last year for the first time. It's really good to just hang out with people who just want to have a really good time and are, overall, just fans of anime. 

And next month, I'll actually be at KubeCon working on the Agones and Open Match workshop and in San Diego. Afterwards, I'll be in Kirkland for an internal Hack Week, which will be fun because we're working on a bunch of things for Open Match. And it's really good to just sit down with the dev team and just really, really, really just get into it and just build whatever wacky thing we can come up with and see if we can find any bugs or anything. 

MARK: It sounds like a lot of fun trips. 

JON: Yeah, definitely. [LAUGHS] So that's going to do it for us on this episode of the podcast. We would like to thank you all for listening, and we will like for you to tune in next week. Have a good one, Mark. 

MARK: All right, I'll see you, Jon, and see you, everybody. 

SPEAKER 1: All right, kids. Catch you later. 

[MUSIC PLAYING] 

MARK: Well, you get these new superheroes, like Daredevil and Green Arrow that like they just wear tights. 

JON: [LAUGHS] 

MARK: And then they get their own drama-filled TV shows. It's like all dark superhero. You know what I mean? 

JON: Yeah, but why does Hawkeye-- why is he a superhero? He just has really good aim. 

MARK: He's just a mean dude who has really good aim. That's exactly-- well, same thing with Black Widow, right? 

JON: Yes. She has utilities. Well, technically, they both do. 

MARK: The proof there, Jon, is that being a superhero isn't about the powers you have, it's about what's in your heart. 

JON: [LAUGHS] 

MARK: So if you believe you're a hero, you can be a superhero. 

JON: [LAUGHS] I'm laughing because Batman doesn't believe-- 

MARK: No 

JON: --any of that. He just-- 

MARK: Right, that's the third kind of superhero. Is if you're a rich [BLEEP], you can also be a superhero. 