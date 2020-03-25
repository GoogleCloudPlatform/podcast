+++
audioDuration = "00:26:06"
audioFile = "Google.Cloud.Platform.Podcast.Episode.211.mp3"
audioSize = 37596611
categories = ["Digital Services"]
date = "2020-03-11"
description = "Priyanka Vergadia joins Mark Mirchandani today to talk shop with Travis DePuy about all things digital services."
draft = false
episodeNumber = 211
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Digital Services with xMatters"
image="/post/episode-211-digital-services-with-xmatters/images/hero/hero-EP-211.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/fgzega/episode_211_digital_services_with_xmatters/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Priyanka Vergadia](https://twitter.com/pvergadia) joins [Mark Mirchandani](https://twitter.com/markmirch) today to talk shop with [Travis DePuy](https://twitter.com/xM_Tinkerer) about all things digital services. Travis is a product evangelist for xMatters, a company that provides digital services for clients in a way that makes it easy for them to "limit the blast radius" as they build and use their projects. At xMatters, customers can build an incident management workflow for their custom services and integrate the tools of their choice. Travis talks about service degradation and how xMatters helps clients optimize and manage their services to control instances of degradation. With programs like Google Stackdriver, xMatters can set limits and get alerts when thresholds are met, then use that information to fix performance.

Later in the show, Travis talks about moving a large enterprise like xMatters to the cloud.

<!--more-->

##### Travis DePuy

