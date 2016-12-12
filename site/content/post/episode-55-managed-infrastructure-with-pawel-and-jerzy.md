+++
audioDuration = "00:35:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.55.mp3"
audioSize = 51747305
categories = ["Managed Infrastructure"]
date = "2016-12-07T01:07:49Z"
description = "Today we learn everything there is to be learnt about Managed Infrastructure from Pawel Siarkiewicz and Jerzy Foryciarz, two Product Managers at Google working on the topic."
draft = false
episodeNumber = 55
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Managed Infrastructure with Pawel Siarkiewicz and Jerzy Foryciarz"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/SWuXrSgrmqt"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5h0vf7/episode_55_managed_infrastructure_with_pawel/"
+++

Today we learn everything there is to be learnt about Managed Infrastructure from
[Pawel Siarkiewicz](https://twitter.com/psiarkiewicz) and [Jerzy Foryciarz](https://twitter.com/fotwit),
two Product Managers at Google working on the topic.

Your co-hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
are here to help you understand what is Managed Infrastructure and why sometimes it might be
just the right level of abstraction and automation you need.

<!--more-->

##### About Pawel

[Pawel Siarkiewicz](https://twitter.com/psiarkiewicz) is a Product Manager on Google Compute Engine
Managed Infrastructure. Prior to joining Google at the start of 2016, Pawel was a Technical Director
at Electronic Arts, a CTO at Genus Capital Management and an entrepreneur.
He holds a B.Sc. in Computer Science and an MBA.

##### About Jerzy

[Jerzy Foryciarz](https://twitter.com/fotwit) is a Lead Product Manager on Google Compute Engine.
Jerzy joined Google in 2011 working for Google TV, Youtube and Google Now. Prior to Google he was
an Engineering Director of Motorola Cellular Networks Software. He holds MSc in Computer
Technologies in Nuclear Physics from Jagiellonian University, PhD in Nuclear Physics From
National Academy of Sciences in Poland and an MBA from Chicago University Booth School of Business. 

##### Cool thing of the week

- Making every (leap) second count with our new public NTP servers [blog](https://cloudplatform.googleblog.com/2016/11/making-every-leap-second-count-with-our-new-public-NTP-servers.html)
- Google Public NTP [docs](https://developers.google.com/time/)
- Power up your Google Compute Engine VMs with Intel’s next generation, Custom Cloud Xeon Processor [blog](https://cloudplatform.googleblog.com/2016/11/power-up-your-Google-Compute-Engine-VMs-with-Intels-next-generation-Custom-Cloud-Xeon-Processor.html)
- Google Compute Engine Custom Cloud Xeon (Skylake) Processor Interest Survey [form](https://docs.google.com/a/google.com/forms/d/e/1FAIpQLSevvO7mlJC45lPvdNRnjE-Hz4z-cVZGd841lc9rFgfzObeJkQ/viewform)

##### Interview

- Managed Instance Groups [docs](https://cloud.google.com/compute/docs/instance-groups/)
- Autoscaling Groups of Instances [docs](https://cloud.google.com/compute/docs/autoscaler/)
- Autoscaling Video Tutorial [YouTube](https://cloud.google.com/compute/docs/autoscaler/)
- Autohealing VM Instances [YouTube](https://www.youtube.com/watch?v=dT7xDEtALPQ)
- Preemptible VM Instances [docs](https://cloud.google.com/compute/docs/instances/preemptible)
- Use Docker Containers with GCE and Managed Instance Groups [docs](https://cloud.google.com/compute/docs/instance-groups/deploying-docker-containers)
- Rightsizing Recommendations for Google Compute Engine [docs](https://cloud.google.com/compute/docs/instances/viewing-sizing-recommendations-for-instances)
- Managed Instance Group Updater Alpha [docs](https://cloud.google.com/compute/docs/instance-groups/updating-managed-instance-groups)

##### Question of the week

How do I restrict access to my service, by IP address range in Kubernetes?

- Configuring Your Cloud Provider's Firewalls [docs](http://kubernetes.io/docs/user-guide/services-firewalls/)
- Using Networks and Firewalls [docs](https://cloud.google.com/compute/docs/networking)

{{< transcript "FRANCESC: Hi, and welcome to episode number 55 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing?" >}}
MARK: I'm good, thanks, Francesc. I'm away from you at the moment-- still at home in San Francisco. 

FRANCESC: I know. 

MARK: But I'll be joining you in LA shortly. 

FRANCESC: Yeah, I'm already in the LA office-- a very nice office designed by Frank Gehry, nonetheless. It's a pretty nice place to be-- beach and everything, yeah. 

MARK: Fancy. 

FRANCESC: So, yeah, see you soon. But before that, we need to record an episode. So let's go with that. We're going to have a fun interview today. I think it's a very interesting interview. We're going to interview two members of the Managed Infrastructure team at Google Cloud Platform. 

And I'm going to try to say the names, even though I'm sure I'm going to fail at this. So we have Pawel and Jerzy-- Pawel Siarkiewicz and Jerzy Foryciarz. And I think that that is probably the best I can do. 

MARK: Very well done. Very well done. 

FRANCESC: Yeah, I think it's pretty good. I'm pretty proud. So, yeah, we're going to be interviewing them about, what is Managed Infrastructure, and why it is important, and why it might be the good solution for you. So it's an interesting episode. 

MARK: Absolutely. I'm really interested in it. For interest's sake, you might want to go back-- not you specifically. But someone in the audience might want to go back and listen to episodes about continuum of the cloud and maybe even Google Compute Engine or virtual machines episode as well. They might find them particularly relevant. 

FRANCESC: Yeah, I think that episode number two was about that-- was compute as a continuum. It was a very interesting episode. And maybe time to refresh it one day-- who knows. But before we start refreshing any episodes, let's finish with this one. 

MARK: Yeah. 

FRANCESC: So after the interview, we have a question of the week. And it's about our favorite topic ever for questions of the week, which is Kubernetes. 

MARK: Yup, always keen to have Kubernetes-- about how you can lock down your services inside Kubernetes so you can control who can access them and whatnot. 

FRANCESC: Yeah, so security, security, security, but it's very important. But before that, we're going to go with our cool things of the week. And one of the cool things of the week-- I think it's really cool for multiple reasons. I'm kind of a geek about this thing. 

It's called time. And time is the kind of thing that is like, oh, it's easy, until you start doing time zones. And when you think time zones are hard-- especially in Australia, I don't know what's going on with that country. But then you need to start thinking about things like leap seconds and stuff like that, which we will have one this year. So we actually opened an API to do this. 

MARK: Yeah, so across Google, we have these public NTP servers. So if you haven't ever used-- well, you probably have used NTP, but you don't realize it. It's a global services that are provided to synchronize time across machines. And we now have these public NTP servers that are available for you to use that do the leap smearing for leap seconds so that your machines don't do weird things when they think 61 seconds is good time to have in a minute. 

FRANCESC: Yeah, it is kind of cool. There's a GIF that I really like, which is a cloud going. It's 23:59:58 of December 31st. And it goes, 57, 58, 59, 60. So it counts 61 seconds in the minute, which is actually what will happen this year. So, yeah, 2016-- longer than expected. 

And it's a really cool thing. Because not only do you get access to time that is very precise, you're actually using load balancers so you get access to the closest atomic clock in the data center where your instance is running. So it's incredibly accurate. 

MARK: That is very cool. I didn't realize that was the case. That's pretty cool. 

FRANCESC: Yeah-- probably way more accurate than you will ever think. So yeah, it is incredibly powerful. It's a very powerful clock, yes. 

MARK: Yeah, so that's really cool. I like the second cool thing of the week, because I like fast hardware. We have a strategic alliance with Intel, which is pretty awesome. And that means that we have announced the upcoming Xeon Processor is going to be available on Compute Engine and other virtual machines, and available on Google Cloud Platform. So if you're keen to be on the latest and greatest in hardware, that strategic alliance is pretty awesome. 

FRANCESC: Cool. And I see that it will be in all our flavors-- so standard, high MIM, and high CPU. So it's going to be available for whatever you're trying to do. You're going to get access to pretty amazing processors. That is very nice. 

MARK: Yeah, it's actually really cool also if you look into the alliance. There's stuff in there about optimizing Kubernetes for Intel architecture, TensorFlow, IoT security, a lot of really cool stuff. 

FRANCESC: Nice. And if you're interested in joining the beta program-- because it will be open sometime in 2017. It says early 2017. But if you're interested in testing it, there's a beta program. And we'll have a link to the forum so you can apply to it from the show notes. 

MARK: So it sounds like it's time for us to go talk Managed Infrastructure with Pawel and Jerzy. Why don't we go do that? 

FRANCESC: Let's do that. 

MARK: So I'm very pleased to have two wonderful gentlemen here with us today to talk to us about an interesting thing called Managed Infrastructure. We have two product managers whose names I am most likely going to massacre, but I will try my very best. Pawel Siarkiewicz and Jerzy-- oh god-- Foryciarz. Is that even remotely close? 

FRANCESC: That was pretty bad. 

MARK: That was pretty bad, yeah, yeah. 

JERZY: It was bad, yeah. It's Foryciarz. But you can totally go with it. You're much better than any of the flight attendants that are trying to do that. 

MARK: Excellent. How are you both doing today? Pawel, how are you doing? 

PAWEL: Very good, thank you. 

MARK: Good. And Jerzy, you seem to be doing well. 

JERZY: Good, good-- absolutely. 

MARK: So thank you so much for joining us, both of you. I really appreciate you both taking the time. I'm really excited about this conversation. Before we get stuck into the details, though, let's talk about who you are and what you do here at Google. Pawel, I'll pick you at random. How about you go first? 

PAWEL: Sure. So I actually started as a programmer and spent most of my career being a coder and then a lead and a technical director and kind of that usual path. And then at some point, I decided to take a bit of a detour into business and peer management. But it turns out I really do just like building products, and ended up as a product manager at Google. And I've been here since the beginning of 2016. 

MARK: Excellent. And, you, Jerzy? 

JERZY: Yeah, so my career actually started several years ago when I was a nuclear physicist. And then I moved to the industry and worked for several years as an engineering director at Motorola. And then I moved to Google, where I was initially working on Google TV, then on Google Now. And two years ago I moved to Google Cloud. 

MARK: Cool, cool. 

FRANCESC: That is a not very traditional way to end up on Managed Infrastructure. Why don't you tell us little bit about, what do you mean by Managed Infrastructure? 

JERZY: OK, let me go first. So Managed Infrastructure is a suite of products and features that are making the life of a DevOps easier. So we tend to call it a zero DevOps notion. It's something where you really don't need to worry about your infrastructure. You can focus just on your obligations. So in terms of what we talk about in here, we look at two components, one of which is the managed instance groups-- and I'll explain in a second what this is-- and the second one is rightsizing. 

So managed instance group is a way of creating virtual machines in a repeatable way in a mass scale. So imagine you're running a service. Let's say it's a web service. And it has front ends running on a virtual machine. But as the load is drawing, you need more and more connections handled. And at some point, there is not enough that there is a single machine. 

So this system can be built based on the managed instance group. And all of the logistics related to adding instances, removing instances automatically, is served by autoscaler. The fact that they are kept alive and they are recreated whenever there is any problem is done by autohealer. And then you can deploy a new version of the software using [INAUDIBLE] data while your services are still running. So all of that is the suite of products we call Managed Infrastructure. 

And now the second piece of it is the rightsizing. It's a way for us to tell you, look, you're our great customers, and we don't want you to overpay. It's one way of saying it. And the second is, look, we really see that the setup on your machine has too little of the memory or not enough cores to perform your tasks. So we get you rightsizing recommendations and a way to quickly actuate it so that you're in good shape. That's pretty much it. 

MARK: Cool, OK, so basically it sounds like this is a way to manage virtual machines in a very elastic way that enables you to scale. Excellent-- all right, cool. So I guess my question at this point is, OK, what sort of applications does this lend itself to? Is there a particular set of types of applications? I don't know, what sort of requirements or restrictions does this fit into? 

PAWEL: So in terms of the applications that run well on MIGs, there is a couple of what I would call kind of canonical typical use cases that we see. And there are some that spin out of that. But let me start with the simple typical use cases. 

And the first one is anything that serves traffic. So typically that could be, let's say, a web front end that either connects to a phone application that was distributed to your users, or maybe it's just a classic store. And what makes it really a good match for managed instance groups is that, first of all, your usage is very dynamic. 

So as your traffic grows with, let's say, the local time, you need suddenly a lot more processing-- as much as twice or 10 times as much as you need in your downtimes. And so you really want to take advantage of this autoscaling, where as the traffic is showing up in real time, we'll be creating machines in real time and scaling up very, very quickly so that you can take your peaks and serve all of your customers. 

And then as soon as the traffic stops, we'll get rid of those machines so you don't have to be paying for resources you don't use. And typically those services are stateless, so each machine can basically be brought up and then destroyed. And it doesn't have any local state, so it's very flexible that way. 

And the other use case that is a very good usage of MIGs is anything that can or has to process, let's say, lots of data in a distributed fashion. So maybe you're analyzing financial data. So you have 10,000 stock quotes, and each one can be analyzed independently. So that can be distributed over lots of machines. And then you want to do that as you crunch through your data. 

But the other part of that workload is that it's very much on demand. So new financial data might show up, or maybe you have a new model that you want to analyze. And so you go from, I need none of this compute, to, I need all of the compute immediately, as soon as you can give it to me, to process through all of this data in parallel. So the MIG can scale up very quickly and basically give you all of the machines. You crunch through your data, and then it disappears. 

Another use case that's typical is things that work around image processing. So maybe you're getting a data download of satellite imagery or some other imagery that comes maybe once a week. And so again, you don't need these machines six days of the week. But then one day of the week you need all of them, because you've got terabytes of image data to crunch through. But each image can be processed independently. So that's a perfect use case. So this is kind of like distributed large-scale data processing. 

And then another aspect that's kind of orthogonal to this, but also important, is this idea of highly available services. So whether that's your web front end or even your data processor, you want to make sure that the machines will recover if they crash or hang or have some other issues. And you don't have to yourself go in there and fix it. So with autohealing, you can monitor these machines. And if they run into trouble, your custom health check will report on that, and the managed instance group will take care of this and restart the machine. 

And then the other side of the highly available equation is this concept that if all of your machines are in one zone-- our zones are stable, but at the same time outages can happen. And it is a best engineering practice to say, if you need a service to be really, really stable, you don't want to put all of your machines in a single zone, because things can happen. And so you want to spread it across multiple zones. 

And so now with a managed instance group, you can essentially spread your machines evenly across three zones. So now we have something that's called a regional managed instance group. And we take care of this problem of balancing. So we'll add machines and remove them as needed so that each zone is even to the other zones. So if any one of them disappears, you can route your traffic automatically to the other zones and not have any downtime. 

Yeah, so it's anything that's basically distributed, independent, stateless. And then highly available requirements is the additional piece. 

FRANCESC: Interesting. So nowadays, most people, when they start thinking about, well, I have specific needs-- like you were mentioning video processing or big data processing that needs to be done quite fast. Most people would think about using things like Kubernetes. What are the differences, what are the benefits, of using managed instance groups or Managed Infrastructure, as we call it, over going with something like Kubernetes or maybe even App Engine Flex? 

JERZY: All right, so let me take this one. So all of these products-- we call them engines-- are complimentary. So you first need to start from asking yourself the question, how much control do I want to keep versus how much control do I want to give out? And then we'll treat everything automatic. 

And from that perspective, you have three choices. You have App Engine or App Engine Flex as one product. It's best for the web services of any kind. It's the easiest to start. Well, there is some limitation to the languages that you can possibly use. But you can load your custom Docker containers. And well, it's the easiest way for you to start on these kind of services. 

Now, when you want some more control, or when you want to control the cost of performance, or when you want super fast autoscaler, these are the factors that would tip you towards the Google Compute Engine. So this is where you have the managed instance group as a base service. So Google Compute Engines are just your VM machines. So Google Compute Engine, specifically, is the platform on which App Engine Flex is operating. 

And it's also a platform on which Kubernetes is operating. So now what Kubernetes is adding on top of Google Compute Engine or a managed instance group is two factors. It's the overall container's orchestration that contains two distinguishing factors, one of which is bin packing, and the second one is general scheduling slash microservices. So these two cannot be done on any of these other platforms. Well, they come as a service. And what you have beneath is a cluster of machines. And these machines are likely run by the managed instance groups. 

MARK: So I guess if we're thinking about it in terms of the compute continuum, on far, we'll say, left-- pick a direction-- that's like platform as a service App Engine. Far right is GCE, straight up infrastructure. This sort of sits, I feel like, somewhere between Kubernetes and GCE. 

It sits in between those two things, where it's not entirely infrastructure as a service and it's not nearly as managed as, say, Kubernetes. But it sort of sits in between and gives you a bit more flexibility than, say, Kubernetes, but a little bit more that you need to manage yourself. Would that be pretty accurate? 

JERZY: I think it's very close. I think you have to remember that managed instance group is GCE. This is exactly where we see it. It's just a layer of management on top of GCE. 

But yes, in terms of the flexibility, this is exactly where your position is. GKE is one more level higher in terms of abstraction. You give up some of the control, and you gain a lot of management in terms of packing and scheduling the containers on top of a cluster of machines that you don't necessarily need to manage yourself. 

FRANCESC: Cool, so let's imagine that I decide to-- and actually I've done it before. I need a bunch of machines running ImageMagick. And what I'm going to do is I create a new instance, and I connect to it. I do apt-get, install, install ImageMagick, and now I install my software on top of it. And everything is running. It works. 

Now normally, if I was in Kubernetes, I could create a Docker image for that and [INAUDIBLE]. How does that look on my managed instance groups? How do I make sure that the new instances that come into my managed instance group have all the software and all the features that I require? 

JERZY: So actually, this is a very good question. So similarly to what you can do on both App Engine and Kubernetes, you can get all of your software into a Docker container and then deploy it into the managed instance group in a similar way. The only difference is just sitting as one container on top of your VM. So in that place comes the need for deciding very well on how small your VM machine can be so that your cost is optimized. Everything else works the same. 

And really, creating a managed instance group is strictly defining what type of a machine I want to run. And then where do I pull my Docker container from? And so once we have these two parameters defined-- we define them in something I would call an instance template-- then you can create a group. 

And once you have a group, you can either tell it, I want 100 instances, 1,000 instances, 2,000 instances of the same. Or you can enable autoscaler and say, I want the average CPU utilization to be around 60%. Or you can enable autohealer and say, if I don't hear from this health check three times in a row over a 30-second period, consider it unhealthy, and please recreate that instance for me so that it continues operating. 

FRANCESC: Cool. So the question I'm going to ask now, it's going to make me look very bad. But I actually didn't know you could run Docker containers directly onto an instance group. Do you need to choose a specific image, a specific OS? How does that work? 

JERZY: Well, this is a very new feature. It's actually in alpha. So first of all, you have to check on our documentation or google our documentation and sign up. And once you're there, we'll enable you, we'll white list you, and then the type of image that runs there is Google container image, and it automatically runs your Docker container. 

FRANCESC: OK, so it was alpha. I feel less bad now. 

MARK: OK, so for those who aren't necessarily part of the alpha program or have probably an investment in, say, traditional DevOps types tools-- so Chef, Puppet, Ansible, Terraform-- if people want to use those tools to do more of an installment directly on the machines themselves, how does that look? 

JERZY: Well, first of all, they can do it directly. They can load the code directly, the application directly, onto the machine using just the startup script or [INAUDIBLE] an image, or using Deployment Manager. And these are the tools that are provided with the platform. 

But obviously we are integrated with Chef, Puppet, Terraform, Deployment Manager. And all of these tools have plug-ins or connections so that you can use them to deploy instances that will be part of a managed instance group. And we'll do all of the [INAUDIBLE] of the platform. It's there. It's documentation. You can find all of the documentation on our documentation page, along with examples and some case studies. 

FRANCESC: Cool. We'll have links to all of that documentation. Do you have a little bit of a view on, what are the tools that people are actually using most? Do people use a lot of Terraform? Or have you seen people using Puppet mostly? 

PAWEL: So I'll jump in. It's a fair mix, I think. The nice thing about the managed instance groups is that because they're just built into GCE itself and they're supported by API, G Cloud, and UI, we have people using managed instance groups from all of those entry points. 

So when you're starting out, you can just go into the UI and create an instance group based on a template, or create an image, create a template, create your group. And that's very easy to get started with, because you can see it, feel it, get your hands dirty with this very intuitive view of the group of instances. And then you can graduate, if you want, to using G Cloud if you want to be doing some simple scripting. And then of course, if you're building something more solid, you go to the API. 

But then what we are seeing, of course, with Chef/Puppet is that people are creating their own kind of cookbooks and scripts. And we're looking at building some of those on our own as well so that we can really support the managed instance groups as, I would say, like a first-class citizen of these different cookbooks. So you can just create a group and have it be managed externally. And then of course, with even our internal deployment stack, so like the Deployment Manager, you can use that to create managed instance groups. And that's another common use case. 

FRANCESC: Yeah, that is Mark's favorite product of all Google Cloud Platform. He always talks about it. 

MARK: I do talk about Deployment Manager. 

PAWEL: Nice. Nice. Well, we do like it. 

MARK: I just want people to script their deploys. It's all I want. 

PAWEL: Infrastructure is code. 

FRANCESC: So there's something that I think is really cool and most people tend to forget, which is you can actually create managed instance groups with preemptible machines, right? 

PAWEL: That's right. 

FRANCESC: And could you talk to us a little bit about, what are the benefits of this and, real quick, why people would use them? 

PAWEL: The why is just to save money. I mean, the preemptibles are there if you want to save on costs, but at the same time, if you're willing to give up the control of the instances. And the nice thing is that if you use managed instance groups, you already have this mindset of each instance is replaceable. It's stateless. I can create, destroy them, because they'll just connect, get their work, and then do it, and then upload it or do whatever needs to be done. 

But each specific instance isn't special. And so if you accept that mindset and now you're running, let's say, a managed instance group with 2,000 instances, and any one of them can be replaced at any time, then suddenly preemptibles make sense. Because, well, maybe preempt a bunch of them-- that's OK. Because autoscaling, or whatever other automation you have running, will just create new ones. And you can keep going and keep working. But you keep your savings. 

MARK: Awesome. Just for fun, I want to ask, what are the coolest things you've seen built on top of Managed Infrastructure? Has there been a particularly awesome project that you thought was particularly fascinating? 

JERZY: So we've seen a couple of interesting events, one of which was one of our colleagues decided, when we first rolled out a beta version of autoscaler, we can actually show on stage that we can ramp out to serving one million queries per second. So we did an on-stage demo pulling a load generator and starting it, and then creating, from scratch, a managed instance group running off-the-shelf Apache and loading it with the load so that it started adding instances. The load was growing gradually. And within six minutes, we were already supporting one million queries per second. So can you beat that? 

But another interesting story is one of our customers-- who was migrating partly from on-prem and partly from a different cloud provider-- was having this spiky load. And this was an application back end, so it was super important for this customer not to lose these requests. 

And this customer came in and said, look, I really need predictive autoscaling. And predictive autoscaling is something where you would be able to say, well, tomorrow at 7:00 AM, I'm going to have to use this many instances at least, and it will automatically adjust to that. 

And we didn't have it at the time. And they told us a story. And the story was, well, your competition also didn't have it. So we ended up disconnecting autoscaler around the time when we most needed it. And then we ended up adding these instances manually based on some back of the envelope calculations that we tracked in a spreadsheet. 

And it was a terrible experience. So only 10 minutes after the peak has happened, we were reconnecting the autoscaler so that it would do the clean up and mostly scale down all that. So they were miserable. 

So we said, well, we'll be happy to work with you. But can you just try our autoscaler? And they said, no, look, you don't understand. We've used the autoscaler on your competitor's cloud for years. It's never going to work in this condition. 

We said, well, OK, we promise you we're going to build it, but just try it. And a couple of months later, we got an email. And the email was just one sentence. It said, predictive autoscaling is no longer necessary. Thank you. 

FRANCESC: Nice. 

MARK: Nice. 

PAWEL: Yeah, for mine, I think the coolest thing I see is some of the things people build with the custom metric. So autoscaling everyone understands to be CPU bound or based or QPS based, which is like traffic. But you can actually code up your own metric, which could be anything you want at all, and scale on that. 

And that's what some of the customers have been using to build different Q-based scaling solutions that are a little bit smarter so that as the work comes in, the metric gets calculated, and then the autoscaler just listens to that and then scales up and down to process the work you have based on your own definition of what work means and how much time you need per work unit and per instance. 

And I think there's a lot of flexibility with that, because you have that full control of how you calculate it. And then we'll just scale it based on how you want it scaled and get through your work, and then scale you down when you don't need the machines. 

FRANCESC: Cool. I'm actually going to add one more story. 

MARK: Go on then. 

PAWEL: Please do. 

FRANCESC: Yeah, we interviewed Tim Kelton from the Descartes Labs-- or "Dess-cartes" Labs depending on how good or bad your accent is. And they told us about how they were processing terabytes of maps with managed instance groups, and how they were very happy with both the load balancer, the autoscaling, and the parental machines. So if people are interested in listening to the whole story about it, we have episode 41 that you check out. 

PAWEL: Oh, excellent. 

MARK: Cool. Well, I think we're running out of time just a little bit. But I'll give you a chance just if there's anything that we haven't mentioned, or maybe new things coming up, or basically anything cool and exciting that you want to make sure hits our podcast listeners. Is there anything else you want to add? Pawel, why don't you go first. 

PAWEL: Sure, yeah, absolutely. We're always working on new things and are excited to share them. So on my side, I want to share the updater, which is now in alpha. And it's also, like the other feature, you have to be white listed to use it. But we'll be going to beta very soon. And so what the updater does is it allows you to roll out a new version of your software to your managed instance group in a nicely controlled fashion. 

So you can control the rate of the update, how many machines can be offline at the same time, how many machines to spin up extra if you want to always have your service running. Maybe you want to do canary rollout and do a partial rollout, test it for a while. So all of those features are available, which makes it super easy to, basically, deploy new versions of your software onto your MIG without disrupting your service. 

MARK: Excellent. And, you, Jerzy? 

JERZY: Yeah, well, the regional managed instance groups are going GA-- just very GA-- next week. So you can count on all of the great support and SLA with all of the services that we already provided in beta. 

MARK: Cool, which may actually already have gone GA depending on when we release this podcast. 

JERZY: Yeah, I think probably if it's next week, probably yes. 

FRANCESC: So check it out. Check the Google Cloud blog to make sure if that announcement has been out already. Awesome, well, thank you so much to you two for taking the time to tell us a little bit more about managed instance groups and tell us about all the cool things that people are building. 

PAWEL: Thanks for having us. It's always great to talk managed instance groups. 

FRANCESC: Awesome. Thank you-- bye. 

MARK: Thank you. 

PAWEL: Thanks. Bye. 

JERZY: Bye. 

FRANCESC: Thanks so much to both Pawel and Jerzy for such an interesting interview. I think that it was very enlightening to see not everything is Kubernetes. You can go with GCE and do many things. And there's a lot of features that will help you make GCE very manageable. That is a pun, because, you know, Managed Infrastructure. 

MARK: Because it's Managed Infrastructure. Yeah, yeah, that's good. I like that. I like that. Well done. 

FRANCESC: OK, OK. 

MARK: But I think you're right. It just goes to that whole continuum thing as well. If one of these things isn't a fit, you've got so many layers and so many levels where you can come in and be like, oh, maybe, I'll use this particular one, and it'll be a better fit for what it is I'm doing. 

FRANCESC: Yeah. And as I was saying, that not everything is Kubernetes, let's go with the question of the week about Kubernetes. So the question is, OK, imagine that I have a Kubernetes cluster, and I have a service that I expose, and I expose it to the world. But I want to make sure that only some specific IPs, or maybe a range of IPs, is able to access it. How do I do that? 

MARK: So it's actually surprisingly easy, which is really, really cool. You're able to restrict access to a load balancer service to an IP range in your YAML file in the same way as when you define your service. There is an argument in there that you can set called load balancer source ranges. It's a CIDR-- "sidder"? I don't know how you'd pronounce that. CIDR? 

FRANCESC: I pronounce it "cider." 

MARK: "Cider"? Cider"-- OK, I can work with that. It's one of those things you read on the internet but you never hear someone say out loud. So it's an IP range format-- for those who aren't familiar of it-- so that you can specify what IP range you want. So if you've got a specific set, maybe a particularly white listed IP or a particular white listed set of IPs, it's very simple to do that. It ends up translating behind the scenes to being firewall specifications inside Google Cloud. And then only those IP addresses can connect to those services. So you have better security if you want only particular things to access the services you have available on Kubernetes. 

FRANCESC: Cool. I think that the important thing is that the same way we're saying that you can do this in Kubernetes very easily, this ends up being translated as just one more firewall rule that will be applied to the load balancer generated on Google Compute Engine. So if you want to do that by yourself, you can also do that. If you're not running Kubernetes and you want to constrain the range of IPs that you're exposing your service to, you can use G Cloud compute firewall rules and do exactly the same. 

MARK: Yeah, so it's all the same things under the hood. And if you're not using Kubernetes on us-- maybe you're doing it on AWS. It's supported there as well. So that's pretty cool as well. 

FRANCESC: Cool. And the last thing is if you do this, and for any reason you're running Kubernetes on a provider that doesn't support this feature, it will just be ignored. So be careful with that, I guess. 

MARK: Yeah, excellent. All right, well, it sounds like that will be the end of the episode, which is a little sad, but that's OK. I will be joining you shortly in LA. But are you doing anything before the end of the year, or anything special going on? 

FRANCESC: Not really. I'm just back from a week in China. It was awesome. We're going to be this week here in LA. And after that, I'm just going to be enjoying my holidays. I'm actually getting ready for two conferences early next year. 

At the end of January, I will be in GoLab.io, which will be in Florence, Italy. And I'm very excited about that one. And then in early February, I'll be back to one of my favorite conferences, [INAUDIBLE], in Brussels. 

MARK: Excellent. Yeah, I think all I'm really doing is ramping up for end of Feb next year. And the Game Developers Conference is just before that here in San Francisco. 

FRANCESC: Just a couple of big things, you know. 

MARK: Just a couple of big things, exactly. 

FRANCESC: Cool. Well, thank you, Mark, for recording today remotely. Well, I guess I am the one that is recording remotely, but thank you anyway. 

MARK: Definitely. Thank you, too. Thank you to everyone who's listening to us. And see you all next week. 

FRANCESC: See you. 
{{< /transcript >}}