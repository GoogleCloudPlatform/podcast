+++
audioDuration = "00:27:41"
audioFile = "Google.Cloud.Platform.Podcast.Episode.169.mp3"
audioSize = 40242514
categories = ["StackRox", "Security", "Kubernetes"]
date = "2019-04-03"
description = "Gabi is back with Mark this week in an interview with Conner Gilbert of StackRox, a Kubernetes security company."
draft = false
episodeNumber = 169
hosts = ["Mark Mandel", "Gabriela Ferrara"]
title = "StackRox with Connor Gilbert"
image="/post/episode-169-stackrox-with-connor-gilbert/images/hero/hero-EP-169.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/b8w3h7/episode_169_stackrox_with_connor_gilbert/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Gabi](https://twitter.com/gabidavila) is back with [Mark](https://twitter.com/Neurotic) this week in an interview with [Connor Gilbert](https://twitter.com/connorgilbert) of [StackRox](https://twitter.com/stackrox), a Kubernetes security company. StackRox uses Kubernetes and containers to maximize security for customers across the container lifecycle. Connor explains how they monitor your containers through building, deploying, and finally the running of the application, and keep your project secure through all stages. StackRox identifies risks and weak areas, then responds in real time. 

Connor's advice for our listeners is to understand what's going on with your containers and your application. Look at the data, the specs, and your options and then, if-needed, adjust the defaults to optimize the security of your app.
 
<!--more-->

##### Connor Gilbert

