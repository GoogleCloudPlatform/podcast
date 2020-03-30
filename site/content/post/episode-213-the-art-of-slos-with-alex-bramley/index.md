+++
audioDuration = "00:36:18"
audioFile = "Google.Cloud.Platform.Podcast.Episode.213.mp3"
audioSize = 52281734
categories = ["SLO", "SLI", "SRE", "CRE"]
date = "2020-03-25"
description = "Today on the podcast, Jon Foust is back with Mark as we talk about SLOs and the importance of measuring service reliability with Alex Bramley."
draft = false
episodeNumber = 213
hosts = ["Jon Foust", "Mark Mirchandani"]
title = "The Art of SLOs with Alex Bramley"
image="/post/episode-213-the-art-of-slos-with-alex-bramley/images/hero/hero-EP-213.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/forrfw/episode_213_the_art_of_slos_with_alex_bramley/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Today on the podcast, [Jon Foust](https://twitter.com/syntxerror1) is back with [Mark Mirchandani](https://twitter.com/markmirch) as we talk about SLOs and the importance of measuring service reliability with Alex Bramley. As a member of the Google SRE team, Alex and his coworkers help customers optimally run their services on Google Cloud. They collaborate with the client, weighing client needs and user needs to develop a plan that is affordable, efficient, and has the highest reliability for the user. Recently, they've been working to automate functions such as detection of outages, so that Google and the customer can work together quickly to get everything working smoothly again. 

Later, Alex, describes the steps developers go through at his workshop, The Art of SLOs, which was designed to help companies measure and improve reliability. At this workshop, attendees are encouraged to set SLO targets and error budgets. They are given theoretical reliability problems to solve, allowing them to practice without the added pressure of messy, real-world problems. The Art of SLOs helps developers understand what measurements are beneficial and why and the best way to implement projects that can take those measurements accurately. Alex was able to make the materials for the workshop free online!

<!--more-->

##### Alex Bramley

