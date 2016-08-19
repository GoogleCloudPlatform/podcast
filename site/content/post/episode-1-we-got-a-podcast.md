+++
audioDuration = "00:19:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.1.mp3"
audioSize = 40782853
categories = ["App Engine", "Cloud Storage"]
date = "2015-10-27T17:37:33Z"
description = "In this first episode your hosts, Francesc and Mark, discuss how this blog post was built and deployed to Google Cloud Platform."
draft = false
episodeNumber = 1
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked=true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/1LhfFB21Gei"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3qkmph/episode_1_we_got_a_podcast/"
title = "We Got a Podcast!"
+++

In this first episode your hosts,
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic),
discuss how this podcast was built and deployed to Google Cloud
Platform.
<!--more-->

Do you have something cool to share? Some questions? Let us know:

- web: [gcppodcast.com](https://www.gcppodcast.com)
- mail: [hello@gcppodcast.com](mailto:hello@gcppodcast.com)
- twitter: [@gcppodcast](http://twitter.com/gcppodcast)
- reddit: [/r/gcppodcast](http://reddit.com/r/gcppodcast)
- google+: [Google+](http://google.com/+gcppodcast)

Links:

-   [Google Cloud
    Storage](https://cloud.google.com/storage/)
-   [Google App
    Engine](https://cloud.google.com/appengine/docs) and
    [Access Control
    Lists](https://cloud.google.com/storage/docs/access-control?hl%3Den)
-   [Hugo](https://gohugo.io/)
-   Google Analytics library for Go:
    [go-ogle-analytics](https://godoc.org/github.com/jpillora/go-ogle-analytics)
-   [HIPAA](http://www.dhcs.ca.gov/formsandpubs/laws/hipaa/Pages/1.00WhatisHIPAA.aspx) compliance:
    Google Cloud Platform
    [compliance](https://cloud.google.com/security/compliance) page.

Errata:

- Mark says HTTP status 503 for redirect, when he should have said either 302 or 307.

{{< transcript "﻿FRANCESC: Hi, and welcome to the Google Cloud Platform podcast. I'm Francesc Campoy, the developer advocate for the Google Cloud Platform, and I'm here with my colleague, Mark." >}}
MARK: Hi, I'm Mark Mandel. I'm also a developer advocate of the Google Cloud Platform. It's great to be here today.
FRANCESC: Yeah, great to be with you today. So yeah, what is this that we're doing today? What is the Google Cloud Platform podcast?
MARK: Apparently, we're doing a podcast talking about Google Cloud Platform, which I think is pretty awesome. I'm really excited about this project. 
FRANCESC: Yeah, me too. I'm really excited. Just to give an idea about what people should expect during these episodes, let's talk a little bit before we start with any content that we're gonna be covering today. 
MARK: Yep. 
FRANCESC: What is the normal architecture, the normal layout, of--
MARK: Of what we're doing?
FRANCESC: Yeah.
MARK: Yeah, so, all right. So first we want to start with what we're calling the "cool thing of the week." 
FRANCESC: Cool.
MARK: Yeah, it's gonna be great. So basically, any sort of really interesting projects. Maybe open source. Maybe a new launch. Maybe a tip or trick, something that we think's gonna be saving people time when they work on Google Cloud Platform. We want to share it with the audience, and we want this to be really, like, sort of, participatory. Like, if you've got something out there, you know, we're happy to fill in the details, but if you're like, "Man, check out this project. It's awesome." Or, "I did this great thing and it saved me a heap of time." Please send it through to us. We really want to hear about it. 
FRANCESC: Yeah, and by the way, if you want to--if you want to get in contact with us, to share any of those "cool things of the week," we have many ways of contacting us. The most important one is our webpage, which is gcppodcast.com.
MARK: Yep.
FRANCESC: Then, I think we also have an email?
MARK: hello@gcppodcast.com.
FRANCESC: That's easy.
MARK: Yeah.
FRANCESC: And then, we are also on Twitter as @gcppodcast. On Reddit, we have the subreddit /r/gcppodcast.
MARK: Yep.
FRANCESC: And then you can also find us on Google+ by searching "GCP Podcast." 
MARK: Yeah, if you search for "Google Cloud Platform podcast," we'll show up. 
FRANCESC: Google Plat--Google Cloud Platform podcast. That's why I prefer to say GCP, much easier to say. So yeah, we're gonna have that part at the beginning of the episodes, that are gonna be very participative, so we are waiting for your proposals. And then, at the end of the episodes, we will finish with something quite similar. But rather than saying something that is cool, it's gonna be the "question of the week."
MARK: Yeah, really looking forward to this as well. Really interested to see what questions people are gonna send us through. I think it's gonna be a great resource, and it's always fun, you know, at events we get great questions. So we'd love to share the answers that we can find with people. I think that's gonna be lots of fun.
FRANCESC: Yeah, I'm actually very excited about this part, just because most of the questions that we will get, hopefully we will not know the answer directly. So it's gonna be things that we're gonna have to find out with other Google engineers, [inaudible] managers, and so on.
MARK: We'll have to go find it out, yeah. 
FRANCESC: And as of that, we're gonna learn a lot. So I'm very excited about that. 
MARK: Yeah.
FRANCESC: So--
MARK: What's coming between the question of the week and the cool thing of the week as well?
FRANCESC: Yeah, that's a--that's a little section we call the main content. So we're gonna be covering--we're gonna be doing many different things. The idea is that we're gonna have, like, deep dives on some specific topic, like we're gonna be talking [inaudible] on, like, what is data store or SQL versus MySQL, or SQL versus NoSQL. Things like that. But also, we want to cover other topics. SO we're gonna be interviewing other product managers, engineers, people that are cool and interesting, in general.
MARK: Yeah, I think also customer projects. So if there's people out there using Google Cloud Platform, and you'd love to come on the podcast, reach out to us. We totally want to speak to you. It'd be great to have you on air.
FRANCESC: Yeah. Oh, yeah. It'd be awesome.
MARK: And find out, you know, what people out there in the wild are doing. That's really the interesting stuff too.
FRANCESC: Cool, yeah. So basically, we're--we're pretty open. We're gonna be talking about things that we think are cool, basically. That's pretty much it. So--Okay, so what are we gonna be talking about today, then? 
MARK: Okay, so cool thing of the week I think is pretty straightforward. We have a podcast.
FRANCESC: Yeah, that's cool.
MARK: That's pretty cool. 
FRANCESC: That's pretty cool, isn't it? And so yeah, and what about the main content?
MARK: So we built the podcast for Google Cloud Platform, strangely enough, on Google Cloud Platform. 
FRANCESC: That's true.
MARK: So why don't we have a chat about what we did to build that, and, sort of, let people know how they could even build their own podcasts on top of Google Cloud Platform. If that's something they want to do.
FRANCESC: Yeah, that sounds like a good idea. And actually, just to give a little bit of context about how this idea came up to be, so some months ago I was chatting with Mark about the idea of having a podcast, and we basically planned everything out. We decided everything that had to be done, and then I went on a month of travelling and Mark implemented all of this. So basically, rather than us explaining how we did it, it's going to be more like me asking Mark how he did it. And I hope I will be learning some stuff from that today. 
MARK: Okay. Okay, we can do that. That sounds great. 
FRANCESC: Cool. So first, what is a podcast? Like, what are the pieces in a podcast?
MARK: Okay, so a podcast--well, obviously if you're listening to this you have some familiarity with podcasts. It's a audio recording where we talk about stuff and we do it on a regular basis. This is planning on being weekly, which is gonna be great. So to actually have a podcast, we need audio files, generally MP3 files. We're gonna store them somewhere. We need some sort of website that, sort of, shows what we're talking about with some content, very much like a blog. 
FRANCESC: Yeah. Show notes and all that, yep.
MARK: All that sort of fun stuff. And the other big piece--well, actually I have to step back a bit. We'll need some analytics. That's really important for us. We work at Google where data's very important. So we need to be able to see who's doing what on the website and downloads, things like that. And finally, we need an RSS feed. That's really important for podcasting. It's an XML feed that basically says, "Here are our episodes." So people can subscribe to it, they know what episodes are coming out now, and then they know when new episodes come out, which is pretty cool.
FRANCESC: I see. So basically, we have--we have to host some information, both files and HTML. Then we have to make--have some way of distributing it.
MARK: Yep.
FRANCESC: And then we want to measure how successful we are. 
MARK: Yes.
FRANCESC: That's it. Cool. Okay, so how do we store that data? Where is that data stored? How do we serve all of that? 
MARK: We do magic stuff. Okay, so the MP3 files themselves--the easy answer for that was Google Cloud Storage. So that's our platform for storing binary files. 
FRANCESC: Cool.
MARK: It's really cool, and it's very easy to use. You can create a bucket. You upload a file. Generally, I do it through the web interface, 'cause it's really simple.
FRANCESC: Yeah, you can literally drag and drop, which is pretty nice.
MARK: Yeah, which is nice. And Google Cloud Storage has edge caching, or edge "cashing," 'cause I have an Australian accent. And so depending where you are in the world, it makes sure the files are redundantly stored close to you, so you have really low latency. So it's really awesome. And so it's, yeah, very simple. We're just, sort of, like, "Okay, that's quite clearly where those go." And it makes life very, very simple. 
FRANCESC: Yeah. Yeah, that's actually something that, for a lot of people, is really important. The fact that when you put something on Google Cloud Storage, it might feel like you're storing it in a disk and that's it. But actually, you're not. You're storing it everywhere in the world. So depending on where people are accessing it, it's gonna be edge cached anywhere. So that means that if--
MARK: Super-fast downloads.
FRANCESC: Yeah, if you're listening to this podcast from Australia or from Japan or from Barcelona, you will get the same--the same experience, a very fast experience. It starts downloading very, very quick.
MARK: Yeah, so that's super, super important.
FRANCESC: But then there's also the fact that we don't want people to listen to the next episodes of the podcast. So we can also upload stuff and then keep it private for a little bit and share it with what we call ACLs, or access control lists. That's it.
MARK: Yeah, I believe that's right. 
FRANCESC: Yep, so basically, that way we can say, "Okay, the episode is ready. We're gonna share it only with people that we want them to--their reviews." And so on. So it's--
MARK: It's pretty powerful. 
FRANCESC: Very easy to use, but very powerful.
MARK: Yeah, and for our podcast it's very easy for us to just go, "This is all public read. Go forth. Be happy and--very, very simple." Cool.
FRANCESC: Cool. So, okay. So now we have those files. That's just the audio, right? What about the rest? What about all the content, the show notes?
MARK: Yep. Okay, so what we did for that was a couple of very interesting things, I think. So we went with a set excite generator for the website. A project called Hugo. We did that for a number of reasons, mainly because it's written in Go and Francesc likes Go a lot. 
FRANCESC: Yay. 
MARK: So it is, actually, a really nice static site generator. So we built the website with that, and we could extend it to do all the stuff for podcasting. And it worked really, really well. So once we had all the static files that Hugo generates, we needed somewhere to host that. So that makes sense. We ended--we actually had a few options with that. We ended up actually going with hosting stuff--hosting our static files on App Engine itself. 
FRANCESC: Cool.
MARK: Which is a little bit, maybe, controversial, which is interesting. But we did it for, I think, a few good reasons. One of which is App Engine gives us really easy access to https support. 
FRANCESC: Yep.
MARK: So you can bundle it up, stick it on App Engine, put it up in the cloud, magic cloud. It still has edge caching, much like Google Cloud Storage.
FRANCESC: Yeah, true.
MARK: Which is really nice. We can also upload multiple versions that can be served at the same time on different, like, URLs. 
FRANCESC: Yeah, that's something that I really like. The fact that you can do--not beta testing, I forgot.
MARK: A/B testing.
FRANCESC: A/B testing. That's it. So yeah, you can do A/B testing, and the end state is that what [inaudible] version is more performance, things like that.
MARK: Yeah, and it's great too. Like, I can make a podcast episode, put it up on a different URL, send it to Francesc and say, "Hey, does this look right to you?" He's like, "Yep, sweet." I hit a button in the dashboard. It switches it out with no downtime, which is really nice too.
FRANCESC: Yeah, that's very nice. Yeah.
MARK: And the other reason we went with App Engine is because we can--we can also do dynamic content. So maybe I should actually step back a little bit and talk a little bit about what App Engine is for those people who don't know.
FRANCESC: That sounds like a very good idea, indeed. 
MARK: Okay, so App Engine is one of our--well, is our primary platform as a service offerings. So what that really means is, we kind of say, "Hey, you need to write your code this way, and we're gonna kind of dictate it to you. And as long as you're happy to do that, then that means we can do stuff like really fast scaling, we can provide you with a whole bunch of services out of the box, deployment is really easy. Because we're able to, sort of, adjust based on those constraints we put upon you. And yeah, as long as that fits with you, it's pretty cool. So, I mean, there's a lot of customers we have that use App Engine and like the model, because we can--they can just be like, "Oh, I don't really care how much traffic I get because App Engine is gonna handle it for me and that's awesome." So that's--it's pretty cool. I mean, it supports Go. It supports PHP, Java, and Python.
FRANCESC: Yep.
MARK: Out of the box, and so those are some decent languages that have some pretty decent, like, penetration in the community. 
FRANCESC: Yeah, the thing that I really like about App Engine is that basically, what you do is, you just give us your code, and there's some restrictions on what kind of code you can run, but you basically just give us your code and if it matches our restrictions then we'll just run it for you, whatever happens.
MARK: And the restrictions are pretty, like, reasonable. I mean, it's for web stuff, right? So it says, "No requests over 60 seconds." Well, you probably shouldn't be doing that anyway.
FRANCESC: Yeah, and there's things like you cannot run C++, things like that. But if you want to do that, we have other things. 
MARK: Yeah, we have other stuff for that [inaudible].
FRANCESC: We have a lot of places to run it. And there--yeah, there's some of the customers that run this, it's actually pretty impressive. Because of things like, "Oh yeah, it's something that's going to scale, but can I actually trust it?"
MARK: Yeah.
FRANCESC: There is Rovio that uses it. There's Khan Academy that uses it. There's Snapchat that uses it.
MARK: Snapchat is huge.
FRANCESC: Yeah, it's huge, and it supports, like, it's just running on App Engine. And it runs very well.
MARK: Yeah, we do something like 10 times the traffic of Wikipedia, looking at some of the slides we've had. 
FRANCESC: Yeah, on App Engine in general, yeah. 
MARK: Like, on App Engine. Yeah, it's pretty impressive.
FRANCESC: It's quite a decent amount of traffic. 
MARK: Yeah, and for our needs here for our podcast, I mean, we fit. We fit the mold really well.
FRANCESC: Yeah, clearly. 
MARK: So we can serve a static site, this static content, through it no problem, which is great. But yeah, we've also got some Go code that we're using to do our analytics, which is the other side of things.
FRANCESC: Cool.
MARK: So what we do is, we basically have just a very simple redirect in our--in our code to say where we're downloading podcasts from. 
FRANCESC: Okay.
MARK: And what that does is, on that redirect, the HTTP request comes in. We do a 503. It redirects to--it redirects to--
FRANCESC: To Cloud Storage?
MARK: To Cloud Storage, yeah. Oh, my God. My brain just fell over. Yeah, so it sends off a request to Google Analytics using a little Go library we have. Basically saying, "Hey, here's an event of a podcast download, and here's the podcast."
FRANCESC: Nice.
MARK: So we're able to leverage Google Cloud--Google Analytics and use all its tooling, and basically be able to still use all the code on App Engine at the same time. So we can have dynamic code running. We can have static content at the same time. Deployment's really easy. Yeah, it's pretty sweet. It's actually really nice. 
FRANCESC: Yeah, that's very nice. So for the people that are curious about it, what's the library that you're using for Go analytics?
MARK: It's Go Ogle Analytics. It'll be in the show notes.
FRANCESC: That's a great name, yeah.
MARK: It's a great name. I think the package name is actually GA when it actually gets used. It's actually a really nice library. It uses Google Analytics' measurement API...
FRANCESC: Nice.
MARK: ...so you can send any data. I'm sure we'll get more sophisticated with it.
FRANCESC: Yeah, we'll give it a try.
MARK: Yeah, it's pretty nice. 
FRANCESC: Cool. Okay, so now that we've seen how to store our data, both files like audio files and everything else, HTML, CSS, and so on. We've seen how we manage--how we measure our success, but how do we cause that success? How do--how do we know--how many people realize that there's a new episode up there?
MARK: So the big thing here is what's called, like, an RSS feed. I think that stands for really simple syndication, and there's a few other versions.
FRANCESC: Good.
MARK: It's essentially an XML feed. If anyone's been involved with blogging, they've probably seen this in one way or another. It's an XML format that says, "Hey, I just wrote a new blog post or a new episode of something." So when podcasting came around, it sort of got extended a little bit. So not only is it like, "Hey, I just put out a blog post." It's like, "Hey, I put out a blog post and it's got this audio attached to it." And then there's some extensions for iTunes and some extensions for other things like that, to be able to put some metadata around that audio file. But it becomes a really simple way of letting everyone know, who's subscribing, "Hey, there's a new podcast. You might want to listen to it. It's kind of cool, and come on down." 
FRANCESC: That's nice. And so once we have that RSS feed that we're publishing, how will people find it? Like, they can go to gcppodcast.com, sure.
MARK: Yep, and there's a link directly there. So you could--you could just go to gcppodcast, if your podcast--if you've got a podcast app or anything like that. You can just point at the XML feed quite easily. It'll be on iTunes. We'll probably get on the Stitcher at some point soon.
FRANCESC: Nice. Very nice.
MARK: I'm sure if--yeah, it should be pretty easy to get on board. 
FRANCESC: Cool. So the last part is okay, sure, so now we have a static content--a static site.
MARK: Yep.
FRANCESC: What if people want to comment on it?
MARK: Okay. So all right, what we decided to do was, basically, use some existing communities. So as we said before, if people want to contact us they can do it on Reddit and they can do it on Google+. So we're gonna put a post there for every episode and just say, "Hey, if you want to add comments, please come talk to us here." 
FRANCESC: Yeah.
MARK: It makes life really simple when we can take advantage of those communities. So I think that's gonna, hopefully, work quite well.
FRANCESC: Yeah, I'm actually very excited, especially about Reddit. I think that Reddit is a very active community, and hopefully we're gonna get nice conversations going on in there.
MARK: I haven't participated that much in Reddit. 
FRANCESC: Oh, really?
MARK: I have to be honest. No. But yeah, I'm always open to new things. So that sounds like fun. 
FRANCESC: I like it. I think it's gonna be fun.
MARK: Okay, cool. 
FRANCESC: Cool. So I think that with that we kind of finished how to run a podcast on the cloud. 
MARK: Yeah, I think so.
FRANCESC: Cool. That was pretty easy.
MARK: That was--yeah.
FRANCESC: Cool. So we said that we had the quest--the "cool thing of the week" then the main content. So now we're going for the third part which is the "question of the week." Do you happen to have one?
MARK: I happen to have a question of the week.
FRANCESC: Nice.
MARK: I was at an event a little while ago. It was a sports-themed event, and so this question came up where we were talking about--we had a potential customer asking about whether we were HIPAA compliant. 
FRANCESC: What is that?
MARK: So I'm not gonna try and explain it to the degree of being a lawyer, but essentially, if you're doing health-type things, then you might need the sort of governmental compliance to be able to be like, "Yes, I can run legally. This seems really, really good."
FRANCESC: Okay, so the H in HIPAA stands for health somehow. Cool.
MARK: Yeah. That's H-I-P-double-A compliant. And the nice answer to that question is, actually, yes. We are HIPAA compliant. 
FRANCESC: Cool.
MARK: If you're interested in HIPAA compliance, or any other compliance, we actually have a page under cloud.google.com/security/compliance where we talk about all our compliance needs. We do business associate agreements, all that sort of fun stuff as well. So generally speaking, if you need that sort of compliance, you generally know you need that sort of compliance.
FRANCESC: Yeah.
MARK: If you do need that sort of compliance and you don't know, you'll find out pretty quickly. But yeah, I mean, it was--thankfully it was a really easy question to answer when we got asked. So yeah, I mean, and also in that URL you can check out our security stuff as well. There's a lot of actually really interesting stuff out there.
FRANCESC: Yeah, there's a lot of really interesting information out there. Great. So you said that the "question of the week" for this week came from an event.
MARK: Yep.
FRANCESC: What else are you gonna be doing regarding to events? What are you doing next?
MARK: I've got a few things on my plate. The thing probably locked in the most I'll mention is I will be at Clojure Conj in November. I do, like, my functional programming. So I'm really excited about that. I'll be talking about wrapping clojure developer tools in containers. Where are you gonna be in the next little while?
FRANCESC: Gonna be in many, many places actually. Yeah, in November I'm gonna go to Öredev. I'm not really sure if I pronounced it correctly. It's the weird O, like, Swedish O. So I'm not really sure. It's in Malmö. It's gonna be a very nice conference. I'm gonna be talking about Go and Go in the cloud.
MARK: Awesome. 
FRANCESC: And then I'm going to go to dotGo which is in Paris.
MARK: Of course you are.
FRANCESC: Go conference again. That's gonna be really fun. I still don't know what I'm gonna be talking about, but I think it's gonna be quite fun. I may talk about functional programming in Go.
MARK: Ooh. We should talk about that. That'd be fun.
FRANCESC: Yeah, it's gonna be scary. And then we're gonna have a lot of people from our team, from Google Cloud Platform advocacy team, at Devoxx in Antwerp, in Belgium. 
MARK: That should be lots of fun. It's a shame I'm missing that, actually.
FRANCESC: Yeah. We're gonna be running couple workshops. We're gonna be there. So if you're gonna be somewhere around there, feel free to come say hi.
MARK: Yeah. Brilliant. Okay, that sounds great. Well, if you aren't gonna be at those events, please feel free to send us an email, reach out to us on Twitter, reach out to us on Reddit. We'd love to talk to you. Community interaction is awesome. We're super looking forward to that side of everything. Let's remind people where we can reach us.
FRANCESC: Okay. So for the webpage is gcppodcast.com.
MARK: Lovely.
FRANCESC: For the email is hello@gcppodcast.com. For the Twitter handle is @gcppodcast.com.
MARK: Actually, it's just @gcppodcast.
FRANCESC: Oh, yeah. Sorry, sorry, sorry.
MARK: You kind of repeated it a little bit.
FRANCESC: I got too excited. For the Reddit, for the subreddit is gcppodcast, and then you can find us on Google+ searching for Google Cloud Platform podcast.
MARK: Wonderful. Okay, well I think that probably wraps us up there.
FRANCESC: Great.
MARK: Well, thank you very much for joining me Francesc. I look forward to doing many of these with you soon.
FRANCESC: Yep. Thank you and see you next week.
MARK: See you next week. 
{{< /transcript >}}
