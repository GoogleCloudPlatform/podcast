+++
audioDuration = "00:37:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.111.mp3"
audioSize = 53744574
categories = ["Cloud", "Open Source"]
date = "2018-01-24"
description = "The delightful Sam Ramji joins Mark and Melanie this week to talk about Google Cloud Platform, Open Source, Distributed Systems and Philosophy and how they are all interrelated."
draft = false
episodeNumber = 111
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Google Cloud Platform with Sam Ramji"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/dFKL9KXdswh"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7so6c5/episode_111_google_cloud_platform_with_sam_ramji/"
+++

The delightful [Sam Ramji](https://twitter.com/sramji) joins [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) this week
to talk about Google Cloud Platform, Open Source, Distributed Systems and Philosophy and how they are all interrelated.

<!--more-->

##### Sam Ramji

A 20+ year veteran of the Silicon Valley and Seattle technology scenes, [Sam Ramji](https://twitter.com/sramji) is 
VP Product Management for Google Cloud Platform (GCP). He was the founding CEO of [Cloud Foundry](https://www.cloudfoundry.org) Foundation, 
was Chief Strategy Officer for [Apigee](https://apigee.com) (APIC), designed and led [Microsoft's](https://www.microsoft.com) open source strategy, founded the 
[Outercurve Foundation](https://opensource.com/users/outercurve-foundation), and drove product strategy for 
[BEA WebLogic](https://docs.oracle.com/cd/E13222_01/wls/docs100/index.html) Integration. Previously he built distributed 
systems and client software at firms including [Broderbund](http://www.broderbund.com), [Fair Isaac](http://www.fico.com), 
and Ofoto. He is an advisor to multiple 
companies including [Accenture](https://www.accenture.com), [Insight Engines](https://insightengines.com), 
and the [Linux Foundation](http://www.linuxfoundation.org), and served on the [World Economic Forum’s](https://www.weforum.org) 
Industrial Internet Working Group. He received his B.S. in Cognitive Science from UCSD in 1994.

##### Cool things of the week

- An example escalation policy — CRE life lessons [blog](https://cloudplatform.googleblog.com/2018/01/an-example-escalation-policy-CRE-life-lessons.html)
- The new Google Arts & Culture, on exhibit now [blog](https://blog.google/topics/arts-culture/the-new-google-arts-culture-on-exhibit/)
- Five Days of Kubernetes 1.9 [blog](http://blog.kubernetes.io/2018/01/five-days-of-kubernetes-19.html)
- Kubernetes Comic [site](https://cloud.google.com/kubernetes-engine/kubernetes-comic/) 

##### Interview

- The Case for Learned Index Structures [paper](https://arxiv.org/abs/1712.01208)
- CAP Theorem [wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)
- Databricks [site](https://databricks.com)
- Spinnaker [site](https://www.spinnaker.io)
- Tensor Processing Units [site](https://cloud.google.com/tpu/)
- 38 Special - Hold On Loosely [youtube](https://www.youtube.com/watch?v=vJtf7R_oVaw)

##### Question of the week

I would like to run a Google Cloud Function every day/week/hour etc - but there is no cron ability in Cloud Functions (yet?). How can I do this now?

- Functions Cron [github](https://github.com/firebase/functions-cron)


##### Where can you find us next?

Melanie is speaking at [AI Congress](https://theaicongress.com/) in London Jan 30th and she will be at [FOSDEM](https://fosdem.org/2018/) in Brussels in Feb.

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 111 of the weekly \"Google Cloud Platform Podcast.\" I'm Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing today, Melanie?" >}}

[LAUGHTER] 

MELANIE: I'm good, Mark. How are you? I'm having a good morning. 

MARK: Yeah, really good morning. 

MELANIE: Good morning. Good afternoon. 

MARK: Excellent. So this week, we have a very special person, Sam Ramji, a VP of product, joining us for an interview, basically to talk about all things cloud, so pretty excited about that. 

MELANIE: Yes. He gives us a lot of oversight in terms of just thinking about leadership, and it's kind of zen, actually. But, yes, before we get into that, as always, we will talk about the cool things of the week, and we will also end with the question of the week. 

And our question of the week is, actually, if you wanted to run, or if you're running, a Google Cloud function, and you wanted to run it daily or weekly or hourly, how would you do this if you don't have Cron ability in the Cloud Functions yet? So we'll talk about that. But let's go ahead and talk about our cool things of the week. 

MARK: Yeah, so first cool thing of the week comes from some of our favorite friends over at CRE, Customer Reliability Engineering. This week it's Will Tipton, Site Reliability Engineer under CRE. They have a really good blog post-- all the CRE ones are amazing. You should definitely read them. But they're talking about an example escalation policy. 

So basically, how to set up escalation policies for your SRE teams around what happens when the SRE can't bring the service back into SLO-- either they need help, stuff like that. How to set up what they call thresholds and how to define them. And basically set up these sort of procedures and situations so that people know exactly what they should be doing, when and if they need more help above and beyond what they can do themselves. It's a cool read. 

MELANIE: Yeah, it's good to understand in terms of support, especially. 

So another thing that we wanted to mention for the week is that there's a cool fine art doppelganger feature that's been added to the Google Arts & Culture app, and that's out there on iOS and Android. And so it's kind of a fun way to search through existing paintings that exist and see what's your doppelganger painting. 

And the Google Arts & Culture app has actually been around since 2016. It's very useful in terms of exploring different artwork that's out there and exploring what's in museums. So check it out. 

MARK: I'm installing it right now. 

MELANIE: I know, it's kind of fun-- some of the examples that are already out there, and showing what people look like. 

MARK: Awesome. Well, it wouldn't be a week of the Google Cloud Platform Podcast if I didn't talk about Kubernetes. Many of you probably noticed late last year 1.9 was announced as available. It hasn't hit GKE yet, but the blog series that they do on a regular basis whenever they do a new release, called the "Five Days of Kubernetes," has started for 1.9. They've done the first-- I want to say four-- 1, 2, 3, 4. 

They talk about Windows support, which has gone beta in Kubernetes, which is really cool. Storage, the CSI framework, which is in alpha, a bunch of stuff around dynamic admission controls, client, Go. So basically the stuff if you want to do custom controllers and your own sort of custom resource definitions, basically extend Kubernetes. 

So we'll probably find at some point some people to come in and talk to us about this kind of stuff. If anyone on the Kubernetes team is listening and want to come join us, we would love to have you. But if not, definitely go check out the "Five Days of Kubernetes." They're always a good read. 

MELANIE: And we've also got listed in there the Kubernetes comic that-- 

MARK: Oh, my god. It's so good. 

MELANIE: --that is out there. That's "Smooth Sailing with Kubernetes." It's a fun little comic that helps give you an understanding of this space. 

MARK: Yeah, no, I love this. If you've ever thought to yourself, I just don't quite get where Kubernetes, or containers as a whole, how that works, or why people use them, or what's the impetus behind that kind of stuff, it's a really great, lighthearted way of looking at the ecosystem, and looking at why these things exist and why people use them and how they use them. And it's just adorable. 

MELANIE: It is adorable, and it's fun to see all the different metaphors that they're using throughout. 

All right, well, I think it's time to go talk to Sam. 

MARK: Let's go do that. 

So today I am both excited and delighted to have Sam Ramji here with us, VP of product management at Google Cloud Platform. So very happy to have you here. How are you doing today, Sam? 

SAM: I'm doing fantastic. Thank you, Mark, and thank you, Melanie. 

MARK: Yeah. Thank you for the wine that you bought. That was very lovely. 

SAM: It seemed like only good manners. 

MARK: Yeah. We totally want to talk to you today about sort of your thoughts about tech and cloud and open source. But for those people who don't know who you are-- I'm sure there aren't very many of those-- do want to tell us a little bit about you and your history here at Google Cloud, and what do you do? 

SAM: Sure. So I've been here for a total of 13 and 1/2 months. True fact, I just met somebody today who's been here 13 and 1/2 years-- exactly 12 times longer than me. 

MELANIE: Wow. 

SAM: And so I have much to learn. Although, I've learned as much as I could in the intervening time. I've been in the industry about 23 years. As my family will tell you, I'm not good at really anything but software. 

I started programming when I was nine in 1980, when they put in the Commodore PET 2001Ns into the Oakland Unified Public School District. Never thought of programming as a career, although I kind of accidentally was the teacher's assistant for AP Computer Science. I'm old enough that that was Pascal at the time. 

MELANIE: Oh, I did-- 

MARK: Nice. 

MELANIE: I did Pascal. I know about Pascal. 

MARK: I did not do Pascal. 

SAM: Yeah. So that's kind of me. I'm fascinated by distributed systems, distributed cognition. I have a CS degree, but it's not computer science-- it's cognitive science from UC San Diego, also the home of Pascal-- strange coincidence. But it's artificial intelligence, neuroscience, and then also things like cognitive psychology, linguistics. 

I'm just fascinated by how people think, how we think at scale, how we think with each other-- both the success cases and the failure cases, and that I think is so much of what lights me up about cloud computing, about large scale, digital enablement. It's about being better and more interesting humans together, and starting to ask the questions, well, what's possible now that used to be impossible, and how much farther can we go? 

MELANIE: Well, and if you've got this background with cognitive science, what do you think about what's going on in the AI revolution that we're having right now? 

SAM: Oh, it's fascinating. I mean I don't know what the reverse of schadenfreude is, but I graduated in 1994 into the second AI winter, when the promise of AI had been way over promised, and then it crashed, and nobody wanted to hire us. It was like, kind of go to the back of the hiring line. 

Now we're in kind of the third AI summer. There's probably a third AI winter coming. 

MELANIE: I wouldn't be surprised if that's happening. But I also think that it won't completely disappear, because there's so much that's been improved now. But yes, it's nice to see where it's on an upswing. Do you wish you could go back and do more with it again? 

SAM: You know, it's a ridiculous privilege to be at Google, because I'm surrounded by experts in all of these fields. So do it again-- yeah, I can do that on Tuesday. 

MELANIE: True. 

SAM: Go talk to somebody from Jeff Dean's team, use some of our internal tools, like our new TensorFlow automation system, and do the Codelab. Last week I took a code-cation. I took three work days to learn Go and to do Kubernetes the hard way on GCE. 

MELANIE: Wow. 

MARK: Nice. 

SAM: So this is a place where you just kind of get to keep learning. 

The one thing I'll say is really different about AI this time is that the scope and scale of how it gets executed, how it's delivered, and how it changes our experience as humans means that we really have to be awesome at ethics. 

And that's something that-- typically, deep science and ethics have always struggled to get along. Social sciences, humanities, and then hard sciences, so-called-- it would be really helpful for us to all start to find ways to be more multi-disciplinary in our team structure, more diverse in our thinking, so that we can start to anticipate what's the second, third, fourth order effects of these that aren't obvious to the person who created the tech. 

So that is a major change from '94 when I graduated. AI just didn't have this kind of power. 

MELANIE: Agreed. It's definitely a huge shift. Well, so how did you end up at Google? 

SAM: That is a great question. I always admired Google, and I thought these consumer technologies that the company built were amazing. Obviously, from search to-- I moved my entire prior startup on to Google Docs-- actually that was two startups ago because it was just so efficient, again, for collaborative thinking. How do you look at what people are thinking about in real time? The closest thing you can get is everybody's typing the same document, and it performs so well. 

But I'm really a plumber. I like distributed systems. And I've been in distributed systems and enterprise software since-- I don't know, 1998? So Google never had a place for me. And so at that sort of basic structural mismatch, I never thought, oh, Google's a company I would want to work for. 

But then a year and a half ago, when I was the CEO of Cloud Foundry, which is the leading open source platform as a service, I started hearing who was at Google now, and what Google cared about, and what they were doing. And I thought, this is becoming a place for plumbers. 

We can really get really excited about middleware, and we can start taking these developer platforms and infrastructures that Google has built for itself that have scaled the business, made it the second most valuable company in the world, and start to offer that out to every company in the world. 

And for me, that's-- speaking about ethics, that's kind of where my ethics have always leaned. How do we build tools that enable other people to take care of what they care about? 

MARK: So I guess you're the VP of product management. What does a day in the life of a VP of product management look like now that you're at Google? 

SAM: Well, it's pretty great. First of all, I think one of the great things about Google is it's a bit of a Montessori school, so there's an inversion of control. The most important person in a Montessori school is the student, not the teacher. And I think at Google, the most important people are the people who are actually doing the work, not the managers. And that's consistent from what I've heard from Google culture over the last 19 years. 

So it doesn't feel very much like, oh, you know, I'm a senior executive. And thank goodness, because I was born in Brooklyn and raised in Oakland, so I'm pretty anti-hierarchical and anti-authoritarian. 

So a day in the life-- email, review some stuff, get your mind blown, because, you know, Jeff Dean just did a talk at NIPS on how you can create next generation, you know, high performance computer indexes via machine learning and not classical data structures. Deal with prioritization, what are we going to ship? What are we not going to ship? Where do we apply the head count? 

And then what's open source strategy mean? Boy, there's a lot of opinions on that. But how do we start to apply that since open source is so meaningful to us and at such scale? But should we would do this or that? And is that 10 engineers or 20? And what's the opportunity cost there? 

And then, hey, how do we go and talk about this? Right, so we got a conference schedule coming up for this year. What are we going to be ready to talk about, and how can we use other people's heartbeats well to stay both on message and empirical? What have we learned and therefore do we want to offer you from our learning? Not theoretical, and certainly keeping it honest and humble. 

So it's a pretty great job. I think any job has got its share of horses and mucking out the stable. Right, you want to-- 

MELANIE: That's true. 

SAM: --find the right balance. 

MELANIE: That's very true. 

SAM: But we muck out stables because we love horses. So I think this is the place where the things that I really care about and the people that I want to work with-- you know, super nerdy people who are like, hey, it makes you more credible as an executive that you're also a dungeon master. I'm like-- 

[LAUGHTER] 

--not that many companies are like, yeah, of course you play D&D. We all do. 

MELANIE: It's very acceptable here. Well, so in terms of-- it sounds very clear to me why-- you know, you've got your background-- how you ended up definitely involved in open source. What do you miss about Cloud Foundry? 

SAM: I miss the interaction with the board. So it's interesting to be a CEO in a company where you're constructing, working with, senior vice presidents, CEOs of other companies, who really only have an hour a month to hang out with you. And they know that we're all going in the same way, and they expect you to make all the decisions. Right, you've got the entire scope. If it fails, it's your fault. If you succeed, it's the team. 

But I never had a performance review, because it was either the company was doing well, or it wasn't, and we needed to adjust those things. So there was no layer of ego. Everything was just a thing. 

And so getting into a mode where we start managing and judging people and justifying our existence as opposed to going, gosh, I'm putting, you know, every waking heartbeat into making this great, and we're all pretty good at this stuff, so let's get some feedback on how to tune, but do we need to do calibrations and all this stuff? 

So it's interesting to get back into a large company. Because I was at Microsoft in the 2000s. At that point, many tens of thousands of people-- when I left, I think it was 90,000 employees-- so you have to have these systems in place. But that shift from constantly being in the doing to also having to come back and assess and sort of justify existence-- it's an emotional adjustment. 

MARK: So I'm actually kind of curious, now that you've come to Google-- and I love that metaphor of Montessori school. I think that's spot on for how Google is. 

SAM: That was given to me by a friend, so I credit him. 

MARK: That is spot on. But I'm actually kind of curious, what's been the most surprising thing for you, coming to work with Google or Google Cloud specifically? 

SAM: God, how nice people are. I anticipated that a little bit on the way in, but it would be-- I think it also surprised me based on my prior sense of Google, because, you know, certainly, for example before this podcast, it was very hard to understand what Google people were like, because the company's ethos was like you'll encounter us through our web interfaces. And you can make up a lot of stories, like, you know, remote, hard to deal with, superior, maybe. 

And then you actually get into these things. Like one of the things I like to do as a product manager is I get to do product management for Eric Brewer, the person who authored CAP theorem. And students in his classes invented things like Databricks as a side project. Amazingly cool, super humble, like, you're just encountering everybody sort of at the first order of experience. 

You're not encountering what they think about themselves, you're encountering what everybody thinks about the problems, and that is just-- it's a wonderful surprise. And it catches me off guard still every single day. Because so much of the industry, in my experience, hasn't been like that. Don't you know who I am? You know, ladies and gentlemen, this person doesn't know who he is. You know, it's really nice to find people who are just into the work, no matter what they've done, and just moving forward. So really nice, super smart people, with a lot of emotional intelligence, and that's a pleasure. 

MELANIE: Well, clearly, you've had very little experience. So I'm curious-- where do you want to go with your career? What gets you excited to learn about? 

SAM: Oh, two great questions. There's a great quote from the founder of Aikido, which is a relatively young martial art. His name is Morihei Ueshiba. People call him Osensei. And it's "A true victory is a victory over the self." So in terms of learning, one of the things that I want to continue to do is learn how can I be better. Right, there's some challenges around how do you do scalable communication? 

MELANIE: Yeah. 

SAM: I speak from the heart, got relatively good values and ethics. I can still make mistakes in spoken language when I'm talking with 500 people, and somebody's going to get offended. And that's harm, and I feel bad about that. But I get the feedback. It's like, OK, I can do better at that. 

So a lot of the learning is just how to take care of large groups of people in communication and understand how can I provide a little bit of input and guidance that will open up something useful to them that will generally get us moving in a common direction. Intense and difficult skill, and one that you can only learn when you're in a position where that's your job. You kind of can't do this in school. 

MELANIE: You're at the heart of it, always think of distributed computing in some way, shape, or form. 

SAM: But that's the interesting thing. It was than rather than distributed computation, distributed cognition is really interesting, because we're the people doing the cognitive work. We're not just doing computation. There's emotional labor. There's a bunch of other things going on. So how do we do that? So that's the learning front. 

I think in terms of what I want to do-- for the next decade, I would like to help Google take what it's reinvented in what we now call DevOps and CICD and sort of next generation static analysis, monitoring operations, site reliability, engineering-- this whole sort of soup of words. What it is is a digital operating model that has allowed Google to create a great advertising business, because it can iterate everything about it many times a day. I think we ship to production about 9,000 times a day. 

But again, not to get distracted by-- what does it take to ship 9,000 times a day, but why would you do it? Because you can be in this very tight feedback loop, where you're constantly learning from your users. And that's true regardless of your industry. We're in search and ads. Spotify's in music. Right, they are iterating their environment. I heard they ship to production like 3,000 times a day. 

MELANIE: Wow. 

SAM: So what is that digital operating model, and how do we make that real for the entire world, no matter how small of a company, how new you are to software, how large of a company, how sophisticated you are? How do we take what we've learned and offer that as a platform for the planet to compute how they might care to? 

MARK: Are there particular technical products that we have, or potentially may have in the future, that get you really excited? Anything you're particularly passionate about right now? 

SAM: Oh, boy. 

MARK: I mean, just pick one. Just one. 

SAM: I was going to say, like, clearly I'm not a very passionate person. I'm really lucky I get to care about all the things I'm doing. 

There's a lot of really interesting things happening in terms of how do we take code, which is a developer's set of intents, and turn it into running production systems that developers and operators can both collaborate on. There's a whole chain of technologies there, both first-party technologies and third-party technologies. 

Third-party like Spinnaker that we've gotten into. It's an open source project that was started by Netflix, and we've gotten really involved in it. It's a really nice way to do multicloud computing. And all of these things really need to come back to giving developers control of exactly how they want their code turned into an artifact like a container, how they want it structured into services and pods, and where they might want to run it. 

So I think part of what brought me to Google was this core belief in open hybrid cloud. When I left Cloud Foundry, I had spent two years committing all of my heartbeats to putting technology back under the control of the companies that use it rather than the companies that sell it. And part of what brought me here was Brian Stevens said, you know, our mission is to be the open cloud. I said, you must be kidding me. That doesn't make any sense. Every hyperscale cloud provider is clearly an ambitious monopolist. Not at all, right? 

So when we look at this, we say, your computation should be wherever it is. That's a really hard problem to solve. How do we give you a control plane that lets you build your code however you want, deploy it however you want-- including to multiple environments, on premises, multiple clouds-- and then keep track of how it's all working? 

So that's really-- that's soaking up my attention. Because I think so many things are moving fast but better understood, like in infrastructure as a service, which we do a great job of. We're continuing to add things like Tensor processing units, 180 teraflops of computes on a single board, just kind of mind blowing. 

MELANIE: Yeah, that's fantastic. 

SAM: And that's just the current generation. 

MELANIE: Yeah. 

SAM: Our platform as a service work we're doing around App Engine, Serverless, Google Kubernetes Engine, our cloud services platform. Those things are all fascinating, better understood, and moving quickly. 

This slightly-- maybe we'll use the word inchoate-- it's not completely formed-- world of, I'm a developer, and I'm writing code. How do we make sure that correct code that's scalable and optimized gets to production and can be iterated fast by a distributed, diverse, inclusive team of people to make sure that the whole thing works? That's fascinating to me. 

MELANIE: Nice. Do you remember when you were coding what you enjoyed the most about writing code? 

SAM: Focus. 

MARK: Just one thing. 

SAM: Just such a visceral pleasure. Just being able to sit down, and as developers-- I was doing most of my code in the '90s on C++. And you're working your brain out. You're working 12, 14 hours a day, and there's actually a deep pleasure in being able to focus your brain for that much time. Put on your headphones, put the football on your computer monitor that says don't interrupt me because it's neon orange, and everybody's is going to leave you alone. Whatever those things are. 

And there's a real satisfaction in getting your brain so deep in something and at the end compiles, runs. It works. It's bug free. You've kind of done the right design work, and everything's come through. Or you end up with a gnarly bug, and you're like, oh, my god, what the hell is happening with memory? These really interesting intellectual problems. You're kind of constantly doing science on your own work. And you're constantly learning. 

So there's a lot of things about it, but the one thing-- just focus. If you're a happy programmer, it's because you're focusing. And if you're unhappy, it's because product managers are bothering you all the time. 

MELANIE: That's true. 

MARK: You seem quite passionate about open source, which-- common passion I think of both of ours, and probably very many people here inside Google especially. 

SAM: It does seem to be like a particularly Googley attribute. 

MARK: Yeah. 

SAM: Like, there's a thing that, just whatever you happen to be doing, the ethics seem to be around openness and end user control. And so you look at YouTube-- broadcast yourself. Open source is kind of like, for programmers, broadcast yourself and borrow. 

MARK: Yeah. But I think it's interesting to look at the landscape of open source. I almost think-- you want to go back to the '90s with shareware. That's even pre-open source. 

But how that landscape has changed over even the last 10 years. I'm sure you have opinions about things like that, and about how open source has really almost become a corporate thing in many ways. 

SAM: It's interesting. There was a meet-up in, I want to say 2006, 2007, called the Open Source Think Tank. And there were several dozen open source technologists, business leaders, and one of the sessions was a challenge, a working session for the whole group to say, what do you want the brand of open source to be? 

And I ended up at the table where one of these folks-- who I won't name-- was a respected open source CEO at the time. He said, open source should stand for revolutionary. And I said, I respectfully completely disagree. Every revolution, if it's successful, becomes the establishment. 

MARK: Hmm. 

SAM: So that's where we're at. Right? You play your kids Bob Dylan, and they're not like, oh, man, that's so hot and revolutionary. They're like who's that old guy? I heard that music growing up. 

MELANIE: That's true. 

SAM: So open source I think is-- it's at that point on the track. It is a basic expectation, the core licensing model for developers. 

The fascinating thing I think that it represents is actually the shift from artisanal or craft level to more industrial scale use of software. If you look at what's happened in every industry-- the very first machines built in the Industrial Revolution weren't using standard fasteners, standard tools. 

You look at the construction industry. People were using bespoke pieces of wood. When you get to 2 by 4's, and you get to an 1/8 inch precision on the nails and fasteners you're using, you start to standardize the profession, and it actually expands dramatically. 

So I'd see open source as being the standardization, even though the standards kind of keep moving. You're not trying to guess what some weird proprietary thing is. You're like, well, of course we're going to use Node.js. Right? There's a bunch of standards you can assume that you're going to use in any case, and that enables us to do more professionalization, more industrialization. 

And I think we'll probably see over the next couple of decades 10 times more developers than we have today. Just as you will see any industry expand based on better common standards, better understanding of what value looks like, and a more predictable path from I have an idea to have a result. 

MELANIE: I'm curious, too, if you think where things are going-- education's been evolving to a degree. Do you think that that's going to continue to keep shifting and changing, especially in the tech side of things, especially from a computer science, developer perspective? 

SAM: It feels like it has to. I think so much of our education system now still-- and I'm not speaking out of personal knowledge or experience, so maybe I'm being an inner-professor. My wife was a sixth grade teacher for about six years, so I've learned a bit from her. 

You know, much of our current education system was built on the US Army's insights in the early 1900s about how to sort of induct and indoctrinate and assess tens or hundreds of thousands of people at a time and then to get them to produce predictable results by standardizing the process. That seems pretty different from the world we're in today. 

So, you know, is education in that style really helping us deal with a world that is changing faster? I don't think it's just because we're getting older that we feel like it's going faster. Measurably it's getting faster. And organizations are having a harder time adapting to it. 

So a more adaptive education system that teaches us how to learn. Alvin Toffler wrote a book in the 1980s called "Future Shock," and there's an outstanding quote that crystallized my thinking. He says, "The illiterate of the future will not be those who cannot read and write. Illiterate of the future will be those who can not learn and unlearn." 

So how are we getting our society ready for the 21st century by teaching people that knowledge is actually ephemeral-- you can kind of page in and page it out? It's the structure of knowing what to know and how to know it that are the important skills. How are we enabling people to do that? 

Certainly, programmers know this. This is something that's been core to our industry. So what do we do to make ourselves better, and what can we learn from how we've learned to help other industries make that same leap? 

MARK: I'm curious though, as well, that sounds like future education-wise. But technologically-wise, do you think there are particular challenges on the horizon? You're talking more about standardization around technical models, but there could also potentially be diversification as new things come up. How do you think we're going to combat that sort of ebb and flow of that kind of technological change? 

SAM: Boy, can you combat it, or can you learn to surf? 

MARK: Yeah. 

SAM: Right? I think so much of this is-- and I'll make another person reference. I'm about a 17-year-old Buddhist practice. And as you go through mindfulness, and then you kind of get into-- what are they trying to teach you? 

One of the big things is don't cling. It's the clinging itself-- to believe that something's permanent and durable-- that is going to cause you suffering. So if we can kind of go, well, things are going to be in a constant state of change. Can we teach people how to navigate and say, actually, the next technology looks like this? 

What I'd like to see that we need to do to support human beings in this, whether we're a large software vendor like Google, or if we're a tiny company using that, how do you build an expectation that as companies we take care of people to learn new things, and to retrain, and that we don't expect that everybody's at a 100% efficiency all the time. 

That we say, OK, well, we'd like you to be at 50% efficiency for the next three or four months as you get ready for a leap forward by learning this new thing, because times have changed. This kind of changing the basic ethics of what business is to continue education in work will probably get us into a less fractious society, where we're not leaving people behind. 

So I tend to think of the larger scale societal issues as being more important, because the people who are already in tech are going to be fine. 

MELANIE: Is there anything in particular that you found that you've clinged to in the past that you wish you let go of sooner? 

SAM: Oh, that's a wonderful question. I think probably-- probably ego and identity. 

MELANIE: I was thinking tech, but this is definitely more profound. 

SAM: You know, just like it's easy to get mad about a thing because you're hanging on to the idea. And then if you take another look behind that, you're hanging onto the idea because it was yours, and it means something about you if it is right or if it's wrong. 

So I think, you know, I've been a strategy professional for about 15 years, and going from my early days where I was a really bad strategist-- right? I was really hanging on to the ideas. And these days where I'm a less bad strategist, the ideas are a little bit like a LEGO block on the table. It's not me. It's a LEGO block. Let's talk about the structure. Can it be made better? Let's attack the ideas to improve them and not cling to them. 

So that's kind of a big professional outcome from letting go of ego, because it allows us to collaborate better, because you're not offending me when you beat up the idea. 

MELANIE: Nice. 

SAM: You're actually helping me, and we're all benefiting from it. 

MARK: Strong opinions weakly held. 

SAM: Sure. And scientifically. Let's-- 

MARK: And actually, if you want to swing back, like loose coupling, right? 

SAM: For sure. Yeah. 

MARK: To technical perspective. 

SAM: Yeah. Or to quote a terrible '80s hit, "Hold on Loosely." 

[LAUGHTER] 

Now you're all thinking about Southern rock if you share any of my interests. 

MELANIE: If you know any of that. 

SAM: Yeah. 

MELANIE: That's nice. 

MARK: So all right. Let's swing it back to Google Cloud. We are the "Google Cloud Platform Podcast"-- 

MELANIE: We are. We are. 

MARK: --as much as this is wonderful. 

I'm going to throw the wonderful question-- if you had to look into a crystal ball-- for a lack of a metaphor that's better-- five years, 10 years in the future, where do you think this cloud stuff is going to go? What do you see in the future that way? 

SAM: I think it's going to become obvious that there is no manifest destiny for cloud computing just because it happens to be cloud. I think you'll find that computing is everywhere. 

One analogy that folks have drawn to computing is electricity, which is broken in a couple of ways, but the most important failure of the analogy is, oh, hey, we have electrical utilities, so you don't need anything else. And now that you have cloud computing, you don't need anything else. 

And to that I say, please go and count the number of generators in the world. Right? And talk to Honda about their generator business. It's darn good. 

It turns out there's lots of reasons for computing to be everywhere, and I don't just mean like on your watch. But actually just like an electrical generator-- a lot of reasons for the building to have a computer. There's locality of reference. There's data. There's, oh, my god, you're in a giant seismographic survey vessel in the middle of the ocean, and you're collecting, with really powerful sensors, petabytes a day. You going to throw that back to Norway for processing via satellite? Most likely not. 

So we'll find lots and lots of reasons why computing belongs everywhere, and there is no manifest destiny to pull it onto the cloud. I think that's critical. 

The other thing that's broken about the analogy-- and I admire Nick Carr, the end of IT and all of that stuff was well thought out-- I think mostly wrong, also, because business is distributed cognition. Computing enables cognition. It can't actually be commoditized in the way that electricity's been commoditized. You want to be able to continue to move that boundary. 

So I think as we continue to be better humans, as we continue to build better organizations that think better together, we will always find there's something novel that we continue to seek. 

So your point about can you really standardize, or do we have to kind of deal with a little bit of mess there, I think it's going to be messy, and we'll tend to avoid pure commoditization in a classic economic sense for at least a decade. 

Some of the things that will push it in that way will be people are going to have different approaches to machine learning and automation. Those opinions will be strongly held. How you should hold and process the data and how all that stuff works. Those will tend to push against commoditization. 

MELANIE: So a little off the cloud for a second-- I'm curious-- you were talking before about letting go of ego. I'm wondering what you would recommend, or what are some of the key traits you find make you successful leader, or make other successful leaders that you've worked with. 

SAM: Well, whether or not I'm a successful leader is always debatable. But I think-- 

MARK: We think you're all right. 

SAM: Thank you. 

[LAUGHTER] 

MELANIE: So-so. 

SAM: I do think mindfulness, meditation is important. If you can't let go of thinking, it's hard to know what you think, because you're a little bit more like a shaken can of soda than a still glass of water. That's super important, because it also lets you kind of be a little calm when things are triggering. 

One of the things that comes up in leadership is when a leader stands up, two things happen. One, everything that opposes that person's point of view come into existence that same moment. It's kind of a philosophical construct, but I've found it to be true. 

The other thing is you are the top level exception handler for the organization-- to use a C++ reference. So if your day's going well, you're probably getting a half a dozen escalations that weren't part of your originally scheduled routine. And some of those, they might be quite banal. Sometimes they might be quite fervent. So for you to be the one who's calm when everybody else is excited is really important. 

And it's easiest and less tiring if you're calm on the inside and on the outside. You have to be calm on the outside. That's table stakes. But being calm on the inside lets you kind of get through all of it. 

So I think just knowing how to relax, how to take a step back, and create a safe space for everybody else to use their natural human genius, which is their intelligence of how to work through problems-- that's the key thing. Sometimes things will descend into argument, but if you can just kind of keep opening up a safe space, people will work it out. Everybody will feel good at the end. They'll be thankful. And you'll be like, look, you did it yourself. 

MARK: Nice. 

MELANIE: Thank you. Well, so I think that probably gets us close to time in terms of being able to talk with you, but we really appreciate you coming on the podcast. Was there anything else that you wanted to share with us before we go? 

SAM: The best time in the history of the world to be a software developer is now. It's sort of becoming basic tools and techniques for doing almost every job over time. 

MELANIE: Yeah. 

SAM: I read an article that Rio Tinto, one of the biggest gold mining companies in the world, says that the future miners will be software developers. And they're not talking about bitcoin. They're talking about programming the robots that will go down underground and free humans from mine collapses and dull, dirty, and dangerous work. Pharmaceutical companies are saying the future pharmaceutical discovery is programming. 

So I think this is just kind of a renaissance for people who care about producing good outcomes and like to spend time and focus and flow building logical expressions of what ought to get done. So come on in, the water's great, and we'll continue to try to make it better for you. 

MELANIE: Great. Well, thank you again. 

MARK: Yeah. Sam, thank you for taking the time. We really appreciate you hanging out with us and having a good chat. 

SAM: It's a privilege. Thank you so much for having me. 

MELANIE: Thanks, Sam. That was really great to talk to you about your background with GCP as well as hear about just general thoughts around leadership and other areas of technology, and your experience with open source, too. That was kind of cool, actually, to hear about his background, especially with Cloud Foundry. 

So Mark, let's talk about the question of the week. And as I mentioned, the question of the week is I want to run a Google Cloud Function every so many day, week, whatever, but I can't do Cron. How do I do that in Cloud Functions? 

MARK: Sweet. So yeah, it's unfortunate we don't have Cron in Cloud Functions right now, but there's some nice work arounds. There's a few different ways I've seen people do this, but this is the one I like the best, and it comes from our friends over at Firebase, which is quite nice. 

And we'll link to the GitHub repository in here, but basically the short answer is this-- it really requires two things-- so App Engine, which has Cron capabilities, and PubsHub. 

There is a link we'll have in the show notes that points to GitHub repository, but basically we set up using this code three different PubsHub topics. So one for hourly, one for weekly, and one for daily. You could obviously change that to be your own things. And then we have Cron within App Engine that just hits those and pushes something into that topic on that regular basis. 

That means then that you can use those for any Cloud Function that you want to run on that period, which is quite cool. So it's nice and extensible. That's why I like this one the most. Because Cloud Functions have PubsHub hooks. So you can fire off a Cloud function whenever a PubsHub-- something it gets pushed into it and you want to react to it. And you can have multiple Cloud Functions reactoring-- reacting to the same message going through. 

[LAUGHTER] 

MELANIE: Reactoring-- it's thermonuclear. 

[LAUGHTER] 

MARK: Reactoring. Exactly. 

MELANIE: Anyway, you can have multiple ones reacting. 

MARK: You can have multiple functions reacting to a single PubsHub topic push, so you can have multiple subscribers. So that's a really nice extensible way to-- kind of working around the limitations we have right now. But yeah, we'll have a link in the show notes. And that's available in GitHub. 

MELANIE: Awesome. 

MARK: So I thought I'd throw a challenge at you this week. 

MELANIE: Oh, god. 

[LAUGHTER] 

MARK: So we haven't done this in a while, but it's always great when we get comments and suggestions and feedback from our audience. So I thought we would go through how people can get in contact with us from the podcast. So I thought, why don't you ask me the questions for how people can get in contact with us? 

MELANIE: So Mark, how do we get into contact with the podcast? 

MARK: OK, so if you want to reach out to us, obviously the website's at GCPPodcast.com. But if you want to send us an email, it's hello@GCPPodcast. You can add us on Twitter-- GCPPodcast. You'll see that each post has both Reddit and Google+ links. So if you want to find us on Google+, it's +GCPPodcast. On Reddit, it's /r/gcppodcast. You can reach out to us directly on the Hash Podcast channel on the Google Cloud Platform community Slack, which you can find at bit.ly/GCP-slack. 

MELANIE: Wow. Nice. 

MARK: There we go. 

MELANIE: You had that all in your memory. That's pretty great. 

MARK: Yeah, I've done that a few times. 

MELANIE: A little bit. All right, well, that's it I think for us for this week. Mark, you're going to be anywhere in the next-- 

MARK: No, I'm still just wrapping stuff up and getting stuff ready for Game Developers Conference in March. How about yourself? You're off to London soon, aren't you? 

MELANIE: Yes. I'm going to be speaking at the AI Congress and talking about AI and enterprise on January 30th. 

MARK: Awesome. 

MELANIE: Yeah. And just to note for the listeners that we are not going to be having two podcasts this week. 

[LAUGHTER] 

That was definitely a unique thing for last week, but we will definitely have another one the following week. So that's what we got. 

MARK: Wonderful. Awesome. Well, Melanie, thank you so much for joining me yet another week on the podcast. 

MELANIE: Thanks, Mark. 

MARK: Awesome. And thank you to all for listening. And we'll see you all next week. 
{{< /transcript >}}