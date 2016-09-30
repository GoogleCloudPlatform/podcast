+++
audioDuration = "00:30:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.34.mp3"
audioSize = 44107379
categories = ["Monitoring", "Stackdriver"]
date = "2016-07-13T01:07:49Z"
description = "Aja Hammerly explains what monitoring is and why you should be doing it, then we discuss about how Stackdriver makes monitoring your applications easy on Google Cloud."
draft = false
episodeNumber = 34
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Stackdriver monitoring with Aja Hammerly"
image="/images/post/stackdriver.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/GBpGTU2bnD7"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4soayj/34_stackdriver_monitoring_with_aja_hammerly/"
+++

[Aja Hammerly](https://twitter.com/the_thagomizer), Developer Advocate for Google Cloud,
discusses with your cohosts [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) what monitoring is and how
[Stackdriver](https://cloud.google.com/stackdriver/) makes it easy on Google Cloud,
other cloud providers, and even on premise.

<!--more-->

##### About Aja

[Aja](https://twitter.com/the_thagomizer) lives in Seattle where she is a developer advocate at
Google and a member of the [Seattle Ruby Brigade](http://www.seattlerb.org/). Her favorite
languages are Ruby and Prolog. She also loves working with large piles of data.
In her free time she enjoys skiing, cooking, knitting, and long coding sessions on the beach.

##### Cool thing of the week

- [Kubernetes moves onwards and upwards](https://cloudplatform.googleblog.com/2016/07/Kubernetes-moves-onwards-and-upwards-this-week-on-Google-Cloud-Platform.html)
- [Kubernetes 1.3 on tap for Google Container Engine](https://cloudplatform.googleblog.com/2016/07/Kubernetes-1.3-on-tap-for-Google-Container-Engine.html)
- [Scalable Microservices with Kubernetes - Udacity](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615)

##### Interview

- [Stackdriver Monitoring Documentation](https://cloud.google.com/monitoring/docs/)
- [Stackdriver](https://cloud.google.com/stackdriver/)
- [Introducing Google Stackdriver: unified monitoring and logging for GCP and AWS](https://cloudplatform.googleblog.com/2016/03/Google-Stackdriver-integrated-monitoring-and-logging-for-hybrid-cloud.html)
- [Using metrics](https://cloud.google.com/monitoring/api/v3/using-metrics)
- [Stackdriver pricing](https://cloud.google.com/monitoring/pricing)
- [Uptime checks](https://cloud.google.com/monitoring/alerts/uptime-checks)
- [Six things Stackdriver brings to the DevOps table](https://cloudplatform.googleblog.com/2016/06/six-things-Stackdriver-brings-to-the-DevOps-table.html)

<div style="text-align: center">
  <a href="https://cloud.google.com/stackdriver/">
    <img src="/images/post/stackdriver.png" width="25%">
  </a>
</div>

##### Question of the week

- How to keep data in sync while limiting bandwidth? [gsutil rsync](https://cloud.google.com/storage/docs/gsutil/commands/rsync)

{{< transcript "FRANCESC: Hi. And welcome to episode number 34 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, mark. How you doing?" >}}
MARK: I'm good, Francesc. How are you doing? 

FRANCESC: I'm very, very good. I'm very happy and excited about our guest today, Aja Hammerly from our team. 

MARK: Yeah, yet another one of our team members. I always really enjoy talking to our team members because we have a great team. 

FRANCESC: It is always fun. We have very, very different backgrounds. It is always fun to talk to someone that you've known a little bit. And all of a sudden, she starts telling you about fires in data centers. 

MARK: Yeah, all sorts of fun stuff. 

FRANCESC: Yeah. It's a very, very interesting interview. And at the end of this interview-- actually, maybe we should say what we're going to be talking about. We're going to be talking about monitoring on the cloud, and specifically Google Cloud Platform using Stackdriver. 

MARK: Yes. 

FRANCESC: And after that, we'll have a question of the week, which is about data management across different [INAUDIBLE]. So what do you do if you have some data in your machine, some data in Google Cloud storage, and some of it changes. You want to update it. You want to keep it synced. What are the solutions for that? 

MARK: How do you do that? 

FRANCESC: Yeah. But before that, we have the cool thing of the week, which is very, very cool today. 

MARK: Yes. So the cool thing of the week is that Kubernetes 1.3 was released. 

FRANCESC: Yeah. It is out, and it is already available in the Kubernetes page, and very, very soon on GKE. 

MARK: It's got some really cool features that have come a long way. Kubernetes 1.3 has some great stuff. There's more work happening on jobs, and stuff that's already in existence within communities. But also, we're seeing things like cluster federation, so being able to manage clusters across regions of providers, which is super, super, super cool. 

We're going to have a link to a slide deck that one of our team members-- extended team members-- Carter Morgan. 

FRANCESC: I call him team member. 

MARK: Team member. I think that's fair. He's a super cool guy and very, very smart, and does a lot of stuff with Kubernetes. He has a slide deck that covers some of the new features in Kubernetes 1.3. But yeah, as you said before, it's available on GKE. When we say available, it's rolling out over the next week or so. So if you've got new projects, it's probably going to come to you maybe a little sooner, or maybe not. But it'll get there. It'll get there. 

FRANCESC: Yeah. 

MARK: It'll definitely get there soon. 

FRANCESC: So we often talk about, oh yeah, cool new things on Kubernetes and things like that. But I think it's important to remember that if you're interested in learning the basics of Kubernetes, there's this course on Udacity with Carter Morgan and Kelsey Hightower, which is a great way to learn the basics of Kubernetes if you're curious about it. We'll have the link on the show notes [INAUDIBLE]. 

MARK: Absolutely. Cool. 

FRANCESC: So why don't we go and have a chat with Aja? 

MARK: Let's do that. 

FRANCESC: So I'm very happy to welcome Aja Hammerly from our team to the Google Cloud Platform podcast. Hey, Aja. How are you doing? 

AJA: Hey, guys. I'm doing great. I'm really excited be on the podcast this week. 

FRANCESC: Yeah. We're very excited you're here. Why don't you tell us a little bit about you? We know you a little bit already, but our listeners don't. Who are you? 

AJA: So I'm Aja Hammerly. I'm a Developer Advocate on the Google Cloud team. And I focus primarily on monitoring, logging, trace, debug, all the things that help you out when stuff goes wrong on your website. 

But before I came to Google, I had a large variety of jobs. I was a developer, I was a tester, I was a release manager at companies that varied in size from a really early stage startup up that I stayed with until they got to profitable, or close to profitable. And I also worked at big companies and little companies as a contractor. And so that's kind of why I come in and work on the stuff dealing with when things go wrong because I've been there. I've held that pager. I've had that midnight phone call saying, wait, wait, the site's down. And I'm really passionate about finding ways that other people don't get that phone call. 

FRANCESC: That's such a good person. That doesn't really sound fun. So why don't you tell us-- you say that you are one of the people on the team that specializes in monitoring and things like this. What is monitoring? 

AJA: So I'm sure that many of your listeners have been there where they've got a website or they've got some sort of cloud-based, or even locally-based application that's running. And they need to know when bad things happen. Because we all know that computers are not actually perfect all the time. Disks go bad. Disks fill up. We as software developers write bugs. I have certainly written my fair share. 

And we need to know when that stuff is happening because it has the ability to take down our site. And pretty much anyone doesn't want their site to go down without them at least knowing ahead of time, preferably them doing it on purpose. Because sites that go down or workloads that stop running usually mean lost money. And monitoring is the way that we keep track of how the resources, how the application is behaving so that we can have a high level picture that everything is OK. 

A lot of the places I've worked have had some sort of monitoring dashboard that's mounted up on a screen that's visible to everyone so that everyone can kind of have a high level picture that, yes, everything is OK and that things are going well. Or no, everything isn't. And you can see the trends and you can deal with it before something actually takes the site down. 

And monitoring is also the kind of thing that, if you're one of those people who used to carry a pager or still carries a pager, or your team passes around an on call phone, or maybe you've upgraded to the current decade and you have a system that changes who's on call and just calls your personal phone, those kinds of alerts are also triggered by monitoring. Hopefully those alerts happen when something is bad enough that it needs urgent attention, but hopefully not bad enough that the site is already down. 

And I have been there and I have carried that pager. And I actually still have kind of a negative visceral reaction to a specific ringtone for a specific brand of phone because that was the sound that our on call phone made. And it always meant that whatever I was doing was going to have to be put aside. So if I was out to dinner with people, I was going to have to sit there, pull out the laptop, and reboot servers from the dinner table. And I've done it. 

MARK: Wow. I have similar visceral reactions to certain noises. So that's really cool. I mean, I think it's worth making the point, monitoring, it's both preventative as well as incident-based. Would that be a fair summation? 

AJA: Yeah. It is both. In my world, I would really like it to be more preventative than incident-based. But computers are computers. And I've been on the on call team or the ops team for two data center fires now. So sometimes you just can't be preventative. 

FRANCESC: Out of curiosity, when you say data center fire, is it a literal fire? 

AJA: Yes, both of them. One company that I worked at, our data center, the auxiliary power units caught fire. The whole data center went down. And they actually emailed. When they finally got some of the stuff back up, they emailed all the people who were hosted there a picture of the charred auxiliary power unit that had taken down a good hunk of the data center. 

And then the other data center fire we dealt with there was actually at one of our vendors. And it was over a holiday weekend. And so the fire department got the fire out, but they couldn't actually go back in and certify that they could turn the electricity back on to the data center until after the holiday weekend. So one of our vendors was entirely down for a four day weekend, a three day weekend. 

FRANCESC: Fun. So monitoring will detect that. So my question is-- I'm assuming it will. 

AJA: It detects if resources go completely away pretty effectively, yes. 

FRANCESC: Yeah. But what about-- what is the kind of things that you monitor? Like I understand that you monitor the [INAUDIBLE] machine, and maybe you monitor if a network is up or not. 

AJA: Yeah. 

FRANCESC: Do you monitor other things? 

AJA: So I think about it-- if you've been around tech for awhile or you're familiar with networking, they talk about layers of networking. And I actually think about things as layers of monitoring. 

So at the base layer, I monitor to make sure the resources that I expect to be up in terms of VMs or physical machines are up. They are on, or they're responding to just low level ping. I also monitor things like CPU usage, memory usage, and disk usage. 

Disk usage is one that has burned me enough times that I always keep a really good eye on it. Because if you end up with a bug that ends up spewing a bunch of stuff to your logs, you can actually fill up your disk. And the applications I generally work with have been Rails and Node. And neither of those deals too well with not being able to write logs at all. 

So I will monitor CPU, disk usage, memory usage. And I'm mostly monitoring those things to make sure that they stay about the same. Because if they start doing something that looks outside of what looks normal for them, it's usually an indication that I have a software bug that I haven't detected. And then after the basic level of monitoring system resources, sometimes I'll monitor load balancers and network connections as well. 

I then start monitoring stuff in the application layer. And that's going to really depend on what your application is. Because if you've got an app that's primarily doing video transcoding, the things you're interested in are very different than the things that someone who's got a web serving workload is. A web serving workload, they might be interested in the number of 400 and 500 range errors that they get. Or they might be interested in latency. Or they might be interested that a certain endpoint is getting most of the traffic, or a certain endpoint is getting a normal amount of traffic, because they want to know if there's a problem in their application logic or pipeline. 

And so it really depends on the workload what I end up monitoring. But I do try to monitor at all layers. 

MARK: Cool. All right. Let's talk about what monitoring is available on Google Cloud Platform. We have this stuff called Stackdriver. I believe that used to be a different company. 

AJA: Yeah. Stackdriver was acquired by Google. And they've been working to integrate their products seamlessly into the existing Google Cloud Platform console. And the integration is lovely at this point. I've really enjoyed, as someone who's used a lot of different monitoring tools over the years, how the place where I create my VMs is the same place that I can see my alerts, I can see a dashboard. It's the same place that I can see my logs. It's the same place that I can see error reports distilled. It's all one login. 

And when I talk to folks about their ops stack or their monitoring stack, most folks seem to have four or five products now. One of the things I love about Stackdriver is it's one product that does all the things with one login. So figuring out who needs permissions for what is actually really straightforward. When you get a new employee, you don't have to give them an account to five different services. 

And specifically on the monitoring side, Stackdriver monitors all of our Google Cloud Platform resources. It can monitor App Engine. It can monitor Compute Engine. It monitors load balancers. And it can also monitor resources that are in AWS as well. 

It's cross-cloud. There's been a lot of push in the industry, and also some internally at Google, that many of our products now work cross-cloud. Another good example of that is Kubernetes, which works cross-cloud. And Kubernetes is not technically Google's product. It's an open source product. But it's another example of how Google is really pushing for the cross-cloud support. 

MARK: Cool. So we could probably go through all of the Stackdriver features for hours and hours on end. But since we only have about 20 or 30 minutes, do you want to give us some of your favorite features of the Stackdriver monitoring and stuff? 

AJA: Yeah. So I'm going to go at-- depending on what resources you're monitoring, I have different favorite features. So one of my favorite features is for App Engine, actually, in that latency monitoring is built in. I can say I would like to monitor latency, and I'd like to get alerted when latency is over this threshold, or increases by this much. 

And the other thing I really like about the latency monitoring for App Engine that's built in is that you can monitor at the 95%. So you can say, I want 95% of my requests to be at least this fast. You can monitor at the 5%. You can say, if 5% of my requests are slower than this, that's an alert. Or you could look at the average. 

And several of the apps that I've worked on have had an endpoint that's really fast most of the time, under 100 milliseconds most of the time. But occasionally, there's that edge case through the code that's just going to take forever. And you know it's going to take forever, but it really drags down your averages. 

So the fact that I can make those outliers go away on my monitoring is wonderful because that means that I don't get that page if we happen to get some anomalous traffic and get a couple extra things to the bad path a couple times. And sometimes you want to fix that path. But sometimes you look at it and you're like, yeah, that happens 1,000 times a day. I don't care. It's not worth the dev effort to fix it. So that's one of my favorite features in Stackdriver for App Engine is the latency monitoring. 

And then you can go into Compute Engine. And one of the things I like about Stackdriver with Compute Engine-- and I actually didn't know this until I was setting up a demo recently-- is that there's built-in monitoring for a bunch of different common tools, like MySQL or Cassandra or RabbitMQ. 

And sometimes-- the story is a little bit weird and I recommend folks go look at the docs-- we will actually detect that you're running MySQL on a given Compute Engine instance. We do that by looking at the instance name, looking at the processes that are running, and also looking at what ports are open. And we can turn on the monitoring for MySQL automatically. 

So we'll say oh, you're, running a MySQL instance on this Compute Engine. And the MySQL metrics will magically be available in your Stackdriver dashboard. And I hate to use magic because it's all computers. It's all done with well-written code. But any sufficiently advanced technology is indistinguishable from magic. It was a lovely surprise when I was setting up a MySQL cluster. 

And even if it isn't automatically detected, turning it on is super easy. You add a config file and you restart the Stackdriver monitoring process. And now you have access to metrics such as inserts and updates for MySQL for Nginx. You have access to the HTTP connections, how many are waiting, that kind of thing. 

The metrics that make sense are available when you need them, but they're not crowding your dashboard out when they don't actually makes sense. And so that intelligent decision about which metrics to make available is really, really nice. 

MARK: That's really cool. 

AJA: Yeah. The other thing that I like is that there's monitoring built in for Google Container Engine as well. So if you're running a Container Engine cluster, there's a dashboard that you get just by-- this is in the free tier. You can just go to Stackdriver and you can see monitoring of your Container Engine resources, both by containers and also by the underlying VMs. And that's awesome. 

MARK: So it sounds like there's a bunch of stuff that's out-of-the-box, ready to go, as long as you're using some cloud product on Google Cloud Platform. We're just like, yeah, here you go. Is there anywhere where you have to do manual steps? I think on GCE, you have to install an agent. Is that right? 

AJA: Depending on how you started it up, you may have to install the agent. You do have to install the agent in AWS if you're going to use it there. When I did it for a recent demo, it took me less than five minutes. The instructions are super clear. 

And if you're one of the people, like most of the folks I hang out with in the DevOps community, who uses something like Ansible or Chef or Puppet to provision your VMs, you can actually install the agent in a very straightforward way with those tools. There's a cookbook for it for Chef, for example. And so if you don't want to do it by hand, doing it automatically is really easy. 

And it's just another monitoring agent. I've used many, many monitoring services, and they all pretty much have this requirement. But it doesn't take long. You curl down some code. You put it in a directory and change the permissions and start it up. It's really straightforward if you're in a world where you do that kind of thing often. 

FRANCESC: Cool. So it seems like having the basic monitoring of your application, regardless of the stack that you're using, is pretty easy. What if you want to have some specific metric that only your application knows about? How does Stackdriver handle those cases? 

AJA: So you can do custom metrics. And that's one of the things that I really like. Because when I've done apps before, we frequently would sit down. We're like, well, how do we know if everything's OK? 

And we would sit down over a table and come up with a decision that these five endpoints need to respond in less than 100 milliseconds 95% of the time. With Stackdriver, you could then build up a metric for that. Or I worked on another app where we did a bunch of image resizing as part of the load. And so we needed to know how well the memory usage was on the machine. And we had a bar where if the memory usage went beyond a certain amount, that was concerning because we had messed up the image resizing process. 

And with Stackdriver, you can create custom metrics. You can also create custom metrics that you actually report from your application. There's an API that you can report into Stackdriver a metric that is interesting to you and have that show up in your dashboard, get alerts based on that, which is awesome. 

And all those are going to be app specific. That's one of the things that's really hard about talking about the cloud is there's so much that you can do with it and everyone's workload is just slightly different. I know a lot about web serving workloads. But there are so many cool things that people are doing that aren't specifically web serving. Data processing, for example, there may be other metrics that you need to report in on. And that's something that you could do with custom metrics as well. 

FRANCESC: Nice. 

MARK: Cool. So right now, if people want to get using Stackdriver, it's in beta. So it's currently free. But there was a recent announcement for what the pricing structure is. Do you want to talk a little about that? It seems pretty straightforward, though. 

AJA: Yeah. So the basic pricing structure, when it goes out of beta and into general availability, is there's going to be a free tier. And that's going to provide you access to metrics, traces, and error reports. Because we're talking specifically today about monitoring, but Stackdriver is a much bigger product than that. There's a lot of other features involved. 

And those are all going to be available in your Google Cloud Platform dashboard. And you can get that free monitoring on Google Cloud Platform Resources. So if you're using App Engine, if you're using Compute Engine, you'll be able to see your metrics in real time on the dashboard for free. 

Now, we're going to have a premium tier. That will give you your Amazon Web Services integration. So there's your cross-cloud. It's also going to give you support, if you need support on your monitoring logging. If you want to get alerts-- so you want to be notified in Slack or HipChat or PagerDuty or by SMS-- all that's going to be part of the premium tier. It also gives you custom metrics and several other features. 

So the premium tier is priced at $8 per monitored resource per month. And that's prorated hourly. And that's kind of the basics. So $8 a month per monitored resource. 

Now, the question everyone asks, there's two. What the heck is a monitored resource? And a second question is, how does that work if you're autoscaling? 

So monitored resources are App Engine instances, Compute Engine instances, Cloud SQL instances, and load balancers. So basically everything that could be mapped to a VM is going to be an instance. So when you scale up your App Engine app, you have more VMs that are provisioned and you scale it back down. 

And the autoscaling is they're going to take a snapshot every hour and they're going to figure out how many monitored resources you're using every hour. And they're going to prorate based on that. So if you spin up a VM and then spin it back down, or you use a bunch of different VMs over the month, we're going to try to come up with a way to smash those together, bin pack them to give you the pricing. 

So you don't have to worry about us charging you for every single different instance that you spin up. So it should work in a logical way for autoscaling groups. You should pay for a fraction of that $8 for the fraction of the time that you're scaled up. 

MARK: Sweet. So if I'm on App Engine standard, and I have a short spike where it goes up a fair bit but then comes back down relatively quickly, it sort of mushes that all together into one big chunk that I don't have to worry about too much. 

AJA: Yeah. And it's prorated hourly. So divide $8 by the number of hours in the month and that's your hourly rate. It's really not that much at all. 

The other question people ask is about how that works for containers. If you're running containers on Compute Engine-- and if you're using Container Engine, you're actually running your containers on Compute Engine resources-- we're still just going to charge you for the Compute Engine VMs and the amount of time they're up. So if you scale up your containers but you don't actually scale up the number of hosts that you're using to run them, you're still going to be paying the same price. 

FRANCESC: Cool. 

MARK: That's very cool. 

FRANCESC: So we're running out of time, but there's actually a question that I would like to ask you, which is, so I did not know monitoring was a thing, and I have something running in production. What do I do? What is the first thing I should start doing, like right now? 

AJA: So here's the thing that I tell folks what I'm doing mentoring. And I will say right now that I am not an expert on DevOps. But the very first thing you do is you should set up an uptime monitor. And all that's going to do is it's going to-- I usually set this up to hit a specific URL, frequently the base page of my app. And it tells me if that page stops responding. So it basically tells you if that page is throwing a 500 or a 404. 

If I want to get a little more sophisticated, in Stackdriver, you can do this. You can have it check for a specific string of text. And I often do the company name in the footer because almost everyone has their company name and the copyright info, or their name and the copyright info, in the footer of their website. And if that stops showing up, you know that there's a problem with the basic rendering of your page. 

Pro tip. Don't use the date if your date auto increments on the new year, because then you get a new year's day page when the date auto increments. 

FRANCESC: Happy new year. 

AJA: But get your uptime monitor setup. And then the next thing I think folks should do is they should set up some sort of metrics based on latency or application errors on the things that they know cause a bad time for their customers. And they should also set up some basic metrics. 

With Stackdriver, you can do it based on trends. So if your memory usage increases by 200% over 10 minutes, that's the kind of alert I would set up on the system level. Because that means you don't have to actually know what your normal state is, but you can still get an alert if something weird starts happening. Because the whole goal of monitoring is to let you know that something weird is happening so then you can use your big human brain try to figure out what it is. 

MARK: So really, it's about change. It's not necessarily what your base case is. 

AJA: Yeah. That's the-- I have no idea about monitoring and I would like to do this thing because it sounds good story. Focus on change and focus on making sure that the basics of your site are up. Because the worst thing that can happen is someone types in your URL or clicks a link in search results and ends up at a 400 or a 500. 

MARK: Yeah, that makes sense. All right. Before we finish up, is there anything in particular that you'd want to mention or feature or highlight, or anything fun like that we may have missed? 

AJA: No, I don't think. So I just think everyone should at least-- since it's free right now, people should check out Stackdriver. Try it. If they've got a cross-cloud load, they should totally try it there and they can see how awesome it is to have their AWS and their GCP resources side by side in their dashboard. 

The example I did for one of the talks I gave recently was I did a MySQL cluster that was half in GCP and half in AWS. And I was replicating from GCP into AWS. 

And it was really great to see the compute resources that were being used, memory and disk and all that, but also seeing the inserts and the deletes and the updates side by side for all of them. And I was able to set up the same alerts on the same exact thresholds for both clouds. And seeing that side by side, as someone who's done a combination of cloud and on prem, as someone who's done cross-cloud as part of disaster recovery and all that, it was really nice. And it made me wish I had these features back when I was responsible for keeping a site up. 

So I think people, while it's in beta, should go check it out. See if it's going to work for them. See what it looks like when all of your monitoring, logging, error reporting stuff is all in the same place. 

FRANCESC: And I think that the demo you that you were mentioning, not only you gave a talk, but you also wrote a blog post. 

AJA: I did. There's a blog post on the GCP blog called "Six Things Stackdriver Brings to the DevOps Table," and it's awesome. 

FRANCESC: Cool. So we'll add that to the show notes for sure. 

MARK: Absolutely. All right. Great. Thank you so much for joining us, Aja. It was great talking to you. I learned a whole bunch about monitoring I didn't know before. 

AJA: Thanks, guys. 

FRANCESC: Thank you. 

AJA: Thanks, guys. This was really, really fun. 

MARK: That was a great conversation that we had with Aja. Thanks so much for joining us today. I learned a whole lot about what's possible and not possible with our monitoring solutions. 

FRANCESC: Yeah. Apparently, you can detect if your data center is on fire. 

MARK: Yeah. I think I want to set up custom metrics with smoke detectors so that they can send it to Stackdriver. And then they'll be like, yes, there's a fire. 

FRANCESC: There's indeed a fire. 

MARK: An uptime check is not enough. 

FRANCESC: Yeah. Resetting the computer will not fix the fire. 

MARK: No. Absolutely. All right. So why don't we get on to question of the week? I think you had an interesting one there. 

FRANCESC: Yeah. 

MARK: Why don't I set up for you, and you give me the answer? So we were talking about if, say, you've got a Google Cloud Storage bucket, and there's a bunch of data in it. And you're like, OK, I'm going to pull this data down so I can look at it. 

So you pull it down using gsutil. Great. That's fine. And then you're like, oh, wait. There's some stuff I need to change in it. So I make some small changes to maybe three or four out of the 200 files or something like that. But I want to sync that up to what's in the cloud. But I'd rather not send all that data straight back up. I'd rather just do whenever's changed. Is there a way I could do that? 

FRANCESC: Absolutely. And the way I see it is not everybody knows this command because it's a Linux command. And it is actually not that well known. 

MARK: Really? 

FRANCESC: Yeah. I mean, you have a Linux laptop, but not everybody does. 

MARK: OK. 

FRANCESC: Yeah. But there's this command called Rsync that basically, what it will do, is it will check the difference between the contents of the source and the content of the destination. And it will send only the changes. And not only that, but it will also do checksums to make sure that everything that you're actually sending will be correctly received. 

So basically, it's a very safe way of syncing back your changes to the original data store. Now, it is important to be careful because there's one thing, which is like the dash, so -d. And -d, what it will do is it will do recursively. I've done this, which is-- like you know the commands have source and destination. 

MARK: Yep. 

FRANCESC: And source goes first, and destination goes after. 

MARK: Oh, you don't want to flip those. 

FRANCESC: If you flip those, basically, what you do, you delete all your data. So you should be careful with that. Don't do it. 

MARK: So -d does the delete? 

FRANCESC: No. -d, what it does is basically recursive, like directories. So if you say, I want to change everything that is inside of this place with this is the source, that's the destination, and you do it backwards, bad times. So you don't want to do that. 

And if you want to understand better what Rsync does, for me, the way I see it is kind of like get. When you do get, and you do get pull, get push, what you're sending over the network is just the difference between the files. That's exactly what we're doing. 

So if you have a huge data file, let's say one gigabyte, and you only change the first 1K of that image-- probably it's an image, or a video, whatever. You will only send that part that changed. So it will be much, much faster than sending the whole file back up. 

MARK: So for those people who are familiar with Rsync, is this just using Rsync, or is this Rsync with some G Cloud tools? How does that work? 

FRANCESC: Yeah. So Rsync is a Linux command, as we were saying. You could, I guess, use Rsync directly with Google Cloud Storage. But you're going to have to be dealing with authentication. And I'm not really sure it could work. 

So instead, we have gsutil rsync, which is a subcommand of gsutil. So you can simply say gsutil rsync, source directory, which could be either your local machine, or somewhere in the cloud-- eventually Google Cloud Storage. But actually, you can do it over multiple clouds. And then a destination which, again, could be either local or something remote. And it will just do the sync between. 

MARK: Oh nice. Actually, I'm just looking. You can also do it from between Google Cloud Storage and an S3 bucket as well. 

FRANCESC: Yeah, absolutely. So that is pretty cool. If you're thinking about migrating or having two different things that are up to date, you could run these regularly. Like every day at some times, you just run this script, and it just updates everything together. So it's a very, very handy tool. If you need to sync things up, Rsync is what you want. 

MARK: Sounds very good. Excellent. Well, thank you very much for joining us this week. I believe, when this comes out, you'll be doing something special? 

FRANCESC: Yeah. So last episode, I don't know how to use calendars. 

MARK: Time is hard. Time is just very, very difficult. 

FRANCESC: Yeah. It's not even time zone. It's weeks. [INAUDIBLE], weeks. So yeah. By the time this episode comes out, I will actually be at GopherCon. I'm doing the opening keynote, and super excited about it. 

MARK: Awesome. 

FRANCESC: My slides are-- they start to look good. I think that it's going to be a good talk. 

MARK: I've seen some rehearsals. Pretty impressed. Just want to say, just a little bit impressed. 

FRANCESC: Pretty excited about that. So yeah, I will still be in GopherCon. And actually, on Wednesday, we'll be running Go project rooms. So if you're around, go there. Go check it out. We're going to be talking about the Go project. We even have a little session on diversity. We're going to be discussing, what can do to make the Go community more welcoming? So if you want to go say hi, come say hi. 

MARK: Head on down. 

FRANCESC: And what about you? 

MARK: So unfortunately, I won't be at GopherCon. Doesn't pan out for me this year. I know. It's very sad. 

I think for me, next will be in August, I will be at PAX Dev in some capacity. So if you're going to be there, drop me a line on Twitter or something like that and let me know. 

FRANCESC: In August. Oh my god. You're not doing anything till August. 

MARK: I have some things cooking. Nothing's been locked down yet. 

FRANCESC: We will announce. 

MARK: We'll work it out. 

FRANCESC: Great. Well, thank you so much, again, for taking the time to do this episode. I've really enjoyed this one. 

MARK: Yeah, me too. Thank you so much. 

FRANCESC: And see you all next week. 

MARK: See you next week. 
{{< /transcript >}}