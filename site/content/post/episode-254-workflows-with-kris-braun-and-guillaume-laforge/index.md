+++
audioDuration = "00:39:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.254.mp3"
audioSize = 57440040
categories = ["Serverless", "Event Driven", "Managed Services"]
date = "2021-04-07"
description = "Brian Dorsey joins Stephanie Wong this week for an in-depth discussion on Workflows."
draft = false
episodeNumber = 254
hosts = ["Brian Dorsey", "Stephanie Wong"]
title = "Workflows with Kris Braun and Guillaume Laforge"
image="/post/episode-254-workflows-with-kris-braun-and-guillaume-laforge/images/hero/hero-EP-254.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/mm89g0/episode_254_workflows_with_kris_braun_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Brian Dorsey](https://twitter.com/briandorsey) joins [Stephanie Wong](https://twitter.com/stephr_wong) this week for an in-depth discussion on Workflows. Guests Kris Braun and Guillaume Laforge introduce us to Google Cloud Workflows, explaining that this fully managed serverless product helps connect services in the cloud. By facilitating the creation of an end-to-end schema, Workflows lets developers specify what microservices or other software respond when certain events occur in a detailed, visual format. 

Kris and Guillaume list the benefits of using Workflows and detail the many uses for this powerful tool. The ability to add detailed descriptors, for example, helps companies avoid errors in calling up other pieces of software. New employees have an easier time getting acquainted when the steps are clearly defined as well. Our guests use real-world examples to illustrate the three main uses for Workflows: event-driven, batch, and infrastructure automation. Workflows are flexible and customizable.

Later, we hear about Cloud Composer and its relation to Workflows, and our guests help us understand which product is right for each client type. The Workflows team continues to expand offerings. More connectors are being added to allow developers to call other GCP services. Working with lists will soon be easier, allowing Workflows to run steps in parallel. And Kris details other exciting updates coming soon, including Eventarc.

##### Kris Braun

Kris Braun is the Product Manager for three Google Cloud products that connect services to build applications: Workflows, Tasks, and Scheduler. Before Google, Kris’ adventures include founding and growing startups, leading a team of network security researchers investigating threats like Stuxnet, and writing the original BlackBerry simulator for app development. He’s a passionate advocate for opening job opportunities to skilled refugees displaced by war and disaster. 

##### Guillaume Laforge

Guillaume Laforge is a Developer Advocate for Google Cloud, focusing on serverless technologies. More recently, he dived head first in Workflows, and started presenting the product at online events, wrote articles, tips and tricks, and videos on the topic.

##### Cool things of the week

