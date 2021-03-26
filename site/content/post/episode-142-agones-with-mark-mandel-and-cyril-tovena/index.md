+++
audioDuration = "00:30:33"
audioFile = "Google.Cloud.Platform.Podcast.Episode.142.mp3"
audioSize = 44388490 
categories = ["Agones", "Ubisoft", "Gaming"]
date = "2018-08-15"
description = "Mark Mandel is in the guest seat today as Melanie and our old pal Francesc interview Cyril Tovena and Mark about Agones."
draft = false
episodeNumber = 142
hosts = ["Mark Mandel", "Melanie Warrick", "Francesc Campoy Flores"]
title = "Agones with Mark Mandel and Cyril Tovena"
image="/post/episode-142-agones-with-mark-mandel-and-cyril-tovena/images/hero/hero-EP-142.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/j6SHJW3fvDt"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/97jrp9/episode_142_agones_with_mark_mandel_and_cyril/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mandel](https://twitter.com/Neurotic) is in the guest seat today as [Melanie](https://twitter.com/nyghtowl) and our old pal [Francesc](https://twitter.com/francesc) interview [Cyril Tovena](https://twitter.com/kuqd) of Ubisoft and Mark about Agones. We discuss dedicated game servers and their importance in game performance, how Agones can make hosting and scaling dedicated game servers easier to manage, and the future of Agones. Cyril and Mark elaborate on Ubisoft's relationship with Google and how it's progressing the world of gaming. Listen in!

<!--more-->

##### Mark Mandel

[Mark Mandel](https://twitter.com/Neurotic) is a Developer Advocate for Games for Google Cloud, founder of the open source, multiplayer dedicated game server scaling project Agones, and one half of the Google Cloud Podcast. Hailing from Australia, Mark built his career developing backend systems for over 15 years, writing open source software, and building infrastructure in the cloud.

##### Cyril Tovena

[Cyril Tovena](https://twitter.com/kuqd) is a Technical Lead for the online group for Ubisoft Montreal, helping game productions to build online features in the last four years. Cyril started his career eight years ago, building web services in London. He is currently designing and implementing scalable microservices in the cloud.

##### Cool things of the week

* Introducing App Engine Second Generation runtimes and Python 3.7 [blog](https://cloud.google.com/blog/products/gcp/introducing-app-engine-second-generation-runtimes-and-python-3-7)
* Cloud Functions serverless platform is generally available [blog](https://cloud.google.com/blog/products/gcp/cloud-functions-serverless-platform-is-generally-available)
* GOTO 2018 • The Robustness of Go • Francesc Campoy [video](https://www.youtube.com/watch?v=40d26ZGfhR8)
* Simple backup and replay of streaming events using Cloud Pub/Sub, Cloud Storage, and Cloud Dataflow [blog](https://cloud.google.com/blog/products/data-analytics/simple-backup-and-replay-streaming-of-events-using-cloud-pubsub-cloud-storage-and-cloud-dataflow)
* Calling Java developers: Spring Cloud GCP 1.0 is now generally available [blog](https://cloud.google.com/blog/products/gcp/calling-java-developers-spring-cloud-gcp-1-0-is-now-generally-available)

##### Interview

* Agones Github [site](https://agones.dev)
* Agones on Twitter [twitter](https://twitter.com/agonesdev)
* Agones: Scaling Multiplayer Dedicated Game Servers with Kubernetes talk from NEXT 2018 [video](https://www.youtube.com/watch?v=CLNpkjolxYA)
* Ubisoft [site](https://www.ubisoft.com/en-us/)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Go [site](https://golang.org)
* dep [site](https://golang.github.io/dep/)
* Agones Contributing Guide [site](https://github.com/GoogleCloudPlatform/agones/blob/master/CONTRIBUTING.md)
* Developing, Testing, and Building Agones [site](https://github.com/GoogleCloudPlatform/agones/blob/master/build/README.md)
* Agones Slack Channel [site](https://join.slack.com/t/agones/shared_invite/enQtMzE5NTE0NzkyOTk1LWQ2ZmY1Mjc4ZDQ4NDJhOGYxYTY2NTY0NjUwNjliYzVhMWFjYjMxM2RlMjg3NGU0M2E0YTYzNDIxNDMyZGNjMjU)
* Agones Google Group [site](https://groups.google.com/forum/#!forum/agones-discuss)

##### Question of the week

Francesc answers our question of the week, "Should you do ML in Go?". 
Short answer? Probably not. [Python](https://www.python.org) may be the better choice.
If you do want to experiment with Go and ML, try [Gonum](https://www.gonum.org), [Gorgonia](https://github.com/gorgonia), or [TensorFlow for Go](https://www.tensorflow.org/install/install_go). 

##### Where can you find us next?

Francesc will be at [GopherCon](https://www.gophercon.com), [GoSF](https://www.meetup.com/golangsf/), and [Velocity](https://conferences.oreilly.com/velocity/vl-ny).

Melanie will be at [Deep Learning Indaba](http://www.deeplearningindaba.com) and [Strangeloop](https://www.thestrangeloop.com).

Mark will be at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/) starting August 28th. In September, he'll be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo) and [Strangeloop](https://www.thestrangeloop.com).

{{< transcript "[MUSIC PLAYING] FRANCESC: Hi, and welcome to that episode number 142 of the weekly Google Cloud Podcast. I am Francesc Campoy, and I'm here with my ex-colleagues--" >}}

[BA-DUM TISH] 

[LAUGHTER] 

--Melanie Warrick and Mark Mandel. Hello, how are you doing? 

MELANIE: We're good. How are you? 

MARK: We're pretty good. 

FRANCESC: Very good. 

MELANIE: Welcome back. 

FRANCESC: Thank you. Thank you. It's a pleasure to be back. 

MARK: Yeah. 

MELANIE: Well, we have you back, today, because we are going to be talking about Agones today. And Francesc, you were kind enough to come back and help interview Mark, who, of course, is part of this interview, since this is his baby that he's been working on for a while. 

MARK: Yeah. 

MELANIE: And we finally got around to talking about it. We got around to talking about it at Next. And we had Francesc come back to help us do the rappers, today. 

FRANCESC: It was fun, yeah. 

MELANIE: It seems about right. 

MARK: It was weird being on this side of the table. 

MELANIE: Yeah, it was weird. 

FRANCESC: Yeah, for once, you're the victim. That's good. 

MARK: Awesome. So as per always, we have our cool things of the week and our questions of the week. This week, since we have Francesc here, we're going to ask him, should you do machine learning in Go? 

FRANCESC: I will answer. 

[LAUGHTER] 

MELANIE: He won't give the answer. But we'll start off with our cool things of the week. And for this week, you're able to use Python 3 in App Engine. And we have a blog post that we will link to that. Something we also want to mention is that, next week, we will actually be doing an episode on App Engine, so you'll get to hear more about that and some of the announcements that went on at Next, as well. 

MARK: Yeah. And considering I'm talking about Python, it's worth noting-- and we talked about this at Next-- but Cloud Functions serverless platform is now generally available. So you can use it for all your production needs, which is pretty sweet. We have an SLA and all that good stuff. You'll also get new language runtimes, so Node 8, Python 3-- or 3.7, actually, to be specific. 

MELANIE: Exactly. 

MARK: And there's all sorts of other fun, good stuff in there. I know Francesc, you were looking at something in particular you quite liked. 

FRANCESC: Yeah, I saw something that is very cool. Because, actually, we spoke about it, a long time ago, talking about how connecting through Cloud SQL from Cloud Functions used to be quite hard. You need to install the Cloud SQL proxy, make sure it was running correctly and all that stuff. And that has been now fully managed. So it's fun. It's the just the click of a button, and then you're good to go. 

MARK: Nice. 

MELANIE: Nice. 

FRANCESC: Yeah, that's a great thing. 

MARK: Excellent. Well, while we have you, Francesc, I think, did you just speak or did it just go live or-- 

FRANCESC: The talk just came out. I gave it a couple months ago in Chicago. Yeah, I gave a talk. It's called "The Robustness of Go," which is basically about how robust is Go. And the result is, well, not much really. But who cares, because the whole talk is about how, well, Erlang is super-robust. 

And Erlang is not really robust. It's the machine learning behind Erlang that is robust, which is a pretty interesting thing. Because people mix in between languages and tooling. And basically, the whole point is about how Kubernetes is bringing that robustness to all of these other languages that do not have it built-in, because they cannot really do that. 

MARK: Interesting. 

MELANIE: That's good. 

FRANCESC: Yeah, just watch the video and like and subscribe. 

[LAUGHTER] 

No, sorry. That's your job. 

[LAUGHTER] 

MELANIE: Isn't everything like and subscribe now? 

FRANCESC: Yeah. 

MELANIE: So the link at the bottom of wherever I'm pointing, which, of course, works really well when you're on a podcast. OK, so another thing we wanted to mention, for this week, is that there is a blog post, we are going to link to, that talks about how to do a very easy backup and replay of streaming events using Cloud Pub/Sub and Storage and Dataflow. 

And this is interesting to use, especially a lot of people out there, right now, working with events, different types of data. So this is very valuable to see how they do this. And they take you through, step by step. 

MARK: Finally, we've been talking a bit about Java developers lately, which is pretty cool. So Spring Cloud GCP 1.0 is now generally available. This includes following Spring Boot starter integrations, including messaging with Cloud Pub/Sub, databases with MySQL and Postgres, file storage with Cloud Storage, logging with Stackdriver Logging, et cetera, et cetera, et cetera. 

So these Spring Boot integrations automatically discover credentials from the Cloud SDK. Basically, it does all the good stuff to make your life a little bit easier for getting up and running on GCP and having those integrations with your Spring Cloud applications. 

MELANIE: That's good. Well, Mark, Francesc, I think it's now time for us to go talk with both of you again. 

FRANCESC: Yeah, let's go back in time to Cloud Next. 

MELANIE: Sounds good. 

MARK: Let's do it. 

MELANIE: For this week's episode, we are excited that we're going to be interviewing Mark Mandel-- 

[TRUMPET PLAYING] 

--and, more importantly, Cyril Tovena-- 

MARK: More importantly. 

MELANIE: --who is here to talk to us about Agones, finally. Finally, we're talking about Agones. 

MARK: Finally. 

MELANIE: It took long enough, but we have a special, not exactly new-- 

FRANCESC: [LAUGHS] 

MELANIE: --co-host. 

FRANCESC: I think I said, not exactly special. 

[LAUGHTER] 

MELANIE: No, you're always special. 

[LAUGHTER] 

Not new, but very special that Francesc has come back to help us interview Mark. 

FRANCESC: Yes. Hello. 

MELANIE: Hello. 

FRANCESC: Happy to be back. 

MELANIE: Well, we're glad you're here. And we're here, and we're doing the interview at Next, as we speak. 

MARK: Yeah. 

MELANIE: Well, so Cyril, we know who Mark is. Tell us about yourself. 

CYRIL: So I'm Cyril, like you said. And I work for Ubisoft for the last four years, approximately. And I've been building web services for games, so far. And currently, I'm focusing on it being game production to deliver a dedicated game server in the cloud. 

MELANIE: Great. 

CYRIL: Yeah. 

MELANIE: I guess, Mark, maybe you should tell those, who are listening at home, who are you? 

MARK: Who am I? 

MELANIE: Why do we care? 

MARK: Why do we care? So I do a bunch of stuff. My name is Mark Mandel, a developer advocate. I do a lot of stuff for games at Google Cloud. I guess founder, co-founder, something like that of Agones. Sure, that works. 

CYRIL: Am I a co-founder? 

MARK: I don't know. Are you? 

CYRIL: I just-- it come out today. 

[LAUGHTER] 

MARK: So, yeah. Agones came out of some of the stuff that I've been doing with Kubernetes and game servers in the collaboration that we have here with Ubisoft, as well. So been doing a lot of that work. 

FRANCESC: I remember you working on this project for quite a while. But I did not remember why. 

[LAUGHTER] 

So could you tell us a little bit, why Agones? What is it and why did you create it? 

MARK: Cool. Listen, Cyril, you mentioned something just before. You were talking about dedicated game servers. Should we talk a bit about what those are and why those are important? 

CYRIL: A game server is an authoritative source of events in which you play your video games. And the idea is it actually receives all the events of the player. And then it can do some game logic and also send back the information to all the players, so they can render the actual world state on their console. 

MARK: Yeah. So dedicated game servers are really important for, I think, two particular reasons-- very fast-paced multiplayer games, so like your Overwatches and your Fortnites and those kind of games-- one of which is, unfortunately, we can't change the speed of light. It would be really nice if we could. So being able to control the physical location of where all your players connect to is really powerful. 

So if we were playing a game-- we're here at Next. If we could put a server that was actually in Moscone, that would be great. Because it's actually close to us. Ideally, we wouldn't want to build a server in like Australia. That would be sad. 

And the other fun thing is-- I don't know if you've actually noticed this, but people are horrible. So- [LAUGHS] 

MELANIE: Wow, that's a revelation. 

MARK: Yeah. 

FRANCESC: I did work with you. 

[LAUGHTER] 

MARK: Yeah, I know. And so that's true. And so you've definitely noticed. Melanie is still working this out. And so any time you give a binary to someone or people can see the traffic that happens between systems, they're going to introspect it and try and cheat things. Basically, if you have a dedicated game server, you can make it authoritative. And it's one way of helping with cheating. Anything you want to? 

CYRIL: No. I think also talk about the latency. I think this is something that is very important. When you have a game, like a FPS game and a shooting game, it's very important to have a good latency. So that's when you want to start using a dedicated game server. 

MARK: So, back to your question, which was why. 

MELANIE: Yes, why? 

MARK: [LAUGHS] Why? 

FRANCESC: Actually, before we get into the why, does this mean that you're rendering the images and everything on those servers? Or it's just like the data about the events on the game? 

CYRIL: The data and the events of the game. 

FRANCESC: OK. So then, basically, that's information that then the client, that is like, whatever, doing it up in GL and crazy things to render it, [? logical. ?] 

MARK: Yeah. 

CYRIL: Yeah, so some very simple, that you get games out of, they just follow back the actual information from one player to the other players. 

FRANCESC: Cool. 

CYRIL: It could be a very easy example. 

MARK: Yeah. But other games servers, we'll probably do like full physics simulation and-- 

CYRIL: Yeah, exactly. 

MARK: --everything that's actually happening inside the game and what it's doing. So, yeah, why Agones? So hosting and scaling dedicated game servers is a little different from other types of applications. 

So if you look at something like a traditional web application, it's stateless. You could spin up 100,000 of them. And if you kill 50,000 at one point, as long as there's enough to handle the load, nobody cares. If you run a database, the database runs for probably months or years on end. So that's data you want to persist to a disk. 

Dedicated game servers, I feel like this is the thing that sticks with me. They sit in this weird space, where, before players connect to them, you could run 100,000 of them, kill 50,000 of them, and no one would care. But as soon as players connect to those dedicated game servers-- and they're doing direct connections. They're not going through a load balancer-- as soon as you have a direct connection and players playing on them, you cannot kill those, because players get really mad. 

FRANCESC: Kind of makes sense, yeah. 

CYRIL: And it's very difficult to connect them back to another session. 

MARK: So Agones exists to handle those sort of problems. So being able to create these game servers, either on demand or potentially warm versions of them, beforehand, and making sure to control and manage the lifecycle of those game servers, so that once players are connected to them, even if you want to update those game servers or you want to scale down or scale up, you're not going to interrupt those game sessions, essentially. 

FRANCESC: Cool. So you're using the term, dedicated game server. What is the other alternative when it's not a dedicated game server? How do you do this? 

CYRIL: It's actually a peer connection. So you connect players all together without a server. So they directly connect each other. That's another option. 

FRANCESC: Oh, I see. Cool. 

MELANIE: And who is using this? Who's taking advantage of this? 

MARK: Of dedicated game servers? 

MELANIE: Yes, of using Agones. 

MARK: So Agones, right now, is still fairly early. It's alpha. So literally, as of right now, I am doing a 0.3.0 release. 

FRANCESC: Yay. 

MARK: So we've got some people who are playing with it and some people who are kind of working against it. Nothing that we can specifically mention right now, I think, is probably pretty accurate. 

MELANIE: Yeah. Working against it? 

MARK: Working against it. Trying it out for a few things, I think that works. So we're getting a lot of feedback, which is really, really good. We've still got some features that we want to have done on the road map and will be needed for a full 1.0 release. But we're moving forward, pretty quick. 

MELANIE: And how does the relationship work with Ubisoft? 

MARK: They tell me what to do, and I do it. 

CYRIL: [LAUGHS] 

[LAUGHTER] 

It's close, huh? 

[LAUGHTER] 

MARK: Kind of. 

CYRIL: Yeah, well, for me, I think the relationship is that Google Cloud is very good at scaling containers. You've been doing that for a while. Especially with Kubernetes, you're the cradle of Kubernetes, so that's why we are collaborating together on this project. And on our side, I think, since we have a lot of online games, we have the expertise of running those online games. And we can help build that project. And we know, actually, what it takes to run dedicated game servers. 

MARK: Yeah. I just want to say, it's been a real delight and a pleasure working with you on this project. 

CYRIL: Nice. Same for me. 

MELANIE: Well, good. Well, where did the name come from? 

MARK: [LAUGHS] 

FRANCESC: And how do you pronounce it? 

MARK: OK. So actually, I had this conversation, a little while ago, with a person I met. Apparently, I should actually be saying "Ah-hone-es." 

FRANCESC: "Ah-hone-es?" 

MARK: I could be-- no. So I'm going to say this with a grain of salt. I was told by someone who speaks Greek. So apparently, Agones, with a hard G, means elbows. And "Ah-hone-es" comes from a public competition. It was like a precursor to the Olympic games. So normally, at a public gathering, you would have-- I love using the term "feats of strength." But you would have sporting games and that kind of stuff. 

So people would gather for big public events, and there would be competitions. And I felt like that would be kind of appropriate for basically a platform for multiplayer games. Also, I got it through legal review. 

[LAUGHTER] 

So, there was that. 

FRANCESC: Yeah, that's interesting. So you're supposed to pronounce it "Ah-hone-es" or something like that? How do you pronounce it? 

MARK: I have a tendency to say "A-gone-es," which I think is probably more amusing, because it's "elbows." But I don't mind as long as you try the platform and see if it works. 

MELANIE: As well as maybe contribute to the platform? 

MARK: Yeah, contributing is great, too. 

MELANIE: What are the unique challenges for running dedicated game servers? 

FRANCESC: You mentioned, before, the fact that you cannot just like downscale easily. What other things there? 

MARK: So, yeah, we talked a bit, before, about how, like scaling down, you can't just kill players. They tend to get mad when you do that. So that's definitely a unique challenge. I think a dedicated game servers definitely also have-- outside of the Agones space, they have challenges around CPU performance. They're very CPU bound. So you're doing a lot of physics simulations and extending a lot of network traffic. Network latency, we were talking about that, too. It's definitely a thing, as well. 

CYRIL: Rationing, also, is very complicated, with the client and the server. It's very complicated to handle. 

MARK: Yeah. So there's communication things you need to consider. So much like, say, for example, if you were doing, say, like a gRPC or REST-based service, as you change, as one side goes to another, you need to change both the client and the server. And the same things exists with dedicated game servers. 

CYRIL: [INAUDIBLE] very busy. 

MARK: Yeah. 

CYRIL: And it needs to be available pretty quickly, also. 

MARK: Yeah. Players tend to get mad if they can't get their games really quickly. 

CYRIL: They don't like to wait. 

MARK: They really don't like to wait. They get really, really mad. 

CYRIL: Or they play another game if you have to wait. 

MELANIE: That could be a problem. 

FRANCESC: How does Kubernetes help with that? What are the components or features of Kubernetes that make it so Agones is a good match? 

MARK: Yeah. This is where I get really excited. 

[LAUGHTER] 

Kubernetes gives a lot of the base building blocks for basically running processes on big clusters of machines, I think, at a base level. I think that's what it is. And it has a declarative and API-driven approach to doing that. And the other thing that it gives, that I think is really exciting and what makes Agones possible, is it gives native extensions internally. 

So if you are familiar with Kubernetes, you have pods and deployments and services, like those kind of nouns. And the phrase I like to use is you can add your own nouns. So for Agones, for example, we're like, here's a game server noun. And we're going to tell it how to extend. It's called a custom resource definition in a controller. 

But at the end of the day, we're like, you install Agones, and now, suddenly, Kubernetes is like, oh, I know how to manage game servers. That's cool. Oh, I know how to manage fleets of game servers, because now I know what a fleet is. And I know how to manage those in a declarative way. And exactly the same way as you would do with a YAML file for a deployment, you can do, say, a YAML file for a fleet or a game server. 

By the same token, you can do the same thing through the Kubernetes API, as well. It extends both the YAML definitions that you can apply, as well as the Kubernetes APIs. Or Kubernetes knows what game servers are and can manage the life cycles and that kind of stuff. 

CYRIL: Yeah. And one aspect that is very enticing about Kubernetes is it brings a lot of things like log aggregations that you don't have to do. There is also the auto-scaling, node selection. There is a lot of very interesting features that you can take advantage when you are using a game server. 

MELANIE: Nice. 

MARK: Yeah. The other thing I actually want to make sure I bring up, as well, which I think is really important, because we talked about latency. Kubernetes is really important here, because sometimes players show up in really weird places in the world. Sometimes you'll just have a group of players somewhere in the world. And you're like, OK, we need to get our infrastructure somewhere close to them, so that we can get close latency. 

Now maybe GKE or another cloud provider isn't necessarily going to help you for that. Maybe they are. Maybe that gives you some more options. And maybe you just need to get a co-lo and stick Kubernetes in it. And now, suddenly, you can run your whole infrastructure. 

So that kind of flexibility is really important to us, to allow you to run these platforms in exactly the place that you need them, so that your players can get the best experience. 

MELANIE: Were there any trade-offs that you had to make? 

MARK: Some really minor ones. I'm thinking about some of the stuff around RBAC. 

[LAUGHTER] 

There's some stuff that we're still working out. This gets really nitty gritty. But like RBAC is applied at a pod level, for example. And we do some side-car stuff that enables access to, say, what happens inside the custom resource definition and basically the game server definition. But we're looking at ways we can lock that down a little better. But otherwise, it's been pretty OK. 

I had to write some special health-checking stuff specifically for game servers. So by default, at a pod level, you can tell your pod to restart if something fails or not. But what we want instead of-- if a game server fails for whatever reason, once players are connected to it, you don't really want it to restart. Because then, if players reconnect to a state that was 0, then weird stuff could happen. 

So we want it to just die. But before a player connects, we want it to restart. So we had to do some custom logic for that, which was kind of fun. But yeah, odd stuff that Kubernetes wasn't necessarily built for. But mostly, it's been actually really, really good. 

CYRIL: Yeah. I think it has been very good, because Kubernetes has been built to be extensible. 

MARK: Yeah. 

CYRIL: And it has been very easy to actually extend it. 

FRANCESC: Yeah. The interesting thing is I don't think that many people use stateful containers on Kubernetes. Did you find any specific issues when you got into that? You were mentioning that it's better to die than just to restart. Are there any other things, like how do you handle the fact that, if that connection goes down, temporarily, do you just give up? 

MARK: So on the Agones side, we don't handle the communication side of things. We defer to the actual game server implementation. 

FRANCESC: Oh, OK. 

MARK: We're pretty hands-off in that way. So we're like, you can make UDP connections or TCP connections. Most game servers use UDP. And then it's kind of up to the-- it's kind of application specific, I think is probably pretty accurate. 

CYRIL: Mm-hmm. 

MELANIE: Nice. Cyril, what was it like working with Mark? 

CYRIL: It was great. 

[LAUGHTER] 

No. 

[LAUGHTER] 

MARK: I was going to say, I'll give you that money later. 

FRANCESC: No, but for real? 

[LAUGHTER] 

CYRIL: Not to his face. 

MELANIE: We can all get together and compare notes later. What did you enjoy the most about this project, working on this project? 

CYRIL: Well, what I enjoyed the most was, well, working with Mark was nice. 

MARK: Ahh. 

CYRIL: And what I really liked, with the collaboration, was that Mark was able to actually ask some Google team, when we were required, and it was awesome. Because some times we are getting stuck or we needed advice on how to build stuff. And he was able to do that. So that was great. 

MARK: I think, yeah, my end would be almost kind of the opposite. Its been really great to sit down with Ubisoft and be able to be like, OK, so if we are doing this with game servers, and this happens, what's the right way for us to approach this? 

And the other thing is, I mean, a lot of it, we've done in the open, which has been great. It's all on GitHub. We're all doing Issues. It's all on Slack. Everyone can come in and come see what's going on. We're pretty open about our process and how we do stuff. We're very open to anyone coming in and contributing stuff, as well, which we've had, which has been really great. 

FRANCESC: Do you happen to know of some metrics on the project, like how many contributors things like these? Are you're looking for new contributors? Are they easy issues that people can contribute to? 

MARK: Yes, I do have those answers. So we currently have 17 contributors. There we go. We are definitely looking for more contributors. We have "help wanted" and "good first issue" labels on our repository. 

FRANCESC: And what parameter language are you using? [LAUGHS] 

CYRIL: Go, obviously. 

FRANCESC: Oh, interesting. 

[LAUGHTER] 

MELANIE: Do you have any specific questions around that? 

FRANCESC: I mean, no. I was going to ask or why you chose it. But you're extending Kubernetes, so I guess it's the way to do it. But, actually, the question would be the other way around. Is there any complaints about Go, like anything that you faced that's like, oh, I wish I was doing Clojure? 

MARK: It's the worst. 

FRANCESC: [LAUGHS] Just the worst? 

MARK: It's just the worst. It's just, I hate it. It's just the worst. 

MELANIE: All the problems. 

MARK: No. I mean, I personally like Go. It's good for getting stuff done. Been using Dep as dependency management. It's fine. It works. We haven't moved to Vgo yet. 

FRANCESC: Oh, cool. 

MARK: I don't know what's happening there. 

MELANIE: Well is there anything you would do differently if you were to do this all over again? 

MARK: I don't think so. We go back and fix things if we have decided it doesn't work. An example of that, that's actually coming in this release, is, initially, we were like, oh, game servers-- or maybe I initially said it. I don't know if it's away. It might have been a me-thing. --game servers only need one port. And I was like, oh, it will be fine. And everyone was like, no, they need more than one port. And I was like, OK, let's change that. So that's coming in this version now. So actually, we need some half-decent backward compatibility, too, so that's all working. We're pretty iterative, especially being alpha, as well, if stuff's broken, we just fix it. 

FRANCESC: What are the plans for the future? Like you just mentioned you're in alpha. Is beta coming any time soon? What about 1.0? 

MARK: Soon? 

[LAUGHTER] 

FRANCESC: For some definition of soon. 

CYRIL: Soon, [INAUDIBLE] Mark. 

MARK: Yeah, that works. No, we definitely have big goals though. There's a lot of work to be done. But next big ticket item is definitely going to be around visualization, statistic management, that kind of stuff. 

CYRIL: [INAUDIBLE] 

MARK: Yeah, which we're pretty excited about. So we want to do some statistics around players, like number of game server, visualizations, that kind of stuff. But I think, also, do some very standard metrics for game servers and FPS counts, those frame counts, and like hitching and that kind of stuff. Multicluster is top of mind, as well. What else did I have on my list? 

CYRIL: Auto-scaling? 

MARK: Auto-scaling, yes. Yeah, that's another thing that we want to explore more, as well. 

CYRIL: Maybe Windows? Yeah, if it gets more money, [INAUDIBLE]. Yeah. 

MARK: Yeah. So Microsoft's been doing some pretty amazing work with Windows in Kubernetes. So we definitely want to take advantage of that. Windows is pretty huge in the game industry for some reason. 

CYRIL: Yeah, it is. 

MARK: Yeah. 

FRANCESC: For the server side, too? 

MARK: Um, yeah? 

FRANCESC: Oh, wow. Interesting. 

CYRIL: Yeah, because it's easier for the developers. I mean they're working on Windows. 

MARK: It makes sense. 

MELANIE: You talked a little bit, before, already, about how people can get involved. Anything else you wanted to say in regards to how, if anybody wants to be involved in building out Agones, anything else you want to share? 

MARK: Absolutely. Yeah. So there is a contributing guide. It's definitely the best place to start. There's like a how to contribute, with the contributor's license agreement, code of conduct, that kind of stuff, as well as a set of resources. There's a developing, testing, and building Agones step-by-step instruction guide for basically getting up and running. 

We've got a whole set of internal tools that we use for making builds and running tests and doing all that kind of stuff. So that is literally the first place to start. And we have it covering both Windows and Linux, and Mac, and both running that on Google Kubernetes Engine, as well as running locally on Minikube. 

So basically, that is the first place to start. And if you have any issues, that's the first thing. Because, if you can run that, then you can compile things, you can run tests, that kind of stuff, as well. But it's been pretty cool. We've had fly-by contributions. Recently, we had someone come by and was like, here's an-- So we have an integrated SDK for lifecycle management. And then we're like, here's one for REST. 

CYRIL: Ah, yeah. 

FRANCESC: Nice. 

MARK: Here you go. Just here, and we're like, cool. 

FRANCESC: That's very nice. 

MARK: Which was really neat. 

FRANCESC: So what if I don't want to contribute, but I want to use it? Are you ready for that? If anyone wants to consider building a game server using Agones, is it a good moment or should they wait? 

MARK: I would say it depends on what your plans are. If you want to release in the next six weeks, maybe you don't. If you want to release sometime next year, I think it's definitely worth having a look at, especially if you don't want vendor lock-in and you want to be able to run your stuff anywhere. I think that's pretty accurate. 

And I think it's also a good opportunity, as well, to be able to be like, OK, we can help shape what this looks like, as this goes through, which I think is kind of exciting. Especially, if you're looking at all the other options, and you're like, OK, I guess we're going to have to build this myself, for whatever reason. You might as well do it with a bunch of other people, as well, who's doing it in the open. And we can all help each other come to a really good goal. 

FRANCESC: Cool. 

CYRIL: We are getting a lot of support on Slack, also, to some extent, as much as we can. So I guess people can come to the public select channel and ask questions. There's already a lot of people asking if you they can use it now. And there is people experimenting it, so they can share with themselves and with us, also. 

MARK: Yeah. The biggest problem, I think, is actually keeping up with demand, which has been-- it's a good problem to have. No, there are builds, as well. You don't have to build it yourself. We are currently releasing every six weeks. 

FRANCESC: Cool. 

MARK: So we do an RC after five, and then we do a full release after six, on the sixth week, which is why I need to do the full release today. [LAUGHS] 

MELANIE: As we speak. 

MARK: But yeah, it's coming together. We're putting together a little governance model, and it's all pretty sweet. 

MELANIE: Cyril, anything else you wanted to add that we haven't already covered? 

CYRIL: Except that it has been great, but I already said that. 

[LAUGHTER] 

And you can go to agones.dev. You know, that's it. 

MELANIE: Great. 

CYRIL: Thank you. 

MELANIE: Mark, anything else? 

MARK: Yeah, if you're interested, in any way, shape or form, please, there's a Google group. There's Slack. Follow us on Twitter at @agonesdev. Reach out in any way, shape or form. Definitely would be interested in chatting with you and talking some more about Agones and seeing if you want to come in and help out in any way, shape, or form. 

MELANIE: Well, Francesc, thanks so much for coming back to help me do this interview. 

FRANCESC: It was a pleasure. 

MELANIE: And Mark and Cyril, thank you so much for being here for the interview for today. 

CYRIL: Thank you for having me. 

MARK: It was weird being on this side, but thank you for having me. 

[LAUGHTER] 

MELANIE: Thank you. 

FRANCESC: You'll get used to it. [LAUGHS] 

MELANIE: Thanks again, Mark, for coming on the podcast-- 

[LAUGHTER] 

--to talk us about Agones. That was really nice of you. 

MARK: It was my pleasure, actually. And thanks to Cyril for joining me, as well. 

MELANIE: More importantly. 

MARK: Yeah, and probably more importantly. 

MELANIE: Yeah. 

MARK: I don't have a choice. I'm here every week. 

FRANCESC: It was a great interview, great hosts this time. 

MELANIE: I know. That was it specifically. 

MARK: Yeah, specifically great hosts. 

MELANIE: All right, for this week, as Mark mentioned at the beginning, question of the week is, of course, should you do machine learning with Go? Francesc, since you are our Go expert, what are your thoughts? 

FRANCESC: There's two answers. One is the quick answer, which is probably no. 

MELANIE: Probably? 

MARK: [LAUGHS] 

FRANCESC: Probably not. 

MELANIE: You seemed a much more emphatic about that earlier. 

FRANCESC: Let's just say that, if you're starting from scratch and you're learning about machine learning, probably just stick to Python. That is the ecosystem where you're going to find all the libraries, you're going to find all the help. So it totally makes sense to start with Python or any other language that you know already and just keep on learning, adding extra tools. Like don't learn Go just to do machine learning, because it's probably not the best thing to do. 

That said, though, since I joined source{d}, we've been doing a lot of machine learning. And I've been trying to teach people that know already Go how to do machine learning in Go. Because I think that's a very nice way to learn really how it works, for real, like what are the maths behind it. 

So I give a talk about that doing dotGo, in Paris, back in November 2017, which was like my first day as a non-Googler. And also I gave a talk in Paris at the same time. It was a fun day. And since then, I've also been doing just for fun episodes and stuff like this. 

And basically the experience is you can definitely do it. You can try. You can write all of the algorithms in Go, and it kind of works but not as fast. Mostly because, when you're running it in Go, you're going to end up not using, correctly, the CPU, because there's like x specific instructions from CPUs done specifically for this. And by default, you will not be using those. Also, you will not be using GPU, because Go and GPUs don't go well together. 

So there's a couple of libraries that people that might be wanting to try this might be interested in. One is Gonum, which is like NumPy but for Go, so it's Gonum. And the cool thing about this is that it solves one of the problems, which is the fact that, when you are calling libraries, if you're in a platform that supports a specific instruction, that instruction will be used. 

So in general, any algorithm that you write using Gonum is going to be faster. So yeah, like the virtualization, you're going to say, rather than doing, oh, I'm going to do for-loop to add these two vectors, you just do floats.add or something like that. 

MELANIE: Sometimes people say tensors. 

FRANCESC: Tensors? Yeah, so that's the whole idea, right? You go towards tensors without really saying the word "tensors," because you talk about floats. Because it's just slices in arrays. 

Then there's Gorgonia, which is the one that people should be using if they want to be training things in Go. It works really well. It's not full feature yet, but it works quite well. And it uses the GPU, which means that now you can start doing things that are quite fast. 

The last thing, though, is that most people do not want to train things in Go. What they want to do is they want to have a little binary that uses a trained model that has been trained with TensorFlow or something like that. And for that, you can use TensorFlow for Go. Because you can use perfectly trained models, load them, and run them, but you can not train new ones yet. 

MELANIE: Not yet. 

FRANCESC: Hopefully-- 

MELANIE: One day? 

FRANCESC: --it will come one day. But for now, I've seen a couple pull requests having the support for variables. Right now, there's only placeholders. So then you cannot do much without variables in TensorFlow, unfortunately. So yeah, that will come sometime soon. I don't work at Google. So I don't know information, not like this. 

MARK: [LAUGHS]. 

FRANCESC: But hopefully soon, yeah. 

MELANIE: Well, thank you for that. 

MARK: Yeah. 

FRANCESC: My pleasure. 

MELANIE: I think one other question I have for you, how has it been? Do you miss the podcast? 

FRANCESC: I do not miss the podcast, because I actually listen to it quite often. It's on my phone. Any time someone says things like, oh, yeah, because when I personally created the podcast, and that's Mark. He's kind of implying that I was not involved. 

MARK: You're still bitter about that, a little. 

FRANCESC: I listen to these things, you know? 

[LAUGHTER] 

MELANIE: We saw your tweet with the video reaction. 

FRANCESC: Yeah, yeah. It happened again. Last weekend, I was driving around. And I don't know what it was. But he said something, where I was like, Mark, I'm listening. 

[LAUGHTER] 

So just a warning, I am listening. 

MELANIE: Always. 

MARK: We created it together. It's fine. 

FRANCESC: Yeah. No, it's been great. I left Google, but I didn't leave it that much, because I'm still a Google developer expert for Go and Cloud and machine learning. So I was at Cloud Next. And whenever there's any event, I'm always around working less than before, which is even better. So yeah. 

MELANIE: That's great. And I'm sure also not having to be on top of this every single week is also a little bit relaxing. 

FRANCESC: Are you implying I don't like talking to Mark? 

[LAUGHTER] 

MARK: Yes. 

MELANIE: Potentially. Potentially, yes. 

FRANCESC: Well, next topic. [LAUGHS] 

MELANIE: Anyway, all right. For the last thing, we always like to cover where we're going to be. So Francesc, where are you going to be? 

FRANCESC: So very, very soon, I'm actually going to GopherCon for at the end of the month. I think it's August 26 or 27. I'm going to be teaching a workshop and talking, also, about machine learning in Go. It's going to be a very short talk. But basically, I'm going to try to blow everyone's minds, with a demo written in Go, analyzing Go using machine learning that also that's Go. It's Go everywhere, basically. It's going to be fun. 

MARK: Go all the way down. 

FRANCESC: Yeah. And then, after that, I'm going for a very well deserved, at least in my opinion, holidays. And after that, I'll be at GoSF speaking in September, again, about a similar topic, machine learning, Go, and stuff like that. 

MELANIE: Great. 

MARK: Where are you off to? 

MELANIE: I will be off to South Africa, where I will be at Deep Learning Indaba. So if you're there, please come by and say hi. And I will also be at another conference, finally, with Mark, after that, which is going to be Strange Loop. 

MARK: Yes. 

FRANCESC: Jealous. [LAUGHS] 

MARK: You should come. 

MELANIE: Why don't you come? 

MARK: Yeah. 

FRANCESC: Yeah, because I cannot, because I'm traveling and stuff. Actually, anyone going to Velocity in New York? 

MARK: No. 

FRANCESC: No? 

MARK: No. 

FRANCESC: I will be there. 

MARK: OK. 

FRANCESC: Sad. I thought you would be there, maybe. 

MELANIE: We don't want to hang out with you after this. 

[WHIMPERING DOG] 

FRANCESC: That's fine. 

MARK: That's fine. Yeah. So I will be speaking at PAX Dev, in Seattle, at the end of the month, and then hanging out with all my gamer friends at PAX West right after that. I will also be at Tokyo Next. 

I'll be speaking at the game day, so it'll be fun, too. And yeah, we're going to both hang out at Strange Loop. 

MELANIE: Yes, we will both be there. So yeah, I think that's it for us this week. Francesc, Mark, thank you both for joining me on the podcast. 

FRANCESC: Thank you. 

MARK: Thank you. 

MELANIE: And Mark, you and I will be here again next week. 

MARK: Yeah, we'll see you all next week. 

[MUSIC PLAYING]