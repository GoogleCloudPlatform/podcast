+++
audioDuration = "00:32:57"
audioFile = "Google.Cloud.Platform.Podcast.Episode.178.mp3"
audioSize = 47862825
categories = ["Linux Foundation", "Open Source"]
date = "2019-05-22"
description = "Today on the podcast, we're speaking with Chris Aniszczyk about the Linux Foundation and the important work they do to further the advancement of technology through open source initiatives."
draft = false
episodeNumber = 178
hosts = ["Mark Mirchandani", "Mark Mandel"]
title = "The Linux Foundation with Chris Aniszczyk"
image="/post/episode-178-the-linux-foundation-with-chris-aniszczyk/images/hero/hero-EP-178.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/brpeez/episode_178_the_linux_foundation_with_chris/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Today on the podcast, we're speaking with [Chris Aniszczyk](https://twitter.com/cra) about the Linux Foundation and the important work they do to further the advancement of technology through open source initiatives. [Mark](https://twitter.com/Neurotic) and [Mark](https://twitter.com/markmirch) are your hosts this week, and they begin by speaking with Chris about what the Linux Foundation is and how it's unique.

The Linux Foundation, while seeking to support open source projects, sets itself apart by also providing professional services such as marketing, technical writing, legal help, and running events. It acts as a parent foundation for smaller open source foundations like Cloud Native Computing Foundation, Node.js Foundation, and the Automotive Linux Foundation, which strives to bring open source to the automotive industry.

Though typically companies can be leery of working with competitors, The Linux Foundation has been successful bringing companies together to create useful software that benefits everyone. Collaboration can be easier when done through the foundation. Chris also actively reaches out to companies in industries that don't typically engage in open source practices and encourages them to consider working together to make their industry better. Specifically, Chris works with companies within CNCF and the Open Container Initiative. 

<!--more-->

##### Chris Aniszczyk

