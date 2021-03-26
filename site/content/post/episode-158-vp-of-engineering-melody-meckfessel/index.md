+++
audioDuration = "00:33:28"
audioFile = "Google.Cloud.Platform.Podcast.Episode.158.mp3"
audioSize = 48590859
categories = ["DevOps", "Kubernetes"]
date = "2018-12-05"
description = "Melanie and Mark talk with Google Cloud's VP of Engineering, Melody Meckfessel, this week."
draft = false
episodeNumber = 158
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "VP of Engineering - Melody Meckfessel"
image="/post/episode-158-vp-of-engineering-melody-meckfessel/images/hero/hero-EP-158.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/DsbZ16A5Xem"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/a3e33f/episode_158_vp_of_engineering_melody_meckfessel/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) talk with Google Cloud's VP of Engineering, [Melody Meckfessel](https://twitter.com/mmeckf), this week. In her time with Google Cloud, she and her team have worked to uncover what makes developers more productive. The main focus of their work is DevOps, defined by Melody as automation around the developer workflow and culture. In other words, Melody and her team are discovering new ways for developers to interact and how those interactions can encourage their productive peak. 

Melody and her team have used their internal research and expanded it to collaborate with Google Cloud partners and open source projects. The sharing of research and products has created even faster innovation as Google learns from these outside projects and vice versa.
 
 In the future, Melody sees amazing engagement with the community and even better experiences with containers on GCP. She is excited to see the Go community growing and evolving as more people use it and give feedback. Melody also speaks about diversity, encouraging everyone to be open-minded and try to build diverse teams to create products that are useful for all.

<!--more-->

##### Melody Meckfessel

