+++
audioDuration = "00:41:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.47.mp3"
audioSize = 45744340
categories = ["Abuse", "Security"]
date = "2016-10-12T01:07:49Z"
description = "Swati Kulshreshth and Emeka Okonkwo join us today to give us an overview of what the Google Cloud Abuse team, how it can impact you, and in what ways it protects everyone: including you!"
draft = false
episodeNumber = 47
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Abuse with Swati Kulshreshth and Emeka Okonkwo"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/WXPh4MnMFFB"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/575hqd/episode_47_cloud_abuse_with_swati_kulshreshth_and/"
+++

Swati Kulshreshth and Emeka Okonkwo join your co-hosts,
[Mark](https://twitter.com/neurotic) and [Francesc](https://twitter.com/francesc),
today to give us an overview of what the Google Cloud Abuse team,
how it can impact you, and in what ways it protects everyone: including you!

<!--more-->

##### About Swati

[Swati](https://www.linkedin.com/in/swatikulshreshth) leads developer experience
for Cloud TnS. She is responsible for ensuring that developers whose projects are
flagged for suspicious activity can easily fix the issue.

##### About Emeka

[Emeka](https://www.linkedin.com/in/emeka-okonkwo-97b96585) is a senior strategist
for Cloud TnS. He is responsible for addressing network related abuse on Cloud with
primary focus of abuse on GCE. Prior to working at Google, he was at Verizon for
9+ years as a Software Engineer.

In his spare time, he likes going to the movies and watching video games (He
doesn’t play them as often as they’ve become too complicated - so mostly watches
on Youtube Gaming or Twitch).

##### Cool things of the week

- Powering geospatial analysis: public geo datasets now on Google Cloud [Google Cloud Blog](https://cloudplatform.googleblog.com/2016/10/powering-geospatial-analysis-public-geo-datasets-now-on-Google-Cloud.html)
- Introducing the Open Images Dataset [Google Research](https://research.googleblog.com/2016/09/introducing-open-images-dataset.html)
- Go Web Workshop [GitHub](https://github.com/campoy/go-web-workshop)
- Publishing Podcast episodes to YouTube with Go [GitHub](https://github.com/campoy/podcast-to-youtube)

<div style="text-align: center">
  <img src="https://3.bp.blogspot.com/-K7oXk2v5Buk/V-2c0Cd_M-I/AAAAAAAABUE/Zl4wdW_T5rAJiYTfgG2HcYsGOjc3hOGrgCLcB/s640/Open%2BImages.png" style="margin: auto;">
  <p style="font-size: 0.75em">Annotated images form the Open Images dataset. <b>Left:</b> <a href="https://www.flickr.com/photos/kevinkrejci/2957748348">Ghost Arches</a> by <a href="https://www.flickr.com/photos/kevinkrejci/">Kevin Krejci</a>. <b>Right:</b>  <a href="https://www.flickr.com/photos/lobsterstew/3197736453">Some Silverware</a> by <a href="https://www.flickr.com/photos/lobsterstew/">J B</a>. Both images used under <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a> license</p>
</div>

##### Interview

- Google Cloud Platform Terms of Service [docs](https://cloud.google.com/terms/)
- Google Cloud Platform Acceptable Use Policy [docs](https://cloud.google.com/terms/aup)
- Denial-of-service attack [Wikipedia](https://en.wikipedia.org/wiki/Denial-of-service_attack)
- Free trial quotas & limits [docs](https://cloud.google.com/free-trial/docs/free-trial-quotas)
- Supplemental Terms and Conditions For Google Cloud Platform Free Trial [docs](https://cloud.google.com/terms/free-trial/)
- Help Center on Policy Violations [Google Support](https://support.google.com/cloud/answer/7002354?hl=en&ref_topic=3473162)
- Cloud Security FAQ [Google Support](https://support.google.com/cloud/answer/6262505?hl=en&ref_topic=6237043)
- Raw Hammer Bug [Wikipedia](https://en.wikipedia.org/wiki/Row_hammer)
- Google Cloud shut down this guy's business — but now he's a fan for life [Business Insider](http://www.businessinsider.com/google-cloud-won-skeptic-after-shutting-site-down-2016-8)

##### Question of the week

- Helm Charts: making it simple to package and deploy common applications on Kubernetes [Kubernetes Blog](http://blog.kubernetes.io/2016/10/helm-charts-making-it-simple-to-package-and-deploy-apps-on-kubernetes.html)

##### Were will we be?

[Francesc](https://twitter.com/francesc) is working on more episodes of
[justforfunc](https://youtube.com/c/justforfunc) before he goes to Brazil
next month for [GopherCon Brasil](https://2016.gopherconbr.org/en/) and
[GCPNext Brazil](https://cloudplatformonline.com/NEXT2016-Brazil.html).

You can find [Mark](https://twitter.com/neurotic) at [Connect.Tech](http://connect-js.com/)
in Atlanta from October 20th to the 22nd, and the week after that [GAMEACON](http://www.gameacon.com/gameacon-ac)
in Atlantic City.

{{< transcript "FRANCESC: Hi, and welcome to episode number 47 of the weekly Google Cloud platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. Thanks, Francesc. How are you doing? We're in a slightly different room today. 

FRANCESC: Yeah. I think people will be able to hear a little bit of the echo unless you do an amazing job with editing. 

MARK: That's unlikely. 

FRANCESC: Yeah, so probably. That is because-- yeah. Someone broke the door in our studio. So we cannot enter. 

MARK: Yep. 

FRANCESC: Things happen. 

MARK: That's fine. 

FRANCESC: Anyway, so today we're going to be interviewing two people from the Cloud Abuse team, Swati Kulshreshth and Emeka Okonkwo. I hope I didn't completely mispronounce your names. And they're going to be telling us about what is Cloud Abuse, why you should care, and basically how Cloud Abuse is here to protect you also. 

MARK: Yeah. I think this is really cool. It is a really interesting conversation, and why you should care as a customer of GCP about why this group exists. It's not there to get in your way. It's there to really help you. 

FRANCESC: Yeah. Actually, it's also to protect people outside of Google Cloud Platform too, which is an interesting thing. 

MARK: Yeah. After that, we have our question of the week where we go back to Kubernetes, one of my favorite topics, where we look at easy ways to deploy well-known applications. 

FRANCESC: Yeah, so it's basically like a mix of your two favorite topics, the planning manager in Kubernetes. Is there such a thing? 

MARK: Oh. 

FRANCESC: Yeah, so very interesting. And before that, we're going to go with the cool thing of the week, cool things of the week. And we have four today. Two of them are really tiny. But so the first one is about data set, new data set available on Google Cloud, which is public geo data set, so basically, a bunch of images from all around the world. 

And if you've listened to all of our episodes, this might sound familiar. It is actually the same data set that the cath lab, which the cath labs, which we interviewed in episode 41 has been using for quite a while. There's a bunch of images. They are really cool, actually. 

I know in the blog post, which we will link from the show notes. There's a bunch of images that we even used in some of the show-- an that's for episode 41-- and some really nice pictures of Australia. 

MARK: Oh, well, as long as it's Australia, that's always important. 

FRANCESC: Yeah. It's a place called Brisbane. I don't know. 

MARK: Brisbane's pretty nice. I've been there. 

FRANCESC: I've never been there. I'd love to. No, it looks like there's nice beaches. 

MARK: Yeah. There is. And speaking of open data sets, there's another open data set that I think is also really cool, the open images dataset. So there consists of over, or approximately 9 million URLs to images that have been annotated with the labels spanning about 6,000 categories. So if you want to get sort of some images data that you want to put through machine learning, and tag it very similarly to Google Photos or the Cloud Vision API Works, you can do that. So you can actually do some really neat stuff with it. 

FRANCESC: Yeah. I think that, basically, if you have all of these pictures with all the annotations, and then you want to get starting playing with TensorFlow, this could be a really nice place to-- basically, can you try to emulate the Cloud Vision API? 

MARK: Yeah. I actually think it could be cool as well in that you could dig into specific categories of stuff. Say you want to be able to work out say, what metal maybe cutlery is made out of. So you grab everything that is cutlery and then break it down from there. You can do some really interesting stuff, as a starting point for machine learning. 

FRANCESC: I'm actually seeing a picture of the cutlery. And I have no idea what metal that is. 

MARK: I don't know. That's why I saw the image too. And I was, hmm, cutlery. 

FRANCESC: Thats a good point, yeah. 

MARK: But something like that could be really interesting. 

FRANCESC: Yeah. That sounds like something I could try. And then there's two more cool things of the week, which are completely self promotion because I'm shameless. 

MARK: Yeah. So Francesc, if you had a podcast in theory, and you wanted to get that podcast to go onto YouTube, how would you do such a thing? 

FRANCESC: That's a very interesting question, Mark. So we actually did this. As we announced a couple weeks ago, we actually have all of our podcast episodes available on YouTube. And this was done automatically because it is easier. It's actually not easier, but I do not hate my life. 

So basically what this does is it's a docker container that will download something, some files, MP3 files from an RSS feed, and publish everything to YouTube, I think one image that you can choose. And then it just has been open sourced. So you can go to github.com/campo/podcasttoyoutube and just check it out. 

And then I also open source something else last week, which is a go web workshop, it's called. And it's basically the basics on how to build web applications using Go on App Engine. So if you're curious about to learn how I normally do it, on the front inside of things, it's super light. So don't expect to learn anything about CSS3 or HTML5. It is actually pretty bad. 

But we don't care because it's about the back end. So you will learn about how to use Data Store, and memcache and how to send emails, and stuff like that. 

MARK: Awesome. Sounds great. Well, why don't we have a chat with Swati and Emeka and talk to them about Cloud Abuse. 

FRANCESC: Cool. Let's do that. So I'm very happy to welcome to the podcast two members of the Cloud Abuse team. So we have Swati Kulshreshth. Hi. How are you doing? 

SWATI: Hi. 

FRANCESC: And Emeka Okonkwo, hi. 

EMEKA: Pleasure to meet you. 

FRANCESC: How are you both doing? 

SWATI: Good. Good. 

EMEKA: Yeah. It's nice to meet you guys. 

MARK: Well done, Francesc. Those are two tricky names. 

FRANCESC: I know. That is my specialty. But then I mess it up with completely English sounding names. So-- 

[LAUGHTER] 

So why don't we start talking a little bit about who you are, what do you do at Google. Maybe start with you, Swati. 

SWATI: Sure. So I'm part of the Cloud Trust and Safety Team. And what our team does is basically protect the Cloud from abuse originating from Google Cloud. I specifically look at the developer experience associated with that. 

EMEKA: And I work with a senior strategist on the same team. And, again, the mission is to protect folks against abuse from Cloud. 

MARK: OK. Cool. So we said abuse a few times through that. What does Cloud abuse actually mean? Emeka, why don't you go first? 

EMEKA: Sure. So Cloud abuse as a way is define is any kind of activity that ends up violating the Cloud terms of services or acceptable user policy. So our team's goal or mission is to basically enforce the relevant sections of the Cloud terms of services/AUP. 

FRANCESC: Could you give a couple examples of what kind of terms of services you normally handle? 

EMEKA: Sure. So teams such as the [INAUDIBLE] attacks that emanate from the Cloud Platform are intrusion attacks, or even like malware or phishing. Closed kind of activities are the thing that we are responsible for protecting or preventing. 

SWATI: And to add to that, there are things that would violate the terms of service, like you're going beyond your core distinctions, or doing things that you shouldn't be doing given the Cloud services that you're using. 

FRANCESC: Cool. And so you're saying, that basically what you're doing is not protecting Google Cloud Platform customers from external abuse, but actually stopping abuse coming from Google Cloud Platform. 

SWATI: That is exactly right. Our team is focused on looking at abuse that originated from the Google Cloud Platform. And that is the kind of activity that we specifically look for and try to stop. 

EMEKA: Attack that come to Google is handles by site reliability engineers. So that's a different team. 

FRANCESC: Yeah. We've talked with a couple of them. We should keep on talking to more of them. Yeah. They're always so cool to talk to. 

MARK: OK. So clearly the people who listen to our podcast, they're responsible people, they're wonderful people, we love them dearly. 

FRANCESC: They are listeners. 

MARK: They are listeners. So clearly, they're great. They're not going to actively go out and try and do things that are malicious and nefarious or something like that. Why should they care about Cloud abuse? Is there issues in terms of resources? Or, what sort of problems is this solving for people who are customers of GCP? 

SWATI: So there are two types of abuse we see coming from Google Cloud. There's intentional abuse. And clearly, like you said, your listeners are not one of those. But then there is the unintentional abuse. You do not want to be conducting denial of service attempts or intrusion attempts. But your system has been hacked, or the software that you downloaded, and that is doing it on your behalf. 

And those are the kinds of things that we are looking for. And those are the kind of things that you should be looking at too. 

EMEKA: And to add on to that, it could be possible that, for example, if someone hacks your system. So, again, that's a breach on your system. You really don't want to be responsible for that. Or, at least you want to find out as soon as possible if that happens. Or, if someone is using your machine to perform a denial of service attack, that could cost a lot of money on the cloud, so a lot of computing resources that you wouldn't have to be responsible for paying for. 

So hopefully if we catch that in time, that would be very awesome for you. And also, finally, if you have an external website that is hosted somewhere, we are trying to protect you from being hit by people who are on cloud. So makes life better for everybody. 

MARK: Cool. I'm curious. So you mentioned denial of service stacks. What other kinds of used cases do you normally see? Is it people getting infected with some bugs? Or, what kind of problem do you normally handle? 

EMEKA: Yeah. So we see a lot of denial of service attacks. We also see a lot of brute force activities. So, basically, so once a machine maybe is hacked, because, of course, none of our users are going to do it. So a compromised machine could be trying to probe vulnerabilities against external networks, so trying to find out parental login to those networks, or even vulnerability scanning to see what's easy to be like falling prey. 

One of the things we saw recently, or some time back was when WordPress had some vulnerabilities. And [INAUDIBLE] we saw a lot of attacks from Google targeting third parties, WordPress sites. 

MARK: Interesting. 

EMEKA: Or, even people are hitting the other Cloud people, customers who had WordPress. So those [INAUDIBLE] examples. 

SWATI: I think one of the things we see very frequently is that your firewalls have not been set up properly. And then somebody manages to get into your system and start doing either denial of service attacks, or brute forcing, or any of the other suspicious activities. 

MARK: I guess that means-- yeah. If I'm running my service on Google Cloud Platform, and someone's hacked me, then suddenly I don't have those resources on that machine available to me anymore. If someone's trying our mine bit coins, or whatever it is the cool kids are doing these days, suddenly my CPU's-- 

EMEKA: [INAUDIBLE] coins. 

MARK: Yeah. Yeah. Exactly. My CPU's suddenly at 100%. And so I can't serve traffic or do anything I should be doing on my app. 

EMEKA: Right. And even, like you said, so it could be possible that you could have legitimate users who are using the platform properly. But because the resources are being used by these irresponsible people, or by people who have been compromised, they don't have the ability to actually enjoy what they paid for. So that was a bad experience for other customers who are not doing abuse. 

FRANCESC: So most of the things that we've discussed so far are basically people attacking or somehow compromising the account of someone that is well-intentioned. Does it also happen that someone is well-intentioned, but somehow they are not aware of some limitations? What kind of limitations people sometimes forget? 

SWATI: I think the biggest one that we see in this category is people going outside of the quota available to them and using it multiple times. So associated with the free trial there are specific quota limitations in terms of number of projects, in terms of how many emails you can send, how much network you can use. And that is the one that people often end up circumventing and then getting caught by one of our rules. 

We do try to give a lot of benefit of doubts unless you're really egregiously violating that. We'll probably not come after you. 

MARK: Cool. 

EMEKA: And also, for example, what we see as well, and in addition to what Swati had mentioned, is that a lot of people may not necessarily take the precautions of securing that instances. So often update their profile walls to only allow the traffic from the designated VMs, or instances. So what happens is that someone may basically hack into that systems and use their systems as a part of a botch to do something bad. So not taking the extra couple of minutes required to actually lock down your machine, to make sure you only get traffic to and fro from what you really want to, has been a lot of concern. 

MARK: You were talking a little bit as well just about accidental stuff people do. You talked a little bit about projects. So are there any other sort of things that people often go, oh, it'll be fine. Or, they don't even realize that that was a terms of service thing that they could have passed that people should be aware of? 

SWATI: The most frequent ones are the quotas, and the number of projects, and email quotas. 

EMEKA: Yeah. And also, sometimes some people may use the platform as a hosting provider so that basically other people can run off of them as the part of the service they offer to their own customers. So if they don't properly monitor those customers or check their traffic, they could also end up getting a violation of our [INAUDIBLE] services. 

So for example, if they opened up their service to host, upload images, some of them may be malware, which has not being served from the Cloud customer to external people. So again, that's also a violation. So you maybe not knew specifically. But the people that you provide services to could end up costing you a violation. 

MARK: So basically, yeah. That makes sense. Anywhere you've got a system that has user-generated content or anything like that you need to be very careful about what content they're putting out there and what is possible and able to do on your platform. 

EMEKA: That's correct. 

MARK: So let's imagine that at some point, for some reason, either because by mistake or they didn't pay attention to [INAUDIBLE] service. So somebody could hack. I get an email. And the message is basically saying, hey, we detected some fraudulent activity in your account. What's next? What do I have to do? 

SWATI: So I can take that one. When we see something suspicious, we will send out an email to you saying we are seeing the suspicious activity. Please check it. Please get back to us. Send an appeal. And there will be a three-day warning period. 

The thing you need to keep in mind is that this email goes out to the project owners. So definitely monitor your project owner email We hear a lot of developers coming back to us saying, hey, I wasn't monitoring it. So I didn't realize that there's something going on. 

MARK: I've heard stories about that. Yeah. That's a great takeaway. I just want to highlight that. 

FRANCESC: It's happened to us, actually, where we got an email from our internal email, the Google Cloud Platform Podcast Project, about some certificate going away. And we're like, whoops. 

MARK: We should just think about that. 

FRANCESC: Yeah. So yeah. OK. That's a very important point. Pay attention to the email. 

MARK: Yes. Yep. 

SWATI: So the process going forward is you go to the developer console. It will take you to the appeals page, and you'll send an appeal. The good thing to do about the appeal is to actually give us some context around what you're doing, what your project is doing, and why do you think that suspicious activity might be happening. We definitely don't need the quota of your program. We don't need a design diagram. But we do need some context to see why this was happening. 

FRANCESC: How much information do you get out of this? Will be something like, oh, you're going over the quota on this, or you're using too much CPU, or something like that? Or, is it just like, hey, you're-- what kind of information do I get? 

SWATI: So we definitely provide information on what kind of suspicious activity we are seeing. So we will tell you this is the kind of-- so we are seeing denial of service attack. So we are seeing you circumventing quota. We will give you the project ID, the project name, and the time on which it happened. 

If you need more information, you can definitely write back to us. And sometimes we can help you out. Sometimes you need to go back and look at your own traffic logs and see what was happening around that time. 

MARK: So it sounds like, OK. I get the email, which I'm monitoring because I look at my emails. And you'll give me some information. So it really sounds like a fair step is actually for me to go, and have a look at my project, and see if I can work out what's going wrong. And maybe I need to lock something down better, or just stop doing something that I probably shouldn't be doing in the first place. 

SWATI: That's right. 

EMEKA: And also, we saw first, the same notifications in the developer console. So you can't really log into your developer console and see the same information. So at least you will see a notification next to your project with an icon or something which you can mouse over. 

It gives you more information about what high level-- hey, we caught. We saw something wrong. Can you please take a look? It needs your attention. So that's another way that you also get information about something [INAUDIBLE]. 

SWATI: Yeah. Do what Emeka just said. If you are on the developer console, go look at the dashboard for your projects. And you will definitely see if there's an issue. You will see that surfaced on the dashboard. 

MARK: Now, I'm curious. If I go looking. Maybe I'm not a technical, or for whatever reason I can't work out what the issue is, can I come to you and say, hey, look. I'm stuck. Can you give me some extra information? Is that a thing you all do? 

EMEKA: Yes. You can come and access for more information. We have certain things that we can share or not share. So as to the extent that we can, we will provide as much information as we can to help you. But if you're not really sure what's going on with your VM, for example, normally we would recommend that you do a re-install, just to make sure that you wipe out any kind of person who may have hacked into your machine. 

MARK: Provision your machines with a script. 

FRANCESC: That makes sense. So could you share a little bit out of your experience? You've been working on this for quite a while. What are some cool anecdotes of people that have gone through the abuse process? 

SWATI: I think the most common one is I'm not doing anything. I didn't do anything wrong. 

MARK: Yep. 

SWATI: And then when we talk to them, and they'll go back, look at the traffic logs, and they'll say, oh, yeah. I see this activity. It must have happened because I'm using or the newly installed the software, or this application must be doing it. There are times when people have installed apps and not even realized that those apps are doing things on their behalf, which is getting them to violate the terms of condition. 

And when you get that email saying you're violating terms of service or something is wrong and suspicious is happening, go check it. You may not be doing it. Someone else might be doing it from your system. 

MARK: Yeah. 

EMEKA: Even to add to what she said, sometimes we've let people know, hey, we found out your-- or we tell them x, y, z is happening on your platform. And then they've come back to us, say oh, no. Nothing's going on wrong. Everything is fine. And then later on we get a report from a third party also saying, hey, we got abusive traffic from this person. And so when we now send it to them, they're like, oh, my goodness. So something is wrong. What's going on? So usually when we do say something is wrong, try to take a look because more likely than not there is something going on. And that's a kind of-- 

MARK: And if you're not able to find that, just reply saying, hey, I'm not able to find it. Can you give me a hand? 

SWATI: Yeah. 

MARK: Interesting. You made an interesting point there. Very quickly, you work with third parties as well who also report, like basically, that traffic or something bad is happening in particular places? 

EMEKA: Yes, that's correct. So we also receive reports from third parties who are reporting attacks that they receive coming from the Google Cloud Platform. So it's a part of our duties, in addition to like protecting Cloud customers is to also take that into consideration. And basically, if you verify the report, because not everybody who tells you-- maybe they have some spiteful stuff. But you have to verify that it actually is a legitimate report. And if so, we also act on those as well. 

FRANCESC: Cool. So what about when people are hosting content that is fraudulent? So it's not really about what you are doing, but about what you're serving. So for instance, let's imagine like some private movie or stuff like that. 

EMEKA: Well, we all love movies. 

FRANCESC: Yeah, we do. 

EMEKA: So if someone is found to be hosting some sort of movie that is copyright protected, or falls under the DMCA Act, what we do when we receive such reports is that we actually work with our legal team and send those modifications to them because that is not necessarily abuse. But it might be something enforced under the legal category. So basically, what our role in that is just most for what goes to the legal team so that they can move it from there. 

MARK: But that would be a violation of the terms of service? 

EMEKA: It would be a violation in terms of services. Yes. 

FRANCESC: Interesting. And at some point, you mentioned that very often its about vulnerabilities. And sometimes its applications that are malicious, really. But what about when there is something that all of a sudden everybody knows about, and all the internet is unsafe again, like Heartbleed, for instance? 

EMEKA: So in those kind of situations, when this has happened, we work a lot closely with the Cloud Security Team to come up with some sort of solution that can help to protect our customers and use that or deploy that to help to protect them. So we've had some situations like the Heartbleed one, or one that comes to mind is one called row hammer, which was a big security issue. And we worked with the Cloud Security Team to help us to come up with appropriate mitigation steps that can be applied in the Cloud Platform. 

FRANCESC: Can you explain a little bit what row hammer is? I have never heard about it. 

EMEKA: I don't know the difference. I wasn't-- 

MARK: We'll put a link in the show as soon as the story is over. 

FRANCESC: Yeah. We'll find it. That's an interesting one. Yeah. Cool. 

MARK: So that's cool. All right. Well, I think we should talk about Doc Graph, I think. It's the elephant in the room. We should probably talk about it. If anyone hasn't heard about it, it was-- 

FRANCESC: Yeah. It was a very interesting story. Basically, it went crazy on Hacker News. Someone said, oh, yeah. Google Cloud basically shut down my company completely. And I think it's interesting because it was shut down by Cloud Abuse, your team. 

SWATI: Yes. 

FRANCESC: So let's talk about that. What happened? Could you tell us a little bit about the internals, what did actually happen in there? 

EMEKA: Yeah. So what had happened was that we had actually received some third party reports about attacks coming from the user's machine. And after, we independently verified the situation. We sent the user a notification, which was [INAUDIBLE] through the grace period. And so the user did receive the notification. But it seems that there was some problems on the developer console, which prevented the user from being able to submit a successful appeal within the time period that he had. 

And so unfortunately, after the time period had expired, he actually had his product suspended. And so that's when he wrote the email. 

MARK: Now, it sounds like there was some reach out from the Google Cloud Team. And the Cloud Abuse Team worked with them. So we ended up getting the project reinstated. 

EMEKA: That's correct. 

SWATI: Yes. 

MARK: And we've been working, I believe, with him as well to add some improvements, and basically improve things that were wrong before. Can you talk about those as well? 

SWATI: Yeah. So that issue actually highlighted a few things that had been happening, or that were not great as far as the developer experience was concerned. And when this issue highlighted those, we've been working hard to fix them. 

We've made a few changes to the way we inform developers on the email as well as the developer console so that they have more information to take corrective steps. We fortunately hired a team, worked really hard to fix those issues. And those were fixed within a week of this issue happening. 

EMEKA: Right. So basically, it was the detection was correct, the issue was correct, but we didn't have a good enough experience from a developer's standpoint for them to communicate and reach out to us. But that doesn't always happen. It was a unique circumstance that happened for him because we do get people who are able to [INAUDIBLE] appeal. But when something goes wrong, everything goes wrong situation. So that's unfortunately what happened in his situation. 

MARK: I'm super happy to say that he has said-- where are we? I'm very pleased with the service overall and will likely remain a customer for a long time. 

EMEKA: Yes. 

MARK: So I'm very happy to hear that the resolutions made a deep and meaningful impact. So super happy about that. Cool. Well, in case we missed anything, I need to ask our standard question. It's is there anything else you want to talk about, or highlight, or maybe new things, or anything we might have missed? 

EMEKA: We have a couple of help center articles that basically give you some explanation about some of the policy violations, and also steps of how you can secure your instance. So as we see a lot of times, people are compromised. So if you can take a look at those, that will really help you out to-- prevention is better than cure, right? 

MARK: Yeah. Absolutely. 

SWATI: And our emails will direct you to those articles. So if it is about just figuring out how to get through this process, we have a help center article on that. We have help center articles on specific abuse types that we will be sending you emails about. 

We are also trying to proactively reach out to you, because one of the things that we've been talking about, a common theme, is the instance has been compromised. So we are trying to reach out to developers who's instances we see could be at highest risk being compromised before the compromise happens. So keep watching out for those emails. 

FRANCESC: Yeah. We'll have the links to those articles directly from the show [INAUDIBLE]. So I would say that then one of the biggest pieces of advice is pay attention to your emails. 

SWATI: Yes. 

EMEKA: Or, to the dashboard. 

FRANCESC: To the dashboard. What would be the second biggest piece of advice for someone that wants to make sure that it's not going to get impacted by fraud? 

EMEKA: Make sure that your instances is secure. Check your Firewalls. A lot of times everything is open to everybody. So maybe it would be easier to get started faster, which is awesome. But take the extra time to actually-- 

SWATI: And I think to add to that, the third one is-- a lot of times, the software that you installed on your instance, just make sure all the security badges are in place, and keep on top of that. 

FRANCESC: So, yeah. Basically, just make sure no one else gets to use your resources. 

SWATI: Yeah. 

FRANCESC: Cool. Well, thank you so much for taking the time to talk to us about abuse today. 

EMEKA: You're welcome. Thank you so much for inviting us. 

MARK: Thank you. Thanks for joining us today, Swati and Emeka. Super interesting discussion. And I definitely learned a lot about the abuse process, and why it exists, and why I think it's really so important. 

FRANCESC: Yeah. I think that the most important thing was abuse is here only because we need to protect you too, which is really interesting. And how most of the time when abuse is dealing with customers, it is because they might have been compromised. So take care. Make sure that your network is correctly configured, then it's safely-- you have all your networking firewall rules, and all that stuff set correctly, which by the way, that's what we will talking about next episode. 

So maybe that's what we should do. Listen to the next episode next week. But I think now it's time to go talk about the question of the week. And the question of the week is something that I really like because I'm a pretty lazy person. 

And sometimes I see very often examples of-- oh, this is how you run Jenkins on Kubernetes, or this is how you run, I don't know, Drupal, or not WordPress-- yeah, WordPress on Kubernetes, whatever. And it really makes me feel-- well, on Google Cloud Platform we have this really cool thing, which is the Deployment Manager, that you can easily click on a button, and then you get a deployment. Boom. Done. Easy. Is there such a thing for Kubernetes. 

MARK: Yeah. So this is really cool. If anyone's tracked along with what was Deploy Manager, and then Helm, and then backwards and forwards, anything, everything all got consolidated recently, which is really cool. And everything's now in Helm for Kubernetes. So Helm is this thing that lets you deploy common things, like applications to Kubernetes. 

So some things that are supported right now in a stable, like Drupol, Jenkins, WordPress, stuff like that. So if you've used apt-get or you've used yum, or I don't know, other package managers, such as maybe MPM or Like A Gem, or something like that to start it-- 

FRANCESC: Or Yarn. 

MARK: I've never used Yarn. 

FRANCESC: It just was an [INAUDIBLE]. That is why. 

MARK: OK. Cool. Yeah. So then you can use that to deploy stuff to Kubernetes. There is a command line client. What it does is it says it the Helm is the command line client, and charts are what it's called, or the packages are called within Helm. And then you can search through it, you can initialize, you can go Helm install. And that build stuff up and put it into Kubernetes for you, which is super cool. 

There's currently two repositories. There's the Stable repository, and then there's the Incubating repository, which has some stuff that's almost there, but not quite there yet, which includes things like etcd and Console and MongoDB and a few other things as well. But I think this is super cool and very exciting for people who just want to get stuff up and running on Kubernetes, especially if it's common stuff that everyone's already doing. 

FRANCESC: Yeah. I think that it is a very nice way, especially also not only if you are the one consuming those packages, but if you have a cool application and you want to distribute in an easy way that anyone can go, just run this command and get started trying it. 

MARK: Yeah. Absolutely. Excellent. Well, Francesc, are you up to anything interesting in the next few weeks? Where are you off to? 

FRANCESC: So I'm going to be re-recording some of that [INAUDIBLE]. We've been having some technical issues. But I should be here releasing some of those very soon. And other than that, I will go next month. 

I will be in Brazil for GopherCon Brazil. Very excited about that. My talks also take shape, which is nice, like three words away. So it is good. 

And then also, at GCP NEXT Brazil, which by the way, if you're interested in, we're going to be running our next conference of Google Cloud Platform next. You're going to be learning about what we're working on and what are the new things. And this time it's going to be in Brazil in Sao Paulo. 

So November 10 in Sao Paulo, if you're somewhere around, we will have a link to that so you can register. It's going to be lots of fun. It's going to be a lot of people from my team and all the teams from Google Cloud Platform there. So come say hi. 

MARK: Awesome. That sounds fantastic. Well, when this comes out, next week after that I will be back in Atlanta again for a web conference called Connect Tech. And then the week after that I will be in Atlantic City for another game developer conference, Gamecon. 

FRANCESC: Nice. Atlanta again. You really like to go to the same city twice or three times in a row. 

MARK: I try. I try and do that. 

FRANCESC: Yeah. You know, you can also stay there. 

MARK: I could. You're right. No. I think I like going there and coming back. I think it's just something I like to do. 

FRANCESC: Yeah. No. I'm easy too much. Otherwise-- 

MARK: Yeah. Exactly. All right, Francesc, well, thank you so much for joining me for yet another week. 

FRANCESC: Thank you. And talk to you and you all next week. 

MARK: See you next week. 
{{< /transcript >}}