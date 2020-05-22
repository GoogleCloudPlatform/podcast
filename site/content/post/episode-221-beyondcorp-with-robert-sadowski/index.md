+++
audioDuration = "00:45:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.221.mp3"
audioSize = 65681796
categories = ["Cyber Security", "Remote Work", "BeyondCorp"]
date = "2020-05-20"
description = "On this episode of the podcast, our old pal Mark Mirchandani is joined by special guest host Max Saltonstall to talk trust and security products with fellow Googler Rob Sadowski."
draft = false
episodeNumber = 221
hosts = ["Max Saltonstall", "Mark Mirchandani"]
title = "BeyondCorp with Robert Sadowski"
image="/post/episode-221-beyondcorp-with-robert-sadowski/images/hero/hero-EP-221.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/gnhd3c/episode_221_beyondcorp_with_robert_sadowski/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On this episode of the podcast, our old pal [Mark Mirchandani](https://twitter.com/markmirch) is joined by special guest host [Max Saltonstall](https://twitter.com/maxsaltonstall) to talk trust and security with fellow Googler [Rob Sadowski](https://twitter.com/RobSadow). BeyondCorp is Google's answer to allowing employees to use company networks on any device while outside the building in a way that is both secure and efficient. Users are authenticated per session and per device to give access only to the specific person, on the specific device, for the specific job each time. In addition to the thorough authentication process, BeyondCorp continues to monitor device metadata during use as part of the system's decision to continue to trust (or not trust) a user. With this information, if a user accidentally exposes the system to malware, for example, access can be revoked quickly. 

Max and Rob explain the steps Google went through to create such a state-of-the-art security program and give tips on how companies can build something similar. Codifying your employees' needs and preferences, detailing the levels of trust you'll allow, and thinking ahead about where in the world your employees will be when they access the system are some of their tips. Rob stresses how complicated the system was to build from scratch and emphasizes that with BeyondCorp Remote Access, companies don't have to build a whole new system.

BeyondCorp Remote Access offers automatic scaling and world-wide points of presence for a fast user experience anywhere in the world. Companies can define access rules for each user, setting trust levels and parameters for who can access what parts of the network. Rob points out that this is a great solution, not only for employees who find themselves working from home due to the current global climate, but also for freelance or contract workers who only need access to parts of the internal system.

<!--more-->

##### Rob Sadowski

Rob Sadowski is the Trust & Security Product Lead for Google Cloud at Google. He is responsible for creating and delivering Google Cloud’s security message, spanning platforms, applications, and connected devices. 

##### Cool things of the week

