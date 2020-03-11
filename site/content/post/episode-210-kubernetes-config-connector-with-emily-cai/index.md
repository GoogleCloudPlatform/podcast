+++
audioDuration = "00:26:57"
audioFile = "Google.Cloud.Platform.Podcast.Episode.210.mp3"
audioSize = 38828687
categories = ["Kubernetes", "Config Connector"]
date = "2020-03-04"
description = "Emily Cai of Google is on the podcast today with hosts Brian Dorsey and Mark Mirchandani to talk about Kubernetes Config Connector."
draft = false
episodeNumber = 210
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Kubernetes Config Connector with Emily Cai"
image="/post/episode-210-kubernetes-config-connector-with-emily-cai/images/hero/hero-EP-210.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/fdhcrb/episode_210_kubernetes_config_connector_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Emily Cai of Google is on the podcast today with hosts [Brian Dorsey](https://twitter.com/briandorsey) and [Mark Mirchandani](https://twitter.com/markmirch) to talk about Kubernetes Config Connector, which went GA last month. The program helps users manage their Google Cloud resources in a way that is familiar for Kubernetes developers. Emily explains that it's a great tool for Kubernetes developers looking to easily manage their infrastructure in one place. A platform team managing other teams is a perfect example of large-scale companies who could benefit from this tool, Emily explains.

Walking listeners through the development cycle before and after Kubernetes Config Connector, Emily shines some light on specific instances when this powerful tool could streamline the process of building your project, making it faster and more efficient. She elaborates on the ways Config Connector and Anthos can work together as well.

In the future, the Config Connector team hopes to cover all GCP resources, to create a more clear end-to-end experience for Kubernetes developers, and to allow Config Connector to be enabled straight onto a cluster.

<!--more-->

##### Emily Cai

[Emily](mailto: caie@google.com) is an engineer on Google Cloud’s Config Connector team focused on creating a declarative way for users to manage their non-Kubernetes resources. She has been with Google since November 2018 after interning twice (once in Irvine, once in Zurich). Currently living in Seattle, she is an avid frisbee player and winter sports enthusiast who is always open to new experiences.


##### Cool things of the week

