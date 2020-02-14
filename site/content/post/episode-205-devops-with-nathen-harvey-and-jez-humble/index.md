+++
audioDuration = "00:34:34"
audioFile = "Google.Cloud.Platform.Podcast.Episode.205.mp3"
audioSize = 50492654
categories = ["DevOps"]
date = "2019-11-27"
description = "Happy Thanksgiving! This week, Aja and Brian are talking DevOps with Nathen Harvey and Jez Humble."
draft = false
episodeNumber = 205
hosts = ["Aja Hammerly", "Brian Dorsey"]
title = "DevOps with Nathen Harvey and Jez Humble"
image="/post/episode-205-devops-with-nathen-harvey-and-jez-humble/images/hero/hero-EP-205.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/e2kil0/episode_205_devops_with_nathen_harvey_and_jez/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Happy Thanksgiving! This week, [Aja](https://twitter.com/the_thagomizer) and [Brian](https://twitter.com/briandorsey) are talking DevOps with [Nathen Harvey](https://twitter.com/nathenharvey) and [Jez Humble](https://twitter.com/jezhumble). Our guests thoroughly explain what DevOps is and why it's important. DevOps purposely has no official definition but can be thought of as a community of practice that aims to make large-scale systems reliable and secure. It's also a way to get developers and operations to work together to focus on the needs of the customer.

Nathen later tells us all about DevOpsDays, a series of locally organized conferences occurring in cities around the world. The main goal is to bring a cross-functional group of people together to talk about how they can improve IT, DevOps, business strategy, and consider cultural changes the organization might benefit from. DevOpsDays supports this by only planning content for half the conference, then turning over the other half to attendees via Open Spaces. At this time, conference-goers are welcome to propose a topic and start a conversation.

Jez then describes the Accelerate State of DevOps Report, how it came to be, and why it's so useful. It includes items like building security into the software, testing continuously, ideal management practices, product development practices, and more. With the help of the DevOps Quick Check, you can discover the places your company could use some help and then refer back to the report for suggestions of improvements in those areas.

<!--more-->

##### Nathen Harvey

