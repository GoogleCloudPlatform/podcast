+++
audioDuration = "00:47:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.264.mp3"
audioSize = 68445118
categories = ["Site Reliability Engineering", "Reliability"]
date = "2021-06-23"
description = "Our old pal Mark Mirchandani is back this week, joining Stephanie Wong and our guests Steve McGhee and Yuri Grinshteyn to talk about SRE III."
draft = false
episodeNumber = 264
hosts = ["Stephanie Wong", "Mark Mirchandani"]
title = "SRE III with Steve McGhee and Yuri Grinshteyn"
image="/post/episode-264-sre-iii-with-steve-mcghee-and-yuri-grinshteyn/images/hero/hero-EP-264.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/o6h1zb/episode_264_sre_iii_with_steve_mcghee_and_yuri/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Our old pal [Mark Mirchandani](https://twitter.com/markmirch) is back this week, joining [Stephanie Wong](https://twitter.com/stephr_wong) and our guests [Steve McGhee](https://twitter.com/stevemcghee) and [Yuri Grinshteyn](https://twitter.com/YuriGrinshteyn)  to talk about Site Reliability Engineering. SRE is Google's way of helping companies of all sizes create consistent, predictable, and functional projects. It helps clients approach operations from a software engineering stand point so that growing systems can be managed efficiently.

We talk about the challenges of implementing best SRE practices and how companies can overcome these. Though the benefits of SRE are many, it can be difficult for clients to grasp. Steve and Yuri tell us the process they go through with customers to help them set realistic goals and work to make reliable, scalable projects with little downtime. By starting small and taking wins early, Steve says clients reap the rewards of SRE and are encouraged to push forward. Yuri's customer-centric approach encourages companies to prioritize alerts that affect the user experience, thus limiting inbox mayhem and keeping customers happy. Alerts based on symptoms, Steve says, help accomplish this goal.

Later, Yuri and Steve describe the best ways for companies to get started with SRE. Realistic goals and specific detailed plans can make the journey less bumpy for clients, and Google's SRE team can help.

##### Steve McGhee