* SQL Server, managed in the cloud [blog](https://cloud.google.com/blog/products/databases/migrate-your-microsoft-sql-server-workloads-to-google-cloud)
* Now, you can explore Google Cloud APIs with Cloud Code [blog](https://cloud.google.com/blog/products/application-development/how-cloud-code-improves-app-dev-on-gcp)

##### Interview

* Kubernetes [site](https://kubernetes.io)
* Kubernetes Docs [site](https://kubernetes.io/docs/home/)
* Kubernetes Config Connector on Github [site](https://github.com/GoogleCloudPlatform/k8s-config-connector)
* Kubernetes Config Connector Docs [site](https://cloud.google.com/config-connector/docs/overview)
* Unify Kubernetes and GCP resources for simpler and faster deployments [blog](https://cloud.google.com/blog/products/containers-kubernetes/config-connector-bridges-kubernetes-gcp-resources)
* keeprunning.io [blog](https://www.keeprunning.io/)
* Cloud SQL [site](https://cloud.google.com/sql)
* Compute Engine [site](https://cloud.google.com/compute)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Terraform [site](https://www.terraform.io)
* Anthos [site](https://cloud.google.com/anthos)

##### Question of the week

How can I improve reliability/availability with the least amount of work?

* Regional Persistent Disks [site](https://cloud.google.com/compute/docs/disks/regional-persistent-disk)
* High Availability Regional Persistent Disks [site](https://cloud.google.com/compute/docs/disks/high-availability-regional-persistent-disk)
     
##### Where can you find us next?

Our guest will be at [Kubecon Europe](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/) and speaking at [Next](https://cloud.withgoogle.com/next/sf/)

Mark and Brian will also be at [Next](https://cloud.withgoogle.com/next/sf/)!

{{< transcript "[MUSIC PLAYING] MARK: Hello, everyone. And welcome to Episode 210 of the weekly Google Cloud Platform podcast. As always, I'm Mark. And I'm here with my infamous colleague Brian." >}} 

BRIAN: Hello, hello. 

MARK: Maybe infamous isn't the best word to use. 

BRIAN: I wasn't sure how to follow up on that. 

MARK: What is your preferred adjective? 

BRIAN: I think odd is my preferred adjective, to the point where you can actually email me at odd@Google.com and I'll get the mail. 

MARK: Odd@Google.com-- are you sure you want to give out your email address to all these people? 

BRIAN: I just did. 

MARK: Well, then. I am here with my very odd colleague, Bri-- I can't do that. 

BRIAN: It's a set up. 

MARK: It's a setup. No. I've been tricked! 

BRIAN: Indeed. 

MARK: Well, it is always exciting to come and chat with you, Brian. Always happy to work with you. And of course, we have an amazing episode. So why don't you tell us who we're going to be talking to today? 

BRIAN: Yeah. So we have Emily [INAUDIBLE], who is a software engineer on the Kubernetes config connector. And I'm really looking forward to sharing all that with all of you. 

MARK: Yeah. It's really interesting to hear about what a Kubernetes config connector does. And it's Kubernetes, so everyone's going to be interested in hearing about how it kind of helps people use different cloud technologies and build that into their system. But we will get into that later. 

After we do that, we'll also have a great question of the week, where I ask Brian a little more about how to make our cloud services more reliable. So I hope you're ready to answer some hardcore questions. 

BRIAN: I'm prepared. I think. 

MARK: But before we do any of that, why don't we get into our cool things of the week? 

BRIAN: OK. Well, I'll kick it off. Most folks are probably aware that we have managed SQL databases at Google Cloud. And we've had MySQL and PostgreSQL for a long time. 

And we've just recently announced the GA, Microsoft SQL Server, as a managed SQL database, as well. 

MARK: Yay. 

BRIAN: Yeah. And I'm super excited about this because I actually, for years, worked with SQL server and Python together, which is kind of an unusual combo. And it's just a really powerful database. 

And also, it's just really important to have in cloud in a managed space. Because there's a lot of organizations that don't have a full time VBA. That's the situation I was in. And it's a really powerful database, which means a lot of applications are kind of built to use that power. 

And then you need to keep using it to keep your database, like, your system going. So I'm just really excited that that's there. So it's GA. There's new blog posts that we'll have links to in the docs, with video going over things, and also, you know, the steps to do a migration, for a test migration. And give it a try. 

MARK: Yeah. I think it's really exciting to see. I mean, SQL Server has been such a prominent technology for such a long time. And even with some of the versions that have probably been out for over 10 years, they probably still host a decent amount of production data right now. 

BRIAN: Absolutely. In fact, the migration steps start with 2008 R2. 

MARK: Right. And that's been around for 12, 13 years. So it makes sense that even though there's a lot of different availability options on the cloud and different technologies, you still have this core set that has been around for so long, that is so well-established. Being able to host that in the cloud with as little friction as possible-- it's brilliant. 

BRIAN: You're speaking to my heart, sir. 

MARK: There we go. Well, the coolest thing I've found this week is a update to Cloud Code. Which, if you're not familiar with Cloud Code, it's a set of extensions to your favorite IDEs that let you integrate a little bit better with Google Cloud as a whole. And we've just added some API support. 

A lot of the stuff that you're working with in Google Cloud is actually handled by API, such as splitting up resources, doing different permissions, and so on. There's a whole bunch of APIs. So now, with this update to Cloud Code, it's all integrated back into Cloud Code so you can find the APIs you need. 

You can actually enable them for your project from your IDE and get documentation in the client libraries. It's just bringing that much more power into your IDE environment so that you don't have to leave that and go, I know, I know, the E in IDE is environment. But the point is that you don't have to leave your space to kind of get all the things done you need to get done. 

BRIAN: Got it. So you've got your comfy space. And you just connect to all the things. Awesome. 

MARK: Absolutely. 

BRIAN: OK. Let's go. Let's talk to Emily. OK. Thanks for joining us, Emily. Could you tell us a little bit about who you are and what you do? 

EMILY: Yeah. I'm Emily. I'm a software engineer on the config connector team. And I've been on the scene for a little over a year and at Google. And I've been on config connector since it's been EAP, which is early access program, and then watched it grow from alpha to beta to j, which was last month. 

BRIAN: Exciting. OK. So what is the Kubernetes config connector? 

EMILY: Yeah. So Kubernetes config connector is a Kubernetes operator that helps users manage their GCP resources in a Kubernetes declarative way. So this means that the user experience for developers managing their infrastructure or their Cloud resources can be consistent and familiar if they're familiar with Kubernetes. 

MARK: So taking the idea of Kubernetes as kind of a right now popular way to orchestrate containers and build those out there, the config connector works with that to be able to actually pull in other Cloud resources. Can you expand a little bit more on what that actually means? 

EMILY: Kubernetes has these things called custom resource definitions. And with them, you can basically create your own resource. But what config connector does is we create CRDs, custom resource definitions, based off of the Google Cloud resources that are available. And what you end up doing is that you get to manage your entire Google Cloud resource structure with just the Kubernetes native way. 

BRIAN: Got it. So this is actually talking to and, like, setting up and adding and removing things from your Cloud project via Kubernetes API set? 

EMILY: Basically everything from start to finish. You can set up your service account. You can set up your IM policies, all the way to actually activating your resources. And all of that can be managed with this Kubernetes declarative YAML configuration files. 

BRIAN: Got it. Wow. Well, OK. So that sounds cool. So what kind of people are finding this most useful? What's the appeal for people who decide to use it? 

EMILY: Currently, with interacting with different clouds, users have to have a huge cognitive overload on learning all the SDKs, all the command line tools and UIs for interacting with their resources. And it's just a lot of different processes that all do not connect together. 

And with config connector, the customer just has to use Kubernetes and has to use the Kubernetes resource model, which is the common language that more and more infrastructure and cloud teams are using now. So now all the user needs to do is manage their infrastructure in one place. And that has been very helpful. 

MARK: Yeah. I mean, it sounds like a lot of people have been moving towards Kubernetes for a variety of reasons. But one of the great things about it is the ability to centralize a lot of their kind of configuration, their infrastructure needs. And with the config connector, it sounds like they can add on the cloud-specific resources that before you'd have to, it sounds like, go into, set up, configure, and then connect. And instead, now they can just treat it like any other Kubernetes resource. 

EMILY: Yeah. That's exactly it. 

BRIAN: So we've been saying cloud resources. What's an example of one or two of these? 

EMILY: So with Google Cloud, we have SQL instances, and we have Compute Engine, and we have Pub/Sub topics subscriptions. So those are some examples of them. 

MARK: And so what would that look like for kind of connecting those with Kubernetes config connector? 

EMILY: They just look like CRDs that talk to the Google Cloud server and make sure that those resources are the way that the user wants them to look like. 

BRIAN: OK. What's a CRD? 

EMILY: A CRD is a custom resource definition. And that could really be anything you want. But it basically has a spec and a status field where you can add all of the fields that you'd like to see in it. 

MARK: OK. So we've got a bunch of different Google tools, like a SQL database or a Pub/Sub topic. And you can connect those to Kubernetes to use the services that you're probably already writing in there. Let's actually walk through a specific resource and talk about what that lifecycle looks like. Can you give us an idea of what that is? 

EMILY: Yeah. First I'll give you an idea of what the user experience would look like before config connector. The user would have to talk to the API and say, create this, change this, delete this, get this. And these are all imperative actions that fall on the user to be responsible for. 

But now, with config connector, all you need to do is create a configuration file, which is usually a YAML. And then kubectl will apply that. And that's all the user needs to look at. So Kubernetes connector will check if the resource exists. And if not, it'll create the resource in the Kubernetes server and the GCP API. And if it currently exists in the GCP API but not the Kubernetes server, it will acquire that resource and make sure that the state is the same with the configuration file. 

Finally, if the resource exists already in the Kubernetes and [INAUDIBLE] API, it will check if the YAML, which is the desired state, is the same as the current state, the actual state, in the GCP API. And then if so, it'll reconcile to see if an update is needed. And if their update is needed, the config connector will take a diff from the desired and actual state. And then ensure that the actual state is the same. 

BRIAN: So exciting. Sorry for interrupting you midstream there, but this is the part of Kubernetes that has always seemed the most useful and the most amazing to me. This kind of-- you specify how you want the world to be and Kubernetes goes and makes that true. So this extends that out to the rest of Google Cloud, basically? 

EMILY: Yeah. Yeah. It's kind of almost magical how it's just what you want it to look like is always what it will look like. And with Kubernetes, we have the Reconcile loop, which just makes sure everything is eventually consistent to what you want. 

MARK: I was going to say that's the other kind of magic part about this whole thing is that you've kind of got this constant check in of this process. Because we've seen similar efforts in Terraform and many other kind of declarative statements where you're putting down your infrastructure, writing it down as code, and then applying it. But that's kind of a static process, almost. Because you run it, and then it's done, and then you've got your resources. 

But as your resources might change over time, or they might go down, or someone else might config them, this kind of keeps those abilities, or rather, I should say those resources, in check using Kubernetes built in logic for keeping-- well, normally services and pods and so on in check. 

EMILY: Exactly. 

BRIAN: OK. So Mark, you brought up other stuff. So Emily, how does this compare to other kinds of configuration management aside from this loop? You know, if folks are already using other things like Terraform, should they think about this? Or how does it compare to different stuff? 

EMILY: Yeah. So Config Connector, what we think would be the best solution if you're already familiar with Kubernetes and you already have some infrastructure that you'd like to streamline. But for Terraform, they have ACL, which is their own language, which does a lot. It has for loops and forces users into figuring out solutions that they basically offer. 

But because of all this logic baked into their language, it's harder for customers to customize the solutions that they need. And so Config Connector uses the YAML, which is pretty low level. And now customers can have high level analysis tools on top of that. 

So another thing that differentiates that with, as you were saying, Terraform, the state lives on the client side. And users have to keep updating to make sure that their code is the same way as the system that they want. Whereas with Config Connector, as we said earlier, it makes sure everything is eventually consistent because of how Kubernetes has the Reconciliation. 

And the other thing about Config Connector is that we have self-healings because we check in diff constantly to see that, like, if there's a change that was necessary, it'll go in and make sure that's true. So users don't have to keep on making sure when they have to update or if they have to apply any change. 

MARK: Yeah. And it sounds like this is a great way to kind of limit the blast radius of a lot of damaging effects. We always talk in the Cloud about lease privilege and making sure everyone's set up the right way. And by having this kind of self-healing set up, you can kind of get an extra safeguard. 

EMILY: That's actually another thing about something that customers have run into, is if you're managing a platform team for multiple dev teams, how much permission do you give them? And how little permission do you give them? 

Because that's where managing a surface account and limiting the blast radius is super important. So some engineer doesn't accidentally wipe out all of your resource by trying to delete one thing. 

BRIAN: OK. So this connects two thoughts I was kind of having along here. If it's doing all of this stuff for us, something happened-- how do we know what caused that to happen? Is there logging or monitoring? Or how do we know it's working right? How do we know who did what? 

EMILY: Yeah. With Kubernetes, we have kubectl. And you can watch on that resource to just see if the resource has been created, if it's been up to date, and what's been changed. It's like familiar and thorough enough for most Kubernetes customers. 

BRIAN: Got it. So it basically looks like the rest of the Kubernetes system. However, people are monitoring changes there. It works the same way? 

EMILY: Yeah. Because the resources, again, are custom resource definitions, CRDs, and so the logging and events will be the same. 

BRIAN: Oh. Got it. OK. That sounds cool. 

MARK: Yeah. I mean, I like how you described it earlier as something that's very Kubernetes forward and something that kind of relates very naturally to people who are already familiar with Kubernetes but now having to bring in a bunch of other resources that they may not be as familiar with. I think an important part of that is how this kind of plays into the grand scheme of what Anthos is. So could you talk a little bit more about how this Config Connector works with people who are looking into Anthos? 

EMILY: From my understanding, Anthos' goal is to bring a consistent, hybrid multi-cloud experience. And the way it will try to do that is with Kubernetes. And Kubernetes resource model is basically how we're going to express our Google Cloud native services as Kubernetes resources. 

And with Anthos, there is ACM, Anthos Config Management, which will look like a lot of people use GitOps today and Anthos Config Management will make sure your GitOps are how you manage your config. And so now, users can just throw their configuration into their GitOps, and ACM will pick that up. And then Config Connector will go in and make sure that the YAML files in your configuration are the same as what you expect your system to look like. 

BRIAN: Got it. So in this case, by GitOps, it's talking about how you have all the YAML files and the configuration for your whole system versioned in source control. And you actually drive the system from that? 

EMILY: Yes. That's exactly it. So you can just put your configuration in the GitHub folders. You can have production, or staging environments, and then all that separated, but defined in one place, which makes it very seamless and easy. 

MARK: Yeah. And it sounds like these are two great solutions that kind of work in tandem in a lot of ways. But they all still maintain that Kubernetes way of looking at things. It's probably really helpful for large scale companies, who I'm sure right now are just looking for a ton of Kubernetes talent to really speed up their ability to adopt Cloud resources by using tools like this. 

EMILY: Yeah. 

BRIAN: OK. So have you seen people doing this for real? Are there any concrete examples you could share with us? 

EMILY: Yeah. I mentioned earlier about an example of a customer. It would be a platform team that's managing multiple development teams. And we actually had a large enterprise customer who already had a GitOps workflow. 

And they had a pretty small platform team that was managing the infrastructure for dozens of development teams. And this was a pretty large problem for them to solve. Because their GitOps was their solution. But how are they going to actuate all the resources that the development teams needed? And so Config Connector was this final puzzle piece that they needed for actuating all of their configurations. 

BRIAN: So problem solved. Nice. 

EMILY: Problem solved. It was awesome. 

MARK: Are there any other kind of cool use cases that you've seen where people have been using this in a way that you didn't really expect? 

EMILY: So actually, in the early stages, we had a customer who basically created their personal CRDs. And we started talking to them and realized that they were basically building the same thing that we were. And they basically said you guys have this. This is wonderful. Please let me just use you. 

And then just fully incorporated their infrastructure into Config Connector. It was immediately a thing that we realized, like, this is a thing that we definitely need, and we will keep working on. 

BRIAN: Awesome. OK. So this sounds pretty cool. What's the future for Config Connector? 

EMILY: So future steps for Config Connector are we want to cover all of the GCP resources. Currently, we have about 80 to 90. But we're still going to keep creating more CRDs. And then another feature set for us is that we want to have a unified Kubernetes resource model tool chain. So we want the whole end-to-end experience to be Kubernetes. 

So currently, there's not a best practice way on how to use Config Connector with Helm or Customize or other, like, CICD things. And we want to create a more clear end-to-end solution for everyone. Finally, another feature step for us is we want to have Config Connector be something you can enable straight onto your cluster, the same way you would just create a cluster and enable [INAUDIBLE] or something. 

BRIAN: How do you enable that Config Connector today? 

EMILY: Today, currently, you have to download an install bundle. And then kubectl will apply the necessary YAML files. But you have to give a service account or workload identity. And you have to have a cluster already created, which is something we would also like to have a different solution for. 

BRIAN: This is basically about adding a checkbox to the UI to have this be installed automatically. 

EMILY: Currently a large pain point is customers who are trying out Config Connector don't know if they can just create a cluster under their organization. Because you have to have higher ups to start your own cluster sometimes. And if we can just have this be something you could check mark and toggle on for your cluster creation, that would be huge. 

BRIAN: So it's easy enough to get started today if you've got a cluster. But you want to make it even easier in the future. 

EMILY: For sure. 

MARK: So if people try this out and they have feedback and they have questions, where should they go? 

EMILY: So the GitHub channel will be linked in the show notes. And feel free to give us comments and suggestions or questions if you run into bugs. 

BRIAN: And if they want to just get started, or tell a friend how to get started, is that where to go, as well? Is that where the info is? 

EMILY: Actually, the info for getting started would be at the Cloud.Google.com docs, which will also be linked in the show notes. 

MARK: Yeah. I mean, as far as people who are just kind of hobbyists, or who are just trying this out either way, obviously in Google, it's pretty easy to spin up a cluster with a personal account. And it sounds like it's a relatively straightforward process for them to try out these actual CRDs, maybe write up some samples and see what kind of Google Cloud resources they can connect to pretty quickly. 

EMILY: Yeah. 

BRIAN: So to sum up, it sounds like if you kind of see the world through Kubernetes, this will be really exciting to you. And you should check it out. Is that right? 

EMILY: Yes. That is exactly it. If you interact with Google Cloud products, Google Cloud resources, and you are familiar with Kubernetes, then I think Config Connector would be a wonderful tool to try out and see if you like it. Because that eliminates interacting with the G Cloud command line tool, or interacting with the Cloud UI and waiting for things to work. Whereas you can just kubectl apply, and everything will be the same that you expect it to be. 

MARK: And if you don't see the world through Kubernetes, which is totally reasonable, but it's becoming pretty popular. I hear it, pretty much, several times a day. So it might be something worth checking out. And I know there's lots of great tutorials and resources out there to look at what Kubernetes can kind of bring to the ecosystem. But I don't think we need to sit down and talk about all the benefits of Kubernetes. 

EMILY: Yeah. Maybe not today. 

BRIAN: Yeah. OK. So is there anything we missed or that you'd like to mention before we wrap up? 

EMILY: I guess another thing that I wanted to touch on was a lot of customers use load balancing. And one resource that I ended up working on was helping with the load balancing cluster resource solution. Which the solution will have a super intense sequence of dependencies, which go from, like, an address, depends on a forwarding rule, a target proxy, on [INAUDIBLE] map, on a back end service, health checks, firewalls, all of that. But previously, customers would have to create each of those and manage each of those. But with Config Connector, you can throw them all into a configuration file. With just kubectl apply, they'll, like, go and actuate and spin up those resources without having to make the user create those dependency lines. 

BRIAN: That's awesome. And in the specific order that you have to make them in? 

EMILY: Yeah. Yeah. 

BRIAN: Awesome. Thank you, Emily, for joining us. That was fantastic. We learned a lot. And I really appreciate the time. 

EMILY: Great, thanks. 

MARK: Thanks so much to Emily for coming in and talking more about the Kubernetes Config Connector. I didn't really quite get it before, you know. So I was really excited to hear more about what it does and how it helps people. 

And we're going to include some resources down in the show notes. The first thing is that we've got some blogs that kind of talk a little bit more about the announcement of it, a little bit more in depth on how to use it. And I think there's also some events coming up that they're going to, right? 

BRIAN: Yeah. A significant part of the team is going to be at KubeCon Europe. If you're there, join them there. And then, of course, they're going to be at Next on stage and in the various kind of breakout areas hanging out there. And then, the real work's happening on GitHub. So go hang out there. Like, you can give it a try, give feedback to them, that sort of thing. 

MARK: Yeah. So hopefully, for people who are interested, it should be a pretty low barrier to entry to go jump on there and try it out and see some of the cool things that you can kind of connect the rest of the Google Cloud to your Kubernetes environment. Now that we've talked about that, why don't we go on to our question of the week? 

[MUSIC PLAYING] 

So Brian, as I said earlier, I'm going to ask you a little bit about reliability and how do I kind of improve it? But here's the key thing. As many people know, I'm very lazy. So it might take me a long time to do something. 

How do I get this started if I'm going to create a reliability plan? It might take me a lot of time. What are some quick steps I can take to actually get this accomplished? 

BRIAN: OK. You're totally right. This is a huge topic. It's actually a career, right? So we're not going to answer all the things here. 

You know, I think I'm going to give a specific recommendation slash idea. But it's in response to, I think, almost all of our conversations around this are talking about either things like containers and that use Kubernetes and scale things up and down, or serverless. You know, I do that. And that's all cool. 

But most of us have a bunch of apps running that we actually can't change that easily. Or it would take way more effort than is possible to kind of give them the love that they would need to kind of be changed. So we have a bunch of stuff that's just running on VMs. 

And the classic thing to do there is to put a load balancer in front of it. And we've got the load balancer, managed systems groups. You'd have multiple VMs that would all kind of work together. 

But realistically, a lot of apps are actually not broken up that way. Or they would need some sort of replication of back end between some sort of database or a state that either it's not worth the time effort to make that architectural change, or it's something you bought and are running. And you can't just change it, because it's built by other people. So we end up with a lot of apps that just basically run on one VM. 

So here's something you can do for those apps for you, since you are self-described lazy. And I think this is a really fun example. Because if you just read about the feature, you might not know how it would work. So the feature is called Regional Persistent Disks. 

And what it is, is behind the scenes-- so the disks are block devices. So each part of the logical disk is actually just a little block. And under the covers, it's doing replication across two different zones in the same region, or actually, all the zones in the same region. And so since it's happening at the block level, you don't need to change the application at all. 

And in the quick version, you actually don't change anything. And when you get an alert or get a call that the apps not working anymore, if you find out that the zone is down for whatever reason, you can just go to one of the other zones in the region, take that disk, and attach it to a new VM, and continue without doing anything else. 

MARK: [MAKES EXPLOSION SOUND] I mean, that's the sound of my mind exploding. Because like you said, when you look at planning out migrations, or even just kind of taking a existing application and moving it into the Cloud, you really have to figure out how much time you're going to be able to spend on it. If you don't even own some of the-- you know, it might be a proprietary app that, like you said, you got through an acquisition. That's a very real scenario for a lot of people. 

BRIAN: Yep. 

MARK: And the ability to rewrite it might not be there, or to break it up and do a balance or microservice. All these thing of things, like, there's a lot of different strategies. And it'll always depend. 

So being able to kind of take the persistent disk and just kind of have it duplicated so at all times-- so that if for any reason it goes down, you still have it up? That is such an easy way to make sure that you have a very, very quick, quick way to get your app back up and running without changing the app at all. 

BRIAN: Yep. And for folks who are a little bit less lazy than you are, you can actually go and set up kind of a hot standby VM, if you're willing to spend the extra on that, and have it just be ready to do it so you don't have to wait for the alert to happen. So I'm just really excited about this. I think it's super not obvious and really useful in that kind of step between a full on HA, high availability plan, and something you can do to just reduce the pain. 

MARK: Right. I mean, this doesn't necessarily qualify as a full on high availability plan. But it's a great first step that you can take quickly and easily to reduce the burden of kind of just sitting there and making sure everything's up all the time, or at least having a backup plan for when something does go wrong. And then you can take your time with an actual plan and figure out what does make the most sense for your scenario. 

BRIAN: Exactly. 

MARK: So hopefully, everybody out there kind of learned something from that. And it sounds like we'll have a link in the show notes that details out that a bit more. So highly, highly recommended, especially for all those lazy people like me. 

BRIAN: Couldn't resist calling you out a couple times. But I'm there with you. 

MARK: Well, that was a jam packed episode. I think, hopefully, we probably have way too many follow up links in the description. But for people who are interested in different things, it's all in there. So go check out what you're interested in. 

I think we're just about out of time. Brian, where are you going to be? Are there any cool projects you're working on? 

BRIAN: The main thing is I will be at Google Cloud Next. Looks like I'm going to be doing a shorter version of the where should I run my stuff talk, that talks about our different compute options, and then just around. So if any of you are going to be there, I would love to connect, especially about using VMs. That's what I'm most into these days. 

MARK: Yeah. I've heard an older version of that talk. I don't know how much it's changed. But I think it's super helpful to give people that baseline understanding of what the different options are. Because it's easy to say one's better than the other, but that's not true. 

And much like what we were talking about with the high availability plans, you really need to consider what's best for your scenario. So having a good knowledge about what each of the offerings are is so important. 

BRIAN: Obviously, I agree. But I'm a little biased. How about you? 

MARK: Well, I think when you're giving the talk on it, you can be a little biased. 

BRIAN: Yeah. 

MARK: So that's fair. 

BRIAN: That's kind of the point. 

MARK: I will also be at Google Cloud Next. And that's, I think, April 6th through April 8th. If those dates are wrong, well, I'm sure we'll have the right ones in the show notes. 

But I'll also be there working on a couple of different things. We'll have our podcast booth out there. I'm not sure where it'll be this time. Last time, it was on the show floor. And whoo, boy, that was a lot. So we will definitely see what that looks like this year. 

Otherwise, I've got weeks and weeks full of travel, having just moved. So I might be off the air for a little bit. But I'm sure everyone will get their fill of me through the podcast. 

BRIAN: Okey doke. And then we wrap it up. Thank you all very much for listening. And see you next time. 

[MUSIC PLAYING]