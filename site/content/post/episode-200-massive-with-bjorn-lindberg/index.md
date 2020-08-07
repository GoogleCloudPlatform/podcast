+++
audioDuration = "00:33:50"
audioFile = "Google.Cloud.Platform.Podcast.Episode.200.mp3"
audioSize = 49123578
categories = ["Massive Entertainment", "Gaming", "The Division 2"]
date = "2019-10-23"
description = "We're sad to say goodbye to Mark Mandel this week but excited to bring you an interview he and guest host Robert Martin did with Björn Lindberg of Massive Entertainment."
draft = false
episodeNumber = 200
hosts = ["Mark Mandel", "Robert Martin"]
title = "Massive with Björn Lindberg"
image="/post/episode-200-massive-with-bjorn-lindberg/images/hero/hero-EP-200.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dm42rg/episode_200_massive_with_björn_lindberg/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

We're sad to say goodbye to [Mark Mandel](https://twitter.com/Neurotic) this week but excited to bring you an interview he and guest host [Robert Martin](https://twitter.com/cloudrobx) did with Björn Lindberg of [Massive Entertainment](https://www.massive.se/). The gaming studio is located in Sweden and owned by Ubisoft. Their most recent game, [The Division 2](https://tomclancy-thedivision.ubisoft.com/game/en-us/home), is a "looter shooter" game that was released in March. It can be played solo or users can be matched up to play with or against others.

To keep the game running smoothly, Massive employs a micro-service architecture to divide and conquer the trials of creating and running such a large, intense game. The Division 2 was launched with Google Cloud, a process Björn says was a bit easier than launching on physical hardware. Autoscaling in the cloud has created a simpler, more trustworthy gaming process as well, and by connecting to data centers in multiple regions, they're able to decrease latency.

<!--more-->

##### Björn Lindberg

Björn Lindberg is working as On-Line technical director at Massive Entertainment a Ubisoft owned and operated game studio in Malmö Sweden. He does design and implementation of on-line backend systems for large AAA on-line games such as The Division series of games and World in Conflict.

##### Interview

