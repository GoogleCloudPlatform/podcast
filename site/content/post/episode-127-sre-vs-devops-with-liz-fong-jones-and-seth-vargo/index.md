+++
audioDuration = "00:35:45"
audioFile = "Google.Cloud.Platform.Podcast.Episode.127.mp3"
audioSize = 51881758
categories = ["SRE", "DevOps"]
date = "2018-05-16"
description = "This week is a clash of titans! Liz Fong-Jones and Seth Vargo join Mark and Melanie, to battle out on which is better: SRE or Devops (hint - everyone wins!)"
draft = false
episodeNumber = 127
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "SRE vs Devops with Liz Fong-Jones and Seth Vargo"
#image="/images/post/Don't_Panic.svg.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/WUBmYSKbJUd"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8jvzkp/episode_127_sre_vs_devops_with_liz_fongjones_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week is a clash of titans! [Liz Fong-Jones](https://twitter.com/lizthegrey) and [Seth Vargo](https://twitter.com/sethvargo)
join [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl), to battle out on which is better: SRE or Devops (hint - everyone wins!).   

<!--more-->

##### Liz Fong-Jones

[Liz](https://twitter.com/lizthegrey) is a Staff Site Reliability Engineer at Google and works on the Google Cloud Customer Reliability Engineering team in New York. She has worked on services ranging from Google Flights to Cloud Bigtable in her 10+ years at Google. She lives with her wife, metamour, and a Samoyed/Golden Retriever mix in Brooklyn. In her spare time, she plays classical piano, leads an EVE Online alliance, and advocates for transgender rights.

##### Seth Vargo

[Seth Vargo](https://twitter.com/sethvargo) is a Developer Advocate at [Google](https://cloud.google.com/). Previously he worked at HashiCorp, Chef Software, CustomInk, and a few Pittsburgh-based startups. He is the author of [Learning Chef](https://www.amazon.com/Learning-Chef-Configuration-Management-Automation/dp/1491944935) and is passionate about reducing inequality in technology. Seth is an active member of the DevOps community and has written thought-leader-y pieces such as the [10 Myths of DevOps](https://www.sethvargo.com/the-ten-myths-of-devops/).

##### Cool things of the week

- Google I/O session [youtube](https://www.youtube.com/playlist?list=PLOU2XLYxmsIInFRc3M44HUTQc3b_YJ4-Y)
- What’s new in Firebase at I/O 2018 [blog](https://firebase.googleblog.com/2018/05/whats-new-in-firebase-at-io-2018.html)
  - Introducing ML Kit for Firebase [blog](https://firebase.googleblog.com/2018/05/introducing-ml-kit-for-firebase.html)
- Jeff Dean is new Head of AI [wired](https://www.wired.com/story/googles-new-ai-head-is-so-smart-he-doesnt-need-ai/amp)
- Introducing Cloud Memorystore: A fully managed in-memory data store service for Redis [blog](https://cloudplatform.googleblog.com/2018/05/Introducing-Cloud-Memorystore-A-fully-managed-in-memory-data-store-service-for-Redis.html)
  - [Google Group](https://groups.google.com/d/forum/google-cloud-memorystore-discuss)
  - [Issue tracker](https://cloud.google.com/support/docs/issue-trackers#feature_requests)

##### Interview

- class SRE implements DevOps [youtube series](https://www.youtube.com/watch?v=uTEL8Ff1Zvk&index=0&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj)
- DevOps [wikipedia](https://en.wikipedia.org/wiki/DevOps)
- Site Reliability Engineering (SRE) [site](https://landing.google.com/sre/)
- Terraform [site](https://www.terraform.io)
- Chef [site](https://www.chef.io)
- Puppet [site](https://puppet.com)
- Ansible [site](https://www.ansible.com)
- SaltStack [site](https://saltstack.com)
- Prometheus [site](https://prometheus.io)
- Datadog [site](https://www.datadoghq.com)
- Stackdriver [site](https://cloud.google.com/stackdriver/)
- The Site Reliability Workbook: Practical Ways to Implement SRE [amazon](https://www.amazon.com/Site-Reliability-Workbook-Practical-Implement/dp/1492029505)
- Seeking SRE [o'reilly](http://shop.oreilly.com/product/0636920063964.do)
- Customer Reliability Engineering Blog Series [blogs](https://cloudplatform.googleblog.com/search/label/CRE)

##### Question of the week

I’m a researcher at a regionally accredited academic institution and I need compute resources. Does Google Cloud have any programs that can help me out?

- Google Cloud Platform announces new credits program for researchers [blog](https://blog.google/topics/google-cloud/google-cloud-platform-announces-new-credits-program-researchers/) [faq](https://lp.google-mkto.com/gcp-research-credits-FAQ.html?modal_active=noneBlogsocial&utm_campaign=2018-edu-gcp-research-credits)

##### Where can you find us next?

Mark will be speaking at the [Monthly SF Game Development Community](https://www.meetup.com/Monthly-SF-Game-Development-Community/), presenting on
[You Can't Just Add More Servers](https://www.meetup.com/Monthly-SF-Game-Development-Community/events/250559719/) on May the 30th in San Francisco.

Melanie is speaking at the [Understand Risk Forum](https://understandrisk.org/event/ur2018/) on May 17th, in Mexico City.

{{< transcript "MARK: Hi, and welcome to episode number 127 of the weekly Google Cloud Platform podcast. My name is Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you do, Melanie?" >}}

MELANIE: I'm doing good, Mark. How are you doing? 

MARK: I'm doing well. I'm doing well. 

MELANIE: Good. So, Mark, this week we are going to be speaking with a couple of our colleagues, Liz and Seth, who will help explore why SRE versus DevOps is a thing, and/or it's not a thing. We'll get into that in this interview. 

MARK: It's a big battle. It's just-- it's just-- 

MELANIE: Or-- or is it? 

MARK: And just flying sparks-- 

MELANIE: Are they really secretly related? 

MARK: Basically a Michael Bay movie. It's fantastic. 

MELANIE: Yeah, exactly. So before we get into that, as always, we go to our cool things of the week, and we have our question of the week. And this week's question is-- 

MARK: I'm a researcher-- I'm not actually, but if I was-- I'm a researcher at a regionally accredited academic institution, and I need some compute resources. Does Google Cloud have any programs that help me out with this? 

MELANIE: That's a great question. We will get to that. But before we do, as always, we're going to start with the cool things of the week. And as some of you may know, Google I/O was last week, and so the actual videos from the event are already up on YouTube, and we'll include that link in our show notes. So you should check it out. You can see all the cool announcements, you can watch the assistant talk to, I think, a hairdresser-- 

MARK: Yes. 

MELANIE: All the fun stuff. 

MARK: All the fun stuff, and definitely also a bunch of sessions from our teammates. Lots of developer advocates from Google Cloud doing some amazing stuff. 

MELANIE: Yes, definitely. 

MARK: And speaking of I/O-- excellent segue, if I do say so myself. 

MELANIE: Nice. 

MARK: At I/O, our friends over at Firebase released a whole bunch of new stuff that's super, super cool. Worth checking out. Quick overview-- one of the big flagship things, I think, that I'm very excited about is ML Kit. ML Kit is a series of ML APIs that can both be run on device or in the cloud, depending on the functionality. So there's five production-ready ones available now-- text recognition, face detection, barcode scanning, image labeling, and landmark recognition, and there is more coming. They also announced improved performance monitoring as well-- 

MELANIE: And, I believe, they're expanding Firebase Test Labs to iOS. 

MARK: Yup, they're doing that as well, which I'm also super excited about. There's better analytics, and really, there's just more stuff coming. So definitely check all that out. I mean, as we said before, there's links in the show notes to all the I/O sessions where they would add stuff all about that as well. Woo! 

MELANIE: Nice. And the other thing we wanted to mention for this week is that Jeff Dean is the new head of AI. So he's heading up that effort inside Google, which is a little bit different, but still similar to what he's been doing around Google Brand. Congratulations to Jeff. 

MARK: Excellent. Well finally, a cool things of the week, I want to mention that we are introducing Cloud Memorystore. This is something you can play with right now. It's a fully-managed, in-memory datastore service for Redis. So this is pretty cool. It's New your standard Google Cloud fare in that you can go in to the console, fire up Redis Instance, has integration into Stackdriver, on-demand pricing, and a lot more features that are definitely coming up. We totally want you to come in and play with it. They will have links in the show notes to the Google Group and the Issue Tracker, and you can totally play with it now. We want to hear what your experiences are like playing with our Redis offering, and just hope you all enjoy. 

MELANIE: You should all message Mark directly and tell him exactly how you feel. 

MARK: DMs are open on Twitter. You can! You can totally message me. I will tell you to go send it to other places, but if you really feel the need, please-- you can. You totally can. 

MELANIE: There you go. All right. So, Mark, I think it's time to go speak with Liz and Seth. 

MARK: Yes! Let the battle begin! 

[FOGHORN] 

[CHEERING] 

[CRASH] 

MELANIE: Woo! 

MARK: So I am very excited to have both Liz Fong-Jones, staff site reliability engineer at Google, and Seth Vargo, staff developer advocate at Google, to settle once and for all what's better, SRE or DevOps? How you all doing today? Liz, how are you doing? 

LIZ: Hi, I'm doing great. It's a pleasure to be here. 

MARK: Excellent. Thank you so much. Seth, how you doing? 

SETH: Great, great. Thanks, Mark and Melanie, for having me here today. 

MARK: So before the thunder dome begins, why don't you tell us a little bit about who you are and what you do at Google? Liz, why don't you go first? 

LIZ: Sure. So, I work as a site reliability engineer on the Customer Reliability Engineering team, where we teach Google Cloud customers how to better operate and run their systems so that they work great in the Cloud. 

MARK: Awesome. And you, Seth? 

SETH: Cool. I'm Seth. I'm a developer advocate here at Google, and I work with customers, potential customers, and users, particularly around the DevOps community, and making sure that Google Cloud is one of the best clouds in which to practice and illustrate DevOps. 

MELANIE: Great. Well, so, can you tell us a little bit more about what exactly is DevOps, and what exactly is SRE? How are they different? How are they connected? 

SETH: DevOps is a cultural movement that was started around 2009 officially, but there's a lot of recorded incidents of DevOps occurring all the way back to 2003 and 2004. It really refers to this condition that happens in many organizations, small and large, that operators and developers have this divide where developers are responsible for writing code and accelerating the business, and operators are responsible for keeping that code running and keeping the business stable. Inevitably, what would happen was the developers would write this code, and they would throw it over the metaphorical wall to the operations team and say, keep this running. Keep my Java app, keep my Ruby app, keep my Python app up and running. 

But operators would have little or no understanding of the language it was written in, the requirements of the application, or the business goals of the application. So inevitably, they were fighting an uphill battle continuously, where they were being asked to monitor and maintain systems which they had no input in, and they had no ability to push back on the developers and say, hey, this code isn't so great, or this isn't going to work at scale. 

And this challenge ultimately led to this idea of DevOps, which is, what if we eliminate that barrier? What if we force or encourage developers and operators to work together in a way such that the operators bring their experience in running systems at scale and distributed systems and developers bring their experience of coding and algorithms together, so that we can build better systems and more reliable systems? And that's really the crux of DevOps. 

And there's some sub pillars that come with that. So there's these six or seven things, like reduce organizational silos is a big one in DevOps. We want to just reduce the bureaucracy and these artificial walls that exist between groups. Accepting failure as normal is another big one. One of the big challenges and one of the reasons there was such a divide between developers and operators is that if at any point something went wrong, it was all about blaming someone. Well, who was at fault? Who can we blame for this? Whose budget do we deduct this from? 

The third was that we very quickly realized that these huge waterfall-like developments where we ship a million lines of code at once was not a great way to be able to recover from failure. So first we accept failure, but then one of the ways to reduce that failure is to just do incremental changes. So instead of shipping these huge, brand new features, let's just ship one small thing at a time. Leveraging things like tooling and automation to make sure that we're not spending all of our time touching systems, but are instead automating things and measurement-- another challenge with this. And part of the reason that the wall can be broken down is that when we start measuring things and we started talking quantitatively instead of qualitatively, it's much easier to have a conversation. So those are just a few of the DevOps pillars. 

MELANIE: Nice. 

MARK: Yes. So, Liz-- SRE. What's that all about? 

LIZ: The practice of SRE at Google started in the early 2000s, in response to many of the same pressures that Seth is describing of having systems not really be resilient and not be scalable when you're trying to build and run some of the largest software systems in existence. So Google engineers realized that they needed to apply the techniques of software development to operations-- that you couldn't run operations as a separate function, but instead you needed to have people with a combination of operations skills and software development skills working together to run and design these systems. 

So, SRE is a combination of several things in that it's both a job title that a bunch of humans at Google have, such as myself, and it's also a mindset and a organization, and it's a set of engineering approaches that we use to run better production systems. We tend to focus a lot on measuring service reliability and identifying what engineering changes do we need to make to systems in order to make sure that they're more scalable and maintainable. And this can mean everything from doing measurement of our systems to make sure that they're appropriately reliable, to developing automation, to being intimately involved in the design and figuring out how do we simplify systems. 

So it started at Google originally, but it spread to many, many different companies beyond Google. But in the end, it solves the same problems that Seth identified of having a wall between software development and operations not being a desirable thing at all. 

MARK: So it sounds like there's a lot of overlap between SRE and DevOps. Should I be doing SRE? Should I be doing DevOps? Which one's better? Which one wins? 

LIZ: It's all contextual. It depends on what's most likely to work in your own organization. It definitely is the case that, because of the fact there are so many different commonalities between SRE and DevOps, you can almost think of DevOps as being an abstract class or interface, and the SRE class being a concrete implementation of the DevOps principles. 

So, for instance, Seth talked about the idea of breaking down silos and trying to use common tooling, and that's something that definitely SREs feel and SREs do, in that we have the same set of tooling that we use on proactive development software engineering teams and SRE teams. We do measurement. We measure the level of service reliability. We have service-level objectives, which we'll maybe talk about in a little bit. We have the notion of using automation and tooling to solve problems whenever possible. That's the building software part of SRE that I talked about earlier. 

So in all these various ways, SRE is a very concrete and specific and prescriptive way of accomplishing the goals that DevOps also sets out to solve. 

MELANIE: Would you ever call yourself DevOps? 

LIZ: That is a very complicated and fraught question at Google because of the fact that Google came up with SRE at about the same time that other people were coming up with DevOps outside of Google. I definitely would say that when we're talking about SRE techniques and SRE best practices, that practitioners of DevOps will find that a lot of them apply to them, and conversely, we learn a lot from the DevOps movement. There are a lot of things that we take back in from the DevOps movement. 

MARK: So I guess, Seth, you could also say there are multiple ways of implementing DevOps outside of just SRE. 

SETH: Yes and no. I think SREs the only one that actually has a brand associated with it. So I'll give you an example-- we take one of those pillars, like accepting accidents and failures as normal. One of the things that many people who implement DevOps do is called postmortems, which is after an outage or an incident, we collect all of the data, and we have a meeting-- it might be internal, it might be external-- where we analyze everything, and we have next steps to how do we prevent this in the future, or if it happens in the future, how do we reduce the impact. 

In the SRE program, that's a key pillar. It's called out, and in many other organizations' DevOps programs, it's a key pillar that's called out. But actually, in no part of the DevOps manifesto does it say you must practice postmortems. So I think there are many ways to implement DevOps. I think SRE is the only one that I'm aware of that actually has a name and its own brand associated with it. 

MELANIE: What kind of tools are your favorite tools to use in your respective spaces of DevOps and SRE? 

SETH: DevOps is a cultural movement, it's not a technology movement, so everyone has their own things that they like to use. For me, I like tools that practice infrastructure as code and increase collaboration. So tools like Terraform, tools like Chef and Puppet and Ansible and Salt that let us take these abstract concepts like infrastructure, cloud providers like Google Cloud, systems like a Debian system, and capture the code and the process in not only a repeatable manner, so we can talk about automation, but what I like is that we can focus on collaboration. We capture this as code, and now we can put it in a pull request and a source repository, and we can collaborate on the changes. 

We can have our teammates coming in, and it's one thing to have someone standing over your shoulder in a terminal saying, yeah, that command looks good, and another thing to be able to actually comment on a pull request on something like GitHub and say, yeah, this change is good. So I tend to like tools that, obviously, solve a technology problem, but they do it in a way that is collaborative and encourages collaboration. So I think that's one of the key pillars of the DevOps movement. 

MELANIE: Nice. And Liz? 

LIZ: I think that the key to SRE is not necessarily using one specific set of tools, but instead saying, you have to use a tool. Pick one to accomplish this particular set of objectives. For instance, I agree with Seth that you have to have some kind of mechanism of having your config as code, having it checked in, having it repeatable, having it reproducible, having it be usable by automation, and I don't care which particular tool you use. And in fact, most of the tools that I used in my career at Google have been tools that are proprietary to Google, and that's fine. There are plenty of equally good tools available outside of Google that accomplish the same goals for people that don't work at Google. 

Another thing that I'd recommend, for instance, is-- you have to use something to monitor your systems. I don't care whether it's Prometheus or whether it's Datadog or whether it's Stackdriver, I just care that you pick a tool and stick to it. It's better than muddling around in the dark. 

SETH: Yeah, and I think to double down on that, it's not just important that you pick one. In a large organization, it's important that there's buy in. You can't have that team over there using Datadog and the team over there using Prometheus. That might work at a small scale, but these systems all need to talk to each other, so you need a centralized source for things like monitoring and alerting, or else it's going to be very difficult to actually visualize how these systems are operating and functioning at a very high level. 

MELANIE: Which plays into your whole fundamental around collaboration to begin with, right? 

SETH: Right. 

MARK: Yeah, it sounds like also, the culture of SRE and DevOps within your organization needs to be-- it's a culture. It's a company culture. 

SETH: Yes, definitely. 

LIZ: Yeah, absolutely. And I think that ties into another element of needing institutional support. Someone needs to provide a career path for your SREs or for your people practicing DevOps. You can't really say, this is my one DevOps engineer, or this is my one SRE, and they're going to do measurable stuff. You have to have a communicative practice. You have to have a mechanism of supporting them. 

MARK: Awesome. Liz, you said something earlier, and you said you were going to allude to it, so I'll pull it up now. You were talking about SLIs, SLOs, SLAs. We've talked a lot about them previously a little bit on the podcast, but people who haven't listened to previous episodes-- what are these things? Why do we care about them? 

LIZ: Sure. I'm happy to break that down. So we're talking about three key terms-- a service-level indicator, or SLI, a service-level objective, or SLO, and a service-level agreement, or SLA, and a service-level indicator is the basic building block of that. It's a mechanism of deciding-- is your service available enough? Is it healthy enough that in this instantaneous moment, you would consider it good? And then over time, you can aggregate that into a overall service-level objective that says x percent of the time my service level indicators should be satisfied. 

So you might decide it's OK for my service to be down for 10 minutes out of every month, or it's OK for my service to be down 20 minutes out of every month, or two hours out of every month. So you have to decide on what that threshold is, and that percentage is a service-level objective. 

And then a service-level agreement is a promise that you make to someone that has consequences. For instance, you might agree to remediate the issue and provide a post-mortem, or you might agree to provide money back to a customer if you fail to meet your service-level agreement. 

So to break down things a little bit further, a service-level indicator specifically tends to be some kind of key performance metric, and then it's subject to some kind of a windowing function and subject to a threshold. For instance, I might say my key metric is-- how fast does it take to load the home page of Google.com? And then I might say, OK, I want the 95th percentile of that latency distribution, and I want to make sure that that's always less than, say, 150 milliseconds. So then that generates, at any moment in time, a yes or no value. Is it good enough or not? 

And then I might say, I aim to have that satisfied, let's say, 99.99% of the time. And then that gives me an idea as to, is my service healthy enough? Do I have room in order to experiment? Do I have room in order to do deployments? Do I have room in order to do more experimental things, or do I need to slow down? Do I need to say, hey, wait a second-- we need to focus on stability for the next few months rather than undeploying as many new features as possible? 

So that's leading into the concept of an error budget, of the difference between one and your service-level objective, and then how much of that is left to spend based on how available you've been over the past number of months. 

SETH: So, Liz, all that makes a lot of sense, but how do you deal with a situation where you have-- we haven't mentioned it yet, but we know that they're called error budgets, which is basically once that SLO is exhausted, the remaining time is an error budget. How do you just prevent those teams from just ignoring it? How do the SREs have power within the organization to push back on the developers so that they're not just ignoring these agreed upon criteria? 

LIZ: It's a matter of collaboration that the service-level objective arises. The target itself comes from a collaboration between product management, SRE, and the product development software engineering organization, and we are empowered to push back, and we are empowered to escalate, if needed, to say we're endangering the service-level objective. We need to cut back. Or we need to do engineering changes, and to get people to agree on that. And in the end, if someone insists on doing super risky things and breaking the error budget, then we have the right to pull SREs off of a project and say, you know what, you can go and hire more software engineers to replace the SREs that are stepping away, but SREs are scarce and valuable, and we think that there are more projects waiting in line to have SRE support that are willing to stick to their error budgets and SLOs. 

MELANIE: Wow, that's great that you guys have that type of empowerment. 

LIZ: We know that it's not universal across all sizes of organizations. I think the key thing that anyone listening to this should take away is the idea that you need to have some kind of executive sponsor that's willing to decide-- here's where I'm going to allocate SREs, here's what's acceptable for them or not, and if you don't have that person, your SREs are probably going to eventually leave if the error budgets keep on getting broken, and they keep getting paged and feel that they can't do anything about it. 

MELANIE: Are there anything else that you'd say is crucial to make SRE a success for companies? 

LIZ: I think the other thing that's essential to making SRE successful, besides executive sponsorship and having agreed upon service-level objectives, is the idea of measuring how much time you're spending doing operational work, or toil, as we call it-- the idea that we should measure how much of our time do we spend that's doing work to stay running in place-- stuff like doing manual deployments, stuff like responding to tickets, stuff like making sure that the system is fixed once it breaks, versus what are we doing to make the service more sustainable and scalable in the long term? What are our long term projects? 

So that idea that we should have a budget of how much time we spend on toil and keep that below half the time that we have in the day, I think that's a key practice of SRE that prevents it from degrading into having a operations team running around, not really empowered to do engineering work. That's the thing that we use to guide, is-- are we spending less than half of our time doing that manual work or not? 

MELANIE: Seth, I know you were talking before about how much collaboration is a priority from a DevOps perspective, and I assume-- you've got similar-- like executive buy in as being something that's a factor of success. Are there any other factors of successes that you think are very crucial for DevOps to be successful? 

SETH: Yeah, I think automation, which we already touched on a little bit, is one of the key factors of DevOps. It's this idea that people get burned out as they continuously don't bring value to the organization. And this is traditionally one of the challenges with operations in general, is that if you're not bringing value to the organization, it's really hard to retain employees, because they don't feel like the work that they're doing benefits the company. So an SRE in site reliability-- engineering. They're engineers at the end of the day. 

And DevOps-- typically, folks practicing DevOps have engineering backgrounds like in software or computer science, so they want to actually be engineering. And they might not want to be building self-balancing red-black trees, but at the same time, they don't want to be running the tail command all day. So finding that balance between the toil and touching the system manually versus building these really great systems, whether it's a custom homegrown CI/CD for delivering things or custom alerting and monitoring solution or just integrating automation and orchestration across the entire cluster, to be able to bring value to the daily lives. 

MARK: Actually, to at that point, you're talking a lot about automation-- are you factoring in stuff like SLOs or SLAs or something similar in the DevOps space that would translate through to SRE, or how does those two things-- do they work together? 

SETH: So, there's nothing specifically in the DevOps manifesto that says how to measure things other than measure, so this is one of the big differences, and why we say class SRE implements DevOps is that the DevOps says you should measure stuff, and it doesn't tell you whether you should be using the metric system or the English system, it doesn't tell you you should be using Prometheus or Stackdriver or Datadog, so it's up to individual organizations to make that decision, whereas the SRE discipline is very much along the lines of leveraging tools like Stackdriver, et cetera. 

LIZ: And I think that that's an area where we've seen a little bit of divergence between DevOps and SRE that we're hoping to mend-- this idea of do we measure how many deploys per day that we do? What is the metric that we use to measure customer happiness? And that's why I think that it's important for everyone to start adopting service-level objectives. And because a good service-level objective is focused on what does the customer actually want to achieve? Can they achieve what they want? Rather than focusing on how many percent Pingdom success do I have, or am I shipping 1,000 deploys a day, but of them are breaking the bill, all of them are making customers unhappy? 

We have to agree across our industry on what makes customers happy, are we converging on the right number, and is this something that is sustainable for us? 

SETH: Yeah, and I think-- to rephrase that in a slightly different way-- is that the DevOps movement evolved out of making developers and operators happier, whereas the SRE movement evolved out of increasing customer happiness by building more reliable systems, and what you find as that-- Liz, I don't know if you agree or disagree with me here, but the practices are actually pretty similar. But that's why you'll tend to see the DevOps movement focus on things like deploys per day, whereas the SRE teams will focus more on latency and ping time and render time of the actual interactions of customers or users. 

MARK: Do you agree? 

LIZ: Yeah, I totally do. 

MELANIE: Seth, you briefly talked about CI/CD. Is CI/CD required to do DevOps in SRE? 

SETH: Again, yes and no. It's not specifically part of the DevOps manifesto, but automation is a key pillar here, and having these continuous integration and continuous delivery services such that I can push some code, whether that code is to provision infrastructure or an application, and I can test it in an automated fashion. While that's happening, I can be doing other work. I can bring other value to the system or the organization. 

And at the same time, what you'll find is that CI/CD is closely related to collaboration. Having the ability to perform continuous integration and continuous delivery ultimately leads to higher collaboration. So that's why it's part of the DevOps movement, but it's not specific required to do DevOps. 

MARK: Actually, now that I think about it, in previous times we've talked about SRE culture, we haven't really talked about continuous integration and development, but that seems like something that would potentially reduce errors and things going wrong. Liz, where does that fit in? 

LIZ: So similarly, SRE doesn't say you have to do CI/CD, but we do rigorous risk analysis to figure out what risk factors might prevent us from meeting our service-level objectives, and it winds up being the case that if you are manually doing deploys, and if you're manually doing builds, you're going to be delivering defective software more often, you're going to be spending a lot of time rolling back in case of outages, and that adds up and eats into your error budget and eventually leads to unhappy customers. 

So we practice CI and CD as a consequence of wanting to fulfill our error budgets and as a consequence of wanting to keep the amount of manual toil that we do under control. In SRE, we do error budgets and toil budgets, and we also have baked into our systems, because of a lot of our developer productivity tooling, the notion of having reproduceable builds already done for us, that the proactive development software engineers already come to us with these things, and they typically need help with-- how do we roll this out in a scalable manner? How do we detect failures earlier? So its working on more of the advanced aspects of CD where we really shine. 

MELANIE: Nice. On a slightly different note, how do you collaborate with security teams? Or, what are best practices for SRE or DevOps to integrate into and communicate with security? 

SETH: There's actually this sub-movement of DevOps called DevSecOps-- the Sec, obviously, standing for security there in the middle. There's also DevMarketingOps. You can put any word in the middle that you'd like. And it's this idea that security, just like operations, shouldn't be it's own department that does its own thing. Instead, it should be embedded with these teams who are working closely. It's much easier to fix a software problem, whether it's security or operations, closer to the codebase than once it reaches this arbitrary governing body that says, yes, this is secure, or no this is not. 

And what you also find is that having someone embedded on the team who is security-minded or security-focused can often have more context going into a security review than just handing thousands of lines of code over to some third party team. And not only does it take them time to understand the code and the goal of the system, but then also they have to review it for security. 

Obviously, security is something paramount to Google. It's something that runs in our blood. So we have dedicated security teams here, but we also have people who are constantly thinking about security from a software engineering perspective, embedded on different teams, and the DevSecOps culture is really the same thing. It's-- let's not just break down the barriers between developers and operators, let's break down the barriers between developers, operators, and security teams, because they're also traditionally viewed as this place where dreams go to die, for lack of a better word. 

There's two places where dreams go to die-- the security team and the legal team, and if we can get those teams to collaborate and work closely from the beginning with the software engineers and the operators, it improves the likelihood of the success of the project over time. 

MELANIE: And Liz, did you want to add anything around SRE? 

LIZ: SRE and security really go hand in hand. In particular, SREs are empowered to shut off a service if it poses a grave security risk to people. That's kind of-- 

MARK: Big red button? 

LIZ: Yeah. You have you have to put the users first, and protecting our users is the first priority that we have, even above the number of nines. It's better for Google to be down than for Google to be posing a security risk to our users. Furthermore, there are a lot of SREs move back and forth between SRE and security and privacy. The mindsets are very closely aligned, because SREs are constructively pessimists, and that's the case with security and privacy teams as well, that we wanted to help you do the right thing, and that we're also prepared to think of what can possibly go wrong and how can we guard against that, rather than say, what can possibly go wrong, and therefore you can't launch. No, that's not what we say. 

I think another interesting nuance there is that the approach of SRE teams that Google is closely aligned with privacy and security, with regard to building frameworks that do the right thing out of the box. That's a thing that we've started doing in the past six or seven years at Google to really focus the development efforts in SRE upon not just what do we do in one individual product, but how we make sure that everything bakes in the right default, whether it be for reliability or security or privacy. 

MELANIE: That's great. Thanks Liz. So one other question I have for you both is, what do you enjoy most about SRE? 

LIZ: I think the thing I like the most about SRE is that it's really a cross-disciplinary collaborative team, that we have a whole variety of different SRE teams all up and down the stack at Google that all work together every single day to make sure that Google is appropriately reliable, and also that we have so many different skill sets on those teams. Whether people come from systems engineering or systems administration backgrounds, or traditional software engineering computer science backgrounds, or humanities or physics backgrounds, we all work together as a team, and we solve these really challenging problems and make Google work at scale, and that's what really makes me love my job. 

MELANIE: And then Seth, what do you enjoy most about DevOps? 

SETH: I-- basically the same thing. The DevOps community is this incredibly diverse group of people, ranging from folks with backgrounds in theater and arts and software and math and physics, and being able to not only interact with those people, but see how their experiences and their backgrounds bring different solutions to mind. That collaborative nature is truly inspiring. To see the different ways that people think and the different ways they arrive at conclusions, sometimes the same, sometimes different, and how that can lead to ultimately making better software and making customers happier. 

MARK: And if people want to learn more about DevOps, do you have any particular places you like to send people? 

SETH: Sure. You can all call me. My phone number is-- I'm just kidding. So there's quite a few places to learn about DevOps. There's obviously Wikipedia and stuff. DevOps is a little bit weird, because there is no one true definition of DevOps. It's something that a couple of companies have tried to grab onto and claim it as their own brand, but ultimately it's an organic movement started by a community. So everyone does have their own slight definition or slight lens which they see through DevOps, so I actually recommend people look at what DevOps is not before they start looking at what DevOps is. 

And there's a lot of really good articles out on the internet that will explicitly say this is not DevOps. A quick search of the most popular search engine will show you what is DevOps. Look for things like myths of DevOps or what is not DevOps, and you'll start to get a better idea of what it is, and how you can start. 

MARK: Cool. We'll put some in the show notes. Liz, if people want to get involved with SRE or learn more about SRE, where do you think they should go? 

LIZ: The resources that we have for SRE revolve primarily around the SRE book, which is published by O'Reilly and authored by a number of Google engineers. There's also two upcoming books about SRE also being published by O'Reilly, namely the "Site Reliability Workbook" and "Seeking SRE." One of those is written and compiled by Google. The other one is written and compiled by a friend of mine who now works at Microsoft. And we also have the google.com/sre website in which you can go read more. 

MELANIE: Nice. And I was going say, I know we also have your video series that touches a little bit on SRE and DevOps that has season 1. And anything else that you guys wanted to talk about in terms of SRE, DevOps that we haven't covered? 

SETH: Liz and I are always looking for new and exciting things to talk about, so if any of you have ideas for a potential season 2 for the DevOps and SRE video series, please give us a shout out on Twitter. Our handles will be in the show notes. 

MARK: Liz, anything else from your end? 

LIZ: And there's also the Google Cloud Platform blog, where members of my team-- the customer reliability engineering team-- publish best practices and other things that we've learned from working with large CCP customers. 

MELANIE: Fantastic. 

MARK: Well, thank you to both you-- Liz, Seth-- for joining us today, telling us about-- 

SETH: I think everyone is a winner with DevOps and SRE. 

LIZ: Agreed. 

MELANIE: All right. 

MARK: Thanks so much to Liz And Seth for joining us for the podcast today. I think that potentially solves which wins, SRE verses DevOps. Well, everyone wins. I feel like everyone wins. 

MELANIE: Everyone wins. 

MARK: Everyone wins. Awesome. So let's move forward to the question of the week. So the situation is that, in theory, I'm a researcher at a regionally accredited academic institution, and in an ideal world, I would need to be to do some research, and I need some compute resources to do that. Is there a way where Google Cloud can give me some possible credits or anything like that to make my life a little bit easier? 

[CHIMES] 

MELANIE: Why yes, Mark. There is! I'm glad you asked. And the reason why there is, is because we've just announced a new credits program for researchers specifically, which, for our listeners out there who might have heard us talk about this in the past, there's been a couple of programs we've talked about for education and for other areas, but this is specifically targeted for researchers and researchers who, as Mark is saying, are from accredited academic institutions for certain countries. It's limited right now to certain countries, and there's a list on the site. The amount of the award is $5,000, and there's an application process, and it's an ongoing-- it's a rolling application process, so it's not a specific time frame. 

I know that I regularly get this question from people I talk to who are out there in the research communities, that the biggest need they have right now is compute resources. So this program is specifically targeted for them and to help expand. And it's interesting too, because on the link that we'll share in the show notes, they talk about some of the different programs that it's supporting, and the just significant amount of petabytes of data. They're using it at-- Ryan Abernathy, who's assistant professor of earth and environmental sciences, the ocean, and climate physics at the Lamont-Doherty Earth Observatory at Columbia University, is using this through an NSF partnership, and with his team, they're developing open source platform to manage the complex data sets of climate science. 

MARK: Nice. 

MELANIE: And this platform, called Pangeo, can run earth systems modeling simulations on petabytes of high-resolution three-dimensional data. 

MARK: That's cool. 

MELANIE: It's very cool. It's cool to solve science problems. OK, Mark, are you going to go anywhere in the next couple of weeks, next couple of months? 

MARK: Yes. Well, I'm actually not going anywhere like traveling-- 

MELANIE: You're speaking somewhere? 

MARK: But I will be at the monthly SF Game Developers Community meet up on the 30th of May. I'm going to do a presentation called, "You Can't Just Add More Servers." 

MELANIE: Sometimes you really just can't. 

MARK: Sometimes you just can't. 

MELANIE: So, that's great well. I will be, this week, speaking at the Understanding Risk forum in Mexico City on the 17th. So if you're there, come find me and say hi. And outside of that, I think we'll both be mostly around San Francisco. 

MARK: Yep. 

MELANIE: So, Mark, one other thing we should touch on before we head out-- how will people get in touch with us if they want to get in touch with us? 

MARK: Ooh. So if they want to reach us on email, it's hello@gcpodcast. 

MELANIE: If they want to reach us on Twitter, it's GCP Podcast. 

MARK: If they want to reach us on Reddit, it's /r/GCP Podcast. 

MELANIE: Google +, it's + GCP Podcast. 

MARK: If they want to find us on the internet, it's gcppodcast.com. 

MELANIE: And on Slack, you can request an invite to the Google Cloud Slack community and join the Hashtag Podcast channel. 

MARK: That's at bit.ly/gcp-slack. 

MELANIE: Nice. 

MARK: Excellent. Well, Melanie, thank you so much for joining me for yet another week on the podcast. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening, and we'll see you all next week. 
{{< /transcript >}}