[Travis DePuy](https://twitter.com/xM_Tinkerer) is a Tinkerer of Things, Master of Hats and Father of Kitties. He is currently Head Product Evangelist at xMatters where he gets to talk to people about how they are doing Incident Management, DevOps notifications and anything else involving humans, processes and tools. Travis balances the stationary computer work with the fluid moving of Chen Taichi and is often found in the sun flowing the forms of the old ways. 


##### Cool things of the week

* Join us for Google Cloud Next '20: Digital Connect [blog](https://cloud.google.com/blog/topics/google-cloud-next/join-us-for-google-cloud-next20-digital-connect)
* Connecting businesses and educators with advanced Hangouts Meet capabilities [blog](https://cloud.google.com/blog/products/g-suite/helping-businesses-and-schools-stay-connected-in-response-to-coronavirus)

##### Interview

* xMatters [site](https://xmatters.com)
* Site Reliability Engineering Book [site](https://landing.google.com/sre/books/)
* Stackdriver [site](https://cloud.google.com/products/operations)
* Migrating a monolith to GKE - Customer Story (Get Cooking in Cloud) [video](https://www.youtube.com/watch?v=d8RDgk9Ltw0&list=PLIivdWyY5sqIOyeovvRapCjXCZykZMLAe&index=22)

##### Question of the week

How can I improve reliability/availability with the least amount of work?

* Codelabs [site](https://codelabs.developers.google.com/codelabs/cloud-monolith-to-microservices-gke/index.html)
* Migrating a monolithic application to microservices on Google Kubernetes Engine [article](https://cloud.google.com/solutions/migrating-a-monolithic-app-to-microservices-gke)
* Migrating a Monolith to Google Kubernetes Engine — An Overview [blog](https://medium.com/google-cloud/migrating-a-monolith-to-google-kubernetes-engine-an-overview-785f2cbe5c62)
     
##### Where can you find us next?

You can find Priyanka online in her video series [Get Cooking in Cloud](https://www.youtube.com/playlist?list=PLIivdWyY5sqKwVLe4BLJ-vlh9r9zCdOse) and her series on [Pub/Sub](https://www.youtube.com/playlist?list=PLIivdWyY5sqIOyeovvRapCjXCZykZMLAe).

You can see Mark in recently released [Stack Chat](https://www.youtube.com/playlist?list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl) videos.

{{< transcript "[MUSIC PLAYING] MARK: Hello, everyone. And welcome to Episode 211 of the weekly Google Cloud Platform Podcast. I'm Mark. And I'm here with my colleague, Priyanka. Hey, Priyanka. How are you doing?" >}} 

PRIYANKA: Hi, Mark. How are you? 

MARK: I'm doing great. It's been such a long time since we've had you on the podcast. 

PRIYANKA: Exactly. And I've been wanting to be on the podcast for quite some time now. We did one last year towards the end of the year. It's been way too long. So yeah, I've been missing you. 

MARK: Yeah. I know you've been stupid busy. 

PRIYANKA: Yeah. You might have seen all the radio stuff that I've been doing. 

MARK: Yeah, there's tons and tons of videos with you on them. So that's super exciting. But we're extremely excited to have you back on the podcast. And you also brought a great guest with you today, too. Right? 

PRIYANKA: I'm really super excited to welcome our guest today and talk to him about incident management. He's from X Matters, Travis Depew, one of the amazing product evangelists from the team. So yeah, I'm super excited to get him to speak with us. 

MARK: I'm sure that'll be a blast. And after that, I'm going to ask you a little bit more about splitting up a monolith into microservices. You know, last week, we had a question that talked about a different form of migration. So it's always good to see the many, many different paths. So we'll definitely get into that later. 

But first, why don't we talk about our cool things of the week? 

[MUSIC PLAYING] 

PRIYANKA: Oh, you know, I have one. If you haven't heard about what Google Cloud Next is, this is an event where, every year, we bring all of our users and customers to learn more about all of our Google Cloud products. So this year, due to all the health concerns, we've decided to make the event digital and virtual. 

But that's exciting because it's now free to everybody. And more and more people can watch what we have to show about Google Cloud and, at the same time, learn from them virtually about some of their use cases. So I'm super excited to have that event happen virtually. What about you, Mark? Do you have anything else for Cool Things of the Week? 

MARK: Yeah. Absolutely. I mean, in the same vein, you know the current health conditions are putting a lot of strain on workforces. So you know Google also, a couple of days ago, announced that they were going to make Hangouts Meet, which is the platform that allows you to do video chatting and allows you to download and save and record meetings. 

They're actually going to make that free for everyone using G Suite. So normally it's an enterprise feature. But bringing that to all the G Suite and G Suite for Education people really makes it a lot easier to enable that online and promote workflow that I think a lot of people are adapting to right now. Right? 

We've seen Next being a great example of something that said, well, we don't want to have people travel. So why don't we transform this? And hopefully Hangouts Meet can help people kind of get adopted to that style, as well. So definitely check out the links if you want to see more information on those. Definitely very exciting. It's going to be a very busy time for a lot of companies. So hopefully these are some cool announcements. 

And yeah. I mean, being able to invite everyone to Next for free? That's amazing. 

PRIYANKA: Yeah. Just being able to participate in all the cool things that everybody has to offer is amazing. So yeah. It's very interesting times but also fun times. 

MARK: Well, we're definitely looking forward to seeing people come out to Next-- well, not actually see people there but get to interact with them on a virtual platform and have them experience all the coolness that does happen at Next. 

PRIYANKA: Yeah. Very, very exciting. 

MARK: Awesome. Well, why don't we go ahead and chat with Travis a little bit more about digital services and X Matters? 

[MUSIC PLAYING] 

PRIYANKA: Hi, Travis. Thank you for joining us today. Why don't we start with who you are and what you do? 

TRAVIS: Hey, Priyanka. So I'm the Head Product Evangelist at X Matters. It's actually a really pretty cool job. Aside from just doing blog posts, podcasts, presentations, and such, I get to talk to customers about their assorted use cases and then take that to product management and engineering. And then vice versa, I talk to engineers and product management and then talk to customers about what we talked about. So it's a great position to be in. 

MARK: So I think it's a role that we're all pretty familiar with, especially being developer advocates. You wear a lot of hats, you do a lot of different things. But I think naturally the question that's going to come up is, what is X Matters? And what does the company do? 

TRAVIS: So X Matters, we like to say that we minimize the blast radius. We deal with a lot of services teams running services and we help them figure out who's on call. We have the on call information. We send out notifications. But then the really key thing is that we provide response options so that they can then follow up and execute some workflow based on the information that they're getting. 

MARK: So Travis, you mentioned kind of limiting the blast radius being a big part of what X Matters does. And of course, in today's world when people are deploying more and more services to the Cloud, it just becomes increasingly complicated. And the blast radius can, unfortunately for very small items, get really, really big. 

So I'd love to hear a little bit more of elaboration on what the landscape of digital services look like. How do you actually build them? What does it look like for teams? And then ultimately how that ties back into X Matters? 

TRAVIS: We're a little bit agnostic. You know, everybody kind of does their own kind of thing. There are certainly some standards in terms of OK, you should probably do these things. You should not do those things. We work across so many different industries that they all kind of do different things. 

The health care people are tend to be a little more risk averse whereas then you've got these smaller teams where we just need to push new product. We need to get new features in. And they are pushing as hard and as fast as they possibly can. But ultimately, you know, everybody has to be aware of, hey, stuff broke. So let's make sure that we have processes in place for when that happens. And then ultimately, some kind of safety net. So it's like, OK, we can run as fast as we possibly can. But then be aware that, if something breaks, we have the necessary processes in place to get people involved. 

As much as we like to say that AI can fix everything, it can't quite do that yet. We ultimately need to have people kind of in that mix somewhere. So waking them up at 2:00 in the morning or working with teams across different geographies is going to be pretty critical. 

We ran this survey a little while ago and found that about half of the development teams spend more than 50% of their time manually addressing incidents. This metric fits pretty well with what Google writes about in the SRE book, that you have to balance the time between future velocity and dealing with incidents. And if one gets too much over the other, then you might have some issues somewhere. 

PRIYANKA: So you talked a little bit about how services are different across different customer bases and across different fields. And you gave an example of health care. Can you drill a little bit deeper into how this monitoring might differ for different services? What types of end results are expected by the teams as you deal with different services? 

TRAVIS: So we're getting to kind of a point that service degradation is now as much of a four letter word as downtime is, where a lot of times you're not actually down. The service might still be up. But certain components might be running slower or not as well. And it's ultimately affecting the entire system. But technically, you're still up. Right? 

The SRE book actually has another example. Google as a service runs globally. So they never really are down. Right? You guys are never really down. But there might be degradations in some places. And you know, this happens for global organizations. But you can also have some corollaries, I think, to the smaller dev teams. 

But I think we've been around for kind of a long time. And it's been interesting to see this progression of analyzing digital services. So previously, it was kind of, is it up or is it down? OK. Yeah. It is. Great. All right. We're good. OK. 

But now we're moving into more of like, OK. Which parts of the service are available? That's kind of more in the degradation side. But then ultimately, there is definitely a movement now more towards customer experience. What is their actual experience? Which parts of the customer experience are being impacted? Is this particular issue isolated to just these particular customers or clients? Or is it more global? 

MARK: And a big part of the SRE book and the principles that our book is based on really follow understanding where the impact is. Even so much as an error budget, which is something I learned not too long ago as this idea that-- look. You're going to have degradation in services. It's going to be something that definitely will happen. How do we allocate for that? How do we know ahead of time where our kind of planning is? And then, how do we make sure that customers who are using our service are aware of what those limits are? 

PRIYANKA: So it's more around the lines of, what's my threshold for a specific service and how much degradation would I tolerate for maybe something internal versus an external customer-facing service? My logs, are they down for a certain time? And can they tolerate that type of threshold? Versus a customer-facing log can probably not tolerate any downtime and those types of things is what we're talking about. Yeah, that makes sense. 

TRAVIS: I'm actually putting together, I think it'll be a fun talk. It's called "Embracing Risk-- Icarus Inc. And the Three Bears." It talks about how Icarus Inc. makes jet packs. Then the three bears are SRE engineers, SR engineers, at Icarus Inc. And then they have different services. 

So one of them is like the weather service, they have to monitor the weather. Then there's another one that has to do with the onboard jet pack systems. And so you have these two different services that are part of the same company. But they have very, very different risk profiles. You want that jet pack, you want that thing to be very, very reliable. You don't want to fall out of the sky. 

I try and get a joke in there about somebody going over the moon or getting too far away or getting lost in space or something. 

And then you've get the weather service. OK, if there is a degradation or an issue with that service, people aren't going to fall out of the sky. They might get wrapped up in a tornado. And that's an impact. Or they get rained on. But it's not a big deal. 

MARK: Right. I mean, I think the Icarus title of the company will kind of give credence to what you're talking about. But it does create a very good scenario to show other companies. 

Because you even mentioned Google earlier. Yeah, Google is a global company. And it's not just one service or two services. But it's millions of services that all have different tolerances-- how much they can fail, what the degradation is like, or if they do really need to be up 100% of the time. 

TRAVIS: Yes. 

MARK: So, for those services that have different tolerances, how do you actually set up monitoring for these services, especially when the architecture has become more and more complicated? 

TRAVIS: I hate to say it. It kind of depends. Just to be that kind of generic answer. But you know, I think it's kind of you take a stab and you start with something. Then you kind of tweak it. Ultimately, trying to get that 100% metric is not achievable. But you certainly want to try and get higher and then tweak it from there. It's definitely an ongoing process of learning and reapplying the lessons learned from issues that happened. 

So maybe sometimes you have a new product launch that you really want to get out? So you might want to lower that threshold a little bit so that you relax those bandwidth a little bit to allow you a little bit more future velocity. Then that product starts to get more stable. And then you ratchet them back up and start to make sure it's more available. 

PRIYANKA: So, for those purposes of monitoring, do you use tools like Stack Driver, Cloud Logging, Cloud Monitoring? And do you take data from that and apply more monitoring tools on top of it? How does that work? I'm curious to understand that. 

TRAVIS: There are a lot of different aspects to monitoring. It's talked about a lot. But White Box and Black Box monitoring. It's like Stackdriver, you mentioned, gives that really good kind of introspection into the service. I call it an X-ray into the service and how it's doing. But other tools-- 

I think Stackdriver does this, also-- call me out if this is incorrect-- where it would do a Black Box from the outside. What does the customer experience look like? So being able to actually simulate a log-in to the service, poke around, click some buttons, see what happens, and then measure the sort of latency or the amount of time it takes to do those actions. And then alerting when those get beyond a certain threshold. 

MARK: Right. I mean, at the end of the day, there's all this monitoring you can set up. And you can try and be as aware of what's going to happen before it happens. But as you just mentioned, when it does happen, you do need to have a plan in place. So what does that plan for an incident response look like? 

TRAVIS: I think the biggest thing you have to think about is that notifications are not the end of the issue. You know, a lot of alerting applications fire off the notification. They deliver it to you. Like, OK. Good luck. Have fun with that. You're like, OK, but wait. I've got stuff that I have to do. 

Let's just take the extreme end of the spectrum. And you're like, this is a major incident. 90% of our servers are down and we're totally screwed. So there is a process that has to happen after that. OK. If you get a ticket, then you open a Slack Channel, maybe do some other processes to facilitate that severity one process. 

MARK: Yeah. I mean, like you said, getting a notification lets people know that there is an action to take. And whether you use Slack or any other tool, you'll have that information. But then people actually need to start working on resolving whatever the issue is. What does that look like for different teams? 

TRAVIS: Again, it's going to depend on the size of the organization and how much relationship or reliance or dependencies they have on other teams. So maybe the entire organization is one small dev team of five people. OK. That's going to be very different. Maybe some informal processes, maybe they are still just trying to work out what the process is. 

But then you scale that up to a larger enterprise-type organizations. And now, not only do they have to be aware of their own services, but then they might have to pull in somebody from more of a DBA or database kind of resource. But at the same time, they want to make sure Support is informed or aware of the issue. 

Maybe they've got a Customer Success Team. OK, let's get those guys aware so then they can do some proactive-- maybe there are some deals going on. There may be some clients that might be sensitive. So they have that kind of specific knowledge about their clients. They might be able to kind of white glove them a little bit more. 

But ultimately, all these teams are using different tools. So having something that allows you to very quickly start a process but involve all these different teams and all the different tools can really cut down on that oil. All the things that are very important to do but they don't really move the needle forward in terms of getting the incident resolved. 

PRIYANKA: Travis, I really loved that you walked us through X Matters and what it is in general. And then, from there, you took us through the journey of how digital services have evolved over time as Cloud has come about, and then how the evolution has taken us from not just understanding what these services have to deal with today and how our teams have to deal when these services go down. So from monitoring to alerting people to creating incidents and different tools and letting people know about them so that they can start working on them to resolve those things. All of that is great. 

I think, at this point, I want to switch gears a little bit. Because we also learned that X Matters did a huge migration into Google Cloud. So I wanted to see if you could walk us a little bit in your journey. And this migration was also from a monolithic architecture to microservices. So a pretty big undertaking it would have been on your part. So we want to hear a little bit about that. I think that would be really interesting to understand and understand the journey. 

TRAVIS: Yes. So we've actually been in business for about 20 years. We were back in the day of shipping CDs and PDF documentation. And then as the industry evolved, it was like, OK, we need to make this a Cloud service. Of course, that's what we built. So let's take that and stuff it into our own data centers. Let's start renting some space in the data centers. 

Then, we had the traditional monolith. Just one massive thing that had a database back end. And pretty much before we knew it, we had over 1,000 servers, VMs running in our data center. 

So instrumenting this, the spin up time was working through days. Lots of manual touches when we had a new client coming on. They were very siloed and segregated. There was so much duplication of resources. Then it was a process of, OK, pulling those things apart into their assorted microservices. 

And then the calculus kind of shifted. And it's like, OK, we've gotten the microservices pieced apart a little bit. But really, are we going to be able to run our own VM infrastructure, for example? Are we going to be able to secure our underlying containers as well as Google could do it? 

And then, we started doing those calculations. And it was like, well, this isn't going to work out. So we made the move to Google Cloud and really haven't looked back. It's definitely been one of the best things we could've done. We're now in less than an hour, mostly automated process of spinning up new environments. 

So we've come such a long ways in that migration. And now our future velocity at this point is pretty maxed out. Yeah. We're in a great spot. 

MARK: Yeah. I think one of the natural questions that comes up, especially since we've been talking about deploying large numbers of services, is X Matters the kind of comedy that eats its own dog food, as it were? Which is, for people who aren't familiar with that, meaning that you're kind of using the same technology that you're building. 

And since X Matters is built to help people respond to incidents and you have a bunch of services that might have incidents, how does that look? 

TRAVIS: Yeah. We had a sales guy who wasn't really a fan of the dog food scenario. So he called it drinking our own champagne, which I thought was funny. But we definitely do. We have an incident management team. And they work very closely with the engineering teams. It's been interesting to see that evolve. 

It's also opened up a whole new channel of communication between the teams running the services and then the teams building the services. So there have been several issues that we found that the services teams were like, hey, we need to get this information or we need to tweak this in our alerts. So then, there was a target project management. And project management said, OK, let's build that into the system. And our customers have gained from that kind of interaction. 

But with that said, being highly redundant-- you know, you talk about uptime, downtime, and then just degradation? Using Google just makes that so much of a no-brainer that we can be in several different regions across the globe. And if one region is having an issue, we can immediately failover to another region without any impact to customers. 

MARK: Yeah. I mean it's very much a very two-sided story, as we've been talking about here. There's everything you need to do to prepare yourself to be redundant, to have monitoring set up, to know where all your services are, and to be prepared in case there is a degradation. And the entire other half of that is actually dealing with them. 

TRAVIS: Yeah. 

PRIYANKA: Yeah. So it's along the lines of, what we usually explain to our customers that you define-- and this is pretty much the principle on which Google has built all of our services, as well-- is that we always start with the idea that all of these services are going to break. And that is the whole SRE principle. Right? You design with the idea that things are going to break. And you just define your solutions around that. 

MARK: So for people who are looking to maybe see a little bit more of X Matters and try it out for themselves, what does that journey look like for them? 

TRAVIS: We've got two user journeys. We've got a Free Tier. So you get all the cool integration toys that we have to build out the workflows that we talked about. And that gets you push notifications and emails. And then we also have a trial environment that gives you the full suite for a certain amount of time. Then it's just a per user license base. So after about 10 or 15 users, then it becomes $1 per, just a subscription model. 

But like I said, we have a Free Tier. So check it out. If you have an alerting platform that's not up to your needs, then come check us out. 

MARK: Awesome. Thanks so much for joining us, Travis. 

TRAVIS: Thanks for having me on. 

MARK: Thank you so much to Travis for coming in. That was a really interesting talk on digital services. And I think a lot of the coolness of that comes out of the SRE philosophy that he mentioned a couple of times and obviously Google is pretty well known for. But it does talk a lot about how do you handle incidents when they come up, what does that actually look like for your team, and how do you plan for that. 

PRIYANKA: Yeah, exactly. I really enjoyed our conversation with Travis. I've actually had the opportunity to speak with him a little bit earlier in the last year where we were talking explicitly about migrations. Because they had gone through their migration. He talked about that. 

And I was super impressed by the story and the journey of migrating their monolith into microservices. So I thought it would be amazing to just talk about the product itself and what they do using the Google Cloud Platform. 

Yeah. I thought it was an amazing conversation about incident management. We got to learn a lot. 

MARK: Yeah. And I think that we can probably put a link to the video you recorded with him down in the show notes. Right? 

PRIYANKA: Yeah. Absolutely. 

MARK: Awesome. So we'll make sure that's down there. But, speaking of migration, I think it's time for our question of the week. 

[MUSIC PLAYING] 

So last week, I asked Brian about, how do I-- being the lazy person that I am-- do a very, very easy way of migrating a service to a virtual machine? But as we know, that doesn't really take advantage of the Cloud. You're kind of just moving a virtual machine from, I meant to say, an on-prem server to a Cloud server. 

What if we want to take the next step? How do we kind of convert potentially a monolithic application into microservices? 

PRIYANKA: I go a lot into it in the recent blog that I will share the link to. But in short, what we want to do from the migration perspective is keep things simple. So select the low hanging fruits but still a representative of something that all of your apps can benefit from. So don't just select some very simple application that you migrate. But select something that represents your other applications as well as the learnings that you apply from that first application or a feature that can be applied to the other teams and the other applications and features that you might plan on migrating. So that's the first part. 

The second part is, once you have identified one of the applications or a feature, then start building the microservice for that specific feature. Now you are going to find that there are going to be dependencies in that environment because one feature is going to depend on some other databases, some other features, the other parts of the monolith. So keep those dependencies in mind. So that's kind of like the second step. 

And then once you have identified those dependencies, figure out that this particular piece-- for example, my shopping cart feature of the entire e-commerce app-- makes sense to start the initial migration with. And once you have that, then you start building that migration service into, say, Google Cloud and GKE. Maybe you want to do this in Cloud Run in a serverless fashion. 

So whatever you decide to do, pick your platform of choice for that matter, and then which is to deploy. So once you've deployed it, now the fourth step is to optimize it for Cloud and further for Cloud. Because it's not always going to be that, once you have the service migrated, you're done. Right? You're going to have to optimize in general. 

For Cloud, there are other options you might have talked about when you talked to Brian to just lift and shift, which are much easier options. But if you wanted to take advantage of Cloud in the best way possible, then you have to improve and move. Right? 

So yeah. That's just my few cents on how you can get started. I have a Codelab on this that we'll link in the description for the episode here and then also a blog that goes into much more detail about how do you create inventory and how do you decide which app to migrate first. 

MARK: Yeah. That makes a lot of sense. And I really like what you said about taking full advantage of the Cloud requiring a bit more work. I incorrectly, I think, said earlier that moving a VM to the Cloud doesn't take advantage of the Cloud. And actually it does. Because you might get better performance, you might get better control and visibility. But you can't really take full advantage of some of the distributed and serverless systems without sometimes putting in more work. 

And I think a great example of that is breaking up a monolithic application into a bunch of microservices that you can then independently tune and scale. So it sounds like the Codelab is a great place for people to try that out and see what it looks like. 

PRIYANKA: Exactly. Yeah. We'll link all the resources in there. And let us know what you think. 

MARK: Awesome. Well, before we wrap up, Priyanka, are there any cool things that you're working on? I know there are because I've seen you do so many things. 

PRIYANKA: Well, there are a few more "Get Cooking in Cloud" episodes that are coming out on a weekly basis. And then, there are some videos on Pub/Sub as well, in the "Pub/Sub Made Easy" series. So yeah, I'm just busy working on those two at this time. 

MARK: Yeah. I mean, it's a lot. And I don't know if anyone's had a chance to check out the "Get Cooking in Cloud" series. But it does do a great job of breaking down some very large scale solutions into a bunch of bite-sized videos that make it a lot easier to understand how you should be doing things, why you should be doing things, and then give you some best practices and tips to execute them. 

PRIYANKA: Yeah. And don't forget the fun about cooking and food in there. So-- 

[LAUGHTER] 

MARK: Well, that just makes me hungry every time I watch it, though. That's the problem. 

PRIYANKA: And Mark, what about you? 

MARK: Well, I am also working on some cool videos. By the time this gets out, my latest "Customer Conversations in Stack Chat" will be on the Google Cloud YouTube channel. So, always excited to go out there and talk to partners and customers about how they're building different architecture. And I think in this one, we're talking about Smart Cities, which is a really interesting concept. I highly recommend checking that out. 

But otherwise, just working on more and more videos. 

PRIYANKA: I really love your Stack Chat series. Customer use cases, the things that are actually being implemented in real life, are highlighted in there. And I really love checking those out. So thank you for putting those together. 

MARK: Thank you for that. And also I think it is, like you said, really great to see all the sides, whether it's coming from, how do I do these small example applications? How do I see these other customers using it? You need all of those to build a good idea of what's going on in the Cloud. 

And I think hopefully they give people inspiration for how to actually do their own-- whether it's migrations, solutions building, or anything else they're doing in the Cloud. 

PRIYANKA: Super nice. And it's also very small size. So it's like I want to get this information in five minutes or so. And it's always spot on. So yeah. Thanks. 

MARK: Absolutely. Well, speaking of short time spans, I think we're just about out of time. So thank you to all of our listeners for tuning in. And we'll see you all next week. 

[MUSIC PLAYING]