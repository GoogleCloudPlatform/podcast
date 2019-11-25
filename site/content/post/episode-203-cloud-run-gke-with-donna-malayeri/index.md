+++
audioDuration = "00:32:13"
audioFile = "Google.Cloud.Platform.Podcast.Episode.203.mp3"
audioSize = 46787975
categories = ["Cloud Run", "Anthos", "Kubernetes", "Knative"]
date = "2019-11-13"
description = "Jon and Aja host our guest Donna Malayeri this week to learn all about Cloud Run GKE!"
draft = false
episodeNumber = 203
hosts = ["Aja Hammerly", "Jon Foust"]
title = "Cloud Run GKE with Donna Malayeri"
image="/post/episode-203-cloud-run-gke-with-donna-malayeri/images/hero/hero-EP-203.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dvzlkj/episode_203_cloud_run_gke_with_donna_malayeri/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon](https://twitter.com/syntxerror1) and [Aja](https://twitter.com/the_thagomizer) host our guest [Donna Malayeri](https://twitter.com/lindydonna) this week to learn all about Cloud Run and Anthos! Designed to provide serverless containers, Cloud Run has two versions: fully managed and Cloud Run for Anthos. 

Donna's passion for serverless projects and containers shows as we discuss how these options benefit developers and customers. With containers, developers are able to go serverless without a lot of the typical restrictions, and because they are a standard format, containers are fairly easy to learn to use. Tools such as Ko can even do the work of generating docker containers for you. One of Cloud Run's most unique features is that it allows developers to bring existing applications. You don't have to rewrite your entire app to make it serverless! Developers can also reuse instances, making the process more efficient and cost effective. 

Cloud Run for Anthos allows projects to stay on-prem while still enjoying the benefits of containers and the Cloud Run platform.

Later in the show, Donna tells us about Knative, which is the API Cloud Run is based on that helps create portability between Cloud Run versions, as well as portability to other vendors. We also get to hear the weirdest things she's seen put in a container and run in Cloud Run!

<!--more-->

##### Donna Malayeri

