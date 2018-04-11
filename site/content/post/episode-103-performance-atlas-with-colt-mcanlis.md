+++
audioDuration = "00:30:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.103.mp3"
audioSize = 44036857
categories = ["Performance Analysis", "Profiling", "TCP/IP", "SRE"]
date = "2017-11-15"
description = "Colt McAnalis comes on the podcast this week to tell us all about the video series Performance Atlas!"
draft = false
episodeNumber = 103
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Performance Atlas with Colt McAnlis"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/Sy1XFBrqJrL"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7d7taw/episode_103_performance_atlast_with_colt_mcanlis/"
+++

[Colt McAnalis](https://twitter.com/duhroach) joins the podcast this week to talk about his [Performance Atlas](https://www.youtube.com/playlist?list=PLIivdWyY5sqK5zce0-fd1Vam7oPY-s_8X) series where he dives into how to make Google Cloud applications faster and cheaper. In his words, his job is to help get someone promoted.

<!--more-->

##### About Colt McAnlis

Colt McAnlis is a Developer Advocate at Google focusing on performance & compression. Before that, he was a graphics programmer in the games industry working at Blizzard, Microsoft (Ensemble), and Petroglyph. He’s been an Adjunct Professor at SMU Guildhall, a UDACITY instructor (twice), and a Book Author, (twice). When he's not working with developers, Colt spends his time preparing for an invasion of giant ants from outer space.

##### Cool things of the week

- With Multi-Region Support in Cloud Spanner, have your cake and eat it too [blog](https://cloudplatform.googleblog.com/2017/11/with-Multi-Region-support-in-Cloud-Spanner-have-your-cake-and-eat-it-too.html)
- The State of Data Science & Machine Learning by Kaggle [blog](https://www.kaggle.com/surveys/2017) and [podcast](https://soundcloud.com/linear-digressions/kaggle-survey-produced)
- Introducing Certified Kubernetes (and Google Kubernetes Engine!) [blog](https://cloudplatform.googleblog.com/2017/11/introducing-Certified-Kubernetes-and-Google-Kubernetes-Engine.html)

##### Interview

- Performance Atlas [series](https://www.youtube.com/playlist?list=PLIivdWyY5sqK5zce0-fd1Vam7oPY-s_8X)
- Profiling App Engine (Standard) Boot Time [video](https://www.youtube.com/watch?v=vuVpxOIA8Wc)
- TCP BBR [site](https://cloudplatform.googleblog.com/2017/07/TCP-BBR-congestion-control-comes-to-GCP-your-Internet-just-got-faster.html)
- Cloud Functions [site](https://cloud.google.com/functions/) [docs](https://cloud.google.com/functions/docs/)
- Understanding Compression [book](http://shop.oreilly.com/product/0636920052036.do)
- Google SRE [book](https://landing.google.com/sre/book/index.html)
- TCP/IP Illustrated [book](https://www.amazon.com/TCP-Illustrated-Protocols-Addison-Wesley-Professional/dp/0321336313/ref=sr_1_1?ie=UTF8&qid=1510769486&sr=8-1&keywords=tcp+illustrated)
- Ilya Grigorik [site](https://www.igvita.com/)
- Perf Like a Pirate III [site](https://www.meetup.com/sfhtml5/events/238958595/)

##### Question of the week

What are the differences between sustained and committed use discounts?

- Sustained Use Discounts [docs](https://cloud.google.com/compute/docs/sustained-use-discounts)
- Committed Use Discounts [docs](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts)

##### Where can you find us next?

Mark will be Montreal in December to speak at [Montreal International Games Summit](http://www.migs17.com/en/home/).

{{< transcript "MARK: Hi, and welcome to episode number 103 of the weekly Google Cloud Platform podcast. I am Mark Mandel and I'm here with my colleague, Melanie Warrick. Hello Melanie, how are you doing today?" >}}

MELANIE: Hey, Mark. I'm great. 

MARK: We're actually in the same place at the same time, which is really nice. 

MELANIE: It's amazing. 

MARK: Awesome. So today we're going to have a really great conversation with Colt McAnlis. He has a series called Performance Atlas, talking all about performance on GCP, which is really cool. And then after that, we have a really cool question of the week, talking about the differences between sustained and committed use discounts. But before we do that, why don't we have a chat about the cool things of the week? 

MELANIE: I think that's a great idea. And I know one of the main things we definitely were excited about was the fact that there is multi-region support for Cloud Spanner. It has finally been released, and it's exciting because you finally are able to actually scale your Spanner instances out to multiple regions. 

MARK: Yeah, this is super cool. I really like this one. Not only does this mean that you have lower latency for all of your users, but it means that even if a region happens to go down, you're still safe. 

MELANIE: Exactly. 

MARK: That's pretty sweet. I love Cloud Spanner. It's sort of really cool in that you like, oh, I would like something to happen when a user does a thing in Japan, but I need it to be consistent when somebody in Switzerland needs to see that. And you can, which is pretty sweet. 

MELANIE: Yes. So the other cool thing of the week is that Kaggle actually ran a survey where they wanted to get information about the people who are using Kaggle and the data scientists that are out there. And they got 16,000 responses, which is pretty impressive. And they've already done some analysis of their own and got the data set that's out there for others to explore. 

Some of the interesting points that they found were things like the average age of data scientists, which is apparently hovering around early 30s. And just looking at, actually, what people are making in different locations, the US versus other countries. And of course, the US is showing a higher salary for that specific role. But yeah, I'd highly recommend checking it out. And we have links for the Kaggle data set as well as a podcast that was separately done on our blog. 

MARK: Cool. Actually, so I didn't realize this before. They did the survey, but they also released the data set. So if you wanted to play with the Kaggle data set on Kaggle, then you can Kaggle it? 

MELANIE: Exactly. 

MARK: All right, cool. Awesome. 

[LAUGHTER] 

MELANIE: Not confusing at all. 

MARK: No, that's great. All right, fantastic. Finally, we'd be remiss if we didn't mention the change in name, for very good reasons. So you may be familiar with Container Engine, Google Container Engine. We talk about it a lot. It is now Google Kubernetes Engine. Reason being, that it has now been released, that there is now certified Kubernetes program. So that you can then go, oh, this provider here, it's a good Kubernetes installation. 

So they're providing all the things that the certification provides. And once you are certified, you are able to use the name Kubernetes in your product. Since we are certified, yay, we're able to now call ourselves the Google Kubernetes Engine, which I'm going to mess up all the time. 

MELANIE: Yeah. We're both probably going to mess that up. But GKE now is officially something that you can easily attribute to, in terms of the name. All right, so let's go ahead and get to the interview. 

MARK: Let's do that. Today is a very exciting day. We are joined by one of our most remarkable of teammates, Colt McAnlis. How are you doing today, Colt? 

COLT: I'm doing good. That's a lot of setup. 

[LAUGHTER] 

I'm really afraid of what's coming next. 

MARK: No pressure, no pressure at all. 

COLT: Most remarkable, gosh. 

FRANCESC: I guess the first question is, why are you so remarkable? Who are you? 

[LAUGHTER] 

COLT: Nobody, actually. I'm a toaster repairman, or at least that's what I like to tell people. It's a funny story. So I'll get to who I am in a second. 

[LAUGHTER] 

FRANCESC: [INAUDIBLE] as well? 

COLT: Yeah, there's a legitimate period of time when no one really understood what developer advocates at Google did. And so I would go to conferences and they'd be like, what do you do? And I'm like, I'm a toaster repairman. And they bought it. They're like, legit? And I'm like, yeah, yeah. It's my job to make sure all the toasters are networked properly. And they're like, whoa. Seeing the people's eyes like, that's your job? That's amazing. How do I get that? 

MARK: That's Google for you. 

COLT: Google shoe and people think really that we make shoes. No. My name is Colt McAnlis. I'm a developer advocate here working on performance and data compression, focusing dominantly on performance for the cloud right now, how you can write faster applications, cheaper cloud applications, take your existing architecture, tune it, make it better, make it faster, make it, cheaper, all that fun stuff. 

FRANCESC: Cool. So I'm going to do it in "The Simpsons" way of you might remember me from previous series as Compressor Head. Tell us a little bit about it. 

COLT: Yeah, yeah, yeah. So there's a couple ways we can play that game. Yeah, so you may remember me from a series called Compressor Head, where the point of it-- I'm a huge cooking show fan. I don't know if any of you have ever seen "Good Eats" with Alton Brown. I find his cinematography is great. I mean, the fact that people can sit down and watch a cooking show and become enamored with it. We try to figure out how we can duplicate that at Google with different things. 

And I thought to myself, what is the driest subject matter we have? Data compression. And I was like, how do we make data compression and Alton Brown work together? And so we tried to break down these extremely difficult, statistically-defined algorithms that basically drive the back end of everything we do on the internet and make it physical. So how do we show data compression using sticky notes and pet dinosaurs and markers and sliding doors? 

And that's where Compressor Head came from. It's us defining the basics of data compression in these physical mediums. 

FRANCESC: Yeah, it is a beautiful show. I really like it. 

COLT: Thank you. 

FRANCESC: You did a great job. Google Developer Studio did an amazing job. 

COLT: Yeah, they take all the credit. 

FRANCESC: Effects and everything. 

COLT: Yeah. They made me sound credible and not like I was just rambling for 30 takes. 

FRANCESC: That's amazing. 

COLT: They cut it together really well. I was impressed by that. 

MARK: Cool. So you now have a new series called Performance Atlas? 

COLT: Google Cloud Performance Atlas. Yeah, yeah, yeah. So the whole point of Cloud Performance Atlas is to sort of codify best practices and give it out to you in bite-sized chunks that you can take back to your engineering team, or just little tidbits that you may not have gotten access to. I mean, let's be honest. Building a cloud application is massive. There's so many moving parts. It's really difficult for one person to keep it in your head. 

And if you're using a platform that's also as massive, there's lots of little nuances. And sometimes performance falls through the cracks. You don't understand how to test things, you don't know the right way to profile it. If you do profile it, you don't know if you're using the right set of things. You might be introducing error. Cloud Performance Atlas is all about helping you of walk through these steps for the common best practices and get back on the page of things. 

MARK: So what does performance mean to you? That seems like a very broad topic, right? 

COLT: Yeah, great question. So I come from a game developer background where I was dominantly focused on GPU performance. So how many pixels can we get through the frame, make sure that we're staying at 60 frames a second regardless of resolution, and all that stuff. So for me, it all comes down to cycles and operations that influence your bottom line, whatever your bottom line is. 

So for most cloud applications, you worry about different things like boot time. Like if you're a web server, you really worry about how fast your systems can boot up, how fast the content can get from your servers to the clients as stage one. Because if you increase your web page load time, you lose a billion in revenue, like Amazon said last year. 

On the other side of it, once you get that down, you need to start doing the next step of it which is, how can we optimize our set up so that we can increase our cost performance? So getting the same result for your end user with less operations or in a cheaper fashion. It's kind of a double-edged sword. You want to serve things and compute things as fast as possible for your users while at the same time reducing cost as much as you can with the least amount of headache for your development team. 

FRANCESC: Cool. So I was looking at the series right now and you've published already 19 of those episodes. 

COLT: So far so good. 

FRANCESC: What are those episodes based on? What do you cover, in general? Is it more like something, I don't know, theoretical? Or do you get more into the code? 

COLT: Oh yeah. So what we basically do is I get a chance to look at some of the common problems that developers have on Google Cloud. And we get a chance to talk about the real problems that people are really having in the trenches right now. One of the things that was my favorite episode was actually profiling App Engine boot up time. Just type that in and the number of people who still have trouble finding out how to profile it is off the chart. 

So being able to actually sit down-- what we typically do is take an idea like that, we sit down and we actually recreate a benchmark from scratch. So we go in, we figure out what we need to test, how we need to test it, how we need the right to test. Then we hand it off to some smarter people who make it look better and then remove all of the error that we may have inserted into it. We show the A and the B and then we figure out the right steps forward in case you find a problem. 

So for that particular example, one issue was that if you were using Python as an App Engine standard, the particular libraries had a larger influence on boot up time. So if you were using SciPy or NumPy, those took about 2x to 4xs long to initialize in import then other libraries did. And so individuals who may be doing some scientific computation were getting longer boot up times during server spikes and ending up with a massive bill because their instances went through the roof. And the culprit was really that they were not optimizing how they were importing Python packages. So being able to sit down, show people how to time that, how to break out those profiles, find the culprit, and then optimize your code appropriately was a really cool thing to do. 

MARK: So how did you profile it? 

COLT: [LAUGHING] So for that particular example, we were able to get those packages locally. And then in Python, you can actually delay load things. I'm not sure if everyone knows this, but it's import on demand. So once you actually call an import statement, then it's global after that point. So we can basically go through and time particular just blank functions or know op functions and see how long they take to initialize due to the import process. And then you output all that, create a nice little graph, and can look side by side about what's taking the extra time. 

FRANCESC: Interesting. So the task was actually basically from the outset, sending out a request and waiting to see how long it takes to actually start. 

COLT: Yeah, exactly. 

FRANCESC: Nice. 

COLT: Yeah, because that's the environment we're dealing with. I mean, a request comes in, you get a new instance that boots up, and we want to see what the world looks like in that environment. If we move it out of that environment, we run the risk of not properly testing things in the right way. Again, the opposite of introducing error is creating a false testing environment, and that's not what we want to do. 

FRANCESC: Cool. So this actually sounds really interesting. And now I'm wondering, these are the common problems? How do you know when a problem is common? 

COLT: [LAUGHING] That's a really good question. We have an amazing, amazing support staff here at Google. If you're a customer of Google Cloud Platform, we have tiers of service, we have dedicated people to help you through your problems, we've got great Q&A systems, we've got great community managers. This is a lot of information and a lot of common problems bubble up through this process. So if you can troll through it on a daily basis, you see these common trends. 

Sometimes these are our big customers. This is one of the favorite things I like about our show, is that we can't use names of actual companies. So we get a chance to come up with fake names like Tutorama is an outsourced tutoring system. 

FRANCESC: Of course. 

MARK: OK, makes sense. 

COLT: Or Dobermanifesto is a microblogging platform for animals. 

FRANCESC: I'd read that. 

COLT: [LAUGHING] So we get a chance to have a little bit of fun with coming up with these names and personas, and how that ties into these things. And if we don't find really good examples from individuals in the field and companies having problems, we get a chance to go through and look at the best practices. Because I mean, we're all developers. We've all been through the documentation, where you find that one line that's like, don't use slash M. And you're like, why? What's going to happen? I don't know. So being able to go through that and write a test, and show the performance characteristics of that also helps illuminate and shine light on different areas of our performance. 

FRANCESC: You were mentioning before something that I thought was really cool, because I had no idea. Which is, you were talking about Cloud Storage. And how apparently, there's a thing there's one of those one line-- 

COLT: [LAUGHING] One line. 

FRANCESC: --piece of documentation that you will probably miss, which is something about do not upload a lot of files at the same time that have continuous names. 

COLT: Sequential file names, yeah. 

FRANCESC: Yeah. How did you find this? Did you actually read the docs? 

COLT: I actually read the-- 

FRANCESC: What? 

COLT: Yes, yes. That's unfortunately one of the things I do on a regular basis. So there's a little known system in Google Cloud Storage that a lot of people run into. So if you've got a system like, let's say a monitor camera, or you're taking snapshots of a time series, you typically label the file name with the snapshot of the time. So you can look at all your time stamps and sort them and figure out where things go. This is very common in scientific computing, very common in capture-based computing, and things along those lines. 

However, what we've seen is that customers who have that scenario often get throttled when they're uploading that content to Cloud Storage. And they don't understand what's going on. They suspect it's a regional bucket problem versus multi-regional, the distances, maybe it's parallel performance. What it actually comes down to, since we found this-- someone actually gave it a nice talk at Cloud Next '17 about it, about some of the internals-- is that what happens when you upload files to Google Cloud Storage, we internally will distribute them in parallel based upon filename. 

So what we do is we use that as a key to determine how to separate it out. And this is actually really important because if you're uploading two folders next to each other, each folder will then have a different file name path. We know then we can push those to different shards and handle the connectivity for the upload. So you get nice speeds when we use this sort of process. 

However, if you have sequential file names in the same folder, they basically all can end up getting keyed to the same upload shard, which means that you're basically bottlenecking yourself into a serial upload process there. And we found this was common enough that people were running into it. So we talked with some of the engineers and we found that their suggestion was to actually take a hash of the file name and prepend it to the actual filename itself. Not the path, but the file name. 

And then what this does is, given, if you use a pretty evenly distributed hash-- I mean, it doesn't have to be cryptographically secure or anything. But that will allow it to actually get pushed and properly load balance across multiple upload shards for GCS so you can actually get the maximum upload speed you need from there. I mean, that's the little things. Some stuff like that you wouldn't expect, you might miss in the documentation. That's the whole point of Cloud Performance Atlas, is surfacing those little things that make big results. 

Basically my job is to help someone get promoted. We want someone to walk in and be like, I just quadrupled our upload rate. And they're like, yay, let me throw money at you. 

FRANCESC: How? Random idea. 

COLT: Don't worry about that. 

[LAUGHTER] 

MARK: That's not important. 

COLT: Yes. 

MARK: Say we have a customer and they're like, we hit a performance problem. Obviously, [INAUDIBLE] Performance Atlas is one solution. 

COLT: Step one, yes. 

MARK: But say, hypothetically, they can't find their solution amongst your amazing, amazing content. What do you recommend for how they would end up determining what their issue is or how they can resolve it or where to take it from there? 

COLT: Fantastic question. So first point of all testing should land in Stackdriver. As far as monitoring and performance go, Stackdriver has a fantastic suite. If you're running a continuous build environment, you should already have monitoring set up. You should have a pretty good idea of what your average peak and alert-based processes are. Stackdriver can give you all that information. 

We just, in fact, rolled out monitoring in Stackdriver for your load balancer so you can actually see what requests are getting cached and whatnot. So there's a lot of information there. And we have fantastic logging inside of Google Cloud as well. So you can go through the logs, you can see the exact numbers. 

If those things aren't helping you point to where a problem is or an isolation or a unit or a test case involved with that, what I like to do is start cutting away things. So if I remove this from the path, if I remove this from the path, do we get the same response? When you start whittling all these things down, you usually end up with a least common factor of about two or three things that are chained together. 

And then from there, you can either do micro-benchmarking, depending on where the issue is, or you can go on to Twitter and just send me a direct message and I'll usually look at it for you. 

MARK: Colt McAnlis is a service. 

COLT: Colt McAnlis is a service, yes. And by the way, I mean if you are a service customer with Google, if you're paying for support, hit those people. Because quite frankly, I get a lot of my ideas from them. They are way smarter than me. They see a lot of these problems on a regular basis. And if I can't answer it, I'm probably going to go ask them. So that actually might be a better path, getting support from the people who are smarter and have way more hair than I do. 

FRANCESC: I'm wondering, how often do those episodes appear and what's the plan for the future? What episodes are you thinking about that you're excited about? 

COLT: So we try to do, on a quarterly basis, we try to do one episode a week. And that includes a blog post as well as a video. And then we typically take the last two or three weeks off of a quarter to prep for the next one. So in a year, you should be somewhere in the order of 48, 45 to 48 episodes if we're doing everything correctly. 

The future, I mean I think you guys have seen my table of contents. I mean, I've got an idea. I mean, when you talk about performance and you talk about stuff as large as Google Cloud Platform, there is no end to the number of topics we could talk about. So far we talked about profiling performance for App Engine, profiling startup performance for Compute Engine, for Kubernetes, for pod boot time, how to profile all of that. We've talked about networking performance, how to make sure that you can get your 16 gigabits per second transfer speed for your VMs, how to properly size them. We've talked about our load balancer, our caching, our CDN, the power of Google's network, being able to test all these things. 

Our next series that we're about to launch is Cloud Storage. So we're talking about all the gotchas and all the performance things there, so things like sequential upload speed, large file segmentation. Where I'm really excited to go next is a couple of things. First off is TCP BBR. I don't know if you've heard about this or seen about this. This is one of my favorite technologies that Google has put on the radar. 

MARK: Give us the high level view. 

COLT: Wow, OK. 

MARK: Super quick, you can do it. 

COLT: Yeah. So super quick is that when TCP was designed, it was designed with a very specific framework in mind for how the web or the network should be used. And there were certain difficulties with callbacks and windows and everything else. The web is different now, and the engineers at Google have found that there are certain mathematical properties that we can take advantage of. 

So what TCP BBR does is by changing and updating some of the transfer protocols in your Linux kernel, you can get a 30% to 50% performance improvement. And that's not just to other VMs that have TCP BBR, that's other systems or other APIs that may just be using regular TCP. So this is a free boost in performance when you're doing network transfer. I'm very much talking with waving hands here because there's a lot of amazing details, and a lot of brilliant engineers have put a lot of brilliant time into this. So if any of you are listening, I'm really sorry for everything I got wrong. 

FRANCESC: Also come talk to us. 

COLT: Yes, come talk to us. Yeah. So TCP BBR, I tell you, since the next announcement for Spanner, I'm really itching to get my hands in Spanner. I really want to see how that performs at a global level. I want to find those edge cases because as people roll onto it, there's always a teeth gnashing process. There's always this doesn't fit my mental model. And I really, I mean I really want to get my hands in there. 

Cloud Functions is another great one. I really want to see the performance there, figure out how that's working. And one other thing that I'm really interested in, and I don't know how valuable this is, but I really want to figure out if we can fix a lot of the performance problems with hosting WordPress on GCP. We're already amazingly fast. But are there things that you can do as a WordPress author that GCP may give you access to, in terms of performance serving cost, DDOS resilience, global availability? That from a performance level these are really important things, and hosting it on GCP you get a lot of that for free. 

So these are some of the ideas. Beginning at 2018, you'll probably see some of these things start trickling out. 

FRANCESC: Very nice. Now that you mentioned performance for WordPress, many of our listeners, they not only use Google Cloud Plat but they also use other providers. 

COLT: Oh, fantastic. 

FRANCESC: Do you think that your series helps understand performance, in general, also for the clouds? Like is this something that-- the skills that I'm learning, I can apply them to profiling, I don't know, my own machines or whatever? 

COLT: Yeah. I really hope so, to be honest with you. So when we do a set, before we talk about networking and the details of Google specific, we typically have one episode where we talk about the big picture. Like how should you even profile networking? If you upload some data and you time it with iPerf, is that a good number or is that a bad number? Should I be looking at [INAUDIBLE] should I be looking at Ping? 

So we typically have a bubble up episode. Traditionally the YouTube comments are like, why would you do something so simple? Well, this is important information. And then from there we start getting a little bit deeper into Google level specifics. But we always try to put a nugget in there that's like, hey, at the high level, here's how this thing works. And for the videos, you'll typically find those much higher level, much more TLDR. And the documents, the articles that we link with it are a little bit more in detail. You'll actually see source code there, stuff you can copy paste, some deeper graphs, a little bit more explanation of how some of Google's stuff internally works. 

So my hope for the users who may be using other providers is that they get a sense of how things are working under the hood with GCP, understand some of those technological changes. So I've been doing performance stuff for a long time now, way too long, unfortunately. And one of the things I always find is that the crux to performance is understanding how the system was designed and understanding how your code is not utilizing it that way. Like the more you tune your code to work exactly like the system was designed, the better performance you're going to get. So creating that mental bridge between those two states is really critical. 

MARK: So now I'm also intensely curious. What's been the strangest or the most surprising performance thing you've come across so far in GCP? 

COLT: I'm going to cheat. I'm going to kind of answer you but not answer you. So I won't say that there's the weirdest thing, because if you understand how the hardware works, it's just a mental disconnect. But I will say the hardest thing. I'll tell you that one. The hardest thing, this took me probably two and a half weeks to figure out. And I had to lean heavily on all of our cloud DAs at various capacities to figure this out. How do you profile the startup time of Kubernetes containers? 

Kubernetes is known for being really fast to boot up. You have shared images, you've got prefetching. The hosting of the image to the instance or the pod and getting that up, that's taken away. So most people forget about the next step when you actually have to prop your containers. 

There is a non-trivial container boot up time every time an instance comes up. How do you time that? How do you find that number? If you have a bad actor in one of your containers, that can cause serious issues. And in Kubernetes, you can define for a pod, a set of init containers which occur serially. And then all the other containers just initialize in parallel. 

So you can end up in a situation. Let's say you're a company that serves DRM style media. So you're an image streaming service or a music streaming service. And one of your init containers, which has to occur before any of the other things boots up, is a DRM library that properly pings and connects with the services so that you can be compliant with all the systems. That might have a two second time. You might be pinging for servers, waiting for someone else, but because that sits in your init phase, it keeps the rest of your pod from booting. 

This turned out to be one of the most difficult things that I could find. Kube CTL-- is it-- 

FRANCESC: "Cut-l." 

MARK: You're right, it's CTL. 

COLT: Is it "cut-l" or "control?" 

MARK: Well, CTL or control. I'll go either way on that. I don't have strong feelings. 

FRANCESC: The real way is KubeCTL, but it's fine. 

COLT: I think this is the new "GIF" versus "JIF" in the server world. Is it Kube "cut-l," Kube "control," Kube CTL? 

[MAKING GLOTTAL SOUNDS] 

COLT: I like "GIF." 

MARK: Look at his face. 

[LAUGHTER] 

COLT: Little animosity, a little animosity in the GCP room. This was actually the hardest thing, because KubeCTL will give you node boot time, but it won't give you anything finer grain for that. So I actually had to reach out to Terry Ryan and Kelsey Hightower and talk to them about some of the processes they've been through in trying to boot these things up. 

And it's all documented. If you go to GCPA, you'll find how we actually solved this and some techniques that you can use to do it yourself. But that took a lot of time to just dig in and figure out what's the mentality, how is this stuff put together. That was definitely the most difficult and kind of weird. But nothing like we found a ghost or an alligator in the Google Cloud. Like hey, I'm not getting the upload performance. Oh yeah, there's an alligator over there. That's not nothing. I wish, I wish. 

MARK: That would have been interesting. 

COLT: That would have been amazing. In fact, you know what? That's the weirdest thing. 

MARK: [INAUDIBLE] 

COLT: We didn't find an alligator. 

MARK: Oh, I see. 

COLT: Yeah, yeah. 

FRANCESC: So the last question because we're running out of time, but I have one question. We had a meeting the other day with someone pretty smart. And he mentioned that it would be a good idea to ask for reading lists from our guests. So I was wondering if you have something to recommend, like I want to learn more about performance. Sure. I can go watch Performance Atlas, Google Cloud Performance Atlas. Is there some books, some article that you say, oh, go read this thing? 

COLT: Great question. Whoever said that is extremely smart and probably really good looking, and has a lot of hair. 

MARK: I don't know anyone like that. 

COLT: Nobody, nobody, nobody. They don't exist on the internet. So I got a couple of things. So first off, I highly recommend that every developer should check out a fantastic book called "Understanding Compression" written by Colt McAnlis and Aleks Haecky. Amazing article that will help you understand data compression at a level that makes sense. So self plug, self plug, self plug. 

Beyond that, I really like the SRE book, the Google site liability engineer. For my background coming from low level GPU programming, the concept of a cloud was both familiar at a scalable level and completely alien, from a services and ops perspective. So being able to go backwards to forward through the SRE book was really helpful for me. 

Likewise, I forget the names offhand. There were a couple good cloud engineering books that were published in the mid-90s along with TCP/IP illustrated and some of those things, that basically just described the architecture of the internet to help you understand things along the lines of how caching works and how second rate providers work. And where your bandwidth comes from and latency and all that other stuff. I forget those names. I'll probably try to find them. 

FRANCESC: We have links to those in the show notes for sure. 

COLT: And if you can't find those and you can't find it in a book form, just go read everything Ilya Grigorik has ever written. 

MARK: He's great. 

COLT: Ilya is Batman. So I had the pleasure of working with Ilya for a number of years on the Chrome team. Ilya was always amazing because you would never see him until you needed him, and then he would just appear. And it's like, man, I really wish we had a solve for this thing. And then Ilya is there. Like oh, by the way, here's the code. And then he'd just disappear off in the weeds again. I think he is Batman, he's Google's Batman. 

FRANCESC: We had him for an episode on [INAUDIBLE]. That was amazing. That was really good. 

MARK: Awesome. It sounds like you've plugged everything, but is there anything else that you might want to add before we wrap up? Or something you might want to mention or comment on or anything? 

COLT: So tonight, we're recording this-- I don't know if this is revealing behind the scene, but recording this on Talk Like a Pirate Day. So yarr, thank you mateys for having me in. Tonight we're actually doing Perf Like a Pirate which is an event we try to do every year or so, where we get an excuse to get everybody in one room, talk like pirates, and talk about performance. And hopefully the videos will be up on YouTube soon. But we've got some great speakers tonight including myself, Jen Tong, [? Asia Hammerly, ?] Todd Kerpelman, all talking about various parts of cloud performance, statistics, tracing all those other great things. Really excited about that. 

There's something a lot of people don't know about. We're starting to trickle it out, but Reto Meyer, and I have been working on a new series of content. So if you have seen his pivotal series in the past or my Android Performance Patterns, or our notorious zombie video, keep an eye on the Google Cloud YouTube channel is what I'm saying. Go subscribe, click the button, wait for it. It's good. It's coming. 

MARK: It's coming. 

COLT: It's coming. Yes. It's going to be amazing. (WHISPERING) Amazing. 

[CHUCKLES] 

FRANCESC: Awesome. This is amazing. Thanks so much for taking the time today to tell us a little about really yourself and everything you do. 

[LAUGHTER] 

COLT: Thank you. Thank you all for inviting me. I got to tell you, I'm honored to be here. The GCP podcast is amazing and we hear about it from everybody. So I'm actually humbled that you all would at least let me in the room. This is like being in the royal palace. 

FRANCESC: Just for once. 

MARK: Aww, that was so nice. 

FRANCESC: Thank you so much. 

COLT: Yeah, thank you. 

MARK: Thank you. 

MELANIE: So thanks, Colt. That was a great interview and we appreciate the insights and the overview that you're providing around performance for GCP. So moving on to our question of the week. 

MARK: Awesome. So we talked about this a little bit before, a couple of different discounts that are available primarily for Compute Engine. Those are both sustained and committed use discounts. They're both cool, so we want to make sure that you save as much money as possible. The customers tend to like that. 

So sustained use discounts is pretty straightforward. If you're using a virtual machine or virtual machines, and you use them over a period of time, Google will specifically give you a discount of up to 30% net for instances that run up to the entire month. And there's sort of a sliding scale on that as well. So you really don't have to do anything, which is kind of cool. You just use what you use and the more you use it, the more of a discount we give you. 

What's nice as well though is if you're maybe a little less elastic in your load or you've been doing it for awhile. And you know what sort of memory and CPU that you use over a period of time, say a year or three years, which is what we were talking about. You can actually sign up for a committed used discount. So this is where you're actually saying, OK, I'm going to agree that I will use this much CPU and this much memory every year, two years, or three years. And then you can purchase that upfront. 

And if you do that, you can get up to a 50% discount off normal prices in return for committing to that usage. So depending on what it is you're doing, you have a chance to save some money. 

MELANIE: There's definitely opportunity for that, especially when you have something consistently being used. Well, great. OK, Mark, we've got two under our belt, in terms of doing intros and outros. It's only a matter of time before we'll actually do an interview together. 

[LAUGHTER] 

One day. 

MARK: One day, one day. But before we wrap up today, are you going anywhere, doing anything exciting in your life coming up? 

MELANIE: Anything exciting? Let's sit down and have a long chat. Nothing in terms of conferences this week. I just did QCon yesterday, actually. So I am off the charts for talks this week. 

MARK: Are you done for the year or you've got some more stuff coming up? 

MELANIE: I will not commit to the fact that I'm done for the year, because I find sometimes last minute stuff comes up. What about you? 

MARK: Really all that's coming up for me is MIGS, Montreal International Game Summit, which is in December. I'll be speaking there on the 11th of December. But otherwise, I'm sitting still for a little while, which is quite nice. 

MELANIE: That's great. It's nice to be in one place for a minute, because it's been a big conference season the last couple of months. 

MARK: Yes. [CHUCKLING] Awesome. All right. Well, Melanie, thank you very much for joining me for yet another podcast. 

MELANIE: It's good to actually be in the same room, Mark. 

MARK: [CHUCKLING] Wonderful. And we'll see you all next week. 
{{< /transcript >}}


