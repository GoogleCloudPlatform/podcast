+++
audioDuration = "00:44:51"
audioFile = "Google.Cloud.Platform.Podcast.Episode.244.mp3"
audioSize = 64505680
categories = ["Intel", "Data Center", "Processor"]
date = "2021-01-27"
description = "Welcome back to a new year of Google Cloud Platform Podcasts! Mark Mirchandani and Emma Iwao host the first show of 2021 with special guest Rebecca Weekly of Intel. She joins us to talk about the partnership between Google Cloud and Intel."
draft = false
episodeNumber = 244
hosts = ["Mark Mirchandani", "Emma Iwao"]
title = "Intel with Rebecca Weekly"
image="/post/episode-244-intel-with-rebecca-weekly/images/hero/hero-EP-244.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/l6aj23/episode_244_intel_with_rebecca_weekly/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Welcome back to a new year of Google Cloud Platform Podcasts! [Mark Mirchandani](https://twitter.com/markmirch) and [Emma Iwao](https://twitter.com/Yuryu) host the first show of 2021 with special guest Rebecca Weekly of Intel. She joins us to talk about the partnership between Google Cloud and Intel. Describing the company's goals of gathering, storing, managing, and analyzing data in all its forms to unlock the power of technology and information, Rebecca points out how well these align with Google's own goals and why the partnership is such a natural fit.

Rebecca explains the four pillars of the Google-Intel partnership, including the focus on infrastructure and app modernization to elevate the user experience. Through their work with Google, Intel has been able to optimize the move from on prem to cloud for those clients who choose to make the shift, using their thorough client knowledge and Google Cloud expertise to facilitate a smooth transition. Rebecca walks us through the process of crafting this client experience, from choosing products and tools to identifying and solving any bottlenecks and optimizing the configuration using benchmarks.

Later, we talk about the value of open source software in both the hardware and software worlds and why Intel believes so strongly in open source projects. Rebecca offers examples of clients successfully using Intel hardware and Google Cloud software, including Climacell and Kinsta. We get the inside scoop on future projects at Intel, like the next generation of scalable Xeon processors, and Rebecca talks about the future of data analyzation and computing.

Intel and the Intel logo are trademarks of Intel Corporation or its subsidiaries.

##### Rebecca Weekly

Rebecca leads the team that influences nearly every aspect of our cloud platform solutions across strategic planning, hardware and software enabling, marketing and sales. Together they shape the development, production, and business strategy of Intel’s cloud platforms to ensure differentiation and platforms that enable TAM expansion with enthusiasm, collaboration, and urgency. She drives strategic collaborations with key partners including top cloud service providers, OxMs, ISVs & OSVs to ensure platform requirements meet our customer needs.
 
In her "spare" time, she’s the lead singer of a funk & soul band, Sinister Dexter, was professionally trained in dance (tap, modern, and jazz), and is an experienced choreographer. She has two amazing little boys and loves to run (after them, and on her own).
 
Rebecca graduated from MIT with a degree in Computer Science and Electrical Engineering. 

##### Cool things of the week

