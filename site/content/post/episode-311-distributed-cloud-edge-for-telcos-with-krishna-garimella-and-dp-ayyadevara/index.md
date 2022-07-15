+++
audioDuration = "00:36:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.311.mp3"
audioSize = 52326358
categories = ["Managed", "Kubernetes", "Telecommunications"]
date = "2022-07-13"
description = "Stephanie Wong and Carter Morgan are back this week learning about Gooole's Distributed Cloud Edge for telcos with guests Krishna Garimella and DP Ayyadevara."
draft = false
episodeNumber = 311
hosts = ["Carter Morgan", "Stephanie Wong"]
title = "Distributed Cloud Edge for Telcos with Krishna Garimella and DP Ayyadevara"
image="/post/episode-311-distributed-cloud-edge-for-telcos-with-krishna-garimella-and-dp-ayyadevara/images/hero/hero-EP-311.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/vy83ym/episode_311_distributed_cloud_edge_for_telcos/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and [Carter Morgan](https://twitter.com/carterthecomic) are back this week learning about Google's Distributed Cloud Edge for telcos with guests [Krishna Garimella](https://twitter.com/gkrishna28) and DP Ayyadevara. Launched last year, Google Distributed Cloud Edge has benefited companies across many industries. Today, our guests are here to elaborate on how telecommunications companies specifically are leveraging this powerful tool.

Because telcos deliver essential services, they tend to create detailed plans for their infrastructure in advance and stick with this setup for many years, DP tells us. Identifying the right tools for their project is vital, and Google has created and improved on many services to aid the telecommunications sector. Contact Center AI, for example, helps with customer service needs. Specifically, our guests elaborate on the modernization of telco networks through managed infrastructure offerings. 

We learn more about Google Distributed Cloud Edge and the managed hardware and software stack that's included. Container as a service for optimal network function is the first focus of Google in supporting telcos companies with Distributed Cloud and has been used for 5G rollouts. Google has been working behind the scenes to make Kubernetes more telco friendly as well, so that projects are more portable, scalable, and able to leverage Kubernetes benefits easily. Krishna gives us some great real-life examples of telecommunications companies using GDC Edge in areas like virtual broadband networks. In order to dedicate maximum resources to customer workloads, the team chose to keep the Kubernetes control plane in the cloud while worker nodes are at the edge. With superior security protection, minimal service disruption, and more, GDC Edge boasts fleet management as a core capability. 

In order to continue satisfying telco's needs, Google collaborates with many businesses to grow with changing customer needs.
 
##### Krishna Garimella

