+++
audioDuration = "00:39:54"
audioFile = "Google.Cloud.Platform.Podcast.Episode.96.mp3"
audioSize = 57684147
categories = ["Customer", "Storage"]
date = "2017-09-27T01:07:49Z"
description = "Avere provides high performance file system solutions for hybrid cloud infrastructures, and is partner for Google Cloud Platform. To tell you all about it we are joined by Scott Jeschonek, Director of Cloud Products at Avere, and Dave Elliott, Developer Advocate at Google Cloud Platform."
draft = false
episodeNumber = 96
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Avere with Dave Elliott and Scott Jeschonek"
image="/images/post/avere-logo.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/Sw5dKd6vpBG"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/72szg9/episode_96_avere_with_dave_elliott_and_scott/"
+++

Avere provides high performance file system solutions for hybrid cloud infrastructures, and is partner for Google Cloud Platform.

To tell you all about it [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/Neurotic) are joined by
[Scott Jeschonek](https://twitter.com/scott_jesch), Director of Cloud Products at Avere, and Dave Elliott, Developer Advocate at Google Cloud Platform.

<!--more-->

##### About Scott Jeschonek

[Scott Jeschonek](https://twitter.com/scott_jesch) is Director of Cloud Products
at Avere Systems, a leading provider of enterprise storage for the hybrid cloud.

Scott has spent his past 20 years synthesizing his enterprise, telecommunications
and vendor experience together to provide a unique perspective to the implications
of the cloud phenomenon.


##### About Dave Elliott

Dave Elliott is a Developer Advocate for Google Cloud Platform.
In this role he engages communities to inspire them to try new products and
technologies, embrace new ideas, and he is the voice of those communities
to product and engineering teams.

Prior to Google, Elliott was a Chief Cloud Evangelist at Symantec where he
advocated for new architectures in data and storage. Mr. Elliott was an early
advocate of cloud computing while at Sun Microsystems in the 1990s and has
spent his career helping companies understand and embrace emerging technologies. 

Prior to Symantec, Elliott served as GM Americas at Arkeia Software, an innovator
in data protection for virtual and cloud environments. Earlier, Mr. Elliott
was responsible for Strategic Development for Iomega Corporation’s PSS
Business Unit, and held positions at Blue Martini Software and with management
consulting firm A.T. Kearney.   Mr. Elliott holds an MBA from the University of
California at Berkeley and an BA in Quantitative Economics & Decision Sciences
from the University of California, San Diego.

##### Cool things of the week

- GCP arrives in South America with launch of São Paulo region! [announcement](https://cloudplatform.googleblog.com/2017/09/GCP-arrives-in-South-America-with-launch-of-Sao-Paulo-region.html)
- Announcing IPv6 global load balancing GA [announcement](https://cloudplatform.googleblog.com/2017/09/announcing-ipv6-global-load-balancing-ga.html)
- Read between the lines with Cloud Natural Language’s new recognition features [blog](https://cloudplatform.googleblog.com/2017/09/read-between-the-lines-with-Cloud-Natural-Languages-new-recognition-features.html)
- Classifying text content with the Natural Language API [big data blog](https://cloud.google.com/blog/big-data/2017/09/classifying-text-content-with-the-natural-language-api)
- Google Cloud Dataprep is now a public beta [big data blog](https://cloud.google.com/blog/big-data/2017/09/google-cloud-dataprep-is-now-a-public-beta)

##### Interview

- [Avere Systems](http://www.averesystems.com/)
- Subnetworks [docs](https://cloud.google.com/compute/docs/reference/beta/subnetworks)
- Virtual Private Cloud (VPC) Network Overview [docs](https://cloud.google.com/compute/docs/vpc/)
- [#40 Rodeo FX with Alan Fregtman](https://www.gcppodcast.com/post/episode-40-rodeofx-with-alan-fregtman/)
- GlusterFS [gluster.org](https://www.gluster.org/)


<div style="text-align: center">
  <a href="http://www.averesystems.com/"><img src="/images/post/avere-logo.png" style="margin: auto; max-width:300px"></a>
   <p style="font-size:0.8em">averesystems.com<p>
</div>

##### Question of the week

Container Builder seems pretty cool … but how do I get started?

- Google Cloud Container Builder [Documentation](https://cloud.google.com/container-builder/docs/)
- [#79 Container Builder with Christopher Sanson and David Bendory](https://www.gcppodcast.com/post/episode-79-container-builder-with-christopher-sanson-and-david-bendory/)
- Google Container Builder youtube series by Carter Morgan
  - [Google Container Builder, Part 1 (Cloud Rolling Update)](https://www.youtube.com/watch?v=iXvFhwpgitM)
  - [Google Container Builder, Part 2: Multi-Step Builds (Cloud Rolling Update)](https://www.youtube.com/watch?v=R-ert7AaWEQ)

##### Where can you find us next?

Francesc will is presenting at [Google Cloud Summit in Chicago](https://cloudplatformonline.com/summit-chicago-2017-schedule.html) today and
just released a new [#justforfunc](http://justforfunc.com) episode on [justforfunc #20: code reviewing ursho (part 1)](https://www.youtube.com/watch?v=SWKuYLqouIY).
In October, he'll be presenting at [Velocity London](https://conferences.oreilly.com/velocity/vl-eu), [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html) and [Devfest Nantes](https://devfest.gdgnantes.com/)

Mark is attending [Strangeloop](https://www.thestrangeloop.com/).
He is also heading to Australia in October for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).


{{< transcript "FRANCESC: Hi, and welcome to episode number 96 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I am well, Francesc. How are you doing? Currently in the city of Austin, actually. 

FRANCESC: Nice. You're in the city of Austin. I'm in San Francisco. And you're wearing a beautiful ladies is gender neutral T-shirt. I saw that on Twitter, and it's a beautiful T-shirt. 

MARK: I am wearing that T-shirt. It's my favorite ladies' T-shirt. 

FRANCESC: I was going to ask how many you have, but that's up to you. So I will not judge. Anyway-- 

MARK: Well, ladies is gender neutral, so all my T-shirts are ladies' T-shirts. 

FRANCESC: True. That's a very good point. It's a very good T-shirt. 

MARK: There we go. 

FRANCESC: I really like it. Anyway, we'll have a picture on the show notes-- maybe not. 

MARK: Or just follow me on Twitter. 

FRANCESC: Yeah. So today, we're going to be talking about something quite cool that actually I did not know anything about. It is Avere, and it's a hybrid file system for the clouds-- with an S, I'd say. 

MARK: Yeah. We have both Dave and Scott joining us on the show, one Googler, one from Avere, basically talking about how you can build hybrid file systems that span both on-prem and the cloud. It's actually really, really cool. 

FRANCESC: Yeah. Very, very interesting episode. And after that, we'll have a question of the week. And the question of the week is, OK, I've heard that Google Cloud Container Builder is cool. How do I get started? Is there some tutorial that I could go through? And the answer is actually yes, and we'll answer that later. 

But before that, we have our cool things of the week. 

MARK: Yes. 

FRANCESC: And we have a lot of them actually. I'm going to start with the first one, which is something really cool. So we have a new region in South America, and it is in Sao Paulo. So if you're in Brazil, congratulations because now you have a very, very close-to-you region. And it is really cool because it's going to be a big thing to celebrate in the Google Cloud Summit in Sao Paolo, which, if I'm not mistaken, is next month. 

MARK: Are you going to be there? 

FRANCESC: No, I will not be there. 

MARK: Aww. 

FRANCESC: Probably not because I have other plans, other trips. But according to this, it's November 8 and 9. So if you have not registered, try to find it. Actually, we'll have a link on the show notes to the registration form. But otherwise, just find Google Cloud Summit Sao Paolo. 

MARK: Awesome. The second one is one of those things that I just know for how long people have been like, when are you going to have this? When you going to have this? When you're going to have this? So now we have IPv6 on our global load balancing. It is now GA. 

FRANCESC: Nice. 

MARK: You can go nuts with all your IPv6 needs. So global load balancer is our load balancer that spans the globe, which is awesome. So now you can do load balancing for HTTPs, subproxy, TCP proxy, all the good things. Pretty excited now that we can finally do all that stuff. 

FRANCESC: Cool, cause IPv4, we're running out of IPv4 addresses this year, right? Is it the same time as the year of the Linux on the desktop. Or is it a different year? 

MARK: Every year is the year of the Linux desktop. 

FRANCESC: Exactly. And it's every year we run out of IPv4. OK. And the next one is about Cloud Natural Language API. And it is pretty interesting because it's basically the one that allows you to extract knowledge from text, basically. I think that's a decent way of putting it. 

MARK: Yep. 

FRANCESC: And what it's doing now, it's actually able to classify the context of the text. So if you are looking for something and you have the word lobster, right. Lobster, when you're talking about lobster and potatoes, that's probably cooking. But if you talk about lobster and maybe rocks and stuff like that, maybe you're actually talking about biology. So this new feature, what it allows you to do is to extract that context of the information, which is something very useful. 

MARK: Yeah. It's really cool. We've actually got two articles we're going to talk about here, one of which just sort of goes through the new things. So it's got classifying content. It also has more sentiment analysis on entities, so you can get some good ideas about the idea of what sort of tone people might be using. 

But the second article actually has example code in it. So you can go through and see like results from JSON and how you can interact directly with the API. So we'll have both of those linked in the show notes. 

FRANCESC: I really like that the example for the context detection is something that I would not be able to reply because I have no idea of American sports. But it says Rafael Montero shines in Mets victory over the Reds. I have no idea what that means. That's team sports, baseball. 

MARK: The game of baseball. 

FRANCESC: I have literally no idea. So it is good. It's an API that is more useful than myself, which is always good. 

MARK: Awesome. And finally, last one, Google Cloud Dataprep is now a public beta. So you may have seen the announcement back in March where we announced it as a private beta. But basically, it is a visual way that you can look at data stores and big data sets that you may need to clean up or modify or be able to look at and do transformations on, but doesn't necessarily require a programmer interface. So basically, for analysts, things like that, who want to be able to do it directly through a UI, it's actually looks really cool. 

FRANCESC: Yeah. Isn't this what we saw as a solution at some point to show really fancy way of showing billing information? I think is based on [INAUDIBLE] in BigQuery. 

MARK: I think you're talking about Data Studio, which is the visualization. 

FRANCESC: I keep on mixing those two, and I feel like maybe we should have someone from those teams come explain that. 

MARK: Absolutely. 

FRANCESC: So if you're a project manager or an engineer from Cloud Dataprep or Data Studio, please come talk to us. 

MARK: Yes. We would love to have you on the show. 

FRANCESC: Cool. So that was all of the cool things of the week, or actually the cool things of the week that we had time to go over. 

MARK: Yep. 

FRANCESC: And I think it's time to go and talk to our friends from Avere and Google Dave Elliott and Scott Jeschonek. 

MARK: Sounds good. Let's go do that. 

Today, I am very excited to have Dave Elliott, developer advocate for Cloud Platform at Google, as well as Scott Jeschonek, who is the director of cloud products at Avere Systems. Thank you both for joining us. How are you doing today, Scott? 

SCOTT: Doing great. Thanks for having us. 

MARK: And how are you doing today, Dave? 

DAVE: Fantastic. 

MARK: Excellent. Thank you so much for joining us today, have a chat about Avere Systems, the stuff that you build on top of GCP, some of the products you have and how they came about. But before we get into that, why don't you tell our listeners a little bit about yourselves? Dave, why don't you go first? 

DAVE: Sure. So I'm a developer advocate here with Cloud Platform. Been with Google for about four years. My background is storage and networking, and I spend most of my time now working with companies, in particular enterprises that are looking to adopt cloud, and in particular looking at adopting cloud and storage solutions. 

MARK: Awesome. Scott, why don't you tell us about yourself? 

SCOTT: Hi. So yeah. I am the director of product management at Avere, specifically for our products and our software roadmap. I've got a varied background in IT as well as telecom, software products, and most recently at Avere systems with storage. 

FRANCESC: Cool. So now that we know who you are, let's talk a little bit about Avere. What is Avere, and what do you do? 

SCOTT: So Avere is around nine years old-- eight, nine years old. And when we originally started the product line and the company, . it was to address performance and latency issues with Network Attached Storage. Let's say you were creating a movie and you wanted that movie to be rendered in a certain period of time, and you created a render farm and you have, whatever, 1,000 servers sitting there, well, those servers are going to beat the crap out of your Network Attached Storage. It's inevitable, especially back then because Flash was still really expensive and hard to really come by for those solutions. 

Over time, we evolved our solution of our data center product and started adopting cloud technologies. Specifically, if you wanted to create, for example, a render farm in the cloud and you wanted to orchestrate that and run that against some data that's sitting wherever, Avere provides the technology, the caching technology, data access technology for that. 

But we also support abstracting a POSIX file system on top of Google Cloud Storage. So if you have applications that you want to run and you want to put all the data up in the cloud, but you really need those POSIX bits and you need to manage it as you did before, Avere gives you that continuity. 

MARK: So is this just a cloud solution? Is this something you could run on-prem? Where does this thing actually sit? 

SCOTT: Great question. So it can be both. We have customers today, very large studios in Hollywood, that do a lot of rendering, and it's all on-premise. But we have other customers in that space who have started to break up their data center clusters and are looking at running in GCP. A lot of the reason that they want to do that is it's far more flexible. They don't have to own so much hardware on-prem. Especially, a lot of these guys have sort of capped out as to how much they really want to put in a data center. So having GCP, especially being able to take their existing workflows and putting them up there, is a real advantage. 

So we run both on-prem, and we ported our appliance into GCE instances that can run in GCE adjacent to whatever workload that you're running. 

MARK: Cool. It sounds like it's either on-prem or on Google Cloud. Is that the case? 

SCOTT: That's right. Or both. You can plug them in both. We're like the Swiss army knife of data access, basically, when it comes to that kind of thing. 

DAVE: Yeah. That's a part of the beauty of what they offer and how they help our customers approach and sort of realize hybrid cloud. If you think of your compute instances in the cloud, your compute instances on-prem, your storage in the cloud-- say with GCS-- and your storage on-prem, what Avere helps companies do is sort of move between those four entities, those four types of computing storage. 

FRANCESC: We say that we are able to have storage that is issued in between the cloud and on-premise. Does that mean that you're connecting through VPN? Does everything need to be in the same network? How does this work? 

SCOTT: Yeah. So great question. So if I were a truly developer in our team, I would say it depends, and depends on all the variables. So typical use case is going to be, we're going to recommend that you're using a gigabit-per-second link over the network because a lot of our customer base, they're not doing really small-scale stuff. They're doing some pretty serious uploading and processing of data. So laws of physics, you want to make sure that that data gets there as quickly as you can. 

VPN over the internet is a little tricky because we're then at the mercy of whatever latencies the internet provides. One of the things that our product really strives to do is be a killer of latency when it comes to workloads. So if we're running 1,000 VMs in GCE, I can't afford to have latency bogging down that job. And so we typically want to have a link behind us that is sufficient enough to get as much data into our layer as we can. 

Oh. And you also asked about network. So from a GCE perspective, you're going to run the Avere cluster, and we only run clustered. You're going to run that in a subnetwork-- not a classic subnetwork, but a regular subnetwork in GCE-- with your compute nodes. 

MARK: And does Avere encrypt the traffic through, or what is the security side of things here? 

SCOTT: Well, so it's twofold. One, if you're using this as a data access layer with your NAS back on-prem-- so that's one of the typical use cases. I may have a NetApp or an Isilon environment, and I just need to get to some subset of that data. We're going to tell you-- and we have written this all up in best practices-- that you're going to want to secure your link between your data center and the Google network. And it wouldn't matter if you were just using us or you are using any of the Google services that require that kind of interaction. We don't encrypt that. We would expect that to be encrypted. 

But, since we also can use GCS as backing storage, which is kind of an interesting twist-- we basically treat GCS as block. We become the NAS for that. That's all SSL encrypted, as well as the data being encrypted at rest. 

FRANCESC: Cool. So here at the podcast, we are firm believers in open source. So I'd like to know, is this open source? Is there something that we can check out, the code and stuff? 

SCOTT: Open source, being a vendor-- such a struggle. So look, I'll tell you what we did do. One of the things about our product, since it's clustered, the core code itself is proprietary because it's highly tuned for caching. We do a lot of complex read ahead and write behind. I always kind of liken it to putting rocks in a raging river and trying to steer the data or steer the water in a certain way. It's very difficult to do, and you never know what's going to happen downstream. So that's really complicated stuff. 

But, to manage and set up the cluster, especially if you're a developer and you're looking to create an orchestration pipeline, we created a Python library that we've put up in GitHub. We'll give you the URL to it. It's no problem. And as long as you are able to access our image, which is simple as reaching out to Avere and asking us, we can grant you evaluation access to the code. 

And this Python library, you can pick your poison. You can either import it into your Python logic-- that's fine-- and create clusters of our product pointing at your Network Attached Storage back on-premise. As long as you have the IP address of the export, this can all be done very easily. And we also created a wrapper Python for that. So basically, with one line, you can set up the entire cluster fully configured, ready to go. 

DAVE: I will say, from a Google perspective, you have some options if you're looking at file services. You can use our single node filer. There's some limitations, actually a fair number of limitations on that. Also, we support cluster. So if you truly are looking for an open source solution, some of the challenges there are really around configuration management of large clusters. Or you can use a commercial partner. Avere is our go-to partner for these file services. 

FRANCESC: Great. We actually discussed on episode-- let me try to remember-- episode 40. That was very long time ago. We interviewed Rodeo FX, and they were talking about how they were using GlusterFS. Would you say that Avere is like a more managed and all ready-to-use version of GlusterFS. What are the differences? 

SCOTT: Oh, yeah. So I'm going to make it hypothetical even though what I'm saying is directly related to a customer, OK? 

FRANCESC: OK. 

SCOTT: So we have a customer, there in the render space, they build with Gluster. The reason they did it, which is a reason a lot of folks do it, is well, first of all, if you're a developer and you're good at what you do, you just want to get what you need and move on. And that's one of the advantages of open source. I go get Gluster code and go run it, and I'm done. 

But it's never as simple as that when you start to introduce it into a complex environment like a render environment where latency is an issue, long-term maintenance is an issue. You're getting chased by angry artists and angry studio people that want the latest scene rendered now, and there's an issue with Gluster open source that you can't figure out. So you have to take ownership of a lot of stuff there. 

The question that I always put back-- and this will sound salesy for the developers, I apologize, I'm not in sales-- is, is that your core business? Is storage and performance of storage your core business? No. It's rendering movies. So the faster you can render a movie, whether you're using commercial products, open source, or a combination of it, the better off for the company. 

So I would say where we're different is, first of all, you can have a cluster of our product up and running in about eight, nine minutes using that Python code, ready to go serving ops. You can plug in storage from on-prem, which, with Gluster, you really kind of can't do that. You can have a mount point, but you're going to be at the mercy of whatever the latencies are of that link. And then ultimately, with Gluster, is it HA? Are you going to have redundant storage? And your costs are going to go up from what you think is going to be a relatively inexpensive solution. 

Once you start trying to scale it with 500, 600 VMs, you're quickly going to find that Gluster just can't keep up, and you're going to need something. Either you're going to have to build on top of Gluster your own custom environment, which again puts you in a different business, or you look for a commercial provider. 

MARK: Cool. So let's swing back around to sort of developer experience and how that works. So I'm kind of curious as well. You said there's a POSIX file system. I've got two questions. One, so this essentially means that I can interact with this once it's all mounted and set up, basically like a local file system, and then you'll handle all the latency? And the other question. I'll take on to that is, does this work in both directions? Can I go from cloud to prem and then prem to cloud? How does that work? 

SCOTT: Absolutely. So to answer your first question, from a developer perspective, you have Google Cloud Platform with a lot of fantastic technologies. All the machine learning in TensorFlow and the microservices capabilities, that's all exciting, and it's sort of like you're starting to think about how can I develop with all these new tools and what value can I drive in the company with these new tools. And that's great, and that your next cycle. That's what you're building towards. 

But then you have this whole host of applications today, and I'm going to exclude database applications just because, if I were using a relational database, I'd go put it up in Google's relational database product and be done with it just to make my life simpler. But let's just think about file-based applications that you have. So let's say their business mission critical, can't really tear them down and reauthor them. They're six, seven years old, and they've just been working. Do you really want to break that? 

Well, why do that? Just go run it up in Google, run it on some VMs or some containers. And we just present a mount point. So you just mount that export, and you're ready to go. That's the easiest way to look at it from a developer's perspective is, do I want to spend time rewriting a lot of things that I don't need to and therefore delay my entry into cloud because of all of that? Or do I want to just-- I'll slam them up there into the cloud, use the exports through the Avere, and then I can go work on these other new and interesting things while that stuff's just doing what it used to do? 

MARK: And so the second question, which is, can I go in both directions? 

SCOTT: Thanks for reminding me about second question, which I totally forgot about. 

[LAUGHTER] 

Yeah. So let's say you're using our physical appliance. One of the use cases with our product, especially in life sciences-- so like all the genetic sequencing companies-- they're creating amazing amounts of data, petabytes of data. They've got to put it somewhere, and so they're all looking at putting it up into places like Google Cloud Storage. But the problem that they all run into, especially in that particular space, is all their pipeline applications, everything they use to do alignment and variant analysis and everything, they're all file-based. People are rewriting some of them, but it's the same problem again. Is that my day job? Do I have time to stop people using the classic tool to get this new tool and then I have to spend six months debugging it, or can I just put the stuff up there? 

And so Avere allows you to put it into Google Cloud Storage, but we put it there in a way that allows you to see it as POSIX. And when I say POSIX, it means a directory structure, the standard POSIX bits, and we also do it in a sharded way so that you don't have to worry about multipart gets and puts or having to get the entire file out of Google and pay the egress charge. 

FRANCESC: Cool. So I don't know if it's my jet lag or just like I've missed something, but I'm curious about, where do you actually store this information? Is it stored in GCE instances? Is it stored in cloud storage and persistent disks? Where does this information actually live at the end? 

SCOTT: It is not your jet lag. It's a completely legitimate question. Everybody asks us. So one of the things to think of us as-- and when people ask us what we really do, I say we basically facilitate access to data and we do it at a high-performance level. The data itself resides on your NAS. It resides in your GCS bucket. The only data that resides on Avere is any data that has been requested by clients for the latest job. So it's basically a cache. 

We also leverage local SSD technology in Google, which, by the way, Google's local SSD facility is fantastic. We get great performance out of it. We also do support the persistent SSDs, but you get an upper bound of throughput on the persistent SSDs. So if we want to max out performance, we use local. But again, it's only transient data. It goes away when you're done. 

DAVE: Yeah. I'll say Avere systems, these are file system experts. And the caching algorithms that they've developed over their seven years are unbelievable, best of breed or best around. So it's a scenario of, because they've got these fantastic caching algorithms, it makes latency and performance just that much better. 

FRANCESC: Cool. So my next question is, since Mark was asking about the directions of the mappings and if I can basically get like Google Cloud Storage as POSIX systems on my instance, can also map the same folders into multiple instances? 

MARK: Like multi-read, multi-write? 

FRANCESC: Yes. Is Avere a good way of communicating across many different machines, or is it more a place where you basically just use it to store stuff that is being used by one single worker? 

SCOTT: Ah. Good question. The sweet-spot use case, if you think about it, is I'm going to run a render farm. I'm going to run a post sequence in genomic analysis to cure some disease. I'm going to do Monte Carlo simulation in financial services so I can squeeze more money out of my fund. Those are all things that run thousands of machines. And typically, those machines are going to come up, and they're going to all read some sort of common set of data. And that is tailor made for caching. 

So where we really shine in terms of technology is if you have an HPC cluster or a compute environment and you've got a lot of nodes demanding data from some storage that is simply not going to be able to keep up with it. We do support writing the data out, so you can do your render and then write out your results. And we cache those writes as well, and that gives you performance on that side of it. 

From the sort of single client accessing a folder kind of use case that you mentioned, that's really the domain of something like a single node. I mean, it just depends on how you're going to use that particular technology. It's not that we can't support a single client doing it. It's just that we're really built for the high-performance space. 

FRANCESC: Just to dig a little bit deeper, let's imagine that we have, as you're saying, a lot of workers that actually are reading the same piece of data, and then somehow there's another worker that updates that. What you're saying is that you're going to manage the caching validation across all of the places where that information might have been cached, and that will be transparent to the user? 

SCOTT: Yeah. And just to be clear, that's within one of our clusters. So a cluster can be three nodes, and three-node cluster can service-- I don't know-- 500 n1-highmem-4s or highmem-8s. So it's not a small environment. But you can run 20 nodes, 23 nodes, 24 nodes of our system, and that is a tremendously large-scale operation that you'd be running there-- 65,000, 70,000 cores. But every write gets cached, and every read gets cached for all the clients. 

And the writes are always protected. So if somebody writes something and somebody else wants to read it, they're going to read the latest. If somebody tries to write on that write, then that'll all be tracked and modified and updated accordingly. 

MARK: Cool. I have no idea what the answer to this question is going to, but I'm curious. So we're big fans of Kubernetes, and it's been a hot topic about how to data inside particularly containers in Kubernetes. Is there a plug-in or basically a way for using Avere technology to do persistent volume claims or basically store lots of data so you can do HPC workloads on Kubernetes? 

SCOTT: Yeah. So I looked into this. I also looked into Hadoop. Just to diverge for one second from Kubernetes, if you're using Hadoop and you're not married to HBase and other, like hQuery, as part of your toolchain, and you'd be able to use your Hadoop job as a file-based job, you can actually do something I call hybrid Hadoop, which is basically run a Hadoop cluster in GCE using Avere access layer against your NetApp. 

On Kubernetes, I mean, I'm a little torn. Because in terms of Kubernetes, if you have tiny, small data slice and you're a very sophisticated developer and you're able to place that little slice of data just so in each container, that's really fine. I mean, you can go ahead and use that. But if you want, you can use Kubernetes containers with an export, with an NFS export mount point. So there's no reason why you couldn't bring up lots of containers pointing at an export and consume the data from that export just as you-- 

MARK: So that's actually, you hit the lead there a little. So you've also not only got your own sort of maybe FUSE technology or something like that, but you expose it as something like NFS or other standard sort of file mounting solutions. So that if you have existing tools, it's super easy to just get those up and running with Avere. 

SCOTT: Yeah. Actually, you just raised a critical point. This is not FUSE. So FUSE is a little tricky because it's user space. It's got an upper bound of performance. If you just need to do some basic stuff with FUSE, I'm never going to argue against it, but it's not really meant for high-performance, sophisticated workloads. The stuff we wrote is grounded in very, very fundamental code that, unless we all mutually sign some NDA, I can't really say what it is. But whatever. 

MARK: Yeah. It sounded like you have like an NFS mount, basically standard, file-sharing-type protocols seem to be supported by Avere. 

SCOTT: Yeah. So the front end of our product basically presents NFS or CIFS. And if you're using GCS object as the backing storage for it, it can actually support multi-protocol out the front. And it integrates with Active Directory and everything else. 

DAVE: So yeah, Mark. Maybe we did bury the little bit on there. Really, the two use cases we really talk about with Avere, one is this killer latency because they've got the great caching algorithms. But the second is really that translation layer for folks who want to use those file-based services, who rely on NFS or SNB to be able to begin to move to our cloud. 

SCOTT: And just as a side note, some small render farms and studios, their workflows are based on SNB CIFS, and so we give them that luxury of using that as well. 

FRANCESC: Cool. So now I'm curious a little bit about whether you can talk about some of your customers or cool use cases that you have seen. What kind of use cases? We mentioned rendering. What other things you've seen that were powered by Avere? 

SCOTT: Sure. So taking it along the same line as anybody with a lot of need to read a lot of common data at a low latency, we have a lot of interesting use cases in-- I always say like Hollywood, health, hedge funds. For some reason, those are really sweet spots for us. But we also work in the oil and gas space, so you've got a lot of geologic analysis surveys that are very read intensive. You'll hear me emphasize read, but just so that I'm clear, we also had ingest use cases. 

So for example, somebody I cannot possibly name nor ever will name somewhere in the eastern part of this country takes a lot of pictures, and those pictures are being stored in very deep storage. And that ingest has to happen at a certain high rate, and we're talking about larger files here so that it's clear. And so, especially on our physical product, we do a lot of write caching, and we have NVRAM cards built into our hardware. So we're able to more quickly ingest and acknowledge those writes quickly. 

And that's another important point from a developer's perspective. If you have a pipeline that depends on receiving an ACK from the protocol level, Avere does the ACK immediately after receiving the write and caches that write across partners. So let's see-- video ingest, transcoding of video, rendering farms, bioinformatics. Name it. I mean, pharmaceutical, biological analysis, those are all places that we play. And we also sell to colleges. 

DAVE: Right. And the combination of being able to leverage things like, on the compute side, preemptable VMs, the cost of spinning up thousands of cores and using them for rendering or for hedge fund trading or things like that-- simulations-- it really is a game changer. That really is, I would say, probably the single biggest killer use case. It's the latency killer and enabling GCE compute instances that are wildly scalable, highly available, and super, super low cost. And that's where it becomes super, super interesting. 

FRANCESC: Cool. So we're kind of running out of time, but I had one last question, which is, what's the best way to get started? 

SCOTT: www.averesystems.com. You can always reach out to me, and my contact information is probably going to be posted. 

FRANCESC: It will. 

SCOTT: Yeah. 

[LAUGHTER] 

And I can put you in touch with the right folks, but it's really not that difficult to get started with the cluster. You can go out to GitHub today and get the Python library and have a look at what we're doing and what we base it on. And that's the easiest way. 

MARK: And is there anything we haven't managed to cover? You want to plug any events or any special stuff that you think our listeners should know about Avere? 

SCOTT: Probably the next place that we're going to be is at the Google Summit on September 27 in Chicago. I will actually be taking on booth duty. So feel free to stop by the booth, and we can certainly talk. 

DAVE: And I'll just add that Avere Systems actually was the GCP Technology Partner of the Year a couple of years ago, and we have ongoing engineering alignment. So you'll see better and better and better solutions with the two of us as we go forward. 

SCOTT: That was your wink and nudge, right? 

FRANCESC: Awesome. Well, thank you so much to both Dave and Scott for taking the time today to talk about Avere and all the cool things people are building with it. 

SCOTT: Thank you, guys. Thanks, everyone. 

DAVE: Thank you. 

FRANCESC: Thanks so much again to both Dave and Scott for such an interesting interview. I hope it was fair for me to ask about GlusterFS, but I feel like it is really interesting that there's so many different options to provide file systems that are over the cloud plus your own computers. And it's important to be able to make the difference. And, you know, loved the answer. 

MARK: Yeah. Super interesting stuff. Same thing, again. being able to scale up with your compute and your storage across on-prem and cloud I think is very impressive and also highly useful for a bunch of workloads. 

FRANCESC: Yeah. And I'm going to do a shameless plug for ourselves and say that if you want to learn a little bit more about similar use cases, we interviewed Rodeo FX, which is the visual effects studio that does really fancy things. Among other things, they do things for "Game of Thrones" and "Deadpool" stuff. And they talk a little bit about how they use the cloud plus their premise. And they do use GlusterFS. They did not use Avere, but it is still a very interesting use case. So if you want to check that out, it was episode 40. Long time ago, that was in 2016. 

MARK: Awesome. Yeah. Definitely check that out. That was a great episode. So why don't we get stuck into our question of the week? You set things up nicely, but I know you have good answers. So we were talking about Container Builder. Basically, I want to build some stuff in the cloud using Container Builder, but I don't know anything about it. Where do I get started? What can I do to learn more about this thing? It seems really cool. 

FRANCESC: Yes. So the question was really cool because the question actually comes from someone yesterday at the GO meetup that took place in the Docker office here in San Francisco. 

MARK: Nice. 

FRANCESC: And they were talking about the newest features of Docker. And one of the cool things that are coming but still not in the stable release is multistage builders. And multistage builders are super cool because they allow you to basically do the typical things we do with a Makefile, which is you use a container with all of your compilers and all the developing tools. And then, out of that, you generate a binary that then you put in a different container. And normally, we usually do that with a Makefile. At least, I'm sure that you, Mark. do that with a Makefile. 

MARK: I would definitely do this with Makefile, yes, yes. 

FRANCESC: For sure. So now you can do that with just one Docker file, which is very useful. And they asked me, so how do you use this? Do you upgrade to the latest version? And my answer was actually no. Actually, you can use this directly on Container Builder, which is super cool because, first of all, you don't make your machine work too much because the building process itself will happen in the cloud. But also, you get the newest features of Docker before they're actually on stable because they basically pick the best features in order to have them there so you can experiment with them, which is really cool. 

So the question after that was, OK, cool. How do I use this? How do I get started? And of course, the first answer is read the docs. Read the manual. And we have a link to the docs. But if I'm not mistaken, it's cloud.google.com/Container-Builder. But anyway, we'll have a link in the show notes. 

The second thing that you can do-- and it's the second shameless plug of the episode-- is that we actually did an episode with Christopher Sanson and David Bendory, which are product manager and one of the software engineers in the Container Builder team, where they told us everything about Container Builder. And that was on episode 79. 

Now, the thing I didn't know that I discovered because someone sent it to me via Twitter was that our dear friend and coworker Carter Morgan has a series on YouTube about Container Builder. 

MARK: Nice. 

FRANCESC: And there's two videos already, and they're really good. The first one is basically an intro to Container Builder plus how to do cloud rolling updates directly for Container Builder, which is super useful. And the second one is on how to use, not multistage builds, but multi-step builds, which is not exactly the same thing. 

MARK: Oh, cool. 

FRANCESC: Yeah. It's not exactly the same thing. It's basically more like when you want to do go vet and go test and then go build and then send that to a container and then that container should be deployed somewhere else. Those are multiple steps that are not necessarily related to Docker. Multistage build is inside of a Docker file. So not completely the same, but very related. 

MARK: Nice. I love Container Builder. For a long time, I was kind of confused about it. I thought it was a thing to build containers, but then I realized it is actually a thing that builds things with containers. 

FRANCESC: Yeah. 

MARK: Which is a flipping mental thought. 

FRANCESC: Slightly ambiguous naming, yes. 

MARK: Yes. 

FRANCESC: But great product nonetheless. 

MARK: Excellent. All right. Well, before we wrap up, Francesc, you going anywhere or doing anything interesting? Is there a "Just for Func" we should know about? 

FRANCESC: So by the time this comes out, there will be a "Just for Func." That will come out on the 25th. And also on that day, I will be flying to Chicago because, on the 27th, I will be speaking at Cloud Summit Chicago, and I'll be presenting about TensorFlow. 

MARK: Nice. 

FRANCESC: Very excited about that. Yeah. And after that, as I said before, there's going to be a bunch of events. I'll be at Velocity London. I'll be at Cloud Summit Paris, and I'll be in Nantes, all of that, the same day basically. I'll be there from basically October 17 to the 20th. There's going to be four days where I'm going to be speaking every single day in a different city. 

MARK: Nice. 

FRANCESC: Fun. Yep. What about you? 

MARK: When this episode comes out, I will be actually on a plane going to St. Louis for Strange Loop. So I'll be hanging out there. If anyone else is also going or wants to say hi, please come up and say hello. Then, in October, I will also be going over to Australia as you've just got back. I will be speaking at DevFest Melbourne. I will be speaking at GCAP Asia-Pacific. I'll be hanging out at PAX. I'll be hanging out at UNITE. 

I do have some days free. So if any people who are listening and from Melbourne and they want to get together and talk about cloud or games or games and cloud or any of that sort of stuff, please feel free to reach out. Ping me. I will be more than happy to hang out with you, have a coffee. 

FRANCESC: Cool. 

MARK: [INAUDIBLE] Melbourne things. 

FRANCESC: Yeah. I know that Google Developer Group Cloud in Melbourne will be happy to have you, but I will let them find you. I think it's been a while that we have not done this, so why don't we remind our listeners how to get in touch with us so they can send us cool things of the week or questions of the week or just random rants or saying that they love us and were amazing. Also, we accept that kind of critic. 

MARK: Yes. Sounds good. You can ask the questions. I'll fill in the blanks. 

FRANCESC: Yeah. The slack, I will never get it ever. So let's start with Twitter. 

MARK: It's at GCPPodcast. 

FRANCESC: We are also on Google+. 

MARK: At +GCPPodcast. 

FRANCESC: We do have a web page. 

MARK: It's GCPpodcast.com or cloud.google.com/podcast. 

FRANCESC: And we also have an email. 

MARK: hello@gcppodcast.com. 

FRANCESC: We are on Reddit. 

MARK: /R/GCPPodcast. 

FRANCESC: And last but not least, we are on Slack. 

MARK: The #podcastchannel in a bit.ly/gcp-slack. 

FRANCESC: And someone mentioned at some point we are the only podcast that doesn't say, please rate us on iTunes or subscribe or whatever. So please do that. 

MARK: Yeah. Please subscribe. That would be good. 

FRANCESC: Yeah. 

MARK: Yeah. I don't know. 

FRANCESC: Please subscribe and leave good reviews and stuff. Apparently, it's important. So please do it. 

MARK: Yes. Please subscribe and stuff. I don't know. I feel kind of weird saying that. But anyway, that sounds like it'll be great. 

FRANCESC: Send us messages. 

MARK: We love all of you. Please do the nice things. 

FRANCESC: Yeah. There you go. 

MARK: All right, Francesc. 

FRANCESC: Awesome. 

MARK: Thank you once again for another episode. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}