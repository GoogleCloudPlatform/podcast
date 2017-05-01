+++
audioDuration = "00:39:44"
audioFile = "Google.Cloud.Platform.Podcast.Episode.73.mp3"
audioSize = 57226784
categories = ["Cloud Functions"]
date = "2017-04-19T01:07:49Z"
description = "We have Bret McGowen to tell us everything there is to know about our newest runtime environment: Cloud Functions."
draft = false
episodeNumber = 73
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Functions with Bret McGowen"
image="/images/icons/compute/Cloud-Functions.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/7X9xkJ8nR8i"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/66cfx7/episode_73_cloud_functions_with_bret_mcgowen/"
+++

This week, [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) ask all the questions that you've ever had
about Cloud Functions to [Bret McGowen](https://twitter.com/bretmcg).

<!--more-->

##### About Bret McGowen

Bret is on the Google Cloud Platform team at Google, focusing on
developer-oriented products like Google Cloud Functions, App Engine,
Firebase, machine learning APIs, and more.
He's currently an aspiring Node.js developer. Prior to Google, Bret worked
in the cloud industry at Rackspace as a software engineer building the
RackConnect hybrid hosting product. Before that, he led engineering teams
at e-commerce, non-profits and tried his hand at creating two startups.

He's often on the running trail, volleyball court or kickball field.
Bret earned a bachelor’s degree in computer science from Texas A&M University.

##### Cool things of the week

- Cloud Identity-Aware Proxy: Protect application access on the cloud [blog](https://cloudplatform.googleblog.com/2017/04/Cloud-Identity-Aware-Proxy-protect-application-access-on-the-cloud.html)
- Automating project creation with Google Cloud Deployment Manager [blog](https://cloudplatform.googleblog.com/2017/04/automating-project-creation-with-Google-Cloud-Deployment-Manager.html)

##### Interview

- [Google Cloud Functions](http://cloud.google.com/functions) and [docs](https://cloud.google.com/functions/docs/)
- Firebase Functions [docs](https://firebase.google.com/docs/functions/ )
- [ngrok](https://ngrok.com/)
- ServerlessConf [homepage](https://austin.serverlessconf.io/)
- Firebase and Google Cloud Functions: Serverless Peanut Butter and Jelly [YouTube](https://www.youtube.com/watch?v=kG71Hg9cUhQ)

##### Question of the week

How can I notify a series of listeners when an object in Cloud Storage has changed?

- Object Change Notification [docs](https://cloud.google.com/storage/docs/object-change-notification)
- Google Cloud Storage introduces Cloud Pub/Sub notifications [announcement](https://cloudplatform.googleblog.com/2017/04/Cloud-Storage-introduces-Cloud-Pub-Sub-notifications.html)

##### Where can you find us next?

Mark is currently at [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/).
He's also going to be hosting the [Playcrafting + Extra Life Game Jame & Game Fest](https://www.eventbrite.com/e/playcrafting-extra-life-game-jam-tickets-32637618997), raising
money for UCSF Benioff Children's Hospitals. Finally he'll be in Sweden for [Nordic Games Conference](http://conf.nordicgame.com/) as well.

Francesc will be presenting at the [New York Google Developer Group](https://www.meetup.com/gdgnyc/events/234963739/) for a Serverless event!
Francesc has also released a new [Just for Func episode](https://www.youtube.com/watch?v=8M90t0KvEDY), covering the implementation of the Context package!

{{< transcript "FRANCESC: Hi. Welcome to episode number 73 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. Thanks, Francesc. How are you doing? We're particularly separated today, I think. 

FRANCESC: We're particularly separated. I think we're almost 12 hours apart in time zones. Like, here it's 10:40 a.m. I don't know what time it is up there. 

MARK: It is 10:40 p.m. You are exactly correct. 

FRANCESC: There you go. So yeah, we're really all the way around the world. I am in Shanghai in China. And you are in-- 

MARK: I'm in Raleigh, North Carolina. 

FRANCESC: You make it sound less exciting than Shangai somehow. 

MARK: [LAUGHS] It's a great place. There are trees and space-- 

FRANCESC: There's trees through here. Anyway, so today, it's going to be a really interesting episode, because we have one of our dear coworkers, Cloud advocates. He's going to be talking about Cloud Functions. We're going to have Brett McGowen. I think it's at least the second time we've had him for the podcast-- maybe third. I'm not sure. 

MARK: Actually I think it might be the first. 

FRANCESC: No we had him for Cloud Spin. 

MARK: Oh, yeah, he did come for Cloud Spin. That's totally true. 

FRANCESC: That was a long time ago, but-- so let's say it's for his second time. And yeah, he's going to be talking about the coolest of the products we have right now, which is Cloud Functions. Everybody wants to use it. And he has a lot of things to tell us. So it's going to be very interesting. 

MARK: We're returning to FaaS. 

FRANCESC: FaaS. 

MARK: And then after that, we're going to have our question of the week, just like we do always, talking about, if you make a change to an object inside Google Cloud Storage, but you want to notify many things, what do you do? 

FRANCESC: Very interesting. And the answer will surprise you. The answer will be talking about something quite new, so a pretty exciting question. But before that, we have two cool things of the week. And one of them is, I'm sure, very dear and near to your heart, because it's talking about your favorite product ever-- Deployment Manager. 

MARK: [LAUGHS] I love how Deployment Manager has become my favorite product. I have a lot of favorite products, it seems. Yeah, so, I do like Google Cloud Deployment Manager. I like anything that automates stuff, because I am lazy and don't feel like doing it myself. 

But the cool thing is, there's a blog post now about talking about using Google Cloud Deployment Manager to create projects, not just infrastructure. This is particularly useful if you're creating lots and lots of projects, and you want to set specific billing options, permission options, service accounts, turn on or off particular APIs. And you find yourself building a lot of these projects-- having an automated way to do this. Going through all the clicking steps-- that kind of sucks. Being able to just simply run a script-- that's much, much better. 

So there's an article that talks about that. It's pretty cool. Yeah, you can turn on and off APIs, you can set permissions, all sorts of all the good things. 

FRANCESC: Nice. And then we have a second cool thing of the week, which is about Cloud Identity-Aware Proxy. And it is interesting, because it is something that I don't know much about, even though as Googlers, we use it every day. It is basically what we call BeyondCorp. And we wrote an article on it. There's a paper that we'll have a link on in the show notes, if you're interested about exactly how it works. 

But it's basically how Googlers access services that are only available for Google employees. And basically, the whole idea is [INAUDIBLE] having a VPN. Everything is based on-- if I'm not completely mistaken-- load balancers that decide if you have access or not to a given resource. 

MARK: Yeah, so it's kind of cool. You can set it up such that since it's identity aware-- it sits in front-- it knows who your users are. And then if they're trying to access an internet resource-- an application that you've set up-- and they're not meant to, then it's going to block them. If they have access, it's going to get them through seamlessly without having to go through, say, a login step or anything like that. 

FRANCESC: Yeah, and it is very nice, because having VPNs is an option, but not an option that is available in every single platform. So the fact that you don't even need to think about, oh, do I have a client available for this platform? If you have HTTPS, you're good. 

MARK: Awesome. Now, those are two excellent cool things of the week. Why don't we, though, go have a chat with our friend Brett, and talk about cloud functions and functions as a service? 

FRANCESC: Sounds good. Let's do that. 

MARK: Today, I am delighted and amazed to have yet another wonderful team member from the Developer Advocacy team. Brett McGowen, how are you doing today? 

BRETT: I'm great. Thanks for having me on. It's going to be fun. 

MARK: Excellent. So excited for you to join us. Before we get into all the cool stuff-- or, all the fun stuff around functions-- sorry, I had to do the alliteration. I had to do it. 

BRETT: I see what you did. 

MARK: Yeah. Before we do that, tell us a little bit about you. Who are you? What do you do? Where are you located? What's your business? 

BRETT: Yes, as you mentioned, I'm a Developer Advocate at Google on the Google Cloud platform. I work in the New York City office. If you've ever seen me speak, you know that I have to mention that I'm from Texas. It is a requirement, as a good Texan, to tell everyone you meet where you're from. 

So when I was in Texas, I was a software engineer at Rackspace for awhile. So I was kind of comfortable in the cloud world. Before that, kind of the usual-- web developer, e-commerce developer, did a couple of startups that catastrophically didn't make it, and-- pretty typical story. So yeah, so that brought me to New York City, to Google, to advocate for all things Google Cloud. 

FRANCESC: Cool. And today, you're joining us to talk about this interesting word-- serverless. What is serverless? 

BRETT: Yeah, that is a great question. 

[LAUGHTER] 

How much time do we have in this podcast? Because we could be here a long time talking about-- 

FRANCESC: Yeah this is the GCP podcast. We asked the hard questions. What is serverless? 

BRETT: Yeah, so serverless is buzz-wording hard right now. It is something a lot of people are talking about, and a lot of people are confused with, and confused about. And of course, the more popular it becomes, the more people want to attach it to their product and their service. 

Serverless as a concept kind of started around mid-2015. 

And I would say there's a whole bunch of things around it. But just philosophically, it's just getting rid of, or abstracting away, whatever comes between you and your code, or, say, you and your query. So for Compute, we're talking about things like load balancing, scaling up, scaling down, health checks. For databases, things like replication, or sharding, or backups-- so it's just you and your query, and you and your code. 

And I think this has been a goal of Cloud for a long time. But really, technology is only kind of just starting to realize that. And in some ways, we've kind of been inching toward that for a long time. I think there are three-- in my mind-- definitions or attributes that really set up serverless as it stands today. 

So one is, no upfront provisioning. So you just start using the service. You upload your code and you're on your way. You don't have to do any sort of traffic analysis or guesswork of how much traffic is going to hit it. You don't have to manage servers. So this is sort of the usual no security patches, no OS updates, no library modifications-- all that stuff-- load balancing all that-- so kind of abstracting away the management of the servers. 

And then also-- pay for what you use. So when your code is not running, or your query is not executing, you're not paying anything. So it's literally only, pay for what you use. So those are kind of, in my mind, the three main attributes of serverless. There's actually a whole bunch of philosophies around it. 

I'm a very inclusive guy, so I like to put a lot of stuff into serverless. I like to think of it as a philosophy, not a technology, necessarily. One of the other things is, serverless tends to be, maybe, event-based, especially when we talk about Compute. And maybe that's where you start to draw the line or blur the line between platform as a service and serverless. And we can talk a little bit about the differences between those. 

But yeah, so for me, in my mind, the three main points-- no upfront provisioning, pay only what you use, and then no management of servers, would define serverless. 

FRANCESC: Cool. All right, so we are particularly wanting to talk today about this newfangled thing we've got called Cloud Functions. Is that functions as a service? Is that a FaaS? 

BRETT: Yes 

MARK: [LAUGHS] "FaaS." 

FRANCESC: A Faas. So what is Cloud Functions? What is this thing? Is it serverless as well? I'm going to assume so, considering we're on this topic of conversation. 

BRETT: Yeah, so I think when a lot of people talk about serverless, they're actually talking about functions as a service, specifically, as you mentioned. So I actually would-- 

To back up, even, a little bit, before we dive into Cloud Functions-- I would put serverless generally into three buckets. So there's functions as a service, as we mentioned-- FaaS. There's back-end as a service. So this is something like Firebase or PubNub, or a product like that. So this is really even almost more serverless, because you're not even writing any server-side code at all. 

And then just managed services, generally-- so on Google Cloud, that would be things like data stores, like a managed, no SQL database. You don't have to prevision servers, Cloud Storage, [INAUDIBLE] for blob storage-- BigQuery for big data analytics where you just aren't managing the infrastructure. And so that's sort of the third bucket of services. 

But as you said, most people, when they talk about serverless, they're talking about functions as a service. And just super, super excited that at Next, just a few weeks ago, we put Cloud Functions into beta. So what is Google Cloud Functions? It is basically a serverless environment where you can connect, and you can build different cloud services. 

And maybe a little more concretely, there are these lightweight JavaScript functions that sort of live and die when different events occur. So they don't exist. They're not running. Some event occurs-- say, a file gets uploaded to Cloud Storage-- and then your function runs, executes very brief lifecycle, and then dies off. And so that's, I guess at a high level, what Cloud Functions are. 

And they're really easy to use and to deploy, without a lot of the overhead of, you know, deploying a whole Kubernetes cluster, or even a whole engine app. It's literally a file of one function in-- so hence, functions as a service. 

FRANCESC: So I guess the next question is, if you have a function, when is that function called? What does invoke it? Is it HTTP request? What is going on here? 

BRETT: Yeah, so in Cloud Functions we, have two different categories of Cloud Functions. We have HTTP functions which you can invoke, exactly as you said, just over HTTP. So if you've used Node.js before-- Cloud Functions, by the way, they're Node.js. I know you'll ask me about Go later, so well stick a pin in that. 

FRANCESC: That's coming up later. 

[LAUGHTER] 

BRETT: And so if you've done a web app, or an express app specifically, in Node.js, it looks very, very similar. So you have access to the request object and to the response object. So it makes it really, really easy to build an HTTP function. So you could build, like, a rest in API, or just WebHook, for example. It makes it super, super easy. 

And so in that case, some external entity is calling it over HTTP. And as soon as you deploy a Cloud Function, you automatically get an HTTPS end-point. We set up the [INAUDIBLE] and all that, so you can immediately do secure traffic without having to do any sort of configuration or anything like that. So that's one way that it gets triggered. 

The second category of Cloud Functions are what we call background functions. So HTTP functions are synchronous, in that you make a call, function runs, and it gives you a response back. Background functions run in response to some events that occur in the cloud. So for example, we have Cloud Storage. So if a file is uploaded to Cloud Storage, we, internally, as Google Cloud Platform, will invoke your Cloud Function with all the meta-data around the file that was just mutated, whether it was uploaded, deleted, modified in some way. 

So we'll invoke your function for you, and give you that metadata. If a message comes in Pub/Sub, for example-- same thing. And then again, we take care of all the scaling. So if you're just getting tons and tons of files uploaded, you don't have to worry about provisioning that infrastructure to respond to all those events. Cloud Functions will do that for you. 

FRANCESC: So in the second category that you were mentioning, is that still an HTTP request? How do you get that data, or does the function get invoked somehow directly with all the arguments? 

BRETT: It's not an HTTP request in the way that an explicit HTTP function is. So you don't get a request object or a response object. Basically your function gets called with two parameters. There's the event object-- and the event object is the same structure, regardless of event. But one of the properties is obviously, what type of event is it? And then there's a data property within there that gives you data specific to that type of event. So again, in the case of a file event, you would have the path in Cloud Storage. 

And then the second is a callback. So this is a normal JavaScript callback, where you pass an error as the first parameter, if there's an error, and then a success message as a second one, if it's successful. So basically, because everything in Node and in Javascript's asynchronous, you're just letting Cloud Functions know, hey, I'm done handling this. So you don't respond specifically to a client making an HTTP request. You just call back to Cloud Functions. And then we register your function as having finished. 

MARK: Cool. So I guess my question here is-- this sounds amazing. So I don't need to worry about scale. I don't need to worry about how many processes is it going to come through. Does this mean I should sit down and build my next big e-commerce or startup idea, all using Cloud Functions? Or is this meant to be glue for a bunch of other things? Where should the application of these things kind of sit right now? 

BRETT: Yeah, I would say right now, glue is a great use case for it. We talked about connecting cloud services with Cloud Functions. And you can do that in a lot of ways. 

So let me back up a second, too I do see a lot of people want to put their whole web app onto Cloud Functions or something similar. And right now, honestly, something like App Engine is probably a better fit for that, because there's just a lot of management up to the application that just doesn't really exist in Cloud Functions-- so things like integration with Cloud Endpoints, for example. If you have an API that you're exposing, it's not integrated with Cloud Functions yet. So App Engine will be useful there. 

So you'll just end up with a bunch of little disparate functions that maybe are hard to coordinate. There's not really integrated auth yet, at this point in Cloud Functions. You can add it. But you sort of have to do it manually. 

So if you're putting a whole application-- like a suite of APIs, even-- you might want to think about right now something like App Engine. But where Cloud Functions really shines is, as you mentioned, kind of gluing those pieces together. So rather than having some API that, I upload a file, and then I call the API to do some processing-- I just upload the file. The function runs, maybe does some lightweight ETL. 

So we have an example of one of our customers that basically has these IoT devices. And they're literally out in fields taking all these measurements of temperature and humidity and things, and then writing these to Cloud Storage. Cloud Functions picks it up, processes the data, feeds it into BigQuery, and then [INAUDIBLE] munges it and puts it into Cloud Datastore for usage actually in a database. So that's a really nice way to kind of tie that all together. 

FRANCESC: Cool. So you mentioned that there was no integrate authentication, but then you mentioned that you're accessing services like Datastore and BigQuery. So I'm assuming that there's what we call the-- 

MARK: Default credentials? 

FRANCESC: Default credentials. Exactly. That basically, if you're running a Google Cloud, you just get a credential there, and authentication is super simple. Is that there? Or what do you mean with no integrate authentication? 

BRETT: And yeah, thank you for clarifying. So I was talking about when you expose this as HTTP end-point to the public internet. There's no there's no external authentication yet. And that's coming. We'll add it. But it's not there yet. If you are accessing Google services internally in your GCP project, yeah, there's that service account that is credentialed already. So it's actually really, really easy to access all of your resources-- you know, your BigQuery, your Vision API, what have you-- automatically, without having to set up any service account, key file, or anything like that. 

FRANCESC: Cool. And since we're talking about accessing other services-- in App Engine, there's limitations, like you cannot access directly the HTTP server-- like HTTP client, you need to use URL fetch. You cannot use the data, like the file system. There's a bunch of little modifications like that-- little things that you need to take into account. Is there such a thing for cloud functions? 

BRETT: So you have only one spot in which you can access local disk, and that is in the Slashtmp. So part of the serverless paradigm is-- the benefit and the drawback, I guess-- is that there aren't a lot of knobs to tweak, in terms of how much memory you get or CPU or things like that. But how much memory you get is actually one of those knobs. 

And that's part of the billing. The more RAM you have available to your function, the more expensive it is to run. So you can go anywhere from 128 megs available to your function, up to two gigs. And that memory is also your scratch disk. So when you write to slashtmp, that comes out of your memory allocation. So that's something to bear in mind if you have a really large file that you're dealing with. 

Just to back up for a second-- in some operations, absolutely, you need access to a disk. But in general, a serverless mindset is, you should try to be as ephemeral as possible. Because we can spin up, kill, reboot what your instance is at any time. So maybe only use that disk, just philosophically, for processing one specific job. And then don't rely on-- anything you write to disk may or may not be there the next time your function gets invoked. So that's kind of this ephemeral stateless attribute of serverless. So it makes it a little bit different than, maybe, a typical platform as a service. 

MARK: So we're kind of touching on the edges of this. So if I'm like, "Sweet, Cloud Functions, sounds great," what's my process for building these things? Do I sit down with command line tools? Am I going through the browser? What does this thing look like? 

BRETT: Yeah, so there's a couple of ways you can deploy your Cloud Function. We do have an online editor. So you just can go to your Cloud console. And it gives you a couple of defaults. You can have this little syntax highlighting. You can write your function right there in the browser. I don't love that. 

[LAUGHTER] 

Many people do. But it's weird. I like to have my like actual IDE with autocomplete and local debugging and all that, so-- 

FRANCESC: So like, Veeam or eMix? 

[LAUGHTER] 

BRETT: Well, Code at the moment, I guess-- but Veeam if I have to answer that one. 

FRANCESC: Good, good. 

[LAUGHTER] 

BRETT: And so actually, speaking of Code-- so Code and a few of those other popular editors-- so yeah, developer workflow. So you can write it locally, just like you would any Node.js app. And we actually have a local emulator that you can download. And you basically can run your Cloud Functions on your workstation. And one of the things it will expose is a debugger-- that your IDE-- like Visual Studio Code, or IntelliJ or whatever, can then attach to. So you actually can invoke your Cloud Function as if it were in the cloud, and stepped through it through your IDE. 

And that's really, really nice. And actually that local debugger is written by one of our colleagues, Jason Dobry, who puts that together. And it makes a big difference, because that way you don't have to do this whole cloud deploy cycle. So say you're working in your IDE. You've got your function. It looks good. You've debugged it. Everything is rocking and rolling. You upload it-- and you can upload it either via the command line, through the browser-- if you do it through the command line, we zip it up for you, which just makes it really easy. 

And then once it's in the cloud, you can use Stackdriver debugger to actually set those watch points in your production code. If you've used Stackdriver debugger before, you know it's really fantastic. You can say, "I want you to capture the state of my app at this point." And you can put conditions on it, like, "But only when x equals 10," or whatever. And it'll give you all your locals and give you your stack trays in production, which is really incredible. So that's a really nice way to do your local debugging, but then also your production debugging with the same set of tools. 

FRANCESC: Cool. Just to understand a little bit better on that developer flow. So how does it work? If you want to debug locally, how do you create those events? Are you sending those events from the cloud to your laptop? Are you faking those events, too? Is there any way to do that? 

BRETT: OK, right, so for HTTP, it's pretty easy. You can just curl it locally. For an event that you're expecting to get invoked from Cloud Storage or Pub/Sub, it is a little more complicated. You basically have to duplicate the JSON payload that comes in. And you can. Hopefully, we'll have a little better story soon on that, as far as automatically faking it for you, or whatever. But as for now, you basically have to replicate that event payload yourself. 

FRANCESC: I'm going to plug a project that I've used for similar things in App Engine, and I've found it was amazing. I want to know have you ever heard about ngrok? 

BRETT: Yes. 

FRANCESC: Yeah, so have you tried ngrok with Cloud Functions? 

BRETT: No that would be an interesting-- that sounds like a blog post, maybe, waiting to happen. 

MARK: Yeah. 

FRANCESC: Cool. 

MARK: Very cool. Awesome. So now, I have an interesting question, too. Because we have Cloud Functions now, which sounds awesome. But then we also have Cloud Functions for Firebase. Are they the same? Are they different? What's the situation there? 

BRETT: OK. [LAUGHS] At the risk of sounding ridiculous, they're the same. It's just, one is for Firebase. And so yeah, they're the same product. The main difference is-- I mean the short version is, if you're using Firebase, probably you want to use Cloud Functions for Firebase. If you're not using Firebase, then probably you just want to use Cloud Functions without. The main differences are the type of events they can respond to. 

So also at Next, we announced Firebase integration, which is really, really, really exciting, which basically means you can have a Cloud Function automatically run when some watched portion of the database changes its value. So for example, you have some game, and whenever some specific game state changes, you want to have some server-side code automatically run to do validation, or to update some gaming board or what have you. 

So we basically added three new triggers to events that Cloud Functions can respond to that are Firebase triggers. One is database updates, so you can watch, like I said, a location in the database. The other is authentication events. So when a user signs up using Firebase Auth, then you can automatically have a function trigger, and you could send them a welcome email, or do fraud detection, or whatever makes sense for your application. And then also Firebase Analytics-- so you can set what are called conversion events in Firebase for your mobile apps-- for your Android, your iOS. 

So a user-- a good example is-- takes a survey. So I have converted him into taking some kind of feedback survey from my application. And I can automatically have my function run whenever Firebase Analytics-- which I'm already tracking-- whenever it tags a conversion event as happening. 

MARK: Oh, that's cool. 

MARK: And then you can kind of do some data analysis. Say, why are people taking surveys? What can I do to help promote it? What isn't working to get people to take surveys? And so those are the three new event types that will trigger a Cloud Function. 

And then the other difference is just sort of syntactically. Firebase functions look a little bit different than Cloud Functions. And that's just to make it more idiomatic with how the rest of all the Firebase SDK looks. It's not a huge difference. But it will catch you a little bit. Because you can't actually deploy a Firebase function using the gcloud tool. And you can't deploy a non-Firebase Cloud Function using the Firebase tool. They're not compatible, syntactically. 

MARK: So you can't really mix and match between the two. 

BRETT: Not without a little manual munging. It's not much. It's basically just how you declare it, is the main thing. But like I said, it's just to make it a little bit nicer for Firebase developers-- that it's a more comfortable and consistent experience for them. But yeah, so more or less, once you get into the function, that's all the same. It's just how you declare it that's different. 

MARK: No, that's fair enough. Cool. So that's pretty exciting. But like, what fun stuff can we expect in the future? What's on the road map you can talk about? Go? 

[LAUGHTER] 

BRETT: Well, now we're going to move that up the pipeline. Yeah, so definitely new languages is on the roadmap. So as far as future, I would hesitate to expect too much, feature-wise, until we go to GA-- until we go to general availability. Right now, a lot of the work is basically getting the product to be as reliable and stable and consistent as we want it to be for folks to put their production workloads on. And so that's kind of the main push right now. So I wouldn't expect a ton of features in the short term while we try to get that out as quickly, as responsibly, as possible. 

And let me answer a question-- a different question-- let me answer, what have I heard folks ask for, or ask about? So languages is definitely one. That's one that comes up a lot. Being able to schedule function-- so right now, they only respond to specific events. And it turns out there's a whole wide range of reasons, though, why you might want your function to run on a schedule-- maybe some daily cleanup. And you just have a few functions. You don't want to roll out this whole infrastructure, like, Cron thing that you have to manage. 

And there are ways around it. You could set up an App Engine-- sort of curl, basically, out to your function. There are third party tools that will call a WebHook on a schedule. So there are ways around it, but it's not a nice, integrated thing yet. 

Another thing that is possible, but is pretty manual, is, if you are going to put a REST API-- put a Cloud Function out as a REST API-- you have to do a lot of manual URL-to-parameter mapping. And it doesn't have to be literally manual. There are node libraries that will do that for you. But there's no just, kind of, cool UI in the console that you can go and say, "Any URL that comes in this way, I want it to go to this function, and map this URL past parameter to this variable, to this variable, to this variable." You would have to do that for yourself. And also if it's post send it to this function. If it's put or get, send it to this function. 

Those are all things that would be pretty nice to have out of the box. Like I said, you can do it. And I'm hopefully working on a blog post to kind of walk through how to do it now. But those are some things that people are asking about that we're thinking about. But no promises. 

FRANCESC: I have one question. So I'm wondering, what if I want to use some specific library? Is that a thing that I can do? Or how does that work? 

BRETT: Yeah, so one thing that's nice is it uses package.json for your dependencies. And if you've written node code before, it is just the way you include and bundle dependencies in your application. And so we actually will build that for you in the cloud, which is useful in a couple of ways. 

One-- if you're doing a deploy from, say, GitHub, or source code repository, you probably don't want to have checked in the compiled dependencies. You just have this package.json, and it just has a list of NPM modules to install. So we'll build that for you automatically. 

The second advantage for us building it in the cloud is something called Native Modules in Node, which basically-- Native Module is code that is compiled against the operating system it's running on-- so you can think, like, C++ type code. And you can do that in Node, but you get into a problem where, if you build your Node module on your local workstation-- like your Mac laptop or whatever-- and then you upload it to your function as a service, which has a different architecture, then it won't work. So we'll build that for you. And so that's kind of one way to get Native Code into Cloud Functions. 

FRANCESC: Nice. I'm assuming that that's using Container Builder? Do you know? 

BRETT: [LAUGHS] Well, I don't know if it's using a public version of it. I'm not sure. [INAUDIBLE] 

FRANCESC: OK. We should do an episode on Container Builder for another day. 

MARK: For another day. Excellent. Cool. So we are running out of time. Is there anything we haven't managed to talk about, or you want to plug or announce or just generally discuss that we haven't managed to discuss yet? 

FRANCESC: Other than the fact that you're from Texas? 

BRETT: [LAUGHS] I was just going to talk it. I was just gonna say "Howdy" for the next 10 minutes. So one way-- and I don't recommend it, but here's your fun, unsupported hack of the week-- 

MARK: Ooh, I like these. 

BRETT: --is that you can upload arbitrary binaries with your Node code. So the sort of real idea here is, if you need to do something like FFmpeg, which our our base image doesn't have installed. Like, you could package that up with your Node module, and then shell out and use FFmpeg to do some video analysis. But what some people are doing is, they just really love Java or whatever so much, they're basically packaging up their Java in an executable, and then their Node code is literally just a little shim that shells out. So again-- unsupported, unrecommended hack of the week-- but I see enough people doing it that it's something to be aware of. If you really have some library that you can't get working in a Node world and in an NPM package. 

MARK: Francesc's eyes literally just twinkled-- like just twinkled. 

FRANCESC: [LAUGHS] I'm so excited. That is a great way to use Go, actually. 

BRETT: Yeah. 

FRANCESC: Yeah, because you could cross-compile-- 

MARK: Open source project in the making. I can see it happening now. 

FRANCESC: Probably I don't want to open source something like that. 

[LAUGHTER] 

Nice. 

BRETT: We talked to, I think, some of the reasons you might not want to use Cloud Functions yet. One of them is when we talk about guaranteed response times. So in the functions as a service world, there's this thing called cold start. And cold start is basically-- because your functions can scale to zero, which means you aren't paying for it, it means that at some point, if it hasn't been used in a while, we'll turn off your instance. And then when that first request comes back in, we need to scale it up very quickly. 

But very quickly is not a dependable number-- even if it's one second or three seconds or whatever. If you really need a guaranteed response time for your function, it's just something to be aware of. So if it's scaling from zero, or just if you're getting enough traffic that it can't handle your request, so it needs to send up a new instance, you're going to run into cold start times. 

So other than that, I wanted to also mention ServerlessConf, which is going to be coming up next week in Austin, the 26th through the 28th. It's a great place to go learn about the exciting world of serverless. I will be there. Some Firebase folks will be there. Some Google Cloud people will be there. All the major cloud providers, basically, will be there-- a bunch of startups. It's a really fun and interesting time to go talk about serverless and see what the ecosystem is doing. 

MARK: Awesome. Well, Brett, thank you so much for joining us yet again. We appreciate you taking the time to spend some time with us on the podcast today. 

BRETT: All right, you bet. Thanks for having me. 

BRETT: Thanks again to Brett for joining us yet again on the podcast. Always a pleasure having you on board. And there's so much hype around functions, it's really great to have you come and explain what it is that's going on. 

FRANCESC: Yeah, and it's definitely interesting, because it's basically a different way of building your whole systems, and changes the way you architecture the whole thing. So a lot of people are very excited about it. There's a lot of thought about it too, saying, "Well, you know, this is very complicated. Is it really the future?" So it's really good to know more about, how does this actually work? What is really behind it? So very happy to have Brett on the podcast. 

MARK: Excellent. So why don't we move on to question of the week. We talked a little bit about it earlier. But to break it down even further-- so OK. I've got a Cloud Storage bucket Hypothetically, I put a file in that Cloud Storage bucket. And I want to be notified of that change. Now, we can already kind of do that. But what I want to do is, rather than just be notified for a change, I want to notify like three or four things about that change. And I'd like to be able to do that in a nice way that's kind of easily extensible and essentially de-coupled, too. That would be kind of cool. So Francesc, what options do I have? 

FRANCESC: So there's a couple of options here. And one of them is using what we call Google Cloud Storage bucket notifications-- or object notifications. Basically every single time there is a new object, you can configure your bucket to send a notification to a web server through a WebHook, basically. This works. But I've got to say, it is hard to set up. Because among all the things, you need to verify that wherever you send the notification is actually as a domain that you own, to basically avoid people using this to try to spam some specific servers, or even try to do [INAUDIBLE] or something like that. 

So there's a new way of doing it, which I really like. And I'm actually going to be using these from now on, instead of WebHooks, is using Cloud Pub/Sub. And now, the cool thing is that you need to set up Cloud Pub/Sub up, too, but you need to set it up once. Because once you've set it up once, and you set up the bucket to send a notification to a given Cloud Pub/Sub topic for every single change that an object gets, what you can do is simply add more subscriptions to that topic. And that's it. Now for every single subscription, you're going to get this one delivery for every message. 

So that's it. It is as simple as that, which is pretty amazing, because creating a new topic or creating a new subscription, it is super simple. You can do it with the REST API, you can do it through the web console. There's many ways of doing it. But all of them are incredibly simple. So it's a much better developer experience [INAUDIBLE]. So I'm pretty excited about it. 

MARK: Yeah, no, I really like it, too. Because the great thing about subscriptions, too, is, you can either pull or you can push them. You have a lot of flexibility in what you do. So you could set it up to push to a WebHook. But maybe you don't want to necessarily do that. Maybe you just want to have some workers that are of set size, and you just have them constantly pulling, depending on what sort of latency needs you have. 

FRANCESC: Yeah, that's a very good point-- especially when you have a bunch of workers, and those workers are not online 100% of the time. Before, you had to catch that WebHook, which means that very often, what you would get was something like a notification to App Engine that would put something onto Pub/Sub. 

MARK: Yeah, I've done that. 

FRANCESC: Yeah, we've all done that. So now you can just drop the whole thing and just send it directly to Pub/Sub, which makes your life much easier-- way less code and way less things to care about. Pretty amazing. Yeah, and since we were talking about it previously-- just to reiterate. You can also hook up Cloud Functions to Cloud Storage notifications, as well. So we've got lots and lots of options available for just being notified when stuff happens inside your buckets. 

MARK: Excellent. Well, Francesc, before we wrap up, why don't you tell us where you're going to be and what you're up to? 

FRANCESC: So as I said at the beginning of the podcast, I'm currently in Shanghai. And I'm going to be flying back to San Francisco tomorrow. But yesterday, I also published my latest Just for Funk episode, which is a continuation of the previous one. In the previous one, I talked about the context package as a user. Yesterday, it was context package as an implementer. So how do you implement the context package? That was released yesterday, so we'll see how that one works. 

But in the meanwhile, I will be working on many things. One of them is going to be meeting with Brett, our guest from today, in New York, May 1st, for Google Developer Group New York, to talk about serverless-- I really don't like that word, but I will use it-- serverless computing. He'll be talking about Cloud Functions. And I'll be talking about Cloud Endpoints 

MARK: Nice. 

FRANCESC: What about you? 

MARK: So when this episode airs, I will be literally right in the middle of East Coast Game Conference, and then I'll be flying quickly from there over to Vector Conference. And then-- oh, what else am I up to-- Extra Life and Playcrafting Game Jam. Yeah, we're having a game jam. And then the next week, there's a fundraiser, as well, for raising kids in hospitals. So if you're into game stuff and you're in San Francisco, check it out online. You can definitely find it. 

FRANCESC: You said, "raising kids in hospitals." 

MARK: "Raising kids in hospitals?" Raising money for kids in hospitals. There we go. 

FRANCESC: [LAUGHS] Yeah, that's more acceptable. 

MARK: Yeah, don't raise kids in hospitals. Raise money for kids in hospitals. That's what you should be doing. 

FRANCESC: That is much better. Well, I think it's, today, a good day as any other to remind our listeners on how to get in touch with us. 

MARK: Yes. 

FRANCESC: We have not done that for quite awhile. We are on Twitter. 

MARK: At @GCPpodcast. 

FRANCESC: On Google+. 

MARK: At +GCPpodcast. 

FRANCESC: We have a subreddit. 

MARK: /r/GCBpodcast. 

FRANCESC: And we also are on Slack. 

MARK: At bit.ly/gcp-slack. You can find us on the Hash Podcast Channel. 

FRANCESC: Nice. And finally we have both an email-- 

MARK: Hello@GCPPodcast 

FRANCESC: --and a website. 

MARK: www.GCPpodcast.com 

FRANCESC: [LAUGHS] With the three w's. 

MARK: Yeah, I had to put the "w" on there. Yeah. I had to. But yes, if people have cool things of the week, and questions of the week, or anything like that, please reach out to us. We would love to talk to you. 

FRANCESC: Awesome. Well, Mark, thank you so much for taking the time today out of your busy schedule in Raleigh, North Carolina. And thank you all for listening. 

MARK: Yeah. And thank you for joining me from China. 

FRANCESC: And talk to you all next week. 

MARK: See you all next week. 
{{< /transcript >}}