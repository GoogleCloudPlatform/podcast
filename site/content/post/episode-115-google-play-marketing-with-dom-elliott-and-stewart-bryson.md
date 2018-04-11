+++
audioDuration = "00:31:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.115.mp3"
audioSize = 45732421
categories = ["Customer", "Analytics", "Data Studio"]
date = "2018-02-21"
description = "Melanie and Mark chat with Dom Elliott and Stewart Bryson about how they use our big data processing and visualisation tools to introspect the Google play ecosystem"
draft = false
episodeNumber = 115
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Google Play Marketing with Dom Elliott and Stewart Bryson"
linked = true
image="/images/post/play.png"
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/LYoT8C5Rfox"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7z67k4/episode_115_google_play_marketing_with_dom/"
+++

In this episode, Google Play Marketing is the customer of Google Cloud Platform. 
[Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) chat with Dom Elliott (Google Play) and [Stewart Bryson](https://twitter.com/stewartbryson) (Red Pill Analytics)
about how they use our big data processing and visualisation tools to introspect what is happening in the Google play ecosystem. 

<!--more-->

##### Dom Elliott
Dom Elliott leads global developer marketing communications for Google Play. His goal is to help Android app and game developers improve their app quality and business performance on Google Play, by raising awareness and understanding of features that can help them find success. 

##### Stewart Bryson
[Stewart Bryson](https://twitter.com/stewartbryson) is the Owner & Co-founder of Red Pill Analytics, a products and services company specializing in Cloud Analytics delivery. Red Pill is 4 years old and has about 30 employees in the US, UK and Brazil. We work with customers to accelerate their use of the public cloud for analytics, including migrating current on-premises workloads. Red Pill Analytics was engaged by Google Play to build the digital channel ingestion processes, as well as build all the Data Studio content for analyzing those channels.

##### Cool things of the week

- Easy distributed training with TensorFlow using tf.estimator.train_and_evaluate on Cloud ML Engine [blog](Easy distributed training with TensorFlow using tf.estimator.train_and_evaluate on Cloud ML Engine) [tweet](https://twitter.com/amygdala/status/963101405731958784)
- CI/CD with Less Fluff & More Awesome [blog](https://medium.com/@riknauta/ci-cd-with-less-fluff-more-awesome-28af61288a03)
- 96 vCPU Compute Engine instances are now generally available [announcement](https://cloudplatform.googleblog.com/2018/02/96-vCPU-Compute-Engine-instances-are-now-generally-available.html) [site](https://cloud.google.com/compute/) 

##### Interview

- Google Play [site](https://play.google.com)
- Google Data Studio [site](https://cloud.google.com/data-studio/) [docs](https://support.google.com/360suite/datastudio/?hl=en#topic=6267740)
- Adding charts to Data Studio [docs](https://support.google.com/datastudio/answer/6291062?hl=en) 
- Google BigQuery Data Transfer Service [site](https://cloud.google.com/bigquery/transfer/) [docs](https://cloud.google.com/bigquery/docs/transfer-service-overview)
- Google App Engine [site](https://cloud.google.com/appengine/) [docs](https://cloud.google.com/appengine/docs/)
- Cloud Cloud PubSub [site](https://cloud.google.com/pubsub/) [docs](https://cloud.google.com/pubsub/docs/)
- Cloud Functions [site](https://cloud.google.com/functions/) [docs](https://cloud.google.com/functions/docs/)
- Google Cloud Pub/Sub Triggers [docs](https://cloud.google.com/functions/docs/calling/pubsub) [tutorial](https://cloud.google.com/functions/docs/tutorials/pubsub)
- Cloud Natural Language [site](https://cloud.google.com/natural-language/) [docs](https://cloud.google.com/natural-language/docs/)

<div style="text-align: center">
  <a href="https://play.google.com"><img src="/images/post/play.png" style="margin: auto; max-width: 30%;"></a>
   <p style="font-size:0.8em">Google Play<p>
</div>

##### Question of the week

If you want to be able to unit test your integrations with Kubernetes with client-go, how can you mock what happens inside the cluster in your unit tests?

- fake.Clientset [godoc](https://godoc.org/k8s.io/client-go/kubernetes/fake#Clientset) [code](https://github.com/kubernetes/client-go/tree/master/rest/fake) [example](https://github.com/markmandel/paddle-soccer/blob/master/server/nodescaler/scaler_test.go#L92-L97 )
- testing.Fake [godoc](https://godoc.org/k8s.io/client-go/testing#Fake)

##### Where can you find us next?

Melanie will be at [Fat*](https://fatconference.org/) in New York very shortly!

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 115 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: Great. How are you doing, Mark? 

MARK: I'm doing great. You're here in the studio with me, so I'm super happy. 

MELANIE: I'm still in the studio until-- 

MARK: [LAUGHING] Still. I love that "still." 

MELANIE: I never left. No, after this, I will actually be heading out to New York to go to FAT*. But that's for us to discuss later, at the end of the podcast. 

MARK: Yeah, but today we have a really interesting interview with two people, Dom Elliott and Stewart Bryson. Dom works for Google Play. And they are basically a client that uses Google Cloud Platform to look at analytics across Google Play. And Stewart Bryson is one of the people who helped build it. So we'll have a fun chat with them. 

MELANIE: But as always, we always talk about our cool things of the week, and we end with a question of the week. And this week's question is, if you want to be able to unit test your integrations with Kubernetes, with client-go, how can you mock what happens inside the cluster in your unit tests? Mocking is always a challenge. We'll get back to that one. 

So cool things of the week. I'm going to start this week and mention how Amy Unruh, who's one of our developer advocates, who we had on the podcast a couple weeks back talking about AutoML-- she's put together a blog post that's talking about easy distributed training with TensorFlow, using the tf.estimator train and evaluate on Cloud ML Engine. This is something that allows it to more easily train and transfer models, whether you're running it locally or distributed in the cloud. She gives a nice overview of how to do that, specifically using Cloud ML Engine. But this is something that you can use with different infrastructures like Cloud Engine, Container Engine, Google App Engine. So she gives a nice insight around what to think about and how to approach this and how to use train and evaluate. And we will definitely link that in show notes as we always do. 

MARK: Nice. I will go next. One lovely contribution from a community member on Medium-- CI/CD with Less Fluff and More Awesome-- written by-- I'm going to go with Rik Nauta. I'm going to guess that's right. He's writing about basically by combining several different things-- Cloud Builder, an open-source product called KEEL, Pub/Sub, Helm, GitHub, and Kubernetes-- putting that all together into a continuous integration and continuous deployment pipeline so that basically they can write code, turn it into a container, put that container into a registry, and then deploy that container up into Kubernetes as well. It's actually quite a thorough article that has lots of code in it. So if you're looking to build a continuous delivery pipeline, and maybe you're interested in any of those products, you might want to take a look. 

MELANIE: Yes, definitely. And last thing that's cool thing of the week is that we basically have generally availability on the Google Compute Engine machine types with 96 vCPUs that have up to 624 gigabytes of memory. So basically you can now take advantage of performance improvements and increased core count provided by the new Intel Xeon scalable processors, the Skylake. 

MARK: Nice. Yeah, and that works both across custom machine types, as well as pre-defined machine types as well. So more cores. 

MELANIE: More cores. 

MARK: More core is better. 

MELANIE: All right. Well, Mark, I think it's time to go talk with our guess for this week's podcast. 

MARK: Let's go to that, then. Today I am excited and pleased to have two people here joining us today. Dom Elliott, who is the global developer marketing communications person for Google Play, as well as Stewart Bryson, who is the owner and co-founder of Red Pill Analytics. They're here today to talk to us about how they've used GCP with Google Play marketing. How are you both doing today? Dom, how are you doing? 

DOM: Yeah, very good, thanks. Thanks for having me. I'm over in cold London. 

MARK: Excellent. Stewart, how are you doing today? 

STEWART: I'm doing fantastic. It's a little cold in Atlanta, but probably not London cold. So I'm happy. 

MARK: Oh, oh I didn't realize-- you're in my old hometown. I lived in Atlanta for a number of years. 

STEWART: Ah, excellent. 

MARK: Excellent. Well, before we get stuck into talking about Google Play marketing and what you do with Google Cloud, why don't you tell us a little bit about yourselves and what you do. Dom, do you want to go first? 

DOM: Sure. So I'm on the Google Play team. My goal is to help Android app and game developers be successful in Google Play. And the way I do that is to lead the comms we do out to developers. So we tell them about all our new product launches on Android and Google Play, help them understand our features, produce case studies, and then use various marketing channels to reach them, like our website, developers.android.com. And we use YouTube, blogs, Medium, social channels, a lot of email marketing. We speak at events. All those kind of things. 

MARK: Awesome. Stewart, you want to go? 

STEWART: Sure. Yeah. I'm the owner and co-founder of Red Pill Analytics. We're a company that's about four years old, employ around 30 people in the US and Brazil, and one individual in the UK. We focus on analytics. That's our bread and butter. At the beginning of our company, we were firmly an on-prem analytics software company. And about two years ago, we made the transition to trying to go after the public cloud and really helping all size organizations really move their either new implementations or their existing analytics workloads into the public cloud. 

MELANIE: Great. Well, so you both have been working together on this project. Can you tell us a little bit about the project? 

DOM: Yeah, sure. I'll start. As I mentioned, we use a lot of different channels to communicate with developers, and we have a really large, engaged developer community who develop for Android. It's the world's most popular operating system. And we want to make sure that we're measuring the health of the ecosystem and checking that we're reaching the right developers and that they're engaged with our channels and content-- to make sure that we can understand how they engage with our content and our channels. 

And so in the past, we've done this in a fairly manual way. Every marketing channel we use, like our website or YouTube or our social media accounts-- they will have their own products that you can log into to start to pull data to see how many people you're reaching, what they think of your content, and where people are engaged, and that kind of thing. And it would be super manual. 

We'd do every month or whenever we need to pull a report-- you've got to go into a dozen places, pull all this data, try and present it nicely in Google Slides, and then share it round internally. It's just a big waste of time, really. And if you're doing that, you're not putting your effort into actually creating content and engaging with partners and helping people. So we thought that there was a better way, which is when we started looking into what Google Analytics, specifically Data Studio, could do and how that could work with Google Cloud Platform to actually pull all that data in one place. 

MELANIE: How did you end up connecting up with Stewart on the project? 

DOM: So Stewart was actually a recommendation of a colleague of mine. We wanted someone with some expertise on these various products, Data Studio and Cloud Platform. And I think it was a Data Studio colleague who mentioned Red Pill analytics, so we got in touch 

STEWART: We're so glad they did. We approached this very much-- even though it was Google, and Google's a big company, obviously, but Dom's team is just a group of marketers, right? So marketing communications. So we approached this very much as we would any marketing company, really. Although they are Google, and most of the avenues and digital channels that we were interested in are Google platforms, they're public Google platforms. So this implementation will be applicable for, really, any organization. 

We knew also that because Dom's team really didn't have access to engineering resources, we wanted to make this really easy. We wanted it to be something that they could support once we left, which was very, very important to us. And so the Google Cloud Platform was perfect. So we focused on serverless technologies as much as possible. We focused on things that would just scale and continue running once we left. And the platform really provided a lot of technology that we could use pretty easily. 

MARK: So just so this is 100% clear as well-- even though you're both basically working for Google Play, you're basically like an external company using GCP. There's really no difference here. You're not getting any particularly special treatment, as far as I can tell. 

DOM: No, yeah, exactly. From a marketing perspective, we're pulling all this data from, essentially, public APIs, via Google Analytics, YouTube analytics, and so on, and then even some other non-Google platforms like Twitter and LinkedIn. 

STEWART: Yeah, it was very much an API-driven approach. We did utilize BigQuery data transfer service, which is also available to anyone to pull something straight from Google platforms. But in general, the main approach was to go after APIs. All of the social media and digital channels have APIs, data readily available. We just needed to consume it and ingest it in a straightforward way, get it into BigQuery eventually, and then just let the power of Data Studio really give Dom and his team a single point of access for all this data so that they can see which channels are performing, which channels are reaping the most benefits from their outreach. 

MELANIE: And is there a reason why you chose to go with GCP versus using internal tools? 

DOM: I'm not really sure what internal tools we'd use. Most of our internal tools are-- we measure very closely usage of our products and things like that. So I work on a product called Google Play Console, which is how developers publish their apps and kind of manage their app business on Google Play. So we look very closely at usage and engagement of that and see which features are working and so on. But there wasn't an obvious internal tool to pull together the various marketing channels that we're talking about, like web and video and email and things like that. So I'm sure some clever Google engineer could have built something from scratch, but it totally just seemed really obvious to us to use this-- what was publicly available. 

MARK: Cool. So I want to take a step back because we've mentioned the end product in passing, and we're not a visual medium, unfortunately, so people can't see it. But Dom, can you explain the end result? Like what do you see here, what does Data Studio give you? What is the actual product that you have finally built at the very end? Then maybe we can move backwards from there. 

DOM: Sure. I would describe it as a-- if you were kind of a traditional, it's like a living version of a presentation, and each slide is essentially a report on a different marketing channel that we use. And it's really visual. It's in Data Studio. It's got graphs and stats. And each graph has trends versus previous months. We slice data based on different things like country or engagement, by different dimensions depending on what the data is. We have about 11 different pages in this report, one for each of our main marketing channels-- going from web to app to email to ads to video to blog posts, and then social and then events as well. 

MELANIE: And is part of it used to help decide where to spend more efforts towards different marketing channels? What are some of the decisions that you like to make off of this? 

DOM: At a high level, it helps us understand the health of each channel. Are these channels growing, are there particular countries which are very engaged or not very engaged, where we should dial up or dial down our efforts. For specific channels, we can see if-- for the app data, we pull them from Firebase, for example. When we release an update, is that resulting in a sudden increase or a sudden drop and engagement? We can see those kind of things. And then it helps us a lot with the various pieces of content we put out on channels as well. It helps us with optimization and planning going forwards. 

MARK: Cool. 

DOM: Another use of the report is internal reporting, essentially. So we can tell various stakeholders in all the other teams-- the product team, business development team, our various VPs-- when they just want to dive in and just get a snapshot of what's going on, see how engaged the developer community is in various places. And they can do that really easily now. When those kind of fire drills came in in the past, we would have to run along and pull all that data on the fly, but now we just have it all in one place. 

MARK: Lovely. So Stewart, I'm going to come to you now. We are the GCP Podcast. You mentioned previously that this was a lot of serverless stuff, sort of unmanaged as much as possible. What products did you actually use to build this whole data pipeline? 

STEWART: Yeah, we went through several iterations. The total project length was about three months. We took a look at the landscape of all the products we could use. We initially considered Dataflow, but really for these-- for instance, Twitter has a streaming API, and JavaScript really fit the bill well. 

So at the very heart of this is App Engine. App Engine is the application that's pulling all the different social media APIs. So App Engine grabs that stuff. And initially, our first iteration was just App Engine to BigQuery, some great node packages for writing directly to BigQuery from JavaScript. And that was the initial iteration, but then we started to rethink it as we added additional social media channels. So we went after Twitter and then LinkedIn, and then we looked at it Medium. 

So as we architected this in a very iterative way, we started introducing some other aspects. So Pub/Sub became valuable for us because, initially, we're streaming data. We're using the streaming API to pull data from Twitter. But that doesn't give us likes and retweets. The streaming API doesn't give that, and that's really what Dom's team was super interested in. So we had to use the batch API against Twitter to pull all those retweets and likes. 

And Pub/Sub subscriptions made it very easy for us to manage going at the data from multiple avenues. And then, again, we started to-- as we ingested more and more social media sources, we introduced Cloud Functions, and Cloud Functions allowed us to be a little bit more event-driven in how these different social media messages are processed. 

So the final architecture was really App Engine pulling data from all of these different places, ingesting it in Pub/Sub, and then having Cloud Functions react to that ingestion. And part of it was just using the Natural Language API that Google has available. So we were also tracking sentiment analysis, which wasn't really initially one of the requirements, but it was so easy to do that we started doing it. And I think Dom and his team have really gotten good value out of that aspect, not just seeing how many retweets or likes but also sort of measuring the sentiment of those different social media messages. 

MELANIE: So that's great that you're using sentiment. What are some of the ways that you're applying it, in terms of utilizing it for decisions that you're making, or how are you looking at sentiment? 

DOM: On Twitter and LinkedIn in particular we're seeing how sentiment is tracking over time. We're sort of looking out for any dips or any particular increases and seeing what are the popular posts around that time. And because of the data we're showing, we can then go and see which handles are getting a lot of engagement around those tweets, and then maybe we can-- if it's something a little bit negative, we can see if we can help. We can point people to our support resources or to our operations team if there's something we can help with, if there's something we should escalate on Google Play. Or if it's positive, maybe we can retweet it or look at what the developer audience is sort of enjoying and engaging with. 

MELANIE: Nice. And then, Stewart, there's a really great overview in terms of the type of products that you guys are using. What were some of the challenges you were up against when you were building this out? 

STEWART: Well, time was one of the things that-- we had to build this in a reasonably quick amount of time. Three-month project for this many data sources was-- I won't say daunting. But an on-prem implementation would have taken much, much longer. I think the idea that we were just able to-- I mean, there's provisioning, just get up and get going was an important part. 

I think also in a project like this, we often focus a lot on the data movement and how the data is ingested and ultimately finds its home in BigQuery. But sometimes Dom had some very specific visualization requirements. He knew what he wanted it to look like. He knew how he wanted to be able to present this to management and to the rest of his team. 

So really, Data Studio shines in that way. It's based on Google Drive, so we could make changes to Data Studio reports and dashboards as Dom was watching. And he could even dip his hand in there a bit and say, no, I'm thinking more like this. And we could see those changes at the same time. So it's really unusual for an analytics tool to have that kind of interactive capabilities. And I think just the iterative process of trying out some visualizations, seeing if it sticks, seeing if it fits what Dom has in mind for trying to report on this stuff, was really valuable. 

So I think from a high-level perspective, it's just the challenge of trying to get this many data sources visualized in exactly the way he wanted it-- was really the biggest challenge. And I can't imagine-- there is no analog equivalent to trying to do that without cloud architecture. 

MARK: Stewart, I got an interesting question for you. So you mentioned a little while ago that you're using both App Engine and Cloud Functions. I know something we've talked about in the past is where to apply what type of compute resource to what sort of workload. I'm curious to know how you made the decision about what things were going to end up on App Engine and what things would end up on Cloud Functions and why. 

STEWART: So initially, everything was in App Engine. So that was just the easiest way to do it. We were pulling, and in the App Engine code, we were pulling and writing the BigQuery. It was as we started ingesting multiple data sources that we realized we needed to respond to this in more of an event-driven manner. 

For instance, the Twitter example-- the streaming API versus the batch API. It would be difficult to write that sort of two-headed process in App Engine. So one of the easiest decisions was to start ingesting that stuff in the Pub/Sub so that you could have one Cloud Function that's responding to the events as they're going into Pub/Sub, but then App Engine was able to continue to do the streaming side of it. 

So it was the approach to trying to both pull from a streaming API and also periodically process using the batch API. Some of those same data sets. We had to work through what we thought was the life of a tweet. There's a lot of thoughts on that, but I think we decided on seven days. Right, Dom? So for seven days, we would continually look at-- a tweet came through the streaming API, and it became very easy with the Cloud Function to respond to those streaming tweets and periodically go query the batch API to find out if there's been any retweets, likes, et cetera. 

MELANIE: Do you have a rough gauge for how much data you were processing, like per day, per minute, per hour? 

STEWART: It's really not a lot when you look at it. We've got some targeted hashtags, targeted handles for all these different social media avenues. And it's the other reason why we sort of shied away from Dataflow. Dataflow can process huge amounts of data at scale, but it would have required us to dip into Java or Python. So the fact that App Engine and Cloud Functions gave us the ability to do a lot of this in JavaScript-- and that's the best language to be working with some of the social media APIs. 

MELANIE: The question I wanted to ask is that since, clearly, you've been using GCP products, is this common that you see these types of combinations? What are some things that you typically see, or the type of products that you need to put together for your clients? 

STEWART: Yeah, really, when you start looking at-- is the data sitting behind a REST API? So in the past, especially with on-prem software, everything's so relational in nature, right? Your source systems are relational based, your target data warehouses are relational based. 

I think when you look at where does GCP really shine for analytics workloads-- and obviously it can handle all of those use cases as well. But it's the API-driven approach that analytics is really moving to today. And that is that data is coming from a lot of places. It's not a single source system that has all of your information. As more and more companies our size and even companies the size of Google-- a lot of their data is sitting in a lot of disparate places. And the fact that we can write these event-driven workflows that can go grab this data from behind a REST API, process it in a meaningful way-- and also the iterative approach for which we were able to take social media sources, architect them from start to finish, land them in BigQuery, and start building reports in just a few days. 

So the value that it really brings-- and I think Dom could speak to this as well-- the value that it really brings is how quickly we were able to hit the ground running, how quickly we were able to prototype a particular digital channel, develop a dashboard in a report in Data Studio, get feedback, loop back around, and start that iterative process again. And we were constantly in flow with building and delivering additional data sets. 

And just the interactive and collaborative approach that Data Studio takes is really unlike any other visualization tool that we've worked with. The ability to be able to just everyone collaborate on a Data Studio report in the same way you would with Google Docs or Google Sheets-- it was really valuable from that whole analytics process of trying to get exactly the right visualization that Dom's team was looking for. And that took several iterations to get it just right. And we were able to do that really easily in Data Studio. 

MARK: Dom, how is the experience for you of this, as you being the end user? 

DOM: I agree with most of what Stewart said. It was great, actually. I was constantly surprised at what was possible, really. It was really very helpful doing everything iteratively because I had sort of rough ideas at the very beginning, but I didn't really know what was possible in these products. And so I'd sit down with Stewart and Phil, and we'd talk through various ideas, and they would let me know what's possible. And then they could go away and just put something together straightaway, really quickly, something scrappy. 

And we'd have a look at that, and then we could keep iterating. So it worked really well. And then, yeah, as Stewart mentioned, Data Studio has-- the front end UI is like using Good Docs or something, so I could jump in and toggle, test out, changing little things myself without actually going into the code. 

MARK: And, Dom, I'm also wondering, now that you have this tool, what's been the most interesting or surprising metric that you've been able to pull out of it that you wouldn't necessarily have been able to do before? 

DOM: A lot of this data is-- the data is buried in different places. Well, we didn't have the sentiment data at all, so that is really interesting. Some of the things I like the most are diving into different countries and just seeing the engagement that we get in different countries. 

Android is exploding at the moment in-- we call them next billion user markets or growing markets, like India and Vietnam and Indonesia. And I'm able to see in this dashboard as well, going through the various channels, we have huge engagement in those regions. We can see specific countries who are really, really engaged on our channel and consuming all of this content, and that's been really great. 

So we can then see, OK, they're reading all this-- this country, say Vietnam, is really, really engaged in reading all our content in English. And so we can do a better job there, and we can go and localize the content because the developer audience is there, and produce more content in Vietnamese for them. So those kind of loops have been really satisfying. 

MELANIE: Well, I know we're getting close to time, but I wanted to ask you, and both of you, what are some key lessons learned, takeaways that you haven't already talked about that you'd recommend to people who are considering this type of project or something along these lines? 

STEWART: I think be iterative. I've mentioned that before, but jump in. One of the best things about the Google Cloud Platform is that you can get started on day one. For instance, Data Studio has direct connectors to a lot of these sources. And although we knew that we wanted to land the data in BigQuery for posterity's sake, we were able to prototype immediately with the built-in connectors to things like YouTube and Google Analytics and start that whole process of trying to figure out exactly how Dom and his team wanted to see that data. 

So while we had one member of the team with direct connectors from Data Studio working with Dom's team, really on day one, prototyping some of the ways that he was thinking about visualizing this data, we had other members of the team working on capturing that data using things like App Engine, writing that data to BigQuery, figuring out how we wanted to store it in BigQuery. And it was a complete iterative process. 

So once the data-- it took us a little time to get the data transfer service running. Once that data was landing in BigQuery, we slowly refactored the Data Studio reports and dashboards to go after the BigQuery data. In some instances, we continue to report against the native connectors. So we have dashboards that blend content from the native connectors with the data from BigQuery. And that sort of flexibility was really eye opening. 

I think in a lot of analytics projects you spend so much time trying to land and ingest the data and get the data just right, and then the analytics starts. And quite often, that piece is brushed over because you're running out of time, and maybe you don't get exactly what the end user is looking for from a visualization perspective. We were able to start the visualization process immediately using the native connectors, and then just slowly refactor over time. 

So I think if I were to take one major lesson from building analytics, especially a greenfield implementation in the Google Cloud Platform is just be iterative, roll up your sleeves, get started, and also don't be afraid to write a little code. So with APIs, it's going to be difficult to find just the right tooling to go after, something that's API driven. So you've got to not be afraid to use tools like Cloud Functions, use a tool like App Engine and Pub/Sub to build the right event-driven architecture. 

MARK: Cool. How about you, Dom? 

DOM: In general, I was just pleasantly surprised at what was possible. I think the small amount of work up front is really worth it to save time in the long run. And then these reports are really flexible and help you save time and do your job better. And on Data Studio in particular, I love a bunch of the visualizations we're using now which we just weren't using before. Well, I mean we weren't using bubble charts at all before, and now they're one of my favorite visualizations. And we've got heat maps and geographic maps and just a bunch more interesting, insightful visualizations that we can start to draw interesting conclusions from. 

MARK: Awesome. 

MELANIE: It's expanding your knowledge on the system. 

DOM: Yeah, exactly. 

STEWART: Let me just jump in there and say how easy it is to change visualizations into to test particular visualizations. Geography's particularly easy in Data Flow. It just knows when you're dealing with geographic data. The way it handles time-based prompts for you to be able to choose a particular time frame for whether you want quarterly, monthly, trending, et cetera. It just sort of gets all that. So the built-in sort of functionality for constants like geography and time is really pleasing. If you look at on-prem versions of this kind of software, it's not near that easy. So Data Studio really shines in handling those sorts of known data types. 

MARK: Fantastic. Well, we've definitely run out of time, but such a pleasure talking to both of you. Stewart, Dom, thank you for spending the time with us today to talk about what you've been doing over at Google Play with all your data and Data Studio. 

DOM: Thanks for having us. 

MELANIE: Yes, thank you. 

STEWART: Yeah, thanks very much for having me. 

MARK: Thanks so much to Dom and Stewart to have a chat with us about Google Cloud Platform and how it was actually used internally inside Google. Not just external customers use it. We do have plenty of internal customers as well, so it was a really interesting conversation. 

MELANIE: Yeah, I agree. It's nice to hear about how the Cloud Platform is being used to solve problems that we know others will be experiencing, whether they're internal or external. So questions of the week. If you want to be able to unit test your integrations with Kubernetes with client-go, how can you mock what happens inside the cluster in your unit tests? Mark? 

MARK: Yeah, so this is something I do a lot with because I mock around with Kubernetes a lot. Probably if you're familiar at all Kubernetes, you may be familiar with kubectl. You're probably familiar that from kubectl, behind that is a Kubernetes API. Client-go is the go client that you can use for basically talking to Kubernetes. So if you want to programmatically create pods or deployments or pretty much anything in inside Kubernetes, you can do that through client-go. 

What I don't know if is as much known by people is there's a whole fake section to it that enables you to basically mock out how things work. So you create a client set with client-go, and then when you wanted to use it in testing, you can create this fake client set. And what you can do then is add these things called reactors to it. And I'll put links in they show notes. Reactors are lovely in that you can basically control what happens when things happen for the client set. So you might be like, list pods. And you'll add a list pods reactor, and then you'll be like, these are the pods that will be shown now. And it'll work just like it would do as if it was connected to a real cluster. But you just have full control over it, and you can basically tell it to do whatever it is you need to do inside your unit tests. 

MELANIE: That's nice. 

MARK: It's actually really nice. 

MELANIE: Testing is hard enough, so when you have something you can help with that, that's really valuable. 

MARK: So I'll put links to the documentation in the show notes. I'll also link to some demo code I have in one of my GitHub repositories so you can see it in action as well. 

MELANIE: Great. Mark, going anywhere special in the next couple weeks? 

MARK: Nope, same old answer as always, game developer conference here at Google. The stuff I can talk about is that we have a developer day across Google where we will have people from Google Cloud Platform, people from Daydream, people from Play talking about that on the first day of Google game developers conference. But we'll also have talks at the booth on the show floor, as well as meet the expert sessions, and all sorts of good stuff. 

MELANIE: That's great. 

MARK: And I think you're away right now, I believe. 

MELANIE: I will be away shortly, and I will going to FAT* in New York as I was talking about earlier in the beginning of this podcast. And then I'll come back, and we'll get back in the studio again and talk about more things, all the things. 

MARK: All the things. Awesome. All right. Well, Melanie, thank you so much for joining me yet another week on the podcast. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

{{< /transcript >}}