* Using Bigtable’s monitoring tools, meant for a petabyte-scale database, to… make art [blog](https://medium.com/google-cloud/using-a-petabyte-scale-databases-monitoring-tools-to-make-art-8aa8eb17234)
     * GCP Podcast Episode 192: Cloud Bigtable with Billy Jacobson [podcast](https://www.gcppodcast.com/post/episode-192-cloud-bigtable-with-billy-jacobson/)
* A simple, secure way for teams to meet and work: G Suite Essentials is here [blog](https://cloud.google.com/blog/products/productivity-collaboration/now-available-g-suite-essentials)

##### Interview

* BeyondCorp [site](https://cloud.google.com/beyondcorp)
* BeyondCorp Remote Access [site](https://cloud.google.com/solutions/beyondcorp-remote-access)
* BeyondCorp: A New Approach to Enterprise Security [paper](https://research.google/pubs/pub43231/)
* BeyondCorp: Design to Deployment at Google [paper](https://research.google/pubs/pub44860/)
* BeyondCorp: The Access Proxy [paper](https://research.google/pubs/pub45728/)
* Migrating to BeyondCorp: Maintaining Productivity While Improving Security [paper](https://research.google/pubs/pub46134/)
* BeyondCorp: The User Experience [paper](https://research.google/pubs/pub46366/)
* BeyondCorp 6: Building a Healthy Fleet [paper](https://research.google/pubs/pub47356/)
* NYC Cyber Command [site](https://www1.nyc.gov/site/cyber/index.page)

##### Tip of the week

This week, Max talks about [2-step verification](https://www.google.com/landing/2step/), security keys, and why you need them!
     
##### What's something cool you're working on?

Max is working on Stack Chat at Home (coming soon!), [BeyondCorp in a Bottle](https://www.youtube.com/watch?v=TtmsV-xq0r0&list=PLIivdWyY5sqLvoPf2pMI2uIz1FLSfphCh), as well as [Ring Fit Adventure](https://ringfitadventure.nintendo.com) and Just Dance video games.

##### Sound Effect Attribution

* "Clarinet Multiphonics" by  jfcharles of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everyone, and welcome to episode 221 of the weekly Google Cloud Platform Podcast. That's 221 in case you can't read numbers like myself. I'm Mark Mirchandani. And I'm here with my special guest star Max Saltonstall." >}} 

MAX: Thanks, Mark. Glad to be here. 

MARK: How are you doing? 

[CLARINET PLAYING] 

MAX: I'm doing pretty well. I think I'm awake. I've consumed some caffeine. And the clarinet music has mostly stopped from the other room. So the nosebleed should be minimal unless there's an emergency outside my window. 

[SIRENS WAILING] 

MARK: A clarinet emergency. 

[CLARINET PLAYING] 

Well, it's great to have you here, Max. And of course, you're a special guest star today because we also have a super cool interview today. Can you tell us a bit more about who we'll be talking to? 

MAX: Yeah. You're talking to me. You're also talking to Rob Sadowski. Both of us work on security within Google Cloud. So we're talking about BeyondCorp remote access, how Google took this journey over the past nine years or so to shift to a zero trust security posture, and how we're helping all kinds of companies and cloud customers adopt some of those zero trust practices and change their security. So that as people are working from home, they can give them access to the tools they need while also making sure those connections are safe. 

MARK: Yeah. I think it'll be a great conversation. And it's really helpful to hear more about BeyondCorp. There's probably a lot of resources on it now. But maybe a refresher would be helpful, especially because there are so many people who are just constantly entering cloud for the first time. What does that look like? What does that enable for my security, those sorts of things? 

MAX: What I really like about the products that we just recently launched to support it is that you can actually put those in front of on-prem systems. So there are some clients who have really old systems or really strange sets of requirements around how they run their workloads. They can't move to public cloud anytime soon. 

Either they've invested heavily in private cloud, or they have regulations restricting where they can put their data or their computation. You can still do this access model in front of those on-prem workloads. And so you can enjoy a lot of the fine-grained access control and safety and load balancing without having to shift the workload to the public cloud. 

MARK: Well, that's awesome to hear, and I think we'll dive deeper into that during our conversation. But before we do that, why don't we go ahead and jump into our cool things of the week? 

MAX: Theme music. 

[MUSIC PLAYING] 

MARK: Well, for my cool thing of the week, I have a blog post written by Billy Jacobson. I don't know if you remember him. He was on episode 192 of the podcast. 

MAX: In the before times, we actually sat near each other in New York City. 

MARK: In the before times when there was a very different set of circumstances, but it's in New York, right? 

MAX: Yeah. 

MARK: So Billy was on episode 192 talking about Bigtable. And one of the interesting things about Bigtable is that if you query the same sets of keys, basically, you might run into performance issues. It's like a hot spotting issue. Bigtable actually released this cool tool called the key visualizer that helps you, well, visualize where your keys, how they're spread out. And then you can more easily identify a hotspot and say, OK, maybe I need to restructure my data. 

Well, Billy took a look at this and he wrote a blog post about using the key visualizer to recreate some classical works of art. So he goes through all the detail there. But it's super, super cool. And it's really interesting. And it's such a fun little way to look at that, so I highly recommend people check it out. It's just a cool read. 

MAX: I remember him showing me a little bit of that actually in person when we were in the office. And it was also hilarious how much data it took to actually create some of those hotspots because what he was doing was laying out all of this data to fill up a database but then only querying specific chunks to essentially make pixels for these iconic images, which meant he had to put a lot of data in there that he was never going to query and then some data that he was going to query over and over and over and over and over. 

MARK: It's an interesting one. And yeah, it takes like 10 gigs, I think, for one of the images. It's impressive. It's just a cool off the wall thing. I really enjoyed reading it. 

MAX: I was excited this week to see G Suite Essentials come out. I'm a huge fan of Docs and Sheets and Slides and this real time collaboration, especially when we're all stuck at home, and I can't just walk over to someone's desk. Being able to work in the same document or the same spreadsheet at the same time as other teams and other people is a lifesaver. 

So what the G Suite team did is they created a new version of the G Suite toolset that just gives you Drive, Docs, Sheets, and Slides along with Google Meet, the professional video conferencing, so that you can have this shared documents and real time collaboration for free at least through the end of September, even if you're using something else for mail and calendar, so you're not using G Suite as your primary communication mechanism. You can still have all of the collaboration and then integrate it with things like Slack or Salesforce or Microsoft Office or Outlook or all these other common business tools. I'm pretty excited to see that. 

MARK: Yeah. It's definitely awesome. I think a while back, I had a Gmail and then got into the whole Google Docs interface. And I should say Google Drive, right? Because it has all docs and slides and whatnot. And it's been hard to come back. I mean, it's such a great set of tools. And so I think it's super, super good to see a lot more accessibility and availability for it. 

MAX: I remember many years ago before I joined Google, I was doing IT at an art school. And as I was starting to get ready to leave that job and I was hiring new people and new assistants in the IT department, I just had this one master Google doc that had all of the weird arcane steps you had to do to troubleshoot this printer or this spreadsheet of the serial numbers and the log ins to all the different manufacturer websites. And having that one source of truth that everybody on the team could go and edit or consult was a lifesaver instead of having to sift through emails or find paper in a filing cabinet when you actually had to be in the basement to get to the device in question. It was huge. G Suite Essentials. 

[CHIMES] 

The other thing I've also found useful is having a video chat with one or more people and then having a doc at the same time, right? So if you're having a brainstorming meeting, you might want to just type a lot of ideas into the doc but all be able to see it and build on that or expand it. Sometimes I'll write outlines for new videos or blog posts with a teammate. And being able to talk and see each other but also write in the same place at the same time has made us so much more productive than if we'd had a back and forth of, let me send you something. And then I wait for you to send it back to me and blah, blah, blah, blah. We don't have to deal with that anymore. 

MARK: Yeah, the collaboration is so much easier with tools like these. All right, well, I mean, I think that we want to probably dive in our interview now because I know it's chock full of content. So why don't we go ahead and jump right into it. 

[MUSIC PLAYING] 

Thank you both so much for joining us. Can you give me a quick idea of who you are and what you do? 

MAX: My name's Max Saltonstall. I'm a developer advocate within Google Cloud, specifically focused on online content and security and IT stories that we think can help customers at Google. 

ROB: Hi. And I'm Rob Sadowski. I work in the product organization at Google Cloud on trust and security, really all aspects of that. And most recently, I've been working on a product that we launched called BeyondCorp remote access. I think we're going to talk a bunch about that today. 

MARK: Yeah, absolutely. And so in that same vein of security, let's first talk about, what is BeyondCorp? We've mentioned it a lot. I think Google has done a great job of trying to bring this out there. But I don't know that we've actually sat down and really talked about it, especially on the podcast. So let's talk about that. What is it? 

MAX: A while back, Google had a sudden realization that we needed to move beyond the concept of a corporate network. So BeyondCorp comes from beyond the corporate network. And like many companies, we were operating with that same paradigm of you're either inside the corporate network. We can get access to all the services, all the tools, all the applications. Or you're outside where you have no access. 

The way to be on the inside is either come into the office and sign into the office wired or wireless networks or use something like a VPN to get inside from home or when you're remote or traveling. This model broke down. This model didn't accommodate for people who are traveling all the time, didn't accommodate for different form factors like phones and tablets and watches. And it actually proved to provide a lot less security than people felt it offered. 

Having that big wall around your moist, gooey center of network feels like a good way to secure things. But all it takes is one piece of malicious software, one compromised set of employee credentials, or any number of other intrusions, and, all of a sudden, they're past the wall. There's nothing really stopping an attacker from gathering a lot of dangerous information from inside your network. 

ROB: That's why attackers, they prize getting VPN credentials. That's the keys to the kingdom. It's one of the things they look for. Because once they're in, they look just like a normal user. 

They can do what we call move laterally. Like you said, they have access to any application or any resource potentially when they're on the network. And they blend in, look just like a normal user. So that model really doesn't work very well. 

MAX: So we needed to shift and make sure we were doing better defense in depth and much better authorization checks. So we wanted to only give someone access to a resource when we really trust that they are who they say they are and that they are using a device that we want to give trust to. And even after we've done those two things, we want to only give them access to the one thing they're supposed to have access to. So it's not a blanket, you're in or you're out. It's per session, per person, per device checking to see, do I let you in or not? 

MARK: So let's talk about how that compares to, I guess, this traditional model, right? So this idea that you put up a VPN or some kind of outside connection, you are checking somebody for who they are, right, because you check a username and password or some other form of authentication. And sometimes you'll check a device, but that's about it. And like you said, once they're in, they kind of have access to everything. And that's obviously where the advantage for a hacker might be. Because once they compromise someone's password, it's a free for all. So what does that actually look like for actually doing the authentication after that first initial layer? 

ROB: Yeah, Mark, I think that when you talk about that, I mean, you're assuming almost best in class kind of thinking here is that I think most organizations, when they're allowing someone to get in, when they're using a VPN, a lot of times, they're only using username and password. They're only focusing on the person. They're only focusing on the identity. 

We're still in a model where we're trying to get organizations to implement two-factor authentication or what we here at Google we call two-step verification, something stronger than a username and password, to get onto that network. So this idea of the device actually for many organizations is not something they do today. And so that's, I think as Max pointed out, one of the core tenets of BeyondCorp is that it's not only the user. But it is the device, that we're taking multiple factors. We're considering multiple things in context. 

And then we're applying this idea that, OK, I know who you are. I trust the device that you're coming in from to a certain degree. Once I know both those things, what do I then allow you to have access to, building multiple layers or requiring multiple assumptions to be met before we give you access. That's kind of how Max talked a little bit about defense in depth. We're going to consider multiple things before we actually give you access to that resource and, again, very importantly, only that resource. So it's not like you're in or you're out. If you pass all those criteria, you're in to the one thing that you're supposed to have access to. 

MAX: On top of that, we are gathering data about those devices from multiple sources and updating it very, very frequently. So you could actually go to a site, get authorization, say, an internal service. And then if you manage to click on a phishing link or grab some malware that you thought was a cool Minecraft add-on, all of a sudden, your access could be revoked or your trust level dropped. 

And that has to happen quickly. Because once an attacker can, say, take over that machine where they've already authenticated, they've already gotten into the VPN, there is a huge amount of damage that that attacker can do in just a few minutes time. And one thing I don't see very many companies doing is that up to the minute device metadata being part of the trust decision. And it wasn't just a binary trust decision because that gets you back to an in or out. 

We actually will have multiple tiers of trust. So a device might earn high trust or medium trust or low trust, based on its current state. Like, how recently did it get an OS update? Or how recently have its antivirus definitions been synced. And any given service or application has a required level of trust you need to earn. And then, we'll compare those. 

ROB: I think it's such an important point to underscore is that we are checking the criteria that we've set for access on every transaction, every interaction, every hit to the back-end app. Are all of those criteria met? So for example, again, if you have been compromised, if you've switched devices, if something has changed in your session that has raised your risk profile, the system might determine that look, we don't trust you enough to give you access to this resource anymore. That's a huge step up for, again, you're either on or you're off, you authenticated once and you're good, that most of today's models kind of implement. 

MARK: In that same way, you simply couldn't implement a whole system like this just by flipping on a security switch, right? Like, there's a lot of pieces that are required that you kind of have to build into every layer of authentication, into all of your services. How did Google actually implement this, back in the day? 

MAX: I'm going to tell you that story. But I also want to preface it with I don't want other companies to try to build this from scratch because it was hard. It was a lot of work. There was a lot of stumbles along the way. And hopefully we've learned, through this journey, so that we can help other companies do it more easily. But the way we had to do it had a lot of different pieces. We had to make sure we had a strong sense of the user's context. So are they secure? Are they browsing safely? Do we know what their device is? Do we know who they are, and what groupings they're part of? So we know that say, somebody in legal can get access to this current litigation service but somebody in engineering cannot. 

That actually required a lot of restructuring of how we organized jobs at Google, which we didn't really expect to have to do. Then, the access proxy itself was a fork of our global load balancers. And so we had to create this central location where all these requests would get fed into, that could handle not just the load of many, many requests but load coming from all over the world. And if that just existed in one or two locations, somebody far from those locations would get two times or three times the latency than they should. There was a whole policy discussion element to this, as well. So what defines earning high trust? And what kind of services or back-ends would require high trust or medium or low trust. So that was a collaboration between application teams, marketing, legal, finance teams, IT teams, security teams getting that policy together, then, codifying it. 

So that, in the end, we can look at say, Max's laptop, Max's account, Max's authentication, and see what is he authorized for, based on groups that he's in? How much trust can his laptop get, right now? And then, this application that he's accessing, do I say yes or no? Because it still comes down to a yes or no decision that the proxy makes at that load balancer level. And we want that to be completely invisible to Max or any employee. So they're not having to jump through extra hoops or go through extra sign-in or authentication phases. If I'm already signed in, I'm already authenticated in this browser, I should be able to just get to the thing. So we can actually reduce the friction while increasing security. 

ROB: There's a couple important points in there that Max made, that I want to, again, kind of underscore. A lot of this, Mark, like you said, it's not flipping a switch. It's not just the technology. What we learned through a lot of this was that you have to have good operational processes in place that you can then layer the technology underneath. So if you don't have a good sense of who are the different users in your organization? How do they naturally cluster into groups? That might be by job function, it might be by the criticality of information they need to access, and so forth. This is going to be hard to implement. If you don't have a good inventory of all your corporate owned devices that you trust, this is going to be harder to implement. 

If you haven't thought about what type of applications users might need access to, remotely, that might be a challenge. If you haven't thought about where users may be traveling in the world, and where you might need bandwidth, and things like that. For us, Google-- who operates a giant global network, we'll talk a little bit about this, I think, coming up-- that's not a problem. But for others, you need to think through that. So if you don't have a good operational handle on your users, what they're accessing, who they are, have a strong policy that you can then codify in a solution like this, it's going to be harder to do. So I think one of the things that we learned, and one of the big lessons learned, if you're not buttoned up on some of those things, the technology implementation is going to be a lot harder. 

MAX: And one of the big challenges, getting to that new baseline, was actually the migration. So we had a lot of work to build this thing, and we were building it from scratch. Because we looked at what was available in the marketplace 10 years ago, and there just wasn't anything that met our security expectations. And we had strong leadership buy-in, which is essential for any kind of change management at this scale. If we didn't have Larry and Sergei, from the top, and all the security leadership saying yes, you have to do this and we're going to support it, it wouldn't have worked. 

But getting everybody over to that model was actually really hard. Because we had to switch how everybody got to the things they need, every day, to do their jobs, without anybody noticing. And that involved a lot of logging what people are doing on the network, simulating it with a playback, checking to see, are we going to break Mark by shifting him over? Well, I can probably find out, based on looking at what kind of services he's had to access, over the past month or two. And that was a whole other set of infrastructure that Google had to build to automate so that we didn't have 50,000 people walking up to our service desk saying, hey help me undo this. I can't file my expense reports. That would be terrible. 

And automating and troubleshooting, at scale, was a really important part of making this change happen, and something that I often encourage these companies to think about, who are trying to shift to this model, is you need to understand, first, a very small segment but eventually the entirety of your workforce. And understand what do they need to do to do their jobs? And how are they getting to it? Because if you just try to flip a switch-- and I think a lot of people want that, as you said-- it's going to really make a lot of people angry. And it's going to frustrate IT. It's going to frustrate those internal client groups. So focusing on a small group that you have high confidence with, and then, working closely with them, you can learn the methodologies that you need to expand over time, so that you can scale to say 200,000 people. 

ROB: That's so important, in any technology implementation, is that it has to be incremental. I mean, again, this notion of flipping a switch, where the flip means everyone in the enterprise is going to start using this, and have this new model on day one, is just an unrealistic assumption. It's not something that we did. We started with Groups, and made sure that worked, and learned a bunch of lessons, and were able to apply continuous improvement, and go on from there. And then, add another group. And then, add another app. And it kind of builds, naturally, from there. 

And I think, another point that Max made, that I just want to underscore a little bit, is that you can do all the planning-- you know, I talked about getting all your operational processes right-- but guess what, your assumptions are not going to match reality. And so doing controlled roll-outs, looking at what happens, you know, looking at the logs, looking at user behavior, looking at what are the calls that came in to the help desk, and say, oh, well, that's not what we thought was going to happen. Or that's not what we thought was happening. And the ability to course correct and go on top of that was critical in this process of roll-out. It's probably critical for almost any IT project that someone does. 

But here, it was just you don't know what you don't know. And so building in, thinking, and timing to course correct, when you do get that good data, was important for us, and will be important for anyone trying to do this. 

MARK: Yeah, so I'm curious. I mean, obviously, that brings up a great point. Right now, more people are remote working than probably ever, right? We have such a huge number of companies who are shifting the way they think about these things. And you all have been talking to a lot of customers, recently, I'm sure, about this very same, like, how do I implement some of these principles? So I'm curious, how are companies looking at this huge influx of remote workers? But then, also, on top of that, how can they start thinking about implementing these principles? 

ROB: I think that because we've been talking about BeyondCorp since 2011, when some of the work-from-home pressure started, like you said Mark, we've got a lot of incoming requests from customers and non-customers, like, Google how are you doing this? It seems like you've been doing it for quite some time. Because as you point out, I think that we've all realized, if we didn't realize it at the beginning of some of this pandemic, is that remote work is currently, and is going to be, the new normal. Some of the data that we have is that, in the US, about 3% of people across various industries work from home more than one day a week. 

MAX: 3% in the "before" times. 

ROB: It's quite a bit more, right now. But the prediction is-- and thinking about going forward-- it's like 25 or 30. And maybe that feels even a little bit under-counted. Gartner did a survey back in March. So right when we were kind of in the middle, or kind of at the beginning of this-- this is of CFOs, the people who control the money-- and almost 3/4 of them said that they plan to shift some employees who were in the office to permanent work from home. So again, this is the new reality. And the challenge that many orgs were facing, is that they hadn't adopted a model like this. 

They didn't have this flexibility. They were relying on the model that we've relied on for more than a decade. Which is OK, I'm going to use a VPN. I'm going to put everyone on the network virtually because they can't come in the office. And that was a big challenge. Because they weren't prepared for the influx of users that were going there. You know, created capacity issues, created a lot of questions into the help desk and into IT support. You know, I've never used a VPN, what am I doing here? Those organizations who were following some best practices, in terms of using strong authentication. Well, now, someone has to use an app or a token to log in and that's an experience they're not used to. 

They need to get a VPN client on a device that'll help them do this connection. Well, if they aren't in the office, we can't use some of our software distribution mechanisms. So a lot of operational challenges that make VPNs not a great fit, especially if you're only looking to get access to a couple of apps. Especially web-based, browser-based apps, where there's a nice, simple experience. You know, why can't I just browse to that URL? VPNs aren't the best solution for that. 

And so what we started to have discussions with them on, was exactly kind of a little bit of what we've been talking about for the past several minutes, which is what do we do? How did we do it? How do we think about it? And how can we focus on that narrow set of applications that we can't get access to now, because we're not in the office, and do it in a much easier way than rolling out existing VPN technology to that community of users? 

MARK: So with that being said, what are the resources that are available to people, to learn more about it? Because obviously, not only is it a technical implementation, like you said earlier, Max, you need the leadership buy-in. You need to get testing and IT involved. You need to get the users to agree to this kind of thing. You need to be able to solve for that. That's a lot to deal with. So what resources are available? 

MAX: We've got two buckets here. We've written a lot, both in blogs and in research papers, around what we've done-- how we've thought about the process, how we've designed it, how we've moved to it. But I think Rob has some exciting things, today, that might be a little bit faster than trying to build it yourself, which I still don't recommend. 

ROB: Right. So one of the things that we did was that we actually introduced a product, based on a lot of the core BeyondCorp technology, essentially productized a lot of what we had built ourselves, and allowed customers to use that and adopt it. And we called it BeyondCorp Remote Access. So really kind of narrow down the specific use case that this is good for. And what it does is it provides what we think is simple, secure, remote access to internal web-based applications. So I have a web application, whether I'm running it on a web server inside my own infrastructure, or inside my own data center. If it's an organization that has moved to the cloud, that has adopted public cloud infrastructure and technology, if they're hosting that application on GCP, or if they're hosting it on some other cloud. 

So they may be on Amazon Web Services, they may be on Microsoft Azure, either way, we can use our technology to give the users access to those internal web-based applications, wherever it is. And basically, like Max was talking about, from an end user experience perspective, you just open your browser, you browse that URL that you normally do, and you're in the app. It feels just like a very similar experience to whether you're in the office or not inside the office. But on the back end, behind the scenes, we're doing all the things that Max talked about, that the BeyondCorp technology does behind the cover. So we implemented that access proxy that he talked about, in terms of you go up, and what happens is traffic is actually proxied through the Google network. 

And what we're able to give customers there is, they get defense against denial of service, we make sure that that scales up, and they get to take advantage of the many, many, many points of presence around the world that Google's network has. The second thing is, we've implemented that policy side, that policy engine, that Max talked about, inside Google Cloud. So you can set the access rules. You know, here are the users, or groups of users, that can access this application. 

And then, you can layer on additional rules that say, OK, I may also want to say that they have to come in from a trusted device. What's a trusted device? Well, it's running the latest version of operating system. It's something that has a corporate certificate on it. It's something that was issued by the organization, because we know its serial numbers, things like that. And you can construct policies that say, OK, if you're this person and you meet these criteria, you can get access to this app. And so it really takes a lot of the architecture and technology work that was there, and allows customers to do the thinking about who, and the policies, and implement that really, really quickly. 

MARK: And so for people who are developing solutions on any cloud, like you said earlier, it kind of sits on top of everything and it just does the authentication, the rules. Is it fair to say that a lot of the development inside of Google Cloud take some of these BeyondCorp principles into account, when it comes to service accounts and these privilege roles, those sorts of things, are the security recommendations there in line with BeyondCorp? 

ROB: I think that what we do, Mark, is that we allow the customer to reflect the policies that they know that they've set up. And yes, there are rules and things like that, where things like default deny and other things like that, to make sure that there is a strong baseline level of security. And then, we start to build additive policies-- in the industry, there's this term, "zero trust." We start with trusting nothing and then, you say, what are the factors that would allow us to give access to this particular application or resource? 

MAX: Our identity and access management product is a great example of the same principles in work, in a different space. We want companies who use Cloud to give those roles in IM exactly the access they need and not any more. And we'll even help audit and automate restricting access so that people don't have overly broad access. BeyondCorp works in the same principles. I want you to have access based on your role, and based on your current context. And that's really where, I think, the increased security comes in. And you shouldn't have any more access than that. Because that risks data exfiltration, lateral movement of attackers, et cetera. So you'll see the same defense in depth principles across every element of Cloud, from the way we use custom hardware, or the way we use custom firmware on that hardware, to the way we will provision access, either for our customers or for Googlers who are trying to get to Cloud resources. 

MARK: So can you share any interesting case studies or any interesting customers you've worked with, recently, that have implemented this or tried to implement this or run into any major questions? 

ROB: There's pretty broad applicability of this solution. And we see it in the diversity of the types of companies, the types of users that are adopting this. So I'll start with a couple of generic examples. So one that we see quite a bit is for developers accessing internal tooling, like a bug tracker or internal wiki about systems or things like that. 

So now, we have a bunch of folks who are now working from home, who still need access to those critical resources. The vast majority of those have been transitioned to kind of browser-based or web-based portals and systems. Things like Jenkins and other things like that. And so standing those up whether they're internal, or whether you're now even taken the step of hosting them up in the Cloud, and then, saying, OK, I want my developers, assuming they're on a trusted device, to be able to get access to those. And so that's a great one. 

Another one is for, actually, the extended workforce. We haven't talked too much about this. But BeyondCorp is such a great model for extended workforce. Whether you have contractors, whether you have temporary workers, whether you have kind of seasonal workers or things like that, whether you have partners. Generally, you don't want to ever give that class of user full access to things on your network. But you do want to give them access to the one or two applications they need to get their job done. You're focusing them, probably, on a particular area or particular task. 

So great example is something like call center. A lot of organizations have tried to make customer support, or other things that are done in a call center, very easy. They've built these nice, web-based front ends and applications to big CRM systems. And so to give call center workers access to that app and only that app, while they can work from home, is a great win. We have a number of many organizations that are doing something like this. 

Kind of a third use case, I think, gets more towards the admin and developer side. So an interesting use case is, we have one customer who has built a series of customized dashboards for monitoring and tracking, internally. And when they're on their internal network, they actually don't have authentication. They have nice network segmentation. So for their admins, they don't have a lot of additional authentication, where people have to jump through hoops. You want to get access to this stuff right at your fingertips. 

But now that they are remote, or they want to do remote administration, well, you need to lock that down pretty tightly. And so they can have really precise controls over those apps and dashboards that they've built. You know, only for these developers, only when they're coming in, using strong authentication. Even enforcing strong authentication with something like a security key, which is the most phishing-resistant strong authentication factor that you can get out there, by everyone at Google. And so now, they get most of the convenience of being on the network and access to those. So they have that operational flexibility. 

And then, last one I want to highlight, is when we did our launch. New York City Cyber Command is a pretty visible, great GCP customer. They've been embracing this technology for quite some time. And they've used our capabilities that underpin this BeyondCorp remote access to create what they call their own zero trust environment. So their workers can work from anywhere and still get access to the resources that they need. And you can imagine, in New York City, which has been one of the places that's been dealing quite a bit with the out-falling from COVID, that they need that flexibility. They want that flexibility, but they have to maintain their strict operational security protocols. So that was a great kind of example. 

MARK: I'm curious to ask both of you, what would you say the number one thing, for people to keep in mind-- you know, there's a lot of people who probably work for companies that haven't implemented any, they kind of have this very traditional security style. Or there's probably some companies that may be more cloud native and kind of already adopted this. What would you say is the number one most important thing to keep in mind, when you're potentially implementing this, or when you're potentially going to be talking to leadership about it? 

MAX: You need to start with the context. And so, to me, the context means, who are the people and what do they need access to? What are the devices, and what data can I gather about them? And then, what are the applications or services, and who needs access to them, and how much trust do they need to earn? And that context really is the requirement for doing any kind of a zero trust or BeyondCorp style architecture. And if you're missing one of those three pieces, it doesn't really matter how much of this stuff you implement, it's going to be garbage in, garbage out. 

ROB: Yeah, I think that's critical. Really being able to do that mapping, and having the primitives to build the policies and do the enforcement. I'd actually go back to something we hit on earlier, and reemphasize that, is that you aren't going to flip a switch, and this isn't going to happen on day one. It's that you're going to pick an app, you're going to pick a group of users, you're going to get that working, and then, you're going to add, over time. So even though we talked about where client access VPNs have some shortcomings, you're not going to rip and replace that on day one. It's going to be additive. And you're going to see that VPN usage decline, over time, as you add more apps to the way that they can be accessed by BeyondCorp. 

And then, the other thing that's going to build-- and this is the nice positive part of it-- is you're going to see users who are accessing apps using this BeyondCorp style access, and they're going to say, hey, why can't I access this other app that I still have to go through to VPN for? Your own users are, in many cases, going to be the advocates for this. And so we've seen many organizations, the momentum build over time. 

MAX: As that transition happens, and it is a gradual transition, the best outcomes I see are actually that the employees and the IT folks are happier, because they have less of that overhead, managing the VPNs and supporting all of the frustration that the entirety of the company tends to experience, because everybody's hitting that VPN really hard, right now. 

ROB: You know the point is that it's better for admins and it's better for users. It's a win-win. And it's kind of a one plus one equals three type thing. One other thing, again, when we talk about admins, especially, the other thing that I would say is that, even though when you have a lot of information, when you have a lot of context about devices and rules and networks and things like that, just because you can, doesn't mean you do design incredibly complex policies. 

What you do is you take that practical approach, like you said at the beginning, Max, where you're mapping users to resources, and how critical are they, and so forth. You really optimize your design and your policies, based on risk. And that's always kind of the thing that we encourage people to think about, as they implement new security solutions. What risk am I mitigating? Is it worth the effort that I'm putting on either admins or users? And optimizing that way. So I think that's another really important underlying thought here. 

MAX: I would much rather see companies adopt something like BeyondCorp remote access because they've looked at their risk profile and decided what problems they want to tackle first, and then, picked the best way to tackle those problems. If someone says, oh, I need to do zero trust. And the answer is, because someone told me to or because I've read an article about it, that's probably the wrong path to go down. And I would much rather talk to someone who's done an analysis of their risks and prioritize them. And then, we start a conversation of, what will help me address this biggest risk? Because every company is unique, in this respect. 

ROB: And the way you can roll this out really can take that first step into the broader world of zero trust, into how do you think about this? How do you evolve your architecture, not completely blow up and replace your architecture? And apply those principles to other groups of users, other parts of your network, and so forth. 

MARK: Awesome. Well, thank you so much for talking about this. It's been super informative. And hopefully, our listeners have learned a lot, not only about some of these principles, but also maybe to start thinking about what it might look like for their own companies to start designing some of these things. So I want to thank you both, again, for coming in and talking about all the things BeyondCorp. It's been super fascinating. 

ROB: Great. Thanks, Mark. 

MAX: Glad we could join you. 

MARK: Thank you so much, Max and Rob. And Max, who is right here, as well, to tell us a little bit more. It was it was super interesting to hear about. Obviously, there's a long history of how it came in. And I think the part that always sticks to me really well is the idea that it's more than just the technology. You really do need to create a culture around it. You need to get many, many teams involved. They all need to kind of be in agreeance, right? Because if you have people who are struggling to adopt some of these principles, or they really don't like the way some of these things are laid out, it's not going to happen. And it's going to make your life so much harder. 

MAX: Yeah, and it's important to get the underlying infrastructure right. Even if everybody is mentally on board, they've committed and prioritized, having that strong sense of identity-- and I mean, authentication and authorization identity-- and being able to trust when people log in, and being able to trust those devices, that really is the core foundation of this whole BeyondCorp method. We talk about zero trust, and it's kind of an oversimplification of terms, because it's starting from zero trust. You don't get anything for free. You have to earn every segment, or tier, of trust. And you earn it through a good log-in and having a good healthy secure device. 

MARK: So I'm sure we'll bring up some more security context in the future. But for now, I also wanted to ask Max about what kind of helpful tips can you share, for our users who are adopting Cloud? 

[MUSIC PLAYING] 

MAX: Sure. I am a huge fan of two-factor authentication, or 2-step. It goes by many different names. But this is the concept of, instead of just logging in with say, your email address or username and then, a password, you have a second factor, a second thing, that helps you prove who you are. So I want you to imagine, for a second, that you've instantly lost all of your Gmail, all of your drive, all of your calendar, everything associated with that Google account, that Gmail address. 

MARK: Step one, panic. 

[CROWD SCREAMING] 

MAX: That would shatter me. That would be terrible. It would take me weeks to recover, and I'm not even talking about the emotional recovery. It would be really, really bad. I would lose some very valuable, very private information. I'd also just lose stuff that I don't know if I could ever recover, even if I had a backup, somewhere, on a drive or something. So for me, it's really important to put strong two-factor authentication on my important accounts. Like, my main personal Gmail account, it's on my work account, because we all have to do that anyway. And when I have a domain that I manage, or of an admin on a domain, I make sure I have good two-factor authentication. And that keeps me safe from any kind of a disaster. 

Because it's a lot harder for an attacker, a hacker, a malicious person to try to steal my account. Because they don't just need to know my username and password-- because let's face it, somebody probably has that already, somehow-- they also need the thing that I have, which is a physical device. Especially when we're all quarantined, it's a lot harder for someone to steal my phone, or even better, my secure USB key, even if they have my name and password. And so that second thing, which is the thing you have, is the really important part. And then, there's probably people who are listening who think, oh, yeah, I get this text message on my phone, it gives me this six-digit number, I type it in. That's a kind of two-factor. 

But it's not actually that safe because it's pretty easy to phish that, as well. If I give you a fake login page, transmit your password to the actual server, it cues you up with a SMS message, and then, I just take that-- let's say I'm an attacker in this scenario-- I could just take that. And now, I have gotten your second factor, as a bad guy, and I can pretend to be you and steal your credentials or your account. So what we use at Google, and what I recommend other people get, is a security key, which is a physical device that actually does a back-and-forth communication with any server, any location that you're logging into. And it will only confirm your log-in if it's a recognized endpoint. 

So if I go to Google.com to log into my Gmail, it says yes, I know this server because I've already worked with it. But if I go to like google.fakewebsite.com, but it presents what looks like a great Google log-in page, the security key will not let me log in. It will actually save me from myself. So that's the thing that I really wish more people used, whether individually or through work. And it really could save you from any of those tabloid headline stories you see about people's photos being leaked or people's account numbers or credit cards. And it's really easy to get started. You can do the basics at Google.com/2step. That's the numeral 2 S-T-E-P, and find out more about what you can add to your account, to keep it safe. 

MARK: And this is something people should definitely be doing for their personal accounts, if they can, right? Because you want to protect personal data. But for work accounts it's almost like a requirement. Most companies out there should really be looking at trying to enable additional verification to protect their employees and their employees' data, in a very serious way. And you can do this from Google Cloud, right? You can set up two-factor? 

MAX: Yeah. And it's something that's usually set up at the domain level. So for a company, it's probably an IT administrator, who manages the G Suite domain or the Google identity of the company that would need to turn it on. And they can say it's optional or mandatory. And I guess they could deactivate it. But please don't do that if you run a G Suite domain, because that's just shooting yourself in the foot. But yeah, it's harder to just opt in by yourself, for a corporate account. So it's something you need to talk to IT with. They probably, if it's not a requirement for the whole company, they probably leave it as optional. And I strongly recommend everybody utilize it. 

MARK: Awesome. Well, thank you for that tip, Max. Before we wrap things up, are there any cool projects that you're working on, that you want to talk about? 

MAX: I mean I'm trying to figure out how to get exercise while quarantined, which means a lot of "Ring Fit Adventure" and "Just Dance," when I can clear some space and steal my Switch back from my kids. But when I'm actually being productive, I've been having a lot of fun doing interviews with customers and clients in Google Cloud, through a series we're calling "Stack Chat at Home," where usually I bring these clients into the studio, we talk about what they built on Google, why they made those decisions. 

Turns out I don't have access to the video studio for a few months, so we're having these same kind of discussions remotely, and digging into what kind of architecture did they put together on Google's Cloud? Why did they make those choices? Most importantly, what did they learn along the way that could maybe help someone else who's just starting that same journey? Whether it's about massaging your data or linking up services or scalability. So we cover a lot of different topics. And I'm really looking forward to getting those first few episodes out. 

MARK: Yeah, it sounds like it could make for some good podcast material. 

MAX: Indeed. 

MARK: Mm-hmm hmm. 

MAX: Schemes within schemes. 

MARK: I don't think they can see me stroking my beard. 

SPEAKER: Muah, ha, ha ha, ha. Ha ha, ha. 

MARK: All right. Well, Max, thank you so much for joining me. Super excited. And maybe we'll have you come back on for another security related episode. 

MAX: I would love that. I'm also really enjoying working on some of this BeyondCorp content guidance and demo projects with Jen Person on the team, and so we should have a bunch more content in the next few weeks. And we'd love to talk about it more. 

MARK: All right. Well, listeners, stay tuned. I think you can follow Max's work at @MaxSaltonstall, right? 

MAX: Correct. 

MARK: That's your Twitter? All right. Very, very good. And then, otherwise, we hope you all have had fun and we will see you all next week. 

MAX: Stay safe out there. 

[MUSIC PLAYING] 

[ELECTRONIC WHIRRING] 

It's not the toothbrush time? 

MARK: Was this podcast not just going to be 45 minutes of toothbrush? Because I really felt like that's what our listeners wanted.