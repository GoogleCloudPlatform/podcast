+++
audioDuration = "00:33:29"
audioFile = "Google.Cloud.Platform.Podcast.Episode.270.mp3"
audioSize = 48176497
categories = ["Networking", "Data Center", "Cloud Migration"]
date = "2021-08-03"
description = "This week on the show, Lorin Price and Stephanie talk about the differences between traditional and service networking with guest Ryan Przybyl."
draft = false
episodeNumber = 270
hosts = ["Stephanie Wong", "Lorin Price"]
title = "Traditional vs. Service Networking with Ryan Przybyl"
image="/post/episode-270-traditional-vs-service-networking-with-ryan-przybyl/images/hero/hero-EP-270.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/oxx3j3/episode_270_traditional_vs_service_networking/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the show, Lorin Price and [Stephanie](https://twitter.com/stephr_wong) talk about the differences between traditional and service networking with guest Ryan Przybyl. Ryan starts the show telling us how customer needs and advancing cloud technologies have shifted the conversations he has with customers from a traditional networking focus to an emphasis on cloud services.

Ryan describes how he helps different sized companies approach networking, whether they're cloud native or shifting to a cloud approach from a traditional background. For example, companies that take advantage of Google Cloud and its services can deploy environments quickly, allowing developers to work without infrastructure constraints. Enterprise companies using more traditional networking that move into the cloud will need to make some changes, Ryan says, comparing apples to oranges. They want to move in a way that takes advantage of the cloud without negatively impacting performance.

Later, Ryan tells us all about service-oriented networking and how it's possible for companies to choose pieces to shift to a service-oriented architecture without re-doing the entire project. We learn about Google's Private Service Connect which handles things like routing for companies connecting to third party services. Ryan offers some advice for companies considering this move and regales us with interesting anecdotes from his time helping clients.

##### Ryan Przybyl

Ryan Przybyl is a Networking Specialist at Google Chicago, and has held roles in both Cloud Customer Engineering and Google's Network Operations. Prior to Google, Ryan was the Senior Director of Sales Engineering for Level 3 Communications. Ryan's focus is on helping customers understand Google Cloud's networking technologies while ensuring customers make use of Google Cloud best practices. When not talking with customers, Ryan is usually working with product and engineering teams to ensure Google Cloud is developing the right networking products for the future.

##### Cool things of the week

