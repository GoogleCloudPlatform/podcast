+++
audioDuration = "00:41:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.315.mp3"
audioSize = 59161227
categories = ["Big Query", "Serverless", "Cloud Run", "Cloud Shell"]
date = "2022-08-10"
description = "Stephanie Wong and Brian Dorsey are joined today by fellow Googlers Jaisen Mathai and Sara Ford to hear all about Cloud Functions (2nd gen) and how it differs from the original."
draft = false
episodeNumber = 315
hosts = ["Stephanie Wong", "Brian Dorsey"]
title = "Cloud Functions (2nd gen) with Jaisen Mathai and Sara Ford"
image="/post/episode-315-cloud-functions-2nd-gen-with-jaisen-mathai-and-sara-ford/images/hero/hero-EP-315.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/wl2isg/episode_315_cloud_functions_2nd_gen_with_jaisen/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and [Brian Dorsey](https://twitter.com/briandorsey) are joined today by fellow Googlers Jaisen Mathai and Sara Ford to hear all about Cloud Functions (2nd gen) and how it differs from the original.

Jaisen gives us some background on Cloud Functions and why it was built. Supporting seven languages, this tool allows clients to write a function without worrying about scaling, devops, and a number of other things that are handled by Cloud Functions automatically. Customer feedback led to new features, and that's how the second evolution of Cloud Functions came about. Don't worry, first gen users! This will continue to be available and supported. 

Features in the 2nd gen fit into three categories: performance, cost, and control. Among other benefits, costs stay low or may even be reduced with some of the new features, larger instances and longer processing times mean better performance, and traffic splitting means better control over projects. Sara details an example illustrating the power of the new concurrency features, and Jaisen helps us understand when Cloud Functions is the right choice for your project and when it's not. Our guests walk us through getting started with Cloud Functions and using the 2nd gen additions.

Companies like Lucille Games are using Cloud Functions, and our guests talk more about how specific users are leveraging the new features of the 2nd gen.
 
##### Jaisen Mathai

Jaisen is a product manager for Cloud Functions. He's been at Google for about six years and before joining Google was both a developer and product manager.  

##### Sara Ford

Sara is a Cloud Developer Advocate focusing on Cloud Functions and enjoys working on serverless.

##### Cool things of the week

