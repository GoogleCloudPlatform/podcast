+++
audioDuration = "00:32:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.91.mp3"
audioSize = 46892924
categories = ["Machine Learning"]
date = "2017-08-23T01:07:49Z"
description = "In this week’s episode Mark and Francesc are joined by Amit Pande, Product Management Leader for Google Cloud to discuss how machine learning can automate the media and entertainment industry."
draft = false
episodeNumber = 91
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "The Future of Media with Machine Learning with Amit Pande"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/LNkSjHXNQ5x"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6vljg4/episode_91_the_future_of_media_with_machine/"
+++

In this week's episode [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) are joined
by [Amit Pande](https://twitter.com/amitpande_2000), Product Management Leader for Google Cloud to discuss how 
machine learning can automate the media and entertainment industry.

<!--more-->

##### About Amit Pande

[Amit Pande](https://twitter.com/amitpande_2000) is a Product Management Leader for Google Cloud. In this role, Amit is responsible for working closely with leaders across Media and Entertainment Industry to help them envision and transform their business with Google Cloud, Big Data and Machine Learning. Amit is a veteran product manager with 6 years of experience leading several successful products across Google Search, Ads and Google Play product areas. 
Prior to joining Google, Amit worked in various product and engineering leadership roles at Microsoft for 8 years including on Xbox Video and Music. 
Amit holds a masters degree in Computer Science from University of Southern California. He lives in San Francisco with his wife. 

##### Cool things of the week

- Cloud Speech API improves longform audio recognition and adds 30 new language variants [blog](https://cloudplatform.googleblog.com/2017/08/Cloud-Speech-API-improves-longform-audio-recognition-and-adds-30-new-language-variants.html)
- Guide to common Cloud Dataflow use-case patterns [part 1](https://cloud.google.com/blog/big-data/2017/06/guide-to-common-cloud-dataflow-use-case-patterns-part-1) [part 2](https://cloud.google.com/blog/big-data/2017/08/guide-to-common-cloud-dataflow-use-case-patterns-part-2)
- How to build a conversational app using Cloud Machine Learning APIs [part 1](https://cloudplatform.googleblog.com/2017/07/how-to-build-a-conversational-app-that-sees-listens-talks-and-translates-using-Cloud-Machine-Learning-APIs-part-1.html) [part 2](https://cloudplatform.googleblog.com/2017/08/how-to-build-a-conversational-app-using-Cloud-Machine-Learning-APIs-Part-2.html)

##### Interview

- Cloud Media [solutions](https://cloud.google.com/solutions/media/)
- Cloud CDN [site](https://cloud.google.com/cdn/) [docs](https://cloud.google.com/cdn/docs/)
- Cloud AI [products](https://cloud.google.com/products/machine-learning/)
- Tensorflow [site](https://www.tensorflow.org/)
- Cloud Machine Learning Engine [site](https://cloud.google.com/ml-engine/) [docs](https://cloud.google.com/ml-engine/docs/)
- Cloud Natural Language API [site](https://cloud.google.com/natural-language/) [docs](https://cloud.google.com/natural-language/docs/)
- Cloud Speech API [site](https://cloud.google.com/speech/) [docs](https://cloud.google.com/speech/docs/)
- Cloud Video Intelligence API [site](https://cloud.google.com/video-intelligence/) [docs](https://cloud.google.com/video-intelligence/docs/)
- [IBC 2017](https://show.ibc.org/) in Amsterdam - Sept 14th - 18th, 2017
- [MACHINE INTELLIGENCE COMES TO CONTENT CREATION](http://www.etcenter.org/digital-town-square-3/) - Organized by ETC in LA on Sept 27, 2017

##### Question of the week

We have a new answer to the question from last week!

Is there a way to access and administer Kubernetes from my phone? Thanks to [Dylan Graham](https://twitter.com/plusplusdylan/status/898167046566846464) for a great answer!

- Cabin [github](https://github.com/bitnami/cabin) [android](https://play.google.com/store/apps/details?id=com.skippbox.cabin ) [iOS](https://itunes.apple.com/us/app/cabin-manage-kubernetes-applications/id1137054392?mt=8)

##### Where can you find us next?

Francesc will be presenting at [Google Cloud Summit in Sydney](https://cloudplatformonline.com/Summit-Sydney-2017.html) in September, [Velocity London](https://conferences.oreilly.com/velocity/vl-eu) 
in October, [dotGo](https://www.dotgo.eu/) in Paris and [Gophercon Brazil](https://2017.gopherconbr.org/), in November. 

Mark is will be presenting at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.
He'll then be speaking at [Gameacon](http://www.gameaconvegas.com/) and [Austin Game Conference](http://austingamecon.com/) and attending [Strangeloop](https://www.thestrangeloop.com/) once he's done with all that.

{{< transcript "FRANCESC: Hi, and welcome to episode number 91 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing? " >}}

MARK: I am awake and moving. How are you doing? 

FRANCESC: I am moving. 

[LAUGHTER] 

The awake part not-- I, mean I've had three coffees. Just came back from long holidays, and I'm very, very highly jet-lagged. But other than that, very excited because we have an episode about some really cool stuff. 

MARK: Yeah. 

FRANCESC: We're going to be talking about the future of media with machine learning, so basically how machine learning can make media, like TV, video games, all kind of streaming, more engaging, more like just cooler in general. 

MARK: Yeah. 

FRANCESC: Yeah, and by definition, that's cool. 

MARK: No, it is super cool. Amit Pande is coming to join us, super excited to have him on the podcast. And then after that, we have our Question of the Week, where we're actually going to return to last week's question, talking about accessing Kubernetes clusters for mobile phones. 

FRANCESC: Because we got two people pointing us to some really cool stuff. It's a really, really cool way of accessing your Kubernetes clusters from mobile. And we'll discuss that. It is amazing. 

MARK: It's pretty awesome. 

FRANCESC: It is really cool. But before that, we have, as always, our Cool Things of the Week. 

MARK: Yep. 

FRANCESC: And the first one is about Google Cloud Speech API. And there's a bunch of new things in the latest release. One of the coolest things is there's this new feature. It's word-level timestamps, which basically means that now you're able to know not only what is said in an audio file, but also at what point in that audio file those words were said. 

So basically, if you have something like this podcast, and you send it, now you could be like, oh, OK, so at what point do we actually say podcast? And you would be able to say, well, that was at the beginning in minute one and then whatever. So basically what I was thinking is that you could use this to make like a karaoke. 

MARK: You could automate karaoke. 

FRANCESC: Yes, automated karaoke. You could do podcast karaoke, "podcastoke." 

MARK: Oh, "podcastoke," yeah. We should do that, have VC funding, definitely. 

FRANCESC: Yeah. Another cool thing is that until now, the audio files that you were able to upload were up to 80 minutes. Now it's three hours. And if you want to make them even longer, you can. You need to submit code extension. But it's definitely doable. And we support a massive amount of languages. 

We added 30 new language varieties. Among them there's Bengali. There's Latvian and Swahili and many others. So check it out. Very, very excited about it. I think I'm going to start playing with Cloud Speech API again after this. 

MARK: Nice. For our second cool thing of the week, possibly less shiny and pretty, but definitely probably more practical, if you're a user of Dataflow, we had started a series back in June talking about guide to common data flow use case patterns. So doing things like pushing data to multiple storage locations or interacting with, say, look-up caches, things like that. There are common patterns that we just released the second part of that-- we'll link to both of them actually-- where we have a few more patterns, grouping by multiple data properties, stream mode to like large look-up tables, all sorts of other stuff. So if you work with Dataflow and you deal with streaming data and you want to see some common patterns about how to solve some common problems, this series might well be for you. 

FRANCESC: Yeah, it comes with what they say pseudo code, but it's clearly Java. 

MARK: Yeah. 

[LAUGHTER] 

FRANCESC: So you can definitely check it out and have a very good idea not only of what that pattern looks like, but actually how to implement it in your source code, if you decide that's a good one. 

MARK: Yep. And then finally, it's another series actually, which is super cool, talking about using cloud machine learning to build conversational APIs. So basically, if you want to build sort of chat bots or things that you can talk to, which are definitely very cool right now and very, very-- I don't to say the word hip. I feel old if I say hip. 

[LAUGHTER] 

FRANCESC: It's hip though. 

MARK: It is hip. Looking at a variety of technologies from using our Cloud Speech API, Translate APIs, and now with part two of this blog series, we look at how you can integrate Cloud Functions into this to be able to provide some logic as well into what's going on. 

FRANCESC: Cool. There's also a little video that I'll watch later because it shows how to build a [INAUDIBLE] that sees, listens, talks, and translates Chinese. And I'm learning Mandarin. So it looks like an interesting thing to do. 

MARK: Excellent. 

FRANCESC: And that way maybe I'll be able to fake it, like I actually speak it. 

MARK: You just needed a little one of those things in your ear and one of these. And then as people talk to you-- 

FRANCESC: It's the future. 

MARK: --it translates in real time, like "Star Trek." 

FRANCESC: Anyway, I think that that's enough cool things of the week for today. So let's go and talk to Amit Pande. 

MARK: Sounds great to me. Today I am excited to have Amit Pande joining us today, product manager. Amit, how are you doing today? 

AMIT: I'm doing good. How are you? 

MARK: Very, very well. We're here to talk about something really cool. I saw your presentation at the Cloud Summit in New York all about machine learning and broadcasting. So I really wanted to talk to you about that on the podcast. But before we get stuck into that, why don't you tell us a little bit about yourself and what you do here at Google. 

AMIT: Sure. I'm Amit Pande. I'm a product manager on Google Cloud. My role is to work closely with leaders across media and entertainment industry to help them envision and then design and transform their business with using Google Cloud, big data, and machine learning. 

FRANCESC: Cool. So you said media and entertainment. I have heard about DevOps. 

[LAUGHTER] 

But what is media and entertainment? What does that entail exactly? 

AMIT: So media and entertainment includes products and solutions for broadcast, for digital publishing, for gaming, and then on the entertainment side, both production and post-production. 

FRANCESC: Cool. When you say a video game, do you mean like the video game playing or video game when people watch video games or both? 

AMIT: Both. 

FRANCESC: Cool. So let's talk a little bit more about what this actually entails related to Google Cloud Platform. What does Google Cloud Platform have to do with these industries? 

AMIT: Yes, so let's take an example. For broadcast industry, if you have a fully managed end-to-end service with support and SLAs, all the way from getting your live signal to being able to distribute that live signal to the end users and then being able to help you better monetize. We are providing products and solutions for each of those steps in your supply chain. Similarly, we have products and solutions for some of the other verticals inside media and entertainment. 

MARK: So what would that actually look like from, say, a customer point of view? Like, say if I'm watching TV, I may not notice it. But what would be, say, something that might be happening behind the scenes to a broadcast that I might be watching? 

AMIT: So from a consumer perspective, all the way from, say there's a typical Super Bowl game that is being broadcasted. We capture that signal on the broadcaster's on-site premise, upload it to Google Cloud, transcode it in all the different versions for you to be able to consume on your mobile, on your Apple TV, or on your Roku, or your connected devices, and then being able to distribute that through Google's cloud distribution network, as well as third-party distribution networks so that you' have a seamless experience when you're watching this content online. 

FRANCESC: Cool. So I've been working lately with a bunch of Go Meetups to be able to do live streaming, which is like YouTube Live and stuff like that. So I guess that what you're talking about is basically the same idea of YouTube Live, but without having to YouTube involved. So it's like the whole infrastructure is run by Google, and you can [INAUDIBLE] anything? 

AMIT: Yeah, exactly. So it's, in fact, using the similar infrastructure as what YouTube is using but providing that as infrastructure as a service to third-party broadcasters, like all of the large TV networks out there. And it can be used for streaming live events. It can be used for just creating your own live channel, as well as being able to distribute your video-on-demand assets. 

FRANCESC: So maybe the answer is no, but can you talk a little bit about who is doing this? 

AMIT: So we have a lot of large customers out there. For example, we had a very recent presentation at Google Next in New York, and Univision were sharing the stage with us, talking about their journey of moving from on-prem to Google Cloud infrastructure. And we have a lot more customers that are using our service. 

MARK: Awesome. Well, I guess I'm going to ask maybe the obvious question. We are a company that tends to be known for our machine learning type stuff. Is this somewhere we also apply machine learning, or are we just in the streaming business? 

AMIT: No, absolutely. In fact, even when we think about how machine learning can help transform your media and entertainment business, we almost think about three buckets. We think machine learning can help you innovate and build those next generation experiences. It can help you better monetize your content, and it can help you to reduce your operational cost, while delivering your content at global scale. 

FRANCESC: How? 

[LAUGHTER] 

MARK: Yeah, I was going to say, you say innovate. Like, what does that mean? 

FRANCESC: Yeah. 

[LAUGHTER] 

AMIT: Yeah, so let's take a typical supply chain for content business [INAUDIBLE]. Let's take the creative process of content creation. We can apply machine learning to help you determine exact clips and automatically generate highlights for your content using machine learning. 

Let's take another example, content recommendation. That's been around for a very long time. And traditionally content recommendation was based on content metadata. We can use machine learning to actually understand what's happening inside your video and help you find visually similar videos that you can recommend. So it can be another signal that can feed into your content recommendation system. 

Another example is machine learning can automatically micro-segment your content and analyze and draw insights for each of the segments of your content. If you had a TV show and you wanted to understand which actors are drawing more audience or which scenes are seeing higher engagement, with machine learning, now you have the ability to both combine your audience retention data and the deeper segmentation of your content to draw these kind of insights. 

FRANCESC: This made me think about that-- I think it was IVM they did this research, where they created a movie trailer from the movie directly using AI. Is this the kind of thing we're talking about? 

AMIT: Yeah, absolutely, all the way from being able to create trailers to being able to create automatic highlights or previous, correct? So let's take an example, correct? You're probably familiar with the "Chopped" cooking game show. ML can combine all of the signals, correct? Like, it can automatically segment your video. 

It can annotate each of the segments inside your video, rank the segments based on your audience engagement data. And it can help identify things, like where is the start, where is the middle and end. And not only that, it can also start looking at like background audio to understand where those interesting moments are happening inside your game show. And then using all of this, like, as a user, if you come in and it's like, I only have three minutes, and I want a quick highlight, we can generate that highlight on demand, correct? 

So it's almost helping you consume your content on demand based on your requirements, similarly for the games, correct? Like, you might be-- there's a game yesterday, and I want to see a highlight for yesterday's game for this particular player, correct? 

MARK: So I'm curious. The stuff you're kind of talking about seems to be sort of possibly like after the fact or, like, post-processing. Is there stuff that we apply that happens, like, during a live stream that can interact or change maybe, I don't know, camera direction, or I don't know. Is there crazy stuff that can happen in-flow? 

AMIT: Yeah, so there is also applications for machine learning where I have seen people using machine learning to be able to use one camera to record an entire game. So this is actually on the content creation side, where they are following the activity on the field to understand wherever the activity is, they're actually moving the camera itself to be able to follow that activity. So that's an example where it is actually happening on the creation side. 

It can also-- you can imagine, as viewers are watching, they may be like, I want to be able to view this particular player's perspective on the field. And every person would want a different one, correct? Again, machine learning can help identify, as well as help you generate that personalized string use that you can connect with the users. 

FRANCESC: So I guess that that is pretty hard In Real Life, IRL. 

[LAUGHTER] 

Cool. So I love the things that you were talking about, specifically about the part where you were able to understand the video and then create, maybe, like, highlights or whatever. That sounds a lot like the kind of machine learning skills that the Vision Intelligence API has, right? So I feel like that moves a little bit into, OK, so that sounds really fun. How do I do it as a developer? What are the different APIs or the different products that I can use in order to create such an experience? 

AMIT: Yeah, so on the machine learning side, actually we have a full spectrum. We have TensorFlow for you to be able to build your own models. We also have Google Cloud Machine Learning Engine, which is a managed end-to-end service that you can use to analyze your data and build your own models. And then we have readily available APIs which are trained on Google's data that you can use to integrate into your application. 

So all the way from Natural Language Understanding APIs to converting your speech to text to translating text and also, most importantly for media, understanding your images and videos. So specifically, we have two APIs. One is our Google Cloud Vision API, that helps you understand structural entities inside your images, and Google Cloud Video API, which help you take a video, segment it into shots, and detect labels in the shots that can then be used for things like search and recommendations and ultimately for generating things like highlights or driving better monetization of your content. 

FRANCESC: Nice. For those that are curious, I like to do like back references to other episodes. We did an episode on TensorFlow, episode 31 with Eli Bixby. We did an episode on Cloud Machine Learning, episode 71 with [INAUDIBLE], and also an episode with Sy Robinson about Cloud Video Intelligence API. So if you want to know more about these APIs, check it out. 

MARK: So I'll ask an interesting question, too. So I mean, this all sounds super, super cool and crazy and wonderful. Does this mean that using this technology we're removing humans from the application? Or like is this replacing that, or is that is this a tool that people can use in conjunction? Or how do you see this fitting in the wider spectrum there? 

AMIT: I think, from my perspective, when I think about machine learning, a very good example is self-driving cars, correct? Like, we want to get to that autonomous driving cars, and we are probably five years out from that. But meanwhile, we're building out these steps towards having a fully autonomous car, which are today assistive steps. 

So similarly, when I think about machine learning, it's starting in that assistive step. And then gradually it's going to learn and learn, so that it gets better. And probably at some stage, it fully automates the steps that it's being applied to. I also feel over time the way we do our processes, they will change, and you'll probably be able to do it more efficiently at lower cost. You'll probably be able to delight your customers with better experiences, and the roles of humans will change from doing repetitive tasks to actually analyzing that data and using the machines more intelligently to be able to perform the tasks. 

MARK: So if you're looking at something like speech to text, like doing closed captioning, you might use something like our Speech To Text API. But then the human might be just verifying, making sure that's all correct, something like that. 

AMIT: Yeah, that's actually a very good point. So I believe because of where the technology is right now, a lot of these technologies will benefit when you combine machine learning with humans. So if you take the output of speech to text and combine it with an edit tool, where you can both quickly review and edit in any changes you make, those actually feed back into the machine learning model. It will significantly improve the precision and recall that you see for future results of that API. 

So I think that's one of the key areas I want to highlight is as you're thinking about using machine learning, always think about how can I train the models on content-specific data? And how can I use a feedback mechanism to further improve the precision and recall of the machine learning APIs or the results of my machine learning model? 

MARK: Are their feedback mechanisms for something like text to speech or Cloud Vision API? 

AMIT: So right now, the public API actually won't allow that. But you can imagine building your own custom model that further allows you to feed that back. And we are looking at options for enabling, such that we can continue to help you improve your quality. 

FRANCESC: I'm thinking that we should try as a demo to do it on our own transcripts. 

MARK: We should. 

FRANCESC: Yeah, that'd be fun. 

MARK: So we could actually do it. So we automate our transcripts through a third-party service. And then we could do it through Speech API and compare the results. 

FRANCESC: And compare it, yeah. That would be really interesting. 

AMIT: We also have a practical application, correct? YouTube also allows you to automatically generate closed captions. 

FRANCESC: Oh, yes, that works so well. 

AMIT: And there's similar technology that we are bringing to Google Cloud as part of the APIs, correct? So all of that data which is training is going to help power the APIs that you're using. 

FRANCESC: So I publish a bunch of videos. I have a YouTube channel. And one of the coolest things of posting on YouTube is that you get the closed caption and then also the automatic translations to a bunch of languages-- 

AMIT: Exactly. 

FRANCESC: --which is very useful for people that do not understand English. Is that something that we can do real time on our live stream, for instance? Or are we still not there? 

AMIT: I think right now we're obviously not there. But I do foresee that in the next 6 to 12 months, the technology will get to a point where we will start applying this to real time. There are some tricks available, where you can pre-train your models on content-specific-- like, for instance, if you a sporting game, which is where you probably care about being real time, you can train the model specifically for that context. And then the real-time outputs would be pretty good in terms of quality here, to the level that that is acceptable from close captioning. So there are some tricks available to being able to apply almost in real time and getting the results to the quality level that that matches your expectation. 

FRANCESC: Cool. So we've been talking a little bit about how to make the broadcasting experience and the process itself more pleasant, I'd say, or more automated, better experience. But you also mention monetization, money. I like that. How do you apply machine learning for profit? How do you make money out of this? 

AMIT: Yeah, so one of the things machine learning can do is it can understand your video, and it can help you find those specific moments in the video where there are commercial intents, correct? So it can annotate it with products and labels and brands that the users are talking about in your video itself. And it can also help you figure out exactly how many ads should you show? 

So today, in most cases, if you're watching your content, you probably have a pre-determined number of ads, like maybe three ads or four ads that you've come up with. And generally that is a client-side logic. We can combine that with server-side logic and a learning algorithm that says, for this particular user, if I show a fourth ad, he will likely drop off. But for another user, maybe showing two ads, is that an optimal number? And the duration of those ads as well, correct? 

Like, we're already starting to see, correct, the 30-second ads. There's huge buzz in the industry around bumper ads, correct, the six-second ads, correct? What is the right length of the ad for the user? And that can be personalized. 

So the ad itself being shown, based on the content, the number of ads being shown, and the length of the ad itself, each of those we can innovate using machine learning. For instance, you could show like a brand ad, correct? And when shown at the right moment, there's clear data in the industry that shows they will perform significantly better than showing regular ads. 

FRANCESC: So I'm imagining that, for instance, we have AdSense, right? And AdSense, basically what it does is when you add it to a web page, according to the content of the web page, it shows you ads that are related to it. Because if you're within that, probably you're interested in those things. Is that what you're saying, that if I'm watching a TV-- I'm watching, I don't know, like "Modern Family," and at some point I see, like, a car, then they're going to be like, oh, by the way, you can buy this car here? 

AMIT: Exactly. Correct. So you might be watching a travel channel, and it's talking about this destination. And you see an ad right at that moment from your current destination to being able to travel to this destination. There are flight tickets available for xx-price. You're likely to convert on that versus a completely random ad being shown at that moment. 

MARK: Could you also customize the ad as well, like change how the ad experience is for that customer on the fly and do fun stuff that way too? 

AMIT: Yeah, that that's exactly some of the very exciting stuff, when I was talking about earlier in terms of applying machine learning to the creative process. You can think about all of this analysis that we're trying and being able to, on the fly, being able to generate these dynamic creatives, which are personalized to the user. And in fact, I believe there's this next wave that is going to happen to add creatives, where instead of just creating a small number of video ad creatives that that target 100% of the users, you will generate a lot more of those. 

And then with machine learning, you will be able to slice and connect it with the right users at the right moment. And there is this interesting stuff happening in this space, all the way from being able to take your base video creative and then overlaying with context-specific personalized information, like the travel example I gave you, to products being overlaid and then connecting those with the user. So again, very exciting space. And I think machine learning is definitely going to transform the way we watch ads and the number of ads and the quality of the ads that we view. 

FRANCESC: I Have a completely ridiculous question. So I was thinking about how machine learning is getting to a point where it's also able to generate new content. Like, Deep Dream is a very cool example, where you give it an image, and it creates something surrealistic, like super cool art and stuff like that. Do you thing that in like, I don't know, like 10 to 20 years, we'll be able to see videos generated directly, completely by machine learning? 

AMIT: I think over time we built probably maybe in five to seven years. 

FRANCESC: Oh, wow, five to seven, wow. 

AMIT: This is probably the self-driving car space, where I think the step one in that process is going to use data to assist with the creative process of content creation. And then over time, you can imagine that you have-- say you have raw footage of whatever, 30 hours of raw footage, correct? A very good example, which makes this a little real, is reality TV show, correct? 

They have like 10 cameras and 24-by-7 shooting, correct? So there's a lot of content, and you need to condense down to like 30 minutes or 40 minutes of what people are going to watch, correct? And there's no perfect answer of what's right there, correct? And you can imagine machine learning kind of combining and learning from user preferences and taste to actually finding out these are the actors you're interested in. 

These are the kind of semantic moments that appeal to you, correct? And using that to take your raw footage and summarizing it down to 30 minutes that you're interested. So that's the extreme example, correct? Obviously, would it be able to generate this perfect episode of "House of Cards" for me, correct? Like, I mean, we are definitely far from that, correct? 

But you can start thinking about applying it to things like ad creatives, and then maybe taking content where it's already being stitched together, correct? And there's a lot of raw footage that you need to condense down to. Maybe games is another example, correct, where you want to see a personalized version of the game, where you're like, I'm interested in touchdowns. And I'm interested in this player, correct? 

You can codify the user intentions, correct? That's probably the start of this creative process. And then over time, I think it'll be more of this data being available. And as we learn, we'll be able to apply that to more and more content types. 

FRANCESC: Cool. 

MARK: I mean, we already see that now in the consumer space. I mean, I get notifications from Google Photos saying, hey, we saw that you were in this place, and here's a montage of the thing you were seeing. Or like we could do similar things with like home videos, that kind of stuff. 

FRANCESC: And those tend to be actually pretty good. 

MARK: They're usually really good, yeah. 

FRANCESC: Yeah. 

AMIT: And exactly. That is the same technology that I'm talking about, correct? Like, Google as state-of-the-art content summarization, ability to understand those interesting moments, correct? And we can start building more of these models based on user preferences and tastes for you to really be able to innovate in the space. 

MARK: So this all sounds awesome. If people want to learn more about this, obviously we've talked about some of the Cloud Vision API, the text to speech. Is there anything around, like, learning how to apply TensorFlow to video or anything like that you would recommend as a resource that people could potentially go to? 

AMIT: So I think the best bet is to be able to follow the TensorFlow documentation. And then on the API side, it's definitely look at the Cloud Vision and the Cloud Video Intelligence API to get you started. 

FRANCESC: I also would recommend something. We talked about Kaggle. And I think that if you want to do, like, TensorFlow with video, Kaggle had these YouTube 8 Million contest, which it's an amazing data set. So that would be a good place to start. 

AMIT: Yeah, that's absolutely right, correct? Like, being able to have that huge amount of data set to be able to train will be huge. 

FRANCESC: And it's there, so-- 

MARK: It's there, and it's free. 

FRANCESC: --how fun? Yep. 

[LAUGHTER] 

MARK: Awesome. All right, well, we are running out of time. So is there anything else you want to make sure you mention, any events or anything you want to plug before we wrap up the episode today? 

AMIT: Yeah, so if you're in Europe, we are going to be at IBC in mid-September in Amsterdam. So please feel free to join our booth. I'm going to be there, so happy to answer any questions. We also have another event happening in Los Angeles in late September, which is focused on machine learning and content creation. If you're interested, please reach out to me. 

MARK: Awesome. Well, Amit, thank you so much for coming and joining us on the podcast today. 

AMIT: Thank you, everybody. 

FRANCESC: Thanks so much to Amit Pande for such an interesting interview. I did not know that you could do so many cool things, like not only automating things with machine learning, but actually making the content you're creating even more engaging. Super cool. 

MARK: Yeah, no, super love this. I think this is a really exciting time for broadcast across a variety of platforms, across sports, e-sports, even live television. There's so much cool stuff that can happen here. 

FRANCESC: When you say e-sports, it's like video games, right? 

MARK: Yeah. 

FRANCESC: OK, cool. 

MARK: Yeah, everything from [INAUDIBLE] to video games. 

[LAUGHTER] 

FRANCESC: E-sports, I like it. I do e-sports, too. I play "Zelda." Cool. 

[LAUGHTER] 

MARK: That's not quite right, but it's fine. 

[LAUGHTER] 

FRANCESC: I do not care. That is my opinion. OK, so, let's go with our Question of the Week. So our Question of the Week this week comes from actually last week. It comes from [? Itamar ?] [? Ostrischer, ?] and I might be mispronouncing the name. I'm sorry for that. 

But he asked us last week how to access a Kubernetes cluster from a mobile phone while he's on the go. And we said that there was a bunch of different ways of doing it, but none of them was actually that convincing, that good. And we said, you know, it's a pity that there's no better way to do it. But it turns out we have a very engaged audience, and they were like, actually, there's an amazing way of doing it. And we're going to be talking about that today. 

MARK: Yeah, so we got a tweet, which was awesome, from someone named Dylan Graham. Dylan, hi. 

FRANCESC: --@++Dylan on Twitter. 

MARK: Thank you, Dylan. Yes, thank you so much for sending this in. This is super, super cool. So there's an open source project from Bitnami called Cabin. And it is an open-source mobile app that works on both Android and iOS for directly integrating with Kubernetes. And it's like really impressive. 

FRANCESC: It is, yeah. So before we started recording the episode, I showed a screencast of what you can do with the iOS app. I'm sure that the Android app does pretty much exactly the same. 

MARK: It's the same app. 

FRANCESC: And, yeah, it blew our minds, because you can do basically everything you can do with kubectl, but easier. 

[LAUGHTER] 

MARK: It was cool. OK, so you've got a bunch of stuff you can do in there, from actually creating clusters to pod views, pod logs, doing deployments, choosing name spaces. But I think my favorite part was he deploys Ghost to Kubernetes on the screencast and just adds a deployment and clicks it through. And he's like, I'm going to scale it, and he has a slider. 

FRANCESC: Yeah. 

MARK: And he goes from one pod all the way up to like seven. He's like, look, [INAUDIBLE] slide and apply and, boom, done. And I was like, that's actually kind of sick. 

FRANCESC: And then in order to expose that service to the world, he's like, oh, so I just need to click here to make it load balancer now and done. 

MARK: Done. 

FRANCESC: That's it. 

MARK: Yeah. 

FRANCESC: It's very, very good. And on top of that, you can also use [INAUDIBLE] charts. 

MARK: Yes. 

FRANCESC: I don't know. I think it's pretty amazing. I feel like-- I mean, I'm going to sell it, that's for sure. 

MARK: Yeah. 

FRANCESC: But I wonder if it's almost better than just using kubectl. 

MARK: Maybe for some things. It depends what you're doing. 

FRANCESC: Yeah, it's just very, very nice. 

MARK: And what I liked about it too, so it's a React Native App. So if you want to actually get in and be involved with the project and try and tweak some stuff or fix some bugs or build new features, if you know JavaScript, you can get in there. 

FRANCESC: Yeah. It is open source. We'll have a link on the show notes to both the iOS and Android apps and also the GitHub repo. Definitely check it out. It is version 0.3 dot something. So it is still not a stable version, but I'd say it's definitely worth trying. 

MARK: Yeah, absolutely, even if it's just to be like, oh, let's see what's happening in my pod and look at the logs. 

FRANCESC: Yeah, even if it were just, like, view only, it would be useful enough. But on top of that, you can do a lot of editing and creating stuff, so amazing. So, yeah, thanks, Dylan, for the link. And also, thanks to the Bitnami team for such a cool app because it's really, really cool. 

MARK: It's really, really cool. Awesome. Well, before we run away, Francesc, I know you just got back from vacation. So I'm sure you've got everything planned out. 

[LAUGHTER] 

Where are you going to be? What are you up to? What's going on? 

FRANCESC: So I'm actually going to be traveling not in August, but in September. I will be going to Cloud Summit in this little place in a little country called Australia. 

MARK: Nice. 

FRANCESC: Yep, I'm going to Sydney to talk at the Cloud Summit about how to build bots on Google Cloud Platform. It's going to be lots of fun. And then after that, in October, I will be speaking at Velocity London. And then in November, I'll be speaking at dotGo, which is in Paris. And then the week after, in GopherCon Brazil, which is in Brazil, as the name implies. Yeah, lots of traveling. Very excited about it. What about you? 

MARK: So my month of crazy is continuing. So next week, I will be speaking at PAX Dev and then attending PAX right after that. Practically a week after that, I will be in Gameacon Las Vegas, speaking, again, there, talking about open source and Kubernetes and game servers. And then pretty much the week or two after that, I will be at Austin Game Conference in Austin doing the same talk yet again. And then after that, it's more of a conference for me. I will be attending Strange Loop, because I love that place. It is one of my favorite places in the world. 

FRANCESC: I know. I want to go there too. But I cannot this year. Next year, for sure. 

MARK: You say that every year. 

FRANCESC: I know. 

[LAUGHTER] 

I'm awful. Anyway, thanks, Mark, for taking the time today to talk about the future of media and also a bunch of cool things of the week and that amazing app, very, very cool. I've already installed it in my phone. 

MARK: Awesome. And thank you everyone for listening. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}