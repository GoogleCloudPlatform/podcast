+++
audioDuration = "00:36:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.12.mp3"
audioSize = 52713676
categories = ["Google Cloud Spin"]
date = "2016-02-10T01:07:49Z"
description = "In the twelfth episode of this podcast, your hosts Francesc and Mark interview Ray Tsang and Bret McGowen, two Developer Advocates for the Google Cloud Platform, about Google Cloud Spin, a project demoing the capabilities of Google Cloud Platform."
draft = false
episodeNumber = 12
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Google Cloud Spin with Ray Tsang and Bret McGowen"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/7g4FrMMYLjG"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/453hpp/episode_12_cloud_spin_with_ray_tsang_and_bret/"
+++

In the twelfth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Ray Tsang](https://twitter.com/saturnism) and [Bret McGowen](https://twitter.com/bretmcg),
two Developer Advocates for the
Google Cloud Platform, about the Google Cloud Spin, a project demoing the capabilities of
Google Cloud Platform. 
<!--more-->

##### About Ray

Ray is a Developer Advocate for the Google Cloud Platform. Ray had extensive hands on
cross-industry enterprise systems integration delivery and management experiences during
his time at Accenture, managed full stack application development, DevOps, and ITOps.
Ray specialized in middleware, big data, and PaaS products during his time at Red Hat
while contributing to open source projects, such as Infinispan. Aside from technology,
Ray enjoys traveling and adventures.

Follow Ray on Twitter [@saturnism](https://twitter.com/saturnism).

##### About Bret

Prior to Google, Bret came from Texas, having worked in the cloud industry at Rackspace
as a software engineer building the RackConnect hybrid hosting product. Before that, he
led engineering teams at e-commerce, non-profit and startup companies. He's often on the
running trail, volleyball court or kickball field.

Bret earned a bachelor’s degree in computer science from Texas A&M University.

Follow Bret on Twitter at [@bretmcg](https://twitter.com/bretmcg).

##### Cool thing of the week

- [Cloud9 IDE now supports Google Cloud Platform](http://googlecloudplatform.blogspot.com/2016/01/Cloud9-IDE-now-supports-Google-Cloud-Platform.html)
   
##### Interview

Cloud Spin resources:

- Google Cloud Spin blog posts: [one](http://googlecloudplatform.blogspot.com/2015/09/Cloud-Spin-Part-1-180-degree-animations-on-Google-Cloud-Platform.html), [two](http://googlecloudplatform.blogspot.com/2015/09/cloud-spin-part-2-building-mobile-apps-to-orchestrate-video-recording.html), and [three](http://googlecloudplatform.blogspot.com/2015/10/Cloud-Spin-Part-3-processing-video-using-Google-Cloud-Platform-services.html).
- Google Cloud Spin videos with Coffee with a Googler: [one](https://www.youtube.com/watch?v=JrIQU-noMVU), and [two](https://www.youtube.com/watch?v=QQelTN2a5Tw).
- The Making of Google Cloud Spin [video](https://youtu.be/4_w2LCW9YX8?list=PLOU2XLYxmsILhJSXjIpNxBE5HkND3wFPL).
- Google Cloud Spin on Twitter: [@googlecloudspin](https://twitter.com/googlecloudspin).

Cloud Spin libraries and features used:

- [Firebase](https://www.firebase.com/), an amazing platform that provides synchronization to Cloud Spin.
- Google Cloud Storage Object Notifications [docs](https://cloud.google.com/storage/docs/object-change-notification).
- [FFmpeg](https://www.ffmpeg.org/), a cross-platform solution to record, convert and stream audio and video.
- [MoviePy](http://zulko.github.io/moviepy/), a Python module for video editing.
- Google Cloud Spin code on [GitHub](https://github.com/cloudspin/cloudspin).

<div style="text-align:center">
<img alt="Google Cloud Spin in Japan" src="/images/post/cloudspin.gif">
</div>

##### Question of the week

- [Kubernetes Daemon Sets](http://kubernetes.io/v1.1/docs/admin/daemons.html)

{{< transcript "FRANCESC: Hello, and welcome to the 12th episode of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I'm here with my co-host Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good, thanks, Francesc. How are you doing?
FRANCESC: Pretty good, very excited about this episode. We're gonna be chatting with some of my friends.
MARK: Some of your friends.
FRANCESC: Yup.
MARK: Hey, they're my friends too.
FRANCESC: Yeah, so we're gonna be chatting with two of our colleagues, actually, two--so Bret McGowen and Ray Tsang from the Google Cloud Platform advocacy team about Google Cloud Spin.
MARK: Yeah, that should be pretty exciting. I've been involved at least peripherally with Cloud Spin, setting it up and helping run it. We've talked about it a few times, so it's gonna be good to get into sort of the details of what it is and what it does and how it works and stuff.
FRANCESC: Yeah, it's a really fun project. It's a really fun project to run. It's a really fun project to see working, and it was a really fun project to develop, so I hope that you will enjoy the interview.
MARK: Definitely.
FRANCESC: But before that--
MARK: Let's talk about a cool thing of the week.
FRANCESC: Okay, so the cool thing of the week is related to Cloud9. Could you tell me a little bit more about what Cloud9 is?
MARK: So Cloud9 is an IDE and development environment that you can use, funnily enough, in the cloud, so rather than, say, installing, like, IntelliJ or Vim or Emacs locally, it's a fully web-based environment where you can build and write code.
FRANCESC: Nice.
MARK: Which is pretty cool. They recently released a plug-in specifically for Google Cloud Platform.
FRANCESC: Oh, nice.
MARK: Which is very cool. So right now it's in beta, so it has a limited sort of functionality, but it gives direct integration for Java applications running on managed VM. In the coming weeks they're planning to add some more bits and pieces to it so that you've got some more functionality and features and languages, but it was really cool. You should watch the video and have a look, but you can see someone, like, go in. It's got GCloud installed automatically for you. You can pull down, like, a little starter project, and it loads it up. You can preview it in there. You can run it from in there. You hit deploy, it goes up to the cloud, goes directly to us so it can run from in there. It looks like a really cool thing, so maybe if you're traveling with a Chromebook or, you know, you don't want to install stuff locally, it's gonna be a really nice way to develop.
FRANCESC: Yeah, I really see it as a very good option if you don't really like using, like, Vim and tools like that, you really want an editor. That's the kind of thing that only normally you get to use locally, so they're basically providing that on the cloud through a browser.
MARK: What's also nice about it, you know, like, if you think about it, when you're building stuff, like, it means you don't--like, maybe you have a low-power machine or a slow machine or something like that. Connect it to the cloud. Use the power of their platform and the speed of their platform and their network where you can push big Docker files around, all sorts of things like that. It's actually kind of neat.
FRANCESC: That's actually a very good point, and maybe we should also talk about it next time, but when you're building Docker files, et cetera, and you're downloading so many dependencies…
MARK: I know where you're going with this.
FRANCESC: When you do it over a hotel WiFi, it can be fun, so yeah, here you--with Cloud9 you avoid that problem completely, so that's pretty cool, yeah.
MARK: That's pretty cool.
FRANCESC: Nice. So I guess that it's time to go talk with Ray and Bret.
MARK: Let's go do that then. Today we have a couple of very special guests who's joining us this afternoon. We have Ray Tsang sitting across from me as well as Bret McGowen. How are you both doing today?
BRET: Good, how are you?
MARK: Good. I managed to only slightly, like, ruin your last names, I’m hoping, only in a slight way. So we're talking today about a fun project that we've sort of demoed around the place called Google Cloud Spin, and I know it's a project that, Francesc, you've been involved, Ray, you've been involved, Bret, you've been involved, several other people. Would love to talk to you about it, but why don't we first find out a little bit about Ray and Bret? Bret, you're closest to me right now. Why don't you give us a bit of your background and who you are and what you do?
BRET: Sure, yeah. My name is Bret McGowen. I'm a developer advocate for the Google Cloud Platform. Before that I was in Texas working at Rackspace, so I have a little bit of a Cloud background. I was a software engineer my whole life until I came to Google and started working in developer relations and developer advocacy, and I'm actually in the New York City office, so it's kind of cool to be here in San Francisco in studio to meet with you guys.
FRANCESC: Cool. Wonderful, Ray?
RAY: Yup, my name's Ray. I'm also a developer advocate. I'm also from New York, and I haven't always lived there. I actually lived in southern California before, and yeah, I've been a developer and a architect all my life since I started to work, and yeah, I've been in New York for about two years and been through two of the worst winter ever till this year, so which--I'm feeling a lot better about New York now.
MARK: Wonderful. So we're here to talk about Cloud Spin. Seems like I'm gonna be directing things 'cause I'm the only one in the room who wasn't involved, so what exactly is Cloud Spin?
FRANCESC: Okay, so Cloud Spin is basically just a bunch of phones pointing at you. Imagine that you have 20 phones or so, and they are all on a semicircle, and you are in the center.
MARK: Yup.
FRANCESC: So they're all the same distance from you, and at one specific moment in time they would all take a picture, exactly at the same time, and then what we do is we take all of those pictures together and we mix them into one single animation. Now, the--when you look at that animation, basically it looks like a camera is rotating around you, but while it's rotating, the time's stopped because you're not moving at all, and if you're jumping, you're kind of flying, or if you're going back to avoid a bullet, then you might--
MARK: Like "The Matrix" style.
FRANCESC: Exactly, you could look exactly like "The Matrix" but without budget.
RAY: And time.
BRET: Or time.
FRANCESC: And--yeah, without budget nor time. We had--I think it was three weeks.
BRET: Just about three weeks, yeah.
FRANCESC: About three weeks to get [inaudible] that Bret was actually vacation in the middle.
RAY: So was Francesc.
FRANCESC: And so was I, so.
BRET: That was the fourth week.
MARK: So not even three weeks.
FRANCESC: So not even three weeks, and we wanted to build a cool demo, and yeah, I think it worked pretty well.
MARK: So I know it was the three of you. Was there anyone else who was working on the project as well?
BRET: Yeah, Kathy Kam, who was our program manager in Seattle. She kind of drove everything forward and for a zero budget we had, what little we could get, she took care of that, so we're grateful for that.
FRANCESC: Yeah, no, that was pretty awesome. Basically, the work was divided into--I was taking care of the Cloud part of it, so all the server side and so on, and then you two guys were more like Android.
RAY: So Bret was working more on the Android, and I kind of floated around. I guess I didn't do anything.
MARK: All right, good, no credit to you, Ray. Wonderful.
FRANCESC: There was all the stuff about actually making it work, you know, and Kathy actually took care of building the whole thing, like, making sure that it was built for all the demos we wanted, so that was pretty good.
MARK: That's cool. So--all right, so let's go back in time. Let's sort of go through this, you know, like a flashback. So, all right, inception point, like, whose idea was it? Let's have some controversy. Let's have an argument. Where did this thing come from?
FRANCESC: So I got to say it was my idea, but that's how I remember it, though my memory's really bad, so probably is wrong. So basically, we wanted to build a cool demo, and we were discussing any ideas, basically, like doing a--what's it--a brainstorm? Brainstorm?
BRET: Brainstorm.
MARK: Brainstorm, there you go.
FRANCESC: Brainstorming session we were talking about, and I think that was Kathy that brought up that YouTube was doing slo-mo, so slo-mo videos where you could slow down a video and make really cool videos. There's basically--you do a frame interpolation to make it look like you recorded with a high-frame camera, but instead of thing--doing that, we thought about what could happen if you slow down the time so much that you stop it and then you actually move the camera? So that's what the--what we wanted to do, basically, like, stopping the time and moving the camera. Unfortunately, even with the Cloud you cannot really stop time, so we decided to basically use it wi--do it with a bunch of cameras.
RAY: And off-the-shelf cameras, not expensive--
FRANCESC: Yeah, off the shelf.
RAY: Yeah, not expensive cameras.
FRANCESC: Actually, our idea was since at Google we have a decent amount of phones around, we wanted to use, like--the first plan was Nexus 5 phones?
RAY: Nexus 5, yeah. We had to figure out which phones to use, yeah.
FRANCESC: Yeah, but at something cheap, yeah.
RAY: I think we thought about Nexus 5, yeah, something cheap.
FRANCESC: Yeah.
RAY: And something that everybody may have.
FRANCESC: Yeah.
MARK: Okay, so this was in theory a project that other people could build themselves if they wanted to?
BRET: Yeah, so one of our goals was to open source the code, to use all off-the-shelf components 'cause we want people to actually be able to set up Cloud Spin at home to learn about the Cloud and then maybe kind of invite friends over, everyone brings their--a bunch of phones. You set it up in a circle, and you kind of create your own Cloud Spin, so from the beginning our goal was to actually make it, like, so accessible that--I mean, as accessible as, you know, having 20 phones is, but.
FRANCESC: I mean, if you have 19 friends, you're good.
RAY: We can have it work with five phones.
FRANCESC: Yeah, you can do it with, like, small Cloud Spin rigs.
RAY: Yeah.
MARK: Okay.
FRANCESC: And actually, talking about open sourcing the code, if everything goes correctly, by the end--when this episode is published, the code will be open sourced.
MARK: Really?
FRANCESC: So we will have links in the show notes, and if it's not the case, then I'm sorry 'cause I didn't do my job.
RAY: So we delayed for a [inaudible] podcast for [inaudible].
FRANCESC: Ah, this should happen. I'm pretty confident about it.
BRET: Well, they could just start and watch it, and then they'll see.
FRANCESC: Yeah, then they'll see.
BRET: It should be up. It should be up.
MARK: Okay, all right, that's faith. That's courage in face of adversity. I like it. I like it a lot. Okay, that sounds cool. All right, so you're building a thing. It needs to take a bunch of photos around in sort of, like, an arc so you can get them all together and, I guess, stitch them together so that you can do, like, an animation or something? Where did you start? Ray?
RAY: Yeah, so the first thing that we thought about is, "Hey, how hard could it be?" right? Just--
MARK: Famous last words.
RAY: It's been done before. You can do this with professional cameras really, really easily. For example, you should be able to have all the cameras to take the photos at exactly the same time from all the different angles, but because we chose to use just Android phones, we actually ran into the first hurdle, which is what we'd been told by other people. It's like, "Hey, that sounds really hard to do, like, almost impossible." In fact I--one of the person told us, like, that's impossible because when you tell the phone to take a photo, it's--there's something in the hardware that may introduce some kind of delay, and so if you have 19 phones that's all trying to take a photo, they could also all be taking the photo at different times, so we had to solve that problem. This was very first, yeah, and that was difficult to think about it, and to software engineers, I think the first thing that most people think about is, "Well, how can I solve this with software? How do I use, say machine learning or Vision APIs or whatever to kind of figure out, you know, how high did the person jump or are there any other things that we can extrapolate from the image itself?" But that all turned out to be really hard to do, and we only had three weeks, so we're in a--I'm not a computer Vision scientist myself. I don't think anyone here is.
FRANCESC: Nope.
BRET: No.
RAY: Yeah, so we didn't know how to do that, right? So--
MARK: Just on weekends.
FRANCESC: Yeah.
RAY: Yeah. So we spent time to figure out how to solve that problem, and eventually we ended up with a solution that is actually being used in some of the video industry, right? When you're trying to record videos from different angles, you have this clapper board where you synchronize all the cameras by the clap of the clapper board visually and also by the sound, and so what we ended up doing is just to use audio signal that we can feed into every single one of these phones, and the phones, rather than taking a photo, were just going to be taking a video, and when you jump into the midair, somebody's going to press a button and generate a tone that get fed into the video recording streams of every single phone, and that will mark the same moment in time in every single video.
FRANCESC: Yeah, so the main idea was to--instead of using something from the image, just, like, making a noise, and before we had the cable, it was actually pretty fun because we tried just by jumping and clapping, and that could also work because basically, what we do is we just identify the noisiest frame, and the noisiest frame, even if you counted by the number of frames, changes for every video, 'cause all the cameras start the video at different moments, the sound arrives at all the phones exactly the same time, so we used that as synchronization.
BRET: It makes for some pretty amusing moments with other people in the same office because they would walk by a conference room, and we'd be jumping up and down yelling, "Hi-yah!" or, "Whoo!" And they'd be like…
FRANCESC: I remember that.
BRET: "What is going on in that room?" and we never told them, so to this day they have no idea what we were doing.
FRANCESC: Lovely.
MARK: That's fun.
BRET: Yeah.
MARK: That's great. Okay, so you've got your phones. They're taking video. Then where does the video go? Who wants to take it?
BRET: Sure. So the first thing it does is each phone uploads it to Google Cloud Storage, so we got to put it somewhere. We got to put this video up for processing, so we used Google Cloud Storage, and then we used something called object change notifications, so Cloud Storage will actually call the next end point, the next step in the process automatically for us.
MARK: And that's an HTTP call?
BRET: Yes, right.
MARK: Okay, cool.
BRET: And so it kind of has this JSON payload that describes, like, where the file is, what it's MIME type is and things like that, and that was pretty nice because that actually let Ray and I work on the Android things independently, and all we had to do was upload it to Cloud Storage, and Francesc could actually take care of configuring the next API endpoint. He could do that independently, and so we didn't actually have any discussion of, like, what does our API signature look like or where does that work? All we did was upload it to Cloud Storage.
FRANCESC: Yeah, that was actually very interesting. There was not really an API. It was just everything through Cloud Storage.
RAY: [inaudible] were like, "Just give it to Francesc."
FRANCESC: Yeah.
BRET: [inaudible].
MARK: He will take care of it.
BRET: And then, literally, I went on vacation.
MARK: Just seems like a good plan.
BRET: Yeah.
MARK: Okay, great. Okay, so we've taken our video. It goes into Cloud Storage. We have an object change notification that goes to something. I'm guessing the next step is, like, to pull out the image or something like that?
FRANCESC: Actually, before that…
MARK: Or is there something before that? Ooh.
FRANCESC: What we wanted to do was we wanted to make sure that once an image has been uploaded--well, actually, one of--one video has been uploaded, we won't miss it. We need to process it, so what we did was put that message into Cloud Pub/Sub.
MARK: Okay.
FRANCESC: So I just, like, managed a way of having tasks, so basically--we talked about it.
MARK: We did. We have talked about it previously.
FRANCESC: Some previous episode.
MARK: Yup.
FRANCESC: The goal being that once it's in there, then we'll have some workers that will extract the job, the frame from the video. Once we do that, the cool thing is that how many workers we have, that's not important, so architecture is much easier to manage. If we need 20 workers, well, we just start 20 workers. We don't need more than one? Well, we can have only one, so that's pretty good, and then what is going to happen is that that message will include just the name of the video, basically where to find that video, and every worker will--it will go find that video and then extract the frame using MoviePy, which is a Python binding over FFmpeg. FFmpeg? Yeah, FFmpeg, which is an amazing library that does basically everything you could imagine with videos.
MARK: Cool. Okay, so we've gone phones, storage, object change notifications, Pub/Sub. Now we're going to an extractor, some kind of worker that is picking up from the topic on the Pub/Sub? Okay, and then the images go, I'm guessing, back to storage?
FRANCESC: Yup, back to Cloud Storage.
MARK: Okay, and at that point we go back to another object change notification?
FRANCESC: No, actually, instead of doing that--we could have done that, but instead what we did since we were all--we were already using Cloud Pub/Sub, it was just putting the next task into a different topic, so we have a topic which is videos that are ready to be processed and then another one which is images or frames that are ready to be stitched together.
MARK: Okay, so that--all right, cool, so that's going--that from--okay, Pub/Sub to the extractor, and then back into Pub/Sub, just different topic?
FRANCESC: Yup.
MARK: Different topic, okay. Where does it go from there?
FRANCESC: To a different job. This job, what it's gonna do is gonna just receive all notifications of frames being ready to be stitched, and it's gonna wait till it has all the frames for a single picture, so for one jump, basically, so one jump could have, like, 20 cameras, so we're gonna have to wait for those 20 frames to be ready to generate that image.
MARK: Okay.
FRANCESC: Yeah.
MARK: So how does it know that?	
BRET: So we used Firebase to coordinate not only that but actually just kind of in general. So Firebase is kind of sort of a realtime database, so we used it for our visualizer so it can track, like, the state of all the cameras. The cameras actually use Firebase to coordinate amongst themselves, so when you say, like, "Okay, everyone start recording," it just writes a value, a timestamp into Firebase.
MARK: Okay.
BRET: All the phones are, like, listening to that. They're sort of subscribing for that change, and, like, very, very quickly, within less than a second, all the phones automatically get that notification, and then throughout the whole process we're basically just updating Firebase database, and every listener can see those changes as they happen.
MARK: Okay, so tell me--all right, so Firebase allows you--you can push data into it, and it does, like--it synchronizes that data across all the things? All right, so you're using that to coordinate all the phones as well as provide a visualizer, 'cause I'm guessing that's got web hooks as well, so, like, on the browser? Awesome. We should have Firebase on the podcast at some point soon.
FRANCESC: Yep.
MARK: Hopefully. And then--okay, so then Firebase will tell you, "Okay, we've got 20 images. They've all been processed, and they're ready to go." Now they have to go to something to put them together?
FRANCESC: Yeah, so that's gonna be a different worker, and it's gonna also use FFmpeg, this time directly. No need to use any extra library. It's basically three or four commands, so since I'm so special, instead of doing a batch script, I wrote a Go program.
MARK: Shocker.
RAY: And what the Go program does--for batch codes, right?
FRANCESC: Basically.
MARK: Oh, really?
FRANCESC: Basically what it does, it goes and downloads all the frames for an image, then calls FFmpeg for different commands where it--basically what it's doing, it's just putting everything together as a video, applying frame interpolation to make it look smoother, and then generate a GIF from that video and then upload that video back to Cloud Storage.
MARK: Okay. One interesting question though. So how does the information from the synchronization from Firebase get to your program to tell you all the images need to be stitched together?
FRANCESC: So actually, I tried two different things. One was getting notifications directly from Firebase, so on Firebase you can watch a value and be like, "Oh, something changed," and you react to it, but instead of doing that I decided that it was better to just wait for the notification from Pub/Sub, so every single time I get a notification from Pub/Sub saying, "This frame is ready," I update the Firebase values, and once all the Firebase frames--all the frames on Firebase are being set to they're ready, then I generate the GIF, and I upload it.
MARK: So basically, yeah, you get a message saying, "Hey, this one's ready." Then you send it to Firebase and you say, "Hey, Firebase, how many are ready?" and it says "1 out of 20," and you're like, "Okay, then I'll send the next one," and so on and so forth until it says, "20 out of 20," and you're good to go.
FRANCESC: Yup, exactly.
MARK: Cool. Now, I believe there's one final step.
FRANCESC: Yeah.
RAY: To share it [inaudible].
FRANCESC: Yeah, the sharing part.
MARK: Go, Ray.
RAY: Well, so to share, we thought about the different ways or different channels we share it, but I think one of the most popular that--for our target audience was the Twitter, right? So we wanted to share it on Twitter, and we also wanted to share it on email, and we actually have to do a lot of work. Francesc had to do a lot of work to make sure that the GIF that's being generated is under a certain size restriction, otherwise Twitter will reject the image upload, so I don't know--there are quite a few things that you have done there to reduce the size of the GIF, right?
FRANCESC: Yeah, basically--
RAY: Is it "gif" or "jif?"
FRANCESC: I could say "gif."
MARK: Whoa, fighting words.
FRANCESC: You can say "jif" if you want to be wrong.
BRET: I'm on record as "gif."
RAY: No, go ahead.
FRANCESC: Yeah, so--yeah, basically what I ended up doing was changing the FFmpeg commands to generate images of lower quality just at the end of the GIF, so basically that means that when I'm uploading the GIF, we're gonna get a lower quality, and if you go--actually, we have a @googlecloudspin. That's the Twitter handle. If you go there, you're gonna see all the GIFs, and you're gonna see the quality is not that good. Basically, what I do is reduce the quality and also the amount of colors that I'm using in the palette, which means it doesn't look as good, but it look--at least it works, 'cause otherwise I cannot just--I cannot just send it directly to Twitter. It gets rejected.
MARK: So there is actually a movie, movie file somewhere?
FRANCESC: There is a movie file. There's an MP4 that we don't even keep, actually. We just use that as a intermediary step to generate the GIF, but we're considering on fixing that.
RAY: I think we can keep that and send the MP4 out.
FRANCESC: Yeah, we should it on the email, yeah.
MARK: Awesome. Now, I know also, 'cause I was at an event where you were doing this and playing around with it, there's some image stabilization I think you've been doing?
FRANCESC: Yeah, the image stabilization, so as soon as we started actually taking pictures, we realized that one of the most important things is all the phones have to be pointing exactly at the same point with millimetrical precision, and--
RAY: And the way that we do this is very rudimentary.
FRANCESC: Yeah.
BRET: Very, very scientific.
RAY: And for those who are listening, the way that we do it is we find a stick and we put it into the center of the circle, and then we try to align the camera to that stick.
FRANCESC: Actually, we're much more pro than that because we added a little--
RAY: We added two markers.
FRANCESC: Two markers.
MARK: Oh, crosshair--kind of like crosshairs.
FRANCESC: Two crosshairs on the camera to actually be able to align.
BRET: And then we'll tape on the pole to, like, where the crosshairs go, so it's pretty fancy.
RAY: Yeah, and we do this every event that we go to.
BRET: Yeah.
RAY: And we always were able to find a stick somewhere.
FRANCESC: Yeah.
MARK: I've--personally, I know I've seen two tables resting atop one another.
BRET: Yes.
FRANCESC: Coffee tables, yeah, high tables.
MARK: I've seen a lamp.
FRANCESC: Yeah.
MARK: Yeah, I've definitely seen a lamp, just random bits of tape kind of taped to various different things.
FRANCESC: Yeah, blue tapes, yeah.
BRET: At one event I actually used a human being. I said, "Can you stand very still and don't move?" and he said, "Okay."
FRANCESC: Which event was this? That's pretty good, but yeah, so we decided--we realized that it was probably not the best solution, and we still need to do that, really, 'cause if the stabilizat--if the cameras are not well-aligned, the quality of the image at the end will not be good, but even if there's a little bit of variation, that should not impact that much the quality of the image, so I ended up applying a [inaudible] of FFmpeg 'cause FFmpeg does everything, really. I added stabilization for the images. The weird thing is that this is actually not done for what we're doing. Stabilization is for a camera that is shaking but pointing to different places, so the camera is not moving that much. It's just changing orientations. Well, what you were doing is the other way around. It's actually pointing at the same thing but moving and jumping from one side to the other, so the algorithm is kind of weird and sometimes creates some weird stuff, but it's fun.
MARK: Cool.
FRANCESC: Yup.
MARK: I know that came, like, towards the end of the project. Were there any, like, other tweaks that you either have done or are interested in doing in the future, updates and improvements?
FRANCESC: Something that I think that's--that blew my mind was--I think it was Bret did it, the fact that we could change the--how much light on the videos we could get.
RAY: On the ISO--
BRET: It's the ISO in [inaudible].
FRANCESC: ISO, that was really cool.
RAY: Yeah, yeah, we did that to make sure that we can get the best lighting on the videos [inaudible].
FRANCESC: Yeah, so if you can explain how we did that? 'Cause that blew my mind.
BRET: Yeah, well, we--so we did it using Firebase, and part of the problem is we were gonna be taking this to a bunch of different venues that we didn't know what the lighting conditions were, so we did it at an event where it was so dark it was basically, like, inside of a cave, and then we--you know, literally two days later we did another event where it was essentially outdoors, and so we didn't want to have to, like, recompile the app each time, so we just had each Android app watch Firebase for the ISO and exposure settings, and so we could set it in a control tablet, and you can play with them, and you can see all the screens. The viewfinder in the back, you can see it getting brighter and darker.
MARK: Oh, that's what you were doing when we were doing it together.
FRANCESC: Yeah.
MARK: Okay.
RAY: So you just have to adjust one place, and then all of the cameras get synchronized with the new settings, and you can see that across all the cameras.
FRANCESC: That was really cool. Basically, Firebase is used everywhere, even to decide what's the ID for every phone. We just start with one, and you start just clicking around the phones, and everything just works very well.
RAY: And you know what else? That was really good that we have done this. Like, because we are using Firebase and we're developing this demo to just make it work in the first place, we didn't really think about how to visualize this with a audience. Like, how do we show this to the audience? 'Cause you can't actually just go and click a photo and--without seeing how things are being done or taking place behind the scenes. So because we are using Firebase to store all of the state, it was really to just get that stream of data pulled down into a HTML5 page and just being able to visualize that, and then we are able to build this visualization tool in about, I don't know, like, half a day to a day.
FRANCESC: Yeah, that was awesome.
RAY: [inaudible] POC so that people can actually see on the big screen of what's taking place behind the scenes in the Google Cloud Platform.
FRANCESC: Yeah, it went from watching logs on the monitoring page to all of a sudden having, like, images and showing you what is being extracted was being uploaded and so on in, like, half a day, so.
BRET: Animations and everything. That was pretty cool.
MARK: Yeah.
FRANCESC: That was really, really cool, yeah.
RAY: There was another change that you made that I thought was really good 'cause initially we were at--it's the audio detection algorithm. So the video has this audio marker inside, and the algorithm that was detecting where the audio was the loudest was written by a intern that was working with us initially, and he's brilliant. Matt is really smart, and we used that for the very first couple of versions, but that has issues, right? So Francesc changed a few things.
FRANCESC: Yeah, so there's a funny story there, which is first time we tried to run it in New York, I don't know if you remember.
RAY: I remember.
FRANCESC: The night before, trying to make it work, and nothing could work. Absolutely everything could just fail, and I didn't really understand why. Like, it could just take random frames. I don't know why, and after reviewing the code for quite a while, I realized that instead of comparing--like, trying to find the first frame for which the average noise was higher than three times the average of the rest, which was what we were using, we actually were taking the standard deviation, which somehow worked every single time at the office 'cause there was not--
RAY: That's because the noise level at the office was--yeah.
FRANCESC: 'Cause there was no noise.
RAY: Yeah.
FRANCESC: So when there's no noise, actually, the standard deviation of the average pretty much worked, but as soon as the--you start having noise, all of a sudden nothing works, so that took me, like, one hour of reading three lines of Python [inaudible] still what's going on.
RAY: In the end, I think what worked best was, you know, just getting rid of that average and just take the absolute max, right?
FRANCESC: Yeah, at the end what I did, it just like--I just put--basically what I do is I get--for every single image frame I have a bunch of sound frames 'cause the number--the frame rate for the audio is much faster than the frame rate for the video, and I do the average for all the frames for every audio--for every video frame, and then I find the one that has the most--the biggest amount of noise, and that's it, and that works really well, yup.
MARK: Keep it simple. Wonderful. Kind of gonna be wrapping up soon, but is there anything else that you want to mention about Cloud Spin, something interesting or anything like that that you haven't covered?
BRET: Yeah, so I do hope that people check it out in GitHub, set it up, and can give us feedback on the code. It doesn't have to be that fancy. When we travel around with it, we, you know, sometimes have a big wooden or metal constructed rig and a fancy backdrop and 20 phones in a circle, but our first prototype was actually using, literally, selfie sticks, so--
FRANCESC: I remember that.
BRET: I don't know if you've ever tried to use a selfie stick as a camera tripod, but it is the least stable way you possibly can hold up a half-pound phone. In fact, Ray and I were constantly diving on the floor to save this thing from smashing to the ground and have to, you know, explain to our boss why we just broke a $600 phone with a selfie stick.
RAY: And to this day we haven't dropped a phone on the selfie stick.
FRANCESC: Yeah.
BRET: Well, thanks for jinxing it.
RAY: Knock, knock.
BRET: But yeah, it doesn't take much to set up. Like, we use selfie sticks, and we use these weird clamps we would hook to the end of the table, just kind of anything we could to organize these phones in a row, so I really hope people will check it out. They will--there's a big walkthrough, like, walks you through how to set it up. You can learn a lot about Google Cloud Platform through it, and then hopefully people will have fun with it.
FRANCESC: Yup. There's also--we have three blog posts on the Google Cloud Platform blog, so we will put a link for those on the show notes.
MARK: Those'll be in the show notes.
FRANCESC: And there's also two episodes with "Coffee with a Googler," so yeah, we'll also have the links where basically, you can actually see the real thing actually working with Laurence Moroney jumping around. That was lots of fun.
RAY: Yeah, and you can find all of this information too just by following us on the--on the Twitter account, @googlecloudspin?
FRANCESC: Yeah, @googlecloudspin you will find it too.
RAY: And there's a link you can click on that has all the links.
FRANCESC: Yeah, and if you want to try it, we're gonna have it at GCP Next? Where are we having it? I know that--
MARK: They're like, "Uhh."
BRET: South by Southwest.
FRANCESC: South by Southwest we're gonna have it.
MARK: GDC, it looks like as well.
FRANCESC: GDC in San Francisco probably. GCP Next, I'm not sure. No?
BRET: Yeah.
MARK: Droid Con?
FRANCESC: We don’t yet.
MARK: Droid Con?
BRET: I'm not sure.
MARK: Okay.
FRANCESC: But yeah, we're gonna have it at a bunch of places, so if you ever see it around--
MARK: If you're around, it's totally gonna be there, I think.
FRANCESC: Just go see it and jump, take a good picture, and you're gonna see there's people doing really weird stuff. My--one of my favorites is actually Bret and you.
MARK: Yeah, oh, yeah.
BRET: The Force choke?
FRANCESC: The Force choke.
MARK: Yeah, yeah, Bret has me up in the air.
FRANCESC: Yeah, Mark is jumping there.
MARK: Yeah, you'd think I was jumping, but really, he was just holding me in the air by the power of the Force.
FRANCESC: Yeah, that was a great one. Yeah, that was a great animation.
BRET: That was really cool.
MARK: Wonderful. Well, thank you so much for joining us. We really appreciate it.
BRET: Yeah, thanks [inaudible].
RAY: Oh, thanks.
FRANCESC: Yeah, thank you.
MARK: Thank you very much.
FRANCESC: Thank you so much to our two colleagues, Bret and Ray. That was a really, really fun interview to do.
MARK: Yes, it was.
FRANCESC: Yeah, I hope that you enjoyed it, and yeah, if you--if you're interested on learning more about it, don't hesitate. We're gonna have all the links in the Cloud--in the show notes. Just go read them, watch the videos, read the blog posts, and if you want to learn more, just go on GitHub. The--it should be there by now. Okay, so let's go--before we end with the episode, let's go with the question of the week.
MARK: Yup.
FRANCESC: And the question of the week is actually about Kubernetes, one of our most-beloved projects.
MARK: And very popular podcast topic.
FRANCESC: Very, very--yeah, that's actually one of the most popular podcasts, yup.
MARK: Yup.
FRANCESC: So the question is, "Okay, I want to run one container, or actually one pod, one job per machine, per host." So my first solution for that was, "Oh, well, if you have, like, four hosts, you run just--you say in your replica controller, "I want to run four pods," but then what happens if one of those nodes disappears? You end up with one of the nodes running two.
MARK: Or really, you actually have no guarantee where the pods are gonna end up anyway.
FRANCESC: Yeah, so basically, you could maybe try to trust it, but, like, if you're lucky, might work, but, like, that's really not a good solution. You're gonna end up with either too many or too l--
MARK: None at all.
FRANCESC: Yeah, or none at all, actually. So that's not really the solution, so I'm assuming that you know the answer for this one?
MARK: I do know the answer for this one. This is a really nice Kubernetes 1.1 feature. It came out with a thing called a daemon set. So this is sort of the--yeah, if you want to be able to say, "I want this pod to run on every node in my cluster," or even only necessarily maybe on some particular nodes on that cluster, which is also cool. So a daemon set is very simple. Like, so the example I like to use here is if you want to run, like, a logs collection daemon on every node, like, maybe Fluentd or Logstash, maybe you want some sort of monitoring daemon like New Relic or Prometheus, something like that, this is exactly the sort of thing you want to have.
FRANCESC: Oh, yeah, I see.
MARK: So pretty much by its simple definition, when you set up a daemon set, it covers all nodes, and you basically specify which container you want to run, and away it goes. It's pretty straightforward. It's pretty cool in that, well, in the same way that you can do selectors and attribute metadata on pods like you would do normally with replica control and stuff like that, so those control, like, whichever ones have those key value pairs, you can have those labels, those key value pairs on nodes as well.
FRANCESC: Oh, nice.
MARK: So when you do a daemon set, you can say, "Oh, I want it to run on the nodes that have these tags."
FRANCESC: So I could say, for instance, "I want to run Logstash, but only in production. Don’t run it on QA?"
MARK: Yeah. Well, it's actually more about, like, "I want it to run more on the clusters that are on the left side of the room rather than the right side." Like, the actual nodes themselves, right?
FRANCESC: Okay.
MARK: Yeah.
FRANCESC: Oh, yeah, I see.
MARK: Yeah, yeah, so.
FRANCESC: Oh, interesting.
MARK: So it's really, like--I mean, yeah.
FRANCESC: So you could do something like, "Oh, I want to run it only on the nodes that  have some specific bug," like, you have, like, some kind of architecture, and you want to just log that architecture and not the rest, then you can do that.
MARK: Yeah, so if you had a cluster with machines that's not necessarily the same--whether or not that's a good idea, that's a whole 'nother topic of conversation, which is fine, but you might tag those as being those machines for various reasons, and therefore you could say, "Okay, I want to run particular stuff on those things and not on others."
FRANCESC: Very cool. That's the kind of thing that it sounds like, "Oh, yeah, of course," but once you're trying to solve that problem, if you don't know the name to look for, daemon sets…
MARK: Daemon sets.
FRANCESC: That can be--yup, that can be fun to find. Great, well, before we finish with this podcast, where are you gonna be?
MARK: So when this podcast comes out, I will be in Australia. I'm looking forward to that, seeing some friends and family, but getting back from there, I will be at the Launch Hackathon on the 26th of February.
FRANCESC: Nice.
MARK: Looking forward to that. I will also be at the Game Developers Conference here in San Francisco. I'll be at the Google booth, so please definitely come by and say hello. We've got lots of interesting things going on there. I'm really excited about some of the content we're putting together. There's gonna be some fun things happening there. We'll both be at GCP Next.
FRANCESC: Yup.
MARK: Big conference for Google Cloud Platform. I think we're gonna be doing some fun stuff there as well, and I will also be at the Strata conference as well on the 29th of March.
FRANCESC: Very nice. So you're not gonna be traveling that much other than for vacations.
MARK: Yeah, I think the furthest I go in Q1 is, like, San Jose.
FRANCESC: That sounds--
MARK: It's weird.
FRANCESC: Yeah, that sounds great. So--
MARK: You're everywhere, aren't you?
FRANCESC: Slightly different pace for me. Yeah, so on February 23rd I will be in GopherCon, but GopherCon Dubai.
MARK: Lovely.
FRANCESC: Yup, so I'm gonna be talking there, very excited. I think--it's my second time in Dubai. Last time I was there, I saw a very active community of developers, so I'm very excited about interacting with them again. After that, a bunch of stuff, South by Southwest.
MARK: Oh, that'll be fun.
FRANCESC: Yeah, Google Cloud Platform's gonna be there. We have the Fiber space. We're gonna be running a bunch of stuff. We're gonna be running parties.
MARK: Nice.
FRANCESC: It's gonna be lots of fun, yup, and after that, indeed, GCP Next. I'll be back to San Francisco.
MARK: Cool. Well, then, I will definitely be seeing you there.
FRANCESC: Great.
MARK: In fact, that may actually be the next time we see each other.
FRANCESC: I--oh yeah, maybe. We'll have to end up recording stuff remotely.
MARK: Yeah.
FRANCESC: That's fun though.
MARK: Yeah, that's fine. All right, well, thank you very much for joining me yet again, Francesc.
FRANCESC: Thank you so much to you, Mark.
MARK: All right, and I'll see you at least virtually next week.
FRANCESC: See you next week.
{{< /transcript >}}