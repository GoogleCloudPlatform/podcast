+++
audioDuration = "00:33:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.7.mp3"
audioSize = 47636681
categories = ["Pub/Sub", "Task Queues", "App Engine", "Cloud Vision", "Logging"]
date = "2015-12-09T14:33:31Z"
title = "Messaging on the Cloud"
description = "In the seventh episode of this podcast, your hosts Francesc and Mark discuss the different ways messaging can be done on Google Cloud Platform, covering Pub/Sub and Task Queues and when to choose what."
draft = false
episodeNumber = 7
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/VmxXiz4y52B"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3w2xeq/episode_7_messaging_on_the_cloud/"
+++

In the seventh episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) discuss
the different ways messaging can be done on Google Cloud Platform,
covering Pub/Sub and Task Queues and when to choose what.
<!--more-->

Links:

-   Google Cloud Vision API [blog
    post](http://googlecloudplatform.blogspot.com/2015/12/Google-Cloud-Vision-API-changes-the-way-applications-understand-images.html)
-   Photo Scavenger Hunt
    [app](https://play.google.com/store/apps/details?id=com.bradabrams.photoscavengerhunt)
-   Google Task Queues
    [documentation](https://cloud.google.com/appengine/docs/python/taskqueue/)
-   Google Cloud Pub/Sub
    [documentation](https://cloud.google.com/pubsub/docs)
-   Exporting logs
    [documentation](https://cloud.google.com/logging/docs/export/configure_export)

##### Feature comparison

<table cellpadding="10" cellspacing="0" border="1">
	<tbody>
	<tr>
		<td><strong>Feature</strong></td>
		<td><strong>Task Queues</strong></td>
		<td><strong>Pub/Sub</strong></td>
	</tr>
	<tr>
		<td>Pull via API</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Push via Webhooks</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Max size of message</td>
		<td>100K</td>
		<td>10MB</td>
	</tr>
	<tr>
		<td>At least once delivery guarantee
		</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Batch Insert</td>
		<td>Only in App Engine</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Multiple receivers</td>
		<td>No</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Datastore Transactions</td>
		<td>Yes</td>
		<td>No</td>
	</tr>
	<tr>
		<td>Maximum Messages/s</td>
		<td>1B (with <a
				href="https://cloud.google.com/appengine/docs/quotas?hl=en#Task_Queue">billing</a><span
		>)
			250 msg/q/s</td>
		<td>Unlimited (after request)</td>
	</tr>
	<tr>
		<td>Throttling</td>
		<td>Yes</td>
		<td>No (if needed &rarr; pull)</td>
	</tr>
	<tr>
		<td>Performance</td>
		<td>median 5ms (99%ile 300ms)</td>
		<td><a
				href="http://googlecloudplatform.blogspot.com/2015/03/using-Google-Cloud-pubsub-to-Connect-applications-and-data-streams.html">Sub-second
			even when tested at over 1M msg/s</a></td>
	</tr>
	<tr>
		<td>Cloud Monitoring</td>
		<td>No</td>
		<td>Yes</td>
	</tr>
	</tbody>
</table>

{{< transcript "FRANCESC: Hello, and welcome to the seventh episode of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my co-host Mark Mandel. Hi, Mark." >}}
MARK: Hi, Francesc. How are you doing?
FRANCESC: Pretty good, pretty good. Very happy to be here in San Francisco recording in this beautiful voiceover room today.
MARK: Yeah, it's great. At least the weather's nice here in San Francisco, raining, but, you know, it's pretty good.
FRANCESC: Yeah, ready for the weekend. So what are we gonna be talking about today, Mark?
MARK: Today we're gonna talk about Cloud messaging.
FRANCESC: Ooh, interesting.
MARK: Yeah. It's actually a pr--I quite like this topic. I think it's gonna be a lot of fun.
FRANCESC: I like it 'cause it's something that people don't really talk about 'cause it's not glamorous.
MARK: Yeah, but it's necessary.
FRANCESC: But you need it, yeah, totally.
MARK: It is quite literally, like, sort of the plumbing of the internet.
FRANCESC: Yeah. Oh, that's a beautiful metaphor.
MARK: You like that? You like that a lot?
FRANCESC: I like it, yeah, I like it.
MARK: All right, but before we get into that, should we talk about our cool thing of the week?
FRANCESC: Sure. So the cool thing of the week, I'm sure that most of our listeners actually might have seen it already. There's some really cool videos going around. It's the Google Cloud Vision API.
MARK: That sounds pretty exciting. I haven't had a chance too much to sit down and look at it. Have you?
FRANCESC: So I have not really played with it. I've read the documentation, which is something.
MARK: Nice.
FRANCESC: And I played with something that was built on top of the API.
MARK: Very nice.
FRANCESC: So basically, if you've heard before about TensorFlow, which is something that we released not that long ago, which is basically revolutionizing how machine learning can be done, like, deep learning, neural networks and so on. Google has done a lot of that for quite a long time. We open sourced the way we do that, which is a great thing. It's called TensorFlow, and even though it's really powerful, it's also quite complicated to use, right?
MARK: Right.
FRANCESC: So what the Google Cloud Vision API does, it just packages some models, some TensorFlow models that are already trained to recognize things on pictures, which are pretty much what we use for Google Photos. You know--
MARK: So I could send it a picture of my dog, and it would be like, "Oh, that's a dog."
FRANCESC: That's a dog, yeah, exactly.
MARK: Nice, okay.
FRANCESC: So it's basically what we use for Google Photos. It's exactly the same, so you can send the picture and say--and ask, "What is this?" And you're gonna get a bunch of labels and information about it, so it will be able to say, "Oh, yeah, that's a dog," but also it could be--it could say something, "That's a dog next to a cat," and things like that, so it's actually really smart.
MARK: That's really cool. Okay, so I could things like facial detection and be like, "Which person is that?" I could be like, "What logo is it?"
FRANCESC: Yup.
MARK: Maybe do some OCR-type stuff, so character recognition. That sounds like a really powerful thing, and basically I can just, like, plug and play with it so I don't to have to--
FRANCESC: Yeah, exactly.
MARK: I don't have to know how this machine learning stuff works.
FRANCESC: That's the great thing about it. It's basically just one more API. The same way you use the DataStore, you can use now this service that allows you to discover what's in a picture, so that's great.
MARK: Brilliant. I'm having a look here. It looks like if people want to join, it's currently in limited preview, but there is a form they can sign up for if they want to get involved.
FRANCESC: Yeah, and we will have that link on the show notes, as usual.
MARK: Most definitely. All right, that sounds pretty awesome. I can't wait to sit down and really play with that.
FRANCESC: And actually, the even cooler thing of the week, which is the cool thing built on top of the cool thing of the week, is something that Brad Abrams, who is a product manager here at Google--
MARK: Oh, he did this really cool thing, that's right.
FRANCESC: Yup, he did this little game, which is pretty cool 'cause it's a game where you get a list of words, and then you have to take pictures of things that match those words.
MARK: So it's a digital scavenger hunt.
FRANCESC: Basically.
MARK: That's awesome.
FRANCESC: I really loved it 'cause you can retry. You can get new lists, so I got one that it was quite easy, and it was like, "dog" and "eating" and things like that, so that was doable. I've also seen--and this is actually for Brad. Brad, if you're listening to us, putting "paranormal creature" on a list like that is not really helpful. It's not really fair.
MARK: I want to know how they have managed to get the model to recognize paranormal creatures and how many ghosts they had to find to get that to happen.
FRANCESC: Exactly. I thought that was pretty interesting. It's like, "Go take a picture of a paranormal creature." I was like, "Mm, no."
MARK: Yeah, that's like somebody putting Loch Ness on the scavenger list, yeah.
FRANCESC: Yeah, yeah, it's--yeah, it's a good thing to have.
MARK: Bigfoot, a yeti, like, all that sort of stuff.
FRANCESC: But yeah, we'll have a link to the--it's a small Android app, so you can give it a try. It's really fun, and the good thing is that the source code is actually really simple. It's basically just a little API call. That's pretty much it, so it's great.
MARK: That's pretty cool. I like that. I like that a lot. That's really sweet.
FRANCESC: Cool. So for our main content today, as you were saying, we're gonna be talking about messaging and the plumbing of the Internet.
MARK: Yeah, yeah, so this is something a little bit near and dear to my heart. I quite like it. So we want to talk about, like--how do we want to set the stage? So generally this sort of stuff comes up when you want to do sort of either a synchronous processing or maybe you have sort of disparate systems that want to be able to communicate to each other through some sort of messaging system. What sort of options are available on Google Cloud Platform to let you do that, and what sort of--like, why would you choose one over another? And I think to set the stage, I think, really, we're sort of looking at two particular pieces, one of which is task queues, which have been around for a long time. They've been in App Engine, and something that's relatively newer-ish, or at least relatively newer released publicly is Cloud Pub/Sub, which is pretty exciting.
FRANCESC: Great.
MARK: So I think we'll end up talking about both of those. Have you worked with those?
FRANCESC: I've definitely used--I've definitely used task queues before. 
MARK: Yeah.
FRANCESC: Task queues have been around for a very long time, so I've used it for many demos that I've done, and it's really simple to use. It's beautiful. It's very well integrated with App Engine, so if you're doing App Engine, it's probably the way to go with it, and then I also used Pub/Sub in my last demo. The Google Cloud Spin uses Pub/Sub to communicate to send tasks across all the workers.
MARK: Okay, so why don't we--why don't we sort of explain what both of them are, and we can sort of continue on from there?
FRANCESC: Okay. So since I've used task queues more--
MARK: Go for it.
FRANCESC: I will explain what task queues is. Basically, task queues are just a very--very basic implementation, and by basic I mean very simple to use and very down-to-earth. It's nothing really fancy. Basically, what you can do is you have queues, and these queues, you can think about them like pipes, like Linux pipes or, like, just a first-in, first-out thing on the Cloud where you can send messages on one side, and then on the other side you can receive them.
MARK: Yup.
FRANCESC: And you have two ways of doing that. So sending those messages can be done through a REST API, or directly from App Engine you have some--
MARK: You have a nice client.
FRANCESC: Yeah, you have a very nice client that you can use very easily, and then on the other side, the way you receive them, you have two choices. One is what we call a pull task, and a pull task is basically when you're asking, "Okay, I'm ready to receive a task. Give me one task."
MARK: Yup.
FRANCESC: And once you're done treating that task, you send out the message which is an acknowledgement saying, "Hey, I'm done with that task. You can delete it." That way--that's actually really powerful 'cause that way if for some reason you start treating that task and for some reason the machine just crashes, you don't lose that task.
MARK: It can still retry.
FRANCESC: Yeah, it will be retried later on after some time-out time that we have. So that's very simple, and it's very often what you want. You can also have something which is the opposite way. Rather than the workers asking for a new task, it's actually the task itsel--the task being sent directly to the workers, and that works really well if you have, for instance, something like some kind of load balancer and a bunch of machines behind.
MARK: Especially, like, App Engine. If you're using App Engine, that works perfectly.
FRANCESC: Yeah, so in App Engine it works really well, but then you still have the fact that if you tried to send that task and you respond to that task with something else like 200 or 202, like, basically, an okay HTTP code, then that task will be retried later on, and when we retry things, there's always this exponential backup.
MARK: Yeah, one of the--
FRANCESC: Back out.
MARK: One of the things I really like about task queues is it's a configuration file. It's a YAML file, much like everything we always do…
FRANCESC: Yeah, that's true.
MARK: That allows you to say how quickly and how often you want things to get processed, and also you have a lot of control over how you want to retry, like, how many times, what sort of back-off, you know, all that sort of stuff, so you have a lot of control over all the task queues in your system, and you could have more than one. Like, it's bipathal.
FRANCESC: Yeah, you can have as many tasks as you want.
MARK: And the other thing I really like about task queues with push tasks specifically, you can defer them for later, which is really nice. If you're like, you want to run this in half an hour or you want to run this next day or something like that, you know, but do it sort of as a one-off thing, that's also quite powerful. It's pretty--it's pretty nice.
FRANCESC: Yeah, I've seen it used very often for two different use cases. They are com--they are very different but work very well with task queues, the first one being you have some list of things that you have to do. Like, imagine for instance you have some forum and you have to moderate the new posts.
MARK: Oh, yeah.
FRANCESC: Those posts, you can put them inside of a task queue, and then the job--like, the web page itself, maybe even JavaScript, you can access, "Give me the next task." You present it, and then you have everything just on there, so it's very simple to do, and it works very well with pull mode, and the other one is when you want to do something a little bit later because that way your request will finish faster, so--
MARK: Yeah, so, like, a performance increase. That makes a lot of sense.
FRANCESC: Yeah. So for instance if you have something where you receive a m--a request, and as a result of that request you have to send an email. Sending an email might take some time, so you don't--
MARK: Maybe you have some attachments or something.
FRANCESC: Yeah, you--maybe you need to go find some images or something like that, so it's--very often it's better, what you want to do is just to create that task and say, "That will be done as soon as possible but not right now," and then just return a 200 to the customer.
MARK: Yup. That makes a lot of sense. That's a lot of sense. All right, cool, so task queues sound pretty powerful. They sound like they've got a lot of really great features. So I guess it falls on me to talk about Pub/Sub.
FRANCESC: I think so, yeah.
MARK: Yeah, great. So I've worked with Pub/Sub before. Pub/Sub is pretty much actually exactly as it explained. Like, if anyone's looked at the software patent of Publish/Subscribe, it is exactly that, so you have publishers which can send out messages, and they send those messages to topics, and this is exactly what it's called inside Pub/Sub. Those topics--essentially, everything about Pub/Sub is HTTP, which I think is great, makes things really simple. It's actually specifically over HTTPS, so it's secure. So publishers can push messages, they're JSON packets, straight to topics that can be created. Any number of publishers, that is, and then any number of subscribers can subscribe to those topics and get those messages, so you can do, like, fan in, fan out, so many to one, one to many, all that sort of good stuff. So you can build some really nice decoupled architecture, pretty much like what you can do with task queues, but you have this opportunity here where you can have many people listening or many subscribers listening to a single message, which you can't do with task queues.
FRANCESC: Yeah, that's very nice. Basically, with Pub/Sub you're able to do, like, broadcasts, and you cannot really do that with task queues. That's right.
MARK: Yeah, so it gives you a little bit more flexibility that way. The really cool about this thing about this, while it is sort of relatively new as well, it's pretty battle-tested. Like, I actually started using it way back when, when it first came out and it was really new, but it was rock-solid. Basically, it's because it's the same thing that powers things like Ads and Hangouts with--inside Google, and you know anything that powers Ads inside Google, like, that has to work.
FRANCESC: That has to work all the time.
MARK: All the time.
FRANCESC: And very fast, yeah.
MARK: All the time. Much like task queues, you know, it's guaranteed to be at least once to show up, so it's persistent storage.
FRANCESC: Yeah, that's actually very important. It will not happen very often that you receive the same task twice.
MARK: I don't think I've ever seen it, but it could happen.
FRANCESC: I've never seen it, but you should be ready for that happening, so it's important to be able to treat a second request as just not important. You can either ignore it or you do the treatment twice, but that doesn't ma--take you into a wrong state.
MARK: Yeah, make sure it's idempotent. Make sure--yeah, yeah.
FRANCESC: Exactly, that's the word, idempotent.
MARK: And yeah, so yeah, that's super important. It's also worth noting as well, Pub/Sub also, again, like you can with task queues--there's a lot of similarities here. You can do both push and pull very much like task queues, so you might use push when you want to send it directly to somebody who's recei--who needs to receive it. That's--it fires an HTTP request with the data straight in it, but then also you can do pull requests as well, so you can say, "I want to grab the last 10 or 15," what's the max number, and it sends it down. That can be quite useful if you don't want to be auto-scaling all the time. You know, you want to say, like, "I've got three machines, and I just want to keep it going," but the nice thing is it has integration with Cloud Monitoring, so if you want to sort of do some auto-scaling based on how much stuff is in your Pub/Sub queue--or in your Pub/Sub topic, I should say, you can do that, and it works--that integration's quite nice.
FRANCESC: Yeah, and that's something that you cannot do out of the box with task queues. It's something that maybe you could implement, but it's definitely not as simple to do as with Pub/Sub.
MARK: Yeah, yeah, yeah. But the other flip side is task queues give you all the knobs to sort of play with--to say, like, "I want to go faster here or back off more there," whereas Pub/Sub is more rudimentary. It has that sort of retry mechanisms, but it's just sort of like, "This is the way it works." It doesn't--you don’t have, like, "Oh, I want it to back off once and then go back, you know, 10 seconds, then 15, and then 20." You know, it's kind of like you're on Pub/Sub's dime on how it works.
FRANCESC: That's where the task queues give you more fine-grain tuning, and there's things that are actually quite interesting. For instance, you can actually have throttling for--you could say, "Oh, in this task which--" only for push tasks though, 'cause if you do pull it's…
MARK: Yes, pull, it doesn't matter.
FRANCESC: As soon as you pull, you get new tasks, but when you do push tasks, you could say, "Oh, yeah, I don't want to send more than ten messages per second," and this can be really powerful because if you have a traffic peak, your task queue will just moderate that traffic peak and just keep the tasks for a little bit later, so your users will experience some lag, but your system will continue working without any glitch.
MARK: Yeah, whereas with Pub/Sub if you wanted to do that, you'd have to do it as a pull queue.
FRANCESC: Yeah.
MARK: You'd have to sort of regulate it yourself and say, "This is how often I want to be processing each message." The other thing with Pub/Sub regardless of whether you do push or pull, you have to send back an ACK message. You have to, like, acknowledge that you're done. That's really important, and it's kind of like--it's a bit simpler that way. I don't know, maybe in my mind. So regardless of whether you push or pull, as long as you--once you're done, you have to say, "Hey, I'm done with it." You specify a deadline with it, so you're like, "This is how long I think it's gonna take," when you set up everything, but then once you say, "Ack," it's like, "Oh, cool, I'll delete it now. I'm good to go." Otherwise, yeah, then you get into that retry mechanism, and everything works from there. But yeah, I mean, one thing I just--I really love about Pub/Sub is that it doesn't require any special type of transport layer, so you don't need any, like, custom clients. You don't need to be talking over special sockets or anything like that. It's all HTTP. It's all JSON packets, and it's all pretty much plain text going over the wire, so anything that can talk that, which is pretty much anything, that's great, and so then you can do, you know, communication between whatever you like, and it's really flexible, and you never--you know, if you want to add something extra, so, like, for example--what's a great example I'm thinking of? So you might do something task queue-ish, for example. You're talking about--say you were doing, like, "I want to process this image later," so you could put that into a Pub/Sub topic much like you could with task queues, but then maybe later on you're like, "Oh, what I also want to do is I want to log every time I do that as well."
FRANCESC: Yup.
MARK: So then you go, "Okay, that's fine. I will just add another subscription to my Pub/Sub thing," same thing, don't have to change any of my other code, and then I'm like, "Oh, I've just got another listener to this particular topic when the image comes in, and then I'll log it," and then maybe you're like, "Oh, actually, I also want to do this other thing with an image," and you can continue on from there, and that's a really powerful medium, I think.
FRANCESC: Yeah, that's really nice, the fact that you can basically have a much generic architecture where you can add stuff without modifying any code.
MARK: Yeah.
FRANCESC: That's pretty powerful, that's for sure.
MARK: That's super, super powerful.
FRANCESC: What you were saying about--yeah, there's no specific transport that is required or anything, just like HTTP, H--well, actually, HTTPS with JSON. 
MARK: Yeah.
FRANCESC: That's actually also the case for task queues.
MARK: That is true.
FRANCESC: So yeah, don't--don't get too excited.
MARK: I feel like we're having this battle here where you're on task queue's side, and I'm on Pub/Sub's side.
FRANCESC: Yeah, I actually like Pub/Sub a lot too.
MARK: That's okay.
FRANCESC: But there's also something really important which we have not mentioned, which is there is absolutely nothing that you need to do to get Pub/Sub or task queues working. Like, you don't need to install anything.
MARK: No, that's true.
FRANCESC: You don't need to manage anything. It's fully managed services that are part of Google Cloud, so you just--if you need to use them, you just start using them. That's it.
MARK: That's it.
FRANCESC: There's nothing to do.
MARK: Yeah, no, that's a really good point. Why don't we do through sort of, like, some of the feature comparisons between the two so people get a bit of an idea of maybe, like, which bits they might want to use in their application for what because there are--there is a lot of overlap there. We're gonna put this sort of table up in the show notes.
FRANCESC: Yeah.
MARK: Francesc is nodding. He agrees with me, good. So, like, yeah, so we can sort of--you can dig into it further, but I think it's worth going into because yeah, there is overlap. I can see why people'd be like, "Oh, I'm gonna go this way or go that way." I can think of what my rule of thumb might be. Maybe it's different from your rule of thumb, but.
FRANCESC: You'll have to say it so I can agree or disagree.
MARK: So I probably lean more towards Pub/Sub these days than task queues…
FRANCESC: Interesting.
MARK: Just because it allows you more flexibility to add extra things to it, but I do put some caveats on that in terms of, like, if you do need that fine-grain control over processing speed or retries, you could go task queues. You could also just do pull requests on Pub/Sub.
FRANCESC: Yeah, so for me it's a little bit different. For me it depends on what I'm doing. If I'm building an App Engine app, task queues is very well integrated with it.
MARK: That is true.
FRANCESC: So I will probably go with task queues. If I'm not using task queue--if I'm not using App Engine, if I'm doing something on Compute Engine which is my own code, I--especially if it's involving something which is not part of the Cloud like internal things, and you have many devices that are around, like, communication with those over a t--over Pub/Sub, that's gonna be much, much better to do. Then except for one little thing, which is if you need something--there's something that Pub/Sub doesn't offer that task queue does, which is, "Do this in half an hour."
MARK: That is true. That is true. That is very true.
FRANCESC: And that--the fact that--and that can be quite--
MARK: That's quite powerful.
FRANCESC: Quite powerful. Like, you can do something like, "Oh, yeah, I'm receiving this request. Check in half an hour if this happened. If it didn't happen, do this other thing."
MARK: I've worked it out. You create a task queue that then creates a Pub/Sub message. Done.
FRANCESC: Aww, probably. Okay.
MARK: Maybe.
FRANCESC: Yeah, you could do that too, yeah.
MARK: It really depends. Again, like, you probably need simplicity as well, but that's--no, that's fair enough. No, that's cool, and there's one other cute trick that task queues do that we actually--I'll be devil's advocate against myself. If you're on App Engine, you can do transactions within DataStore that wrap around your task queues.
FRANCESC: Oh, that's very powerful.
MARK: Which is quite cool, so if you're like, "I'm gonna put some data in DataStore, and then I want to create a task basically against that data," you can wrap that up in a transaction so that they're one and the same, so if one of them--if it fails, you know, it all falls down. Now, you could probably replicate it using Pub/Sub and some--your own software stuff.
FRANCESC: That'd be quite hard. That'd be quite hard, I'd guess.
MARK: You could--yeah, you could probably do it in some ways, like check it and then--but the fact that those are integrated quite nicely together--
FRANCESC: Yeah, it's very nice.
MARK: It's pretty cool. It is pretty cool.  All right, we mentioned the feature matrix before we went off there.
FRANCESC: Okay, yeah. Cool, so the first feature is you can pull and push via--no, pull via API.
MARK: Yes, that works.
FRANCESC: So you have--and which is a REST API. We also have clients, but these are a simple REST API.
MARK: They both work.
FRANCESC: Yup, both task queues and Pub/Sub. What about pushing via web hooks? Actually, pushing to web hooks, basically.
MARK: Yes, yes, they both have that, obviously.
FRANCESC: They both have that under one condition, which is HTTPS.
MARK: Yes.
FRANCESC: Which is always--like, you should always be using HTTPS anyway.
MARK: You should do that anyway, so that's fine.
FRANCESC: But yeah. What about the size of every single message you can send?
MARK: So that's an interesting one. So task queues have a limit of 100k per message.
FRANCESC: Okay.
MARK: Pub/Sub's a little bit more interesting. It's actually a--it's 10 megabytes per publish request, but you can send up to 1,000 messages within that request.
FRANCESC: So you could send 1,000 messages, and every single message could have 1,000 bytes.
MARK: Yeah, get the math, right.
FRANCESC: Okay, so you could send 1k messages of 1k size.
MARK: Something like that.
FRANCESC: Which is 1 meg, yeah.
MARK: Yup, I think that math sounds right. Yeah, so you could do that, or you could send one message that is up to 10 megabytes.
FRANCESC: Okay.
MARK: So you kind of have some flexibility there, which is pretty cool.
FRANCESC: It's important to tell that--to say that even though you can send 10 megs, Pub/Sub and task queues--in general, messaging systems are not really built to handle really big size of files.
MARK: Yeah, you probably should, like, store big data somewhere persistent like storage or DataStore or CloudSQL, and--
FRANCESC:  Yeah, and pass around just the path to that or something of that.
MARK: Yeah.
FRANCESC: It's much better than just sending big files inside. Like, that's not a very good idea.
MARK: Yeah, I agree 100%.
FRANCESC: What about the delivery guarantee? Am I sure that I will receive those messages?
MARK: I would hope so.
FRANCESC: Yeah, and again, that's a little difference. It's--you will receive that message and probably only once, but maybe you might receive it twice, so your actions should be idempotent just in case that arrives.
MARK: Yup.
FRANCESC: We have batch insert, so being able to insert more than one me--more than one task to a message at a time. Can you do that?
MARK: You can only do that in App Engine, which is interesting, so the REST API--so if you're outside App Engine and you want to use the REST API, you can only send one task at a time.
FRANCESC: That being for task queues, okay.
MARK: Yeah, for task queues.
FRANCESC: Okay, but on Pub/Sub you can do whatever you want.
MARK: Yup.
FRANCESC: So don’t--there's no limitation there.
MARK: There's--well, you have to send--it's under 10 megabytes and up to 1,000 messages.
FRANCESC: Yeah, but yeah, you can send as many messages as you want regardless of where you're sending them from. Can you have multiple receivers? So in a task queue, if you create only one task queue and I send one message, how many times will that message be received over how many?
MARK: Once.
FRANCESC: Oh, okay.
MARK: Just once.
FRANCESC: Just once, that's it.
MARK: Yeah.
FRANCESC: But on Pub/Sub there's actually not that limitation either 'cause it will receive once per subscription.
MARK: Yup.
FRANCESC: And you can add more subscription per topic, so it basically--you can have--you have a little bit of best of both worlds where you can have a--per subscription it will receive by only one of the receivers.
MARK: Yeah, topics can have up to 10,000 subscriptions.
FRANCESC: Which is quite big, yeah.
MARK: That seems--reasonable amount.
FRANCESC: It's in--yeah, 10,000, yeah, I don't think I've ever done something with that many machines. Well, other than when I was working for Ads.
MARK: There you go.
FRANCESC: What about the maximum number of messages per second?
MARK: Yeah, so you were looking at this for task queues.
FRANCESC: Yeah.
MARK: Do you want to try and explain that?
FRANCESC: Okay, so I'm gonna go first with Pub/Sub. There's no limit.
MARK: There's no limit.
FRANCESC: Like, just go for it. There's no limit on that. Just go crazy with that. With task queues, there's a limitation which is first you have to activate billing. If you don't have the billing activated, that won't work, but then you can go up to 1 billion messages per day, which is quite big.
MARK: Seems reasonable.
FRANCESC: Yeah, and the recommendation is you should not go over, like, 250 messages per second per queue, so if you have multiple queues, that doesn't really count.
MARK: Okay, so you can kind of shard it if you need to.
FRANCESC: Yeah, you can shard over multiple queues, yeah.
MARK: Interesting, okay. That seems to handle, I think, probably most people's load.
FRANCESC: Yeah, if you have 10--like, one billion messages per day, I have not made the math to know how many messages per second.
MARK: That'd be a lot.
FRANCESC: But that's a lot.
MARK: A lot, I'd go with a lot.
FRANCESC: Let's go with a lot, yeah.
MARK: Yeah, let's go with a lot. So we were talking about throttling before, so yeah, task queues has built-in throttling so you have control within that YAML file.
FRANCESC: For push queues, yup.
MARK: For push queues, yeah, but you can always do pull and sort of control it yourself.
FRANCESC: Yup.
MARK: Though with Pub/Sub, if you're gonna do throttling, you need to sort of do it yourself.
FRANCESC: Yup, which is actually not all that complicated. I've done it before. Basically what you do is every single receiver, every single worker, it will just sleep for, like, two seconds before going for the next task. That's it.
MARK: That's it.
FRANCESC: So it's that simple, really.
MARK: Yeah, or you could just keep it going. Like, if you're just happy--I mean, you're paying for the machine anyway. Like, you've got it on a VM. You might as well just keep churning and [inaudible] stuff if it's there.
FRANCESC: Yeah, yeah, there's--yeah, well, you don't need to do anything special, really.
MARK: Wonderful. Now performance.
FRANCESC: So the performance, it's quite interesting 'cause it really depends on what you're trying to do. I'm gonna go first with Pub/Sub. We actually have a link to that, which is you will get sub-second times. Normally you will get, like, milliseconds on both task queues and Pub/Sub, but on Pub/Sub you will get even less than a second even when you're sending more than 1 million messages per second.
MARK: That's pretty good.
FRANCESC: That's really good, actually. That means that it scales really, really well.
MARK: Well, it powers Ads and Hangouts. I mean, it has to, right?
FRANCESC: Yeah, so that's the thing. Pub/Sub will scale like crazy. Like, you can just go for it, and there will be a little bit of a degradation, but it will never go up over one second, which is actually quite decent.
MARK: Yeah.
FRANCESC: On task queues, though, the scalability won't be that big, so if you're trying to send that many messages, probably Pub/Sub could be a--
MARK: A better option.
FRANCESC: Say you're doing big data with a bunch--like, imagine that you have sensors in, I don't know, every--
MARK: Every place ever.
FRANCESC: Every place ever for instance. That's a good place to have sensors, and those sensors are actually sending data all the time. You have that much data coming in.
MARK: That's a lot of data, yeah.
FRANCESC: Probably Pub/Sub is the good way to go, yeah.
MARK: Pub/Sub seems to be the way to go.
FRANCESC: And finally, we'll also mention Cloud Monitoring. So Cloud Monitoring--as we said, Pub/Sub allows you to have a monitoring measure so you can do things based on that, alerts and all the thing like--I forgot the word.
MARK: So if you wanted to throttle or you wanted to auto-scale or that sort of fun stuff and see what's going on.
FRANCESC: Auto-scale, that's it, so yeah. If you want to auto-scale, you can do that on based on the number of messages in a Pub/Sub.
MARK: I actually like the idea as well of doing alerts, which is kind of cool. Like, if you hit past a certain point, you'd be like, "Hey, let me know."
FRANCESC: You can do that, or you can do it the other way around. You can say it's like, "If we're getting less than 100 message per second, something's wrong."
MARK: Something's wrong.
FRANCESC: "So just let me know," and you can do that very easily from the monitoring console.
MARK: Yeah. Can you do that with task queues?
FRANCESC: You could do it manually. It's not--there's not a thing that's that's that.
MARK: It doesn't integrate. Okay.
FRANCESC: So yeah, if you really want to do task queues and the only limitation that you want is, "I would like to have monitoring," you could build it on top of that. There's not such a limitation, but you have to build it.
MARK: Okay, fair enough. All right.
FRANCESC: Great. So--
MARK: Well, I think that probably covers that topic quite succinctly. Have you got anything else you can think of?
FRANCESC: Not really. I think that we've talked about messaging enough for today. We've--yeah, but if there's anyone that has questions about, "Hey, I'm trying to do this. Is it better to do task queues or Pub/Sub?" like, let us know what you're doing, and we're here to help you.
MARK: Yeah, hello@gcppodcast.com, hit us up on Twitter, @gcppodcast.
FRANCESC: The Reddit, we have a subreddit, r/gcppodcast.
MARK: And also +gcppodcast on Google+ as well.
FRANCESC: Yup Cool. Okay, so great. Before we go, what is the question of the week today?
MARK: The question of the week has to do with logging data.
FRANCESC: Interesting, more m--more data.
MARK: Yeah, that's not what people say. So I--look, I think it's interesting. Logging data is, like, the bread and butter. It's, like, the core of anything you do. You need to know what your application is doing. Like, it's super important.
FRANCESC: It's even less glamorous than messaging but even more important, probably.
MARK: Probably, probably. So, you know, Google Cloud Platform has integrated logging platform. Like, it allows you to do some viewing. It's really awesome, but we tend to only hang around to it for a limited amount of time. You can configure it and say, like, when do you want to drop data off and do that sort of fun stuff, but what happens if you want to, like, store your logs for all time, right? Maybe you want to do some big data analytics later on or you just need it for auditing purposes or who knows? Like, there are so many things you could do. Is there an easy way to do it?
FRANCESC: I know there is.
MARK: There is.
FRANCESC: And I haven't done it, so I'm gonna let you answer that question.
MARK: So I love this. This is--this got me so excited when this came out. So if you go into the logging section, and above it you should see a--in the developer console in our web admin, there's a section called logs. You go in there, and you'll also see another thing called exports, which is super cool. So you can go in there. You can select the service that you want to export, and then you basically have a one-click send it to, like, a Google Cloud Storage bucket if you just want to store it for a really long time and then do stuff with it.
FRANCESC: Oh, nice.
MARK: But you can also send it to BigQuery, and you can also send it to, would you believe it, Pub/Sub.
FRANCESC: Amazing.
MARK: So if you want to, like, just stick it in a Google Cloud Storage bucket and then do something with it later, you don't know what you want to do, that's fine. If you're already doing analytics on it, especially maybe if you're doing--say if you've got structured logs in JSON, that's really powerful, so you can send it straight to BigQuery and stream it straight in, so you can do analytics on the fly, and then if you want to do really crazy messaging stuff with it, you can send it to Pub/Sub, which can then go to any number of other places from there as well.
FRANCESC: Yeah, that's actually--once you have it on Pub/Sub, you can do whatever you want with it. Basically--
MARK: It's crazy.
FRANCESC: Yeah, you already have it. You can create your subscriptions and do whatever you want.
MARK: We actually didn't mention it, but Pub/Sub integrates directly with Dataflow, one of our big data products, so if you wanted your logs to be sent and go through Dataflow as well, that could be a really interesting way of getting all that data to flow through. It could be kind of cool.
FRANCESC: Yeah, which is actually--we will be doing an episode sometime soon about all the big data products that we have.
MARK: Wonderful.
FRANCESC: So we're gonna be covering BigQuery, Dataflow, and so on, and all of those integrate amazingly well with Pub/Sub 'cause that's the way to go.
MARK: That's pretty awesome. I don't know too much about big data stuff, so I'm looking forward to that. I'm gonna learn a whole lot.
FRANCESC: That's gonna be fun, yup.
MARK: Wonderful. So it is the end of the year. We keep talking about it. I believe you're just going off to holidays.
FRANCESC: I'm going to holidays, yeah, in a couple weeks.
MARK: Wonderful.
FRANCESC: Very excited, and we will actually have a break. Will we?
MARK: We will. Next week should be our last episode for the year, and then we'll be breaking until next year.
FRANCESC: Yup. So what day? We don't really know yet. We will--it will be a Wednesday.
MARK: It will be a Wednesday. We will definitely be back on a Wednesday. I expect it will be early January at some point.
FRANCESC: Yeah, early January we'll be back.
MARK: We'll definitely be back. Again, I will be at DevFest in a few weeks, the 12th and 13th of December in Vancouver. I am excited about a winter in Vancouver.
FRANCESC: Yay.
MARK: Which is gonna be great fun, and then we'll be--I think I'll be at home. I'll be at home, pretty much, I think is my plan for the break.
FRANCESC: Nice. Yeah, I won't be traveling until the break. I will be going for holidays in a private location, so that's gonna be lots of fun too. So anyway, lots of fun talking about this topic today with you, Mark.
MARK: Lots of fun talking with it with you.
FRANCESC: And see you all next week.
MARK: See you next week.
{{< /transcript  >}}

