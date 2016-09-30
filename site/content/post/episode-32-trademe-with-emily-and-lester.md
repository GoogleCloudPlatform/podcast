+++
audioDuration = "00:28:58"
audioFile = "Google.Cloud.Platform.Podcast.Episode.32.mp3"
audioSize = 41759513
categories = ["BigQuery", "Analytics"]
date = "2016-06-29T01:07:49Z"
description = "Emily Melhuish and Lester Litchfield share how Trade Me, the second most visited page in New Zealand, integrates Google Analytics and BigQuery to understand their traffic and provide statistics to their users."
draft = false
episodeNumber = 32
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Google Analytics and BigQuery at Trade Me"
image="/images/post/trademe.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/12ZAF98K9mh"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4qgakx/episode_32_google_analytics_and_bigquery_at_trade/"
+++

[Emily Melhuish](https://twitter.com/kanocarra) and [Lester Litchfield](mailto:lester.litchfield@trademe.co.nz)
share with your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
how [Trade Me](http://www.trademe.co.nz/), the second most visited page in New Zealand, integrates
[Google Analytics](https://analytics.google.com) and [BigQuery](https://cloud.google.com/bigquery/) to
understand their traffic and provide statistics to their users.

<!--more-->

##### About Emily

[Emily Melhuish](https://twitter.com/kanocarra) is an Electrical Engineering student by day and a
software developer by night. She works at Trade Me as a Full Stack developer in between studying
at the University of Auckland where she learns how to blow circuits up.
At Trade Me, her latest project was one surrounding Big Data and how to make the website data useful
for their clients. They use [Google Tag Manager](https://www.google.com/analytics/tag-manager/) with
[Google Analytics](https://analytics.google.com) and [BigQuery](https://cloud.google.com/bigquery/)
to provide business insights to our customers, these include real estate agents and car dealers.
Her work was for car dealers.

##### About Lester

[Lester Litchfield](mailto:lester.litchfield@trademe.co.nz) is a data scientist and web analyst for
Trade Me with a background in Marketing. He's responsible for implementing
[Google Tag Manager](https://www.google.com/analytics/tag-manager/) and
[Google Analytics Premium](https://www.google.com/intl/en_us/analytics/premium/) across their sites
and apps, and using that data to tell the story of how their users behave. He uses
[BigQuery](https://cloud.google.com/bigquery/) most weeks to answer tough questions, and for AB testing.
He's also exploring Google Cloud Platform for text analysis, image analysis and machine learning applications.

##### Cool thing of the week

- Custom encoding: Go implementation in net/rpc vs grpc and why we switched [post](http://open.dgraph.io/post/rpc-vs-grpc/)
- The Illustrated Children's Guide to Kubernetes [adorable](http://blog.kubernetes.io/2016/06/illustrated-childrens-guide-to-kubernetes.html)

##### Interview

- Trade Me [homepage](http://www.trademe.co.nz/)
- Google Analytics [docs](https://analytics.google.com)
- Google Analytics Premium [docs](https://www.google.com/intl/en_us/analytics/premium/)
- Google Tag Manager [docs](https://www.google.com/analytics/tag-manager/)
- BigQuery [docs](https://cloud.google.com/bigquery/)

<div style="text-align: center">
  <a href="http://www.trademe.co.nz/">
    <img src="http://www.trademe.co.nz/images/3/common/tm_logo_2015_600_v3.png" width="50%">
  </a>
</div>

##### Question of the week

- Three Simple Steps to Save Costs when Prototyping with App Engine Flexible Environment [medium](https://medium.com/google-cloud/three-simple-steps-to-save-costs-when-prototyping-with-app-engine-flexible-environment-104fc6736495#.yfkdl6ock)

{{< transcript "FRANCESC: Hi, and welcome to episode number 32 of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I'm here with my colleague Mark. Hey, Mark, how are you doing?" >}}
MARK: I'm good, Francesc. How are you doing? 

FRANCESC: Doing great. Very excited about today. We're going to be talking with some people with weird accents like you. 

[LAUGHTER] 

MARK: Yeah, we're going to be talking to some people down in New Zealand. 

FRANCESC: Yep, some Kiwis. And we're going to be talking about how they use two different-- two completely different-- Google products, actually. They use Google Cloud Platform. 

MARK: Yep. 

FRANCESC: Concretely, BigQuery. 

MARK: Yep. 

FRANCESC: But also Google Analytics. 

MARK: Yeah, it's a really interesting conversation about how they combine those two things together. 

FRANCESC: Yep, very interesting. I definitely learned a lot, so I hope that you will also enjoy it on there. 

MARK: Yep. 

FRANCESC: But before that-- actually not before that, but at the end we will also be talking about the question of the week that comes from someone that asked you this question. 

MARK: Actually he'd asked one of our teammates, which leads into one of his blog posts that we'll talk later, but some cute little tidbits around App Engine Flex, and some nice little best practices for-- 

FRANCESC: App Engine Flexible Environment-- 

MARK: Yeah. 

FRANCESC: Previously known as Managed VMs. 

MARK: Yeah. 

FRANCESC: Now Flexible Environment. 

MARK: Yes. 

FRANCESC: So yeah, we'll be talking about those a little bit, too, at the end. But before that, we're going to start with the cool thing of the week. 

MARK: Yeah, this is pretty exciting stuff. So this cool thing of the week is all around gRPC. If you're not familiar with gRPC, it's a remote procedure called framework based out of some work that's come out of Google. It's pretty awesome. I'm a huge fan. 

FRANCESC: Do you know what gRPC stands for? I think we've covered this already. 

MARK: Is it gRPC remote procedure framework? 

FRANCESC: Exactly. 

[LAUGHTER] 

It's a fractal name, which I love. 

MARK: Yeah, perfect. There's a really interesting blog post that came out from a company called Dgraph. They have an open source graph database that they write using gRPC. And they talk about actually how they go from originally using just the Go/RPC. So they use Go as their primary language, but they ended up wanting to replace it with gRPC. But the interesting part of it is, so, gRPC uses protobuf. 

FRANCESC: By default. 

MARK: By default. 

FRANCESC: Indeed, yeah. 

MARK: Which is cool, but you can actually switch it out. And because of certain tradeoffs they wanted to make with message [? sites ?] they were sending and what they were doing on both ends of the pipe, flat buffers was a better fit for them. And so they talk about why they made that decision, and how they ended up switching it out, because in gRPC, you can switch out what your encoding type is, which is really awesome. And they sort of stepped through all of that. It's a really, really interesting read about taking that open-source project and just extending it in the way it was meant to be extended. 

FRANCESC: Yeah. And I actually like a lot the blog post, because it's very, very, very code rich, which I really appreciate. They describe a little bit what they're doing, but also they just give you how they're actually doing it, with all the code, all the detail. 

MARK: Yeah. 

FRANCESC: Which I love. Very cool. 

MARK: I love the fact that they're also like, hey, this is what it looks like using Net RPC and Go. Here's all the lines of code. And then here's the, like, 10 lines of code that we now use for gRPC. 

FRANCESC: Yeah. Yeah, it looks pretty good. 

MARK: So well worth a read. 

FRANCESC: Yeah. We'll have a link to that blog post in the show notes. 

MARK: Absolutely. Excellent. So we are having a great chat with Emily and Lester from New Zealand at Trade Me. Should we move to chatting with them? 

FRANCESC: Let's go for that. Sounds good to me. 

MARK: Today we have the distinct pleasure of being joined by two wonderful people from New Zealand, very close to my old home country. We are joined today by Emily Melhuish and Lester Litchfield from Trade Me. How are you both doing today? How are you doing today, Emily? 

EMILY: Pretty good, yeah. Just another day. 

MARK: Another day. And you, Lester? 

LESTER: Awesome. 

MARK: Fantastic. So thank you so much for joining us. We really appreciate you taking the time. Do one of you want to give us a little bit of background on, say, who you are and what you do? Why don't we start with you, Lester? 

LESTER: Sure. My name is Lester. I'm a data scientist slash web analyst at Trade Me. That means I help a lot with things like A/B testing, stats, also helping to build products that incorporate data for prediction, text processing, those sorts of things. And also pretty deeply involved in the web analytics side of things, so helping tell the story of how our users behave so that people in our business can build stuff that makes them happy. 

MARK: Excellent. And you, Emily? 

EMILY: Hi, I'm Emily. I'm a full site developer hear at Trade Me, so I do a lot of C# code, so I work on both the back end and the front end of the site. I also am studying electrical engineering at the same time, because I like software and hardware equally. At the moment, I'm doing a lot of work around big data and how to get big data to other businesses, and also provide insights for our analytics people. And it's just been very interesting to work in data analytics, but from a developer's perspective and making our business insights a lot easier for us here at Trade Me. 

FRANCESC: Cool. So why don't you tell us and our listeners a little bit about Trade Me. What do you do? 

LESTER: So Trade Me is a pretty interesting company in that it started off as a marketplace but has grown to be a sort of way of life in New Zealand. 

[LAUGHTER] 

So not only is, like, pretty much everybody in New Zealand uses Trade Me to buy and sell stuff. We're a nation of cheapskates. We love getting a bargain. But also, we've expanded into other verticals as well. So we're one of the leading job websites in the country, one of the leading auto websites in the country, one of the leading real estate sites in the country. So we're pretty broad spanning-- big fish in a small pond, if you like. So that's a bit about Trade Me. 

EMILY: Yeah. We have-- like in New Zealand, we're pretty big. We have something like 60%, I think, of the web traffic, and we have a lot of people using us a day. I guess to America, we're kind of like Amazon or eBay, one of those sort of sites, but just solely for New Zealand. 

FRANCESC: Did you just say that you get 60% of the traffic in New Zealand? 

LESTER: That's a bit of a dodgy stat, I should say. 

[LAUGHTER] 

FRANCESC: I don't know. That is very impressive. Just curious. 

LESTER: Yeah, yeah. I mean we were the highest traffic site in New Zealand for quite some time. We're still the second highest from Nielsen stats. That's just below one of the major news sites. So we're a phenomenally big proportional amount of the traffic in New Zealand. 

EMILY: Yeah, definitely. 

FRANCESC: Awesome. 

MARK: Wow. OK, cool. So I know you do some interesting things with big data, as well as with Google Analytics integration. Do you want to talk to us about how you use Google Analytics at Trade Me? 

LESTER: Sure. So Google Analytics is our web analytics platform. We use it for heaps of things-- one, to understand where people come from to get to the site. Number two, what they do what they get there, what sort of pages they're using, what parts of the products they find useful, what sort of interactions lead on to goal completions or things we want people to do. We also use it to measure and attribute our marketing spend, and we use it to test things like conversion funnels, how people move through processes and then right to the end of the chain, so the value and the outcomes that different kinds of people are contributing to the business. So we use it across all of our sites and apps, so that's a desktop website, a mobile site, and about five or six different apps. 

EMILY: And for our side of things, we also use Google Analytics to provide business to business insights. So all of our customers like car dealers, real estate agents, we provide analytics to them on their houses and cars and how all they are faring on Trade Me. 

LESTER: One of the awesome things about GA is that you're able to take information from lots of different sites and apps and roll it up in one big master account. So in Emily's case, a motors dealer can find out how their products are being interacted with across all of our sites and platforms. 

MARK: Cool. Is there any particular features of Google Analytics that you use to do this sort of stuff? 

EMILY: Very recently, Lester has been using Google Tag Manager in addition to Google Analytics, and so that-- so Google Analytics gives you the source, the location of where people are coming from. But it doesn't have things that are quite custom to car dealers, say, like the vehicle model and the vehicle ID or anything like that. So we use Google Tag Manager to provide what's called custom dimensions. 

So on every page view or click or event, we send through a whole bunch of data all about what, say, that vehicle is. That then gets sent into Google Analytics, which we can then provide-- we can use to provide insights on. So in addition to basic web data, you can get more specific stuff. So Google Tag Manager's really good and really easily ties into Google Analytics. 

LESTER: Yeah, it's pretty cool. You can put-- Google Tag Manager works around a data layer, so there's content that on the client side, you have this array or this dictionary which just holds heaps of data about what's going on at the time in a key value store. So you have the name of the car dealer, the color of the car, and all those sorts of things, sometimes up to 30 or 40 different things. And then any actions that happen on that page, like a click or a page view or an interaction, you can pick which ones of those you'd like to grab, bundle that all up, and send it as a hit to Google Analytics. So it's super flexible, and it enables you to pretty easily pass pretty rich data around. 

FRANCESC: Cool. So basically, if I understand correctly, what you're doing is you're sending a bunch of information to Google Analytics. You're tagging it in different ways. What happens with it afterwards? How do you process it? 

LESTER: Well, mainly you process it. 

[LAUGHTER] 

Then it's provided to us in all these lovely kind of built-in reports. But increasingly now, we're starting to use the integration with BigQuery. The reason that's really cool is because it gives us access to the raw data. It's totally unsampled. And it enables us to do ad hoc or pretty complex queries without having to really worry about compute power. 

We don't have the resource internally to look over a year's weblogs in a reasonable time frame. But you guys do, so that's sort of how we're using it. Emily can talk a little bit more about how she's been using the BigQuery API, which is really cool, the fact that that massive, massive datastore-- it's about 30, 40 gigs of day of logs we export to BigQuery-- is all available right behind that API for her to be able to kind of consume and aggregate or expose on the website. 

MARK: I'll take you back a step just real quick as well. So you want to talk a little bit about, what does that process look like for taking Google Analytics and pushing it to BigQuery? Is it just a checkbox, or is there a lot of work? What had to happen there? 

LESTER: It was sort of part of the GAP deal, really. It was offered to us as a feature, and we thought, oh, yeah, that kind of looks cool. So we said yeah, go ahead, do that. So they set up a cloud project for us, and then a little bit later, we were like, hey, we should have a look. And when we had a look, we would be like, wow, this is pretty impressive. Not only is there heaps of data there, and especially with the custom dimension stuff, it's really rich, but also the processing power is not like anything we've seen before. It's sort of the power of Grayskull, really, when you-- 

[LAUGHTER] 

FRANCESC: I got that reference. I'm so proud right  now. 

MARK: You mentioned a GAP deal. I don't know what that means. Do you want to explain that? 

LESTER: Google Analytics Premium. So it's just the difference between the free one, which is you have a lot of your data is sampled down, for obvious reasons. When half the web's using it for free, it's pretty hard to provide loads of processing power for that. To the paid version, so the paid version gives you unsampled reports, and also these integrations into BigQuery and other premium features. 

EMILY: I think that the best way Lester described it a few months back was that Google Analytics was for kids and then BigQuery was for the grown-ups, because it's like the real, raw data in there that you're going to query. 

MARK: So Emily, Lester was sort of sending it over to you to talk about how you use the BigQuery API. Do you want to talk a little bit about that? 

EMILY: Yeah, sure. So when we first started with BigQuery, it was kind of new and there wasn't much documentation on how people were using it. So we spent a lot of time trying to figure out how to use it. Eventually, of course, thankfully there is an awesome API that we can use. But obviously the awesome thing about BigQuery is you can run massive queries in a few seconds' time. 

However, we were looking at providing business end sites for our customers, and we sort of wanted a dashboard to load within a few microseconds or milliseconds, as opposed to five seconds that as a data analytics person, you wouldn't mind, but customers might get frustrated having to wait for data to come through. And because BigQuery, I believe, have like a one second minimum query. So as we have so much data in BigQuery, we had to figure out a way to get what we wanted out and be able to query it quickly and get the data to our customers, basically. 

So for that, what we did is we set up a scheduled app with the BigQuery API, and basically every day we go to the massive table, which I think is about 3.3 million rows, and we basically query, OK, grab me all of these people's listings on Trade Me, and give me all of the data. And we export that into our own database. And then from, there we can have our web app talk to our database and pull out the data very, very quickly. So that was a pretty good way to do it. 

And it means we can run the scheduled app at, say, 3:00 AM in the morning, and it'll be done in about, I think, 30 seconds, usually. Usually we're adding, say, about 30 gig of data. So every day, to get all of the listings that we need, it's about 30 gig of data putting into it, which is quite a bit. I usually play around with things to get the queries right, and I think the best query I got was 480 gigabits of data to be queried. And I think I did it in like 45 seconds, or something crazy. 

MARK: Nice. 

EMILY: That was pretty awesome. 

MARK: So basically from what I understand, you're basically pulling down aggregate information from BigQuery. Would that be pretty accurate? 

EMILY: Yeah. 

LESTER: Yeah. 

EMILY: Definitely. 

LESTER: Yeah, because it's got that level of granularity, and sometimes you want to go deep into their nesting. It's really interesting, actually, coming from a SQL background and doing a lot of SQL queries, where the longer you go down your table, the longer your query takes. But going down in BigQuery is easy. It's going right, so increasing down the levels of nesting. 

So I'm still not really sure whether the BigQuery table structure is SQL or non-SQL like, because it gives you a tabular format, but it's nested and you've got a lot of-- it looks almost sparse, because you've got a lot of nulls. So it's some kind of NoSQL sparsity cum tabular data format, and there's a few tricks to being able to pull up data from the lowest level of nesting to the highest, which have been fun to learn about. But it works brilliantly. 

MARK: So Lester, I'm quite curious, too. You're a data scientist. How has having access to all that data inside BigQuery changed your job in terms of how you interact with Trade Me and the data it provides? 

LESTER: Well, previously, we would be able to give very limited numbers of answers. We'd go, is your question addressable by one of our metrics? And sometimes we'd be able to get a half answer by doing 30 queries and joining them up. 

But now, pretty much with Google Tag Manager, every click is basically available to be tracked. And with BigQuery, any kind of condition or process or basically anything is there. So it takes the pressure off the data and means that answering the questions is about how good are you as a data scientist at framing the question and bringing through the answers kind of clear. So it puts the pressure on the science rather than the data. 

EMILY: It's also very easy to have a slight mishap somewhere in the data, and if that happens, a lot of your reporting does some interesting things. So in our scheduled app which basically queries all of the BigQuery data, what we actually had to set up was a lot of tests to check that the data was still coming through correctly. So that was quite cool. And the BigQuery API allows us to do that pretty easily and has quite good logging and everything for that. 

MARK: Cool. Also, Lester, you mentioned you do a lot of A/B testing. I know Google Analytics has some system tools and capabilities built into that. Is that changed as well within BigQuery now that you have that power, or is it still the same? How are you doing that? 

LESTER: We sometimes use Google Analytics content experiments, and they work really well in sort of a certain scope. My favorite thing is that it wraps some, on further reading, pretty meaty Bayesian stats in a really nice wrapper so you don't have to think about it. Unfortunately, sometimes you do have to think about it because the framework doesn't quite fit for the question you have. And the cool thing about BigQuery is we use Python quite a lot internally, and so I can go into Python, pull out some aggregates from BigQuery, and then run any kind of statistical processing over there from, say, scikit-learn or SciPy or any of those big scientific libraries. So it means that you get the freedom to kind of do A/B testing however you want based on the data. 

FRANCESC: Cool. So I was wondering, at some point you were talking about the fact that the way you use BigQuery, since BigQuery has that one second minimum for requests, what you do is you store some aggregates into some temporary database. Can you tell us a little bit more about that? Where is that database running? What kind of database is this? 

EMILY: Yeah, sure. So for us here at Trade Me, we have quite a lot of different databases everywhere. So we do have one big database that stores basically the last day's data. So what happens is because there's a bit of delay between getting everything flowing from Trade Me to Google Tag Manager to Google Analytics, then into BigQuery, and then our scheduled app to query that, we usually get yesterday's data. And so what happens is that all gets-- so in BigQuery, each day is a new table, and so what happens each day for us is we append each day's data to our database, and we only hold about 90 days of data at a time. 

So basically, because for business insights we don't report back on 90 days, obviously, but if someone, say, wants to report on a year's worth of data, what we do is we then go to BigQuery, since the data is already there. So basically, we effectively cache 90 days of data, and then in BigQuery, if we want more data, they just have to wait more time to sort of get 90 days plus whatever more data. So that's quite good for us to store the data that we want immediately. But then if they want more, they can take more. Oh, sorry, they're in MySQL tables. 

MARK: I'm curious, do you run your own infrastructure? I don't know how good the cloud providers are in New Zealand. How does that locality work? 

LESTER: Sure. Yeah, we run our own infrastructure. So we have boxes. 

EMILY: Yeah. 

LESTER: Yeah, remember those days. And yeah, we have a ton of boxes. We're not super distributed as a model. We're largely on a kind of a Microsoft stack. 

So this is where it's quite interesting for us. Even beyond analytics, when you get into the data processing where the distributed models start to make a lot of sense, we may begin to investigate looking into how the Google Cloud Platform can help provide some of that distributed kind of processing power. 

MARK: So I'm guessing you've got local machines because latency, and because you know your audience is right there. But then when that immediate speed thing is not necessary as much and you're looking at how do we elastically scale our data processing, that's when you're sort of stepping into the cloud. Would that be correct? 

LESTER: Yeah. The nearest AWS is in Sydney, and the nearest Google data center I think is in Singapore. So Singapore to New Zealand is quite far. It's probably bigger than the continental United States. So it's quite far. 

FRANCESC: Cool. That's actually a very interesting way of basically using the cloud for the part that interests you, and the rest-- 

EMILY: Yeah. 

MARK: Nice. 

FRANCESC: Well, I think that we are almost running out of time, so is there anything that you'd like to add that we have not mentioned before? 

EMILY: OK, I have two cool things. One cool thing, because with BigQuery you can basically narrow down on really, really distinct stats and data about a certain view, and so with our tests that we run when we're querying the BigQuery API to check the validity of the data, there was a few times when the whole of the data layer and the [INAUDIBLE] dimensions were null, but there was still a view logged. So it was kind of interesting, and it was quite fun, because we got to be all like CSI detective to see like why is this happening. 

And what we actually managed to find was that there was a whole bunch of listings hit at the exact same time stamp with the exact same browser ID, and they had all of these listings. And so we what we actually managed to find out is that these were obviously bots scraping through the site, and they obviously went through it fast enough that the data layer didn't have time to populate and be set to GTM properly. So that was pretty interesting. And I think I was on Skype with Lester being like, oh my gosh, these bots, ahh! And so he was like, oh, block their browser IDs. 

And it was kind of cool. It was like a little wee detective moment to sort of be like, oh, bots, and block them from our data so they don't mess with it. So I thought that was pretty awesome to see that happening and then be able to stop them from affecting our data. That was pretty cool. 

MARK: Nice. Lester, you got anything? 

LESTER: Nothing that cool. 

[LAUGHTER] 

FRANCESC: That is fine. Well, I think we're running out of time, so thank you very much for taking the time to chat about Trade Me with us today. 

EMILY: Thank you for having us. 

LESTER: Yeah, thanks for having us. 

MARK: Thank you so much. 

FRANCESC: Thank you so much again, Emily and Lester, for such an interesting interview. I hope you learned as much as I did. It was very interesting to see how two different pieces of Google can collaborate together to make analytics even better. 

MARK: Yeah. I mean, I've only personally ever just kind of plugged in Google Analytics and just let it sit there and not really do a lot with it. 

FRANCESC: Yeah, I mean, that's what we do with the podcast, really. 

MARK: Yeah. 

FRANCESC: Like, we have Google Analytics. It's like the most basic thing we can do. 

MARK: Yeah. So it's actually really interesting to see how people are kind of pushing the envelope in terms of what you can do with it. 

FRANCESC: Maybe you should add some of those features to the podcast. 

MARK: Maybe you should add them. 

FRANCESC: Yeah. Put a request. I'll work them. Anyway, so let's move on. Let's go with a question of the week. But actually, before we do the question of the week, there was a little cool thing of the week, which is maybe we should create a new section which is not called thing of the week-- it's a cute thing of the week. 

MARK: It is pretty adorable. 

FRANCESC: It is the most adorable guide to Kubernetes I've ever seen. The name is the Illustrated Children's Guide to Kubernetes. And if you have a kid and the kid wants to learn how to use Kubernetes and what it is, and loves cartoons and giraffes and cute gophers, it is just the perfect video. 

MARK: Or really if you're just a kid at heart. 

FRANCESC: I know I'm going to watch it later. 

[LAUGHTER] 

MARK: It is really-- you definitely should watch it. 

FRANCESC: Yeah, it is very, very cute. So we'll also have a link to that one in the show notes. It is adorable. 

But now for real, we're going to go with a question of the week, which was about App Engine Flex, App Engine Flexible Environment. So what was the question? 

MARK: So the question was around, how do you shut down an App Engine Flex project? Say you're prototyping or trying something out, maybe a proof of concept, something like that. You don't want to have it running all the time. Now, one of the trade-offs with App Engine Flex is you get a lot more flexibility. You can do whatever you want. But it doesn't scale to zero. 

FRANCESC: Yeah. 

MARK: So you might want to shut it down. Now, previously this was kind of tricky. You had to kind of jump through some loopholes and do some fun things, and it wasn't great. The great thing is now there's a simple command that allows you to do it. 

FRANCESC: Nice. And what is the command? 

MARK: So it's a version-specific command, so you're like, hey, I want you to shut down this version. 

FRANCESC: OK. 

MARK: So you can say gcloud preview app versions stop, and then the version name that you want to shut down. 

FRANCESC: Nice. Sounds simple. 

MARK: It's pretty simple. So you can kind of work on something for a few hours or your day, and then once you're done at the end of the day, you shut it down and you don't have to worry about paying for it. 

FRANCESC: Very cool. That sounds very useful, especially once your application is in production and you actually have real traffic, please don't do that. It's a bad idea. But if you're just getting started and you're working on it once a week and stuff like that, yeah, it's probably worth saving-- 

MARK: Saving a bit of money. 

FRANCESC: --a couple cents in there. 

MARK: Well, it's really cool, actually. One of our teammates, Sandeep, wrote a whole blog post that we'll put in the show notes just discussing how to make cost savings when doing prototyping or proof of concepts with App Engine Flex. 

FRANCESC: Nice. 

MARK: And he goes through some best practices and things you can do to really bring those costs down until you're ready to bring in all that real traffic and have that come in. So well worth a read. We'll put that in the show notes. 

FRANCESC: Very cool. 

MARK: So I think that kind of brings to an end all of our stuff for today, Francesc. Are you going to be anywhere special in the next few weeks? 

FRANCESC: So, yes. Next week-- that will be actually not next week, but the week after that, I will be in Denver for GopherCon. 

MARK: Nice. 

FRANCESC: Yeah, very excited about that. It is one of my favorite conferences. So I'm going to be very, very excited to be able to do-- 

MARK: And I believe you're doing something pretty special there? 

FRANCESC: Yeah, I'm kind of doing an opening keynote, it seems. 

MARK: A little something. Just a little something. 

FRANCESC: A little something, yeah. Yeah, it's going to be fun to be on stage and see, like, I think it's 1,500 gophers looking at you. 

MARK: Yeah. 

FRANCESC: Yeah. Yeah, that's what nightmares are made of. 

MARK: Yeah, yeah. Just remember, I don't know, don't do anything too embarrassing. 

FRANCESC: Well, we'll see. What about you? What are your plans? 

MARK: So when this podcast releases, the day after that I will be in New York for Playcrafting in New York. There's going to be a Google panel there. And I have some other events coming up. Nothing is quite confirmed yet, so we'll see what happens. 

FRANCESC: Cool. Well, you can tell us more next week, then. 

MARK: Absolutely. 

FRANCESC: Great. Well, thanks so much again. Thank you, Mark, for sharing the time here today with me. And thank you all our listeners for being there. 

MARK: Absolutely. And again, if you have questions, comments, concerns, you feel like just saying hi, love having people do that sort of stuff and-- 

FRANCESC: We love people saying hi. 

MARK: We love people. 

FRANCESC: Yeah. 

MARK: Yeah, absolutely. 

FRANCESC: Well, see you all next week. 

MARK: See you next week. 
{{< /transcript >}}