[Krishna](https://twitter.com/gkrishna28) is a technology evangelist who has worked with service providers across the globe in the network and media areas. 

##### DP Ayyadevara

DP is the Product Group Product Manager leading Telco Network Modernization products and solutions at Google Cloud.

##### Cool things of the week

* Cloud TPU v4 records fastest training times on five MLPerf 2.0 benchmarks [blog](https://cloud.google.com/blog/products/ai-machine-learning/cloud-tpu-v4-mlperf-2-0-results)
* Show off your cloud skills by completing the #GoogleClout weekly challenge [blog](https://cloud.google.com/blog/topics/training-certifications/complete-the-challenge-and-build-cloud-skills)
 
##### Interview

* Distributed Cloud [site](https://cloud.google.com/distributed-cloud)
* Distributed Cloud Edge Documentation [docs](https://cloud.google.com/distributed-cloud/edge/latest/docs)
* Contact Center AI [site](https://cloud.google.com/solutions/contact-center)
* Kubernetes [site](https://kubernetes.io)
* Anthos [site](https://cloud.google.com/anthos)
* Nephio [site](https://nephio.org)
* BigQuery  [site](https://cloud.google.com/bigquery)
* Vertex AI [site](https://cloud.google.com/vertex-ai)

##### What's something cool you're working on?

Carter made a test for a video recap version of the recent pi episode.

Stephanie recently made a [pi video](https://www.youtube.com/watch?v=kYLtFIbO-LU) as well and is working on an Alphafold video and the Cloud client library new reference docs homepage rollout.

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, hey, hey. This is Stephanie Wong. And welcome to episode number 311 of our weekly Google Cloud Platform Podcast. I am here with my colleague and teammate, Carter Morgan. What's up, Carter?" >}} 

CARTER: Hello. What's up? I don't know, I'm excited for today's conversation, to have a conversation with you. Things are pretty good. What about yourself? 

STEPHANIE: Doing well. I feel like I haven't been hosting in the last couple of weeks, so it's been a little while. I've got to get back into my groove here. But it's good to be back because, today, we are talking about Google Distributed Cloud Edge for telcos. If you don't know what that is, we're going to dive into that. But just to give you a little primer here, this is a product that we announced at Google Cloud Next in 2021, where we announced Google Distributed Cloud. 

And that is a portfolio of solutions that come with hardware and software that extend our infrastructure to the edge and into your data centers, as well as, in this case, telcos' edge networks, as well. So we have some of our product leaders here today, Krishna and DP, who are going to dive into what it means for telecommunications customers here. But before we jump into all of that, we, of course, want to cover our cool things of the week. 

[MUSIC PLAYING] 

All right, so my cool thing of the week is something that just came out about a week and a half ago. It's that MLCommons, an open engineering consortium, just released new results from MLPerf training, version 2.0. This measures the performance of training machine learning models. And the exciting news here is that Google's TPU v4 ML supercomputers just set performance records on five benchmarks, like the BERT and the ResNet deep learning algorithms. And we got an average speed of 1.42x over the next fastest non-Google submissions, like Nvidia. 

So I just mentioned Cloud TPU v4 pods. They each consist of 4,096 chips connected together via an ultra-fast interconnect network. And four of these records run were conducted on the publicly available Google Cloud ML hub that we announced at Google I/O this year. This hub runs out of our Oklahoma data center, and it uses over 90% carbon-free energy. So all really just encouraging wins here in the ML space. Hopefully, this will help push the industry forward. And it's really exciting to see these performance records set. 

CARTER: Mhm. There's so much speed and so much power, and they're making it better for the environment compared to baselines. I think that is pretty cool. 

STEPHANIE: Yeah. What about you? What's your cool thing of the week? 

CARTER: Yeah. My cool thing of the week-- I think you're going to like this one, Stephanie, because I don't know if you know this, but you were actually mentioned in the blog post about it. 

STEPHANIE: Oh, hopefully in a good way. 

CARTER: We'll see, we'll see. My cool thing of the week is the Google Clout Challenge, so hashtag #GoogleClout. And what this is, it's a no-cost, weekly, 20 minutes or so hands-on challenge where you do labs where you actually complete applicable real-world scenarios. So here's an example. One of them is importing data into a Cloud Spanner database. So that's a lab where you import data into Cloud Spanner, which is GoogleSQL database from SUV, and you store that in a Cloud Storage bucket. 

STEPHANIE: From CSV? 

CARTER: Yeah, from a CSV. And you store that in a Cloud Storage bucket. You get points. And the faster you go, the higher your score. And on one of those challenges-- and this is where you got mentioned, Stephanie-- it said the previous record was held by Stephanie Wong. It's five minutes. And they were challenging everyone to see if they could complete it in four minutes. 

STEPHANIE: Ah. 

CARTER: So Google Cloud up. 

STEPHANIE: You know, that's really funny they said that, because I'm going to have to admit that it's kind of cheating because the one that I got done in five minutes was a challenge that I wrote, which was figuring out how to deploy firewall rules to allow communication between two VMs in different VPC networks. So, I mean, I guess it's a little bit of cheating, but I did still get it in five minutes. So see if you can beat me and do the hashtag #GoogleClout-- that's Google C-L-O-U-T-- online. It's kind of like a Wordle challenge. And they'll give you a score online. So go ahead and try it. 

CARTER: Wow. 

STEPHANIE: All right, well, looking forward to your responses there. Let's go ahead and get into our conversation with Krishna and DP about Google Cloud Distributed Edge. 

[MUSIC PLAYING] 

All right, welcome to the Google Cloud Platform Podcast, Krishna and DP. Thank you so much. Why don't you start by telling us who you are and a little bit about what you do here at Google. 

KRISHNA: Hi. My name is Krishna Garimella. I'm a principal architect for the telcos and medias. And my role is to design cloud-centric networks working with service providers. 

DP: And I'm DP Ayyadevara. I'm Krishna's partner in crime from the product management side. And I am a group product manager here, leading telco network modernization-related products and solutions at Google Cloud. 

CARTER: Wow. Well, I'm always happy to have partners in crime. So that's fun. Thanks for coming today. And what are you so excited to come on the podcast episode and talk about? 

DP: What we wanted to talk about today is about Google Distributed Cloud portfolio that we have here at Google Cloud that we launched at Cloud Next last year. And we want to talk about how we are leveraging this platform to deliver state-of-the-art solutions and address really important use cases for our telecommunications customers. 

STEPHANIE: So telco customers-- we all know as consumers in our daily lives what telco customers are, but how did you personally land in the space of telcos? And what is Google Cloud doing for telco companies? 

DP: So in my 20-year career, I've spent, like, 18 of those 20 years working on telco-centric products. In my past, I've worked on the vendor side, back in the days when we didn't have virtualized infrastructure, selling core routers, real physical appliances, to selling virtualized infrastructure solutions and so on. So 18 years I've spent working with telcos. 

What's really good about telcos is they do a tremendous-- I mean, our telco customers-- a tremendous amount of due diligence before they actually select a product or a solution or an architecture. But once they have selected it, they're going to stick with it over a longer period of time because they're delivering really essential services, like your mobility service-- your cell phone connections or whatnot. And so it's very critical for them to identify the right suite of products, the right architectures, and be able to host these really essential services on these. 

And so it's always been a rewarding experience working with telecommunication customers once you get selected as the vendor. Until then, it's actually improving us to enhance our products, improve the technology, challenge ourselves, because anything that telecommunications do is at scale and it impacts lots of people. 

STEPHANIE: Yeah, I feel like telco companies are sort of the veteran around here. They've been around for decades. And the cloud services are sort of the new kid on the block. So I can imagine that their bar is set very high when they're even looking at more of a digital transformation, looking at these virtualized services, right? 

DP: That's right. And, Krishna, I don't know if you want to add something to that. 

KRISHNA: No, especially when it comes to networks, specifically networks are not workloads that you can easily move to cloud, two paradigm shifts that are happening in the industry. One is the network itself is getting virtualized. 

Now, the standards that some of the evolving technologies like 5G and others that I've written require, like, a different level of scale. So how do you take that virtualization and apply that to the cloud? It's just not containerizing. How do you even change the operational model around it? So these are some interesting challenges that we are collaborating. And I'm sure we'll get to some of them today. But that is what is interesting here to solve for. 

DP: And, Stephanie, you asked a question, what are we doing for telcos at Google Cloud, right? We take telco segment very seriously at Google Cloud, to the extent where we have established a vertical organization specifically for telcos. And we focus on a very large variety of products and solutions addressing a large gamut of use cases for customers. It includes something like CCAI, for example, which is addressing customer experience aspect of telcos. 

We have infrastructure solutions, and we have ISV-driven solutions, as well. Right? So there's a really large variety of offerings we have. And for this podcast, I think what we are narrowing down and focusing on is more of containers as a service paradigm, and how we are building managed infrastructure and containerized services so that our telcos can modernize their networks. And if I may take the liberty, one last thing. You asked, how did Google Cloud come to focus on telcos, right? 

So if you look at what is common between Google Cloud and telcos, we both have large networks. And what Google has done well over decades is really build one of the best networks in this world and be able to deliver billion user properties on top of that, like YouTube and so on. And so we have a really sophisticated and modernized network. And what we think is we should be able to take that goodness to our telco, telecommunication and CSP customers so that they can realize 5G kind of architectures, which actually are highly distributed, very scalable, and so on. 

CARTER: I find this really interesting because this is a newer technology or technologies that I'm learning about. And you just said there about the 5G and the distributed, and distributed is right in the name. And I was just curious if we could talk-- before we get into the hardware and how this tech stack was implemented, what exactly is Google Distributed Cloud? Because that seems like a really big, important word there, "distributed." And I know it's not just networking, and there's other tools, too. Could we maybe talk about some of those? 

DP: Yeah, sure. Google Distributed Cloud actually is a portfolio of products. There's Google Distributed Cloud Edge that we will focus on today for some of the use cases we want to talk about. There's Google Distributed Cloud Hosted, and then there's Google Distributed Cloud Virtual and Google Distributed Cloud Appliance. Again, it's a portfolio of products. 

And what is common among all of these is these are offered as managed services. So now, Google Distributed Cloud Edge, for example-- maybe I'll dig in a bit deeper on that, and we can have subsequent sessions on rest of the products in the portfolio. So Google Distributed Cloud Edge offering includes managed hardware and software stack, supports a lot of different deployment models. So when we say managed hardware and managed software, what do we mean? 

By managed hardware, we mean we have a lot of different hardware configurations. But let's take an example. One example configuration is a rack that includes servers, that includes networking equipment. And these servers come with storage. So it's providing you an infrastructure, managed infrastructure offering, which includes compute network storage element in this offering. 

And when we look at the software stack, what we provide is the host operating system and Anthos, which includes our Kubernetes distribution. And so GDC Edge is about this managed hardware with the elements that I talked about and the software stack, all of this managed as a service and delivered as a subscription kind of service to our customers. 

The key advantage of this is when our customers do this on their own, they have to deal with the compute lifecycle management, deal with the network lifecycle management, storage lifecycle management and all of these things, and have large teams operationalizing this. Whereas what we are doing is we are helping them by providing a managed offering so that they don't have to worry about any of that, and they just focus on building revenue-generating applications on top or revenue-generating network services on top. 

STEPHANIE: Great. So if I understand correctly, it's an infrastructure as a service and platform as a service offering, alongside these lifecycle and operational management features that it comes with. And specifically today, we want to focus on these edge 5G use cases for telco companies. 

DP: That's right. 

STEPHANIE: Can you talk a little bit about some of these specific customer problems or use cases that GDC Edge is addressing? We talked about telcos. What in the telco world would be really well suited for a product like this? 

KRISHNA: The first thing, before how 5G is applied, how do you build a 5G at scale? That's the key thing that the operators are working on. Now, if you look at the traditional 4G rollout, you typically call what you call virtual network functions. And there are-- as DP outlined, you have to deal with compute hardware vendors, platform hardware vendors. And you have to stitch all these three layers together to operate them. 

So the very first fundamental problem or use case that we are trying to solve here is container as a service so that the focus is more on the containerized network functions, because imagine there is an evolution from 3G to 4G to 5G from a physical network function to a virtual network function to now a containerized network function. Right? So we are first focusing on how can we make sure that the operators are focused on the containerized network function without having to worry about the underlying platform and the operations of that platform. 

And then the second part that is important is how do you containerize a network function, because it's not just about converting a VM to container. Because traditionally, if you look at the telco workloads, they require a huge amount of throughput. And there is a huge separation of traffic flows, for security and other purposes. 

So how do you rightly architect and build these containers, keeping the immutability of the Kubernetes layer? Because you can still build a container and build a lot of dependencies to the hardware. How do you architect this in a right fashion? And this is where we are collaborating with service providers and even the network function vendors, OEMs, to bring our mind share in the communities and help them architect in the right fashion. 

So the first use case that we are solving is the rollout in the deployment of the 5G from a platform perspective. The second part that we are solving is how do you deploy those network functions. Traditionally, when we talk about containers, a lot of them look at Helm charts. But you're talking about several network functions that, whenever you containerize-- and this is from the software paradigm-- you do that for immutability and for frequent updates. And you're talking about consumer networks, where, if you are going to frequently upgrade them, then you need to have a whole automation in place. 

So how do you simplify that current Helm chart model to more of an intent-driven approach? And this is based on Google's own learnings on intent-driven automation, right, when we look at our own network. So this is where we are collaborating with both the service providers and network function vendors, jointly with Linux Foundation through an open source initiative called Nephio, where we are advocating for the use of Kubernetes CRDs and an intent-driven automation, in that case. So the automation is an important aspect that we are trying to solve here for. 

STEPHANIE: I feel like this is a fascinating collision of worlds because internet and telco companies traditionally have these rigid requirements, as you said, very low-level constructs of network topologies that need to be flexibly created, in a sense, with these separation of network protocols and layers, whereas the Kubernetes space is this fast-moving, service-oriented network world. And so as many customers have to transition to this new world, how do we work together with telcos and things like the Linux Foundation to make that transition easier? It seems like a very big problem to solve, but Google, as you said, has been in this space for quite some time building our own network. So I can see that we're well equipped to take on the challenge here. 

DP: Yeah, for sure. And there's two sides of the coin. One is where we are helping telcos modernize and network function vendors modernize their implementation so that they are building cloud-native applications and not just containerized legacy kind of applications, right? But on the flip side, the other thing to look at is, from Kubernetes perspective, we are not used to considering network as a first-class resource. Right? 

And as Kubernetes is getting more and more widely deployed-- I mean, not just for enterprise use cases, for telecommunications use cases, as well-- what we are doing is we are actually transforming Kubernetes to be a little bit more telco-friendly. I mean, when we say telco-friendly, it's not about customizing or introducing very esoteric concepts into Kubernetes, but it's about simple thing. We are introducing network as a first-class resource. 

We are working on a lot of initiatives in Kubernetes, thanks to our GK networking team, where we are upstreaming a lot of our innovation in that space. And just to not get geeky around it, but give you an example, today, to deploy any network function that requires multiple interfaces in Kubernetes, they have to use something called Multus. But when you do that, you cannot necessarily apply the Kubernetes constructs like network policies, et cetera, especially when you're using high-performance interfaces. 

So with this network as a first-class resource, what we gain is be able to extend the Kubernetes goodness to all the uniqueness that telco use cases bring or telco applications bring. And so they ultimately become just like any enterprise application, let's say-- more portable. We can leverage all the aspects of Kubernetes, in that sense. 

KRISHNA: And that's a great point that DP has talked about because this is what forms Google's unique value from a perspective of GDC Edge meets where the operators are today or network function vendors are today. Right? It's easier because, as DP said, it is an evolution. We're working with introducing this into the Kubernetes layer and evolving this. 

But today, they don't exist. So GDC Edge helps them to meet where they are. Like if you have to run, for example, Multus and those capabilities, you can run them on GDC Edge. And the evolution in the GCP regions with GKE is where we don't use these constructs and address the Kubernetes layer. 

So in that way, we're building a foundation wherein we meet where the service provider networks are today, the OEM maturity levels are today, and then we are jointly collaborating with all the three of them, Google with service providers and network vendors, in terms of evolving into a true cloud-native construct wherein you preserve that immutability, you address the networking aspects of the Kubernetes too, and that you're able to use the true cloud of scale from that aspect. So in that sense, we are meeting where they are today, and then we are also evolving where we think they should be. Or, again, it's not a Google's view. It's also an industry view that we are developing an open source point of view there. 

CARTER: Wow. And so I want to go a little bit further on that, Krishna, if possible, because we've been focusing so much on how this enables customers, and the benefits of this and capabilities of this. So do we have any interesting customer use cases or stories? Like, how are people using this, you know? 

KRISHNA: Yes, so we have quite a few cases that we are working on. Again, these are more specific service provider use cases. They are applied to various other industries for various purposes. Some of the use cases that we are working now is, for example, deploying of running and operating 5G core, full 5G core on GDC Edge platform, both the control plane and the user plane. And when we say 5G core, it's not just 5G core. So 5G core is more ubiquitous. 

So you can apply that to, for example, fixed wireless customers. So there are rural areas where internet is delivered through wireless towers. And in order to process that data, you still use this 5G core. Or it could be your mobile customers that could still use this 5G core. Or it can be an enterprise, like mining industries, who cannot connect to it easily, wherein you have to deliver the connectivity [INAUDIBLE] which the service providers do today. So 5G core, like in both what we call a public and a private fashion, is one of the most important use cases that we are working. 

Then we're also working on wireline transformation, like broadband network gateways. So virtual broadband network gateways, VBNGs, how do we deploy them? Again, these are not simple workloads that you will workload on this. So understanding the requirements, optimizing them. So how do we do this for the wireline world? That's an interesting use case. 

Then we're looking at self-healing. If you look at the service providers today, they talk a lot about what you call closed loop automation. And in Google, we call it self-healing networks. As you containerize the network functions, you're going to touch them a lot because you're going to deploy them a lot, right? And we are now also building this automation, as I mentioned, about Nephio. 

So you're also providing a way to deploy more often. But we'll have to address that, despite all the checks and balances, you will still have issues in the network. So how do you identify them and heal from them before a consumer experiences problems? So this is where we are using our data platform tools like BigQuery and Vertex AI for self-healing them. 

So we are looking at some interesting use cases in, for example, can we get some signals from core KPI analysis using anomaly detection. Like, any BQ models that we have available today, can we analyze the traffic patterns and identify anomalies? Let's say you've done a new deployment, and while the deployment itself is fine, we've got a signal from one of the traffic patterns that you can't put thresholds on traffic patterns. So this is where the machine learning helps. 

So self-healing networks is another use case because operating this model is something that we also have to work with the service providers, because we containerize it, we automate it, but then it needs to be operationalized. And this is where we're collaborating on these self-healing network parts. So these are some of the use cases. 

STEPHANIE: That's really fascinating. I actually did drill in on Google's way of managing our network itself using built-in redundancy, but also, of course, this operationalized monitoring systems and automation. So I can see that, for 5G use cases, obviously they demand low latency. They want customers to never sense any disruption in their service, as well. But just drilling in a bit more on that, you mentioned that we have this Kubernetes control plane, and this is how we can automate rollouts with things that need to change very frequently. Why did we decide to keep the control plane in the cloud, whereas the worker nodes are at the edge? 

DP: What we are trying to do here is dedicate as much of the resources as possible to the workloads that our customers want to deploy on GDC Edge. And so from that perspective, what we wanted to do was, hey, let's take Kubernetes control plane, let's host it in GCP regions, let's scale it and manage it, provide it as a managed service. So that's why we deployed it in GCP regions. And what that does is, for example, GDC Edge, one of our configs has 576 vCPU compute availability. 

Almost all of it is available for workloads to use. A lot of times, the first question the customers ask when we talk about managed infrastructure is, hey, how much of your management-related software actually-- how much of the resources does that consume, and what is really available for me. In other words, they're asking what is the overhead of actually going the managed service route, right? And so by running this control plane in a GCP region, we are minimizing the overhead to manage the platform. 

Having said that, there are use cases where you may need that Kubernetes control plane to run locally, as well. And we are, in our roadmap, addressing that, too. We started off with a remote control plane, but we are also going to support local control plane very soon. 

This will help in scenarios where, let's say, in some other countries, like in India, the connectivity might at times be flaky or may take more time to recover and so on. And so in those cases, as well, we want to make sure that we have a fully functional service that customers are using. And so we have started with remote control plane. There are advantages to it, as I said. At the same time, we are looking to address local control plane, too, for certain use cases. 

CARTER: Thank you for explaining that. And I just find it really interesting. Something I like to ask sometimes, just to understand more about an area that's new to me, is what else should we have asked, or is there anything else that we should have asked on this topic that we haven't so far? 

DP: One of the key things that we did not necessarily highlight through our conversation, a couple of key things that I would like to touch upon, let's say-- when we talk about GDC Edge and when we present to the customer and when we talk about how we manage our networks, et cetera, their eyes are wide open and they are all attentive to us when we talk about fleet management. You know, 5G and a lot of these services, when you talk about distributed and edge and at scale, it's very challenging to manage these hundreds of thousands of endpoints. Be able to make sure the configuration consistency exists, make sure you're able to lifecycle manage them with none to minimal disruption to services, et cetera, is a really huge challenge. 

So when we talk about fleet management as one of our core capabilities and core differentiators with this service, that really excites our customers, right? And we have proven it. We actually have proof points to that, because if you look at our Google global caches, I mean, they are all over the world, like 3,000 or so endpoints. We manage them. 

And as we scale, it's not necessary that our operation teams are scaling. As we scale our networks, we are continuing to manage them with the same SRE team. It's not like they are growing exponentially, right? How are we achieving all this? Through a lot of automation, through a lot of innovation, and so on. And so when we talk about that in the context of GDC Edge, I think that clearly stands as a differentiator for us. 

And the second thing is something like a host OS. People take that for granted a lot of times. But the really cool thing is Google is known to detect a lot of these security vulnerabilities before things are out there in the open or are known. With GDC Edge, what our telco customers are getting is, when they run these essential services on top of our product, when we discover these vulnerabilities, they are going to get it before anybody else can address it. 

And so it's not just about networking. It's not just about offering these services and lifecycle management and all of that. It's also about a very secure infrastructure and container platform that we are offering to them, which is always going to be ahead of everybody else in terms of security, vulnerability patching, and all of that. 

STEPHANIE: Earlier in the conversation, you talked about some of the partners and foundations we're working with. But are there any that we missed that is helping us in this feat towards our Distributed Cloud Edge network offering? 

DP: That's actually a very important point, Stephanie. I think throughout this discussion, we have been talking about how customers can deploy workloads on top of GDC Edge. And when we think about that, it's important that these workloads are able to work well on our platform. And so what's key to that is a very collaborative partnership that's required with the application developers. So when it comes to networking services using our platform, it's very important that our telco customers feel comfortable deploying any of our network function vendor workloads on the platform. 

So what are we doing for that? So we have explicit partnerships with all the non-network function vendors. We work with them very closely to make sure that their workloads are well validated on our platform. We go through a validation, joint validation cycle, which starts with a requirements discovery to all the way up to performance, characterization, et cetera. And so there is a well-laid out program on network function validation on GDC Edge. 

And the good news is, I mean, as of now, we are working with a ton of partners, all of them really collaboratively working with us and willing to transform their applications and workloads to be more cloud-native by leveraging some of the things we talked about earlier, network as a first-class resource. So whatever we are doing, they're adapting their implementations to leverage that. So the partner ecosystem is really vital for the success of this platform and for our customer success, delivering services like 5G, mobility, et cetera. And we have a pretty rich ecosystem, and there are a lot of press releases we have done. There's a lot of collateral out there, as well, as to what we are doing and exactly where we are focusing. 

KRISHNA: And to add to that, we're also collaborating with some of the customers as design partners because these are public networks and, as DP mentioned, the important work about working with the network function vendors and the partners to make sure they're optimally able to run, and also collaborating with some of the select service providers as design partners with the actual traffic so that we know what are some of the challenges there, because there are interesting use cases that we love customers when they come and talk about, you've solved this network fabric on GDC Edge. You've really made it as an automated construct for me to create, for example, VRFs on GDC, whereas, how do I expand this the same concept to my wireline networks? 

So we're collaborating with some of the customers as design partners. And that is critical because network modernization is not an easy thing because every network is built on an existing network construct. Like, you still have transport network that is still wireline network. So it's not addressing just one 5G part of the network. We're looking at network as a holistic thing. For example, how do you steer traffic and not bring that automation beyond what we did for 5G? How does an operator improve its operations? So we're also treating some of the customers as design partners in that sense. 

STEPHANIE: Yeah, that's really, really great to hear because there truly are very defined customers in the telco and service provider space. So it's not even like a nice to have, it's truly a need to have partnerships for this to be a success for both sides. So it's really great to hear that. Finally, for anyone who's interested, where can people go to learn more and get their hands on Distributed Cloud Edge? 

DP: I think we'll be providing the links that they can access, but Google Distributed Cloud Edge is a product that's already launched. We are in GA. And so we have a product page on cloud.google.com that they can go to. And on that product page, there is a contact link, as well. But yeah, do comment on this podcast, et cetera, and we'll definitely pick up from there and reach out. And I think Stephanie and Carter, I'm sure, will post some links, as well, to the [INAUDIBLE] later. 

CARTER: Definitely will. Thank you so much for coming in and sharing knowledge, and really appreciate you both. 

DP: Thank you. 

KRISHNA: Thank you. 

STEPHANIE: You know, Carter, I find the world of telcos and ISPs, service providers, fascinating because they have always been the real backbone of the internet, and they continue to bring vital services to people all over the world. To see the space modernizing and welcoming change towards service-oriented and cloud constructs is, I think, a really huge moment. I mean, I myself have had this presumption that OEMs and telcos have had a little bit of an aversion to major changes towards digital transformation, or at the very least a slower pace of change or adoption. But after this conversation, I realize it's not because of a rejection so much as it is the complexity of the space. 

CARTER: Mhm. 

STEPHANIE: As Krishna mentioned, 5G rollouts require scale, distribution, automation, a lot of operational efficiency on these really complicated network stacks. And to rapidly roll out the network, it's really great to see that Distributed Cloud Edge is offering that at scale, and that they're working together with Google. 

CARTER: Yeah, it was super interesting. And even just thinking about the modernization of phone networks from 3G to 4G to 5G, I never really thought about that transformation. I think Krishna mentioned that it was from physical to virtual. So now I don't need a physical firewall. That's something I program in software. 

And then now from virtual to containerization. And so what does that mean with the rise of containerization? Is it setting up elastic software applications at scale to meet network demand? Is that possible? And so hearing about Distributed Cloud Edge and what it offers, I could understand why telco companies, OEMs are so excited to be able to hop on that opportunity. 

STEPHANIE: Yeah. Absolutely, yeah. So it was great to hear from them about one of our most exciting portfolio products, Distributed Cloud Edge. So go ahead and check out the links in the description if you want to learn more or get your hands on it. As for now, Carter, what are you working on? 

CARTER: Oh, I did something nerdy and cool that I'm excited about. A few episodes ago-- I think it was 308, which is a weird number for the pi episode. But we did a test where we recorded video for that episode, and then I got to play around with the new visual style and make like a highlights reel from the episode. And so we're just passing that around on the inside right now, like, do we like this, do we not like this. But it looks pretty cool. It might be something that we do in the future. So if that sounds exciting to anyone listening, definitely drop us a line. But speaking about pie, you just put out a pie video. 

STEPHANIE: I did, yes. So to celebrate the world record of us calculating 100 trillion digits of pi, I created a video about it on YouTube with lots of actual pie that you get to eat. Yes, the edible kind. And yeah, it's up there right now. Check it out. It's a really fascinating story. If you didn't hear the podcast episode with Emma on it already, I go through that whole journey and how we used our infrastructure storage-- I mean, massive storage-- and automation tools like Terraform and other software to really fine-tune our deployment of it so that it can run more efficiently and at scale at a much lower cost. 

So check that out. It's got a twisted ending. It's kind of funny. So definitely check that out. 

CARTER: Yeah, I'm actually excited to check that one out. I want to see this twist at the end. What else are you working on, though? 

STEPHANIE: So I'm also working on a video about AlphaFold, which Kelsey might have mentioned last week on her cool thing of the week. It's a video about AlphaFold, which is a deep learning algorithm that DeepMind, which is a part of Alphabet, came out with. And now you're able to deploy AlphaFold on Vertex AI, which is a part of Google Cloud, to conduct your own predictions to do things like protein folding structures, which will help us really find out more about how proteins are formed in biology and come up with new treatments to diseases. So it's a really exciting space, and I have loved doing the research and working on it, actually with Kelsey on our team. 

And then I'm also working on some blog posts and content about our new home page for our Google Cloud client library reference documentation. It's way more streamlined. So keep a lookout. I'll probably talk about it on a future podcast episode. 

CARTER: Oh, that's exciting. And please send me the AlphaFold video. I want to know more. 

STEPHANIE: Will do. All right, for everyone else, thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]

