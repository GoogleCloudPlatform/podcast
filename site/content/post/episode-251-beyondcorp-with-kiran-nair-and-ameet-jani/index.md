+++
audioDuration = "00:43:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.251.mp3"
audioSize = 62446782
categories = ["Cyber Security", "Enterprise Security"]
date = "2021-03-17"
description = "Stephanie Wong joins our old pal Mark Mirchandani this week to chat about BeyondCorp Enterprise and the way enterprise companies are using this security software."
draft = false
episodeNumber = 251
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "BeyondCorp with Kiran Nair and Ameet Jani"
image="/post/episode-251-beyondcorp-with-kiran-nair-and-ameet-jani/images/hero/hero-EP-251.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/m7w8cb/episode_251_beyondcorp_with_kiran_nair_and_ameet/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) joins our old pal [Mark Mirchandani](https://twitter.com/markmirch) this week to chat about BeyondCorp Enterprise and the way enterprise companies are using this security software. 

Ameet starts the show explaining BeyondCorp's three pillars of security, including how detailed customer and client knowledge aid in security. Kiran elaborates, stressing the importance of the web browser's contribution to a secure experience. With BeyondCorp Enterprise offerings, companies can layer additional protections in the cloud, supplementing the often lacking network model and adding better security protections across devices. BeyondCorp offers a simpler implementation structure as well. Things like monitoring can be switched on with a click. We hear about the features of BeyondCorp, including how users help shape the way BeyondCorp protects their projects. Ameet walks us through how a client could add BeyondCorp to their current security infrastructure and the specific benefits of doing so. 

BeyondCorp Enterprise, an easy off-the-shelf offering, was inspired by Google's own security measures. With automatic added protections in Chrome, BeyondCorp Enterprise takes the most secure browser in the world and ups the game for enterprise employees working from any device. Kiran describes these additional measures and why they're important for enterprise users.  Ameet and Kiran tell us the steps required to set up the software and the customizations available. Enterprise customers should think through groups of users and what will be allowed by each. On the browser side, the three tiers of security features, including invisible features, can be implemented and changed easily.

With the new BeyondCorp Enterprise, enterprise clients are now able to take advantage of the advanced security of the cloud. Through real company examples, Ameet and Kiran share with us the ways this software is already changing the enterprise security game. 

##### Kiran Nair

Kiran Nair is a product manager on Google Chrome. His focus area is security, and keeping Chrome users safe from web based threats. Besides spending the last 12 years building software and hardware products, Kiran is a certified yoga trainer and enjoys a casual game of tennis in the evening

##### Ameet Jani

Ameet is the product manager for BeyondCorp Enterprise.

##### Cool things of the week