[Chris Aniszczyk](https://twitter.com/cra) is an open source executive and engineer with a passion for building a better world through open collaboration. He's currently a VP at the Linux Foundation where he co-founded the Cloud Native Computing Foundation (CNCF) and currently serves as CTO. Furthermore, he's a partner at Capital Factory where he focuses on mentoring, advising and investing in open source and infrastructure focused startups. Throughout his career he has worked at the intersection of open source, internet scale organizations and the enterprise; at Twitter he created their open source program/strategy and led their open source efforts to change the infrastructure industry. In a previous life, he bootstrapped an open source startup, was a Gentoo maintainer, made many mistakes, lead and hacked on many developer tooling and Linux related projects.

##### Cool things of the week

* Uber datasets in BigQuery: Driving times around SF (and your city too) [blog](https://towardsdatascience.com/uber-datasets-in-bigquery-driving-times-around-sf-and-your-city-too-9ad95baa6bfe)
* Topping the tower: the Obstacle Tower Challenge AI Contest with Unity and Google Cloud [blog](https://cloud.google.com/blog/products/ai-machine-learning/topping-tower-obstacle-tower-challenge-ai-contest-unity-and-google-cloud)
* Querying the Stars with BigQuery GIS [blog](https://cloud.google.com/blog/products/data-analytics/querying-the-stars-with-bigquery-gis)
* GKE Sandbox: Bring defense in depth to your pods [blog](https://cloud.google.com/blog/products/containers-kubernetes/gke-sandbox-bring-defense-in-depth-to-your-pods)
* Google Cloud launches new Osaka region to support growing customer base in Japan [blog](https://cloud.google.com/blog/products/infrastructure/google-cloud-launches-new-osaka-region-to-support-growing-customer-base-in-japan)

##### Interview

* Linux Foundation [site](https://www.linuxfoundation.org)
* OpenJS Foundation [site](https://foundation.nodejs.org)
* CNCF [site](https://www.cncf.io)
* Automotive Linux Foundation [site](https://www.automotivelinux.org)
* Let's Encrypt [site](https://letsencrypt.org)
* How to start a project with the Linux Foundation [site](https://www.linuxfoundation.org/projects/hosting/#getstarted)
* Community Bridge [site](https://communitybridge.org)
* Academy Software Foundation [site](https://www.aswf.io)
* Open Container Initiative [site](https://www.opencontainers.org)
* CNCF Cloud Native Definition [site](https://github.com/cncf/toc/blob/master/DEFINITION.md)
* CNCF Annual Report [site](https://www.cncf.io/cncf-annual-report-2018/)
* GraphQL [site](https://graphql.org)
* Linux Foundation Events [site](https://events.linuxfoundation.org)

##### Question of the week

[How do I connect Cloud SQL to my serverless?](https://cloud.google.com/blog/products/serverless/cloud-run-bringing-serverless-to-containers)

##### Where can you find us next?

Mark Mirchandani will be working on more film projects.

Mark Mandel will be at [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/) in July and will be at [Open Source in Gaming](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/program/co-located-events/) the day before the [Open Source North America Summit](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/attend/about/) in August.

{{< transcript "[MUSIC PLAYING] MARK MANDEL: Hi, and welcome to episode number 178 of the weekly Google Cloud Platform podcast. I'm Mark, and I'm here with Mark as well. How are you doing, Mark? " >}}

MARK MIRCHANDANI: I'm Mark. I'm also Mark. How are you, Mark? 

MARK MANDEL: I'm very well, Mark. How are you doing, Mark? 

MARK MIRCHANDANI: Mark is doing great. Wait, which Mark is? So I think I'll call myself Mirch for now. I know that our accents are also very similar. 

MARK MANDEL: Of course. 

MARK MIRCHANDANI: So we don't want people to get mixed up. 

MARK MANDEL: Yes, yes, yes. But today, we have Chris Aniszczyk from the Linux Foundation, CTO of CNCF, and VP of DevRel at the Linux Foundation talking to us today all about the Linux Foundation, open source foundations, open source stuff, all good things. 

MARK MIRCHANDANI: Yeah, it was a great conversation that we had with him. I've heard of the Linux Foundation, I think most people have heard of Linux. But there's a lot of open source projects out there, and it turns out they can sometimes be hard to manage. So I think it was really cool to hear what the Foundation does, how it helps people out, and what that almost governing body provides for all these different communities. 

MARK MANDEL: Yeah, absolutely. And then I get to ask you a super interesting question, where I ask you, how do I connect Cloud SQL to my server-less thing-os? 

MARK MIRCHANDANI: Something very, very interesting, and we'll have an answer for you. But before we get to that-- 

MARK MANDEL: Cool things of the week? 

[MUSIC PLAYING] 

All right. What you got? 

MARK MIRCHANDANI: Well, first cool thing of the week-- I'd like to call out a blog post written by one of our very own DAs, Felipe, who wrote a very, very cool and interesting little cover of how do you analyze ride share data. So we're here in the Bay Area, where traffic is, admittedly, quite a disaster most of the time. 

MARK MANDEL: Yes. 

MARK MIRCHANDANI: And I think a lot of people are always wondering how long it'll take, and it turns out Uber actually released some public data sets, including how long it takes to get from certain destinations to other certain destinations. And then Felipe, who loves BigQuery-- 

MARK MANDEL: He does. 

MARK MIRCHANDANI: --decided to take all that, put it together, and show off a cool little Data Studio dashboard using the new BQ Business Intelligence unit product that basically makes it super quick to analyze and do actual BI dashboards. So the Medium post walks through how he did it, it sets it up so you can take a look at more than just the Bay Area, and it calls out that we have a lot of cool public data sets for BigQuery. So I think it's really awesome. 

MARK MANDEL: That's cool. Awesome. I have one that I think is lots of fun, mainly because I like seeing machine learning agents do very silly things. There is a contest going on over at Unity called the Obstacle Tower Challenge. We are a sponsor of the prizes, which is lovely, but basically the first iteration is now complete in which teams are challenged to build an AI agent that has to navigate a procedurally generated obstacle course. 

MARK MIRCHANDANI: I can't navigate a procedurally-- 

[FUMBLES WORDS] 

[LOUD CLATTER SOUND EFFECT] 

How is an AI going to do it? 

MARK MANDEL: Through AI. 

MARK MIRCHANDANI: Oh, good point. Hadn't thought about that. 

MARK MANDEL: Yeah, pretty much. So this is really cool. So the first stage is complete, which I got the details which will be in the blog post. And soon, some teams are moving on to round two. They've received more than 2,000 entries from several hundred teams around the world. 

MARK MIRCHANDANI: Very cool. 

MARK MANDEL: Yeah, it's a good one to watch. 

MARK MIRCHANDANI: Speaking of BigQuery before with Filipe's blog post, well, there's actually another cool blog post that came out a little while ago that talked about BigQuery's GIS tools, and these are things that are useful for calculating distances, kind of similar to the public data share that Uber had sent out. In this case, it turns out that even though we're talking about positions on Earth most of the time, you could actually take the same concepts and put them into astronomy terms. 

So now we're able to look at huge public data sets of astronomy stuff and then take that and say, OK, well, let's use the facing coordinates to figure out where they are, gather all this big data. So now we've got all the power of doing rapid big data analysis and comparing it to what could possibly be the biggest data set there is, space. 

[ECHO] 

[MUSIC PLAYING] 

Yep. So I hear. People tell me. I haven't quite seen all of it myself. 

MARK MANDEL: I tried seeing it once. It took me-- I got bored. 

MARK MIRCHANDANI: It's not worth it. 

MARK MANDEL: There's just a lot of black stuff. 

MARK MIRCHANDANI: Mark review, 1 out of 10, would not recommend. 

MARK MANDEL: [LAUGHING] 

So finally, for me, we have another blog post, a GKE Sandbox bringing defense in depth to your pods. At Cloud Next, we announced the GKE Sandbox in beta, which is a new feature of GKE. So if you feel that you need increased security and isolation of your containers, this might be a nice thing for you. It's based on gVisor, the open source container sandbox runtime. Basically, if you're running anything that potentially maybe is slightly untrusted, like someone's providing you a user code or you're running a multi-tenancy environment, you might want to try this out. 

It's pretty cool. We'll link to it in the blog post. But basically, with a couple of extra annotations on your pod and a new type of thing inside your node pool, you're pretty much good to go, and then you can just continue running as you were before with just that extra layer of security. It's pretty sweet. 

MARK MIRCHANDANI: I think we're seeing a lot of cool customizations that you can have now. Because there's one thing to be said about Kubernetes and then actually having to manage Kubernetes. But now it's like, how many little buttons and bells and whistles can I start to get on there? This is just another one in the latest line. 

MARK MANDEL: Wonderful. I think that's everything. 

MARK MIRCHANDANI: Yeah, well, one more. Last but not least, we do have a quick announcement for a great new public data center that just got launched-- 

MARK MANDEL: Yes, very true. 

MARK MIRCHANDANI: --over in Japan, I believe in Osaka. 

MARK MANDEL: Yep. 

[MUSIC PLAYING] 

MARK MIRCHANDANI: So that brings us to, what, 20 regions worldwide. 

MARK MANDEL: That's a lot. 

MARK MIRCHANDANI: It's nice to see, right? So people can choose, when they're going to launch their services, where they want it, make sure they can get that closest to the user as possible. Always a good thing to have. 

MARK MANDEL: Yep, and additional regions are coming soon, with Seoul, Salt Lake City, and Jakarta coming in the first half of 2020. 

MARK MIRCHANDANI: Very, very cool, and not that far off. 

MARK MANDEL: No. Well, why don't we go have a chat with Chris about all the open source things in the Linux Foundation. 

MARK MIRCHANDANI: Sounds good. 

[MUSIC PLAYING] 

MARK MANDEL: OK. So super excited. We have my dear buddy, Chris Aniszczyk, here joining us at Cloud Next, CTO of CNCF and VP of DevRel at the Linux Foundation. How you doing today, Chris? 

CHRIS ANISZCZYK: Pretty good. It's nice to be in this small, little house that we have here for the podcast. 

MARK MANDEL: Yes. Our listeners can't see it, but it's an adorable little house. 

CHRIS ANISZCZYK: It's adorable, it's comfy, it's cozy. It makes me feel at home. 

MARK MIRCHANDANI: Exactly. 

MARK MANDEL: Does your house look like a giant yellow, plexiglas building? 

CHRIS ANISZCZYK: Well, I moved, it took a while, it was expensive. I was like, hey-- 

MARK MANDEL: But San Francisco rental prices-- before we get too ridiculous, do you want to tell us a little about who you are, what you do, CNCF Linux Foundation? 

CHRIS ANISZCZYK: Yeah, sure. I basically have two roles. I serve as VP of DevRel at all of Linux Foundation, which basically means-- if people aren't familiar with the Linux Foundation, it's really not only about Linux anymore. We are a family of foundations. We have things like the Node.js Foundation-- or I guess it's the OpenJS Foundation. There's CNCF, which I helped start. There is the Automotive Linux Foundation, and so on. 

I help basically run DevRel across all these different foundations and make sure those communities of developers are very happy in those respective communities. But most of my day job these days is focused on really taking care of the CNCF technical community as a CTO, so working with our independent technical board to make sure we're accepting wonderful projects into the community, and also making sure, in general, our projects and developers are super happy with the services that the Foundation provides. 

MARK MIRCHANDANI: Now, that makes a lot of sense to me, except for one part. 

CHRIS ANISZCZYK: Yeah. 

MARK MIRCHANDANI: You listed a lot of foundations there and a lot of different teams. 

CHRIS ANISZCZYK: Yeah. 

MARK MIRCHANDANI: Let's start at the highest level. 

CHRIS ANISZCZYK: Yeah. 

MARK MIRCHANDANI: What is the purpose of the Linux Foundation? 

CHRIS ANISZCZYK: Cool. Very simple. So if you go pull up the bylaws and charter, the Linux Foundation is basically tasked to support and sustain the development of Linux and open source software. And that open source software is very broad. So initially, Linux Foundation started out very focused on Linux. Linus and Greg KH, the stable/unstable maintainers are employed as fellows and go hack on the kernel and make sure to take care of it. 

But essentially what happened, as Linux grew and just, in general, open source grew, people were trying to find ways to collaborate. And if you look at it, there's a lot of different foundation out there. There's Apache, but they're motto is very much focused on the individual and they pretend companies don't exist. It's very individual community, and they're volunteer run. So there's no necessary services. 

The Linux Foundation is more of a professional services foundation, where we actually have people on staff that help with marketing, Dev,Rel, technical writing, all the stuff that generally project maintainers don't like to do but are super useful for building community-- running events. We're putting on KubeCon Barcelona in a month and a half-- soon, and it's almost a 10,000-person event. That's a lot to put on, but actually super useful to build communities. 

So we are a full service, professional staff organization. We've grown to support open source in all different industries. People would come to us and say-- like, Toyota, hey, we want to do something in the automotive industry to bring open source to cars to make things more efficient and innovative. We've worked at the Telco industry, so we have Linux Foundation networking. We cleaned up the mess with the IOGS, where we merge those things into one organization. So we've just grown through. Linux was one of the early open source projects, and people naturally came to our organization for help. 

MARK MANDEL: You've said support, and then you've also listed a wide variety of very interesting things that you do for open source projects as a whole. Is there any limit to that? How does that get-- what happens there? 

CHRIS ANISZCZYK: Yeah, so think about it. Each sub-foundation kind of runs independently. They have their own-- you can think of it like a business unit-- they're own P&L and potentially own staff, but the parent entity is the Linux Foundation. So they basically work with the community to figure out what they need. I have a saying that each open source project is unhappy in their own unique way. And you have to work with them to figure out, maybe you need infrastructure help. 

A lot of the Telco-focused foundations, they have physical devices, like routers and other crazy stuff, and so you need a lab to help them. Others may just need help with-- we don't like technical writing, we kind of suck at it. Can you help us with that? So we do a variety of things based on each type of project. But the LF is a fairly decently large organization. We also hosts things like-- people forget Let'sEncrypt.org. Everyone loves free SSL certs. We basically help bootstrap that and sustain it, essentially, as an organization. 

MARK MIRCHANDANI: So that's still a long list of things that you do. 

CHRIS ANISZCZYK: Yeah. 

MARK MIRCHANDANI: But it's really interesting when you mention that open source groups will come to you and say, we need some help doing this. 

CHRIS ANISZCZYK: Yep. 

MARK MIRCHANDANI: How is that group OK with working with-- like, hey, let's just sign everything over to this foundation? 

CHRIS ANISZCZYK: Yeah, so think about it. Businesses inherently don't trust each other in many ways. 

MARK MIRCHANDANI: Right. 

CHRIS ANISZCZYK: They feel like, oh, you're going to sue me for something unless there's some type of agreement or partnership. Well, by putting code in some level of IP, whether it's a trademark in a neutral place, like we did with Kubernetes. We have this wonderful conformance program that everyone works with and ensures that they respect the project and are conformant. We set these types of things up for different organizations for different industries, verticals, and projects. 

So having a neutral entity and the IP owned in a neutral way builds trust across these companies, and they decide together what they want to work on together, like what part of the industry maybe is commoditized at some layer or some interesting thing they want to chasten and work on together. So essentially, neutrality builds trust and, to me, is a cornerstone of working together. 

MARK MANDEL: So you handle intercompany politics really well. 

[LAUGHTER] 

CHRIS ANISZCZYK: So I will tell you the sad thing about this job. It, unfortunately, makes you respect politicians a little bit more, and that's painful. 

MARK MIRCHANDANI: Well, it highlights, right? I'm sure there are and there have been no shortage of, and probably currently are, plenty of conflicts between different people wanting to go different ways. 

MARK MANDEL: Different incentives. 

MARK MIRCHANDANI: And different people in the community who are just like, I don't know if I want to be governed by some higher authority that I didn't choose. 

CHRIS ANISZCZYK: Yeah, or they compete at the market at some level, and someone's like, I want to go push this feature into something that I may sell. But at the end of day, we very much focus on open source projects and making sure they are very healthy, sustained, and do everything to make sure they're healthy. Our members build products that compete in the market and go fight it out and figure out what they do. 

And so our whole goal-- we have this saying of projects, products, profits. So we sustain projects, our members build products, sell them, make profits, and that gets funneled back into the Foundation. 

MARK MANDEL: How do people get involved? If I've got a little project where I'm like, hey, I wrote a little Go library and I want to put that in the Linux Foundation, I'm assuming that's not something I can do. 

CHRIS ANISZCZYK: There is a process. If you actually go to the Linux Foundation Org website, there's, propose a project, and there's a little form. But recently we announced an initiative called the CommunityBridge.org. So maybe you don't need a full blown crazy foundation, but you may want to have support to maybe raise a little funding for a meet up or an event, or you may want to do internships. 

So we even have a quote unquote "summer code as a service," for lack of a better analogy, that could go all year round. So we have that available for people that are just individual projects and may not have crazy backing or something. 

MARK MANDEL: Yeah. So I know recently, I believe you formed a coalition, or whatever you want to call it, for the Media Association or something-- 

CHRIS ANISZCZYK: The Academy Software Foundation. 

MARK MANDEL: That's the one I'm looking for. 

CHRIS ANISZCZYK: Yeah, for the film industry, which they don't want to collaborate either, but they've decided, you know what, maybe we should start not reinventing all these color tools and other things, and let's collaborate on the basis. Because what we're actually good at, stories and making movies, not actually the software to make those. 

MARK MANDEL: How long did that take? What was that process like? 

CHRIS ANISZCZYK: Two plus years. Generally when these things start, they don't happen overnight. Usually one person that wants to champion and open source an organization has realized, this is stupid, we're reinventing the wheel all over the place, comes to us or somehow we run into them at an event and we just start the discussions. The Linux Foundation has over 1,000 members worldwide, and so we just reach out, oh, this person here. And then we maybe host a little event or a meet up. 

And naturally, people come together and write a mission, vision, and maybe a foundation is formed, or maybe it isn't. So sometimes it doesn't work out. 

MARK MIRCHANDANI: Yeah, that's not unique to the media. There's a lot of industries that still prefer very private, closed door, not open conversations. 

CHRIS ANISZCZYK: We're actually seeing other industries, like pharma, they don't really like to talk to each other much either. And they're starting to dabble potentially in open source. And so we're just into this area where we're one of the early pioneers of open source as an organization, and we essentially act as foundation as a service and bring communities together that want to collaborate on some specific piece of software. 

MARK MIRCHANDANI: What's the sell there? I mean, you're not selling anything because ultimately they're not paying, right? But how do you go and approach these people? Or do they just come to you? 

CHRIS ANISZCZYK: They just naturally come to us, generally. So there's no proactive reach out. It's usually the problems are actually coming from the businesses or people that have them. So we're not actively going out and saying, you should do open source, open source is great. 

MARK MANDEL: What sort of problems do you think they're trying to solve with open source? 

CHRIS ANISZCZYK: Cross-company collaboration. So generally, there's some piece of the stack that they may want to commoditize, just like the Academy Software Foundation. All these color tools that they've come up with they're reinventing on their own, and their company policies do not allow them to easily collaborate with different organizations. So if you put the code in a foundation, there's usually an IP policy that everyone agrees to, a fair governance policy that everyone agrees to of how maintainers are elected and removed. 

And then all of a sudden, the companies could collaborate together in a fair way. It's like a sports match or something, where everyone knows how the rules of hockey work and there's a referee or something, so let's go at it. 

MARK MANDEL: Do you also work in the other way, where you may go into companies and educate them about open source and how they can work in that arena in a better way? 

CHRIS ANISZCZYK: 100%. Half my job is probably educating companies that are new to open source or don't understand how it works. It's actually my personal vision of open source is sustained by convincing companies that, A, open source is a good thing that they should contribute to, either by hiring maintainers or contributing to projects and just being involved in the communities. And we tend to live in a little bit in a bubble sometimes in the Silicon Valley area, but if you go out to automotive companies or pharma companies, they haven't heard of Kubernetes. Bless their heart, but-- 

[LAUGHING] 

MARK MANDEL: I can't imagine-- 

[INTERPOSING VOICES] 

CHRIS ANISZCZYK: Or open source is new to them. And so we do a lot of education. We have free resources guides that we produce. I co-founded one initiative called the TODOGroup.org, where I used to run the open source office at Twitter, where we just produced a bunch of material of how to contribute to open source, how to start a project, how to work with others, what happens when things go wrong in open source. And so we just open sourced all these things available for companies to learn from and use. 

MARK MANDEL: Yeah, I know. I've definitely run into companies where I know members who would just be like, I can't even write feedback on a GitHub project because legal or PR is not going to let me. 

CHRIS ANISZCZYK: You have to go through the 11 circles of legal and PR-- 

MARK MANDEL: Every time. 

CHRIS ANISZCZYK: Yeah, every time. For a patch or for everything, yep. 

MARK MANDEL: But I think you do some legal services as well. Is that right? 

CHRIS ANISZCZYK: Yeah, we do. We have legal staff and external counsel and trademarks and just legal advice in general. The Linux Foundation, by-- you join the organization, there's actually a legal network. And they have, I think, conferences twice a year where all these lawyers go into a room-- which I want to avoid. But they talk to each other and they learn from each other. That's just one benefit of being part of the organization. Usually a huge function of what we do is education of how open source works. 

MARK MANDEL: Actually, that's an interesting point. People can still be part of the Foundation, but they don't necessarily have to open source code. They may just be there so that they can interact with open source code. 

CHRIS ANISZCZYK: Yeah, absolutely. All our projects don't require any form of membership. Like, all technical stuff, you just show up and contribute. It's a do-ocracy, essentially. Like, if you show up, maybe you'll become a maintainer or something. The funding there is just to sustain us. It's not cheap to put on KubeCon or technical writers, and so on. So that's where the resources go to sustain the-- 

MARK MIRCHANDANI: So that's a pretty helpful overview of why the Linux Foundation is important and some of the reasons that a lot of people might look at some of the projects there. But you mentioned that you've been spending a lot of time on CNCF. 

CHRIS ANISZCZYK: Yeah, yeah, I was employee one with CNCF and the Open Container Initiative at the same time, which, if you remember, the wonderful container wars of days old. 

MARK MANDEL: Yeah. Are we settled on that? Is that good? 

CHRIS ANISZCZYK: OCI-- we have containers, we have an image spec, we have a runtime spec, the team is actively working on a distribution spec. So, oh, my god, wouldn't it be amazing if registries had the same kind of API out there and there wasn't any crazy issues where one didn't support multiarch-support or something? So they are working together on those problems, and they've made a lot of progress. Almost every container runtime supports the OCI image and runtime spec at some-- 

MARK MANDEL: So I was going to say, you were number one at CNCF. Where did that come from? What was the need? Why did that come about? 

CHRIS ANISZCZYK: It's an interesting story. I spent five years, before joining the Linux Foundation, in Twitter working on open source infrastructure. So we had our containers [INAUDIBLE] before they were really cool. I quit that job after five years of startup. Good times, learned a lot. And then I was-- 

MARK MANDEL: Living in the Valley, right? 

CHRIS ANISZCZYK: Yeah, exactly, exactly. I was like, I need a little time off after that. And then I had this wonderful conversation with the head of the Linux Foundation, Jim Zemlin, who called me. He's like, Google has open source Kubernetes, there's a bunch of folks that want to build a standard around containers. Do you want to come help this? You have a lot experience at open source and so on. It's great. We're nonprofit. It's going to be super easy. Just come-- 

MARK MANDEL: [LAUGHING] 

CHRIS ANISZCZYK: Come do this. So-- 

MARK MANDEL: It's basically a vacation. 

CHRIS ANISZCZYK: Yeah, yeah. It's going to be easy. Not for profit, you get like, 30 vacation days or something. It's going to be great. It turned out to be super-- I don't want to say painful, but very rewarding. 

MARK MANDEL: Challenging. 

CHRIS ANISZCZYK: Challenging is probably the better word. But bringing together competitors to essentially collaborate and decide which parts of the stack, essentially, we actually want to commoditize or agree that we should standardize is a fun experiment, and it shows the values. I don't think if we did not do OCI and help grow Kubernetes where it is today, it wouldn't have worked out without getting that agreement on container formats and so on. Otherwise, to go to a different cloud, you'd have to go rebuild your containers or use another format. It would be a nightmare. 

MARK MIRCHANDANI: Yeah. I think that's a very valuable point to why these things exist. Again, going back to why these foundations are helping people. 

CHRIS ANISZCZYK: Yeah. And I think the other useful thing is-- I do want to say when Craig McLuckie and Sarah Novotny and some of the other folks that were very early involved with the foundation is, we made a deliberate decision not to just call it the Kubernetes Foundation. It was going to be the Cloud Native Computing Foundation and it would encompass more than just one specific project or technology. 

It was to come up with a, here's our mission, we want to spread Cloud Native, bring projects together that are very useful in the space. We don't necessarily want to anoint one, technically, project as a winner. We want to build some specifications. And it worked out pretty well. I think we're a lot more successful with that mission than just specifically saying, we're just the Kubernetes Foundation. 

MARK MANDEL: So you were employee number one at CNCF. 

CHRIS ANISZCZYK: Yeah. 

MARK MANDEL: What does Cloud Native mean to you? 

CHRIS ANISZCZYK: Oh, my gosh. 

[LAUGHTER] 

MARK MANDEL: We ask the hard questions on this podcast. 

CHRIS ANISZCZYK: No, it's great. So it's funny, when we started the organization, it was like Cloud Native is all about services that live in containers that are orchestrated by some central process. And that was the original thing that was baked into the charter. But recently, we had this funny debate within the CNCF technical community of, maybe we should write down the definition or update it. And so it's actually been updated. It's on GitHub. It's actually much longer than I like, but essentially, it encompasses that original definition. 

But it includes more things like service meshes, concept resiliency, and so on. If I had my computer in front of me, I could read it, but it is too long. But it is something that the community of-- we have hundreds of members, thousands of [INAUDIBLE] that actually came up, agreed upon, and voted on it. It's translated into Chinese, Japanese, Korean on GitHub. 

MARK MIRCHANDANI: Is that going to continue to grow, though? Especially as the ecosystem is rapidly-- is right now exploding in every direction, how is the Foundation going to be able to oversee a good chunk of that? 

CHRIS ANISZCZYK: We're no longer one person anymore. There's a staff-- 

MARK MIRCHANDANI: That usually helps. 

CHRIS ANISZCZYK: Yeah, yeah, exactly. There's a staff of about 30 or so folks that work directly on CNCF full-time. We have a lovely booth here. I don't know if you swung by. 

MARK MIRCHANDANI: It's great. 

CHRIS ANISZCZYK: Yeah, exactly. It's very pretty. We have lots of stickers, so if you're into fluentd, containerd-- 

MARK MANDEL: I have a few stickers on my laptop. 

CHRIS ANISZCZYK: --Envoy. I saw some podcast stickers that somehow ended up on the-- 

MARK MIRCHANDANI: Strange. How did that-- 

MARK MANDEL: I don't know. Weird. 

CHRIS ANISZCZYK: Exactly. We have a decent amount of staff now. So we have about a little over 30 projects now. And as we grow as an organization, we try to staff up appropriately. Part of our work is not only staffing the Foundation, but also working with companies to convince them that if you're betting your business on Kubernetes, maybe you should try to contribute some resources to translate the Kubernetes docs into Japanese or contribute in your own way. 

And a lot of companies actually need that education because they're very new to open source. It's very surprising, if you're just living in the Bay and sometimes you go talk to a bunch of crazy customers or people that are new to open source, there's lots of them. We're still in the early days of people understanding open source, in my opinion. 

MARK MANDEL: Yeah, it's not necessarily crazy. It's just different people at different levels of the stack, and that's just where they're at. And that makes sense, right? 

CHRIS ANISZCZYK: Yep. 

MARK MIRCHANDANI: So that sounds good from a-- you can join this Foundation, you can get this support. If you don't like it, you don't join. Very simple. 

CHRIS ANISZCZYK: Or you could still always contribute code. If you want to fiscally support it, you're more than welcome to, but it's not a requirement by any means. If you're building Kubernetes conformant type things, then, yeah, maybe you should support this organization because you're betting your business on it. 

MARK MIRCHANDANI: Have you run into any people who are actually resisting the Foundation? 

CHRIS ANISZCZYK: It's more of an education. So what do you necessarily do? Or it's like, oh, I have this Kubernetes distribution. Oh, there's a conformance program. Oh, it's run by CNCF. I had no idea that this existed. So it's more of just educating people in what we do. We produce these amazing annual reports. I don't know if you've seen them yet, but if you go to CNCF website, go down there, find the latest annual report, it shows the amount of events we put on, the amount of diversity scholarships that we've done as an organization, the amount of contributions we've done as an organization. 

So we just publish all that and try to educate people out there of what the organization does and how they could get involved. 

MARK MANDEL: Nice. Sounds like there's a lot of stuff that happens at the organizational level. If I'm just a lone developer, typing away at my cube, what have you done for me lately? Do you know what I mean? 

[LAUGHTER] 

What has the CNCF and the Linux Foundation do at the individual layer? Or is it just more like, I'm helping you build stuff, and that's cool? 

CHRIS ANISZCZYK: It's a combination of everything. On an individual level, we've given out, I think, last year 300 plus diversity scholarships. If you're an individual coming from wherever and you're like, hey, I want to attend my first KubeCon, we've done a lot of that. It's hard. From a Linux Foundation perspective, it's like use Let'sEncrypt.org. [INAUDIBLE] it's got free SSL certs. 

MARK MANDEL: That's true-- that's very true. 

CHRIS ANISZCZYK: Exactly. With the community bridge platform that we launched, now we offer summer code as a service anytime time for projects. And so you can go have an internship anytime of the year, instead of just a specific time. So I think as a politician, we have multiple constituents. 

MARK MANDEL: Oh, yes. I like that. 

CHRIS ANISZCZYK: We have members, we have individuals, developers. And so we try to provide services for all different types of constituents because they have different cares and needs. Back to my saying, each open source project is unhappy in their own unique way, and we our best to work with different types of people, companies, and so on to address your needs. 

MARK MANDEL: What interesting trends are you seeing at the moment across open source? Are you seeing anything that's changing the landscape over time? 

CHRIS ANISZCZYK: I don't want to talk about the whole open source licensing gate stuff going on, with companies coming up with bespoke anti-type-- I'll say cloud licenses. I think it's just a long topic. But the thing that I see the most is new industries that you would not think would have anything to do with open source, the automotive industry, the pharma industry, cities even are starting to want to collaborate and even share data amongst each other. 

So a lot of trend of new industries that you typically would not expect to do anything with open source are starting to realize that we would like to collaborate potentially with each other, and we want a fair, neutral place to do that. So we're getting approached a lot by these new industries. Even the gaming industry, getting back to our original meeting at GDC. 

MARK MANDEL: What has been the particularly challenging thing that you've been working on? Because I'm guessing there's a lot, working with varying interests and various incentives. 

CHRIS ANISZCZYK: I think it's sometimes difficult. As an organization, we are still somewhat of a small non for profit. So we are limited in resources in some ways when we start new things. Recently, I was working with Facebook on a project, a technology called GraphQL. It solves a very interesting problem. And there was a large community of folks out there that wanted to see GraphQL a neutral place. 

So it was a year plus project to make that happen, convince the right parties, work with lawyers. And eventually, that was done as a side project for me. And now that the Foundation's finally formed, it could be properly staffed. So we have this weird bootstrapping problem, where someone will come to us with an idea and let's just work on this on my side and figure out what-- eventually, I'll make it work, and then we'll get it staffed appropriately. 

So we have a bit of a resource constraint type problem when it comes to new projects because we are fairly small compared to these wonderful billion dollar companies that are all around me. 

MARK MIRCHANDANI: What's on your wish list? What are you really hoping to see soon? 

CHRIS ANISZCZYK: Like I said, my focus is CNCF, keeping our projects happy, avoiding conflict as much as possible, and making sure that we continue to grow the diversity in our community. Infrastructure as a space tends to just not be as diverse as other parts of software, in my opinion. So we do our best to ensure that we get tons of diversity scholarships for a lot of our KubeCon related events. 

I think we threw over $300,000 last year in diversity scholarships, which is the most of any open source foundation. And to continue to grow that to make sure our community is inclusive and diverse, I think, is super important and something that I'm personally passionate about at the Linux Foundation and CNCF. 

MARK MANDEL: So if I'm either a company or an individual and I want to get involved either with the Linux Foundation or CNCF, where should they go? What should they do? 

CHRIS ANISZCZYK: Generally, most people get involved at the project level. It's like, oh, I use GraphQL, I'm going to go contribute to that. Or I use Spinnaker, I'm going to go find that. Most of the times, a lot of these projects are just project first, and they just happen to live in a foundation that holds the trademark or IP or whatever. So just go to the projects that you normally contribute to. You may be surprised that they're part of the Linux Foundation. You have no specific idea. 

MARK MIRCHANDANI: There's probably people who work on this stuff and have no idea what the foundation does or anything of that nature. 

CHRIS ANISZCZYK: Yeah, we do our best to try to message. But our whole philosophy is to let the projects do what they're good at and try to stay out of the way. We don't force crazy governance or anything. We're just basically like referees and neutral holders of IP to ensure people behave, essentially. Imagine a sports match. It wouldn't be fun if you were playing in a game and one team had an advantage over another or something, and the referee wasn't really doing their job. And so we try to make sure the rules are fair and these organizations are supported. 

MARK MANDEL: If I'm a company, or even a group of people who are like, oh, I think we have a great project that would be a great fit somewhere, is there a focus area-- 

CHRIS ANISZCZYK: You go to LinuxFoundation.org, you go to Projects. I think there's-- Post a Project is a link. Go check it out there. Last year, we hosted events that probably nearly had 35,000 or 40,000 people. Go to Open Source Summit. We're doing one in August in San Diego. Go to KubeCon. We host a lot of different events out there. So that's one way to get involved with the community. But go to the website. We have a lot of information there. 

MARK MANDEL: Before we finish up, is there anything we haven't covered? Something you want to make sure that the listeners know about before we get done. 

CHRIS ANISZCZYK: No. A lot of times, the simple thing is people get confused that the Linux Foundation-- obviously Linux is a big part of it, but we do a lot more than that. A lot of people don't realize we support Let'sEncrypt.org, we fix the node IOGS things. Now that's actually OpenGS. So now the Node.js Foundation and the JSF/jQuery folks all merge into one happy entity. So just that we do a lot more than I think people realize. And so check out our website and go to our products page, and you'll be surprised what's actually on there. 

MARK MIRCHANDANI: Have you considered the tagline, more than just Linux? 

CHRIS ANISZCZYK: I lost that war of maybe we should rename the foundation. 

MARK MANDEL: Or could we just get some stickers, I think? Linux Foundation, more than just Linux. 

CHRIS ANISZCZYK: Yeah, exactly. Every time you get a free SSL cert, send a little love to Linux Foundation. We help make that happen. 

MARK MIRCHANDANI: Well, thank you very much for that. 

CHRIS ANISZCZYK: Thanks for the conversation. It's been fun. 

MARK MANDEL: Cheers. 

MARK MIRCHANDANI: Yeah, so that was a great conversation with Chris. Obviously, thanks so much, Chris, for coming in. Super, super cool to hear. I didn't know much about all these open source foundations and why they were so important in the world. And obviously, with all these different people working together, I can see why they might need a little bit of support from the higher layer. 

MARK MANDEL: Absolutely. Definitely love that. Well, let's get stuck into the question of the week. 

[MUSIC PLAYING] 

What I want to know is, if I've got Cloud SQL, how do I connect that to my serverless thing-os? That's the technical term, by the way, thing-os. 

MARK MIRCHANDANI: The thing-os. 

MARK MANDEL: The thing-os, yeah. 

MARK MIRCHANDANI: See, here at Google, we have lots of thing-os for you to use. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: Well, if you're not using thing-os, but instead, you're using something like-- oh, I don't know, the recently announced Cloud Run-- pretty good offering, I think, for most people, it turns out, it's becoming a lot easier to connecting these things. So traditionally, you might have something like, opening up your SQL to a public IP address, which is a fantastic idea and everyone should do it. 

[BUZZER] 

Do not. 

MARK MANDEL: Do not do that. 

MARK MIRCHANDANI: Sarcasm did not come across. Yeah, clearly, there's a lot of security implications with opening up a database to the outside world. So, oftentimes, people don't want to do that. So in the case of Cloud Run or in the case of serverless offerings, it can be tricky to understand, well, you can't just whitelist a few IPs or something like that. It's not as easy to connect. 

Well, thankfully, there's a cool blog post where Cloud Run talks about some recent additions they've made since the next open beta for everybody to try out, and one of them is just a very, really quick command line argument you post in called add Cloud SQL instances. 

MARK MANDEL: Oh, nice. 

MARK MIRCHANDANI: Couldn't be much easier. So if you're running Cloud Run on the hosted version, which is all the serverless, then you can just add in that command line, you pass it to your Cloud SQL instance, and you're good to go. If you're running Cloud Run on Kubernetes, so you have a little bit more structure-- and that's the Knative aspect of it-- then it's actually pretty easy to follow a different set of instructions, but you're adding a proxy in front of Cloud SQL. So you take that proxy, you connect to that instead, and you still maintain your Private Cloud SQL. 

So all the details are in the blog post. It's actually two lines, I think, if you want to add it to Cloud Run. So super, super easy, and I think that that will open up a lot more access for people to run databases, along with the serverless apps. 

MARK MANDEL: Nice. Very, very cool. All right. Well, before we wrap up today, Mark, what are you up to? What are you doing? What cool things are you doing? 

MARK MIRCHANDANI: Well, I'm working on a lot of video projects. So hoping to come out and view some customers on the East Coast soon. 

MARK MANDEL: Oh, nice. 

MARK MIRCHANDANI: Just, in general, I try to live my life without moving as much as possible. 

MARK MANDEL: As much as possible. No arm waving, no leg shaking. 

MARK MIRCHANDANI: So far, so good. I'm hoping to record the podcast from my desk next time. That would be nice. 

MARK MANDEL: That would be not good for-- 

MARK MIRCHANDANI: Could I record it from my bed? That's really the question. 

MARK MANDEL: Actually, that's good. You'd have really good audio quality because it's probably quite absorbent. 

MARK MIRCHANDANI: I hadn't actually thought about that, but now you're actually-- let me put a document together about this. 

MARK MANDEL: Yeah, anyway. Cool. What am I up to? Looks like I'll be speaking at Next Tokyo in July. So if you're in the region, please come by, say hello. August, I will be at the Open Source in Gaming day, which is right before the Open Source North America Summit. I may or may not be speaking. I have a CFPN, but I'm on committee, so who knows. I don't know. 

MARK MIRCHANDANI: Can you vote for yourself in the committee? 

MARK MANDEL: I cannot vote for myself now. 

MARK MIRCHANDANI: You know what, that makes a lot of sense. 

MARK MANDEL: It does make a lot of sense. 

MARK MIRCHANDANI: If only there was some kind of foundation to tell people how to run these. Oh, wait, we just talked about that. 

MARK MANDEL: Yep, exactly. And that's exactly the foundation that is running the Open Source North America Summit. 

MARK MIRCHANDANI: Good tie in. I like it. 

MARK MANDEL: Thank you. Excellent. All right. Fantastic. Well, I think that wraps everything up. 

MARK MIRCHANDANI: Well, Mark, good to chat with you. 

MARK MANDEL: You, too. Thank you for joining me on this episode of the podcast. 

MARK MIRCHANDANI: We'll see you all next week. 

MARK MANDEL: See you all next week. 

[MUSIC PLAYING]