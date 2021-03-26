+++
audioDuration = "00:27:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.140.mp3"
audioSize = 40705766 
categories = ["Container Security", "Borg", "Kubernetes", "Google Container Registry"]
date = "2018-08-01"
description = "This week, Melanie and Mark learn all about the three main pillars of container security and more with our guest, Maya Kaczorowski."
draft = false
episodeNumber = 140
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Container Security with Maya Kaczorowski"
image="/post/episode-140-container-security-with-maya-kaczorowski/images/hero/hero-EP-140.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/DCwjX6DA8B3"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/93qja4/episode_140_container_security_with_maya/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

Let's talk container security! This week, [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) learn all about the three main pillars of container security and more with our guest, Maya Kaczorowski. 

<!--more-->

##### Maya Kaczorowski

[Maya](https://twitter.com/MayaKaczorowski) is a Product Manager in Security & Privacy at Google, focused on container security. She previously worked on encryption at rest and encryption key management. Prior to Google, she was an Engagement Manager at McKinsey & Company, working in IT security for large enterprises and before that, completed her Master's in mathematics focusing on cryptography and game theory. She is bilingual in English and French.

##### Cool things of the week

* What a week! 105 announcements from Google Cloud Next '18 [blog](https://www.blog.google/products/google-cloud/100-plus-announcements-from-google-cloud-next-18/)
* Keynotes, Keynote Fireside Chats, & Spotlight Sessions: Google Cloud Next '18 [videos](https://www.youtube.com/playlist?list=PLBgogxgQVM9vwKIHmv0G31J-0Ey75W5MR)
* All Sessions: Google Cloud Next '18 [videos](https://www.youtube.com/playlist?list=PLBgogxgQVM9v0xG0QTFQ5PTbNrj8uGSS-)
* Sign up for NEXT '19 updates [site](https://cloud.withgoogle.com/next18/sf/)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
* Edge TPU [site](https://cloud.google.com/edge-tpu/)

##### Interview

* Def Con [site](https://www.defcon.org/)
* Black Hat [site](http://www.blackhat.com/us-18/)
* BSides Las Vegas [site](https://www.bsideslv.org/)
* Cloud KMS [site](https://cloud.google.com/kms/)
* Kubernetes [site](https://kubernetes.io/)
* GCPPodcast Episode 46: Borg and Kubernetes with John Wilkes [podcast](https://www.gcppodcast.com/post/episode-46-borg-and-k8s-with-john-wilkes/)
* Large-scale cluster management at Google with Borg [research](https://ai.google/research/pubs/pub43438)
* Open-sourcing gVisor, a sandboxed container runtime [blog](https://cloudplatform.googleblog.com/2018/05/Open-sourcing-gVisor-a-sandboxed-container-runtime.html)
* Kata Containers [site](https://katacontainers.io/)
* Nabla Containers [site](https://nabla-containers.github.io/)
* Google Container Registry [site](https://cloud.google.com/container-registry/)
* GKE security overview [doc](https://cloud.google.com/kubernetes-engine/docs/concepts/security-overview)
* KubeCon [site](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2018/)
* Container security blog series [blog](https://www.google.com/search?q=site%3Acloudplatform.googleblog.com%20exploring%20container%20security)
* GKE hardening guide [doc](https://cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
* Seccompsandbox [wiki](https://code.google.com/archive/p/seccompsandbox/wikis/overview.wiki)
* Docker seccomp profile [site](https://docs.docker.com/engine/security/seccomp/)
* Using RBAC in Kubernetes [blog](https://kubernetes.io/blog/2017/10/using-rbac-generally-available-18/)
* Terraform [site](https://www.terraform.io/)
* Helm [site](https://helm.sh/)
* Google Container Registry: Getting Image Vulnerabilities [doc](https://cloud.google.com/container-registry/docs/get-image-vulnerabilities)
* Container security overview [site](https://cloud.google.com/containers/security/)
* GCPPodcast Episode 110: CPU Vulnerability Security with Matt Linton and Paul Turner [podcast](https://www.gcppodcast.com/post/episode-110-cpu-vulnerability-with-matt-linton-and-paul-turner/)

##### Question of the week

How do I setup SSL termination on Kubernetes with [Let's Encrypt](https://www.letsencrypt.org/)?

* GitHub: Tutorial for installing cert-manager to get HTTPS certificates from Let's Encrypt [site](https://github.com/ahmetb/gke-letsencrypt)
* [Ahmet Alp Balkan, DPE on Google Cloud](https://twitter.com/ahmetb)

##### Where can you find us next?

Mark will be at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/) starting August 28th.

Melanie will be at the [2018 Nuclear Innovation Bootcamp at Berkeley](https://nuclearbootcamp.berkeley.edu/) on August 6th.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 140 of the weekly Google Cloud podcast. I'm Mark Mandel. And I'm here, as always, with my colleague, Melanie Warrick. Hey, Melanie. How are you doing?" >}}

MELANIE: Hey, Mark. I'm doing good. I survived Next. How about you? 

MARK: Yeah, it's the Monday after Next. Still getting over it. It was a big event with lots of people, but it was pretty amazing. 

MELANIE: Lots of recordings. We also recorded 17 interviews during Next. 

MARK: Oh, my. 

MELANIE: Yeah, 17. 

MARK: That's a lot. 

MELANIE: It is a lot. 

MARK: It's a lot. 

MELANIE: But it was good. 

MARK: Yes. 

MELANIE: It was. And we will be sharing a lot of these interviews over the next couple of months. And one of those actually being this week. 

MARK: Yes. So who are we talking to today? 

MELANIE: We're talking to Maya Kaczorowski, who is here to talk to us about container security today. And we're doing this interview specifically because next week will be DEF CON, the big brouhaha over in Vegas for all the security stuff. DEF CON, Black Hat, BSides, Diana Initiative. There's all kinds of stuff that's happening. And that's all week next week. 

And so we thought let's kick off prior to that with a little bit of information around container security. 

MARK: Yeah, great interview. 

MELANIE: But before we do that, as always, we have our cool things of the week. And we're going to end with the question of the week. And this week's question Maya also helped give this to us, which is, how do I set up SSL termination on Kubernetes with Let's Encrypt? 

MARK: Yep. So we'll be looking into that. 

MELANIE: But Mark, what are our cool things of the week? 

MARK: Oh, my God. There are so many cool things of the week. We just had. Next 

MELANIE: I know. We talked about all these last week, right? 

MARK: Yeah, we did. So rather than trying to go through all of them, I'm just going to link to the blog post that is "What a week! 105 announcements from Google Cloud Next '18." 

MELANIE: That's a lot of announcements. 

MARK: That's a lot of announcements. It's a good article. It goes through customers, partnerships, Chrome stuff, AI and machine learning on Google Cloud, infrastructure services, application development, data analytic services, databases, IoT, security, G Suite stuff, some social impact stuff as well, and finally, the 105th announcement being that Next 2019 will be April 9 through 11 next year. 

MELANIE: So we have less than a year to get ready for that one. 

MARK: Yeah, so basically by the time you read this article and go through all the new announcements, it will be ready for you to go to Next next year. 

MELANIE: Exactly. 

MARK: Yeah, it's a good one. 

MELANIE: We also have links to the keynotes, keynote fireside chats, and spotlight sessions. These are all videos that are on YouTube. We also have the links to all sessions for Google Cloud Next '18. Again, also on YouTube, so you can check out any of the videos about the different sessions that took place. There were several sessions. I said-- I think, Mark, you said at one point it was almost around 500. 

MARK: It's something like that. I should actually go confirm it. But yeah, I think it's about that many. 

MELANIE: And then we also wanted to highlight real quick just from all the people we talked to, I know two things in particular are coming to mind that I feel like I heard people very excited about. Those were GKE On-Prem. 

MARK: Yep. 

MELANIE: And Edge TPUs. So not to say there aren't many, many announcements to be excited about. Just those are ones that commonly bubbled up to the top when we were talking to different participants. 

MARK: And actually I'll make it a highlight as well. If you go into the Keynotes, Keynote Fireside Chats, and Spotlight Sessions playlist, there's some really great five-minute synopses of the keynotes themselves. So if you don't want to sit around and watch the whole thing for an hour, they are great. So you can do that if you just want a quick summarization. There are some really great little short videos in there that you can just have a watch at. 

MELANIE: Agreed. 

So Mark, I know we talked about this last week, but I have wanted to ask. You've been at Next now three years in a row. 

MARK: Yeah. Before it was called Next. 

MELANIE: Before it was called Next. How did this one compare to the last two? 

MARK: It was definitely a lot bigger. 

MELANIE: OK. 

MARK: It was definitely a lot better. 

MELANIE: OK. That's an easy answer. 

MARK: And it's interesting. I feel like when I first started, we were doing events for Google Cloud at the time. Before it was called Next, I think it was called GCP Live. I'll actually have to go back and look. I mean, it was small. It was really small; a few hundred people. 

I remember teaching Codelabs in a basement. That was sort of the first thing we did way back about three years ago. And then from there, we went to the Pier Building, where there were several thousand people, to Moscone last year. So it was about 10,000. This year, another 100%, right? 20,000, 25,000 people. 

It's kind of amazing and kind of impressive, the amount of investment that's gone into Google Cloud as a whole over the last three years. 

But yeah, I think this year was great. I had an absolute blast. It was great to see everyone. 

The only thing with it being so big is that I didn't get to spend as much time with as many people as I wanted to. 

MELANIE: Yeah. 

MARK: But still, it was pretty-- it was an amazing event, like really amazing. 

MELANIE: It was very difficult to take in all the things that were happening. That's for sure. 

MARK: Yeah. 

MELANIE: But it was wonderful, what we were able to experience. 

One other cool thing of the week that I want to mention that's not Next related, that we didn't mention last week. We have a habit of not necessarily announcing certain things on the actual show itself and just talking about it on Twitter. 

But we have a new website. 

MARK: Yes. It's really nice. 

MELANIE: We have an update to our website. We did this two weeks ago. 

It's like when we hit the million mark and we forgot to mention it on the actual show. 

MARK: That's true. 

MELANIE: So we did an update to the website. If you haven't seen it, it's all a beautiful, new look. Please check it out. Let us know what you think and if anything is broken. 

MARK: Yes. 

MELANIE: So we can make sure it's fixed. But yeah, a new website. 

MARK: We soft launched it. That's why we didn't tell anybody. That's why. 

MELANIE: Soft launch. I know. 

MARK: It was a soft launch. 

MELANIE: I know. 

MARK: Yeah, it was a soft launch. This is the hard launch. 

MELANIE: Is that what it is? OK. 

MARK: Yeah. 

MELANIE: It sounds like a plan. 

MARK: Anyway. 

MELANIE: We were testing it all throughout Next, which seemed like a good idea. 

MARK: Exactly. 

Why don't we go check with Maya. 

MELANIE: I think that's a great idea. 

MARK: So we're super excited to have Maya Kaczorowski joining us today. Product manager container security Google Cloud joining us here on the Next show floor. 

MAYA: Thank you so much for having me. Yeah, it's great. 

MARK: Thank you so much for joining us. It's so great to have you here. 

MELANIE: Yes, we wanted to definitely talk to you, because we've got a-- well, we're going to be releasing this the week after Next. And we've got a reason for that, which is the fact that there's DEF CON coming up the week after that, which we'll get into a little bit more later on. 

MARK: Wait. So is this the week after next or the week after next? 

MELANIE: The week after next. 

MARK: OK. Cool. 

MAYA: Can you imagine being how security people are so stressed out right now? They're like, I have to be at Next. Then I get to work for like five days. And then I have to go to Vegas. 

MELANIE: It's actually funny that this is stressful. Anyways, so Maya, I guess, let's start out with, who are you? What do you do? 

MAYA: Yeah, I'm a product manager on the security team of Google Cloud. I've been at Google for almost three years. Part of that I was a management consultant, did some work in security for large health care, financial insurance companies. And at Google, I was the PM for Cloud KMS until about nine months ago. Then I transitioned over to container security. 

MARK: Very cool. OK. What's container security? 

MAYA: Yeah, that's a great question. 

Let's start with like, do we assume people know what a container is? Is that a fair assumption? 

MARK: Let's go there. Yeah, high level. 

MELANIE: Great question. 

MARK: Why don't we start there? 

MAYA: OK. So a container is a simpler way of packaging some of your software up to make it more portable and do better bin packing on your computer. So rather than having a VM, which is somebody else's or your hardware, and you just kind of care about the OS, a container you care about even less than that. You just package the application with binaries and libraries into a container. And then you can run it on a minimal OS that can be kind of arbitrary and anywhere environments. 

The idea being you can move this thing around really easily, but it's kind of hard to manage these things in scale, which is what Google learned more than a decade ago internally. And so internally, we created Borg a long, long time ago and externally created Kubernetes about four years ago now. 

And Kubernetes is a way for you to-- it's a container orchestration platform. It's a way for you to manage containers in terms of right-sizing them, scaling things up and down, load balancing, et cetera, groups of containers. 

So container security-- 

MELANIE: Yes. Yes. 

MARK: I will make a small segue. Episode 46, we did an episode on Borg with John Wilkes. So if you want to learn more about Borg, go back and hear about the history of Kubernetes. 

Anyway, please continue. 

MAYA: Awesome. So we're thinking about container security at Google in three main pillars or three main areas. 

The first ones is what we'll call infrastructure security. So making sure that your containers are secure to develop. So this is around configurations you're putting into Kubernetes or Kubernetes engine. Things like seeker management, networking, identity and access management, et cetera. All these things that you need to have in your infrastructure for this thing to work. 

The second area is what we're calling software supply chain or making sure that your containers are secure for-- your container images are secure to build and deploy. So how do you know that your images are free of vulnerabilities? How do what the dependencies that you have are, that it came out of your build pipeline, et cetera, before you deploy them? 

And then the third area is what we're calling container runtime security or making sure that your containers are secure at runtime. And this is around making sure-- it's traditional security operations. So if somebody attacks your container, if you have an attempted container escape, et cetera, how do you identify that, mitigate it? Can you do forensics after the fact to see what actually happened in your environment and then track that? 

MELANIE: So what is different about securing containers compared to VMs. 

MAYA: Sure. I mean, at a high level, not a lot in the sense that I think security people are very worried about this model. We're like, ah, I don't know what these containers are. I don't know what Kubernetes is. I don't want to have to learn all this new stuff. 

It's not that bad. If you had a network firewall before, you still need a firewall to get an IDS IPS before you still need one. You still need identity management. You still need seeker management. All these things are the same. 

The plugability points are a little bit different. 

I think some of the main differences, though, are one is this minimal OS, as I mentioned earlier. Compared to a VM, you can have a much smaller host operating system than you do on a virtual machine. 

And what that means is if you're doing it right, that thing is tiny and you patch that super regularly. It shouldn't have any vulnerabilities that somebody can exploit. And that actually makes your overall system safer, because you have a smaller surface of attack. 

Another major difference between containers and VMs is, I think, one of the talking points against containers, as people were saying, hey, I don't have as good isolation with containers. I don't have this hypervisor, which I have with VMs, that provides strong isolation, security isolation between my systems. 

And that was sort of true until Google released gVisor and these other projects in the open source, like content containers and Nabla containers that provide container-level or actually pod-level in Kubernetes isolation. 

So one of the counterarguments against using containers from a security point of view is now one of its strengths. You can use the same strong isolation at a container level and still have the bin packing and the benefits of using containers that you were aiming for in the first place. 

MARK: Does that mean that we should be running all of our containers under something like gVisor? Or is it fine what we're doing now? 

MAYA: That's a great question. I think gVisor is meant to be a most-purpose sandbox on an all-purpose sandbox. So gVisor filters about 150 comments as calls, and prevents a process from running things that it shouldn't run. It's not going to be perfect for every single application you're going to want to run in your environment. 

That being said, we use gVisor internally at Google to run some of our services. And also kind of answer not a question that you asked. You said, should I run all my containers in gVisors? I'll say, should you run all your things on containers? What a great question, Mark! 

Not necessarily, but that's certainly Google's model. So the reasons we can do things like live migration is because we have Borg. So we have these whole packages of things, including your containers, which run inside our containers. And we can move them around easily and patch the underlying infrastructure without taking it down. And that's the beauty of using something like containers. 

MELANIE: Actually, on a side note, I'm curious, what would you not run on containers? 

MAYA: I think anything that has specific hardware dependencies I would probably not attempt to do right now at least. So if you have some very, very custom stuff on bare metal on-prem, like it's OK, like not the first workload I go for. 

And then the other end of the spectrum is the functions, right? Something that's super simple that it's too heavyweight to spin up a container. Don't bother. 

MARK: So actually, I was also going to go follow up and say, is it also possibly a question of what trust you have in the software that you're running? If you're like, this is my software. I know where it came from. And I know what it's doing. So I'm like, that's OK. But if I don't know where the software is coming from, then maybe that's something I'd put inside gVisor or something like that. Would that be fair? 

MAYA: That's a great point. So we think about software as the level of trust that it has as a continuum. Nothing is fully trusted. Nothing is fully untrusted. This is very security person messaging. 

But more trusted software might be software that you build, might be software that your developers have signed, et cetera, that's from you internally. And yeah, you're probably OK running one developer's software from your company next to another developer's software. And that's fine, short of some insider risk. 

On the other end of the spectrum, you're running some third-party arbitrary code, some plug-in that you downloaded from GitHub that you don't really know what's in there. We have some customers who are running-- their customers provided data in containers. And in that particular case, I would be worried. Not so much about like a container escape, but like around one workload affecting another workload in terms of resource use. 

MARK: So actually-- and I think you alluded to this before as well. Are there tools that we can use for container security so that we know, hey, this came from our developers, or hey, this is actually the thing that I was meant to download, and I downloaded it. And it wasn't a problem in somewhere between. And stuff like that. 

MAYA: Yeah. So typically, when you're setting up your environment, you're going to have a container registry of some kind. You're going to have somewhere you put all your images. And Google offers what is called Google Container Registry. We're great at naming. And it integrates with GKE. 

And the idea being you store all the stuff that you want there. You can check things like, did this go through QA and testing, all of that before deploying? What we actually just announced at Next is binary authorization. 

So binary authorization is a way for you to enforce that the container images that you deploy are those that you authorize, that came out of your pipeline. So the main use case we're going for here is, I have a built pipeline. I'm using CircleCI, [INAUDIBLE], Jenkins, whatever it happens to be. And I give that thing a private sign-in key. It signs that it did in fact build that image. And then I have an emission controller that enforces, did that signature exist on the image before I deployed? And if the signature does not exist, it will not be deployed. 

So that's called binary authorization. 

Some other cases you can imagine around that are things like, hey, I don't want to deploy images that have known vulnerabilities. I only want to deploy images that came out of my particular repository, et cetera. So you can think about that type of policy management in that space. 

MELANIE: You were saying before about gVisor. Where would that play a role in the way this is built out? 

MAYA: Yeah, I think gVisor is a great tool for anytime you have untrusted workloads that you want to try to bin pack closer together. 

And then if you also have even trusted workloads that you think that are still going to work fine, like to me that seems like a no regret move. Why wouldn't you want to do a little bit more work and get a lot more security? 

MELANIE: Out of the three areas that you mentioned in terms of security, one question that comes to mind is, what's the hardest to be able to secure for containers? 

MAYA: I think we're seeing people kind of shift from left to right, in that the first one being infrastructure, then software supply chain, and then container runtime. A lot of developers are still focused right now on, how do I make Kubernetes secure? And what are the best practices I follow there? 

And where we're sort of failing as a community is that it's so hard for a developer to understand what they need to do. What I mean by that is I mentioned I started working in container security about nine months ago. I thought it would take me like a month or two to figure out what was going on in the space, and I'd be like, yeah, yeah. Then I've got container security figured out. It'll be fine. 

And it really took me four or five months to sort of get a good handle on what was going on. And I was like, oh, man. I'm getting old and tired. And like why is this taking me so long? I'm not as good as I used to be. This is terrible. And then-- 

MELANIE: Imposter syndrome going on there. 

MAYA: That's not common at Google at all. What are you talking about? 

And then I want to KubeCon in Copenhagen this past May. And at that point in time, I had a pretty good understanding of what was going on. And so many people came up to me and said, how do I set up a network policy? What is our back? And should I use that? 

And these are-- to me, these are the basics in container security and Kubernetes security. And it kind of hit me. It was like, oh, my God. This is way too complicated for anyone. 

MARK: Right. 

MAYA: And so the challenge I think we have right now is not so much that-- sure, there are areas that the tooling doesn't even exist yet, or we haven't figured out how to solve the problem yet, but the stuff that we have built is pretty hard to use for an average developer, or the defaults that are there aren't great for the average developer yet. 

So there's a lot being done in Kubernetes and the open source to improve that. But if you're starting off from scratch, go to the Google hardening guide, and you'll find lots of different people's opinions as to what you should do. 

MARK: So what are you your opinions on best practices? Both probably on the container side and on the Kubernetes side as well. 

MAYA: On the Kubernetes side, there's a piece of documentation on the GKE site, g.co/GKE/hardening, which is our hardening guide. And it goes through what is hardened for you already in GKE and what else you need to do. 

Some really basics are, hey, you should probably use RBAC. If you're using the Kubernetes engine, use IAM at the project level, and then use RBAC at the cluster and namespace level. 

Set up a network policy so pods can talk to each other by default within the cluster. That's great if you're developing. That's terrible if you're having supersensitive workload running next to each other in the same cluster. 

And then from there, just some things like setting a seccomp profile is a great choice. You can enable that using pod security policy. It provides a pretty strong security default for your containers. 

MARK: Can you explain what a seccomp profile is? Because I have vaguely an idea. 

MAYA: Yeah, a seccomp profile is a-- seccomp is secure computing mode. And it puts your container sort of like in a one-way secure state-- and I'm doing air quotes here-- where it can run a certain set of syscalls. And if it tries to run things like a secreturn and exit. If it tries to run any other set of syscalls, then it will be terminated. So it's preventing your container from potentially running something that would be unsafe. 

And there's a pretty good default out there. It's the Docker seccomp profile. It blocks about 150 uncommon or barely used syscalls. So that should probably work for your application, but test it out, obviously, before you deploy it. 

MELANIE: I know you've mentioned RBAC before, but I don't know what RBAC is. 

MAYA: Oh, sorry. RBAC. RBAC is a Role-Based Access Control. It's a way of thinking about policy management. It's a generic term for thinking about policy management. In Kubernetes specifically, it's how you bind the access to certain resources, like pods, or deployments, or namespaces to individual users. 

And so you would to create a role that has a set of permissions on a particular resource. For example, I can read this pod. And then you would bind that between-- the role to a user. 

The idea then you can change the bindings. So if somebody quits their job tomorrow, rather than removing individual permissions, you just remove the role. And then they've lost those permissions. 

MELANIE: That's great. Do you have any tools that you'd recommend for people to use to automate security in this space? 

MAYA: I see a lot of people using some sort of templating language. So Terraform is pretty popular, or Helm. That's typically the choice people go with. 

MARK: Is there any sort of automated tools for just making sure there are no vulnerabilities in my containers? Is that a thing? 

MAYA: Yeah, so you probably don't look at vulnerabilities in your images, because what's pretty cool about containers versus VMs and things is that rather than changing single lines of code, you actually change that line of code, but then you redeploy the whole container. So you have this enforcement point, which is your deployment point, where you see everything that ends up in your infrastructure. 

So actually what that means is you get this very powerful way of patching your infra, which is that if you just patch your images on a regular basis, you can kind of passively deploy the patch. As containers die, it will grab the latest image and get redeployed, which is amazing, right? Which is again, think back of like how Google does live migration with Borg. And this is why we can do things like that. It's genius. 

So specifically, how do you patch your images and how do you know what the vulnerabilities are? Google just announced Google Container Registry vulnerability scanning, and that looks at the packages in your images and the images themselves-- maybe that's a better way of putting it-- that you have stored in GCR. It will scan those automatically for known vulnerabilities from the CVE database. 

And it'll also rescan when new vulnerabilities are found or announced. And then you can patch those as needed and deploy them to your environment. 

MARK: Out of curiosity, how does that work? Because you've got this artifact that is an image, and then like how does it know how to get inside? I don't know. Like it seems crazy, but interesting. 

MAYA: You decompose the different layers of the image. So you get all the patches that are inside them. And you take a hash of the packages. And you compare that against whether those are known to have that vulnerability or not. 

Yeah, so that's not scanning. Notably, that's not scanning at the code level. That's not scanning things like, hey, did you leave keys in code? Or did you have a misconfiguration? Et cetera. 

There's a ton of third-party solutions in that space that do provide that functionality if that's something you want to do. 

MELANIE: So what's a software supply chain? 

MAYA: Oh, yeah, the software supply chain is that middle piece that we were talking about earlier. So how we go from developing your code to having an image to making sure your image is free of vulnerabilities to checking that it meets all your requirements when it's deployed, and then to seeing that that doesn't change over time. 

So a big piece of that is that vulnerability scanning piece. Another big piece of that is the binary authorization. 

Basically, the announcement that we've had around Next around container security have been in that software supply chain area. 

MELANIE: I know we've already talked a little bit about resources, but is there any additional places people can go if they wanted to know more, to get involved, to do development in container security? 

MAYA: Sure. There's a couple of links that we'll put somewhere on the site. They include cloud.google.com/containers/security. It's kind of an overview of how we think about containers at Google, including a lot of the items that I've talked about today. 

And then I mentioned specifically the Hardening Guide for GKE. It's another really great spot. If you're using GKE and want to have further security than what we already provide you by default. 

MELANIE: Nice. Well, as I mentioned early in this podcast, we are going to be releasing this the week before the big brouhaha in Vegas with Black Hat and DEF CON and BSides. Can you tell the audience a little bit about these conferences that are coming up and what this whole thing looks like? 

MAYA: So this is comically sometimes called like security summer camp. 

MELANIE: Nice. 

MAYA: So all the security nerds get together in Vegas. And it's really hot. And we don't really sleep. 

MELANIE: August is the best time necessarily to go. 

MAYA: I was there last year. And I don't even know. I think I got sick because you're going outside from like 40 degrees to like inside it's like 15-- sorry. I speak Celsius. 15 degrees. 

MARK: I do the same. It's fine. 

MAYA: And it's insane. 

So DEF CON and all that stuff, so there's a Black Hat conference, which is a big security conference. A lot of vendor shows, a lot of research announcements, et cetera. 

The same time as Black Hat, there is BSides Las Vegas, which is an alternative security conference. And then at the end of the week, there is DEF CON, which is probably one of the more infamous security conferences. A lot of live hacking. Zero days that are dropped as part of presentations, that kind of stuff. 

MELANIE: For those who might not know, what is zero days? 

MAYA: A zero day is a newly-discovered vulnerability, which is unpatched. A great example would be like Specter and Meltdown. When those were announced-- well, actually, maybe they're not such a great example, because Google had patched them when they were announced. 

Heartbleed. Heartbleed would be a great example, where when it was announced, it was not yet patched in the public domain. And so it was immediately exploitable by an attacker. 

MELANIE: Yeah, we did a nice episode on Specter and Meltdown, and talked a little bit about why the security decisions are made in terms of when to share information and trying to patch it at the appropriate times. But that's great to understand. 

And so how many years now has it been for you going to these events? 

MAYA: It will be my fourth DEF CON. 

MELANIE: Yeah. And what are you most excited about? 

MAYA: The Crypto Privacy Village. I've been quite involved with that village for a while. And I'm obviously an encryption nerd. And that's the entire village. It's like get a couple of hundred people in a room together to talk about encryption. 

MARK: Yeah, I was going to say, what's a village? 

MAYA: So the main talk tracks at DEF CON, which are in these giant convention halls, thousands of people in the room. And even those, some of the best talks you end up lining up for and still can't get into. 

So villages are the smaller areas to have specific conversations on particular topics. So for example, last year they had a voting machine hacking village, where some research brought in on the order of 20 or 30 voting machines, and just basically said, go for it. We'll write up everything that you find and send them to some authorities and see if we can fix some of the problems that are here, which is pretty cool. 

MELANIE: That is cool. 

MAYA: There is a wall of sheep, which is all about like packet capture. If you take your real phone with you to DEF CON and have it kind of open and connected to something that looks like it might be a legitimate Wi-Fi, somebody is probably just capturing everything that you're sending them and then displaying it on a giant screen for everybody else to see. 

MELANIE: Oh, that's great. So this is the hazing that happens. 

MAYA: Very much so. 

MARK: What sort of preparation do you take to go to DEF CON? Do you take your proper phone? 

MAYA: I do. I probably shouldn't. 

MARK: You probably shouldn't say on a podcast that you do. 

MAYA: I used to take a burner phone. And I think I got a little bit complacent. 

MARK: Right. 

MAYA: I do take a Chromebook. Chromebooks are great for this kind of scenario, where it's like, I need something that I can wipe if I have any concern whatsoever with it being compromised. But nothing's ever happened to me at Black Hat or DEF CON. 

MELANIE: Knock on wood. 

MAYA: Yeah. 

MELANIE: Not an invite. 

Well, any tips for anybody who is going for the first time or any of the people who maybe can't go, but they want to learn more at a later date? 

MAYA: Yeah, definitely go if it's something you're interested in. It's a very accessible conference. 

If you're having a bad time or someone's being mean to you, go find one of the Goons. They wear these like red shirts, and they will help you navigate the conference and take care of whatever issue is going on. 

I would say go to some of the villages and find people who are like-minded and find things that you're excited about. If you're new, like the Lockpick Village is a great place to just go hang out. There's a bunch of tables with locks you can pick. 

MELANIE: It sounds fun. 

MAYA: Exactly. And all the big rooms, all those talks are recorded. So if you miss one of those, it's not really a big deal. The stuff that's in person is the stuff that you're going to really miss. 

MELANIE: It sounds about-- 

MARK: Fantastic. 

MELANIE: --right for most conferences. 

MAYA: Exactly. 

MELANIE: Well, great. 

MARK: I did want to mention you have a series of blog posts on the Google Cloud blog, too, about container security that are really great. 

MAYA: We had a series of blog posts leading up to KubeCon in May. Seven blog posts just about container security; one on networking, one on image security, one on image signing, one on runtime security, on the partners that we announced in that space, one on isolation, just so many blog posts. 

MELANIE: That's a pretty good memory, though. 

MARK: Yeah. And we'll have a link in the show notes. There's a bunch of stuff in there. So it's definitely worth checking out if you're interested in this stuff. 

MELANIE: Thank you, Maya, very much for coming and joining us today. 

MAYA: Thank you so much for having me. 

MELANIE: And have fun at DEF CON. 

MAYA: Definitely. 

MELANIE: Thank you again, Maya, for coming on the podcast and sharing with us about container security before next week's big security conference. 

MARK: Yeah, it was really great to have a chat and have your experience and have your knowledge come and join us. 

MELANIE: Agreed. Well, Mark, how do I set up SSL termination on Kubernetes with Let's Encrypt? 

MARK: So I'm going to defer to one of our teammates on it, who is a DPE who works on Google Cloud. He has a really great tutorial on GitHub for installing an open source project called Cert Manager to get HTTPS certificates from Let's Encrypt. 

If you're not familiar with Let's Encrypt, it's basically a free service that has programmatic APIs for getting TLS and SSL certs, which is pretty awesome. And it's free. 

MELANIE: Yes. 

MARK: Which is kind of amazing. 

It is worth noting. I find this confusing. I think a lot of people use Cert Manager, even though Cert Manager says, hey, maybe be careful about using this in production, because we don't know if it's ready yet. But I know a lot of people that use it, which is kind of fun. So I give you that proviso as well. 

But the tutorial also links to things like Cloudflare and Backplane, like if you want to actually pay for a service that's going to provide SSL certs for you as well. So there's a few different options there. 

Yeah, Let's Encrypt is pretty great. It's a great place to get started and get playing with this stuff. So we'll link to that article in the show notes. 

MELANIE: Sounds good. 

Mark, are you going to be anywhere any time soon? 

MARK: So I don't know about soon. End of August, I will be speaking at PAX Dev, talking about Agones. I'll be hanging out at PAX West afterwards with all my gaming friends. What about yourself? What are you up to? 

MELANIE: So on August 6, I'm actually going to be speaking at the 2018 Nuclear Innovation Boot Camp at Berkeley. 

MARK: Oh, fancy. 

MELANIE: Yeah, it does sound fancy. 

MARK: Are you speaking about something in particular? 

MELANIE: AI. What else would I talk about? 

MARK: Fair enough. That sounds reasonable. 

MELANIE: Or machine learning. But yes. They asked me to come and speak to the students there. So that'll be fun. 

MARK: Awesome. All right, Melanie. Well, thank you so much for joining me for yet another week on the podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

Hi, and welcome to episode number 140 of the weekly Google Cloud podcast. My dog is coming up here. And let me try that one more time. 