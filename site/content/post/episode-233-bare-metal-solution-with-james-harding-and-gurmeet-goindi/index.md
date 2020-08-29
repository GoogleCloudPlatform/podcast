+++
audioDuration = "00:42:16"
audioFile = "Google.Cloud.Platform.Podcast.Episode.233.mp3"
audioSize = 60920606
categories = ["Database", "Migration"]
date = "2020-08-26"
description = "Mark and Brian Dorsey are together again this week as we learn all about Google's Bare Metal Solution with our guests James Harding and Gurmeet \"GG\" Goindi"
draft = false
episodeNumber = 233
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Bare Metal Solution with James Harding and Gurmeet Goindi"
image="/post/episode-233-bare-metal-solution-with-james-harding-and-gurmeet-goindi/images/hero/hero-EP-233.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ih2sqk/episode_233_bare_metal_solution_with_james/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) are together again this week as we learn all about Google's Bare Metal Solution with our guests James Harding and [Gurmeet "GG" Goindi](https://twitter.com/gg_goindi). To start the show, GG introduces us to Bare Metal Solution, explaining that it allows client projects built on specialized, often outdated software to take advantage of the benefits of a cloud environment. Using Bare Metal Solution, clients can choose to migrate all or part of their projects for a fully customized experience.  

We learn how Bare Metal Solution is able to support a partial or full native solution for clients and go through the steps to getting a project from completely on-prem to the cloud where latency is decreased, security is increased, and other cloud benefits can be leveraged. GG gives examples of situations where Bare Metal is a great option for clients, for instance an established company with an early 90s database that recently branched out into apps built in cloud native software. James outlines the benefits of Bare Metal Solution over other options, including real world examples of industries that have been able to modernize their offerings and adapt with the Bare Metal.

GG and James wrap up the show explaining why the open source aspect of Bare Metal is so important to the evolution and flexibility of the product, and we talk about the recent developments at Bare Metal.

##### James Harding

James Harding leads the Data Management Practice for North America, with responsibility for the go-to-market strategy for all products and services data mangement. He also oversees marketing campaigns and sales field enablement. 

##### Gurmeet "GG" Goindi

