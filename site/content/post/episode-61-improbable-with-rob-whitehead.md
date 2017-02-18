+++
audioDuration = "00:38:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.61.mp3"
audioSize = 55233013
categories = ["Customer", "Gaming", "gRPC", "CoreOS"]
date = "2017-02-15T01:07:49Z"
description = "You might have heard about Improbable teaming up with Google Cloud, and you might want to know more about it. Well, this episode is for you!"
draft = false
episodeNumber = 61
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Improbable with Rob Whitehead"
image = "/images/post/improbable.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/exfaGRcvSwg"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5u9fxy/episode_61_improbable_with_rob_whitehead/"
+++

You might have heard about [Improbable teaming up with Google Cloud](https://cloudplatform.googleblog.com/2016/12/google-partners-with-improbable-to.html),
and you might want to know more about it. Well, this episode is for you!

[Rob Whitehead](https://twitter.com/rjfwhite), CTO and co-founder of Improbable, joins the podcast to explain to
your co-hosts, [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc),
everything there is to know about Improbable, SpatialOS, and their relationship to Google Cloud Platform.

<!--more-->

##### About Rob

[Rob Whitehead](https://twitter.com/rjfwhite) co-founded [Improbable](https://improbable.io/)
in the summer of 2012 with a fellow Cambridge classmate, with the goal of creating a technology
to digitally recreate and fully simulate the real and virtual worlds using the massive
computational power of the cloud.

In a previous life, he was an indie iOS developer, and an arms dealer in Second Life!

##### Cool thing of the week

- Google Cloud Endpoints now generally available: a fast, scalable API gateway [blog post](https://cloudplatform.googleblog.com/2017/02/Google-Cloud-Endpoints-now-GA-a-fast-scalable-API-gateway.html)
- Introducing Cloud Spanner: a global database service for mission-critical applications [blog post](https://cloudplatform.googleblog.com/2017/02/introducing-Cloud-Spanner-a-global-database-service-for-mission-critical-applications.html)
- Inside Cloud Spanner and the CAP Theorem [white paper](https://cloudplatform.googleblog.com/2017/02/inside-Cloud-Spanner-and-the-CAP-Theorem.html)

##### Interview

- Google partners with Improbable to support next generation of video games [blog post](https://cloudplatform.googleblog.com/2016/12/google-partners-with-improbable-to.html).
- Improbable [improbable.io](https://improbable.io/)
- SpatialOS [docs](https://spatialos.improbable.io/)

<div style="text-align: center">
    <img src="/images/post/improbable-screenshot.png" style="width:600px; max-width:100%">
    <p style="font-size:0.8em">
        A collision of two fully customized ships flying through the procedurally generated and persistent
        universe of Worlds Adrift, a game developed on SpatialOS.
        Read about the game’s <a href="https://spatialos.improbable.io/games/worlds-adrift-prototype-by-bossa-studios">origin story</a>
        and technical details of <a href="https://www.worldsadrift.com/blog/ships-physics/">its physics</a>.
    </p>
</div>

- Join the SpatialOS Games Alpha [here](https://spatialos.improbable.io/get-spatialos)
- The source code for the SpatialOS Hello world tutorial [GitHub](https://github.com/spatialos/HelloWorld)
- Running CoreOS Container Linux on Google Compute Engine [CoreOS docs](https://coreos.com/os/docs/latest/booting-on-google-compute-engine.html)
- SpatialOS also use [gRPC](http://www.grpc.io/) and [Bazel](https://bazel.build/).
- What we found when we simulated the backbone of the entire Internet on SpatialOS [blog post](https://improbable.io/2016/03/24/what-we-found-when-we-simulated-the-backbone-of-the-entire-internet-on-spatialos)

<iframe width="560" height="315" src="https://www.youtube.com/embed/NYcFLV1mUx8" frameborder="0" allowfullscreen></iframe>

##### Question of the week

How can I resize a persistent disk?

- Adding or Resizing Persistent Disks [docs](https://cloud.google.com/compute/docs/disks/add-persistent-disk)

##### Were will we be?

Mark will be at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc will speak tomorrow at the Go 1.8 [release party](https://www.meetup.com/golangsf/events/236673793/)
in San Francisco. A bit later he'll also be at [Gophercon India](http://www.gophercon.in).

{{< transcript "FRANCESC: Hi, and welcome to episode number 61 of the weekly Google Cloud Platform Podcast I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good, thanks, Francesc. All the better because we're in the same room at the same time. 

FRANCESC: Finally. For not long, but finally 

MARK: For a little bit 

FRANCESC: For a little bit. Just a week. But, yeah. Finally back from Europe, and still not in India. So there you go. 

MARK: San Francisco. 

FRANCESC: Yeah. And we have a very interesting episode that, I mean, I'm excited about it. But I know that you're even more excited, because video games 

MARK: I seem to be very excited a lot lately, I've noticed. It seems to be a recurring theme. 

FRANCESC: You're always-- I'm always excited, but you're always excited about this episode. Lately, I've been having pretty cool episodes. And actually, the two next episodes that we're going to be having, we don't really know what they are, and they're also very exciting. 

MARK: They're also very exciting. So this week, we have Rob Whitehead, a CTO at Improbable, joining us. Improbable is a company that helps you build massively online persistent worlds. 

And so we're going to chat with them. They run on GCP, and it's a pretty cool partnership we also have with them. So we're going to talk all about that. 

FRANCESC: Yeah, very interesting conversation talking about, basically, how will you do it if you had to build the matrix. Kind of. 

MARK: Kind of. Yeah. 

FRANCESC: A very, very interesting conversation, that's for sure. 

MARK: I want to be the architect, though. I get to be the architect. 

FRANCESC: You don't really have that beard, though. 

MARK: That's true 

FRANCESC: Yeah, sorry. 

MARK: Oh, well. 

FRANCESC: Sorry. No. 

MARK: That's OK. 

FRANCESC: If we were to have an architect, we know who that will be and he works at Google. 

MARK: That's true. That's totally true. 

FRANCESC: Anyway, at the end, we'll have the Question of the Week, which is about resizing disks. Something pretty normal and not that exciting. But you might need to do it at some point, and knowing this may make your life so much easier. 

MARK: Definitely. 

FRANCESC: But before that, we're going to go with our Cool Things of the Week. And they're seriously cool. 

MARK: They are seriously cool. I know the first one you had a fair bit of involvement in. 

FRANCESC: Yeah 

MARK: I see that Google Cloud Endpoints is now generally available 

FRANCESC: Yeah. We had GA, and it is pretty amazing. That's actually the topic I'm going to be talking about during my Cloud Next talk in two, three weeks. 

MARK: Yep. 

FRANCESC: So, yeah. I think the most interesting, like the cool thing about Cloud Endpoints is the fact that it allows you to do many things that you need to do. But without any effort, such as managing-- you need to do logging, you need to do monitoring, you need to do authentication. You need to do all of those things. With Cloud Endpoints, you get to do all of those by just having a [INAUDIBLE] back or [INAUDIBLE] justification, which is free and awesome. It's in the Kelsey Hightower scale of dopeness, it's pretty dope. So it is a very cool thing to have. Check it out. It is now GA and there's a bunch of things that it does. It is supported on GCE, on GKE, on App Engine for Java and Python, and actually anywhere else. You can run it anywhere. We have a small NGNX proxy that you can run anywhere. 

MARK: Cool 

FRANCESC: So, pretty cool. 

MARK: That is very cool. 

FRANCESC: Now the second Cool Thing of the Week is super-cool. Yeah, I mean it is globally, it is-- what's the word? Globally consistently cool? 

MARK: Ooh, I like that. 

FRANCESC: It is a globally consistently Cool Thing of the Week. Yeah, we released Cloud Spanner, which is our Spanner product service. 

MARK: Yes, so the public beta for Cloud Spanner, a globally-distributed relational database service. 

FRANCESC: Yeah, and it is pretty amazing. Because if you think about it, it's basically like we had already an episode on Bigtable table. And Bigtable is kind of a big deal. I see Spanner like as an evolution of Bigtable, because you're basically providing things that normally you only have in relational databases. But globally-distributed and consistently available, which it is kind of crazy. 

MARK: Yeah, so like you have all your traditional SQL stuff. So you've got your SQL, you've got schemas, you've got consistency. That's great. But you've also got really high availability, horizontal scaling basically up the wazoo, like to a global level, and automatic replication, and like global transactions [? inconsistency. ?] It's pretty crazy. We're going to definitely do a whole podcast topic on it. But there's a couple of blog posts that you can read about it right now. 

FRANCESC: Definitely deserves a full episode, if it's not more than one. But for those that might have cringed when I said that it is both consistent and globally available, that is good to cringe. We have an article explaining why it is not really true, but almost-- It is-- 

MARK: True enough. 

FRANCESC: It is true enough. It is not completely available. But the availability is so high that it is basically globally available. So we have a bunch of links in the show notes, so you can read that CAP theorem white paper on Spanner. But there's also a bunch of other ones that you may be interested by. There is also a bunch of different tutorials that you can try. There is one for Go. 

MARK: Oh, cool. 

FRANCESC: Which is pretty nice. But also note.js and I think Java and whatever you want to do. So go have a look. Play with it. It is pretty amazing 

MARK: It is indeed. Cool. So why don't we go have a chat with Rob at Improbable, then. 

FRANCESC: Let's do that. 

MARK: Sounds good. 

Today we are joined by a very special guest. I think they're always very special guests, but our very special guest's Rob Whitehead, CTO of improbable. Rob, how are you doing today? 

ROB: Yeah, not bad, Mark. How are you doing? 

MARK: Very, very well. Thank you so much for joining us, coming to talk to us about Improbable, about SpatialOS. Before we get stuck into that, why don't you tell us a little bit about who you are and what you do? 

ROB: Yes, sure. So I'm Rob. I'm co-founder and CTO of a tech company called Improbable. We're based in London, about 150 of us. Previously, I kind of started Improbable fresh out of college in 2012 before I met my co-founder, Herman, in Cambridge. Yeah, like my role's evolved over the years from working on our core technology to now looking after how the product, which we'll talk more about SpatialOS as being specifically applied in the games industry. 

FRANCESC: Cool. So, to be honest, for me, the first time I heard about Improbable was when I read headlines saying something that Improbable teams with Google. And I actually didn't realize it was the company name, say. I had some hard time parsing the sentence. Could you tell a little bit, for people that don't know, like people that are not like Mark into video games, what is Improbable? Why is it important, what do you do? 

ROB: Yeah, sure. And so it's probably worth telling you a little bit about this story behind where we got to SpatialOS. In the early days, I'd hang out with Herman, and we have this dream for a truly living world video game, whereby traditional games are constrained, either in terms of scale or in terms of the fidelity of the world. So you'll get very large, open world games which have very limited interaction. Or you get very, very smaller, more high fidelity worlds. A game like Battlefield. 

And we wanted to build a game that was a truly living world, where there were millions of trees, or millions of animals, monsters, and the players themselves were completely incidental inside that world, and it had huge amounts of physical fidelity. And we knew we had never seen games like that before. And we knew that this necessarily would require us to come up with a way of having multiple computers in the cloud cooperate together to simulate the same space, because the world was going to be too rich and too large for a single machine to have to deal with. And as we evolved, we've moved from our early prototypical ideas of building a game into building this foundational simulation platform, which is what we're doing now. 

MARK: Cool. All right, so you've built this platform called SpatialOS. What can you do inside of it. Is it just games? Or what's the possibilities? 

ROB: SpatialOS is a platform for building simulated worlds. So what do I mean by that? Any problem you have which involves a set of entities, which are things and they interact in unexpected and complex ways, and the scale of those interactions and the fidelity of those interactions is so large that you want to be using the power of multiple machines, SpatialOS nails. 

So if you're trying to simulate a very huge game, well, then you're going to have lots of player entities. You have monsters, trees, inventory items. If you're simulating a city, those entities might be cars, road segments, traffic signals, pedestrians, buildings. 

And it really depends on what domain you're modeling. And to get formal about it, it's in the realm of complex systems modeling. It's modeling systems where you have lots of little things interacting, and then you get crazy emerging consequences from that. 

MARK: Awesome. All right, so this is the Google Cloud Platform Podcast. Usually we talk about how you use Google Cloud Platform. But as well as that, I think it's worth noting there's a partnership here between Google Cloud Platform and Improbable as well. Do you want to talk a bit about how that works, and what that provides for developers? 

ROB: Yeah, so, I think both Improbable and Google agree that SpatialOS lets people build fundamentally new kinds of game experience with these massive simulated meaningful worlds. But it also lets smaller teams do so. And the idea of our games innovation program is about enabling game developers to get credits to start developing with SpatialOS for free. And essentially you have credits, so that rather than when you're developing your game, you have to pay for the compute being used here, and you have to pay for the compute after launch. So it's about helping you get up and running and not be afraid of really pushing the boundaries in terms of what you can do. 

MARK: So GCP's partnering with you to help power that whole program? 

ROB: Yeah, yeah. Exactly 

MARK: Perfect. And if people are interested in the program or they want to build something on SpatialOS for that program, is there any information upcoming or available right now? 

ROB: . Yes. So we're going to be announcing the specifics of the program closer towards GDC. But right now, anybody who signs up through spatialos.com will be eligible to apply for the program. And so if anyone's interested in going through, I'd recommend they go to spatialos.com and go through those steps. 

FRANCESC: Cool. So I wanted to know a little bit about how, like you said that there's the name of the OS, SpatialOS. Is it really an OS? What does it look to be a developer and to build something on top of it? 

ROB: Yes, sure. That's a very good question. So SpatialOS is classed as a distributed operating system. So when you have traditional operating systems, Android, Windows, they run on a single machine. SpatialOS is a layer above that, which lets you take multiple computers and consider them to be one big computer, and presents an abstraction on top of that. So specifically, SpatialOS runs on top of core OS on a cluster of machines in the cloud, and then gives you APIs you can treat as almost one big supercomputer. 

FRANCESC: Nice. So it sounds like it's like videogame-specific Kubernetes, almost? 

ROB: Yeah, I guess the core abstraction is you look at traditional-- well, it's a platform as a service. And you look at traditional platforms of the service we had in the early days, we had tools like Google App Engine, which are about a stateless web application with some persistent data back end. And it was great for a certain group of people. If you want to build certain kinds of mobile back end, or you want to build a web app, you can just nail that out really fast. 

And then you had more flexible platforms like Google Cloud functions, which let you have these transient pieces of computation acting and responding to things like [INAUDIBLE]. And from outside, we found there wasn't really a platform with an abstraction that was really about creating these large-scale simulated environments. And SpatialOS, we felt like it filled that in. And so rather than thinking about your cluster of machines as a set of, a bag of containers, like with Kubernetes, you think about your cluster of machines as a three-dimensional space. That's a pretty crazy abstraction, but it actually works. 

So you think of your cluster as a huge three-dimensional space, and inside of it you put entities. And these entities are the things I talked about before in your city simulation. They're your vehicles, your roads, your traffic signals. In your videogame, they're players, monsters, loots, all that kind of stuff. And then under the hood, we're partitioning up the data and computation of that world across a cluster behind the scenes for you. 

MARK: OK, so if I'm a developer who wants to build something on SpatialOS, what does that development flow look like? I think you mentioned maybe there are command line tools. How do I build something from start to finish with, say, an engine, like maybe Unity or something else? 

ROB: Yeah, for sure. So it's worth saying, from our side, we really believe in people taking the tools they're already familiar with to use our technology. So let's say you're traditionally used to building, like, a dedicated server-based multiplayer game. In Unity, you'd have a Unity-dedicated server, probably built out on Linux [? running, ?] and you'd probably put on some either dedicated machine or on some VM. And you'd have some clients go and connect to that. 

And so with SpatialOS, you download our SDK, which is just a series of command line tools, unlike Web UIs, essentially. And you get plugins which actually tie in to whatever game engine you're using. So whether you're using Unreal or using Unity or you're using your own game engine, this essentially handles your connection into SpatialOS and handles taking the part of the world which your engine is simulating and synchronizing it with the broader [INAUDIBLE]. And, yeah, you pretty much have business as usual. 

So once you've built your application using your game engine of choice, you build it out into what we call an assembly, which is almost like a distributed executable. It's this application which you're going to push into our platform, and it's going to run across lots of machines. And from that, you just use a single CLI command, like Spatial Deploy. And it takes your built-out Unity application and pushes it into our platform. 

And then it carves out those VMs in that cluster behind the scenes. And then instantly, you've got a simulated world running there up in the cloud. And the next step is, you can take a URL to that and share it with a friend, and have both of you log in. 

MARK: Cool, but does that mean I have to write in some sort of custom language, or am I escaping my usual set of tools, or how does that work? 

ROB: No, so you can use your existing set of tools, be it Unity, Unreal, whatever game engine or whatever kind of tool you want to be using for that. The thing which binds this all together and the magic is, traditionally, worlds would be built or ran from having a single dedicated server running in the cloud. Now there's a cluster of machines. 

So concretely, for a game like Worlds Adrift, we're actually running hundreds of instances of a game engine, like Unity, in the cloud cooperating together to simulate a world much bigger than any single one of those engines could ever understand. And then plugging into the world as well, you could have well over 1,000 clients interacting in the same physical environment. And again, that's much larger than a single game engine could ever deal with. And that's because SpatialOS is a distributed cluster handling the in-memory persistence of all those entities as they mutate, handling the network fan-out of you moving around the world and having all the things you're seeing streamed in to you. 

FRANCESC: So, going on the developer experience of SpatialOS, I'm curious about if MapReduce, the Hello World of MapReduce, is counting words, what is the Hello World of SpatialOS? 

ROB: So, you go through our game, you'll find there's actually an example game simulation we call Hello World. And it really is trying to demonstrate the core aspects of what the technology does. So in Hello World, there is, I guess we coined this term [INAUDIBLE], which, I don't know if it's going to catch on. 

But it's this idea, like this Hello World project has two teams, and the two teams are running at each other, and these little wizards. And they start with very small amounts of characters, and they build up and up and up until there are thousands a side attacking each other. And the Cloud deployment has two instances of Unity overlapping and co-simulating to simulate the entire space. 

So it's a good example of something showing an interesting game environment with emerging complexity and interesting game play mechanics. It's got the two workers cooperating together, demonstrating that SpatialOS is letting you use more than one machine. And that's the foundational thing you tend to jump from. 

FRANCESC: Nice. 

MARK: I've played it. There's lots of fire. It's fun. 

FRANCESC: Yeah. Marks set me on fire. It wasn't very friendly. 

MARK: That's what friends are for. Cool. All right, so now I'm also curious. SpatialOS sounds great. Platform as a service for these massively online games. Why does SpatialOS and Improbable use Google Cloud Platform? Like, what are you using on us as products? 

ROB: Yes, sure. So although as a developer, you're going to interact with SpatialOS under the hood with an innovation program like we wrote on Google Compute Engine to actually run those VMs. So when you create a SpatialOS deployment, you're going be using Google VMs to get requisitioned and start. And the thing we found with Google VMs is specifically around their provisioning time. 

So actually, if you're a small group of [INAUDIBLE] and you're trying to do a game jam and you want to be iterating rapidly and pushing your simulation to the cloud, like having a tight provisioning loop is really good, because it's the amount of time you go from a CLI command to actually having a game running in the cloud that you can go and play. And one we found GCE was specifically good for that. 

And the other side, which is something to bear in mind with games, is a lot of the web is built around TCP. It's built around these cross-response connections, a lot of JSON. And when you move towards applications like games, you're actually dealing with fire hoses of unreliable UDP packets. And traditionally, a lot of clouds haven't really been set up to be particularly good at routing that kind of traffic. And from our side, we found our Google Cloud Platform was a good choice in terms of games networking as well. 

FRANCESC: Nice. So, I think that on top of using Google Cloud Platform, you might have also been using other Google open source projects. Like, you mentioned [INAUDIBLE] and [INAUDIBLE] I think their headline is something like "Google infrastructure for everyone." Are you using something like GRPC. 

ROB: Yeah. There's actually plenty of stuff to talk about. And the first thing, yeah, is GRPC, although the core entity synchronization things within [INAUDIBLE] are bespoke. The platform itself, in terms of requisitioning deployments, getting metadata, all that where you use GRPC, the reason why we like that is, one is very, very easy streaming responses based upon HTTP/2. And the other side as well is having that binary serialization by default, and also having a typed RPC system by default as well, rather than throwing around JSON, and we found it was perfect for our use cases. And I guess another thing in the Google Space we use is Bazel So we have, when you're building a simulation platform, you're building APIs, which can be used in C#, C++, JavaScript, Java. And a tool like Bazel lets you handle a mono repo, which has a load of different languages working together in the same [? world. ?] And so we found that invaluable in terms of scaling as an engineering o
 rganization. 

FRANCESC: So it's actually interesting. Normally, when I hear people using this many tools from Google Open Source world, especially, they're normally ex-Googlers. You're not ex-Googlers, right? 

ROB: So a few people from our infrastructure team are ex-Googlers, and there's a certain bit of that in there. We have a good cross-section of different people in a tech like SpatialOS. You need to have this weird blend of ex-large scale software companies to give that production at scale stuff. You've got people from high-frequency trading firms who are used to that really low latency, high throughput kind of interactions. And you have people from the gaming industry who were around all the tricks and all the skills, which go into building a very efficient game engine, for example. 

FRANCESC: So, I guess the next question is, are you hiring? 

ROB: Yes, we are. So we actually have offices In San Francisco, we just set up recently there. And we also have our home base in Farringdon in London. So we have a lot of us hanging out there. And yeah, we're always looking for people who are interested in this kind of thing, in terms of building large-scale reliable infrastructure and simulating the world. We're building the matrix. 

MARK: Wonderful. So, curious, though. So you're building, it seems like, almost a very different type of platform from what people have built before. What were some interesting challenges you faced when building SpatialOS? 

ROB: Yeah. We had many, many challenges on our quest. That is definitely worth saying. Some fun stories to talk about there. One is when you start running. 

Normally, a game will run with a single server binary running in the cloud. And occasionally it will crash. So this stuff is high performance C++ code. Sometimes, it's going to have issues. 

Yeah, so traditionally when you run a single dedicated server, you'll find that. It's written in really high-performance C++ code, and occasionally it might crash. But what happens when you run 100 instances or 1,000 instances of that kind of game server code at the same time as a swarm of micro services, statistically speaking, the probability of any one of them failing goes up and up. 

So we had to bake into the core raw platform the fact that these workers can fail. And how that works is, we actually have the in-memory representation of the world. So every entity, every player, rock, character has an in-memory representation within the SpatialOS runtime of the state. And these workers are almost streaming processes. They're pulling in the data of the world around it, computing on stimulating parts of the world and streaming that back into SpatialOS. 

So at a moment's notice, if any of those workers were to fail, we can rush in and actually replace them with another worker, who can be given that information to continue the computation. So that's one really fun problem. I say "fun" in retrospect, obviously. They were incredibly tough things to get through. 

So I guess one of the most interesting challenges we have to solve is the fact that physics engines, when you run a single instance of them, they'll actually use non-determinism in how they solve their physics to actually increase the numerical stability of the result. So you can imagine a big part of the box is being stimulated by the algorithms inside of them. By randomly shuffling the order in which those things are processed, you end up with a better result mathematically. 

But when you start to have 1,000 instances of those physics engines overlapping and cooperating together, you get these really fun scenarios where you'll have overlap regions, where both of them are interested in the same world. And they might actually simulate slightly different responses. So from that side, we had to produce strategies and algorithms for essentially blending their truths together after a set amount of time. 

And like I said, that was a really interesting challenge where now, we can actually have a stack, a pile of boxes on top of each other whilst migrating the authority of those boxes between two physics engines multiple times a second. And the physics simulation is still stable. The way we think about it is almost eventually consistent physical simulation. And like I said, that was something we invested a lot of effort in in the early years. 

FRANCESC: My head's exploding. 

MARK: Yeah. I could see. 

ROB: Is that too crazy? [INAUDIBLE] 

FRANCESC: Yeah. I'm just thinking about it. 

MARK: [INAUDIBLE] makes sense. 

[INTERPOSING VOICES] 

ROB: I've got another little cheeky soundbite thing I can say, which is about the line of dominoes. Its actually my favorite one to describe the technology. 

MARK: Yeah, go on. 

ROB: I guess one of the easiest ways to break down SpatialOS into its most base example is a game which we're not planning on making. But let's call it Domino Simulator 2017. So in Domino Simulator 2017, there are one million dominoes. And you can flick the domino on the right side and have it cascade, cascade. And eventually it'll knock over the domino on the far left side, a million down. 

Imagine you wanted to simulate that in real time and have people able to participate and see that. The issue is a single physics engine wouldn't be able to simulate the physics of a million dominoes at the same time. But we probably have physics engines that could simulate maybe 1,000, 10,000 dominoes at the same time. 

So lets say we actually bring up 1,000 physics engines, all next to each other to simulate that entire set of a million dominoes. We're getting an issue where when you flick the domino on the far right and it starts cascading down, you get to the point where it needs to interact with the next physics engine. And this is a very, very difficult problem. And the way it works is, you can think of every entity, every domino, in the simulation to have almost a bubble around it. Imagine a bubble of maybe half a meter in real-life terms. 

And that represents the-- you can think about it, if I were to simulate the physics for that single domino, what other things could actually act on that at any point in time to affect it. Well, maybe the dominoes very, very nearby it. But the domino a million dominoes away might eventually affect it, but it's not going to instantaneously affect it. And this idea of bubbles of simulation and synchronizing the right data to the right physics engines at the right point in time is a lot of what the core hard technical problems of SpatialOS are all about. 

MARK: That is pretty cool. 

FRANCESC: So, we were talking a little bit before about the Hello World, and what are the basic things that you can build with SpatialOS. What about the other the other side of things? What is the biggest game that has been built with SpatialOS? 

ROB: Interesting. So I can talk about games. The other thing I want to talk about is some of the more geographically explosive things that are now non-games applications. Specifically, one example is where somebody came in for a week to jam with us and they had knowledge in internet network routing. 

So essentially, the border gateway protocol, which is how all the trunk nodes of the internet find out how to route to each other. And they simulated every single node, just like 45,000 nodes in the entire internet, and could have a real-time simulation of how those nodes reacted to failure. So you could be like, what happens if I pull out this [INAUDIBLE] cable? How will the internet react, and how will it move around its routing of internet traffic? 

And that kind of thing was really exciting, seeing a small group of people come in, they model some interactions between two entities of the well-known set of interactions. And then they could scale it up to this massive scale. And I think one of the fun things about BGP is every single node has to know about every single other node and how to route to it. 

And you get this really fun, every single node has every other node's routing information in it. So it grows with very, very fun memory complexity. So it was interesting seeing how much memory we had to consume to actually do that. 

MARK: So that sounds super-interesting. Do you have any numbers you could share, in terms of how big or small that was, or how many entities were being used inside that simulation? 

ROB: Yeah, so with our internet simulations, it's more about the entities themselves being very heavyweight and doing a lot of algorithmic complexity. There are other simulations in our city simulation space, which are in the order of tens of millions of entities, in terms of representing buildings, roads, traffic segments, vehicles, pedestrians, which are pretty exciting. And then in terms of our gaming applications, there are games like Worlds Adrift, which are using millions of entities interacting there. And they represent either from a tree, which you can chop and it will physically fall over and break into pieces, to creatures that fly around and they mate with each other and have a real ecology around them, to players building ships out of physical parts. 

So you can build a floating sky ship out of hundreds of different panels and engines and guns and different pieces. And every single one of those things is an entity, which is persistent. So if you crash into another ship and one of those panels falls over and lands on the ground, that lets you persist indefinitely because it's stored inside SpatialOS's in-memory representation. Which, again, is regularly snapshotted out. So even if someone goes away and comes back again later, he'll still be there because, rather than having the transient state inside of these game engines, there's actually a persistent layer on top. 

MARK: Awesome. All right, so we're slowly running out of time. Where can people go if people want to go to events or things like that? What are coming events or appearances you are going to be at? 

ROB: Yes, I think it's a big couple of weeks for us. I think the first stop, as I said, GDC. So we're going to be-- so if you to spatialos.com/gdc, this is going to be telling us all about the events we're running there. 

We're going to be running some panels. We're going to be doing a couple of onstage presentations. And we also have a booth nearby Google Cloud Platform, actually. You can come and find us. We're going be putting on some evening events, which you can find out more through that link. 

And after that, the week after is going to be GCP Next. And we're going to be hanging out there. I know Herman, our CEO's, doing a talk. I'm going to be on stage with Mark thinking about some more SpatialOS. That's going to be good fun. And, yeah, that's probably the next things on our radar for events. 

FRANCESC: So I have one more question that I need to ask before we finish the interview, which is, why is the company called Improbable? 

ROB: That's a really good story. Let's see where I can go with this. So actually, if you look at our legal incorporation status, the name is Improbable Worlds. 

And I remember, we hired a very, very edgy design agency. And they were hanging out with us, and I remember the last thing they said to us, drop the "worlds," and then walked out in a quite enigmatic fashion. 

So, yeah, I guess the other side is, it a really has come to reflect a lot of the values we have as a company. Really about trying to do things that have been done before and failed. And specifically these large-scale simulations. So it's something we like. It's [INAUDIBLE] definitely [INAUDIBLE]. 

MARK: Awesome. Well, Rob, thank you so much for joining us. We really appreciate you taking the time, and it's been a great conversation. 

ROB: Thanks very much. 

FRANCESC: Thank you. So thanks so much to Rob for such an interesting interview. I learned a lot. And I got to say that, after talking so much about all the kind of simulations you can do, I want to try it. 

MARK: Yeah, it's really, really, really cool tech. And loads of fun to work with, getting huge amounts of things interacting with each other produces really interesting behaviors. And weird stuff happens, and it's fun. 

FRANCESC: Yeah. I don't even want to build that game. I just want to build a little simulation, like The Game of Life 

MARK: Yeah, or like Ants or something. 

FRANCESC: I just want to build something that sounds super-cool. Maybe during my trips, who knows? But before we finish with the podcast, we have our Question of the Week. 

MARK: Yeah. So I'll ask the Question of the Week. So in Cloud Platform, we have these things called persistent disks. We normally mount those on virtual machines so that you can write files to them and put data in them and that sort of fun stuff. Sometimes, disks fill up, and that tends to be bad. 

FRANCESC: Yeah 

MARK: So one option is to delete stuff off disk, which you may or may not want to do. The other option is just make the disk bigger. 

FRANCESC: Yes. Or add more disks 

MARK: Add more disks. But let's go with let's go with making a disk bigger. I think that's just easier. Is there a way I can make a disk bigger, while not having to take down my machine or turn it off or do anything like that? 

FRANCESC: So, this is actually very interesting, because I think that the first time I had this question was during a GCP 100 training. And I thought the answer was, well, you can create a snapshot of the disk, then create a new disk that is bigger based on the snapshot so you have the same data, and then swap the disks. 

MARK: That doesn't sound like fun. 

FRANCESC: I mean, it is doable. But it turns out that I was wrong. Now I am wrong, in any case. Because there's a way easier way to do it, which is you just go to the console, and then you click on Edit on the disk, and you resize it. No matter if it's attached to an instance or not, you can actually do this, which is an amazing thing to do. 

And then the second part that you need to do is, you actually need to let the OS that you're running on that instance realize that the disk changed its size. So you may need to change the size of-- So for instance, if you're doing Linux, I think there's a command called Resize to FD-something? 

MARK: I think that's right. 

FRANCESC: And you can follow the documentation for that one, because Resize to FD-something might not be the actual accurate name. But basically, that's what you need to do. You first resize it from the console, and that is independent for whatever system you might be running. And then according to the system, you need to resize that partition. And that's it. 

So you basically are able to resize any disk with zero downtime. Except if that disk is a root disk. If it is a root disk, then you still need to go through all the processes that I was talking about, where you create first a snapshot of the disk, and then you create a new disk based on that snapshot. So you can still do it. But it's a little bit harder, which makes sense because root disks are root. [INAUDIBLE] special. 

MARK: And they have the operating system on them and other fun things. 

FRANCESC: Yeah. So it is a little bit more complicated to handle with. But, yeah, I think it is a simple thing. And it's so simple that sometimes you don't think about the fact that you can just click on Edit and change things while they're running. And everything just works. 

MARK: It's fine Everything's fine. 

FRANCESC: Wonderful 

MARK: All right. Well, Francesc, are you doing anything interesting? Are you jet-setting around some more? I know you like to pop around [INAUDIBLE] 

FRANCESC: I never do interesting things. Never do interesting things. So I'm actually, so today's Wednesday, which means that tomorrow, Thursday, I will be speaking at GoSF. 

MARK: Nice. 

FRANCESC: For the Go 1.8 release party. Lots of really cool things coming on with Go 1.8, so we're going to be talking about those. I'm specifically going to be talking about context, the Go context. But there will be other talks about the different topics that are new to the new release. 

Then the week after that, I will go to GopherCon India, which will be in Pune. Which, by the way, we received an email saying that it is actually pronounced pu-neh. So thank you so much. Now I know. 

MARK: I think we actually got more than one. 

FRANCESC: Yes. So thank you so much. Now I know it's pronounced pu-neh, so I'm very excited about that. And then I'll be a couple of days in Mumbai. I'm trying to organize an event in there. Then I'm coming back for Cloud Next And then I'm leaving again for GopherCon China in Shanghai, and I'm very excited about that one. Yes. 

MARK: That sounds good. 

FRANCESC: I don't travel. What about you? 

MARK: What about me? So I will be at Game Developers Conference I'll be everywhere. Just everywhere. I think I'm just going to be everywhere. 

We are hosting the Google Developer Day. I'll be doing a sponsor talk first thing Wednesday morning for Google Cloud. I'll be doing a lightning talk on the Developer Day as well. We are also sponsoring a variety of events around the conference, including Women in Games and Girls make Games and things like that. It's going to be loads and loads and loads of fun. 

After that, yes, I'll be at Next as well. We'll both be at Next doing our podcast thing and doing some talks, strangely enough one with Improbable myself. Once we're done with that, looks like I might be doing some stuff in Vancouver. I need to travel up there for some stuff, but we'll wait and see what's happening there. 

But after that I'm doing a little East Coast tour. I'll be doing the East Coast Game Conference. That will be the 18th of April. And then right after that, I'll be traveling up to the Vector Conference in Kentucky on the 21st. 

FRANCESC: Nice. Sounds like lots of fun. 

MARK: It's going to be lots of fun. 

FRANCESC: Cool. I guess it's time to finish. But before we finish, we have not done this in quite a while. So let's go through all our different ways of people contacting us. 

MARK: Sure. 

FRANCESC: So we have Twitter. 

MARK: @GCPPodcast 

FRANCESC: And Google plus. 

MARK: At +GCP Podcast. 

FRANCESC: And we have a webpage. 

MARK: gcppodcast.com. 

FRANCESC: With an email. 

MARK: @hellogcppodcast 

FRANCESC: @hellogcppodcast? 

MARK: hellogcppodcast. 

FRANCESC: hello@gcppodcast.com. 

MARK: That works, too. 

FRANCESC: Complicated. And then we are also on Reddit. 

MARK: /r/gcppodcast. 

FRANCESC: And finally, we are on Slack. 

MARK: The hash podcast channel on the Google Cloud Platform community Slack, which can be found on bit.ly/gcp-slack. 

FRANCESC: Wow, what a mouthful. 

MARK: There you go. 

FRANCESC: Great. And yeah, send us your questions, your messages telling us we're misspelling, mispronouncing. We probably misspell things, but you cannot see them. And also if you have any ideas for episodes, we are always looking forward to your comments. 

MARK: Absolutely. And if you want to come on the podcast, feel free to reach out. 

FRANCESC: Absolutely. So, anyway, thank you so much again for an "improbable" episode. 

MARK: Yes, and thank you very much everyone for listening. And see you all next week. 
{{< /transcript >}}