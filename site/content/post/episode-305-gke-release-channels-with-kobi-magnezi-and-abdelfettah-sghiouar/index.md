+++
audioDuration = "00:47:55"
audioFile = "Google.Cloud.Platform.Podcast.Episode.305.mp3"
audioSize = 69017338
categories = ["GKE", "Kubernetes"]
date = "2022-05-25"
description = "Kaslin Fields and Mark Mirchandani learn how GKE manages their releases and how customers can take advantage of the GKE Release Channels for smooth transitions."
draft = false
episodeNumber = 305
hosts = ["Mark Mirchandani", "Kaslin Fields"]
title = "GKE Release Channels with Kobi Magnezi and Abdelfettah Sghiouar"
image="/post/episode-305-gke-release-channels-with-kobi-magnezi-and-abdelfettah-sghiouar/images/hero/hero-EP-305.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/uxmtic/episode_305_gke_release_channels_with_kobi/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Kaslin Fields](https://twitter.com/kaslinfields) and [Mark Mirchandani](https://twitter.com/markmirch) learn how GKE manages their releases and how customers can take advantage of the GKE release channels for smooth transitions.  Guests [Abdelfettah Sghiouar](https://twitter.com/boredabdel) and [Kobi Magnezi](https://twitter.com/magnezi) of the Google Cloud GKE team are here to explain.

With releases every four months or so, Kobi tells us that Kubernetes requires two pieces to be managed with each release: the control plane and the nodes. Both are managed for the customer in GKE. The new addition of release channels allows flexibility with release updating so customers can adjust to their specific project needs. Each channel offers a different updating mix and speed, and clients choose the channel that's right for their project. The idea for release channels isn't a new one, Kobi explains. In fact, Google's frequent project releases, while keeping things secure and running well, also can be customized by choosing from an assortment of channels in other Google offerings like Chrome.

Our guests talk us through the process of releasing through channels and how each release marinates in the Rapid channel to be sure the version is supported and secure before being pushed to customers through other channels. We hear how release channels differ from no-channel releases, the benefits of specialized channels, and recommendations for customers as far as which channels to use with different development environments. Abdel describes real-world use cases for the Rapid, Regular, and Stable channels, the Surge Upgrade feature, and how GKE notifications with Pub/Sub helps in the updating process. Kobi talks about maintenance and exclusion windows to help customers further customize when and how their projects will update. 

Kobi and Abdel wrap up with a discussion of the future of GKE release channels.

##### Kobi Magnezi

