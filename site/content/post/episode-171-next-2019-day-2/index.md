+++
audioDuration = "00:19:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.171.mp3"
audioSize = 28041135
categories = ["Cloud Next", "Next", "Go", "Cloud Run", "Anthos", "Cloud SQL", "Stackdriver"]
date = "2019-04-11"
description = "The podcast celebrates day two of Next as our hosts speak with some more conference attendees."
draft = false
episodeNumber = 171
hosts = ["Mark Mandel", "Brian Dorsey", "Aja Hammerly", "Jon Foust"]
title = "Next 2019 Day 2"
image="/post/episode-171-next-2019-day-2/images/hero/hero-EP-171.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bc5g70/episode_171_next_2019_day_2/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

The podcast celebrates day two of Next as our hosts speak with some more conference attendees. Andre came by to talk with [Aja](https://twitter.com/the_thagomizer) and [Jon](https://twitter.com/syntxerror1) about his work with Stackdriver IRM and their mission for fewer, shorter, and smaller outages.  

We had three hosts in the booth with guest, Anne, who works for the GCP Trust and Security Product Team. [Brian](https://twitter.com/briandorsey), [Mark](https://twitter.com/Neurotic), and Aja find out exactly what Anne does at GCP and how she's enjoying Next! 

Brian and Mark also met up with Mario who came all the way from Munich, Germany. Mario runs the Cloud Community in his hometown, and he shared his thoughts on Anthos and what he's excited about at Next.

Last but not least, Valentin stopped by to talk with Mark and Jon about Go and the presentation he's giving at Next on site performance.

<!--more-->


##### Interviews

* Cloud Next [site](https://cloud.withgoogle.com/next/sf)
* Next On Air [site](https://cloud.withgoogle.com/next/sf/next-onair)
* Google Cloud Next '19: Day 2 Run Channel [video](https://www.youtube.com/watch?v=Hf9PwOR9-hg)
* Google Cloud Next '19: Day 2 Build Channel [video](https://www.youtube.com/watch?v=H_0R9uK_qog)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Stackdriver Incident Response and Management [site](https://cloud.google.com/incident-response/)
* Stackdriver Incident Response and Management documentation [docs](https://cloud.google.com/incident-response/docs/)
* Data Management: The New Best Practice for Incident Response (Cloud Next '19) [video](https://www.youtube.com/watch?v=VXqfbp_zE0c)
* Stackdriver Profiler [site](https://cloud.google.com/profiler/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Increasing trust in Google Cloud: visibility, control and automation [blog](https://cloud.google.com/blog/products/identity-security/increasing-trust-in-google-cloud-visibility-control-and-automation)
* GKE Sandbox [site](https://cloud.google.com/kubernetes-engine/sandbox/)
* gVisor [site](https://github.com/google/gvisor)
* Hybrid Cloud Sessions - Google Cloud Next '19 [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKqrrodcI34M_0Di4B5GFIP)
* Google Cloud Next '19: Day 1 Secure Channel [video](https://www.youtube.com/watch?v=LXjH7bpay94)
* Google Cloud Next '19: Day 2 Secure Channel [video](https://www.youtube.com/watch?v=K5dBYfHaSvQ)
* Anthos [site](https://cloud.google.com/anthos/)
* Meet Anthos! (Cloud Next '19) [video](https://www.youtube.com/watch?v=zlm3scEGjXw&t=10s)
* Introducing Anthos: An entirely new platform for managing applications in today's multi-cloud world [blog](https://cloud.google.com/blog/topics/hybrid-cloud/new-platform-for-managing-applications-in-todays-multi-cloud-world)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Making Google Cloud the best place to run your Microsoft Windows applications [blog](https://cloud.google.com/blog/products/gcp/making-google-cloud-the-best-place-to-run-your-microsoft-windows-applications)
* How to Migrate Windows Workloads to Google Cloud (Cloud Next '19) [video](https://www.youtube.com/watch?v=PIHqvja2Pf0)
* Qwiklabs [site](http://qwiklabs.com)
* Dev.to [site](https://dev.to)
* Go [site](https://golang.org)
* Go Tools [site](https://golang.org/doc/install)
* Cloud Run [site](https://cloud.google.com/run/)
* Announcing Cloud Run, the newest member of our serverless compute stack [blog](https://cloud.google.com/blog/products/serverless/announcing-cloud-run-the-newest-member-of-our-serverless-compute-stack)

##### Where can you find us next?

We're at [Next](https://cloud.withgoogle.com/next/sf) this week! Stop by and say hi!

{{< transcript "[MUSIC PLAYING] MARK: Oh, no, he hit the button. The button's live. This is it. This is going on air." >}} 

BRIAN: OK. We need to do it then. 

MARK: Yeah. 

BRIAN: Hi, I'm Brian. 

MARK: Hey, I'm Mark. 

BRIAN: And this is the "GC" podcast live at Google Cloud Next. Actually, not live. 

MARK: Well, it's kind of live. 

BRIAN: The daily rollout of the "Google Cloud Next" podcast. 

MARK: We're recording it live, but it will be edited and then shipped off. 

BRIAN: I think we should move to interviews right away. 

MARK: Well, no, wait. What episode number is it? 

BRIAN: Oh, number 171. 

MARK: 171. Here we go. 

AJA: Hello, this is Aja, and we're on the floor at Google Cloud Next. 

JON: And I am Jon, and I am excited to be here with Andre Kelly. 

ANDRE: I'm Andre Kelly. I'm the product manager for Stackdriver IRM. IRM stands for Incidence Response and management. 

AJA: So can you tell us a little bit more about IRM? I've heard a lot about it, and I've heard a lot about it actually internally at Google. But I don't know if external folks have heard much about it yet. 

ANDRE: Sure, so IRM's vision is kind of to provide fewer, shorter, and smaller outages. And the way we try to do that is through contacts and continuous learning. One, to bring as much context to the user during a response, and then two, capture that response information, so future outages of similar types are shorter. So natural continuous learning. 

JON: How would developers and anybody using this would be able to access this? 

ANDRE: Sure. So that's a great question. Currently, externally, we're available in the alpha. So you can go to cloud.google.com slash incident-response. And you'll see a page where you can sign up for the alpha. 

AJA: I heard that we're using this internally at Google. Is that true? 

ANDRE: Yeah. That's a good point. I think I'm underselling it a little bit. So you should know that IRM start internally. And it's really the next generation Google incident response set of tools. It combines a lot of known best practices internal to Google and a lot of previous tools that were very disparate, that limited our data analytics capabilities around incidents. 

So you combine it all together in IRM, learning from those best practices and new ideas about data management. How do we leverage the ops data to help the user in the investigation process? That relates to SRE is using it internally. And our dev on-calls are also using it internally. 

JON: How can developers interacting with it-- suppose that there are any issues that they may arise-- how can they submit feedback? Because we're always big on getting our feedback from our developers and making things greater. 

ANDRE: Yes, I totally agree. And being an alpha product, we're looking for that external feedback to make the product better. So in the app, at the top right-hand corner in all Stackdriver apps, there's a button to submit feedback. 

We also have that mechanism, and that mechanism takes a screenshot. So if there's something hokey going on in the UI, it's a great way to submit that information. In our docks, there's also email addresses for contact us. That goes straight to the leadership of the team in terms of issues you're having or if something seems down, for example. 

AJA: I know I'm going to go a little bit away from the specific product, but can you tell us something about SRE philosophies and how you've brought that stuff into the Stackdriver tools? 

ANDRE: Sure. There's about four of them. But one of the key ones we hone in on is make tomorrow better. That just an idea of kind of doing some work today, so tomorrow, this kind of work is easier to do. So it's a lot of ways to go with it. 

So for IRM, that's the continuous learning. Overall, this is also about reducing toil. So things that are very mundane and you do over and over again, how can we make it automated so robots do that? And that's one of the key things, where we say, we bring the context to you. 

What's very common in incident response is to go look at the chart of the [INAUDIBLE] metric, because no one really believes the alert. You have to see it for yourself to confirm that something is actually wrong. I don't want to stay up at 2:00 AM for no reason. And so we just bring that to you. 

So as soon as you respond, do you see that information and things that are really related to it. So that's part of the way we're making SRE tenants come to life. 

AJA: So you are acknowledging the fact that we are human, and we have foibles, and making it so that the tooling works with those trends as opposed to fights against us. 

ANDRE: That's exactly right. We have to recognize humans are humans. 

JON: What would you say is the gem of SRE? Which practice do you believe will be [INAUDIBLE]? 

ANDRE: I think the gem of SRE is actually one of the harder parts of it. It's the culture kind of reflected in SRE. But one of the key things in our culture is the contract, the contract between business developers and operators that we really believe in this [INAUDIBLE] budget. And we're going to believe in SLOs. 

And from that, developers and businesses say, OK, so we know we can push changes this fast to be competitive in the market. And we know that, if in doing those changes, something breaks, we'll know we'll stop, because reliability is of the utmost importance. And that's part of the ops charter. Makes sure the application is available. Make sure that your users are happy. 

But that requires the triad to really agree on what that means, what the guardrails of that kind of responsibility is. And I think that's one of the key things about [INAUDIBLE] every culture that, I think, is key to bring it external as well. 

AJA: That's awesome. So we're actually already out of time. Is there anything that you would like the listeners to know or a place that they can find out more about you or about the tools you're working on? 

ANDRE: So IRM is the tool I'm working on. As you mentioned, we're in alpha, and we plan to do a lot more development. Looking forward to feedback there. So please sign up for the alpha. 

Other things I'm looking forward to is just kind of how Stackdriver continues to provide internal tooling and skill sets externally through our tooling. One of the great examples of is Profiler just went GA today. So we're looking forward to building up on that foundation. 

AJA: That's awesome. Well, thank you so much for joining us. We hope to have you back in a couple months, and we can talk at length about IRM, and incident response, and SRE best practices. 

ANDRE: That sounds great. Looking forward to it. 

JON: Thank you. 

AJA: Hello, this is Aja, and we are here in the "GCP" podcast house at Google Next. And we have another guest. Would you like to introduce yourself? 

ANNE: Absolutely. My name is Anne Bertucio, and I'm on the GCP trust and security product team. 

AJA: That's amazing. And our other hosts here. 

BRIAN: Brian. 

MARK: Mark. 

AJA: Cool, so questions, y'all. 

BRIAN: Actually, what does that mean, the security product team? 

ANNE: Yes. You know, sometimes, I feel like we're a little bit like the special forces. I'd like to get us glitter gold jackets that say trust and security product team. 

AJA: That'd be amazing. 

MARK: Could you do berets? 

ANNE: Maybe very Frenchy berets, you know, like a red and gold. 

AJA: I think that would ruin people's hair. 

ANNE: I'm having even a hard time with these headphones and [INAUDIBLE] 

MARK: Yeah, I'm sorry. 

ANNE: It's OK. But the trust and security product team, so we really focus on everybody has a different area. I'm container security, for example. Some of my colleagues are identity, threat detection. But we really focus on, how do we educate our GCP users about our security features and help them understand what do things do? 

What are they responsible for? That's a big part of it is, GKE, we have a shared responsibility model, helping people understand here's what you're responsible. Here's what GKE security products do for you. 

AJA: I think I understood all that. 

BRIAN: What are we showcasing or talking about here at Next around those topics? 

ANNE: Yes. About container security specifically, we have the GA of binary authorization coming soon, which is very exciting. So binary authorization is deploy time controls, so that you make sure that you only deploy container images that you trust. 

So you can decide what those attestations are. So, you know, you're like, I want to make sure this image got scanned. I want to make sure that my QA team took a peek at it. I want to make sure whatever guardrails your organization needs, that's going in your CI/CD system. 

So it's all about that kind of shifting left mentality. Rather than security comes at the end, security goes through the whole thing, and we make sure that you're deploying what you trust. That's an exciting one. 

We also today, this morning announced the beta for GKE Sandbox is coming soon. And that one is, if you had gVisor last year in Copenhagen when Google open sourced gVisor, container isolation based on a user space kernel that filters sys calls, well, a little more complicated than that. That's a nice way of putting it. I think the gVisor team would be cranky with me. 

But basically, thinking about, how can that user space kernel handle sys calls, so it doesn't get onto the host? And we kind of reduced the tax servers for the host kernel in a container setup. So we now have a productized version of that in GKE. So with one click, you can get GKE Sandbox. 

AJA: Oh, that's super-cool. And it sounds like the trust and security team is trying to make tooling so that people can actually think about this from start to finish as opposed to just, oh, right, this is that security thing. We should probably do that. Is that the whole purpose? 

ANNE: Yes. And also, a big part of our philosophy is that we have this phrase of security by default. And it's really that, out of the box, you should not be able to get yourself into trouble. There's always endless configurations and endless customization. 

But if I just say go, I want to make sure my Kubernetes dashboards aren't exposed. I want to make sure my credentials are latched down. Those things should come out of the box. 

BRIAN: Are there any sessions happening around any of these topics? 

ANNE: Absolutely. Let's see if I can remember them all here. I think, if you go into hybrid and containers, you'll find quite a few of them in there. I know we have GKE Sandbox on Thursday morning. Today at 2 o'clock, there is one on workload identity, which is about keyless entry and authentication for your GKE service accounts. Those are probably my two recommended ones at this point. 

AJA: I think there might also be a couple on the secure channel of the Livestream. 

BRIAN: Excellent. 

AJA: I was looking at that list this morning. 

MARK: They'll all go up on YouTube. 

AJA: They will all go up on YouTube. And if yesterday was any indication, most of them should be up within 48 hours. 

MARK: So by the time you hear this, they're probably online. 

AJA: At least some of them will be. Yes. 

ANNE: If that's the case, I'll make a plug for one that happened yesterday, which is the Kuber Tech's what GKE's shared responsibility model. I think that's a really important one for users to understand. Here's what you're responsible for. Here's what we take care of for you. 

AJA: Yep, I believe that will be going on a secure playlist later today. 

MARK: What's been your favorite thing on the show floor? 

ANNE: I mean, shameless plug is for the container security demo. 

[LAUGHTER] 

MARK: Leading question. That's fine. 

ANNE: So in the security showcase, we have a container security demo, that [INAUDIBLE] off looking at here's some custom attestations. Here's let's actually go through and stop an attack, stop an untrusted image. 

Go back, say, oh, there was vulnerability that wasn't cleared by my team. We're going to go back and change that out. So that's in the security showcase. 

BRIAN: Thank you so, so much for joining us. 

ANNE: Yeah, thank you for having me. 

BRIAN: Hey, we're here on day two with Brian, Mark. 

MARK: Yep. 

BRIAN: And-- 

MARIO: Mario. Hi, I'm GDG organizer from Munich. 

BRIAN: Oh, cool. 

MARIO: And we run the cloud community there. Yeah, I'm happy to be here. 

MARK: Awesome. Well, welcome to Next. Thank you so much for joining us. What's been a highlight for you so far hear at Next? 

MARIO: So basically, two highlights. The first highlight, of course, was Anthos yesterday. But bigger impact even more is for me and for a lot of our customers is MS SQL as a managed database on Google Cloud. 

BRIAN: Oh, neat. I was excited by that, too. But why is that interesting to you and your people? 

MARIO: We have in Germany, a lot of companies still use MS SQL and have big MS SQL clusters. And moving to cloud is hard for German companies. Look at your regulations of GDPR and privacy, and big companies don't trust renders. And they want to have an all bare metal. 

But they start to see that maintaining infrastructure is expensive, and it's hard to do. And they want to move to the cloud. And when you provide managed service like, MS SQL, which is your database that you used for, like, 10, 15 years, it makes them way more comfortable to take the step and move into the cloud. 

MARK: Fantastic, have you seen anything in particular on the show floor that you've also thought was particularly interesting? 

MARIO: Yeah, I talked to the people from MongoDB and from Elastic, and it's cool that Google tries to team up with the different databases, and search engines, and all of the open source projects that are basically out there, and try to move it into the cloud, as well as you don't need another service and another service and another service provider. You can just have everything under one company. 

BRIAN: All connected closely-- synergy. Is there anything you'd like to make sure more people knew about your work, or Cloud, or other things? 

MARIO: Actually, there is. So we did a lot of study gems in the last month to get people involved into, yeah, what is Cloud? What is infrastructure? And when you do a show of hands, you have a room of 40 people, 50 people, and you ask them, yeah, do you use containers? And you get all of them showing the hands. 

And then you ask something like, do you use Kubernetes? And you have, like, three people in the room showing hands. And what the industry thinks is standard or what many people say is standard, like yeah, all of the people use Kubernetes. It is not the case. 

So there are a lot of companies, especially, that are not so big, like not of the big players, but still have a lot of systems going on. And they don't know about the technology, or they are afraid of moving the technology there. Because we did it for 10 years, and we will continue it the way how we do it. 

And when you show them things, like Kubernetes, or you show them a service mesh, with Istio where they can integrate their bare metal machines, combined with remote holstered machines, they love it. But they don't know about it. And I think what is our job to do as communities or experts in this field is approach the people. 

Show them there are cool new ways that make your job easier and provide free trainings, like the Google community start with Qwiklabs to just teach people there are cool new ways. There are cool new technologies. And they are not hard to learn, but we just have to go out and get the people to do it. 

Because it's not a thing about yeah, it's only working in Google Cloud. Because everything is open source, and you can do it and use it wherever you want. And this is really, really cool. 

BRIAN: You mentioned Qwiklabs. But are there any other particular resources that you would recommend for people who are looking to level up, so to speak, on things like that? 

MARIO: There's actually a really, really nice open source platform for blogging, which is dev.to, and it's a really growing community. And you have lot of people there that are just started getting into technology. And there are also a lot of meta articles for diversity and getting involved in tech communities. And there are a lot of resources, where you can find, how do I use Docker in two article series and stuff like this. And I think this is the resources that the people should check out. 

MARK: Awesome. Dev.to. Thank you very much for coming and taking time to chat with us. 

MARIO: Yeah, thank you for inviting me. 

MARK: Thank you. So super-happy here at the Next show floor to have Valentin Deleplace joining us today to chat about Go stuff. How are you doing, Valentin? 

VALENTIN: I'm fine. Thanks for having me, Mark and Jon. 

JON: Me and Valentin are very good friends. 

MARK: Oh, excellent. Then you can just chat, and I'll sit back. 

[LAUGHTER] 

So, Valentin, I believe you're speaking here at Next. 

VALENTIN: Oh, yes, I am. That's tomorrow. 

MARK: So what are you talking about? 

VALENTIN: I'm talking about performance and, more specifically, performance in Go in a public cloud and more specifically, let's say, GCP. 

JON: Pretty sure the gophers are going crazy right now. Can we look forward to possibly seeing you on livestream, so that our external viewers can see you? 

VALENTIN: Oh, yes, I just got very confidential information that confirmed that I will be livestreamed. 

JON: Nice. 

MARK: That's good. That should mean as well, if you're listening to this later, it'll be up on YouTube pretty fast. 

JON: Exactly. 

VALENTIN: Oh, good to know. 

MARK: Yeah, so what sort of stuff are you covering? When you say performance, that seems like a very big topic. What does that mean to you? 

VALENTIN: Yeah, so performance is making things faster, especially when things are a little bit too slow. And my talk is part high level, because it's not specific to Go, and it's not specific to the cloud. It's sometimes about saving cost and handling more throughput, scalability, et cetera. 

But that's boring. What I'm really talking about is about improving user experience by making everything fast, snappy. That's the real point, because we care about humans not about machines. 

JON: That's great. And can you give us a sneak peek as to what you would consider one of the more optimal solutions to making things faster and quicker? 

MARK: Hot tip. 

VALENTIN: I'll give you the answer. It depends. 

[LAUGHTER] 

No, seriously, the most important thing is not to have a lot of prejudice about what is fast, what is a good user experience. You really have to measure to find the bottleneck. And oftentimes, it's not where you think it is. And once you have the bottleneck, you work on that. And very often, it's possible or even easy to fix that. 

MARK: What are your favorite tools for tracking performance metrics or things like that? How do you observe this? 

VALENTIN: So I love the benchmarking tool integrated in the Go toolings. That's really great. And then I really, really love trace and pprof It's pretty mainstream. I mean, many Go developers are already use this. And if you're not sure what the execution tracer is or what pprof is, then you should definitely come to my talk tomorrow. 

MARK: Excellent. What's been your favorite announcement so far here at Next? 

VALENTIN: Well, I think we can say that Cloud Run is huge. I mean, serverless plus containers, that is so great. Thank you, Google. 

MARK: Coming back to your talk, what's the biggest challenge you see people facing in regards to performance, in regards to their applications? 

VALENTIN: Well, that's a great question. Usually, it's a lack of observability, because it's always two parts. First, you measure, and then you fix things. And observing what is slow and what is fast is not as obvious as it sounds. 

So there is tooling. Sometimes it's well integrated, and sometimes it's a little bit more challenging. And what I witness is, as soon as we've done the first part of the work-- that is clear observability with a nice waterfall view or things like that-- then it becomes much more easy to make the program faster. 

JON: Last question before we let you go is, who would you say your talk is mainly geared towards? I know you said it's more of an experience talk. But we'll let our viewers know exactly who should follow along. 

VALENTIN: Yes, so the great thing about cloud and the virtual machines and the serverless, et cetera is that the cloud components more and more decoupled for the choice of your language. So most often, you can choose any popular language, and it will work. So some folks are using more and more public clouds, and they are wondering, should I use Go? Is it a good idea? Will my team of developers use that? And like that. 

And the key message that I'm saying is that Go is a really strong and good choice for cloud computing. And I just don't say it. I also demonstrate it. 

JON: Well, that's great. Well, Valentin, thank you for joining us and really, really looking forward to your talk. 

VALENTIN: Thank you, Jon. Thank you, Mark. 

MARK: Thank you. Boy, that was a bunch of great interviews. 

BRIAN: Awesome. I mean, it's super-cool to see the energy. It's super-cool to see the people here. I think we got a lot of cool people coming by and just talking to us about what they like at Next. 

MARK: It's just the best thing. All of the people you meet are into Cloud, doing amazing things with it. It's fantastic. 

BRIAN: It's super-cool. I can't wait for the next episode. Okey doke. 

[MUSIC PLAYING]