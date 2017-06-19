+++
audioDuration = "00:31:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.80.mp3"
audioSize = 45095988
categories = ["Spinnaker", "Open Source", "Continuous Integration"]
date = "2017-06-07T01:07:49Z"
description = "Yesterday Spinnaker reached its version 1.0, today Francesc and Mark talk to Steven Kim and Christopher Sanson about it!"
draft = false
image="/images/post/spinnaker.png"
episodeNumber = 80
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Spinnaker with Steven Kim and Christopher Sanson"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/8WffJCifHUj"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6funo1/episode_80_spinnaker_with_steven_kim_and/"
+++

Yesterday [Spinnaker](https://spinnaker.io) reached its [version 1.0](https://cloudplatform.googleblog.com/2017/06/spinnaker-10-continuous-delivery.html),
today [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
talk to Steven Kim and Christopher Sanson about it!

Spinnaker is an open-source multi-cloud continuous delivery platform used in production at companies
like Netflix, Waze, Target, and Cloudera, plus a new open-source command line interface (CLI)
tool called halyard that makes it easy to deploy Spinnaker itself

<!--more-->

##### About Steven Kim
Steven Kim is an engineering manager at Google based in New York City, focused on build and delivery systems.
Prior to Google, Steven ran engineering teams at DreamWorks Animation, and was a part of the technical
leadership in new initiatives at the studio.

##### About Christopher Sanson
Christopher Sanson is the Product Manager for Cloud Container Builder, Spinnaker, and Cloud CICD at Google.
Prior to joining Google he ran his own software development company, building web and mobile apps for companies from
startups to the Fortune 100.

##### Cool things of the week

- Coolest features of Google Container Builder [blog post](https://medium.com/google-cloud/container-builder-797c0dc2c991) by [Ahmet Alp Balkan](https://twitter.com/ahmetb)
- Know thy enemy: how to prioritize and communicate risks - CRE life lessons [blog post](https://cloudplatform.googleblog.com/2017/05/know-thy-enemy-how-to-prioritize-and-communicate-risks-CRE-life-lessons.html)
  - #72 Customer Reliability Engineering with Luke Stone [gcppodcast](https://www.gcppodcast.com/post/episode-72-customer-reliability-engineering-with-luke-stone/)
- [Sherol Chen](https://twitter.com/ffpaladin)'s page on Machine Learning [Eliza Effect](http://www.elizaeffect.com/)

##### Interview

- Spinnaker [spinnaker.io](https://spinnaker.io)
- Spinnaker 1.0: a continuous delivery platform for cloud [announcement](https://cloudplatform.googleblog.com/2017/06/spinnaker-10-continuous-delivery.html)
- [Release Engineering](https://landing.google.com/sre/book/chapters/release-engineering.html) chapter of the [SRE book](https://landing.google.com/sre/book.html)
- Deploying the Netflix API [Netflix Tech Blog](https://medium.com/netflix-techblog/deploying-the-netflix-api-79b6176cc3f0)
- Spinnaker on [Google Cloud Deployment Manager](https://console.cloud.google.com/launcher/details/click-to-deploy-images/spinnaker)

<div style="text-align: center">
  <a href="https://spinnaker.io/"><img src="/images/post/spinnaker.png" style="margin: auto;"></a>
</div>

- Spinnaker Meetup in San Francisco [meetup.com](https://www.meetup.com/spinnaker/)
- Join the Spinnaker Channel on Slack [join.spinnaker.io](http://join.spinnaker.io/)

##### Question of the week

Could you clarify the pricing model for Google Cloud Source Repositories?

- Cloud Source Repositories [Pricing and Quota](https://cloud.google.com/source-repositories/pricing)

##### Where can you find us next?

Francesc will be running a workshop at [QCon New York](https://qconnewyork.com/) on Go tooling based on
[this video](https://www.youtube.com/watch?v=uBjoTxosSys), after that he'll be at GopherCon in Denver!

Mark is going on vacation for a few weeks - but

{{< transcript "FRANCESC: Hi. And welcome to episode number 80 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I am very well today. How are you doing, Francesc? 

FRANCESC: I am the most excellent I've ever been. I am very happy, we're going to be continuing the conversation with Christopher Sanson, product manager for Container Builder. But today, we're going to be talking about the continuation, I want to say, in the topic of CICD-- Continuous Integration, Continuous Deployment-- about Spinnaker. 

MARK: Yeah. 

FRANCESC: And we will also have Steven Kim. And he's a software engineering manager for the Spinnaker team here at Google. 

MARK: Yeah. Super, super love this talk. It really does, I think, explain the difference between CI and CD, and when you want to use one and use the other. 

FRANCESC: Yeah. And really, if you don't know what Spinnaker is at all, this is going to be a good introduction. Because I did not know what it was until the interview. So, yeah. Lots of things to learn, and we're going to start from, really, the beginning. So it's going to be fun. 

MARK: And after that, we will go into the question of the week. We touched on this last week with the Cloud Source Repositories going to general availability. But we want to talk a little bit about the free tier, just so people can understand exactly how they can take advantage of that and how that relates to pricing as well. 

FRANCESC: Yeah. I think that the wording was a little bit confusing on the announcement. So we're going to clarify what it actually means, and what is free and how much it costs when you have to pay. But before that, we're going to go with other cool things of the week. And we have a bunch of them. 

The first one is a blog post written by our dear coworker Ahmet Alp Balkan. He works here at Google. He's a software engineer in the Kubernetes Developer Relations team. And he wrote a blog post on what are the coolest features of Google Container Builder. So you can either read that blog post or listen to the previous episode, or do both. 

MARK: Well, he does cover some stuff we don't talk about in the previous episode, which is super cool, and gives you examples of GCloud commands of exactly how you can use Container Builder to do certain things, like local builds and stuff like that. 

FRANCESC: So you should do both. 

MARK: You should do both. 

FRANCESC: Yep. Then we also have a blog post. It's called "Know thy Enemy-- How to Prioritize and Communicate Risks." And it's part of the series CRE Life Lessons. CRE, as you might all know, CRE stands for Customer Reliability Engineering. 

And we had an episode on this back with Luke Stone in episode 72. So if you want to know a little bit more about that, definitely check it out. But also, this blog post is actually a very interesting one. I think you read it. 

MARK: Yeah. No, I really love this blog post. We've been talking with Luke Stone. Several episodes we've done with Paul Newson talking about SRE as well, Site Reliability Engineering. Those two are very, very related. 

The blog post is all about how they do a application reliability review. Basically, when they sit down with people they're going to support, and say, OK, where are your risks? Like, where can things go wrong? And then also, what sort of SLOs and SLAs do you want to have in place for these things? 

And so once we've identified the risk, they can provide recommendations on how to eliminate and mitigate that based on their experiences. And it goes through step-by-step. It does things like risk matrices, and then, like, expected losses. It's actually really cool. So if you're interested in starting to do SRE, or you're already doing SRE-type things in the company you work for, I would definitely give this a read. It might give you some new ideas and new approaches on how you can manage these risks, and how they relate to your SLOs and SLAs within your company. 

FRANCESC: That sounds really interesting, especially knowing that CRE, they work with very big customers. So having the, like, the guidance, this is the kind of things you should be doing to be considered to work with CRE, that's perfect. Very, very useful information. 

And then we have one last one. It's actually a personal blog post. Not a personal blog post, but a personal blog post series from our dear teammate Sherol Chen. 

MARK: Yeah. So Sherol started this series called the Eliza Effect It's not specifically all about Google Cloud, but she talks a lot about artificial intelligence and machine learning, where she's had a series of blog posts that are really, really good. So I just wanted to highlight them because they're fantastic. I particularly like the one where she talks about explaining AI to kids. 

FRANCESC: Yeah. That's the one I was looking at right now 

MARK: It's super, super cool. She's actually traveled the world teaching artificial intelligence and programming to a wide variety of students all around the world. And so it's just super cool. And she weaves pop culture references through it to explain it to children. It's really, really impressive, actually. 

FRANCESC: Not only pop references. But also, she makes a reference to "The Imitation Game," which is a movie about Alan Turing, which is a film that I really love, partly because it stars Benedict Cumberbatch. And I just like his name. 

MARK: Fair enough. Awesome. Well, I think that's probably-- I mean, there are so many cool things. But I think that's enough for today. Why don't we go chat to our friends Steven and Christopher, and talk all about Spinnaker? 

FRANCESC: Sounds good. Let's do that. 

MARK: Today I am delighted to have Christopher Sanson, product manager, and Steven Kim, software engineering manager, both of which are on the Spinnaker product for joining us today. How are you both doing? Chris? 

CHRISTOPHER: Doing great. Thanks. 

MARK: And, Steven, you're doing well? 

STEVEN: Yeah. It's been a wonderful week so far. 

MARK: Excellent. Well, thank you so much for joining us today and coming to talk to us about Spinnaker. Love to learn more about it. But before we do that, why don't we talk a little bit about who you are and what you do. Christopher, you want to go first? 

CHRISTOPHER: Great. Sure. So I'm the product manager for Spinnaker and the larger Cloud CICD experience. 

STEVEN: And I am the engineering manager for the Google Spinnaker team in the Developer Tooling section of Google. 

FRANCESC: So if I'm not completely mistaken, and my memory is not failing, you were also here for Container Builder episode last week. Isn't that right, Christopher? 

CHRISTOPHER: Yes. That is correct. I'm a product manager for Container Builder and Spinnaker, the complementary piece of our overall Cloud CI/CD experience. 

FRANCESC: Cool. So why don't we get started with Spinnaker, and you tell us a little bit, from a very high-level point of view, what is it and why people might want to use it? 

CHRISTOPHER: Sure. So Spinnaker is a open source, multi-cloud continuous delivery tool. And it's used by companies, enterprises for release management-- for deploying container images, artifacts, DEB packages, into production cloud environments. And it's used basically for development teams to deploy applications quickly, reliably, and safely. 

FRANCESC: From a historical point of view, when the Spinnaker happened, we just launched-- well, we. You just launched the 1.0 version of Spinnaker. But tell us a little bit, what are the origins of this project. 

STEVEN: Yeah. Yeah. Spinnaker, we're announcing 1.0 just now. But that really follows in the wake of a tremendous amount of concerted effort that multiple teams have put together to arrive at where we are. So Spinnaker, as a project, started inside Netflix about three years ago. And it's the way that they wanted to do their deployments internally. 

And then about two and a half years ago or so, Google joined in. And this is prior to Spinnaker being known externally at all. It's been a private project inside Netflix. And then in November of 2015, we announced open sourcing to the public. And there was a lot of good coverage around that. 

And since then, we've had a number of organizations come on and adopt it for their own deployment purposes. But we knew that there were a lot of things that needed to be done still, to really make it ready for mass adoption, and people who didn't want to have to tinker with it too much for it to be successful in their respective organizations. So that's what we've been working toward for the last year-and-a-half or so. And that's what the 1.0 is a culmination of. 

MARK: So that's really interesting. I'm curious, though, what were the problems that Spinnaker was built to solve that weren't currently covered by existing solutions in this space? Like, were there particular things that were a problem, or was there a particular aim for this project? 

STEVEN: Yeah. I mean, Spinnaker inside Netflix, for those of you who are familiar with the project named Asgard, which is also developed internally at Netflix, Spinnaker is a spiritual successor to Asgard. And what Netflix recognized internally is that they are the poster child for early adoption of public cloud with AWS. And back then, it was really bare infrastructure as a service. And there was very little tooling out there. 

So thematically, what Netflix did very successfully is build a set of canonical tools internally. And what that effectively did is it raised the infrastructure as a service to a internal platform as a service of sorts. And so the problems that they were trying to solve is to create a canonical way across Netflix by which deployments are made out to their public cloud. And what that means is taking a specific set of opinionated approaches, best practices, lessons learned, about how deployment should be done. That's something that we can talk about throughout this conversation. 

FRANCESC: Does that mean that Spinnaker is specifically done for microservice architecture, or can I use it even if I'm just deploying to virtual machines? 

STEVEN: Yeah. Spinnaker certainly has things that it, first and foremost, was built on top of. But throughout the usage across time, we have taken on additional use cases. And so today, Spinnaker supports both VM-based deployments, as well as container-based deployments. And then actually also things like App Engine and OpenStack as well. 

And although you could say that it was built on a microservices premise, it certainly goes and works with a number of different ways that you can go out and choose to use Spinnaker. So Spinnaker has, certainly, a set of opinions. And it's very prescriptive about how to do certain things, like enable infrastructure and blue/green deployments and so forth. But that doesn't stop you from using it how you want to go to use it, and decide for yourself what is the right increment across time to do so. 

FRANCESC: Nice. So this is a tool that Netflix created to help themselves making their deployments more automated while running on AWS. Why is Google involved? 

STEVEN: That's a good question. Google recognized that, for our GCP users, we wanted to go out and provide a robust tool set that follows in lines with a lot of opinions that Google actually has internally on how we do deployments. So that's something that, I think it's fair to say, we have a lot of practice at. A lot of mistakes were made, a lot of lessons learned. 

And we have a set of opinions that we follow on how software deployment should be made. That's how Netflix does 4,000 deployments a day. That's how Google does 25,000 releases a day. You don't just do that by accident. It's through a lot of lessons learned. 

So we were looking for a way to go out and do this externally. And when we ran into the Spinnaker project that Netflix was doing, we found a kindred spirit on similar types of problems, similar types of scale, and similar priorities. So we jumped in. 

And at that time, Netflix was deploying almost entirely to VMs. So AWS EC2s. So we started with adding GCE VM support with the intention that, on an ongoing basis, we would continue to pour in our best practices for our GCP users. And a simple example of that is we very quickly followed up with support for Kubernetes and App Engine, and then a whole bunch of other things that were founded based on things at Google. 

MARK: Oh nice. So you mentioned two there. You said Kubernetes, I'm assuming Container Engine, App Engine. Are there any other internal projects that this supports deployment to, or are those just the only two? 

STEVEN: Yeah, the full list is AWS EC2, GCVMs, App Engine, Kubernetes, or GKE. And that could be Kubernetes running on EC2s or GCVMs, or bare metal. It also supports Microsoft Azure, OpenStack. And there's a couple of others that are in flight right now, such as DC/OS. Mesosphere DC/OS is in flight. Oracle Cloud bare metal is also in flight right now. That's pretty much complete. That should be coming up pretty soon. And I'm sure we'll have many more to go ahead and announce as time goes forward. 

FRANCESC: Cool. So that means that, basically, anyone could be using Spinnaker. Because it's like, no matter what you're running, Spinnaker will run for you. And it's also open source. I'm going to say that, I'm assuming, at least. 

STEVEN: Yeah. It's open source, which also means two things that are important to us. One of them is that it's free. And number two is that we welcome pull requests. And so we're very much also focused on building the right community at scale, and then sustainability. 

FRANCESC: So I have a question that I ask every single time. But in what language is this written? 

STEVEN: Hey, Christopher. What language is it written in? 

CHRISTOPHER: Swahili. 

[LAUGHTER] 

MARK: And that is the best answer anyone has ever given. 

STEVEN: Spinnaker is written in Java Groovy. And actually a lot of Kotlin is beginning to make its way in. And then of course, the front end, the web components, are written by the standard JS and CSS and HTML. 

FRANCESC: Actually, my question, where it was going, was like anyone can use Spinnaker because it's open source and it's available to deploy on basically any platform. But who should be using it? 

CHRISTOPHER: Yeah. That's a great question. So I think, if you look at why Spinnaker created it and why we've seen companies like Waze and Target adopt it, the solutions out there in the continuous delivery space are not as robust as on the CI side of things. So what we're seeing people do is stitch together a bunch of Jenkins scripts to recreate, essentially, the functionality that comes out of the box with Spinnaker, like doing a blue/green deployment or a rollback. 

And it's pretty complicated to do that. You can do it with Jenkins. You could do anything with Jenkins. But it wasn't really designed for that purpose. And so people are having to build their own tools, or are coming from a configuration management background, where they're using things like Chef and Puppet to update running machines versus using an immutable infrastructure to deploy an updated fleet of servers. 

So enterprises that care about uptime, care about higher velocity releases, would benefit a lot from Spinnaker, without having to recreate the wheel themselves. Because these are fundamental requirements for their business. But not knowing about Spinnaker, a lot of people have gone to a lot of effort to do what Spinnaker does for you. 

FRANCESC: So you mentioned something that I think is quite interesting. You said this phrase, "blue/green deployment." Could you explain a little bit for our audience, what does that mean? 

CHRISTOPHER: Sure. So blue/green, or red/black as it's actually called in the Spinnaker world, is a deployment where you essentially deploy a new version of your application to another running fleet. But you keep your old one around, and you just simply move your traffic over from your old service to your new service. 

But you don't spin down the old one quite yet. You leave it around in case there's an issue, or a bug, and you can just do a rollback. Then it's simply as easy as re-diverting your traffic back to the original versus having to spin it up or redeploy it from scratch. 

STEVEN: And also, it's worth mentioning, blue/green or red/black strategy is one that we can go ahead and point to. But obviously, it's not a one-size-fits-all. So some organizations might say blue/green deployments inherently required 2X number of resources to go ahead and do deployment. That is not tenable for them. 

So we hear that loud and clear. We're working on other things, like what we're calling rolling red/black, for example, which makes better use of resource overhead. So if you're interested in hearing more about what that is, you should definitely check that out on the website to get more details. 

MARK: Christopher, you said something almost in passing there, too. And you said, basically, that's Spinnaker seems to be a tool just for enterprise. Or you just used the word "enterprise" in a sentence. I'm wondering, if I'm part of a small team, or-- when should I get started with Spinnaker is probably like the best question? 

CHRISTOPHER: Yeah, that's a good question. So I think if you are experiencing any pain around releasing your application, it might be worth looking at. I think that, since Spinnaker's open source, you do have to stand up your own instance. It's not a hosted SAS service. 

We, as part of this 1.0 launch, we're launching a new tool called Halyard, which is a CLI command line tool for installing and configuring Spinnaker. So for people that have tried Spinnaker in the past, Halyard greatly lowers the barrier for getting it up and running yourself. So I think if you are a development team that does your own DevOps using cloud services, and are comfortable in that world, that you could benefit from Spinnaker. 

I think what a lot of people move from, or start with, is this post-build script deployment. As part of their CI system, they'll do a fire-and-forget deploy post-build. They'll do kubectl apply or G Cloud app deploy, something like that. If that works for you, great. But I think at some point, most companies are looking for a more sophisticated, more stable deployment strategy. 

STEVEN: There is an inherent aspect to the question you're asking, which is, when does it become worth the overhead of operating Spinnaker for your organization to think about reaping the benefits that Spinnaker brings? And really, the limit, we hope that operationalizing, if that's a word, Spinnaker approaches a 0. Another interesting analogy to make is, for those of you who are familiar with App Engine, startup teams and small development teams loved App Engine because it was very easy to go and deploy code. And all they needed to do was concern themselves with developer concerns, which is writing features. And then App Engine, as a platform, would go in and deploy that for you. 

And if you look at App Engine, it's a runtime. But it's also a set of front end services that allow you to go and deploy code, and manage load balancers and traffic and so forth. That's what was really neat about App Engine. 

So if you imagine, as an analog, Kubernetes as a platform, it's an excellent and wonderful runtime platform. And then right now, we are doing a lot as a community, the Kubernetes community, to try to go out and make the tooling in front of that much easier. 

So imagine if Spinnaker were that front end tooling, where to the limit that setting up Spinnaker becomes a NoOps operation, then you would prefer to go into your deployments. And Kubernetes starts to look a lot more like App Engine. For example, if you simply go ahead and push code to a repository out of the box, without writing your own Jenkins scripts or whatever it might be, that it comes out of the box configured to take that code, build a container, and then go and deploy it out to a running Kubernetes cluster. 

MARK: So you actually almost raised a good point there. So if I'm using App Engine, or-- I mean, the deployment tools for Kubernetes are actually quite nice. Like, you can do rolling updates, red/greens, not so hard. Why, then, do I want to put Spinnaker in front of it? What part is that in that story that makes this very compelling? 

STEVEN: Yeah, I mean, App Engine definitely provides a lot of atomic operations to go out and do things like cutover traffic, A/B testing, and so forth. But it's a little more difficult and low level for you to go to script that. So you need to make GCloud calls to go ahead and make those updates. With Spinnaker, we have pipelines by which you can then create a repeatable, and really, a workflow for yourself that then grows with you and matures over time, that you go ahead and get feedback from and so forth. It's a benefit of automating these things. 

CHRISTOPHER: Yeah. And this is a really important point. So the way you use Spinnaker is that you create pipelines deployed into different environments that you specify. And as part of that pipeline, you define stages. 

And so those stages can be a lot of different things. They can be a manual approval. It could be a container job, a Jenkins script. 

And so it's not simply the act of deploying. But it's the verification and validation that you do as part of your deployment, or even prior to saying that, yes, this is production-ready code. So running load tests, things like that, that simply focus on just the deployment piece doesn't get you. 

STEVEN: And I'll take a part to emphasize the other side of that coin, which is the infrastructure mutating operations that Spinnaker supports are very, very special. And this is significant. So for example, if you start with Jenkins today, you're typically interacting with your Cloud platform via embedded GCloud commands inside your Jenkins jobs and stages and so forth. 

Well, Spinnaker comes out of the box, first-class cognizant of all the platform and the respective operations. And here's what that means. If you want to do, like our tagline that we talk about is to do safe deployments. And what that means is, this is a supervised safe deployment, so that when something fails in the numerous sequence of things that you have to do to the platform, to do things like blue/green deployments, that Spinnaker comes out of the box understanding the sequence of things that need to go ahead and complete, and how you need to go ahead and roll those things back. 

And what that means is, out of the box, a lot of the work that you would have to do, to really see that full realization, is done for you out of the box. And that's different for GCVMs versus the Kubernetes API versus the Azure API, for example. And that's what the benefit of supporting multiple clouds out of the box actually means. 

FRANCESC: Awesome. You started talking about steps. It made me think about Container Builder. So I'm wondering now, what is the relationship between Container Builder and Spinnaker? Are they competitors, and you have a very interesting job? Or do they work together? How does this work? 

CHRISTOPHER: They are best of friends. So Container Builder is really around your build and test workflow. What we see for containers, or if you're building a DEB package, is that Container Builder, you can set up your triggers on source. 

And so you make a change to source. You build and test your release candidate. You put it somewhere. You then do a Docker registry or an Artifactory or something like that, or GCS, S3, what have you. And then that new release candidate kicks off your Spinnaker release pipeline. 

And so, as you say, build steps, you have a certain number of processes and transformations that you want to make against your source code as you build your artifact. So running unit tests, integration tests, things like that. And then there's a different set of stages that you want your now release candidate to pass through as you deploy it. 

And so they're really two sides of the same coin. And it's the CI and CD sides. It gets a little more complicated than that, in the sense that you can trigger Spinnaker pipelines from GetEvents. 

And you can actually do a CLI-based deployment from Container Builder as a build step. I will leave that to power users to find out. But the simple story is one of trying to get a Container Builder plus a registry to Spinnaker. 

STEVEN: Cool. So just so, like, it's 100% clear, like a user would sit down and be like, all right. So I'm going to do the continuous integration. I'm going to use a product like Container Builder, or maybe Jenkins or Travis or whatever, to do my integration tests, make my build artifacts when I'm done. And then I'm going to take a Spinnaker to actually take those artifacts and deploy them into the cloud in a very safe manner. 

CHRISTOPHER: Yeah. That is a very typical workflow Spinnaker has first-class integrations with Travis CI and Jenkins, so you can kick off pipelines from those CI systems directly. And, yeah, if that's your entry point, you have this thing being built already. And now I want to deploy it. 

FRANCESC: Cool. So we're of running out of time, but I wanted to ask one last question. I'm convinced. I want to use Spinnaker. What's the next step. What do we do? 

CHRISTOPHER: Sure. Yeah. Absolutely. So spinnaker.io is the website. We encourage people to go there. 

The easiest way to get started, there is a Cloud Launcher instance. So you can use Google Cloud Launcher to spin up a Spinnaker instance on a VM. You'll also see at spinnaker.io, for people that are looking to do more production grade deployments. You can use the CLI tool I mentioned, Halyard, which inside your Google project, does some nice things. Like if you're deploying to Kubernetes or GKE and standing up your Spinnaker instance on Kubernetes, you could follow a walk-through we have for getting it set up in about 15, 20 minutes. 

STEVEN: We also have Getting Started code labs, and then short videos that you can go ahead and watch. They're, like, five minutes to help you understand what we see as a golden path flow for different kinds of deployments that we typically see out there. So we'll go ahead and definitely link those in the notes. 

MARK: Awesome. And before we wrap up, what's next? Is there stuff on the roadmap for Spinnaker that you can share with the audience? 

CHRISTOPHER: Well, we just got 1.0 out the door. So we'll see. 

MARK: We don't have much. Just everything. 

CHRISTOPHER: No, but absolutely, there's actually a lot of really exciting things coming out the door soon. 

So one of the big requests we get is for configuration-driven pipeline management. So we're working out something called declarative continuous delivery, where Spinnaker is primarily UI-driven, although there is API and JSON for managing it that way. But we're simplifying config-driven pipeline templates for sharing between teams and getting set up easier. 

Another really interesting one is automated canary analysis. So we talked about rolling red/black deployments and traffic splitting. And this, then, integrates with monitoring services-- so Stackdriver, Datadog, and Prometheus-- to evaluate your deployment. And then make automated judgments based on how it's looking around error rates and queue latency, and automatically continuing with your release or rolling it back for you, which is pretty cool. 

MARK: Awesome. Well, we are running out of time, unfortunately. I think we could talk for a while. Is there anything else that we haven't mentioned, or you want to make sure is plugged, or something special going on that didn't get mentioned during the podcast? 

CHRISTOPHER: Yeah. I think we have a couple of events on the West Coast this month. We have a meetup in San Francisco, on the 20th, that we encourage people to come to. It's a very active community, I would say. I don't think we gave enough credit to the community, as we talked about mostly the product itself. But we are very active Slack channel. 

STEVEN: It's join.spinnaker.io. 

CHRISTOPHER: There you go. But for a lot of new users, and once you go through the walkthroughs, if you have questions, the community's very active on Slack, including the Google engineering team here. And we would love to see people on there. And don't be afraid to hop on and ask us questions. 

FRANCESC: Great. Well, thank you so much, both of you, for taking the time today to tell us a little bit about Spinnaker and all the cool things that you can do with it. 

CHRISTOPHER: Great. Thank you, guys. 

STEVEN: All right, thanks very much. 

CHRISTOPHER: And I'll be here next week. 

FRANCESC: So thanks again to Steven and Christopher for such an interesting conversation. I definitely learned a lot about Spinnaker, partly because there was a lot that I didn't know. But very interesting conversation. And I'm going to see where we can use it. We said Container Builder is something that we're going to be using for sure with the podcast. Maybe Spinnaker's the next step. Who knows? 

MARK: Who knows? Cool. So we've got our question of the week. We mentioned this last week about Cloud Source Repositories going to general availability. But the documentation is a little confusing. We won't shy away from that. 

So basically, it says Cloud Service Repositories is free for up to five project users per billing account. And then when you actually dig into the pricing on that as well, it says once you go over five project users, it's $1 per project user over 5 project users per month. And I was like, what is a project user? 

FRANCESC: Yeah. It is pretty confusing, especially because, like, what does it mean to "access?" Does it mean that I have access that I do access it? So what we did was simply go and ask. 

So we asked our dear friend Chris Sells. He's a product manager here at Google Cloud Platform. And we've had them at the podcast twice. We have him on episode number 5 a long time ago on developer experience. 

And then again, we had him for episode 49 with Windows and .NET. So we asked him. And his answer was basically saying, the important thing to know is it is not about the potential of accessing a project that counts. It's actually accessing the product. 

MARK: OK. So if I'm working on something, and I go and I pull something out of GitHub, that's me accessing it. 

FRANCESC: Well, not GitHub, but the Git repo-- 

MARK: The GitHub repository on the source repository. 

FRANCESC: Yeah. And this is reset per month, which means that, for instance, let's say there's two ways I could see it. I'm the only person and I'm working on four different projects this month. And then next month, I'm working four completely different projects. That is four projects a month, and four projects the other. 

So everything is free. It doesn't count as eight because I access eight projects in total. And the same way, if you have, let's say, one single project, but you have four people, and you have four people, one month. And then the month after that is four completely different people-- 

MARK: That's still four people. 

FRANCESC: That's still four people. And four people is not eight people at any point. Therefore, you didn't pay for anything. 

MARK: Cool. Let's talk a bit about a project user as well just very quickly, so that's understood as well. So that's the combination, or the unique combination, of a project and a user. So if I, personally, one person, use one project, that's one project user. 

If I go off and use two projects, that's two project users. If Francesc and I both use two projects, that's four project users. Because it's the unique combination of those two things. 

FRANCESC: Indeed, it is. We actually count, did you actually access it or not? It's not about, like, the potential access through IAM or whatever. No, it's did you actually access it or not? 

MARK: I believe this stuff is going to get updated, so it will become clearer. But for now-- 

FRANCESC: We complained a little bit. We told our dear product managers that the communication in the answers was not as clear as it should. So hopefully, by the time you are listening to this episode, it had been fixed already. 

MARK: All right, Francesc. I believe, at the moment, you're in Buenos Aires. 

FRANCESC: No. 

MARK: I got that wrong. 

FRANCESC: I just came back. That was last week. I am now back, and yesterday was my birthday. Yay. 

MARK: Happy birthday. 

FRANCESC: Thank you 

MARK: Everyone send pictures of puppies to Francesc. 

FRANCESC: Yes, please. I love puppies. And actually, my next trip, I'm going to be in New York for QCon. Yeah, I'm going to be running a workshop on Go Tooling in Action. 

I made a video a long time ago. We should have a link to this video in the show notes. It was pretty super successful because it teaches you how to use performance profiling and debugging and stuff like that. 

MARK: Very cool. 

FRANCESC: And I'm making that a workshop. And I'll be running it at QCon. And I'll also try to probably go see if I can organize something with the GDT or the Go Meetup or something. If you are in New York and you'd like to organize some event related to Go and Google Cloud, let me know. Send me an email. 

MARK: Sounds good. 

FRANCESC: What about you? You still on holidays? 

MARK: I'm still on holidays right now. 

FRANCESC: Oh my god. 

MARK: I know. It's great. So good. But excited to be back, when I get back. 

Got some secret projects working on. I have a few more blog posts that I'm working on in my series about Kubernetes, and game servers as well. So keep an eye out for that as well. 

FRANCESC: Awesome. And I'm thinking that, by the time this episode comes out, I should have been able to release the next [INAUDIBLE] episode. 

MARK: I hope so. 

FRANCESC: But that is in the future. So I'm really hoping here. I mean, it'd be, like, seven days late. So probably. 

MARK: Probably, yes. Awesome. Well, friends, let's thank you once again for joining me on the podcast for another episode. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}