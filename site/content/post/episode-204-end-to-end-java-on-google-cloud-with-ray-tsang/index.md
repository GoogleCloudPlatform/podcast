+++
audioDuration = "00:38:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.204.mp3"
audioSize = 55232102
categories = ["Cloud Code", "Java", "Spring Cloud"]
date = "2019-11-20"
description = "Mark Mirchandani hosts solo today but is later joined by fellow Googler and Developer Advocate, Ray Tsang, to talk Java!"
draft = false
episodeNumber = 204
hosts = ["Mark Mirchandani"]
title = "End to End Java on Google Cloud with Ray Tsang"
image="/post/episode-204-end-to-end-java-on-google-cloud-with-ray-tsang/images/hero/hero-EP-204.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dz6qvq/episode_204_end_to_end_java_on_google_cloud_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) hosts solo today but is later joined by fellow Googler and Developer Advocate [Ray Tsang](https://twitter.com/saturnism) to talk Java! Ray tells us what's new with Java 11, including more memory and fewer restrictions for developers. One of the greatest things for Ray is using Java 11 in App Engine because of the management support that it provides.

Later, we talk about Spring Boot on GCP. Ray explains the many benefits of using this framework. Developers can get their projects started much more quickly, for example, and with Spring Cloud GCP, it's easy to integrate GCP services like Spanner and run your project in the cloud. For users looking to containerize their Java projects, JIB can help you do this without having to write a Dockerfile.

At the end of the show, Ray and Mark pull it all together by explaining how Spring Boot, Cloud Code, Skaffold, and proper dev-ops can work together for a seamless Java project.

<!--more-->

##### Ray Tsang

Ray is a Developer Advocate for the Google Cloud Platform and a Java Champion. Ray works with engineering and product teams to improve Java developer productivity on GCP. He also helps Alphabet companies migrate and adopt cloud native architecture. Prior to Google, Ray worked at Red Hat, Accenture, and other consulting companies, where he focused on enterprise architecture, managed solutions delivery, and contributed to open source projects. Aside from technology, Ray enjoys traveling and adventures.

##### Cool things of the week

