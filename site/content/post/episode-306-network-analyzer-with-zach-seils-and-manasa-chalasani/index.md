+++
audioDuration = "00:38:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.306.mp3"
audioSize = 55931862
categories = ["Networking", "Network Analyzer", "Network Intelligence Center", "Monitoring"]
date = "2022-06-01"
description = "Stephanie Wong and Lorin Price welcome guests Zach Seils and Manasa Chalasani to talk about networking and the newly released Network Analyzer."
draft = false
episodeNumber = 306
hosts = ["Stephanie Wong", "Lorin Price"]
title = "Network Analyzer with Zach Seils and Manasa Chalasani"
image="/post/episode-306-network-analyzer-with-zach-seils-and-manasa-chalasani/images/hero/hero-EP-306.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/v2lo4x/episode_306_network_analyzer_with_zach_seils_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and Lorin Price welcome guests Zach Seils and [Manasa Chalasani](https://twitter.com/ManasaChalasani) to talk about networking and the newly released Network Analyzer. Google Cloud's Network Intelligence Center is described as a one-stop shop that simplifies network monitoring, troubleshooting, workload expansion, security, and more. Manasa tells us about the four modules of Network Intelligence Center and how they work together.

As part of Network Intelligence Center, the new Network Analyzer monitors and proactively runs tests and detects issues on the network automatically, taking the guesswork out of network troubleshooting. Network Analyzer checks the entire network ecosystem, finding any connectivity issues and extrapolating them to other similar situations as well. Zach tells us more about the specific features of Analyzer, like its ability to check for overlapping or shadowed routes and validating network configurations in relation to any managed services being used. 

Zach walks us through the set up of Network Analyzer and how to navigate results. Manasa expands on the development of Network Analyzer, including how customer feedback really shaped the project, and we hear about challenges along the way. Through examples, Zach describes different types of Analyzer customers and how they're using the product. More analyzers will be available soon, and the team is open to suggestions for future projects. 

##### Zach Seils

Zach Seils is a Networking Specialist with Google Cloud, where he works with customers to accelerate their adoption of cloud networking. 

##### Manasa Chalasani

Manasa is a Product Manager on the Google Cloud Networking team with a focus on network observability.

##### Cool things of the week