[Alex Bramley](https://cre.page.link/art-of-slos-help) joined Google in January 2010 as the first Mobile SRE in London, after IBM bought the [startup he enjoyed working for](https://www.software.ac.uk/blog/2016-09-30-heroes-software-engineering-men-and-women-transitive) and made it much less fun. He spent around 7½ years in various reincarnations of Mobile/Android/Play SRE, looking after the infrastructure that makes phones smart, keeps them up to date, and provides them with countless distracting apps. 

CRE offered an interesting opportunity to do something different and learn from a bunch of very smart senior people, and Alex has not regretted taking the leap into the unknown. Much of his time recently has been spent rethinking how people teach customers, partners and the general public about SLOs. He helped create the Coursera course on [measuring and managing reliability](https://cre.page.link/coursera) and developed what became the Art of SLOs for [Liz Fong-Jones](http://twitter.com/lizthegrey) to deliver with other Google SREs at [SREcon EMEA'18](https://www.usenix.org/conference/srecon18europe/presentation/fong-jones-0).

Alex works four days a week so he can (suffer) enjoy looking after his children on Wednesdays, listen to [cheerful music](https://www.mixcloud.com/kleinerbrain/luna-cs-mirror-mix/), and waste a [lot](http://www.zachtronics.com/) [of](https://www.egosoft.com/games/x4/info_en.php) [time](https://www.feed-the-beast.com/) [playing](http://www.factorio.com/) [computer](https://www.klei.com/games/oxygen-not-included) [games](https://www.zelda.com/breath-of-the-wild/) and occasionally [writing code](http://github.com/fluffle/).

##### Cool things of the week

* Postponing Google Cloud Next ’20: Digital Connect [blog](https://cloud.google.com/blog/topics/inside-google-cloud/postponing-google-cloud-next20-digital-connect)
* New research: How effective is basic account hygiene at preventing hijacking [blog](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html)
* Simplified global game management: Introducing Game Servers [blog](https://cloud.google.com/blog/products/gaming/introducing-google-cloud-game-servers)

##### Interview

* The Art of SLOs [site](https://cre.page.link/art-of-slos)
* CRE Life Lessons [blog](https://cloud.google.com/blog/topics/cre-life-lessons)
* Putting customers first with SLIs and SLOs [blog](https://medium.com/the-telegraph-engineering/putting-customers-first-with-slis-and-slos-15352f9b6cbc)
* Putting customers first with SLIs and SLOs (Part 2) [blog](https://medium.com/the-telegraph-engineering/putting-customers-first-with-slis-and-slos-part-2-6b5c2452aecd)
* Measuring and Managing Reliability [course](https://cre.page.link/coursera)
* Site Reliability Engineering [books](https://landing.google.com/sre/books/)

##### Question of the week

How do I get started with GCGS? [docs](https://cloud.google.com/game-servers/docs)

* Google for Games Developer Summit Keynote [video](https://www.youtube.com/watch?v=2haNNRU1Gxs)
* Google for Games Developer Summit Playlists [videos](https://www.youtube.com/user/GoogleDevelopers/playlists?view=50&sort=dd&shelf_id=88)
     
##### Where can you find us next?

Jon will be working on an Open Match sample project for the developer community.

Mark will be making more videos like [Error Reporting and error logging - Stack Doctor](https://www.youtube.com/watch?v=wcEL6ES0dAI).

{{< transcript "[MUSIC PLAYING] MARK: Hello, everyone, and welcome to episode 213 of the weekly Google Cloud Platform podcast. As always, I'm Mark, and I'm here with my colleague, John. Hey, John. How you doing?" >}}

JOHN: I'm doing great. How about you? 

MARK: I've been doing well, working from home a lot. So I have spent maybe more time than I care to admit on my Switch in the afternoons playing quite a good variety of games. 

JOHN: It's actually kind of funny because I've found that I have more time to play Switch, but actually I get more work done at home now than I did when I was actually going into the office. 

MARK: Oh, that's a great balance to have. 

JOHN: I'm just happy that I'm able to get back into playing some games. Even though my workday seem to be a little bit longer-- that's because of the constant breaks throughout the day-- I've been managing pretty well. 

MARK: Yeah, I think we all kind of have to find what style works for us, especially as a lot of people transition to working from home. Awesome. So tell us who we're going to be talking to you today. 

JOHN: This week, we're going to be talking to a Googler, Alex Bramley, who is a Customer Reliability Engineer. And we're going to be talking to him about his workshop, The Art of SLOs. And he'll give us little tidbits and tips to being successful SRE as well as why the art of SLOs is so important in the creation, and how the creation of the actual workshop came to be. 

MARK: Yeah, I think it's awesome to hear. And we'll talk a little bit more about, like you said, some of the guiding principles behind SREs and what companies can do to adopt some of those, again, figuring out a solution that makes the most sense for what their environment looks like. And then later, after that, we'll talk a little bit about Google Cloud's Game Servers, which may go by another name that you're familiar with. We'll talk about that just coming up now. But let's get into our cool things of the week. 

[MUSIC PLAYING] 

OK, well, the first thing I've got is an announcement for Google Cloud Next. We talked about it being transitioned into a digital event, but now it's actually going to go ahead and be postponed for this year. So there aren't any dates announced, so stay tuned for updates there. But I think we're working on kind of creating a new experience that will be very different from traditional Next, but will hopefully get everyone out there and able to participate. 

Another cool thing of the week, a new beta feature that's available on Cloud Identity Platform. So Cloud Identity Platform is like authentication as a service, and now you can do SMS messages to verify users that are signing up-- you know, that two-factor authentication. That's great, but what was actually supercool about it is behind it-- there's this article that we'll link to in the show notes that talks about some studies done with a variety of universities on how different authentication factors play into the security of your account. 

So they look at, like, what happens when you add SMS to enabling an account, and how effective is that. It's a pretty cool article, so I definitely recommend checking that out. And then, of course, the whole point of that is to inspire you to go through your personal accounts and add additional factors of authentication to them, and see what you can do to sanitize that and protect yourself. 

JOHN: That's really interesting because I ran a hackathon earlier this week. And, of course, with the university students, they were having not only some trouble doing authentication, but they were actually having problems authenticating additional parties onto their actual projects. So I guess something like this would really be very appealing to students who are trying to work as a group on the next big thing, the next startup, or they just want to authenticate their apps in some other fashions. 

MARK: Yeah, the Identity Platform will definitely help with that. And then these are some great things to keep in mind when you are building an authentication, what should you do to keep your users secure. 

JOHN: And my cool thing of the week is, as of today, of this recording, Google Cloud Game Servers has actually gone beta. So for those of you who do know what Google Cloud Game Servers is, it is managed Agones. If you're familiar with the project that Mark Mandel, one of our past hosts, who used to work on it, actually created. It's amazing because now that it's beta, it's available for testing for a bunch of our gaming customer workloads. And some of the features include automated scaling for peak and not peak hours across several regions, and we just announced several other regions earlier this year. And you can check past show nights for updates on that as well. So I won't tease too much about the features because we will talk a little bit more about that and our question of the week. 

MARK: Absolutely. And it's super exciting for this to be launched. I know Mark has been working on this for a very long time and is absolutely ecstatic to have it launched. So let's come back and talk to that. But for now, why don't we go ahead and get started with Alex talking about the art of SLOs? 

[MUSIC PLAYING] 

JOHN: Hi. And so this episode, we're joined by Alex Bramley. Alex, you mind telling us about yourself and what you do? 

ALEX: Hi there. I'm an engineer here, an SRE here, I guess. Our internal systems here say I'm a Cataclysm Reduction Engineer, but that's just because we get to choose our own job titles at Google. I've been a Site Reliability Engineer for about 10 years now, and for the last couple of years I've been working on the Customer Reliability Engineering team, helping Google with its largest cloud customers run their services more likely on top of our cloud platform. The initialism CRE is kind of what inspired my job title. 

MARK: Of course. I mean, reducing cataclysms does sound like a pretty good job. Could you define what an SRE is? And then what's the difference between an SRE and a CRE? 

ALEX: Sure. Kind of wish it came with a cape, the job title. A site reliability engineer is kind of Google's operational engineers. They're usually either software or systems engineers, and they look after the reliability of Google's largest products 24/7, around the clock. 

And CRE is quite different in a lot of ways because we're trying to help look after the reliability of customers' platforms and customers' services they built on top of Google's cloud platform instead. And the CRE team was founded on three key observations that arose from our experiences as SREs is running large-scale software platforms in production at Google. The primary one is that the most important feature of any system is its reliability, and by that I don't mean 100% up time. I mean the system is meeting the expectations of its users. 

And I also don't mean that you need to focus on reliability to the extent that you don't prioritize other features because reliability isn't a standalone product. There's always a balance between reliability and other priorities. But a system that's not reliable is quickly going to lose the trust of its users. The users who have a choice to leave and the users who are forced to stay are going to be unhappy. 

And so this leads us to our second observation, that it's not really our monitoring systems that determine the reliability of our services, that it's our users. If our users don't perceive our services as being reliable, then it's not reliable, no matter what our graphs say, no matter how much our monitoring argues the contrary. And so the final observation is that well engineered software can only get you to three nines. You've heard about measuring reliability with nines. 

If you want to build a system that's available four nines of the time, 99.99% of the time, you need to kind of take an engineering approach to your operations function as well, and that's kind of what our theory is. If you design operation with an engineering-led mindset, we think you arrive at something that looks a bit like SRE. For four nines reliability, you're talking, like, four minutes of downtime every four weeks. And this isn't really enough time for a human to be notified about a problem, let alone react and mitigate it. 

Even worse, if you want to reach the holy grail of five nines, your entire business kind of has to make all of its decisions with this goal in mind because it costs a lot of money. The cost benefit trade often just isn't sustainable or worthwhile. And this last observation is especially problematic when you build systems on top of a cloud platform, and this is why CRE started existing. As CREs, we want our customers to be able to build four-nine service on top of Google Cloud, and many have successfully. So our job is to be engineering and reliability partners for our top customers, understanding the architectures built on top of our system, and working with them to create shared service-level objectives and improve their reliability on Google's Cloud platform. 

One of our major goals at the moment is to build automation that can detect when these customers are having outages so we can proactively pull in their account teams and customer support to respond to the issue, reducing that time to detection so that they can build and run high availability services. 

MARK: Yeah. I think there's two really important points in there. And I think for people who aren't familiar, three nines would be 99.9% uptime. Four nine would be 99.99% uptime. And those are basically very common terms in the industry for companies that are saying, we're going to promise you this much amount of uptime per year. Like you said, four nines is about, what, four minutes every couple of weeks? Yeah, that's a lot of room for down time. 

ALEX: Five nines is, like, 26 seconds of downtime in the same four-week period. In Prometheus, for example, you scan and you poll your things once a minute. So you can have your entire error budget gone between two polls of Prometheus going across all your services. 

MARK: And so in that regard, you were kind of talking about how the maintenance of this model or how do you actually make sure that your customers-- a lot of times that's customers of Google Cloud, their customers, because they're building systems on top of cloud. And so as a result, kind of a shared responsibility. Google's got the infrastructure layer that they have to handle, then the customer also needs to set up their own error reporting, error monitoring, and just general kind of SRE philosophy, hopefully, for their own application. 

ALEX: Yes, but one of the things we're working with our customers is to get a shared view of this so we understand our customer's perception of their own reliability, because only when you know how your customers perceive your service can you really start to make judgment calls on whether it's reliable enough for them. This is a difficult problem as well because there's a whole bunch of legal questions around like the sharing of this data. But we've managed to reach this point with a few of our biggest customers, and it's showing considerable results. So it's a positive thing. It just takes a long time to get there. 

One of the other problems we've found is that our customers' priorities and not our priorities. So we go in and talk to them, and we evangelize about service level objectives, and we try and preach about measuring the reliability. And because it's not necessarily their first priority because they have other problems to deal with and they have other things that they need to achieve, it can take a very long time just to get to the point where they have measured their reliability and they're willing to share it with us. But when they do, we can see some significant results from it. 

JOHN: I'm friends with SREs in the office in New York. So you mentioned-- and I know that this is part of what they really strive to do-- customers are typically engineering to build reliable services, but as an SRE you have to make those decisions and what those things are where to have as much time as possible. So I guess the question is, how do you make those decisions? 

ALEX: Yeah, it's difficult. The first thing to remember is that reliability isn't a standalone product. You can't sell reliability. So you obviously have to have development teams building features, too. And in fact, the core problem that SRE tries to solve is that most software development teams are created to build those features. They don't generally focus on the maintenance of that software and the running of it in production as much. 

The whole discipline of software engineering is all about meeting business needs with software. Running and maintaining the software once it's launched is generally far more expensive than building it in the first place. There are some studies that show that between 50% and 90% of the overall cost of software over its lifecycle is in the operation and maintenance stages. And this means that if you're building a software engineering team, you focus on hiring good developers, you often don't care as much about operations. It's not seen as something on the same kind of level, as it were. 

And from the engineering side, there's a [INAUDIBLE] development side, all lot of the time running software in production is often seen as someone else's problem, and this leads you to have incentives that are not what aligned. You can end up with a metaphorical war between your development operations teams, and this is kind of what SRE tries to break down. 

You don't want your developers building new features, throwing things over this proverbial wall to your operations team, and then moving onto next feature. They don't have any skin in the game there. Everything they do is incremental improvements, and they want to get them across out into the world, out in front of their users as fast as possible. 

They often adopt practices like agile and continuous deployment. The fastest people, they push new code to production multiple times a day, which is awesome. But that just means they push bugs to production multiple times today as well. 

Meanwhile, the people on the operations side of things, they're juggling all of this stuff being thrown at them by the developers, while also being responsible for everything from scalability, reliability, maintenance of the software, all of these kind of things. It adds up. And every additional change makes their life harder. 

Eventually, they're going to start pushing back against this pace of change. And this is where you get the bumping of heads that you get cross incentives, especially if some of these changes, some of these new features are indicated in large-scale service outages. So if you've got your developers pushing as fast as they can and operators are looking to slow things down as much as possible, you don't end up with a good relationship. You end up with people developing a very antagonistic relationship that erodes trust and encourages infighting. 

So agile kind of breaks down some of these silos by making sure that the development organization and the product management side of things are talking regularly. They have shorter duration cycles, they have great folks and what use is actually want and need. And DevOps kind of came along in 2009 and also tries to break down this wall between your development operations to achieve better reliability, better agility. 

And I want to stress that both of these approaches are really great. They're 100% compatible with what Google considers to be SRE. And if they're working for you, we're not going to say, don't use them. But SRE isn't really one thing. It's more like a combination of three things that tries to break down these silos and tries to get the whole business working together towards a common goal of building a service that is reliable enough, but still meets the needs of its users in terms of features as well so you can still build and push your features as fast as possible while meeting your reliability goals. And putting that reliability goal front and center is a key thing in SRE. 

MARK: Yeah, you mentioned how it's not just an engineering side of things, it's also like a company philosophy side of things. The people actually need to put this into practice in order to make it effective. And so I know a big goal of Google's has been to educate people about it, and that's why you've kind of seen the SRE handbook and other artifacts created to help promote this message. And you've also created an artifact of this, right? 

ALEX: Sure I have, yes. The Art of SLOs workshop is service-level objectives with just one SRE, but they are one of the biggest ones because if you can't measure your reliability, then you don't know whether you're meeting your users' expectations. And if you believe-- and the are CRE team do-- that the reliability is the most important feature of the services you're providing, then the logical next step is to measure the reliability. 

Without that quantifiable measure, you don't know if your service is reliable enough. You don't know whether any changes you make to improve your reliability have had the effect you wanted. Like, what if you've just made things worse instead? You literally can't tell. 

So objectively measuring your services reliability is a harder problem than you might first assume because of the second observation. It's our users that determine our reliability. And I mentioned earlier about CRE working with our biggest customers to try and get this shared view of our reliability and our customers' reliability from that perspective, because it's our users that determine our reliability. 

And so this means you have to understand the expectation of your users. You have to figure out how they actually use your service, and you have to measure your performance against those expectations. You can slap some [INAUDIBLE] graphs on the dashboard really easily, but it's not going to tell you anything about user experience. Your users care about your symptoms, not causes. They don't see that your database servers maxed out all of its CPU cores. All they see is the website's slow today. And so you have to measure your reliability in those terms. 

The silver lining in all this is that there's such a thing as reliable enough, and some level of errors is usually acceptable. The key realization that Benjamin Treynor Sloss, the founder of SRE at Google, have was that 100% is the wrong reliability target for almost everything. This is even true of a supposedly reliable things such as pacemakers, which, according to a paper published in 2005, have an average reliability of about 99.6% between 1990 and 2002. That's 2 and 1/2 nines for something that is literally supposed to be saving people's lives. 

So yeah, the thing to remember with all this is that making a service more reliable requires increasing commitments of both engineering time and operational support for ever-decreasing increments to overall reliability. At some point, before you reach the magical goal of 100%, the trade-off is just no longer worth making because the costs outweigh the benefits. And in Google's case, we came to the conclusion that if we aim to be slightly more reliable than the top consumer ISPs, our users would be substantially more likely to attribute random errors to failures at their ISP. 

I can tell you now that Google isn't 100% reliable. But think for a second about how you normally check whether your home internet connection is working. Most people are going to try to load the Google Home page or ping [INAUDIBLE]. 

MARK: I can definitely say that my number one way is Google.com. And if it's not working, yes, absolutely, I just assume my ISP is down. So I think a lot of people can relate to that. And it kind of shows that Google has done a great job of setting the expectations for what reliability is. 

JOHN: Yeah, and that's very interesting because I would imagine that-- you hit some really good points there that I think were really great takeaways, such as engineering not defining reliability. It's users that do. So I can see the importance of, say, a workshop like this. And I understand the importance of, obviously, reliability for our services. But what made you create the workshop? And I guess another follow-up question to go along with that is, how successful do you think it's been? 

ALEX: One of the biggest problems encountered early on in the life of the CRE team was that many of our customers weren't measuring or managing the reliability of their services essentially at all. It turns out to be quite hard to help customers operate more reliably in the future if they have no idea how reliable they are right now. 

Like, the team before I joined CRE, they developed this two-day workshop, which we delivered pretty regularly site at their customers' offices that would teach a team of customer engineers about measuring service reliability with SLO-- Service Level Objectives. And then we'd spend like the second day of that workshop helping them come up with some service level objectives for their own services. 

So after I'd delivered this workshop for the first time shortly after joining the team, I had some small ideas for improvements. And in the end, I ended up rewriting about half the deck over the course of a month or so. That was cool for a while, and we did a few more iterations internally with the kind of on-site workshops with customers thing. I flew to Japan and did it with a company there, and I did a couple of workshops around Europe as well. 

And then Liz Fong Jones, ex-Googler now at Honeycomb an amazing engineer, asked me to turn the content into something that could be delivered at SRECon EMEA at the end of August 2018, and that was the origin of this iteration of the content. 

In a conference setting or with a mixed room of engineers from multiple different companies, you can't just talk to your audience and hope it goes in. Making people work on practical problems really forces them to get to grips with the ideas then and there. Giving them a made up service to think about takes them away from their own services, their own problems. These tend to be messy, complicated, real world problems. If you have a nice theoretical problem which has been designed as a teaching tool rather than to serve hundreds of thousands of users across the globe, then it gives them something to practice on that isn't of quite the same scale. 

And so the workshop as it is now is kind of 50/50 theory and practice. We talk about the ideas in the morning. I've kind of touched on a few of them already, and I can go into them more detail if you want. But the reason it's called The Art of SLOs is it's something you do regularly, as something that you improve upon through practice. And the practical side of the workshop is intended to give people an opportunity to put the things they have learned into practice then and there so it really goes into the head right then. 

MARK: And so you've talked about the workshop and delivering it a bunch of places. Yeah, let's dive into a bit more detail. Like, what are the parts in the workshop? 

ALEX: The theory part is kind of broken down into four parts. It starts off with a bit of evangelism, covering a lot of the points I've already covered. We're making the case that every service needs SLOs. If you believe that reliability is the most important feature, then you kind of have to measure how reliable you are. You need to decide what reliable enough means for your services and measure your performance against that goal. And measuring reliability is the first step towards improving it. 

So the next part of the workshop describes how to turn a reliability target into an error budget, which I don't if you've heard the term before. It's like the inverse of your SLO, where if you set a goal for your reliability, say, three nines, then if you serve 999 OK responses, for example, you were allowed to serve an error. That is your error budget. You can serve 1 out of 1,000 errors, and your users presumably are going to be OK with that level of errors. 

And that's why setting your SLO target in conjunction with understanding how your users use the service is so important because if you just pick an arbitrary target like two nines out of the air, if your users are going to be unhappy with you serving an error 1 in every 100 times, then that target is the wrong target. 

So once you've decided on the target you've set and you're serving at that level of reliability, everything else is just gravy. And that error budget that you have can be actively spent on development tasks. Like, usually when you roll out a new service, you serve more errors because you've got a certain fraction of your tasks down at any one time. 

Maybe if you've not invested in technology that makes sure that your users connections are finished serving before your task shuts down, for example, like whenever you kill a task to replace it with an updated one, whoever's services were still in flight with that service might just suddenly get 500s. This is not a practice I advocate, but it's pretty common in a lot of cases. 

So things like that, that's a thing you can spend your error budget on. We go into detail about a number of different things where we consider valuable uses of these allowable errors, I think is the best way to put it. And once you have an error budget, it can also help solve this incentive problem I talked about earlier. If both of your development and your operations teams share the goal of maximizing the pace of feature delivery while there's still error budget to spare, then you minimize the friction between them. 

An easy way of describing the control loop is, if you have a budget remaining, you can purchase new releases. And if you've run out of our budget and you've served too many errors to your users, then presumably they're now unhappy with you, and you need to stop making changes. You need to reduce the risk in your systems until they're less unhappy with you. And one way of doing that is just to stop releasing new features. I think we have statistics internally that show that maybe 70% of all of our outages are due to changes to a system, like, either a new Binary Release or a configuration change or something like that. 

The third part of the talk goes into figuring out which of the many, many monitoring metrics you already have in your systems would make for good SLIs, Service Level Indicators. So a service level indicator is a quantifiable measure of your service's reliability, and we usually describe them in terms of the ratio of two numbers. 

We talked previously about downtime and three nines of downtime. That's the ratio of minutes that you are down to all of the minutes your service was supposed to be up, or the minutes your service was up over the minutes your services were supposed to be up is downtime. You're thinking about reliability as a binary metric. Either your service is up and doing things, or your service is down and not doing things. 

This is quite a coarse measure. It kind of comes from the mainframe era, in a lot of ways, where you had one big computer in your bank and it did all the computing in your bank, say. And when the mainframe wasn't computing, your bank was down, and that was a big deal. 

And so they for a long time, people engineered these big mainframes to be as reliable as possible. If the hardware was operational, the software was operational, and that was kind of how they thought about these things. In Google's case, we have always built all of our software on top of hardware that fails all the time. Like, it's cheaper, so we just have data centers full of computers, and at any one time, a lot of those computers are just not working. 

So we have to think about reliability differently. And we think about it in terms of usually most of Google's services are HT requests and HT responses. We think about them in terms of whether that request from that user was served with an OK response or not. And so when we talk about downtime, we talk about it in terms of how many queries we failed to serve successfully. And so we talk about the percentage of all of the requests we had that were given an OK response, and that tends to be our service level indicators for availability. 

And we also talk about what metrics don't make good as SLIs, and I kind of touched on this before. Things like CPU usage and memory usage, they're important things to keep track of because they're often leading indicators of something going to go wrong in the future. But they are kind of cause-based. They're not symptoms-based, and your users don't care about them. And so they don't make good service level indicators because the service level indicator should be a good measure of how your users perceive your service's reliability. 

And the last part of the workshop in the theory side of things tells you how to take an idea like I want to measure my services availability and turn it into something you can actually measure, something that describes exactly what specific facets of your system you're going to measure, and how that translates to your reliability target. We go through a four-step process which simplifies it quite a lot. 

And I think the thing that people find in the practical side of the workshop is that even though you can reduce it to a [INAUDIBLE] four steps. There are so many things to consider and so many failure modes of your average service that it's still a very, very hard problem. Even when you give them a theoretical task, which is based on a made-up service, which has a reduced surface area, which has very simplified mechanics, it's still very difficult. 

When we're doing this in the full-day workshop, we have two hours in the morning for the theory, and we have another hour and a half in the afternoon for the workshop and then a bit of retrospective on the practical part. And for the made-up service that they work on, usually the groups of engineers come up with maybe three or four SLOs for the entire thing across that 1 and 1/2 hours, and that's for a very simple reduced service. Doing it in the real world, it can take days. 

JOHN: What was the conference that you mentioned again? It was SRE Conf? 

ALEX: SRECon Europe, Middle East, and Africa, on the 30th of August, 2018. In the dock I put a link to Liz's presentation there. So it's in the bio. 

JOHN: So we talked about the why-- what is the point of creating this workshop? We talked about the what-- what is in the workshop? And I'm just going to skip the other three W's and just talk about how we're going to make this available for other people, because you mentioned that this was done at SRECon. So I'm just curious, how can you make this readily available for other people who find that the importance of this workshop and creating SLOs? 

ALEX: So we've had a lot of very positive feedback over the past year and a half or so since we've been doing these workshops for our customers. And a couple of the bigger customers actually came and said, we want to be able to train our own engineers with this workshop. And the thing about that is licensing is always difficult. Legally, there's never tech problems. It's always legal problems or people problems to do with these kind of things, if you know what I mean. 

I started looking into how to make this workshop available to them. And it turned out the easiest way to do this for Google as a company was just to release the whole thing under the Creative Commons so that anyone can use it. And so that's what I ended up doing. It took a while because legal approval is a very arduous thing in a company the size of Google. But everyone was really great, and a lot of people put in a lot of work to get it across the line. And I want to say thank you right now to all of them because I couldn't have done it without them. 

But the upshot of this is that it is now already freely available on the internet for people to take away and use. And one of the things I did in order to get this released was write up a how-to document so you can understand how I went through the process of trying to put on a workshop because there's a lot of preparation. It's not everything from some slides, although you can literally do that, because I'm very, very uncomfortable with libbing at short notice. So the speaker notes are very good in the deck. 

But the preparation work is considerable. Really, you want some people who are familiar with SLOs in your organization already because you kind of need some support for the tables in the afternoon. The way we've generally run the workshop is to break the cohort of engineers up into tables of six to eight at a time, and then each of them works in parallel on some of the problems in the workshop. 

But it's very easy, if they're unfamiliar with the kind of ideas, for them to get stuck or for them to kind of just go around in circles and argue about things rather than moving forward. And it's very helpful to have some engineers who are familiar with the concept to kind of flit around the room and help these tables get unstuck. And training those engineers up and getting them prepared is a big part of the organization side of the workshop. 

So the materials that we've released the slide deck itself. We've released the handbook because, on the day, you print out a 28-page handbook for each person who's there. It gives them some of the content from the slides a bit more detail, which-- you can't make people read walls of text on the slide. But you can give them the book with the walls of text in, and they can read it when they want. 

So the handbook contains the appropriate walls of text, and it also contains all of the problems that they'll work on in the afternoon, along with the description of the made-up service. It's a mobile game where people fight off vampires because it had to be something. There's also the how-to document that I talked about. So for people who want to run one of these workshops rather than just participate in it, there's the in-depth guide on how to run one of these things. There is also some work examples of how we think some of the questions can be answered. And so if you're going to be participating in this, don't download the how-to document and read it because that's cheating, just so you know. 

And then the last thing is a printable worksheet. So when people are working this workshop, ideally, they shouldn't have their laptops with them. You want them to be focused on the task at hand. And so there's a kind of a worksheet you can print out, A4 worksheet. You print it, put it on the tables. Give each table five or six of these. Give them pens, let them write. 

It encourages teamwork because one person has do the writing, and then they can force other people to tell them what to write and things like that. And the sheet itself contains prompts to keep people on track, so there's the four-step process of coming up with an SLI and then setting some SLO targets for it. Like, it's broken down on the sheet so they have boxes to write in and things like that. And that helps keep them on track, which is important because an hour and a half isn't really all that long for working on this kind of problem. 

MARK: No, not at all. And so we're going to make sure that we put those links in the description for people to check it out. But it sounds like, obviously, someone who's interested in getting their company to adopt more SRE principles and just kind of a better recognition of usability and, really, reliability in their systems might be interested in giving this in a workshop, and they'll have all those resources. Or they can just kind of read about it and kind of see what they can inspire just from their own work. RIght? 

ALEX: Sure. I mean, if you're looking to learn on your own and you don't have an entire like team to train up, we have a lot of the same content, in fact, in a lot more depth, in the Measuring and Managing Reliability course on Coursera, which kind of built at the same time as doing this stuff for Liz because it's the same ideas, and it turned out to be not that much extra effort to build the Coursera course. Well, I actually had a few people-- we worked as a team on the Coursera side of things because there's a lot more writing involved there. And we have to do video recordings and other stuff like that. And actually, I couldn't participate in the video recordings at all. And that was a big part of getting the course there. 

And we've now had it translated into Spanish as well. So it's available in more than just English, which really helps because there's been massive uptake in Mexico and Latin America in general, and there's huge interest in these ideas. And there's really not much material in Spanish until now for that kind of thing. 

MARK: Well that's awesome to hear, and I'll make sure we include a link to the Coursera course as well. So like you said, there's a lot of different ways for people to kind of absorb this information and hope they bring it back to their teams. Is there anything else we've missed, before we wrap up, that you want to mention? 

ALEX: I would be remiss if I didn't mention the SRE books as well. So Google has written and released, freely available online, two books around all of the other SRE principals. SLO is up front and center and both of the books, but SLOs are just one of the SRE practices we see. And the books cover a lot more in a lot more detail, and they're good reading and freely available. So you should check them out if you're interested in learning more about SRE. 

JOHN: So Alex, it's been a pleasure, and it's definitely enlightening to hear and see someone really take a passion in the art of SLOs. And obviously, we'd love to thank you for actually creating a workshop and making that readily available for all of our listeners and anybody who's looking to actually put this into practice. 

ALEX: John, thank you. Thank you for having me on line. It's been fun. 

MARK: Thanks so much to Alex for coming in. Again, super interesting to hear more about the SRE philosophy. We've been talking a lot around what it looks like to actually manage. The past couple episodes we've talked about migrations. But when you're doing that, you also need to set up your environment in a way that you're able to understand what's going on, how you are able to look at errors, being able to respond to those, and kind of building that culture around your different teams, and kind of successfully moving to the cloud. So I think all of these interplay a lot into what it looks like to build a really successful cloud organization. 

JOHN: I really enjoyed hearing about how we can help engineers decide what things are important when defining SLOs in order to make their services more reliable. 

MARK: Yeah, there's a big takeaway there. Someone's got to tell you, hey, we want to measure every single metric possible. And that's like, A, that's not really reasonable. Not only do you need to figure out the right metrics to measure, you also need to figure out the right goals. That really telling quote about 100% being the wrong target I think is very important. And understanding, again, what it is that you're measuring, why you're measuring it, and how that affects your users, absolutely critical to being successful. 

OK, and now that we've finished talking about SLOs, let's move on to our question of the week. 

[MUSIC PLAYING] 

John, if I wanted to, let's say, spin up a game server, what would I actually do to do that? 

JOHN: Well, the first thing you're going to want to do if you want to get started with Google Cloud Game Servers is you're going to want to get through your authentication. The same way that you would do with many of our other products, you're going to go on, create a service account, create credentials so that way you can interact with Google Cloud Game Servers. 

The next thing you want to do is you want to create a realm. In Google Cloud Game Servers, they introduced this concept called realms, which are logical groupings of Kubernetes clusters that are designed around latency requirements, specifically. So that way your customers are reaching the right clusters where they're having competitive games with low latency, low ping. 

And it's really great because, of course, we talked about automated scaling for peak and non-peak hours of course regions. That also includes automated scaling for your actual users and your actual players at these regions. 

So once you create a realm, the next you're going to do is you're going to want to register those clusters. And then from that on, you're going to shifting all of your workloads and all your connections to the actual regions in these clusters in order to get started with Google Cloud Game Servers. But if you want to hear more, I'll link our Getting Started docs in our show notes. 

MARK: And I think there's also some great video content around that too, right? 

JOHN: Yeah. So we're going to link a video for the Google For Games Dev Summit in the show notes, and there you're going to be able to see the announcement for a Google Cloud Game Servers as well as Mark getting started with the managed service on the dashboard. So look forward to that as well. 

MARK: So definitely recommend checking that out. And of course, if you missed Mark on the podcast, check out this video, and you can get a little bit of it back. 

JOHN: You know, Mark is as charismatic as always, and he's very static and very happy about the launch. So if you want to hear a little bit from Mark and you want to get a little bit of his soothing Australian accent, feel free to check it out. 

MARK: I'm sure everyone will make sure they check that out. All right. Well, before we wrap up, what projects are you working on, John? 

JOHN: Yeah, so I'm still working on Open Match. We are working to push our releases a little bit faster. And I'm currently working on a sample project for the developer community around writing custom match functions as well as integrating Open Match into your existing game. So I'll be open sourcing those materials pretty soon, hopefully. And look forward to that. 

MARK: And it sounds like a pair really well with the rest of the gaming technology coming up. 

JOHN: Look forward to it because Open Much, in the near future, will be integrating with Google Cloud Game Servers as well, so that way you get a full platform of actually connecting your gamers, whether it be game servers, matchmaking, and connecting them together. So it'll be really cool. 

MARK: Awesome. And as always, I will be working on more and more video scripts. Sometimes it does take a while to get these things through, what with all the recording and editing processes. But I'm happy to talk about one video that was just recently launched called Error Reporting and Error Logging. That'll definitely be down in the show notes. But I think it's helpful, and it kind of ties in well to the conversation we have with Alex today, talking a little bit more about how do you handle errors, what you need to think about when you're doing reporting and logging. And this video series, Stack Doctor goes into a little bit more detail around all kinds of cloud operations things. So I highly recommend to check that out and get a better sense of what's possible in Google Cloud. 

JOHN: Well, as always, we would like to thank you for listening in on this episode, and we look forward to seeing you all next week. 

[MUSIC PLAYING]