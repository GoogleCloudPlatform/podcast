+++
audioDuration = "00:44:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.253.mp3"
audioSize = 64528865
categories = ["Data Management", "Security", "Data Integrity"]
date = "2021-03-31"
description = "Hosts Stephanie Wong and Priyanka Vergadia learn about data governance this week in an interesting chat with Jessi Ashdown and Uri Gilad."
draft = false
episodeNumber = 253
hosts = ["Priyanka Vergadia", "Stephanie Wong"]
title = "Data Governance with Jessi Ashdown and Uri Gilad"
image="/post/episode-253-data-governance-with-jessi-ashdown-and-uri-gilad/images/hero/hero-EP-253.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/mhadhp/episode_253_data_governance_with_jessi_ashdown/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Priyanka Vergadia](https://twitter.com/pvergadia) learn about data governance this week in an interesting chat with Jessi Ashdown and Uri Gilad. While data governance includes security measures, the overarching term also means knowing your data, where it is, and how to use it. In their book, Jessi, Uri, and their co-authors hope to make data governance more accessible by sharing the knowledge Google has developed over twenty plus years.

We talk about the challenges companies of all sizes face implementing data governance frameworks and Uri shares a few tips for streamlining the process. Communication and prioritization are important no matter the size of your team. Companies must also understand the sensitivity of the data, how it's protected and managed, and why it's collected. 

Having a thoughtful, thorough understanding of what data gives you the most bang for your buck can help companies prioritize certain data collection, make better decisions, scale efficiently, and save money. When communicating with team members, it's important to share vital information about the data. Knowing who's in charge of what data, for example, makes accessing that data faster. With proper communication and thorough prioritization, teams can begin to think about how developing automated tools can increase functional data utilization.

Later, we discuss the ways companies can support employees on the data governance journey by clearly communicating the best practice rules. Uri describes how Google uses data governance principles and shares resources Google has published that detail these steps further. Tools like BigQuery and Data Catalog are Google-built products meant to provide companies with more automated data governance solutions.

Jessi and Uri wrap up the show with some more best practices in the data governance sphere, like proper metadata to increase the trustworthiness of data. And Uri details the tools Google Cloud has developed to make your data life easier, giving examples of companies putting these tools into practice.

##### Jessi Ashdown

Jessi Ashdown is a User Experience Researcher for Google Cloud who conducts user studies with customers from all over the world and uses the findings and feedback from these studies to help inform and shape Google’s data governance products to best serve those users’ needs.

##### Uri Gilad

Uri is leading the Data Governance efforts, within the Data Analytics area in Google Cloud. As part of his role, Uri is spearheading a cross-functional effort to create the relevant controls, management tools and workflows that enable a GCP customer to apply Data Governance policies in a unified fashion wherever your data may be in your GCP deployment. 

