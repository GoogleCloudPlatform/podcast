+++
audioDuration = "00:40:38"
audioFile = "Google.Cloud.Platform.Podcast.Episode.3.mp3"
audioSize = 58537298
categories = ["Kubernetes", "Container Engine"]
date = "2015-11-11T02:11:26Z"
description = "In the third episode of this podcast, your hosts Francesc and Mark interview Brian Dorsey, Developer Advocate, Google Cloud Platform about Kubernetes and Google Container Engine."
draft = false
episodeNumber = 3
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.sandbox.google.com/b/117267610519909886476/+Gcppodcast/posts/NSt5gtukvtT"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3sf3yr/episode_3_kubernetes_and_google_container_engine/"
title = "Kubernetes and Google Container Engine"
+++

In the third episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Brian
Dorsey](https://twitter.com/briandorsey),
Developer Advocate, Google Cloud Platform about Kubernetes and Google
Container Engine.

<!--more-->

About Brian:  
Brian Dorsey aims to help you build and run your apps. Brian focuses on
Cloud Platform, especially Compute Engine, Cloud Storage, and lately
Kubernetes & Container Engine. He loves Python and taught it at the
University of Washington. He’s spoken at both PyCon & PyCon Japan. Brian
is currently learning Go and enjoying it.

Links:

-   [New Cloud Management Console](http://googlecloudplatform.blogspot.com/2015/10/try-the-new-cloud-management-console.html)
-   [Kubernetes](http://kubernetes.io/)
-   [Kubernetes on
    Github](https://github.com/kubernetes/kubernetes)
-   [Kubernetes Slack
    Team](http://slack.kubernetes.io/)
-   [Google Container
    Engine](https://cloud.google.com/container-engine)
-   [Presentation: John Wilkes - Cluster management at Google with
    Borg](https://www.youtube.com/watch?v=wy3L7XUq-g0)
-   [BigQuery](https://cloud.google.com/bigquery/)

{{< transcript "FRANCESC: Hi, and welcome to the third episode of the weekly Google Cloud Platform podcast. I'm your host, Francesc Campoy, and I'm here with the other host, Mark. Hey, Mark, how are you doing?" >}}
MARK: I'm good, Francesc. How are you doing?
FRANCESC: Pretty good.
MARK: That's good. I hear you're a little bit out and about at the moment. You're traveling. I know you're not in San Francisco.
FRANCESC: Yeah, I've been traveling for quite a bit, ten days already, somewhere in Europe. I went Oredev in Sweden and then GDG DevFest in [inaudible], and now I'm in Paris for DotGo.
MARK: Oh, sounds like a tough life. I am here in San Francisco in my living room.
FRANCESC: Yeah, it could be worse, really.
MARK: It could. It could be a lot worse. It could be a lot, lot worse. Well, it sounds like you're having lots of fun. Well, we've got a great interview lined up with one of our teammates, but why don't we talk about our cool thing of the week before we get stuck into that?
FRANCESC: Sure. So the cool thing of the week is that we got a new Cloud console UI, the--what we call the new Cloud Management Console.
MARK: Yup.
FRANCESC: Have you got to use it a little bit?
MARK: I have. I've been using it for a little while now. I quite like it. It's very pretty, lots of nice colors.
FRANCESC: It's really pretty. That's true. It's really, really pretty. Every single logo has a slightly different color. I actually really like that, yeah.
MARK: Yeah, so if you want to get the chance to use it, there's a little "try the beta console" button that you can press, and it'll switch over your console. You can always switch back. It's no commitment. It's okay. But no, it's really nice. I really--my favorite feature, I think--actually, I have two. I have two favorite features, but being able to pin things at the top, so I use App Engine a lot, so being able to just go pin App Engine so I can quickly get to it really quickly, I really like that.
FRANCESC: And I’m gonna guess the second one. Is it the search bar?
MARK: Actually, it isn't the search bar, but the search bar is awesome.
FRANCESC: The search bar is my favorite one, so. Okay, so if it's not the search bar, what is it?
MARK: Okay, so I actually really like on the front page you can customize your widgets, so you can specify your widgets on the front page that you want to see so that you can get all your up-to-date information about, say, like, Evers or what's the status for Google Cloud Platform or any of that sort of stuff, so you get that at a glance as you first join. That's really cool.
FRANCESC: Yeah, that's--that's really cool. I guess we're just different people. I'm more like, I just want to find whatever I'm looking for without having to set every--anything up while you're more, like, pinning and modifying and customizing.
MARK: That's true.
FRANCESC: But yeah, for whatever you like doing, basically you have both, so that's fun.
MARK: I love--one thing I do love about the search bar, though, is there are shortcut keys, so there's a shortcut key that takes you to the search bar, and then you can enter in, say you want to look at App Engine or whatever you want to jump to really quickly, so the combination of the shortcut keys and the search bar means you can navigate around the dashboard really, really quickly without having to touch a mouse, which is really cool.
FRANCESC: I actually did not know that, and now all of a sudden I'm very interested. What's the shortcut? Do you even know what shortcut is that?
MARK: I can't remember off the top of my head. I have to--
FRANCESC: I'll have to find it.
MARK: Yeah.
FRANCESC: That sounds really--that sounds, actually, really useful 'cause I really--yeah, I'm a Vim user. I don't like mouses--mice.
MARK: Mice.
FRANCESC: English is hard.
MARK: Yup. So no, I totally love it, so that is cool. So there you go. There's three features that I love.
FRANCESC: Cool, yeah, glo--so yeah, the pinning, the customizing, and then the search bar.
MARK: Oh, it's just forward slash, forward slash to open set, open it up, and then you can type, like, App Engine or whatever you like, and it'll--and hit enter. It's just forward slash. It's really nice.
FRANCESC: Forward slash, and you know that that's actually the key to also search in Vim, right?
MARK: Is it? Okay, I'm not a Vim user.
FRANCESC: Yeah, so it's--that's perfect. Okay, I'm gonna totally use that.
MARK: Wonderful. Okay, great. So we had--
FRANCESC: So--
MARK: Go ahead.
FRANCESC: No, you go.
MARK: I was gonna say probably exactly the same thing you were. We recorded a interview earlier this week, or early last week, actually, with one of our teammates, Brian Dorsey.
FRANCESC: Yeah.
MARK: We had a gr--yeah, we had a great t--
FRANCESC: The Brian Dorsey.
MARK: The Brian Dorsey, yes. We had a great chance to chat with him about Kubernetes.
FRANCESC: Yup. So what do you think? Should we just start playing that interview then?
MARK: That's a great idea. Let's play that interview right now. So we are joined today by one of our wonderful colleagues, Brian Dorsey, who is also a developer advocate for the Google Cloud Platform. We're gonna have a chat today about Kubernetes and Google Container Engine. How you doing today, Brian?
BRIAN: Excellent. Thanks for having me in.
MARK: Thank you very much.
FRANCESC: Hey, Brian.
MARK: Now, of course, the first question I have to ask before anything we go on is is it Kuber-neet-es or Kuber-net-es? I argue about this all the time. I think that's probably the most important thing that we discuss before anything else.
BRIAN: Yeah, I think I'm gonna mangle this. I think I met a Greek gentleman who said it--the actual Greek word is pronounced something like Koov-er-net-es, but, you know, it's something that was birthed on the west coast of the United States, so we pretty much say Kubernetes.
MARK: Wonderful. Okay, so before we go on any further, why don't you give us a brief background on yourself so people know who you are if, you know, you're not popular enough already.
BRIAN: So hi. I'm Brian. I'm a developer advocate for Google Cloud Platform, and yeah, I've worked on a few different things, you know, Cloud storage, our Compute Engine virtual machines, and lately been doing a lot of work with Container Engine and Kubernetes. Also, I love Python and Go, so.
FRANCESC: Ah, good.
BRIAN: So that works, right?
MARK: Wonderful. That works. That sounds good. Francesc loves the Go as well, as well we know.
FRANCESC: Yeah. Yeah, a little comment on the name. I just came back from GCP Next in Paris, and French people actually call it koob-er-net. I thought that was really cute.
MARK: Oh. I found out recently…
BRIAN: That is awesome.
MARK: That it's also koob-er-net in Hebrew.
FRANCESC: There you go. It's cute. I like it.
MARK: I probably mangled that as well. All right.
BRIAN: We should make an international pronunciation, like, downloadable guide or something like that. That would be hysterical.
MARK: That would be. Actually, I like that [inaudible]. That sounds really good. All right, so we should probably talk about what Kubernetes actually is and why people should care about it and why basically all three of us think it's pretty awesome, so. Since you're the guest on the show, Brian, why don't you take us away?
BRIAN: Sweet. So I mean, I think the big picture thing is, like, context-wise, you know, more and more people have access to, you know, lots and lots of computers, and most software today is running across--you know, is already a distributed system. Like, you are--you're running different processes on multiple machines, and keeping track of all this is a challenge, and so, you know, at a very high level, Kubernetes helps you basically run your software, your processes on a whole cluster of computers but reason about all of them as one thing, as one entity, so you can say, "Hey, I want to run, you know, five copies of this process. Kubernetes, make that happen somewhere in the cluster. Make sure they stay running. If anything goes wrong, let me know, restart them. If one of the machines goes down, reschedule them," that sort of thing.
FRANCESC: Cool. So that actually sounds a little bit like what we do here at Google a little bit.
BRIAN: A little bit.
FRANCESC: Yeah, like, having a lot of machines and trying to run some stuff on it. So I heard a lot of people saying, "Oh, yeah, Kubernetes is just the open source version of what we do here at Google, which is Borg." Is that true?
BRIAN: In the--like, philosophically, absolutely. So it's--like, it's inspired by Borg, but it is a, you know, from the ground up, actually more modern implementation of a lot of these ideas, yeah. And in fact, there's a fantastic talk, we can add the links to the show note, by John Wilkes talking about the relationship of Borg and what it looks like as a developer at Google to write code and run that on our clusters and then, you know, what we've built with Kubernetes, so it's a fun talk, like, diving deep into that relationship.
FRANCESC: Ah, that's cool.
MARK: So Kubernetes, it came from Google. I don't know that much about the history itself, but I know--I believe Red Hat's been involved and a few other companies. Do you know more about, like, where it was conceived and that sort of background stuff?
BRIAN: Absolutely. So, you know, basically three very senior folks at Google just noticed this kind of trend of the rest of the world, you know, kind of running into these same situations that Google had, you know, a way of dealing with internally, and decided, you know, to try to prototype up building a--kind of a, you know, unusual version of that that everybody could use, and then, you know, we actually convinced the company to release that as an open source project, so, you know, that--it runs entirely on our Cloud platform and now AWS and Azure and your own hardware, lots of other places, but it's very much taking the philosophies of how Google runs software and releasing that as an open source project, and so it started with a few engineers at Google, and now, as you said, you know, Red Hat's involved, CoreOS is involved, you know, dozens, actually, of companies and far more individuals from lots of other places. Actually, let's just take a look real quick at the GitHub repo, which now has 10,000 stars, you know, 2,700 forks, it--19,7000 commits as of today.
MARK: There are a few people there, just a few people.
BRIAN: Yeah.
MARK: Just a couple. Here--
BRIAN: It's an extremely active open source project, and, you know, we hit our 1.0 release earlier this summer and heading very close to the 1.1 release now.
FRANCESC: Cool. So from a more down-to-earth point of view, like, Kubernetes sounds really cool. It allows you to run stuff on machines. I know that the stuff itself, it's basically Docker containers, right?
BRIAN: Right, that's the primary, you know, container format.
FRANCESC: Primary. Like, can--what other things can you run, actually?
BRIAN: Actually, so yeah, so, you know, the Rocket container format that's kind of from CoreOS is supported, and then they've been moving, like, towards consolidating on--so both Docker and Rocket and other folks are kind of moving to kind of standardizing some container formats, so, you know, Kubernetes is intended to run multiple container formats, but yeah, definitely primarily what people are running is Docker containers.
FRANCESC: Cool. So--okay, so then we're running containers, mainly Docker but not necessarily, and Kubernetes allows us to just manage them. What does that even mean? Like, what do you do with Kubernetes that's your day-to-day thing?
BRIAN: Right, and what does that look like from a developer and operations perspective, right?
MARK: Yeah.
FRANCESC: Yeah.
BRIAN: So the container gives us a kind of hermetically sealed, you know, container, a little box for our processes, so just starting there, like, it's kind of amazing because you have a process that every time it starts, it has the same context, right? It always sees the same file system, and that gets us all kinds of great benefits, and, you know, one of those is you can run that same package on different computers and get the same result, right? Which is a huge pain in--normally. And then what Kubernetes really brings in is it keeps track of all these things, and it helps them find each other, and at a very high level it lets you talk about your whole cluster declaratively, so when you're actually using Kubernetes, you write a config, usually in YAML. Can also be JSON. You say, "Okay, I've got this container that has the version of the software I want to run. I would like you to run, you know, five or eight copies of this somewhere in the cluster, and I want to make--you know, want to make sure that they stay running, and, you know, go," and then you kind of push that declaration off to Kubernetes, and then from then on it's Kubernetes' job to make sure that that requested state stays true, right? So if one of those containers dies, it'll restart it. If one of the hosts goes away, it will actually, you know, start up new ones somewhere else, and so that lets you, you know, in a very real sense, you know, sleep more because the system is maintaining the--you know, the way you asked it to be set up instead of just kind of a one-time, "Hey, run these things," but then you have to, like, manually somehow figure out how to or aut--you know, through automation make sure that they're running. Kubernetes takes care of that.
MARK: I think that's--a--two things you kind of said that really resonate with me. It's something I really like about Kubernetes and kind of this ecosystem is--one of which is, is you've got this Docker format that's kind of ubiquitous, and I think that's incredibly powerful, and when you said earlier, you were talking about, you know, coming from Borg to Kubernetes, then being able to look at it and say, "Okay, these are common things that people are doing in terms of scale, in terms of managing computers, clusters, stuff like that," and putting those two things together. It doesn’t matter what that application inside that Docker container looks like. It can be as unique and individual snowflake as, you know, you make, you know, inside your own little workspace, but then once you sort of wrap that up it can just become this ubiquitous format that you can do standard things with, and you're no longer going, "I need a scaling solution for Ruby," or, "I need a scaling solution for Node," or, "I need a scaling solution for my particular app that's very unique and special." You can take advantage of these pretty awesome tools, which I think is super, super powerful.
BRIAN: Exactly, and if your dev workflow--you know, so, like, you've got developers, you know, working, and then you've got testers, you know, actually testing and making sure that things work, maybe the same folks, and then operations folks, like, no matter which pieces of software that different containers use, you can use the same process across all of those, you know, and, you know, really, we all want to kind of choose the best tool for the job or different teams, you know, in a real service org, your network structure, you know, might choose to use different tools, and lets--this lets you manage them all, you know, in fun--that's kind of one of the fundamental, like, benefits of Docker and containerization.
FRANCESC: Yeah. One of the things that I really like about Kubernetes is the fact that what you were saying, this concept of desired state where basically, rather than having to you handles, like, "Oh, this machine went down. Let me go and restart this job somewhere else," that's going to be automated directly, and that's cool, but something which I think is even be--even cooler, and I've seen some demos of it, but I think you could explain a little bit more of what it is. It's this concept of rolling updates.
BRIAN: Oh, absolutely.
FRANCESC: 'Cause I've seen that--I've seen that at Google, but I have never seen that outside of Google.
BRIAN: It's super powerful. So, you know, so we've got desired state, right? And when we first set up the thing, you know, I told it, you know, "I want five web frontends," right? But that number, you can change that over time, so you can think of it as, like, there's a dial, like a volume knob, you know, on your processes. You can be like, "Well, let's turn that up to 11," and, you know, you get all the processes running, right? And so you can kind of turn it up and down there, so that just gets you your scaling right away, so you just tell Kubernetes, "Oh, I want eight now, and I want three now," and then the rolling update, so as you have new versions of your software, you can basically say, "Okay, I'm gonna create a new definition for this new version, and Kubernetes, I want you to slowly start adding more of these, and I'll watch the logs, and as long as everything's going well, we'll just slowly replace the old ones with the new ones, and then we'll have a new version in production," and so that's pretty powerful, but since these containers are hermetically sealed, I think that--like, you know, they're isolated. They're this one thing, so you can do this atomic upgrade, right, where you just, you know, replace the previous version with the new one, but the crazy thing is a rollback is actually the exact same process.
FRANCESC: Yeah, that's really nice.
BRIAN: So going to a previous version is the same, right? And that blows my mind.
MARK: I love this, especially as someone--I've hand rolled stuff behind a load balancer just because I haven't either had the time or the inclination or the pain point to actually go and automate this stuff, so being able to just go, "Oh, well, this thing gives me a way to rolling update behind a load balancer," or whatever it's in front of, you know, like, that's super powerful. Again, a generic solution for a problem that we've all encountered in one way or another.
BRIAN: And--so like, let's, like, dive in generic solution a bit. So, like, we talked about kind of, like, running these processes, so that's--you know, that's basically like a, you know, a system D or a process manager, you know, kind of thing, right, but across a whole bunch of machines. But you also have to figure out where these things are. So if you want to connect them up to a load balancer, like you mentioned, you know, you have to do that connection somehow. You have to tell the load balancer. So Kubernetes handles that as well, so, you know, as you make this definition, you also make this definition just called a service, and that--Kubernetes is aware of where these things are actually running and handles the plumbing for connecting the load balancer to it, and that also gives you this nice, static name which is also a DNS name and an IP address, so you can have each of the different parts of your system have a static name, but the actual--you know, where those things exist, you know, that changes over time, you know, so it might be running here. It might be running there, and your software doesn't have to care. You've got a known location to talk to your cache, a known location to talk to your database, a known location to talk to web frontends, and Kubernetes just kind of handles all that, and then, you know, you can plumb logging through and all kinds of other fun stuff, so.
FRANCESC: Yeah, I guess that that's the difference between schedulers and Kubernetes, right? Like, Kubernetes is not just scheduling containers.
BRIAN: Absolutely.
FRANCESC: It's actually a little bit more than that 'cause there's service--like, services, basically service discovery.
BRIAN: Yes.
FRANCESC: So you get that already inside of Kubernetes. You don't need to add another layer on top.
MARK: So to take a step back, for those not familiar with the term scheduling, do you want to explain what that is?
FRANCESC: Oh, yeah. So yeah, basically, scheduling could be, "I want to run five copies of this, and then just run them. If one of the machines goes down, then just move that container somewhere else," but then I want to be able to say, "Oh, yeah, you know, it's like, I'm gonna send a request. Those requests should be handled by one of those five containers that are running." Well, if they keep them moving, how do I target them? So a service is basically just a way of saying, "Oh, just send it to this service," and Kubernetes just will find whoever is behind that service.
MARK: Sort of intelligently routes through whatever--
FRANCESC: Yeah, and what I really like is the fact that they way you define it is via a very simple concept, which is tags, and that's so beautiful. It's basically just tag stuff saying, "Well, it's like, this is a backend," or, "This is a frontend," or, "This is a something for test," and then you can create service saying, "Oh, yeah, target all the frontend that are also test," so things like that, which is really simple, but at the same time it's so powerful that [inaudible] use.
BRIAN: And, yeah, those are a key part of the rolling update and helps you do kind of--like, you know, people who do kind of red/black upgrades and that sort of thing. You also kind of mentioned--you know, another part of scheduling is, you know, making sure that, you know, you put the new processes in a place where they're gonna be successful, right? You put them on a machine that's not too busy, that has enough memory, and that works, and so [inaudible] on our team describes that as, you know, you're kind of playing Tetris with your resources, right?
MARK: Nice.
BRIAN: You've got these oddly-shaped combinations of CPU and memory and disk requirements, and then they need to fit in these certain size boxes that are the actual nodes you're running the software on, and you want to maximize that because that's the most efficient. It's gonna save you the most money, and it quickly becomes this, you know, kind of multidimensional, complex game of Tetris, and--
FRANCESC: Yeah, I really like that comparison with Tetris. I don't know if you've seen, Kelsey Hightower gave a really good talk talking about Kubernetes, and--at HashiConf, and he actually played Tetris in front of everybody during his talk.
BRIAN: Oh, that's fantastic.
MARK: That's fantastic.
FRANCESC: That was really good, yeah.
BRIAN: That is super fantastic.
FRANCESC: Just to bring home the same point of yeah, like, it's hard to do, but it's automated.
MARK: Well, I think we actually had a Cloud spin win, so if people have ever seen our Cloud Spin demo, we were running it on virtual machines for a long time to do our video processing, and we shifted it to Kubernetes, and I think we got something like a three times less resource usage or something to that effect.
FRANCESC: Yeah, I mean, when I created the demo, basically it was, like, I just need to get it working, so I did something that I'm sure most of us have done before, which is I'm running one container per machine.
MARK: Yup.
BRIAN: Yup.
FRANCESC: And if the machine goes down, just restart it. That's it. So that's easy, but yeah, we're spending a serious amount of money 'cause, you know, it's like, you're using one machine per container, which is really not what you want to do, and with Kubernetes, basically we ended up with just three hosts and all these containers, same amount of containers, so same performance that we used to have but automated over only three instances.
MARK: Nice.
FRANCESC: And that's--that was really, really nice and really easy to do, so yeah.
MARK: Very, very cool. Okay, so I guess we should probably start talking about, like, Google Container Engine.
BRIAN: Oh, right, Google Cloud Podcast.
FRANCESC: Yeah, Google Container with a K.
MARK: Yeah, like, we--it is a Google Cloud Platform podcast. We probably should talk about those products.
BRIAN: Yeah, actually, so we should talk about that. So, like, people sometimes abbreviate Google Container Engine as GKE.
MARK: Yes.
BRIAN: So, you know, you can think about it as kind of, like, Google Kubernetes Engine in a way, and, you know, so the main, you know, difference there is--so it's running--you know, so Container Engine is hosted Kubernetes, so it's running the, you know, open source Kubernetes, but we handle running the master for you, so we, you know, maintain that. We keep it up-to-date. We upgrade, you know, the Kubernetes software itself over time. We just kind of basically handle--you can think about actually using Kubernetes in kind of two parts. There's one part that is, you know, setting up the cluster itself and running Kubernetes, and the other part is, like, running your software in Kubernetes, so you're kind of like, you know, the config and setup and maintenance of the cluster itself versus actually using the cluster, and, you know, actually, internally at Google it's two separate groups who usually manage those things, right? You've got the people that run all the clusters, and then you've got the application groups who actually run their software in the clusters, so--and this is a way of basically, you know, letting Google run Kubernetes for you so that you can focus on your app.
FRANCESC: So you mentioned that one of the things that Google Container Engine does is create a cluster. If you were to create your own cluster, like, what do you do? You get--like, I have, I don't know, five machines in my premises.
BRIAN: Right.
FRANCESC: How hard is it to get it working?
BRIAN: So it--so the--so there are a couple things you get. So Kubernetes kind of comes, you know, out of the cloud kind of world, right? And so there's some stuff you get, you know, in those environments, so whether that's, you know, on Google Cloud or on, you know, other folks' clouds, you--you know, you get the dynamic, like, creation and removal of machines. You get APIs for controlling networks, and those are actually kind of the two main benefits that are a little more--that are kind of contrasting to running on your own machines. So the network in particular can be a little bit of a challenge right now when you're setting up your own stuff. One of the things Kubernetes does is it gives every pod--so every collection of containers has its own IP address, and so that's really helped simplify the scheduling because you don't have to ever deal with port conflicts or whatever if, you know, two different things are listening on port 80, you know, they're trying to be web servers. You know, you can still schedule them on the same machine 'cause they get their own IP address. In turn, though, that means that Kubernetes itself needs to have some control over the network that's not super common, you know, in people's, you know, physical datacenters a lot of times, so people often run an overlay network like Flannel or kind of change the way the load balancing and the networking works a little bit to do that, so that's usually kind of probably the main challenge. Other than that, you know, it's a Go program, and, you know, we've got setup guides for a whole bunch of different environments up on kubernetes.io.
FRANCESC: So--and so there's some guides on everything. You have to install some software and make sure that the machines are well connected and all the networking stuff, which is really hard for me to do. I'm not a networking guy. You have to set that up. With GKE, Google Container Engine, how long does it take to create a cluster?
BRIAN: About five minutes. You know, so--you know, and most of that's just, you know, machines starting up and scripts running and that sort of thing, so, you know, it's about a minute of your time, so you kind of log into the Cloud Console, go over to--navigate your way down the sidebar to containers, and give it a name, how many nodes you want to have in it, what size, you know, computers those nodes are, how many processors they have, and hit go.
FRANCESC: And you're ready to run your containers in there? That's nice.
BRIAN: Yeah, it's a--
MARK: And it's the only way I've ever fired up a Kubernetes cluster. I've never tried to manually do it yet. I'm not that brave.
BRIAN: Yeah, so on that note, like, you know, no matter where you're planning on running Kubernetes longterm, and I think one of the big advantages of Kubernetes is that, you know, it gives you some consistency to environment for running your software, so you can run it in multiple different cloud providers. You can run it on your own machines. You can run it on your laptop. You know, so you can run the same system in a lot of different places, but if you're kind of, like, trying to decide whether or not this is something you even want to spend the time on, doing your first experiments in Google Container Engine is just so much easier to tell whether you even care about Kubernetes, like, whether you want to spend the time to set it up on your own stuff.
MARK: Yup.
BRIAN: So I'd highly recommend that no matter where you plan on deploying.
MARK: Yeah, I agree 100%. I've seen more than a few people do that, and yeah, one of the lovely things about Kubernetes is that you can pick it up and move it, which is great, so. While we would love for you to stay on Google Cloud Platform, we understand that people have needs. That's fair enough. But yeah, it's just such an easy process to get, you know, three or four nodes spun up and start deploying things and get playing with it. It's great.
FRANCESC: Yeah, and for me, one of the things that I really like is Kubernetes is something that I really like to play with. Like, I know that there's some people that are already using it in production. For our demo, the Google Cloud Spin, we're using it in production, which is cool, but for me right now it's just like, I'm learning the concepts and playing with it, and--and the good thing's that the pricing for Kubernetes, if you just want, like--not for Kubernetes, sorry. For Container Engine, up to five hosts, which is a decent amount of hosts already, is zero, so you don't pay anything, so, like, basically, if you want to play with it, you can create your cluster quite easily, get your machines running, and then start playing with it not paying anything.
BRIAN: So let me--I'll add a little bit there. You don't pay anything for Container Engine itself. You do still pay for the virtual machines that you're running the nodes on.
FRANCESC: Yeah, which might be running--yeah, then you get to choose how big or small your machines you want, like we discussed in previous podcasts, previous episode, yeah.
BRIAN: Absolutely. Yeah, so you can choose really small machines and make that very, very aff--like, low-cost.
MARK: And if you combine that with our free trial or something like that, then it definitely gives you enough time to play with it.
FRANCESC: Yeah, it's lots of fun, really.
MARK: Or you could fire up 32-core, you know, nodes and run ten of them.
FRANCESC: Can--five--five 32-core, and you end up with 170 cores?
MARK: Something.
FRANCESC: That's a decent amount of cores, yeah.
MARK: Yeah. Why not? Why not? That'd be fun.
BRIAN: Let's play.
MARK: That sounds like--that sounds like a lot of fun. All right, so that sounds pretty cool. I'm definitely sold, not that I wasn't before, of course, for Google Container Engine. There's a roadmap. I had a look at it. It looked like, you know, they're slating for a 1.1 release in, what was it, late October? I can't remember off the top of my head what features were coming. Brian?
BRIAN: Yeah?
MARK: I'm guessing you're closer to those. Are there any particular things that you're looking forward to, you think are gonna be particularly exciting for people?
BRIAN: Absolutely. There's a bunch of stuff coming. It looks like early November kind of timeline for the 1.1 release. That's early November 2015, depending on when you're listening to this.
FRANCESC: That's, like, yeah.
MARK: It's not too far away.
FRANCESC: Very, very soon.
BRIAN: So they are continuing work on, you know, kind of just straight-up scalability, you know, so at the 1.0 release they were, you know, kind of guaranteeing that everything worked really well up to 100 host nodes, and they're kind of pushing that up to around 250-plus. You know, lots of people are running larger, but they're, you know, kind of conservatively--you know, we've tested everything, you know, all the corner cases are happy, you know, at this size and above, so they're kind of pushing there. You know, improving, you know, networking performance in a few places, you know, support for later--you know, newer Docker releases, the 1.8x series of things, so the scheme of validation, you know, new APIs and things like that. A couple of things I wanted to call out in particular is kind of, like, there's a hook that you can basically set up an HTTP listener or run a script right before a pod is shut down. You know, so sometimes--
MARK: Oh.
FRANCESC: Nice.
BRIAN: So sometimes, you know, your code--you know, Kubernetes decides that, you know, you need to get off this host, and so the--if it's a planned event, you'll get a hook so that you can kind of gracefully check out.
FRANCESC: Yeah, so you can save some stuff to disk or whatever you need to do.
MARK: Clean up, yeah, nice.
FRANCESC: Yeah, that's nice.
BRIAN: So that's super nice. There's a new job object coming, so this is, you know, gonna be the building blocks for more batch operations, so, you know, right now Kubernetes is kind of focused on long-running processes. The job object, like, really brings in--you could always run, you know, a single, you know, container, a single pod, to completion. You know, just say, "I want to run this and make it happy," and it's--you know, Kubernetes has always been able to do that, but the job object allows you to manage, you know, a large number of jobs that you might want to only run a subset at a time to completion. So, you know, you can set up, you know, queue workers. You can set up, you know--you know, if you want to run, you know, a thousand instances of something, you know, but you only have room to run 25 of them at a time, you can use this to manage that sort of thing.
MARK: Can you do, like, cron-type things where you want to do something, like, once every hour or something like that?
BRIAN: So I don't--I'm not aware of a cron right now.
MARK: Okay.
FRANCESC: That sounds more like--almost like MapReduce stuff.
BRIAN: Yeah.
FRANCESC: Like, there's a lot of things to do but not enough resources.
MARK: Fair enough. That works.
BRIAN: Absolutely.
FRANCESC: Okay.
BRIAN: So you could--you can definitely do MapReduce-y kinds of things, you know, a lot of data processing sort of things. It's definitely kind of hitting those targets.
FRANCESC: That's nice.
MARK: That works. That makes sense.
BRIAN: Like, cron is super easy to implement with Kubernetes, by the way, because you can basically take your config of the thing you want to do, and you can run Kube Control and just say, "Create this pod, run to completion."
MARK: Nice. That makes sense.
FRANCESC: That is nice, yeah.
BRIAN: And, you know, just put that in a cron somewhere, and that'll do its thing. And then the other one I really wanted to call out is auto-scaling of pods, so, you know, you c--
MARK: Ah, we get a lot of requests for that.
BRIAN: Yup, so you can basically say, you know, "I want to run no fewer than this many and no more than this many, but within that range, run enough to keep, you know, memory or CPU targets in this general area," and then it will kind of [inaudible] up and down.
FRANCESC: Ah, that's very nice. That's really cool.
BRIAN: So that's the big stuff coming.
FRANCESC: Cool, very exciting.
MARK: All right, I think we're probably coming to a close. Brian, is there anything else about Kubernetes or Container Engine you want to mention we haven't really touched on yet?
BRIAN: I covered a pretty good chunk. I just wanted to recommend that people check out kubernetes.io. There's a bunch of docs and good information there, and also the Kubernetes GitHub site. There's also--you know, Kubernetes is very active on Slack, so you can get that info from kubernetes.io, so, you know, please join us, kind of play with things, see how kind of, you know, mapping your apps to this world works. If you've, you know, gotten woken up at night to have to restart something, definitely give Kubernetes a try.
MARK: Wonderful, and if people want to contact you directly, Brian, Twitter, email, website?
BRIAN: Yeah, Twitter, emai--so I’m Brian with an I, so B-R-I-A-N-D-O-R-S-E-Y on Twitter, and, you know, you can also email briandorsey@google.com.
FRANCESC: Cool, we'll add all of those links that you just mentioned to the show notes. I heard something about the Kubernetes Slack which I'm not sure if it's true or not. Is it true that they actually have one engineer all the time there? Like, rotating, not always the same person, but they always have someone from the team to answer questions?
BRIAN: So the Kubernetes team is fantastic, and, you know, in addition to Slack and a few other things, you know, part of being secondary on-call is, you know, working on social media to kind of help, you know, people through--like, get through things.
FRANCESC: That's very nice.
BRIAN: So I'm not gonna make the guarantees, like, absolutely always, but that's part of the, you know, on-call rotation, and there's just, like, you know, founders of the team and, like, there's just so many people who are really, really engaged, and then the community's growing so large right now that, you know, whether or not you get a Google engineer there, like, there are experts in Kubernetes that are very active and helping people out all the time. 
FRANCESC: That's very nice.
BRIAN: I'm really excited about how the community has, you know, come together to really, you know, help people solve problems and make their stuff happen, so.
MARK: Very cool. I know I'm in there. I've seen--I'm pretty sure I've seen you in there as well, Brian.
FRANCESC: I'm actually not there.
MARK: You're not there?
FRANCESC: Yeah.
MARK: I'm very quiet. I don’t really say a lot.
FRANCESC: But yeah, so yeah, thank you so much, Brian.
BRIAN: And thank you guys.
FRANCESC: And hopefully we'll interview you sometime soon about the next version with cooler things of Kubernetes, or maybe we can interview you about something else 'cause you know so much stuff anyway that that should be doable.
MARK: That'd be fun.
BRIAN: I'm happy to babble, and, you know, we can bring some folks from the Kubernetes team, so if anybody out there has somebody specific they want to hear from, let us know, and we'll bring them out too.
FRANCESC: Oh, yeah.
MARK: Definitely, and if anyone has any questions about Kubernetes, please fire them through. We always need questions of the week, so we'd love to have those on the podcast as well. Wonderful. Well, thank you very much, Brian. I think we'll end things there, but we appreciate you spending the time with us.
BRIAN: Likewise.
MARK: Thanks so much to Brian for joining us and having a chance to chat to us about Kubernetes, but we have a great question that's come in from one of our listeners, an Alex Van Boxel. He's asked us, "We have a lot of data in BigQuery," and he's looking to divide the data into buckets per date. He's quite aware that a table can never be too big because BigQuery's awesome, but he's wondering whether it can be too small. What is the size that is too small for BigQuery? So I think this is a really interesting question.
FRANCESC: Yeah, that's the kind of question I'm very curious about 'cause I didn't really know the answer.
MARK: Yeah, so we had a chat with a few people about this, and they had a few different perspectives which I thought were quite cool. We had--one of our teammates, Felipe, brought up a very interesting point that he pointed out in the documentation. He said that charges are rounded to the nearest megabyte with a minimum of ten megabytes data processed per table, so that's something to keep in mind when doing stuff with BigQuery, so if you have tables with really small amounts of data, you're always gonna get charged a minimum of ten megabytes per query.
FRANCESC: Yeah. Nowadays I don't think that anyone actually has a table with less than ten megs, but if you do, yeah, it's good to keep in mind.
MARK: Yeah, well, I think that could come up if people leave their data normalized and having, like, small access status stables. You know how you'd normally do that in Firebase and stuff like that?
FRANCESC: Oh, yeah.
MARK: So you could get extra charges that way.
FRANCESC: That's a very good point. Yeah, so good to take care in--no, good to take care of that, yeah.
MARK: Yeah.
FRANCESC: And we also asked one of the solution engineers here at Google for Work, Terrence, and what he said that--he said indeed there was not too small, which, again, it's not--there's nothing too small. There's nothing too big. Like, it's BigQuery. It just handles everything you want, but that his rule of thumb, it's around 100 gigabytes, so if you have less than that, it's not probably worth sharding, and over that it starts making sense, so if you have, like, hundreds of megs, probably you're good. If you start having terabytes, then that's where you should definitely start sharding a little bit, indeed.
MARK: Yeah, no, that sounds good, and for those who aren't as familiar with BigQuery, BigQuery has some great, like, tooling built-in for running queries across tables that have date formats in them, so you don't have to be afraid of sharding, which is nice, but it just makes it sort of a little bit better if you're--
FRANCESC: Yeah, actually, it might be a good idea to give a short, short description of what BigQuery is. It's one of my favorite Google Cloud Platform products, actually, 'cause basically it allows you to do SQL-like requests, so if you know how to write SQL segments, you're good, basically, but if you're gonna enter--if you're gonna query terabytes of data, instead of taking minutes or hours, it just takes seconds, so that's fun.
MARK: Yeah, no, we had a really good chat recently with some people about BigQuery and where is the right place for BigQuery, and I think that the takeaway from that was you have such large data sets that it's taking you hours to process them. BigQuery can allow you to A, not worry about infrastructure 'cause we manage that for you, but take those hours and move those down into seconds, which I think is really powerful.
FRANCESC: Yeah, it's basically what we use internally at Google to query our own logs, and we do have a lot of logs, so yeah, big data, not a problem with that.
MARK: Yeah, definitely, and if you're interested in that stuff, go find one of our teammates, Felipe. He does amazing things with big data, especially on Reddit, especially. He does some really cool stuff.
FRANCESC: Yeah.
MARK: We should have him on the show.
FRANCESC: Yeah, [inaudible]. I was about to say that exactly. We need one extra accent.
MARK: Yup, most definitely. There's so many people I want to have on the show. Okay, that sounds pretty good.
FRANCESC: Yup, so that sounds like it's pretty much we're wrapping up the episode.
MARK: Sounds good.
FRANCESC: Do you agree with that?
MARK: I think so. I think next time we'll probably be in different places yet again, but that's okay.
FRANCESC: I will probably be in a different country, yeah, so I'm gonna go tomorrow. I'm gonna be on my way to Devoxx.
MARK: Nice.
FRANCESC: So if there's anyone--so in Antwerp, in Belgium north of Brussels, so if there's anyone around there, we're gonna have--I think we're gonna be five people from our team, so that's gonna be fun.
MARK: That'll be great.
FRANCESC: And so if you're around and you want to chat about Google Cloud Platform, just send me a message, and we'll be happy to get together. What about you? Any traveling plans?
MARK: Well, I have an event here in San Francisco at the end of the week. I will be at FutureStack, which I'm really excited about. Steve Wozniak is gonna be keynoting there, so I'm super excited about that, and then after that I will be in Philadelphia for Clojure Conj, which I'm also really excited about, so.
FRANCESC: Oh, yeah, you told me about that. Actually, yeah, you're gonna be talking about containerizing Clojure tools?
MARK: Yeah, containerizing development environments, which I'm seeing a lot of people doing lately. I think it's really, really cool.
FRANCESC: I'm actually--I'm actually gonna be, next week, at DockerCon in Barcelona where I will be talking about containerizing developer tools, so yeah, you're not the only one.
MARK: Wonderful. All right, Francesc. Thank you very much for joining me yet again today.
FRANCESC: Very nice to talk to you, Mark.
MARK: Great, I'll speak go you later.
FRANCESC: Bye.
{{< /transcript >}}