* The new Google Cloud region in Columbus, Ohio is open [blog](https://cloud.google.com/blog/products/infrastructure/new-google-cloud-region-in-columbus-ohio-is-open)
* Assembling and managing distributed applications using Google Cloud Networking solutions [blog](https://cloud.google.com/blog/products/networking/networking-spotlight-2022)
 
##### Interview

* Network Intelligence Center [site](https://cloud.google.com/network-intelligence-center)
* Network Analyzer Documentation [docs](https://cloud.google.com/network-intelligence-center/docs/network-analyzer/overview)
* Introducing Network Analyzer: One stop shop to detect service and network issues [blog](https://cloud.google.com/blog/products/networking/introducing-network-analyzer-detect-service-and-network-issues)
* CloudSQL [site](https://cloud.google.com/sql)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Cloud Monitoring [site](https://cloud.google.com/monitoring)
* Contact the Network Analyzer team [email](mailto: network-intelligence-center@google.com)
* GCP Podcast Episode 270: Traditional vs. Service Networking with Ryan Przybyl [podcast](https://www.gcppodcast.com/post/episode-270-traditional-vs-service-networking-with-ryan-przybyl/)

##### What's something cool you're working on?

Lorin is working on a new video series called Concepts of Networking on the [Networking End to End Playlist](https://www.youtube.com/watch?v=cNb7xKyya5c&list=PLIivdWyY5sqJ0oXcnZYqOnuNRsLF9H48u)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone. And welcome to episode number 306 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong here again. And I'm back with Lorin Price. Hey, what's up, Lorin?" >}}

LORIN: Hey, Stephanie. Thanks so much for having me back again. It's been a couple of months now since I've been on the podcast. 

STEPHANIE: I know. I know. Every time we have a networking topic, I'm like, I've got to get Lorin back. She's amazing. 

LORIN: I'm here. I'm always here to help. 

STEPHANIE: Yeah. You don't have to give us a sneak peek of your singing this time. But if people want to refer back to that, just go back to our previous networking episode. So Lorin, what are we talking about today here? 

LORIN: Right. So this week we are interviewing Zach and Manasa about Network Intelligence Center and, more specifically, Network Analyzer that was just announced recently at I/O. 

STEPHANIE: Yeah. It's super exciting, because we have some networking announcements throughout the year. But Network Intelligence Center is one of my favorite launches that has happened over the last couple years. And we keep adding more modules to it and making it more robust. So it's exciting to see Network Analyzer be announced and ready for people to start using it. 

And I love the conversation with Zach and Manasa because it's clear that they have both worked with customers directly on designing this product as well as have a lot of experience in how Google as a company has done networking just for themselves as well. We have a lot of robust observability and monitoring tools that we use here. So a lot of those years of development and research have been inherited into Network Intelligence Center. 

So before we jump into that conversation, let's go ahead and quickly cover some of the cool things of the week. 

[MUSIC PLAYING] 

LORIN: So I will go first. So my cool thing of the week is that Google Cloud announced a new region in Columbus, Ohio. It is region 10 now in North America. It has three zones. So that brings us up to 31 zones total in North America as well as 28 pops. So super exciting. Another addition to the Midwest to start deploying your workloads to. So can't wait to start working with it more. 

STEPHANIE: Yeah. I know. It's always exciting to see a new region launch because everyone, not even just locally in those regions who run their businesses there are excited, but as we say in networking, it's alleviating any congestion in that area. And that really strengthens the overall availability and reliability of the network globally. So this is just another feather in our cap and for our customers, too. So that's super exciting. 

My cool thing of the week is also networking related, so this is very fitting. But last week we just had a spotlight session for networking that was online here that you can check out on demand. And a number of our product managers and networking specialists here were able to deliver this spotlight for-- it's called next-generation application delivery with Google Cloud. So they talk about some of the solutions to help you reduce the complexity of assembling and managing distributed applications on Google Cloud. And that includes our cloud load balancers including envoy proxy. 

They also talk about hybrid load balancing and hybrid connectivity to connect services across, of course, hybrid networking environments, and then, lastly, Private Service Connect, which we've talked about on this podcast before, which lets you connect services together across different networks. So if you want to learn a little bit more about how our networking stack is on Google Cloud and how you can actually start to build these distributed applications here, then check that session out. There's also a blog post here if you would rather consume it that way. 

So yeah. Just to add on to our pattern here of talking about networking today, let's go ahead and dive into our conversations with Manasa and Zach. 

[MUSIC PLAYING] 

Manasa and Zach, Thanks so much for joining us today. Why don't you start by telling us a little bit about who you are and what you do here at Google? 

MANASA: Sure. Hey, Stephanie. Great to see you today. My name is Manasa. And I'm a product manager in the Google Cloud Networking team. I focus on overall network observability, so how to improve the workflows for monitoring, troubleshooting, anything related to that, for our customers on Google Cloud. 

ZACH: Hey, Stephanie. I'm Zach. Thanks for inviting us here today. I'm part of the Cloud Networking specialist team here at Google Cloud. So I work directly with customers to help them understand which products are most appropriate for their use cases and make sure that they're taking best advantage of those products as possible. So obviously a big part of that is observability and monitoring. And so we work closely with Manasa and her team on Network Intelligence Center and other products. 

STEPHANIE: So you and Lorin know each other already, then. 

ZACH: We are on the same team. Yep. 

LORIN: We know each other very well. 

STEPHANIE: Let's just jump into it. So what is Network Intelligence Center? 

MANASA: Network Intelligence Center is basically the to-go, one-stop place for everything around network monitoring, troubleshooting, diagnostic needs for our customers, right? And just to give a little background, the way this kind of kicked off, it was actually built very much ground up based upon customer conversations. 

We kind of talked to many, many customers, and to Zach and all of our specialists who talked to customers to be able to understand what are the common issues they run into while monitoring their network and the services. And based upon that, we collected some common themes. And that's how Network Intelligence Center was born, to be able to simplify the way customers monitor their deployments on our cloud. 

STEPHANIE: Yeah. I've had a lot of experience using Network Intelligence Center since the launch, I believe, before last year. And it's fantastic. I love how it's grown and evolved over the last couple of years. And it's exciting to see how it's helped a lot of customers in an area that I think a lot of even existing network engineers didn't want to touch. They're looking for something a little bit more prescriptive. 

So how are customers today using Network Intelligence Center? And are there any additional pain points that it helps address? 

ZACH: So I think there's a couple of common areas that we see customers using Network Intelligence Center for. One is just your day-to-day troubleshooting. And this may be in response to someone receiving a complaint about a particular performance issue or connectivity problem. And so Network Intelligence Center in part provides a set of tools that allow customers to diagnose or troubleshoot those problems, identify is this a problem that's specific to a workload that the customer is running in the cloud, or maybe is this a problem that's affecting multiple workloads. 

And so they can really pinpoint quickly, number one, is it a network problem, which, of course, is always a important first step. But number two is really drill down into which aspect of the cloud network is potentially the next step for investigating. So that's one area which is kind of your reactive troubleshooting, maybe typical operations use case. 

Another area is really in the network and planning aspects. So for customers, for example, who may be expanding an existing workload in the cloud or may be looking to expand their cloud deployments into other regions or maybe even a global deployment. And they can actually leverage the tools inside of Network Intelligence Center to help them understand where is the best placement for this new workload relative to where I expect the users to be or where I expect my existing either cloud or on-premises deployments to be located. 

And so really, kind of both sides of that spectrum is where we see customers commonly come and get Network Intelligence Center to get better insights into how their workloads are performing inside the cloud environment and how they can best optimize placement of new workloads inside the cloud. 

STEPHANIE: So Network Intelligence has been around for a couple years, as we mentioned. But what are some of the modules that currently exist so we can give a good lay of the land here? 

MANASA: Sure, Stephanie. Today there are four modules that are available in GA to customers. First is Network Topology, where it's basically a visualization of the customer deployment based upon actual traffic flows. It superimposes the metrics on top because the problem we are trying to solve here is, how do we make all of these metrics that are available to customers consumable in the context of their deployments? It provides the mechanism for that. 

There's also Performance Dashboard, which basically provides real-time latency and packet loss for a customer's environment. So it helps customers answer the question of, hey, I'm having an issue. Is it the app? Is it the network? And then very quickly also answer, am I the only one experiencing this issue or is it all of Google, and accordingly take the next step. 

Also, Connectivity Tests is the third module. It's basically the go-to module for running any diagnostics. Can source [? talk to your ?] destination or not? And it provides a hop-by-hop trace based upon the reachability model that we've built out for both the control plane as well as the data plane. Is a destination reachable or not? We are able to provide that answer very, very quickly to troubleshoot any reachability issues. 

And the fourth module, Firewall Insights, is basically to help customers better improve their security posture, because in firewalls, again, it's always increasing set of rules. And most of our customers don't feel like they have a handle on it. So this provides an analysis on top of that to be able to provide insights like, are there any shadowed rules, are there any overpermissive rules, so that you can accordingly take action on your firewall rules set and improve your security posture. 

LORIN: So let's dig into Network Analyzer. So how does that fit into the whole Network Intelligence Center suite of products? 

MANASA: Sure. So where NIC had kicked off, like Zach mentioned, was mostly customers have an issue that they're trying to troubleshoot. And they come into NIC. And they can very quickly troubleshoot what's going on. Is it the app, the network? Where exactly is the issue? And can fix that. 

But what we started hearing from customers is, for example, hey, instead of me having to go and run a test to be able to troubleshoot it, can you suggest certain tests based upon if you know there is an issue at my end, et cetera? So how can we start proactively telling customers about these issues that we may, in a way, have an understanding of? 

So with Network Analyzer, we basically said, hey, let's take it a step further from what customers are asking and let's start proactively detecting issues in their environment that are related to the network that might impact the network or the services that they're running on top of it. And so that was how, again, Network Analyzer started, where it's basically a set of always-running analyzers in the background that will proactively detect these network failures in your environment or even suboptimal configurations, because there are a lot of best practices that we as Google offer to be able to improve your availability and performance. And we can suggest certain things that are relevant to your environment that will help you improve your availability in general. 

So it serves us insights like that. It helps you predict and lets you predict certain capacity issues you might hit before you hit them so that you don't run into certain issues. So it's a set of these analyzers that are helping you either detect or predict some of these failures that might happen in the future. 

And again, the way we selected these analyzers in the beginning, again, was customer feedback. Plus, we also kind of, through our support teams, got to know about common things that our customers were running into based upon misconfigurations, et cetera, that we automated and made available to our customers. 

STEPHANIE: Yeah. I remember us talking before this call about how a lot of customers might not even want to know what tests need to run. And they just want it to be automated. They want that prescriptive nature in this dashboard or in this tool. And so it's nice to see that we've taken that, quote unquote, "magic Google" experience and the experience from our support team and what real customers have gone through to inform our feature set on this new module here. But I'm curious, Zach, can you dive into some of the specific features and examples of Network Analyzer? 

ZACH: Sure. I can give a couple examples from the initial set of analyzers. One of the analyzers checks for something that we refer to as overlapping routes. And so if you're not spending all your time networking, effectively, what overlapping routes are is where you have routes for the same networks being learned from multiple different locations. We also refer to these in the analyzer as shadowed routes. 

And the importance here or the symptom that a customer would typically experience is either the inability to connect between different workloads in the cloud or maybe between their workloads in the cloud and their on-premises environments, or they may see inconsistent connectivity. So for example, some traffic succeeds whereas other types of traffic fails. 

And so what this particular analyzer will do is it'll look at all the routes for the resources you have configured inside the cloud environment. And it'll evaluate those against routes that are being learned from outside the cloud environment or from peer cloud environments, say, for example, maybe a peer connection you have to a managed service or to a partner environment. And what it does for the entire virtual network is it actually surfaces where there's conflict between those routes. And those conflicts are generally what can end up resulting in inconsistent connectivity or the inability to connect between resources. 

One of the really interesting things about this is the scope in which the analyzer runs. And it's really running for the entire virtual network environment. And so if I compare that behavior with, for example, what a customer may run with the Connectivity Test module in Network Intelligence Center, Connectivity Test would be a very pointed test. So for example, you're saying I want to check connectivity between point A and point B for a specific set of protocols and maybe ports. 

What the analyzer does is it takes that concept and says, where you may have found an issue with one particular pair of connectivity, it actually can surface any other instances where that would happen in the virtual environment. So it kind of expands the scope of the check to say, not only would this be a problem for one specific type of workload or pair of resources, but this would be a problem for all these other specific scenarios in the virtual network environment. So it's a pretty powerful check. 

The second type of check or example that I'll give-- and I say type of check because we actually have a number of different analyzers in the initial release that take advantage of this approach-- is they validate whether the networking configuration of your cloud environment meets the requirements for interaction with a particular managed service. 

And so for example, if you're leveraging a managed service like Cloud SQL or Google Kubernetes Engine, which is our managed Kubernetes offering, these analyzers are actually validate that the network configuration in the cloud is in place or the proper network configuration in the cloud is in place to allow for successful connectivity to those managed services. And that can come in a couple of different ways. Number one is, obviously, when you're initially setting up those managed services, that's a useful check to have because you want to make sure that the cloud networking environment is set up to make those managed services successful. 

But the other interesting thing is as your network environment configuration changes, the analyzers will actually adapt and tell you, for example, hey, this changed in the network environment. You need to also then go update the managed services environment to replicate or account for those changes that you just made. So it's got the intelligence to understand not only the initial state that's required for successful connectivity, but also, as the configuration state of the environment evolves, it has the awareness to understand where you need to potentially make changes so that you continue to maintain connectivity to those managed services. 

STEPHANIE: So I have a question about essentially where the Network Analyzer runs, because when it comes to-- you talked before about overlapping routes. You brought up VPC peering. VPCs can exist within different projects. They can exist within different organizations. And they appear together. So what is the scope of Network Analyzer? How broadly does it reach in terms of this network analysis? 

ZACH: Yeah. It's a good question. As you mentioned, really everything you're creating inside the Google Cloud environment is created in the context of a project. But specifically, in the networking space and also in the Cloud Monitoring tools, of course there's often a need to look at things from the perspective of multiple projects. And those could be multiple projects that are within a customer's organization. 

But also, in the case of managed services, you have projects and resources that are actually deployed, for example, in Google's infrastructure, which are being managed by our SRE teams. And so as with the rest of Network Intelligence Center, Network Analyzer is also integrated with Cloud Monitoring. And so you can create, essentially, monitoring workspaces that encompass multiple projects and have the analyzers run against that workspace. So it's going to show you the analysis results of all the projects that are part of that same workspace. 

And then through the managed services integration, it's naturally looking at your specific instances of those managed services, even though the infrastructure is running within Google's infrastructure, to actually surface those analyses for you. So you can look at it on a per project basis, but you can also look at it across multiple projects the same way that you can do with other Network Intelligence Center features. 

STEPHANIE: So you were talking about the different types of analyzers that exist. The way that the product works, do you have to enable the analyzers one by one? Do they all come enabled? Essentially, how do you get started with it? 

ZACH: Yeah. Essentially, all of the analyzers run. So effectively, you can go into, as an example, the Network Intelligence Center portion of Cloud Console. You can go to Network Analyzer. And you've got a nice summary view across a number of different dimensions or areas that show you issues that have been detected through the analyzers running. And then you can drill down into those individual results or you can actually focus on a subset of the results. 

So for example, maybe you just care about the analyzers that have run in the context of hybrid connectivity to your on-premises data center, as an example. So you don't need to enable them individually. They kind of run as a set, if you will. 

And they run as two different modes today. Number one is they are a set of analyzers that will run periodically. So as your environment changes, again, it's going to continue doing this periodic analysis so it can understand how things have changed. And maybe now something is out of sync, if you will, with one of the analyzers and we want to surface that for you. 

The other class will run event-based. So for example, again coming back to the managed services use cases, we're not going to necessarily run a managed services analyzer if you're not using that service. But when you configure that service, that's the trigger that causes that specific analyzer to run. So depending on the type of analysis we're performing, today they're either going to be time-based, running on a recurring schedule, or they're going to be event or trigger-based based on specifically how you have your environment configured. 

STEPHANIE: Yeah. This is really powerful stuff, because I can imagine with a customer who might have a more complex environment and has bespoke applications also interacting with managed services, the fact that this analyzer can evolve with your changing environment or added users, added services, is really powerful for having more of that seamless automated experience. And then on top of that, each cloud really does have its own idiosyncratic ways of constructing network topologies and services. So having this handled for you on the Google Cloud side takes a lot of burden off of the shoulders of network engineers or just cloud engineers who are managing this environment. 

So I can imagine it's taken a while to put this all together. But can you tell us a little bit more about some of the design decisions and choices or pivotal moments in creating this module specifically? 

MANASA: Because we started this with kind of this goal of just simplification of the workflow-- it should be available out of the box for customers to consume-- so one was around, as we kind of defined or desiged these insights, we wanted to abstract away all the complexity behind it. By that, what I mean is there could be certain configuration changes that might impact multiple services, or there could be multiple configuration changes that might impact to have a similar failure or an issue. 

Instead of surfacing each of these individually, we wanted to be able to correlate them to be able to tell customers the end result. This is impacted. This is the underlying root cause and what you need to do to fix that. So we wanted to kind of abstract all of that and simplify it to the end in sight of what exactly is impacted at your end and how can you fix it. So that entire workflow was created based upon that. 

The second thing was also, as we talked to customers, we wanted to make sure these insights worked very well with the way they wanted to consume it. So for example, we saw that there were certain teams who wanted to focus on the critical ones, the critical and high-priority ones, and fix that. But the certain teams who have different service or product teams-- so load balancers are managed by a set of product teams within their organization, et cetera. 

So being able to consume these based upon the way your organization is structured. And so that workflow, as well, is something that we enabled so that these constructs are given to you when you either are using our UI or with the [? GSS ?] products eventually set up alerts around this as well or through APIs as well. 

So as we did this, one of the things I would call out is we did have this product available to some of our early customers who provided feedback and were pivotal to us providing feedback. And all of our customers who kind of deployed this did have certain insights that they were able to act on and thereby improve their deployment for better availability and performance. 

STEPHANIE: So you talked about customers' influence, right? Can you talk about any of the customer stories that influenced the design of Network Analyzer? 

ZACH: Yeah. I think a couple of parts. Actually, one of the last things Manasa mentioned kind of reminded me, the challenging thing in building capabilities like this is Google Cloud has a lot of customers with a lot of different types of environments, a lot of different workloads, both in terms of function but also size, et cetera. So one of the things that's challenging in building a capability like this is, how do you come up with a set of analyzers that are broadly applicable across multiple customers, multiple different environments? And it can be a pretty challenging problem, because what's normal in one customer's environment is an exception in another one versus another. 

So one of the things that we learned very quickly is we needed to give customers the control to determine whether a specific analyzer's results were relevant to their environment. For example, they may have an analyzer that runs and says, hey, you've got all these unused external IP addresses. Do you expect that or what are these things doing here? 

So there's one dimension through which that's not expected and these things should be either released or assigned to resources, et cetera. But then there are some customers, depending on their use case, where that's totally normal. Maybe they hold some in reserve for future use or what have you. 

And so one of the things we've done with Network Analyzer is the customer can actually choose whether a particular analyzer's results are something that they want to take action on or if they want to just acknowledge that this is expected. I can kind of put this result in the background or acknowledge this result because it's actually working as expected specifically in my environment. And so I think that that's one of the key initial learnings that we had in working with early customers is trying to balance, again, a broad set of analyzers that are useful for a lot of customers but also giving customers the ability to acknowledge, this is normal in my environment. I don't need to be notified to take action on this. 

STEPHANIE: Yeah. And thinking of all the various use cases that this needs to meet, there's also the personas and the responsibilities of network engineers at various sized companies, different industries, different organizational structures. So who would be the type of persona that would be using Network Analyzer? 

ZACH: This is another great question and another question that, I think, in our experience, kind of varies by the customer. I'll give a couple of examples for customers that we work with. So on the one hand, you may have a large enterprise customer that has different teams that are responsible for different aspects of the cloud deployments. 

And so for example, Lorin and I work very much with networking teams at the customers that we support. And you may actually have teams that are dedicated to networking within the cloud. So they're responsible not only for their on-premises networking environments but, as customers expand their workloads into the cloud, they're responsible for setting up all the cloud networking aspects of those. That's oftentimes at these customers a different group from the teams that are actually deploying the workloads, the compute infrastructure, the application code, the managed services like Cloud SQL and others. 

So one of the, I think, nice things about Network Analyzer is it really is kind of almost a safety net, if you will. So you have a team that, for example, may not be the cloud networking team deploying Cloud SQL. That team may be very experienced with databases, and deploying those, and what's required from kind of a database infrastructure perspective, but less experienced in what's required from a cloud networking perspective to make that managed service work. 

And so having the analyzers run can help quickly identify, as those teams create new services, hey, this other piece that's maybe typically outside of your responsibility is something that needs to be addressed for this managed service to be fully functional in your environment. So from that perspective, you've got kind of the application or service teams that are deploying services that have underlying cloud networking dependencies that are users for Network Analyzer. 

The others are your traditional networking teams. You've got, obviously, the kind of design and deployment teams but then also the operations teams. And more and more, we see tools like Network Analyzer being the first stop that a network operations team will make in terms of trying to quickly identify, is this a networking problem? And if it is a networking problem or we suspect that it's a networking problem, where should I maybe focus first? 

I think, Stephanie, to your point, the different cloud providers have their different nuances in terms of the products and how they work together. But the same can also be said between the cloud environments and non-cloud environments. So oftentimes we'll work with a customer that's very experienced in on-premises network troubleshooting but is maybe, at least initially, lost in the cloud environment for, where do I do these equivalent actions that I would take on-premises troubleshooting in the cloud? 

And so, very quickly, he's pointing them at Network Analyzer, pointing them at other tools inside of Network Intelligence Center, can help them quickly get their bearings and say, OK, I know that the cloud environment at least is configured to work. And these analyzers are showing me that there's no exceptions that I should be concerned with. And that can quickly reduce the initial triage and troubleshooting time. 

In some cases, actually, with initial customers we've worked with, it's literally gone from hours to minutes in terms of being able to quickly identify, like, where is this problem? Is it in the network? If it is in the network, where should I specifically focus? And it's really eye-opening for a lot of customers. And I think that's been a pretty positive outcome from the initial use cases of Network Analyzer. 

STEPHANIE: I spoke with Ryan Przybyl, another one of your teammates, about this transition from traditional networking to service-oriented networking. And that was a really great episode on this podcast as well. But he describes it as a canyon and us trying to build the bridge for these more traditional network engineers that might be more accustomed to tools and ways of doing things on premise and building the ability for them to do that in the cloud. But do you find that Network Analyzer is one step in that bridge towards making that transition easier? 

ZACH: I think so. And I think-- I mean, just my opinion as well, I think it also helps show customers how you may approach just network analysis in general differently, both inside and outside of the cloud environment. And what I mean by that is providing the raw data that's used for planning and analysis from a networking perspective, I think, is really just foundational. 

And everything you do inside of Network Intelligence Center, whether it's connectivity tests or firewall insights or Network Analyzer, you can consume that underlying raw data that we're visualizing through Cloud Console and other interfaces. But I think taking that raw data and actually being able to derive insights and recommendations for customers from that-- we'll sometimes call that answering the so-what question, right? I've got all this raw data, but like, so what? What do I do with this data? 

I think that's a pretty powerful thing to give customers because, again, having the raw data is key, but being able to analyze the raw data and draw conclusions from that data, I think that that's a huge step. And that's what I think is most exciting to me and a lot of my teammates, is really continuing to kind of elevate the analysis and the prescriptive actions or recommendations that we can make for customers based on this underlying infrastructure. 

LORIN: Yeah. And I'll just share, in my own experience with working with customers in this role, each organization is set up differently and kind of goes about things a different way. But I really feel like with Network Analyzer, it really enables application teams who might not know networking as well as the traditional network engineers, but it really enables those application teams to be able to be more responsible for the health of their own applications, which really alleviates a lot of responsibilities off of the network engineering team. 

This is what they traditionally are responsible for. So to have a tool like this that is easy to use and easy to consume the information and take action off of, you can push a lot of those actions onto the application team themselves. So that's really interesting. It's really cool. So how can people get started with Network Analyzer? 

MANASA: So it is available as part of the Cloud Console today. They can directly navigate to under Networking, Network Intelligence. You can access Network Analyzer. It's available out of the box for them to consume. 

We've also released a blog around Network Analyzers that [INAUDIBLE] on the use cases that we've talked about today. So they can definitely go ahead and get more information there. And also, there is documentation around all the analyzers that are available today under the Network Intelligence Center documentation for them to consume as well. 

ZACH: One other thing I would add-- I mentioned consuming the capabilities through multiple avenues. And I think that that's important as well. Our intent is not to force you to use one particular interface to consume these capabilities. And the idea there really is we want you to be able to take these capabilities and integrate them into your existing workflow. 

Certainly, we'll provide native graphical interfaces as an example for consuming these capabilities. We want to make that available and have it be useful. But for customers who may, for example, want to integrate Network Analyzer results in an existing workflow, they can actually consume those results through API interfaces directly. And so I think that that's another important dimension to point out is, again, like broad spectrum of customers, a lot of different ways with interacting with the cloud, some more reactive human-driven, some fully automated. Our intent is to expose these capabilities through all of those channels so that they can fit into customers workflows with as little disruption as possible. 

STEPHANIE: Great. This is really exciting. Congratulations on this launch. Is there anything else that we missed that you would like to mention before we wrap things up? 

MANASA: Yeah. Just a kind of note that this is kind of-- we just kicked it off with an initial set of analyzers. So all we talked about is just the beginning. And as we talk, the team is actually working on adding more and more analyzers on a weekly and monthly basis that you will see show up as part of the product and the documentation. So as a Google Cloud customer, would love to hear from all of you as well. You can always directly reach out to us at network-intelligence-center@google.com for anything that you would like us to automate, that you would like us to add as an analyzer and make available to all of you. We would welcome that. 

ZACH: Yeah. I think I'll just echo that. I think our team, who does a lot of work in the area of best practices and recommendations for customers, is super excited about this functionality, especially as a mechanism for delivering best practices at a really large scale for our customers. I think that that's super powerful. 

And Manasa and team have already reached out to Lorin and I and others to say, OK, what are the next set of analyzers? And we've got a good list going. So we're excited about this avenue as a way to deliver recommendations and interface with customers. 

STEPHANIE: Yeah. Amazing. Yeah. Looking for feedback here. Customers have been really center of designing this product at the get-go. So huge congrats to the team once again. And we hope to have you back on the podcast again soon. Thanks so much, Zach and Manasa. 

ZACH: Thanks for having us. 

MANASA: Thank you. 

LORIN: So what an interesting conversation with Manasa and Zach. I really enjoyed it. And I just thought that as me as a networking specialist, I work with a number of different products across our networking stack. And I am familiar with Network Intelligence Center, but I actually have not heard a ton about Network Analyzer. So I learned a lot from listening to them. And I'm definitely going to be checking Network Analyzer out later in my day today. 

But I am familiar with other modules of Network Intelligence Center, probably my favorite being Connectivity Tests. For those that haven't used Connectivity Tests before, you absolutely should start. I would say it might be close to life changing just because, with cloud networking, you don't have the same layer of visibility of what's going on under the hood compared to folks who might be more familiar with the traditional on-prem networking. You know what's going on under the hood. 

So with Connectivity Tests, it really exposes, as Zach said, the hop-by-hop viewpoints of what's going on within the cloud network. So in those troubleshooting situations where you maybe are using a managed service that is hosted in a tenant VPC that you don't have as much visibility into and you're trying to connect back to on-prem, Connectivity Tests has that whole hop-by-hop visibility of what your route is and where your packets are going across the network. So love Connectivity Tests. I can't wait to play with Network Analyzer a bit more. I'm just so excited by it. 

STEPHANIE: I love that you said it's close to life changing. But I think given the people who might be familiar with having to do these types of tests and scratching their heads trying to do root cause analysis when they're not sure if it's the network's fault, this is a great tool for people who really understand that pain point. So I do agree that it can be life changing. 

And what Zach said is that these are existing modules. And Connectivity Tests is great for when you know your point A and your point B and you want to figure out whether those two things are going to be viable connections. And then as an added module, this really fills in the gap of being able to provide something that evolves and adapts with your overall environment and can dynamically change when you add services, and can add in automated tests and give you that prescription that a lot of folks are looking for in the cloud, especially as you change environments over. 

And the other thing I wanted to comment on is something that you talked about, Lorin, in the conversation, mentioning how some of this responsibility is moving from those who are traditional network engineers and really did have to keep a very close eye on anything that's being deployed in your overall environment to the folks that are deploying the solutions and giving them that empowered capability to know that what they're deploying is according to the right network topology, and it's going to work as intended, and it's also not going to move outside the boundaries of expected behavior or security protocols that you have in place. 

But that being said, it doesn't mean that they're taking on a massive burden and now they have to wear two hats of being a network engineer. Overall, if you net it out, that burden is still being covered by Google Cloud, who is giving you this managed capability and honestly covering a lot that folks don't want to do or don't want to ask questions about. They just want to be told, what kind of critical high or low notifications are we seeing in your environment, and what are some possible solutions that you can optionally take? 

LORIN: Yeah. Yeah. The more customers that I work with, the more that I find that the traditional application engineer is starting to have to be a little more familiar with how networking works within Google Cloud, just with the ability to consume our managed services, just kind of understanding how the networking works under the hood. It's helpful for the traditional application engineer. But with the release of products like Network Intelligence Center, like Network Analyzer, that makes this a lot easier for the application engineers to be able to assess the health of their applications. Google is, in a way, doing it for them. So it's just surfacing the easy-to-consume data. 

STEPHANIE: Right. Right. And kind of what Zach was saying is you have a plethora of data, but it's really that so-what question, like, OK, what do I do with this data? So this is giving you that insight. Well, it was a really exciting launch at I/O. I'm sure we're going to get a lot more feedback from customers and from you, listeners. 

If you do have any feedback, again, please reach out to that email alias. We're going to include it in the show notes. And/or tweet at me or Lorin. We're happy to provide that feedback back to the product team and work with them to improve this module for Network Intelligence Center. And with that, Lorin, what are you working on next? 

LORIN: Yeah. So I am actually working on a new video series. You can check it out on the Google Cloud Tech YouTube channel. You can find it on the "Networking End to End" playlist. It's called "Concepts of Networking." And in this series, I'm going to be focusing on different managed services that Google offers. Think like Cloud SQL, Cloud Run, along those lines. And I am talking about how the networking works under the hood. And I'm providing some connectivity tips, some security tips just to make it easier to consume these managed services. 

STEPHANIE: I was thinking about your video series during the conversation, thinking about how we're really enabling the application developers and those deploying these services to have a better understanding of how to deploy it with networking in mind and doing it according to how it's designed on Google Cloud. So it's all aligned. 

LORIN: Exactly. That's exactly why I'm doing it. 

STEPHANIE: Yeah. So congratulations on that. And thanks again for jumping on another episode of this podcast for networking. We hope to have you back on again, probably very soon again. So thanks again, Lorin. 

LORIN: Thanks, Stephanie. 

STEPHANIE: Thanks, everyone else. We'll see you next week. 

[MUSIC PLAYING]