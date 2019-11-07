+++
audioDuration = "00:32:32"
audioFile = "Google.Cloud.Platform.Podcast.Episode.173.mp3"
audioSize = 47259329
categories = ["Cloud Run", "Serverless", "Kubernetes", "Knative"]
date = "2019-04-17"
description = "Mark Mirchandani is our Mark host this week, joining Michelle Casbon in a recap of their favorite things at Next! The main story this episode is Cloud Run, and Gabi and Mark met up with Steren Giannini and Ryan Gregg at Cloud Next to learn more about it."
draft = false
episodeNumber = 173
hosts = ["Mark Mirchandani", "Gabriela Ferrara", "Michelle Casbon"]
title = "Cloud Run with Steren Giannini and Ryan Gregg"
image="/post/episode-173-cloud-run/images/hero/hero-EP-173.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/becf8u/episode_173_cloud_run_with_steren_giannini_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) is our Mark this week, joining new host [Michelle Casbon](https://twitter.com/texasmichelle) in a recap of their favorite things at Next! The main story this episode is Cloud Run, and [Gabi](https://twitter.com/gabidavila) and Mark met up with Steren Giannini and Ryan Gregg at Cloud Next to learn more about it. 

Announced at Next, Cloud Run brings serverless to containers! It offers great options and security, and the client only pays for what they use. With containers, developers can use any language, any library, any software, anything! 

Two versions of Cloud Run were released last week. Cloud Run is the fully managed, hosted service for running serverless containers. The second version, Cloud Run GKE, provides a lot of the same benefits, but runs the compute inside your Kubernetes container. It's easy to move between the two if your needs change as well.

<!--more-->

##### Steren Giannini

Steren is a Product Manager in the Google Cloud serverless team. He graduated from École Centrale Lyon, France and then was CTO of a startup that created mobile and multi-device solutions. After joining Google, Steren managed Stackdriver Error Reporting, Node.js on App Engine, and Cloud Run.

##### Ryan Gregg

Ryan is a product manager at Google, working on Knative and Cloud Run. He has over 15 years experience working with developers on building and extending platforms and is passionate about great documentation and reducing developer toil. After more than a decade of working on enterprise software platforms and cloud solutions at Microsoft, he joined Google to work on Knative and building great new experiences for serverless and Kubernetes.

##### Cool things of the week

