+++
audioDuration = "00:35:54"
audioFile = "Google.Cloud.Platform.Podcast.Episode.19.mp3"
audioSize = 51720218
categories = ["NEXT", "Big Data", "Machine Learning", "Go", "App Engine"]
date = "2016-03-30T01:07:49Z"
description = "In the nineteenth episode of this podcast, your hosts Francesc and Mark interview some of the speakers at GCP Next 2016 from the conference floor"
draft = false
episodeNumber = 19
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "GCP Next Speakers"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/NuhiJJm45Lk"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4cliff/episode_19_gcp_next_speakers/"
+++

In the nineteenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview some of the
speakers at GCP Next 2016 from the conference floor.
<!--more-->

##### Cool thing of the week

Most videos from GCP Next 2016 are already available on [YouTube](https://www.youtube.com/user/googlecloudplatform/playlists?view=50&sort=dd&shelf_id=10).

The talks are organized in the following playlists:

- [Keynotes](https://www.youtube.com/playlist?list=PLIivdWyY5sqIFd0E6JG1hVr8sXQaLmmBP)
- [Solutions Showcase Sessions](https://www.youtube.com/playlist?list=PLIivdWyY5sqKn7TkT5bc9EpBA8pSRaqFi)
- [Infrastructure & Operations Sessions](https://www.youtube.com/playlist?list=PLIivdWyY5sqKXJZfLHVaKidLsW9P949Zi)
- [App Development Sessions](https://www.youtube.com/playlist?list=PLIivdWyY5sqJeXeL6oYtl3IxM_OeA7oBQ)
- [Data & Analytics Sessions](https://www.youtube.com/playlist?list=PLIivdWyY5sqLpj5W-tdqT3O2NQ-_LgiPL)

##### Interviews

###### Mike Kavis from Cloud Technology Partners

[Mike Kavis](https://twitter.com/madgreek65) is a VP/Principal Architect at [CloudTP](http://www.cloudtp.com/),
and his current areas of focus are IoT, Big Data, and containers.
He was part of the [GCP partner panel: Learnings from real world cloud migration](https://www.youtube.com/watch?v=g_iig8sxsYc).
Mike also wrote a very interesting [article about GCP Next for Forbes](http://www.forbes.com/sites/mikekavis/2016/03/25/google-provides-a-glimpse-into-the-future-of-cloud-computing/#316725fc529f).

Mike discusses how people migrate to Google Cloud Platform and how they evolve once on it.

###### Niels Provos from Google

[Niels Provos](https://twitter.com/NielsProvos) is a distinguished engineer working on
security/privacy at Google. He was part of the [Day 2 Keynote](https://www.youtube.com/watch?v=axhdIa_co2o)
where he discusses what Google Cloud Platform keeps your data and applications safe.

You can learn more about Google Cloud Platform security [here](https://cloud.google.com/security/).

Niels also talks about [Project Shield](https://jigsaw.google.com/products/project-shield/)
which provides DDoS (Distributed Denial of Service) attack protection to independent news,
human rights, and election monitoring sites for free.

###### Frances Perry and James Malone from Google

[Frances Perry](https://twitter.com/francesjperry) is a a Software Engineer
and a data processing infrastructure geek at Google working in the Cloud
Dataflow team.

[James Malone](https://twitter.com/chimerasaurus) is a Product Manager and an
Open Source Software advocate working in the Cloud Big Data team at Google.

They both spoke about the evolution of big data processing in the open source
software world with [Data Processing & OSS: The NEXT Generation](https://www.youtube.com/watch?v=mJ5lNaLX5Bg).

###### Julia Ferraioli from Google

[Julia Ferraioli](https://twitter.com/juliaferraioli) is a Developer Advocate
for Google Cloud Platform (like Mark and I!) and she told us how to use machine
learning to figure out if the object in a picture should be hugged or not.

She covers the continuum of machine learning tools on Google Cloud Platform with
[David Zuckerman](http://twitter.com/cupofzucker) Head of Developer Experience
at [wix.com](http://www.wix.com/) during the session
[Build smart applications with your new superpower: cloud machine learning](https://youtu.be/Ja2hxBAwG_0).

###### Neil Palmer and Todd Ricker from FIS

[Neil Palmer](https://www.linkedin.com/in/neilepalmer) is the CTO at FIS
and [Todd Ricker](https://www.linkedin.com/in/trickito) is a Principal Engineer
at FIS.

Their talk covers how FIS & Google are working to build a next-generation stock
market reconstruction system that aims to bring transparency to the US
financial markets and drive innovation across financial services. In this video
we dive into the proposed system architecture and show how products like Cloud
Bigtable, Cloud Dataflow and BigQuery enable this process.

Watch their talk [Analyzing market events at 34M reads/sec and 22M writes/sec with NoOps on GCP](https://www.youtube.com/watch?v=fqOpaCS117Q).

##### Question of the week

[Romin Irani](https://twitter.com/iromin) asked when to use App Engine with Go.

- Go on Google Cloud Platform [docs](https://cloud.google.com/go)
- Go on App Engine [docs](https://cloud.google.com/appengine/docs/go/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 19 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing?
FRANCESC: Pretty good. Pretty happy that finally GCPNext is over. That was pretty epic.
MARK: That was--I think epic is actually the right word for it. 
FRANCESC: Yeah.
MARK: That was, like, awesome in the true sense of the word.
FRANCESC: Yeah. It was--lots of--lots of lots of lots of interviews.
MARK: Yeah.
FRANCESC: But yeah. Actually, what was your favorite part?
MARK: Man--
FRANCESC: So many things.
MARK: I think for me--I'm probably biased, because we were sitting right in the middle of the playground.
FRANCESC: We were.
MARK: But the playground--like, I loved the playground. I was so happy to see so many cool, interactive things that people could, like, look at, from the Datacenter 360 to the motor booth, where they could sort of interact with the vision API or the vision bots. Like, just being able to see people get hands-on with the stuff that we run at Google Cloud Platform and, like, interact with it in a really fun way--I think that was really rewarding. I really enjoyed that.
FRANCESC: Yeah. That was actually lots of fun. We interviewed a bunch of people from Instrument, the company that helped us build those demos, and it was really amazing, to the point that if you go to our Twitter page, Twitter.com/GCPPodcast, you will see that we changed our picture, and now we actually have a picture taken with a model booth.
MARK: Yeah, yeah. I think you might see that picture show up in a few places once I integrate it with a few more of our services.
FRANCESC: Yeah. That was an awesome picture. Yeah.
MARK: Yeah, yeah. No. That was great. They asked us to show surprise, and I think we showed surprise.
FRANCESC: Yeah We were very--we're very, very good at being surprised.
MARK: Very much so. Very much so. But I know the keynotes were pretty amazing.; They were all really, really great.
FRANCESC: Yeah.
MARK: So we've got for our listeners today, I think, a bunch of interviews that we did with speakers at the event.
FRANCESC: Should we share the number of interviews we made in only two days?
MARK: Yes. If you weren't at the event, we--how many interviews did we do?
FRANCESC: It was 43 interviews. Something like that.
MARK: Yeah. So we interviewed a whole bunch of people--like, three-minute, five-minute, ten-minute interviews at GCPNext. We had all our gear there, and yeah. It was just nonstop.
FRANCESC: It was. It was pretty crazy. It was a very noisy environment.
MARK: Yeah.
FRANCESC: So I wanted to thank again Brian Dorsey for the amazing equipment that allowed us to record all the things we recorded.
MARK: Definitely.
FRANCESC: And they actually sound great.
MARK: Yeah. They sound great. And thanks so much to everyone who came by at the table, sat down with us, had a chat, told us about their experiences, what they were building, how they felt about the event. We're definitely, I think, gonna feed in a bunch of content into episodes past this one--
FRANCESC: For the next years or so.
MARK: Yeah. Probably until the next GCPNext. We’re just gonna roll it through.
FRANCESC: Yeah
MARK: I'm pretty happy with how all that turned out.
FRANCESC: And actually, the cool thing of the week for this week is gonna be related to that. The main content of the week is gonna be related to that, and then, the question of the week is gonna be related to that. Today, it's the GCPNext episode
MARK: Yeah. It’s totally a GCPNext episode. So yeah. Main content, we're gonna be doing interviews with speakers. So we've got five speakers, or actually more than that, because we have some people coming in past.
FRANCESC: Yeah. We have five interviews with a bunch of speakers.
MARK: Exactly. So we're gonna talk to them, and then we also have a question of the week from someone who came by and talked to us at the event as well.
FRANCESC: Yeah. So what is the cool thing of the week, then?
MARK: So the cool thing of the week is funnily enough GCP-related--is we've released all the YouTube videos for GCPNext. So if you're interested in the keynotes, if you're interested in the presentations--I might be in one of them.
FRANCESC: Yeah. I actually watched three of the talks already.
MARK: yeah.
FRANCESC: One was yours. So where you talk about dragons on the cloud, which is pretty awesome--
MARK: Yeah.
FRANCESC: Then, Justin Beckwith, PM, Google Cloud Platform--he does a lot of notch AS, talking about how to make his Noogler hat spin through bits by little bits.
MARK: Yeah, okay.
FRANCESC: It was great. It was a very interesting talk. And yeah. And then, I actually, like--I'm waiting to watch Julia Ferraioli's talk on how to train neural networks to know if something is huggable or not.
MARK: That sounds really cool. And we will be talking to Julian in a little bit too.
FRANCESC: Yeah. We'll be talking to Julia in a minute.
MARK: Excellent. So if people listen to the speaker interviews that are about to come up, and they want to see the presentations, they should be online, and all the other stuff too--keynotes from Sundai Pichai, from everyone else--
FRANCESC: Eric Smith--that was a great talk.
MARK: Yes, it was. They're all online. So you can definitely check that out.
FRANCESC: Excellent. So shall we get started with the interviews from our speakers?
FRANCESC: Sounds like a good idea. Let's go for that. So we're here with Mike Kavis. Hi, Mike. How are you doing?
MIKE: Very good. It's been a great show so far.
FRANCESC: Great. And you work for Cloud Technology Partners?
MIKE: Yep. They're a Boston-based firm that helps companies get to the cloud, whether they're migrating apps or building anew.
FRANCESC: Cool.
MIKE: And we do a lot of work on the Google platform
FRANCESC: Very cool. Could you tell us a little bit more about what kind of products you use with them and what kind of--what is your favorite product, or the favorite product for your customers, actually?
MIKE: Well, my personal favorite is the whole big data suite of things from, you know, Data Flow, pubs, BigQuery--I mean, most--you know, I've been working in data warehouses my whole life, and the hardest part is always getting the data in, and at Google, it's just, you know, a couple APIs and a couple configurations, and that--the hard part's done, and then, you actually focus on getting the results out of the data. That's a game-changer in my eyes.
FRANCESC: Very nice. So I'm assuming you also work with BigTable a little bit?
MIKE: Oh, yeah, yeah.
FRANCESC: What do you think of BigTable? It's quite a new product. Have you used it?
MIKE: Well, I mean, again, my background's in data warehousing. I remember buying appliances, like the [inaudible]. It costs zillions of dollars, and you know, you go dark for a year just setting up the infrastructure and stuff, and now, you got tools like BigQuery, BigTable, and you know, you're just up and running and getting results that are ten times faster than what you can get anyplace else, and it's just--it's just kind of amazing, actually. 
FRANCESC: Yeah.
MARK: Wonderful. And so I believe you're here at GCPNext. You presented?
MIKE: Yeah. I was on a panel, talking about cloud migrations, which is kind of a new chapter for Google. Right? I mean, originally, it was all about, you know, kind of the future of development, and you know, with all these high-level services. But I think the realization comes--is you've got to get people on a platform first. So now, there's a big focus on cloud migration. We do a lot of work in that space.
FRANCESC: Very interesting.
MARK: So when you say cloud migration, is that specifically, like, moving from one cloud provider to another? What does that really mean?
MIKE: It could be, but  normally, it's moving from on-prem to the cloud, and the biggest use case is always, you know, "We have 20 data centers WE got to get to three by X date," which is usually very aggressive.
FRANCESC: Yeah.
MIKE: So the good is, you know, that people are moving fast to the cloud. The bad is we're lifting and shifting, so they're not getting advantage of the cloud. But that's the next wave. Once you get them there, then you start helping them re-architect, or build that new network stack
FRANCESC: Very interesting. So for people that are doing that shifting and lifting, I'm assuming that lots of them did just move to Google Compute Engine.
MIKE: Yeah. So in a lot--in a lot of cases, again, they're time crunched. So it's, "Get what I have in the cloud." So they're treating Google more like a virtual data center.
FRANCESC: Yeah. I see.
MIKE: And they're not--they don't have the time yet to take advantage of those higher-level services, and that's--once you get them there, then you--then you move them up the stack. Right?
MARK: Sort of a foot-in-the-door type of situation.
MIKE: Yeah, yeah.
MARK: Wonderful.
FRANCESC: When you say, "Move them up the stack," could you tell everybody more about that? Is it, like, our container engine, or do you move them to a pension, or how does that work?
MIKE: The actual loading term--it means so many things to so many people. Thought what I really mean is getting them to use more high-value API, so getting them to use, like, [inaudible], getting them to use BigQuery, Data Flow--you know, all those services, where you no longer have to focus on the infrastructure and the plumbing. It kind of does it for you.
FRANCESC: Yeah.
MIKE: And then, you can focus on building apps and doing the machine learning and getting insights and stuff like that.
FRANCESC: Yeah. That is--that is actually a little bit what [inaudible] was mentioning during the keynote about the server list architecture.
MIKE: Yeah.
FRANCESC: Not because there's no service, but because you don't really care about them anymore.
MIKE: Yeah, that--
FRANCESC: That is very interesting.
MARK: Really moving up to another level of abstraction.
MIKE: Yeah. And the challenge is most of these enterprises are just figuring out what cloud is. So you start talking about serverless stuff--the eyes just kind of glaze over, and it--sometimes, it takes them stumbling and fumbling on the cloud for a couple years until they get it and start moving up the value chain and taking those high level services. The companies that have been in the cloud for a while, they get it, and they're,like, salivating over, you know, new stuff like that.
MARK: Yeah. So speaking of keynote, did you have a particular launch or a product or demo? What was your favorite part?
MIKE: I like--I like a lot of the machine learning prediction stuff. I like that a lot. We're getting a lot of projects. You know, sometimes, they're labeled IOT. Sometimes, they're labeled BigData. But there's a lot of companies who are harvesting sensor information, and their first step is just to get it all in one place, but their ultimate goal is, "What can we learn from this data, and how can we offer new services, or how can we change an industry, or how can we change pricing models?" So there are--a lot of companies are early in that journey, and you know, we're helping them get the data in one place. But it's nice to see where--you know, because right now, machine learning is an art and a science.
MARK: Yeah.
MIKE: And you're trying to make that, you know, so any developer can tap into that.
MARK: Sort of a commodity.
MIKE: Yeah. And that--I'm looking forward to that. I know there's a lot of work yet to do, but that’s a good direction to be going.
FRANCESC: That is very cool. Did you get the chance to play a little bit with the playground activities? [inaudible] and the photo booth and so on?
MIKE: No. I've actually been running between sessions, and we have a booth here, so I've been kind of going back and forth between that.
FRANCESC: Okay.
MIKE: But I do need to--I see a Tetris machine over there. I might have to do that.
FRANCESC: Yeah. Very cool.
MARK: Yeah.
FRANCESC: Well, thank you so much for being with us today.
MIKE: Yeah.
FRANCESC: And see you later.
MIKE: All right. Appreciate it. Thanks, guys.
MARK: Thank you very much. We are joined here by Niels Provos, who is hot off the stage from the keynote this morning. How you doing today, Niels?
NIELS: I'm doing just fine. Glad that I'm done, you know, with my obligations for the day.
MARK: That is good.
NIELS: That took a while to prepare.
MARK: Yeah, yeah. I bet it did. Do you want to give us, like, a really quick, 30-second synopsis of what you just presented on stage?
NIELS: Sure. So at Google, I'm responsible for security and privacy engineering.
MARK: Yep.
NIELS: Google has, you know, spent many, many years creating a very, very secure platform, and so for GCP, customers are wondering, you know, "What does that mean for us?" So during the talk, I essentially said, "You know, trust and transparency is very important to us. Let me explain to you how we have built Google's infrastructure to be secure, and then relate to you what that means, you know, as a customer for running on top of GCP. And so essentially, we started from the bottom. You know, trusted hardware, trusted boot. You know, triple graphic identities for our jobs. DDOS protection. You know, un-phishable user identities with, you know, hardware second factor, and then gave some examples of how customers can leverage that on top of Google Cloud Platform. For example, storage encryption happens by default.
MARK: Yep.
NIELS: For Google App Engine, we give you our cloud security scanner to find vulnerabilities, such as XXS or mixed content, mixed pinning. It talked a little bit about our efforts to secure the TLS certificate infrastructure with certificate transparency, where we have worked for years to create a model where all issued certificates can be verified in the properly-available lock, instead of just, you know, ramming people through, you know, the security stance they get for running on GCP--and some of the things that we are thinking of giving them in the future. So for example, we are working on a key management system and those kinds of things.
FRANCESC: Very cool. That sounds like a lot of information, so if anyone is more interested, the keynote was recorded, and you should definitely check that--the video. I was actually checking it out while we were here. It was a very good presentation. Congratulations on that. t here's a specific topic that we get a question quite often, which is DDOS.
NIELS: Right.
FRANCESC: Can you tell a bit more--where is the--that data's protection coming and taking place for Google Cloud Platform?
NIELS: So when you run on our platform, you essentially benefit from our serving infrastructure--the network. If you, let's say, enable a GPS load balancing, that gets served via an infrastructure that has DDOS protection builder.
FRANCESC: Cool.
NIELS: And actually, during the talk, I, you know, got to share a little bit that we have extended that protection also. So news and human rights organization, election monitoring sites, which, you know, seems like a timely topic.
MARK: Yeah.
FRANCESC: That was very cool, and I heard the audience clapping to that. Yeah.
NIELS: They did. I had not--I had not expected that, to be honest.
FRANCESC: That was very cool.
MARK: And just so we're clear too, because this is something I'm interested in. Is it specifically HTPS, or do you have the same protection on, like, HTTP and--
NIELS: Well, so the load balancer, you know, does HTTP and HTTPS, but you know, to be perfectly honest, look, you know, if you're running on the Internet these days, you'd better protect yourself with TLS. Right? I mean, Google has been pushing to, you know, encrypt all of our traffic. We have just made the transparency report available last year--last week. It sort of tracks our progress, and there's no excuse for anybody putting a website on the Internet not to use encryption.
MARK: Yeah, yeah. yeah. Definitely.
FRANCESC: Coming from a responsible--for the security for Google Cloud Platform--sounds pretty normal.
MARK: Very good.
NIELS: Yeah. That's great.
MARK: Thank you so much for coming and talking to us.
FRANCESC: Yeah. Thanks so much for the good time.
MARK: Perfect.
NIELS: Pleasure. Looking forward to it. Bye.
MARK: Thank you. We've been joined by two speakers here at our table, James Malone and Francis Perry. Thank you very much for joining us.
FRANCES: Thank you.
JAMES: It's nice to be here.
MARK: How are you both doing today?
JAMES: Awesome.
MARK: Yeah?
FRANCES: Yeah. Doing well, enjoying meeting people.
MARK: Wonderful. So I know you were speaking about some interesting stuff here at GCPNExt. Do you want to give us a little, brief overview of what it is you're talking about?
JAMES: Absolutely. So we gave a talk yesterday that was focused on creating what we call next generation data processing, where people don't have to fight with infrastructure They don't have to worry about using the multiple tools to do batch and stream processing, and they can trust that their data pipelines are gonna be portable, both on GCP or between clouds or on cloud and on premise. Yeah.
FRANCES: Yeah. We started with a little history of mapreduce and sort of how that new programming paradigm really changed the way that we do data processing, and then, we talked about how that diverges a little bit. So inside Google, after that mapreduce paper was published, we continued innovating. We had a lot of new ideas that we kept doing, but it was this really homogenous environment, right? Within Google, we just have a few file formats, a few language, and some very standardized tooling. So we really went deep on the right way to do data processing, but we were able to go very deep because we were very homogenous, whereas externally, the ecosystem looks very different. They took the mapreduce paper, implemented it, and do--and then, this whole ecosystem flourished with all these diverse ideas. And now, we've got basically two products at Google Cloud Platform to build on that legacy.
JAMES: Google Cloud Data Product, which is a managed Spark and [inaudible] offering.
FRANCES: And then, Google Cloud Data Flow, which is our basically next generation way for writing programs. It's really gonna combine batch and streaming into one API.
FRANCESC: Very cool. I've got to say that Google Cloud Data Flow is one of my favorite products, to the point that--
FRANCES: Mine too.
FRANCESC: I will write Java for it. I can never write Java.
FRANCES: Yes.
FRANCESC: And so far, the only language that they support is Java, so I actually write.
FRANCES: You need to read your blogs, my friend.
FRANCESC: Oh, my God.
FRANCES: Yesterday, we announced Python alpha support for batch.
FRANCESC: That is awesome.
FRANCES: So the Python SDK is out there, because we do all the development in open source. So it's out there on GetHub, and now, we have an alpha program for service support to run it on cloud data flow on the fully managed service.
FRANCESC: I know a lot of people that will be very happy about that
FRANCES: Yeah.
FRANCESC: Yes. Very cool.
MARK: you will be one of them.
FRANCESC: I will be one of them. I prefer Python. It's still not gold, but it's better than Java for me. Yeah. That is awesome.
FRANCES: Well, what we're really excited about--when we donated the data flow model and these first two SDKs that we developed to the Apache Software Foundation as this new incubating project, Apache Beam--the real goal behind that is to put the framework out there, the programming model, and then the documentation that will allow other developers who like other languages--Go or Scala or Ruby or--basically, let people add to this community, and add new languages, and also new runners. If you've got a different distributive processing back end that you're a fan of, you can run Beam Pythons on that. Right? Add that capability into the--into the system.
FRANCESC: Very nice.
MARK: so you're able to sort of leverage that wider community to help build upon that platform.
FRANCES: Right, right.
FRANCESC: Very cool. Could we know a little bit more about the other side of the big data? Not only cloud data flow, but data--
JAMES: Like data product?
FRANCESC: I was gonna say data product. Yeah.
JAMES: Yeah. All right.
FRANCESC: I always mix data product and data labs, for some reason. Data product.
JAMES: Why would you mix--why would you mix product names that have data all in them?
MARK: I know. That's just crazy.
JAMES: You're obviously not reading your Google-supplied flash cards.
FRANCESC: No.
JAMES: So yeah. Cloud Data product is--it's built around a different set of open source tools. So in our talk yesterday, and Frances just mentioned this, the mapreduce paper kind of set off two parallel streams, and one at Google ultimately led to cloud Data Flow, and another was the open source community took the mapreduce paper and created just a whole ecosystem around it. So they created Apache Hidoop, Apache Spark, PegHive. There's probably 30 or 40 different logos, and Cloud Data Product is designed to allow people to take advantage of that open source ecosystem, but it combines that open source ecosystem with Google Cloud Platform. So instead of--I'm looking at your mixer, and there's, like, only a few knobs on that, and an open source product usually has a couple hundred knobs apiece, and Cloud Data Product is designed to help people take advantage of that stuff without having to be an expert and buy a ton of books and know exactly which memory settings to do and all that fun stuff.
MARK: So I can pretty much go to it and be like, "Okay. It's gonna give me some best practices and some boxes to explain what certain things are," and then I can be like, "Boop, boop, boop," and then--yeah, and then there we go.
JAMES: Yes. You can--you can go and create the--
FRANCESC: I think it makes that noise too.
MARK: Yeah--boop, boop, boop?
JAMES: Yeah. So yeah. You can go and create a cluster of, like, 100 computers all tied together and do some awesomely parallel data processing on them.
FRANCESC: That is awesome.
JAMES: Yeah.
FRANCESC: Well, thank you so much for taking the time to talk to us today.
MARK: Yeah. That was really, really interesting.
FRANCES: Absolutely. Thank you.
FRANCESC: See you later.
JAMES: Thank you.
MARK: Thanks. Coming right off the stage, we have Julia Ferraioli joining us here at the table. Julia, how are you doing today?
JULIA: I'm well. How are you, Mark?
MARK: I'm very well. Francesc, how are you doing?
FRANCESC: I am great. I'm actually--I'm actually very happy that Julia's here, because since we are here on the floor, we are not watching the talks, and everyone that I heard that went to your talk was very excited about it, and they said it was amazing. Tell us a little bit about it. What did you talk about?
JULIA: Well, so yesterday at the keynote, Jeff Dean announced one of our new platforms, which is our machine learning platform--cloud machine learning, and so my session dove into a little bit of the details surrounding, you know, what machine learning can do, what kind of problems it can solve, and how does it do that.
MARK: So I believe--well, one of the problems you were looking at solving was something to do with hugs.
JULIA: Yeah. Well, you know, sometimes I like a sanity check here and there, telling me if I should actually hug something or not. Speaking--you know, I'm somebody who accidentally hugged a cactus once. So I'm intimately familiar with things that you shouldn't hug. So what we were really trying to do is do an image classification problem. Now, the vision API, which is a part of Google's machine learning platform, does things like identify what is in an image. But what it can't do is tell you if you should hug it.
MARK: Right.
JULIA: Naturally.
MARK: Naturally. And that's a common problem I have as well. I understand completely.
FRANCESC: Yeah. Huggability is a very important feature.
JULIA: Right. So what we did was I actually sent out a survey to my team, asking them to tell them--tell me what are examples of things that they would or wouldn't hug. I got some really interesting answers back. So I went out, and I found example images of each of those things. I took about 160 images of things that people said that they would hug, and 160 that they wouldn't hug, and used those to train a classifier that we can use on any image to give us some information about whether or not it's a good idea to hug that object.
MARK:So I'm curious. What results did you get at the end of it that were either more interesting or surprising, that you may not have been expecting?
JULIA: Well, okay. So I trained the classifier over things like puppies, kittens. You know, the usual suspects. Clouds, dandelions, and pillows. So these were things that people said that they would hug, and it was really important to get things that were organic and inorganic. Right? So that you get, like, a nice spectrum. In the not-hug category, we got things like sharks' teeth, broken glass, puffer fish. Stuff like that. Right?
FRANCESC: Makes sense.
JULIA: So I did two tests. I uploaded a picture of an octopus from an aquarium. Now, my classifier said, "No. Don't hug that." That--you know, maybe--somebody said, "E--too many hugs," as an error. Didn't actually get that, but you know, months to the same thing. But when I uploaded a picture of an octopus that somebody had crocheted--so like, a stuffed animal octopus--that, like, got a really nice score saying, "Yeah. You should hug that."
MARK: You should touch--
JULIA: And I just thought that was absolutely fascinating. Right? Because it's taking, at a high level, the same subject, but with a different implementation, and it's able to differentiate between those two. I thought that was amazing, so--
MARK: It's pretty cool.
FRANCESC: Very cool. So a neural network modeling the huggability of stuff. That is--that is amazing.
JULIA: I don't believe it's been done before. I think this might be new.
FRANCESC: I'm pretty sure it is. Like, I never heard about someone who was like, "Yeah. How huggable are things?" That's amazing. Yeah.
JULIA: Yeah, yeah. It's pretty cool.
FRANCESC: Very cool. So yes. We announced a lot of things about machine learning yesterday. But what was your favorite announcement, other than machine learning, of course?
JULIA: Oh, my favorite announcement.
FRANCESC: Yeah.
JULIA: Well, you know, since I started working on cloud, I've always been enamored with BigQuery. The first time I heard the architecture described to me, I was like, "Wow. This is A, completely unintuitive to me. I would've never thought of this. So of course I love it. And B, it just makes so much sense, and it's something that really takes the power of what we're doing at Google and delivers it to everybody else. So they made some really cool announcements on price cuts and architecture with how BigQuery actually works yesterday, and I'm not an expert, so I can't tell--I can't diagram it out for you in any way. This is a podcast, so you couldn’t see it anyway.
MARK: Yeah.
JULIA: But I think those might be my other favorite of Next.
FRANCESC: Very cool.
JULIA: Yeah.
FRANCESC: Well, thank you so much, Julia, for being here, taking the time to talk to us today.
MARK: Thank you so much.
FRANCESC: And looking forward to the--towards that video.
JULIA: Me too. Thank you.
MARK: Wonderful. Cheers.
FRANCESC: Thank you.
JULIA: Bye.
FRANCESC: So we're here with Neil Palmer and Todd Ricker from FIS Global, and they just came out of giving an amazing talk. So we wanted to interview a little bit, know a little bit how to--how--who you are first.
MARK: Yeah.
FRANCESC: So why don't you go first, Neil?
NEIL: Sure. FIS is the world's largest financial services technology firm. We provide software for everything from online banking to ATMs through to asset management, risk surveillance for the big banks. My world's a little bit different. We run an incubator group, where we look at emerging technologies and figure out what they're gonna mean for our business.
FRANCESC: Very cool. Well, how about you?
TODD: Yeah. I work very closely with Neil day to day, and I'm a Java developer, Scala developer on the side. Cloud--cloud computing, you name it.
FRANCESC: Very nice. Can you tell us a little bit how you use the cloud?
NEIL: So we were just up there, talking about our bid for the consolidated audit trail. This is the next generation stock market reconstruction system that the SEC is looking to put together. One of the issues with the current stock market and the regulatory systems is there's a lot of them. It's very disparate. It's kind of hard for people to know what happens when something goes wrong in the stock markets. So this next system, the goal is to be able to do that. 
FRANCESC: Very interesting. So you'll be able to actually not only follow the market, but actually understand what goes on?
NEIL: Yeah. So there was a--there was what's called the flash crash back in 2010, where several trillion dollars were wiped off the U.S. markets, and then--
FRANCESC: Nothing serious.
NEIL: Nothing serious. And then, it vanished, and then mysteriously reappeared, which, you know--I have trouble when that's 20 bucks out of my wallet, let alone several trillion dollars. And so this--you know, there are still arguments happening today, six years later, about what actually happened. And that's just--it's not a good thing for the well-ordered functioning of our society.
MARK: And are you looking basically to leverage the power of the cloud and, like, certain aspects--maybe computers, maybe machine learning, other things that you can expand that sort of power of computation for it?
NEIL: Right. So we've been partnered with Google from the get-go.
MARK: Yeah.
NEIL: So we're pretty much using every piece of GCP. We were just announcing the results of our new load test. We processed 25 billion fix messages in about 50 minutes, end-to-end.
FRANCESC: Nice.
MARK: Wow.
NEIL: We hit peak of about--reads 38 gigs a second, writes about 22 gigs a second going through So it's pretty smoking.
FRANCESC: That is pretty amazing.
MARK: Yeah. And I assume that's what you were talking about in your session today?
NEIL: That's right. That's right. And so really, it's all prototype to say, you know, "We can handle the level of data you're talking about." You're talking about the entire U.S. market has to be analyzed in four hours on a daily basis, and so it's not--it's not insignificant
FRANCESC: Very, very cool. So since we're here at GCPNExt, I'm assuming you had a look at the--all the announcements, the keynotes--what was your favorite part? What is the announcement that you--got you the most excited?
TODD: Well, I demoed, you know, some visualization tools, and I think there was--there was one they showed in the keynote. I don't remember the name. But it was a pretty brilliant visualization tool for BigQuery, and I'm definitely gonna check that out.
FRANCESC: Very cool. What about you, Neil?
NEIL: I've been running--some of the security conversations are very important to me, and so some of the talks from Niels Provos were great. You know, I think--I think I'm looking forward to not just sort of the ongoing security conversation with GCP, but you know, in an ideal world, you know, all I want for Christmas is you guys to sort of expose your tool chain around releasing applications in GCP. That would be awesome. It happens already with App Engine. But it'd be kind of cool if some of that stuff was available for wider use.
TODD: Yeah. And Eric Schmidt's, you know, vision of the future for app development was interesting, so we'll see.
FRANCESC: Yeah. Eric Schmidt, when he was talking about Google Free, first of all--
TODD: Yeah
FRANCESC: Yeah. That is very interesting.
TODD: So time will tell. It'll be fun to watch.
MARK: Definitely gonna think there's some good stuff on the horizon. So it sounds like you use a variety of Google Cloud Platform tools at the moment. If you had to pick one that was your favorite, which one would you pick?
NEIL: Well, if we don't say BigTable, Carter will kill us. But--so we love BigTable, and we love data flow.
MARK: Oh, nice.
NEIL: We love data flow, because we went from, you know, a year ago, the initial prototype used the [inaudible] native Hadoop distribution, which was fine. It was great. But the data flow stuff just makes life so much easier. The auto scaling is a thing of joy to behold.
TODD: Yeah.
NEIL: And so we love that one. What else do we have?
TODD: Yeah. No. I agree. Data flow all the way. That's--you know, in this platform, that's how we express ourselves. You know? So--
FRANCESC: Very nice. Yeah, and anyway, BigTable plus data flow--yeah. That's a great team.
NEIL: You know, and we built this stuff. It's not like we've got a team of thousands of developers out there. Right? We built--we built App--was essentially a month with a team of about six people. 
MARK: Wow.
FRANCESC: That's amazing.
TODD: Yeah.
NEIL: All right? So--
FRANCESC: Very cool.
NEIL: All right.
FRANCESC: Well, thank you so much for taking the time to come here to talk to us.
NEIL: Anytime. Our pleasure.
TODD: Thank you.
MARK: Appreciate it.
FRANCESC: Well, thanks again to all of those speakers that took the time to go by the Google Cloud Platform Podcast booth at GCPNext.
MARK: Yeah. Well, that was--
FRANCESC: That's a mouthful. Thanks for taking the time to go by, talk to us, and tell us a little bit about what they were talking and what they thought about the conference.
MARK: Yeah.
FRANCESC: One of the people that came, talked to us, was not a speaker. 
MARK: Yeah.
FRANCESC: He was actually asking a question, and we decided that could be a great question of the week.
MARK: Yeah.
FRANCESC: So let's hear it.
MARK: Yeah. Sounds good.
FRANCESC: So we're here with Roman Irani, and he actually came to ask some good questions, and we decided that maybe this could be the question of the week.
MARK: Excellent.
FRANCESC: So hi, Roman.
ROMIN: Hi.
FRANCESC: Go for it. What is your question?
ROMIN: Yeah. So my question is about using Go on App Engine, and you know, in previous--I've been using App Engine with Java and other languages, and there's always been this restriction that you can't use certain libraries in App Engine as a, you know, a fixed programming module.
FRANCESC: Yeah.
ROMIN: So when it comes to Go, are there any restrictions for Go on App Engine, or what would be certain scenarios in which Go on App Engine is probably preferred, compared to Go on maybe a computer engine directly?
FRANCESC: Okay. That's a very good question. So to answer the first part of the question, which is, "What restrictions to we have on Go for App Engine?" They're pretty much the same restrictions that you could find for Java on App Engine, meaning that every request has to be answered in less than 60 seconds. You cannot write to the file system directly, and you cannot have binary libraries, basically. It's--you can only run Go, and actually, on top of that, you cannot use the unsafe package, because the unsafe package is not really safe, hence the name
MARK: There's also so limitations in which--which is pretty similar again, in terms of, like, if you want to make HTTP requests. You have to use the URL fetch library.
FRANCESC: Yeah.
MARK: And there's some other stuff like that, but I'm trying to remember, so--
FRANCESC: But the URL--the URL library, actually--the URL fetch library also provides an HTTP client, if you need to. So it integrates quite well with existing libraries if you need to.
MARK: Yes.
FRANCESC: So for the second part of the question, which is when we're gonna use Go on App Engine or on Compute Engine, what I can say is if you're doing web server stuff, I would always go with App Engine. And that's mainly because you're getting all the scaling and zero management for free. Like, you're getting that automatically, which is really cool. And if you have something which is really similar to web server, but you need something specific that is a limit--like, for instance, you need to use, I don't know, regular expressions, and regular expressions--you want a specific version, written in C, which is something that we have. Then, you will need to move to manage VMs, for instance. So you still have the--that scalability and the close-to-zero management, but you're--but you're now using C or the file system or whatever you need, and otherwise, yeah. Compute Engine--that could do it when it's not really a web server. Like, if it's a worker doing something like heavy processing, and it takes a long time, and it's communicating through a pop up--stuff like that.
MARK: Even then, you could do that with Manage VMs.
FRANCESC: Even then, you could do it with Manage VMs. Yeah, if you really needed to. So far, when I--what I do is I start with App Engine by default, and if I cannot really do it on App Engine, but it's really, really close--it's, like, a small thing, then I consider Manage VMs. Otherwise, if it doesn't really match, I will start with Compute Engine, but really quick, I'll move to Container Engine, because it's so much easier to manage.
MARK: I will agree with that.
ROMIN: So can I just follow up with a slight question?
FRANCESC: Yeah. Go for it.
ROMIN: What about competency stuff on Go?
MARK: So--
ROMIN: If you try to run those things on App Engine, how does it work?
MARK: There is some limitations on App Engine. There is a single thread for running Go routines on App Engine, and that's, like, just the one. Generally speaking, like, from my experience, it's never really been a huge issue, especially for web stuff. Like, it's not like you're gonna be doing that much stuff. If you needed to expand upon that, then yes. Start looking to go further down that abstraction pathway to go to Manage VMs.
FRANCESC: Yeah. I could say that the biggest restriction is that you can only run one thread. But that doesn't mean you can only run one Go routine. You can run as many Go routines as you need.
MARK: Absolutely.
FRANCESC: Important thing is that all the Go routines will be stopped when the HTTP handler finishes. So you cannot have one Go routine that is started by the handler and keeps on running for one hour. That's not something that we allow.
MARK: Yeah. But then, you'd just use task queues.
FRANCESC: Yeah Then you can use task queues, and then, in task queues, again, you can use as many Go routines as you want. So yeah.
ROMIN: Cool. Thank you.
FRANCESC: Thank you so much.
MARK: Thanks for joining us. Thanks to Roman Irani for coming by the booth and asking such an interesting question. We got to have a really good chat about it, so--
FRANCESC: And Go-related.
MARK: It was Go-related. So that makes--that makes Francesc very, very happy. Excellent. So I know is that as of this podcast recording, I will be at Strata. I'll be helping running the code labs there. So if you're listening to the podcast and at that event, please, swing by and say hello. I would love to say hi. I'll be wearing my Google Cloud Platform Podcast tee shirt, too.
FRANCESC: Oh, yeah. But if you're a listener, we actually now have tee shirts out. Maybe if you find us at some event, we'll be able to provide you with some.
MARK: Yeah. Limited edition.
FRANCESC: They’re local. Limited edition. Totally. Yeah.
MARK: Are you gonna be anywhere special anytime soon?
FRANCESC: Not really. I'm going--I'm gonna go to DevRelCon, which is a conference for Dev Rellers--Developer Relations Engineers in San Francisco.
MARK: Oh, cool. Nice.
FRANCESC: So I'm--so that's gonna be, like, five minutes walking. I like those trips.
MARK: That sounds good. Let me know how that goes.
FRANCESC: Yep. It's gonna be fun.
MARK: Awesome. And all that's great. Well, if people want to get in contact with us, where can they go, Francesc?
FRANCESC: Oh, I know those. So we are on Twitter We're pretty active on Twitter. So it's GCPPodcast. We are also on Google Plus at PlusGCPPodcast.
MARK: Yep.
FRANCESC: We are also on Reddit, on the subreddit r/GCPPodcast. We are also--we have a web page. Yeah. GCPPodcast.com.
MARK: Yep.
FRANCESC: And an e-mail, hello@GCPPodcast.com
MARK: Yep.
FRANCESC: And I think I'm not forgetting any.
MARK: No. You are. Slack.
FRANCESC: Oh, yeah. We're also on slack.
MARK: On the GCP--on the GCP--yeah. On the GCPcommunity Slack, we're at #podcast. 
FRANCESC: And what is the URL to access that?
MARK: If people want to join Slack, the URL is bit.ly/gcp-slack. That's the inviter that they can go in on, and they'll be able to connect from there. 
FRANCESC: Awesome. And yeah, we've actually been receiving more e-mails recently. We're very happy about that. We're gonna be answering some of the questions of the week that you sent us in next episodes. Don't worry about that.
MARK: Definitely. Well, thank you very much for joining me, Francesc.
FRANCESC: Thank you very much for joining me today and joining me for GCPNext. That was an awesome experience.
MARK: It was absolutely fantastic, and I'll see you next week.
FRANCESC: See you.
{{< /transcript >}}