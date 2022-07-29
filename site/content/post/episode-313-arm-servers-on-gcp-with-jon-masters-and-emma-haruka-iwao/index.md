+++
audioDuration = "00:35:38"
audioFile = "Google.Cloud.Platform.Podcast.Episode.313.mp3"
audioSize = 51325746
categories = ["Chip", "Server", "GKE", "Compute Engine"]
date = "2022-07-27"
description = "Nowadays, Arm-based chips dominate the mobile market and this volume has allowed them to build both advanced chips for supercomputers and beneficial partnerships."
draft = false
episodeNumber = 313
hosts = ["Stephanie Wong", "Brian Dorsey"]
title = "Arm Servers on GCP with Jon Masters and Emma Haruka Iwao"
image="/post/episode-313-arm-servers-on-gcp-with-jon-masters-and-emma-haruka-iwao/images/hero/hero-EP-313.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/w9k911/episode_313_arm_servers_on_gcp_with_jon_masters/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

We're learning all about Arm servers on Google Cloud Platform this week. Hosts [Brian Dorsey](https://twitter.com/briandorsey) and [Stephanie Wong](https://twitter.com/stephr_wong) welcome fellow Googlers [Jon Masters](https://twitter.com/jonmasters) and [Emma Haruka Iwao](https://twitter.com/Yuryu) to talk about the newest VMs on GCP.

To start, our guests dive in to Arm, explaining what it is and how it's grown over the years. Nowadays, Arm-based chips dominate the mobile market and this volume has allowed them to build both advanced chips for supercomputers and beneficial partnerships. Emma explains how having the Arm architecture available in the cloud helps keep projects efficient and walks us through example setups of an Arm projects, illustrating the ease of setup in Google Cloud. Jon and Emma talk about the T2A VMs running Arm workloads at Google, including their balance of performance and cost. 

Emma and Jon bust some myths about Arm, emphasizing how performant it is despite its humble beginnings. 
 
##### Jon Masters

