+++
audioDuration = "00:30:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.18.mp3"
audioSize = 43323976
categories = ["Bigtable", "Big Data"]
date = "2016-03-23T01:07:49Z"
description = "In the eighteenth episode of this podcast, your hosts Francesc and Mark interview Ian Lewis, a Google Cloud Platform Developer Advocate on Bigtable."
draft = false
episodeNumber = 18
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Bigtable with Ian Lewis"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/JgVZ56gRYSm"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4bn91p/episode_18_bigtable_with_ian_lewis/"
+++

In the eighteenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Ian Lewis](https://twitter.com/IanMLewis), a Google Cloud Platform Developer
Advocate based in Tokyo about Bigtable.
<!--more-->

##### About Ian

Ian is a Developer Advocate on the Google Cloud Platform team working out of
Tokyo. Ian loves Python and Go and helps run the largest Python event in Japan,
PyCon JP. Ian is also interested in Docker and Kubernetes and hopes to help
Google Cloud Platform users achieve their highest potential.


##### Cool thing of the week

We're live at [GCPNext](https://cloudplatformonline.com/NEXT2016-Live.html)
with our mics!
If you're around come say hi, and if not follow the event from one of the many
[local viewing parties](https://cloudplatformonline.com/NEXT2016-Extended.html)
or via the [live stream](https://cloudplatformonline.com/NEXT2016-Live.html).


##### Interview

Resources:

- Bigtable: A Distributed Storage System for Structured Data [pdf](http://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf)
- Google Cloud Bigtable [docs](https://cloud.google.com/bigtable/docs/)
- Pi search [demo](https://pi-day-demo.appspot.com)
- Differences between the HBase and Cloud Bigtable APIs [docs](https://cloud.google.com/bigtable/docs/hbase-differences)
- Cloud Bigtable [Pricing](https://cloud.google.com/bigtable/pricing)

##### Question of the week

How to limit what users can do on the resources of your project?

- Google Cloud Identity and Access Management [docs](https://cloud.google.com/iam/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 18 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I am here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing? 
FRANCESC: Pretty good. Very happy to be back to California.
MARK: Yeah. You’ve been out and about.
FRANCESC: Yeah. I've been around. Yeah.
MARK: Exactly. So we've got some fun stuff today. We are talking to Ian Lewis about BigTable. Should be pretty exciting. And we have a question of the week talking about some new bits and pieces we announced recently as well.
FRANCESC: Yeah, but how do you know what you're allowed to do on the cloud--stuff like that. How do you make sure that people don't do what they should not?
MARK: Yeah, just making sure everything's locked down and--
FRANCESC: Yeah. And I'm not sure if you're excited about not really the question, but really the answer.
MARK: Okay. But yeah, yeah.
FRANCESC: Yeah? The answer's gonna be pretty cool. So but before that--so today, right now, like, today, as in Wednesday--
MARK: Actually, if you've downloaded this episode as it came out--
FRANCESC: Yeah, so it's actually one of our big days for Google Cloud Platform, especially for us Google Developer Advocates.
MARK: Definitely.
FRANCESC: And because it is GCPNext.
MARK: The big Google Cloud Platform conference.
FRANCESC: Yeah. And it's very cool. It's happening in San Francisco on Wednesday and Thursday, and if you can attend, you should definitely come, see us, because we're gonna be hanging out somewhere next to a sign that says Podcast. But if you cannot come, you can still catch up with all the new things that we're gonna be announcing. There's two ways. One of them--we already mentioned it. There was--what was it?
MARK: The extended viewing parties.
FRANCESC: Extended viewing parties, that did--
MARK: Which I'd like to make a short note on. It has grown a lot since last week. I am very impressed with the number of extended parties that are happening.
FRANCESC: Yeah. Last week, we actually mentioned the fact that there are some countries in Africa, which still, it's pretty crazy. They have a huge amount of parties, which is really cool.
MARK: Massive amount.
FRANCESC: But we were mentioning that there was, I think, what country was it that had more than, like, the whole of Europe?
MARK: I actually can't read it because there are so many parties.
FRANCESC: Oh, Cameroon.
MARK: It's covering--
FRANCESC: Yeah. Cameroon and--
MARK: Nigeria. Nigeria has--
FRANCESC: Nigeria--yeah. Nigeria has a crazy amount of viewing parties, and we mentioned that Europe didn't have that many--didn't have as many. Since then, we got basically parties in every single big city, and I'm very happy to say that Barcelona, which I said it was a little bit of a pity that Barcelona didn't have a party, because, you know, I'm from there. Didn’t have a party, now it has. What about--what about Sydney?
MARK: Australia--Australia's--
FRANCESC: Or Melbourne, or Australia in general. How did that go?
MARK: Australia, like, there's not a party. I'm a little sad.
FRANCESC: Oh, that's so sad.
MARK: I am. I'm a little disappointed.
FRANCESC: I mean, yes, it's in the middle of the night,but hey, Japan is doing it.
MARK: Like, yeah. If Japan can have a party, then Australia can have a party. I'm just--I'm a little--I'm a little sad.
FRANCESC: 
MARK: I'm a little bit heartbroken.
FRANCESC: Yeah. But anyway, even for Australian people that are in the middle of the night, they don't know what to do, and they want to know more about Google Cloud Platform. There's also some of our talks, especially all the keynotes, are going to be live-streamed.
MARK: Yep, yep.
FRANCESC: So you can still catch up on the conference through live stream, just over the internet.
MARK: Yeah. So if you're--if you're awake at that time, wondering what to do, maybe you should tune in.
FRANCESC: Exactly.
MARK: I think so.
FRANCESC: Actually, if you're awake right now in the middle of the night, listening to this podcast, thank you.
MARK: Thank you.
FRANCESC: It is very nice of you. Cool. Okay. So let's go, talk with our colleague, Ian Lewis.
MARK: That sounds like a great idea. We are very pleased today to be joined by yet another of our wonderful coworkers, Ian Lewis. Thank you so much for joining us today.
IAN: Yeah. Thanks for having me.
MARK: So Ian, it's great to have you here. I know you normally don't live anywhere near San Francisco, but why don't you tell us a little bit about yourself, what you do, et cetera, et cetera, so everyone gets to know you?
IAN: Sure. So I'm a developer advocate on the Google Cloud Platform team, and I'm actually based out of Tokyo, Japan, so I would normally spend most of my time over there in--and also in APAC, so in the Asian Pacific region. But I'm here at--for GCPNext, so I'm, you know, in town for the podcast, so I can kind of hang out here with you guys.
FRANCESC: Cool. And just for context, Ian Lewis, from Japan--you speak very good English. Where are you from?
IAN: I'm originally from Maryland, actually, from the--near D.C., so--but I moved to Japan about ten years ago.
FRANCESC: Cool. It's nice to have someone from the United States from time to time in the podcast.
MARK: Now, hold on. Wait, wait, wait. We have a lot of Japanese listeners.
FRANCESC: That is true.
MARK: Can you say something in Japanese for us to say hello to them?
IAN: Konichiwa--
FRANCESC: That is very awesome. I heard Ian.
MARK: Yeah. I think you said maybe something about your name or something.
IAN: Yeah. So basically, you know, it's an introduction.
FRANCESC: Cool.
MARK: Excellent.
FRANCESC: So basically, the idea for the episode today was since it was two episodes that we did a poll, we talked about storage, and we basically covered the whole spectrum of storage and discussed about what product to use,when to use one or the other, and I think that the most interesting one, or at least one of the most interesting product, because it basically powers Google, is BigTable, and it turns out that you're pretty much the expert on the team for--about BigTable. So can you tell us a little bit about what is BigTable from, like, I think it's called 10,000-feet view?
IAN: Yeah. 10,000 feet sounds reasonable.
FRANCESC: 14,000-feet view? I don't know. 
IAN: Yeah.
FRANCESC: But from a very high level point.
IAN: Right. So like, there's quite a difference. You know, like, there's 5,000 versus 10,000 feet.
FRANCESC: Oh, yeah.
IAN: So BigTable is a--is a--like, basically, the no-sequel database. It was the--kind of the original one that started the whole no-sequel idea. And so Google's been using it for quite a long time as the kind of go-to database for its very large applications, like GMail and Search and Maps, and it was originally published kind of as a white paper, and then the ideas around the architecture of BigTable were incorporated into open source projects, like HBase and Cassandra and things like that, and so from a technical point of view, it's kind of a--it's actually a key value datastore, but it allows you to have many values per key, and then, it allows you to do range scans by key. So in kind of relational database parlance, it's--you have a primary index, but you don't have a secondary index. So you can have many--you have what's basically called columns, but those columns--you can't actually index those, so you can't do queries on them and that sort of thing.
MARK: So when you say you can do a range scan, what does that kind of look like?
IAN: Okay. So you an kind of think of the keys in the--in BigTable as being sorted by the--lexicographically, basically. And so they're basically sorted, and you can pick a key and say, "Okay. From this key, I want to do a range scan of--" and then, just basically continue to iterate over those keys. So you can say, "Get--so from key A, get 100 keys," and then in that way, you can do things like paging or whatnot.
FRANCESC: Cool.
MARK: Got it. So you can kind of get whatever's in that ordered range--
IAN: Right, exactly.
MARK: Nice.
FRANCESC: Very interesting. So this actually sounds a little bit--the story about BigTable sounds a little bit like mapreduce, where basically, Google writes a paper, and then, at the end, someone else implements it, not Google.
IAN: Right.
FRANCESC: So I'm assuming Hbase is the open source implementation of BigTable?
IAN: Right. Exactly, and so HBase was a open source project that was created based on the BigTable white paper, and--but now that BigTable is something that we are releasing as part of cloud platform so that other people--other developers can use it, we decided to actually make it available via the HBase API. So you can use the exact same API as HBase in order to access BigTable, which is pretty powerful, because you know, BigTable is completely, fully-manage4d, and it makes it really easy to, you know--to set up and get running.
FRANCESC: That is very cool. I really like the idea of Google creating BigTable, not open sourcing it, and then making it available and having to have the API to something that was created from the paper.
IAN: Right.
FRANCESC: I really like open source community. These things are funny.
IAN: Well, that's--I think that Google is kind of modifying their stance a little bit on that. So like, things like tensor flow and communities are things that are kind of coming out that people are--where Google's actually providing or creating an open source implementation that folks can kind of build on, rather than just releasing a white paper from the white tower. You know?
FRANCESC: Yeah. Yeah, no. I really like the idea of now more--like, the paper comes with code.
IAN: Right, right.
FRANCESC: That's very nice. Cool. So I mean, when I joined Google, I joined as a software engineer, and it's true what you're saying. Basically everyone uses BigTable for everything. But if you are not Google, why could you use BigTable?
IAN: Okay. So there's a few reasons why you might want to use BigTable. So there's--one is that BigTable's very, very fast. You can make queries on BigTable or get inputs and things like that. It both reads and writes in about--less than tens of milliseconds. So it's a--it's a very fast database. At the same time, it's also a database that will scale to very large size. So I mentioned that it’s not--it's very limited in what it can actually do. Like, you only have primary index--or a primary key index, and--but those limits actually allow you to scale to very, very large sizes. So things like, basically, many petabytes in size.
FRANCESC: Cool.
IAN: But there might be some use cases where you would want that, and that was--that would be, like, things like time series databases, analytics. Those are the ones that are very easy to get started using BigTable. 
FRANCESC: Cool. You said that BigTable's really fast, and you actually gave the order of magnitude, about 10 milliseconds. For our listeners, what is the order of magnitude of others, like, the--you know, for instance, like, datastore, or for instance, a mySQL database?
IAN: So mySQL will be pretty fast for things like key--basically, getting by key or selecting by key. But for things like very complex queries, it could take, you know, orders of magnitude longer, like many, many seconds or many tens of seconds, or--and things like datastore generally come back in the tens of milliseconds or, you know, hundreds of milliseconds, depending on the queries that you're actually doing. So BigTable is quite a bit faster, and so in that sense, it's very good for kind of low--more low-latency applications.
MARK: And I'm guessing you probably don't have some of the issues like you would with, say, mySQL, where it's--once a table gets really large, you start having, like, slowdowns and stuff like that.
IAN: Right. Exactly. So I mentioned that mySQL will be fast for keys, you know--selecting just a key, but it'll actually be--get much slower when it, like, is actually overloaded or gets very large.
MARK: So we're basically sort of thinking, so BigTable probably exists for those really big data applications.
IAN: Right. Exactly.
FRANCESC: Yeah. There's actually one of my favorite things that you can do in BigTable, and which we used for a funny demo for Pi Day. It's the fact that you don't need to know the whole key. Like, you can just say, "Give me all the keys that start with this prefix."
IAN: Right.
MARK: Oh, is that how that works?
FRANCESC: It is pretty amazing. Yeah.
MARK: Oh, okay.
FRANCESC: So it's--you can be like, "Oh, like, I'm actually just storing, like, keys of, like, ten words, but if you give me only five, I will still find it, because I can say, "Give me all the keys that start with those five words--five letters, sorry."
IAN: Right.
FRANCESC: It is pretty amazing. So I mean, I was able to make it for my case, but like, that's a very specific and weird thing to do--to search stuff on Pi. But have you ever seen people doing these kinds of things in production, and what for?
IAN: So yeah. That's a great thing to mention. So BigTable allows you to do several different types of what they call filters, and one of those is a prefix scan, and so you can select all of the keys that have a particular prefix, and so you might use that for things like indexing, for instance. Like, in your case, you actually indexed numbers of pi, right?
FRANCESC: Yep.
IAN: And then, you can go and search those later. Well, you can do the same sort of thing with text or with just regular, old keys. So this is actually what datastore uses to do its secondary indexes for its--when you actually save entities and things like that. 
MARK: Excellent. So you could use, like, common prefixes to group things together and things like that.
IAN: Yes, yes. Exactly. 
FRANCESC: Cool. So then, I mean, I think that everybody then is convinced that actually, datastore is amazing and--datastore--sorry. BigTable is amazing, and everybody should be using it. But that's not the case, even at Google. So why could someone not use BigTable?
IAN: Yeah. So there's a few reasons, and it's--I mean, these are the kinds of reasons why datastore exists. So BigTable doesn't actually support transactions. So it actually will support allowing you to write a single row, and that row will be written or not written. So in that sense, you can basically do transactions on a single set of columns or a single row. But you can't actually do that across rows. So if you want to save multiple rows at the same time, you need some other kind of transaction or locking kind of mechanism. It's also not the greatest database for things like high availability. So if you have a particular key, that key may become unavailable kind of sporadically, depending on how that, you know, database is being split up and moved around in the back end. And so if you need your database to be, like, completely high-availability--highly available, and for the keys to be--to be there all of the time, then database--BigTable might not be exactly what you want. You also have the issue of it being local. So it's local to a specific region, and so you can do replication to other regions in the background or asynchronously, but if you need your database to be kind of globally available or something like that, then BigTable might not be something that you'll want to have. 
FRANCESC: Cool. Yeah. That makes sense. What about the cost, because--how do you pay for BigTable? is it like datastore, where you pay per operation, or--
IAN: Right. So BigTable is actually a little bit more predictable than datastore. So BigTable, actually, you pay for the cost, and then you pay for the nodes that are set up to allow you to make queries on the database and that sort of thing. And so what you pay for is, like, per hour per node, as well as the storage in per-gigabyte.
FRANCESC: Okay.
IAN: I don't remember exactly what it is right now, but it's about--the minimum cost for the nodes is about $1,400 per month.
FRANCESC: Okay.
IAN: Plus storage. So you pay in that sense, and so I mentioned nodes, and just--that's something that I think that I should probably mention--is that these--there are nodes that you sett up in BigTable, and you pay per node, but these nodes basically provide you throughput into the database. So if you need to do--you basically get about 10,000 queries per second per node, and so if you need a lot of--more than, say, 30,000, which is the minimum--three nodes is the minimum. If you need more than 30,000, then you'll set up more nodes, and basically, it'll allow you to do more throughput there.
MARK: So really, as your throughput requirements grow, the more nodes you're gonna need, therefore your cost increases, and you can kind of trade that off.
IAN: Right. Exactly. But what's interesting about BigTable is that the nodes actually don't store the data. The data's stored separately, and so you can kind of increase and decrease the number of nodes, like, for the--you know, separately from how much data you store. So say, you know, you have a lot of data, but you don't actually need that many QPS. You can actually just have three nodes, and you know, your storage can be astronomically big, but you know, you're just using three nodes to access it.
FRANCESC: And what is that, that there's a minimum of three nodes? 
IAN: So minimum--so the minimum of three nodes is basically there so that--to allow a little bit of redundancy for the nodes, because those can be kind of moved around a little bit also. But basically, like, the--when you create a cluster--a BigTable cluster, essentially, you have a minimum of three nodes to set up, and so that's basically kind of a way of allowing kind of a minimum level of service for BigTable.
FRANCESC: Okay. So something that I used for the pi finder for that demo was actually that idea of being able to add nodes and remove them, and I was lucky enough that I got to talk--to work with the BigTable team. So I ran a data flow process, where I was processing a huge amount of data. I mean, pi is big. And on top of that, I was storing everything to BigTable at the same time. So I had--I was able to run a BigTable cluster with 500 nodes.
MARK: Nice.
FRANCESC: Yeah.
IAN: It's quite awesome.
FRANCESC: That was incredibly amazing. I had, like, I think it was, like, over 1,000 nodes in data flow trying to basically write as much as I could directly to BigTable, and BigTable didn't even shake. It was--that was amazing.
MARK: What sort of input were you getting? Do you know?
FRANCESC: I actually--I didn't look all the time at it, but I know that it passed really, really fast 1 million requests per second, really, really easily, and I was like, "Oh, wow."
MARK: High. Yeah.
IAN: Wow.
FRANCESC: Yeah. And then, the good thing is that once it was done and it had all pi stored in BigTable, I took it down to three, and everything went really fast.
IAN: Right.
FRANCESC: Which is really nice, because then, it's like, "Oh, yeah. I'm done. Now, I have my process already done." Like, if you're running mapreduce or whatever, once the mapreduce is over, if you need to wait from it, you don't need those nodes to have, like, all the nodes you had at the beginning. That's really cool.
IAN: Yeah. You know, that's one benefit of me being on the same team, is I've seen the same, exact things that you guys have. But yeah. It was--I think the graph was actually close to 2 million, which is--which is pretty impressively.
FRANCESC: 2 million--wow.
MARK: Yeah, yeah. What's 1 and 2 million? I mean, like, it's the same number.
FRANCESC: Yeah.
IAN: Yeah. You can also say, though, but--that we do have customers that are--that do quite a bit more than that. So it's a database that scales. I mean, we--I mean, internally, we also have, like, you know, customers that do very, very large amounts of queries per second, so--and I also mentioned that it's, like, 10 milliseconds per query, but, like, that basically doesn't change, like, no matter the size of the data, as well as, like, you know, that's also, like, a P99 type of thing. So like--
MARK: Yeah.
IAN: You know, if you--basically, 99% of the queries will be, you know, faster than 10 milliseconds. So, like, it's very, very consistent in terms of, like, how fast the queries are, which is, you know, very advantageous for a lot of use cases.
FRANCESC: Cool. Okay. So let's imagine that I wanted to use BigTable, but I'm actually being--I'm using something different now. Like, for instance, I'm using datastore. How big of a change could that be for the developer?
IAN: Yeah. That could be quite a big change. It depends on what you're doing with datastore. If you're doing things that are very kind of low-level, where you're only doing gets inputs by key, then that can translate pretty easily to BigTable, and so I think it wouldn't be too hard to migrate. But other things, where you're doing lots of queries, and you're doing--using lots of indexes--those types of situations would be pretty difficult to move over, I think. 
FRANCESC: And what about if I was already using HBase and I wanted to use BigTable? 
IAN: So that's a good question. So BigTable does support the HBase API. There's a few kind of edge cases, where it--that it doesn't support. Those are mostly around managing the HBase, so, like, doing compactions and adding nodes and things like that, and BigTable's kind of fully managed, so you don't really have to deal with any of that. But there are a few, like, kind of small edge cases where you can't--that it doesn't support. But it--for the most part, it supports the wide--the majority of the HBase API, and so it's very, very easy to, like, move from an HBase installation or an HBase cluster over to BigTable. Probably the hardest thing would be moving the data over.
MARK: Okay. That's fair enough. Okay. Well, before we wrap up here, is there anything about BigTable you want to mention, or anything else that we may have managed to miss?
FRANCESC: Any cool project that you could like to mention that you've seen before?
IAN: A lot of that. 
FRANCESC: Other than my thing searching for pi, I'm sure that people have done more interesting stuff than searching pi.
IAN: So Google has made quite a lot of cool projects, so--and all of them, pretty much, use BigTable. But what I think is BigTable--interesting about BigTable is that it's used kind of at Google as the basis for a lot of other types of data storers, and so things like datastore and cloud datastore are kind of built on top of BigTable to allow, like, secondary indexes and things like that. So I think that, like, how BigTable is used kind of as a low-level kind of storage is pretty interesting. And I think that just the sheer scale and the amount of work that's gone into it at Google is quite amazing. We've spent probably about a year and, like, millions of man hours improving BigTable, and so it's very, very optimized. When you compare it to things like HBase and Cassandra, like, Cassandra can do things, like it can write very fast, but it can't read very fast, and--but BigTable can kind of do both, and so it's very, very interesting that it can read really fast and write really fast and get really big. So it's almost like this,like, magical thing that's--that we've been able to improve and build upon over the last, you know, ten years or so.
MARK: Awesome. Well, Ian, thank you so much for joining us. Really appreciate you taking the time.
IAN: Yeah. Well, it's been great.
FRANCESC: Thank you.
IAN: Thanks.
MARK: Thanks so much to Ian for joining us for that interview. I learned a whole lot. I really didn't actually know very much at all about BigTable, and now, I have a much better idea.
FRANCESC: Yeah. No, BigTable's a very, very cool product, and it is pretty amazing.
MARK: That it--yeah.
FRANCESC: yeah. Once you get started, and you start using it, and I have not seen the point where it's like, "Oh, yeah. It's not slow enough." Nope. Not there yet.
MARK: No, no, no. Excellent. Okay. So but we do have a very interesting question of the week. The question kind of comes from managing, say, a Google Cloud Platform project, and within that project, you probably have a whole bunch of different things. Like, maybe you have stuff to point to App Engine, stuff to push into Cloud Storage, maybe stuff on compute engine instances, and you have someone new join your team, and you want them to say, "Okay. I want them to be able to deploy, say, compute engine instances, but I don't want them to be able to read from, say, Cloud Storage. Maybe you have, like, private keys there or something like that that are only limited to certain team members. Can you do that?
FRANCESC: Well, no, until today, actually. Yeah.
MARK: Until today
FRANCESC: Until today. Until today, right now, Wednesday, March 23rd. Yeah. 23rd. That's it.
MARK: 23rd.
FRANCESC: I'm really bad with dates.
MARK: Yeah.
FRANCESC: Yeah. So actually, today, we announced this really cool thing, which is Cloud IAM. IAM, or Cloud IAM, or Cloud IAM, if you want to pronounce it in a weird way.
MARK: So Cloud Identity and Access Management.
FRANCESC: If you want to be correct, yes.
MARK: Yes.
FRANCESC: Yeah. And basically, what it allows you is to--it allows you to talk about--basically, you talk about what things are people allowed to do.
MARK: Yeah.
FRANCESC: So far, we had three roles in Google Cloud Platform. We had the role of honor, that was basically allowed to do anything.
MARK: Yep.
FRANCESC: The role of editor, that was allowed to do some things that--
MARK: Most things.
FRANCESC: Most things, but not everything.
MARK: Yeah.
FRANCESC: And then, the role of viewer, that was allowed just to view things, but not, like, create an instance, apply--like, very limited.
MARK: Yeah, yeah. So if I were--if I wanted to grant someone access, they pretty much got access to mostly all of it. 
FRANCESC: Yeah, basically. So now, you can actually create way more roles, and we already did that. We created a bunch of different roles. So for instance, you can say, "Actually, someone is gonna be a compute engine instance administrator. So that person will be allowed to create instances, to delete them if needed, but they will not be able to modify a Google Cloud Storage bucket, for instance.
MARK: So you can really sort of tailor exactly what permission levels people have within the system to exactly what your business needs are.
FRANCESC: Exactly. And that, building on top of the best practice of using multiple projects for different environments, you could see something where you can have, like, for the action environment, like, for the action product--QA product, test product, and you have different roles for those people. So someone will be able to do--like, everybody will be an honor and be allowed to do everything in the project for test, but maybe in QA, you cannot do all of those things, and maybe in production, you're able not to do anything, unless you are a devops, and then you are actually able--actually allowed to take down instances and delete data and do crazy things like that.
MARK: Nice. And I'm guessing you can probably also, like, build tools as well. So like, you can't physically go in and modify stuff, but if you go through the administration console, like a custom built thing or, like, some devops-type scripting environment, then you're like, "Okay. That's okay." But then, it sort of mitigates how much problems you can really kind of--
FRANCESC: Yeah.
MARK: You can kind of do by just kind of poking around and seeing what sort of things happen when I put a spanner in the electrical socket.
FRANCESC: Yeah. You should not do that.
MARK: You should probably not do that. Don't do that.
FRANCESC: Kids, don't do that. Yeah. On top of that, there's also the fact that, when I say identity, it kind of sounds like it's only for people, but not only. You can have the same thing for instances or any kind of machines, but by using service accounts. So you can basically say, "Oh, this instance is allowed to read from this cloud--from this bucket," or, "This instance is able to--"
MARK: Oh, nice.
FRANCESC: So you know, like, we used to have those things as tokens. 
MARK: Yeah.
FRANCESC: You're gonna have the same granularity of--sorry. Not tokens, scopes for those too.
MARK: Yeah.
FRANCESC: You have the [inaudible] an idea for every single one of the roles applied to every single one of the [inaudible].
MARK: Okay. So not only can you really nail it down by user, but you can be like, "Yeah. This part can only access this particular part."
FRANCESC: Yeah.
MARK: "This part can only access this very particular part," and you can get much more secure about it.
FRANCESC: Yeah. Basically, you get all the enhanced security that a company like Google could need. Like, until now, it could have been really weird to have some--like, a big, big company, where in a big, big company, you cannot trust every single engineer to do every single thing.
MARK: Yeah.
FRANCESC: Now, you can actually write it down.
MARK: Yeah, yeah.
FRANCESC: So yeah. Very excited about this, and very excited about seeing how people welcome it. I'm pretty sure that there was a lot of people waiting for this, so--
MARK: I think so too.
FRANCESC: And I'm pretty sure there's someone there, listening to this podcast right now, just cheering.
MARK: Yes. We--I was talking to a listener recently who said they almost crashed their car through an--from an episode the other day, because they through their hands in the air and did not grip the steering wheel.
FRANCESC: Was it the [inaudible] one?
MARK: It was the [inaudible] one.
FRANCESC: Yeah. So people, if you're listening to this podcast while driving--
MARK: Hold onto your steering wheels.
FRANCESC: Yeah. It is dangerous otherwise.
MARK: Wonderful. Well, Francesc, thank you so much for joining us for yet another episode.
FRANCESC: Thank you very much for having me. I'm very happy to be here, and let's see what's coming next week.
MARK: Ooh.
FRANCESC: Ooh. Maybe we'll have something special. I mean, we're at Google Cloud Platform next--today, right now.
MARK: We are, indeed.
FRANCESC: So maybe something special will come next week.
MARK: We shall see.
FRANCESC: Until next week.
MARK: Until then.
{{< /transcript >}}