[Kobi](https://twitter.com/magnezi) is the Product Manager for GKE at Google Cloud.

##### Abdelfettah Sghiouar

[Abdel](https://twitter.com/boredabdel) is a Cloud Dev Advocate with a focus on Cloud native, GKE, and Service Mesh technologies.

##### Cool things of the week

* GKE Essentials [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg)
* KubeCon EU 2023 [site](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe-2023/)
* KubeCon Call for Proposals [site](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/program/cfp/)
* Kubernetes 1.24: Stargazer [site](https://kubernetes.io/blog/2022/05/03/kubernetes-1-24-release-announcement/)
     * GCP Podcast Episode 292: Pulumi and Kubernetes Releases with Kat Cosgrove [podcast](https://www.gcppodcast.com/post/episode-292-pulumi-and-kubernetes-releases-with-kat-cosgrove/)
* Optimize and scale your startup on Google Cloud: Introducing the Build Series [blog](https://cloud.google.com/blog/topics/startups/introducing-the-build-series)
 
##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Autoscaling with GKE: Overview and pods [video](https://www.youtube.com/watch?v=7naCIxIaV1M)
* GKE release schedule [dcos](https://cloud.google.com/kubernetes-engine/docs/release-schedule)
* Release channels [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
* Upgrade-scope maintenance windows [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/maintenance-windows-and-exclusions#scope_of_maintenance_to_exclude)
* Configure cluster notifications for third-party services [docs](https://cloud.google.com/kubernetes-engine/docs/tutorials/cluster-notifications-slack)
* Cluster notifications [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-notifications)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Agones [site](https://agones.dev/site/)

##### What's something cool you're working on?

Kaslin is working on [KubeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) and new episodes of [GKE Essentials](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg).

{{< transcript "[MUSIC PLAYING] KASLIN: Hello, and welcome to episode number 305 of The Weekly Google Cloud Platform Podcast. I am Kaslin Fields, and I'm a developer advocate here at Google Cloud, where I focus on GKE and open-source Kubernetes. And I'm here with my colleague, Mark Mirchandani." >}}

MARK: I love that you-- I feel like we've had you on the podcast a lot, over the past couple of weeks. People are going to be like, oh, we know who Kaslin is. 

KASLIN: I hope so. 

MARK: But I like that you put the professional introduction in there. 

KASLIN: And would you like to introduce yourself? Is that even necessary at this point? 

MARK: Well, yeah. How many of these episodes have I been on. Hi. I'm Mark Mirchandani, and I enjoy things and stuff. 

I feel like that's the only professional introduction I could come up with. I do things in the Cloud, usually. I feel like that's a pretty accurate summation of what my job is. 

KASLIN: Perfect. I believe that is the intro. 

MARK: That's it. We're done. Call it a day. Call it a wrap. 

KASLIN: So we have a really exciting bunch of content today that we're going to be talking about GKE release channels. I know this was a new topic for you, Mark, and I think you'll learn a lot of really cool stuff today. 

MARK: Yeah. Absolutely. It was such an interesting conversation, because I have very little familiarity, but it was really curious to hear a lot about the, obviously, how Kubernetes handles its releases. And then how we brought some of the typical Google experience into, hey, how do we take this? 

How do we scale it out? How do we make it work for customers? And so a lot of our conversation really drives around GKE managing releases and what customers should think about, when they're choosing a release channel. 

KASLIN: And that's really hard, and we'll go into this more in the content. But I kind of want to reiterate it, before we even get into it, is that Kubernetes has a lot of releases. They used to do four releases a year, and now they're doing three releases a year. 

That was a relatively recent change, but still, three releases a year is a lot to keep up with. A lot of businesses don't have to keep up with that kind of pace, normally. So having to figure out how to do that with their Kubernetes clusters is really, really difficult. 

So the folks at GKE realized that, and they understood that. And so they created this concept of release channels, in part to help businesses be able to manage those releases and stay up to date. Because you have to be within two minor releases for the control plane and the nodes, and there's all these considerations basically around making sure that your Kubernetes cluster is in a supported state. So we're going to go into all those details in our content a little bit later. But first off, let's talk about cool thing of the week. 

[MUSIC PLAYING] 

So one cool thing of the week that I want to go over is I am part of this YouTube series that we call "GKE Essentials," where we go over the basics, the essentials that you need to run your GKE clusters effectively. And we are doing our second season of content for that. We'll put a link in the description. 

The first episode of our second season of content on that is going to be out sometime around the time of this video. It should be out before this podcast comes out. So if you're listening to this, there should be a new episode of "GKE Essentials" for you to watch, and there will be several more coming soon, depending on when you're listening to this. But definitely, check out "GKE Essentials" either way, because it's good stuff, if you ask me. 

MARK: If we ask the person who wrote it, it's a good thing. No. I love "GKE Essentials," and we've done a lot of work in that space. And of course, it's a tremendous opportunity that you and Anthony have been working on for a while, to create a whole bunch of different Kubernetes-focused content. 

And I think there's just a huge appetite for it. That's why we're always talking about GKE and helping people get started and understand it. Because it's both a very complex space, and there's a lot to learn there, and because the demand for Kubernetes and Kubernetes-related things it's just growing and continuing to grow. So I definitely think this is one of the more fun and awesome video series that we get to work on. It's just so great to see. 

KASLIN: Yeah, and speaking of awesome Kubernetes content, whenever you're listening to this should be sometime after KubeCon EU. So definitely check out some of the announcements that happened at KubeCon EU. I'm sure there's tons of interesting stuff to go check out all across the board. So definitely check that stuff out. 

And also, speaking of KubeCon, also the KubeCon NACFP closes at the end of May. So depending on when you're listening to this, you may still have a chance to get something in for the CFP, and you may not. I don't know. 

MARK: Are you going to have a-- I know you were involved a lot with KubeCon EU. Are you going to be involved with NA KubeCon as well? 

KASLIN: Yeah. Somehow. I don't know what that'll look like yet. I don't know if I'll submit a talk or just be there. I'm also a C and CF ambassador. So I often do a lot of volunteering at the KubeCon Cloud Native Con events. So I will be involved with it and probably be there in some capacity. 

MARK: So if you see Kaslin at KubeCon EU-- actually, no, KubeCon NA, or if you saw Kaslin at KubeCon EU, give a good socially distanced high-five. I think that's the appropriate human interaction at this point. 

KASLIN: Sounds perfect. And one more thing that I want to mention on the cool thing of the week Kubernetes front is the 1.24 release is out now. We had an episode of a bit back with Kat Cosgrove, where we talked about the changes coming up in 1.24, because she was part of the release team for 1.24. 

We talked a bit about the Dockershim kerfuffle, people not understanding what the removal of Dockershim means. Essentially, to recap that, it means that the tool that was originally used for Kubernetes to use Docker as your container runtime, within your cluster, has gone away in 1.24. You can still use Docker containers. They actually use container D as their own runtime. 

It's this weird issue where Docker is more complex than Kubernetes really needs to be able to run your containers. So it's a matter of how your Kubernetes cluster is set up. So if you run clusters from scratch, you might be affected, but the majority of clusters, like GKE uses container D and has for a while. So it probably doesn't affect you, but definitely check out 1.24 to see what's new in Kubernetes. 

MARK: Yeah. I think it's definitely worth listening to that episode, because first of all, Kat's awesome. But then second of all, like she spends a lot of time talking about this-- kerfuffle is a good word for it. And really, it's not nearly as big of a deal as it seemed like it was, and I think that-- naming things is so hard, and maybe this was a bad choice in naming things. But anyway, Kat really does a great job of breaking it down. So if you're affected by that, which you're probably not, but you're probably interested by it, check out that episode, because it does a great breakdown. 

And then I have one cool thing of the week actually from earlier this month. There was a blog post that came out about a YouTube series that really focuses on startups and getting started on Google Cloud and building on Google Cloud. They've done a great job. They have a ton of episodes. 

I think they're actually doing a couple of different series, like a build series, a start series, a grow series. Check out the blog post, and then check out their videos. Because the videos do a great job of introducing a whole bunch of concepts that are just amazing for getting started, and we've seen a lot of people really appreciate the, hey, how do-- I know I have this thing. I want to run it on Google Cloud. 

There's so much inside of Google Cloud. How do I get started with it? So highly recommend those videos. I think they're super helpful. 

KASLIN: Awesome, and with those cool things of the week out of the way, I suppose, let's hop into our main content. 

[MUSIC PLAYING] 

Kobi and Abdel, thank you so much for joining us. To kick things off, can you give us a little bit of an introduction. 

KOBI: My name is Kobi Magnezi. I'm a product manager for GKE. I'm working closely with the teams that manage the GKE fleet, and I'm focusing on Kubernetes releases and their rollouts in the GKE fleet. 

ABDEL: And I am Abdel. I'm a Cloud developer advocate focused on Cloud Native and GKE. 

KASLIN: Awesome. So let's dive right into what we're going to be talking about today. Kobi, you mentioned that you are focusing on Kubernetes releases and how those get rolled out to the GKE fleet. So can you tell us a little bit more about that? How do releases work in GKE, and what should people know about them? 

KOBI: Sure. Yeah. So maybe we should maybe take a step back and speak about Kubernetes releases and lifecycle of the releases coming from open source. I think, thanks to the popularity of Kubernetes and the active community that's supporting Kubernetes, open source offers a new Kubernetes minor version about every four months. It actually used to be every three months, but it has changed since version 119. And the change was partially because open source wanted to support more adoption and also allow organizations to better plan for consuming these releases. 

When it comes to managing the releases of Kubernetes, there are two pieces that you need to manage, basically. One is the control plane. So there is a version running on the control plane, and there's another version running on your nodes, where you deploy and run your workloads. 

In GKE, we manage both of them for you. Right? So you can choose to update your nodes automatically, using the GKE AutoUpgrade, and we always keep your control planes up to date with the latest minor version and patches on your control plane. It also saves some time for customer to think about those releases and chase after the newest release coming from open source. The other thing that it allows customers is to free their mind from thinking about, for example, the open source version SKU policy that requires the control plane to be within two minor versions of the nodes. So those things are being taken care of in GKE, and we support gradual upgrades of both the nodes and the control plane, to make sure that we upgrade your cluster safely. 

KASLIN: And I know from my experience working with the Kubernetes open source project, I was on the release team for 1.23, I guess, and those releases, they come out fast. So it's really nice that GKE offers some help in managing how those releases get rolled out to your clusters and making sure that your nodes and your control planes are within supported versions of each other. 

KOBI: Right. Exactly, and so I think since GKE launched, we offer that shared responsibility structure, where we always manage the lifecycle of the version on the control plane. And we allow customers to use auto upgrade or nodes, if they want to keep their nodes up to date. I think at first that model seemed to be very convenient and flexible for customers, but as a managed Kubernetes service, we strive to simplify cluster lifecycle management for customer. 

And at the same time, we understood from customers that one size doesn't fit all, and some customers may have different needs, business needs, or technical constraints. So we wanted to make it easier for customers to consume these releases, these versions, and basically, we were thinking about a way to allow customers to define their risk appetite, their quality threshold. And instead of choosing a specific release and managing that lifecycle, we wanted them to choose something else, a release channel or something that basically correspond with their risk appetite and the level of quality that they want to see, and GKE just manage the lifecycle based on that preference. 

MARK: Yeah. That makes a lot of sense, and I think that, for customers who-- it's nice to imagine that everyone wants to run the latest version of Kubernetes and have it all deployed across their cluster and their nodes. But that's not necessarily realistic because of the extra challenges that might come up with an application potentially having incompatibilities with the newest version. So the idea, or at least the benefits for our customer using a release channel, sound really good, but Kubernetes, or I should say GKE, isn't the first Google product to use or release channels. Right? 

KOBI: Right. Exactly, and when we were looking for ways to simplify the process for customers, we actually reviewed some practices that we have internally in Google. And in Google, we promote frequent and small releases of changes. Actually, if you look on the way we manage releases for different products, our company-wide media release frequency is weekly. When we release faster, we get faster time to market, but we can also mitigate risks faster. This approach also supports roll-back-first strategy to mitigate any issue and fix the release, when it's needed. 

At the same time, with frequent releases, we can get higher confidence with our releases. Because each one of these releases follow our soaking criteria and qualification to make sure that when we make those versions available for customers, they are stable and can be consumed for production environment. One known example is the Chrome team. So we looked on what the Chrome team is doing with their releases, and Chrome has the same concept, by the way, of release channels, following the same methodology. So basically, the GKE release channels took the same approach, just to simplify the consumption and management of those Kubernetes releases. 

Instead of choosing a specific release, a cluster can be created and subscribed on a specific release channel. When you subscribe to a release channel, you no longer have to think about what version I want to choose, and what is the quality level of that version? Each channel basically represents a different level of features and stability, and it can help you align your business requirements and needs with the channel that basically keeps your cluster up to date and also align with your needs. 

KASLIN: I really like this concept of release channels and this shared model of responsibility that we take with our customers to make sure that they're using the most up-to-date versions of Kubernetes that they can and making sure that they're staying up to date in supported versions. When you mention that we release weekly, I made a face, which nobody can see, because it's a podcast. But I know a lot of businesses where they release on really fast cadences like that, but I also know a lot of businesses where they do releases a lot slower. 

So I'd imagine for some of those businesses, it might be intimidating to pick up these release channels, where they're keeping up to date with these releases. So how do release channels differ from no channel releases? Can you speak a little bit to that challenge that customers face? 

KOBI: Yeah, of course. So maybe just to give you more insights into how we promote releases in the release channel structure. So when there is a new version coming from open source, we first, obviously, qualified the release and tested it internally. And then we first make it available in the rapid channel, which is basically the first channel where we make a new version available. 

I'm saying available, because we have the notion of available version, we have a default version. We can make as many available versions in the fleet and each channel. Making a version available does not trigger our automatic rollout of a release. It makes that version available, so customer can qualify and test that version and make sure that they are ready for that version. That it can support their workloads, that it supports their API integration, before that version becomes default. 

When that version becomes default, that's when our rollout server will start automatically upgrading control plane first to that version, and then nodes will follow to, basically, sync the nodes version with the control plane version. When a version becomes available on the rapid channel, we wait for a few weeks, before it becomes default. When it becomes default, we let it soak for a specific duration of time in the rapid channel. 

After we're meeting that soaking criteria, we promote that version to the regular channel, which is the second channel. We soak it again, and then we promote it to the stable channel. So through that process, we ensure higher stability in each channel, and we also allow customer and us to catch any issues on earlier release channels, like the rapid channel, before we promote it to the regular and the stable channels, which we recommend for production use. 

By the way, the same thing happens with patches. So minor versions are not as frequent as patches. I mentioned before, it's every four months. Patches can be released every week, which can be definitely a lot to manage, but it follows the same structure. 

So when there is a new security patch or a bug fix coming from open source or from the GKE side, we first make it available on the rapid channel. We let it soak for much less time, so the promotion of patches are faster. And after we soak that patch in the rapid channel, we promote it or cherry-pick it, if it's a different version, to the regular channel. Soak it again for a short amount of time, and then promote it to stable. 

With that concept of available in default, customers can actually choose to upgrade ahead of the fleet to the available version, start their automated test or their integration test. Make sure that everything looks OK, and then allow the process to continue, when that version becomes default. 

KASLIN: So being part of these released channels really gives people an opportunity to be part of these groups that are going through this problem together really. And so there's a lot of work that goes into making sure that these releases are ready for customer adoption and making sure that customers are ready to adopt them and run their tests on them that they need to run to make sure that their environments are ready for these releases. 

KOBI: Exactly. For customers, business continuity and high availability are the most important things. While we all appreciate being on the latest version, free of security vulnerabilities and bugs, we ultimately want to support the business that we are supporting. Right? And the workloads are deployed and running on this Kubernetes clusters. So yes, with these channels, I can decide which upgrade path I want to be on, while ensuring that I am on a supported and reliable version that can meet my business needs. 

Actually, interesting enough, the approach doesn't only address security needs or technical needs. It's also address business needs. Some organizations, highly regulated organizations, they require to maintain and update their compliance internal documents for auditing purposes. 

Without release channels, it was a really cumbersome process for them. They had to go and update all the documents every time we released a new version, a new patch, and the process of moving the migrating into release channels completely simplified that process. Instead of specifying the specific version in their document, they just say, I am on the rapid channel. I'm on the regular channel, and that would be sufficient for the compliance and the audit purpose. 

MARK: Yeah. It sounds like a great trade off for customers to be able to decide how much, like you said before, how much risk they're willing to tolerate. And then most customers are going to have multiple, or especially large customers, are going to have multiple environments, so that they can actually test out what's on these release channels and make sure that their applications are compatible with them. I think you've talked a lot about what these release channels do for customers and how we look at them internally. But can you talk a bit more about the goals, especially for Google, to manage these release channels? Like what's important to Google in order to make sure that these release channels continue to be supported, and that they meet customer needs? 

KOBI: Sure. So first, I think it's important to mention that all the versions we have in release channels are supported and GAed. We recommend the use of the regular channel and the stable channel for production workloads, and that's very much aligned with our strategy to start with the rapid channel. 

So a new version becomes available and default on the rapid channel first. We soak those versions in the rapid channel. If we need to roll back or change something, we do it in the rapid channel, before we promote it to the regular and the stable channel. So from Google perspective, this helps us make sure that we provide high quality and stable releases on the regular and the stable channels, which we recommend for production workloads. 

At the same time, customers can choose where they want to be, in terms of the type of release, the quality, the freshness of the release, if they care more about new API coming from open source. Some customers use a second development environment, and they subscribe it to the rapid channel for Canary. This is where we release new versions faster. 

We make them available faster. There's no soaking criteria for the rapid channel. So it allows customers to stay ahead of the curve and test new releases, new APIs coming from Kubernetes, before those APIs and versions become available in later channels. 

One recommendation that we give customers is actually to maintain multiple environments. So if you have testing, staging, development, production environments, we do recommend that staging and testing will be on the same channel as your production. Just to make sure that when you test a version, it will be the same version that will end up in your production environment. 

But many customers use, as I mentioned before, second development environment or Canary environment, subscribe to the rapid channel to test newer things, before those releases get into their staging environment. So that's another recommendation we have for customers. I would say, to get to know the scope of release channels, we definitely recommend using our release nodes. We actually have separate release nodes per channel. So if you are subscribed to a specific channel, you can subscribe also to the RSS feed of the corresponding release nodes and stay informed about what's coming your way with each channel. 

KASLIN: Awesome. So now I feel that we've got this understanding of what release channels are and how helpful they can be for customers. And we've talked a lot about how customers can use them to solve problems in their own businesses. Now, I'd love to bring in your experience, Abdel. I know that you have a wealth of experience actually working with customers. So do you have any stories or experiences that you can share with us about how customers are really using this in the real world? 

ABDEL: Sure. I think Kobi covered it beautifully in explain how released channels are typically used with the rapid, regular, and stable. So one story I have with a customer we worked with, a large financial institution, was they had their QA, if you want, and production on the same channel. Right? So because it follows our best practice of don't rebuild. Right? So you want predictability. You want the same version across these two environments. 

But the dev environment was actually immutable. So what we were doing is that they were daily building an entire environment based on newer versions in the rapid channel. So just, basically, trigger the creation of an entire GKE environment and then trigger the [INAUDIBLE] pipeline to deploy all the applications. And if everything succeeds, we just tear down that environment, and no one gets bothered. 

If something fails, we just snapshot, and we collect logs. We collect a bunch of information from the cluster. We tear it down, and then we page somebody to go look at what has happened. And so to be very precise of what could happen, is it could be that a new version of Kubernetes have deprecated an API you're using, because Kubernetes at the end is just a bunch of APIs. Right? And things get deprecated. Things get promoted, et cetera, et cetera. So if that happens, basically, the new version of Kubernetes is will not accept that specific object you are trying to create, and you want to be able to catch those early. 

But now, thanks to a new feature called GKE Notification with pub/sub, that's even easier. Because basically, you just need to subscribe to a pub/sub topic, and you will be notified when newer versions are made available in a specific version. And then you can trigger a pipeline to do all this deploy temporary environment based on that version, deploy all your applications, and basically just make sure [INAUDIBLE] runs across everything. Right? 

And maybe, if you want to go a step further, you could even deploy some sort of testing. Maybe do a load testing with something like a distribute [INAUDIBLE] locus where you can test your application and collect some performance data, but that could be like-- it's something you could do across multiple stages. You don't have to do everything at once. Right? 

MARK: Yeah. It sounds like that company had invested a lot of time into automation, but the benefits of it, of course, are that you can, like you said, with basically one push of a notification, you've got a whole environment. You can trigger the testing, and you can figure out if anything's going to break. 

ABDEL: Exactly, and you can also think about it as you invest engineering time to do this once, so that later, you don't have to invest engineering time figuring out when things break. Right? Because it's very easy to actually not-- like to think about it as a massive undertaking, but because the times when things break, and you have to spend time figuring things out, if you accumulate it, it's actually a lot of time, over a period of a year or something like that. So it's better to invest time now, so you don't have to wake up people during the night because things break. 

KOBI: We actually have seen some interesting implementation of the pub/sub notification. This is exactly why we launched that feature. Yes, we can find this information in the release notes, but then you have to pull that information and make sure that you are up to date with the release notes. With the pub/sub notification, we send out notification about a week before a new patch becomes available and about four weeks before a minor version becomes available, just to provide enough time for a customer to plan ahead and start their qualification for those versions. 

One pattern that I've seen with customers is they have their testing environments subscribe to a specific channel. They use the pub/sub notification, and when a new version becomes available, they manually initiate an upgrade for this testing environment. So they can test qualify that version, before that version becomes default. 

The other interesting piece is, as you said, Abdel, if they do run into issues, there is API deprecation or some change impact their workloads, they can always postpone an upgrade using Exclusion window. Which is also a great feature that we have in GKE that allows you to control not just the timing of the upgrade but also the scope of the upgrade. So if you need to postpone an upgrade, you can do so. And that just allows you to finish your qualification or even rollback, if you need to rollback to a previous version in your testing environment, before you move forward with your production. 

KASLIN: So there are a lot of tools in here that we've talked about for customers to do their own testing, once the releases are available. We've talked-- I want to make a callback to earlier, when we were talking about Kubernetes releases versus the release channels that we have here in GKE. The Kubernetes releases are pretty frequent. So it's nice to have this additional tooling here with the release channels, where everyone's going through this together. I like how-- I was thinking about that earlier. 

So we've got these tools for customers to be ready to adopt these new versions of Kubernetes, but what if they're not? What if it comes time for their clusters to be upgraded, and they've got big stuff going on in their business or something like that, and they need to put some controls on how those upgrades are going to happen? How does all of that work? 

KOBI: Yeah. That's a great question, and especially now, thanks to open source, there is a lot of movement in graduating pair API to GA that definitely impacts customers. And as I mentioned before, we have the release schedule that we published, so you can see exactly when your control planes in each channel is scheduled for an upgrade. But sometimes you are just not ready for that upgrade, or you have a company-wide event or you have a peak business period of time, Black Friday, Cyber Monday, or New Year. And you just need more time for qualification, or you just want to avoid any changes, because you have higher business priorities that you need to take care of. Right? 

So we do have the concept of maintenance windows and exclusion windows. Maintenance windows is for predictability. So say I am a financial services. Customer is the one maybe Abdel mentioned before, and I want to perform all my maintenance only after business hours or weekends. I can do that with maintenance windows. I can say I want my maintenance to happen only on Saturday nights, during a four-hour window. 

With exclusion, I can also say when I don't want an upgrade to happen. So for about a month, say November, December, I'm trying to refrain from any type of upgrade. I can do that with exclusion windows. 

The new thing we just recently launched with exclusion window is also the ability to control the scope of the upgrade. So we spoke about best practices, and we mentioned some highly regulated customers. If I care about compliance, obviously, I want to get all the patches on my control planes. 

But maybe, while I'm getting those patches, I don't want to move to the next minor version, to 1.23 or 1.25, because there's still some API deprecation happening, and I need to plan for it. Right? So with the upgrade scope maintenance exclusion, I can say, for the next six months, I want only patches on my control planes or only patches on both my control planes and nodes. But please, GKE, keep me on the minor version I'm on right now, so I can finish my qualification and get the right level of confidence, before I move to the next version. 

So that's something that can help customers control and align the cadence of their release with their business needs, and it's available on release channels. So while you are on a release channel, you benefit from the managed experience of a release channel. You can also control the frequency and the type of upgrade that you want to see on your cluster. 

ABDEL: Yeah. The upgrage scope is a feature that I'm actually pretty excited about, because from experience, what happens sometimes is that customers cannot have control over the upgrade. Because they are probably using a third party software, like an open source or maybe a closed source, but third party software that runs on Kubernetes. And that software is not compatible with the next minor version. Right? 

We have seen this before, where you can't do anything, because you can't migrate to the new version, because you're software will break, and you don't have control over when that software is going to actually support the newer version. So the upgrade scope gives you the possibility of say like, I want to get the security patches, because everybody should get them. Right? But I want to stay on a minor version, until I can. Right? 

KOBI: Yep. Exactly, and when we actually see it, not just with highly regulated customers. We mentioned banks, but I also see it with online gaming companies. Most of them use a Kubernetes add-on called Agones, and Agones also have its own compatibility metrics between the Agones version and the Kubernetes version. And sometimes, it just takes time for the Agones project to catch up with the Kubernetes project. Right? 

And then in those cases, upgrade scope exclusion windows is exactly the solution. I can say, I'm on version 1.21. I'm comfortable with that version. I have Agones version that is compatible with 1.21, and now I'm going through qualification and reintegration of the new Agones version with the next version of Kubernetes. But for the time being, I want to stay on that version, so I can have business continuity, until I'm ready to move on. And that's exactly where upgrade scope exclusion comes in. 

MARK: Yeah. It's amazing to hear about all these different options that customers can use, because it sounds like it can be a very complex landscape, when you have to determine exactly how you want to both have the reliability of new security patches, but also make sure that all of your applications and the dependencies are able to run on these Kubernetes versions. You had mentioned that there was a pub/sub notifications as one example for how to get notified. I'm curious if you can talk a little bit more about some of the best ways that people can be updated on what's coming out, understand where the different versions are, and decide on which releases they want to attach to. 

KOBI: Sure. So if you are on a release channel, each release channel has its own release notes. So you can learn about the scope of those releases. We also have the release schedule which basically tells you what minor version we are going to upgrade your cluster to and when, and you can plan for it. 

Also, we have in the same place, in the same release schedule page, you can see the end-of-life date for each one of these releases. So obviously, if you want to be on a supported and reliable version, you want to make sure that you are using that version before it gets into end of life. That's where you can get that information. 

The same information is also pushed through pub/sub notifications. So if you want to orchestrate your own workflow without reading the release notes and planning manually, you can do that. You can subscribe to the pub/sub notification and trigger a Cloud Function to basically orchestrate a specific workflow for you. 

One common workflow is the pre-production to production qualification that we mentioned before. So a new version becomes available. We send out a pub/sub notification for the available version. That can trigger a manual upgrade of your testing environments and also can trigger your automated test. If everything looks OK, you can then decide to manually upgrade your production ahead of time, or just allow it to get upgraded with that version becomes default. 

We do see cases when like retail customers decide to upgrade ahead of the fleet, to make sure that they are on the latest version, before getting into Q4, which is a busy, busy quarter for retail customers. So they upgrade in advance. They keep their cluster on that version using exclusion window. 

So they change the scope of the upgrade to only receive patches. They need to remain compliant, especially if it's retail, and they need to follow like PCI compliance for example. That requires them to be patched every 30 days. 

They stay on that version for the time being, and then in Q1, after the peak business time of Black Friday, Cyber Monday, and New year over, they plan to upgrade again, basically. So that's one of the common use cases that we see. 

ABDEL: Or a very simple way to start could be just, if you have a Slack channel, you can just have pub/sub dump those updates to your Slack channel. Right? Like you don't have to go full on. You can just start with receiving these notifications in a human readable format, I would say, and then when you are ready to automate, you can automate it. Right? Like the bar is not too high. 

KOBI: Absolutely right. Yes. We definitely see those cases as well. You could use a pub/sub notification and subscribe it, integrate it with your Slack channel. If you have a DevOps team, they all get the push notification when GKE has a new version available. 

KASLIN: It's all about bringing that information to the teams that need it, when they need it. 

KOBI: Exactly. 

KASLIN: We've talked a lot over this conversation about the different methods that customers use to adopt release channels and to make sure that they're ready for these new releases. Can we talk a little bit about these orchestration strategies that customers adopt on their own side about when a release is available to them, what do they do next? What are some of those strategies that they adopt? 

KOBI: So I think there are a different strategy when it comes to new patch becomes available, and new minor version becomes available. In some cases, and that really depends on the workload. Some workloads can sustain disruption, specifically if it's a patch. So a patch shouldn't be disruptive for existing workload, especially if you are using disruption management capabilities, like [INAUDIBLE] disruption budget and maintenance windows. 

We internally do not allow, for example, the introduction of new feature in a patch release. A patch release is very much controlled in the scope exactly for those reasons, because we do believe that patches can be applied continuously and safely. So one thing that you can do with notification about available patch, you can start qualifying and testing those patches, and then allow the patch to automatically get applied on your production, when it becomes default. No need to postpone that release. 

When it comes to a new minor version, that can be more tricky, because there are many changes that can be part of that minor version. And it can also impact not just the workload but also any dependencies that you have on the API. We mentioned Agones before, or if you have Istio, for example, those dependencies need to be carefully managed. This is also why we send notification for new available minor version four weeks before we make it default. And if you want to be even safer, you can also use the rapid channel and get much ahead of the curve and start testing those versions before they even get promoted into the regular channel or stable channel, which usually takes about few months before that version becomes default in later channel. 

MARK: Yeah. It's going to depend a lot on the customer workload and their specific cases, but the flexibility, and it sounds like creating multiple environments to test these different channels is probably going to be something that is a good long-term goal. I think Abdul's point earlier is really important. Right? You don't have to automate every single thing in order to get started with release channels. You can simply start very small and work your way up. 

Because if you try to take on an enormous task, you're going to end up putting yourself under a lot of pressure. So I always advocate very much for the start slowly and work your way to get to a place where, eventually, you don't have to think about anything, and it'll all just get taken care of. But it takes some time to get there. I'm curious to know if you all are excited about any kind of upcoming-- not so much on the GKA-specific place but actually the release channel upgrades that are going to come out. Right? Are there any cool, new features, besides things like these exclusion windows, that y'all are going to be putting into the product for customers to use? 

KOBI: Definitely so we are working on making the upgrade experience in GKE a more streamlined and simple for customers. So one thing that we are working on, we're about to launch is actually blue-green type of upgrades in a cluster. That would be blue-green owned the node-pool level. So to mitigate risk and reduce disruption for existing workloads, you can choose between the default upgrade experience, which we have right now in GKE, which is surge upgrade, or you can choose a blue-green type of upgrade. 

And if we choose the blue-green upgrade, basically, GKE will create new environment. That's the green environments or, basically, increase the size of your notebook, create new machine for the green environment and only then start gracefully drain the old machine, the machines that you have in the blue environments. And basically allowing the Kubernetes scheduler to migrate your [INAUDIBLE] from the blue environment to the green environments. 

The interesting thing about blue-green, and it's super exciting, is that we don't release those blue machines back to the GCP pool. So you keep them in your environment. So if you need to roll back, you can instantly roll back to those machines, if needed. So that's one huge benefit of the blue-green upgrade. 

Also, you have more control over how the upgrade happens. So you can decide, for example, how many machines you want to upgrade at any given point of time, or what's the size of the batch that you want us to upgrade? So you can say, I want to upgrade only 2% of my node pool, and then I want to soak for an hour. 

So GKE will upgrade only 2%, wait for an hour, and then continue with the next 2%. And you can also say how much soak time you want to have at the end of the entire process, and that gives you full flexibility into rolling back or rolling forward and basically increase the uptime and the business continuity of your workloads. So that's definitely a huge benefit in the way we think about upgrades and how we support upgrades, while keeping high availability of your cluster. 

So talking about disruption management, like PDB and surge upgrade, I'm actually curious to hear from you, Abdel, what do you see with customers? Like what best practices do you see them using? 

ABDEL: Yeah. Sure. I think I want to take a step back to talk a little bit about surge upgrade, because I think it's a feature that not a lot of people know about it. And when they know about it, they want to know what are the best practices? Essentially, surge upgrade is a node pool-level feature that allows you to define the speed by which the upgrade happens. 

So GKE upgrades are gradual. So we basically add a bunch of nodes to your node pool, migrate the workloads, and take down a bunch of nodes. And surge upgrade allows you to customize how many nodes we add at the time. By default, it's one, but you can just do like 5 or 10 or something like that. So that would allow you to actually speed up the upgrade process or slow it down. One, you cannot go lower than one, but you get the point. 

And then there is also another node-level feature called Max unavailable, which allows you to also control how many nodes are going to be taken down at a time. And by default, it's zero, so you can also adjust it to speed up the upgrade. I've seen situations where a hundred nodes GKE cluster could take weeks to upgrade, just because the customer have never adjusted the search upgrade. So if you adjust it to something like five, it would probably take less time. 

And I think another, I would say, complementary feature that customers can use with all these upgrade features we're talking about is Pod Disruption Policy, or PDB. So pod disruption policy is a Kubernetes feature that allows you to control how much disruption you want your workload to experience. So can say things like I have a two pods application. I want only want pod to be unavailable at a time. Right? So we don't run into the risk of a situation where the two pods of your application runs on the same node, and the node gets taken down. Right? 

So there's just a very basic example. But it allows you actually to control in which order or like how many disruption your application will experience. So ideally you don't run more than two pods. Right? Because that's the whole point of Kubernetes. Like you run multiple replicates to handle the load. 

But you might run into a situation where you don't have enough pods running, because you scale down or whatever, like automatic scaling. And then two nodes get taken down, and these two nodes happen to have the two parts of your application. So you can use pod disruption policies to control that as well. 

KASLIN: Thank you so much Kobi and Abdel. We've gone over so many different ways to work with your Kubernetes clusters and make sure that they're up to date. We've talked about release channels and the different types of channels and some tips for which channel you should pick and what kinds of orchestration strategies you can pick up in order to make sure that your clusters are going to be ready for these upgrades. I've definitely learned a lot today. So I really thank you both for sharing your experience and for helping us learn more about release channels. 

KOBI: Thank you so much for having us. That was great. 

ABDEL: Thank you. 

MARK: Thanks so much to Kobi and Abdel for coming in and talking about the release channels. I learned a ton from that conversation, and I thought it was really interesting. It's something you don't typically think about, I feel like, when you talk about launching an application, especially if you're looking at just a proof of concept. But like if that application is going to be running for a long time, you've got to figure out how to make sure it's on the right version, and as new versions-- like you said, Kubernetes is releasing multiple versions a year. 

So like being on top of that, that's a full-time job. There's a ton of which version do I go with? How often do I update? How do I make sure I update without affecting the actual application uptime? Like there's so much in that space, and I feel like that conversation was a really good highlight for those really important topics. 

KASLIN: Yeah. We covered a lot in there, and I think one thing that really stood out to me that I learned from that conversation was right there at the end. Abdel was talking about surge upgrades, which I feel like is a very core component to understanding how upgrades work in GKE, and it surprised me to hear from him that he often sees customers who don't make full use of that capability. Which of course, is to change how fast your upgrades roll out by changing how many additional nodes can be added versus how many can be down at a time. So that's a really core thing to understand. If you have to deal with Kubernetes cluster upgrades, GKE upgrades, definitely check out that capability and make sure that you understand it. 

Also, reminded me of node auto provisioning which is a type of autoscaling for GKE that I talk about a lot. And it's also one of those cases where it feels like something that people should know about and be aware of and a core functionality that people should get familiar with, but often, people just aren't familiar with it. They think about autoscaling as like cluster autoscaling, being able to add virtual machines and nodes to your Kubernetes cluster. 

But node auto provisioning actually enables you, it's a tool for determining what size of machines, what virtual machine types you actually need to have in your cluster. So it helps you deal with your bin packing problems, figuring out how big of a machine to have in your cluster, so that you're using it effectively, without having too much extra overhead or not having enough space. All of those types of problems, note, auto provisioning can really help with. So check that one out as well, if you're not familiar with it. 

MARK: Yeah. We did some-- a bunch of us got together to do some of those optimizing on GKE videos, and that was a super helpful-- and that was a big chunk of the videos we did too was talking about all the different forms of autoscaling. And yeah, like probably a lot of people aren't even familiar with the concept of node auto provisioning and how that is-- how you set it up? What does it do? How do I make effective use of it? 

And so I think these videos-- and we'll make sure that link to the videos and the show notes. But there's a lot of really useful stuff out there. You just need to know it exists and how to use it. 

KASLIN: Yeah. So definitely check out our Optimizing GKE content. We'll have those links for you in the description, and another good point here I want to point out is, if you're using Autopilot mode, often a lot of those GKE cluster optimization things are handled for you. Like node auto provisioning cluster autoscaling are just built into Autopilot mode. So you don't have to worry about it as much, if you're doing that. 

MARK: Well, we talked a little bit earlier that you were obviously pretty busy at this time of year with the KubeCon planning and KubeCon the actual events happening, but what else are you working on Kaslin? 

KASLIN: So I'm also working on "GKE Essentials," as we've been talking about. We're finishing up that season that the content is going to be coming out over the next few months. So depending on when you're listening to this, definitely check that out. Also, whenever you're listening to this, definitely check that out. So that "GKE Essential" stuff, KubeCon, of course, I will have just finished KubeCon EU, and I'll also be doing stuff with KubeCon North America, and those are my key things right now. 

MARK: I feel like you can just measure your workload by like which KubeCon did I just finish? Which KubeCon am I preparing for? 

KASLIN: I actually wrote a blog post after KubeCon North America 2021, where I talked about the timeline of KubeCons and how there's always a KubeCon going on. So my work very much centers around that a lot of the time. 

MARK: Yeah. It's just forget the standard calendar. Let's just do the KubeCon calendar, and that's all you need to know. 

KASLIN: So once again, we want to thank you all for listening. We hope you learned a lot of awesome stuff about GKE release channels and about Kubernetes releases, hopefully. There's lots of cool stuff for you to check out in the links in the description below, and we'll see you next time. 

MARK: Bye, everybody. Have a good time. 

KASLIN: Bye. 

[MUSIC PLAYING]