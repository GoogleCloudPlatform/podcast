+++
audioDuration = "00:36:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.234.mp3"
audioSize = 51998936
categories = ["Kubernetes", "GKE", "Google Kubernetes Engine"]
date = "2020-09-02"
description = "This week on the podcast, we're celebrating GKE's fifth birthday!"
draft = false
episodeNumber = 234
hosts = ["Mark Mirchandani", "Carter Morgan"]
title = "GKE Turns Five with Alex Zakonov and Drew Bradstock"
image="/post/episode-234-gke-turns-five-with-alex-zakonov-and-drew-bradstock/images/hero/hero-EP-234.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ilajl2/episode_234_gke_turns_five_with_alex_zakonov_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, we're celebrating GKE's fifth birthday! [Mark Mirchandani](https://twitter.com/markmirch) is joined by special guest host [Carter Morgan](https://twitter.com/carterthecomic) to talk all things Kubernetes and GKE with fellow Googlers and GKE experts Alex and [Drew](https://twitter.com/dbradstock). 

Drew starts the show with a thorough explanation of Kubernetes, telling our hosts that its a great way to manage containers as you scale. Because it is an open source offering, Kubernetes has grown and adapted quickly. Alex elaborates, pointing out that Kubernetes has helped redefine how people create cloud native applications. A year after Kubernetes was born, Google introduced Google Kubernetes Engine to help simplify things for developers while optimizing scalability and efficiency. 

Our guests talk about the progression of GKE over its short life, what's new with the latest version, and why reliability and scalability have become the focus for year six. Later, we hear examples of companies taking advantage of everything GKE has to offer and how the symbiotic relationship between Google and its customers has helped GKE grow. In the world of gaming, GKE's global scaling capabilities have been vital. Drew talks about Anthos, explaining that it helps businesses run Kubernetes in their controlled on-prem system while leaving the option for an easy cloud migration in the future.

We wrap up the show with a look into the Kubernetes crystal ball where Drew sees a more adaptive Kubernetes and GKE. Alex hopes to continue to simplify GKE, making it easier and easier to use anywhere in the world.

##### Alex Zakonov

Alex Zakonov leads Google Kubernetes Engine team being responsible for operations of Google K8S fleet and for driving innovation in the K8S management. Prior to Google, Alex led a portfolio of products for Azure Monitoring at Microsoft enabling Azure customers to reliably operate and scale their applications. Alex has co-founded two successful start-ups, one of which, AVIcode, was acquired by Microsoft. Alex brings experience and passion in building and operating large scale systems and enabling engineering teams to deliver innovation at scale.

##### Drew Bradstock

