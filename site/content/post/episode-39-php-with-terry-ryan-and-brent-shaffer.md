+++
audioDuration = "00:29:43"
audioFile = "Google.Cloud.Platform.Podcast.Episode.39.mp3"
audioSize = 42825910
categories = ["PHP", "App Engine", "Compute Engine", "Kubernetes", "gRPC"]
date = "2016-08-17T01:07:49Z"
description = "This week, Terry Ryan and Brent Shaffer join Francesc and guest host Chris Broadfoot to talk all about PHP on Google Cloud Platform"
draft = false
episodeNumber = 39
hosts = ["Francesc Campoy Flores", "Chris Broadfoot"]
title = "PHP with Terry Ryan and Brent Shaffer"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/N1CGijzbJst"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4y6iv3/episode_39_php_with_terry_ryan_and_brent_shaffer/"
+++

This week, [Terry Ryan](https://twitter.com/tpryan) and [Brent Shaffer](https://twitter.com/bshaffer)
join [Francesc](https://twitter.com/francesc) and guest host [Chris Broadfoot](https://twitter.com/broady)
 to talk all about PHP on Google Cloud Platform

<!--more-->

##### About Terry

[Terry Ryan](https://twitter.com/tpryan) is a Developer Advocate for the Google Cloud Platform team. 
He has 15 years of experience working with the web - both front end and back. 
He is passionate about web standards and wants to bring web developers to the Google Cloud Platform. 
Before Google, he worked for Adobe and the Wharton School of Business. 
                                         
He also wrote Driving Technical Change for Pragmatic Bookshelf, a book that arms technology professionals with 
the tools to convince reluctant co-workers to adopt new tools and technology.
  
##### About Brent
  
[Brent Shaffer](https://twitter.com/bshaffer)  is a Developer Programs Engineer at Google who is involved primarily in the 
Open Source world of PHP and Ruby. His most notable Open Source contribution is the [OAuth2 server for PHP](http://github.com/bshaffer/oauth2-server-php), 
and his favorite OpenSource project is the Symfony framework. Outside of work, he loves mountaineering and playing folk music [in a band](http://morehazards.com/).  

##### Cool thing of the week

- Preemptible VMs now up to 33% cheaper [blog](https://cloudplatform.googleblog.com/2016/08/Preemptible-VMs-now-up-to-33-percent-cheaper.html)

##### Interview

- PHP on Google Cloud Platform [docs](https://cloud.google.com/php/)
- PHP App Engine Getting Started [docs](https://cloud.google.com/appengine/docs/php/getting-started/creating-guestbook)
- Run PHP on Compute Engine [docs](https://cloud.google.com/php/tutorials/bookshelf-on-compute-engine)
- Create a Guestbook with Redis and PHP on Container Engine [docs](https://cloud.google.com/container-engine/docs/tutorials/guestbook)
- Quick Start WordPress for Google App Engine [github](http://googlecloudplatform.github.io/appengine-php-wordpress-starter-project/) 
- How to Run Symfony Hello World on App Engine [docs](https://cloud.google.com/appengine/docs/php/symfony-hello-world) [github](https://github.com/GoogleCloudPlatform/appengine-symfony-starter-project)
- Docker images for running PHP applications on the App Engine Flexible Runtime [github](https://github.com/googlecloudplatform/php-docker)
- Cloud Launcher LAMP Stack [launcher](https://console.cloud.google.com/launcher/details/bitnami-launchpad/lampstack)

##### Question of the week

How do I load balance WebSocket connection with a Google Cloud Load Balancer? 

- Setting Up HTTP(S) Load Balancing [docs](https://cloud.google.com/compute/docs/load-balancing/http/)
- Setting Up Network Load Balancing [docs](https://cloud.google.com/compute/docs/load-balancing/network/)
- Setting Up SSL proxy for Google Cloud Load Balancing [docs](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/)
- When should I use HTTPS load balancing instead of SSL proxy load balancing? [faq](https://cloud.google.com/compute/docs/load-balancing/tcp-ssl/#when_should_i_use_https_load_balancing_instead_of_ssl_proxy_load_balancing)

{{< transcript "FRANCESC: Hi, and welcome to episode number 39 of the weekly Google Cloud platform podcast. I am Francesc Campoy, and I'm here with my colleague, not Mark Mandel. Who are you?" >}}
CHRIS: Hi, I'm Chris. You might remember me from such shows as episode 33 I think? 

FRANCESC: The one about [INAUDIBLE]. I don't know which one it was. Uh , let me see, Chris-- 

CHRIS: Anyway, I'm the token Australian on the show. 

FRANCESC: Yeah. Whenever mark isn't here, we replace him with another Australian. So we had-- episode 25. 

CHRIS: Oh, 25. 

FRANCESC: Episode 25 with Andrew Gerrand and Chris Broadfoot. Way too many Australians that time. This time, there's only one. So yeah. Mark is still traveling somewhere in Australia enjoying the holidays. So instead, we have Chris. And we're going to be talking today about PHP with Chris, but also with two other coworkers, Terry Ryan and Brent Shaffer. 

And then after that, once we're done discussing all the possible things you can do with PHP on Google Cloud Platform, we'll have a question of the week. And the question of the week this week is about networking. So the question is, OK, so I want to use web sockets on a load balancer, and I'm using an HTPS load balancer. How do I do that? And so we'll have an answer for that at the end of the episode. But before that, we're going to have the cool thing of the week. And the cool thing of the week is about preemptible machines, preemptible VMs. Why don't you tell us a little bit about that? 

CHRIS: All right. So this week, we announced that we're dropping prices for preemptible VMs by up to 33%. 

FRANCESC: Nice. 

CHRIS: Yeah, so this is really great. I haven't really used preemptible VMs very much, but after reading this, I'm kind of excited about it again. 

FRANCESC: Yeah. Nah, they're very good. Especially-- so basically a preemptible machine, a preemptible VM, is a VM that can be preempted, obviously, and has the limit that it cannot run more than 24 hours. So regardless of what happens after 24 hours, it will be shut down. But it could be shut down faster than that. But you have the power to react to that. There's actually an API call that is done before it's shut down. So you can shut down gracefully if you need to release some resources or whatever. You can totally do that. 

CHRIS: It's really great for anything like batch work or some processing or something like that. Maybe you're processing logs every six hours or something like that. 

FRANCESC: Yeah. So if you're running anything not produce style, like Spark, Hadoop, or whatever, or if you're doing things like batch work, like we know we have ZYNC, for instance. They use it to render movies. Rendering a movie takes a lot of computation time. But it is not something urgent, right? So it makes it much, much more affordable to do it with preemptible machines, especially now. 

CHRIS: And even though these prices have dropped 33%, they were already much, much cheaper than the regular VMs. So it really pays off to write these kind of jobs in a way that are robust. So if the machine goes down, your code doesn't really have to worry about that very much. 

FRANCESC: I mean, you should be writing your code like that anyway. 

CHRIS: Yeah, definitely. I mean, things just happen, right? Maybe network links go down, or data center catches on fire, or something like that. 

FRANCESC: Things happen. 

CHRIS: Machines just go away sometimes. 

FRANCESC: So yeah. But yeah, if your application is already designed that way, check it out. We'll have a link to the [INAUDIBLE] announcing the new prices on the [INAUDIBLE] as usual. Cool. So I think that it's time to go talk with our friends Terry and Brent. 

CHRIS: Great. Let's talk PHP. So we're very excited to have here today our two coworkers, Terry Ryan and Brent Shaffer. 

FRANCESC: Hey, How are you doing? 

BRENT: It's going great. 

TERRY: Yeah. 

BRENT: How are you guys? 

FRANCESC: Very happy to have you. So yeah, very happy to have you because you're the only two people that I know that like PHP. [CHUCKLE] 

BRENT: Do you mean at Google, or-- 

TERRY: You're just not asking the right people. 

FRANCESC: Yeah, at Google in general. 

CHRIS: I know lots of people that like PHP. 

BRENT: Yeah. We're not very well represented at Google. 

FRANCESC: Yeah, there's not that many. So I think it is important to have you represented on the podcast. So before we start talking about PHP and how awesome it is or not, why don't you tell us a little bit about who you are, what do you do at Google. Terry? 

TERRY: Sure. So like Francesc, I'm on the DA team. I go out and talk to developers. I specifically spend a lot of time with PHP community, going to PHP events, and trying to get out the message that we at Google have PHP solutions on Google Cloud Platform. 

FRANCESC: Cool. Could you tell us a little bit more about your experience with PHP? I think you used to do a lot of PHP before joining Google too? 

TERRY: Yeah. So before I worked for Google, I worked for Adobe. And all of the web work I did at Adboe was all PHP. And then before that, I spent some time at the Wharton School at the University of Pennsylvania, and a lot of our public stuff was PHP, in addition to other languages. 

FRANCESC: Cool. What about you, Brent? 

BRENT: Yeah, hi. So I'm a DPE, like Chris. And that means that I'm an engineer, but I'm more on the side of our end users. So I spent a lot of time on GitHub, and I do a lot of work integrating with our platform and trying to make that process easier for the developers that are using our products. So specifically, I've been working on a lot of the PHP libraries that we have on GitHub. And historically, I have a PHP background, which is one of the reasons why I was picked for this role. 

And I actually do like PHP. Whenever I started developing PHP, it was the first dynamic language that I had used. And previously, I had been programming in Java and C#. So I loved it. And I was also fortunate enough to learn from some developers that actually had good coding practices and standards. And so I sort of learning on the Symfony Framework, which those guys are really, really solid developers. And so I was luckily able to fall into the part of the PHP community that has really, really solid developers and programming practices. 

FRANCESC: Cool. So everything I know about PHP and Google Cloud Platform is basically what you can find on cloud.google.com/php. Why don't you tell us a little bit about-- so yeah, if I was a PHP developer, and I get to Google Cloud Platform, what do I have at my disposal? 

TERRY: Well, we have the wide range of all of Google Cloud platform, but specifically focused on computing resources, it would be App Engine, Compute Engine, and Container Engine. For App Engine, PHP is one of the standard languages that runs on App Engine standard, which means that you can take PHP code that you use in other places, plop it down, and it will run right within the context of App Engine relatively easily. 

Of all the languages that I've ported code over from non-App Engine to App Engine, I feel like the PHP implementation's the lightest in terms of what you have to change. Like you have to change like a couple places where you pointed to the file system. Because on App Engine, you can't. But you get rid of those calls, and for the most part, a lot of your PHP code is just going to work. It's really kind of fantastic. So we've got App Engine standard, and we've also got App Engine Flexible Runtime. PHP is supported on both of those, in addition to Compute Engine and Container Engine. 

FRANCESC: Cool. So for PHP standard environment in App Engine, can you use any kind of framework? Like you were talking about Symfony. Is that something that developers can just use directly? 

BRENT: It's a good question. So we do support some of the larger frameworks out there. Like for instance, WordPress runs really well on App Engine standard because we've put a lot of effort into making that an easy process to get up and running. We also have some documentation for getting Symfony up and running. So there are a lot of restrictions in App Engine classic because it's a sandbox environment. 

So anybody that's using another framework out there, there's quite a few with PHP. It's not like the Ruby community, where they've all kind of agreed on one or two frameworks. There's just a ton of PHP frameworks. So yeah, we don't have tutorials out there for every single one. But I think it is worth trying to deploy in App Engine standard. 

We have a lot of good documentation on what is and isn't supported for the PHP standard or App Engine standard PHP runtime. So for instance, if you know you need a certain extension, you should check the documentation. And if it's not available in App Engine standard, then you want to run that framework in App Engine flexible environment. 

CHRIS: Can you give some examples of things that might not work? 

TERRY: Well, for the longest time, ImageMagick wasn't supported. But we now support that. So that's gone away as a problem. We did, in the last big rev of PHP on App Engine, fix a lot of the most requested things that were missing. So I don't know off the top of my head something that would be-- it would be something that, a not widely used tool. 

CHRIS: So the majority of applications will run just fine. 

BRENT: Well, yeah. I mean, and there's a lot of file systems or a lot of frameworks that require the file system by default out of the box. So I guess it's more like-- it's not a question of whether it will run on App Engine. It's a question of how much work would be required to get it to the point where it would run on App Engine. And and that varies per framework. 

So for instance, the WordPress and the Symfony tutorials we have, we've gone ahead, and we've made sure we take care of that kind of stuff for you. But for Laravel, for CakePHP, we're still working on getting those solutions out there so you don't have to do it yourselves. And for somebody that's new to the platform that deploys one of these frameworks, that might be a frustrating process at first, trying to tweak the knobs of the framework to get it to run. 

TERRY: I was going to say, the big thing that I've run into is the-- as you point out, that they need the file system. And I find, they need the file system to write a configuration. However, once that configuration file is written, it's not going to-- it doesn't actively edit that configuration every time the app runs. It's like a one time thing. And so if you can get them set correctly in development and push to production, you typically are OK. That's been my experience with the couple of frameworks that I've experimented with, and not some of the bigger ones, like Lumen and like those types of frameworks. 

BRENT: Yeah. So I've found that the frameworks that generate configuration for the production environment, it's very difficult to get them to generate correctly in a dev environment. And so what I've typically done is use Google Cloud Storage as a file system. And because you have a stream wrapper, so you can-- instead of saying, these files can be written to cache/templates, you just say, these files can be written to gs://bucketname/cache. And then it all will actually function as you would expect it to function. 

CHRIS: And so I guess that would be a shared cache as well across someone's-- so what's the best way for someone to get started and to use cloud storage for that? 

BRENT: Well, they could look at the Symfony starter project. We have the stream wrappers being used as a shared cache in that project. The WordPress-- there's a GitHub repository that we have all of these framework samples in. There's a WordPress one that does the same thing. So yeah, there's a couple examples of us doing that. 

FRANCESC: Cool. So All of these restrictions that we're talking about, they are related to App Engine standard environment? 

BRENT: Yes. 

FRANCESC: Do we have any problem running your PHP on flexible environment? 

BRENT: Yeah. So we've been working really hard on the App Engine Flexible Runtime for PHP. And that's something that builds in Docker. And so it's really portable, and it's really great. You can run it, and Kubernetes cluster. And we have some pretty cool docs on how to do that, also running micro services and multiple services that are communicating with each other in a Kubernetes cluster, and also in App Engine Flexible. 

Because since App Engine Flexible runs Docker container images, they're all compatible, which is nice. That runtime is-- it's on GitHub, and it's in the repository Google Cloud Platform slash PHP dash Docker. But it is almost in alpha. So we have a lot of docs. We have a lot of stuff. And we're putting a lot of time into making it good. But I think it's important to note it's still in alpha. Or it's not quite in alpha. 

TERRY: It's almost alpha. 

BRENT: Yeah. Maybe by the time this goes live, it will be in alpha. 

FRANCESC: Cool. Yeah, this is coming out next week. So I don't know how fast you are, but that is the challenge now. Cool. So you mentioned Kubernetes. That is actually something that our audience loves. We keep on talking about Kubernetes and Google Container Engine basically every episode, more or less. 

How is the experience? Like, I know a lot of people that come to PHP because of the LAMP stack, like that P in the lamp is PHP, or Python apparently, according to what I just read, surprising. But so if I come from LAMP stack, what is the best place to run it? Could it be standard App Engine, it could be flexible App Engine, it could be Container Engine, Compute Engine? 

TERRY: I think the engine's going to depend. So if you're coming from a-- you're running a LAMP stack box, Yeah the first thing you got to say is like, that's really bad. Don't do that anymore. But if for whatever reason, your friends set up-- not you. Your friends set it up, and now you're responsible for it. So we have in Compute Engine LAMP stack images and cloud logic. 

So you want to get started on LAMP, boom. You just run Cloud Launcher, and you're there. What is the best way to do it? It's going to depend. If you are moving towards a containerized workload, then I would definitely tell you to look at Kubernetes and Container Engine and splitting it up that way, with the caveat that the M is going to be the problematic part of that. That Kubernetes and containers and persistent database doesn't always-- it's not always a good combo, right? And then you're trading in one disaster for another. 

So I would say, look at getting-- hey, you have a lot of options. You can go App Engine, either standard or flexible, running Cloud SQL, and that solves a lot of the problems for you. You can go with Kubernetes and Cloud SQL, or you can run your full MySQL on Kubernetes as a pet. I would not recommend that. I would say go with Cloud SQL for the M part. 

And then it's going to depend. Are you moving to containers? Then Container Engine would probably be the best place for you to look. Are you anticipating incredible amounts of scale, or incredibly variable amounts of scale, where App Engine really shines? Well then, obviously I'd go App Engine. 

Are you in that scenario, and the full flow diagram here? If you're in that scenario, and you need to run bits that won't run on App Engine standard for whatever reason, then flexible is probably what you want to do, with the caveat that it is currently pre-alpha. [LAUGHTER] We don't even have a name for it. So I would go through the whole explanation. And that's how I talk to a customer about it if they were interested. 

BRENT: Yeah, I think if you have an existing app that's pretty sizable, using a GC instance, just a VM and possibly using the LAMP deployment is going to be the easiest way to get your app up and running. But if you're coming at it with a fresh application, I would definitely encourage containerizing first with flexible. Because it's such an easy move from flex to Kubernetes. And so if you think you may require scale eventually, it's a really nice way to go. Not to mention just the portability you get from containers and images is really nice as a software engineer. 

TERRY: And one of the things that's come up when I've talked about Kubernetes is that idea of, so you have the LAMP stack, and the code is all looking at itself, looking at everything as level host. But one of the great things about Kubernetes is that you can run multiple containers in the same pod as offering a local host. And that is-- there's a nice bridging stepping stone towards getting to a better place with your app is moving into Kubernetes and taking advantage of the fact that you can containerize it, but also leave the code non-containerized. Not ideal, but most of these are bridging solutions anyway. 

CHRIS: What's the best way for someone to use something like NGINX as a proxy? 

BRENT: Oh, yeah, no. I was actually trying to work this in the conversation. So we don't have a LAMP stack. But we do have more or less a LAMP stack, right? It's the-- 

TERRY: Well, that's on flex. 

BRENT: On flex, yeah. So flex uses NGINX. 

CHRIS: Francesc and I are trying to decode [INAUDIBLE]. 

FRANCESC: Are you talking about lambs? 

TERRY: NGINX instead of Apache. 

BRENT: Yeah, it's the E. 

FRANCESC: How do you pronounce that? 

BRENT: I realize the nuances in the pronunciation might have been lost. LOMP and LEEMP. No, I don't know. Yeah, so we use NGINX. And then the M, Cloud SQL works exactly like a MySQL instance. So it works-- so it integrates perfectly. So-- 

TERRY: And just to disambiguize, that's on the App Engine flexible runtime. When I said earlier about Cloud Launcher, we do have full on LAMP stack boxes in Cloud Launcher, but no. Just getting all our acronyms in a row. 

FRANCESC: I'm actually curious about when you have the Cloud Launcher, do we also have things that depend directly on Cloud SQL, or do they all start one instance, which is like the SQL instance? 

TERRY: As far as I know, none of them point to Cloud SQL as their SQL solution. Doesn't mean you can't, it just means that out of the box, they don't. 

FRANCESC: Just need to configure it a little bit. Cool. Yeah, I think that that is something that most people, regardless if they do PHP or not, they should consider is rather than running your own SQL databases, consider Cloud SQL. Version Q is so much better. It is really fast, and it scales. You can actually make the disk bigger. Which is magic. Like, that is amazing. You don't need to migrate and have weird moments where you need to make your database read only, so you can migrate to something else. It just works. 

TERRY: It's easy to set up replicas. It's easy to set up near-line backups. Cloud SQL V2 is magic, with the caveat that it is not yet GA. 

BRENT: Is it pre-alpha? 

TERRY: No, no, it's not. It's still not GA, which from-- I mean, it's been running a long time, and it's really stable, and it's all these great things. But if you're a company, or you need an SLA, we don't have an SLA on it. So it's one thing t-- but if you look at like-- it's very clear from the UI flow, right? You go to it, and it's like, drive E2. Or there's this Cloud One, Cloud V1 down there. 

FRANCESC: Yeah, down there, at the bottom you need to scroll. Yeah. 

TERRY: So we definitely I think want to push people to V2, but make sure that people understand that the SLA is not there yet. 

CHRIS: And how about Postgres? Is that a big thing in the PHP community? 

BRENT: No. 

CHRIS: Not really. 

[INTERPOSING VOICES] 

TERRY: More bigger in the Ruby community. 

BRENT: And we do have click to deploy Postgres instances. And PTO, the database abstraction library for PHP, supports Postgres too. So it's definitely there if people want to use it. 

CHRIS: Great. And so other than running apps, what else is new in terms of PHP on cloud? 

BRENT: Oh, you mean-- well, so we are working on a pretty nice library that people can use to access the cloud APIs. And again, one of the great thing about the PHP space is it's rapidly developing, and it's getting better. Unfortunately, that means that a lot of stuff we're talking about is still in pre-alpha, slash not GA states. But one of those things is our cloud library. And we have a lot of really nice APIs, really nice wrappers for APIs, that you can use to manage pubsub, big query, data store, everything. 

TERRY: And the new library, the vision API. 

BRENT: Vision's in there, yeah. Natural language API is in there. There's a whole-- I mean, pretty much every cloud API has a wrapper in PHP now. And they're all really, really nice to use and really easy to understand compared to the previous stuff. 

FRANCESC: So are those wrappers wrapping-- which API are they wrapping? Are they wrapping the REST API, or the GRPC API? 

BRENT: Yeah, good question. So they're wrapping the REST API right now, but GRPC support is definitely planned. It's scheduled for before the end of the year. So it should have both. And then yeah, we'll be able to multiplex on one or the other, depending on if you have the GRPC extension installed. 

CHRIS: Cool. Speaking of GRPC, what's the state of that in PHP? 

BRENT: Yeah, yeah. So it's supported. Again, to Google investing in PHP, you can use PECL, which is the PHP Extension Manager. So if you do PECL install GRPC, it will compile the C extension. And then once you have that, you enable that C extension, and then you can use GRPC. 

CHRIS: And that's on PHP on Compute Engine, right? 

BRENT: You can do that in Compute Engine, yeah. 

CHRIS: Can you do it on App Engine as well? I haven't tried it yet, so I was curious. 

BRENT: So you could definitely do it with a custom runtime. We are going to build it, build GRPC into the supported runtime at some point for sure. 

FRANCESC: Cool. So we're kind of running out of time. Is there any other topic that you'd like to discuss before we finish? 

BRENT: So I had one. I just wanted to mention, one of the things that's really nice about using the runtimes that we're trying to provide is we're trying to tackle the misconception that PHP is not a secure language. So we're spending a lot of time making the runtime secure by default. And that means we've done things, like we've patched core PHP functions that might have some really unsafe operations and properties. 

One instance of that is there's like the parse string function that people use to parse query strings. It can be used improperly in a way that would override global variables, and then thus be a really, really large threat factor. And so we've patched PHP to not allow that. There's also security extensions. One is called Suhosin that we use. And that does the same thing of blacklisting a lot of the functions that are traditionally used, abused in PHP. 

And you can still use them. You can whitelist them by setting an environment variable. But they are secured. They are locked down by default. So there's a couple other things we do in that same vein, one of them kind of being using NGINX and trying to do the things that maybe aren't as largely accepted in the PHP community as they are in other language communities. And so we're trying to bring those to PHP developers without them having to opt in or whatever else. 

FRANCESC: Cool. What about you, Terry? Is there anything else that you'd like to mention? 

TERRY: Well, the only thing I'd mention is that Brent's team does a lot of work on the APIs. And one of the things I really appreciate about them is that they're very clearly written by people that write PHP and not like, oh, here's the Python implementation in PHP. That's all on GitHub, and I don't know how accepting of outside input are we with them. 

BRENT: Oh, definitely. Any contributions we're like super, super excited about. 

TERRY: So if anybody's out there, and they're fooling around with these things and find either a-- not that there would be a problem, right Brent? But you know. We're developers. We know how it goes. So we would definitely welcome any contributions. 

BRENT: Yeah, and all this stuff is at a early stage. So there's a couple of guys that have given us suggestions, and their input goes a long way because we are still making a lot of decisions on how we're going to move forward with these runtimes and all this stuff. 

FRANCESC: Nice. So one last question. What is the best place for PHP developers to start using Google Cloud Platform? 

TERRY: Cloud.google.com/php. 

FRANCESC: Easy. So thank you very much to you two for taking the time today to talk to us about PHP and everything you can do with Google Cloud Platform. 

BRENT: Yeah, thanks for having us. 

[INTERPOSING VOICES] 

CHRIS: Thanks again to Terry and Brent. That was really great. I learned a lot about PHP. 

FRANCESC: Yeah, I didn't know much about PHP, but I almost want to try it now, almost. Almost there, yeah. Cool. So it's time to go with our question of the week. And the question of the week this week is something that I'm not a master on, as I've said many times. I'm not a network expert at all. But it is something that it is pretty interesting. 

So we have the HTPS load balancer, which is load balancer that works globally, so basically it does routing, and it sends for whatever requests you get. For an HTP request, it will be able to send it to the closest instance group that you have running. So yeah, so if you send a request coming from Barcelona, for instance, it would go to the data center that we have in Belgium. But if you send it from San Francisco, it could go to the new data center in the West Coast. Yeah. But it has a restriction, which is it doesn't support web sockets. 

CHRIS: Right. And this is because web sockets aren't HTTP. It's its own protocol, which is somewhat related to HTTP, but only in a little way. So it's kind of expected that the HTTP load balancer doesn't work with it. 

FRANCESC: Yeah, it is really not HTTP. It's like more like TCP with some HTTP sprinkled on top. But so the question is, OK, so since this is not supported, what do I do if I want to have web sockets on a global load balancer? 

CHRIS: Yeah, you certainly want some load balancing because it's quite an expensive protocol. So the solution is to use the SSL load balancer if you're using SSL with your web sockets. And I do recommend that. And if you're not, then you can also use the TCP load balancer. And so this is just a more flexible load balancer that doesn't really care about high level protocols like HTTP. So this could be used for any sort of protocol that happens over TCP. 

FRANCESC: Cool. So basically, if you move to TCP, to the TCP load balancer, you will be losing the fact that you have global load balancing. Because a TCP load balancer is actually regional, which in many cases actually totally fine. So if that's something that you're fine with, then just get the TCP load balancer, and web sockets are completely supported. 

But if not, we have this different load balancer, which is the SSL load balancer, that manages SSL obviously. That is the name. But also it does routing across different regions. So again, if a web socket started from Barcelona, it goes to Belgium, but if it goes from San Francisco, it could go to-- I think it's Oregon or something like West Coast. 

CHRIS: And I guess that's pretty important for web sockets because they're usually low latency kind of thing, maybe a game, like an interactive real-time game or something. 

FRANCESC: If you're using web sockets, you're basically trying to do real time. So if you end up in a different continent, yeah the real time's not going to be that real. So yeah. So check it out. So we're going to have links from the show notes to all the documentation, to both the TCP load balancer, the HTPS load balancer, and then finally the [INAUDIBLE] load balancer. 

CHRIS: And all of the PHP stuff too. 

FRANCESC: And all the PHP stuff, lots of links from there too. Well, thank you so much, Chris, for taking the time this week to record this amazing episode with me. 

CHRIS: No worries. It was good being Mark for a day. 

FRANCESC: Yeah, it was good to keep on having an Australian accent next to me. It makes me feel like home. So yeah, again, thank you so much, and thank you so much to all the listeners for being there. And talk to you all next week. 

CHRIS: OK, thanks. I won't see you next week. 

[CHUCKLE] 
{{< /transcript >}}