* News to build on: 122+ announcements from Google Cloud Next '19 [blog](https://cloud.google.com/blog/topics/inside-google-cloud/100-plus-announcements-from-google-cloud-next19)
* Mark's Favorite Announcement:
     * Network service tiers [site](https://cloud.google.com/network-tiers/)
* Michelle's Favorite Announcements:
     * Cloud Code [site](https://cloud.google.com/cloud-code/)
     * Cloud SQL for Postgres now supports v11 [release notes](https://cloud.google.com/sql/docs/postgres/release-notes)
     * Cloud Data Fusion for visual code-free ETL pipelines [site](https://cloud.google.com/data-fusion/)
     * Cloud AI Platform [site](https://cloud.google.com/ai-platform/)
     * AutoML Natural Language [site](https://cloud.google.com/natural-language/automl/docs/)
     * Google Voice for G Suite [blog](https://gsuiteupdates.googleblog.com/2019/04/google-voice-for-business-cloud-telephony.html)
     * Hangouts Chat in Gmail [site](https://gsuite.google.com/products/chat/)
     * Kubeflow v0.5.0 release [site](https://github.com/kubeflow/kubeflow/releases/tag/v0.5.0)


##### Interview

* Cloud Run [site](https://cloud.google.com/run)
* Knative [site](https://cloud.google.com/knative/)
* Knative Docs [site](https://github.com/knative/docs)
* Firestore [site](https://firebase.google.com/docs/firestore/)
* App Engine [site](https://cloud.google.com/appengine/)
* Cloud Functions [site](https://cloud.google.com/functions/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Cloud Run on GKE [site](https://cloud.google.com/run/docs/gke/setup)
* Understanding cluster resource usage [site](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering)
* Docker [site](https://www.docker.com)
* Cloud Build [site](https://cloud.google.com/cloud-build/)
* Gitlab [site](https://about.gitlab.com)
* Buildpacks [site](https://buildpacks.io)
* Jib (Java Image Builder) [site](https://github.com/GoogleContainerTools/jib)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Cloud VPC [site](https://cloud.google.com/vpc/)
* Google Cloud Next '19 All Sessions [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqIXvUGVrFuZibCUdKVzEoUw)

##### Question of the week
If I want to try out Cloud Run, how do I get started? 

* Get started with the beta version by logging in [site](https://console.cloud.google.com)
* Quicklinks [site](https://cloud.google.com/run/docs/quickstarts)
* Codelab [site](https://codelabs.developers.google.com/codelabs/cloud-run-hello/index.html)

##### Where can you find us next?

Gabi is at [PyTexas](https://www.pytexas.org/2019/)

Jon and Mark Mandel are at [East Coast Game Conference](http://ecgconf.com)

Michelle & Mark Mirchandani will be at [Google IO](https://events.google.com/io/) in May

Michelle will be at [Kubecon Barcelona](https://sched.co/MPgr) in May

{{< transcript "[MUSIC PLAYING] MARK: Hello there, and welcome to episode number 173 of the weekly Google Cloud Podcast. I'm Mark, and I'm here with Michelle. Hello, Michelle." >}}

MICHELLE: Hi, Mark. How's it going? 

MARK: I'm going well. How are you? 

MICHELLE: At least you're going. 

MARK: I'm going well. I'm not staying well, but I'm going well. 

MICHELLE: I'm doing well. I'm really excited about our topic today. 

MARK: OK, what is our topic today? 

MICHELLE: We're talking Cloud Run. We had an action-packed week last week. We were very busy at Cloud Next. The show kept us running on our feet all week long. But we have something really exciting to share with you today. It's news that we'd been sitting on for months, and we're very excited to be able to talk about it. 

MARK: Yeah, I think there's a lot of buzz about Cloud Run. And I think that it was kind of one of the major announcements out there. It's something that people have been asking for, right? Because Google has all these different serverless offerings, but there was none that kind of just fit that real nice point that Cloud Run comes into, which is I've got a container, I want to make it, in the cloud, go host things. Bam-- Cloud Run just does that. 

MICHELLE: Yeah, that's right. So this is a gap that people have been asking about for a long time, and we finally have all the details for you. 

MARK: So we're going to talk about that in just a second. But before that we've got to talk about the cool thing of the week. 

[MUSIC PLAYING] 

MICHELLE: Only one thing, Mark? 

MARK: Well, if we had to make it one thing, why not make it a list of 122 things? 

MICHELLE: I like your style. There was an announcement that listed all of the cool things, but we'll just cover a couple of them. If you want to go into detail, you can. But we'll just talk about our favorites. 

MARK: Yeah, I think that if you want to click through the link, which will be in the description, it talks about basically all the cool things that got announced. A lot of product announcements, a lot of additions to existing products, a lot of expanded feature sets. 

I'd like to talk about network service tiers, which is really cool for people who kind of want to put a little bit more customization into their projects. Because typically speaking, Google has this ultra-high fast network, and that's great and it's super, super good. But at the same time, a lot of people don't actually take usage of that speed, right? And when every millisecond counts, you want to make sure that you use that premium tier. But what happens if you're not as concerned if something gets there in a couple of seconds or whatever. That's where you can use the new standard tier to just kind of jump in. 

And the key part here is the standard tier is cheaper. So now you actually have flexibility to say, OK, well, let's put the projects that aren't mission critical or the ones that are just development projects, let's put those on standard tier so we can actually save a little bit of money, and then kind of just have that better optimization to be like, do I want to pay for better performance or go with the standard performance? 

MICHELLE: Yeah, nice. So that's the backbone for a lot of the services that we run. So it's good to have different options for people to choose from. 

One of my favorite announcements was Cloud Code. We demoed this. We got to see this up on the keynote stage during the developer keynote. This is something that I got to try out about a month or so ago, and I absolutely loved it because it's essentially an IDE for developing code on Kubernetes. It cuts out a lot of the manual steps and automates a lot of those tasks for you. So I really love Cloud Code. I love what that team has done for us. 

And we had a couple of other exciting announcements. 

MARK: Many cool things. 

MICHELLE: Many cool things. I'm also really happy to hear that Cloud SQL now supports Postgres 11 just last week. So I gave a session at Next last week and in my demo, I showed off Postgres v9. I had no idea that v11 would be available. So that's especially exciting. 

A couple of other things that I really liked-- Cloud Data Fusion, it's a GUI for running ETL pipeline. So completely code-free. It's a way of integrating with a lot of different types of data stores and you don't need a whole lot of expertise. This reminds me of my days as a data engineer. If you haven't tried that, check it out if you do any type of ETL or data engineering. 

There were also a lot of exciting developments in the Cloud AI platform space. There were quite a few sessions. There was one on using deep learning images. We check out my session. It was on using Kubeflow. Quite a few things part of the AI platform. One of them that I really liked was Auto ML natural language, which brings me back to my days as a startup where we tried to build something similar. Now we have a solution. That one lets you do, without having to know a whole lot about data science or machine learning. 

It's an API that you can call and get predictions about your text data. A few other exciting things-- OK just two more. 

MARK: All right. Two more. Two more. 

MICHELLE: These are G Suite add-ins. I thought these were especially interesting. So Google Voice for G Suite, that means your business accounts. You can have a phone number from anywhere that you can access your G Suite account. And also Hangout Chat from Gmail. 

So if you are a G Suite user, you have those two nice things waiting for you. OK, one more cool thing. 

MARK: OK, OK. Well, you said two more. All right, go. Go for one more. 

MICHELLE: OK. So this is one of the Cloud AI platform announcements. This is actually is an open source announcement. Kubeflow released its 0.5.0 release last week. So that's out on GitHub. You can find it if you were a previous Kubeflow user. 

This one has a ton of changes. And I promise that you'll like them. Really nice UI changes, a lot of pipelines features, and a ton of enterprise support. So that's something that I've personally been working on very hard in the lead up to Next. So I'm especially excited to see that out in the open. 

MARK: So one extra cool thing among a lot of smaller cool things. Definitely check out that blog post. I think you'll see kind of a cool highlight list of all the different product announcements. 

Again, those feature releases, a lot of cool stuff there definitely worth checking out. But since we're here to talk about Cloud Run, why don't we just go ahead and dive right into the interview. 

MICHELLE: Sounds great. 

[MUSIC PLAYING] 

GABI: I'm here with Steren and the Ryan. And they're going to be talking about Google Cloud Run. 

STEREN GIANNINI: Hi. I'm Steren. I'm a product manager on the Serverless team at Google Cloud. 

RYAN GREGG: And I'm Ryan Greg. I'm also a product manager on the Serverless team at Google Cloud. 

GABI: Cool. Tell us more about the announcement from today from the Cloud Run. 

STEREN GIANNINI: So 10 minutes ago, we announced Cloud Run, something we've been walking on for a very long time now. And we are so excited to release it to the world and introduce it to everybody. So Cloud Run basically brings serverless to containers. It allows you to run any HTTP stateless workload on the fully serverless environment. 

MARK: So first things first, can you talk about like, what does serverless mean to you? 

STEREN GIANNINI: We define serverless with the following characteristics. First and foremost, it's an operational model. So you always use a fully managed infrastructure. You always pay for what you use. And you also have a managed security. 

And when you think about it, with that definition of serverless, you can realize that it doesn't apply only to function as a service. It applies to even more than just compute. If you take the definition and look at something like Filestore, which is a serverless database, it meets those requirements. And we quantify Cloud Filestore as a serverless product for data. 

If we look at serverless compute, we can refine a bit more the definition. We can add some development model on top. So when you develop for a serverless compute environment, you use what we call services. So it's more service-full than serverless, actually. 

So you're developing time of service, maybe microservices. All of them are infinitely scalable and they are stateless. So really, they auto scale based on their needs. 

And more importantly, you only pay for when you use them. And that applies to everything we quantify as serverless, including compute. When you don't send any traffic or events to a function or Cloud Run service, then you just don't pay anything. 

MARK: Yeah I mean, Google has a history of serverless products that are out there, right? 

GABI: BigQuery, for instance, you pay what you use, actually. 

RYAN GREGG: Yeah. You can actually go back almost 11 years now to App Engine. It wasn't serverless at the time. That word hadn't been coined yet. But it really focused on the idea of just allow the developer to focus on the code, the thing that actually brings value to their business, and have Google take care of everything else. 

GABI: So interesting that you bring up App Engine, because one of the people that I know always said like, it's amazing product that came out and before the time did not give the much value that was due. And I think now of Cloud Run. And the thing is going to be big. You know, because now you can run anything on it? Any language, right? 

RYAN GREGG: Yeah, that's right, because we're based on using a Docker container as the artifact that you provide. You can run any language, any binary, any code that you can put into a container will run great on Cloud Run. 

GABI: You create your own language and put in a container. 

RYAN GREGG: You certainly could, yeah. 

STEREN GIANNINI: Some of what alpha testers have put into that containers even a custom binary. So they don't even give us the source code or anything. They compile it somewhere or maybe even themself. They got these binary from somebody else and they run it in a free [? serverless ?] environment. 

So indeed, we've heard from App Engine customers or Cloud Function developers that they were feeling a bit limited by the available languages. So you know, even if we support about a larger variety of languages, you always have this small library that you wish was available in App Engine. 

You always has this language that you wish, oh, I wish Cloud Functions supported that language. With containers, you can do anything. You can put any language in a container or any software, any binary, any library. 

RYAN GREGG: In fact, one of the demos that we're doing here at Next is using OpenOffice in a container to convert a Word document into a PDF. So we've taken you know, all the legacy technology embedded into the container. And then we can run that serverlessly. It's pretty cool. 

MARK: So it sounds like there's two different versions of Cloud Run that are kind of announced though. What's the difference between them? 

RYAN GREGG: That's right. So there's Cloud Run, which is the fully managed hosted service for running serverless containers. And there's Cloud Run Engine GKE, which provides many of the same benefits, but actually runs the compute inside your Kubernetes container. So you get the same auto scaling benefits, you get the same URL programming, you get the same container model and the same container runtime contract. 

But the compute itself is actually running inside your Kubernetes Engine cluster with those same APIs those same CLI, the same cloud console interface being able to deploy across both of them. So you get a great story for being able to use the platform that makes the most sense for your organization, whether that's a fully managed hosted compute product or the Kubernetes product that you may have already invested in. 

GABI: For instance, I already have let's say a GKE cluster. And there I run some software. What kind of scenario Cloud Run would be useful for that, to run in there and not in managed service? 

RYAN GREGG: There's a number of different reasons why you might choose to do this. For one, you have a lot more customization in the types of compute platform that you're running on. So if you need a bigger CPU or modern CPUs that available on Kubernetes, you can have those. You can use high memory nodes in Kubernetes so you can have access to a lot more RAM than what you'll have on the hosted service. 

It also lets you run a bunch of different workloads together on the same compute cluster. So if you have workloads that you've previously deployed on Kubernetes that you want to have low latency next to, you can deploy those workloads into your Kubernetes cluster. Kubernetes also gives you access to hardware accelerators, GPUs, and TPUs. So if you have serverless workloads that want to take advantage of the hardware acceleration, you can deploy those from Cloud Run into Kubernetes engine and access the GPUs as well. 

GABI: Machine learning all the things, right? 

MARK: So I mean, it's fair to say that if you are just kind of getting started with it, you'd probably when to use the full serverless one. 

RYAN GREGG: Absolutely. If you don't have Kubernetes already or you just want to kick the tires of Cloud Run, the hosted service is absolutely the way to go. If you're a big organization that has a big Kubernetes investment, then using Cloud Run on GKE probably makes sense. 

STEREN GIANNINI: And the good thing is that it's super easy to change your mind. We have customers who told us oh, I deployed first on the fully managed version of Cloud Run because I was looking for an easy way to get started. And then I realized I was needing to be close to my GKE workload. So I moved it to my cluster. But from a developer perspective, they get the exact same experience, the exact same user interface, the exact same command line, the exact same API, even. 

RYAN GREGG: Yeah, this whole strategy that we have with Cloud Run is really based on what we've heard from customers who have been using App Engine, Cloud Functions, and Kubernetes Engine, where you know, sometimes for an IT need or for some particular reason, they want to move what they have done from App Engine into GKE. And in the past, that was actually somewhat difficult. You had to think about how to rebuild the application. You had to learn how Kubernetes worked. 

There was a lot that went into it. Both Cloud Run and Cloud Run on GKE, it's actually just really simple. You can just redeploy the application container into your Kubernetes engine and everything works. 

MARK: Just take it and chuck it over the wall. [BREAKING GLASS] You're good to go. 

RYAN GREGG: But you know, workload portability isn't the only thing that we wanted to focus on with portability. We wanted to make sure that the skills the developers were building up while they were using Cloud Run were portable as well. So that it wasn't just that you were locked into a serverless platform with this knowledge that you were gaining, but you could deploy it into Kubernetes, or through the open source Knative project actually, into any Kubernetes cluster running anywhere, including an on premises environment. 

STEREN GIANNINI: I think we have to give a little bit more details here. Cloud Run and Cloud Run on GKE both implement the Knative serving API, which is an open source project we launched last year at Cloud Next 2018. And Knative itself, you can install it anywhere Kubernetes run. So if you think about it, that means that the tuning that you built around this API is not only compatible with Cloud Run, Cloud Run on GKE, but also with any Knative implementation. And we have many partners who are authoring managed Knative in their cloud platforms. 

GABI: That's how you keep this scaled to zero on your cluster of Knative helping-- 

RYAN GREGG: Yeah, that's right. One of the features that Knative serving offers is the ability to scale to zero inside the Kubernetes cluster. So we don't change the way the Kubernetes cluster is set up. We don't change the provisioned nodes in the cluster. But we can scale the instances of a container down to zero, or if you're familiar with Kubernetes, the pods in that cluster down to zero for workload. 

And there's another really cool feature that I think came out this week, which is called GKE Usage Metering, which lets you as an organization see how people are using the resources inside your Kubernetes cluster. And so by combining Cloud Run and GKE or Knative with that, you can actually do a scale to zero cost for your internal teams when how you charge them back for the resources they're using in your cluster. 

MARK: So you've got this ability now to take these containers, fully portable, move them around, whether it's Kubernetes associated with Google, Kubernetes hosted somewhere else, you can kind of move all these things around. What's the best way that someone's actually going to start like, managing their build pipelines with this? 

STEREN GIANNINI: So of course, anybody who thinks container thinks Docker. And Docker is an amazing tool to build and push your Docker container. There is a very large ecosystem around Docker file. If you don't know what the Docker file is, it's the very small file that you put to describe how to build your code into a container. 

And don't be afraid if you don't know them. Take a look at them. They are just a very few lines of code where you start from a base image, down many official base image. Like, each language community has official base images posted on Docker Hub. And you basically declare what you want to install into your container. So Docker files and Docker overall is an industry standard today. 

But Google Cloud provides ways to build your containers in the cloud itself instead of your local machines or on premise. So this product is called Cloud Build. So cloud Build will take your source and your Docker files and package this up into a container image fully on demand. So I consider Cloud Build Serverless you don't have to see any servers. You pay only when you build. 

That quantifies that serverless to me. And so Cloud Build and Cloud Run are a good match, right. You go from your code to build artifacts that you build with Cloud Build. And then you deploy it to Cloud Run. What's also super interesting is that Cloud Build has Cloud Build triggers. 

What that means is that I can decide to trigger a build when I'm pushing some commits into a Git branch. So now we start doing continuous integration and continuous delivery, because every time the report is updated Cloud Build will build a container and can also as you want, but can also deploy to Cloud Run. 

RYAN GREGG: I also add Cloud Build is a phenomenal tool for doing builds and doing a lightweight CI like what Steren just described. But the great thing about using Docker containers is the primitive for deploying compute here is that you can actually use any CI/CD system that you have already. And one of our launch partners, GitLab, is actually showing off some of their serverless technology here as well where you can use GitLab to deploy serverlessly into Cloud Run or to Knative. So you could use Cloud Build if you're starting from scratch, or you can use your existing CI/CD pipelines to flow the container straight into Cloud Run. 

STEREN GIANNINI: Last week Buildpacks released a beta version of the PAC command line. And Buildpacks allow you to go from source code in various languages directly to contenders without having to think about Docker files, even. I really recommend to check out Buildpacks. It's a great match to build continentals when you are a language expert. 

GABI: Yeah, I have trouble with Doctor files. I always have to fight them or I lose it. And in the end, someone helps me. 

RYAN GREGG: Yeah, the good thing about the PAC command line tool that just got launched is that you can just type one command inside a folder with source, and it leverages the build packs to go ahead and create a Docker container for you. 

STEREN GIANNINI: So if you are a Java developer, I heard that JIB, Java Image Builder, was an amazing tool. You just import a maiden package in your bundle [INAUDIBLE]. And then in one command you can build your Java app into a container. You don't even need Docker installed locally. 

MARK: Yeah, the JIB thing that was a couple weeks ago. I think it was pretty recent. Just came out and you can easily-- you said, Maven or Gradle, put it into your build pipeline. And then bam. In the same way you're building your containers without having to worry about all the little tweaks that you might need to put in the Docker file. 

RYAN GREGG: This is one of the reasons we're really excited about having containers as the primitive. It's because there is so much tooling and such a large ecosystem built up around Docker containers that we just-- you can use whatever tools you want to be able to deploy onto Cloud Run. 

GABI: I never could get past the Docker Compose. Everybody said that was easier to use. But like, I sticked to the Docker file itself. I'm going to check back. 

STEREN GIANNINI: I would recommend in the Cloud Run quick start we are giving a very simple Docker files in popular languages for people to get started. So if you're a Node.JS developer don't be scared. The Docker file is literally five lines from Node.JS, NPM Install, and NPM Starts. That's what it says. 

GABI: The cold run was an alpha, right? And now it's in beta, correct? 

STEREN GIANNINI: Correct. 

GABI: So what are people are building on it usually? 

STEREN GIANNINI: So we've seen two major categories of use cases. The first one would be exposing public services to the internet. So a lot of them have been using Cloud Run to just build websites, so APIs or mobile back ends. Some did chatbots where you expose just a simple endpoint that will reply every time the request comes in. This is all about public microservices. 

So the great thing about Cloud Run is that it will automatically scale based on incoming requests. So if your website or API is popular, no problem. Cloud Run scales. And if it's not, well, no problem either, because Cloud Runs scales down to zero. 

MARK: Hopefully, it's popular. 

STEREN GIANNINI: Hopefully, we hope. But we've also seen a large amount of uses cases around private microservices. So this would be people who are using Cloud Run to do data transformation or image analysis. Because the interesting thing is that Cloud Run integrates with Pub/Sub. 

So from Pub/Sub, you can push an event to a Cloud Run service entirely privately, without having to expose anything to the internet. And Cloud Run has a request timeout of 15 minutes. That means that for 15 minutes, you can process an image, convert a doc to a PDF, like we are doing today during the demo. 

So for example, we have Airbus, that you probably all know. They are using Cloud Run to run inside a container one of their custom binaries to do image detection on satellite images completely in a serverless way. When they don't use it, they don't pay anything. It scales to zero. And when they have a lot of images to process, well, it scales. 

GABI: So 50 minutes is the timeout, you said. 

STEREN GIANNINI: 15, 1-5. Yeah. On Cloud Run. Cloud Run on GKE can do more. 

RYAN GREGG: Yeah we have a little bit more flexibility on the Kubernetes side to make the timeout be longer. But of course, it's still based on the length of an HTTP request. So you know, there's some network stability issues that you may encounter if you try to push it too much. 

GABI: I'm asking, because on functions, it's five minutes of recall, six minutes of recall. 

STEREN GIANNINI: I think you can push it to nine on Cloud sometimes? 

GABI: And I was trying to do an ETL on it. And that was not a good idea. 

RYAN GREGG: Cloud Run will be a much better tool doing things like ETL for real data processing work. 

GABI: Oh. I need to check that out. 

MARK: Well, speaking of which, though so now we've got Cloud Run. We've got Cloud Functions. And of course, we were just talking about App Engine earlier. There's a lot of different solutions here that cover a lot of space. 

We know that you just kind want a container. You want to throw it up there. Cloud Run sound like the best way to do it. But if someone's getting started with all this, and someone says, oh, you should go serverless. Great, but now I've got at least three different compute serverless options to choose from. 

What's kind of the best way to guide them down that path? Is there a decision tree? Is there are a couple of quick fixes? What would make sense there? 

STEREN GIANNINI: So to start with, I would say you have to ask yourself which level of abstraction do I want to be at? If you really want to attach some very small snippet of code next to your database, Cloud Functions would be ideal. You can just provide a function to do one thing. And it would scale on demand built for you. You don't have to deal with containers. 

Functions have a lot of event sources that are not available in Cloud Run or App Engine. So you can also use function to do HTTP, but more importantly, event-triggered functions. App Engine, I think is ideal for web workloads. App Engine has been designed for the web API, or the websites use case, or maybe either the web back end use case. 

So App Engine is source-based. So it will support now five or seven languages very well. And you go from your local source code, you hit one command, and boom. The thing is deployed. You don't see the containers on App Engine. 

On Cloud Run, I would say it's anything that fits the content or contract of Cloud Run. So here, your imagination is the limit. The contract is that we are going to send you events or request on an endpoint to your container. And then you handle the rest. 

So Cloud Run would be for anything else, I would say. But the good news is that the three of them are built on the same Google Cloud Serverless infrastructure. They all share the same Sandbox technology allowing us, Google, to run unmodified languages in this [? tack. ?] 

And maybe one last thing is that Cloud Functions is generally available, App Engine is generally available. Cloud Run literally launched 45 minutes ago to beta. So depending on your taste for risk-- 

RYAN GREGG: If you're trying to go to production today, I think you know, App Engine or Cloud Functions is definitely the right choice. 

MARK: But it's a great option for people who want to get started maybe check it out. 

STEREN GIANNINI: And they all-- App Engine, Cloud Functions are fully supported products. We invested a lot into App Engine in the past years, and keep investing. We launched many new languages on second generation run times on App Engine standard environment. And we keep improving it. At Cloud Next 2019, we are announcing the ability to connect to VPC networks from App Engine, which was a huge demand from our customers. So we are heavily investing in those great products. 

GABI: That's very interesting, because on App Engine you couldn't connect to the private network. So if you wanted to have some that's private process like, let's say, Kubernetes cluster that you didn't fit it outside and you'll have something processing there called Run, you can use it now. 

RYAN GREGG: Yeah. It used to be that everything had to go over the public internet to be able to talk between App Engine and something else. But now with VPC connect, you can actually use a VPC to deal with all the internal network. 

MARK: Anything else really cool that you've seen at Next that you're super excited about? 

STEREN GIANNINI: We are super excited about introducing Cloud Run to the world. We've been holding the announcement for so long now. We've been interacting with thousands of alpha testers who gave us tremendous feedback. If they are listening, I really want to thank them for that. 

They helped us shape the product. They helped us fix issues. And now we are really very excited to give it to the world and see what developers will build with Cloud Run. 

Because you know, arbitrary stateless containers on a fully serverless environment, I think the imagination is the limit now. You're not restricted to about anything. So let's see what people will build with it. 

RYAN GREGG: Yeah. And when you think of the thousands of alpha testers that we had, which we really could not have made this product without-- I also want to thank the open source community behind Knative. You know, we've over 50 different organizations who've been contributing their time and energy to make Knative awesome. And Knative is really the basis that makes the portability story of Cloud Run possible. And so we're really excited about all of their contributions as well. 

MARK: It's really good to see like, what all these teams kind of come together with. And like you said, this is a big solution for developers who come in here and say like, I want App Engine, but I want it with containers. I want functions, but I need a little bit more umph behind it. 

And that's kind of where this problem comes in. It's where it gets solved. And it's really awesome to see like, look! This is feedback that you all have given us. And this is what we've done with it. 

RYAN GREGG: Yeah I'm super proud of Cloud Run. Like, Steren said, we've been working on this for a little while. And we're really happy to have a launch today. And we're really excited to see what everybody is going to use it for. 

STEREN GIANNINI: Yeah. Give it a try. Cloud.google.com/run. It's easy. 

MARK: You couldn't get a better URL either. And Gabi, you are saying that you are super excited, because you knew someone who is working on a perfect use case for it. 

GABI: Yeah, I had someone working on a just in time compiler in a popular language that doesn't have that. It was like, imagine putting that in a container. 

RYAN GREGG: Ah, nice. 

GABI: I'm excited of all that to see that happen. 

RYAN GREGG: It started rolling out a couple days before the big announcement today, and like, how quickly people have picked it up and started using it, and like, writing blog posts about it before we could even comment on the product. It's been really neat to see these very creative solutions coming out. 

STEREN GIANNINI: Actually, speaking of creative solutions, one of our alpha tester was running "Doom" the video game on Cloud Run. So of course, because it's request-based, it was sending one image at a time. But the FTS was quite good, actually. And so that means literally, you can run anything, including a binary of a video game in a serverless way. 

RYAN GREGG: It was really cool too, because with concurrency, there are a whole bunch of people hitting the same instance at the same time. So it's like, 80 people playing the game simultaneously. 

MARK: And it just scales right up for it. 

RYAN GREGG: And it just scales right up, yeah. 

STEREN GIANNINI: So to be clear, Cloud Run is not a replacement for Google [INAUDIBLE]. And is this is not a use case for-- 

MARK: No video games on Cloud Run. 

STEREN GIANNINI: It's not a video game platform. 

MARK: It can handle anything but probably not raw motion. 

RYAN GREGG: You're not going to get the 4K 60 frames per second. 

GABI: Just a proof of concept. 

STEREN GIANNINI: Yeah, yeah. It really shows you can run any stateless workload on the serverless environment and paying for what you use. 

GABI: Well, with that, I want to thank you for being here talking to us. Is there anything else that you want to talk about that we didn't cover? 

STEREN GIANNINI: No, give it a try. 

RYAN GREGG: I think just we can't wait to have your listeners try it out and send us feedback. 

STEREN GIANNINI: In a few click, you deploy our demo container. In a few more lines of code, you deploy your own container. Give it a try, really. 

GABI: I will. 

MARK: Awesome. Thanks so much for joining us. 

GABI: Thank you. 

MARK: Very, very cool interview. It was a lot of fun. You know, Gabi and I were really excited to hear more about Cloud Run, like you said, being announced at Next. Amongst all the other announcements, I think this one was kind of special. And a lot of people are really looking forward to being able to play around with it and understand more about what that looks like in the spectrum of all the different serverless offerings. 

MICHELLE: So Mark, if I wanted to get started, how would I go about playing with it? 

MARK: That sounds almost like a question of the week perhaps. 

[MUSIC PLAYING] 

OK, well, let's answer it as though it were some kind of question of the week. You know, obviously, it has come out now. It is in beta. So anyone can actually just go to console.cloud.Google.com and just kind of using your normal GCP account, go ahead and start playing around with it. But you might want a little bit more support in doing that. 

So there are actually some tutorials that are right into the documentation. If you go to Documentation at the Cloud Run page and click on Quick Starts, you can see a couple of guides there. But you can also go to the Codelab site, which has a few actual guided kind of step by step tutorials, very similar, that like you kind of walk through those things. I hear that Coursera and Qwiklabs will start to work on more content there. So I'm sure there'll be more resources out there. 

But the reality is that you just need to container and you're pretty much good to go using the serverless part. So anyone who is kind of like, even with the bare bones Docker file, you can kind of get an application up and running in Cloud Run within a couple of minutes. So they showed it all on stage. And it was very cool to see how quick and easy it was to spin up. 

MICHELLE: Yeah that's right. Those Codelabs, that's something that our team works on. We actually author those. It's some Googlers. The Cloud Run one was written by Alexis Moussine Pouchkine. He's one of our colleagues. 

It's a great one. And he was working all the way up until the last minute to make sure that everyone has access to it. So check it out. I hear it's a great experience. 

MARK: So with all of that being said, and you know, everyone's still kind of recovering from Next because it was an exhausting week. 

MICHELLE: It was a very long week. It was action-packed. There were just so many announcements. And I think Mark and I both over the weekend just sort of turtled up and-- 

MARK: Very little got done except for like, mental recuperation. 

[LOW OM CHANT] 

MICHELLE: Yes, mental recuperation. That's a great word for it. 

MARK: Fancy word for doing nothing and just trying to stay alive. 

MICHELLE: So where do we go from here? What are we doing this week? Where will we all be? 

MARK: Well, right now of course, we're recording this podcast as a lot of our colleagues are out traveling. So Gabi is over at PI Texas. You know, John and Mark are actually over at the-- with the East Coast Gaming Conference, right? 

So they'll be out there. You and I and probably everyone else will actually be going to Google I/O. That's coming up in a couple of weeks. 

MICHELLE: That's right. 

MARK: And then you're going to somewhere very fancy in May, right? 

MICHELLE: Yes, I'll be at KubeCon Barcelona with a few of the other Kubeflow folks. 

MARK: That sounds exciting. 

MICHELLE: It is! I'm just planning my travel now. I'm a little bit behind because of all of the Next work. 

MARK: With all of that, I'm going to take some time off, maybe lie low for a little bit. And then obviously, get back up for I/O coming up. 

MICHELLE: Yeah. So if you're in the Bay Area the first week of May or the second week of May I believe, join us for Google I/O. Mark and I will both be there, along with a number of our other colleagues. 

MARK: It will be hopefully a little less than Next, a little less extra than Next was. 

MICHELLE: I think so. We're not primarily responsible for this conference, which helps. But I will be at the Codelabs booth. So if you want to do more of those hands-on walkthroughs, you could do the Cloud Run walkthroughs. There's a whole host of brand new Codelabs for you to try out at Google I/O. 

MARK: Oh, and I forgot to totally mention that like, all the Google Cloud Next stuff is also on YouTube. So like, if you couldn't make it out there, be sure to go to YouTube and check out the videos there in case you want a recap on a couple of cool sessions. And then I'm sure that after I/O we'll probably have some content going up there as well. 

MICHELLE: You'll see Mark Mirchandani's face on a lot of those videos. He was involved in quite a bit of video production. 

MARK: (WHISPERS) So tired. 

MICHELLE: --and a few of our other colleagues. And you'll see any of the sessions that you didn't get to see in person, you can find most of those recordings up there. 

MARK: Very cool. All right. Well, we'll let everyone go. Thanks, everyone for listening. And we'll see you all next week. 

MICHELLE: Thanks! See ya! 

[MUSIC PLAYING] 