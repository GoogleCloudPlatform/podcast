+++
audioDuration = "00:27:10"
audioFile = "Google.Cloud.Platform.Podcast.Episode.206.mp3"
audioSize = 39544516
categories = ["ML", "AI", "Machine Learning"]
date = "2019-12-04"
description = "Gabi Ferrara and Jon Foust are joined today by fellow Googler Zack Akil to discuss machine learning and AI advances at Google."
draft = false
episodeNumber = 206
hosts = ["Gabi Ferrara", "Jon Foust"]
title = "ML/AI with Zack Akil"
image="/post/episode-206-ml-ai-with-zack-akil/images/hero/hero-EP-206.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/e63qb9/episode_206_mlai_with_zack_akil/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Gabi Ferrara](https://twitter.com/gabidavila) and [Jon Foust](https://twitter.com/syntxerror1) are joined today by fellow Googler [Zack Akil](https://twitter.com/ZackAkil) to discuss machine learning and AI advances at Google. First up, Zack explains some of the ways AutoML Vision and Video can be used to make life easier.  One example is how Google Photos are automatically tagged, allowing them to be searchable thanks to AutoML. Developers can also train their own AutoML to detect specific scenarios, such as laughing in a video.

We also talk Cloud Next 2019 and learn how Zack comes up with ideas for his cool demos. His goal is to inspire people to incorporate machine learning into their projects, so he tries to combine hardware and exciting technology to think of fun, creative ways developers can use ML. Recently, he made a smart AI bicycle that alerts riders of possible danger behind them through a system of lights and a project to track and photograph balls as they fly through the air after being kicked.

To wrap it all up, Zack tells us about some cool projects he's heard people use AutoML for (like bleeping out tv show spoilers in online videos!) and the future of the software.

<!--more-->

##### Zack Akil