[Steve](https://twitter.com/stevemcghee) was an SRE at Google for about 10 years, then left to help a company build reliable systems on the Cloud.  Now he's back at Google, helping more companies do that.

##### Yuri Grinshteyn

[Yuri](https://twitter.com/YuriGrinshteyn) works with Google Cloud Platform customers to help them design, architect, build, and operate reliable applications and services. He also advocates for SRE principles and practices on YouTube and elsewhere.

##### Cool things of the week

* Fresh updates: Google Cloud 2021 Summits [blog](https://cloud.google.com/blog/topics/events/news-updates-on-the-google-cloud-summit-digital-event-series-2021)
* Why you need to explain machine learning models [blog](https://cloud.google.com/blog/products/ai-machine-learning/why-you-need-to-explain-machine-learning-models)
     * GCP Podcast Episode 260: Responsible AI with Craig Wiley and Tracy Frey [podcast](https://www.gcppodcast.com/post/episode-260-responsible-ai-with-craig-wiley-and-tracy-frey/)
     * GCP Podcast Episode 249: ML Lifecycle with Dale Markowitz and Craig Wiley [podcast](https://www.gcppodcast.com/post/episode-249-ml-lifecycle-with-dale-markowitz-and-craig-wiley/)
     * GCP Podcast Episode 214: AI in Healthcare with Dale Markowitz [podcast](https://www.gcppodcast.com/post/episode-214-ai-in-healthcare-with-dale-markowitz/)

##### Interview

* Site Reliability Engineering [site](https://sre.google)
* Reliability Architecture Framework [site](https://cloud.google.com/architecture/framework/reliability)
* Site Reliability Engineering: Measuring and Managing Reliability on Coursera [site](https://www.coursera.org/programs/google-specialization?collectionId=&currentTab=CATALOG&productId=zMg9YpBtEeiWbhI9enrBdA&productType=course&showMiniModal=true)
* Developing a Google SRE Culture on Coursera [site](https://www.coursera.org/programs/google-specialization?collectionId=&currentTab=CATALOG&productId=JXTF3ajdEeq3YxIGYItKdQ&productType=course&showMiniModal=true) 
* How Lowe’s meets customer demand with Google SRE practices [blog](https://cloud.google.com/blog/products/devops-sre/how-lowes-leverages-google-sre-practices)
* GCP Podcast Episode 68: The Home Depot with William Bonnell [podcast](https://www.gcppodcast.com/post/episode-68-the-home-depot-with-william-bonnell/)
* GCP Podcast Episode 213: The Art of SLOs with Alex Bramley [podcast](https://www.gcppodcast.com/post/episode-213-the-art-of-slos-with-alex-bramley/)
* GCP Podcast Episode 127: SRE vs Devops with Liz Fong-Jones and Seth Vargo [podcast](https://www.gcppodcast.com/post/episode-127-sre-vs-devops-with-liz-fong-jones-and-seth-vargo/)
* GCP Podcast Episode 72: Customer Reliability Engineering with Luke Stone [podcast](https://www.gcppodcast.com/post/episode-72-customer-reliability-engineering-with-luke-stone/)
* GCP Podcast Episode 38: Site Reliability Engineering with Paul Newson [podcast](https://www.gcppodcast.com/post/episode-38-site-reliability-engineering-with-paul-newson/)
* GCP Podcast Episode 59: SRE II with Paul Newson [podcast](https://www.gcppodcast.com/post/episode-59-sre-ii-with-paul-newson/)


##### What's something cool you're working on?

Yuri has been working on [Engineering for Reliability](https://www.youtube.com/watch?v=U53wC2A75Is).

Stephanie has been working on her new series [What’s New in Networking](https://www.youtube.com/watch?v=lyLMyQ7vJUI&list=PLIivdWyY5sqK_yw5KHsGVYd--ZCIoUwEM&index=2).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, what's up, everyone, and welcome to episode number 264 of the weekly Google Cloud Platform Podcast. Well, it's supposed to be weekly, but we took a little bit of a break last week, but I am back. This is Stephanie Wong, and I'm here with Mark Mirchandani." >}} 

MARK: I am a huge fan of taking a break. I will always, always go for the break. It's so nice to have. 

STEPHANIE: Everyone needs a break, even podcasts sometimes. Right? 

MARK: Exactly, and for those of you out there who have the opportunity, take a break. You know? It's this time-- it's very busy right now, I feel like, and obviously, there's always a lot going on, and there's no shortage of things happening in the world. So it's so important to take a little bit of time. If you can, absolutely do. 

STEPHANIE: Hopefully, this humanizes our podcast, and we just want to send the message to everyone else that taking breaks is totally fine. 

MARK: It humanizes our podcast in a way that counteracts it when we say we're humanizing our podcast. 

STEPHANIE: It'd be better if I said that in a robotic voice. So we're back this week, excited more than ever, because we are talking about SRE which has been a little bit of a popular topic on the podcast. But today, we have Steve and Yuri on who have worked tremendously with customers and in various capacities, different sized companies doing this. So we're going to learn a lot from them. 

MARK: Yeah. It's a super exciting conversation. There's a ton of great stuff there, and like you said, Steph, we have a couple of different episodes-- we'll put the links in the description-- where we've talked about this conversation, but there's so many different facets to talk about it in. There's practical tips. There's strategic tips. There's tactical levels. 

We get into some of that in this conversation, and it's just a great reference point. But I do highly recommend checking this episode out and, if you like it, checking out those other ones. Because we do get to look at different angles and get to hear from other folks who have definitely spent a lot of time with services or with customers and get to bring some of their expertise to the conversation, and I absolutely love it. 

STEPHANIE: Yeah. It's a rapidly changing field, and things are happening every day around it. So I'm glad that we can keep bringing those learnings out to you all. But if you're interested in learning about the art of SLOs or DevOps versus SRE, then check out the past episodes. We'll include the links in the show notes, but for now, let's go ahead and jump into a couple of the cool things of the week. 

[MUSIC PLAYING] 

All right. So my cool thing of the week is about some of our summits that have been happening since last month. We have a ton coming up still. So I just wanted to give a shout out for some of those, in case you have missed them. Just happened yesterday, actually, is the Digital Manufacturer Summit. So if you're interested in that space and wanting to learn about what Google Cloud is doing, hear from business executives, product development, manufacturing operations, supply chain operations, you're going to hear a ton about AI acceleration, how we're approaching that for manufacturing. 

We also have a technical series for APAC. That's also happening this week. A Security Summit, July 20, Retail and Consumer Goods Summit on July 27, and then if you missed any of the really amazing summits that we had last month, like the Data Cloud Summit, we had a ton of product launches happen then, and we also had the Financial Services Summit, then you can go on Cloud On Air to check out any of those videos on demand. 

MARK: I love to see it. It sounds like there's a tremendous amount of summits going on, but I know that each of them, especially for like the data summit which was not that long ago, ton of cool product announcements, ton of cool features. Everyone was really excited about that one. So it sounds really cool to have all these different specialized summits for people to go and check out what's new and what's cool in the industry. 

STEPHANIE: Yeah. I think in the absence of a lot of the bigger conferences this year, we still wanted to make sure that the year was busy but also targeted enough. So that if you were interested, you could just pop in, find the information that's valuable to you, and then check out the future ones or share it with your teams that might find it relatable. So yeah, and then the last one I forgot to mention is the ML Summit. So Vertex AI came out. If you want to learn about that, that's also available On Demand. 

MARK: Yeah. Vertex is a big one. I've seen a lot of content coming out around that one, so definitely. If the Vertex AI launch is something that's interesting to you, I think our friend Priyanka has launched a couple of videos on the YouTube channel. 

STEPHANIE: Yeah. 

MARK: So highly, highly recommend those, and speaking of ML and AI, I figured for my cool thing, I'd share this blog post written by one of our directors who talks a little bit more about explainable machine learning. And we've talked about a little bit of this on some of our previous podcast episodes as well, where we brought in some of the folks from Google's AI teams and, of course, our good friend Dale Markowitz to talk about what is explainable AI, and really why is it important? So we'll probably throw in a couple of links at least to the previous podcast episode. 

But I definitely recommend checking this blog out because it does a really good job of giving you the high level explanation, like why explainable? Right? What does that actually mean? But more importantly, why does it matter, and how can you get yourself into a pretty bad situation if you're not using explainable AI? Definitely recommend checking it out, definitely learned a lot from it. 

STEPHANIE: Yeah. We talked a little bit about that in our responsible AI episode that we had with Craig and Tracy a few weeks ago. So you can listen to that, but if you want a lot more detail about how you can implement and utilize Vertex for explainable AI in your own ML practices, check out the blog post, because it goes very much into detail for that. But let's go ahead and start off our conversation with Steve and Yuri who are going to talk about SRE and their approach with their own customers. 

[MUSIC PLAYING] 

STEPHANIE: Yuri and Steve, welcome to the podcast. Great to have you here today. Why don't you start off by telling us a little bit about you? 

STEVE: I'm Steve McGhee. I was a SRE for about 10 years. Then, I left Google. I moved to a smaller company, in California, to help them build reliable services on the cloud and figure out what this cloud thing is and all that really interesting. 

When I say smaller company, I mean smaller than Google, which it turns out is actually kind of a largish enterprise, surprisingly. A strange sense of scale when I did that. Eventually, I moved back to Google to help other companies go through the same process, and now I'm a reliability advocate. Which means I just try to help people understand this whole reliability world in general, because it turns out, super complicated, confusing. 

YURI: Hi. My name is Yuri Grinshteyn. Currently, I'm an SRE at Google, part of the Customer Reliability Engineering team. So we're a team that works with Google Cloud customers to help them achieve the appropriate level of reliability for their services running in Google Cloud. We also advocate for SRE practices and principles. 

I've spent most of my career in various technical customer facing roles. A lot of it has been to do with monitoring, diagnostics, and troubleshooting, things like that. So the evolution to work on reliability as a broader subset of that and then to a CRE has been a natural fit for me. 

MARK: And I feel like we've talked a lot about SRE on the podcast. We'll include a couple of links to previous episodes, where we've gotten some great conversations from folks. But to get things really kicked off, let's do just a quick recap, because it is a complicated subject. Let's start with saying like what is SRE, and why should a company care about it? 

STEVE: That's a great question. Broadening even further is what is reliability? One thing that we have realized is that, internally at Google, we've talked about SRE like meaning reliability, but in actuality, it's just our way of achieving reliability. It's worked well for Google which, like I mentioned, is a gigantic company full of all kinds of internal, crazy systems. And we have certain ways of working, and then SRE evolved out of that. 

And so aiming for reliability explicitly is the main concept out of SRE, and it's the thing that is most easily transferred to any company of any size is don't just assume reliability will happen, or don't just be pleasantly surprised if you get reliability. Like you actually have to plan for it. You have to change the way you're doing things. You have to explicitly engineer for it, make trade-offs. 

At its core level, SRE and reliability engineering in general is just that, it's engineering. So it's not just fire and forget or pray and spray or things like that that people hope for. It's real work. 

YURI: Yeah. We often define Site Reliability Engineering, or SRE, as applying software engineering to operations. So people often say that operations is how you run systems and production. Obviously, Google specifically has a bit of a unique challenge, in that we have systems that have lots and lots and lots of users. 

And so it's really important to be able to run them in a consistent, predictable way without then correspondingly scaling the number of operations folks it takes to do that. And the only way you do that is by investing in engineering work, investing in things like automation, and so Site Reliability Engineer, or SRE, is the discipline of how you do that. It's how do you actually treat operations as a software engineering problem? 

STEVE: That brings up an interesting point which is that of sublinear scaling of operations. Which is if you have a system that is growing exponentially in terms of user adoption and even in terms of number of servers and machines and QPS and all these things. Like can't expect to grow your operations team linearly with that growth. It just won't work. 

So you need to have sublinear growth which means like for every 1,000 QPS, you can't add even one operator, let alone 1,000 or something like that. But like you have to do it in such a way where you can continue to run a growing service with a consistent set of people. And you can add people, sure, normally, but like SREs are pretty rare. Frankly, humans are pretty rare to hire sometimes. 

So SRE is part of finding a way to operate these continuously growing systems and growing not only in terms of scale but also complexity. So you can think of it as like both the depth and the size are growing at the same time. Like the volume and like the internal fractal of complexity, they're both growing at the same time. So being able to keep up with that with like a stable team is really the goal of it. 

STEPHANIE: Yeah. So obviously, this is a really difficult challenge to overcome, and if it's a nonlinear issue, do you find that a lot of companies have the forethought to plan for this in the beginning, or are there resource constraints? Why is it so challenging to both understand and implement for a company? 

STEVE: Unfortunately, a lot of the traditional, operational hiring and staffing models, maybe even not explicitly but sometimes subconsciously, you end up hiring like the SAN person and the network person and the virtualization person and the database person, and each person kind of has their role. And that doesn't really work too well, when you have applications that are growing with complexity. You end up with single points of failure and things like that. 

So this is like one traditional way of hiring people that doesn't really work in the modern systems, especially when you don't really have a say in anymore, and like you're migrating off of like traditional VMs and onto like a serverless platform or something like that. Things get really goofy. So the things that we recommend with customers today is you're going to want to have a service-oriented model in terms of like you have like a long running service team that owns this service forever, as it grows, and as it scales, and as it changes, and as you rearrange things. 

And so you can't really have like one dedicated ops team with the database person and the network person behind it, because it doesn't align with the growth strategy that you have in mind. So that's one of the first things that needs alteration, and you can't do it all in one go. So it's something that, when we work with these enterprises, we say like we understand you have this existing team, and you want to adopt this new model, but you have to do it slowly. 

Don't just rebrand your team that is doing it the old way and just call it you're now SREs. Please, go do SRE things. Like you actually have to give them a transition plan. A lot of times there's education involved. You can't dump the entire pallet of services onto their plate and be like, good luck. You have to actually allow them to grow into the role. That's the only way it'll work. 

YURI: Another challenge that I've seen is, when we start talking about prioritizing reliability and engineering for it, the first thing people are hearing is like, wait a second, we're not going to be able to move as fast. This is actually going to be an impediment to velocity, because we're going to have to either go through more rigorous change control processes or get more approvals to push things into production and stuff like that. SRE is both a response to that problem but so a solution to it, in that the idea-- and DevOps has tried to do some of this for a long time. 

The idea is to bring everyone to the table, where reliability is concerned, so that everyone has the same set of incentives. We can get into things like SLOs and their budgets further on, but the idea is that everyone believes that reliability is critical to the system. Then, everyone has a stake in spending engineering effort and other kinds of effort into achieving reliability. 

Then, you don't have this distinction between the people whose incentives are velocity, like the, quote, unquote, traditional developers, versus those whose incentive is the opposite of velocity, the opposite of change. Because they know that, as long as we don't touch anything, nothing's going to break. One of the things that SRE tries to do is to enable maximum velocity while ensuring appropriate reliability, but I think for folks to understand that, to say investing in reliability will actually make us go faster, that's a hard thing for people to understand sometimes. 

MARK: You both work with customers and have worked with a lot of different people in the past, and I'm really curious as to what that looks like, when you have to come to these customers and say, this is a very different model than the model you all have been thinking of and the model that you all have been working with. And it might be a little too simplistic to say they want as fast to develop features as possible and 100% uptime, and there's a lot of problems there. Right? So how do you have that conversation, and what are the pieces that really resonate with them, when you say, well, look, here's what we're doing. Here's what reliability is. Here's a different way to think about it. 

STEVE: I want a pony too. That's fine. It would be great if we had 100% uptime and maximal velocity. But customers get it that they can state goals, and really what we're after is what can we actually accomplish? 

But the reason why they come to us and ask these questions is because they want to hear what we have to say. And that's because they've seen how Google has operated at scale, at high reliability, high availability, high quality, all these things, and they basically just say, like you seem to be doing something. So what are you doing? If they were happy with their current model, they wouldn't be asking us that question. 

Similarly, most of the time when this comes up, whether it's the entire company or an org within a company, they're in the process of modernizing their infrastructure, as well as their application development process. So they're like throwing all the balls in the air at once, and they're saying, before these land, let's come up with a way to juggle them in the new way. Which is like kind of crazy, but at the same time, like it's totally happening. 

Tons of companies are doing this at once, and they're all saying, look, we're trying this serverless thing. We're moving into like deploying as fast as possible. What do you got? What can you do for us, and then our answer is SRE. So again, the goal is reliability. The method that Google has used is SRE, and we found a lot of customers it works for them as well. 

YURI: Where I've seen folks that really grapple with this idea is to try to help them figure out which angle are they coming at this from? And in my experience, there's really two primary ones. The first one is very straightforward, which is like our service isn't reliable enough. We're just struggling keeping our things up and running. What can we do? I think that's a pretty straightforward conversation. Right? Here are things you can do to reduce the number of incidents you have, reduce the duration of each incident, help you with things like time to detect, time to mitigate, things like that. 

The other one, which I think is a little trickier is the other side of that coin, which is we are able to keep our service reliable, but it's way too difficult, and we know that it's not sustainable. We're drowning in the lurch. We're drowning in pagers. Folks are burnt out. Our on-call rotation is something that everyone dreads, or our on-call rotation is basically everyone is on call it once, at all times, which is also bad. 

And we know that, as we grow, as our user base and traffic grows, we're just not going to be able to sustain this. So how can we move to a more scalable model? And I think if you can get folks thinking about it in one of those two directions, it's either actually improving reliability or improving the scalability of the team, that helps them to try to orient themselves and say, OK, what are we actually trying to do here? 

STEPHANIE: I'm curious, because that brings up a good point about those companies who have technical debt or don't have the organizational structure to support nonlinear growth. So with those cases, what's something that you tell these customers? Because you can't just expect them to revamp their entire procedures, processes, people. What's that first baby step that companies can do, so that it feels more manageable for them to move in the right direction? 

YURI: I've got an answer for this that I like literally use every single time, but I really want to hear what Steve has to say first. 

STEVE: Now, I want to hear what you have to say. Briefly, I don't have an answer that I use every single time. Often, it doesn't quite line up, but like I would say, a solution is to start with a smaller team, gain quick wins, and see how that succeeds for that team, and then essentially, advertise those wins to the rest of the company. 

There's the idea of a carrot and the stick. Like go all in on the carrot. Just build out this new team, doing this new system, in this new way, and be like, check it out. Look what this team over here is doing. Isn't that rad? And then everyone else will be like, oh, we want some of that. That sounds really good. Can we please have some? 

One case in particular, we had one system where the old platform time to deploy a new service was eight weeks. From code is done and written and like just getting it like first byte across the wire to the new service took eight weeks, because of all kinds of problems. And then when the new platform came online, the time to a new service was eight minutes which is a pretty dramatic change. 

STEPHANIE: Wow. 

STEVE: And that sounds like an arbitrary measurement, but like when you have the inability to make a new service, what do you do? You put all of your new code into the old service, and you end up having these like gnarly services, which are the Swiss army knives that just do everything. And you have to scale them in funny ways, and you know you should break it out into a new service, but like, I don't want to wait that a weeks, so I'm just going to-- and so just having this new way of working in this new platform, this team was able to say like, if you have a new service, just put it out there, man. It works, and it worked. 

That's one model is build out the new platform, and just be pure carrot and bring people in. So it's probably longer than Yuri's actual answer. So now I want to hear what Yuri has to say. 

YURI: My answer is probably shorter. Where I tell the folks that can make it like a really big difference right away is to basically delete all of their existing alerts and only alert on like SLO or user experience. Figure out what makes your users happy, put in monitoring that will tell you whether or not they're happy, and have your pager only respond to that. Because where I've seen a lot of folks struggle-- if like we're in a meeting like this. And they share their screen, and their email is up, their inbox is full of alerts, just the whole thing is like alert, alert, alert, alert. 

It's really hard to have any meaningful incident response or even a way to focus on your actual work, if you're just constantly being pinged with various things. You have stuff happening within the infrastructure, the network, whatever, and if you just get rid of all of that-- because none of it is obviously actionable, because you're not doing anything about it right now. You can see alerts flowing into your inbox right now. You're ignoring them. So how are you going to know when something real is happening? 

Delete all of that. Start from scratch. Figure out what really matters. Reduce your alert volume by 95%, and that'll free you both cognitively and just your time to actually make progress on things. Obviously, everything else makes a big difference. Right? 

To actually start putting in real SRE practices and work on the platform will make a huge difference over time. But you could make your life better today by just going into your alert repo and just deleting everything. I'm also willing to bet that you won't actually lose very much meaningful stuff either. 

STEVE: To boil that down into two things you could do, one is to take your alerting system and think about what is symptom-based and what is cause-based. Right? And make sure you only alert people based on symptoms. You can still track all the potential causes, but you don't alert based on them. And the rationale behind this, just to expand on it a little bit, is that if you feel like you need to alert on every possible cause, that means you need to enumerate every cause. Like what could possibly cause an outage? 

There's infinity of those. So like you will never get them all. You'll always be introducing new ones, and then a new version of some patch will come out, and you won't even know that there's this-- so focus only on the symptoms, which is what Yuri was talking about, and then ignore the causes. 

The other main point of this, don't email alerts. Alerts can either page somebody, or they can create a ticket. Not everyone believes in this, but I do. So email alerts are just going to be ignored. You only have pageable alerts which need to be actioned now. 

You have ticket alerts which need to have an audit trail of what you did with them. And they can take a week or something like that, but at least you know what happened to them. You can't just ignore them. You have to actually close them. 

And the last one is informational alerts, and that's really a log. That's not an email. Those can go into like a database somewhere. They can go into like a storage bucket. Like if you really need the, oh, what happened at that time, maybe put that in a log. Put that away, and you can query it later, but don't make everybody's inbox your log. 

STEPHANIE: Yeah, and you know what, this reminds me of? It's like this Marie Kondo approach to alerting. 

MARK: Does this alert give you joy? 

YURI: Yes. 

STEPHANIE: Yeah. Does this spark joy, or does it affect user happiness? But instead of just entirely letting go of them, and you're just dumping them and never looking at them, you're thinking of it, how can I bucket them out. So that I can create more mental space and time for myself to actually make progress towards them? 

YURI: Building on top of [INAUDIBLE] Right? This idea of alerting on causes, that happens because of historical reasons. People will say, well, this one time, we had an outage because of this thing, and therefore, next time this thing happens, we need to know about it. So we can like trying to prevent the outage from happening. 

So you build on that over time, and every time there's an outage, you add more cause-based alerting and then an effort to try to capture every possible cause. But where you then end up is with a completely inoperable state of things, because you're just constantly getting things that look like causes but don't actually correspond to any meaningful outage. Actually, either spending the time to process every one of those, and say, OK, this thing that triggered an outage last time is happening again. 

This [INAUDIBLE] is happening. Well, it doesn't seem to be, so I guess I'm just not going to do anything about it. Or you start to ignore them, and then they're not adding any value. All you're doing is training everyone on call to ignore alerts which is obviously bad. 

STEVE: Let's take a concrete example here. So like if you had a system where every time a request comes in you forked a process, or you opened a file for it to handle that process or that request that came in. At some point you would hit like a file descriptor limit, or you would hit like a threads limit, or you'd hit like a process ID limit or something like that. And then someone would be like, you know what, we should make sure this never happens again. So I'm going to put in a thing that measures the number of threads, PIDs, or whatever it is, and then two weeks later, someone's going to come and be like, you know what, we actually don't need to open that file every time, and they're just going to delete that code. 

Are they going to go in and they going to fix that alert that they didn't write? Like this is the classic case of you end up with this alert out in there that is completely irrelevant, because we actually don't even fork anymore, but we still have this alert out there. And then someone is going to come and say like, well, what's the threshold that we should set this alert to, and we'd be like, I don't know, seven, seven million? I'm not sure. Like I don't even know what this means. Right? 

When you find yourself going through and like tweaking parameters or setting targets for all these possible causes, that's when you know you're heading down into the bad place. So change course. That's my recommendation. 

YURI: I'm really glad that I was able to derail this entire conversation into my favorite topic and just get everyone to talk about alerting. I will always use the opportunity to get on this soapbox. We should probably talk about other stuff too. 

MARK: Well, it's important. Right? You mention that a lot of this comes up because it happens organically, and it's people trying to solve problems in the moment which obviously is done with good intention but can eventually spiral out of control over time. One of the things that you said that was really interesting in other conversations, Steve, was that not every company has a chief reliability officer. 

So how do you take these tactical, independent decisions and then look at them from a strategic level, like from the C level? And how do you get that executive buy-in as well to make sure that you don't head down these kind of, oh, look, we have a million alerts. No one knows what they do, and none of them are helping us path. 

STEVE: Yeah. In the absence of someone to make decisions, it needs to be bottoms up, and you need to show a theory. Like we think this will do X, lay out what it is that you want to do, and then how you're going to measure it, if it's going to succeed or not. So in the absence of someone saying like, yes, we're going to do this, you need to just make proposals and just start doing the work and showing the value. 

The important part here is making sure that that value is visible to everyone, and that it is like directly attributable to the work done. Right? Like that you can say the reason why this is important is because it's not we're going to have fewer incident accounts or something like that, we're going to have less customer-visible impact. And so in order to do that, we're going to measure it by approximating the time times the users and blah, blah, blah, and we're going to attack it through these five different approaches. 

We know that our highest risk is A, B, and C, and so we're going start with A. And being able to do that in such a way where you can show that this demonstrates significant value to the business is super, super important. And it turns out, if you can do that enough times, and it's important enough to the company, the company will recognize that. Right? And then maybe you end up becoming this reliability officer or something like that. 

But like at a certain point, the reason why we brought up the idea of this like chief reliability officer is because, at a certain point, as you go up the chain of hierarchy within a company, the understanding of the details becomes more fuzzy, and more impactful decisions are made. So you actually end up making more decisions with less data. So what you need to be able to do is be able to make sure that there is a person near the top of this pyramid that can understand this scope of work and can provide context to whoever is making that decision, so it's not done in a total vacuum. 

So if you get to the point where someone is deciding between velocity and reliability, and they think reliability just magically happens, they're going to pick velocity, or they're going to pick releasing the feature sooner or something like that. So having a seat at the table is really, really important. If you don't already have that person at that table, my suggestion is to show the value to the company and make your way into that room. 

STEPHANIE: Yeah. I find that true for a number of executive positions, as these emerging roles do come out, for example, CSOs as well. But in terms of actual strategies on how to get them to take action and implement these practices, can you talk a little bit about some of the toxic combinations that you have seen, or how we're able to incentivize from the bottom up? 

STEVE: One thing that's hard is, when you're changing ways of operating machinery, the machinery needs to keep running, while you're changing gears. Right? You need to be able to move from system A to system B, but like it's not cool to like take a two week downtime while you're retooling. This is something that happens in industry, actually. 

Like a friend of mine used to work in the oil and gas companies, and when they had to retool their plants, they literally just shut everything down, and they replaced all the bolts. It sounds crazy, but like it's true. Internet services, it's a lot harder to do that. You can't really just take down your service for an entire month, while you change things around. 

So one thing that happens is you'll find that in the old model you do something which sounds like a great idea, seems to be working. And you want to move to the new model which has all these things that seem like good ideas, and they seem to work. And so one choice to make-- and this is the anti-pattern. Please, don't do this-- is that we'll do a little bit of both. Right? 

So we'll keep one foot in one pond and one foot in the other pond. So we're going to keep doing ITIL, and we're going to pick up some SRE stuff, and we're going to do them both at the same time. And I understand, like you can't just flip the switch. Like you have to adopt some things, but occasionally, there are parts of the old model and parts of the new model that conflict. 

So I call this the Batman 1 problem. So if you remember the original "Batman" movie with Michael Keaton, there's a scene in the movie where Joker hands out all this different cosmetics, like lipstick and deodorant and shampoo. And if you use any one of them, you're fine, but if you use a certain combination, you're in trouble. This is the core of the plot. 

This is actually a real thing. That this comes from pharmacology. Right? If you take two different drugs, one at a time, they're fine, but if you take them together, that's bad. 

So there's a few of these toxic combinations that exist in operations as well. And you can imagine, if you have a company where, if you screw up, you're out-- we call this blamefulness-- if you try to introduce postmortems to that company without addressing the cultural problem, it's not going to work. Like you can't have blameless postmortems in a blameful company. That's an obvious one. 

Another one which is less obvious is in ITIL and a few other of these similar systems, we have something called a Change Approval Board, or a CAB. And this is a group of managers who like look over changes, and say like, yeah, this looks fine, or like, no, like we need to have more people agree that this is a good idea, before we allow it, like a human gate when you're changing production. When you have like a system that is well understood and is not changing that much, or it's changing in like well known ways, this works. This is good. You don't want to allow just anybody to just go willy-nilly and just change whatever they want. 

But in a complex system, when things are changing at a high velocity in really subtle ways, you cannot expect that board to understand the impact or the side effects of these changes, and that board becomes a bottleneck. Often, you'll see-- and I've seen this many times-- where a company will say like, well, we're adopting Agile, and we're adopting SRE. And then everything that the SRE team wants to do, they just have to get it past the CAB. And we're just like, wait, whoa, like those are both good things, but when you put them next to each other, it's bad. So don't do that. 

The last example is similar, which is lots of companies have a NOC or a SOC or sometimes they call it an EOC, which I think is harder to say-- where they have like one group of people that sit in a dark room with big monitors, and they're the only people who are allowed to touch production. Like they have the keys to the castle, and all changes go through them. And like that makes perfect sense, again, for like a model where we understand the types of changes, and we want to be really careful. 

Similarly, like if you want to have a service-owning model, you're saying like these developers build this service, and those developers build this service. But you don't let them make any changes to production, you're going to have a hard time. Even worse is if they can't even see production, if they can't even see the monitoring dashboards or take action against them. These would be bad. Right? 

And I've seen this firsthand, where we have service-owning teams, but like they're not allowed to push to prod, and they certainly aren't allowed to make a cherrypick. They have to do everything through the NOC. Those are some examples. 

So my recommendation is like, if you're going to transition between an old way of doing things and a new way, don't have one service live in both ponds. Just like say this service, you now live in the new pond. Right? You get to do everything the new way. All these old services we'll continue to do the traditional way. Don't have one service live in both states. That can be a problem. 

YURI: And where we've seen that really work is-- Steve's already said this-- but basically, expanding horizontally from there, because inevitably, you'll see success. Whether or not the service will actually be more reliable or not depends on a lot of things, but you will see a much more efficient and effective and a scalable way of operating that service. And just like Steve said, other service teams will come looking for that magic. They'll say, we want to do what you are doing, because you see things over here seem to be going much better than in our world. And so that idea of starting small, starting with a single service, demonstrating success, and then spreading horizontally through the rest of the org, we've seen that work time and time again. 

MARK: Well, first of all, I feel fantastic that I now have a Venn diagram that overlaps between Michael Keaton references and SRE, which I didn't think was going to happen, but I am so happy it did. But then you were mentioning for this like say you have an enterprise, and of course, you're going to have hundreds, maybe thousands, of different services and different teams working on things. And you talked about having this first team take on that task of bringing maybe some more SRE philosophy to their work and also to proving to the other teams that the work they're doing is valuable. 

For that first team, which I'm sure can be such a huge challenge, are there any guideposts or a map that you can provide them? Especially in the work that you've done with other companies, as to where do they get started? Where do they go? How do they prove that value? 

STEVE: Like we alluded to before, it turns out that reliability is a big space. There's a lot of stuff you could possibly do. What do you do when you want to learn a new thing? Like go out, and you research. Like you go to a conference, and you like look at vendors and what their solutions are. 

This is like excruciating. It's really difficult. Like if you've ever looked at like the DevOps space or the CNCF map is like it's a meme now with the guy with the red string pointing at it. Right? It's so complex that people have a lot of trouble like navigating it. 

So what we do when we talk with customers today is we help them by showing them just the reliability space. And we say, like here are all the capabilities you could do in terms of I want to be able to perform canary releases, for example. This is a capability that my team and my platform can do. Or I want to provision my infrastructure through GitOps or something like that. These are things you can do, and it's both like a combination of what my team knows how to do and what my tools allow us to do. 

So what we've done internally is we've collected all these into like literally a map. It's a picture. It's an x and y-axis, and we're able to say like, if you want to get to the point where you're doing four nines of availability, just as like a proxy to like maturity, there's all this stuff that seems like it's a prerequisite. 

And so the way that we've found this makes sense for customers is we can show them this map, where like the very far left, like the 0 on the x-axis, is like running on my laptop, and like when I close it, it turns off. So it's not that reliable. Whereas, the far right is like the most complicated thing imaginable. 

And so what we do is we say, like let's help you figure out where you are today. We call this like the front, like along this whole map, like how far have you gotten towards the right? And if you say like, well, we have four nines, we must be here. We're like, I know you're experiencing four nines right now, but that might just be because you've been lucky, but like what capabilities have you actually built out? 

So we call this orienteering. So we're able to say like, well, I know we can do this, and I know we can do that. We have these backups, but we don't really restore them. And we have one data center, and we don't really have a way to flip over to the other one, and blah, blah, blah. 

So we say like, oh, yeah, we think you're here on this map, and where do you want to get to? Oh, we want nine nine's. OK, well, you probably don't want nine nines, but we can provide some cost associated with it. And say, how about we want to get you two-- for your most critical services, we want to get you to four nines, and for your less critical services, we want to get you to three nines. 

And then we can provide basically like a compass. Right? So we can say, given where you want to get to from where you are, here's a path, or here's a series of paths. Right? And being able to provide this kind of map to customers has been really helpful, because it narrows the scope of what they could possibly look at, and they don't freak out. They don't have to look at the entire world and say like, well, I don't know where to begin. We actually give them a place to start from. 

YURI: One thing that I think is really important and I think that really helps folks to put this into some context is understanding the implications of trying to move up to those higher levels of reliability isn't just deploy the same service in many zones or many regions. That's sometimes a necessary part of it, but it's rarely sufficient to actually hit those high reliability goals. It helps them to understand the other kinds of investment they're going to have to make in things like monitoring, alerting, incident response, postmortems, or retrospectives, engineering effort, and things like that which then helps them to understand, what level of reliability that our service actually need? 

To come back to like literally my intro to this, this is what we mean when we say, what is the appropriate level of reliability for your service? Lots of folks start off by saying, our service has to be as reliable as possible, whatever, 89 nine's, 100%, but realistically, that is not the case. Because even if you think about, well, what is your service? What does it do? 

Well, it's an externally-facing thing. It's something the customers use. Well, how do they connect to it? Well, over the public internet. What's the reliability of the public internet for them? Well, we know it's somewhere less than 100%, probably north of 99%, but definitely less than 100%. 

Well, there's no point in building our service to be significantly more reliable than that, because our customers will never experience a more reliable service than their ISP, and that helps them to start to put some of these things into kind of a priority. Like what is actually important? Where should we be investing, and where do we not need to be based on where we are? 

And I think Steve's point about figuring out where you are and where you need to be, and then really importantly, what is it going to take to get there? And are you actually willing to do that based on the needs of your users, your customers, and your business? That's really critical. 

STEVE: We've built this little map inside, and it's very like-- it's not even alpha, let alone beta. It's just like this thing we mess around with. The good news is for our listeners is that you can actually build your own map. It's actually pretty straightforward based on existing, known SRE systems, and I call this the virtuous cycle. 

Essentially, it's like a flywheel. If you keep this running, you will figure out what you need to work on next pretty quickly, and it will always give you incremental improvements. The model is really easy. It's just that you, once you have SLOs in place and an error budget, and you're able to say, like this problem is bad or not, like it's actually affecting customers. And then you start performing formalized incident response, where when something does break, you're not just like scrambling. And you're actually keeping track of what's going on, and no one's freaking out. 

So you need SLOs. You need incident response, and then once you add blameless postmortems and postmortem review, which is a really important thing that gets often overlooked, you're able to say, like for each incident that happens, when we have a postmortem, we're able to look at the postmortem in a calm environment, after the fact, and say, OK, the bad thing happened. We get it. We understand how bad it was. What were the causes, or what were the things that were underlying that? 

So I always urge SRE teams or service hunting teams to have at least three action items in a postmortem, three types at least of action items. One is how can we detect this sooner or with better granularity? How can we mitigate this better next time, either faster or again with better granularity? And then three, how can we actually prevent this from ever happening again? 

Sometimes, the third one is really super out there, but at least write it down. Have an idea about it. And so all of these action items from your postmortems can go into one list, and we can call this like the reliability backlog. And so now, the question is like, once you do this a few times, it's going to be this giant list in your GRS somewhere. Right? 

So now, how do we order it? Like how do we prioritize the work? The CRE team that Yuri's on has developed this risk modeling, basically. So you can say like, given one of these reliability risks, like that's what we're talking about here with these AIs, how do we turn that into a number? 

The way you do that is you assign the risk itself like an impact score. How big of a blast does it have times the probability? Like how likely is it going to happen? Is this a once in a lifetime event, or does this happen every single time we do a release, or does this have the potential of happening every single time we do a release? 

And by doing this, you get one number, and the good news is about if you have a series of things that each have a number, you just hit sort. And then you start from the top, and you work your way down. So this gives you a reliability engineering backlog that is ordered. If you've heard of the term of a Pareto analysis, you know that, if you start working on the big thing first, you don't ever actually have to finish. You'll get most of the value just by working from the top and working your way down. 

And so now, as an engineering leader or something like that, you can say, OK, we have this big amount of work, and we have these engineers that can work on it. Let's assign 20% or some number towards just constantly burning down this reliability, and let's see if it has any impact. Odds are, if you can burn down your risks, you're going to see less and less impact over time. And you're going to able to turn around and say, like this was important. This was valuable to the company, and I have the graphs to show it which is a great place to be. 

That's the model that I would suggest. Build your own map based on this flywheel. You'll know what you should work on next, because it just burned you last week. Right? And then so you'll have this incremental improvement. You'll be able to say, like hey, we fixed the thing, and everything will be like, ah, I hated the thing. I'm glad it's fixed. Good job. So I highly recommend that. 

STEPHANIE: If I had to sum this up, it's about finding the lowest common denominator that affects a realistic SLO and taking a very measured approach in prioritization and also the risk modeling and addressing the postmortems. So have you actually seen this happen successfully in any of our customers or people you've worked with? 

YURI: Yeah. I've worked with customers where the way we were able to kick start this whole virtuous cycle is by actually doing theoretical exercises, almost like a tabletop role playing exercise. We publish externally what we called the Wheel of Misfortune, but it's less of a wheel. It's more of a we'll come up with a scenario, and we'll play through. 

How would it go if this thing were to happen? We'll pick a thing. Let's say like this service fails on this specific way. What happens? What does the monitoring look? 

Does an alert go out? What does the alert look like? Who picks it up? What do they do with it? What do they look at? 

What troubleshooting steps do the take? What do they do to mitigate it? Does the mitigation work, and just play it from there. Inevitably, out of an exercise like that, you'll end up with, in my experience, anywhere from one to three dozen action items that could be directly addressed today to improve either on-caller experience or the actual reliability of service. 

And then like Steve is saying, now, you're in that cycle. You start rolling that into the backlog. You start prioritizing. You start working on it. You start seeing the benefits which will inevitably result in more motivation for the team too. Then, do the same thing but not with theoretical incidents but with real ones via the practice of postmortems. 

STEVE: Often, we use the analogy of peacetime versus wartime-- a little bit violent, but it makes sense to people. The idea being like sometimes your company, or at least your team, is in the state of like, oh, man, everything's burning all the time. This is the worst. And sometimes, you're just in the like, yeah, we're good. No big deal. 

The important part is that your reliability backlog is still the same. Like it's the same hotlist ID number, or whatever it is. Like it's the same scope of work. All you need to do is adjust the amount of effort you're sending towards burning down that list. 

So if you're in wartime, maybe 80% of your effort is going to burning down that list, or 100%. Right? This falls back to the error budget thing that you've heard about, I'm sure in the past which is like, if we've exceeded error budget, we're only going to work on reliability efforts, not on feature ads. This is basically wartime. Right? Like we've turned the knob all the way to the right, and we're just working off this one list instead of the product manager's like feature list. Right? 

Then, during peacetime, we'll turn the knob back again. And like we don't want to turn it to zero, because we don't want to build up too much technical debt, but we will dial it back a bit. Things are pretty cool. So let's just kind of like burn down some of these longer term risks. 

MARK: So of course, we mentioned earlier that we had a couple of podcast episodes. We'll make sure to link those in the description. Are there any other references? I'm sure the SRE book is always a great one for folks, but what other places can people go to learn a little bit more about this and start to think about how they can maybe bring this to their own company? 

STEVE: Yeah. The books are great. They're a little bit like the Old and New Testament. Like they give you a lot of theory, and sometimes, it's difficult to really apply it to your life. And this is something that we're actually fixing. Like actually, I think the second book did a good job of making it a lot more applicable. 

Beyond those books, there have been more books that are owned by Google. They're not through the same authors, but you can find them out there. Like there's an SLO book, and there's like adopting SREs book and a bunch of other ones. But beyond books, if you go to Coursera and just search for SRE or for SLO, something like that, you'll find them. 

We do have something we call the Architecture Framework for GCP. So this is GCP specific on that like how to build applications on GCP, and there's a reliability section on that. I'm working with some people to make that better and better. In fact, we've got like a lot planned for it, so that you're going to see that grow and grow. I'd start with those. Those are great places. 

STEPHANIE: Great. Well, we will be sure to link to those classes and books in the show notes, but we're all out of time. So is there any lasting advice you want to leave with the audience before we jump off? 

STEVE: The one thing I want everyone to remember is, when you're designing systems, you can always make more reliable things on top of less reliable things. And so like if you wanted a five nine system, you don't need six nine infrastructure. It doesn't work that way. Like it's actually completely backwards of that. Like, you can have a really reliable system that's running on many unreliable things, and this is the beauty of software. It allows you to make these trade-offs. So that's a really important point. 

YURI: And I'll just add that none of this matters if you users aren't happy. This is all in service of your users. Think about your users and their happiness as your North Star, as you work towards this stuff. 

STEPHANIE: Important reminder. Thank you so much. I learned a ton. So Steve, Yuri, can't wait to have you back on again soon, hopefully. 

YURI: Thank you so much for having us. 

STEVE: Thanks very much. 

STEPHANIE: Wow. So I learned a lot in that conversation, because I feel like they weren't afraid of saying how complicated and difficult it is to implement our SRE in a real world situation, real world environment. But yet they made it a little bit more approachable in their way of understanding it. 

MARK: Yeah. I think that's really the key, because it can seem like a very daunting task, especially if you're an organization that has been doing things a different way for a very long time. And you can't just put a procedure or process in place and expect it to work immediately and then have all the buy-in. You really do need to think about what it looks like to actually implement this. 

I really liked Steve's example of not splitting the difference. Right? Like pick a path. Right? Take a service, and launch it in this new model. And see what happens, and use that to validate your efforts. I think that's a really important and practical tip. 

STEPHANIE: Yeah. It really is, and the other thing that I loved about what Yuri was saying is it's hard to let go. It's hard to say, I'm OK with not receiving every alert. So it's hard to have people accept that. 

But at the same time, Steve was able to give some practical advice about, OK, it's not just about letting it go. It's about bucketing things, so that you can still get emails. You can log information. You can ping people, when it matters, when it makes sense. It's about prioritization, so that you have the capacity to take action. 

MARK: And Yuri's point about engineering with reliability in mind is really the key there. And it's funny, because he's also launching some videos called "Engineering with Reliability." So we'll make sure to include a link to the playlist in the description here. But of course, Yuri's also done his "Stack Doctor" series, where he talked a lot about the more practical ways that you can actually set up alerting, and how do you actually do that inside of Google Cloud? So definitely I recommend checking those out, if you're interested in learning a little bit more about it, maybe getting your hands dirty. 

STEPHANIE: Yeah. These folks are the experts, and we've worked with Yuri quite some time in the past years at Google. So I'm really excited to see how far they've come, and that they've been able to share everything they've learned. I'm grateful to have them on. 

So speaking of a couple of things, you mentioned Yuri's new video series. The only thing I wanted to plug at the end of this episode is I have a new series coming out. It's called "What's New in Networking," and it's, well, it's about what's new in networking. So if you are interested in keeping up with our product announcements in the networking space, we are coming out with a series under each category, between core infrastructure, service, networking, edge and security, load balancing. So each episode will focus on what's happened in the last quarter or so in each of these areas. 

So go ahead and check it out. I think it comes out this week. We'll include a link, once it does, and we hope you enjoy it. But for everybody else, we'll see you all next week. 

MARK: Bye, everybody. 

[MUSIC PLAYING]