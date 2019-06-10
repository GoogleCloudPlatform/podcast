+++
audioDuration = "00:36:14"
audioFile = "Google.Cloud.Platform.Podcast.Episode.180.mp3"
audioSize = 52651589
categories = ["Firebase", "Firestore", "ML Kit", "Cloud Functions"]
date = "2019-06-05"
description = "Google Developer Advocate Jen Person talks with Mark Mandel and Mark Mirchandani today about developments in Firebase."
draft = false
episodeNumber = 180
hosts = ["Mark Mirchandani", "Mark Mandel"]
title = "Firebase with Jen Person"
image="/post/episode-180-firebase-with-jen-person/images/hero/hero-EP-180.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bx4wsd/episode_180_firebase_with_jen_person/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Google Developer Advocate [Jen Person](https://twitter.com/ThatJenPerson) talks with [Mark Mandel](https://twitter.com/Neurotic) and [Mark Mirchandani](https://twitter.com/markmirch) today about developments in Firebase. Firebase is a suite of products that helps developers build apps. According to Jen, it's equivalent to the client-side of Google Cloud. Firebase works across platforms, including Android, web, iOS and offers many growth features, setting it apart from other Google products. It helps site and app owners interact with and reach customers with services like notifications, remote configurations to optimize the app, testing, and more.

Cloud Firestore has come out of beta, and it is available both through Firebase and Google Cloud Platform, making it easy for developers to move from one to the other if their needs change. 

Recently, the Firebase team has been working to refine their products based on user feedback. Firebase Authentication has been upgraded with the additions of phone authentication, email link authentication, and multiple email actions. They've also added a generic authentication option so developers can use any provider they choose.

ML Kit makes machine learning much easier for client apps or on the server. With on-device ML features, users can continue using the app without internet service. Things like face recognition can still be done quickly without a wifi connection. ML Kit is adding new features all the time, including smart reply and translation, image labeling , facial feature detection, etc.

Cloud Functions for Firebase is also out of beta. It includes new features like a crash-litics trigger that can notify you if your site or app crashes and scheduled functions. An emulator is new as well, so you can test without touching your live code.

<!--more-->

##### Jen Person

Jen is a Developer Advocate at Google. She worked with Firebase for 2.5 years prior to recently joining Google Cloud. She loves building iOS apps with Swift and planning the ideal data structures for various apps using Cloud Firestore. Jen is currently co-starring with JavaScript in a buddy cop comedy where the two don't see eye to eye but are forced to work together, eventually forming a strong loving bond through a series of hilarious misadventures. 

##### Cool things of the week

