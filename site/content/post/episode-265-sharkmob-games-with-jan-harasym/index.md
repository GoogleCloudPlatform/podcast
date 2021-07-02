+++
audioDuration = "00:34:19"
audioFile = "Google.Cloud.Platform.Podcast.Episode.265.mp3"
audioSize = 49350852
categories = ["Gaming", "Migration", "On-Prem"]
date = "2021-06-30"
description = "On the podcast this week, Stephanie Wong and Abdel Sghiouar are joined by guest Jan Harasym of Sharkmob Games."
draft = false
episodeNumber = 265
hosts = ["Stephanie Wong", "Abdel Sghiouar"]
title = "Sharkmob Games with Jan Harasym"
image="/post/episode-265-sharkmob-games-with-jan-harasym/images/hero/hero-EP-265.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ob1k8t/episode_265_sharkmob_games_with_jan_harasym/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, [Stephanie Wong](https://twitter.com/stephr_wong) and [Abdel Sghiouar](https://twitter.com/boredabdel) are joined by guest [Jan Harasym](https://twitter.com/dijit) of Sharkmob Games, who starts the interview describing how he and his team designed the infrastructure for The Division. With the game's sequel, The Division II, in development, Jan and his team made the decision to use a cloud provider. Jan describes the differences between on-prem and cloud, outlining the benefits of GCP for game development and hosting, including better reliability and development environments. Scaling a cloud project can be much more efficient, and Jan tells us some tricks for doing it well. We talk about the process of migrating this large game to Google Cloud and how they choose the software and development tools they used. 

When Sharkmob migrated to the cloud, Jan worked to convince the company that GCP was the way to go. He tells us more about how he persuaded the team, how they planned the migration, and the overall success of the process. Sharkmob is working on two new projects for the future and soon will be releasing a new game, Vampire Masquerade Blood Hunt. 

##### Jan Harasym

