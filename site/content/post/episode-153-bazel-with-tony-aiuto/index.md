+++
audioDuration = "00:30:45"
audioFile = "Google.Cloud.Platform.Podcast.Episode.153.mp3"
audioSize = 44695871
categories = ["Bazel", "Open Source", "Build System"]
date = "2018-10-31"
description = "Happy Halloween! On this not-so-spooky episode of the Google Cloud Podcast, Melanie and Mark talk with Tony Aiuto of Bazel."
draft = false
episodeNumber = 153
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Bazel with Tony Aiuto"
image="/post/episode-153-bazel-with-tony-aiuto/images/hero/hero-EP-153.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/SgzpNQqWCY1"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9t0hyf/episode_153_bazel_with_tony_aiuto/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Happy Halloween! On this not-so-spooky episode of the Google Cloud Podcast, [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) talk with Tony Aiuto of Bazel. Bazel grew from Google's internal build system, Blaze, to become the open source Bazel that it is today. The aim of the project is to quickly make very large builds across multiple languages. 

<!--more-->

##### Tony Aiuto
Tony is the tech-lead/manager for Bazel Product Excellence. He works on removing what enterprise users see as barriers to adoption. Tony's efforts are on bridging the gap between the piece of open source code that the developers see and the product that users want to see.

##### Commentary of the week

Where can I donate if I’m angry or sad by last week’s news? 

