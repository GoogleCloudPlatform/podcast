+++
audioDuration = "00:33:44"
audioFile = "Google.Cloud.Platform.Podcast.Episode.268.mp3"
audioSize = 48507037
categories = ["Cyber Security", "Microservices"]
date = "2021-07-21"
description = "This week on the podcast, hosts Stephanie Wong and Bukola Ayodele speak with Nikhil Kaul and Victor Szalvay about security in the software supply chain."
draft = false
episodeNumber = 268
hosts = ["Stephanie Wong", "Bukola Ayodele"]
title = "Secure Software Supply Chain with Nikhil Kaul and Victor Szalvay"
image="/post/episode-268-secure-software-supply-chain-with-nikhil-kaul-and-victor-szalvay/images/hero/hero-EP-268.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ooty2b/episode_268_secure_software_supply_chain_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, hosts [Stephanie Wong](https://twitter.com/stephr_wong) and Bukola Ayodele speak with [Nikhil Kaul](https://twitter.com/kaulnikhil) and Victor Szalvay about security in the software supply chain. Cloud OnAir will be offering a [virtual event](https://cloudonair.withgoogle.com/events/container-security?utm_source=google&utm_medium=blog&utm_campaign=FY21-Q3-northam-NA1102-onlineevent-er-container_security&utm_content=gc_podcast) on supply chain software security on July 29th, and our guests start the show by telling us more about it.

The recent cyber attacks on US companies have brought to light the importance of cyber security. A new set of guidelines for securing these components and software as a whole will be released soon, impacting not just software developers but the users as well. The Cloud OnAir event will breakdown these new guidelines and educate attendees on steps to take to ensure more secure software and software components. Internally, Google has been optimizing their software supply chain security for years with solutions like BeyondCorp and internally developed solutions that Google has since adapted for their clients. These solutions will be discussed in detail in the Cloud OnAir event.

Victor goes on to explain the three areas of supply chain security and how they fit into the overall security of online platforms. Software projects are often built using many small pieces of software sourced from third parties, which can create vulnerabilities. The new guidelines will help ensure quality and security at all levels of development for software and its pieces, thus strengthening security at every level of the supply chain. Nikhil and Victor talk about issues that contribute to supply chain security, including the risks that a microservices architecture can introduce and the use of open source software and their dependencies. We hear about Google's contributions to the supply chain security effort, like OpenSSF that strives to bring the open source community together toward the goal of cyber security. Our guests give listeners tips on starting the supply chain security journey.

Join the Cloud OnAir talk to learn more!

##### Nikhil Kaul

