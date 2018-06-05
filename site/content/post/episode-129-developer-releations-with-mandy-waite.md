+++
audioDuration = "00:36:06"
audioFile = "Google.Cloud.Platform.Podcast.Episode.129.mp3"
audioSize = 52449099
categories = ["Developer Relations", "Developer Advocate", "Cloud Advocate"]
date = "2018-05-30"
description = "This week our colleague, Mandy Waite, joins us to talk about Developer Relations."
draft = false
episodeNumber = 129
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Developer Relations with Mandy Waite"
linked = true
googlePlusLink = "https://plus.google.com/u/0/b/117267610519909886476/+Gcppodcast/posts/fc4SiXxkXdY"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8n9d5b/episode_129_developer_relations_with_mandy_waite/"
+++

[Mandy Waite](https://twitter.com/tekgrrl) joins [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) to share what is developer relations and how trust and empathy are key to its success. We discuss meeting developers where they are and the wide variety of differing communities that exist across the technology ecosystem. 

<!--more-->

##### Mandy Waite

[Mandy Waite](https://twitter.com/tekgrrl) has worked at Google for nearly 8 years, 6 of which have been spent growing and nurturing the Cloud Advocacy team.  She heads up the Infrastructure and Ops Advocacy team in Google Cloud with a focus on Cloud Native, DevOps, SRE, Observability and Security.

##### Cool things of the week

- Better cost control with Google Cloud Billing programmatic notifications [blog](https://cloudplatform.googleblog.com/2018/05/Better-cost-control-with-Google-Cloud-Billing-programmatic-notifications.html) 
- Music in Motion: a Firebase and IoT story [blog](https://cloudplatform.googleblog.com/2018/05/Music-in-motion-a-Firebase-and-IoT-story.html)
- Google Cloud Codelabs and Challenges [codelabs](https://codelabs.developers.google.com/cloud)
- Kubernetes Podcast [site](https://kubernetespodcast.com/) and [blog](https://cloudplatform.googleblog.com/2018/05/introducing-kubernetes-podcast-from-google.html )

##### Interview

- Google Cloud Platform [site](https://cloud.google.com/)
- #46 Borg and K8s with John Wilkes [podcast](https://www.gcppodcast.com/post/episode-46-borg-and-k8s-with-john-wilkes/)
- #118 OpenCensus with Morgan McLean and JBD [podcast](https://www.gcppodcast.com/post/episode-118-opencensus-with-morgan-mclean-and-jbd/)
- Felipe Hoffa & BigQuery [reddit](https://www.reddit.com/user/fhoffa), [blog](https://medium.com/@hoffa) and [podcast](https://www.gcppodcast.com/post/episode-8-big-data-with-felipe-hoffa/)
- Livestreaming with Jen Tong [Twitch](https://twitch.tv/mimmingcodes), Holden Karau [Twitch](https://twitch.tv/holdenkarau), and Chris Broadfoot [Twitch](https://twitch.tv/cbro)
- Ben Treynor on What is 'Site Reliability Engineering' [interview](https://landing.google.com/sre/interview/ben-treynor.html)
- Solomon Hykes at dotScale on Docker [video](https://www.youtube.com/watch?v=3N3n9FzebAA) 
- Istio [site](https://istio.io/) and #85 Istio with Varun Talwar and Sven Mawson [podcast](https://www.gcppodcast.com/post/episode-85-istio-with-varun-talwar-and-sven-mawson/)
- Kubernetes [site](http://Kubernetes.io)
- Docker [site](https://www.docker.com/)
- The Core Competencies of Developer Relations [blog](https://medium.com/google-developers/the-core-competencies-of-developer-relations-f3e1c04c0f5b)

##### Question of the week

Where do I go to learn about [GDPR](https://ec.europa.eu/commission/sites/beta-political/files/data-protection-factsheet-citizens_en_0.pdf) in regards to Google Cloud Platform? 

- Google Cloud: Ready for GDPR [blog](https://www.blog.google/topics/google-cloud/google-cloud-ready-for-gdpr/)
- Google Cloud & the General Data Protection Regulation [site](https://cloud.google.com/security/gdpr/)

##### Where can you find us next?

Mark is speaking at the [Monthly SF Game Development Community](https://www.meetup.com/Monthly-SF-Game-Development-Community/), presenting on
[You Can't Just Add More Servers](https://www.meetup.com/Monthly-SF-Game-Development-Community/events/250559719/) on May the 30th in San Francisco.

Melanie is speaking at a joint [WiMLDS](http://wimlds.org) and [PyLadies](http://www.pyladies.com) event "Paths to Data Science" on June 26th. More details to come.

{{< transcript "MARK: Hi, and welcome to episode number 129 of the weekly Google Cloud Platform podcast. My name is Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you do, Melanie?" >}}

MELANIE: I'm doing good, Mark. How are you? 

MARK: I'm very well. 

MELANIE: Good. 

MARK: Very well. 

MELANIE: You know, it's funny. I talked to somebody recently on our team. And they were like, I listened to one of your podcasts. And it was when you both were sick. 

[LAUGHTER] 

And I was thinking, that's right. Mark is finally well. It took you a really long time. 

MARK: It did. It did. 

MELANIE: Anyway, so Mark, this week we are going to be talking with Mandy Waite, who is on our team and in our developer relations team. And she runs one of the groups, and she talks to us all about developer relations and what it is and how to think about it. 

MARK: Yeah. No, super interesting chat. 

MELANIE: Definitely. 

MARK: Yep. 

MELANIE: But as always, we always start with the Cool Thing of the Week. And we end with our Question of the Week. And the question for this week is that on May 25, as some of you may be aware, especially from all the privacy notices that you might be getting in your inbox, GDPR has gone into effect. And so we wanted to touch on that briefly in terms of Google Cloud Platform and what that means for our group and Google Cloud Platform. So we will do that at the end. 

MARK: Sounds good. 

MELANIE: Yeah. And we also are coming out of the Memorial weekend for this podcast. So hopefully everybody's having a nice break or has had a nice break. Yes. 

MARK: Yes. Awesome. So let's get stuck into our Cool Things of the Week. This one I like a lot. This is really neat. Basically we have a blog post and article and documentation and stuff you can play with for better cost controls with Google Cloud Billing programmatic notifications. 

Short answer being if you've ever been thinking, what happens if my costs just suddenly skyrocket and I don't happen to notice them? That would be bad. I would not appreciate that on Google Cloud. So what we can do now is set up programmatic notifications for cost control on Google Cloud. 

MELANIE: This is good. This is really important. 

MARK: It's really cool. So right now it's set up so that basically a Pub/Sub notification occurs-- but we have examples set up so that you can go read them. We'll put the links in the show notes-- basically to fire off a Cloud Function, which could then do things like send a notification to Slack, possibly send you an email. You could even do stuff like just turn off billing or possibly turn off certain resources within your project to help slow down the amount of cost that you're having, depending on what it is you're building. Really, the world's your oyster. But it is really cool now that you have this sort of warning system in place and/or something you might want to automatically do actions onto. 

MELANIE: Right. Yeah. The post helps you understand what you can do to set up these types of notifications and makes it easy for you, which is good because I agree with you. It's important for us to have a way to monitor and not go over budget. OK, so the other Cool Thing of the Week is one of our colleagues, Gabe Weiss, has written about a cool IoT project he worked on which was in conjunction with Firebase. And so he wanted to-- he's a musician on the side. And there's a sound room that he wanted to be able to have an understanding of when it's available and when it isn't. 

So he built out an IoT device using Raspberry Pi and a passive infrared sensor to detect motion and determine when the room is in use. And he was doing this with a motion sensor to avoid capturing sound or capturing video in that room but to definitely detect is it in use and how often is it in use. And he shows how to build that out with the actual IoT device, as well as combine it with Firebase to track the data itself. So you should check out the blog post and see if you want to play around with motion detector yourself. 

MARK: Nice. 

MELANIE: Yeah. 

MARK: Another fun thing, Alexi, who is on our team as well-- we've mentioned him before-- he does a "This Week in Google Cloud Platform" blog post. One of the things out of that that I thought was particularly interesting, recent I/O attendees were able to complete in-person code labs at the event. But those code labs are actually available as well. There's 25-plus updated cloud code labs that you can get. We'll put the link in the show notes. 

It's g.co/io/codelabs. If you click on the Cloud Category, you can get the cloud ones. But all the other ones are there as well. Also, we'll put a link in there that there's also the complete list of free cloud code labs. They remain available as well, g.co/codelabs/cloud. Those are all available. So if you're looking for some free training or some free how-tos on how to build stuff on cloud, on Google Cloud specifically, we'll put those links in the show notes, and you can have a go. 

MELANIE: That's great. And the last thing we're going to mention is that there is a Kubernetes podcast, if you haven't noticed, one that is explicitly about Kubernetes. That's being run by Adam Glick and Craig Box. And we'll put the link in the show notes. 

But they have been releasing podcasts every week so far for the last month on Tuesdays when they usually release. And so far, we had Paris Pittman, a couple months ago now, come on, and that was their first guest. And since then, they've touched on Kubeflow and gVisor and Stackdriver Kubernetes Monitoring. So check this out if you're looking for more information on Kubernetes. 

MARK: That's a really hard domain to remember. 

MELANIE: It is. 

MARK: It's kubernetespodcast.com. It's that simple. 

MELANIE: Yeah. It'll be all your things Kubernetes. We'll still keep talking about Kubernetes, of course. 

MARK: Of course. I'm on the show. 

MELANIE: Because Mark's is here. [LAUGHING] But if you want more, if this isn't enough for you, you will have another avenue to check out. 

MARK: Excellent. Well, then, shall we go chat with Mandy then? 

MELANIE: I think it's time. 

MARK: Let's do it. 

MELANIE: This week's podcast, we are thrilled to have with us Mandy Waite, who's a manager on the DevRel team. And Mandy, thanks for joining us. 

MANDY: Thank you for having me. 

MELANIE: I'm glad our schedules finally aligned. Now that we have you here, can you tell that people who are listening a little bit about who you are and what you do? 

MANDY: So my name is Mandy Waite. I am developer advocate. I'm not actually on a manager level currently. I'm a developer advocate at Google Cloud. I run a team of infrastructure and operations advocates or working with a wide variety of communities, such as DevOps, SRE, Cloud Native, Cloud Native Ops, potentially security and networking in the future. We're still growing the theme, so we're focused very much on DevOps and cloud native currently. 

I've been around at Google for nearly eight years now. I came from Sun Microsystems, where I used to do a kind of similar role, but which was much more marketing aligned, trying to get people to adopt our stuff. And I got a job with Google working on AdWords as a developer advocate. That was interesting, an extremely great technical challenge with the API. 

The AdWords API is extremely complicated. And it's a lot of fun. And it has to scale. And understanding that was really, really useful to me. The kind of background I had was scaling systems. And scaling APIs was new to me. But it had very much the same kind of similar problems I'd been facing in the past with Sun. And then I moved to Cloud in 2012, the end of 2012. And I've been on Cloud ever since. And we've grown from a small team of people, a mix of roles before, to a smaller team of developer advocates. 

It's a team of a number of areas over time. I think it's 46. So we have a large team now. We generally no longer call ourselves developer advocates. We're much more in line with being advocates or Cloud advocates. Although we do developer advocacy as well, for me it's much more around not really covering developers anymore. It's more about talking to other communities, ones that are very, very important to us when it comes to making sure that we have the best possible products. And it would be the DevOps community, Cloud Native, Cloud Native Operations communities. 

SRE is a great story. Lots of people are starting to look at doing SRE security for the future, probably security across the board, across all different aspects of technology. So that's what we're doing currently. As I say, I manage a team. I've got about 10 people on my team currently. 

MELANIE: And your team focuses on, you're saying you're on infrastructure and operations, right? 

MANDY: Infrastructure, operations, yeah. It's a very general term. I'm not sure if it's the best term. But it seems-- it's the one long we landed on. I originally called it operations and infrastructure. But somehow it got turned around. I'm not sure why, but I don't think it really matters. They could be DevOps team or the DevOps Cloud Native team. But infrastructure and operations seems to cover it more. It's definitely not developer centric. 

MARK: So I'm going to ask you the hard question then. How do you define developer relations? 

MANDY: Yeah, so interesting question. 

[LAUGHTER] 

To be honest, I mean, the fact that we work with other communities, other than developers, gives us an interesting challenge because there's some umbrella that we can use reference all of these communities that we work with, developer community, the DevOps community, the data science community. There is no really good umbrella term. And we tend to fall back on technical communities as being the umbrella term, but it's not a good one. 

We're still fundamentally developer relations. But we've just really kind of overloaded the term "developer" to mean all of these other communities as well. And so developer relations is actually making sure that we have the best possible product and the best possible experience for people using the products as possible. And also making sure that we communicate what we have, take our narratives and our messages on the road and show them to people, help them understand how they can solve their problems with our products because that's extremely important, but not forcing products down people's throats and saying, hey, we have this thing. You should use this. 

It's not around giving people product pitches. It's about talking about how we can solve problems using our technology. And often that's a case of meeting people where they are, when you have something like Cloud because that involves using tooling that they're familiar with already without our Cloud product. So if they're using somebody like Jenkins to do build pipelines and such like, CICD, then we want Jenkins to work really well. And a great example of that would be infrastructure as code, that kind of thing, having people making sure they use Chef and Puppet and Terraform and that those things work perfectly well with our Cloud Platform. 

There is also an aspect of being opinionated as well. I'd say like, Google do things this way. And this is what we've been doing with Kubernetes for a long time. So four years ago, we saw this with Mac Kubernetes. It was new to us, apart from the fact that we knew how things worked internally at Google with Borg. And I think you've had John Wilkes on talking about Borg before. 

MARK: Mm-hm. 

MANDY: Borg was really, really interesting to many of us. And taking that message out on the road to show people, hey, have you ever considered doing it this way? It was in the back-end-of-the-container revolution. And my message back then was very much, hey I have all of these containers. Now what do I do with them? And Kubernetes was a solution to that. 

But it was highly opinionated. But it was also a new paradigm as well. And I think people have adopted it at scale. It gives it kind of a really good inflection curve showing adoption of Kubernetes. And I'd like to see more of that happening. 

But being opinionated about something, you have to be careful with it because you can't always change the way people feel about something. Meeting people where they are is very, very important. But if you have a better way, then you should be showing them how they can be successful doing it that way but without dismissing what they're doing currently and making it seem like what they're doing may be trivial compared to what we're doing. 

Build it like Google might be a great message. But we have to be respectful of the fact that people build things their own way currently. And if this helps them and solves some of their problems for them, then that's great. And we can take those messages out and people will listen to them. But we have to meet people where they are and keep the opinionation a little bit more lower key. 

MELANIE: So you were saying about how this being developer relations, what comprises a developer relations? 

MANDY: What comprises developer relations? I get people. 

[LAUGHTER] 

MELANIE: Well, so, part of the reason I'm asking is Mark and I are officially are developer advocates. And I know we have a number of different roles within the team. And so I'm basically setting this up to say, hey, what are some of the roles? What are some of the makeup of the teams that we have? 

MANDY: Yeah, I think-- I don't think I was being flippant by saying people as well because I think it's very important that the people aspect of it is so massively important to this role. It is very much about working with people and being how to communicate with them, to be able to understand their needs. Empathy is a huge word, a word that we use a lot. 

Another word that's really important is trust. So trust and empathy are very much people things. They're not related to technology in any meaningful way. And I think it's probably very easy to be in technology and not have a lot of trust and not have a lot of empathy. And I think one of the keys to being successful in developer relations is being able to have those skills not necessarily develop them. 

I think you can develop them. But they always go back to something I saw when I was working with a TV rental company back in the UK a long, long time ago when I was 16 years old. And they used to have a sign on the wall next to the reception area saying, be sincere. And I've always said, you can't be sincere. You either are or you aren't. And I think it's some of that with empathy. 

Empathy is something you potentially can develop. But it is deep. It is fundamental. You can't make people think you have empathy for them. You either do or you don't. And I think having empathy is something that I see across the whole of the team. And I think that's really, really important for us. And the trust part of it is also implicit also. 

MARK: So what benefits does Google Cloud get out of the relationship it has with its developer relations team? Like why do we even exist? 

MANDY: Yes, I began 20 years, probably, doing this work. People have always known we were very important and not really quite known why or being prepared to take the risk of not having DevRel. Back at Sun Microsystems, we used to be moved from software organizations to marketing organizations because people knew that we were absolutely necessary but not quite sure where we fitted in to the organization. 

So why do we have DevRel? Well, I actually asked this question to some people a couple of years ago. We were doing some strategizing around things. And I asked the question, what would happen if there was no DevRel? And the answer was very much we would have worse products. We would have worse developer experiences. And I said, I felt the answer was that the product teams would create their own DevRel. 

It was an essential role within the team, within a product team, to have some kind of DevRel function. Some PMs, many PMs thought did they have a good handle on what customers are doing and such like. Not all of them feel very close to the actual community of users. It could in this case a DevOps community in my team or the developer community. And they know that they need to go out and get information. 

They also need to know that they need to take their messages out and show people how they can be successful with those products that they're building. So they would fundamentally build their own DevRel team. And if you look at that at scale across a large number of products, and going back to when I started, it was things like AdWords, web, Chrome, Android, you would have lots of different DevRel functions growing up in parallel. And commonalities scale but make it sensible to pull them all out and put them together in one place. 

I would argue that there are always problems around doing DevRel in a cookie cutter way for a specific product. But it needs to be different and honed for each different product. I think that's extremely important to understand. And it also depends where a product is in its product life cycle. It depends on your audience as well. 

So those considerations are important. But I think having a DevRel team, we can benefit from large-scale programs. The kind of mentality and the mindset of people that we hire gives us a huge edge when it comes to doing DevRel, as opposed to having a product team building their own team. 

So I think that's why we have DevRel currently. Yeah, I think I'll leave it at that because I know one of the next questions you're going to ask me about how we measure it, which is going to be interesting. 

MELANIE: Yeah, well, OK, how do you measure it? What are ways that you can determine it's impactful? 

MANDY: I've given this a lot of thought, a lot of thought over the years. I think there is always consequences of the work that we do, the number of people who watch a video, the length of time that they watch the video, the amount of engagement that they have with the things that we produce. And they could be looking at a "Medium" post or even a blog post. 

I think those things are very easy to measure and capture. I think there is a danger around having a goal around those numbers always. I don't think it's a good thing to have a goal around a number, to say, we should have 1 million video views within Q1 and Q2. I don't think that's a very good way of doing it. 

But it is a good metric. And so if you look at the work that you do and the things that you do, some metrics are going to bubble out of that. And you can push them up to people. But they shouldn't be the reason why you're doing it. 

So the reason you would do a video series was to get important information out to people or to drive some strategic goal that you really care about and that you've agreed with the product teams. And ultimately the metrics will drop out of that, and you can report up on them. And you can say, we did 500 events or 600 events last year. We did 150 videos, and we had x number of views, and x number of in-person outreach was done. 

But I don't think that they're the numbers that we should be driving. I think one thing-- this is a little bit dangerous, but I think it's interesting to think about this more is that products tend to have a graph of adoption or usage utilization or efficacy usefulness and that kind of thing. And those graphs, you naturally want them to go up and to the right probably not linearly. You'd like exponential growth, if possible. 

But I think if products are going up and to the right and you have a DevRel function now, I think that shows that your DevRel function is working and doing things correctly. You might be tempted to say, well, let's take my DevRel function away and see if it flattens. But you're not going to want to do that. 

So there is always that danger. You're not quite sure. You can't necessarily attribute what the DevRel does to your up-and-to-your-right curve. But I think it's important to understand it is a fundamental part of all of your process of building a product and bringing it to market is that you have a DevRel function that's ultimately driving the product to be better based on people's feedback and that you're showing people how to use and making sure people are aware of it. 

I think awareness is a great thing. But awareness is so difficult. It's so, so difficult. It still seems to me that there's a large number of people out there, a large percentage of people, not number, a large percentage of people that have not heard about Google Cloud products. And that seems strange, considering the amount of work that we've done. 

But I just think that there are a large number of people out there. And I think we have to be aware of that. And a lot of people working environments, but they don't get exposed to all of these things very much. And so maybe they don't know of it because of that. 

I'd like everybody to know about our products and how to be successful with those products. I'd like to be getting feedback from everybody so that we can bring that back to the product teams and make our products better. I don't know how we can reach that. But I think we probably need to continue growing DevRel as the product teams grow. I think we lag behind a little bit. As the products grow, DevRel is always a little bit behind the curve when it comes to adding more people. 

MELANIE: So in terms of impact, what are some of the activities you've seen that have had the most impact? 

MANDY: That's a really good question. 

MELANIE: And you didn't give that one to me. 

[LAUGHTER] 

MANDY: You're right. It is a good question. And I think people do things in different ways. I think the great thing about our DevRel team is no cookie cutter approach to doing it. We do it differently. 

We do it based on our own skills, our own experiences, the things that we're good at. We do it based on our own products now in communities that we're trying to reach and our own goals and strategies as well. So I see lots of different things and lots of different success stories. I think having a podcast is a great idea. 

MELANIE: Thank you. 

MANDY: Whoever came up with that idea should be-- 

MELANIE: It was all Mark. 

MARK: I have no idea who that was. 

MELANIE: Maybe it was your dog. 

[BARK] 

MARK: It was Francesc, I think. I'll give it to him. 

MANDY: But we got very good at doing videos. And we felt in the past two years ago that we weren't very good at doing videos. And now we're much better at doing videos. We had a lot of attention for our videos-- very short, very succinct, and very to the point. 

We socialize them very well. And we get lots of views. And I think that's really important. That's really impactful. I think that for open source projects, which is a really a new thing around doing advocacy for, or DevRel for generally, I won't single out advocacy, but just DevRel generally is that it's a different kind of way of doing things. And I look at somebody like [INAUDIBLE] on my team, who's working on Open Census. And she's really involved in the community. 

She was a [INAUDIBLE] on the community. She was doing lots of contributions to it. But she understands exactly what the mission is and what the goal is. And she understands the community and their needs. And she understands what she would like to get out of it. And she's doing a different kind of DevRel there with Open Census. So that's another different way of doing that and another different way of being successful. 

So I think it's really a case of constantly exploring and constantly adapting. I had this goal. I want to achieve this, which may be I want to grow adoption of BigQuery, constantly thinking about new ways of doing it. Maybe going on Reddit and getting millions and billions of people to actually talk about your product, which is something our team does. 

MARK: Felipe. 

MANDY: Yeah, Felipe. So, yeah, so I think there's lots of great things that people do. And I'm just hoping that there's more innovation because you look at it and you think, we've done all of the DevRel we can, all the different ways of doing DevRel. But then someone's going to come up with something new. 

Oh, actually, Jen Tong is currently doing live stream coding, Twitch for DevRel effectively. And I really like that. And think that's going to be a new model. It appeals to a different way of thinking. I tend to think that people change as they grow the technology. The way people think about things is probably different than the way I use I think about them when I was young because of just technology is there and ever present. And I think live streaming seems to be a really big deal for people nowadays. 

MELANIE: Well, Mark is doing that. And so is Holden actually. 

MARK: Yeah, a few of us. 

MANDY: That's great. 

MARK: Chris [INAUDIBLE] on the Go team, [INAUDIBLE]. 

MANDY: Excellent, yeah. So live stream's the new ones, eh? These are the things we wouldn't have predicted a while back. I'm hoping that next year there will be another really great innovative way of actually doing this kind of developer relations and getting the message out to people. 

MELANIE: Maybe something with IoT. 

MARK: Yeah. So on a practical note, sort of, and you were talking about this as well, how, like, tailoring the DevRel experience for different communities and different groups. You run the infrastructure and ops group, which is a very different community, say, than maybe the wider tech community. How have you seen basically the approach for DevRel in that space be different from, say, other communities that you've worked in? 

MANDY: I think it's the DevOps community have a different need from the more general developer community. I kind of struggle with saying that at times because I think we've grown up with developers. We've been in developer relations for 10 years, 11 years or so. And it's easy to think that developers and DevOps are different fundamentally, that the way we should do messaging to them is different. 

I think it's at the moment, we don't have very many people doing developer relations for DevOps. And so I think the key here is to look to hire people who are practitioners, people who actually come from that community, are part of that community, and bring them onto the team and have them advocate on behalf of that community to our product teams and also understand their needs and help them solve their problems because the problems that our community have are exactly the same problems that they've had up till now. And so I think that's really, really important. And I'm going to follow up on that. 

I'm going to basically just break the question a bit that I often find myself drawing to people on a white board something called a Trainer curve. So Ben Trainer has this curve. Ben Trainer is the guy who invented SRE at Google. And we have this Trainer curve about how people's skills change over time. And I constantly draw this picture whereby a practitioner would have core practitioner skills and maybe not so much advocacy skills at the time your start. And that their practitioner skills would wane over time, and your advocacy skills would improve. And so I have my own Trainer curve whereby advocacy skills are now much better than practitioner skills. And I think at times you need to kick energy back into that, to say, hey, you need to go back to being a practitioner again. 

It may well be that they feel comfortable in that they're really on it and they actually know what's going on. But from time to time you need to step back and say, OK, what is my community doing? Let me go back and be one of them for a while. And I'd like to see us do more of that when it comes to practitioners. 

So I think that's really, really helpful, having practitioners and keeping those practitioners skills. And I think it's also possible to pivot to a practitioner role as well. And I think we have an evidence of that on my team currently when it comes to security, which Jen is doing as well. And I think that's really, really interesting. 

I think there's also a lot of space for more generalists to grow up into that space as well and to learn from the practitioners, and to become practitioners as well. So having more senior people as practitioners but having more junior people as the people who learn from them, take their messages on the road, maybe not have the same kind of recognition as they do, but can help with content and videos and such like. And I think those people are really, really key to it as well because there are not that many practitioners in the world. And so if you want to have a reasonably large team and good coverage, then you're probably not going to be able to do that just by hiring practitioners. 

So [INAUDIBLE] from practitioners. I had this conversation with Adam Seligman recently about trust versus credibility. And I do agree trust is extremely important. We need people to trust our advocates when they talk to them. I know this person. I trust what they're telling me. 

At the same time, our product teams, stakeholders as well I should trust them and trust them when they bring stories and feedback back to the product teams that say, maybe you should do it this way. They trust that person's view. And they give it due consideration. 

MELANIE: I know trust, in particular, is very valuable. You can give them a perspective and it's not necessarily being driven by the product itself. It's being specifically driven by this is what I know about the space. This is what I'm able to bring to the table about the space, yeah. 

So when I was asking earlier before about developer relations at Google and what that looked like, a little part of why I had led down the path to that question was I hear "developer evangelists" as a term that's constantly intermixed with developer advocate. So I'm curious what your perspective is on these two terms and how they relate and how they don't relate. 

MANDY: Yeah, another really interesting question. I think we're a large company. We have a large developer relations team. It's very easy for us to kind of be very specific about what we do when it comes to our role. 

We can shape the role to be what it needs to be. And so let's go back a bit, take one step. It's bidirectional, our role as advocates. It's doing evangelism effectively, talking to people. 

But I think, is a different kind of evangelism. It's much more like sitting down with people and holding hands and talking through things, learning from them, and having them learn from you as you talk them through how you can potentially solve their problems. At that point, you might learn things that you didn't know about the product and how it works and what you can bring feedback back to the product teams. 

So it's not really fundamentally evangelism, although there was a lot of that. Going t events and doing outreach is very much a form of evangelism. And at the other end there's this kind of influence on the product and bringing feedback back and making cases, writing what we call friction logs, which are things that detail somebody's interactions with a product and some of the problems that they may have had, raising bugs, driving fixes, showing people what kind of impact is likely to be achieved through addressing a particular issue. And I think evangelism is that one half of that. And I think some teams, some smaller DevRel teams, can't really afford to do both parts of it. 

It's much more about getting the message out. And so they focus more specifically on the evangelism component of it. But I think advocacy is rooted in that bi-directional thing whereby we influence the product teams and we influence our communities. Did that answer your question? 

MELANIE: Yes, it does actually. 

MARK: I'm curious also to know your thoughts on if people listen to this podcast or they've heard other things about developer relations, what have been some paths or are there parts that you think would be great for people who want to get involved with developer relations? Because it seems like a fairly niche thing in some ways. 

MANDY: Yeah, really interesting insight because in the practitioner way of thinking about it is interesting. I mean, obviously, we're hiring practitioners, then they may not come necessarily with advocacy skills. But they're going to want to do that kind of work. And when you interview people and you ask them why developer relations, it's always about showing people how things work. I like teaching people. I've always been like that. 

You find that you look at their GitHub, and it's all based on tutorials and such like, where they've been producing tutorials to show people how to do things. And it's really interesting. There are some people of the mindset that I just want to help people. 

Some people also once they've experienced pain in the past-- and I don't mean physical pain. But the pain that I experienced at Sun Microsystems when I was trying to make something called Open Solaris, which was an open source version of Solaris, work with all of the Linux applications and RPMs and such like that were out there, and nothing ever worked. I would spend a lot of my time googling for esoteric error messages, and nobody's ever seen this problem before ever. 

So I felt very much I wanted to blog about that. And I wanted to share that with people so that they could find it. If they ever hit that same problem again, they would be able to solve it. And every time that happened, I blogged about it. I blogged about it. I blogged about it. And I think that's something that a lot of people like doing. 

Things like they don't want people to experience the same kind of pain that they've experienced. And so that's another reason to come into this kind of role. You want to make the world a better place. I use to have my tagline for Twitter was, "make the cloud a better place for developers." So I think some people just want to do that. 

The question was more about paths into advocacy, right? But I think you need that part of it. You need that mentality. You've seen the best speakers. They're the ones that actually really care and do have empathy for their audience. And that's always going to be a case, having empathy, not developing it necessarily, although that is possible. Having empathy for your developers is also key, or your target audience. I'm overloading that word "developers" again, which happens all the time here currently. 

MELANIE: Where would you want to see this field grow into? How do you want to see it evolve based on what you've seen so far? 

MANDY: Yeah. That's a really interesting question. And I'll have to give that some thought. I want it to be bigger. I like the fact that it's different, that people do it differently and people approach it differently. I like it to be continuously evolving. 

I don't think there's enough standardization around it. I would like to see it moving away from being a marketing function, which it often is. I don't think that that's the best place for DevRel. I would much rather see it rooted in engineering principles. 

I know that's not always possible. I'm not sure if I have a strong opinion of that, though. I don't know if I have a strong opinion of where I want it to go. I want us to have influence. I want, really, effectively, the world to be a better place for people who are building tech or doing tech. And I think tech is on a path that makes it very hard for us to keep up. It's actually a bit asymptotic. The closer we get to having really good experiences for people using tech, probably the further, often, away from us it gets and makes it more difficult. 

MELANIE: Through your experience, your history of working in tech, I'm just curious as a side thing, what is that one of the technologies that you've seen that really you were so excited about when it finally came, and you felt like it completely had this huge impact that you wouldn't have imagined or expected? 

MANDY: Yeah. I think I've already mentioned it, container scheduling, Kubernetes. Docker was-- I watched Solomon Hykes giving a talk at dotScale, which is happening Paris next week, and I will be there. Watching Solomon Hykes talk about Docker in 2013 was really, really exciting. The comparison to containers, shipping containers and such like, it just really moved me. It was really fantastic. 

It was a great event actually. And having containers was great. But having the ability to schedule them like the way we do at Google was even better for me. It was like I really get this. I really understand how this works. And I really want to make this a thing. I became very determined to make it a thing. And hopefully I made some small contribution to that. 

MARK: I'm sure you did. 

MELANIE: I know you did. 

MANDY: Kubernetes was very much the thing that made me most excited. These kind of paradigms just-- although on the whole, I probably would say Cloud Native generally. The whole principles behind Cloud Native are probably more important as Kubernetes becomes more of the new infrastructure that kind of bubbles down into the substrate, as I used to describe it to people, and things get built on top of it because it's an enabler for a new things. 

I think we can do services better now that we have things like [INAUDIBLE] and other things like that are coming along, service missions, generally. And all of the [INAUDIBLE] system components are coming up around Kubernetes is just really, really exciting. And I think it just changes the way we think about it. I'd love to get away from traditional infrastructure completely and just be using containers and not worry about where they run. 

MARK: Excellent. Are we hiring at the moment? 

MANDY: I think DevRel's very large at Google, and we have lots of opportunities to hire people here. There's always some job description open for a role within DevRel at Google. My team, we have a couple currently that are coming and going and such like. 

We have pipelines that get filled up and such like. But yeah, we're definitely hiring cloud advocate for DevOps potentially or cloud advocate for Cloud Native that kind of thing. Really the best place to go for information around that is careers.google.com, which has all of our listings there. And you can also DM me on Twitter. Will my Twitter handle be publishes? 

MELANIE: Yes, we will definitely be publish that. 

MANDY: Yeah, so you can also DM me on Twitter as well. And I'll do my best to answer. 

MARK: Well, I can tell you, it's a pretty great team. Can't complain too much. 

MANDY: It is a pretty great team. 

MELANIE: Yeah, it definitely is. So Mandy, I know we're getting close to time. But is there any place you're going to be at, outside of Paris, that you'll be speaking at or you'll be attending that you want people to come and say hi? 

MANDY: Let me think. Not really. I don't give so many talks anymore, which is a shame. I liked giving talk. So I don't have any specific plans. I'm going to be at various different events, Cloud Next events, Cloud Summit events that we have coming up. I'll be in London, probably in Tokyo as well, certainly be in the San Francisco event that we have in July, which is July 23, I believe, Cloud Next in San Francisco. 

MELANIE: Yes, definitely Anything else that you wanted to share around developer relations that we didn't already cover? 

MANDY: I don't think so. I think drink lots of water to make sure your voice can hold up for long periods of time because my voice just doesn't hold up very well. You'll always find me in videos with a bottle of water in my hand. So it's very hard with my voice to survive a long talk. But that's my big tip is always have a big bottle of water with you. 

MELANIE: I like that. Well, we appreciate you coming on the podcast. Thank you so much for sharing your thoughts on developer relations and, yeah, thank you. 

MANDY: You're most welcome. And thank you for running the podcast. It's much appreciated. It's a great thing to listen to, and I really, really, really enjoy it. 

MELANIE: Thank you. 

MARK: Our pleasure. 

MANDY: Thank you. 

MARK: Mandy, always a pleasure to chat with you. Thank you so much for coming on the podcast and talk to us about your perspective on developer relations, always insightful. 

MELANIE: Definitely agree. And I'm glad we finally got to it, too, because I know we'd been trying to get that into the podcast sooner rather than later. So Mark-- 

MARK: Question of the Week. 

MELANIE: --what's the question? 

MARK: Yeah, so as you were mentioning before, May 25 GDPR came into effect. 

MELANIE: And that's the General Data Protection Regulation in the EU. 

MARK: Thank you. But where do I go to learn more about GDPR in regards to Google Cloud Platform and the effect it has and all the other stuff that I need to know? I am not a lawyer. 

MELANIE: You are not. Neither of us are. 

MARK: Yeah. 

MELANIE: And this is a regulation in the EU law on data protection and privacy for all individuals within the European Union. It addresses the export of personal data outside of the EU. So we are including in the show notes a couple of links we have around how information in relation to Google Cloud and General Data Protection Regulation. 

They've got some information around complying with the GDPR may require changes across your business. This is just more general guidelines to keep in mind when you're looking at GDPR. And they've got some tips and pointers, especially like product and feature guides as well. 

MARK: And it's worth noting these guides are both G Suite and Google Cloud Platform. 

MELANIE: Right. Yes. Under both of them, they'll talk about it's great, especially when you're using like two-step verification, to reduce risk of unauthorized access by asking users for additional proof of identity, that it's good to help include those functionality when you're thinking about this regulation. But you can check out the resources that we're going to provide. And we're also including a link that is a data protection fact sheet for citizens of the EU. And it gives a nice summary and pseudo visualizes some of the key rights that now exist and how to understand them. 

MARK: Awesome. 

MELANIE: Yeah. 

MARK: Excellent. So Melanie, where are you going? What are you doing? What are you up to? What's going on? 

MELANIE: I am going to be speaking at a joint event that the Women in Machine Learning and Data Science and PyLadies have organized in San Francisco at Door Dash on Paths to Data Science on June 26. And once the meet-up invite is out, I will definitely include that in our show notes. But, yeah, that's where I'm going to be. And Mark, what about you? 

MARK: So literally the day this comes out, I will be presenting that evening at the monthly SF and Game Developer Community. I'll be doing my presentation called "You Can't Just Add More Servers," which is the point where you normally make fun of my accent. 

MELANIE: I was going to say you love saying that, too. You just can't. 

MARK: No, actually, that's just how I talk. 

[LAUGHTER] 

MELANIE: No, you like saying that. 

MARK: That's fine. But I'll also highlight-- I've been streaming a lot on Twitch as well. I had a really fun one recently, where I did a bunch of stuff. I'll put a link to the YouTube video actually because that'll hang around. But I've been streaming, writing a code. 

I had a phone one recently where we did some fun work around wrapping an existing dedicated game server. Basically we took an existing process, and then we intercepted the standard out. And then using the text that was coming out of a standard out, we just implemented some actions to occur. It was a really nice sort of exploration of interfaces in Go actually. I think it worked really nicely. 

MELANIE: That's cool. 

MARK: It was cool. So I'll just highlight that because I thought that was a particularly nifty one. 

MELANIE: I'm glad you're having fun with Twitch and the streaming. That's awesome. Mark, I think that's it for us for this week. 

MARK: Yeah, Melanie, thank you very much for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 
