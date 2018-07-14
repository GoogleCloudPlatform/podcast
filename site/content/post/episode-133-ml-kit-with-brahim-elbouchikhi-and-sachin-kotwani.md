+++
audioDuration = "00:32:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.133.mp3"
audioSize = 46977043 
categories = ["Machine Learning", "Mobile"]
date = "2018-06-27"
image="/images/post/ML-Kit-for-Firebase.png"
description = "Brahim Elbouchikhi and Sachin Kotwani talk with Melanie and Mark about Firebase's ML Kit and how it enables machine learning on mobile and cloud apps. We delve into why ML Kit was developed, how it makes machine learning easier, what it's used for now and plans for the future."
draft = false
episodeNumber = 133
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "ML Kit with Brahim Elbouchikhi and Sachin Kotwani"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/1bDZUST28X9"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8uaszx/episode_133_ml_kit_with_brahim_elbouchikhi_and/"
+++

[Brahim Elbouchikhi](https://twitter.com/ielbouchikhi) and [Sachin Kotwani](https://twitter.com/skotwani) talk with [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) about Firebase's ML Kit and how it enables machine learning on mobile and cloud apps. We delve into why ML Kit was developed, how it makes machine learning easier, what it's used for now and plans for the future. 

<!--more-->

##### Sachin Kotwani

[Sachin Kotwani](https://twitter.com/skotwani) is a product manager with a special passion for making software development easy and fun. He has worked on several teams at Google, including Google Cloud, Play, and now Firebase. Before joining product management he worked worked as a strategy & ops manager in Google’s Sales organization, and prior to Google, he worked in finance at Amazon.

He holds an MBA from Carnegie Mellon University, and dual bachelor’s degrees in Business Management and Computer Science from the University of Missouri - Columbia.

His hobbies include traveling with his family, chasing his daughter around the house, and tinkering with mobile apps and backends.

##### Brahim Elbouchikhi

[Brahim Elbouchikhi](https://twitter.com/ielbouchikhi) is a Group Product Manager on the Android team. On Android, Brahim is responsible for developer and consumer facing ML products, including Camera and developer SDKs. Prior to Android, Brahim led Daydream’s software team.  Brahim was also a founding PM of the Google Play store where he led monetization, search, and discovery. Brahim holds an MBA from the Stanford Graduate School of Business and a BS in Computer Science and Engineering from UCLA. Brahim has also worked at Amazon and Deloitte in addition to starting a company in the past.

##### Cool things of the week

* Our 10th Doodle 4 Google winner is dino-mite [blog](https://blog.google/inside-google/doodles/our-10th-doodle-4-google-winner-dino-mite/)
* Google Podcasts now on Android [blog](https://blog.google/products/android/listen-google-podcasts-now-android/) 
* Machine Learning with TensorFlow on Google Cloud Platform Specialization [site](https://www.coursera.org/specializations/machine-learning-tensorflow-gcp)
* Introducing Cloud Dataflow’s new Streaming Engine [blog](https://cloud.google.com/blog/big-data/2018/06/introducing-cloud-dataflows-new-streaming-engine)
* ML Explorer: talking and listening with Google Cloud [blog](https://cloud.google.com/blog/big-data/2018/06/ml-explorer-talking-and-listening-with-google-cloud-using-cloud-speech-and-text-to-speech)
  - #131 Actions on Google with Mandy Chan [podcast](https://www.gcppodcast.com/post/episode-131-actions-on-google-with-mandy-chan/)

##### Interview

* ML Kit for Firebase [site](https://firebase.google.com/products/ml-kit/)
* TensorFlow Hub [site](https://www.tensorflow.org/hub/)
* TensorFlow Lite [site](https://www.tensorflow.org/mobile/tflite/)
* Federated Learning [document](https://ai.google/research/pubs/pub45648) and [blog](https://ai.googleblog.com/2017/04/federated-learning-collaborative.html)
* TensorFlow.js [site](https://js.tensorflow.org)

<div style="text-align: center">
  <a href="https://firebase.google.com/products/ml-kit/"><img src="/images/post/ML-Kit-for-Firebase.png" style="margin: auto; max-width: 40%;"></a>
</div>

##### Question of the week

What is a Developer Programs Engineer?

* Developer Programs Engineer — Say What!? [blog](https://medium.com/google-cloud/developer-programs-engineer-say-what-b12829729693)
* Franziska Hinkelmann [twitter](https://twitter.com/fhinkel)


##### Where can you find us next?

Mark is going to the [Unity Hackweek](https://blogs.unity3d.com/2018/06/22/hackweek-2018-the-unity-way/). Read how Google Cloud is teaming up with Unity for gaming [blog](https://blog.google/products/google-cloud/powering-up-connected-game-development-through-our-alliance-with-unity/)

Melanie is speaking at [Stanford AI4ALL](http://ai-4-all.org/) on June 28th.

We’ll both be at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf/)!

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 133 of the weekly Google Cloud Platform Podcast. I am Mark Mandel, and I'm here as always with my colleague, Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: I'm good. How are you doing, Mark? 

MARK: I'm very well-- very, very well. Unfortunately, we're not in the same place at the same time today, though. 

MELANIE: No, and this week, in particular, you're in Denmark. 

MARK: Yeah. When this comes out, I'll be in Denmark. 

MELANIE: So Mark, who do we have on the show this week? 

MARK: So today we have Brahim from the Android team and Sachin from the Firebase team coming to talk to us about ML Kit. I'm kind of excited about this. I love these packaged machine learning solutions. They make me a little excited because I can use them. 

MELANIE: And the previous week, we were even referencing that you know Hand Talk was looking forward to ML Kit. So this is good. 

MARK: Yeah. Good timing. Before we get stuck into that, though, we have our Cool Things of the Week. And then at the end, we'll have our Question of the Week. We're going to talk more about DevRel. We're going to about what is a developer programs engineer. 

MELANIE: Yes, we will. As you mentioned, Mark, we, as always, like to start out with the Cool Things of the Week. We actually wanted to note that our 10th Doodle 4 Google Winner is "dino-mite," as the blog says. 

MARK: Terrible puns. 

MELANIE: I know. It's horrible. Sarah Gomez-Lane apparently drew delightful dinosaurs that highlight her dream of becoming a paleontologist. So there's this really cute image that she did that's got dinosaurs on it, and I really kind of love it. And I know Aja, who's one of our teammates, would love this as well. 

MARK: Absolutely. And what I love about this as well is that for the first time in the Doodle 4 Google's 10 year history, the winner has the opportunity to actually turn their submission into an animated interactive doodle that will be featured on the Google homepage. So I, for one, am very much looking forward to seeing dinosaurs that are hand-drawn on the Google page. 

MELANIE: And apparently she's got a nice chunk of reward for the drawing as well to go towards a college scholarship, which is wonderful. So that's awesome. 

MARK: Yeah. I think that's great. One thing I wanted to highlight as well, as everyone in our audience is aficionados of podcasts, there is a new Google Podcast App that you can grab on Android that's available for you that you can get and download. We'll have a link in the show notes. It has some nice integrations with things like Google Home and all the Google fun stuff there. 

And I just figured I'd mention it, because, of course, you can now grab the Google Cloud Platform Podcast on there as well. And it has some nice features about being able to play in one place and pick up where you left off in others, and stuff like that. So I just thought podcast people would like podcast things. 

MELANIE: Another thing we wanted to mention is that there was another course that's been released between Google and Coursera around machine learning. We know there was a crash course that we mentioned a little while back, and there's apparently a new course out that's more for specializing in machine learning with an emphasis on TensorFlow. And so they have five specific focuses in the courses around how Google does machine learning in this specialization, launching into machine learning, what TensorFlow is, feature engineering, and the art and science of machine learning. And so-- yeah. You can find that on Coursera. 

MARK: Fancy. We have lots of new and interesting things today. So also introducing Cloud Data Flow has a new streaming engine, which is super nice. It basically has a bunch of different and interesting and useful performance enhancements for how to do streaming on data flow. 

What's super nice about it is basically if you want to try it, there is a new pipeline parameter. You can do --experiments=enable_streaming_engine. You don't have to change your code or anything like that. You can just basically turn it on. 

Eventually once this goes generally availability, it'll literally just switch on by default, and you'll just get new good stuff just because. But if you want to give it a go, make sure nothing breaks, see if the fixes worked for you, give it a go now and give it a shot. 

MELANIE: And the blog that we linked to includes a nice overview about how to think about pricing as well as where to get started. 

MARK: Yep. Absolutely. 

MELANIE: Last thing we wanted to mention is there's a blog post by Barrett Williams who has written about how to use the Cloud to Speech app as well as the Text to Speech app, and he does a nice overview explanation of how to implement these tools and what to do with them. 

MARK: Yeah. It's like a really nice sort of hello world of taking speech, turning it to text, then taking text and turning it to speech. He even touches on SSML in here too, which we talked about in a previous episode. 

MELANIE: Well, Mark. I think it's time that we go talk about ML Kit. 

MARK: Let's go do it. So recently at Google I/O, I got excited to see a new product announcement about ML Kit from Firebase. And today I'm pretty excited to have both Sachin Kotwani, Product Manager for Firebase, and Brahim "El-bou-cheen-ey?" 

[BUZZER] 

No, it's "El-bou-sheeny." 

[BUZZER] 

"El-bou-sheek-ey." There we go. Brahim Elbouchikh, a group product manager for Android, joining us today. 

BRAHIM: [LAUGHING] 

MARK: Yeah, I can't get names right. Thank you so much for joining us. [LAUGHING] Sachin, how are you doing today? 

SACHIN: Doing great. So glad to be here. 

MARK: Yeah. Brahim, how are you doing? 

BRAHIM: I'm doing great. [LAUGHING] 

MARK: Wonderful. Thank you so much for joining us. Before we get stuck into ML Kit, which I really want to do, do you want to tell us a little bit about who you are and what you do? Sachin, why don't you go first? 

SACHIN: Sure. So I've been at Google for a little over eight years. I've been a product manager for most of those, and I've been on the Google Play team where I first got the chance to work with Brahim. I also worked on the Cloud Platform Team on Developer Tools. And now over the past year, I've been on the Firebase team and I work on ML Kit now. 

MARK: Excellent. And Brahim? 

BRAHIM: Hey. Yeah. So I've been at Google for almost seven years, started off also on Google Play and Android. Then moved on to do some VR stuff at Daydream, and then for past year I've been leading a work on machine learning on Android. Now I spend a bunch of my time on ML Kit as well as other things like the Neural Networks API, for hardware acceleration, TensorFlow Lite and such. So yeah, lots of fun ML stuff. 

MELANIE: That's great. Well, so what is ML Kit? 

BRAHIM: So ML Kit is essentially Google's machine learning SDK available through Firebase, integrated deeply into Firebase. It offers a couple of capabilities. One is what we call base APIs. These are APIs that essentially allow you to do stuff. You get an input and you get an output. 

There is essentially as far as the developer is concerned, no machine learning involved. Google provides the machine learning models and makes them available through a simple API. So that's one set of things. 

And then the other aspect is essentially enabling developers to use their own custom models and making that as easy as possible. That is something that Sachin is deeply familiar with, so I'm going to maybe ask you to jump in and talk a bit about that, Sachin. 

SACHIN: Sure. Before I jump into that actually, I also wanted to talk about one cool thing about base APIs that I think is very interesting and different from what we've seen thus far in the space is that ML Kit offers APIs that run both on device or in Cloud. And depending on the functionality you want to use, some APIs are available to run fully on device. Some are only available in the Cloud, and some offer the option of using one or the other. 

And, of course, if you want to do something more powerful, the capabilities will be there in the cloud API. But if you want to do something locally, you could do that on device. 

Now for the custom models-- if you are an expert in machine learning, ML Kit first and foremost positions itself as a tool that makes it very easy to bring machine learning to your apps. But if you're already familiar with TensorFlow, creating your own models, you can also use ML Kit to deliver those models to your developers. And you would upload your custom model, and it would be seamlessly deployed to the user's device without them having to download anything manually. 

So that infrastructure piece is taken care of. We are just getting started there. There's a lot more to come in the near future. But that's an area that we are really passionate about as well. 

MARK: Just so we're 100% clear as well, I think you both said apps. Are we talking about this is machine learning for mobile devices? Is that kind of the market we're talking about right here? 

SACHIN: That's correct. 

MARK: OK, cool. So you said as well there's a bunch of built in ML Kit functionality that people don't have to build themselves. What is that functionality that's available? 

SACHIN: The ones that are there right now out of the box are text extraction, face detection, barcode recognition, image labeling, and landmark recognition. Those are the ones that are available today. And as you know, you probably recognize, they are mostly around vision-- for now. 

MELANIE: In terms of these APIs, how would they integrate with something that's like the APIs in the GCP environment, the Google Cloud Platform environment? 

SACHIN: That's a great question. So as I mentioned earlier, these APIs or these use cases are available both on device and Cloud. The ones that are available in Cloud are run on top of the Google Cloud Platform ML APIs. So they're using-- underlying it all as the same APIs for the Cloud version of it. 

MARK: This sounds really cool. Brahim, maybe you can talk to this because you seem to be on the Android side of things. What were the needs that you were seeing from customers who wanted to be able to do machine learning on mobile devices? 

BRAHIM: Once we start looking at this some time ago, we realized that, one is that apps are actually using machine learning on device. This isn't something that's entirely new. We actually came across a bunch of developers who have been able to do this. 

However, there were a lot of challenges. It was quite difficult, and that was for a number of reasons. One is building the model itself and the fact that you needed a lot of training data, and then you needed a lot of not only training data, but also the ability to create a mobile optimized model. That was quite challenging for developers. 

We met some app developers that had built their own run times on device just to execute tons of floor models. Because at the time, there weren't any available run times like TensorFlow Lite, which we have right now. So there were a lot of challenges when we looked out there that made machine learning on apps quite challenging, and we wanted to address a lot of those initially. 

So, for example, we came across apps that from a use case perspective that did, like, music learning. So basically you have an instrument. You're playing on an analog guitar like a real actual instrument, and the phone is recording what you're playing and trying to assess how well you're playing. 

Well, actually a lot of that is happening through on device machine learning models that are tuned to echo cancellation, to environment you're in, to the specific learning patterns you have. And then we talked to specific developers that do that. Like Yousician, for example, is an app that's on Android and iOS. 

We came across apps that help you manage what you eat and count your calorie intake. We came across fitness apps that try to track your movement, or apps that allow you to scan in content. So, for example, Evernote is using machine learning to allow you to take a picture of a whiteboard, and then it indexes what's in it and allow you to search for it later on. 

So one thing we quickly learned is that this stuff is useful. It's actually used by a few developers, but it's very challenging. It's way too challenging for it to become common use. 

And so our goal was to-- and then we repeated this across the launch of ML Kit-- make ML not so special. Right now, machine learning is, like, a special thing. You need lots of education. You need a lot of background. You need a lot of experience in math and other things like that to use it. 

But we wanted to just be actually just another toolkit that a developer has access to that they can solve specific problems with when they need them to. And so that was kind of the goal and the mission behind ML Kit from day one. 

So to summarize, yeah. We looked at. There were use cases for it. It was used in practice, but it was way too challenging. And so we wanted to address some of those things with ML Kit features that we have launched, and some that we are still launching in the next few months. 

MARK: This sounds awesome. I'm guessing I can probably picture what this looks like. And Sachin, maybe you can talk to this. So if I actually want to use ML Kit as a developer, I assume these are like baked into the Firebase SDKs? Is that how I would use them? What does this look like? 

SACHIN: That's correct. So depending on what capabilities you want to use, they're modularized in different Firebase SDKs. But just with a couple of lines in your build upgrader or your pod file, you can get this capability added. 

I must confess here when the team was building ML Kit, I was really looking forward to the experience as a developer, as a hacker myself, just to jump in and start using the APIs. And as I said, you just add a few lines to your build upgrade file depending on what APIs you want to use. And then once you have an image or a set of images, you can start calling those APIs on them. 

And you can have a prototype working. If it took me about 15 minutes to get working, I would expect the average listener of this podcast to do it much faster. As Brahim was saying, we wanted to make ML not so special and very easy to use. And that's what we've aimed to do with ML Kit, very simple to use APIs. 

MELANIE: Nice. 

MARK: That sounds great. And I know you also mentioned that this could be run both on the phone as well as in the Cloud. Is there any difference in capabilities between the two offerings there, or are they the same? Brahim, I see you nodding your head. Do you want to answer that question? 

BRAHIM: Yeah. Sure. I mean, I think the benefits of on device, there's always trade offs, obviously, like everything else in life. On device, what you get is the real time aspect. You don't need to upload a ton of data to the cloud, obviously, so it is-- it can be a privacy-sensitive approach to machine learning. 

And also it's actually free of charge. It runs on device, and so the API itself, the use of the API itself, is free to the developer. So those are some big points. 

But, of course, you also get limitations. On the Cloud, you have the power of GCP. You have the power of TPUs. You have essentially the ability to run and execute incredibly large models that give you more. 

So, for example, if you look at our image labeling API, which we have both the Cloud and an on-device variation of it, the Cloud variation has over 10,000 labels, meaning that it can tell you about 10,000 things about this image that you've submitted. The on-device one has little over 400. So you can do-- what we've seen developers do typically is do a course classification on device where they essentially look for interesting things. 

So let's say I am trying to classify an image, and I want to make sure that I only do the Cloud call if I see that there is some food in the image. So maybe I will actually-- or maybe plants or flowers. And so maybe I'll run the on device API, see if I get any keywords that I'm looking for, like flower or plant or something like that. And if I do, then I'm like, OK, I actually want to know specifically what kind of flower this is. So then I'm going to call the Google Cloud Platform API to then get the more fine-grained classification. 

And so we do things, these pairings. We see developers do this in a number of places. And we actually are also invested in making sure these transitions are even more seamless, and even in building use cases and journeys that are end-to-end built to be what we call hybrid. We have a bunch of exciting stuff coming up there in the future, but we see this as an increasingly common use case of relying on both Cloud and on device. 

MELANIE: I mean, I know you mentioned that a lot of APIs are geared towards more visual. What are some functionalities that-- or APIs that you would like to see, or you're seeing more of a need for from the different people that you work with? 

SACHIN: It's still early days, so we're still trying to gather that feedback and see what the requests are. But you can obviously imagine that some of the things that we're starting to talk about are speech, video. It follows closely after image. 

But, again, it's early days. We would love to hear from developers, from the listeners of the podcast if they have any suggestions of what they would like to see next. For now, I'd also like to add, and as Brahim said, this is an area that I'm passionate about-- we do have the capabilities for custom models. So if there are any specific capabilities that can be run in TensorFlow Lite models and developers would like to use those, they can deploy them immediately. 

They can upload their TensorFlow Lite models to ML Kit and start using them for on device inference. And, of course, there's always the GCP capabilities there for someone who wants to run a TensorFlow model in the cloud. You can interact with those as well. 

MELANIE: Are there any resources you'd recommend, especially around models that maybe somebody has done, custom models that others have done that are sharing them and open sourcing them? 

SACHIN: Yeah. That's a great question. TensorFlow has a website called TensorFlow Hub, and that's one of the things that they do is share snippets of code or pre-bundled modules that people can leverage to create their own models. And as for completed models goes, of course, the usual suspects apply. You can always look on GitHub or Hacker News or any of medium posts. There's a pretty active community out there building TensorFlow models. 

Now I'd like to call out that what ML Kit supports is TensorFlow Lite models. So you probably also want to visit the TensorFlow Lite website to see what models are already available in the TensorFlow Lite format, and how to go about converting TensorFlow models to TensorFlow Lite. 

MARK: Just out of curiosity, as well-- I was reading that just actually as we're seeing here. What's the difference there between TensorFlow and TensorFlow Lite, just so people have at least a broad understanding of what that difference is? 

BRAHIM: TensorFlow Lite is obviously like born out of TensorFlow. It's essentially an extension of TensorFlow. It is built with mobile in mind. And so effectively the runtime is much smaller. It goes from over a meg to about 200 kilobytes. The storage uses flat buffers so that the storage of the models is far more efficient and smaller. 

And it also has a more limited set of ops that have been optimized for mobile devices. Over time, the team is looking to expand the number of operators and also the number of capabilities that it has beyond just these operators. But we're very much taking-- start with what's most needed on mobile and then expand from there. 

TF Lite comes-- TensorFlow Lite-- with a set of tools that allow you to convert a model from TensorFlow to be TensorFlow Lite compatible. That can also be done in the Cloud through some of ML Kit's services, but it does come with an offline tool that can do that as well. And the team is continuing to release a bunch of cool stuff. 

So I'm really excited about the roadmap, too, around tools that allow you to compress models and things like quantization of models that allow you to have vastly more efficient mobile-centric models. So lots and lots and lots happening there, but yeah. It is essentially an extension of TensorFlow, and it was built from the ground up with performance and mobile in mind. 

I'm very mobile-centric, but the TensorFlow Lite team actually is-- they care a lot about things. Like, it's available on Raspberry Pi. It's available for-- they're working on IoT. They're working on tiny, tiny little sensors that can run the models. 

TensorFlow Lite is kind of TensorFlow beyond kind of server side. And so they cover a ton of different platforms, and they're pretty versatile. 

MARK: Cool. And just so I'm 100% clear as well, TensorFlow Lite models can only be run on device, or can it be both on device and in the Cloud? 

SACHIN: That's a great question. I don't know if anyone's ever-- we've never tried drawing a TensorFlow Lite model in the Cloud. 

MARK: [LAUGHING] I have no idea about machine learning, so I just ask silly questions. 

MELANIE: Yeah. You could run it in the Cloud. It's a computer. You run it in the Cloud. 

BRAHIM: You just wouldn't do it, because the point of it is that its far more limited. 

SACHIN: Yeah, I mean, you just wouldn't. 

MARK: I guess my point is you would build this specifically for running on device, and that's its purpose. So you would do that? OK. Got it. 

SACHIN: Absolutely. Yes. It's optimized for mobile, and that's what you would use it for. 

MELANIE: Well, great. What other things have we not covered around ML Kit, and how useful it is for those who are working on Android or working in IoT or looking at devices? What are some other tips and tricks that you'd recommend? 

BRAHIM: I have a couple of things that I think are quite important. One is that ML Kit is cross-platform, so it's actually iOS and Android. And this was really important for us. 

Someone who was on the Android team, one of the first things I asked my execs for is like, hey, we're going to need iOS engineers. And that's because when we talked to developers, they think of machine learning as a thing. They don't think of Android machine learning and iOS machine learning. 

And so it's very important that we offer a cross-platform solution, and we think that is actually one of the most compelling-- in addition to obviously the capabilities, et cetera, that's a very unique differentiator of ML Kit that we're excited about. That's number one. 

The other aspect I wanted to highlight is the fact that when we talk about making ML Kit not so special, one of the key things about that was that, hey, there are a bunch of traditional mobile challenges that developers care about, things like binary size and A/B testing and all this other stuff that had been essentially not impossible, but really hard for ML. So today, if, let's say, you wanted to A/B test two models, you really had to bundle two potentially 10 meg models each, and then you'd be stuck with them. 

You bundle them to the APK. You'll ship the APK. You'll do some offline testing, and you're stuck with those two models for the duration of your experiment. You cannot really iterate any faster than your APK release. 

And developers have been trying to solve these problems for a long time, and they've been solved for mobile. There's many, many platforms, most notably Firebase, which has things like remote config and A/B testing and GA, Google Analytics. And so we wanted to bring and solve some of these just mobile challenges for machine learning. 

And so a lot of the custom model stuff that we've built is around model deployment at a bend of an APK update, or using remote config to actually name the model and then retrieve the right model based on what experiment group you're in. So we made essentially experimenting with ML models literally a one line change in your app. And that's something that Sachin is really, really invested in and pushing the envelope further and further in that direction. 

But just I wanted to reiterate that as when we said we want ML to be not so special, we weren't just solving machine learning problems. We weren't just thinking about how to build the best and greatest models. We were also thinking about, hey, how do we solve stuff that developers are scared about, like APK size? 

And so I don't know. Sachin, do you want to get into the compression stuff from an APK size perspective? 

SACHIN: Yeah. So one of the things that I want to reiterate that Brahim was saying first was ML Kit doesn't exist in isolation within Firebase, right? There's a reason why it's there, because Firebase offers an additional very, very broad set of tools that are useful, and services that are useful for mobile developers. Remote config, analytics, and A/B testing are just a few examples. 

Within the ML Kit family itself, model compression and conversion adds a specific use case for TensorFlow model. So let's say you want to do image classification and you have a model that you have invested a lot of time and effort in. Perhaps you have a research team that optimizes them to make them work really well and to increase the precision, and now you want to get it working. 

On mobile, we have functionality that would convert the TensorFlow Lite-- not only convert it from TensorFlow to TensorFlow Lite, but also compress it to make sure that it runs efficiently and doesn't take too much storage space on the device. So that's one area that we are still actively working on. We are testing it with a few partners right now. 

We talked about Fishbrain in other forums as well. They took models that were several hundred megs in sizes and reduced them by a factor of 10 without losing much precision at all. And actually, I think in their particular case we were able to even increase it, which is great. So that's about compression and conversion. 

Another area that I'm really excited about-- and you folks asked about typical use cases that our developers and our early partners would use ML Kit for. One area that I'm really excited about is about what developers come up with, because machine learning is such a different paradigm from any other software development. You can download a library. You can add some UI. You can change a database, right? 

Those are common concepts that are great and still important, very much alive. But machine learning is so different from any of that, and it can provide such different capabilities. So that's one area that I'm really excited about is to see what new things developers build when it comes to these tools. 

MELANIE: Actually, just one thing I want to make sure I'm clear on. When you're talking about an ML Kit and running, especially custom models, all of this is from the inference side. Is ML Kit also geared to help people do training of models? 

BRAHIM: The short answer is not at the moment. There are lots of investments around on device learning. That's the one area that we're looking at. 

There's things around federated learning where it's-- Google published a paper on that about a year or two ago for those who are curious. A super, super cool paper to read. But yeah, nothing in the immediate-- currently that allows us to help with training. 

MELANIE: But it's something you guys have in your mind as what you're looking at? Yeah. 

BRAHIM: It's absolutely in our mind, and we know that Google Cloud is making investments in that area as well through AutoML and others. And so we're definitely working across Google to make that a reality in ML Kit. 

MARK: I got to ask a tough question. This sounds great for mobile, but Firebase supports the web. Are we going to get some JavaScript APIs for some of this stuff any time soon? 

SACHIN: [LAUGHING] 

MARK: [LAUGHING] 

SACHIN: Of course, the tough question goes to me. That's a great question and I want to get that question more and more. Because the more we get that question, the more it means that we should be working in that aspect. 

So for now, as I said, it works on Android and iOS. We are hearing from a few developers that they would like to see it in mobile, and I want to, as I said, keep hearing that. For now, if anyone wants to do machine learning on the web, I would point them to TensorFlow.js. There are obviously a lot of models that are open source and available and ready to use in TensorFlow format, so that's one way to go for now. 

MARK: Awesome. And anything that you want to talk about that's potentially exciting on the roadmap for ML Kit that people should keep an eye out for? 

SACHIN: Oh, man. There are so many exciting things, and I don't know if I can talk about any of them. Brahim is like looking at me like, do not say-- [LAUGHING] 

[ALL LAUGHING] 

BRAHIM: No. I mean, I think some of the stuff that-- one is obviously reiterating what we have in the market now. It's things like image labeling APIs is sometimes mind-boggling. Like, you have an API that, on-device, you give it an image. It tells you what's in it. That is super cool. 

MELANIE: Definitely. 

BRAHIM: We also are super excited about the new face contour API in a beta right now. We were testing with a few developers, so that's going to be super cool. And if you see it, you saw demo Sachin doing this at I/O. It's a now legendary GIF within the team. So that's going to be super exciting. And just look for us to kind of keep pushing. 

The promise we made to developers, quite publicly at I/O, is that we will be knocking on Google researchers' doors and asking them to bring their capabilities to developers in a nice to use, easy to use package. And we're continuing to do that behind the scenes. We're continuing to push for making Google's best machinery and technologies available to ML Kits, and that's a generic promise we're making. In terms of specifics, I think we'll have to leave it at what's coming now as a whitelist and all that good stuff. 

MELANIE: Well, thank you both again for coming on the podcast to talk to us about ML Kit. Just any additional last minute plugs or things you're speaking at, or resources you want to let people know about? 

SACHIN: Yeah. I would I would just really encourage everyone to give ML Kit a try. I, at least from the experience and the fun part of it and just getting up and running really quick and seeing results, it's a very, very rewarding experience. So I'd love for all of you to try it out, and to let us know what you think and what you would like to see next. We have quite a lot of things that we have in mind that we want to work on and deliver soon, but we also look forward to hearing from all of you to learn what things you'd like to see next. 

MARK: Fantastic. Well, thank you to both of you for coming and hanging out with us today. 

BRAHIM: All right. Well, just to close-- not to date this podcast, but it is the World Cup. And go Morocco. 

[CHEERING CLIP] 

We're going to beat Spain, Sachin's team, sometime next week. So look out for that. Go Morocco. 

SACHIN: We'll see. We'll see. We'll see. Vamos, España! 

MARK: Fantastic. 

MELANIE: Thank you. 

MARK: Thanks. 

BRAHIM: All right. 

SACHIN: Bye. 

MELANIE: Thanks again, Brahim and Sachin, for coming on the podcast to talk with us about ML Kit. It was good to get that overview and understand what these tools are, what the tool is, and how to use it. 

MARK: Yeah, absolutely. 

MELANIE: So Mark? 

MARK: Yes. 

MELANIE: What is a Developer Program's Engineer? 

MARK: Well, I'm not going to try to explain this, because I'm a developer advocate. 

MELANIE: So you don't know anything about that as a developer advocate? 

MARK: [LAUGHING] Well, no. I was going to say, I'm a developer advocate. Developer Program Engineers, at least in Google Cloud, sit in the same organization as we do, so we have developer relations. You want to go listen to the episode with Mandy, definitely do. 

And so DPEs, or Developer Program Engineers, sit next to us. We're peers, I think is a nice way to put it. 

MELANIE: We hang out. 

MARK: And there's a really great-- we hang out. We totally hang out. We all sit together, which is lovely. 

And I'm going to hope I don't absolutely massacre their name. There's a great article from Franziska Hinklemann, who is the DPE at Google Cloud Platform, apparently doing a lot of Node.js stuff. And they write a really great article about-- basically, they explain how they're engineers in developer relations, and they sit at the intersection of developer advocacy, technical writing, product management, and engineering. 

And so they do a very similar role, I feel, to what we do as developer advocates with interacting with the community. But they definitely do it in a very interesting way. I feel like personally from my perspective from the outside, they do it from almost a very code perspective, which I think is really cool. And they definitely do some really cool things. It's well worth the read. 

MELANIE: Yeah. And we did a podcast on data science a few weeks back, and Michelle Casbon, who was on the podcast-- actually, she's a DPE. So agreed. They have a nice intersection into the DevRel space. And agreed, it's a good read. 

Mark, where are you going to be? Where are you this week? 

MARK: Where am I this week? So we mentioned previously that I am going to be in Denmark. So last week on the podcast-- if you were all listening and I'm sure you were-- we mentioned very briefly the Unity announcement. So we announced that there's a strategic alliance between Unity and Google Cloud Platform now, which I'm particularly excited about working in the game space. So definitely stay tuned to what's happening there. There's a lot of really cool stuff going on there. 

So basically what I'm doing this week is I'm actually going up to Denmark to participate in Unity's internal hack week. So they have a week long R&D week away. I feel like it's like summer camp. I kind of feel like it's-- I'm going to summer camp. I'm going to go meet a whole bunch of new people that I've never met before, but once I leave I'm going to be friends with everybody. 

MELANIE: Aw. That sounds fun. 

MARK: Yeah. Kind of that's it. But it's a big R&D week. So I'm going to go down there and hang out with them, and hack on a bunch of stuff. It's going to be really fun. 

MELANIE: Well, good. And then come back and you'll have jet lag. 

MARK: I'll have jet lag. 

MELANIE: Which will be lovely. 

MARK: Exactly. What are you up to? 

MELANIE: Great question. So this week, and specifically tomorrow, I'm going to be speaking to a group of students who are participating in AI For All. And AI For All is a nonprofit working to increase diversity and inclusion in artificial intelligence. 

MARK: Nice. 

MELANIE: And this is based out of Stanford. 

MARK: Cool. 

MELANIE: So yeah. That will be tomorrow. 

MARK: Excellent. All right. Oh, we should make a mention that we'll both be at Cloud Next. We should probably talk about that. 

MELANIE: Yeah. Next is coming up. I haven't even checked, but tickets are still on sale, I think? Let's find out. 

Yes. You should come and check it out, July 24 through 26. Tickets are on sale now. We can include that link in the show notes. 

But yeah. We'll be at Next. We'll be interviewing a bunch of people at Next. So if you are going to be there, come by and say hi. 

MARK: Definitely come by and say hi. I'll be there. I'm speaking about Agones, which will be lots and lots of fun. But yeah, we'll be doing daily episodes as well while we're at Next. So expect lots of good content. And if you're there, maybe swing past, see if there's a little slot for you to come hang out and do a little quick interview. 

MELANIE: We may also have a few things to give out, so you should definitely come check us out. 

MARK: That's true. That is true. 

MELANIE: All right. Mark, I think that's it for us for this week. 

MARK: Yeah. So thanks again for joining me for another week on the podcast, Melanie. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]