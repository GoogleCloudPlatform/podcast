+++
audioDuration = "00:37:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.312.mp3"
audioSize = 53869243
categories = ["Managed", "Home Depot", "Kubernetes", "Scaling", "Cloud Logging", "Cloud Monitoring"]
date = "2022-07-20"
description = "We're talking about Prometheus with guests Lee Yanco and Ashish Kumar this week!"
draft = false
episodeNumber = 312
hosts = ["Carter Morgan", "Anthony Bushong"]
title = "Managed Service for Prometheus with Lee Yanco and Ashish Kumar"
image="/post/episode-312-managed-service-for-prometheus-with-lee-yanco-and-ashish-kumar/images/hero/hero-EP-312.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/w3rt57/episode_312_managed_service_for_prometheus_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Hosts [Carter Morgan](https://twitter.com/carterthecomic) and [Anthony Bushong](https://twitter.com/agmsbusho) are in the studio this week! We're talking about Prometheus with guests [Lee Yanco](https://twitter.com/leeyanco) and [Ashish Kumar](https://twitter.com/ashidhull) and learning about the build process for Google Cloud's Managed Service for Prometheus and how Home Depot uses this tool to power their business.

To begin with, Lee helps us understand what Managed Service for Prometheus is. Prometheus, a popular monitoring solution for Kubernetes, lets you know that your project is up and running and in the event of a failure, Prometheus lets you know what happened. But as Kubernetes projects scale and spread across the globe, Prometheus becomes a challenge to manage, and that's where Google Cloud's Managed Service for Prometheus comes in. Lee describes why Prometheus is so great for Kubernetes, and Ashish talks about CNCF's involvement helps open source tools integrate easily. With the help of Monarch, Google's Managed Service stands above the competition, and Lee explains what Monarch is and how it works with Prometheus to benefit users.

Ashish talks about Home Depot's use of Google Cloud and the Managed Service for Prometheus, and how Home Depot's multiple data centers make data monitoring both trickier and more important. With Google Cloud, Home Depot is able to easily ensure everything is healthy and running across data centers, around the world, at an immense scale. He describes how Home Depot uses Managed Service for Prometheus in each of these data center environments from the point of view of a developer and talks about how easy Prometheus and the Managed Service are to integrate and use. 

Lee and Ashish wrap up the show with a look at how Home Depot and Google have worked together to create and adjust tools for increased efficiency. In the future, tighter integration into the rest of Google Cloud's suite of products is the focus.
 
##### Lee Yanco

