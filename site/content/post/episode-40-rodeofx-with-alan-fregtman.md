+++
audioDuration = "00:33:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.40.mp3"
audioSize = 48297185
categories = ["Rodeo FX", "Customer", "Preemptible VMs"]
date = "2016-08-24T01:07:49Z"
description = "Mark is back right on time to interview Alan Fregtman, a pipeline developer working at Rodeo FX. Alan will explain how Google Cloud Platform enables Rodeo FX artists to create amazing visual effects faster."
draft = false
episodeNumber = 40
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Rodeo FX with Alan Fregtman"
image="/images/post/rodeo.jpg"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/J6QLazKQEhE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4zda0i/episode_40_rodeo_fx_with_alan_fregtman/"
+++

[Mark](https://twitter.com/Neurotic) is back right on time to interview
[Alan Fregtman](http://twitter.com/alanwritescode), a pipeline developer working at
[Rodeo FX](http://www.rodeofx.com/en/home).
Alan will explain how Google Cloud Platform enables Rodeo FX artist to create amazing visual effects faster.

Rodeo FX is very well known for their work on Game of Thrones, Deadpool, and many others.
I recommend watching this demo video to get an idea of their talent.

<iframe src="https://player.vimeo.com/video/175620233" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/175620233">Game Of Thrones - Season 6 - VFX Breakdown</a> from <a href="https://vimeo.com/rodeofx">Rodeo FX</a>.</p>

<!--more-->

##### About Alan

In the industry for 8 years ranging from commercials work to tv series and now film,
[Alan Fregtman](http://twitter.com/alanwritescode) (also on [imdb](http://www.imdb.com/name/nm4729415/))
has been holding technical roles throughout his career, beginning as a character
rigger and currently a pipeline developer at Rodeo FX in Montreal, where he has
been for the last 4 years. He specializes in developing tools for the CG side of
the film visual effects pipeline, including Rodeo’s integration of the Google
Cloud Platform for use in cloud rendering.

##### Cool thing of the week

- Cloud SQL, Cloud Bigtable and Cloud Datastore are now generally available
- Improved performance, security and platform support for databases (Low-latency for Google Cloud Storage Nearline storage)

[Announcement](https://cloudplatform.googleblog.com/2016/08/why-Google-Cloud-Platform-is-ready-for-your-enterprise-database-workloads.html)

##### Interview

- [Rodeo FX](http://www.rodeofx.com/en/home) has worked on many shows: [demo](https://vimeo.com/175620233)
- GCE Custom Machine Types to adapt to the movie needs [docs](https://cloud.google.com/compute/docs/machine-types#custom_machine_types)
- Preemptible VM instancesc for their reduced cost [docs](https://cloud.google.com/compute/docs/instances/preemptible)
- Salt Stack to keep all machines configured [docs](https://saltstack.com/)
- FDT: Fast Data Transfer for really fast transfer of ... data [docs](http://monalisa.cern.ch/FDT/)
- Creating a Google Cloud VPN [docs](https://cloud.google.com/compute/docs/vpn/creating-vpns)
- GlusterFS to manage their in-house file system [docs](https://www.gluster.org)

For more information:

- How GCP helps Rodeo FX extending their rendering capacity, presented by Jordan Soles [YouTube](https://www.youtube.com/watch?v=bPg4qYMhDWo)
- Videos by Rodeo FX on [vimeo](https://vimeo.com/rodeofx/videos)

##### Question of the week

How to create a Managed Instance Group from a VM?

1. Delete your instance keeping your disk
1. Create a custom image from your disk [docs](https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images)
1. Create a new Instance Template with them image
1. Create an Managed Instance Group with the template

What if you can't delete the instance?

1. Create a snapshot from your running disk [docs](https://cloud.google.com/compute/docs/disks/create-snapshots)
1. Create a new disk from the snapshot
1. Go to step [2] above

{{< transcript "FRANCESC: Hi, and welcome to episode number 40 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. I'm back. 

FRANCESC: Yeah, welcome back. 

MARK: It was a short hiatus. I was very sad. I was sad to be gone, but I'm glad to be back. 

FRANCESC: No, it was good. I got a different Australian. You know, I could not even tell the difference, really. So, yeah, don't worry. Don't worry. You can leave again, it's fine. 

MARK: Change is as good as a holiday, I guess. 

FRANCESC: Yeah, we have many Australians to replace you, so it's fine. 

MARK: Good to know that I'm loved and adored. 

FRANCESC: No, no, no, no. I'm very, very happy you're back. So today we're going to have an interview with someone that works for Rodeo FX. 

MARK: Yeah, really cool company that does some really cool stuff. 

FRANCESC: It is a pretty amazing company. I've seen a couple videos of their demos, and basically, they do visual effects, special effects, for some people that you might have heard about, like, I don't know, "Game of Thrones". Maybe you've heard about it. 

MARK: "Deadpool". 

FRANCESC: Yeah, you know, it is pretty amazing. 

MARK: Yeah. 

FRANCESC: There's a couple videos. We'll put the links on the show notes, as usual, and this time I really recommend you to go check them out, because they're pretty amazing, to be honest. 

MARK: They're awesome. They're awesome. 

FRANCESC: And after that, we'll end up, as usual, with the question of the week. And the question of the week today is about-- it's something that you actually came up with. 

MARK: Yeah, well, I can't take credit. It was from the site community. We were talking about it on there, talking about computer engine instances, how to create an instance group from an already existing Google Compute Engine virtual machine. 

FRANCESC: Cool. That is actually something I've done before. 

MARK: Yeah, yeah, cool. 

FRANCESC: Yeah. It is fun. 

MARK: I've done it before, because I helped someone do it. So it was a good time. 

FRANCESC: Cool, so yeah, we'll talk about that at the end of the episode. And now we are going to talk about the cool thing of the week. 

MARK: Yeah. 

FRANCESC: And actually, it starts a bit like as usual. It is not one cool thing of the week, but a bunch of them. 

MARK: There are too many cool things. 

FRANCESC: Yeah. There's too many cool things. We need more episodes. Maybe we should do these episodes daily. 

MARK: Don't, don't. 

FRANCESC: No. 

MARK: No, no. 

FRANCESC: No, I think we're fine. So yeah, we have three products that are now generally available. So they're out of beta and you can now use them with SLAs and all that stuff. So we have Cloud SQL, Cloud Bigtable, and Cloud Datastore. So three different ways of storing data, which is pretty amazing. 

MARK: Yeah. So just be clear, as well, so that's Cloud SQL the second generation. 

FRANCESC: Yeah. 

MARK: Which has way more power than the first one. Hugely, hugely cool. 

FRANCESC: It is incredibly fast. 

MARK: Yeah. Incredibly, incredibly fast. And Cloud Datastore, which, I mean that's been around for a while, but is now generally available to everything outside of App Engine. 

FRANCESC: Yeah. I think it's the REST API that is, because if you were using it from App Engine, it was already generally available from a long time ago. But now, if you're using it from outside of it, the API itself is now generally available, too. 

MARK: Which is cool. And Bigtable is just, well, it's Bigtable. It's always been really great. 

FRANCESC: Bigtable is amazing. It is really big. 

MARK: Really big. 

FRANCESC: Yeah, yeah. And on the other side, there's also a bunch of different things. And we're going to link to this. But there's one more thing that I wanted to mention, because I was actually really impressed, which is Google Cloud Storage Nearline, it is much faster than before. 

MARK: So quick overview. Google Cloud Storage Nearline, where you want to archive long-time data, probably aren't going to touch it very often. 

FRANCESC: Mostly logs, backups, and stuff like that, that you don't really care about them until you care about them. And then, at that date, you will get like, oh, yeah, I want the backup from like a year ago. You want it to be there, really. 

MARK: Yep. 

FRANCESC: So yeah, I think the technical name is "infrequently accessed data". 

MARK: Ooh. 

FRANCESC: Yeah. And normally, there's competitors that propose things like this, and it takes a couple hours to retrieve that data. From the beginning, Google proposed a solution that was a couple minutes instead. Then we went down to seconds. 

MARK: That's a  bit better. 

FRANCESC: And now it is as fast as normal cloud storage. 

MARK: That seems just right. 

FRANCESC: Yeah. Which is pretty amazing, because it's really fast. I would say it's probably around a couple hundred milliseconds, so yeah. 

MARK: As soon as you want that data is as soon as you're getting that data. 

FRANCESC: Yeah, that data is there. So that is pretty amazing, and I was so impressed that I decided to talk about it today. But there's many other things. So go check it out. We have a link to an announcement with a bunch of new things that happened this week. 

MARK: Fantastic. Awesome. Well, why don't we go have a chat with Alan, and hear all about visual effects in Google Cloud Platform. 

FRANCESC: Sounds good. Let's go with that. 

MARK: We are joined today by a gentleman named Alan Fregtman from Rodeo FX. How you doing today, Alan? 

ALAN: Hello. 

MARK: Thank you so much for joining us on the podcast. Do you want to tell us a little bit about who you are and what you do at Rodeo FX? 

ALAN: So my name's Alan. I'm a pipeline developer at Rodeo FX. The company has been around for about 10 years, and I've been there for four, and it's grown a lot since I've been there. I initially started as what's known as a rigger, which is the guy who articulates the characters, or vehicles, or such. And slowly, in the last couple of years, I've been doing more of a developer role, doing more coding, mostly Python. 

It's really exciting. The studio has grown from like 50 people to like 300 and something in a couple of years. It's crazy. 

MARK: So I can get a bit of an inkling from the name of the company, but what exactly does it do? 

ALAN: Yeah, so we do visual effects for film and high-end TV series. We've done some work for the last three seasons of "Game of Thrones", and the occasional commercial, but mostly film. We did some work on the last "Star Trek"s, and some work on "Deadpool", "Birdman", "The Last Tarzan", "Fantastic Beasts"-- which is about to come out soon, lots of creatures in that one, really exciting-- and some old stuff, like "Pacific Rim" and "Edge of Tomorrow". 

FRANCESC: Old stuff. 

MARK: Old stuff. 

ALAN: Yeah. 

FRANCESC: That is pretty awesome. 

ALAN: Well, it seems old by my timeline. 

FRANCESC: No, those are awesome. So when you describe yourself, you use the term "pipeline developer". 

ALAN: Yeah. 

FRANCESC: What is that, exactly? 

ALAN: The pipeline, in my industry, is basically the flow of data from one specialty to another, so to speak. So there's a lot of specialties in visual effects. You can really not-- it's really hard to be a one-man shop. You've really got to specialize, and it goes through modeling, texturing, shading, rigging, animation, lighting and layout, and eventually compositing. 

And to get everything to be versioned, and to flow, and to import and export, and all the statuses of everything, and everything to be up-to-date, and correct, and valid, and follow convention, there's this term of the pipeline, which is basically the conglomeration of tools. It's kind of like if the tools were neurons in a brain, the mind would be the pipeline. It's sort of like the abstract, all encompassing concept. And a pipeline developer basically works towards making the flow of the information smooth. 

FRANCESC: Cool. So could you tell us a bit about what kind of tools or what kind of products you use to make these happen? 

ALAN: Specifically Google's, or in general? 

FRANCESC: No, in general. What kind of tools? 

MARK: Yeah, what does the process look like? Somebody comes to you and they're like, hey, we want this scene shot in a movie, where does-- how does that look? 

ALAN: So initially, there's a bidding process, where studios say how much they will cost to do a particular shot. Then it's up to the client to decide who to give what to, based on their reputation, and their funding, I suppose. Once we get a shot and it's confirmed, then we usually receive the plates. Those have to be-- they have to go through what's known as matchmoving, which is where some very, very careful people track the motion of the camera with some specialized software. That is not entirely automatic, unfortunately, and there's a lot of manual work to get that going. 

And once we have the camera, then we can start creating creatures, and vehicles, and whatever kind of replacement or enhancement that the shot requires. And those have to go through other various stages. Initially, with modeling-- well, obviously concept art. If there's no concept, there's nothing to model. 

But initially, modeling. Then it needs to be textured at some point. That can usually go in parallel. And eventually, that goes into the hands of riggers, which is what I used to be. And those guys, they articulate and add controls for the animators to use to bring stuff to life, be it a creature, or a prop, or an awesome robot, or whatever. 

And then, at the same time, there's also occasional enhancements by-- well, I say occasional. It's not really. There's a lot of enhancements of simulations that happen, either water splashes, explosions, rocks falling, all kinds of stuff, that the effects department does in parallel, while everyone else is trying to do the creatures, vehicles, or props. 

And then eventually, it all comes together, with the help of the lighters, then the render farm, or hybrid render farm, part-cloud/part-local. And it goes into the hands of the compositors, who then composite the final layers together, and make the beautiful, consistent look throughout the whole thing. And then that gets delivered to the client, and they add music and do the edit. 

FRANCESC: Wow. So out of my experience-- I've done some rendering of videos, and there's two problems with that. It takes forever, and you end up with huge files. How do you make it happen? I mean I'm imagining that to make a dragon look real, that's a lot of gigabytes and a lot of processing. How do you make these actually happen? 

ALAN: Yeah. Well, we have a lot of storage on-premise. We have a mix of different filers that we have acquired through the years, and it's all presented through a caching appliance that we have, as one common place for the mounts. And it's many hundreds of terabytes. It's really intense. 

And some of the stuff that we do in the pipeline to try to minimize the duplication is like to do symlinks when stuff gets versioned but it doesn't really change. For example, when the textures get versioned again and only one bit of somewhere on the thing changed, then we try to symlink so that we don't have to copy so much data. 

We try to keep it light. Obviously, not always the case, but we do what we can. And of course, we use the cloud to be able to render really massive, massive things. 

MARK: OK, so you're saying-- OK, you mentioned that you've got a lot of storage and CPU on-prem. So where does the cloud-- where does Google Cloud Platform come in? 

ALAN: Yeah. So we do a lot of different movies at the same time. A lot of different shows, we call them. It could be anything from four to a dozen shows, in different stages of production. And from time to time, usually at the end of the week, there will be some kind of delivery to the client. Because you deliver things as you start to complete them, or at least you deliver semi-finished versions that look better and better. 

And it's very important that those deadlines must never, ever, ever be late. Those are set in stone and you must deliver. And so my wise boss saw the storm coming, so to speak, and he knew that-- about maybe a year and a half ago or two years ago, he saw it coming that we would get to the point where we just didn't have enough hardware to make everyone happy, and it would come that we would have a Friday where we could not actually deliver what we had to deliver. And we would disappoint the client and be in a bad position. 

And so he tasked me a long time ago to work on an implementation that would work together with our current render farm software, in such a way that is relatively seamless for the artist, because it just shows up as another render node. It's not its own separate thing. It's not a whole other completely isolated, brand-new system, per se. It sort of comes as part of the same network as the current farm, so it almost gets treated as if it was a neighbor, so to speak. 

MARK: And then what, you're able to use that to expand your capabilities and use that elastic cloud to grow as you need it? 

ALAN: Yeah. Once we had everything configured more or less right, you can very easily-- we were using the managed instance groups feature, and we have a few common templates for different specs. And usually, we do different specs for different shows, depending on how much they require. And we really-- we use a lot the custom instance, where you can drag-and-drop the number of cores and amount of RAM. 

MARK: Oh, nice. 

ALAN: Ever since that was an option, we've been using it a lot, and we always use custom instances. Because sometimes you don't really need all that much RAM, but we need more cores. And I'm excited to say that the cloud machines-- the top of the cloud machines are considerably better than what we have on-premise. 

MARK: Nice. 

ALAN: And it's an ongoing race. The second that we-- it's very expensive to do a massive upgrade of, whatever, 200 nodes that we have locally, and get them all to the latest specs. And then within a few months there's something new. And having the cloud being able to burst so easily in a matter of seconds, you can launch hundreds of machines, and it's so fast and so effortless that it's a great thing to have when you really need to burst, and you need the resources to finish the computation of producing those images. We use a renderer called Arnold, which was recently acquired by Autodesk. And we do most of our work in Autodesk Maya, and effects in Houdini, and compositing in Nuke. 

FRANCESC: Cool. So as soon as you started to talk about rendering, preemptible machines came to mind. Is this something that you use, or have you considered using it? 

ALAN: Yes, we actually do use them. We don't use them exclusively, because at the moment, it's up to the discretion of the wrangler-- which is the human being managing the farm or overlooking the farm-- it's up to their discretion how many machines should come up, depending on what our resources are. We have a fair number of licenses, but we only have so many. 

So sometimes we'll need a bit more on local, then a bit more on cloud. It all depends. It fluctuates a lot, and it's a hard task to do programmatically. So for now, we need the human element of a wrangler to make the call. Now, that said, we do have a script so once the machines come on and they become idle, they start to die very quickly. 

One of the great things with the Google Cloud is the per-minute billing. I know there's a 10-minute minimum, but after that, it's per-minute. And we have a script that, after the second idle minute, the machine dies. So we really try not to waste any of the resources. 

But to start them, we-- at one point, we had given the artists the ability to start their own machines, and they got a little crazy. They would start a few too many. And we quickly realized that it had to be overlooked by someone. 

FRANCESC: Cool. So I'm imagining that at any point, you have a decent number of machines running. How do you make sure that they all have a good configuration? How do you manage the software install, licenses, and all that stuff? 

ALAN: Just before that, I just remembered one thing about the preemptibles. We do use them. The thing is that we don't use them exclusively, because the way that they work is they will die eventually, without notice. 

But while the wrangler is physically present at work, we will try to use them as much as we can. And then when they leave for the night, we will do a switch, and we'll start some regular VMs. That way, we know that that's going to be some VMs left, just to be totally, totally sure. 

MARK: It that so if they happen to shut down while the person is looking, they can manually restart them? 

ALAN: Yeah. Yeah, basically that, because they're more likely to survive. But during the day, we use them as much as we can, when we use the cloud. And so to go to the next question that you just asked, we coordinate all the configuration with SaltStack. I don't know if you're familiar with the technology. 

MARK: Can you explain? Explain for our listeners, for people who aren't as familiar with it. 

ALAN: Yeah. It's a configuration and deployment tool. The core is written in Python. And I like Python, so I like it. It's quite configurable, and really, really flexible. It's very straightforward. I mean there's other things like Ansible or Chef. They're similar. I haven't tried many of the others, but I really like Salt. 

It's very easy to configure. It's all based on YAML files, which are very human readable. You can have conditional templating in multiple masters, if you want. It's quite flexible. 

And so we actually use-- for example, we query some of the VM metadata on the machine to configure itself. So we set some tags and some basic environment variables, some metadata variables. And we use those to, for example, configure which show the slave will be for. And that's using Salt to read the metadata, to then configure the machine on first boot. 

MARK: So like you were talking about the person who's working on the show, they can fire up machines, and they can then specify like, hey, I need these resources, and then Salt will go off and configure those resources for them. Does that sound about right? 

ALAN: Yeah. Basically, we use the managed instance groups with custom templates. We keep cloning sort of a default template. We change a few attributes for the specs, and what show-- what we have a code name for each show-- what code name it will be for. And then, those machines will launch, given whatever number you request of them. They will appear, and they will begin taking jobs from those shows. 

MARK: Cool. So you've been talking about how you have an on-prem and cloud sort of shared solution. 

ALAN: Yeah. 

MARK: How are you-- I'm guessing there are some assets that will need to go up and down. How is that managed? What sort of the challenges have you got there? 

ALAN: Yeah, so initially, we tried stuff like Rsync, and maybe even SCP. They were just not fast. It's very single-threaded. It works, but it's really not fast. 

And then I start looking at options, and there's a few that sort of flood via UDP to maximize the throughput. But the one that really took the cake for me was a piece of technology from the guys at CERN, the supercollider people. They have a software called FDT, which is very originally called fast data transfer, and it's made in Java. 

They don't provide the source, so it's not technically open source. But it is free to use, and it's incredibly fast. You can use it over a VPN SSH tunnel, or directly, if you want. 

And basically, it's a bit like Aspera if you know what that is. A lot of people use it in my industry, but Aspera is very expensive. FDT is the same idea, it's a flood of UDP packets that maximize your pipe, and it's extremely concurrent. You can start hundreds of threads with a bunch of data, and it all arrives at the same time. It's so far the only tool that we've seen that can really absolutely maximize our gigabit type that we have going to the internet. 

MARK: Are you able to share how fast you're able to get some data transfers, or I things you may have seen? 

ALAN: Well, we only have a gigabit internet at our studio at the moment, and we pretty much fill it up. We get like 800 to 900 megabit on-site. And we had a few times when I was getting started with this technology that I accidentally choked the network, and for a few seconds we lost internet, because it was too fast. Which I guess is a good problem to have. Better than too slow. 

MARK: Cool. So now I'm also curious. I guess you probably work on some relatively big-budget and somewhat secret type projects. 

ALAN: Yeah. 

MARK: What do you have in terms of security? What sort of considerations have you had that way to make sure everything is not public to the internet, probably in any way, shape, or form? 

ALAN: Yeah, we try to. Well, we use the Google Cloud Platform firewall to pretty much block all access except to the IP from Montreal. That's one thing. And we try to use VPN wherever possible. And we believe that's reasonably secure. 

FRANCESC: So how are you using VPN? Is that so the machines that are on the cloud are able to access the on-prem storage, or do you use it for some other things? 

ALAN: We use it for licensing. For licensing, and to actually talk to the farm software. We use a software called Qube, with a Q. It's from a company called PipelineFX. It's quite flexible. We have used it for many years now, and we have customized it a lot. 

And it's not rocket science. It's basically a queue manager. And people make jobs, they give them attributes, they give them what cluster they should go for, how much RAM they should have, and so on. And the machines appear just the same as the machines on the local machines appear. 

The cloud ones are just in the same place, in the same interface, the same everything. So it's quite seamless. The only thing is that we require having an upload of the things that are required by your scene file, which is like one extra job. And we require one extra download job, so that the files, as they complete, they get downloaded back. And we use FDT for that, and it's very, very fast. 

FRANCESC: What is the process for someone to be like, oh, we have this scene that we need to process right now very fast. Do you have to turbo button or something-- 

ALAN: Oh, I see. 

FRANCESC: --to start a bunch of instances, or something like that? 

ALAN: We do not have a turbo button. But basically, when you submit a job to the cloud, it's the same as submitting a job locally. There's just a check box that says, use the cloud. 

FRANCESC: OK. 

ALAN: And it just configures the job differently. It scans for the dependencies of the thing that you're rendering. Tries to find all the terabytes worth of textures and models, and cameras, and animations, and puts it in pick upload job through FDT, and then submits to the farm, just as it would be without the cloud. 

FRANCESC: Cool. So we're kind of running out of time. But is there anything else that you would like to mention, or something that we have forgotten? 

ALAN: So an interesting thing, I guess, I'd like to mention, is that we're using GlusterFS for our storage solution on the cloud. It's an open source project that allows very, very easy distributed, redundant storage across multiple machines. In this case, we use VMs. And it's a way to get faster reads than just one machine/one disk. 

And it allows us to scale really easily. It's very easy to add more-- they call it bricks-- more units of storage. It's sort of like adding more disks. And it makes it very easy and very fast, and it's open source. It takes like 10 minutes to get started to do your first shared volume. It's really quite wonderful. 

And I had tried, the very first time that I started on the cloud. I tried to see, how fast could I get just one machine with an NFS share, that would be just shared to a few machines. And after something like 40 machines, it was just too much. It just couldn't take it. And that wasn't Google's fault. It's just NFS is really not the way to go. 

One node cannot store all your storage. That's not going to scale. But now we have-- at the moment, we have like six storage nodes. And they're all sharing several terabytes worth. And it's very fast. It's comparable to what we have locally. 

MARK: Out of curiosity, you didn't use Google Cloud Storage because GlusterFS gives you some other capability or something? Or what's the deal there? 

ALAN: Well, we didn't use the-- there's an open source project to mount the Google Cloud Storage, but it's not super stable or super tested, so I did not trust it for serious production. And Gluster just allows us to have a safe, redundant, shared volume that something like NFS would not be able to give us. Without having something to mount the Google Cloud Storage, we can't directly use it. So we use it as sort of a transitional place, or as a place for backups, and stuff like that. 

MARK: That's right. Cool. Well, Alan, thank you so much for joining us. That was really interesting. 

ALAN: Thank you. 

MARK: The world of VFX is something that I know nothing about, and so it's very interesting to be able to see behind the curtain a little bit. 

ALAN: Great. 

FRANCESC: Yeah, very cool. Thank you so much. 

ALAN: Thank you. 

FRANCESC: So thanks again to Alan for such an interesting interview. I know the next time I will go to the movies, I will be checking out, is this actually rendered, is this real? It is pretty amazing what they're able to do nowadays. 

MARK: Yeah, absolutely. There's definitely a few movies that they've worked on that now I want to go see, so that's pretty cool as well. Awesome. 

So why don't we get stuck into the question of the week, which comes from the wonderful community members from the Google Cloud Platform Slack channel. We were talking on there the other day about, say, you have a Google Compute Engine virtual machine instance, you have it up and running, and you think to yourself, ooh, I'd love to be able to scale this. So what I want to be to do is create an instance group, which lets me scale that up and down real easily. Is there a way that I can create an instance group from an already running VM? 

FRANCESC: So I actually had to do this a long time ago for a demo, which is actually open source, and we've talked about it before. It's called Abelana. And basically, when I was in the development phase of it, I created an instance, and then I installed ImageMagick on it. And installing ImageMagick was actually a couple-- it took me some time. Then I realized that you could do sudo apt-get install. 

MARK: Yeah. 

FRANCESC: Whatever. But it took me some time to get the whole environment working correctly. And the next step is like, oh, OK, so now I want to have this instance but just running more of them. And it is actually quite simple if you are in development phase and you can read that in a sense it is pretty simple. 

You can delete the instance but making sure that you do not delete the disk attached to it. And then you can create a new image from that disk. And now, when you create your instance template in the managed instance group, you can use that new image that you just created. So with that, you're good. 

MARK: Yeah. That's not too many steps. 

FRANCESC: That is pretty simple. So from your instance with the disk, you deleted the instance. Because to create a new image, you need a disk that is not attached to anything. 

MARK: Yep. 

FRANCESC: So you first delete the instance without deleting the disk, then create an image, and then from there, the template. 

MARK: So if we have a VM that's running, and you still want to be able to work on it, though, and you don't want to delete it, what do we do then? 

FRANCESC: So that is when it becomes a little bit more complicated. Because basically, what you need to do is an extra step to generate a disk that is not attached to anything. And to do that, there's a little trick that I did not know about, but you told me, which is create a snapshot from the disk, and then a disk from the snapshot, and then the rest is the same. 

MARK: The rest of the same. So you can create your image, you can get your instance template, and you're away to go. 

FRANCESC: Yep. It is actually pretty simple, and that way, you're able to go, basically, from your prototype to something that actually scales, and you can do whatever you want from it. Which is the normal development process that I use. The next step is normally, oh, so now that everything is already in instances, maybe I will use containers and move to a container engine, and stuff like that. 

MARK: Yeah, but maybe you work on VMs, that's where you're at, and that's totally cool. 

FRANCESC: And that is totally fine, yeah. 

MARK: Yeah, that's great. Awesome. So thank you very much for another episode, Francesc. Are you going to be anywhere exciting in the coming weeks? 

FRANCESC: Not really. I'm actually going to stay in San Francisco, working on my videos and working on a couple things that I want to do. 

MARK: Do we have some more episodes of "Just for Funk" coming up? 

FRANCESC: So I published one, and there's a couple more that I'm editing right now. And if you have any ideas about things that you'd like to have on that series, send them my way. I'm always curious about it. 

MARK: Excellent. 

FRANCESC: What about you? 

MARK: So I'm going to be kind of attending a couple conference is coming up, actually, which is a bit weird for me, and that's kind of fun. 

FRANCESC: That feels good, though, when you go to a conference and you don't have the pressure of speaking. 

MARK: Yeah, so-- 

FRANCESC: So good. 

MARK: --I'll be at PAX Dev. I'll be just attending that. So hanging out with a bunch of gamers, which is something I love to do. And then I'll be off to one of my favorite conferences, which is Strange Loop, in St. Louis in September. There's some Non Session stuff. I may end up doing a little bit of something there. We'll see how that goes. But I'll definitely be there. That's not an event I would miss out on. 

FRANCESC: Very cool. So we have not done it in a while, so maybe we should remind our listeners how to get in touch with us. 

MARK: Yes. 

FRANCESC: So there's a bunch of ways to do it. We have a web page. 

MARK: Yeah, it's GCPPodcast.com. 

FRANCESC: Or? 

MARK: Cloud.google.com/podcast. 

FRANCESC: Good. 

MARK: Foof. 

FRANCESC: Also we have an e-mail. 

MARK: Hello@GCPPodcast. 

FRANCESC: We are on Twitter. 

MARK: @GCPPodcast. 

FRANCESC: On Google+. 

MARK: At +GCPPodcast. 

FRANCESC: On Reddit. 

MARK: At /r/gcppodcast. 

FRANCESC: And finally, also, we have the channel podcast on the Google Cloud Platform Community Slack channel. 

MARK: Slack channel. Yeah. 

FRANCESC: There you go. 

MARK: Absolutely. 

FRANCESC: That's a mouthful. 

MARK: It is, a little. All right, well, yes, thank you so much again for joining me. 

FRANCESC: Thank you, and thank you to all our listeners for being there. 

MARK: Yeah, and see you all next week. 

FRANCESC: Yep, talk to you all next week. 
{{< /transcript >}}