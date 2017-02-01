+++
audioDuration = "00:35:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.58.mp3"
audioSize = 51604329
categories = ["Java", "Stackdriver"]
date = "2017-01-25T01:07:49Z"
description = "In this second episode of the year we'll talk Java! Ray Tsang and Rajeev Dayal tell us everything there is to know about Java on Google Cloud Platform."
draft = false
episodeNumber = 58
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Java with Ray Tsang and Rajeev Dayal"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/NjM98RDDHkS"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5q45pd/episode_58_java_with_ray_tsang_and_rajeev_dayal/"
+++

In this second episode of the year we'll talk Java!

[Ray Tsang](https://twitter.com/saturnism) and Rajeev Dayal tell your co-hosts [Mark](https://twitter.com/Neurotic) and
[Francesc](https://twitter.com/francesc) everything there is to know about Java on Google Cloud Platform.
You will learn about what you can currently as a Java developer on Google Cloud Platform,
but also what to expect on the future.

<!--more-->

##### About Ray

[Ray](https://twitter.com/saturnism) is a Developer Advocate for the Google Cloud Platform. Ray had extensive hands on
cross-industry enterprise systems integration delivery and management experiences during
his time at Accenture, managed full stack application development, DevOps, and ITOps.
Ray specialized in middleware, big data, and PaaS products during his time at Red Hat
while contributing to open source projects, such as Infinispan. Aside from technology,
Ray enjoys traveling and adventures.

##### About Rajeev

Rajeev Dayal is an Engineering Manager at Google New York that manages the Cloud SDK and Java on GCP efforts. 
He's been in the developer tools space for nearly 10 years, previously working on the Google Plugin for Eclipse and 
GWT (where he still has nightmares about browser quirks with Internet Explorer 6) at Google's Atlanta office.

##### Cool thing of the week

- A 3-hour crash course on deep-learning, TensorFlow and more. [blog post](https://cloud.google.com/blog/big-data/2017/01/learn-tensorflow-and-deep-learning-without-a-ph-d)
- Build a Slack bot that uses the Cloud ML Natural Language API [github](http://amygdala.github.io/ml/2017/01/14/nlapi.html)
- Google Cloud Audit Logging now available across the GCP stack [blog post](https://cloudplatform.googleblog.com/2017/01/Google-Cloud-Audit-Logging-now-available-across-the-GCP-stack.html)

##### Interview

- Java on Google Cloud [docs](https://cloud.google.com/java)
- Java on App Engine Standad [docs](https://cloud.google.com/appengine/docs/java/)
- Java and Dataflow [docs](https://cloud.google.com/dataflow/docs/quickstarts/quickstart-java-maven)
- Google Cloud Tools for Eclipse Documentation [docs](https://cloud.google.com/eclipse/docs/)
- Google Cloud Stackdriver [docs](https://cloud.google.com/stackdriver/)
- Using Stackdriver Trace with Zipkin [docs](https://cloud.google.com/trace/docs/zipkin)
- Stackdriver Debugger [docs](https://cloud.google.com/debugger/)

##### Question of the week

- I want to move data from S3 to cloud storage - is there an easy way to do this?

Yes! This is the best way to do it [docs](https://cloud.google.com/storage/transfer/).
You might also want to check out [Minio](https://github.com/minio/minio).

##### Were will we be?

Mark will be at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud Next](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc is doing a European tour, after speaking at [golab](https://golab.io)
he'll speak at [GolangBCN](https://www.meetup.com/Golang-Barcelona/events/237049935/).
The week after he'll be in Paris and right after he'll be in the Go Devroom at
[FOSDEM](https://fosdem.org). A bit later he'll also be at [Cloud Next](https://cloudnext.withgoogle.com/schedule#target=google-cloud-endpoints-serving-your-api-to-the-world-8eaeb271-f0ea-4638-af94-16c0b2b80bf6).

{{< transcript "FRANCESC: Hi, and welcome to episode number 58 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey Mark, how are you doing?" >}}
MARK: I'm very sleepy. You got me up very early this morning because you're in Europe. 

FRANCESC: I know. I'm in this beautiful place called Torrelles de Llobregat near Barcelona, working from home. Yeah, it's like 4:20 PM, so it's like 7:00 AM in San Francisco? 

MARK: Yeah. You got me up super early. So thanks for that. I love you. Thank you so much. 

FRANCESC: I'm not even sorry. I'm actually not even sorry about that. I'm sorry about the topic of the podcast today. 

MARK: You're not sorry. I mean, so today's topic is where Francesc spontaneously combusts, because we're talking about Java. 

FRANCESC: Yay. 

MARK: But we have a wonderful conversation about Java and Java on GCP with Ray Tsang and Rajeev Dayal. You may recognize Ray from previous episodes as well. 

FRANCESC: Yep, such as many others, actually. The one I can remember is the one about Google Cloud Spin-- yeah, Google Cloud Spin. That was fun. But I think he has also been to another one. I do not remember now. 

MARK: That's all right. And then at the end, we're going to have a discussion about moving data between cloud providers, specifically if you need to move data from S3 to cloud storage. Is there any easy way to do that? But before we do that, why don't we get stuck into our cool things of the week. Francesc, I know you found a bunch of really interesting ones. 

FRANCESC: Yeah. There's actually two of them that I am very excited about, because there are things that I'm actually going to do. The first one is a TensorFlow course. It's a crash course on deep learning with TensorFlow. And it's three hours long. And it doesn't require a PhD. That's what they say. So I'm very excited because, I do not have one. 

MARK: I do not have a PhD either. 

FRANCESC: Yes. So I'm very excited about going through it, learning a little bit more about all the deatils of TensorFlow and how to actually use it for something specific, like try to build something with it. I've been thinking about it for a while. And I think that that's a perfect opportunity to try it. 

MARK: Yeah. It looks like it's video course. Is that right? 

FRANCESC: Yeah. It's actually a video course. It's, as I said, a bunch of hours. But it's definitely worth it. It's done by [INAUDIBLE], one of our teammates, a developer advocate for Google Cloud platform in Paris. 

MARK: Very, very cool. So speaking of teammates, one of our other developer advocate teammates, Amy, or AmyGdala as she is on Twitter, has written a blog post about combining CloudML natural language API and running a Slack bot, and how they can be integrated together. 

FRANCESC: Yeah. It is really cool, because there's two things. I mean, there's bots, and everybody likes bots, of course. But also, there is all the parts about CloudML, the natural language API is super powerful. I don't know if you have played a little bit with it? 

MARK: A little bit. Little bit. 

FRANCESC: Yeah. One of my favorite things is that it does entity recognition, which is basically you can say things like, New York, and it says, yeah, New York. But you can also say the Big Apple, and it will say, yeah, New York. So it's actually able to understand all of these complex concepts and tie them together, which is very nice. 

MARK: Yeah, what I thought was quite interesting about this, too, is it does sentiment analysis in terms of, like, are these positive comments or negative comments, and it can respond. But you can also do like topped entity listings. So you can start to see what the topics of conversation across time have been within the Slack channel, which I think is actually really, really cool. 

FRANCESC: Yeah. Yeah, I will not get into the details on the Slack channel where she's talking, because it seems like it's related to politics, which I try to avoid lately. Anyway, I think we have one more cool thing of the week, though. 

MARK: Yeah. So we talked about this a little bit last week, where we're talking about cloud audit logging, so that you can determine who does what and where and when and how on the Google Cloud platform. But literally, last week when we announced the podcast, at the same time there was a blog put out explaining that we are significantly expanding a set of products that cloud audit logging is now integrated with, which is really cool. So it now works with Computer Engine, Container Engine, Data Proc, Deployment Manager, Cloud DNS, Key Management Service, Cloud Storage, and Cloud SQL. 

The above integrations are all in beta, but it does work across the board. So it's pretty sweet. And the article goes through how you can interact with the audit logs in Cloud Console, how you can interact with them in Stackdriver. You can do alerts. And even talks about, if you're signed up for the alpha for cloud functions, how you can also use cloud functions to interact with your audit trails as well. So you can have automatic responses to certain actions that people take within your Google Cloud platform project, which I think is pretty cool as well. 

FRANCESC: Nice. So yeah, I think that is important to remember to remind our listeners, just in case you're wondering, what is the difference between cloud audit logging and Google Cloud IAM, because somtimes it may be a little bit confusing. The way I like to put it is, Cloud IAM says who is allowed to do what. And Cloud audit logging says who did what. So it's not if you're allowed or not. It's like, did you actually do it. So it's good for logging, like if you have something that people are allowed to do, but you want to make sure they didn't do it too often, or they have a reason to do it. That is the product to use. 

MARK: Sounds good. All right. Well, I think that's probably enough for cool things of the week. I'm sure we could go on for a while. But why don't we go have a chat with Ray and Rajeev and talk about Java? 

FRANCESC: I don't want to. No, it's OK. Let's do that. 

MARK: Sounds good. Today we are joined by a teammate and also by an engineering manager. We are joined today by Ray Tsang and Rajeev Dayal. Ray, how are you doing today? 

RAY: Pretty good. How are you? 

MARK: Good. And Rajeev, how are you doing? 

RAJEEV: I'm well. I'm well. Thank you for asking. 

MARK: Excellent. Excellent. So before we get stuck into all the good things, why don't you tell us a little bit about yourself? 

RAJEEV: Rajeev, why don't you go first? So I'm Rajeev, and I'm an engineering manager here at Google. I've been at Google for about 10 years or so, so quite a while. Right now I'm managing teams that work on the Cloud SDK and Java on Google's cloud platform. So I'm really focused on cloud developer tools. Before that, I used to work on the Google Web toolkit, or Gwit as it's now called. So yeah, some of you may remember that. 

MARK: I remember that. 

FRANCESC: I used to use that a long time ago, yeah. It's cool. What about you, Ray? Why don't you tell us a little bit about what you do. 

RAY: Sure. So I'm a developer advocate. I'm based in New York. And I focus a lot on the Java communities and Java developers, and making sure that the experiences with Google Cloud Platform is the best for the community as well. 

FRANCESC: And if I'm not mistaken, it's your second episode with us? 

RAY: That's right, yes. This is my second episode. Thanks for having me back, given that the last episode-- I don't know how well we did. I'm sorry. 

MARK: It was awful. 

RAY: Oh, thank you. 

MARK: No, I'm just kidding. 

RAY: But it was the Cloud Spin episode, which had a lot of fun with it. So I'm happy to be back again. 

FRANCESC: Awesome. We're very happy that you're back. 

MARK: Excellent. All right. So we are having an episode about Java. We have talked about some other languages, so we figured it's good to come around to Java as well. So I guess I'll ask Rajeev, why Java? Why is Java important to GCP? What's the story there? 

RAJEEV: Well, Java, it's an important language. It was released in the mid '90s, and then since then it's just become pretty much a staple language that's used everywhere, honestly. It's used very heavily in enterprise. I think the language index, the TIOBE index still shows Java as the most heavily used language across the board for all sorts of applications. So yeah, it's just a hugely important language. 

I think one of the reasons for that is because it's just a pretty versatile as well. It's one of those languages, some people say like, oh, I wish it was more expressive, or it's too verbose. Some of those things may be true, but it's also shown that you can build like large applications and services with it. You can have really big code bases and they're still maintainable. So it's really important that we support Java developers and such workloads on GCP, especially as more enterprises are moving into the cloud. 

FRANCESC: Cool. So I know that one of the places where we talk about Java all the time on the cloud is App Engine. But what other things are there in Google Cloud Platform that are related to Java? What is the best places to run Java on Google Cloud Platform? 

RAJEEV: So I'll take a stab at this, and then Ray can jump in. I think it really depends on what you're doing. So App Engine Standard actually is a good place to run Java if you really care about spiky traffic, very fast scale up and scale down. You want to add reactiveness to that, and you're OK with being a little more constrained in what you do because you want the auto scaling to work for you. So that's a very good environment for Java, actually, because you don't have to think about the scaling. 

If you're working with containers, Kubernetes, and then running it on GKE is obviously a great environment for that. This is basically hosted Kubernetes, so there you kind of have more control. You're working with containers. And Kubernetes, yeah, you can handle, especially if you're sort of breaking your application up into micro services, you can handle like pretty heavy traffic and whatnot. You can kind of do what you want there. 

And then of course you've got Google Compute Engine, or GCE. And that's just a raw VM. So obviously you can do what you want. It's just that all the setup is up to you. So there's lots of different places to run Java workloads on Google's Cloud Platform. It really depends on what you want to do. 

MARK: And I believe you can also run Java on some of our big data stuff as well, like data flow and some other tools? 

RAJEEV: Yeah. That's correct, actually. That's correct. Actually, the data flow SDK is actually Java. That's also really popular. 

MARK: Excellent. Ray, I know there are some other places where Java is supported, not just in being able to just run your code, but other things like that, so like tooling and SDKs and IDEs and stuff. Ray, do you want to talk a little bit about that? 

RAY: Sure. So actually, Rajeev and another engineer team lead here, who's not here today on the podcast, but Patrick, they actually developed all the toolings for Java. So we have really good tooling support if you are into the building tools, so for Maven and Gradle, we have plugins for those. For the IDEs, we also have IDE integrations with Eclipse IntelliJ. 

So the idea there is for you to be able to start a project, and develop your applications, and being able to deploy into some of those environments that Rajeev just mentioned, seamlessly, directly from the IDE. But also if you need to integrate with say, a CICD platform of some sort, or manage your own deployment, you can also do that from the command line, from your plugins as well, from the build tools. 

RAJEEV: And yeah, just adding onto that a little bit, we've had in the past plugins for Eclipse, like the Google plugin for Eclipse, which has been there for a long time, and is being used to support Gwit, and actually App Engine for a long time. We've invested back in that. We're building new Eclipse tooling that is just purely cloud focused, actually. So we're putting a lot more investment into Eclipse. And we'll expand that functionality as well to handle things like data flow to make it a lot easier to work with data flow. There already is a plugin for Eclipse for data flow. We'll integrate those two together so it'll be in one package. 

MARK: So also I've been seeing a lot of activity on the IntelliJ plugin as well. Can you talk a little bit about that as well? 

RAJEEV: Yeah. Actually, so that whole thing started with, let's see, with Android Studio. So Android Studio was released in, I think it was like 2013. It is built on the IntelliJ Platform, as I think most people know now. And actually, we did cloud integration in there a while back, actually. And the idea back then was, oh, create an App Engine backend and use Cloud Endpoints to wire that up to your mobile application, with the thought being that, OK, you just want a simple backend a way to talk to with REST. 

Now we have other solutions, like Firebase, which are better suited to that. But that's kind of what we started with. And then what we did was we basically spun that back out and improved it into just like an IntelliJ plugin for Community Edition and Ultimate. If you're just a cloud developer, to be able to work with App Engine, and that's going to be our basis. And we're going to expand upon that and build more GCB features into that plugin. And it's timely, because IntelliJ's popularity has really taken off in the past two or three years. So we really need to have a good story in both IDEs because the community is split across both of them. 

MARK: I use IntelliJ a lot. I don't actually write any Java in it. 

[LAUGHTER] 

RAJEEV: Yeah, I mean, there's that, too, right? It's pretty good for almost every language it supports. They're very good. Yeah. 

FRANCESC: Cool. So since we're talking about other languages, what about the other languages that run on the JVM? We've been talking mainly about Java, but what if I have a Scala application? Can I run Scala? I mean, of course I can write it on Google Compute Engine, but can I run it also on App Engine? 

RAY: Yeah, I can take a stab at it. So for example, with App Engine Flex, you can basically run whatever you want. So it's not limited to just pure Java or any certain languages that it supports. But if you really want to, you can definitely just write in whatever languages you wish to write in, including any of the other JVM languages. And just be able to package it up properly, or even just package it up into a document container. 

And that's known as you're listening to the right ports and responding to the right health check points, end points. We will be able to serve those applications directly in App Engine Flexible as a pass. Now, of course, if you have the container, you can always just run it in a Google Container Engine if you need fine control over your application. So you could do it either way. 

MARK: What about on standard? Is it a bit hacky? I have to ask. I'm curious. If I wanted to take my closure app and run it on App Engine Standard, could I do that? 

RAY: Now it depends. So closure app, can you actually package it into a Word file? Because you need to be able to deploy that into a Tomcat, also a Jetty container at the moment. So for example, you cannot at the moment run any of the .jar files if you have a self executable .jar. But if you can package up your app in a standard JD container in a Word file, then you may be able to run it. You should give it a try, Mark. 

MARK: Yeah. I'll take it for a spin. 

RAJEEV: If you do enough hackery, there's probably some way to get it going, right? I bet you there is some way to get it going, yeah. 

FRANCESC: And could you share if there's any actual plans on doing more about these languages? Like for instance, we recently had someone new in our team, Guillaume Laforge. He created Groovy. What about Groovy? On App Engine Standard, I'm talking about. 

RAJEEV: So that's a good question, actually. So I mean, there isn't anything directly in the pipeline that I know about to support that. But I do know they're working to-- it sounds kind of weird-- to make the App Engine Standard environment slightly more flexible. So that basically you're still running Java. You're kind of in a JVM. But there's fewer restrictions. So in a world like that, I could see more of that being possible. But I couldn't concretely say yet, honestly. 

FRANCESC: Cool. That's fair. So I have a question. As some of you may know, I don't write Java that often. I'm more of a Go person. I know, it's shocking. 

RAJEEV: That's OK. 

[LAUGHTER] 

FRANCESC: One of the things that I've heard about is that when you create micro services in Java, it's not really a micro service because the JVM is so big. Is that actually a problem? I'm sincerely asking the question. For instance, if you have on GKE, is a container going to take longer to start because of the JVM being large? Or is there any of those issues that people that are writing Java should think about? 

RAY: As far as micro services is concerned, the actual code that you write in Java, given the recent framework developments like Spring Boot and many, many others, you actually write very few code to achieve a lot because of all the common tasks that these frameworks will be able to take care of for you. And so the code that you write is actually quite small. You can really focus on the business problem that you need to solve. In the end, the end package, the actual binary file that you compile is also very small. So the JVM is really there to support the runtime environment. 

Now with document containers, of course, is the concept of layering. So you can layer the JVM image underneath of your app so that you don't have to, say, redeploy hundreds of megabytes of JVM every single time. So the actual app that you deploy could be as small as the code that you actually just changed. And that is a powerful concept because that will then give you a very rapid deployment across all of the service that you have. You don't have to really manage which version of JVM you should be running because all of that will be encapsulated in one of the image layers that you depend on. And the startup time is actually quite fast. These apps can start in seconds, to be honest. So that shouldn't be much of an issue. 

MARK: Nice. Cool. Nice segue, I think. You mentioned Spring there. I know we've also talked about Jetty in a couple of things. If I'm a Java developer and I'm going back to world when I used to live a lot in the JVM, are there particular frameworks, or as you talk about Jetty things like basically runtime environments, I guess, that are better supported than others? So if I'm coming to GCP and I want to write a Java app, should I be looking at particular frameworks for particular runtimes to get my app running so I can run it on the web? If that makes sense. 

RAY: So at the very basic of it, is the GDE standards with the servlet. So that's definitely supported. So even today, since App Engine Standard, GDE spec has been supported in a way. So you can write a servlet. You can serve your JSPs, very standard stuff. In Flex, you can run even more. Basically removing some of the traditional App Engine Standard sandbox restrictions. So you can run basically whatever framework that you want to run. But Rajeev, you want to add to that? 

RAJEEV: Yeah. So I think you covered it well. I guess what I would add is there is a bunch of work that is in progress, so it isn't there yet, to integrate more of these frameworks within GCP. So for example, in Spring, there's things like Spring Cloud Stream, and we want to integrate that in with our Cloud Pub/Sub, so that you have a nice integration there. You could wire it up yourself if you wanted to, but that's obviously a bunch of work. And we want to have something like that ready for you when you come to the platform. 

Another example is we have the stack driver diagnostics platform. That's part of GCP. So you know this gives you information on your application as it runs. You have stats. You see traces and whatnot. And you see logging, error reporting. We want to wire that into what Spring also has in that vein, like Spring Actuator and whatnot as well, so that basically you can get that for free as opposed to having to wire all of that up yourself. 

So these are integrations that we're currently working on right now. They don't exist yet, but we want to make it a much better experience when you come to our platform with Spring, and you just get a lot more for free. 

MARK: Cool. Since we're talking about stuff that's coming, is there anything else you want to talk about that might be in the pipeline that Java developers might be excited about? 

RAY: So one thing that I will mention is something that actually just came out, I think, before the new year. It is our Zipkin connector. So if anyone who is interested in developing micro services in general, a lot of it you might need to be able to trace the calls across multiple services. And in the Java world, a lot of it is using Zipkin and you can tie it up with Spring Boot if you want to. 

So rather than maintaining, say, your own Zipkin server, there is actually a proxy now that can take in Zipkin requests for the tracing. And then you can forward the trace information directly into Cloud Stackdriver Trace. So what that means is you have less than to maintain, and you don't have to change your code in order to be able to trace your applications. So you can browse all the trace information directly from the GCP console. 

RAJEEV: Another cool thing, it isn't super new, but I don't know how well known it is, is the Cloud Debugger actually. So this is a pretty cool piece of technology. It's actually what you might call like a post-mortem debugger, or it's a production debugger. So when you set a breakpoint, you're not actually stopping execution. What you're actually doing is you're saying that, OK, you want to take a sample or trace of some other requests and sort of a snapshot of the stack at that point in time, so that you can come back later and you can view, OK, when I hit this breakpoint, what was going on at this time? 

And this is pretty cool because normally you can't use this type of feature in production, because you would halt execution, and then no one could go to your site, and that's no good. But what we've done here is now you can even set conditional breakpoints. So on a certain condition you trip this, and then you can be like, oh, what happened here? This was hit. Why was it hit? Let me walk through. And we've actually wired integration into IntelliJ so you can actually walk through the stack and look at the stuff as you would just in a normal debugger. So you're not actually breaking execution, but at least you have a familiar interface into that. 

And they recently added a new feature. I think it's in the web UI. We haven't entered the IDE yet, which is called like dynamic log points. So how many times have you had where you want to know more information because something's going wrong in production, and you're like, oh, jeez, I wish I had added that log statement. And then you go, you add the log statement, you rebuild, you redeploy. Hours go by. And then you see the log, and you're like, oh wow, I wish I had even more log info, and you do that again. 

With dynamic logs, you actually can set at a point in the code that's in production on a source line and say, I want to print this information, these variables. It actually sets that dynamically in the bytecode. So without having to redeploy or anything, you actually can set a logging statement in there, and then you'll start seeing the logging statements as they're hit. So that's a really powerful feature to figure out what's going on in production, saving you probably hours or days of redeploying with more logs and more logs and more logs. So that's a really cool feature. 

FRANCESC: Yeah. As a Gopher, that makes me super jealous. 

[LAUGHTER] 

RAJEEV: One day. One day you guys will get there. 

MARK: So I feel like we should definitely take a stab or take a look at the elephant in the room. Java 8. I believe that's what state that's in. How's that going? 

RAJEEV: Java 8. That's a good question. That's a very good question. So Java 8 actually works quite well on App Engine Flex. If you go to the App Engine Flex environment, we have supported run times for Java 8 or Open JDK 8 and plus Jetty 9 or just open JDK 8. And obviously you're like, what are you doing on standard? Why isn't it there? And you're right. 

Well, that's actually in the pipeline. We can't promise an exact date yet, but it's actually being worked on, and it's looking very promising. So this is something that's top of mind for us. 

FRANCESC: Cool. So I just wanted to add one funny thing. When you said the elephant in the room, I thought about Hadoop. 

[LAUGHTER] 

MARK: Different elephant. 

RAJEEV: There's a lot of elephants. 

FRANCESC: So I guess we're kind of running out of time, but is there any other topic that you'd like to discuss? Something that we might have missed, Ray? 

RAY: No, I think I'm OK here. One thing Francesc, when are you going to try Java again? Just wondering. 

FRANCESC: When it has support for Go routines. You can call them Java routines if you want to. 

MARK: You can Go routines in alternative JVM languages. 

FRANCESC: In alternatives. Actually, I'm thinking about learning Closure. 

MARK: Oh, it's nice. 

FRANCESC: It's like Java, just better. Just kidding. I'm not a troll. Just kidding. 

RAJEEV: Yeah, we're basically going to keep investing in Java as much as we can until you switch over to Java. We're full steam ahead. Going to get you off of Go. 

MARK: And you know what? That's an incentive for you never to touch Java, so that it always gets better and better and better. 

FRANCESC: I'm an important part of the Java community by not being part of it. 

MARK: Exactly. Exactly. 

FRANCESC: What about you, Rajeev? Is there any topic that you'd like to add? 

RAJEEV: No, I think we covered everything pretty well. This was great. I guess all I would add to it is that, yeah, we're really serious about Java, and we're putting a lot of resources and investment behind it, because there's just so much we can do to make it better for Java developers on GCP. There's just tons we can do, so we're putting a lot of attention there. 

MARK: Excellent. And I know either one or both of you are going to be at particular events coming up as well. 

RAY: Yep. So I do try to go to plenty of Java related events and Java user groups. So I'm going to be traveling quite a bit around. One of the first stops is going to be J Focus in Sweden in February. So I'm looking forward to that. And if you do see me on the road or if you want to chat, I would love to learn about your experiences and how you want to use the platform and provide any of the feedback to us. Love to get it also back to the engineering teams as well to make our experience better so that developers will love to use. 

MARK: And right after that I think, we're going to meet at FOSDEM? 

RAY: Yeah, we'll see you at FOSDEM? Oh, no actually, FOSDEM comes before that. So I'm going to be in FOSDEM for the weekend, and then go straight to Sweden right after. Yeah. And there is also the Devoxx US. That's going to be their first Devoxx in the United States. So I'm going to be there with many, many other people as well, including Guillaume Laforge and many of the engineers. We're going to be there, so looking forward to meeting everyone in Devoxx US too. 

MARK: Very cool. Excellent. Well, to both of you, thank you so much for joining us. It has been a pleasure and a delight talking to both of you. 

RAY: Thank you. Likewise. 

RAJEEV: This was great. Thanks so much. 

FRANCESC: So thanks, again, to Ray and Rajeev for taking the time and making me discover that actually Java is a very interesting language with a vibrant community. 

MARK: Yeah. It was a really good interview. Obviously Java is very much alive and well. 

FRANCESC: Yeah, that's for sure. 

MARK: Yeah. I used to use the JVM a lot, so it's a warm spot in my heart for it. And so it's great to see all the stuff that's going on there. 

FRANCESC: I like to joke about it, but I know it is a very interesting language, because you know, there's basically half of the internet that is built on it. So it's good to have it, and have a good place to run it like Google Cloud Platform. Anyway, I think it's time to go with our question of the week. 

MARK: So we had a really interesting question this week, I think, in terms of say you have a whole bunch of data on Amazon S3, for example. And you want to transfer data to Google Cloud storage. Is there an easy way of doing that? 

FRANCESC: Very interesting question. But I actually have a pre-question for that, which is do you know what S3 stands for? 

MARK: I do not know what S3 stands for. What does S3 stand for? 

FRANCESC: I'm almost sure it's Simple Storage Surface. But I'm not completely sure. But I think so, which is kind of a cool name. But yeah, everybody calls it S3, and then it's like, what? Anyway, so yeah, how do you transform it from AWS S3, how do you move that data to Google Cloud Storage. I actually do not know. 

MARK: So it is interesting. So we do have a GSUtil command line tool for working with cloud storage. You can use the GSUtil utility-- that's sounds redundant-- the GSUtil tool to work with Amazon S3 buckets as well. However, probably the most efficient way of doing things is we do have this thing called a cloud storage transfer service, which is specifically set up for transferring data from one cloud storage provider to another, which is kind of cool. 

Obviously you're going to have network costs from moving from one to the other, so keep that in mind. But you're able to set it up so that you have like basically sources and sinks. So where do you want it to go from? Where do you want it to go to? And then you can set it up to happen periodically or maybe just once off. There's a programmatic interface. You can go to the console UI. And there's a series of rest APIs as well. So you can really kind of pick and choose how you want it to work. But it is a nice and easy way of just transferring that data across if you need to do that between different cloud providers. 

FRANCESC: Cool. That sounds indeed very useful. I don't know how often that kind of things are needed to be done, but if you're thinking about starting to try Google Cloud Platform and you need to pass all your data around, it's probably the best way to do it. 

MARK: Yeah. And I think it's kind of cool. It's one of those things that you really need it when you need it, but if you don't need it then you don't. It's one or the other. But if you don't know it exists, then it could be really painful to pull everything down, say, locally like via GSUtil and then push it back up again into the cloud. Whereas you'd much rather run it over the big fat pipes that usually run between all the big data centers. 

FRANCESC: And if you need to do syncing in between AWS and GCP, I think that there is a thing that I should mention, because it's a tool we're in in Go and it's open source. It's called Minio. And they're really cool, because they're reading Go, so of course it is a cool tool. But check it out. It actually supports a bunch of different storage services from different clouds. So there's S3, but also there's Google Cloud Storage. They have their own media server. It also supports OpenStack Swift. So it's definitely worth having a look if what you need is a little bit more complex than just passing from one side to the other ones. 

MARK: Excellent. Well, Francesc, before we run off today, I think we should remind people how to get in contact with us so they can send us emails, and cool things of the weeks, and questions of the week, and all sorts of other good stuff. 

FRANCESC: Yes. Because we haven't done that yet in 2017. So you say the things, I say the places? Or whatever. 

MARK: OK, so we'll start with if they want to go to our domain name, where can they go? 

FRANCESC: That is GCPPodcast.com or Cloud.Google.com/podcast. 

MARK: If they want to email us, where should they do that? 

FRANCESC: They should send an email to hello@GCPPodcast.com. 

MARK: If they want to find us on Reddit? 

FRANCESC: It is r/GCPPodcast. 

MARK: If they want to find us on Google Plus? 

FRANCESC:  GCPPodcast. 

MARK: And if they want to find us on Twitter? 

FRANCESC: @GCPPodcast. 

MARK: And last but not least-- 

FRANCESC: There's a theme going on. 

MARK: There's a theme, definitely a theme. And finally, if they want to find us on Slack, where can they find us? 

FRANCESC: That is the hard one. On Slack, there's a podcast channel inside of the Google Cloud Platform community that you can join by going somewhere? 

MARK: Bit.ly/GCP-Slack. 

FRANCESC: Cool. We'll have all of those just in case people are wondering. They're all in the page anyway, so just go check it out at GCPPodcast.com. OK. So before we go, I guess it's time to ask where are you going to be next week? Actually, where are you now you? You're in San Francisco. I'm in Barcelona. What are your plans afterwards? 

MARK: So I'll be at GDC, the Game Developer Conference here in San Francisco. We're sponsoring a bunch of events going on. So we are sponsoring Women in Games. If anyone is going to be at that party, we'll be there. We're sponsoring [INAUDIBLE] games as well. So if anyone's going to be there, come say hello. We'll be around. I think if you're looking for us, we'll definitely be hanging out by the Improbable booth, because they're a partner of ours. 

And we have a developer day. There's Google Developer day on Tuesday, and a sponsored session. I'll be there talking about basically running dedicated game servers in the cloud, mainly on Kubernetes actually, both in my lightning talk and in our sponsored session on Wednesday morning as well. And then there will be Next. 

FRANCESC: Yes. Cloud Next. That's going to be fun. That sounds like a lot of things going on for you. But sounds fun. Lots of parties. 

MARK: It's all around GDC. GDC's going to be crazy. And I know you're up to a bunch of stuff while you're wandering around Europe. 

FRANCESC: Yes. I'm actually kind of doing a European tour because I like cold weather. I'm currently in Barcelona because I will be speaking at the Go meetup on Thursday, so tomorrow. And then the week after that, I will be in Paris, where I'm trying to organize also a meetup, but I'm still not completely sure. But that weekend will be in FOSDEM in Brussels. And we have a Go dev room, so if you're around, come say hi. I think we still have time for lightning talks, so if there's anyone around there visiting, they want to give a lightning talk about Go, let me know. 

And after that, yeah, I'll be coming back for Go SF. We're going to celebrate that Go 1.8 is coming out. And the week after that, GopherCon India. So yeah, traveling a little bit around the world. And that is before Cloud Next, so it's kind of crazy. 

MARK: Yeah. Yeah. And you're presenting at Cloud Next as well? 

FRANCESC: Yes. I am presenting at Cloud Next. I'm going to be talking about Google Cloud Endpoints. 

MARK: Very cool. I'll be on stage as well talking with our gaming partner, Improbable, about massively large persistent online worlds. 

FRANCESC: That sounds very interesting. That sounds kind of a little bit like Pokemon Go, massively online worlds. 

MARK: Yeah. This is more in the MMO kind of realm. Very large online simulations. 

FRANCESC: That sounds pretty cool. 

MARK: Very interesting stuff actually. It is pretty cool. Awesome. Well, Francesc, thanks very much for joining me yet again this week. 

FRANCESC: Thank you so much, Mark for waking up so early. And thank you all for listening. 

MARK: Yeah. And talk to you all next week.
{{< /transcript >}}