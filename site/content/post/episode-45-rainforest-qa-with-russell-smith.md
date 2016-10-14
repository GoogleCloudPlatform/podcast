+++
audioDuration = "00:36:57"
audioFile = "Google.Cloud.Platform.Podcast.Episode.45.mp3"
audioSize = 53254400
categories = ["BigQuery", "Customer", "Analytics"]
date = "2016-09-28T01:07:49Z"
description = "Russell Smith, cofounder and CTO of Rainforest QA, joins the podcast to explain how they power their analytics platform with BigQuery, streaming thousands of rows per second."
draft = false
episodeNumber = 45
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Rainforest QA with Russell Smith"
image="/images/post/rainforestqa.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/dkm5jHk95xX"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/54wv6b/episode_45_rainforest_qa_with_russell_smith/"
+++

[Russell Smith](https://twitter.com/rhs), cofounder and CTO of
[Rainforest QA](https://www.rainforestqa.com/), joins the podcast to explain
to your dear cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
how they power their analytics platform with [BigQuery](https://cloud.google.com/bigquery/),
streaming thousands of rows per second.

<!--more-->

##### About Russell

Russell is the CTO & Co-Founder of Rainforest QA.
In a past life he provided consultancy for startups & companies around development, ops, architecture
design and capacity planning. Specialties: Development, developer workflow, devops, linux, Debian,
CI, benchmarking, profiling, bug fixing, performance, scalability, ops planning, capacity planning / modeling, lols.

Russell has tons of ops experience, mad coding skillz and 0 knowledge of geography.
He loves hacking on open source, running meetups and arguing about startups.

##### Cool things of the week

Kubernetes 1.4:

- Kubernetes 1.4: Making it easy to run on Kubernetes anywhere [blog](http://blog.kubernetes.io/2016/09/kubernetes-1.4-making-it-easy-to-run-on-kuberentes-anywhere.html)
- Installing Kubernetes on Linux with kubeadm [docs](http://kubernetes.io/docs/getting-started-guides/kubeadm/)
- Scheduled Jobs in Kubernetes 1.4 [docs](http://kubernetes.io/docs/user-guide/scheduled-jobs/)
- Kubernetes The Hard Way [docs](https://github.com/kelseyhightower/kubernetes-the-hard-way)

Using App Engine to start a Compute Engine VM [medium](https://medium.com/google-cloud/using-app-engine-to-start-a-compute-engine-vm-be713c98d6a#.wsbvsmv39)

##### Interview

- RainforestQA [homepage](https://rainforestqa.com)
- Selenium [webdriver](http://www.seleniumhq.org/projects/webdriver/)
- Firebase Device Lab [docs](https://firebase.google.com/docs/test-lab/)
- BigQuery Stream API [docs](https://cloud.google.com/bigquery/streaming-data-into-bigquery)
- re:dash Open Source Data Collaboration and Visualization Platform [docs](http://docs.redash.io/en/latest/)
- BigQuery Paritioned Tables [docs](https://cloud.google.com/bigquery/docs/partitioned-tables)
- Historical Data is 50% cheaper on BigQuery [announcement](https://cloud.google.com/blog/big-data/2016/03/google-bigquery-cuts-historical-data-storage-cost-in-half-and-accelerates-many-queries-by-10x)
- BigQuery standard SQL [docs](https://cloud.google.com/bigquery/sql-reference/enabling-standard-sql)

<div style="text-align: center">
  <img src="/images/post/rainforestqa_wide.png">
</div>

##### Question of the week

How to react to email from Google Cloud
- Receiving Emails from App Engine [docs](https://cloud.google.com/appengine/docs/python/mail/receiving-mail-with-mail-api)

App Engine Services [docs](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine)

Compute as a Continuum [gcppodcast.com](https://www.gcppodcast.com/post/episode-2-compute-as-a-continuum/)

##### Were will we be?

You can find [Mark](https://twitter.com/neurotic) at [SIEGE](https://siegecon.net/) from October 7th to 9th

[Francesc](https://twitter.com/francesc) will be in New York running a
[Go workshop](http://www.meetup.com/NYC-Women-Who-Go/events/234422794/?a=socialmedia)
on October 5th, and then he'll do a similar meetup this time [online](https://www.bigmarker.com/remote-meetup-go/Mini-Workshop-Build-a-Web-App-with-Francesc).

{{< transcript "FRANCESC: Hi, and welcome to episode number 45 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy. And I'm here with my colleague Mark Mandel. Hello." >}}
MARK: Hi, Francesc. How are you doing today? 

FRANCESC: Pretty good. Pretty excited about the interview with, again, one of my friends, Russell Smith from Rainforest QA. He's going to be telling us about what they do at Rainforest QA and how they use BigQuery to power all their analytics. 

MARK: Analytics, yes. Basically analytics. No, it's actually really cool. They have, again, Cross Cloud. It's an app running on Roku. And they poured a lot of their analytics over into BigQuery. It's pretty cool. 

FRANCESC: Yeah, I think that is one of the ways people start using Google Cloud Platform very often is because like, oh, BigQuery's cool. 

MARK: BigQuery's cool. 

FRANCESC: So yeah, very good. So yeah, we're going to be talking about that. And then at the end, we're going to have a question of the week. Actually we have two questions of the week. One is, OK, so, I want to do something after I receive an email, not personally. 

MARK: He might. I don't know. He might. 

FRANCESC: Maybe. I want my program to react to emails, right? How do I do that? What is the best way? And then we also have a question about app engine services, what we used to call app engine models, from one of our listeners, I'm going to say Schvartz, but it's probably Schwartz. I don't know. I'm going to make a German sound, Schvartz. 

MARK: Schvartz. 

FRANCESC: But before that, we have the cool things of the week as usual. And the first one is the obvious one, which is Kubernetes 1.4. 

MARK: Yeah, super excited about Kubernetes 1.4. There's a bunch of new things in here. Just to pick out a couple of my favorites, both of which are in alpha, but I think they're still really exciting. The first is the Cube ADM tool. This is really great. So if you don't run on GKE, and you want to create your own Kubernetes clusters, we now have like a command line tool that you can like spin up master nodes and then join other nodes to join it, and makes it much easier. Still in alpha, so still worth kind of playing with and providing feedback, but definitely in the right direction for Kubernetes because setting up a cluster before was very, very difficult. 

FRANCESC: Yeah. Yeah, there was that document that I'm sure most of you have heard about, which was Learning Kubernetes the Hard Way. 

MARK: Yeah, it was one Kelsey Hightower's GitHubs. 

FRANCESC: Yeah, which is a very good document. But it was also very good friction log. I was like, this is really hard. So yeah, . The new version is making all of those things easier, which is very nice to see. 

MARK: Yeah, and also, they're going to have scheduled jobs, which makes me very happy. So if you want something to happen on a time-based interval, that's in alpha now as well. Been waiting for that for ages. 

FRANCESC: Yeah, it is actually very simple. But yeah, I just assumed it was always there personally. So it is very nice to see that it's finally there. 

MARK: It is finally there. 

FRANCESC: So yeah, if you want to run-- I was going to say a Cron job, which is basically what it is. If you want to run a job every day at 8:00 AM, now you can. 

MARK: Well, looking at the syntax actually, it uses Crontab syntax. 

FRANCESC: Yeah, so it's basically Crontab. 

MARK: It's basically Crontab. It's pretty cool. The other thing for cool thing of the week, I just wanted to make a call out to some people in our community and some of the stuff they've been writing. Oh, I'm going to mess this up. Fernando Damian Lopez wrote a really nice little concise blog post about just starting up a computer engine VM from App Engine, which I think is a very popular sort of modus operandi for a lot of people. It's a very common pattern. 

FRANCESC: I'm assuming he's using the REST API. 

MARK: He's using the REST API. He's got the source code in Python there. How to configure the right permissions on how to do stuff. And it's just really clean, concise, and yeah, if you wanted to do it from like a Cron job, for example, or something like that, it's pretty cool. 

FRANCESC: Yeah, we'll have a link to that on the show notes. And there's actually a fourth cool thing of the week, which is a cool thing of the day, which is Google's 18th anniversary. 

MARK: Oh, yeah. 

FRANCESC: Yeah, I just thought about that. 

MARK: That's cool. 

FRANCESC: Happy birthday, Google. 

MARK: Happy birthday. 

FRANCESC: There you go. So I think it's time to go talk to our friend Russell. 

MARK: Let's do that then. 

FRANCESC: So I'm very happy to welcome Russell Smith to the podcast. Hello, how are you doing? 

RUSSELL: Good. How are you doing? 

FRANCESC: Very happy. Very excited about all the questions we're going to be asking you today, especially about BigQuery. He just shared a number of rows with me. And I think it's very amazing. But before we get into the details of data and stuff like that, why don't you tell us a little bit about who you are and what do you do? 

RUSSELL: Cool. So yeah, I'm Russell, CTO and co-founder of Rainforest QA. Basically CTO, that means a lot of different things to different people. But for me, I run the technical side of Rainforest. So I'm responsible for the direction and basically that we're successful technically. So yeah, I've been going about four or five years now so 2012, late 2011, 2012 kind of thing, moved over from the UK with Fred, my co-founder, the CEO, got into YC and started working on Rainforest shortly after that. So yeah, that's a brief history of us. 

MARK: Cool. Well, that sounds really interesting. Why don't you tell us a little about what Rainforest QA-- what's like the general gist? What does the company do? 

RUSSELL: Cool. So Rainforest QA is a service. We give you a web interface and APIs and command line tools in order to do your QA. So you can go in, enter tests in plain English. So whether you're a developer or a PM, you can write basically regression test for your web app. 

Then you can trigger the media using the interface or using the API or put it into your CI build, which is one of the most common ways of doing it. So we enable you to do human-powered super, super fast in a normal continuous integration build. So a lot of our customers are using it to speed up their release process by doing their QA in stuff like CircleCI or Jenkins, which is pretty cool. 

The other thing is because it's in plain English, it's enabling other people on the team to write more maintainable tests than would be with something like general automation tools, which if you guys have ever used them, are generally pretty brittle. Writing stuff in plain English, while it has its nuances, generally leads to a test that is more reliable once you've got it nailed down. 

MARK: So I could write like a script where I could by like go get a product that's green and then put it into a shopping cart and then go through to checkout. And then someone would actually go ahead and do that. 

RUSSELL: Yeah, the classic one would be to like ask them to sign up and ask them to check if the email was received or if they got a text message to a number. And all those kind of extra tooling around, email checking, third party auth, getting phone numbers, and stuff is all handled by us and automatic and pretty awesome. 

FRANCESC: Cool. So just to have an idea, how does it actually work? Like if I do this thing, I have my version, right? 

RUSSELL: Classic question. 

FRANCESC: Like how does it-- I have my version. And then like, oh yeah, I want to run some tests. So I give you my script, which is like, for instance, I don't know, log in to gcpodcast.com and click on Download. And it [INAUDIBLE] 45, for instance. 

RUSSELL: That would be a great test. 

FRANCESC: Yeah. 

RUSSELL: And so, basically, we store all the stuff for you, all your tests for you. Or you can store them in plain text in your repo, and then just upload them to us automatically. Once you actually hit our API and say hey, Rainforest, run all these tests, we do a couple of things. One, we copy all those tests and version them so that if you ever change your test in the future we know which ones we ran. 

But then the next thing is we start farming it out to the workers we've got online. So normally we have a few thousand workers, up to 5,000 workers online at any one time. And we were talking about this earlier. But we basically give out the work in a special way. 

We use Alexa projects. This is one of our first Alexa production apps that connects to a Chrome extension that the testers download. So we know which testers are online when and when they want to work. So much like say, Uber. When you want to do rides as an Uber driver, you just open up the app and say, hey, I want to do rides. 

For our testers, they just open up their browser. And then they just click on the icon for Rainforest, and it just turns it on, and we know that they want work. And then we can just pipe the work to them. We can say, hey, this person is most qualified for the job that you've just asked for. We're going to give that to you. So we can do that very, very quickly. 

So, I guess stepping back a bit, the traditional way of doing this with a crowdsource based system, so something like MTurk or CrowdFlower would be. You do the call to Rainforest, Rainforest then does a call to CrowdFlower and says, hey, list a job on the surface. And then we list a job there. 

Then the worker goes to the page when they feel like it, refreshes the page, sees a Craigslist style listing of things to do, clicks on one, maybe decides to do it, and then does it. So that process took, I don't know, three to seven minutes to do, maybe, traditionally, and then relied on workers actually refreshing. So we ended up building notification services on top of that. 

But then we realized the easier way to do it is just to make them install a Chrome extension, or have them install a Chrome extension. So this is a much more fluid way. So after pressing the button or using the API or doing it in a build, it's generally a few seconds before we get the first workers doing your work, which is pretty crazy when you realize how many humans that is. 

FRANCESC: Yeah, that is pretty amazing. 

RUSSELL: We accidentally DDoS-- not DDoS, but we take people down. 

FRANCESC: Oh, really? 

RUSSELL: Yes. I just want to-- 

FRANCESC: You're testing for functionality. But it's like, oh yeah, it doesn't scale. 

RUSSELL: Yeah. So I mean, that's one of the things we've got to ship this quarter is something to allow us to limit the parallels, because unlike, say, if you are doing testing traditionally with selenium style stuff, a lot of the cloud hosted providers for that will-- maybe you'll get 64 parallel things at once. We can do a couple of thousand things in parallel. So that tends to put a large amount of load on your system if you're not used to it. 

FRANCESC:  Nice. So from an architectural point of view, how does Rainforest QA distribute all of these flows? Are these applications that you're testing running on the customer side and you manage them there? 

RUSSELL: Yeah, generally. In fact, in 100% of cases the application is running, the customer runs it. And the main reason why is, it's-- well, you guys are developers. There's so many different ways of running something and so many different ways of having dependencies and getting in the right state. It's just totally non-trivial to do right, to run somebody else's app. So we let you run that. And generally people deployed to a staging or a QA environment, and then point Rainforest at that. It works pretty well. 

If you're in Heroku, you can actually use this feature called Review Apps, which is pretty badass. If you do a pull request, it will start an app with that code. And then you can point Rainforest at that as well. I know you were talking about doing that for Google, right, for your app engine stuff. 

FRANCESC: Yeah, trying to implement something like that. And it is fun. And I don't think it is too hard. So, maybe we will be able to share some use. 

RUSSELL: Watch this-- 

MARK: Well, you could use an app engine version manually. 

FRANCESC: Yeah, you can. So yeah, what I'm trying to do is-- 

MARK: But it's not it's not as slick. 

FRANCESC: Do that automatically. 

RUSSELL: Yeah, yeah.  You should just automate that. 

FRANCESC: Could be fun. So that is about all the web integration test. All of that is about the web. What about mobile? Mobile first? 

RUSSELL: Yeah, actually, that's a good point. I guess we've been running mobile for maybe five or six months now for a few customers, maybe 10 customers. And then last week we launched a self-serve version of this that anyone can sign up to today, where you prepay for credits rather than enter into a contract with us. 

So yeah, we're powered by Amazon's Device Farm. I see Francesc cringing. You guys didn't do iOS fast enough on your Fire based stuff. So we had to go with them. But they're awesome. 

So they gave us real devices like direct. Well, I say direct. So they gave us real devices, but the way they're designed was for running automated tests. Because we're powered by humans, we actually need to give the device to them, as in, present it to the tester. And it wasn't really set up for that. So we had to build some pretty cool tech to allow us to, basically, transport the device into the person's browser. 

So the short version is we wrote a VNC server and an SSH 7 some [INAUDIBLE] tunneling magic that goes into the app. So we can inject it into your app. And then when your app starts on there, we can reverse tunnel back into it and take control of the phone, which is kind of awesome, because it turns out it actually works, even though it sounds totally crazy. 

But it just means we can run 100, 200 devices at once and give them out to testers instantly. So super low on friction for you as an end user, as a customer. Also, again, writing test in plain English. So very low brittleness of your test and also super easy to get started. 

FRANCESC: So with all of these testers and all the tests and devices that you can be running at the same time, I'm imagining that you are generating a pretty decent amount of data. 

RUSSELL: Sure. 

FRANCESC: How do you handle that? Do I get an email saying passed? 

RUSSELL: Yeah, well, actually, kind of. So at a high level, yeah, there's a bunch of ways of notifying you. But one of the classic ones is email. So you will get an email that just says "passed." But then it lists all the tests that  hasn passed. 

The interesting one is when you get failures. We'll send you the failure and what browser or device it failed on. And then if you click on the link, you can go down into seeing what the tester did, whether that's through screen shots or device locks for iOS stuff, or for web stuff, we'll give you half on that, which is-- I guess you guys are Google people-- so it's a format I think invented here-- Chrome Exports from the network debug panel. 

So anyway, we'll give you that same format, which means you can use some of the same tools to introspect it and figure out what's going on. So you can get the actual logs, because we man, in the middle, our own machines to be able to track all the requests that go through, all the requests that the testers do. Does that make sense? 

FRANCESC: Yeah. 

RUSSELL: As for where we store that data, a bunch of it is in postgres. Some of it now is going into Google BigQuery. And then a bunch of it is stored on S3. So the staticy stuff that doesn't change is stored on S3. 

MARK: So you said some of it goes to BigQuery. Now you were sharing a very large number with us earlier. Is that really just some of the data? 

RUSSELL: Yeah, that's just some of the data. So short version, we use Heroku a lot. Almost all of our infrastructure is on Heroku, apart from the machines that provide virtual machines to testers. They're in a different place. 

Heroku has this super, little known feature called log drains. And log drains let you pipe log output from your app and all the processes of the app to anywhere you want. So traditionally, that only supported syslog. But they added an undocumented-- or I think, at the time, undocumented-- feature where you could do http based transport. 

So I spoke with you guys maybe a year or a year or two ago-- a year ago maybe-- and figured out, hey. I'm just going to write a go program that uses the streaming API for BigQuery and just takes in all the logs from our entire infrastructure and puts them into BigQuery. 

So now the cool thing is we're having a bunch of problems with our logging provider who, I'm guessing, I should probably not name, because I don't want any politics here. But we were looking for a good log provider, one that was fast and searchable and didn't have bad retention and didn't cost us an absolute fortune a year, and then realized actually there aren't any. 

By the way, we've since found logdna.com, which I highly recommend those guys. They're cheap. They do a good job. They're not super low on the bells and whistles. But that's the trade off with them. They just do what you need, which is search. 

But anyway, we still use BigQuery for this. So go program, streaming API, takes in all the logs from our whole infrastructure and just puts it straight into a table. And it also does some extra nice stuff for parsing out the different fields and putting them into the right columns. But yeah, we've got about 25 billion log lines in BigQuery now. So it's kind of cool. 

MARK: That's really cool. Do you know how much you tend to ingest? Can you share that with us? Like over a certain time period? 

RUSSELL: It's normally a floor of 1,000 rows a second kind of thing. And then it goes up depending on traffic. So that's normally our baseline for Rainforest. Maybe it's a bit lower on the weekend. But during that week it's about that. So it's not super high log wise, I guess. It spikes, though. 

FRANCESC: Yeah. 1000 requests per second is pretty decent, to be honest. 

RUSSELL: So triple E, the program, A, I've been meaning to open source forever. So I should probably actually do it. But B, it runs on Heroku. So it's self. It's kind of weird, Heroku logs going to Heroku, then going to you guys. So, yeah, super cool. 

MARK: That's cool. So once the data's in BigQuery, what are you actually doing with it there? 

RUSSELL: Yeah, good question. So we have a bunch of standard queries that we run to find some issues. So we either run them directly in your dashboard, or we use something called Redash, which, I think, you actually recommended to me a while ago. 

But Redash, for those of you that don't know, is an open source dash boarding system. It lets you run queries on schedules and it connects to Postgres, Mongo, and MySQL, but also BigQuery and Redshift and et cetera, et cetera, et cetera. It's super cool for that. So we use that. We have a bunch of queries that run regularly to find certain things that we're looking for, do stats. And it's super awesome because it's cheap to run on you guys and it's also fast. 

FRANCESC: So having that amount of rows on BigQuery, I'm wondering, how do you manage? Do you actually have a bunch of different tables? Is it just one humongous table with millions of rows? 

RUSSELL: No. This is the new mistake, which I need to fix, which I was reading the docs about recently. When I first started, I didn't realize that we should do named, date version tables. It turns out-- at least in the past-- that was impossible to fix without just making a new set of tables, which I didn't really want to do. So I think I read the docs correctly, saying that I can actually do that now without taking offline, which looks kind of cool. 

So, anyway, I haven't gotten around to it, because the cost is actually low enough that I don't care yet. 

FRANCESC: That is nice. 

RUSSELL: I'm attracted by the fact that if the data is still for a month or something, it's half the cost. Is that correct? There is some discount if the data doesn't get added to after a period of time. Anyway, most of our interest-- 

FRANCESC: We should check that out. I'm actually not sure. 

RUSSELL: I was digging around the BigQuery docs, so I'm pretty sure that's correct. But Google it yourself. 

MARK: Yes, so if a table is not edited for 90 consecutive days, the price of storage for that table automatically drops by 50% to 0.01 per gigabyte per month. 

RUSSELL: Which is totally insane. 

MARK: One cent per gigabyte per month. 

FRANCESC: Oh wow. 

RUSSELL: It's insane. And it's also awesome. 

FRANCESC: That is pretty awesome. We learned BigQuery from him. 

MARK: That's why we did the podcast. 

FRANCESC: We're not very good at this. 

RUSSELL: I need to switch to partition tables so that we can take advantage of that. 

FRANCESC: Yeah, that way. Nice. 

RUSSELL: No, we have one table with nearly 25 billion rows. And it's working, which is kind of cool. 

FRANCESC: Out of curiosity, how long does it take to execute the mass, complex query you have? 

RUSSELL: So, normally we get-- we don't really run queries over the full data set unless there's some security thing that we're trying to investigate. 

FRANCESC: That is probably a good idea. 

RUSSELL: And there's this awesome thing in BigQuery where you can scope not by data in the table, but by when that data was inserted. So almost all our queries-- I can't remember what it's called. But anyway, almost all our queries are done by that. So depending on what you're doing, they're normally either a day or a week's worth of stuff-- 

FRANCESC: OK, that makes sense. 

RUSSELL: --which, I think, is actually the max for that. But only on rare circumstances do we query all of the data ever. So it's normally if we have something that somebody's, like, oh, this thing happened two months ago. Can you help us? So I'm, like, yeah, maybe we can. It turns out. 

Yeah, we don't normally query the whole data set. So things are pretty quick, normally under a minute. We queried earlier to find out how many words were in the table today. And that was the longest query I've ever seen, which was just over a minute. And that's because it counted every single thing ever, which is kind of still really cool. 68 seconds. 

FRANCESC: 68 seconds to-- 

RUSSELL: Count 25 billion rows. 

FRANCESC: 25 billion rows. 

MARK: That's cool. 

FRANCESC: That is not bad. 

RUSSELL: I can live with that. 

MARK: So you were talking about your visualizations and you were saying you were using it to find certain issues and things. Can you talk a bit more about what sort of issues that you're looking for, or how are you using that in the-- 

RUSSELL: In the visualizations? 

MARK: Yeah. 

RUSSELL: So I know we're looking at trends. So we're also using another awesome product to do this, which seems to actually be the better way of doing it. Short version, we're looking at trends in memory usage or loads. Can we spot any trends that are outliers and then dig into why this happened. So we're actually using a service called honeycomb.io, which also, I think, is in beta. But I can super recommend those guys. 

Short version, we're trying to find-- this bunch of requests was slow. Why was that? And then, for instance, we were investigating the other day and found one of our Dyynos-- which I guess Roku parlance for a machine running a process-- was using way more swap than all the other machines for no apparent reason. So digging into that, even finding that, was only possible using BigQuery and Honeycomb. 

MARK: So most of your data really is about machine analytics and seeing what your actual things are doing? 

RUSSELL: Yeah, we haven't moved to-- and there's another thing that we're working on, which is to move some of our data or a lot of our most important tables from Postgres into BigQuery. And the main reason we want to do that is for doing analytics. So turns out we have too much data to be able to query the entire thing at a reasonable speed on Postgres. 

So we've got coming up to 300 or 400 gigs of data, which actually doesn't seem like that much. But turns out, is enough. It's expensive to run at a fast speed when we're doing stupid queries. 

So anyway, short version, we're working on a way of exporting that data direct into BigQuery, which will mean that we can do the more insane queries faster, which is going to be cool. 

MARK: Cool. 

RUSSELL: Maybe we'll open source that, as well. 

FRANCESC: Yeah, you should. 

RUSSELL: Should have open sourced the first one, as well. 

FRANCESC: Yeah, and write a blog post, you said. 

RUSSELL: Good point. 

FRANCESC: So, now that you've been using BigQuery for a while, and as you were just saying, you had some new mistakes, like having just one huge table for everything. Do you have any other piece of advice for people that are starting to migrate, that they have a huge database relational. And they're like, should I move to BigQuery? 

RUSSELL: Sure. Yeah, basically the biggest limitation when I started doing it was-- well, I guess I did read the docs. But I just didn't bother doing a bunch of stuff because I wanted to get started. But the biggest thing I would say now is make sure you read the docs properly and probably go with the standard SQL stuff, which seems to be the new version. 

I'm still on the older version. The standard SQL seems super awesome because it removes one of the major limitations of BigQuery, which is updating stuff. Now you can treat it almost like a proper database. I don't mean that meanly, by the way. It's not just depend only now. You can actually update things. 

FRANCESC: For quite a long time, BigQuery was only append-only. It totally makes sense if you're talking about something to analyze logs. 

RUSSELL: It totally makes sense. 

FRANCESC: Modify logs. 

RUSSELL: Perfect use case for us, but horrible use case for the analytic stuff for us, because we need to just drop it every time we want to update it again. Which, I guess, is also possible. 

I would say definitely look at the streaming API. It's pretty awesome. It also means stuff's really fast. There's a really good go library for it that I found, which I will get put in the podcast notes. 

FRANCESC: Yeah, we'll put it on the show notes. 

RUSSELL: Yeah. And then I guess the only other thing-- what do you want to do to wrap up? The only other thing I was going say was I'm in Reinvent. I'm speaking at Reinvent about MTurk. So if anyone wants to come say hi and do that. I'll also be at the CTO Summit in November. So if anyone wants to say hi there, do it. 

FRANCESC: Cool, yeah, go find him and ask him about BigQuery. 

RUSSELL: Yeah, or Turk or any crowdsourcing stuff. 

FRANCESC: Cool. Well, thank you so much for taking the time today to talk with us. That's a very interesting interview. I will have a bunch of links to all the different projects that you have mentioned. And hopefully we'll also have links to the open source versions of your projects. 

RUSSELL: I just tied a VPN, so I should actually have some time to do this kind of stuff now. 

MARK: Awesome. 

FRANCESC: Awesome. Well, thank you. 

RUSSELL: Cool. Thanks, guys. 

MARK: Thanks. It was a pleasure and a joy to have Russell Smith on with us today. I definitely appreciate hearing about people building interesting things. Especially, I think, across cloud, I think that's really interesting to see how people are doing that sort of stuff. And it was really good. And the amount of data he's processing, it's decent. It's a decent amount. 

FRANCESC: It is. Yeah, when he was walking away we had a quick chat. And one of the things that I was saying is, oh so, you have 25 billion rows. Are they very short rows? It's like, oh no. They have ten or more fields. Oh wow. And some of the fields have JSON inside. So there's a decent amount of data. Yeah, very cool. So yeah, looking forward to all the open sourcing of those tools. I'm very excited about that, especially because they're [INAUDIBLE]. 

MARK: Yes. Very good. They make you very happy. All right cool. So let's get into our question-- apparently questions-- of the week. Yeah, you raised the first one, which I think is an interesting one and got me very excited. 

Which is, how to react to email from Google Cloud. So say I-- I don't know. This is always a fun one. I'm going to get sent an email by some third party, maybe you for example. And I want to be able to automatically do something about it once I receive it. How can I find out when that email comes to me, so I can pause it's data and do stuff like that? 

FRANCESC: So this actually comes from a customer that asked me this question. And it was pretty funny because they need to do something very complex on the compute engine. And that very complex job needs to be done every single time that someone could update a database, that it was publicly available, built by NASA, actually. 

The impressive thing is that the way they going to notify people there's new data in the database is by sending emails. 

MARK: Of course. 

FRANCESC: So, yeah. So you have someone that was receiving that email that then could go and run a script that could start everything. And I was like, I'm pretty sure there's a better way to do this. And there's many ways of doing it. One of them could be, run your own web server or run your own mail server. 

MARK: Let's don't do that. That doesn't sound like fun. 

FRANCESC: Yeah, that is definitely not fun. Then another thing you could do is basically use IMAP to connect from your script that runs regularly. Like, for instance, using Chrome. And every hour it checks if there's new email. And then the email starts doing stuff. But then the problem is that, how often do you check? 

MARK: You're basically polling. 

FRANCESC: Yeah, so you're polling all the time. So it's going to not be perfect. There is actually a very, very easy solution, which is just using app engine. 

MARK: So app engine can receive email? 

FRANCESC: Yeah. So, you actually get the same way-- you get a URL to host your web server, which is like your appid.appspot.com. You also get an email, which is whatever you want at yourappid.appspotmail.com. So if you send an email to that address, what will happen is that the email will be sent as a post, HTTP request, to your application. 

So now if your instance is not running-- like your application is not running because you don't have any traffic, which is probably normal if you're only receiving mail once a day. What will happen is that when you receive that request, your new instance will start. And you will treat that and then you do whatever you want. 

And one of the things that you can, as we said at the beginning of the podcast, was that you can start a new computer engine instance. And then from there you do whatever you need. 

MARK: I'm just actually genuinely blown away that app engine can send me email. I didn't realize it could do this. And it's so cool. 

FRANCESC: The best part is that it has been there forever. It is really not new. It is very simple. And if you know it's there it is good. 

MARK: My mind is literally blown. It is Literally blown. 

FRANCESC: Yeah, it is a pretty fun thing to do. And talking about app engine, we also have a second question of the week coming from our friend, Stu Swartz, or Schwartz. Tell us how you pronounce it. 

So, it is about app engine services, which for people who have been using app engine for awhile, you might have known as app engine models. And he's asking when should I use app engine vs. GKE? Is this a scale issue, an approach issue, implementation issue? And then the second question, which is more related to app engine services, is should I have a bunch of services? Should I have a bunch of projects and one service per project? 

The answer to the second part of the question is, well, have as many services as you need. Micro services are awesome. 

MARK: And when you say services, we're talking about modules. 

FRANCESC: Modules, yeah. So you can have, basically, a different app-- it's basically a different app engine application. But they share the same resources. So if you want to make them communicate through-- 

MARK: REST. 

FRANCESC: REST. You can. But also you can use task queues and all of these things. And it's very easy to communicate because they're all in the same project. 

When to use more than one project. Normally, I could reserve that to a different environment. So you have like prod, QA, stuff like that. Then those are good because that way you're not sharing the data store, which is probably a good idea. 

MARK: Yes. 

FRANCESC: You should not give access to the prod data just to do a test. So it is a good place to separate. But you should have all your production services in one single project. It's much easier to handle. 

And then about the question, when to use app engine versus GKE, maybe you can give us a little bit of background on that. 

MARK: Yeah, so this is an interesting question. I'll hearken back for a more detailed response to our episode number two, Compute as a Continuum, where we go into much nuance detail about it. But I feel like it's really more a question of how much flexibility and control do you want. App engine, standard and app engine flexible will give you slightly different versions of that. Whereas app engine standard platform as a service, we dictate a lot of things about how you do stuff. But that gives you great scale. Which is really powerful. 

Flex, we give you a few more configuration options, a few more bits and pieces so you can run pretty much anything you want on it. But now you can't scale to zero. We don't spin up quite as fast. So there's the trade off. 

FRANCESC: No. 

MARK: But if you want, still, the sort of capabilities such that things stay up. If they fall over, they come back. You still want to be able to deploy with a rolling update, things like that, GKE is a great place for that. But you now have even more tweaks and knobs that you can pull. So you'll have a cluster of machines, in that case. You pay for that cluster of machines. You can order or scale it to a degree. 

But then you can do things like resource management or have jobs or scheduled jobs, as well, once that comes out of alpha. But you have way more control. And you can say, maybe I want to have stuff with a whole bunch of memory in it, which is way more than I'd be able to get on app engine or something like that. Persistent volume amounts, if there's state that I want to be able to put in places, things that you can't necessarily do as easy on app engine. 

So it's probably really down to what sort of application you're building, and then what sort of capabilities you really want to be able to have at hand. FRANCESC: Yeah, my rule of thumb is if it can run on app engine, it will run on app engine. That way I can forget about all the DevOps. And I just deploy it, and I know it will be running there forever. And that makes me happy. But if it's something that I'm going to need to be like, oh no, I have all of these services and there's dependencies across them. And I want them to be able to scale them independently and update them independently, and all that stuff, then GKE is probably the best place. 

MARK: Seems pretty reasonable. 

FRANCESC: Why don't you tell us a little bit about what you are going to be doing next weeks. 

MARK: I've got a lot of trouble. I say that with some sadness. But I'm doing some fun events, so that's pretty cool. So I will be at Siege in Atlanta on the 8th of October. That's going to be a fun gaming conference. After that, I'll be at Connect Tech on the 20th. I'll be back in Atlanta, again, on the 20th. That's a general web dev conference. 

And then I'll be at Game a Con, another game conference on the 27th. So I have a fair bit of travel in October. 

FRANCESC: Nice. 

MARK: And yourself? What are you doing? 

FRANCESC: Next week I will be in New York. And I'm going to be running a workshop. And you're all invited. It's going to be on Wednesday 5th, Yeah, Wednesday 5th, October 5th, so next Wednesday. Yeah, it's about how to be a highly scalable web applications with go on a pension. And it's going to be hosted by Women Who Go in New York. Everyone is welcome. So we'll have a link on the show notes to that. 

And then I'm also very excited about something else, which is not traveling but kind of. I'm going to be doing a remote, a remote meet up. That will be on Monday after that, so on October 10th. And it's going to be kind of the same. So it's a mini workshop. It's how to build a web application with Francesc. It will be with Go actually. 

But yeah, basically it's going to be online and you can ask all the questions that you want. So if you will be in New York next week, you are all invited to come to that workshop. But if not, the Monday after that there will be something online. And you can be there wherever in the world you are. And also it will be recorded, so you can watch it later if you want to. 

MARK: That's cool. I should make mention that if you are at any of the events that we're going to be at, we do have new GCP Polecat stickers. 

FRANCESC: We have stickers and they're awesome. 

MARK: Yeah, and they're awesome. So if you happen to be where we are and you want to come up and say hi and get a sticker, please do. 

FRANCESC: Yeah, and we also t-shirts. We don't travel around with t-shirts all the time. 

MARK: No, sometimes I do. 

FRANCESC: Yeah, but stickers-- 

MARK: Stickers are way easier to carry. 

FRANCESC: Come find us and get stickers. 

MARK: Absolutely. All right, well, thank you very much, Francesc, for joining me yet again. 

FRANCESC: Thank you, Mark. And talk to you next week. 

MARK: See you next week. 

FRANCESC: See you.
{{< /transcript >}}
