+++
audioDuration = "00:35:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.82.mp3"
audioSize = 50763216
categories = ["Monitoring", "Open Source"]
date = "2017-06-21T01:07:49Z"
description = "It’s all about open source monitoring this week, as Prometheus Co-Founder Julius Volz, joins your co-hosts Francesc and Mark to talk all about Prometheus"
draft = false
image="/images/post/prometheus.png"
episodeNumber = 82
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Prometheus with Julius Volz"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/HoMZMbsvp5N"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6imo3v/episode_82_prometheus_with_julius_volz/"
+++

It's all about open source monitoring this week, as Prometheus Co-Founder [Julius Volz](https://twitter.com/juliusvolz),
joins your co-hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) to talk all about 
[Prometheus](https://prometheus.io/). Where it came from, why it was built and why you should use it.

<!--more-->

##### About Julius Volz

[Julius](https://twitter.com/juliusvolz) co-founded the Prometheus monitoring system and lead the project to success at SoundCloud and beyond.
He now focuses on growing the Prometheus community and is the main organizer of PromCon, the first conference around
Prometheus. In a previous life, Julius was a Site Reliability Engineer at Google.

##### Cool things of the week

- New Singapore GCP region – open now [blog](New Singapore GCP region – open now) [locations](https://cloud.google.com/about/locations/)
- Training an object detector using Cloud Machine Learning Engine [blog](https://cloud.google.com/blog/big-data/2017/06/training-an-object-detector-using-cloud-machine-learning-engine)
- Preparing a Container Engine Environment for Production [solution](https://cloud.google.com/solutions/prep-container-engine-for-prod)

##### Interview

- Prometheus [homepage](https://prometheus.io/) [github](https://github.com/prometheus)
- Prometheus Overview [youtube](https://www.youtube.com/watch?v=PDxcEzu62jk) [media](https://prometheus.io/docs/introduction/media/)
- Prometheus Query Language [docs](https://prometheus.io/docs/querying/basics/)
- Grafana [homepage](https://grafana.com/) [docs](https://prometheus.io/docs/visualization/grafana/)
- Prometheus Client Libraries [docs](https://prometheus.io/docs/instrumenting/clientlibs/)
- Installing Prometheus on Kubernetes [helm](https://github.com/kubernetes/charts/tree/master/stable/prometheus) [operator](https://coreos.com/blog/the-prometheus-operator.html)
- Cortex, a Open source, horizontally scalable Prometheus as a service [github](https://github.com/weaveworks/cortex)
- Prometheus Federation [docs](https://prometheus.io/docs/operating/federation/)
- Prometheus Conference, PromCon 2017 [site](https://promcon.io/2017-munich/)

<div style="text-align: center">
  <a href="https://prometheus.io/"><img src="/images/post/prometheus.png" style="margin: auto;"></a>
</div>

##### Question of the week

I didn't put enough log statements in my application, and now things are broken. Help!?
 
- Using Debug Logpoints [docs](https://cloud.google.com/debugger/docs/logpoints) [youtube](https://www.youtube.com/watch?v=q9_kMqWasWk)

##### Where can you find us next?

Francesc just released a new [#justforfunc episode](https://www.youtube.com/watch?v=SQeAKSJH4vw) 
where he builds a Twitter bot that runs for free on GCP.

He will be running a workshop at [QCon New York](https://qconnewyork.com/) on Go tooling based on
[this video](https://www.youtube.com/watch?v=uBjoTxosSys), after that he'll be at GopherCon in Denver!

Mark will be speaking at [Google Cloud Summit, New York](https://cloudplatformonline.com/summit-NewYork-2017.html) in July.

{{< transcript "FRANCESC: Hi, and welcome to Episode Number 82 of the weekly Google Cloud Platform podcast. I am Francesc Campoy. And I'm here with my colleague Mark Mandel that is finally back. Welcome back, Mark." >}}

MARK: Hi, I'm back. Thank you. 

FRANCESC: How are you doing? 

MARK: I am very well. I am well rested, well fed. 

FRANCESC: Was it bad. 

MARK: Actually, not too bad. 

FRANCESC: Ah, good, good. 

MARK: It's been pretty good. It's been really good. Awesome, well we are here this week to talk all about Prometheus. 

FRANCESC: Ooh, that is cool. And not only are we going to talk about Prometheus, but we are actually going to talk about it with one of the creators, Julius Volz. So he's going to be joining us from Berlin and tell us about what is Prometheus. If you don't know what it is, it's basically a monitoring system. 

MARK: It's open source. 

FRANCESC: Yeah, that is completely open source and completely written in Go. So, yay. 

MARK: I knew you'd like that, fantastic. And then after we've done that, we'll have our regular question of the week, where we're talking about logging where you haven't logged before. 

FRANCESC: Yeah, it-- that sounded very "Star Trek." 

MARK: (LAUGHING) I thought so. 

FRANCESC: Yeah, so, yeah, logging when you have not burned any log statements, and now it's failing in production. What? 

MARK: Help. 

FRANCESC: Yep. So we'll talk about that use case and how we can help with that. But before that, we have as always our cool things of the week. First one that we have-- and I'm going to-- I keep on writing these in an order and then going over the things in a completely different order. But I don't care. 

Because the most exciting one for me is that we have a new region that has been opened for Google Cloud Platform. And it is the Singapore region, which is very exciting. I have never been to Singapore yet. But there's a [INAUDIBLE] in Singapore, so I might go next year. 

MARK: Nice. 

FRANCESC: This is going to make it so the round trip for a Google data center in Southeast Asia is going to be much, much better. So, of course, Singapore, but also if you think about places like Indonesia, there's going to be a huge, huge difference for them. So we're very excited about that. 

MARK: Yeah, it looks really, really good. Always glad to have more locations. We seem to be growing them a lot lately, which I'm super happy about. 

FRANCESC: Yeah, yeah, because it makes for more reasons to travel around and go visit places. So that's exciting. 

[LAUGHTER] 

I mean, because it helps our customers. That's what I was saying. 

MARK: That's what you're saying. 

FRANCESC: That's what I was saying. 

MARK: Exactly. Wonderful. So going on from there, one of the ones that I particularly like in the machine learning space is we recently talked about and announced the release of the TensorFlow Object Detection API. So the cool thing of the week is actually a tutorial about how you can use this new open source framework that makes object detection much easier. 

So if you want to be like, hey, that thing's a car. Or that thing's a dog. Or that thing over there is a fire hydrant. I don't know, anything along those lines, sure. This is a tutorial that shows you how you can use that framework, but specifically tying it in with our Cloud Machine Learning Engine, our scalable, fully managed service for doing this kind of machine learning stuff. 

And it's a really nice step-by-step example of how to do this and how to build it all with TensorFlow. But particularly what I love about it is that it uses-- what's the exact name for it? 

FRANCESC: I think it's Oxford. 

MARK: --the Oxford. I don't know why it's the IIIT, but it is basically a pet database. So anything that involves you using dogs or animals I'm totally for. So you get to look at cute puppies and stuff while you're actually training your TensorFlow model. 

FRANCESC: I really like that they show a picture of two beagles. And one is a 99% beagle and the other one is 98% beagle. So I am wondering what is the beaglest beagle they can find. 

MARK: Well, clearly the one on the left is the beaglest. 

FRANCESC: Clearly. 

MARK: Clearly. 

FRANCESC: I love TensorFlow. And the examples that they use, they're always hilarious. I really love it. Finally, we have a third cool thing of the week. And it's a solution from our solutions team that is preparing a Container Engine environment for production. And this is really cool because it doesn't like-- creating a Container Engine cluster is incredibly simple. You just go to the form, click a button. That's it-- or even from gcloud. So it's super easy, right? 

But that doesn't mean that you should open that directly to the world and just hope for the best. There's a lot of the different best practices that you should just follow. Like from the point of view of IAM-- there you go. IAM, what are the rules that you should be providing? What rules the machines should have, what rules you should have, and things like that, how to protect the machines using all the firewalls, and stuff like that. 

Basically it's mostly about security. But it is very important. And it has very concrete examples. So if you have a Container Engine cluster running in production-- and I would even say if you have a Kubernetes cluster running in production, most of these best practices definitely apply to you. So go check it out and let us know what you think. 

MARK: Yeah, it's really a good guide on a whole lot of things through from RBAC and IAM through to like how to do communications from your data center to your cluster and all sorts of other stuff from there, so definitely worth having a look at. 

FRANCESC: If you do not know what is a headless service, you should read this because it actually explains it. Because I did not know what it was. So, if you don't know what it is, go check it out. It's actually an interesting thing that might help you have a better life in production. 

MARK: Cool. All right, well, why don't we go chat with our friend Julius and have a talk all about open source monitoring with Prometheus? 

FRANCESC: Sounds very good. Let's do that. So I am very happy to welcome today Julius Volz, the Prometheus co-founder. Hello, Julius, how are you doing? 

JULIUS: Hi, I'm doing great. Thanks for having me. 

FRANCESC: And you're joining us from, Berlin today. 

JULIUS: Yep, nice weather here-- 6:40 PM-- the whole week will be a very nice and sunny. 

FRANCESC: That is awesome. I met you a long time ago. I think it was the first TOG Prometheus ever gave, the Go meetup in Berlin. 

MARK: Oh nice. 

JULIUS: Yep. That's correct. 

FRANCESC: It's been a long time. So we're going to be talking a little bit about Prometheus and what it is and everything. But before we talk about that, tell us a little bit about yourself and what you do at Prometheus. I guess the company is also called Prometheus? Or is it SoundCloud? 

JULIUS: Ha ha-- so there is no company. That's the trick. 

MARK: Ooh. 

JULIUS: No, so, yeah myself-- so I was a Google site reliability engineer at some point in my career. And then from Google went straight to SoundCloud, from Zurich to Berlin. And at SoundCloud we started building Prometheus. So that's what I've been doing for roughly past five years or so. 

I left SoundCloud roughly 1 and 1/2 years back and then started doing just freelancing around Prometheus. Prometheus is a monitoring system that is really independent by now. It's part of the Cloud Native Computing Foundation, which in turn is part of the Linux Foundation. 

Kubernetes was the first project in there. And we are the second. And so it means like there's no one company that controls the project. There are companies that offer services around it, but they're not like the main Prometheus company. And SoundCloud doesn't even care that much about Prometheus anymore, although it was born there. 

MARK: OK, so let us talk about the Prometheus at a high level. What is it? What does it do? What's its purpose? 

JULIUS: Right. Ha ha-- So Prometheus is a systems monitoring toolkit slash ecosystem. Some years in the past, there were systems like Nagios, Graphite, Ganglia, StatsD, Munin, and so on-- some for collecting time series, some for running checks to actually send alerts to people. And of course, these tools still exist. And they have their uses. But they were created in a world that was way more static than the worlds, the infrastructure worlds, that we have nowadays, where you have clusters like Kubernetes, cluster managers that schedule instances and pods dynamically moving around, scaling up, scaling down. 

And so Prometheus is a monitoring system that was specifically built for this kind of dynamic cloud environment, where these things are shifting around all the time, and you still want to try and make sense of things. And we started building Prometheus really because-- so this was back in 2012. Matt Proud and myself joining SoundCloud, both coming from Google, having seen how you can monitor dynamic environments, and then being thrown into a startup basically, SoundCloud, which already had a dynamic environment. 

They had a static-- a dynamic cluster scheduler. But they still had the old kind of monitoring tools. And they were OK, but they weren't really cutting it anymore for those kind of scenarios. So it was really difficult to find out, for example, if there was a latency spike, was it only one instance? Was it multiple? Which instance was it? 

The dimensionality of Graphite wasn't really sufficient. The alerting, expressiveness, and data model of Nagios and the lack of any history in Nagios to alert on was another problem. And so Prometheus was really inspired by Google's approach to monitoring and takes an approach of, let's collect everything that we care about in our infrastructure as a set of metrics, as a set of time series first. And then base any dashboards and alerts on these time series. 

And to allow you to make that powerful enough, we also basically added a query language to Prometheus that is quite flexible, that allows you to work with the data that you collected and formulate really powerful expressions against the data to slice and dice the data, aggregate up, drill down, depending on what you need in that moment. 

MARK: Cool, so to give some more context and maybe reach those people who aren't as familiar for like monitoring and stuff, could you give an example of step-by-step through what you would be setting up and why you'd be setting it up. And then how would that work with Prometheus? 

JULIUS: Yeah, there's so many different ways I could set things up. Prometheus is really kind of a Swiss army knife of monitoring. But let's say you have-- let's start with a simple case of we just want to gather host metrics or node metrics. Then we could install a little component called the node exporter, which is a little agent, on every machine. And it will basically fetch metrics about the machine itself from the proc and the sysfs file systems. And it has a little HTTP endpoint over which Prometheus, the server, can scrape metrics from that host. 

So when you set up a Prometheus server and you tell it, here are all of my hosts that I care about, that I want to monitor. And it will then go out to the node exporters and will pull in, in a dimensional data model, all these metrics. So they will be tagged with something we called labels. They are key value pairs on every metric that tell you what servers the metrics came from, what exact instance in the servers, and then what other kind of subdimensions they pertain to, like the exact CPU core for CPU usage or so on. 

MARK: And then from there you can do stuff with it? 

JULIUS: Right. So Prometheus stores that. Prometheus is a pull-based system. It pulls those metrics from things you care about, like node exporters, but also you have services or other things, stores them as time series on disk. And then you can use that in three different ways, I would say. Either for ad-hoc debugging, you go to Prometheus itself. It has a built-in UI for trying out some Prometheus query language, PromQL expressions, where you can really inspect the current state of all your infrastructure. 

And once you have expressions there that you might want to dashboard, you can use a tool like Grafana to talk to Prometheus' HTTP API to run the exact same queries and have nice persistent dashboards that you can share with your team, throw on the wall, and so on. And then the third use case would be alerting, where you can reuse the same query language for actually formulating really precise alerts against the data you collected. 

MARK: So I might be able to set something up that says like, if my CPU has been at 95% for five minutes, then send me an alert because something's going wrong on the server, or something like that? 

JULIUS: Exactly. Yep. And you can do things that are not even strictly threshold related. So for example, in Nagios, you can only really say something like, if this check script fails three times in a row, then alert me. And you don't really collect history first that you can then do more analysis over, right? It doesn't collect any time series data. 

With Prometheus you collect basically some amount of time series data. And you can do some more time-based analysis on it. For example, you can say something, based on the last four hours of the disk usage, tell me whether my disk will be full in four hours or so. And then alert on that. 

MARK: Oh, I see. So it's sort of predictive analysis type things. 

JULIUS: So it's some limited forms of predictive analysis. There's no automatic anomaly detection, no kind of magic there. But it's explicit rules, explicit functions that allow you to go quite far. 

FRANCESC: So that sounds really interesting from the point of view of all the features that it offers. But I'm curious about how it actually runs. So you mentioned that it is a pull-based system. So do you have a server that is pulling every single one of the jobs? Does that mean that you need to install an agent in every single one of your jobs? What does it look like? 

JULIUS: So, it does mean that you do have to have HTTP endpoints that you can scrape. If it's a piece of software that you cannot instrument directly, we typically have these things called exporters that are little bridges that sit between Prometheus and the thing you care about and translate the metrics into the Prometheus format so you-- I already mentioned the node exporter, which translates sys and procfs metrics into Prometheus metrics. 

Then we have, for example, a MySQL daemon exporter that, in the back end, talks actually SQL queries to a MySQL daemon and gets internal stats about that server and translates that to Prometheus metrics. And we have by now I think over a hundred of these integrations in our official organization and provided by the community. And they're pretty easy to write. They're basically just small translation layers between metric systems. 

And then the golden thing, like what we really recommend is, if you have services yourselves that you built yourself, where you control the code, really instrument them directly using one of the client libraries that we provide, where you get API objects such as a counter, a gauge, histogram, or summary that allow you to track various states in your own servers and exactly the ones that you actually care about, so really nice white box instrumentation of your code. And that's really how you can also get the best alerting. 

MARK: So, I'm curious about something you mentioned. So basically, the way I understand it, Prometheus goes out and goes and scrapes these HTTP endpoints on all the different things that you have running outside. But you were also talking about very dynamic environments, something like Kubernetes with containers going up and down, or possibly environments where VMs are being created and destroyed constantly. 

How does Prometheus know when those things are spun up or been destroyed so it knows to go and grab that data from where it needs to? 

JULIUS: Thank you for the great question. This is one of the key parts of Prometheus that make it special, I would say. It integrates with service discovery and with whatever kind of service discovery your infrastructure has. These can really think-- out of the box, we currently support roughly 10 different mechanisms. 

So these can be ones where you discover AWS, or like EC2, or Google Compute Engine instances, or so on on the host level. But we also integrate with some of the cluster schedulers like Kubernetes, where we talk to the Kubernetes API server to provide us a list of all the services, endpoints, and pods, and so on running on that Kubernetes cluster. 

And the nice thing is, this kind of serves multiple purposes. On one hand, we know then where we need to go to get metrics, so the actual HTTP endpoints. On the other hand, we know what should be there in the world. And if we cannot pull from it, we know that it's down. You can base simple health alerting on this already, on the signal. 

And the third thing, which is really cool, is if you're using a good service discovery mechanism, like the one in Kubernetes for example, you get a lot of metadata about the things you discover. So you don't only know that there is an HTTP endpoint that you should pull from, but you also get all the Kubernetes annotations, and labels, and other metadata that you can then choose to either map into your time series or also make decisions on. Like you can have an annotation that says whether to scrape a target at all or not. 

Yeah, but for example, just mapping the metadata into your time series is very nice because then you can see this engine X over there is an environment equals production instance, for example. And then you can use that in your queries, in your alerts. So, yeah, the service discovery integration is something that is pretty new in monitoring systems and has been ignored in the static world. 

I mean, in the static world, you kind of just configure what you expect. Or often with push-based systems, where the instrumented services themselves push metrics to the monitoring systems, the question of what even should be there in the world has often just been ignored. Like if an instance or a host never reports in, you might never know that it's missing. 

FRANCESC: So, I have a couple of questions now. You keep on saying this word "time series" over and over. And I'm curious about it. On one side, you say that you expose that time series, that data from every single one of the elements that you're monitoring. 

What is the format for that? Is that like JSON? Particle buffers? How do you expose that? Because I guess that is very important that that's efficient, right? 

JULIUS: Yep, we had JSON at the very beginning of Prometheus, and then dumped that at some point for not only but also efficiency reasons. Now we have two formats, a text-based one, which is very simple to construct, and nice to read, and very efficient to parse, where basically you-- the format contains one sample per line, one time series sample per line. And we also have a protocol buffer-based format, which is even-- it can be even more efficient and a bit more robust and can then easily be implemented by any protocol buffer parser. 

But in reality, there are not actually many implementations that need to parse the protocol because it's mainly the Prometheus server doing that job. So we really want to optimize the easy production so that you can easily, even from a shell script, really easily just spit out a metric and so on. So, the text format seems to be the one that actually is getting the most traction. And some client libraries don't even bother implementing the protocol buffer format at the moment. 

FRANCESC: And then-- so you're getting all that information from a lot of different agents and I'm assuming that that's going to be a decent amount of data that you want to store somewhere. Where do you store it? What is the database behind all of this? 

JULIUS: Right, yeah, Prometheus' data is highly dimensional. You're not only getting it from a lot of sources, but those sources might subdifferentiate their own data by a lot of labels and dimensions. What CPU did the CPU usage happen in? What modes did it happen in? And so on and so on-- which file system did some file system fullness metric pertain to? 

And we store all the data currently on local disk. Prometheus itself only knows how to store on local disk. This is intentional because it keeps things simple. You don't have to run a cluster-distributed system, which might be the first one that goes down in the face of a network partition or some other trouble when you need your monitoring system the most. 

The next question then is usually, but how do you keep that highly available? The way you do that is by just running two identically configured Prometheus servers that know exactly nothing about each other. They're configured to scrape exactly the same targets. There's no history or any kind of historical states in targets. The targets really just know the last value of any metric or the current value. 

So you can scrape them in parallel by as many Prometheuses as you want, and it still works out fine. And then both of these servers can calculate alerting rules by themselves and dispatch alerts to a component, also of the Prometheus ecosystem, called the Alert Manager. And that then actually de-duplicates these alerts and routes them to recipients. 

So that does mean that the local storage isn't infinitely scalable or durable. If you lose a node it's gone. And if you lose two nodes in turn and they come back up, they won't backfill from the other. So for people who do want to store data for a really long time with a guarantee of not losing it, we recently added a remote write-and-read-back integration protocol that people can integrate with. 

The way our Prometheus basically sends any sample that it stores also to a remote URL that you can specify, and optionally, if your bridge implements it, you can also then read back the data. So for example, right now, we have an experimental toy bridge, which knows how to write data into InfluxDB, which you can get in a clustered version, in a commercial version at least, and then also read it back again through PromQL in Prometheus, but coming from InfluxDB. So you can nuke your local database and still get data. So yeah, but we really wanted to decouple the actual really core alerting functionality from that remote storage aspect. 

FRANCESC: Yeah, this really sounds like a good match for Bigtable. 

JULIUS: Yep. 

FRANCESC: I'd like to see if someone could implement something like that. That would be cool. 

JULIUS: Well, this is happening already. So there is also Cortex from Weaveworks, which is both an open source project and a hosted service by them, which I also was involved in building. And this is a reimplementation of Prometheus based on currently AWS. 

But another company is working on porting it over to Google Cloud, also Bigtable there, by the way. And this is multi-tenant, horizontally scalable, durable forever, and so on. And you basically configure your Prometheus locally to still discover targets locally, pull targets locally, but then send all the collected samples over to this cloud service, or you could run this yourself as well. So, yeah, that that kind of already exists or is being created. 

FRANCESC: Very nice. 

MARK: Very cool. So I'm also just curious. It looks like there's a huge community around Prometheus. Who is actually using it? Can you name any customers? 

JULIUS: Oh, I have to be careful. I would have to look in the spreadsheet to see who I can name publicly. There are a bunch of "Fortune 500" companies, big ones. I think Walmart Labs has been reasonably open, New York Times, yeah, several big ones. Other ones are thinking about it. 

FRANCESC: I guess SoundCloud is using it? 

JULIUS: I don't want to name any names that I shouldn't name at the moment. So I would have to check the list again to make sure that I'm-- 

MARK: I'm just I'm just looking at the web site. 

JULIUS: Oh yeah, the website has some that explicitly asked us to add their logo. But there is many more, and really big ones as well, yeah. So I mean, I think one of the nice things for the adoption of Prometheus was that it also works really nicely together with Kubernetes. So Kubernetes is kind of really inspired by Borg and Google. 

There was a tool inside Google, which basically-- I mean, I think it's mentioned in the Google SRE book called "Borgmon." And that was a big inspiration for Prometheus. So there's some analogy going on between Kubernetes and Prometheus. They both use labels in their data models. 

Kubernetes has native Prometheus metrics. Prometheus has native support for Kubernetes' service discovery. So they kind of go together well. And I think a lot of ex-Googlers and current Googlers also noticed that and picked it up because of that reason. So I think that really helps adoption as well, as well as being part of this Cloud Native Computing Foundation. 

FRANCESC: Also there's something else that is in common between Kubernetes and Prometheus, right, which is they're both written in Go? 

JULIUS: They're both written in Go, yes-- Single static binaries. 

MARK: Yes. Yep. Just because I'm super, super curious as well, so if I want to install Prometheus on Kubernetes, should I install it in the same cluster that I'm already running my other apps in? Or should I run it in a different cluster? Like how does that work? 

FRANCESC: Who monitors Prometheus? 

MARK: Yeah like who monitors the monitors, right? 

JULIUS: Yeah, I think what people normally do is they do run their normal Prometheus in the Kubernetes cluster because that makes it easier to monitor targets in there. You automatically get the necessary credentials mounted into your Kubernetes part to be able to talk to the API server and so on. And you also have immediate network access to all the instances in the pods that you need to pull from. You can and should, if you're serious about monitoring, then still have some external metamonitoring probably that monitors your Prometheus servers. Not only that they're up, but the Prometheus server itself also outputs a lot of instrumentation in the Prometheus format about itself. So now you can really inspect with some metamonitoring how all your Prometheus servers are really behaving, whether they're overloaded and so on. 

FRANCESC: Yeah, and I'm curious about, since you were talking about things that are in common in between Kubernetes and Prometheus, one of the cool things about Kubernetes is that idea of having many Kubernetes clusters working together as a federation. Is there such a thing for monitoring? Or is it not necessary? 

JULIUS: We have a concept called Federation. It's not exactly the same as Kubernetes federation. The way it works is that you-- let's say you have 10 data centers or 10 Kubernetes clusters. You might have, for a given service on there or all the services, run one Prometheus server per cluster. 

That gives you a very detailed local view of the universe. But it might be that not all the data of all 10 clusters fits into one big global Prometheus server. So you could have still a federation set up, where you have a global Prometheus server, which scrapes federated data from all the 10 subordinated Prometheuses, but only gets kind of roll-ups or aggregations, where you maybe sum up over all the instances of a given service and don't have the really detailed data anymore. 

So you can keep that global but not really detailed level at the top and have local but very detailed data at the bottom of your federation tree. And your federation tree could even have multiple levels. You can also use federation to do it kind of sideways, to pull data from a Prometheus of a different team, if you're also interested in that. Common use case would be, for example, if the Kubernetes-- the team that runs the Kubernetes cluster has a Prometheus server, and you have maybe your own one that just monitors your direct service metrics of your one service running on Kubernetes. 

You might be also interested in externally observed content or resource usage metrics for your services, right? So you could pull them from the other Prometheus server that is already gathering all that data from the built-in cAdvisors in the cubelets. And then store that in your Prometheus server. Or you could also, if you have the credentials, even go out and scrape that data yourself. But that's one possibility as well. So this allows you to scale setups and be more flexible. 

FRANCESC: So I guess we're kind of running out of time. But is there any other topic, anything that we might have missed that you'd like to mention? 

JULIUS: I should probably mention that there is a Prometheus conference happening again this year-- the second one, PromCon. The first one was last year in Berlin. And the one this year is going to happen August 17 and 18, in the Google Munich office. 

MARK: Nice 

FRANCESC: Nice. 

JULIUS: And the CfP is currently still open. So we're still taking talks until the end of the month. Head to promcon.io and submit a talk, if you do anything vaguely Prometheus related that could be interesting. And if you just want to attend, we are going to open ticket sales probably sometime in June. 

MARK: Awesome. Well, Julius, thank you so much for taking the time to hang out with us, talking to us about Prometheus. I'm definitely going to take that for a spin sometime soon. That was really great. 

FRANCESC: Yeah, that was really interesting. Thank you very much. 

JULIUS: Awesome. Thank you. 

MARK: I really want to sit down and play with Prometheus. I think I'm going to install it on some clusters that I'm using so I can see exactly what's going on inside them. 

FRANCESC: Yeah, it is a really cool project. And I really like that it's open source. So it's like if you have a cluster of machines running anywhere, you can have now Kubernetes with gRPC, and Istio, and-- 

MARK: --Prometheus. 

FRANCESC: --and Prometheus. And everything is written in Go. So, you know, yeah, I like it. It's a happy world. Cool. So, let's move on y our question of the week. 

MARK: Right, yeah, so this is a fun one. So the idea here being is that I built an application. And maybe I forgot to add some logging in some places that I probably should have, right. Something went wrong. Maybe I was just a bit rushed. Who knows, right? 

And something is failing in production. And I'm thinking to myself, ah, I really wish I'd put some logging in there. But I mean, ideally-- I could just rewrite the code and redeploy a new version. But that takes time. That takes effort. I'd prefer not to do that. 

Is there a way I can magically just stick some log statements inside my code and make it run? 

FRANCESC: No, you should have written better code. It is your fault. And you should feel bad. 

MARK: I feel bad now. I'm sorry. 

FRANCESC: There is actually a great way. We talked about this a long time ago, but from the point of view of a Stackdriver Debugger, which is a really awesome tool that works on most environments in most languages, except for Go on App Engine. Other than that it pretty much works everywhere, so if you're using Node.js, or Python, or Java, or Go, you should check it out. It probably works. Probably works-- it works. 

[LAUGHTER] 

So what you can do is you can go and set a break point in the line that you care about, you want to learn more about. What are the values of all the variables at this point? If you did this for real, like you actually put a break point, then you're actually stopping a process in production. And that's a big no. 

MARK: Yep. 

FRANCESC: So that's not what happens. What happens is that we take a snapshot of the whole call stack and the heap. So you can actually see, oh, what are the variables? What are the values for every single one of those variables? 

Now the problem is that if you do this, what you are getting is every single time there's and new snapshot, you get to see it and you inspect it manually, right? And sometimes this is not what you want to do. Sometimes what you want to do is see a log of not only once, but like all of the times that someone goes through, like in an actual log. So then you can analyze it with all the log analysis tools that you might already have. 

MARK: And I can see the history and exactly what's going on. 

FRANCESC: This is actually very useful, right? So literally everything you can do, everything you want to do is just add one line of logs. And you can actually do that. It's what we call debug log points. And it is as simple as going to the debugger, clicking on the line number, and rather than adding a break point, what you add is a log point. 

And then you can write a little-- it's basically a line of code that basically says, if some condition then log some expression. That's it. It's very simple. But that's exactly what you want. It's super effective. 

There's a really good video by our dear colleague Aja Hammerly. It's one of these "Cloud Minutes." So in less than 60 seconds, you'll learn how to use it, in her case for Python, but it is pretty much the same case for every language. 

MARK: Cool. So now I could add logging statements anywhere I want inside my executing code? 

FRANCESC: Actually, yeah, I mean-- 

[LAUGHTER] 

Then there's the point of at one point-- because those logs will be there, but then when you redeploy they'll go away. 

MARK: Yep. 

FRANCESC: But then should you have the log in your code base? 

MARK: I feel like this is stuff I would put in in an emergency and then go back and review what is the right amount of logs to have in my thing so that in future cases, maybe something else goes wrong, or a similar thing goes wrong, I can track it. 

FRANCESC: Yeah. 

MARK: --once I've done my postmortem and my blame-free analysis and all that kind of stuff. 

FRANCESC: Blame-free analysis, that's the important part. Cool. So I guess that answers the question. And this is almost the end of the episode. But before that, so you're finally back. 

MARK: I am. 

FRANCESC: What are you up to? 

MARK: So I'm staying in San Francisco for a while, which I'm super happy about. A little bit I'll travel less. But it looks like I'm going to be at Next New York on the 18th of July. 

FRANCESC: Nice. 

MARK: I'll be talking about gaming and GCP. Details to be determined, but it looks like that's going ahead. So that should be lots and lots of fun. 

FRANCESC: Is it going to be related somehow to the blog post that you wrote on how to run video games in Kubernetes and stuff like that? 

MARK: It's entirely possible. At this point actually, I'm not sure, so we'll see. 

FRANCESC: In those cases, normally you say, it's secret. 

MARK: It's secret? 

FRANCESC: Secret, it's confidential. 

MARK: OK, fair enough. I can neither confirm nor deny. Excellent. And what are you up to, "Just for Func" stuff? 

FRANCESC: Yes, I just published my latest "Just for Func." Actually I published two because I was so late in the previous one. They ended up going out almost together. But yeah, one was about cgo. And the one that I published last weekend, it's a really cool one, running a Twitterbot written in Go with systemd and Google Cloud platform for free. 

MARK: Nice. 

FRANCESC: Yeah, so it was like we talked about all the free tier and stuff like a couple of times. F1-micros are free. And they're tiny, but they're big enough. So yeah, it is a pretty cool episode. And then after that, I'm actually preparing my workshop for Go Tooling in Action that will take place in New York for QCon-- QCon New York, which is in two weeks. So that is the last week of June, which is week of the 26th. I'll be there for the whole week. It's going to be awesome. 

MARK: Awesome. Well, Francesc, thank you so much for joining me for yet another episode. 

FRANCESC: Thank you, Mark, for coming back finally. I hope your dog is happy. 

MARK: She is very happy. Thanks to all our listeners as well. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}