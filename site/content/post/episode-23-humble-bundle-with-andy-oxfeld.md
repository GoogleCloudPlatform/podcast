+++
audioDuration = "00:29:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.23.mp3"
audioSize = 42977562
categories = ["Humble Bundle", "Customer", "Gaming", "App Engine", "BigQuery"]
date = "2016-04-27T01:07:49Z"
description = "Andy Oxfeld, Engineering Manager, tells us all the details about how Humble Bundle runs on Google Cloud Platform."
draft = false
episodeNumber = 23
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Humble Bundle with Andy Oxfeld"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/ZCu4ZRhXRuy"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4gp4i5/episode_23_humble_bundle_with_andy_oxfeld/"
+++

Andy Oxfeld, Engineering Manager at Humble Bundle,
tells your hosts [Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) all the details
about how Google Cloud Platform powers [Humble Bundle](https://www.humblebundle.com/friends-of-nintendo-3ds-wiiu).
<!--more-->

##### About Andy

Andy Oxfeld manages the engineering department at Humble Bundle.
He's been with the company for four years and worked on almost
every part of our codebase at some point. Prior to being at Humble
Bundle, he worked at Electronic Arts for four years on games
such as Warhammer Online: Age of Reckoning.

##### Cool thing of the week

- An independent organization just ranked Google as the best cloud, beating Amazon [news](http://finance.yahoo.com/news/independent-organization-just-ranked-google-205459705.html)

##### Interviews

- Humble Bundle has raised over $70 Million for charity.
- [App Engine](https://cloud.google.com/appengine/) to handle spiky traffic.
- Codebase written in [Python](https://www.python.org/).
- [Google Cloud Datastore](https://cloud.google.com/datastore/) to store data.
- [Task Queues](https://cloud.google.com/appengine/docs/python/taskqueue/) to be able to retry tasks (payments) and to schedule events.
- [Memcache](https://cloud.google.com/appengine/docs/python/memcache/) to reduce latency and increase throughput.
- [Dedicated Memcache](https://cloud.google.com/appengine/docs/python/memcache/#Python_Configuring_memcache) for heavy users and more predictable performance.
- Best Practices for App Engine Memcache [article](https://cloud.google.com/appengine/articles/best-practices-for-app-engine-memcache).
- [Datastore Backups](https://cloud.google.com/appengine/docs/python/console/datastoreadmin#backup_and_restore_data) into a [Cloud Storage](https://cloud.google.com/storage/) bucket.
- [BigQuery](https://cloud.google.com/bigquery/what-is-bigquery) to analyze huge datasets in seconds.
- __Using only managed services removes their need for DevOps team__.
- [Google Cloud Storage](https://cloud.google.com/storage/docs/overview) to store static images.
- [Stackdriver](https://cloud.google.com/stackdriver/) for monitoring and alerts.
- [PubNub](https://www.pubnub.com/) for real time communication - we also discuss [Channels API](https://cloud.google.com/appengine/docs/python/channel/) and [Firebase](https://www.firebase.com/).
- Join [Humble Bundle](https://jobs.humblebundle.com/) and work with Google Cloud Platform!

##### Question of the week

Kubernetes 1.2 doesn't have a concept of schedule tasks, how do you handle them?

- Kubernetes jobs [docs](http://kubernetes.io/docs/user-guide/jobs/).
- [Cron jobs](https://en.wikipedia.org/wiki/Cron) on [Compute Engine](https://cloud.google.com/compute/).
- Scheduled tasks with Cron on App Engine [docs](https://cloud.google.com/appengine/docs/python/config/cron).

{{< transcript "FRANCESC: Hi, and welcome to episode number 23 of the Weekly Google Cloud Platform Podcast. I am Francesc Campo, and I'm here with my colleague, Mark Mandel. Hey, Mark. " >}}
MARK: Hey, Francesc. How you doing today?
FRANCESC: Very happy. Very excited about the very cool interview with Andy.
MARK: Yeah. Yeah, we've got a really nice interview today with a gentleman from Humble Bundle which is a website that I've been tracking for a long time over the years.
FRANCESC: And I'm slightly ashamed. I'm not really ashamed, but whatever. I actually did not know who they were, and I think I'm gonna start using them soon. 
MARK: Yeah, I think it's just to show that I play more games than you do. I think it's probably what it is. 
FRANCESC: I play Android games, yeah. Yeah, so that's actually going to be our main content of the week. We're gonna be talking with Andy Oxfeld which is engineering manager at Humble Bundle about how to use Google Cloud Platform.
MARK: Yeah, yeah, it's gonna be really cool. And then after that we have our "Question of the Week" where we're gonna be talking about Kubernetes one more time.
FRANCESC: Yeah. People like it. 
MARK: They do. They do really like it, but before we do that, I think you've got a really interesting cool "Thing of the Week" that you've managed to find. 
FRANCESC: Yeah, so that's actually something that I saw on Twitter a couple days ago, and I thought it was really interesting. It's a ranking done by a French organization that is completely independent, and I'm gonna brag about my accent now. I'm gonna say it's JDN which is (LuJeanAudunet). 
MARK: Oh, very nice. 
FRANCESC: Yeah, I'm very French. And they did a ranking about the different features of every single cloud provider that we have here in the United States, and guess who came up first. 
MARK: I don't know, maybe us? 
FRANCESC: Yeah. Yeah, and it is very cool, so we'll have the link on the show notes, and I think it's, like, "Yeah, we are the first on the general ranking." We are the first on every single ranking which is actually very interesting for us, too, 'cause it kind of shows what are the things we need to improve on, but also it shows if you are trying to decide which cloud you should go with, there's gonna be a lot of different things that you might be interested. You're gonna find them in this report, so definitely worth having a look. 
MARK: Yeah, so I mean, like, if you're looking for certain tradeoffs from different cloud providers, obviously us included, could be a really interesting read, or if you're sort of going, "Hey, I'd really like to use Google Cloud Platform, but I need to have something that sort of justifies the usage or like, helps me sort of make this argument," this sounds like a document that might be pretty handy for you. 
FRANCESC: Yeah. And also the little images that they created with the rankings, they're super cute, so that's something that it's always a bonus. Yeah. 
MARK: That definitely always helps. 
FRANCESC: It's very, very important. Cool. So I guess it's time to go and talk to Andy.
MARK: Yeah, let's talk about games. We are joined today by Andy Oxfeld from Humble Bundle. Thank you so much for joining us today, Andy. 
ANDY: Great to be here. 
MARK: So let's have a chat. First of all, like, let's talk about you. Who are you? What do you do? What's your background and stuff? 
ANDY: Yeah, so I'm an engineering manager at Humble Bundle, so I've been with the company for almost four years, and I've done, you know, a little bit of everything. You know, I've worked on, you know, pretty much every part of the code base at some point, and I originally had my background in the gaming industry. I worked at Electronic Arts for a number of years before coming to Humble Bundle, so even though I'm not working on games any more, I have a lot of familiarity, and that helps a lot with, you know, being our mission as a company being to support game developers. 
MARK: Cool. So obviously we talked just a little bit there about games. Tell us what Humble Bundle is, like, its history. It's changed a bit over the last few years, but I was definitely around when it first came out, and I was really excited by it, so tell us a little bit about what it is. 
ANDY: So Humble Bundle was actually started by game developers, so our two founders, Jeff and John, were originally working at Wolfire Games, and they were creating a ninja rabbit fighting game called "Overgrowth." That company still exists, and they're actually, you know, doing really awesome things there, but Humble Bundle came out of a promotion that Wolfire Games was doing, and you know, they basically, you know, wanted to create kind of the most humble promotion, hence the name. And you know, once the decided, you know, what would be more humble than being, you know, cross platform, completely DRM free, and you know, letting the customer pay whatever they want, and so kind of, you know, Humble Bundle kind of came from a promotion between, you know, included, you know, games from Wolfire Games as well as a few other developers, and you know, put them together into the first Humble Bundle, and you know, so wildly successful that, you know, our founders realized, you know, "We should try this again," and the second one was also wildly successful, and so they decided to, you know, spin it off into its own company, and since then, you know, really the mission of Humble Bundle has been to, you know, support game developers and you know, create cool promotions for the community. 
MARK: And not only, like, did it include pay what you want, but also it included--Like, you could do donations to charity and then also do that sort of stuff as well. 
ANDY: Absolutely. So charity's always been an important part of our mission, and every product we've created has, you know, some way in which we support charity, and today we've raised more than 70 million dollars for charity, and that's something we're really proud of and something that we're gonna continue to do and you know, really take to heart. 
MARK: Nice. Excellent. Now in the beginning, I know it was very sort of one-offish. Like, you sort of had these one promotions and stuff like that, though I know things are a little bit different now. Do you want to talk about, like, how's that different now to versus then? 
ANDY: Yeah, so you know, as we kind of grew and scaled up, you know, we started from--You know, a bundle would come out every few months. You know, we'd have pretty long gaps where there was, you know, almost nothing on our website. You know, existing customers could come to it to download the things they'd purchased, but otherwise, you know, there's nothing to do there, and it was really a big deal. I remember the first time that we had back-to-back bundles, you know, where it was, like, really like, "Oh, we've never tried this before. This is crazy." You know, it was years ago, so now it seems kind of the norm, so now we're at the point we have multiple bundles running at the same time, and we have other products that we've created as well, so you know, now there's always tons of things going on on our website, but yeah. Back when we were, you know, kind of getting started, things were definitely, you know, a lot more kind of sparse and you know, a lot less regular than they are now. 
FRANCESC: So when you're saying that you were very successful at the beginning, like, every single bundle was a wild success. How many people accessing the website, more or less, can we talk about. 
ANDY: In terms of actual numbers, you know, I couldn't say, like, numbers actually accessing, but the--I do know that, you know, that we were regularly seeing, you know, up to a million purchasers for our bundles and you know, continue to see numbers like that, and you know, thinking about how, you know--You know, I'm sure many, many people always visit it and don't purchase, so I think we're almost definitely looking at millions of visits, but I couldn't give you the exact number. 
FRANCESC: Nice. 
MARK: It's actually really cool if you go on the website. They do have the stats at the bottom of the page...
FRANCESC: What?
MARK: ...that show you, like, total payments split by operating system, number of purchases. I've been a longtime Linux user, so I still go back on a regular basis and be like, "Hey, are Linux users paying more than Windows users?" And stuff like that, and actually look at the numbers. So yeah, a lot of that stuff really, like, exists, and like, they highlight top contributors and stuff like that. It's a pretty awesome thing that you're doing. 
ANDY: Thanks. 
MARK: So you said you were dealing with sort of, like, millions and millions of--Well, millions at the very least--of people buying products. Let's talk a little bit about the technology that powers Humble Bundle and what's going on there. I believe you people are using GCP.
ANDY: Mm-hmm. That's correct. So yeah, we--We've been using App Engine since day one, and you know, over time we've continued to, you know, expand our usage of Google Cloud Platform offerings, and we're now using, you know, Google Cloud Storage. We're using BigQuery, and you know, starting to use Google Compute Engine as well, and you know, those have definitely been critical to our success. 
FRANCESC: Very cool. So could you tell us a little bit more? Why did you choose App Engine at the beginning? 
ANDY: So we knew that our, as you mentioned, our traffic was gonna be very spiky, so the--You know, the automatic scaling of App Engine was absolutely crucial for our success, and you know, I don't think the company, you know, really could've worked without it, so the fact that--You know, so it was basically--You know, without automatic scaling, you know, we could have had--You know, if we had a fixed number of servers, there's two different ways it could've gone. So we could've either had too few servers, and you know, customers would've come to our website, and you know, things would've, you know, been slow or wouldn't have worked, and you know, customers wouldn't have been able to make all their purchases they were able to make. Or we would've had enough servers to meet the demand, but that would mean that, you know, as soon as--You know, really the first few hours from a bundle have always been by far when most of the traffic comes in, but the bundle runs for two weeks, and by the end it's more kind of a trickle of purchases compared to the beginning. So if we were paying for, you know, all the servers that we needed to support those initial few hours at the end of the bundle, our costs would've been so high that there's no way the company could have been profitable. So the fact that App Engine, you know, without any thought on our part was just able to, you know, scale up and scale down as we needed, and we didn't even have to think about it, you know, especially, you know, when the company was really small and we didn't have, you know, a big team, you know, it just allowed us to get started and just focus on, you know, selling games and you know, doing cool promotions and not worrying about, you know, all the little nitty-gritty details of the tech. 
FRANCESC: Nice. So knowing that Humble Bundle has been out there for quite a long time, I don't think you're using Go, so what language are you using?
ANDY: Yeah, so we're using Python. That was, you know--If I were to do it all again, I actually might consider using Go. I do like a lot of things about Go, but yeah, at this point I think we're pretty much in the--We have so much Python code written, and I think that's what we're gonna be. 
FRANCESC: Very nice. Could you tell us a little bit more about what parts of App Engine you're using? Like, App Engine is basically identical system to a bunch of things inside. 
ANDY: Mm-hmm. Yep. So we definitely make extensive use of the Cloud Datastore, so the, you know, performance and scalability of the Datastore still amazes me to this day, and it's still almost, like, magic to me that this thing is able to work. So you know, I think we've over time become--You know, I kind of describe us as, like, data store wizards, and like, we know the ins and outs of, like, every thing you can do with it, and like, every trick, and you know, how to, you know, whether both from, like, how to, you know, make, you know, things really fast and how to, you know, keep costs down, stuff like that, so that's definitely a really big part of our platform. Task Queues are also really important to us, so we use Task Queues, but the most crucial thing that goes through is our payment processing. It's, you know, completely based on Task Queues, but we also use tasks for, you know, different things like, you know, when we have, you know, something that we want to schedule, So for example, you know, we often will at, like, 10:00 a.m. every day add new products on to our store, and we want to schedule it to be at 10:00 a.m.. We used to have to have someone, you know, that was there and had to push a button, but now, you know, with Task Queues, we can just, you know, schedule an event, and we just know it's gonna run, and that's especially important 'cause, you know, since we, you know, sell international products, some times, you know, we have so many other time zones such that people used to have to be awake at, like, 1:00 a.m. in the morning, our time zone to, you know, launch something in another time zone, but now we just schedule it, and we know it's gonna work, and it just goes. 
MARK: So you're able to sort of leverage the ability of Task Queues to retry if something fails, and so you're like, "I know this is gonna work at some point. This is gonna be fine." 
ANDY: Absolutely. 
FRANCESC: Very cool. That's actually very interesting the fact that you're using Task Queues for the payment system. Like, payments are a pretty tricky thing to do. Could you tell us a little bit more about how you manage that exactly? And also what are you using for the payments themselves?
ANDY: Yeah, so the real thing we use it for is IPN handling. So we don't actually do the direct payment processing ourselves. We use PayPal. We use Amazon. We use Stripe, and we use Coinbase and a couple others, so you know, we--Early on, you know, we found that, you know, so if we receive an IPN from one of them--So IPN stands for "Instant Payment Notification," and you know, it's the main way in which, you know, a company like PayPal kind of communicates. You know, like, it's almost like an API they use to communicate with us, and so you know, some times, you know, if we need the, you know, kind of reliability of knowing, you know, when an IPN comes in, that it's always gonna be processed. So what we do now is when an IPN, you know, when we sense or receive a request from PayPal saying, "Hey, here's a--You know, here's some data we need you to process." What we do is we immediately write an entity to the Datastore containing the contents of that IPN, and then we schedule a task to process that. And so we know that, you know, no matter what goes wrong, you know, whether it's some times, you know, an engineer on our team makes a mistake, and you know, there's a bug in the code and it crashes, we know that we're not gonna lose that data, and you know, we're gonna--You know, we can look at our logs and figure out exactly what went wrong. You fix the mistake and retry the task, and you know, ultimately, you know, we can be--We can be, you know, confident that it's gonna be processed, and that's really important for us since, you know, we have really complicated accounting since a big part of what we actually do is, you know, moving money to different places, so you know, we need to make sure that our, you know, developers, charities, customers can trust us to make sure that, you know, every penny that we receive is gonna go to the right place. 
MARK: Yeah, that seems really important, especially with the pay what you want model, and the customers can choose, like, which companies get what and like, what charities get what and its percentages, so yeah. It's not as simple as, "Oh, that thing's $10 and that thing's $5, and we're gonna receive everything."
ANDY: Exactly. 
FRANCESC: Very cool. So you mentioned that you're using App Engine. You're using Datastore. You're using Task Queues. What else are you using from App Engine? 
ANDY: Yeah, let's see. We use Memcache, so Memcache is, you know, incredibly important for performance for us since, you know, we want our site to load quickly, and Memcache also helps us cut down on our costs since, you know, accessing the Datastore directly costs more money than using Memcache. We actually recently switched to dedicated Memcache which we found actually--Despite the fact that it costs money, in the end it actually brought down our costs because of the fact that it--You know, I think it actually, you know, decreased other usages. You know, (front end instance hours) and things like that to the point where it almost certainly was, you know, saves us more money than we actually spent on it, so that was definitely a big win, and you know, not only that, but of course makes our site even faster since we're able to store more data in the cache. 
MARK: So you were actually using the shared Memcache instance for a long time?
ANDY: We were using that for quite a long time. 
MARK: And so you'd get kicked out of that. Every so often, you'd get your data kicked out. 
ANDY: Yeah, and you know, the other thing about the shared is that, you know, over time it kind of varies how much you have, so there's times when your performance is better, and times when it's worse. But with dedicated Memcache, it's very predictable. 
MARK: Very, very cool. Now I think you also said you started using BigQuery a bit as well. Talk us a little bit through what made you make that decision and what you're doing with it. 
ANDY: Yeah, so we originally started using BigQuery for our accounting system, so you know, when we used to, you know, every month--So we paid the developers and charities that sell throughout. So you know, we cut them a check every month for, you know, how ever much that we owe them, and then we used to, you know, have this, like, complicated map job essentially where we would go over every order in the Datastore, and then, you know, we realized that over time that that was not kind of scaling to our needs, and so what we now do is we--You know, we leverage the automated backup technology that App Engine provides to backup from--I think it uses kind of Google Cloud Storage as an intermediary, but in the end it ends up in BigQuery, and so once we have all our order data in BigQuery, we're able to do, you know, really powerful analysis on our order data in seconds, and so we have, you know, kind of complicated setup of, you know, BigQuery queries that we've essentially built over time that we kind of run and put together, and you know, basically now it's a fairly automated process by which, you know, is now actually every day it just kind of spits out, "Okay, well, here's how much money everyone that sells through you is owed." We don't really have to worry about--You know, it used to take, you know, hours and hours, and now it's seconds, so that's kind of been a really, really great boon for us. 
FRANCESC: Very nice. So then what you said is that you're actually dumping the whole Datastore to Cloud storage, and then uploading it back to BigQuery so you can do all your queries. Nice. 
ANDY: Yeah, and so we also--In addition to that, we also have been taking advantage of streaming in BigQuery, so we also stream our data as well, and we like to use both because, you know, we can kind of check for discrepancies and just, you know, just be 100% confident that, you know, every order is, you know, represented at BigQuery. 
MARK: That's pretty cool. So basically you've taken advantage of sort of two of our big managed, like, services, so I'm guessing you still don't have much of an ops team at the company. You're (inaudible).
ANDY: So we have no ops team at all. We're completely able to rely on, you know, the Cloud Platform, and again, that's, you know, wonderful 'cause just to be honest, none of us want to do ops, you know? You know, not what our background's in, and so yeah. You know, it lets us focus on writing code. 
FRANCESC: There's a very good point. So what else do you use for--So you mentioned Cloud Storage. You use it for a temporary backup for Datastore. Do you use it for something else like your images or some binaries or whatever?
ANDY: Yep, so we use it--Our other big thing is serving images as you mentioned, so we've actually, you know, started building a kind of suite of internal tools around it that allows--Okay, so we have a team internally that, you know, kind of makes sure, you know, all the image assets for the various promotions we put together are in the right place, so you know, they'll upload all the assets into Google Cloud Storage, and so essentially, you know, what our engineering team has built is essentially kind of like a CMS, like a content management system for putting bundles together that another team at our company uses to actually put the bundles together, and so Google Cloud Storage, you know, allows us to do this 'cause, you know, originally, you know, when we were kind of tiny and when our engineers used to build every, you know, bundle by hand, and then that, you know, every time we wanted to, you know, change what bundle's active, you know, we had to deploy the site. But now that, you know, we're able to use Google Cloud Storage to host the images, we can just upload the images to Google Cloud Storage, reference the images from the live site, and not have to, like, deploy stuff. That's been a really big win for us as well. 
FRANCESC: Very cool. So since you mentioned deploying, how often do you deploy? 
ANDY: Probably, like, ten times a day, sometimes more. 
FRANCESC: Nice. 
MARK: Wow. Wow, is that actually code deployment or just changes to the database or both? 
ANDY: Code deployments. 
FRANCESC: How many modules do you have, or it's just, like, one big module?
ANDY: So we have almost--Like, probably 95% of our code base is in one module, and then we have a few other kind of tinier modules. Kind of the--The most notable one--So we've built an uploader which uses our CDN which is a separate company does that, so we've built an uploader that--The uploader does run in App Engine, then so that is a separate module that, you know, it's kind of a very isolated kind of problem we wanted to solve, and so that's able to kind of live separately and use different technologies which is nice. 
MARK: Do you store the binaries for the games, or is that done by third party? What's the (inaudible)?
ANDY: So we do store the binaries, and that's what the CDN does, and that's what this kind of uploader module does is uploads the binaries to our CDN.
MARK: So I'm curious. Like, what would you consider probably the biggest challenge you've encountered when building Humble Bundle working with Google Cloud Platform? What's been sort of the trickiest problem that you've come across?
ANDY: Yeah, definitely scalability, although App Engine's tools definitely provide solutions to that. You know, we've--It comes down to, you know, often we'll write our code, kind of have, you know, problem one is always just get the code working. Then so for example, when we built the Humble store which is a bit of a more traditional storefront that's unlike our bundles which are pay what you want, the Humble store is fixed-price sales. When we first built that, we kind of put it together in just a couple weeks, and then, you know, at the time, we only had ten games on it, so the original solution we built for it was not scalable at all. We were actually dumping, you know, the entire inventory directly to the browser, so you know, at first it loaded pretty fast, and you know, we hit 50 games, it was starting to be a little slower. Once we had 100 games on the store, you know, the store was taking about ten seconds to load, and we realized, you know, we were gonna have to, you know, use a better approach, and so you know, we kind of looked at the technology's App Engine provided, and we were able to leverage Task Queues and Memcache and you know, build a more sophisticated system that now we kind of, you know, do a, you know, much smarter approach where we only send, you know, kind of the games that the browser needs to know about, and so you know, now we have thousands and thousands of games on our store, and you know, the store loads very fast. 
FRANCESC: Cool. And something that our customers very often wonder is how do you monitor all these systems? 
ANDY: So yeah, we have a number of ways we do that. So we have a bunch of things we kind of built internally on top of the log system in App Engine, so we have, you know, (chron) jobs that, you know, run, you know, every few minutes that check the logs for, you know, look for exceptions and stuff like that. And if they're above a certain threshold, they'll actually, like, ping our phones, occasionally in the middle of the night. But you know, lets us know when things go wrong, and we also have, you know, kind of dashboards that we look at. You know, some of which we build by hand. I actually check our App Engine usage every day just to, you know, make sure if our numbers are going too high, you know, in case, you know, an engineer accidentally deploys some code that's, you know, doing tons and tons of Datastore reads that we don't want. That way we catch it before, you know, our bill ends up going too high. More recently we've been starting to look in to some of the new stack driver things, so we're just kind of starting to wrap our heads around that and see how we can take advantage of that, but we've already--We set up a few kind of custom metrics, and we're kind of looking at the dashboards there and starting to see, and it's definitely really exciting technology, and we're just starting to figure out how we can use it. 
FRANCESC: Cool. Yeah, I was totally thinking about Stackdriver when you said it's like, "Yeah, it pings me in the middle of the night." We can do that as a service. 
MARK: Midnight wakeup calls as a service. I like it. 
FRANCESC: Yeah. Cool. So could you mention--You already talked about what were the hardest things. What about the best thing? Like, what is the moment where you said, "Wow, it's cool to be running on the Cloud?" 
ANDY: Yeah, so I mean, there's definitely a number of those. I mean, it's really cool when, you know, when we launch a bundle, and you just--You know, as you mentioned, you know, there's a live counter of, you know, how many people are, you know, kind of purchasing at the bottom, and then, you know, just seeing, like, all these people coming in, and you know, not--And thinking about just how many requests are being handled and the fact that we didn't have to worry about that is, you know, just an amazing thing. 'Cause, you know, it's also, you know, really satisfying, you know, when we've done, you know, some cool optimization tasks we've done that have, you know, found ways of, you know, making our site faster. You know, it's really cool when, you know, when--You know, some times we've had pages that, you know, are taking a little longer to load, and we've realized, "Oh, hey, if we use the Datastore in this different way, or if we add some Memcache on top of this," and we get it down to, like, you know, 100 milliseconds, so those have been cool. 
FRANCESC: Very nice. I have a question that is, like, super technical that I'm very curious about how you're doing this. So I'm looking at the Humble Bundle webpage right now, and I can see the bundle sold. And I just noticed that it changes. So are you using Web Circuits, Web Circuits with App Engine, how does that work? 
ANDY: So we're actually using PubNub for that, so there's a startup called PubNub that essentially provides, like, a kind of PubSub style thing where you can basically, you know, push notifications from the server side to the browser, and their technology makes that really easy to do. 
MARK: Cool. 
FRANCESC: Yeah, very interesting. 'Cause I know that we have some--There's a--I think I mentioned socket APS? 
ANDY: Channels. 
FRANCESC: Channels API. I have not used them much, but I was very curious about it. 
ANDY: Yeah, we haven't actually looked too much into that either, but that does--I do think it is probably pretty similar to the service PubNub provides. 
FRANCESC: I was in between that or Firebase, so yeah. 
MARK: Yeah, yeah. Excellent. Cool. Is there any thing we haven't talked about but you'd like to highlight or you think is particularly interesting about what's going on behind the scenes at Humble Bundle? 
ANDY: Mm-hmm. Well, one thing I do want to highlight is that we are hiring software engineers, so you know, our website is Jobs.HumbleBundle.com, and we definitely encourage anyone interested to check it out. And you know, having experience at Google Cloud Platform is definitely a big plus for us, so yeah. 
FRANCESC: Yeah, if anyone ends up applying to Humble Bundle because of this podcast, I'd love to know. 
MARK: Yeah, definitely. 
FRANCESC: 'Cause I feel that maybe they have referral bonus or something. 
MARK: Maybe. I think the other big question is are you a PC or a console gamer? 
ANDY: I'm a PC gamer, so Star Craft II is, you know, for many years been my weapon of choice, and I'm in master's league, so yep. You know, we definitely at Humble Bundle have a mix. We have some hardcore PC gamers, and we have some hardcore console gamers, but I'm definitely a PC gamer. 
FRANCESC: Cool. I think we should go visit them at their office one day. 
ANDY: You guys are welcome. Absolutely. Any day. 
FRANCESC: Cool. Well, thanks so much for taking the time to come by the office and talk to us today. 
ANDY: Absolutely. Great to be here. Thanks for having me. 
MARK: Thanks so much. 
FRANCESC: Cool, so thanks again to Andy for such an interesting conversation. I really learned a lot about how they use the Google Cloud Platform, but also I learned a lot about cool things like they actually are very active on (inaudible).
MARK: Yeah. No, Humble Bundle's a really interesting product just from a business perspective if nothing else as well as sort of the stuff they've been doing for selling games and indie games and all sorts of good stuff. It's a project I've tracked for a really long time. 
FRANCESC: Yeah, I'm not sure buying more games is a very good idea for me right now 'cause--
MARK: You can never have enough games. Ever. 
FRANCESC: Yeah, I don't have enough time either, so I don't know. It's a tradeoff to be down in there. 
MARK: Absolutely.
FRANCESC: Cool. So let's go with the "Question of the Week" which is, as we said before, about Kubernetes, and it came through Google+ from one of our previous interviewees. 
MARK: Yes, and very active commenter. 
FRANCESC: Very, very active. Hi, (Haren). We know you're hearing when you're listening to us. 
MARK: So (Haren) sent us a really cool question, one that I've definitely heard before. A discussion around the fact that Kubernetes 1.2 doesn't have any idea of (chron). So if you want to, say, set up a scheduled task that does something on a regular basis, say every once a day or once an hour, something like that, Kubernetes doesn't have any thing built in, so how do you end up doing that?
FRANCESC: Yeah, so I guess that is important to mention that. It's not part of Kubernetes as 1.2, but it's planned to be released with 1.3. 
MARK: Yes. 
FRANCESC: So yeah, what do you do then? 
MARK: So I think you have a couple of options there. One of maybe--Maybe the most basic one is that you can set up a (chron) just like, on like a GC instance, one of the nodes on Kubernetes, just using standard Linux (chron), you know, running the commands and doing that stuff and to set up a job. Now actually, I'll backtrack for a minute and say Kubernetes does have a concept of jobs, so if you have a one-off task or one-off process you want to run, have it be managed by Kubernetes, make sure it gets finished, that sort of stuff. Jobs are definitely the thing you need to look at. But what you'd want to do is you'd want to fire off that job on a regular basis, so--
FRANCESC: Yeah. So jobs--I'd say jobs is more like things like map reviews and stuff like that, where you have, like, "These are--This needs to be processed at some point. Just do it. Cool."
MARK: Yes. Yeah, exactly. 
FRANCESC: Yeah, so you're saying that basically you could start one of those jobs through a cold (dump) from an instance, a GCE instance, running (chron). 
MARK: Yep, running (chron), that would work. That would be okay. But there's actually nothing stopping you from using the (chron ability) within App Engine. 
FRANCESC: I actually like that much better. 
MARK: I like this much better too. Obviously then, it's a managed service. You absolutely know, like, it's never gonna, like, go down. Like, if that GCE instance died in a ball of fire, that would be bad, and you may not know or you need monitoring. But you know, Kubernetes has an API, so you can set it up so that, you know, you can fire off a job using the API from App Engine, and then you can probably feel a whole lot happier about it that it's happening and it's always gonna happen at the time it's meant to happen. I think that's my favorite. 
FRANCESC: Yeah, also the thing that I like about this solution is that it's--So (chron) on App Engine is based on Task Queues which means that if for any reason the request that you're sending fails, it will retry it.
MARK: Yeah. 
FRANCESC: So it's also a bonus. You're basically just winning there, and I think it even comes with an exponential (inaudible) and all those really fancy things if you need to. So it's very easy to set up, and it's very reliable. 
MARK: Yeah. Yeah, absolutely. So I think that's--That's definitely the way I'd go, especially if, you know, obviously you're running on Google Cloud Platform, I think that's an easy solution. And you know, with the scale to zero of the extended App Engine, you're not paying for very much either. 
FRANCESC: Yep. Cool. Well, before we finish with this amazing episode, why don't you tell us a little bit about what you're gonna be doing soon. 
MARK: So this got said in the last episode as well, but I will be in Kentucky at the end of next week. I will be seeing VectorConf talking about games in the Cloud doing a little round table.
FRANCESC: And I think that when you say "next week," it's this week 'cause--
MARK: It is this week. 
FRANCESC: It is this week. 
MARK: It is this week. You're right. 
FRANCESC: It is, yeah. Yeah, we're recording--For once we're actually recording with days in advance. It's crazy. 
MARK: Days in advance, yeah. So this week I will be in Kentucky. Yeah, so I'll be at VectorConf talking about games in the Cloud, and then after that I will be at the Louisville GDG talking about Kubernetes. I know you're going on a little travel as well. 
FRANCESC: Yeah, I'm gonna be in Budapest, Hungary. It's gonna be pretty awesome. It's gonna be for CraftConf, and I'm gonna be running a Go workshop at CraftConf. There's gonna be many other people, very cool people like Kelsey Hightower. He's gonna be doing a Kubernetes workshop. I know that (Athier), he's gonna be there talking about distributed systems. Jesse (Freizall's) gonna be there talking about--
MARK: Sounds like fun. 
FRANCESC: Yeah. Sounds like a lot of really fun people that I want to hang out with and learn from, so that's gonna be very fun. 
MARK: And I believe it also went live recently, you're gonna be speaking at Google I/O? 
FRANCESC: Gonna be speaking at Google I/O, yeah, pretty excited about that. More work, so yeah. Google I/O, it's gonna be in Mountain View this year. 
MARK: Yep. 
FRANCESC: It's gonna be from May 18th to May 20th. 
MARK: Yep. 
FRANCESC: And yeah, I'm gonna be talking about Cloud Spin. 
MARK: Excellent. I'll be there as well. I'll be talking about multiplayer games using Firebase. 
FRANCESC: Yeah, so--And we will actually be somewhere hanging out around there, so we'll give you more details on exactly how it is going to work, but if you're planning on attending Google I/O, let us know and say "hi."
MARK: Yeah. We'd love to say "hi." 
FRANCESC: Cool. Well, thank you again, Mark, for joining me this week, and thank you all the listeners for joining us. 
MARK: Absolutely. Great to have everyone, and don't forget, you know, you want to send us Questions of the Week or things that are cool, please do so. We love to hear from you all. 
FRANCESC: Awesome. Talk to you next week.
MARK: See you next week.
{{< /transcript >}}