* How sweet it is: Using Cloud AI to whip up new treats with Mars Maltesers [blog](https://cloud.google.com/blog/products/ai-machine-learning/baking-with-maltesers-marmite-and-cloud-ai)
* Turbo boost your Compute Engine workloads with new 100 Gbps networking [blog](https://cloud.google.com/blog/products/networking/increasing-bandwidth-to-c2-and-n2-vms)
     * Benchmarking higher bandwidth VM instances [docs](https://cloud.google.com/compute/docs/networking/benchmarking-higher-bandwidth-vms)

##### Interview

* Workflows [site](https://cloud.google.com/workflows)
* Spanner [site](https://cloud.google.com/spanner)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Cloud Composer [site](https://cloud.google.com/composer)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Cloud Run [site](https://cloud.google.com/run)
* Eventarc [site](https://sites.google.com/view/eventsforcloudrun/home)
* Eventarc Documentation [docs](https://cloud.google.com/eventarc/docs)
* Workflows Insiders [site](https://docs.google.com/forms/d/e/1FAIpQLSfSWZyExf1QGcxIuiHVxVzcoP9PWOABvhkLjDpSIIngT06mTA/viewform)
* Quickstarts [site](https://cloud.google.com/workflows/docs/quickstarts)
* How-To Guides [site](https://cloud.google.com/workflows/docs/how-to)
* Syntax Reference [site](https://cloud.google.com/workflows/docs/reference/syntax)
* Guillaume's Workflow Tips and Tricks [blog](http://glaforge.appspot.com/category/Google%20Cloud%20Platform)
* A first look at serverless orchestration with Workflows [blog](https://atamel.dev/posts/2020/09-08_first_look_at_workflows/)
* Orchestrating the Pic-a-Daily serverless app with Workflows [blog](https://cloud.google.com/blog/topics/developers-practitioners/orchestrating-pic-daily-serverless-app-workflows)
* Better service orchestration with Workflows [blog](https://cloud.google.com/blog/topics/developers-practitioners/better-service-orchestration-workflows)
* Get to know Workflows, Google Cloud’s serverless orchestration engine [blog](https://cloud.google.com/blog/products/application-development/get-to-know-google-cloud-workflows)
* 3 common serverless patterns to build with Workflows [blog](https://cloud.google.com/blog/products/application-development/building-serverless-apps-with-workflows-and-connectors)
* Introduction to serverless orchestration with Workflows [codelab](https://codelabs.developers.google.com/codelabs/cloud-workflows-intro#0)
* Pic-a-Daily Serverless Workshop [codelab](https://codelabs.developers.google.com/serverless-workshop/)
* Pic-a-daily: Lab 6—Orchestration with Workflows [codelab](https://codelabs.developers.google.com/codelabs/cloud-picadaily-lab6?hl=en&continue=https%3A%2F%2Fcodelabs.developers.google.com%2Fserverless-workshop%2F#0)

##### What's something cool you're working on?

Brian is working on use cases around VMs.

Stephanie has been writing about database migration.

 {{< transcript "[THEME MUSIC] STEPHANIE: Hey, everyone. This is Stephanie Wong, and welcome to episode number 254 of the weekly Google Cloud Platform Podcast. I am here with my colleague Brian Dorsey. Hello!" >}} 

BRIAN: Hello, hello! 

STEPHANIE: This is our inaugural episode together. I've been having new hosts almost every time so far. 

BRIAN: Yeah. I'm happy, happy to be here, and looking forward to talking through this stuff. We've got some good stuff today. 

STEPHANIE: We do. So OK, why don't you introduce the topic that we're talking about real quick? 

BRIAN: OK. We are talking about Google Cloud Workflows. And there's a lot of different things called workflows, so hang out and see what these actually are. But I think the hook is basically, these are flowcharts that run as kind of a serverless product. So they execute flowcharts, the kind of things you draw-- hey, if this happens, do this. If that happens, do the other thing. But in software. 

STEPHANIE: Exactly. Like you said, there are a lot of uses of the word "workflows," whether it's in the business world or otherwise. But what I love about this conversation is they provide context around how developers can see this product and use it in things beyond what you would typically think of when you think of business workflows. So I'm excited to get into that. But first off, let's get into the Cool Things of the Week. 

[MUSIC PLAYING] 

So this is a sweet story. Our colleague Sara Robinson, who, as you know, is amazing and has created so many interesting and creative projects using AI and ML, has partnered with Mars Wrigley, who is a confectionery manufacturer, and Google Cloud also was in on this as well, of course. And they actually worked together to create an ML-inspired recipe that hasn't existed before. 

They typically have a bunch of delicious chocolate treats, and what Sarah did was ask the question, what would happen if you combine two ML-generated recipes into a single dessert? And the end result was a ML-generated cake batter sitting atop a ML-generated cookie. So as you can imagine, anything could happen in that case. But I think it ended up pretty delicious. And she actually included the recipe for everyone to try in the blog post, so definitely give it a shot and send us your results. 

BRIAN: Oh my goodness. Sara's demo is just amazing. They hit the sweet spot between, like, fun, surprising, useful, and help you actually understand what's going on. 

STEPHANIE: The sweet spot! Oh, there's so many puns we can include. 

BRIAN: I didn't even realize. 

STEPHANIE: Yes. Look to the blog post because there are more puns, as you can imagine. So what about you, Brian? What's your cool thing? 

BRIAN: Yeah, so I'm very much into our VMs, our virtual machines. We, a couple of weeks ago, announced that we are increasing the network bandwidth for several of our machine families. So for the C2, the compute optimized VMs, and the N2, which are our general purpose family, you can now increase dramatically, up to like 3x bandwidth between the machines. 

So the previous maximum limit was 32 gigabits and you can now, kind of as an add-on, set that to 50, 75, or 100 gigabits between your VMs. It's a lot faster. It works in any zone where the N2s and the C2s already are. And it's an add-on, so you can basically just change the configuration of the machine and get this new throughput if you run into that as a bottleneck. 

I just am really excited about that, because it unlocks a bunch of workloads that people maybe didn't even think could be done in cloud. You know, there's a bunch of really network chatty intensive workloads in high-performance computing or in machine learning, where you've got all these complex graph kind of data structures that you need the full context to do. So I was really excited about that. 

And then as a bonus, at the end of the blog post, there's a how-to guide for actually testing and verifying the actual throughput between your VMs using iPerf. So we've got links to both of those in the show notes. 

STEPHANIE: That's awesome, yeah. Lots of goodies in that one. And as I understand correctly, isn't network bandwidth typically associated with the shape of the VM on Google Cloud? And so, does this sort of expand beyond that? 

BRIAN: Somewhat. One thing that's really not obvious with the shape, the cloud VMs, you know, that you're doing is you actually tend to get more network throughput as you get more CPUs involved. So that's in the docs. You can go take a look at that. That actually is somewhat still true here. You need a certain kind of number of CPUs before you can actually hit these thresholds of throughput. You're right-- it's not obvious that a machine with more compute actually has a faster network as well. 

STEPHANIE: They are sharing access to our network bandwidth, which is pretty powerful. So in this case, I'm excited to see this news come out. Because as we discussed before this, this is something that I think a lot of people probably wouldn't find out about it. So thanks for bringing it to the table. 

BRIAN: Awesome. I love that kind of thing. 

STEPHANIE: Well, let's go ahead and jump into the conversation that we had with Kris and Guillaume about Workflows. 

[MUSIC PLAYING] 

All right, Kris and Guillaume, we have you on the show. Thank you so much for joining. For everyone who hasn't heard from you before, why don't you start by just telling us what you do at Google and a little bit about your background? 

KRIS: I'm so glad to be here. I'm the product manager for three Google Cloud products that connect services together when you're connecting services to build an application, and those are Workflows, Tasks, and Scheduler. We're here today to talk about Workflows, and I'm excited to do that. 

Before Google, I had a number of adventures that included founding startups or helping grow them on the engineering side. Also some other adventures, like leading a team of researchers that were investigating threats like Stuxnet My maybe early claim to fame was writing the original BlackBerry Simulator that was used to write all the first mobile apps out there. So I've had a career that has spanned a few different areas. 

GUILLAUME: And I am Guillaume Laforge. I'm a developer advocate for Google Cloud. I've been here for a few years already. I've been focusing mostly on the serverless technologies. And in a way, I'm also focusing on connecting people. So not necessarily products, but I'm happy to connect developers with technologies that we have on Google Cloud, basically. 

BRIAN: Awesome. Thank you both for coming. So we're talking about Workflows. So what is it? 

KRIS: Workflows is a serverless product, fully managed, that helps you call a sequence of services in a stateful durable execution. That's a lot of words, so maybe an easier way to think about it is, it's kind of like shell scripting for the cloud. It lets you write the glue that you use to make use of other services. 

So you can do with a workflow things like control flow between services-- take the outputs of one, route them into the inputs of another. You can have conditions. You could have things that weight or pull, do retries, failure handling. You're not doing the compute or the heavy lifting work yourself, but you're orchestrating it by calling these other services. 

GUILLAUME: And in a way, it's a solution to remove or reduce some of the mess in event-driven architectures. So it's going to relieve some of the pain that developers are facing and feeling when they are developing event-driven systems. It brings some order to the chaos. 

BRIAN: That sounds great. Am I imagining this right? Is it kind of like a hosted state machine in the cloud? 

KRIS: Yes. That's a good mental model for it. We've made design choices in Workflows that kind of combine some of the elements of state machines, as well as a more familiar imperative way of writing. So it does maybe look a little bit more like you would think of a shell scripting language that is going through a sequence of steps, and you can have variables. So you could take the output of something, assign it to a variable, then use part of that for something else. 

But the beauty of it, as a fully managed service, is that state is backed by Spanner in our Google technology. So every step that happens is durable, and it's going to be preserved across a regional service. 

STEPHANIE: Just to kind of set the landscape a little bit, I know that the challenge here is that there isn't really this single layer of business logic that all of these steps can be working towards a common goal. So you kind of need this event-driven mechanism to find a way to get independent services to act towards this common goal. 

So this sort of reminds me of this trend towards serverless architectures in general, and we have many, many products in this area that have recently been coming out on Google Cloud. So how does Workflows fit into our recent serverless and microservices trend? 

KRIS: It fits very well. What serverless has done is it's made it easier than ever to launch services. You can go from imagining a service you want to launch to having it deployed in Cloud Run quicker than you ever could before, and you can do more with that service than you ever could before. Combined with the microservices trend, an organization developing an application can just get these out there. 

Then the problem becomes, how do you connect them together? Application functionality is not done by a single service in a monolith anymore. It's going to be the combination of multiple services. So the next natural step is to think about an event-driven architecture. When something happens in the system, a number of services can respond and reply and act on it. 

The challenge with that is a number of use cases, application functionality-- you want to have one source of truth for what that is. You know that when an order is placed, a certain sequence of operations should happen. If you rely fully on only event-driven architecture, you end up creating all these implicit connections that are hard to observe, hard to debug, hard to understand. 

You end up having to rely on handwritten architecture documents to describe, OK, this is the model, and know that these events are going to happen. And then when this happens, another event will happen. And then when you get to the scenario that you would hate to see happen is you know that something started. For some reason, it didn't actually get to where you wanted. How do you figure out where it failed and where things went wrong? 

So Workflows comes in by allowing you to describe the whole process and to end in one place, actually pass responsibility for the execution of the end-to-end flow over to the managed service, and concentrate on writing your services. 

GUILLAUME: And event-driven architectures are really flexible and easy to extend, so it's so easy to add a new event and react to those events or subscribe to a particular event stream. But you quickly lose sight of the overall business processes. So you know that there are events that are triggering some services, but it's an emergent aspect of the architecture. 

But you don't have this bird's eye view, I would say, of the business processes written down somewhere. You have to hunt down for the flow of messages, of events to really figure that out. Whereas with an orchestrator like Workflows, because you're using a definition file to define your workflow steps, you can even put that in version control. You can look at it. 

And let's say you're a new developer, you joined the team. So what are the business processes handling? Oh, well, let's look at the workflow definition. Oh, yeah, it's going through these steps, these steps, all this branch, it's going to this next step. And it makes sense and it's easier to understand and debug and monitor, operate, et cetera. 

BRIAN: Gosh, that sounds really useful. And it's clear that there's kind of business value here. Who's most likely to be using or implementing this? 

GUILLAUME: Well, I'm a developer, so perhaps I'm biased. So I would clearly think that it would definitely benefit developers. For example, recently for a workshop I've been running with a colleague, Mete Atamel, I've been running a workshop on our serverless technologies, and we developed a simple picture-sharing application made of five, six microservices. 

So it's not a big application, but very quickly when something was going wrong, the service was failing, we were not quite sure which event triggered that failure or which other service execution led to one message to not be sent, et cetera. So we clearly lost sight of what was going where, when, how, et cetera. 

So as a developer, I rewrote this workshop, this application to use Workflows. And that was a breathe, you know, of fresh air to be able to see all the sequencing of steps, of calls to the various microservices. That was really nice. 

And I'm also thinking that more DevOps focused people would also be interested in Workflows, even if only for automating their infrastructure, because you can access any APIs, especially the Google Cloud APIs, the products that we have-- they all have their REST APIs. So it's very easy to automate things. 

So for example, the other day, I was discussing with a customer who had plenty of use cases for Workflows, for organizing and preparing Cloud SQL backups, for example. Workflows could be executed at regular intervals if you ping with Cloud [INAUDIBLE] for example. They had many automation tasks. They know at certain times of the day they need to have more capacity, they would increase their Kubernetes cluster size, et cetera. They had many use cases just for automating their systems, basically, their infrastructure. 

So both developers and DevOps people will love this product, in my opinion. 

BRIAN: OK, that's super interesting. I've been prototyping something with VMs where I'm coordinating using a doc I store in Cloud Storage because I want it to be durable and only one answer at any time. You never have drift. So I need to look into this myself. 

GUILLAUME: And even another little aspect I'd like to mention is-- but Kris will probably cover this later on. But the fact that there's some support for things like retries, backups, et cetera, when you want to automate some things, some processes. Let's say when you start a VM, you have to wait to check that the VM is really running, et cetera. 

But those aspects of checking that things are up and running are baked in the product directly. So things like waiting for something that should be ready, or doing retries because, oh, it's not quite ready yet. Let's retry it, let's add a backoff interval of time and multiplier, et cetera. It's baked in workflow, so it even simplifies some of those tasks of automation. 

STEPHANIE: OK, so it sounds like there are many extensible use cases between automating infrastructure, even associating it with DevOps tasks. But what other use cases are there, because it sounds like there are other canonical examples of workflows. 

KRIS: Definitely. There's really three categories with the focus we have on supporting building your application in the cloud using Workflows to connect services together. So the first one is event-driven. A couple canonical examples-- one might be the whole user journey of placing an order. The order is placed. You need to check if it's in stock. You need to start some fulfillment process. 

Maybe if it's not in stock, you have a process that's going to wait for up to a month, but you might send a notice to the customer that it's waiting. When it's back in stock, you send them a notice again. When the package is scanned and leaves the facility, you give them a tracking code. You know, those kind of processes can be really well written in a workflow. 

They're not all long-running, though. Some could be very quick and sequential, like a file is uploaded and it is scanned with the Vision API to extract tags, and those are put into a database and maybe some action is taken if a particular tag is present. So that's kind of one bucket-- event-driven workflows. 

The next one is batch workflows, and these are those things that used to run in cron processes in your Ruby on Rails app, when you had the monolith. This is sending customers their daily email or generating a nightly report or something like that, where you're going to start pulling a bunch of data-- all the orders that were placed in the last day-- and doing some transformation on that, taking some action. Those processes that are recurring. We see customers sometimes doing those daily. Sometimes they're happening as often as every minute, depending on the use case and the volume that the customer's processing. 

And then the last bit is the infrastructure automation that Guillaume talked about. And those could be bringing VMs up and down or capacity planning around resources like that, also spinning up new environments. Especially, we have a number of customers that have some kind of application that they want to be able to spin up for new customers. And there's a whole sequence of steps and things that happen in order to provision for a new customer. 

STEPHANIE: So I know Guillaume mentioned that there is the ability to recognize failures and attempt retries. But if there is a workflow or a process where there is nothing happening for a set period of time, is there ability for Workflows to wait for that to happen? 

KRIS: Definitely. A workflow can wait for up to a year, and there is no charge while it's doing that. So it's quite unique in the GCP services in that way. There's no VM or container that's kind of sitting there idle. You simply can wait. And the waiting can do intelligent things as well. You could use waiting to build polling, and that is actually built into some of our connectors that we might talk about later, where you're polling for a long-running job or operation to complete. 

As we go, we're building more and more ways to wait, and those will include waiting for an event or a future message or an HTTP callback. And those are some features that we'll talk about more later. 

BRIAN: Wow. OK. So this sounds really cool, but I have an awkward PM question for you. We have a Google Cloud thing called Google Cloud Composer, and if I read it, it says it's a fully managed workflow orchestration service built on Apache Airflow. So what's the difference between workflow and Composer? 

KRIS: Yeah, for sure, it's a great question, and one that Filip Knapik, who is the PM who brought Workflows to GA, he also is the PM for Composer. So this wasn't a case of left hand didn't know what the right hand was doing. We went into this with full knowledge. 

So Apache Airflow has existed, obviously, longer. It's an open source project. Its primary focus is on data pipeline orchestration, so its kind of real thing that it's great at, and it's got a bunch of talent. There are people who are experts in Apache Airflow, as well as a community around it, as well as connectors into data-related products. It really is about taking large chunks of data and running it through a pipeline and transforming it and doing these long-running jobs. 

So it'll have features like, let's replay the data from the last week only through this step, but let's save the processing that already happened in this other step. That kind of data-oriented concept will never exist in Workflows. Workflows is not primarily a data transformation product. On the other hand, Workflows' fully serverless composer as a managed service does make it easier to work with Airflow than it would be managing your own. 

But there still needs to be provisioning of the instances. There still is an upgrade process that is a bit painful to go and upgrade from one version to another. Whereas Workflows will scale down to zero at no cost, will scale up to whatever it needs to, and is fully managed. You write a workflow, it is going to run forever with no need to patch or upgrade or anything like that. 

And I think they'll diverge even more as time goes on. Workflows' low latency composer works around a directed acyclic graph, which takes some expertise to work with and takes time to calculate. And so there's kind of this processing around that, whereas workflows are very low latency. They can be for very quick things that happened and kind of within the application workflow like that. 

STEPHANIE: Yeah, and is that akin to sort of this debate between whether someone should use orchestration versus choreography? Because I know that there is this question around whether there should be a central orchestrator controlling interactions between services, or should each service work independently and only interact through events? 

KRIS: I'll answer the Composer piece, and then I'll turn it over to Guillaume, who's our local expert in this topic and has given talks on it. Both Composer and Workflows are orchestrators, so they're both examples of that pattern of central orchestration. But I would love to give Guillaume a chance to talk about what we mean by those two and why you would choose one over the other. 

GUILLAUME: You can think of the visual image of the choreography of dancers. Imagine that those dancers are events that are flooring around, dancing, et cetera. And it's really the gathering of all those events, moves, et cetera, where the actual overall dance or opera, et cetera, is really emerging from that, right? 

So although, of course, there's certainly someone who designed that choreography in the first place, but it's really the emergence of how those events are flowing and what the reactions, what services are reacting to those events. So that's really the choreography of events. 

Orchestration, it's small. Like, you can think again of an orchestra where the director is going to say, OK, now that's going to be the flute there, the violin there that's going to play some music. And that organizes the various pieces of music. So choreography, it's event-driven architecture. So you have things like Pub/Sub, et cetera, where messages are going through some topics. 

And on the other hand, you have orchestration with Workflows, where Workflows is indeed the central piece that is going to invoke in turn, in sequence, the services that needs to be invoked. And again, as I said earlier, the emergent aspect of choreography makes it hard to really figure out what the business processes are, whereas with the orchestration, you get this bird's eye view of the business processes, because they are written down. They can be versioned in version control. 

So it's easier to understand what's going on. It's also easier to track because if something fails, if you look at Cloud Console or with GCloud, et cetera, you can see, OK, there's this execution of the workflow that's still going on. Oh, this one failed. Oh, it failed in these steps. So what happened? So it's important to make the difference. 

And also, I would like to say that it's not one versus the other. You could have both at the same time, a kind of hybrid solution where you have some business processes that are actually workflows, but you could still have topics on Pub/Sub that are triggering those various workflows. And you could-- if you think of "Inception," you can even have the workflow that calls other workflows. So you can really have a bit of everything, both choreography and orchestration, in a hybrid kind of scenario. 

But usually, yeah, you're going towards orchestration if you need clarity. And the thing I often say in conferences and meetups, et cetera, it's if you are able to design your business process as a flowchart, then orchestration might be a good solution to use for you to make sense of your business processes. 

BRIAN: OK, this is super useful. And we talked about some of the use cases in kind of abstract terms. But I'd love to hear about specific usages you've seen from customers or concrete use cases, things people have actually done. 

KRIS: One of the wonderful things about a general purpose product like this is we have seen customers already using it in many different ways, and ways that we didn't anticipate. And they kind of match some of those use cases that we were talking about before. 

So some are doing event-driven. They're using Eventarc, which is another similar event product, which isn't directly integrated with Workflows yet, but through Cloud Run invoke a workflow. And so they're using this to run sequences of operations that they can fully observe. They've got the execution history. They know when we're succeeding, when they're failing. And a lot of those are related to an event happening that requires some processing, often processing a file. 

Another set are doing some batch orchestration for kind of nightly jobs. A lot of it does come down to reporting things that they want to do some analysis on. The other set are infrastructure automation for spinning up new projects and doing things that way. 

Interestingly, one of our very large customers finds a number of those use cases particularly good in Workflows because they've got such a polyglot global team. They have different teams that are working in Java or Go or PHP in different parts of the world, and they don't actually have a common programming language between them. And Workflows provides the ability for them to have a shared repository of workflows that orchestrate these services or are shareable across these teams, regardless of whichever tech stack they're used to. 

GUILLAUME: As a smaller example at a smaller scale, that's the application I've been working on in serverless workshop, it's a picture-sharing application and users are uploading pictures that are going to end up on Cloud Storage buckets. But when a file comes on Cloud Storage bucket, then I can trigger the execution of a workflow. And this workflow, what is it doing? It's going to create the [INAUDIBLE] of the picture because I want to have both high resolution picture but also thumbnails that I can display on the website. 

And then it's also going to call the Vision API to figure out what's in the picture. So I'm going to get labels-- what's in the picture. I can navigate through labels and see similar pictures. And I also have details like the main color of the picture, so it can draw a nice color boulder run the pictures. 

While I'm rechaining different services or automating my application, the business process isn't very complicated. But Workflows clearly simplified that process-- Vision API storage, metadata storage in the Cloud Firestore because I can update a database from the workflow itself, which is kind of crazy, you would think. But no. That's a super handy use case. 

And when I rewrote my application with an orchestrator, with Cloud Workflows, I could even get rid of some of my microservices that was one of the services that was doing some garbage collection to remove a big high resolution picture. I also want to clean up my thumbnail bucket and also clean up the metadata information in Cloud Firestore. I automated that process and it's just REST API calls invoked from Cloud Workflows. 

I got rid of some code, and as a developer, getting rid of code is always awesome. [LAUGHS] Yes. 

BRIAN: It's the best. 

STEPHANIE: This is super cool. I'm actually very impressed with the number of use cases between infrastructure automation, business processes and reporting, and even doing fun things like triggering off image upload and pulling metadata using Vision API and other ML APIs to pull new information about it, including metadata. Can you talk about some of the upcoming features? Because I know, Kris, there are many things to be excited about coming up. 

KRIS: Definitely, and this is actually a good connection to what Guillaume was just talking about. Connectors are already in public preview. So you can go now-- actually, probably by the time this is live, we'll even have the next set. So five have been publicly available since the GA launch, and we're adding about 13 more in the next week or so. 

And these connectors allow you to call other GCP services in a very simple way. So you don't even have to know the details of the HTTP call. It's like a function call, and things that are abstracted away include the authentication, the formatting of the message. And if the operation is long-running, the retries, the polling, you basically know that that operation is completed and you have your success, your result, or your failure. 

And you can write sequential logic without any of that kind of extra wrapping around. And so go and check out which GCP products can be invoked from Workflows in that easy way. 

BRIAN: That sounds great. 

KRIS: It's really the integration part of this application integration, and to say where the North Star is, the North Star is that we eventually, over the next few years, make it so easy to invoke anything inside GCP in your own service or in the wild internet, anywhere in a third party app. 

Actually, a note on that is that Workflows can orchestrate work anywhere on the internet. Anything that has an HTTP API, you can call from Workflows. So you're not restricted to GCP use cases. 

GUILLAUME: Things like, you know, sending text messages with Twilio or things like that, it can do that. Or Stripe payments. 

KRIS: The next area that we're improving is the ability to work with lists, and this is a building block towards parallel processing. So that's kind of the thing that we're working on this year is getting to the point where Workflows can run steps in parallel, as well as process large lists of items with them in parallel. And that enables a number of these batch use cases. 

The first piece of that is adding first class native support to iterations and loops to the language. This is just kind of core orchestration functionality that wasn't there at GA, and we'll be releasing that shortly. The next is a really exciting area because it's quite unique to Workflows within the product spectrum, and that is HTTP callbacks. 

You can imagine this as you start a workflow execution, and then you say, I want to wait until I've been called back on an HTTP API. It's really the reverse of an outbound HTTP request. It's something where the workflow can wait for an arbitrary amount of time until another service has called it back and provided data to it that it can use. 

And the use cases for this range from human-involved flows, where there might be an approver, and so an email is generated an approver needs to approve before the workflow continues, to very automated workflows where the package is getting scanned on the way out of the factory and that kicks off the next part of the Workflows actions. 

Grab bag of a few other improvements coming-- we're adding operational dashboards, because a very important part of workflows is the observability of these executions. Having visualizations of their rates that they're running, the error rates, the top errors, their performance-- that is important, and that's coming soon, as well as a number of other developer experience improvements that include exposing more power within what you can do in Workflows. 

Right now, a frustration may be that you need to write a Cloud Function to do something that seems fairly trivial. I know Guillaume would like to remove a number of these pieces of code. And so by being able to do string processing, list processing, some of these operations in your workflow, you're less likely having to go out to write a function to do those things. 

GUILLAUME: Poor Kris, I'm a demanding user. I have been pushing feature requests like crazy. 

[LAUGHTER] 

KRIS: Better event integration is also coming. That will be a little bit further out, but both for Pub/Sub and Eventarc within this year, you'll be able to connect those to Workflows so that a new workflow execution is started whenever a Pub/Sub message is sent or an event is generated, and Workflows will be your processor for those messages and events. 

BRIAN: You've mentioned the word Eventarc twice now. Could you do a quick couple of sentences? What is Eventarc? 

KRIS: Absolutely. It's really our sister product. I think they go together-- maybe it's peanut butter and jam or something like that. So Eventarc is GCP's source for events, and those could be first party events from GCP services. They could be second party custom events that are generated from your own services that are running on GCP or elsewhere. Or third party events, eventually, that could be generated from something like Twilio-- a text is sent back, email bounces, and then you get an event. 

And so Eventarc is going to be the source where you can subscribe to those events and act on them. Eventarc went to GA two days after Workflows, so we're even paired in our go-to-market and kind of our maturity cycle. 

BRIAN: Event and workflow buddies. OK, so this is amazing and personally, a little bit embarrassing. I have to admit, I've been kind of heads down on the infrastructure side of GCP for a while, and I didn't know that Workflows existed. So asking for me, how would people learn more about this and get started with it, if they wanted to try it out? 

GUILLAUME: So of course, there's the Workflows website. That's the first place where you should probably go, and the associated documentation. There's a great page, the syntax reference page, which I find awesome. It's listing all the features supported by the definition format, but gives plenty of examples that are interesting to learn from. So that's the first place. 

Of course, we have a few articles that we've published on the GCP blog that covers some of these aspects or, for example, the choreography versus orchestration discussion. We have some codelabs to have your hands on directly on the technology. So there are codelabs. There's the codelab from the serverless workshop that I created, but there's a couple, I think, hands-on codelabs as well that are totally standalone, but you can have a look at. 

And I've been publishing also some tips and tricks on my own blog, how to use this or that feature of Workflows, because, well, I really enjoy using that product and I like to share my findings and the stuff I think developers or users will find useful. 

BRIAN: Oh, that's awesome. So we'll collect a bunch of those links into the show notes. 

KRIS: Are we allowed to share secrets on this podcast? I think it's a safe place to do that, I think. 

BRIAN: As a PM, you are allowed to do that. 

STEPHANIE: Yes. 

KRIS: OK, great. Because I feel comfortable with that, I would love to let the listeners know about Workflows Insiders, which is a private group. But I think we're going to put in the show notes a link to apply to be part of Workflows Insiders. And this is a small community of practitioners of Workflows, kind of the biggest users of Workflows. And so if you've listened and you actually are jumping in and putting Workflows to use, you can apply. 

And that group is foremost a community of practitioners where people are asking questions and answering them, and providing some community support. But it also is the list that we use to go to for private preview access, as well as sourcing input onto upcoming features. So would love to gain a few more members of that to help us drive our roadmap going forward. 

GUILLAUME: We're also interested in learning about which of the GCP services would be most interesting as the next connectors on the list of supported products. So if you have some ideas of things you would like to automate with Workflows, don't hesitate to touch base with us and tell us, oh yeah, the next connector I really want to have on Workflows, that would be for this product. Don't hesitate. 

STEPHANIE: Awesome. Well, the secret's out, so if we get in trouble for it-- 

[LAUGHTER] 

--then we're pointing at the PM here. He said it was OK. Well, we just covered a ton, so thank you so, so much Chris and Guillaume. I'm very excited about the new upcoming features, because it sounds like there's a lot on the roadmap. So thanks again for joining today, and hope to have you back on soon. 

GUILLAUME: Thank you. 

KRIS: Thank you so much. This has been fun. 

STEPHANIE: Wow, so I think one thing that's interesting is that as technology continues to accelerate, we also notice that there are a slew of features and complexities that arise with it. You need more monitoring, observability, networking, security issues arise. So there's a constant need for things to keep up, and it sounds like Workflows is doing that for the serverless space. 

BRIAN: I feel like it hits a sweet spot in how we mentally think of problems. And in some ways, the modern development is often just gluing APIs together, right, in a certain order. And this makes that front and center when you're doing more complex kind of flows through them. So I think it's going to be useful in the use cases they mentioned. And I suspect people will, as they look into it, find a whole bunch of additional places where it helps them solve problems and makes things more predictable. 

STEPHANIE: Yeah. I mean, one thing that was surprising to me was the amount of DevOps features or use cases that extended beyond the typical that I would think of, including automation of infrastructure and the ability to tie in any APIs, whether it's in Google Cloud or not. So it seems like the possibilities are fairly endless, and it can allow you to call anything on the internet using APIs. 

BRIAN: Yeah, I think you're right. That's going to just open up all kinds of integration options and, like I said before, more predictably. So I mentioned it in the conversation, but I'm really looking forward to applying this to running VMs and changing the configuration of the system based on other inputs. Like, you need to make it bigger, but only in a certain scenario, or you need to reconfigure things that rely on each other in turn. So I think that'll be fun. 

STEPHANIE: Right. And actually, we do have an amazing blog post that I think people should check out when they announce the GA launch of Workflows that includes workflow charts and diagrams to describe some of the use cases, as well as how Workflows works in the back end. 

BRIAN: Yeah, I'm glad you mentioned that, because the diagrams in that post, these are executable flowcharts. It's great. 

STEPHANIE: It's a little bit of "Inception," but workflows are better visualized and so is Workflows as a product. So it's only natural that we would create a workflow for Workflows. 

[LAUGHTER] 

All right, so moving forward, I know that we've had some busy weeks, but is there anything awesome that you're working on, Brian? 

BRIAN: Let's see. The use cases around VMs, as you might imagine. And normally, we're talking about all the easy to distribute, you know, you can have 50 VMs that are all kind of doing the same thing. They come from a template. You can scale them up and down. But most apps actually aren't set up that way, you know, so you're running a thing that already exists and it's not well suited to running on more than one VM, but you want it as reliable as possible. 

So I've been working on a solution using our regional persistent disks, which allow basically behind the scenes block replication across two zones, and then automating on top of that. So you can delete and recreate the VM very quickly behind the same load balancer off the same disk, and you essentially are moving the VM from one zone to another with very low down time, like a minute. 

STEPHANIE: Wow, that is impressive. It's like spatial shifting of your workloads. That's really cool. 

BRIAN: Exactly. And it doesn't require any specific distributed systems-y kind of stuff. It works with any individual VM. 

STEPHANIE: Wow, very excited about that. Different topic, but I am writing a little blog post on our new database migration service, which-- 

BRIAN: Ooh. 

STEPHANIE: --I know Gabe Weiss, our colleague, has done a lot of work on, but they are going GA. And yeah, it's just basically a service where you can actually take your workloads running for Cloud SQL, Postgres on-premise, other clouds on GCP, migrate it extremely easily to Cloud SQL, our managed service. 

And it's just awesome because you can really test the validity of the migration, make sure that everything works correctly. You don't have to recode and do all of the typical steps required for this hefty lift and shift scenario. So definitely get excited about that. 

BRIAN: You know, it's always one of those risky steps with a whole bunch of substeps. So being able to automate that and have it be a predictable part of the migration will just probably ease a lot of minds. 

STEPHANIE: It really will. But anyhoo, thanks so much, Brian, for joining. We have a lot of cool stuff coming up, so I hope to have you back on cohosting with me soon. 

BRIAN: Looking forward to it. Take care out there, everybody. 

STEPHANIE: Stay safe. Thanks again, everyone. 

[THEME MUSIC]