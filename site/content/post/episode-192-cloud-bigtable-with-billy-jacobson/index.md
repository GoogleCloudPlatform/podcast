+++
audioDuration = "00:33:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.192.mp3"
audioSize = 48408690
categories = ["Cloud Bigtable", "Data Analytics"]
date = "2019-08-28"
description = "Google's own Billy Jacobson joins hosts Mark Mandel and Mark Mirchandani this week to dive deeper into Cloud Bigtable."
draft = false
episodeNumber = 192
hosts = ["Mark Mirchandani", "Mark Mandel"]
title = "Cloud Bigtable with Billy Jacobson"
image="/post/episode-192-cloud-bigtable-with-billy-jacobson/images/hero/hero-EP-192.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/cwnt7u/episode_192_cloud_bigtable_with_billy_jacobson/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Google's own [Billy Jacobson](https://twitter.com/billyjacobson) joins hosts [Mark Mandel](https://twitter.com/Neurotic) and [Mark Mirchandani](https://twitter.com/markmirch) this week to dive deeper into Cloud Bigtable. Bigtable is Google's petabyte scale, fully managed, NoSQL database. Billy elaborates on what projects Bigtable works best with, like time-series data user analytics, and why it's such a great tool. It offers huge scalability with the benefits of a managed system, and it's flexible and easily customized so users can turn on and off the pieces they need. 

Later, we learn about other programs that are compatible with Bigtable, such as JanusGraph, Open TSDB, and GeoMesa. Bigtable also supports the API for HBase, an open-source project similar to Bigtable. Because of this, it's easy for HBase users to move to Bigtable, and the Bigtable community has access to many open source libraries. Billy also talks more about the nine clients available, and when customers might want to use Bigtable instead of, or in conjunction with, other Google services such as Spanner and BigQuery.

<!--more-->

##### Billy Jacobson