* Time's Up Now [site](https://www.timesupnow.com/)
* Project Alloy [site](https://www.projectalloy.org)
* MeToo Stem [site](https://www.gofundme.com/metoostem)
* HIAS [site](https://www.hias.org)
* ADL [site](https://www.adl.org/)
* Protest NIPS conference name [site](https://www.change.org/p/members-of-nips-board-protestnips-nips-acronym-encourages-sexism-and-is-a-slur-change-the-name?recruiter=552354677&utm_source=share_petition&utm_medium=twitter&utm_campaign=share_petition)

##### Interview

* Bazel [site](https://bazel.build/)
* BazelCon [site](https://conf.bazel.build)
* Bazel on GitHub [site](https://github.com/bazelbuild/bazel)
* Bazel Discuss on Google Groups [site](https://groups.google.com/forum/?nomobile=true#!forum/bazel-discuss)
* Bazel on Slack [site](https://bazel-slackin.herokuapp.com)
* Tweag [site](https://www.tweag.io)
* Tweag Haskell Rules [site](https://github.com/tweag/rules_haskell)

##### Cool things of the week

* It's Halloween!
* And it's the 3rd anniversary of the podcast!
* Gain insights about your GCP resources with asset inventory [blog](https://cloud.google.com/blog/products/gcp/gain-insights-about-your-gcp-resources-with-asset-inventory)
* Introducing the Cloud KMS plugin for HashiCorp Vault [blog](https://cloud.google.com/blog/products/identity-security/introducing-the-cloud-kms-plugin-for-hashicorp-vault)
* Serverless from the ground up: Adding a user interface with Google Sheets (Part 2) [blog](https://cloud.google.com/blog/products/serverless/serverless-from-the-ground-up-adding-a-user-interface-with-google-sheets-part-2)
* Cyber Security for the Previous Generation [blog](https://nyghtowl.com/cyber-security-for-the-previous-generation-172d5efba1b3)
* The Red Sox won the World Series!

##### Where can you find us next?

Mark will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Melanie will be at [SOCML](https://sites.google.com/view/socml-2018/home) in November.

{{< transcript "[MUSIC PLAYING] MELANIE: Hi, and welcome to episode number 153 of the weekly Google Cloud Platform Podcast. I'm Melanie Warrick, and I'm here with my colleague, Mark Mandel. Hi, Mark." >}} 

MARK: Hi, Melanie. We're changing things up a little today. 

MELANIE: We are changing things up a little today. So it was a really rough week last week. 

MARK: Yep. 

MELANIE: And this is our second time doing this because it really hit us hard, a lot of things that played out last week. So we decided today, as a change of pace, we're going to talk about some different organizations that you can donate to if you are feeling the way we do. Because I know both of us have felt very angry, and sad, and all kinds of things. 

MARK: Yep. 

MELANIE: We have all the things. I think the thing that comes to my mind is when I talk to our mutual friend, Kay, I think she says, she's in a mood. So I-- 

MARK: [INAUDIBLE] 

MELANIE: --think that's an appropriate way to describe it. 

MARK: Yep. 

MELANIE: We do have our interview for the week. We have Tony Aiuto, who is going to talk to us about Bazel. And so we will talk about that. And then we're going to end it, and we'll talk on some of the up-and-coming coming stuff-- the cool things of the week. But, as I mentioned, we do want to recognize a lot of the things that have played out last week, and it has impacted us in our own ways. 

So if you want to take any action, and especially if you want to donate to different causes that can help people who are disadvantaged, it's my nice couching word for all the things, there's a couple different groups, like Time's Up Now, which is a legal defense fund. That's a place where survivors of sexual harassment or abuse in the workplace can get the legal help and public relations support they need to take back their power, seek justice, and make their voices heard. 

There's also Project Alloy-- or also known as Alloy Alliance-- and they give financial grants and other resources to people who are early in their career, underrepresented in tech. And this is a way to give them financial resources, especially to go to conferences and go to events that allows them to get access and network within the industry and find opportunities. 

And then there's the #MeToo STEM, which provides resources to graduate students, postdocs, and women who have been hurt by sexual harassment. And so that one is definitely a very valuable resource that's just up and coming. And so these are all options. If you know of others, feel free to tweet at us, actually. And then-- 

MARK: Yeah. That'd be lovely. 

MELANIE: --I want to give, Mark, you had a few others, especially in relation to what happened over the weekend. 

MARK: Yeah, with the recent shooting in Pittsburgh at the synagogue. I wanted to mention HIAS, which is a Jewish organization that helps refugees worldwide of any ethnicity-- basically, rescuing people whose lives are in danger and, basically, being who they are. So if you are able to donate to a cause like that. There's also the Anti-Defamation League, which is another Jewish organization. 

They've been fighting anti-Semitism and hate since about 1913 worldwide. If you are looking for, say, a vigil or a gathering for the shooting that happened in Pittsburgh, they do have a map and schedule of those that are right there on the website. 

MELANIE: Yeah. The other thing I wanted to mention-- this is something that matters a lot to me, in particular-- is there's a very established well-known AI academic conference, or machine learning academic conference, however you want to view it-- and they do all the things in the research space around this. 

Neural Information Processing Systems-- we've talked about this conference in the past-- they did this whole research this past year and came out with results last week on whether they were going to change the name of the conference because NIPS as a acronym has been very much viewed as an offensive acronym. 

Because they've chosen, based on their research, to not move forward with that, which many in the community feel disappointed and many other feelings around this, one of the wonderful advocates in the space-- and I'm so bad at pronouncing names, but Anima Anandkumar, who is the Director of Machine Learning Research in NVIDIA. She's also a Brand Professor at Caltech. She has started a petition that we will link. And if you want to help show your support, please sign this petition. And then I think, Mark, you wanted to say-- 

MARK: Yeah, I just-- 

MELANIE: --a couple more things. 

MARK: --just to say, you know, it's been a really rough week for Jewish people. It's been a really rough week for trans and non-binary people. There's been several things around women's rights that have also happened and sexual assault. 

MELANIE: There was bombs being sent to people-- 

MARK: Yeah. 

MELANIE: --I mean. 

MARK: It's been a really rough week, so-- 

MELANIE: It has been. 

MARK: --please take some time for yourself if you need it. Like, get any self-help or self-care that you need to take. Take care of yourself. Take care of your loved ones. If you have people in your life that you love, tell them. I think-- we were talking about it before-- life is a bit fleeting sometimes. 

MELANIE: Yeah. 

MARK: So make sure you take care of yourself and the people around you. 

MELANIE: Definitely. And I'm also going to make this plug again that if you're in the US, please vote. 

MARK: Absolutely. 

MELANIE: What we are going to do is transition back into our regularly-- 

MARK: Yep. Scheduled programming. 

MELANIE: --scheduled programming. And so we will go and talk to-- 

MARK: Tony. 

MELANIE: --Tony-- thank you-- about Bazel. So let's go do that. 

MARK: Sounds great. So I'm very excited today to have Tony Aiuto joining us today, the Engineering Lead for Bazel Product Excellence to talk to us all about Bazel. How are you doing today, Tony? 

TONY: I'm good, thanks. How are you guys? 

MARK: Doing well. Doing well. 

TONY: Good. 

MARK: It's Wednesday. 

MELANIE: It's Wednesday. 

MARK: It's Wednesday. 

MELANIE: No, it's Thursday. 

MARK: It's Thursday? 

TONY: It is Thursday in New York. You're in a different time zone over there. 

MARK: That explains we didn't have bacon at work. There we go. 

MELANIE: You're right. You're a Thursday. We're on Wednesday. Clearly-- 

MARK: I don't-- 

MELANIE: --this country has gotten much bigger. 

MARK: I don't know what day it is. Cool. [LAUGHS] Today-- well, I remember this-- today, we're going to talk about Bazel. That is the thing we're going to be talking about. 

MELANIE: You are correct. 

MARK: Yes. But before we do that, Tony, why don't you tell us a little about who you are, what you do. What do you do here at Google? 

TONY: I've been at Google for about 10 years. I've worked on a variety of things, and was [INAUDIBLE] Blaze-- the predecessor of Bazel-- for a long, long time. And I switched over to the Bazel team recently to try to get a handle on making it a quality open-source product. 

So I sit at the intersection between the engineering team that sees it as an open-source project and end users who really don't care-- provenance of it. They just want something that all works together, with a certain level of reliability and polish. And so that's my role in there-- trying to bridge that gap. 

MELANIE: Great. 

MARK: Yeah. 

MELANIE: Well, so, Tony, I know you're here to talk to us about Bazel. What's Bazel? 

TONY: OK. Bah-zel, Bay-zel. [INAUDIBLE] 

MARK: Yeah, I was going to say, I'm Australian American. I'm going to say Bay-zel. 

MELANIE: No, I love it. 

MARK: And you're going to say Bah-zel. 

MELANIE: Tomahto, tomato. OK. 

TONY: Right. Yes, well, our logo, before the stylized cubes, was really a basil plant. 

MELANIE: Ah. 

TONY: And half our team is in New York, half is in Munich, so we get both pronunciations. So I'll accept either-- everything's good. But the origin of it is it sprung from Google's internal build system, which is called Blaze. And Bazel is an anagram of Blaze, in that sense. 

Blaze started about 10 years ago-- probably 12, at this point, years ago-- at Google. And we've been using it for all our builds during that time. And it's gone through a series of iterations and rewrites, from Python to Java, and added this extension language. At one point, we decided to open source it and make the Bazel project, giving back to the community. And we're finding it's a whole new bit of work to do that. 

MARK: Now that sounds right. So at a high level, what does Bazel actually do? 

MELANIE: Right. 

MARK: What's the thing it does? 

TONY: It is at-- at a very high level, it's a build system. Like, you really make with Autotools, or CMake, or Gradle, or Maven. But Blaze is a different focus from the ground up in that we want to be able to build across multiple languages and orchestrate very large builds and run the tests for them in a very repeatable way. 

Our focus is on fast and accurate and [INAUDIBLE]. We want to do incremental builds at speed. That requires having a very well-defined build so that we know exactly what to build incrementally. And then we can tie Bazel into systems to do remote build execution and caching of results so that we can really make a team faster by reducing the time it takes to do their builds. 

MELANIE: Cool. In terms of Bah-zel Bay-zel, what makes it different, though, from other options that are out there? 

TONY: At the bottom, the key is that all of our build steps are hermetic. We always know what goes into something and what comes out of it. And, essentially, we hash the inputs to any rule and hash the resultant thing, so we can cache it very well. You've built C applications. You know that you include a .h file and it will get it from somewhere. That doesn't happen in Bazel Build. You always know where you're getting all the inputs to your build. 

So that tactical strategic decision at the bottom allows us to get reproducible builds and very precise incremental builds that you don't get, let's say, with make-based things the shell scripts gluing stuff together. We also build all the languages at once. So we don't have to change build systems in the middle-- filled your native code for an Android app with one set of tools, and then bundle that up and then use, let's say, Gradle to build the Java parts. 

MARK: So how many languages does it actually support? 

TONY: That's a good question. There are probably around 40 rule sets that we track right now. Some of them are on the Bazel Build site, and the GitHub project there. Others are independently developed. But the big ones are C++, Java, Python code, JavaScript, C# and .NET, Scala. There's Dart, Kotlin and Swift, and Rust and Ruby 2, and others I haven't even named. 

And orthogonal to that, we talk about platform support. So we want to be able to build in any of those languages and then deliver to Docker, Kubernetes or to different execution platforms. One of the other important Bazel distinctions is that we separate the notion of the platform you're building on from where you're going to deploy it. 

So we were very clear in the semantics of, well, I happened to be building on a Windows machine, code that's going to be deployed on a Linux server or an Android phone. 

MELANIE: Great. Well, as a developer, how do I use Bazel? What does it look when I'm working with it? 

TONY: It's not too different than other things you're used to. We have build files, which are equivalent to a makefile or a Gradle configuration or a CMakeFiles.txt. Inside it are a bunch of definitions of targets. We don't really have executable code in the build files. We want them to be very declarative, rather than procedural. 

So we define targets, and each one is the name of it, the sources that go into it, and the dependencies it has. From a developer's point of view, they sprinkle the build files around [INAUDIBLE] their code and will run Blaze-- builder Blaze test-- with a-- 

MARK: I assume it's Bazel test or a Bazel build. 

TONY: --set of targets, and the things happened. 

MARK: Is it Bazel Build or is it Blaze Build? Or are you-- you historically-- 

TONY: Did I say Blaze Build? 

MARK: Yeah, you have historical Freudian slips. 

TONY: That happens on the team all the time. But it is Bazel Build-- or Blaze Build, if you're inside Google. The differences between the products are minimal and we're trying to eliminate them each day. But, man, historical baggage is hard to unload. 

MARK: No, that's really interesting though. So if I'm sitting down for a new project, am my thinking to myself, I'm building a polyglot project, so maybe I will lean towards Bazel because I have multiple languages? Is that like a contributing factor to why I might choose this as a tool? 

TONY: It could be, yes. One of the things we find, talking to people, is you find people from a community-- like the Go community-- they have a wonderful set of tools for building Pure Go systems. But once you start mixing it with other languages and you want to share, let's say, a protobuf definition between your Go and your C++ code, then the Pure Go tools fall short. I don't mean to pick on Go, this is true for every language that has a very well-defined set of development tools. 

Once you start crossing over to multilingual things, that's where Blaze really shines. Because the single set of build definitions can define your entire product, and you don't have to glue together different systems in some sort of shell script. 

MARK: Or makefile, which is-- 

TONY: Yeah, or makefile. Makefile to call Gradle to call make. 

MELANIE: Gluing together is always fun, though. We love doing that. 

TONY: But it's hard on your release engineers. 

MELANIE: Exactly. Release engineers love that, don't they? Well, I know we talked already a little bit about this, but why would we choose this over something like make, Maven, Gradle, whatever? 

TONY: Really to reduce the cost of your daily development-- in a nutshell, that's what the goal is. You don't want to switch to another system because it looks nicer. You want to do it because you want to make your lives-- your developers' lives-- better by giving them a faster turnaround time. And we do that through this fact that each build step is a hermetic action, so we know that we don't have to do it again a second time. 

If you change one file in the Bazel build, and we will only rebuild those things that absolutely have to get rebuilt, we have capability to hook into caching on, let's say, site-wide basis so that all your developers at one site can share each other's results. So if you've all pulled down a common bit of third-party code, the first person who builds it loses for the team. They've waited. 

Everyone else gets to reuse the object module that one of your teammates incurred the cost of building. So everyone goes a little faster. It's the incrementality-- good, reliable incremental builds that speed everyone up. We do the same thing on the test side. You change one bit, and instead of having to rerun 10,000 tests, we may only have to rerun 20. And, you know, you do that for enough developers, enough days, and it turns into real money. 

MARK: That sounds really interesting, from the perspective of it. It seems like in today's development environment, you're no longer pushing at a jar. You're no longer just pushing out a binary. You're compiling some code and then maybe bringing another library in and putting that in, say, a Docker image, and then taking that image and doing stuff with that. This sounds like the sort of tool that provides the glue between the seven different things you need to pull together. Would that be accurate? 

TONY: Yes, exactly. We're not entirely there yet, but you should be able, at one point, to define a role to build a Docker image and list inside it things that were built in different languages, all assembled, multiple binaries going into it, with a single Blaze build-- Bazel build-- the target. 

MELANIE: Blaze and Bazel. It's easy to go back and forth between those. 

MARK: Exactly. Exactly. 

TONY: It is tricky to keep them straight. 

MELANIE: But I know you guys are probably so used to it at this point. It's pretty common that you're just, like, you get it. You get it. 

TONY: Well, yeah, 11 years' worth of muscle memory-- 

MARK: Yeah. 

TONY: --and they're an anagram of each other. And if you're slightly dyslexic, it's impossible. 

MELANIE: Well, so Bah-zel supports your-- I'm going to just switch between the two the whole time. 

TONY: Bah-zel works, yeah. So say Bah-zel. 

MELANIE: No, I'm enjoying going Bah-zel on one-- 

TONY: And then Bay-zel. 

MELANIE: --and then Bay-zel on another. So Bazel supports remote execution. Does that mean I can parallelize my workload across lots of machines? 

TONY: Yes, absolutely. Even on a single machine, we try to parallelize it a bit, in that your build builds a graph of what needs to be done. And then after the graph of what needs to be done is computed, we know exactly what execution steps need to happen. And the ones that don't depend on each other can be all done in parallel. 

On a single machine, we may only spin up four-- maybe 10-- threads worth of that, because we don't want to deadlock your own machine. But with a good remote execution environment, we can easily spin up 300, 400 threads of things that can be executed in parallel. Actually, the remote build protocol is published in a standard we have. There's some third parties working on things that use this remote build protocol-- their own kind of build farms. 

Google has a product that is alpha testing and it's in-- you can sign up to try it right now, where we provide remote build execution. But someone could build their own remote build server. There are some early Bazel adopters who have their own strict requirements about code off prem. So they want to build their own remote executors, so that that their code never has to ship across the wire, and they can keep it in-house. These are all possible, and they can use Bazel to take advantage of remote build even without using a third-party cloud product. 

MARK: So I was doing research on Bazel, and we talked a bit before about all the languages it supports, it looks like some of that support comes through extensions or there's some kind of extension mechanism there. How does that work? 

TONY: One of the key differentiators between Google's version of Blaze and the new version of Bazel is that rules used to be built into the Blaze execution-- Blaze binary. They are all in an extension language in Bazel, and the extension language is called Starlark. Now, it used to be Skylark, and that has been renamed for reasons. 

And there's a very strict separation between what a developer at the high level sees in a build file and the rules that are written in this extension language. Starlark is Pythonesqe. It looks very much like Python when you write it, with a few restrictions. We don't allow recursion. It's got a very similar syntax. 

And, at this point, I should mention one of the things that help make Bazel accurate-- its view of what we have to build. Every command to build or test things is done in three phases, where we load up the things you need and all the rules, which is really just parsing and doing things like visibility. 

We can restrict certain targets in the build to a particular set of other targets so that you can-- just like in any language, you would do some object wrappering to hide implementation details, we can hide targets from having everyone in your organization exploit the-- or use-- the things you don't want to be seen. That happens at load time. 

Analysis time is when we can execute these Starlark rules to determine what our build graphs should be. And we can determine the delta from the last version of the build graph, so we know what has to be built new. 

And then, finally, we get to an execution phase where we can parallelize like crazy to do only what we need in the shortest time possible. And the strict separation also prevents this loop where the results of an execution can feed back into analysis later on. 

I'm sure everyone listening has had a project somewhere where you run the make twice in a row and you get different results, because the first time leaves cruft that the second time picks up. And that just doesn't happen with Bazel-based products. 

MARK: So what kind of-- I mean, we talked about language extensions-- but what kind of stuff do people build with extensions? What would people want to do with that? 

TONY: Well all of our rule sets right now-- well C++ and Java are still built into the Bazel core. Python, a bit too, we're moving it out. Rules Go is all built in the extension language. The JavaScript, the C# support. Kotlin is built into the extension language. Really, the Bazel team and the larger Bazel community and outside companies, are all contributing sets of rules that really make the Bazel ecosystem bigger than the core Bazel product itself. 

MARK: And so, as a company, as well, who has a team of developers, we could write our own extensions that would-- 

TONY: Yeah. 

MARK: --help us to do specific things that are particular to our companies as well? 

TONY: Yeah. We can take the Haskell rules, in particular. There's a company in France, Tweag-- I hope I'm pronouncing it right-- who have done a lovely set of rules for Haskell because they needed it for their daily development. And they contributed it back to the outside world. So they have other people using their rules. And it requires no modifications to core Bazel itself. 

MELANIE: Great. What do you enjoy most about what you work on? 

TONY: Well, I've been building and selling developer tools for years, and it's super gratifying to go into a place and have engineers say, oh, I use this. It makes my job easier. So that's really what I love about what I work on. And I believe in it too, because, Google, I've shipped products that were consumer-side. And we really care about the provenance of what goes into our code. 

And I think most product-shipping companies do. They have to know everything that went in, and they didn't accidentally include a GPL'd code in a product that's not compatible with that. Or, if they did use an LGPL library, they linked it dynamically rather than statically. And that's really hard to know with many ad hoc build systems. 

But with Bazel, you can actually trace down the provenance of everything you've included, and then script your own, checking against that to make sure that you know what you are giving to people. And that's really one of the things that motivated me to move from my last team to the Bazel team. 

MARK: So what products are actually using Bazel right now? I'm guessing there's probably a lot of Google products that probably use Bazel that are open source. 

TONY: Well, all Google products, for the most part, are built with the internal version called Blaze. And most of the reason for that is that internally we have some different packaging requirements. If we were shipping to a Linux system, someone might want a Debian or RPM package. Google has its own thing that's different from that. And it's not that it's secret, it's just our way of doing things. And there's no benefit in sharing it with the world. No benefit to the rest of the world, if we tried to share it. 

So the Google version of Blaze is built on Bazel with a few internal additions. So, really, all of Google products are using Bazel. There are-- I can't list customers directly, but I can talk about recent BazelCon we had, a few weeks ago in New York. 

MARK: Oh, cool. 

TONY: We did have nearly 200 external attendees representing 100 different organizations, either currently using Bazel or evaluating it right now. From large multinationals to small startups, some organizations who are very tight-lipped about what they do. 

What I can say is we've found a real niche in organizations that worry a lot about compliance and recertifying what they are shipping. And they love the fact that they can test extensively and accurately and know the provenance of everything they've gone into. So financial institutions really like people doing embedded devices that go into various consumer-priced products. Love it, as well, for that reason. But I should not mention their names-- 

MARK: No, no. No, that's sounds [INAUDIBLE]. 

TONY: --without their permission. 

MARK: That was a good answer. 

MELANIE: What are resources and ways that developers can get started with Bazel? 

TONY: Going to our website, bazel.build, and looking at one of the starter-- quick starts for various languages. There is full documentation of the product-- all right, I say "product" because I'm a product guy-- but of the project and what the features are. 

There is a discussion group, Bazel Discuss on Google Groups, and all the sources available on GitHub. I wouldn't recommend that as the place to start figuring it out. The website is the right place. But the GitHub project does contain many of the rule sets that are built by the community. So just looking through that gives you an idea of the kind of support you can expect were you to want to adopt Bazel. 

MARK: Excellent. What cool stuff's coming in the future? What can people expect from Bazel. 

TONY: Well, we're a 0. right now. 

MARK: Yeah. 

TONY: We want to get to a 1.0 release in 2019. We haven't announced the firm date yet. 

MARK: I understand this well, yes. Deliberately vague. Deliberately vague. 

TONY: It's not that we are done at 1.0 and is going to last for five years. Because [INAUDIBLE] come on, new rule sets develop. But the big thing in [INAUDIBLE] Bazel 1.0, it will be a stability promise and a way to inform users well in advance of changes that might be incompatible and breaking so that they have a long time to migrate. And it's very easy, conceptually, to figure out how to migrate to newer versions. 

But we also want to bring the rule owners into that. Because when we have Scala rules depending on the Java rules, and they each depend on Bazel, it does the community no good if the Scala rules and Java rules each are built to depend on a different version of Bazel. So we want to get the community behind sort of phased releases so that end users don't have any surprises. 

And that's the big guarantee for 1.0. The rest of it is more usable documentation, removing old nits that were built in Google long ago and have been carried further and we should have killed off. So we're trying to get those out of the project now while we still can. And then more rules. That's-- more language support. That's the short-term future for Bazel. 

MARK: Nice. 

MELANIE: Great. 

MARK: That sounds really good. 

MELANIE: Tony, thank you so much for coming on the podcast with us. Is there anything else that we didn't cover you wanted to touch on before we go? 

TONY: Not too much. I pointed you at all the things. People can find us in the places I mentioned. We're on a Slack channel periodically. The Slack group is called Bazel Build. I think we can share a link to that, but-- 

MARK: Cool. 

TONY: --too hard to say offhand. So we can get it onto the website. I enjoyed being here and had fun today. 

MARK: Cool. Well, yeah, Tony, thank you so much for spending time today with us and hanging out in the podcast and answering all our questions. 

MELANIE: Yes, thank you. 

TONY: OK. You're welcome. Have a good afternoon. 

MARK: Thanks again to Tony for joining us this week. And, especially, thanks to Tony for joining us at the last minute. We had to fill a spot very quickly, and we really appreciate you taking the time and giving us such interesting information about the Bazel project and the open-source backing behind it, the reasoning, and the history. 

MELANIE: Yes. So when we initially were putting this together, Mark and I were struggling with cool things of the week because we were in a bit of, as I mentioned earlier-- 

MARK: A funk. 

MELANIE: --a mood. 

MARK: Yeah. 

MELANIE: But we do have some cool things of the week. And I do want to take a minute to recognize that, which is why we are recording this a second time around. This is officially Mark's third year for the podcast. 

[FANFARE] 

We're at that point. 

MARK: Oh, wow. 

MELANIE: You and Francesc started this. 

MARK: We did. Hi, Francesc. 

MELANIE: Hi, Francesc. I'm saying you and Mark-- 

MARK: You should feel proud too. 

MELANIE: --both of you. But, yeah, you are at your three-year mark, which is incredible. And this is 153 podcasts that you have worked on, with one exception-- because I did do one without you. 

MARK: There was a few, also, that Francesc did without me. 

MELANIE: That Francesc did without you? 

MARK: Yeah. 

MELANIE: OK. So, fine. Maybe it's 150 total for you. 

MARK: Yeah. 

MELANIE: But, still, three years-- long time. Amazing. Great. 

MARK: What have I done? 

MELANIE: Well, I don't know what you've done. 

MARK: Yeah. 

MELANIE: Close to two million downloads, at this point. 

[CASH REGISTER DING] 

So I'm going to go ahead and give that one away. 

MARK: Yep. 

MELANIE: Just want to give you a bit kudos. 

MARK: Oh, thank you. 

MELANIE: So people should tweet at you or say something to you-- 

MARK: How nice. 

MELANIE: --as congrats, if you're out there listening. 

MARK: It's been quite a ride-- 

MELANIE: Yeah. 

MARK: --that never stops. 

MELANIE: No, it doesn't. It never does. You can never, never stop. 

MARK: But thanks to everyone who's listened for that time period, as well. 

MELANIE: Yeah. 

MARK: It couldn't be possible without the audience participation and the audience listening, so thanks to everyone who listens. And we love it when we get messages-- 

MELANIE: I know. 

MARK: --and people wander up and they're like, oh, my god. You're the people from the podcast. 

MELANIE: I know-- 

MARK: And sometimes they even remember my name. But it-- 

MELANIE: The feedback has been amazing-- 

MARK: Yeah. 

MELANIE: --by the community that's listening. The other thing we wanted to note that we realized we'd forgotten about, it's Halloween on the day that this is being released. 

MARK: Yeah, it's true. 

MELANIE: It's Halloween in the states, which I think has now infiltrated the rest of the world. 

MARK: A few places. 

MELANIE: I've been in Japan once for Halloween, and it's pretty impressive what they do. 

MARK: If you like dressing up and eating candy, please go ahead. 

MELANIE: Yeah. So hopefully you're having a good time and you're having some fun. Ooh, I'd like to see people's costumes. So, yeah, those are the two things we especially wanted to mention. We do have a couple things on GCP. Mark, did you want to kick it off? 

MARK: Yeah, so let's go into the actual cool things of the week for the GCP side. So there are a few new and interesting announcements. So there's the new asset inventory system that's available. If you're responsible for managing, basically, your organization's cloud resources-- maybe you have lots of projects with different App Engine stuff in it, with different billing accounts, storage buckets, et cetera-- trying to consolidate all of what you have and manage that all can be actually tricky and hard. 

So we've started this whole thing called the Asset Inventory system that provides an API that will enable you to do that. If you actually have a look, we'll put a link in our blog post, but there's examples there of how you can hit the API. It is the first pass. There's going to be some more stuff coming, so definitely check it out if you do manage those kinds of very large workloads. 

MELANIE: And then one of our colleagues Seth Fargo has written up a post on introducing the Cloud KMS plugin for HashiCorp Vault. So HashiCorp Vault is an open-source tool for secrets management. It's very popular with many of our customers. And so the Cloud KMS Vault users can manage their Cloud KMS keys now, encrypt and decrypt data, and sign verified data using the familiar vault API. 

There's a number of features and benefits that he's shared, like familiar APIs, authentication and authorization, and privileged ciphertext upgrades. And I don't know exactly what this is, but FIPS 142 level 3 certification. 

MARK: I'm sure it's good. 

MELANIE: So I'm sure it's important. 

MARK: Yep. 

MELANIE: Something to do around encryption and decryption. So, yeah, you can check out the post and see what that's all about. 

MARK: Yeah, it looks pretty easy to set up-- 

MELANIE: I agree 

MARK: --from the post, which is great. Speaking of teammates, our friend from last week, Martin Omander, our Cloud Developer Advocate, continued his series on "Serverless from the Ground Up." And they've done a really neat job, wherein what they are doing is connecting a spreadsheet to their document management system and basically making a Google Drive spreadsheet the UI for how you interact with the system. Which is really nice for business users. 

MELANIE: Agreed. And then not a GCP thing, but I'm going to give a shout-out to myself, which is I just posted a blog-- I haven't done very many lately-- about understanding cyber security for previous generations. So not the next generation, but the previous generation. 

Because I know many of us are probably tech support for our parents or grandparents, and so understanding some of the things that you need to keep aware of to help them stay safe online. 

MARK: Nice. 

MELANIE: And we'll include a link in the show notes as we do with all the other things. 

MARK: I'm going to send to my parents. This is really good. 

MELANIE: Well, great. You can also read it for you to help with your parents. That's the goal. I actually wrote this now because I was like, even though you and I are not sports fans, I figured we should give a shout-out to the Red Sox, which it's kind of a thing for them, especially, to be winning the World Series, which is wonderful. And I just want to give them a congrats. 

MARK: Baseball. Yay, baseball. 

MELANIE: Yay. 

MARK: OK, cool. 

MELANIE: So they won the World Series this last weekend. 

MARK: Where are you going? What are you up to? 

MELANIE: I'm going to be at an unconference known as [INAUDIBLE] at the end of November. 

MARK: Yep. 

MELANIE: And what about you? 

MARK: November, I'm going on vacation for a bit. Yes. 

MELANIE: Good. 

MARK: December I will be-- 

MELANIE: You definitely need it. 

MARK: Yeah. December I will be speaking at KubeCon, which I'm also very excited about. 

MELANIE: I'm happy for you, you're going to KubeCon. 

MARK: Thank you. 

MELANIE: Mark, I think that's it for us this week. 

MARK: Yeah. So, Melanie, thank you for joining me for yet another episode of the podcast. 

MELANIE: Thank you. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

