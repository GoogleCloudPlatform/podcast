+++
audioDuration = "00:34:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.228.mp3"
audioSize = 49458751
categories = ["CDN", "Edge Cloud Platform", "Microservices"]
date = "2020-07-22"
description = "Tyler McMullen of Fastly is with us today, telling our hosts Mark Mirchandani and Brian Dorsey all about the company, CDNs, and more."
draft = false
episodeNumber = 228
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Fastly with Tyler McMullen"
image="/post/episode-228-fastly-with-tyler-mcmullen/images/hero/hero-EP-228.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hvxbn0/episode_228_fastly_with_tyler_mcmullen/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Tyler McMullen](https://twitter.com/tbmcmullen) of Fastly is with us today, telling our hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) all about the company, CDNs, and more.

Fastly is an edge cloud platform, focusing on ways to improve the more customer-focused side of the cloud with things like latency reduction, efficient scaling, and more. Content Delivery Networks can be a part of this, due to their proximity to customers and better caching. Edge cloud takes pieces of normal cloud setups and moves them to the edge of the cloud, closer to the customer, to achieve better speed. Tyler explains what pieces make sense to move out to the edge and what he sees as the future of edge cloud platforms.

Later in the show, Tyler tells us how to analyze projects and make decisions on the use of edge cloud, CDNs, and microservices. He explains the technical process of using an edge cloud platform too, giving examples of situations that might benefit from a more edge cloud approach. WebAssembly, technology originally created for web browsers, actually plays a role in Fastly's edge platforms, Tyler explains, going further into the technical side of how the engineers at Fastly have created this system to run smoothly while also being easy to build on.

In the future, Tyler hopes to see WebAssembly support more languages so compiling and distributing can be even easier.

##### Tyler McMullen

