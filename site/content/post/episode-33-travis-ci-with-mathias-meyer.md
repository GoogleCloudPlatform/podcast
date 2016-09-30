+++
audioDuration = "00:27:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.33.mp3"
audioSize = 40273050
categories = ["Travis CI", "Continuous Integration"]
date = "2016-07-06T01:07:49Z"
description = "Mathias Meyer, CEO of Travis CI, tells us everything about Continuous Integration, Continuous Deployment, and how Travis CI makesthem easy with the power of Google Cloud."
draft = false
episodeNumber = 33
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Continuous Integration on Travis CI with Mathias Meyer"
image="/images/post/travis.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/cJnJ47rVVty"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4rjj2w/episode_33_continuous_integration_on_travis_ci/"
+++

[Mathias Meyer](https://twitter.com/roidrage), CEO of [Travis CI](https://travis-ci.com),
discusses with your cohosts [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) what are Continuous Integration and Deployment, and
how Travis CI makes them easy and accessible to all.

Did you know Travis CI ran on Google Cloud Platform?

<!--more-->

##### About Mathias

[Mathias Meyer](https://twitter.com/roidrage) is the CEO and core member of the team running
Travis CI, a hosted continuous integration and deployment platform, and the author of the
Riak Handbook. His interests include coffee, photography, studies of human error and
distributed systems.

##### Cool thing of the week

- GitHub Making open source data more available [blog post](https://github.com/blog/2201-making-open-source-data-more-available)
- GitHub on BigQuery: Analyze all the code [blog post](http://google-opensource.blogspot.com/2016/06/github-on-bigquery-analyze-all-code.html)
- All the open source code in GitHub now shared within BigQuery: Analyze all the code! [medium](https://medium.com/@hoffa/github-on-bigquery-analyze-all-the-code-b3576fd2b150#.wts2djk7i)
- Analyzing Go code with BigQuery [medium](https://medium.com/google-cloud/analyzing-go-code-with-bigquery-485c70c3b451#.1eojh22m4)

##### Interview

- Travis CI [homepage](https://travis-ci.com)
- Continuous Integration [wikipedia](https://en.wikipedia.org/wiki/Continuous_integration)
- Extreme Programming: A Gentle Introduction [page](http://www.extremeprogramming.org/)
- Free Travis CI for Open Source [travis-ci.org](https://travis-ci.org/)
- Google Compute Engine to run builds [docs](https://cloud.google.com/compute/)
- Google Cloud Storage to cache images [docs](https://cloud.google.com/storage/)


<div style="text-align: center">
  <a href="https://travis-ci.com">
    <img src="/images/post/travis-bob.jpg" width="50%">
  </a>
  <p>Travis the Tractor, from <a href="http://www.bobthebuilder.com/en-us/">Bob the Builder</a>.</p>
</div>

##### Question of the week

- Where do I go if I want to get involved with specific parts of the Kubernetes community?
[Kubernetes Special Interest Groups](https://github.com/kubernetes/community/blob/master/README.md#special-interest-groups-sig)

##### Correction

Francesc will be in GopherCon next week, not this one. Clearly he doesn't know how calendars work.

{{< transcript "FRANCESC: Hi, and welcome to episode number 33 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy and I'm here with my colleague Mark Mandel. Hey, Mark." >}}
MARK: Hey Francesc, how you doing? 

FRANCESC: Very good, and you? 

MARK: Very well. I feel like I haven't seen you for a long time. 

FRANCESC: Yeah it's been so long since we recorded the last episode. Yeah. Today we're going to be talking with someone that I met during a conference in Budapest in CraftConf. 

MARK: Yeah. 

FRANCESC: And I saw him wearing Travis CI sticker on his back. And I thought that it was because his named was Travis. And it turns out that he was the CEO of Travis. Mathias. Mathias Meyer. 

MARK: Oh, so no one important. 

FRANCESC: Yeah, no one important. He was visiting San Francisco so we decided to invite him in exchange of some free food at Google. And in exchange, he allowed us to interview him. He's going to be talking about all the cool things they do at Travis CI with continuous integration, continuous deployment, and how they run on Google Cloud Platform. 

MARK: Yeah. Really, really fun thing. Love talking about testing. Love talking about that side of software development, so super interesting conversation. 

FRANCESC: Yeah. And after that, once we're finished with that interview, we'll have a question of the week that is about a topic that I think we've covered before. Kubernetes. I 

MARK: We've talked about kubernetes a few times. 

FRANCESC: I think we've covered-- we've covered once or twice. Yeah, we're going to be talking kubernetes and what do you do when you have very specific things that you want to know? But before that, we're going to go with the cool thing of the week. And it is a very, very cool thing of the week, if you ask me. 

MARK: Well, yeah. You've had a chance to play with this. So why don't you tell us about what you've been up to. 

FRANCESC: It is something that is very cool and I actually wrote a blog post. Basically, you know this thing GitHub, where people put code? 

MARK: I have heard of it. 

FRANCESC: Yes. We got all the code, which is a couple terabytes, of code from GitHub. And we dumped it onto a big query. 

MARK: OK. 

FRANCESC: And now you can do queries on that. 

MARK: So it's all the code, all the commits, everything? 

FRANCESC: All the code, all the commits. I think all the comments. I don't have all the branches, but it is a crazy amount of code. 

MARK: Got it. 

FRANCESC: And so I wrote a blog post because, basically, I was like, oh, what can I do with this? So I wrote a blog post saying, what is the most common filename for go files? And what is the most common package name? What is the most common-- one that was actually kind of complicated it is what is the most important package in Go all across GitHub? 

And it is really fun because, basically, you can just write some SQL. You need to know SQL a little bit. I had some personal issues with it, but it was definitely worth it. And there's actually way more different articles about it. Basically, we have-- we'll link to the blog post I wrote, but there's also one other blog post that talks about analysis for all the languages other than Go. 

MARK: Yeah. And it's a public data set so anyone can play with it, right? 

FRANCESC: It is public. You can go and play with it and try to find cool things that you could do. Best part of it-- you can also run JavaScript on BigQuery with UDF-- user-defined functions-- which means that you can actually do JavaScript analysis of the content of the files. So you can start doing really cool stuff in there. 

MARK: Interesting. How many times did you find in the codebase where it says, if error does not equal null. 

FRANCESC: I'd rather not comment. 

MARK: OK. 

FRANCESC: Great. I think that it is time to go talk with our friend Mathias. 

MARK: Sounds good. Let's have a chat. 

FRANCESC: We're here with Mathias Meyer. Hi, Mathias. 

MATHIAS: Hi. 

FRANCESC: And you're the CEO of Travis CI. 

MATHIAS: That's right. 

FRANCESC: Yeah, that is awesome. Thank you so much for coming. It is awesome to have a guest like you. Before we start talking about Travis CI and all the things that you do and everything, why don't you tell us a little bit about yourself? 

MATHIAS: OK. My name is Mathias Meyer. I'm from Berlin, in Germany, which is where a big part of our company is. I'm the CEO of Travis CI, which is a hosted continuous integration platform. We have pretty strong roots in open source. I think we have a couple of hundred thousand projects running on Travis CI, particularly open source projects. Yeah. 

MARK: Cool. 

FRANCESC: A couple hundred thousand, like nothing. 

MATHIAS: No, it's no big deal. 

MARK: No big deal. Cool. So what does a day in the life of Mathias look like at Travis? 

MATHIAS: Oh, that's an interesting one. A couple of years ago, the day looked like, there's alerts coming in and I wouldn't respond to them. These days-- that was a couple of years ago when I was still very small. At this point, our team is closer to 40 people, so it's more like figuring out what the future looks like. 

What does the future of CI look like? What's the future of continuous delivery look like? And how does it impact our product? And what other things can we do for open source? And we are so have strong roots in increasing diversity in software development and in open source, as well. 

It's a good mix of these things-- lots of daily business and operations in the company, lots of talking to people, lots of talking to customers. 

FRANCESC: Nice. You mentioned that Travis CI-- the CI stands for continuous integration. Why don't you tell us a little bit about what is continuous integration, for people that don't know what it is? 

MATHIAS: OK. A lot of this goes back to extreme programming, where two of the practices were you build every commit. Everything you check in is going to be tested. And the other practice is-- I forgot what the other practice was. Anyway, I'm going to focus on that one because that's the best one. 

Continuous integration focuses around the idea that every change you make to the codebase is run in an isolated environment. You test those changes and you build-- compile-- something and then you run a test suite that hopefully exists for this project, to make sure that the change that you made still works in the bigger picture of the test suite. 

FRANCESC: Cool. I'm assuming that, with that, basically what you're trying to do is to try to get a build that always builds. And as soon as someone messes it up, you just know so you don't need-- 

MATHIAS: Yes, exactly. You want to be notified when something happens. The definition of continuous integration actually goes a lot further than that. Depending on who you ask, it is also a development practice. It's a practice of continuously integrating your code into trunk. 

It's a very controversial thing, still, to make sure that no changes that you make live off the main trunk for longer than a day. It was-- extreme programming had this practice of, at the end of the day if you're not done with your change, you delete the code. 

FRANCESC: Wow. 

MARK: Oh. 

MATHIAS: It's very controversial, still, at this point. This is-- we're now-- I don't know how many years post-extreme programming-- 15, 20 years. 

MARK: Yeah. Something like that, yeah. 

FRANCESC: Yeah. I was thinking, extreme programming-- that is what stands for on Windows XP? 

MATHIAS: No. 

FRANCESC: Wasn't it? 

MATHIAS: It was-- yeah, it was XP for short. But I'm not sure they had-- 

FRANCESC: Yeah. 

MARK: Yeah. 

MATHIAS: I think it goes back a little further than that. No, it was a set of practices-- good development practices. One of them that we also try to live in the company is to go home tired, but not exhausted. To find a good balance in coding, you don't want to spend 12 hours a day working on code. You want to give it your best at a normal pace for 8 hours a day, say. At the end of the day, your code is hopefully checked in and you just go home and have a life outside of work. 

FRANCESC: Cool. 

MATHIAS: Which is definitely one of my favorite extreme programming practices. 

FRANCESC: Excellent. All right. We talked about continuous integration. How does Travis CI enable you to do continuous integration? 

MATHIAS: One of the things we pride ourselves in is our easy integration with GitHub. As I mentioned before, we have-- I don't know how many hundreds thousand open source projects. Somewhere around 350,000, at this point, running on Travis CI. 

And it's just really easy to set up. You sign up with your GitHub account. We synchronize all of your repositories from GitHub. And you just activate one, add a file to your code repo, which is a build definition. 

You can customize build steps. We have a couple of sensible defaults for common languages. But you can customize a build to your liking. As soon as you enable it, you can just start checking code and we'll start building it. It's just really, really easy to get started. Usually, it just takes minutes. 

MARK: Basically, I can sit down, take my open source code. I don't need to worry about building infrastructure around during my continuous integration. I can just work on my project, check it in. As soon as I check it in, it runs on my test through the-- I guess it's a Travis yml or something? 

MATHIAS: Yes, the file is called a .travis.yml and it's part of your code repo. So we give developers the power to have full control over their build, which is definitely something people appreciate. And also, the build definition itself is part of the code. It's versioned in the same way and you can trace any changes that you make-- you can trace the entire history. 

MARK: All right. Cool. And then, as I'm building, it will notify me if something breaks? 

MATHIAS: Yes. 

MARK: I assume then, also, if I get a pull request or something like that from my code, does that also run so I can see whether it should be merged, in case something happened bad, or anything like that? 

MATHIAS: Yeah. That's definitely one of the reasons why Travis CI exists, especially in open source. There was a time when you got a pull request through your repository. I think, early on, it was-- in GitHub's terms-- it was the 4q, or before that, you just got a patch via email. 

MARK: I remember those days. 

MATHIAS: Old, back in the day. And you would merge it and then you committed to your trunk branch. You would, hopefully, have a CI running. And only then would you know if it's actually working-- if that patch is working. So you would either be happy because the patch is working or you would scream in agony because now you have this patch to maintain and make sure that you break-- you fix a build that someone else broke. 

And that was one of the core problems that Travis tried to solve. We now have-- we have a native integration with pull requests. If there's a project that's running that's using Travis CI and someone sends a pull request to it, we take the merge between the branch it's sent to and the downstream changes, and test that part. 

So we focus, really, on the integration between all of them. So it's a different kind of continuous integration, if you will. And make sure that the change works together with wherever the trunk branch is at the moment. 

FRANCESC: Cool. And I think that that is free, if you're writing open source? 

MATHIAS: Yeah. If you're running an open source project, the usage is completely free on Travis CI. 

FRANCESC: Nice. What if you're not running open source? What if you have a private repo or something like that? 

MATHIAS: If you have a private repos, we have a hosted platform for that, which is a paid platform. 

FRANCESC: Cool. But you still support it, even if the code is not-- if it's not open source. 

MATHIAS: Yeah, yeah. 

MARK: Nice. 

FRANCESC: Very cool. 

MARK: No, that sounds really good. It means, also, if you're following that internal pull request model, you want to do code reviews internally when you're building stuff, then it's all the same. 

MATHIAS: It's a fairly common model now, even in companies, to work like-- GitHub flow is, basically, a good name for it. GitHub has a good documentation of this. You start working on a feature branch, you start opening a pull request, you iterate around the pull request. 

And Travis can-- as soon as a pull request is updated, we automatically rerun the build. GitHub tracks the merge between the downstream branch and the upstream branch for us, so we can just we can just take that commit and test it all the time, whenever the pull request is updated. Once you actually want to merge it, you're at the point where you can be certain that it's going to work against the master branch, or whatever branch you open the pull request against. 

FRANCESC: Yeah. And I know that nowadays, I'm not able to work with Travis CI or something similar to that. Because it is very painful when you change something. It was like, oh, yeah, I totally did not break the build. 

And it's like, oh, I did. Yeah. It is very good to see it before you do anything else, especially pull requests from people that you might trust, and all of a sudden, it's like, oh, actually, that is wrong. 

Also, we've been using it internally in one of the projects I've been working on, where we've don't only run tests, but also we run things like styling and spell checks and stuff like that. It's like, yeah, you just misspelled something on a comment that will break the build. 

MATHIAS: Interesting. People have built interesting things about this. There's a conference that's currently planning it-- I just saw this yesterday-- who have a site that they're running on Travis-- the static page. But part of that page is a JavaScript file, which runs on Node.js and it calculates their budget. So it's going to fail the build if the budget is negative. 

MARK: Oh, nice. 

MATHIAS: And if the budget is still-- if it's still positive, in the green, it's going to succeed the build. So people have built interesting things around Travis. 

MARK: Yeah, that is very cool. 

MATHIAS: And so whenever you send a pull request that says, well, we need to make this budget adjustment. It's like, no, no. We don't have enough-- no money for that anymore. 

FRANCESC: Missing money. Nice. Talking about microservices and stuff like that like that. Very often, continuous integration comes up. But also there's another thing that comes up very often, which is continuously delivery. What are the relationship between both? 

MATHIAS: It depends on who you ask, I would say. Continuous delivery is usually associated with complex pipelines. Your build runs through stages, you make a commit, you start, say, running unit tests. And then, you have, maybe, a Q&A stage that is manually driven. And then you have a deployment stage, which eventually gets your code either to staging or to production. 

And for me, the difference between CI and CD-- continuous integration and continuous delivery-- is really, really-- is rather simple. CI, basically, means you test every commit. You make sure that any change that you make still works or it can-- it could be made, could be pushed into production. And the continuous delivery, beyond all these pipelines and-- or the idea of shipping-- continuous delivery is, to me, more simply the idea that you could ship your code any time. 

FRANCESC: OK. 

MATHIAS: The code that you check in could be deployed at any moment. 

FRANCESC: Interesting. 

MATHIAS: So you adjust your mental model of how you work around the code accordingly. 

MARK: Yeah. So even if you've just pushed it to staging for QA, that's basically the same thing as long as you've got a push button solution or something like that. 

MATHIAS: Yeah. 

MARK: You're just like, that's good to go now. 

FRANCESC: Cool. I'd like to talk now a little bit about Travis itself and how Travis works. The first question is, does Travis use continuous integration internally? 

MATHIAS: Yes. Travis CI uses Travis CI for a lot of things. 

MARK: Yay, inception. 

FRANCESC: Yay. 

MATHIAS: I mean, that's the first litmus test for any kind of infrastructure solution. Can it maintain itself? 

FRANCESC: Yeah. 

MATHIAS: And it's been-- I mean, it was originally built as a single-- not as a multi-tenant solution. It was originally built as something-- one of our co-founders wanted to run on-- he didn't want to run Jenkins. He wanted to have something that runs on Heroku. And so he started adding a couple of the nice features like live build log streaming and other stuff. And based around that, even the early Travis code was-- even six years ago, the early Travis code was running on itself. 

FRANCESC: Nice. 

MATHIAS: And it still is. We're avid users. And we also have a project which is a canary build system, which continuously runs build on Travis to check the entire system. 

FRANCESC: Nice. 

MATHIAS: So this is a fairly active project at this point. 

FRANCESC: Yeah. Cool. And what about continuous deployment? Continuous delivery, sorry. 

MATHIAS: We deploy-- our general approach is that people work on feature branches. We try to make them short-lived. Some live longer. But the idea is still that trunk, or master, in Git is deploy-- should be deployable any time. It's still one of the goals. And there's a good chance it's going to be deployed any time. 

We don't yet count deploys per day. It's a fairly popular metric at this point. But we're generally-- we're very flexible about people deploying. And we try to keep the master branch clean. 

MARK: Cool. I guess the big question is, here on the Google Cloud Platform podcast-- do you run on Google Cloud Platform? 

MATHIAS: Yes. A part of our infrastructure runs on Google Compute Engine. And that part also uses Google Cloud Storage-- 

MARK: Nice. 

MATHIAS: --specifically to run-- to use caches. We have this system where-- most projects use a certain set of dependencies. It's true for any kind of language. Any kind of language has some package management tool. And the installation-- depending on the language-- can either be a matter of seconds or of minutes. So we have this built-in caching where you can specify a directory or, say, bundle your integrations native-- or NPM integration, as well-- where we take the entire set of dependencies and tar it up, simply, and upload it to Google Compute storage-- Google Cloud storage, in this case. 

So in the next build, it's just going to be pull down and extract it. And if it's a reasonably good package management system, it's just going to detect that there's already something there. So it's just going to check for any changes and install those. And it speeds up build significantly. 

FRANCESC: Cool. When you say you that you're running on Google Compute Engine, does that mean that for every build task that you spawn, you spin a new Compute Engine instance, or how does that work? 

MATHIAS: Yeah. Whenever we-- for builds that run on that platform, whenever we get a commit notification from GitHub, we go through the process of creating the build and scheduling it. And once we start executing it, every build runs in a clean environment. That was one of the early differentiators of Travis CI-- that you get a vanilla environment. It's going to be it's going to be restarted from scratch for every build, and you can rely on that. 

So on Google Compute Engine, we start up a new instance for every build. And one of the things that we found there was we get fairly stable boot times on Google Compute Engine, which make it a lot more reliable. And that was one reason why we chose it, in the end. 

FRANCESC: Cool. Yeah. Have you ever considered doing some things slightly different? Like instead of running one new VM per build task, running one new container or something like that? 

MATHIAS: Yes. We-- another part of our infrastructure does exactly that. 

FRANCESC: Oh, cool. 

MATHIAS: That part actually uses Docker to create the build environment. And that's super fast. I just looked up the stats for how long it takes to boot up a Docker container for us. And I think the 95th percentile of that is 3.3 seconds for-- this is when-- when you look at Travis while you're committing something, you pretty much see the build start instantly. 

FRANCESC: Nice. 

MATHIAS: It goes through the system within a second or something like that. The Docker container is just booted up. And it starts running almost instantly. And that part-- we're still playing around with that. There's still something missing on Google Compute Engine that keeps us from running that part on there. But technically, it could run anywhere. 

FRANCESC: Nice. 

MARK: That's pretty cool. I'm a  little curious about how you're controlling those compute engine instances. I know we have a series of APIs, but what's the lifecycle of that look like? 

MATHIAS: We start-- we hit the API pretty hard. I'm sorry about that. 

MARK: It's fine. 

MATHIAS: We-- for every build, we send an API request to create an instance. And we start-- we keep pulling the API for the status of the virtual server. And once it's ready, the entire build is executed through an SSH connection. So once it's ready, we SSH in. We compile a build script, which is uploaded and run on the virtual server. 

MARK: Cool. 

MATHIAS: That's pretty much it. At the end of the tests, just terminate it. 

MARK: And it's done. 

MATHIAS: Yeah. 

MARK: And you're finished. Sounds good. 

FRANCESC: I was wondering, also-- regarding containers. Since you're starting a new one every single time, have you considered doing things like kubernetes or container engine or something like that? What do you think about those? 

MATHIAS: We've thought about it, we just haven't gotten around to this. It's definitely something we have in the back of our mind to play around with that a little bit. We just-- basically, we have our own scheduling and maybe there's ways to optimize that. But we haven't gotten around to it. It's definitely something we have on the radar. 

FRANCESC: Cool. Is that scheduling open source, by any chance? 

MATHIAS: Most of Travis CI is open source. And I think that part, in particular, is-- yes, everything about that is open source. The entire building execution part and our scheduler, which is really, really simple. Sounds way fancier than it really is. But it is a scheduler and all of these components are open source. 

FRANCESC: That is very good. We put a link to the repo in the show notes. There is one more question that I wanted to ask, which I've been curious about for quite a long time. I assume that there could be a Travis somewhere in Travis CI. Why is Travis CI called Travis? 

MATHIAS: That story goes back to-- well, first of all, people tend to think there's someone-- someone in our team is named Travis. 

FRANCESC: Yeah, I was expecting. 

MATHIAS: I was called Travis on multiple occasions. But it goes back to "Bob the Builder." 

MARK: Oh. 

FRANCESC: Oh, wow. 

MATHIAS: Yeah. That's the response that usually comes back from that. Bob has a tractor and that tractor's name is Travis. 

FRANCESC: Wow. OK. I really did not expect that answer. That is awesome. 

MARK: We need a picture of that tractor on the show notes. 

MATHIAS: And the story around that is in the early stages, Travis CI used a tool which was called Bob, which was just a simple Ruby script that was used to run builds. And so it was Bob and Travis just working together. 

FRANCESC: There you go. This is Travis. 

MARK: Excellent. No one else can see that because we're on a podcast, but think-- 

[INTERPOSING VOICES] 

FRANCESC: We'll put a picture of this. OK. I did not know. I knew somehow about Bob the Builder, but not Travis. 

MARK: Now, I also have to ask because I can't believe Francesc hasn't-- what languages do you use at Travis CI? 

FRANCESC: True. 

MATHIAS: OK. From the-- we're-- we used to be a very Ruby-heavy shop. And a lot of us come from the Ruby open source community. So the earliest versions of Travis were built around building Ruby. And at some point, for a while they ran on JRuby in production. 

MARK: Oh, I have a really soft spot for JRuby. 

MATHIAS: Yeah. It's allowed us to scale up, too, in interesting ways. Nowadays, most of our components are just running on CRuby and MRI because it's less resource intensive. And the build execution part-- the part that creates instances and runs the builds-- these are now mostly written in Go. We have parts of our infrastructure that are still running on an old JRuby system, but we're going to replace that with the Go execution. 

MARK: Excellent. 

FRANCESC: Very cool. 

MARK: What made you decide to write stuff in Go How did you end up at that conclusion? 

MATHIAS: That's a question I can't really answer, I'm afraid. It just happened. That was a team decision. 

MARK: So it's just because Go is amazing. That's why. Probably, yeah. 

MATHIAS: Yeah, Go is amazing. 

MARK: If people want to try Travis CI out, where can they go? Where should they go? What's the best way of getting started? 

MATHIAS: If you have an open source project, simply go to travis-ci.org. And sign in with your GitHub account and get started. 

FRANCESC: Yeah. It is very easy and it's totally worth it if you have not tried it. I agree. Well, thank you so much for taking the time to come into the Google office, have lunch, and chat a little bit with us. 

MATHIAS: My pleasure. Thank you for having me. 

MARK: It's been great. Thank you. Thank you so much to Mathias for joining us today, having a great chat about continuous integration, continuous deployment, and all sorts of interesting stuff that's going on Travis CI. 

FRANCESC: And the most interesting part, definitely-- the origin of Travis. 

MARK: Yes. 

FRANCESC: Yeah. I did not know that, so that was very cool to learn. 

MARK: That was really, really cool, as well. Let's have a chat about the question of the week. 

FRANCESC: Yeah. The question of the week-- I think that this one was someone asked you this during an event. 

MARK: Yeah. I was at an event and someone was chatting to me about building custom schedulers within kubernetes and how they could get involved with that whole aspect of it. At the time, I wasn't quite sure where to send them, so I ended up having to do some research. 

I basically hunted around and I realized that kubernetes has a series of what's called special interest groups, or SIGs, that basically cover each different aspect of kubernetes. There's one for scheduling, there's one for network, there's one for scalability, there's one for storage, et cetera, et cetera, et cetera. 

They're really cool. They've got people who run them. They have regular meetings that happen. They have slack channels dedicated, specifically, to them. 

So if it's something that you're like, oh, I really want to get involved with how kubernetes orders scales, for example, or I really want to dig into this side of the open source project, it's a really easy way to find the right pathway and the right people to talk to and the Google group to get on. We'll have a link in the show notes. There's a whole page with markdowns inside GitHub that lists all of these so that you can get involved really, really easily. 

FRANCESC: Yeah. They look-- they're very interesting. I really like that there's even things like federation, which is a very open, very active topic. I wonder what people are talking about around in there. 

MARK: Yeah. I think-- I actually think it's a great way of running the community and getting people involved. 

FRANCESC: Yep. Very, very cool. 

MARK: Excellent. Well, Francesc, thank you so much for coming and joining me once more. Are you going to be anywhere particularly interesting in the next few weeks? 

FRANCESC: By the time this comes out, I will be in Denver, Colorado, and I will have finished already my talk at GopherCon and I will be a happy gopher. 

MARK: I'm sure it will have been excellent. 

FRANCESC: I'm sure. I'm sure. What could go wrong? But yeah, I'll be still hanging out at GopherCon So by any chance, you are a listener and you're at GopherCon, or any where in Denver, let me know. 

MARK: Awesome. I think for me coming up-- I may have some other events come up beforehand. We'll see. But in August, I will definitely be at PAX Dev in some capacity. So if you want to talk about Cloud and gaming, just hunt me down or find me on Twitter. I will be at that event. Super excited for that. 

FRANCESC: Great. Sounds good. What do you say-- maybe, since we have not done it in a while, we-- 

MARK: Oh, I love it. Let's do it. 

FRANCESC: --remind people how to get in touch with us? 

MARK: Sounds good. 

FRANCESC: Cool. We are on Twitter. 

MARK: Yes. At gcppodcast. 

FRANCESC: We are on Google+-- 

MARK: --at +gcppodcast. 

FRANCESC: We are on Reddit-- 

MARK: --/r/gcppodcast. 

FRANCESC: We have a web page-- 

MARK: --at cloud.google.com/podcast. 

FRANCESC: Or gcppodcast.com Same thing. We also have an email-- 

MARK: --at hello@gcppodcast. 

FRANCESC: And finally, we also have a channel in the Google Cloud Platform Slack community. 

MARK: Yes. The hashed podcast channel. 

FRANCESC: There you go. 

MARK: Boom. 

FRANCESC: Yeah. Many ways to contact us, so no excuse. If you have a question or any kind of critique, or you just want to say hi, how are we doing? 

MARK: Yeah. 

FRANCESC: Feel free. 

MARK: Absolutely. 

FRANCESC: We're waiting for your messages. 

MARK: Wonderful. Well, yet again, thank you so much for joining me this week, Francesc. 

FRANCESC: Thank you, Mark. 

MARK: And see you all next week. 

FRANCESC: See you. 

[MUSIC PLAYING] 
{{< /transcript >}}