[Connor Gilbert](https://twitter.com/connorgilbert) is a product manager at StackRox, a Kubernetes security company, where he contributes to product vision and advocates for customer needs. Connor previously worked in architecture and engineering roles at StackRox. Before that, as Security Research Scientist at Qadium, he built tools to uncover network perimeter exposures and conducted DARPA Internet security research. He first discovered Kubernetes in 2015 and has been using it on GCP ever since.

##### Cool things of the week

* Simplify reporting with the Sheets data connector for BigQuery, and voila: automated content updates for G Suite [blog](https://cloud.google.com/blog/products/g-suite/simplify-reporting-with-the-sheets-data-connector-for-bigquery-and-voila-automated-content-updates-for-g-suite)
* 6 standout serverless sessions at Google Cloud Next ‘19 [blog](https://cloud.google.com/blog/products/gcp/6-standout-serverless-sessions-at-google-cloud-next19)
* 9 mustn’t-miss machine learning sessions at Next ‘19 [blog](https://cloud.google.com/blog/products/ai-machine-learning/9-mustnt-miss-machine-learning-sessions-at-next19)
* Don’t miss these must-see G Suite sessions at Google Cloud Next '19 [blog](https://cloud.google.com/blog/products/g-suite/google-cloud-next19-dont-miss-these-must-see-sessions-for-g-suite)
* Next On Air [live show](https://cloud.withgoogle.com/next/sf/next-onair)

##### Interview

* StackRox [site](https://www.stackrox.com)
* StackRox Overview [site](http://security.stackrox.com/rs/219-UEH-533/images/StackRox_Overview_SecuringApplications.pdf?utm_source=StackRox&utm_medium=Website)
* StackRox Data Sheet [data sheet](http://security.stackrox.com/rs/219-UEH-533/images/StackRox_DataSheet_Platform.pdf?utm_source=StackRox&utm_medium=Website)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Google Container Registry [site](https://cloud.google.com/container-registry/)
* Google Cloud Security Command Center [site](https://cloud.google.com/security-command-center/)
* Go [site](https://golang.org)
* Istio [site](https://istio.io)
* Kubernetes Documentation [site](https://kubernetes.io/docs/home/)
* Kubernetes Blog [blog](https://kubernetes.io/blog/)
* Kubernetes Blog: A Guide to Kubernetes Admission Controllers [blog](https://kubernetes.io/blog/2019/03/21/a-guide-to-kubernetes-admission-controllers/)
* CNCF [site](https://www.cncf.io)
* CNCF Webinar: Operationalizing Kubernetes Security Best Practices [video](https://www.cncf.io/community/webinars/operationalizing-kubernetes-security-best-practices/)
* BSidesSF 2019 Talk: "Containers: Your Ally in Improving Security" [video](https://www.youtube.com/watch?v=R9-FGj-nwKU)
* Nine Kubernetes Security Best Practices Everyone Should Follow [site](https://security.stackrox.com/9-kubernetes-settings-that-maximize-security.html?Source=Website&LSource=Website)
* Top 5 Kubernetes RBAC Mistakes to Avoid [white paper](https://security.stackrox.com/rs/219-UEH-533/images/StackRox_WhitePaper_Top-5-Kube-RBAC.pdf?utm_source=StackRox&utm_medium=Website)

##### Question of the week
How do I migrate my traditional data warehouse platform to BigQuery?

* [Migrating your traditional data warehouse platform to BigQuery: announcing the data warehouse migration offer](https://cloud.google.com/blog/products/data-analytics/migrating-your-traditional-data-warehouse-platform-to-bigquery-announcing-the-data-warehouse-migration-offer)
* [Warehouse Migration](https://cloud.google.com/data-warehouse-migration-offer/)

##### Where can you find us next?

Mark will be at [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [ECGC](http://ecgconf.com), and [IO](https://events.google.com/io/).

Gabi will be at [Cloud NEXT](https://cloud.withgoogle.com/next/sf) and [PyTexas](https://www.pytexas.org/2019/)

StackRox will be at [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/), [FS-ISAC](https://www.fsisac-summit.com/AS19-Overview), [DockerCon](https://www.docker.com/dockercon/), [Red Hat Summit](https://www.redhat.com/en/summit/2019), and [Black Hat](https://www.blackhat.com/us-19/).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 169 of the weekly Google Cloud Platform podcast. My name is Mark Mandel, and I am here and delightfully joined by Gabi Ferrara. Hey, Gabi. How are you doing today?" >}} 

GABI: Hello, Mark. How are you doing? 

MARK: I'm very well, very, very well. Game Developer Conference is far behind me. But Next is around the corner, so everything is on fire again. 

[FIRE ENGINE SIREN] 

GABI: Don't panic. 

MARK: It's fine. Everything will be fine. So who are we talking to this week? 

GABI: So this week, we're going to be talking to Conner Gilbert, Product Manager for StackRox. We're going to be talking about containers and security. 

MARK: Sounds awesome. And then after that, I get to ask you the fun question of, Gabi, how do I migrate my traditional data warehouse platform to BigQuery? How do I do that? 

GABI: [LAUGHS] 

You have no idea, right. 

MARK: I don't know what I said, but it sounds really good. And I'm sure this is a problem that very many people have. 

GABI: It is. I'll tell you later. 

MARK: Wonderful. But before we do all of that, why don't we get stuck into our cool things of the week. Gabi, what have you got? 

GABI: Now you can automate your reports on sheets using the data connector for BigQuery, which means you can get your stuff that's on the data warehouse, Mark-- 

MARK: Oh, nice. 

GABI: And put it on the sheet automatically to be updated with OpScript and other stuff. There is a post from Alicia and [? Anu, ?] our colleagues, and they should check it out. 

MARK: Oh, fantastic. I didn't realize Alicia wrote that. That makes perfect sense, of course. So there is a series of articles that we're going to go through on the Google Cloud blog giving you some insight and some direction on various aspects of the sessions that are happening at Google Cloud Next. So there's one here called "Six Standout Serverless Sessions--" that's wonderful alliteration-- "Six Standout Serverless Sessions" at Google Cloud Next '19. We'll link to it in the show notes. 

I want to highlight one that I think is particularly great, called "Where Should I Run My Code, Choosing From Five Compute Options." That's going to be run by teammate Bryan Dorsey. I know a lot of people tend to be like, we have so many things and it's so cool. How do I choose where I should be running my code? I think you'll find this is going to be a great session, I should say. But there is also some other stuff around Knative, running containers, serverless on Google Cloud is a spotlight session, all sorts of good stuff around serverless stuff. 

GABI: Yeah, thank you. And also at Next, this year we're offering about 30 topics ranging from building a better customer service and to automate a visual inspection for manufacturing. What do I mean by that? Machine learning all the things. Take a look at the show notes about nine sessions you must see about machine learning at Next. 

MARK: Fantastic. Rounding that out, there is another article called "Don't Miss These Must-See G Suite Sessions at Google Cloud Next." There's about 17 of them in a list, from small and medium businesses that are using Google and G Suite, G Suite migrations, accessibility features. But I think my favorite here is "How To Grow a Spreadsheet Into an Application." I think we've all been through experiences where something has started as a spreadsheet and ended becoming more and more and more and more stuff. But there's how to apply forms, and Apps Script and App Maker. And so how you can iterate using [INAUDIBLE] forms sometimes it's just a great way of getting things done. So I'd be quite keen to check that out. 

GABI: Cool. 

MARK: Probably worth mentioning, though, if you're not going to be in San Francisco for Next, Next On Air is available. So there'll be live streams of a variety of sessions and all sorts of other good content, as well as extended viewing parties that are happening around the globe. So make sure to check out the show notes or just google Next On Air, and that'll take you to the right place so that you can see what's going on, even if you aren't in San Francisco. 

GABI: On that note, let's talk to our guest, Connor Gilbert. 

MARK: Awesome. Let's go do it. So very happy to have Connor Gilbert here, Product Manager for StackRox. Thank you so much for joining us today. How you doing, Connor? 

CONNOR: Pretty well. Glad to be here. 

MARK: Awesome. Well, thank you so much for coming to talk to us about StackRox and Kubernetes security and container security, and all the security things. Before we get stuck in there, do you want to tell us a little bit about yourself and your background? 

CONNOR: Sure. So I'm a product manager on the product team at StackRox at a small company. That means dealing with customers, triaging issues, understanding their needs, developing new features, figuring out the roadmap, and working with engineering. So it's really all across the stack of delivering a quality product. A lot of fun. 

MARK: Awesome. At a high level, do you want to tell us about what StackRox does? 

CONNOR: Yeah, so we're a Kubernetes security company, and what we do is try to use the power of containers and Kubernetes to help customers up their game in security. We build a product that goes across the container lifecycle, so build, deploy, run, and helps them understand risk, understand where they might have been exposed, and detect threats and respond to them in real time. 

GABI: What Google Cloud Platform products do you use for the StackRox platform? 

CONNOR: Yeah, so we have an interesting deployment model. We are a security product and we want to run wherever customers do, so across Google Cloud Platform, other clouds on premises. So we use a lot of GCP products inside of our company. We run a Kubernetes Engine cluster-- actually, two of them, I think, on every commit into our code base for testing and validation. We use the Google Container Registry, some of the container analysis products internally for deployment and things like that. But then when we're deployed, we act as a self-contained product. 

We do integrate with the Cloud Security Command Center, which has recently added Kubernetes Engine cluster enumeration and findings tagging, so helping customers understand the risk there. But yeah, mostly internal to our company, we're using GCP and really use that to keep our dev velocity up. 

MARK: Nice. So actually, I'm curious. You said you're a Kubernetes security company. What made you decide that Kubernetes was going to be the platform that you were going to base, basically, your entire business around? 

CONNOR: Yeah, that's a good question and it was definitely a choice we made. We started around four years ago, and around that time containers were on the ascendancy. But Kubernetes hadn't really won the game. We think, really, Kubernetes is the platform for portable, robust, repeatable app management and security. So we've seen widespread adoption, we've seen a lot of the players in the container space adding support for or rearchitecting around Kubernetes, and we really think that that's the place where we can focus. 

So we build deep integrations into Kubernetes. We think that gives us a much better position to help our customers do a better job of security, by really using the power of Kubernetes and not going through a least common denominator of just containers. 

GABI: And using Kubernetes on your day to day and integrating to product, what were the challenges that you faced? 

CONNOR: So I'll project a little bit back into the past. At my last company, we started using Kubernetes in, I think, early 2015, so around the beta time for Google Kubernetes Engine, then called, I think, just Container Engine. And there is a bit of a learning curve. Now that I've been in this space for four years or so, I like to think I've gotten up the curve. But we find a lot of customers and a lot of just folks in the space, community events, that kind of thing, where the knowledge of Kubernetes, the knowledge of containers hasn't really penetrated the entire organization. So they've started with development, or maybe the operations team has started using it, maybe it's in some stages of the business but not in production. 

But often, security is left behind. So the security team is often trying to catch up and understand what the heck is this thing, what are the consequences, how does it deploy, how do I monitor it. Those are the challenges we see across a lot of organizations. 

MARK: You said something interesting as well, you just talked about StackRox generally. It sounds like it's both CI and CD, so it is continuous integration and continuous deployment. But there is an integrated security aspect to all of that. When I think of security, I'm like, oh, yeah, just scan my container and then I'll be fine, whatever. But it sounds like you're being a bit more holistic about it. Is that correct? 

CONNOR: That's a really good point. So we call it a full lifecycle product. I mentioned earlier, maybe the build, deploy, run stages of the container lifecycle. So there are things you want to apply in all of those stages as your app moves toward production, but also in the infrastructure underlying it. So when you think of making a holistic security program, you really have to make sure that your images are clean, make sure that they're minimal. There are a lot of things that can have downstream effects in the build phase. In the deploy phase, there are a ton of controls that Kubernetes exposes. A lot of people don't use them because either they don't have any incentive to do so or they don't know about it, or they find it a little bit too complicated. 

There's another learning curve. So once you know how to use Kubernetes and you know how to get your app deployed, maybe you don't want to take another learning curve up and learn network policies, for instance. So there's things you can do in the deploy phase. And then in runtime, ongoing monitoring is important for any kind of security threat detection or response. 

In addition, there's that underlying layer of the infrastructure. So securing your registry where you're storing your container images, securing the cluster infrastructure. There are plenty of options for deploying your cluster, plenty of options for managing it, including on GKE, or just on GCE. So there are a lot of things you can do and we try to help people understand all of those. 

GABI: You mentioned monitoring. It did get a bit of my attention. What kind of monitoring does StackRox offer for our customers? For instance, if someone tried to access my 43306 for MySQL or a DOS attack, what it is? 

CONNOR: I'll answer by discussing a little bit about how people run containers, and microservices especially. So if you add the microservices design pattern into the mix, you're really operating your application in a different way and you're building it in a different way. So typically, people will start their container journey by learning some best practices and packaging maybe existing apps into containers. But once they've gotten past that initial stage, they'll start building their app to run well in a container. So there will only be one process running for the most part, there won't be supervisors starting new processes every so often, your app will have one job for the most part. 

So we monitor a lot of those things and then say, well, because it's a container, there are a lot of things that you wouldn't expect to normally happen. If you're monitoring a VM, you'll often see people installing packages, there's some system then getting inside to make sure that something is deployed or operating correctly. With containers, you often don't see that. So you can monitor the signals that might have been too noisy in other infrastructures. So you can monitor those. And then each report has more meaning. So what we do in our product specifically, we monitor their container activity, including processes, network activity, other things. They take on a different meaning in containers just because of the way the apps are built and deployed. 

MARK: So now I'm curious. You've obviously gone deep on the container space, but you have a security background. Has containerization made your life easier or harder from a security point of view? 

CONNOR: That's a good question. I'm in a different position having gotten into the container space a little earlier than some others, certainly not the earliest. I found out about Docker after it was 1.5 or so. But I do have that background, and within the company, we've got people from ops and security. I think once people understand the concepts of Kubernetes, they find that it helps them do their job better. So often any sort of reticences is around unfamiliarity. It's true that there are applications that aren't well suited to containers, but a lot of applications are. 

And once you adopt the containerization strategy, and especially adopting Kubernetes, you can really improve your visibility, your ability to really understand what a deployment is and to monitor it. Some of those advantages are just having all the metadata in one place. So I just spoke at BSides San Fransisco a few weeks ago and just showed on the screen an example actually simplified deployment YAML, so a deployment specification for Kubernetes. Then it's got the exact reference to what image will run, so the exact file system and code that's going to be there. You can have network security policies attached right alongside. You've got the privilege level, Linux capabilities, the user that it should run under, the storage that you're going to access, there's a ton of stuff. 

There's even annotations are an unsung hero. If your operations team is using annotations to understand what they're deploying, now you can see them in security, too. So really having the Kubernetes API lets the different teams, even if they haven't totally learned all the Kubernetes concepts, it does gather a lot of information together and help people speak the same language. We talk about the Kubernetes API being the language that everyone can speak to understand what's going on in deployment. 

GABI: Containers, in the end, are popular now, and everybody wants to round their stuff in Kubernetes because it's the cool kid on the block. What questions do you ask your clients when they come to you, if an architecture, and want to deploy on Kubernetes? What do you ask them? 

CONNOR: It depends on really what your application does. Some applications will work perfectly fine in a managed service, some will work fine even in a serverless context, a cloud function or something like that. We find that a lot of things that people would run on VMs can naturally move to containers. There are even use cases where you can use containers as a packaging strategy, but maybe not even orchestration. So some customers will end up running containers on VMs directly. Those are exceptions. I think most people can use containers in Kubernetes and they will derive benefit from it. It's more the edge cases that would require some extra care. 

GABI: There's a lot of people want to run everything on Kubernetes, like for instance, databases, stuff that is stateful. Do you get that a lot? And how do you explain to them that maybe it's not a case for that? 

CONNOR: Yeah, so I think there's been an interesting shift in the marketplace recently. We used to have a lot of people come and say, oh, you guys know containers, right? I need containers, can you tell me what they are? Or, I need Kubernetes, can you please tell me how to use it? If you project back maybe eight or 10 years, I've heard about Hadoop. I need Hadoop. Could you please tell me what it is? 

So we used to be in that space a lot more. Now we're seeing a lot more sophistication in the customer space, knowing what's good and what's not. Ops teams are coming up to speed on continuation and on Kubernetes. But you're right. You mentioned databases, so stateful applications. It has been an evolving story in the community. I come from more of a security background versus a ops background, so I have less experience directly managing databases and stuff. But it's certainly true that people have figured out different ways of using, say, stateful sets, or even resources outside the cluster to help manage their stateful workloads. That's one example of something that people might not always want to put into a Kubernetes cluster. 

GABI: Thank you. 

MARK: I'm curious to know as well, from your experience in what you've been seeing, if there was one thing that you were like, I just wish everyone would do this either across containers or Kubernetes from a security perspective, what would that be? Or maybe two things-- if you have more than one, it's fine. 

CONNOR: If you look at the things that containers and Kubernetes will really help you do, one of the main things is understand what's going on. So there's a lot of data in those deployments, there's a lot of data hiding in all the specs that you've given to Kubernetes for how to run your app and how to keep it running and all that. So if people would take a look at those specs, look at the options they've got, and just think about whether the defaults work for them, that would be a huge difference. 

So we see a lot of people just running with default configs, and that's fine. Same default in a lot of cases. But you can get a lot of benefit and you can really leverage the value of having split up your app into containers and microservices if you take a look at a couple of the options in the security context, in the pod templates that help you reduce the privileges that you're container's running with, or reduce the risk that would happen if something were to exploit an application vulnerability. There's one actually, a really specific one, which is you can set any container to have a read only root file system. 

So if there is a command ejection in your application, say, the Struts one or things like that, or Shellshock, if the file system is read only, a lot of things that people will try to do just won't work. And there are ways you can do-- you can add a volume instruction in your Docker file or mount a directory in Kubernetes that let you have specific paths be writeable. But the read only root fs can be really powerful to both enforce good developing practices and also minimize the risk of adversaries compromising your app and spreading through the infrastructure. 

GABI: Have you noticed a shift on compromised applications since you started with this security initiative at StackRox? Did you notice a difference between before and after? I'll give you an example. There are some applications that are really vulnerable, usually in getting through malicious HML, JavaScript, and sometimes getting access to the server. You don't notice any shift on that? 

CONNOR: We've done some research. The internet is well aware. We do some [INAUDIBLE] research, we see what people start throwing at containerized applications. And we found that really it makes sense. They don't know that it's a container, so they don't try to do anything different to the applications. People do try to attack the new infrastructure components. So we've seen some problems with Kubernetes dashboards being exposed on the internet, and then being used to run code. That's a new threat, but it can be managed. 

For instance, if you're in Google Kubernetes Engine, you can just use the workloads UI in the cloud console instead of exposing a dashboard directly. So there are things you could do to minimize the new threats. The old threats that have really changed are, I think, command ejection is one of the biggest. And just the ability to detect when something like that happens is much greater because of the structure of the container in the Kubernetes world. You won't find a major difference in things like storage or cross site scripting, you won't find a huge difference just because it's in a container. If you've still got the same database, you've still got the same app, just being in a container won't change the game for those. 

MARK: That sounds reasonable. Do you see a shift, though, in where the risk security responsibility lies? Do you see some things moving more to the cloud providers and less to the users, or vise versa? 

CONNOR: It's an interesting space because the responsibilities, even within an organization, have shifted. So in the previous world, especially if you're not in the cloud, you may have a process where security owns the internet uplink and they own the firewall box, and if you want to get your app exposed, you have to go to them, you have to write a ticket, whatever you have to do. They're in the process. 

And one of the big shifts with containerization is that often developers and operations folks are running the entire stack. The network is software defined, the firewall is software defined in Kubernetes. A lot of this runs in places that don't have natural hook points for security. Among teams, there has to be increased collaboration. Now, when you get to the cloud provider, there are different options for deploying Kubernetes and containers. You have managed services, like Google Kubernetes Engine, you can also run Kubernetes using open source tooling on top of infrastructure as a service providers, like UCEE, [INAUDIBLE], Azure, you can do it on-premises. 

The shared responsibility changes depending on which of those options you selected. With Google Kubernetes Engine, you can have Google patch to your master infrastructure and keep that protected, while you're responsible more for your applications. If you're running a self-manage, then you still have to manage some infrastructure components, including the master, including the worker node security a little bit more directly. But in any case, the cloud provider is never really going to know what your workload is, so it is something that you have to do to make sure that your images are in an ideal state, or at least a secure enough state that you understand your risk posture, that you know what parts of your app you want to pay more attention to, and that you're monitoring for threats. The cloud provider can't really know enough about your application to effectively do that. 

MARK: Now that sounds interesting. Flip it around to squishy people things. From an organizational perspective, do you see that shift happening in how people are organized inside a company as well? 

CONNOR: We do see some changes in the way that teams are managed and the way that people operate together in this new world of Kubernetes-based infrastructure. For one thing, people have to talk to each other. There have been times where I've been on site with a customer, maybe doing a proof of concept, and we've had a meeting together with, say, the security operations center staff and the people running the container deployment, and they're meeting-- they're introducing each other, they're shaking hands for the first time and learning about their infrastructure together. Usually this is when maybe the container infrastructure is not as mature, it's a smaller deployment. 

But people do have to work together to understand this. And if they've got an existing tool that, say, monitors their VMs, maybe they do need to figure out a new strategy. Whether that means purchasing a new product, or operating a new open source component, or just understanding where the infrastructure is, they do have to collaborate tighter. 

Now, in general, there are trends around this, too. So just like DevOps, there's DevStack ops and there are some companies that have really adopted this. It can be difficult because asking people to be good at one thing is hard enough. To be an expert in three different disciplines can be even more difficult. But the people that really can do that are extremely powerful. And sometimes we do see DevOps owning the security of their application, and that can be a really powerful match because they know the infrastructure, they know something about the application, and they understand the security posture, especially if they've got a product that can help them understand it. 

MARK: So beyond full stack developer, now we have full stack DevOps, too. 

CONNOR: Yeah, there's full stack infrastructure, too, now. And you can debate where the lines, but if you're going literally all the way down, some people are deploying kernel monitoring, they're understanding the Linux kernel, and they're debugging API responses between back end and front end and some distributed tracing. The stack just keeps going. 

GABI: What do people get wrong about containers and Kubernetes in general that you think they would get it right, like concepts and that kind of stuff? 

CONNOR: I think some people feel like containers and Kubernetes will solve all of their problems with their application infrastructure. And while they're powerful tools, you can't just turn on Kubernetes and then have all your problems be solved. It's like the Go programming language is a bit opinionated about how things ought to work, containers and Kubernetes are a little bit opinionated just in what they make easy. So they make the preferred answer a bit easier. So it could be really easy to run a stateless app, it can be really easy to get some services that are maybe autoscaling or that are easily replicatable, it can be really easy to get that going. Some of the workloads you mentioned earlier, like stateful workloads, it can be a little harder. You don't get that necessarily for free. 

Overall, you may get a benefit from centralizing the management and really learning how to keep things going in Kubernetes for those workloads, but it isn't just a free, we'll take our app, we'll put it in Kubernetes, and now we're good. One of the other things is around security. So the name of this technology, containers, has two, maybe three, four, or five meanings, depending on who you ask. It's been really great for the nautical stock photo industry. 

[SHIP'S HORN BLOWS] 

MARK: [LAUGHING] 

CONNOR: So you've got Docker with a ship or a whale, shipping containers, a bunch of other players in the space. I talked to [? Farhun ?] from Istio and he said he spent a long time with a Greek dictionary trying to come up with a Greek word related to ships, and came up with Istio for sail. So security also doesn't come for free. Containers are still just processes. They have some isolation, but you're sharing a kernel and there is some more surface there where it's not quite the same threat model that people are used to. It's not necessarily true that VMs are more secure. They also use hypervisors, they also have problems. It's important to not just think of these as little VMs, it's not the same thing. 

MARK: That sounds really good. So if someone's looking to improve their understanding of security and containers and Kubernetes, are there any particular resources or places they should go to learn more? 

CONNOR: Yeah, so the community has, especially around new feature releases for Kubernetes, has really stepped up to try to explain these things. So the Kubernetes documentation is pretty good. There are also some blogs that you find on, I think, just [INAUDIBLE] /blog, or something. 

MARK: I'm sure you all have some posts, I'm sure. 

CONNOR: Recently I had a post on CNCF. They've been adding some Kubernetes content and some security content. Yeah, so I'll be recording a webinar with the CNCF also about some security topics. That should be recorded by the time the podcast drops. 

MARK: If not, people can keep an eye out for it. 

CONNOR: Yeah. And they publish all the recordings as well. It'll be up if you miss it. For specific features, there are good resources. So there are some recipes for network policies that really explain how they work. If you're looking to get into network policies, you can do that. We've got some features in our product that help you bootstrap your network policies as well. But the community does have a lot of resources if you've got the time to get the concepts and try some examples and really learn the concepts yourself. 

MARK: That all sounds really cool. Connor, if people want to learn more about StackRox and that kind of stuff, where should they go? We should plug your stuff while we have you here. 

CONNOR: Yeah, so StackRox.com is the website-- we were very imaginative with that domain. We've got some posts up about Kubernetes, about containers. There's some talk videos as well from, I guess, primarily me, but also some other folks at StackRox. We'll be at all the community shows. We'll be at Next in April coming up, at DockerCon, I think, as well in April and May. On the East Coast, if you're out there and you do financial services, the FS-ISAC Conference, the Red Hat Summit in Boston, Black Hat, Vegas in August, and KubeCon in San Diego. 

I've got some young kids, so I'm not sure I'll be at any or all of those, but I'll try to hit some as well. 

MARK: Awesome. Well, Connor, thank you so much for joining us today on the podcast. 

CONNOR: Glad to be here. Thanks for having me. 

GABI: Thank you, Connor. 

MARK: Thanks again, Connor, for joining us on the podcast. Definitely had a wonderful conversation about security and containers. But let's get stuck into our question of the week. How do I migrate my traditional data warehouse platform to BigQuery? Maybe it's on-prem, maybe it's on another cloud. I'm guessing I have lots of stuff. How do I do this? 

GABI: So every migration experience that we have involves three common steps. First, you have your data migration, then your schema migration, and then your workload migration. The data migration is the data that's on your warehouse. Schema migration, it is the changes that you do the outline of your database on the data warehouse. And the workload, it's how you're going to keep feeding that to your data warehouse. Google Cloud have built and launched data warehouse migration service to automate migrating data and schema to BigQuery, and significantly reduce their migration time. 

Because before, you had to do everything by hand, and now we have a team that you can consult, see how it works, get credit, and try it out to see how it works. 

MARK: Awesome. 

GABI: So you have now an automator, too. 

MARK: Where should people go if they want to sign up for that service? 

GABI: So on the show notes, there is a link about the blog post and explaining more details of how everything works. 

MARK: Fantastic. And I can see here, there's also a form where people can plug-in their details for qualifying customers so that they can take advantage of that as well. 

GABI: Yeah. 

MARK: Wonderful. So, Gabi, before we finish up today, where are you going? What are you doing? Where can people find you? 

[SUSPENSEFUL MUSIC PLAYING] 

Not in a creepy way, just in a fun way. 

GABI: [LAUGHING] 

They can find me on Twitter. But also on Google Cloud Next. 

MARK: It'll be the week after this comes out. 

GABI: Yeah, I don't know. I think it's next week. And at PyTexas right after Cloud Next. 

MAN: Yee-haw! 

GABI: Then I'm doing a tour in Europe, going through a lot of places. But I'm not listing here because I don't want to bore anyone. 

MARK: [LAUGHS] 

I'm sure they'd be delighted to hear where you're going. I will be joining you at Cloud Next as well. Yeah, call out to people, we will be doing live recordings at the GCP podcast booth that will be on the show floor. So please come by and say hello. After that, I will be presenting at East Coast Game Conference, talking about game servers and Kubernetes, all the usual stuff. And then I'll also be presenting at IO as well. So it'll be fun. 

GABI: I'm so jealous. 

MARK: It's going to be good. Awesome. Well, Gabi, thank you so much for joining me on this week's episode. 

GABI: Thank you, Mark, for having me here, and I'll see you at Next. 

MARK: Yeah, I'll see you at Next. And thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]