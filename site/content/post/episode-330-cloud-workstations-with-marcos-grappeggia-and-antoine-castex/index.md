+++
audioDuration = "00:41:26"
audioFile = "Google.Cloud.Platform.Podcast.Episode.330.mp3"
audioSize = 59665289
categories = ["Security", "Development Environment", "Managed"]
date = "2022-12-14"
description = "Max Saltonstall and Stephanie Wong welcome fellow Googler Marcos Grappeggia and Antoine Castex of L'Oreal to talk about Cloud Workstations, software that provides managed development environments."
draft = false
episodeNumber = 330
hosts = ["Max Saltonstall", "Stephanie Wong"]
title = "Cloud Workstations with Marcos Grappeggia and Antoine Castex" 
image="/post/episode-330-cloud-workstations-with-marcos-grappeggia-and-antoine-castex/images/hero/hero-EP-330.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/zlzrje/episode_330_cloud_workstations_with_marcos/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Max Saltonstall](https://twitter.com/maxsaltonstall) and [Stephanie Wong](https://twitter.com/stephr_wong) welcome fellow Googler [Marcos Grappeggia](https://twitter.com/grappeggia) and [Antoine Castex](https://twitter.com/_antoine_cas) of L'Oreal to talk about Cloud Workstations, Google's software that provides managed development environments.

Marcos elaborates on the power of Cloud Workstations and all the features and offerings this software provides. The preconfigured nature of Cloud Workstations means developers simply press a button and get an IDE so they're ready to code quickly. Other teams benefit as well, with templates created by Cloud Workstations that specify options to be preinstalled. Marcos talks more about the benefits of Workstations over local environments, especially in the areas of security and productivity. L'Oreal chose Google Cloud years ago when they began their transition to the cloud, Antoine tells us, and we hear how L'Oreal offered Marcos suggestions and feedback as Workstations was developed. Working with Cloud Workstations today, L'Oreal's teams spread across the globe are able to begin realizing the dream of creating environments with parameters specific to different regions and areas.

While Cloud Workstations and Cloud Shell are similar solutions in some ways, Marcos helps us understand the differences as well. For example, Cloud Shell is less flexible while Workstations is highly customizable. Antoine talks more about the adoption process of Workstations at L'Oreal and how they plan to continue using the software with more teams in the future. He offers advice for other companies looking to introduce it.

Workstations works with the Software Delivery Shield suite to build and maintain a secure software supply chain. Security features developers are used to in productions services are easily applied to development environments in Workstations as well. Marcos talks about the future of Cloud Workstations, including deeper security integration.
 
##### Marcos Grappeggia

