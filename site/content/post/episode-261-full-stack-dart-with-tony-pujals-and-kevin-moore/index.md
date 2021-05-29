+++
audioDuration = "00:36:18"
audioFile = "Google.Cloud.Platform.Podcast.Episode.261.mp3"
audioSize = 52194161
categories = ["Front End Development", "Back End Development", "Flutter", "Go"]
date = "2021-05-26"
description = "On the podcast this week, we're diving into what full stack development looks like with Google Cloud."
draft = false
episodeNumber = 261
hosts = ["Grant Timmerman", "Stephanie Wong"]
title = "Full Stack Dart with Tony Pujals and Kevin Moore"
image="/post/episode-261-full-stack-dart-with-tony-pujals-and-kevin-moore/images/hero/hero-EP-261.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/nlm20z/episode_261_full_stack_dart_with_tony_pujals_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, we're diving into what full stack development looks like on Google Cloud. Guests [Tony Pujals](https://twitter.com/tonypujals) and [Kevin Moore](https://twitter.com/kevmoo) join your hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Grant Timmerman](https://twitter.com/granttimmerman) to help us understand how developers can leverage Dart and Google Cloud to create powerful and effective front end and back end systems for their projects.

Kevin takes us through the evolution of Dart and Flutter and how they have become a way to allow developers an experience-first solution. Developers can focus on the experience they want to create, then decide which platforms to run on. With Dart, Google provides business logic that allows developers to provide the front end and back end experience for users in one programming language. Our guests talk about the types of projects that will benefit most from the use of Dart and how Dart is expanding to offer more features and better usability. Flutter offers a high fidelity, rich framework that supports mobile and can be deployed on any platform. When paired with Dart on Docker Hub, developers can easily build optimized front and back end systems. 

Tony and Kevin tell us about the new Functions Framework for Dart and how it helps developers handle deploying to serverless technologies. We hear more about how Dart, Flutter, and Cloud Run working together can make any project easy to build and easy to deploy and use.

##### Tony Pujals

Tony is a career engineer who's now on the serverless developer relations team and focused on helping full stack developers succeed building their app backends.

##### Kevin Moore

Kevin is the Product Manager of Dart & Flutter at Google.

##### Cool things of the week