* Cloud Run is now GA [blog](https://cloud.google.com/blog/products/serverless/knative-based-cloud-run-services-are-ga)
* Budget API in Beta [blog](https://cloud.google.com/blog/products/management-tools/monitor-cloud-costs-and-create-budgets-at-scale)

##### Interview

* App Engine [site](https://cloud.google.com/appengine/)
* Micronaut [site](https://micronaut.io)
* Quarkus [site](https://quarkus.io)
* Java 11 on App Engine [blog](https://cloud.google.com/blog/products/application-development/app-engine-java-11-is-ga-deploy-a-jar-scale-it-all-fully-managed) and [docs](https://cloud.google.com/appengine/docs/standard/java11/)
* Spring Boot and Spring Cloud [site](https://start.spring.io)
* Spring Cloud GCP Projects [site](https://spring.io/projects/spring-cloud-gcp)
* Cloud Spanner [site](https://cloud.google.com/spanner/)
* Spring Cloud Sleuth [site](https://spring.io/projects/spring-cloud-sleuth)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Bootiful GCP: To Production! [blog](https://spring.io/blog/2018/09/13/bootiful-gcp-to-production-8-8)
* Effective Cloud Native Spring Boot on Kubernetes & Google Cloud Platform [blog](https://saturnism.me/talk/google-cloud-native-spring-boot-kubernetes/)
* JDBC drivers [site](https://cloud.google.com/spanner/docs/jdbc-drivers)
* Hibernate ORM with Cloud Spanner [docs](https://cloud.google.com/spanner/docs/use-hibernate)
* Effective Cloud Native Spring Boot on Kubernetes & Google Cloud Platform [blog](https://saturnism.me/talk/google-cloud-native-spring-boot-kubernetes/)
* Dev to Prod with Spring on GCP in 20 Minutes (Cloud Next '19) [video](https://www.youtube.com/watch?v=bpKrcmSgdmk)
* Cloud Code [site](https://cloud.google.com/code/)
* JIB [site](https://github.com/GoogleContainerTools/jib)
* Skaffold [site](https://skaffold.dev)
* Debugger [site](https://cloud.google.com/debugger/)
* Troubleshooting & Debugging Microservices in Kubernetes [blog](https://saturnism.me/talk/troubleshooting-debugging-microservices/)
* Cloud Code Quickstart [docs](https://cloud.google.com/code/docs/intellij/quickstart-IDEA)
* Spring (or Java) to Kubernetes Faster and Easier [blog](https://saturnism.me/talk/kubernetes-spring-java-best-practices/)
* GCP Podcast Episode 58: Java with Ray Tsang and Rajeev Dayal [podcast](https://www.gcppodcast.com/post/episode-58-java-with-ray-tsang-and-rajeev-dayal/)

##### Question of the week

How do I dockerize my Java app?

* [video](https://www.youtube.com/watch?v=p36tv1YWIfU)
* [github](https://github.com/GoogleContainerTools/jib)
     
##### Where can you find us next?

Ray is taking a break for the holidays, but in the future, you can find him at Java and JUG conferences.

Mark is hanging out in the Bay Area, but [Google Cloud Next in London](https://cloud.withgoogle.com/next/uk) and [KubeCon and CloudNativeCon](https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/) are happening now!

##### Sound Effect Attribution

* "Small Group Laugh 4, 5 & 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Tre-Loco1" by Sonipro of [Freesound.org](https://Freesound.org)
* "Mens Sincere Laughter" by Urupin of [Freesound.org](https://Freesound.org)
* "Party Pack" by InspectorJ of [Freesound.org](https://Freesound.org)
* "DrumRoll" by HolyGhostParty of [Freesound.org](https://Freesound.org)
* "Tension" by ERH of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 204 of the weekly Google Cloud Platform Podcast. I'm Mark, and I'm here without a co-host, which means no adult supervision, which means things are going to get wild." >}} 

[AUDIO PLAYBACK] 

[PARTY HORNS BLARING] 

[PARTY GUESTS CHATTERING] 

- Everybody, quiet! Oh, quiet! Quiet. Quiet. Everybody, quiet. 

[END PLAYBACK] 

MARK: Actually, I think we'll keep things pretty even keel, and I'll just kind of stick to the same format. 

First up, I am happy to say that we are interviewing Ray Tsang, a Developer Advocate at Google, and we're going to be talking a lot more about Java. Java is, you know, obviously, a programming language that many people are familiar with. 

[CHIMING] 

But I was super interested in hearing what you can use in Google Cloud with Java. And Ray goes over kind of the details for an end-to-end Java experience, right, from all the way from kind of writing code to deploying and testing and monitoring. So it was a really great conversation, and definitely looking forward to going to the main content. 

But I also want to talk about a Question of the Week that we'll have coming up, which I will ask and then answer myself, which talks a little bit more about building a Dockerfile with Java. We'll talk about using Jib. Ray and I talked about that, a little bit, as well. 

Before we get into those, let's talk about some Cool Things of the Week. 

[MUSIC PLAYING] 

So our first Cool Thing of the Week is that Cloud Run is-- bum ba dum ba dum pa dum. 

[SNARE DRUM ROLLING] 

Cloud Run is generally available for everybody, which is super awesome because I'm sure you've heard a lot about Cloud Run. And it's just been a really cool product, and people have been really excited to use it. And now that it's generally available, you know, we'll see businesses try to maybe adopt that a little bit more and be a little bit more friendly about experimenting with it. 

It's super, super cool. You're able to take a container and kind of just run it. It's built on Knative. And actually, last week's podcast episode talked a lot more about Cloud Run. So if you didn't get a chance to listen to that one, definitely go, recommend checking it out. Otherwise, go try it out for yourself, and see what cool things you could host. There's lots and lots and lots of opportunities there. 

The other cool thing I would like to mention is that there's a Budget API that's now available in beta. Now, this one lets you build and kind of manage your budgets from a programmatic standpoint. The reason that's really important is because when you're setting up a budget-- I think I talked about this a couple of episodes ago-- but what you really want to do is set up budgets around your projects to make sure that you're not spending in areas that, you know, you didn't plan to spend on, whether that's a product you didn't plan to use, or whether it's just kind of keeping a cap on your dev environment. 

But now that the Budget API is available in beta, you can start to integrate it with your infrastructure management, right? So if you're using Terraform, or something like that, to kind of make sure that you have easy-to-reproduce and easy-to-control and source-coded configuration, now, you can include your budgets in that. So if you need to set up a new project or a new suite of projects to use or you have new developers coming in, whatever, you're easily able to use the Budget API to kind of put automatic budgets on that, without having to worry about doing it manually. 

Right, so it's super, super helpful, especially when you get into more complex project configurations. So go check that out as well. Lots of cool things offered by Cloud Run and Budget. 

But let's take the conversation over to Ray, and talk a lot more about what the end-to-end Java experience looks like on Google Cloud. 

[MUSIC PLAYING] 

Ray, thank you so much for joining us today. First things first, who are you and what do you do? 

RAY: Yeah. Hello. Thanks for having me on the podcast. My name is Ray Tsang, and I'm a Developer Advocate at Google Cloud. And I focus a lot on the Java developers and Java community, and now I try to bring some of the technology that we have from the GCP to Java developers. And, the other side of things, I try to do is, of course, to make our platform run better for the Java applications, you know, to be easier to be used by Java developers out there. 

MARK: So I guess one of the first interesting questions I have out of that is, obviously, Java's been around for a long time. Java's actually been around longer than the cloud, probably. Right? 

RAY: Yeah. I think I started professionally with Java development maybe back in 2003, 2004, or something like that? It's been a while since people have been using it to write their applications and run their enterprise systems. 

COMPUTER VOICE: The first public implementation of Java 1.0 was in 1995. 

MARK: So it sounds you've been working with it since before the cloud and obviously have a lot of expertise in it. My first question kind of comes down to, what's different about Java in the cloud? 

RAY: Well, it depends on how you want to run it and what it is you're trying to solve. You know, I think that, from a language perspective, it's just another programming language. But when you are running the application, I mean, largely, it can be pretty much the same, I guess. 

If you are accustomed to running your application via application server or a web application server, it's still pretty much the same thing. You just, you know, you're either running on your machine, on somebody else's machine, or on the machine in the cloud. They are just processes, I guess, [INAUDIBLE]. 

MARK: So I've also read that there's this new announcement for App Engine standard, right? 

RAY: Yeah, so for App Engine, that is a Platform as a Service, so depends on what you're looking for. If you want to run some existing apps with the existing ways, you can do that with just cloud infrastructure running with VMs and set up your own networking. On the other extreme, of course, is to be hands-off on all of those things and give us the application that you want to run and, being a Platform as a Service, we will be able to provision all the resources for you, the load balancer for you, even keeping the runtime up-to-date for you as well. 

With App Engine it can also automatically scale your application out to as many instances as you need, or they can actually just reduce the instances down to zero if nobody's using the application. And this will give you that elasticity that you might be looking for, for certain workloads. 

MARK: So I mentioned before that I'm not as familiar with Java and certainly haven't dealt with it in a while. But Java-- you know, kind of running it in the JVM-- is kind of a long-running instance, usually pretty hefty workloads. How does that compare it to something like you just said, an App Engine, when you're really working on its serverlessly? 

RAY: Yeah, so I think that there are many different forms of the app. It's just another language. But, certainly, I think, traditionally, people may be running their application in a hefty application server. Traditionally, in a very long time ago, I think my application server may start in 30 minutes, like a whole update process could be an entire night. 

But that's not the case anymore. I mean, it's been a long time since I had to do that, for example. The community has progressed so much, now, that there are a lot of the microservices frameworks that helps you to put up a lot faster and focus on the things that you want to do. 

So, for example, one of the most popular ones is Spring's Spring Boot. This is pretty well-known. It's very, very popular, right now, and I see a lot of adoption of it in production systems, too. And, you know, from a microservice perspective, it gives you everything you need in case you go start up your app, your services, in a matter of seconds as opposed to minutes, for that matter. So that really helps. 

And then there are definitely newer frameworks that just came out maybe this year and last year, things like Micronaut and Quarkus. In these new frameworks, they take on the challenging in different ways. 

For example in Micronaut, they tried to generate a lot of the code at compile time, as opposed to runtime. And then you can link them together very easily, and then you can just run them very easily without having a lot of additional overhead that you might incur if you want to generate code at runtime. 

And Quarkus is another new framework from RedHat, primarily. And not only do they have pretty fast start up speed, too, it allows you to use some of the well-known standards like JPA and CDI and a few other things for JAX-RS. But they also focus on the ability to make sure that you can potentially compile this down into what we call a native image case. 

So, today, it's actually possible to compile Java code with GraalVM Native Image down to native binary. And, you know, you can actually start up your application potentially in subseconds. Of course, this is really, really new. I don't know if I could do this in production. But, you know, people have tried it. 

And I think all of the frameworks, the ones I all mentioned, all have some level of support. Micronaut, since they're all pretty much generated at compile time, all of these things can be compiled down to native image as well. Quarkus has that support by default. And Spring Boot, I was at the conference here at Devoxx Belgium, just this week, and I saw a demo of Spring Boot that was also being compiled down to native image, and that also starts up in subseconds as well. 

So I think the community is really moving forward. But even without this, you know, I think that a couple of seconds, I think that's pretty OK, even sometimes I see heavier workloads. The promise of the service, to me, it's not really just about the startup speed, right? Because in all of these environments, like, say, App Engine, you can also specify minimum instances and the way that you want autoscale. So it's not absolutely necessary for you to have, like, super fast startup time. 

What is key here, to me, is that you don't have to manage anything. And that, to me, is really nice, right. So, for example, rather than spending a lot of the time to figure out how to create a potentially compliant infrastructure that can run your workload-- and this can take, you know, a month of work just to figure out what that production environment looks like and how that actually works. 

App Engine is already production-ready environment, and you can just give us JAR file, which is how most people produce their application artifacts. So just give us a JAR, and we can just deploy that into App Engine, and everything gets bootstrapped and it just starts to serve. So that's pretty cool. 

MARK: So I want to come back to some of the points you actually just mentioned, but let's start with, you know, kind of taking a JAR file and sending it to App Engine. Now, the latest update for App Engine is that it supports Java 11. First of all, what does that bring that App Engine didn't have for Java before? 

RAY: Well, so I think there are two primary things. First of all, it's that it has the new language support. So there are newer language support in Java 11 that's not otherwise here in Java 8. But I think the more interesting perspective would be the second part, which is that, traditionally, App Engine takes a WAR file, and that is a web application, a package, where you package, you structure your application differently so that you can run this in an app server like Tomcat or Jedi or, you know, something else. 

But as the community progresses, right, as new frameworks come up and being adopted, even more popular, you know, people don't really want to configure their app server any more and they just want to build a JAR file that just runs. So, locally, just a Java dash JAR, and the application starts just fine, And you don't have to set up any other additional components except for your JVM. Then you're up and running. 

So in App Engine Java 11, we switched the packaging format from WAR to JARs to fit this use case where I do see a lot of people do. And you can basically deploy any JAR file now as long as it starts up and listens to the port. 

MARK: Right. So, now, you get a little bit more flexibility because you don't have to have that web application framework around it. Plus, it sounds like it's a little bit less overhead to get a JAR up and running in App Engine. 

RAY: It's a lot easier to do. But, you know, there's still a application framework that you might want to use. You can, of course, make your application without any framework, but that could be potentially a lot of work. And, of course, if you do it that way, the startup speed is even going to be faster. 

But if you want the convenience, I think, overwhelmingly, people may still choose to use a framework. I think what is really nice is that, now, you can use any framework that you want and expecting the same result. And you don't have to modify a lot of code, or any code, to be able to run it in App Engine. 

So, for example, in the past, maybe trying to deploy a Spring Boot application into App Engine Java 8, the previous version, and you have to understand how to covert that JAR file that you're already producing into a WAR file with the right structure. 

With Java 11 runtime, you don't have to do that anymore. And I have seen a lot of people getting into trouble, and it's hard to understand what would it take to convert this package into a package that the previous version can run. 

Now, when I say previous version, I really mean that we are actually having both versions running at the same time. So if you're on Java 8, and if you are accustomed to the WAR packaging, you continue to use that, then you should. But if you want to try JAR application deployment, then you kind of need to use the new runtime, the Java 11 runtime, instead. 

MARK: And like you mentioned earlier, you kind of have your choice of frameworks. Or none, if you wanted to do that way, but that obviously wouldn't be best practices. 

And Spring Boot was a big framework that you kind of mentioned as a popular example. So what does Spring Boot bring to Java? 

RAY: So Spring Boot is a really nice framework where Spring has been around for a very long time, don't even remember what year that was when they first started, 

COMPUTER VOICE: Spring Boot can be traced back to its humble beginnings in 2002. 

RAY: And, traditionally, it was configured through a lot of XML. And when Spring Boot came along, then the other configuration became a little bit more idiomatic, and they focused on, I would say, combination over configuration. As opposed to, in the past, where we may end up with a giant XML file, that just determines how you can run and serve one end point. 

In Spring Boot, that you just create a class, go to Controller, RestController annotation to it, and then you create the method and the git mapping or post mapping, depending on the operation you want to handle, and off you go. It takes maybe, I don't know, five lines of code to serve an endpoint today. And everything can get started very easily. 

My good friend John Long, from Pivotal, he always shows how to get started. He's got all the best videos, I think, online teaching people how to do this. And his favorite is, of course, at start.spring.io. You can go to that site, and you can bootstrap a Spring Boot application really, really easily, and you can also add GCP support from start.spring.io. 

So, in that site, you can say, I want to create a web application, and then you just add a web component to it. Or you can add a bunch of other components, and it'll just automatically configure your app. You click on Download, and it generates the Zip file, and you unpack it. You're ready to go. 

MARK: So that lets you start integrating with other GCP products a lot easier? 

RAY: For Spring Boot specifically, we have a project called Spring Cloud GCP. So when you generate that app or when you're configuring a Spring Boot app, you can add the Spring Cloud GCP component to it. This project has been created by the Cloud Java team, here in New York. 

And once you add the starter to it, we have a bunch of integrations with GCP services. Right, so if you are already using Spring Boot, you can add this Google Cloud starter into your application. Then you can choose what services you want to integrate with. 

So for example, if you only use something like Datastore, right, you have the option of using the Datastore API directly. Or if you want something more, you know, close to what you are doing with Spring Data, where you have Object Relational Mapping layer on top of your application so you can deal with POJOs or plain old Java objects and persisting that into the database, with Spring Data datastore, you will be able to do exactly the same thing. 

And I showed this in my demo quite a bit, and the process of using Spring Data for datastore is exactly the same as you would with another SQL-based datastore that's supported by Spring Data JPA. 

Similarly, we have support for Spanner, too. So if you don't want to use to Spanner raw API, then you can use Spring Data for Spanner. And the process is exactly the same. You write the POJO, annotate it with the right annotations, and you implement the repository interface or just extending the repository interface. And within a few lines of code, you will be able to have a crowd access to that the datastore itself. So it makes the whole process very, very easy. 

And in the [INAUDIBLE] to data access, I think that, more importantly, especially now with all the microservices architecture, when we're creating more and more small services, that's-- you know, can potentially calling services, calling other services as well, you kind of need to know and understand how the request kind of flows through from one service to another. And for this, people try to implement a distributed tracer. 

And, in Spring Boot, there's already a distributed tracer built-in. You get this tracer by adding a starter configuration code, Spring Cloud Sleuth, OK. And as soon as you add this starter, without changing any of your code, you get distributed tracing across those microservices. 

And, for us, for example, for Spring Cloud GCP, you can also add our starter which will get you-- basically it uses the same Spring Cloud Sleuth pipeline, or the plumbing of Spring Cloud Sleuth. It actually pulls is Spring Cloud Sleuth, for that matter. So you configure your application exactly the same way that you would as [INAUDIBLE] any other Spring Cloud application. But with our addition, all the traces will automatically flow to Stackdriver Trace. 

Right, so you don't have to change any code. So the application becomes pretty much agnostic to the environment that you want to run in or to back-end technology that you want to integrate with. Because in all of these starters, when you are adding capabilities, you don't actually have to change your code, in most cases. 

Same thing with logging. So if you want to log to stop Stackdriver Logging, it depends on your environment. If you are in Kubernetes, you have two options. You know, just do the regular logger, which it will just be plain text. However, because the log message is not structured, so the logger on the stack driver side wouldn't be able to parse your message and understand, you know, the different structures. 

So, for example, if you actually add a Spring Cloud Sleuth to your application or our starter [INAUDIBLE] application, every log message that you print out will be associated with a trace ID, right, because the trace ID came through from another microservice to yours, potentially, and you'd probably get the same trace ID downstream to another service. And when you produce log messages, the log lines are actually associated with the trace ID. 

What that means is that given the trace ID, you could potentially go back to the logging console, you can type in the trace ID, you can see all the log messages associated with that particular request. However, if you just print it out as plain text, there's no way for us to parse it inputting a special field so we can query it better. 

Another mode of doing this is to output the log as JSON format. OK, so you can print your log message in a structured JSON format. And in this JSON payload, there potentially is a attribute code, the trace ID, and you've got to put the right trace ID in there. 

But that's a lot of work, to do this yourself. So, again, with this Spring Cloud GCP integration, what we're able to do is to automatically generated this JSON payload for you. And when you use the logger and tracer together, the result is really, really nice. 

What you get is, for example, you can see the distributed trace. instead of a trace, you can see what other services it called in this tree structure. And for every one of these spans, for every one of these calls, you can say, show logs, and you actually can see the log messages associated with that particular request for that particular call. 

It's super, super useful when it becomes to-- you know, you need to troubleshoot some issues. You have the trace ID or you know the issues. You go back to your console and you open up the request that has the issue. And now, you can click in and see exactly what happened. 

MARK: With Spring Boot, it's pretty easy to get a Java app up and running. But, really, you want Spring Cloud to take advantage of all the cloudy atmosphere stuff that you can use to really kind of build, debug, and integrate your Java app with the rest of the cloud? 

RAY: Right. And when you say Spring Cloud, I think Spring Cloud, in general, is an umbrella project from Spring. So they include a lot of things. And, yeah, so I think that's Spring Cloud, in general, that umbrella project, helps you to run applications in the cloud. But Spring Cloud GSP, particularly, gives you the options of integrating a lot of these features directly with Google Cloud Services. 

And I think the end result is that, when you write your application, you focus on the app. When you are ready to add capabilities, you can add these additional dependencies so that, without having to change a lot of your app or without having to change anything, you get these capabilities added to your app automatically. And, now, you're ready to leverage the cloud-native services easier and faster without having to worry about the actual implementation of them. 

MARK: What if you're kind of working with an older Java application, and you want to migrate that to the cloud instead? Right, so if you're using like Hibernate or something of that nature, what changes do you need to make to get that up and running? 

RAY: Well, so Hibernate has been around for a long time, and is still being used a lot. Right, so it's not necessarily older. But everybody who is using a relational database is probably going to be using Hibernate, you know, somewhere in their stack, or maybe they just use JDBC driver. But you can continue to use Hibernate, of course, you know, talking to our databases. 

For example, we can talk to our SQL databases on Cloud SQL. We support PostgreSQL and MySQL, so that should be pretty easy to get started with. But if you to adopt something like Cloud Spanner, it is a relational database that kind of spans across the multiple regions and potentially across the world with consistency, which is absolutely amazing. but to use Spanner, you have a couple of choices. Right? 

It is recently that they have released a open source JDBC driver where you can just use the regular JDBC connections, and you can do a read and write operations through JDBC. However, if you want to use it with Hibernate, what is special about this is that Hibernate will need to understand how to talk to the back-end SQL databases because every SLQ database may have a slightly different way of communicating. Right? They have different SQL dialects. 

So the team actually has created a Hibernate dialect for Spanner. And, at the time of this recording, this is still beta. I don't know when they are going to go GA. I heard it's going to be pretty soon, so it's definitely coming soon. But, time of the recording, right now, you can actually give it a try. That's in beta right now. 

So what that means is that, you know, it's not just there to work with existing applications as using Hibernate, but also things like running anything with microprofile, that uses JPA, that use Hibernate behind the scenes, you can actually integrate that with Cloud Spanner too to take advantage of this really awesome database architecture that Google has. Or if you are using something like Quarkus, you can also use Quarkus with JPA, with Hibernate behind the scenes. And then you can use the Hibernate dialect for Spanner to communicate and do cloud operations with Spanner as well. 

MARK: So regardless of the frameworks that you're using, you still have a good way to access, you know, basically Google's databases, but still being able to run your Java code in whatever way you mentioned? Like you said, Kubernetes, you could run it on App Engine, you could run it in a more traditional Compute Engine instance. You have all those options? 

RAY: Or even if you are on-prem, you can run it anywhere. Because I think all of these services are just APIs. So if you have a fast enough internet, you should be able to run it anywhere that you want and still being able to authenticate and get access to the database if you want to. 

MARK: But one of the nice points you mentioned is that, by putting it in the cloud, you're also able to take advantage of all the ops things you can do with it, right-- logging, monitoring, debugging, tracing, all these things that are not as easily done in some environments. 

RAY: Oh, absolutely. I think GCP Next San Francisco, I did a talk that I kind of showed how everything worked together. So in that talk, I showed, how do you get started with Spring Cloud GCP with Spring Boot and how do you add some of these data access options with Spring Data, Spanner with datastore. And then you can add trace and logging and a bunch of other capabilities for your app. And then it's just a matter of picking what the runtime environment is. 

And you can containerize your app, for example, and the team also have created something called the Jib, J-I-B. And this is a really, really easy way, for example, to containerize your Java application, producing a container image without you having to write a Dockerfile. I have to say, Dockerfile, you know everyone can write Dockerfiles, right? But to write it correctly, it can be somewhat challenging. You have to follow many best practices. 

So with Jib, we actually implemented some of these best practices, and they can produce a very efficient container image without you having to ever write a line of Dockerfile. And then you can push this image to our container registry or another registry, whichever that you need to push to. And you can deploy that container to the Kubernetes environment or cloud-run environment, for that matter. 

MARK: And you can integrate Jib with whatever your build process is, right? So if you're using, like, Gradle or Maven or something, it's very easy to just containerize it, and then ship it? 

RAY: That's right. Yeah, Jib supports both Maven and Gradle, two of the most popular [INAUDIBLE] right now. 

MARK: So from code to deployment, it sounds like there's kind of integration points throughout the entire stack of Java development that kind of are addressed by different parts of Google Cloud. We just talked about the build. We just talked about the framework that's supported. We talked about the operations piece with logging and monitoring. What about the IDE? 

RAY: I think that recently the team has released a Cloud Code, and Cloud Code is the plugin that you can add to your IDE, specifically IntelliJ or VS code. So, for example, in the IDE, you can create a new Spring Boot application. And from the IDE, you can potentially add App Engine support. So directly from the IDE, you will be able to add whatever that's necessary to deploy to App Engine without ever having to go back to the shell. 

And Cloud Code also have the capability of connecting to a company's cluster. So from, Cloud Code, they give you quite a few really nice auto-completions in editing so that, when you're editing the YAML files specific to Google Cloud, that you can get auto-completion, which is super awesome. 

I show this in my presentations, in the talks all the time. And who remembers how to write complicated YAML file, right? But with some editor support, it becomes fairly easy. And potentially from the IDE, what you can do is to just bootstrap a brand-new application, and then it actually has a built-in template that shows you how to create a Spring Boot application with the necessary Kubernetes components, Kubernetes files, that you need to take advantage of this plugin. 

So, for example, in a typical Kubernetes development cycle, you will need to create the app. You need to use Jib to create a container image. And then you have to write your Kubernetes manifest, the deployment YAML files, for example. 

And then, if you change some code, you have to recreate the image and then potentially update the manifest, and then re-push everything to a Kubernetes environment whether it's on your machine like Minikube or remotely in a Kubernetes cluster. And then you, maybe, test it out a little bit. And then if you found another issue, you have to redo this cycle again. 

And there's a really nice tool called Skaffold. It's a command line tool that you can use that basically automates this development cycle for you so that, whenever you change some code, you can automatically refresh the image and then automatically pushing that image to the right registry and then automatically redeploy the application for you. 

And from your console, from your computer, without having to connect remotely yourself, it will actually output the log for you, So it feels like you're running your app locally, even though it's actually running a remote container in a Kubernetes cluster somewhere or in your Minikube. 

And Cloud Code can integrate with Skaffold really well. So if you added Skaffold to your application, your IDE will say, hey, do you want to add Skaffold support? And IntelliJ, for example, you will add a little round button that's specifically designed to run in Kubernetes in a continuous deployment mode. And, you know, you continue your regular editing cycle. And once you save the file, it will recompile and recreate the image and redeploy it for you. 

It's really neat, and the team actually went even a step further by adding the debugging support, too. So, like, if we run applications locally, we can attach the debugger so that you can step through the code. You can add a break point in your code. And so you can add a debugging point, and you can step through the code to see what's going on. 

If you don't want to do that in the Kubernetes environment, during development time, of course, then you can use Cloud Code with a Skaffold in the debugging mode. And what that will do is automatically enable debugging support in your app and then automatically attach the debugger to this remote process that's running in a Kubernetes cluster. And in your IDE, you'll be able to debug this application, even if it's not running on a local machine. And this whole process is seamless, which is super, super neat. 

MARK: A great place for people to get started would be Cloud Code because all of the integrations there really make the entire development process a lot easier. 

RAY: Yeah. Yeah, so for example, if you want to also add Google Cloud Services, even though using Spring, even know using Spring Cloud GCP, and you want to add some cloud libraries in Cloud Code, there is also an option for you to connect to a service. And from the UI, it will allow you to determine what services you want to use. 

And once you select it, it will enable the API for you, which a lot of people forget to do. Right, if you want to use any API services, you have to go enable the API. The IDE will actually tell you, do you want to enable this API? 

It will generate the service account key for you as well, and then it will automatically add the cloud library to your Maven or Gradle build. So you can very easily add additional capabilities to your application. 

MARK: That sounds pretty impressive because it sounds like it really is designed to take care of as much as possible for you because it wants to get you to the point where you're just worrying about the code. All of the pipelines, all of the work that you need to do, and even as much as integrating, basically, the remote debugging, all of it's right there. 

RAY: Yeah. And, of course, since you mentioned debugging, I think there's another thing that a lot of people don't know about. I do this all the time. I ask people, like, who are brave enough to attach a real debugger to your production workload, and debug your application live, right? Or even in staging environment? It will be pretty difficult to do, mostly because when they requests come in, people have to wait for you to step through the code. 

So on Google Cloud, actually, we have another debugger. It's called Cloud Debugger, and the difference there is that for Cloud Debugger, what you do is you add a Cloud Debugger agent to your application, and it will automatically connect to our Debugger console. And from there, in the console, you can potentially apply your code or a serial code already, if it's writing on a git repository that we have access to, if you give us the permission to do it, we can automatically pull down the code. Or you can just upload what-- the code you want to debug. 

And in the console, you can add a snapshot point as opposed to a breakpoint. And, as somebody flows through that flow that you're trying to debug, we'll capture a snapshot of the state of that moment in time. And then you can inspect the values and potentially the code stack of what actually happened, without stopping the world. So the user is not being affected by this, but you are still able to see the relevant data that you need. 

And what's funny is that I did a joint talk with Robert Kubis, another Cloud DA. He actually focuses on Spanner, but we did a troubleshooting talk in the past. And he made a joke like, if you really want to troubleshoot the production environment, this is how he does it. He does a binary log debugging. 

So what he does-- and I think I'd do the same thing, too-- is, you know, if something really doesn't work out, you need to see what is actually happening. You probably want to add a log message somewhere, right? Because, in the app, don't usually have all the logs that we need. But then you will add a log to the top, at the beginning. And you add the log to the very end. And if the code doesn't reach the very end, if you add a log in somewhere in-betweeen, right? 

MARK: Very familiar with that method, you know, print one, print two, print three, print four. And then you're just looking-- 

RAY: Right. 

MARK: --through streams of numbers. You're like, oh, I see. The code stopped at 37, so let's look there. 

RAY: Yeah, exactly. (LAUGHING) However, if you had to figure out where to add all these 37 things to log, every time you changed the code, you have to do another deployment. If you're lucky, you can get this through in minutes. But I think in most of the systems, you know, you could have to wait hours before anything gets deployed. 

So with the Debugger, you can also add log statements. And you will at log statements to your application in real time without you having to do anything additional. So you don't have to redeploy or anything like that. 

And he also does not affect the state of your app. We're not actually modifying your code. We're also not modifying your application. We're just adding these interceptors, these hooks, so that we know when you pass through certain lines, we will print out some log messages for you. Right, so a pretty awesome tool that very few people know about. 

MARK: It sounds like it's an amazing way to actually debug in a production environment with very minimal impact to the user. 

RAY: Right. So but now they've cancelled, because in production environment, most people may not actually want, you know, anybody to just go in and print out anything they want or to see any of the data, right. So I think that's a real concern. 

So this is really just for break-glass type of scenario for specially authorized users to be able to do this. And, of course, you can lock down who can do this. Right, you can disable this by default and, only when you actually need. 

Actually, I think more better use case is probably like even in staging or some higher environment before you can get to production. You know, during the QA test or the UAT tests, some weird issue occurred, and, of course, we all say, it works on my machine. But you never know what the user entered, right? 

In staging environment, whatever that UAT tester may have done, it will be very easy to understand what actually happened. And I think a lot of people are kind of afraid to get this into production, in most cases. But everything can be locked down, so that's the good news. 

MARK: Yeah, I'm convinced that if you just label a server Production, that automatically makes it buggy or somehow. 

[LAUGHTER] 

RAY: You're scared to see all the scenarios that you've never seen before, right? Who'd have thought this is what people have done? 

This actually happened to me once where I had a small application, a demo app. And, ha, every time I demoed it, it was fine. When a product manager was on stage demoing this app, it errored out. I was like, what happened? What just happened here? 

And I couldn't figure this out until I actually went to the instance and use his computer-- retriggered this, and reproduced it, and then used the Debugger to figure out, OK. So the app asked you for the name and the message, and the person did not enter the name. And, of course, I did not have error catching for this one because it's a demo app. Who'd have known, right? 

It says very clearly, enter your name, but who knew? And this was a real scenario for very small use case, and it definitely helped me. And this actually turned into a pretty fun talk as well. 

MARK: Users always find fun ways to kind of interact with your application in a way that you wouldn't have expected, right? I mean, if you ask them to enter a name, you expect them to enter a name, but you can't guarantee they will. 

CROWD: Ooh. 

[GROANING] 

MARK: Exactly. Exactly. All right, well I think we are just about out of time. But before we go, Ray, is there anything upcoming that you're excited to talk about or any conferences you'll be going to? 

RAY: So this is the end of the year, and I'm very happy that I don't have much going on for the rest of the year. But, you know, there's definitely many other Java conferences out there. It is very, very active, and I try to be in-person for many of them so that I can meet and chat with the Java developers. 

So if you happen to attend some of the Java conferences or the local Java user groups, let me know. And I look forward to be able to meet all of you out there in person because I love to talk to people in person as well. 

MARK: Awesome, and we'll make sure to include a couple of key links in the show notes, just for people who are interested in trying out some of the things that we talked about here today. But, Ray, thank you so much for joining us, and hopefully we get a chance to chat again soon. 

RAY: All right. Thank you for having me. 

MARK: Thanks so much to Ray for coming in and talking about Java. I haven't used Java for quite some time in any more than just kind of playing around with a few things, so it was really exciting to hear about all the new things. 

He was also on the podcast quite a while ago, maybe two or three years ago, talking a little bit more about Java. So if that's something that is interesting to you, definitely recommend going to check that out and hearing a bit more about how it's probably changed. Or just stay tuned with all the cool new Java stuff. 

Speaking of which, we've got our Question of the Week. 

[MUSIC PLAYING] 

So the Question of the Week is, how do I Dockerize my Java app? Right, so I've used plenty of Dockerfiles, but it's usually copied and pasted from the base template, and then slight modifications. They can get pretty complex and pretty unwieldy, so the answer to this question is a Jib. 

And Jib is built to kind of integrate with your current Java development workflow and help you build your Docker files without needing to kind of get into the complexity of them. So the idea is that you basically just kind of put in a configuration. If you're using Maven or Gradle, It's pretty simple, or you can just use it by itself. And then you just point to a place to host your actual Docker file. 

And from there, you're good to go. It's really, really simple to set up. And, actually, there's a fun little video that just got published that shows you how to use it, and then links over to the official documentation so you go check that out. 

But it's a pretty simple process, and I think it's really valuable for being able to containerize and deploy your Java application without having to worry about what's going on, right, without having to worry about all the configuration management. It's just so much more easy to put together a Dockerfile based on what your Java app is and then move along, right, focus on the actual part that matters, which is your code. 

So check out the video. Definitely check out Jib on GitHub. And then, if it's interesting, give it a shot. See what you can do with it, and see how it can kind make that whole process a lot easier. 

COMPUTER VOICE: That's so awesome. This week, I'm spending time playing video games with my dog. What about you? What are you up to? 

MARK: So this week is going to be a busy week because we've got lots of events happening, right now. We've got Google Cloud Next over in London as well as KubeCon and CloudNativeCon are happening right about now. So I can imagine it's going to be a pretty busy week. We've got lots of people out and traveling. 

I've opted to kind of stay behind in the Bay Area and get some work done. So, hopefully, I'll be able to do that, but there'll be lots of exciting announcements coming out from those videos, interviews, all sorts of things. So definitely stay tuned for the next week's episode because I'm sure we'll be recapping some of that as well as checking out the Google Cloud blog and the Google Cloud YouTube channel because there's going to be, probably, a ton of stuff coming out from those. Definitely excited to see what comes out of it. 

Well that's going to wrap it up for us, so thank you all for listening, and we will see you all next week. 

[MUSIC PLAYING] 

I really should have just done the podcast with myself, as two people. Something like, Hey, Mark, tell me more about how to use Jib to Docker as my job app. 

Well, Mark, you can do-- or I could use Robo-Mandel. I think we may have played out Robo-Mandel. We'll see. 

COMPUTER VOICE: I'm so sad to hear that you feel this way. It's hard being an AI clone of a past host. Just give me one more chance, and I promise I won't let you down.