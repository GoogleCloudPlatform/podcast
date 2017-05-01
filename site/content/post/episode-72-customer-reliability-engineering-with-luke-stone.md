+++
audioDuration = "00:38:26"
audioFile = "Google.Cloud.Platform.Podcast.Episode.72.mp3"
audioSize = 55658483
categories = ["CRE", "SRE"]
date = "2017-04-12T01:07:49Z"
description = "This week, Mark and Francesc get a chance to talk directly to the Director of Customer Reliability Engineering himself, Luke Stone, all about CRE"
draft = false
episodeNumber = 72
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Customer Reliability Engineering with Luke Stone"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/SQviKajW4gE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/64zrto/episode_72_customer_reliability_engineering_with/"
+++

This week, [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) get a chance to talk
directly to the Director of Customer Reliability Engineering himself, Luke Stone, all about CRE - where it came from,
what it's goals are, and how it's been working with some big customers at Google Cloud Platform.

<!--more-->

##### About Luke Stone

Luke is defining the customer experience of Google's new Customer Reliability Engineering (CRE) team. 
When he joined Google in 2002 he was the first technical support engineer for AdSense. 
He ran software engineering teams and started building on Google App Engine in 2009. 
Recently, he led the technical support team for Google Cloud Platform before becoming a founding member of the CRE team. 
Before Google, Luke was a system administrator and developer in academic and non-profit organizations, 
and studied computer science at Stanford. 

##### Cool things of the week