When he’s not teaching machine learning at Google, [Zack](https://twitter.com/ZackAkil) likes to teach machine learning at his hands-on data science meetup, Central London Data Science Project Nights. Although he works in the cloud, most of his hobby projects look at different ways you can embed machine learning into low-power devices like Raspberry Pis and Arduinos. He also likes to have a bit of banter with his mixed tag rugby teams.

##### Cool things of the week

* Stackdriver Logging comes to Cloud Code in Visual Studio Code [blog](https://cloud.google.com/blog/products/application-development/stackdriver-logging-comes-to-cloud-code-in-visual-studio-code)
* Open Match v0.8 was released last month [site](https://open-match.dev/site/docs/)
* Cloud Spanner now supports the WITH clause [blog](https://cloud.google.com/spanner/docs/query-syntax#with-clause)

##### Interview

* Zack's Website [site](https://www.zackakil.com/)
* Cloud AutoML [site](https://cloud.google.com/automl/)
* AutoML Video [docs](https://cloud.google.com/video-intelligence/automl/docs/)
* AutoML Vision [site](https://developers.google.com/ml-kit/vision)
* AutoML Vision Object Detection [docs](https://cloud.google.com/vision/automl/object-detection/docs/)
* Coral [site](https://coral.ai)
* TensorFlow.js [site](https://www.tensorflow.org/js)
* Central London Data Science Meetup [site](https://www.meetup.com/central_london_data_science/)

##### Question of the week

[How do I run Cloud Functions in a local environment?](https://cloud.google.com/functions/docs/functions-framework)
     
##### Where can you find us next?

Zack will be at [DevRelCon](https://www.devrelcon.net).

Gabi will be taking time to recharge after conference season, then visiting family.

Jon will be attending several baby showers.

##### Sound Effect Attribution

* "Small Group Laugh 4, 5 & 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Sparkling Effect A" by CetSoundCrew of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to episode number 206 of the weekly Google Cloud Platform podcast. I'm Jon. And I'm here with my colleague, Gabi. Hi, Gabi. How's it going?" >}} 

GABI: Good, Jon. How are you? 

JON: Pretty good. Just getting over the Thanksgiving dinners and regretting how much food I ate. 

[LAUGHTER] 

How was your Thanksgiving? How was your holidays? 

GABI: It was a challenge. It was nice, cause I got to rest. I got last week. And I just got all the days together. But I'm tired of the weekend. I'm tired of resting, which is weird. But it's good. It's a good problem to have. 

JON: Right. Well, it's not a bad problem to have a lot of time to rest. I barely got the chance. I was driving everywhere for the holidays. But glad to hear that you had a great time resting. 

[LAUGHTER] 

All right. On this episode, we're going to be talking to developer advocate and machine learning engineer, Zach Akil, and learn for him what you can do with ML and creativity. Cause he's very creative when it comes to building things from scratch by his hands. And you'll hear from him how he takes a lot of inspiration from the things he sees around him to build really cool demos. 

GABI: Yeah. He's very passionate about that. And it shows. It's really nice. 

JON: And we're also going to get into our question of the week, which is how to run a cloud functions in a local environment. 

GABI: So yeah. I'll reply to that later, but learn how to use it without-- I don't know if your internet is not working, but maybe you need to do that. 

JON: But before that, let's get into our cool things of the week. 

[MUSIC PLAYING] 

GABI: We have now a Stackdriver on our Google Cloud Code, which is our extension for Google for visual code. And you can also use it on [INAUDIBLE]. And what happens, now you can see the logs with [INAUDIBLE] code, without having to go to the Google Cloud Dashboard to see it. And there is a link there to see how to enable that on your favorite ID. 

JON: Pretty sure any type of extension [INAUDIBLE] your code is so lightweight. So I think a lot of developers tend to gravitate towards that. So it's pretty cool. 

GABI: Very good performance usually. 

JON: So my code thing of the week comes from my recent travels from KubeCon. Right before we did our workshop, we released version 0.8 of Open Match. And 0.8 is really focused around the developer experience. So there's a lot of getting started guides, a lot of tutorials. And here you'll see in our documentation that they really break down the most common use cases, and pretty much sample applications that you can create using Open Match. So if you're interested in creating a scalable matchmaker, take a look. 

GABI: The other one is, if you're familiar with what we call common type expressions, it's a way to do sub queries and reference sub queries without having queries inside queries inside queries. The with clause, which you do that, it's now available on Cloud Spanner. So you will be able, Jon, to create a sub query, and then reference the next query that you're creating without having to copy and paste code, which is, in most cases, not a good idea. 

And being able to create the [INAUDIBLE] table in the execution time. So being able to process that information for you. So you gain performance and more visibility on your code. 

JON: Well, that's going to do it for our code things of the week. Let's go along and talk to Zack, and see what he has to say about Auto ML vision, Auto ML video, and the cool demos that he's been working on. 

[MUSIC PLAYING] 

And on this episode, we're going to be talking to Zack Akil, a very, very interesting and very good friend of ours. Zack, can you tell us about who you are and what you do? 

ZACK: Yes. Thank you very much, Jon. I am a machine learning engineer and developer advocate for the Google Cloud Platform. 

JON: And what specifically do you work on? 

ZACK: So my role in projects are all focused around trying to inspire developers to implement machine learning into their projects. 

GABI: What is your favorite machine learning tool that you have on the Google Cloud Platform that you recommend, that you like most? 

ZACK: The products that I focus around are all the machine learning APIs and the machine learning Auto MLs, which we like to call the sort of building blocks of machine learning that allow you to gain some power and value from your data without necessarily needing to know all the in-depth knowledge around machine learning. 

JON: Awesome. So we've mentioned a lot of the AI and AutoML tools in our cool things of the week as they do product updates. So can you give us your definition of AutoML Vision, AutoML Video, and best practices, and maybe what they're best used for. 

ZACK: The most common use case that I always tell people about is if anyone's ever used Google Photos on their phone or on their Pixel, where they're able to search through their own images, based off of tags which they themselves didn't put in. So if you've taken a picture of the beach, you can search for the word beach, and it will find, from your own photos, pictures of beaches. And that's actually a feature that's built into the Vision API. 

So you can upload any image. And it will automatically annotate it for you with objects that are inside the image. And it can even do things like OCR, or text recognition within the image. And we commonly use that for if people just have a large storage of images or videos to automatically annotate them to make them easier to search through or to gain some insight about what videos or pictures people are uploading into certain services. 

GABI: That explains why, when we look at Google Photos, and if I search for winter, I can see snow or hoodies, hoodies, or with a beanie. Is that correct? 

ZACK: Yeah. That's the kind of tags which will appear when you search those sort of things. 

JON: Awesome. And that also explains why it's so easy for me to find a lot of my game images that I take screenshots of. Hopefully. And hopefully try to recreate later on when I'm practicing [INAUDIBLE]. 

ZACK: Exactly. 

GABI: With AutoML Vision, what is the most common scenario? Is it streaming? Or other kind of annotation, like AutoML Image? 

ZACK: One of the main use cases for video is in new video archive and search. Because a lot of times companies, especially companies that maybe have their own kind of storage clients or are storing a lot of videos, things like media companies, they will allow them to store the videos and search through them quickly, without having to go through and annotate them. 

A common use case that someone came to me with recently was with regards to video editing. So especially if people are recording sort of niche video scenarios where they're interviewing people, and they maybe want to get all the videos where people are laughing, that's not a feature that is built into any API at the moment. But it is a feature that can be trained using AutoML video. 

So if you want a special type of detection, which detects when people are laughing, or maybe special camera movements, that you can train your own AutoML to detect those so they will automatically retrieve them when you want to. 

JON: Awesome. So you really focus on AutoML Vision and Video. So when I first met you, Zack, maybe earlier this year, you had a demo running on your desk that if you placed an item in front of a camera, it would tell you whether or not the actual item was healthy or not. 

And I think the sample data that you were using were fruits and candy. So it seems like you have a maker's approach for all of the work that you do, and all of the demos that you do. So can you tell us a little bit about how you come up with those ideas? 

ZACK: Absolutely. It all goes back to when I first got into tech. And it was, I got an Arduino, which is like a small, prototyping electronics board for making projects to make LEDs and buttons light up. And that was my first intro into programming. And so when I started learning using that, I found it a lot more rewarding seeing even just a single LED light up, compared to having some text on the screen move in a different way. 

So since then, I fell in love with making physical things happen, physical hardware demos. And then after university, I looked into machine learning. And it was a lot of really cool machine learning applications that were running on UIs, desktops, and exporting CSV files. And I really wanted to combine my new found interests of machine learning with my old passion of hardware and electronics. 

So now, when I sort of come up with ideas, I always try to combine machine learning and embedded technologies, just because I think machine learning's one of the most interesting new technologies that people are getting into. And hardware electronics is one of the most fun ways to interact with any kind of technology. So I just always try to combine the two. 

GABI: And you also created a demo that I think you won a prize or something about it with a bike and ML. Can you tell us about more of that? 

ZACK: Absolutely. So recently, one of my more recent projects is a smart AI powered bicycle, which performs real time image classification of what's happening behind the cyclists. So as you're cycling down the road, and, say, a large truck is approaching from behind, your handlebars will light up red to indicate there's danger. And it will light up on maybe the right hand side of your handlebars, if your truck is on the right hand side. And if the truck pulls from the right to the left, you'll see a kind of blob of LEDs move across your handlebars to represent the truck. 

And I built this using the Coral Edge TPU, which is one of Google's products for running machine learning fast on embedded systems. And that plugs into a Raspberry Pi. And I built this. And I built it onto a physical bike. 

And we recently had an internal sort of hackathon. And in that hackathon, it won first prize as just like a hacky project, and quirky implementation of machine learning. But it's actually a project which I plan to continue working on until I can get kind of a more solid working concept going, and potentially working with local bike companies in London to see if we can get it onto real bikes for people. 

That's impressive. I would assume that you're a cyclist yourself. And there's probably some real life inspiration behind this project. 

Oh, yeah. Absolutely. There's some horror stories around being heckled at on the road by accidentally pulling in front of people without seeing that they're there. But knowing that I couldn't really do anything, cause when you're cycling in London-- and I'm sure it's similar for other busy cities like New York-- you really can't turn round to check, because you're constantly having to look forward. And it's just an extreme sport is the way I always classify it. And the current technology to help people be more aware on the road hasn't really gotten past mirrors. They're ugly. And they don't run machine learning. So that's why I came up with this. 

JON: That's awesome. It's kind of funny, because in New York you get the opposite. It's the cyclists who heckle you when you're driving throughout the city. 

ZACK: The funny thing is, when I took this, I built this, and I built a travel version of this bike. So like a flat pack IKEA model of a bicycle that I would take around and assemble on stage to show people. And I took it down to Sydney. And I showed it to people. 

They all loved it, because Sydney has a similar problem. But they also notified me of a specific regional problem to Australia, which is for cyclists the biggest danger isn't necessarily trucks or cars, but actually territorial birds that will swoop down on cyclists. 

[SCREAMING] 

[CRASH] 

Yeah. And it's a very, very common issue in Australia. And, in fact, it's very common to see cyclists cycle around with zip ties tied to their helmets to create spiky hair to scare away birds from attacking them. 

And yeah, it's a crazy problem. And the initial version of the bike was just using an off the shelf model that had traffic detection. But I was thinking of sort of making an Australian version of the bike that has a model trained in AutoML that has both traffic and territorial birds so that it can detect, oh, there's a car, there's a car, there's a truck, and there's a falcon coming back. 

[LAUGHTER] 

What's cool is with AutoML, it's actually quite straightforward, because AutoML now supports exporting object detection models to the Coral Edge TPU. 

GABI: Oh. So you have it on your hand without having to connect to the internet or relying on 4G? 

ZACK: Exactly. So yeah, if you can take a model that's trained in the cloud on AutoML, and just download it to run locally on a device so you don't need a connection to the internet for it to work. 

GABI: And about that, you also presented that demo at Cloud Next London. 

ZACK: Yes. Yes, I did. 

GABI: How was the reception? 

ZACK: I always start at the top by asking who in the room is a cyclist. Fortunately, it seems a lot of people in tech like cycling. Because it's always the entire room that raises their hand. So they seem to really like it. 

I always also ask, OK, who cycles in London? Usually it's about the same number of people, if it's a talk in London, of course. 

And then I'll follow that up with, OK, who would recommend cycling in London to a family member? And then all the hands go down. So everyone's on the same page as like, we all cycle in London, and we all think it's very, very dangerous, and we wouldn't want anyone to do it. 

I show them the bike. They seem to really like it. And then people always come up afterwards. Usually, actually, every time I've given the talk, there will be someone that comes up afterwards who has an injury that they got that week from cycling in London. And they'd be like, I really could've used this week. So it really resonates with a lot of people. 

GABI: Except the birds. 

ZACK: Yeah. 

[LAUGHTER] 

JON: That's awesome. 

And then I do remember when you were in New York, you were working on that image classification matrix, or something like that? 

ZACK: Oh, OK. I was doing a little side project. 

JON: Yes. 

ZACK: And it was actually my first time doing image generation, where you can get an AI to generate new images for you. And actually, I used TensorFlow JS on my personal website, ZackAkil.com, to generate the actual title of the website in real time. So as you're moving your mouse around, it's generating the title. 

It's completely useless. 

[LAUGHTER] 

It doesn't solve any problems. It was just a bit of fun. That's how I have fun is to experiment with new AI. 

GABI: Beyond the demos that you built, I think you have a lot of interactions with all the developers too, being a developer advocate. Did someone else come with you, like with a really cool, interesting implementation from AutoML or the ML APIs, beyond that one that you mentioned about the laughing one? Beyond that, do you have any other examples? 

ZACK: [INAUDIBLE] next San Francisco's. And it was a lightning talk about giving a video and using the Video Intelligence API and the Vision API automatically bleep out anytime a person says an acronym. 

And immediately afterwards, someone came up to me and said that they wanted to use this kind of technology. Using an AutoML video model, detect when someone is talking about a specific subject. At the time I think "Game of Thrones" was still pretty hot. And they wanted to detect when, say, there was a video of someone being interviewed and they gave away a spoiler to "Game of Thrones" and beep out when they say the spoiler. 

MAN: Hang on a minute. I thought Ned Stark was the main character. And then they chopped off [BLEEP]. 

ZACK: So they were going to use AutoML to build a custom model to detect that, which I thought was pretty cool. 

GABI: They should do that for trailers too. I can't stand when you go somewhere. I don't watch trailers, because it spoils for me. They reveal everything. And I want that everywhere. 

ZACK: That would be perfect. I feel like it's gone crazy now, with the amount of trailers that just give away the whole film. Perfect use case for an AutoML video detection model. 

So automatically trim down the trailer to just keep things interesting. 

JON: So Zack, I know that you're quite the athlete. I know that you play rugby. 

ZACK: Yes. 

JON: When you came to visit New York, you just randomly decided to go to pick up dodgeball. 

ZACK: I tried to find rugby, but they didn't have it. But I settled for dodgeball. 

[LAUGHS] 

JON: So do you see yourself using ML in the sports and recreational activities realm? Or can you tell us about some demos that you've done in that space? 

ZACK: That's like absolutely. That was my original inspiration to get into machine learning and was actually to build automated camera equipment for filming sort of grassroots rugby matches. Because at school level, I didn't play rugby initially. But I recorded the matches. 

And then when I started playing, I really wanted people to record my matches, but nobody wanted to do it, cause they didn't want to stand out there in the Irish freezing weather, holding a camera steady. 

I remember one of m first ever physical projects was actually a camera that would automatically follow rugby matches and record it. I think I gave my first ever talk at a Pi Data Conference about that demo. And continuously, anytime AutoML releases a new feature, my first examples of demos are always to do with sport or sport tracking. So I'm actually already talking with some of the lead coaches of the Great Britain tag rugby teams about using AutoML, video tracking, and things like that in combination with drone footage that's already been taken of training sessions to try to say, track players, and track their acceleration, and things like that. 

And so, yeah. Absolutely. I expect to see quite a few sport related demos, especially in summertime. Not so much in the wintertime. It's too cold. 

GABI: Except if it's curling. You could do something with curling. 

ZACK: Ooh, that could be nice, like tracking the curls and stuff. It's not big over here. 

GABI: Not here too. But you said winter sport. And that one came to my mind. 

ZACK: Winter sport. 

GABI: So what is the demo that you're working on now? 

ZACK: Well, we're just finishing up all our work on our most recent demo, which was in partnership with the Football Association here in the UK. And it was actually the main demo of the Next London Conference, which involved three camera phones. So they're actual Pixel 4 phones to record a penalty kick from a full size football or a soccer net. 

And it would upload all the video footage to the cloud using FireStore and analyze them with video intelligence and all this stuff so that a person would go up, take three kicks. And then they would immediately see a dashboard with the speed and accuracy, along with the style of their kick, and get their own player profile card printed out for their sticker book. 

JON: Oh, that's awesome. 

GABI: How long ago was the delay for the kick to having the card? 

ZACK: From kick to card, the actual printer itself took a minute. Getting the kick with both the accuracy power and the style calculations took about 15 seconds, conservatively. 

Sometimes a person would forget to hit stop recording, and it would take half a minute. But around 15 seconds to get all the data continuously analyzed, and then into that image is about that 15 seconds. 

GABI: Impressive. 

JON: That's pretty cool. So I'm kind of curious, what ML tools are you using when it comes to following trajectories? Cause I would assume, if you're bending a ball under in shot, then there has to be some wave tracking the trajectory, and then hopefully coming up with a more precise calculation on, I guess you can call it, with the style. 

ZACK: The way we calculated the accuracy, this is probably the bit of the project that I was most proud of doing, because what we did is we used AutoML object detection. And we just wanted it initially to track a football moving across the screen. And there is already lots of public data sets that have footballs and other sports balls labeled. And we actually used the public COCO data set, which you can download. 

And I actually just took that and dumped it into AutoML object detection, scraping out just the photos of balls, and then trained a model that would track the soccer balls. And that was the initial model. 

It performed all right until the balls were kicked too fast. Cause then they stopped looking like sharp soccer balls and were just blurry smudges across the screen. And that's when we actually just collected a bit more data and labeled it in the AutoML UI. Which is a good use case for slightly more customized models, because the public data set didn't have blurry soccer balls. 

And after that, it was performing like 99% accuracy on tracking these fast moving objects. And so what we did to calculate accuracy is we just recorded someone taking a kick for each frame, detect where the ball is. And then I had a bit of a data science background. So I played around with visualizing maybe, OK, what's the speed of the ball moving in pixels? And what's the trajectory of the ball moving in pixels? 

And eventually I stumbled across a way of detecting when the ball actually made impact with the goal by continuously checking the direction of the ball that it's moving. And then as soon as the direction changed suddenly, that was when it had an impact with something. And I would just take that as the point of impact. 

And then we were also using AutoML to track the targets that we had hanging in the goal net. And then once we knew the impact of the ball and the position of the targets, we just did a little distance metric to calculate accuracy. 

JON: Wow. That's really cool that you found a work around. Because I know that when it comes to sports imaging, they typically use cameras that have really high refresh rates. That way you can capture images really quickly. But knowing that ML can solve that issue with just your standard-- I believe you said you used Pixel 4 phones. Right? 

ZACK: We used Pixel 4 phones. Yeah. Cause actually when we were building the initial prototype, we were using my own Pixel 2 phone. And because most Android phones have a slow motion capture of like 120 frames minimum, that was fast enough to capture even people who were really hammering these kicks. And it was tracking them no problem. 

JON: That's pretty awesome. 

ZACK: That's using machine learning to do the heavy lifting, rather than getting more high end technology. I think the original spec of the demo, we were going to go for these high end, high speed cameras. But my kind of hackery nature wouldn't allow it. I was like, no. No No. I just want to use a mobile phone because it's simpler. And more people have access to mobile phones. And rather than having a model that detects a sharp soccer ball, we'll just train a model that detects a blurry one. It's fine. 

JON: Way to think like a developer, man. 

GABI: Did you have to think that under pressure? Or you had time to do that? 

ZACK: I'm a notorious procrastinator. So to answer both questions, yes. Yes, I had time. And yes, it was also under pressure because I didn't utilize my time as well as I could have. 

JON: So I'm pretty sure you had to take a couple shots. Can you tell us a little bit about your card? 

ZACK: I did check my card this morning. And I remember exactly the scores. I got 91 on power. I got 96 on style. And 84 on accuracy. 

GABI: Oh, wow. 

ZACK: Which was average. Because we said at bare minimum, it was impossible to get a score below 50 on any of the stats. 

JON: That's super impressive, man. 

[LAUGHTER] 

GABI: And I'm thinking, everything over 80 was good. 

JON: So can you tell us about anything interesting that developers are using AutoML for? Or maybe something that you have in your pipeline for demos coming up. 

ZACK: Absolutely. What I am looking to do is using AutoML video tracking to build sports recognition technology so that we can track players on pitches and work on new tactics for players. 

GABI: Is there anything that we missed that you would like to mention before we wrap things up? 

ZACK: I mean, the only thing that's currently on the horizon for me is using object detection, exporting to Edge TPUs for my version three of my Edge TPU bike. 

JON: Where can people find you? Are you going to be traveling anywhere? Can we expect some cool demos that you're going to open source, or maybe they can follow you on your social media? 

ZACK: Absolutely. So I am on Twitter @ZackAkil. You can find me around London. I run a London meetup group for people who are looking to get into any kind of data science or practical machine learning called Central London Data Science. 

And yeah. Twitter and London. 

GABI: No conferences coming? 

ZACK: I'm coming to be in [INAUDIBLE] Con. I'll see you all there. 

JON: Yeah. Yeah. For sure. So Zack, it's been an absolute pleasure having you on this episode. Really looking forward to seeing a lot more of your cool demos, and hopefully we can hang out a little bit more when you come back to New York City. 

ZACK: Absolutely. 

GABI: Thank you, Zack. 

ZACK: Thank you so much. It's been a blast. 

GABI: Thank you, Zack, for talking to us. And now we're going to do our question of the week, Jon. 

[MUSIC PLAYING] 

JON: So our question of the week is how to run cloud functions in a local environment? So Gabi. 

GABI: The cool thing about serverless architecture is that you don't need to worry about infrastructure. But sometimes you want to test something without deploying first, which is a good practice. So you can now use Google Cloud Functions framework, which it is an extension for Node.js, where you can create a cloud function locally. And you serve your Node.js application using Express. And you can hit the URL that you're just serving, and test your cloud function locally without having to connect necessarily to the internet. So it makes your testing easier. And you don't have to wait to deploy, like all the time you do a different thing on a function. So I think that's very useful. 

JON: Awesome. Serverless without the internet. 

GABI: Well, it's not the same thing. Well, it kind of helps with small case scenarios. 

JON: Right. So Gabi, where are you going? Any future travel to wrap up the end of the year? 

GABI: So no more work travel, cause conference season's over finally. I'm going with my family to Brazil. So I'm going to spend the holidays there. So it's going to be a family meeting, which is nice. And you? 

JON: I just wrapped up the last of my conference travel, and any other travel that I'm having. But what I will be doing is going to a bunch of baby showers. Everybody just decides that we're going to have kids now. 

So I will be attending a couple baby showers. One of them being my twin brother's. And at the wedding that we just went to, we found out that they are having a boy, which we're really excited about. 

GABI: Yeah. You kept that secret from me. 

JON: I definitely did. But very excited for them. And very excited for all of my other friends who are expecting kids. 

GABI: That's cute. 

[LAUGHS] 

Thank you all for listening to this episode. And we are going to be back next week. I'll see you later. 

JON: See you. 

[MUSIC PLAYING]