* Uploading images directly to Cloud Storage using Signed URL [blog](https://cloud.google.com/blog/products/storage-data-transfer/uploading-images-directly-to-cloud-storage-by-using-signed-url)
* Build your own event-sourced system using Cloud Spanner [blog](https://cloud.google.com/blog/products/databases/build-your-own-event-sourced-system-using-cloud-spanner)
* Cloud Shell on the Cloud Console app [site](https://cloud.google.com/console-app/)
* Google Cloud networking in depth: Cloud Load Balancing deconstructed [blog](https://cloud.google.com/blog/products/networking/google-cloud-networking-in-depth-cloud-load-balancing-deconstructed)

##### Interview

* Firebase [site](https://firebase.google.com)
* Firestore [site](https://firebase.google.com/products/firestore)
* Cloud Storage [site](https://cloud.google.com/storage/)
* Firebase Authentication [site](https://firebase.google.com/products/auth)
* ML Kit [site](https://firebase.google.com/products/ml-kit)
* TensorFlow Lite [site](https://www.tensorflow.org/lite)
* Cloud Functions for Firebase [site](https://firebase.google.com/products/functions)
* Cloud Functions Samples [site](https://github.com/firebase/functions-samples)
* I/O 2019 Talk: Zero to App [video](https://youtu.be/gvbq12bGqHI)
* Guide - Cloud Firestore collection group queries [docs](https://firebase.google.com/docs/firestore/query-data/queries#collection-group-query)
* Guide - Scheduled Cloud Functions [docs](https://firebase.google.com/docs/functions/schedule-functions)
* YouTube - #AskFirebase Playlist [videos](https://www.youtube.com/playlist?list=PLl-K7zZEsYLkkCFs6T9mlqG8v6NCs38pA)
* Codelab - Recognize text, facial features, and objects in images with ML Kit for Firebase: iOS [site](https://codelabs.developers.google.com/codelabs/mlkit-ios/index.html)
* Codelab - Train and deploy on-device image classification model with AutoML Vision in ML Kit [site](https://codelabs.developers.google.com/codelabs/automl-vision-edge-in-mlkit/index.html)
* Codelab - Recognize text, facial features, and objects in images with ML Kit for Firebase: Android [site](https://codelabs.developers.google.com/codelabs/mlkit-android/index.html)
* Codelab - Identify objects in images using custom machine learning models with ML Kit for Firebase [site](https://codelabs.developers.google.com/codelabs/mlkit-android-custom-model/index.html)
* Codelab - Detect objects in images with ML Kit for Firebase: Android [site](https://codelabs.developers.google.com/codelabs/mlkit-android-odt/index.html)
* Previous episodes on Firebase:
     * GCP Podcast Episode 13: Firebase with Sara Robinson and Vikrum Nijjar [podcast](https://www.gcppodcast.com/post/episode-13-firebase-with-sara-and-vikrum/)
     * GCP Podcast Episode 29: The New Firebase with Abe Haskins and Doug Stevenson [podcast](https://www.gcppodcast.com/post/episode-29-the-new-firebase-with-abe-haskins-and-doug-stevenson/)
     * GCP Podcast Episode 78: Firebase at I/O 2017 with James Tamplin and Andrew Lee [podcast](https://www.gcppodcast.com/post/episode-78-firebase-at-io-2017-with-james-tamplin-and-andrew-lee/)
     * GCP Podcast Episode 97: Cloud Firestore with Dan McGrath and Alex Dufetel [podcast](https://www.gcppodcast.com/post/episode-97-cloud-firestore-with-dan-mc-grath-and-alex-dufetel/)
     * GCP Podcast Episode 99: Cloud Functions and Firebase Hosting with David East [podcast](https://www.gcppodcast.com/post/episode-99-cloud-functions-and-firebase-hosting-with-david-east/)

##### Question of the week

[How do I save money on my GCP resources?](https://www.youtube.com/watch?v=BEV5QLPK8YU)

##### Where can you find us next?

Mark Man will be at [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/)! Watch him live code on [Twitch](https://www.twitch.tv/markmandel).

Mark Mirch is going on vacation!

{{< transcript "[MUSIC PLAYING] MARK MIRCHANDANI: Hi, and welcome to episode 180 of the weekly Google Cloud Platform Podcast. I'm Mark and I'm here with my colleague, Mark. Hi, Mark." >}} 

MARK MANDEL: Hey, Mark. 

MARK MIRCHANDANI: How are you doing? 

MARK MANDEL: I feel like the Spider-Man meme where we're both pointing at each other. 

MARK MIRCHANDANI: Oh, we're doing that, for people who can't see us, which is everybody. 

MARK MANDEL: Yeah, pretty much. Awesome. So what are we talking about today? 

MARK MIRCHANDANI: Well, today we've got a great interview with Jen Person, who actually just recently became a Cloud Focused Developer Advocate, but used to be on the Firebase Developer Advocate Team. And as such, she came in to tell us a little bit more about some of the cool recent announcements for Firebase after I/O, a little bit more. I mean, there's been a couple of episodes about Firebase, but it's such a wide topic. You know, there's so much there. 

MARK MANDEL: Yeah. I went back and looked. We hadn't talked about Firebase since 18th of October, 2017. 

MARK MIRCHANDANI: So a year and a half. 

MARK MANDEL: So, you know, so there's been a bit of stuff come out. 

MARK MIRCHANDANI: People have been working on it. 

MARK MANDEL: Yeah, yeah. They've been up to some things. So yeah, that's a really cool conversation. And then after that, I get to ask you a tough question, which is how do I save money on my Google Cloud Platform resources. 

MARK MIRCHANDANI: Super important. I know everybody-- well, everybody wants state money. 

MARK MANDEL: People like money. It's a thing. 

MARK MIRCHANDANI: Turns out. Yeah. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: It's kind of important. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: But before we get to that we've got to talk about the cool thing or things of the week. 

MARK MANDEL: Yeah. So what do you got? 

MARK MIRCHANDANI: Well, the first thing I'd like to start off with is this really cool blog post that we had just not too long ago, talking a little bit about uploading images to Cloud Storage using a signed URL. 

MARK MANDEL: Oh, yeah. 

MARK MIRCHANDANI: Right? So traditionally you'd have an image uploader, you'd have a service to handle that, and then you'd send it off. But it turns out, that can be really hard to scale. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: So this little blog post goes through some of the details of how you can generate a signed URL specifically for the user, send it to Cloud Storage, which handles a lot of storage, more than a few probably. 

MARK MANDEL: Just a couple of little bits. Yeah. 

MARK MIRCHANDANI: A few million, billion, something like that-- and then generates that signed URL. And you give it to your app. It allows them to upload that directly to Cloud Storage. There's no middle person needed, so you can just kind of upload the file and then you're good to go. So it's actually a really, really cool way to remove an unnecessary component of file uploading. Right? 

MARK MANDEL: How fancy. 

MARK MIRCHANDANI: Now you don't need to handle that with your stuff. You handle it directly with Cloud Storage. 

MARK MANDEL: Oh, that's secure. 

MARK MIRCHANDANI: Super easy, secure. That signed URL obviously expires relatively-- you can tell it when to expire. It makes the process a lot easier. And really, I think it's about, again, focusing on the actual application as opposed to the infrastructure behind it. 

MARK MANDEL: Nice. Fantastic. Well, we've got a blog post and a matching solution for a build your own event sourced system using Cloud Spanner. I like this a lot. This is-- basically, the example they use here is something like in e-commerce system where, say, a customer adds something to a cart and then they click checkout or then they have payment processing. 

And you want to track all the events all the way through that flow, but then you want to do stuff based on that event. So the whole solution takes you through how you can use Span Editor to do that, how you can build a polling system to update other systems about when that happens so that you could take that data and say, push it into BigQuery or put it into Pub/Sub or do all sorts of other interesting things that you could keep historical records and all that kind of stuff. So we'll a link in the show notes, so you can check that out if that's the sort of thing that you might be interested in. 

MARK MIRCHANDANI: I think it's cool. Right? I mean, when you design a site like that you might be focused very much on how people use it. But then you actually have to analyze what's going on, where any triggers are happening, and then eventually, how do we take that information and do something with it. 

MARK MANDEL: Exactly. 

MARK MIRCHANDANI: Super cool. Well, another cool thing that I recently discovered-- I actually have no idea when this happened. It may have been today. It may have been a month ago. It may have been a long time ago. But it turns out the Google Cloud-- I think it's called Cloud Console, which is a Google Cloud. 

MARK MANDEL: The mobile app? 

MARK MIRCHANDANI: Yeah, the mobile app-- 

MARK MANDEL: Got it. 

MARK MIRCHANDANI: --on Android and iPhone or iOS, I should say. That actually has the ability to get Cloud Shell in it, as well. 

MARK MANDEL: Oh, neat. 

MARK MIRCHANDANI: So we were talking not too long ago about how kind of cool Cloud Shell is, and it gives you this kind of safe workspace you can play around in, and it gives you the gcloud command-line tool so you can integrate with all the other Google Cloud processes. But now you can have that from your phone. 

So, I mean, there's been a couple of cases where I've been away on holiday or something of that nature, and then someone's like, oh, hey the server's down and this kind of this-- and first of all, server-less. 

MARK MANDEL: [LAUGHS] 

MARK MIRCHANDANI: Second of all, you still have to go in and do something. Right? 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: And being able to have the power of the honestly just the gcloud command-line from your phone, that's amazing. 

MARK MANDEL: That's pretty cool. I knew you could access [INAUDIBLE] instance on your phone. I did not know that you could use Cloud Shell. That's pretty awesome. 

MARK MIRCHANDANI: Yeah. I mean, now you don't even-- you could probably set up a bastion somewhere and then just put gcloud on it and use that as a proxy. But now you don't even need. 

MARK MANDEL: You don't need to do that. 

MARK MIRCHANDANI: You just have it straight from your phone. 

MARK MANDEL: There you go. 

MARK MIRCHANDANI: That's amazing. 

MARK MANDEL: That is amazing. Fantastic. This is an interesting article. It's called "Google Cloud Networking in Depth, Cloud Load Balancing Deconstructed." 

MARK MIRCHANDANI: Ooh. 

MARK MANDEL: So I think it actually has two really interesting things to it you probably should be interested in. One, if you're ever like, how does Google Cloud do networking? How do the things work behind the scenes? This is a really good article, too. But if you were also kind of looking at it from the perspective of which load balancing solution should I be using for the things that I want to do, this also has a really nice comprehensive summary there, too. 

So it goes through network load balancing, it goes through global load balancing, some of the things that we do on the edge for security, how we optimize for latency with CENs and things like that, different network tiers, stuff like that. It's a really nice overview of the things we do in the networking space. 

MARK MIRCHANDANI: I think we see a lot of people who are-- maybe they come to the cloud and they don't realize how different it is from your traditional networking setups, especially people who have been working in a data center for a long time. And so the more content we see like this-- I think there's actually a series of deep dives on the blog that go into different components. 

This one about load balancing, specifically. But there's so much out there that kind of helps people understand, look, the cloud really is different for the better, I'd like to say. But at the very least, we need more resources for people to get that access and understand, hey, this is how it works. 

MARK MANDEL: Yeah, absolutely. 

MARK MIRCHANDANI: Super cool. 

MARK MANDEL: Awesome. Well, why don't we go chat with Jen? 

MARK MIRCHANDANI: Sounds good. 

MARK MANDEL: Let's go do it. 

MARK MIRCHANDANI: OK, everyone. We're super excited to have Jen Person with us here today, a cloud developer advocate. Jen, tell us a little bit about yourself and what you do. 

JEN: Well, thank you. As you said, I am a Cloud Developer Advocate as of starting this week. Prior to that I was a Firebase Developer Advocate, and I also made some courses around Firebase in partnership with Udacity. So I do a little of traveling, giving talks, I do a lot of recording videos, do some blogs, answer a bunch of people's questions on Stack Overflow, and also answer some questions on Twitter. So if you're in the Firebase community, I've probably answered your question once or twice. 

MARK MANDEL: Awesome. Well, I'm very excited to have you on the Cloud Developer Advocate team. And since we have you now and the Cloud Developer team, I think now we should just talk to you about Firebase. 

JEN: [LAUGHS] Yeah. That's perfect. 

MARK MIRCHANDANI: What we need is a Firebase expert, and now we have that. 

MARK MANDEL: There we go. So yeah, Jen, thank you for coming to talk to us about Firebase. I went had a look at one, two, three, four-- what's that say, four and a half? Because Firestore sort of crosses boundaries. 

MARK MIRCHANDANI: First question-- 

[LAUGHTER] 

--tell us about the Firestore. Well, we'll get to that in a second. 

MARK MANDEL: We'll get to that in a second. 

JEN: [LAUGHS] 

MARK MANDEL: So yes, but if people haven't caught any of the four and a half episodes previously, can you give us a little overview of Firebase? What does it do? What's the cool stuff about it? 

JEN: Yeah. So Firebase is a suite of products to help you build your app and grow your user base. I sort of think of it as the application, the client side of Google Cloud. So basically any solution you could need in your app, like be it authentication or data storage or dynamic links-- all sorts of things, analytics, all available one stop shop within Firebase. 

And it is cross platform for iOS, Android, web. We also have C++, Unity SDKs, basically covering all of the client SDKs as well as a big server side offering. So we're basically trying to solve all of your development problems 

MARK MIRCHANDANI: Just the whole front, back, the middle, everything. 

MARK MANDEL: I don't even know if I have a Google Cloud anymore. No idea. 

MARK MIRCHANDANI: Yeah. Just replace the whole thing. 

MARK MANDEL: [LAUGHS] 

MARK MIRCHANDANI: Well, actually that's a really interesting point. Right? Because Firebase offers a lot of these more client facing things. But it does offer some database side of things. Right? Some more of the server end. But you can also use Firebase at the client side to integrate with any of the GCP back end stuff. Right? 

JEN: Right, yes. So a lot of times we get questions like what is the difference between Firebase and Google Cloud. And it's not so much that they're different. If it's a Venn Diagram, Firebase it's somewhat overlapping for the most part with Google Cloud. So they share a lot of the same services. But the Firebase side really is developed to be for client side developers for the most part, to make your job easier. Where Google Cloud is generally speaking, more enterprise. 

MARK MANDEL: And it does seem like Firebase is more like-- I've heard it referred to as back end as the service or maybe serverless. Would that be accurate? 

JEN: Yeah, yeah. So we have a whole bunch of features that are back end as a service. We also have a lot of growth features, as well. 

MARK MANDEL: What do you mean by growth features? 

JEN: Oh. Well, I'm glad you asked. 

MARK MANDEL: [LAUGHS] 

JEN: So after your app is built, you need a way to connect with your users and sort of expand that user base. So that could be through notifications or through A/B testing. You can use Remote Config, which allows you to change some details about how your app works or appears. 

So you can try different configurations and see which ones your users like better, and really just optimize your app. And a lot of times we'll have a good idea, but how do you really hone it and make it exactly what your users want? Our growth features help you do that. 

MARK MIRCHANDANI: So it's this-- the suite of tools that kind of help you design all these things. And those old podcast episodes that talk about Firebase go into a lot of details. What's new with Firebase? Right? What have we seen, especially with iO just recently last month? What's kind of new and cool with it? 

MARK MANDEL: Yeah. I went back and looked. Our last episode was back in 2017. So I assume some new stuff has come out. 

MARK MIRCHANDANI: Probably at least a thing. 

JEN: Yeah, you know, a couple of things. So one of the things that's really interesting about how Firebase has been developing is that when we first started, we just were growing growing and adding all these different products. And now what I see Firebase doing is really maturing and adding to those different products that we already have, and making them really suit the developers based on the feedback that we're getting from you. 

So in terms of existing products, things we've added to them, for our Cloud Firestore, which is our second database offering, it's also NoSQL like the Realtime Database, and it is built of collections of documents. It's no longer in beta. 

[CHEERING] 

Yay! So I know that that was a deterrent for some developers. You're worried about do I really want to push this to production if it's something in beta. Well, it's not anymore. So it's really a mature product. Really excited to learn how it's been working. 

I absolutely love how it solves problems that I faced in the past with NoSQL. And very recently, we just added collection group queries. So prior to that, you could not make a specific query that spanned across different sub-collections and different documents. So sub-collections were seen as just completely separate entities from one another. 

But now you can query and it'll pull the key from every sub-collection. 

MARK MIRCHANDANI: Very cool. So is this kind of like a newer version of the Realtime Database? 

JEN: Yeah. You know, I would say that that's the simplest explanation. But we are still definitely supporting the Realtime Database. The real time nature of it has just been really helpful for a lot of scenarios. And so it's still going to be there, and it still may be suited best for certain situations. 

For instance, if you are doing a whole lot of writes very quickly, the Realtime Database might be a better solution for you, so things like in games. But I see Cloud Firestore as the next step. Because it adds stronger query and better querying power structure that it makes more sense to mirror your application. Basically, all the answers to the questions that people had about Realtime Database. 

MARK MIRCHANDANI: And it has kind of a broad use case, like you said, for a lot of people. Since we were actually the beginning just talking about well you can actually get Firestore through GCP rather than through-- you can do it through both Firebase or through GCP, again, depending on your use case. 

JEN: Yeah, exactly. And that actually means that if you're starting with a very small team and you're building an application and then it becomes extremely popular, switching over to Google Cloud is a breeze. 

MARK MANDEL: Actually, I don't think we've ever actually talked about that on any of the previous episodes. Because there's a really nice graduation path, I think, as you go in Firebase and then if you wanted to add extra features into GCP. Can you talk a little about that? 

JEN: Yeah, sure. So whenever you create a Firebase project, it's also a Google Cloud project, which enables you to implement any of the Google Cloud APIs right from the Google Cloud console. And there is also, as you pointed out, some overlap in features like Cloud Firestore, like Cloud Storage, which is available specifically for Firebase. 

But it's the same Cloud Storage underneath that we used in Google Cloud. And recently we added Identity Platform, so now we have auth features in Cloud that add onto the Firebase Auth features, and really are suited for those enterprise situations. And switching over is really simple because you already have your project. You don't have to worry about trying to link projects together. 

MARK MIRCHANDANI: So it might be a good example that someone kind of started with Firebase and then they added a little bit more, and then they wanted to build in some more GCP projects or GCP products. But it might also go the other way, where you're using GCP products and you want to add a mobile app or something like that. And it would make just as much sense to kind of create that Firebase project and go off of that. Right? 

JEN: Yeah, absolutely. And if you have an existing Google Cloud project, you can import it into Firebase. So yeah, you can definitely go either way. And there are situations where, as you pointed out, if you want to build a client app that would make sense. And a lot of times we will be using Cloud APIs even when you're using Firebase. So if you wanted to do some sort of translation server side or something like that, we would use Google Cloud for that. 

MARK MANDEL: Very cool. You mentioned one thing in passing that is-- I don't know. It's always been my favorite feature of Firebase. It is Firebase Auth. And having built, I don't know, websites for 20 years, not having to build an authentication scheme seems really cool. But it looks like you've had some improvements in the last couple of years on that, too. 

JEN: Yeah in the last couple of years, we've added several new ways to authenticate. We added phone auth, we added email link auth-- so rather than having an email and password you can send an email link and you can click on it in your email. We've added different email actions. So in the console, you can decide what is the message that you want your clients to get when they get, say, an email to verify. 

Or you can change that from the client, as well. And our latest identity providers that we've added are Microsoft and Yahoo Auth. And now we're going to be using a generic OAuth2 provider sign in. So going forward it's going to be even easier to add different providers. You may have noticed in the past, each provider maybe has a little bit different way that it works. 

You need to log in, say, with Facebook and then they have their own portal. And then you have to take that information and use it to log in to Firebase. But now with that OAuth2 provider sign in being generic, it basically just pops up a web window and they all work the same. And that's going to make it a lot easier for us, too, to add more providers. So hopefully we'll have more providers going forward quicker. 

MARK MANDEL: No more having to implement reset your password functionality. 

MARK MIRCHANDANI: Don't build your own auth, just don't. 

MARK MANDEL: Don't. 

MARK MIRCHANDANI: There's a very small set of use cases where you need to. But otherwise, man, you just don't. 

JEN: Yeah. You know, one time I watched this I sort of how it's made show on YouTube about making soy sauce. And soy sauce is basically water and salt and soy beans. Right? So you could theoretically make your own soy sauce. But wouldn't you rather just make dinner? 

That's kind of how I think about it, is like, yes, you can spend all of your development time making this very complex thing like handling auth. Or you could make what you went out to make, the application that you wanted to make, and leave that to us. Because we have all this experience with it. 

MARK MIRCHANDANI: I feel that way about any cooking, whatsoever. 

JEN: [LAUGHS] 

MARK MIRCHANDANI: It's like, I could make this bowl of cereal. But wouldn't I rather have someone make the bowl of cereal and just give it to me? 

MARK MANDEL: And just deliver it to my house? 

MARK MIRCHANDANI: Yeah. 

MARK MANDEL: [LAUGHS] That's funny. 

JEN: Hey, that's a great idea for an app. 

MARK MIRCHANDANI: Oh. 

JEN: Cereal delivery. 

MARK MANDEL: I would pay money for that. 

MARK MIRCHANDANI: I sadly would pay money for it. 

MARK MANDEL: [LAUGHS] Excellent. One thing I actually have been also dying to talk about on the podcast but we haven't had a-- just haven't had a chance, unfortunately. ML Kit is super interesting. Tell us more about that. I think it's fascinating. 

JEN: Yeah. So what ML Kit does is it provides you a simplified way to use machine learning on your client's app or on the server. And we have all sorts of different ML features that we're slowly adding to it. And so the benefit of using ML Kit is that we have, with on device ML features, you are able to use them even if you don't have internet access. 

So it leads to a much quicker experience. We're able to do things like if you have a video and you're just filming in the moment, you could do real time text recognition or face detection. Because it's right there on the device. So it's super fast. 

And if you need something a little more powerful, you could still use the cloud side. And it's done simply through our SDK. So right now for ML Kit, wow. It's growing so fast. I swear there is a new feature every week. I actually had to look it up to make sure I got them all. 

In terms of natural language, we have identifying language of text. We have Translate. And we also have added Smart Reply. We have a lot of Cloud VIsion features, including recognizing text, detecting faces, including landmarks on the face. 

So not just detecting the square of a face, but where's the nose, where are the eyes. It helps you make all those fun filters. Scanning barcodes, which is super popular, labeling images, detecting and tracking objects, which we recently added, and recognizing popular landmarks. 

And we also added AutoML Vision Edge. So if you have a custom AutoML model, you can access it right on your device. So you could see that's another way that there's an overlap between Google Cloud and Firebase. And if you really need a customized model, you can use TensorFlow Lite. You can run your TensorFlow Lite model through ML Kit. 

MARK MIRCHANDANI: So it's pretty much ML Kit this is the way to use any ML technology with your mobile/web/whatever app. Right? 

JEN: With your iOS and Android app. Yup. Our goal, I think, it's just to cover any and all scenarios. And we're really excited to see how people are going to be using it. And we also have a Google group. So if you want to join that and follow along and see how other people are using ML Kit, we'd love to see how you're using it, as well. 

MARK MANDEL: I'm just kind of excited about having Smart Reply as a service. I'm trying to think of wonderfully horrible things I can do with that. 

[LAUGHTER] 

MARK MIRCHANDANI: Well, we're going to get to the point where you don't need to-- 

MARK MANDEL: Even be there. 

MARK MIRCHANDANI: You don't need to respond to anything, and you'll still be responding. 

JEN: Yeah. 

MARK MIRCHANDANI: Right? Your ML will kind of figure you out as a person, which is a scary thought. But then after that you're like, the infinite convenience I have-- I can have my phone order my cereal for me in the morning and have to do nothing. 

JEN: Yeah. 

MARK MIRCHANDANI: Assuming we build the cereal service first. 

MARK MANDEL: I don't need to do podcast hosting anymore. 

JEN: [LAUGHS] 

MARK MIRCHANDANI: An Auto ML pod-- hm. Wait, wait. No, we shouldn't explore this concept. I need this job. 

[LAUGHTER] 

MARK MANDEL: And you also-- I mean, before we were talking, before the podcast, you were talking about Cloud Functions, as well. We did do a previous episode-- I think that was the last one. Yeah, it was in 2017. But I'm sure a Cloud Functions have also come a long way since then. 

JEN: Yeah. Yeah. Cloud Functions for Firebase are no longer in beta. 

[CHEERING] 

So yeah, these were the two big pushes that we had, Cloud Firestorm, Cloud Functions. And getting those out of beta into BGA has been really great. So we are continuing to add different types of triggers. I'm trying to guess which ones have been added since the previous-- 

MARK MIRCHANDANI: Guessing at production launches seems like a good idea. 

MARK MANDEL: Yeah. Yeah. 

JEN: Sure. Yeah, yeah, yeah. 

MARK MANDEL: Yeah, just guess. It'll be fine. It'll be fine. 

JEN: Yeah. So, let's see. We have now a Crashlytics trigger. 

MARK MANDEL: Oh, that's cool. 

JEN: If you have some sort of crash, you can trigger function. And then you can use that function to, say, send a notification to Slack or something like that. And my favorite, we now have scheduled functions. 

MARK MANDEL: Yay. 

JEN: So big request there, you can now schedule your functions to run at a specific time and repeat. And we have a new emulator that can run your functions right on your device without touching your live code. And it also emulates all sorts of different things in your app, like if you're using Cloud Firestore you can basically have a whole ecosystem working right from your device and not worry about accessing external live code. And you can test it out. 

MARK MANDEL: Oh, nice. Is that using the Firebase command-line utility or something to set that up? 

JEN: Yeah, yeah, the command-line utility. 

MARK MANDEL: Oh, wow. That was way easier than-- 

MARK MIRCHANDANI: I thought there was going to be more, but no. 

MARK MANDEL: I thought there was going to be more. She's like, no. No. You just go Firebase. 

JEN: No. Yeah, when you have the CLI you just have it. 

MARK MANDEL: It's just easy. 

MARK MIRCHANDANI: So a common use case for some people might be setting up their app, hooking into Firestore for their database. And then when some event happens or when they upload a certain amount of data to Firestore, it then triggers a function, does a little bit of processing on it, and then maybe puts it back in or, like you said, sends a notification. The possibilities are probably endless there. 

JEN: Oh, yes. Definitely. And it's great because it also connects with all sorts of third party services, as well. So it's not just exclusively within the Google Cloud environment. You're able to incorporate whatever third party services you need. 

And for now, until we add different types of authentication, it's also a way you can handle custom auth. I know in our functions samples GitHub repo, we have an example of logging in with Instagram. And what else? We used to have a GitHub one, but now you can just log in with GitHub. Yeah, I'd have to take a look. So yeah, we actually have a repo full of Cloud Function samples, if you want some ideas about how you could use them. 

MARK MANDEL: Cool. We can put a link to that in the show notes. I'd love to know, what's been the most interesting or strange thing you've seen somebody build with Firebase? 

JEN: That's a great question. Oh, OK. So when I was at a hackathon-- so, you know, you're looking at having really limited amount of time. Right now in terms of deploying Cloud Functions with Firebase, you do that from the command-line interface. 

But what they did is basically make a website where you can just type your JavaScript code right into it. And it deploys it automatically for you. And the way that it worked was actually just taking the actual chunks of your code, and turning them into strings, and putting them into the database. And that would trigger your function that then reassembled it and made that into a Cloud Function. I just thought it was a really fascinating implementation. 

MARK MIRCHANDANI: There's no way that could be abused, not a single-- 

[LAUGHTER] 

Not a single way. 

MARK MANDEL: Oh, it's like, super secure, super. 

MARK MIRCHANDANI: Absolutely. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: Just give the ability for anyone to put any code anywhere. 

MARK MANDEL: Yeah. 

JEN: That's why it's a hackathon project and not a real one. 

MARK MANDEL: You don't have that project handy, do you? I mean, never mind. 

[LAUGHTER] 

JEN: Yeah. So I thought that was pretty cool. 

MARK MIRCHANDANI: That is very cool. So also, we're coming off of the I/O and the next conference season for Google you gave a talk at I/O. Right? 

JEN: Yeah. So I gave a talk with Kat Fant, and Mike McDonald, and Frank van Puffelen. We did our Zero to App Live Coding Talk. This is something that we've done at several events, but this time we used a brand new application. So what basically happens is one of us is talking while the other three of us are coding on three different platforms. And it is wild. It is amazing that anything ever works. And we really are coding it and deploying it live. 

MARK MANDEL: Have you practiced it before or are you doing it all fresh? Can you tell us? 

JEN: Yeah. With this particular app, because we had just built it-- oh, gosh. Is it bad to say we probably practiced it like, two full times? 

MARK MANDEL: That's more times than I probably would have done it. [LAUGHS] 

MARK MIRCHANDANI: Yeah. That's pretty reasonable. 

JEN: Each of us on our own try to make sure that our component was working. But to bring it all together probably only happened a couple of times. 

MARK MIRCHANDANI: Yeah. I mean, one live demo was dangerous enough. But three live coding sessions happening on stage seems reasonable. Right? 

MARK MANDEL: It's fine. 

JEN: Oh, yeah. I guess what I tell myself is if I make a mistake at least 2/3 of the people are probably looking somewhere. 

MARK MIRCHANDANI: That's a good point. 

MARK MANDEL: Oh, so all three people's screen are up on the stage at the same time so everyone can see everything. 

JEN: Exactly. It sort of looks like the Brady Bunch. We just got different screens all going at once. 

MARK MANDEL: That's fantastic. 

MARK MIRCHANDANI: Did it work? 

JEN: For the most part. 

MARK MIRCHANDANI: Ooh, that's pretty good. 

JEN: For the most part. 

MARK MANDEL: That's pretty good. 

JEN: I will say that when I started my code and I implemented Auth, when I went to log in it just gave me like, Error Code 2. And I was like, great. Great. This is great. 

[LAUGHTER] 

MARK MIRCHANDANI: I hear there's documentation that might explain. 

JEN: So then fortunately it was my turn to talk and Puff came over. And he was able to look at my code while I was like-- I had slides up so you couldn't see it. And what happened was we were hard wired for internet because that's supposed to be faster. But the internet they connected to the ethernet cord didn't actually work. 

MARK MANDEL: Oh. 

JEN: So we just had to connect to the Wi-Fi. But yeah, that was the only slip up. 

MARK MIRCHANDANI: That's great. #ConferenceProblems. 

MARK MANDEL: Yeah, absolutely. 

JEN: [LAUGHS] 

MARK MANDEL: So if people want to learn more about Firebase, what's your favorite resource for people being able to do that? 

JEN: Well, let's see. I really do absolutely love our guides, which you can find on our website, Firebase.Google.com. But what I've found most useful is our quick starts, which are also linked there. But sometimes when I'm just reading a description of something I'm like, OK, what does this actually look like? 

So if you go over to the quick starts, you could see how all of those features work separately and together. And you can see it in an app that actually works. And that helps it make a lot more sense. 

MARK MIRCHANDANI: So I hear that you run a program called Firecasts. What is a Firecast? 

JEN: So a Firecast is sort of like a generally brief-- we like to have them less than 10 minutes-- video where we do some screen casting, and we do some maybe head shots with maybe some nice diagrams where we explain something in Firebase. And that could be a specific feature and getting started with it. That could be a problem and showing you how Firebase can help you solve it. Just a little bit of information, not quite as big as a tutorial altogether, but just a little bit to get you started. 

MARK MANDEL: Also sounds like a good resource for learning more about Firebase. 

JEN: Yes, definitely. 

MARK MANDEL: Not that the previous question was leading in any way. [LAUGHS] 

MARK MIRCHANDANI: Hmm. 

JEN: Oh, I missed that. 

MARK MIRCHANDANI: We almost thought ahead. 

MARK MANDEL: Almost. 

MARK MIRCHANDANI: Very close. 

MARK MANDEL: Almost. So how do you determine what topics you want to have on the Firecast? Sounds like you have a pretty diverse set of things that you talk about. 

JEN: Oh, yeah. Yeah. If you check it out, we have a different Firecasts for almost every single product on all of our platforms. Personally, when it comes to making new Firecasts I take a look at the kind of questions that I'm getting. So that's why those are so important. 

I was running a show called AskFirebase up until recently, and so people will use the hashtag #AskFirebase on social media, and I basically take all of those questions and look at them, and determine which ones work best on the show. But I also aggregate them. 

I look at what are the common themes that I'm seeing here? Is there a problem that a video could easily solve? So I do it based on the kind of questions people ask. So keep those questions coming. Even though I can't answer everyone directly, it does help determine where the direction that our product goes. 

MARK MIRCHANDANI: Have there been any recent insights that you've gotten from the AskFirebase that have kind of been surprising? 

JEN: Ooh. That's a good question. 

MARK MIRCHANDANI: Thank you. 

JEN: [LAUGHS] It's like you know what you're doing. 

MARK MIRCHANDANI: It's weird. It's like I'm a host or something. 

JEN: Yeah. 

MARK MIRCHANDANI: Just kidding. I have no idea what I'm doing. 

JEN: [LAUGHS] Well, I guess I'll say broadly I learn a lot about how our products work just from AskFirebase. So there are specific products within Firebase that I focus most of my time on. And a lot of times when I have a guest coming on AskFirebase they work on a product that I'm not so familiar with. So it gives me a chance to get those questions answered and learn some stuff along the way. 

MARK MIRCHANDANI: Well, I think that's the beautiful part about being in developer relations, is that when you're working with these products internally you think about X, Y, and Z. But then you hear from people who are using them and you're like, I never thought of using it like J. That's crazy to me. But let's talk about it. Let's figure it out, and let's kind of glean insights from that. 

JEN: Yeah, exactly. I always have in my mind how I think I would use something. But seeing how our developers use it is very different. 

MARK MANDEL: So now I want to know-- now that you've joined the Cloud team, are we going to expect similar types of media content coming from you on the Cloud side? Can you talk about that yet or is it secret? 

JEN: Ooh, secret. No. Yeah, I'm definitely going to be continuing to make video content because it's my absolute favorite thing. So I think there's going to be a whole lot more of that because I'm going to have more time to dedicate to it. So while I have changed teams, you'll definitely still see my face around a lot. 

MARK MIRCHANDANI: Are we going to look for a hashtag #AskCloud? Ooh, could be a good idea. Write that one down. I'll take credit for it. 

JEN: Don't tempt me. Yeah. You know what? I can just put out the hashtag and I'll set up a spreadsheet so I can start getting those questions. And we'll just see if people ask enough questions for us to start a show. 

MARK MANDEL: Did you hear that, listeners? The onus is on you. 

MARK MIRCHANDANI: Yeah, it's all up to them who are listening right now. You can make this a reality. We just need you to ask a lot of relevant questions. 

MARK MANDEL: Fantastic. Well, we are coming up on time a little bit. But before we finish up, is there anything that we missed or something you want to make sure you plug or just things that people should know about before we finish up today? 

JEN: So anyone who listens to this podcast has probably already figured out that Google Cloud is huge and encompasses all sorts of different products. And even as someone who works here, I can find it confusing sometimes trying to get to the right resource. 

So, by all means, if you have the possibility to reach out to somebody who works on Google Cloud or works on Firebase, they may be able to point you in the right direction. They might know where that resources that you're looking for. 

So we really do have some great documentation out there, but sometimes finding the exact solution you're looking for is a little harder. Because maybe you'll word it a little differently when you're searching for it. So yeah, going back to asking questions. Very important. 

MARK MIRCHANDANI: Yeah. I mean, I think there are so many different products. And even people come up to us, occasionally, and they're like, oh, you're working Cloud so you know about this, when it's like, we don't. I mean, a lot of times there's so much stuff here. 

MARK MANDEL: So it just sounds like us, Jen. 

MARK MIRCHANDANI: Hashtag #AskJen. 

JEN: [LAUGHS] 

MARK MIRCHANDANI: I will also take credit for that if you choose to use it. 

MARK MANDEL: [LAUGHS] 

JEN: Oh, boy. 

MARK MIRCHANDANI: Sorry. I'm just trying to put my hooks in everything. 

JEN: No, you got-- that is totally your idea. So should I send the questions your way, then? 

MARK MIRCHANDANI: Oh, that would be-- 

MARK MANDEL: Yes, you should. You send it to Mark. Yes. 

MARK MIRCHANDANI: Yeah. Mark can answer those questions for you. 

MARK MANDEL: No, the other Mark. 

MARK MIRCHANDANI: We're pointing. I know it doesn't work as well, but-- 

MARK MANDEL: It's like a Spider-Man comic where we both point at each other. 

[LAUGHTER] 

All right, wonderful. Well, Jen, thank you so much for coming on the podcast and telling us all about Firebase today. 

JEN: Thank you, Mark and Mark. 

MARK MIRCHANDANI: You're welcome. 

MARK MANDEL: [LAUGHS] 

MARK MIRCHANDANI: Thanks, Jen. 

MARK MANDEL: Thanks. 

MARK MIRCHANDANI: All right. Thanks so much to Jen for coming in. It was super, super awesome to hear about all the cool Firebase things. And now that she's on the Cloud Team, we'll hear about many awesome Cloud things, as well. 

MARK MANDEL: Yep. Sounds great. I'm looking forward to all the new content she's going to produce. 

MARK MIRCHANDANI: It's going to be super cool. 

MARK MANDEL: Yeah. So let's get stuck into our question of the week, where I get to ask the tough questions. What I want to know is how do I save money on my Google Cloud Platform resources, just across all of them? Can you solve all those problems? 

MARK MIRCHANDANI: Just every, every resource? 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: Well, the first thing you do is just shut them all down. 

MARK MANDEL: [LAUGHS] That is a good way of saving money. Yes. 

MARK MIRCHANDANI: You will not spend anything if you don't use anything. Right? The nice advantage of the cloud. Turns out that does not work for most people. So a more realistic approach is to actually try to figure out what you have that's up and running that you're paying for that you're not really using. 

MARK MANDEL: OK. 

MARK MIRCHANDANI: And so there was a super cool talk at Next that's on YouTube, and we'll have a link in the description below, that talks a little bit about how to automate cost optimization toolings basically by scanning your resources for things you're not using that you are paying for, and then shutting them down. 

You can write that using Cloud Functions pretty quickly. 

MARK MANDEL: Right. 

MARK MIRCHANDANI: And then it just goes into it. So in the talk they talk a little bit about-- what's the example they give? So external IP addresses, I don't know if you knew this, but you don't pay for them when they're attached to a resource. 

MARK MANDEL: But you do pay for them if they're not. 

MARK MIRCHANDANI: There it is. And so if you have an external IP address that's been sitting around for 30 days, that's a pretty good chance you may not need it. Of course, that'll be up to your business logic if you actually want it or not. But if you're not saving those for anything you can actually write this cool function that will go, scan all your IP addresses, see which ones haven't been used in a while, and then shut them off. 

Put that on a Cloud Scheduler job, maybe. And then you've kind of got this great system to automatically scan for it and delete it, saving you a little bit of money. So you can do that with external IP addresses. The talk also shows doing that with persistent disks that haven't been used, any resources, any compute engine-- 

MARK MANDEL: Load balancers that might be sitting around doing nothing. 

MARK MIRCHANDANI: I mean, there's so many different resources that especially for large organizations, you can get lost in just the sheer number of projects you have. 

MARK MANDEL: Right. 

MARK MIRCHANDANI: So check the talk out. It's super cool. It gives them practical examples and actual code that you can run. 

MARK MANDEL: Very cool. 

MARK MIRCHANDANI: But then it should enable people to take a look at it and say, where else can might I may be wasting resources? 

MARK MANDEL: Nice. You could even just send reports. You could do email reports. Oh, that's just neat. Yeah. 

MARK MIRCHANDANI: I mean, yeah, once you kind of-- 

MARK MANDEL: The world is your oyster. 

MARK MIRCHANDANI: Exactly. If you want to email somebody, set up a dashboard, automatically actually delete them, it doesn't matter. 

MARK MANDEL: Awesome. Fantastic. So Mark, what are you up to? What cool things are you doing? 

MARK MIRCHANDANI: Well, next week I am gone. I am disappearing into the ether for a week. 

MARK MANDEL: Ooh. 

MARK MIRCHANDANI: And then after that I will be in New York. 

MARK MANDEL: Oh, yeah? 

MARK MIRCHANDANI: And then coming up I'll be going down to LA, so a little bit of traveling. Generally I like to stay where I am, but moving around a little bit. What about yourself? 

MARK MANDEL: I will be at Tokyo Next, presenting. I'll be doing some stuff at the Games and Apps Inside Event with Tokyo Next. So unsurprisingly, I will be talking about Agones, and being around to talk about games and stuff. 

MARK MIRCHANDANI: Mark talking about Agones? 

MARK MANDEL: Who knew? 

MARK MIRCHANDANI: Why would that happen? 

MARK MANDEL: I have no idea. 

MARK MIRCHANDANI: I would like-- what if you just did a live coding for your talk at Next? Right? Because you do the live streaming for coding. Right? 

MARK MANDEL: Yeah, I do. 

MARK MIRCHANDANI: And do you think they would approve it if you did that as a session? 

MARK MANDEL: I don't know how-- I don't know how interesting it is. 

[LAUGHTER] 

MARK MIRCHANDANI: Well, I mean, hopefully people-- well, I don't know. I think it'd be kind of cool. 

MARK MANDEL: Yeah. So actually if you are interested, usually about once a week I live stream on Twitch. That's something I do usually, if I'm not traveling anyway. So you follow me on Twitch.TV/MarkMandel or you can just have a look for me on YouTube, as well. 

And I'll do live streaming of development of Agones. And I do that fairly regularly. So if you're like, well, I wonder how Mark thinks and how much does he actually talk to himself and how often does his dog bug him, then you have an avenue for finding out. 

MARK MIRCHANDANI: Minus the dog part, that might make for a really cool Next session. I mean, even the dog would be fine. But I'm sure there'd be rules against bringing a dog. 

MARK MANDEL: If [? Mattie ?] Chan can bring on her-- 

MARK MIRCHANDANI: Hamster. 

MARK MANDEL: --hamster, I think it was, into her I/O talk, then I think I can bring my dog on stage. 

MARK MIRCHANDANI: You could bring the dog. You could bring the audience into the whole thing. It could be, like, an actual live coding session. 

MARK MANDEL: There you go. It's just me sitting there being like, so, why isn't this working? 

MARK MIRCHANDANI: Yeah. 45 minutes of me just sitting there cursing at my computer, it turns out does not make for entertaining television. 

MARK MANDEL: [LAUGHS] 

MARK MIRCHANDANI: Or maybe it does. 

MARK MANDEL: Anyway, well, I'll tell you what. If people are interested in me doing that live on stage, let me know. I'd be, happy to do that. 

MARK MIRCHANDANI: It'd be fun. 

MARK MANDEL: Fantastic. Well, Mark, thank you for joining me on the episode of the podcast this week. 

MARK MIRCHANDANI: Always good to chat with you, Mark. 

MARK MANDEL: And thank you all for listening. And we'll see you all next week. 

MARK MIRCHANDANI: See you. 

[MUSIC PLAYING]