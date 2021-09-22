+++
audioDuration = "00:41:23"
audioFile = "Google.Cloud.Platform.Podcast.Episode.185.mp3"
audioSize = 59980924
categories = ["Scotiabank", "Kubernetes", "Migration"]
date = "2019-07-10"
description = "This week on the podcast, Yuri Litvinovich of Scotiabank was able to join Mark Mirchandani and Michelle Casbon to talk about migration from on-prem and their partnership with Google Cloud."
draft = false
episodeNumber = 185
hosts = ["Mark Mirchandani", "Mark Mandel", "Michelle Casbon"]
title = "Scotiabank with Yuri Litvinovich"
image="/post/episode-185-scotiabank-with-yuri-litvinovich/images/hero/hero-EP-185.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/cbldxo/episode_185_scotiabank_with_yuri_litvinovich/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, Yuri Litvinovich of Scotiabank was able to join [Mark Mirchandani](https://twitter.com/markmirch) and [Michelle Casbon](https://twitter.com/texasmichelle) to talk about migration from on-prem and their partnership with Google Cloud. [Mark Mandel](https://twitter.com/Neurotic) stops in with some cool things of the week and the question of the week, too!

With Yuri's help, Scotiabank is working to become a modern financial services technology company. Their transition from working mostly on-prem to working in the cloud was exciting for him as he discovered how much cheaper, faster, and more secure large enterprise projects can be in the public cloud. Three years ago, Scotiabank's CEO began encouraging this shift to keep the company up-to-date, with funds allocated to moving all their thousands of applications and products to a more efficient system.

To accomplish this, Yuri turned to Kubernetes to make use of containers. Because they are light and homogenous in different environments, the modernization at Scotiabank went much more smoothly with Kubernetes and GKE. They also use a mix of managed systems like BigQuery, Dataflow, and Pub/Sub, as well as made-from-scratch applications that help the Google products to be compatible with Scotiabank's existing software. Yuri believes this was a key to their success in the migration from on-prem to the cloud.

In the process of migration, Yuri experienced some pushback from developers who were concerned about the move. He encouraged them not to "lift and shift" their projects, but to completely re-build them with cloud dev ops principles in mind. Yuri's goal was to convince developers that doing this would result in projects that were much easier, cheaper, and more secure in the long run. By outlining the benefits and goals of migration and sharing success stories of other businesses who have transferred to Kubernetes and the cloud, Scotiabank was able to help convince developers of the importance of it. Yuri also encourages trust and cooperation between teams.

<!--more-->

##### Yuri Litvinovich