[Donna Malayeri](https://twitter.com/lindydonna) is a product manager for Cloud Run for Anthos. She's worked in the serverless space since 2016 and is bullish on the future of serverless. Prior to joining Google, she was the first product manager at the Seattle startup, Pulumi. She was also a product manager on the Azure Functions team at Microsoft, guiding the developer experience from its beta through the first year of general availability. Donna is passionate about creating products that developers love and has worked on programming languages such as F# and Scala.

##### Cool things of the week

* Bringing Google AutoML to 3.5 million data scientists on Kaggle [blog](https://cloud.google.com/blog/products/ai-machine-learning/bringing-google-automl-to-3-million-data-scientists-on-kaggle)
* GCP Podcast has a website on dev [site](https://dev.to/gcppodcast)
* Command and control now easier in BigQuery with scripting and stored procedures [bog](https://cloud.google.com/blog/products/data-analytics/command-and-control-now-easier-in-bigquery-with-scripting-and-stored-procedures)
* Skaffold now GA [blog](https://cloud.google.com/blog/products/application-development/kubernetes-development-simplified-skaffold-is-now-ga)

##### Interview

* Cloud Run [site](https://cloud.google.com/run/)
* Cloud Run for Anthos [site](https://cloud.google.com/run/docs/gke/setup)
* Anthos [site](https://cloud.google.com/anthos/)
* Ko [site](https://github.com/google/ko)
* Buildpacks [site](https://buildpacks.io)
* Google Cloud Functions [site](https://cloud.google.com/functions/)
* Kubernetes [site](https://kubernetes.io)
* Knative [site](https://cloud.google.com/knative/)
* Serverless: An ops experience of a programming model? [video](https://acloud.guru/series/serverlessconf-nyc-2019/view/ops-experience)

##### Question of the week

How do I write a Matchmaking function in OpenMatch?

* [OpenMatch 0.8RC](https://github.com/googleforgames/open-match/releases/tag/v0.8.0-rc.1)
* [OpenMatch Slack](https://open-match.slack.com/)
* [OpenMatch Twitter](https://twitter.com/Open_Match)
* [Jon’s Twitter](https://twitter.com/syntxerror1)
     
##### Where can you find us next?

Donna will be at [Google Cloud Next in London](https://cloud.withgoogle.com/next/uk).

Aja will also be attending [Google Cloud Next in London](https://cloud.withgoogle.com/next/uk).

Jon will be at [AnimeNYC](http://animenyc.com), [Kubecon](https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/) in November and Google Kirkland for an internal hackweek.

##### Sound Effect Attribution

* "Small Group Laugh 4, 5 & 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Anime Cat Girl" by KurireeVA of [Freesound.org](https://Freesound.org)
* "Anime Sword Hit" by Syna-Max of [Freesound.org](https://Freesound.org)
* "Wedding Bells" by Maurice_J_K of [Freesound.org](https://Freesound.org)
* "Big Dinosaur Whirrs" by RobinHood76 of [Freesound.org](https://Freesound.org)
* "Cat Purring & Meow" by SkyMary of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to episode 203 of the weekly Google Cloud Platform Podcast. I am Jon Foust, and I'm here with my colleague, Aja. Hey, Aja, how's it going?" >}} 

AJA: Pretty good. How are you doing, Jon? 

JON: Pretty good. The weather's turning a little cold here in New York. So I am currently bundled up in a very thick sweater and a wool cap. 

AJA: I have to admit, I'm a little jealous. It is not quite cold enough here. 

[LAUGHTER] 

So what are you talking about this week, Jon? 

JON: This week, we're going to be talking to Donna Malayeri about Cloud Run for Anthos. Donna's very, very passionate about Cloud Run, and it's going to be very interesting to hear all the cool things that we can do with Cloud Run, as well as the differences between Cloud Run for GKE, Anthos, and that's it. Yeah. 

AJA: Yeah. And I think, looking at our notes here, that you're going to have a question about Open Match, which is the project that you've been diving into the last couple weeks. 

JON: Yeah, that question of the week is going to be pretty much about how to write a matchmaking function in Open Match. And that's going to be very helpful because we've just improved the developer experience for Open Match. So we're really hoping that people will take a deep dive and have some fun with it. 

AJA: Cool. But first, my favorite part-- cool thing of the week. 

[MUSIC PLAYING] 

What's your first cool thing, Jon? 

JON: AutoML has been brought to Kaggle, which is great. And they've hit a milestone at 3.5 million data scientists using and learning about AutoML. So if you don't know what Kaggle is, it's an online community for data scientists and machine learners. And you get to look at data sets, and you can publish your own. And it also is a learning platform. So if you're very interested in learning about any type of machine learning concepts or anything, and if you want to just play with some data sets, take a good look and add to those numbers. 

AJA: That sounds so cool. I love Kaggle and all the cool data sets they have and how they make machine learning and data science slightly more approachable, because it's kind of terrifying if it's not your background. 

JON: Right. 

AJA: My first cool thing is-- I have two cool things. My first cool thing of the week is I was dorking around this morning looking at blogs and trying to figure out what things on my task list had fallen off the bottom. And I remembered, the GCP Podcast actually has a page on the website, dev.to. The link is going to be in the show notes, but it's dev.to/gcppodcast. 

That particular web site content aggregator, whatever you want to call it, has a special type for podcast episodes. And I have set that up, and I had forgotten that I had done that. So it's there, it's super cool. If you prefer that platform, you can come leave us comments and such there. 

JON: That's awesome. And to wrap up my cool things of the week, scripting and store procedures have finally gone beta in BigQuery. So it's just awesome because if you're used to writing really complex tasks in BigQuery, with scripting you can have a little bit more control flow and execution flow with the use of if statements, while statements, and even variables. 

So you can store these scripts as procedures, which would be kind of great. So if you want a little bit more control and a little bit more ease, get that look. 

AJA: Awesome. And my last cool thing of the week-- my second cool thing of the week-- is Skaffold is now GA. I caught that on the Cloud Platform blog. And Skaffold is this awesome tool that folks are using to help simplify working with Kubernetes, because Kubernetes has a lot of moving parts. It helps simplify containerization, and yay, it's GA. I am so excited. 

I don't like using beta products, I like using GA products. 

[LAUGHTER] 

So I'm super happy it's now GA. 

JON: That's awesome. Let's go into our interview with Donna and see what she has to say about Cloud Run for Anthos. 

[MUSIC PLAYING] 

Hi, and on this episode of the podcast, we're joined by Donna Malayeri, a fellow Googler who currently works on GKE and Cloud Run. So Donna, can you tell us a little bit about yourself and what you do? 

DONNA: Yeah. I'm the product manager for Cloud Run for Anthos, and I'm here to talk about Cloud Run. I've worked in the service space for a few years, I worked at the Seattle startup, Pulumi, which builds tools for deploying modern cloud applications. I worked on Azure functions, I used to do a lot of stuff in programming languages. So I've been in the developer tool space for a while. 

JON: Awesome. So you mentioned that you worked on Cloud Run and Anthos. Can you tell us a little bit about that? 

DONNA: So Cloud Run is a really interesting product because it offers serverless containers. And it comes in two flavors. There's a fully managed version, which is the one that's suitable for most users. And essentially, you run on Google's compute. So Google becomes your operations manager, essentially. 

There's also a version called Cloud Run for Anthos, if you already have a Kubernetes cluster and you want to take on more of those operations responsibilities. So really, Colburn is a really unique product in that it offers two different ways to run the product depending on what your needs are-- depending on whether or not you want to take over operational responsibilities or if you want to hand those over to Google. And if you provide any stateless container, you can run it on either platform. 

JON: Can you tell us why Cloud Run is so important? And I know that you mentioned there the two different flavors of it. Can you tell us a little bit of why Cloud Run is so important to developers and a lot of enterprise customers? 

DONNA: Yeah, of course. So one of the pieces of feedback we got with Google Cloud Functions was that people wanted to do serverless, but they wanted it without the restrictions of the environment. So typically with serverless products-- Cloud Functions, Lambda, that kind of thing-- you have limitations on what runtimes are supported, because it's essentially providing a wrapper around your code, and you provide just your function execution. 

So there are specific languages that are in use. You usually can't install anything in your environment. If you want dependencies, you have to do a lot of extra work, especially if they're native dependencies. 

So what we decided was, hey, how do we make more things serverless? How do we make it if you have an existing app such as one that does server-side rendering like Python Flask or ASP.NET-- how can you bring that to a serverless environment and really not have to rewrite your code entirely, use the same exact tools that you're used to? So that's why we based our product on containers, standard OCI containers. And you can-- essentially, you provide stateless, because you can't depend on state in between implications. 

The other thing that's unique about the product is that it will reactivate existing instances. So unlike "functions as a service" products where you can only have one instance per execution, here you can set a concurrency setting. So it can be one, which would match the behavior on our "functions as a service" platform. Or you can set it to something like 80, which means that you get to reuse those instances, similar to how you would have a traditional application. So it allows you to be more efficient with your compute resources. 

So you mentioned containers. Do I have to be an expert in containers to use this tool? No, which is great. I can tell you, I literally spent an hour debugging an issue in my Dockerfile once, and I personally find it kind of challenging to use Dockerfiles, especially coming from a serverless environment. 

Now the cool thing is because OCI containers are a standard format, there's a lot of tools that will generate a Docker container for you. So there's Jib for Java, there's ko for Go, and then there's also the CNCF Buildpacks project, which is done by Pivotal and Heroku. So essentially, you get the really nice experience that you get on a platform like Heroku where it looks at your code, figures out what language you're using, and it builds a container for you. And when you use a buildpack, that's exactly the experience you get. So you don't even have to author a Dockerfile if you're not interested in doing that. 

AJA: Hmm. OK, that sounds much, much more approachable than I was imagining. So Cloud Run is based on containers rather than functions. And the "functions as a service" model that Google Cloud Functions and AWS Lambda use-- can we still count it as serverless? 

DONNA: Yeah, that's a really good question, because when Lambda came out-- that was the first serverless product. And people started associating "functions as a service" with serverless. In fact, people said serverless was only compute. And it has to be-- you provide a snippet of code. And if you do anything else, then it's not serverless. 

The thing is that in the community, the definition of serverless has evolved. So people talk about serverless databases, people will talk about something called service-full computing, where you're using more and more managed services rather than running things yourself, like if you use a machine learning service rather than training your own model or running a machine learning workload on a VM. 

So essentially, one way to think about it when you're running a container is that you've taken on a little bit more responsibility. You are essentially deciding what OS packages you want, what base image you want, and what runtime you want to use. So that means that you have to keep your Dockerfile or whatever you're using up to date. So if there is a security issue in your language runtime, you are taking on that responsibility. 

So there's not necessarily an option that's the best for everyone, it's really a matter of trade-offs If you need to install custom packages, if you have an existing app that really doesn't work in a "functions as a service" environment, then something like Cloud Run is a really good fit. If you want to provide just the snippets of code and have more of a managed experience, then you can use a product like Google Cloud Functions. 

The other thing is that you can actually mix and match. So we've put out a open source JavaScript functions framework. And essentially, what that does is it gives you that same experience that you have on Google Cloud Functions, except you can run it in a container now. So you don't have to choose upfront which version you want to use-- if you want to have a functions experience or a container experience. 

JON: Awesome. You mentioned there are sometimes several trade-offs to using it. I'm curious, what are the pros, the best feature set that you can probably give us about Cloud Run? 

DONNA: So the thing that's really unique is the fact that you can bring existing applications. There is no other product that offers that in a serverless model. There's obviously a lot of products who are running it in a server-full way. But if you want to run serverless, you typically have to re-architect your application. 

The other thing that's really unique is the fact that you can reuse instances, like I was mentioning. So that means that you have, essentially, a very similar execution environment with the efficiency that you have with traditional compute, except you don't have to manage the scale out yourself. You don't have to pay for instances when they're not in use, and you can scale to zero. So really, you should think of it as bringing all the benefits of containers and the flexibility that containers provide, and the tooling-- the open tooling that there is for containers-- along with the benefits of serverless. 

JON: Gotcha. So for any developer that's just getting started or considering using Cloud Run, how do you decide whether to use to fully managed Cloud Run versus the one that just runs on GKE? 

DONNA: That's a great question. So typically, what we found with customers is that as soon as we describe the two products, they know immediately which product they want to use. Most customers, as I said, want to use the fully managed product, because they don't want to have the overhead of managing a Kubernetes cluster even if they have the expertise. And if Cloud Run fully managed meets your needs, then definitely use that product. 

Now there are a lot of customers, especially large enterprises, who have decided to standardize on Kubernetes, or they have on-prem installations on Kubernetes that they want to move to the cloud. And for these customers, it's a lot more effective to reuse their existing cluster and their existing tools. And what these customers are looking for is an easier developer experience so that you don't have to be a Kubernetes expert as a developer in order to deploy applications. 

And typically with these Kubernetes clusters, since you have to pre-provision your capacity, you end up having spare compute that's not used. So serverless is a great fit for these applications because it allows you to scale out as your workload gets more traffic and then scale back down. So really, it's a more efficient use of your existing Kubernetes cluster. 

One scenario, for instance, that's really resonated with some customers is disaster recovery, where they have a workload that's running, say, in a existing Kubernetes cluster. It's taking up some amount of capacity, but if that fails, they want to failover to another cluster. And maybe the cluster starts out with a very small size, and then they scale up. But essentially, you can minimize the amount of downtime you have, and it minimizes the amount of spend that you have to use for some compute capacity that you may never need. 

JON: Just as a follow up, I know you mentioned that most of your customers seem to want to shift from being on-prem to fully managed, but what about those that want to stay on-prem? Is Cloud Run a tool that they can still use? 

DONNA: Yes, so Anthos gives you a lot of those capabilities. So there's a few flavors of Anthos. Anthos is Google's app modernization platform. It's not one product, it's a suite of products. And the idea is that it's typically geared towards enterprises. But as an enterprise, you have existing investments, and you want to see how to leverage those investments. 

So if you're running on-premise on VMware, we have a version of Cloud Run that runs there. So it's a very similar experience to what you would get on GKE on Kubernetes, but you get to run it on your own hardware. 

So we basically have a few levels. We have the fully managed version, where you're running on Google's internal compute. It actually runs on Google Borg, if you've heard of that. And Google is basically your ops team. We're obviously going to make some assumptions on how you want your platform to run. If those assumptions don't make sense for you, then you can run on Kubernetes and take on more responsibility. But you still have a more managed experience where you don't have to think about the actual hardware and then the apps. 

Now if that doesn't work for you either and you already have a data center on-prem or somewhere else, and you want to use that existing investment, then you can use Cloud Run for Anthos deployed on VMware. So it's really up to you which one you want to use, and the API between all of these versions is identical. So if you change your mind, you're using the fully managed Cloud Run, for instance, and then your company says, hey, please just put that all on the Kubernetes cluster-- or using the fully managed for your dev mode, you can easily move across environments without rewriting any code. And your config, actually, mostly will stay the same. 

AJA: So when we talk about all the Cloud Run and serverless stuff, Knative comes up. Can you talk a little bit about Knative and its relationship to Cloud Run? 

DONNA: Yes. So Knative is the API that Cloud Run is based on. On the fully managed version of Cloud Run, we don't actually run a Kubernetes cluster, but we do have a Kubernetes API server. So the API that you use to deploy your application, regardless of whether you're using the fully managed Cloud Run or the version that runs on GKE, is the Knative API. And that's why we have this portability between our platforms, and even portability to other vendors. 

So at Google Cloud Next in April, in San Francisco, we had a demo in the keynote, where we deployed an application on the fully managed version, then the same application on GKE. And then we deployed that, as well, on IBM's Knative offering. So because it's all based on Knative, it's portable. And the version of the service that we run on GKE is essentially the OSS version with some additional GKE-specific features added on top. 

You can move to other vendors, and you can even change your mind and say, hey, I don't want to even deal with Google's installation. I want to do everything myself, I want to just rock Knative. You can do that as well. 

AJA: So Knative has the interaction contract that folks can rely on when using the various Cloud Run products. 

DONNA: Exactly. 

AJA: Awesome. So I know there has been some Twitter discussions and changes in [INAUDIBLE] Knative governments. Can you tell us a little more about what's going on and maybe why some of the decisions that were made were made? 

DONNA: Yes, of course. So when we started the Knative project, Google was the main contributor. We were coming up with all of the ideas, starting all the working groups. Google was running every single working group. And then as the product took off, it was pretty amazing. We started getting more partners. We got SAP, Red Hat, Pivotal, IBM, and all these companies were really eager to contribute. 

And so we widened the steering committee to include Pivotal, Red Hat, and IBM. And the feedback that we heard from both our partners on the steering committee, as well as the community at large, was, hey, Google isn't the only contributor anymore. Now Google is 60% of the contribution. Why don't we look at this again? Why don't we broaden this space? 

So what we've announced recently with very positive reaction from the community is that we're going to move to a model where based on our vendor contributions and participation-- which doesn't have to just include code contributions, it could be other contributions like design documents, running a working group-- we want to give people seats based on that. And our goal is to make it so that Google doesn't have 60% of ownership anymore, it's not the 60% contribution-- where we have more and more vendors, more and more people taking leadership positions, and ending up with more diversity in Knative-- which really helps everybody in the community, both our partners who are building products, folks who are contributing to Knative, or just directly using Knative. 

So for Kubernetes, for instance, I've heard that Google contributes about 25% now. And of course when it started, it was 100% Google. So we'd like to get to a model like that where we have a very open model with the community. 

And now the announcement that we made for the steering committee is really just the start. Some people were like, hey, this is really big. It was actually by design to be big, because we didn't want to make decisions on behalf of the entire community. So today, for instance, we hosted an Ask Me Anything for the steering committee, where people could just ask questions and talk about what was important to them for governance. 

So we plan to do this in the open and talk about, what's the algorithm for deciding seats? How do we say when people can be appointed to the technical oversight committee? Let's firm up the requirements for being a working group lead and recognize non-code contributions. 

So the goal here is to be very open and to work together as a community. Our goal is not to have this be a Google-controlled project. If that were the case, it would have been a lot easier to just open source this and throw it over the wall, versus what we intended to do, which is to build an open and vibrant community. 

JON: This community has grown quite large, it seems like. And it's safe to say that serverless is no longer just a fad. So can you tell us if serverless is going to be the future of cloud computing? 

DONNA: So this is a great question. My view is that serverless is the future of cloud computing. It's going to take a lot of time for people to move legacy workloads. My view is also that in five or 10 years when serverless does become more dominant, we'll actually see different products. We'll start seeing products where you can run stateful containers, where you can have more aspects of your application work in a serverless manner. 

Now the thing that turns some people off when they see a platform like "functions as a service" is they're like, hey, this isn't flexible enough for me. I have existing investments, and a lot of these platforms are geared towards 100% new development. And this is a fair point. And I think that's where technologies like Cloud Run help, and especially Cloud Run for Anthos that runs on Kubernetes, because this means that you have existing applications. You can leverage those investments. 

So I think that in the next five to 10 years, serverless will become the dominant matter. It will be the default way of developing applications, and more and more applications will start taking dependency. We'll have better ideas of how to deal with existing applications and modernizing them and really getting the benefits of the cloud. 

When the cloud came out, it was funny because there all this marketing message, and the technology didn't really catch up. There was this idea of, ah, infinite compute-- you just write your application, it scales out in all these machines. The vendor does everything for you. And of course, what they gave us was, essentially, virtualization over hardware, right. In the very beginning, it was the IT team's job that got easier, not the application developer. 

And it's taken a long time, but I think we're getting to the point where now application developers are really able to leverage what the cloud provides, and to the point where they're deploying cloud applications themselves. And we're seeing new tools come up like service framework, Pulumi, that make it a lot easier for application developers to now take on some operations responsibilities. 

AJA: So this is an entirely silly question, Donna, but this morning, a bunch of us were sitting around talking about the weirdest thing that we've put in a cloud container for Cloud Run. Someone was talking about Haskell, someone was talking about COBOL. So what's the weirdest thing you've seen someone put in a container and then run on Cloud Run? 

DONNA: So a couple of ones-- one that was really funny and I just didn't expect it would actually work was, people took LibreOffice, which is, like, a fork of OpenOffice-- 

[LAUGHTER] 

--which is, like, a 16-year-old binary, right? 

AJA: Yeah. 

DONNA: It's still being actively developed. But some of that code in there is pretty old. And at Cloud Next when we announced Cloud Run, we were like, hey, we're telling you you can take existing applications and run them on Cloud Run. Let's prove it. And the container is huge. It's over one gigabyte, has all these dependencies, all these fonts. And you can take that application. 

So we had a PDF converter. The other one that was interesting was my co-worker's really, really into functional languages. So he had an app-- this is Mike Helmick. He did a demo at Google Cloud Next where he wrote an app into Elixir, which I haven't even heard of, which is a functional language similar to Erlang. And he wrote a Hangouts Chat integration using that. 

So that really speaks to the power of using containers. Yeah, you can run COBOL. Good luck trying to read COBOL on a "functions as a service" platform. It's not going to be fun. And of course, you are using COBOL, so that's not fun. But if you have these existing applications, and maybe you don't want to touch them because nobody understands how they work anymore-- this is very common-- you don't have to rewrite your entire app to make it serverless. And that's really the power of what we've offered, and that's why it's really exciting to see the uptick. 

AJA: So what I'm taking from this is Cloud Run-- not just for Greenfield projects. 

DONNA: Yes. 

AJA: This is a totally valid solution for getting some of that nasty legacy code that you have in the cloud running in a scalable way so you're not paying extra when it's not in use and all that. Super cool. 

DONNA: Exactly. And sometimes, serverless folks in the community keep talking about rewriting apps. And that kind of frustrates me, because you have an existing app and it's not broken. Why would you spend your energy rewriting that rather than doing something that's going to move your business forward? Because your customers aren't paying you for your beautiful cloud architecture, right? They're paying you for, what are you concretely providing? 

And when Amazon launched their code, it's this terrible mess of Perl scripts, right. Of course, they improved that over the years. But customers didn't care if it was Perl scripts. 

AJA: Yeah, I like the phrase, I don't care what the gnomes in my computer are doing as long as they return the right answer consistently. 

[LAUGHTER] 

DONNA: Exactly. 

AJA: Yeah. 

JON: So you mentioned briefly before that IT is just going to get so much easier. Does that mean that we will see IT professionals and departments starting to wear new hats or less of a need to hire IT professionals for applications that scale automatically? 

DONNA: So what I think is that IT is still super important. What I've seen among working with developers who are adopting serverless applications is that they are often very operationally naive. They have always historically worked in a model where they're writing their app and they're throwing it over the wall, and there's some ops team that is actually deploying it. So application developers are kind of in the dark about best practices that ops teams have built for years and years. And they've learned through trial and error what works best and what doesn't. 

So in my discussions with folks in the DevOps community and folks who are traditionally coming from an ops background, is that most of them-- the ones who are interested in up-leveling their skills-- are really excited about this change, because now with the cloud becoming more of the forefront, ops is becoming more and more important. And it's becoming more democratized in that regular developers are learning how to do operations, and they're learning what it's like to be on-call. 

When I worked at Pulumi-- developers are writing deployments in a repeatable manner. And they aren't just clicking around on on a console and creating services that they can't reproduce and they can't redeploy, where you actually have a format that you can redeploy. What we discovered was that made it so that a lot of folks-- they didn't need a dedicated person to do ops. 

Now of course, as you get bigger, you need some ops folks. But what's happening is that developers are now learning, and so now you have this nice collaborative environment between the dev and the ops folks. You no longer have this model where people are throwing things over the wall, where they're clueless about how something will work in production where there's friction between these two departments, and the ops folks are annoyed at the developers for destabilizing the system, the devs are pissed off at the ops folks for not letting them deploy fast enough. And now we're getting into a model where you're working together, you're thinking as a developer what this means and what an outage means. You're thinking about SRE skills, or you're working more closely with your SREs. 

So what I'm saying is that for organizations that are really eager to learn what the cloud can offer, there's actually a really, really great organizational transformation that's happening. 

JON: I did a really quick Google search while you were answering that question because I haven't looked at job postings in a really long time, and I was curious to see if there's going to be positions for ops engineers. And I searched ops just as a general term, and sure enough, serverless came up. And then eventually, those postings started switching to serverless engineers. So I guess to kind of answer my own question as well-- 

[LAUGHTER] 

--I did see now there's going to be more of a shift towards hiring serverless professionals, as well as those who still work in ops. 

DONNA: Yes. And in fact, that's a really good point, because one of the first uses for AWS Lambda, and still to this day, was for operations tasks. So it was things like, a virtual machine has started up in this AWS account, does it have the right permission? Does it have firewalls set up? And if not, tear down that machine immediately. So those were the kinds of automation tasks that were very, very popular with AWS Lambda. 

And I personally talked to some ops folks who were like, I didn't know how to use Python. I only wrote some batch scripts, but this has been such a useful way to automate my job. So tools like Lambda and serverless aren't just for developers, they're for everybody. 

AJA: Yeah. One of the talks I gave this summer was about how-- don't be afraid of the serverless. And it lets ops folks focus on the hard and the interesting problems and make some of the tedium and boredom-- which our SRE team here at Google calls toil-- go away. And I think that is so cool and so powerful. 

DONNA: Absolutely. 

AJA: So I think we're running a little short on time. Is there anything that we missed or that you want to mention? 

DONNA: If the term serverless is scary to you, or if you feel like it's too hard of a cliff and you want to stay in the safety of your existing applications, you don't need to be worried. Don't be scared by folks who are doing really weird things with AWS Lambda and are the cutting edge, because you're always going to see people doing the cutting edge stuff. I think serverless has a lot to offer existing applications, and you don't need to rewrite your code to leverage these benefits. 

AJA: So is there anywhere you're going to be if people who listen to the podcast want to see you out in the community? 

DONNA: Yes, so I'll be speaking at Google Cloud Next in London. And I was also-- I did a keynote and a talk at Serverlessconf in New York City. And those videos will be available soon, so I recommend checking those out as well as some of the other speakers. There were some really interesting talks there. 

AJA: And if folks want to find you online, are you on Twitter, or is there a good place for them to look you up? 

DONNA: Yes. I'm on Twitter @lindydonna, and I post about all kinds of things, including cat photos. 

AJA: Ooh. [INAUDIBLE] 

[CAT MEOWS] 

JON: Well, that's going to wrap it up for this episode of the podcast. Donna, thank you for joining us. It's been an absolute pleasure-- Aja as well. And we really hope to hear of all the great things that serverless is going to be doing in the near future. 

DONNA: Thank you. 

AJA: That was so cool. Donna clarified a whole bunch of stuff that I hadn't quite sorted out for myself, so I'm really glad we got to talk to her. And her passion for that area is so infectious. But now it is time for a question of the week. 

[MUSIC PLAYING] 

So Jon, I know you've been digging into Open Match, the open source matchmaking for games project that a bunch of folks are working on right now. Can you tell me a little bit about where I could learn how to write a matchmaking function for Open Match? 

JON: Yeah, sure. So as of today or yesterday, the 0.8 release candidate has been released. So on that release candidate, you will see a lot of notes and getting started guides on creating a matchmaking function, setting up the director which will allow you to connect your players to servers, and as well as messing around with you front end. So the release candidate has a lot of getting started guides. 

So to answer your question specifically about how to write a matchmaking function, what you're going to do is-- we have a small template on what a matchmaking function looks like. You have to follow a ticket, and then you pretty much submit a proposal. And then once your proposal is accepted, you're returned a match. And when you get returned that match, then the director will connect you to your server. 

And after you've written this function using the template-- or maybe if you want to play around with it, you can alter it as you like-- you are going to build a matchmake image. And then when you push that image, then everything is easy peasy after that. You're going to push it to your configured registry that you have associated with your Open Match image as well. 

So hopefully, that's not too overwhelming, and hopefully, our guides get you started. And hopefully, you have some fun with it. 

AJA: And if folks are running into trouble, is there a way that they can give you all feedback on that? 

JON: So you can reach out to the Open Match Twitter. We take a lot of questions there. You can ping me directly, syntaxerror1-- 

[LAUGHTER] 

--on Twitter. And you can also join our Open Match community if you'd like, I will post a link to our Slack. And we're always looking forward to having new members, new contributors, or just people with general feedback. 

AJA: That is so cool, Jon. So are you going to be anywhere any time soon? I think everyone's doing a bit of travel coming up. 

JON: Yeah, I have a bunch of travel coming up. I'm going to be at Anime NYC. 

[SWORDS CLANKING] 

It's going to be pretty fun. 

[ANIME GIRL SAYING, YEAH!] 

Afterwards, I'm going to a wedding in Maryland. 

[CHURCH BELLS] 

All my friends and family decided to get married this year-- so a whole bunch of weddings, a whole bunch of suits, and a lot of ties. And after that, I'll be going to KubeCon, which should be really fun. We'll be running the Agones and Open Match workshop. 

[COMPUTERIZED VOICE SAYING, NICE, NOW YOU'RE TALKING.] 

And that will be from the 18th until the 22nd, I believe, in San Diego. And to round things up for my year, I'll probably be messing around and traveling to Kirkland to meet with the eng team for Open Match. 

AJA: Wow, that's a lot of travel. 

[LAUGHTER] 

So while you're at KubeCon, I'm actually going to be at GCP Next London talking about Cloud Run. I'm going to be moderating a panel in the dev zone and also just hanging out with staff and booth, checking out people. I'll have stickers. If you like dinosaur stickers, come find me. I'll give you a dinosaur sticker. 

[DINOSAUR GROWLING] 

And that is November 20 and the 21st at the ExCel Center in London. After that, I am unclear. I thought I had plans, and then they got confused. So I will-- 

[LAUGHTER] 

--let everyone know on my next episode of the podcast where I'll be after that. 

JON: That's awesome. I wish I could go to Next London. I do enjoy going to London quite a bit, and I have some really good friends that are GDEs that are probably attending as well. So I'm very jealous. 

AJA: It should be a good time. So I think that's all we've got for this week. Thanks, y'all, for listening. 

JON: I just want to thank our listeners for tuning in another week, and we'll look forward to seeing you next week. 

[MUSIC PLAYING]