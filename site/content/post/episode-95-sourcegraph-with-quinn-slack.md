+++
audioDuration = "00:32:58"
audioFile = "Google.Cloud.Platform.Podcast.Episode.95.mp3"
audioSize = 47709448
categories = ["Customer", "Go", "GKE"]
date = "2017-09-20T01:07:49Z"
description = "Sourcegraph provides navigation tools for source code, and it's powered by Go and Google Cloud Platform. Quinn Slack, CEO and co-founder, joins us to discuss how they built their features on top of our infrastructure."
draft = false
episodeNumber = 95
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Sourcegraph with Quinn Slack"
image="/images/post/sourcegraph.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/bgMUjz4RBoK"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/71d3g9/episode_95_sourcegraph_with_quinn_slack/"
+++

[Sourcegraph](https://sourcegraph.com) provides navigation tools for source code,
and it's powered by Go and Google Cloud Platform.
[Quinn Slack](https://twitter.com/sqs), CEO and co-founder, joins your co-hosts
[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
to discuss how they built their features on top of our infrastructure.

<!--more-->

##### About Quinn Slack

[Quinn Slack](https://twitter.com/sqs) is CEO and co-founder of Sourcegraph,
code intelligence software that lets software teams ship better and faster.
Prior to Sourcegraph, Quinn co-founded Blend, an enterprise technology company
with over 150 employees dedicated to improving home lending.

His long-term goal is to build the products and infrastructure to support the
future world where billions of people have coding fluency (just as billions
of people today can read and write).

##### Cool things of the week

- Introducing managed SSL for Google App Engine [announcement](https://cloudplatform.googleblog.com/2017/09/introducing-managed-SSL-for-Google-App-Engine.html)
- With Forseti, Spotify and Google release GCP security tools to open source community [announcement](https://cloudplatform.googleblog.com/2017/09/with-Forseti-Spotify-and-Google-release-GCP-security-tools-to-open-source-community15.html)
- Global Kubernetes in 3 Steps on GCP [medium](https://medium.com/google-cloud/global-kubernetes-in-3-steps-on-gcp-8a3585ec8547) by [Christopher Grant](https://twitter.com/cgrant)

##### Interview

- [Sourcegraph](https://sourcegraph.com)
- Sourcegraph source code [GitHub](https://github.com/sourcegraph)
- Google Container Engine
- Helm [GitHub](https://github.com/kubernetes/helm)
  - [GCPPodcast #50 Helm with Michelle Noorali and Matthew Butcher](https://www.gcppodcast.com/post/episode-50-helm-with-michelle-noorali-and-matthew-butcher/)

<div style="text-align: center">
  <a href="https://sourcegraph.com"><img src="/images/post/sourcegraph.png" style="margin: auto; max-width:300px"></a>
   <p style="font-size:0.8em">sourcegraph.com<p>
</div>

##### Question of the week

How can I automatically redact Personally Identifiable Information (PII)
or other sensitive information?

- Data Loss Prevention API [docs](https://cloud.google.com/dlp/)
- Demo of Data Loss Prevention at Cloud Summit Sydney [YouTube](https://www.youtube.com/watch?time_continue=1680&v=wIc7Im09QIs)

##### Where can you find us next?

Francesc will be presenting at [Google Cloud Summit in Chicago](https://cloudplatformonline.com/summit-chicago-2017-schedule.html) next week.
In October, he'll be presenting at [Velocity London](https://conferences.oreilly.com/velocity/vl-eu), [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html) and [Devfest Nantes](https://devfest.gdgnantes.com/)

Mark is attending [Strangeloop](https://www.thestrangeloop.com/) in September.
He is also heading to Australia in October for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 95 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy. And I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm so much more awake than you are. 

FRANCESC: I know. Today is my second Monday this week. And it is hard. I just flew back from Sydney, landed a couple hours ago. So yes, indeed, I am very, very, very jet-lagged. 

MARK: So podcast listeners, say thank you to Francesc, send him tweets, send him pictures of puppies. He came directly from the airport, just so we could record the episode. 

FRANCESC: Yeah, I might not read them because I might be sleeping by the time you send those pictures. But yeah, I think it's going to be worth it. Because we have a lot of really Cool Things of the Week. There's some of the Cool Things of the Week today that I'm very, very excited about. And then, for the main content, we're going to have a friend of mine, Quinn Slack. He's the CEO and co-founder of Sourcegraph. 

And Sourcegraph is a company that they use Go, basically. And they allow you to do advanced navigation of source code, but directly in your browser. And it is really cool. It works not only for Go but for many languages. And the infrastructure behind also runs on Google Cloud. So he's going to come and explain a little bit about all of the cool things they do, and how they do it, and why they do it that way. 

MARK: Yeah, and finally after that, we will have our Question of the Week, talking about, basically, how do I remove personally identifiable information, say I have a stream of data coming from outside-- so user generated content-- what can I do to get rid of that in an automated fashion? 

FRANCESC: Yeah, it is an interesting question with a very, very interesting answer. It's an API. But that will be later. So we're going to go directly with the Cool Things of the Week then. The first one-- and I am very, very excited about this one because I've been waiting for it for quite a while-- it is that we finally have managed SSL for Google App Engine. And what that means is that now you do not need to create or even manage your HTTPS certificates for App Engine when you're using custom domains. 

Until right now, if you got an address, it was something.appspot.com, and that one came with HTTPS automatically. But if you were trying to do something else, like GCPodcast.com, for instance, you needed to manage that. Now, you don't need to do that anymore. Everything is [? domained. ?] And everyone is happy. 

MARK: Arrr, it's fantastic. 

FRANCESC: Oh yeah, also-- oh wow, that was really bad. It's another Cool Thing of the Week. Today is Talk Like a Pirate Day. 

MARK: I had to slip that in there. 

FRANCESC: It's a very bad joke. What's the favorite primary language of pirates? 

MARK: R. 

FRANCESC: R, exactly. 

MARK: That is a terrible joke. 

FRANCESC: I know. But it's totally on topic. Anyway, we have a second Cool Thing of the Week that comes from our friends at Spotify. 

MARK: Yeah, so Spotify has been working directly with GCP Security Team, releasing a product called Forseti. Forseti is really cool. It's an open source tool that enables you to basically do several things over your Google Cloud Platform project. Basically, if you think about it in terms of you're like, I'm going to deploy a bunch of stuff on the Google Cloud Platform, but I want to ensure that I have visibility into exactly what's happening, but then also be able to scan and enforce certain security rules about what I want to have happen. 

So if say, for example, I want to have certain firewall rules across maybe my GCE instances or other things like that, this gives me a way to basically be like, OK, let's look at what's available inside our system. Let's see if it has the rules that are applied to it. And if they're not applied to it, let's make sure that those things are there and make sure that that happens, which is security good and stuff. 

FRANCESC: I really like it. Because if you have enough instances, these kind of things will happen. Someone will forget, someone will be doing a little test and open an SSH port, and then forget about it. And then, now you have an attack vector. 

MARK: Yeah, and even if you're automating it with Ansible, or Chef, or Puppet, maybe something goes wrong, it's just an extra layer there to basically say, let's just make sure this is always locked down. 

FRANCESC: Instead of only just warning, but you can actually say, OK, just drop that, add a rule, close that port. So perfect, it's very, very nice and completely open source. And I wonder if it's written in Go. It's probably written in Go. 

MARK: Yeah, while you're looking that up, I will talk about the last one. There is a "Medium" article by-- I'm going to read the name off the post here-- Christopher Grant, or possibly Grant, depending on which country he comes from, talking about building global Kubernetes in three steps on Google Cloud Platform. I particularly like this. Because I was literally reading this morning about how to set up federated clusters in Kubernetes. 

And I was pulling my hair out trying to work out, what's just the simple steps for how to do this. He's written a "Medium" post that shows you how to use kubefed, basically just step, by step, by step. This is how you set up each of the clusters. This is how you create aliases for them, join them up, and then deploy your application across the several clusters that span the globe, which was just super nice to use. 

FRANCESC: Cool. It's written in Python. 

MARK: It's written in Python. That's OK. You'll live. 

FRANCESC: Yeah, I'm very sad. No, Python is cool, too. Anyway, I think it's time to go talk to Quinn about Sourcegraph. 

MARK: Let's do that. 

FRANCESC: I am very happy today to welcome to the podcast Quinn Slack. He's the CEO of a company called Sourcegraph that I think I've talked about many times before. And he's here to tell us a little bit about what they do at Sourcegraph and how they use Google Cloud. So hello, Quinn. How are you doing? 

QUINN: Hey, I'm doing great. Thanks for having me on. 

FRANCESC: Thank you for coming. We're going to be talking a lot about all of the things that you do at Sourcegraph. It's a very interesting company. Especially in the Go community, you're pretty well known. But before we start with that, why don't you tell us a little bit about who you are and what do you do at Sourcegraph? 

QUINN: All right, I am, again, Quinn. And I'm the founder and CEO of Sourcegraph. We build a universal code browser. So if you're a developer and you work with tons and tons of code, reading code, writing code, across a lot of different projects, then we have a product that helps you do that. 

It makes it much easier to read code, to jump around, get all the ID-like features, whether you're on GitHub, whether you're reading code elsewhere on the web, across all the projects at your company. We have customers with thousands of repositories. We have users who jump around 10, 20, 30 open source repositories. And our product makes that a lot easier for you to read. 

MARK: So OK, so this sounds quite interesting what it is that you work on. But can you give us a higher level? How is this different from, say, somebody using just a regular ID or searching for something in GitHub? 

QUINN: Different in a few ways-- so your IDE is optimized for editing code and usually in one project. And maybe 10, 20 years ago, if you were a developer, you could just be working on one project. But these days, you have to use so much open source code or so many other microservices in your company. And the job of a developer has gotten a lot harder. So we built a product from the ground up that actually understands cross-repository references, linkages. 

So you can point to any piece of code. You can say show me everywhere in the open source world, or everywhere in my company this thing is being called. You can instantly search across all your repositories, hundreds or thousands of repositories at any version. You don't need to wait for them to be indexed. 

And so the tools that we have as developers today, I think they solve the problems we had maybe 10 years ago. But with the explosion of open source, microservices, a lot more things, the job has just gotten a lot harder. And we're building the tools to help developers solve these problems today. 

FRANCESC: Cool, and that basically is a web application where people can browse the code on everything. But it's also a Chrome extension, right? 

QUINN: Right. So you can get Sourcegraph on the desktop. And that is something that you download. And you can browse all your local code. You can browse remote code. And it's a universal code browser. It makes all the world's code transparently available to you. 

And inside of that, of course, we have language analyzers, which we call language servers, built on Microsoft's Language Server Protocol, which is the new standard. It was released about a year ago. And already, you have servers for most languages. And it's a really cool new standard. We have a lot of people working on language servers internally and a lot of other people at other companies. 

And then, yeah, you can access it on the desktop. You can get it in our Chrome extension on GitHub. So you can be viewing code on GitHub. You can be looking at a pull request. And you put your mouse over any token and you get a hover. 

You can do find references. You can do go to definition. And you can get it integrated into your own editor. You can get it on the CLI. And you can get it in a web app. 

FRANCESC: I really like that. That Chrome extension is something that I use daily. Whenever I visit GitHub and it's not on, I just feel like GitHub is broken. Because there's no hover. And then, I realize that, oh yeah, it's not part of GitHub. It's actually part of Sourcegraph. It is a very cool tool. 

OK, so I think that with this, pretty much, people have a pretty good idea of what Sourcegraph does and what is the use case. So let's get into tech. So OK, you have some clients, desktop client, web client. And then you have some servers. What are those services running? 

QUINN: Good question. The servers are running on Google Cloud. 

FRANCESC: That's good. 

QUINN: And in Kubernetes. 

FRANCESC: Cool, so is that on GKE, on Google Container Engine? 

QUINN: Yeah, it's on GKE. And we love it. We decided a couple of years ago to go all Kubernetes. We can go into a bunch of different reasons, both technical and business reasons. 

FRANCESC: Yeah, give us one. 

QUINN: Cool. 

MARK: Yeah, please do. 

QUINN: All right, so I am the CEO and founder, but I'm also a dev and I've been coding for a long time. So I get to see both reasons why we made this choice. First, let's start out with the technical reasons for making the choice. There's the developer aesthetic reason. You look at Kubernetes and you can tell that it's a deployment system, just built by people who've been thinking about this problem for a decade or more. 

And Google understands how to build a solution to this problem better than probably any other company out there. All these little things that we never would have thought of in our own deployment system, and other systems wouldn't have thought of, Kubernetes has addressed. Or you can look at the roadmap and you know they're going to address it. I love that it's written in Go, that you can read the code, that the CLI is really good. 

I just feel like it was built for people like us. And the other technical reason is just it works very well. It was easy to get up and running. It's well-documented. It's a standard tool. 

And then, of course, we tried it out locally. And we wanted to see where we could deploy this. And we saw that Google Cloud, obviously, they have native support for Kubernetes. And you get the feeling that Google Cloud was built with Kubernetes in mind. So that's why we went with it for technical reasons. 

MARK: Cool, so you sound like you're doing a bit more than, say, your standard web app or something like that. How are you using Kubernetes? Are you using it in stateless ways? Are you using it for stateful ways? Are you using deployments? Stateful sets? Are you using the Jobs API? How are you using GKE? 

QUINN: We started using it two years ago when a lot of these things were not available. And we have a few things, a few design decisions we made with our application that made things easier for us. We actually don't need to store a lot of state. 

So when you go on Sourcegraph, and you mouse over something, and you see a hover, that's actually being served in real time from a language server process running somewhere in our Kubernetes cluster. So not a lot of state, and the tiny amount of data that we do need to store, it's either one index around cross-browser references or just a cache. 

So we have our web server front-end process running. That has GraphQL and WebSocket APIs. The WebSocket one is for the language server protocol. We have a proxy that the web server will send a language server request to. 

And then, the proxy will figure out, do I need to spin up another Go process or Go server to serve that? And then, it'll send it to one of the language server back-ends. And that will fetch all the repo data from our Git server, also running in the same cluster in Kubernetes. And it'll do all the language analysis, whether that's in Go, or Java, or TypeScript, or Python, or C#, or whatever. And it'll return back through the WebSocket and back to the client. 

FRANCESC: Cool, so I'm wondering-- you mentioned that you like Kubernetes partly because it's written in Go. Is Sourcegraph also written in Go? 

QUINN: Oh yeah. From day one, we wrote Sourcegraph in Go. And initially, we chose Go because Sourcegraph is something that understands source code. And Go has amazing libraries, even in the standard library, for understanding its own source code. So it was the natural choice. And we also had been coming-- my co-founder and I-- from jobs where we were writing other languages, which will not be named. 

And Go is really nice to start working in. And since then, we've grown to other languages. We still love Go. We still write all of our stuff in Go. But we have customers and users across a bunch of different other languages. And generally, when we write the Python language server, we'll do that in Python. So we are polyglot. But we have a special place in our heart for Go. 

FRANCESC: And I guess that that's also one of the benefits of running on Kubernetes is, no matter what language you have, you put it in a Docker container, and then you're ready to go. 

QUINN: Yeah. 

FRANCESC: Nice. 

QUINN: Yeah, so I want to talk about the business reasons too for Kubernetes. 

FRANCESC: Oh, go for it. 

QUINN: Because I've got to think about both. And our product is obviously loved by a lot of people and open source. But it is for companies. It is for companies with a lot of code. And for those companies, it is important to them that their code stays secure. It's important that they run a lot of their core services in their own infrastructure. And it is a really important business decision for us how we deliver our software to these customers. 

We wanted to make sure that we built it so that it is so easy for a customer to run Sourcegraph internally. And that meant not being tied to any specific vendor's way of deploying or orchestrating an application. So if we have customers across all different kinds of clouds, then by using Kubernetes, that is kind of the standard. 

And it's not the case that every single one of our customers is already using Kubernetes and we can just slot that in. But it is a very easy sell to them to say, we are built on Kubernetes. And we'll ship this to you as a Helm Chart. And luckily, our audience is developers, and so they get that. And even if they're not using Kubernetes now, they can sense that they will be using it in the future. 

FRANCESC: Yeah, you just stole my question. I was going to ask you. You were saying, well, one of the reasons we want to run it on Kubernetes. So it's easy to install it and run it anywhere, where they have Kubernetes. 

And you mentioned Helm, which I love. We had an episode on Helm some time ago. I'm sure you can find it if you search for it. Why are using Helm? Tell us a little bit more about the experience using it. I'm curious. 

QUINN: Well, I don't know as much about Helm. I am a user of it. I was not the person who created our Helm Charts. That was one of our teammates, Richard, who also works on GopherJS, the Go to JavaScript compiler. So yeah, you should direct any questions on that to him. He's the expert on that. 

FRANCESC: Really cool. So for those that are interested in Helm, we actually have an episode, according to Mark. Thank you, Mark. 

MARK: That's all right. 

FRANCESC: What was it? Episode 50. We have Michelle Noorali and Matthew Butcher. So go check it out if you're curious about Helm. I say that Helm is basically apt-get for Kubernetes. I don't know if that's correct or not. But I like to say it's like that. 

MARK: That's about right. Cool, so it sounds like you are using basically open source, which is awesome for running your applications. What are you using for monitoring? Are you using our stuff? Or do you use something else? 

QUINN: We use LightStep, which is based on the OpenTracing open source protocol for tracing. And we've instrumented our language servers, our Go servers, and even some of our other infrastructure to just send up traces. And I know that that was built by some former Google Cloud people. And it's based on a system that you guys have at Google. So I'd like to think that it's still somewhat in the Google Cloud family. But we love LightStep. 

FRANCESC: Cool. At some point, you mentioned a little bit about the fact that you were storing some cache. Where are you storing? In general, what kind of storage are you using for your Sourcegraph? 

QUINN: We have a couple pods that have Postgres servers in our Kubernetes cluster. And they do not use any special kind of persistence. If those end up dying for whatever reason, then they'll just come right back up. And we'll kick off the indexing jobs. We built everything about our infrastructure so that, if the data went away, even the global index went away, that we could recreate it in minutes, even for all of the open source code that matters. 

So system design was really important. If we hadn't optimized the system to be super fast on the fly for answering any specific question and to do only the minimal amount of computation necessary to answer that question, then I think we would have to think more about persistence. We'd have to at least have our Kubernetes setup be a lot more complex. It would be a lot more fragile. But because we built our system around not persisting data, it makes our job a lot easier. 

MARK: Interesting. And I know, as well, you said you've got a KREM plugin. I know you've also got some IDE integrations. How are you making that connection, monitoring that connection, checking latency? How is that whole pathway from I'm going to assume GKE up into the browser and/or your IDE integrations as well? 

QUINN: This is like one of those classic CS interview questions. Tell me everything that happens when you type in www.google.com. So from the user's point of view, they have our Chrome extension. And they go to GitHub. They put their mouse over, say, a function call. What happens there is that will issue just a normal HTTP post request to our servers. 

That is actually a post request. It's like a single shot LSP session, using the language server protocol to say hey, get me this hover for this file and this repo at this character. That will go to our front-end server. And then, that will open a WebSocket via this language server proxy that we have to the language server back-end. 

It will spin up a language server for that repo at that commit, fetch the files, again fetching the minimum set of files necessary to answer that question. And then it'll return the data. And you'll just get a single HTTP response on the client. And then you'll show that in a little tool tip. 

MARK: So now, I'm just actually curious. That WebSocket connection, is that internal? Or is that to the browser? 

QUINN: It depends on the client. Our Chrome extension doesn't open a WebSocket to our server. And if you're on Sourcegraph.com or our desktop app, then that will open a WebSocket. No good reason for doing WebSocket versus not, other than we look at average duration of session. And we can optimize it a little bit better if it's just a single HTTP post request. Then we know that we can clean up the resources when that's done. And generally, the average number of hovers that someone does in our Chrome extension is less than the number of hovers they do on an average Sourcegraph.com session, just some internal stuff like that. 

FRANCESC: Cool, so still talking about the same topic of how you connect from your clients to your servers, you said that you're using mostly either HTTP requests, like one-off requests, or you're using WebSockets. I'm curious. Are you using HTTP/2? Why not like HTTP/2 with streaming or maybe even gRPC on top of it? 

QUINN: Well, we do use HTTP/2. We have the server do push for some of our assets. And that results in a pretty nice performance increase on the initial load. We use WebSockets for LSP because there were good libraries to do that already. 

We used to use gRPC for some things, like fetch me a list of the repositories that a user can view. But so much of the client activity was occurring from browser clients. And at the time, gRPC didn't have good support, either for issuing requests or for making a RESTful API, which we still needed for other reasons. The gRPC HTTP Gateway Project looks super exciting. But by the time that we needed some things out of our API that it didn't support, it wasn't far enough along. 

MARK: That seems reasonable. 

FRANCESC: Cool, so we've talked a little bit about monitoring, and tracing, and all of these things will generate a decent amount of data. So I'm curious about what do you do with that data afterwards. 

QUINN: Well, for things like performance tracing and event logging, we use other services, like LightStep, that just collect all the data. And we offload that to them. This is for Sourcegraph.com. So this is cloud data. It was just sent over to gRPC protocol using OpenTracing to LightStep. 

And then we can see, actually, for any operation that occurs on the site what was the entire trace of every operation that happened. There's actually a debug setting, if you are an intrepid Sourcegraph user, where you can turn on the ability to get little LightStep links to any operation you perform. And there have been some times where we've asked users to turn that on. And it's been super useful to collect that. 

MARK: Do you store it in any intermediary step? Do you use Google Cloud Storage? Or is it just sent directly off to your third party services? 

QUINN: Yeah, right now, some of the logs are stored in a Bucket on Google Cloud Storage. And then, that gets ingested into BigQuery. We have some other intermediate jobs to associate different machines, log data, apply other transformations to it, normalizations. And then that gets sent to BigQuery. And then on top of BigQuery, we will run some automated queries on BigQuery to do reporting. And that shows up in our Slack. And we'll also look at the data through a bunch of dashboards that we've created on Looker. 

FRANCESC: Cool, so does that mean that most of the logging that you do is structured logging? 

QUINN: Yeah. 

FRANCESC: Cool, so you're logging structurally. You send it to BigQuery. And you just keep it there for reports. But do you ever use it as a debug tool, like to figure out what happened to a request or not that much? 

QUINN: Not that much. Maybe everyone thinks that they're special in this way. But because so much of our system is real time, there's not a lot of persistent data. For most things, we can reproduce the issues by just running things locally. 

FRANCESC: Oh, that's nice. 

QUINN: Because it doesn't depend on state that's stored somewhere else. And we've built our system so that we have a lot of test cases of here is a really complicated Java project. Can you produce the right hover for this token? And we try to make everything a pure function as much as possible. 

So we were actually just talking with someone else who runs ops for a pretty big company elsewhere in San Francisco. And he was asking, how much of your day is spent on ops fire drills, and p0's, and all of that? And I showed him our ops log, where we record every p0. And there are not a lot of them. And I think that's because the way that we built our system and because we built it on a bunch of primitive components that work really well. 

FRANCESC: Yeah, because it's written in Go. 

QUINN: Yeah, well, there are no bugs in Go. 

FRANCESC: Of course. 

QUINN: Except when I write it. 

FRANCESC: So now, I'm curious about open source. You mentioned that you're running-- most of the thing is written in Go, which is open source. It runs on Kubernetes, which is open source. You used to use gRPC, not any more. But gRPC was also open source. What about other projects? Have you can see there are things like Prometheus, [? Cistia? ?] What do you think about them? 

QUINN: Yeah, we do use Prometheus. We use Graphite. And we use a lot of open source language servers. We have released a lot of open source language servers for language analysis. And we have a bunch of other open source projects that are on GitHub.com/Sourcegraph that various people are using, mostly in Go. 

FRANCESC: Cool, and all of this is in Sourcegraph on GitHub directly? 

QUINN: Yeah. 

FRANCESC: GitHub.com/Sourcegraph? 

QUINN: That's it. 

FRANCESC: Easy, OK, cool. 

MARK: Awesome. This all sounds super cool. I'll ask one question as well, because now I'm just interested in Sourcegraph. And I've never really played with it. If I want to play with Sourcegraph, where do I start? Can I just use it on GitHub for free on that? Or do I have to pay? How do I play with this thing, if I'm quite keen on it? 

QUINN: Yeah, Sourcegraph is totally free for open source. So just go on Sourcegraph.com. You can sign up. And then, you can just start clicking around on your repositories or just go to the Chrome Web Store, type in Sourcegraph, get our Chrome extension, and then just start looking at code on GitHub. If you want to look at private code, then you'll obviously have to log in. But for open source code, it's just going to work. Just put your mouse over a token, and you'll see the hover. 

FRANCESC: I cannot recommend that enough, just adding the Chrome extension makes GitHub so much easier to use. Things like go to the Phoenician on a web page, it just blows my mind, so useful. 

QUINN: Yeah, we think that developers deserve things like go to definition, find references, all these things anywhere they're looking at code. Whether it's in their browser, their editor, random other web pages, it should be like water. It should be always available. 

FRANCESC: Cool, I'm going to ask one more question that might be a complicated question to ask. But we just did an episode on Kubernetes 1.7. And there was a lot of new features. Do you know if there's any of these features that are interesting for you? Or are you more like a core user of Kubernetes services and stuff? 

QUINN: I don't know. 

FRANCESC: That's totally fine. 

MARK: Awesome, all right, well, before we wrap up, is there anything that we haven't managed to mention or something you want to plug, maybe events you'll be at or particularly cool things you've seen from Sourcegraph that you think will be on the podcast before we finish up? 

QUINN: Well, I want to just plug GopherCon, which we went to a few months ago. We had a fantastic time. We had a bunch of Sourcegraphers there, met a lot of our users and customers. We did something that was really fun. And I would encourage everyone listening to participate in the future. We live-blogged the conference. So we would just sit in the talk. And we'd be typing as the person was talking. 

And at the end, we'd have a live blog post that we could just click Publish on. And then everyone who couldn't make it at the conference could see what was going on and follow along. It was a ton of fun. We got a lot of community volunteers to do it. And we're going be doing that at a lot more conferences. DotGo will be one of them, and other conferences in other languages as well. So if you hear of a live blog going on, then shoot us an email, if you want to participate by writing or even helping us edit. 

FRANCESC: Great, so thank you so much for being so active in the Go community and the open source community. But also thank you so much for being here today and telling us a little more about Sourcegraph and what you do with Google Cloud. 

QUINN: Thank you. Thank you for making it so I can come and spend some time with you all instead of having to deal with all the ops and systems work. You take care of all that for us. 

FRANCESC: Thank you. 

MARK: So a huge thanks to Quinn for joining us on the podcast to talk all about Sourcegraph. It sounds like a super interesting project. I'm actually a huge IntelliJ user. They've got integrations with everything, as we talked about. So I'm keen to get it installed and see what interesting stuff I can find out about my source and give me some nice hints on what I can do with it. 

FRANCESC: Yeah, for me, really, it is just like the integration with Chrome that allows me to just browse code on GitHub in a much easier way, to the point that when I use an other profile where it is not installed, it just feels like something is missing. So that's a good thing for an extension. Anyway, it's time to go with our Question of the Week. 

And the Question of the Week is basically, OK, so I have information and I'm storing information. But some of that information should not be stored, right? Let's say that you have a chat, for instance. And normally, you expect people to talk to you and tell you things, right? And one of the things that you may ask is, oh, just to make sure that you're the right person, please give me the last four digits of your credit card or your social security number, the last four digits. And someone by mistake gives the whole thing. What do you do now? You cannot just store that. 

MARK: No, that's bad. Or somebody sends a photo of their license maybe or-- 

FRANCESC: Yeah, there's a lot of information that is private. Or even more than that, you can have things like IPs. Or a lot of information that goes into logs, you just really want to make sure that those things are not actually stored and made persistent, so other people might find them later on, right? Also, it goes against a bunch of rules actually. 

MARK: Yeah, there's a bunch of compliance stuff that that goes against. 

FRANCESC: Yeah, a bunch of compliance things that would stop you. 

MARK: All right, cool. So I don't want to set up a huge number of humans going through all this stuff. Because that's obviously not going to scale. 

FRANCESC: So? 

MARK: What tools do I have available to me? 

FRANCESC: TensorFlow. 

MARK: First, we need a model. I think that's the answer to everything. 

FRANCESC: You train the model. Actually, I mean, you could technically do it, right? With TensorFlow, you train it so it recognizes what a credit card is. Then it recognizes what a Social Security card looks like and stuff like that. And then you would be able to delete those things. 

And that's what Google has done. And rather than publishing as a TensorFlow model, it is simply an API. So it's like the Cloud Vision API, where you just send an image and it classifies it. 

In this case, what you do is you can send either text or images. And in the images, it will find things inside of the image and sensor or redact the part that is actually PII, Personally Identifiable Information. When you are using it, you can say exactly what parts you want to redact. So for instance, you could say, I do not consider faces to be something that I should redact. 

Or you could say, actually yes, if there's a picture of anything, make sure that there's no faces on it, right? And there's things, for instance, Google Street View, that's right. You do not see faces on Google Street View. You could do the same with these APIs. It's simple. The cool thing is that I actually demoed this in Sydney last week on Wednesday. And it was lots of fun. So we'll have a link on the show notes so you can check it out. It's a five minute demo, really quick. But it ends up with a pretty good joke, in my opinion. I made it myself. So I don't know. 

MARK: So you're a little biased? 

FRANCESC: Yeah, I'm a little bit biased. But I'd say it was a pretty good joke. People laughed. But they were Australian. Maybe they were just nice. 

MARK: Yeah, maybe, maybe not. 

FRANCESC: Nah, Australian people are not that nice, no, just kidding. 

MARK: Wonderful. All right, well, that sounds like a great way of doing it. And I've got a very simple API that I don't have to learn TensorFlow, or do [? Foyer Transforms, ?] or anything else like that? 

FRANCESC: Everything you need to learn is JSON. 

MARK: It's just JSON? 

FRANCESC: Yeah. 

MARK: That sounds fantastic. Awesome, well, Francesc, what are you up to over the next few weeks? Are you up to anything exciting? 

FRANCESC: More Cloud Summits. 

MARK: Oh, fun. 

FRANCESC: Yep, so just getting back from Cloud Summit in Sydney. Last week also, we had Cloud Summit in Seattle. This week, there's Cloud Summit in Kuala Lumpur and Singapore. And I will not be there. Instead, I'll be here in San Francisco. But next week, there's Cloud Summit in Chicago, Wednesday, 27th. So if you're around, let me know. I'd love to meet more people using Google Cloud Platform, especially Gophers. And after that, in October, I'll be out to London to speak at Velocity. What about you? 

MARK: Nice, cool. So when this comes out, that will be the day before Austin Game Conference, where I will be speaking at two different panels, doing one on Kubernetes and game servers, and then also doing a panel with a variety of cloud providers, talk about games in the cloud. Then I'll be attending Strange Loop, just hanging out there, having some nice recovery time at a very interesting conference. 

FRANCESC: Jealous. 

MARK: Yeah. And then in October, I will be going to Australia. I'll be there from Melbourne International Games Week for Unite Melbourne, so Game Connect Asia Pacific, as well as Pax Australia. And I'll also be doing the GDG DevFes in Melbourne the day before as well. 

FRANCESC: Cool, I met a lot of people at Cloud Summit in Sydney that were big fans of the podcast. 

MARK: Awesome, hi. 

FRANCESC: They all knew your name. 

MARK: That's good. That's good that some people know my name. 

FRANCESC: Yeah, so thanks so much for all of the people that I met in Australia. They were super nice and very excited about the podcast. It's nice to see-- 

MARK: And meet people. 

FRANCESC: --real people talking to you. It's fun. And thank you, Mark, for taking the time today. 

MARK: Thank you, Francesc, for coming in all the way from the airport. 

FRANCESC: To help me get through this hard day, which is recording an episode jet-lagged. 

MARK: Wonderful. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}