[Lee Yanco](https://twitter.com/leeyanco) is the Product Management lead for Google Cloud Managed Service for Prometheus. He also works on Monarch, Google’s planet-scale in-memory time series database, and on Cloud Monitoring’s Kubernetes observability experience.

##### Ashish Kumar

[Ashish Kumar](https://twitter.com/ashidhull) is Senior Manager for Site Reliability and Production Engineering for The Home Depot.

##### Cool things of the week

* Cloud Next registration is open [site](https://cloud.withgoogle.com/next)
* Introducing Parallel Steps for Workflows: Speed up workflow executions by running steps concurrently [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-parallel-steps-workflows-speed-up-workflow-executions-by-running-steps-concurrently)
* How to think about threat detection in the cloud [blog](https://cloud.google.com/blog/products/identity-security/how-to-think-about-threat-detection-in-the-cloud)
     * GCP Podcast Episode 218: Chronicle Security with Dr. Anton Chuvakin and Ansh Patniak [podcast](https://www.gcppodcast.com/post/episode-218-chronicle-security-with-dr-anton-chuvakin-and-ansh-patniak/)
 
##### Interview

* Prometheus [site](https://prometheus.io)
* PromQL [site](https://prometheus.io/docs/prometheus/latest/querying/basics/)
* Google Cloud Managed Service for Prometheus [docs](https://cloud.google.com/stackdriver/docs/managed-prometheus)
* Kubernetes [site](https://kubernetes.io)
* CNCF [site](https://www.cncf.io)
* Monarch: Google's Planet-Scale In-Memory Time Series Database [research](https://research.google/pubs/pub50652/)
* Cloud Monitoring [site](https://cloud.google.com/monitoring)
* Cloud Logging [site](https://cloud.google.com/logging)
* Google Cloud's operations suite  [site](https://cloud.google.com/products/operations)

##### What's something cool you're working on?

Carter is focusing on getting organized, managing overwhelm, and comedy festivals.

Anthony is testing a few new exciting features, working with build provenance in [Cloud Build](https://cloud.google.com/build), jobs and network file systems in [Cloud Run](https://cloud.google.com/run).

{{< transcript "[MUSIC PLAYING] CARTER: Hello, and welcome to episode number 312 of the weekly Google Cloud Platform Podcast. I'm Carter Morgan, and I'm excited to be here with my friend and colleague Anthony Bushong. What's up, Anthony?" >}}

ANTHONY: Hey, what's up, Carter? I am honored that you have allowed me to co-host with you. I think this is our first time doing the podcast together. 

CARTER: No way. Is it? Wow. 

ANTHONY: It might be. [CHUCKLES] 

CARTER: It's funny because we've worked together for years. Like way back when I joined Google, there was Kubernetes 1.3. And I think you and I ended up working together on some projects around that, right? 

ANTHONY: Yeah, yeah. We did some stuff about how RBAC had just come out in Kubernetes. So it has come a long way. And you and I have both come a long way in the years since then. So stoked to be here. 

CARTER: Yes. I have a beard now. So people at home probably can't see that. But I want you to know it's there. It's full. It's thick. 

I'm super excited about this episode, though, I guess because of that Kubernetes connection from way back. When I started, some of the tools we're talking about in this episode didn't really exist to the level that they do now. Should we go ahead and introduce the topic? Anthony, what do you think? 

ANTHONY: Yes, absolutely, let's jump into the contents of today's episode. So we're going to be talking about Prometheus, how you can use it to monitor your Kubernetes clusters. And more specifically, we're going to talk about managed service for Prometheus. So this is something that's a little newer than Prometheus itself and specific to Google Cloud. 

So basically, we have a couple of awesome guests to talk about, A, how they built managed service for Prometheus, and also from the other perspective, how they use it and what value it brings to their day to day. So, Carter, you want to introduce our guests? 

CARTER: Yes, we're very lucky and excited to have Ashish Kumar, senior manager of Application, Cloud Reliability, Production Engineering, the Home Depot, basically, you can think SRE type, and then Lee Yanco, who's from Google, a product manager at Google Cloud. And he's the lead for Google Cloud Managed Service for Prometheus. He also works on Monarch, which is Google's planet-scale in-memory time series database. And that's going to work pretty closely with Prometheus, as you'll see. And he also works on Cloud Monitoring for Kubernetes Observability. 

So that's a lot of very interesting content with very interesting people. I'm excited about this. But before we go further, we've got to do Cool Thing of the Week. 

[MUSIC PLAYING] 

This week for Cool Things of the Week, we've got a blurb from Cloud Marketing, and I'm going to go ahead and read it. But they're excited to announce that registration is open for Google Cloud Next and invite you to join for interactive event, kicking off with 24 hours of live broadcast from cities across the world. That's going to start on October 11 at 9:00 AM PST. So you can get hands on with the newest products and technologies, meet with engineers who build Google Cloud, and thought leaders from the communities who inspire us. 

So, yeah, you're welcome to join us online. Or you can come meet us at the Google Cloud campus in California or at Google offices around the world to connect with the people who speak and code in your language. So head to g-co/cloudnext to register and learn more. 

That does sound pretty cool, Anthony. I mean, I got to speak at Next once, and it was an amazing experience. And I've gotten to attend a few times. And I've always learned so much and gotten to work with so many passionate people. I definitely recommend it if you get the chance to go and check it out. 

ANTHONY: Yeah, absolutely. Next is the event for Google Cloud. And it's exciting to see that even despite the changing times that we've been in that we are still moving forward with a model where we can still communicate as best as we can these days. 

My Cool Thing of the Week is we've been talking about global time series databases in a global conference. Mine is a little more localized, but I still think it's pretty cool. It is Google Cloud Workflows is a technology that you can use to organize your productivity with different ways you interact with Google Cloud technologies, whether they're BigQuery, Google Cloud Storage, things like that. 

So when you're creating these workflows, it can be a bit of a challenge to have all of those things, especially as they become complex, to be represented by a sequential workflow, right? Not everything can just happen step one, step two, step three when you get into these complex things. So Google Cloud Workflows has introduced Parallel Steps. This means that you can do things like execute to BigQuery queries at the same time and then wait until you get results from both before continuing on with your workflow. 

And I think that really will go a long way as far as enabling folks to do more amazing things with Google Cloud and Google Cloud Workflows itself. So pretty cool. There's a blog post that will link in the description. So go check it out and give it a try. 

CARTER: Oh, I love that. 

ANTHONY: How about you, Carter? 

CARTER: Like just hearing that, it gets me excited. It's slightly on a tangent, but I started programming in Golang a long, long time ago. And it was because of the concurrency and the parallelism. 

And so to see-- I don't even know how to describe it right now. But to see those elements pooled into something like this, I think that's going to be really interesting for people that are actually using these products. My Cool Thing of the Week, the one for me and not for Marketing, is about something that if you're familiar with the podcast you've heard about Anton Chuvakin. We've had guest crossover episodes. We've interviewed him before. 

So Anton and Timothy Peacock have put together a new blog post that just went live. And it's "How to Think About Threat Detection in the Cloud" because basically, the idea is as your organization transitions from being on prem to going into the cloud, whether that's hybrid or fully cloud native, how you want to think about threat detection has to evolve. And so especially when you're looking at threats across multiple cloud environments, you need to change the way you focus on these problems. 

And so what they did in this article was identify a few key areas you want to look at-- threat landscapes, IT environments, and detection methods. And if you start with that and work out, it's going to lead to more security. So make sure to check out that blog post. 

It's called "How to Think About Threat Detection in the Cloud." It's from our Cybersecurity Action team. And it's just, it's chock full of knowledge, but it's an easy read. 

All right, so that was my Cool Thing of the Week. Anthony, you shared yours. It was a good time. What do you say we get into the main episode? 

ANTHONY: Yeah, I'm excited. I'm ready. 

[MUSIC PLAYING] 

CARTER: So without further ado, for the listeners at home, hi, Lee, hi, Ashish. Thanks for coming in today to talk about Prometheus. Could you introduce yourselves and tell us a little bit about your background? 

LEE: Sure. So I'm Lee Yanco. I'm a product manager here at Google Cloud within Cloud Monitoring, product lead for Managed Service for Prometheus. Been here for about three years. Thanks for having me. 

ASHISH: Hi, everyone and Carter, Anthony. Thanks for having me. I'm Ashish, a senior manager for Site Reliability and Production Engineering at Home Depot. I've been at Home Depot for a little over three and a half years. And again, I am an avid user of Prometheus and a user of Managed Service for Prometheus. 

CARTER: Ooh, Managed Service for Prometheus-- that's one I haven't heard about before. Can we talk a little bit about, what does that managed service part mean? 

LEE: Sure. Maybe take a step back here. What is Prometheus, first of all? Prometheus is the de facto Standard Time series monitoring solution for Kubernetes. So you make great apps and services on Kubernetes. How do they're up, they're running the way you want them to? When something goes wrong, how do you see what went wrong? How do you triage it? How do you investigate it? 

Prometheus is the main tool, the main platform for that. Prometheus is great. It's been around for about 8-10 years, something like that-- has really good adoption, gets super annoying to run when you're scaled up to as big as Home Depot and Ashish's team is. You find yourself staffing up basically a team of 6 to 10 people, just managing, monitoring infrastructure instead of doing anything useful. 

Home Depot folks, they like to say, we could either manage monitoring infrastructure, or we could sell hammers. And we'd prefer to sell hammers. So we created Managed Service for Prometheus to take all that burden away for people, basically running this at scale, using the same open source interfaces that everybody knows and loves. So instead of managing and monitoring infrastructure, you just set it up once. And then Google, we deal with all the complexity of running that globally and making sure your data is globally accessible. 

ANTHONY: That's super helpful. I think one question that I have on that introduction is that you mentioned the age of Prometheus. It's been around for a handful of years, and it sounds like it's roughly around the same age as Kubernetes. So I guess what makes Prometheus popular with Kubernetes users compared to, let's say, more, or I guess, quote, unquote, "mature" or "established" monitoring solutions that have been in the industry before Prometheus? 

LEE: Prometheus leans into a lot of the stuff that Kubernetes gives you out of the box and makes really good use of them. So a big problem with other solutions is, how do you know when there are new metrics to even monitor? Prometheus uses Kubernetes Service Discovery to find these endpoints and automatically start scraping them out of the box. So you as a developer don't have to do anything to tell anything, I need to collect these metrics. You just make the metrics available, and they are magically scraped into your system of record. 

So that's just one example. There's a couple other things that it does that make it just a obvious choice. And then, of course, you have the runaway community effect, where everybody's making new metrics packages, new tools, new whatever, and just makes the ecosystem really, really strong. 

ASHISH: And I second what Lee just said. And Kubernetes, Prometheus, and a lot of open source tools have been incubated and transferred over to CNCF. CNCF, being the largest cloud native foundation, allows and helps to ensure that we have an ecosystem of tools being built. The integrations become so much more easier. 

And again, like Lee said earlier, that it is a de facto tool, not just for Kubernetes but the ecosystem which is around it. Like when it comes to CSED tools being built around it, for applications being built around it, any integrations coming into the Kubernetes world going forward have de facto Prometheus as an integration. And that helps the adoption like a no-brainer. 

LEE: Yeah, companies choose Kubernetes because they don't want to be locked into any sort of proprietary container orchestration standard. I mean, they want something that's portable across clouds, and same with their monitoring. They want something that's universal, open source, portable, non-proprietary, so hand in hand. 

CARTER: Yeah, that makes a lot of sense. And thanks for that context. I actually had another question to follow up with this. 

Because Prometheus is so popular, Kubernetes is so popular. Correct me if I'm wrong, but this probably isn't the first managed offering of Prometheus. So what about this one makes it so unique? 

LEE: Yeah, so there's a couple other out there. But what makes ours unique is it's backed by Monarch. Monarch is Google's custom planet-scale time series database. 

It's actually the same exact tool that we use to monitor internal Google. So Google Search, Google Ads, Waymo, YouTube, Cloud itself use Monarch to make sure that everything is up and running. We basically slapped Prometheus interfaces on top of Monarch. 

So why is that important? Monarch is ridiculous. Monarch ingests like 4.2 terabytes per second. There's like 2 trillion time series in memory. There's quadrillions of points on disk. 

Literally anything our customers can throw at us we can handle, whereas other solutions out there can be a little limited, let's say. But, yeah, we don't limit our customers. You get global monitoring out of the box as a service with no limits, effectively. 

ASHISH: And again, as a user of Prometheus and Managed Service for Prometheus with Google, and also running the SRE team, SLOs and SLAs matter a lot. And one less thing I have to care about from an SLO and SLA perspective I think the better for me. Given what Lee said, it's a planet-scale time series database. If I don't have to manage it, if I don't have to worry about the uptime for it, I think that solves a bunch of headache when it comes to operational toil for me. 

LEE: On top of that, the Monarch instance that Ashish is using is actually the same exact instance that's used by our own Cloud SREs. So it doesn't go down. And if it does, it is the single biggest, most important thing to get back up because until it is we're blind from monitoring Google Cloud itself. 

ANTHONY: A couple things from that-- it is very clear how important Prometheus is to Kubernetes users who are depending on Kubernetes for production. Prometheus is really providing the metrics that understand how healthy production is. And then it's really cool, Lee, that you were sharing about how Managed Service for Prometheus is the same infrastructure that we rely on internally as Google to keep our services up and running. 

But to shift gears a little bit, I want to hear from Ashish about the Home Depot. We do have a global audience for this podcast, so just sharing not only what the Home Depot business is about, but what are you using Google Cloud for, for Home Depot? And what are you monitoring with Prometheus? What is the relationship between Home Depot and what they're running on Google Cloud? 

ASHISH: First off, thanks for teeing off this topic so I can brag about Home Depot. So for the users who do not know Home Depot and who Home Depot is in terms of what we contribute, Home Depot is the biggest retailer when it comes to home improvement in US, in North America, if I were to say. And we, for 2021, had $150 billion worth of sales. So you can actually look at the scale at which Home Depot operates. 

Apart from it, Home Depot operates in multiple data centers. And with data centers, I mean like we operate at the edge. We operate in the cloud. And we operate on prem. That gives and adds a lot of complexity in terms of how Home Depot is looking at technology in terms of monitoring, in terms of making sure that we know everything is healthy across the board. 

So with that being said, the reason why we chose what we chose in terms of Prometheus was that we wanted to create a single pane of glass. And to create that single pane of glass, we wanted to ensure that we are looking at highly available time series store so that we can ensure that we have availability when we are trying to make decisions in terms of the uptime. We were also looking at cost optimization. We were also looking at network optimization because when it comes to sending data into a singular store, we want to ensure that the bytes which we are sending over the network are not eating up our network by itself because when it comes to [? ED ?] systems, there is always a dearth of amount of network bytes available to them. 

So based on all these factors, we wanted to make sure that we can create a decision and make a decision on picking up a time series store. And you know what? Prometheus was one of our already integrated open source solution. And eventually, when we were looking for a long-term storage, working with the Google team, it made sense to pick up something which was highly available for us. 

LEE: Yeah, and props to the Home Depot Cloud Enablement team that realized how widespread of a problem this was and let Ashish not only pick it up but also evangelize Managed Service for Prometheus and Prometheus within Home Depot. 

CARTER: Oh, wow. 

LEE: It's not just one team that has a problem. 

ASHISH: Another thing which I would also want to add is I think Lee already teed it off earlier, that it's easy to create custom exporters when it comes to Prometheus. And it's not just applications we monitor. It's not just infrastructure we monitor. We can monitor anything and everything under the sun when it comes to what we are using at Home Depot with that by creating customer exporters. 

So looking at things like network monitoring, you can create exporters in Golang or Python and Script Metrics to Prometheus. And that also enhances the use case and enhances the ecosystem which we are trying to create. 

CARTER: Wow. Yeah, I want to dig into that a little bit more. And so there are certain teams or maybe people that find a useful case to write a custom exporter for a very specific problem that they have. And you're saying it's easy to do that with Prometheus. 

ASHISH: Yes. As long as the APIs exist, you can create a customer exporter. Anything which emits metrics over an API, we can create a custom exporter for that. 

LEE: It's funny, Carter, one of the biggest blockers to adoption we've found is that developers actually just really love using Prometheus because it's just that simple and easy to manipulate it and add stuff to it. So some people just don't want to give it up. 

CARTER: Wow. So then the question I'd want to ask is, inside of the Home Depot, who are the main types of people that are actually using this? Is it developers? Is it SREs? Is it you personally? What's happening? 

LEE: So at Home Depot, there are multiple personas who can use Prometheus and are using Prometheus. Developers is one. SREs is another one. 

When you look at security, I mean, yes, they can look at the health of the systems. I'm not saying that we are using Prometheus as a SIM tool. But at the end of the day, when it comes to monitoring and observability for health of an application and system, Prometheus is, and can be, a single point in terms of making sure that everything is existing there. 

And another thing which I also wanted to add from a developer persona perspective is that given Prometheus is so easy to integrate, even when it comes to a developer lifecycle, you can literally do the absolute definition of shift left when it comes to Prometheus because Prometheus can integrate with your local system. Setting up and spinning up local Prometheus is like a piece of cake. So you do not have to rely on a central team spinning up a Prometheus for you to test your metrics flows when it comes to application development and deployment. 

ANTHONY: Yeah, I'm definitely starting to sense that sort of theme as far as being aligned with how folks interact with containers and Kubernetes. Being able to shift a lot of that to your local environment and being able to replicate as much as possible, monitoring makes just as much sense there. One thing I definitely didn't want to get lost in the fold is that you mentioned that these developers that are interacting with Prometheus, they're not just developing apps for Google Cloud. You mentioned that there are multiple environments that you're integrating with Managed Service for Prometheus. 

I heard Edge. I heard your on-prem data centers. Can you dive a little bit more into that and talk about also how managed service for Prometheus works with different environments? 

ASHISH: So how we are thinking about app development at Home Depot is we are trying to containerize every application workload which we have. And with that, I mean anything which is on prem, anything which is at the edge. And of course, when it comes to Cloud, we are containerizing everything. 

So doing that, once we optimize our application deployment model, we wanted to ensure that the next step is ensuring that our observability for all those platforms can be similar so that we don't have to reinvent things based on a deployment space for us. So that's where Prometheus, again, brings the consistency. 

LEE: Yeah, when we were designing Managed Service for Prometheus, hybrid and multi-cloud compatibility was a major requirement. As much as I wish everybody ran all their workloads on Google Cloud, people do run some of their workloads elsewhere. Almost everybody has some sort of long-tail deployments on a separate cloud or on prem or something like that. 

So our collectors do run on every cloud and on every Kubernetes environment and even on non-Kubernetes environments. People don't want to have different monitoring technologies based on where their applications are running. They just want one thing so they can see everything together, no matter where it is. 

So we have customers running on GCP, obviously. We have customers running on prem. Ashish has us deployed in 2,000 bare metal clusters on stores. 

We have one company who is running Managed Service for Prometheus on Raspberry Pi, for some reason. So no matter what, Prometheus has been designed to run everywhere. So Managed Service for Prometheus also runs everywhere. 

ASHISH: And that plays around with how Prometheus as an architecture were designed. Prometheus was designed to be federated. So you need to ensure, and you can ensure, that your applications don't need to depend on a central instance of Prometheus. 

You can run Prometheus in a hybrid manner, in a federated manner in every data center you are operating in. And that's where Managed Service for Prometheus can actually act as an aggregation layer for you. 

CARTER: Oh, wow. So then before you were actually using Managed Service for Prometheus, what was it like at Home Depot? How were you aggregating this data, or were you able to at all? What was the process before Managed Service for Prometheus? 

ASHISH: That specific question is one of the reasons why we ended up choosing Managed Service for Prometheus. So before we started using Managed Service for Prometheus, we actually tried experimenting with multiple time series aggregation and what is available to us in the open source world. So we looked at Codex. We looked at the Uber M3. We looked at Thanos. 

And Thanos was something which is, again, a very popular open source time series aggregation. By no means it's a bad product. It's an amazing product. Again, that's, again, a part CNCF ecosystem. 

But end of the day, we wanted to ensure that the SREs and even any enterprise monitoring team, or a shared technology team when it comes to it, has an operational toil which comes with it, which includes managing it, which includes making sure that if the cardinality increases, they can figure out where it is coming from. To Lee's point earlier, you require a team of SREs or shared tech people who have to maintain Thanos-like ecosystem or a platform. And we did use it, for all intents and purposes. But eventually, we had to make a decision that is it worth the amount of time being spent in maintaining that versus doing other automations and other optimizations across our production systems. And let the operational platform like Prometheus and aggregation of that be left to someone like Google, who are managing it at planned scale. 

ANTHONY: So one of the things that is interesting is that whenever you have a new feature or a new product, there's folks who are net new trying to adopt the technology. And then there are folks who already have experience with some form or a self-hosted version of the technology. Can you walk me through how it integrated with, let's say, parts of how you were already using Prometheus when you adopted Managed Service for Prometheus? Was it smooth? Were there challenges in adopting and integrating with what you already had set up? 

ASHISH: Every new integration comes with its own challenges. And I'm not saying it was difficult, like it did not work for days or days. But again, we had to figure it out and make sure that, for example, coming out of the stores, we started sending metrics. 2,200 stores sending metrics into a single Prometheus instance was a lot of metrics. That's one aspect of it, the amount of time series which we were sending in. We wanted to make sure that we understood what the landscape of that metrics looks like. 

We looked at what the amount of metrics is. We looked at the cost spiked up super high, worked with the Google team, and ensured that we have ways of filtering down what we actually need because when it comes to aggregation, you don't need everything. And like I said earlier, what we wanted to do was use the stored Prometheus, the federated Prometheuses, for alerting, and wanted to use Managed Service for Prometheus for aggregation, and figuring out trends, and figuring out if there are regional outages and all those things which come along with it. That was one aspect of it. 

There were other aspects in terms of integration when it comes to sending to a remote location time series. I think Managed Service for Prometheus is very similar to the other aggregated Prometheus time series data source which are out there. We use the Prometheus Remote Write. And I believe there is a version of that Remote Write which exists in Managed Service for Prometheus as well. So that integration was very quick and easy. 

The only thing which we had to get used to was that we were not going to use the open source version of Prometheus Operator. We had to use the Google-created one. Again, that has all the goodness and the niceties of what the open source Prometheus has, and it was a quick swap. 

LEE: Just to clarify, we do actually support the open source Prometheus Operator, but it's just a lot harder to use. Many people that are using it when they switch to Managed Service for Prometheus decide that they also want to switch to our operator because it just makes everything easier and makes it completely braindead to set up monitoring within Kubernetes. So it's an option for people that need super high flexibility and customizability. But for the most people, our operator is a better choice. 

ASHISH: Another thing which I want to talk about, one of the difficulties which we faced was the network bandwidth which we are using. And Lee is very aware of that problem which we had. We were using close to 20 to 30 MBPS, if I am not wrong, in terms of the network bandwidth per store when we were sending out metrics into Managed Service for Prometheus. 

Google team was able to quickly revert back and add a change to compress all of that metrics over the wire. Right now, we use less than 5 MBPS, I think less than 2 MBPS, if I'm not wrong, when it comes to the overall network bandwidth which we are consuming. So again, the amount of optimization we were able to provide in terms of over-the-wire metrics egress was also very good for the implementation overall. 

ANTHONY: I do love to hear that we've solved some of the challenges with sending metrics from stores because I have a lot of housework to do. So I will be visiting the Home Depot quite a bit in the near term. So I'm glad it's all working out, Ashish. 

And overall, it's great to hear because I think a lot of folks are concerned when trying to adopt a managed service of anything, what do they have to give up? What do they have to sacrifice? So I'm loving hearing the story around flexibility from both of y'all. 

LEE: The way that I think about it is people's trade-off between flexibility and manageness is a gradient. It's a spectrum, right? Some people want to have everything completely open source compatible, but they're willing to accept a little bit of overhead for that. And some people want things to be completely braindead, and they're willing to give up a little bit of open source compatibility for that. 

We have different options. And it's one big spectrum. No matter where you are, we can support what you need. 

ASHISH: And I think that's where flexibility existed in the setup because the Google managed offering does not have super opinionated way of implementing Prometheus Operator. It has, I would say, 98% of similarities to what the open source version has. So that's where I think the flexibility remained. 

Our pipelines didn't have to change. Nothing had to change from a developer experience perspective. I think it was just the connectivity of our data centers towards Google to make sure that the data can be egressed. 

CARTER: Mm-hmm. I was going to actually ask you about the data because you said you were sending like 30 megabytes per second from 2,000 stores. And I take it that's why you needed this Monarch database because you were just handling so much ridiculous amounts of data. 

LEE: And also knitting together 2,000 stores and trying to view them all together is a heroic undertaking. Prometheus works really, really well when it's like one or two clusters, and you don't need to see everything together. When you start getting into double digits, it gets really annoying. When you have 2,000 stores that you want to see in a single pane of glass, that is very difficult. 

CARTER: Oh, wow. All right then, I want to take a second, and, Lee, you might not like this question, but I'm going to ask it anyway. 

LEE: [CHUCKLES] 

CARTER: You're one of the first evangelists for this service. It sounds like you're really happy with it. Is there anything that you're like, oh, I wish Google would address? Is there anything that you want to change or improve? 

ASHISH: Absolutely. And again, we can go into the discussion, and Lee will definitely chime in there, is we want to create a single pane of glass not just for the metrics. We want to create a single pane of glass for our observability itself. So when it comes to that, we want to stitch our metrics to our logs, to our traces. And with traces, I mean distributed tracing. 

When it comes to how Prometheus is enabling that from an open source community perspective is they have added a concept of exemplars. Exemplars are nothing but adding a context into a metric and adding trace ID with the metric point. So what that enables us to do is wherever there is a high latency metric being generated, like whenever there is a high latency in an application, a trace ID for that particular instance or an error happens in an application, the trace ID for that particular instance gets attached to the metric, which is getting generated in Prometheus. 

CARTER: Nice. 

ASHISH: Taking those exemplars into Prometheus from an open source perspective works right now. Like Prometheus can actually have metric points which have trace IDs attached to them. They can directly take us to the trace in terms of looking at all the trace IDs and spans. And from there, we can actually go into the logs to do root cause analysis. 

Doing it independently actually causes a lot of context switch. Like you have to go from one UI to another UI and try to copy-paste the trace ID from one place to another. In the metric system you cannot even see a trace ID without an exemplar. You have to guesstimate the spike in a dashboard, look at that time frame, go to the same time frame in the log, go at the same time frame in your tracing system, and guesstimate, OK, this might have happened. 

Right now, we can exactly pinpoint where exactly the issue might be, go to the exact trace and go to the exact log. And that was something we actually put in as a very critical requirement which we have with Google Prometheus. And Lee can actually talk about the Google implementation of exemplars as well. But the Managed Service of Prometheus is something which we are seeking that particular requirement to come with. 

LEE: Yeah, there's two themes on our roadmap for the next year. One is more Prometheus use cases, and then two is tighter integration with the rest of the Cloud Operations Suite. What Ashish wants actually ties in very well with those two themes. 

So first of all, Prometheus exemplars, that's something we're working on. Thanks to Ashish for helping us prioritize that. But it's the first step, right? 

So the first step is, OK, Prometheus exemplars pass them through, get them back. The second step is OpenTelemetry-based exemplars-- pass them through, get them back. The third step is Cloud Trace exemplars-- pass them through, get them back, supporting progressively more and more complex use cases until we've covered everything. 

Ditto on the log side. So right now we just released our first integration with Logging, which is you can use Cloud Logging's log-based metrics to create a metric and then query it with PromQL alongside your Prometheus metrics, which is super slick-- super excited about it. That's just the first step. 

We are coming out with more PromQL within Cloud Monitoring itself, more PromQL within the Cloud Ops Suite within Cloud Alerting, going all in on open source compatibility both on the stuff that we already have and the stuff that we're developing specifically for Managed Service for Prometheus. 

ANTHONY: Yeah, I'm a huge fan of that. I think that's awesome. Going back to what Ashish said about context switching, it's nice to hear that folks who are using Google Cloud Monitoring or in Google Cloud Logging will be able to use Prometheus to query that when they create logs-based metrics. So I'll ask the inverse of what Carter was asking for Ashish. So, Lee, this one's for you. 

What are you excited most about for what's coming next in Managed Prometheus? Is it something you've already mentioned? Or is there something else that you'd like to share that you're really excited about? 

LEE: Yeah, I briefly touched on it, but we are putting PromQL all throughout the Cloud Monitoring user interface. We're adding it to Dashboarding. We're adding it to Querying. We're adding it to SLOs. We're adding it to Alerting. 

We're going all in on the open source compatibility. PromQL is quickly becoming the standard, and people know it. Not having PromQL is like saying you don't have SQL for databases. So we're adding PromQL. 

And I'm pretty jazzed about that. It makes the barrier to entry of using the rest of Cloud operations much lower and just provides a more holistic product. 

ASHISH: And again, that ties into vendor-agnostic approach. So having PromQL as an open source standard across the board for all of GCM, which is Google Cloud Monitoring, we can make sure that even if we wanted to have an own system which is outside of Google Cloud Monitoring, which is a Prometheus-based system, we can still stick to it. We don't have to buy into Stackdriver, which is now deemed as Google Cloud Monitoring, because that had a specific way of [INAUDIBLE] it. This enables us to have more vendor-agnostic approach to having our observability tools out there, and at least have a freedom of mind that we are not stuck with a solution. 

CARTER: Yeah. No, I love seeing that roadmap. And, Anthony, thank you for going the positive route there because it's much needed. 

[CHUCKLING] 

OK, Lee, Ashish, as we start to wrap up, I feel like I've learned a lot. But I'm sure there's things we've missed. Is there anything that you wanted us to ask you about or anything that you'd like to mention before we get out of here? 

ASHISH: I would advertise for Home Depot, to begin with because we were talking about it. I just wanted to let the technology world and open source enthusiast and the SREs out there know that Home Depot is making amazing strides when it comes to the open source implementation of all these amazing monitoring tools. We have a great partnership with our Google counterparts to ensure that we are staying ahead in terms of the technology implementation of the latest and greatest which is out there. And again, if anyone is looking for it, please reach out. Again, there are always roles and jobs and awesome technology to work on and solve bigger problems. 

CARTER: I dig that. 

ANTHONY: So, Lee, we're going to wrap up with one last question for you. Where should people go to learn more, besides the Home Depot career site? [CHUCKLES] 

LEE: [CHUCKLES] Yeah, you can get started today by going to g.co/cloud/managedprometheus. Or you can click on the Managed Prometheus tab within Cloud Monitoring. That leads to our documentation, which will help you get up and running. It's really as simple as checking a box in GKE, uploading some YAML, and seeing the magic work. 

CARTER: OK, OK. That's exciting. So people listening at home or on the bus or wherever you might be, definitely check that out. It seems very interesting. It was exciting conversation. 

Thank you, Ashish. Thank you, Lee. Thank you, Anthony. 

LEE: Thanks for having us. 

ASHISH: Thanks, everyone. 

ANTHONY: Well, I learned a lot from that conversation. And I was really-- I didn't just learn a lot about Managed Service for Prometheus or how the Home Depot is putting Kubernetes to use, but I also just learned that Lee and Ashish are really cool people and a lot of fun to talk with. 

CARTER: Mm-hmm. 

ANTHONY: Going to really the main content of what they had to share with us, it's really incredible to see how widely accepted Prometheus is as the de facto, and not just as a monitoring solution for Kubernetes, but even PromQL as the de facto way that we should be interacting with metrics. And so it's pretty cool to see how we're extending that to Cloud Monitoring. A couple other things that stood out-- hearing that Home Depot is running thousands of clusters, I think I heard that correctly, is incredible. So I think that just that alone as a standalone feat, to do that at the edge and data centers and different public clouds, including Google Cloud, it's amazing. But to hear that Managed Service for Prometheus is able to ingest from all these different clusters makes me really excited for our customers who are running more complicated cluster topologies because they'll be able to use this fully managed solution, despite how complex their setups might be. 

So, yeah, I think I have some homework to do. I definitely want to read a little bit more about Monarch. There's a research paper from Google Research that we'll link in the description. And that probably will shed some light on all the awesomeness that we're seeing from the outside here. 

CARTER: Mm-hmm. Yeah, no, I think you made some really great points. And especially like you said, PromQL-- I had never heard of this before. So that's brand new to me. And it's like, well, this is going to be the open source standard for monitoring. So if you're listening at home, that's definitely something to get in to check out. 

I 100% agree with you about the scale that the Home Depot was operating at. I didn't ask the timeline, per se. But I heard something like 2,000 servers running, 30 megabytes per second of data being transferred at one point in time. That's just so much data to manage and have to process. So being able to work with a managed service that can pull all of this up into one single pane of glass where you can just monitor everything from one place, that seems really helpful. 

I agree with you, Lee and Ashish were funny. And I'm a stand-up comedian by nature. So to me, having people that are playful, too, while talking about in-depth knowledge is always fun for me. So I had a great time with this episode. I think the choice of host, having you as a co-host, was also a really good one for this. 

But, OK, enough about that. I want to actually hear what you're working on before we get out of here because you're always doing something interesting and exciting. So what's going on in your work world, Anthony? 

ANTHONY: Well, first, Carter, you're too kind. It is always fun to be on the podcast and especially fun to always just have a chance to chat with you. Before I get into my cool thing, I did want to say, talking about PromQL, you brought up a great point is that people don't want to context switch. 

And I think it's funny because we always talk about that in tech and in the context of having a single pane of glass. But I think it-- there's some life lesson that we don't have time for on this podcast to extract that we don't want to context switch in life either. We want to just be ourselves. 

So I think that's kind of like-- I don't know. I started to get real cerebral when I was listening to Ashish and Lee. Maybe that's too much. 

CARTER: No, I love it. I love it. 

[CHUCKLING] 

ANTHONY: Cool things I'm working on-- not nearly as existential, but testing out some cool new things in Cloud Build. If you look at Cloud Build right now, there's a lot of talk around software supply chain security. And so there's a lot of folks using Cloud Build and building container images, where they want to understand, oh, how do I deploy things that I know were built by this trusted Cloud Build environment? 

And so there's build provenance in Cloud Build, so testing some of that out, and also some of the cool new things in Cloud Run, like the support for Jobs as well as access to network file systems. I think it'll really extend the use cases that people can bring to these serverless technologies. How about you, Carter? 

CARTER: Yeah, being able to access a networked file system, that extends the range of what's possible for the types of applications you can develop on Cloud Run. That's cool. Man, there's so many tools coming out to learn about, and be able to play with, and explore. 

You were talking about life lessons a little bit earlier. And for whatever reason, now I'm in this cerebral mode. I'm not able to context switch, so I'm just going to go with it. 

I'm actually working on trying to get organized and managing just the overwhelm that comes with working in tech right now, I feel like, or just being alive right now. So if there's anybody else that's struggling with that, you're not alone. I got you. 

Yeah, I don't know. I'm excited to figure out what the next paths are because you were just talking about Cloud Run and the things it can do. And I'm like, I would like to be able to play with tools like that. And I would like to be able to go and experiment and explore. So maybe that's a direction I'm going to take in the future, following that curiosity and seeing what's next. 

ANTHONY: Yeah, absolutely, maybe a subject for another podcast episode in a few months. 

CARTER: 100. Well, yo, thank you all for listening at home or wherever you're at, actually. I don't know where you're at. You could be anywhere. Thank you for listening. And we'll see you all next week. 

ANTHONY: Take care, everyone. 

[MUSIC PLAYING]