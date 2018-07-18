+++
audioDuration = "00:35:13"
audioFile = "Google.Cloud.Platform.Podcast.Episode.124.mp3"
audioSize = 51118647
categories = ["Open Source", "Kubernetes", "Istio", "Hybrid Cloud"]
date = "2018-04-25"
description = "VP of Infrastructure at Google Cloud Eric Brewer, talks to Melanie and Mark all about open source at Google Cloud, distributed systems, hybrid cloud, and more!" 
draft = false
episodeNumber = 124
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "VP of Infrastructure Eric Brewer"
#image="/images/post/Don't_Panic.svg.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/Ga3atVNyFzr"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8euv68/episode_124_vp_of_infrastructure_eric_brewer/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

VP of Infrastructure at Google Cloud [Eric Brewer](https://twitter.com/eric_brewer), talks to 
[Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) all about open source at Google Cloud,
distributed systems, hybrid cloud, and more!

<!--more-->

##### Eric Brewer
[Eric Brewer](https://twitter.com/eric_brewer) is the main [inventor](https://en.wikipedia.org/wiki/Inventor) of a [wireless networking](https://en.wikipedia.org/wiki/Wireless_networking) scheme called WiLDNet, which promises to bring low-cost connectivity to rural areas of the [developing world](https://en.wikipedia.org/wiki/Developing_world). He is a [tenured](https://en.wikipedia.org/wiki/Tenure) [professor](https://en.wikipedia.org/wiki/Professor) of Computer Science at [UC Berkeley](https://en.wikipedia.org/wiki/University_of_California,_Berkeley). In 1996, Brewer co-founded [Inktomi Corporation](https://en.wikipedia.org/wiki/Inktomi_Corporation) (bought by [Yahoo!](https://en.wikipedia.org/wiki/Yahoo!) in 2003) and became a paper [billionaire](https://en.wikipedia.org/wiki/Billionaire) during the [dot-com bubble](https://en.wikipedia.org/wiki/Dot-com_bubble). Working with [Bill Clinton](https://en.wikipedia.org/wiki/Bill_Clinton), he helped to create [USA.gov](https://en.wikipedia.org/wiki/USA.gov), which launched in 2000.<sup><a href="https://en.wikipedia.org/wiki/Eric_Brewer_(scientist)#cite_note-1">[1]</a></sup> He is known for formulating the [CAP Theorem](https://en.wikipedia.org/wiki/CAP_Theorem) about distributed network applications in the late 1990s.<sup><a href="https://en.wikipedia.org/wiki/Eric_Brewer_(scientist)#cite_note-2">[2]</a></sup> Starting in May 2011 he has been on a sabbatical at Google as VP of Infrastructure.<sup><a href="https://en.wikipedia.org/wiki/Eric_Brewer_(scientist)#cite_note-3">[3]</a></sup>

Credits: [Wikipedia](https://en.wikipedia.org/wiki/Eric_Brewer_(scientist))

##### Cool things of the week

- Google Cloud Next [site](https://cloud.withgoogle.com/next18/sf/)
  - Google Cloud Next London [site](https://cloud.withgoogle.com/next18/london)
  - Google Cloud Next Tokyo [site](https://cloud.withgoogle.com/next18/tokyo)
- Cloud SQL for PostgreSQL now generally available and ready for your production workloads [blog](https://cloudplatform.googleblog.com/2018/04/Cloud-SQL-for-PostgreSQL-now-generally-available-and-ready-for-your-production-workloads.html)
- Calling C functions from BigQuery with Web Assembly [blog](https://medium.com/@sourcedtech/calling-c-functions-from-bigquery-with-web-assembly-c19c023fc755)
  - BigQuery beyond SQL and JS: Running C and Rust code at scale [blog](https://medium.com/@hoffa/bigquery-beyond-sql-and-js-running-c-and-rust-code-at-scale-33021763ee1f)
- Kubernetes best practices: How and why to build small container images [blog](https://cloudplatform.googleblog.com/2018/04/Kubernetes-best-practices-how-and-why-to-build-small-container-images.html) [youtube](https://www.youtube.com/watch?v=wGz_cbtCiEA)
     
##### Interview

- Nine faculty elected to American Academy of Arts and Sciences [blog](http://news.berkeley.edu/2018/04/18/american-academy-of-arts-and-sciences-2018/)
- USA.gov [site](https://www.usa.gov)
- Eric Brewer [research at google](https://research.google.com/pubs/EricBrewer.html)
- Kubernetes [site](https://kubernetes.io)
- 2014 Dockercon Keynote [youtube](https://www.youtube.com/watch?v=YrxnVKZeqK8)
- 2017 Google Cloud Next Keynote [youtube](https://youtu.be/h9FSqVbdHis?t=1224)
- Istio [site](https://istio.io)
- Extend the Kubernetes API with CustomResourceDefinitions [docs](https://kubernetes.io/docs/tasks/access-kubernetes-api/extend-api-custom-resource-definitions/)
- Mentors
  - [Butler Lampson](https://en.wikipedia.org/wiki/Butler_Lampson)
  - [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov)
  - [David Patterson](https://en.wikipedia.org/wiki/David_Patterson_(computer_scientist))

##### Question of the week

If I want to visualise the network traffic between pods/services within my Kubernetes cluster, is there an easy way to do this?

- Weavescope [features](https://www.weave.works/docs/scope/latest/features/) [installation](https://www.weave.works/docs/scope/latest/installing/)

##### Where can you find us next?

Mark can be found streaming [Agones](https://agones.dev) development on [Twitch](https://twitch.tv/markmandel), and
will be presenting on Agones at [Cloud Next](https://cloud.withgoogle.com/next18/sf/sessions/session/155665).

Melanie will be presenting at the [internet2 Global Summit](https://meetings.internet2.edu/2018-global-summit/), May 9th in San Diego,
and will also be talking at the [Understand Risk Forum](https://understandrisk.org/event/ur2018/) on May 17th, in Mexico City.

{{< transcript "MARK: Hi, and welcome to episode number 124 of the weekly \"Google Cloud Platform Podcast.\" I am Mark Mandel, and I'm here with my colleague, as always, Melanie Warrick. Hello, Melanie. How are you doing today?" >}}

MELANIE: Doing OK. How are you doing? 

MARK: I'm doing all right. I'm still coughing. 

MELANIE: You're still coughing? 

MARK: I'm still coughing. 

MELANIE: This will probably happen all year from now on. 

[LAUGHTER] 

MARK: Exactly. Just don't make me laugh, and everything will be fine. 

MELANIE: This is Mark. Mark now operates at coughing level. 

MARK: Exactly. But, yeah, this week, super excited. We have the VP of Infrastructure for Google Cloud Platform, Eric Brewer, joining us today. 

MELANIE: Yes. It was fun talking with Eric. He has a wide variety of experiences and background in that he was one of the key players in bringing about Kubernetes. 

MARK: Yeah. Actually-- 

MELANIE: Open-sourcing. Yeah. 

MARK: Which was super cool. 

MELANIE: It was. But before we get into the interview, as always we have our Cool Things of the Week, and we have a Question of the Week. And this week's question is, if I want to visualize the network traffic between pod services within my Kubernetes cluster, is there an easy way to do this? 

MARK: There is. 

MELANIE: Is there? 

MARK: Spoiler alert. 

MELANIE: Oh no. 

[ALARM SOUNDING] 

So-- but before we talk about that-- and that will be at the end-- Cool Things of the Week. So you may have heard of Next. Next is the big cloud event that we have-- the big cloud conference that we have on Google Cloud. And it is officially July 24th through the 26th. Tickets are now available. We'll have a link. You should check it out. And then, I know we also have some satellite Cloud Next events that are coming up. I guess it's best to say it Next? Or is it Cloud Next? I suspect marketing will get me later. 

Anyway, so the other events that are coming up is in London October 10th and 11th, and then also in Tokyo the 19th and 20th. Can you register for those dates, Mark? 

MARK: You can just sign up. Just sign up, and you'll get updates on when things are [INAUDIBLE]. 

MELANIE: It'll tell you what's going to happen and when. Cool. 

MARK: Nice. 

We also announced that Cloud SQL for Postgres is now generally available and ready for your production workloads. So pretty short one, other than it's just, like, generally available, which means you have an SLA now, which is pretty great. 

MELANIE: Yes, it is. And apparently, while it was in beta, they added high availability and replication, which was allowing it to have higher performance instances with up to 416 gigabytes of RAM. And they support 19 additional extensions. What's also really great about this is that, whilst Cloud SQL for PostgreSQL was in beta, they added high availability replication. And something else that's really interesting is that they joined the Google Cloud Business Associates Agreement for HIPAA covered customers, which is a big deal. 

MARK: Yes. Very nice. 

MELANIE: The other cool thing of the week is that our previous co-host-- 

MARK: [LAUGHING] you almost said old friend. 

MELANIE: I know. I totally-- 

[LAUGHTER] 

He's old. No. 

MARK: Good friend. Our good friend. 

MELANIE: Our good friend, who has gone off into the world and is doing amazing things. Francesc, who, of course, was one of the original founders of this podcast. 

MARK: Was he, though? No, he was. 

[LAUGHTER] 

MELANIE: I don't know. That's between you and him. I'm not getting in between that. 

Anyway, they have written this great blog post because he was working with trying to call C functions from BigQuery with WebAssembly, and he was doing this because he wanted to make the data accessible for others to be able to explore. And they have terabytes of data, and they thought it would be very cool if their data sets could be made available for anyone to easily analyze. 

And so he's got this blog post that explains how he does it. And what's fun is that he connected with one of our colleagues, Felipe, who is well-versed on the big query space, and they wrote up a blog post as well to explain how to make it go faster, and especially when you're running C and Rust code at scale. 

MARK: Yeah. Now he does these really cute tricks with using WASM to basically embed C. And then Felipe also does Rust code as well to basically make it run on top of the query using its JavaScript engine. It's kind of neat, actually. I'm kind of impressed with it. 

MELANIE: That's cool. And anything else, Mark? Because I think-- I think you might want to talk about Kubernetes. Is that right? 

MARK: Yeah. I haven't-- I haven't spoken about Kubernetes for the last 30 seconds, so I should bring that up. Another fantastic teammate of ours, Sandeep Dinesh, started a series around Kubernetes best practices. Kicking it off, he's talking about how and why to build small container images. So he has a blog post that's up on the Google Cloud Blog talking about how to use Alpine to build small images, as well as using multi-step dockable processes to also help with that pipeline. To go along with that, there's also a series of YouTube videos as well that you can watch. And we'll link to all that in the show notes. 

MELANIE: Yes. And they're also linked at the bottom of the blog. 

MARK: Yes. 

MELANIE: All right. Well, Mark, I think it's time to go talk with Eric. 

MARK: Let's go chat with Eric. 

Today I am-- I guess the term would possibly be-- a little bit giddy. I'm sitting in a small, confined room here with Eric Brewer, VP of Infrastructure here at Google. Eric, how are you doing today? 

ERIC: I am doing great. Happy to be in the little room. 

MARK: Happy to be in here. 

ERIC: It's awesome. 

MARK: Wonderful. Yeah. Thanks for coming to join us. I know we want to talk about some open source stuff, some distributed system stuff. But before we get stuck into that, can you tell us a little about who you are, what do you do here at Google, a little bit of your background? 

ERIC: Sure. I am, prior to Google, best known as faculty at UC Berkeley in computer science. And out of that work I founded a company called Inktomi, which did search engines before Google, actually, and pioneered a lot of the modern ways that we actually build what you now call cloud computing. So, for example, Inktomi was the first company to use large-scale clusters in the style that Google does now, and pioneered that as a technology for building large-scale systems. And then I've done a bunch of work in developing countries. And then for the last six years, I've been VP at Google, working on this kind of second revisit of all of the problems of cloud computing. 

MELANIE: So what does it mean to be a VP of Infrastructure? 

ERIC: It's a good question, because I believe I'm the only VP that has no direct reports. 

[LAUGHTER] 

MELANIE: How does that work? 

MARK: So, basically, you do whatever you want. 

ERIC: I am really kind of a senior architect for computing for Google-- both the cloud part and the internal part. And they kind of view my role as to help with the kind of strategy of Google Cloud, and also the tactics, but in particular, what is our technical design for how we want to build, really, the next cloud-- what we want cloud to be, versus what it's been historically. 

MARK: And I believe congratulations are in order? You just won an award? 

ERIC: I was yesterday elected to the American Academy of Arts and Sciences, which is was founded by Thomas Jefferson and others-- were the inaugural members. And it's kind of the-- so the US's elite association for scientists and artists, and also includes business people-- including Larry, and Sergey, and several other Googlers, and many people from Berkeley who I know. 

MELANIE: And I believe you also mentioned before we started the podcast that Barack Obama is part of this? 

ERIC: He is joining this year as well as a member. 

MELANIE: And we were also talking about the fact that you've actually met him. 

ERIC: I have met him, a couple of times. 

MELANIE: And he offered you a job. 

ERIC: Last time I met him was in October, about three years ago, when he did offer me a job. And his point was he kind of had a year and a half to go, maybe a little more, and he felt the main way he could have impact in that time-- because Congress was a little bit divisive-- was to work on agencies and have the agencies make progress. And he felt, correctly, that they needed technical help. And he recruited several people from the Bay area to do that. 

I, in the end, declined, in part because I like what I'm doing at Google, but in part because I have kids. It was not a good time to move to DC. But if I could serve some other time, I'd certainly consider it. I've also worked with Bill Clinton in the past, and so I'm familiar with the general impact you can have that way, which is great. But I wasn't willing to move this time. 

MELANIE: And you've helped create usa.gov, too. 

ERIC: That was the project I did with Bill Clinton in the year 2000. And that was the first federal search engine, and covered all of the US government properties at that time. That was kind of a fun project, for sure. And he was a very interesting guy to work with. And then that expanded more, in the past, without my help to cover all of the states and include other things like commerce, and ID systems, authentication for citizens to get to government services. It's quite a broad thing now, but originally it was really just a fancy search engine for all the federal content. 

MELANIE: Nice. 

MARK: Cool. Well, speaking of history, I didn't realize this, and I feel a little ashamed that I didn't. You have a long history with Kubernetes. In fact, you were there straight from the beginning. Can you tell us a little about your involvement there? 

ERIC: Sure. It started as a small project with a few different people-- Brendan Burns, Joe Beda, Craig McLuckie, and some people that are [INAUDIBLE] associated with them now-- I think people like Brian Grant, Tim Hockin. My role was to help them form it into something that made sense for Google, from a project, and, honestly, to do extensive internal sales to get Google on board that Kubernetes was a bet we needed to take, and that it needed to be open-source. And both of those were controversial at the time. 

MARK: And then, so I'm really curious, as well-- why back then did you feel like this was such an important project? I mean, obviously, it seems to have done OK now, but in retrospect I'd love to see your perspective. 

ERIC: I think the reasoning was sound, and I think the track record proves that. But the reasoning had a couple of parts. The first part is that the cloud-- especially then, but even now-- is, in my mind, way too focused about the infrastructure-- the machines, the disks. And that is not the path to productivity. The path to productivity is in thinking about services, and APIs, and how you build things that are highly available. You don't want to worry about the machines. You really don't even want to know the machines exist, frankly. It'd be nice if we could just pretend they don't exist at all. And Kubernetes is absolutely a step in that direction. 

So that was part of it. And I would say that my mission at Google is to get the new cloud to be something that's about services and APIs and has nothing to do with infrastructure. It's there, we will manage it, we will make it secure, but as a developer, you shouldn't need to know. 

The second aspect is that it needed to be open-source because it's too big a shift for Google to do by itself. If we're going to change the definition to Cloud, it has to be done broadly. And open-source is the best way to get that done. 

And I think there's a third aspect, which is, if we make the playing field about services and containers, Google has a relative advantage. If the playing field is about virtual machines, we can do that, but we started very late in that game. Whereas if you look at containers, that's something we've been doing for a decade in [INAUDIBLE]. We have vastly more experience on how to do that than anyone else. We literally invented a bunch of the pieces in Linux to make that possible, and understand them more deeply than anyone else. So we should be betting on the places that we can win. This is a place we can win. 

MELANIE: You also had mentioned to us before we started that you gave the first talk on Kubernetes. 

ERIC: I gave the launch talk at Dockercon in 2014. We released Kubernetes that day. I gave one of the two keynotes. Solomon Hykes of Docker gave the other one, where he introduced Swarm, which for a while competed with Kubernetes. 

But we had the advantage that, when we talked about Kubernetes, it was already working to some degree and people could play with it. And that really helped us get off to a good start. And, frankly, it's well designed, and it actually works. And so that was a big factor in it being able to really take this place. 

MARK: Nice. And since then, our ecosystem-- especially at Google Cloud-- of open-source tooling has really grown. We've got Istio. We've got OpenCensus. How do you see that ecosystem going forward? 

ERIC: I think it's a core part of our strategy, to be the open cloud. That was the talk I gave at NEXT in like 2016, or 17. I can't remember which one. I think it was 2017. But part of it is that we want to make workloads more mobile-- that it's to our advantage if you use open-source things that can run on-prem in other clouds and on Google, because now we're competing on operations, on cost, on technology. And that's the battle we wanted to compete in. 

So open-source inevitably allows a couple of things that are helpful to us. But the most important one in my mind, besides community, is that you can move workloads more easily to GCP over time. 

MARK: Nice. And I know you're particularly interested in Istio. Can you explain where that fits into the whole strategy of where you're seeing workloads go? 

ERIC: Istio has many things I like about it. But I think the way to think about it is, really, once you get a little bit bigger, you want to decouple the operations of your clusters from the developers who are developing new services. And the reason Istio does this is essentially that it's intercepting, essentially, traffic on its way into a service so that you can automate the telemetry you get on every service. You can automate policies about access control and DDoS. 

And so kind of all the control things you want to think about for a service you put in the Istio layer, and not, in particular, in the source code. Right? So we call this externalizing. I'm saying take all the policy stuff that you currently have hidden somewhere in the code of your macro service-- take it out, externalize it so that we can manage those things from Istio. And that has two big wins. 

First is, it makes it consistent for all your services, because now you don't have to update all your services every time you want to change a policy, which is intractable. But also, as a developer, it turns out it makes you have more freedom in the sense that you don't have to negotiate with operations what the policies should be. 

You worry about what your service does, operations worries about what the policies are, and we remove this friction that's inherent if you have to, on every call site, actually agree on what it is you're doing. So we're taking out coordination overhead, which I don't think people will appreciate till they have it. But, having been on both sides, they will appreciate it. 

MELANIE: In terms of the Nextcloud, as you were saying, what are you excited about, in terms of what would be built off of that? Once we get to a place we're able to abstract more of the actual back end? 

ERIC: Well, I actually feel like people using Kubernetes are already getting a lot of this value now, in that if you're building an application out of a collection of services. And I mean, a good example, Spotify-- Spotify was doing this model before Kubernetes existed. They already kind of bought in to you want to have APIs and services. And they had built some in-house stuff that was Kubernetes-like, actually, to their credit. But now we can give them a much stronger platform to do what they always wanted to do. 

And when you add Istio, what that means is that our operations people can actually manage a collection of services versus managing a collection of nodes. So even the language they use to talk about what it is they've built and how they're managing it has been up-leveled to something that saves them a lot of time and toil. 

MARK: There was a quote-- I'm going to attribute it to Kelsey Hightower. I think it was him, talking about Kubernetes, is you deal with the application layer and not the infrastructure layer. Does that sort of resonate for you? 

ERIC: Yes. That is absolutely-- when I say new cloud, I really mean you should worry only about the applications and services that you're trying to build. 

MELANIE: What are the biggest limitations that we have-- the barriers to the new cloud? 

ERIC: Many things, I would think. First of all, there's a whole bunch of legacy stuff that is really about which OS version do I need, and how big my nodes have to be, and how to do security patches. Those are problems that you shouldn't have to have, I would say. But there's a lot of legacy tooling around how you manage the actual nodes of OS images you're using. 

MARK: Right. 

ERIC: I would like that to just disappear, in some sense. And if you use PKE, it does disappear, because we manage the OS for you. We do the security patches for you. But there's still a lot of legacy stuff that works that way-- tooling and all kinds of things. So that's part of the challenge. 

I would say another challenge is, even kind of the core pieces like Linux itself, it kind of expects you to deal with devices for networking. Other parts of the system, like a file system, is kind of easy to abstract. You can make it look like part of a process model. The network, and devices more generally, are still very tied to the node. So we're kind of hindered by our legacy use of nodes in various places. 

But, you know, networking and devices is the one that stands out most to me at the moment. And that is not easy to fix, because changing that requires changing a whole bunch of open source software that's using the device-level interfaces-- IP tables, things like that, that are inherently part of the node. And we will change those things over time, but that's not a quick process. 

MARK: A question that comes to mind is, we talk a lot about hybrid cloud at Google Cloud, especially-- especially when we're talking about things like Kubernetes. How do you see that new cloud type of strategy, or, like, forward thinking working into hybrid cloud-type scenarios? 

ERIC: Well, we do see a lot of people using Kubernetes on-prem already. And that is because it's open source, it was very easy for people to try it, and play with it, and use it themselves. So a side effect of that is we've actually been building allies inside companies who are using Kubernetes, that will want to move those workloads to cloud over time. 

And I am pretty sure they'll find that the best place to move your Kubernetes workload will be GCP. PKE is still significantly better than any other deployment of Kubernetes. And it's managed for you. And so, if you just want to focus your application, it's the best manifestation of that vision so far. 

MARK: Is hybrid cloud-- I don't know if I want to use this right term-- but I'll put it this way-- do you think hybrid cloud is a stepping stone in the future of cloud technologies? Like we have to go through hybrid cloud to get to maybe a full cloud? Or do you think that's probably just going to continue to evolve in terms of, like-- 

ERIC: I think we have to go through hybrid cloud, and I think it's not a quick process. Moving to the cloud for a large enterprise is not going to be a single-day event. It's going to be a 10-year event. And they'll move some workloads, and then later other workloads. And they will use multiple clouds, honestly. That's fine. But what it means is if you want to preferentially get future workloads to move to your cloud, you are better off interacting with those workloads now. 

So what I think about it is, every time there's a Kubernetes cluster on-prem, and we can help it in a variety of ways, that has a net present value to us of being a future customer load that's more likely than average to be on Google in the future. We can disproportionately win more than our share of those workloads. 

MELANIE: And I'm going to play a little bit of a role that Mark likes to play in my podcasts that I drive. What exactly is hybrid cloud, for those who may not know the term? 

ERIC: It has a few interpretations, in part because different vendors want it to mean different things. So it's always going to be a little bit confused as a term. But what we mean by it is that you can have some of your workloads on-prem, some in our cloud, some in other cloud, and they start to feel like one thing and not three things. 

So an advantage to using Kubernetes and Istio is we can make these three different environments feel much more similar to each other. So, for example, if you to have a policy about which users can access which services, you can enforce that policy on our cloud, on another cloud, and on-prem in a consistent way. That's what makes it a hybrid cloud, is the consistency of policy that you can expect to get over time. 

Now, it does not always mean that I'm going to take a single workload and split it across sites. Sometimes that'll happen. It's more common that you're partitioning workloads, and some will run here, and some will run there. And that you'll be in the progress of migrating some of them pretty much all the time for the next 10 years. It's a constant state of evolving things in a stepwise, safe way. 

The other advantage hybrid has, from my perspective, is that there's a variety of reasons that certain workloads can't move to cloud today. It could be regulatory, it could be certain concerns about locality of data, or latency, or you don't have a data center in the right place for me, or we have sunk cost and we need to use out data centers for five more years. All kinds of reasons. And so there's an appetite to modernize applications on-prem using Kubernetes today, versus waiting five years, go to cloud, and then modernize. 

So part of the hybrid strategy is to decouple the movement of cloud from the modernization of your apps. You can now do them in any order, and we'll help you. And, in fact, when you have a portfolio, you'll do a mix of modernization and movement, and you can control that mix however you like. 

MELANIE: As modular as possible. 

ERIC: Yes. 

MELANIE: You were talking before about the value of open source. Do you think that there's any specific things that need to be done to help foster a more comprehensive open source community out there-- anything specific around the open source space that you are very passionate about or find exciting about where it's going? 

ERIC: It's quite a complicated space. I would say we learn-- despite having done open source for a decade-- we're still learning exactly all of the best ways to interact with open source. But I will say, Kubernetes in particular, has the strongest community I've ever seen, in terms of the rate of CLs, the relative agreement on a general direction, and the extensibility, which means that a lot of arguments are avoided because two different players can do the same thing two different ways and they're both compatible. 

So the structure of Kubernetes-- both the technical structure, but also the community structure-- has been very effective. And it's really a model, I would say, for other communities to try to follow. And it's different, frankly, than other open source efforts, even within Google. 

So, for example, open source can mean we released the source, but we control it. That's kind of the Android model. It can mean we take pull requests, but we have to moderate them all. That's kind of the TensorFlow model. And so still fairly Google-centric, but open to submissions of improvements. 

Kubernetes model is much more open than that. It's really the community is actually moderating the important changes and we gave up the trademark, meaning that the foundation owns the trademark, not Google. And the consequence of that-- which is very intentional-- is that we can't retract the use of the trademark just because you are competing with us, or just because we don't like the way you're doing it. So as an enterprise, it kind of means that you know Kubernetes and your right to use it is not revocable at Google's whim. 

MELANIE: Nice. On a slightly different track, is there anything you're excited to learn about in the next year or two? Anything particular that you would love to explore, especially if you have the time for it? 

ERIC: Sure. I kind of feel like I'm consistently behind on machine learning. And it's not that I don't know quite a bit about machine learning-- I actually do. It's another space that's moving very quickly. And I don't see how anyone could keep up with both Kubernetes and machine learning and do it authentically. 

MELANIE: I agree with you completely. That's why we're both here. 

ERIC: So I have some homework to do on that front. And I have some actual test projects that I'd like to do at some point. But I'm not getting to them. So we'll see where that goes. 

MELANIE: I'd like to see when that happens. By the time you probably get to them, something will have been built to be able to just automate it for you, or take care of it for you at that point. 

ERIC: I can say one funny thing, though, which is that when I learned about AI in school, it was kind of a mess of a topic, including expert systems. But one of the topics was neural nets, which then went out of favor for quite a long time. But it's one of the parts I know better than others because it was still in favor when I was taught the material. 

MELANIE: Well, that's a good one to know, with the way thanks have been going lately. 

ERIC: Turned out to be pretty good. But it actually turned out not to be that helpful, because the field has advanced so far that knowing the basics of it is not as relevant as one might expect. But it's still kind of useful. 

MELANIE: Definitely. 

MARK: So, I'm wondering, looking forward-- and I'm guessing there is obviously a lot of stuff you can't talk about-- but are there particular areas, either open-source or Google, that you think people should, say, keep an eye on, or that you think are going to rapidly evolve in a really positive direction? 

ERIC: Well, certainly the short-term ones are, there's a ton going on in the hybrid space, and particularly about how do you create collections of clusters that span different environments and that you can actually manage as a single thing? And, again, that's something that has to be done. Google can lead it, but it can't be done by Google alone. It's a big project that fundamentally is going to involve a lot of partners. And we'll see a lot of progress on that this year, for sure. 

MELANIE: So we know KubeCon is coming up, and this is the big Kubernetes conference. Can you tell us a little bit about that and your involvement? 

ERIC: This is KubeCon Europe in May, in particular. And I've been to many KubeCons, but I haven't been to one in Europe yet. So that'll be good. Each continent has its own kind of flavor of KubeCon. So it will be good to see what's different about this one. And that is one of the reasons I'm attending. 

There's a bunch of things I care about. So certainly the hybrid stuff I care about. I gave a talk at the last KubeCon on that. And there's more coming on that front. But also there's a ton of interesting stuff on machine learning in Kubernetes, on aspects of networking and management, a lot more users are now in production with Kubernetes. So we'll hear some of their stories, especially in Europe. That'll be great. 

But also, honestly, it's, again, hard to keep up with this space, and going to KubeCon just forces me to spend three days deep in it and make sure I'm caught up again. 

MELANIE: And see what's new, and what's coming. 

MARK: What's been your most exciting thing that you've seen somebody either, like, extend or build upon Kubernetes that you've been, like, that's really cool? 

ERIC: That's a good question. Yeah. One thing I think is interesting is people using clusters that are disconnected from the rest of the internet, as a way to do a highly available distributed system. So if you want to run something highly available and you are worried about network connectivity, having a local Kubernetes cluster turns out to be an excellent way to do it. And I've seen a few-- I'm not sure which customers I can talk about, but you can kind of guess that, if you have a oil platform, or you have a retail store that's in a remote location, you might want to have some local computing that can keep your store online even if your network is down. 

MARK: That's super cool. I never actually thought of that. That's very cool. 

MELANIE: Definitely. 

ERIC: And Kubernetes, because it's made to support high visibility, is a very good fit for that. 

MARK: So that sounds like a really great customer use case for someone who is using Kubernetes. I know I do a lot of stuff extending Kubernetes. I think that the extension mechanisms are really exciting. Have you seen any particular extension mechanisms, or the extension of Kubernetes as a platform for distributed systems, that you've thought has been particularly inspiring? 

ERIC: Well, assuming you mean CRDs as the extension mechanism, which is kind of this API to have your own resources with their own calls, that is a fantastic mechanism. And it's really, I think, one of the secrets to Kubernetes success. And it's a subtle one, because it's not something you even necessarily learn about the first few times you play with Kubernetes. But once you want to do something with it that's not what it does, it comes into play. 

And the real reason it's an important part is, again, it means it's much easier for different players to make different changes and have them feel Kubernetes native and have them work together. 

MARK: So, for those who don't know, CRD-- like custom resource-- 

ERIC: Custom Resource Definition. It's kind of like you make your own little nouns and verbs that extend the Kubernetes model. But if you do it this way, then all of the kind of Kubernetes tooling, including the command line interface, actually just support your new extension. And that makes it very easy to integrate into existing systems. 

MARK: Are there any particular examples of that that come to mind? 

ERIC: We're using it, for example, the way we want to manage multiple clusters is just an extension of that. That's important because, again, we're going to have clusters on-prem and in different clouds, you'll need to actually make sure that you can manage them all. I feel like anyone that wants to do kind of functions as a service platform is going to want to use that kind of extension. Anyone that wants to do a domain-specific version of Kubernetes, where you kind of narrow the scope and say, maybe it's for machine learning, or maybe it's for, I don't know, for retail. That actually ends up being a way you can do that. 

But I think the main thing about it is that, because it integrates with the tooling, because you can kind of have many of these things co-loaded, it's very flexible and avoids a lot of conflict. 

MELANIE: So in terms of your career and the work that you've done, who have been some of the mentors or the people that you've been inspired by as you've been going down your path? 

ERIC: It's a great question. And there's always a bunch. And you never quite know who it's going to be. But, let's see-- on the technical side, I would say three people that stand out, technically-- Butler Lampson, who is now at Microsoft-- a famous computer scientist and Turing Award winner who was on my PhD committee at MIT. 

Barbara Liskov, who was my first advisor at MIT and later won the Turing Award, and one of the great women in computer science, and introduced a bunch of things that we take for granted, like abstraction-- the idea that you might want to have an abstract notion of what something does behind an API. It's so obvious now, but someone had to do that. It doesn't come from nothing. And, in fact, I think she got the Turing Award a little later than she should have because it was too obvious. 

[LAUGHTER] 

Which is a totally unfair judgment. 

MELANIE: Right. 

ERIC: And this year's award winner Dave Patterson, who was one of the first faculty I worked with in detail at Berkeley. I got to Berkeley in 1994, worked on the NOW project, which is about to have its 20th anniversary, because we measure the anniversaries from the end of the project. That's the project that led to cluster computing for the internet and Inktomi, and is, in some ways, the reason I won the Sciences award, for that train of work on cluster computing and large-scale services. 

And so that case is not so much the Dave was the technical influence, although he's great technically. It's that he is a great leader and showed how to do a group project versus an individual project. So then our project had four faculty involved. I was, in some sense, the fourth-- the junior guy. And they were very welcoming to me, and also just taught me a lot about how is it you do research, how do you engage students, how do you get things done and have impact, and even what your goal should be-- the goal should be impact. And I've kind of followed that advice forever. 

MELANIE: Agree. Any resources that you'd recommend for anything that you particularly find that you're a fan of around the Kubernetes space, or on containers, or on distributed computing? 

ERIC: Well, you mentioned Kelsey Hightower. Anything he says is worth watching, and I enjoy the time I get with him. And he's a nice complement to me, in the sense that I have some academic background he doesn't have-- not that he's not super-sharp-- he is. But he has a tremendous sense of the on-the-ground reality for Kubernetes. And he can keep me honest when I'm being a little too ivory tower-ish. 

MARK: Right. 

MELANIE: Nice. 

ERIC: So it's a great relationship for me, but also I feel like it's something that everyone can benefit from. And he often can make-- Kubernetes, which is, frankly, overly complicated-- we can talk about that, if you like-- he can show you the simple ways to get to what you want to do. And that is a true art. 

MARK: Unfortunately, we're heading up on the half hour. But before we wrap up, is there anything you haven't mentioned, or anything you want to make sure that is on the podcast that our listeners hear about before we finish up here? 

ERIC: I guess I would say that you should think about all the toil that you have, and the job you might have as a developer, and how much of it we should be able to get rid of over the next few years. Because part of the move to Kubernetes is to reduce the toil. And the simple things we can already do, like you're less aware of your node, and we can patch the OS for you. But we should be able to automate a bunch of things, like we're looking at automating the testing process much more. And maybe we can tell you, you know, you're running a bad version of OpenSSL-- you might want to get rid of that. That's something we can scan for, and we should be able to tell you, and maybe, if you'll let us, we can automatically patch that to you. 

So there's a degree of automation that's possible when you get to this higher level abstraction that's not possible if all you have is the OS image and the nodes. And, by the way, that also enables a huge new use of AI, which is have the AI tell us what changes you should make to your thing. Because we actually now have data, and we are talking at a higher level abstraction, which helps reasoning of all kinds-- human and artificial. 

MARK: Excellent. 

MELANIE: I agree. That'll be a wonderful thing, to be able to have more automation to help with that as well. Thank you again. We really appreciate you coming on to the podcast and sharing all things Kubernetes, containers, distributed systems, and hearing about your mentors, too. That was wonderful. Thank you. 

ERIC: My pleasure. 

MARK: Thank you so much. 

MELANIE: Well, Eric, thank you again for joining us on the podcast. It was wonderful to hear about open-source distributed systems. Well, actually, what I think I enjoyed most about that was hearing about his mentors. 

MARK: Yeah. That was cool, too. 

MELANIE: Yeah. Anyway, so Mark-- if I want to visualize the network traffic between my pods within a Kubernetes cluster, is there an easy way to do this? 

MARK: There is an easy way to do this. 

MELANIE: What? 

MARK: I've actually tweeted about this a lot. This is a secret presentation weapon that I have. Yeah, so don't tell anybody. 

MELANIE: Shh-shh. 

MARK: (COCKNEY ACCENT) Yeah, this it top-secret stuff here, all right. Totally classified. Don't tell anyone-- not a soul. 

Shh. 

Be very, very quiet about it. There is a great open-source project from a company called Weaveworks where they have a thing called Weave Scope. And it's super pretty, if nothing else. Basically, you can install it on top of your communities cluster, or they have a managed platform as well. 

But what it gives you, which is really nice, is a really beautiful, topographical visualization of exactly what's happening inside your clusters. So you're seeing pods, and services, and all that kind of stuff. But it also introspects your network traffic, so you can actually see which systems are talking to which systems, which systems are talking to the public internet, that kind of cool stuff. And it just gives you a really great way to visualize exactly what's happening inside your system, and whom is talking to whom. 

MELANIE: I like it when I can actually see what's going on, and they show you some visuals on that. 

MARK: Yeah. So usually I use that a lot when doing presentations, because it's really pretty. And then it gives you a really nice visualization of what's going on, and you can zoom in, and out, and that's pretty neat. 

MELANIE: I'm enjoying saying Weaveworks. 

MARK: Weaveworks. Yes. 

MELANIE: It's a good name. All right. Well, Mark, are you going to be anywhere in the next couple of weeks? 

MARK: I'm still not traveling very much, but I am actively streaming a lot, which has been lots of fun. So you can find me on twitch.tv/markmandel. I know you're popping around and about. What are you up to? 

MELANIE: I will be speaking at the Internet2 Global Summit on May 9th in San Diego, and then I'm going to be talking at the Understand Risk Forum on May 17th in Mexico City. And that's where you can find me. 

MARK: Are you speaking at NEXT, since we were talking about NEXT? 

MELANIE: I am not, but are you? 

MARK: I am speaking at NEXT, so I'll be speaking at NEXT on [INAUDIBLE] and talking about how you can run game servers at scale on top of open-source software. 

MELANIE: Fabulous. 

MARK: Awesome. Melanie, thank you so much for joining me for yet another week. 

MELANIE: Thank you. 

MARK: Thank you all for listening, and we'll see you all next week. 
{{< /transcript >}}