+++
audioDuration = "00:23:06"
audioFile = "Google.Cloud.Platform.Podcast.Episode.286.mp3"
audioSize = 55445970
categories = ["Serverless", "Cloud Run", "Cloud Functions", "App Engine"]
date = "2021-12-01"
description = "Guest Jason Polites joins Stephanie Wong and Bukola Ayodele this week to talk about advances in serverless computing with Cloud Run and how developers and wallets are benefiting. "
draft = false
episodeNumber = 286
hosts = ["Stephanie Wong", "Bukola Ayodele"]
title = "Serverless, Redefined with Jason Polites"
image="/post/episode-286-serverless-redefined-with-jason-polites/images/hero/hero-EP-286.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/r6kumz/episode_286_serverless_redefined_with_jason/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Guest [Jason Polites](https://twitter.com/jplts) joins [Stephanie Wong](https://twitter.com/stephr_wong) and Bukola Ayodele this week to talk about advances in serverless computing with Cloud Run and how developers and wallets are benefiting.

Cloud Run, a managed service which allows developers to run containers, is now available in all GCP regions, offers increased resource access, global load balancing, and more. Jason tells us how this evolution of Cloud Run has led to the support of bigger, more complicated, and even legacy software fully and efficiently functioning in a serverless environment. The team at Google continues to expand offerings in order to afford the benefits of auto-scaling and other managed services to all workloads. Always On CPU, for example, supports projects with running background functions.

Later, Jason gives us examples of projects that best fit a serverless infrastructure and the cost benefits of using Cloud Run. He offers cost-saving tips for projects, like committed use discounts and auto-scaling limits. Balancing cost efficiency with global reliability is important, and Jason tells us how this is easily achieved with Cloud Run features like scaling to zero.

To limit the barrier to entry for new Cloud Run and container users, Jason and his team have been working on open source build packs. Developers can turn code into a container without creating Docker files. The containers running in Cloud Run are highly portable as well, giving companies the freedom to move their containers freely.

##### Jason Polites