[Nikhil](https://twitter.com/kaulnikhil) leads a team of product marketers focused on driving and building messaging, positioning, and go-to-market strategy for Google Cloud's DevOps portfolio.

##### Victor Szalvay

Victor is an Outbound Product Manager with Google Cloud focused on helping customers get the most from the cloud. Previously he has been a tech entrepreneur and leader, with a concentration on DevOps and app dev team productivity.

##### Cool things of the week

* Helping you pick the greenest region for your Google Cloud resources [blog](https://cloud.google.com/blog/topics/sustainability/pick-the-google-cloud-region-with-the-lowest-co2)
* Optimizing your Google Cloud spend with BigQuery and Looker [blog](https://cloud.google.com/blog/topics/developers-practitioners/optimizing-your-google-cloud-spend-bigquery-and-looker)

##### Interview

* Container Security: Building trust in your software supply chain [site](https://cloudonair.withgoogle.com/events/container-security?utm_source=google&utm_medium=blog&utm_campaign=FY21-Q3-northam-NA1102-onlineevent-er-container_security&utm_content=gc_podcast)
* OpenSSF [site](https://openssf.org)
* Deps [site](https://deps.dev)
* SLSA [site](https://slsa.dev)
* Cloud Build [site](https://cloud.google.com/build)
* BeyondCorp [site](https://cloud.google.com/beyondcorp)
* Binary Authorization for Borg [docs](https://cloud.google.com/security/binary-authorization-for-borg)
* GKE Autopilot [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
* GCP Podcast Episode 251: BeyondCorp with Kiran Nair and Ameet Jani [podcast](https://www.gcppodcast.com/post/episode-251-beyondcorp-with-kiran-nair-and-ameet-jani/)

##### What's something cool you're working on?

Bukola is working on the new season of [Security Command Center](https://www.youtube.com/watch?v=Q-fzz2P6omQ&list=PLIivdWyY5sqKd-Cu1HZ7v5RiYE8gVsM7P) set to be released next month!

{{< transcript "[UPBEAT MUSIC] STEPHANIE WONG: Hey everyone, and welcome to episode number 268 of the weekly Google Cloud Platform podcast. It's Stephanie Wong here, and today I'm here with my teammate Bukola. Hey, Bukola, welcome to the podcast." >}} 

BUKOLA AYODELE: Hey, Stephanie. I'm so happy to be here today. 

STEPHANIE WONG: OK, so for everyone out there, Bukola is a very accomplished, self-taught software engineer, and also a pretty famous YouTuber. So I'm in the presence of some greatness right now. 

BUKOLA AYODELE: Wow, Steph. Those are high praises. [LAUGHS] Thank you. 

STEPHANIE WONG: I'm just excited to have you on. So Bukola, why don't you answer this question. What are we talking about today? 

BUKOLA AYODELE: So I'm so excited because we're going to be talking about an upcoming event, which is the container security event. And it's all about building trust in your software supply chain. And it's happening on July 29. 

Open source software is rapidly growing and so are potential security vulnerabilities. Whether it's building an application on Kubernetes, serverless, or virtual machines, end-to-end security is crucial to mitigate this. Plus we've seen the world has had recent cybersecurity attacks and data breaches. 

STEPHANIE WONG: Yes, and adversaries are just more clever than ever in finding potential windows in your software supply chain to introduce malware into your software. So at this event, you're going to learn how you can adopt an in-depth, security-first approach with Google Cloud that embeds security and compliance at all of the steps of your software lifecycle. 

We have a really exciting keynote by our product executives, Pali Bhat and Eric Brewer. And we're going to hear more in a bit, because we are bringing on Nikhil and Victor from our product team to talk about the landscape and our approach to security. But first, let's jump in to the cool things of the week. 

[UPBEAT MUSIC] 

BUKOLA AYODELE: One of the cool things I saw this week was this article about how Google Cloud is helping customers get access to the regions that have the lowest CO2. So I'm not sure if you know this, but as a Google customer, your carbon footprint is already carbon neutral. And to add to these sustainability efforts, Google is aiming to be carbon-free energy everywhere by 2030. 

So to empower customers to make more sustainable decisions, in the Cloud Console you'll find a green leaf that indicates the regions with the lowest carbon impact. And this is available today for products like Cloud Run and Datastream. And you'll see it roll out to more cloud offerings over time. 

So before releasing this feature, Google Cloud ran a lot of experiments to measure its impact, and users who were exposed to these enhanced region pickers were 19% more likely to select a low-carbon region for their Cloud Run service. So these results show that by displaying carbon information in context of when you make the decision of picking a region, we are helping you make more sustainable decisions, which is really cool. 

STEPHANIE WONG: Yeah, that's amazing, and really encouraging results there. And just a couple of months ago we were just talking about the release of this Cloud region picker that lets you pick the region based on your priority of cost, how green the region is, and the latency to your users. And so to see this continued progression of giving you more access to this information within the console is really exciting. 

So my cool thing of the week is about optimizing your Google Cloud spending using BigQuery and Looker. So our friends on our team here in DevRel, Mark Mirchadani and Leigha Jarett, wrote up a new guide. So you can visualize your billing data with Looker to gain insights on your spending over time. 

So you can use the Google Cloud cost management block to quickly get analyzing. All you have to do is enable the export of your billing data to BigQuery. And the standard billing export already includes a cost table where you can see cost and usage across services, and also a pricing table that can be used to analyze prices, discounts, and services. 

And then on top of that, you have something called Recommender, which is a service that provides per-product or per-service recommendations based on various heuristic methods like machine learning and current resource usage. And so what's added on top of this is you can visualize all of this data using Looker. 

On the Looker marketplace, you can install any number of Looker blocks, which are essentially templates, and other content. And installing the Google Cloud billing block only takes a few steps, and you'll end up with a dashboard to help see what your spend looks like. So if you're not already taking advantage of all that you can do with your billing data, absolutely do it. I have had some great feedback on Twitter about how insightful and useful it is to really fine tune your spending and see what trends exist within your environment. 

BUKOLA AYODELE: That's awesome. 

STEPHANIE WONG: So let's go ahead and jump straight into our conversation. We're going to be talking to Victor and Nikhil 

[UPBEAT MUSIC] 

Victor and Nikhil, good to see you again. Thanks for joining the podcast. Just to get started, why don't you go ahead and let everyone know a little bit about yourselves. 

NIKHIL KAUL: Hey, Stephanie and Bukola. Thanks a lot for having us here, really excited to do this. I'm Nikhil Kaul and I lead our product marketing team for DevOps. Essentially, the team is focused on positioning, messaging, and go-to-market activities for our DevOps products. Really excited to be here as I said, and looking forward to the conversation. 

VICTOR SZALVAY: Hey, everyone. I'm Victor Szalvay. I'm an outbound product manager. I focus also on the DevOps space. I work with Nikhil and the product management team in bringing our solutions to our customers. 

BUKOLA AYODELE: That's awesome. It's great to meet both of you guys. So we heard that Google Cloud is hosting a secure software supply chain event, and we heard it's happening July 29. Could you tell our listeners what it is about and the motivations behind that event? 

NIKHIL KAUL: Yeah, absolutely. As you said, the event is happening on July 29. Let me take a step back and talk about the motivations of the event. Many of your viewers might know about the Colonial Pipeline cyber attack, which happened in May. The pipeline supply has nearly half of the East Coast gasoline. 

Post that attack, one thing which really came out was President Biden's signed an executive order to strengthen our nation's cybersecurity. If you look at the executive order as a whole, one crucial element or the key element of that executive order is actually strengthening our software supply chain security, which basically entails, in one sentence, knowing exactly what components are being used in your software products, which includes open source dependencies, other software artifacts, and stuff. 

The other important thing of that executive order is that within 180 days, NIST, or National Institute of Standards and Technology, will be publishing guidelines for securing software supply chain after consultations with, let's say, federal government, private sector, and academia. 

As you can see and imagine, once these guidelines come out, they would be impacting everyone, whether you are a financial services company, whether you're a government company, whether you're working in health care or even a retail company. So irrespective of whether you use software or whether you create software, the guidelines will have an impact on your business. 

So one of the motivations for the event was to drive awareness behind these upcoming changes given the executive order, and how, as an enterprise or even as a startup, given most of or many of our customers are really from that area now, to help them be better prepared to meet these new regulatory changes coming up in the future. 

VICTOR SZALVAY: Yeah. And I think just to add to that, at Google we spend a lot of time securing the software supply chain internally. This is not a new problem for us. We've been facing threats for the last 10 plus years. We've had solutions in play for about that long. And a couple of good examples of that are Binary Authorization on Borg and BeyondCorp, our zero-trust initiative. Both of those are good examples. And I think we've linked in the description of the podcast here to those, so you can take a look at those and see what we've done there. 

And at the same time, we're building products to help our customers with these same problems, so basically taking our internal learnings and building cloud products that make those accessible for everyone. 

So we thought an event would be a perfect opportunity to shed light on some of these practices that we follow to secure our own supply chain, while at the same time highlighting some of these exciting new products and announcements. And by the way, you can register for the event. Again, there's a link in the description. And yeah, we'd love to see you there. 

STEPHANIE WONG: Yeah, and the Colonial Pipeline example is just one particularly extreme and severe example recently that made its way to the presidential desk, which is a big deal to pay attention to, especially in regards to cybersecurity. But for many of us, supply chain doesn't really spring to mind when we talk about cybersecurity. Can you talk a little bit more about how software supply chain security fits into the broader context? 

VICTOR SZALVAY: It really is kind of an emerging area within cybersecurity. And we actually think of this in three main categories or buckets. There's securing the supply, which includes, I think as Nikhil alluded to, your third party dependencies. It also involves securing your build process or your CICD process. And then finally securing the runtime in which your actual containers or workloads are actually running. 

So the build and the runtime may be directly within your control. And I think most companies are also using a large supply chain in addition to their own code. That is, they're importing third-party components, and that's both commercial and open source, for which they don't necessarily have visibility into contributors, nor do they have visibility into the software development lifecycle or the SDLC and the adjacent security processes. 

So there's some risk there. A close enough analogy would be something like automobile manufacturing. I think when you hear the term supply chain, I think a lot of folks think of manufacturing supply chain. And that's really where the term was borrowed from. And it's roughly analogous. 

I mean, when you buy a car, you're buying an assembled set of parts that came from hundreds of different suppliers. Those suppliers all have upstream suppliers, though. That goes on and on until we're talking about raw materials. So it's this chain, if you can visualize a chain of suppliers that ultimately leads to the auto manufacturer assembling that into a finished good. 

And so auto manufacturers therefore need to mandate quality guidelines. They need to have security guidelines, which those apply to the entire supply chain. And there are often certifications and inspections that go with that. So in software, we have a similar web of third-party suppliers. 

I mean, if you look at a lot of the open source products out there, they're made up of other open source products, which then, in turn, are made up of other open source products and so forth. So the problem is, we really have no good way of enforcing quality or security outside of our own build and development processes. And so that's really the problem. 

NIKHIL KAUL: One of the great ideas which you just presented was comparing software supply chain to the manufacturing example of a car. And just like in the manufacturing example that Victor gave, each and every point in the software supply chain across source, build, and deploy can be a potential vector for attack, the same way each and every point in the car example can be potentially compromised for the security. In fact, of late you would see that there have been numerous attacks that highlight the urgency to solve this software supply chain problem for any company, whether you're an enterprise or whether you're a startup. 

BUKOLA AYODELE: That's so interesting. So you mentioned attacks. Could you give us more examples about the different attacks that have been happening in the industry? 

VICTOR SZALVAY: Yeah, there's been actually quite a few. And I think there's one that happened just recently. At the time of recording now, this happened just this week. A company named Kaseya, they have a product named VSA, which was basically the target of essentially a supply chain attack. And what happened was that attackers compromised the Kaseya VSA, who then basically those attackers used a software update to push ransomware out to those Kaseya customers. 

So these things happen often because there's kind of blind trust of upstream suppliers or the lack of a vetting process. 

NIKHIL KAUL: Yeah, and Kaseya is just an example of one of the attacks which has happened in the industry. If you Google software supply chain, I'm sure you will see one after the other examples. SolarWinds is another attack which comes to my mind. [INAUDIBLE] is another example. 

One of the common themes across all these attacks is either a bad code, compromised build systems, or a leaked credentials from CICD, who are partly responsible for the supply chain attack that happened. Again, it highlights the importance of securing your software supply chain when you think about cybersecurity as a whole. 

STEPHANIE WONG: Yeah, and just thinking about it, there are so many points within the process, like you mentioned, where vulnerabilities can exist, whether it's in the dependencies or at the source, the build, or the package stage. So it really does take a very measured approach to making sure that there are policies in place to prevent any potential attacks. 

So when we're thinking about organizations that have very established means to do this already, how are these attacks affecting the decisions inside enterprises? 

NIKHIL KAUL: So there are some things which are pretty obvious, which are the first-order dimensions on how the behavior might change. And one of the things which is pretty obvious is that given the executive order, it wouldn't be surprising to see security budgets as a whole go up in 2022. 

And if you read the executive order as well, as a part of the executive order there is a special focus on zero-trust architecture. So we feel that zero-trust architecture, whether it is in cybersecurity or whether it is in securing a software supply chain, will be front and center. Another crucial tangent of that zero-trust architecture is that there will be a strong interest in automation, as manual checks can only go so far when you're implementing this architecture. 

Second, if you look over the previous multiple years, you would see that when working with enterprises, traditionally, having more control and having more in-house setup has been equated with having a better security approach. As these attacks have proven, this is necessarily not the case. 

So we envision enterprises as well as other companies moving to a fully managed, lockdown Cloud services model with the flexibility to operate this model within their own private network if necessary, rather than having an in-house setup where they take care of security on their own. 

VICTOR SZALVAY: I agree with that, and I think specifically from a development and DevOps tool standpoint. Traditionally, most organizations are balancing the control and transparency they get from self-hosted point products that they string together themselves against a more fully managed offering. 

And I think right now, the need for auditable security practices will likely tilt the balance more toward a fully managed offering that provides security baked in. In other words, securing the software supply chain and SDLC is a whole new dimension of responsibility I think that most organizations don't necessarily want to shoulder directly. 

I mean, at one point fully managed options like Google Cloud look pretty attractive, considering we are dealing with this problem at a massive scale already. We have solutions in place that can be kind of just implemented. 

So in fact, I recently spoke with a large fintech company who basically started down the path of a self-hosted, self-managed development tools ecosystem. And with this executive order, it's really turned them around 180 on that decision. They're now thinking about, OK, if we're going to have to have a level of scrutiny and a level of regulatory compliance even within the SDLC, we've got to think of more fully managed solutions as an option there. 

BUKOLA AYODELE: I can only imagine that this is such a difficult problem to solve. And other than the disparate tools, could you give us any other reasons that make this a difficult problem to solve? 

NIKHIL KAUL: Yeah, absolutely. Disparate tools, point solutions, as Victor mentioned, are part of the problem, because having one single view across these disparate tools from a security standpoint can be challenging. The other challenge which really arises is, if you see over the past multiple years, we have moved from a monolithic architecture to a microservices-driven model. 

When we move from this monolithic architecture to a microservices-driven model, each of these microservices, we are updating, testing, and releasing, based upon the need of that microservices. What that also means, that each of that microservices has its own supply chain, which spans from what dependencies are being used, the CICD and the build system, and how often they are getting deployed. 

What that means is this challenge is multiplied numerous times depending upon the release frequency and depending upon how many microservices you have as a whole. So as you can see, this problem of securing a software supply chain can actually get compounded exponentially, depending upon your release and testing schedule as a whole. That's just one of the things. 

The other thing is like, if you see the industry as a whole, we have got really good at using open source solutions. And the benefit of open source is pretty evident. You can leverage the work of others, you get the benefit of accessing the work of others without writing the source code of your own. So it's been a really good benefit to the industry. 

But at the same point of time, when you're leveraging the work of others, it also means that you're relying or trusting the work of others. The dependencies which you are using from open source software can really run deep. And before you use that software, you really need to understand potential security risks that come with using the software, with open source components as well. 

So the move from monolithic to microservices and the use of open source software are probably the two other things which come to my mind, other than the use of disparate tools, which make this problem much more difficult to solve. 

VICTOR SZALVAY: And just building on that a little bit, especially the open source point, I think because we're talking about a supply chain with potentially thousands of unknown contributors, it's very hard to even understand or visualize the dependencies you have upstream. Because it's not just your immediate dependencies that matter. Most open source software has tons and tons of dependencies. And this chaining of dependencies can go very deep. 

So one of the things we've done for the industry broadly is we've released Open Source Insights, and that's accessible at deps.dev, D-E-P-S dot dev, and we'll link it, of course, in the description. But this basically helps with awareness. It really provides a tabular and graphical visualization of the dependency chain of any given open source package. So it covers a bunch of different languages and a bunch of different package types. I really encourage folks to check it out and integrate it into their process. 

STEPHANIE WONG: Yeah, Open Source Insights is fantastic. I heard about it a few weeks ago when we first announced it. And it's just awesome because you can actually see whether a vulnerability exists in a dependency that might affect your code and recognize it before you roll any of your code out to production. So it's just fantastic. 

And now we're starting to talk a little bit more about what Google is doing here. So can you dive into what Google's doing to help prepare our industry for these supply chain threats? 

NIKHIL KAUL: That's a really good question. Actually, we have a whole section in the event that is coming up on July 29 dedicated to this. But there are some things which I can talk about here. There are things which we are doing with Lighthouse and NIST to establish standards. So come learn about what we're doing with these two parties at the event. 

As Victor was mentioning, and, Stephanie, you also referred to, Open Source Insight can be a really good place to start, if you're especially using open source software to understand the dependency graph. But what you two didn't mention is the open source scorecard space, which actually provides you a risk score for open source projects as a whole. So those would be the top three things which come to my mind. 

VICTOR SZALVAY: Yeah, there's so much we're doing. I mean, one of the big things we did was founded the openssf.org website, which is the Open Source Security Foundation. And this is really an effort to bring the open source community together to collaborate on supply chain security. So think town hall with actionable outputs and bringing folks together and really providing a forum for discussing these issues. 

There's also Salsa And Salsa is basically an end-to-end framework for ensuring the integrity of software artifacts throughout, basically, the software supply chain. So what it is is it's a three-tiered approach, and it provides basically an incremental, stepwise, kind of practical roadmap for adopting supply chain security along eight identified attack vectors. So you can check that out at slsa.dev. 

STEPHANIE WONG: I feel like I need to grab some chips for that one. 

VICTOR SZALVAY: Yeah, I think we're going with Salsa for a good reason there. So-- 

STEPHANIE WONG: Love it. 

VICTOR SZALVAY: There's a ton of this stuff, and we're going to talk in a lot more depth at the event, as Nikhil mentioned. And I think another fantastic thing is that you're going to hear directly from some of Google's thought leaders in this space as well as some of our customers. 

BUKOLA AYODELE: That sounds great. I'm so excited to attend the event. And it seems like we are having a lot of new learnings and new practices. I wonder how we're bringing all these lessons and practices into our products here at Google Cloud. 

VICTOR SZALVAY: We talked about things like Binary Authorization on Borg and the zero trust. And we are bringing those pieces out as capabilities within Google Cloud. So based on what we discussed, really the need is around establishing the provenance of those dependencies in your supply chain and that certain processes were followed and tools were used during the lifecycle. 

So we'll have a complete demo of this at the event, but Google's Binary Authorization product does exactly this. So with Binary Authorization, you can require images to be signed by trusted authorities during the development process. So as you're basically creating artifacts and container images, it can basically be signed. 

And that process allows you to define a policy, which is required in your SDLC. So the policy would look something like, for example, that you've used blessed artifact repositories for all of your dependencies. For example, that your images were scanned, that code review was done with x number of reviewers, that a specific build system was used, and so on. So you can basically craft whatever policy you want to see as part of your SDLC. 

And then as your artifacts move through that SDLC, what are called attestations are captured. And this is really like a cryptographic signature that says that, hey, this particular process was followed, or as I mentioned earlier, code review was done or the build system was used. This collection of attestations then becomes sort of a chain of trust. We now know that as you're about to deploy this thing into Google's Kubernetes Engine or Cloud Run, that Binary Authorization can sit there as an admission controller and basically block any image that has not been fully adhered to, according to this policy. 

NIKHIL KAUL: Along with Binary Authorization, we also provide lockdown environments for continuous integration and continuous delivery. Cloud Build is a really good example of that. We also provide a secure lockdown environment for storing your artifacts. Those artifacts could be a Maven NPM or other container artifacts with artifact registry. 

And finally, and most importantly, once you have created a build with CICD using Cloud Build, stored those artifacts in artifact registry, you need to deploy them in a secure manner. Cloud Run and Cloud Functions are products which we offer for serverless, where each container or a function runs in its own sandbox. So that takes care of security. 

And finally, and most importantly, if you're someone who loves Kubernetes and wants to run applications or containers on Kubernetes, GKE Autopilot would be a great fit, given it contains security features like shielded GKE nodes, Secure [? Boot, ?] among others. One of the crucial things is we shared a lot of information, which is right from how we can help with Binary Authorizations, which Victor mentioned, how Cloud Build provides a secure environment, artifact registry, and then runtime environments like Cloud Functions, GKE Autopilot, or Cloud Run. 

In the event, one of the things which we are doing is actually we are trying to bring all of this together via a demo of how you can actually leverage all of these solutions in an end-to-end manner in order to build in secure software supply chains. I'm pretty excited to see how that demo comes up together as well. So those are some of the things which we are doing to bring learnings and practices from Google into our products. 

STEPHANIE WONG: Fantastic. We're looking forward to seeing the demo. But just thinking about where customers may be on their journey, some companies, they have a long history with their software supply chain. They may be currently defining new security policies. And as you mentioned, other companies have a huge influx of new services being implemented. So it's a ripe moment for them to start to look back at their secure practices. So what's the one thing that you would recommend to do with their supply chain, irrespective of where they are in their journey? 

NIKHIL KAUL: You would see multiple companies being on different trajectories or different parts of the software supply chain journey. Some are using virtual machines, some are using containers, or some are in the process of actually moving from virtual machines to containers. Rather than us coming up with recommendations, DevOps Research and Assessment, which is the leading voice in DevOps, given its six years of research across companies of all sizes and industry, actually has an answer for that. 

But the answer really lies in not sacrificing speed or stability for security. It actually showcases that organizations, elite teams, or high-performing teams actually are able to manage speed, security, and stability together. And in fact, one of the other things which the report highlights is the elite teams or high-performing teams actually use open source software a lot. 

And the way they do it is actually ensuring that security is taken care before the development is complete. So the way I would say it is shifting left on security and taking care of it earlier in the development process. And this can happen irrespective of what you're building or what technology you're using or what processes you're using, whether you're using agile, whether using DevOps, or whether you're using something else, or whether you're working on virtual machines, or whether you're working on Kubernetes or even serverless architecture. 

So one thing which I would say is, thinking of security earlier in the development process and ensuring that it gets embedded on as a part of your software development process would be one thing which I would feel that other folks, irrespective of where they are in the journey, can actually take something and implement it. 

VICTOR SZALVAY: Yeah, I completely agree. I mean, really, agility is actually necessary to be effective in responding to security issues. That is to say, if you detect a security problem but you're unable to release for the next x number of months because your process is not agile enough, that's also a problem. 

So we're absolutely not advocating taking a full clamp-down approach to the point where your velocity is squashed. We're advocating for the opposite, right? And instead, shifting security left into your SDLC. So some practical examples there-- get your infosec team involved early, even potentially in the design stages. Often, security is an afterthought and we engage the security team in late review stages, when we're very close to already having products baked and things built. So bring them in early, get them into your early design reviews, and build that in as part of your process. 

The next thing is think about developing security-approved tools. So a great example here is settling on a blessed artifact repository, which perhaps contains known or scanned third-party dependencies, versus just grabbing stuff off the internet at build time, doing a curl in your build process straight up. 

The last thing I'll just kind of say is automated testing. I've always been a big believer in automated testing. And I think getting security tests into the test automation process basically means that you can build and proceed at a high velocity while also continuously testing at scale. So minimize those manual reviews and have it be something that's a built-in part of your process from the very beginning. 

BUKOLA AYODELE: Those were all really awesome tips, especially like the tip about putting security earlier in the development process. So we're so excited to hear even more tips at the event. So could you tell us about the container security day event and what we should expect? 

NIKHIL KAUL: Sure. So essentially we have divided the event into three main parts, I would say. The first and the foremost part of the event is really focused on talking about how Google secures its software supply chain internally and how we are bringing those practices to the market. So in that part, you will see our product leadership as well as talk to leaders like Eric Brewer and our chief security officer Phil Venables, talk about how we are bringing these practices and how we are working with, as I said, Lighthouse and NIST to actually set the standards. 

We also have customers such as Shopify, and one of the interesting things Shopify is doing is actually they're able to manage security with speed. So you do not have to choose one or the other. So their insights would be really helpful in understanding how you can actually go faster without compromising on security or stability. So that's the first part of the event. 

The second part of the event, we actually go deeper into the secure software supply chain. So we basically break down the secure software supply chain into four parts, as Victor was saying before. We talk about how to secure your open source dependencies, what are the best practices you follow. Then we talk about how you can secure your CICD processes as a whole. The third part would really talk about how you can actually secure the runtime, and then finally and most importantly, how you can have a single policy for managing. 

The third section of the event is actually where the attendees can ask us questions. So we will have Kelsey Hightower as well as a part of the event, moderating it, where the attendees and the audience can ask us questions on how they can implement these findings or these learnings as a part of the software development journey. I hope that is helpful. And if you want the registration details, it is in the podcast description. 

STEPHANIE WONG: Yes, and as you said, this is core and fundamental to how Google's operated at this scale, being secure and agile simultaneously. And we're both looking forward to attending the event. And thank you again for joining and giving us a sneak peek. 

VICTOR SZALVAY: Hey, thanks very much, Bukola and Stephanie. Appreciate for having us. 

NIKHIL KAUL: Thank you so much for having us. This was fun. 

STEPHANIE WONG: Wow, so "move security to the left." I feel like that needs to be on a t-shirt or something for everyone to really internalize that phrase. But I just really love the conversation talking about how, irrespective of whether you are building using monolithic applications or you're already implementing microservices, each has its own software supply chain. 

And at this point, with the proliferation of open source software, nearly all software depends on open source and other external, third-party building blocks. And so all of this has become more common attack vectors. But it's exciting and encouraging to see that Google Cloud has invested in various causes like the Open Source Security Foundation, Open Source Insights, and one of my favorites, Salsa. So yeah, it was a great conversation. 

BUKOLA AYODELE: Yeah I thought the conversation was great. I learned so much. What was actually the most interesting thing that I learned was how GCP is bringing these security lessons into the products. For example, when Victor talked about Binary Authorization, which allows you to acquire images to be signed by a trusted authority during the development process. You can also define policies which are required in your software development cycle. 

So that's really cool, because Binary Authorization integrates with GKE Cloud Run control plane, to allow or block images based on whether they meet your policy. 

STEPHANIE WONG: Right, it's like, how do you ensure only authorized builds make it to production, plus scope the blast radius of vulnerabilities in production? So be sure, everyone, to check out the event. It's called Container Security: Building Trust in your Software Supply Chain. And it's on July 29, from 12:00 to 3:00 PM Eastern time. 

And it's all virtual. So you have no excuse not to go. But you'll also be seeing demos, and you'll get a special live Q&A with Eric Brewer, Kelsey Hightower, Nelly Porter and Michael Windsor. So be excited for that. And before we wrap up, Bukola, what are you working on? 

BUKOLA AYODELE: So I'm actually working on this new season of the series on Security Command Center, which is actually going to be on the GCP YouTube channel next month. You should definitely check it out. 

STEPHANIE WONG: Yeah, we'll include the link to that. And it's really exciting to see how much that series has grown since we first launched it a little while ago. The Product Security Command Center has matured. And we have a lot of exciting features like Event Threat Detection, BigQuery data exfiltration, resource-level access control, and more. And so the series is great to not only introduce each of those, but walk through some demos on how you can use it yourself. 

Thanks for joining, Bukola, to co-host, and thank you everyone else for listening. We'll see you all next week. 

BUKOLA AYODELE: Bye, see you next week. 

[UPBEAT MUSIC]