[Billy Jacobson](https://twitter.com/billyjacobson) is a developer programs engineer focusing on Cloud Bigtable.

##### Cool things of the week

* Introducing Cloud Run Button: Click-to-deploy your git repos to Google Cloud [blog](https://cloud.google.com/blog/products/serverless/introducing-cloud-run-button-click-to-deploy-your-git-repos-to-google-cloud)
* Firebase Unity Solutions: Update game behavior without deploying with Remote Config [blog](https://cloud.google.com/blog/products/gaming/firebase-unity-solutions-update-game-behavior-without-deploying-with-remote-config)
* Introducing the BigQuery Terraform module [blog](https://cloud.google.com/blog/products/data-analytics/introducing-the-bigquery-terraform-module)
* Macy's uses Google Cloud to streamline retail operations [blog](https://cloud.google.com/blog/topics/customers/macys-uses-google-cloud-to-streamline-retail-operations)

##### Interview

* Cloud Bigtable [site](https://cloud.google.com/bigtable/)
* GCP Podcast Episode 18: Bigtable with Ian Lewis [podcast](https://www.gcppodcast.com/post/episode-18-bigtable-with-ian-lewis/)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Bigtable Documentation [docs](https://cloud.google.com/bigtable/docs/)
* Codelab: Introduction to Cloud Bigtable [site](https://codelabs.developers.google.com/codelabs/cloud-bigtable-intro-java/index.html#0)
* Key Visualizer [docs](https://cloud.google.com/bigtable/docs/keyvis-overview)
* Bigtable Replication Documentation [docs](https://cloud.google.com/bigtable/docs/replication-overview)
* Bigtable and HBase Documentation [docs](https://cloud.google.com/bigtable/docs/hbase-bigtable)
* HBase [site](https://hbase.apache.org)
* JanusGraph [site](https://janusgraph.org)
* Open TSDB [site](http://opentsdb.net)
* GeoMesa [site](https://www.geomesa.org)
* Bigtable Client Libraries [docs](https://cloud.google.com/bigtable/docs/reference/libraries)
* Cloud Spanner [site](https://cloud.google.com/spanner)
* Managing IoT Storage with Google's Cloud Platform (Google I/O'19) [video](https://www.youtube.com/watch?v=2j1BVZOMqWU)
* Cloud Datastore [site](https://cloud.google.com/datastore/)
* Cloud Firestore [site](https://firebase.google.com/products/firestore)
* Mapping the invisible: Street View cars add air pollution sensors [site](https://sustainability.google/projects/airview/)
* Breathing Easy with Bigtable [article](https://medium.com/google-cloud/breathing-easy-with-bigtable-b58eb302cc1a)

##### Question of the week

[If I have an organization, how do I break down my billing data by folder?](https://cloud.google.com/blog/products/data-analytics/analyzing-gcp-costs-using-folders-and-bigquery-billing-export)

##### Where can you find us next?

Mark Mirch is working around town but will be headed to LA soon.

Mark Mandel will be at [Pax Dev](https://dev.paxsite.com), [Pax West](https://west.paxsite.com), [Kubecon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/), and the [GDC Online Games Technology Summit](https://www.gdconf.com).

{{< transcript "[MUSIC PLAYING] MARK MANDEL: Hi, and welcome to episode number 192 of the weekly Google Cloud Platform podcast. My name is Mark, and just for funs, I'm joined by Mark again. How are you doing, Mark?" >}}

MARK MIRCHANDANI: Hey, Mark. I'm doing well. How are you? 

MARK MANDEL: I'm good. Just to confuse people who are listening, it's Mark and Mark. 

MARK MIRCHANDANI: Always excited to come on here and have the two Marks talk about all the cool Google Cloud things. 

MARK MANDEL: Actually, what I should do is I should say my name's Mark, and I should say your name is Mark, and then I use the appropriate accent at the appropriate time. 

MARK MIRCHANDANI: [LAUGHS] I don't think I can-- I don't think I have an accent that I can switch to so quickly like that. 

MARK MANDEL: [LAUGHS] Anyway, why don't we get stuck into the actual podcast? Who are we talking to this week? 

MARK MIRCHANDANI: Well, this week, we're talking to Billy Jacobson about Bigtable, which is something we have not talked about in quite a while. So super interesting to hear a little bit more about, especially for people who haven't used it, what Bigtable is good for, what it's not good for, how it kind of plays into all of the different products that Google Cloud Platform has. 

MARK MANDEL: Great interview with Billy as well. Then I have a fun question for you wherein I ask you if I have an organization for my GCP project, how do I break down my billing data by folder? 

MARK MIRCHANDANI: Yeah, it's a surprisingly-- you know, it takes a little bit of extra work to do that. But it is something that anyone who is running a GCP organization is super interested in knowing because well, as it turns out, when you pay money, you like to generally track where it's going. 

MARK MANDEL: I guess. 

MARK MIRCHANDANI: I mean-- 

MARK MANDEL: It's fine. 

MARK MIRCHANDANI: --just not throwing dollar bills everywhere, just not making it rain, right? You need to know. 

MARK MANDEL: You need to know. These things are important. Awesome. Well, why don't we get stuck into our cool things of the week so we can talk about all the other fun stuff that's coming up, too? 

[MUSIC PLAYING] 

What do you got? 

MARK MIRCHANDANI: Sounds good. Well, the first thing I've got is our Cloud Run button, which is, first of all, it's a button so that immediately makes it more fun and very cool. We actually talked about this a couple of weeks ago or maybe a few months ago, but now it's built into the Google Cloud official GitHub repositories. 

And it's a pretty simple-- it's actually pretty much just a link. So if you've got your code on GitHub and it either uses a build pack or it's Dockerized, then you can just take this quick button, put it into your GitHub repo, and then people who are viewing that repo can click the button and it'll just send it right over to Cloud Run. 

So you don't need to do any additional work. It's just a really fantastic way for someone to take your code and be like, oh, well, I can see the code, but let me see what it actually looks when I run it. Well, just by clicking this, it'll set up Cloud Run on their account, it'll get the code in there, it'll install it, and then you'll have that serverless ready to go. 

MARK MANDEL: Oh, that's sweet. So if I have, like, a little app or something in GitHub, I can just push a button, it will install in my project, and I can just Cloud Run it. 

MARK MIRCHANDANI: That's it. You can just Cloud Run it, and then people can see, like, hey, you know, it's great to see the code, but let's see what it actually does. 

MARK MANDEL: Nice. Very cool. I've got a fun one, too, by a fellow teammate. Dane Zeke Liergaard did an article and has written a solution for Firebase Unity Solutions-- update game behavior without deployment with Remote Config. 

So Remote Config's a great Firebase tool. It can be used for mobile apps especially if you want to be able to change how your app behaves. At runtime, basically you can change configuration values within the Firebase console, and that gets propagated out to all your applications. And you can be like, make this thing blue, or red, or et cetera. 

This is also great for games as well. Maybe you want to change things like difficulty levels or how many hit points are available to certain characters in the game or if you want to balance your play style or your play mechanics inside your game without having to push out whole new versions. 

MARK MIRCHANDANI: Right. There's so much extra work that has to go into pushing a new version, but if you can use Remote Config, it sounds like you're easily able to just say, well, let's make these tiny tweaks, and then people will see those changes instantaneously. 

MARK MANDEL: Yeah, so what's super nice about this is built in directly into the Unity editor. You can just pop in the provided component onto you any game object or prefab, and you can tweak how you want to basically set up each of the properties within there and how they tie to the Remote Config Management API. 

Not only that, once your game is actually live, you can actually go back into the Unity editor, see the values that are available in there, and actually upload any changes you want to try, tweaking locally up to Remote Config so it gets propagated out without actually having even to go to the Firebase console as well. So, super nice thing. Thank you very much for that work, Dane. 

MARK MIRCHANDANI: Yeah, it sounds like a really cool way and really quick way to make those tweaks. Well, on the not so gaming side, but in talking about BigQuery, we've actually just launched out a new Terraform module for BigQuery. 

So if you're into Terraform and you're kind of looking at automating deployment or really just kind of taking your infrastructure as code solutions and adding in the ability to say, well, now we can actually push out which tables in BigQuery, which data sets in BigQuery, structure out your BigQuery structure, and then load in data into it, all of that is now possible through Terraform. 

So you kind of have an open source alternative now. Instead of using Cloud Deployment Manager, you can use, well, Terraform to drive out what that structure looks like and then also to kind of make sure that you have that backed up as code, right? So now you can actually version control it. 

MARK MANDEL: Nice. Always good to see more stuff happening with Terraform and Google Cloud. That makes me very happy. Finally, just a nice announcement talking about Macy's, the very large retail store, it is now using Google Cloud to streamline its retail operations. So it is moving its infrastructure to the cloud and taking advantage of Google Cloud data warehousing and analytical solutions basically to make everything a little bit more efficient. So welcome to the family, Macy's. 

MARK MIRCHANDANI: Always very cool to see cases of big customers like Macy's, which, here, is certainly known as a relatively large shopping chain, and seeing how they can streamline it. But in reality, it's like there are so many little pieces here and there that the cloud offers to people and in combination, especially with these retail stores that can use the hardware. 

You know, I was actually just at the DMV the other day, and I saw that all of the monitors that everyone was using was Chromebooks. So it was super exciting to kind of see there, and then to add on all the physical layer with the actual cloud layer, I think there's some really cool possibilities out there. 

MARK MANDEL: Definitely. And lots of data, lots of data to manage. 

MARK MIRCHANDANI: So much data. 

MARK MANDEL: So much data. Excellent. Well, speaking of so much data, why don't we go talk to Billy all about Bigtable? 

MARK MIRCHANDANI: Sounds good. 

[MUSIC PLAYING] 

MARK MANDEL: Very happy today to have a fellow devrel-er Billy Jacobson, coming all the way down from New York to come hang out with us in the studio today. How are you doing, Billy? 

BILLY: I'm good. Thanks for having me, Mark and Mark. 

MARK MIRCHANDANI: Absolutely. Do you feel peer pressure to change your name to Mark so that you could blend in with this table of Marks? 

BILLY: What if I told you my middle name was Mark? 

MARK MANDEL: Really? 

BILLY: Nope. 

MARK MANDEL: Aw. 

MARK MIRCHANDANI: Aw. I was so close to give him entry into the Marks club-- 

MARK MANDEL: Oh, but no. 

MARK MIRCHANDANI: --from that. 

MARK MANDEL: OK, fair enough. Anyway, before we get stuck talking about Bigtable, which is what we're going to talk about today, why don't you tell us a little about yourself? What do you do here at Google? 

BILLY: All right. I've been at Google for four years, and I've actually been working on the Google Cloud Platform for all four of those years. My first three years, I was working on the Cloud console UI as a front end engineer, so I got to learn about a ton of different products, about the user experience of those products. And I think Michael Kleinerman, who was on that team, was actually just interviewed on this podcast a few episodes ago. 

But now I am in developer relations. I'm a developer programs engineer focusing on Cloud Bigtable. So that involves writing code samples in the documentation, creating code labs and tutorials, working on going and giving some talks, really just trying to look at the developer experience and try to improve that in as many ways as I see fit. 

MARK MIRCHANDANI: So I have a question. 

MARK MANDEL: Uh-oh. 

MARK MIRCHANDANI: What is Bigtable? Because there has been-- Bigtable's been mentioned on the podcast before, right? 

MARK MANDEL: So the last episode we did was back in 2016 with Ian Lewis, so it's been a while-- episode 18. 

MARK MIRCHANDANI: So a refresher on what Bigtable is would be helpful. 

BILLY: Our phrasing furtively is our petabyte scale, fully managed, NoSQL database. And it's really the combination of all of those things that make it special, that you can get so big that it's fully managed and that it's NoSQL, which kind of ends up being part of the reason it can be so big. 

MARK MANDEL: Right. And so that sounds like it could be used for anything. But I'm willing to bet that there are probably some particular niches that it probably works better in than others. 

BILLY: Yes. 

MARK MANDEL: Like, what sort of use cases is it good for? 

BILLY: Like, one of the big uses is for a time series data, like user analytics. So if you have your application just tracking, like, every interaction people have on that, thinking Spotify is one of the big customers, so tracking every song that gets listened to and storing that in Bigtable, all those listens, and then having that data that you can run different kinds of analytics on and different kinds of machine learning on. 

Once you have all that time series data, then you can do so many different things with it that you might not be able to do with other databases, so running all kinds of analytics on it, doing different kinds of personalization. And you can do that all in real time, which you can't necessarily do with something like BigQuery, where you can take those queries and kind of run them ad hoc. 

Bigtable kind of lets you set that up to be used in an application and maybe create, like, a dashboard of all those analytics. Or when you're training machine learning, you can train it directly on the data. In Bigtable, you don't have to move it to somewhere that it can be accessed faster. So all of those different pieces are why you might want to use Bigtable in adjacent to something like BigQuery. 

MARK MIRCHANDANI: So BigQuery is more like the warehouse, kind of. You go and you make these queries. They come back usually pretty fast, seconds, but that's still seconds. Whereas Bigtable, you're placing it as a proper database, and you can treat it like one and it works like one. 

BILLY: Yeah, exactly. So BigQuery is your data warehouse. You might store the data in both locations, but you could give BigQuery to your data analysts and let them kind of run queries over the entire data set or even just play around with different data sources. But really, if you're doing a full table scan, BigQuery would be where you'd want to go. 

Bigtable, you're going to want to do different pieces of that, so maybe like get me all the data for this user, and then do training on it or display it on a dashboard or something like that. 

MARK MANDEL: And what is it about Bigtable that makes that such a good fit? What can it do that makes it be able to do that so well? 

BILLY: So one of the ways Bigtable is able to do all of this is that it's a NoSQL database. And because of that, there's also no schema. Well, there's one index, which is just on the row key. So you define your row key based on a few properties. 

So let's say you would set maybe a timestamp, a user ID, and some kind of other categories in that row key, then you can only perform a row get or a row range scan. So you'd say maybe get me all of the user data for this user ID in this time range and maybe for this genre or maybe for all genres. And it would depend on how you organize those segments of that row key, so it's basically just like a concatenated string of a few of those pieces of data. 

So with BigQuery, you really get that full SQL interface, and it's really easy to create queries, give it to some kind of analyst. When Bigtable, you really have to think about how you're going to be using it, setting it up for specific kinds of queries. And once those are set up, those are the only kinds of queries you're going to be able to run, but they're going to be super fast. 

MARK MIRCHANDANI: So by putting a little bit more, it sounds like, thought into how you're going to be arranging, especially the keys, but kind of how the data is going to be put into this database, that's how you're able to kind of keep those really quick speeds up and that huge scale. 

BILLY: Yeah. With Bigtable, you're getting sub 10 millisecond latency. And Bigtable scales with nodes. So I said it's massively scalable, so with each node, you get 10,000 QPS. So you can just keep adding more nodes. So the typical minimum is three nodes, which is 30,000 QPS. But you can really scale that up until there aren't anymore nodes left, like in all of Google's cloud, which is-- 

MARK MIRCHANDANI: Until Google runs out of computes. 

BILLY: Until we run out of computers, that's the end point. 

MARK MIRCHANDANI: It's OK. It's the cloud. 

MARK MANDEL: That's great. And just so I'm 100% clear as well, I'm assuming you can do that while things are alive as well. I can scale that up and down as my throughput and my requirement change. 

BILLY: Yeah, so you can scale that up and down. It's not going to be instantaneous, because some of the data needs to rearrange itself for you to see that benefit. I'm not totally sure how long it takes, but it's, like, not days. It's-- 

MARK MANDEL: Minutes. 

BILLY: Definitely in minutes. Yeah, definitely in that scale. But back to kind of, like, those row keys, if those aren't distributed evenly, then you might run into some kind of performance issues. 

MARK MANDEL: Right. 

BILLY: But we've got a lot of documentation and some code labs that walk you through how to think about those row keys. And there are also a bunch of talks that we've done at Next showing sample row keys. And we've got this great tool called the Row Key Visualizer. 

So you can maybe take a subset of your data and a subset of your queries when you're starting to plan out what that schema might look like and see are there any hotspots of data, are there any scans that are doing a lot that don't look great. We have kind of a good guide on what kind of imaging doesn't look great. So you can use that. We've got that tool to help you figure out what "schema" in quotes is going to be best for your data. 

MARK MANDEL: And so also, like-- so we were talking about it being like a NoSQL store as well. So you've got your key, right? And that can be, like, a basically concatenated string, it sounds like. 

BILLY: Yep. 

MARK MANDEL: And then your value, are we just dumping JSON blobs in, or is there, like, a binary protocol or whatever you like? 

BILLY: Yeah. So we've got column families and column qualifiers. So the families kind of do some grouping on making it faster if you're only incurring things from the same column families under the column qualifiers and help you map to a specific cell. So you can just have a bunch of cells with data. 

And a cell is identified by the row key, the column family, and the column qualifier is just kind of-- we can just shortcut that as the column, as well as a timestamp. So you can have multiple timestamps within each cell. So that can make it really good if you want to use that for some part of your time series management, maybe saying store, like, an hour of data in each cell or even just to have just version tracking across the board. But you don't want to use that for your entire time series because there's a limit to how much data you can store per cell. 

MARK MIRCHANDANI: So Bigtable is a giant NoSQL database. Why would someone use Bigtable over setting up their own, like, Mongo instance, for example? 

BILLY: Because Bigtable is fully managed, you're going to get the security and the reliability that Google Cloud is offering. So, like, we've offered however many nines of reliability for Bigtable. We have replication as a feature so you can distribute your data amongst the same zone. Or we also have multi-region replication, so you can really distribute your data and take advantage of all the computing power that Google Cloud has to offer. 

MARK MIRCHANDANI: Plus, as the name implies, I hear it's big. 

BILLY: Yeah. [LAUGHS] And a table. 

MARK MANDEL: And it's a table. [LAUGHS] I think you said something really interesting there as well. You were talking about it where not only can we do inter-zonal communication basically, like regional failover, it sounds like we can do global failover. Is that correct? 

BILLY: Yeah, so you can set up to have multi-region replication. So if you're kind of a global business and want to have your data stored across all different regions so it's easier for you to access, you're going to get that faster. You're going to get lower latency to people trying to access data within those regions. 

MARK MANDEL: So it sounds like your data is essentially mirrored or, like you said, replicated, I guess, around the globe. It's not just a failover system. You're actually making sure you have multiple copies all around the world. 

BILLY: Yeah, so you would be able to actually set up different application profiles in terms of, like, where that data might get access, so you can kind of specify that. If your maybe customers are in the US, you could have them go towards the US replication, access data from that. 

You can set it up in a few different ways. If you want to be using the replications as a backup, then you can have those not get accessed at all for any reads or writes and only use that to store the data as a backup. Or you can have it where you're continuously interacting with both instances of the replication. 

It's going to be an eventual consistent system, so you might have some stale data that comes back. And it really just depends on your use case. It's a very flexible product, so really, you need to figure out what parts of it you're going to use and how they apply to your use case and turn all the knobs specifically for that use case. 

MARK MANDEL: Now I'm wondering here. Like, it sounds like I could probably do something, like, maybe these kinds of rows that have this kind of data maybe replicate that in one way, but these kinds of rows maybe don't. Would that be right, or-- 

BILLY: I think it's more of at least the table level. It might even be of the entire-- 

MARK MANDEL: Oh, it makes sense. 

BILLY: I think it's of the entire instance, actually. 

MARK MANDEL: Yeah. 

BILLY: But we can include the replication docks in the show notes. 

MARK MANDEL: Absolutely. 

MARK MIRCHANDANI: So if you were going to design a system and had, like, your major use space, let's just say, being in the US, but you wanted to still have lower read latency for people across the globe, if you were then to spin up a major kind of writing center in, like, let's say the APAC area, could there be like a multi-master scenario here, or would everyone just be writing to one and then replicating to all these read replicates? 

BILLY: Yeah, I think there could be multiple masters. From what I know, I think that sounds OK. I'd have to check in the docs to confirm. 

MARK MANDEL: So I kind of want to head over to the open source side, too, which is kind of interesting. I know we support, like, an HBase client. Can you tell us about Hbases as well and just like how that works? 

BILLY: Yeah, so this is kind of in the history of how Bigtable formed. Google's been using Bigtable internally for basically since the start of Google almost. It's helped our search, helped our Gmail and these, like, core business products that we have. 

And so I don't remember which year exactly, but we published a whitepaper that explained what is Bigtable, basically how could someone create it, how we're using it. And the open source community took that paper and created HBase, which is the open source database version of this basically. And over time, some of these features have diverged from what internal Bigtable has to offer. 

And then a few years after we created this whitepaper and HBase came out, we created Cloud Bigtable. So when we started with Cloud Bigtable, we wanted to make sure that people who were using HBase and used to it had an ability to just take whatever they were using and just swap it directly out from HBase to Bigtable. So we support the HBase API, so anyone who's familiar with using HBase should be able to just transfer their stuff over pretty easily and use all of the API commands that they're used to and not have to really change their code. 

And because of the open source community with HBase and because we have this HBase client, there are all these open source libraries that we get to use for free with Bigtable just because of that compatibility. So one of them is JanusGraph, which does graph databases. There's Open TSDB for time series and GeoMesa for geospatial data. 

MARK MIRCHANDANI: So it kind of fits pretty well into the cloud modularity model where you can take these different pieces and swap them out. And this one happens to be a great solution for a fully managed database in the backend, but then your application, wherever it is or whatever it is, can theoretically swap this out and kind of get all those benefits without having to rewrite anything. 

BILLY: Yeah. So it's really nice for that. But now, many years later-- I mean I know the last time you all had someone talk about Bigtable was-- 

MARK MANDEL: It's a while ago. 

BILLY: --like 2016. So now we actually have nine clients to use with Bigtable. We just came out with a Java client, so for people who want to use a more idiomatic Java client, as with the other products we have, because they don't have their own-- Spanner doesn't have an HBase or open source equivalent client. So now if you're using other products that we have, you'll be able to use kind of a very easy to use Java client. And we have Python, Go. It's all the silver languages that we have to offer. 

MARK MANDEL: So here's an interesting question then. Where do you think people should choose, using either the GCP native clients, or should they use the HBase ones? Or where does that pro and con kind of come from? 

BILLY: I think it's just if you are using the HBase clients already, probably stick with the HBase clients. I know a lot of people, even before we came out with this Java client, had kind of created their own Java clients and just found that easier to work with. So we were like, oh, let's do that, too. 

MARK MANDEL: So, like, greenfield, to use one of ours, is probably a bit of a nicer experience, but if you already have HBase, then maybe go with that instead. 

BILLY: Yeah, definitely. 

MARK MIRCHANDANI: And you also mentioned-- you know, earlier, we were talking about Bigtable versus BigQuery. And so you know, they're very different solutions, despite sounding somewhat similar. 

BILLY: Yes. 

MARK MIRCHANDANI: And then you just mentioned Spanner. So if someone's coming to this from a fresh perspective, when is a use case that you might use Bigtable, or Spanner, or vice verse? 

BILLY: Yeah, I think this is a very common point of confusion because it really does depend on your use case. And Daniel Bergqvist and I actually gave a talk on this about specifically internet of things at Google I/O. So we should link that in the description for more of the details. But for internet of things, we kind of realized that's like a very common use case for all three of these types of databases or data warehouses. 

And I guess what we were saying is if you have this kind of time series data and you're looking at these three solutions, what might be helpful to consider is typically, if you're just trying to do something with a time series database, go with Bigtable. That kind of has all the basics you need for a time series database. It's really fast, it can scale and do all of that. 

We also looked a little bit at Datastore and Firestore, and that's good at a smaller scale with lower QPS. And when you kind of get into the scale of it, with the Bigtable or with Spanner, you have to play with it to figure that out. And then for Spanner, if you have transactions, that's really where, if you're using a time series database, transactions are really where you're going to get the power of using Spanner over something like Bigtable. 

And you also get the SQL interface, which is nice. So that might be part of the reason, but typically, it's because of those transactions. And with Spanner, you're going to get-- I believe the writes are going to be slower with Spanner, just because of the way the data is replicated. So they have to write the data to all the locations that the data is replicated before you can read from it. Whereas Bigtable, because it's eventually consistent, you'll write it, and then you can read it right away. It just may not be there, especially if it's replicated. 

And then for BigQuery we kind of said, think about those databases totally separately. So if you're going to choose Datastore, or Firestore, or Bigtable, or a Spanner, that's one part of your solution. And then to use a data warehouse, that's kind of like a totally separate part. So for that, you'd use BigQuery. And like I said, if you do those ad hoc queries, you give that to a data analyst. You can do full table scans, which aren't really great for a Spanner or Bigtable. That's why you would use BigQuery. 

MARK MIRCHANDANI: And like you mentioned, I mean you might have a system in place where you use both Bigtable and BigQuery at the same time for different purposes. 

BILLY: Yeah, so that's very common. We typically see people have a Dataflow job that writes to both at the same time or even takes their data from BigQuery and writes it over to Bigtable, or vice versa. 

MARK MANDEL: Oh, I know what I want to talk about. [CHUCKLES] So what's the local developer experience like with Bigtable? Do I have any, like, emulation tools or anything like that that I can run locally, so that I can play with this without having to spin up a bunch of clusters in the cloud? 

BILLY: So we have a Bigtable emulator. I haven't had a chance to play with it too much, so I can't answer-- 

MARK MANDEL: It is there, though. 

BILLY: And so we have that, and we also have-- so Bigtable nodes are fairly expensive. I think they're around, like, 600, 650-- I don't want to say the exact number-- 

MARK MANDEL: We can link to it. 

BILLY: --per node, so typically, you do with three nodes for a production environment. So that can get pretty costly per month. I think although when I was listening back to Ian's podcast, I think it was triple that rate for one node. So that's at least great, we've come down on the price. But we do have a development instance you can use, so that's just one node. 

MARK MANDEL: Oh, cool. 

BILLY: So that's a good way to actually just play with it in the cloud and actually get to use-- you're going to lose out on some of the power by only having one node, but you can really start interacting with it and get a feel for the API and stuff. 

MARK MANDEL: So yeah, I mean, as you said, it's been a while since we talked about it. Like, what has changed in the last two years with Bigtable? Have we got, like, new, cool stuff? Just more columns and more keys? 

[LAUGHTER] 

BILLY: Well, I mean, at the base, Bigtable has stayed the same. Because I think it's such, like, a foundational product, it can't really change too much. But we've added the replication. We've added these new clients. And we also have this Key Visualizer. 

I think what's changed is the environment around Bigtable. I mean, GCP has grown so much, so there's more-- if you want to store stuff in Bigtable, the rest of your ecosystem can comfortably be in GCP, and you're going to find all those ways you'd want to interact with Bigtable there, so Dataflow jobs, Dataproc even, some of the ML features that we have in GCP. 

So really, it's all about this environment that's around Bigtable. In Bigtable, you're getting that low latency, so you don't want to have your stuff in Bigtable and then be doing analytics on it somewhere else, because then you're going to lose some of that low latency. So getting to have an ecosystem that supports Bigtable and supports everything around it, I think that's where GCP has grown over the past few years. 

MARK MANDEL: One of my favorite questions, what has been the most interesting thing you've seen someone do with Bigtable, possibly weird or wacky? 

BILLY: One of the things I really like is Spotify's Discover Weekly. So that happens on Bigtable. We've given a few talks about how it works, about their ecosystem. And I think they were saying before they had Bigtable, they'd have some engineers, like, up all night, trying to make sure that their recommendation algorithm wasn't going to crash or was going to be available that, like, Monday morning for those Discover Weekly playlists. And for them to get on to Bigtable and start using the machine learning on that, and have it to just be not something they even have to worry about anymore and could bring more recommendations in different ways with that. I think that's just, like, such a cool thing that's impacted my life. 

One of the cool ways I got to play with Bigtable was this past GCP Next, or Next 2019. We were kind of figuring out what can we do to really try out a real Bigtable use case, play with it in a way that developers might be playing with it. So we were like, where can we find, like, a cool internet of things or time series database? And we were poking around, and we found this team called Air View. And they have put air quality sensors in the back of Google Street View cars-- 

MARK MANDEL: Oh, wow. 

BILLY: --and have been driving them around the Bay Area and a few other cities. So we contacted them and started streaming some of that data into BigQuery table through a Dataflow pipeline. And then we're able to kind of create, like, a real visualization with it. 

So that was cool just to see, like, oh, if you've got an internet of things and a fleet of internet of things, how that process can be done and how you could use that to kind of create a real time dashboard and do real analytics on it. And while we only had a few cars, it's cool to know, like, we could easily just to scale it up to, like, 1,000 cars or, like, 10,000 even, and just by adding more nodes. 

MARK MANDEL: Is there anywhere people should specifically go if they want to learn more about Bigtable? 

BILLY: I would say go to the Bigtable documentation. We've got links to a lot of the talks we did at Next, which show off some of these really cool use cases, some of the personalization, some anti-fraud, the time series analysis, the talk at I/O about how to choose your database. I think with Bigtable, you really want to know how other people are using it, so you can learn about each knob and how to turn them to best benefit you. So before you dive into any development with Bigtable, learning a lot about it is probably the best recommendation I'd have. 

MARK MANDEL: Fantastic. 

MARK MIRCHANDANI: And it sounds like that talk about choosing the right database should be super helpful, too, because there are a lot of options out there. 

BILLY: Yeah. 

MARK MANDEL: And are you going to be anywhere in particular? Are you going to any conferences where people can come see you talk? 

BILLY: I have nothing scheduled unfortunately. But if anyone listening wants to hear more about Bigtable, sign me up. 

MARK MANDEL: There you go. And I'm sure-- you have a Twitter account, I assume. 

BILLY: I have a Twitter account, @BillyJacobson. 

MARK MANDEL: There you go. We'll make sure we put that in the show notes, so-- 

BILLY: Sure. 

MARK MANDEL: --people can find you as well. Awesome. Well, Billy, thank you so much for joining us today and talking to us all about Bigtable. 

BILLY: All right. Thanks for having me. 

MARK MIRCHANDANI: Thanks so much to Billy for coming in for talking about Bigtable. I mean it's been a while, like I think we had mentioned, you know, quite a number of episodes since Bigtable was last mentioned. But it's a really, really cool tool. And I think understanding what it's really good at and how people can look at what's using it, as well as any future changes for it, I think really highlights exactly how cool it is. 

MARK MANDEL: Yeah. No, great interview. Thanks so much for joining us, Billy. But let's get stuck into our question of the week. 

[MUSIC PLAYING] 

So if I have an organization-- I've set up an organization for my variety of GCP projects. And my projects are sort of separated out by folder so I can manage them in a coherent way. It's easy to see what's going on. How do I break down my billing data by folder so I can see what's going on at that sort of folder level? 

MARK MIRCHANDANI: Right. Yeah, I mean this is a really important question for people who are running an organization inside of GCP. So a lot of people who are just kind of either individual users, or hobbyists, or something like that can spin up Google Cloud Platform with their personal accounts. And they can still set up a billing account, export that billing account to BigQuery, and then you have a actual, like, line-by-line, more detailed version of your billing data set. So you can write any analytics based on that, or you can do any work based on that. 

But when you're an organization, maybe even like a Macy's, and your organization structure is a little bit more complicated, you can create folders to group your projects. But when you export that to BigQuery, you only have the ID's of the folders, not the actual names. 

MARK MANDEL: Oh. 

MARK MIRCHANDANI: And that can be a big challenge because-- 

MARK MANDEL: Got it. 

MARK MIRCHANDANI: --I may not be looking for folder 1256734, I'm looking for folder Production and Development. So Nick has written this cool little article and a very, very quick tutorial to show you how to use the open source GitHub project GCP folder look up, which will basically take your organization, take your folders, and put that out to a BigQuery table. And then you join that with your billing data set to actually get a more detailed view. Now all of your line items will actually have the organization structure in them as well. So any analysis you're doing with BigQuery is a lot easier because you can say, OK, well, give me all the costs and show it to me by this folder or show it to me by this folder, but only for this specific GCP project. 

MARK MANDEL: Oh, nice. So this creates like another table inside your BigQuery data structures so that you can then join that up based on the idea of that table. Is that right? 

MARK MIRCHANDANI: Exactly. Yeah, with the name of the folder and then with the line items that come to the BigQuery export, it's way, way more powerful and you can see every single individual cost over any time span as soon as you start enabling the BigQuery export, of course. So it's a great way to either do data analytics on your billing data or even just to look up information. You can also plug it into Data Studio, and you get a nice cool visualization layer on top of that. 

MARK MANDEL: Oh, it's nice. I'm just looking at it here. You can then both get, like, the parent of the folder, but also, like, what level and stuff. So if you have, like, semantic reasoning behind which level your folders are at, you can be, like, grabbing everything from level two. You can do some really neat stuff this way. 

MARK MIRCHANDANI: Yep, a full view of your organization. So I think a lot of people will be really excited to be able to follow the instructions here. And like I said, they're very quick. And then you'll have a lot more information in your BigQuery export. 

MARK MANDEL: Very cool. Awesome. Well, before we finish up, Mark, are you producing any cool videos, going anywhere fancy? Like, what are you up to? 

MARK MIRCHANDANI: Oh, well, I'll be headed to LA for a week in a few weeks. But in the meantime, I think it's mostly just working on videos. We are working with releasing some new billing content, very much in line with our previous question, and talking a little bit more about how people can understand the tools that are available to them inside of the Google Cloud Platform console. So I'm super excited to see those coming out probably in the next couple weeks. 

MARK MANDEL: Very, very cool. 

MARK MIRCHANDANI: How about yourself? 

MARK MANDEL: I'm going to shoot a little bit in the future because there's some stuff I'm really excited about. So when this comes out on Wednesday, I'll be probably finished with Pax Dev, where I'll be doing two panels, but I'll be hanging around at Pax West for the rest of the week. So you can always drop me a line if you're going to be there as well. Later in the year, I will be at KubeCon in some capacity or another. So I'm very much looking forward to that. 

And so one thing else I also want to talk about-- it is next year, but I'm very excited about it-- Game Developers Conference next year, the big Game Developers Conference essentially. Myself and Ed Pereira have been working with Game Developers Conference to do a one-day summit at the event. Basically, Game Developers Conference does a series of summits on Mondays and Tuesdays about specific topics. 

And so Online Games Technology Summit is what we're calling it. Basically, it's for anyone who works in, like, backend systems for online games, anyone who works on, like, client and server networking, basically anything to do with multiplayer online connected games, anything in that capacity, infrastructure management scaling, security monitoring, all that kind of stuff. There really isn't a space for us people who work in that to really gather and do stuff. 

So CFP will open on the 29th August, so after this comes out. So if you're looking to attend or possibly submit, put it in your calendar now and get it done. Really excited about it and very happy to be working with the GDC on this initiative. So I got very excited about this. 

MARK MIRCHANDANI: Yeah, that's super cool. I know you've been talking about working with them for a little while, so it's really exciting to see it come to fruition. And I think, like you said, this isn't a space that exists right now. There's not a lot of people talking about this, so having kind of a conference for all these people to get together and talk about these technologies, I think, will ultimately help the information sharing aspect of it. 

MARK MANDEL: That's the idea. Trying to help grow this particular part of the industry, but anyway, it's good. Good stuff. 

MARK MIRCHANDANI: Well, it'll be a lot of fun, and I'm sure a lot of people are super excited to hear about it as well. 

MARK MANDEL: I hope so. That's the plan. 

MARK MIRCHANDANI: [LAUGHS] All right, Mark, well, thanks so much for joining us this week, and we'll talk to you all soon. 

MARK MANDEL: See you all next week. 

[MUSIC PLAYING] 

MARK MIRCHANDANI: Coming to you live from New York City. 

MARK MANDEL: In San Francisco. 

MARK MIRCHANDANI: In San Fran-- and not live. 

MARK MANDEL: Yeah, not live. 

MARK MIRCHANDANI: We're just lying to everybody today. 

MARK MANDEL: There we go.