+++
audioDuration = "00:30:23"
audioFile = "Google.Cloud.Platform.Podcast.Episode.166.mp3"
audioSize = 44167550
categories = ["SAP HANA", "SAP", "HANA"]
date = "2019-03-13"
description = "Jon Foust is back with Mark this week as we talk about SAP HANA."
draft = false
episodeNumber = 166
hosts = ["Mark Mandel", "Jon Foust"]
title = "SAP HANA with Lucia Subatin and Kevin Nelson"
image="/post/episode-166-sap-hana-with-lucia-subatin-and-kevin-nelson/images/hero/hero-EP-166.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/117267610519909886476/posts/6q2zjCD1R7b"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/b0ovgw/episode_166_sap_hana_with_lucia_subatin_and_kevin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon Foust](https://twitter.com/syntxerror1) is back with [Mark](https://twitter.com/Neurotic) this week as we talk about SAP HANA, a data and application platform. [Lucia Subatin](https://twitter.com/LuciaBlick) and [Kevin Nelson](https://twitter.com/knelsoncloud) elaborate, explaining that SAP HANA is engineered for running SAP business applications. It is capable of handling large transactions very quickly and with great flexibility. With HANA, you don't move data around, so you can run transaction workloads, as well as analytics, etc. in the same platform.

By teaming up with GCP, SAP HANA ensures that their enterprise users will have scalability and storage no matter how their businesses grow. GCP and SAP HANA developers have been working together to continue to make the products better.

<!--more-->

##### Lucia Subatin

[Lucia](https://twitter.com/LuciaBlick), Developer Advocate for SAP, is a proud geek. Her mission is to bring developers closer to SAP HANA and optimal enterprise solutions. Her contribution towards the community is based on enabling content and facilitating adoption by exploring and sharing more and better ways to capitalize the power of the platform.

##### Kevin Nelson

[Kevin](https://twitter.com/knelsoncloud) is a Google Cloud Developer Advocate focused on enterprise strategic partners. In his free time, Kevin is an avid sailor, brewer, and history buff who loves stargazing and studying the Age of Exploration.

##### Cool things of the week

* Take your mobile games business to the next level with Google AdMob and Google Ads at GDC [blog](https://www.blog.google/products/admob/take-your-mobile-games-business-next-level-google-admob-and-google-ads-gdc/)
* Gaming developer hub [site](https://cloud.google.com/docs/games/)
* Go global with Cloud Bigtable [blog](https://cloud.google.com/blog/products/databases/go-global-with-cloud-bigtable)
* Announcing Knative v0.4 Release [article](https://medium.com/knative/announcing-knative-v0-4-release-ec3a230823a6)
* Build with Classroom G Suite [blog](https://www.blog.google/outreach-initiatives/education/build-with-classroom-g-suite/)

##### Interview

* SAP [site](https://www.sap.com/index.html)
* SAP HANA [site](https://www.sap.com/products/hana.html)
* SAP S/4HANA [site](https://www.sap.com/products/s4hana-erp.html)
* SAP C/4HANA [site](https://www.sap.com/uk/products/crm.html)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Cloud Foundry [site](https://www.cloudfoundry.org)
* SAP HANA Express [site](https://developers.sap.com/topics/sap-hana-express.html)
* Compute Engine [site](https://cloud.google.com/compute/)
* GCP Marketplace [site](https://cloud.google.com/marketplace/)
* Kubernetes [site](https://kubernetes.io)
* Ubuntu [site](https://www.ubuntu.com)
* Elephants, Rhinos, and People [site](https://discover.sap.com/best-run/en-us/customer-erp/index.html)
* Request an SAP CodeJam [site](https://www.sap.com/community/events/codejam.html)
* Information for Developers [site](https://developers.sap.com/index.html)
* SAP TechEd [site](https://www.sap.com/community/events/teched.html)

##### Question of the week
If I want to programmatically search for links to an image that I have, how can I do that?

* [Web detection tutorial](https://cloud.google.com/vision/docs/internet-detection)
* [Detecting Web Entities and Pages](https://cloud.google.com/vision/docs/detecting-web)


##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com), [Cloud NEXT](https://cloud.withgoogle.com/next/sf), and [ECGC](http://ecgconf.com) in April.

Jon will be at [GDC](https://gdconf.com), [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [ECGC](http://ecgconf.com), and [Vector Conf 2019](http://vectorconf.com/).

Our guests will be at [SAP CodeJam Venice, CA March 7, 2019](https://www.eventbrite.com/e/sap-codejam-venice-registration-56530308675), [SAP CodeJam Mannheim, Germany March 18, 2019 ](https://www.eventbrite.com/e/sap-codejam-mannheim-registration-57059912735) and at [Cloud NEXT](https://cloud.withgoogle.com/next/sf).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 166 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel. And I'm here with my colleague, John Foust. John, how are you doing today?" >}}
 
JOHN: Really, really good. 

MARK: You good? 

JOHN: Haven't been having a lot of fun this week. So really excited to get talking to our guest, today. 

MARK: Yeah, not too cold in New York, I hope. 

JOHN: Actually, it snowed. And I was able to escape the snow. 

[CAR BURNING OUT] 

[CHUCKLING] 

MARK: That's good. Awesome. So this week, we are talking to Lucia Subatin and Kevin Nelson. Lucia is a global developer advocate for SAP. And Kevin is a developer advocate for Google Cloud. We're going to be talking about SAP HANA, which is very exciting and interesting. And then we'll move on to our question of the week, where we'll be talking about programmatically searching for links to an image. 

JOHN: That sounds cool. I've actually got to mess around with that when I built out my first project, when I joined Google. 

MARK: Nice. But why don't we get stuck into our cool things of the week? John, why don't you take it away? You got a fun one. 

JOHN: This year, at GDC, we are announcing six sessions and one workshop on monetizing your game. Most game developers, when they create their game, if they want to make it completely free to play but earn some income, they'll probably introduce ads into their game. So Google AdMob and Google Ads will be at GDC and holding these sessions and mixers. And we'll also be at the Google mixer. 

Mark and I, I believe, will be there. If you're going to be at GDC, stop by and see us. 

MARK: My next one, speaking of games, there is now a new game developer hub. So if you're looking for a singular place to look at all the stuff for Google Cloud to do with games, if you go to cloud.Google.com/doc/games, you can see a set of quick starts, featured code labs, featured products, resources. Keep an eye on it. It's just started, but I expect there'll be lots of cool things to come, still. 

JOHN: Yeah, I'm pretty excited to actually be adding some things to it, hopefully. 

MARK: Yeah, sweet. 

JOHN: The next thing we're going to talk about is Cloud Bigtable and its announcement of replication capabilities that are currently in beta. This functionality is used, currently, by Google Search, Google Maps API, and YouTube. What this does is it allows us to replicate clusters in any zone at anytime, and seamlessly, at scale, from gigabytes to petabytes. So you'd imagine that scaling that high would have some type of latency. 

But this expansion allows us to do that with high performance throughput and low latency response times. 

MARK: This one's a little bit old, so back on February 20th. But we didn't mention it previously, and I realize that. So Knative had its 0.4 release back in February 20th. This is actually really nice. Knative now has support for not just HTTP, but also supporting HTTP2 and gRPC. It also has the ability to upgrade an inbound HTTP connection for web sockets, as well. 

So there's lots of new stuff outside of that, also, for Knative. So make sure to check out the GitHub repository, and see what's going on. 

JOHN: And the last cool thing on the week is being able to build with the G Suite Classroom API. It allows developers to access course data, programattically. And it allows them to build deep integrations within classrooms. So they enhance learning and save students and teachers a lot of time. The Classroom API allows developers to integrate applications within their classroom, such as apps that game-ify lessons and interactive quizzes. 

That way, you can gain the interests of your students. I currently use Classroom, so I'm pretty excited to put my hands in this and see what kind of cool things I can build up for my students. 

MARK: Fantastic. Well, John, why don't we go talk to Lucia and Kevin, and learn all about SAP HANA? 

JOHN: Sounds good. So today, on the podcast, we're being joined by Lucia Subatin and Kevin Nelson. Lucia. 

LUCIA: Thank you for having me, by the way. My name is Lucia Subatin. I'm a developer advocate at SAP. Yeah, we love the A's here. And Kevin? 

KEVIN: Hi, Kevin Nelson. I'm a developer advocate based down in Los Angeles. And I focus on ecosystem partners, like working with SAP to enable their huge development community to learn more about Google Cloud. 

JOHN: And today, we're going to be talking about SAP HANA. 

MARK: At a high level, what is this SAP HANA? I actually have no idea. 

LUCIA: It's a data and application platform that has an in-memory, column oriented database in it. 

MARK: That was a lot. 

LUCIA: And I can go on. I can go on for hours. 

MARK: Maybe break that down a little, just a touch. 

LUCIA: Well, it's the platform which we run our SAP business applications. 

KEVIN: I think one of the key benefits that HANA provides with this in-memory database is being able to handle large enterprise transactions with very, very tight time constraints. So you're able to handle the day to day business needs, guaranteeing that you're not going to go out and hit disk. So you get really good latency. 

MARK: You said something interesting in there, too. You said it's both a data and an application layer? 

LUCIA: Yes. So traditionally, our ERP applications, for example, where customers run their operations and all of their business related stuff, ran on any database. So when those business applications started running, they were database agnostic. And that was on purpose. But with time, we realized that our customers and businesses, they really value their data. 

And then, you also understand that, as Google. And we found that we needed to provide them with a better way of gaining real-time insights about their business. So for example, when I used to do consulting, one thing that was pretty usual is for somebody like a CFO to have to wait for a week before they could answer the question of how their business finance is going. 

And we found that we had to solve that. And that was not something that was acceptable, anymore. So we came up with this platform that, being in memory, and having columnar capabilities, and having the ability to run advanced analytics allows these applications to tap on data really, really fast. So for that case, this specific example I was talking about, of the week running report, that turned into less than five minutes-- to give you an example of why HANA is so important to our applications. 

JOHN: Sounds amazing. I'm curious, what can we expect from SAP and GCP? 

LUCIA: Well, we can expect a lot. In terms of what we have been doing with Kevin and some other advocates in your team, we have been trying to bring our developer communities together. The developer community at SAP is huge. And in the different roles, we have people who really understand the enterprise. And that's what we do. We're leaders in enterprise applications. 

And at the same time, our customers need agility. And they need a reliable place to run these applications. So what we are trying to do is bring the Google Developers and that [INAUDIBLE] system together with the enterprise developers, and cross pollinate knowledge. 

JOHN: That sounds amazing. So which products would you say that SAP HANA and GCP specifically target? 

LUCIA: Well, we are talking about, always, the business applications. So all of our business suites, S4 HANA, which is the evolution of ERP, and the C4 HANA, which is for a CRM. 

MARK: What's an ERP and a CRM, for those who don't know those terms. 

LUCIA: That's a very good question. That's very natural to me. So thank you for pointing that out. An ERP system is enterprise resource planning. That's what it stands for. And what it does is control all of the different areas or business areas in the company. So for example, you will have there, all the logistics, the procurement, the finance, HR. Everything that exists that a company needs to keep track of and assist them, in terms of transactional and then analytics, that is what an ERP system does. 

It keeps track of it. And otherwise, you would have to have Excel spreadsheets. And nobody wants that to run their business. Yes, that's why you're laughing. 

[CHUCKLING] 

And you should laugh. 

MARK: I'm not saying I've done that. But I've done that. 

JOHN: Me too. 

LUCIA: Well, if it's just for yourself, it makes sense. Or if you have a very small business, that maybe makes sense. But if you are talking about a global company, you need to really have a system behind that. So what we did with ERP is have the logic there for all of the business areas in a company. 

KEVIN: Let me plug SAP a little bit, here. SAP does this type of software for most of the biggest companies in the world. So they've had to deal with unique challenges of every single business. And how do you manage those resources at vast, vast scale? 

LUCIA: I do not have those facts super clear. But we have at least 25 different industries. And I can talk about what I implemented, myself. So I've been at an auto company. I've been at a huge retail company that has supermarkets all over the world. I've been at a company that does over 80% of the chocolate in the world, which is amazing. 

KEVIN: Your particular favorite place to be? 

LUCIA: Exactly. Yes, that's why I remember it. So I've even implemented SAP at an airline. So you also need to keep track of the maintenance of planes. So that is some of the things that SAP does. 

MARK: Nice. Going back to what John was talking about, what unique advantages do people have running SAP on Google Cloud? Is there a good thing, there? 

LUCIA: Well, yes. Because traditionally, we were having all of the systems on-premise. And our customers are not interested in doing data-center related stuff. And you guys at Google are great at that. You're leaders in Cloud. 

MARK: We do all right. Thanks. 

[CHUCKLING] 

KEVIN: The world's moving to a place where, in order to be successful, every company has to do what they are best at. And SAP is fantastic at developing and deploying these massive enterprise applications. Google's fantastic at infrastructure, security, power management, all the things about keeping hardware running and making sure that the application has a platform that can be fast, that can be low latency, that can be successful, that can be safe. 

LUCIA: In that way, we have business minding their own business, I always say. Then also, there's the piece that's not minor, which is being able to scale. So if you have your own data center, you can not scale. But you guys provide a lot of options for scaling and scaling reliably. And that is very important. When you're running things like HANA, being on a memory platform, needs a lot of RAM. 

So it needs proper hardware. And we did a joint effort to certify your hardware. So that's also why it's a good place to run our applications and, specifically, HANA. 

JOHN: Awesome. I'm a very big hardware guy. Ram, SSDs, everything? 

LUCIA: Yes. 

JOHN: So definitely, at the top of my list for anything that I build. So I have a question. Is focus more about BigQuery and integration with SAP HANA? 

LUCIA: Yes, that's something that we have been showcasing a lot. So we have this capability of integrating BigQuery in HANA by using a smart data adapter. And that is the technology that we have in HANA that allows us to simply go, and tap, and do queries on BigQuery's huge data sets. So generally, we would go and tap into what would be, probably, cold data for a HANA system. 

And run the aggregations and whatever we need to do in BigQuery, and then move it over to HANA to integrate it with warm or hot data. 

KEVIN: This really is a key capability, because one of the constraints of any memory database is, obviously, businesses have more data than can fit in physical memory. So having it running in HANA, in this common database, everything is fast, low latency. But what do you do with last year's data and the data that you want to run historical reports on? So once that data is offloaded into BigQuery, now, you can integrate that into queries directly within HANA like it's sitting there, but then gain the benefits of Google's massive scale for doing these massive, petabyte scale queries in a matter of minutes. 

So it provides a unique capability for looking at historical data and joining data across different systems. 

MARK: That probably segues nicely into what sort of workloads we run on SAP HANA. I think you've mentioned analytics, but now we're talking about integrating BigQuery. And there seems like there's a lot of things that this could do. Where do you see its sweet spot really being? 

LUCIA: Actually, what you're describing is the sweet spot. It's the ability to run what some analysts call translytical data. Because the idea behind HANA is that you do not move data around, and that you can run aggregations on the fly, not having to move data around or persist aggregations. And in this sense, we actually use it to run both transactional and analytics in that same appliance. 

So you can do transactional and analytics by having the analytics. Not just aggregations, as I just said, but also any of the advanced pieces. We have machine learning. We have predictive algorithms, geo-spatial, graph-- you can even have a document store on top of HANA in the same platform. So literally, you do not need to move data around. 

So that's why you're asking. Well, there's a lot you can do. And yes, that is exactly the sweet spot, is having a lot of possibilities out of the same piece of data. 

JOHN: Nice. And I'm actually kind of curious. On flip side, what wouldn't you use it for? 

LUCIA: Well, I wouldn't use it if you only need a single capability. Because it sounds like an overkill. And if you're going to run small data sets, I guess it's also an overkill. So the smallest unit that we have is 32 gigs of RAM. And I have that on my massive computer that you saw earlier. But I'm running that on my laptop. 

But I ran that because, yesterday, for example, I was playing on the plane with some map we'd use to display a huge food data set that I loaded. But if you're just keeping transactional, or just doing graph, or only doing geo-spatial, it doesn't make any sense to have this full blown database with a lot of capabilities on top. 

JOHN: Got you. This is a personal question. Why is it that every DA that I meet actually does queries on large data sets on food? It's always food. There's usually cheese. There's wine. 

MARK: I've seen clouds. 

JOHN: Yeah, I've seen clouds. 

MARK: The cloud is not food. 

JOHN: Yeah. 

[CHUCKLING] 

LUCIA: Well, I couldn't do it with cats. But if I could-- if I found that data set about cats-- 

[CAT SCREECHING] 

--I would do it. 

MARK: We can hook you up with some people. 

JOHN: Yeah, we can. 

LUCIA: Great. I would love that. 

MARK: Definitely. 

KEVIN: And on this lighter moment, I want to point out Lucia's fingernails, here. 

JOHN: Yeah, I noticed them as-- 

KEVIN: Did you notice that? 

MARK: No one else on the podcast can see them. So maybe you might want to explain what that's about. 

LUCIA: Well, I felt that we've been doing so well with our partnership that I wanted to co-brand my fingernails. 

MARK: Nice. 

[CHUCKLING] 

They are the Google colors. 

LUCIA: But I have the Google colors. And I have not a very successful attempt, here, to draw the SAP logo on my thumb. 

MARK: Oh, I see. 

LUCIA: But that is what this would have been. So I have the SAP logo and the Google colors. And yeah, I'm enjoying it. 

KEVIN: I think it's fantastic. 

JOHN: Maybe we can get a picture for the banner. 

MARK: Yeah, we should do that. 

JOHN: Yeah, we should do that. 

MARK: It's really interesting. I hear you talk about SAP HANA, and then you sort of drop little things. And I'm like, wait, what was that? And what was that? It sounded almost like you were giving a very short list of features that HANA will do. Like you were talking about geo-spatial stuff. You were talking about graph querying. Can you give us a short list of features of types of stuff that it can handle, I guess? 

You were saying you could use it as a document DB, if you really want. 

LUCIA: Yeah, on top of that, you can do text mining and text analytics. And there's some combination. Then you have the combination of that. We have streaming analytics for IOT, and that is something I actually implemented in my city of birth. So you get information coming from sensors. And you can run predictive, and you can run certain algorithms while the information is getting pumped into the database, as well. 

So that is also another cool feature that it has. And one thing that people ask me a lot is if it's an in-memory database, which makes it very fast, what happens to the data if the light goes off? And I can assure you that the data is stored in disk. So you were saying SSD-- logically, yes. Data is stored in-disk. One thing about the architecture of HANA, and why it was thought this way, is not only the in-memory capabilities and the processing happening in RAM, it also happens in the CPU cache. 

So it's extremely fast. And by being columnar and combining this architecture, you can get rid of materialization of data or copies of data inside the database. And by that, I also mean, and this is for example, they are not as necessary as in a traditional database. And we found, in internal studies, that once you migrate, you get rate of 60% to 95% of the objects in a database, because you do not need the redundancy, anymore. 

MARK: Interesting. 

LUCIA: So that's another long answer to describe the capability. But it's one of the reasons why we are shifting our applications towards HANA, as well. 

MARK: So if I'm a developer, and I'm like, this sounds really cool, how do I build on top of SAP HANA? Do I need to be part of the SAP ecosystem? Or can I just pick a programming language and go at it? Or how does that work? 

LUCIA: You can pick any programming language and go at it, as long as you can connect through or JDBC or OBDC. 

MARK: Oh, nice. 

LUCIA: That's like with any other database. We also have an application layer that is based on Cloud Foundry. So if you want to build microservices based-- we officially support three build packs. And we have a lot of libraries to connect and to enhance data-- for Java, JavaScript, and Python. So that's another option, if you are into it. And then it's just SQL. 

All these capabilities that I mentioned, they're all SQL based. So you do not need to learn a lot. And if you want to deploy it, I have to say that my favorite options-- we have a lot of options to deploy HANA, specifically HANA Express. HANA Express is our free version, even for productive use. So up to 32 gigs of RAM, you can deploy it, and do whatever you want. 

My favorite option of all the many options that we have out there to deploy HANA is actually the GCPVM, because it takes less than 10 minutes to have it up and running. And it's super easy to get started with your SQL. 

MARK: Is that marketplace, or is that something else? 

LUCIA: It's a marketplace. So you will find two options. You'll have SAP HANA, express edition, and then SAP HANA, express edition with XS advanced applications. XS advanced is our version of Cloud Foundry that is enhanced. That is what I was talking about before. So you have both options. But it will depend on what you want to do. If you want to do Cloud Foundry, then go with the XS advanced one. 

And then otherwise, you can just use the server-only piece, just that database. 

KEVIN: Lucia went quickly over one point I think is rather important to bring up. She mentioned that she could deploy HANA express in about 10 minutes on GCP. When we demonstrate this at technical conferences and even to internal SAP developers, there are audible gasps in the room. Being able to deploy HANA in 5 or 10 minutes is not something people expect. 

5 or 10 days would probably be considered a good thing, normally. So say this is something that is super important for doing any kind of dev-test applications. Even at massive scale, you can test applications by spinning up an instance of HANA in a few minutes. You can give each developer their own instance to play with different aspects. It ends up being a critical way of changing how companies think about doing application deployment. 

LUCIA: Yes, and then on top of that, one of the other things that we've been playing with, especially at TechEd, and when Kevin and Casey joined me there, was deploying HANA in Kubernetes, which is also super fun and then super easy. 

MARK: Oh, fun. 

LUCIA: And everybody likes it. And again, it's very easy for somebody to spin up an instance, load data in it. And if they want, they can just deploy one again. And it will take zero time. 

MARK: I'm guessing then, by the same token, if I want to try this out, locally, I can pull down the container. 

LUCIA: You can pull down the container, yes, depending on the operating system. Not all the operating systems are supported. I, personally, run it on Ubuntu, because I like it. You can also download a full blown virtual machine, and then have it running locally on your laptop. 

JOHN: The funny thing is you use the word "fun" several times in your last couple of statements. I'm interested in what interesting things that people have been building with SAP HANA. 

LUCIA: Well, even outside of running the business and these use cases, like the major chocolate maker of the world, which I find very fun. Because we established that I like food. But for example, one of my favorite use cases is the Elephants, Rhinos, and People Organization. They're a non-profit organization in South Africa. And they hooked up drones and some sensors on the different herds of animals. 

And they are using that to predict and detect potential poaching. 

MARK: Awesome. 

JOHN: That's awesome. 

LUCIA: They reduced the poaching incidents in the monitored areas by 100%. 

JOHN: Oh, that is amazing. 

LUCIA: So that's one of my favorite use cases. The other one is a bit more serious, or sad related, so to speak. But it's still happy in the sense that it's related to cancer. So with the American Society for Cancer Oncology and CancerLinQ, they started gathering all of these possible sources of information related to patients, their histories, the treatments, the tumors, the characteristics on their tumors. 

And they used that to help doctors establish the best possible treatments, based on other patients across the globe. And right now, they're topping over 1 million records or 1 million histories of different patients. And that is getting so successful that doctors are giving in their own time to add input to that major database. 

JOHN: Sounds interesting. I actually glanced over an article, I think, maybe two days ago. That said that pretty soon, machines will be able to predict strains of cancer a lot faster than actual doctors will. So that's going to be kind of amazing. 

LUCIA: Yes, it's great. I know we, at SAP, also have a huge case about genomics doing crunching data around genomics, which is pretty hard. And I know that you guys at Google are doing something similar. So it's great that we could potentially join forces towards that kind of use case. 

JOHN: Yeah, we love collaboration, here. 

MARK: Actually, speaking of genomics, I know genomics are really large data sets. How big a data set can you actually put in SAP HANA? 

LUCIA: Well, you technically do not have a limit. Because it can scale up and scale out. 

MARK: Oh, tell us more. 

LUCIA: So you can make a server bigger, add more RAM. Or you can make server clusters-- add friends to that server. So you can continue adding data to your ecosystem of HANA servers, as long as they can scale. 

MARK: And if you're scaling out, I know it's an in-memory database. I know you were mentioning transactional support. Are there any limitations around that? Or what sort of scaling out strategies can you use with SAP HANA? 

LUCIA: Well, it depends on how you're clustering or segregating the data. But one thing that I should mention is that HANA does have the ability to recognize that data doesn't need to be in memory, as well. So there is something called data tiering. And you can choose to have the data that is more commonly used in memory and the rest have it near memory, like in-disk, for example. 

So that is one thing. You do not need to have all of the columns in a table loaded in memory. And actually, the platform itself is going to unload data that you're not using. So you, as a developer, do not really need to care about that. One thing you may need to care about is data causing latency, because you're pulling data from different physical nodes. 

So you have a network, there. But it will depend a lot on the use case and how you're partitioning the table. You can choose how you partition the table, as well. 

MARK: It sounds like it sort of shards it across the different machines and does something like the-- 

LUCIA: Yes. 

MARK: Got it. Got it. 

JOHN: If we wanted to really get started with SAP HANA, what would be a getting started guide from both Kevin and Lucia, if you don't mind me asking? 

KEVIN: I'll start. I open up the Cloud Console, go right to marketplace. You can download and install, in a matter of a few minutes, SAP HANA, with the application environment all ready to go. And start playing. 

LUCIA: Yes, and I'll do a shameless plug, here, if I can. 

MARK: That's literally the point of our podcast. That is literally why you're here. 

[LAUGH TRACK] 

LUCIA: They should also request the CodeJam. So with Kevin and Casey, we have been traveling across the globe, and going to where developers are, and showing them how to deploy HANA, how to connect it to BigQuery, how to play with both databases. We also play with Cloud Functions, we play with Kubernetes. So we have a lot of fun. I know I say that word a lot. 

But we do have a lot of fun. 

JOHN: I'm big on fun. 

LUCIA: And the best piece is that the CodeJam is for free. All we need is somebody to request it, to contact us, and request it. And we'll get there. And we'll, again, have fun. 

MARK: We'll make sure to put contact details in the show notes. 

LUCIA: Yes, thank you. 

JOHN: It's a free use up to 32 gigabytes, right? Just to be clear. 

LUCIA: Yes, the license is completely for free. And you guys generally offer the trial credits. 

JOHN: Oh, that's right. 

LUCIA: So that makes the entire experience for free. 

KEVIN: Yeah, definitely leveraging those $300 in free credits for any new Google Cloud account allows people to look at the more production like environment before they have to make any kind of serious investment. 

LUCIA: Otherwise, if you have room to run it locally, the minimum for the database only is 8 gigs of RAM in a computer. It can get a bit slow, especially if you want to add a lot of data on food or cats. 

[MEOWING] 

Or whatever it is. 

MARK: Dogs. Probably dogs. 

LUCIA: Or dogs, yeah. 

MARK: I like dogs. 

[BARKING] 

LUCIA: Yeah, I like dogs, too. 

MARK: Just making sure. 

LUCIA: And pandas. 

[PANDA GROWLING] 

[CHUCKLING] 

That works. But you could still run it locally, or in a VM, or a Docker container. 

MARK: Sweet. Well, we're slightly running out of time. But before we finish up, is there anything else you want to make sure you mention or shamelessly plug? Or are either of you going to be at any events or anything like that, that you want people to be aware of? Anything along those sort of lines before we finish up, today? 

LUCIA: Yes, we will be doing more events this year. We will be doing more events, even including some of the S4 HANA stuff. So if you're interested in understanding what an enterprise developer does, or you're working at a company that has SAP, and you want to know how you can contribute, you should go into developers.SAP.com. 

And we have the events listed, there. And we have the CodeJams that you can join in a city. And if we're not going to your city, you can request us to come to a CodeJam. 

KEVIN: We have some upcoming CodeJams for everyone, later this week, in Los Angeles. We're going to be doing two in Germany, in Mannheim and Munich, the week of the 18th and 19th, I believe. And then, last year, Google was represented at three SAP TechEd events around the world. These are kind of like Next. They're huge aggregations, 5,000 to almost 7,000 people in Las Vegas, Barcelona, and Bangalore, India. 

We'll be at those events, in the fall, again, this year. And look forward to exposing a new generation of developers to HANA running on Google Cloud. 

MARK: Anything happening at Next, speaking of Next? 

LUCIA: Well, we'll be there. We will have a booth there. Last year, we did a lot of hands on activities, as well. So we had computers there for people to come and try. So yes, we will be there. And I always enjoy having conversations with the audience at Google Next. So really looking forward to it. 

MARK: Awesome. Well, Kevin, Lucia, thank you so much for joining us on the podcast, today. 

KEVIN: Our pleasure. 

LUCIA: Thank you very much for hosting us. 

KEVIN: Thanks very much. 

JOHN: Well, thank you, Lucia and Kevin, for joining us on the podcast, today. And to wrap things up, we're going to have our question of the week. And our question of week is, if I want to programmatically search for links to an image that I have, how can I do that? 

MARK: I'd been aware of Google Image Search for a really long time. But I didn't realize we had an API that essentially allows you to do that. So if you're not familiar, basically, it means if you've got an image-- so if you've got a PNG, or a JPEG, or something like that-- and you're thinking to yourself, I wonder if somebody else is hosting this somewhere on the internet, or where are all the places this image is used, but you want to do it programmatically, the Cloud Vision API has a detecting web entities and pages API. 

That enables you to basically plug-in the content for that image, Base64 encoded. And then it will scour the internet and send you back a response, basically, giving you URLs to say how much it matches, as well as a score to think of how close it believes that image is. Actually, kind of neat. I didn't know it did this. So I'm actually kind of excited about it. 

JOHN: It's pretty cool. And I've seen it done on a pretty interesting TV show on MTV called, "Catfish." 

MARK: Oh, really? 

JOHN: Where they actually drag the image into Google search, and it actually returns all of the pages that image is being used. So I would assume that it's roughly around the same thing. 

MARK: Fantastic. As long as we can get TV shows in, everything is fine. John, what are you up to? What are you doing? You going anywhere interesting or producing anything cool that people should know about? 

JOHN: I'll be at GDC, next week, which is going to be pretty exciting, because it's my very first GDC. 

MARK: Oh, really? 

JOHN: Yeah, it is my very first one. 

MARK: I didn't realize. Oh, I'm so excited for you. Cool. 

JOHN: We'll also be at Next. And this is my second go-around at Next. So I had a lot of fun and met a lot of people. So I'll be glad to see a lot of folks. And ECGC, that'll be interesting for me. I'll be strictly attending. So it should be pretty fun. And Vector Conf 2019, I will be there. As well, I'll be giving a series of talks to a bunch of high school students and a lot of large companies. 

MARK: Fantastic. Awesome. So I'll be joining you at a lot of that. Game Developers Conference, as you said, next week, which, I think when this comes out, will be this week. Just to be confusing, which is fine. You and I will both be at Cloud Next. Definitely, for anyone who's listening, make sure to swing by the podcast booth, and come say hi. I'm sure both John and I will be doing stints in that. 

You'll definitely be able to find us there. And then I'll also be presenting at East Coast Game Conference, as well. Fantastic. Well, John, it's a delight and a pleasure hanging out with you, as always. 

JOHN: As always. 

[CHUCKLING] 

MARK: Wonderful. And thank you, everyone, for listening. And we'll see you all next week. 

JOHN: See you next week. 

[MUSIC PLAYING]