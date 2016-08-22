+++
audioDuration = "00:25:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.2.mp3"
audioSize = 36763054 
categories = ["Compute Engine","App Engine","Managed VMs","Container Engine"]
date = "2015-11-04T17:37:33Z"
description = "In the second episode of this podcast, your hosts Francesc and Mark go from Infrastructure as a Service to Platform as a Service, as they discuss the concept of “Compute as a Continuum”."
draft = false
episodeNumber = 2
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked=true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/5BhqRa9pkeX"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3ri8ll/episode_2_compute_as_a_continuum/"
title = "Compute as a Continuum"
+++

In the second episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) go
from Infrastructure as a Service to Platform as a Service, as they
discuss the concept of “Compute as a Continuum”.

<!--more-->

Links:

-   [Google Compute
    Engine](https://cloud.google.com/compute/)
-   [App
    Engine](https://cloud.google.com/appengine/)
-   [Managed
    VMs](https://cloud.google.com/appengine/docs/managed-vms/)
-   [Google Container
    Engine](https://cloud.google.com/container-engine/)
-   [Full Speed Ahead with HTTP/2 on Google Cloud
    Platform](http://googlecloudplatform.blogspot.com/2015/10/Full-Speed-Ahead-with-HTTP2-on-Google-Cloud-Platform.html)
-   [HTTP/HTTPS Load
    Balancing](https://cloud.google.com/compute/docs/load-balancing/http/)
-   [SSHGuard](http://www.sshguard.net/)

{{< transcript "FRANCESC: Hi, and welcome to the Google Cloud Platform podcast. I'm Francesc Campoy, a developer advocate for the Google Cloud Platform, and I'm here with my colleague, Mark." >}}
MARK: Hi, I'm Mark Mandel. I'm also a developer advocate for the Google Cloud Platform, and it's another episode of our podcast.
FRANCESC: Yeah, very excited about it. So I guess that most of you have heard the first episode, so just a little bit of a summary of what we talked about. Basically, we have a podcast, and there is three parts of it, cool thing of the week, the main content, and the question of the week.
MARK: Yup.
FRANCESC: So before we start with the cool thing of the week, what are we gonna be talking about today?
MARK: In the main content?
FRANCESC: Yeah, in the main content.
MARK: Okay, so the main content, we want to talk about compute as a continuum.
FRANCESC: Cool.
MARK: Which is kind of this spectrum of what we can do on cloud platforms. It's--I think it's kind of interesting, and hopefully everyone will too.
FRANCESC: Nice. I really like that you're using continuum and spectrum. That sounds very--
MARK: It sounds very fancy. It's very, very, fancy.
FRANCESC: Very scientific.
MARK: Yeah, yeah.
FRANCESC: Everything is very scientific. Cool. What about the cool thing of the week?
MARK: All right, I'm pretty excited about the cool thing of the week. I got to do--I got to have the chance to collaborate with a very well-known fellow by the name of Ilya Grigorik. We got to put a blog post out on the Google Cloud Platform blog…
FRANCESC: Nice.
MARK: All about HTTP/2 and what Google Cloud Platform does to enable HTTP/2. You can read the who--full article, but I think the really big takeaway, which is really cool, is basically, we kind of just do it for you, so really, if you want HTTP/2, put an HTTPS load balancer on it, and that's pretty much all you need. As long as it goes through HTTPS, we do HTTP/2. If you're an App Engine customer and you go through HTTPS, you get HTTP/2. So you just get a speed boost, which is awesome, without really having to do much work.
FRANCESC: Cool, and for those that don't know what HTTP/2 is--I mean, HTTP/2, yeah, the version 2 of HTTP.
MARK: It's better.
FRANCESC: Sure, but how--like, why? Why is it better?
MARK: So that is an excellent question.
FRANCESC: So I know that one of the things is it's way faster 'cause it's able to basically--the server, rather than having to cache on the client every single time, the server is able to predict what you're gonna ask for and just send you stuff before.
MARK: So it can do preloading, which is pretty interesting, so it can send stuff in advance. It tends to use, like, a single connection, so you can do streaming a lot better, so we used to do tricks before with HTTP 1 where you'd, like, get, like, sharded across different domains and do all those sort of fancy tricks. You don’t have to worry about that sort of stuff as much anymore too.
FRANCESC: Cool.
MARK: It does really neat stuff. It's--and it's well worth looking at the spec. It's not particularly long. It's pretty neat stuff.
FRANCESC: Yeah, I also heard one of the things that I like the least from web development, which is when you have to put all the images inside of one single image is the--
MARK: Oh, you're doing, like, image sprites?
FRANCESC: Yeah, like, which is so painful to do. Basically it's not needed anymore.
MARK: Yeah, it makes things a whole lot easier, so it's--
FRANCESC: Yeah, that's really cool, and I really like that, the fact that you can basically forget about HTTP/2. Just know that it's gonna be there for you. You just need to put a load balancer before, and that's it.
MARK: That's pretty cool. It's actually really cool in that if--we sort of have experimentations in there for QUIC support on some platforms too, which is also very cool, which is a UDP streaming type of protocol that some browsers support.
FRANCESC: Yeah, QUIC is kind of magic. I like it.
MARK: Yeah, it's magic. I don't know how it works.
FRANCESC: It just makes everything faster, right? Nobody know how.
MARK: It's special magic.
FRANCESC: Yeah. Cool. So yeah, that's the cool thing of the week. Little reminder to you, to our listeners. If you have something cool that you want to share--
MARK: Love to have it.
FRANCESC: Yeah, let us know. At the end of the podcast we'll repeat all the ways you can contact us.
MARK: Brilliant.
FRANCESC: Okay, so for the main content, the compute as a continuum.
MARK: Yeah, so this is really interesting. So, like, actually, you had a really good metaphor for this. I think--I really like it. I actually really like it. I kind of want to start there with the metaphor you had.
FRANCESC: Okay, so basically--well, for the compute options we have, basically, you can say you have infrastructure as a service or IaaS or whatever you pronounce it. I'm getting very better at pronouncing that. You have also platform as a service, P-a-a-S or PaaS.
MARK: Yup.
FRANCESC: And then there is something in the middle. We'll discuss about later that. And I was thinking how to make the difference between both, and, well, I'm European, and in Europe, other than being just in general better, we also have manual cars in general.
MARK: We have those in Australia as well.
FRANCESC: Yeah, but you drive on the wrong side of the road, so.
MARK: In America they call them stick shifts.
FRANCESC: Oh, wow, okay. So we have stick shifts then, and I was thinking about the difference between PaaS and IaaS as driving a manual car or a stick shift and an automatic car, but then I realized that actually, that's kind of wrong. It would be more like when you have infrastructure service, you're driving a manual car. When you have PaaS, it's basically you are in a self-driving car.
MARK: Yeah. I actually really, really kind of like this 'cause okay, so infrastructure as a service is really, like, it's your infrastructure. It's like, you're spitting out VMs. Like, you get just basic machines, nothing on them. It's totally up to you how you want to, like, do stuff. If stuff goes down, it's on you, all that sort of stuff, so it's like being in a manual car. If you want to change gears, you have to do it.
FRANCESC: You have to do it, yup.
MARK: If you want to go faster or slower, you have to brake. You know, it's kind of--you know, if you've been given a car, and it's up to you to go forward, and at the same time you could totally mess up your gearbox if you do it wrong.
FRANCESC: Yes.
MARK: Like, and that's on you. That's totally on you.
FRANCESC: I might have done that before, yes.
MARK: I may have done similar things. But then, like, I really like the idea as, like, platform as a service where you say to the car--like, if you've got a self-driving car, you're like, "Hey, I want to go to the shops. Take me to the shops." and the car decides the route you want to take. It decides how it wants to get there, how fast to drive, you know, avoiding obstacles, and so in platform as a service you don't have as much control, but it's like, "Well, now I can just get to where I need to go, and I don't have to do a whole bunch of other stuff such as, like, infrastructure tasks or security as much or things like that." So I actually really like that metaphor.
FRANCESC: And actually, following the metaphor a little bit deeper, you can also have the thing that it's like, when you need to learn how to drive a self-driving car, well, that's it. Like, you just get in the self-driving car, and it's just like, "Drive me to the store." That's it. Learning how to drive a stick shift, well, that's a little bit more time, so it's kind of similar, right? Like, when you're in a platform as service, everything you need to know is what you want to do. That's it. When you have infrastructure as a service, you're gonna have to decide on what OS you want to run, what libraries you're gonna be using, how do you secure your network, all of those things.
MARK: How do you log it? How do you monitor it, make sure it stays up? Yeah, all that sort of fun stuff.
FRANCESC: So yeah, I really like that metaphor, yeah.
MARK: Yeah, I think that worked really well. I really like it.
FRANCESC: So how do we offer those things in Google Cloud Platform?
MARK: So infrastructure as a service, we have Google Compute Engine, so we can fire up virtual machines. You have a variety of operating systems, so Debian, Ubuntu. We even offer Windows if that's your flavor of choice and a few others as well. We have a list online which shows you which ones of ours are supported and how much, so we do CoreOS. We do all sorts of stuff--but they are. They're basic machines. We put some stuff in them to make them a little bit more secure, an ability to, like, SSH into them really easily, but that's it. They're machines. You can do what you like. Any extra details I might have missed on--
FRANCESC: Not really. I mean, it's basically you just get virtual machines, and you do whatever you want to them, so you can SSH, do apt-get install. You can mess around. You can break your machine down, basically, and then just delete it and create a new one if you want to.
MARK: Probably most interesting, we can do up to, like, 32 cores. We can do access to your disks.
FRANCESC: Yeah, and there's all the networking part, load balancers, as we mentioned before, and so on, so there's basically--like, if you walk into a datacenter, like, an ideal datacenter where you can just say, "I want one more machine here, and now I want to connect them with this cable," that's basically what you do.
MARK: Yup, yup, yup, and you can use all your provisioning tools, Ansible, Chef, Puppet, all that sort of fun stuff.
FRANCESC: Yeah, there's also the monitoring that comes directly from it, so you can see how often the machine has been used. Like, there's a lot of things going on, but it's basically just basic components of virtual machines that you manage.
MARK: Yeah. We do make some things a bit easier. Our monitoring service kind of hooks in automatically with our machines, so that's one thing you don't have to necessarily manage, but yeah. So that--I mean, that's infrastructure as a service. That's Compute Engine. You know, you can spin up VMs. So all the way on the other side, platform as a service. What have we got there?
FRANCESC: So platform as a service is one of my favorite products. I use it all the time. It's Google App Engine.
MARK: Whoo!
FRANCESC: And what Google App Engine does, basically, is, like, this idea of self-driving car. You write your code, you just put it there, and that's it. Like, you don't need to manage anything else. You don't know--you don't know what--how many instances are running. The--just, like, enough instances to run the traffic you're getting. That's it, so it's really easy to get started, but also it scales very well. We talked about it a little bit last episode.
MARK: On the previous episode.
FRANCESC: Yeah, because the Google Cloud Platform podcast is actually hosted on App Engine. But it's so simple to use. Like, you have, yeah, huge, huge, huge players like Rovio with Angry Birds. They use that, and it just works very well, so basically, the good thing is that you're giving up a little bit of the flexibility that you have with infrastructure as a service, so you cannot run everything you want. You have, like, a series of allowed runtimes, so you have Go, of course. You have Java. You have Python and PHP, and then that's pretty much it. Like, there's some limitations on how you can access the network and things like that, but it's kind of easy to adapt any application to it, but you still have to adapt it, basically.
MARK: It's worth noting, though, like, you can't run your own custom code on there. You can't write--you know, you can't write to the file system. You'd have to go through [inaudible] storage. Requests can't take longer than 60 seconds. There's stuff like that, and that's kind of the way it's built.
FRANCESC: Yeah, I mean, the limitations--for instance, the fact that you can't write to the clou--to the file--to the file system, it's actually a very good best practice, right? 'Cause if you tried to do that on a single machine and that machine goes down, you just lost the data, so for a web server it's actually a good practice, so basically we're trying to enforce the best practices for web development, so then once you're doing that, we can make sure that your code will scale to whatever traffic you're getting.
MARK: Yeah, it means we can do things that makes things easier internally that we have to scale and do stuff like that, but much like your self-driving car, you can't be like, "Oh, actually, we need to go faster or take this, you know, shortcut," or something like that, "for my very specific instance." It's like, "No." The self-driving car is gonna get you there the way you want--it's gonna get you there.
FRANCESC: Yeah, that's in--that's it, and I think it's--most of the time it's basically what you want. For me, by default I will develop stuff for App Engine, and if I get to some point where I want to run something like FFmpeg or Image Magic or things like that which won't run in App Engine, then I will spawn a Compute Engine instance on the infrastructure as a service side, and you can have both and make them communicate together, so yeah, you can get the best of both worlds, basically.
MARK: Best of both worlds.
FRANCESC: Yeah.
MARK: So speaking of best of both worlds, fantastic segue, we were talking a little bit before about how we can have stuff that sort of sits in between infrastructure as a service and platform as a service, and I think we have a couple of offerings that are available there.
FRANCESC: Yeah, so that's the good thing that the word continuum implies, indeed. Yeah, so we have both ends, infrastructure as a service on one side, platform as a service on the other.
MARK: Yup.
FRANCESC: What's in between?
MARK: So we have a couple of things. I mean, we just talked about App Engine, and falling under that banner, we have something that's called Managed VMs.
FRANCESC: Oh, yeah, that's cool.
MARK: Which I think is actually really cool. Managed VMs pretty much lets you kind of sit in the App Engine world where we manage things for you but allows you to--I hate to use the term, but it actually makes sense, like, break the glass ceiling, be able to break through and say, "Okay, I actually want to be able to either run my own runtimes or write my own code the way I want to write it and, you know, take longer than 60 seconds, things like that, but I'm willing to give up a little bit in terms of, you know, either--the management side. So it pretty much--we've got some--we've got Ruby support on there. I have to actually remember, Node.js.
FRANCESC: Node.js, yeah.
MARK: A few other ones I can't think of off the top of my head right now, and you can also provide your own Docker files as well, so you can bring your own custom runtimes if you want, and there's ways you can do that.
FRANCESC: Yeah, that's--and the good thing about it is that we've also been working on the fact that now you can deploy to Managed VMs without having to install Docker on your own machines, so basically just give the code, and we'll build it and deploy it, so it--the developer experience, it's quite similar to App Engine. It's pretty good. You just write your code and send it.
MARK: Yeah, and it's meant to be very close. So you can also still write, like, Java and Python and PHP and Go much like you would before, so if you have an existing App Engine app and you're like, you know what? For this particular bit of my code I actually need to break out. Maybe I need FFmpeg, like you were mentioning before, things like that. I can still have the infrastructure that I'm used to with App Engine, but I can kind of go that little bit further and be like, "Oh, I have a container, so I can put whatever I like in it," and that's really powerful stuff. I really like it.
FRANCESC: Cool. So yeah, basically that's just going a little bit in the direction of infrastructure as a service but definitely next to platform as a service. It's very platform as a service-y.
MARK: -Y, yeah.
FRANCESC: Kind of a thing, yeah. Do we have something in the middle? And the answer is, of course, yes.
MARK: Of course we do. We have something, I think, a little bit further more towards the infrastructure as a service side but still in that sort of platform as a service.
FRANCESC: Yeah, that's Kubernetes, which I love the name.
MARK: So I have a tendency to say Kuberneetes. I think it's just because I'm Australian. I don't know why.
FRANCESC: I mean, it's a great word anyway, so I don't think that neither of is pronouncing it.
MARK: Somebody--you know what? Somebody should definitely send us a ph--a phonetic sounding, someone who has a Greek background. I think that sounds great.
FRANCESC: Oh, yeah, that'd be nice.
MARK: And then we'll play it. I think we should play it. So yeah, we had--so Kubernetes is an open source project that was first started by Google. We could talk about this for an entire episode.
FRANCESC: Oh, yeah.
MARK: I think we'll get some people on. I've got some interviews definitely in mind now.
FRANCESC: Yeah, that could be a nice episode, yeah.
MARK: But what we have is a hosted version called Google Container Engine, which is essentially hosted Kubernetes. Kubernetes is really, really cool. The way I like to explain it, really quickly, is basically--so it's really a container orchestration service, and the way I like to think of it is containers are great, right? We can go on with them for a while, but what do you do when you're like, I need five of these type and ten of these type, and I need six of these type. I need to make sure that this one can talk to that one and this one talks to that one and these two always get started up together, and that sort of stuff? That's what Kubernetes does. So it's a scheduling service to make sure that, hey, yup, I've got five running of this. I've six running of that. I've got ten running of these, and if a machine blows up or a pod go--like, or a Docker container goes down, then it starts it back up again. It says, "Oh, wait, that's gone down, sweet," and what's cool about it, which I quite like, is sort of the ubiquity of containers. Doesn't really matter what's running inside them. It doesn’t matter. Kubernetes can just do it in a very standard way for all sorts of different types of software applications, so I kind of like it.
FRANCESC: Yeah, just to give a more concrete example, something that I've seen, for instance, is you have, like, the typical--the hello, world of [inaudible], which is basically the guestbook with a database that moves around. I really like that example because basically, what you're saying is, like, well, you have the web servers, and then you also have the database, right? When you have those web servers, maybe you want to scale, like, the web server container. You want to scale it over, and you're just like, "Oh, I had one container doing that. Now I want to have ten of those," and maybe you have five hosts, five actual machines running that, right? And you don't want those ten containers running all of them in one single machine, so you want to say, "Oh, yeah, just receive it across," and that's what Kubernetes will do. If one of those five machines goes down, those two containers will just move somewhere else. That's it. So basically it's--they have you describe what you want to have running. That's what we call the declarative approach, where you don't say what to do when something goes wrong. You just say, "This is what I want. Do everything you need to make that."
MARK: Yeah, so you still have--you still have the ability to kind of drive the car, but there's some self-driving aspects to it.
FRANCESC: Yeah, yeah, yeah, it's more like--
MARK: It is really in that middle, isn't it?
FRANCESC: Yeah. I kind of like the thing about it's like, you--basically a self-driving car where you're basically saying, "You know what? I actually want to go through this street, and I need to avoid that part," and so it's more like very detailed self-driving.
MARK: Yeah, it's sort of like lane assist or self-parking or something like that.
FRANCESC: Yeah--
MARK: Just to go into that metaphor.
FRANCESC: Yeah, at some point that metaphor will break, I'm sure, but whatever. But yeah, so that's Kubernetes, and Kubernetes, basically what it does is it's just that, orchestrate containers across a fleet of machines. Those machines can be running on Google Cloud Platform, on Google Container Engine. They could also be running somewhere else. They could be running on your own premises. They could be running anywhere else. What Google Container Engine is is just Kubernetes. The whole thing is managed by one master, so what we're doing with Kubernetes is giving you an easy way to spawn those instances that you need to run the containers and then 1x for instance which is what we call the Kubernetes master that is managed by us, so we make sure that that machine will never go down.
MARK: Yeah, that's the important one. 
FRANCESC: Yeah.
MARK: It's pretty easy. I mean, it's pretty awesome. You can kind of go to Developer Console, click a button, how many nodes do you want? I'd like five, please, and you click okay, and it spins it all up and creates it for you, which is pretty cool.
FRANCESC: Yeah, it's a very good experience. I really like it, yeah.
MARK: I really, really like it too.
FRANCESC: The good thing--I mean, we should definitely do an episode on Kubernetes 'cause there's really cool things about it.
MARK: Yeah, there's so many cool things. Okay, so sort of to do a recap, I guess. So on one side of the spectrum we have, like, platform as a service, so we've got App Engine, and then as we continue a little bit further towards infrastructure as a service, we have Managed VMs. We continue a little bit further towards infrastructure as a service, so we've got Container Engine.
FRANCESC: And Kubernetes.
MARK: Running Kubernetes, yup, and then we go all the way on the other side, infrastructure as a service, we've got Compute Engine.
FRANCESC: Yup.
MARK: So that's the continuum, really.
FRANCESC: That's it, yeah.
MARK: That seems pretty cool. So really, like, whatever you want to build, we should have a solution for you, and hopefully we can help you along the way as well with some of our tools.
FRANCESC: Yup. I think that, basically, anything that--and the good thing is that there's some solutions that would work very well for infrastructure as a service and some of the things as platform as a service, some of the things more like Kubernetes, or--but the good thing is that you can use all of them at the same time.
MARK: Exactly.
FRANCESC: There's nothing that forces you to go with one. You can just pick and choose.
MARK: Pick and choose.
FRANCESC: Yup.
MARK: Lovely. All right, I think that sounds really great.
FRANCESC: Cool, so for the last part of the podcast, question of the week.
MARK: We have a qu--yeah, we have a question of the week. So this seemed to be around, like, someone's trying to SSH into their machine from their laptop from, like, a terminal command, and they're, like--this was an interesting one. So they know their details are correct, so I'm sitting at my machine, and I know my password and my credentials are all set up correctly, but every time I SSH in, it keeps dropping my connection, and I'm really confused about what's going on.
FRANCESC: Yeah. So that happened to me once.
MARK: Yeah?
FRANCESC: It was quite painful 'cause--I mean, if you know Linux enough, probably you know exactly what's the answer. I'm not a Linux expert, so it got me confused a little bit for a while.
MARK: So I like to think I'm a Linux expert. I use--been using Linux for a long time, but I actually didn't know the answer to this at all, so I thought this was actually really interesting.
FRANCESC: Yeah, so basically, yeah, like, if you try--every single time you try to SSH or actually to connect in any way to a Compute Engine instance, there's gonna be a log going on somewhere. We're gonna mana--like, just in case we would want to measure if someone is trying to attack you, these kind of things it's good to know.
MARK: Security stuff, good stuff.
FRANCESC: Yeah, so if you're running Ubuntu, by default you have this little program called SSHGuard. I'm not sure that I'm pronouncing correctly, but--
MARK: SSHGuard, I think that sounds--between the two of us I'm sure it'll be fine.
FRANCESC: SSHGuard, something like that, and what SSHGuard does is every single time there's a connection event, so SS--someone is [inaudible] into it, we'll measure the dangerousness of the connection.
MARK: So, like, how risky it is, like, it seems a little bit strange.
FRANCESC: How risky it is, yeah, and the thing is that when you're connecting from your laptop, turns out that very often there's some DNS settings going on, and basically, your laptop appears as something slightly risky for that instance.
MARK: Okay.
FRANCESC: Doesn't mean it's completely risky, but, you know, it doesn't really trust it.
MARK: Seems--okay.
FRANCESC: So it gives a dangerousness of 10, which is a completely random number to choose, but the thing is that once you get over 40, then you get banned, so that's why you may be able to connect once, twice, three times, and the fourth time your connection is dropped, and the only error message you get is, "Your connection has dropped--has been dropped."
MARK: So is that like you're reconnecting a lot over a short period or--
FRANCESC: Basically, yeah.
MARK: After a while it sort of goes to a--
FRANCESC: After a while it goes down, but yeah. So what's the solution for that? Well, the first thing you need to do is you need to make sure that that's actually the problem. Maybe your network is now broken and you're not able to connect, so that could be.
MARK: Accurate.
FRANCESC: So how do you connect when you cannot SSH into a machine? Well, what is going on is that your IP has been banned, right? But you can still connect using the console.
MARK: Oh, okay.
FRANCESC: Like, from the console you have the SSH button. That will work every single time.
MARK: Okay, so the--so Google Cloud Platform knows for compute and SSH, if it's doing it through the browser it's like, "Oh, that's special. We know that's great, so yeah."
FRANCESC: Yeah, "We know who you are. You're using a private key identification," so it's different, [inaudible] password, so--
MARK: So you probably logged in with two-factor auth 'cause we're all using two-factor auth when we use our Google accounts.
FRANCESC: We all should, yeah.
MARK: And so yeah, we trust that connection a lot.
FRANCESC: Yeah, so that's the thing. That will always work. Then once you connect in there, you can do iptables/L, so sudo iptables, depending on who you are, and that will list all the rules. Probably you're gonna find one of those rules sayings that your IP has been banned. You can just drop it, so just iptables-help or something. You'll see how to drop it. It's quite simple, and once you've dropped it, that's it. Now you're allowed back in.
MARK: Now you're allowed back in again.
FRANCESC: Yeah.
MARK: Can you whitelist yourself and be like, "Okay, am I always okay?"
FRANCESC: Yes. You can whitelist yourself. Depending on the instances and the rules that you have on your connection it may be harder or easier. One of the things that you can do is just say, "This is my IP. Don't ever block this IP," and then you're good.
MARK: Okay, that sounds great. All right, cool. Good to know. If I'm ever locked out of one of my own machines, now I know what the problem could be.
FRANCESC: Yeah, it's good to know, yeah.
MARK: Great. All right, great. So finishing off, why don't we just recap we--what events we have coming up, if people want to come and talk to us or want to talk about Google Cloud Platform, where we'll be. So Francesc, where are you gonna be headed in the next little while?
FRANCESC: So I'm gonna be--so there's GCP Next in Paris that--it's happening, like, very, very soon. I'll be there.
MARK: Wonderful.
FRANCESC: Then in November I will be in Oredev in Malmo. Then I will go to Paris for dotGo. It's a Go conference. Then I will go to--what's the name? Devoxx in Antwerp in Belgium. We're gonna have a huge, huge team there. I think we're gonna be, like, five or six of Google Cloud Platform.
MARK: Sounds like that's gonna be a good event.
FRANCESC: That's gonna be-
MARK: You were mentioning about it.
FRANCESC: Yeah, that's gonna be lots of fun, and then after that, the week after that I'm going to Barcelona not for holidays this time, even though I have some, but because there's DockerCon Europe.
MARK: Very good.
FRANCESC: Yup.
MARK: Okay, great. So I will--in November I will be at FutureStack, the new Relic conference.
FRANCESC: Nice.
MARK: Super excited about that because Steve Wozniak will be keynoting.
FRANCESC: Oh, wow.
MARK: I'm on the speaker page with Steve Wozniak. That made me pretty happy. And as I mentioned in the last episode, I will be at Clojure Conj in November as well talking about some container stuff and development environments, which should be lots and lots of fun.
FRANCESC: Sounds cool. So yeah, if you are anywhere around there and you get the chance, come say hi.
MARK: Yeah, love to speak to everyone.
FRANCESC: Yeah, send us a message on Twitter or through an email. So just in case, let's remember that, so our website is gcppodcast.com. Twitter, it's @gcppodcast. Google+ is google.com/+gcppodcast. What else? I'm forgetting something. Reddit.
MARK: Reddit.
FRANCESC: It's r/gcppodcast, and our email is hello@gcppodcast. I think that's it. Yeah, that's it.
MARK: I think that's it. That seems like everything. All right, well, it was great to chat with you once again, Francesc.
FRANCESC: Yeah, and talk to you next week.
MARK: See you next week.
FRANCESC: Bye.
{{< /transcript >}}