[Drew Bradstock](https://twitter.com/dbradstock) leads product management for Google Kubernetes Engine.  He previously worked on Google Ad Exchange and is based in Waterloo, Ontario in the Great White North of Canada.

##### Cool things of the week

* New GKE Dataplane V2 increases security and visibility for containers [blog](https://cloud.google.com/blog/products/containers-kubernetes/bringing-ebpf-and-cilium-to-google-kubernetes-engine)
* Week 8 of Cloud Next: Cloud AI [site](https://cloud.withgoogle.com/next/sf/sessions#cloud-ai)
     * Interpreting ML Models with Explainable AI [site](https://cloud.withgoogle.com/next/sf/sessions?session=AI218&gate=true#cloud-ai)
* How I Launched This: A SaaS Story [podcast](https://bit.ly/howilaunchedthis)

##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Bare Metal Solution [site](https://cloud.google.com/bare-metal)
* Optimize cost to performance on Google Kubernetes Engine [video](https://www.youtube.com/watch?v=ry7XfEHivgE)
* Best practices for running cost-optimized Kubernetes applications on GKE [docs](https://cloud.google.com/solutions/best-practices-for-running-cost-effective-kubernetes-applications-on-gke)
* Anthos [site](https://cloud.google.com/anthos)
* Start your K8s learning journey with hands-on training at no cost [site](https://inthecloud.withgoogle.com/kubernetes-training-offer/register.html)
* Kubernetes Podcast [podcast](https://kubernetespodcast.com)

##### Tip of the week

Anthony gives us a [GKE tip on NodeLocal DNSCache](https://cloud.google.com/kubernetes-engine/docs/how-to/nodelocal-dns-cache) this week!

##### What's something cool you're working on?

Carter is working on the [SaaS podcast](https://bit.ly/howilaunchedthis).
Mark and Carter are working on a Kubernetes series!

##### Sound Effect Attribution

A wonky midi version of the Superman Theme was used comedically at the end of this episode. The powerful and moving original symphonic music composed by John Williams can be found [here](https://en.wikipedia.org/wiki/Superman_\(1978_film\)).

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 234 of the weekly Google Cloud Platform Podcast. As always, I'm Mark Mirchandani, but I'm here with a very special guest host, Carter Morgan. Hey Carter, how you doing?" >}} 

CARTER: You know, I'm doing as well as anyone can possibly be right now, Mark. 

MARK: You know, that's like the answer we get every week, and these are strange times. But I am super, super glad to have you here and it's always exciting for us to work together. 

CARTER: Always. Yeah, thanks for having me. 

MARK: Absolutely. And of course, we have a fantastic episode today all around one specific content. And I'm going to go ahead and say that people are probably going to be able to guess what that is. But why don't you tell us who's coming in today? 

CARTER: Well, today, we've got Alex and Drew from the GKE team, and they're going to talk about GKE, which just turned five. 

MARK: Yay! 

CARTER: I know, I'm excited. Here's why I'm excited. I was working with Kubernetes a long time ago, back when it was like 1.3, you know. And now it's at like 1.19. So there's probably so much that has changed in that time. I'm curious to hear what. 

MARK: Absolutely. And of course, Alex and Drew come in with a bunch of cool information about GKE, what it's been doing, how people can use it, and then, what's going to be coming up in the future. So it's a fantastic talk. Can't wait to get to that. But before we do that, why don't we go ahead and jump into our cool things of the week. 

CARTER: Yes 

[MUSIC PLAYING] 

CARTER: Well, I mean, since Kubernetes is the theme, why don't we keep it going? You know, Kubernetes is really cool. One of the big features is how it does networking, right? So you can always find services that come up or deployments through this service interface. And then also, at a higher level, L7 networking, there's ingress to route traffic. 

The thing is, as your workload grows, you need policies around security or if you have workloads that are on-prem or not. How do you handle all that? And so you have to start caring about things like security, visibility, scalability, and a lot of this has had to be done manually. And so it needed some kind of interface be able to do this programmatically. 

That's where Cilium, which is the most mature eBPF implementation for Kubernetes, that's where that comes in. eBPF is a technology that lets you run sandbox programs in the Linux kernel without having to recompile them. So what that means is, you can actively reprogram runtime behavior on the fly without having to compromise efficiency or safety. And so for a practical example, why this is, I think, very cool, is a lot of times you have to make what are called policies to declare how a pod can communicate. What can talk to what. 

But there hasn't been a scalable way to troubleshoot that until now. And so with eBPF on GKE you can support real-time policy enforcement as a way to make sure that the right things are talking to the right things. And so if you want to know more details about that, for anyone listening, check out the show notes to go a little bit beyond my handwaving. This is pretty cool. 

MARK: Yeah, I mean, it sounds awesome, and I think it's just another great example of all the stuff that's being built around Kubernetes, right? Kubernetes is great, but the ecosystem around it, there's just so many things going on there. So it is super exciting to hear that. 

And of course, I know we said that Kubernetes was the theme, but I'm going to break it and talk about week eight of Google Cloud Next, which this week is about Cloud AI. So everything you can think about AI, ML, and all sorts of things. 

But I do want to call out one specific talk, we'll have a link in the show notes for it with our friend Sara Robinson, talking about explainable AI. And I've been hearing this more and more lately, right? This idea of, oh, hey, we have something that's making a prediction. But how did it make that prediction? And how can you make sure that it's not biased, right? 

These are really big topics today. So there's a lot of cool talk, so definitely go check them out. And then of course, Sara Robinson's talk is going to be awesome. So super excited to see that. 

CARTER: Everything Sara Robinson does is amazing. I'm like, I feel lucky. I worked with her once about four years ago, and I'm still telling people about it. 

MARK: There are some amazing people here, and it's just so great when we do get a chance to work with them on whatever project brings us together. Speaking of which, Carter, you've been working on a podcast project yourself, right? 

CARTER: Yes, yes. I've been working on a-- should I just say it? Should I just say it? 

MARK: Yeah, just go for it. 

CARTER: I've been working on his new podcast called "How I Launched This: A SaaS Story from Google Cloud." And basically what we're doing every week is we're talking to SaaS leaders about trends in the industry, how they went from starting out their company to becoming an industry leader, the hurdles they overcame. And a lot of times they'll have anecdotes or stories or just a different perspective. And so if that's something you're interested in, definitely check out that podcast, which the link is bit.ly/howilaunchedthis. 

MARK: Yeah, absolutely. We'll have that in the show notes as well. And that's being done with our friend Stephanie Wong, right? 

CARTER: Yes, and Stephanie Wong is amazing as well. If you have seen the Google Data Center video, she was the host on that and the person that put that together. So she's the co-host on this podcast, and I'm just lucky to get to work with her as well. 

MARK: Absolutely. So make sure to check that out if you're interested. And of course SaaS companies are super cool, right? We're seeing them all over the place. So it is cool to hear how they kind of came to be, and the things they have to think about. Well, with all the cool things out of the way, why don't we go ahead and jump into our interview with Alex and Drew? 

CARTER: Yes 

[MUSIC PLAYING] 

MARK: Alex and Drew, thanks so much for joining us. To get things started, can you tell us a littlle bit more about yourselves? 

ALEX: Hey. I'm Alex Zakonov. I'm Director of Engineering for Google Kubernetes Engine Product, and my experience is kind of mix between startups and building high-scale services, and I still have kind of all the scars from my startups of when I don't listen to my customers. So kind of trying to apply it today. 

DREW: And hi everyone. I'm Drew Bradstock, a Lead Product for GKE based up in Toronto, Canada, or sometimes referred to as Waterloo, where the actual Google office is. And super excited to talk about GKE today. 

MARK: And of course, just like you said, Drew, we're here to talk about GKE or Google Kubernetes Engine. And so the first question is, why are we talking about GKE right now? What certain event has happened? 

DREW: It is actually our fifth birthday. And Alex and I were fortunate enough to talk about the birthday with no cake. It was very much a virtual Cloud Next, but it's really hard to believe that it's already been five years since GKE came out. Kubernetes is six years but very soon after is made open-source by Google. We brought our own manage offering out and, we've already gotten to the point where we're a toddler, would be the best way to look at it 

ALEX: And kind of for me, it was really interesting to reflect on that birthday, because from one side it's a point of maturity. At the same time, a big realization that Kubernetes and GKE is still really young, really vibrant, first evolve in technology, it really helps our customers today. 

CARTER: Yeah, so I think a good question then, because it's come a few times, what is Kubernetes? It's like if we could give a little short description of it, what is this tool everyone's talking about? 

DREW: So I think, to me, Kubernetes is a way to manage your containers at scale. And this is something commanded across any workloads. Some people actually view it as the data center or the operating system of the data center. We've begun to take what used to have to be bespoke and managed by actual customers, instead, Kubernetes allows you to do it in a scalable way. 

But what makes it really special is its open-source nature. This isn't something from just one provider or one vendor. This really pulls on a massive community of people, which to Alex's earlier point, has allowed us to iterate really, really quickly to constantly improve Kubernetes and adapt to new workloads. Little bit longer than a short answer, but I think Kubernetes is one of those things where, whoever you ask, you're going to get a slightly different answer, but that's my hot take. 

ALEX: Yeah, and kind of building on what Drew said, for me, Kubernetes is a cloud on the appearance. What Kubernetes have done is really it defined what it means to develop cloud native applications inefficiently, and how to do it in the cloud diagnostic way so you get ultimate flexibility between all clouds. 

MARK: Yeah, I mean, it's obviously a hot technology that tons of people have been talking about. And Drew, I like what you said about, you'll get a different answer each time. Because at the end of the day, it's a little hard to grasp, especially for people who aren't born into the cloud native world. But that being said, Kubernetes is a technology you probably can't get away from it right now in terms of people talking about it, but also there's this Google Kubernetes Engine. So what's the difference? 

DREW: The way to look at it is that Kubernetes is inherently open-source, so anyone can deploy it anywhere. And one of the cool things about this is very much like English. I'm Canadian. Eventually, I'm going to bring up the fact you spell color with a u, and everyone else is spelling it wrong. But English is fairly consistent. But there are slight differences between it. 

I think Kubernetes itself is very much the same way, right? Where multiple different vendors as well as people spinning their own have Kubernetes, but it's slightly different in how it's deployed. What makes Google Kubernetes Engine different is that we've really gone hard at simplifying the complexity of Kubernetes, amongst other things. And Alex and I will definitely go through a few of those. 

But it's taking what could be very complex, I think, for those of you who are listening who have tried to deploy in a bare metal or even built, bravely, a Raspberry Pi cluster and get it deployed. Which I've not done yet. I've definitely done my own clusters but no home Raspberry Pi clusters. But it's taking that complexity and making it a lot easier. And secondly, taking a lot of the learnings we have had from [? Bourke ?] like our internal container management system, and all the years of taking the best of Google, and actually bringing that into Kubernetes so it's faster, it scales easier, and uses a lot of our own learnings to make it a much smoother system for customers. 

ALEX: Yeah, I kind of find the key thing is like, if you think of Kubernetes set the standard with GKE, actually providing implementationals that stand out, really pushing the boundary for our customers. Pushing how far you can scale through the clusters. Pushing how efficiently you can run. Pushing how fast you can scale to meet the demands. And that's kind of all the secret sauce that counts as a GKE. Really kind of taking advantage of our platform and our learnings from [? Bourke ?] and bringing it to our customers. 

DREW: On the platform side, we've also made use of a lot of GCP technology, right? If you look at the different ways people deploy Kubernetes, especially on bare metal or on their own data centers, they have to do it vanilla and really figure out everything on their own. What has made GKE really fast and a lot easier for people to work with and get going on is that we're already integrating to GCP networking and storage and compute. 

And a lot of the optimizations are done for the customer, so they don't have to worry about all the fine-tuning or getting to work, because even spinning up a cluster, the huge amount of effort underneath the covers is actually done by Google versus the customers having to stitch everything together. That's why like, when members join Alex's team or mine, we actually get them to build a cluster from scratch just to be able to appreciate how much work needs to be done under the covers. 

CARTER: Wow, so it sounds like GKE provides like sane defaults, and then a lot of-- almost like an interface in between all of that for users and customers so that they can grow and scale. 

ALEX: Yep. Exactly the point. And the key thing here is not just defaults to stop on your day one, but really defaults to build your production clusters at scale. Because that's where complexity is. Extending off kind of a Kubernetes cluster, it's easy. Getting you at scale production environment, that's hard. Now that's why we invest from a security angle, from a scalability angle, from a real ability angle, and that's where we use all learnings from what I know is at that scale. 

DREW: And I think on that, one of the challenges we've had, which is thankfully not giving me an ulcer yet or my team, but we have to range from really small startups. So someone just spinning up their first op that wants it to scale, right? So that they want somebody who's going to scale across the nation or globally or build a handle peak workload, but they're new. They're just embracing Kubernetes. They want to get going, but they want to be quite cost-conscious. 

And the flip side, we're working with Twitter. They actually did a cool "Next" on "AirTalk" about this, where we have to able to handle the workloads that Twitter is handling worldwide. And with the state of the world these days, that's a mess. 

So you need to balance that ability just to scale up continually and not go down, because we've got this internal mantra, we don't want to be part of a fail well, right? And not have any repercussions there. But then we also have to make it quite easy for startups. And it's that bridging the two that has made GKE pretty unique up there. 

MARK: Yeah, I mean, it's awesome to hear, and I think that-- I really liked your anecdote earlier, and actually, I guess it wasn't an anecdote. You just said when people join your team, you kind of say, hey, go set up a Kubernetes cluster. Because two things that I know about Kubernetes, I'm not very good at Kubernetes, but A, it's hard, right? It is a lot to learn. 

And then B, scaling up and managing that, and like you said, Alex, and a big production environment. There's a lot of work involved there. So it sounds like GKE is a good solution to kind of run this in production especially as you grow to maybe Twitter scale, if you're lucky, and have to deal with that much work going on in Kubernetes. GKE's turning five now, right? So that means there's been five years of us releasing this, of us letting people work on it. What's new with GKE turning five? 

ALEX: As GKE turning five, there are a number of key areas where we continue to push and develop. And GKE is still young technology. There is still a lot of innovation happening in the space. And first, the most important thing is still availability. And what's interesting is that availability, when everything is static, is a relatively easy problem to solve. 

When you're trying to combine availability with a high velocity for customers, it's really interesting and tough problem. And that's why customers love Kubernetes. That's why customer love GKE. Because they can get that velocity of innovation combined with availability. 

So we put a lot of effort to make it simple for customers. We recently introduced releaase channels in production that allows customers to tell us their tolerance to disruptions. For example, if you want to be on the cutting edge, you can run on the rapid channel, and you will get access to the latest Kubernetes as soon as it's released. Or then if you need to have really high availability and really kind of a battle-proven beat, you can pick stable channel and enjoy all scale testings that we do across all clusters that run. And if you are somewhere in between, regular channel is right for you. 

DREW: One of the cool things that we've actually seen is that traditional customers like banks are actually contributing back to Kubernetes. And they want to be able to leverage what they've contributed into the releases when they come out, and they're using RAPID, right? So they're actually saying, hey, we need this. This is how we want to grow. We're giving back. 

They can embrace RAPID, but for something like their payment system, as Alex mentioned, they want that stability. So it allows them to bridge a lot safely and still be able to take advantage of the bleeding at tech and really contribute to where Kubernetes is going. 

ALEX: What's more interesting is that it would be the foundation for everything. [INAUDIBLE] and security. But what's really happening right now is that customers continue to push boundaries of GKE and the boundaries of Kubernetes. We just worked with some of our customers to a node scaling to 15,000 nodes. 

And it's not an abstract requirement. It actually solves real problems for customers that need to do artificial intelligence, machine learning, and before, they needed to wait for days and months, which is now can be done in hours. A perfect example is I work with [INAUDIBLE] where we actually were able to process 15 billion genomes for them within an hour, based on that 15,000 node cluster with roughly 240,000 nodes and 1.5 petabytes of memory. Even when they just talk about the numbers, it drives me crazy. 

DREW: And I think the finance people thinking about that are going a little crazy too. Because like, yeah, I don't want to think of what the requisition was for that much RAM and handling that, right? 

MARK: It's all scale up, scale down, right? 

ALEX: Exactly. 

DREW: And that's a game changer. I think being able to do these massive batch jobs, build it at this degree of analysis, and then just wind it down when you don't need it is critical. Because a lot of these MO workloads, this is where Kubernetes has been great. They scale up massively. They have to do a lot of processing, because the more power you can throw out, the shorter they are. 

You shut it down. You iterate, and bring it back up. So they can actually really control their cost, and the larger cluster size, and that was what was quoted there, they could iterate a lot faster, adjust, and run it again. Adjust, and run it again. So it wasn't just the size of the cluster, which was super cool for Alex's team and mine, but is the speed at which they could actually play around with their ML jobs. 

ALEX: Actually, it's like talking about, of course, what was super cool in that example is that they were actually able to use preemptible VMs giving them 5x saving on the cost. At the same time still run the jobs reliably. Which is kind of a huge kudos to all availability infrastructures that we have in Kubernetes and GKE. So we can manage all disruptions that come in from preemptible VMs. They'll be constantly available. 

MARK: That's absolutely mind-blowing, just the scale and the cost savings that you're talking about there. And so with 15,000 nodes being something new with GKE turning five, what about the other technology or components that make that happen? Autoscaling, you mentioned. Or with networking, you've got to be able to handle networking into that many nodes. So does GKE five have anything new in those areas? 

ALEX: Yep, absolutely. And kind of the unique thing about scaling GKE, that it's not just about the nodes. Nodes is top of the iceberg, because in reality, it's all about workloads and what services, at what endpoints does the workload use. What storage? What memory requirements? 

So you really dealing with a multidimensional problem here, as you scaling workloads. And you have to think about your network scalability, your ingress scalability, your cross-cluster traffic. For example, we have a lot of investments around multi-cluster ingress. But providing the multi-cluster services and connectivity between clusters. 

So all that kind of related to the pushing the boundaries, helping customers to scale. And a key thing, what I love just about the culture of the team, that from day one, the team all is going away to these customers. We never do that alone. Every new feature that we ship, we start with design partners. 

We partner with them, we understand their problems, they [INAUDIBLE]. They contribute back. And when we actually ship something, it solves a real problem. We learn from each other. 

DREW: One of the fun things on this was that we broke a lot of stuff. And what I mean by that is, as we went towards that 15,000k, and this is heavily led for our team in Warsaw, was we just kept on running into limits. And they'd be running or testing and it would break. And they'd fix one thing, and they'd run another piece of that multi-dimensional scaling and break again. 

And they just kept on running into it, so they fixed a lot of components of this, both with some in open-source to make sure we're improving Kubernetes for everyone, but a lot of it was optimizing with other bits of GCP to be able to expand those limits. So it wasn't an easy journey. I think it was very much a step function improvements as we hit each new limit as part of that. 

MARK: But those are exactly customer use cases, right? And like you said, it's great to get the solutions from those, fold the open-source ones into Kubernetes so everyone could benefit from them. But then fold the engineering-specific ones in the managed Kubernetes offering that is GKE, and then all the customers can get the benefits of that without having to probably step through the Kubernetes source code and understand what those actual changes were. One of the other launches from the previous couple of weeks was game servers. And that's all running on GKE as well, right? 

DREW: Yeah, that one was actually awesome. So as a gamer myself, it's been pretty cool seeing some of the partners that we've got going on it. It was really about allowing game companies to be able to scale quickly so that the game server team worked heavily with the GKE group and many other bits of GCP. 

But I think what's been cool about this is that tech and GKE's ability to scale globally, just add another region with these add up zones be able to scale up, has helped a lot of different game companies recently. So this has been a big focus area for us, because we are in the middle of a pandemic globally. And because of that, we've played a lot of games. Probably more than I should, considering I have two kids. I should be parenting instead. Hopefully, no one is judging. 

And the game companies, they've reached demand levels they never expected. Especially some of these pocket games that caught on. Have really grown up quite quickly and to be able to handle that scale, Kubernetes and GKE, in particular, has been really good. Because as a game sort of peaks, it goes back down, and they're not paying for it anymore. 

It allows them actually, as it ebbs and flows, to the point where some companies-- like we've got a really great ad tech partner, OpenX. Their workloads, it's on the ad side. It actually flows globally. 

So they use a scaling to go up and down in almost a follow-the-sun moment throughout the entire day, and game companies do it the same way. As people wake up or very late for some gamers on the east coast, that'll start picking up, goes back down, and same the other zones. Come up on west coast and then falls all the way globally, which is super cool to see as we actually look at the CPU patterns and uses patterns with these clients. 

ALEX: And with gaming companies, what I love to observe right now is that it seems that there is certain de facto standard showing up with GKE and Spanner. Where can I fit more and more gaming company stuff you did exactly the same design partner. Which is a good indication that it works. Kind of like a real pleasure. 

For us, we do pay a lot of attention to gaming scenarios, as you mentioned, for scale up and scale down, this critical for them, for those companies. And all our investments are going autoscaling, and that includes our vertical autscaling, [INAUDIBLE], our horizontal autoscaling, as well as our node autoscaling. Gaming companies really push the limits on all of them. And it's not just about when to autoscale, it's how fast you can do that. How well you handle that rapid growth, kind of that burst traffic, and scale down later to save the costs. 

MARK: Yeah, and OpenX actually did a "Next" talk on that specifically. So I'll make sure to include that in the show notes for people who are interested, because it's a great talk that goes over exactly how they were thinking about those types of problems, and how they solved them with Kubernetes. 

CARTER: As a gamer, I definitely want to go check that out. So I will be looking to the show notes for that. I had a question about multi-clusters, and I'm sure that these clusters don't always have to be in the same cloud provider, or some can maybe be on prem or something like that. And with that, though, is I'm curious how GKE and Anthos are differentiated. 

DREW: Yeah, one way to look at this is that Anthos really brings GKE everywhere. The core of Athos is to allow customers to be able to deploy, develop, manage the exact same way on prem as on GCP, as on other clouds. So if you wanted to get going and actually move from, let's say, your VM environments with a lot of your apps, begin that containerization journey, that modernization step. Many clients don't want to leap straight to the cloud, because it's a big transition. 

They have things working on VMs. Security policies work. Storage policies work. Audit compliance. Everything works. It may not be perfect, but it actually works, and it's stable, and it's not much work to deploy the new version. 

But eventually, just like anything, you've got to make that transition. But leaping straight from, hey, I've got a monolithic VM app, into containers in the cloud, that can be really daunting. And what Anthos has allowed clients to do is actually be able to move to Kubernetes in a controlled environment. Something that is leveraging Google's best practices as well as using service meshes and config policies. 

Do it where it's all stitched together. Because as we mentioned earlier, deploying clusters is really hard. Doing it for global company is even harder on bare metal. We do this for them. And what's cool about this is, they've made that investment. 

Let's say you can't leave data. I'm Canadian, as I mentioned, so often the data can't leave the country. Anthos is a great way to have it local or even contained within your own environment. But then as you grow and move into the cloud, you don't have to redo everything. 

You can use the same CI. You can use the same CDU. You can use the same policy frameworks. What's awesome about GKE in deploying Azure, using the best practices, the tech they have there, you can do it. And once again, you're not having to start fresh with all of your employer mechanisms. 

Because ultimately, developers shouldn't care. We all say that. It's a pretty lofty goal to get to a point where they don't need to know if it's on prem or in the cloud. But that's the goal a lot of customers or what they're doing. 

And even to the point where they can user on prem and burst into the cloud. That's really a goal for a lot of the clients. Where they can handle the peak where it goes in the cloud, but keep that regular commitment on prem until they can eventually transition. 

So from a GKE point of view, we want it consistent. And that's a cool thing. Like another environment, and we've got it available on AWS now, it's GKE. When you're using it on prem with Anthos, it's GKE. But it's part of Anthos. Anthos is that overall offering, but the GKE is consistent everywhere. 

ALEX: For me kind of answers, is a really good reflection on the maturity of Kubernetes and maturity of GKE as well. Because what's happening, first wave of adoption was digital natives, who really needed to move fast, to scale fast enough to grow their businesses. Next wave of adoption is happening right now, is that major regulated customers. Big financial enterprises, big health care enterprises, and those companies have the same need for the speed. 

They need to redefine their businesses to stay competitive. They're looking for Kubernetes and for GKE to solve it for them, but they need to have a flexibility of where this all went. In the cloud, on prem, and making sure that we meet them where they are. So answers. That's Kubernetes as well and GKE is that immediate answer on our customer demands. Same kind of leasing to our customers, driving [INAUDIBLE] innovation. 

MARK: Right, and that's a core part of Kubernetes as a tenant of how it was built, right? You don't care about the underlying infrastructure. It runs the same no matter where it is. So with that being said, what else can you tell us about what's coming up for GKE? Are there any cool announcements that we can look forward to in the next year or when GKE turns 10? 

DREW: Having a 10-year-old slightly terrifies me. My son just went from five to six, and to 10, it's definitely a huge life change. So if we were going to look at-- I'll use my crystal ball. And this is an unofficial road map production, so no commitments here, no contractual obligations, right? So even though it's being recorded-- 

MARK: No commitments. No commitments. 

DREW: I think what's going to end up happening is that Kubernetes is going to become much more adaptive. And what I mean by that, especially GKE, customers are going to want it to auto-scale really to exactly how their business reacts. They're going to want day two operations to be more and more managed to the point where it's almost like a tap. You've got capacity on demand, but you still want control. 

This isn't serverless. There's lots of great offerings like Cloud Run. But in Kubernetes, you want to build a time to third party ecosystem. Not be locked in, so you're not just with one vendor, but they're going to expect more and more where the vendors themselves like Google do so much more optimizational learning for them. 

So it becomes simpler and simpler but can handle the most complex workloads. So I think they won't put Alex and I out of a job, which is good, but I think on the ML side and a lot of the Google learnings, it'll be a lot heavier five years out. To the point where it's just capacity on demand but still able to tie into a lot of cool third party tech. And if want to move cloud vendors, you can. So you're not locked into the next mainframe. 

ALEX: And for me, what's important to remember about roots of Kubernetes and GKE, GKE and Kubernetes start this from Google's desire to bring same simplicity that Google develop itself. For developing at scale reliable services to everybody in the world. That's where our roots [INAUDIBLE] that journey. And we make a lot of progress, but still today more continues to be kind of a crystal ball for us because work is still ahead. 

It's still easier for Google developer to develop a scale globally available service, and our goal is to bring that simplicity to everybody in the world. If you were to ask me what should customers expect? Simplicity. And that simplicity in all dimensions. It's in dimension of availability, in the dimension of security, in the dimensions for the two operations. 

Next is global availability and global scaling. As I mentioned, today customers, major enterprises, they have thousands of applications. It's not just going to one major application that's a [INAUDIBLE] of application, a [INAUDIBLE] of developers that want to use that platform. So scaling that in a simple way, it's not a trivial task. But definitely determined to solve it. 

MARK: Word. And so we've talked about so many cool features of GKE, so many reasons why people would want to use it, from small startups to large 15,000 node clusters. Are there any resources out there for someone that wanted to learn more about the new offerings in GKE or just hearing more about Kubernetes in general? 

DREW: Yeah, actually, in honor of the fifth birthday, we have a present for everyone. We've got a great free training program. We'll put it in the show notes in terms of the address there, because marketing will kill me that I can't remember the short Google link on it. But it's actually a lot of free Kubernetes training. 

I think the recommendation I can give everyone listening is, play with it. That's how I learned. That's how Alex learned. And the whole point of it, the training we have isn't GKE-specific. It's designed just to help the Kubernetes community and get people skilled up on it. 

Because getting your hands dirty and trying it out is going to help architects, developers, and everyone. So check out the fifth birthday offering and the free training there, because it's a really good way to brush up on your skills from the beginners all the way to a lot of the advanced operating. 

ALEX: Yeah, kind of fun. To add to that, Kubernetes podcast is a really good source to stay on top of everything new that happening in Kubernetes. And also highly recommend to follow best practices. We pushing out a lot of best practices for reliable Kubernetes for implementation of skill, or doing compliance in the easy way. So all those sources are really good starting points for really making that simple for your company. 

DREW: And I think one last thing, we've got a cool video series coming up in Q4. And we'll definitely let the GCP podcast folks-- so thanks, gents-- know about this, but it's going to be BI engineers sharing a lot of tidbits on what they've learned on Kubernetes and best practices. And that's like small, bite-sized chunks going to help you out. So there'll be more announcements on that in Q4. But that should help the community out a lot too. 

MARK: Yeah, so just like you said, we'll try to put as many show note links as we can for people who want those resources to learn Kubernetes. And then basically stay tuned, right? Because we're going to keep working on GKE. We're going to keep working on Kubernetes. And there's going to be a ton of content around that. 

Awesome. Well, Alex and Drew, thank you so much for coming in. We really appreciate the time, and we're super excited to see GKE turn five. And then, we'll have you back on when it turns 10. 

DREW: Thanks a lot. Look forward to it. I'll see you in five years. 

ALEX: Thank you. 

MARK: It's always exciting to hear more about, of course, GKE, but then, I really love hearing about why people should use GKE. I think an important part is also that GKE, where that's appropriate and where Anthos is appropriate, helping make that distinction is fantastic. 

CARTER: I was super excited. I come from a gaming background. And so to hear all the work in the gaming area, I was like, yo, this is cool. This is really cool. 

MARK: Maybe we-- you know what we should do? We should have Mark Mandel come back on to talk about Google Cloud game servers. I can't believe it took me this long to think of that. All right, well, we'll-- 

CARTER: I feel like you had to say that every episode, no? 

MARK: Well, we do pull in robo Mandel quite a bit, but I feel like the real Mandel is the one who's going to do the explanation on Google Cloud game servers. All right, I'll make it happen. No promises, but I'll make it happen. 

CARTER: I've heard a few of the shows, so I think I know what's coming next. 

MARK: Oh? 

CARTER: Is it the question of the week? 

MARK: It is the question of the week. You nailed it. And this time, because again, Kubernetes-themed, we're going to go ahead and turn it over to our friend Anthony Bushong to give us a great tip on using GKE. 

[MUSIC PLAYING] 

ANTHONY: Thanks, Mark. Happy to be here, as always. Now, there's a running joke in IT that when issues surface in an environment, upon some investigation, it's always DNS. Well, in GKE there's something new that you can do to improve your experience with DNS. 

Today's tip is around node local DNS cache, a new cluster add-on that improves the performance of DNS in Kubernetes, easily enabled in GKE clusters. Prior to node local DNS cache, many users were relying solely on coop DNS for service discovery in their clusters. Coop DNS is a critical cluster component in Kubernetes, handling DNS resolution for all Kubernetes pods that run cluster-first DNS policy. 

Now, out of the box, some Kubernetes users have seen some issues with this. One example is that coop DNS runs as a Kubernetes deployment, which means that there's a chance that the workload pods issuing the most DNS queries could actually be located on nodes separate from where coop DNS pods are running. This incurs additional latency for potentially critical DNS lookups. Node-local DNS cache improves this performance by configuring a core DNS daemon set for DNS caching. With this caching agent on each node, every workload pod is able to issue DNS queries local to the node they are running on. 

Enabling node-local DNS in GKE will also help for workloads that need to make external to the cluster queries by forwarding them to Google's Cloud DNS metadata server. All of this has multiple performance benefits. Improved latency on DNS queries, sidestepping potential contract issues, and reducing the overall number of queries to the coop DNS service. GKE has provided methods for getting this configured in both new and existing clusters as long as error version 1.15 or higher. It should be noted that updating an existing cluster with this add-on behaves similar to a cluster upgrade with each node being replaced one by one. 

There will be links provided with this podcast containing additional information on how to configure node-local DNS cache in your GKE clusters. That's all I've got. Thanks for your attention today, and wishing you well. 

MARK: Thanks so much, Anthony. That's a great tip. And of course, we are just about at the end of the episode, but before we wrap up, Carter, what cool things have you been working on? It's been a while. 

CARTER: Well, I don't know if you heard, but I'm doing a SaaS podcast with Google and Stephanie Wong. 

MARK: Oh, yeah, I did hear about that. , Oh wow, yeah. That was like 30 minutes ago. 

CARTER: It was. We do talk about Kubernetes on there sometimes, and even sometimes Anthos, so definitely check that out. And then also, I'm getting to work with this person, his name is Mark. He runs the GCP podcast, and we're working on a Kubernetes series. Have you heard about it? 

MARK: Yeah, that Mark guy. He sounds smart. Wow, that sounds awesome. I can't believe-- no, it's going to be super exciting to get this launched. And of course, we've got a lot of work ahead of us. But we're really looking forward to getting that out there and letting people see it. So be sure to stay tuned for that. 

CARTER: What's it about? 

MARK: Oh, it starts with a K. It's on the tip of my tongue. 

SPEAKER 1: Don't tell me. Kangaroos. Right? 

CARTER: I'm going to say Kupernetes. 

SPEAKER 1: Kupernetes. 

MARK: That's what it's about, that's it. It's going to be great and we're really looking forward to that. And of course, don't forget to check out that SaaS podcast. Again, we'll have that link in the description for people. 

CARTER: Sounds about right. 

MARK: Well, to all our listeners, thank you so much for joining us today. It's been an 

awesome time. And of course, we hope you stay safe out there. 

CARTER: Thanks for listening. 

[MUSIC PLAYING] 

CARTER: One thing I love that no one can see is, you have the best Superman curl right now. 

MARK: Is it? 

CARTER: Yeah. It's like, perfect. 

MARK: It's been such a long time since I've had a haircut. It's been like seven months or so. And so now I got this curly hair, and everyone's like, that's an interesting style. And I'm like, interesting is the right word, because I have no idea how to take care of long hair. Because I've always had short hair. 
