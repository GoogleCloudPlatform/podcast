+++
audioDuration = "00:44:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.291.mp3"
audioSize = 105940688
categories = ["SDK", "CLI", "Client Library"]
date = "2022-02-02"
description = "This week on the podcast, Wael Manasra and Cody Oss join hosts Carter Morgan and Mark Mirchandani to chat about new branding in Cloud SDK and gcloud CLI."
draft = false
episodeNumber = 291
hosts = ["Carter Morgan", "Mark Mirchandani"]
title = "Redesigning the Cloud SDK and CLI with Wael Manasra and Cody Oss"
image="/post/episode-291-redesigning-the-cloud-sdk-and-cli-with-wael-manasra-and-cody-oss/images/hero/hero-EP-291.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/siv52c/episode_291_redesigning_the_cloud_sdk_and_cli/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++


This week on the podcast, Wael Manasra and [Cody Oss](https://twitter.com/OSSCody) join hosts [Carter Morgan](https://twitter.com/carterthecomic) and [Mark Mirchandani](https://twitter.com/markmirch) to chat about new branding in Cloud SDK and gcloud CLI. Google Cloud SDK was built and designed to take over mundane development tasks, allowing engineers to focus on specialized features and solutions. The SDK documentation and tutorials are an important part of this as well. With clear instructions, developers can easily make use of Cloud SDK.

Software Development Kits have evolved so much over the years that recently, Cody, Wael, and their teams have found it necessary to redefine and rethink SDKs. The popularity of cloud projects and distributed systems, for example, means changes to kit requirements. The update is meant to reevaluate the software included in SDKs and CLIs and to more accurately represent what the products offer. Giving developers the tools they need in the place they work means giving developers code language options, providing thorough instruction, and listening to feedback. These are the goals of this redesign.

The Google Cloud SDK contains downloadable parts and web publications. Our guests explain the types of software and documentation in each group and highlight the importance of documentation and supporting materials like tutorials. The Cloud Console is a great place for developers to start building solutions using the convenient point-and-click tools that are available. When these actions need to be repeated, the downloadable Command Line Interface tool can do the work. Cody talks about authentication and gcloud, including its relationship to client libraries. He walks us through the steps a typical developer might take when using Google products and how they relate to the SDK and CLI. Through examples, Wael helps us further understand client libraries and how they can interact with the CLI. 

The Cloud SDK is a work in progress. Our guests welcome your feedback for future updates! 

##### Wael Manasra

Wael manages the gcloud CLI, the client libraries for all GCP services, and the general Cloud SDK developer experience. 

##### Cody Oss

[Cody](https://twitter.com/OSSCody) works on the Go Cloud Client libraries where he strives to provide an delightful and idiomatic experience to all the Gophers on Google Cloud.

##### Cool things of the week

* Google Tau VMs deliver over 40% price-performance advantage to customers [blog](https://cloud.google.com/blog/products/compute/tau-vm-customers-share-real-world-performance-results)
* Find products faster with the new All products page [blog](https://cloud.google.com/blog/topics/developers-practitioners/find-products-faster-new-all-products-page)
 
##### Interview

* Cloud SDK [site](https://cloud.google.com/sdk)
* Cloud SDK Documentation [docs](https://cloud.google.com/sdk/docs)
* Go [site](https://go.dev)
* Google Cloud [site](https://cloud.google.com)
* Cloud Storage [site](https://cloud.google.com/storage)
* Cloud Storage Documentation [docs](https://cloud.google.com/storage/docs)
* Cloud Code [site](https://cloud.google.com/code)
* Cloud Run [site](https://cloud.google.com/run)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Cloud Functions [site](https://cloud.google.com/functions)
* Cloud Client Libraries [docs](https://cloud.google.com/apis/docs/cloud-client-libraries)
* Cloud Shell [site](https://cloud.google.com/shell)
* Cloud Shell Editor [docs](https://cloud.google.com/shell/docs/editor-overview)

##### What's something cool you're working on?

Carter is working on his comedy.

{{< transcript "[MUSIC PLAYING] CARTER: Hi, and welcome to another episode of the Weekly Google Cloud Podcast. This is episode 291. I'm Carter Morgan, and I'm here with my colleague and friend, Mark Mirchandani. Hi, Mark." >}}

MARK: Hello, everybody. Hey. How are you doing, Carter? 

CARTER: I'm doing really well. I'm really excited. I'm in a good mood, and I like your energy already. 

[CHUCKLES] 

MARK: That's right. You got to get started with the good energy because doing these podcasts, as much as I love 'em, just takes so much energy to get out there and record and chat. And it's a ton of fun. But that's why I've always got to start it off with a little dance. I know people can't see it, but you got to do what you got to do to keep it up, you know? 

CARTER: Got to bring the party. I dig it. This was a fun episode. We were talking about something that I didn't know is deep and intricate as it is. We were talking about Cloud SDKs and what goes into thinking about them and why and Google rebranding theirs. What did you think? 

MARK: Yeah. It was a fantastic conversation. Obviously, we'll get into it. And you'll hear from Wael and Cody and who they are and what we're really talking about in the world of the Google Cloud SDK, which we talk about why it's a little confusing for folks because we probably didn't have the best naming convention for it when it came out. 

And I'll save that for the actual interview. But what we do talk about that, I think it's amazing, is just really the whole ecosystem of working with Google Cloud. What does that mean? What does it look like for different folks? And what are all these different pieces that you need to be successful when working in an environment that is as complicated as Google Cloud? 

CARTER: And speaking of products that Google Cloud has, lots of them, very diverse. Some of them also very cool. What if we get into the cool thing of the week? 

[MUSIC PLAYING] 

This was a really cool thing I saw. I've been doing this series called VM End to End. So I've been having a deep dive into VMs and their place in the world. And I saw this recently, that there's a new type of VM that's delivering very, very, very big increases in performance, reduction in cost. 

So these are Tau VMs, and there's an article on the blog. And it'll be linked in the Show Notes, where they're talking about a few different customers and the benefits they've got from using these. And just the technology that's going into it a little bit behind the scenes. 

This is so cool. I think we're going to have to do an episode about it. But Tau VMs. The way Cloud VMs are evolving, I think it's going to be hard for people to stay on premise unless they have just a lot of funds to constantly be buying new machines and constantly upgrading. 

MARK: I do love it, because I don't think very often about which family of chipsets and whatnot that I'm working with when I work with virtual machines. For me, I'm not usually doing huge workloads on virtual machines. 

But obviously, in a lot of cases, it's super important that you are able to optimize that cost and performance. So it's always exciting to see new families being added. And the reality is, it's like better performance for lower cost? It's kind of a win for just about everybody. So always excited to see that. 

And of course, you spoke earlier that we have tons of Google Cloud products. So my cool thing of the week is going to be this new Google Cloud All Products Page. There's been a couple of people on our team who have been working super hard on getting this out there. 

And one of the great things from way back in the day, if you remember, was Greg had a kind of a four-words description, which was really helpful because Google Cloud went from a couple of products to a bunch of products to hundreds of products. 

And there's so many that we created this kind of like four words to describe each one that give you a great idea of what's going on. And now, it's in the Console. So you can see all the different products that Google have, a quick description of them. Steph does this great overview of what that page looks like, kind of how it's organized. 

And they all have these relevant links so that you can really get a quick feel of like, OK, well, you know, I know I need storage. Where do I go? Which product do I use? I love this page. I think it's an amazing idea. So we'll obviously include a link to the blog in the video to check it out. But then you can just go to the Console and check out the All Products Page. 

CARTER: Yeah. I'm looking at this right now and just seeing everything in one place. One, wow, we have a lot of products. Like, wow. 

[CHUCKLES] 

But too, this is really convenient. And I like that you can actually customize your navigation. So if there's things that you use more than other things. I'm like, Kubernetes and VM person right now. But maybe I'll get into data science one day. And I can rearrange my Console based around that. That is cool. 

MARK: I think a lot of thought goes into the Google Cloud Console. Like you said, there's tons of stuff there, and there's tons of different categories and, of course, individual products. So it makes sense that all of these things can be organized to whatever you're working on. 

And actually, I think that's a pretty good segue into our conversation because we're going to talk about the overarching Google Cloud SDK and really what that experience looks like for people to use Google Cloud. 

CARTER: That was smooth. Let's get into it. 

[MUSIC PLAYING] 

MARK: Wael and Cody, thank you so much for joining us today. Before we get started, can you all give us just a quick introduction of who you are and what you do? 

WAEL: Hi, Mark. I'm Wael Manasra. I'm the product manager for the Google Cloud SDK. So that includes the gcloud Command Line Interface, all of the client libraries for all of Google Cloud's services, and also part ownership of the documentation and the user experience around using the Cloud SDK. 

As far as background, I have been at Google for just under a year. Prior to this, I worked in the banking space, where I ran a developer platform for JPMorgan Chase for a couple of years. And prior to that, I'm an entrepreneur at heart. 

So I was a startup guy for 15 years, serial entrepreneur. I had three startups and spent years and years and years locked in rooms with software developers. And that kind of rubbed off on me and got me interested in this space. And that's sort of how I ended up taking the journey I did. 

CARTER: What about yourself, Cody? 

CODY: I am Cody Oss. I am what they call a developer programs engineer, which is a fancy title. I like to think of myself just as an open source engineer. I am on the Client Libraries Team here at Google, where I spend most of my time working on the Go Client Library. 

So I'm out there trying to make sure that the libraries are delightful to use, idiomatic, ergonomic. You'll get all of the function signatures that you would expect within that programming language. And bringing that experience to Google Cloud, making sure that Gophers have a great time on Google Cloud. 

MARK: I love to hear that. And of course, that's actually what we're talking about today is really about the developer and technical practitioner experience on Google Cloud. And a big catalyst for this conversation is the rebranding of the Google Cloud SDK. 

So before we get into the details of the rebranding, let's talk about the Google Cloud SDK, like, why does this exist and what are the goals for it from a Google perspective and then from developer/technical practitioner perspective. 

WAEL: Software developers are an extremely important segment, obviously, to Google. They're our main customer on the Google Cloud front. And developers are highly impactful in their work. 

It's amazing for me to think, I think the global population of software developers is around 25 million, that 25 million people are essentially driving humanity forward through all of the implementation of the technology that they built, right? 

So hugely impactful. Generally, a smart crowd, educated, have a diversity of skill sets, and can convert business problems into solutions using technology. But because of those characteristics, they're also pretty expensive. They get paid very well, relative to other types of jobs. And this is consistent globally. 

And so the tooling matters a lot. Anything we can do to accelerate their productivity and their efficiency is a win-win, both for the developer, who would rather dedicate their brain waves towards writing things that are useful instead of just the repetitive, mundane aspects of their job, and also a win for the people who pay the developers because there's more value per hour that way. 

So that's really why an SDK is important. And that's really what we think about primarily is, like, how can we accelerate their work and keep them efficient and productive? 

CARTER: That's very interesting to me. Cody, I actually want to hear from you too. What is an SDK to you? 

CODY: I think an SDK can be a lot these days. I think over the last 10, 15 years, open source has taken over the world. And gone are the days of you just writing raw Java code, where you would implement all the logic yourself. Now, the modern developer is out there, they're using so many libraries relying on these stacks that are built on stacks built on stacks. 

And they're expecting a great experience when they're using different sorts of tooling, whether that be they're engaging with different types of CLIs, if they're engaging in their language of choice using a library. I think more important than ever is documentation and having great docs for said libraries and for said CLIs. 

The modern developer really has to be productive. They're expected to do a lot in their day to day. So at Google Cloud here, we're trying to package all those things together and make sure that the developer is going to have a delightful experience. 

MARK: I think that's a really important point, and it's one we talk about a lot in the Cloud. I think it really is relevant to just technology as a whole. You have these folks who are creating interesting and unique solutions to problems. And everybody wins when that process is a lot more streamlined. 

You don't want your technical folks spending all their time trying to figure out how these things work or trying to figure out which API to call or which resources they need. They just want to be able to use it so that they can move on and create the interesting things. And I think you both spoke to exactly that. 

CARTER: So then, let me come in from a slightly different angle here, because you've said what the power of an SDK is. Cody, you talked about how important documentation is. And coming from the Go language, a lot of that is almost built in. So what's driving this impetus to rebrand? Like, why is that important? Why do people want to rebrand in SDK? 

WAEL: Stepping back, what is an SDK really? It used to be Software Development Kit is what the acronym stands for. The "kit" part is really important. And it implies that it's a collection of things that are going to help you out in your development workflows and journey. If you think software development as a practice say has been around for 30 years or so, the process was different in the early decades. 

Like, software was developed on a desktop. It was compiled to be an application that you would distribute as an actual binary file. And so this concept of downloading and installing something on your desktop was really key to feeling like you got something in the kit. As we've moved into this cloud native world, and software has become distributed, that original concept is really open to interpretation. 

Like, where do you draw the line of what's in and what's not in the kit? And so the rebrand is really designed to rethink what should be in the kit, but more simply, there were some basic challenges or problems that existed that were obvious that needed fixing. For one, Google was calling their Command Line Interface an SDK. 

And so those are typically referred to as a CLI. That's the acronym, Command Line Interface. And so there's an AWS CLI and an Azure CLI and a GitHub CLI, and there's many, many of these and they all end with the acronym CLI. 

But here was Google Cloud shipping their CLI labeled as an SDK. So software developers who are looking for a CLI aren't finding it because it's called SDK. And software developers who are looking for an SDK are mis-downloading something that actually ends up being a CLI. 

So when we say rebrand, we really just mean cleaning up the naming and the labeling. And then while we're at it, let's pull all the things that we think should actually be part of this kit together so that they're easy to find and use together. 

MARK: So let's take that and let's define a little bit more about what that kit is because part of that kit could be the CLI. But it's also going to include some of the things you talked about earlier, like the documentation or like libraries that you might pull into Java or other languages, of course. So what does the kit look like from kind of a holistic perspective? 

WAEL: So I think you could split it into the parts that are downloadable versus the parts that just exist as web publications. At the bare minimum, the Command Line Interface is definitely part of an SDK. You're going to use the Command Line Interface. We'll walk through all these different tools and what the use cases for them are a little bit later. But you're going to need that no matter what you're doing on Google Cloud. 

And secondly, every Google Cloud service or product is fronted by an API. And developers, task one for them, is to integrate with that API so that they can use the service that is exposed by the API. So traditionally, companies ship client libraries, which simplify the implementation process for developers. So those are downloadable libraries that are imported into software development projects and then called. So those are part of the SDK as well. 

Documentation, and I'll turn it over to Cody to talk about that because he works a lot in that space, to me, is also a critical part of an SDK because these tools are complicated and, well, the services underlying the tools are complicated. 

And so you need clear guidance that is technical. You need use cases. You need samples that show you how to write code against these client libraries. And so those two are part of the SDK. But again, because the world has changed, you're not going to download a 2,000 page PDF document and search it on your computer. You're going to use web pages for that aspect of the SDK. 

CARTER: Well, you just said that parts of the SDK are web pages, parts are like maybe a command line tool could possibly be included there, maybe downloadable points, API endpoints through an internet browser. So what isn't part of an SDK? 

WAEL: We will answer that question over time. We thought we would just, at a bare minimum, include the things that are indisputably part of an SDK. Part of what's exciting to me about this job is that Google Cloud has a strong position in defining what an SDK should be and mean. 

And we'll experiment and explore and gather feedback from customers. And hopefully they will help us define what the future of an SDK should look like in a cloud-first world. Cody, do you want to talk a little bit about the docs, because that's really an important aspect of this rebrand? 

We've done a lot of work in that space. And we've heard loud and clear from customers about the confusion in the documentation space and that they wanted better experience and documentation. 

CODY: Docs, first and foremost, are a thing that can often be neglected in the software development trade by a lot of people. And I would argue that the docs are more important than the code that you're writing. If you don't have good documentation or good tutorials about how to use things, people aren't going to use it at all. 

So what did you do this for to begin with? So we've really been focusing a lot in our docs efforts in multiple different ways. We have lots of different types of documentation. On cloud.google.com, you can go to many of the different services. For example, how would I download a file from Cloud Storage? Well, you go to the cloud storage docs, and on those pages, you will find some awesome code snippets written in seven programming languages we support. 

You'll also find usually how to engage with those services via the CLI as well because the developers, they all have different needs. Maybe you're doing some work in Bash scripts, and there the CLI is a great use case for engaging with the APIs. 

Maybe sometimes you know you're engaging with your business logic. So this is where you pull in one of our client libraries in our various languages. And then, you can engage with the service in that way. 

Some other docs, kind of cool stuff that we do is, we've started to really bring in a lot of our client library language documents in house. You look at ecosystems like Java. And there is a standard Java doc. But there isn't like a standard place everyone puts their Java doc for their users to look up. If you go to Spring, they host their own documentation. 

Google Cloud in the past, we've hosted our own documentation in different spots. But now, we've really been trying to start bringing all those docs together on cloud.google.com so there's a one-stop shop to go, no matter what service you're using. No matter in what language you're using, you can go here and find it. 

I think another example of some docs and tutorials that we do are something newer. In the Cloud Console you'll find these cool little interactive tutorials. And you can just kind of click through, follow along, and see how to use these services in that way, if that's the best way you learn. 

MARK: Yeah. There's so many pieces that are involved here. And a lot of it comes because there's so many different ways to interact with Google Cloud and its resources. And obviously, it's going to be the same thing for other cloud providers and other technologies that are just a lot more complicated than they were in the past. And it comes down to, if you're going to write code, you need good documentation. 

You need these client libraries. If you're going to interact directly with the Console, you need to have the tools and abilities to understand how to actually use this visual interface and how to get the results you want. And if you can't use the client libraries or if you don't have the ability to, then you need to use the REST APIs or you need to find some way to use the Command Line. 

There's just a lot of different ways to kind of approach and solve a problem. And it's necessary because there's so many people doing so many different types of interactions with Google Cloud. 

WAEL: Yeah. That's absolutely right. And I think you kind of lead us to the next point, which is let's break down these tools because we've already started to talk about a couple of them. And we're using all these acronyms. And like, what should a developer do? Where do they start? To me, the Cloud Console is where everyone begins. 

You're a developer, someone has said to you, hey, we need to upload millions of files to the cloud or you need to translate our web pages to another language. And so they're going to start digging around, and they're going to check out Google and some competitors. And they will land in the Cloud Console, which is the web-based administration portal that represents each product and service using a point-and-click interface. 

So for example, you can launch a virtual machine or attach a NIC card to your machine or so on and so forth. And that's all via point-and-click. So I'd be shocked if there's a developer out there that hasn't touched that but is working with Google Cloud. 

At some point, you get to a point where you need to start writing software or you need to reproduce what you just did in a point-and-click fashion repetitively. Like, maybe you launched one virtual machine, but now it's time to do that 1,000 times or turn them off 1,000 times over. And so that's really where the Command Line Interface comes in. 

So Command Line Interfaces have been around since the late 1970s. And what's really cool about them is they're very terse and direct. And so developers tend to like that a lot. You just, in text, you issue a couple commands, hit Enter, and it does the equivalent of what you would have done using this point-and-click interface and multiple steps. 

And the other really cool thing about a Command Line Interface is that once you understand the sequence of steps you need to run, you can copy those and create a script that does them on your behalf. You wouldn't really be able to script a web page in the points and clicks. But you can do that through the Command Line Interface. 

And so those are really the key reasons that people will end up typically migrating from the Cloud Console into the Command Line Interface, which is a downloadable tool. We call it gcloud or the Google Cloud Command Line Interface. 

And back to that earlier point we talked about where cloud is changing things, that same gcloud Command Line Interface is also available directly in the web browser. So when you're in Cloud Console, you can press a little icon that currently exists at the time of this recording on the top blue bar, and it will launch a terminal shell that's hosted in the web browser that has gcloud command line tooling installed. 

And you can start to issue your commands there, without having to download anything. You can't really script against that because it's running on an ephemeral virtual machine in a web browser. But it's certainly enough to get you to kick the tires and start to do things or quickly triage a problem or try things out. 

MARK: Cody, you want to talk a little bit about the authentication? When you've chosen a product, let's say, OK, I'm going to upload these millions of files. And I've decided to use Google Cloud Storage for that purpose. 

Or I'm going to use Google Translate to translate these things from English to some other language. How do you actually turn on that product and start using it? You're going to do something called authentication. And Cody can talk to that. 

CODY: Gcloud is a super powerful tool. And I think usually the first command that you're going to run with gcloud is gcloud auth login. And this is kind of a magical command. You'll go through some OAuth prompts. It will open your web browser. And then you have a locally authenticated client. 

And what's cool about this authentication that happens with gcloud is it can be repurposed by some of our other tooling as well. For example, our client libraries, with no configuration, will automatically pick up those credentials that are on your machine so you can just start developing after you've run gcloud off login with any of our client libraries in any of the programming languages. You don't have to worry about auth, you just start working. 

So you have this storage solution that you're trying to do to upload some files. So after you're authenticated, I would say the next step is I would go take a look at the docs for storage. There's going to be some great snippets that you can just probably copy and paste to get you going. Bring them in locally. They'll be probably using the client libraries. 

And like I said, you're already authenticated because the client libraries will pick that up for you. And then, the next step would probably be deploying out to wherever you're going to push your code. On Google Cloud, we have multiple different environments. And this is actually where another piece of our SDK could come in handy. 

There's this nifty IDE extension called Cloud Code, which you can install in probably your favorite editors, VS Code, any of the JetBrains products, I believe, also support it. And what this extension does is make things like deploying and managing your Kubernetes clusters easier. You can deploy to any of the serverless offerings, et cetera, et cetera. 

But if you don't want to do that, guess what? You can go back to the CLI. If I want to deploy to Cloud Run because I love running on container platforms, you can type in gcloud run deploy. And you're going to push a container image out that is managed. 

I love managed services as a developer because I ain't got no time to worry about scaling and all those things. Guess what? Google wrote the book on SREs. I think they know a thing or two about managing services. So I'm going to let them do that for me. 

But yeah, then once your code is out there, again, what's great about our client libraries in the Google Cloud ecosystem, we have a thing called the Metadata Service that's a part of all our compute platforms. 

So whether you're deploying to GKE, whether you're deploying to Cloud Functions, Cloud Run, it doesn't matter. There's this magic thing called the Metadata Service that the client libraries will again automatically authenticate with. So that is just not something you have to think about. It's a nice delightful experience, from my point of view. 

CARTER: Again, we talked about documentation earlier, and we just talked about all the different ways to use the service. And again, I think it's really important to have things documented well and all that. So how do you use the SDK yourself? Are you a CLI-type person? Are you using it in the VS Code type thing or anything like that? How do you go about actually using this? 

CODY: I read our own docs, like, every day. Guess what? There's a lot of Google Cloud products. And I know a subset of them. So I am always in our docs as a consumer. And I'm always trying to help make those docs better on a day-to-day basis. I would say mostly I do use the client libraries a lot to write a lot of code in different sorts of automation that my team is working on. 

And then, where I find I engage with the CLI the most is when I maybe need to quickly query resources. I want to see what functions I have out deployed. The CLI makes listing resources and seeing what's available, I think, really easy. And that's how I engage with it. 

CARTER: And then, are you doing that through the Cloud Shell and the Console? Or do you do that maybe on your own terminal somewhere? 

CODY: I pretty much do everything locally. I'll drop into the Cloud Console every now and then. But I just like to program off my MacBook, I guess. 

CARTER: It's amazing, just all the different ways different people use it and access it. 

WAEL: Regardless of what Google Cloud service or product you're going to use, you can interact with these products using all of these different tools. And so with the storage example we were talking about before, you can configure your storage product the way you want using the web-based interface. 

You can use the Command Line Interface to do the same thing and more at scale and with automation. Where the client libraries come in, we haven't really talked about that so much, is you want to write code that is going to call these services and do things with them over and over and over again. 

So unlike a command line tool, where it's typically a human deciding what to do as a one-off, which is typically like the operators who are controlling infrastructure and so on, or they're going to script it, the client libraries are really when you're going to write software that is going to call these services repeatedly. 

And an example of how these tools interplay together, back to that idea of, oh, I have to upload millions of files to GCS, the Google Cloud Storage, you may know what your folder structure is ahead of time. So you could use the command line tool to create the folders. 

And then, once you have the folders names, you could write software using the client libraries to start uploading these files to be pre-created folders that you use this other CLI tool for. On the other hand, if you're building an application where the end user gets to name the file, you don't know what the files are going to be called, that would be an example where you wouldn't use the CLI. 

You would use the client libraries to build interactive code that creates folders on the fly as needed or deletes them or does whatever. So they do work together. You can pretty much do anything the Google Cloud offers through the CLI or through the client libraries. They just have different levels of effort and capabilities, depending on your use case. 

Where the client libraries really come in is, you want to use the programming language of your choice. We support seven, as Cody mentioned. And you're looking for something that's going to speed up your coding experience so that you don't have to handle all the low-level implementation details themselves. 

So every service has an API. You could call the API directly if you wanted to, and you would write your own JSON HTTP implementation using your ways and means. And you would do all the handling, all the exceptions, and all that stuff. But barely anyone does that because client libraries do all that stuff under the hood for you. 

And they can do things like, hey, upload this file, and you just give it the file, and it'll handle all the myriad steps and the multipart uploading and the resumption of a failed download and telling you asynchronously that it's done and all that kind of thing. So that's where they help. 

MARK: Yeah. There's a ton of different paths here. And a lot of that is because, not only are people interacting with Google Cloud differently, but because they're going to have different requirements, and their setups are going to look different. 

And some people might prefer an API. I know one of the points that we used to talk about a lot, and it's still there is that in the Console, when you do stuff in the Console, you can still get the command line equivalent really easily of all the different actions you take. 

I think that's a very thoughtful way of saying, like, hey, the Console is great. And for people who want to use it, fantastic. If you want to use a CLI, here's the equivalent thereof. And then, the documentation comes in and has all these client library code samples. 

There's so many different pieces here. And the goal is to create, I assume, right, based on our conversation right now, is to create that good experience for developers and technical practitioners to use this whole suite of tools to basically just get what they need to get done because that's the important part. 

WAEL: That's right. Cody, as a developer, has his way. He wants to work on his Mac locally. And our approach is, meet developers where they are. Give them the tools they need in the place they work. 

CARTER: That's so interesting and something I want to talk about when you say, give people the chance to work how they work. Maybe Cody can answer this one quite well. But I've only really used Go, and I've used the CLI, but if I were to say, like, use a Java or a Python library, is it going to look like the Go Library? 

Because some of the patterns that work there, like context or threads or Goroutines probably don't translate to, say, JavaScript API. So how do these different client libraries look for people in their language? 

CODY: Yeah. That's a great question. I would say, if you squint at 'em, they kind of look the same. They'll all have the same method names and input/output types. But like you said, in Go, we pass a context as the first parameter of a function, basically to every function. In Java, you're worried sometimes about setting in your thread pool executor services and your input/output streams. 

For each language, we put a lot of thought and care into using the client libraries feel like they were written for that language. So in Go, you're going to find the common I/O reader, I/O writer types when you're engaging with the client libraries. 

And yeah, that goes back to my team's focus is really providing this idiomatic experience. So if you come to the SDK as a Pythonista, you're going to find those different traits that person writing Python would look for when engaging with the library. 

WAEL: Really, the goals of the rebrand was to put the client libraries that Cody is talking about that have this language-oriented style that should be easily approachable and act the way a Java developer expects a Java library to act and so on and so forth for the other languages front and center. 

Developers have probably noticed in the past there are multiple client libraries available for a product. That's not unusual for many companies at this scale. And so a common problem was, like, you're giving me three options. Which of these three am I supposed to use here? So we've put it front and center what we call the Google Cloud Client Libraries, which have that stylistic approach and feel that Cody is talking about. 

Some of the other key benefits of them over the others, which will help developers back to that productivity and acceleration, is they have a lot of helper classes to reduce the toil that a developer otherwise has to do. So for example, if you're working with a large data set, pagination is a very common concept. You're going to have to use a cursor to iterate through a large set of information. 

You don't want to write all those low-level implementation details yourself. The library will do that for you. Likewise, for long-running operations where you want to-- back to that initial starting up a virtual machine example-- that's not going to come back to you in 20 milliseconds. It's going to take a little bit of time. 

So instead of having to write all the asynchronous handlers and so forth, you can just invoke the call in the library. And it will tell you when it's done asynchronously. And there are many other examples of that. But that's why they're so helpful in speeding along the development process. 

CODY: And you know, I will go back and say, though, although these libraries look different from language to language, when you're within a given language, I think one nice thing is, no matter what service you're using, all the libraries kind of feel the same. 

For example, in Go, when you create a client, that method, no matter what service you're going to use, looks the same. You can pass the same type of configuration options. So you kind of learn the style of a given service. And you can bring that to other cloud services as well and get productive quickly. 

MARK: Which is important, because there's, I believe, at last count 150 billion different Google Cloud Services. It's not that many. 

CODY: There's a fair amount of that. And you know, it's very unlikely that someone's going to use all of them. But it's very, very likely that you're going to use a couple of them. And so if you're writing a much more complex application that needs to interact with a lot of them, I'm sure that ability to have them all be very similar is super important. 

WAEL: Absolutely. You want to learn once and reapply everywhere as much as possible. Yeah. 

CARTER: It sounds so much like all of these tools are coming together. And this rebrand is really coming together to put the focus on developers being more productive, developers writing less code. And it's cool to see the care in that because, as a developer, I appreciate that. 

So if users wanted to learn more, do you have any steps that they should take or any sites that they should go see? 

WAEL: Before I even get into that, SDK is always a work in progress. We would love to hear back from the community. That's why we're doing this outreach. And we are very open to adjusting our roadmap and plans based on that feedback. It's really important to us. 

In terms of where you can go to learn more, cloud.google.com/sdk will be the new home of the rebranded SDK and all of the associated componentry and tools we've just talked about today. All of the tools continue to work just the way that they used to. There's no change to legacy applications that have implemented them. 

There's no breaking of anything or old scripts or so on and so forth. This is really just about pulling the disparate fragmented items together and making it easier to get going. And so, once again, the feedback would be great. 

CODY: Please reach out to us if you think we could be doing something better on most pages on cloud.google.com, you'll see a little Send Feedback button. I promise you that every one of those little feedback things gets read by somebody. And we try to take action on the ones that make sense. 

Or if you're engaging with our client libraries, for instance, please reach out to us on GitHub. We're trying to meet you where you are. And we want to provide a great experience for you. You'll help us make better products. 

CARTER: And then, one other question I had on the same page, I know on the website there's a lot of samples of all the different languages and the CLI, how to use the tooling. Are there any other code samples or tutorials for users that want to get started and maybe be able to play around or see how it works from some examples? 

CODY: Yeah. So again, if you're interested in a specific service, I would look up that product documentation. And you'll be able to find code snippets for all the different sorts of use cases that you might have, again, for storage. Like, you would find a page on uploading a file, a page on downloading a file, and learn how to do that in seven different languages and a CLI. Then, also going back to the Cloud Console, we have those interactive tutorials where you can engage with and learn in that way, if that's the best way you learn as well. 

WAEL: Another way to approach it is figure out the products you're interested in using. Go to the product page for that product. So for example, cloud.google.com slash whatever product. And sort of halfway down the page, there are links to all sorts of technical guides and documents. 

Once you get into the Technical Guides and Documents section, you'll find something called Quick Starts, Tutorials, Best Practice Guides, Use Case Examples. The coverage is varied, depending on how popular the product is, and that's an area we're working on. But for the more popular products, there's quite a large availability of helpful content there. 

CODY: Yeah. And I feel like we skimmed over it, but it's actually really amazing to have that interactive Cloud Shell be available for anyone who's using the product, or Google Cloud as a whole, because it lets you even skip if you don't have a local development environment set up or maybe your remote or you're working in like a hotel with mediocre Wi-Fi. You don't have your machine. It's so cool to be able to just hop into a virtual machine and just have everything set up for you and kind of get running and get learning pretty quickly. 

WAEL: Yeah. Yeah. It's wonderful really. And actually, the tutorials that Cody was referencing earlier, the goal is to get you to a Hello World state for the product tutorial that you've started. So we'll actually launch an interactive Cloud Shell Editor. It's essentially a light IDE in the web browser. So we talked about Cloud Shell, which is a gcloud CLI in the web browser. 

Cloud Shell Editor is a place where you can write code. And so you can actually import the client library of choice and follow the tutorial along. It'll have some sample code already in there. It'll walk you through how it works. 

And then when you're ready to work more like Cody does, on a local machine, and it's time for the heavy lifting, you can just copy and paste all that code into your local IDE and continue on the development workflow. It's all coming together, you know? And we're excited about what's to come. 

CARTER: Amazing. Well, thank you so much for your time and just coming in and explaining the new SDK and the rebrand and even letting me know what is an SDK versus CLI because I was a little confused. Thank you all so much. 

WAEL: Our pleasure. 

CODY: Thanks. 

CARTER: It was really interesting to hear from Wael and Cody. Even that breakdown of the difference between a CLI, an SDK, and how something that small can cause developer frustrations and pain points. Like, I'm looking for an SDK. I have a CLI. 

That's not what I'm looking for. Or if you're googling, I want to mess around on the command line, if I see something that says a whole SDK, I don't know if I'm a download all that. And so it was just cool to hear the thought that went behind this rebrand. 

WAEL: Yeah. I think it's a great step. I think it's really the important part here is that we're trying to help folks make it clearer for folks, I should say. Like, how do I get started with this? Because it can be so daunting. Like you said, you're like, I just want to put a couple of files into a cloud storage bucket. 

And you're like, here's the million things you need to do. And you're, like, oh, gosh. No. So anything that makes that process easier, and there's definitely one huge point that I think we didn't get a chance to talk too, too much about, but I know it's super important, is we talk about developers and people working in the cloud. And this kind of term that we've used before is technical practitioners. 

And I think it's really important to call out that there's so many things that you can do when you're working with the cloud. And some folks are going to be writing code all day long. Some folks are going to be mixing it between a Command Line Interface and the Console or using the Console 100% of the time. 

There's different people who have different roles that are all adjacent to the cloud. And I love the term technical practitioners because I feel like it does a great job of making sure that we include all of those people because we're not talking about just making a CLI or an SDK for strictly just developers or people with a certain type of background. We're talking about everybody who uses the cloud. 

CARTER: You know what? All right, I've got a confession. When I first heard the term technical practitioner, my hackles went up, because I'm a dev. I'm a developer, and I don't want anyone to strip that away from me. And that's my identity. 

But when you just talk about that umbrella and including people in all the variety of roles that it goes to take to make even just one technical product, like, very rarely is it just one person behind a keyboard. And they're hammering away, and they just release a product and it sells and it does great. 

There's people that are maybe doing UI and integrating APIs into that or there's people that are planning the technical roadmap. There's people that are making the documentation. There's people that are making tests for that. And so all of those people are technical to some varying degree. Maybe they're in the command line, like you said. Maybe they're in a UI. 

Either way, there's a lot of knowledge. And there's a lot of skills that go into this. If a technical practitioner is a way of bringing everybody to the party and making sure we respect everybody and their skills, then I got to admit, that's growing on me. 

WAEL: I love to hear it. And the reality is, is that, and I work with quite a number of people who really look at the cloud from a billing perspective. And while you can think about those people as maybe having financial backgrounds, they still need to understand different areas of the cloud. 

And so I think they still also fall under this umbrella of technical practitioner. And I think it's important, not only to have a term that's inclusive of all those people, but also understands there's so many different backgrounds, so many different types of people who are going to use the cloud in so many different ways, you do need to create a good ecosystem for all of them because it would be really unfair to kind of just focus on one segment of them and say, OK, developers have a great experience. 

But all these other people just don't have much luck. And so thankfully, that's not what we're doing. And I love to see the work being done in that direction and making sure that all the people who are tech and tech adjacent and those sorts of things are getting a great experience. 

CARTER: Right. And it's so interesting that you say that because I love the team we work on. Like, I don't know if anyone listening at home knows a specific team Mark and I work on within Google. It's called the OC&E Team I think I'm legally allowed to say that, right Mark? 

MARK: Yeah. I believe so. I believe so. 

CARTER: OK. If not, it's the redacted team. And it's great because we have a lot of people from a variety of backgrounds. And myself, I came from a coding background. And what that means is, I got very good at one thing, and there's a bunch of skills I never picked up. 

I always had product managers basically helping manage stakeholders for me. I was early in my career, so I never had to run a team. And there's people on our teams that come from backgrounds that weren't coding in front of a terminal or something like that. 

But they have all those skills, and they've picked up the coding, which as much as I think developers we like to make it seem like it's magic, and it's going to be super hard for everyone to pick up, there's boot camps now where people can learn how to program in six, seven, eight months at least one skill or one small part of all there is in programming. 

But now, these people coming from these various backgrounds have a bunch of other skills on top of programming that they can bring to the table. And so I'm all for technical practitioners. I've changed my mind within two minutes, Mark. 

MARK: I love it. Very well said, in terms of what that background looks like. And honestly, as time goes on, things are going to get even more complicated. And we're probably going to see even more roles that come out that don't even exist now, right? Like, we're going to see this evolve over time. 

And so the more inclusive we can be of folks of different backgrounds, but also different skill levels and different kind of technical chops or whatever they happen to study, the more people we can get working with this stuff and the better experience we can provide for them. That's the real goal. 

CARTER: And so out of everything in that episode, I like that as the one takeaway, like, with the SDKs and whatnot, there's a bunch of different ways to use and access them, whether it's through a command line, whether it's through the Cloud Console, whether it's on the Cloud Shell, basically a shell in the cloud on a computer, or on your own terminal somewhere, even if you want to use six, seven different supported languages, those are all options that are viable and you're good to go. 

MARK: I think it's exactly what Wael said, right? Like, meet them where they are. 

CARTER: Meet them where they are. All right. I want to do something. A lot of times, we talk about what are we working on? I almost always go with Google stuff, almost always. I'm going to change it up. I'm going to say something I'm working on, that's not Google related. 

But I signed up for a big scary thing. I'm going to record two comedy specials this August. And I am terrified because, one, that's a lot of work. And I only have one done. I have to make a whole other hour of comedy. Two, because it's just scary to put yourself out there like that. But yeah, I'm excited about this. 

MARK: I think it's awesome to hear. And you know, of course, we have your Twitter handle, right, so people can kind of follow you and maybe see a little bit more about your work. I don't know if you post your comedy stuff to Twitter at all. 

CARTER: I do occasionally the stuff that is appropriate. So I do very, very occasionally. But I'm going to start soon posting a little bit more. So yeah, thanks for that shout-out. Should we take this thing home? 

MARK: Hopefully, everyone enjoyed this episode. I think it's been an awesome interview. And of course, we'll be lining up for your comedy specials. Who knows if we'll be able to line up or not. 

That'll be something that we have to kind of play by ear. But it's always really exciting to hear about. So I'm super excited to see where those come. 

CARTER: Thank you. And thank you all at home for listening. We'll see you all next week. 

[MUSIC PLAYING]