[Jan](https://twitter.com/dijit) has helped make online games work for eight years. Most recently, he helped release Tom Clancy’s The Division 2 with online infrastructure on top of GCP. 

##### Cool things of the week

* New Tau VMs deliver leading price-performance for scale-out workloads [blog](https://cloud.google.com/blog/products/compute/google-cloud-introduces-tau-vms)
* Introducing container-native Cloud DNS: Global DNS for Kubernetes [blog](https://cloud.google.com/blog/products/containers-kubernetes/integrating-cloud-dns-with-gke?utm_campaign=60af7b4b2e72480001062070&utm_content=60c70f97d43ae800012b786e&utm_medium=smarpshare&utm_source=linkedin)
* Google for Games Developer Summit 2021 [site](https://developersonair.withgoogle.com/events/game-dev-summit-2021)

##### Interview

* Sharkmob [site](https://sharkmob.com)
* The Division 1 [site](https://www.ubisoft.com/en-us/game/the-division/the-division-2/the-division-1?isSso=true&refreshStatus=noLoginData)
* The Division 2 [site](https://www.ubisoft.com/en-us/game/the-division/the-division-2)
* Massive [site](https://www.massive.se)
* Unreal [site](https://www.unrealengine.com/en-US/unreal)
* Zookeeper [site](https://zookeeper.apache.org)
* Agones [site](https://agones.dev/site/)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Blood Hunt [site](https://bloodhunt.com)

##### What's something cool you're working on?

Abdel is working on [GKE Network Recipes](https://github.com/GoogleCloudPlatform/gke-networking-recipes).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone and welcome to Episode number 265 of the weekly Google Cloud Platform podcast. This is Stephanie Wong, and today I brought on Abdel. How are you?" >}}

ABDEL: Hi, I'm good thank you. How are you doing? 

STEPHANIE: Good. All the way from Stockholm, right? 

ABDEL: Yeah the weather is getting better, so I'm happy. 

STEPHANIE: Good, good. OK, so since this is the first time we've had you on the podcast, tell us about yourself a little bit. 

ABDEL: Sure Abdel, that's my nickname for my very long name, which is Abdelfattah. I am a Cloud Engineer, part of working for the PSR professional services organization, which is the consulting branch of Google Cloud. And I have a background in infrastructure and I specialize on several SM communities. 

STEPHANIE: Fun, OK, so you came to me because you had an incredible guest that you wanted to recommend. So who are we talking to today? 

ABDEL: Yes, we are talking to Jan, who is an infrastructure engineer, at Sharkmob, which is one of the many gaming studios in Sweden, in Malmo. 

I met him back in 2018 when he was speaker in DevFest in our office, and he gave a very amazing talk about their experience, at the time, launching the Division 2, which is a very popular FPS game, on GCP and migrating game servers from on-prem. 

STEPHANIE: We love when people willingly go to the DevFest and want to share their experiences and learnings with them, so I'm really excited to have him on today. And quick question, why is it that we have so many gaming studios in Sweden? 

ABDEL: That's a very interesting question. I have no idea, I worked with a lot of gaming studios. 

I think part of it is just historical Stockholm, Sweden generally have a very vibrant startup scene and they encourage the digital area to flourish in this country. And, you know, it's the headquarters of Spotify. 

STEPHANIE: Ah, yes, very true, very true. So you said that it's this home of digital transformation and startup scene, and Jan is going to share his experience about how they're able to transition to the cloud. So we are still seeing a big migration and shift in technology, even there. 

ABDEL: Yeah, and the most important thing is we didn't pay him to say all the good things he said about GCP. 

STEPHANIE: Exactly, exactly. Again, sharing his experience with everyone. 

So before we get into the conversation, though, I want to cover some cool things of the week So let's go ahead and do that. 

[ELECTRONIC MUSIC] 

All right, so my cool thing of the week is, if you didn't already hear about this, we had a really big launch in our compute scene. 

So we have a new virtual machine family called Tau VMs coming to Google Cloud. And they extend our Compute Engine offerings with this new option and it's optimized for cost effective performance for scale-out workloads. 

So the first VM type in the family is called T2D, and it's based on the third gen AMD EPYC processors. And so what's cool about this, is that they did benchmark performance tests for this, as they do. And we were able to see a 56% higher absolute performance and 42% higher price performance compared to the general purpose VMs from the other leading public cloud vendors. So I encourage you all to check it out. If you're interested in signing up to try it, out we'll include a link in the show notes. 

ABDEL: Nice, even faster CPUs. 

STEPHANIE: For less cost. 

ABDEL: For less money, exactly. 

STEPHANIE: What else could you want? So what about you, what's your cool thing? 

ABDEL: I have two of them, actually. So we just announced a new integration with a Cloud DNS from GKE called the Container-native Cloud DNS. This is actually making GKE even better, because now we can break our reliance on kube-dns, so in-cluster DNS, in favor of integration with GCP's managed DNS service, called Cloud DNS, lowering the operational burden across our administrators, so you don't need actually to allocate resources inside the cluster for your DNS anymore. 

STEPHANIE: Wow, awesome. I'm still learning about this, but I was reading about it. It seems like now you have tooling, monitoring, logging that you get from Cloud DNS, and you can use it for DNS resolution in GKE, as well, without separate system. So it seems like a more unified, integrated approach to that. 

ABDEL: Yeah, the second one is a Google for Game Developers Summit, since this episode is about gaming, obviously. So that's taking place online on July 12 and 13. We will be sharing your products and solutions across Google. You will be able to catch deep dives of full practices to help you continue creating great games, connecting with players, and scaling your business. 

STEPHANIE: Very appropriate for today's conversation. So for all the game developers or those who want to follow the scene, check out the summit. We'll include the links in the show notes, and I'm sure it's going to be filled with a lot of experts. And learn about the latest that's happening in game dev, so check it out. 

So without further ado, let's go ahead and jump into our conversation with Jan from Sharkmob. 

[ELECTRONIC MUSIC] 

Jan, I'm so excited to have you on to the podcast, finally. I know it's been a little while. Why don't you go ahead and just tell everyone a little bit about you and your experience. I know you've been at Massive and Sharkmob, tell us about them. 

JAN: Yeah my name's Jan. I'm a, what is it, Expert Online Infrastructure Engineer. It's a ridiculous title. I've been working for Massive for six years and Sharkmob for, coming up to, a year now. And I'm responsible, mostly, for the online platform. So the matchmaking systems, the authentication systems, the gameplay systems, profile storage, things like that. And I'm focusing mostly on architecture and reliability, not so much on the programming. 

ABDEL: I mean we had the chance to have Jan speak at one of our GDG conferences, DevFest 2018, when we could get together. And you talked about Massive and that was just after the launch of the Division 2 game. Which I love, by the way it's awesome. Can you tell us a little bit about that? Like, what was your role, what did you do, what was your involvement in the infrastructure space and how did you came to actually use GCP? 

JAN: Well it kind of goes back to the first Division game. I was one of only a couple of engineers who were, kind of, the first ones doing that job for a game. Usually we have this internal organization, which is like an IT organization, and everything becomes monolithic because of that. So if you have an online game, then you would go to this central service, based out of Paris or Montreal, and you would ask hey, I want a dedicated server. And they would say, how big? And you might get it in six to 12 months. 

But this was like a massive multiplayer game that they were thinking of making, the Division 1, I mean. So it made way more sense to have that team embedded in the development team. So that's where me and a couple colleagues, we got hired. We went in, we spent a long time understanding how the game was going to work, how everything functioned on a binary, kind of, byte level, and then making a tailored solution for that, based on physical hardware. And it was kind of a long process and we learned a lot from the first game and we made a lot of mistakes and made a lot of things really well. But then it came closer and closer, or a bit more obvious, that we're going to make a sequel. And then it was more of a question of, if we could redo it, knowing what we know now, what would we do differently? And one of the main things, I think, was flexibility. We had very limited flexibility, in terms of the physical machines we had. There was an incredibly long lead time to get them. When they failed, it was kind of a big deal. So it made more sense to make things a bit more agnostic in that way and maybe look at some cloud providers. 

And we did a very extensive evaluation. You know, due diligence is important. And well, GCP came out on top by a relatively big margin. So then we managed to launch Division 2, and they were way less problems than the first game, so I was very happy with this. 

STEPHANIE: Wow, yeah, that's what we like to hear, right? So I'm really glad that you found success through that. But I was just thinking about the different model between on-premise provisioning and cloud. Obviously, the lifecycle is much longer and when you're talking about managing your own private data center and hardware. So what were some of the biggest differences that you noticed when you did decide to move to GCP? 

JAN: Oh there are quite a few. Well one of the biggest and best differences was that our dev environments looked exactly like production environments. That was really cool, because then we found problems way ahead of time. What tends to happen if you only have physical machines is, if you want to have a dev environment, then you're going to bundle everything on one machine and just, like, push it out. Like, maybe it's a developer's machine. Or even if it's, like a UAT, a user acceptance testing machine, where you give it to a client, or say, InVideo or AMD and they want to test the game. Then you, basically, fit it all into one box on one operating system, and then just like, here you go, here it kind of works all jumbled together. 

But when it comes to cloud way of doing things, because you can make those microservice instances much, much smaller, you can have a separate game server that's a bit smaller. You can have a separate authentication server that's a bit smaller, you have a tiny little database. And you can use all the same provisioning scripts, say it's Terraform or if it was Cloud Formation, if it was Amazon, you can have all of that be the same. So you can really test your deployment system in a really robust way, because you're constantly using it instead of just like, OK, we have all these UAT environments and then on production day one, we're going to have 2000 physical machines over there. So program for those 2000 machines, but you're not going to have any experience doing that yet. So that was probably the biggest and best difference between on-prem versus cloud. 

And obviously, we can talk about the life cycle of machines. Like, it's mostly in terms of reliability. Like when I call a Google API, can be pretty sure that I'm going to get a positive return back. And if I don't, then I can handle that return. I'm going to get a machine at the end of it, basically, and then it will tell me. But with physical machines, it can be a bit different. They have this iLO outbound management interface, and it has some API programmatic access. But because it's, like, very proprietary, maybe misunderstood. You can get into situations where the machine is not behaving as you would expect. So even rebuilding a machine through the API can be not only time consuming, but really not fun, because it's not doing what it says it will do. These are the two main things, I would say, are large differences between on-prem versus cloud. 

ABDEL: Cool, that's actually great. And there is another aspect of cloud, when we think about it, versus like Bare Metal always, like scalability, right? With Bare Metal or with on-prem, you're only going to get as much CPU out of the physical server as you have. But then people when they go to cloud, they have this understanding of how the cloud is unlimited, you know. I can make an API call and get like 3,000 VMs provision. Of course, I mean, at the end of the day, it runs on top of some physical servers. 

How did cloud help you scale, especially when you launched the game? 

JAN: So it's a different target, I think, when we talk about scalability in the cloud. The thing is it's limiting and unlimiting at the same time. You can say, we can make an API call and get 2000 machines. And actually, that tends to be not true. If you go and ask for 2000 machines, you're actually going to get, we're out of resources response. So you have to understand how to deal with that, as well, because we did try and do that and we did get that message, quite a few times, actually. But especially when our machines are like, I don't know, 64 to 100 core machines, you know. It's like yeah, that's kind of difficult for anyone. 

But the thing is a lot of programmers, when they write software, especially if it's a low level C++, they're going to write single threaded applications wherever they can. There's going to be some, like, thread starvation. And Google Cloud, at least at the time when we were onboarding with it, was a lot of two gigahertz CPUs. So you can have as many cores as you want, or up to a limit, of course, like 98 cores, or something like that. If you are highly single threaded, then you're dead in the water, basically. I had a really good experience, because we were writing our own game engine. And you know, massive has Snowdrop engine, which was built like next generation from the ground up, really good with multi-threading. It was so good that you could just aggregate all of the cores together and say what's the total number of gigahertz I have? And that's going to give you a rough estimate of performance. And that's pretty much unheard of, even with multi-threaded applications. Because there's always overhead and multi-threading context switching between threads. So I was incredibly lucky. 

Now I work with Unreal. And Unreal, unfortunately, it does have the single threaded problem, it loves to be on one or two threads. And I think Unreal is used by many people, so they're all aware of this. But it's a problem for me at the moment. But then, you've got the new CPU types. You've got the AMD EPYC Rome. Have you had some, as well, the Cascade Lake machines that were a bit higher core frequency? But they're not everywhere, and this is also the problem. You've got to understand what your model is before you go into it. 

STEPHANIE: Yeah, I've been doing more reading about the AMD EPYC processors recently. And it's exciting, because Google is investing in that area, as well. And you mentioned having to take inventory and really plan before you decide to migrate your workloads over. Now that Cloud Native applications are usually more prevalently built using a distributed architecture, have you had to do major changes in the way that you've designed your environments? Or, more or less, have had a seamless transition into moving over to the cloud? 

JAN: It's mostly seamless, I can say. I mean, everything seems to work. If it works on-prem, that's the hard part. Because you get more when you go into the cloud. You just get, like, some really nice convenience functions, right? I find that a lot of people when they're really serious about making a distributed system with on-prem systems, they either reach for ZooKeeper or they build their own, kind of, service discovery system. We at Massive, we had our own service discovery system and it was fantastically fast, like phenomenally fast. There's no comparing to it. But that amount of effort to make that thing is very high, like, it's insanely high. I mean, we're talking like C++ programmers working for half a year to make that system as robust as it was, at least. 

But you go into the cloud and suddenly, you get this for free. And OK yeah, it's not as tailored or it's not as fast, or whatever, but it works. And it works pretty well, and it works for the general case or the 95% case. So we could take our own service discovery system to the cloud, because we built it for on-prem and all of that stuff just works. But we could also have not spent six months designing this thing, so it's a trade off. 

ABDEL: So that's actually a very interesting. You just made, kind of, an analogy to the microservices versus monolithic, where in the microservices space, you're spending a lot of time perfecting a service that does a very specific thing. And in the monolithic world, you're just, like, throwing lines of code into a single binary and just hoping for basically, crossing your fingers. But I just want to follow up on Stephanie's question, she spoke about Cloud Native, which is this new term we've been using around, like, the last couple of years. And since I am a community snob, why not give analysis for your specific use case, for game servers, in general. 

JAN: OK for game servers, OK, there is Agones. 

ABDEL: Mhm. 

STEPHANIE: Yeah. 

JAN: And I've been very keen, like, keeping a very close eye on it. I got Mark Mandel to give a presentation to the guys at Sharkmob, including the CTO, and they love it. Absolutely, they love it. But the unfortunate thing is, we're very, very close to shipping our first game with multiplayer. So we're already, like, built into the multiplay APIs and the way of working with it and their deployment strategy, and so on. But I think for the future, it's a distinct possibility that we're going to very closely look at Agones. 

When it comes to Massive, I know that there's been a huge shift away after I left, because I was working on shifting away, but everything's built on Windows. You give 300 to 600 people Windows workstations, you tell them they are not allowed to run virtual machines. And every time they ask for a machine, it takes six to 12 months to get. Well then, they're going to make their server software on Windows, because that's all they have. And that's exactly what happened with Massive. So they spent seven to 10 years making a new game engine and a game that goes on top of it, it's all Windows. And then obviously, Linux gets introduced when I join, which is, like, a year before launch. And I mean, they've tested everything, it's done. And you can't take what they've made even, if it is microservices, you can't just take it and put it in a container. Because back in what, 2014 to 2016-ish area, there was no Windows Kubernetes, so it wasn't even on the cards. 

And then later on, as time goes on, it's like, well, it's a lot of work and we have, basically, everything we need with what we have. We have our own orchestration system, we have our own service discovery system. But obviously, that has to give. And for the new Avatar game that's coming out, I have high confidence that it's not going to be Windows. It's going to be with Kubernetes, is it's going to be on GKE. I can't say for certain, and if I knew, I wouldn't say, so. It's a super secret game, sir, but I have high confidence. Everything, with regards to the back end infrastructure, it's not an evolution with the Avatar game, it's a revolution. It's significantly better than everything we've done before. And that includes porting everything properly to Linux and making the game servers work on Linux. 

STEPHANIE: Yeah, another step in that transformation and migration, which is a multi-month, multi-year process for some companies. But I kind of want to shift the conversation and talk a little bit about Sharkmob. I know that was a different situation, migrating cloud. So can you tell us a bit about what that was like? 

JAN: Yeah actually, Sharkmob was an interesting one because I came in as the first and only, like, SRE-type or platform engineer type. So there was a dev ops engineer who came before, and he was an expert on AWS. And he actually, really helped me open my eyes, because I'm one of these people who was very cloud-phobic. I like to understand what things are doing. And well, Cloud is relatively proprietary and they have VMs, by definition. So there's a lot happening that's opaque. And the thing is, I like GCP, mostly because it's very transparent about how opaque it is, in a way. 

They do really interesting things on the hypervisor. I've talked to some of the engineers who worked on the hypervisor, even. Props to you guys for letting me talk nerd to some of your most nerdy people, by the way. 

ABDEL: We love to do that. 

JAN: But I can say that they try to give you predictable performance and they do a very good job of it. And I verify that they do a very good job of it. So I'm very happy with GCP in that way. But I am cloud-phobic, so I don't want to learn AWS and I don't really want to learn GCP, which is ironic, given that I'm on a GCP podcast. But you know, I like understanding what I'm doing. So it's great that he was there and he was an expert on AWS. And I go in and I start asking questions, like hey, how does this work? He explains how it works. I'd say, but what about this other thing, how does that intersect with this thing? He was like, ah, it kind of doesn't. So I what I have to do is lambda function, and this and that and the other thing. OK, that seems really complicated, actually. How are we going to maintain this in perpetuity? He was like, well, it just work. No, let's not hope. We don't build platforms worth billions of dollars on hopes and dreams, we build them on engineering. 

And you know, the more I dug into how everything was working, the more I understood that, even though he was an expert and his expertise was incredibly valuable, that the thing that it was most valuable in doing was informing me how AWS was not a good fit for us. Because he would explain the breadth of all this wonderful stuff, but it was all super, super esoteric in its own way and didn't have a holistic idea in it, and everything became overly complicated. And it's totally the antithesis of what I assume cloud to be, because I had this experience with Google Cloud where well, they had a service discovery system that was nearly as good as ours, and it would have saved us a lot of engineering time. And that's what I thought cloud was, at that point. You take the 95% case and you save a bunch of time and you pay a bit of money for it. That totally makes sense to me and that's a good value proposition. 

But AWS, at least the way we were using it, was not. It was very much we spend significantly more time on more complicated solutions and we pay for it. So it was really difficult for me to get my head around. And after a while, I said, look, I don't really trust that I can deliver a good quality service on AWS, because this is how you currently use it, and this is how it could be in Google. I mean, you're using this container system that Amazon provides, and I could probably just pull that to Kubernetes. And then, if we do the migration to GCP and you don't like, it we can still go back to Amazon, we can go on-prem, we can go to Azure, we can go anywhere. Because we've done the hard work of lifting it out of a proprietary solution, putting on something open, and now we can just move anywhere. I did a proof of concept for that and it was a lot of hard work. 

And props to my new engineer at the time, Max, fantastic work. We sat down, we coded everything, like we had to write all these wonderful Python wrappers so that developers could just run the same commands as they were running, but against like, minikube and the GKE, and it was transparent whether they were using their own, or whatever. It was really good, they loved it. They were like, this is amazing. OK, we've replaced some service discovery stuff, they were using their own service discovery system. Because like I said, people tend to write their own service discovery systems. And we replaced it with GKE load balancers, so the service load balancers between each system. And yeah, OK, we found some problems. You know, we wanted to keep persistent connections open and there's some limitations on what you can do with that, especially with ingresses. But I mean, there was nothing insurmountable and the documentation was great. And so far, I mean, they're very happy. And I guess time will tell if it was a good decision, because we're going to release a game soon and probably, it's going to be great and no one have any problems. 

Overall, I would say people are more happy and the transition has been a very good one. And now, actually, when we deploy an environment, it's like it wasn't massive, when I said about the dev environments that looked like prod. Well now, the dev environments look like prod, whereas the dev environments, when I joined, were one IDS instance, which is a MySQL machine in Amazon that everyone connected to. And they templated their SQL well with, like, variables that they would replace, so they wouldn't collide with each other on their dev environments. 

ABDEL: It's pretty cool to listen to your story, because as people from inside of Google, we also tend to want things to be simple for our customers, obviously. But we also tend to, sometimes, catch some friction in the user gen. Then just complain to the PM like, hey, this is not what it's supposed to be working. But it's great to have somebody from the outside give it asimile. 

So the from Sharkmob view did this migration from AWS to GCP. What were the main challenges, besides the ones you talked about, like using new service discovery, what other the challenges you have faced in that transition? 

JAN: That's a really good question. There were a couple. I even have a webpage where I listed all the things I hated about AWS and all the reasons we couldn't move away. And actually, mostly, it was people tying themselves into AWS APIs. It was the developers who didn't want to know anything about infrastructure. And to them, cloud was infrastructure. It's not C# or it's not C++, therefore it's infrastructure and I don't want to think about it. Perfectly legit, you know, it's a perfectly valid way of working. Not everyone should do everything, in my opinion. But that led to situations where someone who knew how to do something in AWS just to get their job done, they now, suddenly had to relearn how to do it in GCP, or the GCP way. So that was kind of a big problem for a couple of people. 

Then, there was like CloudWatch. I know we had some API integrations into CloudWatch and if we couldn't do it, then it would crash, that was annoying. But it's not insurmountable, right? It's not the biggest problem in the world. I think a lot of people had trouble understanding when we did have a problem that it might be something unrelated to the cloud provider. Because, when you make a big change and then you see a problem, you can just immediately blame the big change, because it makes sense. 

But overall, it was an incredibly smooth transition. It was just convincing people that it could be done six months away from launch, something like that, or six months away from some amount of, like, readiness. I think I said to the lead developer, I stake my career on this working. I mean, it was really complicated to convince directors and people like this, if we go with AWS, we could probably do it. But if we go with GCP, we can definitely do it. It's a hard thing to convey as an engineer to a director, or to a person who's been developing stuff on AWS before or has been leading this team for a while. I have to say something to the tune of, yeah, I stake my reputation, I stake my career on this working. You're going to have to trust me, I'm afraid. I mean, it worked, so. 

STEPHANIE: Yeah, yeah, I mean it sounds like there are two places that you needed to convince. It was bottom up and top down, in some sense. Because you mentioned having to convince a team of developers to reorient their skills to a different platform is using those hours that, from higher up, probably wouldn't want to devote time to. So how did you create that pros and cons list for both bottom up and top down? 

JAN: Yeah so directors love graphs, basically how I did it. So when it comes to director-level decisions, I tend to do a weighted decision matrix. I sit down and I ask the directors and the engineers, what are the things you value most in X? And I do this with basically everything. I do it with the logging systems, I do monitoring systems, I did it with cloud providers. So what do you want most out of Cloud provider? And they would say something like the ability to get service. Well, that's pretty obvious. And maybe they want ease of use or maybe they want reliability. If you have a VM, you don't want it to randomly just shut down or lose its data, or anything like this. And then, more and more, it becomes like predictable performance. And then eventually, they start talking about helper systems, but it's way at the bottom. People like to say, oh, but Amazon supports classic search. But the real thing is, most game developers don't care, they just care about predictable performance and they care about reliability. Because especially when it's a game server, it's persistent connection most of the time, there's state involved. You don't want to lose it. It's not like a web request where you can just throw away the connection or not serve it and expect the load balancer to pick up the slack. It's totally not like that. 

So I made that list and then I asked them to grade which ones they deemed most important. Like, scale of one to 10. When you can only have 10, so you have to really choose which 10 you want. And then they pick the thing they want. I go through and I give them scores, I do it like one to five, on each metric. So I say, oh you don't want your VM to be shut down? Well Google supports this migration strategy, and I've used it for five years and I never had a problem with it. Whereas Amazon supports this, and then we start talking about the preemptiveness. So Amazon sends you a notification 24 hours before they shut down the node, whereas Google is just not going to shut down the node. So that's a difference, right? So maybe Google gets a five, Amazon gets a three, maybe lower, it's a bit like this. And then we go through the whole list. And you get a score at the end, and you say, well, which one's better, which one do you want to support in perpetuity? Because once we ship this game, we're not going to change this. So it's better to do this now and to rip the Band-Aid off and do it than it is to wait and then have a really painful migration later, because we realize some stuff that we didn't think about in the beginning. 

STEPHANIE: Yeah you mentioned you made this decision about six months before a game had to be launched, is that true? 

JAN: Some release gate. I don't know about launch, but it was like six months before some release gate of some kind. And we were pretty much trying to lock everything and go full bug fix mode and alpha quality everything and-- 

STEPHANIE: Yeah. 

JAN: But yeah, it was very late change, to be fair. 

STEPHANIE: Did you have a hybrid period of time? 

JAN: No, so we do API versioning, luckily. So between one version and the next, we could, basically, redo everything. So we got away with that. And because it was pre-production, we didn't have any state to take care of it. Would have been really hard to migrate state out of Amazon later. 

I know of a project in Ubisoft. Essentially, it's the centralized authentication services. And if you work on that project, you know who you are and you do a fantastic job and I love you very much. Really, they do great. But it's all developers, and they did this migration from, I think it was on-prem to AWS, in that case. But it was really painful. It was so painful it had to be done in stages, because certain services needed to be moved and they would need to talk back inside the Ubisoft network, in some ways. And it was prolonged and very painful for everyone using them. I mean, I was a user of the service as a person making a game, Division games that use their service. And I could see the error rates, because I can see authentication errors, of course. And I could see ticket token invalid errors. And I can see all of this, and I can see that they have a really long period of sustained, high error rates, like, low-level ones. So it's constant, but low-level. And then after the migration had been finished, it was suddenly like, wow, there's a lot less downtimes on this service now, but it took a long time. And it must have been really painful for everyone involved, so I'm really glad we got to bypass that problem. 

ABDEL: That's pretty interesting. So you basically did the lifts and shifts within six months, and you had to put your career on the line. 

JAN: The whole transition took two weeks. 

ABDEL: Oh, God. 

STEPHANIE: Oh, wow. 

ABDEL: That's a tough sell. 

STEPHANIE: You did have a lot of pressure on yourself, though. 

JAN: Well it works. I mean, it was good, I'm glad. You have that fight and flight response? I was like fight mode for two weeks. But it works, I mean, I'm so happy. The thing about Kubernetes, and especially GCP, it's least surprise. When the documentation says something will be a certain way, it is. And it's internally consistent with the way the rest of the system works. And maybe this isn't everyone's experience, I do only work with a subset of GCP, to be honest. Like I said, I'm a hardware guy and I like knowing how everything works and I don't go for every feature that you have, I definitely don't look at maps, for instance. But the stuff that I do work with, it works the way you would expect it to work and all the names are consistent and everything seems to just kind of fit together well. So I was really confident I could do it in those two weeks. And I did, and I mean, we didn't have any shotgun surprises, you know, like things blowing up in front of us, it was really smooth. 

STEPHANIE: That's awesome. 

ABDEL: That level of predictability is what you like, basically. If the documentation says it works, it just works. 

JAN: Yeah. 

ABDEL: And if it doesn't work, it's probably you mis-configured this. 

JAN: Exactly, because you use the same key names for everything. If you say, oh service account here, then it's going to be the same name everywhere else. I mean, it's not going to just change randomly it'll be uppercase here and lowercase there, and it's all the same. 

STEPHANIE: It's just so nice when things are predictable, consistent, and you can trust your expectations for the service. And that's, sort of, the benefit that you were looking for in a cloud provider. That's the promise of it, right? 

So what is coming up for Sharkmob? Games that you're launching, and what does the future look like, in terms of your experience on Google Cloud and any changes that you're looking to make? 

JAN: Changes, there will be changes. Especially, like I said before, about Agones. So we actually have two proprietary projects in the works. One of them, for sure, is our own IP. One is in the conception stage. Those are way out there, but they're in the pipe. And we're actively hiring. Please get in contact with us, we need educated people. And if you're listening to this podcast, you're probably a very well educated person. And then, soon, TM, I don't actually know when. I intentionally erased my mind of all memory of the launch date. Soon, we are releasing Vampire the Masquerade, Blood Hunt a Battle Royale games and Vampire Masquerade Universe, where a lot of vampires get cornered in Prague and you, basically, have to fight your way through. And it's, of course it's Battle Royale, so it's always online, which gives me a job, so I'm very thankful. 

If you get the chance to sign up for the closed alpha, we have closed alpha on July 3, July 4, around that time. If you sign up before then, you'll probably get in and you can try it out for yourself. 

ABDEL: As an avid gamer, I'm really looking forward to that. 

JAN: I'll see if I can get you in early, actually. 

ABDEL: I'll email you. 

STEPHANIE: As a not avid gamer, I wish you the best in fighting your way out from vampires in a corner in Prague. 

JAN: The next game is a bit less hopeful than that, even so, we'll see. 

STEPHANIE: It gets worse. 

Well as we wrap up, is there anything that you wanted to mention, any major takeaways. I mean, we had a ton of learnings just from your experience so far, having done it at two different companies. But anything that you like to leave the audience? 

JAN: Well if you're listening to this, then you've already embraced the cloud. But if you're embracing the cloud, then GCP is a pretty good way to go and you should definitely, definitely check out Sharkmob games, because yeah, we're hiring and we make good games, I hope. 

ABDEL: Cool. 

STEPHANIE: Well thank you so much, Jan. We really appreciate you being here and your experience was enlightening and we'll include the links to Sharkmob games and everything else you mentioned in the show notes. 

JAN: It was an absolute pleasure being here, thanks for having me. And it's lovely seeing you again, Abdel. 

ABDEL: Thank, you lovely seeing you as well. 

STEPHANIE: Wow, so Abdel. First of all, thank you for bringing on Jan, because he is impressive. Very experienced, very detailed, and deep conversation we've had with him. And honestly, I appreciate when we have personal stories on the podcast, right? Because you're hearing it from the source, you're hearing it from people who went through the experience and can provide their takeaways for other people going through the same thing. 

ABDEL: Yeah, and the most important, he's a very humble person. 

STEPHANIE: Yes, we love humble. Who doesn't? 

ABDEL: Yeah. 

STEPHANIE: And what I loved about the learnings that he brought to the table were that he gave some very practical tips about bringing the advantages and disadvantages for various options, whether it is to remain on AWS or port over their workloads to GCP. And he made it very clear and quantifiable for his leadership to understand the differences. 

ABDEL: Yeah, that's actually very cool. I get to do this, as well, as part of my job and I hate it when people start just talking about feelings and I don't feel this is going to work. I think that the way you would convince your leadership or your business to move to a certain direction, is by actually proving that this could work. And the only way you could prove it is just trying it and just drafting some numbers and say like, this is going to be faster or cheaper. 

STEPHANIE: It also doesn't hurt that he's staked his career on it. 

ABDEL: Yeah. 

STEPHANIE: That provided some confidence. It was bold, but hey, was confident in it, he had tested it. It's not like it was just on a whim. So I'm very excited that he had a positive experience and he was able to meet those scalability and consistency targets while staying within his constraints. 

ABDEL: Yeah. 

STEPHANIE: Cool, well OK, I know you are always working on some really fun things over on the PSO side of things, our professional services org. But any other projects that you're working on now that you're excited about? 

ABDEL: Yep, we just started working on something we're calling the GKE Networking Recipes. This is a document that's, basically, mixes my love for Kubernetes and my love for food. It's a repository on GitHub you can check out, it's GKE dash net dash recipes. And we are documenting all the patterns for deploying and exposing applications on GKE using all our load balancing flavors. So each recipe is a self-contained example with detailed explanation and some KPT packages that we're going to be writing for adults, it'll be awesome. 

STEPHANIE: Awesome, amazing, I mean, it's nice to have it packaged in a way that you can read it as a recipe. Especially if there are various ingredients involved, as you were saying different flavors of the load balancing option, so. 

ABDEL: Exactly. 

STEPHANIE: Great, well we'll include the link to that, too. And well, I guess for everybody else, we'll see you all next week. 

ABDEL: Thank you. 

[ELECTRONIC MUSIC]