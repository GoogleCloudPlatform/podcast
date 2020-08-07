+++
audioDuration = "00:35:53"
audioFile = "Google.Cloud.Platform.Podcast.Episode.164.mp3"
audioSize = 52068903
categories = ["Node.js", "Open Source"]
date = "2019-02-27"
description = ""
draft = false
episodeNumber = 164
hosts = ["Mark Mandel", "Jon Foust"]
title = "Node.js with Myles Borins"
image="/post/episode-164-nodejs-with-myles-borins/images/hero/hero-EP-164.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/7y4dmkC7ssL"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/avg8mq/episode_164_nodejs_with_myles_borins/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

Node.js is our topic this week as [Mark](https://twitter.com/Neurotic) and first-time host, [Jon Foust](https://twitter.com/syntxerror1), pick the brain of [Myles Borins](https://twitter.com/MylesBorins). Myles updates us on all the new things happening with Node.js, including the new .dev site that holds a ton of documentation to help people get started. Node.js now integrates with Cloud Build, the Node.js foundation has some new developments, and Google App Engine supports Node.js. The group has also been working on serverless containers.

<!--more-->

##### Myles Borins

[Myles Borins](https://twitter.com/MylesBorins) is a developer, musician, artist, and maker. They work for Google as a developer advocate serving the Node.js ecosystem. Myles cares about the open web and healthy communities.


##### Cool things of the week

* Google Cloud Next ‘19 session guide now available [blog](https://cloud.google.com/blog/topics/events/google-cloud-next-19-session-guide-now-available)
* Introducing scheduled snapshots for Compute Engine persistent disk [blog](https://cloud.google.com/blog/products/compute/introducing-scheduled-snapshots-for-compute-engine-persistent-disk)
* Reliable task scheduling on Compute Engine with Cloud Scheduler [site](https://cloud.google.com/solutions/reliable-task-scheduling-compute-engine)
* How to make a self-destructing VM on Google Cloud Platform [article](https://medium.com/@davidstanke/how-to-make-a-self-destructing-vm-on-google-cloud-platform-b99883745b62)
* Making AI-powered speech more accessible—now with more options, lower prices, and new languages and voices [blog](https://cloud.google.com/blog/products/ai-machine-learning/making-ai-powered-speech-more-accessible-now-with-more-options-lower-prices-and-new-languages-and-voices)

##### Interview

* GCP Podcast Episode 105: Node.js with Myles Borins [podcast](https://www.gcppodcast.com/post/episode-105-nodejs-with-myles-borins/)
* Node.js [site](https://nodejs.org/en/)
* Introduction to Node.js [site](https://nodejs.dev)
* Nodejs.dev on Github [site](https://github.com/nodejs/nodejs.dev)
* Cloud Build [site](https://cloud.google.com/cloud-build/)
* Firebase [site](https://firebase.google.com)
* Node.js Foundation [site](https://foundation.nodejs.org)
* JS Foundation [site](https://js.foundation)
* Linux Foundation [site](https://www.linuxfoundation.org)
* Foundation Bootstrap Team on Github [site](https://github.com/nodejs/bootstrap)
* App Engine [site](https://cloud.google.com/appengine/)
* G Suite [site](https://gsuite.google.com)
* Apps Script [site](https://www.google.com/script/start/)
* BigQuery [site](https://cloud.google.com/bigquery/)
* JSON [site](https://www.json.org) 
* The hilarious misadventures of being a platform downstream from your language [video](https://www.youtube.com/watch?v=kkHdhtzM0wk)
* Node.js Versions - How Do They Work? [video](https://www.youtube.com/watch?v=3gkm7oafWxs)
* Open Source Leadership Summit [site](https://events.linuxfoundation.org/events/open-source-leadership-summit-2019/)
* Black Girls Code [site](http://www.blackgirlscode.com)
* Scripted [site](https://www.scripted.com)
* Girls Who Code [site](https://girlswhocode.com)

##### Question of the week

How do I get google cloud APIs to work within Unity? 

[Add packages from NuGet to a Unity project](https://docs.microsoft.com/en-us/visualstudio/cross-platform/unity-scripting-upgrade?view=vs-2017#add-packages-from-nuget-to-a-unity-project) and read more in the [Unity docs here](https://docs.unity3d.com/Manual/IL2CPP-BytecodeStripping.html)

##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com) in March, [Cloud NEXT](https://cloud.withgoogle.com/next/sf), and [ECG](http://ecgconf.com) in April.

Jon will be at [GDC](https://gdconf.com), [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [ECG](http://ecgconf.com), and [Vector 2019](http://vectorconf.com/).

{{< transcript "[MUSIC PLAYING] MARK MANDEL: Hi, and welcome to episode number 164 of the weekly Google Cloud Platform podcast. My name is Mark Mandel, and this week I am very excited to be joined by the wonderful John Foust. How are you doing, John?" >}} 

JOHN FOUST: I'm doing good. Pleasure to be on the podcast for the first time. 

MARK MANDEL: Oh, awesome. So glad to have you here. For people who don't know you, do want to give people a quick intro into who you are and what you do at Google? 

JOHN FOUST: Sure. So my name is John Foust. I am a developer advocate specializing in cloud gaming. I mainly focus on a lot of the GCP unique integrations, and helping out with the Connected Games Initiative that Google and Unity have together. 

MARK MANDEL: Awesome, fantastic. So this week, I'm also excited to have another wonderful person coming to join us. Myles Borins is coming back to talk to us about Node.js. He last talked to us back in 2017-- I actually went and had a look-- so I think there's probably some new and exciting things in that. 

And then, after that, we have our Question of the Week, where I get to ask you tough questions, John, about the work you've been doing, connecting Google Cloud APIs, and working within Unity, and how you do that. 

JOHN FOUST: It'll be fun. 

MARK MANDEL: It'll been fun. But why don't we get stuck into some Cool Things of the Week before we get sucked into those other topics. My favorite Cool Thing of the Week this week is that Google Cloud Next '19's Session Guide is now available. So if you're familiar with Cloud Next, it's our big flagship conference here in San Francisco. It's big, it's bright, it's beautiful, and we do a lot of talks about all the things cloud. So if you want to see what some of the sessions are, we have hundreds and hundreds of sessions across infrastructure, application development, data management, analytics and intelligence, productivity, and collaboration. Oh, my God, so much stuff. 

JOHN FOUST: It's a mouthful. 

MARK MANDEL: So if you want to check that out. Yeah, it's a lot. But there's hundreds of topics. So check it out, and see what's going on. John, what have you got? 

JOHN FOUST: Sure. So we're introducing schedule snapshots for Compute Engine persistent disk. So what it means is that we have scheduled automated snapshots on any time info of your liking. 

MARK MANDEL: Oh, cool. 

JOHN FOUST: So this means that you can do every six hours or every Monday. And also what you can do is we have scheduled retention policies as well. So that means you can actually set it to actually delete those snapshots every six hours every Monday or every month. 

MARK MANDEL: Oh, that's super cool. That's really nice. Speaking of doing regular things to compute engines instances, there's a new solution that came out called Reliable Task Scheduling on Compute Engine with Cloud Scheduler. So Cloud Scheduler is the thing we brought out, I think was several months ago now, for doing reliable-- basically cron scheduling for items. And there is a solution here, with code, that talks about how you can use Cloud Scheduler, sending data to Pub/Sub on a regular basis-- say, like, on a cron, basically. And then reliably parsing that, or doing something, or some sort of operation on GCE with that, and making sure that it works in a reliable way, even if some of your instances go down or other things like that. 

So if you're looking to do something along those sort of lines, you can check out that blog post. It's got diagrams, and code, and all sorts of other good stuff, too. 

JOHN FOUST: Another cool thing that we have going on is one of our teammates posted a blog post-- How to Make a Self-Destructing VM on Google Cloud. 

MARK MANDEL: Oh, cool. 

JOHN FOUST: What that actually does for you is, suppose that you have a VM that's been running for a while, and you forget about it, and you don't really want to pay for it. You can actually have a startup script that actually, once you've started your VM, automatically starts a countdown for deletion. So you can set it for two hours, a week or so. It's pretty awesome. 

MARK MANDEL: This message will self-destruct as soon as you read it, or something like that. 

JOHN FOUST: Exactly. 

[JOHN CHUCKLING] 

After reading the blog post, I felt like a GCP spy. 

[MUSIC - THEME FROM "GOLDENEYE" VIDEO GAME] 

MARK MANDEL: That's fantastic. Last but not least, we have a new blog post that's coming out, talking about our AI-powered speech, giving you more options, lower prices, new languages and voices. So if you're looking to do sort of text-to-speech type operations, now we have support for seven new languages, including Danish, Portuguese Portugal, Russian, Polish, Slovakian, Ukrainian, and Norwegian, and Bokmal-- if I'm pronouncing that correctly. There's also 31 new voices, all sorts of good stuff. So there is now a total of 21 languages and variants, 111 total voices, and 57 WaveNet voices as well. So if you're looking to create speech from text, you may want to check out some of those new features that we have available. 

JOHN FOUST: Definitely going to build some cool things with that. 

MARK MANDEL: I bet you will. Awesome. Why don't chat with Myles, and go see what's going on in Node.js land. As always, I am extremely excited to have another of my favorite people joining us on the podcast today. Myles Borins is coming to talk to us about Node.js. Myles, how are you doing today? 

MYLES BORINS: I'm doing great. Yesterday was my birthday, and-- 

[HAPPY BIRTHDAY SOUND BITE PLAYING] 

We had a lot of fun, and I'm in relatively high spirits, and feeling quite positive today. 

JOHN FOUST: Yeah, it was definitely a fun time. I actually got to celebrate with Myles last night. 

[PARTY WHISTLE SOUND EFFECT] 

MARK MANDEL: Well, happy birthday, Myles. Happy birthday, indeed. Is this coming on the podcast your birthday present? Is that basically how this works? 

MYLES BORINS: You know, I didn't want to put too much pressure on you, but it's the highlight of my day after my birthday. 

MARK MANDEL: Excellent, excellent. So I know this isn't your first time on the podcast. We did have you back in 2017 for episode 105. But if people haven't had the distinct pleasure of meeting you, do you want to tell us about who you are and what you do at Google. 

MYLES BORINS: I'm a developer advocate at Google, working specifically on Google Cloud Platform, and more specifically in our languages team. I actually think we all report up through the same manager. That's fun. 

MARK MANDEL: I think we actually do. 

MYLES BORINS: This could be our weekly standup as well. Within languages, I focus on Node.js, and I do quite a bit of work with our various runtime teams. So that's Cloud Functions, App Engine, serverless containers. More recently, like in the last couple weeks, I've started digging into Cloud Build quite a bit. When I'm not working directly at Google, I do a lot of open-source work. I sit on the technical steering committee of the Node.js project, and I represent the steering committee on the board of directors of the foundation. I also do standards work at TC39, and I started to do some work at W3C and IETF as well. 

MARK MANDEL: So not a lot. Just a couple of things. 

MYLES BORINS: Just a few things. 

JOHN FOUST: And you forgot that you are very engaged in the community, especially meet-ups that involve food. 

MYLES BORINS: Yeah, that's true. I do run dim sum JS. 

[CHUCKLING] 

MARK MANDEL: I did not know that was a thing, but now I want to go to that. 

MYLES BORINS: Yeah, I used to run the San Francisco one. 

MARK MANDEL: Excellent, awesome. So yeah, we did have you back in 2017, talking about all the Node.js things. But it's been a year or so. So what's changed? I'm sure there's stuff. 

MYLES BORINS: There's a couple different things. One of the things that's fairly new and I wanted to plug that I'm excited about is Node.js.dev. So Google has very recently launched the .dev top-level domain. And as part of launching the domain, which has a number of stages of access-- so if you really, really cared about getting a domain, you could have gotten it a couple of days ago for $11,000. I think it's now like $1,100. And by I think it's Monday, it gets down to about $150. So I have a reminder set for Monday. 

[ALERT CHIME SOUNDING] 

Hopefully I can get a couple I have on my mind a little cheaper. But it goes all the way down to-- $15 will be regular registration. A number of different partners, as well as individuals who own IP rights, got early access to domains. And one of those was Node.js.dev. The .dev team reached out to myself and Franziska Hinkelmann, who is another DevReler who focuses on Node.js, asking if we'd be interested in using it for the foundation. 

And in six weeks of a sprint, we put together a static Gatsby website. It is based on a whole bunch of content that the project's been working on for a while. It's a whole new slew of Getting Started documentation about, hey, how do I get started with Node? What are some of the basic concepts? How do I even do a Node? And so it's a really great starting place for people who want to learn about Node.js. It's also an open-source project that's available on GitHub.com/nodejs/nodejs.dv. So if you're looking for kind of a low-barrier way to get started in contributing to the Node.js project, if you like React, if you like Gatsby, if you like playing around with websites and improving SEO, there's lots of different ways where you can come in and get involved. 

JOHN FOUST: Nice. What can we actually expect to see on Node.js.dev, like, the landing page? 

MYLES BORINS: So there's actually a bit of a history to the content that ended up there, which I think is kind of fun. So we have the current Node.js.org website. And that has been around for a number of years. It's showing its age a bit. And I think around a year to a year and a half ago, working groups spun up around a website redesign. And they've been doing this super-extensive redesign of the whole site. 

And as you can imagine, when you decide to just completely replace something instead of just doing iterative change, it takes a long time to make something that's feature-complete or to build consensus around the features that you're going to drop. 

One of the things that team worked on was this large slew of content. There was a collaborator who-- their name is escaping me right now, but I'll dig it up and hand it over to both of you so we can include it in the liner notes. But someone wrote all this amazing content, and donated it to the website redesign group. And it was to live on the /learn page on that new site. And when we found out that we were going to get the .dev TLD, one of the first things we need to figure out was, OK, well, what content are we going to even put there? And it quickly came up as like, hey, actually we have all these wireframes for the new, redesigned website, including this one Learn page. And we have 70 to 100 pages of documentation. Why don't we just do that? 

And so we actually just made was originally supposed to be a single route on the new page into this one kind of specific landing page. And it's possible that we may just slowly kind of bootstrap more and more features onto this page, and it could eventually become the new Node.js landing page altogether. But it may continue to just be its own separate learning resource page. 

But John, to more explicitly answer your question, all of this is very much up in the air, and it's going to be very much determined by who's showing up and who's doing the work, what work actually gets done, what kind of consensus we can build around it. But the future is open. It can be whatever the people who are working on it make it into. 

MARK MANDEL: That's awesome. 

JOHN FOUST: Yeah, it looks like all the content is all available on GitHub. So if you want to go and edit it, you can go play with it all in there, if you want to add or edit and do stuff to it. 

MYLES BORINS: Yeah, and we actually just added today, at the bottom of the page, it's just an Edit on GitHub button, which will drop you right into the GitHub editor. And so it's all just markdown. So if you see a spelling mistake, just scroll down to the bottom of the page, click that button, you can send us a PR. 

MARK MANDEL: Excellent. And I think you were talking earlier, and you said there was some Cloud Build integration or something like that. You did some GCP integration there. What's that all about? 

MYLES BORINS: Yeah, so for those who don't know, Cloud Build is a product from GCP. I have been, very recently, as of yesterday, when I had an aha moment, referring to it as like serverless ops. But it's a really cool product where, with a YAML file, you can describe, hey, here's a container, and then run this command with the container, and set a series of steps. You can then connect Cloud Build to a particular repo, and then you can trigger particular YAML files that describe builds or Docker files on specific actions. And those can either be pushes to specific branches, the creation of tags, or on pull requests. And you can create regular expressions to filter them all as well. So you could be like, hey, if a branch is pushed, then it matches this. 

So like for example, one of the things that we do is deploy to Firebase Hosting on a push to master, so it auto-deploys with continuous integration. And then the other one that we have is build and push to staging on a pull request. But one of the things that Cloud Build has that's kind of interesting is we have it set up so that it doesn't run automatically when a pull request is opened. A collaborator actually has to put in a special comment, and that will trigger the build. And the reason for that is, what gets kind of neat with this is, internally, in the IM roles inside of Google Cloud, you can set specific IM rules to the build agent itself. 

So for example, I'm using Cloud Build to deploy to Firebase. And all I had to do was deploy a new image that is meant to deploy with the Firebase API. And then I gave Cloud Build itself IAM admin privileges over Firebase. And now, whenever it runs that script, all of the credentials that are necessary are already inlined. So I don't need to inline any credentials. And I can restrict or add more privileges based on what the need are. 

But this is part of the reason to have it so that, for running the build, you need to have a comment from a collaborator. We went back and forth on this quite a bit. But it could be like a resource attack. If you just automatically kicked it off, and then someone could just shimmy in a bitcoin miner. 

[ELECTRONIC CHIME SOUNDING] 

Which you don't want happening. 

MARK MANDEL: Ooh, so that's really interesting. How have you got the integration set up between the GitHub page itself, and running a comment there, and then firing off a build on Cloud Build? Because they're not hooked up that way. 

MYLES BORINS: So this is just built into Cloud Build, actually. So with Cloud Build, there's a new thing that's rolling out publicly soon where you essentially click a button to link the repo. It links to the pull request, and using GitHub's event-based API, it actually triggers an event which we handle internally on every comment. So it's actually just a box you tick when you're setting up the pull request trigger, that just says, do not run this trigger unless someone explicitly runs it. 

So we actually kind of have two different things going on right now. We have one check suite where Travis runs, and Travis will run the build, Travis will run the test suite, and it will let us know if anything's broken. And then we can trigger this other build through Cloud Build, and what it will do is it compiles the site, it builds it, we have a single folder, and it uploads that to GCS using the SHA of the commit as kind of the slug for it. And then it puts a comment in that says, hey, go to this link, and you'll have a staging version of the site. 

MARK MANDEL: Nice. 

MYLES BORINS: This just makes it really easy for people, when they send PRs, we can kick off a build once we review it and see that there's nothing nefarious going on. 

[EVIL LAUGHTER SOUND EFFECT] 

And at that point, we have a link that anyone can go to and look at. So people can review it, even on mobile. You never have to really have an environment set up to review it. 

JOHN FOUST: That's awesome. 

MARK MANDEL: That's super nice. Actually, it sounds like Cloud Build and GitHub integration has improved since I last looked at it. 

MYLES BORINS: Yeah, and it's been really fun digging into this as well because there's all sorts of unexpected edge cases that I've been encountering. And it's been really great working with the Cloud Build team. They've been super responsive, and they're really interested in making a best-in-class integration here. So it's been really fun. 

MARK MANDEL: Awesome. I know you do a lot of stuff as well on the Node.js Foundation site as well. There's been some interesting foundational work that seems to be going on recently. You want to tell us about what's happening there. 

MYLES BORINS: I like how it called it, it's foundational. 

[CHUCKLING] 

So the Node.js Foundation is a nonprofit. It's a 501(c)(6). And it has this mission of sponsoring, overseeing the Node.js project and the work towards it. There's another foundation in the ecosystem focused on JavaScript, called the JSF. It's the JS Foundation. And they are actually both under the Linux Foundation as kind of like where they were brought up. 

And for a number of different reasons, including, hey, there's two things, which one do I support financially, we found that it was in the best interest of all of the projects to look into merging the two foundations. So last October, we announced at Node Interactive that we had an intent to merge the Node.js Foundation and the JSF into one umbrella organization. Some of the biggest differences for the Node.js Foundation itself was that there are more than one project in it actually expressed in libuv and under the Node.js Foundation as well. It was mostly built up to support a single project. And the top-level governance of that project, the technical steering committee, was chartered direct from the board to oversee kind of everything in the open-source side of things. There's a strong separation. And I think we dug into this in our last podcast. But there is a really strong separation between the technical governance, and kind of community governance, and the financial governance. 

So the board oversees finances. They oversee certain degrees of marketing. But the board is unable to tell Node Foundation, hey, put this person on your committee, or hey, plan this PR. We have a community governance process that's set up. We're openly governed. And that's how things run. 

And so one of the interesting challenges here is the JSF has, I think, like 15 or 20 projects. I should know that number. I don't know it off hand. 

MARK MANDEL: Give or take. 

MYLES BORINS: Yeah, give or take. 

MARK MANDEL: 10%. 

MYLES BORINS: But in the merger, we now are going to have a structure where we need to support many projects. And so, since October, we have been holding weekly open public meetings. We've been broadcasting them on YouTube, and they're all saved, and there's meeting notes for all of them that are on a GitHub repo, GitHub.com/nodejs/bootstrap. 

And this bootstrap committee has been designing the governance for the new foundation. It started with a couple of weeks of actually designing the governance for the committee so we could design the governance for the foundation. And once we reached consensus on a process, it actually, in a really amazing way, unlocked this thing we had never really considered before, where the foundation itself, we never really had a process for how collaborators could come up with new processes, or new committees, or new initiatives that they wanted to run within the foundation. 

So the first thing we did was actually design this process. It's a proposal process. It's based on how CC39 designs the JavaScript language. But there's three phases-- technically four, if you consider stage zero. But it's like, hey, here's an idea of something we want to do, is stage 0. Stage 1 is, hey, here's a rough shape of how we want to do it. To get to stage 2, you need to actually have all the documentation put together and agreed upon by the community that, hey, this is exactly how we want to run it. And in stage 2, it goes to the board or whatever committee will oversee it, to approve that, hey, we agree with this. And then it moves to stage 3, which means it's initiated. 

So moving forward, the foundation will actually have a whole thing in place for people who want to do new things with it. The foundation is being designed with a top-level committee known as the cross-project council. There will be representatives from various different projects within the foundation itself on that committee. And that committee will be chartered by the board to oversee chartering other projects, managing budget, code of conduct escalations-- we're actually looking at having a foundation-wide code of conduct. 

And it's going to be interesting finding the balance, because in the same way that we kept a clear separation between the board and the technical project in the Node Foundation, we want to still maintain a pretty clear separation between the cross-project council and the technical projects. We don't want the foundation itself dictating too directly how projects should be run. But with that being said, we're pretty opinionated about what it means to be openly governed, and what makes healthy, active projects. So there are things that will be necessary. But we're trying to find the balance there. 

So you will have to have a license. It may have to be within a subset of licenses. But we're not going to be like, you must have the Apache license. But it will be like, hey, you must have Apache, or MIT, or a GPL that doesn't start with the letter A, or some combination of that. 

We're also going to have a strict code of conduct that all of the projects must adopt. But then that introduces interesting problems. Like if a project only has 10 or 15 people, how do we actually help them maintain and enforce that code of conduct if they don't have the resources to do so? So we're looking at spinning up foundation-wide committees to help with that. 

And there'll be a number of different places where projects can come in different progression. So like, for example, right now, when we were doing the merger of the libuv project-- and that's kind of the underlying abstraction of system calls that's used in Node. That project is healthy and active, but don't have any interest in working with higher-level governance or getting any sort of marketing support or larger financial support. They just want to keep the lights on and have infrastructure support. 

So we have a way that they can come into the new foundation. There's no expectation of them having to grow to do anything more. It's a vendor-neutral place for them to keep their IP. It's somewhere for them to receive the small amount of resources that they need, and to just come and do their thing. And they'll still be empowered to come, like any member of any project in the foundation, will be able to attend CPC meetings, and be able to participate in consensus at the CPC. But there will be a smaller subset of voting members that represent the impact-level projects, which was kind of like our top level. 

I mentioned all these different things you need to be in the Foundation. There will be even more guidelines for projects that we're considering impact-level, that will have more support from the foundation itself. I think I spiraled out there. 

[CHUCKLING] 

There's lots of stuff. So I guess, in short, check out that bootstrap repo. All of the governance has been designed using that proposal process that I was talking about. All the proposals are documented in there. And you can read them, you can see the history of how we got where we are. And if you are a member of any of the projects that are involved in the foundation, you're encouraged to open a PR and start engaging and changing it. Show up to any of the meetings and participate. We're trying to minimize the amount of hierarchy, but create enough structure to empower people to enact the change they want to see. 

JOHN FOUST: We've actually shared a cab ride. And I remember you giving me the less long-winded version of this. And I can tell that you're pretty excited about it. 

[CHUCKLING] 

And this version is still pretty abridged, too. We could probably do a two-hour podcast of me talking just about this. 

MARK MANDEL: Oh, my God. 

JOHN FOUST: Definitely. But Myles, I'm curious, what does this actually mean for developers? 

MYLES BORINS: Foundations can often be like a release team. It's one of those things that you don't notice until you need it. And generally, when it's in a place that really is like, oh, my God, I'm so glad I have this in place, it's usually too late if you didn't have it. A good thing for developers would be, any of the projects that are inside of this foundation, they should know that resources, oversight, and initiatives are in place to help support that project and make sure that project is healthy. Arguably, if any of the projects within the foundation are not doing well, that reflects poorly on the foundation and the Cross-Project Council itself. So I think that there is a certain amount of comfort that people could have in knowing that the projects are going to be maintained. 

The other side, too, is if you're a developer working for a company, and that company maybe has stringent open-source policies, or alternatively, if you want to be collaborating on something, in general, having the IP of an open-source project in a neutral body that's a nonprofit significantly helps organizations collaborate together on these things. 

So like Node.js being inside of this nonprofit, in this gender-neutral place to store everything, that allows companies like Google, and Microsoft, and IBM, and Intel all to come together and collaborate. And I know, at least from personal experience, that some of the organizations that I mentioned would not put an entire headcount or multiple headcount onto a project if it was owned by a competitor. That's just not smart business. So I think also, as a developer, it helps you to maybe contribute back, depending on the company that you work for and their policies. 

JOHN FOUST: That's awesome. 

MARK MANDEL: Nice, nice nice. What news have we got about Node.js on Google Cloud Platform? Have we had any recent updates or cool things that have come out that you want to talk about as well? 

MYLES BORINS: Yeah, absolutely. I mean, there's a couple different places where you can run Node in our cloud. 

MARK MANDEL: Yeah, maybe give people a reminder of where you can run Node in our cloud. That's probably a good starting point. 

MYLES BORINS: One of the obvious ones, the old-school way of running code in Google Cloud is App Engine. And so we've got both App Engine Flex and App Engine Standard Support for Node.js. We currently support the Node.js 8 runtime in general availability, and the Node 10 runtime is beta. But I do believe that we're going to be moving 10 to general availability in short order. I don't have an explicit timeline on it, but sooner rather than later might be a nice way of putting it. 

For Cloud Functions, we support Node.js. We support Node.js in version 6 and 8. Both of those are in general availability. And in a similar short order, we're looking at bringing out the Node.js 10 runtime in beta on Cloud Functions. 

We also have this thing that's being worked on that's kind of secret, but not super secret, because I know I can tweet the sign-up link. But we have this thing that we've been working on called serverless containers. And that's totally a place that you can run Node as well. I mean, arguably, you can run anything that's in a Docker container that responds to something on port 80. 

[CANNED LAUGHTER SOUND EFFECT] 

But it is a cool place to put Node. And one of the ways I like to think about it, too, is all of these are kind of abstractions on themselves. And I think something that we're working towards and trying to get out in the Node 10 runtime for Cloud Functions is this idea that there really isn't that much difference between a container, an app, and a function. And a function itself is built with containers, and it just has an opinionated way of running the code. It looks a lot like Express, but it's a little framework that's built on top of Node to make it easier to run your code. 

So if you're writing code inside of a function, and then you kind of hit this boundary of, hey, working within this one function isn't really giving me all the flexibility and expressiveness that I need, you can easily take that and turn it into an app, and then deploy it to App Engine, and see similar billing or similar functionality. Also, maybe better cold start times, depending on what you're doing. 

But if you had the edge of, hey, this is the edge of what I can do with App Engine Standard, which is going to have faster deploy times, and it's more managed, you can move to Flex or to serverless containers, and start using a Docker container, if maybe there's a native module that we don't support, or there's something that you need to do, like spinning up a binary, or anything fancy that goes beyond what we offer in our base image. 

One of the things that I find really empowering and important to think about is, there are containers all the way down all of these things. And so it's kind of just like how much sugar do you want in your cereal, and how much do you want things to be on rails? I don't know. I can come up with some more idioms. 

[CHUCKLING] 

JOHN FOUST: Sugar in your cereal is awesome. 

MYLES BORINS: But really, at the end of the day, I guess functions also have the advantage of eventing right now. So you can take some event and tie it to a function. So it's really easy to have something that puts a whole bunch of things in a task queue that triggers a Pub/Sub, and then triggers a function in the background. I like using these sort of things like emailers, or for transcoding and stuff like that. 

But overall, all of these different things have their uses, and we can kind of grow with you, depending on what you're doing, how you're doing it, and what you need to do. 

JOHN FOUST: Yeah, sure. So Myles, what other places can we actually run JavaScript? 

MYLES BORINS: So there are a handful of other places you can run JavaScript in Google Cloud that's really fun, and maybe you wouldn't think about it. You can run JavaScript inside of any G Suite products with App Script. App Script is JavaScript. And there's a new beta that you can use to try it out with the new V8 engine. So if you've ever written functions to edit your spreadsheets-- I'm actually using it right now. We're managing a guest list for a large event that we're planning. And there were some queries that we want to do that I couldn't figure out how to do that inside of Sheets. So I actually just wrote a little script, and it did it in a really nice way. 

You can also write user-defined functions inside of BigQuery. So you can write JavaScript instead of BigQuery, in case your JavaScript skills are a little bit better than your SQL skills. Another one that you can do there that I find super fun is if you're doing anything with parsing JSON. It's way easier to parse and manipulate JSON with JavaScript than it is with SQL. So you can write little query functions to do that. 

MARK MANDEL: I don't know Node very well. And we're talking about different Node versions. Like you said App Script is moving to the V8 runtime, and on App Engine, it was moving from like 8 to 10 or something. Why would I want to change the different versions of Node that I'd be using? Why do I care as a developer? 

MYLES BORINS: One thing I could advise to people who are listening, if they want to learn more about this-- there is a talk that I gave, called "The Hilarious Misadventures of Being a Platform Downstream From Your Language," that kind of digs into this a little bit. But the shorter version is, Node kind of conflates the concept of an API and a runtime, and it embeds something called V8. 

So V8 is the JavaScript engine from the Chrome browser. It's part of the Chromium project. It's its own open-source project. And V8 gets embedded in a whole bunch of different places. So when we're talking about App Script, the new version is based on V8. When we're talking about those user-defined function stuff, V8 is what's executing the JavaScript. So V8 is a JavaScript virtual machine, and it gets embedded in different places, Chromium being one of them and Node being one of them. We embed V8 when we execute your JavaScript code. We're handing it off to that VM, and it's executing it and doing stuff with it. 

But with Node, it executes your code, but it's not just executing arbitrary JavaScript. It's executing it with very specific semantics. When you use require, for example, that is a "Nodism." That's an API that we created for module loading. And when you use something like fs, that's not like the standardized API for file system work that runs everywhere. It is a node-specific API. 

So Node itself is that combination of a runtime and an API surface. And when we talk about the different versions, like Node 8 versus Node 10, one of the biggest and most obvious differences is that 10 has a newer version of V8 in it because it came out later. And us updating V8 is a senver major change for all sorts of different reasons. I gave another talk, called "Node.js Versions-- How Do They Work?" which kind of digs into that. But essentially, it's a breaking change for us to upgrade V8 inside of Node. 

So when you're on an older version of Node, like Node 8, you're using an older version of the virtual machine. So it may not have all the same language features. I think one of the ones that's in 10 that isn't in 8 is like array.includes, maybe? There's a couple of them. The JavaScript language is standardized, and there's new features added on a yearly basis. 

So a new version of Node is likely to have new features. Like node 8, for example, introduced async/await, which is a new way of handling asynchronicity, which I can bubble about for a long time. But Node 10, for example, comes with a whole bunch of optimizations to async/await. So the same async/await code will run like 20% faster in Node 10 than in Node 8. Because when it came out in Node 8, it was still a relatively new feature. That's the different versions of Node, but then there's also all those different versions of V8, which introduced the new features. And when we upgrade V8 in Node, we get those new features in Node, which then in turn requires us to update some of our APIs to reflect that. 

So we're in the process, for example, of introducing a whole bunch of new promise-based APIs. Because most of our APIs are traditionally callback-based, and more specifically, Node-callback-based, which is a very specific way of writing callback code. But if you want to use async/await, you want promises. 

So like, for example, in Node 8, we had this new API called util.promisify. So you could take any API that was written using a callback-based API, we'd turn it into a promise-based API for you. But one of the things that we can do as a runtime, because we're directly interfacing with V8, is we can call the underlying mechanisms of creating promises in V8 itself. So we can actually remove one promise and a couple stack frames by doing it this way. So if you use our you util.promisify function to turn your callback APIs into promise-based APIs, it'll be more efficient than if you just wrapped it in a promise. But people can also just write promise-based APIs. There's lots of different ways to do it. 

To your original question of why that matters, really, it comes down to what API surface you want to do and what language features you want available. 

JOHN FOUST: Awesome. I'm actually quite interested in Cloud Functions. So I'm hoping that we can actually sit down together and hash out some Cloud Functions for gaming. 

MYLES BORINS: Yeah, absolutely. Awesome. I think, for gaming, too, depending on what you're doing, there's a lot of interesting uses for Cloud Functions in general. And I think it would be cool to get down and kind of-- like similar to what I was talking about where there isn't a huge difference between functions, and apps, and containers, there are subtle differences. So figuring out those subtle differences tend to be how you can figure out which of those shapes is the most appropriate for the problem space you're solving. 

MARK MANDEL: Sweet. Before we run away today, is there anything special that you want to plug? Are you going anywhere? Are you announcing anything? Anything you haven't covered today that you want to make sure we mention before we finish up? 

MYLES BORINS: Well, I mean, the merger, we're hoping to land officially and legally, March 11th at the Open Source Leadership Summit-- fingers crossed. I would encourage people, hey, there's a whole bunch of organizations that you can volunteer for donate to, to help people get into technology who are from traditionally marginalized or underrepresented groups. So groups like Black Girls Code or ScriptEd, or Girls Who Code. There's a list. We should come up with a bunch and put it at the end of this podcast. 

But I, for one, love to spend my time doing lots of different things. It is not that hard to just squeeze in a little bit of time to volunteer for these organizations, or to squeeze out a little bit of money to help support them. The world's not going to change by themselves. So put some time. 

JOHN FOUST: This is great, because I actually teach to a program that kind of functions in the same fashion, targeting those marginalized, underrepresented groups. So this is definitely an awesome thing to hear. 

MYLES BORINS: Awesome. 

MARK MANDEL: Well, Myles, thank you so much for joining us today and telling us all about Node.js and all the fun things. 

[CHUCKLING] 

MYLES BORINS: Thank you for having me. This was a lot of fun. Hopefully we can do it again sometime, in maybe 2021 I'll pencil it in. 

[CHUCKLING] 

MARK MANDEL: Always a pleasure. 

JOHN FOUST: So thanks, Myles, for joining us. And hopefully we'll hear from you in the near future on the many cool things you're doing. 

MARK MANDEL: Yeah, always a pleasure to talk to Myles. Getting stuck into our Question of the Week, though, I get to ask you tough questions, which is fun, too. I hear you've been having lots of fun connecting Google Cloud APIs to work within the Unity game engine. I think that's not as easy as it sounds. How have you managed to get this to work? 

JOHN FOUST: So recently, I've been using a lot of Pub/Sub and Translate. And in order to get those APIs working, what you actually have to do is, if you're using Visual Studio as your editor for Unity, what you do is you download the NuGet package, and it will download a series of libraries on your computer. And you'd actually have to locate those files and move them over to a plugin folder in your Unity projects root folder. Once you do that, you have to create this link.XML file that actually loads all these references on startup. Because just downloading NuGet packages won't really help you because Unity looks for those dependencies, and those references, and all those assemblies that you need to load up, every single time that you start Unity. And if your project cannot have a file that points to those, then it won't start up. So that's a great option to help you get started. 

MARK MANDEL: And that's the NuGet package for the Google Cloud libraries? 

JOHN FOUST: Yes. You can use any NuGet package that has a supported C# client library. 

MARK MANDEL: Oh, nice. Very, very cool. Well, that's a great tip. Before we wrap up today, John, where are you going? Doing anything fun and exciting in the near future? 

JOHN FOUST: Yes, so I'll be at GDC next month. I'll be at Cloud Next in two months. I'll be at ECGC. It'll be really fun. And I will also be at Vector 2019. 

MARK MANDEL: Oh, very nice. I like Vector. It's a shame that I won't be there this year. Yes, so I think we're going to be at the same places. I will also be at GDC, presenting on Agones, and doing all sorts of good stuff, too. Come check out the Google booth. We're part of that. Cloud Next, we'll be there as well. I just got told it that we will have a space on the show floor for the podcast. So if you're coming to Cloud Next, definitely swing by and say hello. And I'll also be at East Coast Games Conference, presenting as well. 

Awesome. Well, John, thank you so much for joining me on the podcast today. 

JOHN FOUST: Yeah, it's been a pleasure, and I can't wait to join many, many episodes in the future. 

MARK MANDEL: Excellent. And thank you all for listening. And we'll see you all next week. 

JOHN FOUST: Awesome. 

[MUSIC PLAYING]