[Gurmeet Goindi (GG)](https://twitter.com/gg_goindi) is a product manager at Google, where he focuses on databases and attends meetings. Prior to joining Google, GG led product management for Exadata at Oracle, where he also worked on databases and attended meetings. GG has had various product management, management, and engineering roles for the last 20 years in Silicon Valley, but his favorite meetings have been at Google. He holds an MBA from the  University of Chicago Booth School of Business.

##### Cool things of the week

* Google Cloud Next Week 7: Application Modernization [site](https://cloud.withgoogle.com/next/sf/sessions#application-modernization)
* Brian's Cloud Next Presentation: Where Should I Run My Stuff? Choosing Compute Options [site](https://cloud.withgoogle.com/next/sf/sessions?session=SVR105#application-modernization)
* Mark's Cloud Next Presentation: What's New in Google Cloud Cost Management [site](https://cloud.withgoogle.com/next/sf/sessions?session=CST103#application-modernization)
* Announcing the general availability of Google Cloud Game Servers [blog](https://cloud.google.com/blog/products/gaming/announcing-the-ga-of-google-cloud-game-servers)

##### Interview

* Bare Metal Solution [site](https://cloud.google.com/bare-metal)
* Bare Metal Solution Next Presentation [site](https://cloud.withgoogle.com/next/sf/sessions?session=DBS213#data-management-databases)
* Bare Metal Solution on GitHub [site](https://github.com/google/bms-toolkit)
* Oracle [site](https://www.oracle.com/index.html)
* Oracle Rack Cabinets [site](https://www.oracle.com/servers/rack-cabinets/)

##### Stack Chat Segment of the Week

Max talks to [Deloitte](https://www2.deloitte.com/global/en/industries/government-public-services.html) about how they built their system to help groups collect and respond to COVID-19 data on our Stack Chat Segment this week! 

##### What's something cool you're working on?

*  NCAA bracket predictions on [QwikLabs](https://www.qwiklabs.com/quests/58)
*  Here's a hint for next week's episode! [GKE Turns 5: What's New?](https://cloud.withgoogle.com/next/sf/sessions?session=APP220#application-modernization)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 233 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with Brian Dorsey. Hey, Brian. How you doing?" >}} 

BRIAN: Hello, hello. 

MARK: Always good to work with you. And of course, we have a jam-packed episode full of great content. First of all, Brian, can you tell us who we're going to be talking to later today? 

BRIAN: Yeah. We've got GG and James, who are going to talk about Bare Metal Solution. It's a way to get actual physical machines from Google Cloud. So we'll tease with that. 

MARK: It's a great conversation, but unfortunately it has nothing to do with metal bears, which, we had that conversation before. It would have been exciting, but this is a very different kind of exciting. 

BRIAN: That would be a different solution, for sure. 

MARK: With that being said, we'll have that conversation later. And after that, we're going to do something fun. Max and I talked about it last week. So we're going to do a Stack Chat episode. We'll talk about that after that. But of course, before we do any of those, why don't we do our cool thing of the week? 

[MUSIC PLAYING] 

As we know, it is week seven of Google Cloud Next, seven out of nine weeks total. And this week is all about application modernization. And if you're not familiar with that term, and, you know, it's not a super common term, I think, but of course, we're talking about different ways that you can build your application in more of a cloud-native way, right? There's a lot of cool ways to build apps now, whereas, you know, 20 years ago, there weren't. So super interesting to see. 

Tons of cool talks. Maybe I shouldn't say that there weren't cool ways to build them 20 years ago, but 20 years is a lot of time in technology. So there's a lot of cool talks out there. 

And I think two important talks I'd like to highlight are from two people that you might know, Brian and Mark. Of course, we do have our own talks this week, and it's super exciting. Brian, can you tell us a little bit more about your talk? 

BRIAN: Sure. Yeah. So it's basically an overview of all the different places you can run your own software in Google Cloud. 

So you know, we've got virtual machines and Kubernetes clusters and ways to run containers directly and full applications and individual functions, and so there's this whole range of options. And honestly, I think it can get a little confusing. So I basically walk through what the options are; the trade-offs, so what they work really good for and what they're not a great fit for; and I think some kind of ways to think about how to make that decision, both on the tech and the people side, and how you might use them together. So check it out. 

MARK: Yeah, I think we've seen a lot of content around that because it's a common question, right? There are so many different offerings, and, honestly, it kind of goes to what I said earlier, right? There's a lot of cool ways to build applications now. How are you supposed to choose? You know, I always love the different types of this talk because they're always super helpful. 

And, no surprise, my talk is about cost management because that's apparently all I ever talk about. 

BRIAN: It's kind of important, though. [LAUGHS] 

MARK: It turns out, saving money is usually something people really enjoy. This one's really more about everything that's changed over the past year in cost management. So anyone who's used the Cloud Console and the different billing sections of the Console, there's a bunch of cool new features there, some new reports, all kinds of stuff that I go over and just kind of give a quick highlight of. So it's a whirlwind tour because it's a lot of content jammed into a very short period of time, but it's really, really helpful to get kind of a better understanding of what's possible in the Console, what can I do, and what are some of the best practices I should be looking at. 

BRIAN: Awesome. Check it out. And this was a slightly biased, perhaps, highlight of the week, but in the show notes, there is a link to all the talks, and there is a lot to check out. Please do take a look. Whatever stack you're using, whatever your industry is, there are things there for you to help you out. So check it out. 

MARK: Yeah, and I'm comfortable with that level of bias, because we're hosting the podcast, so I feel like, you know-- 

BRIAN: [LAUGHS] 

MARK: --we get to choose what's on there. I'm OK with it. Every once in a while, I'll promote our own content. It's fine. 

BRIAN: Every so often. OK, next up, for my cool thing of the week, I wanted to highlight Google Cloud Game Servers. And they have just gone GA, Generally Available. It means, you know, kind of the full support kicks in and long-term guarantees on availability and the like. 

And that's probably new to a lot of folks. So this is an open source project geared towards running gaming backends. It's called Agones. And the hosted version of that, fully supported and kind of more automation to help you run it, from Google. 

And basically, the idea is it's some cluster and region or realm management tooling to help you run backends across a wide variety of physical locations, across different versions of your app. And many, many gaming companies and other companies have a challenge of clustering users together for latency reasons, and then also being able to host to the same system but in kind of different legal environments. You may need to have complete separation, in some cases, depending upon the countries that the backend's running in. 

So this lets you run it on top of Kubernetes, which inherits all of that insulation from kind of both hardware and the variances of your hosting environment and adds a bunch of automation that's specific to gaming. So if you're in gaming, please check that out. It's ready to use, and you've got a hosted option and open source, so you can run it wherever you need to. 

MARK: Yeah, and of course our longtime listeners will know that Mark Mandel, our previous famed podcast host, was working on Agones for a very long time, so I'd like to turn it over to Robo Mandel to tell us a little bit more about how excited he is for game servers. 

ROBO MANDEL (ROBOTIC VOICE): I'm stoked as a dingo with a doughnut. Have a go at game servers, humans. If you're knackered with global game server infrastructure, they're a fair dinkum way to take away the pain. 

BRIAN: Wow, It's good to meet Robo Mandel. I didn't know that was a thing. 

MARK: [LAUGHS] You didn't have the joy of meeting Robo Mandel before? You know what? He's a very valuable part of our team, so always happy to have him around. 

ROBO MANDEL (ROBOTIC VOICE): Always glad to stop by. We should grab some coldies sometime soon. Good day. 

BRIAN: Good, good, good. Right on. Nice to meet you, Robo Mandel. 

BRIAN: And on to Bare Metal Solutions. Here we go. 

[MUSIC PLAYING] 

MARK: GG and James, thank you so much for joining us. Can we kick things off by having you tell us a little more about yourselves? 

GURMEET: Thanks, Mark. My name is Gurmeet Goindi. I go by GG. I'm the product manager for Bare Metal Solutions among other things at Google Databases. 

Been in Database space for quite some time. People who can't see me will see my gray hair. At Google, we are trying to do something very interesting and see how we can marry the best of the both worlds when it comes to cloud-native databases and traditional databases. 

JAMES: Hey, thanks, Brian and Mark. I'm James Harding, director of Data Management Practice. And what the Data Management Practice does is we're responsible for a lot of things that touch data management, from the go-to-market strategy, work with solution engineering, marketing, field enablement, all the feedback from the customer back to the PM. It's a very daunting task because we also drive the business, but with the influence, no authority. 

BRIAN: Oh, my gosh. As a developer relations person, I completely identify with that. We have no authority, but we're trying to make things better for all of our users and customers. 

OK, so we're here to talk about Bare Metal Solution. What is that? 

GURMEET: Well, let me take a stab at that one. When you hear about Bare Metal Solutions, sometimes we get confused. What are we talking about here? Is it a metallurgy experiment? Is it an industrial experiment? Or is it a computing service? 

Regardless of the name we have, what we are trying to do is give as close an experience to a native certified hard [? drive will ?] look like for a cloud application to run on. A lot of our customers today have built their applications on specialized software which was written decades ago and which doesn't quite well meld with our cloud-native approach. But if you have to work with a cloud-native application and then a specialized application that was written years ago, we need a platform where we can bring these two together. And Bare Metal fills that gap for us. 

In Bare Metal, we give you a very similar environment as you have been working on an on-premises system, with all the benefits of a modern hardware, tuned hardware will bring, with all of these security benefits a cloud will bring, with all the scalability benefits a cloud will bring, and connected with all of the GCP services that are very low latency, secure interconnect. So all your cloud-native apps interact with your specialized workloads as if they were sitting next to each other in one cloud environment. And hence and so forth, this allows you to modernize at your own pace, keep apps if you want to keep running in your current setup, as long as you want to run them for. Or you can say, hey, I want to move my data from my specialized workloads to complete cloud-native apps. So in some case, it does meet customers where they are. 

But I think I have not answered your question directly what Bare Metal is. So to open the port a little bit, Bare Metal consists of three key elements, we can say. It's certified compute, latest and greatest Intel servers that you can buy, certified to run almost all enterprise applications, connected with fine-tuned as per the application's best practices latest state of the art, Tier 1 NVMe-based storage, all of them presented and connected to GCP under one networking construct under a Partner Interconnect with ultra-low latency, in most cases below one millisecond. All of this under Google terms of services, under Google support, under the Google security and compliance umbrella for you, as a customer, to consume. 

MARK: So there's a lot to unpack there. Obviously, you covered a bunch of different areas. And I think the most interesting part about this is that-- you touched on this before-- but this is very different from what we kind of consider cloud native, right? Cloud-native architecture is typically built in a way that you are pretty much completely abstracting all of the infrastructure away and you're only dealing with the virtual layers that you need. But there's also a lot of traditional apps out there that are very hardware specific and have been built in a certain way for the past 10, 20, 30 years that really do care about the way that they're being hosted, the infrastructure they're on. 

So obviously, you touched on a bunch of pieces of this, but let's talk a little bit more about how that actually works. So you said there's cloud. There's Google Cloud. Then there's Google Cloud-managed actual machines. And they're connected with Partner Interconnect. What do all of those actually do, and what do they mean? 

GURMEET: I'll take an example, and then I'll invite James to jump over and go in for the details because he deals with this on a daily basis with our 1,400 customers and then some. Let's take an example of a traditional app, to borrow Brian's terminology, which is built on, say, an Oracle cluster database developed on Oracle Rack technology-- very common in enterprises. 

This architecture came out in early 2000s of maybe the late '90s and has been very popular in a lot of enterprises. At the same time, the same customers are building new experiences for their end clients, are building new experiences for their analysts, and are building new apps maybe that run on their mobile phones, maybe that they run on their tablets. Maybe they run on point of sales equipment, and so forth. 

And all these apps which I talked about were born in the cloud, built in the cloud, built for [INAUDIBLE] virtualized or other containerized infrastructure which can sprawl out on demand. Now these apps have to work with the traditional apps, you have two options. You take the additional app and pack it in the cloud, but traditional app was not written for the cloud. Or you rewrite the traditional app in the cloud, which is a big investment, and it takes a long-drawn process and slows down customers. 

How do we meet in between? We bring the traditional app as is to Bare Metal, let the traditional app talk to the cloud-native modernized or new [INAUDIBLE] app or app that has been modernized for the cloud and runs in the cloud as is. From a traditional app perspective or the cloud-native app perspective, they don't know the difference. For the cloud-native app, the traditional app is sitting in the cloud and is a cloud-native app. From the traditional app, the cloud-native app is sitting in the data center and it's written in a traditional way. And that gives full flexibility to our customers to pick and choose what gets deployed where and how they can adopt or how they can define their modernization journey. 

BRIAN: Why would you consider this instead of just buying your computer and putting it in your own data center and that sort of thing? Also, why would you do this instead of just a VM? 

JAMES: Some of the key things-- you talked about the Solution, but one of things we like to highlight is with this Bare Metal Solution, we still have one single contact. Customer, if you have any issues, would contact Google. We talked about the physical location of it. So the hardware will be hosted in a regional extension. And we have the low latency between Google Cloud. 

And it brings to bear all the support that Google does and opens up these traditional applications to using a lot of the cloud-native services. It's very difficult, sometimes, for customers to try to do this from an on-premise perspective because you don't know exactly where those physical applications are sitting in the network that it has to traverse to get into GCP, so there's a lot of latency there. This also allows even the mainframe to be located in some of these facilities, right next to our Bare Metal Solution, connected to GCP, that allows all these traditional applications to have access to all our cloud-native services. 

The key components that we want to portray is that our customers are able to continue working with their data, their applications, their current operating systems. They can still manage their installation if they want to run Oracle Rack clusters or any third-party software that isn't quite positioned to go into the cloud from a licensing perspective, from a support perspective. 

Because there are still those vendors that exist that, like, hey, I would love for you to go to the cloud, but come to my cloud only, and so I'm going to position my product to where you can only come to me, and the way I'm going to prevent you is from a licensing and a support perspective. Bare Metal Solution really allows our customers to implement exactly the way they would implement it on-prem. And that has really unlocked a lot of opportunity for Google. 

The key things when we talk about the core infrastructure, we have to keep in mind that we're talking to facilities, power and HVACs, [INAUDIBLE] can fix and replace some of the hardware components; the custom hardware configuration that we may have to enter [? into ?] for specific customers; Smart [? Hands ?] Support; all the racking and installation of servers. And we just get that into the network management, the dedicated interconnects, the low latency with SLO. And then we talk about security. Security has been a really big topic today-- network security to physical security, and then just the extensive amount of monitoring that has gone in the system. 

So it's very difficult to stand up environments today. And we have built a solution where we take those steps out for the customer. And when we provision the server, they have an installed operating system, and the file system is already encrypted at rest. So the customer can just start installing their software and start developing against those assets. 

BRIAN: So I think you just kind of partially answered this, but I want to go a little deeper. How should people decide when to use Bare Metal Solution or not, like compared to running it in a data center or running a VM? How do you make that decision? 

JAMES: It's really at an application level. When I think of an application, I think of the entire ecosystem surrounding that application, from network connectivity to latency. Then we get into service-level objectives around that application. Compatibility, especially if there's a lot of applications out there that have been developed on-prem and they're not investing in those applications anymore. 

But the company has to say, hey, we have a complete cloud strategy. We are sold on the cloud, and we're everything to the cloud, but we have these applications that physically cannot move. So this allows them to actually deploy these applications in our Bare Metal Solution, and it also allows them to now start looking at modernizing those. 

One of the key things I love to talk to our customers about is application rationalization, database rationalization. Let's take a hard look at your assets, and once we take a look at these assets, let's determine what do these look like in three years, five years. Because, traditionally, my experience when we take an application and we go, hey, we're going to make a change, we're going to modernize this app, it's a journey. 

And that journey isn't overnight. And having it sitting on-prem and still trying to maintain it while you have a cloud strategy, it's very difficult. But moving it close to the cloud, is really opens up the new wave of building services. 

I was just listening to your last podcast. It was so exciting to hear you talk about service mesh, control planes, and a monolith application. Even with a particular customer in the travel industry, built on complete monolith applications, but over a service-oriented architecture-- so they understand services, but they would have to bring all those monolith applications over and then start to modernize them. 

So Brian, you also asked about the choice between virtualizing and going to Bare Metal. I always work with the customer, and when we start doing this rationalization strategy, a lot of times, I come out of the discussion saying, hey, we're going to take 70% of your database platform to Bare Metal and then we're going to virtualize the other 30%. 

The reason why I do that is because there are specific applications like Oracle Rack. A customer is completely sold on Oracle Rack. It's a fabulous product for horizontally scaling your environment, but sometimes customers tend to make that the de facto standard and they overdeploy. 

So part of the rationalization is going, hey, you really don't need this much availability for these particular applications. So let's just go in and put these and virtualize them, and let the customer work with the vendor on determining what the licensing strategy for that particular product. It allows the customer to be flexible, and they're just not sold on a particular product. 

And also, it sells into our modernization strategy, that we can give you some of the same high availability in the cloud. We just need to go back and take a look at these applications, do some modernization, and that we can start moving them into our GCP services and getting you off of the applications that require Bare Metal. So sometimes Bare Metal can be a stopgap measure. 

MARK: You know, GG, you mentioned earlier about like being able to lift and shift and then modernize in place. This idea of bringing it to Bear Mental Solution, but not having to completely rewrite it for cloud native. I'm assuming that-- that sounds great because it means you can kind of think about the work a little bit more. But what are some of the considerations that go into the value of modernizing in place? Like, why would you do that? 

GURMEET: See, when customers are thinking about modernization and having a cloud strategy, one clear choice they have to make is how much of the IP they have to invest in running their state as is or migrate. So if you move to any cloud in which you are still taking your legacy application and trying to fit in that VM-based model, you still have to retune the storage. You still have to retune the compute. You still have to retune the network. And once you have retuned this, the work that you have spent in retuning your existing app fitting in a public cloud environment is the investment that's never coming back because eventually, that app is going to the cloud. 

If we can cut down on that investment and have a frictionless movement as is, preserving your runbooks, playbooks, support books, getting better performance, reducing your cost to running the app, and then use that investment to take a piece of this app and modernize it. And then realize more benefits and take out another piece of this app and modernize it. It de-risks your strategy, saves cost, makes migration to cloud more realistic. And that gives you time to evolve your people and personal skill set, gives you time to evolve your support and runbooks specifically from [INAUDIBLE] apps, and still realize all the benefits a public cloud can bring in. 

I'll put James on this part, because he recently did this exercise at one of our huge customers. So James, I'll have you talking about this large travel company that you've been working with. What's the value they saw in picking this solution over anything else? 

JAMES: I have an extensive background modernizing applications. I've actually come from the travel industry. I spent nine years doing application migrations from mainframe, from HP NSK into open systems. 

And I think about when I built my bar. It's like, for every database application I touched, I have a bottle back there because that's what was required for me to actually get through a lot of these projects. They were long and extensive. 

And the one thing about the travel industry, the things that I touched, if it went down, you couldn't even board a flight sometimes or even book a flight. So it was very important that when we started redesigning these services or applications that we really took in the fact that we need to have an environment that allowed us to be transformative. And it's very difficult to get to that point and it takes a lot of time. 

Within the travel industry, one thing that you have to realize is that travel companies are software companies. They're not hardware companies. And they used to own their own data centers, and they got out of the hardware business a long time ago, and they leased all their hardware. 

But the problem with that is, as the economy ebbs and flows, sometimes those contracts don't ebb and flow. So that elasticity, the rapid provisioning, all those things go out the door a lot of times when you're leasing these environments. So coming into the cloud, you automatically get that. 

But we also know that you're not going to gain until you shut these environments off. And with Bare Metal as a service, this allows you to now lift and shift a lot of these services out of your traditional data centers into the cloud, into Bare Metal Services, and shut these services off. And now, you can start realizing some of the cost savings around that. 

And that was a really big incentive for the travel company. Not only did we have all of the cloud services that will allow them to do the transformation that they need, we also had Bare Metal, which meant they did not have to leave behind all these traditional applications in their leased environment and have these two contracts and dealing with two vendors. Now they just deal with one vendor. So it was huge. 

When you look at other cloud providers, and let's just take Oracle Database in consideration, right? With Bare Metal as a solution, when I install Oracle, I get access to all the capabilities of Oracle. I can do Compression. I can do Rack. 

When you look at other vendors, you can run the Enterprise Edition, but you cannot run Rack. Oracle Rack provides a lot of our customers a high availability in the sense that our customers have designed their applications to run and integrate with Rack. So Rack is highly available, but your application isn't highly available until you integrate all the capabilities into your application. Once that's done, you're really locked in until you go to some type of cloud-native database and redesign that application. And allowing it to go to the Bare Metal service buys you that time to lift and shift, then modernize if needed. 

BRIAN: OK, so this sounds really cool, but are we back to, like, filing tickets about this stuff, like, to get a thing? Or is there any automation we can do? 

GURMEET: For our customers to have an enterprise-class experience, they demand automation from us. And we have some challenges around the amount of automation we can provide because this does not run in Google Cloud. It runs next to Google Cloud. 

So what Google does very well is support our open source community software. So we went the same route. We created a specific automation toolkit that allows our customers to install a database, set up backups, manage the storage inside of their database, set up standby databases, and we rolled this in an [? Ansible ?] type of format, and we open sourced it. 

So the customers who already have their existing automation in [? Google ?] [? Play ?] [? Books, ?] they can integrate our code, they can use our code as is, or they can use their code. And so we meet them where they are. 

This is an open source platform. If customers have specific needs, that, hey, James and GG, add this this particular [? node ?] for us, they can come to the GitHub platform, raise their request. We actively monitor it, and we add it back for you. We already have a wish list going because customers are [? really ?] [? loving ?] it. So we keep this tool maintained, and it's customers' tool. It's for them to use. We are just the facilitator of that tool here. 

MARK: Yeah, and that's a great point, and we'll make sure to put the link to that in the description for people who are interested and want to check it out. Like you said, there's a lot of use cases where this really enables you to think about what you're doing, move it to the cloud, get a bunch of benefits, and then be able to take your time and think through your migration. Are there any really big downsides to this? 

JAMES: I don't look at this as any downsides at this time. The biggest thing that I see with this is that, given our current environment, and I've mentioned elasticity, a lot of companies today are having to move services to completely online. 

I recently heard that a lot of the retail, they're not going to be open for Black Friday. You're going to have to go online. So that means that they're going to have to really scale out services for that. And Bare Metal Solutions is going to definitely be a big play in that. Google's going to be a big play in that. 

But also, that means a lot of services that they used to use to handle the customers that are coming into the door are not going to be used. So they can't just turn those down. Bare Metal allows our customers to move a lot of these services, again, to where we can now spin up and spin down these services. 

The other thing I want to point out is that a lot of our customers today are rethinking their data centers. And data center takeout has become a huge topic within Google. And Bare Metal Solution is what keeps us in those conversations. Without Bare Metal Solution, there's no way that can do a complete data center takeout. 

The second piece is customers are really rethinking their disaster recovery. And disaster recovery to GCP, great. But there are other products-- again, Oracle, Oracle Rack, now we can actually do disaster recovery in the Bare Metal Solutions and test in dev environment that we can virtualize those or we can run those on Bare Metal. So that's the upside that we're seeing, is that we're providing our customers more capabilities than we were not able to provide before. 

GURMEET: Back to James's point. He brought out some really important points [INAUDIBLE] bringing it up. One key thing is a lot of business data still sits in a transactional database. And to have an actionable outcome or an actionable decision out of that transaction database needs to circulate through many decision support systems and hence and so forth. 

Having your transactional data next to GCP with a low interconnect and no transfer cost between the two and a secure mechanism to move, you can feed your real-time decision systems running on top of BigQuery, taking advantage of the latest AI/ML models that have, streaming from your traditional application. Things that you can't think of today. 

Today, you look at, ah, my data. I have to do a batch report and feed it in another traditional analytical system and get results out of this. And then if I have to do a machine learning or an artificial intelligence model, I have to find some [INAUDIBLE] third party tool on top of that. Here, we are able to give them a seamless experience. You take your transactional business data, stream them to things like BigQuery, Looker, build up your AI/ML pipelines on top, and give you real-time business intelligence on your transactional data. 

BRIAN: That is super cool. I think this is a sweet spot kind of in between data centers and cloud VMs that a lot of people are not aware, way closer to, kind of, I think the best of both worlds than I think you would imagine if you were just thinking about this on the fly. So thank you both so much for the conversation and the details here. Is there anything we missed or that you'd like to mention as we're kind of wrapping things up? 

GURMEET: I'll take the opportunity. Being the product manager, you always like to talk up your baby. So we are launching four more regions, and so that will take us in nine regions. 

Our global commitment is we will have our Bare Metal Solution where our customers need them most. So right now-- we started with five. We are nine now, and gradually we will double these in coming months. And you would like to try this out? Join us in your cloud migration journey, and we will meet you where you are. 

JAMES: GG, I love the term "meet you where you're at." What I would like for our customers to do is just reach out to your customer engineer, your field service rep, and get us engaged. I mean, one thing I love to do is get in front of the customer and talk about capability measures. 

And that's where we meet you where you're at, is, what capability do you have in your environment today? What's your future state? And let's do a gap analysis. And let's figure out how to get this in to GCP. 

MARK: Awesome. Well, GG and James, thank you so much for coming on and telling us a little bit more about Bare Metal Solution-- super exciting and super interesting. Thank you both so much. 

GURMEET: Thank you. 

JAMES: Thanks, Mark and Brian. 

MARK: Actually, there is-- we'll put a link to it in the show notes-- there's also a talk this week about that. So another great way to dive a little deeper into how it works. And if people are interested, go try it. It's pretty cool. 

So Brian, last week, Max and I were talking about Stack Chat. So Stack Chat is the show we used to do where we go talk to customers, and we'd have them show us their architecture. Obviously, right now, flying around talking to customers is a little bit harder. 

With everybody working from home, we were like, OK, well, we still want to tell these customer stories. What's the best way to do it? I know. With this podcast that we have. 

So for this, it's not a question. It's not a tip. It's some sort of segment/interesting talk. I don't know what to call it yet. We'll figure that part out way later. But for now, we'd love for you to join us. 

Max is going to talk to Deloitte about how they built a system. It's called x360, and it was a system they built to gather a bunch of data and get insights from it and to get insights from COVID-19 data, specifically. So they talk a little bit about what they did, how they built it-- and obviously, you know, they built it on Google Cloud, but some of the things that they thought about while they were building it and how they did it in such a quick timeline. 

So sit back, relax, and join us for this episode of Stack Chat at Home. 

[MUSIC PLAYING] 

MAX: So I'm here with Ryan, lead solution architect for Deloitte's government practice. And he's an AI specialist, delivering projects for government clients, and using a lot of different kinds of AI for all manner of applications, including low connectivity applications and edge AI. Thanks for joining me today, Ryan. 

RYAN: Pleasure to be here, Max. 

MAX: So we were talking a little bit about x360 and some of the things that you've worked with some state governments on building. Can you tell me a little bit more about the problem you're trying to solve? 

RYAN: Absolutely. So ever since you started hearing the announcements about data being the new gold and the new oil, many clients started hoarding as much data as possible. And what we started finding out was that data is not the same thing as information or insights. So how to make sense of all of that data they started collecting is becoming a challenge. So x360 is the attempt that we're making to help our clients make better sense of their data and turning that data into insights. 

MAX: So what are some of the key tools that go into these solutions as you're assembling them? 

RYAN: So we knew that we needed to have a data warehousing tool that was high performance. So immediately upon doing a little bit of research, we came to BigQuery as a differentiating technology. We ran some benchmark testing and found that we were able to churn a little bit less than 6 terabytes in less than a minute, compared to some of the benchmarking we had done with some of our traditional computing, which was more along the lines of two hours per terabyte. So we were immediately seeing significant gains through the use of BigQuery as a differentiating tool for this. 

MAX: And you had to use more than just BigQuery to get to some of these important conclusions. So what else did you utilize? 

RYAN: You're absolutely right. As great as the tool is, it needed to have an infrastructure behind it in order to be effective. So we looked at Pub/Sub, Cloud Storage. We did a little bit with Cloud Functions in order to help automate some of the data loading processes from our object stores. 

And we looked at Looker as well because we found that some of the scalability problems that we were incurring on-prem due to the size of the data sets, we were running into challenges with responsiveness for those visualization tools as well. And what we found was Looker was able to help us at the scale we were working with for these data sets. 

MAX: Gotcha. And how long did it take to put this end to end together for you? 

RYAN: So we were told by our clients we had somewhere around 10 weeks to get something together. And utilizing Google Stack, we were able to get something together in about six that we could demo and then improve it over time. 

MAX: That's awesome. What else contributed to you being able to work quickly as you are trying to attack these very topical and very urgent problems? 

RYAN: Absolutely. One thing that was helpful as we were looking through these is not only are there some available open source data sets, but there are available open source data sets that are native to some of your tools. 

So I keep going back to BigQuery because it was at the center of what we were working with, but BigQuery actually has open data sets that are native to the platform. So you can actually just populate a bunch of different data sets. Going back to some of the health metrics we talked about, there's ones on social security. And being able to integrate these type of data sets were very great accelerators. 

MAX: Cool. And on top of the data processing pipeline, you were creating an entire application for these client teams to utilize. So we're talking not just the data ingestion, the ETL, and the visualization, you had to do a fair bit of data processing and presentation. Can you tell me about how you were able to make sure those also worked smoothly and quickly? 

RYAN: We were actually pretty surprised at just the volume of different tools that were available to us that focused on data transformation. You have data prep. You have data flow. And you can even, if you want something that's a little bit more customizable as well, work through the AI platform and do some Jupyter Notebook configurations. 

And so based off of some of the constraints we had on our client and the timeline, we focused on the AI platform Jupyter Notebooks because they actually come preprogrammed with some of the machine learning libraries that we wanted to be able to institute as a part of some of these transformation processes. 

MAX: So what aha moments happened during those six weeks as you were trying to get something out really quickly with all this data? 

RYAN: Just the sheer speed at which BigQuery can churn through some data. Another one that I wanted to bring up was as we were looking to build out the solution and the understanding that we would need to continuously develop this over time, we looked into CI/CD options. So that's Continuous Integration/Continuous Delivery, for those of you who are less familiar with it. 

And it turned out that Google ranked pretty highly in that area as well. So in playing around with some of its capabilities, through the combination of GitHub, Cloud Source Repositories, Container Registry, and Cloud Run, I was able to accidentally create a CI/CD pipeline in a little under two hours. 

MAX: Accidentally. [LAUGHS] 

RYAN: [LAUGHS] Right? 

MAX: Cool. Were there any real stumbling blocks or hurdles along the way during that development time? 

RYAN: The biggest one that we ran into, especially when we're working with government clients, is around accreditation. So there is a particular framework called FedRAMP which applies to the protections that need to be put into place for certain types of data. 

So while there's a Swiss Army knife of different tools in the Google portfolio, they do have varying degrees of FedRAMP accreditation. And so we had to utilize out of the portfolio that was available to us with the appropriate accreditations to design our solution. But we did find that we were able to have at least a one-to-one mapping with one tool that we needed to accomplish each of the tasks we had. 

MAX: Awesome. It sounds like it's lucky that you had a broad toolset to choose from in that sense. 

RYAN: Absolutely. Yeah. And you know, the ingenuity of cloud engineers is not something that should be marginalized. But the availability of tools, and the 60-plus that you have, allowed us to be able to use that flexibility to design the security requirements that our clients had into it without having to completely customize our solution. 

MAX: How was it received in the end when you were delivering this back to the states? 

RYAN: The performance was higher than they expected. The level of insights resulted in a couple of aha moments for them and was able to help them get help where it's needed most. 

MAX: What advice would you have for somebody, maybe like yourself, who's just starting to use this set of tools or this suite of cloud engineering products? 

RYAN: Well, one of the things that I find is that cloud engineering can seem a little bit intimidating at first. But when you really start delving into the tool set, you'll find that there are a lot of accommodations that could actually make it easier than traditional computing. There's a lot of GUI-based interfaces for setting up some of this infrastructure. For those who are command line wizards, you can do just about anything in command line as well. But really, I would just recommend going in and trying to get your hands dirty with a particular project that you have. 

Using AutoML, for example, I was able to create an object detection algorithm in about 47 minutes. And most of that was just spent on collecting the data I needed because I just took the data. I tagged it. I pushed the Go button. And then by the time that my next meeting was done, I already had my algorithm ready to use. 

MAX: It's always great to hear these stories, and I'm really glad that folks like yourself are helping tackle these big, big problems. Thank you so much for joining me today. 

RYAN: Thank you for having me. 

[MUSIC PLAYING] 

MARK: Awesome. Thanks, Max, so much for recording that. And of course, we'll put some more of these in this year, and we'll see what happens. I think it's a cool way to get concrete examples of how people use these things. 

You know that's always my favorite thing, so it's always what I ask people. Like, you can talk about all the theory that you want, but I want to see what it actually does. And I love examples like this, because that's what they do. 

BRIAN: Love it. Agreed. And yeah, if anybody's out there listening and you would like to talk about something you've put together, if it's something clever and amazing, fantastic. I'm actually sometimes more excited about the-- I don't know-- meat and potatoes, the regular, everyday stuff, and you find like just a little-- it just, like, fits together really nice this way, or things like that. 

So if you've got something you would like to talk about, please ping us on Twitter or send us a note. We have a form on the GCP Podcast web page. 

MARK: Yeah. There's a bunch of good stuff there. But yeah, I think Twitter is our probably our number one place where we talk to people. And yeah, it's great to hear these stories. I love hearing them. 

Well, Brian, I want to know, what are you working on? Because it's been a little while since we last chatted. 

BRIAN: Yeah. Mostly coping, surviving. I don't know, I feel like, everybody, if you're getting up every day and making it through the day, right on. 

MARK: That's pretty good. I see that on your notes here, you have specifically outlined, "chilling, maxing, and relaxing all cool, shooting some b-ball"-- I got to admit, I'm not very good at basketball. So I don't feel like I could accurately represent me doing those things. 

BRIAN: Me neither. We'll have to get someone else on the show for sports. 

MARK: No, we could have a sports section. I don't think we should have a sports section. Although, there is a cool MLB demo in last week's Max talked about. 

BRIAN: Yeah, we've had some pretty cool data stories around sports data. 

MARK: Yeah, I think that's the key of it because people are super into sports, and they get into the stats and like, oh, my gosh, I'd never realized there were so many stats in some of these. And they feel like sometimes they just, like, making it up. But anyway, there are so many stats out there, and you're like, oh, well, how do you take years and years worth of stats for these things and start to make predictions? 

BRIAN: Yeah, we did some cool work with the NCAA. 

MARK: Yeah, a few years ago when we are talking about taking all the basketball stats and analyzing them and trying to predict the March Madness brackets and just the tremendous amount of luck, I'm going to say-- luck and skill that would go into having the perfect bracket, which, as far as I know, nobody's ever done. 

BRIAN: So since you mentioned it, we will have find that from the notes, because it was pretty intense. 

MARK: It was cool. 

BRIAN: Combination of deep analysis and trying to do live predictions based on that. 

MARK: Yeah, it's fun stuff. We'll dig up some links for it. 

BRIAN: Yeah. So how about you? 

MARK: Like you said, we've got a lot of stuff going on, and we're working on some really cool content. Next week's episode is going to be super exciting! I can tell you that it's going to be something about cloud. 

BRIAN: What? 

MARK: All right, that might be kind of a cop-out spoiler. 

BRIAN: Give us a real spoiler. 

MARK: We're going to be talking about Kubernetes. In case you haven't heard, something impressive has happened in the past week or so. And so we're going to get a chance to sit down and talk a little bit more about our favorite form of Kubernetes, Google Kubernetes Engine. So we'll be talking about that next week. So stay tuned for that. 

But for this week, we'd like to thank you all for tuning in and listening to us, and mostly us rambling because that's what we do most of the time. But of course, for all our listeners, thank you so much for tuning in, and stay safe out there. 

BRIAN: Yes, absolutely. Stay safe out there. 

[MUSIC PLAYING]