[Tyler McMullen](https://twitter.com/tbmcmullen) is CTO at Fastly, a global edge cloud platform, where he is responsible for evolving the company’s system architecture and technology vision. He leads a team of experienced technology innovators focused on internet scale, and working on future-facing, ambitious projects and standards. As part of the founding team at Fastly, Tyler built the first versions of Fastly’s Instant Purging system, API, and Real-time Analytics. Prior to joining Fastly, Tyler worked on large scale web applications, text analysis, and performance. He can be found debating about edge computing, networking, and distributed systems all over the world.

##### Cool things of the week

* Week 1 recap of Google Cloud Next ‘20: OnAir [blog](https://cloud.google.com/blog/topics/google-cloud-next/what-happened-week1-of-google-cloud-next20-onair)
* Introducing Google Cloud Confidential Computing with Confidential VMs [blog](https://cloud.google.com/blog/products/identity-security/introducing-google-cloud-confidential-computing-with-confidential-vms)
* Next OnAir Sessions (Week 2) [site](https://cloud.withgoogle.com/next/sf/sessions#productivity-collaboration)
* Introducing your new home for work in G Suite [blog](https://cloud.google.com/blog/products/g-suite/introducing-your-new-home-for-work-in-gsuite)

##### Interview

* Fastly [site](https://www.fastly.com/)
* Reaching 100 Tbps of Capacity [blog](https://www.fastly.com/blog/fastly-reaches-100tbps-network-capacity)
* Fastly’s investment in WASM ecosystem [blog](https://www.fastly.com/blog/how-fastly-and-developer-community-invest-in-webassembly-ecosystem)
* Fastly’s Developer Hub [site](https://developer.fastly.com/)
* Fastly’s Developer Hub: Everything you need to build on Fastly is now in one place [blog](https://www.fastly.com/blog/developer-hub-everything-developers-need-build-on-fastly)
* Bytecode Alliance [site](https://bytecodealliance.org/)
* WebAssembly [site](https://webassembly.org)
* BigQuery [site](https://cloud.google.com/bigquery)
* Fastly Labs [site](https://www.fastlylabs.com)
* Altitude [site](https://vimeo.com/376898177)

##### Tip of the week

We're talking to Stephanie Wong about the [Network Intelligence Center](https://cloud.google.com/network-intelligence-center) and her video series, [GCP Networking End to End](https://www.youtube.com/watch?v=cNb7xKyya5c&list=PLIivdWyY5sqJ0oXcnZYqOnuNRsLF9H48u)

     
##### What's something cool you're working on?

Brian is learning [Terraform](https://www.terraform.io)!

Mark is working on more video content and his Next talk, CST103.

{{< transcript "[MUSIC PLAYING] MARK: Hi, everybody. And welcome to episode 228 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with my splendifferous colleague." >}} 

BRIAN: Hello, and I'm Brian. 

MARK: I followed up on my promise to actually look at the thesaurus and decide on a good adjective. 

BRIAN: That's a word that sounds amazing and awesome. But I have to admit, I don't know what it actually means. So I'm going have to go look it up afterwards. 

MARK: That's a good point. I feel if someone had to ask me to define it, you'd have to just use a bunch of other synonyms. And then you're like, well, why does the word exist if it's really just another word for good or awesome, great, fantastic? 

BRIAN: But isn't that all words. Like, how do you use a dictionary without knowing other words? 

[GONG STROKE] 

MARK: Oh! Today on Deep Thoughts, Brian is bringing heavy hitters with how do words work. 

BRIAN: We don't even know. With that in mind, though, let's bring you some words. 

[LAUGHS] 

MARK: That's a great point. Well, first things first. We have an amazing guest on today. Brian, can you tell us who it is? 

BRIAN: Yeah, we have Tyler McMullen, who is the CTO of Fastly. I think you're really going to enjoy the conversation. I think a lot of people know of Fastly as a CDN. And they've really been pushing to do more and more things at the edge. And so he's going to talk about the edge compute, and to some degree how that actually works. 

MARK: Yeah, it's a fantastic conversation, and super, super excited to get to that. After that, we're going to have a great Networking tip from our friend Stephanie Wong, talking about the Network Intelligence center. So make sure to stay tuned for that afterwards. But before we get into any of that, why don't we go with our Cool Things of the Week? 

[MUSIC PLAYING] 

BRIAN: This week, we've had a lot of announcements around Next. And we have a link to the blog post to give a recap there. I wanted to highlight one of the things that really surprised me. 

And it's unusual, because you get a feature, but all you have to do is enable a checkbox. And that's pretty rare in software. So I want to talk about it. 

It's called confidential VMs, and it's based on some features in the AMD Epyc processors. And what it gives you is, basically, the VM memory is encrypted while it's running, and it only gets decrypted when it's used. So that actually makes it more resistant to snooping attacks and cold boot attacks, and another technical layer of protection for your information that enables a lot more use cases to run on cloud. 

So give that a look. Got the details here. Check the box, and go. 

MARK: That's it. And it's confidential VMs, right? 

BRIAN: There we go. Thank you. Confidential VMs. What's your cool thing of the week? 

MARK: Absolutely. Well, it is week two of Google Cloud Next. And there has been, like you said, a ton of announcements all around different things. This week is all about productivity and collaboration. So it shouldn't be a surprise that a lot of the announcements are probably going to be G Suite related. 

And one of the cool ones I've seen-- and I have a link in the show notes below, that talks about the efforts to make the workplace environment, especially the virtual workplace environment, a little bit more seamless. So it goes into a lot more detail about how they're bringing a lot of features to Gmail that include things that you already use, like chat, video conferences, like docs, those sorts of things. Those are all being brought into Gmail so that you can have a little bit easier time navigating between them. And then they've already started to add some of these things to the web interface, and they're working on adding it to the mobile interface now. 

But it's all about making sure you can access a whole bunch of stuff from one place. And again, the blog goes into more details. It shows some really cool features. 

And I think it's pretty exciting to have a little bit more of a seamless way to transition between. On average, one conversation, we're looking at 10 different things. So it might change a lot to have all that in one window. 

BRIAN: That's cool. I actually haven't seen that yet. So I need to check it out as well. Maybe I'm biased from spending all day, every day, in Meet. 

But I definitely encourage people to check out Google Meet. For video conferencing, it just works really well. I'm super-happy with it. 

MARK: Yeah, it's really nice and easy. And again, that integration with everything else. I actually don't know if spending all day in my inbox is all that appealing now. 

But the least I can do much more from my inbox. That's the big difference. Love it. All right, well, with those cool things out of the way, why don't we go ahead and jump right into our conversation with Tyler? 

[MUSIC PLAYING] 

Tyler thank you so much for joining us. Super-excited to have you here. As we get things started, can you tell us a little bit more about yourself and what you do? 

TYLER: Sure. Hi. I'm Tyler I'm the CTO and co-founder of Fastly these days. I've done all sorts of jobs with Fastly. 

The job of CTO completely changes, basically, it seems like from week to week-- especially in the early stages of a startup. But we've been around for, like, nine years now. And so nowadays, I actually run a small applied research team that sits besides engineering at Fastly. 

The way that I like to describe it is, we have work on things that are highly likely to fail. But if they don't, it could be pretty cool. So we have a few of those projects that have turned out to be pretty interesting these days. 

MARK: I want to hear more about that. And as a startup grows, it just does go all over the place-- the responsibilities of every person, usually wearing multiple hats. It's a very complex process. But I think the first question, really, is what is Fastly? 

TYLER: That's fair. So Fastly is an edge cloud platform. And if that doesn't make sense, that's understandable. It's a relatively new thing that's come out in the market. 

We are a cloud of sorts. However, we are focused on the very edge of the network. So we're focused on types of logic and things that you can do at the edge of the network, as close to your customers as possible. So we focus a lot on latency reduction, on resiliency of services and things like that. 

And so in the early days, what this meant was, like, we're like a smarter CDN kind of thing. And these days, what it means is, well, it's more like an edge base serverless system. And we'll see where we go from there. 

BRIAN: I'd like to dig a little deeper on why do people want the things that you're making? What problems does it help them solve? 

TYLER: One of the biggest problems that people tend to face, especially as your site gets lighter, there's a couple of them. One is scale. Like, how do we handle the large amounts of traffic at a high scale website, or app or API or anything-- really, anything that goes over the internet at this point. And so that's the big part of what we do. 

So caching is a big part of that. But it's also just about spreading out the places that your customers are trying to connect to to make it as close to them as possible. Probably the key thing there, though, is actually latency reduction. And so that's been in our blood since the very beginning. Like, this is what CDNs were always for. It's about resiliency and latency reduction. 

And as we moved on to being an edge provider, it's really still about that same thing. But it's a totally different way of approaching the problem. But at the end of the day, really what we're trying to do is make it faster for your customers to access your information, and interact with your site and your app and everything else with as low downtime is humanly possible. 

MARK: Let's talk about that. And so for people who aren't familiar, a CDN stands for a content delivery network. And if I'm going to give the most simple explanation of a CDN that I can, they're typically re-hosting assets in more locations across the globe. 

And the biggest reasons they do that is one you already mentioned-- latency. So it's closer to your users. And two, because they can do more advanced caching and they have technology built around that to help speed things up. First of all, is that an OK definition for a CDN? 

TYLER: Yeah, it's a pretty reasonable definition. But my actual favorite way to describe this is actually a metaphor about, like, a library system. It's not a perfect metaphor, but the idea is basically this, where you have a central library typically in a city. 

It's the larger one. It has most of the books. And you have all the satellite ones. 

Well, if you want to get a particular book, usually, in one of these library systems, you can actually go to your local library. And if they have the book, great. You have the book now. If they don't have the book, they can actually get the book from the central library as well. It'll take a little bit longer. 

But once the book gets there, now it's there for you. And the next person in your neighborhood who comes along to get it, oh, it's already there. Great. And likewise, you have one book that's particularly popular, well, maybe you get more books and you start sending them out to all the different libraries. 

And so eventually, if you have a particularly popular book, it's actually in all of the libraries. It's a weird metaphor, but I enjoy it personally, just as a library kid. I'd spend so much time in the library when I was a kid learning how to program from the books I could get from my local library. So-- library fan. 

MARK: I love that. That's actually a really great metaphor. I love the explanation there. And I think it helps people capture what that looks like. 

But then there's this extra layer on top of it. We're talking about edge cloud here. So what does that look like, and of course, how does it work? 

TYLER: I don't have any clever metaphors for this one yet. So I'll just say what it is. 

[LAUGHS] 

So most people are at this point are pretty familiar with serverless type of things. So like in the Google Cloud world, those would be Google Cloud functions, for instance. And it's become a more and more popular way to deploy more and more complex applications over time. 

What our edge cloud platform is really about-- and this is our computer edge product in particular that's like on its way out at the moment. It's really about taking that same idea that you have a thing where you don't have to spin up an entire server. You don't have to worry about infrastructure. It's instead just put the code on the server and run the thing. And so, like, in a centralized or relatively centralized classic cloud type setup, you typically choose a location and you run the code in that location. 

With an edge cloud type setup, what we are more focused on is making it run everywhere. And so when you deploy something to our computer, that's like a function to our computed edge product. What that actually does is it spreads it all over the world, like, immediately. So then, when your customers show up to say like, hey, I want this webpage, and perhaps what your application is doing is generating that webpage at the edge. 

Well now, instead of doing it outside of DC or outside of San Jose, or wherever your data center was before, now it actually happens right next to them. If they're in Tokyo, it happens in Tokyo. If they're in London, it happens in London, and so on. 

But really what the cloud platform is about overall, it is actually taking a lot of the same concept that one would have used a cloud for and moving the pieces that make sense out to the edge. So like the serverless component is one of those. The CDN is one of those. And we'll see how many other places that we can take this in the future. 

BRIAN: I want to dive on that phrase you said, the pieces makes sense. And on the serverless part, there's going to be some things you're always going back to a database for. Like, what are the things that make the most sense to live on the edge. 

TYLER: I'm actually very passionate about this subject, because we have had so many conversations in the past, like, well, why would I use this or why would I use that? Or like, well, oh, is the edge going to try to replace the entire cloud? And the answer is no. It's actually a complementary thing. 

So the way that I like to think about it is it's really all about the data. Like, where the data is actually makes such a massive difference for this. And not just where the data is, but how you're interacting with it. 

So let's use an e-commerce kind of example. So if I am browsing an e-commerce site and I want to add something to my cart. That actually is something that can be done almost entirely locally to you typically. 

There's some interaction you have to do that could be an eventually consistent type of action regarding, like, inventory. And so you can do a lot of that locally just to you. You don't have to necessarily interact with everyone else to do that. 

However, when you actually want to check out that cart, well, now you have a transaction that is highly consistent. And so that needs to actually go back to a centralized location typically. That's the way I tend to look at it. Like, at the extreme, it's like stateful or stateless. 

And then over time, we're getting to a much more granular, much more like nuanced version of this, where it's really about the consistency level and where the data lives. And I think that that is actually going to be the really interesting thing over the next several years. Like, computed edge as it exists today is primarily a stateless thing. And so you would move primarily stateless things out there. But I think that where this is all headed is really for this much more nuanced understanding of what state actually means. 

BRIAN: Is it fair rephrasing to say like right today, the easy stuff is like if you know you can do a function with no side effects, you can move that to the edge-like state. But you want people to be thinking about actually decomposing their apps to which things can live closer to people. 

TYLER: That is absolutely true. 

MARK: So what does it look like to move stuff to the edge? I think Brian just mentioned that you have to think about the different parts of your application. And there's plenty of applications that don't have multiple parts. 

They just have one part. They're monolithic applications as it were. So if you don't have one of those, or if you do have one of those, and you need to figure out how to break it apart, what does that look like for separating code from your primary data center or your primary location for all your stuff? Maybe the cloud to also using the edge cloud. 

TYLER: Well I think one of the easiest ways to start with this is actually just to think about what do I need to do now that doesn't necessarily need to live inside of my monolithic application? One of my favorite examples of this actually is like a WAF-type setup-- like a web application firewall. So things that are maybe acting as filters to your application, those are great candidates for this. Maybe you need to add a new API endpoint, but it's actually composed of things that already exist in the API. 

Well, what you can do is stick this logic out at the edge that says, OK, now I have this new endpoint that I need to expose. But it's actually composed of these two things. So when a request comes in for this, I'll go get those things. 

I'll catch them locally. I'll decompose them into the parts I need, reform them into a response that goes out. So again, it's really about what things can I build on top of my existing application. That's probably the easiest way to go about it. 

I think over time, a lot of companies have moved to a much more distributed sort of architecture over the years. Like, microservices are obviously a thing. It's not even a thing we talk about anymore because everyone does that thing to a great extent anyway. 

And so if you have that type of architecture, this whole problem becomes a lot easier, because then you can look at the individual microservices and go like, oh. Well, it turns out that this one is actually just talking to these three other ones. So, like, great. I can just stick that out there at the edge and have it talk to those three just the same as it was before 

BRIAN: OK, I have to poke at you here a moment. one of the challenges with microservices is actually figuring out what's going on. 

TYLER: Yeah. 

BRIAN: If I've got to distributed system that's made up of microservices, and then I move a bunch of stuff to the edge, how do I troubleshoot that? 

TYLER: This has been a thing that I've been thinking about for a long time now. And I have some answers to it. But honestly, it's the same problem as we have had with the architecture overall for years now. So our approach to that problem has been to make it as easy as possible to integrate with your existing observability type things, and probably most importantly like real-time visibility. 

I think one of the problems with serverless overall at the moment even, setting aside the whole edge side, is like I run this thing out there. The logs show up somewhere maybe sometimes, and maybe it takes a couple minutes for them to get there. Or how do I actually connect this to my Splunk or my Datadogs or whatever I'm using for observability. 

And so what we've tried to do is say, OK, we have connectors for all the major ones. I can't number how many we have now. There's 30-some of them, where we can just feed data directly into there. What we're working on is the ability to see exactly what is happening either via your log messages, your stats, your stack traces for that matter, as well just immediately-- like, within a couple of seconds. 

And so to me, that's what it's really about. Being able to plug-in to the existing systems that you're already using for this, as well as making it as fast as possible, because you really want to be able to feel like when I deploy something, despite the fact that it's running in thousands of locations, it really needs to feel like it's running locally. Otherwise, it's just such an awkward way to try to debug something. 

MARK: I want to hear more about how that gets duplicated across the world. So what's the technology that enables that? I'm assuming it's not just a bunch of servers sitting out there in random places. But isn't it also kind of that? 

[LAUGHS] 

TYLER: Yeah, I mean, ultimately that's what it is add. It's a stack of distributed servers. We have all of our internal systems that are dealing with spreading the compute out. But I think the real key one here that makes it possible is actually WebAssembly. And that might seem like a weird left turn here, but our whole computed edge platform is based around WebAssembly. 

BRIAN: OK, I'm going to interrupt you there. What is WebAssembly? 

TYLER: WebAssembly is a relatively new technology that was made for browsers. So really, the history of it is it's really made to be able to run legacy applications inside a browser. If folks are familiar with the Chrome Native Client, it's a response to Native Client, where Native Client was based on LLVM and an amazing piece of technology, but such a difficult thing to maintain over time and non-standard. 

Like, the community came together after that were like, OK, if we take these ideas of [? mscript ?] and combine those with the ideas of Native Client and think about what would it look like if we tried to build something that is the best of both worlds here? And so WebAssembly was, again, a reaction to that. And what it actually is is just an intermediate language, if that means anything to people. 

So this is a concept from compilers, where you have your source language and you have your destination language, which is like the actual native machine code that runs on the server. Intermediate language is something that comes in the middle that's a compatibility layer in the middle there. So you could have multiple different source languages that go to this one intermediate language, which can then go to multiple different native languages, as well. WebAssembly is a good example of this made to run in a browser. But a realization, it was also the only and the best, really, solid piece of technology to build something like an edge platform with. 

What we set out to do at that point was to say, OK, cool. This is working really well for browsers. How would we make this run on the server? And there wasn't really a good story for that yet. 

And so over the last three years, our team has sat down and we're like, OK, well, I guess we have to write a compiler now. And that's not usually the right option. So I was pretty hesitant about this to start with. 

But yeah, that's what we did. We built Lucet it working with Mozilla, actually, to do that as well, based on the whole crane lift backend. And so what Lucet is it's ahead-of-time compiler for web assembly that produces very small, relatively well-tuned code. What's really cool about this is it means that we don't have to have virtual machines or containers running for all of these different applications at all of these different edge locations simultaneously. Instead, when that request comes along, as long as that code is nearby, we can spin it up in very, very little time. 

And so coming back to your original question about what is the technology that lets us spread it all around the world, that's the key point. We don't necessarily have to always have the things running all around the world. Instead, the novelty here is that we can actually spin them up as soon as they are needed right at the moment that the request comes in. 

BRIAN: When you talk scale and latency, you're essentially trying to get low latency for the scale of all of your customers' requests. So this is the key of how you balance that almost intractable problem of running code per request for every one of your customers. 

TYLER: Yeah, that's exactly it I mean, there's still all sorts of problems that come along with that. You still have scheduling problems and what's the right location to run this code, and so on. But at its core, this is the piece of technology that actually lets us solve that problem. 

BRIAN: Is this this where the rules you were talking about earlier, the filters, exist. Does it extend all the way to the serverless stuff you described? 

TYLER: Oh yeah. We have, obviously, a bunch of existing software that we built over the years. But slowly over time, we're moving it all to just run on this exact platform-- the same platform that we're providing to customers. 

MARK: My mind's blown, because I can't imagine approaching a team of engineers and being like, hey everybody. It's time to write a compiler. Yay! I get the feeling that you'll get a very different reaction. I'm shocked, but it sounds really cool. Like you said, it's not easy. 

TYLER: No. 

MARK: There had to be a lot of work that went into this. What does that experience look like? Because customers don't have to worry about all the details there. 

TYLER: Exactly. Yeah. 

MARK: They're able to just put in code and have it run on these places. What does that look like and how do they get feedback on how their stuff runs out? How do they troubleshoot things? What does that look like? 

TYLER: Our approach to this has been to try to integrate as deeply as we can into each of the language ecosystems. So we launched this product with just Rust support initially. And we're going to be adding more languages over time, effectively as we become mature in the web assembly ecosystem. I think it's worth noting that we're still in the relatively early stages of this thing. So as more languages get added, it'll get a lot better. 

But what we started to do is say, OK, we're just going to provide a CLI. And that CLI will integrate with the individual language's tools. And so when you go in, let's say, Fastly like computes, compile, then it will go and say, OK, well, this is a Rust project. 

So that means I need to call Cargo build and give it all these flags, and say like, OK build with all these things and make sure it's targeting this interface, and blah, blah, blah, blah. And then behind the scenes, what it's actually doing saying, OK, cool. I'm going to attack this thing all up into a package, zip it up, tear it up, and send it off to Fastly. 

And what we do internally is say, OK, cool. I have this package. I'm going to pull it apart. 

Inside is a WebAssembly module. We compile the WebAssembly module and distribute it. Debugging is an interesting portion of this. It's all sorts of stuff that I can't talk about yet that we're going to be doing to make this whole thing easier. 

The real way that we're doing this at the moment, I actually get really excited about, because it to me just points out how well I think the web assembly ecosystem is going to work in the long term. So effectively, what this whole system is doing is almost mimicking a program that's running on a server. Even though it's been compiled in, like, six different forms and is now running inside of a sandbox and so on, there's still the concept of standard out. 

However, at this point, this might get weird. But the concept of standard out is like a virtual thing. And so when I say print line in Rust, or print or console log, or whatever it is in whatever language, that's saying, like, OK, send this to standard out. 

However, what standard out means is entirely interpreted by our system that's running the code at that point. And so what I can do is just say, OK, here is this text that I just got. Let me just pipe that right back to the CLI that just deployed this thing. So you can end up having a very quick reaction. 

And likewise, like stack traces it's great. Just dump the stack traces out standard error, which you can hook up to your CLI, or you could hook it up to Splunk or you could hook it up to whatever you want. And so that obviously leads to some other exciting things, where you go like, all right. 

Well, what does it mean to say open a file inside of one of these processes? Well, it could mean a literal file, or it might mean something entirely different. And so to me, like, maybe I'm late to the game in really how amazing virtualization is. But the fact we can now go, OK, all of these concepts that we have had for decades, we can now repurpose to do entirely different things without breaking people's mental models of how computers work. 

BRIAN: So you're providing these same abstractions, but in the cloud version of [INAUDIBLE] in your case specifically, the edge cloud version of them. 

TYLER: Exactly. 

BRIAN: Could you give some concrete examples of what your customers and users are doing with this? Like, how are they making this work for them? 

TYLER: One of my favorite internal use cases for this-- and it was actually one of the ways we started to test the scale of this entire system, is-- are you familiar with a network error logging. It's a relatively recent browser addition. So network error logging I actually think is really neat. 

One of the great problems with distributed systems is that you don't necessarily know what you don't know. And if I have a browser, and I'm trying to connect to some particular website and some asset fails, the server has no way of knowing that that asset-- or may have no way of knowing that that asset failed, because maybe the request failed before it even got to the server. For our own internal use, we want to know how often does that happen? 

When someone is trying to connect to a Fastly site, and it-- just due to some network condition, maybe it's in their own house. Maybe it's in their neighborhood. How often that happen that they can't connect? One of the things that browsers added recently was the ability to have the browser remember when that has happened, and later send it to a specific endpoint for that site that tells you, oh, hey. 

By the way, this thing happened a while ago. So Fastly has recently started, for an internal use, using this thing. So what we did is we actually built our system that ingests those on compute attach. So what it actually ends up doing is say, OK, cool. I'm getting all of these network error stack traces. And what I'm going to do is take them apart, find the ones that are duplicated, get rid of those. I'm doing all sorts of little filtering logic to find the ones that are interesting. 

And then ultimately, what I actually end up doing is dumping it into BigQuery in Google Cloud. And so then later, we can go through and go, oh, hey. This particular region of the world, for about 15 minutes in the middle of the night, had a weird blip. Let's go investigate that and see what happened. 

I like that as an example because it shows both the usefulness of an edge cloud platform-- a, we're there for resiliency. And it also shows the way that an edge cloud and a centralized cloud actually work together really well. It doesn't make any sense for me to try to build a BigQuery at the edge. BigQuery exists, and the reason it's good is because it's in one location. And so I can do the part that makes sense to run at the edge, and do the part that makes sense to do it centralized, and make them work together. 

BRIAN: In this case, you've even blended all the way down to the client, even when it's not connected. 

TYLER: Yeah. 

BRIAN: More and more, this is all one big system there's compute happening in the webpage on the client. There's compute happening in edge cloud. There's compute happening in a more centralized cloud. And it's all like you're trying to get one experience done for people. 

TYLER: Yeah, yeah, because it's actually one of the reasons why I find the term "edge" so difficult. There really is no edge of the internet. It doesn't really make sense as a term. We've roughly decided that it's between this point and this point metaphorically. But ultimately, it's all one big system and it's all working together right to the endpoint anyway. 

MARK: All right, I guess maybe just the edge of the non-client side. Even that distinction is probably getting uglier over time as the blending is happening. 

TYLER: Yeah. 

MARK: But that's a great example, doing some quick stuff at the edge, and then bringing it back down to your central data center or cloud, in this case, for further analysis. Let's talk about people actually getting started with Fastly. So if someone wants to build a system like that, what steps they need to go through? 

TYLER: With Fastly, you can sign up for a free account. Test $50 worth of test traffic, which is a pretty decent amount of traffic, actually, with no commitment required. I think, really, the thing that's probably most worth checking out is our Developer Hub that we just launched recently. There's a whole bunch of great solution patterns, code recipes. We have a bunch of Rust code up there at the moment to help you get started on how you would use a computed edge [INAUDIBLE] out of the bat. 

If you're using the more classic Fastly environment, we have our own version of Fiddle. Most people are familiar with JS Fiddle. We have a similar thing like that that actually lets you test out what using a system like this would feel like. 

It's a weird thing that I think is actually novel that Fastly does. I like it. So Fastly Fiddle and our Developer Hub-- check them out. 

BRIAN: Sweet. So we'll add links to that in the show notes. Before we wrap up, are there any more things you'd really like people to take away from this conversation or thinking about the space, or things you can do with Fastly? Anything goes. 

TYLER: I guess coming back to a lot of what I was talking about with the WebAssembly ecosystem before, we are still very much in the early days of this. And so I think one of the things I would love for people to take away is to go to the languages that you care about, that you use every day, and talk in to community and see what it would take to get WebAssembly support. Once you get WebAssembly support for the languages that you care about, not only can you run on the server, you can also run on the browser. 

And now I'm also saying we can run it on the edge as well. Imagine being able to build one application that can stretch across the entire thing. I think that's a pretty cool future. So that is my pitch to people. 

MARK: No, but it sounds like a great opportunity for people to certainly be to reach out and understand what was it going to take. Because it sounds like web assembly-- pretty good, as you've described earlier. And it has a lot of uses. But when it has that ability to very quickly compile down, and then be distributed everywhere, that's just a good situation for every language to be in. 

TYLER: I guess I should also mention, regarding events and so on, we have our flagship customer conference coming up in Q4, which has gone fully virtual. So yeah, check that out-- Fastly Altitude. 

MARK: Awesome. We'll definitely put a link to that in the show notes as well. Well, Tyler, thank you so much for coming on. Super-awesome chat. I learned a lot. 

And I have many, many, many things that I didn't quite understand. So I've got a lot of research to follow up after this episode. But thank you for coming on and explaining all this to us. 

TYLER: Thanks so much for having me. I actually had a really great time. 

MARK: Once again, thank you so much, Tyler, for coming in. Such a great conversation. And I think it really helps to understand a little bit more about what edge cloud actually is, and some of the good practical ways to use it. 

BRIAN: It's fantastic. I just really, really enjoyed the conversation. So thank you, thank you, thank you. And to extend the edge metaphor a bit let's talk about more on the network with Stephanie. 

MARK: Absolutely. So Stephanie comes in and gives us a great little tip on Network Intelligence Center. Well, she probably says it better than I do. So why don't we go ahead and just turn it over to her? 

[MUSIC PLAYING] 

STEPHANIE: Thanks for having me today, Mark. So some of you probably have network backgrounds and have run into some kind of outage. Any time there's a network problem, whether it's on-prem or connectivity with hybrid, the network is the first thing that seems guilty. 

And here's a quick stat. 75% of network outages happen because of some kind of configuration error. And in many cases, it's a well-intended behavior. We're not talking about these outages happening because somebody is attacking the network. It's a network administrator or security admin doing the right things intended for the network, and then ending up impacting the configuration and the network. And then an outage happens. 

So there seems to be this lack of comprehensive network monitoring visibility and set of diagnostic tools. And three problems exist. It's hard to diagnose across environments. You end up setting VPNs from different vendors and resolving connectivity issues between on-prem and the cloud, which takes a really long time. 

Number two, there's a lack of real-time performance. So if you're running in different regions, it's hard to find out whether the performance issues in a zone are due to an outage that occurred in Google's infrastructure, or whether it's because of the application or your configuration. And number three, it's hard to know what happens if you make a change. How do you answer questions like what's my current packet loss, what's my current latency, and what's my current bandwidth? 

So recently, Google Cloud came out with the Network Intelligence Center. That is Google Cloud's comprehensive monitoring visibility and optimization tool. It's built on Google's AIML infrastructure capability. It's meant to make your migration from on-prem to the cloud easier, and gives you visibility across multiple clouds and hybrid deployments, giving you insights so that you can plan your network better. 

There are several modules that come with it. Connectivity Tests lets you evaluate connectivity to and from Google Cloud resources in your VPC network by performing a static analysis of your resource configurations. That way, you can check connectivity between source and destination endpoints in your virtual private cloud from your VPC network to and from the internet, and from your VPC to on-premise. And it works by simulating the expected forwarding path of a test packet through your VPC network or through cloud VPN tunnels, so that you can find out inconsistent configurations that are unintended, obsolete configurations due to changes or migrations, or configuration errors for a variety of network services and functions. 

Network Topology is a module in Network Intelligence Center that helps you visualize your network so that you can monitor your network health very easily. So you can actually see a topological view of your network. And that view makes it easier to understand networking relationships between various workloads on Google Cloud, and see their current state, like the traffic paths and throughput between VM instances. And that works by collecting real-time telemetry and configuration data from Google's infrastructure to visualize your resources, so you can get a quick view without any additional config or agents. 

And this one's my favorite. Firewall Insights is a module that helps you optimize firewall role configuration, tighten up network security boundaries, and detect abnormal traffic patterns. Because let's face it, once you get to tens of thousands of firewall rules, figuring out what's actually being blocked or allowed gets really hard to manage and confusing. You might have overly-broad rules, insufficient rules, obsolete rules, or even overlapping rules that are in conflict with one another. So Firewall Insights helps you easily manage firewall rules and reduce configuration errors, and keep your deployments safe in an easy-to-read format. 

And then lastly, Performance Dashboard gives you visibility into the performance of your VPC network. It gives you packet loss and latency metrics between the zones where you have VMs. You get a dashboard with summary charts and heat map views. So if a performance issue happens, your network admin can quickly determine if the network is at fault, or if the issue is at the application level. 

And that's it-- Network Intelligence Center in a nutshell. In my opinion, it's such an incredibly powerful tool that makes network monitoring much easier, and not want to make you bang your head against the wall. So go check it out. It's just in the Google Cloud Console in the left-hand panel. And you'll see Network Intelligence Center. 

MARK: Thank you, Stephanie. And of course, Stephanie has done a lot of different content on networking. So we'll include a link in the show notes to her networking end-to-end series as well, which goes over the whole gamut of Google Cloud networking. Super-fascinating series. 

BRIAN: I definitely need to watch that. I need a recap, and I'm sure I will learn a bunch there. 

MARK: Always good to have. Well, before we wrap things up, Brian, what have you been working on? 

BRIAN: So I'm a little late to this perhaps, but I'm starting to learn Terraform from HashiCorp. I think many of our listeners are quite familiar with it. And for folks that aren't, it lets you write declarative configuration to set up cloud environments, and install things and configure them, and do the whole bit. So I've been enjoying the heck out of that, and plan on doing more. 

MARK: Actually, you know what? I think it's going to come out next week after this podcast airs. I don't remember exactly. 

But there's a another series that Stephanie is working on called Season of Scale that talks about immutable architecture. And I think that talking about some of the interesting parts of Terraform, that whole idea, infrastructure as code, is about building immutable infrastructure. So if people are interested in that, that video might be a cool resource as well. 

BRIAN: I look forward to it. How about you? 

MARK: Well, I've got a lot of video content I'm still working on. You see a ton of these great series. The Google Cloud Platform channel actually just hit 500,000 subscribers. 

It is growing. It's a lot. It's pretty cool. And there's been a ton of great videos that have been coming out. 

So hopefully people are finding them useful. We've obviously got a lot of people who are working on all different kinds of content. So it's always exciting there. 

And then I've got a Next talk that'll come up. I think it's in week seven. So we'll probably revisit that a few weeks from now. But there's been a lot of work going into that. 

BRIAN: Cool. I'm looking forward to that. 

MARK: All right. Well, to all of our listeners, thank you so much for listening. Always a pleasure to work with you, Brian. And we'll see you all next week. 

BRIAN: See you next week 

[MUSIC PLAYING] 

MARK: Well, as we've proven, most of the noises that come out of my mouth are actually being said quicker than I can think of them. It's a talent. It's not a good one, but it's a talent. 

BRIAN: I can't decide if we're in the podcast or in the intermission between the intro and the Cool Thing of the Week. 

MARK: We don't need to decide. The editors need to decide. 

[LAUGHS] 

BRIAN: So sorry.