[Jon Masters](https://twitter.com/jonmasters) is a compute architect focused on Arm server architecture, platform standards, and ecosystem with almost a dozen years of experience working on Arm.

##### Emma Haruka Iwao

[Emma Haruka Iwao](https://twitter.com/Yuryu) is a DevRel engineer focused on Compute products and a computer architecture enthusiast.

##### Cool things of the week

* Introducing Batch, a new managed service for scheduling batch jobs at any scale [blog](https://cloud.google.com/blog/products/compute/new-batch-service-processes-batch-jobs-on-google-cloud)
     * Examples of Batch for Transcoding [site](https://github.com/GoogleCloudPlatform/batch-samples/tree/main/transcoding)
* Using Google Kubernetes Engine’s GPU sharing to search for neutrinos [blog](https://cloud.google.com/blog/products/containers-kubernetes/gke-gpu-sharing-helps-scientists-quest-for-neutrinos)
 
##### Interview

* Arm [site](https://www.arm.com)
* Arm Documentation [docs](https://developer.arm.com/documentation)
* Arm VMs on Computer [docs](https://cloud.google.com/compute/docs/instances/arm-on-compute)
* Expanding the Tau VM family with Arm-based processors [blog](https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip)
* Run your Arm workloads on Google Kubernetes Engine with Tau T2A VMs [blog](https://cloud.google.com/blog/products/containers-kubernetes/gke-supports-new-arm-based-tau-t2a-vms)
* Compute Engine [site](https://cloud.google.com/compute)
* GKE [site](https://cloud.google.com/kubernetes-engine)

##### What's something cool you're working on?

Brian is switching his focus from VMs to developer tooling.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 313 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and today I'm here with Bryan. What's up?" >}}

BRYAN: Hello, hello, I'm excited to be here. 

STEPHANIE: I know. I mean, you're the perfect person for this episode, because it's about Compute-- 

BRYAN: Yay. 

STEPHANIE: --a new VM type on our Compute Engine family of Tau VMs. So that's our topic for today. It's ARM servers coming to GCP in preview. It's called Tau T2A. It runs on ARM, and we also know that GKE also supports this new ARM based Tau T2A VM. And you get all the usual things, like multi-architecture clusters, usual GCE features, like scaling, spot pricing, and more. So we're going to dive into more of that with our interview. 

BRYAN: Fantastic, so this episode is like ARM, ARM, ARM all the time and kind of a joke. I hope you find it funny, but there's both the description of the episode. And there's an inside joke in the middle of the interview, so stay tuned for that. 

STEPHANIE: Yes, more ARM, ARM, ARM, triple ARM. You're going to find out why we're saying that in just a sec. But first, let's go ahead and just cover the cool things of the week. 

[MUSIC PLAYING] 

BRYAN: So I wanted to talk about the new batch process, which is one of these names, like a classic Google Cloud thing, where it's just, like, the description of the thing. It's just batch. Like, I think the first question about this like, what is it? How is this different than the job's API or something like that? 

And batch manages a job queue, but it also provisions and auto skills the resources, runs the jobs, makes sure they actually complete deals with common errors, all of that kind of automatically. So it's kind of a full execution environment in addition to the job queue. What it's actually doing is it's starting a VM and then running some of your code on there. 

So the VM could be shaped however you like. It can have GPUs. You can use spot instances, all that cool stuff, and the code, you can deliver either as a bash script or a URL to a container image of some kind, which that means you can run pretty much arbitrary binaries, which is great. And then it also will kind of set up either NFS shares or the access to Cloud storage. So usually, when you're doing a batch process, you've got to read something and save something. 

You've got some state that you care about, so you can do that there as well. And we'll put in the link-- there's a really nice example actually also written by Emma, who's one of our guests today, about doing transcoding using the batch API, which I think is a kind of a core, common use case. Or it shows it off really well. So I think that's my cool thing of the week. 

STEPHANIE: Yeah, very cool. I mean, it's really interesting to see these more robust options for batch workloads running on their own compute engine VMs to do things, like even machine learning inference batch that you have to do using GPUs. So it's an exciting direction to go, even if the name is just very literal here. 

BRYAN: Exactly, higher level APIs. I'm sure people out there listening have written things like this or subsets of this, but it's really nice to have it ready to go. So you can just focus on the part that is specific to your program. 

STEPHANIE: Exactly, yeah. So my cool thing of the week, I think, is very cool, because it is a guest post on our blog from the San Diego Supercomputer Center. Yes, you heard that right. There is a Supercomputer Center in San Diego. It's for the Ice Cube Neutrino Observatory, and you also heard that right, Ice Cube. 

It's a detector at the South Pole designed to search for nearly massless subatomic particles called neutrinos, which provide information to probe events, like exploding stars and black holes. And they are using GPUs to run their photo propagation code, which I'm not going to pretend to know exactly what that is, and it uses compute resources from all over the world. And now, they're running GKE plus horizontal node auto scaling to save on costs. And in this post, they run through some of the performances that they are able to measure, like jobs per day. They talk about their lessons learned, like whether using GPUs and manage instance groups was worthwhile, as well as GKE using shared GPUs. So very cool story. 

BRYAN: That's awesome, so we go in one project from the South Pole underwater space global compute stuff. Wow, cool, that is definitely cool. 

STEPHANIE: Yeah, bringing together supercomputers, ice cubes, and black holes, I love it. It sounds like a tale, but it's true. Yeah, so more cool things on the way here. We are about to jump into our interview with Emma and Jon about our T2 AVMs, which is ARM servers on Compute Engine. 

[MUSIC PLAYING] 

Jon and Emma, thank you so much for joining the podcast. And, Emma, we get to have you on, again, so soon. So why don't we hear some intros about what you both do here at Google? 

JON: Hi, everyone. My name is Jon Masters. I'm still somewhat of a Noogler. I joined Google last September, and I work in our technical infrastructure organization. So that's the part of Google that builds the physical servers that power all of our products and technologies, both internal. So Google search, for example, and also, external, so Google Cloud as an example there. What I do inside my little piece of TI is I'm one of the many people involved in our server program, which you've heard about in the last few weeks. 

EMMA: My name is Emma. I'm a developer advocate on compute products. So it's about architecture, CPUs, network storage, and everything involved within compute infrastructure products like Compute Engine and storage products. I also use Compute Engine products for different purposes. So that's why I'm here today to talk about computers and programs. 

BRYAN: Awesome. We are super lucky to have you both here with the recent announce of ARM CPUs on Compute Engine virtual machines. And ARM is everywhere in the news lately, it feels like. I feel like we've reached some inflection point recently. But just as a quick recap, what is ARM? And there's some question of how it's actually spelled. 

JON: Shall I start, Emma? Maybe I'll start that one. 

EMMA: Yeah, I think you're the best person to talk about it. 

JON: I'm chuckling because prior to Google, I've been in the ARM server ecosystem for, what is it now, about a dozen years. And there's a running joke that if you see me turn up at a company, they're probably going to do something with ARM servers very soon after. 

[LAUGHTER] 

So there was a lot of speculation from friends of mine. When are they going to do-- oh, there they are. 

[LAUGHTER] 

Good. You haven't changed. So ARM actually has a very interesting story going back more than 30 years now. Originally, there was a-- if I sound British, it's because I am originally from the UK. ARM actually came out of a British company called Acorn, which was a small company that made computers for schools and elsewhere. 

So people of a certain generation like myself grew up in British schools with the BBC microcomputer named after the TV company. And it was a little computer attached to a screen in your school classroom. That was not ARM-based. It was based on something else, 6502, actually. But it was the ancestor of the genesis of the company that would go on to create ARM. 

And a bunch of people inside Acorn read about RISC technology, Reduced Instruction Set Computing, which was coming out of the US, Berkeley at that time. And they said, this is very interesting. So they went and researched it and thought, we might be able to build a RISC chip in the UK. And they did, the ARM1. 

Many years later, ARM has gone on to many other things. But ARM actually came out of Advanced RISC Machines with the original A-R-M, capital A-R-M. A few years ago, they rebranded. So now, it's, I think, lowercase a-r-m or capital A. Definitely not an acronym. There's actually only one use of ARM as an acronym now. 

It is the Architecture Reference Manual, the ARM, ARM, as it's called because in ARM, everything has to be a bad pun. I'll say one more thing about that. If you read the ARM specifications, you'll find there's three flavors of ARM. There's the A profile. There's the R profile. And there's the M profile. 

[LAUGHTER] 

BRYAN: So the ARM, ARM, ARM? 

JON: That pun's everywhere. 

[LAUGHTER] 

There's also a thumb historically as well. 

[LAUGHTER] 

It's pretty bad. 

STEPHANIE: They just went 110% with that. But thank you for the history lesson. I was doing some research as well and got a little confused because I was also seeing the capital A-R-M and the capital A, lowercase r-m. And so I think what we're talking about here today is the new one, A-r-m capital, lowercase. And so like Brian said, this is very prevalent in today's news, especially at Google Cloud. So why don't you give us a bit more context around why ARM is so important in the compute world today? 

JON: Yeah, it's a good question. I think ARM came from very humble beginnings. And then, somewhat accidentally, I'm sure they would say it was deliberate, but somewhat accidentally, they completely took over the mobile market. That's really where it came from. If you buy a cell phone today, something like 95%, or 97%, or even more percent of cell phones that you have today are all powered by ARM-based chips, whether actually designed by ARM or designed by third parties like Apple, where they have their own design teams but comply with the ARM architecture. 

So it's compatible, but maybe designed by somebody else. But they took over the entire mobile space. And so really, their strategy then has been to climb up from the bottom up. And over the years, you can look at these exponential growth curves in terms of performance. You can do your innovator's dilemma type analysis and see these curves, where the performance is getting better, and better, and better. And it's starting to creep up. 

And then, in just the last few years, the performance has hit where mainstream datacenter compute performance needs to be. It's hit that sweet spot. And so now, ARM is fabulously positioned because they've come from very humble roots designed around high-efficiency, low-energy. These days, we're very concerned about the amount of energy that we use in compute. We're very concerned about the total cost of ownership, the TCO models. 

And so you look at all these things. And you say, well, that's very interesting coupled with the amount of volume that you get being in all these mobile devices. So ARM has had the opportunity to go and build some very advanced chips, or the ARM partnership, as they're called, these different companies that build ARM chips. 

And so these days, you can build very, very leading edge technology and get the multiplying value of having all these other companies that are also building ARM-based chips. And we're seeing this in the cloud as well because, of course, we're very excited that we're launching ARM-based instances. 

There are other cloud players that are also in the ARM ecosystem. And what we're hoping there is actually that we get value out of-- again, there's a whole ecosystem. There's a whole bunch of us that are in the market together. We have compatible solutions so that customers get this multiplying effect from having all these options in the market. 

BRYAN: Got it. I understand from somebody running data centers like Google, yeah, that higher efficiency is better for us. But what does this look like for users, people who are running their own VMs in cloud? Why should they care? And how does it actually work? What does it look like to use it? 

EMMA: So for end users, being more efficient means your workloads, your applications, run more efficiently. The x86 and the ARM architectures came from very different philosophies. So the CPU cores and the architecture are designed very differently. They use similar techniques to optimize the execution of instructions. 

But if you look at the architectures, they are still quite different in many ways. So having more options is actually better because we have even more applications with different kinds of workloads running in cloud. So if your workloads run better in one of your architectures, then it's important to have that option in cloud. 

JON: And if I can add as well, I think, Emma, the other thing that perhaps a lot of people are seeing is, as we said at the top, ARM feels like it's everywhere right now all at once. Even though you and I, Emma, and others have been working on this for many years and very excited about ARM technology, if you go out there now and buy a new laptop, there's an increasing likelihood that it's got an ARM chip in it. 

So I think that's the other way in which it's the right moment because people are starting to have, say, an M1 or M2 Mac in front of them running a Docker container. And now, their native development is actually on ARM to begin with. And so they get value, even more value, out of being able to run those workloads on ARM-based instances in the cloud. And I think you've seen that yourself, right, Emma? 

EMMA: Yeah, exactly what Jon said. So the industry and computer scientists have been working on ARM and server processors for decades. We only had CPU, traditional CPUs, for servers. And then, we had GPUs. And now, we've been trying to use other architectures on server machines. And now, it's time to use ARM in production environments. 

BRYAN: So if I do want to give it a try, so let's say I've got some Docker image and I want to run that in Google Cloud, from a practical standpoint, what does that look like? Where do I click? Which part of Google Cloud is it? 

EMMA: So it's Compute Engine. And obviously, if you use Compute Engine from, for example, Kubernetes Engine, then you can just use it as if you are just using another machine type. If you're using the web console, then you just need to click T2A instance type from the dropdown box. And if you're using a gcloud command line, then you just need to add the parameter to specify the machine type T2A, standard, xx. And xx is the number of cores. 

JON: And I think that's the way in which I've often joked we make boring. And that's how we make it successful. I think one of the things that's been important over the past few years is to get to that point where it is a fantastically boring experience because that's what customers want. They want technology that just works. Get out of the way. ARM'S interesting. But don't be, choose your own adventure. Just look. 

Yes, we had the days where Docker only supported one architecture. And then, we added Multiarch to Docker containers. So now, you can build a container that supports multiple different architectures. And the orchestration technologies will take care of this for you. There's still a few steps that you have to be aware of. There are going to be times I think we would all know this and admit to this. 

With any new architecture, there are going to be times where you try something out and maybe a container hasn't been ported to ARM yet, or the base image is not on the same version, or something like this. So this is the other thing about having a preview and having an instance that's out there that lets people get moving and get porting their applications. I think that's very important, very valuable. 

EMMA: And once you get on the instance, like SSH into the instance, everything else looks the same. You have the same toolkit, same packages, same distributions. If you use Debian, you can use Debian. And we have other distributions as well. So once you log into the machine, you can't really tell if it's an ARM or x86. You need to look at the system configuration to tell which machine you're actually using. 

So for example, if you have a web application like node application, Python, Ruby, oftentimes, you can just run it on the ARM machine. And if you have other language applications like Go, C++, you just recompile it. And oftentimes, it just runs. And for .NET, Java, you can use the same binaries as well. So it's pretty straightforward. I think most of the time, you're running in your servers. But it will probably still run on ARM. And it's more straightforward than you might think. 

BRYAN: That sounds boring in the best possible way. 

JON: It didn't start out boring some 10 years ago. But we made it very boring. We actually deliberately leveraged a lot of the same standards and technologies that you see in the other architectures out there like x86 because, again, why reinvent everything if you can just make it a more seamless transition for anybody who wants to move over? So as Emma says, when you're on these machines, you'd be hard pressed to know if you weren't looking in proc CPU info and seeing, oh, OK, it's ARM, not x86. But if you look at the rest of your Linux environment, for example, it'd be very hard to tell. 

EMMA: And even most of the system operations are the same. If you want to install a package, then you just run sudo apt-get or DNF install x. And it's the same. The system automatically fits the right package for each architecture. So even from the sysadmin perspective, the vast majority of the operations will remain the same. You just need to pick the architecture for your machine. 

STEPHANIE: That's great. And I really like what you said, Jon, about how this is this inflection point in the industry where being boring is because we've built enough reliability and seamless experience that you don't really notice. And I also feel like if a lot of users are running it, unbeknownst to them, even on M1s, they are having a proof of concept already being done for them if they are running Docker containers. 

And now, this transition to running their workloads in the cloud is much easier to do. So now that we to know T2A is our new ARM-based chips that we have available on Google Cloud, can you tell us a bit more about where this fits into our Compute Engine family and portfolio? 

EMMA: Right. So the T2A family is scale out optimized machines. So if you need a good mix of CPU performance and CPU core count, for example, when you're running a web server, encoding and transcoding media files, and running, for example, cache servers, sometimes it could be database servers, content applications, then this could be a good option. And we have many different options. We started with a few machine types. And now, we have quite a few machine types. 

And it's really important to run benchmarks for your specific application, maybe major performance with your actual production application, and see if it runs better on a certain machine type or not. And the T2A and T2D, so they are the tao of scale out optimized machines. They are very, very cost-effective and optimized for good balance of core counts and performance. So if you need to use a lot of cores, then these are good options. 

JON: And I would say the ARM instance there is built on hardware that is positioned as cloud native. And when you talk to people, what do they mean by cloud native processors? When you cut through all the marketing and buzz, I think what they really get at is these are not multithreaded processors. 

So unlike some, where you might have multiple hardware threads per core, when you get so many virtual CPUs, those are actually cores underneath. And so you get a very consistent level of performance out of these, kinds of, designs as well that we're seeing in the ARM space. 

BRYAN: Awesome. 

EMMA: Obviously, if you want to run ARM binaries, AArch64 binaries, for example, if you are developing a mobile application and want to test some parts of that on cloud, if you want to develop binaries for laptops and mobile with ARM processors, then you can run native binaries on these machines. So that could be a really good option as well. 

JON: Emma, you mentioned AArch64. I think that's a fun one as well just for the history aspect. You often hear people talk about ARM64, or AArch64, or ARM. What does it all mean? And I would summarize it as ARM started out like many other things. It was a 32-bit architecture. Obviously, some architectures had 16-bit modes as well and even 8-bit earlier on as well. But ARM started out as a 32-bit architecture. 

When the modern generation of servers began 10 years ago, a lot of us were pushing to say, well, let's not build a legacy on 32-bit. Let's start with 64-bit because, as I always used to say, we're building the legacy right now. Whatever we do now will become the next 30 years. So we really pushed to start from a clean 64-bit base. And that's why these instances are pure 64-bit. 

So when we say ARM, we mean 64-bit architecture. There is also ARM 32-bit, AArch32, as it's called these days. Retroactively, ARM has renamed these. So you've got AArch32 and AArch64. So if you hear AArch64, ARM64, or ARM, it's all the same thing. These are just different ways to describe the same thing. 

BRYAN: Got it. So I'm pulling a couple of threads from the conversation here. We both have this long history and this inflection point in time. You mentioned this predictability around cores and then things changing as far as naming or the like. So I don't know. It's a little hard to navigate for somebody new to this. So are there some common surprising things that you'd like to let people know about ahead of time? 

EMMA: Right. Because ARM started as a mobile, small embedded processor, I think some people might think it might not be as fast as some other processors. And it's actually not true. Some of the fastest computers like supercomputers are even built with ARM. They choose ARM because ARM is more efficient. When they have more core counts, they need to use the most efficient architecture for the processors. 

And it's the same for cloud and web applications. You oftentimes need to use hundreds if not thousands of cores to run applications, run servers. So when you look at the overall picture, the whole architecture, ARM can be more efficient. And even if you look at the single-core, single-machine, I'm going to say it depends on the workload. 

I ran a bunch of benchmarks when the T2A machines came out. And it's very surprisingly close to the N2D and T2D instances. Some of us are on the T2A. Some of us are then on the T2D. So it's really important to test and choose the machine type for your workload. 

JON: And just speaking to the performance piece and so on of ARM, prizes that one might find, a few years ago, I had an opportunity to go and visit Kobe and see the Fugaku supercomputer that, until recently, was the world's number one fastest supercomputer. That was based on ARM. So you're seeing a lot of designs out there that are using ARM architecture. And they have different performance profiles. 

You might have a low-end device that is slow. A Raspberry Pi is a great device. But it's not going to win a speed contest. But that's not what it's trying to do. So if you've experienced ARM by using a Raspberry Pi, you might think, well, this is a bit slow. But then, you use, say, a Mac. And you say, oh, this is actually pretty fast. And you see they're supercomputers. So there's a wide range of different performance across the landscape. 

And where we've positioned this offering now is a very competitive, very high-performance offering. So you're going to have a good experience, I would say. But I would also say that people over the years have these notions of problems that they will find coming to a new architecture. So I myself used to think coming to ARM meant I get very in the weeds on computer architecture. 

So it's weekly ordered, week consistency. x86, for example, is strongly ordered, which means I don't have to worry about the behavior of how things work in memory so much and all this stuff. And the reality is that tends to really only trip up a very small number of people working on low-level code. 

Because the truth is, if you're working on higher level software and you're using libraries, you're not implementing your own spin locks or something like this, you're not really bothered about any of how that stuff works differently underneath because you're just using standard software libraries. It's all taken care of for you. 

So all the things that I used to think, this would be a concern, and people would have to learn about memory, consistency and memory ordering, that turned out to not be the issue at all. It's surprising what it actually is. It's much more simple stuff that's relatively straightforward. But just, oh, it's a bit different in this way. 

EMMA: And if I add the diversity of the x system and ARM platform, think, even for x86, the x86 and ARM architecture is just the instruction set. So it just means you can use the same binaries for different CPUs. And even for the x86 architecture, you have the processors from the 1990s, 1980s. 

And we have the processor today. They look very different. They don't look like the same architecture. But they are. And it's the same for ARM. Even though ARM started as small footprint processors, we made the architecture run CPU-intensive, memory-intensive workloads. They are capable of handling some of the most compute intensive workloads. 

So it's the same difference between the time span of earlier x86 processors and x86 processors today. The ARM processors we had in the 1990s and 2000s are very, very different. They are still ARM. They share some of the philosophies. But the core architectures, CPUs, are designed very differently. So that's the diversity we have for server processors today. 

JON: And we are building the legacy that will be our legacy in the future. So backward compatibility is an important part of that as well. And we are thinking ahead to that. So across the ecosystem, when you're building ARM applications now, I would say, you don't have to worry in the future. That we're aware that retaining compatibility so that you don't have to think about this. We are very cognizant of that. 

EMMA: Another thing I find surprising is if you have the habit of reading machine code and assembly code, the ARM assembly language looks very different from the x86 machine language. Things tend to get longer. You need to combine multiple instructions to do simple works. For example, adding a variable to a register from memory is one instruction in x86. 

But in ARM, it's a set of multiple instructions. And the way it's designed is to make it more friendly to computers and machines. So for CISC architectures like x86, each instruction has a variable length. It can be one more-- one byte. It can be 15 bytes. You can't really tell where the machine cores begin. But for ARM, everything is 32-bit for bytes. So it's really friendly to machines. 

And like Jon said, when we are using high-level programming language and system semantics, like when you are writing Go application, the C+ application, even when you're writing some system programs, you don't need to worry about these differences. The compiler two chains will take care of everything. 

JON: I'll tell you a funny story, though, about that. A number of years ago, I was sitting in a room somewhere. I guess I won't say where. But I looked at the wall. And there was a piece of artwork on the wall that had the binary sequence 11010101 on it. And I said, that's one of my favorite prefixes of 64-bit ARM binary instruction encoding because it's used in the system instruction encoding space. And they said, nah, pull the other one, Jon. 

[LAUGHTER] 

They actually said something else. But I won't say that on the air. 

[LAUGHTER] 

And I said, OK, now let's take out the manual. And let's check it. And they looked it up and said, OK, you need to get out a lot more. 

[LAUGHTER] 

STEPHANIE: From humble beginnings in 1983, ARM has had a wild ride. Maybe it's fair to say today is the heyday for ARM. So that's exciting. Just to talk about scale out, which you were talking a bit about earlier, Emma, for some of these use cases, I see here that it's also being supported by Google Kubernetes Engine, which you mentioned earlier, but also our newly launched batch service and data flow. So to speak to these broader use cases that it supports today, I think that's also a really good indication of these types of workloads. 

EMMA: Yeah, the good thing is this is another machine type in Compute Engine. So it's just another-- all other existing machine types and Compute Engine families, you can use it as part of your cloud architecture. And it's not a new product. So that's why it's boring and great. You just need to choose a machine type. And everything else should run. 

If you have existing Kubernetes clusters, you can create a node with ARM instances. If you want to run batch workloads, you can specify and create machine templates, instance templates for batch workloads, and so on. So it's really already part of the tightly integrated ecosystem on Google Cloud. 

BRYAN: That feels like one of the most powerful things from a customer point of view. It's great to get a new virtual machine. And a lot of people do install their own VMs and run their own workloads that way, of course. And I love installing servers and playing with them. But I think for a lot of customers, they're just using containers. And they're very cloud native. 

And well, the new batch services, they're pretty cool looking as well. I haven't played with those myself yet. So I'm super excited there. But certainly, the container story for a lot of customers is just the way that they're consuming a lot of technology now. And the fact that it does just plug together and just work, that's super exciting. 

EMMA: Even if you don't have, for example, an ARM laptop or local ARM machines, you can cross-compile. And for C++ and Go applications, we have very good cross-compiling tool chains. So you don't need to worry about your specific architecture over your local machine. If you have an ARM machine, that's great. If you don't, yeah, ARM is really great. 

STEPHANIE: Awesome. Well, of course, we have to ask, if somebody wants to try out this on Google Cloud, where would you send them to do so? 

EMMA: We have a documentation page. And it has quick starts for the ARM machines. You can follow the instructions and try out the instances today. They are available in select regions. And they are free. 

JON: Right? A little bit later. Free for the moment. 

EMMA: Until general availability later this year. So currently, it's free for preview. And even after GA, we have a plan to make eight vCPU or smaller machines free for the T2A generation. 

BRYAN: Fantastic. 

JON: So why wouldn't you try it? Bryan, why wouldn't you try it? 

BRYAN: Yeah, exactly. 

[LAUGHTER] 

EMMA: Right. 

BRYAN: Our normal free tiering Compute Engine is a single-core VM. So that's like a whole other eight cores to play with. 

EMMA: This is the best free trial. There is no risk. I wonder if legal might say something about no risk. But-- 

[LAUGHTER] 

JON: The only risk is reduced instructions, not computing. 

EMMA: Yeah. 

[LAUGHTER] 

I think this is the best free trial. You can just try. And no commitment. Learn something new. It's really exciting. And find out something new. If ARM works great for your machines, your workloads, that's great. If it doesn't, let us know. And we will make the next one and make the current ones better, because this is public preview. We want your feedback. 

STEPHANIE: Amazing. Well, again, no reason not to try. 

BRYAN: Thank you both so much. This conversation, I don't know, opened my eyes. I learned a lot both on the history and how things connect to Google Cloud. I really appreciate your time. And yeah, thank you both so much. 

EMMA: Thank you so much. 

JON: Thank you. 

BRYAN: Wow. That was a super fun interview. I learned a bunch, both the historical context, some details there I hadn't heard before. And then, I just love seeing this inflection point get steeper, I guess. It's more interesting. And I guess I was a little bit surprised and it's awesome that these are just another machine type. It's just a VM. 

You can run Linux, cross-compile, or run your regular code. And that's going to make it really easy to try it out, see whether it works, work with existing architectures that people might have. And I think you can see that already, where it's shipping with integration with GKE, this new API batch and data flow. So I don't know. I'm excited. I need to go play with them now. 

STEPHANIE: Yeah, I think that was the biggest takeaway is to just try it out, because going from the myth that it's really well-suited just for mobile use cases or IoT to now being used in some of the biggest supercomputers in the world, as well as batch, data flow, data streaming, use cases, it's just speaking to the wide variety of workloads that can work on ARM processors. 

So go ahead and try it out. You have, again, no reason not to because it is still available for free in the preview mode. So definitely do that. Now, for-- Bryan, although we're super excited that you're still very passionate about compute, I hear that you're switching focus areas a bit. So what's the deal with that? 

BRYAN: Yeah, so I'm excited. One of the great things about being an advocate on cloud is you get to learn new stuff all the time. And I've just recently switched subteams to focus on developer tooling. So try to find and talk about the happy paths of developer experience through this. So back to roots as a developer. But also, lots has changed. So I'm in full learning mode and excited about that. And I hope other folks out there are in learning mode on the projects you're doing. And I hope that's fun learning mode, at least. 

STEPHANIE: Yeah, in cloud, there's no option other than to be in learning mode because there's just so much to learn, even if you're in the same domain that you've been in. So I'm super excited for you to have a new challenge. And obviously, I still want to work with you on whatever we can, even if it's just this podcast, and get you back on soon. 

BRYAN: Absolutely. Thank you so much for that. And thank you to our guests. And thank you, everybody listening, for taking your time and digging into cloud, and details, and ARM, and all that stuff. 

STEPHANIE: ARM, ARM, ARM. 

BRYAN: ARM, ARM, ARM. 

[LAUGHTER] 

STEPHANIE: See everyone next week. 

[MUSIC PLAYING] 