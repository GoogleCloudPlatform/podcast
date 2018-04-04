+++
audioDuration = "00:32:10"
audioFile = "Google.Cloud.Platform.Podcast.Episode.120.mp3"
audioSize = 46314455
categories = ["Security", "Open Source"]
date = "2018-03-28"
description = "Nenad Stojanovski and Andrew Hoying join Mark and Melanie this week to discuss Forseti - open source tools for Google Cloud Platform security" 
draft = false
episodeNumber = 120
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Forseti with Nenad Stojanovski and Andrew Hoying"
linked = true
image="/images/post/forseti.png"
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/2ZFLosZwmdQ"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/87u6e7/episode_120_forseti_with_nenad_stojanovski_and/"
+++

Nenad Stojanovski and Andrew Hoying join [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl)
this week to discuss [Forseti](https://forsetisecurity.org) - open source tools for Google Cloud Platform security. 

<!--more-->

##### Nenad Stojanovski
Staff Security Engineer, Spotify

##### Andrew Hoying
Andrew Hoying is a Senior Security Engineer at Google. His goal is to ensure all services built by Google and running on Google Cloud Platform have the same, or better, security assurances as services running in any other environment. He is also a top contributor to the Forseti Security open-source project, helping enterprises monitor and secure their GCP environments.

##### Cool things of the week

- Shopify’s Infrastructure Collaboration with Google [blog](https://shopifyengineering.myshopify.com/blogs/engineering/shopify-infrastructure-collaboration-with-google)
- Kubernetes Engine Private Clusters now available in beta [blog](https://cloudplatform.googleblog.com/2018/03/kubernetes-engine-private-clusters-now.html) 
- Easy HPC clusters on GCP with Slurm [blog](https://cloudplatform.googleblog.com/2018/03/easy-HPC-clusters-on-GCP-with-Slurm.html)
- Understand your spending at a glance with Google Cloud Billing reports beta [blog](https://cloudplatform.googleblog.com/2018/03/understand-your-spending-at-a-glance-with-Google-Cloud-Billing-reports-beta.html) 

##### Interview

- Forseti Security [site](https://forsetisecurity.org) [docs](https://forsetisecurity.org/docs/) [github](https://github.com/GoogleCloudPlatform/forseti-security)
- Forseti Inventory [docs](https://forsetisecurity.org/docs/quickstarts/inventory/index.html)
- Forseti Scanner [docs](https://forsetisecurity.org/docs/quickstarts/scanner/index.html)
- Forseti Enforcer [docs](https://forsetisecurity.org/docs/quickstarts/enforcer/index.html)
- Forseti Rule Files [docs](https://forsetisecurity.org/docs/quickstarts/scanner/rules.html)
- Google Cloud Shell [site](https://cloud.google.com/shell/) [docs](https://cloud.google.com/shell/docs/)

<div style="text-align: center">
  <a href="https://forsetisecurity.org"><img src="/images/post/forseti.png" style="margin: auto; max-width: 30%;"></a>
  <p style="font-size:0.8em">Forseti Security<p>
</div>

##### Question of the week
How do I automatically scan the Docker images in your Google Cloud Repository for known vulnerabilities?

- Scanning Vulnerabilities in Docker images [blog](https://blog.javabien.net/2017/12/21/scanning-images/)
- Container Registry Vulnerability Scanning [docs](https://cloud.google.com/container-registry/docs/vulnerability-scanning)

##### Where can you find us next?

- Melanie will be speaking about AI at [Techtonica](https://techtonica.org) on April 11th, and April 14th
will be participating in a panel on Diversity and Inclusion at the [Harker Research Symposium](https://www.harker.org/about/events/research-symposium#bookmark-intro)

{{< transcript "MARK: Hi, and welcome to Episode Number 120 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel and I'm here with my colleague, Melanie Warwick. Melanie, how are you doing today?" >}}

MELANIE: I'm doing good. How are you, Mark? 

MARK: I'm all right. I am slowly dying of the flu, but not slow enough that is going to impede me from doing the podcast. 

MELANIE: You are surviving it somehow. 

MARK: I am, I am. 

MELANIE: Mark, who are we talking to this week? 

MARK: So this week, we are going to talk to-- OK, I got to get this right-- Nenad Stojanovskis. There we go, Nenad Stojanovskis. 

MELANIE: Nice. 

MARK: --and Andrew Hoying, talking about Forseti this week, the open source security scanner, and all sorts of other cool things. 

MELANIE: Yes, but as always, before we do that, we will tell you about some of the cool things of the week. And we will talk about our question of the week at the end. And our question of the week is how do I automatically scan the docker images in your Google Cloud repository for known vulnerabilities? 

MARK: Security, more security. 

MELANIE: More security, it's all good. I bring lots of other stuff on the ML side, so we definitely got to get some security, and docker, and Kubernetes, and all that. But anyways, cool things of the week. So, for this week, we wanted to share about how Shopify has moved a significant, actually 50% I think, of their data center workloads over to Google Cloud. 

And they've been doing a number of different things around integration for their infrastructure in collaboration with Google Cloud. So we have a blog post that we're going to include on our show notes as always. And you'll have to check that out. It's really cool. 

MARK: Yeah, they're using a whole bunch of GKE. And we know how much I love Kubernetes. 

MELANIE: I know it's all about Kubernetes. 

MARK: Excellent. OK, so speaking of Kubernetes, we'll go into the next one, which is Kubernetes Engine, private clusters are now available in beta. I'm super excited about this. Previously, if you were frying up a GKE cluster, usually it was public. IPs were public. It was available to the outside world, which is great for many workloads. However, if you wanted to hide this behind a VPC, or control access through a VPC, that wasn't possible. But now, it is. 

MELANIE: It is. It looks like your notes still have access to the rest of the your VPC private deployments, including private access to Google managed services, such as GCR, Dot I/O, Google Cloud Storage, and Google BigQueery. And that is in the blog post, which we will again share. And another thing we want to share this week is the Easy HPC clusters on GCP with Slurm. So apparently, Slurm is a workload manager, and it basically is helping to launch an auto-scaled Slurm cluster on a compute engine. So that's what the integration helps with. So we have a great diagram of how that works, and additional information on this blog that will explain how to do this. And we'll make sure we share that. 

MARK: I just like saying Slurm. 

MELANIE: I know, Slurm is a good word. 

MARK: It's a good word. I wish I named a project Slurm. 

SPEAKER: And it shall be my most powerful and splendid creation ever. And I shall call it Slurm. [EVIL LAUGHTER] 

MELANIE: You missed it. 

MARK: I missed it. 

MELANIE: Too late. 

MARK: So finally, another cool thing of the week, there's another blog post talking about understanding your spending at a glance with Google Cloud billing reports beta. So back in Episode Number 83, we did do a question of the week, where we talked about how there was some open and available dashboards that you could drop on top of the BigQueery export of billing into Daily Studio to give you some more introspection of what's happening in billing. 

Now, there are actually much more integrated billing dashboards built in to our Cloud.google.com. So if you want to have a look at those, those are available for you. But there's exports to BigQueery and visualizing your billing data with Data Studio, still available, still can do all that. We've just got some pre-built stuff available at beta inside Cloud.google.com. 

MELANIE: Yeah, it's nice to actually see some of the trends. Some of the trends that they're sharing are things like cost group by project, different time aggregation, including daily and monthly views, and so forth. So definitely check that out. 

MARK: Useful stuff. 

MELANIE: All right, I think it's time for us to go and talk to Nenad and Andrew. 

MARK: Sounds good to me. Today, I am very happy to have both Nenad Stojanovskis and Andrew Hoying coming to join us today from Spotify and Google respectively, to talk to us all about Forseti. Thank you so much for joining us. Nenad how are you doing today? 

NENAD: Good, thanks for inviting me, Mark. 

MARK: Thank you for joining us. Andrew, how you doing? 

ANDREW: Doing great, thank you. 

MARK: Awesome. So very happy to have you both on the call. Really want to talk to you both about Forseti, and the project, and what it does. But before we do that, why don't you tell us a little bit about who you are and what do you do. And Nenad why don't we start with you. 

NENAD: Yeah, let's do that. So as you mentioned, my name is Nenad And I work as a staff security engineer at Spotify. So that entails a lot of security stuff. And don't I think we have that much time, so that I can go through all of them. But it is what it is with security people. 

MARK: Awesome, Andrew-- 

ANDREW: Yes, I'm a senior security engineer in Google's Security and Privacy Organization. My team's focused on securing Google's use of Google Cloud Platform, both for internal services, as well as public facing services. 

MARK: Fantastic. All right, well, so we brought you both in today because we want to talk to you both about the Forseti Project. Why don't you tell us from your perspective, and then we'll come back to Nenad, about what is Forseti, like at a high level, what problem is it trying to solve, what does it do? 

ANDREW: Sure, so Forseti's about making Cloud easier to secure at scale. It's relatively simple for an individual to secure one project or one environment on Cloud, or 10 environments. But as you scale to 100, or 1,000, or even 10,000 environments, it becomes very difficult for even a team of people to maintain security across all the disparate settings and configurations that we expose for Cloud. 

So Forseti is really about enabling security teams and enterprises to feel comfortable and confident that they're running all of their different projects in a way that meets their security policies and their security configuration expectations. 

NENAD: And on top of that, I think it's also about having the possibility to scale towards an agile organization, and have those notifications, and make people aware of the misconfigurations they're meeting in an actual agile environment. So that they're on top of their stuff as soon as it happens, or close to that time. 

MELANIE: And so, Nenad, since you've used Forseti, I think one question that's coming to my mind are what are some of the common challenges that you would have for dealing with securing something at scale? 

NENAD: That is a really good question. To start with, yes, we've used Forseti. But we also collaborated with Google on actually making Forseti what it is today. And of course, the goal was in a modern environment with a huge amount of servers, you actually want to take care of the servers and what was happening on them. 

And on top of that, of course, since it is the Cloud, the Cloud also comes with the bigger complexity of having stuff on their metal, and then your local environment, because you end up using multiple features from that Cloud. So one is, yes, moving to a new platform, and having that secured. And the second piece is, of course, how do you scale your security with this [INAUDIBLE] that you want to have in an agile environment. 

So that is how we ended up using Forseti and why, why we actually decided that it is a good thing to collaborate with Google on. Because we had one perspective on what we're missing, or what we want to have as a tool, and then Google had another perspective. So having those joined ends up us having a good tool to do what we need to do on the Cloud. 

MARK: So that probably segues quite nicely into like-- so what was the history here? Where did this project start? How did this collaboration come to be? 

ANDREW: Sure, I can take that from Google side, and then have Nenad fill in. Internally, we started using Google Cloud Platform here at Google, obviously, as soon as we launched it as a product. And we had quite a large deployment on Cloud, even as the security team was getting spun up. So we had a need to sort of inventory everything that was currently deployed on Cloud, and get sort of a baseline configuration. 

And then, as we've defined security policies, we needed a way to notify different teams and project owners that they needed to modify a configuration or make some setting change in order to comply with our security policies. So we needed some way to scale very quickly up to a very, very large environment. 

So we initially developed some internal tooling to allow us to do that. But at the same time, we were hearing from the customer engineers and our professional services organization that customers were running into the same issue where they deployed on Cloud, but now they need some way to monitor and manage their environment. 

So we collaborated, security collaborated with professional services and a few other teams within Google to start putting together this framework for what became Forseti. And at the same time, we worked with our product managers to look for some of the large organizations who are already on Google Cloud who might want to collaborate on this. 

And Spotify stepped forward, because they were building similar tooling, as Nenad said. And it ended up being a great working relationship to have both an outside perspective and our inside perspective on how to build a tool like this. 

MELANIE: Does Forseti come from Norse mythology? 

ANDREW: Yeah, we went through a long naming session, which was really rather entertaining. And we had names from all over the board. But one thing that we liked about the concept of Forseti is that this is a overseer, sort of like trying to maintain security, justice, if you will, from the Norse mythology. So the name sort of just stuck out from all the other ones that we had from choices. And everybody ended up agreeing that it was a great name for this product. So that's how it came about. 

MARK: So I'm quite curious, you both also use this term security at scale. What does that actually mean? What does that practically mean? What sort of things are you looking to do when you do security at scale? I don't know exactly what that refers to. 

NENAD: I think it's kind of along the lines of the whole equation on how many security engineers they need per, I don't know, squads, teams. And usually, you can't have that many people. Even if you like it, in the ideal world, you won't have them. And the same applies for resources. 

It's like how many resources, or how many security engineers are you going to put on overseeing, or checking, or monitoring resources, right? So it is about scaling, and it is about, I think, giving autonomy to teams, and giving responsibility to teams that build product. That these should be the ones taking care of security when it comes to configuration and monitoring. 

But at the same time, we want to give them tools, or you want to give the organization tools to scale to such size that it is going to talk, or it is going to notify all teams and help them monitor their stuff. So that this kind of security at scale, and maybe security, or self-service security, at the same time. That is what it means to me. 

ANDREW: Adding onto that, so one of the great things about cloud is that it enables us to segment different workloads and different environments, sort of the evolution, if you will, of computing from mainframes, to data centers, to Cloud. 

As we move to Cloud, we want to build security in from the ground up, in a way that was difficult to do in a data center, where we can run each different workload in its own environment with its own security settings. But as the number of environments you're managing scales up, you can't scale up people to that. 

You would quickly run out of resources. So we need tooling to enable ourselves, enterprises, to run a vast number of different environments without needing 100 security engineers to manage them all. So that's really what it's about-- scaling up each security engineer to be the most valuable, the most productive that they can be for the enterprise. 

MELANIE: And so Forseti's tooling includes things like Inventory, Scanner, Enforcer and Notifier, is that right? 

ANDREW: Yes, that's correct. 

MELANIE: And can you explain a little bit more about what those pieces do? 

ANDREW: Sure, Inventory is simply the crawler that says look at all of the resources that are running in your organization. At Google Cloud Platform, we have a resource hierarchy that starts from an organization node, which is everything that belongs to your organization. Underneath that, you can have folders. Inside of those, you can have projects. 

And inside of projects, there are running resources, your virtual instances, your VMs, your storage, and everything else. So Forseti takes and crawls from the top down to create a snapshot inventory of everything that's running in your environment and stores that in a Cloud SQL storage currently. 

The next bit is the Scanner, which is a set of rules that audit the configuration on all those resources. So it might look at how your identity and access management is configured to look for someone added from outside of your organization that shouldn't be having access to a project, or look at your virtual instances to see if they've got external IP addresses where they shouldn't, or look at your firewall rules. 

Any sort of configuration that exists on Cloud, and we're constantly adding additional capabilities to those scanners, so that you can look for all of the common best practices, as well as put in place your own custom requirements for how you expect things to be configured for your enterprise. 

Enforcer comes from another internal tool that we had, called GC Enforcer. And its purpose today is to set firewall policy. So if you've got a predefined configuration or set of configurations that you want to push out across all of your different, or a subset of your projects, Enforcer is the way to make sure that those projects all stay in sync with that centrally managed configuration. 

And then, Notifier is the component that takes any violations from the Scanners, as well as can be configured to notify on some inventory components as well. But primarily, it's about taking a violation and figuring out who the project owner is and sending a notification saying your configuration is out of sync and please fix it. Again, pushing some of the security down to the individual teams, instead of having security engineers have to manage every environment. 

MARK: This almost sounds like the phrase-- I'm kind of thinking about as if it was sort of a Terraform, or a deployment manager in Ansible, or something like that, but specifically tailored to security. So you're defining a source of truth of what are the firewall rules, or IM policies, or anything like that, of what it should be, and then it's up to this tool to make sure that that is the truth. Do you feel like that's a good summation? 

ANDREW: Yeah, and internally, we work with Terraform and Deployment Manager for different projects for maintaining their specific security. And for some subset of projects, they're great tools for that, because you've defined your configuration as code, as some kind of predefined, this is exactly how this system should be set up. 

But as Nenad said, in an agile environment, you also have some projects that are being developed on the fly, or managed by development teams, or smaller squads. And having a fully managed tool isn't always best for them. So having something that can come through and audit the configuration post-deployment, is also really powerful. And being able to do that across all of your projects is really the key to what Forseti brings to the table. 

NENAD: And if I may add to that-- there's also the Enforcer piece. And that is about opening up your perimeter to the world. So that one of the about having a centrally located database, which is the source of truth of firewall rules, which is in force. So it prevents people from making mistakes. That is the other piece. And I think there were some discussions about maybe adding something for buckets. But then, it is maybe something that is upcoming as a feature. 

ANDREW: Right. 

MELANIE: Nice. 

NENAD: And it is about tying the loose ends. 

MELANIE: Nice. 

MARK: OK, so this sounds really interesting. If people want to use, or configure, or install Forseti, how do we go about doing that? Is there a push button install? Do I download it from GitHub? What do I do? 

ANDREW: Sure, so we've got a Deployment Wizard that's on GitHub, that sits alongside of Forseti. So on the website, Forsetisecurity.org, there is a number of resources, including the Quick Start Installation Guide. But the really high level is you start a Cloud shell on a project that you want to install Forseti into. 

You run the Deployment Wizard from within that shell, and it walks you through everything to get your environment set up. It puts all of the resources in place that Forseti needs, and spins up the VM, and then gives you access to start using it. So we've tried to make the install as straightforward as possible, so that you can get straight to configuring and using the data. 

MARK: Am I my configuring this with like YAML files, or is there a GUI, or how does that work? 

ANDREW: Yes, it's all configured with YAML files stored in Google Cloud storage buckets. So each of the different scanners has their own rule file that defines your policy for that particular resource, along with an overall configuration file that defines what resources you're reading into the inventory, and what your organization is, and what notifiers you have enabled, et cetera. 

MELANIE: Well, anyway so in terms of the way it's being used, would you also use this in development? 

ANDREW: Absolutely. This is a great way for just getting a handle on if you're spinning up some new resources in the Cloud or you're trying to develop how you're going to ultimately deploy your resources in the Cloud, having Forseti already up and running, and getting it configured in a developed environment prior to rolling it out to production is really powerful. Because it can give you insights to misconfigurations. 

Everybody tries to do the right thing, but sometimes when we're moving fast, we accidentally leave some system open to the internet or some other exposure that we didn't mean to. So having Forseti there to notify-- hey, you've got this configuration in place, did you mean to-- is very powerful, even if it's just a development environment. You don't want to have a security incident anywhere in your organization. 

MARK: Nice. 

MELANIE: Sometimes those are the things you might not necessarily consider that can bit you. 

NENAD: And to add to that, it's usually about taking a very holistic approach, which is-- you actually don't know what you're exposing in the dev environment or how it's connected to production. Maybe it's not. But in general, you don't know how it's connected to your [INAUDIBLE]. So it's better to be safe than sorry. So you just to focus, or you use Forseti wherever you need to use it. 

But the holistic approach would be the best, at least from my perspective. And that is my advice. And, yeah, you go from there. So you can actually test it out in the dev environment and how it scales up, and how you will get notifications once it goes into production. 

And then the second one is, yes, you also get to learn about misconfiguration. So you can either automate them, if you're deploying to many instances or in general to many resources. And at the same time, you know what the problem is. So sometimes it's not very obvious, but you get to learn from it. 

MARK: And this sounds like something you'd want to-- in an ideal world-- you'd want to slot this in as early as possible, right? You don't want to be making changes to your production system, in production. You don't know necessarily what's going to happen, if it's going to lock down certain ports, which will stop certain things from talking to each other, or that kind of stuff. Would you agree? 

ANDREW: Yes, absolutely. The earlier you can deploy it and start getting the visibility, the easier it's going to be to make sure you've got all your best practices in place from the beginning. And when you go to production, you're confident. 

MELANIE: Is there anything in particular you've seen people miss when-- we're talking about trying to have a holistic approach-- the thing that seems obvious or seems so simple, but yet, has proved to be one of the bigger gaps? 

NENAD: Maybe I can go from my perspective and my learnings. And that is, sometimes it is hard for people to realize how different GCP is from some competitors, without name dropping. It's not cool. And sometimes something that a competitor has is an option. Might be something different than GCP. 

So it is a big misunderstanding to start with. But then, of course, the logic, and the business logic behind-- well, not only business logic, but also tech logic-- behind GCP is totally different from something else that might be out there. So most of those happened because of that. And then, of course, having best practice and how things work is probably very helpful for people. 

MELANIE: Well, I was going to say, without name dropping, or necessarily talking about other setups, is there anything specific in GCP that you're like, yeah, that was very different for us and stood out, that comes to mind? 

NENAD: One thing that comes to mind would be maybe how buckets work. 

MELANIE: The buckets. 

NENAD: GCS storage, yeah. Because, yes, of course, you have the IM policy, and all of the sudden, it becomes a bit confusing, because maybe GCS buckets don't follow the IM model to start with. And then, so maybe the docks a bit confusing. What is an authenticated user? What is an org user, to start with. And some will lose misconfiguration happen there, because, it is how users are treated. 

MELANIE: OK, so Forseti was able to help with addressing that. 

MARK: It sounds Forseti kind of takes the assumption away, right? It's like you're very specific about exactly how things are, rather than just assuming something works in a certain way? 

NENAD: Yes, that is correct. But then, of course, it is again up to the user to actually decide on how they're going to define the rules, and what is acceptable to them. There are some best practice rules. But it depends on how they use the resources and how they approach the openness of the environment, or their openness to the world. 

ANDREW: I would add to that, that in general, access control policies are-- they're difficult for someone whose not constantly working with them as a security engineer. You usually just want to get things up, and running, and working. And so, it's easy to accidentally over grant access, because you can't tell necessarily that you've over-granted access. 

You can't just tell that it's working. So having something follow up and look at what the actual configured policy is against what the expectation is, and notify people when they have granted too much access, or overexposed a resource is really powerful, both for the learning of the individual system owner, as well as for maintaining the overall security of all of the environment. 

MELANIE: Yeah, I've seen that be a common problem before too. It's just like, I can't get in, let's just give access to everything. And it is clearly the wrong way to go. Yeah, it's a hard one. 

NENAD: And without over-complicating the answer, it's also about an internal security culture and how open the culture is, and whether people come and talk to the security team, or they avoid it, and try to find solutions. And that is where many hacks happen, where people just try to solve their problem. Maybe not the right way of solving the problem, but it is about solving a problem. 

MELANIE: Right. 

MARK: Nice. We've talked about it a little bit, but I'd love to hear more about what happens when Forseti finds something that doesn't comply with the policy that's been set up. It sounds like there's two options. There's like an automated fix and a notification. Can you talk a little bit more about those, Nenad. I know you're using this a lot at Spotify. Why don't you talk about how that works at your end. 

NENAD: I can talk about the automated notification. So then the automated notification is depending on what you prefer to use. You have several ways of getting notified as a team. So that can be emails, slack, whatever you prefer. And of course, depending on what policies you've enabled, and what the rules are for those policies, they will generate violations on the Forseti backend. 

Then, as Andrew mentioned, there is the Notifier tool, which takes those violations and they adjust them, or ingest them to create an actual format of a notification, either for slack or email. And then, it also finds the owner at the same time, and notifies the owner, which is yes. So for example, you own this project, we found a violation let's say in your GSC storage. 

And this is the actual issue, and this is how you fix it. So, everything is kind of configurable on what kind of a message you send. And when it comes to the automated remediation, that is only on the Enforcer side of things. And it is only for firewall rules. So if you by mistake open something, and then you have Enforcer enabled, it will reapply the rules based on the centrally stored database, or centrally stored-- so those are the two modes of operation. 

MELANIE: Can you tell us about what's coming out? 

ANDREW: Yeah, and this is really a great segue to some of the new things that's coming out here in the coming months for Forseti. There's going to be a new version of Forseti that's released here at the end of March, early April, which might already be out by the time you're listening to this, which is the Forseti 2.0. It's got a totally redesigned inventory system that crawls resources much faster. 

So it scales to a much larger organization than 1.0 can, or at least allows you to take a snapshot of your inventory at more frequent intervals. And it's got a new component, in addition to the four we've already talked about, called IM Explainer, which allows you to ask questions like, who in my organization can restart this particular VM? 

And it will crawl all of the IM settings across the organization and resolve those two set of permissions. And then, answer this set of people can perform that action. Or any other type of question that you might have, like who can delete a resource, or who all has access to the database, et cetera. So that's a very powerful tool, especially in complex organizations. 

Without getting too deep into it, identity and access management policies are hierarchical. So policies can be set on the organization, or on a folder, or on a project, or on a resource. And the combination of all of those ends up being the total set of policies that are applied to that resource. So it can be difficult to reason about without a tool like IM Explainer. 

In addition to that, after 2.0 launches, we've got a new set of auditors and a new tool called Action Engine, which is going to be a combination of Enforcer and Notifier into the single tooling. And Action Engine will allow a much greater set of resources to be automatically remediated than just firewall rules. So we're very excited about that. 

That's most likely more towards the end of June before we're going to see that in the product. But that's the two big things that we're working on right now, that we're really excited to get out and in front of people. The 2.0 release candidate one is out today. So you can go ahead and try it out. And check on the website, because 2.0 should be released here soon. 

MELANIE: Great. And so, if others wanted to contribute to Forseti, is there a place they can contribute? 

ANDREW: Yes, we very much value the community. And we've got contributions from many, many different organizations, many different open-source individuals already. So our GitHub is, of course, the source of truth for our code. And Forsetisecurity.org has a good page on contributing and becoming a contributor to Forseti. We're always available for taking questions. There's a mailing list off of that website, as well, where you can email, and we'd be very glad to work with you on getting set up to contribute back for Forseti. 

MARK: Awesome. We're almost running out of time, but this has been super, super cool. Before we finish, do either of you have anything you want to plug-- events, stuff that's going on, places people can go to learn more. What's cool and interesting with Forseti that people should know about before we finish? 

NENAD: As Andrew mentioned. Forsetisecurity.org, a place to go and check things out. As me, being a tech nerd, I would definitely go to GitHub, or the GitHub page, because there are a lot of things out there. And I think those are the resources. And to add to that, if you find it interesting, contribute, because it is a really cool project. 

MARK: Awesome, and Andrew, anything to add? 

ANDREW: No, I think that pretty much wraps it up. There's a lot of exciting things that are going to be coming out here this year. And so, please stay tuned. We're excited about where the product's going. And we want to hear feedback, and we want to hear your requirements, and what you would think would make it better. 

MARK: Fantastic. Well, Nenad, Andrew, thank you so much for spending some time with us this morning, or evening, for either of you. We really appreciate you taking the time and talking to us all about first Forseti. 

MELANIE: Yes, thank you. 

ANDREW: Thank you very much. 

NENAD: Thank you. 

MELANIE: Thank you, again, Nenad and Andrew. That was really great to talk to you about Forseti and hear what's going on with the project. 

MARK: Yeah, really great conversation, a really useful tool for automating security, especially across multiple projects inside Google Cloud. 

MELANIE: Security is always very valuable. Last thing is the question of the week-- how would I automatically scan the docker images in my Google Cloud repository for known vulnerabilities? 

MARK: Awesome. So this is a really useful thing. I am going to totally massacre my teammate's name. Fellow developer advocate David-- I'm going to go with [INAUDIBLE]. 

MELANIE: I think we need, at some point, to do just a mix of all the names we've tried to say. 

MARK: David, I'm sorry. When I meet you soon, in person, soon, or in the near future, I apologize. But anyway, David writes an excellent, most excellent blog post, talking about this. So basically, the scenario is that if you're creating docker images for something like Kubernetes, or several other things that could be potentially possible, having a way to automatically scan those for potential security vulnerabilities is really, really useful. 

What's great is that Google Cloud Platform has a Container Registry vulnerability scanning service that's currently in alpha, that is really easy to turn on and use. It's basically an API. You can go into your API manager and basically just turn it on. And then when you go to have a look at the images in Google Container Registry, you will actually see what vulnerabilities have been found-- preferably none-- for all of the images that you're creating, potentially with Google Container Builder. 

MELANIE: Nice. 

MARK: But it's super easy to set up. We'll link to David's blog post, as well as the documentation, so you can see how it all works. 

MELANIE: Sounds good. So Mark, GDC was last week. Do you feel like a loss here that it's done and it's over? 

MARK: Part of me is kind of happy. 

MELANIE: Now you're going to rest. 

MARK: Yeah, it was great though. Fantastic conference, I always love seeing a bunch of friends and catching up and stuff. I'm not going anywhere, because I'm sleeping a lot. What are you up to? 

MELANIE: So on April 11th, I'll be speaking about AI at Techtonica. And Techtonica is a program that specifically does tech apprenticeships, with stipends and job placement for Bay Area women, and non-binary adults with low incomes. So I'll be speaking at Techtonica on April 11. And then on April 14, I will be speaking at the Harker Researcher Symposium, and talking about diversity inclusion. And that's a symposium that does a lot of insights around tech and diversity. It'll be great. 

MARK: Awesome. 

MELANIE: Yeah. 

MARK: That sounds fantastic. 

MELANIE: Well Mark, I think that's it for us this week. 

MARK: Yes, it is. Thank you so much, Melanie, for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: And thank you all for listening. And we'll see you all next week. 
{{< /transcript >}}