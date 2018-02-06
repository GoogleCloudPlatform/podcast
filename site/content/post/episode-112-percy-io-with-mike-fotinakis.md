+++
audioDuration = "00:35:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.112.mp3"
audioSize = 50399848
categories = ["Continuous Integration", "Visual Testing"]
date = "2018-01-31"
description = "Mike Fotinakis joins Mark and Melanie to discuss how they use Google Cloud Platform to develop Percy, the platform for continuous visual reviews for web apps."
draft = false
episodeNumber = 112
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Percy.io with Mike Fotinakis"
image="images/post/percy.png"
linked = true
googlePlusLink = "https://www.reddit.com/r/gcppodcast/comments/7uasp2/episode_112_percyio_with_mike_fotinakis/"
redditLink = "https://plus.google.com/+Gcppodcast/posts/MGFMtFWJUt8"
+++

We return once again to Continuous Integration tooling, this time with a visual spin. [Mike Fotinakis](https://twitter.com/mikefotinakis) joins
[Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) to discuss how they use Google Cloud Platform
to develop [Percy](https://percy.io), the platform for continuous visual reviews for web apps.

<!--more-->

##### Mike Fotinakis

[Mike](https://twitter.com/mikefotinakis) is Co-Founder and CEO of Percy, where he is working on problems at the intersection of design, development, and deployment. Mike has previously worked as an engineer at companies including Google, Science Exchange, and AltSchool, and is now enjoying building his first company from the ground up. Sometimes, he even enjoys things that don’t involve computers at all, including rock climbing, coffee, classical singing, and scuba diving.

##### Cool things of the week
- OpenCensus: A Stats Collection and Distributed Tracing Framework [blog](https://opensource.googleblog.com/2018/01/opencensus.html) [medium](https://medium.com/google-cloud/opencensus-and-prometheus-66812a7503f)
- London Zoo trials facial recognition technology to help track elephants in the wild [blog](https://www.standard.co.uk/front/london-zoo-trials-facial-recognition-technology-to-help-track-elephants-in-the-wild-a3747501.html)
- Cloud Dataflow and the Tram Challenge [youtube](https://www.youtube.com/watch?v=b4z8xJlTU8c)

##### Interview
- Percy [site](https://percy.io) [docs](https://percy.io/docs)
- Google Kubernetes Engine [site](https://cloud.google.com/kubernetes-engine/) [docs](https://cloud.google.com/kubernetes-engine/docs/)
- Google Cloud Storage [site](https://cloud.google.com/storage/) [docs](https://cloud.google.com/storage/docs/overview)
- Google Cloud SQL [site](https://cloud.google.com/sql/) [docs](https://cloud.google.com/sql/docs/)
- Redis Labs Cloud [site](https://redislabs.com/products/redis-cloud/)
- Google Cloud Platform Pricing Calculator [site](https://cloud.google.com/products/calculator/)
- Ember Conf [site](https://emberconf.com/)

<div style="text-align: center">
  <a href="https://percy.io"><img src="/images/post/percy.png" style="margin: auto; max-width: 30%;"></a>
   <p style="font-size:0.8em">Percy.io<p>
</div>

##### Question of the week

I would love a weekly roundup of news about Google Cloud Platform - where can I get one?

 - This week in GCP [medium](https://medium.com/google-cloud/weekly/home)

##### Where can you find us next?

Melanie will be at [FOSDEM](https://fosdem.org/2018/) in Brussels this weekend.

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 112 of the weekly \"Google Cloud Platform Podcast.\" I am Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing today, Melanie?" >}}

MELANIE: Hi, Mark. I'm good. We've got a good podcast for us this week. We're going to be talking to Mike, who's the co-founder and CEO of Percy.io, and they are doing visual diffs. 

But as always, before we get into that, we're going to do cool things of the week, and we're going to have a question at the end of the week-- at the end of the week? At the end of the actual talk. 

[LAUGHTER] 

I can't wait till the end of the week. We're going to talk about if you wanted to know what the news is of the week, there's a nice summary round-up, and we're going to point you to where that is. So before we get into that, let's talk about cool things of the week. 

MARK: Yeah, let's talk about cool things of the week. I wanted to definitely bring up a project that was announced recently on the Google Open Source blog, a project called OpenCensus, which is a stats collection and distributed tracing framework. We've probably talked about this a little bit in some previous episodes, or at least those types of things in previous episodes, but this is actually really cool. 

It's an open source project that is meant to be a trace and metrics open source tool that will work with a variety of backends and stats providers and tracing things, like Zipkin or Prometheus or Stackdriver, and a bunch of other ones as well. It's really cool. It's coming out of Google. We should have them on the podcast soon. 

MELANIE: Which we will. 

MARK: But we will link to the announcement blog post that has some really pretty pictures about what can be done with it, as well as a Medium publication that is coming out of the community from-- I'm going to hope I get this right-- Daz Wilkin, talking about using OpenCensus with Prometheus and Stackdriver as well. So you can see some code and some of the stuff that people are writing to use it with. 

So I'm actually really excited about OpenCensus, so I can't wait to have them on the episodes. 

MELANIE: Yes, and it's also nice that it's analysis tool agnostic. 

MARK: Yeah. No, I really like that about the platform, too. 

MELANIE: So another cool thing of the week is that the Zoological Society of London has teamed up with Google, and they're using the Cloud AutoML Vision tool API that we released, and they're doing basically facial recognition on endangered species. They're using a large set of images that have been collected from cameras in the wild. They've had to do a lot of manual labeling in the past. But with AutoML Vision, they're working on trying to make that more, of course, automated and apply models in essence to do facial recognition. 

And the intent is ultimately to help with tracking endangered species, helping to reduce poaching. I think their goals for the future are definitely to help identify when there's injured animals, so that they can help them. 

MARK: Yep. Oh, that's pretty cool. 

MELANIE: So it's kind of a cool application of it. 

MARK: Yeah. No, that's really cool. Just thinking back from when were talking last week about basically being able to train your models without having to have a PhD or something in machine learning, that's a really interesting application. Also, I'm just thinking about the fact that now Google Photos recognizes my dog as a person in my life. 

MELANIE: And it is a person in your life. 

MARK: It's very much a person in my life. 

MELANIE: It's very understandable. And then, the last thing we wanted to mention for the week is that one of our colleagues, Felipe Hoffa, has done a cool thing where he went to Melbourne and he interviewed Graham Polly from Shine Tech, who's a GDG. And they basically did this Cloud Dataflow and tram challenge, where they were trying to show that you can process about half a terabyte of data-- and they had, was it 10.6 billion rows of data-- while they were traveling on the tram down to Melbourne. 

MARK: Yep. 

MELANIE: And they were doing this, so basically in 10 minutes is what I understood from that. 

MARK: Yeah. Graham has a track record of doing these challenges on various different types of public transport-- if he can do things within the time frame that like a train or a tram goes from one place. He's going to run out of public transport things. 

MELANIE: Has he come to San Francisco and done it on a trolley? 

MARK: That needs to happen. 

MELANIE: That probably needs to happen. 

MARK: That probably needs to happen. 

MELANIE: But they do a video, and the video is really kind of cool. So we'll post that up on our show notes, as always. 

MARK: Absolutely. Well worth watching. Awesome. Well, why don't we go have a chat with Mike from Percy and talk all about visual continuous integration? 

MELANIE: Sounds good. 

On this week's podcast, we are joined by Mike Fotinakis, who is a co-founder and CEO of Percy, Percy.io. And so Percy is actually this company that's focused on visual diffs. And so, Mike, welcome to the podcast. 

MIKE: Thank you so much. I'm really thrilled to be here. 

MELANIE: And Mike, we'd like you to tell us a little bit more about yourself. 

MIKE: Yeah, absolutely. So yeah, I'm the CEO and co-founder of Percy. And I don't know, what about me? So I'm actually the ex-Googler, too, so I've been using Google products for-- before they were actually even called Google Cloud Platform. 

And yeah, I love all things software engineering and building a team. And the sort of cross-sectionality of things we like to say we work on is like design, development, and deployment. So it's kind of like where I work is at the intersection of those things. 

MELANIE: Nice. And Percy, Percy is this startup that you've been working on for the last couple of years, you were saying? 

MIKE: Yeah, that's right. Yeah, it started as a sort of side project of mine of scratching my own itch at a company I used to work for, where we were just launching visual bugs all the time. And this is sort of a thing that has plagued my web development and software engineering career forever, since I was actually like 10 years old. 

And I finally got fed up with it. And I was like, why isn't there somewhere that just you can click a button and do visual testing? Like, why doesn't that thing exist? So I went off and tried to build it, and here we are. 

MELANIE: And here we are, and so that's where that idea came from. And I think I read that it's Perceptual CI was what it was originally named as? 

MIKE: Oh, wow. You really went into the depths of the history there. 

MELANIE: Took a minute. 

MIKE: Yes. It was originally called Perceptual CI, which probably makes sense if you're an engineer and is terrible if you're not. So my best friend actually, we already had the mascot at the time, which you see on our homepage is Percy the Perceptual Porcupine, and the color scheme is purple. So a little bit of alliteration. 

MELANIE: Where did the porcupine come from? 

MIKE: I don't know. It just alliterated with the rest of it. 

MARK: Alliterated? 

MELANIE: It is kind of cute. 

MARK: That makes sense. 

MIKE: And then, my best friend said, why don't you just call the thing Percy? And I was like, oh. Well, Percy.io was available at the time. So we grabbed it, and the rest is sort of history. I spent the day refactoring the code to get rid of all the Perceptual references, and here we are. 

MARK: OK. So just so I get this straight in my head, this is a continuous integration system that enables me to see UI bugs. How does it see UI bugs? How does that work? 

MIKE: Yes. So Percy's entire goal is to really give you confidence in every visual change you're making-- and even in changes you're making that you might not think are visual. So there's a bunch of times when, like, you're making a backend change, and for some reason it manifests as a front-end bug. And you might not catch that if you're not doing QA on the front end, if you're not looking specifically at that page, or if you're relying on your own memory to remember what the page looked like before. This is why things leak through to production all the time. We just miss this stuff. 

So yeah, so the way that Percy approaches this problem is to take a visual comparison of what the state was before and then what the state is after the code change. And we do this in a truly continuous way. So I like to say-- we've sort of gone through a couple of different iterations of these phrases, but I like to say continuous visual validation or continuous visual integration. So it's really meant to bring the process of doing this as early in the software development cycle as possible. 

So the goal and the way that Percy works is I should be able to make a code change and then immediately look at Percy and see, oh, I affected 900 pages and I didn't mean to. I only meant to affect one. And so what we'll show you is like a visual comparison, what we call a visual diff. And these visual diffs are basically just a comparison of two different images without any context necessarily about what the images are about. They're just like, these pixels have changed from these pixels here on the left in master to these pixels here on the right in your pull request. 

MELANIE: I know when I've worked with GitHub before, I mean, I go and look at the diffs between the code and what's changed. And I can see they do like color coding, and you can look like one side is what it was originally versus the other side is what I've changed. So this is just that idea, but instead you're seeing the actual visual representations of every single page. 

MIKE: That's right. So that's exactly what we want to do and the workflow process that we want to allow designers and engineers to work through. Because you go to GitHub right now, and you look on the left and you look on the right. And you're like, OK, this code is changing from this to this. And code review gives you a lot of nice benefits of like catching bugs from your teammates who couldn't understand the code and the architecture, or they can say like, oh, you don't need to build it this way. We have this other system that does that now. You don't need that. 

So you get a lot of these benefits out of the code review process that aren't necessarily something you would ever get from a static analysis tool like a linter or something else. And I think the same exact workflow and processes apply to visual testing. Like, you want to able to say as a human, yes, these are the visual changes we wanted. We wanted those visual changes. And whoops, we didn't mean for this one to change that page and that modal on that page and that deep setting state on your billing page change. And you didn't even mean to do that, because you weren't affecting that page and you didn't look at it when you were making that change. 

So yeah, we want to give you confidence that you know exactly what you're changing in the same way that a code diff gives you confidence to know what you're changing in your application, like your test suites give you confidence to know. 

MARK: So if you're a developer and you want to use Percy, how does that look? Is this a tool that I run locally? Is it something I can integrate with a CI system, like Travis or Jenkins? What can I do with it? 

MIKE: Yeah, exactly. So we integrate with CI systems right now. So what you do is you plug Percy into your test suites that you're already writing. You have these tests that are like, visit this page, click these buttons, do this thing. Or these components, we want to test these components and these states. 

You integrate with your CI, and then you push up a pull request to GitHub. And then, as your CI runs, it's pushing stuff to Percy. And we've actually built a full rendering environment on top of Google Cloud Platform that is this rendering farm that's performing these renders and in the background doing these screenshots and handling all the weird edge cases that go into that, which we can talk about. 

And then we just notate the GitHub PR and say, hey, there's 15 visual diffs here that need review. And that might be right next to your green check mark in GitHub that says 2,000 unit test passed. Functionally, everything is ready to go. You're great here, but then Percy catches it and says, hey, you're about to launch some visual changes. Do you want these visual changes, yes or no? 

MELANIE: Nice. And then they can basically go through and do that review, set aside, and then see-- and accept accordingly. 

MIKE: Yep. Exactly. So that's a real goal is like give you a visual review process. 

MELANIE: Like you are in the GitHub with the diffs between coding, are you also able to go in and directly inside the visual make comments or say, here's a spot that you might miss? 

MIKE: Yeah. That's definitely on our roadmap. It's not something we do right now. You can sort of comment in GitHub and say, whoa, I noticed this thing in Percy was wrong at the time, or you changed this page and you didn't mean to. 

But yeah, commenting. That's sort of to the intersectionality thing again. If we can help designers and developers and PMs and facilitate all of these workflows, you can say like, hey, we need our PM to sign off on this change. That's totally something you should be doing on the visual side of your site and on the changes that you're making at that level. 

So we sort of have a pretty basic workflow for that right now. We try to keep it really simple so you can just iterate and improve things very easily. But more complex workflows are definitely on the roadmap of things we want to do. 

MARK: Awesome. All right. So let's get under the hood. 

MIKE: Yeah. 

MARK: I want to hear about how this thing actually works. 

MIKE: OK. Well, I give a 45-minute tech talk on it, so what pieces would you like? 

MARK: All right. So I guess probably I'm guessing the most interesting part is the image analysis part of it. I'm willing to guess. I don't know. 

MIKE: Sure. 

MARK: How does that work? I'm guessing that's a fairly computationally-intensive workload? 

MIKE: Well, OK. So yeah, a lot of it is pretty computationally intensive, but it's probably not the part that you expect is computationally intensive. So basically, in the talk that I give, I basically show you what does a visual diff in the first place. What is a visual diff? And I just show you two images. And then a visual diff is just like the difference between these. It's computationally, what is the difference, what is the delta between these two images? 

So it's basically a transparent PNG with red pixels on it, and the red pixels tell you which pixels have changed between the two states. So like, these pixels have changed between these two states. So generating those visual diffs is actually one of the cheapest parts of the process. 

MARK: OK. 

MIKE: You can literally run like an ImageMagick Compare command and give it two images and give it a diff output, and then you open up the diff, and that's the difference. And you can apply a bunch of translucency and effects and stuff, as deep as you can go into ImageMagick. 

MARK: Bevels and like gradients. 

MIKE: Yeah. You rewrite this in Go as your own PNG interpreter thing. Like, you could do whatever you want. 

The hard part about this system, and the part that we all rely a lot on our own infrastructure and on GCP to do and to scale for, is the actual rendering of the screenshots. So there's a bunch of problems that come along with rendering screenshots, partially because browsers are just super complicated nowadays. The source code for Chrome, I think, is as large or almost as large as the Linux kernel now. It's just massive. 

And so these things, we want to keep browsers developing, we want to keep them really modern, but they come along with all of these rendering differences. For example, the simple one you can think of is like animations. What happens if an animation is on a page? Well, if you take a visual diff of it, you might get just a random frame of the animation as compared to the previous random frame of the animation. 

So what we do in Percy, for example, is we freeze the CSS of the page or the CSS animations of the page. We inject some CSS that tries to aggressively turn off all of those animations so that we can freeze them in a particular state. Or we freeze animated GIFs so that they don't progress through their animation. So we're just looking at the first frame, so we can make these renderers really deterministic. That's the easy one in a lot of ways. 

The harder ones are like, did you know that GPUs don't actually guarantee that if you divide two numbers they will be the same answer in the end? Things like that. Or if you compile software with different optimization flags, GPUs might execute the instructions differently. So like if you're rendering a gradient on one machine, if it's a GPU-rendered gradient, and you render that exact same gradient on another machine, they might not be pixel-perfectly accurate. 

Or a little bit of an easier one, so fonts. If you upgrade the fonts of the system that you're working on, you might get weird anti-aliasing artifacts around the edges of the fonts. If Chrome decides to make the rendering better, which they do all the time, then you might get weird anti-aliasing artifacts or weird edges of different tiles, or just improved rendering overall, or a new CSS feature. 

So one of the big parts of what we do at Percy is we try to handle this process for you and give you a really deterministic rendering environment that handles all of the complexities of visual testing. So, for example, we freeze the fonts of the system and handle this in a containerized way. We freeze the animations on the pages. We handle the browser upgrade process for you and try to keep everything modern under the stack. 

So the sort of naive solution to this is I'm running my CI system, and I just tell it, hey, render me a screenshot and put it to disk or put it in some artifact directory and keep the screenshots across the CI runs. That's kind of how the first iteration of Percy actually started. We were running a Jenkins install, and it was just dumping screenshots and running diffs. And then you can sort of tell what's happening there. 

If you do that, then what happens is you'll end up generating a bunch of screenshots that end up being slightly different over time for reasons that you can't actually control. So that's one. So determinism is like the big problem. 

And then the other second big problem is performance. It can take 15, 20, 30 seconds to tell a browser to actually render a full-page PNG of the image. So if you end up doing a hundred of those in a CI run, which is not that many UI states, you might add 30 minutes to your test suite, which nobody wants to do, and it's kind of like a horrible thing. Performance is the big, big reason why visual testing is not something that every engineering team is doing right now. 

So the way that Percy handles that is by just making it completely out of band of your CI suite. We add basically no overhead to your CI suite at all, because all we do is we send up these DOM snapshots. We capture the state of the page that you've rendered in your testing environment. 

So you have a test that visits some page, clicks a drop-down. And then some JavaScript is executed in Chrome Headless or something. So then we take the DOM state of that page along with the development assets around it, send them up to Percy, and then render them in our custom rendering farm. 

So that allows us to, number one, parallelize the entire thing aggressively, so we can finish very quickly and really truly live up to our goal of being continuous. And then, two, it allows us to control for all of these variables, where you can't really deal with those rendering differences in your CI environments, and you wouldn't really want to. 

So that sort of model and that architecture has given us a lot of flexibility to really make Percy try to live up to this continuous part of our goal and really bring this process really early on in the software development life cycle. 

MARK: Cool. I have so many questions. 

[LAUGHTER] 

MELANIE: You go. You go. I've got questions, but I want you to go. 

MARK: OK. Well, let's start with, what is the Google Cloud Platform products that you are using here? You mentioned containers. You sort of buried the lead there a little bit. It sounds like that's maybe how you're running the actual browsers? I'm not sure, but what does that flow look like through the products as you go? 

MIKE: So yeah, we've been using Google Cloud Platform from the beginning for everything. And actually, Percy grew up in a world where containers were already existing in some ways. I sort of dealt with early, early Docker bugs and that sort of early pain there. But glad that we sort of bet on that early on, because that has just allowed us to scale this infrastructure so much more easily had we done something else. 

So yeah, everything is containerized. And that's how our full deployment pipeline works and how we update our rendering environments is pushing these new containers and pushing new versions. We just recently actually migrated off of-- I don't know if you even remember-- container-vms. 

MARK: Oh yeah. 

MIKE: Yes. So before Google Kubernetes engine even, it was like a version of Kubernetes that kind of ran on a single node and didn't tell you it was Kubernetes, but it just how like a YAML file you could give and run a set of containers on a single node. So we moved off of that to a full Google Kubernetes engine. Also, thank you for renaming it from that to that. It makes a lot more sense now. 

And yeah, so GK is now a big part of our workflow. It's enabled us to get to continuous deployment really quickly. And we are actually doing that now, where, as of just a month or two ago, all of our things are continuously deployed. And we've sort of moved into that world very quickly as we've been able to adopt more Kubernetes features. 

MARK: Cool. So I'm just trying to work through the flow. So you say that they have a DOM upload. 

MIKE: Yeah. 

MARK: Where does that go? 

MIKE: So yeah. 

MARK: I'm just trying to-- what's that? 

MIKE: I'll walk you through the cycles. So a DOM snapshot gets uploaded to Percy. We figure out, OK, what browsers do you want to render this in? Because it's a DOM snapshot, we can also like resize the browser to different-- 

MARK: Where does the DOM snapshot actually go, though? 

MIKE: Oh, Google Cloud Storage. 

MARK: It goes to storage? OK. Cool. 

MIKE: Yeah, it goes to Storage. So we store it in Google Cloud Storage. And then, if you think about it, we actually have to reload, we have to reconstruct the state of the page that you had in your test environment perfectly in our environment. So what we have to do is start up Chrome, for example, or Firefox and run a proxy there to actually say, oh, you we're loading localhost something index.html Great. We have that over here in Google Cloud Storage. 

So we proxy all of these assets using a proxy that we've written in Go. And then we load up Chrome running in one of these containers, and we render the page. We proxy all of your development assets as well. 

We have to do this because we're not rendering live sites here. We're rendering stuff that's in CI, in development. It's really early in the process, so we need to be able to access and run things that are your development assets that came from your test suite. So we can't just rely on the fact that your assets might exist in production somewhere and you might have a CSS file sitting live accessible. 

So we proxy all of the assets, including the raw DOM snapshot that you gave us, and then potentially resize the browser and do a bunch of different sizes that you might have specified to say we care about this page on mobile, on desktop, on tablet sizes. We render those screenshots, do the ImageMagick comparison, do the actual diffs, upload those to Google Cloud Storage. And then, yeah, the backend is all like a Rails API to that sort of orchestrating some of this process. And then we also have a Redis queue that's helping facilitate some of the pieces, too. 

MARK: Are you running Kubernetes jobs for this or your own sort of batch queue process? 

MIKE: Our own batch queue process, yep. 

MARK: OK. 

MIKE: Yeah. It's actually great to see the sort of platform effects of different providers. So we use Redis Labs for our Redis provider, and they just have a GCP option. So I just say, GCP, put it into the same zone we're close to. Great. We have a Redis host that we don't have to manage Redis for. 

So we do that with quite a bit of our stuff, and we use Google Cloud SQL, which has been really great. Also, it's all like MySQL 5.7 or whatever the latest one is there. And yeah, it's been really great. 

MELANIE: And you said you also are using SDL? 

MIKE: Yes. So we recently, over the last year, sort of migrated from heavily using the Google Cloud HTTPS Load Balancer to running our own Layer 7 load balancing stack. 

MARK: So why? 

MIKE: Yes. Good question. It was sort of driven from a lot of things. We wanted to do more traffic splitting experiments. We want to be able to, like, canary releases a little bit easier. 

The Google Cloud Load Balancer is really great and very performant overall. But there were some features in there that we started having some issues with that we wanted to be able to have full control over. So, for example, we want to be able to internally retry post requests if they fail, which the Google Cloud Load Balancer only retries get requests. 

MARK: Right. 

MIKE: And actually, that was undocumented at the time, too. I sort of just only knew that because I was an ex-Googler, and I was like, oh, I know that this load balancer retries get requests but will never retry post requests because they're not item [INAUDIBLE]. So yeah, we wanted to sort of have more control over that. 

And then as Percy's infrastructure gets more and more complex, we have more and more microservices that sort of fall out and draw a boundary around that service and say, ah, that makes sense as a microservice. So we wanted to be able to sort of control the internal RPCs and how things are flowing throughout the system and how we can orchestrate that stuff and, as our development team grows, give them more abilities to just change one part of the service rather than changing a huge monolith. 

MELANIE: So since you are from Google, or an ex-Googler, is that why you went with GCP to begin with? 

MIKE: That was part of it. I think a lot of it is because it started as a side project of mine, too. So I was heavily optimizing for costs in some ways. And so my favorite Google Cloud product is actually the Google Cloud Pricing Calculator. I know that sounds crazy. 

[LAUGHTER] 

But it gives me so much visibility, as somebody who was paying for it out of my own bank account at the time to say like, oh, I will know exactly I'm going to spend that this month on this thing. And so as we were bootstrapping it early on, that was giving me a lot of confidence to know. And also, because I knew that this needed to scale. 

If you're going to have something that can be truly continuous for everyone's workflow, it has to be horizontally scalable. You have to just be able to say, oh, you need 2 million snapshots a month? Great. Here's a bunch of workers and renderers for you. You just need that ability based on the DOM snapshotting model that we have. 

So I sort of bet on Google Cloud Platform there because, yeah, it just made a lot of sense for the infrastructure that we needed and the scalability that we needed. And also, as an ex-Googler, I knew how good Google's networking technologies are, for example, and just how world class that is-- more than what most people know, right? It's just really good. So just betting on the-- 

MELANIE: We did not feed that to you before. 

MIKE: They didn't. I'm not actually a Google Cloud rep at this point. 

MARK: Your ice cream is coming later. It's fine. 

MIKE: Thank you. Thank you. My affiliate fees. 

MELANIE: That's great. Well, actually, let me ask then, what have been some of the challenges you've hit up against by using GCP? 

MIKE: Well, let me flip that question a little bit. So Kubernetes fills in a lot of the gaps. If you want to run your own infrastructure and orchestrate it, if you can sort of get through the learning curve, if you can understand the [? amal, ?] understand all the pieces-- what you're pointing at what things-- then all of a sudden you can run your own infrastructure as a service and not have a full time DevOps person doing it and managing it every day, or a team. 

So it's given us a lot of flexibility in that way because, if we needed to, we could move off of Google Cloud quickly, because all of these pieces are Cloud agnostic. And I know that plays into sort of Google's want to really make this stuff high quality and make it so you don't feel Cloud lock-in and all of this stuff. 

So yeah, some of the challenges, I guess-- getting visibility into some of the deeper, inner features of like what's happening inside of the Load Balancer and that kind of stuff can be kind of challenging sometimes. That's the biggest one I can think of. 

MELANIE: And so, in terms of where the product is going, what can you share with us in terms of your plans for the future outside of-- you had mentioned before about wanting to be able to directly edit inside of the visual diffs? 

MIKE: Yeah. So if you think about it, Percy is all about workflow. It's nice to be able to say, oh, we caught a visual bug. Like, oh, we had this visual bug that kept happening on our home page. And we got Percy in, and we fixed it. We're never going to launch that visual bug again. Great. 

Visual regressions are a big part of what drives people to adopt visual testing. But the long-term goal is all about facilitating more and more of those workflows. What other pieces can we can we pull out and sort of automate away from the things that the software delivery lifecycle is doing right now? 

So if you think about it, there's a big gap between I've created a pull request, somebody is reviewing it, and I'm merging it, to production. And that gap can be a bunch of things. It can be your deployment processes. Continuous deployment, if you can get there, really helps close that gap quite a bit. 

But one of the big, last pieces that we just haven't automated at all-- for some reason, this just didn't exist-- was the ability to say like, yes, I have full confidence to know what visual changes are going out as part of this release or part of this commit. And so that's really what we want to do is every piece around confidence, around the deployments, and around those steps is what we're aiming to do. So you can imagine like you could have comments on the visual diffs. You could say, oh, this particular part is broken. You could collaborate. You could say, hey, the designer on our team, she needs to go check this out and see why that's broken. Yeah, we have a bunch of stuff on the roadmap, though. 

MELANIE: Well, I can imagine, too, I know with machine learning and the rise of machine learning that the actual UI is constantly being built to be flexible, to change, to be very just not too hard-coded to begin with. 

MIKE: Sure. 

MELANIE: So I'd assume that you're also constantly thinking about, if you're going to continue grow the visual diffs, how that will adapt as the UI changes. 

MIKE: Yeah. Absolutely. So machine learning and computer vision can be a big part of what we can do to automate this stuff in the future. There's also a big, hard problem there, which is how do you know if a visual change is correct or not. And that's a human part, because you can say as a human, yeah, I meant to change that from this to this, or no I didn't. But getting computers to understand intent, that is a pretty difficult problem. 

So I can see us going there over time as we gather more data around like, oh, people are approving things that look like this, or they've hinted to us that this is an appropriate visual change, or we know that this change looks like all of these other changes and, therefore, it's also OK. And Google Cloud has a bunch of computer vision APIs and things like that that we might be able to leverage to get closer to that kind of goal, where we're presenting to you the most relevant changes. Like, here are the most relevant visual changes for you, and try to like knock down the amount of potential noise or the potential for just an overload of data, because you want to use these visual reviews to be as small as possible and as targeted as possible in a lot of ways. 

MELANIE: And on a different note, I know when we were talking before we started recording, I was saying how I'd be curious to hear just on a little bit of a side note what it was like. I mean, you said you woke up one day and you had the idea for Percy. But you didn't just snap your fingers and you had a company, I'd assume. Unless you did, and that's pretty impressive. What was that like? 

MIKE: No. Absolutely not. 

MELANIE: Can you tell us a little bit about what it was like going from I've got the idea to now I'm actually running a company? 

MIKE: Yeah. Absolutely. It sort of started as like, is this a project, is this a business, how big is the opportunity here-- those kinds of questions. I had decided early on to sort of bootstrap the company and see how far I can take it and get some validation around like, OK, do you people feel this pain? Is this just a pain I was feeling, or is this a pain everyone feels? And so, when I started realizing that there's really no one that doesn't have this problem-- it doesn't matter what your tech stack is, it doesn't matter really what product you're building. If you're on the web or if you're on mobile or if you're building something that users are touching or looking at, you have visual needs. 

And so then my co-founder Tim and I joined forces, and we were like, OK, let's take this as a real opportunity to build a company around this. And that's just been such a thrilling process for me because this is my first company. And thankfully, Tim has a lot more experience in that way. We're both engineers by trade, but he's on multiple companies now. So it's good to have him as sort of my rock in that way to help me sort of realize what's important and what's not as we go through our day-to-day. 

And yeah, it's been a great experience to sort of see, even though we're still a small team, that we can really execute really quickly and that that actually matters to our customers quite a bit. If you're a solo person working on it, you just only have so much bandwidth to address customer needs, to do sales, to do marketing, to do conference talks, to do all the pieces of it and actually really build the machine around getting the info out there. 

So yeah, getting more help and building the team around it and really realizing that people are inspired by this problem, it's a hard thing to solve. But when you realize that you just saved an hour and then you just saved another hour and then just saved another hour, every time you're making these changes, it's such a drastic shift in the way that even our own team develops our own software. We have a designer who just joined us recently, and if he does a redesign of like a certain part of the app or a certain way, like the header or something on the app, we have full confidence that we know exactly what is changing in Percy every time we change the app. 

So he was making this really big CSS refactor the other day. He was adding all this really modern CSS stuff, things that I didn't even know existed. And I was like, this is great. And also, I don't have to even look at this too carefully in some ways, because we know with confidence exactly what pixels are going to change at the end of this. So we use Percy as our own sort of like dogfooding to know exactly what we're changing in our own application. 

And it's saved us a bunch of times where, like, on the billing page we're going to lose a button that was really important, that needed to be there all the time. And it was just gone once, because of some change. And you catch that before it even reaches your customers. So that kind of stuff has been really fun to see as we've built the company side of it, that our customers have those same problems, have those same issues no matter what their tech stack, what their sort of environments. If they care about the design or the stability of their application at all, then they care about the visual side of their sites. 

So yeah, that's been a really thrilling experience. And I also have learned that I love wearing multiple hats all the time and sort of switching between them. It can be very-- I don't know-- a lot of emotional overhead can go into being the founder, which is something that I'm learning and sort of anticipating. 

So it's a lot of emotional context switching. You need to build a be in a meeting at once that's sort of a drag or it's really hard, and then you need to move to the next meeting and be really happy, and you need to move to the next meeting and not say that one thing. It's just like emotional context switching over and over and over. So it can be thrilling if you have the right team behind you and really inspired to work on the product and really make it better. 

MARK: Cool. Well, we are running out of time just a little bit. But before we go, is there anything we haven't mentioned, or something you want to plug, or an event you're going to be at, or anything cool that's going on that you want to make sure you mention before you run away? 

MIKE: Yeah. You can always contact us. We have a little intercom button on our site. Feel free to reach out and say, hey, we're thinking about checking out Percy for visual testing for this thing. We're happy to chat. We're also going to be up that EmberConf in Portland in March. I think it's March 11 and 12, somewhere around there. 

MARK: We'll check it out and put it in the show notes. 

MIKE: Great. And yeah, we'll be up there. We'll have a booth. We'll be talking to people. And we're sort of always around, and we're in San Francisco in the area in case anybody wants to come by and chat about this. It's a pretty early team, pretty early problem in a lot of ways. We have a lot of traction that way and are excited about the future. 

MELANIE: Great. Well, we're so glad you joined us. This is great to hear about Percy and how you're solving the QA process with visual diffs. So thank you so much. 

MIKE: Thank you, guys, so much. 

MARK: Thanks. 

MELANIE: Thanks, Mike. That was great to talk to you about what Percy's doing and also to learn a little bit about how we can look at visual diffs and do QA around visual diffs. So I definitely think that's a helpful tool to have. 

Now, Mark, question of the week. If I want something to read, because I don't have enough to read right now, but I need something that's going to summarize the news for me for the week, because there-- 

MARK: Is a lot usually 

MELANIE: Is a lot going on, where do I go? 

MARK: One of our teammates-- I'm going to totally massacre his last name. 

MELANIE: Oh, I love it. 

MARK: I totally am. 

MELANIE: We have so much fun with names on this podcast. 

MARK: OK. So he's a developer relations program manager. He manages a bunch of our internal programs here at Google that work with a bunch of different people outside of Google as well. Great fellow. Alexis-- oh my god-- Alexis Moussine-Pouchkine. That's probably not bad. 

MELANIE: I think that's good. 

MARK: I think that will do. Anyway, he does a weekly Medium publication that I thought it would be worth mentioning-- strangely enough called "This Week in Google Cloud Platform," where he basically does little summaries of what's happened in the past week, giving you sort of titles and little descriptions on what's going on. And he also does "This Picture of the Week," showing a little snapshot of something interesting somebody has done on Google Cloud Platform. 

So if you're looking for something sort of weekly that sort of does a nice summary and sort of ends up in your feed or on your Medium feed once a week, you should check it out. 

MELANIE: Or if you need ideas for cool things of the week, you should check it out. 

MARK: Excellent. We will definitely have links in the show notes. 

MELANIE: All right. Well, Mark, I think that wraps it up for us for this week. 

MARK: Yeah. I know you're off soon. You're off to London. 

MELANIE: I am in London as we speak. 

MARK: As this comes up, you'll be in London. 

MELANIE: We don't pre-record this at all. 

MARK: Yep. 

MELANIE: I'm in London as we speak. And you are? 

MARK: I'll still be in San Francisco. Yeah, still just going nuts. Game Developers Conference in March. 

MELANIE: And I'll be at FOSDEM. Am I saying that right? It's FOSDEM? 

MARK: I don't know. FOSDEM? Let's go with FOSDEM. 

MELANIE: That's where I'm going to be. 

MARK: How else would you pronounce it, "FOES-DEM?" 

MELANIE: I'm going to be there this weekend. That's basically in Brussels. 

MARK: Wonderful. All right. Well, Melanie, thank you so much for joining me for yet another episode. 

MELANIE: Thanks, Mark. 
{{< /transcript >}}