[Yuri](https://www.linkedin.com/in/bigyuri) is a Senior Cloud Engineer and Kubernetes Tech Lead at Scotiabank. He's currently part of Platform Organization (PLATO) within Scotiabank, which performs enterprise modernization program to transform the Bank into a modern technology company in financial services. Yuri has extensive experience in Cloud technologies, Kubernetes, DevOps, Site Reliability Engineering, Automation, CI/CD, Linux, networking, and system administration. His pursuit of excellence led him to work on implementing cutting-edge technologies in both startups, and large enterprise environments making them vital part of organization's digital transformation journey.

##### Cool things of the week

* Introducing Deep Learning Containers: Consistent and portable environments [blog](https://cloud.google.com/blog/products/ai-machine-learning/introducing-deep-learning-containers-consistent-and-portable-environments)
* How to implement document tagging with AutoML [blog](https://cloud.google.com/blog/products/ai-machine-learning/how-to-implement-document-tagging-with-automl)
* Analyze BigQuery data with Kaggle Kernels notebooks [blog](https://cloud.google.com/blog/products/data-analytics/analyze-bigquery-data-with-kaggle-kernels-notebooks)
     * GCP Podcast Episode 84: Kaggle with Wendy Kan [podcast](https://www.gcppodcast.com/post/episode-84-kaggle-with-wendy-kan/)
* Introducing the Jenkins GKE Plugin—deploy software to your Kubernetes clusters [blog](https://cloud.google.com/blog/products/devops-sre/introducing-the-jenkins-gke-plugin-deploy-software-to-your-kubernetes-clusters)

##### Interview

* Scotiabank [site](https://www.scotiabank.com/global/en/global-site.html)
* Kubernetes [site](https://kubernetes.io)
* Kubernetes Engine [site](https://cloud.google.com/kubernetes-engine/)
* Cloud SQL [site](https://cloud.google.com/sql/)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Dataflow [site](https://cloud.google.com/dataflow/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Anthos [site](https://cloud.google.com/anthos/)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
* Istio [site](https://istio.io)
* Autoscaling Streaming Applications in Cloud Dataflow with Scotiabank [video](https://www.youtube.com/watch?v=5re6lAuTznY)
* Google Cloud Next '19: Day 2 Product Innovation Keynote [video](https://www.youtube.com/watch?v=PZ1Lqxfs1yw&t=70s)
* Kubeflow [site](https://www.kubeflow.org)

##### Question of the week

[Rather than using the standard Cloud Shell image - what if I want to add my own “by default” installed tooling?](https://cloud.google.com/blog/products/devops-sre/gcp-devops-tricks-create-a-custom-cloud-shell-image-that-includes-terraform-and-helm )

##### Where can you find us next?

Mark Mirch is working on [This Week in Cloud](https://www.youtube.com/playlist?list=PLIivdWyY5sqIxUCyOq0-FPNn5GZ2-XR45).

Mark Mandel is going to [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/), [Open Source in Gaming Day ](https://events.linuxfoundation.org/events/open-source-in-gaming-day-2019/attend/about/), and the [North American Open Source Summit](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/).

##### Sound Effect Attribution

* "crowd laugh.wav" by tom_woysky of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK 1: Hi, and welcome to episode 185 of the weekly Google Cloud podcast. I'm Mark, and I'm here with my colleague Mark. Hey, Mark." >}} 

MARK 2: Hey, Mark. 

MARK 1: I know we can't do the Mark and Mark joke for like an eighth time in a row, but how are you doing, Mark? 

MARK 2: I'm very well, Mark. I'm doing pretty well. It looks like you and Michelle had a really great interview this week talking to Scotiabank, I believe it was? 

MARK 1: Absolutely, yeah. We talked with our friend Yuri from Scotiabank, and talked a little bit about some of the more interesting paths to creating a migration plan, talking especially about how Scotiabank was able to bring GCP into it. So I'm super excited to get into that content. But before we go into the main content, let's talk a little bit about our question of the week. 

MARK 2: Yeah, so I'm asking the tough questions this week. We've mentioned Cloud Shell a few times on the podcast, mainly because it's amazing. But we're asking the question of, what if I want to add extra tooling to the default Cloud Shell image? Maybe I want to install something like Helm or Terraform? I use that on a regular basis. But that's not installed by default. So what can I do? 

MARK 1: So it's like, how do you make the amazing Cloud Shell even more amazing? 

MARK 2: If such a thing were possible, can you do it? 

MARK 1: Well, you will find out in just a little bit. But before we get even into that, let's talk about our cool things of the week. 

MARK 2: Yeah, what do you got? I know you've got some cool stuff. 

MARK 1: Absolutely. So the first cool thing I have of the week is deep learning containers, which, first of all, sounds fancy. 

MARK 2: It does. It sounds very fancy. 

MARK 1: But more than just fancy, it's also super cool. So these are in beta right now, and it's this great way to create a consistent environment for working with machine learning products. So these deep learning containers are pre-configured, and they come with all these different tools, like PyTorch and TensorFlow and all these different frameworks, and they create a nice stable place to do your work from. 

Because when you're working with machine learning, a lot of probably what you want to focus on is the actual models and training them and making sure that they're working the way you want them to, rather than spinning up these different environments and then when you, gosh, when you have to migrate to the Cloud, you've got to worry about what that environment-- it's just, it's too much. 

So these deep learning containers are a great way to create a baseline container to work with, and they have a pre-configured environment. So you can get one up and running locally, work directly on it, then when it's time to scale or go to production or go out to the Cloud, all of those are much easier, because you're using the same container across the board. 

MARK 2: Another example of the immutability of containers being super, super handy. 

MARK 1: Right? It's just like, it's like containers are everywhere or something. 

MARK 2: It's like they took off somehow. 

[APPLAUSE] 

Awesome. Speaking of machine learning, there's a really great article talking about how to implement docking and tagging with AutoML. You can apply machine learning algorithms to document tagging. That may be something you want to do. And you could potentially also use some of the out of the box tooling that we have at Google Cloud as well, something like, say, the Vision API, or potentially our natural language processing platforms. 

But it's quite likely that you have your own vocabulary for your business domain, or maybe diagramming or particular recognition things that you need to have happen. If you don't want to go down the full path of writing your own custom machine learning models, this article talks about how you can use AutoML vision object detection, as well as AutoML natural language to basically train these models in a much more efficient environment-- at least, maybe that's the right word-- or an environment where you don't have to do as much work to be able to have these custom domain-specific types of tagging abilities available to you in an efficient way. 

MARK 1: So it's a great way to build your own machine learning model without having to write the code. Right? That's what AutoML is. Here's another practical application of it, and a very cool way to have a wide variety of solutions to solve whatever problem is out there. Because sometimes it might take just the standard APIs. Sometimes you might have to build another model. But heck, if you need to use your own code, why not use the deep learning container? 

MARK 2: Exactly. 

MARK 1: I don't think it counts as a callback if it was only like 15 seconds ago. 

MARK 2: I think it does. I think it does. 

MARK 1: But I'll call it one. 

MARK 2: Yeah, I think it does. 

MARK 1: Well, very much in that vein, a little bit more about machine learning is this really cool integration between BigQuery and Kaggle. So if you don't know about Kaggle, it's this awesome community where there's a lot of data scientists and other people in that field working on creating and sharing a bunch of machine learning, either tips and resources and labs and notebooks and all kinds of things. So it's this awesome community. And they also have a product called Kernels, so Kaggle Kernels, which is hosted Jupyter notebook environment. 

Well, if you have a notebook out there and you want to use Kernels, you can very, very easily go into the actual notebook, and now you can just call BigQuery right from that environment. So you can make a query. You can write a query against your BigQuery data set, get the results back, and then keep going in your notebook analysis. If you want to hear a little bit more about what Kaggle is, go check out episode 84 of the Google Cloud Podcast when we talked a little bit more about why Kaggle is so cool and all the different kinds of people and resources that are there. 

MARK 2: Yeah, that's a great episode. Kaggle is an amazing community of people working on very interesting machine learning AI problems. So if you want to get involved with that community, I highly recommend it. 

MARK 1: Yeah, it's a cool place. And with BigQuery integrated into Kernels, it's just going to make it that much more easy to see really cool insights. 

MARK 2: Absolutely. And finally, it wouldn't be a GCB podcast if I didn't mention Kubernetes in some way, shape, or form. So we did just recently introduce a new Jenkins GKE plugin. So if you're familiar with Jenkins, it is a very widely used tool for automating software build, test, and deployment. So your CI and CD pipelines. And we just released a plugin for it to make it easy to push deployments out to GKE. This is a super nice plug-in in that you can make it super easy to just push out deployments. 

But not only does it do deployments, it will also do validation for you as well. So for example, with the deployment manifest, it will go and make sure that the right number of healthy pods matches the requested minimum that's been requested as well. This works for a really nice GUI system, but you can also use it with the Jenkins pipelines syntax. So you can do some more complicated stuff as well. So yeah, Jenkins has been around for a really long time, but super glad to see us supporting it even more. 

MARK 1: Yeah, so if you've got a big CI/CD pipeline built in Jenkins, you now have the ability to more easily integrate with Kubernetes and actually make sure that everything you're pushing out is working. Very cool. 

MARK 2: Absolutely. 

MARK 1: All right. 

MARK 2: Very cool indeed. 

MARK 1: That's some cool things of the week. Let's get right into our content with Yuri. 

[MUSIC PLAYING] 

MICHELLE: Welcome. Today, we have a very exciting guest. We have Yuri Litvinovitch with us from Scotiabank. I'm Michele Casbon. I'm here with Mark Mirchandani. 

MARK 1: Hello. 

MICHELLE: Thank you for joining us, everyone. Yuri, it's great to have you here. Where are you joining us from today? 

YURI: Hey, it's great to be there at the podcast, and I'm joining you from Toronto, Canada, the heart of the North and the hometown of Toronto Raptors, who recently won NBA championship. And that's the first time in history where the title goes north of the border, so we're all excited here. There's lots of cheerful spirit in the air and lots of smiling people on the streets. 

MARK 1: And of course, we're joining you from the exact other side of that competition, San Francisco and the Golden State, where people are thrilled that the games were really good. That last, like, minute on, what was that, game six? It was a real nail biter. 

Because I don't even-- I'm not even a basketball fan. But even I had to peek at that and just see, like, oh. Because it was one point. Like, so good. But obviously, it was some really awesome matches. So I think everyone was super excited to be, like, well, it was a really, really tough final fight. And the Raptors deserve it. 

MICHELLE: And we're still friends. We're still talking. 

YURI: Absolutely. We will always be, and I'm glad that we have such great teams and players who can deliver so much energy to all the people who watch them. 

MARK 1: Absolutely. So enough about basketball. Not that we couldn't probably have a separate podcast on it. But Yuri, why don't you tell us a little bit about yourself and what you do? 

YURI: Sure. So as I've been introduced, my name is Yuri Litvinovitch, and I'm working as a senior Cloud engineer for Scotiabank, and I'm also a Kubernetes tech lead on the team. 

So I've been with IT for pretty much all my life, started as a system administrator, network administrator, and then slowly going towards modern ways of building applications and infrastructure, more towards DevOps, and eventually, I transitioned towards being a Cloud guy. And right now, I work for Scotiabank, and I'm part of the organization called [? Plato, ?] or [? Playform ?] organization, and we are the team that performs enterprise modernization to transform the bank into how we see that into a modern technology company in financial services. 

MICHELLE: Yuri, I think that background is really important, because you've really seen the depth and the breadth of the industry. So you started out on the administration side, networking. And I take it that you were in on-prem data centers. And now you've sort of followed the evolution into the Cloud. So how have you seen things change as you've made that transition? What have been the things that have stood out the most to you? 

YURI: And if you go through all the years and see the actual progress that happened on IT side, and including on the Cloud side, it's just mind blowing. If you look at all the ways of how people provision their, let's say, servers in the data center, how they need to plan in advance, go talk to data center teams to get [? rec space, ?] to get it all wired, connected, and that just took so much time, to modern ways, where you can use the power of public Cloud and get your VM in less than a second. 

And it's fully there. It's fully up and running. It's super highly available. It's resilient. It costs less. It's just mind blowing to me. And I'm happy to be part of this journey and happy to live in such exciting times. 

MICHELLE: So we've essentially replaced a whole class of problems with a whole new set of problems. So if you're not facing those challenges anymore, what are the new challenges that you've been facing? 

YURI: With this public Cloud that came to the market and into the game, that provoked big organizations like Scotiabank to perform digital transformations. Because everybody understood, including our leaderships, that in this new world, where Cloud is pretty much the only way forward, we need to modernize existing stuff. And for example, Scotiabank is a huge organization with more than 90,000 people in many different countries. And we have 5,000 plus apps, and most of this apps were built using old ways, historical ways of building applications for infrastructure that relies on prem. And transitioning to the Cloud-- that is a big of an effort. And this is what our organization is doing. 

MARK 1: Yeah, I want to hear more about the-- obviously, the Cloud details in a second. But I think you just touched on a really interesting point. This is a big organization, with a tremendous amount of people, a tremendous amount of infrastructure and apps and tooling built around those. It's a complicated sector. There's a ton of big enterprises here, a lot of which have legacy infrastructure and architecture from the past 30, 40, 50 years, that all of them are facing the same problem. 

How has that journey been for Scotiabank? Like you said the leadership was on board-- traditionally, that's actually not the most-- it's not the most forefront thing. You don't always see a big push to do that. So I'm really interested in hearing about how the company has taken that response, and how has it been so far? 

YURI: Yes. That's a very good question. And let me share a quote that our CEO, Brian Porter, said in 2016. He said that we are in the technology business. Our product happens to be banking, but [? largely ?] [? that's ?] delivered through technology. Basically, that means that he set that direction to go towards the Cloud. 

And that started the whole chain of modernization that went from top to bottom. Of course, funds were allocated. We got all the talent necessary. And the journey started for us about three years ago with going towards building a platform that would help developers to accelerate their application delivery cycles. 

MICHELLE: I think that's really important, to have support like that coming from the top. That means that you're not having to advocate for modernization. That means that, from a business standpoint, it's seen as something that leaders are behind. I think that improves things significantly. Is that different from what you've experienced at other companies? 

YURI: Definitely big organizations and enterprises like Scotiabank need that push from top to bottom. Because traditionally, financial sector enterprises are more conservative than the rest of the industry. And it's totally fair and understandable, because there is lots to protect and be conservative about. Scotiabank keeps [? PII ?] data for millions of people, our customers. And if anything happens, their lives might be at risk. All their money, let's say, that people gather for their entire lives might be at risk. 

So security is definitely a big component. And that, I believe, is what differs large enterprises and financial services like Scotiabank from startups, let's say. Being a huge enterprise in financial services, like Scotiabank, we are responsible for providing secure transformation. Because many of our customers, they rely on us. They rely on that change being uninterruptive to them. 

So clearly, having that push from top leadership is very important, and that gives engineers green light to do transformation and to make sure that this transformation will end up in success, because everyone is aligned. While in smaller organization, it's much easier to bring bottom to top change, because it's easier to pivot for them. This is something that I found in my journey with both startups and larger enterprises. 

MARK 1: Absolutely. We work with a lot of companies out here, and of course, in the Bay Area, startups are pretty prevalent. So it's easy to think about, oh, you can just influence change by making a good case for something. Well, that works really well when your company is 10 to 20 people large. Turns out 90,000 is a little harder to move as quickly. 

YURI: [LAUGHS] You've got it. Exactly. And you know what? I see it as a very natural thing that happens even in the world. For example, in physics, we all know that objects that have higher mass need more force, or more effort, to pivot or change direction or change velocity. Same happens with organization. The bigger organization is, the more effort it takes to actually pivot and transform it. So it looks very, very natural to me, and it's just the way it works. 

MICHELLE: Yeah, I think that's been very noticeable for me. So I didn't join a startup until a few years ago, and the first decade of my career was spent in large enterprises. And I think it has less to do with the size, like the number of employees, and more to do with the size of the legacy software that you're supporting. 

And so Yuri, you talked about having thousands of applications that were created in this older architectural style. Those applications weren't written overnight, which means that you're looking at decades worth of software that you're supporting. And so my question to you is, how are you going about modernizing those? 

Is this why you chose Kubernetes as a way to be able to modernize all of it at once? Or are you looking at it piecemeal, maybe technology type by technology type, or architecture type by architecture type? What's your approach been in modernizing that amount of legacy software? 

YURI: Yeah, definitely, we saw the trend, that the modernization-- one of the pieces of modernization is going towards containers, and whole industry goes towards containers, with all the benefits that it brings, including lightweight and homogeneity during different environments, in dev, in staging, in prod. It's easier to test. It's easier to roll out. So we decided to build a container orchestration platform to help our developers manage the lifecycle of their applications deployed in containers. 

And the very natural fit for that container orchestration platform was Kubernetes. It pretty much became an industry standard for this type of work. And Google, our great partner in that digital transformation journey, has an offering of Google Container Engine, which is a managed Kubernetes solution. So we decided to build a platform based on that, at least the first iterations of it and basically provide everything that it brings to our end developers. 

MICHELLE: So what made you decide on GKE? So I know that before I joined Google, I was in a similar place to you, where I was looking at building a platform to support containerized deployments. And I chose GKE, but I was at a small startup. So series A type, 20, 30 people. So I'm very interested in what your motivation was in choosing a managed Kubernetes platform, and also why GKE, and why not a managed platform from another provider? 

YURI: We decided to start with GKE for a number of reasons. And the first reason is that we're happy with what GCP as a platform brings to us at the bank. It helps us solve many different business challenges and problems. It's working well, and our usage is increasing. And GKE was the managed Kubernetes solution. 

And I know that Kubernetes-- raw, open source Kubernetes-- it takes quite a bit of effort to configure, to manage. It takes quite a bit of effort to make it work. While the managed solution from Google, having a very modest price for using that, brings lots of, lots of things that otherwise needed to be developed on our own. So it was a natural thing to try and build our platform based on the managed solution from Google. 

MICHELLE: OK. And what are some of the other aspects of the platform that you like, in addition to GKE? Does it play nicely with some of the other services that you use? 

YURI: Yeah, totally. And our goal would be to build a self-serve platform for our developers that makes it scalable, and this is just the way to go we believe. So having GKE Kubernetes running on Google will help to integrate it with existing services that we use from Google, starting from compute instances and custom applications running there and ending up with managed services, like Cloud SQL or BigQuery or data flow or Pub/Sub. They're all supported by Stackdriver [? log-in ?] and monitoring, which is just a vital part of the whole GCP. 

That just brought so much power into our hands. And eventually, that helped us deliver that to our customers. The same cool infrastructure that supports GKE and all other services-- we will just make our developers use it, and have all the advantages of that. 

MICHELLE: So it sounds like you really gravitated towards the managed side of things, rather than rolling your own. Is that a new approach, or is that pretty fundamental to Scotia's DNA? Has that been a change for you? 

YURI: OK, I think we're focused here more on managed sides of things, but it's actually both. In large enterprises like Scotiabank, we've found out that it's just really not feasible to bring something to the plate and not consider existing infrastructure, not consider existing staff, not consider teams that were building their, let's say applications or infrastructure, for the last 20 years. So we actually integrate that new platform with a bunch of existing services. 

And I believe that was one of the big points why the whole program was such a success, and it's getting more attention within the bank. One of the reasons was because we developed that relationship with the existing services, and we helped them to modernize their staff without any hostility of-- with you guys are old, and we are new. We are helping them to get all the benefits of Cloud and doing that with their own pace. 

Let's say they want to slowly move some workloads to the Cloud-- sure. It's totally use case. It's fair. And we help them to do that. If some people wants to go all in, we have applications like that. Cloud is also available for that. 

So definitely, on top of having that managed services from Google Cloud, we built a lot of stuff around it to make it usable for the bank and to make it compatible with existing security processes, with existing operational readiness processes, and that's what made quite a success. 

MICHELLE: So it sounds like you had the flexibility that you needed to choose managed services where it made sense, but not in a way that forced people to use them. So you focused on building a self-service platform that empowered people without strong-arming them or having to introduce blanket policies for this entire giant organization to follow. 

YURI: Right. Right. Definitely. And that is being accepted very positively, because people understand that we are there to help. We are there to help them solve their business problems with less resources, with more cost efficient, with better technology. And it's definitely considered a very positive change, so people co-create with us, and this is something that we value. 

MARK 1: So when working with all these different teams-- you've kind of alluded to the different parts of GCP that you use to make their migration a lot easier. What's been your favorite part, or the part that has been the most helpful in convincing a lot of these teams that that migration is possible? 

YURI: One of the best benefits that you can get by going to public Cloud is not only cost efficiency but a bunch of things that are traditionally very hard to achieve. For example, it's instant provisioning. You don't need to wait for hardware to be ordered and set up and configured and then ready for you. 

I would say dynamic provisioning is a great one as well. Because you only pay for what you use, and when you don't need it, you can configure Cloud and services around it to automatically scale down and take care of that. And of course, the resources are nearly unlimited in the Cloud. You don't have to worry about you running out of disk space, let's say, or running out of compute power. Just get more instances. Just get more storage. 

And I also believe that Cloud can provide you with more enhanced security than what you can achieve on your own. Because Cloud providers, they can afford-- have thousands of security architects and specialists that can reach the level of security that hardly even the big organizations can afford if they have their dedicated teams. 

So if properly engineered, public Cloud could be made safer than your own dedicated infrastructure. And you don't pay any upfront costs on using the Cloud, as I said. You pay for only you use. And this is a lot of benefits and convincing points for them to start that modernization and join this transformation happening. 

MICHELLE: That's really interesting to hear you highlight enhanced security as a benefit of Cloud. Because I think a lot of people traditionally are scared of Cloud because they perceive it to be less secure. Could you share maybe a couple of your favorite security enhancements, or just some tips for people who are looking to make their apps more secure? What have you found most useful? 

YURI: Right. So one of the first and grounding and the very base thing that GCP offers is total encryption. Everything is encrypted [? at REST. ?] Encryption [INAUDIBLE]. So it's very hard for some malicious individual, let's say, in a data center, who are secure too, to get any information, even if they have access to hardware. So another great thing that you can achieve with Cloud is having your environments configured in a very similar way. 

And here is a great use case for Anthos, the new thing that Google introduced quite recently at Next this year. This can be used as a powerful configuration management tool that can span not only for GKE, but also for GKE On-Prem. And I believe there are plans to support other call providers, like Amazon or Azure. And having that one central place where you control your configuration and security and other things is just a no-brainer, that this is more secure than when you have multiple environments and maybe multiple people responsible for configuring each environment. I would say this is one of the good points of having that enhanced security that comes with Cloud. 

MARK 1: So with all of the security in the Cloud and all these other advantages that you've been able to convince your teams of, hey, these are good reasons to migrate, I'm also interested in hearing what their number one concern was to not migrate. So what kind of pushback have you been getting from all of these instances that have been challenging for you? Because obviously, there are going to be a lot of issues when planning a migration. 

YURI: I believe one of the challenges that we encountered was trying to convince them that having to modernize their application is the effort that they need to perform, and it will benefit them. Because going to Cloud, we promote when you actually modernize your application, right? You don't just lift and shift. Otherwise, Cloud becomes just another data center for you, just in a different location. 

We really promote you to build their application using all the DevOps principles in mind. And that required a bit of work. So I believe one of the challenges that sometimes we have with application team is to actually show them that Cloud is faster, it's more cost effective, and it will deliver value faster. 

But I would say those are the early days of the program, when the thing was just introduced to Scotiabank and no one really had heard about the public Cloud for financial services. Everyone was like, OK, call another new feature or something. But slowly, gradually, we built the trust by having success stories from other application teams that took a risk, allocated resources, to actually do a modernization and go to the Cloud. 

And once application teams see the velocity that it brings-- so for example, used to take six months for some applications and teams to get their data centers set up, VMs infrastructure, then another month to get databases-- that was reduced to maximum hours. And I think it's no-brainer. Which one would you prefer? Besides, having security on board, you get all the same sign-off from bank security team that says, OK, this is trusted, and it's been verified. 

MICHELLE: So that brings up a really important point, because finance-- and not just finance, but retail finance-- is such a highly regulated industry. What are some of the things that are most important to you? What gets you that sign-off from other teams to let you move applications into the Cloud? What was really crucial for you? 

YURI: The [? good thing ?] that I can share with our audience, from my experience working in the financial sector, is that you need to build trust with other teams. You need to prove that you are a friend to security, that you are a friend to operational readiness team, or whoever is responsible to go into production. You need to build this relationship to help them understand stuff, to promote that friendship instead of, maybe, hostility, and sometimes positioning yourself of, oh, we're doing the modern, the cutting edge technology stuff, versus you guys are too conservative, too old, too concerned about everything. Help them understand what you are doing. 

Because the truth is Cloud is the way to go. The truth is companies are going there for a reason. Because it's better in so many ways. It's just a matter of patiently explaining and sometimes spending extra time to help people understand what you are doing. And from my experience, that pays off a hundred times. You get your sign-offs faster. You get people up to speed. And you just spread the word, spread the knowledge of the transformation that's happening. 

MICHELLE: So is it fair to say that many of the challenges have not been technical in nature, they've been more human in nature? 

YURI: Yeah, I would say so. It's a bit of both. Of course, there is a technical piece of it, but there's also a human aspect in transformation. 

MICHELLE: Yeah, I'm very familiar with that problem. I think most engineers spend a good portion of their time really tackling the human issues other than the technical challenges. 

MARK 1: Again, you can't have somebody just show up to the company with a big picket whiteboard fence and say like, hey, let's go Cloud, and then everyone's like, oh, that's great. Let's do it. It's not going to work like that, right? So what would you say the best piece of advice that you could pass on, or the things that you found to be most helpful when you started this journey, or when this journey was being started, to say, how do we get things running? 

YURI: One of the lessons that I can give would be to outline the benefits of the transformation that you want to do very clearly. Make sure you understand what you want to bring, and make sure that people who are responsible for decision making are also on board, and they understand why you're trying to do the transformation. 

Because it's quite obvious that many things about going Cloud and going Kubernetes and going all the cool tools like Anthos, Istio are better. Show that. Prove that this is indeed the case. That might require a bit of extra time in building a [? POC. ?] But to have something tangible to say. And those arguments are really convincing. 

So that would be one. And one of the other tips that can be shared is that, look at the success of other companies, success of other people who did that transformation, and show that this is real, that this is something that already happened, and you are not the first one who's doing that. Because Cloud has been happening for quite a while now, though it's still very hot and very exciting. 

And there are good examples of good success stories of going into the Cloud, using Kubernetes, using other cool technologies. So it's already there. And that makes it easier for those people who have funds and make decisions to make decisions towards your points. 

MARK 1: So to your first point about maybe taking some extra time and actually showing the benefits, have you found things like Kubernetes, Istio, Anthos, all of those a good platform for maybe setting up either demos or proving the technology to help the cause? 

YURI: Absolutely. Absolutely. We did that within Scotiabank, within [? Plato, ?] within our customers. We showed them that, apart from having the power of all the underlying technologies, it creates this velocity. It brings more stability, more resiliency, cost efficiency. And it's tangible. It's easy to use. 

MICHELLE: Yeah, so I think velocity is really key in highlighting some of the benefits of these technologies. Is there anything that it's enabled you to do that you just couldn't have done before, even at a very slow velocity? Has it really changed things for you fundamentally, as an organization? 

YURI: Good question, Michelle. 

MICHELLE: How has it changed your life, Yuri? 

YURI: I'm still excited. I'm still excited about the Cloud. I'm still excited about the transformation, though I've been working for years in that field. But I still see new things coming. 

MARK 1: Kubernetes is great, but it hasn't made my commute shorter yet. But hasn't it, though? If you think about these large scale infrastructures that might be running, like the train system might be running on Cloud, that might actually make my commute shorter. 

MICHELLE: Before we know it, Muni might completely reconstruct their entire infrastructure, and then Kubernetes could be helping us get to work faster. 

MARK 1: I thought it was a ridiculous example, and it was so wrong. 

MICHELLE: It's inevitable, Mark. Everything will be running on Kubernetes. 

YURI: It's inevitable. But you know what? First steps of many scientific breakthroughs-- they always start in labs, when no one knows what's going on. Only just a group of people. Slowly but surely, they get to roll out to real life scenarios. So once your commute gets shorter, Mark, I'm sure you'll know it then. You'll remember this podcast and the conversation we had about all the cool stuff that GCP, Kubernetes, and other Cloud things offer. 

MARK 1: Well, yeah, I think there's a lot of great things that have been solved with asking hopefully less ridiculous questions. But in reality, how can this technology be used in a wide variety of ways? And I do mean wide. Because there's so many different ways to think about, how does this apply, and how does this enable people to make those differences? 

YURI: Yeah. If you think of Kubernetes, for example, Google has been running [? a board ?] for years before actually open sourcing it and making it called Kubernetes to the community. So pretty much everything at Google is based on [? board, ?] and you just build on top of that. So having that experience and having all the power that Google is now, I think running the same principles and same kind of platform, which is container orchestration platform, is very promising and can tell you a lot about this evolution is happening. 

MICHELLE: Yeah. It is not unlike the question of-- do you think the people who developed Java originally would have ever thought that, oh, do you use Java, because you move around in this world? Same with machine learning. Even if you think it's not part of your everyday life, it is, because it's part of all the services that you use. It's not long before that becomes the case with Kubernetes. 

All right. Yuri, is there anything else you would like to share with us or talk about before we wrap up? 

YURI: I have so many things to share, so hopefully we can have another time where we'll continue this great conversation happening. 

MICHELLE: I think that would be great. If you have any things you would like to plug, maybe some websites or blogs that you'd like the audience to share, if they'd like to follow up with you in any capacity? 

YURI: I would suggest that you check all the presentations that were done by our team on different events, like Cloud Next last year, this year. And just follow Scotiabank and platform organization to find out about the cool stuff. This is speaking of [? our. ?] But if you want to know more about the technology, just Google that. 

MICHELLE: I have one last question for you before you go. So you've moved all of these applications onto Kubernetes. Are you doing any machine learning on Kubernetes yet, and what tools are you using to do that? 

YURI: Yes, we do have plans to use that, to use machine learning and run also different fraud analytics on Kubernetes and a bunch of other use cases. So we'll expand the platform to support that. 

MICHELLE: Oh, fantastic. Do you already know which set of tools you will use, or are you still evaluating which one would be the best fit? 

YURI: Oh, yeah, we'll definitely integrate that with data flow. We will integrate that with BigQuery and other analytic tools that Google offers. 

MARK 1: I hear there's a wonderful little framework called Kubeflow that's really good for machine learning on Kubernetes. Can you tell us a bit more about that, Michelle? 

MICHELLE: I've also heard something like that before. So Kubeflow is a project that I've been involved with, and it's specifically for running machine learning on Kubernetes. So I encourage you to check it out if it's part of your roadmap, if it's something that you think might be useful. It's Kubernetes native, and it's fairly simple. And feel free to reach out to me if you'd like more information about it. 

YURI: Nice. 

MARK 1: All right, well, thank you so much, Yuri, for your time, and hopefully we will get to talk again soon. 

YURI: Thank you. It's been my pleasure. Thanks for having me, and you guys have a great day. 

MICHELLE: Thank you for joining us, Yuri. Talk to you later. 

YURI: Take care. 

MARK 1: Thanks so much, Yuri, for coming in and showing us exactly why migration is more than just a technical situation that you need to put yourself through. You also need to look at the bureaucracy and the people side of things and say, hey, this is why we're doing this migration. These are the reasons it's important and putting the decision making factors into that. Very, very cool stuff. 

MARK 2: Yeah, no, really great, and super cool to hear this coming from you and Michelle. But why don't we get stuck into our question of the week? 

[MUSIC PLAYING] 

Because I like asking tough questions. 

MARK 1: And I sometimes like answering them. 

MARK 2: Are you ready? So standard Cloud Shell comes with a lot of really great tools, like Go and kubectl and all of the other things that I really enjoy. But sometimes I want to have other things available to me, or maybe I'm working on a project with something like Helm or Terraform or FFMpeg or ImageMagick or maybe a whole host of other things that may or may not be included in Cloud Shell. They may actually be there. I'm not sure. But if there's something that I don't have in Cloud Shell by default but I want to add, how can I do that? 

MARK 1: Yeah, absolutely. Cloud Shell-- and I think we've talked about this over the past couple of weeks-- it's just this cool little ephemeral environment that you get when you create your GCP account. And it's a great way that you can go in, and like you said, it's got all the built-in things, especially G Cloud, so you can run those commands, and you're good to go. 

But it's also the pseudo temporary, right? Like environment changes won't persist. So if you install Terraform and then you come back later, Terraform might be gone. So it's not really a great consistent way to install those things unless you like to run those install commands every time. You probably don't. 

So we have a very, very cool way that you can actually take your Cloud Shell environment and spin it up using a Docker image that you can build yourself, and it pretty much involves two steps. The first step is to create the Docker image of which you need to include. So you want Terraform and Helm, you can just create your Docker file, include the steps to install Terraform and Helm, and then go ahead and build that image. Then you push it up to the container registry. 

And in Cloud Shell, you can go to the environment settings and just choose that container right from the Container Registry, and then Cloud Shell will boot into using that container. So if you have a long, complicated setup process, or even if you just want a few extra tools, you can quickly, quickly put that image together and then boot from that, and you have everything you need to go. 

MARK 2: I actually just realized that means that I could boot up Cloud Shell inside Cloud Shell [? in ?] my Docker file, inside Cloud Shell build my Docker image, push my Docker image, and then restart Cloud Shell in the other image. 

MARK 1: You can use Cloud Shell to build a Cloud Shell image, and that is some very "Inception" level stuff right there. 

MARK 2: Turtles all the way down. 

MARK 1: All the way down. 

MARK 2: Or containers, really. 

MARK 1: Containers all the way down. If there's not a Gif of that somewhere-- 

MARK 2: There must be. Send it to us. Somebody send it to us. 

MARK 1: OK. Well, in the meantime, Mark, what are you going to be up to? 

MARK 2: Pretty much the same as we have for the last few episodes. So I'll be at Tokyo Next, coming up around the end of the month. Super looking forward to that. Then I'll also be at the Open Source in Gaming event happening right before the North America Open Source Summit, which I'll also be attending as well. So pretty much similar stuff as always, gaming, open source, Kubernetes. 

MARK 1: It's almost like you have specialties that you focus on. 

MARK 2: Almost. 

MARK 1: Almost. 

MARK 2: Almost. 

MARK 1: Almost there. 

MARK 2: Almost. And yourself? 

MARK 1: Yeah, and my specialty, creating a lot of fun little content, moving around a little bit to work with some customers. One of the series that we're working on right now is called This Week in Cloud. So every Monday, we ship out a little two-minute video that talks about some of the latest news posts. 

And I think it's a cool way to maybe start your week off and see some announcements that you might think are really cool. So definitely check that out on the Google Cloud channel. I'm going to be working a little bit with that and many other series that I'm looking forward to talking about once they get launched over the next couple of weeks. 

MARK 2: Fantastic. I will definitely check out This Week in Cloud. 

MARK 1: Awesome to hear. And I hope everybody out there-- let us know if you think there's other things that you think are useful. But it's another great way to stay on top of some very, very cool things of the week. 

MARK 2: Well, awesome. Well, Mark, thank you so much for joining me, at least for the beginning and end of the podcast this week. 

MARK 1: Yes, thank you, Mark, for helping me out here. And of course, thanks to Michelle and Yuri for that awesome interview. 

MARK 2: Wonderful. Well, thanks everyone for listening, and we'll see you all next week. 

MARK 1: See you next week. 

[MUSIC PLAYING]