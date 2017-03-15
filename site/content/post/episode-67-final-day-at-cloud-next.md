+++
audioDuration = "00:30:09"
audioFile = "Google.Cloud.Platform.Podcast.Episode.67.mp3"
audioSize = 43358212
categories = ["Next" , "Security", "Solutions"]
date = "2017-03-11T01:07:49Z"
description = "It is the last day of Cloud Next 17 and we got two amazing interviews for you: Titan chips, head of Marketing, and head of Solution Architects, and more in a single episode!"
draft = false
episodeNumber = 67
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Final Day at Cloud Next"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/7Zja4YkLPGo"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5yuzks/episode_67_final_day_at_cloud_next/"
image="/images/post/VintCerf.jpg"
+++

It is the last day of [Google Cloud Next 2017](https://cloudnext.withgoogle.com/)
and we got two amazing interviews for you: Titan chips, head of Marketing,
and head of Solution Architects, and more in a single episode!

One more day, [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
are back with a daily episode from [Google Cloud Next](https://cloudnext.withgoogle.com/)! 
Today we interview some of the many Google Cloud Partners attending the conference.

<!--more-->

##### Daily Highlights

- [Full Day 3 Keynote](https://www.youtube.com/watch?v=h9FSqVbdHis&feature=youtu.be&t=4145)
- [100 announcements (!) from Google Cloud Next '17](https://blog.google/topics/google-cloud/100-announcements-google-cloud-next-17/)

##### Interviews

###### Cornelius and Neal

[Cornelius Willis](https://twitter.com/corneliuswillis) is the Head of Marketing for Google Cloud Platform,
and [Neal Mueller](https://twitter.com/nealmueller) is a Product Marketing Lead also at Google Cloud Platform.

They joined us today to tell us more about
[Titan](http://www.zdnet.com/article/google-cloud-unveils-its-custom-security-chip-new-security-features/),
a new [Trusted Platform Module](https://en.wikipedia.org/wiki/Trusted_Platform_Module)
designed by Google and for Google Cloud Platform, and a very fancy jewelry accessory!

Watch Urs Hölzle talk about his earring/Trusted Platform Module [here](https://www.youtube.com/watch?v=kwnWfHq2EfQ&t=1882).

<div style="text-align: center">
  <img src="/images/post/urs.jpg" style="margin: auto;">
</div>

###### Miles Ward

[Miles Ward](https://twitter.com/milesward) is the Global Head of Solutions at Google Cloud Platform, and
he joins us to share his Cloud Next experience and that of some of the many customers he got to interact with.

You can find all of our Google Cloud Platform Solutions at [cloud.google.com/solutions](http://cloud.google.com/solutions).

##### More about Cloud Next
 
This is the last episode of Google Cloud Next, but you can find a great amount of content on
the [Google Cloud YouTube Channel](https://www.youtube.com/channel/UCJS9pqu9BzkAMNTmzNMNhvg).

<div style="text-align: center">
  <img src="/images/post/VintCerf.jpg" style="margin: auto;">
</div>

{{< transcript "FRANCESC: Hello, and welcome to episode number 67 of the weekly, daily Google Cloud Podcast. It is day three here at Google Cloud Next, and I am Francesc Campoy. And as always I am here with my colleague-- with my dear colleague, today, Mark Mandel. Hey Mark, how are you doing?" >}}
MARK: I'm good. It's my birthday. 

FRANCESC: Ooh. That's awful. I said I was going to say it before he said it. OK, so yeah, happy birthday, Mark, from me and all the people that we interviewed. And there's actually a lot of people that came to just to say happy birthday. 

MARK: It's true. 

FRANCESC: And I'm going to say that if you're listening to this episode you should definitely tweet @neurotic and say happy birthday, neurotic. 

MARK: Aw, thank you so much. 

FRANCESC: [INTERPOSING VOICES] all of that. He appreciates dogs so you can take pictures of like your dogs. He'll be happy. 

MARK: Actually, I will. That's great. 

FRANCESC: I know. Today we are very lucky to get to interview three amazing people from Google Cloud. Two of them working for marketing-- that's the first ones that we're going to have. And we're going to be talking about something pretty amazing. If you've watched the keynote, you may have noticed that Urs was wearing some really cool earring. 

MARK: So at least we know that he is always Urs because he has the chip. He is the real Urs. 

FRANCESC: Exactly. We're going to learn what that chip-- what that earring is and what the backstory behind it. It's a very interesting one. 

MARK: Yeah. 

FRANCESC: And after that we'll be talking to Miles Ward, who he's an all around great guy. He's been doing cloud stuff for a very long time and I'm just excited to talk to him. [INAUDIBLE] is the topic. So-- 

MARK: Yeah. Miles is fantastic. He's the global head of solutions at Google Cloud and always has fantastic stories about customers and engagements that he's had across the platform. 

FRANCESC: So we get to talk to Miles Ward later on, but for now, let's go talk about Urs's earring with our friends from marketing. 

MARK: Cool. Let's do that. 

FRANCESC: We're now joined by two very, very important people here at Cloud Next. 

MARK: Very important. 

FRANCESC: We have Cornelius Willis and Neil Miller. How are you both doing? 

NEIL: Awesome. 

CORNELIUS: Well great, now that I know how important I am. 

FRANCESC: So for everybody else that does not know how important you are, why don't you tell us who you are or what you do at Google. 

CORNELIUS: So I'm Cornelius Willis I take care of product marketing Google Cloud Platform, which means I get to work with amazing people like Neil. 

FRANCESC: So what about you, Neil? 

NEIL: My name's Neil and I work on infrastructure product marketing at GCP, which means I get to work with Cornelius. 

FRANCESC: Cool. So we have you here specifically for something that happened during the keynote. 

NEIL: The chip. 

FRANCESC: Yeah, the chip-- which was pretty amazing. If you have not seen-- if you're listening to the podcast and you have not seen the keynote I recommend go and watch it. At some point Urs-- I'm going to try to say his name I think it's always a test-- Urs Holzle. 

CORNELIUS: Urs Holzle. 

FRANCESC: Holzle. Nice. I've never-- I'm going to go with Urs for now. And so Urs showed that he was wearing an earring that was a chip that does authentication for stuff and machines in the cloud. What is that thing? 

CORNELIUS: So that is the Titan authentication chip that goes on a whole bunch of Google hardware. Essentially, every piece of hardware in Google's infrastructure can be individually identified and any service using it mutually authenticates to that hardware, and the Titan chip is one of the ways we accomplish that. And were so excited to be able to actually reveal that. I mean, if we think about the product marketing's job for Google Cloud Platform, it's to convince leadership to progressively expose more and more Google innovation, even if we're a little uncomfortable with it. So this is a great example of whom were actually able to throw back the kimono on something that was really interesting and is really different from what other cloud platforms provide. 

MARK: Yeah. I liked the joke that Urs did, which was since we have the Titan chip, this is an authentic Google Cloud Platform like-- I'm sorry-- a Google Cloud Platform keynote, like we know for sure that it's him. 

CORNELIUS: And the thing is I was a little worried when he removed it from his ear, because then he was no longer in a trusted, good state. We might have had to shut it down. So it would have happened to a process-- 

MARK: He could have been compromised at any given moment. 

CORNELIUS: Yeah, I mean, done. Right? 

FRANCESC: Yeah. 

CORNELIUS: That's it. 

FRANCESC: Yeah. 

NEIL: So it's been deactivated. 

CORNELIUS: Well, I mean, because everything in the environment is untrusted until proven trusted in-- [INAUDIBLE]. 

MARK: So yeah, let's talk about the chip. What exactly does the chip do? 

NEIL: Let's take a step back before we start getting into the nerd-ery of this security microprocessor. 

MARK: I'm just really excited by the nerd-ery. 

NEIL: How about an analogy? So I bet there's more people in the audience that have seen the movie "Inception" than understand what a security microprocessor is, which is what Titan is. So if you've seen the movie "Inception"-- 

FRANCESC: And if you have not you should go. You should see it. 

NEIL: It's a movie about dreams. 

CORNELIUS: You kind of have to see that in order to-- if you haven't seen it, you have to stop listening to the podcast. 

NEIL: Probably right now. 

MARK: I'd say that's reasonable. 

FRANCESC: I'd say so, yeah. 

NEIL: So "Inception" is all about this thing in philosophy called simulation theory. And it's the disconnection and the concern about there being a disconnection between your perception of reality and reality itself, that you might actually be living inside of somebody else's dreams, somebody else's Sim City, and it's not actually your own little life. That's exactly the concern that Google has with regard to our hardware and our software. 

We want to make sure that the relationship between our hardware and our software comes up in a way that we consider trusted. And that's why we have a security microprocessor, that we called Titan, that authenticates this relationship every time we push a new piece of BIOS-- which is software located on the hardware-- Titan authenticates that installation. And every single time that hardware boots up some software that we've given it, it authenticates that boot-up. 

And it allows us to have, like Cornelius said, authenticated service-to-service-level communication between our hardware and our software, and also our software and our software. It's really similar, in theory, to the stuff that we also have in our security keys that every Googler has on their computer. Insofar as we believe at Google that everything should have an identity. Our hardware has identity. Our software has identity. 

We live in a constantly-- a state that we consider always untrusted, and we verify the identity of everything all of the time. And that way if anything in our infrastructure is deemed a rogue, we can very quickly de-identify it and then carry on with business. 

FRANCESC: So I'm wondering, does that mean that every single one of those little chips has some secret built-in there basically like [? GB ?] keys that something that basically at any point you can decide which one is the one-- like that is not a good one, and you just stop trusting the machine or whatever piece of hardware you have? 

NEIL: Yeah. So how do you know that the Titan itself is the real Titan? 

FRANCESC: Yeah, like because you have many of them, right? So where do you store those? 

MARK: Let's go deeper right? 

FRANCESC: It's turtles all the way down. 

NEIL: You can-- we fuse each individual Titan chip with a unique identifier. And this doesn't mean that the writing that was on the top-- although we did remove that when we gave it to Urs and let him make an earring out of it. 

CORNELIUS: It wasn't good on the jewelry anyway. It didn't-- 

NEIL: No, It was out of style, so-- 

CORNELIUS: We were competing with a diamond stud to get him to wear it. 

FRANCESC: That's true. 

CORNELIUS: So it had to-- little numbers, no. 

NEIL: The fusing happens inside the read-only memory of the chip itself. And it's done in such a way-- it's done sequentially so that we can tell that it's a Titan chip that's in our inventory sequence. And it's done, and theoretically, is only being able to be written once and can't be changed within the chip during the chip's entire lifetime. So you know that that is the real McCoy. 

MARK: And just to be clear though, we make the chips right? 

CORNELIUS: Yeah. Like, I mean, a lot of our stuff we control the design and manufacture of that so that we are able to ensure to the greatest degree possible it has not been tampered with en route. 

NEIL: This is one of the big differentiators of our cloud versus every other cloud that I've been able to learn anything about. There are other folks that run data centers, and other clouds as well, and they can buy servers that have security microprocessors on them. The majority of those that I've talked to don't use those security microprocessors. In fact, no cloud that I've been able to talk to uses their security microprocessors that are given to them by other vendors. 

Not only do we use those, but we created our own, because it's not our jam to not understand fully the supply chain. 

FRANCESC: Yeah. 

NEIL: And so we purpose build our servers, and our chips, and our security microprocessors, and our racks, and our network controllers-- as you saw in the picture when Urs was up on stage. We want to fully understand the supply chain so that we can guarantee provenance over the security of our Cloud. 

CORNELIUS: So it's not just identity that we're trying to authenticate but also heritage. Where did that come from-- provenance. 

NEIL: Provenance. Provenance. 

MARK: Yeah, and it sounds like it's like the whole thing too from BIOS all the way through to software. Is this doing the thing we think it's meant to be doing? And if it's not, then-- 

NEIL: And perpetually challenge that across the entire system. 

FRANCESC: So to go back a little bit and get a little bit away from the geekness area-- we'll be back there in a minute-- 

NEIL: Eh. 

CORNELIUS: No. 

FRANCESC: Who had the idea of saying, oh, let's put a chip on Urs's ear? 

CORNELIUS: So Urs saw the little chips-- Neil, first of all, somehow convinced someone to give him some of these chips. And so you know Neil, is a very robust guy, so I don't know what happened to that person. But we got the chips and so Neil showed them to Urs, and they're these very cute little things, and Urs said, ooh, that could be an earring. And then he looked at me a few minutes later said, no. Don't do that. No, don't do that. 

FRANCESC: He knew where it was going. 

CORNELIUS: And Neil, in the meantime, had gone off and found-- I don't know where you found earrings. Like did you go to-- 

NEIL: One of our product managers, Maya, knew of a craft store nearby and I hustled over there. 

MARK: That's how the best things happen. 

CORNELIUS: So you've got both the earring posts and the superglue at the same store. 

NEIL: Same place, yeah. 

CORNELIUS: Wow. 

FRANCESC: Very useful. 

CORNELIUS: Very efficient. And so he came back with the studs and convinced him that it would be something that would really get his picture in a lot of places. 

NEIL: And could potentially glue his ear together with superglue. 

CORNELIUS: Yeah, and the thing that I think we were excited about is figuring out how to actually map this down into Urs's own sort of immune system. So just the same way we have an immune system for our cloud, maybe you could figure out how to make that connection. 

MARK: I'm a little sad, actually. I tried to put it through my ear. I had my ear pierced when I was probably like 15 or so, and the hole is slightly closed over, and so I couldn't put it in properly. And then I was like-- 

CORNELIUS: Well, maybe it's because you're not-- you're authenticatable 

MARK: No, no, no. You know what? Maybe it the one-- 

FRANCESC: Or you need to press harder. 

MARK: Well, I'm not Urs. I'm not Urs. And it's going, well, I don't know who you are so we're not doing this thing. 

CORNELIUS: Right. 

FRANCESC: So going back to the geekness area, I'm curious, so this is a very useful thing to have, right? The fact that you're able to authenticate a piece of hardware, it is amazing for us, Google, but it might also be amazing for other people everywhere in the world, right? It is something that is offered as a service or it's just like a security layer that is internal to Google? 

NEIL: So right now we're the only cloud that we know of that's currently using a security microprocessor. Not only are we the only one using one period, but we're the only one that has purpose built one. If we were to make this chip addressable for customers, configurable for customers, we would be the first cloud to do so. We don't currently do that. 

MARK: OK. That's fair enough. I think this is also super interesting, right? The whole question of the cloud and this often comes up where it's like, hey, is the cloud secure? And we get that sort of things like, oh god, we can't move things to the cloud. 

NEIL: This is one of those great examples of, oh, my gosh-- what did Eric Schmidt say on stage? He was like-- 

CORNELIUS: He said don't-- 

NEIL: [INTERPOSING VOICES] cloud now. 

CORNELIUS: And don't try to do this yourself. It's a waste of your money compared to what we've been able to do. 

MARK: But it seems like it's the sort of thing where you're like, is this the type of security you would do yourself if you're building stuff on your own, like data centers, your own networks? How much effort do you want to put in yourself? I mean, this must have been a huge investment to make this things happen. 

CORNELIUS: A huge investment, not only in money, but in time. 

MARK: Yeah, research. 

CORNELIUS: You know, many, many, many years of building out the layered architecture. I bet it hasn't stopped and continue to do that. 

NEIL: So you might be curious what goes into a security microprocessor like a Titan. So within Titan are three things-- a random number generator, a crypto engine, and a monotonic counter. 

MARK: Ooh. 

NEIL: So of those three, the one that I really didn't understand until I Googled it was monotonic counter. And now that I learned what it means, I'm super excited to share. So a monotonic counter is essentially something that protects against replay attacks in addition to other threat vectors. And it ensures that account goes forward and never backward. 

MARK: Yep. 

NEIL: So it's a tool within logs to make tamper evident, because if you were ever to remove a log and say, oops, that never happened, that person never came here, it would be obvious because it would go from two, to four, to five. It'd be obvious that you've removed something. 

And if you tried to insert something and say something happened when it actually didn't, the monotonic counter would be proof positive that it had not occurred. So those three things inside a secure microprocessor. 

FRANCESC: Cool. So we said what goes inside of Titan, talked about what it's used for, where does it actually go? Other than on ears. 

NEIL: Yeah, sure. So the position is very important for this particular product. It needs to sit between ROM and RAM in order to provide a signature validation of the first eight kilobits of installation of a BIOS, for example, or the boot-up of any of our pieces of hardware. And once it validates the first eight kilobits-- kilobytes of installation it lets you install the rest of the BIOS and every machine boot. 

FRANCESC: Cool. So one last question. Is this something we're going to start creating a fashion line on it? Are people starting to use it-- do you see people in a month or two walking around with chips on their heads-- which would not surprise me, to be honest. 

NEIL: No. So, yeah, we're going to be making these. The Titan chip is comprised of an outer case and an inner microprocessor. We're removing the inner microprocessor and then we're going to be attaching the exterior cake to cuff links, earrings, and tie clips. And we'll be-- you'll see them-- 

MARK: I'm so in. 

FRANCESC: I'm so looking forward to that. 

NEIL: You'll see them at the next Next. 

MARK: I am-- I am so in. 

FRANCESC: That's an amazing pun. 

MARK: Excellent. Well I think that's about it. Is there anything else either of you would like to add or anything that has been mentioned that you think is important? 

NEIL: Thank you to you guys for doing this podcast, day in and day out-- the tireless work and creativity that you provide. And thanks to our listeners for being on Google Cloud Platform, for being interested in what we're doing. 

FRANCESC: Thank you two for taking the time to come talk to us today. 

MARK: So Titan is super, super cool. Thanks to Cornelius and Neil for coming by and giving us a good long chat about that. 

FRANCESC: And thanks for bringing one of them. It was really cool to play with it. We get to touch one. We got to touch one. It was so cool. 

MARK: But why don't we head on over and talk to a dear friend, Miles, whose effervescent energy brings everything to life? 

FRANCESC: Sounds good. Let's do that. 

MARK: Amazingly excited and delighted to be joined by Miles Ward, global head of solutions at Google Cloud. Thank you so much for joining us, Miles. 

MILES: Thank you. I'm just super excited to be here. What an incredible week. 

FRANCESC: It's an amazing pleasure for me too, to have you here. I used to listen to your voice a long time ago on that AWS podcast long time ago. 

MILES: That's exactly right. 

FRANCESC: So it is amazing to have you here at the GCB podcast now. 

MILES: It's just the changing of the seasons. We have moved from the, sort of, cold winter of one cloud to the bright spring of another. 

MARK: Ooh, I like the metaphor. 

FRANCESC: Such a beautiful and poetical way of putting it. 

MARK: Yeah. Before we talk to you about Next and stuff, can you tell us a bit about what you do at Google? 

MILES: Absolutely. So we have customers. That's the-- 

MARK: Hopefully. 

MILES: That's the lifeblood of any cloud, right? Cloud technology is incredible stuff, but it really doesn't do anything until it meets the road with customer demand and actual usage in the field. So my team engages with customers as they've gone through working with our sales people, our customer engineers that are kind of the first line of technical defense. And then they have escalation points like folks that are in specialized roles and in sales. 

But when everybody gives up, when everybody goes, that's too technical and scary and I'm not sure how we would build that, the solutions architecture team is the top point of escalation there. So I run that team globally. 

FRANCESC: You are also the team that is responsible for all the amazing white papers that we have available, right? 

MILES: Yeah. We think of it as a very virtuous cycle, right? We go out to customers that all of our folks have told us, we don't know how to do this. We try to figure out how to do it. If we're successful-- and we aren't always, but most of the time we are-- if we can figure out how to make something work we write it down because we are easily bored. [INAUDIBLE] three or four times in a row. So we write it down, we publish it. 

That's all the material that's at cloud.google.com/solutions. And that stuff-- our best practices, our step-by-step instructions on how to move an application to the cloud, or how to back up an application, or how to build it for scale, or set up for IoT, or do work in media and entertainment and oil and gas, and all over the place. So that kind of guidance, one, gets us out of doing the same thing twice, but helps us stay focused on what's next for customers. 

FRANCESC: And also, now that no one is listening, helps us here at the podcast, because we might have been used some of those solutions as the main script for our podcast episode. So thank you very much for those ones. 

MILES: Hey, we are here to help. 

MARK: Definitely. Then they show up and we're like, oh, good. Cool thing of the week, done. Good solution. 

Well, it's one of the things that's exciting for me, right? I mean, any team has to grow. You can't just like install a 200-person team out of thin air. So we've been growing very rapidly. And what it allows us to do is ship more of this stuff. Right? 

So we've gone from 12 of them two years ago to 70 of them last year. 

FRANCESC: Oh, wow. 

MARK: Wow. 

MILES: I think we're going to take a goal for 100 of them getting shipped this year. 

FRANCESC: That is crazy. 

MILES: On top of that. So it's really-- it's and we watch. I can see the statistics of visitors coming in and downloading this material. And then I can see they go over and we see new accounts that follow these patterns. That's real business growing on top of us and reduced risk. Right? I hate doing stuff from scratch if I don't know what it is that I'm doing when I'm not involved in some kind of creative process. 

If I'm just trying to get something done and there aren't instructions-- 

MARK: Yep. 

MILES: That's super obnoxious. And so when we talked to customers they-- every single one says, I just want you to tell me how I'm supposed to do it. So we're trying to do that. 

MARK: Yeah. And it's so much better to learn from the mistakes of others than-- 

MILES: That's right. 

MARK: --doing it yourself. 

MILES: That's right. And we think we have an environment that really radically de-risks that kind of experimentation. I think it's a fun place to build new things and to try stuff out. But I think some people have a certain amount of budget and a certain amount of time and focus for that kind of experimentation. And then the rest of the time is spent on the obnoxious stuff that should just work. 

We're trying to go through and step-by-step walk through each of those pieces and make it so that they just work. Right? Backing up a database is not something that is a creative and advanced expression of your personal-- 

FRANCESC: I did that on the weekend. It was so much fun. 

MILES: It should probably have a manual. 

FRANCESC: Yep. 

MARK: Yep. Now, you obviously you speak to a lot of customers, and you've been here at Cloud Next. How have the experiences for people you've talked to you been like? What has been the response you've had to the venue and event? 

MILES: So, I mean, I think there's a couple of phrases that have come out of our keynotes and come out of some of our big presentations that have had a really big impact on the perspective from the customers that I talked with. I mean I had-- I went to three different customer dinners just last night. So-- 

MARK: Did you eat dinner three times? 

MILES: Well, you know, you can have a lot of salad and everybody sort of thinks that you're participating in the fullness of the chow. So what I heard from customers was sort of three basic things-- first was from the first keynote. Seeing HSBC on stage-- that's an account that I did a lot of work with. I was super excited to see them take the stage-- seeing how clearly, for them, that the value of Cloud was associated with the speed with which they could do things. 

What they are seeing in every one of the examples and demonstrations is this stuff is fast. It's not fast like 100 million IOPS, or something like that. It's fast like it takes Evernote three months to move. It takes Lush a month to move. It takes Ocado six hours to rewrite their ETL. Like these statistics are now really material to go, wait a minute. Wait a minute. 

I'm planning and budgeting in the back of my mind on like Netflix scales, where it's going to take seven years to migrate. If I can do this stuff in months instead of years, the economics are totally different. The value proposition is totally different. And that's, as I go around enterprise to enterprise-- even little start-ups that are already implemented in other places-- they say, wow, I didn't realize that it was that much faster. That's a big deal to me. That really changes my perspective. So that's awesome. That's super awesome to see. 

MARK: Nice. 

FRANCESC: There's something to be said there about like, also, the exponential growth that you can have like Pokemon Go and Iantech. 

MILES: Yeah. 

FRANCESC: So-- 

MILES: Well, you talk about exponential growth-- so I was at the GCP event-- they didn't call them Next yet-- three years ago. 

FRANCESC: Oh, yeah. I remember those. 

MILES: 375 people there. I went to the one last year and presented a bunch. Built a bunch of stuff there, built the tree house over there for that thing. 

FRANCESC: Oh, yeah. 

MILES: There were 2,600 people that came through the door for that. There are like almost 14,000 people here. 

FRANCESC: It is crazy. 

MILES: [INAUDIBLE]. It's 10x and then 5x to say, OK, find 3x. We're going to have to put in intermediary floors inside of Moscone to be able fit enough humans to watch all the stuff that we're building up. I mean, that's outrageous growth. Outrageous growth. 

FRANCESC: It is pretty amazing also seeing all a number of-- all the partners that we have all around. It is amazing. Yeah. 

MARK: Yeah. Even just walking through the startup space, there's like 10, 15 of them in there just all of them doing each individual cool things. So-- 

FRANCESC: So what other things have you heard from customers that were really excited about? Was there any specific announcement or something of that that they were like, oh, that thing was amazing? 

MILES: So I was surprised-- I know the degree to which we hold it as sort of its own unique class of thing, but the messaging around Spanner has landed. 

MARK: Yeah. 

MILES: Right? And when I talk to customers they go, look, man, I read that paper five years ago. I know that you guys had the crown jewels hiding someplace. I know that that's the one. We are diving in, figuring it out, and I'm watching on the inside as we work with customers and look at the metrics. I mean, the growth on Spanner adoption in weeks is stupefying. Right? 

Like we're-- I've got engineers on the SRE team changing trajectory of focus to deploy more and more infrastructure into the Spanner hosting just to be able to keep pace with demand. And as our customers are talking about it, they look at-- I think they got the message up front about the idea of, yeah, I can do globally consistent transactions. I can make it so that when I write something on one side of the planet, on the other side of the planet I'm not messed up and out of sync. 

But I don't think they really realized that that came along with super, super fast, super, super big, where like the simpler message of yep, millions of IOPS is OK. Yep, doing it at gazillions a byte, you put terabytes in there is fine, petabytes in there is fine. 

MARK: Whatever. 

MILES: They're like, I get both. Wait a minute. How-- why-- how am I-- what? Like it seems very surprising to them. So it's cool that we've been able to really hammer on both of those messages. And I'm seeing businesses and like, it's weird. You're right I don't like my Oracle and I'm not super stoked about my MySQL. All of those are sort of a pain in the neck. Maybe I should try this out. 

FRANCESC: So what's your view on the fact that, well, Spanner is still beta? Does that mean that people are not using it? It seems like it's pretty much the other way around. 

MILES: No. I mean-- so I mean, in my experience, what I've seen-- you have to imagine there's a range of products that are being built by Google Cloud Platform that are being built for Cloud, right now, as we speak, from scratch. Right? The DLP API is not that way. We take a service from G Suite and we externalize it as a dedicated service that customers can use. Right? 

Spanner is an example that's more that way, where we have a running production system handling millions and millions of transactions a second, serving hundreds of Google businesses. It is highly mature in its operations model. RSLOs are well defined, with a clear standard service there. The new part is that we're charging for it. They're just little billing components that got to get slapped on. You've got to have an API that's externalized that you need to slap on. And we need to test those to the same level of rigor as the core operations. 

I think in the database world, for me, the big risk or the big terror is losing data or having data corrupted. And I think those are the places where the new layers that are part of Spanner to make it something that can be a public service, they just don't affect that part at all. 

FRANCESC: Yep. 

MILES: So I see customers able to do that calculus and say, yeah, let's dive in. Let's figure that out. 

MARK: Since you're on the customer side, now I'm just curious, are you seeing customers as they jump in on the beta being able to kind of provide feedback and push the direction of where the product goes? 

MILES: Yeah. So I had a great conversation on Twitter yesterday. One of the parts of the design of the product, in order to be able to meet the tight SLOs that it's designed for to be able to deliver the kind of transactional consistency, it's not multitenant. So we ask you to build individual nodes-- which we call on our side-- and like any good relational structure that's replicated, your real default there is to deploy three nodes. So the minimum cost to run it 24/7 with those three base nodes putting lots of gigabytes of data in there, it's about $2000 a month. 

So when I talk to developers, they say look, look, look, when I'm in prod, I'm going to give you $200,000 a month because I'm going to want to run this at the size of the moon. But right now, I want to mess around on my laptop and I want to mess around in a way that I know is compatible with the primary thing. Or fine, if it's impossible to put on my laptop, give me something that I can run on a micro or whatever-- 

MARK: Yeah. 

MILES: --so that it's at a price point that's compatible. And I know our product managers, they made an analysis of the market and they're looking at what technology they have available. I think we were really eager to take what we know of as the exact best practice for a product that already has a reputation years before it's launched and make sure that that product behaves exactly the way customers have dreamed about for years. Now they've got their hands on the real deal. I think it's-- the feedback that I've heard is clear enough that it's obvious to me that we'll go through and do the work to create something that's designed for developer consumption so that the experimentation can happen without costing a couple grand. 

FRANCESC: Nice. Is there anything else that you think our audience would like to know like any anecdote, anything that might have happened backstage that you'd like to share? 

MILES: Sure. So I'll tell you one that's funny. So Chris [? Selves, ?] who's the product manager building all the stuff for Windows-- he's the guy who did the car crash onstage with the Hot Wheels. 

FRANCESC: Oh, yeah. 

MILES: Right? Like that I think it's hysterical, right? He's like, oh, we need to do this sort of at a different scale and he brings out these cars. He actually made the crash noise and everything. So what he told me was that he really had to kind of go through and think hard about which Hot Wheels would he bring onstage. 

[LAUGHS] 

Like you know, these are going to be famous Hot Wheel cars. 

FRANCESC: Yeah. 

MILES: Like, you know, they're going to take some video [INAUDIBLE]. So he had to pick through his kid's box and find just the two coolest trucks that he had. 

FRANCESC: I think that we have amazing speakers and they do the weirdest things. We also saw this morning, Justin Beckwith with a durian. 

MILES: Yeah. 

MARK: Yeah, taking [INAUDIBLE] just 'cause. 

FRANCESC: I don't know what's happened there but it's pretty amazing. 

MILES: Unbelievable. 

MARK: All right, Miles, thanks for taking the time come hang out with us at the podcast. We really appreciate you telling all those stories. And hey, man, you ever want to come back again, we'd be be more than a pleasure to have you. 

MILES: Hey, you guys are doing outrageously great work. I work every day and take benefit from the awareness that you create. So I super appreciate it and I'd love to come back. 

FRANCESC: In exchange, next time you come you need to play the tuba. 

MILES: I will totally play the tuba. 

MARK: You have a tuba? 

FRANCESC: Oh, yeah. 

MARK: That's happening. 

FRANCESC: Oh, yeah. There's a backstory there. 

MARK: Fantastic. 

FRANCESC: Thank you so much. 

MILES: Thanks, [INAUDIBLE]. Bye. 

FRANCESC: So thanks again, Miles, for such an interesting conversation. I've met him long time ago. First time I heard his name was long time ago on the AWS podcast. The last time I saw him was somewhere in Japan. He was giving talks around the world. He is super cool guy, so thanks so much for taking the time to talk to us. 

It is sad, but-- 

MARK: It's over. 

FRANCESC: This is the end. 

MARK: This is the end. Well, at least till next week. 

FRANCESC: Yeah, till next week. This is the end of Cloud Next 2017. It was an amazing conference. 

MARK: Yeah. 

FRANCESC: And we didn't want to finish the episode-- the fourth episode in this week-- with saying a huge thanks to our dear editors. 

MARK: Yep. Sean, James, thank you so much for putting up with this, doing daily episodes, editing all our podcasts. 

FRANCESC: You're amazing. 

MARK: Yeah, to everyone who's listening, huge thanks to them because they do an amazing, amazing job. 

FRANCESC: Yeah. Especially because you can-- maybe you cannot tell, but we're incredibly tired, so we actually keep on messing it up and they need to read edit it up back to making it sound almost normal. So thank you, again. 

MARK: Yep. 

FRANCESC: Thank you so much. 

MARK: And Francesc, thank you to you for being so wonderful here as well today. 

FRANCESC: Thank you, Mark, for being here on your birthday. Happy birthday. 

MARK: Yes. And thanks to everyone who came past the booth said hello, grabbed some stickers, grabbed some t-shirts, even just wandered up and we're just like, hey, we love the podcast. 

FRANCESC: It was awesome. Thank you all so, so much. We really felt the love. 

MARK: Yeah. And thanks to everyone who listens. 

FRANCESC: And talk to you all next week. 

MARK: See you all next week. 
{{< /transcript >}}