- Google Cloud announces Machine Learning Startup Competition [blog](https://blog.google/topics/google-cloud/google-cloud-announces-machine-learning-competition-startups/)
- Quantifying the performance of the TPU, our first machine learning chip [blog](https://cloudplatform.googleblog.com/2017/04/quantifying-the-performance-of-the-TPU-our-first-machine-learning-chip.html)
- DeepBreath: Preventing angry emails with machine learning [blog](https://cloud.google.com/blog/big-data/2017/04/deepbreath-preventing-angry-emails-with-machine-learning) [github](https://github.com/googlecloudplatform/deepbreath)

##### Interview

- Introducing Google Customer Reliability Engineering [blog](https://cloudplatform.googleblog.com/2016/10/introducing-a-new-era-of-customer-support-Google-Customer-Reliability-Engineering.html)
- All the CRE blog posts [blog](https://cloudplatform.googleblog.com/search/label/CRE)
- Site Reliability Engineering [book](https://landing.google.com/sre/book.html)
- Postmortem Culture: Learning from Failure [chapter](https://landing.google.com/sre/book/chapters/postmortem-culture.html)

##### Question of the week

[Rokesh Jankie](https://twitter.com/rjankie) returns this week, with another question:

What does it mean to have 99.99% availability. That's not 100%, what does it mean for customers who have mission critical applications?

- SRE II with Paul Newson [podcast](https://www.gcppodcast.com/post/episode-59-sre-ii-with-paul-newson/)
- High Availability [wikipedia](https://en.wikipedia.org/wiki/High_availability)
- Borg and Kubernetes with John Wilkes [podcast](https://www.gcppodcast.com/post/episode-46-borg-and-k8s-with-john-wilkes/)

##### Where can you find us next?

Mark is going to be at and then on to [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/) in April.
He's also going to be hosting the [Playcrafting + Extra Life Game Jame & Game Fest](https://www.eventbrite.com/e/playcrafting-extra-life-game-jam-tickets-32637618997), raising
money for UCSF Benioff Children's Hospitals. Finally he'll be in Sweden for [Nordic Games Conference](http://conf.nordicgame.com/) as well.

Francesc will be presenting at [Gophercon China](http://www.bagevent.com/event/357764) in April, and will then 
be at the [New York Google Developer Group](https://www.meetup.com/gdgnyc/events/234963739/) for a Serverless event!
Francesc has also released a new [Just for Func episode](https://www.youtube.com/watch?v=LSzR0VEraWw), covering the Context package!

{{< transcript "FRANCESC: Hi, and welcome to episode number 72 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey Mark, how are you doing?" >}}
MARK: I'm good, thanks, Francesc. How are you doing today? 

FRANCESC: Very good. Happy to have you back to San Francisco and very excited to talk today about not SRE but CRE. 

MARK: Yeah, Customer Reliability Engineering. 

FRANCESC: Yeah, and we have nonetheless than Luke Stone. Can we say the father of the CRE? 

MARK: Sure. I think, yeah. 

FRANCESC: So, you know it's like pretty much the best person we could get for CRE. He's here for this episode, so pretty excited about that. 

MARK: Yeah, super happy to have him hanging out with the booth with us. Then, after that, we're going to talk about the SRE things and our question of the week, talking about, why can't I have a 100% uptime. I want 100% uptime. 

FRANCESC: I want 101. Like, why not? Why no one offers 100% uptime, and if they do they're lying. So yeah, we'll talk about that at the end. But before, as usual, we have our cool things of the week. And we have three of them today. The first one is a pretty cool opportunity for any startup out there doing machine learning. We have a competition. It's called a Google Cloud Machine Learning Competition, because you know it's like not a very original name. But, basically if you apply to it, you can get up to half a million dollars in investment opportunities and $1 million in GCP credits. And there's many other prizes, but basically the whole point is if you're doing machine learning now, you can just apply. It's not a specific vertical of machine learning. It's just machine learning. So I guess it's a cool opportunity for anyone out there doing cool stuff with machine learning. 

MARK: Yeah. And it's worth noting that we're pretty open, so teams don't have to be using Google Cloud Platform to be eligible. It is US-based startups. So if you're just basically doing machine learning in almost any sector on almost any platform and essentially using any tech, then we could be interested in seeing what you're doing. 

FRANCESC: Next we're going to be talking about something that I'm pretty sure people that do machine learning, especially at scale, are going to be pretty excited about. We wrote a paper and published a blog post about the performance of TPUs, the TensorFlow Processing Units, and it has a lot of detail. 

MARK: Yeah, it's super cool. So, the TensorFlow processing units are custom chips for doing TensorFlow processing specifically for that task. And it's pretty cool. So we wrote a blog post about the performance improvements we can see from running workloads on sensor processing units versus GPUs and against CPUs, and I'm going to read this because I sound super cool. The TPU achieves better energy efficiency than conventional chips, achieving 30 to 80 times improvement in terra operations of computation per watt of energy consumed. So basically it does more for less. 

FRANCESC: Yeah, it is pretty amazing. There's a graph that is not the easiest graph to interpret, but basically it says how much more performance you can get per watt in different systems. And basically we have two CPUs. The faster TPU achieves almost 200 times more performance per watt than a CPU, which is a lot. So definitely worth it. If you're running TensorFlow, there's no better place to process TensorFlow than in that TensorFlow processing unit. 

MARK: Yeah, actually, here's a good one. Have you ever used a TPU? 

FRANCESC: No, have you? 

MARK: Well, have you ever used Google Search? 

FRANCESC: Yeah, actually. Yes. 

MARK: Have you ever used Google Photos? 

FRANCESC: That's a very good point. 

MARK: There you go. Then you've used a TPU. It powers all those things. 

FRANCESC: Very good point. And the last cool thing of the week is a very cool thing of the week that comes from one of our dear coworkers, Bill Prin. He's a developer programs engineer for Google Cloud, and he wrote a Chrome plugin. It's called DeepBreath. 

MARK: Yeah, so if you're a little angry and you find yourself writing an email that could potentially, I don't know, get you fired, then this is a plugin for you that will let you know maybe that your email is getting a little negative and will give you a little pop-up saying you might want to think about maybe toning that down a little. 

FRANCESC: Yeah, it is pretty funny. It uses the Natural Language API, and what it does, it's able to figure out if your email is very negative and at some point when this core of negativity goes too high or low in this case, it will warn you who will pop-up saying, careful this email is getting pretty negative, which is pretty funny. 

MARK: You know, maybe I'll install that. 

FRANCESC: Yeah, I think that the cool thing is that the whole thing is open-sourced. So, go check it out if you have never used the API. You'll see how to use. It is actually pretty simple and a very nice example on how you can build cool stuff that is also useful. 

MARK: Awesome. Well, why don't we go have a chat with our friend Luke from the CRE team? 

FRANCESC: Sounds good. Let's do that. 

MARK: I am super excited to have the most amazing Luke Stone here from the CRE team. How are you doing today, Luke? 

LUKE: I'm fantastic. Thanks for the great intro. 

MARK: Excellent. Before we start talking about CRE and customer reliability engineering, why don't you tell us a little bit about yourself? What do you do a Google? What's your role? Who are you as a person? 

LUKE: Sure. So my name is Luke Stone. I'm Director of Customer Reliability Engineering for the Google Cloud Platform. I've been at Google as an engineer for 14 years. I started off doing tech support for AdSense, and I'm really into doing technical partnerships. I think Google is an awesome technical company, and we have a lot to offer to people who want to be awesome at technology, too. 

FRANCESC: So we've done a couple of episodes where we have mentioned the concept of CRE, but what is it for you? 

LUKE: CRE is applying the wisdom and best practices of Google SRE to our Cloud customers. So SRE is Site Reliability Engineering. It's basically Google's answer to DevOps. 

FRANCESC: Yeah, we've got a bunch of episodes with Paul Newson and also other people not Paul Newson. We talked a little bit about SRE, but SRE has been there for quite a while, right? 

LUKE: Yeah. 

FRANCESC: CRE is pretty new. 

LUKE: Yeah. 

FRANCESC: When did it start? How did it start? 

LUKE: CRE started about six months ago because we realized that our current strategies of providing tech support and documentation to our customers was just not sufficient to help people actually build meaningful stuff on our Cloud Platform. So let me take you back. I join the Cloud about two years ago, and at that time we were offering tech support to our customers. And this is break-fix, so something breaks and then you open a ticket and you fix it. And this is a great service and absolutely necessary, and it catches everything that kind of falls through the cracks. But why do things need to break in the first place? 

MARK: And when you say things break, do you mean like break with Google Cloud, or break on the customer side, or both? 

LUKE: Well, there you go. The main problem here is that when you're building on the Cloud you get access to a ton of technology , but now your application is made up of half of our technology and half of your technology, in terms of your application code and systems. So we really need to work together and think of your application as one technology system that we can collaborate on and not a not just a typical engineering team-vendor type relationship. Because the APIs are vast, and we're really tightly integrated. What we did two years ago was to try to make our tech support response times better and make the quality of the responses better. But we noticed that even the act of making a tech support ticket takes several minutes. And if you're working on an application that has a four nines reliability goal, then you're only allowed four minutes of down time a month, so you're gone, right. 

So we really need to figure out-- so that wasn't going to that wasn't going to cut it, and we needed to figure out a new strategy. So we looked around the world and said, what's better? And there's a bunch of stuff out there in terms of DevOps and people trying to do operations in a more modern style than the typical you know developers hate the operators and the operators hate developers style. But the one that was most natural to us was Google Site Reliability Engineering, Google SRE, because all the teams that Google operate according to these principles. So I thought, what if we just apply these principles to your customer application? Would it work? And so I thought, let's give it a shot. 

FRANCESC: So what does that mean exactly? Does it mean that whenever someone wants to build a new system, they're like, hey I want to run this huge web server serving millions of people and I have one micro. What's going to happen? Or, how does it look like? 

LUKE: Yeah, that's exactly the kind of scenario we're trying to address. So what we do is we do the same thing that Google SRE does with Google applications when they're going to go production. We have this thing, it's called a production and readiness review, that we do internally to Google, and we've adapted it to make something called Application Reliability Review for your Cloud application. So if we were to see your cloud application running on f1-micro, we would say, OK, there's a risk here. 

[LAUGHTER] 

MARK: There's a risk. 

LUKE: And people would say, well, what's the risk? Well, the risk is that your input traffic is unbounded. Do you have any idea of how much traffic you could get? No, I don't have any idea. OK, let's do some capacity planning and modeling and see how much traffic you could possibly get. Oh, OK, now I have an idea. OK, let's do some load testing and see if that instance is going to stand up to it. Oh, it's not. OK, let's try to develop some playbook some procedures. 

MARK: Two micro-instances. 

LUKE: Yeah, exactly. And ideally some automation to help your application automatically scale. The thing we noticed is that Google applications are designed to scale from the ground up. And we have a lot of infrastructure and practices and history in Google at building web-scale applications, so the SREs at Google have seen hundreds of these applications, but at most companies people are working on one, and it's their first and it's probably the only one they're going to deal with for the next couple years. 

So we have a lot of expertise that we can share, a lot of value I think we can give by just telling people about what they're maybe going to run into a little bit further down the road. 

MARK: Now I'm quite curious, obviously without naming names, and I've seen some blog posts on this particularly as well, but particular lessons that you've found working SRE, CRE for customers who are looking to come on board with Google Cloud Platform. What are some common pitfalls or stuff like that people kind of run into on a regular basis? 

LUKE: The best answer I can really give to that is there's this book called "The SRE Book." 

MARK: We might have mentioned it a few times 

LUKE: Exactly. It's basically a collection of all the stuff that SRE has found over time that threatens the reliability of your application. You know, SRE is really a set of principles that lead towards an iterative process of improving your liability over time. So, it kind of works for almost anything. And the core principles, just to say them again, are know what your SLOs are. And SLO is a Service Level Objective. So it's basically what's your expected uptime or what's your desired uptime. And then have a consequence for missing that, and we call that an error budget. So at Google a typical consequence is, if we don't meet our SLO, then we stop pushing new features and we use the development time instead to improve the reliability of our system. If you start with that, it starts to align incentives and then there's a lot more incentives you need to align between the developers and the operators and the system owners until you can get to a state where every time something b
 ad happens the response is a positive response that ensures that it won't happen again. 

FRANCESC: So I'm curious about how that exactly works when you are on CRE because do you actually tell the customer, oh no, you cannot push any more features? How does that happen? 

LUKE: That's a great question. So the very basic way that it works in SRE is you have a post-mortem. Right? So if something goes wrong, then you do a post-mortem which is a very structured approach to it. You come over the timeline of events and you establish some basic facts so everybody is in agreement. We use a blameless post-mortem culture, so if you broke something it's great that you raise your hand and tell people what you did exactly so that we can learn how to avoid it in the future. So we do blameless post-mortems, and then we go through what went wrong, what went well, and what we're going to do to prevent it happening again. And it basically turns into a list of action items. You can see how this will work to eventually squeeze reliability risks out of the system. 

But, in the very beginning, you don't want to just start waiting for things to go wrong and then fix them. So we can leapfrog ahead and do an application reliability review. We sit down and we look at your application and we use our expertise about what's broken in the past to try to guess what's going to break with your application in the future. And we go through five or six components of your application and try to identify what are the biggest risks in each one of these things. We'll color them red, orange, green in terms of risk level. We think about it in terms of the impact of the problem. Like, is it going to take your site completely down, or is it going to make it slow, or is it just going to be an inconvenience? 

And then the frequency. You know, is it likely to happen once a day, or once a month, or once every couple of years? So we can make a matrix and think about what's the potential impact of each risk, and then we'll give you a report and say this is what we think is the risk profile of your application. It might have two dozen things in it, right, and so for each one of these things we'll say, here's maybe what we would suggest you do. 

But then, really, you're in charge of your engineering team as a customer, and your building this application. So you can take this information. You can take it or leave it. And we fully understand that, right. So if you want to fix all those things, that's super great, and we will help you do it and we will advise you on the best way to do it. And we will help you connect with the right people at Google for, you know, feature requests or product gaps, right? 

And we'll also take action items on that list as well for ourselves to build things that will make it easier to support your application. Like, for example, if your application uses a database that is subject to some hotspotting because a sharded database like a data store or a Memcache service, we would consider building tools to identify hotspotting to make your application more reliable. So we both take action items off this list, and then the deal is, if we can get all the critical action items off the list, then we can kind of go into a next phase where we can operate it together with some shared context. 

So, now we're pretty sure that it's not going to crash for no reason at all. We're pretty sure we've squeezed out most of the predictable reasons. Let's agree that if we're faced with an outage situation that will jump on a bridge together and start debugging it together. That's kind of what we call shared operational fate, which is really the end state of a CRE engagement, and that's the state that we would love to get to because it's this state that most resembles the way that Google SRE teams work together to keep an application going. 

MARK: For CRE, it sounds like the difference between CRE and SRE is you seem to be doing more up front work than you would do in SRE. Is that correct? 

LUKE: I would say it's about the same. I mean, it's very interesting because the SRE team at Google does not support all Google products, right. One of the principles is scarcity, so you make sure that you support the most important ones, and then you give people an incentive to work on their own reliability so they can get to a point where it's kind of fair to engage with another operational team. Because you've done your homework and you've done all the basic things, right. 

So in Google SRE, usually the way you get access to an SRE team is you go through a readiness review and then you polish off all the known problems. And often it takes many months, like a year or 18 months, to really build trust with the SRE team that your development team is thinking about reliability enough to invest the SRE resources into it as well. In that regard, I think we're a little faster to market in CRE, but we try to use the same principles. 

MARK: OK, cool. All right, so there's actually quite a lot of similarity between SRE and CRE. Just really it's kind of just the end user more that anything else. 

LUKE: Yeah, so my job within the CRE team is I'm the customer lead for CRE. And so what I do is I go through all the practices of SRE and I try to figure out which ones actually apply only to Google and which ones are possible to generalize to all our customer base. 

FRANCESC: So to get ready to get SRE support at Google, I'm imagining that before you get the readiness review there's some kind of documentation that the teams can go through and basically pre-evaluate themselves before the actual review. Is there such a thing also externally? Like if someone, some of our customers, they're like, oh am I good enough? Like what are the best practices that they should be following? 

LUKE: The thing to start with is SLOs. That's really the tip of the spear. The SLO is really your contract with the rest of your organization about how reliable you expect your application to be. Right. And it's easy to say, but it's kind of hard to think about. So imagine a case where your application goes down for one minute but your CEO happens to be using it right at that minute. They're going to page the ops team and scream real loud. But in reality if you have an SLO that's below five nines, then that's probably OK. It's within the expected bounds. 

So you need to have agreement across your organization that you're not going to drop everything and focus on a problem that if its within bounds. And on the other hand, if the problem is without of bounds, then you need to be able to say, OK, we're going to have a consequence and we're going to change our behavior in a known way when we go out of bounds. So it's a lot easier to pre-negotiate this stuff because it takes a while to negotiate, you know-- has a lot to do with headcount and product release, feature velocity, and when things ship and go to market. So it's going to be a little different in every company I think. 

But at Google we use this concept of error budget, which basically says if your reliability is below your target and it looks like you're going to miss for the month, you stop releasing. So that helps to reallocate your development effort towards reliability, bugs, and stuff. I mean, everybody has a reliability backlog. You know, it's called p3 in your bug queue. 

MARK: Does that mean the SRE team will share SLOs or possibly SLAs with the customer once they're engaged? Is that how that works? So it's kind of like a group mentality, I guess. 

LUKE: That's right. And so what we're trying to do is distill down the interface between our two subsystems. We're running the infrastructure system basically, or the cloud computing platform, and you're running your application. And so we want to figure out what's a really good contract between our two groups about when we alert each other. So we want to try to think about your application as being somewhat of a black box. Usually we own a bunch of networking and infrastructure at the front end-- load balancing, external networking and stuff-- and then we have your application code which is in the middle. And then we have a lot of services, like storage or Pub/Sub, or something on the back end. 

So we try to think about, well, what would be the indicators that we could both observe at the same time at those boundaries that will tell us that the application is not performing well? And if we can agree on a few of those things-- let's say we'll look at load balancer error rate, and latency-- we can make a graph of that metric, and we can put it in a place where both of our teams can see it. So now we have what we call a shared state about what's going on, and if someone has a concern about something going wrong right, we can both look at that graph and see the same things. Oh, yeah, wait a minute. Errors are way, way out of bounds. Let's act. Or we can say errors are actually in bounds. Let's hold off for a second. We're not going to hit the red button page of the world. So it helps a lot to get into a rhythm of knowing what to expect from the other team's behavior over time, and it helps to build trust and it helps to build reliability. 

FRANCESC: So we talked a little bit about what happens when you are about to meet your SLO. What about when you are way above your SLO? Do we do something with that extra error budget? Or does that never-- 

LUKE: Yeah that's a great question. What we see a lot is people are being really conservative about their applications. At Google, one thing we've done that's very impressive is to focus on our feature velocity and how fast we can ship things and to be thoughtful about trading off how fast we can ship versus how reliable we're going to be. So often I see people erring on the side of being too cautious, you know, when they want to have only five minutes of downtime a year when it turns out, well, the internet has an hour and a half of downtime. And if you have a mobile application, you know you might be unconnected from the application for many hours or even days a year. People over optimize for reliability and miss the chance to ship features and get good velocity. So what we're trying to provide is really a way to manage your reliability according to your business goals. 

MARK: Cool. So, I was reading on the announcement blog post that was talking about CRE and everything like that, and it said on there, additional cost of zero dollars. What? 

LUKE: Well, that does two things that are very important. First of all, it sets the expectation that we're going to have to work together. So it doesn't actually make it easier to run your application reliably if you give me a suitcase of money. It doesn't actually help, right. The problems are often in the design of your service and does it have any features to auto-scale or to drop traffic when it's overloaded or to re-shard when it has a hot shard. I can't really solve those with a suitcase full of money. So what I really need from you is I need time with your engineering team. So the additional cost is actually zero dollars, but it's fairly heavy in terms of engineering investment. I want to work with the leaders of your services and be able to manage a to-do list with them, meet with them regularly, and be in constant communication. Because that's really what it takes to operate things reliably. 

The second thing it does to offer zero dollars additional cost is it gives us the ability to hand back the pagers if the service is too unreliable and if you're not basically holding up your end of the bargain. In Google we have this concept as well, and it's not because it's intended to be executed frequently. All we need to do is show that this is a dynamic that can play out. And it gives people a strong incentive to actually carry their end of the bargain because, really, what we're trying to do here is create a partnership. 

MARK: Cool. So like if you show up with like, here's the list of 12 things, and they're like, no, we're not going to do that. You're like, OK, we're not going to do our bit either. 

FRANCESC: So, we kept on saying the word customer, and we've interviewed some of them that are some of your CRE customers. We talked recently, episode 68, with The Home Depot. The Home Depot. Also we interviewed at some point Edward Wu from Niantic that built Pokemon Go. What other customers you can tell us about? 

LUKE: One that's very interesting is Pivotal. We've been working with Pivotal on their Cloud Foundry product, which is basically a way to build applications that can run on a private cloud or a public cloud with a lot of services for the developers. So the developer doesn't have to really think about where's there code going to run or what services can access. Their concept is, here's my code, run it on the cloud, I don't care how. Right, so that works really great because we have a cloud. They have a lot of software that's kind of between the developer and the cloud, and we're helping them to understand how that software is going to scale, how it's going to be reliable, how to monitor it on our cloud. They're working down a list of bugs right now, you know, of ways to make it more reliable. I think it's going to be-- 

And then the nice way that that impacts the marketplace is that it really scales our effort. We can't like talk to every single customer one on one. But if we work with Pivotal to make their Cloud Foundry software really reliable, then lots of customers can benefit from that and we don't have to explain the same concepts over and over and over again. 

MARK: So, we're getting a little bit close to time, but that's OK. So plans for the future for CRE. Where do you see this thing heading? 

LUKE: I'd like to work with our biggest customers first, the people who can really invest the most engineering effort with us, because I think we'll learn a lot that can be spread out to more customers. Over time, of course, SRE values software and automation as primary technique for getting things done. We're going to use our first engagements that are really person-to-person to learn use cases and failure modes, and then we're going to develop tools that will avoid those in the future. 

My plan is to work with like an order of tens of customers in the first year, and then order of hundreds the next year, thousands the year after that. So we'll get to the point where we have some impact and you're getting some value from our team even if you're not talking to us directly, and we'll have features show up in Google Cloud that are reliability features. 

MARK: All right. Well, we are running out of time, unfortunately. I'd love to talk to you for hours and hours on end, but is there anything we haven't mentioned or you want to plug, or you just think is super, super cool that people should hear about that we haven't had a chance to talk about? 

LUKE: One thing is that SRE as a concept is getting a lot of traction in the DevOps community. And we just had SRECon here in San Francisco, and it was awesome. There were hundreds of people here who are really into it, and they were all adding a lot of value and sharing a lot of ideas. So we want to be a conduit of that kind of information out to the world as well. And we'll be at Google Cloud Next in New York City and Seattle coming up with dates available Google Cloud Next's website. 

FRANCESC: We'll have links on the show notes. And I guess it's time to say goodbye. Thank you so much for coming and spending this time with us and letting us know so much about CRE. Hopefully looking forward to having you again sometime soon to tell us about how is it growing to hundreds and thousands of customers. 

LUKE: Yeah, definitely. We'll see you next year. 

MARK: See you then. 

LUKE: Thanks, Mark and Francesc. 

FRANCESC: Thanks so much to Luke for such an interesting interview. I've learned so much about how we interact with customers when we're building big stuff. Very, very cool. 

MARK: Yeah. Super happy to have Luke on the podcast. It's really interesting to hear about how we were engaging with customers, especially at enterprise level and the sort of support we're able to give them, which makes me super happy to see. 

FRANCESC: Yeah, it's basically, they're not our customers. They are like our partners on building cool stuff. 

MARK: I like that. 

FRANCESC: Different approach. I really like it. 

Cool. So I think it's time to go to our question of the week, and today the question of the week comes from again Rokesh, Rokesh Jankie. We answered one of his questions on episode 70 about protocol buffers, and as soon as I sent him an email saying, hey, your question has been answered, he was like, well I have another question. So, we're going to be answering that question now. 

And the question is, in many places they give you an SLA. They give you, oh we guarantee 99.9% of availability, but why not 100? Could they do it? 

MARK: In theory, you could have 100% availability if you never changed any code. In theory. 

FRANCESC: I actually do not believe that. 

MARK: Yeah, that is also true. 

FRANCESC: Even if you don't change any code, if your system is available through the internet, the internet is not available 100%. 

MARK: That's true. So I guess, in theory you could, but there's lots of stuff that can go wrong in the process. 

FRANCESC: So the interesting thing is that you could have a 100% SLA, Service Level Agreement, which means that if your service does not offer 100% availability, it means that they will somehow compensate for it. That is an SLA. 

MARK: That's true. 

FRANCESC: Which doesn't mean they will have 100% of availability because that is literally impossible. 

MARK: Yeah. As you said, stuff goes down, things break. But I think also it's to good point that you're going to want new features to come into your application or whatever it is that you happen to be building. And any change you make is risk. And there's nothing you can really do about that. 

FRANCESC: Yeah, we talked about this with Paul Newson, our dear Paul Newson on episode 59. So if you're interested in knowing more about this, that's definitely an episode that you might be interested in listening to. But I think the most interesting thing is what you were mentioning before about what is actually five nines or six nines or what? To start, five nines does not mean nine nine and five more nines, or nine nine dot and three nines. Because it is ambiguous. 

MARK: Five nines, 99.999%. 

FRANCESC: OK, so the two nines in the 99% already count. 

MARK: They're all nines. 

FRANCESC: Good, OK. You never know. 

MARK: And this goes to a good point, and Rokesh alluded to this in his question when he was like, what does it mean that Spanner isn't 100%? Spanner has five nines availability, so 99.999% availability. What does that mean for mission critical applications? And so you actually sit back and can actually sit down and look at the numbers Wikipedia has a great table on this, and we'll link it in the show notes. 

But, for example, five nines basically per year gives you five minutes and 26 seconds or 5.26 minutes of downtime. That's sort of what it means. Or, essentially 25 seconds per month, which is not a lot. And so the question then you have to get to yourself is like, what is the SLA of your application? Rokesh uses the term mission critical. What does that mean? Does your application have to be up 100% of the time? Some applications are like that, and that's certainly fair enough. But can your application handle five minutes of downtime, or could you put in say a caching layer or something like that to mitigate any downtime from your back-end systems, or allow for some functionality but not all? 

And I think those are the sort of questions that we need to be talking about when we build software. We can't just be sort of hand-wavy and say it must be up all the time because otherwise bad things happen. We have to sort of think back and say, software fails from the perspective that software fails, let's go back and talk to John Wilkes again because we can. 

FRANCESC: I was exactly thinking about that. The episode that we did with him where, basically, Borg and also Kubernetes are built with the whole idea of, software fails, everything fails. Let's build something that is kind of reliable on top of something that is not. 

MARK: Those are the questions that should be asked. It's pretty interesting. We actually break it down, though. You look at the nines availability. Like two nines, 99%, that's 3.65 days per year. 

FRANCESC: That starts to be a lot. I mean-- 

MARK: It does, but that's sort of like-- 

FRANCESC: I guess that I am not available that much as a person. 

MARK: That's seven hours a month. In some cases, that could actually be an OK SLA depending on what it is you're doing. 

FRANCESC: Yeah, absolutely. On the most available part, if you get nine nines, you get 31 milliseconds per year of off time. So basically, I wonder if anyone has enough probes, like so often to be-- 

MARK: To guarantee it. 

FRANCESC: Yeah like actually drop one of the probes, so it's like 31 milliseconds off. That is hard. 

MARK: I feel like you would drop TCP packets. If you had to check it that some packet on that IP stream would end up disappearing. Like oh that's our SLA done. 

FRANCESC: I guess the nine nines is basically, nine nines and 100, are basically the same thing, and they're both pretty much unachievable. If you have a service that offers nine nines, please let us know. We'd like to interview you. I think that is a very interesting set of requirements to achieve that availability. We would love to talk to you. 

MARK: And find out how you achieved it Absolutely. So, yeah, to Rokesh, I think, what is the requirements of your app? What are your SLAs? What do you need to be able to do? And what sort of failure rate can your stuff require? And that will tell you exactly what systems you can build on top of and also how quickly and how majorly you can change them while they're sort of running as well. 

FRANCESC: And that goes back to, as I said, the episode with Paul Newson where we talk about the difference between SLO, SLA, and actual availability. So I guess that answers the questions. 

MARK: I think so too. 

FRANCESC: I guess it's time to say goodbye. Before that, what are you up to? 

MARK: What am I up to? So, next week, East Coast Games Conference. We talked about that previously. And then I'll be off to Vector as well. After that, we're doing a fundraiser. Extra Life and Playcrafting Game Jam are doing some fun stuff for kids in hospitals. So we'll have two weekends of that, and that's on the 5th of May. And then again we have another fundraiser on the 13th. And then, after that, I'm pretty excited. I'm going to Sweden. I'm going to Nordic Games Conference. 

FRANCESC: Nice. 

MARK: So I'll be presenting there as well. And where are you off to? 

FRANCESC: So, by the time this episode comes out, I'll be probably at the airport waiting for my airplane to fly to China. 

MARK: Nice. 

FRANCESC: I'm going to Shanghai for GopherCon China, and I'm going to be meeting with some companies there. But for now I don't have any meet ups organized, which is fine because probably I will end up just attending some meet ups there. 

MARK: Nice. 

FRANCESC: Then, in May, I will be in New York for an Intel meeting, but I will be also speaking at the Google developer group with Brett. He will be speaking about cloud functions. I will be speaking about cloud and points and gRPC. So, basically it's a serverless day. It's going to be lots of fun. And also something that I wanted to mention is that last week I released a new episode of Just For Funk, and people are loving it. It's on the context package, and it got already like almost 5,000 views. So pretty excited about it. Go check it out if you are into that kind of thing. 

MARK: Sounds good. All right, Francesc. Well, thank you again for joining me for yet another episode. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: All right, and we'll see you all next week. 
{{< /transcript >}}