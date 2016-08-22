+++
audioDuration = "00:27:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.9.mp3"
audioSize = 39635717
categories = ["Cloud Vision", "Tools", "Cloud Storage"]
title = "Cloud Vision API with Ram Ramanathan"
date = "2016-01-20T22:00:26Z"
description = "In the ninth episode of this podcast and first of 2016, your hosts Francesc and Mark interview Ram Ramanathan. Ram is the product manager for Google Cloud Vision API."
draft = false
episodeNumber = 9
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/1o9FvTxLbgt"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/41uypv/episode_9_cloud_vision_api_with_ram_ramanathan/"
+++

In the ninth episode of this podcast and first of 2016, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Ram Ramanathan](https://twitter.com/ramramanathan1). Ram is the product manager for Google Cloud Vision API.
<!--more-->

##### About Ram

Ram Ramanathan joined Google in 2014 where he’s been working on leading
the machine learning efforts for Google Cloud Platform, and  has been a
large part of launching the new Google Cloud Vision API. He comes with a
great deal  of experience in the industry after working for other big
players such as GE Healthcare and Microsoft.

You can contact him on his email
[ramramanathan@google.com](mailto:ramramanathan@google.com) and follow
him on twitter at
[@ramramanathan1](https://twitter.com/ramramanathan1)

##### Cool thing of the week

-   Top 5 Power Features of the Google Cloud CLI ([blog
    post](http://googlecloudplatform.blogspot.com/2016/01/top-5-power-features-of-google-cloud-cli.html))<br/>
    ![gcloud autocomplete](/images/post/gcloud-autocomplete.gif)   
    
-   Get your current project id using gcloud:   
    ```gcloud config list core/project | awk '{print \$3}'```

    After the recording we were informed that there’s a better way using
    [formats](https://cloud.google.com/sdk/gcloud/reference/):   
    ```gcloud config list --format="value(core.project)"```

##### Interview

-   Google Cloud Vision API changes the way applications understand
    images
    [blog](http://googlecloudplatform.blogspot.com/2015/12/Google-Cloud-Vision-API-changes-the-way-applications-understand-images.html)
-   Google Cloud Vision API
    [docs](https://cloud.google.com/vision/)
-   Google Cloud Vision robot demo
    [video](https://www.youtube.com/watch?v=eve8DkkVdhI)
-   Tensorflow
    [homepage](https://www.tensorflow.org/)
-   Mobile Vision SDK
    [docs](https://developers.google.com/vision/?hl=en)

##### Question of the week

-   Google Cloud Storage Access Control
    [docs](https://cloud.google.com/storage/docs/access-control?hl=en)
-   Google Cloud Storage Signed URLs
    [docs](https://cloud.google.com/storage/docs/access-control?hl=en#Signed-URLs)

{{< transcript "﻿FRANCESC: Hi, and welcome to the ninth episode of the Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my co-host Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing today?
FRANCESC: Pretty good. Happy New Year.
MARK: Happy New Year to you too. Good start of the year, brand new podcast episode.
FRANCESC: Yeah, finally, finally. Took a couple weeks extra, but I'm finally back to the United States, and I'm actually very excited about this episode.
MARK: Yeah, it's gonna be a good one. I'm pretty happy about it.
FRANCESC: Yup. Before we even talk about what the main content's gonna be, let's start with the cool thing of the week.
MARK: The cool thing of the week I like a lot. I'm definitely a big fan of the command line, being--especially being a Linux user as well, and I really like the blog post we're seeing today of the top five power features of the Google Cloud CLI. 
FRANCESC: Yeah.
MARK: There were some tricks in here that I didn't know about that I thought were particularly impressive.
FRANCESC: Yeah, especially if you are a command line person and especially if you know how to use awk and sort and all of these little tools that you can use very well, you can find out really cool stuff quite easily.
MARK: The nice thing is, is actually, there's stuff in the Google Cloud command line interface that don’t require you to use, like, set or awk. You can actually tell it to format stuff in, like, CSV or JSON just through the command line options.
FRANCESC: Oh, that's very nice.
MARK: And you can push it to, like, all sorts of different things. It's really impressive. I've been a longtime user of the code completions that you can get through Zsh and Bash, but--
FRANCESC: Yeah, actually, you got me hooked on Zsh, and that’s how I discovered the code completion, and--the code completion, sorry, the auto-completion. The impressive thing about it, about the auto-completion, is that it auto-completes about--on many things.
MARK: Yes.
FRANCESC: Not only the commands themself but also, like, instance names and--
MARK: And, like, zones and--
FRANCESC: Zone and regions, which is great 'cause I never remember how to write bridges. I never remember where the dash goes, so yeah.
MARK: Yeah, or what was my compute instance name or, like, stuff like that.
FRANCESC: Yeah, yeah, yeah.
MARK: It's like, "What is that?" I have one I'm gonna add to the list. This isn't mine. This is a coworker's of ours, Sandeep. He came up with a nice way of--and this does use awk, but we'll put it in the show notes, that literally lets you pull out what your project name is from your config file. I've found that particularly useful when writing, like, Bash scripts and make files where that project detail has to be sort of in that as an argument for certain things.
FRANCESC: Yeah, that's very nice. Actu--I could definitely see that as part of some deployment script or some build part, yeah. That sounds really interesting.
MARK: Yeah, no, well, we're commonly building, you know, examples and stuff where they have to work on either our project or somebody else's so we can't just hard code a project ID.
FRANCESC: Yup. Yeah, I've done that--I've hard coded many project IDs many times, and then when you want to open source it, you're like, "Oh, yeah."
MARK: So you're working on your staging project, and then you're putting it in your prod project, and then you're like, "Oh, man, now I have to, like, do this." Yeah, it's bad.
FRANCESC: Yeah, no, definitely--definitely useful. We'll add that little command on top on the show notes on--in addition to ar--the link to this article. Okay, so that was our first cool thing of the year--cool thing of the--actually, yeah, cool thing of year.
MARK: That was our first cool thing of the year.
FRANCESC: Cool thing of the year, there you go. And now we're gonna pass to this amazing interview.
MARK: Yeah.
FRANCESC: I personally had lots of fun doing it.
MARK: It was really interesting.
FRANCESC: Yeah, I think that Ram is a very interesting guy and knows a lot about many things, and we're actually going to be talking about one of the coolest APIs that I think we have.
MARK: Cloud Vision API, very exciting stuff.
FRANCESC: Exactly. So I say we just go for it.
MARK: Sounds good. We are joined today by a very special guest. I'm very excited to have him here with us today. It is Ram Ramanathan. He is the product manager for Google Cloud Vision API. Thank you so much for joining us, Ram.
RAMANATHAN: Thank you guys. Thanks for having me on the show.
MARK: An absolute pleasure, and I did manage to pronounce your name correctly?
RAMANATHAN: Yes, you did.
MARK: Wonderful. I like getting that right. It makes me happy. So for those people who aren't familiar with you and what you do, do you want to give us a little bit of your background and tell us a little about yourself?
RAMANATHAN: Sure. Yeah, I'm a product manager in the Google Cloud Platform. I look after some of our machine learning technologies, in particular our--we just released our Google Cloud Vision API. It's one of our key products that I manage, and I've spent a lot of time in the technology space with a variety of different companies both in the Bay Area and in Seattle, and I'm based in Seattle.
MARK: Pretty cool. So you've got a long history of sort of doing machine learning-type stuff?
RAMANATHAN: That's right. Pri--initially started off a lot in the business intelligence space thinking about how users can make sense of all the data they collect and then moving on to machine learning in the last few years.
FRANCESC: Nice. Could you give us a little bit of a general idea of--so we have machine learning and business intelligence and so on, and then on top of that there's Cloud Vision API. What is it, and how is it related to machine learning?
RAMANATHAN: Sure. Google Cloud Vision APIs really provides an easy way for you--developers to understand images, right? Basically, the way it works is we encapsulate a lot of powerful machine learning models that help identify patterns in images and then apply that to your own images, so you can--it's basically the same technology that powers things like Google Photos today. So in Google Photos you are able to search on your own photos for things like beaches or things with dog, with--so photos of your favorite dog, and the way it does that is it basically understands a pattern in your image for what a dog is or what a beach is, and so it's able to apply that pattern across your entire image set. So what we've done in Vision API is basically encapsulate similar models like that and provide that as easy-to-use APIs so the developer doesn't need to worry about all the machine learning complexity and the sophistication but really just focus on, "Hey, here are my images. Help me understand what are the contents of the image."
FRANCESC: Mkay.
RAMANATHAN: So it's really built on a powerful machine learning set of models, but we provide it to you as easy-to-use REST API.
FRANCESC: Nice.
MARK: Cool. No, I've definitely become a big fan of Google Photos, especially my--my favorite search for some reason, I like looking at grass. I just--I find it amazing that--like, it's pictures like--it'll give me, like, big, broad sweeps and at the same time, like, close-ups of my dog lying in grass, like, just, like, blades of grass, and it just picks it out, and it feels like magic. It feels like absolute magic. So that's really cool. So--all right, so what does that kind of translate to? So if I'm a user of the Google Vision API, I guess I’m sending it some kind of image, and then it's sending me--what does it send me back? What do I get?
RAMANATHAN: Sure. Basically, what we do is we've exposed a set of six powerful features, like, we--based on--you can--the features that we provide are things like--one is label detection, so basically if you give us an image and you choose label detection, we are able to tag an image with--across a wide--or thousands of different entities that we recognize, and we provide that back to you with a description of the entity and a confidence quote of how comfortable we think this--that this entity actually exists in your image. Another aspect is, for example, we're able to do things like OCR, optical character recognition, so if you want to read text in your--read the text in your image, we will--we can apply that feature on your image, and we are now--as part of the JSON response you will get back the text that we were able to identify in the image. We autom--we do automatic language detections, so what language the text belongs to, and we then provide you with a bounding poly box with the x, y coordinates on where we think the text exists inside your image, so we--similarly, we provide other set of APIs like facial detection, which able--which is able to detect the faces inside a photo along with the associated emotions of that face, a landmark of--we're able to detect a wide variety of different natural and man-made landmarks, and logo detection, we're able to detect product logos inside an image. Another aspect is for folks who do a lot of crowdsourcing of images, basically where their users upload images. A constant--common use case is, "Hey, can I ensure that I can moderate better images that have adult content or violent content?" So our Safe Search annotation powered by the same technology that powers our Google Safe Search in image search is able to detect things like whether an image has adult content in it or whether an image has violent content in it, and we give you back a probability of whether--a bucket where it's very likely to very unlikely.
FRANCESC: That is very cool, actually. So--because that's actually--so is that the same models are powering the Safe Search option on Google Search?
RAMANATHAN: That's right. So--I mean, it's a similar set of models, but--of technology, but you can imagine that's--like many of the technology that powers things around Google Safe Search to technologies that power Google Photos, we can--and we encapsulate some of those technologies as a [inaudible] API.
FRANCESC: That's really awesome. I can see a lot of people working--that need, actually, that API, and the fact that they can use it out of the box just like, is this adult content or not, like, with a simple REST API, that's really cool.
RAMANATHAN: Yeah.
MARK: That's really, really cool. No, that's really cool, and you talked a little sort of about face detection. I did happen to see--or we got a nice demo the other day from Caz, one of our teammates, who helped work on the Cloud Vision bot, which is a cute little bot that when--it detects your face, and if you smile at it, it heads toward you, and if you frown at it, it runs away from you, which I thought was really, really cool.
RAMANATHAN: That's right.
FRANCESC: It's really cool. I try with it, but for some reason, even though I was smiling it was just ignoring me. Then we saw that the problem was that there was no WiFi, but.
MARK: Sure, sure, you just don't have a recognizable face, quite clearly.
FRANCESC: Yeah, I'm just not attractive enough for bots.
MARK: No, that's totally fair enough. Talking about face detection now, I can see here that facial recognition isn't supported. Do we want to talk a little bit about that?
RAMANATHAN: Sure. I think, you know, of--you know, one of the things that we are focused on is user privacy, and so what we provide in--on the Google Cloud Platform is this ability to detect faces. We don't do facial recognition, so as part of our face detection, we're able to detect the faces inside the image, and we also detect the associated emotions of the face, whether a person is smiling, not smiling. We don't store the info--both the images or the associated information we return back to the user on Google servers. We return it back to you, to the end user, so in that way we're ensuring that, you know, the user has control over their data and associated responses.
MARK: That sounds pretty reasonable.
FRANCESC: That's very interesting. So basically, we're able to see what--if there's any face, what are they doing, but we don't know who they are, basically?
RAMANATHAN: That's correct.
FRANCESC: Okay.
RAMANATHAN: Exactly.
MARK: That seems pretty fair. 
FRANCESC: Yup.
MARK: That seems pretty fair. No, that sounds really good. So--okay, so I'm actually quite curious. You've probably got a bit more visibility than we do on this. Like, what sort of things are people doing with this? Like, what do you envisage people? Like, I'm sure you've got some ideas. I mean, this seems like just one of these crazy things you could do so much with.
RAMANATHAN: Yup. You know, there is a wide variety of use cases. I think, you know, you know, we can--the initial use case is really a lot of users wanting to use label detection to really manage all their images, like, create them--how do you build metadata on this large catalog of images that you may have? That's a common use case that folks want to use that for, so a lot of big media companies want to build large media catalogs or even companies that build websites, so just to manage what's the content of my images? Another use case is folks who really want to do things like on content moderation, right? You know, in the case of crowdsourced content, first of all, you still use label detection to understand what are the contents of the images but also filter out or, you know, be able to moderate adult content and violent content from crowdsource so they don't share those images with their broader user community. The other use case is, is really thinking about how to leverage OCR in a variety of scenario both from, like, transactional applications, people who want to do things around reading text from receipts or things and do--being able to use the text from these images and then do things around--and then do intelligent things based on those--on that text that we can retrieve from the image, and the fourth use case, of course, is just--is early--this is more of a inter--more interesting use case around image sentiment analysis. You know, a lot of folks have been using text to do sentiment analysis on what peak customers' reception are of their products, but with the power of combination of both image detection, emotions from the face to product logo detection, people can start understanding how is my product logo associated with people who are either smiling or sad, and what are the other contents of the image at a certain point in time?
MARK: Yeah, that sounds pretty good.
RAMANATHAN: Yeah, and I mean, so the key for use cases are, you know, OCR, thinking about extracting text, image metadata management, image sentiment analysis, and content moderation.
MARK: Yeah, no, I'm starting to think about places where I've seen similar things happen where people have used crowdsourcing to do this sort of stuff where, you know, you get your audience to flag whether it's inappropriate or tag what sort of data is inside this image, whereas now you can sort of look at doing that automatically, which I think is pretty powerful. I'm also just looking forward to a time when I can just send a receipt to my expense provider and it's like, "Oh, I know what that is now. I'm gonna send that in for you," rather than me having to do all that work, so that’s pretty cool.
RAMANATHAN: Yup.
FRANCESC: That'd be really awesome. Yeah, so we were talking to--these are basically models that have been trained by Google, and before we had people maybe, like, training those models, right? Is this based on something that we talked before in one of the cool things of the week, it's TensorFlow? And how is it based on--
RAMANATHAN: Yup.
FRANCESC: Could you explain a bit what's the relationship between TensorFlow and Google--not Google Photos, Google Cloud Vision API?
RAMANATHAN: Sure. Basically, a lot of the--you know, one of the things is the way all these machine learning models evolve in the recent future to enable a lot of these powerful scenarios is really, advances in deep learning, right? So deep learning enables to really look at unstructured data, whether it's images, videos, and really start identifying patterns in those--in your data set, and within Google we are being--leveraging a--we've been using a framework called TensorFlow to drive a lot of these scenarios, and we recently open sourced that in November, and we had great reception, a lot of great feed--user adoption, and so, I mean, internally at Google we've been leveraging frameworks like that to build these models, and what we've done on the Vision API is basically just providing wrappers around that for users to consume, and so you can imagine that people use deep learning frameworks to build these sophisticated models, and then basically once the models are ready to go, we're exposing that as REST APIs.
FRANCESC: That's very cool.
MARK: That is very cool.
FRANCESC: Cool, so could you tell us a little bit more about what other products use TensorFlow at Google?
RAMANATHAN: Yup. Yeah, no, we--inside Google we're using TensorFlow from everything from speech recognition in the Google app, right, in OK Google, to how we do things around smart reply in Inbox, it's a new feature we just introduced in Inbox that allows you to intelligently pick common responses to your--to emails coming into your Inbox to how we do image searches in Google Photos. One of the interesting things about TensorFlow is its ability to adapt to a broad set of scenarios and also the fact that its ability to run not just on a single smartphone but across thousands of computers and datacenters, so its ability to scale where you can now imagine some of these models running on your Android device out of the box.
MARK: Wow.
FRANCESC: Cool. Something really interesting that you mentioned is that TensorFlow is powering speech recognition, and I know that speech recognition is a very hard thing to do. Like, I'm always impressed that my phone understands me.
MARK: Yeah.
FRANCESC: Like, with my accent that's a very, very good job.
MARK: Well, actually, it's impressive that it understands you and it understands me and it understands everyone else as well, like, with all our accents.
FRANCESC: Yeah, that's really interesting, but the interesting thing is that it doesn't necessarily run through an API, right? Like, it actually runs on your phone.
RAMANATHAN: That's right.
FRANCESC: So could you just--could you tell us a little bit about how do we even do that? Like, the fact that there's so much information about a model--the model but still fits on your phone.
RAMANATHAN: Yeah, I think that's really one of the things that we're enabling through--that the TensorFlow framework enables, its ability to support a wide variety of devices so they--you know, basically you can imagine, you know, people are using really sophisticated hardware to train these large speech models, and then you can imagine the power of TensorFlow is we can take that model and actually just enable it to run on a--on your mobile device. You know, and over time, you know, this allows users to think about more intelli--scenarios where they can drive faster response and more realtime--integrate machine learning realtime into user workflows, right? That's really where we can start driving more intelligent user workflows where, you know, it just becomes pervasive. A great example is where we're doing that in our Google Now where we just give you these flashcards as part of your user workflow, but that's just a tip of the iceberg, right? What we can do with TensorFlow is make more apps that intelligent. That's really our focus.
FRANCESC: Okay, so my next question then is since the robot doesn't--didn't recognize my smile 'cause the WiFi was down, could it be possible to have Google Cloud Vision API as not an API but something that you can install it, or is the model way too big?
RAMANATHAN: Yeah, actually, you know, we do have subsets of what the API supports on the Cloud on Android devices. We released--recently released what we call the mobile Vision SDK as part of the Android SDK.
FRANCESC: That's awesome.
RAMANATHAN: Where, you know, we provide things around similar things, like around face detection. We provide some of the aspects around, you know, some of the emotion models that we're providing on detecting smiles, and we're also providing things around additional aspects like--that's very mobile scenario-focused like things like barcode recognition.
FRANCESC: That's really, really cool.
MARK: I'm just looking at that now. I didn't even realize that exists. That's really cool.
FRANCESC: That's the good thing about this podcast.
RAMANATHAN: Yeah, it's just on developers.google.com/vision.
FRANCESC: Cool. Yeah, we'll add links to that on the show notes. Yeah, I was saying that's the good thing about this podcast, is every single episode I learn new stuff.
MARK: I learn new stuff, yeah, exactly. No, that's really fun. All right, wonderful. So I guess is there anything about, like, Vision API or TensorFlow or machine learning that you wanted to talk about that we haven't really sort of covered yet?
RAMANATHAN: No, you know, you guys hit a lot of the things. I think, you know, really where we are is we're at the infancy of how people are bringing machine learning into their applications. You know, one of the things is, you know, machine learning has really been used in a lot of kind of edge scenarios or requires a large amounts of compute and PhDs to make it functional, and really, what we're looking to do is how do we take this knowledge, make it pervasive so people really start incorporating machine learning into their everyday applications and make all user workflows more intelligent and--
MARK: Sort of bring it down to the consumer level so it becomes easy to use.
FRANCESC: Yeah.
MARK: Yeah. I know I've looked at machine learning just in passing every so often, and every time I do, I'm like, "Oh, this is scary."
FRANCESC: Yeah, there's a--there's a very good course on--
MARK: Coursera.
FRANCESC: Coursera.
RAMANATHAN: Yeah.
MARK: Yeah, I've done that, bits of that.
FRANCESC: I tried to go through it. It's pretty--it gets pretty intense really fast.
MARK: It's really good though.
RAMANATHAN: Yeah, no, there's a lot of good content out there. You know, we're--and, you know, it's--it, I think--you know, more and more, I think more applications will just--I think people will start expecting, like, you know--people have gotten used to how, you know, Google Now gets these intelligent flashcards sort of, and people are getting used to how they can search on photos, and I think it's just gonna--they're gonna start expecting that in all their other applications over time, and I think, you know, the more we can start providing these APIs, I think we'll make it easier for developers to incorporate that.
MARK: Yeah, just make it sort of, "I can plug in, take advantage, and just use and be on my way."
FRANCESC: Yeah, that's a great thing about Cloud Vision API, is that yes, machine learning is complicated, and yes, you may need to understand a lot of stuff to train a model correctly, but hey, if you know how to do cURL and use a REST API, you're good.
MARK: You're good to go.
FRANCESC: Yup, you're good to go, and you're gonna have it. So that's really awesome.
MARK: Brilliant. All right, well, thank you so much, Ram, for joining us. We really, really appreciate it. This was a really fun interview.
RAMANATHAN: Thank you--thanks for having me. [inaudible] thanks for having me, guys.
MARK: All right.
FRANCESC: Thank you.
MARK: Thank you. Thank you very much for joining us, Ram. That was a really interesting interview. I know I learnt a whole lot during that. That was great.
FRANCESC: Yeah, that was awesome. I got really excited about many other projects that I think we could build on top of that API.
MARK: Yeah, yeah, what--yeah. As is always with this podcast, I end up listening to someone and I'm like, "Oh, man, I got to go play with that thing. It sounds great." But yeah, enough time in the day.
FRANCESC: So--okay, so before we end this amazing episode, let's go with the question of the week.
MARK: Yeah, so you brought up an interesting one which I hadn't really encountered before, which was if you have a file within Google Cloud Storage but you want to provide temporary access to it, so it's not just public to the Internet. You're like, "I want it to be available for, like, an hour," or something like that, how do you go about doing that?
FRANCESC: Yeah, so there's actually one way of doing it which is the normal way, and I've seen people trying to do it. It's kind of not very useful to do, which is you actually add one email to the ACL, to the ACL, the access control list, and then after a while you remove it.
MARK: Okay, feels manual.
FRANCESC: That kind of works. I mean, you can do it with a script. There's a recipe as for that, so that kind of works, and you have the limit of there's only that person that will be able to access that file during the period of time that you want.
MARK: Okay. So that's, like, when you want, like, a specific user to be able to grab it.
FRANCESC: Yeah. Problem with that, the user needs to log in to do it.
MARK: Okay, got it.
FRANCESC: So depending on what you're trying to do, depending the kind of app you're developing, might be a little bit hard, so not always the perfect solution. Then we have a second solution, which is the one that I wanted to talk about today, which is what we call the signed URLs.
MARK: Yup.
FRANCESC: So the signed URLs, it's just an URL that is a way of accessing that resource that is only valid for some period of time.
MARK: Okay, so it's totally public but you can only access it for, like, an hour or a day or a week.
FRANCESC: Exactly. So you're gonna be able to say, "Okay, I'm gonna provide access to that resource, but I'm not going to make it public." Instead you're gonna--the only way to access that resource, can I go--is gonna be going through that URL, and after whatever time you choose, one hour, one minute, whatever you want, it will just disappear.
MARK: Okay, so that could be really good for, like, access tokens or something like that, something you want to keep--
FRANCESC: Yeah, I've personally used it for Google Cloud Spin, so that cool demo. We had one thing that we wanted to do--is when someone jumps and we have this image that is--
MARK: Oh, I see.
FRANCESC: Yeah, we need to visualize it.
MARK: Yup.
FRANCESC: And we don't want those images to be public, and we visualize the image for, like, five seconds, so what we did was to provide a signed URL that could be valid for, like, 30 seconds.
MARK: Oh, okay.
FRANCESC: Then the visualizer is able to show it, and if anyone was able to find--hack somehow--
MARK: Somehow find how to get it, yeah.
FRANCESC: Find the URL, if it's after 30 seconds, sorry, too late.
MARK: That's really interesting.
FRANCESC: Yup.
MARK: Okay. That's a really interesting one.
FRANCESC: Very useful.
MARK: Didn't know that existed. That's really, really cool.
FRANCESC: Yeah, and creating them, we'll add a link to the notes, but it's actually really simple. You can do it with--directly with gsutil, so the Google Cloud Storage util command, or you can also do it through REST APIs. Personally, we did it directly on App Engine, so from App Engine you can call a couple APIs, and that's it.
MARK: That just works. That's lovely. Okay, that's really handy to know. 
FRANCESC: Yup. So it is the end of the first episode, but before we actually say goodbye, where can I find you?
MARK: Okay, so I'm doing a few interesting things. I will be at the Launch Hackathon in San Francisco. After that I will be at GDC, the Game Developers Conference, also in San Francisco.
FRANCESC: Nice.
MARK: And then it looks like I will also be in Strata in San Jose, so I'm not really leaving California very much.
FRANCESC: Nice, you're not even leaving, like, north California, so you're really not far away.
MARK: No. I am going back to Australia for a bit of a holiday, but that's not work-related, so.
FRANCESC: Yeah, that's slightly more far away, yeah.
MARK: How about yourself?
FRANCESC: Well, so in a couple weeks I'm going to FOSDEM, so it's a really cool conference that takes place in Brussels. 
MARK: That's pretty good.
FRANCESC: I'm gonna be managing the Go dev room. There's gonna be a Go dev room. I'm gonna be talking there.
MARK: Fun.
FRANCESC: Yup, it's gonna be lots of fun. The week after that I'm going to Paris for the Google DevFest.
MARK: Nice.
FRANCESC: We're gonna have a bunch of developers, and if you're gonna be around, come say hi. We're gonna try to [inaudible] organize a couple hackathons or workshops. Let's see, I'm still not sure. Are we still planning that?
MARK: Still planning it.
FRANCESC: Yeah, but that's gonna be the first week of March.
MARK: We're in the same phase with, like, GDC and Strata. Stuff's gonna happen there. It'll be good. It'll be good stuff.
FRANCESC: And then--I'm actually really excited about this one, I'm going to Dubai. I'm going to Dubai for GopherCon United Emirates--or no, wait, United Arab Emirates.
MARK: There you go.
FRANCESC: UAE, that's it.
MARK: Okay.
FRANCESC: So yeah, very excited about that one too.
MARK: All right, wonderful. 
FRANCESC: And otherwise, if you want to contact us and you turn out not to be here in California or somewhere where I'm gonna be traveling, there's a couple ways they can contact us.
MARK: They can get us by email at hello@gcppodcast.com.
FRANCESC: The web page.
MARK: Yeah, gcppodcast.com.
FRANCESC: The Twitter.
MARK: Gcppodcast.
FRANCESC: The subreddit.
MARK: /r/gcppodcast.
FRANCESC: Good job, and on Google+?
MARK: +gcppodcast.
FRANCESC: And I think that's it.
MARK: I think that's it.
FRANCESC: Yeah.
MARK: If you can't reach us through one of those, then, like, I don't know how--
FRANCESC: Yeah, just let us know, but how do they let us know?
MARK: Yeah--no, they can't let us know.
FRANCESC: Anyway, thank you so much for being here again today. That was an awesome episode. Very excited about the rest of the year.
MARK: A pleasure as always, and I will see you all next week.
FRANCESC: See you next week. Bye.
{{< /transcript >}}