+++
audioDuration = "00:32:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.121.mp3"
audioSize = 46203046
categories = ["Kubernetes", "Open Source"]
date = "2018-04-04"
description = "Paris Pittman and Garrett Rodrigues join Mark and Melanie to discuss the Contributor Experience on Kubernetes, and how people can get involved with Kubernetes!" 
draft = false
episodeNumber = 121
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Kontributing to Kubernetes with Paris Pittman and Garrett Rodrigues"
image="/images/post/Kubernetes.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/SCECGdkPiz5"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/89rh7m/episode_121_kontributing_to_kubernetes_with_paris/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Paris Pittman](https://twitter.com/parisinbmore) and [Garrett Rodrigues](https://github.com/grodrigues3) join
[Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) to discuss the 
Contributor Experience on Kubernetes, and how people can get involved with Kubernetes!

<!--more-->

##### Paris Pittman
Co-Chair of Contributor Experience Special Interest Group for Kubernetes.    
Bay Area Kubernetes Meetup Co-Organizer

[Paris](https://twitter.com/parisinbmore) is a Developer Relations Program Manager on the Google Cloud Open Source Strategy team focusing on Kubernetes Community. She has 13 years of professional experience in attracting, retaining, growing, and incentivizing engineering talent for organizations and open source projects. She has also been organizing communities in one form or another for over 20 years, and at one point ran enough hackathons and meetups to subsist solely on the free pizza leftovers. 

##### Garrett Rodrigues
Technical Lead of the Contributor Experience SIG for Kubernetes.

[Garrett](https://github.com/grodrigues3) is a Technical Program Manager at Google, and he joined the Kubernetes and GKE Team at Google in June 2016.  As a lead of ContribX, he has focused on scaling the Kubernetes project in a sustainable way.  Garrett developed a lot of the tooling and automation to support OSS code review, issue triage, and data collection about the project.  In addition to his work on Contributor Experience, Garrett is currently involved with the app-def working group to get a new declarative application management tool released.

##### Cool things of the week

- Highlights from the TensorFlow Developer Summit, 2018 [blog](https://medium.com/tensorflow/highlights-from-tensorflow-developer-summit-2018-cd86615714b2)
- TensorFlow Hub [site](https://www.tensorflow.org/hub/)
- Announcing TensorRT integration with TensorFlow 1.7 [blog](https://developers.googleblog.com/2018/03/tensorrt-integration-with-tensorflow.html)
- Announcing Google Cloud Security Talks during RSA Conference 2018 [blog](https://www.blog.google/topics/google-cloud/announcing-google-cloud-security-talks-during-rsa-conference-2018/)
- Exploring container security: An overview [blog](https://cloudplatform.googleblog.com/2018/03/exploring-container-security-an-overview.html)
- How to run Windows Containers on Compute Engine [blog](https://cloudplatform.googleblog.com/2018/04/how-to-run-Windows-Containers-on-Compute-Engine.html)

##### Interview

- Kubernetes [site](https://kubernetes.io) [github](https://github.com/kubernetes/kubernetes)
- Kubernetes SIGs and Working Groups [github](https://github.com/kubernetes/community/blob/master/sig-list.md)
- Kubernetes Community Content [github](https://github.com/kubernetes/community)
- Kubernetes Contributor Guide [github](https://github.com/kubernetes/community/tree/master/contributors/guide)
- Kubernetes slack [join!](http://slack.k8s.io)
- Kubernetes design proposals [github](https://github.com/kubernetes/community/tree/master/contributors/design-proposals)
- Kubernetes Issues [help wanted](https://github.com/kubernetes/kubernetes/labels/help%20wanted)
- Kubernetes Contributor Summit [site](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/co-located-events/kubernetes-contributor-summit/)
- Kubernetes Weekly Community Meeting [github](https://github.com/kubernetes/community/blob/master/events/community-meeting.md)
- Dev Statistics [site](https://k8s.devstats.cncf.io)
- Kubernetes Mentoring Initiatives [github](https://github.com/kubernetes/community/tree/master/mentoring)

<div style="text-align: center">
  <a href="https://kubernetes.io"><img src="/images/post/Kubernetes.png" style="margin: auto; max-width: 40%;"></a>
</div>

##### Question of the week

If I need to temporarily increases the power of a [Cloud Shell](https://cloud.google.com/shell/), how do I do that?

- Boost Mode [docs](https://cloud.google.com/shell/docs/features#boost_mode)
- Justin Garrison [tweet](https://twitter.com/rothgar/status/979365090469101569)

##### Where can you find us next?

- Melanie will be speaking about AI at [Techtonica](https://techtonica.org) on April 11th, and April 14th
will be participating in a panel on Diversity and Inclusion at the [Harker Research Symposium](https://www.harker.org/about/events/research-symposium#bookmark-intro)

{{< transcript "MARK: Hi, and welcome to Episode Number 120 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel and I'm here with my colleague, Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: I'm doing good. How are you doing, Mark? 

MARK: I can hear in the recording, I've definitely got a gravelly voice from being sick for the past few weeks. I'm getting better slowly. 

MELANIE: You're surviving somehow. 

MARK: I'm surviving. 

MELANIE: I know, the second wave of the flu has caught both of us in its wake, unfortunately. 

MARK: Yeah. 

MELANIE: But, hopefully, this will be out of the woods soon. 

MARK: Yeah, hopefully and the editors will cut out all my coughing. 

MELANIE: Yeah, or leave it in for authenticity. Mark, who are we talking to this week? 

MARK: I'm really excited about the interview this week. Were talking to one of my favorite people, Paris Pittman, Program Manager for the Kubernetes community. And we're also joined by Garrett Rodrigues who is a Technical Program Manager for Google Kubernetes engine. We're talking all about how you can contribute to Kubernetes. 

MELANIE: Wow, we never talk about Kubernetes. 

MARK: No. But I like talking about Kubernetes mostly because of the alliteration that I can use with ks. 

MELANIE: Nice. Yeah and it's a good episode, especially. I appreciate it when we get a chance to talk about open-source especially. But before we get into our interview, as always, we talk about our cool things of the week and our question of the week. 

MARK: Yeah, so this week comes from the community. We were asked about-- we have this one thing called Cloud Shell but sometimes you might want to use a little bit more power. So if I need to increase the power for my Cloud Shell, maybe temporarily, how do I do that? 

MELANIE: Ooh. Well, before we get into all the other things, let's talk about the cool things of the week. So one of the cool things of the week was at the end of last week there was the TensorFlow Dev Summit and this is their second one and they had a number of announcements. And we're going to include, in our show notes as always, we'll include the link that gives you the highlights from that. 

But a couple of things that stood out, especially, were they have announced TensorFlow Hub, which is a space that they're using to help share and allow people to reuse models that have been trained and pre-trained. It includes weights, it allows people to take that and use that to improve their own models for generalization or speed up their training. They've also announced that they're supporting more languages, like Swift and JavaScript. And they have this additional components that they've been building out to help build a more extensive, full scale machine learning platform to incorporate things like Apache Beam. 

So there's a number of resources and links and things. Oh, and they're also integrating with Nvidia's TensorRT, which has a library that optimizes deep learning models for inference. I know, that's a lot of stuff. It's very cool stuff, it's all the cool stuff but-- 

MARK: That's all the cool stuff. 

MELANIE: But we do have more cool things of the week. 

MARK: This TensorFlow hub thing looks cool. 

MELANIE: Yeah. It's nice to have actual content that you can share and reuse and not have to start from scratch. OK, another cool thing of the week that's not TensorFlow machine learning, there's the RSA conference that's coming up. And that's happening the 16th through the 20th of April. And so we have a link that we're going to share that will announce the Google Cloud Security talks that are taking place during the actual RSA conference, like Ian Goodfellow's going to be speaking about security machine learning. 

But we also have our separate side event that's going to be going on that has a host of number of different types of talks around security that's taking place April 17th and 18th in San Francisco. And we were saying this before, it's at the Westfield Centre, a.k.a. The Westfield Mall. So you can go shopping too, apparently. 

MARK: That's about a five minute walk from Moscone, apparently. 

MELANIE: Nice. Yeah, all the things. So, yes, we will include a link for people to check out what specific talks are happening and when and see all the things around security. 

MARK: I definitely-- at the RSA Conference there's a thing called Post Quantum Cryptography. 

MELANIE: Yes. 

MARK: I think I only know what two of those words mean or maybe one of them, post. 

MELANIE: Post. And actually, we're going to be doing a podcast after this event that's going to talk a little bit about quantum security. But that will be later in the month. 

MARK: Cool. 

MELANIE: That'll be fun. All right, Mark, any cool things of the week on your end? 

MARK: Yeah, so we were actually speaking of security, that's my lovely segue. There's a really good blog post that came out the other day from-- oh my god, I'm going to massacre his last name. 

MELANIE: It seems like a thing we need to do every week now, which names can we massacre? 

MARK: It's just the thing-- oh, man. Maya Kaczorowski, possibly. They are product manager for security and privacy. They do a wonderful article called Exploring container security. So it's an overview of all the different things you can do when containerizing in your applications, particularly running them on Kubernetes, and the various layers that you have that you can apply for providing security. Everything from infrastructure logging to secrets as well as network, all sorts of other good stuff. 

So if you're building applications using containers in Kubernetes for security purposes, you might want to check that out, it's really, really nice. 

MELANIE: Cool. Anything else that you want to talk about? 

MARK: Yeah, well, since we're talking about containers, always. One of our fellow developer advocates, Mete, he has written an article about how to run Windows containers on Compute Engine. We don't talk about Windows often enough, I think, but it's obviously a huge ecosystem. 

So basically, if you're looking to run Windows containers on Compute Engine, he has a step-by-step guide for creating a container, getting it started, getting it up and running, and getting it all going, it's all the whole video in there as well. So Mete does an excellent job. 

MELANIE: Yeah, I like stuff that gives you the step-by-step and then also video, that's a nice value add. So great. Well, Mark, shall we go talk about Kubernetes? 

MARK: Sure, why not? 

MELANIE: Why not? 

MARK: So today I am really excited. We have two wonderful people here. We have Paris Pittman, Co-chair of the Contributor Experience Special Interest Group for Kubernetes. As well as Garrett Rodrigues, the Technical Lead of the Contributor Experience Special Interest Group for Kubernetes. Wow, that's a mouthful. 

Thank you so much for joining us today. How are you both doing, Paris? 

PARIS: I am very well and very excited to be here. 

MARK: Garrett, how are you doing? 

GARRETT: Yeah, likewise, I'm really happy to be on the podcast. 

MARK: Awesome. So super happy the two of you could join us today. I've been really excited about this for a long time. Paris and I work in the same office, we get along really well. So hopefully that comes through. But we want to talk today about contributing to Kubernetes, the experience of people who want to come on and get involved with this product. And so I thought you two would be great for doing that. 

But before we get stuck in to that, do you want to tell us a little bit about both of you and who you are and what you do here at Google? 

PARIS: I am on a newly formed team on Google Cloud, under Sarah Novotny, managing open source strategy for the cloud. My specific area is Kubernetes. 

GARRETT: Yeah, so I'm a technical program manager. I joined Google about a year and a half ago and I wasn't too familiar with Kubernetes when I joined. It was a relatively small team of engineers or a group of us. We could all fit in a room at that point. And since then, the project has taken off both in the open source but in the number of Google engineers contributing to it as well. 

So I'm very excited to be part of that massive growth. 

PARIS: Yeah, I definitely consider myself to be a new contributor as well. I've only been on for about six months. So, good perspective here. 

MARK: Awesome. OK, so talking about contributing to Kubernetes. Let's take it from a high level, I'm sure a lot of people know this, but I'd love to get your takes on it as well. What do you feel is like the 30,000 foot view of Kubernetes like as a whole? 

GARRETT: OK, I'll get started. So it is a complex beast. I think there's something like 30 special interest groups, so we organize ourselves-- 

PARIS: 35. 

GARRETT: 35. Are you counting working groups as well? 

PARIS: Yes, I am. 

GARRETT: There are tiers of contribution and we organize ourselves into special interest groups. So that's probably a good place to start. And these special interest groups can come in kind of three flavors-- vertical, horizontal, or project based. 

MARK: Not diagonal? 

GARRETT: Not diagonal. See, you had to ask. So vertical is like a specific area within the Kubernetes ecosystem. You can think of it as like a technical area of focus. Node might be one, networking might be another. Kubernetes API. Horizontal may be something that encompasses many SIGs, like architecture, I think is one. 

And then project is something like what we do, which is contributor experience or SIG release, which are dedicated to kind of improving how you get started contributing to the other project or SIG release into making sure that we have stable, well-tested, well documented releases on a regular cadence. 

PARIS: Yeah, and just to echo the large, we do have 52 repositories under the Kubernetes organization on GitHub, which is very large. And that includes core. And core here would be Kubernetes Kubernetes. So then we're talking about a very, very large ecosystem of things that are being built on top of. 

So when people talk about contributing to Kubernetes, you really do have to kind of get down into the granular ask of contributing what and where to Kubernetes? Because that could be a lot of things in a lot of different repos. 

MARK: That sounds scary. 

PARIS: Yes, definitely. And I think that contributor experience has been working on ways to not make that scary. 

MARK: Make it less scary. 

PARIS: Definitely less scary. More sustainable, maintainable. And making sure that the contributor has as much of a similar to same process across those repos as possible, which can definitely be a challenge. Because some of those repos are essentially different projects and may also have different workflows. 

So Garrett and myself and Elsie, who's another co-chair, and many, many other folks in the contributor experience SIG have been working on issues just like that. 

MARK: So we keep using this word "SIG," special interest group. What is this thing? 

PARIS: Its really a way to break down the project, maintain code ownership. Which is something that we are trying to undergo right now with a lot of things that the Steering Committee has been pushing out as far as standardization of SIGs and SIG charters and, therefore, you know claiming code ownership with that. 

But these special interest groups are really pushing the vision for their area of the project. So for instance, SIG networking, SIG node. Those are some of our larger groups and push different projects related to those special interests. 

GARRETT: Yeah, as the projects scale one more time, coming back to massive, massive scale, we've been focusing more on how we organize the project. And SIGs was kind of the natural way of doing it. I think that was formed prior to me joining the project, in 2016. And the idea is that these SIGs are responsible for various areas and they're forced to talk to each other when they have cross dependencies within the project. 

More recently, we've been defining the governance in greater detail. I think, within the last few weeks we have been talking about splitting the roles out into chairs for the SIG, people that are technical leads. Similar to TLs at Google who are responsible for kind of the oversight of the overall interest of the SIG. And then, sub-project leads who drive individual projects within a special interest group. 

MELANIE: And who runs it? Who runs a SIG? 

PARIS: Anyone who's nominated. Right now, I mean each SIG already has leads and now chairs. The lead to chair title change is actually very recent as of, I believe it's a week ago. But these chairs ultimately run the SIG and they were vetted through some kind of nomination process at that time of creation. 

So for instance, if you're in the project right now and you have the idea for a SIG, you would propose the SIG on the K-Dev and K-Dev meaning Kubernetes Development Mailing List. And pretty much nominate either yourself or other people to run it and then you would ultimately get nominated through +1 system. 

GARRETT: Yeah, and when you say, run the SIG, there are so many facets to that as well. There's driving technical projects but then there are the day-to-day things that come up with running your project that serves contributors from all over the world. 

So that's things like making sure that our milestones are well published, our roadmap, our goals for the quarter, our goals for release are published in an agreement that-- videos are uploaded to YouTube so people who can't make the meeting times are able to discover them, making sure that there are meeting notes, making sure that information is communicated widely. And that's done across various members of the Kubernetes community. The chair handles some of it, tech leads are responsible for some of it. So it's just a matter of working together in kind of a very large, large community. 

MARK: Do all SIGs have the same structure or does it vary from SIG to SIG? 

PARIS: It definitely varies from SIG to SIG. I think we're going to start seeing more standardization now that the Steering Committee has weighed on things like charter templates and other kind of uniform procedures. But it really just depends on what that SIG needs. So if the SIG doesn't have a need for technical guidance, then they don't necessarily have a technical lead. 

But the template that the Steering Committee has pushed down is more of guidance than it is a mandate. So it's just to each SIG their own, if you will, and on those matters. 

GARRETT: Yeah, but you bring up a great point, which is consistency. And that's something that ContribX and the Steering Committee and a lot of other people who've been around the project for a while been focusing on, which is how do we make sure that moving from one SIG to another, moving one repo to another, you get a consistent experience when you're contributing. 

So for SIGs, very recently, we've merged the charter template. And if you go into the community repo so it's Kubernetes/community, it's a GitHub repository. You can actually see that template starting to get filled out for a number of the 35 SIGs that call out who the chair is, who that technical lead is, what the sub-projects are. 

They're all done declaratively, which is another theme in Kubernetes so that there's an audit trail and you can actually see the state of the world in the repo. 

MELANIE: So I'm new to Kubernetes and let's say I want to contribute. What would be my first step? 

PARIS: First step is to check the contributor guide. That's always a very good, easy way of getting a sort of beginner checklist. The contributor guide lives now on the community repo under contributor and inside of the guide folder. 

MARK: We'll put links on the show notes. 

PARIS: Yes, of course. And the guide actually has a great story behind it, which we can get to in a second. But we have some awesome community members that have been pushing out this new style of contributor guide. Previously, we had just our growing community help us with contributor documentation, which now has issues of just docs getting outdated, links going bad things, like that. So now we are starting to centralize that process under that contributor folder. 

But the contributor guide's a great first step because then you'll see things like how to sign the CLA, what our labeling system looks like on GitHub, how to set up your dev environment, and to just get the really basic things right there. 

I think a good second step is to join the slack. The slack is very robust with 30,000 people on it. That means contributors as well as users, which equals Kubernetes community. And then also mailing lists of certain SIGs and things like that. And there is a SIG list, also in the community repo as well that will be linked to the show notes. 

MARK: I mean, that sounds like so much information as well, which is great thank you Paris. So if I am coming to contribute to Kubernetes, do you think I should be focusing on like a specific SIG? Like do I do that? Where's my entry point, do you know what I mean? 

PARIS: Your entry point depends on you, I think. And I think our experienced developers who, for instance, already have go experience may already know where their value add is. So for instance, if they really love IPv6 and that's their thing, then they would probably know to go to some kind of networking group in which they would find out on the SIG list that hey, there is a SIG networking. Let's be a fly on the wall on their mailing list and their slack channel and kind of see what's up from there. 

Or another entry point, which we've seen a lot of people come in from is documentation. As a user they see that the docs are wrong and they plug in from that perspective. And then the contributor guide story is actually one very much like that. I was here for a month, knew at the time that the contributor guide was a high priority. But, again, here for a month-- deer in headlights. I'd Google Hyatt Kubernetes. 

And I had a woman come to me through various different channels and she said hey, I'm a new contributor. I just started at Samsung. Her name's Gwen, shout out to Gwen. 

MARK: Hey, Gwen. 

PARIS: Hey, your contributor guide really sucks. What's up with this? And I said, one, welcome to open source. Submit a full request. But two, I'm so glad to hear that you're on board and passionate about contributing. And hey, we really need somebody to help us with this contributor guide. And here we are, we have an MVP for contributor guide from Gwen and company. So-- 

GARRETT: Yeah, absolutely. That's one of the things we talk about all the time in the Kubernetes community. I think they even giving out awards at some of the KubeCons for chopping wood and carrying water. 

There's a lot of work and there's a lot of really exciting feature work to be done in Kubernetes but everyone's got to start somewhere. And I think a good way to learn our process is to get involved with, like Paris said, some of the documentation work, testing is a great place to get involved. 

If I were getting started for the first time ever I would probably try and get-- hope that I found my way to the Kubernetes community repo. That way I can see the organization of the project. From there, you can find all of the SIGs and all of their meeting times. Another really valuable resource in there if you want to get started and learn Kubernetes and the history is all the design proposals are in there too, broken down by special interest group. 

So if you go-- I think it's in the contributor folder. We can add this link as well to the podcast. But all the design proposals are there and if you said you're interested in the networking SIG or the node SIG, you can see a history of all the design proposals. You can even look at the code reviews going into them and some of the discussions surrounding them. So it's a good place to kind of get some of that technical information and see the discussions kind of happening. 

PARIS: It's important to note that finding a SIG should not be the most important thing to do the first time you contribute to Kubernetes. You really should find your entrance point. And there are, as we just laid out here, multiple. 

I mean, even another just standard GitHub entry point, if you will, is just our labels. We have the help wanted label, some of the repos are using good first time or for new contributors. And that's, again, that's also something that Garrett and I are working on and other folks in the contributor experience group to get labels standardized across the board and have other repos use things like good first time issue or help wanted consistently. 

But there are definitely repos right there that use all of the above. So if you are, like I said before, an experienced contributor, you can indeed just jump right in through issues. 

MARK: Actually we've mentioned it a couple of times, I just kind of want to highlight it as well. Many, all, I don't know, the SIGs they run meetings. So there's actually in-person meetings that you can go to, it's not just all online. Is that correct? 

PARIS: That's correct. The SIGs do have their regular online meetings, which are either weekly, bi-weekly depending on their cadence. Or nightly. 

GARRETT: Twice a week. 

PARIS: Hourly. Depending on some of them. I feel like we're releasing so much you wonder if they are meeting hourly. No but then we also do face-to-face meetings and KubeCon and now we have three KubeCons a year. So one in Seattle, one in Copenhagen, one in China. And there they have 30 minute update sessions as well as deep dive sessions. And then they also do face-to-face meetings, most of them do at this point anyway. And that's just coming together at least annually just to get stuff done and set things and depending on what their needs are. 

For instance, Helm just had a Helm Summit. Shout out to the Helm crew. But yeah. 

MARK: So if I'm a new contributor, should I go to one of these meetings or is this just for the experience people? 

PARIS: I would say that probably wouldn't be your best entrance point but I think the SIG updates at KubeCon would be awesome for that. I wouldn't necessarily say the face-to-face because like I said, that that's really where they're doing deep dives in to some of the issues that they're working on. 

For instance, Storage had one in Q4 last year and they really concentrated heavily on CSI, the CSI implementation, and things like that. So I think newcomers might be lost to that conversation. But definitely the updates, for sure. I mean, that's where we owe the community an update of what we've been doing. There's also the Contributor Summit as well that we have now where it's all contributors and we're going to be building out a new contributor track George Castro with Heptio and several other people, myself, are planning that. So that will be a good time as well. 

MARK: Is that a separate event or is that part of a KubeCon? 

PARIS: That's technically a separate event, technically a part of KubeCon. They're calling it a co-located event. It is on May Day for Copenhagen, so May 1st. And it is free and no, you don't need a ticket to KubeCon to attend. So if you are a new contributor and listening right now, please feel free to go to the website, it's a Google form. That's why its a Google form and not through the website. 

GARRETT: As we mentioned all the community stuff I think we missed the elephant in the room, which is the weekly community meeting. 

PARIS: Yes. 

GARRETT: I'm not sure that we've mentioned that. That's probably the best place to get the state of the world. And that's more of at a project wide level. We talk about all the SIG meetings, everything is hosted on Zoom. But every Thursday at 10:00 AM Pacific time there's a Kubernetes Community meeting and we talk about things like the current release. There's usually a demo of a product or project within Kubernetes or something that runs on top of Kubernetes, so you kind of get a feel of how people are using the project. And there's also SIG updates there as well. So that's a really good place to kind of get a 10,000 foot view of the state of the world. 

MELANIE: How does somebody get to demo at that meeting? 

PARIS: There is a agenda document on the calendar invite that you can find on Kubernetes.io/community. And in the agenda, at the top, you just pretty much add your name to the demo list. I think, right now, we're probably in to May on that list. It's-- yeah. 

MARK: Nice. 

PARIS: Definitely, if you're out there listening to and want to demo to at least 300 plus people weekly, get on now. 

MARK: Very cool. So even if I'm just a user of Kubernetes, that actually sounds like it could just be useful as well. 

PARIS: Oh, for sure. Definitely. I mean, I think we really want users to be as much into our community as possible. I think a lot of people think community just means contributors but users should plug in because then they'll be able to see what we are rolling out as far as innovations and features and things like that. So they are prepared ahead of time and that's the best place to get that information. 

MELANIE: Before you were saying something about Helm. What is Helm? 

GARRETT: Helm, sure. It falls under SIG apps, which is short for applications, and it is a package manager for Kubernetes. So it's an easier way to customize and deploy applications. They have a bunch of, I guess what they call, charts. I'm not too involved with SIG apps so I'm probably doing a poor job explaining it right now. But-- 

MELANIE: You're doing wonderful. 

GARRETT: --for information there are a couple of repos. There's the Helm repo and the charts repo and you can see all the applications they have there. So if you want to get started installing MySQL or a WordPress application, Helm is one of the ways that you can actually do that. 

PARIS: Yeah, though it's one of 52 repos in that gigantic organization on GitHub, yeah. 

GARRETT: That's crazy. 

MARK: So I've done some work doing small contributions inside Kubernetes. I've noticed a lot of it's automated, there's a lot of build tools and build bots and things like that. Can you tell us a little bit about how that whole system works? 

GARRETT: Absolutely. That's sort of where I jumped in on the project. So there's a SIG dedicated to tooling and automation and it's going to be SIG testing. And they own what's called the test infrastructure repository. And as the project scaled, it became really important to make sure that the processes were streamlined. 

You can imagine with 3,000 plus contributors, if someone had to manually merge your PR after doing a code review, doing that across so many contributors would be time consuming and bottlenecks would appear all over the place. So we tried to leverage some of the experience from other large open source projects, from Google internally, to manage the code review process so that we require code review from people who are more experienced. We require people to demonstrate ownership over certain areas within the projects. 

There's actually two tiers of code review that are required-- there's an LGTM, which is sort of like a stylistic review in making sure that your code fits within the Kubernetes contributing standards and then there's approval as well, which is someone who is really familiar with that section of the repository. So someone who owns the node team, kind of a TL from like the node side or the networking side or wherever you're contributing to also approve the changes. 

After two people have indicated their levels of approval, two or more-- it can be more complex than that so it's worth reading the contributor guide. There's actually automation that will automatically recognize that you have sufficient approval and then magically merge your PR. So you get put into a submit queue, everything is kind of batch tested. There's a suite of tests that must pass, pre-submit tests and when that's done and successful, your code is merged. 

There are lots more requirements depending on the time of the quarter so if it's during what's called code freeze, which we're actually in right now, only testing fixes should be getting in, so no features can get in. There's kind of a complex process for contributing. And again, this is why we have that very long, complex contributor guide. But the idea is to spell it out and make things as efficiently as possible. 

PARIS: You can actually see on DevStats, which is a project that Garrett helped kick off. It's k8s.devstats.cncf.io-- another link that we'll give you. But this is an awesome way to check the stats of the project. But you can actually see-- I just wanted to shout that out, you can actually see some of the issues start to level off as we started to increase automation on certain areas and add in things like bot labeling and things like that. So that's really kind of how we're measuring to is this stuff working. 

MELANIE: Why are you guys in code freeze right now? 

GARRETT: So we are just before a release. The last month of the quarter, generally, we prepare for the minor release of Kubernetes. I believe it's releasing Wednesday, March 26. You know the date? 

PARIS: Sounds good enough to me. 

GARRETT: So the last four weeks are dedicated to stabilization. So the quarter's generally broken up with seven or eight weeks of development time where features are being submitted and there's feature work being done. And then we work on making sure that all those tests are passing before cutting a release. 

PARIS: Oh, and plug for the release team for new contributors and current contributors, they have roles on every release. And even new contributors can take the third seat role to kind of see what's going on in the lay of the land so that they could step up for other releases. 

MARK: So it sounds like there's opportunities there to contribute to Kubernetes is itself, it's documentation as well as all its automation and release processing across the board. 

PARIS: That is right. 

GARRETT: Yes, absolutely. 

MELANIE: And there's mentors. We were talking about briefly, you also have mentors that people can work with. 

PARIS: Yes. Right now I'm building out-- I think we're at four to five programs right now all in an incubation phase. Incubation because a lot of the programs that we're running are either a, new to Kubernetes or b, new to mentoring and open source in general, like the concept of group mentoring in open source. So we're testing all of those things out right now. But if you are interested in anything mentoring related or to be a part of the tests, there is a mentoring folder in the community repo as well and you can check the read me out there. 

MELANIE: What's your favorite color? 

GARRETT: Kubernetes blue. 

[MUSIC PLAYING] 

PARIS: Black, like my soul. 

[MUSIC PLAYING] 

MELANIE: Oh, I feel like we need to have a therapy session now. 

MARK: Is there anything we haven't mentioned you want to make sure you get in, any events coming up or any special things going on or really just anything at all, your favorite dogs? I'm totally cool with that too. 

PARIS: So as part of the mentoring deal one of the tests that we're running is a monthly series called Meet Our Contributors. It's sort of mentors on demand, if you will. So we're trying to solve for time on everybody's part there. And we have between four to seven contributors, monthly, come on for two different time zones. And we essentially live stream on YouTube and ask questions from the Meet Our Contributors Slack channel as well as Twitter. 

And it's pretty much anything from what is your favorite color to the contributor, to how the heck do E2E tests work? I'm very confused, my tests are failing. So it's literally anything that you'd like to ask. And again, that's the first Wednesday of the month and you can get a copy of the calendar via the community website on the Kubernetes site. 

MARK: Well, Paris, Garrett, thank you so much for hanging out with us and spending time with us and talking to us all about contributing to Kubernetes. 

PARIS: Yay. 

MELANIE: Yes, thank you. 

GARRETT: Fantastic, awesome. 

PARIS: Great. 

GARRETT: Thanks for having us. 

PARIS: Yes, thank you so much for having us. 

MARK: So thanks again to Paris and Garrett for joining us today. I love chatting about Kubernetes, love talking about open source. I hope that's a useful thing for anyone who's looking to get involved with the Kubernetes ecosystem, write some code, write some documentation, just get stuck in. 

MELANIE: Definitely. It was good to get all the insight around Kubernetes and how to be involved in it. So Mark-- 

MARK: Question of the week? 

MELANIE: Yeah. 

MARK: So thanks out to one of our community members, Justin Garrison. He sent in a wonderfully interesting question, actually, that I didn't even know existed, which was super cool. So the question was basically if I need to temporarily increase the power of the Cloud Shell VM, how do I do that? Right, so maybe I'm doing some extra processing or I want to do something that's computationally intensive, what do I do? 

MELANIE: So there's a boost mode that you can use and that's something you can find very easily in the Cloud Shell section. And so when you choose that, it apparently will temporarily increase the power of your Cloud Shell VM from a default G1 small machine type offering to an N1 standard one VM instance. 

So, yeah, you just press a button. 

MARK: Basically I'm going back to my childhood and remembering the Turbo button-- 

MELANIE: Yes. 

MARK: --on my computer. 

[FUTURISTIC SOUND] 

MELANIE: It feels like it should be called turbo and red. 

MARK: Yeah, like totally. And you just left it on. Like, I just left on-- like, I was always like, why would you turn this off? It's worth noting though once activated, all sessions will be boosted for the next 24 hours. And enabling boost mode will restart your Cloud Shell and immediately terminate your session. So just be prepared for that. 

It is an experimental feature. So additional limits may be implemented in the future but if you need that kind of power, it's there and available, which is kind of cool. 

MELANIE: Yes, definitely. 

MARK: I love Cloud Shell. 

MELANIE: Fun and effective. Well, Mark, so this past weekend we had April fools and Easter and a blue moon, all at once, did you do anything fun for all of it? 

MARK: I was really sick so I stayed home. 

MELANIE: So you slept? 

MARK: Did you see anything cool and happy and exciting? 

MELANIE: I saw some people wearing some fun hats, that-- 

MARK: OK. 

MELANIE: --was cute. 

MARK: That's cool. 

MELANIE: Lots of fun hats out there, actually. Well, I hope everybody had a good one. 

MARK: Yeah, are you up to anything exciting or interesting coming up in the next few weeks? 

MELANIE: Yes, I will be speaking about AI at a training boot camp, called Techtonica, on April 11th. And then, I'm also going to be participating in a panel on diversity inclusion at the Harker Research Symposium on April 14th. 

Mark, are you going to be anywhere? 

MARK: No, actually. So I just finished up with GDC, so now I actually have to plan out the rest of my year. So I'm going to have to do that. I don't know what I'm doing. 

MELANIE: Unfortunately you've been sick but I mean, did you technically get some rest and some downtime after GDC? 

MARK: I did. I took a couple of days off. So that's been good. So I will get better soon, I promise. 

MELANIE: Well, good. Well, I think that's it for us this week. 

MARK: Yeah, well, Melanie, thank you very much for joining me for yet another episode of the podcast. 

MELANIE: Thank you. 

MARK: And thank you everyone for listening, and we'll see you all next week. 

{{< /transcript >}}