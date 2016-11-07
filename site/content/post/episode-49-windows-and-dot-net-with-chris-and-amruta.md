+++
audioDuration = "00:37:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.49.mp3"
audioSize = 53888906
categories = ["Windows", ".NET"]
date = "2016-10-26T01:07:49Z"
description = "Today Amruta Gulanikar and Chris Sells, experts from the Windows and .NET community and part of the Google Cloud team, join us to discuss why you should run your Windows and .NET work loads on Google Cloud."
draft = false
episodeNumber = 49
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Windows and .NET with Chris Sells and Amruta Gulanikar"
image="/images/post/windows.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/NPBYXnyvyec"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/59j4sk/episode_49_windows_and_net_with_chris_sells_and/"
+++

Today [Amruta Gulanikar](https://twitter.com/AmrutaGulanikar) and [Chris Sells](https://twitter.com/csells),
experts from the Windows and .NET community and part of the Google Cloud team,
join your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
to discuss why you should run your Windows and .NET work loads on Google Cloud.

<!--more-->

##### About Amruta Gulanikar

Prior to joining Google [Amruta](https://twitter.com/AmrutaGulanikar) spent 5+ years as a PM in the Office
division at Microsoft working on many different products. Just before she left, she worked on launching a
new service and supporting apps  - “O365 Planner”  which offers people a simple and visual way to organize
teamwork.

At Google, Amruta owns Windows on [GCE](https://cloud.google.com/compute) which includes support for premium
OS & Microsoft Server product images, platform improvements to support Windows workloads on GCE.

##### About Chris Sells

Before joining Google, [Chris](https://twitter.com/csells) was a contributing member of the Windows developer
community for more than 20 years, including 8 years at Microsoft. He’s written a number of books in this area
and still maintains a blog that he started in 1995 about his various technical adventures, although he’s more
active on Twitter these days.

At Google, Chris is the Lead PM for Cloud Developer Tools, which includes driving our tooling and libraries
efforts around Windows and .NET.

##### Cool thing of the week

- 15 Awesome things you probably didn’t know about Google BigQuery [blog post](https://medium.com/google-cloud/15-awesome-things-you-probably-didnt-know-about-google-bigquery-6654841fa2dc#.u37fvcy4z)
- A Google SRE explores GitHub reliability with BigQuery [blog post](https://cloud.google.com/blog/big-data/2016/10/a-google-sre-explores-github-reliability-with-bigquery)

##### Interview

- Windows on Google Cloud Platform [docs](https://cloud.google.com/windows/)
- Windows on Google Compute Engine [docs](https://cloud.google.com/compute/docs/instances/windows/)
- .NET on Google Cloud Platfom [docs](https://cloud.google.com/dotnet/)
- SQL Server on Google Cloud Platform [docs](https://cloud.google.com/sql-server)
- Windows RDP: Remoted Desktop Protocol [wikipedia](https://en.wikipedia.org/wiki/Remote_Desktop_Protocol)
- Running .NET applications on Linux with Mono [blog](https://www.linux.com/news/running-net-applications-linux-mono)
- .NET core runtime [docs](https://www.microsoft.com/net/core#macos)
- Announcing Docker Container Platform for Windows Server 2016 [Docker](https://www.docker.com/microsoft)
- Update on Kubernetes for Windows Server Containers [blog post](http://blog.kubernetes.io/2016/07/update-on-kubernetes-for-windows-server-containers.html)
- Powershell [docs](https://msdn.microsoft.com/en-us/powershell/mt173057.aspx)
- PowerShell is open sourced and is available on Linux [announcement](https://azure.microsoft.com/en-us/blog/powershell-is-open-sourced-and-is-available-on-linux/)

<div style="text-align: center">
  <img src="/images/post/windows.png" style="margin: auto; width: 25%">
  <p><small>Google Cloud Platform is a first class Windows cloud</small></p>
</div>

##### Question of the week

How can I diagnose and understand a problem that only occurs in production?
- Stackdriver Debugger is now GA [announcement](https://cloudplatform.googleblog.com/2016/10/production-debugging-the-easy-way-with-Stackdriver-Debugger-GA.html)

##### Were will we be?

[Francesc](https://twitter.com/francesc) finally released one more episode of
[justforfunc](https://youtube.com/c/justforfunc), and now everything is ready before he goes to Brazil
next month for [GopherCon Brasil](https://2016.gopherconbr.org/en/) and
[GCPNext Brazil](https://cloudplatformonline.com/NEXT2016-Brazil.html).

[Mark](https://twitter.com/Neurotic) will be at [GAMEACON](http://www.gameacon.com/gameacon-ac)
in Atlantic City on October 28th. He will then attend [Unite](https://unite.unity.com/2016/los-angeles),
the Unity conference in Los Angeles, CA on November 1st.

{{< transcript "FRANCESC: Hi, and welcome to episode number 49 of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good, thanks, Francesc. How are you doing? 

FRANCESC: Pretty hungry. 

[LAUGHTER] 

Very good, very good. Actually very excited about the interview today because I'm sure I'm going to be learning a lot because it's about a topic I don't know that much about. 

MARK: Yeah, me neither. It's all about Windows. 

FRANCESC: Yeah, Windows and .NET. And the only .NET program-- I've actually done some C# programming and F#, and they're cool. But that was a long time ago. So yeah, I'm looking forward to these interviews. 

MARK: I do a little bit of C# because I'm playing with Unity these days. But that's really it. I mean, that's Unity C#. It's probably-- I don't know, actually. I really don't know if it's different. It could be. 

FRANCESC: No idea. 

MARK: No idea. 

FRANCESC: I don't have any idea. 

MARK: Yeah. But we have Chris Sells and-- 

FRANCESC: And Amruta Gulanikar. Yeah. 

MARK: Yeah, both joining us today to talk about that. 

FRANCESC: Yeah. And in the end, we'll have a question those-- what is the name? Is it Heisenbugs? Which is a bug that only occurs when you're not looking at it. 

MARK: I did not know that was a word. 

FRANCESC: It's a Heisenbug, or something like that. 

MARK: A Heisenbug, or a Schroedinger's cat bug, or something. 

FRANCESC: It is pretty much the same thing, I guess. So yeah, it is basically that. OK, so I have this bug in production, but not able to reproduce it locally. It's the opposite of it works-- actually, no, it works on the machine. 

MARK: It works on the machine, yes, exactly. 

FRANCESC: Yeah, so what do I do with this? But before that, we will have the cool thing of the week. And today, we have one cool thing of the week, which is actually 15 awesome things. 

MARK: So like 15 cool things of the week. 

FRANCESC: 15 cool things of the week. That is a record right there. 

MARK: Yeah, so it's a blog post written by a Googler named Tino Tereshko. He works on big data at Google. He wrote an article called 15 awesome things you probably didn't know about Google BigQuery. 

FRANCESC: Yeah. And I gotta say that I consider myself to know a lot about BigQuery, and there were things I did not know. 

MARK: Yeah. 

FRANCESC: One of the things I did not know was about how the storage is automatically optimized for the way you use it. 

MARK: Oh! 

FRANCESC: Yeah, which is pretty amazing. Because you know like when you're using your computer a long time ago and you have to defragment your computer, that's basically something that happens automagically in the background. And you don't even need to care about it. You just get the performance. 

MARK: That's very cool. Well, I read these 15 things. And you wouldn't believe what happened next. 

[LAUGHTER] 

Sorry, I had to make that joke. 

FRANCESC: That happened at GCP Next. 

MARK: Yeah. But no, it's really cool. There is definitely some fun stuff in there. One of my favorites is definitely the whole public dataset aspect of it. 

FRANCESC: Oh, yeah. 

MARK: Being able to access all sorts of interesting and exciting information that's been available to, well, basically anyone if you want to go have a look at it. 

FRANCESC: Yeah, there's a bunch of them. And if you're trying to get started with BigQuery, it's definitely a fun place to get started. And sometimes, even for some big projects, those datasets can be really useful. So yeah. 

MARK: Actually, I'll shout out to one here. There is a GitHub reliability done out. One of our good friends, Paul Newson, he looked at commit levels within GitHub to see if he could determine whether or not there was an outage at that given point in time. 

FRANCESC: Nice! 

MARK: It's a really cool article. We'll link to it in the show notes. 

FRANCESC: Nice. A backwards SLA. 

MARK: Yeah, yeah, absolutely. 

FRANCESC: That is awesome. Cool, so I think that it's time to go talk with our friends Chris and Amruta. 

MARK: I think let's do that. 

So I'm very pleased and delighted to have two guests on our show today. One of which is a return guest, which makes me super, super happy. We have Chris Sells, lead PM for Cloud Developer Tooling. We've also got-- oh, OK, I'm going to try my best here. Amruta Gulanikar, is that close enough? 

AMRUTA: Pretty close. 

MARK: I'll take close, I'll take close. 

FRANCESC: He's really pretty bad at any kind of name. So you know-- 

MARK: Yeah, she's product manager for Windows on Google Compute Engine. Thank you both for coming. How are you both doing? 

AMRUTA: Doing great. 

CHRIS: Great. 

AMRUTA: Thanks for having us. 

CHRIS: And good job pronouncing my name, by the way. You did it flawlessly. No problem. 

FRANCESC: Chris Sells. Sage? It Catalan, you could pronounce it "Salge," in case you were wondering. Anyway, so we're going to be talking about Windows and Windows on Google Cloud Platform, et cetera. But before we do that, why don't you tell us a little bit about yourself? So we had Chris before, so we're going to start with Amruta instead. 

AMRUTA: OK. Hi, everyone. Pleased to be here. So I joined Google from Microsoft, where I worked on different office products at Microsoft and very recently launched a new service for Office 365 right before coming to Google. I've been at Google. I have worked on the customer success team the first year. And now, I am the PM for making Windows awesome on Google Cloud Compute. 

FRANCESC: Awesome. 

MARK: Nice. And you, Chris? 

CHRIS: Well, I like that awesomeness. I like to try to bring a little bit of awesome into the work I do, too, just like Amruta. My background is I spent a good 20 plus years as a contributing member of the Windows developer community, focused on developer tools and books. And in fact, I spent eight years at Microsoft. The last two, I was on the Visual Studio team, working on the Windows 8 developer experience. And I joined Google. 

In fact, in about a week, it will be my two year Googleversary. 

MARK: Oh! 

CHRIS: And I have been working on cloud developer tooling since then, including like Amruta making Windows and .NET awesome on our platform. 

FRANCESC: Nice. So since you are both big in the Windows community, we could say, why don't you tell us, if I was a Windows developer, like everything I've done so far is developing apps on Windows, using Windows technology. Like let's say, I don't know, C# and SQL Server, how do I get started in the Google Clould Platform? 

AMRUTA: Great. So if you're a Windows developer and you're steeped in Windows technologies, a great place to start is by creating an account. You get-- we have a wide range of images, both Windows Server as well as SQL Server that we support today on GCE. I would really encourage someone who wants to get their feet wet to sign up for an account. 

All our images are a part of the free trial, including the SQL Server images. So that's a great way to kind of get started, boot up a Windows VM, or a  SQL VM, get one of your ASP .NET applications over and try it out. 

And as you're doing that, I think an important piece is not only the fact that we support these pay as you go per minute with license including images for these server technologies, but we also have a great, rich set of dev tools that you can use as you're building your ASP .NET applications or moving over your ASP .NET applications. And Chris is the best person to talk about all the great support we're building there. 

CHRIS: Yeah, I mean if I was a .NET developer trying to get a handle on Windows and .NET on GCP, there's two places I would go. Both of them start with the same place, cloud.google.com, like all GCP goodness. And so cloud.google.com/windows provides an overview why you would care about Windows on our platform and links to various resources and how to get started and read the docs, and things like that. And then, cloud.google.com/dotnet, D-O-T-N-E-T. And we've got a quick start tutorial there, and a bunch of follow on tutorials, and links to the tools, our Visual Studio plug-in, our PowerShell extension, all of our libraries. All of the kind of developer stuff you need to get started on our platform from ground zero, you can find all on that page. 

FRANCESC: Nice. So one of the things that I really like about our offer on Windows, which I wished we had it on Linux, it is the fact that when you create a new instance, when you choose Windows, it actually comes through already with RDP. The fact that you can connect to it, have you ever done that? 

MARK: Oh, yeah, so you can actually have a GUI and like see it? 

FRANCESC: Yes! I think that is pretty amazing. Like, you just click the button. 

MARK: Linux users live on the command line. 

FRANCESC: I know! But it is actually-- 

CHRIS: By the way, I'm a huge fan of that feature. And we liked that feature so much that we actually built it into our Visual Studio plugin. So if you install the Visual Studio plugin, of course you can deploy your code using the standard web deployment technologies. And we'll help you with that from inside of Visual Studio. But we also provide the Cloud Explorer. And the Cloud Explorer allows you to see and browse and manage your various cloud project resources. 

And one of those sets of resources that we support is, of course, your machines. So if you want to, you can right click on any of those machines that are associated with your project and say, oh, gosh, I'd like to just-- I don't remember the IP address. I just want to surf to this machine so it'll bring up the browser. And you can surf to that machine. Or you can start and stop it. And all those things that you'd expect to do. 

But one of my favorites is to be able to right click on it and say, oh, I just want to RDP into this. And so it'll just fire up the terminal services client, and off you go. 

FRANCESC: That is very nice. 

MARK: Now I have to ask because I'm curious now. Can you do that from mobile? Because you can SSH into a Linux VM from mobile. But can you RDP in? 

CHRIS: You absolutely can. 

MARK: No way! 

CHRIS: Yeah, you totally can. There are Android RDP clients. And you can totally RDP into any Windows machine, including ones running on GCP. 

MARK: That is pretty awesome. 

FRANCESC: That is pretty awesome. 

AMRUTA: Yeah, and as much as I love the RDP thing, and I think everyone should try it, for folks who want to be command prompt and who want to manage remotely, we also have good support for Windows WinRM so that you can kind of log in, run a bunch of your PowerShell commands remotely to manage like a fleet of Windows machines. 

A really cool thing is also like, hey, people started VMs. You're definitely going to RDP into it and say, hey, I can connect to my VM. And yeah, things look good. That's awesome. 

But if things don't look good, you also want to see, hey, what's the serial console output, right? And we have that right there in our cloud console. You can click on serial console access and kind of see what's going on with your VM. Did it boot correctly? Did the license get assigned correctly? Is it authenticated, and so on, and so forth. So lots of great tools and ways in which you can spin up your Windows VMs and see that things are working well. 

FRANCESC: So after what you said, I have like 100 questions. The first one being you mentioned PowerShell. And that made me think about the fact that now you can run BASH on Windows apparently? But only on some versions of it. 

MARK: Windows 10. 

FRANCESC: What are the version supported on Google Cloud Platform? 

AMRUTA: So we support the Server OSes. And so we have Windows Server 2008 and 2012 R2 and, as of last week, Windows Server 2016 Data Center Edition. So we launched five days after they GAed the bits. We're very happy to do that. We've been in very close partnership. So we have the latest and greatest Windows Server versions on Google Cloud. 

MARK: Since we're talking about Windows versions, I know we also support SQL Server. What versions of SQL Server do we support? 

AMRUTA: Yes, that's a great question. So we support the different editions and different versions. So we definitely have support for standard, web, and express all in GA. We're actively working on getting SQL Server Enterprise out. It's already in alpha. We're testing it with a couple of customers. And we have a wide range of versions along with the additions I just mentioned. So we have support from 2012, '14, and the latest and greatest '16. 

We also supports SQL Server 2016 on Windows Server 2016 as of last week. So we're pretty excited to have a really broad range of editions and versions that people can choose to spin up on us. 

FRANCESC: Cool. So then, if I'm a Windows developer with a C# application, I can deploy a new instance, Windows instance and deploy my code into that one, and start running it. Can I run it on Linux, too? Could you explain what is the difference between running a C# application on Linux or Windows? I know that C# now runs on Linux too because it's open source? 

CHRIS: Yeah. So we're focused a lot on this, on the tooling side. Of course, we want to make sure that people coming to Google have a great experience on our machines. And we work hard to make sure we've got wonderful distributions that run great on our platform for both Linux and Windows Server. 

And our tutorials know that 99% of the world out there today is using ASP .NET. They're targeting Windows. And so it's ASP .NET 4.x, and of course, we built all our tools and our tutorials all around that, right? Making sure that you can deploy to Windows Server instances running ASP .NET and IS, the way you expect. 

That said, we're also working really hard on supporting .NET Core, which is the cross-platform version of .NET. It's kind of the follow on to the .NET that is Windows specific that Microsoft has released into the open source. And that we've been working to support on our cloud. And in fact, if you go to the GCP blog, there have been some recent articles about how to take your .NET Core code and make it work on App Engine Flex on GCP and on Container Engine on GCP using Kubernetes. 

And so the way that works is you take your .NET Core code, and you package it up with a base Docker image that supports the .NET Core run time. And then, you can bundle all that together. And you can deploy it to App Engine Flex or Kubernetes running on Container Engine. And so you can do that today. There's nothing stopping you. 

The set of libraries that we support, we're working hard to make sure that you can do all. All the code you want to write against our libraries works in the Windows version of .NET, of course. And that's 200 plus APIs across all of Google. This is not just BigQuery and Cloud Storage, although of course we do those too, all the cloud stuff. But it's also Locations and Maps and you know, G Drive, and Docs, and all the wonderful APIs that people use across Google. 

We have support for that 100% inside of Windows. And that same set of APIs, we have about 99% coverage right now for .NET Core. It's not quite 100%. We're busy updating our GRPC implementation, which is based around HTTP2. It's binary. It's streaming. It's faster. And the libraries that require that protocol don't yet work for .NET Core. But we're so close. We're so close to making that work. 

So I expect very soon, hopefully by the end of the year, certainly by Q1, that 100% of all of our APIs will work in .NET Core, too. Which means that you can, in Visual Studio or VS code on Linux, Mac or Windows, you can write your .NET Core application. You can use Nuget to bring it in the Google .NET Core libraries, write your code, and deploy it to App Engine Flexible Edition or Container Engine running Kubernetes. And it will just work. 

MARK: That's pretty cool. All right, so I'm going to ask a question that I know, well, so I do some game development stuff. Any idea if it'll work in Unity, the C# stuff? 

CHRIS: Good question. Unity is an open question for us. Because of course, we want to opportunity Unity. Unity has a fabulous library and environment for doing .NET based development. So we want to make sure we support it. 

Unfortunately right now, Unity is .NET 2.x. And they're moving to .NET 4.x with Mono. So as soon as they've moved there and we have a reasonable platform-- because I admit we don't support .NET all the way back to 2.0. 

MARK: Not many people do, and it's fair. That's why I asked the question. 

CHRIS: But when Unity comes along with a more modern version of .NET, then we're going to see what we can do about supporting it. Because we want Unity games to be able to use the Google Cloud Platform, as well. 

MARK: That makes me happy. 

FRANCESC: Cool. So if I'm not mistaken, everything that we've been talking about for containers was on Linux containers. 

CHRIS: That's correct. 

FRANCESC: What about Windows containers? Because I've read somewhere that they exist. 

AMRUTA: Definitely. No, Windows containers is definitely interesting. And we're keeping close eye on it. The step one in actually supporting Windows containers is to support Windows Server 2016, which we have done. We are also working very actively on supporting Windows Nano images. So this would help accelerate people actually being able to deploy these container images on a smaller footprint of Windows, which is Windows Nano 2016, the preferred OS for data centers, much faster, smaller footprint, so on, so forth. So we're actively building the support in the platform first. So we're definitely working on that. 

In parallel, we're deeply engaged with the community on building support for Windows containers and Kubernetes. So you will probably see some interesting things come out of there pretty soon. And we're sort of waiting and watching and kind of looking at the customer adoption for Windows containers. They're pretty new and shiny, and a lot of people are excited about it. So we're keeping a close pulse on that. And we definitely want to take that feedback as we think about building support in GKE for that. 

But I think, to be very honest, we're kind of wanting to wait and see how people start using our Windows 2016 images, Nano images, and then the excitement of the Kubernetes community around Windows containers are definitely going to be things that help us decide what to do next year. 

FRANCESC: So for people that don't know that much about Windows container other than they exist, like me, what is the main difference? Is there a technological difference on the type of container it is? Or is it just a base image which is completely different? 

CHRIS: So here's how to think about it kind of in the big picture. If you think about the idea of Linux containers as being kind of a lighter weight containment protocol for your applications where you can pack multiple containers on top of a single VM that have access to shared resources like the operating system image, and the hard drive, but these are still environments that are isolated from each other. 

The idea of course is that you can stack multiple of these containers into a single virtual machine and get the most out of the resources of that machine without having to open up the hole of having these things break their boundaries and talk to each other, or try to crack or hack each other. 

If you think about that, well, Linux containers are just containers that have a shared Linux base. And your code runs assuming Linux is under there. And Windows containers is just your Windows code in a Windows container that has a shared access to the set of resources inside of Windows. So while conceptually they're the same, of course your code has to run on Linux or Windows. And you have to think about it differently and write your code differently. 

But the nice thing is that Microsoft has worked hard with Docker to make sure that the same set of tools that you use for managing Linux containers can also be used to manage Windows containers. Which means that from a tooling point of view and an orchestration point of view-- for example, that's what Kubernetes is all about, right? Orchestrating containers. You can think about them in the same way, which is really nice. 

FRANCESC: Nice. Awesome. 

MARK: Thank you. I think that's great. So I think it's time that-- this is the Google Cloud Platform podcast where we ask the hard questions. And we're going to talk a little bit about the elephant in the room. More often than not, when people think of running Windows in the cloud, they think of Microsoft Azure. Why should people come to us instead? Like, is there philosophical differences? Or other differences that they should be aware of when making a decision on where they should be running in the cloud? 

CHRIS: Well certainly, from the Windows world and from the Microsoft world even more, I have some-- both Amruta and I have some kind of understanding of the way that the Windows community thinks about these things, and the kind of open source community thinks about these things. 

And for a long time, these were different communities. The Windows people did it the way Microsoft said. And there was enterprises that kind of were encouraged to do things a certain way with a certain set of tools. And over in the Google world, we're much more open about things. We are heavily involved with open source and open standards. 

And so certainly on Azure, you're encouraged to do things very much the same old Microsoft way that you've done them before, which has its pluses and minuses. Here in the Google world, we're much more open. We're much less about, you come to our platform, and then you're locked in. You can't go anywhere else. 

For example, we were just talking about containers. The idea of a container is you can run that container where you want it, right? Where it runs best. And because we've built our Container Engine, which is our orchestration platform for containers on our platform, based on open standards, Docker containers, Kubernetes, we very much encourage you to bring your container based workloads to our platform. 

But if you don't like it here, you can take them other places. Lots of people run Kubernetes on other cloud providers. Lots of people run Kubernetes on premise. And in fact, lots of people run Kubernetes between the cloud and on premise depending on the resources they need and the access they need for their software. And you can more easily go back and forth. 

And so at Google, we try instead of to lock you in to how you do things, we try to make sure that we're the best place to run those open things. So we try to earn your business every day. So that's one way of saying it. 

Another way of saying it is we think there's a bunch of stuff on our platform that is just better. We have more choices. We have more options to make it easier to spend less money, to run your stuff more efficiently. Of course, we're the world leader in big data and machine learning. And of course, you get Google's amazing networking and infrastructure when you come to our platform. So I think that the Google Cloud platform is a fabulous choice, whether you're a Linux developer or a Windows developer. 

AMRUTA: Yeah, that's exactly right. And just to kind of chime in, like I couldn't agree more with Chris over there. We also offer-- our pricing, our promise to our customers is as we make improvements in running our data centers, we pass along those savings to you guys. And our Windows pricing for our Windows VMs is extremely competitive, even with existing cloud providers like Azure and AWS. We also have great innovation on platform sides which customers, both Windows and Linux, can leverage, like custom VMs. 

So you're no longer paying for the license cost for the cores that you don't use. You can have machine shapes exactly with the number of cores that you want, or the memory you want, and pay exactly for that, passing along more savings to your customers. So I think as we innovate, we offer a large variety of supports and tools and images for Windows, as well as these platform improvements. We'll just keep making sure that you get the best experience running your workloads on us. 

MARK: So in our notes, I have a thing about PowerShell and open source. And I'm happy to admit that I know nothing about either of them. So it sounds like there's something interesting there. Chris, do you want to tell us what's going on? 

CHRIS: Well, of course, you know a great deal about open source. But I think what you mean is PowerShell plus open source together. 

MARK: Yeah. 

CHRIS: So let me back right up. So the idea of PowerShell is that it is the shell that Windows developers and IT administrators specifically use because it is essentially a really great way to interactively understand and manage various resources. 

So for example, if I've got a cloud provider that provides a set of commandlets, or if I've got a piece of software that has an administration interface, by having a set of commandlets, I can, with a very easy set of commands that I already probably know, a set of standard verbs across everything, I can say, oh, I want to be able to create an instance of this resource. I want to list the set of resources of this type. I want to be able to remove them or update them, the standard kind of CRUD style is baked right into the verbs that are part of PowerShell. Which is great, because it makes it super easy to use and learn new sets of commandlets. 

And there are now tens of thousands of these commandlets for various pieces of software in the world in the Windows community. The other thing that makes it really great is as you interact with these resources, you get lists of resources, or lists of what look like normal lines like you would in BASH or your standard Unix shell. But that's only how it's rendered. What you're actually getting back is sets of objects. And you can pipe these objects from one command to another. 

And PowerShell is really a language for manipulating objects. And what it means is that unlike in the Unix world, you don't have to do regular expression matching to be able to pull out various bits and pieces of the data as it goes by. You can just look at object properties. And you can call object methods in a way that is very easy for developers to understand. And IT administrator have really fallen in love with this. 

And so when I say that Google Cloud Platform has an initial set of commandlets for a number of our most popular resources, everyone that does PowerShell and wants to use it with GCP is immediately interested and excited and understands the benefits and power of that. So that's the base. 

Now, what does it mean when we talk about PowerShell and open source? Well, Microsoft has been busy pushing a lot of their tools and technologies into the open source world. C# is open source, and its build. Visual Studio code, .NET itself has been made open source. And one of the things that they've recently made open source is PowerShell. 

And not only have they made it open source, but they've made it cross-platform. So you can in fact take PowerShell, that same kind of shell experience with the well-known verbs and the piping of objects from one command to another, and you can run that in a Linux world or on your Mac. 

And so what that means, then, is for all the commandlets to come along, the commandlets providers have to also support versions of their commandlets that are cross-platform. And so when Microsoft made this initial announcement for an open source, cross-platform version of PowerShell, they reached out to us. And we've been partnering with them. And we're one of a very small handful of companies that are actually on the leading edge here. 

We had advanced access to these technologies. And we're well down the path of making our same set of commandlets available to PowerShell on Windows, to making them available for Linux and the Mac, as well. 

FRANCESC: Nice. So it sounds like we're in a world where you can use PowerShell on Linux and BASH on Widows? 

CHRIS: Yeah. 

FRANCESC: That's amazing. 

CHRIS: That's exactly right. 

FRANCESC: That is pretty amazing. 

CHRIS: In fact, if you wanted, you could run BASH on Windows and then use the Linux version of the PowerShell commandlets on BASH on Windows. 

MARK: And then to run .NET inside of Linux, as well? 

CHRIS: To run .NET inside of the Linux that runs inside of Windows if you wanted, yes. 

FRANCESC: I think it is time to stop this conversation. 

[LAUGHTER] 

Before we finish, is there any topic that you'd like to discuss, something that we might have missed? 

CHRIS: There is just one thing that I'm super excited about that we just recently did. Jon Skeet talked about it in a keynote he did last week. And for Windows based listeners, Jon Skeet, of course, needs no introduction. He's number one for reputation on StackOverflow. So of all the people on StackOverflow, he's the first. And he's a Google employee. And he works on my team, working on all those great libraries that I was talking about to make sure that all of our stuff is accessible from Windows and from .NET Core. 

And he was busy showing off this brand new feature. We actually took .NET Core. And we made it one of the default run times available in the Cloud Shell. You guys know what the Cloud Shell is? 

FRANCESC: Yeah, we discussed it a little bit. 

MARK: Yeah, the interactive development environment that you can access straight from the website for the developer console for cloud. 

FRANCESC: Which is pretty awesome. 

CHRIS: Yeah, so the command line in the cloud is the Cloud Shell. And it comes packed with all of your language tools. It comes with your Python tools, and your Node tools. And it's got both kinds of editors. It's got VI and it's got Emacs. So you can do all your stuff there. 

We just recently added a web based editor. We're hosting the open source Orion editor so you can have access via a graphical editor to all the files in your desk while you're in Cloud Shell. But we just recently, and again within the last few days, added all the .NET tools. So that means that you can say .NET new, I want a brand new hunk of code. Then, I can say .NET restore, .NET run. I can host my .NET Core app inside of the Cloud Shell and see it run. Then, I can use the Orion editor to edit it. Then, I can package it up and ship it off to App Engine all inside the browser without having to use anything-- you could do the whole thing on a Chromebook if you wanted. 

MARK: Cool. Amruta, you got anything else to add? 

AMRUTA: No, it's hard to top that. But we're working on it, Chris. We'll have something pretty cool soon. 

CHRIS: We already have something cool! We just shipped Windows Server 2016 within days of Microsoft making it GA. That by itself is cool. 

AMRUTA: Yeah, and we're going to have support for Nano by the end of the year, too, which we're super proud of, the relationship we have with Microsoft, and the fact that we're working on builds before [INAUDIBLE]. 

CHRIS: That's great. 

FRANCESC: Awesome. Maybe we'll have you back then. 

AMRUTA: Yeah. 

CHRIS: That would be great. Always happy to come back. 

FRANCESC: That would be awesome. Well, thank you so much for taking the time to talk to us today about all the Windows thanks. 

CHRIS: Happy. 

AMRUTA: Thank you. 

MARK: Thank you very much. 

FRANCESC: So thanks again both to Chris Sells and Amruta Gulanikar. It was a pleasure to have Chris back. It's been a long time. He was here for episode number five. And he's back for episode almost 50. And yeah, thank you again to Amruta, too. Maybe we'll have her again in a couple hundred episodes. 

MARK: Yeah. 

FRANCESC: Who knows? So many episodes so far. Anyway, I think it's time to go with a question of the week. 

MARK: Yeah, so let's talk about that. So this is a great example of I think something that's happened to all of us. It works fine on my machine. But then you put it into production, and something goes haywire. There's a bug in the code. Maybe there's a threading issue. That's always the fun one that always bites me. 

FRANCESC: Oh, yeah. 

MARK: Or just something weird that you never even thought of. Is there a way I can go through and debug it in a way that lets me see what's going on inside the application? 

FRANCESC: So the interesting thing is that you cannot really debug it. Because a debugger basically stops process. So if you do that on your production jobs, that is not going to work. 

MARK: That generally it's pretty bad, yeah. 

FRANCESC: Yeah, that is a bad idea. So the solution to that is very often add log lines everywhere to understand what's going on, right? 

MARK: I've done that. 

FRANCESC: Yeah, me too. But that is actually kind of painful because you need to redeploy you app, and stuff like that. There's actually a much better way, which is using Stack Driver Debugger. And Stack Driver Debugger, even though it's called debugger, I'd rather not call it a debugger. Because instead what it does is it just takes snapshots of your job running in production. So you can get the stack trace of the whole thing that is executing, and also the values of the variables defined. Which means that you can basically have a snapshot of the whole status of your server at the moment you care about it. 

MARK: So it should really be called like the Stack Driver Snapshotter. 

FRANCESC: Snapshotter. Yeah, that sounds actually really cool. Yeah, yeah, so the cool thing about it is that it used to be beta. It is now GA. Give it a try. I know that I've used it in Go. Not for App Engine, because Go on App Engine still doesn't work, but we're working on it. But it does work for Go on Kubernetes on GKE and on GCE. So if you have some application there, it actually works really well. 

MARK: Yeah, and if you're a Java, Python, or Node aficionado, that works across Google App Engine as well as Compute Engine and Container Engine, as well. 

FRANCESC: So yeah, definitely worth checking it out. Next time you have a bug and you don't really know how to fix it, just try the debugger. 

MARK: Yeah. 

FRANCESC: Get all the data. And then, be able to reproduce it locally. Most of the time, that will work. 

MARK: Cool. So before we wrap up, Francesc, what are you up to? Where you going? What are you doing? 

FRANCESC: So I just released finally the latest episode of Just for Funk, again, a code review. And people are liking it. Got a lot of feedback, most of it positive. 

MARK: That's good. That's YouTube. You can only expect so much. 

FRANCESC: Yeah. And I'm going to be working on the next episode. But also next week, I'm going to Brazil. And I'm going to Brazil for the first time. Very excited about that. 

MARK: Cool. 

FRANCESC: I'm going to be speaking at GopherCon Brazil, which is in Florianopolis. And then after that, I will be on November 10th in TCP Next, Sau Paulo. 

MARK: Excellent. 

FRANCESC: So yeah, it's going to be lots of fun. What about you? 

MARK: So yeah, I'll be at GamerCon, game conference in Atlantic City on the 28th of October. Now, I was supposed to not be traveling in November. But I managed to snag a ticket to Unite, the Unity conference. So I will be there just attending, having a good time. So please feel free to come and say hello. 

FRANCESC: Sounds like lots of fun. 

Well, thank you again for having the time to teach me some Windows today, Mark. 

MARK: I had nothing to do with that. That was our guests. But yes, thank you so much for joining me as well, Francesc. 

FRANCESC: And thank you all for listening. 

MARK: All right. And see you all next week. 
{{< /transcript >}}