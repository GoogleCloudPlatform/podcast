+++
audioDuration = "00:40:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.179.mp3"
audioSize = 58468503
categories = ["Stackdriver", "Monitoring"]
date = "2019-05-29"
description = "Jon Foust is back this week, joining Mark Mirchandani for an in-depth look at Stackdriver with fellow Googler, Rory Petty."
draft = false
episodeNumber = 179
hosts = ["Mark Mirchandani", "Jon Foust"]
title = "Stackdriver with Rory Petty"
image="/post/episode-179-stackdriver-with-rory-petty/images/hero/hero-EP-179.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/buirz1/episode_179_stackdriver_with_rory_petty/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon Foust](https://twitter.com/syntxerror1) is back this week, joining [Mark Mirchandani](https://twitter.com/markmirch) for an in-depth look at [Stackdriver](https://twitter.com/stackdriver) with fellow Googler, Rory Petty. To start, Product Manager Rory explains that Stackdriver is a full observability solution for Google Cloud (as well as other clouds). We touch on how monitoring, logging, and APM tools allow developers and operators to fully understand how a website is performing. In addition to Monitoring and Logging, the suite of Stackdriver tools also includes Debugger, Trace, and Profiler to help users not only monitor their sites, but to solve problems that occur.

Stackdriver Monitoring and Logging support Google Cloud services out of the box. Users can use Monitoring to set up alerts, so if something goes awry, they are notified immediately and can address the problem. Alerts can also be custom designed to inform developers of things like number of checkouts on your e-commerce site, the amount of time between checkouts, and more. Stackdriver Monitoring allows blackbox monitoring, too, to make sure your service is healthy. The Monitoring dashboard makes it really easy to get started, with a resources section that has pre-made dashboards for developers to use. Developers don't have to do a lot of configuration out of the box. However, if you need a more customized dashboard, that is also possible in Stackdriver Monitoring. 

At Cloud Next earlier this year, Stackdriver announced Service Monitoring in alpha, which shows users a map of their microservices architecture. Public beta will hopefully be later this year. Stackdriver Sandbox, another recent project currently in the alpha stage, gives people an easy way to configure a test Stackdriver environment. This way, developers can play with Stackdriver tools without effecting their websites. Stackdriver Profiler, a great tool to understand the performance of your system, went GA at Cloud Next as well.

Stackdriver's tools are all meant to work together to help you maintain and perfect development projects on many different cloud services and on-prem.

<!--more-->

##### Rory Petty

Rory Petty is Product Manager for the Stackdriver Monitoring Platform. In his spare time, he enjoys cooking and is a vinyl record enthusiast. Rory is a midwest transplant living in Brooklyn.

##### Cool things of the week

