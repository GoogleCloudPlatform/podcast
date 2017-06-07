+++
audioDuration = "00:32:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.74.mp3"
audioSize = 46741998
categories = ["Machine Learning", "Cloud Video Intelligence API", "API"]
date = "2017-04-26T01:07:49Z"
description = "Have you ever wanted to apply Cloud Vision API to videos? Well, Sara Robinson is here to tell us about Cloud Video Intelligence API, which allows you to do that and much more."
draft = false
episodeNumber = 74
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Video Intelligence API with Sara Robinson"
image="/images/icons/ml/video-api.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/Dgsq9GyqcsA"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/67q3ub/episode_74_cloud_video_intelligence_api_with_sara/"
+++

Have you ever wanted to apply [Cloud Vision API](https://cloud.google.com/vision) to videos?
Well, [Sara Robinson](https://twitter.com/SRobTweets) is here to tell your co-hosts
[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc)
about [Cloud Video Intelligence API](https://cloud.google.com/video-intelligence/),
which allows you to do that and much more.

<!--more-->

##### About Sara Robinson

[Sara](https://twitter.com/SRobTweets) is a Developer Advocate on Google's Cloud Platform team,
focusing on big data and machine learning.
She helps developers build awesome apps through demos, online content, and events. Sara has
a bachelor’s degree in Business and International Studies from Brandeis University.

When she's not programming she can be found on a spin bike, listening to the Hamilton
soundtrack, or finding the best ice cream in New York.

##### Cool things of the week

- Getting started with Cloud Identity-Aware Proxy [blog post](https://cloudplatform.googleblog.com/2017/04/Getting-started-with-Cloud-Identity-Aware-Proxy.html)
- Distributed tracing for Go [blog post](https://cloudplatform.googleblog.com/2017/04/distributed-tracing-for-Go.html)
- 220,000 cores and counting: MIT math professor breaks record for largest ever Compute Engine job [blog post](https://cloudplatform.googleblog.com/2017/04/220000-cores-and-counting-MIT-math-professor-breaks-record-for-largest-ever-Compute-Engine-job.html)

##### Interview

- Announcing Google Cloud Video Intelligence API, and more Cloud Machine Learning updates [announcement](https://cloud.google.com/blog/big-data/2017/03/announcing-google-cloud-video-intelligence-api-and-more-cloud-machine-learning-updates)
- Cloud Video Intelligence API [docs](https://cloud.google.com/video-intelligence/)
- Cloud Next Video Intelligence API demo
    - recording [YouTube](https://www.youtube.com/watch?v=mDAoLO4G4CQ)
    - blog post [Hackernoon](https://hackernoon.com/get-the-code-for-the-video-intelligence-api-demo-794e7675effe)
    - source code [GitHub](https://github.com/sararob/video-intelligence-demo)
- Users we mentioned:
    - [Cantemo](http://www.cantemo.com/)
    - [Wix Media Platform](https://www.wixmp.com/)
- Tensorflow: An open-source software library for Machine Intelligence [docs](https://www.tensorflow.org/)

<div style="text-align: center">
  <a href="https://cloud.google.com/video-intelligence/"><img src="/images/icons/ml/video-api.png" style="margin: auto;"></a>
   <p style="font-size:0.8em">Cloud Video Intelligence API<p>
</div>

##### Question of the week

Q: What is the recommended strategy for backups and restores on VMs

- Creating Persistent Disk Snapshots [docs](https://cloud.google.com/compute/docs/disks/create-snapshots)
- Google Cloud Storage Nearline [docs](https://cloud.google.com/storage-nearline/)
- How to Design a Disaster Recovery Plan [solution](https://cloud.google.com/solutions/designing-a-disaster-recovery-plan#instance_snapshots)

##### Where can you find us next?

Mark is going to be hosting the [Playcrafting + Extra Life Game Jame & Game Fest](https://www.eventbrite.com/e/playcrafting-extra-life-game-jam-tickets-32637618997), raising
money for UCSF Benioff Children's Hospitals. Finally he'll be in Sweden for [Nordic Games Conference](http://conf.nordicgame.com/) as well.

He also recently published a blog post on [Scaling Dedicated Game Servers with Kubernetes: Part 1 – Containerising and Deploying](http://www.compoundtheory.com/scaling-dedicated-game-servers-with-kubernetes-part-1-containerising-and-deploying/).

Francesc will be presenting at the [New York Google Developer Group](https://www.meetup.com/gdgnyc/events/234963739/) for a Serverless event!
Francesc has also released a new [Just for Func episode](https://www.youtube.com/watch?v=8M90t0KvEDY), covering the implementation of the Context package!

{{< transcript "FRANCESC: Hi. Welcome to episode number 74 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing?" >}}
MARK: I'm good. I am back in San Francisco after a little trek over the East Coast. But it's good to be home. How are you doing? 

FRANCESC: Very good. Back from a little trip to China, and indeed it is very nice to be home. I am very happy because today we have, again, someone else from our team. We have Sara Robinson to talk about-- I think it's probably the latest API. 

MARK: The Cloud Vision Intelligence API. It just sounds smart. I like the sound of it. 

FRANCESC: Yeah, it is very cool. There was a really cool demo. We talked with her during Cloud Next on day one, I think. She did an amazing demo. We had a quick chat about it, and she's back to tell us even more. So very excited. 

MARK: Yep, and super excited to hear that. After that, we have our question of the week, where we will be talking about backup strategies for persistent disks. 

FRANCESC: Yep. You want to make sure that whatever happens to your machine, the information isn't lost. So how do you do that? And we'll be talking a little bit about multiple options and pricing and stuff like that. 

MARK: Excellent. So why don't we get stuck into our cool things of the week? 

FRANCESC: Yup. 

MARK: Cool. So just to start that off, we talked last week a little bit about the cloud identity aware proxy. Basically being able to lock down your applications using identity at a network level. There's a new article that's come out recently talking about how, basically, to get started with it, and how you can use it within your own applications. 

FRANCESC: I think it's pretty good. Just last week we talked about it from a very high level point of view, and this one is really like, oh, so you're really interested? This is how to do it. So if you're actually interested in improving the security of your network, dropping VPN and instead using, basically, identity or SSH certificates and stuff like that, go check it out. There will be a link on the show notes, as always. 

MARK: It's pretty neat. It takes you through several different authentication options, from like OpenID and IAM, and a few other ones, as well, so that you can pick and choose the one that works right for you. 

FRANCESC: And then we have another cool thing of the week that is very, very cool, especially because it's about Go design. So our coworker Jaana Dogan wrote an amazing article. She's very well known in the Go community. She may be known also as rakyll, which is her GitHub name. 

And she wrote about how to do distributor tracing in Go, which is kind of a hard thing to do. So we've been working on it lately, and she wrote a very good article explaining what is the techniques-- what are the techniques to be used, how to use it, and even open sourced the legal library that allows you to use a trace ID and send it around different servers, all of that powered by the context package. 

So it's a very interesting blog post, especially if you write Go. If you don't write Go, what are you doing with your life? Not that-- if you don't write Go, it is still a very interesting one. Because there's all of the distributor tracing, all the problems that are attached to it. So it's definitely worth a read. 

MARK: Yeah, and it's super cool to see that it has direct integration right with Stackdriver, as well. So you can see all your distributed traces, how long they took, all that sort of good stuff, too. So you can see if there's one particular part of your micro-servers infrastructure breaking something in some way. 

FRANCESC: And then the third cool thing of the week. It's a very interesting one, because I have no idea what it is, other than it is the largest compute engine job ever run, which is 220,000 cores. And those scores are actually preventable VMs, which I guess makes sense, because when you're running 220,000 cores, the fact that you can get them for less money makes a lot of sense. 

MARK: Yeah, I would've loved to have seen the quota increase request for this. 

FRANCESC: It's like, yeah, I'd like to run a little server. Yeah, only 200,000 cores. Yeah. 

MARK: Yeah, I know. It's going to be fine. Everything's going to be fine. What was he-- what was he calculating? 

FRANCESC: So I'm going to read this with, like-- I could be reading some other language that I don't understand and it would sound the same. So he explored 10 to the 17 hyper elliptic curves of Genius 3 in an effort to find curves whose L functions can be easily computed and which have potentially interesting Sato-Tate distributions. 

MARK: Oh, of course. Clearly. 

FRANCESC: There you go. So there is cool diagrams. That's pretty much what I can say. But basically, it's definitely heavy computation going on, and it is pretty amazing to see that they were able to just run it, and using VMs, and everything is-- I mean, I was going to say everything is simple. The infrastructure itself is pretty simple. Because what you're doing-- the math behind, I have no idea. But if someone knows what this actually means and they can explain it in a sentence, please, let us know. 

MARK: Yeah, we would love to-- yeah. Send us an audio transcription, and we'll put it on the podcast. 

FRANCESC: Yeah, that'd be nice. 

MARK: Awesome. Well, why don't we go have a chat with our good friend, Sara, all about the Cloud Video Intelligence API? 

FRANCESC: Sounds good. Let's do that. I am very happy to welcome back Sara Robinson to the Google Cloud Platform Podcast. Hello, Sara. How are you doing? 

SARA: Hi, Francesc. I'm doing well. Excited to be back on the podcast. 

FRANCESC: Yeah, very happy to have you back for a second or third time. We're going to be talking about some cool demos that you did at Google Cloud Next during the keynote of day two or three. But before that, why don't you tell us a little bit about who you are for those that have not seen any of the many, many episodes and talks that you've given before. 

SARA: Sure. My name is Sara Robinson. I'm a developer advocate with Mark and Francesc on the Google Cloud Platform team. And as a developer advocate, we do a combination of building demos, giving talks to show developers on how to use different Cloud products, writing blog posts and bringing that feedback back to the product team. And I'm focusing primarily on machine learning APIs and some of our big data offerings. 

FRANCESC: And you were on stage for a keynote-- was it day one? 

SARA: It was a one, yeah. 

FRANCESC: Yeah, so you did an amazing demo. Basically everyone told us that was, by far, their favorite part of the whole day. So why don't you tell us a little bit about what was it about it? 

SARA: Sure. I built a demo to showcase the Video Intelligence API, which we announced in private beta on day one of Cloud Next a couple of weeks ago. And what the Video Intelligence API does is it gives you metadata on videos. It makes it really easy to search video content, and with the demo I wanted to show that off. 

So what the demo was was I took a lot of videos and ran them through the Video API. And the demo let you visualize all the labels it found in a video. So it's able to tell you-- there is a dog in the video, starts at second one, ends at second three. 

So on the page for an individual video, you'd be able to see all the granular data on what different labels it found, at which points in the video. And then with all that metadata from the API, you're also able to easily implement search across a large library of videos. 

So I showed how you could search the library of videos that I had. A lot of the videos were from the Google YouTube channel. So I did a search of baseball videos. So I wanted to be able to show what a large media company might be able to do with the API. 

Let's say they had hours and hours of video footage sitting in storage buckets. And maybe they're a sports media company that has hours of sports video, but they only want to find the content with a baseball field in it. Maybe they're creating some sort of sizzle reel at the end of the week to highlight specifically baseball content. 

So if you were to do this manually, you'd have to have someone on your team go through all of those hours of footage, watch the video, write down the times when all the baseball clips appeared. With the Video API, with all the metadata you get back, you can pretty easily implement search because you're just searching the JSON that's returned from the API. And it'll tell you not only which videos have exactly what you're looking for but where in the videos your search time appears. 

So the demo is essentially built to showcase those two features. 

FRANCESC: Nice. So could you tell us a little bit more about what does it do exactly? Because when you tell us about, oh, it's able to see things, like it's able to recognize a baseball stadium, I directly think about the Cloud Vision API. But when you-- then you say when in the clip, it makes me think about Speech API that recognizes, like, over time. Where does this fit in between? 

SARA: Exactly. That's a good question. So right now, it doesn't do anything with audio yet. But people might see the API and think, well, isn't this just the Vision API taking a frame and analyzing it and then aggregating that content? So it does do that. The Video API samples images at one frame per second, and it uses an image classifier that's similar to the Vision API, and it does this for every scene in the video. 

But the core of the Video API, the real magic behind it, is that when they're done processing a video, taking all the frames, they have a separate video aggregation classifier, and then this will analyze all the features throughout the video. And then at a high level, it will be able to tell you what is this video about. 

So let's say you had a video of costumes and candy. It could tell you this is a video about Halloween. So that aggregation classifier is really like the secret sauce of the Video API. And to build it they train this model on many, many YouTube videos to be able to do that. 

FRANCESC: Cool. And when you said a video with costumes and candy, actually, I thought about Katy Perry. But that's me. 

SARA: That works, too. I don't know if the model's ready to detect that yet. 

FRANCESC: So if you have one frame per second, and you're analyzing all of those, there's a bunch of the frames that are pretty much the same, right? But all of a sudden, there are also changes. Like, you go from seeing a house, to seeing a shark dancing, or whatever. Is there something related to that that it can allow you to understand the structure of the video? 

SARA: Yeah, definitely. There is a feature called shot change detection. And what this does is it's able to detect every scene change in a video. So as you said, let's say you have a vacation video, and you're panning to some mountains, and then you move it around to show some people jumping up and down. It's able to detect whenever the scene changes. And if you request a shot change detection in the annotation types that you want back, it will tell you-- it will essentially give you an JSON object of the start and end time for every different scene change throughout your video. 

So you can do this to create maybe, like, a highlight reel of your own video, so that you know exactly which points in the video the scene changed. 

MARK: OK, cool. So you mentioned something in the previous comment you made, which made me think of the Vision API as well, which was that it sounds like you can pick and choose which features the Video API actually goes and finds within it. Like, I know with the Vision API you can choose motion recognition or possibly location. It sounds like with the Video API you can also do something similar there too. 

SARA: Yeah, right now there is label detection and shot change detection. But there is definitely more in the works coming soon. 

FRANCESC: Nice. So what are the things that you can build with this? Because one of the things that I was imagining is-- imagine that you have a very long video, right? And you're like, oh, I remember I was watching this video, and the last thing I saw was that scene where you can see, I don't know, a train. So you could say, hey, go to the scene that has a train. Would that work? Like is that something that people are building? 

SARA: Yeah. I think the biggest use case for this is searching videos. Movie navigation, like you just brought up, is also a good point, which is related to search. So because you get metadata on what's happening in every scene, it's pretty easy to build an app that will go to specific scenes throughout the video. 

And say you want to use the shot change detection to show the frame at each point in time and then go to a certain frame based on that image or a specific search term. So navigation is definitely one-- navigating throughout a movie. And the biggest use case I see is searching large libraries of video content. 

So a lot of sites have a way for users to upload images and video. Or media companies could have lots of video content sitting around that they need to analyze, or maybe they don't have any search implemented on it right now and want to add search functionality to it. And I can actually talk about two companies that have been using the API implement something like this. 

So the first one is called Cantemo, and they're a media asset management company. And what they do, their customers are anyone with a lot of video content. It could be an individual or a company that has a lot of videos. And they make it easy to essentially manage your video library. 

So when you upload a video to their service, they'll transcode it for you, and they're using the Video API to improve their search. So this way they can make it so customers can easily search for, like you said, find all my videos with a train. And it'll know exactly at which point in the video that occurs. So that's one example of a media company using the Video API. 

Another company is Wix. And Wix is a service, for those of you that don't know, that lets anybody create a web site, and you don't have to be a developer to be able to create a website on Wix. And they're using the Video API for what they call Wix Media Platform, which is a platform that they use to support users that are uploading a lot of images and video files every day. 

So when a user uploads a video, or say someone's building a website and one of their users uploads a video, the Wix Media Platform will transcode it. And then they'll use the Video API, along with shot change detection-- so that they use both shot change detection and label detection-- to grab the main images from the video so that they can show users the highlights of what is this video about. 

And then they also use the metadata returned to add tags to their videos, and then with this they're also able to add search. So if they've got a website that has a lot of user video content, it makes it easy for users to search both within a video and an entire library of videos. 

FRANCESC: Cool. I was wondering if there is some of the features that we've seen and we've used on Cloud Vision API, if those are available in Cloud Video Intelligence API. Specifically, I'm thinking about that amazing demo that we had at Google IO and, I think, GCP Next, too, which was the Emotobooth. 

You remember, it takes a picture of you, and according to the reaction of your face, the feeling that-- if you're smiling, or you have anger, it makes the background a little bit different. And I was wondering if the Cloud Video Intelligence API allows you to do things like, hey, find me all the faces in the video-- or find the face that is smiling. This kind of thing. Is this something that is already supported? 

SARA: Yeah. Right now only label detection is supported, but that's definitely something that we've gotten a lot of feedback on. And the team is working on adding more of those features into the Video API. So one thing that was really popular with the Vision API is the inappropriate content detection. 

So you pass an image, it's able to tell you is this image appropriate or not, which eliminates the need for a lot of manual classification on images. If you've got a site where users are uploading a ton of images every day, instead of having somebody manually flag those images, you can use the Vision API safe search detection method to do that. That is something that obviously has a big use case for videos as well. And we're working on adding more features to it soon. 

FRANCESC: I mean, I guess that for any of those, you could also just use the shot frame detection, and go find one of the frames, and use that as the input to the Cloud Vision API and play with that. Is that something that you've tried? 

SARA: I haven't tried that personally, but that's definitely something you can do right now. So if there is a specific label that was returned from your video, you would know exactly which frame to go to so you could grab that frame. The times it returns are in microseconds, so you could grab that exact frame that you want and send it to the Vision API to run a face detection or safe search detection on it to get more data on your video. 

MARK: I've been thinking about trying to run it through security camera footage. So the stuff outside my house-- show me all the times there's a person standing at my front doorstep. 

SARA: That would be a use case. And API right now can probably recognize that there's a person in the scene. But when you-- so if you find a scene that has a person in it, you can go ahead and send that to the Vision API to get more data on is this person happy or angry or surprised. 

MARK: Or maybe catch the coyotes that have been roaming my neighborhood recently. 

SARA: Exactly. Figure out exactly what times they go by your house. 

MARK: Cool. So let's talk about the technology behind this. Can you talk a bit about-- I know you mentioned the YouTube dataset, but can you talk about what's powering this? Is this another TensorFlow project? 

SARA: So there's a couple models powering it. So they use the YouTube videos to train their video aggregation classifier. And then it samples images, I mentioned before, at one frame per second. And to do this it's using a custom image classifier, which is similar to the Vision API but a little bit different. And that's what it's using to go through the video and grab an image from every scene. 

FRANCESC: Cool. So one of the things that I really like about these kind of APIs-- like specifically Cloud Vision API and now Video Intelligence API but also speech APIs. You guys are building really cool demos that are very interactive. So I feel like lots of people that are not naturally deeply technical, they could take some benefits out of this and create like very artsy demos. Is this easy to use? How does it work? 

SARA: Definitely. Yeah, it's very easy to use. And one thing that I love about our machine learning APIs is that they give you access to a pre-trained machine learning model with just one REST API request. So I called them our friendly machine learning. If you don't have much of machine learning or data science background, these are really accessible. All you need to know how to do is make a REST API request, and you get access to all of this machine learning data. 

So the video is very easy to use. All you need to do is pass it the URL of your video in Google Cloud Storage, which is object storage tool. So right now that's what's supported for making our requests. So once you get your video in Cloud Storage, you send that video URL in your API request. You also tell it which types of detection you want to do. Right now you can do either label detection or shot change detection. And that will kick off an operation. 

And one thing you can also pass into your request is an output URL for the JSON to be sent in Cloud Storage. So if you want to store the annotation JSON in Cloud Storage, you can just pass that URL into your request. And then when the video API is done processing, it will write it to Cloud Storage. If you want the-- yeah, that's a really cool feature. I actually used that for the demo that I built. 

If you want the annotations right away, all you need to do is just ping the operation ID and see what the status is. It'll give you a progress on how far along it is. And once it's done, it will return the annotations to you. 

MARK: I think that would be a neat way of integrating with Firebase Storage as well. 

SARA: Definitely. I use Firebase for this, but I used Cloud Functions to build the demo. So what I did was I had a Google Cloud Storage Bucket that had all my videos, and I had a Cloud Function listening on that bucket. So whenever a new file is added it checked, is it a video file? If it was, it would send it to the API. 

And because I didn't need the annotations right away, I just had it output the results to a separate Cloud Storage Bucket with the annotation JSON. And then I use Node on App Engine for the front end, so I just-- wasn't calling the Video API directly from the App Engine app. All it did was grab all the videos from the Cloud Storage Bucket and then their associated metadata from the other bucket. 

FRANCESC: Nice. So this gave me two questions. The first one is-- is that code open source? 

SARA: That's a good question. The answer is, yes, hopefully soon. I'm working on-- I'm starting on that process this week. So once the code is open source, I'm hoping to do a blog post about it, and I'll give you a link to add to the show notes, as well. 

MARK: I expect by the time this comes out you should have it done. 

SARA: Yeah, and that's the goal. 

FRANCESC: And the second question is-- how fast is this? You said that you can give a URL for a YouTube video, let's say, for video on Google Cloud Storage. Let's say that the video is one minute. How long should I expect this to take? Seconds? Micro-seconds? Minutes? Hours? 

SARA: Right now it takes about 1/4 of the time of the video. So for your one minute video, it would take about 15 seconds to run the annotations, which is actually pretty fast. So it's not real time, but you can get the annotation results pretty fast. What would take a while is if you had a large library of videos, maybe terabytes of videos. That could take a matter of days to process. But right now, I've seen it about 1/4 the length of the video. 

FRANCESC: Nice. Now, I was considering it, because if you want to build a demo that is free, it feels snappy. Then you could actually make it. Like if you have a video that is like around 10 seconds, and it's going to take one or two seconds to process, that is awesome. 

SARA: Exactly. 

FRANCESC: And what about-- and probably you're going to tell me that the answer is no, or it is top secret, but is there any way of doing video streaming and getting streaming on labels and stuff like that? Is this something that anyone has asked? Or I'm just crazy? 

SARA: Do you mean getting the labels from your video as it comes in? Oh, through real time video stream? 

FRANCESC: Actually having the input to the API being a real video stream and getting a stream of notifications or JSON containing the current label for the current [INAUDIBLE] being processed or something like that? I don't know, maybe it's crazy. 

SARA: I don't think it's crazy. It's actually a great idea. That is not supported right now. But I can pass the feedback along to the right people. And it's interesting you bring up streaming, because our Speech API does not. It supports either batch or streaming mode, so you can send it a complete audio file in cloud storage. Or you can send a stream of audio, and as the API transcribes it it will give you the results. 

MARK: Well, I guess people are just going to have to wait and see. All right, so if people want to get started playing with the Video Intelligence API, how can they do that? 

SARA: They can go to cloud.google.com/video-intelligence, and they need to fill out a form for them to sign up for the private beta. It's in private beta right now. So just fill out that form and then you should receive a notification soon after that. And I would love to hear anybody's feedback on it. That's part of the private beta, trying it out. They can find me on Twitter, @SRobTweets, you can put it in the show notes as well. 

FRANCESC: Yeah, we will. It's still private beta, so I'm sure you have not seen many projects, but what is the coolest usage you've seen of this API? 

SARA: I've seen some cool visualizations of how people are displaying the labels from their video. So the main use cases I've seen for customers are Cantemo and Wix, which I mentioned before, but I've seen some cool integrations with D3. Because you get pretty granular label data from every scene in your video. We used a little bit of D3 in the demo, but I've seen some interesting line graphs to show how the labels and objects are changing as they move throughout a video. And I'm definitely excited to see what else people do with it. 

FRANCESC: Nice. I'm gonna definitely play with it. It sounds like lots of fun. 

MARK: Yeah. 

SARA: It's a lot of fun. 

FRANCESC: We're kind of running out of time. But is there anything else that you'd like to add? 

SARA: I think I covered pretty much everything. I'm really excited to see where this goes and what else people do with it. 

MARK: Excellent. Well, Sara, thank you so much for joining us. Always a pleasure to have you on the podcast. 

SARA: Thank you for having me. 

FRANCESC: Thank you. 

MARK: I'm always super happy when members of our team get to pop by on the podcast. Sara, no exception there. Thank you so much for joining us to come talk to us about the Video Intelligence API. 

We should make a mention-- Sara talked about it a bit when we interviewed her. There is an open source version of the code that she showed in the demo that's available up on GitHub. So we'll make sure there's a link to that in the show notes. 

FRANCESC: This is actually a very advanced technology. Like if you told me five years ago you just give a video and it describes it, I'd be like, yeah, sure, whatever. So the fact that now you can do that with JSON API, that's pretty amazing. 

MARK: So this empowers the internet. 

FRANCESC: Yep. So hopefully people will go and check out that repo on Github and try to modify it and do some cool things with it. I hope that we'll see some amazing demos derive from this one 

MARK: Excellent. All right why don't we get stuck into our question of the week? So the situation is thusly-- say I've got one or more virtual machines. They have some data on them and some sort of application running on them, as well. And say the data on those is going to change. The classic example, which people don't do probably as much anymore, is something like an FTP server or something similar. That kind of scenario. 

What are my options or the best practices I should use for making sure that data is backed up? Because I want to make sure that if something bad happens to that VM, or that the disk gets corrupted in some crazy way-- which shouldn't happen, but who knows? What can I use to make sure that I can recover from that relatively quickly? 

FRANCESC: Yes. So the question comes from FRWheelin23. Freewheeling, maybe? I don't know. I think that it is very interesting because you were saying in case the disk gets a corruption or something. That will never happen. But your software could have a bug, right? So you could somehow wipe all the data on your hard disk. 

This is something that happens. And this is something that I've personally done, and it is not fun. So you want to make sure that you keep copies. And the question has a very obvious answer, which is, oh, just use disk snapshots. Because they're really made for that, right? I thought that was probably the only answer, but we also started chatting about, well, could we do the same thing with Google Cloud Storage, right? 

Especially because with Google Cloud Storage you have Nearline and Coldline, which are classes of storage that allow you to store the same data with the same durability, but we've last-- basically, it takes a little bit longer to access, but it's way cheaper. So we're wondering, oh, it's probably the best solution. Turns out that it is not. Because if you're running snapshots, the price for snapshots or Nearline is the same, exactly the same. And with Coldline, you could go a little bit cheaper. 

But then you have the problem that, for Nearline or Coldline, creating a snapshot from that data is not as simple as creating a snapshot from a snapshot. Because when you have a snapshot, everything you need to do if you want to create a new disk, it's just one click and you're done-- or one REST API, or one gcloud command. It is way simpler. And unless you had a huge amount of data that you were storing in-- like you were backing up-- and then in that case, as you were mentioning, maybe you should not be using persistent disks. 

So unless you're using a huge amount of data on persistent disks and that little difference in price makes a lot of difference, I'd say that you should just simply use snapshots. Because once the price is pretty-- it's actually the same as Nearline, and they're much easier to use. 

MARK: Yeah, it's worth noting that snapshots, they're defaced. So you don't have to grab the whole thing again, which you might necessarily need to do if you're going to shift all your stuff over to some sort of cloud storage incident. What's also kind of cool about them is that snapshots are globally available. 

So if you want to restore them, you can restore them to any zone within your project. So that makes them super, super useful, especially if you want to capture your operating system, as well as your data at the same time. So your recovery time is pretty sweet. 

FRANCESC: I think in that case, it's important to take into account that when you have a snapshot and you're copying it across networks, across regions, there's a fee associated to that. Because you're actually transferring data across networks. So there's like ingress and egress and stuff like that you take into account. 

Very related to that, if you store that information into cloud storage, into Nearline or Coldline, you also have a cost associated to reading all that data. So we have a bunch of links in the show notes. There's actually a very good article that we found while doing the research for this question, which the name is, "Designing a Disaster Recovery Plan," and it covers the snapshots but way more than that. 

So maybe even a good topic for an episode. I don't know who would be a good person to have, but like, what do we do when things go wrong? Not internally at the SRE, but if you're a customer, what are the kind of things that you can do to prepare for any mistakes that could happen in your interaction? 

MARK: I like that idea a lot. We should do that. 

FRANCESC: So I think that with that, the question has been answered. So thank you FRWheelie23 for that great question. I hope that you'll be happy with the answer. 

MARK: Excellent. All right, well, Francesc, I know you just got back from China. But what are you up to lately? 

FRANCESC: A bunch of things. I'm going to be in New York next week, and I'll actually be-- on Monday, I'll be presenting at the Google Developer Group in New York City with Brad. He'll be talking about Cloud functions. And I'll be doing a couple demos on Cloud endpoints. And after that, my next trip is something that I did not expect, but I will be going to Buenos Aires in Argentina. 

MARK: Oh, nice. What are you doing there? 

FRANCESC: I will be going to an event that I'm not sure it's already public. It's like a Google event that's going to happen there. But I will make sure to get a couple extra days so I can run some meet-ups. 

MARK: Very cool. Very, very cool. 

FRANCESC: What about you? 

MARK: So we will be hosting the Extra Life and Play Crafting Game Jam here in San Francisco. I'll be around for that. So if you're in the area and you want to raise some money for kids in hospitals, please come by. A couple of weeks after that, I will be at the Nordic game conference in Malmo, Sweden. I'm probably mispronouncing that terribly. 

FRANCESC: I think you're pronouncing it correctly. It's Malmo. 

MARK: OK. Wow. I usually mess that up entirely. But yeah, I think that's the stuff that I've been doing. I do have a blog post that I just put live. I know I've mentioned on the podcast a couple of times, talking about running game servers on Kubernetes. Just put the first part of a series up live, so I'll put a link to that in the show notes, as well. 

FRANCESC: Nice. And since you're mentioning that, I'll also mention my just for fun video that I released four days ago, so that's pretty new. The previous episode was on the context package and how to use it. This one is on how to implement it. So if you're interested in seeing me hack stuff in Go, go check it out. We have a link in the show notes, too. 

MARK: Excellent. Well, Francesc, thank you again for spending time with me and doing another podcast. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: See you all next week. 
{{< /transcript >}}
