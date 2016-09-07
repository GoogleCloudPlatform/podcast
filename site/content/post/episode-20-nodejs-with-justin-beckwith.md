+++
audioDuration = "00:28:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.20.mp3"
audioSize = 41016526
categories = ["Node.js", "App Engine", "Open Source"]
date = "2016-04-06T01:07:49Z"
description = "In the twentieth episode of this podcast, your hosts Francesc and Mark interview Justin Beckwith, a Product Manager at Google Cloud Platform, about how Node.js and the cloud work together."
draft = false
episodeNumber = 20
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Node.js with Justin Beckwith"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/ftX2GacdfPS"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4dm8h5/episode_20_nodejs_with_justin_beckwith/"
+++

In the twentieth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Justin Beckwith](https://twitter.com/justinbeckwith),
a Product Manager at Google Cloud Platform, about how Node.js
and the cloud work together.
<!--more-->

##### About Justin

Justin is a Product Manager, web developer, and geek dad working on the
developer experience for Google App Engine. He writes code, speaks at
events, and rocks out on the ukulele. Before joining Google, he filled
various developer and architect roles with startups, healthcare companies,
and universities.

He blogs at [jbeckwith.com](http://jbeckwith.com) and twitters as
[@justinbeckwith](https://twitter.com/justinbeckwith).

##### Cool thing of the week

- Google Cloud Datastore simplifies pricing, cuts cost dramatically for most use-cases [blog post](https://cloudplatform.googleblog.com/2016/03/Google-Cloud-Datastore-simplifies-pricing-cuts-cost-dramatically-for-most-use-cases.html)
- Google Cloud Datastore gets faster cross-platform API [blog post](https://cloudplatform.googleblog.com/2016/04/Google-Cloud-Datastore-gets-faster-cross-platform-API.html)

##### Interview

- Node.js on Google Cloud [docs](https://cloud.google.com/nodejs/)
- Node.js on Google App Engine goes beta [blog post](https://cloudplatform.googleblog.com/2016/03/Node.js-on-Google-App-Engine-goes-beta.html)
- The Node.js Docker image used by Google App Engine Managed VMs [repo](https://github.com/GoogleCloudPlatform/nodejs-docker)
- Google Cloud Client Library for Node.js [repo](https://github.com/GoogleCloudPlatform/gcloud-node) and [npm](https://www.npmjs.com/package/gcloud)
- Experimental Node.js support for Google Cloud Trace [repo](https://github.com/GoogleCloudPlatform/cloud-trace-nodejs)
- Cloud Debug support for Node.js applications [repo](https://github.com/GoogleCloudPlatform/cloud-debug-nodejs)
- Building Node.js applications on Google Cloud Platform [video](https://www.youtube.com/watch?v=jsznS0QxtYI)
- Google's officially supported Node.js client library for accessing Google APIs [repo](https://github.com/google/google-api-nodejs-client)
- Run Parse-server on Google Cloud Platform [docs](https://cloud.google.com/nodejs/resources/frameworks/parse-server)
- NodeSource Partners with Google to Offer N|Solid as Enterprise Node.js Platform on Google Cloud Platform [blog post](https://nodesource.com/blog/nodesource-partners-with-google/)
- Google Cloud Platform joins the Node.js foundation [blog post](https://nodejs.org/en/blog/announcements/welcome-google/)

##### Question of the week

Michael McKenzie asks about Bigtable and how to get started.

- Research Paper on Bigtable [pdf](http://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)
- Bigtable samples on [github](https://github.com/GoogleCloudPlatform/cloud-bigtable-examples)
- Bigtable Quickstart on [github](https://github.com/GoogleCloudPlatform/cloud-bigtable-examples/tree/master/quickstart)
- `cbt` tool to interact with Cloud Bigtable [godoc](https://godoc.org/google.golang.org/cloud/bigtable/cmd/cbt)

{{< transcript "FRANCESC: Hi. And welcome to episode number 20 of the weekly Google Cloud Platform Podcast. I'm Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing?
FRANCESC: Pretty good. Pretty good. Very excited about the topic today even though it's not my favorite topic.
MARK: So we're not talking about Go. It's very true. We're going to be talking about Node and JavaScript.
FRANCESC: Yeah. We're gonna be talking Node.js on the cloud. Yup. Yup. We got, actually, Justin Beckwith, product manager for Google Cloud Platform that specializes, among other things, on Node.js. So we're gonna have him talking about why you should use--I'm not gonna say "You should use Node.js," but, like, why you could use Node.js in Google Cloud Platform.
MARK: Yeah. I would say, like, if Node.js and JavaScript is your product of choice--
FRANCESC: If it's your thing, we have things for you.
MARK: If--programming language of choice, we have a lot of really cool stuff that we're gonna talk about and a lot of cool partnerships and all sorts of other fun stuff.
FRANCESC: And then, at the end of--at the end of the episode, we're gonna be talking a little bit about Question of the Week on Bigtable.
MARK: Yeah. 
FRANCESC: Very cool. But before that, let's talk a little bit about the Cool Thing of the Week.
MARK: Yeah. We had a couple of really nice announcements about Cloud Datastore, actually. That's a product that's been around for quite a long while but it's getting some love which I'm very happy to see.
FRANCESC: Yeah. It's been there probably--it's one of the oldest solutions that we have. It came with Google App Engine, I'm assuming, so--
MARK: Yeah. I assume so too.
FRANCESC: Yeah. Pretty old. But still very good.
MARK: Yeah. So if you aren't familiar with Datastore, it's our no sequel datastore. The cool thing about it, though, is it doesn’t really matter how much data you put inside it. The read and write times stay the same, and it shards and replicates for you which is pretty awesome. It's very, very, very powerful.
FRANCESC: Yeah. It works very well with App Engine. Basically, it's they both scale from zero to, well, whatever you want very, very well. It scales on traffic. It scales on data. You don't have to do anything. It's completely managed, so it's very, very sweet product to use.
MARK: But one of the things I like to see is the pricing structure for Datastore before it was--let's just say it was complicated.
FRANCESC: It was, yeah, complex.
MARK: Complex. It was fun. It would--it would've been really difficult to kind of work out exactly what you need to do up front. It wasn't--it wasn't--yeah. It was tricky. It was definitely tricky. But--
FRANCESC: So we fixed that.
MARK: We fixed it. We just fixed it.
FRANCESC: Yup. Well, not us, but--
MARK: Yes. 
FRANCESC: So how does it work now?
MARK: So now, it's far, far simpler. Simply put, if you are going to write something, it is simply based on that write for that entity. You no longer have to worry about indexes or anything like that. Reads are the same. The cost is per entity, and deletes are exactly the same in that it's just per entity. So you'll be charged for a single delayed operation per entity. And we've got flat rates for all of those now. So for you to work out exactly what those sort of, you know, costs are gonna be up front, much, much easier.
FRANCESC: Very nice. And that also translates into in most use cases, you're gonna end up paying less which is great.
MARK: Yeah. Which is great. You don't have to worry as much about your indexes. Like, yeah. Cost savings are great. Makes life a lot easier for developers. You don't have to, like, micro, like, manage all of these things so that you can keep your costs down. We want to make that happy and a good place for you.
FRANCESC: Yeah. Just [inaudible] that you should--your thing you should write, and then everything should just work and adapt to the [inaudible] case you're doing.
MARK: Absolutely. Now we also have one other thing for Datastore as well.
FRANCESC: Do we?
MARK: We do. So if you're interacting with Datastore Save, particularly outside of App Engine, we released some new APIs to make that a little bit faster.
FRANCESC: Very nice. How is that a little bit faster? How did we make that? How did we do it?
MARK: So we have a new V1 beta 3 version of the Datastore API. The read latencies on that, we will have links to the graphs in the show notes, but significant performance improvements is the exact quote I'm looking at. The red line is much shorter than the blue line in the graphs which I think makes it better which is good. So not only are we trying to make things simpler for you, cheaper for you, but also faster for you as well if that's what you're looking for.
FRANCESC: Very cool. And something that I really like is that that also includes--so there's a JSON API, but there's also protocol buffers in gRPC.
MARK: It had to be there.
FRANCESC: We wanted it to be faster. So of course. So yeah. If you--if you have some little process running somewhere where you want to have something working really fast to store data, gRPC over Datastore, and that's pretty much it.
MARK: Awesome.
FRANCESC: Very cool. So why don't we go to our main content for today? And let's go talk with Justin.
MARK: Sounds great. Let's do that. Thanks so much to Justin Beckwith for joining us for this wonderful evening today. Justin, how are you doing?
JUSTIN: I'm doing fantastic. How are you guys doing?
MARK: Pretty good.
FRANCESC: Doing great.
MARK: Yup. So for those who haven't met you, haven't had the chance to be in the presence of your very effervescent personality, why don't you tell us a little bit about yourself, what you do here at Google, all that sort of good stuff?
JUSTIN: Absolutely. So my name's Justin Beckwith. I'm a product manager here at Google and, primarily, I have the chance to work on the developer experience for Google App Engine. And it's a really fun gig. I get to dig deep into technologies, deep into Node.js, PHP, Python, Ruby, you know, just about anything. And I get to help influence what it's like for developers to walk up to our platform and use it, hopefully making it a little bit easier.
MARK: Cool. Now I believe you have a bit of a focus on Node.js. Is that correct?
JUSTIN: Yeah. It's been--it's been a huge, huge couple of months for us on Node.js. We just shipped the beta of the Node.js runtime on App Engine. So I've been doing a lot of JavaScript these days.
MARK: A whole lot of JavaScript, excellent. Excellent. Okay. So I guess the first question I ask is, like, why Node.js? Like, we seem to be doing a lot of work there. It seems to be, obviously, you're finding it quite important. Like, what's the reasoning there? What are we doing?
JUSTIN: Yeah. So there are a lot of great reasons to use Node.js. I think the big thing that first attracted me to the platform and the first development team that I was on that started using it, it was about taking advantage of a single language, both for our frontend and our backend code. So we'd spent years and years and years building up this--building up a lot of muscle on using JavaScript for frontend web applications. And, you know, all of a sudden, you would go to the backend, and you had to go completely different language, different package manager, different build system, different libraries. The whole thing. And I think the big beauty of Node.js is that you learn one language, one ecosystem. You know, NPM is getting huge. And now I can use those skills. Frontend, backend, you know, services, web applications, APIs, UI, doesn't matter. It works the whole way across the stack. For me, I think that's the most attractive quality of Node.
FRANCESC: Yeah. That sounds very good. Also, so I don't do Node.js, but I am very happy that Google is coming a little bit more to the community on Node.js because there's actually a lot of people outside that are doing it. So it's a little bit [inaudible] the philosophy of "Go where the developers are." Developers are doing a lot of Node, so that's great. The next question is about--so yeah. Okay. So why Google? Like, Node.js is very cool. There's a lot of people that are doing it, but what is the relationship between Google and Node.js?
JUSTIN: Yes. We have a bit of an interesting history here, actually. Node.js started happening around--I want to say it was 2009 when it started getting built, and it's built on top of V8, the JavaScript execution engine that's part of Google Chrome. So, you know, we spent all of these years building up all this expertise on optimizing JavaScript, making it run as fast as humanly possible on--in web browsers. And then, a group of folks over at Join started building and making it fast for running on the server side as well. And for a couple of years, you know, here at Google, we have a set of languages that we focus on, and JavaScript, on the server side, traditionally hasn't been one of them. And so that effort kind of went on in parallel. And, really, I think--I think over the last few years, especially this year as Node.js has gotten closer to being more viable for enterprise application development, we're starting to get a little bit more involved, right? We sort of sat aside and let this thing develop on its own, and now we're trying to dig in, and we're trying to be a help to the community. I think that you're starting to see a lot more large corporations take a bet on Node.js. Big companies. There's a LTS support model now in place, so you know that with the latest versions, you're gonna get 18 months of backward compatibility and security patches. And, you know, kind of in my mind, I think the big thing that's shifted is it's starting to get real. I think at first, it was great if you were building small time web applications, startups. You needed to do something quickly, it was a popular choice. But now, we can use this to build real web applications. It's actually harder to find companies that aren't using Node at this stage if they're doing web development.
MARK: Cool. So--all right. So obviously, yeah. We're keen on Node. That's great. But what does--what does the developer experience look like right now for wanting to use Node on Google Cloud Platform? Like, what products does it, like, sort of work with or what does that flow look like if I'm gonna sit down and be like, "I want to write Node now?" 
JUSTIN: Sure. So there are a couple of options there. The one that almost everyone is used to. If you want to set up a virtual machine and just bring your code and set up Node.js and run it, of course, that's gonna work same as it would any other cloud provider. I think the things that make running Node.js and Google Cloud interesting, unique, and useful are both the Google Container Engine which is the hosted version of Kubernetes for running docker containers at scale, and then, of course, App Engine. So let's start with App Engine, and then we can talk a little bit about Kubernetes. With App Engine, it's just sort of--the idea is you show up. You bring your code, and we run it for you. We scale it. You push it to us, and we sort of take care of the rest. And then, if you want to dig in and customize it, at the end of the day, all we're really doing is running docker containers for you. So you--if you want to go customize the image, install something that you want on top of the operating system, something like Imagemagick, FFmpeg, that sort of thing, you can just sort of take over and define what the runtime's gonna look like. But at the end of the day, the idea is you bring the code. We run it. 
MARK: So do we, like, I mean, obviously, it would be sounding like we said we released, like, beta support for Node.js. Like, what does that actually mean? You said we can just take the code and run it. What does--what does that actually end up looking like?
JUSTIN: Sure. So when you come to the platform after you do the signup, you use the Cloud SDK, and you can run--you build your web application, have it inside a directory, run GCloud App Deploy, and then after that, you're going to get a website running on an Appspot domain. So you would get, you know, myapplication.appspot.com, and that's gonna scale up to, you know, by default, somewhere between 2 and 20 instances running on our--running on our platform. But really, what the beta was about was just kind of signifying that all the pieces that come to building a Node.js application--it actually goes beyond what's in App Engine. And I think kind of all those pieces are falling into place. So that's the docker image that we use to run your app. That's now open-source on Github Node.js docker, and we publish that out to GCRIO. We have the GCloud NPM modules, actually a really important piece of this. So this is the NPM module that provides access to all of the APIs and services. Things like BigQuerty, Bigtable, the Cloud Vision API. We're starting to work on the speech API. All this cool stuff we got to announce last week or I guess now two weeks ago at GCP Next. And, you know, finally logging integration. What is it like to emit logs from the platform and have an easy way to get access to those? Error reporting. Just sort of all of these things that sit around the platform and aren't necessarily running your code. But the things that are really important when it's time to build your application, monitor it, diagnose it, all those sorts of bits.
MARK: So, really, we've got--we've got all the tools now to build whatever it is you need to use using all that--pieces of our platform. And they may not necessarily have been there before, but they are there now.
FRANCESC: Yeah. There's something that I wanted to mention which is so I recently watched your talk at GCP Next which was pretty awesome. Congratulations on that.
JUSTIN: Thank you.
FRANCESC: I really loved the demo--that Noogler hat. That was really cool. But one of the things that you--that you showed was how to basically move from App Engine to Container Engine in a very easy way. Could you talk a little bit more about that 'cause I thought it was very interesting.
JUSTIN: Yeah. I think that's actually the best part about App Engine right now. We've, you know, we started off as this ecosystem that was a little bit closed off, a little bit, you know, vendor specific APIs, that sort of thing. And it's now reached a point where, really, what we're doing is creating an abstraction that makes it easier to run docker containers. So if you're not familiar with docker, you don't need to know anything about it. You just bring the code, and it runs. But if you are familiar with docker, and if you have--if you already have a workflow for handling this kind of work, then what you can do is just run a single command, GCloud Preview App Gen Config, --custom, and we can get some resources, I'm sure, after this for those who are interested in doing it. And it's gonna generate the docker file that we use inside of the runtime when we run it on top of App Engine. So after that, if you want to run on top of Kubernetes, all you have to do is stand up your cluster, run docker Build to build your docker image that has your application code, and then you can deploy it just like you would any other docker container onto Kubernetes. So it's really flexible up and down the stack.
FRANCESC: That is very cool. That also means that you can run the container directly on your machine, right?
JUSTIN: Yeah. Absolutely. 
FRANCESC: That is very nice.
MARK: That's really cool. So you can basically start with Manage VM, sort of just to get you going, get you up and running, and then as you need more flexibility, you'd need to sort of run down that computer's--the continuum spectrum we've sort of talked about before. You've got that option to just pick up and move. That's very powerful.
JUSTIN: I think--I think where that really shines is where you want to extend beyond what's in a common Node.js application. So like I mentioned, stuff like Imagemagick, FFmpeg, or let's say you want to be able to support multiple languages inside of the same image at the same time. You can completely take that thing over, install whatever you want on it, and then it can run either on App Engine with the automatic scaling and management or over on Kubernetes if you need the control.
MARK: Awesome. So I think we should probably talk a little bit about the elephant in the room, considering we're talking about JavaScript. So, Parse. Let's talk about Parse. How does--how does that strategy around that sort of fit? We keep getting it at events. People walk up to us, and they're like, "Oh. So can I run my Parse code on, like, Google Cloud Platform, and what does that look like? What do I do?"
JUSTIN: Yeah. This is--this is one of those--one of those things that we get a lot. It especially makes it interesting, the fact that we have Firebase, right? And Firebase is owned by Google and runs on Google Cloud now, so when you start talking about Parse, then everything gets a little bit interesting. But yeah. We support--obviously, we support both. One of the great things that Facebook did, I was actually really, really impressed by this. When they announced that they were gonna stop working on Parse as a--as a platform, as a service, they, right out of the gate, announced that they were open-sourcing the components, made everything available to developers, sort of--and they did that as a Node.js application. So if you want to go run Parse-server today, if you've already built an app, and you've deployed it to Parse, and you're looking for a way to get that off of Facebook as they start to turn the service down, they've made it really easy to take and run that on other platforms. And, of course, one of the platforms where that's going to run is gonna be on Google App Engine. So we have some samples. We have some documentation out there. We did a blog post. Really, getting started with this thing is pretty simple. You just need to deploy the Parse-server Node.js application, stand up a MongoDB instance. We used MongoLabs, I think, for our--for our sample when we did this. And then, it's pretty easy to migrate. 
MARK: So that's pretty cool, I guess. That's almost a testament as well to the work that's gone into, like, making the beta support for Node.js, that you can take something like the Parse open source framework and be like, "Okay. This isn't so bad. We just got to kind of write the documentation to make this happen."
JUSTIN: Yeah. It's kind of a funny story, actually. When we--when we first read that news that this was happening, I think it was about 2:00, and I went over to Jason [inaudible], who's one of the platform engineers that works on Node.js with us. He's built a lot of the documentation, a lot of the samples, a lot of the code we have out there on Github, and, you know, we just kind of casually started talking about, oh, what would it take to get this up and running? And I expected to come back, like, later in the evening and take a look at it. An hour later, I got an email from him saying that he had the sample already--he had a pull request on Github ready to go. 
MARK: Nice.
FRANCESC: Nice.
JUSTIN: So it was over the course of an hour, he had that, you know? An hour later, we had a vlog post. An hour after that, there was documentation and, you know, the evening that it was announced, we had everything up and running. So it's really a testament to how great the Facebook guys did in making this stuff easily portable to another platform.
FRANCESC: Very nice. Also, I guess it's also a testament to how App Engine is not vendor locked as people tend to say. Like, you can--you can get any code and just run it there directly. That is--that is very cool.
JUSTIN: Yeah. It's a big--it's a big change from where we were, you know, back in 2008, you know? App Engine has been around for a long time, and a lot of things have changed. You know, pretty much any NPM module you want to use for Node.js, any web server, any, you know, anything. You just show up, and within reason, we can run it.
FRANCESC: Very nice. As part of your talk, if I remember correctly, did you--or maybe that was a different talk, and I'm mixing things, but I think that you had someone else talking about Node.js for companies.
JUSTIN: Yeah. So that was--that was actually during the GCP Next talk, and I had Joe McCann, who's the CEO of NodeSource, a company that does enterprise Node.js up on stage, talking with us.
FRANCESC: Exactly. There was--there were some announcements there. Maybe you could share it with us.
JUSTIN: Yeah. So the big thing that we wanted to announce at Next was just that we formed a partnership with NodeSource, and what that means is that we're able to take the enterprise distribution of Node.js that they've built and that they support along with all the tooling in their ecosystem and easily run that on Google Cloud Platform. So today, really what that means is it's a--it's a--it's a separate distribution of Node that comes with performance analysis tools that make it easy to debug things like memory leaks, high CPU utilization, produces flame graphs, a variety of great visualizations to help dig in and really, really understand what's happening with Node.js processes as they--if, in the event that they start to run amok, as, on occasion, they do.
MARK: Okay. So I guess that means we've got some stuff there well, like, people can just kind of get up with and just run with from NodeSource that they're able to run on our platform just like they would normally?
JUSTIN: Yeah. Absolutely. Right now, most of the offering is centered around Compute Engine, but we're working really hard to bring that to the other layers of the stack, down through Container Eng, and then App Engine eventually as well.
MARK: Awesome. So I'm actually quite curious as well. Obviously, you've had some experience working with Node developers here on our platform. What's the coolest project you've seen of people building stuff with Node on anything on Google Cloud Platform?
JUSTIN: Wow. Anything on Google Cloud Platform so far.
MARK: With Node. With Node. Just to narrow it slightly.
FRANCESC: Other than making a Noogler cap turn.
JUSTIN: See, I thought that was pretty much it; connecting it to little bits, you know? It has everything, right? It's got IOT. It's got web sockets. It's got Node. It was end-to-end on the platform.
MARK: Well, so, actually, well, backtrack for a sec. We've talked a little about your presentation. For those people who haven't seen this, do you want to tell us--talk us through the demo you had, and then maybe we'll come back to the original question.
JUSTIN: Sure. So it was just a couple of some--a few demos. Some serious, some just for fun, quite honestly because they amused me, but all with the idea of showing off how to use Node.js on our platform. So first one we did was with the Cloud Vision API. We did a little analysis of Reddit. Actually went on r/[inaudible]. We were detecting images on Reddit to figure out if they were dogs or cats, putting them in the right category, and kind of doing real-time data analytics on stage. That one--that one was fun. I was really, really worried when I was doing that demo that Reddit was gonna go down, and I was gonna be left standing there with a--with an empty webpage, but it all worked out. And then, the other--and then, the last demo that we started to put together was on using littleBits. LittleBits are small, composable electronic building blocks usually for kids or, you know, for the young of--young at heart. And they have this thing called a "Cloud Bit" that lets you connect 'em to the internet. So we started playing around with those and seeing what it would be like to connect it to Node.js on Google Cloud Platform and, you know, I think during that, there was too much interference in the room and not everything tied together the way I would've liked, but it was still pretty cool.
MARK: Awesome. And the final result was a twirling propeller on your Noogler hat?
JUSTIN: Oh, yeah. It played music. It twirled the hat. It did everything. It was lots of engineering manpower going into that hat.
FRANCESC: Yeah. It was definitely some--definitely worth the effort.
MARK: That's great. Okay. Cool. So all right. There's a bunch of work going into Node.js, Google Cloud Platform. Are you able to hint at anything like that's upcoming, what things should people expect, you know? That sort of good stuff.
JUSTIN: Yeah. Absolutely. So phase one for us was kind of going and making all this stuff run great on Google Cloud Platform. So we talked about Trace and Debug and App Engine and the integration with NodeSource and all the fun stuff around that. I think the next step is actually integrating ourselves more closely with Node.js as an organization and as an underlying technology. So we've spent--we've built up all these years, as I mentioned, years of muscle and making JavaScript work great on the web browser. Well, the next step is to actually dig in and help make it run better on the server. I don't think that we've done as much there as we've always wanted to in the early days of Node, and I think we could have a huge impact doing things like making the developer tooling in Chrome work better with Node.js; make the debugging story a little bit easier, make the tooling story a little bit better, improve the performance. One of the things that we've done to actually kick off this next stage of work now that we're past the beta is we've actually just recently joined the Node.js Foundation. And that's a group that's responsible for driving Node.js as a technology forward, not just on Google Cloud, but making Node better for developers everywhere.
FRANCESC: Very cool. That actually shows a lot of commitment from Google. Are we, like, being part of it, really? But what else could people working for Node--working with Node.js expect to see soon on Google Cloud Platform? We have a bunch of APIs, and they can run on App Engine. It's beta. Could you tell us a little bit more about is there any specific roadmap that you could share? You're product manager, so maybe you have the power.
JUSTIN: Yeah. Absolutely. I think the biggest things you're gonna see from us, moving forward, are better API support for all the cool services. So we announced a lot of great stuff at GCP Next; things like CloudML, the Google Cloud Speech API. As we start to churn out more and more of these services, then we have to expose meaningful APIs for Node developers not just on Google Cloud Platform, but if you want to take advantage of these APIs from Drone datacenters, from other clouds, you know? We don't care. However you want to do it, we want to kind of open up these sort of--I like to call them the "Google Cloud Magic APIs." All the stuff that does machine-learning. We're gonna be spending a lot of time there, improving those APIs, and getting them in front of everyone.
FRANCESC: Very cool. We're pretty much out of time, but is there anything else that you would like to mention that we didn’t have time to?
JUSTIN: Yeah. The big thing is just we love JavaScript here at Google. We love the web. We like connecting things to the internet, and we like running services, and we're committed to making Google Cloud the best place to run Node.js applications, and we're committing--committed to making Node.js itself better. So if you're looking for a place to bring your code, come to us.
FRANCESC: That is awesome.
MARK: Well, thank you so much, Justin, for spending the time with us. We really appreciate it.
JUSTIN: All right. Thanks a lot, guys. This was fun.
FRANCESC: Thank you.
MARK: Thanks a lot.
FRANCESC: Cool. Thanks again to Justin for such an awesome conversation. I learned a lot. I had lots of fun. We will have a bunch of links on the show notes to all the little [inaudible] that he mentioned, the talk where you can see him wearing a Noogler hat that turns around. 
MARK: Nice.
FRANCESC: Yeah. So it's lots of fun. Before we finish for today, let's talk about the question of the week. We said it was Bigtable, but why don't you, Mark, tell us a little bit about the question itself?
MARK: Excellent. So we got a nice email from a gentleman by the name of Michael McKenzie. His question is, "I think Bigtable could be used in one of my personal projects, but I do not know where to start." He's actually read the Google paper on it. Good for him. That's a job well done. "However, I find myself a bit lost in fully understanding how to get going. That said, do you have any recommendations of simple apps or projects one can get acquainted with Bigtable?" 
FRANCESC: Cool. So--
MARK: So I feel like this is kind of, like, a two-parter, actually.
FRANCESC: I think that the first part is when you say you're planning on using it for personal projects, I could say, "Think about it twice," unless your personal projects have an amazing traffic, and you really need the throughput that Op Ent--sorry. That Bigtable can offer. I could say that maybe Datastore is the--is the place to be.
MARK: Yeah. I'd probably almost look at it as well from, like, personal projects. Bigtable can be expensive. Like, we turn around and say, "Yeah. If, you know, you know want a rather large amount of data for that cost savings to kind of kick in."
FRANCESC: Yeah. If your personal project requires something around, like, one million [inaudible] per second, yes. Go for it.
MARK: Yes.
FRANCESC: But if you're around one per second, probably Bigtable is a little bit overkill.
MARK: Yeah. Probably.
FRANCESC: But if you actually want to learn more about Bigtable, I think that reading the paper is a very, very good step. Maybe overkill too. That's a very--it's not probably the best place to start if you want to understand more. But there's--actually, all the documentation--we also have a bunch of--a bunch of sample projects on Github. So that's on Github.com/GoogleCloudPlatform/CloudBigTableSamples, I think. But we will have--we'll have the links to those projects on the show notes. And in one of those examples, you could actually be able to see that there's a tool called Quickstart. And Quickstart is basically a Java tool that allows you to use Bigtable from the--from the command line. So you can create tables. You can insert data. You can read from it. So you can basically get the--a little bit of an idea of how Bigtable actually works, and then you can start playing with it. Also, it's cool 'cause if you have a lot of data, you can also see how incredibly fast it works. But if you're not a Java guy like me, and in that Maven is very hard to understand which, if you ask me, it is. Also, XML? Come on. But there's actually another tool that I ended up using personally which is called CBT. That stands for Cloud Bigtable. And it's run and go. So basically, you can just install it directly or we--I think that there's distribution--
MARK: Binaries?
FRANCESC: Binaries for Windows and Mac and Linux and whatever, and then you just run it 'cause you don't need anything else 'cause it's just a self-maintained binary. So that's cool.
MARK: Not that you're biased in any way, shape, or form.
FRANCESC: Absolutely not.
MARK: Yup. Absolutely not. Okay. Cool. So yeah. If you want to get set up with Bigtable, like, there's no reason why you couldn’t fire up a node and sort of run it within the trial period for, like, a short period or something like that.
FRANCESC: Three nodes.
MARK: Yeah. Three nodes. Yeah.
FRANCESC: That is the minimum. Yeah.
MARK: That is the minimum. Three nodes. No. That's totally true but definitely shut that down again before you're finished.
FRANCESC: Yeah. Yeah. It's--I mean I think it's a very nice way to understand the power of a cloud, but at the same time, if it's for a personal project, probably Datastore is a good place to be.
MARK: Yeah. I guess if you're gonna be running that long-term, Datastore makes a lot of sense. If you're gonna do, like, oh, a few little bits and pieces, you could run it for a little bit and then turn it back off again.
FRANCESC: Yeah. Cool. Well, thank you so much, Mark. Before we finish, what are your plans for next week or next weeks?
MARK: Next week? Next weeks? I don't know if I have--I actually think I'm just gonna be hanging out in San Francisco, writing some content in the next few weeks.
FRANCESC: Very nice. 
MARK: Yeah. How about yourself?
FRANCESC: Well, I'm actually going to be, at the end of the month, I will go to Budapest. My first time going there. I'm very excited to be talking about Go at CraftConf.
MARK: Very nice. 
FRANCESC: Yeah. I was gonna--we're gonna have some other people from the--from the [inaudible] team. Cassie [inaudible] will be--will be there also, talking about Kubernetes. So I think it's gonna be a very, very good conference.
MARK: Excellent. It sounds like a lot of fun. Brilliant. Well, thank you so much for joining me yet again, Francesc. I really appreciate it.
FRANCESC: Thank you so much for being here too. And talk to you next week.
MARK: See you next week.
{{< /transcript >}}