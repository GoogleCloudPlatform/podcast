+++
audioDuration = "00:32:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.51.mp3"
audioSize = 47087826
categories = ["Internet of Things", "Kubernetes", "gRPC"]
date = "2016-11-09T01:07:49Z"
description = "Sandeep Dinesh, a fellow Developer Advocate for Google Cloud Platform, joins us to talk about how Mark and Sandeep built a fun IoT version of Simon Says."
draft = false
episodeNumber = 51
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Simon Says with Sandeep Dinesh"
externalimage="https://c2.staticflickr.com/9/8322/8050771801_87b4e448a0_z.jpg"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/DzS6ZvQHR3a"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5c24rz/episode_51_simon_says_with_sandeep_dinesh/"
+++

[Sandeep Dinesh](https://twitter.com/sandeepdinesh), a fellow Developer Advocate for Google Cloud Platform,
joins your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
to talk about how Mark and Sandeep built a fun IoT version of Simon Says.

Get ready for some real hacking, involving gRPC, Kubernetes, many programming languages, and even a bit of
soldering!

<!--more-->

##### About Sandep Dinesh

[Sandeep](https://twitter.com/sandeepdinesh) started coding and creating websites when he was 12 and
hasn't stopped. He is passionate about building easy-to-use products people love. Before Google,
he founded an IoT startup in agriculture and developed educational HTML5 games. At Google,
Sandeep's goal is to make cloud easy and help developers create the next big thing.

Sandeep loves video games, making music, and martial arts, and has Bachelors in Marketing and Computer Science.

##### Cool thing of the week

- What’s new with Google Cloud Resource Manager, and other IAM news [blog post](https://cloudplatform.googleblog.com/2016/10/whats-new-with-Google-Cloud-Resource-Manager-and-other-IAM-news.html)
- Adding Firebase to your Unity Project [docs](https://firebase.google.com/docs/unity/setup)
- Firebase for Games (Firebase Dev Summit 2016) [YouTube](https://www.youtube.com/watch?v=KClYcPjZL_k)

##### Interview

- gRPC Simon Says [GitHub](https://github.com/grpc-ecosystem/grpc-simon-says)
- gRPC: A high performance, open-source universal RPC framework [docs](http://www.grpc.io/)
- #43: gRPC at CoreOS with Brandon Philips [gcppodcast.com](https://gcppodcast.com/post/episode-43-grpc-with-brandon-philips/)
- gRCP bidirection streaming [docs](http://www.grpc.io/docs/guides/concepts.html#bidirectional-streaming-rpc)
- Google Container Engine [docs](https://cloud.google.com/container-engine/)
- Developing for Arduino with Docker and Johnny-Five on OS X [Medium](https://medium.com/google-cloud/developing-for-arduino-with-docker-and-johnny-five-on-osx-cc6813ae6e9d#.wysydp5m6)
- Go: code that grows with grace [Vimeo](https://vimeo.com/53221560)
- Redis: in-memory data structure store [docs](http://redis.io/)
- Run Redis on Google Cloud Platform [docs](https://cloud.google.com/nodejs/resources/databases/redis)
- #11 The Internet of Things with Jen Tong [gcppodcast.com](https://gcppodcast.com/post/episode-11-internet-of-things-with-jen-tong/)
- Socket.IO enables real-time bidirectional event-based communication [docs](http://socket.io/)
- Real-time IoT with Containers and gRPC  - Mark Mandel @ Ubiquity Dev Summit [YouTube](https://www.youtube.com/watch?v=nz-LcdoMYWA)

<div style="text-align: center">
  <a data-flickr-embed="true" data-footer="true"  href="https://www.flickr.com/photos/toywhirl/8050771801" title="Simon Says Memory Game">
    <img src="https://c2.staticflickr.com/9/8322/8050771801_87b4e448a0_z.jpg" width="640" height="427" alt="Simon Says Memory Game">
  </a>
  <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
</div>

##### Question of the week

How can I train Tensforflow models at scale?
- Cloud Machine Learning Platform [docs](https://cloud.google.com/products/machine-learning)



##### Were will we be?

Mark will be speaking about Simon Says at [DevFest West 2016 by GDG Silicon Valley](https://www.eventbrite.com/e/devfest-west-2016-tickets-28134010583)
on Sunday in Mountain View, CA.

{{< transcript "FRANCESC: Hi, and welcome to Episode number 51 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing? " >}}
MARK: I am good. Thank you, Francesc. How are you doing today? 

FRANCESC: Very good. Very happy to have someone from our team that I really just assumed we had interviewed before, but happens to be we didn't yet. 

MARK: No. We're having Sandeep Dinesh on the show. He is a great teammate and representative of the Developer Advocate Team. And he's joining us today. 

FRANCESC: Yeah, and we're going to talk about a game. We're going to be talking about Simon Says, which is apparently something that you two worked together on building, mixing IoT and Kubernetes and stuff. 

MARK: Yeah, that's pretty accurate. Yeah, I'll go with that. 

FRANCESC: Yeah. 

MARK: That's a good teaser. People should listen. 

FRANCESC: Yeah. It is pretty fun, and I personally have seen what the demo-- what the game looks like. It is lots of fun. 

MARK: It is lots of fun. It's one of my favorite talks. 

FRANCESC: Yeah. And then, at the end, we'll have a question of the week, as always. And this time, we don't know what will happen, so-- 

MARK: We could have a mystery guest. 

FRANCESC: Who knows? 

MARK: Who knows. Who knows? 

FRANCESC: Cool. So before all of this, let's start with the cool things of the week. And this week, as usual, we have more than one. We actually have two. And the first one is regarding IAM. So we had an episode on IAM, Identity and Access Management. 

MARK: Yep. 

FRANCESC: What are the news on this? 

MARK: So one thing that's really cool that's new is an organizational resource. 

FRANCESC: Nice. 

MARK: So it's a resource that sits above projects. Which means then that you can actually set owners for projects at an organization level. So say if you do something like only set one person as the owner for a project, which you should not do, and that person, say, leaves that company, you could get stuck. 

So you can set up organization owners. So anyone who's part of the organization level, that's great. And it also means you can do things like, I've got people who should be developers on a project. So they should then be able to access all the developer resources-- say, the developer projects-- but maybe not certain other projects that are for network admins or completely other things. 

FRANCESC: Yeah. I know that there's a very good use case for this, which is, if you have people managing only the finance side of it, being able to manage billing for all the projects in an organization, that totally makes sense. 

MARK: Yep. Yeah. 

FRANCESC: If you need to do things like this, that is probably the easiest way to do it now. 

MARK: Yeah. It's really cool. 

FRANCESC: And the other one, the other piece of news, is something that you are incredibly excited about. Like you were jumping around the studio a minute ago. 

MARK: Yeah, I'm a little excited. Yeah. Oh, wow, yeah, I'm so excited. So if anyone does any game development, Unity is a very, very popular game engine and development environment for people to build games in. Firebase, which we've had on the podcast more than once literally-- well, as we were recording, announced and launched the unity plugins for Firebase. 

FRANCESC: Nice. 

MARK: This is particularly cool, because previously, there was an open source plugin for just the real-time database. But now we have support for analytics, authentication, invites and dynamic links, Cloud Messaging, remote config, and the real-time database. 

FRANCESC: Wow, nice. 

MARK: So you basically have the full suite there. It's pretty awesome. 

FRANCESC: Nice. Just for the people that don't know much what this means, what-- you developed some stuff on Unity. What do you think this will be exciting for? 

MARK: So I think this is exciting-- so authentications, so if you want standard OAuth authentication for like GitHub, Twitter, stuff like that-- 

FRANCESC: That's huge. 

MARK: And just making that super, super simple to do. Analytics is free, so you can plug in your Firebase analytics and use them for as much as you like. Real time database, yeah. So if you want to build like turn-based games or card-based games, stuff like that. Or even just matchmaking. You know, a lot of companies use Firebase for matchmaking without having to worry about socket communication or transport protocols or anything like that. Firebase is a great backend as a service for doing that. And there's also some other fun things that you can definitely do in there, as well. 

FRANCESC: Personally, just with the authentication part of it, I'm just happy. 

MARK: Yeah. Like, who wants to write OAuth handlers? 

FRANCESC: Yeah. That is awesome. Cool. So I think it's time to go talk to Sandeep and our other guest, yourself. 

MARK: Which is me, yes. Yeah, let's go talk to myself. 

FRANCESC: I'm very happy to welcome today Sandeep Dinesh, fellow Developer Advocate from the Google Cloud Platform team. Hi. How are you doing? 

SANDEEP: Awesome. Finally happy to be on the podcast. 

FRANCESC: Yeah, finally. 

MARK: Yeah, it's great to have you on. 

SANDEEP: Finally happy. I haven't been happy since the moment. 

FRANCESC: So we're going to be talking about something pretty cool that you both actually worked together, right? 

MARK: Yep. 

FRANCESC: Which is Simon Says. 

SANDEEP: Yeah. 

FRANCESC: Could you tell a little bit, for the people that are not American, and have not watched teenager movies, what is Simon Says? 

SANDEEP: Yeah, so Simon Says, or Simon, as it's called, is a game from the '70s or '80s. I'm not sure when. It's before my time. 

MARK: '79,  '78 I think it came out. 

SANDEEP: Yeah. So it's a pretty simple game. You know, it's a box, and it has four different buttons with four different colors. And it will light up one color, and then it's a memory game. So you press that color. And then it lights up two colors, and you press those two colors. And then three, and then four, and then as many as you can until you lose, right? There's no winning this game. It's a great-- 

FRANCESC: There's no winning this game. 

SANDEEP: --a great game that you can only lose. 

MARK: Yeah. It was all-- like, this is basically my childhood before there were things like say Sega or Nintendo or anything. I was like, OK, red. Red, yellow. Red, yellow, red. Red, yellow, red, blue. And so on and so forth. 

SANDEEP: Hours of entertainment. 

MARK: Yes. 

FRANCESC: Cool. So why are we talking about it? 

MARK: So Sandeep and I were talking at a conference-- oh, wow, about a year ago at least now-- 

SANDEEP: Yeah, almost a year ago. 

MARK: --called "Ubiquity," which was an IoT conference. And we kind of got pushed together into building a project together. And we came up with this idea for Simon, but we wanted to make Simon multiplayer, and like massively scalable multiplayer. 

SANDEEP: Yeah. So it's kind of interesting. I think I was going to give an IoT talk, and then you were going to give a containers talk. 

MARK: Yep. 

SANDEEP: And then we were like, let's do-- 

MARK: Together! 

SANDEEP: A big talk together. And then we said, what can we do with containers and IoT and real time, and all this kind of buzzword-y stuff? Can we like do something that's kind of-- puts it all together, right? 

MARK: Yeah. So we came up with the idea. I think actually you came up with the idea-- credit where credit's due-- of taking Simon Says and saying, OK, let's make this playable over the internet. 

SANDEEP: Yep. 

FRANCESC: So just to understand, before we get on how you actually built this, how does one play it? Like what is the mechanics of the game? 

SANDEEP: The multiplayer version? 

FRANCESC: Yeah. 

SANDEEP: Yeah, so let's say me and Mark are playing. 

FRANCESC: OK. 

SANDEEP: Right? I will say "green." So I'll pick the first color, and I'll pick green. Now on Mark's device or screen, it'll show up green. And so now he presses green, and then he picks the next color. So it would be like green, yellow. Right? 

MARK: Exactly. And then so I send that to you. 

SANDEEP: And then it comes to me, and on my screen, it says green, yellow. And then I can go green, yellow, red, and then it goes to Mark's screen. And so we just keep adding an additional color, until someone loses. 

FRANCESC: OK. So it is online, and there's many players. But in any given match, there's only two players. 

MARK: Yes. 

FRANCESC: Cool. OK. 

SANDEEP: Yep. 

FRANCESC: So why don't you tell us a little bit about how you built this? We're on Google Cloud Platform podcast, so I'm assuming that the cloud is involved? 

SANDEEP: Yeah. 

MARK: A little bit. A little bit. 

FRANCESC: A little bit. 

SANDEEP: Surprisingly, a little bit. 

MARK: So first thing that we decided we were going to do was sort of talk about how we wanted this to communicate. Like Sandeep said, real time was really important. So if I press the color red on my machine, it should show up red on his machine in relatively real time. 

SANDEEP: Yep. 

MARK: We don't want latency to be an issue. What other criteria did we have? I think security was a big concern for us, obviously. Hacking Simon Says-- problem. 

SANDEEP: Simon Says is the number one most hacked game. 

FRANCESC: Yeah, that's a big issue. 

MARK: That's a big issue. 

SANDEEP: Very big issue. 

We also wanted multiple devices to be able to support Simon Says. Because there's an IoT aspect to it, so it has to work on physical devices. We wanted it to work on phones. We wanted it to work on a computer. It has to work in the cloud. It has to work on all of these different platforms, and kind of a seamless experience, right? If I'm playing on the phone, I should be able to play someone on an IoT device. I shouldn't be locked into playing only someone else on a phone, right? So that was another big criteria for us. 

MARK: Yeah. I think it's actually kind of interesting. Because I wanted to build something on Android, because hardware stuff terrifies me, and I think I'm going to set myself on fire. Whereas you wanted to build like this crazy box of buttons and wires and things. 

SANDEEP: Yes. 

FRANCESC: So that is interesting. So you're using different clients. One is an IoT stuff, which I've actually seen. It looks like your normal lunch bucket with buttons on top. 

SANDEEP: Yeah. So that's actually a really long story. Originally, I went and bought a real  Simon Says from the '80s from the store. And I took it apart. And I soldered it. And I put an Arduino in it. And it was so unreliable that I eventually ended up drawing buttons into it. Because who knew that the old Simon Says used actual buttons? The new one uses like these touch sensitive, capacitive things that are not reliable at all. 

And eventually, it turned into a lunchbox of buttons, yes. 

FRANCESC: Nice. So one runs Android with Java. The other one is running-- 

SANDEEP: Node.js, actually. 

FRANCESC: Node.js on what platform? 

SANDEEP: So we're actually running in Arduino, which runs C code. 

FRANCESC: OK. 

SANDEEP: It's talking a protocol called Fermata, which is, basically, you can send commands up and down a serial port to a USB. And then a computer runs the Node.js code and actually communicates with the Arduino. So this can be a Raspberry Pi or a fully fledged laptop. 

FRANCESC: Cool. What other clients do we have? Do we have like iOS or--? 

MARK: So actually, when we built this thing-- we've had several team members commit to it, as well. So not only is there a Java Android one. One of our teammates built a Java command line client. So you can interact within the command line. 

FRANCESC: Nice. 

MARK: And I think, Sandeep, you built the Node web one, as well. 

SANDEEP: Right. So we built one that works on the web with the Node server, which is pretty cool. 

FRANCESC: Cool. So the interesting thing now is, OK, so you have all of these different customer-- all of these different clients, right? That are using different technologies. How do you make them communicate correctly? How do you do this? 

MARK: So it's probably also worth noting that the backend server is written in your favorite language. 

SANDEEP: Python! 

MARK: It's written in Go. 

SANDEEP: Oh, sorry. 

MARK: So, yeah, I also wrote the backend server to allow for all the matchmaking, putting players together, so that they could play games together, as well as the game code in and of itself. And these all talk seamlessly with all the clients, which is pretty cool. 

SANDEEP: Yep. So I think, you know, we had a few choices. We could have used web sockets, or Firebase, or things like that. But we ended up picking gRPC, because it had the widest array of support for all these clients without having to deal with a bunch of hacks. And I think it was just very stable. And it was surprisingly easy to get it to all work, even though we were programming in like four or five different languages. 

MARK: Yeah. We've done previous episodes on gRPC. Like the cool thing about gRPC, if you haven't listened to it, is you write this thing called a proto file, which defines the data that goes up and down the stream, and also the services. So basically, these RPCs, they're Remote Procedure Calls that you can call. And then it generates a bunch of code for you that's idiomatic to the language that you're writing in-- so whether it's Node, or Go, or Java. 

And what's really cool about that is, yeah, so Sandeep and I sat down. We're like, all right, how does this work? Let's write our proto file, work out how this thing works. And then once we kind of had the proto file, we kind of just split up and went off and built our own clients. 

FRANCESC: Cool. 

SANDEEP: You cannot put us in a room for more than 20 minutes without us killing each other, so-- 

FRANCESC: Yeah. This is going to be a hard episode to record. Yeah, so the next question is, obviously, since you're using protocol buffers, one of the coolest things about protocol buffers is that it actually uses HTTP/2, so it makes things way faster. Is this something that was going on? Does that work in every single of the platforms that you were using? 

SANDEEP: Yeah, I think-- I've done demos where I've given this over like 2G connections. Because, you know, you're in the middle of somewhere, and you don't have a Wi-Fi connection to your phone, or something like that. And it's worked surprisingly well, right? Every time you press that button, it goes all the way to the server in a Google data center, and then it comes all the way back on another different internet connection to the other device. And it's almost instantaneous, which is pretty cool. 

MARK: Yeah, we actually-- we deliberately wrote it that way to make life easier for us, and also because it's a cool demo to have it-- like, once you click a button for it to light up, it actually gets a "light up" message. So there's a button press message that goes all the way back, and then a light up message that comes back again. Which is not to say you have to do it that way, but that's just how we did it. 

And yeah, I've done similar things where it's like, yeah, I've got a mobile connection, and I just push the button and it comes back. You know, you're talking hundreds of milliseconds, if that. 

SANDEEP: Yeah. But I think that the gRPC bi-directional streaming, the latency is very low, which is very nice for us. 

MARK: And it's a binary protocol, so it's really tiny in going over the wire, which makes things great. 

SANDEEP: Yeah, we're sending a few bytes, right? It's just the color. 

FRANCESC: So let's talk about that a little bit more. So there's many ways you can do it so the communication is as fast as possible. And the obvious one, since you're having IoT devices that do not necessarily have a public IP could be polling. But you mentioned bi-directional streaming. Could you talk a little bit about that? 

SANDEEP: Yeah. So gRPC, one of the really cool things I think that me and Mark really like a lot is the bi-directional streaming. So with this, you can send asynchronously from the client to the server, or from the server to the client, without having to do polling or any of these typical, very compute heavy tasks, right? So it's very, very lightweight. 

And the really cool thing, I think, about the bi-directional stream is once that stream is open, you don't have to send headers back and forth. You just send the raw data. And because it's one canonical stream, it's easy. 

MARK: It's really easy. 

SANDEEP: I don't know a good word for it. 

MARK: No, easy's great. And I think that is one of the things that I like about gRPC. And it's so-- the flexibility that you have there, you could just send like synchronous RPC calls. Like I send you some parameters, you set me back a response. Yay. 

But then you can stream data backwards and forwards. And for something like this, where we're making a game, like it's such a nice fit. 

SANDEEP: Oh, yeah. 

FRANCESC: Cool. So now we can understand how all the clients work. What about the servers? We said it was running Node.js? 

SANDEEP: No. Server is running Go. 

FRANCESC: Oh, sorry, it was running Go. I'm mixing my stuff already. 

MARK: I know you love Node.js, Francesc. 

FRANCESC: I know. I love it so much. Almost as much as-- yeah. So what about-- what platform was it running? Was it App Engine, Compute Engine? 

MARK: So we went with GKE. 

FRANCESC: Cool. 

SANDEEP: Container Engine. 

MARK: Container Engine. For a few reasons. One of which is gRPC is supported on Kubernetes, but it also allows us to scale nicely, because containers in Kubernetes. It worked out really well. So it's actually worth noting, like we never actually sat down and were like, oh, there's a bug with data going from like Node to Go or-- 

FRANCESC: Yeah. 

MARK: That was never an issue. That never-- it was always like, oh, there's something wrong with my code, or something. 

FRANCESC: Nice. 

SANDEEP: Yeah, I think it was-- I mean, we were using what? Redis for the caching layer for the persistence, right? And that works perfectly in Kubernetes, very easy to scale. And then our Go code that you wrote, also, you can just scale it up and down. And it's very easy, because we used a TCP load balancer on Google Cloud. So the gRPC connection just finds the server and connects to it, and it's pretty straightforward. 

MARK: So you can run five instances of the server, 2,000, 200, whatever you like. 

FRANCESC: Cool. So let's talk a little bit about the Redis instances that you had. How many did you have? Did you have one? Did you have it run in a container? 

MARK: So for demo purposes, I just run the one. 

FRANCESC: Was it running on a container or-- 

MARK: Yeah. So I run it one as a container. There's no reason why you couldn't have a cluster. Basically, we use it for some persistence, and basically for inner container communication. There's a pub/sub mechanism inside Redis. So if you've started a game. 

So basically, if one player is connected to one container, one player is connected to another container. It allows that information to flow between them, say, this is what's happening. 

FRANCESC: Cool. 

SANDEEP: Yeah. And we could have used, you know, data store, pub/sub, or something like that. But I think another goal of this project was to keep it 100% open source, right? So that was very important for us. 

MARK: Yeah. 

FRANCESC: Cool. 

MARK: And that worked that worked really, really well. But yeah, so you can run a huge Redis cluster if you want. I mean, we keep it really simple. I don't even think we're using data volumes to keep at persistent storage. 

FRANCESC: Yeah, that was the next question that I was going to ask. What happens if one of those containers dies? 

MARK: Yeah. So right now, it resets. Yes, completely. For demo purposes, it's fine. But yeah, if you were going to run this as a real game that people would play all the time, you'd want to use data volumes. 

SANDEEP: So here's an actual interesting fact. I checked the life of our cluster. And it's pretty much been the same containers running for the past 200 plus days-- 

MARK: Oh, wow. 

SANDEEP: --without any downtime. And I even upgraded the cluster from 1.2 to 1.4, and it was-- 

MARK: It was fine. 

SANDEEP: It was perfectly-- it just restarted the pods, and it was all fine. It was amazing. 

MARK: That's fantastic. 

SANDEEP: Yeah. 

FRANCESC: That is pretty amazing. Wow. So we've talked a little bit about all the easy things, like gRPC is amazing and makes your life easier. Kubernetes makes it scale very easily. And containers-- developing containers is so nice. What about the hard parts? What is something that you learned, or something that you wished you knew, before you started doing this? 

SANDEEP: So one interesting thing is we used gRPC before the 1.0 release. And it was much harder to use back then. I think there was a lot of bugs. You know, I had talked to the team being like, hey, the Node.js package doesn't compile. They're like, oh, don't worry, it'll compile next week. And I'm like, OK, I'll wait till next week. And it compiled next week, which was fine. 

With the 1.0, it's much more stable. So I don't think people run into those problems anymore. But it was a lot of fun interacting with that team and really, hey, look, we have a problem here. And then like they're immediately on it, which was a nice experience. 

MARK: Yeah, at the time, like installation of like protoc, you had to compile for source and all that stuff. Now it's so much easier. By the time this episode comes out, I will have updated, I think, all the server code to gRPC 1.0. So that'll be good. Yeah, it's so much easier. I can just download a release of protoc, for example. That's the tool that you use to generate code more often than not. I'm trying to think of other challenges. 

SANDEEP: Yeah, I think one challenge for me-- I actually wrote a blog post about this. So when I was doing-- when I usually do development nowadays, I do it in Docker, because it makes it a lot easier. I mean, downloading protoc, and compiling it and all that stuff was simplified using Docker. But because it was IoT, I had physical hardware plugged into my Mac. And so I've been doing a lot of IoT development on Windows, natively. And it's a lot-- it's a very nice experience on Windows. You install the driver. It kind of all works. 

On Mac, I felt the USB drivers were a little bit more flaky. And then when you add Docker to that mix, man, that was fun. So I had to do weird things like expose the USB device in like-- 

MARK: Oh, wow. 

SANDEEP: --protected mode and things like that. And I wrote a blog post on how to do Arduino development on Docker. Because you have to use, basically, like privileged mode to access the raw USB drivers, right? And then you had to mount it into the VirtualBox machine that's running Linux on your Mac that's running Docker, right? So it's like 10 steps to get it to work, but it was pretty interesting. 

FRANCESC: That sounds incredibly painful, actually. 

SANDEEP: Interesting is the word we use. 

FRANCESC: OK. 

MARK: I think, for me, it was working on the server code. I'd written like a huge number of tests to get it to work right. But once, you know, as soon as you put something into production, the best laid plans and all that stuff. 

But I think when I first wrote it, I didn't have as much logging as I probably should have done. Then I went back, and I logged everything, and it made things so much simpler to actually see what was going on inside a game. Because yeah, you're dealing with threading, right? One person joins. Another person joins. A third person joins. Who gets match made? Why do they get match made? Do things get go funny? 

SANDEEP: I remember you made that little mock for the server. And it was basically, when you join, you immediately win. And I was like, I'm winning so much! 

FRANCESC: So I'm actually curious about-- there's a talk that Andrew Gerrand gave-- it's about Go-- done a long time ago. And it was about how to do matchmaking in Go. And it is kind of complicated. The way they do it is like juggling around with channels, which is a beautiful thing to do. But it's kind of complicated. I was curious about, how did you do it? Was it hard to do it, taking into account that you had gRPC and so many different connections going on at the same time? 

MARK: Pretty much, we lean on Redis. 

FRANCESC: Oh, cool. 

MARK: So Redis has got lists that you can atomically push and pull from. 

FRANCESC: Oh, so you just gave it the two next ones. 

MARK: Yeah. Pop one off. And then, is there one there? No, await. And then, is there another one now? Yep, cool. 

SANDEEP: Yeah. 

MARK: It makes things really simple. 

FRANCESC: Have you considered adding a bot? 

SANDEEP: So, I mean, if you wanted to play Simon Says with a bot, I mean, that's like the most basic thing in the world. 

MARK: It would be hard to lose. You'd never win. 

FRANCESC: Oh, yeah. 

SANDEEP: I mean, you could add a bot, and you could just script the-- it would just be another client, right? So it would just be another client. 

FRANCESC: That'd be an interesting thing. 

SANDEEP: AI, i.e. pick a color. And it has infinite memory, so, like, can't really lose to it. 

FRANCESC: That'd be interesting. 

MARK: I bet it'd be a cool project, though. 

SANDEEP: It'd be fun. 

MARK: It'd be cool. 

SANDEEP: I think, for any listeners out there, if you want to build a bot and give us a PR. 

MARK: Yeah. Maybe a bot in a language we don't have yet, considering gRPC does support 10 languages. So that would be really, really cool. 

FRANCESC: That'd be a very cool demo. So you mentioned that the code is open source already? 

MARK: Yep. 

FRANCESC: OK. So we'll have a link to the repo in the show notes, obviously. And what about-- what is the cool things that you've learned doing this? Not the things that you were like, oh, man, that was painful. Or, sorry, that was interesting. But more like, oh, this is cool. Is there any of those things that you remember? 

SANDEEP: So for me, this was my first IoT project with Node.js. So using Johnny-Five, I think it's a really cool open source library. If you're a JavaScript developer and you want to mess with IoT, you just literally plug in your Arduino, and then you can write JavaScript code to control your devices, instead of trying to write C. 

So I wrote C for a very long time. I had a startup that was doing IoT stuff. And you can shoot yourself in the foot so easily, right? Like buffer overflow and out of memory. And you only have so much room on those devices. But with Johnny-Five, it was just so nice to write IoT code in JavaScript. 

FRANCESC: Yeah. It is probably worth mentioning that we interviewed, a long time ago-- that was on February 3rd, so a super long time ago. We interviewed Jen Tong, another developer advocate from the Google Cloud Platform Podcast-- from the Google Cloud Platform, sorry, not the podcast. And she also talked about Johnny-Five and how it's such a good way to get started doing IoT stuff. So we have a link to that episode, too. It's episode number 11. 

MARK: I think for me, actually, I hadn't had a chance to play with Redis before. I've known a lot of people who I've known who have used it and been huge fans and never had a chance to really play with it. 

FRANCESC: Redis is cool. 

MARK: And I was like, this is really cool. Yeah, really just being able to manipulate data structures online, or basically via an API, and not have to worry about how they work, be able to access them from multiple places, was hugely, hugely powerful. And yeah, like I was talking about, it made matchmaking super, super simple. 

FRANCESC: Yeah. For me, one of my favorite things of Redis is the fact that you have very simple, atomic operations. 

MARK: Yeah. 

FRANCESC: Like append to a list. Which sounds obvious, but once you can actually do that, everything changes. Because you don't need to fetch the value, add 1, put that back, making sure it's same transaction, stuff like that. That is pretty awesome. Yeah, that's true. 

So one of the clients you mentioned was a web client. 

MARK: Right. 

FRANCESC: And as far as I know, gRPC doesn't work for web stuff. 

SANDEEP: That's right. Yeah. So that was actually very interesting. Because if our gRPC does not work on the web, right? 

FRANCESC: On the browser, yeah. 

SANDEEP: So it works on Node.js JavaScript, but not web JavaScript. 

FRANCESC: Yeah. 

SANDEEP: I think it's because the browsers don't expose the HTTP/2 functionality to JavaScript yet. 

FRANCESC: That is pretty impressive that the browsers are the ones that don't support the HTTP/2 for-- 

SANDEEP: Yeah. I mean so like the JavaScript on the browsers don't support like the native HTTP/2 streaming and things like that. It's necessary for gRPC. So the funny thing is, we had to build a gateway to kind of translate the gRPC calls into web sockets. 

FRANCESC: Nice. 

SANDEEP: So it's very simple. So I use Socket.IO, and a Node.js server. And basically, whenever the gRPC call came in, I just converted it to a web socket on Socket.IO, sent it to the front end that's listening to that web socket, and then sending it back, right? So just kind of a little gateway. 

FRANCESC: Cool. So Socket.IO is a library? 

SANDEEP: Yeah. So it's a library for Node.js that makes web sockets easier than without it. 

FRANCESC: Cool. And you're running the library as a standalone container, or is it part of the server? 

SANDEEP: Yeah. So this is another client, right? So I'm running it on my local machine, actually. And then just going to local hosts to run the game. 

And you could easily run this on the web and put it on the server. I think we can just make another container. We just haven't done it. 

MARK: Oh, that'd be good. We should do that. 

SANDEEP: Yeah, that would be a good thing to do. 

MARK: That would actually be a really good thing to do. 

FRANCESC: It would make sense. Otherwise, if I want to use it from my browser, I need to run also-- 

SANDEEP: Run Node.js on your machine, yeah. 

FRANCESC: Oh wow, OK. Yeah, no, there's a better way to do that. Oh, but that is an interesting thing, the fact that there's actually already basically a library that you say, hey, this is gRPC on one side. 

SANDEEP: Well it's not-- so I wrote it myself. 

FRANCESC: OK. Is that open source, too? 

SANDEEP: That is also open source. It's on our repo. And it kind of came out-- that was part of the actual-- there was just one, monolithic node client. And that did both command line. It did Ardunio, and it did the web. And then, when we open sourced it, we split it up into smaller projects, which is why we never got the idea of running it in a container on Kubernetes, which would make a lot of sense. 

FRANCESC: Yeah. Yeah. I really thought you would say, is that-- oh, yeah, runs on Kubernetes. It would make sense. But OK, cool. So we're kind of running out of time. But is there anything else? Any other topic that we have not covered that you would like to mention? 

MARK: I'll talk a little bit about load balancing, because it's a topic that comes up with gRPC a lot. The nice thing about how we implemented this, for us, is that we have short-lived games, and that's a single connection. And once a game is over, it disconnects. 

So there's things you can do with load balancing with gRPC that can be a little complicated, depending on what platform you're on and how you do them. But for us, it was very simple, because we were like, oh, somebody's going to play a game. Once the game is over, they'll disconnect. So the next person who comes in, or the next time they want to play, they reconnect again, and they can play a whole new game. But it may be a different container. They're not stuck on a single container. Because you have a single connection there. 

FRANCESC: So that is interesting. So what you're saying is that if a container is running the game, if that container died, the connection would disappear, so the game is interrupted? 

MARK: Yeah, the game would interrupt at that point. 

FRANCESC: But whenever you try to connect again, you would never go to the wrong pod. You would just connect to whatever pod is running, because Kubernetes handles that. 

MARK: Yeah. It connects to whichever pod, and then it would matchmake you all over again. And then you would join a whole new game. 

FRANCESC: Cool. Did you ever consider trying to make it so it's actually-- like if a Docker container dies, nothing bad happens? Is that even doable? 

SANDEEP: In theory, it was doable. You could store all the data in Redis. I kind of wanted to make it as fast as possible, and so I kept a lot of it in memory, 

FRANCESC: Yeah. 

SANDEEP: But, in theory, you could do that, too. That would work, as well. 

FRANCESC: So my question was not only about the data itself, but also about where-- like how do you handle that connection? Like that's streaming. Can you handle that stream across different containers? 

MARK: So right now, the way it works is that connection-- like the way the game is coded is such that that connection declares-- like, that's the game. And as long as that connection is live, it makes things very simple. 

FRANCESC: OK. 

MARK: In theory, you could also do something like, with every request, send like a game ID across the board. 

FRANCESC: Oh, interesting. 

MARK: Be like, yeah, this is the game. And so if I'm attached to this, this is the message I'm sending. 

But it ended up being simpler this way with a single connection. Because then you knew-- like if there was something coming up and down this particular bi-directional stream, we knew it had to do with that game. 

FRANCESC: OK. 

MARK: Otherwise, authentication gets a little bit more tricky. And there's a few other security issues there. 

FRANCESC: So you're basically trading a little bit of flexibility on how flexible it is to errors and downtime to the fact that it is super comfortable to just use a little bit of statefulness there. 

MARK: Yep. 

FRANCESC: And everything is much easier. 

MARK: Everything's much easier. 

FRANCESC: Cool. Well, thank you so much for taking the time to tell me a bit about Simon Says. And we'll definitely have a bunch of links on the show notes to all the code, and the blog post you mentioned. And also, I think you gave talks about this, right? 

MARK: Yeah. We've both done several. 

SANDEEP: Multiple talks. 

FRANCESC: So yeah, we'll have some of the talks so people can have a look and see what the game actually looks like, which is actually-- I really like the lunchbox with buttons. I think it's very cool. 

SANDEEP: Yeah. I think the funniest thing, just to end on-- I think me and you, Mark, have only given this talk together once. 

MARK: It's true. 

SANDEEP: Even though we built it together, which is just how our lives work. 

MARK: Hilarious. Yeah. 

FRANCESC: We'll tried to have a link to that one, then. OK. Well, thank you very much. 

MARK: Thank you so much. 

SANDEEP: Thank you. 

MARK: Well, thank you so much to Sandeep and, well, myself for coming on the podcast today and talking about Simon and gRPC and Kubernetes. Well, Francesc, I hope you learned a lot. 

FRANCESC: Oh yeah, I learned-- I actually learned a lot. It was very interesting. I always like asking questions to people that know their things. And also, it was nice to talk to you. So yeah. 

No, just kidding. It was very interesting. I'm actually very interested on checking out the source code. Because it is really cool, the fact that you're doing so many different languages, and just because you're using gRPC, the communication needs. 

MARK: Yeah. It's really, really cool. 

All right. I think we have a guest coming that might be outside now. Hold on, let's just go have a look. 

[KNOCKING] 

[DOOR OPENS] 

TIMOTHY: Hey guys. 

MARK: Hey, how you doing? 

TIMOTHY: You recording a podcast or something in here? 

FRANCESC: Yeah, kind of. 

TIMOTHY: Mind if I crash the party? 

FRANCESC: Please join. 

TIMOTHY: Awesome. Hey, everybody. I'm Timothy Jordan. 

FRANCESC: Yeah. Timothy Jordan from "Developer Show" just crushing our podcast. 

TIMOTHY: It's what we do. 

FRANCESC: Yep. How are you doing? 

TIMOTHY: I'm doing great. I hear that you guys have a question of the week, and I would like to ask that question. May I? 

MARK: Please. Please, go right ahead. 

TIMOTHY: OK. So on "The Developer Show," we've been talking a lot about machine learning recently. And a lot developers know that TensorFlow is a fast, flexible, and scalable open source machine learning framework. But what they don't all seem to know is that you can train and run TensorFlow models on Google Cloud Platform. Can you tell us a little bit more about the details of that? 

SANDEEP: Yeah, that's a great question. So I think that when you are referring to is what we call the Google Cloud Machine Learning Platform, Cloud ML for short. And basically, it allows you to train models on Google Cloud Platform infrastructure, yeah. 

TIMOTHY: And that's, I think, really key. Because once you get into machine learning pretty deeply, your data is so large, and training takes so long on your desktop at home, that having a scalable infrastructure to train on becomes critical. 

FRANCESC: Yeah. It is definitely very, very important if you're going to start training models. So you can start with either your own model or choose one from the TensorFlow framework, which is open source. And then you're going to need to train those models. And no matter how big the data you're using is, you're going to be able to do that on managed and completely scalable infrastructure on Google Cloud Platform. 

And then once you're done, you're going to be able to serve those trained models. So you can do predictions based on that with live traffic, again, on Google Cloud ML. 

TIMOTHY: Awesome. It's also worth noting, though, if like machine learning isn't particularly your thing, we have pre-baked services that you can use. So we have the Vision API, speech, natural language processing, and the Translation API. These are REST APIs that have already had all the machine learning training and research all done for you, and they're a REST endpoint. So if you can call a REST endpoint from any language, you can use those things. 

TIMOTHY: Well, I will consider my question answered. Thank you, gentlemen. 

MARK: Awesome, thank you. 

TIMOTHY: Thank you. I'll let you get back to your regularly scheduled podcast. 

FRANCESC: See ya. 

TIMOTHY: See you guys. 

MARK: So now Timothy Jordan, the host of "The Developer Show," has left the studio. Francesc, where are you going? What are you doing? Is there a "Just for Funk" coming up? 

FRANCESC: I'm actually working on the next "Just for Funk," which is going to be-- it's going to be somehow released probably by the end of this week, maybe next one. Which is pretty cool. And maybe I will maybe go see you speak this weekend? 

MARK: Yeah. 

FRANCESC: Where are you speaking again? 

MARK: So I will be at the Silicon Valley DevFest down in Mountain View. 

FRANCESC: Cool. 

MARK: This weekend, I'm doing, funnily enough, the Simon Says talk. 

FRANCESC: Interesting. 

MARK: Yep. I'll be talking about gRPC and Kubernetes and some fun IoT stuff. Yeah. 

FRANCESC: Are you going to have your lunchbox with buttons with you? 

MARK: I will definitely have my lunchbox with buttons with me. 

FRANCESC: That is awesome. Cool. Well, thank you so much today for not only being the host, but also the guest. 

MARK: Thank you. I appreciate being here. 

FRANCESC: And talk to you and to you all next week. 

MARK: See you all next week. 
{{< /transcript >}}