* Commute just got easier with Google Pay and Google Assistant [blog](https://www.blog.google/products/google-pay/easier-commute-google-pay-assistant/)
* 5 year anniversary of Kubernetes and KubeCon content [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKxebOTxK6HxItMCpGUKxxs&disable_polymer=true)
     * Kubernetes Podcast [podcast](https://kubernetespodcast.com/)
* Early Preview of AR in Google Maps [video](https://www.youtube.com/watch?v=XWbY5jdJnHg)

##### Interview

* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Stackdriver with Kubernetes [video](https://www.youtube.com/watch?v=lwBBAvPxO9c&list=PLIivdWyY5sqLuKKx4pcdEAkJY1HevjVVm)
* Stackdriver Monitoring [site](https://cloud.google.com/monitoring/)
* Stackdriver Logging [site](https://cloud.google.com/logging/)
* Stackdriver Debugger [site](https://cloud.google.com/debugger/)
* Stackdriver Trace [site](https://cloud.google.com/trace/)
* Stackdriver Profiler [site](https://cloud.google.com/profiler/)
* App Engine [site](https://cloud.google.com/appengine/)
* Compute Engine [site](https://cloud.google.com/compute/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Site Reliability Engineering (SRE) Book [site](https://landing.google.com/sre/books/)
* Istio [site](https://istio.io)
* Stackdriver Service Monitoring [site](https://cloud.google.com/service-monitoring/)
* Stackdriver Sandbox [site](https://stackdriver-sandbox.dev)
* Cloud Next '19 DevOps & SRE Sessions [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqISlOXDGGK-SeUCvsxtB1c0)
* Cloud On Air [site](https://cloudonair.withgoogle.com/events/americas)
* Stack Doctor Playlist [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqLuKKx4pcdEAkJY1HevjVVm)
* Implementing GCP Stackdriver and Adapting SRE Practices to Samsung's AI System [video](https://www.youtube.com/watch?v=45UoGDxuwto)
* Stackdriver Documentation [site](https://cloud.google.com/stackdriver/docs/)

##### Question of the week

[How do I decide between Apps Script and App Maker?](https://cloud.google.com/blog/products/g-suite/apps-script-or-app-maker-a-guide-to-picking-the-right-tool-to-build-your-app)

##### Where can you find us next?

Jon is going to [Games for Change](http://www.gamesforchange.org/).

Mark is going to be in NYC right before [Games for Change](http://www.gamesforchange.org/).

##### Sound Effect Attribution

* "Spaceship Fly-by, A" by [InspectorJ](www.jshaw.co.uk) of [Freesound.org](Freesound.org)
* "Teleport" by Sergenious of [Freesound.org](Freesound.org)
* "Moretube.wav" by NoiseCollector of [Freesound.org](Freesound.org)
* "Mystery Peak2.wav" by FoolBoyMedia of [Freesound.org](Freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to episode 179 of the weekly Google Cloud Platform podcast. I am Jon Foust, and I'm here with my colleague and friend, Mark Mirchandani. Hi Mark, how's it going?" >}} 

MARK: Hey Jon, I'm so glad that you called me your friend, as well as your colleague. You know what? You're my friend, too, Jon. 

JON: I mean, we did share a car ride playing Super Smash Bros during Google I/O. So I'm pretty sure we're really good friends. 

MARK: That was one of the most fun Uber ride I may have ever had. But that was a lot of fun to kind of take some downtime. Because that event was-- whew-- that was a lot. And it was kind of nice just to spend 30 minutes-- I mean, admittedly, we were stuck in traffic. 

JON: Which made our game play a little bit longer, so it was pretty cool. 

MARK: Oh yeah, so much the better, right? That could lasted for three hours, and it would've been great. So what are we talking about in this episode? 

JON: Sure, so in this episode, we'll be talking to Rory Petty, product manager for Stackdriver. We're going to talk about the new things Stackdriver has to offer, as well as some helpful tips from a product manager himself. And we will also get into our question a week, which will help you decide whether you should use Apps Script or App Maker when you're trying to build out your app. 

MARK: Cool. Sounds like a good episode full of learning things. 

JON: And I think our listeners will really be excited about the cool things that we have in store for this week. 

[MUSIC PLAYING] 

You want to kick things off, Mark? 

MARK: Yeah, absolutely. Well, I think the coolest thing that I've found this week is-- we're just coming off of KubeCon in Barcelona. And we know that some of our colleagues went. One of our co-hosts Michelle was at KubeCon. I believe she was speaking. And one of the best things that has come out of Kubecon is everything. 

So if you didn't get a chance to make it, there's tons of content on YouTube. So we'll have a link down in the show notes, talking about-- well, actually, just linking to all the different talks that happened there. There was a big-- this is the five year anniversary of Kubernetes, so great on them. And of course, there's a lot of cool content around the changes they're making, new additions, and I think that the Kubernetes podcast also does a good job of talking about and recapping all of the great happenings. 

JON: Yeah, those guys are great. I guess for me, another cool thing that I noticed is on my commute to work yesterday, I noticed that there are new terminals for your smart device where you can use Google Pay to actually pay your way through your turnstiles, which is kind of cool because we're advancing in the technology, where pretty soon, we'll have flying cars. 

But you can also use Google Assistant to help you plan your commute. So you can ask your Google Assistant, hey, Google, how long will it take me to get to work, or what is the fastest way for me to get to work? And Google Assistant will readily help you. So it's pretty good to help, especially when you're going through a large transportation hub, and you want to know which train you should take and which is the fastest way. 

MARK: Yeah, I hadn't considered that. But when we are in our flying cars, and then we have to stop at a tollbooth, I guess the whole idea of having to throw change into a bucket just wouldn't quite resonate with our cars and the ability to kind of zoom off. 

[COINS JINGLING] 

[CAR ZOOMING] 

JON: All right, and I mean, granted, I did like working on my jump shot when throwing change, but I mean, let's just be serious. We're advancing to a time where pretty soon, we'll have flying jet packs. 

[ENGINE ROARING] 

MARK: Yeah, I mean, who needs the cars? We'll just go straight for teleportation. 

[TWINKLING] 

Let's just go all the way. 

JON: Oh, yeah. Or we can do just like "Futurama" and have those little tubes that looks-- 

MARK: The pneumatic tube system? 

[SWOOSHING] 

JON: Yeah. 

MARK: That seems so backwards for me, right? Like, is that really futuristic? Because we've had those tubes since at least decades ago for mail. And something about just shoving people in tubes-- I don't know. I think I'll take the jet packs. 

JON: You know what always got me about those shows is, when you go into the tube, you're upright, but when you come out of tube, you're also upright, so at what point in the tube do you flip around? 

[SUSPICIOUS JINGLE] 

MARK: That is a plot hole. I demand an email from the creators explaining how this works. But you know what? I get the feeling that they will have better things to work on. 

JON: Right. And another cool thing that our team has been really talking about in chat was the early preview for AR on Google Maps. It was shown off at Google I/O, where you can actually put your Pixel phone in AR mode while navigating, and it will help you with turn by turn directions on screen. So there's no second guessing the direction you're going in, especially when you can see the landmarks in Google Maps. It will actually show you which landmark you're looking at, which direction you need to turn, which direction you need to face, and how far you need to actually walk, which is kind of awesome. 

MARK: Yeah, I mean, we're not at those flying cars yet. But I think anything that improves the kind of driving experience, especially using kind of the-- it's a good showcase of how AR can really be used in real life, to say, hey, look, let's make our lives better. Let's make things easier. 

JON: Cool. So that'll do it for the cool things of the week. So let's get right into it with Rory and talk about the cool things that Stackdriver has to offer. 

MARK: Sounds good. 

[MUSIC PLAYING] 

All right, thanks so much for joining us, Rory. Why don't you tell us a little bit about who you are and what you do at Google? 

RORY: Yeah, my name's Rory Petty. I'm a PM, a product manager on Stackdriver. And a lot of people aren't familiar with the Stackdriver brand name. But that's basically the brand name that encompasses the suite of monitoring, observability, and logging tools for Google Cloud. So for example, within Stackdriver, there is a tool for monitoring-- like I said-- logging, and then also, our APM tools, which are Application Performance Management tools. So that includes things like Debugger, Trace, Profiler. So really, this kind of whole suite of tools that lets you understand how your website or your application is performing. 

So I like to kind of liken it back to the dashboard in your car. If you're driving down the highway, the dashboard tells you how fast you're going, if your engine's about to overheat, are you about to run out of gas. And so in the same way, the Stackdriver Suite, when you have it hooked up to your mobile application, your website, your e-commerce store, whatever, it provides you kind of those critical insights into how your service or site is performing. 

MARK: So what's your role within the program manager for Stackdriver? What does that kind of entail? 

RORY: Product manager-- maybe I misspoke. 

MARK: Oh, I'm sorry. 

RORY: So basically, I work on product for Stackdriver Monitoring. So I work on the core monitoring APIs. I work on query notation, which is a new feature that we have in alpha right now, which I can talk about more in a little bit. I also work on our systems that handle alerting and notifications-- kind of how you are able to tell the system, hey, alert me and notify me if something's going wrong with my system. That's kind of my focus area. 

JON: Gotcha. So that sounds really interesting because I just started using Stackdriver myself recently because like many of our developers, they just want to build a solution right away. But when things go wacky or when things are uploaded, they don't really actually have the time to follow up and actually monitor and actually get these alerts. So I recently just started using alerts for when my Noogler project goes off whenever anything fails. So can you tell our listeners a little bit more about the type of alerts that you actually get? 

RORY: Sure. So there's kind of a variety of alerts that you can set up with Stackdriver Monitoring. So I'll start out by saying that in terms of all the Google Cloud Services that are out there, Stackdriver supports them. Stackdriver Monitoring and Logging supports them out of the box. So for example, if you spin up a new compute instance, a new compute VM, or you spin up an App Engine instance, all that kind of stuff, they automatically start sending metrics and logs to Stackdriver for you. 

So you really, in most cases-- for a VM, you might have to install an agent or a couple other things. But you're basically getting out of the box metrics and logs. And so I like to think about it in a couple stages. First is I'm receiving this kind of telemetry data from my VM from my application. Just let me look at the data and understand it, right? So that could be. I'm looking at CPU usage or network latency. It could be something more complicated-- if I have created SLOs for my service. 

But basically, you're getting this data. You're kind of figuring out what's the steady state of your system. And then what's the state of your system where it's going to start to degrade? So for example, if your CPU is at 100% on the VM, and you can't accept new incoming requests, or if you run out of storage, or any of the million different things that could happen. So that's where alerts come into play, is where you say, OK, I know what the correct state of my system should be. And if certain metrics start to go past the certain thresholds, then alert me because I should come back and take a look at it. And I should spin up new servers, or I should figure out if a bug was deployed-- whatever the case may be. 

So with alerts, there's a couple of different approaches. The first is you can alert on metrics. So these would be GCP service metrics that the services send, again, App Engine, GCE, GKE, whatever. It can also be custom metrics. So for example, say I have an e-commerce store. Every time someone checks out, I may want to write a metric to Stackdriver that, say, a checkout just happened. So from that, I can then-- later, I can visualize these metrics. Like, I could have a dashboard of the number of checkouts per day or per hour. I could do other kind of analysis or math on that to kind of tell me what's the amount of time that it takes between checkouts or how frequently are my high value customers checking out-- all that kind of stuff. 

Another approach that you can take-- if you've read the Google SRE book, it draws this distinction between white box monitoring and black box monitoring. So white box monitoring is when your service or system emits metrics, right? Your VM is constantly sending CPU usage metrics, network metrics, whatever. But a black box is literally just that. You basically say, I don't know the contents of this system, but I'm going to ping it and say, hey, are you alive? Are you working? 

So basically, in Stackdriver, you can go in and create what's called an uptime check. And Google's HTTP prober service that we run globally, it's also the same service that Google uses to black box monitor its own internal tools and services. It can basically send an HTTP request to a URL endpoint for your app and not only say, hey, are you up, but it can actually check the contents of their response. So I'm going to hit the shopping cart URL endpoint of my e-commerce service, and I'm going to check the response to say, OK, am I getting certain HTML form fields back? Am I getting certain values? So you can kind of do basically like a next order set of checks to make sure that your service is healthy. 

And so again, going back to the SRE book, it kind of has this recommendation that for an advanced monitoring practice, you should really use both. You should have alerts set up on the white box metrics that are being exported by your service, and then you should also have kind of these black box probers that are probing the health and liveliness of your service as well. 

JON: Sounds awesome. And one thing that you said that I think our listeners will be interested in hearing about is, you used the word monitoring quite a bit. And I'm pretty sure that Stackdriver has some type of monitoring UI or some visuals that we can actually help trace our logs and everything. So can you talk more about that? 

RORY: Basically in Google Cloud console, if you go kind of to that left nav that slides out, and it has a million options, there's a Stackdriver section. And again, that is broken out into the core Stackdriver services of Monitoring, Logging, and then the other APM tools-- Trace, Profiler, Debugger. So Monitoring specifically-- when you go into Monitoring, it will first ask you to create a workspace. And the reason that we have this workspace construct is that oftentimes, people want to monitor one or more projects of theirs in Google Cloud. 

So for example, you can imagine a scenario where I work at a company, and I'm assist admin, or I'm an SRE, or a developer-- whatever the case is. And we have our website could be e-commerce provider, like target.com or something like that. But it's probably at a certain scale, divided across multiple projects. So you might have a front end for the website that's being driven by services out of one project. You might have a shopping cart or payment gateway service that runs in another project. So long story short, you want to monitor all of these kind of in the same place. And so a workspace-- you can put multiple projects into a workspace to kind of give you visibility across all of them at the same time. 

So Jon, going back to your question, once you go into the Stackdriver Monitoring section, there's a variety of things you can do. One is that there's this section called Resources, where we actually create out of the box dashboards for you for a variety of common resources. So that could be Cloud Storage, VM instances, App Engine, Google Kubernetes Engine, all of those. So you actually don't have to do a lot of configuration out of the box. For example, say, let's select one of our GCE VM instances. We're going to give you CPU usage, memory usage, uptime check latency. We're going to show you events related to that particular VM, whether you have uptime checks configured, what's the network traffic look like. 

So a lot of people are worried about, oh, is it complicated to set up and start using Stackdriver? Again, for a variety of use cases, it's pretty simple and kind of just works out of the box. Now, if you have more complicated needs, more advanced needs-- you want to set up your own dashboards-- that is certainly a functionality that we support. So you can go in, create a custom dashboard, and say, oh, I want to create a dashboard that tracks the health of my shopping cart service for my e-commerce website. So you can do a variety of charts and graphs that, again, measure any metric that that service exports. So that, again, could be CPU, disk memory, network, custom metrics that you're writing. It's really configurable however you want. 

Stackdriver also just recently launched a new product called Service Monitoring that basically went into alpha at Google Cloud Next in San Francisco back in April. So the idea behind that is that let's say you're running a GKE cluster. There is an open source project called Istio, which is basically software that helps you define basically a mesh for your microservices. So it's everything from the control plane to metrics to how the services talk to each other, authenticate. Istio handles all of that. 

And so the cool thing is that Istio borrows a lot of architecture from how Google manages its services and microservices internally. And so Istio, once you configure it, out of the box will give you metrics and traces and a variety of other telemetry that you can use to better understand your system. And so Service Monitoring not only makes it easy to configure all of that. You can actually see it visually in this kind of topology graph. So you can imagine in Google Maps, a visual map of these are where different points of interest or locations are on the map. 

Stackdriver Service Monitoring will actually show you a visual map of your entire microservice architecture. It'll show you where all the VMs are, who's talking to what, how much traffic, and how many queries per second are going between various instances and endpoints. It's pretty cool. We're hoping to get to a public beta of it later in the year. We don't have a definitive timeline yet. But I think it's something that a lot of people will be very excited to work with. 

MARK: So I mean, that's a pretty deep dive on a lot of the monitoring side of things in Stackdriver. But there's a lot more to it. You mentioned logging a little bit earlier, but you also kind of mentioned a collection of other tools. And you were talking about the SRE book. Would you say that maybe Stackdriver is a little bit more designed as a set of tools to kind of support this SRE cycle? 

RORY: So it's interesting. There's no one true way to kind of monitor and maintain your systems, right? Obviously, Google has a very specific point of view with the SRE book. But the point of the Stackdriver suite of tools, which, again, to your point, is not just monitoring. It's logging and a variety of other tools-- is to really meet customers where they're at. We have baked some of the best SRE principles into the Stackdriver tools. But if that's not part of your DevOps practice, then we want the tools to still be useful to you. 

So for example, there are still a lot of companies or development organizations that the primary way that they understand and debug their systems is through logs, right? So they'll log all these different important touch points within their code. If there are errors, they'll dump stack traces. They'll dump a variety of other information. And so their developers are both watching logs in real time, and they're also creating alerts on their logs. 

But that's actually another interesting point that you brought up, Mark, which is that Stackdriver is a set of different tools. But there are a lot of horizontal journeys and capabilities that tie all the tools together. So for example, let's say that I'm logging my Java application to Stackdriver Logging. And let's say that every time someone checks out in my e-commerce shop, I write a log entry. Or every time that someone encounters a problem, I write a log entry that's an error, or an exception, or that kind of thing. 

You can actually create what's called a logs based metric in logging, which basically says, every time this kind of log entry happens-- I mean, you can do simple matching against the log entry. You can match on a regex and say if the log entry contains these kind of words or phrases or matches against this regex, basically, write a data point as part of a time series. And then that time series that is created from the log-- again, this log based metric-- you can do all kinds of things with. You can visualize it on the dashboard. You can create an alert off of it. So while the products are separate, they are kind of intimately tied together in terms of how you would use them as part of a DevOps practice. 

MARK: So somebody could come in and maybe just say, all right, I have everything kind of figured out on my side. But I want some nice dashboard for monitoring. Stackdriver could kind of offer that through the monitoring service and the dashboards that are built in or the ones that you can customize. But if you're kind of starting from scratch, maybe you can adopt a lot of the different Stackdriver tools and have that almost Google centric SRE idea, right? 

RORY: Yeah, very much so. We want the tools to meet your needs. So if you just want to use monitoring or logging, that's fine. But you really get the most value out of the suite the more tools that you use. So for example, you might start by just configuring Monitoring and Logging. But then you'll see a lot of added value if you add in Trace, or Debugger, or Profiler. Again, at the end of the day, it all goes back to how can we help you debug issues that you're having in your system, and how can we help you understand your system. So Logging and Monitoring are very much kind of like the bedrock of that practice. 

But as an industry-- and it's not just Google. There are a variety of other cloud providers and other kind of service providers in the market that provide APM tools-- Trace, Profiler, that kind of stuff. So what we're realizing as an industry is that Logging and Monitoring are great for a lot of things. They're not always the best tool to debug really complicated issues. And so that's where, again, some of these second order tools, like the APM tools, come into play. 

MARK: So we've actually talked about a shocking amount in a short period of time, right? Way more than from the days I remember of just kind of-- like you said-- var dumping out a bunch of stuff and checking it for what I wanted to grab. There's been a lot of people looking to kind of adopt Stackdriver. Obviously, it has a lot of power behind it. And I think one of the more recent tools that has come out to help that is the Stackdriver Sandbox. Can you talk a little bit more about what that is, what its aim is, and how people can use it? 

RORY: Yeah, Stackdriver Sandbox is a cool project that has just come out of Google recently, where one of the things that we find is that people want to better understand how Monitoring, and Logging, and APM tools like Stackdriver work. But they're kind of afraid to set them up on their production environment, right? Like, they don't want to cause any disruption. They kind of want to just kick the tires in a safe way. Learn how the products work, learn them a little bit better, and then figure out kind of what's there on ramp to implementing them as part of their DevOps practice. 

And so basically, the Stackdriver Sandbox gives you a really easy way with essentially one script that you just run. And it will configure an entire kind of sandbox or test Stackdriver environment for you, where you can spin up any kind of test VMs that you want, spin up any Kubernetes clusters. You could create effectively a whole mirror of your staging or production systems there, but in a safe environment that once you're done with it, you can tear down and you don't have to worry about you accidentally left something running, and you're incurring billing and all of that. So it's a very cost effective and safe way to kind of better understand the whole suite of tools that Stackdriver provides. 

JON: That's awesome. So I'm wondering-- you mentioned that this is relatively new. And you mentioned a couple times that a couple of the products are going into alpha and beta. Can you tell us a little bit more about what the roadmap for Stackdriver's looking like? 

RORY: Sure, yeah, so one thing I would say is I would go check out a lot of the announcements that we just made in April at Google Cloud Next in San Francisco. All of the Stackdriver talks are available on YouTube. I think one of the conference websites is like cloudonair.google.com. Or I mean, basically, if you just Google for GCP Next and Cloud on Air, there's a huge list of the various talks that cover Stackdriver, and DevOps, and all of that. 

But a couple of things that we announced-- one is that our Profiler tool went GA. So we haven't talked about Profiler a lot yet. But it's also a really cool tool to understand the performance of your system. So basically, what it does is you basically include a library in your software and do some basic configuration. And what it will do is, as your service is running, it will periodically pull your CPU usage, pull your memory usage, and then basically, it profiles your call stack of your running application. And it will tell you, percentage wise, where you spend the most time. 

So for example, you could imagine you have a web server that is receiving requests and adding an item to a shopping cart. And so in the Profiler, you might go in and say, OK, why is this one URL endpoint, this API handler for the shopping cart, why is it taking so long? Because it's taking like five seconds on average to add an item to the shopping cart. So you go in on Profiler and you look at it, and you can clearly see, oh, this one function or this one method-- say, for example, like a JSON deserialization method or something like that-- this is actually taking up 90% of the time of my total response time. 

So as a developer, you're able to say, oh, I need to go in and optimize this function, I need to improve my code-- a variety of things, right? So it's basically a tool for developers that really lets them optimize their code. And what we've seen in practice is when big companies use it, not only are they able to improve the performance of their code, but that translates back into not just benefits for their users, but actually benefits for their Cloud spend. So again, the less time you're spinning CPU cycles, you might be able to save money on your compute cost or the amount of memory that you need for a particular VM instance. So it can be one of those cases where a little bit of time investment there can actually save you a large amount of money or a user satisfaction in terms of real world benefits. 

MARK: Yeah, I think that for the Cloud on Air that you were mentioning, if people can go to the Google Cloud Platform YouTube channel, if you search Stackdriver there, you'll actually see a fair amount of content. We've got this series called Stack Doctor, where we talk about some of the best practices and getting started with Stackdriver, as well as a bunch of kind of like webinars with Cloud on Air, where we'll talk about different areas. I think there was one recent one on the Profiler, for instance, and kind of how those things work and kind of stepping into it. 

I think there's a lot of resources out there for hopefully people to learn more about Stackdriver, because a lot of cases, it's not just going to be a plug and play, right? You're going to have to do a fair amount of work integrating it. But the more you integrate it and kind of the more you lean into it, like you just said, the more rewards you'll see. 

RORY: Yeah, and I think part of the value of Stackdriver, too, is that it provides a lot of these tools and services across the whole spectrum of DevOps needs. So for example, one thing that we see a lot of times talking to customers that are new to GCP, they might have one tool or service provider that just does logging, or another tool that does monitoring, another tool that does Trace, or Profiler, or that kind of thing. And obviously, we want customers to use the right tools based on what their needs are. 

But there is a value in using a single suite of tools that are all designed to work together and can kind of get you closer to that single pane of glass that is so often talked about in the DevOps community of what's a single place that I can go and I can see all the telemetry. And I can basically have a god's eye view of my system. I can see my logs, my metrics, my traces, all the telemetry altogether. 

MARK: With that being said, what would you say your favorite piece of Stackdriver is? 

RORY: That's tough. I mean, I'm a little biased because I work on the Monitoring tool. So I think that there is a lot of value that Monitoring provides. I also think that there's a lot of value in our APM tools. So Trace is particularly interesting because, again, if you have kind of a service based architecture, you can imagine a scenario. Again, we'll use the shopping cart scenario, where a customer clicks Add to Cart, but behind the scenes, there might actually be tens of different services that talk to each other. 

So the web server has to call the currency conversion service to convert from dollars to euros, and then it has to call the warehouse inventory system. Like, is this item still in stock? You can imagine just one simple web request having to cascade into all these different internal service calls. And so that's where using traditional tools like logging and debugging, it can be really difficult to figure out what's gone wrong or where the performance problem is. Because you might be looking at hundreds of log entries across tens of different services. 

So what Trace does is it gives you this kind of waterfall view that shows you all of the internal service requests stitched together. So you can very quickly and easily visually see what's taking the most time in all of these service requests, which internal request has the most latency and is affecting the performance of my system. So I think Trace is a really cool tool in that regard. 

Also, a tool that doesn't get as much love, but I think is super powerful, is Debugger. And so many people are familiar with debuggers in the context of developing your application, right? So you're writing code. You're testing it. It's not quite working right, so you put a breakpoint in your code, and then you click a button in your website, app, whatever, and then basically, when it reaches that point in your code, execution will pause, and you can see basically all of the context of what's going on in your call stack at that point. So you can see what are the value of different variables. You can see a whole variety of things. 

So again, this is a very common workflow for a developer. What's hard is that when you're running an application in production, you can't effectively pause the code, right? If a customer is having an issue, I can't pause the code which pauses execution for that customer or all the customers. But what's kind of cool and magical is that if you configure your website or application to work with Stackdriver Debugger, it will effectively take snapshots of the internal state of your application, such that you can actually link your code. 

So if your code is in GitHub, or Google source repositories, or whatever, you can actually set breakpoints in your code, and you can view at that breakpoint the context of live production traffic with a zero performance hit to your actual running web application. So it's pretty magical. It basically lets you debug production code on the fly with no performance hit. 

Also, another capability that it has is you can basically use it to insert log lines into production code. So I mean, as developers, how many times has this happened, right? Where you have an application, you roll out some new code, and there's a bug, or it's not performing like it should. So you say, OK, how can I figure out what's going wrong? So you go back to your code. You add a bunch more log lines. You add a bunch more logging. Now you have to redeploy your entire application just to see in your logs the state of things, what's happening, what's gone wrong. 

And so where that becomes really tricky is that you've now made it 10 times harder to isolate the actual issue because when you redeploy your code, there's a huge other variety of variables that could change, things that could go wrong, that kind of thing. So basically, without doing a new code deploy, Debugger allows you to insert log lines into live running code to better understand and diagnose and debug a problem. So I hope I did it justice through that explanation. It's a really cool tool. And frankly, there are not very many other tools like that on the market that can do live production debugging with basically zero performance impact. 

MARK: Yeah, I mean, I think that's a dream for a lot of people. But if I understood you correctly, your favorite part about Stackdriver is basically all of Stackdriver. 

RORY: Yeah, I feel like I kind of dodged your question and talked about everything. 

MARK: Well, it's cool. There's a lot of good stuff in there, right? 

RORY: Yes. Yes. It's hard to pick favorites. And again, I think it goes back to what I think is a common misunderstanding that you should really think of Stackdriver as separate products. I mean, there is, again, Logging, and Monitoring, and all of that. But they really are meant to work together as a suite of tools. So don't think of Logging as a hammer and Monitoring as a saw. Think of it as these are all the tools in a tool box that I'm using to repair my house, build a house-- whatever your hacky analogy is there. But they really are a suite of tools meant to work together. 

JON: Your explanation was spot on for me because I've actually used it in a same exact scenario where I needed to test something, and I was working with a teammate. So we were able to not only throw in log lines in the middle of our code without having to actually change anything. And using the Debugger, we found several edge cases that we definitely missed. And we have an internal project that I worked on that is currently in production and can be used internally by Googlers. And it was pretty awesome using the Stackdriver for the first time because I wouldn't have actually found those edge cases in that scenario. I'm actually kind of curious if there are any really impressive use cases that you've heard any of our customers using or any developers that you've met. I'm not sure if you can touch on that a little bit. 

RORY: Again, some of these are on the GCP YouTube channel. But this year at Next, we had quite a few sessions that were kind of co-led with customers. So Samsung did a session on how they use Stackdriver to monitor the performance of a lot of their systems. Obviously, Samsung is a huge electronics conglomerate. So they have a huge variety of web-based services that they have to run and maintain. So they talked about how they use Stackdriver to calculate SLOs for their services, crack error budgets, things like that. 

So yeah, there were quite a few different companies kind of at that scale that are using Stackdriver and have done public talk. So I would highly recommend checking out the YouTube channel. There were a lot of good talks, where it's not just the Stackdriver team giving you a sales pitch or telling you to use Stackdriver. It's, I think, a lot more powerful when you hear, like, these are customers that are having success with the product that are able to use it to meet their needs at very large scale. I think that's where the rubber meets the road. And you can kind of see the real value of the product. 

JON: Awesome. So we're running a little short on time. But I just wanted to give you the opportunity to speak on anything that we might have missed or anything you want to mention before we wrap things up. 

RORY: Yeah, I would just say that while there are a lot of products in the Stackdriver Suite, I think it's not something to be afraid of. I mean, whether you're using the Sandbox or whether you're just creating a test environment, it's really easy just to start using Stackdriver to kick the tires on it. And like I mentioned, if you go to the Stackdriver documentation, if you search for kind of the list of metrics, you can see across all the different GCP services, pretty much all of them are already integrated out of the box with Stackdriver. So our goal is to be the best set of DevOps tools for Google Cloud. So it's really easy to start using Stackdriver and to get value out of the box without configuring anything. 

I will also say that while our primary focus is on Google Cloud, we do support other clouds. We are a multi cloud service. So our Logging and Monitoring metrics support AWS. So if you still primarily are on AWS or maybe you have a hybrid multi cloud architecture, we definitely support that functionality. We also have a new feature we've rolled out with a partner called Blue Medora, where they have another agent that you can install that not only supports other clouds like Azure, it supports a wide variety of use cases. It could be Windows VMs, a huge number, like hundreds of different open source products and services. So the central point is that whatever kind of infrastructure you're running, whether it's on-prem, in the cloud, some kind of hybrid there of Windows, Linux, monolithic apps, microservices, Stackdriver will support your use case and help give you observability into your systems. 

MARK: Very cool. Well, thanks so much for joining us, Rory, and telling us a lot about-- I think a whole bunch about the different tools that are inside of Stackdriver. And then I think that for people who are interested, hopefully, there's a lot of tools out there for them to kind of get learning pretty quickly. 

RORY: Yeah, I would say check out the Stackdriver YouTube channel, along with the GCP channel. There's a lot of great content on there. One of our DevOps engineers, Yuri, has a YouTube channel or show called Stack Doctor. So that's S-T-A-C-K Doctor. And he digs into a lot of the finer points of Stackdriver. He'll show you how to configure various things, how to do kind of advanced use cases. That's really good content. And then also, feel free to follow our blog. We have new product announcements there. We post a lot of best practices there, really getting into a lot of the details about how to best configure your alert policies, how to best configure your logging setup. So there is a lot of content out there for people that are interested in how to structure their DevOps practice on Google Cloud and beyond. 

JON: Awesome. Mark and I would like to thank Rory for joining us. And Rory, once again, it's been a pleasure. 

RORY: Yeah. Thanks, guys. Thanks for having me. 

JON: Well, thanks again for helping our listeners understand the cool things that you could do with Stackdriver and the new features and new announcements that have recently just come out. 

MARK: Yeah. There's always a lot of things on the roadmap. And Stackdriver is such a broad set of different tools, like we talked about. I think that you can definitely find something in there that you can integrate with your app to hopefully increase the observability or just make life a little easier. 

JON: Right. And I know that it's made my life quite a bit easier, especially when I've actually deployed my application, and I really need to debug it, but on the local level, I just don't really want to do it. I'd much rather do it while my app is running in the Cloud. So let's get into our question of the week. 

[MUSIC PLAYING] 

I think you've seen a blog post that probably sparked this. But I guess our question is, how do you decide between App Script and App Maker when you actually want to build out your application? 

MARK: Absolutely, and just like you mentioned, there is a blog post that kind of dives into the details about why you might choose one over the other. They're both great tools to create and customize the experience for users on the G Suite side of things. But there's a couple of key differences. And when you're trying to decide between them, the important things to keep in mind are, how much do you want to rely on the G Suite experience, or do you want to build a custom user interface? 

Are you just kind of adding additional functionality, which is something that App Script is great for, right? It's based on JavaScript. You're able to go in and kind of say, OK, well, users using this sheet, let me add some custom JavaScript functionality, so that when they do this, I can automate this task for them. Or are you looking to build a self-contained experience, where you have full access, and you can hook it up to Cloud SQL so you can actually back it with a full database and then kind of create this curated content for them? That's much more of what App Maker should be. 

So you kind of have that choice between the two of them. Again, the blog post kind of asks a couple of questions and tells you why you might consider one over the other. But either way, ultimately, people, especially we at Google, but I think a lot of businesses, spend a lot of time in G Suite, whether it's Docs, or Sheets, or whatever. There's so much going on in there. Anything you can do around automating or making tasks easier in there or adding additional functionality, both of them are great ways to do that and really just save time or really kind of add surprising features. 

JON: Awesome. I probably now will look at this blog post because I definitely do a lot of application design and creation around the cool gaming things that I work on. It'd be kind of cool to see the difference between App Maker and App Script personally. But also, it will help me make the decision on which I should probably use for my application, just to improve that production process. 

MARK: I mean, absolutely. I do a tremendous amount of spreadsheet work, and every time I put something into a spreadsheet, if I have to do it more than like five or six times, I have to ask myself, is this something easier that I can actually just build a script for? Which is always going to be a tradeoff, depending on exactly how much time do you want to invest in making it reusable. But every spreadsheet and some docs that I work on, it's just like I want a script to help me with this. 

JON: Awesome. So Mark, what will you be doing pretty soon? What are you getting into? Any travel you got planned? 

MARK: I'm not a big traveler. But I will be going to New York. Hopefully, we can maybe sit down and play some Smash Brothers while I'm out there. I think you'll be in town, right? 

JON: So for me, I'll be in town, and I'll be attending Games for Change, which is going to be awesome. This is my first Games for Change, and I'm really excited to go. For those of you that do not know, Games for Change is essentially a conference that brings game developers who are using games as a platform to empower social impact and educate those in the actual power behind games. 

Because a lot of people don't really know how much influence games have. And it's great for kids because games are a really big pivotal part of your childhood for most children, in some way, some fashion. And it doesn't actually have to be video games. But games in general is a very big platform, because it brings up a lot of social issues and can help educate people on biases. So it'd be great to actually see how a lot of developers are actually using these games to make a conscious effort to make things better. 

MARK: Yeah, it's really cool to see all of the smaller indie game studios or even just individual people who are creating games to kind of show not only some of the social issues that exist, but also to help enable people to kind of create their own games. Or I think we've seen a couple of games that try to take machine learning and explain that in a much more approachable way. And I think there's a wide variety, whether it's teaching people about STEM technologies or whether it's more on the social and cultural issue sides. 

I think that games are just a different kind of medium for people to actually approach the education world with. Yeah, so I think it's like the 15th or 16th summit they've had. So I'm sure there's a lot of cool things that have changed over the past decade. So it's really great to see a lot of people kind of come into the same place and talk about all the things that they're working on and all the ways to enable people. 

JON: And I'm glad that I am currently working in games and also trying to make a conscious effort to help developers and users all over the world. Well, that'll wrap things up for us on this episode of the Google Cloud Platform podcast. Thank you for listening, and we'll all see you next week. Thanks, Mark. 

MARK: Thanks, Jon. We'll see you next time. 

[MUSIC PLAYING] 

JON: We don't have to do this. That's what the great editors are for. You guys are awesome.