* Private Service Connect is GA [blog](https://cloud.google.com/blog/products/networking/private-service-connect-is-now-generally-available)
* Securing the software development lifecycle with Cloud Build and SLSA [blog](https://cloud.google.com/blog/products/devops-sre/google-introduces-slsa-framework)
     * Container Security: Building trust in your software supply chain [site](https://cloudonair.withgoogle.com/events/container-security?utm_source=google&utm_medium=blog&utm_campaign=FY21-Q3-northam-NA1102-onlineevent-er-container_security&utm_content=gc_podcast)
* Introducing Cloud Build private pools: Secure CI/CD for private networks [blog](https://cloud.google.com/blog/products/devops-sre/cloud-build-private-pools-offers-cicd-for-private-networks)

##### Interview

* Google Cloud Networking Products [site](https://cloud.google.com/products/networking)
* Private Service Connect [docs](https://cloud.google.com/vpc/docs/private-service-connect)
* Private Service Connect and Service Directory: A revolution to connect your application in Cloud [video](https://www.youtube.com/watch?v=TYumathiFRI)
* Migration to Google Cloud: Getting Started [docs](https://cloud.google.com/architecture/migration-to-gcp-getting-started)
* What's New in Networking [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqK_yw5KHsGVYd--ZCIoUwEM)

##### What's something cool you're working on?

Lorin is working on Private Service Connect [docs](https://cloud.google.com/vpc/docs/private-service-connect).

{{< transcript "[UPBEAT ELECTRONIC MUSIC] STEPHANIE: Hey, everyone, and welcome to episode number 270 of the weekly Google Cloud Platform Podcast. This is Stephanie Wang, and today I've brought on Lorin Price. Hey, Lorin." >}} 

LORIN: Hey, Stephanie. How are you? 

STEPHANIE: I'm doing really well. I'm super excited to have you on, finally, on the podcast. I feel like Mark and I have talked about this for a while. 

LORIN: I know I have been, as you said, going back and forth with Mark for a while, and I'm glad that we could finally make this happen. 

STEPHANIE: Yeah, so, OK, for everybody else listening, tell us a little bit about who you are and the time that you've spent here at Google. 

LORIN: As you said, my name is Lorin Price. I am currently a networking specialist customer engineer in GCP. I have been with Google-- hm, it will be four years in September, and it's been great so far. Like, I actually have been based out of New York the whole time, and I actually just moved to Pennsylvania this weekend, so hoping to continue my long career at Google in Pennsylvania. 

STEPHANIE: [LAUGHS] Nice. We must have started about the same time, actually, because I'm hitting my four years I think in August, so I must have started like a month before you. 

LORIN: Oh, awesome. 

STEPHANIE: Yeah. So, OK, reason why I brought you on, because I think we're talking to someone who you know pretty well too, but I'm going to pose the question to you. Who are we talking to today? 

LORIN: Yeah. Today we are talking to Ryan Przybyl, who is on my team. He's a senior networking specialist CE, and we are talking to him about traditional networking versus service networking. 

STEPHANIE: Yes. I really, really love working with Ryan, and he brings some really interesting, thought-provoking ideas to the table. So this conversation is right up that alley too. But first, let's go ahead and jump into the cool things of the week. 

[MUSIC PLAYING] 

LORIN: So my cool thing of the week-- that came out just last week, actually-- it was announced that Private Service Connect, otherwise known as PSC, is GA, which is super awesome. I think this is a game changer for GCP networking. And it actually applies exactly to the talk that's upcoming with Ryan about transitioning away from traditional networking into more of a service networking model. 

But this could totally eliminate the need for VPC peering in the future. It's super awesome. You'll probably hear more with Ryan. But what is GA currently for PSC is just the ability to use PSC with Google APIs. And essentially, the way this works is you create a private endpoint in your VPC rather than using the Private Google Access CIDR range that is external to a VPC for Endpoints for Google APIs. But what is upcoming for PSC is PSC for ILB, internal load balancing, which enables private endpoints in VPC for service producers and service consumers, so really cool things coming. 

STEPHANIE: Yeah, this is awesome. I feel like this has been the talk of the town in the networking world for a little bit here, at Google at least, and so I'm really excited to know that it's GA. And I might be working on a video about it coming up soon. 

So my cool thing of the week is about security. So we just had our security event that we were promoting last week, and we'll include a link to it again, just so you can watch it on demand. But in the event, and in our podcast episode, we talked about securing the software development lifecycle with Cloud Build and SLSA, my favorite acronym. [LAUGHS] 

So one of the biggest challenges for software developers is the need to make informed choices about external software and products that they use on their own software systems. And so we've had a collaboration with the OpenSSF to propose Supply-chain Levels for Software Artifacts, or SLSA, and this new framework formalizes this criteria around software supply chain integrity, all to help the industry and open-source ecosystems secure their software development life cycles. So if you want to learn about these new tools and concepts and how Cloud Build supports SLSA, then check out the link. 

And my second cool thing, because I wanted to just squeeze this one in, is that we also had a big launch around Cloud Build private pools. And so you can now secure CI/CD for private networks. With Cloud Build private pools, you get the benefit of cloud-hosted, fully-managed CI/CD while meeting your enterprise security and compliance requirements, even for highly-regulated industries like finance, retail, health care. And so, for instance, you can trigger fully-managed DevOps workflows from source code repositories hosted in even private networks, including GitHub Enterprise. 

And so now Cloud Build supports things like VPC peering, VPC Service Controls, static IP ranges, having no public IPs, and even using org policy enforcements. So all in all, very exciting stuff happening. 

LORIN: Yeah, that's super interesting. I can almost see this possibly being integrated with PSC in the future too. Don't know anything for certain yet, but it definitely sounds like there's an opportunity there. 

STEPHANIE: Yeah, absolutely. I'm looking forward to seeing what is coming up with that. So we've talked about PSC enough. We got to learn a little bit more about it in Ryan's perspective, so let's go ahead and jump into the conversation. 

[MUSIC PLAYING] 

So Ryan, you've been itching to talk about this and get the word out. But before we dive in, why don't you tell us about your role and some of the conversations that you've been having with your customers around networking? 

RYAN: [LAUGHS] Sure thing, Stephanie. I definitely think that's an interesting topic on how the conversations are changing. So my role at Google, as some of you know from the previous videos, I and my team are network subject matter experts for Cloud. So we work with sales teams, and we spend pretty much my entire day talking about networking, either with customers, with product managers, or with some of our tech leads on the engineering side. So that's a little bit my background. 

Prior to Google, though, I think it's interesting to know that I was a very traditional sort of network engineering guy, right? So I worked for a large telco company, and I dealt with kind of the lower layers of the stack. Like I say, very traditional sort of networking. So what I'm going to talk about today, it's something of a functional shift for myself in addition to the customers, which is why I thought it was interesting. Because it definitely has me thinking a little bit differently about how we build things and how the cloud is evolving from, say, the way we were having conversations with customers just even a few years ago. 

STEPHANIE: Yeah, and you've referred to this before as network versus service-oriented model, and that's the mentality shift that has to happen. So why has this suddenly become so front-and-center for you and your customers? 

RYAN: Yeah, so this is kind of what I was mentioning where I see the conversation itself changing. There's two types of conversations I find myself having with customers these days. So when I talk about that network-centric model, what I'm really talking about is think about how we've built traditional data centers for the past 20, 30 years that we've been building these things, right? It's very network-centric. And what I mean by that is we're dealing with a lot of routing, we're dealing with a lot of security elements. 

Typically, I see this with very large enterprises, all right? People that have tons of applications. As an example, I worked with one customer who wanted to migrate 10,000 applications into GCP. It's a very monumental task. And one of the things that we always look at is, how can we make it very easy for the customer to migrate in? And a lot of times, we use the term forklifting. It's sort of taking their data center environment and kind of replicating it in the cloud. 

Now, we never want to do an apples-to-apples replication. We want to maybe change some things and take advantage of some of the things that cloud brings to the table. But when I say networking-centric architectures and network-centric conversations, it's all about that. How do I manipulate routes? How do I build this infrastructure? 

And a lot of times, the customers-- because there are so many applications, or they don't really deal with the application teams, it's really infrastructure engineering teams-- they don't even know what's going to come into the cloud. Now the other conversation I think we have, and when I use the term service-centric model, I typically see this with customers that were born in the cloud or are relatively new. They're not dealing with a whole ton of monolithic applications on the back-side. Their applications have been built using microservice architectures. 

And we're talking a lot about services, less about networking. It's not that networking doesn't exist. It's just the focus isn't so much on networking, more on services and how services operate in the environment. So does that make sense, in terms of the different sort of conversations? 

STEPHANIE: Yeah, and this is something that I bring up all the time in terms of different concepts in the cloud. And it seems like we're moving towards this trend of higher level of abstractions, whether we're talking about networking or we're talking about virtualization. So you've talked about larger enterprises with these network-oriented teams. What's the starting point for them versus a smaller company that might be starting already more cloud-native? 

RYAN: Yeah, so I think when we talk about these larger customers-- I mentioned earlier, like data center. We use a term like DCT, Data Center Transformation, right? And this is where we're typically working with these customers who own their own data centers. And quite frankly, if you're a retailer or you're in some other business that is not networking, running a data center is not your core business, OK? So it's kind of like these companies are like, hey, I have to be an expert on running a data center, yet, that's not my core business. I am a retailer selling a product. But networking and all the stuff that goes around operating your business, it's such a big aspect of the business that they're running their own data centers. 

So when we're talking with those customers a lot, it's about how do they operate that data center today, and how do we create, again, not the same exact model, but how do we take a lot of those networking constructs and give them those same constructs in the cloud so that they can move a lot of these applications? One of the challenges that we have when we're moving these applications, we're trying to-- I don't say minimize the amount of changes, but you can imagine if you're a company who's used to operating a data center and you're forced to move 10,000 applications, you don't want to make a ton of changes to things. Because the more stuff you're migrating, the more things that can break and not work and make your cloud journey more painful. 

So when I think about how we talk about a lot of these conversations, it's really in the framework of, help me understand how your data center is operating today. When we're dealing with more of a cloud-native company or a company that was born in the last few years and really developed applications very differently, they're not dealing with 10,000 applications that have been built over the 30 years, they don't operate a data center. Just as an example, as a kind of a funny story, I talked with a customer who, they introduced me to their network engineers. And their network engineers told me, I've never configured a router, I don't really know a whole lot about how routing works. Yet, these are their network engineers. 

But because, again, they're not dealing with a lot of these antiquated older constructs, they weren't familiar with them and they weren't as concerned about them. So the conversations, again, were very different. It was more about, this is the service, this is how the service actually operates, how to actually build this in the environment. And like I said, we weren't really getting into all these complex details about creating routing domains and overlaying very complex security policy over that. A lot of that stuff comes from just legacy stuff and the way customers have thought about their data center. So that's kind of the difference in how I see the network-centric conversations versus the cloud-native conversations happening. 

STEPHANIE: Right. And I think traditionally, network architects and engineers were the ones who were handling things like routing when they were physical things, right? And so it seemed like before, they were the ones who were handling this while not having as much visibility into what application developers were doing. And it kind of reminds me of how things are starting to change. Even when it comes to DevOps culture, for example, there's more relationship between developers and operators. 

So do you see that happening with networking and the application developers, or is it still somewhat of a black box for network architects, and will it continue to be like that? 

RYAN: Yeah, I definitely think a lot of customers, it's still very much like-- I'm going to use the term "separation of church and state," right? I work with a very large company on the West Coast, and we work with their entire engineering team. And just as a sort of case in point, they don't even know what applications are going to come into the environment. So they build everything as sort of a hybrid cloud environment, where they present to their developers and application teams, like, here's what services are available in GCP, but here's what services are available in other clouds. And they leave it up to the application teams to decide where they want to deploy, right? So it could be in GCP, or it could be one of our competitors. 

And this is becoming more and more common too where people are wanting to embrace a multi-cloud sort of environment. So they're trying to create kind of an apples-to-apples comparison between these different clouds and the data center that they run on-prem so that when an application team comes in to run something in the cloud, they don't really care where it runs, whether it runs in their data center on-prem, whether it runs in GCP or runs in one of our competitors. They leave that up to the application team to decide what is the best environment for them. 

So in that case, they are, in some ways, completely isolated. And it makes it really interesting, because when we talk to them about, what does the future workload look like? How do you plan this stuff? One, they don't even know. And two, I say this kind of loosely, but they don't really care. It's kind of like, we just build the infrastructure and we present all these capabilities to our internal business units, and they make all of decisions around this stuff. 

STEPHANIE: Do you think that that's the case for cloud too? Because I'm imagining an application developer that is working with, let's say, Google Cloud. They do have to somewhat have a fundamental understanding of how VPCs work and somewhat know the operational aspects of it. Or do you still think it is fairly segregated in that aspect? 

RYAN: Again, I think it depends on the size of the organization. The really big organizations with-- let's say you have 500 traditional network engineers working for you, right? It's still a very segregated conversation. And then I would also say, depending on how we build the infrastructure, the developers don't always even have to have a lot of knowledge about the underlying infrastructure, right? If the team that we work with does it the right way and they're automating everything and they're using a lot of the tools that we give them and recommend, they can deploy the environment very quickly and very seamlessly. And then the developers can come along, and everything is complete transparent to them. They can build VMs. They can do what developers want to do and not have to worry about all of the infrastructure components. 

So if you do it right, you can have the infrastructure team still being very walled-off and have the development team come in and do their work. But again, to your point, the newer companies that we deal with-- and when I say newer, think about companies that are doing service offerings in the cloud, like maybe that's their main business. A lot of times, their network engineers are definitely a lot more attached at the hip with the developers and with the services that are running, because they may be running just a handful of services in the cloud environment. It's not, like I said before, an engineering team that's like, we have 10,000 applications. They can't be attached at the hip with 10,000 different developers who are working on all this different stuff. It's just impossible. 

So I think a lot of your question kind of depends on how big is the organization and how much-- we use the term technical debt. How much baggage do they have that they're trying to move into their cloud environment? 

STEPHANIE: Let's drill in on that a little bit, because we're talking about companies of varying sizes, backgrounds, network topology sizes. So how does the path differ for a company that does have 10,000 applications and more of a traditional networking complex topology versus a company that is cloud-native, has a service in the cloud already, and they can get up and running more quickly there? 

RYAN: I'm going to go back in history a little bit. So four to five years ago, I would say a lot of conversations were, we want to dabble with the cloud, we want to move some applications in, nothing business critical. I see a lot of the big organizations that are still trying to onboard, they're still kind of in that model. Let's try to rebuild as much of the data center as we can in the cloud. 

And I use the term-- I like fruits-- call it like, apples to apples or like, apples to oranges, right? An apple is round and maybe red, and an orange is round but maybe orange. we're. Trying to get them to maybe go from apples to oranges. We don't want to get them to go from apples to cherries, right? I mean, that's a very different fruit. It's much smaller, a complete different color. Forgive my high-level analogy there, but hopefully, that makes sense, right? 

STEPHANIE: Yes. 

RYAN: Because we want them to take some advantages of the cloud, but asking them to make too much of a change is just more than some of these large enterprises can bite off. Like you don't want to set yourself on a path to migrate 10,000 things and then find out you changed so many things when you migrated to cloud that have the applications don't work, they're broken. You can create a lot of operational challenges for yourself. 

And that's where our team comes in. While we're building networks, we're trying to understand, what are the applications that run on top of all of this stuff? Because we don't just build networks in a vacuum-- we build them to support applications. But we also understand we're not just dealing with technology. Like, I can build all sorts of networks in the cloud. 

But you've got things like operational models. There might be a team of 500 operational engineers who have to operate this thing every day. And if they operate a certain type of network, that's what they're used to dealing with. And if I take that network and completely change it too much, well, they got to retrain 500 people. Their tools that they use for monitoring might have to change, right? So it's not just about the technology and how we're using it, but you've got to really consider the applications that we're moving, the operational models, the business structure that the customer uses. 

And again, this is where things get really complex with these large enterprises. Their businesses, they may have 30 different business units that all operate in a very specific way. If they change things too much and the business units can't operate in that same way, that can be very problematic for their business. So it's very interesting working with these large enterprises, because it's not purely a technology conversation, right? We're trying to build the right network, but we're trying to look at all these different lenses to build the right network for the customer that allows them to migrate in the cloud, capitalize on some of what the cloud brings to them, but not create so much change that it's going to be completely disruptive for them. 

And that's where I think the conversation becomes really interesting between the service model and the architecture model. The service model can be a very different change, right? Just think about it this way. If you're a network engineer and you're dealing with networking and routing, and all of a sudden, they ask you to say, don't be so concerned about that-- be concerned more with how your service is functioning. They're like, well, I've never thought about my service. I've never really thought about that before, right? Like, I just build the infrastructure and the service teams come in and use it. 

And I'm saying, no, no, no, we're going to do a paradigm shift here, right? That can be a lot for a company to bite off. So even though I think that's the future, a lot of companies are going that way-- and that's even how Google run services, right? We run Gmail. We run search. We run YouTube. 

While we have a very complex underlying network, that's not what we focus on every day. We focus on the service. Is the service up? Is the service running? For me as a network engineer, starting to get in those conversations, I have to make a mental change too. And I see it with our customers, even to the point where I've had a customer come to say, I'm really uncomfortable having these conversations, like, I wonder what my job future is going to look like, because we're trying to abstract networking away and not make it as much of a conversation. But that is my background, and that's what I've been doing for 20 years. 

And I'm in the same shoes as that person. And it's very uncomfortable, but I also see that paradigm shift. And even large enterprises, once we get them on board and then we start showing them some of the service-level constructs that we have, even if they were opposed to it early on, they start to say, oh yeah, I kind of see how I can use this, and I kind of see the value this brings. 

And then we find out, how do we integrate it into the architecture? Because they're not mutually exclusive. It's not like you have to be network-centric architecture or service-centric architecture. You can have this one and be migrating to this one. It's just a question of how and what's the right path to do that. 

STEPHANIE: And this path that we're talking about involves responsibility both from the cloud provider and the customer, as you're saying. It's a paradigm shift for both, right? So when we're talking about building a bridge between going from apples to oranges, what is actually being abstracted and handled by a provider like Google Cloud in a service-oriented model? 

RYAN: It's a really good question. So if you look at a traditional networking model, and I have a bunch of different applications that are running, just is an example. Typically, you work saying this application is running over here, and this application is running over here, and the two need to talk together. So what is the route to get between them, and what sort of functionality, what sort of security parameter do I have to overlay on the top of it? 

But generally speaking, we're dealing with sort of layer 3 and 4 connectivity with a security bend to it at some level. When you start to talk about service networking-- let me talk about one particular product. I'm going to talk about Private Service Connect, or PSC as we call it, right? PSC is designed to be-- a term I would use is a service endpoint. So think about it as an endpoint that you put into your network that front-ends a service. And that could be a service you're consuming from some outside entity, it could be a service that you're consuming from another business unit. But it abstracts a lot of things for you and changes the conversation to, how do I route between here and here? It's kind of just, how do I get to the endpoint? 

But once it gets to the endpoint, PSC does a lot of things under the covers that you don't see. It handles the routing to what we call the service producer-- which, again, could be something that lives completely outside of your organization, could be a third-party company that you're buying a service from. So how do you route to that company? How do you handle overlapping IP space? if you're a traditional network engineer and you're looking at this, you're kind of going, OK, I've got this IP space here and this IP space here and I have to manage it in some way, or I have to control NATing between them, and I'm going to install this device that's going to do this. 

And, again, very network-centric conversation. You introduce PSC to the mix, and it's like, just route it to the endpoint, and Google will manage everything else. We'll manage the routing to somebody else's environment completely. We'll handle all of the NATing and all of that stuff for you, so you don't have to worry about it. So, again, it just becomes this endpoint that sits in your network that front-ends the service. 

And we're looking at doing that even with Google APIs and Google services where you can put a PSC endpoint in place to front-end those APIs. And you can control it a little bit different. Now, one of the things I would say is, if you're a traditional network team, and you're like well, OK, what happens when the service doesn't work? How do I troubleshoot this? 

Because Google is managing a bunch of this stuff for you-- Google's managing some of the routing, Google's managing some NATing under the covers-- you kind of lose visibility to some of that stuff, right? And if you're thinking from a very network-centric mindset, it kind of causes this knee-jerk reaction to say, OK, as a network engineer myself, somebody who's been in the situation of like, is it the network that's causing the problem? The network engineers are always trying to clear the network and say it's not the network, and you need visibility end-to-end. 

But with something like PSC-- and I'm not saying PSC is a bad thing. But once it hits that endpoint, you kind of lose visibility to it. Is it something on the other side that's not working that you can see? Is that the service producer that's having a problem? At the end of the day, what really matters is the service is down, but how you troubleshoot it and how you approach it is very different. So I just used PSC as one example of a very service-centric architecture construct and conversations that we're having around that and how customers have that knee-jerk reaction, because they're thinking about traditional networking of, I got to have end-to-end visibility so that when there's a problem, I can pinpoint exactly where the problem is. 

STEPHANIE: Right. And I can understand hesitation around relinquishing control or visibility so that you can troubleshoot and actually find root of cause. And we'll talk more about this later about some of the network intelligence that we provide for visibility, but I do want to highlight a point that you were making earlier about not needing to completely shift your existing model to the cloud when it doesn't make sense. And it kind of reminds me of what we tell customers about microservice migration, like people who are moving from virtual machines into more of a containerized environment. You should actually move what makes sense, and you don't necessarily need to do a complete decoupling or re-architecture. 

Are you seeing most companies using cloud-native apps to adopt this service-oriented model, or is there actually an opportunity to use traditional, more hefty applications built on complex networking models and shift that to a service-oriented model? 

RYAN: So it's a really good question. I think the answer is you can. So if you have these big monolithic applications-- and we do talk to customers about this-- you can spend time to re-architect the application. The question is, do you want to, right? So if it's an application that you know is going to be business-critical for the next 20 years and you're wanting to move into more of a service-centric model, and you want to sort of break it down into microservices so that you can make changes to small parts of the application without trying to overhaul the whole thing-- sure, it may make sense for you to do that, right? 

But think about it from this perspective. You have a working application, right? Maybe it doesn't really work with these service-level constructs. It's not set with a microservice. It is just this big monolithic thing that you want to move. We move those things all the time, and they work just fine. So if you're a business leader in that company and you can migrate that application into the cloud, a lot of times, it's just do it. And don't spend the time and the resources to re-architect the whole thing, because a lot of these applications, they're not going to be something you're going to use for 20 years, right? They're going to change. 

So, again, I'll go back to that term "technical debt." You could move a very large application in, and it brings with it some technical debt. You could spend a lot of time and money trying to fix a lot of that stuff, or you can just take the approach of, I know in five years that application is going to go away anyways, so I don't want to spend the time and the money to refactor, re-architect the application into a new sort of construct. I just know when we build the next one, or whatever that next application is for that piece of my business-- maybe it's your HR application, as an example-- it's going to be more cloud-native in the future, right? Maybe we're going to go and use software as a service from somebody else. 

And this is going to be a service that's running in the cloud. And maybe that company is going to use PSC, as an example, to basically put an endpoint into my network that basically means my entire HR monolithic application that I use today is going to go away in five years, because now I'm using software as a service through some other company. So when you think about that, does it really make sense to spend the time and the effort to do it? 

In a lot of cases, my point of view is it doesn't, right? Like, we can make it work in the cloud most times. So let's sort of make it work. And let's just move on and just acknowledge that there's technical debt there, and it maybe is not the optimal architecture for what you want. But over the course of time, it's going to just go away. So don't spend a lot of time on it. 

Again, there are applications that are maybe so business-critical, you're like, I'm going to do this thing for the next 20 years. And you may want to invest in doing that. So every organization has to make that decision. But my personal view, nine times out of 10, the answer is no. Like, don't really mess around with it. Let's just get it to work the way it needs to work. And then just through natural evolution of your business and the way applications get retired, it'll go away at some point. And when it goes away, that technical debt will go away with it. 

STEPHANIE: Right. And I think companies probably are on the same page as you as you not wanting to reinvest a whole lot of upfront capital just to change the things that are already working. And as we know, architectural changes beget new security reviews and a lot of downstream effects, right? So do you have any stories of customers or people you've worked with that have had to go through this process? 

RYAN: Yeah. So interesting enough, I was working with one customer-- and one of the things people have to understand about cloud is it's a constantly evolving model. And I think we'll talk about this in the next segment that we're going to do. It's not like your traditional data center. Things change much faster in the cloud, and we'll talk about that, of the why. 

But a lot of enterprises, to change their architecture-- I actually had a very senior architect kind of yelling at me on the phone and kind of saying, like, it's great that Google can shift on the fly like that, but every time we make architectural changes they have to go through security reviews. There's all of this red tape that has to be done. So when we think about-- with this particular customer, I was like, this is the way the architecture will look today. In six months or 12 months, there's all these other features that are going to come down the pipe, and this is how I would change it in the future. 

And that's where it was creating this really kind of tough rub to say, yeah, but for me to implement those changes is going to take me six to 12 months, because I have to have security reviews. I have to have architecture reviews. So there was all this red tape that sort of comes around with making these changes to customers. 

So while we're always saying, like, the cloud is constantly evolving, you want to constantly be changing-- we also have to be cognizant that Google can change on a dime. This is the way Google was built, OK? But not all enterprises can do that, and that's OK. I think we, as a company, just have to be cognizant that not everybody operates at Google. And I say it's kind of a funny story, because literally, they were yelling at me, saying I have to go back to Enterprise 101 one school, because that's not how enterprises work, right? 

STEPHANIE: Yeah. 

RYAN: And I totally get where they were coming from, right? Sometimes we at Google kind of just think everybody operates like Google, and the reality is that's rarely the case, especially when you look at these companies with 10,000 applications that have been around for 50 years. They don't pivot on the dime. And their journey to the cloud is going to be a lot longer, and their ability to integrate some of these new constructs-- like we're talking about this service-level architecture constructs-- might take them more time. But that's OK, right? We want to just get them in and give them the ability to take baby steps to get them on that path that we see as the future path. 

STEPHANIE: Right. And I do want to dig into this a lot more, Ryan, but we're going to save some of this for the next segment, as you mentioned. And I want to dive a little bit more into that operational shift and what Google Cloud specifically is doing to build a bridge to get people to have a stepping stone into a service-oriented model. 

RYAN: Yep. Thanks for having me, Stephanie. 

LORIN: So that was really, really cool. So there were a couple points that I thought were super interesting that I just wanted to bring up with you, Stephanie, because I think we can possibly relate on a few of these. So Ryan brought up there's this new generation of network engineers. Some of these people have never configured a router before, as opposed to the traditional network engineers that are racking and stacking. They're in there, they're working with all these products. 

But I thought that was really interesting, because I relate to the newer generation of network engineers, right? My background is in consulting, is in sales, and I just happen to find networking super interesting, but I'm among those that have never actually configured a physical router before. All of my experience has been in cloud networking and service networking, which I just thought was interesting. 

STEPHANIE: Yeah. I mean, so am I. We are born in the cloud, and that's OK. I think it's interesting, because the conversation put things into perspective that we often talk about cloud native, we talk about the framework for cloud native applications. But I think oftentimes, there's a whole subset-- and actually, majority of enterprise customers or even just on-premise customers-- operating in a private data center with a large investment, having to move to the cloud and wanting to experience the benefits of service-oriented networking. The challenge is who is going to make that process easier for them. 

LORIN: Yeah, and it's really interesting how that also kind of relates to specific industries as well. In my experience as an enterprise customer engineer before I came into this networking specialist role, I worked across a lot of different industries at Google. And from my perspective, industries like public sector and telco and finance generally lean towards the traditional networking and just kind of want to mimic what they have on-prem and make it work in cloud, which isn't necessarily a bad thing, right? Like, it eliminates a lot of changes. So it's a bit safer for those industries, whereas industries like media and entertainment, digital-native-- even retail, I see going towards and adopting that service networking model more. 

STEPHANIE: Yeah, exactly. I mean, it's no fault of people who want to bring their topologies to the cloud, because you have, again, this investment not just in the technology, but also in your engineers and the operational aspects of it. Can you really see the same monitoring capabilities and telemetry in the cloud as well? So I think we're all moving towards a direction, as Ryan said, to service-oriented networking, and it's helpful to see Google Cloud is making a large investment in bringing customers on in a seamless manner. 

LORIN: Yeah, totally. 

STEPHANIE: All right, so, Lorin, I have to ask, I know you just moved into this role, network engineering. I'm so, so excited for you, because not too long ago, we ran into each other at a network training a couple of years ago, and I just saw this happening at some point. So tell us about what you're working on. 

LORIN: Yeah, yeah. So I've been in this role for about a quarter now, so I feel like my onboarding is done, right? Like, I feel like I'm kind of really coming into the role. So as of what's next, I've actually just recently declared my mini-specialty, which is PSC. So I'm going to be really diving into PSC with customers, understanding what their needs are around this product, and working with our product managers to bring these new features to market. 

STEPHANIE: That's so exciting. It's a good spot to be. It sounds like you are going to be very needed in many conversations this upcoming year. 

LORIN: Oh my gosh. You know it. Yeah. I'm so excited, though. I'm very excited. 

STEPHANIE: Well, thanks so much for jumping on. And for everybody else, we are going to have Ryan again on next week on the GCP Podcast to continue the conversation around the future of service networking, so stick around. And we'll see you all next week. 

LORIN: See you, everyone. 

[UPBEAT ELECTRONIC MUSIC]