* Massive Entertainment [site](https://www.massive.se/)
* The Division 2 [site](https://tomclancy-thedivision.ubisoft.com/game/en-us/home)
* Ubisoft [site](https://www.ubisoft.com)
* Terraform [site](https://www.terraform.io)
* Grafana [site](https://grafana.com)
* Compute Engine [site](https://cloud.google.com/compute/)

##### Thank You Mark!

Thank you Mark for everything you've done to make this podcast a success! We'll miss you!

{{< transcript "[MUSIC PLAYING] [VOCALIZING] JON: This week's Cool Things of the Week comes from all of our hosts. For those of you who don't know, this is Mark's final episode on the podcast. And the new host came together to show our gratitude to Mark and all of his efforts to make the podcast as impactful as it is for our listeners. So without further ado, here is some kind words that we all would like to share." >}} 

SPEAKER 1: 200 episodes. If you do the math, I'm pretty sure that's just about four years of the weekly "Google Cloud Platform Podcast." And none of that would have been possible without Mark, not only coming up with this great idea, but being there, entertaining people, teaching people, giving them learning moments. I mean, thank you so much, Mark, for this awesome opportunity. And I know that all of the hosts that we have now are super excited to carry this on. Thanks again, Mark. 

MICHELLE: On this, our founder's very last episode, I want to express my gratitude for his contributions to the show. Mark's vision, expertise, and boundless enthusiasm have shaped our content and helped us all grow as hosts. 

Let's take the time to show our appreciation for all of our past hosts-- Francesc for conceiving of the idea with Mark and seeing it come to fruition, Melanie for leveling up content with a heavy dose of machine learning and the ability to convince the most fascinating people that they should talk to her on the record. I'm still amazed at the guests we've had on the show. And that's all thanks to their hard work and glittering personalities. Thank you, Melanie, Mark, and Francesc. The show will never be the same. 

JON: I remember listening to the podcast before joining Google, and I never imagined that I'd join on as a host. I remember when Melanie asked if I'd like to join at breakfast over a year ago. So sorry, Mark, I can't give you the credit for bringing me on, but you definitely helped me and the rest of our other hosts get up to speed to fill your shoes. 

We're 200 episodes in and the podcast is still kicking. And that's thanks to you Mark, as well as Melanie and Francesc. I'm sure I speak for our weekly listeners when I say thank you for creating this platform, bringing on weekly interesting guests, and giving us a healthy dose of you in every episode. So enjoy podcast retirement, and we'll be looking forward to having you on as a special guest or a host. Cheers. 

[MUSIC PLAYING] 

MARK: So very excited today to be joined by Bjorn Lindberg, online technical director here at Massive Entertainment. How are you doing, Bjorn? 

BJORN: I'm doing fine, thank you. It's morning. 

MARK: Yeah? 

BJORN: Like, my voice haven't warmed up yet, but that's fine. Like, it's going to get going now. 

MARK: That's excellent. 

BJORN: You guys forced me to speak. I mean, it don't happen before lunch. 

MARK: That's good. Excellent. We actually have a guest host here today, Robert Martin. Robert, do you want to say hi and just tell people who you are here at Google? 

ROBERT: Yeah, thanks, Mark. I'm the global solutions lead for cloud gaming at Google Cloud. 

MARK: Excellent. All right, so Bjorn, this is all about you. Tell us a little bit about yourself. What do you do here at Massive? 

BJORN: Yeah, I work as an online technical director, which basically means glorified programming pretty much. So I'm trying to program. That's like-- that's my main focus. That's why I'm here and that's my interest really. But as things turn out, organizational reasons, you want someone that sits there and say yes or no to certain things in the end. Generally speaking, I don't want to say yes or no, but sometimes you need to make decisions. 

MARK: Yep, that makes a lot of sense. So tell us a little bit about Massive Entertainment because some people may not be familiar. 

BJORN: Yeah, so are we are basically a AAA gaming studio. We are in Sweden. We are fully owned by Ubisoft, which is a big French company that owns a bunch of studios and a bunch of employees. And currently, we have been working on the two "Division" games. So we just released "Division 2" this March. And they are big online shooters-- PvP, co-op, looter shooter, get all the gear or build your character, endless progression kind of thing, all of this online with all the players. 

ROBERT: Yeah, so tell us a little bit about "Division 2", sort of the newest iteration of "Division." What were players most excited about for this title? 

BJORN: Purely from my perspective-- I mean, there is a whole lot of features in the game we could talk about. This is not my area. But purely from my perspective, it's like it's kind of the same thing, just do it better-- less problems, smoother, nicer experience. Then of course, if you look at the game, there's a bunch of new features. And you can do all these things, and there's new content, et cetera, right? But I mean, from my perspective, it's a lot of like do the thing we did for the first game, just do it better. Less problems for the players, basically. That's where we want to land. 

MARK: Yeah, and you work primarily on the multiplayer back-end services side of things, is that right? 

BJORN: Yeah, pretty much. 

MARK: Wonderful. 

BJORN: I used to say my job is like, get players online and get them to play with other players if they want to. Or they can play themselves if they want to. I mean, that's your choice, basically, as a player. But it shouldn't be a big hurdle going online and finding a friend. You don't want to run through enormous monster matchmaking lobbies just to play five minutes, and then sit in matchmaking lobbies for another 20 minutes to get to play five minutes and that kind of stuff. We just want it to be smooth. 

Generally speaking, you want to go press a button, say, I want to play with other players while I'm doing something. And eventually we find you some players to play with. And you say, yes, and then you get teleported to where you want to be. And there you go. 

MARK: No. That makes a lot of sense. 

ROBERT: So you mentioned it's a single-player or a multi-player game. How important would you say for a game like this the multi-player aspect is? 

BJORN: The way you should think about it, I think, is this. Most players approach games like, oh, I can play as a team player. I can play myself, right? At some point, they're going to say, well, this was fun, but maybe it's fun if I play with my friends, for instance. And then you can play-- form a co-op group and play together against, like, the environment, so to speak, and all that-- AI, whatever, right? 

You don't want that stuff to be too large for players to build a group with their friends. Eventually, someone's going to say, oh, well, there's none of my friends online today. I'm going to play with random people. I'm going to pick a group, like match-make, to get into a group with players. Same thing there, we don't want it to be a large step forward. And eventually you end up-- and it sounds weird-- some players are going to go to PvP gaming, where they play against other players. 

And in a way, that's the perpetual game, where it just goes on forever and ever because the content is other players, in a way. That sounds weird, but that's really-- at some point, you're going to run out of things to do, essentially. So you want to play against other players. 

We know from experience that not everyone is going to end up in PvP because it's like-- me, for instance, I never go there. I don't like to fight other people. I'm a team-work guy. I want to play with other players not against other players. So it's kind of your choice. 

But we don't want it to force you into that thing, right? So the importance here is that it's available, but you can still enjoy the game as a single-player player if you would want to. And there's no hard line that you need to go press a bunch of buttons in a UI and get there. And it's complicated, long waiting times, and that's tough. 

MARK: I hear the launch went really well. But can you give us a sense of the scale of the game or how many players or anything along those sort of lines? 

BJORN: The problem with online games is that you released your game, and then everyone comes at that launch, pretty much, right? And when I say at launch, I mean usually during a couple of weeks. It takes a couple of days for people to pick it up in all the regions around the world and stuff like that. But usually the first and second weekend is going to be a whole lot of players. 

And if you compare this to, say, I make my own website. I invite my friends to test my new photo sharing, whatever it is, right? Then maybe 10 guys in the beginning. And you figure out a bunch of the bugs. And then word of mouth and two years in, you have your 10 million daily users or something like that. You have fixed most of the technical problems that could happen to that point. We can do scale, and it's not that big of a deal. 

We have kind of the problem where we need to do scale they want. And we don't really have a choice. So to scale here, it's coming down to basically having, A, all the computability resources, so to speak-- like, you have all the machines that you would ever need-- and also making sure that we work together. Because even if you have all the machines, it doesn't necessarily mean all that the intercommunication that happens in the back end is just available and working. 

So a lot of testing obviously leads up to this point, where you say, OK, let's test this thing specifically and see what it does. And then you try to separate as much as possible in the code base so you don't end up in cases where things are weirdly inter-depending on each other in a way, where weird stuff happens basically. Because testing a whole system with all these machines is very hard. But that simulating one, a million real players, for instance, is not something easy to do because you need to have all these connections coming from somewhere, et cetera. 

MARK: There's no service where you can just ask a million of your closest friends? 

BJORN: Uh, no. We can certainly not do-- there's not a million employees. [INAUDIBLE] just give them a game and say, go play. That's not the case. 

ROBERT: So the scale challenge really comes in at launch because there's a bit of an unknown with how many players are going to show up on that first day and where it's going to go. 

BJORN: Well, we have a reasonable clue. But still the system as a whole is complex, right? It's simple parts that make complex behaviors together. We can test individual parts and say, well, I'm going to assume that we're going to see x amount of requests per second on this particular service. And I'll test it for 10 times as much and see that it works. That I can do relatively easily. But it doesn't mean that it doesn't have some weird global side effect in some other part of the system that you didn't think about or something, can be configuration errors that are hard to track down because there's just so much of it. 

ROBERT: So that's interesting. You mentioned the different components. What are some of the different components that it takes to run a multi-player game like this in the cloud? 

BJORN: I mean, we're a microservice architecture. It's the easiest way to get around this hurdle. You want to have a divide-and-conquer strategy. You want to say, OK, you guys, you do matchmaking. You guys, you do plans, You guys, you do log in, et cetera, that kind of stuff, right? And [INAUDIBLE] services basically, we have a common platform. Everything works. So obviously, because otherwise there's be too much different technologies in the space. 

But supposedly we have a bunch of services. And some of them are essential to get into the game. Like, you need to be able to log in. You need to be able to find a game server, et cetera. Those things are tested to death basically. You want that flow to work. 

However, if you have some other service, like, I don't know, say, leaderboard, and it has a hiccup or five minutes. It's not downloadable. And then you can focus resources on things that are essential and then other things there. If the leaderboard service crashes, it's not going to tear down the entire system. That's the benefit of microservices. But there are also organizational benefits because this guy can work on their own, so to speak. You don't have to synchronize everything with everyone else [INAUDIBLE]. 

MARK: Now, you also mentioned game servers? 

BJORN: Yep. 

MARK: What does that control? 

BJORN: So what I'm doing, generally, is getting people to a game server. That's my goal basically, get them as smooth as possible to game servers. And once you get them to a game server, it's a whole different area. 

We have a bunch of teams, obviously. But organizational wise, in this case, we are the online back-end team that does everything by orchestration and having all the service available, et cetera, working with our infra guys that basically fix the hardware, like the virtual hardware from Google, make sure that's up and running. But then we have the gameplay team, and they do the game client and the game server. 

So in the game server, we do portions of it, like we provide network stack and libraries for that kind of stuff. But they do all the gameplay logic. And if you compare the relative complexity of these two things, like if you take all the online back end and compare it to the games server, the games are still more complicated because it can do so many things. 

You have all these messages for different things you want to do. I want to like fix something in my inventory. I want to press the button. I want to shoot that guy. I want to move here. I want to do all these things. And to share interaction of all these things, it's going to make it very hard to test properly and have 100% coverage on every single case of everything, obviously. 

So maybe I should answer your question. What the game server does is basically running the game simulation for you. And the client will send these orders to the game server that are picked up on a frame basis. So the games are run on some frames, process all that stuff for your output, output should be, and send it back to the player and do the next frame. And it runs like that forever. 

ROBERT: So if I'm playing a game of "Division 2" with a few of my friends, we all connect to a game server. That's our simulated world that we share together. 

BJORN: Yep. It runs AI and knows what the general layout of the world is to a certain fidelity. Like, it knows here's a wall. Maybe it doesn't know there's a piece of trash on the ground. But it knows that here's a wall, and here a bunch of AI and that kind of stuff. 

ROBERT: So each time you get a new group of players that shows up and wants to play the game, we need an additional game server. 

BJORN: No, it holds them together. So for various reasons, the first one is that it's a resource problem, right? You don't want a new process every single time because you need to boot it, and it eats such a bunch of memory just by loading, right? You need to load an entire world. So you have all this static. 

It's called static, dimension static, like physics. All the houses, whatever, right? And that's quite expensive because the game is essentially a piece of Washington, DC, quite a large piece, by the way. So you need to load all that in memory, But then you're adding one player for that. It's, like, one megabyte for the memory for a player. But you load it up 10 gigabytes of RAM just to host the world. So you probably want to add a bunch of players to make it break even. 

So we host something between, depending on hardware, we are like 800 to 1,000 players per server. But for the most part you don't see them because we instantiate copies of the world. So when you go online, you're going to see yourself, and that's it. If you want your friend, you're going to put you into the same instance of the world that you have. 

MARK: So you kind of multi-tenant it. 

BJORN: The gaming term is faces. But it's kind of multi-tenant. 

MARK: So it sounds like running those game servers at scale is like a tricky problem. How do you do that on Google Cloud? 

BJORN: Yeah. We're basically having a bunch of compute instances. So the way it kind of works is that the client is going to figure out which data center it would prefer. But when it goes online, it's not pinging every data center, which one is closest to me? OK, this one. I would like, I don't know, Europe, somewhere. And in that data center we have a bunch of game servers running, basically. 

And various computing centers runs in binary, and that's it. It's very simple. The reason for that is because if we were to do this today, carte blanche, nothing prior, we would probably go and say, oh here's a bunch of interesting products from the Google catalog we could use. However, we have been doing this for 20 years or so. And we have a bunch of technology that solves a bunch of these problems already. It's easier to just re-employ it and say, OK. 

MARK: That makes sense. And I guess then once you want to scale, it's a question of just adding more GC instances as it goes up. 

BJORN: Yep. 

ROBERT: So the launch is usually the trickiest part of a game. Can you walk us through it? I believe the "Tom Clancy, Division 2" was your first Google Cloud launch. 

BJORN: That's true. 

ROBERT: Can you walk us through the experience of launching a game on the cloud? You mentioned different data centers. Maybe give us an idea of the scale of the deployment. 

BJORN: Scale deployment, I think we're in nine different regions. I think at launch we were a little more. I think we were about 11 or 12. I don't remember. 

ROBERT: How interesting. 

BJORN: Some of these regions are basically just more data capacity because you guys want us to scale between different data center. But they're both in the American West Coast. And there's literally no difference from a player's point of view at this point. Later on you can scale down a little bit because you don't have the same concurrency as you had when you launched. 

Yeah, it's quite large. But we try to automate almost everything because there's no one that's going to sit there and say, start another server, and all that. It usually happens, like, 9:00 in the evening in Sweden and then goes until midnight. And people want to be at home. 

So we want to automate. And then you add tons of alarms for various things that could happen. And then you'd best make sure that you can fix it if it happens. I think your question was, if it was smooth or not? 

ROBERT: Yeah, just interested in the experience of launching a game in the cloud. 

BJORN: My experience, it was very smooth, because we have done it on physical hardware before. And generally speaking, that's a little more work because you need to provision the hardware. You need to get an install, the yada, yada, yada, all those kind of things you need to do. And you need to have someone there running down in the data center and changing, right, or whatever it is, right? And this time, we learned APIs. We run everything through Salt and Terraform. And it's up and running. 

And we autoscale a bunch of stuff into the cloud as well, which we can do. So it's very convenient. And you don't necessarily bother too much about it. I'm not a guy who's sitting there doing all the work, in that sense, because I'm not doing deployment so much. 

But I got the impression from the people doing it that have said, this is way easier, less work for us. And you can trust it to actually work much more than you could before. It kind of makes sense, in a way, because you deploy a generic interface, so to speak. You don't care too much about what we put in them on visa versa, right? So we don't worry too much about what you're doing on your end. From that perspective, yeah, I think it's a sensible approach to do it like that because it's easier for everyone involved. 

MARK: Yeah. It's actually really interesting you mentioned that you started in 11 regions, and then you sort of scaled down. Is that just because you know your traffic better? Is that why, sort of like a cost savings? 

BJORN: Yeah, pretty much. And in some cases, when we say regions, what we really mean is like we don't mean South America. We mean data centers. And in some cases, as I said, some of these data centers are basically equivalent to each other, like they're next door geographically. And from a player's point of view it doesn't really matter if you're on that one or that one. They are both good, so to speak. 

And the reason we spread out is because we don't necessarily know the capacity, what it's going to look like in 2 hours or 15 hours or whatever. And say, OK, let's just be everywhere just to be safe. And we don't know if you're going to run out of resources in a particular data center. So it makes sense to pre-warn one and have it ready to go if you need to. 

MARK: Actually, for those who may not be aware, can you talk a little bit about why you have to be in so many regions and what the latency requirements are there? 

BJORN: Oh, yeah. Game servers. So what happens is you run them at a certain frame rate-- in our case, about 30 times a second, 20 to 30 times a second, depending, on what you're doing. And you want to get that message to the game server within a reasonable time, if it takes you 200 milliseconds to get to there, and then the server processing time plus the trip back, you are half a second behind all the time, right? From when I press something, it takes half a second for my client can acknowledge the effect, right? 

If you have too much latency, it's going to be noticeable at some point. In particular, say, I live in Australia. And I have to connect to Europe. It's going to be not incredibly interesting to play that game. So you want to be close to the player for that reason. 

Well, generally what we do, of course, you hide a lot of this latency. As an example, we can have a guy. I'm in my scope. [INAUDIBLE] scopes, so I have a couple of degrees field of view. And a guy runs through the scope, and I want to shoot them in the head after he runs by me. 

I'm going to allow my client to say, you shot him in the head, even though we don't know for a fact that's the case until later. And then if that was the case, we just pretend everything's fine. If that wasn't the case, we just remove the effect, so to speak. Oh, you didn't lose that health actually, because otherwise it becomes too laggy. So you need to apply effect immediately, ask if had happened. And then you need to correct later if the game server disagrees for some reason. 

And you have a bunch of techniques in the game server to make sure that you can figure this out. Because when the game server gets the message, it's like 100 milliseconds ago. So it needs to go back and see what happened 100 milliseconds ago. Where were everyone? Oh, that guy was there. OK, you did that head shot, or you didn't. 

MARK: And you say you also have a variety of microservices. Do you also spread those around in a variety of regions, or do you have them centrally? 

BJORN: We spread them over one region in Europe. So that's mostly what we call the core system, which is what you log into, where you find your friends, where you create a clan, where you fiddle around with your which character should I choose, switch game server should I play on, et cetera, those kind of things. And it's not particularly latency sensitive. 

It doesn't really matter so much if it takes like half a second to log in. You're going to do it once. And then you're going to play for an hour. No one cares. 

ROBERT: So these core services can be sort of centrally located. It's really the game servers that you need to get closer to the players. 

BJORN: Yeah, those are the ones we need to spread out, yeah. 

ROBERT: Yeah, that's interesting. And so you mentioned you're using nine regions. We have about 20 regions. What's sort of the balance in finding the right number of regions and versus the number of players that you can find to play within those? 

BJORN: I mean, for finding the right regions, you want to be everywhere, basically. You want to be in South America, in the United States. And you want to be in Africa, et cetera, et cetera, et cetera, right? So you want to be everywhere. In many places, there's not going to be a whole lot of players during particular hours. 

Like, if you have downtime in Australia, it's not a whole lot of players playing, right? Autoscaling makes it easier, obviously. So finding the right number of services is not a problem that we want to solve on a daily basis where we would add a stand up and say, yesterday we ran out of capacity in Australia. We should probably add one more game server. No, we don't want to do that. It's, like, we can automate that relatively straightforward. 

MARK: Yeah. and did you have a strong relationship with Google Cloud when you set this up? Did we help you out in any way? 

BJORN: We have Marcus [INAUDIBLE], and I brought in a bunch of tech people. So we're sitting around, and we're playing the game and waiting for something to go bad. I don't think anything really went bad. 

MARK: Oh, that's nice. 

BJORN: Marcus is shaking his head, like, nope, nothing went bad. So we have everyone there. So we have this big war room upstairs where we have all these monitors. And everyone is represented, so to speak, all the stakeholders. So we can figure out if something goes wrong, you can figure out what and where, and who should deal with it and usually go to everyone. 

It's like, we have this problem. Can you see anything? Can you go look at your monitoring and see? Can you see anything weird? Like, nope. OK, we check around. Oh, here's something. OK. 

ROBERT: It sounds like the launch went really well. But this was your first sort of cloud-native launch with Google Cloud. What were some of the challenges that you encountered in launching the game, and how did you overcome them? 

BJORN: From cloud perspective, in particular, or generally, because from a cloud perspective, there wasn't something that was really worrying, so to speak. The way we see hardware is that, OK, here's machine. We write everything for what you would like call the commodity hardware, or, like, garden-variety services. We don't have a requirement of special machines or very expensive database machines with tons and tons of memory or anything like that. 

So as long as you provide hardware which you can usually run on it. Game servers a little different. They need to be quite large, mostly because you want to cram in those 5,000-ish players on them. No, not really, there's nothing that was particularly complicated. There's all these little bugs you need to go find. But usually, in my software, most of the things just work, right? 

MARK: That just sounds too good to be true. 

BJORN: Yeah, it is kind of. 

[LAUGHTER] 

But, no, but-- 

MARK: I mean, I'm not complaining from the Google Cloud side. 

BJORN: No, no, no. But I know it sounds like it's too good to be true. But we did for "Division 1," and a lot of the technology is the same, obviously, because there's no reason to go around and reinvent it from scratch again, right? We just say, OK, here's everything we did for "Division 1." Of course we make changes, particularly like things, like we added leaderboards. We added cloud. New microservices. 

But the model and how you structure it around it is the same. We are microservices Here's the team doing that feature, basically. 

MARK: "Division 1" wasn't run on Google Cloud, right? 

BJORN: No. 

MARK: Right. When you came over to Google Cloud, were there particular things you were looking to improve on as you came across that you found that were possible now that you were on Google Cloud? 

BJORN: Yeah, autoscaling, like automatic deployment of service, that's number one, I think. And also ease of it, it's much easier for us to just say, here's a script that runs Terraform and sets up the environment. It's like, boom, done. It saves a lot of time also when you're doing testing because you have all the first party, like Xbox Microsoft, et cetera. They want to certify the build, obviously. So they need a particular build. And it needs to be online, of course. 

So we set up them. Like, here is your system that runs this particular build-- slang for version, so to speak, in case someone wonders. But here's your particular build, do all your testing, as you please. And we're going to update it in seven days so you get the latest and greatest and whatever. And they have a certain [INAUDIBLE] where I do testing. 

And same thing for localisation, you have a bunch of guys going in and saying, is this is the Spanish localization? Great. Basically. They need a copy of everything running with a particular version. And you might end up and have QA, Quality Assurance, et cetera. It does all the same things right. And you want them to be all be online in the same environment as live would be like. And for a day, of course, all on different builds because why would we have them on the same? That would be too easy. 

But you [INAUDIBLE] environment, so it saves a lot of time. Because when you do it on fixed hardware, someone's going to say, well, this is expensive. Can you have less? OK, sure, we can run the game live on less hardware. We can cut, cut, cut. Then we end up, oh, and we need to also have all this testing environments. Where do we put them anyway? 

We want them to be the same as much as possible, obviously, because that's what you're testing. At least you want all the configuration of everything to be relatively the same. So the difference between a test environment and a live environment, in our case, is generally that we don't allow people in unless they have certain properties on their account. And we basically write this IP ranges and say, these are allowed to connect, these [? students ?] or these people. That's the difference. Otherwise it's pretty much the same. 

ROBERT: It sounds like the ability to spin up environments when you need them, experiment with different regions were really kind of keys to that success this time. 

BJORN: Yeah, I would say so. You get to a point where you basically say, I want to test this as live-like as possible. And that's it, being able to spin them up as you want to. It saves a lot of time for everyone. 

MARK: Fantastic. 

BJORN: Our core business is not running service. Our core business is to make games. And in a way, we want to get away as much as possible from the nitty-gritty details. On the other hand, we have a bunch of people are super interested in these things. So we like to try to strike a balance. It becomes interesting for everyone. 

MARK: I'm curious. If you were going to do this all over again, is there anything you would change or do differently? 

BJORN: Nah, not really. [INAUDIBLE]. We'd look at it from what is the game? What is the player experience? If the player experience dictates we need to change something, then we do change something. And as I said earlier, we're running on commodity hardware. So it's unlikely that we're going to say, oh, my god, we need completely different hardware. That's like it's still the same Intel machines in the bottom running on a virtual station layer. And it's like, maybe we change the specs, like less cores, more cores, less memory, et cetera, that kind of thing. 

But to me, that's a slider in a UI on a web page, pretty much. And that's kind of what I like about it, because you don't have to make these decisions very early. If you do them physically, you have to go in and say, OK, we're going to this kind of game. What does it mean in terms of hardware? What is the hardware profile we're looking for? 

I don't have to, it's like, yeah, how many cores do you want? OK, I want 16. OK, good, there are 16. Go. 

MARK: Now, you also mentioned previously having dashboards and monitoring and keeping this thing alive. Launch is one thing. But keeping it live over a period of time, what do you look at there for a monitoring of game servers and game services there? 

BJORN: So the way it works, kind of, like, first we have your monitoring layer, which can tell us basic stuff about the hardware, to a level where you monitor it, like CPU consumption and bandwidth and that kind of stuff, which is interesting. But in the core, we basically have-- it's called a data sample. It's essentially a way to just say, here's a data point. And that can end up in various places. But one of them is an InfluxDB Grafana. And then we have Zabbix. 

So what we do in InfluxDB Grafana is draw all graphs. And we know roughly what we want to look at. And for Zabbix, it's most like if this ever happens or this value ever is lower or higher than this, you want an alarm. And then you sort your alarms according to severity. And then some of them it's going to send you an SMS and say, hey, you should probably look at this because this shouldn't be like this. It's a lot of them. 

MARK: It sounds like you use a lot of open-source monitoring tools. Did you choose those a reason? 

BJORN: We choose them naturally. We have basically the same stack for "Division 1," more or less, at least. They're available. There are certain problems you don't want to bother with. Like, you don't want to write your own operating system or databases. It just takes too much time for a little game. You can use open source stuff in this case and be on your merry way, doing games instead. 

ROBERT: And are you monitoring sort of technical elements of the system operation? Or is it more like player experience type of metrics? 

BJORN: We do both. Players experience, generally speaking, it's a little bit harder because you usually need to look at aggregates of data. You need to say, OK I've collected all this data about the player experience so far, typical example is what you can see, for instance, in-- this is a classic example of why in-game analytics everyone fails at level 7. 

People stop playing at level 7. Why is that? And then you look, oh, this mission that you have to play at level 7 is too hard, for example. That's the typical thing. But you cannot see it as a blip that happens just now. You need to look at the entire history of the player. 

ROBERT: Trends over time. 

BJORN: Yeah, trends over time. And that's basically run on a totally different system because we're solving two needs. One is I would like to see what happens right now. Grafana dashboard, BigGraph, or Zabbix alerts telling me what's happening. Or even we have even more elaborate interfaces, where I can basically [INAUDIBLE]. Every server had the web page where I can go in and see, what do you think about life right now? Like, what's your CPU consumption? How many file [INAUDIBLE] do you have open, et cetera, that kind of stuff. 

While monitoring all of the gaming experience is usually something that you put your both in a database. You run a [INAUDIBLE] job. You get a report on whatever cadence you want, basically, as soon as you can do it, or weekly, or whatever, depending on what area you're interested in. So generally those takes a little longer time. 

MARK: Yeah. And so that difference between monitoring and analytics, right? 

BJORN: Exactly. Generally speaking, you can't act on it immediately anyway because you need to do some change to the game, right? You need to make a new building, a change on the sign. You say, OK, that guy was too hard to defeat. I need to tune it down a bit, right? And you can't do that with a-- not all game design all at once have a knob for every single thing. But it's to tune live, so to speak. But it turns out to be an impossibility because the number of knobs, basically. 

If it was like one knob, you can probably do it, or 10. But we're now talking about literally thousands. I think thousands is low-ball number for how many knobs they would want to have ideally to tune everything to their liking. 

ROBERT: Yep. So you'd need some time to make adjustments. 

BJORN: Yeah, and even if you have a knob, you might not want to touch it because you don't know what is going to happen. You probably want to run it through QA, right? Because it's easier to maneuver that thing and say, oh, that's going to start. And then, oh, my god, now we have an exploit because a certain combination of gear and whatever. And you end up in a situation where people are fooling that boss and get all the loot. 

MARK: And game players will definitely work that stuff out. 

BJORN: Oh, yeah. 

ROBERT: Yes, they will. 

BJORN: Absolutely. I mean, you're testing and testing and testing. And the number of hours of testing goes into product, it's staggering. It's like you wouldn't imagine it, right? And then you go live. And then, like, two days later, they find an exploit. It's like, how did you guys find it? OK, I know players. You're gamers. You're trained to that. 

ROBERT: It's the mindset. 

BJORN: Yep. 

ROBERT: So it's been a great discussion about some of the services in GCP that you used to launch "Division 2," Compute Engine and a few of our other sort of global infrastructure services. Maybe for the next game, what else could Google be doing to help support your game launches? What other types of services and offerings do you think would be most important? 

BJORN: The thing from our perspective, or at least my perspective, as I said early, we write a whole lot of stuff ourselves. And we don't necessarily depend so much on services to do things. The problem with service, generally speaking, is usually the machine is needed to make a request. And it's kind of like a slower response kind of thing. 

What I'm really interested in is getting good open source libraries to solve common problems. Like, I would like to have an SSL library that is understandable, has a reasonable source code. And I don't need [INAUDIBLE] 4 and Lambda 5. I need [INAUDIBLE] and [INAUDIBLE] and that modern stuff, right? That doesn't necessarily make too much assumption about operating environment, doesn't necessarily have to be Unix. We need to build for other platforms than just Unix-like platforms. 

You have already open-sourced a bunch of compressors and that kind of stuff. I like that because it's like it builds everywhere. I can use it everywhere. It's readily available. It doesn't make a big complicated installation. You get a library file and a header, and that's it. You're done. Build it, done. 

And that kind of stuff would be great to have more of because, I mean, everyone wants it. Everyone needs it. It's just a convenience of having it available, so to speak. 

ROBERT: So really kind of reusable components that lots of studios and publishers would all either have to invent for themselves or go find somewhere else. 

BJORN: Yeah, we don't have the resources to put a bunch of people on building a new compression library because we really don't have that kind of resources. And same thing in crypto is even worse, right? Because even if you build your own crypto and think it works, it's going to be vetted for 10 years before you [INAUDIBLE] it, basically. And that kind of organization is not available to us, basically, because we are relatively small, by comparison at least. 

And, yeah, getting a hold of that stuff, that would be great. Because you're asking what services would we want to use. And so, yeah, we like your services. But what we would like even more is source code. 

MARK: No, that makes a lot of sense. All right, well, fantastic, well, Bjorn, thank you so much for spending time with us today. It's been-- 

BJORN: Yeah, thank you, guys. 

MARK: --a really great pleasure. 

BJORN: Thanks for coming over. 

ROBERT: Yep, thank you, enjoyed it. 

BJORN: Yeah, all right. 

MARK: Thanks again to Bjorn form Massive, giving us some wonderful insights into how they build and run their games on Google Cloud, a great, great interview. And thanks again to Robert Martin, as well, for joining us as a guest host while I was traveling through Sweden with him, definitely appreciate him taking the time. 

So episode 200, this is going to be my last episode on the "Google Cloud Platform Podcast." I'm not going too far. I'm just looking to spend some more time on, probably unsurprisingly, some gaming things. Also, it's been four years that I've been working on this podcast. And it was time to get some new voices in and give them some space to be heard, for sure. 

So some thanks that I think need to be said. First of all, thanks to all the new hosts that are coming on the podcast and all the kind words that they said at the beginning of this episode. That definitely makes me feel nice. And I'm super happy that everyone's having a wonderful experience. 

All the new hosts are amazing. They're all doing amazing work, as many of you are listening and already know. And I expect lots of really, really cool and interesting episodes in the near future and beyond. I also want to say some historical thanks as well. 

Obviously, thanks to Francesc Campoy Flores for initially starting this podcast with me. Without you, this would not have been possible. I think we both hope set the tone and help set the content and really just built the foundation of this from the ground up. So Francesc, 200th episode is as much kudos to you as it is to just about anyone else. 

I'll say thanks as well to Greg Wilson. His support from leadership has always been exemplary ever since day zero, when Francesc and I had this super interesting idea to start a podcast, always just a massive amount of support from leadership. So Greg, thank you so much for that. 

Huge amount of thanks to Melanie Warrick, who is my second co-host on the podcast. Melanie was, quite frankly, a breath of fresh air and just amazing content that she brought onto the podcast, enjoyed my time with you immensely and look back on that quite fondly and will continue to do so for a long time. I definitely also want to send a shout out to all the logistical people who work on this behind the scenes. [? Kristina ?] [? Fan, ?] who's our producer, who just manages everything these days and is basically the lifeblood of the podcast. You don't see their name show up anywhere. But [? Kristina ?] is amazing. And if you ever run into her at a Next or any other event, please give her a huge thanks for the work that she does. 

Also, the HD Interactive team, again, probably not a name you would see. But that team there does all our editing, all our content producing, all our social work, all our launches. They do a phenomenal job each and every week. And they're just tireless in their efforts. They really are just an absolutely phenomenal team. And so my hat's off to all of you as well. 

I'm really excited about the future of the podcast. But I definitely don't want to be remiss and miss out on saying thanks to the listeners. It has been a delight and a pleasure being on this podcast journey with everyone who listens to the podcast. 

It is hugely, hugely warming to hear the positive experiences that people have had because of the podcast, from people getting jobs at Google and other companies because of the educational content, people coming to events that we've run simply because of the podcast, and just many more. It is truly just a pleasure to join you all on this journey. And it is definitely bittersweet to be saying goodbye now. So with that being said, for the last time, for me, on the "Google Cloud Platform Podcast," thank you all for listening, and we'll see you all next week. 

[THEME MUSIC PLAYING]