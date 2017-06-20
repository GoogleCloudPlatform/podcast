+++
audioDuration = "00:31:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.78.mp3"
audioSize = 45757121
categories = ["Firebase"]
date = "2017-05-24T01:07:49Z"
description = "Fresh from Google I/O, Mark and Francesc are joined by the co-founders of Firebase, James Tamplin and Andrew Lee to let us in on all the new and awesome things that were announced!"
draft = false
episodeNumber = 78
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Firebase at I/O 2017 with James Tamplin and Andrew Lee"
image="/images/icons/firebase.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/7QRJKxx8PUD"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6d3ypw/episode_78_firebase_at_io_2017_with_james_tamplin/"
+++

Fresh from [Google I/O](https://events.google.com/io/), [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc)
are joined by the co-founders of [Firebase](https://firebase.google.com/), [James Tamplin](https://twitter.com/JamesTamplin) and
[Andrew Lee](https://twitter.com/startupandrew) to let us in on all the new and awesome things that were announced!

<!--more-->

##### About James Tamplin
[James Tamplin](https://twitter.com/JamesTamplin) is a co-founder of Firebase, and served as CEO until joining Google. He is now a Group Product Manager 
working on Firebase. James has a bachelor’s and a master’s degree in Industrial and Systems Engineering from 
the University of Wisconsin. He has been a stage actor in New York, an improv comic, and has worked on two previous startups.

##### About Andrew Lee
[Andrew](https://twitter.com/startupandrew) co-founded Firebase in 2011 and served as CTO until Firebase joined Google. He is now an engineering lead for 
Firebase, focusing on infrastructure products including the Realtime Database, 
Hosting, Cloud Functions, and Cloud Storage. Andrew lives and works in San Francisco.

##### Cool things of the week

- Build and train machine learning models on our new Google Cloud TPUs [announcement](https://blog.google/topics/google-cloud/google-cloud-offer-tpus-machine-learning/) [product](https://cloud.google.com/tpu/) [research](https://arxiv.org/abs/1704.04760)
- Introducing Google Cloud IoT Core: for securely connecting and managing IoT devices at scale [announcement](https://cloudplatform.googleblog.com/2017/05/introducing-Google-Cloud-IoT-Core-for-securely-connecting-and-managing-IoT-devices-at-scale.html) [product](https://cloud.google.com/iot-core/)

##### Interview

- [Firebase](https://firebase.google.com/)
- What’s new from Firebase at Google I/O 2017 [blog](https://firebase.googleblog.com/2017/05/whats-new-from-firebase-at-google-io.html)
- Previous episodes on Firebase
 - [Episode #29](https://www.gcppodcast.com/post/episode-29-the-new-firebase-with-abe-haskins-and-doug-stevenson/)
 - [Episode #13](https://www.gcppodcast.com/post/episode-13-firebase-with-sara-and-vikrum/)
- Firebase Phone Authentication [web](https://firebase.google.com/docs/auth/web/phone-auth) [android](https://firebase.google.com/docs/auth/android/phone-auth) [ios](https://firebase.google.com/docs/auth/ios/phone-auth)
- Firebase Hosting and Cloud Functions [docs](https://firebase.google.com/docs/hosting/functions)
- Build Modern Apps with Firebase and Google Cloud Platform (Google I/O '17) [youtube](https://www.youtube.com/watch?v=ZIe0Fn9OtnY)
- Open sourcing the Firebase SDKs [announcement](https://opensource.googleblog.com/2017/05/open-sourcing-firebase-sdks.html) [github](https://github.com/firebase/)
- Firebase performance monitoring [site](https://firebase.google.com/products/performance/) [docs](https://firebase.google.com/docs/perf-mon/)
- Firebase SDKs for [Unity](https://firebase.google.com/docs/unity/setup) and [C++](https://firebase.google.com/docs/cpp/setup)
- Firebase Test Lab for Games [docs](https://firebase.google.com/docs/test-lab/game-loop)
- Google Analytics for Firebase [docs](https://firebase.google.com/docs/analytics/)
- Android Instance Apps [site](https://developer.android.com/topic/instant-apps/index.html)
- Try Google BigQuery today: Now with 10GB of free storage [announcement](https://cloud.google.com/blog/big-data/2017/05/try-google-bigquery-today-now-with-10gb-of-free-storage)
- Firebase Analytics Stream and Debug View [announcement](https://firebase.googleblog.com/2017/03/realtime-analytics-for-everyone.html) [stream](https://support.google.com/firebase/answer/7229836?hl=en) [debug](https://firebase.google.com/docs/analytics/debugview)
- Firebase at Google I/O 2017 [presentations](https://www.youtube.com/playlist?list=PLl-K7zZEsYLma7gxYxtEwO1rsAPn7wkV_)

<div style="text-align: center">
  <a href="https://firebase.google.com/"><img src="/images/icons/firebase.png" style="margin: auto;"></a>
</div>

##### Question of the week

How do I give one of my Google Cloud Platform Project's to another person?

- Understanding Roles in IAM [docs](https://cloud.google.com/iam/docs/understanding-roles)
- Create, modify, or close your billing account [help](https://support.google.com/cloud/answer/6288653?hl=en)

##### Where can you find us next?

Francesc will be teaching at [Onboard Buenos Aires](https://cloudplatformonline.com/2017-OnBoard-BuenosAires.html) and running a 
workshop at [QCon New York](https://qconnewyork.com/)
  
Mark is going on vacation for a few weeks - but don't worry, he'll still be on the podcast!

{{< transcript "FRANCESC: Hi, and welcome to episode number 78 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I am resplendent today. 

FRANCESC: You're resplendent? 

MARK: Yes. 

FRANCESC: Very good. I'm OK. 

MARK: You're OK? You're just fine. 

FRANCESC: I'm just OK. I'm just fine. 

MARK: Just fine, OK. 

FRANCESC: No, I'm actually very happy because we have finally the two co-founders of Firebase, James Tamplin and Andrew Lee are visiting us to tell us everything about Firebase and, specifically, everything that was announced during Google I/O, that small conference that took place last week. 

MARK: So actually I think they're going to tell us everything just because there was so much. 

FRANCESC: I know. 

MARK: I don't we could fit it in the time that we have. 

FRANCESC: Actually there was a lot of things going on. So yeah, they're going to tell us their favorite things. So yeah, it's very interesting interview. And then at the end of the episode, we have a question of the week about how to give someone a Google Cloud Platform project. 

If I have one and I want-- ever had a project, and I wanted to give it to you, how does that even work? But before that, we're going to have cool things of the week. If you want cool things of the week, I'd say go check Google I/O's keynotes because there was a lot of content in there. 

So yeah, one of the things that I think we should highlight is the Google Cloud TPUs. So a TPU is like a CPU or a GPU, but if CPUs is for computing and G is for graphics, T is for TensorFlow. 

And they were designed long time ago actually, but we finally have them available on Google Cloud. And they're pretty amazing because they're able to provide 180 terabytes-- not terabytes sorry, teraflops. 

MARK: That's more. 

FRANCESC: That is a lot. 

MARK: And also a different number. 

FRANCESC: Right, that's a completely different thing. But in a FLOP, it is not something that fails, it is a floating operation. So FLOPs is floating operations per second. And 180 terabytes is a lot of them. 

And on top of that, they're connected to memory that is accessible through a very, very large bandwidth. You can communicate with the memory at 12.5 gigabytes per second, which is crazy. So yeah, you're going to be able to do some really cool processing. 

I think that for machine learning, this is going to be huge. If you're running any TensorFlow or probably any other processing that makes sense to run as TensorFlow-- machine learning, image processing-- probably also helps. I don't know. 

MARK: Yeah, it's pretty-- 

FRANCESC: It's kind of amazing. 

MARK: I mean just reading the blog post here. And they're talking about how what used to take a full day to train on 32 of the best commercially available GPUs would take a full data process in data. Now it trains the same accuracy in an afternoon just using one eighth of a TPU pod. 

FRANCESC: That is crazy. Yeah, it is kind of an amazing thing. So we'll have a link to the announcement on the show notes. There is also a research paper that was published. And also, there's pictures of them, and they're beautiful. 

They're actually look like actual cities with buildings. It's pretty cool. I really like them. And I have not had the chance to play with them yet, but I'm actually learning TensorFlow now. So hopefully I will be able to compare how much faster they are compared to my Mac. 

MARK: Probably a lot faster. 

FRANCESC: Probably a lot, yes, hopefully. 

MARK: Cool. And so for a second cool thing of the week, if you listened into any of the stuff at I/O and you're into the internet of things, there is now a whole new product, the Google Cloud IoT Core, for managing and securely connecting to internet of thing devices at scale. 

What this means is, is it's quite nice is that there's really nice, fast setup and management for when you want to be sending data from your IoT devices back to, say, analytics platforms or processing platforms, specifically even things like Dataflow or Pub/Sub or even Cloud Functions. We have this product now out of the box is able to do that. 

What's super cool about it, too, is its automanaged infrastructure. So much like App Engine will scale by itself, this is a fully managed pay-as-you-go GCP service so you don't have to worry about how it scales out to handle the load. It's meant to handle-- connect up to millions of globally dispersed devices. So I think that's pretty, pretty awesome if you're into the IoT space. 

FRANCESC: That actually sounds pretty amazing, very useful. So I guess that since the episode today we're going to be covering so much, it's time to go talk to our friends from Firebase. 

MARK: Yeah, let's go do that. 

FRANCESC: So I'm very, very happy to welcome today the two co-founders of Firebase, James Tamplin and Andrew Lee. Hello, how are you doing? 

JAMES: Good. Thank you for having us. 

FRANCESC: Thank you for coming. It's really a pleasure. We were actually waiting to have you for quite a while. But finally you accepted because there was a good reason-- Google I/O. Think it happened last week or something. 

MARK: Something like that. 

FRANCESC: Yeah, something that. I heard about it. I don't know. Unfortunately, Mark and I were not able to be there. But hopefully you're going to be able to catch us up on all the cool things that you were announcing there. 

Before doing that, though, why don't you tell us a little bit about what you do at Google. 

JAMES: Cool, so I'm James. I am the product manager for Firebase and specifically Firebase's backend services. So we provide a bunch of tools that lets you build applications without needing to worry about servers or manage infrastructure. A lot of that is tying in with Google Cloud Platform. So we provide a lot of great tools. 

ANDREW: Sure, I'm Andrew. I'm James' counterpart on the engineering side. And I manage the team up here in San Francisco and partly in Mountain View that works on the backend services including, like James said, many of the cloud integrations. 

MARK: And then we get a bigger picture of what Firebase is. If people haven't played with Firebase, there used to be two or three things. Now there's 10, 20, 30, 50, 100-- I'm not sure anymore. What are all the things that Firebase has that people can take advantage of in one minute or less? 

FRANCESC: Yeah, from a very, very high point of view. What is Firebase? What does it do? 

JAMES: So the tagline is tools and infrastructure to build better apps and grow successful businesses. So we started out as this backend-as-a-service that I mentioned-- build apps. Don't worry about servers, Don't worry about infrastructure. 

And those tools provided functionality or infrastructure that let you add functionality to your application. And so we had the real-time database. That was our first product. And we had Firebase Authentication, Firebase Hosting. 

As time grew on, we both expanded that set of features, and we also added two more categories. So the first is our app quality products. So we have Firebase Crash Reporting. We have Firebase Test Lab. And we just added a new product that will we'll talk about-- Firebase Performance Monitoring. 

And then the third category is tools to help you grow your userbase. And we have a whole, I think, about seven products in that area. 

FRANCESC: Cool. The same question but from an engineering point of view, is this running on Google Cloud? How does this work? And what is the relationship between Firebase and Google Cloud Platform? 

JAMES: So it turns out that Firebase and Google Cloud Platform are actually the exact same platform. Under the hood, they share the same concept of accounts, of projects, of billing. So if you go today and you create a Firebase project, it is, under the hood, a Cloud project. 

And you can go over to the Cloud console, and you can see the same projects. You can manage the same users. You can set up the same billing information, which is really a very, very powerful idea because Firebase has a nice set of products to get going on mobile and web development. 

But Cloud has a much more advanced and larger set of tools for the more advanced applications. And so this gives you a nice path. You can start on Firebase. You can get going with your application. 

And when you need the more advanced, more powerful features, they're are all available from the same platform without you needing to set up a new account or a new project or change your billing profile or anything like that. Its all right there with Google. 

MARK: Cool. And we should probably make mention that we have had previous episodes talking about Firebase. At least two or three. 

FRANCESC: We had Vikrum. We had Sara Robinson. We had-- 

ANDREW: We had Abe come in. 

FRANCESC: We had Abe. We had also the one that does skateboarding. 

JAMES: David East. 

FRANCESC: David East. There we go. 

MARK: David East. 

FRANCESC: So yeah, we've had lots of episodes on the-- 

JAMES: Skateboarding is his main job here actually. 

MARK: Skateboarding. I just thought he was hurting himself a lot by falling over. 

JAMES: --professional skateboarder. 

FRANCESC: That's his job. Secondary-- sometimes he talks about-- 

MARK: Firebase. 

FRANCESC: Firebase or something. 

JAMES: Also that, yeah. 

MARK: Awesome. 

FRANCESC: But yeah, we'll have a bunch of links to all of those episodes on the show notes. So if you want to learn more about it, just check them out. 

MARK: Yep, awesome. So we just finished Google I/O. I'm sure it's a big relief to all of you. Why don't we talk about some of the new things that came out of Google I/O. We probably can't go through them all, so let's pick some favorites. James, do you want to go first? Do you want to pick a favorite feature that's come out during I/O that you want to talk about? 

JAMES: Super quickly, I think the one other thing that your audience should know is that Andrew mentioned where they are the same platform underneath the hood. 

Firebase is targeted at client-side application developers. So you're writing you know iOS, Android, or for the web while Google Cloud largely focuses on the backend, the infrastructure developers. So they really complement each other nicely. 

In terms of my favorite or some of my favorite launches, I think one of the big ones is phone number authentication. So we have a product called Firebase authentication, which lets you easily log in your users. 

So we've write a couple of lines of code. And you can let them log in with Facebook, let them log in with Google, Twitter, GitHub, et cetera. Username and password, or even connect with your own existing user account system. 

FRANCESC: Yep, that is one of my favorite features by the way. 

JAMES: No-- 

FRANCESC: It's so nice not having-- 

JAMES: No messing with OAuth. It's fantastic. So we had a lot of requests, especially from our users in emerging markets, where potentially they don't have an email address. Or even in developed markets, where there's just far less friction with logging in with a phone number. 

And so last week, we announced that this is now possible. You can just prompt a user to log in. They enter their phone number. We send them a text message. And if you're on Android, we even do some pretty cool special sauce where we'll automatically read the text message and log you in for a very, very frictionless signup experience. 

So yeah, it's, again, you want your users to be able to get into your application, start using the functionality as quickly as possible. And this is one of the ways where we're making that happen for you. 

MARK: Yeah, awesome. 

FRANCESC: So OK, so let's pick the second favorite. [INAUDIBLE] you go now, Andrew. 

ANDREW: I have to go with the Hosting and Cloud Functions integration. This is something I actually spoke about. If you go look on YouTube, I gave a talk last Wednesday talking about Firebase and Google Cloud. 

And our Firebase hosting plus Cloud Functions integration really opens up an entirely new set of possibilities for using Firebase Hosting now for dynamic content. For years we've done a great job serving static assets, but there's a bunch of limitations around have static assets only. And you can now build really any sort web app very easily without having to worry about the servers or scaling using our Cloud Functions integration. 

MARK: So now I'm curious, too, because obviously you've had integration with the Firebase Realtime Database. What functionality does that give you above and beyond building a single page web app using the Firebase Realtime Database using Cloud Functions on the web with the hosting? What's the difference there? 

JAMES: So it turns out that there's a number of very common things you might want to do that aren't actually very possible using a single page app. So a good example of this, which I demo last Wednesday, is social sharing. 

When you, say, tweet out a link to your app, it's actually going to-- Twitter's actually going to go, and they're going to scrape that page. And they're going to pull off some images so that they can show a nice picture for the user in that tweet. 

And if you have a single page app where the JavaScript is doing the rendering, Twitter might not be able to pick that up. And this is actually a very common pattern around the internet, where if you want someone else to be looking at your page and parsing the HTML, it's much harder if it's JavaScript. And so you could actually do that rendering now server-side, do a prerender and show that. 

Another reason is actually for performance. For Firebase Hosting, we provide a CDN that caches your results all over the world. And if you have a page that's maybe something that you want to render very quickly on mobile phone or something that you want to be very high performance, high scale but for which you want dynamic content, you can use the Cloud Functions to do your rendering. 

And then you can use Firebase Hosting to cache those results at the edge and provide very quick response without needing the end user's device to download the page, connect to the database, download the data, and then render things locally. 

FRANCESC: Cool. So what does that look like from the developer experience? You have the static hosting. So you just use HTML and some JavaScript in there. And then you deploy those functions, and then you call them. What does this look like? 

JAMES: Yeah, there's really two halves to it. So part of it is setting up the Cloud Function itself, which is pretty simple. You can use the Firebase SDK for Cloud Functions and the Firebase command line tool to write your code. 

It's just Node. So you can use the whole Node package ecosystem, including things like Express. And we've actually built the SDK to plug nicely into Express. We use the same types of objects and things, so you can get going very quickly. 

So in the case of hosting plus functions, you'd probably write some code to render a page with Express. And then you'd go over to your hosting configuration, and you'd connect certain paths, certain URLs over to functions. And you'd say with a rewrite [INAUDIBLE] say, this path should actually be served by this function. 

And then you say, Firebase deploy. We'll put the functions up there. We'll send the configuration to hosting. And we'll tie together for you behind the scenes. 

FRANCESC: Nice. I actually saw your talk at Google I/O. We'll have a link to it. It is really good. I really love that the fact that it was like for-- normally when you see people like co-founders, they don't tend to write that much code. So getting on stage at Google I/O and you're writing so much code, congratulations. That was really good. 

JAMES: I have to admit I had to dust off my program skills the weekend before, including this was the first meaningful thing I'd done with TypeScript. 

FRANCESC: Oh, cool. Yeah. 

JAMES: And so this an exciting, fun thing for me to learn a new language. So I really enjoyed it. 

FRANCESC: That was very good. We'll have a link to that video from the show notes. So definitely check it out. Let's go for one more launch. What is your other favorite? 

JAMES: Sure. So I think my other favorite was we started to open source our SDKs, which developers have been asking us to do for years. And it was a very exciting moment for me and I think most of the team. 

This is really important because I think it's a key part of the Google Cloud Platform strategy is openness, leading the way with things like Kubernetes and TensorFlow and projects throughout the rest of Google. So we were excited to join in the fun. 

So the big news here is our iOS, our JavaScript, and our admin, which are our server-side SDKs are now open source. Specifically the products within them, those backend services, products that we were talking about earlier are open. 

And it's all on GitHub. So our primary toolchain is now GitHub. So you can go and go to GitHub.com/Firebase. Check out those SDKs. Submit pull requests against them. And generally look at what we're doing and contribute to it. 

And we'd love for you to go ahead and do that. I think in the past couple days since we opened them up, we've got one of our community contributing patches to help them build against OS X. So yeah, great to see the community getting involved. And we're thrilled to work with everyone. 

MARK: So now I'm curious because I'm going to ask the question before he does. Does that mean-- 

FRANCESC: I know what you're going to ask. 

MARK: Yeah, you do. So does that mean, then, that if other people want to write implementations in other languages, they can use the open source as a reference and go from there? 

JAMES: They won't be considered official-- 

MARK: Community-supported. 

JAMES: Community-supported Firebase SDKs. But yeah, if you want a fork. 

MARK: So you could have Go. 

FRANCESC: Yeah, there's actually a pretty decent Go library for Firebase that I've used a couple times. I think it's called Fire Go. And works pretty well. I don't think it covers all of the features that Firebase offers, though. Any plans on supporting Go as the main language that it is? 

JAMES: Yeah, so I think one of the things to keep in mind is on the admin side, on the server-side like James mentioned, we have ambitions to support really anything that the developer might want. We really want to meet the developer where they are. 

But that's a lot of work, as you might imagine. And so we focus our efforts around the platforms that tend to be more commonly used. So you'll notice that our Node SDK right now is the most full-featured. It covers the most products. 

We also have an SDK for Java. And obviously we would love to do more things in Go and other languages. But today, Node is the most supported, Java's second, and other things are coming. But we're really going to be investing a lot more I think here over the next year. 

MARK: Have you considered a Perl SDK? 

FRANCESC: Haskell. Haskell goes first. 

MARK: COBOL. COBOL SDK. Excellent. All right. 

JAMES: Good suggestion. We'll take that to the team. 

MARK: So we'll go one more. What's your final favorite there? 

ANDREW: I feel like we didn't talk about performance monitoring yet, did we? 

JAMES: Nope. 

ANDREW: I've got to mention that. So this is the one new product. Everything else we've talked about here is features on existing products or new integrations. But this is actually a brand new product from Firebase that lets you, from your SDK, do timings of network requests and on anything else really you want in your application to get a sense for how your app is actually performing in the wild. 

And this is really important because you, as a developer, on the latest and greatest phone on your Wi-Fi network in your office may not get a good sense for what it actually is like to be a consumer on your app. And this is the tooling you really need to be able to do that. 

So this just launched last week. It's brand new. We've gotten some really great reviews. There's already been a number of large customers that launched on it since the event. They heard about it. And they put it right in there right away. And so I'm really excited to see how this grows over time. 

JAMES: It'll give you stack traces. It'll give you percentiles on your latency and network requests. And yeah, it's a really cool tool. I think the team has done a lot of iteration over the past couple of months. I think the UI is really intuitive. 

So it doesn't cost anything, completely free. Comes turned on when you use the Firebase SDK. So if you haven't yet, throw that into your app, and start going. It's pretty cool. 

MARK: No, that sounds super cool. I'm guessing as varying infrastructure happens around the world and people's bandwidth is very, very different depending on, then you can really see performance metrics based on where things are and that kind of stuff? 

JAMES: Exactly, yeah. 

MARK: Cool 

ANDREW: So I'm going to break the rules here and shout out just a couple other things I want to talk about. 

MARK: Go on then. 

FRANCESC: Go for it. 

ANDREW: Yes, we're really trying to do a much better job of supporting some of the other languages that maybe we hadn't done quite as good as job of supporting in the past. So one of those is that we're doubling down on our Swift support. And we made a bunch of improvements to just the usability and feel of using the Firebase SDK in Swift, which is obviously really critical for iOS, which is very important to Firebase as a whole. 

And then similarly we've done a bunch of work on Unity and C++. And this actually didn't launch at I/O, but it launched relatively recently before. So I think it's worth mentioning. 

JAMES: Yay. 

ANDREW: But we're making a big push into games and trying to address those markets, too. 

MARK: Yeah, it looks like you expanded more at I/O into games as well. You opened up game supported in Test Lab as well, didn't you? 

ANDREW: Yep. 

MARK: And that's super, super cool. 

FRANCESC: So something that is also pretty cool. We use it all the time for all of our projects, specifically for Google Cloud Platform Podcast is Google Analytics. And it helps understand what people are doing with your web apps. 

And it seems that there is a new thing, which is Google Analytics for Firebase, which is specifically for the applications that you can build with Firebase. Could you tell a little bit more about that? 

JAMES: Certainly. So a year ago at I/O 2016, we announced a brand new analytics product from Google called Firebase Analytics. In reality, the analytics team helped us with this. They did 98% of the work. 

And it's not actually a brand new analytics product. It's a mobile focus, native mobile-focused analytics product from the Google Analytics team. And it appears, if you go to analytics.google.com, it also has a view in the Firebase console. 

And so we had a lot of people over the course of the last year being like, which one do I use-- Google Analytics or Firebase Analytics? And we're like, no, no, it's all the same. And so we're reflecting that now by rebranding as Google Analytics for Firebase. 

FRANCESC: Cool. So what is the difference? You said that it's specifically centering into mobile applications? 

JAMES: Exactly. So Google Analytics, the original version was built in a web-focused world where you had sessions and page views. And so Google Analytics for Firebase is, since Firebase is Google's mobile platform, has iOS and Android SDKs number one. 

Number two is we've moved out of that web page-focused world into a mobile-focused world. A lot more event data is being generated. So what we do is we provide free unlimited, unlike Google Analytics, where if you hit a certain number of events, you have to start paying. 

And we do that by creating what's called a rolling 30-day base view. So we basically keep every single event for 30 days. And then we start aggregating. So that way, we are able to provide this product for free to whatever scale. We have some of the biggest apps in the world using the product. 

And I think one of the exciting things that we also, besides just the rebrand, we announced a couple of really cool things. One is support for Android Instant Apps, which is the ability to use an application without actually having to install it from the Play Store. So that's really cool if you want introspection to those apps. 

And the other thing that I think Google Cloud Platform customers and developers are really going to care about is we partnered with the BigQuery team to announce a 10 gigabyte free storage tier for BigQuery. 

So now you-- you have to enter a credit card-- but once you have that credit card in there, you can export Google Analytics for Firebase directly into BigQuery to do much richer querying. 

And as I said, after 30 days we start doing some sampling on that data. And if you want to keep it in its full fidelity, you can export it out to BigQuery and do all the querying that your heart desires. 

FRANCESC: Cool. So that means that actually now you get the 10 gigabytes of storage for free plus one terabyte per month of queries. So that's a lot of processing. That's very cool. 

MARK: Yeah, that gives people really like a great opportunity to play with the analytics and see if they need to use BigQuery. Just try it out to see if it works or not without having to take some charge up front, which is super nice. 

ANDREW: I'm excited about it because BigQuery is really one of the hidden gems of GCP. I don't know if everyone understands how powerful a tool this really is, but it's really pretty amazing. 

FRANCESC: It is for me. It is the best tool on Google Cloud Platform if you want to wow someone. You just demo little, little things. Just like, oh yeah, just processing a couple of terabytes of data in a second. And they're like, what. So that's very easy. 

JAMES: So I have actually an anecdote for everyone. So we, prior to joining Google, used another data warehouse solution to store and process all of our stats pipelines and analytics. 

And when we joined Google, we were required to move over to GCP infrastructure, which we did gladly. And we moved from this solution over to BigQuery. And it decreased our query times from about 60 seconds to 5. So I'd be sitting there, click a button, wait 60 seconds, see the graph come up. 

It made me a lot personally happier. And it was fantastic for the rest of the team as well. 

FRANCESC: Yeah, I guess that especially if the queries that you're running you're actually debugging and you're not sure if they're going to give the good results, having to wait for one minute to make sure that this works or not, that sounds like a lot, yeah. Cool. 

MARK: Yeah. Speaking of analytics, there are a couple of other things in here I thought looked really interesting, particularly the StreamView and the DebugView to help people be able to see what's going on inside their analytics. Can you talk about those? 

ANDREW: Sure. So those actually launched a little bit ago. They didn't come out at I/O. But I think they're exciting, worth talking about. So these are a couple of additional tabs under the Google Analytics for Firebase section of the console that, one, gives you a better idea of how people around the world are interacting with your apps. It has this cool live map showing what people are doing. 

And then the Debug view is really intended to help you, during the installation phase, to get a sense if your app is actually correctly hooked up to analytics. So generally with analytics, there's a bit of a delay between when the analytics are logged and when they're reported. 

And this is for battery efficiency reasons. We don't actually want to stream everything down right away. We want to batch and process. But you don't necessarily want to do that while you're setting up the app. You want to be able to have a real fast debug cycle. 

So you use DebugView to get a sense for is my app configured correctly? Am I logging the right events? And then when you go live, you're much more battery efficient. 

FRANCESC: Cool. We running out of time. But there's a question that I want to ask which is, OK, so there was a lot of cool things announced at Google I/O. What's next? 

JAMES: I think there's a couple of themes that are high level. The first theme is, and I think this is no secret, and Google is working on this across the board, is weaving machine learning into our products. 

So especially on the growth side of Firebase being able to intelligently recommend to developers actions they can take to increase their userbase in the most intelligent number of steps. So I think that's one big one. 

I think the other big one to note that your listeners will be interested in is deeper integration, continued integration with Google Cloud Platform. As Andrew mentioned earlier, they are the same under the hood. We share billing accounts and projects and all of those pieces. 

And right now, we have Cloud Functions and Cloud Storage, which are shared between the two platforms. And you should expect more exciting feature sharing coming in the future. And we've got a couple of things in the pipeline that I am-- I cannot wait to show the world. And they're going to be really, really cool. 

MARK: Awesome. Well, before we wrap up, is there anything we missed or something you want to plug or mention or anything really going on that you think is particularly exciting you want to make sure the listeners hear about? 

ANDREW: I want to remind everyone about Cloud Functions because it's super cool. I know we touched on it with Hosting and Functions. This is actually a new thing for us. We launched the Cloud Functions for Firebase in March along with the public launch of Cloud Functions in general. 

And it is really slick. So if you haven't given it a shot, it lets you hook up little snippets of code to events throughout the Google ecosystem. So if you have a write to your database, if you have a pub/sub event, if you have a conversion event in analytics, all of these can trigger code. 

And it's run in a managed way by Google. It's automatically scaled by Google. And it makes it really easy for you to get up and running without having to worry about operations and scaling and all of those things. So this actually ties nicely into what's next. 

And I spoke about this last Thursday actually in one of the fireside chats. But I think you're going to see a lot more coming from Google and Cloud Functions with more integrations and better tools and things because we're really excited about the space. 

FRANCESC: Awesome. And if you want to learn more about Cloud Functions, we also had an episode on Cloud Functions, episode number 73 with Bret McGowen. 

MARK: Yeah, so James, Andrew, thank you so much for joining us today, talking to us about Firebase and hot off the heels of I/O. And so thanks for taking the time and hanging out with us. 

JAMES: Thank you for having us. 

ANDREW: Thank you. 

MARK: A massive amount of thanks to James and Andrew for joining us in the sound booth here at San Francisco to chat all about Firebase and I/O with us. They are doing some pretty awesome stuff to grow that platform. I'm pretty impressed with it. 

FRANCESC: Yeah, especially very excited about the little that they could share about the future, but it does sound really cool. 

MARK: I want to know what's happening behind the curtain. 

FRANCESC: I know. Maybe we could, though, actually. We could ask them. 

MARK: We could. 

FRANCESC: Just don't tell anyone. 

MARK: No, we can't tell anyone. Awesome. So why don't we get into this week's question of the week? 

FRANCESC: Cool. So yeah, the question of the week today is a pretty simple one. But you know, it's important. I actually went through this not that long ago. So imagine that you have a project. It's running. And it's running in production, and there's people using it. 

And at some point you decide that you don't want to handle it anymore. So what you want to do is just give it to someone. How do you do that? 

MARK: Like a present. Here you go. 

FRANCESC: Yeah, but it's more like a pet. 

MARK: You want to take care of it? 

FRANCESC: And like, oh, now it's yours forever. 

MARK: Forever. Cool. So well, we've talked previously about having IAM, so identity access management. But this is actually at a high level. This isn't really even at a lower level. This is at a project level. 

So there's a variety of roles you can do with identity access management, or IAM, and one of them is an owner. 

FRANCESC: Actually it was not that long ago when we were talking about the first things we ever do with the projects. You mentioned that one of the things that you do is create a-- add one more owner just in case you get locked out for some reason, you have another way of accessing it. 

MARK: Yeah, so really here all you need to do is add that extra person that you're giving the project to. Make sure they're an owner. That's the first step. Then they can go in and make the changes they need to make or-- 

FRANCESC: Wait for them to accept the invitation. 

MARK: Yes that's very important, very important. And the other thing you need to do, assuming that the payment method is going to change, is that have them go into the billing section and make it switch over to the payment section that they're happy with. 

FRANCESC: Yep, and then they should remove you as an owner, and that's it. 

MARK: Yeah, they could remove you entirely. Maybe they drop you to an editor or a viewer level. It really depends on exactly how things are going to go forward. 

FRANCESC: But yeah, it's pretty simple. You just need to be careful making sure that everything goes on the good steps. Otherwise you could lock yourself out and that's not a good thing to have. 

MARK: That would be bad. Exactly. All right, Francesc. What are you up to? What are you doing? You going anywhere special in the near future? 

FRANCESC: So yeah, I'm actually going be next week in Buenos Aires. 

MARK: Nice. 

FRANCESC: Yeah, so I'm going to Argentina. It's going to be my first time in Argentina. It's very, very cool. I've only been to Chile before. So my second time in South America. 

I'm going to be speaking at Google Cloud OnBoard, which is a really cool event on training. So you're going to be able to learn all the basics of Google Cloud Platform. And for the first time ever, it's going to be live streamed to all Latin America. Check out the links to see how to access that live stream. There's a bunch of viewing parties all around Latin America. 

And it will be in Spanish. 

MARK: Oh, cool. 

FRANCESC: Yup, I'm very excited about that because it's going to be in Spanish. But the same way we have a bunch of accents here, it's going to be in Spanish, but I'm going to have my Spanish accent-- well Catalan accent sometimes. But we're going to have also a Cuban accent and Mexican accents, so it's going to be lots of fun. 

MARK: Sounds like it's going to be great. 

FRANCESC: Yeah, what about you? 

MARK: Well, I'm going to go on vacation for a bit. 

FRANCESC: Good for you. 

[LAUGHTER] 

MARK: [INAUDIBLE] 

FRANCESC: Good for you. 

MARK: But it's OK, dear listeners. I will not believe in the podcast. I will be live and well here. But yes, I will be going on vacation for a couple weeks. 

FRANCESC: Man, I don't want to say you deserve it, but you kind of do. 

MARK: Why thank you. Thank you. I appreciate that. 

FRANCESC: Enjoy your holidays. 

MARK: Wonderful. All right, Francesc. Thank you yet again for joining me on this episode of the podcast. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}