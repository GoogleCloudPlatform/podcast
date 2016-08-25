+++
audioDuration = "00:30:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.11.mp3"
audioSize = 44179761
categories = ["Internet of Things", "Machine Learning"]
date = "2016-02-03T01:07:49Z"
description = "In the eleventh episode of this podcast, your hosts Francesc and Mark interview Jen Tong, a Developer Advocate for the Google Cloud Platform, about the Internet of Things."
draft = false
episodeNumber = 11
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "The Internet of Things with Jen Tong"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/5ZJ6HMAsqYY"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/440e0f/episode_11_the_internet_of_things_with_jen_tong/"
+++

In the eleventh episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Jen Tong](https://twitter.com/MimmingCodes), a Developer Advocate for the
Google Cloud Platform, about the Internet of Things. 
<!--more-->

##### About Jen 

Jenny is a Developer Advocate on Cloud at Google. In this role she helps
developers build cool stuff on all sorts of platforms. Previously she worked in
a wide variety of software roles from robotics at NASA, to developer advocacy
for Google Glass. 

She is passionate about education, especially on the subjects of technology and
science. If she's away from her laptop, she's probably skating around a roller
derby track, or hanging from aerial silk.

You can contact Jen through [Twitter](https://twitter.com/MimmingCodes) and her
[home page](http://mimming.com/).

##### Cool thing of the week

- [Deep Learning at Udacity](https://www.udacity.com/course/deep-learning--ud730)
  Google Research [blost post](http://googleresearch.blogspot.fr/2016/01/teach-yourself-deep-learning-with.html).
   
##### Interview

- [Arduino starter kit](https://www.arduino.cc/en/Main/ArduinoStarterKit)
- [NodeBots](http://nodebots.io/): Robots powered by JavaScript
- [Raspberry Pi](https://www.raspberrypi.org/)
- [Arduino Uno](https://www.arduino.cc/en/Main/ArduinoBoardUno)
- [Node.JS](https://nodejs.org/en/)
- [Firmata for Arduino](https://github.com/firmata/arduino)
- [Johnny Five](http://johnny-five.io/)
- [Firebase](https://www.firebase.com/)
- [ESP8266](https://www.sparkfun.com/products/13678) WiFi Module
    
##### Question of the week

- Google Cloud Platform training [page](https://cloud.google.com/training/)

{{< transcript "FRANCESC: Hello, and welcome to the 11th weekly episode of the Google Cloud Platform podcast. I'm Francesc Campoy, and I'm here with my co-host Mark Mandel. Hey, Mark, how you doing?" >}}
MARK: I'm good, thanks, Francesc. How are you doing?
FRANCESC: Pretty good. Very excited about this episode, touching something that I think is very controversial, at least the name. I know a lot of people that don't really like it.
MARK: Okay, talking about Internet of Things.
FRANCESC: The Internet of Things, yeah, what it really is and why is everybody talking about it.
MARK: It's a pretty popular, though, topic.
FRANCESC: Yeah, to the point that we have a developer advocate in our own team that--
MARK: She's pretty active.
FRANCESC: Yeah, works a lot on it, so we're gonna have her today.
MARK: Yup.
FRANCESC: But before that, let's talk about the cool thing of the week.
MARK: Definitely. So you pointed this out to me earlier today. I thought it was pretty interesting. Udacity has a deep learning course.
FRANCESC: Yup, I saw it on Twitter on the Google Cloud Twitter. Yeah, it's actually very interesting 'cause I know that there was a bunch of courses around about machine learning, some of them created by Google, but this, the first deep learning course, so deep learning, what does that entail? Well, it's not only about neural networks, but it's more about what kind of information you can extract out of, basically, everything. It's quite interesting because it's actually applied, so they show you all the theory. According to Udacity, it's around a three-month course, and it's free, so I think…
MARK: It's pretty cool.
FRANCESC: That's pretty awesome.
MARK: It's worth mentioning, like, it is built by Google. Like, it's a Google program in conjunction with Udacity. It does talk about TensorFlow as well, which we've talked about previously as well.
FRANCESC: Exactly.
MARK: But it says it's an intermediate to advanced-level course, but it sounds like it could be pretty cool.
FRANCESC: Yeah, I think that you will nef--you will definitely need some basis on machine learning, but at the end of this course you should be able to use TensorFlow like a pro, basically, so I think it's--if you have the time to go through the course, I could definitely do it.
MARK: Yeah, that sounds like it'd be really cool. Awesome.
FRANCESC: Great, so let's go talk with our colleague, Jen Tong.
MARK: Why not? Let's do it. So we're joined today by one of our most illustrious coworkers, Jen Tong. Jen, how are you doing today?
JEN: Doing great, how are you?
MARK: Very, very well. Thank you so much for joining us today.
JEN: Of course.
MARK: So we wanted to talk to you about Internet of Things and that sort of fun stuff, but why don't you let us know who you are, what you do, your background, et cetera, et cetera, so people have an idea of who you are?
JEN: Sure thing. So hi, everybody, I'm Jen. I'm a developer advocate at Google, and I focus on Google Cloud Platform, and that means, in a nutshell, that I help people cause trouble with code or build cool stuff and then, you know, join them in the satisfaction of accomplishing something great, and along the way I help people understand why cloud technologies are awesome and can make their life easier.
MARK: Cool, cool. Do you focus on any particular products and stuff? I mean, obviously we want to talk about the Internet of Things, but I'm just kind of curious.
JEN: Yup, so kind of the area I focus on is parts of the cloud to either make, like, IOT prototyping really easy, which is, I guess, what we'll be talking a little bit more about today, but also the other side of the equation is Internet of Things devices are really good at generating a whole bunch of data, so I spend a lot of time focusing on the big data side of that, things like BigQuery and Pub/Sub and BigTable.
FRANCESC: Nice.
MARK: Yes.
FRANCESC: Cool, so I'm a little bit curious about the Internet of Things. I've heard many definitions of it. What is yours?
JEN: So the Internet of Things, the way I define it is any device that didn't used to be associated with Internet connection, so something smaller than a laptop, smaller than a smartphone usually, that connects to the Internet and then allows you to access it in ways that you--you know, you did not previously expect, so using the same seed of protocols and other languages that we use to do anything else on the Internet.
MARK: So what would be some examples of that?
JEN: So one of my favorite examples is--something that people don't really usually associate with the Internet of Things is the rise of, like, Uber and Lyft and the other Internet-connected rideshare services, and this is because it took something that didn't used to be connected to the Internet, which was essentially, like, cars, rideshare, taxicabs, and then connected it to the Internet using people's smartphones, which was really cool, and then suddenly, like, it became a lot easier to use, and it spawned a whole new marketplace, which was, you know, kind of an amazing thing.
FRANCESC: Yeah, I never thought about Uber or Lyft being Internet of Things, but sort of makes sense, the Internet of cars.
MARK: Yeah, so okay, interesting. You could almo--would you--okay, so would you classify, like, AirBnB as an Internet of Things?
JEN: AirBnB? I don't know as much 'cause there's not really a lot of--like, there's no specific hardware involved.
MARK: True.
FRANCESC: Yeah.
JEN: AirBnB's more--to me seems like a hub of payment gateways.
MARK: That's true. That's more--okay, fair enough. 
JEN: Which is pretty cool too, it's just the houses don't move as much. They don't need that.
MARK: That is true.
JEN: I mean, the moment they add, like, location-specific temperature predictions and stuff like that, then that would probably put them over the edge, which would be pretty cool, little weather stations at each house.
MARK: Yeah, almost like Nest, really.
JEN: Yeah.
MARK: Yeah.
FRANCESC: Actually one I thought about, Internet of Things, one of the first things that came to mind was a toothbrush. Like, can you talk a little bit more about that? Like, is also Internet of Things when you start connecting random stuff like toothbrush or, yeah, like Nest, like, thermostats? Is also that Internet of Things?
JEN: Yeah. We're seeing that happen all over the place now. Peop--things that used to just be standalone and, like, had their own--you know, potentially their own APIs, they might have had a way to digitally interface with them over Bluetooth or something, but suddenly they're starting to come into existence with web servers or other proprietary ways of pushing data to the cloud, like toothbrushes, refrigerators, washing machines, and it's suddenly making them a lot more functional, and then magically you can use them from any Internet-connected device, which is cool.
FRANCESC: Nice.
MARK: That sounds good, and soon, you know, my fridge can tell me about all the stuff I really should have thrown out but haven't yet already.
FRANCESC: Yeah, I'm still waiting for the day when the fridge will be able to send a notification to my phone saying--it's like, "Hey, you're running out of milk," stuff like that.
MARK: I want my fridge to just send an order to Amazon saying, "Hey, just send him some milk automatically 'cause he's already run out," and then I don’t even have to do anything.
FRANCESC: That's a little lazier. I like it, yeah. Nice. So tell us a little bit about how did you get involved with the Internet of Things?
JEN: Ah. So I'm gonna have to go further back on that. My education, university was focused on both electrical and computer engineering, so at the beginning of my career I spent time working on things like robotics. In fact, I had a little run doing robotics at NASA, and I actually hated it back then. It was--it was really hard because we didn't have all the cool debugging and all the neat stuff that, like, the Internet was bringing to other kinds of development, so I took a break and focused on web development for most of my career because debuggers are awesome, and then, you know, I kind of pushed it aside until one day someone's like, "Hey, there's this new Arduino thing. Electronics is easy now," and I didn't believe it at first, but, you know, I picked up an Arduino starter kit, and I was hooked, and then it was just a matter of time before WiFi shields and other things that allowed those easy-to-use electronics to start getting connected to the Internet appeared on the market, and then, you know, suddenly it was fun and easy to build stuff that used to be kind of a pain to build.
FRANCESC: Nice. I'm a little bit curious about the robot part. What kind of robots were you building? Can you share that? 'Cause it was NASA, so I'm not sure if you can say--if you can share.
JEN: Oh they were all public projects who--that all have been canceled since, but one of the ones I spent the most time on was called the Crew Return Vehicle, which was the escape pod for the space station.
FRANCESC: Oh, cool. That's awesome.
JEN: Which has since been canceled, but the idea behind it was it was a mostly-automated return system so you wouldn't have to have as much training for the pilots on a space station, and I worked on a physical robot test bed for the software that did things like automated docking and release.
FRANCESC: That's awesome.
MARK: Very cool.
FRANCESC: But you're a Cloud developer advocate, so how do they--like, how does the cloud get in touch with the Internet of Things? Are they the same thing? How are they related?
JEN: So it's kind of the Internet part of the Internet of Things because all the electronics and, like, the embedded operating systems and all that stuff can--makes a thing that could be very intelligent, but once you attach it to the Internet, Cloud is a logical way to add Internet capabilities.
MARK: So are there any particular challenges on the Cloud side? Like, I'm guessing if you have lots of Internet of Things you need to deal with, like, scale, or you talked a little bit about big data. Can you tell us a little bit more about how that works?
JEN: Yeah, so there's a couple that come to mind. The first one is Internet of Things devices tend not to be the most intelligent systems because you're gonna want to use lower-power things that are less smart, so they tend to generate a lot of data, which is cool 'cause you can do cool things with lots of data like machine learning and all that stuff, but it is a different kind of data than what we're used to from, like, web development, so it stresses a lot of our traditional database and, like, REST API systems that we've built up to power web apps, so we have to kind of take a little bit of a different approach to handling that much throughput of data, which is where things like Pub/Sub and BigTable really shine. Another aspect of it is Internet of Things is also about low-power systems, and transport layer security is usually a big challenge and actually is responsible for a lot of the complexity in sending data in a secure way to the Internet, so that's one that you usually spend a lot of watts and a lot of effort overcoming.
FRANCESC: Do you have some advice about security on the Internet of Things? 'Cause that's one of the things that every single time I read about Internet of Things on the newspaper, it's because someone hacked--like, I read about someone hacking a toothbrush, and they were able to access your password or something like that. Like, what kind of techniques you should implement to avoid that--those things?
JEN: What kind of techniques? A lot of this goes back to kind of the same techniques we're used to doing from other kinds of development. The first one that I would always recommend is don't reinvent security yourself. We have protocols like transport layer security that we are--you know, we're pretty confident work really well. Use those. Don't try and invent your own encryption scheme to save a few bits of overhead. The other aspect is, you know, hard off is a good way to make sure that things like microphones and things can stay off when you're not actually using them for your device, so.
FRANCESC: Nice.
JEN: Take advantage of physical off.
FRANCESC: Unplug it and that’s it.
JEN: Mm-hmm.
FRANCESC: Nice.
JEN: Exactly.
MARK: The most secure computer is one that's not plugged to the Internet or power.
FRANCESC: Yeah, that's--that normally tends to--
MARK: That works. Well, that sounds really interesting. So if people want to get involved with the Internet of Things or they're sort of interested in that sort of platform, where should they go? What should they do? 
JEN: So most of the people I talk to who are just kind of getting into the Internet of Things excitement have web development background, so this is where I kind of steer them in a specific direction, is there's this really cool, growing community of people building NodeBots, and NodeBots is mostly focused on the electronics side and using JavaScript to control robots and electronics, but because you're using JavaScript, all the neat web stuff that we've done that work well in JavaScript and well on Node also work on these robots, which is really cool 'cause you can fall back on all the tricks and techniques and design patterns that you learned from building JavaScript web applications except you can use them on electronics without, like, having to learn a whole new language and a whole bunch of new frameworks.
MARK: So what does that sort of development process look like? So if I'm writing JavaScript and I have, I guess, some sort of physical thing, like, how do I connect to it? What does that look like? What sort of thing would I have? Like, I don't know. I don't know anything about this stuff, really.
JEN: So usually what I steer people to if they just want to get started is first, like, use whatever you have available if you have something available, and what a lot of people, it turns out, already have is a Raspberry Pi and an Arduino Uno that they picked up from a Kickstarter or they got at a conference, and they're on some shelf somewhere gathering dust, so that's usually the first recipe I give people, is they install Node.JS on a Raspberry Pi and then use a USB cable to plug it into their Arduino Uno and use a protocol called Firmata, which comes with the Arduino SDK, to communicate with your Arduino and then do of--all the electronics work on the Arduino 'cause it is a wonderfully robust and durable board and is very tolerant of mistakes that would burn out other dev boards.
FRANCESC: That's good. That's one of the things that I actually learned quite quick, was that depending on how you plug stuff, you might burn it down, which, yeah, it's kind of sad if you only have one of them. Actually, for me, one of the biggest problems, it was not the programming part of it when I got started, was for instance, if you want to have light that--a little LED that blinks, you actually have to add some resistors in the middle, and I didn't know how to do that. Like, what is your advice? What--how do I learn these things?
JEN: So my advice is not to fear things going wrong and to copy things where possible to get started 'cause it's always easier--just like a software project, it's always easier to start from something that's already working, so coincidentally, like, my favorite JavaScript library, Johnny Five, which is used by a lot of NodeBots, has wonderful documentation that also is a really good kind of, like, primer to electronics, so whether you get it from the Johnny Five docs or, like, the Arduino Uno starter--you know, the starter pack and the instruction manual there, all those things have pictures of, like, the circuits you should build and then an explanation of why they should work that way and usually code that goes along with it to get it working, so at the very beginning I wouldn't spend a lot of time trying to get a deep understanding of why. Just find pictures, copy them, get them working, and then explore and expect things to burn up every once in a while and, you know, get used to it, and then your understanding will grow over time, and your bag of tricks will improve, and things will catch on fire less often.
FRANCESC: Hopefully.
JEN: Yes.
MARK: Now, do you have a favorite, like, getting started project? I hear, like, blinking light tends to be the hello, world of Internet of Things. Is that kind of the truth?
JEN: Yup. So along with that recipe I described with the Raspberry Pi with Johnny Five and Firmata and Node.JS and the Arduino Uno, the first project I usually recommend people is an Internet button that turns on an LED, so you wire up a button, and when you press the button, you send a signal out to the Cloud. I usually steer people towards Firebase for their first project. You know, you flip something in Firebase, and then you have a Firebase client on the same or another, you know, set of this--another Raspberry Pi that receives that signal and then turns on an LED when the button is down.
MARK: Do you want to talk a little bit about what Firebase is and maybe how it fits in with IOT? We haven't really talked about Firebase too much on this podcast, so.
JEN: Ah, got it. So Firebase is--was an independent company that got acquired by Google in late 2014, and it is a way to--it's kind of like, generally, a bag of goodies that you can use to build apps, like web apps and mobile apps, and it works really great with JavaScript and Node.JS, which means it also plays exceptionally well with NodeBots, and the data model behind Firebase, one of the components of Firebase being a realtime database, is you have a big ball of JSON in the sky, in the cloud, and all of your apps and devices can write to any location, and they can also listen to a location, and whenever one of those locations changes or has a new child added or something gets moved, the Firebase client will automatically call a callback function that you specify in your code, and what this does is it makes, like, all the multithreading and synchronization stuff, it kind of handles that for you, so it makes building Internet of Things devices, like, so much easier than, like, you know, having pulling loops and stuff like that.
MARK: So it sounds like Firebase is probably one of your very much recommended starting places of, "All right, I've got all these devices out there, and I need to synchronize data between them either coming in or going out. I can just plug it all into Firebase, and then hopefully magic happens and everything's okay."
JEN: Yeah, Firebase excels at prototyping for, like, web and mobile apps, and for the same--the same strengths, the same reasons, it also excels at prototyping IOT devices, so it's wonderfully awesome, especially for building one of something, which is usually the first step on an IOT project.
FRANCESC: Yeah, so to add a little bit on Firebase, I--we used it for Cloud Spin, and one of the good things about it is that you build whatever you want to build on Firebase, and then at some point you're like, "Oh, wait, we need a visualizer to understand what the system is doing," and that's super simple to do because all the data is already on the cloud, so you don't need to export anything extra. You can just build a new really tiny webpage that shows whatever you're interested on, so yeah, if people have not tried on, I think it's a great place to start, yeah.
JEN: Yeah, and up to 100 concurrent users is part of our--like, our developer plan, which is free, free forever, which is awesome.
FRANCESC: Nice.
MARK: That's very cool, very, very cool. So I have to ask, what have been, like, your favorite IOT projects, maybe something weird and wacky, something somebody's done that seems a bit interesting and cool?
JEN: So a lot of people are interested in IOT for, like, you know, saving money, establishing new businesses, and that kind of stuff, but my favorite part is kind of go back to the crazy, like, LED-powered RC scene that's really, really popular, especially here around San Francisco, and because of the declining cost of light-emitting diodes, blinky lights, and sensors and all that stuff, people are building these really cool giant installation or even small desktop sets of, like, interactive artwork that are Internet-connected and allow you to interact with the artwork and multiple people around you in really cool ways.
MARK: Nice, so, like, setting up sensors where, like, people walk through or it's touch or play, and then it sort of responds in some interesting and wonderful ways?
JEN: Yeah, and the popular thing I'm starting to see a lot is all of us are walking around with little Internet computers, our smartphones, and that's a really, really great way to have people interact with some other already internet-connected device.
MARK: Very cool. Very, very cool. So you also mentioned--I just want to make sure it's very clear for our listeners as well. You've mentioned a whole bunch of different hardware, so, like, Arduino and a couple of other things. Is that your favorite hardware to use, or do you have other favorite things that you like to use?
JEN: So usually what I recommend to people is to use what you already have. Anything that's--so if you have anything that's like a Raspberry Pi, which is, like, a board that runs--you know, is a full computer that runs an operating system, you can probably run Node and Johnny Five on it, which is awesome. Like, you can go to the web page, and there's a huge list of boards, so if you have, like, an Edison or one of the other boards, like, it'll still work on there, so I usually encourage people to use what you already have, but the reason, like, given, like, no other assumptions, I steer people towards the Pi and the Uno as a pair is because they are ubiquitous. They're everywhere. People have lots of them. The documentation, the community around both of them is very, very rich and active, and in case you do accidentally burn one of them up, they're pretty low-cost.
MARK: That sounds good. Actually, talk a little bit about low-cost. Is there--has there been a certain shift over the certain number of years and--like, and that's what's made this so popular, because of the shift of cost coming down? Has that been, like--I'm guessing a fairly large factor in sort of the IOT space.
JEN: Yeah, like, if you look back even a few years ago, it was much more expensive to get a device onto the Internet, mostly because of, like, the complexity in the software. For example, when you're writing code on an Arduino, if you're just coding on the Arduino, you don't have an operating system usually, so you lack things like virtual memory and, importantly, an internet stack and an interrupt controller, and then the rise of these tiny, tiny, tiny full-fledged computers suddenly made it much easier to get things connected to the Internet, and around the same time the hardware that allows you to connect to WiFi, like our existing Internet infrastructure, also came down at the same time, so it was kind of a convergence of those things over the last few years that have suddenly made this, like, so much easier and so much more fun to hack on.
FRANCESC: Could you give a little bit of what you think might happen in the future? Like, could you--do you think that this gonna keep on going and we're gonna have more and more little computers everywhere?
MARK: Your vision?
FRANCESC: What is your vision of the future of the Internet of Things?
JEN: What is my vision? That's a big question. 
FRANCESC: It is.
MARK: And if you get it wrong, then we're gonna come after you. No, no, no.
JEN: Oh, no.
FRANCESC: Yeah, it is recorded forever, so.
JEN: That's so scary. So the--my vision is, is we're just gonna get better and better at building these electronics. We're also gonna get better and better at coming up with the bag of tricks for making these things work. So on the electronics side I expect things to get cheaper. Like, one board that came out recently, came almost out of nowhere, it's called the ESP8266, which is this tiny, little WiFi chip, but it's, like, $2, and I'm starting to tinker around a lot with it now, and it's, like, the cheapest way I've seen to get devices onto WiFi, and I know a lot of people are researching, like, these, like, Bluetooth mesh networks and stuff, but, like, those protocols aren't ready yet, so the--like, everything I work on now, I usually use WiFi 'cause it's already there, and seeing suddenly, like, a come--a huge drop in cost implies--shows me that, like, that's not gonna be a big blocker, and we're gonna have lots of low-cost electronics, and then on the flip side of that is kind of our software and design patterns is we're still leaning a lot on the bag of tricks that we developed for solving web problems, you know, loading web pages and all that kind of stuff, but as the way we, you know, build web apps changes, and mobile apps, we're starting to come up with new techniques for the way we use caches and the way we handle bursts of messages and that kind of stuff, which is going to make it easier and easier to use existing services, APIs, and open source projects to solve your IOT problems.
MARK: Very, very cool.
FRANCESC: Very nice.
MARK: All right, well, thank you very much for joining us, Jen. Is there anything at all that we haven't talked about that you want to talk about? Have we missed anything?
JEN: Oh, I guess the one thing that I would definitely put out there is sometimes people kind of go down a rabbit hole on how, like, they would build a million of something or a thousand of something before they even get their first--you know, their first jumper cable into their bread board. I would encourage people to not focus too much on the manufacturing side, at least not at the very beginning. Spend time--like, if you have an idea and you want to build something, build one of something. Don't worry about the manufacturing later, and then use that one prototype you've built to validate your idea and get user feedback much the same way we'd build, you know, mockups and scaffolding in web applications.
MARK: Nice.
FRANCESC: Well, thank you so much for all the insight. That was a very interesting conversation.
MARK: Definitely.
JEN: Yup, you're very welcome. It was a lot of fun. Thanks for having me on.
MARK: Cheers. Well, thanks so much to Jen for joining us today, fascinating conversation. I love that hardware stuff, mainly because I just don't understand a lot of it, so any peek behind the magic curtain that I can find, it makes me pretty happy.
FRANCESC: Yeah. I know that I've been playing a little bit with an Arduino, and it's awesome. You can really do so many cool things in a quite easy way, so yeah, very excited about seeing more of these things related to the cloud.
MARK: Definitely, definitely. So moving on to our question of the week, this is an interesting one too, a little bit less technical but I think just as important. It's a question around--so is there any Google Cloud Platform certification or training? Like, if you need to be able to say, "Yes, I definitely know this thing," how do you get that piece of paper that says that you definitely do?
FRANCESC: So the answer is, of course, yes. There's actually a web page with all the trainings that we support, and that link is actually cloud.google.com/training, quite obviously, and you will find there a bunch of different classes. Some of the classes like CP100, CP200, CP300, those are, like, the main classes where you're gonna learn about general topics of a cloud starting from what is a cloud and why get it--how they store my data, how to connect between different instances, that kind of stuff to things that are way more involved, like you will be able to see something, like, very specific about, "Well, how do I package my containers, my Docker containers to be deployed into Container Engine?" and stuff like that. There is--so you will find a bunch of different trainings and all certifications.
MARK: I'm actually looking through it. I didn't honestly realize that we had this many training programs in here from, like--like, Docker packaging and through to, like, Cloud Storage through to App Engine.
FRANCESC: How to use SQL.
MARK: Yeah.
FRANCESC: You can find basically everything you might be interested in.
MARK: No, this is actually really, really interesting. Okay, and a variety of locations too. Some are online. Some are actually physically in particular places. That's actually very cool. I did not know that.
FRANCESC: Yeah, it is--it's a very interesting resource 'cause you will have access to a lot of different material, and then at the end you're pretty much forcing yourself to study to go through those certifications, and once you get them, they're kind of showing that yeah, like, you know what you're doing.
MARK: Yup. No, that's really interesting. I was reading through the FAQ, and it is worth noting that you don’t necessarily have to take the training course to pass the exams. If you feel like you have enough knowledge, like, you've worked with it enough, we're never gonna stop you. We recommend it, of course, but nothing to necessarily stop you, so if you've been working with a particular product for a while and you want to have that certification, definitely something you could go for.
FRANCESC: Yeah, I think it's definitely worth it, and yeah, once you have the certification, right now it doesn't expire, basically because it's quite new, but it's these kind of things that basically, you want to do regularly 'cause our products keep evolving, so saying that you are an expert in a technology but you got that certification two years ago, well, I mean, it's still valid, of course, but it's always good to try to refresh those certifications if that's something that can help your career, really.
MARK: Yeah, that sounds pretty reasonable.
FRANCESC: On top of that, one resource that I use very often is actually not training but the solutions page.
MARK: Oh, yeah.
FRANCESC: Yeah, so cloud.google.com/solutions, and here--there our solutions engineers share use cases and white papers about specifically how to do some technical thing.
MARK: Oh, yeah?
FRANCESC: There's some--some of the solutions are, like, grouped by topic, so you can have--like, Internet of Things, for instance, is one of them, but you're also gonna have gaming, et cetera, but at the same time you're gonna see also some stuff that is really, really specific like a white paper on how to deploy correctly MongoDB on Google Cloud Platform, stuff like that.
MARK: Nice.
FRANCESC: There's a lot of different parameters, so our solutions engineers, what they do is they will write--they will basically explain what is a good value for every single parameter, what is the design decision behind those, and so on, so it's really, really interesting to go through some of those white papers.
MARK: So if you're looking to do, like, some sort of--I don't know, maybe a gaming analytics platform or something like that and you think to yourself, "How would I go about doing that?" going through the solutions, like, that are already listed in there can probably give you a leg up to be like, "Okay, this is our recommended way of doing it."
FRANCESC: Yeah, definitely. I think it's really good where solutions engineers--I get to work with some of them from time to time. They're amazing. They really, really know what they're doing, and they're really good writers, so definitely go have a look.
MARK: Wonderful. All right, Francesc, should we let people know where we're gonna be for the next few weeks?
FRANCESC: Well, by the time this episode will be out, I will already be in Paris for the DevFest.
MARK: Nice.
FRANCESC: So that's on February--February 5th we have DevFest Paris. It's gonna be lots of fun. I'm gonna be talking about gRPC and Kubernetes and everything written in Go, and I might try to do the talk in French.
MARK: Ooh, good luck.
FRANCESC: It's always fun. People make fun of my accent. Apparently I sound Canadian somehow. I don't know. What about you?
MARK: Still the same stuff, so I'll be on vacation for a couple of weeks, but when I get back I have the Launch Hackathon, which is always fun. I always love doing hackathons, and then on top of that, yup, Game Developers Conference, still got lots of plans happening with that. We'll definitely have a booth space and events going on. We're doing a developer day where you can talk to developers, and do a bunch of talks, so that sort of stuff too, so if you're interested in gaming and Google Cloud Platform, definitely come and say hello. We'd love to speak to you. Then obviously we'll both be at GCP Next.
FRANCESC: Yup, we'll be there.
MARK: Doing all sorts of interesting stuff. There may be something podcasty. We'll see. We'll see what happens.
FRANCESC: We'll see. It's still kind of secret or even--no, we're not really sure what's gonna happen, but there's gonna be something there for sure.
MARK: Something, something will be happening.
FRANCESC: Yup.
MARK: We'll see, and then after that I will be at Strata running some stuff down there as well too.
FRANCESC: Great. So before we say goodbye, I think it's a great moment to refresh how to get in contact with us.
MARK: Yes, and we definitely want the interaction, and we definitely want the comments and support, so please definitely send things through.
FRANCESC: Okay, so I'm gonna go with every single media, and you say the--
MARK: Okay, let's do it. Let's do it.
FRANCESC: Okay, so first of all is our webpage.
MARK: Gcppodcast.com.
FRANCESC: And our email.
MARK: Hello@gcppodcast.com
FRANCESC: Then we have a Twitter handle.
MARK: Gcppodcast.
FRANCESC: We have a Reddit, a subreddit.
MARK: Subreddit, which is /r/gcppodcast.
FRANCESC: And finally we have Google+.
MARK: At google.com/+gcppodcast.
FRANCESC: Nice. So yeah, as always, if you have any questions, we are always looking for questions of the week.
MARK: Or cool things, if you've got something that's particularly exciting, love to see it.
FRANCESC: Cool things of the week. If you want to have some topic covered or you're doing something amazing with the Google Cloud Platform and you want to tell us about it--
MARK: Come on the podcast, definitely.
FRANCESC: Come on the podcast. We're always happy to interview new people.
MARK: Wonderful. Well, thank you so much for joining me yet again, Francesc.
FRANCESC: Thank you, Mark.
MARK: And see you next week.
FRANCESC: See you.
{{< /transcript >}}