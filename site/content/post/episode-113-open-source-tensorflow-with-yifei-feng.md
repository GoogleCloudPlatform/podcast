+++
audioDuration = "00:26:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.113.mp3"
audioSize = 38011768
categories = ["TensorFlow", "Open Source"]
date = "2018-02-07"
description = "Yifei Feng, a TensorFlow software engineer, shares with Melanie and Mark about her work on the open source TensorFlow project and the tools she builds."
draft = false
episodeNumber = 113
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Open Source TensorFlow with Yifei Feng"
linked = true
googlePlusLink = "https://www.gcppodcast.com/post/episode-113-open-source-tensorflow-with-yifei-feng/"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7vxby2/episode_113_open_source_tensorflow_with_yifei_feng/"
+++

[Yifei Feng](https://github.com/yifeif) talks with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) about working on the open source TensorFlow platform, the recent 1.5 release, and how her team engages and supports the growing community. She provides a great overview of what its like to work on an open source project and ways to get involved especially for anyone new to contributing.

<!--more-->

##### Yifei Feng

[Yifei](https://github.com/yifeif) is a software engineer on TensorFlow team. Her main focus is building tools and infractures to help TensorFlow engineers do their best work. She works on release and the open source process of TensorFlow. She also worked on TensorFlow’s high level API and TensorFlow Serving.

##### Cool things of the week
- TensorFlow 1.5 Release [blog](https://developers.googleblog.com/2018/01/announcing-tensorflow-15.html)
- Use Forseti to make sure your Google Kubernetes Engine clusters are updated for Meltdown and Spectre [blog](https://cloudplatform.googleblog.com/2018/02/use-Forseti-to-make-sure-your-Google-Kubernetes-Engine-clusters-are-updated-for-Meltdown-and-Spectre.html)
- GCP arrives in Canada with launch of Montreal region [blog](https://cloudplatform.googleblog.com/2018/02/GCP-arrives-in-Canada-with-launch-of-Montreal-region.html)

##### Interview
- TensorFlow [site](https://www.tensorflow.org/) and [github](https://github.com/tensorflow)
- TensorFlow Contributing Guidelines [page](https://github.com/tensorflow/tensorflow/blob/master/CONTRIBUTING.md)
- TensorFlow Summit [site](https://www.tensorflow.org/dev-summit/)
- Stack Overflow [site](https://stackoverflow.com/)
- TensorFlow with Eli Bixby [podcast](https://www.gcppodcast.com/post/episode-31-tensorflow-with-eli-bixby/)
- Cloud Machine Learning Engine with Yufeng Guo [podcast](https://www.gcppodcast.com/post/episode-71-cloud-ml-with-yufeng-guo/)
- Learn TensorFlow without a PhD [blog](https://cloud.google.com/blog/big-data/2017/01/learn-tensorflow-and-deep-learning-without-a-phd)
- AI Adventures [YouTube](https://www.youtube.com/playlist?list=PLIivdWyY5sqJxnwJhe3etaK7utrBiPBQ2)

##### Question of the week

How do I design identity and access management policies policies for a GCP?

 - Toward effective cloud governance: designing policies for GCP customers large and small [blog](https://cloudplatform.googleblog.com/2018/02/designing-policies-for-GCP-customers-large-and-small.html)

##### Where can you find us next?

Melanie will be at [Fat*](https://fatconference.org/) in New York in Feb.

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 113 of the weekly \"Google Cloud Platform Podcast.\" I'm Mark Mandel, and I'm here with my colleague, as always, Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: I'm doing great, Mark. 

MARK: You're in the middle of London, where it's freezing cold I believe? 

MELANIE: Yeah, I'm in Europe, where it's cold and snowy and not snowy all at the same time. And you are in San Francisco, where it is unseasonably warm. 

MARK: Well, it's San Francisco. So it is kind of seasonably warm because it gets warm in winter for reasons that I don't understand. 

MELANIE: Yeah, you're right. It does. But it should be raining right now. 

Anyways, all that aside, this week we are going to talk to Yifei Feng, who is a software engineer on TensorFlow. And so she specifically works with open source and the open source part of TensorFlow in helping to build tools to support those who are using it. So we have a good interview coming up with her. 

But before that, as always, we like to get started with cool things of the week. And we're going to end with a question that is, in essence, if you are trying to design identity and access management policies for GCP, how would you do that? If you're a large customer or a small customer, what would that look like? 

MARK: Cool. All right, well, why don't we get stuck into our cool things of the week? I'm going to go first. 

MELANIE: You're going to go first? 

MARK: Because I feel like it. 

MELANIE: Do it. 

MARK: I'm going to go first because I want to. So we spoke the other week-- did a special episode about the Meltdown and Spectre security concerns. If you're at all familiar, there is an open source project called Forseti that we're trying to get on the podcast as well-- Forseti people, if you're listening, please come aboard-- that is an open source product for helping you scan your cloud systems for security things and setting up default policies, things like that. 

So there's now actually a part of Forseti that you can install that will do scans of your Google Kubernetes engine installations to make sure that they have been updated. So this will be something that can scan all of your projects to make sure whether or not that's been installed. So we'll link to that in the show notes. But if you run Kubernetes Engine clusters, and you want to make sure you're up to date, this is a really nice tool to be able to do it. 

MELANIE: All the things to update. 

And I will share that there's a new announcement in terms of TensorFlow. Version 1.5 is now out. It was actually released as of January 26, so that is public. And it's brought to the stage a couple of different things, like Eager Execution, which ultimately is a functionality that they've been wanting to get in place that allows you to run TensorFlow operations immediately. 

In the past, you'd have to wrap it and run a function, but now you can run it immediately as if they were called from Python. But there's other things, like TensorFlow Lite and GPU acceleration updates, so go and update to TensorFlow 1.5. 

MARK: Awesome. And finally, and definitely not least if last-- I did that in the wrong order. But we have a new region, once again, which is really cool. We seem to be popping these up all the time. So if you're in Montreal, or you want to host stuff in Montreal, we now have a Montreal region supporting a good chunk of our products. 

Per usual, there's usually a gradual rollout of different things to different areas. But the usual band of thieves, I guess-- Compute Engine, App Engine, Kubernetes are all supported, Cloud Storage, et cetera, et cetera. You can definitely see that all in the link in the show notes. 

Yeah, if you're running stuff in Montreal, this is good. 

MELANIE: Yeah, it's going to improve your latency up to 90% is what they're saying for the end users in Montreal. Which is great, because we know there's a lot of researchers, and we were also saying a lot of gamers. 

MARK: Lots of game developers. 

MELANIE: That's a real important fact for those who are out there. All right, well, I think it's time to go talk to Yifei. 

MARK: Yeah, let's do it. 

MELANIE: On today's podcast, we are excited to have Yifei Feng, who is one of our Googlers who's working on open source TensorFlow. Hi. 

YIFEI: Hi. 

MELANIE: Welcome here. Welcome to the podcast. 

YIFEI: Glad to be here. 

MELANIE: Well, before we get into it, can you tell us a little bit more about what you're working on and who you are? 

YIFEI: Oh, yeah, for sure. So I joined Google about a year and half ago, and that's also the same time that I joined TensorFlow team. 

I'm a software engineer on TensorFlow team. And for TensorFlow, I have worked on TensorFlow's high-level API, so Keras and the Estimators, as well as TensorFlow Serving, which is a system that allows users to deploy their trained machine learning models into production. 

But I spend most of my time focusing on building tools and infrastructures to help TensorFlow engineers and TensorFlow users do their best work. So this includes setting up task infrastructure, continuous integration, as well as releasing TensorFlow and managing kind of the open source processing of TensorFlow. 

MELANIE: So you came on board specifically to help build out the tools and to support that open source community. 

YIFEI: That's right. It's around the time when TensorFlow started to really grow, like half a year after we open sourced TensorFlow. And we really do need to devote some engineering power to make sure that with all these contributions-- so many people have been so enthusiastic about contributing to TensorFlow-- we can still guarantee the quality and the productivity of the engineers. 

MARK: For those people who maybe they're new to this space or haven't heard of this before, can you give us the 30,000 foot view of what is TensorFlow, like super high level? 

YIFEI: Oh, yeah, for sure. So TensorFlow is this open source machine learning platform library, however you want to call it, from Google. And so the way it works, you are representing your numerical operation with these data flow graphs. So in these data flow graphs, your master operations will be the node, and your data, or tensor, will be the edges. 

And so this kind of flexible architecture can allow you to easily run your models across all kinds of platforms-- so from CPU, GPU, to embedded system, to mobile, to server, and even to customized hardware, such as tensor processing units. And it's also really easy to scale from research to production. You don't really need to change the code much if you want to, say, deploy your model into production right away. 

MELANIE: In terms of working with TensorFlow, and specifically the open source community, what's it been like? What's the community like? 

YIFEI: So I would say the community is quite inclusive. It's kind of amazing. No matter what your background is, no matter if you are from one of the biggest company, no matter if you're from a small company, no matter you're here, you're in Asia, Europe, anywhere else in the world, and no matter you're just like one individual working on your own thing, you can. If you have a great idea, if there's people who like what you're going to bring to the table, you can contribute to TensorFlow. 

That's kind of the whole point of open source software. Anybody with a great idea, with ability to contribute, they can make a contribution. And we have definitely accepted contribution across the board, from small stuff, like, hey, I fixed documentation errors, to huge changes, like support GPU on Mac, or support Windows binaries. 

So it's kind of amazing to be able to see all these kind of contributions rolling in and see the whole community thrive because of different changes different people are making. 

MELANIE: What are some of the reasons why you think Google made the decision to open source TensorFlow to begin with? I know you came on board after they did. 

YIFEI: Right. I feel like AI has been playing such an important role in terms of how technology has progressed. And Google, kind of being the lead in this field, it's great to open up the core of its machine learning and let so many people be able to collaborate and also build on top of that or kind of see what we are doing and be like, hey, I have these new ideas, and I want to add on top of that. So kind of encourage collaboration and make sure we are all moving towards the good direction together. 

MELANIE: I know being in the AI community I've seen a lot of open sourcing over the last few years, and it's exciting. It's a great way to bring people together to share ideas to also speed up the process and the turnaround of experimentation and-- 

YIFEI: Oh, yeah, for sure. 

MELANIE: --building up this community as well. 

YIFEI: I think it's going to be really hard for TensorFlow team to have the time or the knowledge to implement a lot of these things we have right now. And I guess one of the reasons TensorFlow is proven to be supportable and work across so many platforms is because we have so many people-- they work on it, and they've tried it, and they kind of made sure that it worked across all sorts of platforms. 

MARK: So actually, before we get stuck into sort of-- I know this is part of the stuff that you've been talking about, and you mentioned sort of it came out of Google, but it's now open source. Is there like a magic internal TensorFlow, or like how is that? 

YIFEI: Right. 

MARK: Because I know we do a lot of research here, right? 

YIFEI: Right. That is a question a lot of people have asked. So to a lot of people's surprise, it's actually quite similar. It's pretty much the same. 

So I guess if we were going to talk about kind of the two versions, it's hard to not talk about this process. We have to sync the Google version of the code and the GitHub version of the code. 

So we accept port requests on GitHub, as everybody knows, and meanwhile, we also accept internal comments in our internal repository. And actually we have this rotation, one TensorFlow engineer every week, they will be on this rotation. And every day they will push all of the internal changes out to GitHub. So each internal change will show up on GitHub as a commit. 

And at the same time, they will go review GitHub port requests. If it's something simple, they usually will just review it, run the task, and accept it. And if it's something more involved, they usually will assign it to a TensorFlow core team member who might have more context over the topics, and they will review it. And eventually, all these port requests that get merged on GitHub. It's not internal yet. And about once per week, we'll also do the same thing-- bring all these GitHub changes back to internal version of TensorFlow. 

So we have kind of this tool that will take a long list of the differences between internal and external version. And when I say differences, it's not really like a huge chunk of differences. It's mostly things like mechanical path changes, or sometimes we will exclude some directory if is not ready to be released yet. And sometimes there is a Google specific dependency that's just for Google internal infrastructure, which wouldn't be useful outside, and then we will replace it or move it for the open source version of it. 

So we run all these transforms through this tool, which is actually also open source. It's called Copybara. And then we get open source version. And we always make sure that if we run the tool backward, we get the same version back. So it's actually a check that we ran on all the internal changes to make sure you always can create an external version, don't break anything open source, and be able to bring back. So they are actually pretty close. I would say a day to a week kind of apart from each other. 

MARK: So at some point they-- it's an eventual consistency model essentially, right? 

YIFEI: That's right. That's right. It's actually quite challenging managing this. You can kind of imagine that having two source of truths, and given the volume that we are getting from both sides, it's very likely that there are going to be changes touching the same piece of code. 

MELANIE: I can imagine that would definitely be one of the bigger challenges that you're dealing with-- 

YIFEI: That's right. 

MELANIE: --in terms of dealing with open source versus the internal. What are some of the other challenges you find when you're working with open source? 

YIFEI: I guess that's one of it. And another thing we have-- it's just we're getting tons of issues on GitHub. 

And so we also have another thing that's called the issue rotation, which is very similar. So basically we have somebody on the team every week that will go through all the issues that we're getting, and they will do something similar. If it's something they can resolve really fast, they will try to answer. And if it's something more involved, especially if it's like a performance issue or clearly a bug, they will assign it to somebody who knows more about it. And then somebody with more expertise can carry on with the conversation. 

Or if there are feature requests-- we're getting tons of feature requests, right? So that's also something that we want to work on to kind of apply a label to all these issues that's "contribution welcome," so we can get the community to kind of join in and help us. 

And there are also people who have been asking us, hey, I really want to contribute to TensorFlow. What should I do? And we always recommend, hey, look at this list of contribution welcome. Pick something that you're interested in. It's now a support request. We'll review it. 

MARK: So you mentioned that there were sort of two sources of truth. So basically, there's sort of the outer community, and there's Google, who's also working on this full time. How do you determine what should be worked on with what? Is there like one ruling body, or is it just kind of free for all, or what happens? 

YIFEI: I think it's more kind of an organic process. We don't really have specific rules of, hey, these features need to be implemented. These shouldn't be. I feel like for any big features, usually we will have a plan. We'll have a two-time review. We'll have that implemented internally. 

There are also definitely ideas that we want to do, but we may not even have the expertise within Google to do it. Somebody else will probably want it more than we do already, and they will give us a contribution on GitHub, and then we're more than happy to accept those. 

And then there are also smaller features that we might think about that is good to have, but we haven't really got to them yet. And then if we get enough momentum on the community, from the community, that there's so many people asking about it, then we're like, OK, maybe we should prioritize that better because so many people really want this feature. And then we work on those. 

And some other times, there are also smaller features people just directly contribute to us. And then we're like, OK, this totally makes sense to have, and we haven't had time to even do something like this, and great, we'll take those features. 

MARK: So it sounds like a really-- 

YIFEI: So it's kind of more community-driven I would say. 

MARK: Yeah. That's what I was going to say. Yeah, sounds like a very strong community-driven process. That sounds great. 

YIFEI: For sure. 

MELANIE: In terms of TensorFlow, you were saying before about how you guys reconcile between the internal and external, and there's a daily reconciliation to a degree. It's not necessarily a release. So what does a release look like for TensorFlow? 

YIFEI: Great question. So when we talk about this sync between internal and external world, this pretty much all happens on the master branch of GitHub. But for release, we usually cut a release branch, and everything happens on that branch. 

So usually we will have a list of features that we know we want to get in to the next release, and then we cut a release branch. We wouldn't want any new, unstable change to get put into that branch anymore. So that's the branch where we will try to run the release test, build our binaries, and then we will release an RC version first-- "release candidates." 

Once the release candidates is out there, people will try to use it and let us know, hey, if there's any issues or any bugs. And that's one way to cherry pick new changes from the master branch into the release branch to fix all these issues that showed up in the release candidates. And sometimes you will need to go through a few iterations, and that's when we eventually announce the official release. 

MELANIE: And I know you have the release 1.5, and are there specific features that you wanted to highlight in regards to release 1.5? 

YIFEI: Oh, yeah. 1.5 has a lot of very exciting features. Some of them have been in the preview in the nightly binary for a while, but there will finally be an official release. 

So for example, TF Life is one of the very exciting things. It's TensorFlow's mobile runtime. 

MARK: Oh, cool. 

YIFEI: So basically, it allows you to have a really small binary size and be able to run your machine learning model inference on-device. So that's two things you care a lot when you're trying to do something on embedded platforms, right? 

MELANIE: Yeah. 

YIFEI: Another thing that's very exciting-- it's TF Eager Execution, which I think was also announced late last year, just like TF Lite. Basically it's the imperative mode of TensorFlow. Earlier we talked about the standard TensorFlow works as data flow graph, versus Eager, the code will actually execute the order you're writing in, your Python code, which as you can imagine would be great for debugging your experiment. 

MELANIE: Well, this is great to hear. And I know that's always very exciting when there's a new release, but also I know you get a lot of reaction. People will experiment and explore and have opinions, and I'm sure you see that. What's it like managing the reactions once you do have the release? 

YIFEI: I guess, for releases, sometimes we always need to kind of move forward. Say, for our GPU releases, there are going to be a new CUDA or cuDNN version. We're going to sometimes make some backward incompatible changes. So sometime this kind of decision we need to make whether we want to distribute our binaries with a better performance or more people with older platforms will still be able to use it. 

It is quite tricky sometimes to make that decision of, hey, do we want to stay with the older stuff but sacrifice performance for a lot of people? Or do we want to just be like, hey, we're just going to move forward because more people will be able to get out of the box binary with better performance? But at the end of the day, there is always the source code there, so you can always build it from scratch. 

MELANIE: You can always play around with it or explore from scratch. 

YIFEI: Right, you can always build your own binary on the platform that you want to run. It's kind of always a hard decision to make. 

MELANIE: When you decide to stop supporting certain binaries or certain backgrounds, how do you communicate that out usually? 

YIFEI: First of all, when we decide to move on to a new version of something, we will get some requests from the community a long time ago. That's kind of where we start to think about, hey, maybe we should do this. Or we kind of know we want to do this, but that's where we hear the feedback. 

And if more people are willing to be like, hey, I would rather update my operating system or something in order to get the performance gain, then we kind of make the decision, hey, this is something we should do because it sounds like most of the community would prefer something like this versus the other way around. 

MARK: TensorFlow obviously has become a very popular project. Has there been anything you found particularly surprising when working with the open source community? Was there a feature that you thought was like, whoa, I never saw that coming, or was there any aspect of that that you found particularly surprising or interesting? 

YIFEI: A lot of time it's very surprising how many people are actively working on things, or how many people have been paying attention. 

For example, before we had official Windows binary release, we had been kind of trying to get it to work. And when we announced the intention of, hey, we're thinking of releasing a Windows binary. And I think to our surprise, Microsoft stepped in and we're like, hey, we have been trying to do the same, and here's some port requests. That's our progress. Which was amazing, because it would have taken us way longer. 

There are probably lots of this kind of example. That's one that I can remember. 

MELANIE: Nice. Nice. How large is the community? 

YIFEI: It has been growing. By now, we have about 27K commits on GitHub. 

MELANIE: That's pretty impressive. 

MARK: I'm seeing-- 

YIFEI: 12K contributors. That's a lot. 

MARK: --87,000 stars. 

YIFEI: Oh, wow. And I think we get probably around 100 issues per week. Probably around the same number of port requests per week as well, which is a lot. 

MELANIE: I know you were saying at the beginning that you find it really exciting how people build on these ideas that they come up with in terms of the way they contribute. What makes you so excited, outside of that, about working on open source? 

YIFEI: I think it's a great learning experience, because you kind of get to see how people approach the same problem in different ways. You see solutions that the way to attack a problem you would never even think of. And you interact with pretty much the expertise of all fields. 

And I guess it's also about the people. It's always exciting to go to a conference and just run into somebody that's like, oh, hey, I remember you from a port request, which is always exciting. 

MELANIE: This is cool. This is cool that you have so much excitement out of working with the community. 

MARK: So this all sounds really cool, and it's great to hear your passion for open source and the TensorFlow community. If people are listening in and they're saying to themselves, man, I really wish I could get involved with the TensorFlow community, what's a great place to start? I think you touched on this a little bit previously, but I think if we can give people some concrete examples, it would be great. 

YIFEI: As I mentioned earlier, one of the greatest places to start if you want to contribute code to TensorFlow is to go to TensorFlow's issue page. And for everything that we would like the community to contribute, we will tag with "contribution welcome" label. And you can go through those issues and be like, hey, this is something that's very interesting. Oh, this is really relevant to what I'm working on, and I can probably make some contribution on this field. And that's one place that's great. 

And another place is Stack Overflow. So we have thousands and thousands of questions tagged with TensorFlow on Stack Overflow, and it would be great if somebody can take a look at them and be like, oh, hey, I know the answer to these questions. I ran into the same issues. 

MELANIE: I think that's a great example, too, because there's also the people out there who might want to be involved, and they've never done open source before, and they're intimidated by it. And they don't think-- oh, there's no way I could solve these kind of problems, or there's no way I could contribute to something as big as TensorFlow. So Stack Overflow-- 

YIFEI: It's a great place to start. 

MELANIE: Especially smaller issues, tackling smaller issues. Do you have any recommendations for best practices or ways people should think about engaging, especially if they've never done it before, or they've done very little, and they're very intimidated by this? 

YIFEI: I guess it's kind of similar rules for contributing to pretty much any open source projects. So always do your homework, understanding the rules for how to contribute to a project. So for example, on TensorFlow's GitHub main page, there is contributing documentation-- kind of list out what are the rules that you should follow when you contribute. 

And then there things when you are going to add a new feature, before you send a huge port request, it might be good to start an issue to talk to the maintainer just to see, hey, if something that I'm proposing is going to align with the general direction of the project. Or even sometimes, somebody might already be working on something similar internally, and it's always good to just check up, oh, hey, I want to do something like this. What do you think? Do you guys think it's reasonable? 

MELANIE: Is that the best way, though-- putting an issue in, to be able to get in touch with people-- 

YIFEI: So if it's something that hasn't been brought up before. There are also a lot of opportunities on the issue page where you can kind of filter through by the "contribution welcome" label. 

And it's also good to just leave a message. Be like, hey, I'm thinking of doing this. What do you guys say? And everybody's like, oh, hey, thumbs up. Go ahead. And then you can send a port request. Because sometimes there might be something tricky that you're not aware of, and maybe somebody on the team or somebody proposing that feature from the community can give you some guidance on that. 

MELANIE: Do you guys have any chat channels or anything that people hang out in and share ideas? 

YIFEI: Not so much. I think in terms of that, usually we just use GitHub issues, so people will comment on the issues. If somebody likes the idea, they might sum up the comments or something like that. 

MARK: And TensorFlow has a contributing guideline that people can go read? 

YIFEI: That's right. So that's on the GitHub page. 

MELANIE: Anything that you wanted to mention before we wrap this up in terms of open source, TensorFlow, working these types of communities? 

YIFEI: I guess this is also something that's more for a general contributing to open source. It's really important, I guess, to be respectful and mindful. Because a lot of time people kind of forget, hey, there's a human behind the computer, right? 

So everybody contributing to a project is kind of coming from such different backgrounds, and the way they approach problems can be very different. So you kind of always need to be positive and open minded and be ready to try to understand where other people's opinions are from and try to explain your opinions. 

So if there's any disagreement, always kind of be willing to go in with an open mind, try to understand what's going on, try to resolve it. I think that helps when everybody's kind of in a positive mindset, even if there are a lot of conflicts on this port request, and people are going to be working together trying to figure things out and get you the best solution. 

So that's something-- I find it very important to encourage more people to contribute to the community. 

MELANIE: I agree. I think it's great to get a variety of inputs, especially across the board on a community. It's very helpful. 

Well, great. Yifei, I'm so glad you were able to join us. Thank you so much. Anything else you want to plug? We talked about 1.5 coming out. Anything else that is coming out, is being launched? 

MARK: Events? 

MELANIE: Or events that are happening, especially around open source, that you're like, hey, we need to make sure people know about that? 

YIFEI: I think we do have a TensorFlow Dev Summit coming up at the end of March. 

MELANIE: Yes you do. Yeah. 

YIFEI: So tune in. I think we are going to have a lot of live streaming parties. It will be great. 

MELANIE: Oh, great. Thank you. 

MARK: Awesome. Well, Yifei, thank you so much for joining us. Really, it was great to have a chat with you to talk about open source and TensorFlow. 

YIFEI: Glad to be here. 

MELANIE: Thank you. 

YIFEI: Thanks, guys. 

MELANIE: Thanks, Yifei, we really appreciate you coming onto the podcast to share with us about what you work on and how TensorFlow open source is managed. It was helpful to hear that. 

MARK: Yeah, it is really interesting to hear about the governance and the processes that happen behind large open source projects. Those things can seem kind of unwieldy and chaotic from the outside. 

MELANIE: They are. 

MARK: It's good to see so much strategy and logic going into it. 

MELANIE: I've worked on open source myself. It's fascinating and fabulous and also extremely difficult all at the same time, where you've got this amazing community that wants to get behind it, and they have very strong opinions. And managing that-- it's definitely an art. 

MARK: Yes. 

MELANIE: But it's fun. 

MARK: I'm not saying it's like wrangling cats, but maybe it's kind of like wrangling cats. 

MELANIE: Maybe it is. All right. Question of the week-- how do I design an identity and access management policy for GCP depending on the type of customer that I am? And we are getting the answer from Grace Mollison. She's one of our solution architects that has put together some great best practices. 

MARK: Yeah, she's written a really interesting article here, as well as a tutorial around the differences in policies that you might need, say, versus like an enterprise customer versus a startup, maybe sort of like an education and training system that's really, really nice looking at sort of-- a startup, for example, people often wear many hats, right? They have many roles, and they do a lot of things. Whereas an enterprise, people can be much more specialized, and how you might want to set up your policies depending on those sort of requirements you have in your systems. 

MELANIE: Yes. We'll definitely include the link as always. And also, I'll mention that Grace wrote this in conjunction with Marco Cavalli, who is a product manager on this. And so we'll include that, and we'll make sure that people have access to it. 

Mark, are you going to be anywhere new in the near future? 

MARK: Still just working really hard towards Game Developers Conference here in March in San Francisco. 

MELANIE: That's important. 

MARK: How about yourself? Where are you running off to? 

MELANIE: I am going to go to Fat*, which is a conference that's talking about machine learning fairness from an algorithmic perspective. It's sharing ideas and-- 

MARK: Cool. 

MELANIE: --various research that's in the space. And that's happening later in February, but we'll talk about that again on the next podcast. 

MARK: Yeah, can't wait to hear about it. 

Well, Melanie, thank you so much for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: And thank you everyone for listening, and we'll see you all next week. 

{{< /transcript >}}