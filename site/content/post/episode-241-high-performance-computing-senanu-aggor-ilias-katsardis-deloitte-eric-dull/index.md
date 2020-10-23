+++
audioDuration = "00:40:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.241.mp3"
audioSize = 58510055
categories = ["High Performance Computing"]
date = "2020-10-21"
description = "Mark and Brian are together this week, hosting our guests Senanu Aggor and Ilias Katsardis as we discuss High Performance Computing with Google."
draft = false
episodeNumber = 241
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "HPC with Senanu Aggor and Ilias Katsardis + Deloitte Cyber Analytics with Eric Dull"
image="/post/episode-241-high-performance-computing-senanu-aggor-ilias-katsardis-deloitte-eric-dull/images/hero/hero-EP-241.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/jfgu7i/episode_241_hpc_with_senanu_aggor_and_ilias/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark](https://twitter.com/markmirch) and [Brian](https://twitter.com/briandorsey) are together this week, hosting our guests Senanu Aggor and Ilias Katsardis as we discuss High Performance Computing with Google. HPC uses powerful computers to solve problems that would otherwise be too large or take too long for standard machines. Innovation and advances in cloud technology have made this resource more accessible, more scalable, and more affordable.

Senanu lists some great use cases for HPC, including vehicle manufacturing and the medical field and describes how these markets benefit from the extra power HPC offers. Ilias talks tech and helps us understand the evolution of the Google HPC offering and the architecture most often used with HPC. He explains the benefits of HPC on the cloud over the old way, emphasizing the flexibility of choosing machines based on your code rather than forcing your code onto small machines. Storage of data is flexible, scalable, and secure as well. Diminishing VM to VM latency has been an important advancement in HPC, and Ilias describes how Google has decreased latency.

Google Cloud customers are using the HPC offering for all kinds of large computing jobs, and Senanu details some of these real world instances. From Covid vaccine research to disaster evacuation planning, HPC on the cloud is changing the way we process data. Later, Ilias tells our listeners how to get started with their HPC project.

##### Senanu Aggor

Senanu Aggor is the Product Marketing Manager for Google Cloud's High Performance Computing (HPC) solution.

##### Ilias Katsardis

Ilias Katsardis is the HPC Solution Lead for the Customer Engineering team (EMEA) at Google. In this role, Ilias brings over 14 years of experience in the cloud computing and high-performance computing industries to promote Google Cloud’s state-of-the-art infrastructure for complex HPC workloads. Previously, he worked as an applications analyst at Cray Inc., where he was a dedicated analyst to the European Centre for Medium-Range Weather Forecasts (ECMWF), and, prior to that, was an HPC application specialist at ClusterVision. Ilias also founded two startups Airwire Networks in 2006 and Performance Hive in 2017.

##### Cool things of the week

