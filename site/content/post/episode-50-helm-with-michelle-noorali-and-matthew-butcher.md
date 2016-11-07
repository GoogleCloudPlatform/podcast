+++
audioDuration = "00:39:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.50.mp3"
audioSize = 56325174
categories = ["Helm", "Kubernetes"]
date = "2016-11-02T01:07:49Z"
description = "We celebrate our fiftieth episode interviewing Michelle Noorali and Matt Butcher about Helm, a package manager for Kubernetes: like apt/yum/homebrew for Kubernetes."
draft = false
episodeNumber = 50
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Helm with Michelle Noorali and Matthew Butcher"
image="/images/post/helm.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/7uPEmSc8zJm"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5aqgkf/episode_50_helm_with_michelle_noorali_and_matthew/"
+++

Today your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
celebrate the fiftieth episode interviewing [Michelle Noorali](https://twitter.com/michellenoorali)
and [Matt Butcher](https://twitter.com/technosophos) about [Helm](https://github.com/kubernetes/helm),
a package manager for Kubernetes: like apt/yum/homebrew for Kubernetes.

<!--more-->

##### About Michelle Noorali

[Michelle Noorali](https://twitter.com/michellenoorali) is a software engineer at Deis.
She is a Core Maintainer on the Helm project. Michelle is also the co-lead of the Kubernetes
Special Interest Group for Applications, better known as SIG-Apps, which focuses primarily on
defining, running, and managing applications in Kubernetes.

##### About Matthew Butcher

[Matt Butcher](https://twitter.com/technosophos) is a software architect at Deis. He is the author of
eight software development books, most recently [Go in Practice](http://goinpracticebook.com/).
Matt has a Ph.D. in philosophy, and teaches in the computer science department at Loyola University
Chicago. He has contributed to over one hundred open source projects.

Matt is a founding member of the Helm project.

##### Cool thing of the week

- Decoding the micro-moments of baseball: can you hear the game through data? [blog post](https://cloudplatform.googleblog.com/2016/10/decoding-the-micro-moments-of-baseball-can-you-hear-the-game-through-data.html)
- Treat Google Cloud Storage like a file system with our new PowerShell provider [blog post](https://cloudplatform.googleblog.com/2016/10/treat-Google-Cloud-Storage-like-a-file-system-with-our-new-PowerShell-provider.html)

##### Interview

- Kubernetes Helm [GitHub repo](https://github.com/kubernetes/helm)
- Helm Charts [GitHub repo](https://github.com/kubernetes/charts)
- Helm Charts: making it simple to package and deploy common applications on Kubernetes [Kubernetes blog](http://blog.kubernetes.io/2016/10/helm-charts-making-it-simple-to-package-and-deploy-apps-on-kubernetes.html)
- Happy 1st Birthday Helm! [Deis blog](https://deis.com/blog/2016/happy-birthday-helm/)
- A Special Interest Group for deploying and operating applications in Kubernetes [GitHub Community](https://github.com/kubernetes/community/tree/master/sig-apps)
- Minikube: easily to run Kubernetes locally [GitHub repo](https://github.com/kubernetes/minikube)
- The Illustrated Children's Guide to Kubernetes [YouTube](https://www.youtube.com/watch?v=4ht22ReBjno)


<div style="text-align: center">
  <img src="/images/post/helm.png" style="margin: auto; width: 50%; max-width:300px">
  <p><small>Helm: a tool for managing Kubernetes charts</small></p>
</div>

##### Question of the week

How do I build Docker images in the cloud?
- Google Cloud Container Builder Documentation [docs](https://cloud.google.com/container-builder/docs/)

##### Were will we be?

[Francesc](https://twitter.com/francesc) is on his way to Brazil for [GopherCon Brasil](https://2016.gopherconbr.org/en/) and
[GCPNext Brazil](https://cloudplatformonline.com/NEXT2016-Brazil.html).

[Mark](https://twitter.com/Neurotic) is attending [Unite](https://unite.unity.com/2016/los-angeles),
the Unity conference in Los Angeles, CA on November 1st.

{{< transcript "FRANCESC: Hi, and welcome to episode number 50 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm a bit sleepy, but I'm good. 

[LAUGHTER] 

FRANCESC: It's been a long day, many meetings, many recordings, yeah. 

MARK: Yeah, yeah, busy time of year. 

FRANCESC: Yeah, but actually, very good interview today. 

MARK: Yeah, yeah, super-- actually, it was great. It was just really great. We talked to two members of Deis. 

FRANCESC: Deis. 

MARK: Deis. Working on the Helm project, the package manager for Kubernetes. 

FRANCESC: Yep, and that is very interesting. I really enjoyed the whole conversation, lots of history about the project, how it happened, and how to use it. And I'm actually now convinced. I want to try it. I'm  definitely using this. 

MARK: Yeah, and going on from that, actually, after we talked to our people for our interview, we have a question of the week about building Docker images in the cloud. 

FRANCESC: Cool. That is interesting, especially if you are traveling around and you have Wi-Fi from the hotel, yes. 

MARK: Or on an airplane. 

FRANCESC: Yeah, I've tried that. 

MARK: I've built Docker images while using Gogo. It kind of works. 

FRANCESC: Well-- 

MARK: It works. I mean, it works. I've done it. 

FRANCESC: Yeah, if you have a long flight, and the flight is long enough, yeah. 

[LAUGHTER] 

Cool. But before that, we have the Cool Things of the Week, as usual. And the first one is about my favorite sport-- not at all. I actually don't know much about this sport. It's baseball. It's about decoding the micromoments of baseball. Can you hear the game through data? 

So, yeah, this is basically just a blog post that was announced on Thursday, October 25 by Eric Schmidt, one of our latest people to join our team of developer advocates for Google Cloud. And he wrote an article about how to basically try to understand better what goes on in baseball games. And to do that, he's using three big data products. 

So he's using Cloud Dataflow to transform the data. So Cloud Dataflow, you can imagine it as streams of data going around and kind of doing MapReduce-y things. But it is actually more generic than that. It is really powerful. So have a look at it. Did we had an episode on this? 

MARK: No. Or did we? 

FRANCESC: I'm not sure now. 

MARK: We've done a lot of episodes now, so it's actually getting hard to track. 

FRANCESC: Yeah, maybe we should. I think that Google Cloud Dataflow is one of my-- I've said this before, I think. It's the only product that is the only product at Google that will make me write Java. 

MARK: Yeah. No, it's actually a really cool article. They've got stuff in here, like answering questions like, is this pitcher performing at his best? Or what was the probability of the triple play? Which I think is actually kind of hard questions to answer. 

FRANCESC: So the cool thing about this is that you basically want something that is kind of real time, because you want to be able to answer questions while the game is going on. So Cloud Dataflow allows you doing that with streaming. And then to query all the data you end up with, he uses Big Query. And to be able to visualize it in a nice way or to slice and get only the piece of data he cares about, he uses Google Cloud Data Lab. And Google Cloud Data Lab, if you've never used it, it is pretty much like iPython or Jupiter pages on the cloud. It is very, very useful, especially because then you can just say, run a little MapReduce here, and it will create the whole thing for you. 

MARK: That's pretty cool. 

FRANCESC: It's very nice, yeah. 

MARK: Sweet. Well, we have one more cool thing of the week that flows on quite nicely from our Windows and .NET episode yesterday. It was showing how you can use PowerShell to basically treat Google Cloud Storage like local storage. 

FRANCESC: And by yesterday, Mark means last week. 

MARK: I mean last week. I am really tired. I don't know what day it is anymore or what is going on. But that's fine. But no, it's really nice. So, yeah, if you're using PowerShell and you want to interact with Google Cloud Storage, you can use things like CD. And I keep wanting to say LS because I'm a Linux user, but like CD and standard Microsoft Windows-y type directory stuff. 

FRANCESC: I know [INAUDIBLE]. 

MARK: Oh, yeah. I haven't seriously done that in so long. 

FRANCESC: [INAUDIBLE], and that's pretty much it. I don't know any of them. Yeah, it is actually really cool because if you are a PowerShell user, basically these will allow you to use Google Cloud Storage in a very native and intuitive way. 

MARK: Yeah, it's cool, because basically, the PowerShell provider, it returns the same objects as everything else. So you can intermix commands and do stuff like you would normally. 

FRANCESC: I really like-- there's this sentence in the blog poster that says you can just treat Google Cloud Storage like a really, really, really big hard disk. 

MARK: Which is what it is, right? 

FRANCESC: It is really bit. 

MARK: It is really big. Excellent, well, why don't we go have a chat with the two clever people that we have from Helm. 

FRANCESC: Cool, let's do that. 

MARK: Sounds good. 

FRANCESC: So I'm very happy to welcome two people from Deis. Did I say  it correctly? Did I mess it up already? Deis-- whatever. They'll tell us. So we have Michelle Noorali, a software engineer. Hi, how are you doing? 

MICHELLE: Great, how are you? 

FRANCESC: And we also have Matt Butcher, a software architect at dee-is or day-is? 

MATT: Day-is. 

FRANCESC: Day-is, OK. That is a hard one. So we're going to be talking a little bit about something pretty cool. But before we start talking about the main topic, why don't you tell us a little bit about who are you and what you do at Deis. We can start with Michelle. 

MICHELLE: Yeah, so I am Michelle. I'm a developer at Deis. I'm a core maintainer on the Kubernetes Helm project. I also co-lead the Kubernetes Special Interest Group for Applications, which is more commonly referred to as SIG Apps. 

FRANCESC: Nice. What about you, Matt? 

MATT: Hi, I'm Matt Butcher. I'm an architect at Deis. I'm one of the core contributors on the Helm project and one of the people who kind of came up with the ideas behind Helm. Along with working at Deis, I also teach occasionally at Loyola University Chicago in the CS Department there and just recently finished a book called "Go in Practice" on Go software development, co-authored that with Matt Farina. 

FRANCESC: Cool. And obviously, you have a PhD in Philosophy? 

MATT: Yeah. 

[LAUGHTER] 

All those people would tell you that's worthless. Actually, the trick is to go from philosophy into software development. That's how. [CHUCKLING] 

MARK: Actually, you know what? Not the first time I've heard that. 

FRANCESC: We should do an episode on the philosophy of Go routines. 

MARK: There we go. 

[LAUGHTER] 

FRANCESC: That would be an interesting one. 

MARK: Excellent. All right, cool, so Matt, you sound like maybe the right person. From a high level, what is Helm? What does it do? What is it for? 

MATT: So Helm is a package manager for Kubernetes. So Kubernetes is this great system, comes out of Google, kind of based on Google's Borg project. And it's a great tool for running applications inside of a large-scale cluster. 

But one of our early pain points with it was that it's hard to set up your applications to install them into Kubernetes. So we looked around, and we looked at how we do this in Linux, how we do it in OS X. We looked at Homebrew for OS X and Yum and apt-get for Linux. And we said, you know, it would be really cool to build something like that for Kubernetes that made it possible to express the stuff you wanted to run in Kubernetes as an application package that you could share and reuse and stuff. So at a high level, yeah, it's a package manager designed for Kubernetes. 

MARK: So what sort of applications would I be looking to deploy? Can you give me some examples? 

MATT: Yeah, actually, I'll let Michelle answer this. 

MICHELLE: Sure. You could install a variety of applications-- WordPress, Jenkins, databases, MySQL, MariaDB, Postgres. So really there's a large range. 

MARK: So cool. So I guess that means I'm like, oh, I need a MySQL database. I don't have to work out the details of how to set that up and best practices and things like that. I can just go Help and be like, Helm, install MySQL or something like that. 

MICHELLE: Yeah, you could grab the Helm binary and run a search command, do Helm search MySQL, and you'll have a variety of options. And then you can tweak your MySQL configuration to your preferences and then run install to install the actual chart. 

FRANCESC: So the question I always have when I think about these kind of deployment managers, which I really see as I get something that helps you deploy an application into Kubernetes, is, is the default value the best practice? Like if I just say, yes, yes, yes, yes, yes, I will have something that actually works in production? Or is it something that was like something to get started, and then you're going to be tuning up the deployment to have something that matches your use case? 

MATT: I guess I look at them as like your etc files on Linux, right? When you first install something, you want it to function enough so that you've got a starting point to sort of tweak it from there. But is the default always going to be the best? Probably not. 

So the trick is, as chart developers, is to write these kinds of Helm chart packages that are good enough to get people up and running and then help them understand from there how they have to tweak it. Now, the additional problem with cluster-based software is that when you're installing something via Homebrew, you know you're going to have one instance running locally on exactly one computer every time you type that in. 

Well, when you're dealing with something like a cluster, you may want to be running one instance of Postres, for example. Or you may want to be running a cluster of six Postgres servers with a master elected out of that pool or something like that. So the trick with setting up defaults, sensible defaults, is to sort of intuit what the base case is for most users and then make it easy enough that they can extend it off the base case with very little effort, right? 

MARK: So you used a word there. You said the word "chart." Michelle, do you want to explain what a chart is? What is that? 

MICHELLE: Yeah, so a chart is basically a packaged format for Helm. It's a directory structure that consists of some metadata, templated or not templated, Kubernetes resources, and some documentation. And so applications come in the form of charts, and then you install charts into your cluster using Helm. 

MARK: Why are they called charts? 

MICHELLE: Oh, that's a very good question. 

[LAUGHTER] 

Matt Butcher, I'm going to let you take that one. 

MATT: Well, so when we very first started the Helm project, our first name for it was actually K8s Place-- K-8-S Place, which we thought was kind of cute. 

MICHELLE: I loved it. 

MATT: Yeah, and the original name of the package was something like K cubed, K3, or something like that. It was really pretentious. And as we got to talking about it, we thought, all right, so we've got this cute name K8s place and this pretentious package name, and neither of them really fit the nautical theme of Kubernetes, where Kubernetes really means "a pilot of a ship." 

So we hit the nautical dictionary. One of the co-founders of the project, Jack Francis, and I hit a nautical dictionary and sat around for about an hour reading definitions, trying to come up with a new name for the tool. And we eventually alighted on Helm as the name for the tool. And then once we were going with this nautical dictionary, we couldn't let good enough rest. So we decided to rename the package too. 

And we were kind of thinking, well, this is sort of like a road map or a street map for how you would install something into Kubernetes. And the CEO of Deis is a big sailor himself. Beau Vrolyk enjoys boating. And he said, you do not talk about them as maps. They're charts, nautical charts, and the name stuck. 

FRANCESC: It's a nice name. I like it. 

MATT: I was going to say, it's short. It's catchy. It's relatively direct as far as conveying that you're providing a set of instructions for how to do something. 

MARK: I guess that segue's kind of into an interesting thing as well-- the history of Helm. I think there was Helm, and then there was Deployment Manager, and now there's Helm Classic, or they melded and merged. What happened there? I didn't quite follow it all. 

MATT: Yeah, it's actually a really cool history. It's one you don't get a lot in the open source world. So a little over a year ago now, Deis started this Helm project. It actually came out of a hackathon. We were having an all-hands off-site meeting, and we set up a hackathon to try and come up with some good competitive projects to build teamwork and just enjoy some time together. 

So we formed these kind of ad hoc teams, and we were building stuff. Well, my team built this little package manager-y thing, the K8s Place thing I was talking about before. And the off-site ended, and we all went home. And it was a Friday afternoon, and I got a call from the CTO saying, you  know, that little hackathon project has some potential. Maybe we should start to actually develop it. And so the following Monday after we got back, we formed up a new team and started going on this. 

Now, what we didn't know at the time was that several Google engineers were also working on a similar project, which was a port of the GCP Deployment Manager project to Kubernetes. And so for a few months, we were roughly running in parity with them. And our emphasis at the time was the client side experience. 

We were trying to build Homebrew, where a lot of the packages are just downloaded locally, and then you're really oriented around the relationship between an individual user and a chart, which is what we were calling them at that point. Whereas Deployment Manager was really dealing more with the process of deployment and the process of allowing a team to together collaborate on how something could be deployed and then updated and maintained over its lifetime. 

So that was about October for us last year. Deployment Manager, I think, had its first public releases on November 1, if I recall correctly. Well, sometime around January, Google Seattle invited us to come up. And the developers of Deployment Manager sat down with us, and we talked about how we might be able to do something that happens very rarely in the open source world, which is to merge two projects. 

And so we put together a really rough plan there and sort of re-kick-started the project off. And we all liked the Helm name because it was relatively distinctive, so we kept that and sort of re-branded as Helm. And then gradually, what was the Helm client stayed the Helm client. 

But what was the Deployment Manager server became Tiller, which is the server-side component, the cluster-side component of Helm right now. Well, in the process of all of this, well, we had this original tool that was already kind of popular, called Helm, and so we re-branded that one to Helm Classic so that people could still continue using it while we explored uncharted waters, to keep playing up this nautical metaphor. 

MARK: Oh, wow. 

[LAUGHTER] 

MATT: Yeah, there  you go. I'm loaded with them. 

FRANCESC: Oh the pun. 

MARK: Oh, the fun. 

[LAUGHTER] 

MATT: Yeah, and so Helm Classic was kind of the original version of it. And then the Kubernetes Helm version, which is in the Kubernetes project and is incubated as an official Kubernetes project, that's the one that we're really moving forward and firing full steam ahead on. 

[LAUGHTER] 

MICHELLE: More of those. 

MATT: I'm going to just keep trying these nautical metaphors until I run out of them. 

FRANCESC: I'm looking forward to the next one. 

MATT: Me, too. [LAUGHING] 

FRANCESC: So I had a question regarding the point of view. So you were talking that Helm has a deep focus on the user, on the customer, right? But I'm curious about what if I have an application that I would like to offer on Helm as a chart? What is the process to do that? 

MICHELLE: Yeah, so there's two ways to publish or two avenues you can take to publish your chart. And the first one is you can build your own chart repository. So charts live in chart repositories, which are just simple HTTP servers that follow a particular format. 

Or you can submit your chart to the Kubernetes chart repository. And so if you go to github.com/kubernetes/charts, we have the source code for stable charts and incubator charts that people have submitted over the last few months to share with the community. And so if you have a chart that you know is working and you want to get feedback on, you might submit it to the incubator chart repository. And if you have more of a production -ready chart that meets deep technical requirements, then you would submit it to the stable chart repository. 

MARK: So what actually goes into a chart? Can you-- can you go-- like if I'm writing one, is there like a template language or something? 

FRANCESC: Is it a YAML file? 

MARK: Is it a YAML file, yeah. What's the deal? 

MATT: Isn't everything a YAML file now? 

FRANCESC: Yeah, hopefully, not JSON anymore. 

MICHELLE: I'm going to let Butcher take that one because he developed all of that. 

MATT: I was going to let you take that one, so I didn't have to answer it. 

[LAUGHTER] 

MICHELLE: I don't mind. [CHUCKLING] 

MATT: No, so a chart is a bundle of plain text files, really, for the most part. It references a Docker image that's got to be pushed to a registry somewhere, or it could reference a Docker image, I should say. But really, it's got a control manifest. It sort of tells you information about the chart, a readme file, a notes file, that tell you kind of how to use the chart. And then for the most part, the real meat of the chart is a set of YAML templates. 

There you go. There's the YAML, right? We used to Go Template language to be able to populate YAML files. And then we can upload the YAML files directly into Kubernetes, and Kubernetes understands those files natively. 

So the Go Template language has been pretty nice for us because it compiles very well and usually gives relatively helpful error messages and is very fast for us. And we can sandbox it very efficiently without having to worry about breakout conditions and things. But your typical chart runs probably four templates and then the chart.yaml control file and then a couple of text files to explain how to use it. 

Oh, and actually, in order to kind of get started with it-- because I know you led with that question. We realized very quickly that it's a pain to keep writing YAML files over and over again. And on top of that, there are a lot of patterns that really are common across many, many charts. 

So we built a command called HelmCreate that will allow you to create a new chart. So you can type in HelmCreate WordPress. And you'll have a stubbed out chart ready to go. And then you can just modify it from there, instead of having to start afresh each time. 

MARK: Cool. All right. So say I've written my chart, or I've gone to look the-- what is it? The stable or the incubating charts, and I went to install one. What does that look like? 

MICHELLE: So when you install the Helm tool, by default, we give you access to the stable charts. So you can simply do a Helm search on whatever keyword, or you can do a Helm search and pass in the repository name, and you'll see all of the charts that are available. And then if you want to add, say, your friend's chart repository to search through those as well, then you can run a Helm Repo Add commands to add that repository. And then you can search through those as well. 

MARK: And can I pass variables through? I know you said it was a sort of templating thing. What sort of controls do I have there? 

MATT: Yeah, so, the by default, when you're setting up your templates, one of the files it's good to provide with it is sort of a default values file, which is called values.yaml because we're really into our YAML files. And the values.yaml is basically, you can think of it sort of like as the etc file for your chart, right? 

It contains YAML data that gets pushed by default through the template engine. But more than that, it's sort of like a way for us to expose to developers, hey, here are the different little options that you can tweak and change easily with this chart by just passing in your own custom YAML file or your own custom values when you run the installer. So say I've got my WordPress chart. And I want to create my admin user account when I do the install. I don't want the default password for that account. 

So when I type in the Helm Install command, I can either give it a YAML overrides file that will override the configuration for that and maybe set user name colon mbutcher for that. Or I can use the set flag on the command line and set very particular configuration parameters. But in either case, really what we're doing is we're allowing the end user, the person who's consuming the chart, to be able to specify some of their own configuration custom right from the get go. 

MARK: Cool. I've got a fun question. If I do a Helm Install is it item potent? Like if I'm like trying to set up some infrastructure, and I'm automating it, and I just want to keep running it over and over again, is that the way it works? 

MATT: So, we actually-- that-- originally, we didn't do it that way. But over time, it has been more and more popular to be able to deploy Helm charts via CI/CD. And so we have introduced, first of all, a renewed effort to try and make them more item potent and also added some additional flags in there that will allow you to run one command. 

So Helm Install will put your chart into the cluster. And it'll start tracking that chart over time so you can recover history and so on. And then Helm Update is used to kind of re-release over and over-- or release updates. You change a configuration value. You run an update. You go from version 1.2.3 to 1.3.4. You run an update. 

But in order to make it possible to run it through a CI/CD system over and over again without having to query the cluster first, we just added some flags under the update command that basically, if you do Helm Update dash dash Install, it tells update, hey, try and update this. But if it already exists, just install it first. 

MARK: If it already exists or-- 

FRANCESC: If it doesn't exist. 

MATT: Did I get it backwards? Yeah, I got it backwards. Install it if it doesn't exist. Update it if it does. There we go. Yeah, I know my-- I can speak. [LAUGHING] 

MICHELLE: Also, that command is Upgrade. 

MATT: I said "Update," didn't I? 

MARK: OK, so Helm Upgrade Install. 

MICHELLE: Yes. 

FRANCESC: OK, cool. So I have a question. Before we were talking about Helm as a way for application developers basically to provide an easy way to deploy their application onto Kubernetes. But now you're talking about CI/CD. It makes me think, is it also a good tool for someone that-- like a company that they're using their own system to deploy in Kubernetes through CI/CD? Could that easier then just using Kubernetes files, like just plain Kubernetes config files? 

MATT: I think that the way that CI/CD systems get used is as sort of a-- well, for sure, kind of last mile piece of your equation, right? So as a developer, I need to build my application. Then I want to be able to test it locally and figure out how it's going to work. Then I want to contributed up to the repo. And then the CI/CD system takes over from there. 

And what Helm gives you-- the advantage that Helm really confers in this process over, say, just raw manifest files-- actually, there's several. But the first one is that it gives the developer that opportunity to fully test out and work this whole thing together, share it with other developers and things like that prior to it ever getting deployed. 

But then once we get into the release pipeline, this is where a chart ends up being very powerful, because a chart is basically immutable from the time you package it up, where it can get tracked, first of all, inside of the cluster, but also in these chart repositories elsewhere. And so if I'm pushing things into repositories and then pulling them out in CI/CD, I've got the exact records in the repository of what thing I pulled out. And I can pull it out, rebuild it, and so on. 

I've seen a lot of cases where people very successfully used just raw Kubernetes manifest files in their CI/CD system. But where it becomes problematic for them is in the development process, where oftentimes we fall back to the old-school model of throwing applications over the wall, where developers develop the application, and the Dev Ops team is responsible for packaging that and then somehow pushing it out to the cluster. 

But then when you come up with those bugs that seem to inevitably arise, where something fails as it goes through the staging or production process, and the developer simply says, hey, I only wrote the binary. The rest of that stuff is yours. And then there's this long back and forth over whose responsibility it is and what your particular compliance regulations say you can see about the production logs versus-- We feel like by packaging things, just like Debian and Fedora and all of those have done for years and years, we gain all those advantages of being able to reproduce locally, reproduce the same exact thing in a testing environment and then in production. 

MARK: I guess that makes a lot of sense, too. It kind of solves that problem that I've seen, where it's like, oh, locally, I want to have two instances of this and two instances of that and like one instance of that. But then in production, I want to have 300 of this and 300 of that. And so now maybe your defaults are two but your in-production environment variables are at 300. 

FRANCESC: So my next question is, can I deploy to MiniCube? 

MICHELLE: Yes, you can, absolutely. 

FRANCESC: OK, that makes for a very interesting development experience, I guess. 

MARK: Yeah, I really want to try this. This actually is just really, really cool. 

MATT: I think I think about half of the development team uses MiniCube for their development process. We try and mix it up a little bit. But honestly, the barrier to entry for MiniCube is so low, that we all sort of favor it and don't like trying to set up local Kubernetes clusters from scratch or anything like that. But between MiniCube and GKE, the Kubernetes world is just way too easy to get going on now. 

FRANCESC: Nice. 

MARK: Now, I want talk about-- I think it's a really interesting and fairly important thing too. I believe you can sign charts so they're verified from where they come from. Can one of you tell us a little bit more about that? 

MATT: Yeah, Michelle is going to point at me because this is one of those things that I have been rather insistent on. It is often the case that we forget about some of the security measures to begin with. And then we try and retrofit them back in later. And we're always afraid of doing it. 

I'm sure we're going to have to do that in some areas or another. But one of the things we decided we wanted to not overlook at the beginning was the trust factor when it came to packages. So in thinking through this thing, we thought, all right, well, we want to make it so that there are ways to establish trust, where you can say, I know this package came from so-and-so, and I know that it hasn't been modified since then. 

But on the flip side, we wanted to make it so that people who were in the development cycle or who didn't particularly care about that kind of thing didn't have to use it. And so we came up with a model that allows for signing of packages and also allows you to sort of optionally enable this kind of workflow so that it becomes sort of standard for you. So the way we modeled it was really after Debian's model, with a little bit of looking at Yum and the way that Red Hat has done it for a long time. And we signed packages with PGP keys so that we can establish some identity, and the clear sign block contains the SHA 256 sums of the files that are included so you can verify those sort of things-- very, very, very traditional, 

Uninspired, someone once told me, in regard to this. And I went, well, you know, OK, well, uninspired is OK in security, I think. But then so you can choose to sign your charts, if you want, and then you can choose to verify your charts when you install them, if you want. And then more recently, we've been working on sort of integrating this toolchain with things like Keybase. 

I'm really excited about Keybase because it makes public key cryptography sort of easy for non-cryptographers-- easy to gain trust on your identity, easy to integrate your GPG key with a reliable key-signing authority, stuff like that. And so we've been working a little bit on that. 

But then at the end of the day, we've been trying to figure out sort of how-- now that we've got these primitives, how do organizations want to be able to use this technology? And so we've tried to keep it unopinionated but then be able to give people some guidance in how you should issue your keys, and how you should sign your packages, and how you should tell people how to do that. That's going to be an ongoing challenge for us up through the 2.0 release, I think. 

FRANCESC: Cool. So since we're talking about 2.0 releases and the future, why don't you-- could share something that you're very excited about the roadmap? 

MICHELLE: Being able to test your charts once you've installed them automatically. That is something that I'm super pumped about. So you can install your chart and then run a test command that has some predefined definitions of what it means for success or for a successful installation of your chart. Being able to do that in an automated way is something that I'm very pumped about. 

FRANCESC: Cool. What about you, Matt? 

MATT: Oh, I'm honestly looking forward to hitting the stability marker because it'll give me a little bit of a break from implementing stuff. But I think other than testing, which I'm really, really excited about, Michelle's plan for that is really cool. I think that what I'm kind of looking forward to is getting to focus a little bit more on the developer experience for the person who's actually writing the code that's going to get packaged up into these applications. Because as a Python developer, it would be nice to be able to have some tools, even if they're meta tools that sit on top of Helm, that will help me get from my little block of Python code to a containerized application with a chart scaffolding around it that I can deploy with the Helm Install command. 

MARK: Cool. Well, we are running out of time a little bit. But I do want to touch on one thing. So if people want to get involved with Helm or they want to try Helm, what are the best resources? Where should people go? 

MICHELLE: The GitHub repository is definitely the best place to start. And all of the released binaries are there. You can use Homebrew to download Helm and install Helm. The Slack channel is really active. I looked yesterday, and there are 466 people in the Helm channel in the Kubernetes Slack. And everybody's very actively discussing and analyzing chart design patterns and figuring things out and bouncing ideas off each other. So that's a great place to go if you've got questions, as always, the issue queue. 

I do highly recommend-- because I'm biased-- to come to the SIG Apps meetings on Mondays. Matt usually gives us a Helm update there. And there have been several demos of charts in Helm being used in CI/CD and really all over the place. So if you want to see use cases, SIG Apps is the place to go. 

MATT: SIG Apps is also a great place just to see cool demos of what people are doing with Kubernetes. It's a great entry point into Kubernetes. 

MICHELLE: Yeah. The focus of SIG Apps mainly to share with the community how to define, run, and manage applications in Kubernetes. And so it's a mix of Kubernetes users and Kubernetes developers. And what we get is this rich feedback loop of users are saying, here are the tools we're using, and here are the problems we're running into. And then developers going, well, I can fix your problem, or let me know what features you want, and discussing those kinds of things. 

MARK: Cool. We are definitely running out of time. But is there anything else that we haven't talked about that you want to talk about quickly that hasn't been touched on or a feature that you think should be publicly talked about? 

MATT: Oh, well, for sure we should thank the community around Helm. Like I said, I can't think of many open source projects that have formed by two other projects combining together. And people have just dropped in to help all over the place from dozens of companies. 

Bitnami and Google, in particular, have contributed vast amounts of help and resources Bitnami and Google, together, have now taken over ownership of the charts repository, which has been fabulous. And every day we watch people come in. 

Sometimes they make a one-line commit to the doc. Sometimes they just bring up situations we've never heard of. It's a really fun, laid back, and awesome community. And we'd be remiss if we didn't thank them every opportunity we had, because it's just such a fun thing to do day after day. 

MARK: Michelle? 

MICHELLE: I have to say the same thing, actually. This is my first time being a part of the larger-scale open source community. And it's been a fantastic experience. I've gotten the chance and the opportunity to meet so many cool people from different companies that just want to help. And that's been a fantastic experience for me. 

FRANCESC: That is awesome. I think that is a great way to finish our interview. So thank you so much for taking the time to teach us and talk to us about Helm and charts and all the nautical puns. 

[LAUGHTER] 

MATT: Yeah, thank you guys-- 

MICHELLE: Thanks. 

MATT: --very much for having us. 

MARK: Thanks so much for such an excellent interview, Michelle and Matthew. That was fantastic. I'm really, really excited to sit down and play with Helm now. 

FRANCESC: Yeah, that was lots of fun. And actually, once we finished the interview, we were discussing about something really cool that we didn't mention, which is something that we used as a cool thing of the week, like couple of months ago probably. It is "The Little Guide to Kubernetes" that came up from the same hackathon as Helm. So we'll have a link on that. But it's basically the cutest guide to learning Kubernetes you could ever imagine. 

MARK: Yeah, it's adorably illustrated. 

FRANCESC: Yeah, and it is actually technically accurate, so yay. Yep, definitely worth checking. So I think it's time to go for our Question of the Week. So the Question of the Week today is about Docker images in the cloud. And basically it is, OK, so I have an image that I want to build regularly. 

So imagine that, for instance, you have something, you have a project. And every single time you have a comment on GitHub, you want to create a new image. And there's ways of doing this. But is there a Google Cloud Platform way of doing it? 

MARK: Yeah, so there is totally a Google Cloud Platform from way of doing it. We have this service that's currently in beta called Google Cloud Container Builder. It is literally exactly what you described it as. It's a REST API that you can send a series of commands to. And the final output is a Docker container image, which then gets served up to GCR.io, so like our Google Container Registry. 

And so it's a really nice way of if you're using Google containers registries and you have like a CI or CD system or some sort of automation for building these container images, it's an easy way of basically saying, hey, I would like to build one of those, push that up into the container registry. And then I want to serve that maybe to Container Engine, Compute Engine, App Engine, Flexible Environment, anywhere from there. 

FRANCESC: Yeah, I think it is a pretty interesting thing to mention a little bit about Google Container Registry. So Google Container Registry, for those that might have never heard about it, it is just a container registry, so nothing really fancy there. But it is private, so only your project, your Google Cloud Platform project has access to it. 

So it basically removes all the issues on, oh, I want to have a Docker image, and I want to be able to pull it from somewhere. But I don't want to make it public. I don't want other people to see it. So it is a very good solution for that. 

MARK: Yeah, and of course, that also ties into all of our security stuff as well. So you already know it's secure. And you can control who accesses it and whatnot, so it's pretty awesome. 

FRANCESC: And it's also in the same network. So the deployment will be faster and all the goodness. 

MARK: Yeah. So that's pretty cool. I think that kind of brings us to our end. What are you up to? Where are you going? What are you doing? 

FRANCESC: So by the time the podcast comes out, I'll be probably on my way to the airport to fly to Brazil. I'll be going to Florianopolis to speak at GopherCon Brazil. 

MARK: Nice. 

FRANCESC: And the week after that I'll still be in Brazil. This time in Sao Paulo to speak and actually kind of organize, which is lots of fun-- GCPNext Sao Paulo. We're going to be talking about all the new things that we're working on for Google Cloud Platform. So the keynote will be live streamed. So we'll have a link to that so in case you want to check it out. That will be November 10. What about you? 

MARK: I'm doing a lot less than that, thankfully. So when this comes out, I will be at the Unite conference, the Unity conference. I'll just be attending. So please feel free to say hello. After that, I think I'm done. I think I'm not traveling again while. 

FRANCESC: Wow. 

MARK: I say that now, but it'll change. 

FRANCESC: Yeah, I was going to say, wow, so lazy. But at the same time, I don't believe it. 

[LAUGHTER] 

So thanks again, one more time, for recording an episode with me. And this is actually-- we're number 50 episode, which is kind of crazy. 

MARK: That's amazing. 

FRANCESC: Yeah, and we just passed our first anniversary recording the podcast. 

MARK: Yeah. The first one. 

FRANCESC: Yeah. It's been a long, long time. Yeah, and since then, I lost my accent completely. 

MARK: Completely. I don't hear it. 

FRANCESC: Absolutely. 

MARK: Yeah. 

FRANCESC: Yeah, so thank you, and thank you all for listening. 

MARK: Yeah, and see you all next week. 
{{< /transcript >}}