* Introducing #AskGoogleCloud: A community driven YouTube live series [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-askgooglecloud-community-driven-youtube-live-series)
* Cloud On Air: Build the future with Google Kubernetes Engine (GKE) [event](https://cloudonair.withgoogle.com/events/build-with-gke/register?after-register=%2Fevents%2Fbuild-with-gke%2Fwatch%3Ftalk%3Dsession-1)
* Google Cloud Born-Digital Summit: Inspiring the next generation of technology leaders [blog](https://cloud.google.com/blog/topics/events/announcing-the-google-cloud-born-digital-summit)

##### Interview

* BeyondCorp [site](https://www.beyondcorp.com)
* BeyondCorp Enterprise on Google [site](https://cloud.google.com/beyondcorp-enterprise)
* GCP Podcast Episode 221: BeyondCorp with Robert Sadowski [podcast](https://www.gcppodcast.com/post/episode-221-beyondcorp-with-robert-sadowski/)
* An overview: "A New Approach to Enterprise Security" [research paper](https://research.google/pubs/pub43231/)
* How Google did it: "Design to Deployment at Google" [research paper](https://research.google/pubs/pub44860/)
* Google's frontend infrastructure: "The Access Proxy" [research paper](https://research.google/pubs/pub45728/)
* Migrating to BeyondCorp: "Maintaining Productivity while Improving Security" [research paper](https://research.google/pubs/pub46134/)
* The human element: "The User Experience" [research paper](https://research.google/pubs/pub46366/)
* Secure your endpoints: "Building a Healthy Fleet" [research paper](https://research.google/pubs/pub47356/)

##### Question of the week

Can you clearly explain GCP policy resource inheritance? What does it mean when the policy is effectively a union or additive? 

* [Resource Manager](https://cloud.google.com/resource-manager) 
* [Understanding hierarchy evaluation](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-hierarchy)
* [Guide to Cloud Billing Resource Organization & Access Management](https://cloud.google.com/billing/docs/onboarding-checklist)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 251 of the weekly Google Cloud Platform Podcast. I am Stephanie Wong, and I am here with someone none of you have ever heard before. His name is Mark Mirchandani." >}}

MARK: Where am I? What is this? This is the GCP podcast? 

STEPHANIE: We might have cloned you, new version of you. 

MARK: Yes, all the same knowledge, which is basically none, but none of the memories. 

STEPHANIE: Well let's refresh. So today we talked to Kiran and Ameet about BeyondCorp Enterprise, and we've talked about BeyondCorp on this podcast before. If you haven't heard the episode, it's number 221. And we had Robert and Max on, talking about the history of how we implemented BeyondCorp at Google, which is a very, very interesting story, actually, and it sets the context for what we're about to talk about today. 

MARK: Yeah, I think a lot of the conversation here, we try to cover a bit of what BeyondCorp is, but really understanding the security principles that go into why Google made these decisions, that was kind of more in the first conversation. And here we're going to talk a little bit more about BeyondCorp Enterprise, which is a bit more focused on how other companies have a much easier time adopting these same security principles. But we didn't answer the number one question, which is, it BeyondCore, or is it BeyondCorp? 

STEPHANIE: I was struggling so hard to say BeyondCore just now, because I really wanted to say BeyondCorp, which is the only way I have known how to say it. But apparently, I'm standing corrected. 

MARK: You know what, I feel like we could easily look this up, but now I just don't want to. And so I'm just going to try my hardest to switch between BeyondCorp and BeyondCore constantly. And just that way, you know what, it doesn't matter. We know what you're talking about. People can pronounce it however they feel like it. 

VOICE ON PHONE: Please leave a message after the tone. 

[BEEP] 

BOB: Hi, Bob in the marketing department here. Correct "pronunskiation" is with the letter P, as in corp. Thank you. 

STEPHANIE: There we go. OK, cool. Now that I've said cool, let's talk about the cool thing of the week. 

So we are actually launching a new series called Ask Google Cloud. I am the host of it. And it's a live chat series, so we are answering a bunch of questions that we've pulled from the community. We put out a prompt to people on Twitter, Instagram, et cetera, asking about what are you all wondering about serverless architectures and some of our serverless products, like Cloud Run, App Engine, Cloud Functions, et cetera. 

So that's the topic of our first episode, which came out last week. If you want to check it out, check out the link and definitely watch that. We also had a live chat during it, and we're going to be doing these quarterly, so take a look. 

MARK: Yeah, it was super awesome to see, and it's always fun to bring in our good friends Martin and James to talk about that. So I'm really excited to see what other guests we're going to have in the future. 

STEPHANIE: Yeah. Yeah, me too. I'm hopefully bringing on people from AI, some of the product managers, and other DAs, so, looking forward to involving more of our team members there. And then also the community, because we really want to engage more with everybody, and whatever questions you have. 

The other interactive event that we had was on GKE Day, which happened last week as well. We actually had some of our VPs and product managers talk about GKE for your future, covering the most notable launch recently, which was GKE autopilot, which is managed Kubernetes. It was a summit that you could watch online on Cloud OnAir, and they also had some live chat happening during that too, so if you're curious about that, GKE Autopilot, definitely check that one out. 

MARK: Yeah, we talked a little bit about GKE Autopilot in either the last episode or the episode before it. I mean, it just seems super cool. So seeing it in action is just the next level. And then I think the level after that is getting hands on with it and trying it out, and just this ability to really say, I want all the cool Kubernetes things, but I don't want to have to deal with all the hard Kubernetes things. This is the answer. It's super, super awesome. 

STEPHANIE: Yeah, I'm excited about that. And they do go through a demo during that session, so take a look. He'll walk through deploying in and how easy it is, and talk about specifically what it manages at the node level so. 

MARK: Very, very cool. Well, for my cool thing one event to keep an eye out for later this month, is the Google Cloud Born-Digital Summit. So this is a really cool event that they're going to be hosting on March 25. So it's AMIA based, so it's going to be in GMT. So for the folks who are here in the US, I hope you can get up early and check out some of the great talks. If not, don't worry, I'm pretty sure it'll be all available for people later. But we have a lot of our great developer relations friends that are hosting a wide variety of talks. 

I think there's three different tracks. Yeah, there's a data track, an architecture track, and a customer track. And so it's just going to be a really cool event and a great way for all of these different stories to get told about what it looks like to be born in the cloud, and how to really think about your business, how to think about your infrastructure, how to think about your technology. All of that while studying cloud native. 

STEPHANIE: Yeah. Yeah, and they're going to be going over best practices when it comes to data architecture and even diversity and inclusion and growth. So it seems like they have a wide gamut that they're going to be covering. So I'm excited about that. And now that we have talked about some of this cool things of the week, why don't we go ahead and jump into our interview with Kiran and Ameet. 

MARK: Ameet and Kiran, thank you so much for joining us. Can we get things started by having you introduce yourselves? 

AMEET: Sure, why don't I go first. 

[ROMANTIC MUSIC] 

I think the first thing that you should know about me is that I'm a Pisces, and I like long walks on the beach. 

[LAUGHTER] 

[RECORD SCRATCES] 

But more importantly, I have been at Google for six years and focused on security here, and I've spent this time looking at tools that we use internally for ourselves, and how we can make those available for customers on the cloud. And so that's a big part of what my job is here. 

STEPHANIE: And what about you, Kiran. What's your sign? 

[LAUGHTER] 

[ROMANTIC MUSIC] 

KIRAN: I also love long walks, and I love tennis. It's just a good hobby of mine, and I've been at Google for 4 and 1/2 years now. I used to work in ads, so I started my career, moved on to Chrome about three years back. I've been handling Chrome Safe Browsing, and recently I moved to the enterprise space now. 

STEPHANIE: Yeah, we're super excited to have you both on. We've actually talked about BeyondCorp previously with our friends Max and Robert. And they explain Google's story and history here. But in a nutshell, can you give a quick overview of some of the core pillars related to BeyondCorp? 

AMEET: Sure. Why don't I start. I think a lot of it covers a lot of areas, so Kiran can talk on the client-side stuff. But for us at Google, we're horrified by this idea that anybody would use network-based security. We found it, preeminently, the most hackable thing that's out there. And even if you layer on second factor, even if you layer on other things. There were so many lessons learned for us doing it ourselves, that we walked away with three core tenants. 

One is, publish applications to the web. And no customers are terrified when they hear that, but really, really putting it in a deployed model being a proxy makes your applications more secure. That's the first thing. 

The second thing is, know everything you can about a user, about their location, about everything else. I think that's key to understanding what is normal behavior, someone doing the right, thing if there's somebody downloading hundreds of files, that's not normal. I need to know that. That's the second pillar of it. 

And the third thing, is really the client-side of things. We really need this in-depth view into a client. I think here Kiran and Chrome have really been kind of helpful for us. 

KIRAN: This is one of the trends that we've been noticing, that most of your work happens in the browser anyway, nowadays. And most of the protections that are there are on the end [? blind ?] or the operating system level. So we've been thinking about the browser as not just a portal to the internet, but it's actually where all the work happens and where a lot of the protections can be. 

It's essentially extending the access part of what Ameet was saying. How do we make sure that things can be accessed easily, but extending it to how can we make sure that they are accessed from a very secure place and in a secure fashion. And that's where Chrome comes in. 

MARK: Right. And so these principles have been talked about a lot. And there's a bunch of white papers it's a bunch of resources for people who want to actually take this and try and implement it themselves. As you said, this is something Google's been doing for a while, and it kind of has been a trial by fire thing for Google, right? 

AMEET: Exactly. The other thing is, people come back and say, oh and you're Google, you just built all these bespoke tools that you can use. What am I supposed to do? That's often the feedback we hear about this. 

STEPHANIE: And so, because of that perception, I'm sure people may have initially assumed that it's difficult to adopt this type of entire framework for their own, enterprise applications. And with the way that traditionally we've had network based approach security, how has that perception changed, and how is a company able to actually fit this into their existing security product set? 

AMEET: The biggest driver of everything has actually been COVID. Suddenly, everyone's working from home, and companies that are not us saying, oh, I've had to go and pay my VPN vendor like 3x the amount of money I was paying them before, and that makes me angry. And then on top of that, now these devices are everywhere, and they're using their own devices. 

And so I think that by itself has been a huge driver in trying to push people away from a traditional network model. They're saying, I can't control the devices anymore, people are coming from their own mobile devices, what am I supposed to do here? And so I think that, more than anything else, has been the big driver. And then you see a lot of forward looking CISOs saying, I've wanted to do this anyway. It's always been on my backlog of things to do. And so I'm going to really use this opportunity to modernize the infrastructure. 

KIRAN: Yeah. And also, another part is accessibility. And network based security has always been very complex to implement and very sophisticated. Any small configuration change that you make could actually lessen your security. And that's why one of the fundamental principles in Chrome security has been simplicity. And it should be simple to configure, and it should be a one click enablement type of flow. 

And that's why we really believe in incorporating and integrating things into a single vertical stack, so that it's easy for people to turn things on. For example, you don't need to install multiple agents on your systems to get monitoring. You just have Chrome there, and you just need to turn things on from your server-side. 

AMEET: Actually, there's a good point there Karen is making. And Stephanie and Mark, I know you guys have seen this in other discussions that you do with the other podcast things. If you tell a customer, go and rip and replace what you have, and then layer this in, they're going to tell you to get lost. Because they've invested so many millions of dollars into this infrastructure I use Active Directory, I use Okta, I use whatever on my desktop. 

And so I think the idea here, really, is to push the story of, don't throw away what you have, in fact, we're going to use that to strengthen all of this. You don't have to rip and replace. The idea is to layer this on top, feed in those signals. If you use Okta, great. If you say anything else, great. If you use us, even better, but it doesn't have to be that way. All of these signals can feed in together, and we can make them better together story here. I think that's kind of key all of this as well. 

STEPHANIE: Yeah, and I think from the last episode that we had talking about beyond BeyondCorp, was that it was very incremental at Google, even. Because we had to, essentially, reorganize even how teams work together and bring them into the conversation. Really take inventory of how teams were organized and how we could optimize these things, and also transparently go through this transition without users being affected too much. 

AMEET: That's exactly right. The minute the user knows what's going on, you're going to get thousands of tickets filed. Why did this happen? Why did this happen? And it's going to be inundate. I couldn't say it better, so I'll just stop talking. 

KIRAN: And the user, themselves, are an important part of security. They are usually the ones who are targeted. Usually they say that user is the weakest link in an organization security strategy, but we can also think that users are the strongest link. And why don't we include them into the security workflow. 

So why don't we, for example-- some of the features that we have are things like user soft prompter. Whenever they go into slightly shady sites, we don't know whether things are bad, but we are not sure whether they are good either. So we bring in the user into that workflow, so that they can take a position and inform us whether, hey, this thing, you know I've never seen this before, and it looks slightly suspicious, so why don't I flag it. And then multiple users can flag things and then we can add it to our detection workflow. 

AMEET: And more signals the better. And if we can get it all natively, even better. That's the whole story for us. 

MARK: So let's dive deeper into that. Because we'll include a link in the show notes for people to listen to the last episode, where we really did dive deeper into some of those tenets and how to implement it. But let's talk about having this human kind of reaction and understanding what the humans are doing. That sounds like the qualifications when you have a system that's fully deployed. How do you get there? Like you said, the customer will tell you to get lost if you say, hey, here's 1,000 things you need to do. So how do we get from 0 to 1,000? 

AMEET: That's a great question because customers ask it to me all the time. But the basic idea is, hey, you don't need to invest in brand new systems for that. Your identity provider, for example, if you're using Okta, it already has a ton of data about you. Let's just use that. At the simplest form, you can say, all the metadata that comes from that user. What groups do you belong to? What roles do you belong to? 

I have a customer who, and this is a true story, actually cares about where somebody is on the floor plan. They include the floor plan information because if you're on floor plan, second floor, building A, whatever, section D, that's where the rest of the team seems to be. And so it's like another signal of security. And the good news is that you don't have to go find that. It's already included somewhere. Just feed that into the system and you set policy about it. It's as simple as that, really. 

STEPHANIE: You were also just talking about how you want to use this in conjunction with your existing tool sets in your existing identity providers. Why would this model make sense to add on top of that? How does it make a company more secure? 

AMEET: Let me give you the anatomy of how hacks happen. Not hacks like SolarWinds or anything like that, but it typically goes like this, and I think Kiran was talking through this. There's a social engineering aspect of this. I'm going to find out who I want to attack at the company, and then I'm just going to send them a phishing email. And when I get this phishing email into their inbox, I'm going to suddenly have their credentials, because somehow I'm going to make them, if they want a free t-shirt they're going to enter their credentials to get this free t-shirt. And then the next time they click, I'm going to fish their OTP code or their RSA token. 

And I know that sounds ridiculous, but we're seeing this happen to our customers today. And once you have this kind of paradigm, you're now in on the network, and for the next 24 hours you can just do whatever you want inside of that network. What we're saying is, don't do that. One is, you need a continuous evaluation of what's going on. This shouldn't be a 24 hour session length. You should say, I'm accessing application A, access it, and then if something doesn't look quite right, I can prompt for a second factor. But they won't be in there for an hour, anyway. They're coming into the right device. I think if that continuous push that really differentiates us versus the whole traditional network model. 

MARK: So with all these challenges of actually implementing this, and like you said, with this model being more secure but maybe not being the clearest way of how to get there, we're actually here to talk about something specific. BeyondCorp Enterprise. 

AMEET: Exactly. 

MARK: What is it? 

AMEET: What we've heard for the last five, 10 years, is a, great Google. I'm glad you did that, and I'm glad you put out this white paper. How do I even get started with that? And you built all these tools for yourself? That doesn't help me. The idea should be that there's an off-the-shelf solution for you. And the good thing is, hopefully, they're very native to what you already do. Kiran will talk about how Chrome just turns on all the enterprise and management controls. But the end users should access applications the way they access Gmail or Salesforce. 

So help us, we'll help you publish these applications. We'll take care of the proxying. We'll take care of the offloading of the authentication checks, the authorization. That's what our system does. It starts to collect information. 

And guess what? The front door for all of this is your browser, and the browser can add so much smarts. You don't need to download something new. You can do it from your personal device. You don't have to worry about [INAUDIBLE]. That's all built in. I think that's sort of what we're trying to tell customers is, off the shelf, here's what you can use, and the user experience just improves 

KIRAN: Chrome is the most secure browser in the world, and it protects 3 billion users. The thing is, enterprises are unique. So secure by default might not work for all enterprises. And that's why what we've done with BeyondCorp, is added powerful features on top of the default security that is there for everyone in Chrome. And these are things like advanced phishing protection, so if you are a regular user, every link that you visit is protected by a base level of phishing prevention system. 

But what we've layered on top of that is real time phishing checks, where we can detect things like targeted phishing attacks or targeted social engineering attacks, deep scanning of files from malware. So usually what happens is, Chrome checks every file that you download against a set of signatures to detect whether there was a malware or not. But what we have done here is, we have added the capability to deep scan files in real time, so that unknown files-- and these are the types of files that are usually used in targeted attacks where they slightly change the signature profile so that it evades systems. 

So what we can do here is, we can deep scan these files to detect whether it has some malware and warn the end user, so that they don't download the file. And on top of all of this, Chrome has, traditionally, been the black box. We do a lot of security in Chrome, but it's not been reported. And from an admin point of view, you cannot really understand what to secure if you don't understand what's going on. So we've added a powerful level of security reporting on top of it. So as an admin, you can see every insecure action that an end user takes, through Chrome. 

AMEET: There's another point there I'd to make. This idea with BeyondCorp Enterprise of invisible security. I know that sounds ridiculous, but the idea here is, all the great things that Kiran just talked about, they're enabled by default, and guess what. You don't need to tell your end user go install this thing. It's a special version of the browser. Go put this agent on the device. Because what you're finding is, they should just be able to get all this from their normal behavior. I log in in the morning, I enter my credentials, and my browser is suddenly giving me all this stuff. 

And I think that's really what was compelling to us. In the old days when we were telling this story, the browser wasn't really part of the story. And what made it compelling when Kiran and I started talking, was, all of this stuff comes almost for free, as transparent, I should say, or invisible to the platform. I think that's the other area that is sort of key to the BeyondCorp Enterprise story, which is, if you have to turn things on and it's in your face, it sort of already becomes useless. 

STEPHANIE: Exactly. And this is how we connect the dots and contextualize it for the enterprise. We are bringing our theme of defense in depth to someone's existing footprint, their entire architecture. We're just adding that ultimate layer on top of what they already have. And we don't want to give too much friction to users, to a point where they feel like they can't get their jobs done every day. And at that point, you said, it's a moot point. It's useless. So it's about finding that balance of bringing the value and still increasing security posture without making people's lives have more friction points. 

AMEET: I'll give you a story. We had a customer we went to visit them. And he said, oh, I'm not picking on Windows, but he was like, we give our employees windows devices. Every morning they come in, they turn it on, and then they go for coffee for 20 minutes. And it's not about Windows. There's 400 agents on that thing, and it takes forever to boot up. It's obviously in your face. And then suddenly, if you don't use that machine that takes 20 minutes to boot up, you don't get access to the data. That whole thing seems to just kind of fail in a modern age with many devices. At least that's what we think 

KIRAN: Yeah, and it's also about enabling the smaller companies. The University administrators are people who don't have all the resources of a large company. You need to be able to enable these things in an easy way. And that's where security by default, or invisible security, is security that's built into a system, becomes super important so that you don't need to do sophisticated configuration to get this up and running. It works out of the box 

MARK: Yeah, that sounds great for users, especially because, probably more now than before, so much stuff can be done through the web. A user might spend their entire day at the office or, obviously, working from home, through Chrome and getting access to all of the resources of their company through Chrome. So ideally, the user's not even really affected here. And like you said, it's obviously key for the user to kind of have a very good experience. 

What does this look like from the admin experience? How does this stuff get set up? What work has to go into that, and then obviously, what is BeyondCorp Enterprise doing to make it easier to implement? 

AMEET: Let's break it down into three things. The first thing is, we said the administrator, or the developer even, shouldn't have to change anything on the application side. If they had to do that, think about a traditional enterprise, they probably have, and I'm not exaggerating here when I say, 5,000 to 10,000 applications deployed internally. At least, that's a number we're hearing. I can tell you that number is definitely true at Google. And so the idea would be, if you have to go through and change all these applications, it's already failed. 

So the first thing we'll say is, turn on the proxy. The proxy should automatically front load all of those applications. And that's what the smarts are. The app can stay where it is, it can be an old school terminal kind of app, or it can be a brand new web app. It doesn't even matter to us. What we're saying is, turn on the proxy and start finding your rules there. You do have to connect them to your applications, but that's sort of the step two of this. 

And then the third part is really just starting to figure out what are the policies that really matter to you. And this is really custom to each company, but the good news is, no matter what engine you use, whether it's from one company or another, the idea should be, you have to do this anyway. What is confidential data? What is a secure device? Who should be able to access what, under what conditions? 

I think it's just a process agnostic of technology. But the administrators need to sit there and kind of walk through that process, and then apply all these things en masse or at scale on their applications, at least on the access side. The client side has its own set of actions you need to do. 

STEPHANIE: Yeah, this brings me to my next follow up question about the information that the proxy needs to do its job. And this, I think, ties into the administrators who need to do that prerequisite work to determine what these policies are going to be, so that you can apply them at the proxy level. 

AMEET: Exactly. You need to know is it OK for someone to access this from China, wherever the location happened to be. Is it OK to come in and bring your own device, or BYOD. At Google, we made the decision that some actions are OK from a BYOD. As long as we have a good sense that it's up to that OS, you should check your email, or you should be able to check the bus schedule, if you will, or whatever it happens to be. 

I guess we sound entitled when we say that. But you know what I mean, like your cafe menus. But when you want to access highly confidential data, guess what, you have to come from a corporate device or managed device. And so those are the kinds of rules that you need to go through and think through and say, this is the way I'm going to break that. And then it's just applying those across all types of applications. 

KIRAN: From an admin perspective, in Chrome, there are two big advantages. The first one is, like I said, invisibility. So Chrome can detect a lot of activities related to things like, are you entering your corporate password on a known phishing site, or, have you downloaded a file that we know is malware, and did you open it on an endpoint. Traditionally, these kinds of actions used to be very localized. Someone would do it, but the admin would have no idea that this actually happened. 

So what we've done now is, we've added a powerful set of reporting, and we collect all of this information, and we share it to this investigation tool, so that the administrator can see that, OK, this particular user entered their corporate password on a non-corporate site. And then what they can do, is they can have an automated workflow where I can automatically tell you to reset your password, or please don't repeat this action again. So there's that visibility aspect of it. 

And the second is the data security aspect. So most of the actions in a use of data happens within your browser, and we have a layered set of capabilities that are there. So every file you upload into Chrome, for example, can be scanned against a set of rules to detect whether it contains sensitive data. And we can prevent data exfiltration. Every file that you download in Chrome or content that is pasted into [INAUDIBLE] websites-- 

So the concept that we are building here is that of a corporate data boundary. And Chrome sits right on the edge of this boundary. It's where the internet, not just your corporate data, and it's the end user who is sitting and deciding whether, should this data actually flow outside the boundary, or should stay within the boundary. 

What we are building here is a set of capabilities which help out the user. It tells them that, hey, you know what, this particular type of data, it shouldn't cross the boundary. Your administrator has told that this data should stay within your boundary. Or if someone takes this data and tries to upload it into, let's say, Pastebin, or somewhere outside, we can tell the user that, hey, you know that this data actually contains a lot of customer information, and it's traditionally not to be leaked, but if you really want to send it, you can share it outside. 

MARK: Yeah, I think that aligns really well with what we were talking about earlier, and really making it as easy as possible for the users, and not getting in the way and not interfering, while also, still obviously, trying to secure all your applications and all your company's stuff. So that makes sense to me, but I'm still a little confused about what does the process look like if an organization says, great we want to use BeyondCorp Enterprise, we have a ton of applications that we need to put behind it. Where do we get started with that? 

AMEET: And customers do look at it that way, actually. I can give you an example of a customer who says, I've got 3,000 apps, I'm ready to go, when can I be done? That is setting yourself up for a very daunting challenge. We always talk to customers as, crawl, walk, run. It's got to be crawl, walk, run. 

There's two quick wins here. Find a set of users that you don't even want to give a VPN to. So typically, we'll say something like, as contractors as partners, whatever it happens to be like, it's a third party. You don't want them to access your network. That's a great place to start. And the second thing is, find the three or four apps that they access, and just put that into this zero trust BeyondCorp model. It's easy to roll out all these policies for those subset of users. It's easy to say, use Chrome for those people. And it's easy to say, these are the apps that I'm going to just turn on zero for. And of course, I'm making it sound like it's that easy, but it simplifies the problem in a great way. It gives you a couple of things. 

One, it helps you start to focus your thinking on, how do I really want to define access around these things, what kind of policies really matter to me. And a second is, it gives you a very tractable problem to solve, because you're telling yourself, I need this on for 50,000 users and 100,000 apps, or whatever it happens to be, and 10,000 devices. You're never going to get anywhere. 

And so I think that's the way we typically break down the problem for our end users. You're asking that question though, Mark. If we said all that we said, and then we walk away, the customer is like, yeah that's great for you, that's not going to work for me. 

[LAUGHTER] 

KIRAN: You know, some of the things on the Chrome side are really that easy. The first step you have to do is get all your browsers under management. And it's not just BeyondCorp features, but there are a lot of other security features that you get if you bring your Chrome browsers under management. And we have this new product called Chrome Browser Cloud Management, which makes it super easy to bring your Chrome browsers under management. Once it's under management, we have tiers of features. 

So the first features are things that are really invisible to the user. So things like real-time phishing protections. The only time a user will see these events, is if someone is visiting a phishing page. Otherwise it's totally invisible, it's under the hood, reporting. This is also totally invisible. The user never encounters these things. 

So start with those types of users, and slowly increase to reach a level where you have things like advanced data loss prevention rules, where you understand that, OK, here's the type of data that is very important for me, and I want to prevent users from leaking it. So that's when you actually show active warnings to the end user. So that can be your last tier. So start off with simple features, invisible features, and then you can add more and more friction if required. 

STEPHANIE: Yeah. Yeah, and it sounds like there's this crawl, walk, run mentality for both approaches. And with Chrome, there's a lot of things you can start taking advantage of right off the bat, whether it's scanning for phishing, or taking advantage of reporting and DLP. That's the other thing. So I feel like that's one things people can get started with right away, and then continue to add on, start taking advantage of some of the other functionality with their enterprise cloud computing environment, when it comes to BeyondCorp Enterprise. 

Which brings me to this launch of BeyondCorp Enterprise. Can you tell us about what you're excited about and what's coming up with this launch? 

AMEET: I'll tell you what I'm excited about. Finally, we're putting two things together. I think they've been Google's strengths, which is one, an endpoint solution, and Kiran's been talking about that. And the second is, the beauty of our network. We run the fastest network in the world. I don't know if I'm allowed to say that, but I'm going to say that. It's everywhere, it's globally distributed, we have more lines across the oceans. 

This release is really merging these two things together. People ask us, how can you be faster than VPN? And the idea is, because, from the minute you click in your browser to the minute you get to the application, our job is to get you into Google fiber, get you into our data centers nearby, and engaging with your applications right away. And so I think we're telling a better together story here, from both the client side and the application side for the first time. That's what's exciting to me. 

KIRAN: Yeah, and for me, it's just the opportunity to enable our customers with power cloud security features. Chrome has been secure by default. You can just download it and start using it, and it has a baseline of security. 

But now we are able to add powerful cloud security features that just deep scanning of files for malware, or real time phishing detection. Cloud DLP has always been a product that we have, and we've been using it to protect data for sites within the cloud, now we are bringing it into the browser for the first time. So super excited about all these radically innovative features that we are launching, and for enabling our customers. That's the end goal here. 

MARK: Yeah it's always exciting when something launches, and a bunch of new customers come on and try it out. I mean, we've started a couple of customer stories here, but are there any more that you can share about people who have really kind of taken the BeyondCorp model to heart now, and BeyondCorp Enterprise has made it possible for them to bring the stuff in? 

AMEET: There's a company called Veolia. It's a 150-year-old company in France. And they basically do public works, water, energy, clean air, et cetera. You would think this is the last kind of company that would move from a VPN model to something brand new. They've embraced it, because, guess what, they have 300,000 employees. They're not all employees, actually, there are contractors, and they have apps distributed everywhere. 

The idea for them was, oh, I have to create all these different microsegmented networks, and I have to go get on their device and manage that device. And here they found a shortcut. The idea was, OK, I know where my 200 most important apps that anyone accesses. I'm going to make those zero trust. I'm going to really turn this on. I'm just going to tell my end user, guess what, as Kirin's been saying, use Chrome when you access it, and I'll let you access it. It's as simple as that. 

And I think you're finding examples of these companies. And by the way, their backends don't just happen to sit in GCP. They have a lot on PRAM. They have a lot of things in other clouds. That's great. That's OK. We think GCP is the best cloud, but others may have a different opinion. And deploy your apps wherever you want, and we'll still protect them and support them there. 

One example, we have another one, where we work with Home Depot, and again, public reference did come out and say, hey, every time I walk into a store, the people with orange vests have a phone in their hand, and they need to tell you what aisle to go to get your screwdrivers. And, do you even have them in the store? And if we don't have them in the store are they in another store? 

That's all protected by this kind of model too. How do I make sure that if that device walked out of the store, my inventory doesn't leak to competitors all over the place. Zero trust in BeyondCorp really solves those kinds of things. We can kill access to those when they're out of compliance. 

STEPHANIE: That's what I find so beautiful about this whole thing, is because it kind of flips this entire way of thinking about security on its head. You're not thinking about accessing the entire corporate network at once. Traditionally, you'd have to think about like MDM and network access, and all these other things. But now you're thinking around one central sort of approach, thinking about it at the proxy level at endpoints and at Chrome. And you can protect it by assuming zero trust from anything. 

AMEET: Exactly. Yeah, I think it's a perfect way. Wrapping that up in a bow. That is the story for us. You should come work for us. 

STEPHANIE: Maybe I'll switch over. 

[LAUGHTER] 

Anyhow, we've had such an amazing discussion, so before we wrap up, is there anything that we missed that you'd like to mention about BeyondCorp Enterprise ? 

AMEET: I'll say this generically. You should go evaluate every vendor. You should find the one that fits for you, but make sure that they have three or four key things. Make sure that they are a global platform, because you don't want to have your network throttled through this really old legacy system. Make sure that they're not putting this heavyweight agent on your desktops, because then nobody's going to use it. They're going to walk away, and they're going to go for coffee for 30 minutes. 

Make sure that everything is done at scale. Make sure that, when people wake up in the morning at that company, that their job is to think about securing the infrastructure, for themselves and for you. You know, make the right choice when you go down that path. 

KIRAN: In the end, it's about securing the modern worker. Working in a distributed way. It's going to be globalized. It's going to be working from home. It's going to be flexible in a privacy conscious. 

I want companies that I'm working with to be aware of what's happening, but I want them to also respect my privacy. And these are some of the fundamental principles that Google believes in and that Chrome believes in. And BeyondCorp, I believe, really, doubles down on these principles of access, of flexibility, of distributed working environments. 

AMEET: There's a great example. We were talking to a customer recently, and he said, listen, if I have to mandate-- I'm looking to hire top talent and tell them, you have to use that device, like some really ancient device, and you have to come into the office every day, and you have to use only this type of mobile device, and that's the only way you're going to be productive, that person is not coming to work for me. They're going to go work for somewhere that's fun to work at and doesn't mandate other things. 

And so I need to be able to meet the new workforce where they are. And that's really what we're also unlocking here. Use a cool device that you want to use, whatever it happens to be, and as long as it's secure, and we know that it's secure, that's great, and you can be productive with your day. And work in a coffee shop as long as it's safe. 

MARK: I think that's a great way of summarizing it. And I think, Kiran, you made a great point about the mobile workforce. And yeah, any level of friction, there's plenty of companies out there that are figuring this stuff out, hopefully with BeyondCorp Enterprise, but in general, with a security model that really helps their workers stay productive and not have to worry about all the kinds of more traditional security hassles that we've seen over the past 10, 20, 30 years. 

STEPHANIE: And like COVID, like you said earlier, is what has accelerated this way of thinking and forced a lot of companies to have to adopt it. So hopefully, we see a continuous trend towards adopting the zero trust model and allowing remote workers to continue to be productive without too many friction points along their journey. 

AMEET: That's the hope. That's the dream. Yeah. 

MARK: Awesome. Ameet and Kiran, thank you so much for coming in. Super appreciate it. 

AMEET: No, thanks for having us guys. Yeah, this is awesome. This is fun. 

STEPHANIE: Thank you. 

KIRAN: Thank you. 

STEPHANIE: All right. So we just had that conversation with Kiran and Ameet about BeyondCorp Enterprise. I found that conversation very interesting, because it is another example of how we've taken our learnings and experiences at Google, and how we've created an amazing product out of it. And it has many components, including IAP and endpoint verification et cetera. But I do also like the fact that they were very cognizant of people not wanting to completely shift how they're doing security right now, but this is just an added layer. Again, supporting the idea of defense in depth. 

MARK: Yeah, I think that's really the core concept there with BeyondCorp, is that we have so much great learnings over the many, many years that Google has launched all these products. But I really loved the the concept of, OK, well, we've learned a lot. We've done a lot of cool things. We can show you how to do these things, but it's hard. You can't just flick a switch and then, bam, everything works now and everything's secure. It's really difficult to think about how you're going to take these different security concepts and fold them in. 

And so a big part of BeyondCorp is really, OK well let's segment it out, let's figure out which pieces make sense, let's figure out how to apply it to a small audience, and then, using BeyondCorp Enterprise as a product, how do we actually start to integrate that into our security portfolio without ripping the whole thing out. 

STEPHANIE: Yeah. And even at Google, over the years that we were implementing this model, it took incremental changes, a lot of testing, simulations, and, I think one other thing not to be overlooked, is having a really good sense of organizational structure, making sure that you're taking inventory of all corporate owned devices and application inventory. You really have to be buttoned up first before you start to make these major changes in how the entire company operates, essentially. 

MARK: Yeah, because that's the way that you're going to be able to set the policies that make sense. And there's going to be policies that make sense for your business that don't make sense for others. And so you can determine which pieces of information are valuable to you, and which ones you want to kind of restrict people on, and say, hey I don't trust this user or this action, or I do trust users doing this action, or whatever that looks like. So having the flexibility to collect that information and then make the decisions that are right for you. Again, that's kind of a core principle of BeyondCorp, but it makes sense, and it's really cool to see. 

STEPHANIE: Yeah, and even from the Chrome side. Again, it's this idea of crawl, walk, run. And there are some things that seem to allow you to do things right off the bat, for example, phishing prevention and deep scanning, DLP, security reporting. So again, there are options, no matter where you are in your security protocol journey, that you can start to leverage right away. 

MARK: I loved Ameet's comment about, it's scary to think about having these applications accessible through the web, but you know what, times have changed over the past many, many years. And this is really an area where using that proxy is really the best way that you can say, here's where all the security is going to be, so we can even take our more legacy applications and still run them through the proxy. Users are going to be able to do everything through a browser, and Chrome is a great browser, so it is really cool to hear about all the security features that are built in, both the ones that are just turned on by default, and then the ones that you have configuration control over. 

STEPHANIE: Yeah, I don't know about you, but this is the first company I've worked at where I didn't have to use a VPN. And when I first joined Google, I was mind blown by that. I was like, wait we can just log in to any application that we should have access to? And it makes for just an incredibly seamless experience for your workforce, and yet still enforces a very strict security protocol. 

MARK: Yeah, speaking of which, one of the questions that came up was somebody asking for a little bit more clarification around how permissions work in the Google Cloud world. So I was thinking, hey, you know what, this is a great question. Why don't we spend a little bit of time chatting about that. 

STEPHANIE: The question that we've received is, can you clearly explain the GCP policy resource inheritance. 

MARK: Yeah, and I think there's two different ways to think about policy inheritance, and really, there's only one way to think about it. But a lot of people who are using Google Cloud, especially if you're not in an organization, you might be familiar with the concept of projects. And projects are going to be this default way that you're going to be able to group together resources. And when you're setting permissions you're typically going to set them at the project level. 

So Stephanie, if you and I have a project, and I'm the project owner, and I want to give Stephanie project ownership, I can 100% do that. But then Stephanie has access to everything in the project, and that might be great, but that may not be a good idea if I was only asking Stephanie to do one thing in the project. Or imagine if I'm working with a team of multiple people you don't want to give everybody access to everything. We've talked a couple of times about least privilege and stuff like that. 

So one of the things that you can do is, on a project, you can say, OK, let's take this user and let's only give them, let's say, BigQuery permissions. So now that person can only work with BigQuery. And there's a whole bunch, there's like thousands and thousands and thousands of permissions, and you can actually make your own custom roles as well. So that you can really well define who can do what. 

The other thing you can do, of course, is use groups instead of users, which makes it a lot easier to manage if you have a team of people that you want to work with. Well that's fine and dandy for projects, and then billing accounts have their own sets of permissions as well. But you might only be dealing with those if you're not dealing with what we call an organization. That's really where things get a little bit more complicated. And most large businesses using Google Cloud are going to be using an organization node. 

At the organization level, everything kind of inherits and belongs to an organization. And that includes projects and billing accounts, and all of those can fall under an organization, and then they can fall under folders in that organization. So you can kind of think of it like a hierarchy, because well, it is a hierarchy. And everything will inherent permissions from what's above it. 

So when you have an organization you can set permissions on that organization specifically, and then for each folder under that, you can kind of set more permissions for that. So if you're a business that has maybe three lines of business, and you want to make sure that you have three folders in your organization to represent each line of business, you can totally do that. And then you can give permissions to each of those folders saying who should have access to what. And maybe you want to give an IT team view access to everything, because they're going to need to see stuff, but you only want to give edit access to the specific lines of business for their folders. 

And when you get multiple folders, you can set that granular level of permissions as you go down the hierarchy and set that on the different folders and then on the projects under those. So you really do have a lot of power when it comes to setting the individual permissions, and then you can kind of use these folders to give a good way of breaking down which team should have access to which sets of projects. It's really, really super helpful. And as you get to large businesses, it's absolutely required to really use that level of drilldown permissions. 

STEPHANIE: Right, absolutely. And there's still the option of applying a standalone policy at the project or resource level, because of course maybe there's certain people or teams that need access to a resource. And so that can actually stray away from the inheritance if you apply it at a lower level. But if you do want to apply a blanket policy, let's say, to the entire organization, where you don't want to allow any public IPs on any resource, let's say, for the entire org, you can actually apply something called constraints. 

And that's an organization policy that, essentially, still uses the same inheritance, and it will trickle down over onto all of your resources and prevent you from being able to deploy those public IPs. You can also say, I only want those IPs to be applied to this resource, this specific VM. And that can be a standalone policy as well. So it just takes some understanding of your business and your technical environment and a little bit of mapping ahead of time. 

MARK: Yeah, I think it's one of those things that's really a lot easier to visualize. And so we'll link to some documentation in the show notes that this was one picture that I think will help people understand what it looks like to do policy inheritance. And then, if you're in the console, and you are working with an organization, there's a whole resource manager page where you can control and really see what the tree structure looks like, and then make decisions on inheritance. So that's going to be the place to go if you want to take a look at which policies are being inherited. 

STEPHANIE: Yep, I absolutely agree. I think visual is the best way to go in some cases. So check it out. And Mark, thank you so much for jumping on to help host this episode of the GCP podcast. And for everyone else, join us next time. Thanks all for listening. 

MARK: Bye everybody. 

Let me grab a water real fast. 

STEPHANIE: I should just beatbox while he's gone. 

[STEPHANIE BEATBOXES] 

[HIP HOP MUSIC] 

[STEPHANIE BEATBOXES] 

[LAUGHTER] 

MARK: That's the best thing to do when somebody is away, is just practice your beatboxing.