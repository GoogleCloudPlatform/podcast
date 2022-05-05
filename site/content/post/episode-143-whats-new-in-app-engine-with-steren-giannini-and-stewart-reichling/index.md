+++
audioDuration = "00:27:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.143.mp3"
audioSize = 40471045 
categories = ["App Engine", "Scalability", "Serverless", "Idiomatic"]
date = "2018-08-22"
description = "Mark and Melanie are your hosts again this week as we talk with Steren Giannini and Stewart Reichling about App Engine."
draft = false
episodeNumber = 143
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "What's new in App Engine with Steren Giannini and Stewart Reichling"
image="/post/episode-143-whats-new-in-app-engine-with-steren-giannini-and-stewart-reichling/images/hero/hero-EP-143.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/gvtTV7jDzrF"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/99f1za/episode_143_whats_new_in_app_engine_with_steren/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) are your hosts again this week as we talk with Steren Giannini and Stewart Reichling discussing what's new with App Engine. Particularly its new second generation runtime, allowing headless Chrome, and better language support! And automatic scalability to make your life easier, too. App Engine also has an interesting way of inspiring new Google products. Tune in to learn more!

<!--more-->

##### Steren Giannini

[Steren Giannini](https://twitter.com/steren) is a Product Manager on Google Cloud Platform (GCP). He graduated from École Centrale Lyon, France and then was CTO of a startup that created mobile and multi-device solutions. After joining Google, Steren launched Stackdriver Error Reporting and now focuses on GCP's serverless offering. Recently, Steren has been working on [upgrading App Engine's auto scaling system](https://cloudplatform.googleblog.com/2018/05/Increase-performance-while-reducing-costs-with-the-new-App-Engine-scheduler.html) and bringing [Node.js to App Engine standard environment](https://cloudplatform.googleblog.com/2018/06/Now-you-can-deploy-your-Node-js-app-to-App-Engine-standard-environment.html).

##### Stewart Reichling

[Stewart Reichling](https://twitter.com/stewblr) is a Product Manager on Google Cloud Platform (GCP). He is a graduate of Georgia Institute of Technology and has worked across Strategy, Marketing and Product Management at Google. He currently works on bringing new runtimes (Python, Node.js, +more to come!) to App Engine and Cloud Functions.

##### Cool things of the week

* Robot dance party: How we created an entire animated short at Next ‘18 [blog](https://cloud.google.com/blog/topics/inside-google-cloud/robot-dance-party-how-we-created-an-entire-animated-short-at-next-18)
* What’s happening in BigQuery: integrated machine learning, maps, and more [blog](https://cloud.google.com/blog/products/data-analytics/whats-happening-bigquery-integrated-machine-learning-maps-and-more)
* Protecting against the new “L1TF” speculative vulnerabilities [blog](https://cloud.google.com/blog/products/gcp/protecting-against-the-new-l1tf-speculative-vulnerabilities)

##### Interview

* App Engine [site](https://cloud.google.com/appengine)
* Deploying Node.js on App Engine standard environment [video](https://www.youtube.com/watch?v=C_9lpcfDCHs)
* Introducing headless Chrome support in Cloud Functions and App Engine [blog](https://cloud.google.com/blog/products/gcp/introducing-headless-chrome-support-in-cloud-functions-and-app-engine)
* Node 8 [site](https://nodejs.org/en/blog/release/v8.0.0/)
* Python 3.7.0 [site](https://www.python.org/downloads/release/python-370/)
* App Engine PHP 7.2 Runtime Environment Beta [site](https://cloud.google.com/appengine/docs/standard/php7/runtime) 
* Headless Chrome [site](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
* GCPPodcast Episode 23: Humble Bundle with Andy Oxfeld [podcast](https://www.gcppodcast.com/post/episode-23-humble-bundle-with-andy-oxfeld/)
* Google Cloud Datastore [site](https://cloud.google.com/datastore/)
* App Engine Task Queue [site](https://cloud.google.com/appengine/docs/standard/python/taskqueue/)
* Ubuntu [site](https://www.ubuntu.com)
* gVisor [site](https://github.com/google/gvisor)
* Open-sourcing gVisor, a sandboxed container runtime [blog](https://cloudplatform.googleblog.com/2018/05/Open-sourcing-gVisor-a-sandboxed-container-runtime.html)
* App Engine Documentation [site](https://cloud.google.com/appengine/docs/)
* gcloud app deploy [site](https://cloud.google.com/sdk/gcloud/reference/app/deploy)
* To send feedback, email [stewartr@google.com](mailto:stewartr@google.com) or [steren@google.com](mailto:steren@google.com)
* App Engine Google Group [forum](https://groups.google.com/forum/#!forum/google-appengine)
* Operating Serverless Apps with Google Stackdriver [video](https://youtu.be/wQ1LQeN6HG0)
* App Engine's new auto scaling system - scheduler [blog](https://cloudplatform.googleblog.com/2018/05/Increase-performance-while-reducing-costs-with-the-new-App-Engine-scheduler.html)

##### Question of the week

What does it mean when the recommendation is to update your image?

* Getting Image Vulnerabilities [site](https://cloud.google.com/container-registry/docs/get-image-vulnerabilities)
* Updating Managed Instance Groups [site](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups)
* Node Images [site](https://cloud.google.com/kubernetes-engine/docs/concepts/node-images#automatic_upgrade_and_repair)

##### Where can you find us next?

Melanie will be at [Deep Learning Indaba](http://www.deeplearningindaba.com) and [Strangeloop](https://www.thestrangeloop.com).

Mark will be at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/) starting August 28th. In September, he'll be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo) and [Strangeloop](https://www.thestrangeloop.com).

{{< transcript "[MUSIC PLAYING] MARK: Hi. And welcome to episode number 143 of the weekly "Google Cloud Platform" podcast. I'm Mark Mandel and I'm here with my colleague, Melanie Warrick. Hey, Melanie." >}}

MELANIE: Hi, Mark. 

MARK: How are you doing? 

MELANIE: I'm OK. How are you? 

MARK: I'm good. 

MELANIE: We're not doing Next any more-- at least for eight months. 

MARK: At least for eight months, exactly. So this week we have Steren and Stewart from the App Engine team joining us to talk all about what's new in App Engine. 

MELANIE: Yeah, I should clarify. We are still sharing interviews that we captured while we were at Next. 

MARK: It's true. 

MELANIE: We're just not at Next anymore. Anyways, yes, that will be a good episode. We know one of our listeners actually has been asking for when this is coming, so-- 

MARK: Here it is. 

MELANIE: This will be the episode. As always, we have our cool things of the week. And we're going to end with the question of the week, which is a question we came up with when we were looking at our cool things of the week, actually, which is, what does it mean when there's a recommendation that you should update your image? 

MARK: What does that mean? 

MELANIE: We'll find out what that means. Maybe that just means change the picture you're using. 

MARK: [LAUGHING]. Change the background wallpaper on your computer. 

MELANIE: Maybe change the cat. 

[CAT HISSING] 

So cool things of the week-- 

MARK: Yeah. 

MELANIE: Mark, I know you found this first one, and you were so disappointed that I didn't know about it. 

MARK: So there's an article about the robot dance party that we created at Next. OK. So unfortunately, it's not real robots. 

ROBOT: Whatever. 

MELANIE: When you first told me that, I was looking at it going, wait, this is going to have actual robots dancing around. 

MARK: Yeah. So it was actually really cool. 

ROBOT: That is correct. 

If you happened to check out the media and entertainment section if you were at Next, there was a bunch of animators who were there creating an animated short of dancing robots. 

MELANIE: And they were working with somebody remotely, too, out of LA. 

MARK: Yeah, exactly. So they had a third person who was in LA, and they were doing it all at the same time. They were all working together with remote work and the people who were there, and all doing all the collaboration. 

MELANIE: Yeah, they were using virtual workstations to be able to collaborate and using some of the Google Cloud tools with other tools, as well, to basically animate-- create these animated robots to do the dance with a little DJ, as well. 

ROBOT: It is time to rock this place, yo. 

The video of what they created is actually on the site. They spent three days on the show floor, remotely coordinating and animating and using things like Firestore and rendered workers. 

MARK: Yep. 

MELANIE: I know rendering actual images, like animated images, takes a significant amount of time. And what's cool was, they were actually able to assign multiple workers to render each frame. We're talking-- I think it was 1,500 frames is what they listed or something around that. So they could just do it all in parallel. Because it takes 13 to 30 minutes per frame to render. 

MARK: Got it. My favorite part is the two dancers were Fred and Ginger. They had a four-armed robot called DJ Half-K. Because it was four arms, Kubernetes has eight. So it's a half K. 

MELANIE: Buh-dum-bum. 

MARK: Yeah. 

MELANIE: Nice. 

MARK: I liked it. 

MELANIE: So anyway, robot dance party. We'll put the link in the show notes. Another thing that we wanted to mention for cool things of the week is what's happening in BigQuery. We had some stuff that was announced and it's official that BigQuery machine learning is in beta. So this is BigQuery's way of providing tools to do feature engineering, modeling in BigQuery, so you don't have to do any moving of the data, which is pretty great. 

It's supposed to work natively in SQL. This is really helpful for those who are working with databases and working with SQL. They also have the BigQuery GIS, which is in public alpha. And this is their geo-spatial information system integrated with BigQuery. So it's allowing you to basically use data to support geo-spatial data types and functions. 

MARK: Yep. 

MELANIE: It also has a VIS tool that's on top of it to help you actually apply this to Maps directly. You should check it out. A couple other announcements in here, like clustering and data transfer services. So you can take a look and see what's going on with BigQuery. 

MARK: BigQuery just keeps getting awesomer and awesomer. 

MELANIE: I know. This whole idea of trying to couple tools where the data lives is a smart move. 

MARK: Yeah, I like it. I like it a lot. Finally, the next security thing-- so as you may have heard earlier this year, Project Zero at Google disclosed some security flaws in speculative execution, particularly Spectre and Meltdown. As of-- I'm looking at the 14th of August, Intel published details on a new set of speculative execution vulnerabilities called L1TF, for short. 

The TL;DR-- and I'm not a security expert so I will read this here, is that Google Compute Engine employees host isolation features which ensures that an individual core is never concurrently shared. 

MELANIE: So one thing to note about L1TF is that, what's a little different from Spectre is that this variant exploits speculative execution by attacking the configuration of processor level data structures rather than the program's control flow. So that's where this is different. It's referring to L1. It has to do specifically with L1 cache, how that's being handled and ways in which that can be accessed. 

And so Google is taking certain steps, has mitigation against L1TF. And I know, Mark, you were going to mention some of those. 

MARK: Yeah, so they've already deployed mitigation to Google's infrastructure, including the infrastructure that underpins Google Cloud, which basically prevents the creation of the vulnerable page table entries within the host OS. So TL;DR, you should be fine-- everything should be fine. We are advocating-- 

MELANIE: No, everything is on fire. Everything's on fire. 

[FIRE ALARM SOUNDING] 

MARK: Well, everything is on fire, but you should be fine. We are advocating, as per usual, good, standard stuff. Make sure your images are up to date. Make sure all your software is up to date. 

ROBOT: What does that mean? 

MELANIE: And for those who are saying, well, what does that mean, well, we're going to talk about that after the interview. 

MARK: We are. 

MELANIE: And now, I think it's time for us to go talk with Steren and Stewart. 

MARK: Let's get to it. 

MELANIE: All right. 

MARK: Well, I'm very excited to have yet another interview here on the Next show floor. We have Steren Giannini and Stewart Reichling, both project managers at Google Cloud. How are you both doing? 

STEWART: Doing great. How are you? 

STEREN: Pretty good. 

MARK: Awesome. You're here to tell us all about App Engine and all the amazing new things that are happening with App Engine. Before we do that, do you want to tell us a little bit about both of yourselves and what you do here at Google? 

STEREN: Sounds good. I'm a product manager on Google Cloud in the Serverless team. Personally, I'm a Node.js developer, so that's why I handle some Node.js things regarding App Engine. 

STEWART: Cool I am also a product manager on App Engine. Steren and I sit on the same team. And I am more of a Python guy. 

MELANIE: Python's a good one. So what's going on with App Engine? 

STEWART: So if you've listened to any of the announcements over the last couple of days, we have a lot of exciting new things to announce for App Engine. We're making a big push on App Engine. App Engine has always been about a really strong developer experience. There's security built in the Serverless model, and we're here to talk about that today. 

MELANIE: Nice. 

MARK: Yeah, so people who aren't familiar with App Engine, give us the pitch. 

STEREN: All right. App Engine is a fully-managed serverless application platform. It was really serverless before it was cool. So it's cached to zero. You pay for what you use. And there is no server management. We entirely abstract the infrastructure from you. 

Deployments are source-based. So what you give is your application source code, then it deploys fast. There's a build pipeline. There's a built-in versioning and traffic splitting features. 

STEWART: Yeah, so it's often just been about, you are a developer who wants to write your code. You don't want to have to think about setting up and wiring and the complicated things around scaling. App Engine is really supposed to give you that simple developer experience plus things like a pay-per-use billing model and good scaling. 

MELANIE: And we use App Engine for our-- 

MARK: Podcast. 

MELANIE: --website. 

MARK: Yes, we do. 

MELANIE: For the podcast. 

MARK: We do. 

STEWART: Nice. A lot of people do. 

MARK: But serverless is totally 2018. Hasn't App Engine been around longer than that? 

STEWART: Sure, yeah. App Engine has been around since-- what? 2008. We celebrated our 10 year anniversary recently. 

STEREN: 10 years. 

STEWART: If you listened to Oren Teich talk two days ago, he called it the OG serverless product. And I think that's exactly right. It's serverless before serverless was this cool, trendy buzzword. 

STEREN: So we can even say that App Engine was here before Google Cloud was a thing. App Engine was the platform before Google Cloud platform even existed. 

MELANIE: It started it all. 

STEREN: Yeah. And initially it had all those features built into App Engine. So Datastore is actually originally an App Engine feature. And now they are full, standalone Cloud products. 

MELANIE: So what's new with App Engine? 

STEREN: The world has changed in 10 years. A lot of web frameworks have appeared, and originally, App Engine was a little bit forcing you to use a certain programming model. And all of that has changed now. App Engine is now what we say idiomatic. So in Cloud Next, we introduced what we call the second generation run times. And those generation run times really allow you to use an idiomatic developer experience. 

STEWART: So the idea is, I'm a Python developer, I want to be able to write Python code. Not necessarily App Engine code. Steren is a Node developer. Steren wants to write Node code, not necessarily App Engine code. And so as part of that, we have these new run times-- three of them right now to announce. 

We have Node 8 that was actually previewed at Google IO. We have Python 3.7 coming in the next week or so. PHP 7.2-- I'm actually not sure when this airs. It might be out by the time this comes out. And then we're working on some other languages, as well. And the idea behind all of these-- the unifying theme is that they are idiomatic. Which means that you write the language that you know. You don't think about using proprietary stuff. 

MARK: And actually, probably a good question while we're at it, it's idiomatic-- what am I writing this stuff for? Is it websites? What am I doing with this stuff? 

STEWART: For sure, yeah. We see all kinds of different use cases. A lot of them are web apps, micro-services, anything that needs scale, either scaling up very fast. So you get a ton of traffic, App Engine scales automatically for you to meet that need. Or you're not using it very frequently, it scales down to zero. 

And so in that case, you're not paying for anything. During Oren's talk, there was-- "The New York Times," actually, is a great example where they have these crosswords that are super popular. Right when they come out, everybody rushes online to try and solve them. Well, how do you provision infrastructure for that? You either don't provision enough, in which case you're losing customers, or you way over provision, in which case you're paying for stuff that's not even getting used. 

And so App Engine is the perfect use case for something like that. Suddenly you get a lot of traffic, it scales up. 

STEREN: I'm always amazed by the creativity of our customers. So many people build their entire businesses on top of App Engine. Many use cases are about mobile backhands or rest APIs, or even internal applications. Because you just deploy your app, and then you don't have to worry about it. It just runs. So that abstracts away the operations from you to focus on your business value. 

STEWART: And so you've also been a big push on getting Headless Chrome and features like that built in. Why does that matter for App Engine? 

STEREN: Yeah. So you can easily build very small services that are super dedicated to doing one thing. For example, we put all of the OS packages needed to run Headless Chrome on App Engine. So if you to run one service that just takes a screenshot of a web page or generates a PDF, you can do that on App Engine and you don't have to worry about it. It just works. 

STEWART: So it meets needs all the way from big web apps down to developer tools, internal tools that you're building yourself. 

MELANIE: What are some examples that you've seen that you've been pretty impressed by in terms of how it's been applied? 

STEREN: As we said, we have some amazing customers. I think the most famous one is probably Snapchat. So that's pretty amazing, what they built on top of App Engine, going from a very small company to this massive scale using our platform. 

MARK: One of my favorites-- episode 23 with the-- if everyone plays video games, like I do-- a Humble Bundle that runs on top of App Engine. They actually specifically-- they do an event-- well, they used to do, especially, an event-based model where it was like they have events for cheap games, and so they get massive spikes. And having App Engine, they said, was really great. 

STEWART: Yeah. Humble Bundle is great use case for that. 

STEREN: Khan Academy-- we all very proud to host them. 

STEWART: Yeah. "New York Times," as I mentioned. You can go on the website. Customers of all sizes use App Engine and have been using App Engine for 10 years. One of the things that I hear from customers, which is pretty cool, is you often get people who say, the thing I launched five years ago, I can still go use that today. It still exists today, it still runs in its current form. They haven't been paying for it that whole time. 

But you see even small things. Like, my first experience with App Engine was writing a portfolio website. 

STEREN: I probably have my own website I deployed-- it was a game website in 2011, I think. It's still running today. Just hit the URL and it's there. 

MARK: That's pretty amazing. So Steren, you said something earlier which I thought was interesting. We were talking about the history of App Engine and how Datastore was once integrated. And I know now, Datastore has been pulled out as a whole separate product. Are there other products that are upcoming that are maybe being pulled out of App Engine so that they can be used in other contexts? 

STEREN: Yeah, we are graduating some App Engine exclusive features into Cloud-wide products. So Datastore is a good example of that. At Next yesterday, we announced that the task queue feature of App Engine is now a standalone Cloud product. It's called CloudTask. So task queues are very useful when you want to do things asynchronously. 

So for example, you have to do some computation, it can take some time, and you don't want to delay the response to your users. You will create a task in a queue. CloudTask will make sure that this task is executed at least once, and most of the time, exactly once. 

STEWART: Cloud Scheduler, another great example. App Engine has long had this built-in cron functionality. And again, this stuff, it originated when these services and concepts didn't really exist yet. So there's a service that you could use previously to just say, hey, I want this to run on this schedule. 

Now we're exposing that as a first party Cloud services. So you can make sure that any arbitrary HTTP target gets accessed on a certain schedule-- by the minute, by the hour, by the day-- fully customizable. And these are features that you can now use with App Engine. You can use them with Compute Engine. You can use them with anything. 

MARK: That's awesome. I'm not saying I've just created an App Engine app just to fire cron tasks and stuff before, but maybe I have. 

STEWART: Yeah. Well, you won't have to do that in the future. And we're going to have a bunch more announcements like this in the next couple of months, where we're taking these services and making them available to everybody. 

MELANIE: Any that you can share right now? 

STEWART: No comment. 

[LAUGHTER] 

MELANIE: That's a good answer. 

MARK: Had to try. 

STEREN: We can talk about the recent things we launched on App Engine to show that we truly are heavily investing into the platform. So earlier this year, we completely changed the auto scaling algorithm of all of App Engine. Nobody noticed it, but it was a massive change of our infrastructure. And as a consequence, most of our customers got better performances and lower costs. So we reduced the bills of our customers without them having to do anything. 

STEWART: It's one of the benefits of having a managed platform, is things like that-- things like security. These are things that you don't have to think about. Which normally, you would have people dedicated to think about these things and you'd spend a lot of time trying to figure out how you can optimize your infrastructure. Because you're on App Engine, that stuff is just handled for you. 

STEREN: And another feature that I personally like a lot-- so App Engine, you deploy your app. Good. But you probably want to put that app under your custom domain. And we provide a one-click HTTPS for your custom domain. 

MARK: Security people must love you for that. 

STEREN: Yes. 

MELANIE: I was going to say, yeah. 

STEWART: I was just going to talk a little bit more about what it means to be idiomatic. For us, one of the longstanding pieces of feedback that we've gotten from customers is that-- as I mentioned before, people look at it and they go, oh, I have to do these special things. My app will only work in this App Engine environment if I design it for this. I maybe already have a workload that I want to move in or I have something that I want to move out to see how it might do in a different environment. 

Because we are launching these much more open-source experiences, that means that you can use any library framework dependency that you want. You don't have to use these proprietary APIs anymore. All of these things should just work the way you expect them to work. 

STEREN: So I'm a Node developer, I can get anything from MPM, even the binary modules. They just work on App Engine. 

STEWART: Same for Python. Requirements put your dependencies in there. When you deploy, it all gets installed for you with the correct versions that you've requested. We're even looking into other standards, like PIP file. Because we love Python. We want to make sure this is the best place to run your Python applications. 

STEREN: And we also made sure to put some very useful OS packages in our base image. Which is, by the way, Ubuntu. So you get a regular Ubuntu filled with some pretty useful packages, like ImageMagick or FFmpeg and everything to run Headless Chrome, as we mentioned. 

MARK: You seem very happy about Headless Chrome. 

STEREN: Yeah. It's a nice use case. Just run Chrome on your server. 

MARK: That's great. Are you able to talk about why this change happened? It seems like there's-- I think you used the term second generation earlier, Steren. 

STEWART: Yeah, I think a big part of it is customer feedback. We've heard from customers for a long time that having to think about your application in this specific model is an impediment. It's also part of the reason why some customers choose things like VMs instead, because it gives them that fully-baked experience where they can install whatever they want. So lifting these restrictions is really based on customer feedback. 

STEREN: And to achieve that, we leveraged a very big investment that we've made into our infrastructure. So technically, those second generation run times are enabled by a new technical stack. It's all based on gVisor, which is a continual runtime sandbox. Which is, by the way, open-source. You can check it out on GitHub. So all of those new runtimes-- second generation run times are built using that new sandbox, which allows us to really allow this idiomatic experience, bringing any module you want in that sandbox. 

STEWART: And just rewinding, when App Engine first came into existence, a lot of this stuff did not even exist. And so now we have this new sandbox. Previously, you had to do a whole lot of things to the language itself in order to make it run securely on our data center. 

STEREN: Yeah, we had to. 

MELANIE: Just you, right? Just you. 

[LAUGHTER] 

MARK: Just Steren. I was going to say, does that mean then that-- some feedback I've heard previously, like, sometimes we aren't necessarily as fast as our users would like, I would say, in updating versions of languages and stuff like that. Is this going to mean that we're going to get those updates a lot faster? 

STEREN: Exactly. This new technical stack will allow us to first, deliver new languages to App Engine's standard environment. So Node.js is the first example of a new language that we introduced called the standard environment. And also, will allow us to first, update all other existing languages and keep updating them as the release comes in. 

STEWART: Yeah. And as I've mentioned multiple times, everything should just work out of the box. If it doesn't, get in touch. We put our emails on the website. We want to hear your feedback. So if something doesn't work the way you expect, please let us know. 

MARK: So everything should work out of the box? 

STEWART: It should work out of the box. 

MARK: OK. Out of the box. 

MELANIE: Or they call you. 

MARK: We'll put your email on there. It'll be fine. 

STEREN: Please do. Please do. 

MELANIE: So in terms of working with App Engine, what are resources you would recommend? 

STEWART: Sure. So I would foremost recommend our Docs pages. That's where we try to put all of the Getting Started information you need, everything like that. Whereas previously, we had this very heavy-weight docset that told you all about the specific intricacies that you needed to know, since these were slightly different environments. 

It's much lighter now, because most of the stuff that you actually needed to know, you can find anywhere. It's just, if I know how to write Python, my Python should work. If I know how to write Node, my Node should work. You don't really need to learn and keep as much in your head anymore. 

MELANIE: Agreed. 

STEREN: So for example, if you're a Node.js developer, you probably have already an existing app. Well, without any modification, there is a very high probability that it will just work if you deploy it to App Engine. So that could be a good start to trying to port an existing app and bring it to App Engine with just one command-- G Cloud app deploy deploys to the Cloud. 

STEWART: Let me also add to that. There's a generous free tier. You can just deploy your app, try it out, see how it works. If it doesn't work, no sweat. If you want something different, no sweat. But we actually think you're going to like it and stick to it. 

MARK: So as an interesting question, I think-- I think it's an interesting question. That's why I'm asking it. For those people who are currently on App Engine and have apps running, do they need to change their code or is it still fine? What's the deal there? 

STEWART: Before Node 8, there were no existing Node 8 customers. 

MARK: That's true. 

STEWART: So this is mostly a Python question. There's still the Python 2.7 environment. For Python 3.7, yes, if you're just trying to migrate your app, you're going to have to make some changes to it. We think those changes will make your workloads more portable in the future, better in the future, and more future-proof. But as I said, your existing stuff will continue to run. This new runtime is really an incremental new feature to which you can deploy now idiomatic apps the way you would expect in any other environment. 

MARK: So nothing's breaking. It's just, if you want to keep pushing new stuff-- 

STEWART: That's exactly right. 

MARK: Beautiful. So who's using this right now? Are people using the new runtime? Have you got new people who are trying this out? 

STEREN: So we announced the ability of Node.js on App Engine's standard environment at Google IO earlier this year. So today we've seen some pretty good adoption from the Node community. And the new runtimes are just opening up right now. 

STEWART: Yeah. So Python 37, PHP 7.2, those are still in private alpha right now. We've got customers using them, giving us feedback every day. Expect those to go to beta very soon or maybe already in beta. 

STEREN: And by the way, we are working on GO 111. 

MARK: Very good to hear that. 

MELANIE: So I know we've just finished the announcements at Next, but what can developers expect in the future for App Engine? 

STEWART: Continued investment. I think App Engine is the thing that we're going to continue investing in pretty heavily. Obviously, serverless as a broader concept with Cloud Functions and App Engine is what we think the future is going to be. And so we're looking at more new runtimes, as Steren just mentioned. We're looking at graduating more of these services the way we have with CloudTask, Cloud Scheduler. 

We're also looking into new features and how we can continue to improve App Engine. For example, on the networking side, we're always trying to tune our scaler to make it more performant. And so you're going to see basically, more of the stuff that we've been doing over the last few months. 

MARK: Excellent. So what would you want developers to do? Should they just read the docs? 

STEREN: Give it a try. Try those new runtimes. Give us feedback. We want to improve App Engine with your help. Take a Quickstart. I think we even have-- from the Cloud console, if you click App Engine, you can have in-console Quickstart. So without leaving the browser, you can deploy an App Engine app all under the free tier. 

So it will not cost you anything to give it a try, or even to run one instance every day for a month. So really give it a try. Give us feedback. We want to make it idiomatic for you in your programming language. 

MARK: And where should they send that feedback? 

STEWART: StewartR@Google.com. 

STEREN: Steren@Google.com, Steren on Twitter. 

MARK: Cool. I assume there's an App Engine Google group, as well. 

STEWART: Yeah. We sit right next to each other. We're a very close team. So if you send us feedback, we'll make sure that reaches the right people. We want to hear from you. 

STEREN: Also questions on Stack Overflow. I try to look at it at least once a week. 

MELANIE: That's nice and personable, too, frankly. It's nice that you want to be available for that type of feedback, that you want to hear from the community. 

STEWART: For sure. It's the only way that we know that we're doing the right things. 

MELANIE: Agreed. 

MARK: Awesome. So before we wrap up today, have we missed anything or is there anything you want to make sure that people go and see? I think you both gave presentations. Do you want to give their names so that people can find the recordings? 

STEREN: At the Data Keynote we did a preview of an exciting thing, which is serverless containers. So allowing you to basically run any programming language or any custom binary you might have within a container in a serverless way. So something that would scale to zero uses the same building model as Cloud functions. So that's quite exciting. 

MELANIE: That is exciting. We did have somebody stop by the booth earlier who said, you need to talk about serverless containers. 

STEREN: Yeah, I'm personally excited about that. 

MARK: Well, once that's out, you'll have to come back on the podcast and tell us all about it. 

STEREN: I'd love to come back. We will. 

MARK: Awesome. 

MELANIE: Thanks. 

MARK: Well, thank you so much, both of you, for taking the time today out of your busy schedules and hanging out with us in the podcast booth. 

STEWART: Thank you. 

STEREN: Thanks Mark and Melanie. 

MELANIE: Thank you again, Steren and Stewart, for coming on the show and talking to us about App Engine and all the great things that are going on with App Engine. 

MARK: Yep, it was really good. It's crazy that App Engine has been around for so many years and they're still doing stuff to it. 

MELANIE: I know. Cloud started with App Engine. 

MARK: Yeah. It's a long life. 

MELANIE: It's a long life, but it keeps updating itself. All right. Well, Mark-- 

MARK: Question of the week? 

MELANIE: OK. So we read in that article L1TF about how we, as Google, are recommending that people make sure they update their images. 

MARK: Yeah, you want to update your image. What does that mean? And I think that boils down to where you're running your code. I think we should probably just talk about two particular ones. One is, say if you're running your code on something like a GCE instance, like on a virtual machine, or whether you're running something inside a container. I think those are the two most important ones. 

If you're running it on top of GCE, it's basically probably either a Windows or Linux operating system. So if you're running, say, Debian, which I'm most familiar with, doing things like apt-get upgrade or get full-upgrade to do kernel updates, as well, is important to do on a regular basis regardless. And so when you do that, make sure if you're sitting behind a load balancer, which you probably are, you can then roll those through behind your scene, so that you don't necessarily have to have any downtime or anything like that, which is super nice. So make sure those things are up to date. 

If you're running inside a container, very much the same thing. So you may want to update your base image. Make sure you're running from the latest base core operating system. And if there are particular packages that need to be updated because of certain security things, make sure you get on top of those, as well. 

It's worth noting, as well, we do have the automated container image security scanning, as well. So make sure you check that on a regular basis. That will actually give you notifications to let you know if there are any particular security issues inside your images, as well, which will link to CBEs, which then you can see exactly what's causing that and then you can update all your stuff and that kind of stuff, too. 

MELANIE: And then two cents on this, too. When we were reading about this in the article, one thing that they stressed is that you want to take this into consideration, especially if you're running your own multi-tenant services. 

MARK: Yeah. 

MELANIE: All right, Mark, where are you going to be? 

MARK: Where am I going to be? That is an excellent question. 

MELANIE: Who are you? 

MARK: Who am I? What am I even doing with my life? What's driven me to come to this point? 

MELANIE: And now the next hour or two of the podcast. 

MARK: Exactly. 

MELANIE: Yeah, go ahead. 

MARK: So I'll be speaking at Pax Dev in Seattle. Looking forward to that and hanging out at Pax West, as well. It's going to be awesome. I'm also speaking at the game development section of Tokyo Next and be hanging out there, as well. So I'll be in Tokyo for that, which I'm really excited about because I've never been before. And then finally, I'm heading to a Strangleloop, although a little late because meetings. And I'm really sad about that. I love that conference. 

MELANIE: I know. 

MARK: But it'll be fine. I'll be hanging out with you, Melanie, at Strangleloop and a bunch of other Googlers, as well, which I'm also very excited about. 

MELANIE: Me, too. I know. Jen and Holden, who are our colleagues, will be there and speaking. 

MARK: And speaking. 

MELANIE: Yes. I will be going to go to Deep Learning Indaba in Cape Town, South Africa. I'm going to be doing some interviews there for the podcast while you are at Next. 

MARK: Yep. 

MELANIE: And then after that, of course, we're going both be at Strangleloop, as Mark mentioned. And I'm really looking forward to this because we will be hopefully interviewing a friend of ours that I've been trying to get onto the podcast for a while. So looking forward to that. She's the reason why Mark and I even know each other. Anyways, all right. 

MARK: Yes, it's entirely her fault. [LAUGHING] 

MELANIE: It is her fault. And it was at Strangleloop. So anyways-- all right. Well, Mark, I think that's it for us for this week. 

MARK: Absolutely. Thank you for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: And we'll see you all next week. 

[MUSIC PLAYING]