[Nathen Harvey](https://twitter.com/nathenharvey) helps the community understand and apply DevOps and SRE practices in the cloud.  He is part of the global organizing committee for the DevOpsDays conferences and was a technical reviewer for the [2019 Accelerate State of DevOps Report](https://cloud.google.com/devops/state-of-devops/).

##### Jez Humble

[Jez Humble](https://twitter.com/jezhumble) is co-author of several books on software including Shingo Publication Award winner "Accelerate" and Jolt Award winner "Continuous Delivery". He has spent his career tinkering with code, infrastructure, and product development in companies of varying sizes across three continents. He works for Google Cloud as a technology advocate and teaches at UC Berkeley.

##### Cool things of the week

* It's a wrap: Key announcements from Next ‘19 UK [blog](https://cloud.google.com/blog/topics/inside-google-cloud/what-happened-this-week-at-next-uk-2019)
* Explainable AI [site](https://cloud.google.com/explainable-ai/)
* Hand-drawn Graphviz diagrams [blog](https://www.johndcook.com/blog/2019/11/13/hand-drawn-graphviz-diagrams/)
     * Add one line to plot in XKCD comic sketchy style [site](https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.xkcd.html)

##### Interview

* DevOps insights from Google [site](https://cloud.google.com/devops)
* DevOps Quick Check [site](https://www.devops-research.com/quickcheck.html)
* DevOpsDays [site](https://devopsdays.org)
* Agile Alliance [site](https://www.agilealliance.org/)
* Velocity Conference [site](https://conferences.oreilly.com/velocity/vl-eu)
* DevOps Enterprise Summit [site](https://events.itrevolution.com)

##### Question of the week

Why do you need the [Cloud SQL Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy)?
     
##### Where can you find us next?

[DevOpsDays](https://devopsdays.org) has events coming up across the globe, including [Galway](https://devopsdays.org/events/2019-galway), [Warsaw](https://devopsdays.org/events/2019-warsaw/welcome/), [Berlin](https://devopsdays.org/events/2019-berlin/welcome/), and [Tel Aviv](https://devopsdays.org/events/2019-tel-aviv/welcome/). Nathen and Jez will be at [Delivery Conf](https://www.deliveryconf.com).

Aja will be home drinking tea!

Brian will also be home drinking tea!

{{< transcript "[MUSIC PLAYING] AJA: Hello, and welcome to episode number 205 of the weekly Google Cloud Platform podcast. I'm Aja and I am here with my colleague, Brian. Hey, Brian." >}}

BRIAN: Hello, Aja. 

AJA: So later today we have an interview with two of our colleagues, Jez and Nathen, that is awesome. They're going to teach us all about the DevOps. And what's our question of the week about this week, Brian? 

BRIAN: It is, what actually is the Cloud SQL proxy? And why does one even want such a thing? 

AJA: Yes, we will get to that later. But first, my favorite part of the podcast every week, Cool Thing of the Week. 

[APPLAUSE] 

BRIAN: Yeah. 

AJA: First, a cool thing is the Next London just happened. And I was there. And it was cool. It was really high energy and there was lots of stuff announced. And everyone was just an absolute delight to talk to. I got to answer and ask a lot of really cool questions. People had questions for the panel that I ran. But Brian has actually spent more time looking over the entire list of stuff that was announced. So Brian, do you want to talk a little bit about what you noticed? 

BRIAN: Sure. I got all this from a kind of a wrap-up blog post that we made, so it's worth checking out. It's a wrap, key announcements from Next '19 UK. And we're going to have a link to that in the show notes. But big picture, I thought there's a lot of small things, and it feels like the theme was like bringing cloud and your on premise data centers closer together. 

So along those lines, things about bring existing IP addresses that you may have and not be able to change configuration around. You can actually bring those to GCP and make them part of GCP. You can rent Bare Metal Machines, kind of like in racks that are like network wise and physically very close to Google interconnects. 

If you need to run something, you have complete control over it, but also really fast pipe. Some more network monitoring, things around hybrid apps, migration tools for migrating existing machines to Cloud VMs or into containers on Kubernetes and what have you. And Cloud Run for Anthos was announced. So a bunch of stuff in that theme of connecting things. 

And then I also wanted to highlight around the AI ML stuff. You know, I'm definitely no expert in this space, but it seems like one of the ongoing challenges is just understanding the models. And the team has done a ton of work under the umbrella of explainable AI. It's really worth checking out if you're involved in that space at all. And Aja, my question for you is, while you were there, did you get tea? 

AJA: I did get tea. I had tea with some of the Googlers the day before the conference and it was amazing. It was so good. 

BRIAN: That is fantastic. I was in Denver last week and had afternoon tea, but it was not in London, so a little bit jealous. What's your cool thing of the week? 

AJA: My cool thing of the week, one of our former colleagues, who is now working on open source at Google, Julia, pointed me at a blog post that talks about how you can take Graphviz diagrams, and using an extension, and make them look hand-drawn. And I've done a bunch of stuff with Graphviz over the years. 

And my most recent thing was a blog post I did on taking Cloud Build files and showing the dependencies using Graphviz by creating a dot file that I did for Mark Mandel, the former lead host of the podcast. And now I can't make them look like I hand-drew them. And for someone who does not draw straight lines without a ruler very well, this is awesome. So there will be a link in the show notes to this particular blog post from showing how to do this. 

BRIAN: Oh, that's super cool. I love, love, love that. In fact, just this weekend, I noticed in Matplotlib, this graphing library for Python, it has a mode to enable XKCD comic style sketchy graphs, so in that same theme. 

AJA: I love the fact that we have made things to make our digitally generated things look like they were not digitally generated. We have come full circle. It's awesome. 

BRIAN: Let's bring a little more humanity into all the things. On that note, let's switch to the conversation with Nathen and Jez about DevOps. OK, so super excited to have both Nathen and Jez here today. Could I ask you each to introduce yourself quickly, and your connection to DevOps? So we'll start with Nathen. 

NATHEN: Great. Hi, my name is Nathen Harvey, and I am a developer advocate here at Google Cloud. And the area where I focus is on the DevOps and SRE community. So what's my background with DevOps? I've been sort of circling in and around the DevOps community for, I don't know, eight or nine years. 

And I used to be a DevOp. I don't believe you can be a DevOp. But I used to be one. 

[LAUGHTER] 

So what does that mean? It means that I used to be responsible for managing operations at an online retailer. And we would build, deploy, manage applications. I would help to manage the infrastructure. We were moving from the center into the cloud. And then eventually I left that job and became a developer advocate or community organizer, and have been spending the last eight years in that space. 

BRIAN: Excellent. 

JEZ: I am also working in DevRel as a developer advocate. My connection to DevOps is that I co-authored a book called "Continuous Delivery," which came out around the same time that the DevOps movement was really starting to be a thing. To the extent that we actually got DevOps into the book, and it was the first published book that actually mentions DevOps I think, as far as I know. 

I'm also author of "The DevOps Handbook" and of "Accelerate," which is a book based on a research program that myself and Dr. Nicole Forsgren, who's also at Google, along with a bunch of other folks, including the people at Puppet and I have been working on for the last six years, which looks at how to measure software delivery performance, the factors that impact it, and why it's important. A whole bunch of that research is up at cloud.doc.google.com/devops, along with the last six years of state of DevOps reports. 

BRIAN: So we're going to kick this off with the easy question. What is DevOps? 

JEZ: Well, the first thing to say, is that there is no definition of DevOps. And that's on purpose. The people who really, I guess we can say the founders of the movement, which is Patrick Debois and Andrew Shafer, they deliberately didn't want there to be a definition DevOps. They didn't want there to be a manifesto. 

They didn't want any of that stuff, because they had seen what happened to the Agile movement, where it basically got taken over by a whole bunch of people and kind of deployed in order to make money and sell people stuff and all those kind of things. They were, we're not doing that. We want this to be, I guess what today would called, a community of practice basically, of people who are trying to get better at building operating and distributed systems at scale that was secure and reliable. 

And that's, when I'm asked to define it, that's how I normally define it. It's a community of practice trying to solve a particular problem, which is how do we build large scale distributed systems that are secure and resilient. However, everyone wants a definition. We have a definition at cloud.google.com/devops. It's why we made up by ourselves 

And it says DevOps is an organization and cultural movement that aims to increase software delivery velocity, improve service reliability, and build shared ownership among software stakeholders. Which is as good as any, I think. I don't hate it. I quite like it. Nathen, you must have thoughts on this. 

NATHEN: Sure, I have at least three other definitions that I'll run you through right now. That's not actually true. I'm not going to run you through three other definitions. But I always like to, like when I'm asked to define DevOps, I, for better or worse, just like to become a little bit of a historian, and say, well, how did that word actually come into being. 

And there are kind of two almost simultaneous origin stories. One is that John Allspaw and Paul Hammond and gave a talk at Velocity. And the talk was titled something like, "10 Deploys a Day." And there was a slide in that talk that on one side had dev, on the other side had ops, and in the middle had a heart. So that's one part of the origin story of the term DevOps. 

The other part is that an Agile conference, there was a birds of a feather session. And I think it was Andrew Clay Shafer proposed a topic at that birds of a feather session called Agile infrastructure. And then he realized that no one at the Agile conference was going to show up for that. So he skipped his own birds of a feather session. And Patrick Debois did show up. 

So eventually they met. And then Patrick started this whole, like coined the term DevOps, by starting a conference called DevOpsDays. But the interesting thing at that time, I think the reason that it was called DevOps, was because we kind of recognized this wall of confusion between dev and ops. 

And the way that I always talk about it is, it's about how we align those incentives. So we tell developers, your job is to build features and make the customer happy. And then we turn to operations and we say, your job is to keep the system stable. And so what does that do? That turns the developers into push, push, push, push, push. And the operators into no, stop. Because to keep the system stable, what I will do is accept no changes in the system. 

And that became a real problem. So DevOps was born from, how do we actually stop this throwing stuff over the wall of confusion from dev to ops, but instead, get dev and ops to realize that what they're both here to do is focus on the customer. And so today, I really look at, and why sort of DevOps is this cultural movement, I really look at it as, this is how we actually get IT to align to the business and understand what is the business objective. And so I think DevOps is a terrible word. 

JEZ: So one interesting historical footnote to that, is we just had the very last Velocity conference in Berlin this year, in as much as one bookend of this movement was the first Velocity comments in 2009, we just finished it off. And of course, that was co-founded by John Allspaw and Steve Souders of Google. 

AJA: Speaking of conferences the DevOpsDays conference recently celebrated its 10-year anniversary. And I am ashamed to admit, that I remember the first DevOpsDays Seattle happening, and being very confused as to what that was. What's a DevOpsDays? 

NATHEN: That is a great question, Aja. So a DevOpsDays, as you mentioned, it celebrated its 10-year anniversary. There's a really interesting thing, I think first, we'll just start with the format of a DevOpsDays. So a DevOpsDays is a locally organized conference, which is why there have been many in Seattle, there have been many in Washington DC. All over the world, these conferences happen. 

But the key behind a DevOpsDays conference is really to celebrate the idea of bringing a cross-functional group of humans together to collaborate on, what are the things that are top of mind around how do you do IT, better, how do you DevOp, how do you align better with the business strategy, what are the cultural changes that you need to bring into your organization. 

And in order to really help with that collaboration, a typical DevOpsDays includes about half pre-determined content. So talks from presenters that are maybe like keynotes or 30-minute talks. And then also some Ignite talks, which are nice five minute talks. Inspire us, but keep It short. 

But the other half of the conference is where it gets really, really interesting. The conference organizers kind of turn over the conference to the attendees of that conference. And it's typically done through a process called open spaces. And in open spaces, every participant at the conference is invited to propose a talk or propose a topic, a topic that they are interested in learning more about, something that they want to share. And the only rule is, you have to be passionate enough about that topic to start a conversation. 

From there, the participants self organize into small discussion groups and talk about each one of those topics. And so the idea behind it is really that practitioners, the people that are out there making these changes within their organizations, are sharing with one another exactly what they're doing, where they're running into friction, how they're overcoming that friction. And it's a really great conference series to help you connect with your local community and drive sort of the practice of DevOps and the principles of DevOps forward within your organization. 

AJA: OK, I think I get it now. You have done a good sales pitch for the DevOpsDays conference series. 

NATHEN: All right. One of the other interesting things I think about it is, it's truly locally organized. So in 2019, I think there were 80 DevOpsDays that happened globally. Yeah, I see that look on your face. None of the podcast listeners can see that look on your face, but it is one of shock. 

AJA: I'm making a giant shocked face. 

[LAUGHTER] 

NATHEN: Indeed. And the way that that works is, each one is locally organized by a local group of volunteers. There is a global organizing committee, of which I happen to be a part of. But our role as the global organizers, is really to provide some of the infrastructure, like the website. Some coaching on what should your agenda look like, and some guidance on that. But each one is locally organized, operated and executed. 

BRIAN: Sweet. OK, since we're mining things other people said, there was this mention of the accelerate state of DevOps Report, and that sounds important and big. And you mentioned research-based. So I'm curious, what is this thing? 

JEZ: Yeah, so State of DevOps Report, you kind of slide off as a kind of industry report produced by Puppet Labs, as it was back in the day. And the very first time, I think I was involved in year two, and when we were presenting after year two, someone walked up to one of the organizers at Puppet conference, was like, hey, you know that you're doing it wrong. 

[LAUGHTER] 

And the people they were like, oh, that's interesting. And who are you? And this person was like, well, I'm Dr. Nicole Forsgren. I am a researcher at Utah State University. I'm a professor at Utah State University who does stuff on systems administration. I do research on systems administration, amongst other things. And I'm a statistician. And this person was smart enough to say, well, maybe you should come and talk to the people who do it and be involved in that. 

And so in year three, in 2014, Nicole joined us and injected basically statistical and methodological rigor into it. And so it ended up being this research-driven academically rigorous program looking into how you measure software delivery performance, the impacts of that, the things that impact software delivery performance. 

And so over the last six years, we've built up, I think more than 30,000 data points, so observations by this point, from all different kinds of companies of all different domains and sizes. And we have actually a pretty good idea of how you get better at doing software delivery. And we have data and research that makes that useful and applicable. 

AJA: But what does the research show? 

JEZ: That's a great question. We actually have, what we lovingly refer to as the BFD, or the Big and Fulsome Diagram, which is currently in the process of being revised. And your podcasters users won't be able to see this, what I'm holding up. It's a big. 

AJA: It's huge. 

JEZ: Big piece of paper with lots of arrows and boxes and words. 

AJA: It looks like scary UML. 

JEZ: Yes. And the reason that I have this, is because we're revising it to include the 2019 findings. And some poor person at Google is going to be tasked with turning this into something kind of beautiful and friendly that you can print out and put above your desk. Or frame it. Hang above your bed for that matter, if that's what does it for you. 

And I mean broadly speaking, what it does is, it shows you what helps you get better software delivery performance. And there's basically four groups of things. A whole about the technical practices, that we lovingly call continuous delivery, obviously because that was me. So things like continuous testing, loose coupling architecture, building security into the software delivery process, deployment automation, trunk-based development, and a bunch of other things. 

Some lean management practices, like managing work in process, limiting work in process, visual management, feedback from production. Some lean product development practices, like working in small batches and making the flow work visible. And a whole bunch of cultural stuff, like for example, retrospectives or postmortems, creating autonomous teams and so forth. And we show that all those things impacts software delivery performance. 

Some of them also lead to less burnout teams, and less deployment pain and less rework, some of them, increase job satisfaction. Software delivery performance in turn, increases organizational performance. So we know that getting better at software delivery makes your organization more effective as well. So basically says, well, if you want to get better at this, here are all the things that you need to do to get better at it. 

AJA: Sounds like I should read more than the first 10 pages. 

JEZ: There's a lot. It's definitely a rabbit hole that you can dive into and get very deep into. 

AJA: I will say that the parts of it I've read have been incredibly insightful, and have made me think about not just the operation side, but software in general and cultures around software teams in a very different way. 

JEZ: Great. Thank you. I mean, we've drawn on Google's research as well. And one of the things that Google's famous for is Project Aristotle, the research on how to build high performing teams at Google. We've been able to replicate that research. This year we looked at code maintainability using stuff from Google's internal programs. So a lot of it actually is replicated stuff that has been found in Google. 

But I think what's important about it is, a lot of people say, well, you're Google, you're special, you can do this stuff, we're different. And I think what this program does is say, well actually, do this stuff anyway. It's not just applicable at Google. Anyone can get better. And of course, the four of us work at Google, and obviously, we know that Google never has problems with developers. 

AJA: Never. 

JEZ: Pushing features as fast as possible and being incentivized based on building things that might not necessarily be easy to operate. No, so Google's obviously a perfect unicorn. We never have any internal issues and we are special and brilliant. 

[LAUGHTER] 

BRIAN: OK. So you've got all this research. It shows some stuffs. What should people do with that? How do you apply this? 

AJA: I think you're asking, when would I ever use this or some variation thereof? 

BRIAN: Yeah, or why bother reading it? Or what should I do with this stuff? 

NATHEN: Yeah, I would love to answer that question for you. But I'd also love to answer it not yet. 

BRIAN: Wait, what? 

[LAUGHTER] 

AJA: I don't think it works that way. 

BRIAN: Podcast DevOps. 

AJA: Are you trying to get a second podcast episode? Is that what you're trying to do? 

NATHEN: No, I don't want to get a second podcast. Maybe I do. But I just wanted to summarize one quick thing that the research has shown us over time. So Jez mentioned that, oh, we're Google, so that probably doesn't apply. Or you're from Google, that probably doesn't apply here. Each year the report looks at a couple of different things. 

But there has been a consistent thread throughout the years. And that is looking at things like lead time and deployment frequency, which if you'd say the word DevOps, you might think of as the dev side. And then the change fail rate, so when you push something to production, how often does it fail. Or the time to restore. And to me, both of those feel more on the operations side. And so Jez, the research shows us that we can either do one or the other. We can either move fast or we can be reliable. Is that right? 

JEZ: Absolutely not, Nathan. In fact, quite the opposite. It shows that high performance do better at both speed and stability. It's not, in fact, a trade-off. And every year we get all this data and we pop into, you can kind of think of it as statistical Harry Potter magic hat called cluster analysis. 

And what cluster analysis does, is it basically sorts the participants into groups. And we don't tell it how many groups to create or what those groups should look like. But we just say, here's four variables, make groups out of them. And we always end up with three or four groups. And what's interesting is, it's always the case that there's one group that does well on those four metrics, deploy frequency, lead time, time to restore, change fail rate, and one group that really does really badly on those four. And then one or two groups in between that are kind of in the middle so and so forth. 

So every year we kind of hold our breath, and we're like, what's going to pop out this year? And every year the same thing pops up, which is really cool. Because it validates that finding that actually high performers do better at speed and stability, low performers do badly at speed and stability. And the practices that help you get better, if you do it right, help you get faster and more secure and more available. 

BRIAN: OK. So tell me if I'm wrong here. I think the thing to do actually, is for people who may be listening here, know that thinking more carefully about some of this DevOps stuff is better, that you can have both speed and agility. If they're trying to convince other people on their teams or their management folks, the thing to do is get them to read this report. Because it's actually really readable and based on research. Maybe that's the thing. 

JEZ: Yes, exactly. And it's actually designed in such a way that you can do that. So the PDF is quite big. I think it's over 80 pages this year. But it's designed in such a way that if there's a particular point that you want some makes your boss, there's a couple of pages that you can just print out and lovingly faux carelessly put on their desk. 

[LAUGHTER] 

BRIAN: This just happened to end up here. 

JEZ: Yeah, mysterious. Here's your tea and here's a little coaster to put your tea on. Oh, look, it's got these diagrams on it. So it's definitely designed to be able to do that. In as much as people are persuaded by data, I think in the software industry, we like to think we're data-oriented. Often we're not. We're kind of fashion and peer persuaded or influenced. But in as much as people can be influenced by data and research, that's the goal. 

NATHEN: And so Brian, coming back to your question about how do I actually take this research and put it to work, Jez mentioned throwing a copy of it on your boss's desk. That is a great first step. But the other things that you can do, if you go to cloud.google.com/devops, in addition to be able to download the report there, there's also what we call a DevOps Quick Check. 

And we will ask you a series of five questions. And then we will show you where do you fit in terms of your industry and in terms of the research that we've found. We will put your organization as a low performer, a medium performer, a high performer, or an elite performer. And it is across those four key metrics that we talked about. And once you understand that, that will also give you some insight onto where you should probably focus your effort. 

And so on that same page, we have a collection of key capabilities that Jez was mentioning, around technical capabilities, cultural capabilities and so forth. So really, the idea there, is that you focus your resources on what's currently holding you back. Identify some constraints. Choose a target. And iterate. Make those a little bit better. Get a little bit better around this capability. 

And then reflect, and do that same thing again. So this is an iterative process. The truth is, that when you start your DevOps transformation, and I put that in air quotes, you're never done. It is a journey. You don't wake up one day and say, well, now we're DevOps, so what's next. 

AJA: So it's like everything else in software. Shipping it is not actually the interesting part. It's how you keep it going and improve it and iterate on it and make it meet the needs of the humans. who have to use it as life goes on. That's the cool part. 

NATHEN: Yes. 

AJA: OK. Is there anything we missed that you would like to mention before we wrap things up? 

JEZ: I think the only thing I want to say, is just want to pull one out for Velocity, since it was just recently the last one. I certainly learn a ton from Velocity. It is hugely influential. Amazing people talked about amazing things in there. So thanks to everyone involved in that conference over the years. And rest in peace, Velocity. 

AJA: Hey, Nathen, how about you? What did we miss? 

NATHEN: Yeah, I would say that we talked a little bit about Velocity. Again, I share the condolences and best wishes for Velocity and that team. DevOpsDays did celebrate its 10-year anniversary. And so that conference series is still going. But also this year, the DevOps Enterprise Summit celebrated its fifth year anniversary. So that's another great conference. 

So I think if you're interested in learning more about bringing these practices into your own organization, the place to start right now is cloud.google.com/devops. And then, once you've looked at some of that research and gathered some of that information, if you're ready to go to a conference, find a local DevOpsDays, which you can always find at devopsdays.org. Or look to the DevOps Enterprise Summit, which typically happens twice a year. 

JEZ: Yeah, first definitely feast on the yummy DevOps goodness. 

NATHEN: There's so much. So much great content there. 

AJA: And this is why when I found out I got to interview you two for the podcast, I was excited. 

BRIAN: I just want to share with everybody that what I think was a joke about not it on the noses, has been an actual practice through this entire interview. 

[LAUGHTER] 

AJA: So the last question we always ask folks, obviously, I'm hoping you all will get some new fans being on the podcast. So if you all find new fans, where can they find you? Online? In person? Any of the above? And I'm going to make Nathen go first. 

NATHEN: Awesome. You can find me online probably easiest through my Twitter handle or you could look at GitHub or what have you. They're all the same. It's always Nathen Harvey everywhere. But I have to warn you, my father misspelled my name. So it's N-A-T-H-E-N H-A-R-V-E-Y. We can put that in the show notes, but that's the best place to find me online. 

And then in person, well, it really depends on when this recording comes out. By the time it comes out, you've probably missed me at DevOpsDays Galway and at Next UK. But in the future, I will definitely be at DevOpsDays conferences. I also know that Jez and I will happen to be together at a conference in January, the Delivery Conf, that's happening in Seattle. 

JEZ: Yeah. So I am Jez Humble everywhere on the internet, all one word, jezhumble, which I know, J-E-Z and then Humble. I don't really get out very much, which is probably for the best. But you can see me at conferences where I am, and Delivery Conf is probably the next one, to be honest. We'll probably all be at Next, let's face it. 

BRIAN: And that is, it's at deliveryconf.com. It's January 21 and 22 in Seattle. 

AJA: I promise we will roll out the wonderful winter weather for y'all. Cool. I want to thank you guys. This was delightful and amusing. And DevOps is often seen as a really boring topic, but everyone I know who works in this space is awesome. So I have no idea how it got that reputation. But thank you for representing that this is about people and this, it's just about making everything better for everyone involved. 

JEZ: Thanks. We work very hard to make it boring. 

NATHEN: Yeah. And I think a lot of that has to do with the name. It's not about dev and ops. It's all of us. So you can call it modern, you can call it digital, you can call it IT. Someday we'll stop using the word, because it'll just be the way that things get done. 

AJA: Software and feelings. OK, Thanks, y'all. 

BRIAN: Thank you so much. 

JEZ: Thank you. 

AJA: So as you can tell, Brian and I had a great time talking to Nathen and Jez, because they are awesome. And DevOps is just such a human topic that it makes for really easy conversation, despite the fact that everyone kind of thinks of it as this deeply technical, very nerdy, very serious space. 

I really like the amount of humanity that Nathen and Jez bring to it, which is why I really like talking to them about the topic. And now it is time for the question of the week. And Brian has agreed to be the person who asks the question this week, so that I can be the person who gets to answer it. 

BRIAN: Which is super appropriate, because I don't know the answer, and I don't have to play dumb. I'm actually dumb. Wrong way to say that. But I don't know the answer. So there's this thing called the Cloud SQL proxy it seems like you need whenever you want to talk to Cloud SQL. Why? Where does it sit? What is it for? I don't understand. 

AJA: So the first thing to know is that you don't need it. It is just the most recommended way of accessing Cloud SQL. And to kind of give an answer to this, I'm going to use a little bit of my history in tech. So back in the day before I was at Google, actually before I was even at the job, before I was at Google, whenever we needed to configure our database to talk to our application servers, we had to give our application servers the IP address of the database. And then we had to allow the database to access an IP address or range that we knew our application servers were going to live in. 

And this is fine. But it is not the most secure. Because it means that if your database moves or if someone starts spoofing an IP address or all sorts of other awful things that can happen on the internet, someone could theoretically break into your database if they also have the database password and credentials. 

It is much better, and also, it just is not particularly flexible, because it meant that if we moved the database around or if we added servers, we had to redeploy everything. So what the Cloud SQL proxy does, is it makes it much easier to interact with your database in a secure way. There's a proxy application that either runs on your local development machine if you want it to. That, can't say that I highly recommend that for a lot of pre prod scenarios, like staging or even development environments. That's not a horrible way to do things. 

Or it can run on your App Engine cluster. It's really easy to do enable App Engine in the app store ammo or in some of your other compute variations. GCE, potentially Cloud Run and others. And there's just a little application there. And all it does is it listens to all of your database commands and sends them up to the other side of the proxy, which lives on GCP. 

It validates that your credentials are correct. These are your IAM credentials. There's a couple different ways to use them. But these are the IAM credentials that you can control through either the IAM commands G Cloud command line, or also just through the Cloud Console. And then it forwards them onto the database so that you don't actually have to connect to your database via IP, or your servers to your database via IP. 

And so it basically adds additional layers of security, and also flexibility, by adding a layer of indirection between your application and your database, which just works better for a cloud environment where things move around. You might need to connect applications. And it also works better because you can control the access, control in a much more fine grain way, because you can know who, based on the credentials, not just what IP accessed it. 

And I think that is correct, but there will be a link in the show notes, so that all y'all can go read the blog posts or the documentation page and tell me the bits I got wrong. 

BRIAN: Ooh, that sounds like a challenge. 

AJA: I like learning things too. 

BRIAN: So let me see if I understood this correctly. So the common production case is that you have a copy this proxy running on every machine VM kind of environment, and the stuff there doesn't need to know about passwords or IP addresses. It just talks to the local proxy. And the proxy does auth in an integrated cloud way. 

AJA: It does need to know about passwords. 

BRIAN: OK. 

AJA: Because every time you're accessing a database, you have to both authenticate into the machine, and then also authenticate into the database. And this takes care of authenticating to the machine. 

BRIAN: Got it. 

AJA: Basically verifying who can access the machine. But you still need to have your valid password or account to access the database, because your database account controls your permissions for the data in the database. So databases contain very important information. And we should secure them carefully. 

BRIAN: No kidding. Somebody is going to disagree with me, but this sounds a little bit like two-factor auth for a database connection in a way. Cool. Thank you for that. I learned a lot, and I hope everyone else did too. This is the section where we talk about where people are going to be. And lead on. Where are you going to be, Aja? 

AJA: It's the end of the year. I'm going to be at home drinking tea and playing with codes. 

BRIAN: Love it. This is going to be a real easy and short one, because same is true for me. Tea and playing with tech. And maybe some games. But I'm trying to learn about Laura radio communication and silliness with our do you know like things. So we'll see what happens there on my end. 

AJA: Yeah, my tech's not that cool. I am still working on my cloud functions application to keep my cat in the house. And hoping that I will get a couple more hours to finish it off, so that I can write the blog post showing how you can use cloud functions and cloud tasks to hit an HTTP endpoint. It's actually a reasonable business case, but I'm using it to keep my cat in the house, because my cat can open doors. 

BRIAN: This is amazing. Wait, have you talked about this on the podcast before? We can't just end without you. I 

AJA: Don't think I have. I can't, I don't think I have. 

BRIAN: OK, so how do you get from HTTP to door knobs? 

AJA: Smart house. There's an HTTP endpoint that I can use to lock the doors for my house via an authentication means. There's actually multiple layers of indirection there. But just short version is, I hit a specific HT endpoint, specific credentials, and it locks the doors. And then I can trigger that. It also triggers an event when the doors unlock. So you then use, call it tasks, to add a timer to time out. 

And while this particular use case is completely ridiculous, there are a lot of use cases in business where an event happens that you can use to trigger a cloud function. And then you want to some time later maybe send a sign-up email or send a reminder email or something like that. Or maybe not even an email. Maybe you want to go hit a slack end point or something like that you want to do it on a delay. And there's a lot, surprisingly large number of business cases that are like that. I'm just happening to use a particularly hilarious one to motivate my application. 

BRIAN: That is brilliant. 

AJA: And relax. For everyone listening, there is a much better way to do this. I wanted to play with cloud functions. 

BRIAN: That is awesome. Fantastic. Thank you have an awesome holiday playing with that. And I hope everybody had a great podcast and has a good rest of the month and time, holidays and stuff. 

[MUSIC PLAYING] 