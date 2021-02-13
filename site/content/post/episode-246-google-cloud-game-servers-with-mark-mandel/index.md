+++
audioDuration = "00:42:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.246.mp3"
audioSize = 60588189
categories = ["Online Gaming", "Game Server", "Agones", "Kubernetes"]
date = "2021-02-10"
description = "Former GCP Podcast host Mark Mandel is our guest this week to tell us all about Google Cloud Game Servers."
draft = false
episodeNumber = 246
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "Google Cloud Game Servers with Mark Mandel"
image="/post/episode-246-google-cloud-game-servers-with-mark-mandel/images/hero/hero-EP-246.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/lgzf87/episode_246_google_cloud_game_servers_with_mark/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Former GCP Podcast host [Mark Mandel](https://twitter.com/Neurotic) is our guest this week. He's talking Google Cloud Game Servers, Agones, and more with [Mark Mirchandani](https://twitter.com/markmirch) and guest host [Stephanie Wong](https://twitter.com/stephr_wong). 

Mark explains how dedicated game servers work and why gaming has embraced the idea of dedicated servers. Online multiplayer gaming with its need for fast, consistent state sharing among players benefits from dedicated servers and offers cheating mitigation and reduced latency, as well as development flexibility. He tells us a little about the history of the open source project, Agones, and how it has helped Kubernetes run memory-state games efficiently on these dedicated servers.

Google Cloud Game Servers work with layers of products to create a seamless multiplayer environment. Mark details this process and how Kubernetes, GKE, and Agones work together with these servers to accomplish this goal at scale. This situation is ideal for developers looking for the customizability and flexibility of a self-controlled system rather than a fully managed lift and shift model. Mark talks about the features of GCGS, including the versioning configuration system that allows you to create multiple configurations, and roll outs that give you control over distribution. 

We also learn a little about game building best practices and how Mark and his team advise and educate other game developers. 
 
##### Mark Mandel

Mark Mandel is a Developer Advocate for the Google Cloud Platform. Hailing from Australia, Mark built his career developing backend web applications which included several widely adopted open source projects, and running an international conference in Melbourne for several years. Since then he has focused on becoming a polyglot developer, building systems in Go, JRuby and Clojure on a variety of infrastructures. In his spare time he plays with his dog, trains martial arts, and reads too much fantasy literature.

##### Cool things of the week