[Melody Meckfessel](https://twitter.com/mmeckf) is a hands-on technology leader with more than 20 years experience building and maintaining large-scale distributed systems and solving problems at scale. As VP of Engineering, she leads the team building DevOps tools and sharing DevOps best practices across Google and with software development and operations teams around the world. Her team powers the world’s most advanced continuously delivered software, enabling development teams to turn ideas into reliable, scalable production systems. After graduating from UC Berkeley, Melody programmed for startups and enterprise companies. Since joining Google in 2004, Melody has led teams in Google’s core search systems, search quality and cluster management. Melody is passionate about making software development fast, scalable, and fun.

##### Cool things of the week

* Mark is back from vacation!
* We are at 2 million downloads! [tweet](https://twitter.com/GCPPodcast/status/1069078381545713665)
* Greg Wilson [twitter](https://twitter.com/gregsramblings/status/1069304250792992768) and [github](https://github.com/gregsramblings/google-cloud-4-words)
* Open source gaming:
     * Agones - 0.6.0 - [site](https://github.com/GoogleCloudPlatform/agones/releases/tag/v0.6.0)
     * Open Match - 0.2.0 RC - [site](https://github.com/GoogleCloudPlatform/open-match/releases/tag/020rc2)
* What’s new at Firebase Summit 2018 [blog](https://firebase.googleblog.com/2018/10/whats-new-at-firebase-summit-2018.html)

##### Interview

* GCP Podcast Episode 137: Next Day 1 [podcast](https://www.gcppodcast.com/post/episode-137-next-day-1/)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* GitLab [site](https://about.gitlab.com)
* Google SRE [site](https://landing.google.com/sre/)
* Borg [site](https://ai.google/research/pubs/pub43438)
* Cloud Spanner [site](https://cloud.google.com/spanner/)
* Go [site](https://golang.org)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
* Skaffold [site](https://github.com/GoogleContainerTools/skaffold)
* Minikube [site](https://github.com/kubernetes/minikube)
* DORA [site](https://devops-research.com)
* Cloud Build [site](https://cloud.google.com/cloud-build/)
* Bazel [site](https://bazel.build)

##### Question of the week

If I want to configure third party notifications (such as Slack or Github) into my Cloud Build configuration - how can I do that?

* [Sending build notifications](https://cloud.google.com/cloud-build/docs/send-build-notifications)
* [Configuring notifications for third-party services](https://cloud.google.com/cloud-build/docs/configure-third-party-notifications)

##### Where can you find us next?

Mark will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) next week.

Melanie will be at [NeurIPS](https://neurips.cc) this week. She'll be attending [Queer in AI](https://queerai.github.io/QueerInAI/QinAIatNeurIPS.html), [Black in AI](https://blackinai.github.io), and [LatinX](http://www.latinxinai.org) this week as well.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 158 of the weekly Google Cloud Podcast. I am Mark Mandel. And I'm here with my colleague, Melanie Warrick. Hello, Melanie." >}}

MELANIE: Hello, Mark. 

MARK: I am back from vacation. 

MELANIE: Welcome back. 

MARK: Thank you very much. 

MELANIE: Do you feel rested? 

MARK: I feel rested. Thank you for taking care of things while I was gone. 

MELANIE: Yes. Well, somebody had to keep it insane. Keep it insane. [CHUCKLE] Someone had to keep it straight. 

MARK: Yeah. Somebody's got to keep the lights on, I understand. 

MELANIE: Something like that. But yeah, we survived. 

MARK: Awesome. What are we doing this week? 

MELANIE: That's a great question. What are we doing this week? 

MARK: This week, we're talking to VP of Engineering Melody Meckfessel, which is a great interview. Really looking forward to getting stuck into that. And then after that, we have our question of the week. If I want to configure third-party notifications, such as Slack or GitHub, into my Cloud Build configurations, how can I do that? 

MELANIE: That's a great question, Mark. Where did that question come from? OK. So cool things of the week. Let's go ahead and get started with that. We've already said that you're back, but I think one of the big things for us this week and specifically at the beginning of this week, we had two million downloads. 

MARK: Yes. I know. Crazy. Wow. 

MELANIE: Thank you, listeners. 

MARK: Thank you, listeners. Thank you, everyone. Thanks to you, Melanie. Thanks to Francesc. 

MELANIE: You got to get that in there, because you know he's going to call you out. 

MARK: You know he's listening. I know he's listening. 

MELANIE: If he doesn't hear that, he's-- anyways, yes, thank you, Francesc. But also, yes, good job, Mark. 

MARK: Yes. 

MELANIE: It's been a little more than three years. And the two million came in a little bit more than nine months after the first million took about 28 months. 

MARK: Yeah. As long as things go up and to the right, everything's fine. 

MELANIE: So clearly, people like this. 

MARK: I hope so. 

MELANIE: Supposedly. Maybe not. No. So yes. Thank you. Thank you, listeners. 

MARK: Thanks, everyone. 

MELANIE: I know last time we didn't mention it on the podcast itself, but yay, podcast. 

MARK: It's a good run. 

MELANIE: Good guests. OK. Another cool thing of the week that we wanted to mention is that our glorious leader, [FANFARE] as Holden might say, is Craig Wilson from the team. He has been sharing out this Google Cloud developers cheat sheet. And he has created a GitHub repo now that you can use to access it. He's got a number of different things on there that you can use to play around with. But it's a nice cheat sheet that gives you just these four-word-- 

MARK: Definitions. 

MELANIE: Definitions, yeah. Four words or less. 

MARK: It's not a strict four word. 

MELANIE: If you want to know about GCP cloud, or Firebase, or Apogee, any of these things, if you have questions and you don't want to have to spend a lot of time reading up on them, you can just take a look at the sheet and it will give you a quick summary. 

MARK: Yeah, because there's a lot of things now. 

MELANIE: Yeah. 

MARK: There's a lot. 

MELANIE: All right. Mark, you get something for us? 

MARK: I got some fun stuff. So on the open-source gaming front, Agones, the open-source Kubernetes-based game server scaling and hosting solution-- 

MELANIE: That you created. 

MARK: Yeah, that I started along with some other people. We're in 0.6.0 right now. So we just had a release on that. Every six weeks that's happening. But yeah, that's going along at quite the ready clip. 

Along those veins as well, Open Match, the open-source matchmaking platform, has gone 0.2.0 release candidate. There's a bunch of new functionality in there as well. They're refactoring a whole bunch of things in there. And it's turning into a really nice little platform. 

MELANIE: Woohoo. 

MARK: Yeah, it's pretty sweet. 

MELANIE: And another cool thing we want to mention is some of the cool things announced over at the Firebase Summit. There's a good blog post that covers that. Apparently, Firebase is being used by over 1.5 million apps. 

MARK: Yeah, they've got a bunch of new features actually. A whole slew of stuff that I actually didn't realize that was in here. 

MELANIE: One in particular you're very excited. 

MARK: One in particular I am very excited about. So iOS support for Test Lab has gone GA, which I am very excited about. So Firebase Test Lab is a platform for testing your mobile apps in real, live environments. And now you can do it both on Android and iOS, which makes me very, very happy. 

MELANIE: Woohoo. 

MARK: There's a lot of cool stuff in here from performance monitoring enhancements, crash analytics being integrated with PagerDuty, doing more stuff with BigQuery and Data Studio, lots and lots and lots of cool things. 

MELANIE: And you can read all about that on the blog post that we will include a link in the show notes. 

MARK: We will indeed. 

MELANIE: All right, Mark. I think that's it for our Cool Things of the Week for this week. So let us go talk to Melody. 

MARK: So I am definitely very, very excited to have Melody Meckfessel, VP of Engineering, here at Cloud joining us yet again on the podcast. How are you doing, Melody? 

MELODY: I'm doing well. Thanks for having me. 

MARK: Thank you so much for joining us today. I'm looking forward to talking to you again. In case people didn't go back and listen to the episodes we did around Next, can you tell us a little about who you are, what do you do, what's your background? 

MELODY: Ah. Got into computer science right after college, building systems at a startup, and enterprise software. I actually have my Google-versary this week. I know. I know. 

MELANIE: Congrats. 

MELODY: And several years ago, I started working on how to make developers at Google more productive. Where were we wasting time? How do we make them happy? And it's really been this awesome journey of learning about how Google has made one of the most productive and highest velocity engineering teams in the world. And how do we bring that out to other communities outside of Google? So teams doing open-source development, teams interacting with Android and Chrome, and then also, developers and operators using Google's Cloud Platform. 

So it's this really awesome blend of sharing what we've learned internally; collaborating with our partners to be providing the best services in the ecosystem; and then contributing to open-source products that are already out there that developers love and care about or open sourcing things that we feel like the community would benefit from. So what really motivates and inspires me is how does my team and how does Google help influence and improve how software engineering happens in the world. And it really is about the people, you know, the developers all different backgrounds, operators all different backgrounds getting the benefit out of the work that we've done. 

MELANIE: What are some of the key successes for you for this year that you've seen in terms of helping developers? 

MELODY: You mentioned Next. This was kind of our debut year a little bit. We launched Cloud Source Repositories, sort of the next level, bringing code search. And Cloud Build, integration with some great open-source partner work. And then I have made some significant improvements in Stackdriver, which provides monitoring solutions for operators. 

We launched Instant Response in Management. So that's used by Google SREs, as well as operators using Google's Cloud Platform. So it really is about this end-to-end experience for what people call DevOps. And the way that we think about DevOps at Google is automation around the developer workflow and the culture. So the practices and the ways in which the humans are interacting. 

That was a big thing for us this year. I'm pretty excited about it. And when I look at it, it's like open source, great partner integration, working with folks like GitLab, and integrating with GitHub, and then putting some products out to the marketplace, which has been a lot of fun. 

MARK: Just a couple of products, not a lot. 

[CHUCKLING] 

Now, you mentioned something interesting there too, where you were talking about the incident response used both by external people, like people who develop on Google Cloud, as well as SREs. Is that a pattern that we're looking to keep going with, where stuff is both internal external or bringing stuff internal to external? 

MELODY: It is. We've sort of optimized internal to our environment. You think about, like Borg, and you think about us taking our storage systems out into the market with Cloud Spanner, right? Great launch this year. But I think there's magic that can happen when both the internal Google teams and external teams are using the same products and learning from each other. We're hearing input from our customer teams that we're then bringing back to help us innovate internally. And that's just such a magical bi-directional sort of learning that can happen between these communities. And my goal is to have that happen as much as we possibly can, where we break down walls so that developers and operators can learn from each other. 

MELANIE: Nice. Where do you see this going in terms of trends? What you've seen so far. What do you think that's going to look like the next year and beyond? 

MELODY: So probably heard about this thing, Kubernetes? 

MARK: (SARCASTICALLY) No, no, nah. 

MELANIE: (SARCASTICALLY) Mark never talks about that. 

[CHUCKLING] 

MELODY: Well, you know, amazing engagement with the community. And just looking at the data of enterprise customers experimenting with Kubernetes and bringing it into their on-prem environment. So our goal in DevOps is to have an amazing experience for containers on GCP. This is a theme that we committed to. You look at our launches around vulnerability scanning, around the support in Stackdriver, across the board we want the best experience for using containers to be on GCP. Again, in a way that's open and builds on all the great momentum that's happening in the community. 

So that's a trend that I don't think we could have predicted how quickly teams would be adopting use of containers in their business, and how they write applications, and how they modernize. So that's a trend that I see just up and to the right faster than we can predict in many ways. And when enterprises are looking to modernize their applications, there's some ridiculous statistic, very high, meaning in the 80%, that they're looking to use containers for modernizing on-prem and then as they come to the cloud. 

So that's a trend we're fully committed to. It shouldn't be surprising. But I think the usage in terms of adoption is happening much faster than we thought it would. So we're paying attention to that. We're looking at adoption. We're looking at customer feedback. 

The other trend that I would highlight would be Go. The Go community is thriving, right? The predictions of usage increase. The feedback around respect and inclusion in the community is really inspiring to me and just awesome. And so that in terms of Google's contribution and participation to that community, really committed to continuing to make Go a great language that solves a variety of problems and works great on GCP. 

The third pattern that I would highlight would be we started this experiment within Google to learn about developer productivity. An interesting part about this is that it has both qualitative and quantitative. So we measure everything at Google, right? We're always trying to learn from the data. But there's also a qualitative aspect of this of how happy are the humans? How satisfied are they? And you know, engineers are tough to make happy, right? [CHUCKLING] We have a general healthy skepticism and keep raising the bar. 

MELANIE: Spaces and tabs. 

MELODY: So one of the things that we're really excited about is bringing some of those insights into productivity out into the market. And when I talk to our partners, we're all sort of thinking about as millions of developers come to the cloud, how do we help have them be productive, and maybe a little bit happy, and enable to create and take their ideas to reality in a way that's a good experience? So that's a trend that I see us being very committed to in terms of helping developers and operators on the platform. 

MARK: You were talking a little bit about Kubernetes and running anywhere. I'd love to hear your take on where you think hybrid cloud is going. Is that something you think is going to expand more or contract? 

MELODY: Yes. Yes. So again, we look at the research data. We're pretty committed to learning from our customers. Again, in the mid 80% enterprise customers are looking to hybrid cloud. They're committing to solutions that support hybrid cloud. 

Amazing announcement with GKE On-Prem, right? Great feedback around that alpha launch that's coming in. From a DevOps standpoint, help the developers and operators be productive, whether they're on-prem or on the cloud. And we know that customers are going to be making different decisions around their journey to the cloud, so we want to support them in that and empower them in that. I think yes and yes, it will continue to be a key priority for GCP and for making developers and operators happy. 

MELANIE: So you had mentioned before, I know we talked already a little bit about Kubernetes, what are some of the other open-source projects that you're particularly excited about that you may have a bias about that are specifically ones that you enjoy and inspired by? 

MELODY: So I will highlight a pattern that I'm seeing, which is-- 

MELANIE: I like that. 

MELODY: --not anything specific. But I think if you look at the pattern, you can see a bunch of really cool innovation happening. So the CI/CD, Continuous Integration Continuous Delivery, space is really fragmented. And so, what we're seeing is, either around Kubernetes or around aspects of what developers are trying to solve these problems, there's these open-source tools that are coming up that are very specific to particular things that developers need to do. So an example of that would be Scaffold, which we talked about at Tokyo Next. It's focused on how do we make it really easy to run Kubernetes on your local environment. And we know that developers want to be portable. They want to develop anywhere. 

So you can see these bits where, hey, there's this pain in my workflow. I'm going to develop something that is open source first that can get contributions from the community. Same thing with Minikube, which was something we released a while ago. But I think that part of the ecosystem is incredibly creative and inspiring in that the community is looking for, like, solve specific problems that's grounded in pain that developers are feeling today. And so, I'm sure there's big massive open-source projects that we don't even know about that are on their way. But I think I'm sort of inspired by some of the smaller things that I'm seeing that are gaining traction that are helping developers get their job done. 

MELANIE: I like that. 

MARK: That's very cool. 

MELANIE: Yeah. Another question, actually, that's come to my mind. Where did you start out? 

MELODY: Well, I guess I should say I grew up in rural California. So there were literally eight kids in my elementary school class. Like, math, and science, and computer science were not top of mind. But I feel super grateful that I had some teachers that saw that I was really interested in math and science and through up into college really supported me in seeking out how to learn about this area. 

Got to college. Wanted to learn more about computer science. At the college I went to wasn't a great community. So I studied some other things. I studied biology and history. And then was dabbling on the side and taking classes and learning more. 

And I started my career at a startup, where I was having to do pretty much everything. Learn the front-end, the back-end. We call, full stack developer. 

MARK: Before that, that was just a job. That was what you did. 

MELODY: That was what I did. And then I started working building enterprise software for banks and energy companies and saw what happened with the bubble and bust in Silicon Valley and multiple iterations of that. 

So it's definitely been quite a journey of seeing how the industry has evolved, seeing the patterns of sort of ebb and flow of grounding in the business and grounding in what users need. And also, seeing the tests that have happened. There's a big cultural test I think going on right now in the valley around inclusion and diversity. I'm really committed to, in the work that we're doing in DevOps, creating the most inclusive and respectful experience for developers and operators. So if you think about great interactions in code review. 

MELANIE: And I'll deviate for a second. Are there any specific things that you recommend for those who want to be more inclusive in regards to code reviews and other types of just bringing people into these type of things, bringing into tech? 

MELODY: Again, if we come back to the data, all the data shows Google and many other tech companies are building products for a diverse set of users. However, when you look at the humans that are actually building those products, it's not a diverse team, right? So we miss things, right? We miss. And you can look in examples of just missing it. 

And we need to do a better job. We need to be explicit and thoughtful about the communities and the users that we're serving. And I strongly believe that diversity of perspectives will lead to better products for the diverse set of users that we're trying to help. 

So what people can bring. Bring openness. Bring curiosity. Bring questions. Be respectful and open to different perspectives. Listen. We all have a part to play in every interaction. 

MELANIE: I mean, here you have this wonderful robust extensive experience in the space in general that you're able to bring to how you view how you lead. What are some of the key skills that you feel like you've been able to gain over the last several years in particular that's helped you really lead and transition more as a leader? You're building, but you're leading others to build now. 

MELODY: Yeah. I have had some awesome allies and mentors that I've gone to for help that really helped me check my own stories that I would tell. I know I've mentioned this to you before, I'm a big fan of Brené Brown. 

MELANIE: Yes, you have. 

MELODY: I'm going to butcher the quote. But she has something, like, sometimes the most courageous thing we can do is just show up. And I think showing up as who you are is something that I have learned over the years in tech, being the only woman in the room many, many times, to show up in how I want to model leadership. And that comes back to caring and kindness for the people around me and inspiring toward these big audacious goals that we have in the world. 

I really believe that we work really hard on these goals. We spend a lot of time together. And the experience of people working together, feeling cared for, feeling respected, feeling like their perspective is valued is such an important part of doing good work. And when people don't feel like that, it's going to be more difficult to accomplish those big audacious goals. 

So for me, the transition in leadership was embracing showing up as myself and coming from a place of caring and kindness for the people around me and really showing that to people, along with the technical debates and the details and all that great stuff. We can have both. 

MARK: And to bring that full circle as well, I'm guessing that feeds back into as you look to developers or people who use our products, how to make them happier as well. 

MELODY: Yeah. So user experience research, right? Learning. Listening to them. Listening to their perspectives. Hearing what's working for them, what's not working for them. Coming from a place of empathy of how to help them. I really believe in the more we see the pain in the products that we're developing, the more focus we're going to have to solving those problems-- which to come back to your point about Instant Response in Management, we need to make sure that we're addressing the pain points for both our internal communities and our external communities, and that keeps us super focused on making that the best experience that we can. 

MELANIE: What do you like to hack on when you have your own downtime? 

MELODY: I don't know that I'm getting a lot of downtime these days. 

MELANIE: Probably not lately. 

MELODY: But what do I do when I have a block of deep work time? It is about writing down and then getting at the whiteboard around the things that we need to be thinking about a year or two years from now. So really pushing ourselves on the bleeding edge of what the experience could be. I think there's just a lot of room for improvement in how developers write software and how much toil there is. And there's some things a year or two out around how to have the experiences be more natural, more insightful, more intuitive, include more automation that I want us to work on. So when I have downtime, I write and whiteboard and start to put the ideas out there so that we can iterate on them. 

MELANIE: And strategize? 

MELODY: Yeah. 

MELANIE: You were talking about Brené Brown in particular as a resource as somebody who's inspired. But when you're thinking about what's next and where things are going, what are some resources, and people, and tools that you turn to help you get some ideas? 

MELODY: I turn to research, and internal data, and external data. So there's an organization called DORA, which is the DevOps research group led by an awesome team, Nicole, and Jez, and Gene, Soo. They have been studying DevOps practices and what makes DevOps teams perform well for a long time. They just released a report. So that's something that Google helped sponsor and are a big believer in in terms of understanding the practices. So I look to that. 

One of the themes that came up in the latest report was security and this idea of shifting left. How can you move security closer to code, then you're finding a security issue out in production. So we're really listening to that external research as a way to sort of think about how we embed security practices, and policies, and automation closer to the code much farther away from the end user impact, just as an example. 

So I look to research. I look to research internally. We have a great research organization team here that meets with customers, that works with external customer survey groups. And we do our own surveys. So I'm really looking to hear from people and understand that data as I'm sort of processing what's next for us. 

MARK: Given that you're doing all that research, and you mentioned security, but what are the challenges that you're actually seeing people are having out in the wild? 

MELODY: Well, one is that the toil is so high. 

MARK: Yeah. 

MELODY: Right? So it's like, how do I know what to use? And how do I create the glue to keep it all together? Lot of pain around that. 

Security is really top of mind. So if you think about the patterns of open source usage, again, up and to the right. Enterprise companies are adopting open source. Everyone's using it. The rate of contributions is increasing. Do we know what our dependencies are to open source? We don't have a lot of transparency into that. 

MELANIE: We don't. 

MELODY: So there's risk, right? And that's a problem Google will help solve in the community. So transparency is a big one. We don't know what we're dependent on in the stack. Security, transparency, I think moving quickly, right? 

So I will say, coming back to productivity, when I talk to customers, the productivity in some of their organizations is low. And when you do some debugging, it could be because the teams don't trust each other, right? There's resistance to releasing software. So they have one release a quarter, right? Versus 10 releases a day. So you sort of dig into, how do we help teams learn and build trust? But yeah, I would say security, transparency, productivity, continuing our focus on automation, people are struggling with that. And then I think Google can help play a role and embrace standards that are starting to evolve in the different spaces that we're working. 

MELANIE: Particularly, the fact that you'd mentioned about people struggling with the automation piece, it's interesting to watch. Because I know I've seen us moving in these fits and starts in some ways of we want to automate as much as possible, but yet we also recognize there's only so much that can at certain times be automated, and it's continually evolving. But it's fascinating. And it's fun to watch too in a lot of ways. 

MELODY: Another point around that is that, more so than any other time, 60-plus percent of developers feel like they have a choice in their toolset. So the fastest way to make a developer unhappy is to waste their time. They're going to pick the thing that makes them productive. They're empowered, right? So if you look at automation, they want the thing that's going to help them remove that toil. 

MELANIE: Yeah. I mean, especially when you're doing anything with machine learning and trying to model, the last thing you want to do is spend most of your time just trying to set up your system. You want to just get to like [INAUDIBLE] if anything, and then also getting the data and cleaning the data. That's where a large part of your time will get sucked into. The more you can actually automate that, the faster you can get to a solution. 

Off that note, I might as well go for this question, since we are the "Google Cloud Podcast." Are there any cloud products that particularly are your favorites? 

MELODY: I don't know. 

MARK: Do you have a favorite child? 

MELODY: No. No. I think-- 

MELANIE: Since you have an emphasis on DevOps, maybe there is a favorite there. 

MELODY: Yeah. I'm pretty excited about the contributions that we're making in the Cloud Build space. It really is a combination of first party solutions that automate and work well on the platform. It's great integration with our partners. There's open-source components of it. Bazel, we open-sourced Google's build system, has a part to play in that. 

And I think on the ops side, I'm super inspired by the work that the team has done within Stackdriver to bring SRE tools and practices out into the external community. I spoke at our Cloud SRE summit last week, and there's just so much excitement about bringing the best practices, the insights, right? Helping people get the insights, so they don't have to go down the rabbit hole of debugging things or struggling, which really gets to the better business outcome for those teams, right? But minimize the user impact, that's the end game. 

So I'm super excited. I mean, we have a ton more work to do. We're really excited about the features we're developing. And I think 2019 is going to be an exciting year. 

MELANIE: If you weren't doing what you're doing right now, what would you do? 

MELODY: I don't know. That's a great question! I am coaching elementary school girls volleyball team. And I have to say, it is such a joy. 

MELANIE: Yeah? Completely different shift in mind? 

MELODY: Some sort of teaching thing. Working with people. 

MELANIE: Making things easier? 

MELODY: Yeah. 

MELANIE: We talked about this to a degree before, but what advice would you give to those who are growing their career in engineering? Especially in the DevOps space, is there any advice in particular you give to them? Because I know it's different now. Still, there's similar challenges of getting into the space. 

MELODY: So there's a couple points that I would highlight. Really try and find your passion in the space. There's this whole idea of purpose and passion. When I talk with engineers that are new to the space or new in the field, find something that really they can connect with. And I think from my own lessons learned in my career, when I wasn't connected to the work in some way, inspired by it, things didn't really go as well as I would have liked. 

MARK: That's fair. 

MELANIE: Yeah. I can very much relate to that. 

MELODY: The second thing I would say is find your people. Find the people that are going to support you and challenge you within your team and outside of your team that are going to be there to help when you have a question. 

And then the final thing. I think it's really important for people to show up around who they are and what they have to contribute. I've been in these amazing tech design sessions, where we're at a whiteboard and someone who maybe doesn't speak up all the time contributes something, and it shifts the conversation. So be willing to take those risks to speak up, even when you're in early stages of your career, early stages of building your domain expertise. I mean, I think one of the great things about tech is we're always learning, right? It's always changing. And so, if we have that beginners mindset, we're all kind of in the same place. We all have imposter syndrome. 

MELANIE: Yes. Yes, we do. 

MARK: Except for one of our friends. 

MELANIE: Except for one who doesn't. Yes, you're right. 

MARK: In previous episode. 

MELODY: But I mean, I say it all the time, software is a team sport. 

MARK: Yeah. 

MELODY: Sure, you can write software on your own. But the fun and the impact is so much greater when you do it together and you do it with a team that you have fun and you can look to for support. And so, my advice would be find that team where you're excited about the work that you're doing, that you can do it together. 

MELANIE: Yeah. And off of that also, for anybody who's considering leadership in software and tech, any advice for them specifically? Don't do it. 

MARK: We ask the hard questions here at the "GCP Podcast." 

MELANIE: Only the ones that make people cry. 

MELODY: No. Things are moving really fast. So as a leader, you know we've talked just in the short discussion today about continuous learning. 

MELANIE: Yeah. 

MELODY: You have to do it, right? Staying close to your user communities. Looking for good solutions, because no company is going to do it all, right? So this combination of first party open-source partner integration. And as someone coming into this space as a leader, sort of being thoughtful about pulling together the resources to create the best offering for the particular problem that you're solving, and doing that in a way where you're building a team that has different perspectives and different areas of expertise to contribute to that problem. 

So I think being really open is an important part of leadership, being curious. And then investing in people to build the team, because your job as a leader is really to serve your team and to provide direction and guidance and support. And so, really embracing that, I think, is key to being a successful leader. 

MARK: You were talking a little bit about an empathy as well in the general sense. You feel that also has a deep impact as well in leadership skills? 

MELODY: It does. Understanding what motivates people and what people care about and what they're connected to. Understanding people are going through all sorts of things outside of work. And I think there's a real opportunity to come from a place of understanding and empathy, as you said, with what's going to help people be their best self when they show up at work. 

MELANIE: Nice. I think we're pretty much at time. But Melody, is there anything else we haven't covered that you wanted to touch on before we let you go? 

MELODY: No. I want to say thank you. I love the podcast. I'm just going to keep following it. 

MARK: Thank you for coming. 

MELANIE: Thank you for coming on. We're really, really glad that you were able to come back and join us the second time this year. So thank you very much for that and for helping us wrap this up too. 

MARK: Awesome. 

MELANIE: Thank you, Melody, for coming on the podcast with us. I know we were really grateful to get time again with you this year. I think you were our only guest that we've had twice this year. 

MARK: Yeah. Thank you so much. Yes. Indeed. 

MELANIE: Mark, that's our last interview for the year. 

MARK: It is our last interview for the year. So next one, we're going to do a wrap up episode like usual. 

MELANIE: This is almost done for 2018. 

MARK: Yeah. 

MELANIE: It is 2018. 

MARK: It is 2018, indeed. 

MELANIE: Anyways, all right. So question of the week-- if I want to configure a third-party notification, such as Slack or GitHub, into my Cloud Build configuration, how can I do that? 

MARK: Excellent question. So Cloud Build's a really nice server. Cloud Build is continuous integration deployment platform that we have Google Cloud. It's quite flexible in that what it does when it starts things and ends things, et cetera, is it pushes everything to a Cloud Pub/Sub topic, and then you can listen into those Cloud Pub/Sub topic notifications. 

So when it sends data to a topic called Cloud Builds, you can notify on a variety of things. And one of the easiest ways of doing it is, actually, just using Cloud Functions. So you can hook a Cloud Function into a Pub/Sub notification, and then act upon it. 

So there's actually an example we're going to link to in the show notes of setting up an integration with Slack, but you can do anything with it essentially. So if there's an external web hook-- so you might want to send stuff to GitHub, maybe you want to send stuff to something like SendGrid, or Mailgun, or a variety of other things in there. So from email notifications to all sorts of other stuff or just making interesting things happen inside your system, you can do that. So yeah, Cloud Functions is a great way to test this stuff out and get a nice little easy way of building it. 

One other cool thing I like about this too is if you really want to, you can do it all in Cloud Shell. Because it's JavaScript, it's not hugely complicated. You're usually only building one function. So I actually do that myself. I just set up a little source repository with my functions in it, and then I just use the inbuilt editor with Cloud Shell. And it's actually a pretty nice little workflow. 

MELANIE: When you've been talking about Cloud Functions, you know what's been coming into my mind? Is duct tape. I feel like Cloud Functions is the equivalent of duct tape-- 

MARK: I think so too. 

MELANIE: --in the tech world. 

MARK: Yeah. I agree. 

MELANIE: It could have been called duct tape. Or maybe that should be our, what is it? 

COMPUTER: Tag line, a short phrase associated with a product or service. 

MELANIE: OK. 

MARK: Awesome. All right. Well, I know you're getting on a plane soon, Melanie. Where are you off to? 

MELANIE: Yes. I am off to the extremely warm Montreal. 

MARK: All I've ever done is complain about my time in Montreal last December and how cold it was. Lovely city, lovely people, don't get me wrong. 

MELANIE: Yes. 

MARK: It was freezing. And yet, you're like nope. December, definitely going to Montreal. 

MELANIE: December seems to be the month everybody goes to Montreal. So yeah, I'm going out for a specific conference and multiple workshops that are playing out. So I will be at Black in AI, Latinx, Queer in AI, and NeurIPS all this week. And if you're there, please come and say hi. 

MARK: Awesome. I will be at Kubecon next week. I'll be speaking about Agones. And it looks like I'll probably also be doing mentoring sessions on Wednesday. 

MELANIE: Great. 

MARK: So if you want to talk about extending Kubernetes, [INAUDIBLE], [INAUDIBLE] machinery type stuff, building operators, any of that stuff, we'd love to chat with you. 

MELANIE: Great. Anything else for this month? 

MARK: Sleep. 

MELANIE: Yeah. 

MARK: Get back over jet lag. 

MELANIE: That's a smart way to go. 

MARK: Yeah, I think that'll do it. 

MELANIE: All right, Mark. I think that's it for us this week. 

MARK: Well Melanie, thank you for joining me for yet another week on the podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]