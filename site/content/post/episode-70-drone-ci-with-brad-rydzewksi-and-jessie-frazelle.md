+++
audioDuration = "00:29:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.70.mp3"
audioSize = 42762331
categories = ["Open Source", "Containers"]
date = "2017-03-29T01:07:49Z"
description = "Digging back into our archive of interviews from Google Cloud Next, Mark and Francesc talk to Brad Rydzewski, creator of Drone, about the oipen source continuous integration and delivery platform. We are also excited to have the amazing Jessie Frazelle joining us as well!"
draft = false
episodeNumber = 70
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Drone CI with Brad Rydzewksi and Jessie Frazelle"
image="/images/post/droneio.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/JmjFKnF9bSt"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6282em/episode_70_drone_ci_with_brad_rydzewksi_and/"
+++

Digging back into our archive of interviews from Google Cloud Next,
[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) talk to [Brad Rydzewski](https://twitter.com/bradrydzewski),
creator of [Drone](http://try.drone.io/), about the open source continuous integration and delivery platform. We are also excited to have
the amazing [Jessie Frazelle](https://twitter.com/jessfraz) joining us as well!

<!--more-->

##### About Brad Rydzewksi

[Brad Rydzewski](https://twitter.com/bradrydzewski) is the creator of the open source [Drone](http://try.drone.io/) project,
which provides container based continuous delivery.

##### About Jessie Frazelle

[Jessie Frazelle](https://twitter.com/jessfraz) is also part of the Google Cloud Platform Developer Advocacy team, and is generally known as
"That container girl", and is an avid "Door to door leenuux salesperson." 

##### Cool things of the week

- Announcing general availability of Google Cloud Dataflow for Python [blog](https://cloud.google.com/blog/big-data/2017/03/announcing-general-availability-of-google-cloud-dataflow-for-python)
- Google Cloud Platform for Data Scientists: Using R with Google Cloud SQL for MySQL [blog](https://cloud.google.com/blog/big-data/2017/03/google-cloud-platform-for-data-scientists-using-r-with-google-cloud-sql-for-mysql)
- Cloud SQL for PostgreSQL: Managed PostgreSQL for your mobile and geospatial applications in Google Cloud [blog](https://cloudplatform.googleblog.com/2017/03/Cloud-SQL-for-PostgreSQL-managed-PostgreSQL-for-your-mobile-and-geospatial-applications-in-Google-Cloud.html)

##### Interview

- Drone [homepage](http://try.drone.io/) [github](https://github.com/drone/drone)
- Drone on Container Engine [github](https://github.com/NYTimes/drone-gke)
- Kubernetes Namespaces [docs](https://kubernetes.io/docs/user-guide/namespaces/)
- Docker compose [docs](https://docs.docker.com/compose/overview/)
- Drone Plugins [site](http://plugins.drone.io/)

<div style="text-align: center">
  <img src="/images/post/droneio.png" style="margin: auto;">
   <p style="font-size:0.8em"><a href="http://try.drone.io/">http://try.drone.io/</a><p>
</div>

##### Question of the week

This questions of the week comes from [Rokesh Jankie](https://twitter.com/rjankie):

What is protocol buffers, and why should we all start using it?

- Protocol Buffers [site](https://developers.google.com/protocol-buffers/)
- gRPC previously on the podcast [episode 15](https://www.gcppodcast.com/post/episode-15-grpc-with-varun-tarwal/) [episode 43](https://www.gcppodcast.com/post/episode-43-grpc-with-brandon-philips/)
- FlatBuffers [site](https://google.github.io/flatbuffers/)

##### Where can you find us next?

Mark will be heading to [Vancouver Unity Games Meetup](https://www.meetup.com/UnityGames/events/238574781/) 
and [Polyglot Vancouver Meetup](https://www.meetup.com/PolyglotVancouver/events/238312555/),
and then on to [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/) in April.

Francesc will be presenting at [Gophercon China](http://www.bagevent.com/event/357764) in April, and will then head off to New York!  

{{< transcript "FRANCESC: Hi, and welcome to episode number 70 of the weekly Google Cloud Platform podcast. I am Francesc Campoy and I'm here with my colleague, Mark Mandel. Hey Mark, how are you doing?" >}}

MARK: I'm doing very well, Francesc. How are you doing today? 

FRANCESC: I'm doing pretty good, pretty good. Still second week of relaxing time after Next, feeling relaxed, and planning on new stuff. Today we have a very cool interview that we're rescuing from the Cloud Next 2017 conference floor. We got the chance to meet-- well actually, I had met him before, but I don't think you'd met him before. 

So we met Brad Rydzewski, who is the creator of Drone CI. And we got the chance to talk about how it works. And Drone CI is, for those that don't know, it's a continuous integration, continuous deployment platform that is based on containers. And since Jessie Frazelle was walking around-- 

MARK: She was just around, we figured we'd just pull her in and be like, hey, you want to come join us? 

FRANCESC: Yeah, so she joined us. So we have to then interview with both Brad Rydzewski and Jessie Frazelle, which was pretty awesome. 

MARK: It was pretty awesome. And once we're done with that, we've got our question of the week, all about protobufs. Why should we use protocol buffers? Why is this thing cool, and what is it useful for? 

FRANCESC: Yeah, and the question is actually coming from someone that came to meet us at the GCP podcast booth at Cloud Next. So all Cloud Next-related things today. 

MARK: Exactly. So before we get into our interviews and our questions of the week, why don't we talk through our cool things of the week? 

FRANCESC: Yeah. So the first one that you brought is for Google Cloud Dataflow, which I love. It's an amazing platform, to basically do flows of data. 

MARK: Yeah, big streaming piles of data and doing real-time analytics or [? ETL ?] or all sorts of other fun stuff to it as it comes through. 

FRANCESC: The only thing I didn't like is that you had to write Java for it. And I've done it, but it's not the case anymore. 

MARK: Well, so you could write Python on Dataflow, for a while, but it is now generally available. So you can go hack on that, and you have SLAs and all the good stuff, which is pretty cool. So you can build pipelines on, say, Apache Beam as well, which is the open source version of Dataflow within Python, as well as do them directly on Dataflow until you can do all your data needs and analytic needs on Dataflow using Python under general availability. Go have at it and have lots of fun. 

FRANCESC: Nice. And if you're more interested in Dataflow, we had an episode, episode number 30, where we talked about gaming analytics and we talked a little bit more in detail what Dataflow is. But I guess that at some point we should do an episode on Dataflow. 

MARK: We should. 

FRANCESC: As soon as they get support for Go. 

MARK: Hello. 

FRANCESC: Anyway, the second cool thing of the week, actually the second and the third one are related both to SQL. 

MARK: Yeah. So this one's mine too. So this is kind of cool. This is a blog post that's on the Big Data and Machine Learning Blog, talking about how you can use R-- I have to think about that because I'm Australian, I kind of say ah. I have to say R. 

R the programming language, commonly used for scientific, numerical, analytic statistical data crunching and providing plots and whatnot for the data. How to connect that up to the Cloud SQL, the MySQL edition, so that you can pull data out of your Cloud SQL systems and do statistical analysis on it, build graphs, build diagrams, all that cool stuff. So your data scientists can have loads of fun with your Cloud SQL data. 

FRANCESC: Nice. I have two jokes. Do you know what's the favorite language of pirates? 

MARK: Arr. 

FRANCESC: And do you know how to say R in Spanish? 

MARK: No. 

FRANCESC: [ROLLED R] Try it. 

MARK: [ROLLED R] 

FRANCESC: That's actually not-- 

MARK: Is that all right? 

FRANCESC: Yeah. 

MARK: You'll take it? All right? 

FRANCESC: That's decent. Good. OK, so the last cool thing of the week for today is again, Cloud SQL. But this [INAUDIBLE] is now MySQL. 

As you know, we announced that during Cloud Next. And there's a blog post written about how you can use it for geospatial applications. And I think it's very interesting, because it actually comes from our friends in the Codelabs. 

Yeah, we had them before. We had them specifically one episode, we had [INAUDIBLE] on episode 41. And they do a lot of really cool things with maps. 

And now they're talking about how they actually do these and how do the queries about oh, how do I find these things in the map? Storing old information on PostgreSQL with Cloud SQL. So it's a very interesting blog post with a lot of really interesting detail, a lot of cool graphs and maps and diagrams. So if you're interested on geospatial applications, and specifically SQL, MySQL, or PostgreSQL, go check it out. 

MARK:  Awesome. Well, why don't we go chat with our friends Brad and Jessie and see what they're up to? 

FRANCESC: Let's do that. We're now joined by Brad Rydzewski here on still the floor of Cloud Next in Moscone West in San Francisco, beautiful California. And I'm very happy to welcome here. Hello, Brad. How are you doing? 

BRAD: Very good, thank you. Thanks for having me. 

FRANCESC: Thank you for coming. Why are you here? Who are you? 

BRAD: Well, OK. So I'm an open source developer. I work primarily on an open source project called Drone. It focuses on container-based continuous delivery. So it integrates with Google Cloud Platform. And many of my open source community members use Google Cloud Platform. So it's a great opportunity to be here and learn about the platform. 

MARK: Cool. I'm also pretty excited, and I have to admit something. I'm a huge fan of yours. We have a guest host here as well, Jessie Frazelle. How are you doing? 

JESSIE: I'm good. I just gave my talk, so now I'm super relaxed. 

FRANCESC: Yeah, basically we decided that we're going to be talking a little bit of containers at some point. So in case that we say anything wrong, Jessie can just like, shout at us or something. 

MARK: I'm totally OK with that. 

FRANCESC: So let's talk a little bit more about Drone. You said it is a continuous delivery product or a service. What is it exactly? What is the difference with others, like Travis or Jenkins? 

BRAD: Sure. I think the biggest difference is that Drone is built from the ground up to use containers as the build runtime. Specifically right now it uses Docker. So every single build and build step executes in a Docker container itself. 

And the configuration is defined as a superset of the Docker Compose YAML. So it's really a container-first solution. 

MARK: So this project, is it open source, is it hosted? What's the idea there? 

BRAD: Yeah, it's completely open source. It's on GitHub, you can find at github.com/drone/drone. 

MARK: Awesome. But Drone's also a business as well, is that correct? 

BRAD: Yeah. So it started out as a service, a subscription service similar to a lot of the other ones out there. But right now we focus mostly on open source and on premise and enterprise. 

FRANCESC: Cool. And before we get into the details on how it is implemented, why's the name Drone? 

BRAD: The idea with the name Drone came from this idea that it was automated, that you had something controlling and executing your builds in an automated fashion kind of from a central source, like that Borg source. I think that's a name you guys are familiar with, Google. 

MARK: Borg, yeah, maybe. 

BRAD: The name came like five years ago, maybe when it was a little less of a controversial term. And then it just kind of stuck. And domain names are hard to come by, so I just wasn't interested in changing at that point. 

FRANCESC: Cool. So let's talk a little bit more about exactly how Drone works. Like you said, it's an open source project, so you can run it anywhere. Where are people running it? How do you run it? 

BRAD: Sure. Well, Drone is built in Go, so it compiles down to a nice small binary that has no external runtime dependencies. It ships in, like, a 15-megabyte Docker scratch image. 

So it's really easy to get up and running. And you can really run it anywhere you want on any cloud, within your data center, on your own infrastructure. It's a really portable system. 

MARK: Now I think we were talking about as well before the episode, most people run it on Kubernetes, or a lot of people do? 

BRAD: Yeah. I think it's incredible, I remember a year or two ago, Kubernetes came up somewhat frequently. I think now within the Drone community, almost every day someone is installing Drone on Kubernetes. I'm blown away. And I think as a result, we're spending a lot more time trying to integrate with Kubernetes and make that a more seamless experience. 

FRANCESC: Cool. Could you tell us a little bit more about why Kubernetes? Maybe Jessie knows about this. Why do you think Kubernetes would be a good environment to run such a thing as Drone? 

JESSIE: Yeah, I think a lot of people actually use Kubernetes most of the time for CI processes, because you have a bunch of jobs, you don't really care on which nodes they brought in, you just need to get it somewhere and it needs to complete. So having just the basic scheduler there to handle a bunch of jobs for your corporation or something is super nice. 

MARK: I'm sure the isolation's also a nice factor too. 

JESSIE: Oh yeah, of course, because the containers isolate. And then you kind of have peace of mind that team two is not messing with team one. 

FRANCESC: So whenever we think about a bunch of different tasks that need to be processed, especially for Kubernetes, the first thing that comes to mind is the Jobs API. Are you using it? 

BRAD: So right now, we initially started looking at the Jobs API. And one of the suggestions we got was instead of using the Jobs API, was to create custom name spaces, one for each build, and then inside that name space spin up pods with persistent volumes, and then for each step in the pipeline creating a new pod. 

MARK: So for those people who aren't familiar-- and I'll refer to you, Jessie-- what's a namespace? What does that mean? 

JESSIE: Yes. So Kubernetes has this concept of namespaces, where you can almost segregate how your cluster is defined in terms of where things are running and how they run in terms of interactions with the other containers. So when you namespace something, you're kind of blocking off network traffic, stuff like that, from interacting with another namespace. And where we're even getting to in the future is where your security model could be the namespace as a boundary, which is why it would actually be great for Drone in this case, because then maybe even multitenant jobs, not in the same company could be run on Kubernetes as a CI, which would be really cool. 

FRANCESC: So basically you could say that it's kind of like one more layer of insulation. Like containers provide a layer of insulation, namespaces is like the second one on top. 

JESSIE: Yeah, it's just the more abstract layer. Instead of isolation from the system calls of Linux and stuff like that, you're just one more layer up of it's isolating the parts of Kubernetes that you don't want to interact. 

BRAD: I think the interesting thing too about namespaces-- you can correct me if I'm wrong, Jessie-- but my understanding is if you delete the namespace, it cleans everything up. So from a CI perspective, it's really nice. A pipeline might have 10 or 15 steps, all creating and spawning containers. So the fact that you can just with one API call wipe all that out and not worry about leaving artifacts around on the system is really nice, at least from an integration standpoint. 

MARK: Probably also means you're less likely to accidentally wipe off something you shouldn't be wiping off. 

JESSIE: Yeah. That's genius, actually, I didn't think of that as a feature. It's like a hidden feature there. 

MARK: I didn't know that was a thing. I'm actually now really excited about it. That's cool. 

BRAD: Credit goes to Kelsey, because he's the one that told me that that's what I should be doing. 

FRANCESC: Your coworker, Kelsey Hightower. Hello. 

MARK: Excellent. So now I'm also just curious. You said for using Drone, you read a Docker Compose file. What does the developer experience when they use Drone? 

BRAD: Sure. Drone supports a lot of different workflows. But I think the most interesting is Drone uses, like I said, a superset of Docker Compose and in many ways, behaves like Docker Compose. So you can actually run your build locally just by running drone exec. And it'll spin up, let's say you're using Docker for Mac. It'll spin up and run your build in isolation locally. So gone are the days where you're pushing to your CI server, seeing it fail, updating your YAML, pushing and kind of rinse and repeat, doing it over and over and banging your head against the wall. 

FRANCESC: I've done that. 

BRAD: So yeah, I think it starts with that. And a lot of individuals really like that workflow. So then when you push to something like GitHub or Bitbucket or GitLab, Drone supports many different providers. Right now everything gets enqueued, and Drone will [? pool ?] down the builds onto one or many machines and execute the build by interacting directly with the Docker host, spinning up those containers. And so the nice thing is, you have a level of determinism because the build that you executed from the command line on your machine runs the exact same way in your CI environment on your servers. 

FRANCESC: Nice. I think it's time to go to be more into the architecture. You mentioned that it is Go. Yay. You also mentioned that it was basically just like a Docker container, everything was running on containers. You can write very easily on Kubernetes. What are the other dependencies that you have? Is there any other dependencies? Like, I don't know, like what data for storage or communication across containers? 

BRAD: Sure. So in terms of dependencies, the most important thing, in my opinion, with Drone is that it ships as a single binary with no hard external dependencies other than a container runtime. And so that's important because no one wants to download and install open source software and then have to install 10 other pieces of open source software. 

But that being said, using Go, and Go makes it really easy to do abstractions with interfaces. One of the goals is they ship Drone with built-in modules like a queue, like Pub/Sub, like log streaming, but to allow you to swap those out with something-- and I'm going to use this buzz word, but something more cloud native. 

[LAUGHTER] 

BRAD: Yeah, I know, right? Everyone's laughing. And it's one of those terms that's thrown around a lot, and it's kind of lost a little bit a meaning. 

But for me, what I want with something that's considered cloud native is you install it, you install the software, you're running it, but you can swap out modules with things that are going to scale that you don't have to worry about. So for example, Drone ships with an internal in-memory queue. But using Go and using interfaces, you can swap it out very easily with Google Cloud Pub/Sub. 

FRANCESC: Nice. 

MARK: So I was going to ask, you said like using Go, using interfaces, is that using like, the Go 1.8 plugin system? Or how are you actually switching out from one to the other? 

BRAD: So right now, we provide those baked in. So right now if you're using Drone, you can use the in-memory queue or the Cloud Pub/Sub queue. Those are the only two we offer. Maybe we'll look at the plugins. That's a great and interesting new feature, so it's something we'll definitely look into. 

MARK: So were you configuring it through like, an environment variable, or is that how it works? 

JESSIE: Yeah. 

MARK: OK, cool. 

BRAD: You just flip a few environment variables and then you're good to go. And so then we can do that with other modules in terms of you got the queue. Now you have logging. Drone has an in-memory log multiplexer. You can use Stackdriver Logging. You can do that with the EventBus, you can use Pub/Sub. And another goal is maybe using Kubernetes as the backend instead of in memory or a local docker. 

FRANCESC: Nice. And once you are able to basically break that-- I'm going to use the word monolith, that monolith that you mentioned that you have, that one single static binary built with Go into more pieces, I guess that you're also thinking about the fact that you can scale some of the pieces independent of the rest. What are your plans on that? 

BRAD: Yeah, I think that's the goal, is letting the developer pick and choose what they want to scale. Or maybe as Drone grows, it can kind of grow with them by leveraging Google Cloud and the services it provides. 

FRANCESC: I'm curious about Jessie's opinion on the definition of cloud native. Because I know that she has opinions on this. So what is cloud native for you? 

JESSIE: I was actually just going to joke that if you say that one more time, Eric Brewer's going to show up here. 

FRANCESC: Cloud native. 

[LAUGHTER] 

Hello Eric! 

MARK: Where is he? Where is he? 

FRANCESC: He's probably somewhere around here. 

JESSIE: Yeah, it's such a buzzword. I think that it's just honestly anything that you can deploy in the cloud easily, which is a lot of things. And I think people just kind of throw that around. But also things that are built into tools that are the cloud, like using Pub/Sub, using integrations into Google Cloud itself is super cloud native. But I feel like a salesperson right now. 

BRAD: I agree. I think we need to take it one step further. I think that's what cloud native-- I said it one more time, sorry. 

[LAUGHTER] 

I think that's what it should be. I think it's all about integrating with those built-in services that Google Cloud Platform, or maybe other providers have to offer to give you that extra scalability and maintainability. And I wish we were more strict with the term, so that's kind of how I use it. 

MARK: Do you look at it also from the perspective of it's inelastic, right? If you build certain apps in certain ways, they're very hard to scale because they might have dependencies on other things. When you look at things like twelve-factor apps, that kind of stuff. I think of that as well when I think cloud native, like I've built my apps such that if it lives in the cloud, I can have 1,000 servers, I can have 2,000, I could have 10, it doesn't matter. 

JESSIE: Yeah, and the scalability of it and the fact that you can tear it down, spin it up. A lot of that I think comes from containers, but being able to just clean slate, just start from nothing and go from everything is huge. 

FRANCESC: So last time we talked about Drone here on the podcast was because it was a cool thing of the week, which was because "The New York Times," they created-- is it a plugin for Drone so you can deploy stuff directly to App Engine and Container Engine? 

BRAD: Correct. Yeah, so Drone has a really nice plugin system where every step in the pipeline is a container. And that includes plugins themselves. 

So writing plugins is as simple as putting a bash script in a container, so they can be really any language. And there's a really low barrier to entry. So "The New York Times" created a number of plugins, including Kubernetes plugins. And Drone actually has probably about five or six different Kubernetes plugins that will work with Kubernetes in different ways, some more simple and some more advanced. 

FRANCESC: So what is the whole idea behind it? Does it mean that I can basically have my YAML file that you were mentioning at the beginning, and at some point just say whenever there's any change in my repo, this is going to call Drone, it's going to create a new image, new deployment? 

BRAD: Yeah, correct. So we have plugins for Google Container Registry. So in the case of "The New York Times" they're pushing to Google Container Registry at a simple plug-in to do that and then once it was in the registry, they use the Kubernetes plugin and a spec file, and they use that to automatically push the new image to Kubernetes and autodeploy it to a number of different instances. And I've even seen teams where they were deploying [? pool ?] requests. 

So they wanted to live test it, to smoke test it. And so you can do some really interesting things there. There's a lot of interesting options. 

MARK: Well, from those plugins like that, and you were talking about having the Pub/Sub integration, are there any plans going forward to be more integrated with Google Cloud Platform? What's the plan there? 

BRAD: I think ideally you know all those different modules we talked about, which is queuing, which is eventing, logging, those are all common with a CI system. You'll find them in any CI system. And I would love to be able to kind of hot swap out those with the Google Cloud Platform features. And one of the biggest ones is, I want to be able to launch builds on Kubernetes itself. So instead of interacting directly with the Docker daemon, we can use the Kubernetes scheduler to launch builds. 

MARK: So there's been a bunch of announcements, there's been all sorts of cool stuff going on. What have been some highlights for you from the conference? 

BRAD: I think one of the biggest highlights was the Community Summit, which gave us a chance to kind of connect with a lot of other members in the community, open source developers, and get some insight into the vision behind Google Cloud. And I think as an open source maintainer, the thing I look forward most is Google's commitment to openness. I think it's awesome that Kubernetes is being developed in the open and given to the CNCF Foundation. 

And I'm really interested to see how much further Google can take that. As an open source developer, I want to integrate with Google. But I want to make sure I'm not locking customers in, so I'm really interested to see how Google will take openness to the next level in its cloud. 

MARK: That was a highlight for me on the keynote, when we were like, yeah, we want to be open, we want to have you land here, we want to have you able to leave. But we want to take our chances on the fact that we're just going to be the best place for you to stay. That's a philosophy that's definitely near and dear to my heart. 

FRANCESC: Similar question, but for Jessie. You've been here at the conference also three days already. What was your favorite moment, or favorite announcement or whatever? 

JESSIE: I guess I have two. So my favorite moment was that the keynote today was all about open source and being open, and I obviously love that stuff. But then I liked the announcement that Urs gave with regard to the security chip for verifying the BIOS of the servers. I think that it's really cool that Google has this opportunity, since we control the hardware to do that, which not a lot of people have. And it's super dope. 

FRANCESC: Yeah, we interviewed Cornelius Willis and Neil Miller from Google Cloud marketing team exactly about that. And we were able to actually touch one of those titan chips. They're tiny. 

MARK: I tried putting one in my ear. 

JESSIE: That's so cool. 

MARK: Cool. Well, we're almost running out of time. But is there anything else we haven't talked about that you want to mention before we wrap things up? 

FRANCESC: Regarding Drone or cloud native, or cloud native, or maybe other cloud native, or Cloud Next? 

JESSIE: Serverless, just kidding. 

ALL: Oh! 

FRANCESC: She went there. 

BRAD: I think the only thing maybe worth mentioning that I'm really excited about is, I mentioned that we were taking all of these components and modules in Drone and extending them and actually pulling them out of Drone. And the cool thing is as we do that, it gives you the ability to compose your own CI system. So if you've ever wanted to scratch your own itch and build that CI system but you didn't want to build your own queue, your own Message Bus, your own logger, integrate with Docker, integrate with Kubernetes, your own YAML format, you can actually pick and choose those modules and compose your own in a surprisingly small amount of code. 

FRANCESC: All of this code is as we said, open source and is at github.com/drone/drone. 

BRAD: Yes. 

FRANCESC: Perfect. 

MARK: And that's the perfect place for people to get involved, they should just go to the GitHub? 

BRAD: Yeah, absolutely, log tons of issues. Just kidding. 

[LAUGHTER] 

FRANCESC: What about you, Jessie? Anything else you'd like to add? 

JESSIE: That's all, yeah. 

FRANCESC: Great. Well, thank you so much, both of you for taking the time out of your Cloud Next experience to share your expertise with us. 

JESSIE: This was fun, thanks. 

MARK: And an enormous thank you to Brad and Jessie for joining us. Brad, great conversation about CI, CD systems, containers. Jessie, always a delight to have on the podcast. Really interesting stuff. I really like testing and testing infrastructure and making sure that people who do that sort of stuff, obviously I think a lot of us do. But having those infrastructure tools available to people as open source products means that we can all build really good systems. 

FRANCESC: Yeah, also the explanation on namespaces, I actually didn't know much about it. So that was very interesting. 

OK, so let's go with the question of the week. And the question of the week comes from this guy that came and got a podcast T-shirt from the podcast booth Cloud Next. His name is Rokesh Jankie. I hope I pronounced your name correctly. Unlike you misspelled your name in the email you sent me. But anyway. 

[LAUGHTER] 

So his question is, OK, so what is protocol buffers, and why should we all start using it? 

MARK: Yeah, what is protobuf? So it is another open source project that came from Google. It's actually been around for a long time. What you can basically take from it is it's an IDL, it's an Interface Definition Language. So you write these protofiles. 

And from those protofiles, you're able to basically take the data that is defined in those protofiles and send it across the wire in a variety of different languages. And it's a binary format that goes across the wire. So it's nice and small, very performant, and super super cool that way. The nice thing is, it's contract first. So you're writing this interface definition language. 

Your sender and your receiver both have an understanding of exactly the data they should be getting and receiving. So that's hugely powerful. But it also gives you nice things like versioning. So if your data changes, you don't have to worry about as much between the sender and receiver, and do all sorts of fun stuff like that. 

FRANCESC: Yeah, just to give an idea of how important this thing is, we use it at Google for virtually everything. Whenever we encode anything in files it's always protocol buffers. Whenever we're sending data over the network, it's always protocol buffers. So it is basically, we do not use JSON internally that much. Instead we use protocol buffers. So you can see it like the more efficient and easier to collaborate way of sending data around. 

MARK: If you're going to play with protocol buffers, I would definitely say have a look at the gRPC Project. It is the default serialization and basically core interface to gRPC. We have two episodes that we've talked about it on. Episode number 15, we had Varune Talwar, who is the PM on it. And we also talked with Brandon [? Phillips ?] from [? CORE-OS ?] who talked about how they use it internally as well. 

FRANCESC: Yeah, and they use it a lot. 

MARK: They use it a lot. So definitely well worth a listen. You can use protocol buffers on their own. But I think combined with gRPC, it's just a really nice fit. 

FRANCESC: Yeah, and basically gRPC, what it's going to do. So if protocol buffers defines find the messages, gRPC defines the operations that receives and sends those messages. Pretty much. It's kind of a way of saying it. 

And since we're talking about protocol buffers, there's also another cool project that I really like and I've discovered not that long ago. It's called FlatBuffers. Of course you've heard about FlatBuffers, because video game designers love it. 

MARK: Yes, I have heard about FlatBuffers. So FlatBuffers are literally a slightly different way of serializing data up and down the pipe. It still has an interface definition language. But the thing that makes it different is that the data can be accessed directly without having to parse and unpack it on the other end. 

FRANCESC: So basically, the way I see FlatBuffers is that in protocol buffers, you need to decode the whole message to get any of the data inside. In FlatBuffers, whenever you need that piece of data, you access it directly, which means that you're doing it like lazy decoding, and if you have a lot of information and you want to just start the game now, you can do it. 

MARK: Yeah, so you get just different pros and cons on each one, on which side do you get the performance hit on. They both work. The cool thing is, if you're using gRPC, you can use FlatBuffers, and you can use protocol buffers. It's really up to you. Awesome. 

Well, I think that's going to wrap up another episode today. Francesc, are you heading off? I think you're still going to GopherCon China? 

FRANCESC: Yes, I'll be in GopherCon China April 15 and 16, then I'm planning to do some other things around. Still not have decided. So I will not announce it yet. And afterwards I'll be on my way to New York. First week of April I'll be in New York for internal meeting, so probably I'm going to be planning some Go meetups or Kubernetes meetups, stuff like that. What about you? 

MARK: So as I said before, I'm heading off to Vancouver. I've just confirmed that I will be speaking at the Vancouver Unity meetup, talking about game servers actually running on Kubernetes, which is loads and loads of fun. And then I'll also be talking at the polyglot meetup on the 6th as well. And Vancouver, redoing our old favorite Simon Says, talking about gRPC and Kubernetes, strangely enough. 

But after that, later in April, East Coast Game Conference and Vector, I'll be there both places as well. Again, talking about Kubernetes and game servers, having loads of fun there. 

FRANCESC: Well, I think it's time to say goodbye. So thanks again. One more week and it's 72 weeks in a row. Thank you for taking the time to record this amazing episode with me. And thank you all for listening. 

MARK: Yeah. And Francesc, thank you for joining me once again. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}