* Google Cloud Docs Samples [docs](https://cloud.google.com/docs/samples)
* Limiting public IPs on Google Cloud [blog](https://cloud.google.com/blog/topics/developers-practitioners/limiting-public-ips-google-cloud)

##### Interview

* Google Cloud Game Servers [site](https://cloud.google.com/game-servers)
* Agones [site](https://agones.dev/site/)
* Agones Prerequisite Knowledge [docs](https://agones.dev/site/docs/prerequisite-knowledge/)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Online Game Technology, Drawn Badly [videos](https://www.youtube.com/watch?v=5tv4Z4FcD74&list=PLqqp1QEhKwa4HMSkngHif8l-Uoc_haa4c)
* GCP Podcast Episode 142: Agones with Mark Mandel and Cyril Tovena [podcast](https://www.gcppodcast.com/post/episode-142-agones-with-mark-mandel-and-cyril-tovena/)
* GCP Podcast Episode 202: Supersolid with Kami May [podcast](https://www.gcppodcast.com/post/episode-202-supersolid-with-kami-may/)
* Multiplay [site](https://multiplay.com)
* Accelbyte [site](https://accelbyte.io)
* Improbable [site](https://www.improbable.io/multiplayer-operations)
* Find the right Google Cloud partner [site](https://cloud.withgoogle.com/partners/?metadataExpertiseTypes=GAMING_EXPERTISE&sort-type=RELEVANCE)
* Game Developers Conference [site](https://gdconf.com)
* Agones on Slack [site](https://agones.slack.com/join/shared_invite/en)
* Agones on Twitter [site](https://twitter.com/agonesdev)
* Mark Mandel on Twitch [site](https://www.twitch.tv/markmandel)
* Mark Mandel on YouTube [site](https://www.youtube.com/channel/UCviD9easAslHLWQ5RH1GCzg/videos)

##### What's something cool you're working on?

Stephanie is working on [Season of Scale season 5](https://www.youtube.com/watch?v=Ibc34NztJWw&list=PLIivdWyY5sqKRzuCV5BejHJ3YoE-Sd8ku) and a [data center](https://www.youtube.com/watch?v=kd33UVZhnAA) animated series that will launch in a few weeks!

##### Sound Effects Attribution

* "TrumpetBrassFanfare.wav" by ohforheavensake of [Freesound.org](https://Freesound.org)
* "8-bit Video Game Sounds.wav" by ProjectsU012 of [Freesound.org](https://Freesound.org)
* "music elevator.wav" by Jay_You of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK MIRCHANDANI: Hi, and welcome to episode 246 of the weekly Google Cloud Platform Podcast. As always, I'm Mark. And today we're here with Stephanie Wang! Yay!" >}}

STEPHANIE WONG: Yay. Hi. 

MARK MIRCHANDANI: Hey, Steph. It's been a while. 

STEPHANIE WONG: It might be the first time anyone's hearing from me. 

MARK MIRCHANDANI: No you had your networking tips in the past. 

STEPHANIE WONG: Oh, this is true. I'm fully featured this time. That was, like, a special preview. 

MARK MIRCHANDANI: Yes. Well, today you are officially our host as we are bringing on one of our good, good friends to come and talk with us. Stephanie, who are we going to be talking to today? 

STEPHANIE WONG: Well, we are talking to Mark Mandel, who, if you didn't know, was one of the founders of the podcast. So this is a pretty big red carpet moment for us. 

MARK MIRCHANDANI: Yes, I like that, a red carpet moment. And we are super excited to talk to Mark because he is coming back. And this will surprise all of the listeners of the podcast. We're talking about Agones, mostly. 

STEPHANIE WONG: Yay. 

MARK MIRCHANDANI: We're actually talking about Google Cloud game servers, which we get into a ton of great conversation about, as Mark kind of tells us a little bit more about Agones, a little bit more about Google Cloud game servers, and some of the thoughts that you should think about when you're deciding which one to use when you're building a multiplayer game. So it's a really great conversation. 

STEPHANIE WONG: Yeah, really great conversation about Google Cloud game servers. I am not a big gamer. I will admit that. But I know how big it has been over COVID. If anything, I only play "Mario Kart," and I have played "Animal Crossing." So that's about my exposure to gaming. 

MARK MIRCHANDANI: Well, those are two great examples of multiplayer games that work very differently, right? Because you have to have this real-time aspect in both of them. But some of the matchmaking and some of the scaling that we talk about is probably pretty relevant to "Mario Kart." I'm a behind-the-controller gamer, for sure. So it's always really exciting to hear, of course, more about the technologies that make our favorite games so awesome. 

STEPHANIE WONG: Absolutely. I can only imagine the scale that's needed for something like "World of Warcraft" or some of the bigger games online. Yes, I know what that is. 

MARK MIRCHANDANI: No, no, absolutely. It's just, man, "World of Warcraft" must have the most tremendous scaling stories. This is probably 10-plus years ago now, where they were kind of reinventing the MMO genre-- or maybe not reinventing's the right word. But the amount of scale they must have been under and how much tech has probably changed in the past 10 to 15 years, I can't imagine. 

STEPHANIE WONG: Yeah, it's super different these days, which is why we need Mark to tell us more about it. 

MARK MIRCHANDANI: Fair enough. But before we get into our interview, why don't we go ahead and dive into our cool things of the week. 

[MUSIC PLAYING] 

So for my cool thing of the week, I'm going to put the link in the show notes for anyone who's interested. So the Google Cloud documentation, of course, has a lot of different code samples scattered throughout because the documentation is going to tell you a little bit more about what you're looking for and then give you some samples to get started. 

Well, someone actually created a sample interactive browser search thing. And I think it's just so super cool because you can filter by language, and then you can filter by product. And so you can say, here, show me all the BigQuery samples. 

And I think that's a really cool way to get started with some of these tools, as well as a new, very quick, hey, let me find this. How do I load data into BigQuery? How do I execute this? Or for all the other projects, how do I get started with these things? Having that in an interactive browser is just so awesome. So I've only had a chance to play around that for a tiny bit. But I think it's super neat. 

STEPHANIE WONG: Yeah, that's pretty cool because normally you'd be in the documentation for a certain product, and you would find what you need. But this sort of surfaces other code samples, docs that you wouldn't normally have seen otherwise. Like, maybe you find something for workflows or for storage. So yeah, that's pretty dope that they would make a new UI for that. 

MARK MIRCHANDANI: Yeah, I think it's really cool. 

STEPHANIE WONG: Nice. Well, my cool thing of the week is actually a blog post that I published recently. It's on limiting public IPs on Google Cloud. And if you didn't know, you can actually use organization policies to limit public IPs on GCP 4, VMs, load balancers, and VPN gateways. It's a IAM resource, a hierarchy. So it's pretty cool to be able to do that and have it trickle down to all of your projects on Google Cloud. And you can actually ensure through that that you aren't going to be deploying resources that will have a public IP that shouldn't have it or allow any of your team members to accidentally do it once you deploy it. 

MARK MIRCHANDANI: Yeah, it's such a different experience to use the console from an organization perspective than it is from just a normal user perspective. Because when I jump into the console and I make projects, and you can kind of do whatever. But then when you're thinking about it from the business side, you need to actually create an organization and kind of organize these things so that you have this hierarchical set of rules that get followed. And it makes sense, totally, for especially large companies to be like, hey, let's turn off public IP addresses for most things unless we specifically need them for hopefully pretty obvious security reasons. 

STEPHANIE WONG: Yeah, exactly. And just give you a central config as a best practice for your organization to follow. 

MARK MIRCHANDANI: Very, very cool. Well, with our cool things out of the way, why don't we go ahead and jump into our interview with Mark. 

Today we have our very special honored guest. 

[FANFARE SOUND] 

He is the OG and truly the powerhouse behind the "GC Podcast." For those who don't know you, would you like to introduce yourself? 

MARK MANDEL: Thanks, Mark. 

MARK MIRCHANDANI: Was that too much of a lead in? I'm sorry. 

MARK MANDEL: I am very special. I just want to be very clear. Take that as you want Hello, everybody. My name is Mark Mandel. Pleasure to be here with you, Mark and Stephanie. I am a developer advocate for Google Cloud. And you may have heard my voice on previous episodes of this podcast. 

MARK MIRCHANDANI: For four years? 

MARK MANDEL: Four plus years. 

MARK MIRCHANDANI: Holy butts. 

STEPHANIE WONG: We might have some new people that haven't heard from you, though. 

MARK MANDEL: So yes, if you don't know me, I do developer advocacy for gaming, for Google Cloud. I built open source tools for backends for games. So you may have seen a project called Agones, which we'll talk a little bit about today. I also do some other fun stuff. I'm going to talk about that a bit, too. For the Game Developers Conference, I'm a summit advisor for that. We have an online games technology summit for people who do backend systems for games. I do that. 

And very occasionally, I Twitch and YouTube stuff, where I stream doing open source development backends for games, so primarily Agones, and throw out very badly drawn videos about how to build backends for games, literally called Online Game Tech Drawn Badly. Yeah, I think that's what I call it. That's me in a nutshell. 

MARK MIRCHANDANI: And obviously, it's not the drawing quality that matters. It's really the subject matter that's important. 

MARK MANDEL: I hope so, because the drawing's terrible. 

MARK MIRCHANDANI: So OK, the bar's low. For long time listeners of the podcast, of course, Mark was a major player in the podcast for a long time. But we also talked a lot about Agones. 

MARK MANDEL: We did. 

MARK MIRCHANDANI: And I think it would be important to maybe get things started with a conversation, because today we're actually talking about something that was very much born out of Agones. And to kind of set the text for people who aren't really aware of it, let's talk about gaming-- 

[VIDEO GAME SOUNDS] 

--which first of all, awesome. 

MARK MANDEL: Like games. Games good. 

MARK MIRCHANDANI: It turns out games are pretty cool. But to get things started, let's talk about multiplayer games, right? Because this is really where we're going to be spending most of our time with Google Cloud game servers. And so what is really interesting about a multiplayer game versus maybe not a multiplayer game? 

MARK MANDEL: So they're all interesting, I just want to be clear. How do you compare two beautiful sunsets? Every one is special. 

MARK MIRCHANDANI: Aw. 

MARK MANDEL: So yeah, multiplayer games traditionally-- and I'm going to ignore the multiplayer games where you sit on a couch and play with your friends. But, like, your online multiplayer games have some sort of connectivity to something on the internet to be able to share a state between them. So if myself and Stephanie are playing a game, we're like, hey, Mark, we'll invite you too. It's cool. 

MARK MIRCHANDANI: Oh, cool. Thanks! 

MARK MANDEL: Yeah, no worries. Yeah. We're friends. It's all OK. So if we're all playing games together, we need something that sits somewhere on the internet to ensure that we are all in sync with each other. And there's a few different patents for that. 

We can actually do that where we're all connected to each other. We can do it also where we're connected to a central service. Talk about some of the pros and cons there too. But essentially, we need to do some internet magic to ensure we're all working together. 

So the primary type of multiplayer games I would deal with more often than not is like your super fast-paced, online competitive sort of multiplayer games, so, like, "Valorant," "Overwatch," "Rocket League," all those kinds of games that really require you to share that state in a very fast way and in a very consistent way so that all the players have the same player experience, or at least as close as without lying to them too much. 

STEPHANIE WONG: So we've heard of this concept before. But the way that you would do that is using something called a Dedicated Game Server, or DGS. Is that right? 

MARK MANDEL: Yeah, I don't know how other people call it DGSes, but yes, it's a dedicated game server. I use that term a lot. But, yeah, so dedicated game servers is, like, one very prevalent pattern for doing these kinds of very fast-paced multiplayer games. Say that three times quickly. And there's a few reasons for that. 

So a dedicated game server essentially is like a full simulation of everything's happening in the game, right? So if we're all playing a game together and we're all running around, Stephanie, you'll say, like, hey, I'm running in this direction. Mark will be like, hey, I'm jumping. I'm like, hey, I'm standing here doing nothing. 

And then it's up to that dedicated game server to be like, OK, what physics do I apply? Who gets hit by whom? What gets scored on? And sort of send that information back out to the players that are playing the game. 

And the reasons we do that is kind of twofold. One, people aren't very nice sometimes, and so cheaters happen. And so having an authoritative server that's protected inside your network, that mitigates a good chunk of that and helps in that area. 

The other part is that usually a lot of these sort of real-time games have about a 50-millisecond latency requirement or around that mark between whoever's playing the game and whether that game server sits. So you want to be able to distribute that around the world. And so having a dedicated game server where you're like, oh, if I put it in this particular place, I know these players are going to sit within that latency requirement. I have a lot of control, then, over the experience the players have. 

If we three are playing a game, I'm probably going to try and put something sort of centrally to us or within that latency budget. So yeah, dedicated game servers are pretty awesome. But that could be a whole episode into and of itself. 

MARK MIRCHANDANI: And I think, of course, one of the biggest questions that comes out of this is dedicated game servers make a lot of sense, and people who are familiar with games are usually pushing for a dedicated game servers. But if we take this outside of the context of games, even though we said we were going to talk about games, why is this not a solution that has already been solved, right? I mean, we've got these businesses that are running very similar latency requirements, very similar geographic distribution requirements. Why can't we just use the same technology? 

MARK MANDEL: So I think the vast majority of technological solutions-- I'm doing air quotes here, I don't know why-- have focused on essentially two different types of workloads. You've got your stateless workload, which is your web server, stuff like that. You run 10 of them. If one of them goes down, as long as you're handling all the requests, who cares? And the other end, which is databases, right? Keep that thing alive for as long as possible and never let it die. Awesome. 

Game servers sit into this workload where it's in memory state. And it's in memory state that is dependent on its lifecycle. So that becomes a different technical challenge, right? So with game servers, if you don't have players playing on a game, if you kill it, nobody cares. If you have players playing on it, people do care if you shut down their games, for some reason, especially if they're winning. No idea why. 

And we do see some similar orchestration models being required for things like [INAUDIBLE] and SIPs and media applications, things like that. But at least to my knowledge, around the time when we started building Agones, there really weren't out-of-the-box solutions for dealing with that kind of in-memory state lifecycle where something is not very important and then very, very important throughout its lifecycle, that sort of dynamic change. 

STEPHANIE WONG: And you just mentioned Agones. So just to let the listeners know again, you have a lot of experience in Agones. Can you give us a history lesson here? 

MARK MANDEL: Yeah, absolutely. So way back in the day-- I want to say three years, maybe even four, something like that-- myself and several other people got together, and we built this open source project called Agones. And it's essentially a platform that sits on top of Kubernetes that teaches Kubernetes how to run these kind of in-memory systems for game servers, specifically-- we have some game server-specific stuff in there-- but basically allows you to do things like, hey, I want to spin up 100 of these one game servers. Because sometimes they take a long time to spin up, and you usually want a big pool of them. 

Hey, I want to be able to mark one of them as having players on it, what we commonly refer to as allocation. It's like pulling one out of a set. Hey, I want to do things like auto scaling this based on how many I want to have extra ready and then a bunch of other things like SDK integrations and some engine integrations to make some lifecycle stuff and some configuration stuff easier-- basically just a lot of tools that enable Kubernetes to be able to like, hey, kubectl, get game servers and get that sort of information back. 

It's really just a whole thing around that for managing that lifecycle and managing the types of connections you want to do with game servers, because we don't go through load balancers either. That's a fun trick. We go straight to the process. So we do some management for that too. 

MARK MIRCHANDANI: And so we have a previous podcast episode where you get to sit down and talk more about Agones. And like you said, it's been a while. So we'll have a link in the show notes because it's also kind of cool to see how that's changed over time. We've also had a couple of companies come on and talk about how they used Agones, which I thought was really neat. So we'll try to include some of those as well. 

MARK MANDEL: Oh, yeah, I had forgotten about those episodes. But yes, those are good episodes. 

MARK MIRCHANDANI: So it's really exciting to obviously see how this evolves over time. And I think we can probably talk a little bit more about the specifics of Agones. But also I think one of the important factors is that this has evolved even further into Google Cloud game servers. So give us a little bit more understanding of not only what the structure of Agones and Google Cloud game service is, but how that evolution happened. 

MARK MANDEL: So I'll probably talk about the layers of applications that I think kind of flow on top of each other and how they sort of interact might necessarily be a fun way of doing it. So we're looking at it from Google Cloud perspective, right? So maybe bottom layer we're talking Kubernetes. I think we're all pretty familiar with that. 

Next layer up from there, we're talking GKE. We can spin up GKE clusters. From there, we can install Agones into the GKE cluster. If you want to think of it actually kind of as a platform for running services, in this case, game servers, essentially what you're doing, you're taking Kubernetes cluster and GKE cluster, and you're installing Agones, and that's your platform. 

From there, it becomes a question of, how do I deploy my game servers across this thing? And how do I do that at scale? And when I say at scale, what does that even mean? 

So we talked a little bit about before dedicated game servers. We want them spread all over the world, generally with a really large game, or even necessarily maybe even a region, depending on your spread of your game. And so Agones is pretty awesome within a single Kubernetes cluster. It does a really good job of that. 

But ultimately, if you're running a production, you're probably going to want to have multiple clusters. So even if you're in a small region, you might want two just for redundancy. But if you're global, then you definitely want lots kind of spread around the world, that kind of stuff. 

And so it becomes an interesting question of, how do I tell that entire system of lots and lots of clusters, with lots and lots of Agones installs, which run down to lots and lots of nodes and all kind of stuff, to do stuff, like, roll out this fleet of game servers across the entire set, make this one available? We have a new version. But only roll that out in Australia because that's a really good test zone, right? But don't put it anywhere else until we're happy about it. Or maybe just make it so that 5% of the players get this new version. 

How do I coordinate that at scale? And that's where we get into that Google Cloud game server's layer on top. How do I do these things across multiple clusters and do it in a way that's going to be good for production workloads and also make sure that I have the insurance that if my game is a hit-- maybe I've started at a small scale, but I can rapidly increase my scale out without having to basically rebuild the train while it's running on the tracks. And I think that's a super important concept. 

STEPHANIE WONG: I'm seeing a few things there. So you're saying scale insurance, having it when you need it. The multi-region configuration is huge and centralized management. But then you also have the ability to do things like canary rollouts and apply any idiosyncratic behaviors to certain clusters in areas that make sense. 

MARK MANDEL: I think a really important point here as well is, you still have access to the clusters, right? We've got great management tools that you can choose to opt in or out of to basically make your lives easier. 

But it really is a tool that's kind of like, OK, you've got a very specific idea of how you need to orchestrate your game servers for your specific game. So you have access to your game servers. It's your Agones cluster installation. If you need to install extra components, put extra layers on top, do whatever it is you need to do for your big-scale game to make it work for how your game works, you can do that. You have that power and flexibility. 

So we're trying to take away sort of the harder problems at scale while still letting you be like, oh, you know what? My game doesn't fit like the usual model of just, like, put a bunch of people in a room, and then they kill each other, and then they come back. We have some more complex stuff and being able to manage that too. 

MARK MIRCHANDANI: So what is the decision making look like for someone who wants to look at, oh, OK, well, we know that GKE's great. And you can decide to maybe deploy Agones on there yourself. And there's obviously some advantages you've already talked about with Google Cloud game servers. 

But what does that journey look like? And what might you do? And what might be the things you think about that would make you choose one over the other? 

MARK MANDEL: I think, to start with, you can actually just start with a single Agones cluster possibly running on minikube locally. Or you could start on a GKE cluster or something like that, just to kick the tires and see whether or not the platform is a good fit for you and it does the things you need, and you can sort of just check it out and see what the experience is like. That's awesome. 

Assuming that all works for you, and I assume it would because it's amazing-- I say that with a smile on my face. But assuming that works for you, if you need to take that and you want to move over to Google Cloud game servers, it's a really minimal change. So people are familiar with Kubernetes. You have your YAML files, that kind of stuff. 

There are some small tweaks that you need to make to move that over GCGS, like take off a couple of lines off your fleet spec, essentially, some stuff like that. But the migration from open source to GCGS is super minimal. So you can basically take everything that you've already built and move it across really easily. 

So if you want to run a dev environment, where, say, it's just Agones maybe locally or in your QA cluster or even in the cloud, and then be like, OK, we're going to go full GCGS once we're ready for it-- very, very easy to do that. I would advise setting up in production. Like, start with GCGS. You can run at small scale. Your first cluster is free. 

So if you want to start small scale, it's great. But from there, it's $0.50 per hour per cluster. So it's not a major increase over the top and, again, like I said, insurance. So getting started-- super good. I'll probably also take this in another direction, which is, who's the teams that were probably interested in something like this? 

This definitely doesn't sit on that-- if we talk about computers in a continuum, like App Engine is one service. Super platform is a service. And like Compute Engine is, like, infrastructure on the other side. This definitely sits more in that sort of GKE platform realm, where you're probably building an opinionated solution that's right for your studio, right for your game. Maybe even your publisher has this for you and your team. 

It's not like a hey, throw me a binary, and we're just going to scale to infinity and just take care of it for you, right? So you want that power and flexibility. So probably your team, you maybe have some operations knowledge. You have some people who can work on it full time, that kind of stuff. That's the sort of situation you'd probably want to take advantage of from there. 

STEPHANIE WONG: Yeah. I think it's key to point out something that you just said about the extent to which it's managed. It's not just complete lift and shift and you kind of have full management taken care of. But it's more so giving you, developer, agility and flexibility. And you still have the ability to go in there and change configuration on the fly. 

MARK MANDEL: Absolutely. That's definitely a thing. If you are looking for that more managed platform, point you towards some of our partners. They do an amazing job of doing that more managed system, if that's the sort of thing you're looking for. 

STEPHANIE WONG: Yeah. So speaking of the developer flexibility that it provides them, what is the target developer audience? And what's the experience like for them here? 

MARK MANDEL: Primarily, this is-- we were talking about the operations team, people with backend dev experience. This is very much a target for them. But this probably does run sort of the gamut of backend multiplayer development. 

So I said that for a reason. I think there's layers here, and it's kind of interesting. So if we start on one side, which is the people who are going to end up building the dedicated game server-- and actually quite often, that's a team unto themselves, who will do a lot of that work. 

They may necessarily build on Windows machines, which is also very common in the games industry. And they'll do a lot of play testing on it from there. There may be a pipeline there, depending on the platform. Again, working with big companies, very much like an enterprise company, if people are wider tech community. Enterprise companies build their own pipelines for dev platforms, so the big game companies. 

So they'll need to build that so that they can take this dedicated game server and essentially containerize it. So that's usually sort of the big first step, run it on Linux. We're doing some work on Agones to support Windows containers. And there's been some efforts on that. But generally speaking, you're running a Linux container. 

We have an integration SDK around games over the lifecycle. There's a few different patents people can use to integrate that. But some way, somehow, basically be like, hey, this game server's ready through the SDK. Chuck that up on our registry somewhere-- pretty standard containerization stuff, nothing too special there, other than maybe taking that originally Windows version and converting it into Linux. That's generally doable these days. 

So yeah, once you have it up in a registry, it's very similar, in many ways, to developing for Agones. Usually you define yourself a fleet, which is how many particular game servers do I want running. If you're familiar with Kubernetes, it's part of that as a pod spec with what containers they're part of and some extra flavor on top around game server stuff, like what ports do you want and that kind of thing. And that'll tell it how many I'm running. 

Where it differs a little is in game servers. So with game servers, what you're going to end up doing is having this broad set of clusters around the world. And you'll have them split up into what we actually call realms. 

And realms are basically user-defined groupings of clusters that are essentially going to be the same from a latency perspective to any particular players. So you might do something like-- depending on your game and your latency requirements, maybe you do like a realm in like US, one realm in Europe, one realm in Japan. Or maybe you do smaller. That's all totally fine as well. 

And within there, you're going to have multiple clusters. And those clusters are Agones clusters with GKE in them and stuff like that. And from there, what you're going to able to do is GCGS gives you this versioning config system that you're able to put into place. So you create these multiple configs. 

And the config has things like, what's my fleet? Maybe what's my order scaler? That kind of stuff. And then you do what's called rollouts. And these are actually preview-able, which is kind of cool, especially when you're dealing with really big infrastructure. You're like, what's this going to look like when I run it over 100 clusters? Oh, it looks right. Awesome. 

So I can take that config of fleets and be like, roll this out across all my clusters. Or roll this out across part of my clusters. And you can sort of tweak those numbers as you go along. 

Then you've got your fleets. Awesome. We also have this lovely thing called multi-cluster allocation. So you're able then to talk to basically a singular endpoint, be like, hey, give me a game server out of this realm, which could be n number of clusters. And then you sort of have that failover between clusters, and you have that redundancy, and all that kind of good stuff as well. 

All right. I got some players. I need a game server. Please give me one and keep it alive until the players end. And instead of just doing that at the single cluster level, you can be like, oh, there's 10, 20, 50 clusters behind this. That, then, sort of keeps that whole flow going. And then game server goes down when it's finished or when it needs to. And then we can bring up another one, and the cycle sort of repeats. 

STEPHANIE WONG: Wow. Yeah, you bring up an interesting point about a couple of things. You are talking about a delineation between, let's say, frontend and backend game server developers and how there are multiple layers that are involved now. You're talking about multi-cluster configurations rolling out across different realms. So I'm curious, what is the relationship like between developers and the actual infrastructure operators? Because now DevOps has become a really big piece of the conversation, right? 

MARK MANDEL: That becomes fun, too, because especially in the gaming environment-- and it differs from company to company, studio to studio-- you probably have your game designers, maybe more specialized multiplayer game designers, who have a deeper understanding of multiplayer dynamics. Then you probably might have maybe the people who do the dedicated game servers, which is like the communication protocols that happen and make that appropriate. 

And then it's up to the infrastructure engineers to be able to take that and make sure it scales and runs appropriately for launch time, we should probably talk about as well. But I think it's an interesting question, because we look at more at the infrastructure-- I think that has changed. 

I've definitely seen, in my experience, a wide gamut of sophistication and expertise across the games industry, starting from, hey, we run, like, 1,000 pets. We run, like, all these individual game servers, all the way through to super-sophisticated Kubernetes cloud-native infrastructure. 

But I would say probably in the last two or three years, you're definitely seeing a lot of the wider stuff that maybe we take for granted in tech, which is probably an interesting question in and of itself. But a lot of the things, like, DevOps, cloud-native applications, containerized applications, more usage of platform as a service and the cloud, that kind of stuff really kind of coming into its own in the gaming sphere as well. And we're definitely seeing a huge amount of adoption in that area. 

MARK MIRCHANDANI: Obviously I want to talk about the launch point because that's a whole different story when you're looking at launch. But it's also that these games, especially for games that have been meant to last for a while-- and we've seen some games that have gone way beyond what I think the developers would think they'd have had a good audience for. I still play "StarCraft" sometimes, right? 

MARK MANDEL: Yep. 

MARK MIRCHANDANI: And so with stuff like that in mind, obviously the development cycle is totally different for games. So what does that look like? And what does launch look like? 

MARK MANDEL: Games take a long time. If I think of, say, your typical tech startup type thing, you're doing your minimal viable product. You try and get that up in like-- I don't know-- six months. I'm picking a number out of air, but whatever. You're trying to get that up super fast, with just the minimum bit of what you've got there. And then you put it in front of real customers, and you try and make some money. 

You do early access in games, but it's not the same. Early access is quite interesting as a game experience. But traditionally speaking, you're looking at a two-, three-year cycle for building a game. What you'll commonly often see is people will build and choose their tech at the beginning of that cycle, and you're just going to hold on to that tech throughout your whole thing. 

As you're talking about, we often call this games as a service, games that last a really long time that have a lot of online content and live for a while. That's where that opportunity for maybe some of that technical debt could disappear, sometimes. But, yeah, usually you're looking at a three-year cycle to build a game and then probably something like a beta period. 

And then you're going to launch. And launch, if that goes well, that's not a gradual climb. That's a rocket ship going straight up. And launch can sometimes make or break games, which is both wonderful and terrifying all at once. 

So ensuring that you have a good scalability insurance, for lack of a better term, for your game at launch time is super important. Because also, that might be the peak number of players you ever get. If you're running a freemium game or anything in that kind of vein, that might be the opportunity for you to make the most amount of money. 

So getting that right can be hard. Unfortunately, from what I've seen in the games industry, the education around backend tech isn't particularly wonderful. The phrase I like to use is, there's kind of two ways to learn how to scale games-- one, write a hit game and trial by fire, which is not pleasant, or join a game company and learn how they do it. And it's opinionated, and you learn that way. And that's the other way of doing it. 

And even then, as we've seen, not always everyone gets it right. And also the other fun side of that is sometimes you don't know when your game's going to be a hit. I think a classic example of this, right? COVID hit. Everyone starting playing "Among Us." That was just a thing that's just ginormously taken off. And if you follow that developer on Reddit or Twitter, they talk about their scaling. It's actually super interesting. 

But if you don't have that kind of insurance at all times and your game becomes a hit, that can be a problem. It can be really difficult. I've seen game companies survive it, but I've seen game companies crushed under it. And it's not fun. But it is definitely a different experience than what you might see in sort of the wider tech community. 

MARK MIRCHANDANI: And that was one of those classic launch problems, which made the technology so interesting because launching a game before we had such easy access to scalable resources, you would really want to balance that. Do we overbook a ton of resources and pay a bunch of money, even if we're not sure our game is going to be a success? Or do we under book and then potentially face scaling problems? 

And I think many people have tried both strategies. The cloud has obviously done a lot of cool stuff. But there's this model that you were just talking about, this education factor to it and kind of getting more people aware of what best practices are and what other companies have done. And of course, you're working a little bit in that space as well, right? 

MARK MANDEL: Absolutely. I do some stuff in education. Before we get into that, I also want to talk maybe a little bit about some best practices, as well. We're talking a bit about sort of potential pitfalls around running at scale, things like that. I definitely want to talk about the education space because that's super important to me. 

I definitely still see a bunch of big game companies that run their own callers. They run their own hardware. And there's value there for them for that. But, yeah, to your point, that's where we start to see those very sophisticated hybrid platforms that we love talking about at Google Cloud, where, yeah, having that elastic infrastructure in the cloud means that you have that burst capacity. But also you have that on-prem infrastructure that you probably paid for a really long time. And it can save some money in other different ways. 

One thing I will always recommend is that if you've got a game launch coming up or content coming out or you're doing a big thing, make sure you talk to your sales agent, do your capacity planning. That's a big thing, right? Make sure your quotas are up to date, right? 

Work with your cloud provider, particularly work with us. We have checklists. We have launch plans. We can help you make sure that you don't get surprised by anything on our infrastructure and set up some long-term goals about how that launch is going to happen. So that rather than calling us up in the middle of the night and being like, hey, look, my quota's run out because we've been doing all this other stuff, we can help you with that kind of stuff. So that's super important. 

Talk to us. Just make sure you talk to us. Just a chat. 

Education-- I'm glad you brought up education. So one of the things I've been working on since last year-- it was 2018 or 2019. What year are we in now? What is time? 

Several years ago, Ed Pereira and I, who's an engineer over at Naughty Dog, committed Game Developers Conference. And we're discussing, like I was talking, about the education of game servers. And we realized that there's a lot lacking. We don't talk to each other very much, unfortunately. 

So we had a chat with the Game Developers Conference. And they were very gracious to allow us to run a day summit. So they run day summits for things like eGames and audio and that kind of stuff. And I was like, hey, I know a bunch of people who work at some big game studios. Can we do a summit for online game tech just talking about backend systems for games, scalable systems, multiplayer architectures, all that kind of stuff? 

We were going to do the first one last year. I don't know if you noticed. There was this whole pandemic. So unfortunately that didn't get to happen according to plan. What was nice, though, was a good number of the talks that we had lined up for that summit ended up at the virtual conference. And they were great. 

So if you actually happen to look at the content from last year and were like, gee, there's a lot of operation stuff here, that's hopefully why. But we are running it for real this year. GDC's running a hybrid physical and online event. We'll see how that sort of pans out. I think it will be very, very interesting. 

But the call for papers for all the summits is open right now, and I believe it's open till the 15th of February. So you've got a little bit more time to go up until this point. But, yes, so I'm an advisor for that. Really just want to help grow the education in the space and let people learn and play with this kind of tech and sort of take some of the mystery away. 

STEPHANIE WONG: Yeah, I'm curious, because I'm not as intimately familiar with the game world because I don't really play that many games. But I'm curious, like, what's the general sentiment about adopting more of this platform-as-a-service managed services? In addition to obviously moving to the cloud, are a lot more developers realizing the value of it? Is it more because the trend towards large online multiplayer games is becoming really prevalent in the industry? 

MARK MANDEL: Ooh, that's a really good question. And it probably comes down to, do I build or do I buy, is one of those fun things. And for me, I think it comes down to what are the core competencies of your studio? And what sort of things do you want to be taking on yourself? If multiplayer is the core mechanic of your game, and you have that capabilities and teams and it's something that you want to optimize on, that may be something you want to build in house, because, a, you have the skills, but also it's a huge, important part of your game, so you want to have a lot of control over it. 

Depending on the style of game, maybe you have an online game that's maybe more turn based or something that's a little slower. Or maybe you just don't have the skills in house, which is also totally fine. There's plenty of services out there that you can go and buy. Hopefully you can find one that fits your needs, which would be awesome. And therefore, then, it's not something that you need to manage yourself. I think it's very much the same is that anything that you would find in wider tech, picking the right tools that give you the flexibility you need while also taking away maintenance tasks that you don't want to do yourself. 

MARK MIRCHANDANI: And so for people who want to figure out if Agones or Google Cloud game service is right for them, what does it look like to get started? How do you try that out? 

MARK MANDEL: Absolutely. So if you go to cloud.google.com/game/servers, you can see everything there. We've got a few really good videos on that page giving you a quick overview so you can see what's going on. If you don't want to go deep on game servers initially, you want to maybe just get started on Agones itself, you go to agones.dev. 

One of my favorite parts actually on that-- because there are quite a few layers to this-- we actually have a doc on this website that's prerequisite knowledge. We're like, hey, here's the list of things that we think you're going to need to know before going down this path, because you probably heard about, we're talking about containers. We're talking about GKE. We're talking about Kubernetes, right? There's all these layers to it. 

So we're like, OK, start with these bits. Get a general sense of, like, here's some resources you can use. Here's some videos you can watch, some interactive tutorials you can go play with, just to sort of kick the tires on it. There's a great Getting Started Experience on Agones so you can sort of get a fleet up and running, test some stuff out, see if that fits. 

And then once you're pretty happy there, then you can start moving on to Google Cloud game servers, maybe spin up two or three clusters, kind of roll on from there. There's also links to a bunch of videos on the Agones website, as well as a bunch of videos on the game server stuff. Or just follow me on Twitter, @neurotic, and I'm usually doing stuff. 

STEPHANIE WONG: Nice. Well, seeing that we have one of the MVPs of Google Cloud game servers in the room with us right now, what do you see are you going to be the new features that people can expect in the near term? 

MARK MANDEL: Always the fun question. So I'll definitely do the very corporate, well, we are investing heavily in the future. And you can see very exciting things coming soon. But one thing we have talked about publicly, so I can mention this, that I am excited about, which is support for hybrid and multi-cloud. 

So Kubernetes is awesome. GKE is awesome. But we are talking about games where sometimes you don't have all the infrastructure everywhere where your players are. Or maybe you do have a huge investment in on prem, and we want to make that available too. 

So yeah, maybe you have an on-prem investment already. So we want to make sure that we have that single pane of glass wherever it is that you need to run those game servers and wherever you have your Kubernetes infrastructure. Keep an eye out for that. That should be coming at some point this year, as well as other cool stuff that we have in the pipeline, which I can't talk about yet but I'm also very excited about. 

MARK MIRCHANDANI: Well, for the users who want to try it out, we're going to include as many links as we can down in the show notes. Obviously agones.dev is a great place to learn more about Agones and the game servers link for Google Cloud game servers. We are unfortunately getting pretty close to the end here. So, Mark, what else do you got for us before we wrap things up? 

MARK MANDEL: If any of this sounds super cool, you can hop on the Agones Slack. Not only do we talk about Agones in there, but we do have a chat room in there for Google Cloud game servers. And we're always hanging out talking about stuff. You can follow Agones on Twitter @agonesdev, as well as myself, I mentioned, at @neurotic. If you want to follow me on Twitch, I'm Mark Mandel. If you want to follow me on YouTube, I'm Mark S. Mandel. 

Usually I stream stuff every couple of weeks. And I throw those videos up on YouTube, as well as do some odds and ends on there as well where I experiment with stuff and have some fun to play with tech. I just do fun stuff. I don't know. It's cool. 

MARK MIRCHANDANI: Just tech things. 

MARK MANDEL: Just tech things. It's just cool. 

STEPHANIE WONG: Well, Mark, we always love having our founder back on the show here. So thanks for coming on. 

MARK MANDEL: One of the founders. Francesc is definitely a big part of the stuff still, just being very clear. It's a delight and a pleasure to come back and hang out with you all and do this all over again and stand in front of the mic and be part of the "Google Cloud Podcast." It's just lovely. 

MARK MIRCHANDANI: It's that lovely nostalgia blanket, right? 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: All right, Mark. Thanks so much. 

MARK MANDEL: My pleasure. 

STEPHANIE WONG: Sweet. 

MARK MIRCHANDANI: Once again, thank you so much to Mark for coming back. And of course, if you ever miss Mark's wonderful Australian accent, you can go catch him on pretty much three or four years worth of the "Google Cloud Podcasts" episodes in our hierarchy. And if we ever truly, truly miss him in new episodes, don't worry, we'll always have Robo Mandel to lend a hand. 

ROBO MANDEL: That's right. I'm always here for you, "GCP." You can also follow me on season seven of "Love Island Australia." Catch you in the Jacuzzi. 

STEPHANIE WONG: Yeah. I love that conversation with Mark. As he confirmed, some of our theories about the game development space, but it's obviously changing rapidly. There's a huge focus on geo-redundancy and meeting the latency requirements of players all over the world. And then there's the other caveat of having to maintain developer agility. How are their relationships changing with the infrastructure operators these days, right? 

MARK MIRCHANDANI: Yeah. And his point about how long the game development cycle is I think is a really fascinating one, because it's so easy to think, OK, well, there's been so much new technology in the past three years. Of course, we could just adopt some of this stuff that makes the developers' lives easier. But you can't just constantly rewrite the technology that underpins the game, right? You kind of need to decide on it and move forward. So I'm sure that really long turnaround cycle has a huge impact to how developers and operators think about creating and launching a game. 

STEPHANIE WONG: Yeah. I mean, we're always talking about DevOps agility and speed of development, which is somewhat of an antithesis of this long development cycle of gaming, which is warranted because there's a lot of things that go into creating a really spectacular game. But now we're seeing the influence of containerization in the space. And that begs the question, then, of, why would someone choose game servers over GKE? With the specific operational challenges of game launches and uptime, it does seem like Agones definitely has a place here. 

MARK MIRCHANDANI: Yeah. And I really liked what he said about scale insurance, right? And I always think about those make-it-or-break-it kind of game launches, where if it can't scale up fast enough, people are going to have a really bad experience. But up until very recently, scaling was something that you had to kind of really heavily preplan for. And even now, you want to make sure you preplan for scaling, of course. 

But it's a way different world when you're using cloud resources that have a little bit more control over when they're available versus having a huge server farm sitting there. It's a totally different shift. And it's a totally different mindset as to what you need to think about when you're launching the game. 

STEPHANIE WONG: Yeah, exactly. Gaming is very hit driven. So when you have a launch or maybe you just have a huge surge because a certain YouTube streamer suddenly makes a game extremely popular, so having that scale insurance is going to be key here. And then the other challenge with multiplayer games that have such a global presence is deploying reliable code across the world and managing game state and latency for players in each region. So I think there's another thing to be said around having that multi-region redundancy and performance. 

MARK MIRCHANDANI: I think one of the other great points he mentioned was how much of this knowledge really comes from just having to go through it, right? And how many companies have worked on games and figured out what works for them and what doesn't work for them. And being able to share that knowledge with other companies, I think, Mark has obviously been pretty outspoken about trying to get more collaborative information in the game dev world. And I think we're going to see, hopefully, some of that with the summit upcoming pretty soon. 

STEPHANIE WONG: Yeah. It's encouraging to see more and all the sharing in the space, because I think he was mentioning typically game companies have been somewhat secretive about their game development because you don't want to accidentally leak your latest game development. But in terms of actual infrastructure operations and just how to build a stronger architecture across the industry, it's really great to see that people are a lot more open with sharing that. 

MARK MIRCHANDANI: Absolutely. So make sure to check out those links in the show notes if you want to stay up to date and catch some of the cool stuff that Mark's been working on. But, Stephanie, what are some of the cool things that you've been working on? 

STEPHANIE WONG: Yeah. So it's a start to the year still. It's already February. But I do have some cool things coming up. I am about to launch "Season of Scale," season five, which is a YouTube series that I've started with our team members. This season five is going to be on databases and storage scaling tips, featuring our very own team member, Jenny Brown. And that's going to be a super dope series that people should check out. 

And then the other cool thing is I am coming out with an animated series around data centers. There's a huge fascination with data centers, at least personally. And so I wanted to go dive into the behind the scenes of how Google treats data center operations and some of the technology and people behind working 24/7, 365 days a year. 

MARK MIRCHANDANI: Yeah, I think we got a little sneak peek of some of your work with the data centers with a video last year that we talked about. I forget exactly when it came out. We put it in one of the episodes. And obviously there was a huge reception for that video. People were really excited to see it. 

STEPHANIE WONG: Yeah, exactly. So I'm really hoping that this lands well and y'all find out something you didn't know about before and it reaches to that level of excitement as the last video I've done. 

MARK MIRCHANDANI: Absolutely. So keep an eye out for that. And of course, we'll put some links in the show notes to that data center video, as well as some of the other "Season of Scale" videos that Stefanie's worked on, because they've covered a pretty wide gamut of topics, right? 

STEPHANIE WONG: Yeah. I mean, we've covered everything from serverless to now storage and also talked about some networking. So yeah, it's the full gamut. 

MARK MIRCHANDANI: Super, super cool. Well, for all of our listeners, thank you so much for tuning in, as always. We appreciate it. And we'll see you all next week. 

STEPHANIE WONG: Thanks, everyone. See you all next time. 

ROBO MANDEL: Ladies and gentlemen, we proudly present Suki the dog. 

[DOG PANTING] 

MARK MIRCHANDANI: My dog is visiting in the background. 

STEPHANIE WONG: I saw the doors slowly creep open. 

MARK MIRCHANDANI: If we can get a word from our sponsor, Suki, here. 

[DOG PANTING] 

Yes, that was fun. Yes, it was. OK.