[Marcos](https://twitter.com/grappeggia) is a Product Manager at Google Cloud, leading Cloud Workstations and Cloud Shell. Marcos is an engineer from University of Campinas (Brazil) and École Centrale Paris (France). Prior to joining Google, he led product at Appurify (acquired by Google, now Firebase Test Lab), enabling mobile test automation on real devices for mobile developers.

##### Antoine Castex

[Antoine](https://twitter.com/_antoine_cas) is a curious French man, a Serverless Guru multiple times GCP Certified and C2C French Club Co-President & Co-Founder.

##### Cool things of the week

* Introduction to custom org policy [video](https://www.youtube.com/watch?v=noCY3oGWdeI)
* How to configure rules and policies in Google Cloud Armor [video](https://www.youtube.com/watch?v=EecnqH82jWc)
     * [1:03](https://www.youtube.com/watch?v=EecnqH82jWc&t=63s) - What this video covers
     * [2:03](https://www.youtube.com/watch?v=EecnqH82jWc&t=123s) - How to create a new rule from scratch
     * [4:54](https://www.youtube.com/watch?v=EecnqH82jWc&t=294s) - How to clone an existing out-of-the-box rule and modify it to create a new rule
     * [7:44](https://www.youtube.com/watch?v=EecnqH82jWc&t=464s) - How to copy a rule or policy and apply it to multiple backends / Rate limiting feature
     * [12:46](https://www.youtube.com/watch?v=EecnqH82jWc&t=766s) - How to use a Rule in Preview mode and test a new rule before enabling it / Threat intelligence feature
     * [17:35](https://www.youtube.com/watch?v=EecnqH82jWc&t=1055s) - Wrap up
 
##### Interview

* Cloud Workstations [site](https://cloud.google.com/workstations)
* Cloud Shell [site](https://cloud.google.com/shell)
* Software Delivery Shield [site](https://cloud.google.com/solutions/software-supply-chain-security)
* Cloud IDE [site](https://ide.cloud.google.com)
* Google Cloud Console [site](https://console.cloud.google.com/workstations)
* C2C [site](https://www.c2cglobal.com)
* How to increase developer productivity with Cloud Workstations [video](https://youtu.be/C6Dpmujxp9Q)

##### What's something cool you're working on?

Max is teaching his cats to do silly tricks!

Stephanie is planning a vacation!

{{< transcript "[MUSIC PLAYING] MAX: Hello. And welcome to episode number 330 of the weekly Google Cloud Platform Podcast. I am Max Saltonstall. And I'm here with my co-host, Stephanie Wong. Hey, Stephanie." >}}

STEPHANIE: Woohoo! It's us again. I'm really well. How are you, Max? 

MAX: You know, I'm trying to convince this cat to come into my lap for the rest of the recording. So we'll see. But I think I have a good opportunity here. 

STEPHANIE: Yeah, your hand-waving is not working right now. Your cat's just looking at you from the ground. 

MAX: What she'll do is, I'll be at my computer. I'll be doing something. And she'll just jump up right over my mouse arm, like, yeah, lap is mine. 

STEPHANIE: And you're like now I am owned. I can't move. 

MAX: That is my life now. So this week we had a lot of fun talking to Marcos Grappeggia at Google and Antoine Castex at L'Oreal about Cloud Workstations, pretty cool conversation. 

STEPHANIE: I agree. This was one of our most exciting launches at Next 2022. I've been waiting to have this chat with them, and it's fantastic that we were able to get L'Oreal in the room with us. And I actually just met Antoine in person in France. So it was really awesome to see him here, too. 

MAX: You've got a lot of fans over there at L'Oreal. You've got your influence spreading further and further. I really liked his story about how he had this vision for deploying Cloud Workstations, and was really intentional about targeting some of the trickier use cases, and leaning heavily on the champions of the goal inside the company, inside engineering, to make it happen, and to get it to spread more widely. 

STEPHANIE: Yeah. It was a very great story with, I think, a lot of learnings and takeaways for other folks who are looking to implement a cloud technology, whether it's something like Cloud Workstations or not. But you'll learn about how he was able to do it across his development teams that are located all over the world with different use cases. 

So we will jump into that in just a moment. But let's go ahead and cover the cool things of the week. 

MAX: Cool things of the week! 

[MUSIC PLAYING] 

My cool thing of the week or maybe two weeks ago, depending on when you listen to this, is a new video about custom org policies with two awesome coworkers, Kelsey and [? Ali. ?] And with a heavy dose of puns and goofiness, they explained this pretty nifty security feature that lets you create policies across your org to set up the right guardrails to make sure that people are deploying, or setting up new cloud resources or projects in a way that's safe and compliant with your company's policies. 

STEPHANIE: Right. Yeah. I know that I've done content about this, but you could create a policy that prevents the creation of public IP addresses for compute VMs, or load balancers, GKE clusters, things like that. So definitely very useful, especially knowing that you can do it yourself, and Kelsey, she was one of our interns. And I'm still so thrilled to see her work coming out, even after her internship has ended. And this video is such a great example of the creativity that they used to show it in a fun way. 

MAX: Yeah. And it reminds me of how much fun it is to get two people together making videos, which we've had some trouble doing sometimes during the pandemic, but leads to so much more levity in the end product. 

STEPHANIE: Agreed. And another great example of a video series that came out is by Debi Cabrera, who's also on our team. And she has a series called "Go Deep with Google Cloud Armor." She just came out with a video on how to configure rules and policies in Cloud Armor. So this is how you're able to maintain a consistent security posture across your internet facing applications. But you might want to tweak requirements for different applications. 

So she'll teach you in this video how to configure these specific rules and policies, again, doing it in a fun and very engaging format. So check out these two videos from our team. 

MAX: This week brought to you by the word policy and the theme security. 

STEPHANIE: Yes. So we're going to pivot here, and now we're going to bring in Marcos and Antoine for our conversation about Cloud Workstations. 

[MUSIC PLAYING] 

Marcos and Antoine, I'm so excited to have you here. Antoine, I just saw you a few weeks ago. So I can't believe we're working together again. Glad to have you here. Do you mind starting by just introducing yourselves? 

ANTOINE: Yeah, sure. Thank you, Stephanie. It's a great pleasure for me to be there with you, and especially with Marcos, my dear friend from Google Cloud. I am Antoine Castex, working from L'Oreal, and as a data architect for the group, and also as a cloud evangelist for all the solutions and that can be better for the business and all the employees. 

MARCOS: Yeah, likewise. Yeah, thanks for having us here and good to see you again, Antoine. So America's product manager with Google Cloud specifically focused on our recently announced offering, Cloud Workstations, providing cloud based dev environments, as well as Cloud Shell, another offering, providing cloud dev environments, but focused on onboarding and evaluation use cases. 

MAX: That sounds awesome and helps move more things to the cloud, as my engineers need robust and resilient solutions. So give me a bit more detail on what is Cloud Workstations, and what does it provide? 

MARCOS: That's a great question. Let me start high level, and then dive a bit deeper into the specifics. So at a high level, Cloud Workstations provides managed development environments. And what does it mean? What is a managed development environment? So the dev environment itself is essentially an IDE available from the browser, or from let's say either local IDE via SSH, trade ticker, backend. 

But that's just the tip of the iceberg. So there are other things which make it, such you can actually develop. So it also covers things such as the libraries you have pre-installed, or code samples you have preloaded, or things such as the compute, or the storage, as well as network connectivity, ensuring you can connect to the right source. 

So this packet is essentially what you call a dev environment, essentially everything you have to code. The idea here is having a dev environment ready for you to get coding from the get go. That's what a dev environment is. And when I say manage here, the key idea here is allowing management of those, essentially allowing those to be preconfigured, essentially follow some kind of configuration, and be automatically set up for your developer. So you can see it from each angle, right? 

So let's say, if you are a developer, you can just press a button, go to an URL, and have an IDE ready for you to code. It just works. That's the key idea for developers, so first onboarding development setup. But it also has an interesting angle, which also appeals to platform teams, administrators, security teams, in the sense where it can create a template, which specifies what is going to come preinstalled. Maybe you have a backend team doing Java development. You can have a configuration say, hey, please pre-install Java, a JDK, spring, and a bunch of samples for this. 

Or let's say you have maybe a data science team. It can have, oh, maybe an image with some beefy GPUs, plus a bunch of Python, like say TensorFlow or PyTorch libraries installed. That's the idea here is essentially that means you just have to worry about defining a template, and then allowing our service, handle creating and managing those throughout the lifecycle here. 

STEPHANIE: Wow. So it sounds really fantastic to me. But I mean what's novel about this? And why did we decide to pursue this sort of direction with Cloud Workstations? How does it differ from local environments set with emulators, et cetera? 

MARCOS: So the idea here is historically people have been in let's say a local environment. And essentially the theme we noticed here was there were some pain points, which our customers [INAUDIBLE]. So there are two key motivations here. So one is security. The second is productivity. 

Let me talk about productivity first. So historically, the way developers work is they have a machine shipped to the place, or they buy a machine in a place. It has to be a beefy machine, because that's where you're doing the bulk of your work. And then you go in general to either a checklist, or things to do, or some best scripts to install, all the tools you see fit. And then you're ready to code. 

But this has two potential pain points we heard from our customers. So one is it takes time to go through this process. And the second is there's a risk of configuration drift, like say the typical works on my machine kind of problem. Which means, OK, so if you are setting up all your environment variables locally, you kind of tempted to install things locally, and you are bound to have this divergence happen. 

One solution which came to that in the past for production workloads is containers. So we use a container. And then, boom. You're fixing this problem. So that is where you saw the explosion of containers on the production services. The idea here is essentially what is novel here is bringing the cost of containers also to the dev environment. That's the key idea here. 

Essentially, OK, so containers are used for providing consistent workloads in the Cloud, versus people SHTVMs installing stuff. Why not have that also be a unit of definition for that environment? There's the key idea here, which is where, say, having those running the cloud allowed us to do this. That's the first thing which is novel. 

Another challenge you have here, it's easy to set up one workstation, one say dev environment, like there's mainly two or three. Once you get into hundreds or thousands of those, that's where it gets tricky. That's where things such as, OK, so how do I provide isolation between environments, how to handle IEM, or how to handle updates. They do have solutions out there, like Terraform, [? Eclipse, ?] which some folks are using. 

And essentially what we saw here is those being complex over time. And one thing we learned over Cloud Shell over the course of eight years is that gaining this kind of scale, that's a thing which is pretty complex scaling place. And the idea here was, OK, so we have all this orchestration layer built over the course of using Cloud Shell. Why don't we just take that, and allow customers to run that directly on their projects and have that managing their resource? 

So in two words, so [INAUDIBLE] environments defined by containers, and the second is this, oh, just let an orchestration layer manage all my resources for me here. 

MAX: So Antoine, why did L'Oreal choose to use Cloud Workstations and Cloud Shell? 

ANTOINE: Honestly, it's a very good question, because it comes very, very far away from today. A few years ago when L'Oreal decided to move to the cloud, the idea we were having, me and all my colleagues, was imagine you can let people work from anywhere, at any time, and with any devices. That's very great. 

MAX: I like that. 

ANTOINE: But the problem was a feature software, what can you use? Whatever you use Google Cloud or not, it was a big question. And when we decided to jump into Google Cloud for all the data, all the analytics topics that we have-- and trust me we have a lot-- I was, OK guys, probably the best team to move first is the developer. Why? Because the developer is someone which has a dedicated local environment configured, configured deeply with library, with shortcuts, with a lot of stuff. And meaning it's probably the most difficult one to move. 

And not only as a human aspect, but as a technical aspect, so OK, Workstation was not existing at this time. So we start by Cloud Shell saying, hey, it's a new ways of working, on the cloud. You are not attached to your laptop. I was, hey, the dream I have is to let you come to the office without your laptop. You have a laptop at the office. You have your own at home. And you don't need to use it, and to take it from home to the office, from the office to home. So that was my dream. So it was working, I would say, well with Cloud Shell, and a lot of different additional features. 

And having some problem, I was discussing with Google Cloud, and I was discovering someone which was Marcos, saying, hey, I have great news for you. I am working on something which is very new, which will come later in some months and years. So we were working closely together, saying what are my problem. And Marcos was, I can solve it. So month after month, as an agile discussion, step by step, here we are now and Workstation is born. 

STEPHANIE: Yeah, that's incredible to see that our customers are super involved in this product lifecycle and testing it. And I always have joked about this idea of being able to locally develop on a laptop, even if you're on a plane, you could push to prod. And you could theoretically throw that laptop away, and still be able to do the same work the next day. So it does seem like that might be a little far fetched, but it's really nice to see that can do it at home, and not have to worry so much about the governance, especially from an administrative perspective, maintaining policy and governance across environments too. 

So just kind of moving into what you mentioned, Antoine, you said that you were using Cloud Workstations in conjunction with Cloud Shell. I just want to outline the differences between the two, Marcos especially, since you are the PM for both. Can you outline what those are? 

MARCOS: Yeah. I can definitely chat more about this. So let me start by talking about what is similar between both, right? So both will provide you with an IDE available directly from the browser. So for Cloud Shell, you can go to your ide.cloud.google.com today, and just get something which just works on a browser. Similarly from Workstation, you can go to our Console, and create a workstation, and get up and running. So in that sense, both provide IDEs. 

So then you may ask me, OK, so if both provide IDEs, why have two separate offerings both providing IDEs in dev environment, right? So the key idea here is both focus on different steps of the developer lifecycle. So I think one way of looking at Cloud Shell, it's our onboarding, prototyping, evaluation sandbox. It's a place you can go. You can say, code like the wind, write your stuff, or let's say, oh, maybe I want to try a CLI, and I don't have a chance to [INAUDIBLE] cloud locally. 

Or maybe you want to get a code sample and try it out. Or maybe you just want to say, do some basic management tests. Cloud Shell is the place you go. It comes, let's say, with a kitchen sink. I think that our base image is around say 15 gigabytes of tools pre-installed. You can just go there. It should just work for all these basic development use cases. It is free. You can just go there, and use those directly for those tasks. 

The limitation of Cloud Shell though, which essentially means that there is less flexibility, meaning we're giving you a preconfigured, a specific VM. And it's not really optimized for day-to-day development tests. Yes, if you try hard, you can develop in there. But you soon start meeting limitations, such as, hey, now we need your access private resources within my network, or now I need to have a way of backing up my disks. I now need to have bigger machines for bigger jobs. That's the part where it starts falling short of its limitations. And it's where Cloud Workstations comes in. 

So Cloud Workstations, that's the place which is meant to be, let's say, the solution for your primary day-to-day development. Let's say your 9:00 to 5:00 go-to tool. Let's say, the idea here is Cloud Workstations will be like from the get-go to have customization being top of mind. So you can pick whatever VM you want to use. You can customize your environment to whatever you see fit. 

So yes, we gave you a bunch of IDEs. But they also support more IDEs, like JetRails, let's say IDEs such as [? Writer, ?] IntelliJ, PyCharm, and so on and so forth. And nice thing is everything on Workstation is a container, which means you can install whatever tools you want. So you can imagine, say, Workstation having not only the IDE, but also maybe a database preinstalled, or web server pre-installed, all ready to go. And that's one thing, as well as deeper integrations with GCP. 

So let's say the idea here is you can have Workstations running inside your VPC, using VPC Service Controls for security enforcement, and let's say having disk backup policies being applied. That's essentially is a thing which was build from the get-go for digital development. That being said, I can see developers typically spending most of their time in the Workstation, and going to Cloud Shell, say, whenever they want to do, say, one-off ephemeral kind of test. [INAUDIBLE] it's covering two complementary offerings for different types of flex segment. 

Say [INAUDIBLE], if you're just starting with trying out Cloud IDEs, maybe you want to go to Cloud Shell, just kick the tires. And then if you're serious, OK, maybe you want to go to Workstation, and actually set up something, and then have all those things configured to be customized specifically to your team's use case here. 

MAX: So how is L'Oreal using Cloud workstations today? How big is the install base? Is it making things better? Is it adding new challenges? 

ANTOINE: The fact is we have many different teams in many different countries working in some topics that are the same sometimes, and different in some other times. What we are sure is we want to adopt one ways of working. It's probably a big dream. But we have the tools. The first part of this dream is OK now. Because we provide a dedicated firm, where you say I am a developer coming from this country, working for this zone, and I want an MVR or not. 

So it codes by API Cloud Workstation, and it gives you an image validated by the security team with different kinds of performance, depending on if you are a front-end developer, a backend, or something else. We have different profiles defined. 

MAX: So you can standardize, but also give people the machine that they need at the same time? 

ANTOINE: Yes. It's a little bit flexible. So it has to be, so it's controlled but flexible. So we don't have to manage an HTTPS domain, to have access to the VM, with a URL redirected. So everything is managed by Google. And it's exactly what we were looking for. So that's perfect. It reduces the time to market. It delivers another version of the image. So for that, it's very great. And just remember what I was saying. 

The fact is we have different teams. We have a 24 hour by 24 team which is working in specific country. We have a local team. They have some different culture and some different flavor in terms of technology library. So the fact that you can have, like one for PyCharm, or Visual Studio. It's great to know. Because you have different teams that doesn't like the same product. So Yeah, no worries, guys. You can continue to work as it is. 

MAX: But I don't like that IDE. I want my IDE instead. 

ANTOINE: Exact. 

MARCOS: Yeah, that's a big thing. So developers [INAUDIBLE] all this time, let's say, tweaking and customizing IDE, should be perfect for their needs. And we need to try to take this approach of, hey, let's try to meet developers where they are and just be additive to what they have, versus try to be cheapening it in the sense of forcing them to change his specific IDE. 

STEPHANIE: Yeah, and that leads me to asking about how you were able to convince, or persuade, or help aid in the transition for all of your development teams who have all these different combinations of configuration needs and environment needs? So what capabilities are available to make the migration easier, and just, Antoine, from your perspective, how were you able to go through that process with your teams? 

MAX: Do you have any advice for others who are trying to change the way their developers work? 

ANTOINE: We made a study saying what, are the IDE you use the most? So we shot two, three. What are the libraries, depending on the language that we have adopt? Again, we would use the survey. And at the end, what are the external library you need on top of that? And we make some choice. And we say, no worries, guys, if something is missing. It will continue to work. This is a V0. There will be a V1. There will be a V2. 

So a few of them adopt the V0. They were saying, that's great. It's working well. And that's the biggest and the best publicity you can have, because they speak to the rest of the team. And the publicity is doing their own job. So you don't have to make the promotion. The promotion is done by the product itself. 

MAX: You grow your own champions internally? 

ANTOINE: Exactly, yes. 

MARCOS: Yeah, I really like L'oreal's approach, which other customers [INAUDIBLE]. First, let's do a POC. Allow people to try it out as they see fit, and getting some champions to gradually bubble up here. And yeah, and once you get some first wins, then it becomes much easier to say, hey, let's now talk to more developers, or let's now talk to security [INAUDIBLE]. 

I think this grassroots bottom-up approach, is a great way of setting the foundations before move more broadly, more teams just start using Cloud Workstations. Yeah. 

MAX: How did you make sure that your POC at L'Oreal was going to be a positive experience, and not either frustrate people, or open up new security holes, or break permission structures? It sounds like that could be a very sensitive time, if someone's trying to make this switch. 

To answer for that question, the first one, is we measured the adoption, depending of the amount of the workstations that are created. And we say in the same time, don't forget that the old generation of VM and Cloud Shell environment that we were accustomly doing before we'll be shutting down in a certain date. So you have probably no choice to switch to something else. 

And the second one is we do agile meeting regularly in terms of Sprints, the development where we are, and this topic is integrated in that kind of discussion. OK, we are finishing with the discussion about the library. What about the environments of the developments? Are you satisfied or not? Do you have some pain points? Exactly like if you have a feature problem with your customer, saying, I need a button at the left and not at the right. So now, you are the developer. Your job is to fix that. 

So I am like this. I am asking my customer, or my client, are you satisfied about the product or not? And that was working very well, because during the alpha with Marcos, we were working like this. I was discussing with the team, and every month I was having discussion with Marcos, saying, OK. They miss something like that. Can you provide me something like this? 

Yeah, but please wait one month more, because I need more time to develop it. And it was OK, again, again, and again. 

STEPHANIE: Wow. Yeah, a great relationship happening there. So it sounds like the first step would be to identify a POC with a few development teams, make sure you have an open channel for feedback, and then involve the necessary teams. Like that should be FYI, involve the security team so they can also be familiar with the tools, and then after that start rolling out broadly to the teams. Is that fair to say? 

ANTOINE: Yes, exact. Because imagine you are a developer. You are hired by lawyer. You are coming into a very big company which has a lot of process. And you say, OK, this is my first week. What I have to do? You have to create your dev environments, install the tons and millions of library we are using, probably or not, so it can consume for you five days to be ready to work. Now, it's not the case. We give you something what we call keep it simple, a lightweight dev environment which only gives you exactly what you need, and nothing more. 

After, you will add your own story into that. But firstly, you have something which is ready to use, security compliant, and cost efficient. Wow. Great. 

MAX: Sounds like a much better onboarding experience for a new developer, and less headache for the operations and security teams at the same time. 

ANTOINE: Yeah. 

MARCOS: Yeah I mean like the expert example, which Antoine mentioned, it gives really, say, a good pattern where teams are. So I think it's this combination of new engineer onboarding, and something which just works, and have this wow experience. OK, I just get into reading and writing code from the get-go which is a strong selling point. As well as for existing developers, reducing the barrier, the obstacles to migrate. There's also a good pattern we saw, for example, a developer may say, hey, I use VS code, are use IntelliJ, or use PyCharm. Please don't take this away. We say, no, no. We're not taking this away. You can keep using your existing tools. We're just complementing and bringing in some additional capabilities. I think it's a good way of framing this and creating even say interest among our developers within your organization. 

MAX: So how does this fit into the broader software delivery shield suite of tools that help developers with their velocity, but also make sure that they're shipping the software that is actually going to be safe? 

MARCOS: So Delivery Shield, for folks who may not have heard before, is essentially GCP's holistic portfolio of solutions to enable customers or organizations to have a more secure software supply chain. It follows the similar principle of you can pick and choose whichever solutions meet your needs. But using the whole portfolio is a good way of getting to say this, 1 plus 1 equals 3 kind of factor. 

So SDS essentially covers multiple elements of the software supply chain. So it covers things such as CI/CD monitoring, run-times, software provenance, all the elements you have. Workstation provides one interesting and important element of this, which is security of dev environments and exfiltration prevention of source code [INAUDIBLE]. That's essentially the way I could see Workstations focusing here. 

And as part of this, I'll now talk about some of the features you want to see, which may resonate better with say the security folks, which is the key idea here is IDEs and code editors are where source code is born. So there are multiple potential tech vectors coming up over there. And having source code and secrets and data stored locally expand your potential attack vector. The idea here is, yes, you can secure those. But it just becomes something harder to have, say, all the right, let's say, security layers around those. 

The idea here is by shifting those to the cloud, you can have an environment which essentially allows you to have the mechanisms you're used to using within a production services also being applied to your dev environment. And to give us some examples here is, source code prevention. So the idea is if you don't have source code in local machines, you can now and only have those let's say starting memory. You can now mitigate the exit of, say, one of your local machines being compromised. That's one of the ideas here. 

But in addition to that, to say once you're inside Workstation, you have things such as IEM controls, to ensure that you are indeed who you are, using the workstation, and even IEM controls behind for SSH connections. So then you have private keys being stored locally, as well the ability of running user logs, or VPC flow logs, those, as well as networking. Right? 

So once you have the workstations inside your network, you can enjoy from all those things such as firewall rules, VPC service controls to limit access to resources that you shouldn't be getting access, from there as well as the ability to have in some cases for some heavily regulated customers, a fully private gateway, which means all your workstations are fully private. Which means you can only access those if you first VPN, or connect to your private network. It's kind of a way of, let's say, just making sure it's cutting down from all the angles the potential vectors, or at least slowing down the angle the vectors for exfiltration or security breaches. 

One thing which is very convenient we heard from customers, is the ability to more easily manage and patch workstations. The idea here is let's say tomorrow there is a Log4j style vulnerability affecting your developers. And you want to patch that as soon as possible. So rather than say, hey, please update your machine to have that specific version of this library-- 

MAX: I'd rather someone else patch it as soon as possible. I don't want to patch it. 

MARCOS: Yeah, exactly. So the idea here is since workstations are essentially VMs running containers in the cloud, and those VMs are ephemeral. So you get a new VM every time you show up in the morning. You can just modify the container, which has this. Patch the container, and boom, next time you come, you can have that VM patched. Which means now we can now apply all the typical container security measures such as pipelines, container analysis, apply those on your dev environment workstation. 

Essentially how I see this fitting essentially, ideally you want to have a holistic approach. That's CI/CD or at each run-times. But I also want to make sure that you are kind of closing where many of the security breaches are born, which is directly on the code editor. Yeah. 

STEPHANIE: Yeah, and I think with some of these vulnerabilities, like Log4j and some on the previous ones, Google Cloud has been one of the fastest providers of those in the industry to be able to detect and mitigate some of the impact that it's had on any of the environments. So there's a huge benefit there to having that kind of oversight on vulnerabilities. 

But looking into the future a bit more, Cloud Workstations has been already started to be introduced across the development environments at L'Oreal. So I'm curious what your plans are moving forward, Antoine, with rolling this out further, or introducing it to broader teams. 

ANTOINE: As I said before, the idea was initially to start with the developer, the pure developer. The second step will be to see where the people that are in the middle between the business and the pure development, some IT people or close to IT people, that needs to communicate and interact with API, and doesn't want-- and really doesn't want to let them install software in the laptop again, because we are convinced that the future is on the web, is on the browser, will be probably the next target of adoption in terms of population at L'Oreal. 

MAX: Were there any things that you do differently with the experience you have now? Or if someone were to try to start this same journey that L'Oreal went through, what would you tell them to think about or do first? 

ANTOINE: You have to explain that in the less technical way as possible. Because the problem in that story is not the technique. The problem is the human. A human has difficulty to change his mindset, his way to work. In all of the action that we are doing every day, what car are you driving, what flight, how are you spending your holiday, how are you buying some food? So whatever it is, it's a human discussion. It's a human story globally. 

So you have to market that great. OK. I am at L'Oreal. It is a more-- it's a marketing company, because we sell products. So we have this culture of change. So it is probably a little bit more easy for people at L'Oreal than other companies. But I am sure it's still something you have to explain clearly, what's the benefit of that migration. That is the target? And where we wants to be? We wants to be everywhere. So keep in mind what I was saying in my introduction. Walk anywhere at any time with any devices. When you adopt that, you say, how I was doing before that, it was so difficult, because I need to be sure I have my laptop with me. I had to be sure I have everything on it, if I lose it I am nowhere. I am lost. 

So now, we don't know. Me, you, Stephanie, Marcos-- because we are working exactly the same together. So that's great. But we have to explain to the people that these new ways of working is very something great. 

MAX: Was there any particular audience or profile that was hardest to convince to do this? 

ANTOINE: Like every time, you have to identify some key people, people that are more curious than the rest of the people. They will raise their hands automatically. But you have to clearly notify them, bring them, and I would say convert them. I convert myself. And I like to convert people by the fact that the story I am trying to tell you. You say, oh, that sounds interesting. I really want to be involved in something like that, because I want to live, like you, something which is easy, flexible, no attached. I can work anywhere. 

I'm at my grandmother's house. I have something to do very quickly. I plug my multiple factor authentication key. I am logged into the system, and let's go. That's, wow. That's amazing. 

STEPHANIE: Hopefully it's quick, so you can get back to hanging out with your grandma. 

MAX: Got to bake those pies. 

STEPHANIE: Exactly. 

MARCOS: It must hard just having to stop doing things at your grandma's house and fix them. 

STEPHANIE: Yeah. Yeah, but I totally get it. It's hard to relinquish status quo in what you're used to, especially if you hold it near and dear to you, physically even. But I think what you said is so true. You put a stake in the ground that you believe in the future of web for the company and for the developers. And you convinced some of the hardest to convince, which are the people who are all over the world, right? 

So that's great to see that the adoption has increased. And for Marcos, from a product team, what's the landscape for the future for Cloud Workstations? 

MARCOS: That's a great question. I'd say short term, our focus is really about getting ready for our general [INAUDIBLE] This is year is essentially polish and stability. But I think I can see a few directions which we'll be investing first. So one is similar to our recently announced integration partnership, which that brings for more [INAUDIBLE]. I can see us working towards either playing along or natively supporting more and more developer tools, essentially ensure the broader suite of developer use cases being used are properly supported. That's one area. 

And the second area I see also as potential of us investing on better addressing the broader spectrum of developer audiences. I think I'd say, like Antoine mentioned, where backend [INAUDIBLE] were addressed. We're currently doing a relatively good job of addressing the CEO's expenditures. Say, hey, but there are so many flavors of developers. Let's say mobile, IoT-- 

MAX: Chocolate. 

MARCOS: Games. Yeah, so essentially providing a similar experience to a broader spectrum of that. But I think those are kind of two areas we have here. And of course, deeper security integrations, I think the key idea trying to do here is provide something which makes developers more productive without sacrificing anything on the security side. I think that's a key point. Essentially, it's kind of trying to balance this often tricky yin-yang between security teams, developer communities which provides something which checks all the boxes for security, but also not only provides a good, but also better developer experience, than what they had previously with the local environment. That's where I see some potential investments with deeper integrations with our broader software delivery suite here. 

MAX: And Antoine, what are you hearing from the users of Cloud Workstations and Cloud Shell at L'Oreal? What do they want to see improve, or change, or evolve going forward? 

ANTOINE: Probably more and more integration with the rest of the Google Cloud ecosystem. Because every time we can simplify the life of the developer, the development is more faster and more easily adapt. So every time we provide new capabilities, it's great. So they have no specific pain point, otherwise I have the phone numbers of Marcos. So that's great news for him. 

But they have some dream to again simplify because. They clearly understand now all the works can be simplified with just one simple, and simple is not a basic one, it's just saying it's just a software which lets you do something very differently what you are doing more difficulty before on your side. And now you just consume, and you just play. 

MAX: Sounds like fun. 

STEPHANIE: Yeah. 

ANTOINE: Yeah. 

STEPHANIE: Exactly. Well you have Marcos on speed dial in case you need to give him some quick feedback. 

MAX: Yes. 

STEPHANIE: But I just want to thank you both for being on the podcast. It's great to see the perspective of both the product and L'Oreal teams. Just to give people a way to connect, where can people learn more about Workstations, and where can people connect with you, Antoine, or your team if they're curious to learn more? 

ANTOINE: For my side, I am still available on Twitter, and on LinkedIn. So they can find me very easily. Or they can look at myself on YouTube video, that I can do sometimes with Stephanie, and sometimes with different Googlers. So no issue, and don't hesitate to ask me if they need some feedback, then some roundtable, they need some discussion. I am still available with pleasure. 

STEPHANIE: And you're also leading up the C2C or the Google, one of the Google Cloud communities. 

ANTOINE: Yes, it's a French initiative. But we do monthly interviews of rock stars at Google Cloud. And oh, Stephanie was one of them. So we do a monthly interview of the [INAUDIBLE] product. 

MAX: Total rock star. 

ANTOINE: Yeah, and we have done a discussion on Workflow, on BigQuery, on Composer, many different products. So keep connected on the C2C. Again, if you need the address and the URL, don't hesitate to contact me, so you will see more and more content for 2023. And so physically, if you are going into Paris, you are more than welcome. 

STEPHANIE: And we'll include those links. 

MAX: That's a good excuse. 

ANTOINE: Thank you. 

MARCOS: Right, and on the Cloud Workstation side, first I'll give some links for you folks who in case you want to learn more about, you can go to cloud.google.com slash workstations, for trying out workstations. Or if you want to try the Cloud Shell, you can go to ide.cloud@google.com to try it out as well. I'm also available on Twitter. My Twitter handle is a bit hard to spell, but it's G-R-A-P-P-E-G-G-I-A. But I think you can also look at the notes, and see that. But I'm also eager to respond to any questions or feedback folks may have. Yeah. 

MAX: Fantastic. Thank you both for sharing your stories with us, for making yourselves available, and for continuing to help developers and share what you've learned so that we can be more productive and spend less time patching updates. 

ANTOINE: Thank you so much. 

MARCOS: Thank you. 

STEPHANIE: Love learning about Cloud workstations. I think it's going to be a trend that will continue in the industry, especially as all the different providers, especially Google, is building more robust environments. That migration barrier has reduced to a point where you can enjoy Cloud Workstation benefits while keeping that experience feeling like it's a local development environment. 

And I also just loved how Antoine showed that to convince the hardest groups at the company you need to start with a vision and rationale to get people bought in. And his thesis was that web is the future. 

MAX: It's a great example of really effective change management. Because this is a huge change. And for a lot of engineers, and developers, and technical folks, they don't want somebody else to control their desktop, their workstation, their IDE, any of it. And so the way Antoine and his team at L'Oreal approached that change management is starting with these hardest customers, finding the champions, getting a really good perspective on the use cases, and then showing people we can make you more productive, we can make you more secure. We can also improve our compliance if we go this route. 

It's a great case study in how to make that kind of organizational change when there is a lot of friction and a lot of inertia. And he succeeded. 

STEPHANIE: I know. And it feels like it was in a relatively short amount of time. And he had the help of working with the product management team to directly impact the future of the product. So it's a really good example of that partnership happening during the beginning launch phases of a new product at Google. 

MAX: That's super cool. 

STEPHANIE: But Max, I was going to ask what you're working on. But I see that you have your cat on-- you've got a cat on your back, Max. 

MAX: Yeah, so what I'm working on is figuring out how to teach my cats to do various silly tricks. We've more or less convinced them of two things. One is that my lap when I'm at my desk here at home is a great place to sit and sleep and get pets, and that has been happening a lot, because I've been home quite a bit this week. This is not so much a trick. This is just her figuring out that my back is not in fact my lap, and I can't pet her when she's behind me. 

The other trick though that we've really been amused by and I'm going to try it out now, and she might spring from my lap any moment now. We're on the second floor and there's a bunch of trees right outside our window. And there's a little mini rooftop of the retail on the first floor of this building. Is if I say the word burbs real loud, one of my cats will perk up from anywhere in the house she'll get up, and she will sprint to the windows in our bedroom. Because we may regularly put birdseed out on the windowsills, so that the pigeons of New York City just come all the time and hang out there. And she loves stalking these birds. She's an indoor-only cat. She can't get out. But she will stand there, stock still, tail down, ears flat, just waiting, waiting, and then she'll like rub and smack the window. All the pigeons will fly off. 

STEPHANIE: Oh, that sounds so fun I mean entertaining for the family, you know? Well, you better take a video and send it to us once you're able to train them. 

MAX: I'm going to do that. Yeah. I think I need to document this a whole lot more. The cats do have their own Instagram page. So I might be putting it up there. 

STEPHANIE: Ooh. Let's get them Insta-famous, OK, everyone? Do your thing, internet. 

MAX: If there's someone who could do it, it's Stephanie. 

STEPHANIE: Oh. Just sign me up. I can be your brand manager. I'd actually rather be a pet influencer than an influencer myself, like a normal one. So just sign me up. 

MAX: I'd rather just be a pet or like someone else feeds me, and caresses me, and I don't really have any responsibilities. 

STEPHANIE: You have no idea how famous you might be online. 

MAX: What are you working on? 

STEPHANIE: Well, that's a great question. I am tying up loose ends. I'm actually planning a trip where I am spending time with family and going to the Caribbean. So I am just ready. I'm ready for my break soon. 

MAX: Yeah. 

STEPHANIE: It's the first one in a long time. 

MAX: It's a good time to do some decompression, rest, recuperate, and make sure that you can sort of clear your mind a little bit before stepping into the New Year, and the new set of goals, responsibilities, and projects. 

STEPHANIE: Yes, more and more and more grinding, but hey, we love our job, so nothing to complain here. For everyone else, I hope that you're having a good week, and we'll see you all next week. And we're almost at the end of the year. So stay with us. 

MAX: Thank you all for listening. 

[MUSIC PLAYING] 

I have successfully gotten the cat into my lap. And she's on her back and I'm rubbing her belly. It's the best. 

STEPHANIE: This has now turned into bedtime stories with Max and cat. 

MAX: Feline ASMR with Max and Stephanie.