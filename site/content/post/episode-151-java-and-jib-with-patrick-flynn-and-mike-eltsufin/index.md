+++
audioDuration = "00:29:35"
audioFile = "Google.Cloud.Platform.Podcast.Episode.151.mp3"
audioSize = 43011957
categories = ["Java", "Jib"]
date = "2018-10-17"
description = "Mark and Melanie speak with Patrick Flynn and Mike Eltsufin about their exciting new Java products for Google Cloud."
draft = false
episodeNumber = 151
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Java & Jib with Patrick Flynn and Mike Eltsufin"
image="/post/episode-151-java-and-jib-with-patrick-flynn-and-mike-eltsufin/images/hero/hero-EP-151.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/ZDtkExxHsJ7"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9p0tu0/episode_151_java_jib_with_patrick_flynn_and_mike/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) speak with [Patrick Flynn](https://twitter.com/patricknflynn) and Mike Eltsufin about their exciting new Java products for Google Cloud. Mike tells us all about the new Spring Cloud GCP, a helpful tool that integrates Google Cloud APIs and the Spring Framework. Patrick elaborates on his team's new tool, Jib, a Java container image builder, and how it helps Java developers.

<!--more-->

##### Patrick Flynn

[Patrick Flynn](https://twitter.com/patricknflynn) is a long time Java developer who spent many years in Google Ads, and is now four years into being the tech lead of the Google Cloud Java Tools team. 

##### Mike Eltsufin

[Mike Eltsufin](https://github.com/meltsufin) has been an enterprise Java application developer in the banking sector for over a decade before joining Google. Currently, he's the tech lead of the Cloud Java Frameworks team, focusing on bringing the goodness of Spring Boot to Google Cloud Java developers. 

##### Cool things of the week

* Introducing container-native load balancing on Google Kubernetes Engine [blog](https://cloud.google.com/blog/products/containers-kubernetes/introducing-container-native-load-balancing-on-google-kubernetes-engine)
* Simplifying cloud networking for enterprises: announcing Cloud NAT and more [blog](https://cloud.google.com/blog/products/networking/simplifying-cloud-networking-for-enterprises-announcing-cloud-nat-and-more)
* Store it, analyze it, back it up: Cloud Storage updates bring new replication options [blog](https://cloud.google.com/blog/products/storage-data-transfer/store-it-analyze-it-back-it-up-cloud-storage-updates-bring-new-replication-options)
* Postmortems and Retrospectives with Liz and Seth [video](https://www.youtube.com/watch?v=UBe7U2b3tsA&index=11&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj)
     * GCP Podcast Episode 127: SRE vs Devops with Liz Fong-Jones and Seth Vargo [podcast](https://www.gcppodcast.com/post/episode-127-sre-vs-devops-with-liz-fong-jones-and-seth-vargo/)

##### Interview

* App Engine [site](https://cloud.google.com/appengine/)
* Kubernetes Engine [site](https://cloud.google.com/kubernetes-engine/)
* Spring Framework [site](https://spring.io)
* Spring Boot [site](https://spring.io/projects/spring-boot)
* Spring Cloud GCP [site](https://cloud.spring.io/spring-cloud-gcp/)
* Spring Cloud GCP on GitHub [site](https://github.com/spring-cloud/spring-cloud-gcp)
* Cloud Pub/Sub [site](https://cloud.google.com/pubsub/)
* Spanner [site](https://cloud.google.com/spanner/)
* Cloud Sql [site](https://cloud.google.com/sql/)
* Cloud Datastore [site](https://cloud.google.com/datastore/)
* Docker [site](https://www.docker.com)
* Jib on GitHub [site](https://github.com/GoogleContainerTools/jib)
* Cloud Tools for IntelliJ Documentation [site](https://cloud.google.com/tools/intellij/docs/)
* Introducing Jib — build Java Docker images better [blog](https://cloud.google.com/blog/products/gcp/introducing-jib-build-java-docker-images-better)
* Bazel [site](https://bazel.build)
* Skaffold on GitHub [site](https://github.com/GoogleContainerTools/skaffold)
* Netty [site](https://netty.io)
* SpringOne [site](https://springoneplatform.io)
* Knative and riff for Spring Developers [video](https://content.pivotal.io/springone-platform-2018/knative-and-riff-for-spring-developers)
* Jib Gitter [site](https://gitter.im/google/jib)
* Sig Apps [site](https://github.com/kubernetes/community/tree/master/sig-apps)
* Kubernetes Slack [site](https://kubernetes.slack.com)
* Codelabs [site](https://codelabs.developers.google.com/spring)

##### Question of the week

What if we have an object in Google Cloud Storage, and I want to automatically change an aspect of it -- such as:

 * Downgrade the storage class of objects older than 365 days to Coldline Storage.
 * Delete objects created before January 1, 2013.
 * Keep only the 3 most recent versions of each object in a bucket with versioning enabled.

Managing Object Lifecycles [docs](https://cloud.google.com/storage/docs/lifecycle) and [guide](https://cloud.google.com/storage/docs/managing-lifecycles)

##### Where can you find us next?

Patrick's team will be at [KubeCon Shanghai](https://events.linuxfoundation.cn/events/kubecon-cloudnativecon-china-2018) and [Oracle Code One](https://www.oracle.com/code-one/register.html) and he will be at [KubeCon Seattle](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/)

Mark will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Melanie will be at [Twilio Signal $BASH](https://signal.twilio.com/$bash) event on Thursday and [SOCML](https://sites.google.com/view/socml-2018/home) in November.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 151 of the weekly \"Google Cloud Podcast.\" I'm Mark Mandel, and I'm here with my extra special colleague, Melanie Warrick. How are you doing today, Melanie?" >}}

MELANIE: Hey, Mark, I'm good. How are you? 

MARK: I'm very well. It's Monday. Beginning of the week. 

MELANIE: It's Monday. We love Mondays. 

MARK: Mondays are good. Though when you're listening to this, this will be Wednesday. 

MELANIE: Yes. So Mark, who do we have on the podcast this week? 

MARK: Yeah, so this week we are talking about Java and Jib with Patrick Flynn and Mike Eltsufin. 

MELANIE: Yes, this will be a good episode. 

MARK: Yeah, so we're talking about Spring Boot. We're talking about Jib, which is a tool for creating Docker files from Java stuff. It's basically a lot of Java ecosystem stuff. 

MELANIE: Yeah. But as we do, we always start out with our cool things of the week, and we end with the question of the week. And this week's question, all the way for Mark, what if we have an object in Google Cloud Storage and I want to automatically change an aspect of it, such as downgrade the storage class of objects over 365 days to Coldline storage, delete objects created before January 1, 2013, or keep only the three most recent versions of each object in a bucket with versioning enabled? Mark, where did this come from? 

[LAUGHTER] 

MARK: Actually, something I needed to do a while ago, and I came across it again. And I was like, that's a great question of the week. 

MELANIE: Sounds like a plan. All right, well, the cool things of the week. Let's get that kicked off. And Mark, I think you something from Kubernetes, right? 

MARK: Oh, I always have something from Kubernetes. So this is pretty cool. This is introducing container-native load balancing on Google Kubernetes engine. So this is quite neat in that previously you've had things like Ingress. You've had services. That's all been really great. And generally speaking, that's been fine. Usually, when that works, it comes down through the nose then through IP tables, and then directly into the pods and routed through Kubernetes itself. 

This cloud-native load balancing works a little bit more efficiently in that it comes straight into a network endpoint group and actually gets passed directly into the pods themselves. So basically provides optimal load balancing, native support for health checking, some graceful termination, and optional data paths, increased visibility and security. So it's quite a neat little project. You should probably check it out. It is the network endpoint groups. So make sure to check that out. And we'll have links. 

MELANIE: It's a good post. And it's also got great visuals, which we're always a fan of. 

MARK: Yep. 

MELANIE: Another cool thing of the week that we want to mention is there's a post we're going to share that's simplifying cloud networking for enterprises. And it's basically announcing the Cloud NAT. And the Cloud NAT is a new Google-managed network address translation service, thus NAT. Basically, you can provision your application instances without public IP addresses. And that still allows you to access the internet. 

So it gives you the ability and some functionality around that in terms of firewall rules, logging, managing the TLS certificates for HTTPS load balancers. You don't have to do that manually. They're a more automated system. And there's a number of new load balancing features that they share-- things like user defined request headers and network tiers for load balancing, and Cloud Armor, and so forth. So you can check it out. 

MARK: I quite like this because whenever I see it, I think to myself, a NAT router is what I have at home. But now they just have Google WiFi points in the data center or something. 

MELANIE: Oh, yeah. Yeah, good point. All right, and next up. 

MARK: So we've got some great new announcements for Cloud Storage as well. And there several of them, which is pretty neat. So we have a new dual region option available in beta, which I think is really nice. So previously, we've had multi-region and we've had single region. Now you can actually do dual regions. So if you want some redundancy but you want to have particular locality or particularly close to, say, where you want to do your computation, you can choose that as an option as well. And that's in beta at the moment. 

MELANIE: Apparently, it's also strongly consistent. So when you create a dual region bucket then follow up and request to fetch a list of cert resources, your resources will be in that response. 

MARK: Yeah, which is great. 

MELANIE: Yes. 

MARK: Also, the availability has been raised for Nearline and Coldline data in multi-region locations. So Google is raising its availability SLA for Nearline and Coldline data in multi-region locations from 99.0% to 99.9%. So that's actually a decent raise. 

MELANIE: Yeah, I agree. And basically, the new Cloud Storage has a C++ client library. 

MARK: Yes, and I like C++ because games. 

MELANIE: Last thing we want to mention for the week is that our friends, Liz and Seth, who did this great SRE podcast with us a little while back-- they just released another video on postmortems and retrospectives for SREs and DevOps. And so this is a nice video that covers how to handle postmortems and especially doing blameless postmortems, which is a real crucial thing. And so you should check this out. 

MARK: Definitely. And if you hadn't listened to the episode before, it's episode number 127. And we'll make sure to put a link in that in the show notes as well. 

MELANIE: Agreed. Great. All right, Mark, think it's time to get into the interview. 

MARK: Yeah, let's go talk with Patrick and Mike. 

Well, I'm very excited today to have two staff software engineers working on some interesting projects for Java for Google Cloud. We have Patrick Flynn and Mike Eltsufin. Hopefully I git that right. How are you both doing? Patrick, how are you doing today? 

PATRICK: I'm doing great, thanks. How are you? 

MARK: I'm good. How are you doing, Mike? 

MIKE: Pretty good. How's it going? 

MARK: Good. Well, thank you both for joining us today. I really appreciate you both taking the time. We really appreciate it, I should say. Before we get started, I know we've got a lot of fun and interesting things happening in the Java ecosystem for Google Cloud. But why don't you tell us a little about who you are and what you do? Patrick, why don't you go first? 

PATRICK: You know my name is Patrick Flynn. I'm the tech lead of the Java tools team for Google Cloud. We build all kinds of useful little tools for our Java developers who target Cloud. If you're familiar with App Engine, we own the IDE and build integrations that you can find IntelliJ, and Eclipse, and [INAUDIBLE] for App Engine. And lately, we've been focusing on the Kubernetes workflow and how to make that a less painful experience for Java developers. 

MARK: Nice. And how about you, Mike? 

MIKE: Yeah, so I'm also a software engineer in Google Cloud. I'm a tech lead of a team called Cloud Java frameworks. And we've been recently focusing mostly on building integrations between Spring framework and Google Cloud and bringing all that goodness of Spring framework, Spring Boot to Google Cloud users. 

MARK: Sweet, so it sounds like there are, what is it, two big projects that are happening? I don't know. Who can give us an overview of the new stuff that's been happening for Java developers? Because it sounds like there's been some cool stuff happening. 

MIKE: So I guess from my point of view, in terms of the frameworks, we just released a few months ago the first official version of Spring Cloud GCP, which is a project that does this integration between Spring framework and Google Cloud. So that's been new. And that's pretty exciting for us. And I think a large part of the Java developer community would be excited about it as well because we're making it a lot easier now for Spring developers to take advantage of Google Cloud APIs. 

That's from my point of view. There's also a bunch of tools that Patrick's team is working on. And he can could talk about that, I guess. 

PATRICK: Yeah, I guess the latest thing that we've released for tools has been Jib, which is a Java-specific container builder. 

MELANIE: For those who might not know, can you tell us a little bit more about what are Spring frameworks? 

MIKE: Sure. So Spring framework has been around for a long time. Probably over 10 years now. It started as a dependency injection framework for Java. And it was also sort of an alternative to the JEE framework that a lot of people were using to build enterprise applications. It has grown quite a bit since then, and it's become more of an umbrella framework with all kinds of integrations for enterprise application development. 

And in the past few years, they also brought Spring Boot, which made it even easier to build enterprise applications by taking advantage of this principle of conventional configuration. So that's Spring and Spring Boot. They're fairly popular today among Java developers, especially doing enterprise applications. And that's part of the reason why we are focusing on that framework. 

MARK: What's our integration there? What are we actually doing to make Spring and Spring Boot easier for Google Cloud? Because Spring's a version of control framework. And Spring Boot's a NBC type frameworks. So what's the deal there? 

MIKE: So there's a lot of things in Spring framework, Spring Boot. A lot of those things are integrations with existing tools that are useful for enterprise application development, like messaging systems, different databases. They really try to make it very easy to use those. However, they are no out of the box integrations, at least in the past, that would work with Google Cloud. 

So what we've done is we've basically looked at all the different subprojects within Spring framework and try to find a match in the Google Cloud APIs and services where we could apply those abstractions and idioms and implement those bindings essentially. So we've done that for a bunch of different services in Google Cloud now, including databases like Spanner, Data Store, Cloud SQL, as well as messaging, so Pub/Sub, [INAUDIBLE], configuration. Almost anywhere where there is some kind of match between Spring framework and Google Cloud, we tried to make that work better through Spring. 

MARK: So does the Spring framework have some kind of higher level abstraction? Is that how the developer sees things? Is that how that works? 

MIKE: Yeah, they have a whole bunch of abstractions for different purposes. For example, for databases, they have a project called Spring Data. There are some interfaces and abstractions that apply across different Spring Data implementations. But they also leave the flexibility you expose the specific features of a database through that as well. So as much as Spanner's a relational database, but there are some very unique features of Spanner. And we're able to expose the unique features, as well as comply with idiomatic Spring Data interfaces so that people can easily migrate from one database to another, yet they still able to use the unique features if they need to. 

MELANIE: Why is Google investing? Why does this matter for Google to develop Spring Cloud for GCP? 

MIKE: We care about Java developers. We want them to be happy on GCP. So-- 

MELANIE: Do we care? Do we really care? 

[LAUGHTER] 

No, we care. 

MIKE: We really want to make that experience great for them. And we know that a lot of Java developers are on Spring framework, and we really want to make it as easy as possible for them to move their applications to GCP or write new applications using Spring framework for GCP. And we know that there are a bunch of benefits to using Spring framework and Spring Boot. For example, it eliminates a lot of the boilerplate code that you have to write. So it's a lot easier to get started with. 

We're really trying to meet developers where they are. And where they are is using Spring framework as far as we could tell. 

MELANIE: It makes sense. 

MARK: From a developer perspective, how do I set this up? if I have a GCP project, do I need to import credentials? Or is it seamless? How does this work? 

MIKE: Yes, we have a bunch of Spring Boot starters. So I mentioned conventional reconfiguration. So we try to not make you configure too many things and instead auto-discover whenever possible, yet allowing also to override those defaults. With credentials, for example, as soon as you bring in our core starter from Spring Cloud GCP, it will try to auto-detect credentials wherever you're running. If you're running locally, it will try to find your local credentials that you've set up using environmental variables or G Cloud. If you're running on GCP, it will also try to auto-discover the normal places where you would find the credentials on GCE or what have you. 

Alternatively, you could always specify a path to the key. So we will add that to be a possibility as well. And for a lot of these things, we make assumptions for the configuration. And you can always override that. 

MARK: I guess that's nice then. It means if I'm using Spanner or Google Cloud Storage as a development thing, I don't have to have that locally. And my local environment can just talk straight up to whatever my development environment is. 

MIKE: If you develop it locally, and you want to use Spanner, of course it will need to talk to Spanner remotely, because there is no emulator for Spanner. 

MARK: Yep. 

MIKE: If you already have G Cloud set up and you set up credentials, it will automatically use those to connect to Spanner. You don't need to really configure anything. You just add our starter, and it will work out of the box. 

MELANIE: I was going to ask-- what are some of the challenges you've seen that you're working on trying to address for some of the users now? 

MIKE: At first, when we started, we were trying to basically guess what the developers will need, like, which parts are exposed to the Spring extractions and which ones we should hide. It's challenging when you don't really have too many users giving feedback initially. But now that we've kind of gone through the first official release, we're getting a lot more feedback and we're getting users engaged on GitHub. 

So it's getting a bit better to set direction on what we should be focusing on. And there are so many different possibilities where we could do integration between Spring and GCP, and just prioritizing those things are sometimes difficult. So getting the user feedback is very important. 

MARK: That sounds great. 

MIKE: This project is actually a close collaboration with the Spring team, the creators of the Spring framework, and Pivotal, which is the company that houses them. We've been working with them from the very beginning on this. And they've been helping set direction on this project. And they've been very actively guiding us throughout the whole process. 

We frequently meet with them and talk about design, implementation, all of that. So it's a very close partnership with Pivotal and Spring team on this. So we have that expertise being funneled into the project, as well as kind of from our side, the Google Cloud expertise. 

MARK: Excellent. So if I'm running a Spring Boot application, and I'm not that familiar with that ecosystem, are there any restrictions on where I can run that app? Is it just on a App Engine maybe or just in a Docker container, or-- 

MIKE: Yeah. At this point, you can pretty much run it anywhere. It works on App Engine. It works on Kubernetes. It works on GCE, wherever you can run Java. 

MARK: Yep. 

MIKE: Spring Boot is essentially an executable JAR. So whenever you can run that, it can also run as a WAR file. So if you're using, like, App Engine standard, you could also do it there. 

MARK: So speaking of run times, we have some new tools for being able to run Java applications inside containers. Patrick, I know you're joining us today to talk to us about that. Do you want to give us a little run down on Jib? 

PATRICK: Yeah. I'd be happy to. So what is Jib? Jib is basically an answer to what should be the right way to containerize a Java application. The thing that kind of stands out about using Jib from the way that people traditionally containerize using Docker files-- there are a few things, really. 

The first is that you don't need a Docker daemon running on your machine, which requires root. And that kind of suits a lot of people, as well as enterprise CI environments, which have problems with that. That wasn't the focus for why we built Jib, but it was kind of a nice surprise that a lot of users adopted it for that reason. 

The main reasons we focused on building Jib is because we felt that the way that people were packaging containers using Docker file tended to be inefficient. So Jib typically will build a Docker container kind of marginally faster than your first build. But then the incremental builds can be dramatically faster, depending on the project. 

And then, the other aspect of Jib that's pretty important is that it's much more declarative. While the Docker file will allow you to run arbitrary commands, and therefore, is pretty much not a reproducible build, a Jib-built config is declarative. And that makes it really easy for end users to understand. 

It means that we can set a lot of defaults, which means that you have to configure very little to get started. And it allows our tooling to sort of incrementally optimize both the build and the eventual run time. So yeah. It just makes it a lot easier for Java developers who have this hump of needing to turn their traditional packaging formats into containers so they can target new platforms like Kubernetes. 

MARK: And from a developer perspective, how do I use Jib? 

PATRICK: Great. Good question. First off, I'll start with a little bit of context. Jib actually came from this local container guru at Google called Matthew Moore. If you're not familiar with Bazel, Bazel is this Google-built system, which we use internally and which we've open sourced recently. He built a bunch of containerizers for Bazel that worked very much like Jib. 

But what we've seen is that Bazel is like a big hump for people to adopt a better way to containerize their applications. Most of our Java users are on Maven or Gradle. So what Jib does is it takes a lot of that strategy that the Bazel rules use and implements it as a Java library and integrates it into Maven and Gradle plugins. 

So if you wanted to use Jib, all you have to do is just set up your [INAUDIBLE], your [INAUDIBLE] Gradle to use our plugin. And the most minimal config you really need is just specifying where your container registry images should be pushed. 

MELANIE: You'd mentioned about Jib being more efficient than Docker. Can you explain a little bit more about how it is more efficient? 

PATRICK: You know, first of all, I think Docker file was a really great sort of solution initially to bring people into the world of containers, right? It's very flexible. And it gives people the tools they need to take whatever arbitrary packages they have and containerize them. That being said, you really need to understand a lot of things about how Docker works to optimally package your apps and have a good incremental build time. 

So the first thing that we do is we kind of standardize the way that we build our images. And we layer them in a way that makes more sense for incrementality. So for instance, your dependencies-- so a lot of projects could have tens or hundreds of megabytes of JARs that they use in their project. [? Your ?] dependencies will be put into a Docker layer that will probably not change very often. And your source code and your resources also go into separate layers. What that means is that, when you do an incremental build, instead of having to repackage the entire container and push possibly hundreds of megabytes, you'll probably-- if your classes are only a few megabytes-- you'll only have to push that change to the registry to actually get that new image out there. 

MIKE: How does this work without Docker? Is this magic? 

MELANIE: Everything's magic. 

PATRICK: I always assumed that there is a lot of magic there. But when you kind of dig into the container image spec, it's not that complicated. It's really a bunch of [? tarballs ?] with metadata. So that's what the layers are, right, kind of, like, these concentric [? tarballs. ?] So we just built a library that anybody can use, actually, if they want to integrate it into their system of choice, to help you build a container image using [INAUDIBLE]. 

MARK: This is nice. Does this fit anywhere specifically into a Kubernetes workflow, or are there any hooks in that way? 

PATRICK: Yeah. That's a good question. The funny thing is, you know, if you talk to Kubernetes developers, there's not really much of a standard around a workflow. Most people are kind of asking me about what their workflow should be, which is a shame, because I want to find out what theirs is. 

And the one tool that we've seen gain significant adoption has been Scaffold, which is a CLI tool, also provided by Google that basically will wash your microservice project or a set of microservice projects based off of a YAML, because this is Kubernetes, and will actually trigger rebuilds and push those images and update your cluster config so that you kind of get, like, a hot reload feel from your application, assuming that your container builds are fast enough. So what we've been doing is trying to make sure that Scaffold users who are Java users have a decent experience. 

Scaffold in Java is not great at the moment. Because, as you can imagine, a file watcher that basically rebuilds on every file change for Java doesn't necessarily make sense, especially given how heavyweight some Java builds can be. So we've been looking at that. Some users have had, actually, some pretty good success by using this task that we have in both of our plugins, which generates a Docker context. 

So you get, effectively, kind of the Docker version of what Jib would have created and pointing Scaffold to that because Scaffold understands Docker. But we're actually working currently with the Scaffold team to build a Jib builder for Scaffold. And that should be available within the month or so. 

MELANIE: What do you enjoy most about working with Jib and with Java? 

PATRICK: What I like about working with Jib is that I don't have to think too much about containerization. And what I think is powerful also about the way that Jib packages your app, right-- because Jib doesn't take your JAR or your uber-JAR or your WAR and put it into a Docker container. It understands Java, right? It understands that you have resources, classes, and libraries. And it lays out a file system. And the real package is a container, right? 

I think what people have sort of missed about containerization is that they've started packaging their packages. And a lot of the complexity that you see in the Java ecosystem around uber-JARs or executable JARs, right-- they're not really relevant in the container world, where you have your entry point and you can just arbitrarily lay out files anyway that you like. And make it work-- because you have control over the Java [? invocation. ?] So that's what kind of excites me about Jib and the way it makes containers a native packaging format for Java. 

MELANIE: Nice. 

PATRICK: The Java ecosystem itself-- I just think it's amazing how long it's lasted and how huge it is. And it's incredibly important for Google. I think Java is the largest code base internally at Google. And we work with the internal Java team, as well. A lot of the inspiration for the way that Jib works comes from the way that Google containerizes applications and has been for many years now. 

I just love the community out there, too. You know, I don't know if you've heard of JHipster and Spring and Micronaut-- there's just a lot of innovation actually happening in that ecosystem, as well as the new JVM languages that are getting popular, like Kotlin, in particular, with the adoption it's had on Android. It's just really exciting. 

MARK: So I'm wondering if I'm going to date myself for how long I've been out of the Java ecosystem. Let's say I'm building a web server with something like Jib. I assume I still need to embed something like a Jetty or something that actually runs the server. How do I tell it, like, how do I expose ports? Is there a best practices there? 

PATRICK: Yes. Currently the type of applications that we support in Jib are only the Java [? DES ?] type applications and not WAR style applications, although we're adding WAR support, and that should be available pretty soon. So anything that you could run on your machine using Java-CP will work in Jib. And what people typically do for web service is either they use Spring Boot or some analog of that. 

MARK: I'm showing my age. 

PATRICK: Micronaut is another framework. There's a Play Framework. 

MARK: There's a bunch. 

PATRICK: There's, like, so many of them. 

MIKE: Yes. From the Spring Boot point of view, it produces a JAR. But it really embed either Tomcat or Jetty, or more recently, it's actually able to use a lower level API, which is called Netty, a Netty server. It's much more lightweight. It's reactive size. It's really cool. And any version of Spring, you could use that as well. 

PATRICK: And you know, since this is Google, you can also obviously create a gRPC endpoint-- 

MARK: Of course. 

PATRICK: --very easily. And package that. 

MARK: And since you brought it up, Mike, is there, like, a Jib, Spring Boot, Google Cloud mashup musical thing happening at some point? Is that a thing? Is there a workflow that way? 

MELANIE: A special musical-- it needs to be musical. 

MARK: It needs to be musical. 

MIKE: Yeah, I'm probably not the best person for the musical part, but we can get help for that. There's no reason why it shouldn't work. I'm pretty sure people have done it. I don't know, Patrick, if you are aware of any samples, demos that we have for them? 

PATRICK: You know, they're very orthogonal tools. So they just work well together. I think that it was a demo at SpringOne for Knative, where you can actually-- one of the cool things about both Maven and Gradle is that you don't actually have to configure a plugin internally in your build file to actually use it. 

So what Knative does with their build template [INAUDIBLE]-- they have a Jib build template that you can basically check out any Spring Boot project. And it'll build a container without modifying the project at all. So that's a really nice and easy entry point to just go from an arbitrary Spring Boot project to something that's running in Kubernetes. 

MIKE: The other thing with Spring Boot is you really write very little code in Spring Boot. There's a lot of other dependencies you might bring in. And while you're developing the application, the fact that you're only modifying this one class file-- Jib makes it very efficient to update your container because it doesn't have to update all those other dependencies that are not changing in the process of the development. 

MELANIE: So how can developers get involved in contributing to these projects? Spring Cloud GCP is obviously open source. You can find us on GitHub. We love all kinds of contributions, feedback, issue submissions, bugs, pull requests. 

All of that is welcome. We always love when we see the community contributing and getting involved in the project. So just get on our GitHub and go from there. 

PATRICK: Yeah. I would say the same for Jib. But we have-- I think it's called Gitter chat from our GitHub page. You can find it under the Google Container tools org. There's also SIG App, which we attend regularly, which is a Kubernetes special interest group which talks about some of these things. 

And the Java and Scaffold Slacks on Kubernetes-- the Scaffold one definitely has a lot more people talking than the Java one. But I'd love to see more people participate in that Slack channel. And I think Scaffold also has a public, bi-weekly meeting that people are welcome to attend, as well. 

MELANIE: So if somebody's new-- like, never done anything with Spring or with Jib or with Java, and they are interested, how would you recommend them getting involved? 

MIKE: If they have never used Spring, there are a lot of sample projects we have in our GitHub repo you can get started with. We have pretty good documentation. And Spring itself is great, the [INAUDIBLE] of there are so many books on Spring and tutorials you can find. 

Besides that, we actually have code labs, Google Cloud, that you can follow along on Google Cloud and just get things running. We'll link to that. And then, just that you can experience it right away without really knowing too much about how to build applications with Spring or GCP. 

MELANIE: Cool. Thank you. 

MARK: Patrick, anything on your end? 

PATRICK: The best source of documentation for Jib is our GitHub page. 

MELANIE: Cool. 

MARK: Excellent. 

MELANIE: Thank you. 

MARK: Well, before we wrap up today, is there anything that you want to make sure that our listeners know? You going to be at any events? Is there anything we haven't covered in the podcast, anything at all? We'd love to hear it. 

MIKE: I just want to say that even though we are ready to release the 1.0 GA release of the project, we're adding so many new features right now, and they're coming out soon. We're bringing support for [? DataSource. ?] So a Spring beta [? Data ?] Store is coming soon. We're looking into the reactive APIs. So look out for all those new things coming. And we're happy to hear your feedback on helping us set the direction. 

PATRICK: My team is going to be at KubeCon in Shanghai and at Oracle Code One. And I'll be at KubeCon in Seattle. So if anybody wants to get in touch with me, definitely feel free to reach out. I'd love to talk to people. 

MARK: I'll see you there. 

PATRICK: Cool. 

MELANIE: Well, thank you both for coming on the podcast. 

MIKE: Thanks for having us. 

PATRICK: Yeah. Thank you very much. 

MIKE: It was a blast. Thanks. 

MARK: Cheers. 

MELANIE: Thank you, Patrick and Mike, for coming on the podcast. It was great to talk to you guys about Java, Jib, Spring, all the things. 

MARK: Yeah. Absolutely. It was actually really fun. I haven't touched Java in a really long time. So it was a really nice chance to revisit the ecosystem. 

MELANIE: I know. It's been a little while for me, as well. So Mark, let me ask you the question of the week, as we never do. What if we have an object in Google Cloud Storage and I want to automatically change an aspect of it? 

And some of the examples that we were mentioning is, like, downgrading the storage class of objects older than 365 days to Coldline storage, which is definitely a good question considering I know a number of people hear about Coldline, but they don't particularly think about it; deleting objects created before a certain date, like January 1, 2013 or something; and keeping only the three most recent versions of each object in a bucket with versioning enabled. 

MARK: Yeah. So this is something I actually also came across, too, for the project I work on. I work on Agones. And we have development version builds. We have development artifacts that go into Google Cloud Storage with every PR that comes in. And obviously, that could grow to really large proportions. 

So what I wanted to be able to do is basically say is, if there was a build that's older than 30 days, then just delete it. Like, we don't care. I was thinking, oh, maybe, I have to write a script or do all that kind of stuff. I don't want to do that work. 

But within Google Cloud Storage, there's actually a thing called Object Lifecycle Management, which is really, really handy. And you can do this through gsutil. You can do it through the console. You can do it through REST APIs, too. But basically, you can kind of just wander into the console, and grab a bucket, and select some object conditions-- say what age it is, maybe, or the creation date, or what storage class it currently is. 

And then you can say, like, what is the action that I want to take? Do I want to set this to Nearline? Do I want to set this to Coldline? Maybe I want to delete it. And I can put these across my buckets, which is really nice, as well. 

And so this means, then, that it's really easy to be able to do some pretty good management of the stuff that you have in Google Cloud Storage and control both your costs and also how much stuff you store and where it goes, without having to really write any code or do anything like that. It's kind of just built in, which is super nice. 

MELANIE: Nice. 

MARK: Yeah. 

MELANIE: You going anywhere special next couple of weeks, next couple of months? 

MARK: No, I'm not really. I'm going to take some vacation at some point in November. But outside of that, I will be at KubeCon in December, which I'm super excited about. 

MELANIE: You're going on vacation? You're not allowed to go on vacation. 

MARK: Yeah. I'm going on vacation in November. Bye. 

[LAUGHTER] 

MELANIE: Good luck, right. All right. So anyways, you were saying KubeCon in December? 

MARK: KubeCon in December, which I'm really, really, excited about. What are you up to? 

MELANIE: So this week, Twilio's conference SIGNAL and GitHub's conference Universe are happening this week. So a lot of people are in town, a lot of things are happening I'm planning on actually going to Twilio's $Bash event on Thursday. So if anybody is going to be there, feel free to come up and say hi. And then, at the end of November, I will be at SOCML. 

MARK: What is SOCML? 

MELANIE: I have no clue. No, it's an unconference in the machine learning space. And it'll be good fun to connect with people on. So I'm looking forward to it. 

MARK: Excellent. Fantastic. All right, Melanie. Well, thank you for joining me on the podcast yet again this week. 

MELANIE: Good to talk to you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]