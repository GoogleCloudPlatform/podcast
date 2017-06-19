+++
audioDuration = "00:34:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.79.mp3"
audioSize = 49240816
categories = ["Container Builder", "Continuous Integration"]
date = "2017-05-31T01:07:49Z"
description = "In this episode Mark and Francesc enter the land of Continuous Integration, chatting with David Bendory and Christopher Sanson all about Container Builder"
draft = false
episodeNumber = 79
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Container Builder with Christopher Sanson and David Bendory"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/NW2ngYXfu2o"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6eh4qy/episode_79_container_builder_with_christopher/"
+++

In this episode [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc)
enter the land of [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration), chatting with
David Bendory and Christopher Sanson all about [Container Builder](https://cloud.google.com/container-builder/).

<!--more-->

##### About David Bendory
David Bendory is the Tech Lead for Google Cloud Container Builder. He joined Google on the Container Builder team in
April 2015 after more than 20 years in software engineering on Wall Street.

##### About Christopher Sanson
Christopher Sanson is the Product Manager for Cloud Container Builder, Spinnaker, and Cloud CICD at Google.
Prior to joining Google he ran his own software development company, building web and mobile apps for companies from
startups to the Fortune 100.

##### Cool things of the week

- Istio [announcement](https://istio.io/blog/istio-service-mesh-for-microservices.html) [blog](https://cloudplatform.googleblog.com/2017/05/istio-modern-approach-to-developing-and.html)
- Cloud Source Repositories: now GA and free for up to five users and 50GB of storage [announcement](https://cloudplatform.googleblog.com/2017/05/Cloud-Source-Repositories-now-GA-and-free-for-up-to-five-users-and-50GB-of-storage.html) [product](https://cloud.google.com/source-repositories/)
- Kelsey Hightower - Keynote - Pycon 2017 [youtube](https://www.youtube.com/watch?v=u_iAXzy3xBA&feature=youtu.be)

##### Interview

- Container Builder [product](https://cloud.google.com/container-builder/) [docs](https://cloud.google.com/container-builder/docs/)
- Google Cloud Container Builder: a fast and flexible way to package your software [blog](https://cloudplatform.googleblog.com/2017/03/Google-Cloud-Container-Builder-a-fast-and-flexible-way-to-package-your-software.html)
- Building lean containers using Google Cloud Container Builder [blog](https://cloudplatform.googleblog.com/2017/05/building-lean-containers-using-Google-Cloud-Container-Builder.html)
- `gcloud container builds submit` [docs](https://cloud.google.com/sdk/gcloud/reference/container/builds/submit)
- Container Builder: Build Steps [docs](https://cloud.google.com/container-builder/docs/concepts/build-steps) [github](https://github.com/GoogleCloudPlatform/cloud-builders)
- Container Builder: Build Triggers [docs](https://cloud.google.com/container-builder/docs/concepts/creating-build-triggers)
- Container Builder: Free Tier [pricing](https://cloud.google.com/container-builder/pricing)
- Container Builder: Querying Build History [docs](https://cloud.google.com/container-builder/docs/how-to/querying-builds)
- Container Builder: Tracking Build Updates Using Cloud Pub/Sub [docs](https://cloud.google.com/container-builder/docs/concepts/pubsub)
- Contact the Container Builder team: [email](mailto:gcr-contact@google.com), [stackoverflow](https://stackoverflow.com/questions/tagged/google-container-registry), #cloudbuild channel [slack](https://bit.ly/gcp-slack).
- Follow up [Spinnaker](http://www.spinnaker.io/) episode will be out *next week*

##### Question of the week

How do I make sure that my Compute Engine instances start quickly so that I can autoscale quickly?

- GCE Startup Scripts [docs](https://cloud.google.com/compute/docs/startupscript)
- Improving GCE boot times with custom images [blog](https://medium.com/@duhroach/improving-gce-boot-times-with-custom-images-f77921a2c115)

##### Where can you find us next?

Francesc released a new [Just For Func Episode](https://www.youtube.com/watch?v=XaMr--wAuSI), and will be teaching at
[Onboard Buenos Aires](https://cloudplatformonline.com/2017-OnBoard-BuenosAires.html) (here are the [North American](https://cloudplatformonline.com/2017-OnBoard-northam.html) locations) and running a 
workshop at [QCon New York](https://qconnewyork.com/)

Mark is going on vacation for a few weeks - but don't worry, he'll still be on the podcast!

{{< transcript "FRANCESC: Hi, and welcome to episode number 79 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I am most excellent today. How are you doing?

FRANCESC: At least excellent. 

MARK: Less excellent? 

FRANCESC: At least excellent. Ah, no, I'm doing great. Very happy that we're going to have in this episode and the next episode, while the guests is the same one, product manager for Container Builder and also product manager for Spinnaker. 

And today we're going to be talking about Container Builder with him and also one of the engineers on the team, David Bendory. Before that, we have the cool things of the week. But at the end, we also have a question, which is cool. It's about hey, I have GCE seen instances, and they're taking a little bit too long to start. How do I fix this? 

MARK: Yeah, performance. How do we make this thing happen fast? 

FRANCESC: Performance, yeah. Actually the answer will be coming from one of our coworkers. 

MARK: Colt. 

FRANCESC: So that's going to be fun. Colt, Colt McAnlis. But before we get into all of these amazing cool things, let's go with the cool things of the week. The first one is-- 

MARK: Hard to pronounce. 

FRANCESC: --a new Greek word. And the new Greek word of the day is Istio. 

MARK: Istio. I keep saying, Itsio, but it is Istio. 

FRANCESC: Yeah, I mix it with Etsy. So yeah, Istio. And Istio is Greek for sail, like in a sailboat. On top of that, it is also a framework, which is actually to run services. It's a service mesh for microservices. So what does that mean? 

MARK: Yeah, and I think we're going to have to get them on, have a really long chat about it. 

FRANCESC: We'll definitely have full episode with them. I think he deserves it. But in the meanwhile, before we actually talk about what he does, I think that one of the things he says, the fact that it is a collaboration from a lot of different actors in the macroservice community or industry or whatever you want to call it. 

Three of them are Google, IBM and Lyft. So big players. 

MARK: Big companies. 

FRANCESC: Yeah, and it is really cool because the whole idea is you want to provide a better visibility and monitoring and telemetry and all that stuff for macroservices on Kubernetes without modifying the code, which is cool. 

MARK: Which is super cool. I'm going to steal a phrase that I saw on Twitter from Jessie Frazelle. It is a Kubernetes native project. 

FRANCESC: Like Cloud Native? No, it's Kubernetes native. 

MARK: It's Kubernetes native. Yeah, no, I super like it. At a top level, it basically gives you visibility and control over your microservices traffic. 

So if you've ever had a million microservices, and you like, which one's talking to which? What's their status? What are they doing? How are they working? Can I prevent other microservices connecting to other ones, like doing security and control. All those things. That's the problem that Istio is trying to solve for you. 

FRANCESC: Yeah, I was always saying, the cool thing is that you don't need to modify anything. The way this works is by running a sidecar container in your pod. So that way, you are able to understand everything that goes through that network. 

And it uses Zipkin, and you can actually plug it to things like Prometheus and Grafana to actually understand what's going on. So-- 

MARK: It's cool. 

FRANCESC: Yeah, it is pretty cool. I sincerely thought that this was actually a project already part of the Cloud Native Computing Foundation. Turns out it's not. I'm going to bet this is going to change soon because it feels like this is such a perfect fit for the community. 

MARK: Maybe we should have a podcast bet. 

FRANCESC: Yeah, but we should-- 

MARK: There you go. I'll say, it won't, and you can say, it will. And we'll see what happens. 

FRANCESC: I think we should bet on when it's going to happen-- no, whether it's going to happen, but sure. But yeah, we'll have a bunch of different links to the show notes. Check it out. It is a really cool thing. I think it's early to just run it in production already. So I'll definitely go check it out and see how it can help you understand what your cluster is doing. 

MARK: Awesome. So our second cool thing of the week-- Cloud Source Repositories. If you haven't used those before, there is our hosted Git repositories that exist within your Google Cloud Platform project. 

FRANCESC: And they're awesome. 

MARK: They are awesome. They have now gone general availability and have been included in our free tier as well. So if you have less than 50 gigabytes of storage or up to five, what is called, project users-- so a combination of users and project using that Cloud Source Repository-- then you can use it for free. 

But it's all GA now, which is great. So it has SLAs and stuff for your code that's stored in there. 

FRANCESC: They're really cool. We use them all the time because basically, if you don't feel comfortable pushing something into GitHub because you can have GitHub private repos. But this one, the good thing is that it is something that is private to your project. And you control who has access through IAM. 

MARK: Yeah, so considering we're talking about Container Builder today, this is actually really cool because it's all integrated. And it makes certain things easier. 

FRANCESC: Yeah basically Container Builder is going to allow you to be able to stuff. That stuff normally comes from source code. That source code you could host it somewhere on private repo and GitHub. 

MARK: Like on GitHub or something, yeah. 

FRANCESC: And then you need some keys to access it. Or even easier, you just put it on Container Builder. On Cloud Repositories, Cloud Source Repositories, and then it's just works. 

MARK: Yep, and it's all on the same network. 

FRANCESC: Yeah, it is very cool. The last cool thing of the week, it is probably one of the coolest demos I've seen in a very long time. It's our teammate, dear teammate Kelsey Hightower at the Pycon closing keynote. 

What he does is not crazy because he's like, oh, well, you deploy a service. You create a deployment in Kubernetes. Then you do a rolling update to version two and all of these things. Normal. 

But he does this with his voice through Google Assistant. And just yeah. 

MARK: It's cool. 

FRANCESC: It blows my mind. It is a very cool demo. We'll have a link to the video in the show notes. Go check it out. You might be able to learn a lot. It's actually a very good introduction to Kubernetes. Maybe you never used it. Definitely check it out, especially if you're a Pythonista. 

But even if you know a lot about Kubernetes, just check the demo out because it's one of the coolest demos I've seen in a while. 

MARK: Very nice. Awesome. Well, why don't we go have a chat with Christopher and David and talk to them about Container Builder? 

FRANCESC: Sounds good. Let's do that. So I'm very happy to welcome today David Bendory and Christopher Sanson, two members of the Google Cloud Container Builder team. Hi, how are you doing, David? 

DAVID: Doing great. Thanks for having us on the show. 

FRANCESC: How are you doing, Christopher? 

CHRISTOPHER: Doing great as well. Good to be here. 

FRANCESC: So yeah, I'm very happy to get you in the podcast. We met a couple weeks ago when I was visiting New York. And we got to have an interesting lunch where you were telling me a lot of really cool stuff. So I hope that we're going to be able to cover all of those cool things that you were working on today during the episode. 

But before we get into the topic of Container Builder and what does it actually do, why don't you tell us a little bit about who are you and what you do Google. 

DAVID: Hi, I'm David Bendory. I'm one of the software engineers behind the Google Cloud Container Builder. I've been at Google for a little over two years. This is the first project I've worked on here. 

And I'm very excited about it because it's been successful and a lot of fun. 

FRANCESC: Cool. What about you, Christopher? 

CHRISTOPHER: Great. So I'm a product manager here at Google for Container Builder and also Spinnaker. We're going to build out our continuous delivery solutions for customers. 

MARK: Awesome. All right, well, why don't we keep it simple and start at a higher level. What, from the 40,000-foot view, is Container Builder? Which one of you is the best person to answer this question? 

DAVID: That sounds like a product question. Why don't you take it, Christopher. 

CHRISTOPHER: All right, you answered first. I was going to defer to you. So Container Builder, it's a cloud-hosted service for doing builds. And originally it was created for a Docker build specifically. So it was a way to build Docker images without actually having to have Docker on your machine in a consistent, reliable, fast, scalable, cloud-hosted service. 

And as [INAUDIBLE] integrations with Google Container Registry, so you're able to set up build triggers. So essentially, you make a change to source code, set up a trigger, trigger build that happens in the cloud, and then gets deposited into a registry or artifact store. 

FRANCESC: Cool. The first question here is so Container Builder, it builds containers. 

DAVID: It builds anything you want. We specifically went after containers as our first marketing segment to go after. We very much needed that as part of our GAE and GKE offerings. 

But if, say, the Container Builder itself is very flexible. It's configured by build steps that I think we'll get into and talk about a little bit. But essentially, it lets you build any kind of artifact that you want to build in the cloud. 

FRANCESC: When we're talking about building something in the cloud, I can imagine, for instance, that use case where you were talking about you have some repo, let's say on GitHub or Google Container Registry-- sorry, no, Google Container Registry. Google Rece-- what is the name of the-- 

DAVID: Cloud [INAUDIBLE] 

FRANCESC: --where it used to-- exactly that one. So you have some code in there. And every single time you do a commit, you create a new Docker image. But can I do this also with like local source code and get a local Docker image but we're doing all the build steps that could be expensive somehow doing that on the cloud? Is that also part of the thing? 

DAVID: Sure. So we're fully integrated with the Cloud SDK. So from your gcloud command line that you no doubt know and love, you can just do a gcloud Container Build submit and take your local source, which presumably hasn't yet been submitted to a source code repository. You're just playing around locally. And you can submit that build and know exactly how it will build when you actually do commit the source and upload it to your repository somewhere. 

MARK: OK, cool. Is that taking it through, say, some automated build steps? Or is that just building, say, a Docker file that I'm pushing up? 

DAVID: It could be either. So in the simplest use case, you've got a Docker file, and you can use the correct flags on the command line to just pass that Docker file and some source in. And we'll just do a simple Docker build on that. 

As you get more sophisticated, you probably switch from a simple Docker file to a configuration file. We call it CloudBuild.yaml. And that effectively specifies a series of build steps that you want to run in order to make your build happen. And we will then execute that build for you. 

FRANCESC: Those steps-- I can imagine those steps being similar to what you can do with, let's say, Travis CI. So is this a continuous integration tool? It continues delivery, continues deployment, continues what? 

CHRISTOPHER: That's a very good question. It's whatever people want it to be. So the idea is it's not a full CI or CD solution. But the build step architecture is very flexible. Essentially, we run a container from an image that you specify. And so we have some supported build steps. 

So Docker is a good example where you can do a Docker build step. But these images are-- it's bring-your-own image. So users can define whatever they want as a container that can execute. 

And so, for example, you can run a gcloud command. You could run a Firebase deploy, almost any tool that has a CLI you can turn into a build step. And people do use it for testing as well. 

So you could conceivably set up a full solution where you trigger changes on source, you run your tests, you build your artifact, you maybe even run some integration tests, and then create your binary, and then deploy it out. It's a little bit DIY at this point in terms of using it that way. 

The real core use case is you're ready to create your release candidate. You merge your code into master, trigger a build, and then push that out. But yeah, it's really interesting. We're seeing people use it in all sorts of ways. They're creating Maven builders, Gradle builders, Gulp, you name it. 

DAVID: So these build steps, the idea here is flexibility. The way we solve the problem of you not knowing what the build chain is going to be in the cloud is by letting you bring your own build chain. 

So if you can put it into a Docker container, then we can execute it as a build step. So effectively, for example, the standard Maven container that's available on Docker Hub can be executed as a build step in Container Builder. 

And we are seeing now our more sophisticated users develop their own build steps to do whatever custom work that they want to do as part of their build. And we are watching the development of a ecosystem of different kinds of builders that are language specific, some of which we're going to end up officially supporting, some of which won't be officially supported by our team but might exist in a solution Docker or some such. That will enable people to share their ideas in this regard. 

MARK: So then that's exactly what I was going to ask-- is there some set of examples people should go look at? Or community work that you've seen that's out in the wild that people should go hunt down and check out what's going on with Container Builder? 

DAVID: Sure. Well, from our Docks, we link to our GitHub repository, where we've open-sourced about a half a dozen build steps that we officially support coming out of my team. And those are things like Docker that Christopher already mentioned. 

We've got a basal build step. We've got Go language builders there, a Git builder. So you can pull from Git or potentially push to Git as part of your build if you want to do that. 

So in each of those build steps, we provide examples. And people can see exactly what we've done. It's all open source. And we also have little demos there and examples of how to use them in order to encourage this experimentation among our users. 

FRANCESC: Cool. So one of the things that I think is an amazing advantage of using Container Builder is that since it runs on Google Cloud Platform, I'm assuming integration with other Google Cloud Platform services, especially authentication, is already managed? Am I correct? 

What if I want to access the metadata servers to download some metadata that I'm going to use to access some private GitHub repo, something like that. Is that the case, that you just do get and that will work? 

DAVID: Right. So for metadata servers, we've wired that access into place for you. We also support the gsutil and a gcloud build steps, one of each. And that will let you just run command lines as part of your build. 

The authorization story is a little bit complex right now. We're in the process of simplifying that for our users. Where we're going to land in the coming weeks is that you will be able to set up build permissions using IAM the same way you set up roles and permissions for anything else on your project. 

So you'll be effectively be able to enable your Cloud Builder to do whatever it is that you want it to do. 

MARK: Cool. So let's talk practically. Say I want to hook up a Container Builder to maybe a GitHub repo or a Source repo and have it build a Doctor container at the end of it. What does that developer process look like? 

DAVID: So the way that would work today is you would go into our UI in the cloud console. And you would follow a series of steps there that first set up RepoSync from your private-- I assume you're talking about a private GitHub-- so from your private GitHub to Cloud Source Repositories. 

You could then set up triggers on that so that whenever there's a push to the branch or branches you want, that will trigger an automatic build, which will run almost immediately when you push a change. 

We have a lot of users doing things like listening to GCR pub/sub event notifications that they know when a new container gets pushed. And when that new container gets pushed, that triggers some other step in a continuous integration or continuous delivery pipeline that they want to run on push. 

You can also listen for pub/sub notifications on your builds if you want. But that'll be a little bit noisier than just a container push. You'll get notifications about builds when they start working. You'll get build completion notifications, whether it's success or failure, which is a little bit different than just listening for what a new container shows up, which obviously indicates build success. 

FRANCESC: So you mentioned that the first step is to go to the Container Builder tab on the console. I cannot find it. Where is that? 

DAVID: You're right. I don't think I specifically said the Container Builder tab, but I should have been more clear. So everything I just described is under the Google Container Registry. 

FRANCESC: Oh, OK. That makes a lot of sense. Good. 

DAVID: It's all part of your Container-- 

FRANCESC: I was like, I'm trying to follow through. It was like, I'm lost now. 

DAVID: I'm glad you tried to follow and ask because otherwise all the listeners would've been lost. 

FRANCESC: So I'm wondering, since we've been talking a lot about build steps, and those steps for me, they're not always building. For instance, if I had a Go application, what I want to do with something, a tool like this is to run lint and to make sure that there's no bugs. I want to run all my unit tests and then finally build it. 

All of these things are easily integrated with Container Builder. But then what about extra things. Let's say I want to do integration tests once my new image has been created. How easy is it to deploy it to App Engine to a new version and run some testings there? Is this part of what you try to cover, or is this something that should be done with a different tool? 

DAVID: So this starts getting into the line of where the builder as a component of your continuous integration ends and other tools begin. We do have users who do some of the things you're describing using Container Builder. 

We certainly have users who are limiting, users who are running unit tests. We have users who are playing with Docker Compose so that at the end of their build, they compose an environment and run some simple tests against it. But for a really true Integration suite, I think Christopher wants to talk about one of the other products that we offer. 

CHRISTOPHER: Yeah, I think when you talk about production level and staged rollouts in any reliable uptime service, we offer Spinnaker as our recommended continuous delivery tool. 

So as David said before, your Container Builder would build your Docker image, push it to a registry or some other JAR file artifact, what have you. And then you would set up Spinnaker to listen to the presence of that new release candidate and then trigger a deployment pipeline. 

FRANCESC: For reference, we're doing this backwards in time. So by the time this episode will be out, the Spinnaker episode will also be out. So if you're interested in knowing more about Spinnaker, go back in time and listen to the episode. I think it's going to be episode 80 or something like that. But sorry to interrupt. 

CHRISTOPHER: Well, then assuming that everybody is Spinnaker experts at this point in time, I will say, we do have a lot of users who say, hey, you know this is great. I built this thing. 

I want to do it GAE deploy. Or I want to do kubectl deploy or something like that. And you certainly can as your final build step. But I think it's more in a sandbox or staging environment, where you don't really need to have more control, I guess, over the rollout. 

MARK: So that's kind of cool. I was just checking it out. It looks like there's a free tier still for Container Builder? So if I have an open source project or something like that, I can take advantage of that. Is that right? 

CHRISTOPHER: Yeah, it's a pretty generous free tier. It's 120 free minutes a day, build minutes, which we see-- I want to say 90/90, about 5% of our users stay under and never even hit the paid tier. 

FRANCESC: So I guess that the next question is since one of the things that I cared the most about, continuous integration tools, is that they should be fast, right? I am going to be doing a new build per commit. And what I want to make sure is that that is done as quick as possible because until all the integration has not been run, I cannot merge my branch. 

For instance, how fast are we talking about here? You said 120 minutes of build time. How many builds would that be? 

DAVID: Well, it of course depends a lot on what you're doing in your build, right? And how big is your build, and how much I/O do you need to do in your build, and how CPU intensive, and so on. 

I think I can state that by default, your build is run on an n1-standard-1 instance. So you're not getting a huge, high-power CPU there. So we are soon going to go public with custom VM sizes so that if you want to use a bigger machine with more CPU, you'll be able to specify that as part of your build request in order to make your building go faster. 

What I can state is that the things that are not dependent on what you are building, in other words, the things that are under our control as the engineers behind the product, we have developed this product for low latency. 

So when your builds trigger fires, we make a build very, very quickly. And we start its execution almost immediately from your perspective as a user. I can tell you that I have done a Git merge. And by the time I got over to the UI to see what was happening, the build had already completed. It can be that fast. It depends, of course, on how big your build is. 

But we introduce as little latency into the process as possible, as in measured in small single digit number of seconds at the most is what we're after. 

FRANCESC: Does that mean that we are not actually suffering the time it takes to span a new instance? 

DAVID: Right. 

FRANCESC: Because you're saying that you're running, by default, n1, so with one core. But spinning one of those takes around one minute maybe, yeah, around one minute. So we're not doing that. We're just taking less than two seconds. 

DAVID: Well, I don't want to give away all of my secret sauce. But I will say that you do not have to wait for spin-up time. 

FRANCESC: That is amazing. 

MARK: That's super cool. All right, I'm checking out all the features of Container Builder, making sure I'm up to speed. But I saw something really cool in here. And it looks like there's a way to query previous builds and their status and the details of that. Can you explain what that is and what people are using that for? It looks really interesting. 

DAVID: Sure. So we've got a list builds API point. If you go to the Google Container Registry page in the cloud console, effectively you will see a list of your previous builds. That is calling our API point to get that list. 

And then you can filter that list in order to query it for the particular build you're looking for. So you might want to filter it by source or by branch name or by particular build steps or by particular outputs, whatever it might be that you want to narrow that list down. 

And what do people use that for? People use this to watch their history, among other things, as in, oh, gee, have my builds been taking longer over the last months? Well, let me list all of my builds over the last month and see how long they took. And see is that time going up or not is this the kind of query that people are doing here. At least those are the ones we're aware of. 

FRANCESC: Cool. You real quick mentioned, yeah, people using this are using it. Who are those people? Can we talk about who are the users? Is there any big company we can talk about? Do we use it internally? Do you build Container Builder in Container Builder? 

[LAUGHTER] 

DAVID: Let's start with that. We eat our own dog food. We build Container Builder in Container Builder, and we love it. 

FRANCESC: Oh, that's cool. I didn't expect that to be true actually. I was just kidding. Nice 

DAVID: So yes, so certainly before you've seen it hit the public use of Google Cloud Container Builder, we have already rebuilt ourselves using it to make sure everything works. 

CHRISTOPHER: Yeah, I think what we could talk about is in internal Google usage. So the original purpose of its creation was to power builds for GAE Flex and [INAUDIBLE]. 

So any time that you do an App Engine deploy or-- some of the time when you do a Google Cloud Function, you are using Container Builder under the hood. And so it powers the builds as part of that. 

FRANCESC: That's cool. So that's why deploying Cloud Functions is actually fastest. You behind it making it faster. 

CHRISTOPHER: Yeah, so if you're an AppEngine user and you noticed it got a little faster a little while ago, this was the reason. 

FRANCESC: That is awesome. 

MARK: That is. 

CHRISTOPHER: I would say the two types of users that we see very often are smaller companies or side projects, who just simply want to automate that thing they were doing manually before. They had their CLI, and they were creating images and pushing out. And they just wanted to automate that with a build trigger. 

And then also at larger enterprises, you're seeing it as part of their tool chain. So Alphabet companies like Nest in Apigee are using Container Builder as part of their CI/CD tooling ecosystem for individual pieces of their workflow. 

MARK: Awesome. I think we've actually chatted about it a bit, but I wanted to get into it a bit more. It looks like there's a bunch of triggers that can work for builders to fire. 

Obviously we talked about Source. But I think is there also triggers for pub/sub and some other things? Is that is that the set of triggers that are available? Can you talk through those just explicitly so people can see how things get put together? 

DAVID: Sure. So I would differentiate between what I'll call first class trigger support versus other supported triggers. On a first class basis, our product itself is tightly integrated with Cloud Source Repositories to support those source code change-based triggers. 

Having said that, you can trigger on any event that you're able to listen for. So for example, we have users that have deployed GCF functions, where they listen for a base image change. And when their base image changes, they kick off a build to rebuild their-- based on their Docker file, based on their source that lives somewhere as one example. 

But anything you could listen for on Pub/Sub could be used as a triggering event. And for that matter, you could use triggering events that aren't on GCP at all. 

CHRISTOPHER: Yeah, for example, you could call-- there's an API as well. So what we see clients do who, say, migrating from Jenkins. Or they like Jenkins for their overall orchestration for their CI pipeline, but they're having trouble scaling their build execution. 

Travis as well. You can call out from those CI systems to Container Builder to just run your specific build process in a more scalable, faster way. 

MARK: Nice. And you can also pick up on-- I think he mentioned this briefly before as well-- you can pick up on build [INAUDIBLE] changes and build statuses through Pub/Sub as well, stuff going to Pub/Sub. 

DAVID: Right. We publish or build events. When you create a new build, we publish that-- when the build status changes, when it's queued, when it starts working, and finally when it finishes. We publish all those status changes if you want to listen for them. 

FRANCESC: Cool. So integrating these into any other system is actually by design. 

DAVID: Yes. 

CHRISTOPHER: And Slack is the classic use case there. People want a Slack update whenever their build fails or something. 

MARK: Awesome. Well, we are slightly running out of time a little bit. This sounds like an amazing product, though. Is there anything that hasn't been mentioned or you want to make sure is mentioned or we've missed in any way, shape, or form that you want to make sure is on the podcast? 

CHRISTOPHER: Sure. So we encourage people to take a look. We have a Google Container Registry tag on Stack Overflow. We also have a Slack channel, part of the Google Platform. This is cloud build. 

So we're pretty active on there for users who are asking questions. Also check out the GitHub. We accept pull requests on new cloud builders. So if you have a builder image that you really like and want to share with the community, we definitely encourage and love work with our external users. 

FRANCESC: Well, thank you so much for taking the time today to tell us a little bit about Container Builder and the awesome things you can do with it. 

DAVID: Thanks for having us. Look forward to hearing your feedback. 

CHRISTOPHER: Thanks, guys. 

FRANCESC: So thanks so much to both Christopher and David for telling us about so many cool things you can do with Container Builder. I know that we might be using it soon for the podcast you mentioned. 

MARK: Yeah, I think we might. 

FRANCESC: Yeah, but which by the way, we're working on actually open sourcing the podcast source code. 

MARK: We've only been talking about it forever, yeah. 

FRANCESC: Yes, it's taken 79 episodes to actually make it out then. But it's going to be happening sometime soon. So we'll let you know when this happens. We're actually actively working on this finally. 

So it is time to go with our question of the week. And the question of the week is like, I'm running on GCE. So I have this cluster, this autoscaling group, right? 

MARK: Yep. 

FRANCESC: And whenever I have more traffic coming in, I spawn new instances. Now the problem is that those instances are taking quite a long time to start. What's going on? 

MARK: So it really depends on what are you doing with those GCE instances. We have pretty quick startup times for our VMs. They're pretty consistent. We've done lots of testing on that. That's a big point of pride for us. 

So what are you doing after they spin up? Usually quite often, people have some startup script. Say you're spinning up a plain old Debian instance. You want to install some stuff, maybe grab some stuff off the internet, and make that run. 

How do we make it so that that part can be faster? Because that's usually where your bottleneck's going to be. I'll make reference to the fact that yes, our friend, our dear friend, Colt McAnlis wrote a really great series on this exact problem. We'll link to it in the show notes. 

FRANCESC: Yeah, it's actually a serious-- in general performance problems on cloud. It's called Google Cloud Performance Atlas. Check it out. There's a bunch of different topics. 

MARK: Yep. And what he does in there is actually he start profiling the GCE startup script to see what's taking a long time within that startup script. But then he takes it one extra level further, where he actually does is he says, OK, rather than having a startup script, what we'll do is instead build ourselves a custom image. 

So basically we basically take a snapshot of the boot disk of the machine we've preconfigured beforetime. And then we can boot that up straight away with our managed instance groups so that when it starts up, everything's already installed. And we don't have to go through that step every single time for every single instance of machine as it comes up. 

FRANCESC: Yeah, the example that he's using is a cool one because it's like, well, you know, this is something that is using ImageMagick. So the first thing that you do is you start this Linux instance. And then you install Python, and then you install Tornado, and then you install features, and then you download ImageMagick. You install it, too. 

And then once you're ready to go, you start running the thing. 

MARK: Oh, wow. Yeah. 

FRANCESC: There's a bunch of things. And that takes, according to him, it takes around 75 seconds, something like that. And then he says, well, instead of doing that, let's create a custom image. And then the startup time goes from around 75 seconds to under one second. 

MARK: That's crazy. 

FRANCESC: Actually it's under 20 milliseconds. 

MARK: Well, that's the startup time. 

FRANCESC: That's the startup time. You actually went from crazy 75 seconds on top of the provisioning time to just 20 milliseconds on top of the provisioning time. So you're actually gaining a lot of time there. 

MARK: You're gaining a lot of time there, which is really cool. 

FRANCESC: So it's definitely worth checking out. You're going to see he actually explains how to do every single one of those things. There's some best practices on how to create custom images, and he goes over them. So definitely a very good blog post and very good video, too. 

MARK: And since we are talking about Container Builder, you could definitely use Container Builder to build these images. 

FRANCESC: Absolutely. That's a very good segue for between the podcast and the question of the week. But yeah, absolutely. You could create Container Builder, as we said. You can create containers, but also you can create anything else. One of those anything else is indeed custom images. 

MARK: Excellent. All right, Francesc, before we wrap up today, you up to anything fun? Done any Just for Funcs or anything like that? What are you up to? 

FRANCESC: I finally released the previous Just for Func that was supposed to be out on May 15, 17, whatever. It finally came out. It was on gRPC and had to do the say command that allows you to say things with your Mac. But implementing the same thing, with service running on Kubernetes and your client running on your machine is communicating to it through gRPC. 

MARK: Ooh, fancy. 

FRANCESC: It is really cool. I had lots of fun doing it. And I'm working on the next episode that will probably be late, too, because by the time this episode comes out, I will be in Buenos Aires. 

MARK: Oh, nice. 

FRANCESC: Which is in Argentina for an event that is happening on June 2. And I want to talk a little bit about it because it's cool. We're going to be doing this Google OnBoard event. It's a training event that is free. It's going to be in Spanish, and it's going to be available for all Latin America. 

We'll have a list of all the cities where you can go attend the viewing parties. I will be in Buenos Aires, but I know that there's many other places where you can go watch it. 

MARK: Yeah, so there is a whole bunch of locations, especially around North America, from-- where we are-- Dallas, Austin, Toronto, Vancouver, San Francisco, Chicago, Los Angeles, Atlanta, Boston, New York City, Seattle, and Washington. 

FRANCESC: Yeah, so all of those are the North America. I will be in the Latin America one. And the ones for Latin America, they will happen the same day, so that's June 2. 

But the main event where I will be will be in the Luna Park in Buenos Aires. But you also have [INAUDIBLE] Mexico; Guadalajara; Monterrey; Bogota; Medellin, Cali in Colombia; Santiago, Chile; and Lima in Peru. 

MARK: Nice. So if you're in any of those areas, there are lots of opportunities to get some free Google Cloud Platform training. 

FRANCESC: Yeah, it's going to be really cool. And I'm going be doing the live streaming. So if you like hearing my voice, that is one more-- 

[LAUGHTER] 

--one more occasion, opportunity, to listen to my beautiful accent, which I will also have an accent in Spanish because we'll be Latin America. So it's going to be fun. What about you? What are you up to? 

MARK: I'm going on vacation for a few weeks, which is super nice. 

FRANCESC: Ooh. 

MARK: Yeah, I know. It's terrible. But I will still be here on the podcast. So everything is fine. But other than that, I've got a little secret project I'm working on with another teammate. But I'm not going to mention what it is yet. 

FRANCESC: I know what it is. I'm very excited about it. 

MARK: Yeah, me too. 

FRANCESC: But it's a secret. Yeah, and we'll be back next week with a continuation on this episode. I don't know if you've heard about Spinnaker before, but Spinnaker is a really cool project that goes over more things that you can do once Container Builder is not enough for you. So we'll be discussing that next week. 

MARK: Sounds good. I'm looking forward to it. 

FRANCESC: Thanks, Mark, for taking the time out of your holidays to be here today at the podcast. 

MARK: And thank you, Francesc, for joining me once again. 

FRANCESC: And thank you all for listening. 

MARK: We'll see you all next week. 
{{< /transcript >}}