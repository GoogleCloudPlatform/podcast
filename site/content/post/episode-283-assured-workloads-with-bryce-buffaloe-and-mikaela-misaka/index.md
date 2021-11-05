+++
audioDuration = "00:34:00"
audioFile = "Google.Cloud.Platform.Podcast.Episode.283.mp3"
audioSize = 48907669
categories = ["Security", "Privacy", "Compliance"]
date = "2021-11-03"
description = "Mark Mirchandani and Max Saltonstall are back this week to learn everything there is to know about Assured Workloads with Bryce Buffaloe and Mikaela Misaka."
draft = false
episodeNumber = 283
hosts = ["Mark Mirchandani", "Max Saltonstall"]
title = "Assured Workloads with Bryce Buffaloe and Mikaela Misaka"
image="/post/episode-283-assured-workloads-with-bryce-buffaloe-and-mikaela-misaka/images/hero/hero-EP-283.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/qlyn3e/episode_283_assured_workloads_with_bryce_buffaloe/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Max Saltonstall](https://twitter.com/maxsaltonstall) are back this week to learn everything there is to know about Assured Workloads with [Bryce Buffaloe](https://twitter.com/brycebuffaloe) and Mikaela Misaka. Google's Assured Workloads helps companies and governments ensure secure projects and privacy protection in sectors with extensive compliance requirements while taking advantage of Cloud capabilities.

Bryce and Mikaela start the show talking about the challenges faced when using a public cloud for projects with very specific regulations and how Assured Workloads was developed to help solve these issues. The easy setup steps and uncomplicated UI help customers move from their on-prem infrastructure to Google Cloud where scaling, local customer support, and other advantages can be easily leveraged while maintaining a secure, compliant environment. 

With so many compliance standards in sectors like finance and healthcare, our guests walk us through the process Assured Workloads clients go through from identifying the regulations of markets they participate in to planning their data security, keeping customer support local to maintain privacy, and using Google Cloud to put these plans into practice with their projects across the world. On the Google Cloud side, the team works to create regulation maps that organize the rules of potential markets so customers can click a button and rest easy knowing their projects are compliant. Bryce details what goes into making Google Services like GKE compliant for customers as well. Assured Workloads continues to grow as new client challenges are presented. In the future, monitoring support, audit management, and other features will be introduced. Global expansion and sovereign cloud capabilities are coming soon, and our guests tell us more.

##### Bryce Buffaloe