Prior to Google, Uri served as an executive in multiple Data Security companies: most recently as the VP of product in MobileIron, a public Zero Trust/Endpoint security platform. Uri was an early employee and a manager in CheckPoint and Forescout - two well known Security brands. Uri holds an M.sc from Tel Aviv University and a B.sc from the Technion, Israel’s Institute of Technology. You can find him on [Linkedin](https://www.linkedin.com/in/ugilad).

##### Cool things of the week

* Batter up! Anthos on bare metal helps MLB gear up for upcoming season [blog](https://cloud.google.com/blog/topics/hybrid-cloud/mlb-runs-anthos-for-bare-metal-in-its-ballparks)
* Introducing Network Connectivity Center: A revolution in simplifying on-prem and cloud networking [blog](https://cloud.google.com/blog/products/networking/announcing-network-connectivity-center)

##### Interview

* Data Governance: The Definitive Guide: People, Processes, and Tools to Operationalize Data Trustworthiness [book](https://www.amazon.com/Data-Governance-Definitive-Operationalize-Trustworthiness/dp/1492063495)
* Goods White Paper [doc](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45390.pdf)
* Dremel White Paper [doc](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36632.pdf)
* BigQuery [site](https://cloud.google.com/bigquery)
* Data Catalog [site](https://cloud.google.com/data-catalog)
* Identity and Access Management [site](https://cloud.google.com/iam)
* Strata Data Superstream Series [event](https://learning.oreilly.com/live-training/courses/strata-data-superstream-series-creating-data-intensive-applications/0636920053191/)

##### What's something cool you're working on?

Priyanka has been working on [GCP Comics](https://gcpcomics.com) and new [GCPSketchnotes](https://thecloudgirl.dev).

Stephanie is working on an [animated series about data centers](http://goo.gle/DiscoveringDataCenters).

 {{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 253 of the weekly Google Cloud Platform Podcast. I am Stephanie Wong, Developer Advocate at Google Cloud. And today, I bring on Priyanka Vergadia. Hello." >}} 

PRIYANKA: Hi, hi. It has been so long we have not been together on the GCP podcast. 

STEPHANIE: I know. This is the first time, I think, that we are cohosting, so this is two worlds colliding, finally. 

PRIYANKA: Yeah. I'm so excited for today's episode. 

STEPHANIE: Yeah. So today, we are bringing on Uri and Jessi. Uri is leading the data governance efforts within the Data Analytics area at Google Cloud, and Jessi is a user experience researcher with Google Cloud Data Analytics, and they are going to be talking about data governance. 

They actually just published a book called, Data Governance: the Definitive Guide, along with a couple more authors. And so they're going to dive into the details of what data governance is and how you can actually start to employ some of their best practices when it comes to managing data integrity on Google Cloud and beyond. 

PRIYANKA: Awesome. Well, I am very excited to learn a new thing about data. 

STEPHANIE: And I know that you are pretty into big data and machine learning, so I know it was probably a highlight for you. 

PRIYANKA: Yeah, absolutely. There were some things that I learned that I'll point out, maybe after the Cool Thing of the Week. 

STEPHANIE: Yes. Let's go ahead and get started with Cool Thing of the Week. 

[MUSIC PLAYING] 

So my cool thing of the week is that the Major League Baseball and Google Cloud are partnering and continuing their implementation of GCP. They actually decided to now run Anthos on bare metal in their ballparks. They have been using Anthos for two seasons, and they're going to be using it on bare metal, moving forward. 

It's actually a really interesting use case. So as I said, they're using in their ballparks. They actually have cameras, as you might know, within MLB, that collect data on everything from pitch speed, to ball trajectories, to player poses. 

That all gets fed into a data pipeline in real time, which transforms the data into on-screen analytics, and announcers use that as part of their game time color commentary. So obviously, minimizing the time between when the ball is hit and when it's displayed on screen is very important. 

And so what's interesting about the bare metal use case is that there are a lot of things that might happen with these servers that are running on the grounds at the ballpark. Hardware failures are definitely something that are more common than you might think. And so by eliminating the virtualization layer, Anthos on bare metal makes it easy to swap out the server. 

They can essentially deploy a new image easily, and the cluster auto-heals itself and automatically deploys their apps. So I'm hoping to get them on the podcast to talk about this, because I think this is very interesting and should inspire some people on how they can start using Anthos on bare metal. 

PRIYANKA: We don't want to see any lag on screen. You want to see the ball wherever it's going and however it's moving in, like, milliseconds' time if possible. So that's pretty exciting. 

And the fact that they use bare metal on Anthos is a great use case story in terms of understanding the use cases of Anthos on bare metal. So I'm excited if you're able to get them on the podcast. That would be cool. 

STEPHANIE: Yeah. Working on it, working on it. 

PRIYANKA: So Network Connectivity Center provides single management experience to easily create, collect, and manage different network sources. So on-prem, cloud, and there could be multiple different on-prem locations and things like that. So you could take all of that and look at it in the Network Connectivity Center. 

You might be using cloud VPN or partner or dedicated interconnects, as well as sometimes third-party routers and the software-defined WANs. So this Network Connectivity Center kind of helps look at it from the same view and helps optimize that connectivity and reduce any operational burden, and also lowers cost. So that's one point that I'm excited about. 

And then, the other point along the same lines is that this is a partnership with also Cisco. And so we're using basically Cisco and Google Cloud's joint solution, Cisco SD-WAN Cloud Hub and the Cloud Network Connectivity Center. So they're both working in conjunction to connect the branch sites and on-prem data centers to the Cloud, using our high-performance and global infrastructure. 

So this is kind of a partnership. But also along with that, there's also-- you're getting to experience your whole network connectivity at one centralized location, and also in different purposes. So if you have interconnect VPN, partner interconnect, SD-WAN, you can see all of that at the same place and optimize it. 

STEPHANIE: Yeah. And I personally think this is a pretty big deal, because as you know, as people who are moving their networks to the Cloud, you are already managing the complexity of connecting resources between on-prem, locations, other clouds, hybrid. And so having this central config layer to manage these multiple networks and still deliver access, policies, and services-- it's a really huge deal, I think, when it comes to cloud and networking, and moving from traditional models over to more of a service-oriented model. Now, that we have that out of the way, I think it's time to jump into the conversation with Uri and Jessi, so let's go ahead and do that. 

[MUSIC PLAYING] 

All right. So we have Jessi and Uri. Thank you so much for joining the podcast. We're super excited to talk about your Data Governance: the Definitive Guide book. Why don't you go and start by telling us who you are and what you do at Google? 

JESSI: My name is Jessi, and I am a user experience researcher at Google, focused specifically on data governance. 

URI: Yes, and my name is Uri Gilad. I'm a product manager at Google. I specialize and lead data governance and security efforts for big data. This is exciting. So what does data governance mean? 

JESSI: That is a juicy question. So data governance means so many different things to so many different people, and I'm glad that you asked kind of what we're meaning by that. I guess what I want to start with is saying it's not just about security. 

Oftentimes, when people say data governance, they think we're just talking about access controls or protecting sensitive data, and that is definitely an important part in what's been in the news with GDPR and CCPA, those sorts of things. But it's also about knowing what data you have and where it is, and knowing how you can use it. 

You can't run any kind of data analytics unless you know what your data is and where you can find it. That's the abridged version. 

STEPHANIE: But the longer version is explained in the new book that you both, along with other authors, wrote. And writing a book is obviously a really big undertaking. So why write a book about data governance? 

URI: One of the things that motivated us is, we talk to customers regularly about their needs, where they want Google Cloud to go. And we found out that many enterprises face the same category of challenges in deploying big data and managing it. And while those problems are sometimes bundled onto data security or IT or compliance, there's a well-established field called data governance, and those problems basically should be addressed under that context. 

Now, Google has a unique view on data governance, as Google is not only a well-established data privacy, data governance [INAUDIBLE] house for its own data, but also has views and products that we sell that are benefiting from this experience. So taking all that breadth of knowledge, built over basically 20 years, and bringing it to an accessible format such as a book, we thought will do good to the world. And that's why we did it. 

PRIYANKA: And what are the different data challenges or data governance challenges in this case that people actually face? And what are the gaps that users have that the data governance landscape can help fill? 

JESSI: I want to start this off with saying that, adding to what Uri was saying about our reason for writing the book is, a lot of data governance frameworks are-- what do I want to say? They're very difficult to implement. 

I was at a data governance conference a couple of years ago, and there was this beautiful session where this guy was explaining this beautiful data governance framework, all the people involved, and all the things that you needed to do. And this poor guy in the back raised his hand and he said, I don't have that headcount or budget, so how am I supposed to do that? And the presenter was like, well, you just need to get it. 

And I feel like a lot of people feel that that's the challenge in data governance, right? It's that it's something that everybody knows that they need to do, but it feels very inaccessible and way too complicated. It's too many people, it's too many steps, and it's extremely manual, and so it often just doesn't get done, or it doesn't get done well. 

And adding to what he was saying, that was another motivation for us writing the book-- hopefully bringing something that felt more accessible, that gave you kind of enough tools and knowledge that you can kind of make your own and instead of feeling there's this framework that I don't have enough people. I mean, who does, really? I don't think we've ever talked to a company who said, I have all the people that I need, I have all the budgets that I need, and we're good. 

STEPHANIE: Yeah. And it kind of reminds me-- because I've heard the messaging in the security space about the importance of having an entirely dedicated security team, SecOps culture, having a culture of security. Everybody needs to be responsible-- data governance-- that I see a lot of overlap in the messaging that companies tell people. But how does this change when you're talking to a person, versus a small team, versus an enterprise that does happen to have those resources? 

URI: Excellent question. So the challenges clearly change with the size of the team. When you are one person, you can't really trust-- or the enterprise can't really expect you to do it all. And so you need to do two sometimes opposing things. 

You need to prioritize ruthlessly around what is getting done. You need also to delegate some of the tasks to the data teams themselves, even if they are not subject matter experts in governance and security. As the enterprise grows and your team goes, your challenges become more of communication challenges. 

Because-- let's take the other extreme end-- if you're an enterprise that's doing a lot of M&A activity and subsuming other organizations into it, suddenly, there's like-- on this side of the planet, we've been doing data governance this way, and on that side of the planet, we have been doing something completely different. And now, you need to comply to the same regulation and have a unified approach. So that will be a challenge of a large team. I think the most important thing to focus about, regardless of the size of your team, is communicating what is done, what is the priority, who's in charge of what. 

JESSI: I mean, hands down-- communication is definitely something that-- if you don't have that, regardless of how big the team is, it will fall apart. I think another thing, too, with small teams versus enterprises is, there's also a different aspect, too, which is the kind of data that a company collects. So it could be a large company that collects data that isn't really all that sensitive or data that's super known. Right? 

It's the same kind of data, so there's not a whole lot of metadata management that needs to happen, because you kind of know what it is. It's not kind of forever changing. And that's another thing that we've noticed that can be pretty complicated for folks. We had talked to a company that has a Casino resort or something, I guess. And the amount of sensitive data and data that they have to govern and protect was incredible, because they're kind of a bank, because they're a casino, but also do hospitality. 

But it was just, the amount of complexity that they had to deal with is very different from an online company that only deals with email addresses. So that can kind of add another layer. And to Uri's point, you have to prioritize ruthlessly, especially depending on what kind of data you have-- like, how you're going to need to manage it. 

URI: And one in addition to that, when we say prioritize ruthlessly, it's not like, oh, I'm just going to organize this corner, and everything else, I'm going to ignore. It's like saying if I cannot control this data, maybe I'm better off not collecting it in the first place, in order to avoid the challenges that come with unloading the data. Basically, the thing that you don't want to do is feel good about one small area of the organization and be like terrified by the chaos everywhere else. 

It's like, you need to basically exercise a calm and meticulous manner in organizing the chaos. And where you are short-handed, maybe you are better off not collecting data. Because one of the things data governance is about not just protecting and managing the data, but making value out of it. If you cannot [INAUDIBLE] manage it, you're definitely not on the path to get value, so maybe just not collect it. 

PRIYANKA: Typically, everybody just thinks, let's collect the data, and then store it somewhere, and then we'll think about how it can be used later. But this is a great point and pretty important to think about, because there are lots of other resources that we spend in storing that data and managing that data. If we don't need it, just don't store it. Just don't capture it. It makes perfect sense. 

So that brings me to another thing that, Jessi, you were talking about previously where you said, depending on the headcount-- and that example of somebody who was presenting-- headcount and the budget-- you can scale up and down. But how would you do that? 

JESSI: We definitely talk certainly more in depth in the book about this, so I won't give you the 50-page version. But it kind of goes back to what he was saying also about prioritization, right? So there's kind of prioritizing in terms of data that maybe you don't even need to collect, but there's also prioritizing in, what are those things where I'm going to get the best bang for my buck, right? 

So what are the things that are really scary? I need to put attention on those things. And what things am I going to get a high business value out of? 

Like, if I'm a retail company, I need to know my sales per region or something like that, right? And this is how you can scale up and down. So if you only have this much headcount, this much time, you can select these things to prioritize and say, OK, this is what I know I have to do. 

And maybe I choose to not bring in some data, I choose to not store some, or I'm only going to prioritize these things to attach metadata or security tagging. But as you get bigger, as you have more headcount, you can add more things into this. You can collect more-- or a use case we've seen often is a company buying another company. And when you do that, you're also buying their data, which they like, but if it's not managed well, it's like you have this, but you can't use it. 

URI: So we talk about scaling down and about the sort of like principle of least data collected. If you don't really have a good reason and you know the data comes with a certain liability of like compliance or all of those things, just don't collect. Let's talk about the other aspect of this, which is scaling up. Everybody likes to scale up. 

Begin with the basics. Again, why are you collecting this data? Do you have a use case for it already? Good. See the data from the prism of data that use case, and as you scale up, think about, first-- we talked about this already, communications. 

Like, tell people, hey, I'm collecting this data. This is net-net worth your time, because people will know this data exists, and therefore they can use it and hopefully extract value. Communicate where this data is, who's responsible for that, what you are planning to do with it, and what liabilities that data exposes you to. 

Because again, communication is key, and scaling up can begin with that single data engineer who's building a pipeline and saying, oh, I know that this is critical information. I know that we are not yet certified to hold critical information. Maybe I will not collect it, or move it to a credit card processing agency. 

Once you have like-- everybody who's relevant in the organization knows who to contact, what to do, what to collect, what we have perceived in our organization is more sensitive and what we have perceived as not, you can start thinking of scaling up about automation. And automation does not take away your responsibility, but allows you to ease the frictions and allow ease of use. And there's a lot of aspects of automations. 

We talk in the book a lot about data cataloging, which allows you to find the data itself, and also find metadata about the data, which is like who owns the data, where these data come from, and so on. We go and talk about that in the book to a great extent. Automation and stuff like ease to use also should be built in order to support making the data work for you. 

If you build a wonderful tool that forces you to go to hundreds of clicks, where sometimes before that tool, the data was saved, are you really building a tool for the purpose of building a tool, or does it make somebody's day happier? If that does not make anybody happier, maybe as the saying goes, it doesn't spark joy, and maybe you are better off without this tool. So that's a thought about scaling up. 

STEPHANIE: Yeah. And it's interesting, because we talk about a lot of this transformation being somewhat of a cultural shift for companies and organizations. And I know, in the book, you've talked about making sure that you're enabling a frictionless experience both for those who are responsible for data engineering and everyone in the company who should be responsible for data governance. You have to empower individuals to feel like they are a part of being responsible for the data governance. 

So what do you do in a situation where a person or a team is collecting data, they're not aware of these best practices or standards, they go rogue, and they are collecting more than they need? How do you templatize this approach for cross-functional teams? 

URI: At the end of the day, again, thinking about tools and automation, unless that personal tool is really nefarious and sort of collecting data into an attached life in order to take it home, which becomes a security problem and less of a data governance problem, normally, you need to assume benign intent. And therefore, they are collecting data in order to build something or to use it somewhere, and the tools themselves should direct the users down the beaten path. I'm registering a new data set. OK. 

So individuals starting off a new data set, you need to let people know who owns that. That's easy. That's me. And there should be, and in many cases there is an automated system that detects that, and then automatically scans that for known types of sensitive data, such as credit card numbers, phone numbers. 

And even if the user is not aware, they will probably get a friendly email from an admin or data steward that says, hey, your data set that you registered contained phone numbers. Did you really mean to put it there? How about we have a quick chat? 

What you want to avoid is barricading yourselves behind forms and procedures that behave as a roadblock towards achieving certain business goals. Because the reality of today's IT, shadow IT, and all of those things is, if it's a true barricade, people will just go to the side and do something in their own silo. 

STEPHANIE: Exactly. 

PRIYANKA: So in this book, I'm sure you're talking about this, but how does Google play a role in data governance, and why come to Google for data governance? 

URI: That's a terrific question. So Google is a cloud provider and has big data tools. But even before Google was a commercial cloud provider, Google cares very deeply about privacy, about users' privacy. Google also indexes the internet. That means collecting a lot of data. And Google has performed and publish a lot of research openly in the academic community about big data and data governance. 

Two good examples are the Goods Whitepaper, which describes Google's own Data Catalog, which we productized and made available to the world as GCP Data Catalog. And the [INAUDIBLE] Whitepaper, which really describes BigQuery, which is a fairly successful commercial product that allows you to do big data analytics-- Google aggregates a lot of data and makes sure to comply with those principles that we've just described. Don't collect what you don't need. Eliminate personal data that is irrelevant. 

At the same time, make sure your experience in maps, in search, is relevant to you. When I search for news in Israel, I am not interested in finding out what's happening in elections in the US, for example. So Google's core competency in big data, data privacy, and data governance is really expressing itself in the tools Google brings and builds to the public in GCP. 

STEPHANIE: So you've mentioned before, Google was providing this commercially. But what's the difference between Google the corporation and Google the cloud provider with regards to data governance? 

URI: Google the corporation as an entity that makes money from Android, YouTube, ads, and GCP-- first of all, it has challenges a normal mom-and-dad shop that collects data to care for the casino does not have. Google operates in all of the countries on the planet. It's scrutinized and must adhere to all of the regulations all over the planet. Google has worked very hard to gain and maintain people's trust with the data. 

However, Google the corporation produces products that any enterprise could use. Even if it's not as sensitive, we bring the lessons that we have learned into tools such as BigQuery, Data Catalog, and all of those big data capabilities that we provide to the public. 

PRIYANKA: Given this discussion that we've been having since the last few minutes, I am now curious, what are some of the solutions, strategies, and best practices that are useful to tackle some of these challenges? Because it does look like it's humongous and challenging. 

JESSI: We don't want to harp on prioritizing. We've said that piece. I'll leave it. I'll move on to something else. 

But I think one of the things that's really important-- and Uri was mentioning this-- is about, who are the people who are involved? And this is going to depend on your company and how you have your data infrastructure set up. But one of the things is that if it's not someone's responsibility, it's no one's responsibility. 

The governance is not going to happen unless you make a concerted effort to say, this is how we're going to address it. It doesn't have to be that beautiful chart that has 8 million people, like I had seen at that conference, but it at least has to have some forethought in planning. So as we had talked about prioritizing, that's kind of where you start. 

OK, what do we need to prioritize here? And then, you need to figure out, how are we going to do that? Given what I have, given the amount of resources that I have, given the kind of data that I'm collecting, the storage solutions that I'm using, what tools do I have available to me to buy or just use what we have? And then, create a process of, this is how we're going to do it. 

And one of the problems that we've heard a lot of companies talk about is, it's all so broken already. It's kind of messy. It's like your kids' room, where you know it's a nightmare and you just don't even want to open the door. 

I think it scares a lot of companies like, oh, god, we know this isn't great, but I don't even know where to start with it. And one of the ways that you can start is saying, OK, for everything new coming in, let's put this process in place for those things and see how it works. Let's at least identify that we have a new process of, OK, we are going to make sure that we just don't collect this stuff of this new pipeline that's coming in. Let's take this out of it. 

Or we are going to attach metadata immediately when it comes in, and then we're going to filter it this way or that way. Especially like legacy companies that are, I don't know, like 100 years old, they have so much historical data, and who knows what's going on there. And it can be very overwhelming to try to address that. 

So a strategy of really kind of looking-- OK, this is our new process for everything new coming in. Let's identify this process, and let's identify who owns what piece of it. Uri had kind of thrown around some terms of data steward, data owner, and I'm not going to go super in-depth into each of these. 

And oftentimes, depending on the company, this is all the same person-- the person who knows what this data is, the person who has to say what's sensitive, what's not, where does it go, who gets access. But there should be a specific process that you identify. And yes, it's going to take you some time, yes, it's kind of a pain in the [BEEP]. But if you do it once, then you have it, and then you can modify it as you go. 

But it's one of those things that, if you identify it now, you will thank yourself later, even if it's just a very brief framework of, this is what we're going to collect, this is who's going to do this particular piece of the process, and this is how we're going to go moving forward. 

STEPHANIE: And let's say that you have identified a data owner, a data steward, and you have taken inventory of your entire environment. You've identified new cloud native or new applications that you're migrating to the cloud. To talk specifics, what can you use on Google Cloud? What products can be used to help? 

URI: That's a very good question. So two comments before I touch the essence of the question is, Google has taken great pride in providing a platform. What that means is that the product individually-- and I'll name them-- those work well with each other. 

And not only do they work well with each other, 100% of our products have public APIs that allow you to integrate with them really easily. And those two approaches support the notion of, A, we are going to come to you wherever you are. If your data is unstructured data in a Bitbucket such as GCS, that's well-integrated with the rest of Google Cloud, and I'll talk about that in a moment. 

If your data is highly curated analytical [INAUDIBLE] data that's in BigQuery, that's perfect, and we'll work with that as well. If your data is open-source, we can enable you as well. So that is one. 

So Google allows you to set any kind of data to accomplish any kind of business scenario. Normally, what we are seeing is, people have the data in one, two, or three silos or containers in cloud. One is GCS, where you have jobs outputting files into a file bucket, and in BigQuery, where people will have data moved in after it's been curated a little bit or not, or streamed directly as structured event into BigQuery. 

Both these products are highly integrated into Google's Cloud IAM system, Identity and Access Management. And even from day one, we come out with good defaults. You cannot like randomly access everything in cloud unless you are assigned explicitly certain permissions. 

We support you in your data governance journey, even if you know nothing about data governance, by saying, OK, here's the principle of least access. You are going to get access to anything that's been explicitly allowed to you. We are going to tell you via a tool we call Policy Analyzer-- hey, this account has permissions to do anything in your project. Did you really mean that? 

So that's something we support out of the box. Again, open source is of great importance to us. On-premise is-- well, practically most of data on the planet is in on-prem data silos, and we ease the way through migration tools, to data transfer tools, to extending Data Catalog to on-premise systems to open-source connect tools to enable you to, as Jessi said, start making order in the messy kids' room. 

STEPHANIE: Start with a bookshelf. 

PRIYANKA: You took an example of the kids' room, but I'm thinking about mine, and I was like, shoot. 

[LAUGHTER] 

STEPHANIE: Some people are just in the mess. It's fine. 

PRIYANKA: Yeah. Everything around me is a mess, but hey. If you could include a customer's story, something that we could relate to or that you've seen that's interesting that a customer might be trying to solve, how can that help land some of these challenges? 

URI: I have two interesting customer stories. One is a very well-known international bank, which I will not name. And they came to us and they said, look, we invested millions of dollars in onboarding, perfecting, customizing, and training a system. 

And that system was built for a very specific big data analytics product, and now we want to expand to more products, and we find out that we need to repeat this project again. Can you give us just table stakes capabilities across your systems? Well, we can potentially either add those to our homegrown products, or maybe even use some of yours. 

And the interesting bit-- so I already mentioned that everything is possible through API and orchestration in cloud. During the journey, the customer found out that they have erred a little bit in building a product to serve the administrator of the product that they have built. And sometimes, the reality of what they actually need to do is much simpler. 

So Data Catalog in GCP is integrated into GCP in a way that as soon as you create a new data set, that pops up in Data Catalog without any interaction or registration. That allowed them to set up alerts and monitor all new data additions without building complicated machine learning modules and utilities to detect and classify that data. So that is one example. 

Another example that's a fairly big insurance provider-- as an insurance provider, they collect a lot of sensitive data. They have two kinds of populations of analysts, and they want to limit the non-privileged analysts from accessing certain kinds of data. They needed primitives for specifically column-level data access controls. 

But at the same time, they needed to automate that to a very large extent, because they needed to run this on any new data set created. And the way they work is that they created it [INAUDIBLE] practically for a free user. And they took advantage of a combination of our capabilities and our API, and have run a process that literally-- one of the admins there told me, I basically worked myself out of a job. He's still employed, but that was actually lovely to hear. 

STEPHANIE: And at the end of the day, like you were saying in the beginning of the conversation, once you are able to have data governance, you're able to derive value out of that data, make it useful, and also make it trustworthy, and give it a source of truth. So when you say making data trustworthy, what do you mean by that? Can you explain? 

URI: Yeah. So we talked earlier about the case of somebody who's creating data for a certain business purpose in mind, like building the data set on the cloud. We also talked about making data discoverable and accessible for everyone. The thing is, it seems like from our research and our customer conversations, a lot of analysts spend a surprising amount of their time in actually looking for data, not analyzing the data. 

And when you have a data set that says-- let's call it customers-- and it has rows such as columns, you don't know what that means. Are those, like-- customers-- Are those internal customers or external customers? Does contact mean the last time they were contacted or the next time I should contact them? 

So one of the ways to make data trustworthy is to annotate it as much as you can. And with GCP, we allow you also to templatize some of the annotations, so we'll allow you to say, hey, it's your table. Must have an owner, must have a last revised date, must have an indication of whether this is production data or not production data. So that is one. 

The other way to ensure the data is trustworthy is also-- we call it a quality signal about that data. And that means, was this data manually curated by an expert at home, or is this something we scraped off the internet and we sort of created the table out of it? And if you actually read through the values, which at some scale of data is probably not possible, you will find out that it's mostly like mistyped entries, wrong values, and basically garbage data. 

And there are certain operations in big data, such as training machine learning models, which you basically show a robot a set of data and say, this is how the world looks. So trust me, all of these pictures are pictures of cats. Now, I'll show you another picture. Tell me if there's a cat. 

If all of the pictures of cats are actually of giraffes, that robot is not going to be very good at identifying cats. That's the principle of garbage in, garbage out. So you want to make data trustworthy by recording what it seems to deduce, who curated it, if at all, what's the quality signal of that data. And that really allows you to make more value out of it. 

JESSI: One thing that we haven't discussed much, because it's kind of a hairy topic, is an enterprise dictionary. And we talk about this more in the book. This is a lot of what he's talking about, especially in terms of making your data trustworthy. 

So especially things like customer and-- I mean, maybe contact-- I mean, if he's describing them like, well, maybe contact is the customer name. You know? 

STEPHANIE: Yeah, exactly. 

JESSI: And this is where your enterprise dictionary can help you, is having a common vernacular for everything. So instead of saying sales, revenue, ROI, you can trust your data that, when you are running a particular query and you say, OK, I'm looking at sales, that you're not going to not capture some of it because they were labeled as revenue. And when you ran that query to select that, it didn't show up, right? So that's another way that-- not only can you trust the data that you have, but when you are running analytics on it, you can trust the output, because you know it's capturing everything. 

PRIYANKA: That makes sense, right? We call it dictionaries for [INAUDIBLE]. I loved your example about the giraffe and the cat, not just for data governance, but even in machine learning, we feed bad things to the model, and then we expect magic to happen, which is not how it works, so very apt. Given all of this that you've talked about, where do you see data governance space actually heading? 

URI: In my opinion-- OK, I'm trying to make a prediction about the future. That's very dangerous. But I think what we'll see is, we are seeing over the past couple of years tremendous growth in big data. 

We are seeing the rise of tools that allow you to manage big data in order to extract value. Data governance is sort of a lagging indicator. Once you have a lot of data, you are suddenly compelled to make sense out of it, maybe comply with regulation. 

I think what we'll see is consolidation in that space. It seems like every data modeling and data analysis company also added to the tag line, governance. I think we'll see some consolidation there. There are terrific things I'm seeing in innovation in startups and even established companies. 

I think we'll see deeper and deeper integration into cloud providers, because those data access management, governance companies, they are sitting sort of removed from the data storage, and I think that gap needs to close. So we'll see integration of third parties into cloud providers of some sort. That's my dangerous prediction about the future, at least. 

JESSI: I would definitely agree with that. And maybe this goes without saying, but I think governance is going to become bigger and more of a requirement, with more regulations. In some of our conversations with companies, there's sort of been two camps. 

One camp is, I know it's going to come. And I'm not required yet, but I know it's going to come, so I'm going to try to fix it now. And then, there is the others who are like, I'm not going to fix it until I'm forced to. 

It's coming. I think more things are coming. And so as Uri said, I think there are going to be more tools, more integration, more ways to be able to do it, so that folks aren't saying I'm going to avoid it until I absolutely have to, that we can lower that barrier to make it that much easier-- more tools, more automation, so that it's not so arduous to implement. 

STEPHANIE: Yeah. We're going to keep the monsters in the closet and maybe put some cookie crumbles out so we can lure them out and be friends with them. Right? Well, this is all super exciting, and I know you have the book, Data Governance: the Definitive Guide coming out. So where can people go to learn more? 

JESSI: It is available anywhere books are sold-- Amazon. The publisher is O'Reilly. Their website-- you can google it. 

STEPHANIE: Awesome. 

URI: And also, a shameless plug-- Jessi is going to present at the Strata Superstream event by O'Reilly on May 4th. This is going to be open to O'Reilly platform subscribers, and that's a chance for you to hear more from Jessi. 

PRIYANKA: Well, awesome. I'm excited to pick up the book and learn more, and to maybe open that door of monsters. 

[LAUGHTER] 

A little bit more dramatic. 

STEPHANIE: All right. Well, thank you so much, Uri and Jessi. We loved having you on, and we'll see you next time. Thank you so much. 

JESSI: Thank you. 

URI: Thank you for having us. 

STEPHANIE: Yeah. So I felt like that was new to me. I have heard of data governance, and I understand the importance of data integrity. What I found striking was a similarity to the security mental model. Right? The responsibility lies on both the provider and the customer, but ultimately, you still want to provide a frictionless experience for your users while still enforcing these data governance protocols. 

PRIYANKA: So the other point that I thought was a similarity with the security mental model was how in security, we say, start with the least privileged, and then expand the privilege as needed. Similarly, I think Uri mentioned, if you don't need to collect the data, then don't. Find out whether you really need this data to be collected or not. 

Because if you are collecting it, then in order to manage that data, onboard that data, you are going to have to think about all the governance around it. And if you don't need that data, then you just wasted a lot of time. 

STEPHANIE: Yeah. And I think one quote that he said that was funny was, if the data collection or project doesn't spark joy, then it's probably not necessary, and it's adding additional overhead when it's not needed. But what happens when you have teams that happen to do that? 

And so he underlined the importance of having tools that should guide users down this beaten path, you should ask for what the data is being used for, and set up tooling that automatically scans for known types of sensitive data. And even if the user isn't aware, you are inherently implementing a standard practice, so that you can maintain data governance and so that the data can be more valuable, trusted, and usable. 

PRIYANKA: I think the other point I took from that conversation was, it really seems hard. And it doesn't just seem hard, it actually is hard to govern the data, right? And the only way to dive into it is to not leave the door closed, because that's what we end up doing a lot of times. 

Like, we don't want to look at the mess, so we close the door. Jessi said this so beautifully. That's kind of the point, right? Let's open the door. 

And the way to combat that monstrosity is essentially by simplifying and prioritizing what needs to be done, starting small, and laying out those steps and then deciding who owns which part of that process. So yeah, I really think that putting the prioritization and laying out those steps is going to help a lot of people at least try to peek into that door, and maybe even open it. 

STEPHANIE: Yeah. And I think there's a hesitation around using automation when it comes to data governance. And the key thing to know is that automation doesn't take away responsibility, but it does ease friction for both the administrators as well as the users who are responsible for data collection. So I think there are different ways to attack this problem, but I think what you're saying here is, you start small, you take inventory, you start by simplifying, prioritizing, and laying out the steps. 

PRIYANKA: Exactly. Well, I'm excited to dive into a tiny data governance project if it comes along. And now, I know which book to refer to, so that's a win. 

STEPHANIE: Yes. Exactly. Check out the book for more. So before we wrap up, I know you have some cool things that you're working on, Priyanka, so what's the latest? 

PRIYANKA: Latest. OK. So we are going to have-- Max and I are working on the next issue of the comics, which is on Zero Trust, on how to keep your devices safe and secure. So I'm excited about that coming out next week, and I'm working on the next sketch-- note, coincidentally, on bare metal solutions. So you're going to see that next week also. 

STEPHANIE: Awesome. That's super exciting. We love the comics. OK, well, I am also working on an animated series around data centers, as you might have heard about, and the next couple of episodes are going to be about data center security and how we utilize core principles to run our data centers at massive scale and efficiency. So keep a lookout for that as well as some more content around our product launches, which I can't talk about just yet. But keep up for new content there. 

All right. Well, that is a wrap for episode 253. Thanks so much everyone for listening, and thanks, Priyanka, for joining to host. 

PRIYANKA: Thank you. Bye. 

[MUSIC PLAYING]