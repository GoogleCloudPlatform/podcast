+++
audioDuration = "00:34:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.94.mp3"
audioSize = 50452754
categories = ["BigQuery", "Big Data"]
date = "2017-09-13T01:07:49Z"
description = "Have you ever wanted to know what powers BigQuery under the hood? Tino Tereshko and Jordan Tigani sit in front of the microphone with co-hosts Mark and Francesc to talk all about it!"
draft = false
episodeNumber = 94
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "BigQuery Under the Hood with Tino Tereshko and Jordan Tigani"
image="/images/icons/bigdata/BigQuery.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/EDfp3PAeG4H"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6zvsy1/episode_94_bigquery_under_the_hood_with_tino/"
+++

Have you ever wanted to know what powers [BigQuery](https://cloud.google.com/bigquery/) under the hood?
[Tino Tereshko](https://twitter.com/thetinot) and [Jordan Tigani](https://twitter.com/jrdntgn) sit in front of the microphone
with co-hosts [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) to talk all about it!

<!--more-->

##### About Tino Tereshko

[Tino](https://twitter.com/thetinot) is the Big Data Lead for Office of the CTO at Google Cloud, focusing on building strategic relationships with the world’s top Enterprises in the interest of sharing and accelerating technological innovation.
 
Tino hails from the BigQuery team, where he solved difficult cloud-native product problems, enabled Googlers and customers, and built programs like BigQuery Pacific. In earlier years Tino held various positions of leadership in several Silicon Valley startups, and could be found working as a quant developer on the floor of the Chicago Board of Equities at a boutique market making firm.
 
Tino holds a Bachelor`s degree in Applied Mathematics and Economics from University of California - Davis. When not at work, you can usually find him playing beach volleyball, cycling, skiing, paddle boarding, or enjoying a nice glass of wine. 

##### About Jordan Tigani

[Jordan](https://twitter.com/jrdntgn) was one of the founding engineers on Google BigQuery, wrote the first book on the subject, and is now the engineering lead of the product. Before Google, he worked at a number of star-crossed startups, and also spent time at Microsoft in the Windows kernel team and MSR.

##### Cool things of the week

- This week in Google Cloud Platform [medium](https://medium.com/google-cloud/weekly/home)
 - This week in Google Cloud — “Premium and Standard networking tiers, NYT Games on App Engine, Puppet for GCP, and a firewall for App Engine” [blog](https://medium.com/google-cloud/this-week-in-google-cloud-premium-and-standard-networking-tiers-nyt-games-on-app-engine-puppet-dafdad45cb69)
- Creating a GCP type provider in 6 (well 7) easy steps [blog](https://medium.com/google-cloud/creating-a-gcp-type-provider-in-6-well-7-easy-steps-19e6c59e1ae8)
- [Aja Hammerly's](https://twitter.com/the_thagomizer) Battleship [blog series](http://www.thagomizer.com/blog/series/battleship.html) 

##### Interview

- BigQuery [site](https://cloud.google.com/bigquery/) [docs](https://cloud.google.com/bigquery/docs/)
- BigQuery under the hood [blog](https://cloud.google.com/blog/big-data/2016/01/bigquery-under-the-hood)
- Dremel [paper](https://research.google.com/pubs/pub36632.html) 
- Borg and Kubernetes with John Wilkes [podcast](https://www.gcppodcast.com/post/episode-46-borg-and-k8s-with-john-wilkes/)

##### Question of the week

I want to talk to to my phone like it’s [J.A.R.V.I.S.](http://ironman.wikia.com/wiki/J.A.R.V.I.S.) and make it do things. How can I build a bot to do this?

- Cloud Speech API [site](https://cloud.google.com/speech/) [docs](https://cloud.google.com/speech/docs/)
- Cloud Natural Language Processing API [site](https://cloud.google.com/natural-language/) [docs](https://cloud.google.com/natural-language/docs/) 
- API.AI [site](https://api.ai/) [docs](https://api.ai/docs/getting-started/basics)
 - Intents [docs](https://api.ai/docs/intents)
 - Go library [github](https://github.com/campoy/apiai)

<div style="text-align: center">
  <a href="https://cloud.google.com/bigquery/"><img src="/images/icons/bigdata/BigQuery.png" style="margin: auto;"></a>
   <p style="font-size:0.8em">BigQuery<p>
</div>

##### Where can you find us next?

Francesc will be presenting at [Google Cloud Summit in Sydney](https://cloudplatformonline.com/Summit-Sydney-2017.html) and [Google Cloud Summit in Chicago](https://cloudplatformonline.com/summit-chicago-2017-schedule.html) in September.
In October, he'll be presenting at [Velocity London](https://conferences.oreilly.com/velocity/vl-eu), [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html) and [Devfest Nantes](https://devfest.gdgnantes.com/)

Mark is speaking at [Austin Game Conference](http://austingamecon.com/) and attending [Strangeloop](https://www.thestrangeloop.com/) in September.
He is also heading to Australia in October for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 94 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark, how are you doing?" >}}

MARK: I am very well today. How are you doing? 

FRANCESC: Very good, very, very excited. I'm going to Australia tomorrow. 

MARK: Ooh, fun. I'm going to Vegas tomorrow. 

FRANCESC: Yeah, I've-- yeah. 

MARK: I think you win. I think you win. 

FRANCESC: Yeah, I think so. Yeah, I think so. Yeah, there's no callers in Vegas. Maybe there are, I don't know. 

MARK: You know what? 

FRANCESC: Defer all of their calls. 

MARK: They're probably callers in Vegas. 

FRANCESC: There are probably callers in Vegas. Anyway, also very excited, because we have two people that were in the BigQuery team before-- 

MARK: Who? 

FRANCESC: --that are coming to tell us a little bit about BigQuery, about how it's built under the hood, so that's-- 

MARK: Yeah. 

FRANCESC: Yeah. 

MARK: I just assumed it was like magic, and unicorns, and some other things like that. But apparently, there's real technology that powers cool stuff. 

FRANCESC: There's unicorns. There's magic. And also, I think it's called Jupiter, but that's the network. And then some storage or something, yeah. 

MARK: Yeah. 

FRANCESC: It's a weird mix. So they're going to tell us all about it. And then at the end, we'll have a question of the week, which is about JARVIS. 

MARK: Yeah. So basically, I want to talk to my phone like JARVIS from "Iron Man." But I need to build a bot to do that. 

FRANCESC: Yep. 

MARK: How can I do that? 

FRANCESC: Yeah. I will try to answer that question as well I am able to, which is going to be interesting. But before all of that, we have our cool things of the week. 

MARK: Excellent. So I think to this week, we are going to look primarily at community stuff, which is quite cool. I want to bring to light a little series written by a person on our team, Alexei. He has, for the last few weeks, been writing a This Week in Google Cloud blog post. 

So if you're looking for possibly another avenue to get sort of some weekly news about what's happening in GCP, he's got a really nice little wrap up, a Medium blog post that goes out once a week. Everything from different network performances, PowerShell command lines in BigQuery, benchmarks with Google perception APIs, Kubernetes and Istio, all sorts of other fun stuff. So it's well worth subscribing, and having to go check out. 

FRANCESC: It's really basically like all the cool things of the week, but way more than that, and all in written form. So if you don't want to hear our voices, it's a very good option. 

MARK: Yeah. And speaking of Medium as well, I will put a shout out to another person who wrote an interesting article that I quite like because you know how much I like Deployment Manager. 

FRANCESC: Hey, yay! 

MARK: All I have is a first name here. It just says Grace. Thank you so much for posting this, Grace. It's talking about tight providers in Deployment Manager. So as you may know, in Deployment Manager, you can deploy, say, like a GCE instance or a Kubernetes cluster. 

Maybe you want to be able to automate, say, a very particular type of GCE instance. Maybe it has certain permissions, or certain startup scripts, or other things like that. You can actually define your own types, so that you can then reuse those across your Deployment Manager scripts. So here, Grace is showing us how to do that in a nice step by step blog post. 

FRANCESC: Cool. And to finish, we have one more cool thing of the week, which actually comes from the team. Aja Hammerly, known as Thagomizer on the internet, has written a series of blog posts where she builds a game that apparently I knew, but I did not know the name of it. It's called "Battleship." For those that do not speak English that well, or grew up in a different country, in Spanish, it's called [? "Un ?] [? Data ?] [? Flota." ?] 

MARK: Oh cool. 

FRANCESC: Same thing. Yeah, it's-- 

MARK: Nice. 

FRANCESC: --to sink the battleship. 

MARK: Oh, that makes sense. 

FRANCESC: Not to sink the boats. 

MARK: Whatever. 

FRANCESC: But yeah, she explains a little bit how she built all of the things, of course, in Ruby, of course. 

MARK: Yep. 

FRANCESC: That's Aja. And I think it's very cool. 

MARK: It is really cool. It's worth noting that she steps through all the logic, but she has a deployment for App Engine that is public with an API. So if you want to interact with the API and play "Battleship" against it, it is sitting there. So you can give it a shot. 

FRANCESC: Yeah. And all of this is, I'm assuming, running on App Engine, so I'm assuming it's App Engine flexible environment. 

MARK: Yes, I would assume so as well. 

FRANCESC: Yep. 

MARK: Awesome. Well, why don't we go have a chat with our friends, Tino and Jordan, and find out all the magic things that happen underneath the hood in BigQuery? 

FRANCESC: Sounds good. Let's do that. 

MARK: Cool. 

FRANCESC: So I am very happy to welcome today to the podcast the two gentlemen co-authors of a blog that we really, really enjoy, a blog post by the name of "BigQuery, Under the Hood." So we have today, Tino Tereshko. Hi, Tino, how are you doing? 

TINO: Hello, how are you? 

FRANCESC: Doing great. Thank you for coming. And we also have Jordan Tigani, software engineer. How are you doing? 

JORDAN: Good, thanks. Thanks for having 

FRANCESC: Thank you for joining us today. We're going to be talking a lot about "BigQuery Under the Hood," so basically, all of the cool things that make BigQuery possible. But before we get into that topic, why don't you tell us a little bit about yourself and what you do at Google? Maybe Tino, you can start. 

TINO: Sure. Up until about a year ago, I was on the BigQuery team working with Jordan and the rest of the organization, just delivering features, and making sure we got the best product possible. Now I am the big data lead for a relatively new organization called Office of the CTO in Google Cloud. 

FRANCESC: Cool. We actually have an episode that either already came out or will be coming out soon, we still not sure exactly about what [? Octo ?] is. Very, very interesting topic. What about you, Jordan? Tell us a little bit about yourself. 

JORDAN: Sure. I was one of the first engineers on the BigQuery project. Several years ago now I wrote a book about BigQuery, which is getting a little bit out of date. So hopefully, this can help keep people up to date with the latest changes. And now I'm the engineering lead of the BigQuery product. 

FRANCESC: Awesome. 

MARK: Cool. All right. Well, before we get stuck into the Under the Hoods section, we have done several episodes-- I think I'm actually counting about six, I went back and had a look-- where we discussed BigQuery itself. But for those people who may not have listened or just want a refresher, what-- like, very high level-- what is BigQuery? What's like the three-minute sort of thing? 

TINO: So BigQuery! BigQuery is, in very simplistic terms, is a serverless fully managed, whatever buzzword you want to use, high level of automation service that allows you to store vast amounts of data, or little amounts of data for analytics, and then perform analytics on that data in a SQL format. So that's in very, very simple terms. But when you actually start peeling the onion, you see that there's a whole lot of stuff behind BigQuery, right? 

The compute engine of BigQuery, the thing that executes SQL, is actually Dremel, which is this internal service that is ubiquitous at Google. And then we have this fantastic storage engine. It's all tied together through networking and, really, the secret glue that nobody even talks about is our scheduler and the type of magic that's possible to sling resources around from query to query. That's essentially it. 

But, yeah, our customers really appreciate the simplicity of the product and how easy it is to scale up and down. And I think, really, the biggest thing, again, comes down to the fact that it really truly is NoOps, right? It's no hassle. You set and forget the query, and you just focus on things that are important to you. 

JORDAN: Yeah, I would just add that one way of thinking of it is a cloud-based NoOps data warehouse. And it's a lot simpler. It's simpler to set up and certainly simpler to scale than other options. 

FRANCESC: Cool. So you mentioned something about Dremel, which is kind of cool. Because I know that Dremel is a research paper. Can you talk a little bit about how BigQuery came to be since Dremel? Is it the same thing, just made it available to people outside of Google? Or is there any differences in there? 

JORDAN: It's sort of an interesting story, and we kind of didn't use to talk about it, basically, because there were some kind of internal politics things around it. But essentially, a bunch of us in the Seattle office had gotten pulled off of other products that we were working on, because the site director wanted us to build a data marketplace. And so we all got together in the dining room of the original tech lead and tried to figure out, how are we going to build this data marketplace? 

And what we realized was that in order to be able to sell large data sets-- and we're Google, we have to deal in large data, that's sort of what we do best-- is you wanted more than just sort of a download link. And you also kind of-- there's this concept that when you have large data sets that you need to bring the compute to the data rather than the data to the compute. So what we decided was we would build something that would allow you to bring the compute to the data. 

So you'd give us your data. The data would sort of sit in our cloud. And then you would run your computations. And we harness the internal Dremel engine in order to make this happen. And sort of six years later, we haven't gotten around to the whole data marketplace thing. We might someday. But this turned into a quite successful product. 

TINO: If I may add to that, I think it is true that BigQuery does sit on top of Dremel in terms of the execution port, and scheduling, right? I think the main difference is that we can treat Googlers much worse than we can treat external customers. We can opt them into all kinds of crazy, weird dogfood that we can't do with customers that pay us real money. And that's kind of, I think, been historically the way. 

For example, the component of Dremel that's really undergone really dramatic change is the actual execution engine. What's in the paper's no longer really the case these days. The new engine called Dremel X that's been live for about two years in production was really dogfooded for a long time internally before the team was comfortable enough to kind of thrust that onto the rest of the world. 

And the average customer, the average user of BigQuery don't really know when they switched over to new engine. They just kind of ran a query, and all of a sudden, it was five times faster. And that's really how they knew they were on the new stuff instead of the old stuff. 

MARK: This sounds really cool. But let's maybe take a step back from some of the words like Dremel and stuff that people don't know. What does it look like? So say I've got-- I don't know-- a terabyte or two of data, and I write some SQL. How does the magic happen that turns that SQL into computation that potentially spans across multiple computers, and does lots of crazy things? Can you talk us kind of through that step by step? 

JORDAN: Sure. It's a little hard to do without diagrams, and just by kind of describing the data flow. But one way of describing the Dremel execution engine is there's a query master, and there's a bunch of shards. And the query master gets the query. It parses it, figures out a query plan, works with the scheduler, schedules execution of the different parts of the query, and then schedules a whole bunch of these shards to execute that query. 

One of the nice things about SQL is it's very parallelizable, where clauses and filters can all be completely parallelized. Aggregations can be partially parallelized. And they can be completely parallelized if you employ a shuffle. So we have a really fast in-memory shuffle that also gets into the process. The original Dremel paper was sort of a tree shape, where kind of the filters would happen at the lowest level. The aggregations would sort of bubble up the tree. 

But this didn't really work for complex queries, where you kind of would need to traverse the tree multiple times. And so now what happens is rather than a static tree, the query master will kind of design a multi-level tree. So whereas in between we used a fast in-memory shuffle or we-- in some cases, or we can directly pass the data to the next stage. And this allows queries to be much more flexible and allows us to be flexible in how we allocate resources. 

TINO: Let me add a little bit of sugar from my side. So you heard kind of like the engineering point and now maybe the customer facing point that I like to think about is imagine you have those big old IBM Blue supercomputers that used to be famous in the '80s and the '90s. Imagine if you had terminal access to one of those, and you could just rent one of those for four or five seconds at a time and just pay per second, essentially. 

That's kind of what BigQuery gives you. BigQuery gives you access to this incredibly vast supercomputer that Google manages for you called Dremel. And you push the button, and you say, I want to use this thing for a few seconds at a time. That's pretty awesome. 

FRANCESC: Cool. So now I'm wondering-- you're saying that there's basically a lot of computers running this. That even though it looks there's only one big computer, what is going on in this, basically, massively parallelized query that is sent all around. And I guess that how that is actually done, that is into the details of the paper and stuff like that. 

But I'm curious about how does this actually work? Do you need to have a cluster of computers? Like when-- Kubernetes, for instance, you create a cluster, and then you're ready to start running things. Does it work like that? 

JORDAN: As Tino mentioned, it's a multitenant system. So essentially, we host a number of giant computing clusters. And everybody's queries kind of get time sliced onto some of these clusters. And we strive to give every user 2,000 slots, which basically means 2,000 units of individually schedulable action that can run in parallel, so essentially, 2,000 shards per user. 

You might not get that if you query in a very popular time. But you should nearly always get that much execution power. And that's going to only be a very small fraction of any of our Dremel trees. And we have a number of Dremel trees that are around the world, mostly in the US and in Europe. 

TINO: And I'll add to that as well. Jordan's talking about just the compute component, the query, Dremel. Unlike any kind of traditional data warehouse, or data lake product, whatever you want to call that, BigQuery does have separation of storage and compute, which tends to be a popular term these days. So query is entirely separate from storage, right? So storage is unlimited. It's fully managed. It's really, really inexpensive. But you can leverage analytic capacity on top of that storage in very elastic ways. 

But also, what BigQuery has that's really unique is we also separate compute from intermediate state. So a lot of times, any typical similar technology keeps state in the nodes that are processing themselves. BigQuery does that, but BigQuery reserves the right to keep state and what Jordan referred to as this separate [INAUDIBLE] shuffler. This allows us to do all kinds of really interesting things when it comes to efficiency and performance. 

FRANCESC: So now I'm curious about-- you were talking about the compute side of things and then the storage side of things. And for the compute side of things, basically, what we're doing is rather than running one really big query, there's thousands of them, or I don't know how many, but like, many, many of those little jobs running all around that BigQuery tree. How are those managed? 

We had an episode on Borg. Is this running on Borg? Is this running on Kubernetes? Can you talk about this? 

JORDAN: Yeah, so they're running on Borg. We also have our own scheduler to sort of deal with when to redispatch queries that maybe part of a query was running on a shared and that shard dies, to recognize that, and redispatch it elsewhere. 

TINO: Yeah, the scheduler also kind of makes you immune from any kind of individual hardware downtime, right? The schedule knows when something's happening, and will try to reparallelize the workload, and things like that. 

JORDAN: And Borg is what's responsible for if a machine dies, or-- sorry, if one of the shards dies, it'll restart it, and rejoin the cluster. 

TINO: The one distinction I want to make here before we move on, guys, is any kind of typical similar technology, when you "stand up a cluster," quote, unquote, you essentially have a process that is really fast. Automatically, it goes out and puts out sticky notes on a bunch of hardware that says this is my hardware right now. And BigQuery does that per job very, very quickly, right? 

This process that puts sticky notes on hardware executes in less than a second at massive scale. And then once the query's done, all those stickies are thrown away, right? So it's per job, rather than per getting a cluster going type of thing. That's pretty cool. 

MARK: Cool. And something you definitely alluded to earlier we were talking about. So we've been talking about the compute side. And sort of on the storage side, is there anything particularly special about how BigQuery stores the data that enables it to parallelize in a great way or able to affect the performance? I mean, I'm just going to assume it's not just a hard drive sitting on someone's computer under a desk somewhere. 

JORDAN: So we use our own proprietary columnar storage format called Capacitor. We looked at a bunch of open column formats, including Parquet, which is really, really common in the open source community. And there wasn't anything that would give us enough control over how the queries are executed. 

For example, in some of the metadata, it's arranged in a way that the query engine has to do very little work in order to satisfy a large part of the queries. The hash tables that we built were sort of already prebuilts in those headers. And we followed a lot of research papers, and sort of some state of the art ideas that people had and productionized it into our storage format. 

So yeah, each column is stored in a separate chunk of the file. And this allows many databases to use column storage now. I think we have a pretty advanced version of that that builds on top of sort of the standard column store and allows us to A, compress better, and B, read less data. 

MARK: So I'll ask the pertinent question. What does a column store actually give you? What's the benefit there? 

JORDAN: If you imagine a record store, where you store a full record, and then the first record, and then the next record, and then you try to compress that, that's not going to compress very well because compression works on eliminating redundancy. And the redundancy that you have across a row is pretty small in general. But usually, in a column, there's a lot of redundancy. Maybe you have telephone numbers, and the prefix is always the same. Or maybe you have countries, and there's only 10 countries that you deal with. And so these tend to compress very nicely. 

The other thing you can do, especially if you're using a distributed file system where you're not worried about the speed of one spinning disk, is that in a column story, you can read different columns in parallel because they will end up-- under the hood, they will be stored on different disks. So you get a faster effective I/O throughput by reading these multiple columns at the same time. 

FRANCESC: Cool. And I guess that is also why from the point of view of a customer, BigQuery doesn't charge you for the columns you do not read. It is because you actually do not read them, so there's no compute cost associated with it. 

JORDAN: Yes, exactly. So yeah, you save on reading the columns that you don't care about. And in fact, that was one of the original reasons that Dremel was created, is because there was an engineer who was doing a lot of map-reduces over these log files. And these log files had, actually, hundreds of thousands of columns. But he was only using a couple of those columns, and so he was reading all this extra data. And so he just switched this data to a columnar format and wrote a little SQL engine on top of it. And that's sort of what then became Dremel, and then what became BigQuery. 

FRANCESC: So I have a story that I heard that I don't know if it's true or not. But I heard that Dremel was created when those map-reduces that you were mentioning were actually taking almost 24 hours to complete, to process 24 hours of logs, which is a bad place to be. Is that true, or is it just like a story that someone told me just to brag a little bit about it? 

JORDAN: That's actually true. And the engineer who created it basically created it while he was waiting for his map-reduces to finish. 

TINO: Behind every major innovation, there is a very lazy engineer. 

[LAUGHTER] 

MARK: I love the fact that as well, you're like, yeah, so he just put this thing together. It's like a columnar thing. And then he put a SQL-- like, it's just like, yeah, it's fine. He did it in like a couple of afternoons, whatever. And I'm like, what? 

[LAUGHTER] 

JORDAN: I think that's just sort of an interesting way that that stuff often can develop at Google. Not to flog Google too heavily, but he started it, and it wasn't a big deal. It was a tool that he wrote himself. And it required a lot of setup. 

And he had an intern, and the intern started working on it. And then a couple of the 20% project people started working on it. And now we've got dozens of engineers, and a Fortune 500 company is relying on it. 

TINO: And they like to say that at Google the hard problems are easy, and the easy problems are hard. So we built this massive supercomputer engine that just churns through data. But for the longest time, we had people opted into approximate [? count ?] [? to state, ?] for example, right? And that was just kind of like the nature of this organic buildup. And because of Google Cloud, we actually have to care about customers. So now we have what the standard calls for, you know? 

JORDAN: And yeah, it did lead us to do some things that, in retrospect, we wouldn't have done. Tino mentioned the approx [? count ?] [? to state, ?] where internally, folks were like, well, I'm doing logs analysis, and I don't really care if there's 1,000,017 distinct users, or 1,000,019 distinct users. They really all kind of fit into that same bucket. And the algorithm to compute those is 10,000 times faster to do it approximately, so I'm just going to use the approximate one. 

And there were some syntax things as well that made it easier to process your logs. But once we're trying to get people who have been using SQL their lives to adopt it, they found some frustrations. Luckily, both of those things have been fixed. 

FRANCESC: So we've talked so far about compute. We've talked a little bit about storage, about how we store, but not where. So I'm curious about where do we store all of this? Is it like local disks? It's this in Google Storage? 

JORDAN: We store it in the basement of Building 42. 

MARK: Nice. 

FRANCESC: Oh yeah, I've been there. It's nice. 

[LAUGHTER] 

JORDAN: I know we store it in Colossus. So Colossus is our distributed file system. The Google Cloud Storage also uses Colossus. Things at Google-- new innovations tend to be sort of built on top of older innovations, so the technology stack tends to be very deep. Google Cloud storage is built on top of Blobstore, which is built on top of Colossus, which uses Bigtable, which uses Colossus. 

And BigQuery stores data on Colossus. And Colossus takes care of transparent encryption. It takes care of encoding. We use an erasure encoding, so that the data is stored redundantly. 

Basically, there are some checksums that are stored elsewhere, so if there are failures that happen on any particular disk and any particular chunk, those can be recovered. And it's actually sort of an elaborate kind of web of checksums that can be used to recover from lots of failures. And so our data is actually stored quite durably within a particular cell. 

And a cell you could think of as a building. And then the data is replicated to multiple locations. So we replicate to a couple of different cells, couple different buildings within a region. 

Actually, so the Google Cloud terms are zones. We replicated a couple of different zones within the region. And then we also store an off-region copy of the data to make sure that in case there's a fire or a hurricane or something, that your data is still durably stored. 

TINO: Again, with Lime, with how BigQuery works, you don't know that any of that happens. It's just kind of like a benefit that you get. 

JORDAN: And also-- just to make sure-- we don't replicate your data out of the country that you're storing your data in. So say, you're staying in the EU, we don't replicate it out of the EU. If you're storing it in the US, we don't replicate it out of the US. 

TINO: Here's one more thing I want to say about that. Because Dremel is this big thing that has lots of compute sitting around, and sometimes it's variable capacity demands on this compute. Sometimes it's not 100%. Actually, a lot of times it's not 100%. So we essentially have excess capacity on the compute side. 

So what sometimes the storage engine does is it looks at how the data is stored physically inside of BigQuery and says, well, maybe it can be better, right? Maybe this table is driven by 10 million small files, and we can kind of coalesce that number down to 10,000. Or maybe we can do some other improvements here. And again, this also happens without clients knowing about it. You just kind of get potentially better performance. 

FRANCESC: Great. Now that we've discussed two out of the three topics that I wanted to discuss, but we're almost running out of time. So I wanted to just go really quick over-- to make all of this happen for real, you need a good network, I'm going to assume? Could you talk a little bit about the importance of the network in this? You're sending a lot of data around, right? 

JORDAN: You know, there's some bits in here that are proprietary, that we don't usually talk about. But I think that one of the real advantages that Google has is the quality of it's data center networking. That means you can move data around anywhere within the cell extremely quickly. And sort of the total throughput of that is in the petabit range, which is pretty massive amount of data. 

And it's also what lets us often compete in performance with in-memory databases. Because the kind of performance that we get, people would assume that you can't get with just regular old spinning disks. Because we are able to, A, parallelize it into so many of those disks, and, B, our network is so fast, that the overall throughput is extremely high, and, it's higher than you could likely get elsewhere. 

MARK: Awesome. Well unfortunately, we are running out of time a little bit. Well, actually quite a lot. 

[LAUGHTER] 

So we are going to have to wrap things up. Before we go, I'll give you the quick opportunity-- is there anything that we happen to have missed, or maybe there's an event, or information that you think people should read? Basically, if there's a last minute thing you want to make sure is on the podcast, what can go there? Tino, why don't you go first? 

TINO: Yeah, I feel like that blog post we wrote was about a year and a half ago. So it probably bears actually expanding on that and talking about other things that BigQuery has, like the data sharing capability, and the in-memory shuffle a little bit more, and all the other things. But otherwise, yeah, thanks for having me. 

MARK: Wonderful. Jordan? 

JORDAN: And I'm going to be speaking at the @Scale conference in San Jose at the end of the month. And I'm going to be talking about the BigQuery storage system and kind of going into more detail that we've shared before about that, how that works, and why we want to have our own storage system. 

MARK: Awesome. 

FRANCESC: Fantastic 

MARK: Well, thanks to both of you for joining us today. I really appreciate you taking the time to hang out with us, and tell us all about how BigQuery works. 

TINO: Thank you. 

JORDAN: Thank you. I love talking about BigQuery, so thanks for asking. 

MARK: Thanks again for having such a fantastic conversation with us, Tino and Jordan, telling us all about all the things about how BigQuery works. 

FRANCESC: Yeah, really cool. 

MARK: Yeah, I still think it's just magic and unicorns. 

FRANCESC: Yeah, there was still so much more to cover, but we had to stop it at some point, but super interesting. And let's remember that there was also a blog post that they wrote long time ago. 

MARK: Yes. 

FRANCESC: So if you want more detail and more references, the blog post will be linked from the show notes. 

MARK: Absolutely. Cool. So, question of the week-- I want the sentient robot-type thing, JARVIS, like "Iron Man." I want to be able to talk to my phone and make it do things. Tell me how this is possible. 

FRANCESC: OK. So if you follow me on Twitter-- which, by the way, you should-- I've been learning a lot of machine learning lately. And so the way to do this is, first, you need to do some signal processing. 

MARK: OK. 

FRANCESC: So you need to know the basics, like Fourier transform and stuff. 

MARK: OK. 

FRANCESC: Then you're going to need to develop probably convolutional neural network. 

MARK: OK. 

FRANCESC: Maybe recurring-- I'm not sure-- to be able to understand to do speech recognition. And then from there, you need to do the natural language processing, which also uses convolutional neural networks and are actually more recurring neural networks than convolutional. It's not super hard. It's just basic calculus. 

MARK: OK. 

[LAUGHTER] 

So that is a way. And actually, if you want to build it by yourselves, you can totally do that. There's a different way, which it would be more high level, and that I recommend, which is to simply use speech API. We have an actual language processing API. 

MARK: Yep. 

FRANCESC: So those work really well, and you can build a whole thing from scratch if you want to. Or even better, you can use something that is designed specifically for this use case, which is API.AI. And API.AI is a super-cool thing. Because it's a very simple platform that allows you to use machine learning, even though you have no clue of how machine learning works. 

MARK: Ooh! 

FRANCESC: Which is amazing. 

MARK: Because I have no clue. 

FRANCESC: I have a little bit of a clue, but I'm still really lost. [CHUCKLING]. So that really helps. And basically, what you do is you define what we call intends. And those intends are matched in between the text you're receiving and the endpoints on your back end, right? So at the end, what you develop is basically just a REST API. 

And you're going to get like JSON messages sent there, and you need to respond to those. So, for instance, if you want to develop like-- I don't know-- like, a store, you're going to have search, and buy, and stuff like that, right? And then you just give examples. So those examples-- for instance, you could say, I would like to buy-- I don't know-- Pixel XL, right? 

MARK: Oh yeah. 

FRANCESC: When you say I want to buy a Pixel XL, what you're going to say is Pixel XL is an entity, and I want to buy is the use case. And you just give a bunch of examples, like saying, well, if instead of receiving, I want to buy, or say I would like to get, well, that's kind of the same thing. So you just give a bunch of examples for the same-- 

MARK: Interesting. 

FRANCESC: --intent. And that's it. 

MARK: It sounds like this would make a really good episode. 

FRANCESC: Yeah, I really believe so. And I'm actually going to be speaking about it during the Cloud Summit that will happen in Sydney, which I think it's on the day this episode's coming out, which is Wednesday. So that's going to be fun, which may be like, Tuesday in Australia or something, because you have weird days. 

MARK: It's going to be the same day. 

FRANCESC: No, that's not how it works. But anyway, it is really cool. And actually, I've been playing with this a little bit. And I open-sourced a little framework for those that would like to do this in Go. It is super simple. And I built a very straightforward application to do search on Google Flights directly from your phone. 

MARK: Nice. 

FRANCESC: And it works. 

MARK: Works. 

FRANCESC: Unexpectedly, it works, yep. 

MARK: Cool. Well, if anyone from the API.AI team is listening, and want to come on the podcast-- 

FRANCESC: Yeah. I have so many questions to ask them. So yeah, if you are product manager, or an engineer, or whoever in API.AI, and would like to be on the podcast, there is a formal invitation right now for sure. 

MARK: Yeah, awesome. All right, Francesc, before we wrap up-- so it sounds like you're going away for a little while? 

FRANCESC: Yes. 

MARK: That sounded really bad. I believe you're traveling soon to go on a trip. 

FRANCESC: Yes, I'm going on a trip. So I will be going to a bunch of different Cloud Summits, basically. I'll be at Cloud Summit in Sydney, which will happen on the 13th. On the same day, there's also a Cloud Summit in Seattle. I will not be in that one, because traveling across the world takes time. So I will not be in Seattle, I will be in Sydney. 

And then a couple of weeks later, I'll be at Cloud Next Chicago, which is on the 27th of September. And then a couple of weeks later, I will be at Velocity London on the 17th and 18th of October. Then at Cloud Next Paris on the 19th of October. And then at DevFest Nantes in Nantes on October 20th. And after that, I don't know. I'll take a break or something, because it's going to be very intense. 

MARK: That's fun. 

FRANCESC: Yep. What about you? 

MARK: Sweet. So what day is this coming out? OK, cool. So I will be at Austin Game Conference on the 25th of September, speaking. I will be attending Strange Loop, one of my favorite places in the world, on the 28th of September. In October, I really should book some flights to Australia, because I will also be there. I'll be there speaking at DevFest Melbourne as well as at Game Connect Asia Pacific and probably pottering around at the very least at Unite Melbourne, as well as Pax Australia. Whoo! 

FRANCESC: Wow. Yeah. 

MARK: Yeah, it's a busy time of year. 

FRANCESC: Yeah, it's going to be an intense couple of months. And then it's going to get even worse, so yay. 

MARK: Brand new year. Soon, it's going to be 2018, how terrifying is that? 

FRANCESC: Yeah, and episode 100 is coming. Anyway, something will be coming. 

MARK: Yeah, something interesting. Cool! All right, well, Francesc, thank you once again for joining me on this wonderful episode today. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}