[Bryce](https://twitter.com/brycebuffaloe) is the Assured Workloads Product Manager at Google.

##### Mikaela Misaka

Mikaela is a Customer Care Offer Lead at Google Cloud, focused on creating new customer care offerings and value-added services tailored to the needs of regulated customer segments. 

##### Cool things of the week

* Run your fault-tolerant workloads cost-effectively with Google Cloud Spot VMs [blog](https://cloud.google.com/blog/products/compute/google-cloud-spot-vm)
* 8 more things to love about the new Pixel phones [blog](https://blog.google/products/pixel/8-more-things-love-about-new-pixel-phones/)
* Government and Education Summit [site](https://cloudonair.withgoogle.com/events/cloud-govt-edu-summit?utm_source=linkedin&utm_medium=unpaidsoc&utm_campaign=FY21-Q4-global-G&E1306-onlineevent-er-gov-and-edu-summit-main=&utm_content=smarp&utm_term=-)

##### Interview

* Assured Workloads [site](https://cloud.google.com/assured-workloads)
* Assured Workloads Documentation [site](https://cloud.google.com/assured-workloads/docs)
* New capabilities for Assured Workloads for Government [blog](https://cloud.google.com/blog/products/identity-security/assured-workloads-for-government-is-now-ga)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* New data sovereignty controls for EU customers [blog](https://cloud.google.com/blog/products/identity-security/new-sovereign-controls-for-gcp-via-assured-workloads)
* T-Systems and Google Cloud partner to deliver sovereign cloud for Germany [article](https://www.t-systems.com/de/en/newsroom/news/t-systems-and-google-cloud-partner-to-deliver-sovereign-cloud-for-germany-450474)

##### What's something cool you're working on?

Max has been sharing AI use cases from inside Google IT and tech support and was working on red panda and sith warrior Halloween costumes for his kids.

Mark is planning some cool podcast updates for next year.

{{< transcript "[MUSIC PLAYING] MARK: Hey, everybody. And welcome to Episode 283 of the Weekly Google Cloud Platform podcast. I'm Mark Mirchandani. And today I'm here with Max Saltonstall." >}}

MAX: Hey, Mark. Thanks for having me. 

MARK: Yeah, of course. Today, we have a really interesting episode. 

MAX: I really love digging into Assured Workloads with Bryce and Mikaela. Because they're tackling a really complicated problem of just how do we, as a Cloud provider, help governments and other heavily regulated industries who have intense requirements around securing data, around infrastructure, around how things move around. How do we let them take advantage of the Cloud and the scale and the breadth of capabilities that you just can't match with homegrown on prem systems? 

MARK: Yeah. I mean, it kind of shifts the conversation. Because, a lot of times, folks are talking about Cloud versus more traditional or on premises solutions. That's its own very valuable conversation to have. 

But it's entirely separate to look at it and be like, OK. Well, there are benefits to the Cloud. But we can't even look at those because we have these types of regulations and, like you said, security compliance things that are going to stop us from using it. Or in most cases, stop us. Right? And so, that's where Assured Workloads comes in. 

MAX: Sometimes the conversation can't even start until you've really met those compliance requirements. And some of them have very good justification for them. But it creates a pretty high bar for any sort of service provider that's working with the government. 

And I'm pleased to see that, over the many years, the Cloud teams have really gotten a lot of these certifications and approvals to let them serve not only a wide variety of parts of our government, but use so many of these tools that I think can unlock a lot of extra efficiency. 

MARK: Yeah. Absolutely. So Bryce and Mikaela, we have a great conversation with them. And they get into all the details. But before we do dive into that conversation, let's get into our Cool Things of the Week. 

[MUSIC PLAYING] 

All right. For my Cool Thing of the Week, I have a blog post here that talks about now, in preview, this new edition of Spot VMs. And I haven't had a chance to play around with them yet. But if folks are familiar with the idea of preemptable VMs, these are virtual machines that have a limited lifespan of 24 hours. And you can kind of reserve them for a much cheaper price. But then you have to be able to have fault tolerant workloads, because they might go away. 

Spot VMs are like the next version of that. They don't have the limitation on the 24 hours, which is super cool. And they work really well with GKE. So if you're using Kubernetes, and you have these kind of workloads that are really OK with the nodes of the virtual machines under them being swapped out or changed, Spot VMs are up to 90% cheaper, which is like-- that's a lot of money to save. 

MAX: I really hope pretty soon there are some good shell scripts for Run Spot Run, Go Spot Go, and Stop Spot Stop. 

MARK: I should have seen that coming. But I did not. So kudos. 

MAX: Here for the dad jokes every time. 

MARK: Every time. Well, I think Spot VMs are super cool. So hopefully I'll get a chance to play around with them. But if folks have these workloads or they just want to play around with much cheaper resources, definitely check it out. 

MAX: I'm pretty excited about some of the new technology behind the Pixel 6 camera. I find that my phone is primarily a camera that fits in my pocket that sometimes also does internet searches or email. And I love how the Pixel teams have been utilizing both improved hardware and software and some really cool AI smarts to make the cameras better. 

So better face detection, better color balancing, better recognition across skin tones for better racial equity. So we can remove a little bit of the bias of these algorithms. And I really like the idea of Magic Eraser. You could sort of take out the unsightly elements of the background or just things that are cluttering up your photo. 

And as someone who chases small children around with a camera sometimes, you never quite get the framing you want. And so being able to say, you know what, actually, I like that picture. I just don't like the background. And fixing that is so cool. 

MARK: Yeah. I saw the whole announcement where they went through all the different features of it. It's always amazing, the amount of technology that they cram into these new phones. I'm definitely super tempted to pick one up. Because it does seem like a really cool set of features. 

MAX: If you figure out a way to find one, please let me know. 

MARK: Yeah. We'll work on that, too. I mean, we work at Google. And we don't even have one. And I think, of course, we do have this great conversation about Assured Workloads. It would be great to mention that we have a government summit going on actually right now. So if you haven't heard about it, it might be a little bit too late. Depends on when you listen to the podcast. But all the content should be available for viewing afterwards. And we'll definitely include a link in the show notes. 

But this very much ties into the conversation we're about to have with Bryce and Mikaela. Because we talk about a lot of the challenges that these industries-- the government, public sector and other regulated industries-- face. And Gov and Education Summit also covers a lot of content around that. So if you're in one of these industries or you're just interested in learning more, definitely go check out the summit. Because it's probably a lot of great content there. 

MAX: I looked at the agenda. I said, wow. Government Summit. That is a huge amount. And there's a lot of good things for technical leaders within government groups, as well. So if you are looking at ways to improve the technical sophistication and maturity of your agency or department, definitely go check out those videos. 

MARK: Yeah. And speaking of which, let's just go ahead and dive right into the conversation for folks who want to learn more about Assured Workloads and how that really kind of addresses those challenges. 

[MUSIC PLAYING] 

Mikaela and Bryce, thank you so much for joining us today. To get things started, can you give us a little bit of an introduction? 

MIKAELA: Hey, everyone. I'm Mikaela. I'm a Customer Care Offer Lead. So I work on the Customer Care Team in Google Cloud, which helps customers and partners around the world to solve technical problems. And I'm mainly focused on creating our offerings in the customer care space. 

BRYCE: So I'm Bryce Buffalo. I'm the Product Manager for Assured Workloads. So I focus mainly on our compliance of the GCP platform and how we're able to offer that to our customers through different controls. 

MARK: What is an Assured Workload? 

BRYCE: An Assured Workload is essentially a concept that we've created to create a regulated boundary on top of GCP. So what that does is it allows us to actually set data residency controls, personal access controls, and meet baseline requirements for our customers, instead of forcing them into a separate environment. 

MARK: And I think that's really the big question that we're talking about here is, especially when it comes to the government and their specific regulations that they tend to have, it can be a lot for folks, especially if they are not familiar with what the public sector looks like. So let's start there. What makes the public Cloud such a different environment from kind of private Cloud? 

BRYCE: When we start to talk about public Cloud based infrastructure and we start to talk about the government itself or other regulated industries, it is scary. Super scary. Because you're going from an on premises data center, where you've always known what you had, who was there, how everything worked, and you owned operated and shared all that infrastructure. And you're going to a new place where you don't own or operate that infrastructure. 

You have to understand what they're doing to have these controls in place. And you're trying to map what you've done on premises into this new thing that's in the Cloud. And it really requires this thing of trust and shared fate in that Cloud provider in yourself and understanding what's there. 

So as we've looked at this in the past, typically these customers have really spent a lot of time either building up their own private Cloud or private based infrastructure, going to a Gov Cloud in some cases and really sealing their components there. And they have not been able to bring those workloads to public Cloud. And in some cases, they just don't bring them to the Cloud at all. 

MIKAELA: That's largely due to the fact that many of those customers in the regulated industries see compliance as a baseline for being able to bring those workloads onto the Cloud. So it's just a yes or no for them. Oh, I can't figure it out. I'm not going to do it. I'm going to leave it on prem. 

MARK: So how do we meet those compliance needs then so that it's easier for them to have a choice around putting a workload onto the Cloud? 

MIKAELA: The way we're solving for this with Google Cloud is through Assured Workloads. So with Assured Workloads, we give customers an easy, simple setup and UI to be able to essentially decide what controls they want to put in place very easily as they create workloads on Google Cloud. And then downstream, it's an automatic effect from there. 

So from a support perspective, we provide assured support when we see customers that have regulated data sets and that are marked within an Assured Workloads control. We provide the support services consistent with the control that the customer has selected. So for instance, in the US, we know that customers require US personnel to provide their support services. So we ensure that customers who create support cases have case routing to a support agent that is a US person located in a US location to meet their compliance requirements. 

BRYCE: It's really relatively pretty interesting. Because when we start to look at these concepts of how we're able to take those customers and bring their data to GCP, Assured Workloads is providing that concept of a very easy to understand onboarding path that allows them to actually set those data controls or on data residencies-- so select your region. 

The next step is select the different type of support that you want, as Mikaela was talking about there. But the other core component here is the actual GCI layer, or the Google Cloud Infrastructure layer. So the Google Cloud Infrastructure layer is what all of our products and services are built on top of. And when we actually do our control attestations for things like SOC 2 or any other compliance regime that's a three letter name or four letter name out there, what we do is we do it at that level at the GCI layer. And it allows us to inherit those across other products. 

And what that does for our customers is it creates a baseline for building off of it. And then we layer Assured Workloads on top of that. And we can sometimes knock out two thirds of compliance requirements for customers, sometimes even more. And then a lot of times, we can actually check that box on a lot of compliance for customers just at our core infrastructure layer for them. 

MARK: Yeah. And I think that that is an important kind of a question to understand. And I think you did a great job of pointing out that there's more than just the government here. I think it's a great example. But there's tons of different regulations that different companies have to look at. Health care and financials being two great examples, I think, that probably come up a lot. 

And there's no shortage of three to four to six letter compliance reasons that they need to look at when they're talking about storing and dealing with data. So let's talk a little bit more about that. Why are there so many different compliance standards that are important to these companies? And what are they thinking about when they're talking about moving to the Cloud and following those compliance standards? 

BRYCE: When I really look at it, the first step is regulated markets. So oftentimes, a lot of our commercial based customers have to work with government customers. If we look at the financial industry, they also have to work with government customers. But also they have to service their own customers. And when compliance is put in place, think of it as a best practice for security or a best practice for securing sensitive data types. 

So when we see compliance as a baseline, as Mikaela mentioned before, the reason there are so many is because for each industry, we started to create new components and new ways to secure your platform and new best practices. And these things are reviewed by different boards, such as an ISO group or we look at the NIST group. 

And what they do is they effectively come up with these controls and best practices, publish them. And then people are held to these standards. And then in order to operate in these regulated markets, you have to be able to get to that baseline standard. And Mikaela can probably talk a little bit more about how we even start to do this in Europe or think about how it's different there. 

MIKAELA: It is different there. But from a compliance perspective, the foundational elements of what customers are looking for are quite similar. Right? It's the data location and the access to the personal sensitive core customer content and regulated data. And how do we protect that? 

So what we're doing really in the EU is very exciting. But we're essentially just expanding the foundational elements that Assured Workloads provides right now in the US to the EU. Of course, we have different controls specific for EU regulated customers. But the foundational capabilities are the same. It's locking down that geographical location to EU data centers or specific even data centers in the EU, as well as making sure that support cases and who's accessing that customer data is EU personnel. So EU persons eligible to work in the EU. 

MAX: Very cool. So you've got a lot of different kinds of customers-- small governments, large governments, many different compliance regimes. How do you figure out which things you're going to be able to meet? And is there an easy way to find out if this is going to meet my own needs as one of those customers? 

BRYCE: It's really hard. When we start to look around the globe and we see developing requirements, we've seen Schrems II start to come out with just changing data privacy acts, which has influenced a lot of different controls that we're putting out there. We've seen other things happen in the US where we're seeing supply chain management options start to come out around software supply chains and the security of them. 

So these are all constantly changing as we go forward. What we usually try and do is really try and work with and understand our customers, and understand our multinational customers and see where they're looking to grow their business, and actually look and see where they're trying to meet requirements that are changing for them. And it's becoming really hard to do that on premises. 

And a lot of times, they really just want the benefit of Cloud. They want to be able to scale. They want to be able to get the extra capacity, start running AI, ML, all the really cool things that are out there. And their one checkbox to even getting to that one is, hey, I just need to know that you're compliant and you have these controls in place. 

And when Mikaela was saying, when we look at that data residency and we look at personnel access, a lot of those controls can be met on those two key components. Is my data being kept in a specific region? The second question is, when that access occurs, who is that person? Are they background checked? Are they in the right region? Do they have the right credentials to do so? 

And making sure that customer has the transparency of knowing what occurred during that action through things like Access Transparency, which is another product and service which is required through shared workloads. Mapping all those different compliance regimes together, I think we have a whole giant ends compliance in other places here where they actually spend a ton of their time doing this. And this cross mapping is an extremely difficult practice. 

But the biggest thing for us is, as great stewards of data essentially for our customers, we want to go out and do that mapping on behalf of our customers to make their lives easier. I once had a customer describe the audit as 50 days in 50 rooms with 50 different people. And it's a giant headache. And if we can make that time shorter and make that experience better, that's what we really want to focus on here by actually doing that compliance mapping, making it a button click, and then just solving it for them. 

MAX: I'm surprised the audit description wasn't more colorful in their language choices. But I think that sounds great. You know? That you can take this headache away proactively. It's something I don't need to deal with. And it's something I might even feel more confident is going to be a simple part of my life. 

BRYCE: One thing that we've seen here is, a lot of our customers are really familiar with this term of shared responsibility. I think a lot of our competitors made this a really popular term in the past. And it kind of meant, throw it over the wall. You got it. 

We're moving in our leadership here-- you know, Thomas Kurian is very focused on pushing towards this concept of shared fate, and Neal, our GM-- shared fate and visible security. And this concept is we should be pushing across that shared responsibility lane to help our customers with the things that they need to do on our platform in order to be compliant, be secure, and do all these things. And make it really transparent and easy for them. 

MAX: So if I'm using this, could I still make the mistake of configuring something incorrectly and then opening myself up to either compliance or a security issue? Because I know that's often something we read about in the headlines, if somebody just made a simple human error. And then boom, all that data is leaked. 

MIKAELA: Simple TLDR is no. And just going back to what Bryce was saying, we're trying to make it as simple and easy as possible for our customer. And they can just set their controls and forget about it, honestly. And so, that's what we try to do. 

And it's not just about the audits, right? It's about the ease of use from the very beginning of the UI, of creating their workloads and setting the control. Once they've set the control, it's automatically working for them. They don't have to go back and monitor it. Of course, they can if they want to. But it's there to prevent them from making mistakes downstream to potentially put them out of compliance. 

BRYCE: Spot on. Because the biggest thing we've heard from our customers is around developers not understanding compliance. And no one's expecting a developer to be a compliance expert. That's a guy named Bob. He's a mythological character that I have. And he sits in the compliance office. So we don't expect those developers to be compliance experts. But we want to provide those guardrails that prevent them from making a mistake. 

But also we want to provide information back to Bob, the compliance person, to make sure that he understands that, hey. You know, this developer is trying to deploy something in a place where they shouldn't. I should go talk to them. And you let them know this is why we have this. And this is why compliance is here, to protect us and protect our customers. 

MARK: I mean, it's great to hear that, obviously, the goal of all of the things that Google is doing with the Cloud is to make it easier for folks to tap into some of the things you mentioned earlier, Bryce. Like, AI and the machine learning stuff that the Cloud has is great. But it's kind of useless if, well, you can't access it for compliance reasons. So I love to see that these types of solutions are being thought about and really being brought to the users who have to meet these compliance requirements. 

Let's talk a little bit more about the actual requirements. We talked about the big two. It's kind of like location of data and folks who have access to data. What are some of the other requirements that are being met here? 

BRYCE: Yeah. This is where it gets super boring. 

[LAUGHTER] 

So I'll put down my ISO board hat. So when we start to look at the requirements that are out, they are basically mapped out NIST 853. 

MAX: That's one of my favorites. 

BRYCE: Yes. It is the best. Everyone loves it. You know? I love doing the revisions that we do here on the standards org. What we really do there is, with NIST 853, if I look at that from a customer perspective, many of the controls that exist there are layered in across other compliance regimes. When we start to look CJIS, Criminal Justice Information Systems, we look at Federate Moderate, Federate Pie. 

And even when we look at IL4, which we recently got provisionally ATO for-- so I do want to thank everybody on the assurance side for that. It was a huge win. It's been two years of us working on this. It's great news. And the way that we've achieved this has never been done by CSP before. 

But all of those controls together, basically what they do is that, when we meet those certain specific controls, it allows us to take one control in NIST and map it out to all these different regimes and meet that requirement for our customers. 

So when I mentioned the GCI layer before, we try and do it at that level. But there exists that whole customer responsibility thing, like a component of, how do you configure GKE to meet an access control requirement? These are tough questions that our customers have struggled with. And we're starting to actually build a lot more out in blueprints and other items now to help those customers on that side. 

And then also we're going to be introducing things along the lines of monitoring support. We're going to be introducing things along the lines of audit management and other key components to help those customers actually map out, see the configuration, see that they are compliant, and actually kind of really providing a lot of assistance there. And actually, as we get further and further down the line, we're hoping that compliance is invisible to them. 

MIKAELA: And one thing I'll just add is, as we're continuing to expand and unlock these regulations and specific regions and compliance controls, we're simply just adding them to our existing Assured Workloads service. Right? So customers purchase this Assured Workloads service. They'll see, as we unlock these features, these new additional compliance controls, that they can then select and apply to their workloads. 

BRYCE: That's like one of the awesome benefits we keep hearing from our customers, which is, it's great to be in the GCP console. And then one day, it's like oh, a new compliance regime just popped up for me. Wow. Maybe we should enter this regulated market. It is really cool because it's a one time buy for our customers. And then, as we expand those geos, they just get access to it. 

MAX: So for the folks at these companies or governments who are managing their public Cloud presence and their development, what is the experience like for them? 

BRYCE: It is extremely the same as regular GCP. And that's the cool part about it. So these customers are really used to having to spin up different teams to run in separate environments. They usually have to have specialized skill sets, different management, sometimes different Clouds even that they're using. Or they're hoarding those workloads on premises and using legacy hardware that they really want to get rid of. 

So when this is opened up to them, the thing about it is that it enables them to actually move those workloads over to Cloud. And the cool thing is that they're able to use one team, one Cloud. And everybody has the same training. Because the way that we basically move our GCP services into the boundaries here, we don't change the services. They're the same. BigQuery is the same in an Assured Workload as it is outside. GCS is the same inside as an outside GCE. 

So what we want to make sure is our customers, when they build in one place, it works throughout their different environments. And we don't effectively break that for them. So we want them to experience the full kind of power of Cloud, I'll say. And that allows them to really be happy and also simplify their operations. 

MIKAELA: Yeah. And one thing I'll add is we do get questions and confusions from customers as they're looking to onboard or asking questions. And they're like, really? That's all I have to do? It's the same? Because on some of their competitors, they're having to spin up these crazy workloads, do these crazy manual significant things. But really, I mean that's the term that we've coined. It's really the invisible compliance that we're trying to enable. 

MARK: I mean, it's so amazing to hear that what once is and probably still is considered to be the heavy burden of meeting these compliance requirements can be made a lot simpler by just having it be invisible and having it be transparent so that everyone kind of gets that same experience. It's just built in. 

How does that work on the Google Cloud side? Like, how do we actually make sure that these types of requirements are being met without making it intrusive to the user's experience? 

BRYCE: Yeah. That is a very, very, very well-funded question. So I say that because, over the past two years, we've seen compliance portions of GCP just explode. And I say that from a standpoint of the importance that they have within the platform itself and the importance they have to our enterprise customers. And just our regular customers that want to achieve those compliance things, or a higher standard of security. 

So when we look at these things, we have different teams that apply these access controls. They work with the other product teams. And effectively, we use this concept of security horizontals to work with each one of these teams, layering in the necessary controls, making sure those controls work properly, monitoring them. 

And then it's really kind of this magic thing for our customers. As Mikaela said, it's invisible because they effectively get this whole concept where we have 250 different engineers working on getting GKE to a point where it's compliant. But at the end of the day, that customer just knows they're using GKE. 

And it's so cool because oftentimes customers are like, do I need to configure this in some other way to make sure that I'm getting this person? It's like, no. Just spin up this workload. We'll be releasing folder level controls by the time this comes out. It's a new feature that we're rolling out with. Today, we work on projects. But effectively, they'll release a folder. And once that's created on their environment, when they create projects into it, they just inherit all the controls. And we basically make sure they're in place for the customer. 

MAX: So what are the next things on your roadmap? What are you looking at over the next year? 

MIKAELA: Oh, this is the fun part. The non-boring part. So we're really looking to expand geographically. Right? One I think we kind of talked about later this year, we're going to be expanding into the EU. So that's awesome for us. We're working right now to hire a bunch of engineers to staff in the EU so that we can offer that. 

And then also we're looking to unblock additional compliance controls. One, focused in the US. But also in other locations. And then if we want to talk about it, we can talk about our new, cool sovereign Cloud capabilities that we're building. 

BRYCE: Our EU expansion with sovereign controls is actually a really cool component. We recently made an announcement with TSI in Germany, one of our great partners there, to actually provide greater controls around sovereignty for trusting the partner, but also trusting Google. What that allows our customers to do is actually get to a point where they can bring their data that has normally been on premises because they don't have that sovereignty control that they need in order to meet the government requirements and data privacy requirements. 

So this is just a really cool feature that we're going to be starting in Europe with. And then hopefully expanding it as we go further out to other geos to offer the same kind of guarantees. 

MARK: Yeah. I mean, it's a really interesting challenge, it sounds like. Because there isn't a one size fits all solution here. And some of these requirements or some of these compliance checkboxes can just be checkboxes. But other times, they're really down to complex scenarios that are going to depend on the types of work being done. And it sounds like obviously based on the country and the different requirements they have. 

So it is pretty exciting to see how we can bring in local groups from those countries who really have expertise who have been dealing with this for a long time and can really lend their expertise to make solutions happen. 

MIKAELA: Yeah. We're really breaking new ground here, I would say. And jointly innovating with these partners to really develop a large spectrum of next generation sovereign Cloud. It'll be really cool to watch in the next couple of years. Bryce and I will be heads down in trying to make this work. But we're really excited about it. And we really see this as the norm for how to kind of expand and scale our services in the EU, but also just to other regulated customers out there. 

MAX: So if someone wants to learn more about what you can do today or what's coming, where should they go? 

BRYCE: The first thing I would say is go to the Assured Workloads product page. That would be the first part. It is Cloud.Google.com/AssuredWorkloads. Really cool name. So you start there. And we have a bunch of technical documentation that's out there for our customers. But also, there's a lot of white papers that we've written specifically about EU sovereignty. But also, we have different blueprints and different documentation out there in our Solution section about how to actually configure things in compliant ways once you've entered an Assured Workload. 

MARK: And unfortunately, we're almost just about out of time. But I know one of the things we also wanted to grab was talking about Assured Support, which goes hand in hand with these Assured Workloads. Mikaela, can you tell us a little bit more about that? 

MIKAELA: Yeah. So we've kind of dabbled in the topic here and there. But Assured Support is really based upon the premises that we understand that our regulated customers' compliance obligations and their security and privacy obligations extend into their support services. So they require control not only when they're spinning up a workload, but also what happens next when they're maintaining and monitoring that workload. And when, ultimately, they need to raise a support case or need any sort of technical assistance there. 

So Assured Workloads customers can use Assured Support to ensure only Google support personnel meeting certain attributes support their workloads. So in the US, we guarantee US based support. In the EU, we're looking to do something similar. But essentially, what we're offering is just guarantee that the support services will meet those personnel conditions that the customer selects as part of their Assured Workloads control. 

And what's great about the offering is that it relies upon the controls that the customer sets in Assured Workloads. So the customer doesn't have to do anything manual or net new when it comes to creating or raising a support case. Our downstream support systems pick up on that control that's set at the one time get go with the Assured Workloads creation. Again, invisible compliance. 

MARK: Love it. That's the best theme that really could come out of this, this idea of being able to match all these what can be very complicated requirements. But just making it so seamless so that even the support experience is integrated. That's so awesome to hear. 

MIKAELA: Yeah. And we're really trying to take a proactive approach with this kind of service. Assured Workloads and Assured Support are offered conjointly together in one subscription. And this is kind of really one of the first times that we're doing this, that Google Cloud is offering a product plus support holistic kind of package to service these regulated customers, which we ultimately understand is what the customer needs. They need compliance both on their product and on their service. 

MAX: It's fantastic. 

MARK: Yeah. So unfortunately, we are just about out of time. I want to thank you all so much for coming in. But before we wrap up, are there any other items you wanted to mention? 

BRYCE: Two more things, actually. The first one is Assured Workloads for Canada is on the way. So we are currently working to get that in private preview for our customers. And we're working with customers now to start onboarding them and getting them familiar with the controls and seeing where we can get for Protected B, which is one of the compliance regimes we're looking to start off with, along with Canadian regions and support. 

The other thing I wanted to mention is, we're doing a lot of work with other teams-- one in particular, our Risk Protection Program-- to understand how we can start to use compliance to really inform how customers can start to obtain cybersecurity insurance. This is a really cool, interesting part. Because it's starting to holistically work out how we protect an organization at the data and the protecting it from a holistic point across the Cloud, as well. So this is a really cool point that we'll probably be back here to talk about with Oscar, who's the Product Manager for that, as well. 

MAX: Excellent. Thank you so much for coming and educating us about all of these topics and how invisible and assuring the new developments are. 

BRYCE: Thank you. 

MIKAELA: Thanks for having us. Hopefully, we didn't bore you guys. 

MAX: It was very fun. 

MARK: Once again, thanks so much to Bryce and Mikaela for coming in. It's really great to hear these stories. And I'm always one who enjoys hearing about the more specifics of how these industries are actually solving these problems. And so, I love to hear about the Assured Support part of it. That was a really cool add on there. 

I think this goes back to what you were saying earlier, Max. Right? The ability for the Cloud to solve these problems and really bring-- I hate to say-- innovation. But it's really what it is. Right? I mean it's bringing all these types of new technologies and cool things that you can do and making it accessible for all these regulations that previously kind of made it inaccessible. So I love to hear it. 

MAX: And so much of the regulation is around securing the data. Right? We don't want criminal information data or Social Security data getting into the wrong hands. And what I love about some of what Bryce and Mikaela were teaching us is how we can also make it much simpler to only make the right decisions as you're setting up your infrastructure. Right? We can remove the opportunities to accidentally overshare or grant excessive access so that those human error factors are reduced. And the whole data infrastructure is much, much safer. 

MARK: Yeah. I mean, these regulations exist for a reason. I think you said that earlier. And it totally is true. Right? And so again, being able to map the ability to have these technologies and kind make the Cloud slightly less complicated. Because setting up Cloud stuff can be complicated. Right? And so, being able to lock that down and match these regulations is always a good thing for folks. 

MAX: For sure. 

MARK: All right. Well, Max, it's been a while since you've been on the podcast. What have you been working on? 

MAX: I've been having a lot of fun working with some of our internal IT teams at Google, folks in corporate engineering and folks who do a lot of the tool and software development behind our tech support avenues. So there's some really interesting stuff around how do we take, say, Dialogflow and apply it to tech support? Because somebody's asking a tech question is really doing a dialogue in that same way. And they have an intent. And we can probably match them to some piece of existing self-serve support content. 

So there's a bunch of different projects. We've got a few blog posts out and a few more coming. And it's been really cool to learn about how we're taking some of these public facing Cloud technologies and actually turning around and applying them internally for a better experience, especially when it's hard to walk into an office and get support from a IT person in the flesh. 

MARK: Yeah. It's always super exciting to see how we can improve the support experience. Because the reality is that the scale of support is always going to be way faster than folks can keep up with. So the more self-service stuff, the more content and the more kind of knowledge base-y type of way. But how do you make that experience better? 

MAX: Exactly. 

MARK: Right. That's the key difference. That's always super cool to see. 

MAX: How about you? 

MARK: Getting close to the end of the year. We've had so many great podcast conversations. And we're definitely looking forward to seeing how we can start planning for 2022. Because I can't believe it's going to be 2022 soon. 

MAX: What? 

MARK: Yeah. I know. But we're definitely going to be doing some cool things for the podcast. So looking forward to that, as always. 

MAX: And as we're recording, the schools are doing their Halloween events. And it's just a few days before Halloween. I am deep into Red panda and Sith Warrior costume creation in this household. We've got hot glue and safety pins and felt and all kinds of decorations to deck these kids out for whatever the weather will allow. 

MARK: I only heard Red Panda Sith Warrior as one costume. 

MAX: Maybe next year. But I do have two children who have two very different tastes in their media consumption. So. 

MARK: I think that's a good signal of it. Right? A Red Panda and Sith Warrior generally have no overlap. But I'm sure you can find a way, Max. 

MAX: I'll tell the kids tonight. You know what? We just have to combine costumes. So little one, get on the big one's shoulders. And we're to do the Red Panda Sith Warrior hybrid thing. 

MARK: Oh. And then you get like a full adult sized costume, too. So you can always wear it next year. It works out super well. 

MAX: I mean the premise of the next "Star Wars" movie is that Sith in the hood. You know? You never see their face. It's actually it's just three Red Pandas in a cloak. 

MARK: It's always been. It's Red Pandas all the way down, Max. 

MAX: I'm afraid so. 

MARK: And with that, thank you to all of our listeners for tolerating us. We will see you all next week. 

MAX: Thanks very much for having me. Please don't sue me. 

[MUSIC PLAYING]