* What is Vertex AI? Developer advocates share more [blog](https://cloud.google.com/blog/products/ai-machine-learning/vertex-ai-overview)
* Google Cloud launches from Google I/O 2021 [blog](https://cloud.google.com/blog/topics/developers-practitioners/google-cloud-launches-google-io-2021)
* Secure and reliable development with Go | Q&A [video](https://events.google.com/io/session/7b7e7dd8-57a5-4459-a96e-1494d09efbe6?lng=en)
     * Google CloudEvents - Go [site](https://pkg.go.dev/github.com/googleapis/google-cloudevents-go@v0.1.0)

##### Interview

* Flutter [site](https://flutter.dev)
* Dart [site](https://dart.dev)
* Go [site](https://go.dev)
* Datastore [site](https://cloud.google.com/datastore)
* Dart on Docker [site](https://hub.docker.com/_/dart)
* Functions Framework for Dart on GitHub [site](https://github.com/GoogleCloudPlatform/functions-framework-dart)
* Cloud Run [site](https://cloud.google.com/run)
* Dart Documentation [docs](https://dart.dev/server/google-cloud)
* Google APIs with Dart [docs](https://dart.dev/guides/google-apis)
* App Engine [site](https://cloud.google.com/appengine)
* Dart Functions Qwiklab [site](https://www.qwiklabs.com/focuses/18213?catalog_rank=%7B%22rank%22%3A6%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=11124335)
* Flutter Startup Namer Qwiklab [site](https://www.qwiklabs.com/focuses/18214?catalog_rank=%7B%22rank%22%3A1%2C%22num_filters%22%3A0%2C%22has_search%22%3Atrue%7D&parent=catalog&search_id=11124335)
* Cloud, Dart, and full-stack Flutter | Q&A [video](https://www.youtube.com/watch?v=r8rVm4-RJJM)
* Go full-stack with Kotlin or Dart on Google Cloud | Session [video](https://www.youtube.com/watch?v=JwCmu_INnCg)

##### What's something cool you're working on?

Grant has been working on [libraries for CloudEvents](https://github.com/googleapis/google-cloudevents).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 261 of the weekly Google Cloud Platform podcast. It's Stephanie Wong here and today, I have Grant Timmerman. Hey, Grant." >}} 

GRANT: Hey, Stephanie. How's it going? 

STEPHANIE: How are you doing? It's been a while since we've worked on a project together but I'm super excited to have you as a co-host on the podcast today, specifically because of the topic. So what are we talking about today Grant? 

GRANT: So today, we're talking about full stack Dart on Google Cloud. Kevin and Tony, they're some of the world's experts in building full stack development with Dart on Cloud. So that's front-end, back-end, mobile, all the same language, using the same code. 

STEPHANIE: Yeah. So I am super thrilled to hear more about it. Last year, I know that you also came out with a video that I worked on with you for Functions Framework for Next. And I know that we're going to dive into the details of how you can actually leverage Dart using the Functions Framework and deploy services on Serverless products like Cloud Run. So I'm super excited to see its development and support for Dart. 

GRANT: Yeah, there's some really cool tools like official Dart Image and Dart Functions Framework that we'll talk about. 

STEPHANIE: Yeah, so before we dive in, let's go ahead and cover the cool things of the week. 

[MUSIC PLAYING] 

OK, so my first cool thing of the week-- Because I'm going to do two this week, I know I'm bending the rules here. So last week was Google I/O 2021, which was virtual this year, but there were a ton of announcements and one of the biggest ones for Google Cloud was Vertex AI. So that is our new platform for artificial intelligence which unifies Google Cloud's existing ML offerings like AutoML, and our other ML API's, along with our AI platform into a single environment for efficiently building and managing the life cycle of your machine learning projects. 

It gives you the tools for every step of the actual machine learning workflow across different model types and also for different levels of machine learning expertise. So my cool thing is this blog post and video that our colleague, Priyanka, put together to introduce how Vertex AI works and all the incredible things that you can do with it from training, to predictions, to even getting explainable AI to discover the most important features in your models. 

GRANT: Wow. Well, that sounds really cool. Really awesome name, Vertex AI. I really want to go and check it out now. 

STEPHANIE: Yep, very cool name indeed. And that's not the only cool thing that happened out of I/O for Google Cloud. I also wrote up a wrap-up blog post to give an overview of every awesome launch that happened during I/O, specifically for Google Cloud. And one of them has been Vertex AI but the rest includes a bunch of workspace feature updates around collaboration and security. 

There are a ton of really interesting features that are going to be rolled out between interactive building blocks, smart chips, interesting ways to at-mention a person in a document or meet with them to discuss a document while you're in the doc working with each other. And then also workspace security updates like an alert center for administrators to get unified views of critical alerts. And also a way to restrict access to Google Workspace resources. 

And then the last thing that came out is around sustainability, we had a huge breakthrough in carbon aware computing so that we can actually shift compute tasks across locations. Not an easy task, especially with our goal of trying to achieve carbon-free energy all the time by 2030. So this is a big step up in our progression towards that goal. And then also we also have a next generation geothermal technology that's announced for our Nevada region. So we're super excited about the incredible progress that we have in that space. 

GRANT: Wow, that stuff is just mind-blowing. Super excited. So one of the cool things that I saw last week was this session about securing and building reliable development with Go as Q&A by some of our Go-ing experts. They go and discuss some of the latest work in making an end-to-end experience, developing Go more secure and reliable. This includes more ramped up dependency management and editor integrations with gopls. 

And also the really impressive package discovery site, which is pkg.go.dev. And there's also a lot of cool Go built-in security features, native fuzzing and vulnerability detection within databases. So, yeah, I personally love Go, the pkg.go.dev, because some of the packages that I maintain, specifically with Serverless and Google Cloud Events, use this and provides really great auto-generated documentation, don't even need to write it, it might get a repo. 

STEPHANIE: Yeah, I've been really impressed with Go recently and the amount of progress that they've made on that team is including the packages. And I've been seeing just the incredible use cases that people have been using it for between Serverless, or Pub/Sub, Firebase, and Cloud. So, yeah, it's a great session to check out if you're interested in the language and, of course, we are talking about another incredible language today, Dart, for full stack webs. So lots to learn, so why don't we go ahead and jump into our conversation with Tony and Kevin? 

[MUSIC PLAYING] 

All right, Tony and Kevin, thank you so much for being on the GCP podcast. I know some of you are listeners so appreciate the support here but we're excited for you to jump on today and talk about full stack dev on Google Cloud. So tell us a little bit about your roles and what you do here at Google. 

KEVIN: Sure. So my name is Kevin Moore. I'm a Product Manager on the Dart and Flutter team, I've been on the team for about seven years, which I think is pretty unusual at Google, I just turned out to really love the people I work with. So, as a product manager, I'm supposed to be thinking about strategy and the direction, the language, the tools we have, go, along with a team of other great PMs and great engineers. 

Although, it's really hard to pull me away from my IDE, I like coding, so I'm a weird PM, I really like running code, which is probably good for programming language. We had some great announcements last week about basically making it easier to use Dart on Google Cloud and with Google Cloud and with Google APIs, so I'm excited to talk about those things. 

TONY: Hey, everybody, I'm Tony Pujals. I'm a Developer Relations Engineer at Google Cloud and I'm here today just because I'm super jazzed to help tell this full stack story and help our developers who are writing really cool front-ends, also take advantage of Google Cloud for the back-end. 

STEPHANIE: Amazing. So you just mentioned that we just came off of a whirlwind of a week last week at Google I/O 2021 which was different this year. But you both did a couple sessions talking about full stack development using Dart, Flutter, and our Serverless technologies on Google Cloud. So give us some background on why you decided to present on that topic and a little bit of background about the landscape of full stack development. 

TONY: For a little bit of historical context, it's safe to say that developers have always gravitated towards using the same language at the writing their front-end as well as their back-end. Here at Google Cloud, we actually don't have a lot of options for doing that other than the canonical JavaScript on the front-end in a web app and JavaScript on the back-end in a note app. 

There's not too many examples of being able to do a full stack development here. And one of the things that kind of excited me about the possibilities is that there's this whole exciting community that's been growing around Flutter, and Kevin's going to talk about that more, I'm just going to say that the language of development of Flutter is Dart, and I started getting excited personally about the opportunity to then write my front-end and back-end in Dart and what would it take to make that happen. 

KEVIN: Yeah, what Tony said, we've been really focused with Dart from the beginning on building front-end experiences. So we've been going for seven years now, which is kind of crazy to think, but Dart and Flutter have really found this great sweet spot. We started out just as a mobile framework so you can write the same code for iOS and Android. And just in the last year, we've really expanded out to target desktop, target web. 

And so, we're all about anywhere you render pixels, we want to be able to make it easy for you to light up those pixels and, ideally, not have to think too much about the underlying platform, you think about the experience you want to build first and then you can worry about the platform you're targeting. And one of my favorite examples here-- I mean if people are doing mobile app development, they'll be aware of this-- having to deal with the emulator, whether it's the Android emulator or the iOS emulator, it's just a little bit clunky. 

And so, we had this great develop experience, we can let you code in a desktop app and code in your desktop, which is super fast and loads really fast, and then worry about pushing to your testing and validating and deploying for your mobile app later. Same thing for the web, you are able to have our website, dartpad.dev, and you can try out Flutter and Dart, great in the web experience, and try it out and it renders fine on the web, and then later take that knowledge of those samples and deploy it for mobile or deploy it for desktop, and so that's all great. 

But as I mentioned in my talk last week, rarely do you have an app experience that's just an app experience, just pixels. The example I gave in my talk was I think the chess timer app I use when I'm playing chess with my kids is the only app in my Android device that doesn't somehow talk to a back-end, that's probably it. And even that, I'm sure there's some way to log in to track who's-- every app is connected. 

And what we realized is we have lots of people that are super happy sitting in Dart. So already they're in a situation if you wanted to put them in platforms, you don't have to switch between Kotlin and Objective-C or C#, you can just stay in Dart and that's great, but there's still this place where you get to jump off where you want to integrate with back-end services. And often, what you need on your back-end isn't some crazy big complicated thing, you just want to do some business logic. 

And so, what we're trying to do is what are the little pieces we can provide so that we can make it easy to run that Dart code on the back-end, and so you don't have to train up your developers or hire a new team, you can use the same tools, the same language to wire up back-end services and provide front-end and back-end experience for your users, using one language. 

STEPHANIE: Yeah, this is incredible just because of-- I know, Tony, we were talking last week about how different this has been in your previous experience trying to do cross-platform development, having to learn Java and know JS or various languages to be able to do all of this and connect services in the back-end. And in I/O, the keynote, I know that they were also talking about Flutter and being able to allow developers to focus more on the experiences, and we're seeing a huge surge in community support for Flutter and Dart as well. So just to get a little bit more background on Flutter, can you tell us a bit more about that as a platform? 

KEVIN: It's crazy looking back-- Again, I've been at Google about 7 and 1/2 years now, and when I joined, it was part of the Chrome team. And Chrome, it was just kind of an incubator of all these crazy ideas. And what's interesting is a lot of them never ended up evolved, like you think about-- I remember Native Client, or NaCl, was this WIDwrite in C and C++. And that's not on Chrome anymore but now we have Wazzam so that idea evolved, and Chrome apps were a big thing when we started, and again, that's something that Chrome is deprecating. 

And that's great because now we have things like PWA's, and we have service workers and web workers, so these technologies evolved. And so, Dart and Flutter were both started as incubations within the Chrome ARC and there were discussions around what Dart was, what if we could do something like JavaScript but just take the good parts of JavaScript and do something a little different. This is where we started. 

And obviously, JavaScript has continued to evolve and does great things now, but that was the idea of Dart. And Flutter was also very similar, like how can we take what the web does and strip it down to the simplest bits and what would that enable? And what's crazy is the bits that were Flutter and Dart never shipped in the browser, and I'd actually claim that's probably a good thing, the web has evolved amazingly in the last half decade. 

But these two technologies have gone off on their own and now standalone things, and it's really cool to see the full circle now. Because now we started out as a way to build iOS and Android, we shipped web is stable and now we're on desktop as well. And so what we try to do is make it really easy to build cross-platform apps, beautifully, really high-performance, we compile down to native code, we don't use a web back-end or the native widget that exists on those platforms. 

And so you get really high fidelity across all the platforms, really high speed we compile down to native code, Arm or x86, or JavaScript if you're compiling to the web. So we offer you this really high fidelity cross-platform experience. And for a lot of teams, we have teams at Google that are using it in externally, it's great because they get the benefits of having a framework with a lot of deep features, a rich widget catalog, support for touch, support for keyboard and mouse, all those things, and the ability to deploy cross-platform with high fidelity. 

So we try to check all the boxes, at least that's our aspiration. There's always issues, we're always trying to improve ourselves, but that's really the goal. The interesting thing that we're excited about to talk today is extending some of that benefit, at least from the coding perspective, to the back-end. 

GRANT: Yeah, that sounds amazing. 

TONY: To me, my journey began with-- I write a lot of CLI's but I wanted something a little bit better than a CLI, and I wanted to write something that was going to run as a desktop app. Back in the day, it was really easy to spin up a Windows Forms app, and I wanted something like that. I didn't want to go the HTML5 CSS and pick your JavaScript framework route, I didn't want an Electron desktop app. 

I just discovered Flutter, you might say, and then by way of extension, got excited about, I think I represent the use case for a developer who is developing something using Flutter that suddenly goes, well, gee, I'd like to write my code for the back-end as well. I'm comfortable with other languages, comfortable with Node, comfortable with Go, but didn't want to switch gears. 

GRANT: I really like the theme around focusing around the end experience. Not having to worry about writing HTML, CSS, or the different languages you can use. So it sounds like Flutter can be a really great fit for developer needs, especially with writing beautiful UI's, but can you tell me a little bit more about writing Dart in the back-end and maybe how you could potentially reuse some of the same code across the front-end and back-end? 

KEVIN: No, that's a great question. If you're familiar with Flutter, you think of it in context of, oh yeah, I'm pushing pixels around. But from the beginning, we've made sure that Dart has run on the desktop, like our analyzer and our formatter, our JS compilers, all those things are written in Dart, which is a little bananas. I think for a while, one of our tests for the JS compiler was that we'd compile the JS compiler into JavaScript and then we'd compile the JavaScript compiler with the JavaScript version of the JavaScript compiler, which is completely bananas but it's a great way to make sure that you hit the whole language. 

And so we've run on your desktop as a CLI for a long time. And what's cool is some of these features that we've had for the mobile experience, we can compile ahead of time, you can't run JITed code on iOS or Mac products so you have to compile ahead of time. We can use tools like that as well. So you actually build on native executable, similar to what you do with Go or Rust, that you can just send someone executable. 

Obviously, you need to make sure you build it for the right platform, and it'll just run, and they don't have to think about installing a framework or dealing with all that stuff, just here's a binary. And so, those features and also just kind of a focus on small binary size, high-performance, great networking support, all those things that make a great client experience also, guess what, make a great server experience. And so, we were able to take the work we did to make the clients fast and small and great and parlay it to the server. 

It's not our focus, I want to be clear, Go, as an example, it's been hyperfocused on the server for a long time, so we certainly have our place where we think where we shine. But what's great and the refrain that Tony has as well is sometimes you just want to do a little bit server code. And so we started with our package site. and we have a language in a package ecosystem, and we host those packages, and we want to analyze the code and everything else. 

So, of course, it makes sense to implement that in Go and so we, from the beginning, have used Google's Cloud infrastructure to host our package manager. And we've had a lot of great learning there around making fast HTTP, and talking to Google APIs, using things like memcache and DataStore, and wiring things up with CDN's, so we've done all that work. 

What we realized was this is really productive for our team, obviously, to stay in the same language, and we think it'd be useful for other folks as well, that even if you just want to do simple enforce business rules on the back-end, those types of things are super easy to do with Dart, and we think it's great for folks that already have invested in Dart to leverage it in the Cloud. 

GRANT: That makes a lot of sense, being able to reuse code and get that high performance networking support. So what do you think makes Dart a good fit for Flutter developers in the Cloud use cases? 

TONY: It's already been touched on, the idea that Dart is very fast, and you can compile these very small lightweight executables. And these are all actually really useful traits because most of our services that are running Google Cloud, of course, run on containerized infrastructure. And the idea that you can have a very small lightweight binary executable that doesn't require a full runtime, you can just drop that into a container, you can deploy it, that's awesome. 

And because that's so critical as part of normal Cloud development, we've taken that really seriously. The Dart team has always supported a number of Docker images. These images were tailored around being good for somebody running the developer tools, the SDK out of a container, but it wasn't really optimized for Cloud. But we worked for the past couple of quarters, had an experiment around optimizing the image, and then worked with the official maintainers team at Docker, and really proud and pleased to say that we actually launched the official images for Dart on Docker Hub yesterday. 

This is how seriously we take this premise, this is a good match, this does marry up very well to use cases for Flutter developers who want to run things on the back-end so we work to make sure that they would have an optimized environment for doing that. So we've got a really nice official image that supports both the stable and beta channels. Obviously, they want to run stable and production, but that's just one facet. 

The other reason, I think that you can say that it's a good fit, is yes, it's lightweight and it's fast, and yes, it does marry up very well to simple use cases but in fact, there's nothing intrinsic to the language that it doesn't make for a good server programming language, there's nothing inherently wrong with its ecosystem. It supports all the networking features you need out of the box, supports writing HTTP servers, it comes with a nice HTTP server framework called SHELF, that's one of the packages that you download. 

Where maybe there hasn't been a huge investment that's in all these big, heavy web frameworks that evolved over the past decade in other communities that were focused in that area, but ironically, you don't really need all of that. What we're advocating is the modern Serverless approach that's going to benefit the Flutter community the most anyway. So whether you're running small, lightweight little function that's going to respond to an event in the Cloud, an HTTP request, a Cloud Event, or you're trying to build a back-end, that's a collection of microservices and workflows to power the back-end of your application, that's all going to work out very well for you. 

KEVIN: Google is not working on some Rails equivalent in Dart, or some WordPress equivalent in Dart. Those are huge, insanely mature technologies. If you need something that's for doing CRUD-type things, create, update-- I guess people in this podcast probably know what CRUD is-- CRUD things, or CMS, those great solutions there. And if you wanted to go build a solution like that in Dart, by all means, when you welcome the community to go do those things, that's not something that the Flutter and Dart teams are focused on. 

What we realized is, these small use cases, these straightforward adjacent use cases to your app where you just want to do a little bit of the Cloud, that fit's great, and it's productive, and it's fast, and all the building blocks are there. And we're excited to see where the ecosystem in the community can take the pieces that we're offering. 

GRANT: It seems like you're talking a lot about the focus on frameworks and SHELF. You talk about HV, and Cloud Events, and this tooling that makes it a great developer experience. Is there some specific tool that you're talking about that is like a great experience? 

TONY: So glad you asked that, Grant. Because you and Kevin and I spent the last couple of quarters building a very nice little framework, I think, that's going to be a really great tool that helps our customers on board onto Cloud Run. And Kevin spent a great deal of time optimizing that framework to make it super easy for developers to be able to write functions. And when you write a function where you have a certain type of signature, it's going to automatically take the shape of that request and just do the right thing. So whether you're sending JSON, returning JSON, or you're handling a Cloud Event. And, actually, I should just let Kevin talk about it since he spent all the effort on that part of the framework. 

KEVIN: It has been a little bit crazy to implement. There's always this stereotype that developers are lazy, I certainly fit into that, I hate toil. And I spent a bunch of time working on JSON serialization package for Dart, and that uses our build infrastructure. So you can define a class and imitate a class and then you run a magic script, a standardized script, and it'll generate your to JSON from JSON for you. 

And so I did something very similar with our function framework. And so what you can do there is you, just to find a function, the abstraction just makes me so happy, it's so cool how this works. I just wrote a function that I can take in an order object as a single parameter, and I can return an order status as a response. And as long as the parameter type order has a from JSON, so we know how to convert it off the wire, and as long as the response object has a to JSON, that's all you have to think about. 

Because you can write one class, and you run our build script, and it'll just work. And we'll handle to JSON, from JSON for you, we'll handle checking to make sure that the request type is JSON, all that stuff. If your object has good errors that you throw, if you get incorrect data when you deserialize your JSON, we'll send the user a 500 and we'll give a great log message on the server side so you can debug what happened. 

I'm guessing people listening to this podcast, there are probably some of that are old and grizzled like me. It starts feeling more like, I remember WSDL back in the day from Microsoft, you just write a class or just write a function and we'll take care of wiring up the back-end for you, and I remember just thinking how magic that was. I was talking to Tony about building back-ends and WinForms back in the day, the WSDL stuff was so great. 

And it was obviously great equivalence today with things like gRPC, just making it magical. So when I'm running my back-end, I don't think about what port I'm listening on or how I'm handling errors, I can just print or I can log, and everything's taken care of for me, it's a great experience. I think we've got really close to that with the function framework for Dart and I'm excited to see how we can keep evolving it. 

STEPHANIE: We've mentioned Functions Framework quite a few times already and all three of you have worked pretty extensively on this and in particular for Dart. But, Grant, I'm curious to learn from your perspective the importance of Functions Framework for developers of each of these languages to give them that magic piece and the bridge to deploy their services as lightweight functions to Serverless technologies like Cloud Run. 

GRANT: Yeah, let me start with a history in the back-end. Two years ago about how you can go and develop a function, a lightweight function that can be deployable in multiple environments. We were just starting with this thing called the Functions framework. It's a set of libraries that are all open source that are the backbone for Google Cloud functions. And what this library does is it transforms your code from just accepting a request and returning a response to an HP server that can accept HP requests and Cloud Events and it has the same interface. 

And so, no matter if you're accepting from Pub/Sub, or from Cloud autologs, or different types of events, you can write a similar looking function now, available for nine different programming languages including Dart, and it creates this really nice developer interface. So you can focus less on boilerplate and focus just on the value that you provide. It's also really great for local development. In fact, there's a bunch of tooling with the Dart Functions Framework for getting up and started and adding templates. 

TONY: So the Dart Function Framework includes a tool called dartfn. If you're a Dart or Flutter developer, you may have worked in the past with a tool called Stagehand. What's really nice is that both from the Dart SDK perspective, so when you run Dart, you actually see that the team has added support because it's so important. You can now use a Dart command to template a SHELF application that includes a Docker file that's based on an official image. 

And you can use dartfn to template one of several different types of function to apps, from a basic "Hello, World" app to one that's adjacent API to one that's a Cloud Event and one that's a full stack example that's got a Flutter front-end and a Dart back-end. So you can use dartfn to scaffold an application that gets you a back-end application that is your function. 

And let's be clear, when we talk about functions and then we talk about Cloud Function, sometimes it might be confusing for any of the listeners. So what I mean by a function, in the context of the Dart Functions Framework, is you're not writing a full fledged server, you're going to template out a function, you're going to implement that function, that's going to conform to one of the interfaces that Kevin was talking about for handling JSON or Cloud Events, and that's it, we're going to then build the rest of the app around it for you when it gets deployed. 

It's going to get built as part of building the image and a full server ultimately gets deployed somewhere, but that's transparent to you, you don't have to write that. In terms of Cloud Functions on the back-end, can't unfortunately deploy to Cloud Functions today, but you can get a symmetric experience for the most part with Cloud Run. We've done all the heavy lifting as much as possible to make the experience aligned. So you write functioned code and you can deploy it to Cloud Run, even though it's not Cloud Functions on the back-end, and have a similar experience. 

STEPHANIE: Great. So, we're talking about Serverless platforms that you can deploy to like Cloud Run, but are there any other platforms that are supported right now? 

TONY: Yeah, I mean, at the end of the day, you are generating an executable that runs on Linux and anywhere you can put that executable inside of a container, actually that doesn't even have to be a container, any web server that you own, you can deploy to that web server. You can create an image that you want to deploy, a GKE, you can run it in a VM in an instance on Google Compute. 

You can deploy to any number of back-ends. You can deploy it anywhere. I'll be honest, you could deploy to Azure if you wanted, or AWS, nothing's going to stop you from running wherever you want to. We think that we have a very excellent experience for the developer community that we're targeting here, our Flutter developers, we believe you're going to have a very good experience targeting towards Cloud Run. 

And the reason why I say that is because you're going to find a lot of advantages around Cloud Run that involve the ability to be able to go multi-region, the ability to have scale-to-zero where you're not incurring any costs when you're actually not handling a request. And although it's in beta, it's not part of the stable release yet, you can even deploy your code, your source, and have it ultimately run on Cloud Run, just like you do with Cloud Functions. You don't even have to build an image yourself, the back-end will take care of that for you. 

KEVIN: We have a simple little tool, it's called darkbug.com. If you want to go look at dark bugs, just go to darkbug.com. And it's just a trivial little thing we had set up to help us triage bugs and we can do quick links to our issue tracker, and that's all set up with Cloud Run and Docker and these tools. And it reminds me of Heroku back in the day, talking about 15 years ago or longer, where I just code something up and I do get push, and you can see on the master branch on GitHub, the little icon shows up, and it's yellow and I can click, and I can go see the Cloud Build. 

And, again, I'm not thinking about spinning up instances or anything else, it just happens, it just works. And I wait a minute and a half, and the little icon turns green, and my app is deployed. And so, I don't even have to think about it. It's a testament to this new model for how you think about server apps, which is if you weren't in a container, you can run anywhere. That's a great story as an engineer and it's a great story if you're in OPS obviously. And if you're doing front-ends, it just means the bar is so drastically lowered. Getting something live and running on the web and not freaking out about scaling up and scaling down and all those things, it's just handled for you. So it's a really great-- 

TONY: Our regional Serverless platform is App Engine. And DartPad, for developers that are familiar using DartPad in a browser just to try out code, that runs on App Engine. And actually, that's being migrated over to Cloud Run, take advantage of the same benefits of scale-to-zero and stuff like that. 

KEVIN: Yeah, it was crazy. For a while, we had it set up, and there was some min number of instances for App Engine set up and I think we were spending, I don't know how much money per month. And I was like, can we take this all down now? And it's like, oh, yeah, and we ended up saving a bunch of money. And so, even if you work at Google, unfortunately, you still have to pay for your Cloud instances. And so, yeah, we've been super happy. So when events like I/O happen, where people are taking our code labs and things, everything scales up, and it's a really a magical experience to go in and build a rich app experience and you can see your Android or iOS UI just rendered in the browser. It's super cool. 

TONY: Somewhere along the way, there's a brand new QwikLab that we want to tell people to check out that lets you try out building a full stack app. It's so cool, it builds a Flutter app, as well, running in a web browser that's going to connect to a service that's running a Google Cloud in the back-end, complete browser-based experience, it's amazing. 

STEPHANIE: We can actually get that link in the show now, so everybody should check it out. 

GRANT: Deploy from source sounds really cool. So how does that work with Dart? 

TONY: When you work out of your repo, you've scaffolded the project, you've implemented your function, you'll have to have a Google project for the back-end. You've set up your Google project, you've got to have an account and all that kind of stuff. But you're going to be able to take advantage of this new command from gcloud and of course you can automate this as part of CI/CD, that lets you basically do a gcloud submit, and push that code to the back-end where it will get built for you using Cloud Build. 

And it's going to put an image into our container registry, and from there, you can start up your app and run it in Cloud Run. So the difference between Cloud Function to Cloud Run right now is that Cloud Functions knows how to build your app on the back-end without you telling it how to, it analyzes your app and figures out what to do. For us to make this work, you still have to have a Docker file in your project, which tells our back-end for Cloud Run, technically for Cloud Build, how you want to build it. But that's about the only difference. It's a single command, basically, to submit it and build it. 

GRANT: Oh, that sounds really cool. All you have to do is add a Docker file to your Dart project and then you just run gcloud, beta, run, deploy, and dash dot source, that sounds awesome. 

STEPHANIE: But, yeah, this is super exciting. I'm sure a lot of people are curious how to get started with everything that you've talked about today. So where is the best place for developers to get started between Dart, Flutter, and Cloud Run? 

KEVIN: It's great that we had I/O last week, so we have all the links and the assets ready for you. If you just want to start, even just on the client side, just in Flutter and start using Google APIs for instance, we have a great resource up. It's flutter.dev/go/google-apis. And that'll talk to you about how to get going on the Google API side and setting up with application and all those things. 

And then Dart on the back-end, we have a similar Go link, dart.dev/go/cloud. And that will get you started on Google Cloud stuff, and actually the sister pages there will show you how to start up an HTTP server using Google APIs from the back-end. So we have all those things together, and that page also links to the Function Framework work. So if you're curious about using function frameworks, all the links are there. 

STEPHANIE: Awesome. This is all super exciting and you all did a great job at I/O last week with tons of resources and launches coming out in this area. I can already see the enablement that's happening for developers to actually participate in more full stack dev, and between the Functions Framework for Dart and the Docker image launch. Like you said in your AMA session, Grant, it's all about the level of abstraction that you want in your environment. So just the level of control that you want between functions versus images and access to the operating system. So congratulations again and thanks for joining. 

TONY: Thanks for having us. 

GRANT: Thank you. 

KEVIN: Thank you much. 

STEPHANIE: So I'm really glad to hear about Flutter on the podcast. We haven't talked about it much, but I keep hearing about it in the developer community over the past few years actually. Mostly when I hear about it, it's in the context of mobile and web development, but it's interesting to hear that it is a great platform for cross platform development. I didn't really know too much about using Dart for full stack development and especially on Cloud. 

GRANT: Yeah, so there's been a lot of really exciting updates, actually, just in the last couple weeks. One of the really great things about Flutter, and Dart, the underlying language that powers Flutter is that you can use the same language building your front-end and back-end. So that's both on web and on mobile, and if you're building back-end systems, you can even use the same functions and go and deploy them on Google Cloud. 

Now, Stephanie, don't get me wrong, I love Node and love using TypeScript, but one of the interesting parts about Flutter is, yeah, you can go and write these same functions and they can work anywhere. And Tony and Kevin, the experts, they know these systems, they're the authors. And so, we have the Dart official image, dartfn tool, Dart Functions Framework, and you can use all of those tools for a really great developer experience and deploy on Cloud Run today. 

STEPHANIE: It's exciting, and language affinity and preference is always going to be a thing, but I think the key thing here is just the movement towards having a language that's flexible and provides you with a great foundation to have more time back to yourself, and also provide you a straightforward pathway to using newer Cloud native platforms and technologies like Cloud Run or even Eventarc, et cetera. So, Functions Framework has been a great tool that you've been helping to support in this area. So what are some resources that people can use that you know about? 

GRANT: Specifically, at Google I/O, we have some great videos about using Dart and Serverless. We have a Dart, and Kotlin, and Google Cloud video with Tony and James Ward. And we also have an AMA with a couple of the experts across Google Cloud and Dart. It's a really exciting time. 

STEPHANIE: I love seeing how tight-knit the community has become. And I just feel like if you look on the Flutter YouTube channel or social media, you can just feel the excitement and passion that people have for Flutter and Dart, et cetera. 

GRANT: We're at the beginning of a story of full stack development where you can use the same language across all these different platforms and get native mobile experiences too. The community has been outstanding and I definitely recommend that you go and check out the links and the shoutouts below. 

STEPHANIE: Grant, anything cool that you are working on at the moment? 

GRANT: Working a ton of things, of course, Stephanie. So, yeah, one of the things that I've been working on really recently is a set of type libraries for Go and Google Cloud Events. These are events that you can go produce from Eventer. So no matter if you're using Node, your TypeScript types, or structs in Go, or just POJO's in Java, we have a set of libraries to make it easier for you to go and consume these events in your language. Yeah, they're really useful and helpful for providing some auto-completion within your service with Eventer. 

STEPHANIE: So, where can people go to find these libraries in? 

GRANT: So you can go and check them out. They're all open source on GitHub at google-cloudevents. We'll go and provide a link in the shoutouts below. 

STEPHANIE: All right, well, thank you so much, Grant, for co-hosting and bringing your wonderful self, and bringing your expertise, and all the work you've done for Functions Framework and Dart onto the episode today. 

GRANT: Well, thank you, Stephanie. It's been a pleasure. 

STEPHANIE: All right, well, we'll see everyone next week. Bye, everyone. 

GRANT: Bye, see you. 

[MUSIC PLAYING]