* No pipelines needed. Stream data with Pub/Sub direct to BigQuery [blog](https://cloud.google.com/blog/products/data-analytics/pub-sub-launches-direct-path-to-bigquery-for-streaming-analytics)
* Cloud IAM Google Cloud [blog](https://cloud.google.com/blog/topics/developers-practitioners/cloud-iam-google-cloud)
* The Diversity Annual Report is now a BigQuery public dataset [blog](https://cloud.google.com/blog/topics/developers-practitioners/diversity-annual-report-now-bigquery-public-dataset)
 
##### Interview

* Cloud Functions [site](https://cloud.google.com/functions)
* Cloud Functions (2nd gen) walkthrough [video](https://www.youtube.com/watch?v=N6pMppfU2aQ&t=8s)
* Cloud Functions version comparison [docs](https://cloud.google.com/functions/docs/concepts/version-comparison)
* Lucille Games: Playing to win with Google Cloud Platform [site](https://cloud.google.com/customers/lucille-games)
* BigQuery [site](https://cloud.google.com/bigquery)
* Cloud Run [site](https://cloud.google.com/run)
* Eventarc [docs](https://cloud.google.com/eventarc/docs)
* Cloud Shell [site](https://cloud.google.com/shell)
* GCP Podcast Episode 261: Full Stack Dart with Tony Pujals and Kevin Moore [podcast](https://www.gcppodcast.com/post/episode-261-full-stack-dart-with-tony-pujals-and-kevin-moore/)
* Working with Remote Functions [docs](https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions)
* Cloud Console [site](https://console.cloud.google.com/)
* Where should I run my stuff? Choosing compute options [video](https://www.youtube.com/watch?v=q_5AgiI7KFQ)

##### What's something cool you're working on?

Stephanie has been working on [GCP Support Shorts](https://www.youtube.com/playlist?list=PLIivdWyY5sqKCjIve5napeQW_9jABDiVZ).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 315 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and I'm back again with Brian already." >}} 

BRIAN: Hello, hello. 

STEPHANIE: What's up, Brian? 

BRIAN: I'm Brian Dorsey, and we're going to be talking about Cloud Functions, second generation, with Sara and Jaisen. 

STEPHANIE: Yeah. You might have heard Sara's voice on this podcast before. It's apparently Jaisen's first time on a Google podcast, and he's going to show you his excitement for that in just a moment. We are talking about Cloud Functions second gen today, which I'm excited about because this came out recently, this year. And I did happen to do a couple of pieces of content on it. I have a great demo video that walks through showing some of the new features, like long processing times it can handle, concurrency, traffic splitting, using a number of different functions, and even some integration with BigQuery. 

I got the chance to work on this with Anthony Bushong, who's another host of this podcast. So I'll include the link to that in the description. But we're going to hear more from Sara and Jaisen about all the ins and outs of second gen here. But before we go into that, why don't we go ahead and talk about some of the cool things of the week? 

[MUSIC PLAYING] 

BRIAN: Excellent. I'm excited about cool things of the week. I have a whole bunch of them. First thing I wanted to highlight is you can now stream data directly from a Pub/Sub subscription into BigQuery, which I think is great. I love seeing the different parts and services of Google Cloud get closer integration. 

People used to use a data flow connection in between a lot of times. And so if you've got a scenario where you're going straight from Pub/Sub into BigQuery, you can just go directly now. I did a whole blog post about that, which I think is super cool. 

STEPHANIE: And that is fascinating. I just mentioned that I did a video showing Cloud Function second gen integration with BigQuery. So it's almost like all signs are pointing to BigQuery with more and more integration, which is amazing because BigQuery is-- it's one of our most-used products. And it's great to see the integration, as you mentioned. 

BRIAN: Absolutely. And I like to think of data having gravity because it's got mass to it, right? So everything comes to the data. 

STEPHANIE: Yeah. 

BRIAN: So more and more connections to BigQuery. The other thing I wanted to highlight is a fundamentals article from Priyanka, and it's all about Google Cloud IAM, and basically, doing authorization with IAM and service accounts. And I love these kind of fundamentals topics because they matter to basically everyone. 

And there's a good place to get an overview in one place. So it makes an excellent introduction, or if you already kind of know this, there's a bunch of links to more details, or if you want to refer it to one of your colleagues or friends, and you're like, hey, start here, it's a really good link for that. So if any of those scenarios are true, please check out that link. And in usual Priyanka style, there's a drawing and details to go along with it. 

STEPHANIE: Yeah, nice. I agree. IAM is the fundamental building block of any cloud provider. And I was just talking to our colleague about how to describe GCP versus, like, Azure or AWS. And I told the person that the first thing you want to start with is understanding organization hierarchy or resource hierarchy. And IAM is such an important part of that. So, yeah, check out that article. It's a great place to start. 

BRIAN: Absolutely critical. And then, as I was looking through and trying to look at cool things for the week, I noticed something from you around the diversity annual report. What was that? 

STEPHANIE: Yeah, I know. I would have almost forgot that I actually put this out just now. So thanks so much for bringing it up. But, yes, the diversity annual report is now a BigQuery public data set. 

So this is exciting because it's part of our public data sets program, which Adler, our colleague, leads up. And we're putting more and more public data sets for you to leverage in BigQuery directly. So the whole idea is that there's a big challenge that most companies are dealing with. They publish diversity data now every year, but it's usually difficult to analyze because it uses a lot of visualizations. 

But getting access to the raw data isn't something that's been historically made traditional, in a sense, or made standardized. So researchers are finding it difficult to be able to find value out of it to do different joins like trying to find out hiring trends for tech versus nontech roles, representation of, let's say, Asian women in leadership, and more. 

So the diversity annual report provides you access to our report in BigQuery, along with other data that you can help contextualize your findings, so comparing it to other companies in the same industry or grad or hiring talent pools. So this is a really big step forward for the diversity stewardship world. So go ahead and check that out and play around with it. 

BRIAN: Awesome. That is valuable, both in the specifics and in the general pattern of making data available for people to manipulate. And this is really critical data. Right on. 

STEPHANIE: Yeah. Thank you. Yeah, there's also a free tier with BigQuery. So there's a lot you can do with that without having to pay anything-- so really no reason not to go ahead and check that out along with other data sets. We have political ad spending and other cool things you can play around with. 

But, yeah, that's more to do with BigQuery as all signs continue to point to BigQuery. But we are here to talk about Google Cloud Functions second gen here with Sara and Jaisen. So let's go ahead and dive into that conversation. 

[MUSIC PLAYING] 

All right. Sara and Jaisen, thanks so much for joining us today. I know we've had Sara on before on the podcast. But it'd be great to get another intro from you, and then Jaisen as well. What do you do here at Google? 

SARA: Hey, Stephanie. I'm Sara, and I'm a cloud developer advocate. I focus on Cloud Functions. And I've spent most of my career in developer tools, but I really, really like serverless because I get to focus on my code without having to get ramped up on infrastructure or how to manage my own server. 

JAISEN: Hello, I'm Jaisen. I'm a product manager for Cloud Functions here at Google. I've been at Google for about six years. And prior to joining Google, I was both a developer and a product manager. 

So I started using serverless functions in particular before I joined Google. And so I have firsthand experience and can witness the ways that Cloud Functions can add value. And so I'm excited to talk about that with you folks and talk about how it can help and where it makes sense to use. 

BRIAN: Awesome-- Cloud Functions. And the topic of the day is Cloud Functions second generation. And with Cloud Functions having been around for a long time, it gets a lot of usage. 

Why are we doing a second generation? What problems does that solve? What's good and new and cool about second gen? 

JAISEN: That's a great question, Brian. Before I jump into that, I think it's great to maybe get a little bit of context for folks that may not be as familiar with Cloud Functions as a product. So, as you mentioned, Google released Cloud Functions back in 2017. And the goal was to let users, let customers deploy discrete pieces of code without having to worry about DevOps or server management. 

And so, with Cloud Functions, you can use any of the seven popular languages that are supported and literally write a function, deploy that to the cloud, and then Google handles the rest, everything from provisioning and scaling of servers from zero up to whatever your particular application demands. And so we do have a very successful Cloud Functions product that's in the market today. 

And what we did was we talked to customers and identified areas where they wanted to maybe use Cloud Functions in more workloads or scenarios that the current product wasn't quite meeting. And so we call it second gen, but it's really the same product. It's an evolution of the current first-generation Cloud Functions product with new features specifically to meet the needs that we have heard from customers. 

Some of those features, I think, we'll get into in more detail. But I think the important thing is it's not a net new product. It's an evolution of our current product, built more to meet some of the more demanding use cases that customers have evolved their usages to. 

SARA: And I can talk about how it works currently from the dev's perspective, talking about how we're evolving the current product. So you'll still manage your second gen functions the same way as you manage your first gen functions. In fact, if you've created a cloud function in the past several months, you have seen the option to select first-gen versus second-gen. So you still will interact, create cloud functions as you did before, either using the Cloud Console or using G Cloud. 

STEPHANIE: Yeah, so for first-gen users, is there any change that they'll need to make? Will they still be supported? 

JAISEN: Absolutely. If you are using our first-gen product or you have existing functions that were deployed as first-gen, those will continue to be supported. If you want to take advantage of some of the second-gen capabilities, then you'll have that option both through the API, through the Cloud Console, through G Cloud. You'll be able to easily make that choice. 

If you are going to be using our second-gen functions, there's a couple differences that will be important for you to be aware of. And we have documented those as part of our documentation. But the products are largely similar. And so the same code that worked in first-gen should work in second-gen. And these caveats are maybe more edge cases or opportunities to take advantage of some of the new capabilities that we have. 

SARA: And just from that perspective, for example, if you wanted to take a first-gen "Hello, World!" and move it to a second-gen "Hello, World!" scenario, in second-gen, you're going to see a little bit more code in the "Hello, World!" scenario. There's a slight change with the signature, and you're going to see the Functions Framework now is more explicitly required-- as a requirement, like-- this is in Python, a requirement file, or in Node, it would be like a package. 

But, yeah, you're going to see that the framework now is there in the code. And so you have to make just a small tweak to just a couple of character changes to the function signature. But for a "Hello, World!" to move over, that's the change that is made. 

And then, if you're using Eventarc, yeah, the payload is going to be slightly different. But you can go and look at the Getting Started quick starts for some of the minor differences. 

JAISEN: Yeah, and if you have first-gen functions, there's no need to rush to move those unless there's a need to access some of the new capabilities. We do have plans to make that transition easier for users so that first-gen functions can benefit from some of the second-gen capabilities. So we plan to have tools to make that migration easier for users. But, to your point, Stephanie, we plan on continuing to support first-gen functions. 

BRIAN: So let's get into it. What are the reasons you might want to use second-gen? What are the new features and things it'll give you and help you out? 

JAISEN: Yeah, when we looked at evolving our functions product by talking with customers, we found that the requests that they had fell into three buckets. And those were performance, cost, and control. And so many of the features that you'll see in the second-generation product are related to those three buckets. And I'll cover those buckets as well here. 

So cost is an important one. Customers can use second-gen functions with very similar costs to what they were experiencing with first-generation. But we've added the ability to specify instance concurrency, which is the number of requests that a single instance-- compute instance-- can handle. And that can actually reduce cost for customers with workloads that have high concurrent behavior. 

And as far as performance goes, performance enables new workloads to come on to Cloud Functions. And so we have larger instances, including 16 and 32-gig instances-- 32-gig is currently in preview-- longer processing times for HTTP functions. It used to be around 10 minutes. It's now 60 minutes. So if you have workloads that require processing that needs to take longer than 10 minutes, you can do that now with second-gen. 

And, like I mentioned, concurrency-- in addition to cost, there's some significant performance benefits that you can get by setting concurrency. You can actually reduce cold start latencies because if there's an instance that's already warm, even if it's handling a request, it can handle another one without incurring that latency. 

And there's control as well. So we have the ability with second-gen to roll back much faster. If you have a bad deployment, you can roll back to your previous deployments. And you can also do traffic splitting, which enables you to do things like A/B testing. 

You also have the ability, with our integration with Eventarc, to have a much larger number of event sources so that you can trigger your function executions based off of over 90 event sources that are now available through Eventarc. And some of these features in second-gen, you'll be able to access through Cloud Run, which is another serverless product. And we do provide links to make that easier to find those settings. 

But we are also working to add them directly into the Cloud Functions UI to make it even easier. 

SARA: Yeah, and I can walk through a concrete example of how you would use concurrency. So in first-gen, there's a one-to-one request per instance. So one instance gets one op per request. That's how it works today. 

Now, with concurrency, you can set how many of those requests can go to the same instance. So let's say you have something that's network-intensive, so something like I/O bound, that the CPU is just going to be sitting there, idle, waiting for the data to come in or the network connection to be made. So it's just sitting there. 

So this is a thing where you can go to, as Jaisen said-- so you're in a second-gen cloud function, and then you'll see a link to the underlying Cloud Run service. You go to the Cloud Run service, and then you can see-- in the revisions, you can see where you can specify having a concurrency. Let's say it's set to 10, for example. So then, when you deploy that new revision, now you can have 10 requests going to that instance. So you're now getting to maximize or utilize that CPU idle time, whereas, before, it was just sitting there idle. 

And then the other thing that I want to also call out from the developer perspective that is new is the traffic splitting. Let's say you have a cloud function, and something goes wrong with the deployment. And we've all been in software for a very long time. You can come up with any scenario that you need. 

And you're like, oh, I need to get back to right where I was before. I just need a quick, like, five-second time machine to go back. And what's new with second-gen-- you can go to the Cloud Run service, again, use the link in the Cloud Functions UI, and then specify-- or G Cloud, if you know that you have the command ready to go, and you can specify traffic splitting. 

So you can say, hey, that last revision, 0%, and the one before, serve 100%, or however you want to divvy it up. And that allows you for, like in this example, rollbacks. But you can also imagine scenarios where you can do blue/green deployments or however you want to specify your traffic as you want to roll it out. 

STEPHANIE: Yeah, that's awesome. Thank you for those concrete examples. I think it helps a lot to understand the value of some of these features. It's clear that second-gen considerably improves the developer experience when compared to its preceding version with almost doubling the instance sizes, the declarative traffic splitting, the greater compute power concurrency, more native event integrations as well. 

SARA: And don't forget the longer HTTP processing time. 

STEPHANIE: Oh, yes. That one, I heard, is actually one of the highest requested features that was added on. So that's also very exciting. I think that makes a lot of sense for folks who maybe were already using first-gen. But how would a developer know when to even use Cloud Functions at all, in this case? 

JAISEN: We get that question quite a bit. GCP doesn't have any shortage of compute options. And so the way that I think about it, and what I would recommend as a sort of a framework to decide if Cloud Functions is the right choice, is to start by evaluating your existing solution. If you have an existing solution that's already built, then you would want to map the requirements from that solution to the right products. 

So, for example, if your existing solution is using Kubernetes, or it has a customized container that isn't compatible with Cloud Functions, then GCP offers other products that might be a good fit. If it's a new solution, or it's just a script with a little bit of more discrete code, starting with Cloud Functions is a great starting point because it's the simplest product that we offer. And it has the least amount of responsibility that, as a customer, you are taking responsibility for. 

The language that you want to use for your solution is supported by Cloud Functions. We support seven popular languages, including Node, Python Java, .NET, and more. If the operating system packages-- if you don't need any unique operating system packages that are not provided by the Cloud Functions runtime, if you're able to fit your solution into that framework, then Cloud Functions is a great place to start. 

Now, if you do find that you do need something more than that-- some operating system library or some customized web server or container-- then that's where Cloud Functions wouldn't be the right tool for that particular solution. But I always recommend that folks start with Cloud Functions. And if they feel like Cloud Functions doesn't meet the requirements, then it's a great idea to look at Cloud Run, for example. 

BRIAN: Awesome. That helps a lot. I love these kind of frameworks for thinking about how to decide on problems, right? Another one that I've heard-- tell me if you think this makes sense-- if the scope of your code, if you're thinking about a function, and its inputs and what it returns and side effects, a function or method, this is kind of where you want to be. Is that a fair-- another model to use? 

JAISEN: I think so. And I think it also lends to sort of the developer experience and the skills of the developers as well. If you're thinking about your solution as, hey, I'm going to take some input in, I'm going to do some work on it, and I'm going to return an output, or I'm going to do some work, I think Functions is a great product. It really fits that type of problem. It's a great solution for that. 

And if you're a developer, and that's your skill set, the great thing about Functions is you don't have to know about all the other stuff like deploying servers, managing servers, or scaling the infrastructure. You just need to be able to determine what goes inside of that function and deploy it. 

SARA: And I just wanted to add to that. Brian, when you were saying, is this a good function, the method, way of thinking about it, it's kind of like-- I was thinking lowercase f or capital F when you were first mentioning that because that's kind of how I approach it. Do I need kind of like a capital F function because I want to write a function in the Cloud? No pun intended with the name, but the name was chosen for a reason. 

And is it just like, I need to handle input/output just like a lowercase function? Or do I see this going into something much bigger, larger, and needing multiple endpoints, or wherever this is? But if you're talking about, like, I need a function not to run local, it needs to run somewhere else, that's kind of what I thought you were going, Brian, with, is this a functional method way of framing it? 

JAISEN: Another way to know whether a function is the right tool is if you're thinking about responding to something that's happening in GCP, some event-- so it might be a file gets added to a Cloud Storage bucket, or a new row is added to a Firestore database, and you want to do some work based off of that-- a lot of times, people will take data that comes into GCP, throw it into BigQuery-- functions is the easiest way to do that. 

So if that's the type of problem that you're trying to solve, then Functions is a recommended product that we, as GCP, would recommend that you start with. 

SARA: And, for completeness, it doesn't have to be just within GCP. It could be an event that you're responding to that happens outside of GCP, like you're responding to a GitHub webhook or an event on GitHub, and you want to trigger a function as well. And you can also, of course, ping an external resource or whatever, or make an HTTP request from Cloud Functions to something on the outside world. So it doesn't have to just be within or self-contained within GCP. 

JAISEN: That's a great point, Sara. And just to add to that a little bit more is Eventarc is expanding the capabilities that they have and supporting additional events. So one of the great things is, in addition to something like GitHub, as Eventarc expands the types of sources and events that it supports, the capabilities of Functions increases along with that. 

STEPHANIE: Great. I think it's important to note that because, with the second generation, with its connection to Cloud Run and Eventarc, it really is expanding the capabilities and what you can do with it-- so great to mention that. Now, I kind of want to go into the developer experience a bit more with Cloud Functions second gen. 

So how do you start developing Cloud Functions? What is the dev experience like? For example, local development is a nice feature. Has anything been developed on that front? 

SARA: So I can talk to this. So I'm going to just explain how I learned, how I ramped up on Cloud Functions. So, usually, you have a quick start. And the quick start, you might want to explore through the Cloud Console at the beginning. And so you create a function, and then you deploy it. 

But what you don't see behind the scenes is that there is an open-source project called the Functions Framework that is actually being used behind the scenes on your behalf. So let's say, like, OK, you get your quick start. You have your first function. You got your "Hello, World!" What comes after "Hello, World!"? 

And in my world-- no pun intended, but in my world, it is I want to get started developing locally. And so the next step that we recommend is that you get the Functions Framework for your particular runtime, like I've been trying to level up my JavaScript Node.js skills. 

And so I will go and get the Functions Framework for Node.js. I'll have that running locally. And that way, I can start up the Functions Framework. It will use local hosts that I can just send curl commands to directly. 

And so, yeah, it's a great way to do quick iterations of your code. Yeah, our goal is we want to be able to test everything locally so you can develop your functions as quickly as possible-- for example, configuring the payload. Yeah, talking about payload because this is one of the things especially-- level up, up level, whichever one it is, whichever level it is, as long as it's going up, right? 

Is it a single quote? Is it a double quote? Is the quote going from the side, back quote, whatever it is? 

Yeah, when you're trying to do it with a payload, it can take a while to get it right. And one of the cool things that's happening in Cloud Functions now is-- that you can check out right now-- is in the Testing tab for Cloud Functions, if you go to the Testing tab you'll see that we now have a shell command that you could use-- or Cloud Shell will show you the curl command that you could run either within Cloud Shell or copy and paste it locally if you have the Functions Framework set up. 

And then it will show you what the curl command is for whatever the payload is if you're testing HTTP, if you're testing Pub/Sub, and you need to know, OK, is it which way, which quote, which direction is it? So now it's much, much faster and easier. And I'm excited to see more capabilities come down the road for those of you like me who are using functions almost every day. 

JAISEN: I think that one of the things for Cloud Functions that I really appreciate is that it is very approachable. And Sara mentioned the easiest way to start would probably be through the Cloud Console, through the browser, where you can just click and write a little bit of code and hit deploy. 

You don't have to set up your local environment. And so I think that approachability is really a big important factor of this because we want Cloud Functions to be able to be something that you can use. If you just know some Python, you should be able to use Cloud Functions. You don't need to know anything else. And so I think that is one of the aspects of Cloud Functions that is appealing for many people. 

STEPHANIE: Yeah. Even to set things like concurrency or do traffic splitting, it takes a simple G Cloud command for that configuration. So I agree that it is a really simple experience. 

And just a quick plug that-- you mentioned Functions Framework. We actually did have an episode talking about it, I think, last year on "Full Stack Dart." That's the name of the episode. 

But we had Grant on, who worked on the Functions Framework. And he got a chance to explain his experience building that as well. So check out that episode. We'll include it in the show notes. 

BRIAN: Fantastic. I love hearing about open-source ways to run code and the like. And we've been talking about how awesome functions are, and new-gen and things like that. But I feel like, in software engineering, there's always tradeoffs, right? You're always kind of trying to evaluate pros and cons of different technologies. Could you talk a bit about what workloads are not the best fit for Cloud Functions? 

SARA: So I asked the same question when I first joined the serverless team. And the way that it was explained to me is, think about your traffic. Go back and look at what your shopping looks like. 

Are you using your servers 24/7 in a predictable manner, like you're doing like some sort of rendering or ETL? Whatever it is, if you look at your traffic graph, are you using your servers, like, 90% to 95% capacity? Is it predictable? 

But let's say you don't know what your traffic looks like. Let's say you spin up a website, and you don't know how many visitors you're going to get, or you're looking at the historical graphs, and it tends to be more of a wave, like, during normal business hours, you get a lot of traffic, and then you have the lows during the off-hours? 

But, at the same time, you don't want to just like, OK, I'm going to try to provision for the most I've ever had plus 10%, because, well, one, you're paying for the time that is not being utilized, kind of going back to the CPU idle time. So you're paying for that in a traditional server sense. 

And then, also, let's say you get the-- do they still call it the Oprah effect these days? But let's say someone mentions your company, and next thing you know, everyone swarms. Or, I don't know, you're doing something with analytics for, like, the World Cup or whatever, and something happens, and the next thing you know, everyone goes to the site. 

I think, if I can use an American Football reference, there's a lot of rules about sports that are very eclectic and rarely happen. And there is a way to get a 1-point safety-- because, normally, a safety is 2 points in the NFL. But there's a way to get 1 point. 

And there is a website-- case in point-- there is a website that's dedicated to the 1-point safety. And every time it happens, it gets a ton of traffic because even the sports announcers are like, I don't know what this is. And they carry the rules with them after the second time it ever happened. But, anyways, it hasn't happened yet in the NFL, and it could potentially one day happen. 

All right, long about way to say, yeah, you might have an unpredictable burst of traffic. So this is where serverless really comes into play because it's like you pay for what you use. But another way to think about it is think about going back to calculus. You pay for the area under the curve. 

And so, again, it goes back to predictability, traffic management. How are you using your servers? If you can predict your traffic, you know exactly what the utilization is, then stick to that. But if you don't know, and you want someone else to handle spinning up, spinning down, scaling to zero, you want someone like us-- at the beginning, I want to focus on writing code and the user experience, let someone else handle the infrastructure and the server management, then serverless would be a good fit. 

JAISEN: And the worst possible time for your application or your site to go down is when Oprah mentions it. And so the added benefit is when Oprah plugs your product, when millions of people go, Cloud Functions and other serverless products will scale up to meet that without you having to do anything. So all those orders will still come through. 

SARA: Also, let's say you can predict it. I don't know if you can predict a 1-point safety. But let's say you could predict, like, OK, a game is starting or whatever, so there's going to be more traffic than not. So you can have minimum instances in serverless. 

So you can say, hey-- Black Friday, Cyber Monday being the canonical example of this-- you can set up many instances to be ready always serving traffic. You'll still get the spin up, spin down, but you will always have those instances warm-- ready to go. 

STEPHANIE: Excellent. I'm going to be using that from now on-- the Oprah effect. And now I learned something about NFL, which is saying a lot because I don't know anything about it. But-- 

BRIAN: I didn't know that it was called the Oprah effect. I'm going to date myself. 

STEPHANIE: I thought that was, like, from 10, 15 years ago. 

BRIAN: I'm going to date myself. It was the slashdot effect for me. That was-- 

STEPHANIE: Yeah, slashdot. 

BRIAN: --what, like, 20 or 30 years ago. Who knows? 

JAISEN: Yeah. That's what I thought about. 

STEPHANIE: I wonder what the new one is-- something about TikTok, maybe. 

SARA: Yeah, that was where I was thinking, too. What are they calling it on TikTok these days? 

STEPHANIE: Yeah, whoever is the influencers these days. 

SARA: Yeah, the influencer. 

STEPHANIE: Well, OK. So this has been awesome to dive into some of these workload types and what would be a great fit. But I know another great way of showcasing the possibilities is talking about customer use cases. Can you tell us how some of the customers that you've worked with have been able to utilize second gen so far? 

JAISEN: One of the ways-- and I mentioned this a little bit earlier is the approachability of functions. And so one way customers have used it is for data scientists that want to perform some sort of modeling for data that they have. 

The great thing about Cloud Functions is that it uses languages that are very popular. So data scientists tend to know Python, and so they can write Python scripts till the cows come home. And so what Cloud Functions provides for those users is the ability to just write their data models in a function and then deploy them. And then they can use that with BigQuery to do processing on data that's there in BigQuery. 

So we have a feature that is in preview right now with BigQuery where you can write remote functions that use a Cloud Function that takes data as part of a query. So you can think about-- select some function when the column that you're wanting to pass into that function from a table. And, within that function, you can do more advanced computation that's then returned back as part of BigQuery results set. 

Other use cases for second-gen Functions-- as you mentioned, Stephanie, the longer processing times is a really welcomed feature from users, where they have some models or ML work that might take longer than, say, 10 minutes. And second-gen Functions enables them to do that. Especially paired with the larger instance sizes, those are some of the new workloads that customers are able to utilize Cloud Functions for now with second-gen that they were not able to do before. 

And some of the other benefits that customers get with Functions is the one thing that's important to remember is the less that the customer is responsible for, not only is it that they can get to market faster. But if you're in a regulated industry and you have compliance requirements, the less that you need to show and convince the auditors of being within compliance to whatever compliance you're bound to, the less that you have to show, the less work that you need, and the less liability that you have. 

And so the more that Google can be responsible for that enables customers to take workloads to Cloud Functions. 

BRIAN: Excellent. Those are some powerful examples of the overall trends and patterns. I wonder, can we poke a little bit and maybe get a few specific examples? 

Does Google use this? Are there specific customer scenarios you could describe and how they worked or didn't, that sort of thing? 

JAISEN: Yeah, definitely. One way that Google uses it is that it helps to expand capabilities in other GCP products. I mentioned BigQuery remote functions as an example. Customers will store data in BigQuery, and that data might be tokenized at rest. 

And so what they will want to do is they'll want to make it easy for BigQuery analysts to query that data but get that information out in a way that's maybe more useful. And so we have customers that are using our BigQuery remote function capability, where they write the cloud function that will take that tokenized data and make it into something that is more usable by the BigQuery analysts that may need to query that information and get it out and do something with it. 

So that's one example of how we're using it at Google to extend the capabilities of other GCP products. And we plan to do that with other products in the future because it's really important for customers to be able to not rely on Google implementing every single feature that they need. And so we're looking at ways where we can put that power in their hands, and they can provide the capability and the logic via a cloud function to extend the capabilities of GCP products. 

Another use case that we have documented on our site-- and maybe add the link in the podcast notes-- is Lucille Games. And they use Cloud Functions to automate their infrastructure management, and this includes everything from web services to database interactions, like I mentioned, around responding to events in databases. And that's one of the very common use cases for Functions. 

But the convenience of just having to write code and push it, it means that it speeds their time to market because it simplifies it. And the quote that I really like from their CTO was that "I've never seen anything like it." 

And if you've been sort of software for a long time, even if you've been in Cloud for a long time, it started off with getting your bare metal machines converted to VMs and then figuring out how to set up high availability and scalability and making sure that all scales. And it's evolved over time. But I think that Cloud Functions right now is the far end of the spectrum where the Cloud does so much of the work for you. 

And that was my initial reaction to the first time I used Functions was, wow, I have never seen anything like it. It really is just as simple as taking the code that I want and publishing it. And so I think that's another use case of customers actually using this and benefiting from it. 

STEPHANIE: Yeah, I think the CTO from Lucille sums it up pretty well. I found the quote. He says, "With Google Cloud Functions, almost everything becomes code. Whether it's the web services or the database interactions or something else, we write the code, we push it, and the platform takes care of the rest. It's super fast, and it's super easy." 

So I think that's a great way to wrap it all up and good quote to end on here. But this has been awesome. Of course, thank you for going through Cloud Functions second gen and how powerful it is. Where can people get started, and is there anything that you want to add before we wrap up here? 

JAISEN: Thanks, Stephanie. Yeah, so getting started with Cloud Functions is super easy, and I think just reiterating that the point is that it can help you bring your solutions to market faster. And it helps your teams to be productive using their existing skill sets. And so it's a really appealing product for those reasons. 

The easiest way to get started-- we can include a link to the product page in the podcast notes. You can head over to the Cloud Console at console.cloud.google.com. You can select Cloud Functions from the product, and you hit Create New, and it'll take you right into getting started. 

And, as Sara mentioned, you can select Second Gen from the dropdown to get access to some of the second-gen capabilities and features. You can also use our G Cloud command line tools. If you're already using first-gen functions, it's really no different. You'll just add an additional flag to your deployment or select it from the dropdown, and you should be good to go. 

Ideally, you should be able to have your first function-- if you've never deployed a function, you should be able to have your first function deployed in a minute or two. 

BRIAN: Awesome. Everybody, please go give that a try if you haven't already. Extend all the things. Glue them together. Make your APIs. Give it a try. 

STEPHANIE: Thanks so much, Sara and Jaisen. 

JAISEN: Thank you. 

SARA: Thanks, you all. 

STEPHANIE: Yeah, so that was a really great overview of second-gen differences because it really does highlight some of these beautiful features like concurrency and traffic splitting. And I really enjoyed how they enumerated when to use Cloud Functions versus other compute products or serverless products like Cloud Run. It really does boil down to, can your code be discrete and act as a function? And it's a great way to just start there, kind of like the "Start Here" sign on a game board, and then see what happens next. 

BRIAN: Absolutely. And so much of programming and building systems in Cloud these days is about connecting lots of things together, maybe modifying things on their way through, this kind of gluing all of the pieces together. And Functions just hits a sweet spot for that every time. So I'm glad to see it continuing to advance. Everybody, please, check it out. See how you can put it to use. 

STEPHANIE: Yeah, I like how they described it as our simplest product, in a sense. So it really helps frame it, in my mind, to make it a little bit less of a barrier to entry and realize that it has a lot of value it provides in connecting the dots between our services and outside of Google Cloud as well. 

BRIAN: Absolutely. And, actually, I apologize. I meant to make a plug for one of my old talks on where should I run my stuff. And I think Functions is really where you want to start with new greenfield topics. And then, if you're thinking about these different abstraction layers, maybe you could poke at that for where the tradeoffs are, where you might make different decisions. 

STEPHANIE: Yeah. 

BRIAN: But definitely start with Functions as you're looking at things. 

STEPHANIE: Yeah, I know. We've actually done some other stuff with your talk on a couple of our other series. And that's just such a good piece of content for people to understand where to run your stuff on compute. So we'll include a link to your talk, actually, in the show notes here. 

BRIAN: Awesome. Sorry for sneaking that in. But I wanted to see, did you have any recent projects that you've been working on you wanted to highlight? 

STEPHANIE: Yeah, so I just found out that we have a series on our YouTube channel called the Google Cloud Support Shorts, which I love the name of because they are literally support short videos that our support engineers have come out with to help you almost self-service, discover, and be able to troubleshoot your issues on Google Cloud for a lot of the frequent tickets that they get in the system-- so things like how to perform rolling updates to manage instance groups, how to configure a Node pull auto-upgrades in TKE. 

So I am working on their second season and third season of those videos, and they are all bite-sized things that will really help lower the time that you'll need to resolve some of these things on your own. And, of course, you have access to support in a lot of ways, too. But this will be great for you to self-service. 

BRIAN: That is fantastic. The support folks see where things get hard, where things get complicated, and know the path to making stuff work. So that's fantastic that we're getting some of that expertise out into some of the videos. 

STEPHANIE: Yeah. 

BRIAN: I will check that out. I did not know that that existed. 

STEPHANIE: Exactly. Yeah. They're at the front lines, and they see it all. So definitely check that out. 

For everyone else, thank you so much for listening and learning about Cloud Functions second gen. And we'll see you all next week. 

[MUSIC PLAYING]