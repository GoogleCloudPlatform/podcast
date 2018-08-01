+++
audioDuration = "00:26:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.139.mp3"
audioSize = 38848890 
categories = ["NEXT", "Techtonica", "Kubernetes"]
date = "2018-07-27"
description = "It's the third and final day for us at NEXT, and Mark and Melanie are wrapping up with some great interviews!"
draft = false
episodeNumber = 139
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Next Day 3"
image="/images/post/Hero-Next-Day-3.jpg?4362984378"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/fZMkKbixpXM"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/92fku1/episode_139_next_day_3/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

It's the third and final day for us at NEXT, and [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) are wrapping up with some great interviews! First, we spoke with Stephanie Cueto and Vivian San of Techtonica, a San Francisco non-profit. Next, Liz Fong-Jones and Nikhita Raghunath joined us for a quick discussion about open source and Stackdriver and last but not least, Robert Kubis helped us close things sharing what it means to do DevRel at this event.
  
<!--more-->

##### Stephanie Cueto and Vivian San

[Stephanie Cueto](https://twitter.com/SMCueto) is a Software Engineer and advocate for the Latinx & women community. She has been involved in the Tech community since 2016. Playing with code at an early age and working in education led to my interest in becoming a Software Engineer. Currently she is a Software Engineer Apprentice at Techtonica, where she has gained the skills to build projects in MongoDb, MySQL, Express.js, React, and Node.js. During the program, she created Salient Alert, a platform for reporting ICE Raids and Checkpoints. 

[Vivian San](https://twitter.com/VivianSan21) is a highly analytical full-stack software engineer with an educational background in the hard sciences. She is strongly motivated by writing clean, efficient code, and passionate about teaching and giving back to underrepresented individuals and communities.

##### Liz Fong-Jones and Nikhita Raghunath 

[Liz Fong-Jones](https://twitter.com/lizthegrey) is a Staff Site Reliability Engineer at Google and works on the Google Cloud Customer Reliability Engineering team in New York. In her 10+ years at Google she has worked across eight different teams spanning the stack from Google Flights to Cloud Bigtable. She lives with her wife, Metamour, and a Samoyed/Golden Retriever mix in Brooklyn. In her spare time she plays classical piano, leads an EVE Online alliance, and advocates for transgender rights.

[Nikhita Raghunath](https://twitter.com/thenikhita) is an intern at Red Hat and works on the extensibility of Kubernetes. Previously, she was a Google Summer of Code (2017) student for the Cloud Native Computing Foundation (CNCF) and also worked on Kubernetes. She is interested in backend applications, distributed systems and Linux. Nikhita likes programming in Go, C++, C, and Python. She also likes to give talks at conferences and speak about her work.

##### Robert Kubis
[Robert Kubis](https://twitter.com/hostirosti) is a developer advocate for the Google Cloud Platform based in London, UK, specializing in container, storage, and scalable technologies. Before joining Google, Robert collected over 10 years of experience in software development and architecture. He has driven multiple full-stack application developments at SAP with a passion for distributed systems, containers, and databases. In his spare time he enjoys following tech trends, trying new restaurants, traveling, and improving his photography skills.


##### Interviews

* Made Here Together: NEXT Developer Keynote [video](https://www.youtube.com/watch?v=JQPOPV_VH5w)
* Techtonica [site](https://techtonica.org)
* I am Remarkable Workshop [site](https://iamremarkable.withgoogle.com)
* Haben Girma's accessibility presentation at NEXT [video](https://www.youtube.com/watch?v=ony1wb1DOKw)
* GCPPodcast Episode 127: SRE vs Devops with Liz Fong-Jones and Seth Vargo [podcast](https://www.gcppodcast.com/post/episode-127-sre-vs-devops-with-liz-fong-jones-and-seth-vargo/)
* Red Hat [site](https://www.redhat.com)
* Kubernetes [site](https://kubernetes.io)
* Introducing Agones [blog](https://cloudplatform.googleblog.com/2018/03/introducing-Agones-open-source-multiplayer-dedicated-game-server-hosting-built-on-Kubernetes.html)
* Stackdriver [site](https://cloud.google.com/stackdriver)
* OpenCensus [site](https://opencensus.io)
* GCPPodcast Episode 118: OpenCensus with Morgan McLean and JBD [podcast](https://www.gcppodcast.com/post/episode-118-opencensus-with-morgan-mclean-and-jbd/)
* Edge TPU [site](https://cloud.google.com/edge-tpu/)
* GCPPodcast Episode 135: VirusTotal with Emi Mart&#237;nez [podcast](https://gcppodcast.com/post/episode-135-virus-total-with-emi-martinez/)
* Cloud Spanner [site](https://cloud.google.com/spanner/)


{{< transcript "[ARPEGGIATED SYNTHESIZER THEME PLAYING] MARK: Hi. And welcome to episode 139 of the currently daily Google Cloud Platform podcast. We're here on the show floor at Next, and as always, I'm here with Melanie. How are you doing, Melanie?" >}} 

MELANIE: Hi, Mark. We are almost there, day three. It's actually technically the day after day three. It's the next day. 

MARK: Yes, but it's been a pretty amazing thing. 

MELANIE: How are you doing? 

MARK: I'm doing OK. I'm still soldiering on. 

MELANIE: You're pushing through. 

MARK: Yeah. Today was pretty amazing. Today was the developer keynote. A lot of our teammates who are on stage, Yufang, Aja, Eno, Kelsey, yeah, are just killing it. She's killing it. 

MELANIE: Showing the things you can do as a developer. 

MARK: Yeah. You should check out the keynote. It was really, really cool. They did some amazing stuff, a lot of live code. A lot of live code. 

MELANIE: Which is wonderful. I know Adam was saying, let's show, not tell. 

MARK: Yeah. 

MELANIE: So yeah, it was a good day. And we have a couple more interviews that we have done while we've been at Next that we're going to showcase now. So let's go ahead and do that. 

MARK: Let's do it. 

MELANIE: We have joining with us Stephanie Cueto and Vivian San. Who are both here from Techtonica. Thank you both for joining us today. 

STEPHANIE CUETO: Thank you for inviting us. 

VIVIAN SAN: Thank you for having us. 

MELANIE: So tell us a little bit about who you are and what you're doing. 

STEPHANIE CUETO: My name is Stephanie Cueto. I was born and raised in Southern California, moved up here after college, because I lived in the suburbs and didn't really like it. It's not too exciting sometimes. And I wanted to be independent, grow by myself. 

And so I moved here when I started college. After college it was in the nonprofit sector for a little bit. And then code kept bugging me a little bit, and then-- it kept bugging me, actually, all of my undergrad and then after college too. And then I applied to a couple of programs, because I was like, oh, I like this. And so then I'm applying to Techtonica, and now I'm here. 

MELANIE: Nice. 

MARK: Cool. 

MELANIE: And Vivian? 

VIVIAN SAN: My name is Vivian, and I'm a San Francisco native. And I grew up in the Tenderloin District, so it was pretty much part of the tech hub and everything. And I honestly have never even thought about going into tech. I was a chemistry graduate from UC Davis and, of course, if I spent four years of college, getting that degree, I'm going to come out of it and be like, I'm totally going to be a chemist. There's no way. 

But I mean, it's weird how I even came upon being in tech, because it's something that I never even thought of or something that anyone even introduced to me. But it was weird, because the day that I came out, I actually saw a Techtonica flyer. And I was like, you know what? I'm going give this a shot. If I could do something as scary as that, then I could do this. 

MELANIE: And for those who don't know, what is Techtonica? 

VIVIAN SAN: So Techtonica's basically like a nonprofit organization that is providing free technical training to local woman and non-binary adults and basically just giving them the opportunity to learn these relevant tech skills and without having to worry about the cost of it. And especially if they're mothers, they don't have to worry about childcare, just giving them a safe place and work in the community to just learn. 

MELANIE: And my understanding is you're both from the first class, right? 

VIVIAN SAN: Yeah. 

STEPHANIE CUETO: Yes. 

MARK: Oh, that's amazing. 

MELANIE: And you just finished? 

STEPHANIE CUETO: Yeah, last week. 

MELANIE: Last week. 

STEPHANIE CUETO: Yeah, everything's going so fast. Wow. 

VIVIAN SAN: Yeah. I know. 

MELANIE: It usually does. Are you in the process now of doing the whole preparing and looking for jobs? 

STEPHANIE CUETO: So an amazing thing that happened is that Techtonica was able to provide everyone a placement with a partner. 

MELANIE: That's great. 

STEPHANIE CUETO: Yeah. So we all have internships starting either next week on Monday or a couple of weeks after that. 

MELANIE: Oh, wow. 

STEPHANIE CUETO: Yeah 

MARK: So it looks like they provide tech apprenticeships. Can you tell us about what that looks like and what you actually end up doing when you're in the program? 

VIVIAN SAN: I would say that the first three months is just really just learning all about everything, about JavaScript, learning it religiously. [LAUGHS] But really just the first three months is just learning the fundamentals, really. And then the next three months is just doing all projects and just building off of what we learned and being able to apply it working in groups and also working independently, so just getting a little bit of the best of both worlds. 

MARK: Nice. And I know there's also support for people with low incomes to provide laptops, things like that, as well? 

STEPHANIE CUETO: Yeah. So if you need a laptop, they provide a laptop. If you need some help financially, they also provide a living stipend for the apprentice. 

MELANIE: Nice. And were you starting-- it's internships or it's-- where are you starting? 

STEPHANIE CUETO: Internships, so it's mixed panel, so a bit of a competitor with Google Analytics. 

[LAUGHTER] 

MELANIE: We will accept that. 

VIVIAN SAN: And I'm starting at Redfin, so they're a real estate company. 

MARK: Oh, yeah. Awesome, awesome, awesome. 

MELANIE: Well, this is great. So we're at Next. And you've been here for two days. It's like the third day as we speak. How's it been? What have you seen that you've been excited about? 

VIVIAN SAN: I think this is like literally the biggest conference we've ever been to, because we're only so used to just being in one building, but this is spread out between like five different places. And it's pretty crazy. I mean, it's just insane how much technologies are out there and how much they're releasing so quickly. 

It's also really overwhelming at the same time, but really exciting, because you know-- especially now as we're developers, we know all these tools that are out there. And we know that we can take what we learn from here and be able to tell our companies about it and be able to leverage our knowledge and being able to contribute. And I think that's like really the most amazing thing is just being able to feel that way. 

STEPHANIE CUETO: Yeah. I think also just how welcoming it is too. I think sometimes we take for granted that we're in San Francisco, and then we meet other people from other parts of the world and they're like, oh my gosh. They're taking pictures. 

And at least for me, I got into other conferences too. And this is probably one of the biggest ones where it combines a lot of people, because it's developers, marketing, sales, all these people that come from different backgrounds in tech. So it's pretty interesting to just see the mesh of it. 

But when we talk to them, they're like, oh my god, you live here. And I'm like, yeah, this is amazing. You're around everything. And I'm like, yeah, it's really cool. So it's interesting just to meet other diverse people and just kind of get the other perspective, because sometimes I think we do take for granted that we're around here. 

MELANIE: And I was asking you before we started, were there any sessions that you went to that you were excited about? Are there any sessions that you wanted to mention that you saw and found very interesting? 

STEPHANIE CUETO: Yeah. So I was talking about the I am Remarkable workshop that's happening upstairs in the second floor of Moscone West. And it was just very-- I came in there just kind of like, oh, it sounds cool. Let me see what it's all about. 

And then they came at you with stats. They're like, hey, your remark was-- so it's a workshop targeted towards women, but it's also for everyone. It's just kind of like, change your mindset of how you think about yourself, because with women, specifically, they are more prone to be put down by both men and women. So if they ever are bragging about themselves, when they say their accomplishments out loud, or if they speak up or anything like that, they're more likely to be like, she's talking too much, or she's bragging about herself. 

So you're getting hit, not only from the male side of it, but also your own colleagues that are women. And then on top of that, we also are more prone to talk bad of ourselves, too, like we don't want to come off that way. So then we start putting our own selves down, like, oh, we shouldn't probably shine that much, and just kind of put our accomplishments a little bit down. 

So they gave us a just a background on it and just where these stats were coming from. And then after that, we did the actual workshop, where they gave us a piece of paper where you write down like all the things that you're remarkable because of. So it was interesting just to see how people get stumped and how people were also very positive on. 

So they were able to write the whole page down to say, I'm remarkable, because I'm a software engineer. I'm remarkable, because I speak two languages or three languages our four languages. I'm remarkable, because I volunteer all my spare time here, and just all these things that come out that you don't really realize that you're doing and that you are remarkable, because, you know. 

And so some people were going really strong, and some people were stumped at one point, because I guess we're prone to not-- like they were saying, we're not prone to really think that way. And we need to change that, look in the mirror, be self-positive, talk to yourself, and say, you are remarkable. Yeah, you're beautiful, you're positive, you're an amazing person, and change that perspective a little bit more. 

And so it was just amazing. I was almost able to write that whole page at the end, but kind of fell short. But it's OK. I'm going to try to do it, and it's a good thing to do when you go to your teams and stuff like that, and even your friends. Make everyone change the perspective of how awesome they are. 

MELANIE: Nice. Vivian, any sessions that stood out for you? 

VIVIAN SAN: Yeah. That one, for sure, was one of them too. We also went to one where they were talking about accessibility and inclusion. And I thought that was really awesome, because you don't-- especially when you're making docs or making meetings, that's not something that you purposely try to do, not make it inclusive for all your employees, but it's just something that does happen. 

But I found it so amazing how there was so much detail that goes into it to try to make everyone feel safe and make everyone feel included. And I felt like, especially for us, what we were told, when we come into this, we can learn all the technical knowledge that people will tell us, and we can learn online and stuff. But you can't really teach people perspective. 

And I think for us especially, coming in from like non-technical background and low income families and communities, I think that showed us that we could contribute. And I felt like, just because of that talk, it made me feel more comfortable going in, saying like, yes, I can make a contribution, that I could be a strength to this company. And I thought that was amazing just to hear them say that. 

MELANIE: That's great. 

MARK: Awesome. Have you played with any of the showcase demos or anything else around here, as well? 

STEPHANIE CUETO: Not yet. 

VIVIAN SAN: Not yet. 

STEPHANIE CUETO: But we're going to today. 

[LAUGHTER] 

MELANIE: That's what's next for you. 

STEPHANIE CUETO: Yeah. We've been going to a lot of the talks and everything, walking around. And we haven't even gone to-- I think there's a couple workshops that I want to go to today at the hotel. So I went to one in the Metreon, in the theater, which was kind of interesting. 

MARK: Oh, cool. 

STEPHANIE CUETO: And then there's some in the hotels, just like-- it was huge. 

MELANIE: I know. Actually, before we started, too, we were talking about how you were surprised that there's so much that Google has in terms of products and services. 

STEPHANIE CUETO: Yeah. I didn't know it was like an AWS, basically, like Amazon. I was like, whoa, you can do everything that Amazon does, too, like hosting websites, doing all these things. I was like, whoa. I didn't know all of this. And I was amazed when I was hearing the keynote speaker speak about all of these products that are coming out, or like they're revamping everything. I was like, whoa. I need to get on Google even more. 

MARK: Good. Our job here is done. We can all go home. 

MELANIE: We're done now. Last question I want to ask you both is, coming from this program, is there any advice that you have for those who are getting into tech? 

STEPHANIE CUETO: So at the end of our last week, so Michelle made us-- Michelle is CEO-- she made us reflect and write down advice that you probably have for future apprentices. And I kind of thought about myself, and I was like, what would I want to hear in the beginning of this program to make it a little bit easier and everything like that? And so we did write down a couple of things. 

One of those things to me was, or to the future ones, is like, hey, this is going to be tough, so make sure you do prepare. Make sure you're strict with your schedule. You are going to have to really focus right now. You're going to have to be frugal, too, because it's a long process. You're not working right now, and so make sure that you're very disciplined, one. 

It's OK to say no. It's OK to say no to other activities like birthdays, like all these festivities. They're going to be there still the next year. And so right now, you need to focus on you. And that was the one main thing that I was like, it's OK to say no. And it's OK to focus on this. And you need to be a little bit selfish and focus on yourself right now. 

MELANIE: That's great. 

VIVIAN SAN: And I would say it's OK to feel scared, because I went into it, and I was so terrified. I was like, I don't know anything, and I don't know what to expect. And everything was just so unknown. 

I think I would just tell the future apprentices that it's OK to feel scared. And I think just allowing yourself to feel vulnerable in the fact that you do feel scared, I think that's actually a really good thing, because it's telling you that you're actually trying to push yourself to learn something new and trying to change your life. 

And I think that's OK. You feel scared might actually be a good thing, especially if there is more cohorts coming in. I would tell them that we need more women, and we need more diversity. We need more inclusion. And by doing this, you are helping to, I guess as Michelle would say, bridge the tech gap, essentially just being able to put more perspectives out there. And you are going to be someone who's going to be part of this committee to change the world. 

STEPHANIE CUETO: I think I would add on to like-- 

MELANIE: Yeah. Please. 

STEPHANIE CUETO: We all became very close. We're very strong. And make sure-- you are all going through similar things, so we talk to one another, speak to one another. You're going to go through a lot. 

And so make sure you have that support system, because maybe your parents or anyone doesn't really know what you're going through right now-- it's different background-- or maybe even friends. So you guys are all going to become very strong. And make sure you keep that together and rely on one another. 

MELANIE: Find your community. Build your community. And places like this, too, give you opportunity to expand that too. 

STEPHANIE CUETO: Yeah. 

MELANIE: Well, thank you very much for joining us and sharing your experiences. We really appreciate it. 

STEPHANIE CUETO: Yeah. Thank you guys. It was pretty fun. 

MARK: I'm super excited. We have two really amazing people coming to join us today, Liz-- and I don't remember your last name. 

LIZ FONG-JONES: Fong-Jones. 

MARK: Fong-Jones. Well, I had it right in my head, and I got it wrong. Nikita. 

NIKITA: [INAUDIBLE]. 

MARK: Excellent. Thank you so much, both of you, for joining us today. 

MELANIE: Thank you for joining us. 

LIZ FONG-JONES: Thank you for having us. 

MELANIE: We grabbed y'all off the floor. It was like, please, please, come on the podcast. 

MARK: So you both do very different things. But Liz, why don't you tell us a little bit about yourself and tell us about what you do and stuff. 

LIZ FONG-JONES: Sure. So I am a Customer Reliability Engineer. And I help GCP customers build and operate reliable services on GCP. So that involves anything from teaching them how to run incidents to teaching them how to monitor their services and how to architect their services better. 

MARK: And we've done a podcast with you previously too. 

MELANIE: Yes, you have. 

MARK: Yes, we have. Nikita, what do you do? 

NIKITA: So I work at [INAUDIBLE]. I am a Kubernetes maintainer, and I work on all things extensibility of Kubernetes. And Mark knows a lot about it, I guess. And yeah, I like to do everything Open Source, basically. 

MARK: Basically, the work that you do makes Agones possible, which is awesome. 

MELANIE: And we like Open Source, and we have an episode coming out on Agones in a couple of weeks. So Nikita, what are you enjoying about Next? 

NIKITA: Oh, I love Next. So I was with visiting the booths in the booth area. And the most interesting part was looking at how everyone is using Google Cloud. And the one thing I notice is that almost all companies are using GCP or GKE in very different ways. I think it was pretty cool going to all the booths and figuring out how they're using it and understanding more about it. 

MELANIE: And then Liz, I know you just did a talk, and you're finally free of the talk. How was your talk? What was your talk about? 

LIZ FONG-JONES: So yesterday I got to share with everyone a bunch of early access Stackdriver features that enable people to do their operations more like SRE using Stackdriver tooling. So specifically, how do you improve your measurement, how do you improve your time to detect incidents, how do you improve your time to respond to incidents, using really cool stuff that we're finally getting to talk about? So my favorite thing about Next has been getting to release all this cool stuff and see how people react to it. 

MELANIE: That's fantastic. 

MARK: That's really cool. We talked a lot about Open Source, I think pretty much all over the place. Nikki, you've been involved with Open Source for a really long time. How did you end up there? 

NIKITA: It's not been a really long time. It's like, oh, a year I guess. 

MARK: That's a long time. 

NIKITA: Well, I just graduated. So I got involved through a program called Google Summer of Code. So it's that Google pays students to work on Open Source projects during the summer. And I started contributing to Kubernetes that way, and, well, I just contribute a lot right now. So that's my Open Source journey. 

MELANIE: Nice. Liz, what's your experience with the Open Source world? What are your perspectives in terms of where things are at and what you're excited about? 

LIZ FONG-JONES: I'm really excited that there is so much interesting work happening with OpenCensus, with Kubernetes, where we're starting to see a lot of the things that we've been doing inside of Google for a long time be accessible and interoperable with people outside of Google. That's been super awesome, because it means that people don't have to reinvent the wheel over and over. They can just plug into things that people have already built, and that's really awesome. 

NIKITA: I totally love OpenCensus. I want to contribute to it at some point. Maybe I'll get to it after Next. 

MELANIE: We also did a podcast on OpenCensus. 

MARK: I'm sure you don't need it, but if you need introductions, I'm more than happy-- 

[INTERPOSING VOICES] 

NIKITA: I would definitely look at it. 

MARK: That's really cool. And I know you work on the extension part of Kubernetes. What are some cool extensions that you've seen? 

NIKITA: Oh, I think there's something called Agones. I think it's also covered on the GCP podcast, so-- 

MARK: It is a bit. 

NIKITA: Yeah. So you should definitely check it out. 

MARK: Yeah. Anything else other than stuff I work on? 

NIKITA: I think operators are really the kind of exciting bit related to extensibility of the Kubernetes API. And I think there are lots of operators out there, so I think I would definitely say the operator bit. 

MELANIE: I love how we're plugging all the things. And let me also bring this back-- it's quite an interesting intermix of discussion. But Liz, I know we had you on, like we said, with Seth, and we talked about SREs and DevOps. And my understanding is you guys just had another episode that came out in terms of the video series that you're working on. Is that right? 

LIZ FONG-JONES: We have a new set of five episodes coming out in late August. 

MELANIE: So you have one coming. 

LIZ FONG-JONES: We recorded them last week. 

MELANIE: I saw some announcement. I thought it had already come, but apparently not yet. So it's coming out in August, in late August? 

LIZ FONG-JONES: Late August. 

MELANIE: Nice. And any specific highlights that you can mention now? 

LIZ FONG-JONES: Yeah. We have a really packed agenda. We're talking about things like, how do you respond to incidents, or how do you set up your alerting so that you can actually reasonably defend your service-level objectives, rather than finding out like, hey, we broke it, but we didn't find out until it's too late? 

MARK: Very nice. Very nice. OK. I know you both have to go. You both have meetings. Before you go, favorite thing you've seen at Next so far. 

NIKITA: Agones. 

MARK: Aww. 

NIKITA: No, it was really cool. I loved your talk. It was funny. So I liked that. 

MARK: Thank you. I appreciate that. Liz, favorite thing? 

LIZ FONG-JONES: I have to say the thing from this morning, the mini TPUs, the Edge TPUs. That was really exciting to see that these chips of silicon that Google is manufacturing will be in a whole bunch of devices. 

MELANIE: Nice. Well, thank you so much for coming and taking some time to chat with us. We really appreciate it. 

MARK: Yeah, absolutely. 

LIZ FONG-JONES: Yeah. Thank you for having us 

NIKITA: I just came for the chocolate. 

MELANIE: Yes, we have chocolate. Please have chocolate. 

MARK: Please take the chocolate. 

So it's great that Robert Kubis is joining us. He is a fellow developer advocate and alumni podcast attendee, I think. 

ROBERT KUBIS: For a week, I think. 

[LAUGHTER] 

MELANIE: That's all you need. That's all you need. 

MARK: You've been pretty busy here at Next. What have you been up to? 

ROBERT KUBIS: Yeah. First of all, thank you for having me again after a week at the podcast. 

MELANIE: You were that good. We needed to get you back. 

ROBERT KUBIS: Maybe, maybe, maybe. Yeah. It has been really exciting. So I think like what is maybe sometimes not seen is that there's a lot of work that goes in by the [? DA team, ?] more general, like a lot of Google teams, into making this conference a reality. So I was involved personally in building some of the showcases, so in particular two of the showcases that I was involved in. The Cloud Spanner Boost or Showcase, I was involved in the creatives, as well as building part of the demos and for the storage and database one as well. And it's actually a lot of work. You can imagine. 

MELANIE: How many months of work has it been? 

MARK: It's the Cloud, though. Don't you just push a button and make it work? 

[INTERPOSING VOICES] 

I just assume that's all you need. 

MELANIE: You just push a button. 

MARK: Just push the button, and it makes software happen. 

MELANIE: There's no code, no code. 

ROBERT KUBIS: So that's a funny thing. I think the majority of work is not actually the coding or the technical part of this. The majority of the work is actually getting the messaging right. We want to have that the attendee has a good experience, that they understand what we want to achieve with the showcase, that they get an intrinsic experience into this showcase. And creating this kind of narrative is most of the work, I would have to say. And then fine tuning it and then getting it into reality is the heavy lifting for creating a showcase. 

MARK: So tell us about the showcases you had a hand in. Tell us what those were all about. 

ROBERT KUBIS: So first one is the Cloud Spanner showcase, where we have kind of like two substations in that showcase. So one of them is what we call the Cloud Spanner Kaleidoscope, which is a really cool looking kind of installation with some mirrors and a display and some buttons and handles and wrenches, which in British English it's actually-- Spanner is a wrench in the US. 

What we wanted to show there is the aspect of manageability in Cloud Spanner, that it's very easy to get your own instance and scaling it in and out. And we wanted to show you that it's done in four clicks. 

And you basically choose a name. You choose what configuration you want to have. You want to choose how many nodes you want to have. And then you click OK, and you have your own instance. So very easy. 

So the Substation 2 is where I actually show how easily and how quickly Cloud Spanner is scaling in and out. So I have a demo where you can produce some throughput, some reads and writes against Cloud Spanner. And then you can scale it in and out, so you can scale the nodes. 

And you see how quickly Spanner is load balancing, and your latencies go down again and things like that. It's a really cool thing. I encourage everybody to check it out. 

MELANIE: Cool. So what have you seen at Next outside of what you've been working on that you're really excited about? 

ROBERT KUBIS: So there's, unfortunately, not a lot of things. I also had two talks that I had to prepare of. 

MELANIE: Oh, easy-peasy, right? You just got it all done very quickly. 

MARK: Yeah. So it's a showcase and two talks. I mean, whatever. It's fine. 

ROBERT KUBIS: Exactly, exactly. So the thing is, I guess is there are a lot of people like me in the sense, but most people maybe not seeing that from the outside. But I'm a notorious procrastinator. So I'm probably the best in my life at procrastinating till the deadline is looming. So I am usually the one who is late with slides and preparing till late hours and stuff like that. 

MELANIE: No one does that. 

ROBERT KUBIS: Exactly. No one is doing that. So I've pretty much been involved in preparing for my talks to deliver a good experience also to the attendees. They are coming here to get some information and to get the best out of the session. So I want to give them the best of me. So I invested a lot of time into perfecting my talks and really have a good experience for the attendees. 

I got to walk a little bit around the showcase floor in Moscone West today. And one experience which I really liked was the Cloud Function experience, where you have that big cannon, and then you can shoot your Cloud Function into the Cloud, which is amazing. So I encourage everybody also to check out the Cloud Function showcase at Moscone West. 

MARK: Actually, it's worth noting that you just talked about how much time and effort goes into the showcases, how much time and effort goes into your presentations. But that's just one showcase and one present-- we have over 500, 400 presentations and how many showcases on the show floor? 

ROBERT KUBIS: I don't know, 60, 70 80? I don't know. It's a lot. 

MARK: Yeah. So that's a lot of effort is kind of my point, to put on a show this size that's spanning, what, six buildings? 

ROBERT KUBIS: Yeah. 

MELANIE: And how many attendees? I heard 20,000 or 25,000? 

ROBERT KUBIS: Yeah, something around that. 

MELANIE: And how does this compare to last year? 

ROBERT KUBIS: It is actually-- so I've been with Cloud, in particular with Google Cloud, for three years and four months now. And I have experienced, I think this is my fourth Next. And it has been a tremendous growth. I think last year around 7,000 to 10,000. I don't know the exact number. The year before that was 2,000. 

So it basically tripled, almost quadrupled in size, and now it doubled in size again. But it's just crazy. Without [INAUDIBLE] I/O this year, it has been the biggest, the largest conference for Google so far. And what I've seen, it's amazing so far. 

MARK: Yeah. This is my third Next. And this is the biggest, but I actually genuinely believe this is the best Next. 

MELANIE: And I know you did the podcast last year. Did you do it the year before that too? 

MARK: Yeah. Yeah, we've been doing the podcast on the show floor for-- 

ROBERT KUBIS: The third year with the now, right? 

MARK: Yeah. Yeah. We didn't know what we were getting into in that first year, but still, here we are. 

MELANIE: Here we are. 

MARK: That's wonderful. 

MELANIE: Well, Rob, anything else you wanted to share with the folks back home around Next, around things they should look for? 

ROBERT KUBIS: I hope everybody enjoys their experience here. Please reach out to us and the podcast team if you have any question. Also we love to hear positive and critical feedback. So if there is anything where you think where we can improve, please let us know. 

But also show us the love, basically, where we do well. We want to hear that. We need that, as well, to basically find the energy to do even better Next for you next year. And follow me on Twitter @hostirosti. 

MARK: Nicely done. 

[LAUGHTER] 

MELANIE: Are you speaking anywhere and anytime soon outside of Next? 

ROBERT KUBIS: So I think I'll take a break for a while. 

MARK: That seems reasonable. 

MELANIE: That seems acceptable. 

MARK: Awesome. Robert, thank you so much for joining us. 

ROBERT KUBIS: Thank you for having me. 

MARK: All right. 

ROBERT KUBIS: Cheers. 

MELANIE: Thanks again for everybody who came out for today, as well as everyone has come for the last two days. We've really appreciated being able to talk to different partners and students and-- 

MARK: Alliance people, all the relationships. 

MELANIE: Some of our own colleagues, just getting a sense of the perspectives and the interests and what everybody's been experiencing. We appreciate that. 

I also want to just take a second and say this, because this is my first Next for the podcast. And I know, Mark, we were talking about it before off line that this is your third one. 

MARK: Yup. 

MELANIE: So you and Francis did this last year and the year before. So this is like old hat for you. 

MARK: Yeah, totally. 

MELANIE: I'm gonna say, one of the things that I've observed and that has been really impressive is just how many people have come by. And I'm really grateful for that, for the listeners who stop by to say thank you. So thank you for saying thank you, because that means a lot to hear that this has been very helpful for you. 

And I also want to give a shout-out to James, who's been with us for a while, who's been helping to edit this podcast. 

MARK: Oh, yeah. 

MELANIE: He's been incredible, especially with what we've been doing for this week. 

MARK: Yes. 

MELANIE: And more recently, Jennifer and Trey, who have been also incredible. So we're not just doing this by ourselves. 

MARK: Absolutely not. 

MELANIE: We have a couple of other people who have been phenomenal and making sure that this actually is getting done. 

MARK: Yeah. They have been killing it. Doing daily episodes is super hard work. And setting all of the interviews and everything we've been doing at Next has been like nonstop while we've been here. But we couldn't have done it without the support of all the people behind us. So thanks. Big thanks to them. 

MELANIE: Thank you very, very much. And then Mark, thanks for making this so easy-- this has been fantastic-- and bringing me along for the ride. I really appreciate it. 

MARK: Thank you for joining me. This has been an absolute delight and a pleasure. 

MELANIE: Yeah. I think that's a wrap for us for Next. And we will have another episode, like always, next week. You'll get to hear about container security, to give that a tee up. But yeah. Outside of that, Mark, are you going anywhere? Are you gonna do anything? 

MARK: Sleep. I'm gonna sleep. 

MELANIE: Sleeping is good. I know. We need to recover. 

MARK: You too? 

MELANIE: Yeah. I definitely need to recover. 

MARK: Fantastic. Now, it's been a great event. Thank you all for listening. And yeah, we'll actually see you all next week. 

MELANIE: We'll see you next week. 

[MUSIC PLAYING] 
