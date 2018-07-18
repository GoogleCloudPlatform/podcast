+++
audioDuration = "00:38:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.125.mp3"
audioSize = 5547375
categories = ["Open Source", "Cloud Native", "CNCF", "Kubernetes"]
date = "2018-05-02"
description = "Mark and Melanie are joined by Sarah Novotny, Head of Open Source Strategy for GCP, to talk all about Open Source, the Cloud Native Compute Foundation & their relationships to Google Cloud Platform."
draft = false
episodeNumber = 125
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Open Source at Google Cloud Platform with Sarah Novotny"
#image="/images/post/Don't_Panic.svg.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/X1Bd8oAMXZ9"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8giifl/episode_125_open_source_at_google_cloud_platform/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) are joined by
[Sarah Novotny](https://twitter.com/sarahnovotny), Head of Open Source Strategy for Google Cloud Platform, to
talk all about Open Source, the Cloud Native Compute Foundation and their relationships to Google Cloud Platform.

<!--more-->

##### Sarah Novotny

[Sarah Novotny](https://twitter.com/sarahnovotny) leads an Open Source Strategy group for Google Cloud Platform.  She has long been an Open Source community champion in communities such as Kubernetes, NGINX and MySQL and ran large scale technology infrastructures at Amazon before web-scale had a name.  In 2001, she co-founded Blue Gecko, which was sold to DatAvail in 2012.  She is a program chair emeritus for O’Reilly Media’s OSCON.

##### Cool things of the week

- Now live in Tokyo: using TensorFlow to predict taxi demand [blog](https://cloud.google.com/blog/big-data/2018/04/now-live-in-tokyo-using-tensorflow-to-predict-taxi-demand)
- Kubernetes best practices: Organizing with Namespaces [blog](https://cloudplatform.googleblog.com/2018/04/Kubernetes-best-practices-Organizing-with-Namespaces.html) [youtube](https://www.youtube.com/watch?v=xpnZX3if9Tc)
- Announcing Open Images V4 and the ECCV 2018 Open Images Challenge [blog](https://research.googleblog.com/2018/04/announcing-open-images-v4-and-eccv-2018.html) [dataset](https://storage.googleapis.com/openimages/web/index.html) [challenge](https://storage.googleapis.com/openimages/web/challenge.html)  
- Introducing Kubernetes Service Catalog and Google Cloud Platform Service Broker: find and connect services to your cloud-native apps [blog](https://cloudplatform.googleblog.com/2018/04/Introducing-Kubernetes-Catalog-and-GCP-Open-Service-Broker.html) [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/add-on/service-broker)
- Julia Evans - zines [store](https://gumroad.com/b0rk)

##### Interview

- Kubernetes [site](https://kubernetes.io)
- Node.js Foundation [board of directors](https://foundation.nodejs.org/about/leadership)
- Tensorflow [site](https://www.tensorflow.org)
- gRPC [site](https://grpc.io)
- Apache Beam [site](https://beam.apache.org)
- Google Kubernetes Engine [site](http://cloud.google.com/gke)
- Forseti [site](https://forsetisecurity.org) [podcast](https://www.gcppodcast.com/post/episode-120-forseti-with-nenad-stojanovski-and-andrew-hoying/)
- Cloud Native Compute Foundation [site](https://www.cncf.io)
- Cloud Native Computing Foundation Announces Kubernetes® as First Graduated Project [blog](https://www.cncf.io/announcement/2018/03/06/cloud-native-computing-foundation-announces-kubernetes-first-graduated-project/)
- NTP's Fate Hinges On 'Father Time' [article](https://www.informationweek.com/it-life/ntps-fate-hinges-on-father-time/d/d-id/1319432?)
- Open Container Initiative [site](https://www.opencontainers.org)
- Fireside chat: building on and contributing to Google’s open source projects [Google I/O](https://events.google.com/io/schedule/?section=may-8&sid=714f7e53-ee74-4918-bc28-cb6423acfccc)

##### Question of the week

Mark broke SSH access to his Compute Engine instance by accidentally removing the GCP linux guest environment. How did he fix it?

- Installing the Linux Guest Environment via Clone Root Disk & Use Startup Script [docs](https://cloud.google.com/compute/docs/instances/linux-guest-environment#startup_script)

##### Where can you find us next?

Mark can be found streaming [Agones](https://agones.dev) development on [Twitch](https://twitch.tv/markmandel) and
finished his [blog series on scaling game servers on Kubernetes](https://www.compoundtheory.com/scaling-dedicated-game-servers-with-kubernetes-part-4-scaling-down/).

Melanie will be speaking at the [internet2 Global Summit](https://meetings.internet2.edu/2018-global-summit/), May 9th in San Diego,
and will also be talking at the [Understand Risk Forum](https://understandrisk.org/event/ur2018/) on May 17th, in Mexico City.

{{< transcript "MARK: Hi, and welcome to episode number 125 of the weekly \"Google Cloud Platform Podcast.\" I'm Mark Mandel and I'm here with my colleague, as always, Melanie Warrick. How are you doing today, Melanie?" >}}

MELANIE: Good. How are you doing? 

MARK: I'm doing all right. 

MELANIE: Good. 

MARK: Doing all right. 

MELANIE: So who are we talking to this week, Mark? We are talking to one of her good friends, Sarah Novotny, who is the head of open source strategy here at Google Cloud Platform. 

MELANIE: Yes. It was a fun conversation talking about open source and how we approach it from Google's perspective. So that was great. And getting into C and-- C-- 

MARK: CNFC? 

MELANIE: Thank you. CNFC. 

MARK: [LAUGHS] Excellent. And we're going to continue on with cool things of the week, and then finally have a question of the week. I did something stupid this week, and then I fixed it. 

MELANIE: You did. So we're going to talk about how did Mark break the SSH access to his Compute Engine Instance, accidentally removing the GCP Linux guest environment, and how he fixed it. 

MARK: Yep. 'Cause I'm silly. 

MELANIE: But before that, as always, one of the cool things of the week is that one of our fellow developer advocates, Kaz Sato-- he wrote about how it's now live in Tokyo that they are using TensorFlow to predict taxi demand. 

MARK: Yeah. This is really cool. They have a live deep learning model for TensorFlow to predict how many possible riders could be waiting in a particular block in the next 30 minutes. And apparently it's like 93% to 95% accuracy, which is kind of nuts. 

MELANIE: Right. I know. They said NTT DoCoMo collected about 60 million subscribers' location information, and then they anonymised it, and they've been using that in conjunction with multi-variable auto-regression model and deep learning to help build this model, in essence. And so they've listed this out in the actual post, how they did this, what services they used, how they built the model. And you should check it out. 

MARK: Awesome. 

MELANIE: All right. Mark, anything from the Kubernetes side of the world? 

MARK: There there's always stuff in the Kubernetes side of the world. Definitely wants to highlight the series that Sandeep Dinesh, one of our team members, has been running with Kubernetes best practices. He has a new post out called "Organizing with Namespaces" and accompanying YouTube video basically talking about what namespaces are, how you could use them, and why you might want to use them inside your Kubernetes clusters. 

MELANIE: Yes. It's a good series that he's doing. And namespacing is always very valuable. So you should also check that blog post out as well. 

MARK: Yep. 

MELANIE: Another thing we wanted to mention was that there's this new contest, this image detection contest that is out there and data set that's been made available. And Google Research, in particular, is behind this. They have a post out-- and we'll, of course, include the link-- where they're announcing what's known as "Open Images V4." It's containing 15 million bounding boxes for 600 categories and 1.9 million images. So this is the largest existing data set with object location annotations, and there's more variety in the categories. 

So there's an actual contest behind this. We'll include that link as well. And they've got the training set that that's already available, but the test set will be available July 1st by Kaggle. And the challenge is unique because there's about 12.2 million bounding box annotations for 500 categories. So check it out. 

MARK: Oo, there's a prize money. 

[CASH REGISTER DING] 

The challenge has a total prize fund of USD $5,000 sponsored by Google. 

MELANIE: Yes. That's right. And apparently the results will be determined by September. So you've got a period of time to play around with the data set, and/or use it for any additional research that you're working on. 

MARK: Nice. Coming back to Kubernetes-- because what else do I do with my time? There's a new thing that came out recently here at GCP. So we're introducing the Kubernetes service catalog and Google Cloud Platform service broker. The fancy title is "Find and Connect Services to your Cloud Native Apps." 

This is kind of a little cute and interesting project that's part open-source and part GCP. Basically it makes things easier for you to connect your cloud native applications-- so your applications that run on Kubernetes-- to other services, in this case particularly GCP services. 

So if you want to configure, like, IM and then be like, hey, I want this to be able to connect to Pub/Sub or Cloud SQL or something like that, this is just a really nice way of being able to have a UI interface and then being able to be like, hey, I need to install this thing, and it sets all the pieces up for you so that you're ready to go. So that's quite handy. It's a handy little thing. 

MELANIE: It is very handy. We're actually going to give one other cool thing of the week a shout-out-- to Julia Evans-- 

MARK: Yes. 

MELANIE: --who is known as b0rk on Twitter. She's done a number of zines. And this one that she's got out recently is labeled bite size Linux, and she gets into how you can think about Linux, and what system calls are, and what file descriptor is. I've seen her speak. I've seen her content. She's wonderful at helping to break things down and make them easy to consume. So you should check those out. We'll keep a link as always in the show notes. 

MARK: I actually have her Linux debugging tools zine. It's attached to my wall next to my computer at work here. 

MELANIE: Nice. 

MARK: Yeah. It's really good. Awesome. Well, why don't we go have a chat with Sarah? 

MELANIE: Sounds good. 

MARK: I'm particularly excited today. This has been a long time coming, and a lot of work to make happen. But I'm really, really happy to have the very busy Sarah Novotny joining us today. How you doing today, Sarah? 

SARAH: I'm doing well. I'm actually thrilled to be here. And I'm very apologetic that it took so long. 

MARK: [LAUGHS] That's OK. We know you are a very important person. 

SARAH: Eh, yeah. But busy is not supposed to be a cultural norm for me. 

MARK: [LAUGHS] That's all right. So Sarah is the head of open-source strategy at Google Cloud Platform. We want to talk to you today about open-source at Google Cloud. But before we do that, as per usual, who are you? What do you do? What's your history here at Google? 

SARAH: And why am I here? 

[LAUGHING] 

Existential questions. 

MARK: I can think of so many reasons. 

MELANIE: 42. 

SARAH: Absolutely. See? We're done. 

So I'm Sarah Novotny and, as Mark said, I lead the open-source strategy group for Google Cloud Platform. And I arrived here at Google via a fairly circuitous route of systems administration, database administration, and a number of websites, open-source projects that you've heard of. So Amazon, NGINX, a video-gaming company you've never heard of but you may have heard of the game "Hawken." And then, of course, some time at Chef and running my own business, working on MySQL. 

So my first open-source project was really MySQL, my first love. I did a podcast for more than a year about MySQL. 

MELANIE: Yes. And I'm sure you could teach us a few things in terms of podcasts and what it was like to be doing all that. 

SARAH: I think you guys do a lovely job. I don't know that I can up the game here. 

MARK: [LAUGHS] Thank you so much. 

MELANIE: I know. Thank you. 

SARAH: Flattery. Flattery. Yes. 

MARK: Indeed. 

MELANIE: We'll take that. 

MARK: So, yeah. You're the head of open-source strategy at Google Cloud Platform. What does that mean? What do you do with your time? [CHUCKLING] 

SARAH: So let me tell you a little bit about the how I got here, inside Google. Because that leads into the story of what does this group do. Because this is a new group. So I was hired into Google to embed myself in the Kubernetes community and turn it from being a company-led project to a community-led project. 

We knew that we needed to have-- as the player in cloud, we needed to have a way to change the portable workload unit story for cloud. It couldn't be VMs. It couldn't be Java, JAR files. We wanted to move this along with the work that we had done here at Google with containers. And containers have been the backbone of Google's workloads for 15 years. And we did a lot of that work in open source in Linux early on, and brought it out to the world and made that possible. 

But we needed to really change the story. Because the story was very much about VMs and cloud at that point. And so Google made this huge investment in Kubernetes and built a team. And the strategic goal was to change how the industry talked about portable workload units. And we needed to do that in a way that allowed Kubernetes to be ubiquitous. That was the first goal, is we needed Kubernetes to be everywhere. We needed containers to be everywhere. 

And in order to do that you have to build a huge community, and open-source seemed a really obvious way to do that. It's a much easier way than a single product, because you get a lot of people's input. You get a lot of engagement. You get other people advocating for you and with you. But you also can't then have one company leading it. And so I was brought in to help make that transition. 

And then that turned into sort of, oh, and I'm doing an open-source project. Can you help me with my community? And, oh, I'm doing an open-source project. And then we open-sourced TensorFlow, and we had different strategic goals which then meant, how do we deal with a community that has different strategic goals? 

And what-- and, I mean, we've done open-source for years. There's lots and lots of open-source work that Google has done, going back to the inception of the company. But it was usually, early on, a scratch-your-own-itch and then upstream it. Make sure that we are being good citizens, being good open-source citizens. And then there was, of course, Chrome and Android which were open-source projects, but they were very company-led. And the communities were much more about ecosystems and applications, and the adoption, and ways to extend the particular project. 

But Kubernetes had to be different. And so we've seen all these different strategies, and now we're collecting a group for Google Cloud Platform that sits-- embeds in communities that are either first-party communities-- communities that Google has built and wants to continue to grow-- or third-party communities like Node.js. I have recently joined the Node.js foundation board in order to help that project become more appealing to enterprises, grow through sort of the early-adopter phase, cross the chasm, and get into the enterprise-adoption phase, and grow as a project, make themselves more long-term sustainable. 

So my team covers a whole pile of projects. TensorFlow, Kubernetes, gRPC, Istio, Apache Beam. I know I'm forgetting something. 

MARK: Do you do open-census? 

SARAH: Actually, we don't yet, but we have consulted with them. Which leads to the next thing, because you were going to ask me-- what does a day look like in this? It's actually a lot of meetings, sadly. A lot of foundation meetings. A lot of internal meetings, finding new projects that people are building and finding what their strategic goals are for them. So trying to make sure we understand-- or, like, you consulting me about your gaming project. 

MARK: I was just thinking about that. [LAUGHS] 

SARAH: Yeah. That looked like that. How do we achieve the goals that we have for this project? Is the project a interesting way to showcase GCP? OK. That's one reason we might have it. Is it an interesting way to get into a community or an academic space and get to know all the players in that space? Are we trying to recruit with it? Are we trying to make talent more portable as well? Are we trying to make workloads more portable? 

So we look at what the strategies are, and then we try to build communities that work to engage with those strategies and deliver good economic benefit for Google. Because while open-source is awesome and altruism is great, we still are a business and I still pay rent. So I would like to have the business be successful. 

MELANIE: When I was working on open-source the common question-- like, everyone who would meet me would be like, well, how do you guys make money? You know? Not that that's my question here-- 

[LAUGHTER] 

SARAH: I was going to say, I can answer that for some of them. 

MELANIE: Actually, yeah. Sure. How do some of these projects make money? 

SARAH: Well, the interesting thing is though, when we talk to these projects and ask what their strategy is and why, one of the things we ask is, and how are we going to monetize this or not? If we're not going to, that's fine. But we need to know that up front, because then it's part of the success criteria. 

And for Kubernetes, as an example, we monetize it by having a hosted version of the project. We are one of many companies that have a hosted version, and that's fine. But we differentiate based on integrations with our other products, or our network, or all of these different things that Google can bring to bear as a company. 

For some of the other open-source projects there are parallel versions that are products primarily. Some of them also aren't yet, and that's also great. You know, some of them are just, we're doing this anyway and we'd rather we had an industry standard and we led that standard as opposed to being either locked in by another person's standard or locked out by their standard. 

MARK: That makes sense. I can see certain net benefits across certain open-source projects. I think of something like open-consensus, and the vision that I've seen, or the vision that I can see from [INAUDIBLE] our podcast of, like, being able to have an integrated toolchain that runs all the way from GCP out into the open-source ecosystem is very compelling. So it makes sense for us to work in that space. 

SARAH: Or Forseti with security. RSA is happening this week and the industry needs these tools. And we sort of have been doing them anyway, and it's not any real secret sauce. So why don't we share them and help drive the conversation? 

MARK: Two previous podcasts. 

MELANIE: That's definitely smart. Yes. We'll have to link those. 

SARAH: Oo, were you talking to Forseti two previous podcasts ago? 

MARK: Yeah. We had Forseti on a little while ago. 

SARAH: Nice. See? 

MELANIE: Well, and we also-- prior to your podcast, we had Eric Brewer, and we talked about his involvement around getting Kubernetes out there. Did you guys work together when you came on and started leading up the strategy around Kubernetes? 

SARAH: He actually was even earlier than I was. So I came in as we were trying to make the shift to move it to a foundation. So I did a lot of the early foundation work with Craig McLuckie. But Joe Beda hat already moved-- or, out of Google. He's still working Kubernetes. But Craig McLuckie was still here. He's since gone and founded Heptio with Joe. Brendan Burns was still here. But Eric had been sort of the strategy at the very, very beginning and sort of the early documents and the early socializing of it. But I wasn't interacting with him a lot. 

MELANIE: Got it. 

SARAH: I have since. 

[LAUGHTER] 

Because we did a bunch of work together last year around Next, actually. 

MELANIE: Ah, nice. 

MARK: So you mentioned something, I think, interesting there when you talked about the foundation. Right? 

SARAH: Yes. 

MARK: CNFC. What is CNCF? What are its goals? But also, like, what drives some products to go to CNCF and some don't? And what's the impetus there? 

SARAH: Foundations 101. 

MARK: [LAUGHS] 

SARAH: So the Cloud Native Compute Foundation was created to house Kubernetes. So the original vision, as Kubernetes was being built inside Google-- even as we were just having a couple of partners and just having trials with it and working out how we were going to announce it, well before I started-- that would have been late 2014, early 2015-- there was a concept that, in order for this to be much more trusted by the industry, it couldn't be just Google-led. As I said, it had to be really community-led. 

And Google has had some challenges with holding things too tightly. And so we wanted to make sure that it was clear that Google was really intentional about this. And so in July of 2015, when 1.0 of Kubernetes was announced, we announced at the same time an intent to build a foundation and put Kubernetes in the foundation. 

We had looked at other foundations and talked about whether or not they would fit, but the Cloud Native Compute Foundation ended up being created. And we wanted it to be a broader story than just Kubernetes, because Kubernetes was the start of the transformation. 

So the Cloud Native Compute Foundation looks at what it means to build applications that are built and architected primarily for the cloud. So the architecture that it was framed around was container-packaged, dynamically-scheduled-- and something else really important, I'm sure. 

[LAUGHTER] 

Micro-services-oriented. There we go. [LAUGHING] 

MELANIE: Nice one. 

SARAH: Pulled it out. 

MARK: There we go. 

SARAH: So that was the framing of what it means to be cloud native. And the Cloud Native Compute Foundation is a safe haven. So it's not company-led for any of these projects. The idea is, it's a great place that is independent of any particular company or company agenda for multiple industry partners and multiple industry collaborators, and even competitors to work together. So there are-- at this point, I think, five of the top cloud companies are all members of this and getting together and working on this. 

So how do projects get selected or participate in the Cloud Native Compute Foundation? If your project is interesting and relates to this cloud nativeness, there is a technical oversight committee that is independent of the governing board and independent of the corporate contributions that is set up to help guide the projects that participate in the Cloud Native Compute Foundation. 

So if you have a project and you want to participate, you basically go to the TOC and make a presentation and say, here's why-- here's what we would like to get from the Cloud Native Compute Foundation. It might be marketing support. It might be integration help. It might be CICD help. The cloud Native Compute Foundation offers a lot of services to the projects. 

And so you say what you'd like from the Cloud Native Compute Foundation, and you say, here's where your project is, and here's what the intent is, and the goal, and here are some users. And there are different levels at which you can join or participate in the Cloud Native Compute Foundation when you bring a project to it. But the TOC has to agree. 

MARK: How do we decide, at a Google Cloud level what goes to CNCF or not? 

SARAH: So, as it turns out, that's a slightly messy question. 

MARK: [LAUGHS] That's why I asked it. 

SARAH: I know. And there has been a new policy created around this. But generally the idea is, we take a look at what the goals are for the project and we see if that aligns with it moving to a foundation. So some of the projects-- Istio, as an example, another open source project here-- we're working on that with IBM very closely and we're working with the intent to move it to the CNCF, but it doesn't at the moment have as many end-users as we would want to come in as an incubated project at the Cloud Native Compute Foundation. So we're growing that, and we're working through getting a solid governance model down, and then potentially moving it to the Cloud Native Compute Foundation. 

But it really is alignment of goals and whether or not we want to set up governance that would meet the CNCF's requirements. They're fairly limited, but-- 

MELANIE: So, I think this is very interesting in terms of the-- you've talked about the independence. How do you make sure that it is independent? That Google is involved, and that yet-- and other cloud providers are involved-- and yet they're not directing projects and having influence over projects that are trying to come in that are not from these organizations-- or even are from? 

SARAH: So-- 

[LAUGHTER] 

Governance. Governance is the topic of the week. So the Cloud Native Compute Foundation was actually built with that model in mind. So that's one of the reasons we didn't go to the Apache Foundation. That's one of the reasons we didn't go straight to the Linux Foundation. We wanted to build our own little model and our own little government in order to make sure that we had that balance. 

And, love him or not, Craig McLuckie set this up. And he built this in a way that gives sort of checks and balancers much like the US governmental system. 

MELANIE: Ah. 

SARAH: And so the governing board is very much a corporate membership board. And it primarily controls budget. It controls some of the marketing. It controls how people are engaging. It runs the events. But all of the project interactions end up happening with governance pushed very much down to the projects themselves. 

And the requirement, as I started to say, there's very light requirements around governance from the CNCF. The requirements are, it just has to be really well-documented. And we really don't prefer benevolent dictators. It's just we want to see something that's broader than that. And we want to see a way for a first-time contributor to be able to grow to be a maintainer someday. 

And so the technical oversight committee-- so there's the governing board, the technical oversight committee, and an end-user board. So these are the three branches of Cloud Native Compute governance. And the technical oversight committee has nine members total. Seven of whom are appointed by the governing board, who are not necessarily supposed to be corporate representatives, but our industry representatives. So we have people that sit on the technical oversight board that don't have governing board seats, or their companies don't have governing board seats, because they are representative of the industry and the cloud native view of the world. 

Then there are two technical oversight committee seats that are selected by the technical oversight committee themselves. They say, let's look at the seven of us hanging out here and we say, we're missing this skill, and we really need someone to be able to talk about that. So they select people from the industry as well. And that is the group that ends up having project-level interest for bringing projects in or graduating projects. 

Kubernetes was recently the first-graduated project, so we're now an official, full project. 

MARK: Woo. 

MELANIE: Congrats. 

SARAH: Thank you. Yeah. That was back in March. So the technical oversight committee has that power. They also have, I believe, in their charter a way to say-- if there's not a lot of progress-- I'm sorry. You haven't graduated. You haven't made enough progress in some amount of time, and so we need to move you on. 

MARK: Put you on a personal improvement plan. 

SARAH: Right. A project improvement plan. It's a PIP. 

MARK: It's a PIP. 

SARAH: So that's one group. And then the end-user board also gets one member that gets to be sat on the technical oversight committee. So there's also sort of a perspective from an end-user. And so we tried to build this balanced system. It'll just be broken in a new and different way, because every system is. 

MELANIE: Yes. 

SARAH: But we thought this one through pretty far trying to make it more balanced. 

MELANIE: So no gerrymandering. 

SARAH: Here's hoping not. 

MELANIE: Here's hoping not. So if somebody was building out a project and wants to open-source and look at submitting to CNCF, what would be approaches you'd recommend or resources you'd recommend for them to consider? 

SARAH: Starting a project is no small feat. 

MELANIE: Well, let's say they've started one. 

SARAH: OK. Whew. 

[LAUGHTER] 

MELANIE: Let's say they've already started it. They've got something. 

SARAH: Right. There are licenses. 

MELANIE: Yeah. 

SARAH: There's a little bit of governance. We've got some code of conduct. We're doing good things. 

MARK: Yep. 

SARAH: OK. Yeah. We maybe got some end-users. 

MELANIE: Yes. 

MARK: Maybe. 

SARAH: Contributors across different companies. 

MARK: Sure. 

SARAH: All right. 

MARK: OK. 

SARAH: Fantastic. 

[LAUGHTER] 

I just skipped all the hard parts. 

MELANIE: Well, and let's say they're independent and/or they're a company. They're a company who's looking at doing this, and they're trying to figure out where to go. 

SARAH: I, again, go back to what is the strategic goal of that project. 

MELANIE: Yeah. 

SARAH: So if a company is trying to make an open-source project, my suspicion is that their strategic goal is to get lots of people excited about and interested in the project, and then they have a way to monetize it in some magical form. And if that's the case, then there's a sort of "rising tides lifts all ships" method in saying, maybe Cloud Native Compute Foundation, which is really exciting-- it seems to fit with this. Yeah. We're totally down with container-packaged. Oh, look, micro-services oriented. All right. Do we have dynamic scheduling? Do we have good telemetry? Can we play in this space? Can we add value in this space? 

And then if it fits with those particular tenants and it seems to be a good space and good technological integration point with the different other projects, it's worth taking it to the TOC and offering it. But it really always goes back to what is their goal, for me. 

MELANIE: Right. 

SARAH: Like, if what they really want to do is just be super-exciting, hey, get friends to put it on Hacker News. You know? That'll get you further faster. But if you want to be part of a growing ecosystem in order to draw in more enterprise customers, then Cloud Native Compute Foundation might be a great place. 

MELANIE: Yeah. 

SARAH: You know, if you want to show up and have someone say, here is proscriptive governance and here's a whole bunch of stuff that we can offer you, Apache might be the right choice. You know? There are lots and lots of ways to do open-source, and open-source within foundations even. 

MARK: So now I'm actually kind of curious. What would be, like-- I don't know if it's the biggest mistake, but the, like-- OK, maybe the biggest mistake that you've seen or you can imagine that an open-source project could do in this environment, either to prevent them from becoming largely-adopted or access to contributors, that kind of stuff? What sort of challenges is, maybe, a better way of putting it then? 

SARAH: There are a couple of right now that are pretty common and getting less-acceptable, which is not being welcoming to people who are new. Not being inclusive. Not allowing and accepting that diverse voices, even diverse skill-set voices can bring value to your project. 

20 years ago in open-source it was perfectly OK to drum someone out for asking a dumb question. You know? Drum you off the mailing list because you asked something dumb, or answer "RTFM." You know? And that's no longer acceptable in any way. And that will get you a pretty bad rap in open-source right now. Which is not to say there aren't still projects that run this way, but they are known and they are not what I would call the forward-motion way. 

MARK: So that is actually interesting, you say in 20 years open-source has changed. I've got some opinions on this, but I'd love to hear yours on, like, how have you seen open-source change over the last 20 years? It does seem like the landscape has shifted quite a lot. 

SARAH: Well, in 2010 we said that open-source won, which I thought was kind of awesome. So I was also program chair for OSCON for five years. And so I did a lot of broad, open-source messaging, and crossed paths with lots and lots of projects that way. And the tag-line in-- I think it was the 2010 OSCON-- was open-source has won. OK. It's now the default way to build languages. It's now the default way to build large-scale infrastructure projects. You don't try to build proprietary stacks so much anymore. 

The big shift that I saw, which would have been right around that time, was when MySQL and Oracle and all of the proliferated-- no SQL databases showed up. They were all open-source. Almost all. Or openstack coming in and saying, no, we're doing open-source a new way. We're doing it with lots of companies. We're doing it with lots of big-tent view of bringing in lots and lots of projects. 

We can argue all week whether that was a success or a failure, but it was a new way of doing it. And it was a new default where we saw people say, we have a problem and the industry and the vendors aren't solving it. So we need to find a way to fix this ourselves. 

MARK: It also feels to me-- and I'd love to hear your opinion on this-- that back 15 years ago, if there was an open-source project it was run by one person. And everyone was like, that's fine. Like, no problem. Whereas now it seems like an open-source project, if people come to it it's like, if it's not company-backed or there's not a large organization of some kind behind it, then it's not nearly as well-received, I guess, would be the word. Have you seen that sort of happening as well, or have opinions on that? 

SARAH: I have lots of opinions on that. I don't know that it's not as well-received, but I think in the same way that we have spent the last 10 years learning from infrastructure having single points of failure, projects having single points of failure is a huge problem. Like, there was a great article-- and it's still probably a problem. I'm not 100% sure. The man who supports and builds NTP is, like, one guy. His source code is on his desktop underneath his desk. It's in an old revision control system that he's super familiar with, but nobody else really wants to get as involved with and-- you know? 

So, these are problems. And we run our infrastructure on this open-source project. You know? So there was a lot of work done over the last 10 years to try to make those projects more robust. And it still is a huge problem. We have libraries that are completely unmaintained in open-source that people use and incorporate and include in everything. 

MELANIE: Yeah. That's definitely a challenge. What was interesting to me, from working in open-source, is understanding the fact that even though it's company-backed doesn't always necessarily mean it's going to be as well-maintained. 

MARK: Hm. 

SARAH: No? 

MELANIE: Yeah. I've seen both sides, from individual parties to companies being really great at it, as well as also really challenged. You've talked about some of the challenges. Where do you think open-source is going to go? Like, how do you think this is going to look so many years down the line from what you're seeing right now? 

SARAH: I think we're going to continue to see large-scale corporate investment. I think we will start to get some more evolved templates for new projects, evolved templates for governance. So it's not quite so much making it up new every time. As I said, there was that big inflection point from sort of individual contributors to corporate contributors along about 2010 or '12. We're still making things up though now, even five years on. 

And, as I said, you know, we make new mistakes each time. Which is a great thing to do, except for the fact that it would be great to just fix some of the mistakes in the other ones. But five years, 10 years from now, I think that we will see open-source be the way we develop a lot of this shared infrastructure. 

I think we're seeing already that, as opposed to the standards bodies of the '80s and '90s, we pull together around an open-source reference implementation and then sort of write a specification around that. And then that becomes the de-facto industry standard. The open-container initiative is a good example of this. Docker did a thing. It was based on containers. This is super cool. Containers had been in Linux for years, but Docker really did a great job of making it accessible. 

Then people got worried that maybe they had too much control. But it was still open-source. So why don't we try to figure out what the specification is and then make a reference implementation that is cross compatible with Docker, and then compare that and then set up conformance tests and understand what we mean by a container runtime. What do we mean by container image specification. Write all that out. 

And this all happened without a single standards body being involved. And so I think we're going to see the standards bodies continue to exist and be used because they're super-useful for, especially highly-regulated industries. But I think they will be a second stop for open-source reference implementations and specifications. So I think that's going to be one of the biggest changes, is that we do a lot more in open-source around that. 

MELANIE: Nice. 

MARK: And to take on in a slightly different tack-- I've definitely run into people with corporations-- I should say "possibly"-- who, when approached or discussing the idea of open-source, it seems very foreign to them. If you're a company and potentially you're either looking at open-source or even just wondering why people would do this, what do you feel like the motivations are for large companies to really start going down this trend? And what are the benefits, I guess really, at the end of the day? 

SARAH: There's a lot of economic benefit to a platform. And if you open your platform you have more people able to contribute to it, which then gets you a network effect. So almost anything that can be looked at as a pluggable kernel, for lack of a better term, can benefit from being open-sourced and grown. 

And then the ecosystem, the addressable market of whatever you're doing, gets bigger because you have a community around it and you have people that are excited about it. You have people advocating for that platform, advocating for that new paradigm. And then you have more business opportunity. 

So there's certainly altruistic motives. Theirs is better for-- many eyes make shallow bugs. You know? There's lots of good reasons. But ultimately, we still live in a world where this is commercial. And in order to make this viable for a company to support and make it viable, long-term sustainable by having multiple companies and individuals come together and build these enormous, sometimes, projects, you need to have business value come out of it. So there are good economic reasons to do it. 

MELANIE: I'm curious. What was one of your favorite open-source projects when you first got into this space? 

SARAH: So I will always have a soft spot for Red Hat Linux. 

MARK: [LAUGHING] 

SARAH: So I mentioned that I really cut my teeth at Amazon back when Webscale didn't have a name. And I started in customer support because Amazon started everybody in customer support at that point in time. And when I finally worked my way through and got to systems engineering space and got moved over, just because I knew the customer support systems better than anybody else in that organization-- so they brought me over as, like, the local specialist. And I could program in Perl, which really is a terrible thing to say, but it's true. 

MARK: I've done. It it's fun. 

SARAH: OK. We won't talk about it. So I was brought over as a specialist. And my boss walked by with a stack of floppy disks. Yes. I'm dating myself. Drops it on my desk and says, you go on call when your Linux desktop connects to the network. 

MARK: Fun. 

SARAH: And that was my first while. I won't admit how long it took. 

[LAUGHTER] 

Because I was not, at that point, a Linux administrator. But very shortly there-on I was a Linux administrator. 

MARK: Nice. Very nice. 

MELANIE: And look at you now. [LAUGHS] So what do you enjoy most about what you do? 

SARAH: Helping people grow. Helping projects grow. Helping them understand how to lead within projects, and understand that open-source is really an opportunity to take the skills you have, offer them, and say, I also want these skills. I'm willing to do the grunt work to learn them, and work with people. So I really see open-source as a great spot to offer what you have and learn new skills. 

MELANIE: Anything that you wanted to plug or share that's upcoming for you? 

SARAH: So there is a open-source panel happening at Google I/O on Wednesday, May 9. 

MELANIE: Great. 

SARAH: In the afternoon. And I'll be sitting on that. Chris Dibona, our open-source Programs Office Director, will be leading the panel. 

MARK: Nice. 

SARAH: And we will have Will Norse, who works in engineering on Chris Dibona's team, and then also Cassandra Salisbury, who is one of our GO people, works on my team and is embedded in the GO community there. She'll be participating with it as well. 

MELANIE: Great. 

MARK: Fantastic. 

MELANIE: Well, thank you so much for coming on to the podcast and sharing all of that open-source. And it was wonderful to have you here. 

SARAH: It's lots of fun. And thanks for putting up with my reschedules. 

MARK: That's OK. Anytime. 

MELANIE: Well, thanks again Sarah. Hopefully one of these days we'll get you back. 

MARK: Yes. 

MELANIE: Because that was wonderful to get into open-source with you. 

MARK: Yep. 

MELANIE: All right Mark. Question of the week. You broke your SSH access to your compute engine instance by accidentally removing the GCP Linux guest environment. 

[CRASH SOUND EFFECT] 

This reminds me of a time when I think I did-- what was it, pseudo-- 

MARK: Like RMR? 

MELANIE: Yes. [LAUGHS] So how did you fix this? 

MARK: OK. So, first of all I want to say you should probably automate all your build things. Use containers or some sort of automation script-- Ansible, Puppet, Chef. So in this case I wasn't doing this. That's probably mistake number one. 

But I had a GCE instance that's running WordPress on it so I can run my blog, and I was like, oh, a new version of Debian is out. I should upgrade. Because security-- that's good. So I sat down. I went through the steps, upgraded. Everything was fine. What I didn't realize was, in doing said upgrade, there was a bunch of GCP-specific tooling that handles all the SSH key and security stuff for when you want to SSH in. So, like, you can SSH in from your browser, for example, or from the G-cloud tools, and it handles all that. 

Unfortunately, when I upgraded, that thing goes away unless you manually take the step to make sure that that tool is still there and the repo is still there and all that kind of stuff. It just disappears. So I was stuck with a machine that I couldn't SSH into. 

[DRAMATIC MUSIC] 

It was still working, but I couldn't SSH into. Anyway. So there is actually a really good guide that we'll link to in the show notes, that is actually for if you're setting up your own, like, say OS image or something like that, but is linked from the troubleshooting guide if you can't SSH in-- talking about how you can install the tooling without actually having to be able to SSH into the box. So they take you three steps where you clear the disk, fire up another VM, mount it, set up a setup script that can be copy-pasted into it, fire up the thing, and then basically the machine loads up and then it installs the stuff that it needs to install, and it continues on from there. And it works. I can now SSH back into my box. 

[ANGELIC MUSIC] 

MELANIE: Congratulations. 

MARK: So I'll link it. It's one of those things that's like, you probably should never need this and hopefully you will never need this, but on the day that you do, you'll be like, that-- that's the thing I need. OK, cool. 

MELANIE: Yeah. Happens to the best of us. 

MARK: [LAUGHS] Yes. 

MELANIE: Well, I'm glad you-- I'm glad you came out of that sort of unscathed. 

MARK: Pretty much. 

MELANIE: And lessons learned for everybody. All right. Well, Mark, got any plans? Any place you're going to? Any place you're speaking at? 

MARK: Outside of Next, which is in a little while, just doing my live streams on Twitch. I did put out a blog post recently. I can mention that, self-serving. I'll put the link in the show notes. Basically I was finishing off the series I started a while ago talking about scaling game servers on Kubernetes in a manual sense. So I finished off the fourth one of that. I will pretend it wasn't meant to be five. It was meant to be four. That's the way it was. 

MELANIE: Of course it was. 

MARK: Of course it was. So, finish that off. So, yeah. Just doing some streaming and writing some content, and writing a bunch of code for [INAUDIBLE]. What are you up to? Where are you going? 

MELANIE: I am going to be speaking at the Internet2 Global Summit next week on May 9 in San Diego, and then I will be speaking at the Understand Risk Forum on May 17 in Mexico City. That is where I will be. Other than that, I'm in San Francisco. 

MARK: Fantastic. Well, that means we'll see each other lots. 

MELANIE: Hopefully. Unless I decide not to hang out here. 

[LAUGHING] 

MARK: That's all right. 

MELANIE: All right. 

MARK: Well, Melanie, thank you again for joining me for yet another week on this episode of the podcast. 

MELANIE: Thank you. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

MARK: [SILLY LAUGHTER] 

MELANIE: All right. 

MARK: I just went very Scooby-Doo there for a minute. I don't know. 

MELANIE: I know. That was very Scooby-Doo. We should keep that for later. 

MARK: [SCOOBY LAUGH] 