* 97 Things Every Cloud Engineer Should Know [Book](https://www.oreilly.com/library/view/97-things-every/9781492076728/)
* Introducing Google Cloud Workflows [video](https://www.youtube.com/watch?v=aOTFhWpjrFI)

##### Interview

* Intel [site](https://www.intel.com/content/www/us/en/homepage.html)
* Google Cloud withe Intel [site](http://cloud.google.com/intel)
* TensorFlow [site](http://tensorflow.org)
* Anthos [site](https://cloud.google.com/anthos)
* Intel Select Solutions [site](https://www.intel.com/content/www/us/en/architecture-and-technology/intel-select-solutions-overview.html)
* PerfKit Benchmarker [site](https://googlecloudplatform.github.io/PerfKitBenchmarker/)
* Google Cloud Functions [site](https://cloud.google.com/functions)
* Climacell [site](https://www.climacell.co)
* Blue Skies Ahead: ClimaCell Delivers Innovative Weather Prediction Solutions [doc](https://www.intel.com/content/dam/www/public/us/en/ai/documents/climacell-case-study.pdf)
* Kinsta [site](https://kinsta.com)
* Benchmarking GCP’s Compute-Optimized VMs (C2) [blog](https://kinsta.com/blog/boosting-wordpress-performance/#benchmarking-gcps-computeoptimized-vms-c2)
* Arcules [site](https://arcules.com)
* Descartes Labs [site](https://cloud.google.com/customers/descartes-labs)
* DAOS [site](https://daos-stack.github.io)
* Optane [site](https://www.intel.com/content/www/us/en/architecture-and-technology/optane-technology/optane-for-data-centers.html)


##### What's something cool you're working on?

Emma was a guest on GCP Podcast Episode 167: [World Pi Day with Emma Haruka Iwao](https://www.gcppodcast.com/post/episode-167-world-pi-day-with-emma-haruka-iwao/).

Emma is working on the Ruby 3.0 support and release and deprecation policy. [Ruby is now available on Google Cloud Functions](https://cloud.google.com/blog/products/application-development/ruby-comes-to-cloud-functions)!

##### Sound Effects Attribution

* "Partyhorn" by Milton of [Freesound.org](https://Freesound.org)
* "ToiletFlush" by EminYildirim of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 244 of the weekly Google Cloud Platform Podcast. Of course, I'm Mark Mirchandani. And today, I'm here with Emma. Hey, Emma, how are you doing?" >}}

EMMA: Good, how are you? 

MARK: I'm doing well. And welcome to all of our friends for the first episode of 2021 of the Google Cloud Platform Podcast, yay. 

EMMA: We have a New Year's celebration, yay. 

MARK: I am so glad to finally be back to it. Obviously, last year was-- 

[TOILET FLUSHES] 

A year, and it certainly, it certainly felt like it a lot longer. But we are back. And hopefully we're going to be back every single week, jamming awesome Google Cloud content directly into your ears, as you listen to some of our fantastic, fantastic guests. Speaking of which, I'm super excited about this week's guest. Emma, can you tell us who is going to be joining us this week? 

EMMA: We have Rebecca Weekly from Intel, the microprocessor manufacturer. The company invented the Intel x86 microarchitecture. And probably, if you have a personal computer, it have Intel products inside. 

MARK: I'm going to go out on a limb here and say that's a company people are familiar with. And of course, Rebecca comes in and tells us some really awesome stuff about the partnership between Intel and Google Cloud. But also some of the thoughts that go behind the different chips. And we get more into it in the interview. It's just a great conversation. So I can't wait to get into that. 

EMMA: We also talk about software and open source. 

MARK: Yeah, it's more than just processors, right? I mean, there's a lot to it. And it's so fascinating to hear. We will get right into that one. But before we do, why don't we jump into our cool things of the week? 

[MUSIC PLAYING] 

EMMA: We have a new book coming out from O'Reilly, 97 Things Every Cloud Engineer Should Know. It's available today. And actually, three of our colleagues contributed to the book, Nathan, Dave, Katie. That book covers a wide variety of topics, including migration, economics, stakeholder management, and platform, of course, technical aspects. So if you want to learn some of the lessons, it's a great resource to begin with. It's available today. 

MARK: Yeah, it's out there. And y'all can Google it. Sounds like a really great book. And of course, I'll have to add that to my reading list, because the world of being a Cloud Engineer, I think, is just as broad, if not broader, than it ever has been. 

And I've been seeing all these great posts popping up of different people who are not only looking at Cloud certifications, which, I think, help you hone in specific skills, but also what are the important valuable skills that people are looking for? And everyone's going to have a different answer. So it sounds like a really cool resource to figure out some of the more popular things. 

And on my side, I want to promote this great video and this new tool that I recently just learned about called Google Cloud Workflows. So this is a pretty recent one. And this is a great little introduction video to it. But Google Cloud Workflows is like a managed service for hosting serverless workflows. 

Right, so if you're going to build out a big if this, then that kind of structure with your different APIs, the video kind of shows you a little bit more detail about it. And it's really, really easy to use. So it's actually kind of super cool. And I'm looking forward to getting a chance to playing around with it more, and building out some custom workflows, for just fun little side projects. 

EMMA: Oh, Google Cloud Workflows. I'm usually on virtual machine side of the spectrum, so this is completely different and new to me. I will be sure to check it out. 

MARK: Yeah, it's super, super cool. And obviously, of course, it works well with all the Google Cloud stuff, like Functions. Which I think is, probably, the easiest way to work with it. But it also hooks into third APIs. 

EMMA: I'm quickly taking the video with thumbnails. And it seems like a good introduction and real hands-on tutorial as well. 

MARK: So while Emma is going to check out the video, why don't we go ahead and jump into our main content with Rebecca. 

[MUSIC PLAYING] 

Rebecca, thank you so much for joining us today. First things first, can you tell us a little bit more about yourself? 

REBECCA: Sure, I run the Hyperscale Cloud Strategy and Execution team here at Intel. And what that means is that I work with the major hyperscalers across the world to help build the right data center portfolios for them. So whether that's a combination of platform design, CPU design, collaborating on smart network interface cards, or different ways you could go to market with [? Rock ?] ULC NAND. It doesn't matter what it is, we end up having a fun partnership and trying to figure out how to deliver what hyperscalers need from Intel's portfolio. 

MARK: There's a lot there to unpack, because it's basically you do everything in order to make success, which is what I got out of it. But let's break it down a bit more. 

REBECCA: I mean, we work together to try and define what is needed, how we would measure success, benchmarks, performance metrics, the kind of improvements we want to have. And user software and workload optimization, really, it's a little bit of everything. And a little bit of nothing, I mean, somebody else actually builds the CPU, to be super fair. So it's how we actually make it work at hyperscale to deliver and use our services. 

MARK: And I think one of the first questions that kind of comes out of this, and this is somewhat of an obvious answer, and, I think, somewhat of a not obvious answer, is that this company, of course, is Intel. Which is, I think, most people know, very famous for making a wide variety of computer things. But what would you say, in your own definition, what does Intel do? 

REBECCA: Intel is trying to connect to the world and help them make knowledge of data. In many ways, I think it aligns very naturally with what Google does with AI and analytics, being able to actually derive insights from information. Intel tries to move, store, process data in all its forms. So that people can unlock the power of the Cloud, can unlock the power of information. 

EMMA: So I think you said we've been working together, Google Cloud and Intel. Do you have any cool examples? 

REBECCA: When I first started in this job, and Google Cloud was launching, we were working on that first definition of N1, first to market on the Skylake processor, very exciting time for all of us. Co-designing Optane DC Persistent Memory, now just Optane Memory, into the marketplace. 

We've partnered on reference platforms for high performance computing, helped co-design and develop the bare metal instance. We've been partnering on all sorts of interesting end user ISVs on top of public cloud, so SAP HANA, TensorFlow, workload optimization together. And then, there's been phenomenal partnerships that have gotten, I think, a lot of press, like the Anthos, Intel Select Solution, some of the other, again, end user capabilities that we're trying to make sure are enabled on Intel architecture with GCP Cloud. 

EMMA: Awesome, so it does sound like Google is one of the earliest customers for these products. And we've been able to deliver some of the latest technology because of the partnership. 

REBECCA: I certainly hope that that's true and that that always stays the case. Certainly, that was the case where Skylake, first to market by, I believe, nine months, it was the first Cloud to introduce the Skylake processor in the market. Not every single project and product has the same goals and focus, but that was, kind of, one of the most amazing and exciting partnerships I got to be a part of. 

In general, we have four pillars where we focus our partnership. It's not just the new product introduction and things like that, but really around infrastructure modernization and what we're trying to accomplish together on all the app modernization. Projects like Anthos, key partnerships in the Telco domain space, really trying to bring through that user experience for end workloads, verticals, to our hardware solutions, as well as what we are supporting in the ecosystem. 

And it's a lot about reimagining the journey and how these industries can be transformed by going to the Cloud. And I think because Intel partners in a lot of these domain spaces for on-premise footprints, we do a lot of work with standard OEMs and ISVs at any kind of IT shop that has its own cloud on-prem footprint, and is now looking to come to the hybrid Cloud environment, it's a great partnership, because we know a lot about how they're doing it there. 

And we work a lot with Google to actually drive GCP solutions. How can we work together to marry those two? So that the hybrid Cloud of the future runs best on IA with GCP. 

MARK: There's no doubt that Google and Intel have done some really cool stuff together. And I understood most of the words you said. But there's a lot of different things going on. And it's so interesting, because when you break it down, you look at the Cloud, and you look at on-prem. And on-prem is where you actually really need to think about the OEM side of things, the Original Equipment Manufacturers, and who's making it. And I'm sure designing a data center takes a tremendous amount of energy, effort, thought, and knowledge. 

When you go to the Cloud, especially for some of these digital native companies, who have been kind of, quote, unquote, born on the cloud, I don't know that people think about any of that. I certainly don't. When I think about spinning up a new compute instance, I don't even check the processor box, because to me, I just want the machine. And there's such a huge gap between those two. So I'd love to hear a little bit more about how you navigate that thought process, between the people who don't, maybe, even know which chipset they're running on, or maybe don't even know why they should know, versus the people who really need that control. 

REBECCA: I think the way you navigate in all complex situations, because what you're describing is incredibly complex, and there's no perfect answer, but when you look at that, we tend to look at it by workload or by vertical. And really focus in on what has affinity, either for security reasons, for latency reasons, right, in Telco, there's an edge point of presence, low latency expectation that may be best served by the base station that they themselves run. 

But there may be other aspects that are in the backhaul that can be offloaded to a public cloud. In HPC, there may be aspects of the data insights that they want to leverage incredible tools in the public Cloud for. But they also have so much information that they themselves are collecting. They want to store that, maybe, for regulatory reasons, in their own data centers. 

So usually, there's a customer journey in every one of those hybrid scenarios that we want to think through and make sure that we're focused on whatever their pain points are. If it's security, if it's regulation, if it's sustainability, we found there's a lot of new regulations in various regions that are shifting the narrative and how people want to ensure you're Lot 9 compliant. Or you have full visibility into your supply side and your operations. 

And I think GCP has been a massive leader in the area of sustainability. But not all Clouds are equal in this domain space. There's not a lot of reporting out there in the ecosystem, yet, that is consistent. So if somebody isn't a digital service provider, and they are appealing to a young, fun market, who wants to be a positive impact in the world, they're the kind of people who, actually, are going to look at your green statistics. 

And this is where, again, the partnership that we have, we have a supplier business review with Google that we do every single quarter, every two quarters, where we go through all the truth and transparency, everything that's in conflict minerals, water that's been generated in the production of our silicon consumed. Carbon that's been consumed in the production of our silicon. What goes into our supply chain, and we give that data to Google. And Google uses that data to conduct and conclude aspects of their green data center footprint. 

So there's just so many ways in which the partnership helps, I think, those end user journeys, and how we think about solutions together that matter. They may not matter, specifically, what's in the processor, to your point, but that matter to end users in interesting ways, if we work together to help people understand the vectors that matter. 

EMMA: I think it's really cool some of the things like sustainability is not very obvious to end users, but that also means they can take advantage. And they can use these products without taking care of every detail. So I certainly didn't realize those regulations and the requirements were built into the Intel product and the partnership. That's really interesting. 

REBECCA: It's definitely a core area that we look at, especially as you're building out in different regions. How do you make sure you're fully compliant to that region's specs? 

MARK: So let's bring it down to-- I mean, because obviously that's super, super cool in AI. Like you said, Emma, I didn't know about that level of detail that goes into it. But especially when you're talking about, what I can only assume, is probably on the order of millions of millions of chips and different machines that get created. It's a real big number that people need to look at. 

And then, if we go back to that individual person making that choice, it's great to hear that, of course-- hopefully that information is out there. And as they make choices that are going to be relevant to whatever they care about, it's good to just have the information for it. When it comes down to the other side of things, which, I guess, is, really, at this point, the performance side, 

I want to get more into the actual decisions that get made when someone says I do want 100 VMs. And let's say, Google Cloud is going to be the right choice. And Intel is going to be the right choice. What's the next step? How do I know which chipsets make sense for me. And how do I know if I'm not going to really care about which ones I choose? 

REBECCA: This is the $100 million question, maybe a billion dollar question. There's a lot of work that we've done in this domain space. And I think the market is still nascent in how it's going to work. I mean, there's SIs and MSPs that their whole job is working in this domain space. 

We do a lot of work together to benchmark on top of GCP's Cloud. We really benchmark across the world, including our own internal footprints, to make sure our products are performing, that any known bottlenecks between memory, network, storage are well characterized at the workload level. So we do a lot of work there. And we bring that work into GCP and try and help make sure it is the most optimal configurations. 

Some of the benchmarks that we've been most public about with GCP, when we went from N1 to N2, we were able to drive 40% more performance per CPU, 3.8 gigahertz all core turbo. We've done a ton when we were looking at, specifically, HPC workloads, to make sure we were looking not just at the per core performance, but the performance per dollar. And everything that actually could run in that ecosystem, versus alternate options for an ecosystem. 

So it kind of depends, I guess, is the right answer, in some ways. We look at workloads. We partner together. We have the Google, Intel Partner Alliance program, where we will look at new people coming into the public Cloud. And we'll characterize their workload using tools that we have, things like VTune, to understand where the bottlenecks are, and then try and optimize the full configuration space together to get the best in class performance. 

MARK: I think one of the most interesting things about these benchmarks, and, obviously, a lot of these technical details I haven't had to deal with, but it is fascinating to think about how these benchmarks are actually performed. Can you talk a little bit more about what that process looks like when you're actually creating these? 

REBECCA: Yeah, I mean, actually, I feel like we learned from Google in this domain space. So Google put out PerfKit to kind of help standardize a scale methodology for running benchmarks across multiple nodes, across multiple instances. And we actually borrowed from that and said, cool. This is an awesome framework. 

We're going to use this. And we're going to add different benchmarks that correlate to different parts of either a typical Cloud flow-- so think about memcaching is a pretty common thing that happens in a web tier when you're caching local information that you might access. So what are good benchmarks for that? 

Or WordPress is a good benchmark suite to help understand typical web workloads. So we end up shifting out the benchmarks that we use to understand and sort of characterize situations. There's a lot that you can do in Intel processors to understand more about the performance that you're getting. We have internal PMUs. I won't go too deep on this, but Performance Monitoring Units that allow you to see every single, effectively, register within the processor from a performance perspective, to understand where you're having bottlenecks and issues. 

And because we've been partnering so long with Google, we have a lot of tools available within Google's ecosystem, on top of our processors, to be able to give that visibility, and to help people optimize and tune their internal workloads. When we're working with GCP partners, we end up using the tools with them, and actually helping them understand and optimize their instances, go to a different instance type, shift, maybe, how they implemented their particular instance configuration. So that they get better performance. 

EMMA: That, I think, reminds me of the transparency and the vast documentation from Intel, some of these performance metrics and the registers available and consumer processors. And when I write programs for my PC, I'm kind of a strange person who reads the [INAUDIBLE] manual from Intel and enjoy reading it. It's like hundreds of pages of PDF. So that brings-- 

REBECCA: Brevity is not our skill. 

EMMA: The other side of the spectrum, when I think about partnership or product portfolio, software is another piece that fits into that area. I think Intel has been leading the open source community in the industry in many different areas. Can you talk a little bit about open source initiatives by Intel? 

REBECCA: Oh, absolutely, where do I start? So I mean, this is a huge investment. And I think kind of a unique perspective, one that's very well aligned to Google's strategy as well. There are definitely companies that don't believe in participating in open source. And they drive a very verticalized solution and their own options. 

But Intel views itself as a platform company. And as a platform company, our job is to enable ecosystems. And so open source is critical in that effort. And we participate in everything from open source around standards bodies, so we contributed the USB spec, the PCIE spec, the next DDR5 specification, through JEDEC, is largely driven by Intel. CXL, the Coherent Express Link, is an Intel contribution to the ecosystem. 

I mean, I literally could go on and on and on, because that is core to our belief. You cannot move up within the technical leadership domain at Intel if you don't have impact in driving standards and having an industry presence. So its core to our culture. And I think that's really important. And again, I think it's very naturally aligned to Google. 

That's a hardware statement and a software statement. So we're the number one contributor to Linux. We are a massive contributor to all sorts of compiler specifications. And we partner very closely with Google on LLVM. I really could go on and on. 

We partner, obviously, our approach towards AI is a very open methodology. I think oneAPI is something we've been very public about., Raja Kadori, certainly. That is around trying to ensure that there's an ecosystem for coding the most complex kinds of algorithms that do leverage hardware and software co-optimization together. And if you don't open it up, it's hard for the ecosystem to innovate around it. 

And we've had a very closed software ecosystem around AI for a long time. I think Google was the leader, with TensorFlow, in trying to open up and disrupt that ecosystem. And gosh, look at how much has happened in the world since Google made that choice. 

And Intel's really, really, really committed to TensorFlow, upstreaming our libraries into TensorFlow. We've got a strong partnership there. And when I talk about our libraries, what I mean is when you're looking at Intel DL boost capabilities, and making sure that that ISA is well exposed in native TensorFlow capabilities. But we'll only continue doing that, because we fundamentally do believe that open source leads to ecosystems developing faster. 

And sometimes, we'll win in that opportunity. Sometimes, will be too slow in that opportunity. And that's just the world. But we should compete on what we're best at doing together, and not in trying to hold knowledge solely, I guess, is the right way of putting it, and sort of the philosophy we take towards it. 

EMMA: I really appreciate the firm statement. And as an open source contributor, whenever I see patches coming from Intel, they write software when they know how to make software faster. And so the focus on performance and efficiency really makes a big difference in open source communities. And Intel also has the C++ compiler. And it also makes a huge difference in performance. 

And there's a math library, TensorFlow, and in Linux, even small string comparison functions, or memory transfer, like memcopy, I've seen all these contributions from Intel. And I'm really happy when I see patches coming out from the CPU develop by itself. 

REBECCA: That makes me so happy, especially in the HPC part. I mean, this is the industry we really grew up in and optimized for. And when you look at AVX-512, and some of the ISO we've brought to market, really, that benefits significantly both in HPC, but also in storage. I mean, just XOR throughput, everything that we are able to do for database and analytics workloads, because of that ISA, it's the combination of hardware and software. 

You're totally right that people don't necessarily think about what chip to use. And that's fine, as long as it runs better, faster. It's available when people need it. We have 20 years of industry experience being in the data center. We have reliability features, availability features, serviceability features that allow for better uptime for end users. And that's the kind of thing that it's not going to be on a brief on an instance, but when your instance just doesn't go down, that's why you come back to that Cloud service provider. So it's part of the partnership we have to have together to make sure that it is a stable, awesome, high quality end user experience. 

MARK: Yeah, and I think we've been talking a lot about some of the decision-making factors that come into a business deciding, hey, it makes sense for us to do this. Or it makes sense for us to invest in this, either on-prem, or Cloud, or, of course, hybrid scenario. And we're going to go with Intel and Google, or any other providers, based on some of the factors you've already been discussing. 

But there is this second set of people that aren't businesses. Right, and I think, Emma, of course, you've done a tremendous amount of work on a wide variety of things. But I'd love to talk a little bit more about the specifics that go into, well, I'm not a business making a business decision. I'm a person making a compute decision. Let's talk about the chips. Let's talk about the price, and the performance, and those sorts of things. I'd love to hear more about that. 

REBECCA: It's an interesting question. I'm still trying to understand it a little bit, because I think about my husband who's a startup guy. And he's a business. But he's also a user to do his Google Cloud functions and run his application. Does he qualify as an end user? Or is he a business? Are you using business for mostly large scale enterprises versus sort of smaller startup communities, kind of Cloud native companies? 

MARK: Well, I mean, I think the secret answer is that they're all truly the same. Like you already said. 

REBECCA: Yeah, they're all end users. 

MARK: But certainly, there is a big decision-making factor that goes into I need to put up a data center, versus I need to spin up to compute instances to run my Wordpress site. The amount of thinking that you might do on those two are going to be two different levels. But when it comes down to, maybe, you're a person who doesn't have access to all the benchmarks, or you just don't have the time to investigate it, I think, that's really where the questions come up of well, how do I make the general decision. 

And we know that you can, because I have, spun up a compute instance without thinking about what it's actually behind it, because I know that the software that I'm running on that is not going to be heavily impacted by which chipset it's running. But that's not always going to be the case. 

So I think when that user comes to the Cloud, that they want something cheap. They'll come and use the cheapest thing they can, effectively, first. Those users tend to come in and use more platform services, platform as a service, kinds of capabilities. I mentioned Google Cloud Functions. I don't know if you would call those, really, platform as the service. 

But a suite of tools that are easy to leverage at the API level, and you don't have to think at all about the configuration specification underneath it. The cloud service provider creates that for you, as effectively as possible. And you are really focused on your business, your time to revenue, how you drive that forward much faster. 

Even on that Cloud journey, not to overshare, but I remember with my husband, he was like, my Google Cloud Functions I ran out of memory. And it didn't give me an error. And I have no traceability. And I can't go see the log files. He's like, I just want to put it on my server and do it myself, which, probably, is dating both of us to give that feedback. 

But even in that journey, and even that user has a desire for the kind of visibility, and transparency, and tooling that they've had, sort of, in the past to understand what's happening with their system, where benchmarks and issues might occur. It may not look the same as a performance benchmark. It may be exactly what I just said, where are the log files of what went wrong, so I can debug it. So that I'm not losing large segments of a transcription that I invoked through Google Cloud Functions. 

That's the kind of thing that I think we're all still learning, and growing, and trying to improve for end user experiences on top of public Clouds. That is different than an on-prem footprint, where you can go, specifically, to that server and get that information. So I think Cloud has work to do. And I think Intel has a role in that. 

The tools that we give, a lot of those tools that I mentioned before, a VTune, et cetera, we're assuming that we're looking at that node level instance, everything that's connected, but the node level instance. There are other tools that we have to do more system-level projections and performance calculations. But the whole industry has to evolve in this domain space, not just for performance, but for visibility, transparency, traceability, especially as we are spawning this out over multiple nodes over time. 

EMMA: Are there any user stories or real world examples, where, perhaps, our partnership or specific Intel chip contributed to your customer success or TCO optimization, performance improvement, et cetera. 

REBECCA: Absolutely, I mean, this is where we get up every day and work together. So actually, I had the honor of being on a video with the CEO of ClimaCell. And he talked about how, together, we've done 40% HPC improvement in their workload. 

And again, that's an amazing case of where a company that is completely transforming climate modeling, and couldn't do it without the Cloud, but had real SLAs and capabilities that they had, and that they were used to from an on-prem footprint that they needed to replicate. And so it was a great partnership to help them in that entire journey onto Google Cloud. 

Kinsta is a great example. They got a 200% Wordpress improvement gen over gen working with us on the C2 instance. That was a great result. And a great benchmarking process for what is typically viewed as, kind of, it's just web stuff, it's not that important. But it's actually a ton of work to process effectively. And really took advantage of the higher per core performance in the C2 instance. 

And then another one that I get excited about, because video processing is, probably, one of the largest growth workloads, at least we've certainly seen it's growing a ton within the domain space of COVID-19, and all of us watching things on our phones, and/or being on video chats all the time, there's quite a lot of video processing that's had to happen in these last few months and almost a year now. 

But Arcules was a partner that we worked with to get 3.62x better performance, again, per CPU on video processing in a migration effort. So these are the kinds of things where it's that combination of being on the right instance, using the right libraries. It's not in any way limited to just the hardware and just the software. It's the two coming together to actually create the right end user experience. 

EMMA: It's really encouraging to hear about two digit improvements. Just in case the audience is wondering, these C2 instance types are the compute optimized GCE machine types using Cascade Lake Xeon processors. So they are the latest generation of the Xeon processors and optimized for single core performance, and higher clock speeds. 

REBECCA: And actually, we are in production. So they're not the latest generation of the Xeon processors, because we are now officially in production on Icelake. And that will be coming soon in GCP. But they are the most current ones that are in GCP's fleet today. 

And Descartes is an awesome partner, as well, right? So this is one of those ones where, first of all, I just love what the company does. So the company takes satellite imagery in and uses algorithms to predict outcomes, such as the US food output for the next phase of time, or will we have shortages. It's a great big data problem using satellite imagery to solve real-world problems. 

Those data sets are massive. And so they were looking at options to be really effective in throughput end analysis. We did a lot of work on tuning AVX-512 for them. We used that Intel VTune tool that I've been referring to. They were able to get their performance up by about 38% on the exact same instances. 

And then, eventually, we were able to take those optimizations and investments and improvements in the Xeon scalable line to create preemptable VMs that had lowered their overall cost structure from $10,000 to $2,700 per petabyte analyzed, which is, again, that's the difference between 25% reduction in the net endput. And that creates a much better revenue stream, much more effective for delivering their service. So I get really excited about those kinds of solutions that really do shift the ability of a customer to deliver an end service. 

MARK: And just like Emma said, I mean, those double digit numbers are truly impressive. And we'll make sure to include, in the show notes, some links to these different case studies. So people can read more about them. 

But I think it goes to kind of show you, in very real terms, which I always love the concrete customer examples, because when you are either that person making a decision, or that business making a decision, the end result is that what you choose is going to have a big impact, could potentially have double digit number impact, on how much performance. 

And I love the way that it's also measured in what is reality is unit cost, right? Because at the end of the day, you're going to make some very big decisions, not only based on how fast you can do something, but what does that cost versus benefit analysis that you're going to have to do on whatever your business is, whether it's satellite imagery or many of the other examples you listed. 

REBECCA: Amen. 

MARK: So with that being said, of course, one of the coolest things that I'm going to ask is-- and you, obviously, will have to choose which ones you can talk to us about, are what are the cool things that are going to be coming up. I mean, it's wild for me to say what cool things are Intel working on. And it turns out, it's going to be everything. Love to hear any public stories that you can share. 

REBECCA: Not everything, I hope. But certainly, it feels like almost everything that might be used to move data, store data, or process it is an area that we're engaged upon. I mentioned before, oneAPI, and sort of the methodology of really open sourcing and shifting the narrative on analytics. Super excited about that. 

We just went into production on our next generation of Xeon scalable processors, working very hard, in full BBT and partnership here, to bring up that next generation of compute, and general purpose, and memory-optimized instances, to make sure that our GCP end customers can take advantage of some of the new features in that processor. 

That processor has a secure enclave technology. That processor has enhanced crypto sets of instructions that will lead to a lot better processing for anything that does crypto, which is everything SSL handshakes, name your favorite flavor. Very excited to see how that scales in the ecosystem. 

Not to be processor-centric, but lots of cool stuff happening in the processor space this year, in particular. And then we're doing a ton of software partnership. So we're working together with GCP on images for HPC, for AI using TensorFlow. There's a whole partnership on GCP marketplace. So working on a couple of different containerized solutions that we can leverage and release there within the market space, so that folks can take advantage of some of the software solutions. 

I've spoken publicly at [? CMEA ?] and others about [? Deos. ?] [? Deos ?] is a file storage solution that has analytics optimized solutions integrated as well. Such a cool technology I highly recommend you at the [? Deos ?] overview that's been given in several open source forums. But very cool technology that, again, was started in deep partnership with Argonne. And then, we open sourced into the community to help do file storage in Cloud scale much more effectively. 

So all of those solutions, bringing them into GCP, so that they are fully optimized, ready to go, rather than somebody calling and saying, ah, something's not performing the way we want. Can we go to tune it? Making sure it's kind of the default tuned images. I think there's so much we can do to get better, stronger, faster in that domain space. And you'll see a lot more participation and partnership, I think, proactively in that domain from us. 

And then as we build out these enterprise-optimized solutions, so we've done a ton of partnership with the VMware solutions on top of GCP. We're partnering actively with Telco providers and taking some of the open solutions we've done in that space to bring the common workloads within Telco, FlexRAN, name your favorite flavor, on to standard x86 architecture, instead of having to require optimized Asics. Now those libraries, they can run that much faster, leveraging accelerators within the portfolio, whether ISA or on-board accelerators. 

So that whole-- QAT is an example of that, where we're partnering really closely with ISVs and key partners to bring solutions better and faster to market. So tons of stuff coming out. And I didn't even touch anything that we're doing in networking or storage, right? That's just software and processors. 

So there's a ton of work that we've been doing with Optane to try and make sure that there's more capacity in the market. There's so many things that are happening on the Coherent Express Link that, I think, will be interesting in the next few years. Maybe not quite this year, we won't necessarily see that much this year. But so much happening in the ecosystem, this year, in the next five years, and, I mean, even in the next 10 years, I think, we are only at the beginning of where Cloud end user journeys start to be solved. And we can reimagine anything is possible in all of our industries using this powerful tool of fully-optimized always available computation. 

EMMA: So I was at [? HotChip ?] this year, at the conference, and I was trying to catch up with the latest architecture changes and proposals. So I think a few years will be really exciting for the microprocessor industry, with really big architecture changes, and new instructions, new product, new processes. 

And people might think, OK, processors has been around for decades. And we are hitting the end of Moore's law. And it's actually not the case. And we are continuing to innovate and improve the products. And so today's conversation really emphasized that point. I really appreciate that. 

REBECCA: I think it's kind of amazing. One of the values of general-purpose compute is that it is everywhere. There will always be reasons to accelerate particular workloads if you have enough density of them. 

But what we just talked about in terms of always available, well-optimized computation, you need that everywhere. And so the trade-offs, when you're planning a business, of, again, how many petabytes you can analyze at what cost, you also think about where you need to be processed, and how much it's going to be up and available. And the trade-offs are always interesting, utilization versus optimization, and how do you do the right thing for your business. 

So I think general-purpose compete will continue to improve. We will see optimization and near siting of computation towards different components, both in networking, and storage, both in the ecosystem, as well, right? At collocation facilities that do more and more processing than they did historically, because of video processing and low latency demands. I mean, the entire world is just going to have an insatiable demand for computation. 

And we have to supply it, both in general-purpose forms and specialized forms across the board. But the key is going to be software. And it's going to be able to create end user experiences and reimagine those experiences to be effective at scale. 

MARK: I think my favorite part of, obviously, hearing about all the cool things that's coming up is definitely going to be the areas where all this is going to happen from people like Google and Intel, who are putting in all this great work to improve the quality of these processors and all the different infrastructure that needs to be done. So that people like me, who have no idea how any of this stuff actually works can just be like, yeah, it's going to be faster now. 

And I know that I trust Google. And I trust Intel to take care of it. We have had such a great time. Thank you so much for coming on, Rebecca. It's just been a fascinating conversation. 

REBECCA: Awesome, I love it. I'm always happy to talk with you. 

MARK: Once again, thank you so much to Rebecca for coming in. It was super, super awesome to hear from her. And yeah, I learned a lot. I mean, obviously, a lot of the specific details go right over my head. But I think it was really cool to hear about all the different things that Intel, of course, does, beyond just thinking about the processors and the chips. 

EMMA: It was great to hear about some hot topics like sustainability. 

MARK: And open source. 

EMMA: Yeah, open source, when a company covers wide variety of topics, we, as individuals, cannot possibly understand every aspect. So it was great to hear the overall summary, while it was pretty deep, from Intel themselves. 

MARK: Yeah, it was great. And of course, we're going to have plenty of links in the show notes, for people who want to read more. I think, especially about the case studies that they link to. But each of those, such a great example of businesses taking a look and making the decision, OK, great, obviously, we're going to do Cloud. Cloud's cool. 

But we might have on-prem. We might have hybrid. Whatever that world's going to look like, whatever is right for that business, and then seeing the kind of impacts that it made to choose Google Cloud and Intel. Of course, hooray, Google Cloud. But of course, there are some really, really cool stories in there. And I'd love to hear about it. 

Super excited to have, of course, had that conversation. And looking forward to hopefully having some more. It'd be great to hear more about all the different things that they're working on. Because like you said, it's really impossible to cover that much content in just a quick 40 minute interview. 

EMMA: Yeah, I actually have more questions than I did before the interview. 

MARK: And that's how they really let us open up our minds into some new things. So looking forward to hopefully having Intel back on at some point this year. But thank you so much again, Rebecca, for coming in. Definitely learned a lot. And hopefully, of course, our listeners all enjoyed listening to it as well. 

EMMA: Yeah, thank you very much. It was great. 

MARK: Well, before we wrap things up here, Emma, we haven't talked to you in a while. I think the last time we talked with you is almost two years ago now, for your world breaking record of the number of digits of pi calculated. I'll put the episode link in the description. 

EMMA: And actually, somebody calculated 50 trillion digits. So ours is not a world record anymore. 

MARK: What's next? Of course, it's going to be 100 billions. 

EMMA: 100 trillion digits, of course. 

MARK: Trillion, trillion digits, yes. So what else have you been working on in the meantime? Certainly not just crunching the numbers for pi. 

EMMA: So we actually had new release this year on January 12. So we know Ruby on Google Cloud Functions. So you can run your serverless Ruby core on Google Cloud Functions. It's supports Ruby 2.6 and 2.7. And we are working to support other version as well, including 3.0. 

So it's one of the developer relations jobs to support these programming languages in client libraries and user-facing PCs of Google Cloud. So we write code for Python, Ruby, PHP, Java, Go, anything you can name it, it's part of developer job. 

MARK: Yeah, and, of course, with these new versions, it's always exciting to not only get the new features that whatever the new versions are going to have, but also to make sure that you stay up to date with all the security. Right, because, I mean, now, especially, it feels like every day there's going to be more and more security vulnerabilities for these older languages and frameworks. So staying up to date is absolutely worth the time. 

EMMA: Yeah, and it's just faster. So if you migrate to a newer version, it usually contains some performance boost. So newer versions of Ruby, of course, even the operating system, or middleware, anything, they work to improve the performance. So it's always great to stick to the latest versions. 

We have opinions, sometimes. But it's well worth it to stick to the upstream version. If you have any feedback, bring that to the upstream version. Get involved in the development process. Make sure your voice is heard, as well. 

MARK: Absolutely, and, of course, like Emma just said, we'll put the link in the show notes for anybody who wants to read more about it. But go check it out. And if you-- I don't get a chance to play around with Ruby often enough. It's been quite a while. But it's always really exciting to see all the new features. 

Awesome, well, Emma, of course, thank you for joining me today. And thank you for joining us with this awesome conversation with Rebecca. Definitely super excited about it. And for all of our listeners, excited to see you all next week. 

EMMA: Yeah, thank you very much for having me. And It was a pleasure to talk with Rebecca. I'm looking forward to hear more about Intel and other Google Cloud news this year. 

[MUSIC PLAYING]