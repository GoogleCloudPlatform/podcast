+++
audioDuration = "00:31:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.87.mp3"
audioSize = 45797108
categories = ["Customer Engineer"]
date = "2017-07-26T01:07:49Z"
description = "Francesc and Mark are joined this week by Jonathan Cham, a Customer Engineer at Google Cloud Platform, to discuss what his job entails and how our customers can benefit from it."
draft = false
episodeNumber = 87
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Customer Engineers with Jonathan Cham"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/NMExEry7rkE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6pptzg/episode_87_customer_engineers_with_jonathan_cham/"
+++

[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) are joined this week by Jonathan Cham, a Customer Engineer at Google Cloud Platform, to discuss what his job
entails and how our customers can benefit from it.

<!--more-->

##### About Jonathan Cham

Jonathan Cham is a customer engineer who helps customers be successful on the Google Cloud
Platform.  For 10 years, he has advised companies of all stages-- from startups to Fortune
50 companies on cloud technologies and helping them accelerate the delivery of IT. He wants
to help build your next successful billion dollar business on the Google Cloud Platform!

In his free time, he is changing lots of diapers, not by choice, and preparing his 3 month
son for the 2036 NBA draft.

##### Cool things of the week

- Google not Amazon. Make fantastic savings in a server-less world [blog post](https://in.3wks.com.au/google-not-amazon-make-fantastic-savings-in-a-serverless-world-b6d37710839c)
- TCP BBR congestion control comes to GCP – your Internet just got faster [GCP blog](https://cloudplatform.googleblog.com/2017/07/TCP-BBR-congestion-control-comes-to-GCP-your-Internet-just-got-faster.html)
- Google's BBR Algorithm for Speeding up Internet Traffic Gains Wider Adoption [bleepingcomputer.com](https://www.bleepingcomputer.com/news/technology/googles-bbr-algorithm-for-speeding-up-internet-traffic-gains-wider-adoption/)
- Introducing Transfer Appliance: Sneakernet for the cloud era [GCP blog](https://cloudplatform.googleblog.com/2017/07/introducing-Transfer-Appliance-Sneakernet-for-the-cloud-era.html)

##### Interview

- Contact Google Cloud Platform [contact](https://cloud.google.com/contact/)
- Introducing Google Customer Reliability Engineering [announcement](https://cloudplatform.googleblog.com/2016/10/introducing-a-new-era-of-customer-support-Google-Customer-Reliability-Engineering.html)
- We're hiring Strategic Customer Engineer [Google Careers](https://careers.google.com/jobs#!t=jo&jid=/google/strategic-customer-engineer-google-cloud-singapore-5410012&)
- Dremel: Interactive Analysis of Web-Scale Datasets [Google Research](https://research.google.com/pubs/pub36632.html)

##### Question of the week

How can I attend GCP meetups without traveling? GCP Online Meetup:

- [YouTube Channel](https://www.youtube.com/channel/UC7ZAfUgm7xIXzzRPltMnFzQ)
- [Meetup](https://www.meetup.com/GCPOnline/)

##### Where can you find us next?

Francesc will be at the July [GoSF Meetup](https://www.meetup.com/golangsf/events/240173664/). 

Mark will be speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.

{{< transcript "FRANCESC: Hi, and welcome to episode number 87 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing?" >}}

MARK: I'm doing very well today. How are you doing, Francesc? 

FRANCESC: Very happy. I'm back from a couple days of holidays, very well deserved holidays, if you ask me. 

MARK: Yeah. 

FRANCESC: Yeah, and I'm very excited about continuing our episodes on the same topic of not support, but the relationship between customers and Google Cloud Platform. 

MARK: Yeah, we've got a nice little theme going of basically sort of what our relationship ends up being with our customers and how we interact with them in a really good way, I think. 

FRANCESC: Yeah, and today we have Jonathan Cham, and he's a customer engineer. So we will go over what is a customer engineer, what is the difference between a software reliability engineer, what is a customer reliability engineer, what is a solutions engineer? There's a lot of them. So we're going to be talking about what is exactly what a customer engineer does, and it's actually really cool. 

And then we'll have a question of the week for those that love online content. You're listening to a podcast, so I'm assuming that some of them might like online content. So if you're not able to access meetup because there's no local meetup in your town, how can you access to that content? But before that, we're going to go we have things of the week. 

We have three of them. And the first one I'm going to let you go for it because you're the one that proposed it. 

MARK: Well, we've recently opened up a region in Sydney, which is pretty exciting. 

FRANCESC: Yay. 

MARK: And one of our partners there, a company by-- I'm going to assume it's Three Weeks. It's 3 W-K-S. One of the-- 

FRANCESC: It could be Three Wakes. 

MARK: It could be Three Wakes. It could be Three Winks. 

FRANCESC: I'm not going to send you that-- and I don't know. Yeah, whatever. 3wks, whatever that means. 

MARK: The author of the article is someone named Andrew Walker. He wrote an interesting piece about basically why they prefer Google over some of our competitors around their automation, and particularly around the "serverless" quote-unquote tag, and why they felt that basically people would save money when using us over other cloud providers. And it's got pretty pictures. I think that's basically the big thing. It has a lot of pretty pictures in it. 

FRANCESC: Yeah it has really, really, really pretty pictures, but also I like that they actually share how much they're saving with their own project. I do not know if those amounts will match to whatever savings all the people might get, but they're very impressive. Like, they talk about how their operating costs dropped by 80% when they moved to Google, which is pretty nice. But you know, if you're using things like BigQuery and Apache, and all of those things are completely managed, that doesn't really surprise me, actually. 

MARK: Fantastic. I think you had the next one. 

FRANCESC: So the next one is a new algorithm. You've all use TCP, that's for sure. And the C in TCP stands for congestion. And there's an algorithm that if you went through school to learn these things, you might remember how it works. And it's really complicated. And not only it's very complicated, but at the same time, it's not incredibly performing. There's a little bit of a problem on it has a long time to actually get to use the whole bandwidth of the network because it starts by basically uploading little by little, and that's among other things why, for instance, why Chrome, rather than having one TCP connection, establishes six of them to avoid these problems. 

Now, the thing is that that algorithm was not the only possible solution, and someone came up with a new solution. So there's a new congestion algorithm for TCP. It's called BBR, which stands for bottleneck, bandwidth, and round trip propagation time. And basically the only thing-- 

MARK: Propagation time is silent. 

FRANCESC: Propagation-- yeah. BBRPT. The whole idea is that it's still TCP, it looks like TCP, you use it like TCP, but it will make it so it uses better the bandwidth that it is allowed to use, which is really cool. 

MARK: Awesome. I'm so glad you can explain that because I have no idea. 

FRANCESC: Yeah, basically I like that in the article that we link from the show notes, they also talk a little bit about the benefits for Google Cloud Platform customers, and they show a little bit the difference between the maximum round trip time. So the bigger the round trip time, the slower it takes for you to receive data. Basically, that's the ping time. And in some cases, it went down, I think it's for India, it went down by 50%, which is crazy. 

So yeah, you will see that many of your operations, network operations will be much faster than before. It is not necessarily because we have the best network in the world, but also because we have algorithms that help. So it's definitely worth checking out. And if you are not curious about it, just enjoy. 

MARK: Yeah, you just get the benefits really without having to do anything. 

FRANCESC: Yep. 

MARK: Cool. And finally, we want to talk about a cool new product-- I think this is kind of cool. Basically, it is introducing the transfer appliance for Google Cloud Platform. You may remember back on episode 31, we talked about basically being able to do offline media import and export with some of our third parties. So if you need to put data on a hard drive and send it to us, quite often that's the fastest way of getting data to us, as they put it in the article, via sneakernet, basically, truck and people. 

FRANCESC: Yeah, we have the two options, one sending hard disk. The other one is if it's something that is very regular, you can also set up your own connection directly to a data center. 

MARK: But if you have say your own data centers and or even just your own racks and you're like, I kind of need to move like a petabyte of data-- 

FRANCESC: A petabyte it pretty big, yeah. 

MARK: That's big. It might be a couple of hard drive, maybe four or five, 100, something like that. 

We actually have this appliance now that you can put directly into your rack, a custom appliance that you can put directly in that will take about-- what is it, a capacity of up to one petabyte compressed, which makes it super, super fast for you to drop your data on it because it sits directly in your rack and then you can send it to us. And instead of it kind of-- if you're going to send it over the network, that might take, oh, I don't know, hundreds of days, you can now sort of get it in like a matter of weeks, which with that kind of size of data, that can save you a lot of time. 

FRANCESC: Yeah, I wonder how it actually connects. Like, I'm pretty sure that it is pretty standard because it is just a box that you can plug into your data center. So I don't know if it's like SCSI or whatever that is, but just a really, really, really, really incredibly big hard disk. 

MARK: Yup. But it's also really cute looking. 

FRANCESC: It is very cute, yeah. There's two options. There's the thinner one with 100 terabytes, and the slightly thicker one with 480 terabytes. 480 terabytes is a lot of terabytes. 

MARK: That's a lot of terabytes. That's more terabytes than I have. 

FRANCESC: Oh, yeah. I'm thinking that my big hard disk that I use for recording, I think it's four terabytes. So this would be 120 disks of those. 

MARK: I only have somewhere like 15 terabytes at home, I think. 

FRANCESC: Oh wait, no, terabytes. Oh, yeah, yeah. Yeah, no, it is, it is a crazy amount of data. So yeah, a little bit bigger than floppy disks. 

MARK: So that sounds really good. Why don't we then head off over and have a chat with Jonathan Cham to chat all about customer engineers? 

FRANCESC: Sounds good. Let's do that. 

MARK: I am very excited to have another member of the Google Cloud Platform family joining us today to talk to us about customer engineers. Jonathan Cham, how are you doing? 

JONATHAN: I am doing very well, and I am very happy to be here talking to my favorite Google celebrities, of course. 

MARK: Do you hear that? We're celebrities. 

FRANCESC: Thank you for coming. Thank you for calling us celebrities. 

JONATHAN: I'll ask you for your autographs later. 

MARK: Yeah, we can do that. I can totally do that. 

JONATHAN: Yes, all right. 

MARK: The funny thing is is normally at the beginning of every episode when people come on, we ask them, so who are you and what do you do? But we're actually here to talk about who are you and what do you do. So who are you, and what do you do? 

JONATHAN: Ooh, I do a lot. But yeah, my name is Jonathan Cham. I'm a customer engineer at Google. I support many of the Bay Area companies here. And so if you are one of them listening, perhaps you have already met me. 

FRANCESC: So what is a customer engineer? We've had many kinds of engineers in the podcast. We have software reliability engineers, we have software engineers, we have-- 

MARK: Customer reliability. 

FRANCESC: Customer reliability engineers. We have many, many engineers. What is a customer engineer? 

JONATHAN: Yeah, that's a really good question. And I'm going to kind of spin this back on you guys. What do you think is a customer engineer? And there's no right answer, right? I mean, there's no wrong answer, no right answer. Everyone's got their own opinion. 

FRANCESC: I think it's like a customer reliability engineer, but he's not reliable. 

[LAUGHTER] 

MARK: Does that mean that that person comes late just all the time? 

FRANCESC: Yeah, yeah, yeah. 

MARK: You can't rely on them ever to be there. 

FRANCESC: You cannot rely on them, I think. So yeah. 

JONATHAN: So basically, a customer unreliable engineer. 

FRANCESC: Exactly. Yeah. 

MARK: There you go. 

JONATHAN: Oh, OK. All right. All right. 

FRANCESC: I might be wrong. I might be wrong. 

MARK: That's fair. 

JONATHAN: I hate to say it, but that's totally wrong. 

MARK: Oh. 

JONATHAN: I mean-- so yeah, I can tell you a little bit about what a customer engineer is, but I have to first provide a disclaimer because, you know, opinions are my own and not the views of my employer. This is a relatively new role within Google, maybe within the last year. And as we continue to grow Google Cloud Platform, we wanted to provide the customer with a resource that they can have access to when it comes to building their application on GCP. So in short words, our ultimate goal is to help the customer be successful on Google Cloud Platform and own that end-to-end technical relationship with them. 

We're a single stateful interface to the customer. And because we're that stateful interface, that allows us to provide more strategic guidance to help them make these technical decisions regarding Google Cloud platform. 

MARK: So I'm guessing, in theory, then, if I am a customer and I'm thinking to myself, I'm going to build the next big thing, whatever that happens to be, and I'm thinking, how do I store my data or how do I scale this out or how do I do authentication, I can come to you with my ideas and you can be like, this is good, or this is bad, or something in between. 

JONATHAN: That's perfect. Yeah, that's exactly what it is. Actually, would you like an analogy? I can give you a good analogy. 

MARK: Sure. 

JONATHAN: All right, so it's good, not perfect. But I consider us like doctors, you know, and our customers our patients. So let me ask you real quick, what do you look for in a doctor? 

MARK: Lying to me. I like my doctors to lie to me. 

JONATHAN: You want them to be untrustworthy. 

MARK: I just want them to tell me that everything's going to be fine. 

FRANCESC: Everything's going to be fine, yeah. 

JONATHAN: Yeah, there's some of that, right? You know, we like to tell our patients everything is going to be fine. But I mean, when you look for a doctor, you want someone who you can trust, someone who's knowledgeable, someone that knows you very well, right? So listen and ask good questions. 

And so I imagine you come in and you say hey, Dr. Jonathan Sham, I have MCS syndrome, you know, which stands for massive container syndrome. Have you heard of that? 

FRANCESC: I mean, is that Kubernetes? 

MARK: Yeah, what is that? I don't know what that is. 

JONATHAN: Massive container syndrome. It's a syndrome where you have just way too many containers. So you know, what are your symptoms, right? Spending too much time managing containers, can't scale up and down my app quickly enough. My spreadsheet that lists where my containers are running is getting too complex. I mean, these are symptoms of MCS, and it's getting widespread. 

MARK: OK, and so they come to you with this and you're like, I have the solution for you? 

JONATHAN: Yes. And you know, of course I'll ask a couple of more questions about their goal. What other symptoms do you have? And after listening, we kind of do some diagnosis and prescribing, right? Maybe here's some medication. It's called Kubernetes. It's effective, it's potent, it will help you with that syndrome. You know, the only side effect is that you will have to manage all the infrastructure yourself, install, configure, update, and build out the Kubernetes cluster. Very affordable. Accepts all health insurances. 

Another medication drug, called Google Container Engine, had no side effects, higher efficacy, but just as potent as Kubernetes. It will work much faster, but a drug costs just marginally more than Kubernetes. 

So I mean, you get the analogy. The sense is you know, we come in, listen to their problems, and try to provide some diagnosis on what they want to do. 

FRANCESC: Yeah, so we interviewed someone that was a [INAUDIBLE] customer engineer, working specifically for platinum customers, right? And now I'm curious about-- to become a platinum customer, you actually need to use the cloud to a point where if you overuse it, we notice. 

What about customer engineers? Is this for everyone? Is this for-- like, can a new customer just come directly and get one? 

JONATHAN: Yeah, so a lot of new customers typically, as we're growing, we are starting to assign customer engineers to a lot of accounts. And what that means is that they might hear from us. If they want to be proactive-- I know this sounds a little sales-y, but you go to the cloud.google.com web site, you know, go to /sales, and you tell them you know who you are, what you do. There's a very, very good chance that you already have a customer engineer that you don't know about. 

MARK: OK, so basically anyone who is thinking about getting involved with customer engineers or wants to get started on the program, they're able to do that now and go there and get started. 

JONATHAN: Yeah. I mean, if you're part of a legitimate organization that's using Google Cloud, I mean, if you're running your own personal blog web site, you're probably not going to get a customer engineer. I don't know. I mean, do you guys have a customer engineer for your GCP podcast dot com? 

FRANCESC: No. But maybe we should. 

MARK: Maybe we should. 

FRANCESC: Yeah. 

JONATHAN: Well, I'll find out who that is. But yeah. I mean typically, the size of the organization usually doesn't matter. It's a matter of how much are you using GCP? 

MARK: So that's actually an interesting question. You say this is for people who are already using GCP. What if somebody isn't yet using GCP, but wants to sort of have help onboarding. Is that also in your role? 

JONATHAN: Yes, that's absolutely part of my role. And that's actually part of our typical engagement, right? I mean, a lot of these initial meetings, we'll have customers who are not GCP customers reach out through that same website, cloud.google.com/sales. And they'll say, hey, I'm using AWS or I'm using Azure. I'm interested in looking at GCP. And we'll go and tell them about GCP, but more importantly, learn about what they're interested in. Why do they want to talk to us? 

A lot of them want to talk about multi-cloud strategies. They want to talk about having high-availability across vendors. So I mean, not all clouds are perfect. And a lot of times customers who might be happy with their current cloud vendor want to have a second cloud vendor just as backup. 

FRANCESC: So that makes me think. So what does it look like when-- if I'm a customer and I want to engage with a customer engineer, how would the doctor visit look like, following your metaphor? 

MARK: Do you wear a coat? Do you wear a white coat? 

FRANCESC: Oh, yeah. That'd be cool. 

JONATHAN: Yeah, first of all, I make sure I bring my lab coat with me that has my name, Dr. Jonathan Cham. But yeah, I mean, I alluded to some of this earlier about the doctor analogy. A lot of customers reach out to us. And sometimes, we'll reach out to them. But initial meetings for people who don't know GCP, we just discuss about what their goals are. I mentioned about multi-cloud strategies. But they also want to hear from Google. 

Google itself has a lot of impact in the industry. They want to hear about trends within the market. Just recently, I was at a health care executive briefing where I spoke about the need to collect information. And there was a Kaggle competition about predicting patient health care costs. And they were super-excited about that. So they were really surprised about the maturity of where machine learning was these days. 

I mean, after initial meeting, usually there's something like, oh, OK, this sounds great. GCP is cool. Let's see how much I will gain or how much I'll save money. What type of value-add benefits will I get from moving? So a lot of times, they'll make us do a cost analysis with all the other vendors. So we do that a lot. 

And once they've committed to using Google Cloud, after they've done kind of the analysis, paper analysis, they go, OK. We've decided Google Cloud Platform is the way to go. We like BigQuery. It's awesome. Totally unique and differentiated. We like Dataflow. Tell me how to build my app. So we'll sit in a room for like, three hours talking about what they're doing today, where they want to go, how much storage do they have today, just a lot of questions. And a lot of iteration goes on and on throughout those meetings. 

And in terms of, how do you take that into production? I mean, what do you guys think is the percentage of effort between taking it and building an app in dev versus building an app in production? 

FRANCESC: I mean, do you care if it actually runs? 

JONATHAN: Yes. 

FRANCESC: Then, I mean, knowing how hard things normally are, I guess it depends a lot on whether you're running on App Engine, or Container Engine, Compute Engine, and stuff like that. But I'd say that yeah, it's probably 50% more time of making sure that everything is actually monitored, the alerts are set up, and stuff like that. 

JONATHAN: Yeah, I mean, a lot of the times, companies have kind of like their minimal viable product. They do a little quick demo of running on a single instance. And like, oh my gosh, this is what we want to do. 

But when it comes to building out, putting that into production for the thousands or hundreds of thousands of customers, they need to focus on things like reliability, availability, manageability, performance, security, scalability. I mean, that list goes on and on and on, right? So a lot of those discussions kind of we iterate back and forth, making sure that, as they deploy this into production, that they're successful doing so. 

MARK: Cool. Do you tend to also engage, like I'm guessing-- because with those multiple teams, and we've had some around here, like maybe CRE. There's some big customers. But like support teams, things like that. You also engage with them across the board? 

JONATHAN: Oh, absolutely. Yeah. I mean, there's a lot of different people that are involved. I mean, when I say all of this, it makes it sound like I'm actually doing all the work. But a lot of what we do is just make sure we own that end-to-end technical relationship. 

So sometimes, if the customer has a specific, let's say, Kubernetes error, we're going to bring in support. That's not something that I would be troubleshooting for them. Sometimes, for large platinum customers, like you had mentioned before, they have a strategic customer engineer who they've actually paid for to be their hands-on person that will actually sometimes write code, make sure everything's up and running, log all the feature requests. Because these platinum customers have a lot of features that they want that we might not have. So just making sure that they're happy. They do some of that as well. 

So for us, we're kind of just owning that end-to-end, from beginning all the way to their next big project. We want to be that single point of contact. 

FRANCESC: So what is the profile of a customer engineer? Are you engineers? Are you salesmen? Are you both? Are you actually doctors? 

JONATHAN: Well, it's a really good question. I think they adjusted our titles to be customer engineers because a lot of us really aren't coming from sales backgrounds. A lot of these people that we're hiring are literally engineers. I mean, some of them were engineers at Google. 

I sit next to a Google Developer and he decided, hey, I want to be more customer-facing. So I mean, the people who we hire-- by the way, we are hiring a ton of people. So you know, go to google.com, look for customer engineer, and see if you can apply. But yeah, I mean, we're looking for all types of people. And you absolutely do not need to have kind of a sales background. You just need to be able to talk intelligently in front of customers and not be awkward. 

FRANCESC: That kind of sounds not that different from the role of developer advocate, where we're engineers, but we need to talk, not in front of customers necessarily, but in front of like, lots of people. 

MARK: That's true. 

JONATHAN: Yeah. 

MARK: We don't have the responsibility of making sure production systems stay up, though. 

FRANCESC: We definitely do not. 

JONATHAN: Yeah. I mean, like the doctor, we're there for the good times and the bad times, right? When things break, guess who they call? They'll say, hey, Jonathan. Are things down? You need to help us. Support's not responding, things like that. So it's my job to help, what they call "herd the cats." 

MARK: Yeah. So that's actually a really good point. So it's not just a hey, I'm going to help this person on board. It's also the ongoing relationship throughout time. 

JONATHAN: Absolutely. Yeah, it's a very strategic role meaning that you're with them throughout many different initiatives, not just one. And I think that's kind of maybe where dev rel, or developer advocate, might differ from us is you guys are doing all this awesome evangelism, helping customers use the platform. But in the end, you don't have customers you're accountable for, right? Whereas, we are. We actually have a set of customers who we are totally responsible for. If they don't do well, we are measured on how well they do. 

FRANCESC: Nice. So from a completely selfish point of view, as a developer advocate, one of the things that we do is we talk to people and ask for feedback on our products. So I'm now wondering, what kind of feedback do you get from customers? What are the things that people are like, oh, that's so cool? Or maybe, what are the kind of things that people are kind of surprised about? 

JONATHAN: Yeah, I can talk a lot about that. Because yes, I get all their greatness and all the-- if this is a word-- badness from all our customers. But I mean, yeah. 

The good things I hear are, I think number 1-- and this is just more from a technical perspective, but like openness. We have TensorFlow, Apache Beam, Kubernetes. You know, Bigtable, which is HBase. And we have over 300,000 commits on GitHub. I mean, these are things that no other cloud vendor really has. And you know, it's not as strategic for them as it is for Google. I mean, openness is really big. 

And for large companies, this is very important. In the past, they've had vendors that have locked them in and they can't get out. And so for us to really be pushing this openness around all these open source projects, where we can tell them, look, Google Cloud Platform is the best place to run. But hey, if we're not doing our job, if we're not making you happy, you can always run any of these on another cloud. And that's a really powerful statement. 

Another good thing that I hear is cost. You know, usually we do come lower, between 20% to 50% lower, but it really depends. And I always like to say, we're not the Wal-Mart of cloud vendors. Our cost is lower because we can scale at such high numbers. I mean, what are we? We have like what, 1 to 2 billion users? I mean, we already have a lot of infrastructure in place, so our economies of scale are enormous. 

People love our GUI. I don't know. I mean, I'd like to ask you. I mean, our GUI is pretty awesome. The Cloud Shell? 

MARK: Oh, yeah. 

JONATHAN: There's nothing like it. One button, boom. You're in, ready to go. 

FRANCESC: That's probably one of the things that I forget about how cool they are. And when I show it to people that have never used Google Cloud Platform, when they're like, oh, you want to connect to [INAUDIBLE]? You just click on SSH and that's it. And people are like, oh. I forget that that's not like, the normal thing for people. 

JONATHAN: Yeah, it's amazing. And I don't know if you know, but they're coming out with like a code editor in there, too. So really, I mean, they're going to turn that interface into your single interface for everything. 

MARK: Excellent. All right. So I'm just curious. I think it's fair to have the good with the bad. What are people finding frustrating? 

JONATHAN: This is sort of an oxymoron, but customers will say we're not as feature-rich, which is a totally true statement. It's factual. There's a lot of features that maybe a lot of cloud vendors might have that we don't have. I mean, we're not going to be able to match feature for feature with another cloud vendor that's been in existence for much longer than we have. 

I mean, for example, Postgres. It's a very popular database. We launched it in beta in March of this year, but it's a 20-year-old technology. I mean, people have been using it for a very long time, and we just announced that in March. 

And to be fair, we are launching products like, everyday. I don't know how you guys keep up with the announcements, but I mean, I get announcement every day about a new product. 

MARK: We have a podcast, that's how we keep up. 

FRANCESC: Yeah. 

JONATHAN: Yeah. But I say that it's an oxymoron because, at the same time, we're releasing these kind of traditional databases, we're also coming out, at the same time, Spanner. Global availability, global consistency. Like, light years ahead of what people actually need. 

And in hindsight, I mean, I think it is Google's job to really kind of meet customers where they are. And Spanner is great, but a lot of customers aren't ready to move to something that light years ahead. I mean, former Hadoop co-creator-- I mean, he said Google's living a few years in the future and sending us messages, right? 

It's true. We have all this technology. We've had to scale like crazy. So we've built all these new platforms to allow us to do that. But you think about all the enterprises that have been using on-prem technologies for the last 20 years. They're not there yet, right? So what we're doing in the meantime is, yep, we're investing in all these great, awesome technologies that we've already built internally, externalizing them. But at the same time, enabling our customers to slowly move their traditional workloads, like, leveraging Postgres and things like that, to our Google Cloud. So I think that's where the features are, we're still catching up. I don't know. What do you guys think? 

FRANCESC: Yeah. I think that in general, people tend to have the view that since Google Cloud tends to be quite-- it's a pretty young platform, relatively. At least, many of our features are pretty new. People tend to feel like, oh, it's not as mature and things like that. 

But at the same time, what I say to that is, well, yeah. Like for instance, Spanner. It's a pretty new feature. It's a pretty new product, but we've actually been using it internally to power Google for quite a long time. There's an experience that is internal that has helped us getting there. 

JONATHAN: Yeah. And that's definitely a pattern I've seen across numerous products. 

FRANCESC: Yeah. 

JONATHAN: Yeah. I think the good news is though, if you're building a new app, I mean, there's really no feature that we're lacking. 

Now, if you have this old app that uses a lot of these kind of more older technologies, there's probably things that you'll need that we might not have. But I haven't talked to a customer where there's like this one feature that's like, OK, this is a deal breaker. We cannot use Google Cloud. There's always a workaround. And I think that's what makes us unique. 

We always have things that you can do, that you can work around any kind of technical blocker. 

FRANCESC: Do you get to see more customers that are coming to Google with apps that already exist and they're migrating them to the cloud? Or do you see more people that are building new infrastructure, new applications, and they're looking for the cloud as the place to build them directly? 

JONATHAN: I think there's a little bit of both. So I actually have dealt with pretty much three types of customers. Ones that are already using a cloud vendor, which is the most difficult. I mean, you really have to convince them to-- there's a lot of value to move to Google Cloud, right? It's not just cost, but there's an operational cost to move. All their employees are already using another cloud vendor's API. So there's that migrating from another cloud. 

Number 2 is moving from on-prem. A lot of these large enterprises are using on-prem. They have their own physical hardware, own data centers. And trying to figure out, OK, how do we map that to what Google Cloud Platform has? That's part of our role. 

And then the third one, our customers who are building new apps-- already, they just said, hey, look. GCP looks cool. We're going to start using GCP. Oh, it's actually working very well. We're going to continue making investments in Google Cloud. So I think those are the kind of three profiles of customers that I personally see. And there might be more. 

MARK: So now I'm curious, what are the reasons that you're seeing people moving? 

JONATHAN: Right now, I think there's a lot of-- unfortunately, a lot of people want to save. Well, not unfortunately, but people want to save money, right? And Google Cloud Platform has a very, very aggressive cost structure. So in terms of like storage and compute, we are definitely cheaper. 

And while I don't like to emphasize like, just come to us because we're cheaper, we do have a lot of value-add products, like BigQuery. I think that's Dremel, right? Dremel is the white paper for BigQuery? 

MARK: Yeah. 

FRANCESC: Yeah. 

JONATHAN: Yeah. I mean, we've had BigQuery internally for many years. And there's nothing like it. I always tell customers, it's a three-step process-- upload your data, write your SQL query, run it. I mean, that's very powerful. 

There is no more setting up infrastructure. There's no more updating, securing, patching. It's just getting real value from your data instantaneously. And so the trend that I'm seeing across all customers-- and I think just across the industry, in general, is just people moving to managed services. This is something that people realize that the operational aspect of managing the infrastructure is not very valuable to their business, and they're trying to get away from that. 

MARK: So we're almost running out of time, but is there anything that we haven't mentioned, or you want to make sure you plug, or you just want our audience to know about? 

JONATHAN: Yeah. If you want to reach out to us, I run a weekly online meetup. Just go to meetup.com/gcponline. Actually, if you just search GCP online meetup, we do this weekly webinar/architecture, just banter back and forth. Obviously, not as cool as the GCP podcast, but we do some kind of a webinar and demos on a lot of these different products that we talked about. So join and subscribe to us. And you know, we're happy to interact with you. 

FRANCESC: Cool. I'll definitely check it out. 

MARK: Awesome. Well, Jonathan, thank you so much for joining us. This was a really great conversation. 

JONATHAN: Yeah. Thank you, Mark. Thank you, Francesc. 

FRANCESC: Thank you. 

MARK: A huge thanks to Jonathan for joining us today. It is really nice to hear what happens, not necessarily maybe behind the scenes, but behind customer engagements that happen with us and some of our customers. It's really, really nice on how we like to basically take care of them. 

FRANCESC: Yeah. I'm looking forward to seeing his updated business card with the new title, Customer Un-Reliable Engineer. We'll see if he actually does that. 

But before we finish, and before I get fired, let's talk about the question of the week, which is actually very related to what Jonathan Cham does. So the question was, basically, OK. I am in some random place in the world. And unfortunately, I am not able to access local meetups. 

If you're in San Francisco, there's a bunch of local meetups, and it's really cool. But if you're somewhere else where you cannot access those, what do you do? Some of those meetups actually record their talks and publish them. But it's even better if those meetups happen directly online. And I think that Jonathan Cham does exactly that. 

MARK: Yeah. So he runs, or I think he helps run-- anyway, he's directly involved. 

FRANCESC: He somehow hosts the thing, which is weird because it's online. So I'm not sure what that means to host it. 

MARK: It is the Google Cloud Platform Online Meetup. So there have been a series. I'm actually just going through them now. There's a lot of really cool meetups that have been going on for quite a while-- I want to say once a month or so-- where they do live YouTube streaming of presentations where you can interact directly with the presenter and hang out with a bunch of other people who are also online watching the same thing. 

FRANCESC: Yeah. I really like them. There's one of them that I definitely want to watch. It's "Getting Started Quickly with Machine Learning on Google Cloud Platform." One of the reasons why I want to watch it is because I can see that there's a little picture of Bender from "Futurama." Definitely, check it out. The coolest part of this is that it happens online directly. So it's not only you can watch the video and ask questions in the comments. You can actually ask questions to the speaker on real time, which is very, very nice. 

MARK: Yeah. And if you happen to manage to miss it for whatever reason, they're available as well on YouTube. And we'll put a link on the show notes. 

FRANCESC: Yeah, we will. 

MARK: Excellent. All right. Well, Francesc, before we wrap up today, are you up to anything interesting and exciting lately? 

FRANCESC: No. I do not do anything interesting anymore. I just published the episodes for JustForFunc every two weeks. And on Monday, I released one on how to do Unit testing of web servers in Go, which is something that not that many people do. So if you're interested on it, go check it out. JustForFunc.com. And other than that, holidays. What about you? 

MARK: I'm going to hang out a little bit. My next event will be PAX Dev, and then PAX West. 

FRANCESC: Which is? 

MARK: Late August, early September. So that's in Seattle. If you play games, and know games, and love games, then you probably are familiar with these conferences. 

FRANCESC: Great. Well, Mark, thanks so much for taking the time today to, again, record an amazing episode of the Google Cloud Platform podcast. 

MARK: And thank you so much for joining me. And thank you very much to everyone for listening as well. 

FRANCESC: See you all next week. 

MARK: See you all next week. 
{{< /transcript >}}