+++
audioDuration = "00:31:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.186.mp3"
audioSize = 45244251
categories = ["Blockchain", "Cryptocurrency"]
date = "2019-07-17"
description = "Today is all about blockchain, as new host Carter Morgan joins veteran Mark Mandel in a fascinating interview with Allen Day."
draft = false
episodeNumber = 186
hosts = ["Carter Morgan", "Mark Mandel"]
title = "Blockchain with Allen Day"
image="/post/episode-186-blockchain-with-allen-day/images/hero/hero-EP-186.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/cehjll/episode_186_blockchain_with_allen_day/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Blockchain takes the spotlight as new host [Carter Morgan](https://twitter.com/_askcarter) joins veteran [Mark Mandel](https://twitter.com/Neurotic) in a fascinating interview with [Allen Day](https://twitter.com/allenday). Allen is a developer advocate with Google, specializing in streaming analytics for blockchain, biomedical, and agricultural applications.

This week Allen reveals how blockchain and cryptocurrencies can be applied to a variety of applications like distributed file storage and video services. We also discuss the hype and merits of blockchain + projects that Allen has worked on to analyze cryptocurrency transactions using Google Cloud's big data platforms. The results may just surprise you.

<!--more-->

##### Allen Day

[Allen Day](https://twitter.com/allenday) is a developer advocate with Google in Singapore. He specializes in streaming analytics for blockchain, biomedical, and agricultural applications. Allen studied at the UCLA Geffen School of Medicine and earned his PhD in Human Genetics. Allen's blockchain work is focused on interoperability between smart contract platforms and cloud platforms. He created Google Cloud's blockchain public datasets program, which allows non-specialist engineers and data scientists to search and analyze public blockchain data.

##### Cool things of the week

* Blockchain.com, scaling and saving with Cloud Spanner [blog](https://cloud.google.com/blog/products/databases/blockchain-scaling-and-saving-with-cloud-spanner)
* Cloud TPU Pods break AI training records [blog](https://cloud.google.com/blog/products/ai-machine-learning/cloud-tpu-pods-break-ai-training-records)
* Cloud Memorystore adds import-export and Redis 4.0 [blog](https://cloud.google.com/blog/products/databases/cloud-memorystore-adds-import-export-and-redis-4-0)
* To run or not to run a database on Kubernetes: What to consider [blog](https://cloud.google.com/blog/products/databases/to-run-or-not-to-run-a-database-on-kubernetes-what-to-consider)
* Google to acquire Elastifile  [blog](https://cloud.google.com/blog/topics/inside-google-cloud/expanding-our-enterprise-file-storage-offerings-to-simplify-the-management-and-scaling-of-data)

##### Interview

* Blockchain [site](https://www.blockchain.com)
* Bitcoin [site](https://bitcoin.org/en/)
* Coinbase [site](https://www.coinbase.com)
* Ethereum [site](https://www.ethereum.org)
* $24 million iced tea company says it’s pivoting to the blockchain, and its stock jumps 200% [news article](https://www.cnbc.com/2017/12/21/long-island-iced-tea-micro-cap-adds-blockchain-to-name-and-stock-soars.html)
* Blockchain ETL project on GitHub [site](https://github.com/blockchain-etl)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Kubernetes [site](https://kubernetes.io)
* Cloud Composer [site](https://cloud.google.com/composer/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Bigtable [site](https://cloud.google.com/bigtable/)
* Tensorflow [site](https://www.tensorflow.org)
* Bitcoin in BigQuery: blockchain analytics on public data [blog](https://cloud.google.com/blog/products/gcp/bitcoin-in-bigquery-blockchain-analytics-on-public-data)
* BigQuery public blockchain datasets on GCP [site](https://console.cloud.google.com/marketplace/browse?q=cryptocurrency)
* Ethereum in BigQuery: how we built this dataset [blog](https://cloud.google.com/blog/products/data-analytics/ethereum-bigquery-how-we-built-dataset)
* Ethereum in BigQuery: a Public Dataset for smart contract analytics [blog](https://cloud.google.com/blog/products/data-analytics/ethereum-bigquery-public-dataset-smart-contract-analytics)
* Introducing six new cryptocurrencies in BigQuery Public Datasets—and how to analyze them [blog](https://cloud.google.com/blog/products/data-analytics/introducing-six-new-cryptocurrencies-in-bigquery-public-datasets-and-how-to-analyze-them)
* Building hybrid blockchain/cloud applications with Ethereum and Google Cloud [blog](https://cloud.google.com/blog/products/data-analytics/building-hybrid-blockchain-cloud-applications-with-ethereum-and-google-cloud)
* Bitcoin in BigQuery: blockchain analytics on public data [blog](https://cloud.google.com/blog/products/gcp/bitcoin-in-bigquery-blockchain-analytics-on-public-data)
* Unchained Podcast [podcast](https://unchainedpodcast.com)
* Off the Chain Podcast [podcast](https://blockworksgroup.io/off-the-chain-podcast)

##### Question of the week

What are the four (or six?) types of VMs that exist on Google Cloud? [blog](https://cloud.google.com/blog/products/compute/introducing-compute-and-memory-optimized-vms-for-google-compute-engine) and [docs](https://cloud.google.com/compute/docs/machine-types)

##### Where can you find us next?

Mark Mandel is going to [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/), [Open Source in Gaming Day ](https://events.linuxfoundation.org/events/open-source-in-gaming-day-2019/attend/about/), and the [North American Open Source Summit](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/), as well as [Pax Dev](https://dev.paxsite.com) and [Pax West](https://west.paxsite.com).

Carter will be at the [Edinburgh Fringe Festival](https://www.edfringe.com) and working on new videos.

Allen will be at [Strike Two Summit (Amsterdam)](https://striketwosummit.com/), [Singularity Festival (Heraklion)](https://singularityfestival.io/), and [Ethereum Devcon (Osaka)](https://devcon.org/).

##### Sound Effect Attribution

* "mysterypeak1.wav" by FoolBoyMedia of [Freesound.org](https://freesound.org)
* "crowd laugh.wav" by Tom_Woysky of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 186 of the weekly Google Cloud podcast. My name is Mark Mandel. And I'm very excited to be joined today by Carter Morgan. How are you doing today, Carter?" >}} 

CARTER: I'm doing well, Mark. It's good to be here. 

MARK: Yes, so glad to have you on the podcast. It's your first time here, so you want to give people a little intro to yourself and what you do? 

CARTER: Yeah. It's actually my first time since I got back because I was here, like, two, three years ago. 

MARK: Yeah. 

CARTER: Developer advocate, though, so I'm here. And I just make videos, and I just make videos about everything Google Cloud related and specifically, VMs and GCE coming up pretty soon. 

MARK: I'm just actually trying to remember, you were on the podcast a while ago. Like, it was a long time ago. 

CARTER: A long time ago, like Kubernetes 1.3. 

MARK: 1.3. 

CARTER: Yeah. 

MARK: Yeah. OK, so you're no stranger. It's fine. 

CARTER: Been here, done that. 

MARK: So today we've got a really cool topic. We are going to talk about blockchain with developer advocate Allen Day, which I'm kind of excited about. Hot topic, but also kind of interesting. 

CARTER: I know so little about blockchain. It's time to learn. It's time to figure this out. 

MARK: Yeah. Yeah, it's going to be fun. And then after that, we have our question of the week as per always. I'm going to ask Carter about VMs. What are the four types of virtual machines that exist on Google Cloud? 

CARTER: Oh, intriguing. 

[MYSTERIOUS PIANO] 

MARK: Intriguing. But before we do that, why don't we get stuck into our cool things of the week? 

[MUSIC PLAYING] 

We are talking about blockchain today, so it is actually quite apropos that there's an article talking about Blockchain.com scaling and saving with Cloud Spanner. So Blockchain.com is a website that serves the cryptocurrency blockchain, [DING] really unsurprisingly, [DING] and it has helped 39 million cross-platform wallet users in 140 countries worldwide access the crypto ecosystem. 

And they've been using our horizontally scalable database spanner to basically help them with their needs in managing what is essentially money, which is kind of important to some people. So if you want to see some details about what it is they've been doing and how they've been using it, make sure to check out the article, which we'll have in the show note. 

CARTER: OK. That was cool, but what about winning AI records and competitions? 

MARK: I suppose it's all right. 

CARTER: That's pretty cool. So Google Cloud recently was in a competition, and they set three new performance records in the latest round of the MLPerf Benchmark Competition. So this is like an industry wide standard for measuring ML performance. And so it's cool because things like object detection or natural language modeling are what these algorithms are used for, and Google Cloud TPUs do it very fast, like over 84% faster than the fastest on-premise systems in the MLPerf Close Division. 

So I thought that was really cool. There's a whole article about it on cloud.google.com called "Cloud TPU Pod Breaks AI Training Records." Definitely check that out. 

MARK: Very nice. So we have some updates as well to Cloud Memorystore for Redis, our fully managed Redis service. So if you were looking for Redis 4.0 support, that is now available. Also what we have available is the new import-export feature, so you're able to import and export out of a Cloud Storage bucket of your choosing. So you can basically get your data in and out of Redis really easily. Just two really nice features that are super nice to talk about. 

CARTER: That's very cool. All right, features that are nice to talk about-- let's go back to Kubernetes and being able to customize Kubernetes to fit your needs. So there's this article that came out, "To Run or Not to Run a Database on Kubernetes." 

And it basically talked about how if you can't find something like a fully managed database like Cloud Spanner, or if you don't want to do it yourself on a VM, how you can do it on Kubernetes using operators, so you can make basically custom code to run and help you manage this database. So that, I think, is super cool. When I customize a database to fit exactly what you need for your application, you can check that out in this article. 

MARK: Yeah. I really like the flowchart in the article as well, where it talks about, like, this is how you can easily make the decision about where you should put your database. So I thought that was super nice. 

Finally, we want to just say congratulations to Elastifile. 

[COIL SOUND EFFECT] 

We want to announce that Google has entered into a definitive agreement to acquire Elastifile. They are an enterprise file storage for the cloud, basically lovely scalable file storage. We actually have Elastifile file service on GCP, which is a fully managed version of Elastifile integrated with Google Cloud, and we have some large customers already using it, but super excited to have them on board and joining the Google Cloud family. 

CARTER: Congrats, Elastifile. 

[APPLAUSE EFFECT] 

MARK: Excellent. Awesome. Well, Carter, why don't we go chat with Allen and learn all about blockchain? 

CARTER: Ah, I can't wait. Let's do this. 

[MUSIC PLAYING] 

MARK: So very excited to have Allen Day here, a developer advocate for data science and verticals, joining us. Allen, how are you doing today? 

ALLEN: Hey, I'm doing great. Thanks so much. 

MARK: Yeah, thanks so much for joining us. You've come today to talk to us about blockchain, which-- 

ALLEN: That's right. 

MARK: --should be kind of fun. But before we get stuck into that, do you want to tell us a little bit about yourself, who you are, what do you do here at Google? 

ALLEN: My name's Allen. I'm a developer advocate in the Google Cloud. And I work on the data and analytics products. That would be BigQuery, and PubSub, and DataFlow, and Bigtable, and any of the computer storage resources for processing and analyzing large volumes of fast-moving data. 

My PhD is in human genetics, so I have a background in biological data types, like genome sequencing and medical imaging, and that's part of what I do at Google. And then I also cover blockchains and cryptocurrencies because I'm based in Singapore, and that's one of the more advanced regulatory jurisdictions for this type of technology. Singapore and Switzerland are the two hotbeds of activity for incorporating, and making a foundation, and so on. So I figured I could do work locally by focusing on this industry. And it's been going pretty well. 

CARTER: That's exciting to hear. Wow. Very technical stuff, too. So then just a question I have is on, like, a day-to-day, developer advocate, what do you do in these areas? Are you making videos or-- 

ALLEN: Yeah, sometimes. I used to do a lot of events. And I know that part of what we're going to talk about later is where I'm showing up soon. But it's less than I used to, being out in the field. I tend to do a lot more writing these days. I find that it's just better to have my time blocked like that, with less switching cost of moving around and not losing days during travel. I could do more focused deep work. And then that also lets me spend more by interrupt time doing coordination with others. 

The cryptocurrency data, which is mostly what I'm working with, is public data that we can index, just like Google indexes the web. And so as a result, all of the work that I'm doing is open source development. And it's with distribute open source teams of contributors, where we all have some business interests, but are also volunteering time to build open source repos and open source data sets. And so there's a lot of interrupt time dedicated to team coordination, herding cats. 

MARK: So all of that sounds amazing. But why don't we start at the high level and work our way down all the way through the chain, which sounds really cool. No, that sounds awesome, though. So like, OK, what is blockchain? Because I actually have no idea. It's a word that gets thrown around a lot, especially here in the Bay Area, as where you are as well. So like, what is this thing that we keep hearing about everywhere? 

ALLEN: I would guess most of the audience should be familiar with something called BitTorrent, which is protocol [INAUDIBLE] heads are nodding. It's a protocol for a bunch of peer-to-peer technologies in general, which is a type of distributed system. So these peers get together, and they're trying to solve some problem, like make sure everybody has the same copy of the file. 

Or in the case of this blockchain, they're trying to make sure everybody agrees that the latest set of transactions that are being added on to the end of a log file are agreed upon by everybody that that's really what is in the latest block. So there's some consensus algorithm, essentially, being reached by a group of peers to coordinate work. Think about it like that. 

MARK: How does that kind of work? 

ALLEN: In terms of when we talk about data structures, that's probably the easiest way. 

MARK: Yeah. Like, do you and I just chat, and I'm just like, it's cool, and you're like, it's cool, and then we just go on our separate ways? Or is there some sort of contract, or what does that look like? 

ALLEN: So there's many of these different blockchain implementations, but at the most basic level, they're using a cryptographic function, a hashing function, right? Where the output is deterministic based on the input, but it's not predictable because the outputs appear to be uniformly distributed relative to whatever input you get, which means that for a given input and output, a peer on the network can verify that the output is what it ought to be based on the inputs. You can match them. 

But in order to find a particular output based on the input is difficult because the outputs are uniformly distributed relative to the input. It's random, essentially. OK, so what that means is that if we try to reduce the entropy of the output, like by-- let's say we a bit vector of 256 bits, and we're trying to make the first bit zero. OK, that's really easy. That's 50% of the time. 

But if you try to make the first 10 bits zero or the first 100 bits zero, it becomes a lot more difficult to find that, given that you have to do a search basically just by throwing darts at a board. Just because you've got 99 zeroes in one place, you can't move directly next door and get 100. This could be back to one, one zero. 

MARK: Got it. 

ALLEN: So what these peers do is that they look at how long it took to find a solution for a particular number of zeros to emit a block in a particular amount of time. So it's basically a set of some computing power being consumed over time, which they call a hash rate, so how many of these hashing functions can be done [INAUDIBLE] a time. 

And if a solution was found too quickly, then the peers agree because they're all sharing the same code base that the difficulty should be increased. We now need to add more zeros to make it slower. Or if it was found too slowly, then we make it an easier problem to solve. And so this is how they're doing the agreement. Some peers are doing this hashing to search for solutions to make a block within a particular amount of time. And they're adjusting the difficulty more or less based on how close they are to the desired amount of time. 

CARTER: OK. 

ALLEN: OK, so now let's talk about what is this block all about. So what are they trying to agree about? The block contains a set of transactions. So each of the entities that is participating on the-- the thing about cryptocurrencies now-- this is to make it simple, like Bitcoin-- anybody can generate a key pair. This is just like the same kind of key pair you use for PGP, or SSH, or SSL-- same thing. 

So you generate a key pair. And your private key can produce a public key, so that's deterministic. You can get the public key directly from the private key, but you can't get the private key directly from the public key. So what you do is you share activities that you're interested to do by signing them with your private key, which is then verifiable that it corresponds to your public key in assigning the transaction that you want to enter onto the ledger, this log file. 

So the blocks consist of a series of transactions that are essentially entries in a log file. All the records, which are these transfers of value, like moving Bitcoin from party A to party B, those transfer operations are all grouped together in a block. And the block is a transaction. Like in SQL, where you say begin and then commit, the commit is like that. So all the transfers within the same block have the same timestamp. 

MARK: So very much like if I was at a bank, and I was like, I want to move money from here to here, and between two accounts, that's why you need multiple transactions. Well, essentially, it's one transaction wherein one account is removing something, and one account is adding something, but at the same time. 

ALLEN: Correct. 

MARK: But in a way that-- 

ALLEN: It's [INAUDIBLE] 

MARK: --there's a distributed, I'm guessing it's like a peer-to-peer system that is able to say, OK, I know that this happened, and we all know that this happened. And we can verify this at a later date that we all agree on. 

ALLEN: Yeah. And so there's an interesting bit here. So I was talking about hash rates earlier, and so the incentive for these computers to be doing the hashing is that what they will do as part of their attempt to find a solution to this hashing problem on a block, right, is they will include their own transaction to give themselves new Bitcoins as part of that block. So if they produce the block, their block contains a block reward that produces new Bitcoins that go to the beta of the block that it's then broadcasting onto the network. 

And so that particular transfer is a special type of transfer called a Coinbase transaction, which is where if you've heard of Coinbase, which is the biggest exchange in the US for doing cryptocurrency activity. 

CARTER: And so the idea there is to incentivize people, allowing you to use their computers to form these hash operations? 

ALLEN: That's correct. Yeah, because you can mint new cryptocurrency by doing the hashing. 

CARTER: Mm, very cool. So I got a question where you were saying basically before, we were talking about cryptocurrency. Before that, we were talking about basically streaming video. And you said that you have a background in biomedical and agricultural. So can you use this for that as well? Are there applications in those areas? 

ALLEN: Yes, there are some open source projects in this blockchain space that are working on streaming video applications, something like a CDM, as well as doing distributed file storage, which would be the equivalent of, like, fully peer-to-peer Google Cloud Storage equivalent. Biomedically, there are some companies that are working on making data ownerable by the user. So if your data are encrypted according to a private key that only you control, then you can decide who has access to it at what level and at what time and can revoke access based on your encryption of your own data. 

CARTER: Oh, that is cool. 

ALLEN: Yeah, there's various ways you can do this. Creating new keys and recrypting or doing multi-signature keys where more than one party has to sign in order to get access to some data, this is also possible. Yeah, so there's applications like that. 

For analytical applications, which is where a lot of what GCP is doing for biomedical kind of things, there's not really any good way to partition the computing-- to shard it, is what these distributed systems people call it-- to make the computations cost effective relative to a centralized cloud. So it would be for doing like a deep learning model of retinopathy, or a breast cancer detection, or something like that. It's just not really a tractable problem right now, given the architecture of the peer-to-peer systems. 

MARK: Well, it sounds like, then, that there's actually a wide variety of use cases for blockchain outside of cryptocurrency, is what I'm hearing. 

ALLEN: It's true. Yeah. Any place where you want to have immutable data where you can prove that it was produced and nobody tampered with it, that's a good place where you want to use some of this technology. So with all this fake news stuff that's going on, like wow, all really good applications. 

CARTER: So then, I mean, if there's so many use cases for this, it's kind of strange because I've heard of blockchain a lot, and people joke about it. Like, every startup has a new blockchain or cryptocurrency offering. And so why is it that this is something that people take light of so much, something people make so much fun of? 

ALLEN: Yeah, it got a bad rap. Kind of a couple of dynamics here. So Bitcoin is the granddaddy of all of these things, and the Bitcoin community enthusiasts have their own strong culture that has some political ideology associated with it. It's very similar to the gold bugs, where there's, like, finite supply, and you can't inflate it. And it runs contrary to how mainstream macroeconomics work and how central banks operate. 

And so it's a different kind of thing. And because it looks different, it gets ridiculed. The other aspect of this is that Bitcoin has been having some success, and Ethereum has been having some success, which is another cryptocurrency and smart contact platform we can talk about. But as a result of that, on Ethereum, you can actually mint different types of tokens, which are not a first class cryptocurrency in their own right, but they can have cryptocurrency-like attributes in that they can be created and traded. 

And so because there were enough users using this thing, some clever marketers figured out they could start doing purely financial and marketing projects that didn't have much technical basis or merit for solving any problems. They could just create a token and ICO it, and buy a Lambo. And there was a bunch of that that happened in 2017, and a lot of people got burned by that. So that's another reason that things are ridiculed. 

MARK: That's fun. Definitely, I'm in the same camp as Carter, where I've been told, if you want 5% extra valuation, make sure that blockchain's in your startup title. 

ALLEN: Yeah. There's some good-- maybe we can link to this in the description about one of these iced tea manufacturers calling them, like, blockchain iced tea, and the stock went up overnight by double digit percent. 

MARK: Getting back to more functional type of things, so we talked a little bit about what blockchain is good at-- and maybe it's also kind of relevant since we're saying people feel like they can apply it to anything-- but what is blockchain bad at? What's it not good for? I've heard of people saying things like, oh, we're going to use blockchain for databases. Is that a terrible idea? I have no idea. 

ALLEN: It's an OK idea if you want an append-only database. So basically all of these things boil down to being log files that have some mechanism of reaching consensus about what the contents of the log file are, using a group of peers that may completely not trust one another or may have some level of trust between one another. 

MARK: And I'm guessing that trust is sort of an implementation detail-- 

ALLEN: That's correct, yeah. 

MARK: --depending on how you set it up. 

ALLEN: How you implement that, and where you have a public chain or a permission chain, it's also related to trust. And so yeah. So if you have a situation where you need a log file that can't be tampered with, you have a use case. But if you want to do something like search the log file to find old records, it's not a use case for that because it's really just adding things onto the end of a list. That's really what the primary concern is of one of these consensus transaction heading systems. 

MARK: So I'm thinking through communication type stuff. Like, I send you a message. You know it comes from me. You know the messages came in the order that they came in. That would be a fit? 

ALLEN: That would be a fit, yeah. But realize that every one of these messages has to be added into something that all the peers are validating. So it could be that there's some throughput problems with this. It's more and more I/O. So this is another scaling difficulty of these systems. There are some ways around it using things like zero knowledge proofs and other cryptographic stuff, but that's outside the scope of what we'll talk about today. And it's not clear that that will even be deployable into production at large scale, anyway. 

But I want to get back to something. So I was talking about like, OK, it's really good for adding entries to the log file, right? Putting my data science hat on, I was looking for some kind of thing I could write about as a developer advocate to get people excited about working on Google Cloud. And I wanted to do some network analysis of how all these parties are interacting with one another on the Bitcoin blockchain, or any blockchain for that matter. Who is sending money to whom, and when, and how much, and can we figure anything out about it? Are there any patterns here? Can we identify exchanges? Can we identify big owners, high throughput nodes, et cetera? 

These type of questions are very similar to the kinds of questions that I was addressing in my dissertation work because genetic regulatory networks have the same kind of characteristics. So there's some information in the form of structured molecules coming into a cell that are food, basically, or parts to help the cell run. And then there's some waste molecules that are being thrown out. And then everything in between has to do with a bunch of proteins and other molecules that are parts of the cell that allow that highly structured material to keep the cell running and turn into the exhaust. 

And so how does that regulation work? Well, the way that we go about analyzing it is by collecting some data using a biochemical assay of some sort, typically very high throughput one. And then we look at the data over time to see what's going on. And that type of analysis requires all this network analysis methodology, which could be directly applied to crypto economic networks. 

I'm thinking, OK, this would be great if I can just take some of these things I already know how to do and apply it to this other data set that's getting a lot of attention right now. Because nobody's talking about economic network analysis of these systems. They're just talking about ICOing-- making tokens, right? 

MARK: What does ICO stand for? 

ALLEN: Initial Coin Offering-- it's like an IPO. 

MARK: Got it. 

ALLEN: Yeah, so I tried to do this. And because I didn't know anything about any of this stuff about a year and a half ago, so I tried to go and get the data from the Bitcoin node. And I was like, well, why can't I get the data? Why can't I query it so that I can do an aggregation over time to look at what is the volume of transaction over time? There's no way to do this. 

So I was like, OK, well, I guess I can ETL this out into BigQuery and query it. And so that took a lot more time than I thought it would take, and justified writing a blog post about just doing that, and giving that code away because it was really hard to do. So I did that, and everybody was very happy about it and started using the data set. I got a lot of traction on our public data set program as a result. 

And so because of that, I haven't really done any analysis. I work with a bunch of analysts now. But mostly, I'm focused on building the infrastructure to support other analysts. 

CARTER: Right. OK, now, I'm curious. GCP specifically-- what kind of things do we have that help with that? You said you did some ETL analysis, so that sounds like Stackdriver or something like that maybe. 

ALLEN: Yeah, so how we have things set up right now-- and this is all in GitHub if anybody wants to grab the code to replicate this in Amazon or wherever else, it'll all work-- we're using Kubernetes to run the blockchain nodes. And we have health checks and load balancers in place so that if one of our peers falls over, we failover to the other one. And then there is a [INAUDIBLE] composer service that is polling the blockchain notes periodically to get data out. 

When a new block shows up, we stick it into it Pub/Sub topic. We publish to the topic. And then there's a subscriber to the topic that streams the data into BigQuery. So we make the BigQuery tables available to users to query. But if they also want to subscribe to the stream of events, those topics are also public. So people who want to do real time trading based on events that Google is publishing to the topic, they could do that if they wanted to. 

MARK: Just so I'm clear as off the nodes, how are they getting that information? Is that, like, a centralized repository of some kind, or-- 

ALLEN: The ones that we're running on Kubernetes? 

MARK: Yeah. 

ALLEN: So when you turn on the Bitcoin node, it connects to its peer-to-peer network. 

MARK: Oh, I see. 

ALLEN: So it's a bootstrapping process. 

MARK: Right, got it. So you sort of become one with the mesh network. 

ALLEN: You become one of the peers. And all the peers start sending you old data until you're fully synced with all the peers. And then if you want to, you can start producing new blocks by mining. We don't do any mining, though. We are just receiving and transmitting existing chain data to be a good citizen on the peer-to-peer network, but we're not actually mining any cryptocurrency. 

CARTER: I need to look this up right now. That sounds so cool. 

ALLEN: Not every day, but it's more than once a week, I get pinged by somebody who's done something interesting with this data set, some kind of analysis. 

MARK: Well, yeah. What sort of interesting things have people found? 

ALLEN: The most interesting things are related to basically characterizing entities on the network. So it's pseudonymous, right? So any given actor on the network has a private key that's private, and then they're signing transactions so you can verify what their public identity is. But beyond that, you have no idea how any given actor corresponds to any other actor. But if you start looking at patterns of activity over time, you can begin to get some sense of what attributes could belong to a particular actor on the network. 

Let's say there's a node that's receiving a lot of inputs from many different other addresses and is outputting to many other addresses. This is some kind of flow node that has a high throughput. It's typically an exchange where people are going to trade tokens, for example. 

Yeah, so this is the direction we're heading right now. So we've made the BigQuery tables available. That was the first thing. And we've done this for eight different blockchains at this point-- Bitcoin, Ethereum, a bunch of other ones. Then we made the Pub/Sub topics available so people can subscribe to that. 

I'm now working on two additional fronts. So one of them is data flows where the Pub/Sub topics will be read by a data flow and output to another Pub/Sub topic for producing derivatives. So we could basically do some kind of sliding window analysis, run it all the time, and just publish to another topic periodically for making, like, a candlestick chart, if you want to see something like amount of activity on network over time. 

The other one is related to what we were just talking about, about analyzing the network, possibly also in real time, where we can find anomalous transactions, or find labels on entities that are changing, or the entity has some significant volume through it. And these type of events of turning the continuous data into discrete data are actually a way to take the graph, the crypto and economic graph, and vectorize it. 

So now we have a vectorized graph, and we can start applying standard machine learning models onto this because we're now working in a vector space as opposed to a high dimensional graph space. So I'm planning on putting all that in Bigtable and doing cool TensorFlow stuff on top of that also inside of DataFlow. 

CARTER: Wow. So this is such a complex topic. And something you said earlier really shocked me. You said a year and a half ago, you didn't know too much about this. So you had to ramp up. Are there resources you maybe recommend to people who are interested in also ramping up in blockchain, crypto applications, any of that? 

ALLEN: Yeah, read any of the stuff that I'm writing because it's all from the beginning. You can just look at what I'm doing. Go back to my early GitHub commits and look at my [BLEEP] code. 

MARK: Excellent. Are there any other particular people that you follow or look for inspiration from, or online resources or courses? 

ALLEN: Yeah, there's a lot of resources. You could just go, like, how does Bitcoin work on YouTube, and you'd find all kinds of very basic, conceptual cartoon diagrams all the way to down-the-rabbit-hole, cutting-edge cryptography. Other good podcasts-- how about we talk about that? There's a good business podcast, the "Unchained" podcast from Laura Shin. That's a good one. 

OK, so another good one is the "Off the Chain" podcast. This is from Anthony Pompliano. I was just talking about zero knowledge proofs a moment ago. He did a great interview with the Zcash founder a couple of weeks ago. Yeah, I highly recommend that one. So the stuff Laura Shin is doing is more business related, and then Pomp is doing some technical, some business stuff. Yeah, those are both really, really good resources. 

MARK: Fantastic. All right. Well, unfortunately, we're starting to run out of time a little bit. But before we do that, is there anything that you want to mention, any events or content that you're pushing out that people should hear about, or know about, or keep an eye out for? 

ALLEN: Yeah, I published a blog post about three weeks ago that I was showing how you could use Ethereum, which is a smart [INAUDIBLE] platform, special type of one of these peer-to-peer networks, to start composing not only applications where we can read, and index, and process the data from the blockchain on cloud, but how to call out to cloud from the blockchain. 

So we were talking earlier about biomedical analyses and not having the kind of right architecture on chain to be able to do the computing as efficiently as a centralized cloud provider. But there is some way that you can do this if you can call to the cloud from the blockchain. So this has sort of become circular. So we can index data from the chain into Google Cloud, and then call Google Cloud from the chain to get data back. 

CARTER: Absolutely mind-blowing. Allen, all day, you've been blowing my mind with information. Thank you. 

ALLEN: Yeah, so I wrote an article about that recently about building these hybrid cloud blockchain applications that I think would be really interesting if people want to see what cutting-edge stuff is going on. 

MARK: Excellent. Well, Allen, thank you so much for joining us today. I definitely learned a lot, and now I'll maybe make slightly less jokes about blockchain. 

ALLEN: OK, great. Yeah, it was a pleasure. Thanks. You asked such great questions, so yeah, I had a good time, too. 

CARTER: Thank you so much, Allen. I learned so much. I really appreciate this. 

MARK: I now feel like I might actually vaguely know what blockchain vaguely is. Now Allen's a great teacher. Now I have a much better understanding. So I feel really good about that. 

CARTER: It blew my mind just the wide range of applications it's used for, not just money. 

MARK: Not just cryptocurrency. Yeah, exactly. Fantastic. All right, why don't we get stuck into our question of the week? 

CARTER: Dun dun dun, dun dun dun. Dun. 

MARK: OK, so what are the four types of virtual machines that exist on Google Cloud? I actually didn't realize there were that many. 

CARTER: So Google Cloud is trying to make things simple and efficient. So they came up with four different types of VMs for different types of applications. So it's easy to remember it if you think about the types of applications. So they have a general purpose one for most types of applications, and it's called general purpose VMs. Then they have memory optimized VMs for large database and memory databases. They have compute optimized for intensive gaming and scientific modeling. 

And then my last and favorite type are called preemptible VMs. And so these are really affordable. They're going to be like 80% of the cost. And they're just a flag that you can add to any of the other three types to say, I don't need these to run in real time, so you can preempt me at any time and run other applications, as long as this runs at some time. And so those are great for like batch rendering or simulations that don't need to be done in real time. 

MARK: So really, don't we kind of have six then? 

[POLITE LAUGHTER AND APPLAUSE] 

CARTER: Wait, wait, wait. 

MARK: Because we've got three of the same ones, and then they're each one of them can be preemptible, rather than four. 

CARTER: I mean, that is logical, yes. 

MARK: It depends on how-- look, it's just fine. It's fine. It's fine. 

CARTER: That was a trick question this week. I love it. 

MARK: Awesome. All right. Just thinking it through. It's fine. Cool, but no, that's great. Good to know that we have different types of machine types for different kinds of workloads. So thank you very much, Carter. 

CARTER: You're welcome. 

MARK: So actually, Carter, where are you going to be? What are you doing? What cool stuff are you doing? I know you're doing cool stuff. 

CARTER: Yeah. All right, so outside of work, something cool is I'm in the Comedy Festival, the Edinburgh Fringe Comedy Festival for a whole month. 

MARK: Whew. 

CARTER: And Google's letting me work from there for a month. It will be really cool. And workwise, I'm releasing a bunch of videos about VMs and GCEs, Cloud Security Command Center. So there's a lot of cool stuff coming out. Check out the GCP YouTube page. You can see a lot of it there. 

MARK: Awesome. Those videos sound great, but I think more importantly, so you're actually doing a show at the Edinburgh Fringe Festival? 

CARTER: I am. I'm doing a comedy show. I'm terrified because it's my first time doing the show at this scale on this level. 

MARK: Yeah. 

CARTER: Yeah. But it's a lot of fun. And again, I'm just happy I'm at a place like Google that allows me the flexibility to go out and try this-- 

MARK: That's fantastic. 

CARTER: --while still working. 

MARK: Awesome. 

CARTER: Yeah, it's really cool. 

MARK: That sounds fantastic. Well, I'm not doing anything nearly that exciting. I'm going to be at Tokyo Next. I will be talking at the [INAUDIBLE] Mini Conference inside of Tokyo Next, talking about Agones and game stuff. Then I'll be at the Open Source in Gaming Day just before the Open Source Summit down in San Diego. And I'll be at the Open Source Summit as well, talking about open source in games and Agones. 

And then I'll be at Pax Dev, speaking about now actually not Agones this time. I'm actually doing two separate panels. I'm doing one panel with a bunch of colleagues, talking about open source in games, and if that's something you might be interested in, and why you might want to do it, and that kind of stuff. And then I'm also doing another panel with some other colleagues, talking about dedicated game servers, why you might want to use them and [INAUDIBLE] they're in. And I'll also be hanging out at Pax West, too. 

CARTER: Oh, that's cool. I'm definitely going to have to pick your brain about open source in games. I didn't know that was a thing. 

MARK: I'm trying to make it a thing. I'm trying to work really hard. There's a lot of work that's happening inside open source in games, but I think there's a lot of work still to be done. 

CARTER: Mm. 

MARK: Fantastic. Well, Carter, thank you so much for joining me this week on the podcast. 

CARTER: Thank you for having me. It was a blast. 

MARK: Yeah, I look forward to having you as a regular host. And I'm sure we'll make this happen again at some point soon. 

CARTER: Oh, great. I will see you soon, Mark. 

MARK: Wonderful. Well, thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]