[Jason](https://twitter.com/jplts) leads the Serverless Compute product team in Google Cloud, including products like Cloud Run and App Engine.

##### Cool things of the week

- Illicit coin mining, ransomware, APTs target cloud users in first Google Cybersecurity Action Team Threat Horizons report [blog](https://cloud.google.com/blog/products/identity-security/coin-mining-ransomware-apts-target-cloud-gcat-report)
- Microservices architecture on Google Cloud [blog](https://cloud.google.com/blog/topics/developers-practitioners/microservices-architecture-google-cloud)

##### Interview

- Cloud Run [site](https://cloud.google.com/run)
- Cloud Run CPU Allocation [docs](https://cloud.google.com/run/docs/configuring/cpu-allocation)
- Run more workloads on Cloud Run with new CPU allocation controls [blog](https://cloud.google.com/blog/products/serverless/cloud-run-gets-always-on-cpu-allocation)
- Docker [site](https://www.docker.com)
- Google Cloud Buildpacks [site](https://github.com/GoogleCloudPlatform/buildpacks)
- App Engine [site](https://cloud.google.com/appengine)
- Cloud Functions [site](https://cloud.google.com/functions)
- GCP Podcast Episode 173: Cloud Run with Steren Giannini and Ryan Gregg [podcast](https://www.gcppodcast.com/post/episode-173-cloud-run/)
- GCP Podcast Episode 203: Cloud Run GKE with Donna Malayeri [podcast](https://www.gcppodcast.com/post/episode-203-cloud-run-gke-with-donna-malayeri/)
- GCP Podcast Episode 261: Full Stack Dart with Tony Pujals and Kevin Moore [podcast](https://www.gcppodcast.com/post/episode-261-full-stack-dart-with-tony-pujals-and-kevin-moore/)

##### What's something cool you're working on?

Bukola just finished Season 2 of the [Click to Deploy series](https://www.youtube.com/playlist?list=PLIivdWyY5sqKJTzSg5sK9L3z2132gXNwW).

{{< transcript "[MUSIC PLAYING] STEPHANIE WONG: Hey, everyone, and welcome to episode number 286 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. And today, I'm back here with my colleague, Bukola. How are you?" >}}

BUKOLA AYODELE: I'm good. Hello, everyone. 

STEPHANIE WONG: Where are you staying these days? Are you still in the East Coast? 

BUKOLA AYODELE: OK. I'm freezing my butt off in the East Coast. Unfortunately, it's winter, but at least the holiday season is coming, so-- 

STEPHANIE WONG: I think the East Coast is more festive during the winter. So even though you do have to survive the winter, unlike us in California, you do have a much more festive Christmas and holiday season over there. But anyhoo, today we have a hot topic, which is a lot better than the cold you're surviving through. So what's today's episode about? 

BUKOLA AYODELE: Yeah, so today's episode is about a lot of people's favorite topic, serverless. Today, we got the chance to talk to Jason Polites, who's the group product manager for Serverless Compute here at Google Cloud. 

STEPHANIE WONG: Yeah. So serverless technology has been turning heads, as you all know, for its ability to give developers back what they love. It lets them focus on the code while the platform takes care of the infrastructure and auto-scaling, even back down to zero, so that all your wallets can thank you. So back in 2008 at Google Cloud, we started with App Engine. And then in 2017, we released Cloud Functions as an event-driven serverless platform. 

And then the next offering in the serverless family supports serverless microservices, and that is Cloud Run, which was released in 2019. And so Cloud Run is a managed compute platform that lets you run stateless containers that are invocable via web requests or things like Cloud Pub/Sub events. And really, the power of this product is that it abstracts away all infrastructure management. So again, you can focus on what matters the most, which is building your applications. 

Just some good background is that it's built from Knative, letting you choose to run your containers either fully managed with Cloud Run or with Anthos. So it's a super loved topic that we have here today. 

BUKOLA AYODELE: And yes, Jason and his team have been doing a lot over the last couple of years building out Cloud Run functionalities to provide a truly seamless dev experience. If you want a primer, we have a number of awesome podcast episodes about Cloud Run, like episode 173 and 203, so definitely check them out. 

STEPHANIE WONG: Yes. So before we jump into our convo with Jason, let's first talk about the cool things of the week. 

[MUSIC PLAYING] 

All right. So my cool thing of the week is actually a report from our Google Cybersecurity Action team. Now, this action team was announced at Next this year in October. And it's a security advisory team that has a mission of supporting the security and digital transformation of governments, critical infrastructure, enterprises, and small businesses. And so a big part of this is to bridge their threat intelligence to yield specific insights such as when malicious hackers exploit improperly secured cloud instances to download things like cryptocurrency mining software into their systems. 

So this report I found really exciting and interesting because it found trends and lessons learned from recent cybersecurity incidents and close calls. And so in this blog post, you can read about their suggested concrete actions for customers that will help them manage the risks they face-- checking out vulnerable GCP instances, spear phishing attacks, patching software, and using public code repositories. So all of these comes with risk. 

BUKOLA AYODELE: Awesome. That sounds really interesting. So one of the cool things I learned this week was on the Google Cloud Blog. Our teammate, Priyanka, actually wrote this really helpful article called "Microservice Architecture on Google Cloud." It does a great job simplifying microservices architecture and the benefits of choosing that architecture over a monolithic one. And my favorite part of the article was how she used real-life use cases, like if you were to build an e-commerce store, what would your different microservices be? And what corresponding cloud tools would you use to build that website? So if anyone's interested in learning more about microservices, they should definitely read that blog post. 

STEPHANIE WONG: Yeah. That's another very popular topic to learn about here and very related to Cloud Run in a sense too. All right. Well, let's go ahead and jump into our conversation with Jason to learn more about Cloud Run. 

[MUSIC PLAYING] 

BUKOLA AYODELE: Thanks for joining us, Jason. Could you let our audience know who you are and what you do? 

JASON POLITES: My name is Jason Polites. I am a group product manager at Google. And I work on our serverless computing products in Google Cloud, including Cloud Run. 

STEPHANIE WONG: Wait. I think you forgot to mention your love for Porsches, right? That's what I heard about. 

JASON POLITES: Yeah. I'm a Porsche fan boy. 

STEPHANIE WONG: I am too. Probably not as big as you, but love Porsches too. So, OK, today, we're talking about Cloud Run, as we know. Back in 2019, Cloud Run was one of our most exciting announcements. And I remember that we worked on that demo together where we deployed using Cloud Run and Cloud Run for Anthos and also ported over to IBM Cloud using Knative. So it was very exciting for the audience and for me to go through that experience for the first time. So what's changed since then in terms of the overarching themes for the product team that you're on? 

JASON POLITES: Yeah, I mean, I wouldn't say that anything's really changed. I think that when we launched in 2019, we took a MVP, Minimum Viable Product, approach, and we launched with the capability to run a container mostly around web serving as the primary use case. And since then, we've really just been evolving that story. So we progressively added more regions. Cloud Run is now in all GCP regions. 

We added support for connecting to VPC networks, managed secrets, global load balancing, and also just progressively increasing the amount of resources that you can access, like memory and CPU. We started with 2-gigabyte services, and you can now go up to as high as 16 gigabytes. So we're just progressively pushing the boundary of what's possible. 

STEPHANIE WONG: Now, often a concern for developers with serverless functions in particular is that they're somewhat limited in the types of workloads that they can run. So for example, running short-lived stateless applications works very well, but eventually, teams want to run more heavyweight applications like large spec APIs or legacy apps. How are we addressing these with Cloud Run today? 

JASON POLITES: I think this really talks to the heart of why we built Cloud Run in the first place. Back in 2014, when Amazon launched Lambda, this term "serverless" began to emerge. And even today, if you do a Google search for that word, you'll find all sorts of definitions that talk about many of the things you just mentioned-- short-lived functions. They might refer to it being event-based, they might refer to the billing model paying down to the millisecond, and so on. 

And while some or all of those features might be appealing, in that traditional functions-as-a-service model, it's sort of an all-or-nothing proposition. You either have to rewrite your application as functions, or you don't get the benefits of those serverless characteristics like auto-scaling and the fine-grained billing. 

When we launched Cloud Functions, we had a lot of customers telling us they love the fact that it was simple and automated and auto-scaled, but then they wanted to run workloads which weren't a great fit for that abstraction. So maybe they had some old Java Spring application that was much more heavyweight, and it was not a good fit for a more lightweight sort of event-based function abstraction. 

So with Cloud Run, we're trying to expand the types of workloads that you can run so that you can bring those serverless benefits like auto scaling to a wider variety of workloads. And one example of some of these workloads that perhaps don't fit well into that function abstraction is the way that functions-as-a-service products are traditionally billed. Usually, you're charged for the lifetime of an invocation or the lifetime of a request. So if the request lasts for three seconds, you're only charged for that three seconds. 

And that's very powerful, and it's a very fine-grained billing model. But some of these older workloads have assumptions around doing things in between requests, so doing things in the background. Maybe they're sending logs to some performance monitoring system. And some of those workloads just don't fit nicely into that very fine-grained billing model. And so in Cloud Run, we've introduced this concept of what we call always on CPU, which allows you to not sort of worry about that request boundary or that invocation boundary. And it allows these background processes to run for some of these older, more legacy-style workloads. 

BUKOLA AYODELE: So some of the biggest advantages of serverless products are scalability, faster time to market, and cost-effectiveness because of its pay-per-use model. Could you explain why it's critical to understand the overall cost model of a serverless solution? And do you have any tips to help customers cut down on compute costs with Cloud Run? 

JASON POLITES: The principle is that you only pay while you're using the service. And so as we just talked about with the functions products, the definition of while you're using the service is really while your function is being invoked. And you're only paying for that time that it's being invoked. And that model works really, really well for a couple of different classes of applications. 

Maybe you have an application that just doesn't get a lot of traffic. It's an ancillary application, and perhaps it just doesn't get a lot of traffic. And so in a more traditional, fixed-footprint infrastructure model like a virtual machine, you might be paying for that virtual machine to sit there idly, waiting for traffic, when you don't have much traffic. And so the auto-scaling of serverless is a real benefit there because it will be at 0 PPS for most of the time. 

Another more common type of application that's a really good fit here is perhaps you do get a lot of traffic, but it's not even. So you might have a high ratio between your peak and your trough in terms of traffic patterns. During the day, you might get a lot of traffic, and then in evening, traffic subsides. And in those cases, these fixed-footprint infrastructure models, you would typically need to provision for that peak. And so during those low-traffic periods, you're effectively overpaying for infrastructure that is not actually needed. 

And so in those two scenarios, these fine-grained billing models where you're only paying while you're actually using the service work really, really well. Some applications are more steady state. Perhaps you don't have such high peak-to-trough ratios, and you're just getting steady traffic all the time. And so for those types of applications, Cloud Run supports, which we've talked about before, this always-on billing model which is a lower price point. And so the advantage of the first, sort of more fine-grained billing model is really good for applications that are either low traffic to begin with or very irregular traffic patterns. 

If you have a more steady-state traffic pattern, you can reduce your cost with Cloud Run by choosing this always-on CPU modality, which is a lower price point. And then if you have very predictable traffic-- and what I mean by that is over a given period of time, like over the year, you can predict that you're going to get at least a minimum amount of traffic-- you can further reduce the cost with a committed use discount. So we'll just give you a discount for committing to a certain usage, whatever you think your minimum is going to be over a year. 

And the last point I'll make is with regard auto-scaling, we've talked about serverless and Cloud Run auto-scales very quickly, and that's great. But sometimes, that can also be scary because we might auto-scale up to meet a very, very sharp spike in traffic. And that might actually be pretty costly. And so we do also offer some limits that you can set on that. So there's a capability, for example, called max instances where you just impose a maximum boundary on the number of instances of your application that we'll create so you don't get a massive surprise if you get an unexpected spike in traffic. 

STEPHANIE WONG: This is interesting because I feel like it's brought up these memories in my mind of the challenges of private data centers and operating with your own hardware, virtual machines, and having to overprovision to make sure that you are prepared for any spikes in traffic. And some of these still extend over to the cloud somewhat. You still want to make sure you're not overprovisioning in the cloud. But it sounds like we're getting to a point in this cycle where we're continuing to create more granular ways of controlling costs, even in the cloud. 

But still, I think customers still want to balance cost efficiency with global reliability and scale. And usually, that means that you have to spin up a container instance in each region. And if you need it to be available 100% of the time, you need to pay to keep it warm. So how do we balance cost efficiency with global reliability and scale for Cloud Run? 

JASON POLITES: One of the cool side effects of auto-scaling, and particularly scale to zero, that's often overlooked is this global reliability use case. Cloud Run is a regional service, which means that it comes in the box with zonal redundancy built in. So within a region, there's redundancy built in. But some applications or some customers might want global redundancy, or I should say regional redundancy. So they want to be able to survive a whole region going down. As rare as that may be, it does occasionally happen with natural disasters or power outages or whatever it may be. 

And, again, in a more traditional fixed-footprint model-- let's say you needed 50 virtual machines to deal with the traffic in a given region, and you wanted to orchestrate a failover region to be able to survive an outage in that first region. Well, you would need another 50 virtual machines in that failover region to accommodate all of the traffic. And so now you're up to 100 virtual machines, but 50 of them are really not needed. 

And so one of the advantages and interesting side effects of the scale-to-zero behavior of something like Cloud Run is that you can have that global footprint without having to pay for that excess capacity. Now, in a simplistic, naive model, you might say, well, you have a primary region and then a failover region. And in that failover region, you're getting zero traffic, so it's costing you zero dollars. 

In reality, you would probably be load balancing across both of them. But in either way, we're only needing to accommodate the number of instances of your application that are needed for the traffic pattern, wherever that is. And so for really no additional cost, you get that global redundancy capability. 

STEPHANIE WONG: One thing that also comes to mind is just for customers to understand the options they have available to them. For those that want to make sure that they have warm instances available in the case that they do have a spiky traffic pattern, they can always choose, like you've talked about, minimum instances. And then what comes to mind is, OK, well, there's a charge associated with that. 

However, one thing that they may not know about is the option to purchase these committed use discounts, like you mentioned, and also the lower cost of the CPU Always On option as well. So I think it's just about educating and understanding all of these ways of balancing both, having global reliability with lowering cost. 

JASON POLITES: Some of these different pricing options and discounting options are not yet intuitive. This is still very much an evolving space. I would say that over time, we would expect that some of these concepts will become second nature. And we'll sort of look back fondly at the days when auto-scaling wasn't a thing, and it will just be normal. 

BUKOLA AYODELE: I'm going to shift the conversation a little bit to containers. So containers have become popular for new cloud workloads. But many developers may be hesitant to adopt container-based serverless products like Cloud Run if they don't yet understand containers or dockers. So how are we setting people up for success with Cloud Run? 

JASON POLITES: Yeah, this is something we've seen happen. The container format, the Dockerfile syntax, and so on, is a great way to encapsulate your application and its deployment. But it can also be daunting. And there's lots of sharp edges, and there are security implications and best practices that are important to understand. 

And so one of the things we've been working on is a set of open-source buildpacks. These are basically an alternate way to turn your source code into a container without you needing to have to create a Dockerfile. We do the hard work behind the scenes to make sure that the container is created with best practices in mind. And it means that you can just deploy directly your source code. 

Our build system will detect the language that you're using and will choose the appropriate buildpack for that language. And because they're open source-- these buildpacks are open source-- they're on GitHub-- you can reproduce that process locally. And you can also see what's going on under the covers, which is also one of the things that I think-- in some cases, understanding what's going on underneath, inside the system, is a good way to help customers reason about when things don't go the way that they expect. And so by making all of that build process open source, you can see how the sausage is made. 

STEPHANIE WONG: This also reminds me of this episode that we hosted earlier this year that was very popular, called "Fullstack Dart," where we learned about the Functions Framework to deploy easily to Cloud Run. And it's a set of open-source libraries that transforms your code from accepting a request and returning a response to an HTTP server that can accept HTTP requests and cloud events. 

It was really exciting to know this because I think it really transforms the developer experience to be able to deploy to Cloud Run very easily. And we have Functions Frameworks in nine different languages. It really creates a nice dev interface for not just Cloud Run, but any web server you own, or GKE, Compute, et cetera. 

JASON POLITES: This process of turning source code into a container has just extended that one step further with Function Frameworks. And so if you're using Cloud Run directly, and perhaps you want to run a Python Django web application, then in that case, you are creating the HTTP server. But in the functions use case, you just want to write one little function that just takes an input and gives an output. 

And so these frameworks-- essentially, as you suggested, what they do is they just wrap your function in an HTTP server. And then using the same buildpack process that we just talked about, that gets turned into a container and executed in Cloud Run. And these function frameworks are also open source. So, again, you can reproduce that entire end-to-end process in your local environment or anywhere you like. It's all standard open-source packages and standard OCI image formats. 

BUKOLA AYODELE: So, a common sticking point for developers selecting cloud tools is portability. They want to ensure that they have the option to move their applications either locally or to another provider. Could you let us know how Cloud Run supports portability? 

JASON POLITES: Yeah, this is a really important point and another reason that we chose the container abstraction or the container format as the base-level abstraction in Cloud Run. The containers we run in Cloud Run are just regular OCI container images. They do have a few restrictions. It has to be Linux. Right now, it has to listen for HTTP requests. 

But beyond that, we don't really have an opinion about what happens inside the container. As long as it conforms to that-- what we refer to as the container contract, then it will run inside Cloud Run. But actually, there's nothing Cloud Run-specific about that container. It's really just an HTTP server. And so that container will run in any platform that runs a Docker container, a Dockerfile. 

And so at the fundamental base level, portability, is a fundamental principle of what we're doing-- and not just running containers in other environments, but also, crucially, being able to develop on your local machine and have that be consistent with what's happening in the cloud. And so you can build your whole container on your local machine and then just deploy it directly to Cloud Run. 

STEPHANIE WONG: Awesome. Well, you covered a lot of ground here today, and I'm sure people are going to want to learn more. So where can people go to check out more of Cloud Run? 

JASON POLITES: Well, we have a very neat little URL. You can just go to cloud.run, and you'll find everything that you need. 

STEPHANIE WONG: Nice. An even shorter link to cloud.google.com/cloudrun. All right. Well, Jason, thank you so much for being here today. We're excited with the continued progress with Cloud Run, and we're looking forward to see what comes out of it in 2022. 

JASON POLITES: My pleasure. Thanks very much. 

STEPHANIE WONG: Yeah. So as Jason mentioned, a lot has been added to Cloud Run over the last couple of years. On the one hand, we see compute and networking enhancements like adding more regions, ability to connect to VPC networks through serverless VPC access, and global load balancing. And then on the other hand, we see more balance being given to devs for global reliability with min and max instances, always-on CPUs. And then recently, we also saw the concurrency max increase to 1,000 requests, which you can set a max limit to as well. 

All in all, I feel like we're giving teams those fine-grained levers to pull to reel things back in through limits, committed-use discounts, and the ability to scale down to zero, especially when Jason said you need to failover. This is the beauty of serverless-- auto-scaling and an immense amount of automation for those [INAUDIBLE] workloads and then the ability to really control costs. 

BUKOLA AYODELE: Awesome. I also really enjoyed when Jason talked about how the container was chosen as the base-level abstraction in Cloud Run to enable support portability, which can help developers have the option to move their applications either locally or to another provider. And if you're a developer without a lot of Docker or container experience, the Cloud Run team is actually developing open-source buildpacks, which are a way to turn your source code into a container without you needing to create a Docker file. 

STEPHANIE WONG: Yeah, I totally agree. I mean, there's a large, growing ecosystem around even language support for Cloud Run as well as tools like the Functions Framework, which we talked about, to remove toil and take care of all that boilerplate code. So all of this is making that path from source code to deploying to Cloud Run clearer than ever. 

Yeah. So it was a fantastic episode, and we're hoping to talk more about serverless in the next year to come. And of course, Bukola, I have to ask, what have you been working on? 

BUKOLA AYODELE: Yeah, so I'm so excited you asked me because I want to tell more people about it so they can check it out. So I recently just wrapped up season two of the "Click to Deploy," series, which you can check out on the Google Cloud YouTube channel. There, you can learn how to quickly deploy solutions like FortiGate, Databricks, and other solutions with the click of a button. 

STEPHANIE WONG: Wow. Nice. I know how hard you've been working on the series, so congrats on launching it. I'm sure a lot of folks are going to be excited about it too because click to deploy-- I mean, it's in the name itself-- it's easy. And we have a large number of options on the marketplace, right? 

BUKOLA AYODELE: Yeah, we do. We have a lot of options 

STEPHANIE WONG: Awesome. Well, thanks so much for co-hosting, Bukola. And for everyone else, thanks for listening. We will see you all next week. 

[MUSIC PLAYING]