* What’s happening in BigQuery: Time unit partitioning, Table ACLs and more [blog](https://cloud.google.com/blog/products/data-analytics/speed-up-queries-organize-data-with-new-data-warehouse-features)
* BigQuery explained: Blog series [blog](https://cloud.google.com/blog/topics/developers-practitioners/bigquery-explained-blog-series)
* BigQuery Spotlight [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqLAbIdmcMwsxWg-w8Px34MS)
* Cloud Functions vs. Cloud Run [video](https://www.youtube.com/watch?v=zRjOSxTpC3A)

##### Interview

* High Performance Computing [site](https://cloud.google.com/solutions/hpc/)
* GCP Podcast Episode 237: NVIDIA with Bryan Catanzaro [podcasdt](https://www.gcppodcast.com/post/episode-237-nvidia-with-bryan-catanzaro/)
* GCP Podcast Episode 167: World Pi Day with Emma Haruka Iwao [podcast](https://www.gcppodcast.com/post/episode-167-world-pi-day-with-emma-haruka-iwao/)
* Compute Engine [site](https://cloud.google.com/compute)
* Compute Engine Machine Types [site](https://cloud.google.com/compute/docs/machine-types)
* Cloud Storage [site](https://cloud.google.com/storage/)
* Cloud Firestore [site](https://firebase.google.com/products/firestore)
* Google Cloud with Intel [site](https://cloud.google.com/intel)
* Cloud GPUs [site](https://cloud.google.com/gpu)
* Best practices for running tightly coupled HPC applications on Compute Engine [site](https://cloud.google.com/solutions/best-practices-for-using-mpi-on-compute-engine)
* Super Computing Event [site](https://sc20.supercomputing.org)

##### Stackchat at home

This week, [Max Saltonstall](https://twitter.com/maxsaltonstall) is talking cyber analytics with Eric Dull from [Deloitte](https://www2.deloitte.com/us/en.html).

{{< transcript "[MUSIC PLAYING] MARK: Hey there, and welcome to episode 241 of the weekly Google Cloud Platform Podcast. As always, I'm Mark, and today, we're here with Brian Dorsey. What's up, Brian?" >}} 

BRIAN: Hello, hello. Welcome. 

MARK: Always exciting to work with you. And of course, we have one heck of an episode scheduled. To get things started, Brian, can you tell us who's going to be joining us today? 

BRIAN: Yeah. So we have a conversation with Senanu and Ilias about HPC-- high performance computing-- and doing it in the clouds. 

MARK: Yeah, it's super interesting. And for our listeners who have stayed up to date, we had a cool conversation a little bit about this with NVIDIA, and I think that came up in our interview as well. It's such a cool idea, but I really liked the breakdown. Like, what is it? What are the actual pieces of it? What does it mean to be high performance computing or to do that kind of stuff? And then what are some cool examples? I really like this conversation. 

BRIAN: So that is all there. And then right after that, we have a mini episode in the episode of "Stack Chat from Home." 

MARK: So it's not one, but two interviews. And with our "Stack Chat at Home" episode, this time we've got our friend Max Saltonstall talking to Eric Dull from Deloitte about cyberanalytics and some of the cool stuff they built there. It's a pretty cool interview. I really liked some of the way that Eric talks about what the considerations that went into building a cyberanalytics system are, and then how they built it using one of our favorite tools, BigQuery. 

BRIAN: I have to admit, cyberanalytics sounds a little vague, so looking forward to getting at the meat of that. 

MARK: Very cool. Well, why don't we go ahead and move into our cool things of the week? 

[MUSIC PLAYING] 

BRIAN: So my pick for the week is BigQuery, BigQuery. In particular, in the notes, there's a really detailed blog post from Jenny Palomino about just a bunch of new stuff in BigQuery-- more time unit partitioning options, access control lists, more information schema, more control over slots and jobs. And there's a whole bunch of details there. If you're already using BigQuery, you're probably going to be excited about that. 

But I also wanted to mention it just as an excuse to talk about BigQuery again because I think BigQuery is one of those things where if you didn't know it existed, you would probably never go looking for it. 

My shorthand as I think about it is like an inverted database. Like in databases, you're always trying to stay on the indexes and avoid table scans, and BigQuery is all about table scans-- all it does. And it spreads them out across thousands of machines. You can do queries you just wouldn't expect otherwise. 

So if you're using BigQuery, check out that blog post. If you're not, there's a new series that's kind of trying to talk about BigQuery from the beginning, explain it all way through. And there's a link to that kind of navigation post in the show notes as well. 

MARK: Yeah, it's super cool, and we've done some videos on BigQuery as well in "BigQuery Spotlight" with our friends Alicia and Nick, so we'll make sure to put those links in the description. But it's like you said, BigQuery-- like, once you start using it, holy butts. It is so cool. And just to think about kind of the-- all the different things you can do there. But you just can't kind of get your head around it until you actually try it. 

BRIAN: So you know you see demos of people doing a regular expression on every row in tens of millions long data sets, or doing these kind of, like, needle in the haystack kind of queries where you're like, OK, give me the seven rows in all of our web logs that have this request ID in them. You know, things like that. 

MARK: And it takes, like, 30 seconds. Absolutely love BigQuery. And also, you know what, if you haven't gotten a chance to try it out for yourself, I'm sure some of these resources will definitely link to different ways to do it. But you could always just go to Qwiklabs. You know, I've done a couple of BigQuery things on there, so I don't remember the titles of any, but there's got to be a lot of options there to just play around with it. 

BRIAN: A bunch of interactive stuff there. And the other fun thing to do is kind of regularly ingested public data sets. So things like the Wikipedia logs and a bunch of weather data and taxi information-- a whole bunch of stuff that I'm not even keeping up on. But there's a bunch of these data sets about the world that you can just kind of go poke at. 

MARK: Yeah, it's just so awesome. So, I mean, for people who are interested, don't let anything stop you. Try it out, and like you said, those public data sets are pretty cool, too. 

Well, I wanted to make a call-out for my cool thing of the week and you know, just looking at the Google Cloud Platform YouTube channel, which is obviously something that myself and my team put a lot of content out there. And there's just so much cool content. 

I wanted to give a special call-out to this one about serverless-- you know, I was thinking of you, Brian, in our conversations. And then one of your favorite things is where do I run my compute stuff? It's a very popular topic. You know, obviously, it constantly changes, and there's no right answer, right? And so the same question comes down to OK, fine, I want to try something serverless. What do I use? Functions, App Engine, Cloud Run? 

And so, you know, our friends Grant and Martin took this on and had a cool, very detailed conversation about what these look like, actually deploy some code to them, and then kind of the considerations. So it's super cool. So check out this episode. It gives a pretty quick breakdown and it's a lot of fun. 

BRIAN: And my favorite-- the answer that I think is staying true is, it depends. 

MARK: It always depends. It's the most annoying answer to get, too. 

BRIAN: Yeah. Do I want A or B, and you're like, well, it depends. Here's a 35-page thesis on-- 

MARK: And it's just like, yeah, I get it. But at the same time, there's a good reason you might choose A over B or you might choose Cloud Run over Functions or computer-- like, all these different things do have tradeoffs. 

BRIAN: Good to see that laid out, and especially with code, so you can get a feel. Because they feel really different to use as well as kind of having overlapping but different technical constraints. So. 

MARK: Yeah, absolutely. All right, well, with all that out of the way, why don't we go ahead and jump into our conversation with Senanu and Ilias? 

[MUSIC PLAYING] 

Senanu and Ilias, thank you so much for joining us. To get things kicked off, can you tell us a little bit more about yourselves? 

SENANU: I'm Senanu Aggor. I lead product marketing for Google Cloud's high performance computing solution. Been in this role for close to two years now. 

ILIAS: Thank you for having us. My name is Ilias Katsardis. I'm the HPC solution lead based out of London, but with a global remit, and I'm also responsible to make sure that our customers have the perfect ecosystem. And basically, Google Cloud is their number one choice. 

BRIAN: Awesome. OK, so the topic here is HPC, like high performance computing. And my background in cloud is with the VMs and such, and it seems like doesn't everybody want high-performing computers? So what is HPC specifically? 

SENANU: High performance computing as a solution or as a practice is where we actually aggregate a lot of computing power to solve problems which are either too large for standard computers or would take too long. So if you think about it, it's more of the power and being able to have a lot more resources than you would ordinarily need. 

Previously, high performance computing was restricted to large research centers, either in government or academia, and for large organizations that could actually afford it for their research and development work, and to speed product innovation. 

The fixed nature of these resources, and research had to be modified frequently to suit the existing system or employees or those using the high performance computing resources, mainly researchers and engineers, had to wait for longer periods to either get their research through, because the machines were overused, or even sometimes for the institutions that held them, their resources sometimes ended up being underutilized, which isn't then really great. 

So when a cloud comes in, it makes HPC actually more flexible by offering resources that are elastic. Essentially, it can scale up and down [? also ?] when you need resources. And that is a great value proposition cloud gives HPC. 

MARK: Right, so it's more than just, like, having a virtual machine with a bunch of resources about it. We're talking about taking a whole bunch of virtual machines, essentially, and tying them all together to solve real big problems, right? Because I have this image in my head from probably the '70s or the '80s, where you have those server rooms-- just wall to wall computers. 

And that was-- you know, obviously the compute power has changed a lot in the past 40 years, but that is now possible, because you don't have to worry about the servers. You just get the power. 

So what are some good examples of things that actually take use of that? 

SENANU: So manufacturing is a big use case for high performance computing. If you think of aircraft manufacturing or retail, even road bike, there's a lot of aerodynamics involved. So using high performance computing to do the simulation or even the designing process is one big use case for high performance computing. 

For vehicle manufacturing, for example, if you think about the cost involved in actually building the vehicle and actually testing it for safety features, a lot of these could be simulated in real time and using high performance computing. And then a big use case for it is in health care, especially life sciences, where high performance computing is used to sequence genomes and to find either a cure for diseases or just to prevent diseases altogether. 

So we've seen a lot of high performance computing be used to solve medical problems these days. And interestingly, high performance computers also use a lot of animation. Most likely, your last animation you watched had some high performance computing involved to render the output of the movie. So that is another big industry. 

And of course, there's also financial services, which uses a lot of computers for risk analysis, and a lot of these solutions or these problems have to be solved in real time. So financial services, also a big, big user of high performance computing. Yeah, so those are some of them. They are not limited, but those are some of the big enterprise use cases for high performance computing. 

MARK: So basically, everything. 

[LAUGHTER] 

Right? But really, it's more focused on things that need a lot of power. And we had a cool chat with NVIDIA a couple of episodes back about what they were doing with their new A100s and what was available there. But we also, of course, had one of our friends, Emma, who was on the podcast probably I think last year. 

Yeah, because it was in the spring of 2019 when Emma broke the world record for the most number of digits of pi calculated. And she did that by basically taking Google Cloud's high performance computing offerings and kind of just letting them crunch numbers for a very, very long time. 

BRIAN: OK. So it's used everywhere. What does the technology actually look like? Because this is a tech podcast. Like, what software are people using? How does it go together? What does the architecture look like? That sort of thing. 

ILIAS: Actually, you might want to go a little bit on past, for example, to figure that out. You know, HPC is a very unique community, partly from very smart people which are dedicated to solving some of the world's greatest problems. That's an understatement, right? 

So originally, they started from having very bespoke solutions in the early days, right, like their own should be used, their own hardware-- everything was custom-made. However, that right now is moving more and more towards the more generic infrastructure that basically allows them to utilize economies of scale. 

For example, you know, their CPUs now, that building block is [? apart ?] from many standardized compute resources, right? They don't make their own stuff anymore. They don't make hardware in terms of motherboards, et cetera. So they're basically trying to take advantage of the latest developments in the software area, and then trying to utilize those to bring the generally available hardware closer to their needs, right? So something like tailoring out of that hardware. 

In terms of programming languages, you will see that it's not uncommon, basically, to have a Fortran code that is having a little bit of C, C++ in there and then another module that is using Python altogether, and all of them will co-exist in the same side, basically, right? 

In terms of what they're using now, cloud, so that is a little bit the software. And then you have to think about, OK, but what are the building blocks in terms of hardware that are putting all of those together, right? And this is where the idea of basically splitting your infrastructure into compute, network, and storage, which so many people are familiar with, right, that is also the same thing in high performance computing. 

Of course, in HPC, the element there is that they care a lot more about the performance of those units, right, and that is the majority of their specialization as well. You have compute, which in Google Cloud, you know, it can take the shape of a memory-optimized machine. 

For example, we have the M2 in Google Cloud where basically, it's based on Cascade Lake. You can have more than 400 vCPUs and, believe it or not, 12 terabytes of RAM. And then you can actually go on something more compute-optimized, like the C2 infrastructure we have. Those are fixed sizes-- basically 4, 8, 16, 32, and 60 vCPUs with 8 gigabytes per core ratio, and the whopping 3.8 [INAUDIBLE] core turbo clock speed, that is based on Cascade Lake as well. 

And especially for this machine, we have actually done some studies, and we have found out that you can actually expect a 40% performance benefit versus the previous generation, the N1. And not only that, but you also have something like around 1% runtime variability, which is really, really low. 

And it's what makes these machines stand out, specifically due to all of the innovations we and Intel jointly have done, like exposing the proper venue architecture or enabling [INAUDIBLE] states and various things like that, right? 

Then, of course, you have the thing where I believe that Google is actually the biggest innovator in the cloud space, which is the customizable machines. So in that, we have the N1. Now we also have the N2 and N2D, which are based on Intel and AMD chips alike, which basically take this older idea of you have your algorithm and then you bought a bunch of machines, so now you have to squeeze the algorithm to actually fit the machines. 

That kicks the idea on its head, and basically now, here is your algorithm. You create it as its best, and then you fix the machine to match that algorithm, right? And it's basically that, where you can actually select as many vCPUs you think you need or you actually need, and then the RAM that goes along with it. And then you make sure that you are using exactly what you need. You're not paying for more than what you need. 

And a prime example of this use case is a memory-bound algorithm. So if your application is more than 80%, for example, let's say memory-bound, right, and you can achieve that by using 20 vCPUs, going to 48 will double up the resources in terms of vCPUs. It will nearly almost scale the cost of the solution, but all your performance is not going to improve that much, because 80% was memory. So you didn't add more memory, for example, right? 

So that's what really sets us apart. Of course, we don't have only CPUs, right? You mentioned it earlier as well-- we have recently announced the A2 VMs, which, you know, believe it or not, they are [? apart ?] up to 16 A100 GPUs, and they can offer up to a 20 times improvement versus the previous architecture of the V100. It is mindblowing, actually. 

And then we do have preemptable machines, where those can be up to 80% cheaper than a normal VM, and basically they are use capacity. We have to make sure that we have enough capacity for Black Friday, Cyber Monday, but then what happens in lazy Tuesday for example, right? So somebody can actually use these machines and take advantage of them. So of course, the only consideration you have is that if somebody is willing to pay full price on them, then it's not your preemptable anymore, it's somebody's else on demand node for example, right? 

BRIAN: OK, awesome. So it seems like the theme there is flexibility and getting the raw compute you need in exactly the shape you need when you need it. OK. But compute alone doesn't get jobs done. Like, you need to store state somewhere. So what are the high performance options, as far as storage goes? 

ILIAS: Yeah, absolutely. Not just doesn't get the job done, but even if it does, you will know because you didn't save the output, right? 

[LAUGHTER] 

It really means that you have to pay attention to that element as well. And it's something that, you know, you can see storage at a completely different lens from cloud, and especially in Google Cloud, because suddenly, you don't have these blocks, the disks, that you put somewhere and that's your storage, right? 

So in Google Cloud, you can actually take anything from in-memory database storage systems to block storage to object storage, and you can actually use exactly as much as you need for each particular application. So everything can be quite uniquely matched to the best technology idea there, right? 

We have Google Cloud Storage, which is our exabyte scale objects storage, and you know, you pretty much-- it scales automatically. You don't have to worry about it. You just use it as you want, right? 

And then we have our persistent disks, which is basically the backbone of our high performance replicated block storage. It's encrypted both in transit and at rest, and it's basically your default option, right? Then, of course, we have local storage for the workloads that are a little bit more performance sensitive. We give you the option to have an NVMe attached there for scratch and basically fast access, and those are actually physically attached to the node via a PCI interface. 

Then we move onto a little bit more managed solutions as well, like Filestore, which is highly available and durable [INAUDIBLE] compliant, shares storage across tens of thousands of nodes that you have. And then we also partner with many people like NetApp, DDN, Intel DAOS, to actually have bespoke applications and solutions in Google Cloud. 

BRIAN: So basically, we have kind of a best in class version of all the different kinds of storage options? 

ILIAS: I think you can say that, yes. 

ILIAS: The last thing you mentioned was networking and infrastructure. 

ILIAS: Correct. It kind goes with the job that you actually need to scale out as we mentioned, right? So one node is never enough in high performance computing. You usually need that node heavily interconnected with other nodes so they can jointly solve a much, much bigger problem that as Senanu said, it wouldn't have been possible by just one node, right? 

So in Google in general, we are very familiar with that idea, basically because of our data centers. And we have laid hundreds of thousands of miles of fiber optic cables across the world, right? I think it's estimated a few years ago that 40% of world internet traffic goes actually through a Google Data Center or our network. 

But for HPC, is specifically important the VM to VM latency and network bandwidth, right? So for that, we have 32 gigaBPS now. It used to be 16 gigaBPS. Last year we have doubled that, and for our GPU instances, we actually have 100 gigaBPS, which is basically much needed since the GPUs are so much more denser computing units, right? So they need to basically munch a lot more data. 

And then for our compute-optimized VMs, we actually have what we call compact placement policy, which is basically allowing us to take up to 22 compute nodes and put them in the same physical rack, let's say-- it's our logical unit-- and then that significantly reduces VM to VM latency. 

If you pair that solution along with our newly published MPI cookbook, you could expect lower than 8 microsecond latency ping-pong VM to VM, which is quite surprising for a lot of people to be achieved over Ethernet for example, right? And then we are also working with vendors in the space, like Intel, for example, which we have a great cooperation. 

And recently, we have released basically the newer version of Intel MPI, and that offers up to 21% faster or reduce and MPI collectives between those two versions, right? So it's quite important to actually facilitate the whole ecosystem and not be alone in this. 

MARK: So, I mean, that's obviously a great deep dive on the technology side of things. But I think largely, like you said, it's compute, it's storage, and networking. The networking is fast, which is great, because that's a good thing, right? I think everyone can agree. And then we've got the compute and storage, which have a lot of flexibility. 

And even the networking has some flexibility. I really like that-- I never heard of the compact placement policy, because that's really, really cool, because I mean, some of these workloads are going to be so intense that they really, really need to be so close to each other. And that in cloud, typically, you don't get to think about that, so I love to hear about that. 

But a couple of times, you talked about GPUs. So I'm interested to hear-- I mean, obviously, we're talking about HPC, right? So what role do GPUs play in this whole thing? 

ILIAS: Ever since their conception, there are HPCs trying to take advantage of GPUs. As much as with any kind of new technology, really, right, these guys are trying to get the best out of anything that is available. I think they have done a really good job on the GPU front, and the different companies that manufacture them and the [INAUDIBLE] have really supported that ecosystem quite good as well. 

In its inception, you can think of the GPU as being a little bit more specialized piece of hardware that offers you higher FLOPS per device. But also, there is a higher price to pay as well, right? So high compute power and increased cost make it a little bit imperative to keep the utilization as high as possible. 

And if your workloads speed up significantly, this is a much bigger challenge, right? You know, you run your workload so much faster. It's done. How do you keep that device working on something without just repeating the same run? 

And that is actually what we have seen that makes cloud a fantastic solution for this kind of scenario, because you can just use it for as long as you need and then it's done. It's not your problem. You don't care about it, you stop using it, your solution is done, comes next day or next problem. 

MARK: So it's basically just another piece of the puzzle that you can use. And I think the real key here is just all of that flexibility, right? Being able to run a batch job that you run once a night or even once a month, right? You can spin up these resources, use them, and then shut them down, and you can burst huge amounts of computing power in a short period of time. 

ILIAS: Or, as you will see some of our customers doing, really speeding up even hundreds of thousands of these computer units, for example, to finish something really, really fast and then done. They don't need to care about it for the next year, right? You see these in prototypes, in research, especially now with COVID, right, where you have that instant demand for extra compute capacity, extra resources where you really need to use anything that is available for you for getting through the research. 

BRIAN: This is a great segue into, like, what are people actually doing with this? Can you give us some concrete, specific examples? 

SENANU: Yeah, Brian. I will take Google Cloud's customer [INAUDIBLE] as an example. So [INAUDIBLE] is a customer that specializes in accelerating [INAUDIBLE] discovery with this advanced computational platform. So the platform essentially reduces the time and expense of getting a [INAUDIBLE] particular candidate to trigger this [INAUDIBLE]. And during COVID, we're [INAUDIBLE] now with other health and life sciences companies to actually figure out a solution for a drug therapy for COVID faster. 

So if you think about the drug discovery process, it tends to run in [INAUDIBLE] and teams often need huge amounts of computing power for just a few days each month. So rather than build more capacity to address the current challenges, what [INAUDIBLE] has done is migrate the computational platform to Google Cloud. 

And the result is they have a lot more computational power now than ever before, I think of thousands of GPUs and hundreds of thousands of CPUs, which is essentially enabling and expediting the drug discovery work they're doing in partnership with other life sciences companies. 

So the end result is most likely, they're going to find an effective small molecule drug therapy for COVID-19 faster than they could have if they were doing it purely on premise. So that is one great example of how cloud is helping to drive and solve HPC problems much faster than ever before. 

Another good example, especially as we think of cores, is Clemson University. So a team at Clemson University showed how HPC [INAUDIBLE] helped plan evacuation routes during disasters by processing large amounts of traffic data efficiently and actually on demand. And you think of many of the things that have happened this year. 

Essentially, stationary cameras are already in place along most highways, and they send updated information to data centers, but it's a lot of information. If you think of the number of cars in different weather scenarios going on a particular date, it actually requires a lot of high capacity computing resources to actually process this data. And that is what the Clemson team did. 

In doing so, they set a record for the scale of computation on a single problem in a public cloud by using 2.1 million cores. Like, that's-- and lots and lots of computers that would ordinarily not have been available on premise. And-- but to many of the points we discussed earlier, the team at Clemson effectively learned that using a cloud-based solution with Google Cloud, they could actually launch a shutdown of required computational resources in just a few hours, and that it could efficiently process this data at a lower cost than many on premise HP systems could be. 

And if you think of a larger scale, that problem they're solving in terms of real-time evacuation management, this is an absolute great use case of how cloud and its ability to scale up and then out and very quickly helps to solve real-life problems. 

MARK: Yeah, and I think that's really the biggest importance is like, we probably have more data than ever-- I feel comfortable saying that-- and next year, we're going to have even more data than that, which is kind of how data works. But with all of this data, there are so many things that can be done, but the real need there is like, OK, we've got people, we've got ideas, now we just need to figure out how to actually crunch those numbers. 

So obviously, for our listeners, you know, hopefully you have some great ideas about how HPC can actually help you unlock these things. And you've got the new bar now, so it's 2.1 million cores. So if you want to beat that, that's the number to beat, which I imagine is not a cheap number to beat. But definitely a lot of cores. I mean, just [IMITATING EXPLOSION NOISE], right? 

But you know, we've talked about all the different flexible pieces, right? How does someone actually say, OK, I've got this idea. I want to get started with it. What does that look like on Google? 

ILIAS: By the way, Mark, just bidding it doesn't count. You have to actually have a genuine use case-- 

MARK: Oh. 

ILIAS: --that really makes it worthwhile, right? Because as you can see in Google Cloud, it's so easy to grab resources and actually run something that this is not you solving the problem. The problem you have to solve, basically, is make something good out of it, right? Because you can get matrix multiplying, for example, these nodes. That doesn't count, right? Just wanted to make sure we're clear. 

MARK: Fair enough. So there goes my plan to spin up 2.2 million cores just to do some math homework. Yeah, doesn't quite count, I guess. 

ILIAS: Yeah, especially if you think that you can spin it up for a minute or two, so it wouldn't cost you that much, either, right? So that's not the way that you will get the record, no. 

BRIAN: OK. So if that's not the way to do it, how do teams get started here? 

ILIAS: That's a great question, actually, because the sheer amount of compute resources calls out for a really good way to control all of those and make sure that they are actually doing something, right, and not just hanging around idling. So the solution really starts from on prem, where all these guys that couldn't actually use cloud and have that part of the problem taken care of. So that's where the idea comes that you have basically a controller node or a few controller nodes and high availability, right? 

And then you have your log-in nodes, where it's basically the nodes that the users will interact. Access maybe SSH or-- through a VDI interface. That's the nodes that they will work with. 

And then they will submit their workloads for the compute resources where then an automated system is going to take care of that quality of services, everything, prioritize it, make sure that it corresponds to the business needs as well, and then run the workload on the compute node. And there can be, like, 10 work nodes. There can be 100 compute nodes, for example. It depends on what kind of variables that you will set out for the problem. 

And of course, those are basically being created from the [INAUDIBLE] blocks that we discussed earlier, which is compute, network, and storage, right? And all of those in cloud, that's where that unique differentiator comes. Every job used to be basically different, but all of those other components used to be the same. So if you just wanted some with a very different job, you will only have to basically use less cores, for example, or less nodes in this case, right? 

Actually, in Google Cloud, you can submit a different job that is using a different node, a different core, a different vendor, different storage. Everything can be finely tuned and optimized for your specific workload at that given second. 

BRIAN: Wow. OK, that sounds awesome. And then earlier, you mentioned, like, MPI. So presumably, there's connections between various libraries that are commonly used in the HPC space? 

ILIAS: You know, it's one of these cases that Message Passing Interface is still as good as it was or even better. So you do have other basically use cases that might be more embarrassing to parallel let's say, where they're a lot less loose coupled, you would say, right? 

So you just submit a job. You can say you take 10 work units, you take the other 10, and you can go on for 1,000 nodes and all of them that will match the data, do compute, and then give you back their portion of the result. When it comes to actually solving a bigger problem that all of those nodes have to actually cooperate, MPI is still, I would say, the golden standard of what people are using. That doesn't mean that there are not other options out there, but MPI is the most frequent one that we find. 

MARK: Yeah. I think that's actually a really important point you just made, too, because it's easy to think that you can just throw a bunch of resources at a problem and that'll make it faster, but it really has to be a task that can be made parallel because otherwise, you could throw 2.1 million cores at it, and it's not going to solve it any faster unless you can actually split up the work that needs to be done, right? 

ILIAS: Absolutely. And in some cases, you know, what you will do on the next step is heavily dependent on the previous number that you have. So for example, this is a good case where you can think about the weather forecasting, right? You take the whole globe, you will split it down into hexagons or whatever your dimensions and scaling you want it to be. 

But if you're really doing a worldwide weather forecasting, for example, if you just compute the weather in Paris, in that border, you will have to do the [? Hallock ?] change to basically pass that information that you just computed. So the node that is responsible for the computing of the weather in London actually knows how the weather is on the boundary conditions, for example, right? 

And of course, you know, if we just did one node for London and one node for Paris, it might be easier a little bit on London because, you know, chances are it's raining, but the results might not be accurate for Paris in that case. So you need a lot more. 

BRIAN: Awesome. That makes it really concrete and easy to think about. This has been a great conversation. Is there anything we missed or that you'd like to mention for people to take a look at as we wrap up? 

SENANU: I'll just say we have a lot of information on our HPC website. This is cloud.google.com/hpc. We have some more case studies there. We have blogs, we have documentations and solutions so you could get started. We actually publish our research best practices on how to [INAUDIBLE] Google Cloud resources for optimal MPI performance. So that is one thing that could be very interesting. 

And of course, we have Supercomputing, which is a big HPC conference coming up in mid-November, so Google Cloud will be there. We have [INAUDIBLE] so look out for us there, and we'll have some exciting announcements as well. So. 

MARK: I love just saying "exciting announcements," because you never know what that's going to be. 

SENANU: Right. 

MARK: We'll make sure to put some links in the show notes. 

ILIAS: And of course, there are many things that we cannot say in a public forum. So I think that they are interesting things that we can share with you. Please reach out under NDA. We will be more than happy to mention those. 

BRIAN: Ooh! 

MARK: That's the secret sauce right there. It's spicy. 

BRIAN: Intriguing. OK. So with that, thank you both very much for all the time. It's been super interesting. Really appreciate it. 

SENANU: Yeah, it was quite good talking to you, Brian. And thanks, Mark. 

ILIAS: Thank you very much, guys, for having us. 

MARK: So once again, thank you so much to Senanu and Ilias for coming in. I learned so much about high performance computing. And I feel like you could tell exactly how much of a novice I was beforehand, because I literally had typed in "high powered computing." 

[INTERPOSING VOICES] 

MARK: Just didn't come to me that quick. 

BRIAN: It still works, right? It's the same three letters. 

MARK: And I'm sure all of that high performance computing does draw a lot of power. So I feel validated by being technically right. 

BRIAN: Technically correct is the best kind of correct. 

MARK: As we know. All right, well, I also want to make sure that we jump into our second conversation, so why don't we turn it over to Max? 

[MUSIC PLAYING] 

MAX: Welcome to "Stack Chat at Home." My name is Max Saltonstall, and I'm here with Eric Dull, the cyberanalytics and AI lead at Deloitte. Thanks for joining me, Eric. 

ERIC: Thanks, Max. 

MAX: So you have made a lot of really interesting data-driven models to understand cybersecurity risks, threats. What makes this hard when you integrate with machine learning and AI? 

ERIC: The only problem it's a really complex space. You can't write an equation because there are too many interdependent behaviors happening at the same time. And so we then want to apply machine learning, which traditionally, you start with a big pile of examples of things that you want to teach the computer to do, and then you put it in your favorite algorithm. 

MAX: Perceptron all the way. 

ERIC: And then you end up with this beautiful model, and the model gives you an answer, and you just let it run and you catch the bad guys and all of those good things. Well, it's not that simple, because labeled training data that is applicable to practical cybersecurity problems tends to be really, really rare. 

MAX: And then just the things you're trying to detect are rare, too. It's not like tree or cat. 

ERIC: Exactly. 

MAX: It's 99.9% normal stuff, and then that 0.1% or 0.01% is some wacky new thing, and it's maybe something that you've never even seen before. 

ERIC: Correct. And so this is actually where we start our successful applications of practical machine learning. And then we started what we call the unsupervised machine learning space, which is a fancy way of saying choose a couple of those dimensions of complexity. You start with an expression of that feature space. You generally are able to do that in SQL or in Looker, and you put it in front of a human being analyst, and they start to get excited. 

MAX: Cool. And now you're pulling data from a lot of different places as well. So can you talk to me a little bit about the inputs into this whole automated analytics system? 

ERIC: Yep. And it-- data is the lifeblood. We operate on two fundamental types of data. We have client-sourced data, which tends to come from high performance network sensors or the client's servers or other sources that give us really good visibility of what's happening inside their network. 

And then we have Deloitte commercial and proprietary data sources that come from outside of the network. These include commercial relationships we have that can help us with DNS data, IP registrations, as well as threat intelligence, things like that. We're looking at billions of events a day coming off of the high speed network sensors in our client's network, and then that scales as you have more clients. 

And so you get this really big streaming ingestion lay-down problem, which is a computationally interesting problem, right? And so there's a little bit of a data engineering exercise to do there to get them in the same namespace. But at the end of the day-- or at the end of every five minutes-- we ingest them into BigQuery, and then run our standing analytics on them. 

MAX: Yeah. And then just taking me through the life of, like, one of those bits of data, what happens next to get to, eventually, some analyst says, hey, I've got a problem? 

ERIC: Yep. We then merge and evaluate those outputs using another set of analytic workflows, and then we present those curated results in Looker or in Data Studio and email the analysts and say, hey, your stuff's ready. That tends to run early in the morning. 

We've got a geographically distributed team here in the US, coast to coast, and then they come in, they get their cup of coffee, and they've already worked out who's triaging what. And then they get on a chat channel and start turning those dashboards into events that they either call the clients' incident response teams about, or we insert trouble tickets directly into the ticketing system on the client side for follow up and remediation. 

MAX: So you had a lot of different possible ways to build this whole system. You could have built it on prem, you could have built it in your client's existing infrastructure, you could've built it on any number of public clouds. What motivated choosing Google Cloud to run this infrastructure? 

ERIC: I'm heavily motivated right now to do something that's maximally efficient. Deloitte builds and maintains analytics systems for our clients and ourselves, and we want a system that's stable, high performant, and highly efficient . And we've found that Google's Platform as a Service approach gives us a number of wins here. 

Technically, we're seeing incredible scale out of the Platforms as a Service. We pushed the network sensor data in one of our BigQuery instances to 600 billion records. We saw no scaling impact of that other than the query took a little longer, because we didn't put lots of threats against it, right? And that is-- as a technical leader, that's my first consideration. 

The second consideration I then have is, can I keep that data secure? And Google has 17 Platforms as a Service, including BigQuery and Looker, that have FedRAMP high inheritable controls-- the highest cloud security standard the government has right now. 

But the most exciting thing to me is that we were able to stand up BigQuery and scale it to that 600 billion and test it in under two weeks with two people. And that's really fast. 

MAX: So Eric, I want to give you a time traveling email so you can send yourself a message that you'll get two years ago, and you can give yourself some advice. What do you wish you knew before you had taken this journey? It's got to be work related. 

ERIC: You need technology, or the stuff. You need the people, or the who. And then you need the practice, or the how. And when I look at some cyber organizations or some analytic organizations, you tend to start by saying, well, we're going to get some tech, I'm going to go do some stuff, and then we'll figure out what we're doing in the middle. 

And that can work, but again, it's hard to keep the institutional momentum. I think that the most important thing is the practice of doing it. The technology, we can make any of it work, right? And the people are the foundation, and then what you have that team doing makes them a team, and grows their skills and grows your ability to do analytics and data science over and over again. 

And so I would have reminded myself two years ago that whatever practice I was doing, those are the investments you're making for right now. We started on this cyberanalytics journey as Deloitte six and a half years ago, and we've done some amazing things. And we've stubbed our toes, and we've learned a lot. And we delivered a lot of very valuable information to our clients. 

But the thing I wish I would've told myself two years ago is focus on solving that core, only one pipeline problem. What decisions do we need to make? What investments do we need to make in our people and how our people work and how our people do big data, so that we're not changing paradigms or changing platforms more than we have to? 

MAX: Thank you very much for this fantastic conversation. I really appreciate you sharing what you've got and joining me here today. 

ERIC: Thanks, Max. It's been a pleasure, and I really appreciate the opportunity to share this with you and all your listeners. 

MARK: Yeah, thanks so much, Max and Eric. I always love hearing these stories, because they cover these really cool use cases and I really like to see how the Google Cloud partners actually implement some of that. So super cool to see, and I love kind of the breakdown of how you go from, OK, here's all this data we have. How do we actually build something around it? 

BRIAN: And I think that wraps up our episode today as well. So thank you all for listening. Stay safe out there, everyone, and take care. 

[MUSIC PLAYING]