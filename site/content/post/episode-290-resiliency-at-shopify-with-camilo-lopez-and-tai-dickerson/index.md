+++
audioDuration = "00:39:57"
audioFile = "Google.Cloud.Platform.Podcast.Episode.290.mp3"
audioSize = 95901302
categories = ["Online Shopping", "Scaling", "Company Culture", "Resiliency"]
date = "2022-01-26"
description = "Carter Morgan and Stephanie Wong host Shopify guests Camilo Lopez and Tai Dickerson this week. "
draft = false
episodeNumber = 290
hosts = ["Carter Morgan", "Stephanie Wong"]
title = "Resiliency at Shopify with Camilo Lopez and Tai Dickerson"
image="/post/episode-290-resiliency-at-shopify-with-camilo-lopez-and-tai-dickerson/images/hero/hero-EP-290.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/sdbzd6/episode_290_resiliency_at_shopify_with_camilo/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++


[Carter Morgan](https://twitter.com/carterthecomic) and [Stephanie Wong](https://twitter.com/stephr_wong) host Shopify guests [Camilo Lopez](https://twitter.com/CamiloLopez) and Tai Dickerson this week. Shopify streamlines the online purchasing process so merchants and customers can transact with confidence.

Camilo and Tai talk in-depth about Shopify's tech stack and why the choices made are so important to performance. Shopify engineers use a combination of Ruby on Rails, MySQL and Google products like Kubernetes. Resiliency systems like active-active configurations, chat ops for quick solutions, and bot and overload protection are worked in. By leveraging these tools and staying flexible in their resiliency efforts, Shopify is able to adjust to new merchant requirements and teams are able to work efficiently.

While tech continues to progress and change, the Shopify culture remains a driving force for advancement, Camilo tells us. The company ideals and axioms help steer the brand and dictate which technologies they'll use to solve new and changing client demands. The 2014 outage shaped the future of these cultural ideals, emphasizing the need for quick action and resiliency components like constraints to ensure system safety. Shopify engineers also built enhanced testing tools like Toxiproxy to simulate poor network conditions and account for potential issues.

The 2021 Black Friday Cyber Monday shopping season was Shopify's biggest yet. Camilo and Tai describe how Shopify's resiliency culture and intense prep work made the biggest shopping weekend of the year so successful. By offering educational tools and a support network that values good communication, their company culture continues to grow, and Tai tells us how it's not just the software that should be resilient. Building a resilient, flexible company culture is just as important.

Camilo talks about Shopify's recent shift to a completely remote work place and the new challenges and opportunities it presents. 

##### Camilo Lopez

[Camilo](https://twitter.com/CamiloLopez) has worked at Shopify for more than 10 years, he has been an IC and a manager leading teams that take care of Shopify’s scalability and resiliency.

##### Tai Dickerson

Tai is a production engineer at Shopify, where she shares her passion for resilience engineering with others via paper discussions and as a leader in Shopify’s Resiliency SIG.

##### Cool things of the week

* Machine images is GA [docs](https://cloud.google.com/compute/docs/machine-images)
* New Cloud Logging and Monitoring capabilities
     * Monitoring third-party applications: MariaDB [docs](https://cloud.google.com/monitoring/agent/ops-agent/third-party/mariadb)
     * Monitoring third-party applications: MySQL [docs](https://cloud.google.com/monitoring/agent/ops-agent/third-party/mysql)
     * Monitoring third-party applications: Memcached [docs](https://cloud.google.com/monitoring/agent/ops-agent/third-party/memcached)
     * Starting with version 2.8.0, the Ops Agent supports Ubuntu 21.10. For more information, see Linux operating systems [docs](https://cloud.google.com/stackdriver/docs/solutions/agents/ops-agent#linux_operating_systems)
 
##### Interview

* Shopify [site](https://www.shopify.com)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Kafka [site](https://kafka.apache.org)
* Redis [site](https://redis.io)
* Elastic Search [site](https://www.elastic.co/enterprise-search)
* Memcached [docs](https://cloud.google.com/monitoring/agent/ops-agent/third-party/memcached)
* Toxiproxy [site](https://github.com/Shopify/toxiproxy)
* Shopify Engineering [site](https://shopify.engineering)
* Shopify Careers [site](https://www.shopify.com/careers)
* BFCM Twitter Thread [site](https://twitter.com/ShopifyEng/status/1465806691543531525)
* Shopify engineers deliver on peak performance during Black Friday Cyber Monday 2021 [blog](https://cloud.google.com/blog/topics/retail/shopify-and-google-cloud-team-up-for-an-epic-bfcm-weekend)
* Cloud, Load, and Modular Code: What 2022 Looks Like for Shopify [blog](https://shopify.engineering/cloud-load-modular-code-shopify-2022)
* Terri Haber on Resiliency at Scale [site](https://twitter.com/ShopifyEng/status/1455245541193891840)
* Terri Haber on Enforced Pacing [site](https://twitter.com/ShopifyEng/status/1456276549099917319)
* Bart Jedrocha on Load Testing [site](https://twitter.com/ShopifyEng/status/1458077906391941128)
* Bart Jedrocha on Tooling for Load Testing [site](https://twitter.com/ShopifyEng/status/1459226003666976770)
* Bart Jedrocha on The Future of Load Testing [site](https://twitter.com/ShopifyEng/status/1460625455275462663)
* Ryan McIlmoyl on Code Red [site](https://twitter.com/ShopifyEng/status/1461710353759358979)
* Ryan McIlmoyl on Working with IMOC [site](https://twitter.com/ShopifyEng/status/1463164686719852548)
* Camilo Lopez on The 2014 Outage [site](https://twitter.com/ShopifyEng/status/1466120916279037953)
* Camilo Lopez on Holiday Season Learnings [site](https://twitter.com/ShopifyEng/status/1466857211943133190)
* Tai Dickerson on Doing Things Differently [site](https://twitter.com/ShopifyEng/status/1468665682220908544)
* Tai Dickerson on Learning & Community [site](https://twitter.com/ShopifyEng/status/1469404804426477581)

##### What's something cool you're working on?

Stephanie is working on season 2 of the [Where the Internet Lives](https://www.google.com/about/datacenters/podcast/) podcast.

Carter is working on season 2 of [VM End to End](https://www.youtube.com/watch?v=AGa6fUTtCgE&list=PLIivdWyY5sqIteZONy-rTwyf3w3OddFQ1).

{{< transcript "[MUSIC PLAYING] CARTER: Hello, and welcome to episode number 290 of the weekly Google Cloud Platform Podcast. I'm Carter Morgan, and I'm here with my colleague Stephanie Wong. Hi, Stephanie." >}}

STEPHANIE: Hey. I know this is the first episode that I've been on this year. So happy new year. 

CARTER: Happy new year. So glad to be with you again. 

STEPHANIE: Yeah. 

CARTER: Well, what's happening in this episode? Can you give me a little bit of a rundown? 

STEPHANIE: All right, so I'm really stoked about this episode because I knew I had to get these folks on. I happened to be scrolling through Twitter, and I saw this tweet thread outlining Shopify's incredible engagement that they have had over Black Friday, Cyber Monday, in 2021. 

We're going to jump into all of in this episode-- how they were able to scale to handle $6.3 billion in global sales from Shopify merchants, 30 terabytes per minute of egress, 11 million queries per second. 

I mean, these numbers are mind-boggling. So I reached out to some folks over on Shopify's side. And today, so excited because we were able to get Camilo Lopez, director of production engineering, and Tai Dickerson, senior production engineer, on the episode. 

CARTER: This episode was a very cool one. I learned so much over the course of it. So thank you so much for putting this together. 

STEPHANIE: Yeah, of course, I agree. They have a lot of history at Shopify. I think Camilo's been there for 10 years, and Tai has been a spearhead of the resiliency teams at Shopify. So yeah, get excited. 

CARTER: Yeah, I can't wait to get into that. But first, let's talk about some cool things of the week. 

[MUSIC PLAYING] 

STEPHANIE: All right, so my cool thing of the week is that our Compute Engine machine images went GA. And if you're unfamiliar, a machine image is a Compute Engine resource that stores all of the configuration, metadata, permissions, and data from multiple disks of a VM instance. 

And so you can use these machine images in many system maintenance, backup, and recovery as well as instance cloning scenarios. So this is really useful for, when you want to use a machine image to copy disks, then Compute Engine will guarantee that the data across disks is captured in a crash-consistent manner at a given time. 

CARTER: Oh, wow. That is very cool. I've done a lot of work with VMs and stuff. So it's cool to see this finally out there and ready for everybody. 

My cool thing of the week is about a little bit of an update to some services that I'm trying to learn more about. Cloud Logging and Cloud Monitoring now have some new capabilities, and they're able to collect different types of metrics, whether it's a MariaDB metrics for Cloud Logging. 

Cloud Monitoring can now collect MySQL metrics from op agents, collect Memcached metrics from the op agents, and a lot more. If you're interested in metrics and logging, and pretty much all of us should be, you're going to want to check that out. 

STEPHANIE: Yeah, and they talk about metrics and logging in today's episode as well and how they're doing it at Shopify. So why don't we go ahead and jump into our main content with Tai and Camilo? 

[MUSIC PLAYING] 

All right, well, today we have Shopify here, and I'm super excited to have Camilo and Tai here with us. Shopify has been such a growing and prominent name, especially over the last couple of years during the pandemic. So why don't you go ahead and start off by telling us about you, who you are, and what you do at Shopify? 

CAMILO: And so my name is Camilo Lopez. I been at Shopify for about 10 years now, working on scalability infrastructure. Right now, I am director of production engineering, and I live in Portland, Oregon. 

TAI: And I'm Tai Dickerson. I'm a senior production engineer. I've been here maybe 2 and 1/2 years. And I've been able to work on problems like auto scaling, scalable multi-tenancy, and our [INAUDIBLE] readiness, as well as a lot of sort of side work around resilience engineering. I've spent almost half my career as a software developer in test before Shopify. So it's been interesting to spot some of the similarities in mindset. 

CARTER: Wow, I can't wait to dig into that a little bit more and hear more. But first, maybe a little bit of context is in order. Can you tell us a little bit about Shopify? Because I've seen its name all over the last few months. 

CAMILO: Shopify, contrary to popular belief, is not a music streaming service. Shopify is a commerce company. And essentially, what we do is we provide buyers and merchants with streamlined and resilient and fast way of exchanging goods and services. As we say, we think Shopify, like our mission is to make commerce better for everybody. 

Typically, we've been kind of more in the background, like we don't brand everything Shopify, Shopify. Like, many of the stores you buy online that are-- you know, the big ones that you see the name all over the place, are very likely to be Shopify merchants these days. 

TAI: And then even beyond storefronts, we serve merchants large and small. And so we support a lot of channels-- social media, point of sale, and some highly custom, even scratch-built storefronts, which is something we demoed at our Unite conference last year. 

STEPHANIE: Wow. Well, in the background no more. I think Shopify is absolutely in the foreground, especially given the Black Friday and Cyber Monday experience that you just had this past year. But I do want to talk about resilience, since this is the theme of today's episode. 

We have definitely all understood resilience from a personal perspective over the last couple of years. But in the context of Shopify and e-commerce, what is resilience, and what's at stake when it comes to customer experience on Shopify? 

CAMILO: Being that, as I said, we're a commerce company, typically what is at stake is money. When you think about it, many of our merchants, they depend on us for their livelihood. I don't know if all of it, but some of it at the very least. 

And when you look at the numbers, like the global numbers across all Shopify, what is called gross merchandising value, I think every minute that something's not working in our checkout flow, or like pre-checkout at the moment our merchants are exchanging with the buyers, could be lost, right? So it is certainly significant both in terms of just raw numbers and like personal impact to the people that are actually using the service 

TAI: Yeah, and you mentioned, Camilo, that a lot of the time, people may not even realize they're using Shopify. So it's not just our reputation that's at risk. It can be the reputation of the merchant that we're providing service to. 

If we're down, the buyer may not really see any difference between that and the merchant is down, or the site is slow or unreliable. 

CARTER: Wow, yeah, I didn't think about that second order of reliability that you need because it's not just your reputation on the line. It's another brand that chooses to work with you. So what is the tech stack like underneath that that's keeping this up? 

CAMILO: I like to say that we like boring technology. Some people might disagree, but we are very heavily invested in Ruby on Rails. We're very heavily invested in MySQL. Those are the two main pieces, right? 

There's lots of things around it, right? Like we use Kubernetes, we use GCP users, right? So we use GKE and several Google products. But overall, our belief is that the simplest that we can make the stack, the more reliable it's going to be, and not only in terms of reliability of uptime and performance, but also in terms of like, the more people can move things around the company without having that overhead of like, hey, well, like you just start in this team, so you need to learn a new stack. 

And we use Scala or whatever language-- like, nothing against Scala. Scala's a great language. I'm just using this example. However, sometimes when it makes sense, we will use the right tool for the job, right? So if you're writing a Kafka extension, well, use the JVM, whatever makes sense. 

TAI: Yeah, like you said, Camilo, boring technologies, including Elasticsearch and Redis and Memcached and Kafka. But that isn't to say we don't try and find ways to really keep them up-to-date and manageable for us, you know? We've been through different iterations of tooling, just around MySQL, right? 

We used to manage VMs with Chef. And now we've built our own KateSQL, kind of MySQL on Kubernetes platform. And for our MySQL VMs, we use a service called Mason. That kind of takes care of automatically creating, deleting them, and sort of self-healing. 

So as much as, yeah, we do choose boring technologies. We invested in those technologies. And so we do have some pretty extensive tooling built up around it. And then we try to apply resiliency to that tooling too. I mean, at the very least, we're kind of making things less error-prone potentially by removing humans from the loop on repeatable tasks. But we try and build these things in a way that they're going to be resilient too. 

CAMILO: And the quickest tour of the stack is the following, right? Like Cloud [INAUDIBLE] is our front end, then we go into GCP, then we do some tenant routing, because we do use MySQL, but we certainly have more than one database. We have hundreds and probably thousands of databases. 

And we need to figure out who lives where, right? And that happens in a combination of Nginx and Lua that then gets into the right Rails process that runs into GKE, right? Like that's the quickest tour of the stack. There's a lot more of this going on, but like, that's kind of like a way of framing the rest of the conversation here. 

CARTER: I love that you said this is going to be a simple overview, and tools that we've heard, like Ruby on Rails, DKE, Elasticsearch, Memcached, NGINX, Lua. It's just a testament to, if you're operating at this scale, even simple is not that simple. There's a lot of moving pieces and parts. 

CAMILO: Things need to be as simple as possible, but not simpler, because they wouldn't work. So that's very perceptive. I like. We try to always, like, take a step back and say, hey, one of these pieces is redundant. What can we make more streamlined? But also, like, we need the functionality sometimes. 

TAI: Yeah, you know, and here, we could also talk a bit maybe about some of the tech that we use to make our platform more resilient. But that might be getting ahead of ourselves a bit. It's probably nothing too surprising, you know? 

It's running active-active setups. It's being able to fill over. It's having different failure domains at different levels. But there are cases where we focus on the human side of it too, like we've used ChatOps tooling for years to help make it a lot easier to collaborate on instant response and, you know, kind of immediately apply some mitigation. 

And there's sort of a defense in depth from the edge, all the way down to the database, to protect against things like overloads and bots and even just a bad query that a developer may have added without realizing it. 

STEPHANIE: Yeah, it's a lot to think about. And there's a certain beauty in keeping things simple and leveraging boring tools, as you said. But it sounds like there's two approaches. 

You are trying to design with resiliency in mind from onset, while you're also incorporating new capabilities over time as requirements change, as growth happens, which it has tremendously in the last couple of years for you. And so you're migrating MySQL to Kubernetes and leveraging self-healing capabilities. So how do you take all of this together to think about a resilient strategy? 

CAMILO: It's kind of like a duck. You see them they are doing-- [INAUDIBLE], like, gracefully over the water. They're kind of, like, going nuts moving, moving. The point I'm trying to make is that the resiliency posture and strategy of also, as the system evolves, right? 

Like whatever we did in 2016 is not going to work today because we are a different product and different company. What stays, though, is the culture and the principles, right? So what we consider to be resilient, well, the kind of, like, two-cents definition that is not super academic but I think is operationally good enough is that somebody's going to continue doing this function as dependencies start becoming unavailable or slow. 

And if we centered ourselves in that position and say, hey, Shopify engineers, remember that you must build products and systems that fulfill that definition that are kind of like, ideally, will generate an enduring culture that's going to bring us to the right points as long as people understand that principle. 

So have we changed our minds? Many, many times. Like, what we do day to day does change. Like, we went from data centers to cloud four years ago, maybe. At that point, we already had the same idea of resiliency. But the practice is very different. 

But like, you can't expect a host in the cloud to be quite as available as a metal blade that you owe in the data center. So you have to change your process regarding facilities. Like the failover is way more important than it used to be because it's much more likely to have problems. 

Same goes for the latency changes. When you have SSDs that you own in the data center as opposed to these that you have to run through the cloud, like I'm not saying either of them is better or worse. It's just, as long as you stay true to the principle of hey, when this hard drive becomes slow, you need to keep chugging along, you might have to apply different techniques in the cloud that you would in the data center, for instance. 

TAI: So Camilo, and I think you'll probably talk about this later, 2014, we had a big incident that really changed our approach to resilience. But what I actually haven't heard about a lot myself, and it might be interesting here, but I was like, what changed about how we build things? 

You know, like, you were talking about the change from kind of data centers to the cloud. But I don't know, is there example of even just 2014, not just kind of how we changed our process and how we were organized, but like the tech? 

CAMILO: So that culture did exist forever, since I joined in 2011. Before 2014, when we had some awakening to the realities, it was more of a, ah, that sounds like a really good thing to say. Yeah, we know we should do that, but maybe there's no time today. 

So in 2014, we had a very bad incident where Shopify wasn't unavailable for about four hours. Then what came out of that is like, hey, we need to take this thing seriously. Like, it turns out the real problem is one of our queuing servers was overloaded with functionality. 

It was queuing and caching, and it was doing 400 things. And the failover hasn't been exercised in the last two years. So it was essentially a linchpin holding the entire system that was-- that we didn't even know about. 

It happens to be there was a mistake in the ticket to the data center technicians. They unplugged the wrong machine, and this happened, right? So this is exactly a system that wasn't [INAUDIBLE] doesn't fulfill the definition of, hey, one little thing went down, and the entire system just became crazy. 

So from that moment on, we changed our posture from a very academic and like, hmm, we should make a bazillion things, to hey, this is what it actually looks like when you go and take this machine down, you might see spike of exceptions for a moment. But everything's going to return on its own, back to normal. 

CARTER: Yeah, that was so interesting. And I wanted to follow up with Tai here. I was just curious how, after a big issue like this, your whole company pivoted. And so what are some of the practices and the policies that came in and came out of that? 

TAI: Honestly, one of the biggest ones that I've seen looking back is I think we really leaned into adding constraints to ensure system safety, right? Just constraints to help limit how bad of a state we could get into. Some of it's pretty familiar, I think, pretty broadly known at this point of circuit breakers and time-outs and bulkheads and trying to guard against things like slow requests, but also adding in isolation. 

I don't think, in 2014, we necessarily had the multi tendency that we do today. It may still have been kind of one single database. And so I think there was a lot of technical measures that we started introducing and introducing capabilities to test this stuff too, which yeah, coming from a bit of a testing background, there's actually tools that I, in some ways, wish I had had access to. 

But we have toxiproxy, which helps us simulate bad network conditions, you know, whether an app will gracefully degrade, even when a dependency is down. And it's really good to have that as, like, known behavior. And we have Genghis, which is a low testing tool that we can use to simulate a number of scenarios but really just try and make sure that our system can handle the stress. 

STEPHANIE: I'd love to step back also, just thinking about this story from 2014, when resiliency became even more of a dedicated practice and strategy at Shopify. But I know, Ty, when we were talking before, you had this really good definition of resiliency. 

But what is it now? Is there any way that you're currently measuring it? Is there a mission statement for resiliency at Shopify? 

TAI: I wouldn't say there's a mission statement. I'd say that the first chapter of "Seeking SRE" talks about context versus control-based SRE practices. I think we're very much a context-based, generally, in our approach. You know, we don't mandate that all teams must do things a certain way. But we try and give them the tools, the resources, the education, and awareness and understanding of their priorities so that they can decide how to do that work. 

I don't think there's kind of a singular mission statement, a singular approach to this. But we let teams set their own agendas, and some teams might need to lean harder into this than others, or some teams might have a different kind of flavor or approach to this based on their expertise. 

For example, our infrastructure teams, the way that we approach kind of building resiliency into kind of our database platform might be different than the way we approach building resiliency into something like our data infrastructure. 

The database platform, you know, is probably going to really emphasize consistency and not losing data and not doing anything to surprise people. It's going to really emphasize, like, preserving the integrity of the data over everything else. But maybe the data platform takes a different approach. It'd be pure speculation on my part to give an example. But that might be a case where you could kind of favor, like, serving slightly still data, for example. 

CAMILO: There's a series of principles, right, like where we say, hey, do you prefer is to this? For instance, we prefer to lose availability over, say, a data breach, which we consider the [INAUDIBLE] the worst thing that can happen is we go and lose trust of our customers by leaking their data. 

So if we know that's happening, everything goes out the window. If we need to [INAUDIBLE], probably, because a bunch of very important data is being leaked. I think we prefer that over-- and then what is the next step? 

Well, and we probably prefer data consistency over availability as well. So if that functionality is correct, is corrupting data, like these corrupting that are the worst case scenario, like stop the thing immediately, right? Don't worry about availability. 

Now, the next thing is availability. We prefer availability over necessarily correctness, in some cases right. So like sometimes, a stale storefront is not ideal, but it's better than no storefront. 

Make cultural choices for people so they then can, on their own, as the product evolve, ask for help or find the tools that allow them to make those trade-offs possible. We also have a tiered system of how much you should care about these things. 

If it's a hard day's or a hard week kind of project, like hackathon week, look, I don't care if you think it's-- actually, it's really resilient to anything going on because who cares? Sometimes experiments turn into alpha products, and then wow, maybe you want to care about, at the very least, security in data breaches and stuff like that because you might actually have user data. Even this internal user becomes more important. So the more you become a real product, the more usually on resiliency-- that's kind of like a gradual kind of approach to it because you also don't want to burden people with resiliency principles at the very start of a project that has really no impact on anything on anyone. 

TAI: Yeah, and just to add to that and my earlier response, while we don't take a control-based approach, there is kind of a golden path or a blessed way to approach developing this. Like Camilla was talking about the tier system and like, if you want a hack day's app to kind of stick around, you need to do some work around security and potentially resiliency and things like that to move it into a more permanent tier, for example. 

The one area where we do have some pretty kind of clearly laid out principles, and we do kind of want everyone to be aware of them and follow them, we have a set of axioms in terms of what we value when we're responding to incidents. And Camilo kind of alluded to that earlier. 

We will treat data loss as much more severe than a loss of availability. And so it's good to have these axioms so that when people are responding to an incident, we're kind of minimizing the goal conflicts that they have, where the goal conflicts might be-- on the one hand, they want to mitigate the incident, you know? But on the other hand, maybe they're afraid of turning something off. And so having these axioms kind of helps back up that decision-making. 

CARTER: I love that, and it seems like such a people-based approach, like something that's easy to reason about and focus on. I wanted to take a step back now, though, because we talked about 2014 and this big resilience incidence that caused the pivot. But then recently, I saw this thread about Black Friday, Cyber Monday, and just the sheer scale of what Shopify handled, seemingly without a hitch. So can we talk a little bit about Black Friday, Cyber Monday? What did you accomplish there? 

CAMILO: It was an interesting weekend. What I can tell you is this, like there was a lot of preparation that went into this. There are two basic things that we tried to figure out before Black Friday and Cyber Monday. And it is, is the system going to scale? And I don't mean going to be able to process the load. 

Like you have this situation when you need to scale twice as big as you were the last year or a significant amount larger, where the simple fact of growing bigger is going to break the system. So hey, it turns out like, by having more database connections, you run out of file distributors, and everything goes down, like that type of thing, right? 

So you don't want to wait too close to an event like this, which is essentially a natural phenomenon. Like Black Friday might as well be a tornado. You can stop it. Like, it's coming. 

There's nothing you can do but be unprepared. Two important kind of engineering task are, just scale the system without any load testing yet, just make it as big as can, slowly, and see what breaks. Probably remember very specific things that happened, but I know we started probably like July. And the first couple tests didn't go so great. 

I don't think they caused, like, actual visible outages for users, but we saw the system not necessarily responding as we wanted it to, right? Then the second is the only thing we care about, is once we are reasonably sure that we can actually, for one, work with our cloud partners to make sure we have enough computers and all this stuff, very, very important, and they are very helpful in that. 

OK, we have enough computers, whatever systems, whatever service we're using. The system actually grows without breaking, bursting at the seams. Now let's throw some artificial low testing into it to see if it's actually going to do what we expect it to do. 

We low test in production. We have a team that their only job is to build low-testing tools. And we, essentially, after, like the architectural test, which we call scaling the system for the sake of scale and see if it breaks with, like, actual low testing more and more and more aggressively as we get closer to Black Friday, right before Black Friday when we lock down the system. 

That's kind of like the engineering focus on scalability. There's a lot more things about Black Friday. There's a whole push from our colleagues in marketing, like there's sort of like, having lawyers ready in case something goes bad, having PR ready, because you want to prepare for failure in all possible axis, not only engineering. 

TAI: BSCM this year was pretty quiet. I guess I should say unsurprisingly quiet. 

CAMILO: Pleasantly. 

TAI: Pleasantly quiet, but there's always still this kind of anticipation around it, you know? Like, in the time I've been here, we, at least kind of 2019, we had this sort of war room almost in the office. 

And it sounded like that had been kind of a tradition. But I didn't really remember as needing it. And so I think we've been kind of getting better at this as time goes on. Like you said, compared to past years, we started our low testing a lot earlier and just tried to focus initially on pushing all those different dimensions of system limits, you know? 

Something is a throughput bottleneck, something is hitting a quota that needs to be increased, something needs to be scaled up because just the sheer number of client connections is bringing it down. And in order to run these tests, it's not like we just turn a dial. If anything, I think one of the lessons for me walking away from that is just how much it's not just a matter of, oh, just throw more computers at it. 

Like, first of all, we needed to know what our forecasts for BFCM were, right? To get any sort of representative test, we had to have a sense of how many computers we're going to add across a dozen or so projects. And then, as much as just throwing more servers at it is a nice thought, there can just be a autonomous system stress from the increased number of things that are talking to other things. 

Like, without even adding the extra traffic, just scaling any system to some level that you haven't, like, done before, you haven't validated before, maybe carries as much risk as the traffic that you're trying to scale in order to handle. Even our observability tools broke. There was a lot of unexpected things that broke. But it was good that we found them early. 

STEPHANIE: Yeah. You may have mentioned that it was quiet for you, fortunately, this year. But it definitely wasn't quiet from a customer perspective. I just want to rattle off some of the metrics that were referenced in the tweet thread that you had about BFCM this past year. 

But there were 30 terabytes per minute of egress, 43 petabytes per day, 11 million queries per second delivered, 1.8 billion commands to the storefront, 24 billion asynchronous tasks, 42 billion API calls. So when you say increased scale of connections and all these intricacies of the system working together, it's clear that it was delivered well to handle this amount of skill. 

CARTER: $6.3 billion dollars in global sales from Shopify merchants. And that came out to 3.1 million a minute at peak on that Friday. And so again, like Stephanie said, while it might have been quiet internally for, like, outages or things like that not happening and you guys took the steps a whole year in advance to make this happen, this was a huge, huge, huge accomplishment. 

CAMILO: We had between 40 and 50 Michigan stadiums, which is the largest stadium in the United States. Every minute of people buying stuff from Shopify. 

STEPHANIE: I think that means we're going to have to try to test it out. We've got to fill up these stadiums. We got to see. It's pretty mind-boggling, like it's hard for me to conceptualize it all. But just sheer number alone, it's really impressive. 

CARTER: So I want to ask a few questions here because it seems like this may be the epitome of online reliability to be able to handle these kind of loads at this scale this well. And so what does that look like? 

Is it like, you guys have 100% SLA, like we're going to make sure to get every request up? Or are there failures that maybe us end users don't see? 

CAMILO: With these kind of, like, numbers, even in the best, like most perfectly executed day, something somewhere is going to go wrong. So when we say that we went without a hitch, what I mean-- we mean to say is like the issues were very small, and the system was able to essentially recover itself in those problems, right? 

I'm sure like tens of machines failed that day because just the sheer size of it is going to make it happen. But like, the automatic failover just worked fine. So that means that probably like less than 1% of those queries actually failed while the failover happens because failovers can't be made to be 100% correct. 

But that last one, to 0.5% of correctness is like almost infinite, [INAUDIBLE] curve. So no failure is perfect. So we probably had an error rate of well under 1% due to just random noise in the machines. I don't think we ever tried to get 100% because the amount of effort to get there is unconventional. 

You will have to essentially make your system completely static, analyze every single line of code and every single interaction within the system. This is not practical. But within the bounds of what the users' experience is going to be, that's what we care about. So did 99.99% of our users get to sell what they need to sell for the ability and speed that they need it? Yes. 

CARTER: So then a question I have to follow up on this is, how do you balance shipping new features while still keeping this less than 1% failover rate? 

TAI: Honestly, a big one this time 'round was we had what we call enforced pacing, which is basically, we still let deployees go out kind of in the period leading up to Black Friday, Cyber Monday, but we made sure to limit those to kind of the average deploy rate. 

So we did have a code freeze for a period around VFCM, but what can sometimes happen with these code freezes is immediately before or immediately after, you have people shipping a ton of features, either that they're trying to rush out beforehand or that they're trying to kind of get out now that the freeze is gone. 

And so by using this sort of enforced pacing, because any change is risky. So we're able to limit the amount of risk to the baseline and then try and keep the sort of period where we were just leaving things kind of as they were and not touching them, unless there was an emergency. We were able to keep that period as short as possible. 

CARTER: And how does that look like? So say just an arbitrary number that's small, let's say three. We can only have three code changes a day or something like that. And after the code freeze or right before it, people wanted to do 10 or 20. How do you prioritize which features get allowed to be released or merged in? 

CAMILO: I think it was a first come, first serve [INAUDIBLE]. Always fix the broken. So if this is a bug fix of any kind or a well-understood, well-justified improvement of reliability or otherwise cause a problem, then that always goes. 

Like it's not always ordered. Like, we will not not fix something because we are in code freeze or enforced pacing. I think beyond that is mostly for the teams themselves to negotiate who goes first. Like, it kind of self-organizes that way. 

TAI: I didn't get a chance to see what it looked like to actually run into that sort of rate limit, but I imagine what happens is, so we use a merge cue for a lot of our projects. Probably the change just waits in queue until enough time has passed to kind of maintain the average pace, if that makes any sense. And like Camilo said, you can always bump something to the front if it's urgent. 

STEPHANIE: One thing that I also would love to touch on is the culture, which you mentioned at the beginning of the conversation. But how has the team culture changed to center around this idea of resiliency? 

CAMILO: The way you can see the cultural changes, the way people design new projects, and the way people talk about code in infrastructure when they are like, these are change requests happening, like you'll see the questions there. 

OK, what's going to happen with these x, y, or z break? Can you actually, essentially, revert this code when you have a data change? Like you said, they want more dangerous kind of things. 

What happens when the configuration change is separate from the code in this place? Like you start seeing those type of questions pop up more and more and more and more. And you start seeing the projects that they have designed care about that. 

Like, OK, well, these are dependencies we have, and this is how we are hedging around these dependencies going down. And like, this much we can tolerate, like go build the matrix that tells you like, we have these four dependencies, 10 dependencies, whatever, the important dependencies [INAUDIBLE]. 

This is going to be the great state when the cache is done. That's what we expect to happen. So you start people thinking in those terms as opposed to only a happy path and let it go. It becomes a part of the development and maintenance process to think of all these problems. 

TAI: I feel like we've had to lean a bit more into communications and education as well. We have kind of a standard set of activities that we asked most services or the most important services to execute ahead of Black Friday, Cyber Monday. Again, they could opt out if they had a good reason to, but it would point them to the information they needed. And then we would hold sessions on, OK, how do you run a game day of, what does an effective one look like? 

So there were resources available for people if they want to learn more or if they want to ask for help. Also, in the last couple of years, we have a resiliency team, which I think we've had in the past. I think we stood one up around 2014. And then for a while, we didn't necessarily have this sort of group that was providing our instant [INAUDIBLE] on call and maybe helping steward some of the tooling, like our ChatOps or whatever. But now that we do, there's sort of this source of expertise-- that plus kind of our resiliency community of this. 

I actually have a question for Camilo, if you two don't mind. 

CARTER: We'll love it. 

TAI: So over the last couple of years, like we've gone fully remote, like permanently remote. And we've had to keep growing, and I feel like that's probably made it harder to skill knowledge and context to developers. We're not all kind of having this team ritual of showing up to a dev talk or town hall now. Are there things about our sort of current way of working or the scale that we're operating at, things that are easier or harder or that we've had to kind of change how we try to promote culture or the sort of knowledge we want to see? 

CAMILO: My sense is that we've also gotten better at writing and, like, producing videos and stuff like that. There's more of a culture of like, it might not happen as it used to happen. You know, like let's go for lunch and talk about computers because sadly, as it happened, I enjoy that kind of thing. 

But what's happened more and more and more is I see more documenting of the culture right. Like, there's always been the presentation of, hey, that's go use the library, which means-- great, if you want that. But the library is going to be obsolete. 

And like, it's going to change. And I've seen a lot more documenting the principles-- hey, this is what we consider to be resilient and this is why we care and. This is how you should think about it if you are doing your job correctly. 

So in the internal kind of like engineering handbook, there's a lot more about that than there used to be. And I think people actually read it more because they have to because that's the only place they're going to find any knowledge anymore as opposed to hanging out with people in the office. But from my, like, naive an somewhat subjective point of view I think that has compensated enough. 

CARTER: I love that last question because, again, all of this amazing work happened in the middle of a pandemic. So that's so impressive. There's probably a lot more to learn, a lot more knowledge to share. So if people listening at home wanted to learn more about Shopify engineering, where should they go? 

CAMILO: We have a very active Twitter account, [INAUDIBLE] I think is what it is and the Shopify [INAUDIBLE] blog is also easy to find in some search engine, maybe Google. Yeah, I think those are the two main places to find more information. We tend to blog quite a bit about what we do and how we do it. And it's all clearly reflected on Twitter. 

TAI: Yeah, and you know, you've been referencing some tweets that we put out around BFCM. We put out some talking about our resiliency culture as well, out on Twitter. 

STEPHANIE: Yeah. OK, so before we wrap up, of course I want to ask, is there anything that we might have missed that you want to mention? 

TAI: Yeah, I feel like we've talked a bit about implementing resiliency as culture and somewhat as technical measures. I think it's important to recognize that it's not just a matter of the software that we're building to be resilient, but it has to be the system, the organization, the people, the hardware, the software, where they all kind of have some capacity, some reserve to handle the unexpected. 

You need to have a culture that is trying to learn from success and failure or setting up incident responders for success. One area where a process has changed a lot in the last year or two has been our incident retrospective process. We really tried to further emphasize learning and not just provide some guidance for facilitators, but actually for participants, talking about things like hindsight bias or blamelessness that hopefully keep discussion a bit more productive. 

There's this idea that we try to adapt our process to. I don't know we've really centered it in the education because it's a hard pill for people to swallow, but this idea that there is no root cause, there's no singular root cause, you know? And so like, what we really tried to emphasize with this stuff, with these topics is just avoiding oversimplification, avoiding blaming one thing, avoiding saying, oh, if only you had done x, things would have been different. 

So say, for example, someone says, you know, oh, I should have known, I shouldn't have done this, like, that isn't necessarily that useful because our succession never depend on a single person. So instead, we might try and ask questions about, was there anything that was confusing? Was there any information that you wish had been more visible, almost like a human factors type approach? And also, again, asking like, what went well? Like, what were some positive habits or things that we can identify? 

STEPHANIE: Yeah. I think that's something we talk about all the time at Google when it comes to security and SREs, really implementing a blameless culture and doing blameless postmortems. But again, it's easier said than done in practice. So I'm glad that you're already taking those steps to having that be so pervasive throughout the company. 

CAMILO: Also, for anyone listening, if this sounds interesting to you and you want to help us build resilient systems, we are currently hiring on the team. Shopify keeps growing all the time, and we always need talented people. You can all visit our careers page at shopify.com/careers. And if you have any questions for the team or the [INAUDIBLE], you can always reach out to me directly on Twitter at @camilolopez. 

CARTER: Thank you so much for your time. And I learned so much this conversation. 

CAMILO: Thank you for having us. 

TAI: Thank you. This has been great. 

CARTER: OK, that was a great episode. Stephanie, again, thank you so much for putting this together because, one, it was timely. And then two, I don't know if I've ever seen a company, at least a retail company, handle that kind of scale. That was mind-boggling. 

STEPHANIE: Yeah, it's funny because I have friends working at various e-commerce and retail businesses, and they've been talking about how they were going to hit record number customers and traffic on Black Friday and Cyber Monday of 2021. It was already beyond expectation in 2020, given that a lot of people have been kind of surprisingly moving to online to do even more shopping than expected. 

And so I knew that this episode was going to act as such a great example and North Star for other companies to follow. I really wanted to just peel back the layers and dig into what really needs to happen to support not just the technical side of it, but a culture of resilience. 

CARTER: Yeah, one of the surprising things was TAI was talking about how, before Black Friday came, teams were able to opt in to education sessions on how to do, like, a game planning. Did they call it a war plan? There was some kind of planning session that they were able to get training on different teams to know how to handle that kind of a load. I just think that's a good practice that more companies should implement. 

STEPHANIE: Yeah. And they were really open about what led to the steps that they needed to take to really emphasize resiliency. And I think there's, like, a quote out there that says, "The past is behind. Learn from it. The future is ahead, prepare for it." 

And that is exactly what they did. They learned from their mistakes or gaps back in 2014. And then leading up to Black Friday, Cyber Monday of this past year they took a year to do load testing and implemented things enforced pacing. So it's not something that just happens overnight. 

CARTER: 100%. And there was one other thing that really stood out to me. You know, I asked, well, being able to handle this kind of load, what type of SLA do you have? What kind of failure is allowable? What kind of tolerance do you have for that? 

The way he said, 100% success isn't possible, things are going to fail, and you want to try and minimize that. It becomes too cost inefficient to try and have 100% uptime on everything. And so then you start thinking about some of these patterns they have, where they have circuit breakers and all these other patterns in place and these constraints in place to handle the failure. This is a very interesting space. I want to learn more about that. 

STEPHANIE: Yeah, and something that we talk about at SRE at Google too, 100% SLA or even SLO, for that matter, is not realistic and shouldn't be advised because as Tai was saying, you need to have reservations for your teams to have ample room to be able to respond to events because they can and will happen. 

And so it's all about, what she was talking about, having context-based guidance for the teams to still be able to have the freedom to do their best work and ship features as frequently as they need to, but within the constraints to keep the overall system at health. 

CARTER: Wow. If you're listening at home, I'm sure you learned a lot from that. But before we get out of here, Stephanie, you're always doing something amazing, something interesting. What are you working on now? 

STEPHANIE: Well, if everyone listening today hasn't heard yet, there is a new podcast that I am working on called "Where the Internet Lives," and I am the host of season two. The first one was absolutely fantastic, detailing the lives and stories of the folks that run and operate our data centers. 

And this season, we're going into some really, really touching stories of challenge and triumph and what people had to go through to get to where they are today at a data center. It's a lot more unexpected than you think. 

CARTER: Yeah, I actually really want to listen to that-- one, just because you're an amazing person on a podcast, but two, these seem like some very compelling stories. 

STEPHANIE: They are. Yeah, it's fantastic because I've gotten to feel really inspired by the people that work beside us, kind of, in a data center, where the internet lives, so check it out. 

CARTER: Yes, and in my world, there's a show I was working on that I'm actually really proud of. It's called "VM End to End." And it's a show where I basically take my skeptical self, and I go and ask questions of people who know more about VMs and why they matter, why they're useful. 

Season two of that show is coming out, and it's, I think, the best work I've done. We're bringing on guests that are very knowledgeable. We're bringing on the person that broke the pie world record for a number of digits computed, using cloud computing and some SREs from Google and a lot more. So if you're into VM, skepticism, or very good conversations, you're going to want to check out that show. 

STEPHANIE: I agree. I think it's some of your best work, and I love the series. And you got some awesome folks on, besides yourself-- Brian, Dorsey, Emma, our teammates here who have literally shattered records. So check it out, everyone. 

CARTER: Yes. Well, that's all for us. Again, happy new year. This is our first time saying it. If you're listening at home, happy new years to you too. It's a little late, but we can tell you [INAUDIBLE] again. Thank you for listening. We'll see you all next week. 

STEPHANIE: Bye, everyone. 

[MUSIC PLAYING]