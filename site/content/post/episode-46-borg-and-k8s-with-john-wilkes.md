+++
audioDuration = "00:41:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.46.mp3"
audioSize = 60024093
categories = ["Borg", "Kubernetes", "Container Engine"]
date = "2016-10-05T01:07:49Z"
description = "Today we have the incredible honor to interview John Wilkes, Distinguished Engineer at Google and co-author of the Borg paper, about the history of Borg and how Kubernetes came to be."
draft = false
episodeNumber = 46
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Borg and Kubernetes with John Wilkes"
image="/images/post/john_wilkes.jpg"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/GNpNgW7MLca"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/560bh0/episode46_borg_and_kubernetes_with_john_wilkes/"
+++

Today we have the incredible honor to interview [John Wilkes](http://research.google.com/pubs/JohnWilkes.html),
Principle Engineer at Google and co-author of [the Borg paper](http://research.google.com/pubs/pub43438.html),
about the history of Borg and how Kubernetes came to be.

And guess what, [Mark](https://twitter.com/neurotic) is very excited!
[Francesc](https://twitter.com/francesc) is excited too, though.

<!--more-->

##### About John

John Wilkes has been at Google since 2008, where he is working on cluster management
and infrastructure services. Before that, he spent a long time at HP Labs, becoming
an HP and ACM Fellow in 2002.  He is interested in far too many aspects of
distributed systems, but a recurring theme has been technologies that allow systems
to manage themselves.

In his spare time he continues, stubbornly, trying to learn how to blow glass.

##### Cool things of the week

- New Regions coming in 2017 [announcement](https://cloudplatform.googleblog.com/2016/09/Google-Cloud-Platform-sets-a-course-for-new-horizons.html)
  - Mumbai, Singapore, Sydney, Northern Virginia, São Paulo, London, Finland and Frankfurt — and there are more regions to be announced next year.
- Bringing Pokémon GO to life on Google Cloud [blog](https://cloudplatform.googleblog.com/2016/09/bringing-Pokemon-GO-to-life-on-Google-Cloud.html)
- And many other cool things from Horizons [here](https://cloudplatform.googleblog.com/2016/09/Google-Cloud-Platform-sets-a-course-for-new-horizons.html)

##### Interview

- Cluster management at Google with Borg - dotScale 2015 - John Wilkes [YouTube](https://www.youtube.com/watch?v=wy3L7XUq-g0)
- Large-scale cluster management at Google with Borg [Google research](http://research.google.com/pubs/pub43438.html)
- Bazel: Google's own build tool [bazel.io](https://bazel.io/)
- Site Reliability Engineering [SRE Book](https://landing.google.com/sre/book.html)
- SLO: Service Level Objective [Wikipedia](https://en.wikipedia.org/wiki/Service_level_objective)
- The Chubby Lock Service for Loosely-Coupled Distributed Systems [Google Research](http://research.google.com/archive/chubby.html)
- DiRT: Weathering the Unexpected [ACM](http://queue.acm.org/detail.cfm?id=2371516)
- Kubernetes [homepage](http://Kubernetes.io)
- Docker [homepage](https://www.docker.com/)
- [Paxos](https://en.wikipedia.org/wiki/Paxos_(computer_science)) algorithm and [etcd](https://github.com/coreos/etcd)

<div style="text-align: center">
  <img src="/images/post/john_wilkes.jpg" style="margin: auto; width: 25%">
</div>

##### Question of the week

Installing Application Default Credentials locally [docs](https://cloud.google.com/sdk/gcloud/reference/beta/auth/application-default/login)

```bash
$ gcloud beta auth application-default login
```

##### Were will we be?

[Francesc](https://twitter.com/francesc) is today be in New York running a
[Go workshop](http://www.meetup.com/NYC-Women-Who-Go/events/234422794/?a=socialmedia)
on October 5th, and then he'll do a similar meetup this time [online](https://www.bigmarker.com/remote-meetup-go/Mini-Workshop-Build-a-Web-App-with-Francesc).
He also will be speaking on Thursday at [GDG NYC](http://www.meetup.com/gdgnyc/events/234624310/).

You can find [Mark](https://twitter.com/neurotic) at [SIEGE](https://siegecon.net/) from October 7th to 9th

{{< transcript "FRANCESC: Hi, and welcome to episode number 46 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I am here with my colleague, Mark Mandel. Hi, Mark. How excited are you today?" >}}
MARK: I'm pretty excited. I am. I'm pretty excited. 

FRANCESC: Yeah. Today we have the incredible honor to have John Wilkes as our interviewee. And yeah, Mark is very, very excited about this. 

MARK: I'm pretty excited. I am. I'm pretty excited. 

FRANCESC: I'm also very excited, to be honest. So we're going to be talking with him about the history of Borg and how basically Borg gave birth to Kubernetes, what is the relationship in between, and other random things. He is pretty amazing. 

MARK: Yeah, he is. Yeah. I'm pretty excited. 

FRANCESC: He's very excited. And after that, we will go with our Question of the Week, which is actually quite simple, but not many people know about it. So I thought it was worth talking about, which is, I love application default credentials. If you haven't heard about it, we'll discuss it a little bit what it is. But how do you use it locally? There's an incredibly easy way to do it. 

MARK: It's very cool. 

FRANCESC: Yeah. So, yeah, that will be at the end of the episode. But now we're going to go first with the Cool Things of the Week. 

MARK: Yeah. So we have some great Cool Things of the Week this time around. We had a pretty busy week this week with a few things coming out. I just want to highlight, I think, a couple of my favorites, first one being is we have some new regions coming in 2017, which I think is pretty exciting. 

FRANCESC: Yeah. Some of them I feel-- actually, this really feels like a good list of places I should visit. So we have London that I know already, but Finland and Frankfurt, and I've been there. Sao Paulo. Sydney-- I think that's in Australia. 

MARK: In Australia. 

FRANCESC: Yeah. 

MARK: Yeah. That's something else that I think is going to be great. Might have to go down to Australia sometime around that opening. 

FRANCESC: That sounds like a great event. And also Mumbai and Singapore and Northern Virginia. 

MARK: Ah. 

FRANCESC: Yeah. So a bunch of new regions to be announced next year. This was actually announced during-- 

MARK: Horizon. 

FRANCESC: --Horizon. So we'll have a link to all the announcements that happened in Horizon, because there were a lot of them. 

MARK: There were a lot of them, absolutely. 

FRANCESC: And there was also one thing that you were involved with. 

MARK: Well, I was loosely involved with. I think that's maybe a little stretch, but we finally got our blog post out about how Pokemon Go runs on the Google Cloud Platform, which is really, really cool. So we talk a little bit in that blog post about how they use data store for state management, how they have one of the biggest GKE clusters ever. 

FRANCESC: Ever. 

MARK: Yes. Actually, yeah, "the." 

FRANCESC: The biggest GKE. 

MARK: Yeah, the biggest GKE cluster ever, possibly the biggest Kubernetes. Nobody knows. I don't know. 

FRANCESC: I don't know. Yeah. 

MARK: Supposition all around but, yeah, and there are some graphs in there, and they talk about the new Customer Reliability Engineering Team and how that works. 

FRANCESC: Which is really cool. 

MARK: Which is also really cool. Hopefully we can get them on the podcast. 

FRANCESC: I would love to. 

MARK: I would love to do that too. But, yeah, definitely worth a read, especially if you play Pokemon Go. 

FRANCESC: Yeah. My favorite thing about it is that little graph that shows. So, yeah, we were expecting to have this amount of traffic, so we bought five times more, but after 15 minutes that was already gone, and we reached 50%-- 50 times more than we expected. It was like, ouch. 

MARK: Yeah. It was 50 times more than what they thought they were going to have and 10 times more than their worst case scenario. 

FRANCESC: Yeah. 

MARK: So it was an enormous amount of traffic-- a huge, huge global sensation. 

FRANCESC: Yeah. Really awesome blog post. So we'll have a link on the show notes. 

MARK: Absolutely. So why don't we go do my favorite thing for this episode and go have a chat with John. 

FRANCESC: So excited. 

MARK: Yes. 

FRANCESC: Let's do that. 

MARK: Today I am greatly delighted to be joined by John Wilkes, here together with us on the podcast. How are you doing today, John? 

JOHN: I'm good. I'm delightfully grateful for you having me on. 

MARK: Wonderful. Thank you so much for joining us. For those people who don't know who you are-- whoever those people may be-- I've been following your stuff for ages and have been a huge fan of yours for a very long time. 

FRANCESC: Mark is incredibly excited about this episode. 

MARK: I am. Please, can you tell us a little bit about yourself? What do you do here at Google? 

JOHN: I'm just this guy. I work in the Borg team, which is part of our Technical Infrastructure folk. We write software that runs a fleet of machines that runs across-- pretty much every other stuff that runs inside Google runs on top of us. So from the outside world, Google Compute Engine, pretty much all the Cloud products run on top of Borg. Borg runs on top of set of machines. 

Borg allocates those machines on demand when people come along and say, you know, I need 4,000 places to run this. Could you find those 4,000 places? We'll pick them. We will cope with the fact that three of them will break. We'll put them somewhere else. We'll work out how else we can pack things into these clusters of machines to make the used as efficiently as possible. 

MARK: Cool. 

FRANCESC: So one question then. I've been working at Google for quite a while, but I'm actually not sure about the answer for how long we've had Borg. Did we create it from the beginning or-- 

JOHN: We started it around about 2003, 2004, long before I joined the company. So it began as a sort of small-scale activity with about three or four people in collaboration with a new version of our search engine. So they grew up together. They each built on little features of the other, and that was used as initial deployment partner. 

And from then, people realized it was just really helpful for doing a bunch of stuff so they could focus on what it was they were trying to do in the search tools. And the underlying system would cope with a bunch of stuff that they didn't want to have to deal with. And that was useful, not only for the search team, but for other folk as well. So it started getting widespread adoption. 

MARK: And credit where credit's due. Your name is on the Borg paper, right? 

JOHN: So I wrote the paper with a bunch of other collaborators who did a bunch of work and experimentation about the system that many, many other people had built. So I'm one of a huge team of folks who've done the actual work. I'm just the guy who ends up being the poor person talking out in the front. But they are the people who constructed the system. They run it, they keep on developing it right now. 

MARK: That's cool. So I guess it means if you're someone who's used Maps or Search or Gmail, anything even above GCP-- Google Cloud Platform-- you've used Borg. 

JOHN: Exactly. With luck, you haven't known it. 

FRANCESC: Very nice. So for the people that have never heard about Borg, how could you describe it? What does it do? 

JOHN: It basically means you don't have to worry about which machines you're running on. So you write-- let's say you're a Gmail developer, so you're interested in the next version of the Gmail service, so you build a version that. You try it out. 

Typically you can test it in our world, either on your local machine or in some cloud test Systems. And then you just say, great, let's run that on Borg. And that's it. And you say can I have 400 copies? And it says sure. And that's all you have to think about, really, provide you jump through a few other hoops we'll get to in a minute. 

But you don't have to worry about where those machines come from. You don't have to worry about what other things are running on the same machine. You don't have to worry about if your task falls over and you need to be restarted. All of that stuff just gets taken care of for you. 

It ties in with things like the security system. It ties in with the storage system, so it gives you access to data elsewhere. It ties in with our internal network and communication system so you can communicate inside the company and also through the outside world in a secure fashion in a way that everything is encrypted pretty much in flight. And it just relieves a bunch of pressure and tension from the developers so they can focus on adding the business value that they're interested in. 

MARK: So you're trying to tell me that people at Google are not just SSH-ing into machines and just copying binaries across? 

JOHN: Pretty much. So one of the things that Borg helps with is to make sure that the only time you can SSH into a machine. You have to go through a binary, which we provide, that makes sure that you have a reason to be on that machine, that there is some part of something that you have authority to access that is running on that machine, otherwise the answer is nope. 

MARK: Nope. Yeah. Now, that's very cool. Having looked at-- and I'll reference this probably a lot-- there was a particular presentation you gave a dotScale where you wrote a declarative file, and you were showing how to do Hello World at scale with something like 10,000 copies or something ridiculous. What sort of stuff would you end up putting inside that? So I'm guessing you had a name and then it's like a binary you want to run? Something like that? 

JOHN: Pretty much. So imagine you've compiled Hello World to run on your local desktop. So you bring it up to make sure it works and it displays Hello World in exciting fashion in a local screen. And then you wrap it with a description about what you would like to be true when it is running on Borg. And I use those terms carefully. 

So you say, first of all, I've got to give it a name of some kind. So we call it a collection of tasks running the same thing-- a job. So a job has a name, sort of a text string, and user name and things like that. 

You say where you want to run it, and typically you say a cell, which for us is-- a medium-size cell is about 10,000 machines. We have them scattered pretty much all the way across the globe. If you go to your favorite search engine, you'll be able to find a map of where Google Data Centers live. Each of those runs typically several cells, and you get to pick one for various reasons to do with allocation policies at the next level up. 

You choose-- you say I want to be there. You say here's the program I've written-- Hello World in this case. You provide a path to access that. Even if you want to, you can say things like how many CPU calls it might need or how many resources it should consume in terms of RAM, disk space, things like that. 

Or you can say, yeah, choose for me. Let the system do that, because we have a technique for doing that. And then you say how many copies you want. You can start with one, and the maximum you're allowed in any one place is 10,000. So I did a quick demo running 10,000 copies of Hello World, because, you know, why not? 

MARK: Why not. 

JOHN: Exactly. And it took about 2 and 1/2 minutes to get from 0 to 10,000 copies, roughly. 

MARK: Nice. 

FRANCESC: Nice. 

MARK: You kind of slipped something in there where you said it would likely to be. 

JOHN: Oh, you noticed. 

MARK: I did. So it's not just saying, oh, I want 10,000 so I get 10,000? It's something slightly different. 

JOHN: So we have this notion of things failing all the time. I'm on record as saying that the reason Google looks like it's up from the outside is that we see the world as collapsing around our ears on the inside and write software to cope for that happening. So one of the techniques that we use for that is what we call those little declarative statements about truth and then reconciliation. 

So here we have a statement which says I would like 10,000 copies of Hello World running somewhere, and you send this off to the Borg Master, and the Borg Master compares that with what is actually the state of the world and go, that's funny. Nobody's placed 10,000 copies of Hello World. So let me fix that. 

So a component inside the Borg Master called Scheduler goes and starts looking for places for those 10,000 copies and remembers this fact. So the other thing I need to point out is that you want to write down your intentions, your declarations, in a way that is super resilient. 

So Borg Master uses a [INAUDIBLE], which is a distributed fault-tolerant library implementation. So every copy of the Borg Master has a copy of this state, and there are five copies in any one cell. So if anyone of them goes down, the others can pick up and carry on-- or at least another one can pick up and carry on. 

So you, first of all, write down your intention, I want 10,000 copies, and then the scheduler goes and picks off a few of these at a time and place finds places for them to run-- spare machines in the cell or more likely a fraction of the spare machine somewhere in the cell-- and it writes down its decision. Machine number 17 has a copy, machine number 423 has a copy. Then that also gets written out in a persistent declarative fashion. So if the schedule falls over, you can pick up and carry on where you left off. 

And then finally what happens is the Borg Master itself has a component which compares the state of the world on the machines in that cell to what it thinks should be true. That's funny. That machine is supposed to have a copy of this Hello World, but it doesn't have one. Let me fix that. And it goes ahead and tells the other agent sitting on that machine to go grab itself a copy of Hello World and start running it. 

So that loop of comparing the outside world against what you want to be true turns out to be remarkably resilient in case of failures. You can sort of fall over anywhere in the process and then pick up where you left off and sort of just get back to where you want to be. 

FRANCESC: Very interesting. So that means that at the beginning, we're going to say, oh, we're missing 10,000 copies, but then later on we're going to be, oh, we have like 9,000. We're missing only 1,000. And at what point do we consider that kind of stable? And how long-- like you said, two minutes and 1/2 for 10,000? 

JOHN: So it took from 0 to 2 and 1/2 minutes to get up to almost 10,000. And it turns out that the Borg Master is always trying to make 10,000 copies running. But typically it happens that there's a few of them, and when I was looking, I saw about sort of 7 to 10 of them were not running, even in steady state. 

MARK: Interesting. Is that just a problem because you have 10,000 of them or is there something actively saying no, maybe Hello World isn't the most useful thing in the world to be running 10,000 copies of? 

FRANCESC: It is important to say hi though. 

JOHN: My Hello World. Are you crazy? 

MARK: I know, I know. I understand. 

JOHN: Of course it's important. I'm giving demo. No. It turns out actually Hello World was the least important thing in the system, and that matters for what I'm about to say. Things go wrong all the time. Occasionally machines break. But when you've got 10,000 of them in a cell, they will actually break at a fair clip in absolute terms, but in relative terms, these things are amazingly reliable. They'll stay up for quite a long time. 

However, we will take the operating system down roughly once a month in order to do a software upgrade, maybe because we've got a better version of kernel, maybe we're rolling out some security update, or there's all sorts of good reasons for doing this. 

When you take the operating system down, you basically have to reboot the machine. And to reboot the machine, all the stuff that was running on it is going to have a bad time. So that basically is the primary driver. 

If you're a production task, imagine something like Gmail or Google Docs or Google Cloud Platform products, those things will see an outage roughly once a month if they're running all the time. That's OK for them, because they're used to having other copies somewhere else. So it's not a problem. You just write software to cope with the fact it's going to go away. But it means that there is a sort of slow, gentle churn of things being removed. 

Now, as for what we call production stuff, which is the things we really care about, we have other things like batch jobs which are less important, or at least maybe they're more tolerant of things going wrong, is a way to think of it. 

And because they're more tolerant, if the MapReduce job loses the work, that's fine. There's plenty more where that one came from or maybe we'll bring this one back and get another copy. And maybe it'll be delayed a second or so. Eh, no big deal if it's running for six hours. That gives them more flexibility. So we'll actually allow them to get pushed out of the way if we need space for production tasks to run. 

So if you're a production task, you have high priority. If you have high priority, and there's a low priority thing in your way, you win. The low priority things gets bumped off. A task dies, and it will get started somewhere else if there's room. That's fine. 

And there's this priority order. It goes from 200 issues where we run production stuff down to 0, which is the lowest of the low, which is where Hello World was running. So if any other task in the system needed a resource that my Hello World was sitting on, Hello World got moved. 

FRANCESC: Goodbye Hello World. 

JOHN: Goodbye Hello World. 

FRANCESC: Very cool. So most of the things that you've been talking about, I have the impression that we're limited to a single cell. Is there one Borg per cell? Is The Borg in all those cells? How does that work? 

JOHN: This might be a great point to say this Borg is an internal code name. It's not an external trade name. 

MARK: Oh, yeah. 

JOHN: We're always going to be happy about this, right? So it's just an internal code name. We try to avoid The Borg and the associations that go with that. Sorry, bad choice of name. Before my time. Not my fault. 

We divide our-- and I talk about we have a fleet. I'm not going to say how big, but it's big. We divide it up into chunks. Those chunks are designed to be big enough to run some of the largest applications we need to run but small enough that if you lose an entire chunk because, I don't know, software bug or one of our site reliability engineers mistypes the name of one of these things, then it's actually not too bad, which is why 10,000 is an interesting number. It's big enough to be able to get a lot of work done in one place, and it's small enough that you can have two or three copies of your application running in different places. 

So one of the reasons why these Borg clumps-- these cells-- are the size they are is to allow failures and to bound the scope of the mistake. The other is so you can do things like software updates. You sort of take them down, bring them back up again. So the thing is designed to cope with pretty much anything disappearing at any moment. 

For example, of the Borg Master has a software bug and disappears, all the stuff that's working in the cell right now stays working. It doesn't stop. And the agents on each of the machines that would try to contact the Borg Master will keep trying, and eventually it will come back and they'll just pick up where they left off. So in the meantime, they will just keep working on what it was they were last asked to do. 

MARK: Yeah. We kind of keep going around it and talking about it and I kind want to highlight it as a really interesting point, that everything is built for failure. Like it is an assumption of failure-- 

JOHN: Yes. 

MARK: --that everything will break at some point, and I think that's a really interesting software development practice to start from everything is bad rather than, in an ideal scenario, this server will be up forever. I think that's really, really interesting. 

JOHN: So a lot of the design discussions that I get involved in are around what happens when that fails while you're doing this other thing? Have you made a slightly flaky assumption that it's going to be OK because it's going to keep working? 

I was in a room one time. I was listening to a talk of somebody describing one of our internal systems, and he was sort of skating over one of these areas. And there were 50 or 60 people in the room, and somebody asked him a question about a particular thing. It turned out that they'd allowed erase condition to happen, and there was a point where it could go wrong. And I think about a third of the people in the room put their hand up at that point simultaneously and said just a minute. 

MARK: No. No. Wait a minute. That's really cool. So that's really interesting. So you've got this declarative syntax. You tell your system what it is you want. That means you have to have a lot of trust in the system that you're running on. How does that get verified or do you just trust it and you're like, it's fine? But, you're building for failure, right? So how does that work? 

JOHN: There's a slogan which really works here-- if you're not measuring it, it is out of control. So trust but verify. We do put a lot of effort into designing systems to be fairly tolerant, including the systems that run the systems that are designed to be failure tolerant, and so on, all the way up and down the stack. But you want to make sure that it is. You actually need to measure it. 

So we put a huge amount of resources into monitoring the systems that we have, including the systems that are monitoring the systems we have. And they will report things like, this is what I was expecting to see, this is what I'm currently seeing, and if they differ in the wrong way around, then you fire off alerts, and you get people involved. 

The goal is to-- people are always at the top of the stack. People can do things that no machine can ever do, but you want to have the machine automate the process of doing the regular straightforward stuff. For example, we were talking earlier about tasks being killed or pushed off a machine. This is normal. You don't have to write special code to handle this as an unusual exception. This happens all the time, so you write the software to have that happen all the time, and then you move on. And then you check that, in fact, if you ask for 100 copies of it, you got close to 100 copies running. 

MARK: Yeah. 

JOHN: But there is some monitoring system which is keeping an eye on that and displaying it and telling eventually human or maybe another intermediate system that you have fewer than you expected. Now, to make that work, the people who write the software on which you rely typically have to tell you how much you can rely on it. So we have internal specifications of how often things break. 

For example, we have a sort of rate limit or rather an expectation how frequently your tasks can be removed. So you write your software, assuming that that rate is probably going to be met. And then we have the Site Reliability Engineers who run these systems, and they're spectacularly good at making sure the systems both do what they're supposed to do and do it within spec. And they invoke fixes and do whatever they need to do if it turns out the system is not behaving as it should be. 

And the only way they know that is if they're monitoring it and keep an eye on. That gives you a handle on to say it. You know that there is no unbounded limit at which things are going to go bad. We will tell you here is a plausible upper bound on how bad things could be and write software around according to that. 

FRANCESC: So that is actually something very interesting. Is that what at bigger scale becomes what we call an SLA-- a Service Level Agreement? 

JOHN: Well, it becomes the SLO part of the SLA. 

FRANCESC: SLO. Yeah. 

JOHN: Right. So just terminology for-- 

MARK: Yeah. Service-- 

JOHN: --service level objective. 

MARK: --objective. There you go. 

JOHN: The way I think of it is something I want to be true. I'd love there to be more than about this many failures per week. 

FRANCESC: And something that I thought was pretty amazing when I was reading the SRE book, it was about SLOs and how if our SLO is higher than expected, sometimes we will just make our services fail just for fun? 

JOHN: For two reasons. Well, some people might do it for fun. The rest of us have good reasons for doing it. 

FRANCESC: It is fun. 

MARK: Some people just want to watch the world burn. 

JOHN: Exactly. Yes, yes. yes. Heh heh heh. There are a couple reasons, right? Sometimes you find people mistakenly assuming something is going to be up, because it always has been whenever they've looked. Well, if it turns out it might not be, and they've made an assumption that it is, that's a failure that they've just written for themselves. 

So for example, we have a system in turn that we call Chubby which we use for storing relatively small quantities of information that is incredibly available. We have local versions of it in every cell or pretty much every cell. We also have a global one, which is more convenient to access, but we do not promise it is always there. 

So just to make sure that if you choose to use it, you cannot rely on it. The people who run that service will deliberately take it down once a quarter, and then we find all those people who fall over because they were assuming global Chubby was there, and we go fix them, because that's not acceptable. 

MARK: Yeah. 

JOHN: So that's one reason for why you might choose to inject failures to find faults. And the second reason is that maybe if you're making your system too good, you're spending too much money on it. You can maybe economize. You could maybe use fewer resources or maybe have a fewer less copies or be willing to take the resources you're putting into that system to make it behave well and move it somewhere else where it would have more benefit to a business or a customer. 

MARK: I guess it's kind of that whole thing, right, it's better to do it in training or when people are watching for a bad thing to happen than to have to go, oh, it's an emergency. Let's do it right now. 

JOHN: Absolutely. But you also have to prepare for emergencies and be ready to do it right now, which is why having people incredibly good at this running your systems is the right way to go. 

FRANCESC: So regarding that issue of don't rely on things that could go down, is it also true that sometimes we will take down actual data centers or things like that, not just for fun as we said, but to make sure that, like, not crazy assumptions are taken? 

JOHN: So we do this annual exercise we call DiRT where we, first of all, begin by assuming that the company headquarters has slid into the sea in California-- 

FRANCESC: Yeah. 

JOHN: --and is disconnected from the rest of the world. So can we keep running Google without Mountainview? And the answer pretty much is yes. And then we add some interesting mix to it. So my favorite from one year was that the operations team in Dublin apparently went out drinking one day and wasn't going to be back for several days. Another version of this is we simulate-- we didn't actually do this, because it would be painful. 

FRANCESC: Oh, OK. 

JOHN: It was a simulation. Let's pretend we have lost all power to one of our really big data centers. And you discover what's going to happen. Right? Well, what happens is those people go, good grief, we've got a bunch of stuff running. We have diesel generators. They switch on. They start burning through diesel to keep these things running. 

They're producing an awful lot of power, and you call up the local diesel suppliers and say give me trucks full of diesel. Get them lined up right now, because we're going to need to move them as fast as we can to keep the thing afloat. And then somebody says, great, how are you going to pay for this? 

FRANCESC: Uh-oh. 

JOHN: And you say, oh, well, the people in Mountainview. 

FRANCESC: Oh. 

MARK: Oh, no. 

JOHN: Oops. So that's why you do these exercises, is you have a chance to find out those things in a world where it isn't actually a disaster, right? 

FRANCESC: Yeah. 

JOHN: You can cope with it ahead of time and go, let's fix that. 

MARK: Yeah. 

JOHN: Another example where something happened was we discovered we needed to get everybody on the phone bridge to be able to talk about it, because we have systems that are spread across the globe, and we have experts in different countries and they're panicking trying to get something done. And they can couldn't set up a phone bridge because that rides on a piece of software that was currently down. 

MARK: Nice. 

JOHN: A fix for that is quite straightforward-- you always have a phone bridge ready to go and everybody has its numbers that needs it and off you go. So those are the kind of things that you don't think of until you go through the process, and then you go, oh, why didn't I think of that? Well, I don't know. 

As you build up experience in this, and I think the SRE book is a wonderful example of that, it's basically a distillation of several thousand people times a dozen plus years of experiences of making or discovering opportunities for not screwing up and writing them down for other people so we could spread the wealth. 

MARK: Standing on the shoulder of giants. 

JOHN: There we go, yes. 

MARK: So let's change tack a little bit. I don't want to go over time, as much as I want to just talk to you forever and ever, we want to talk a little bit about the Open Source project Kubernetes. There are definitely direct influences from Borg and what we do at Google as a whole in two communities, I think, specifically around lessons around failure, optimization, trusting your system. Do you know some history about how Kubernetes make about, and I think we've probably heard about it, but what's that connection there? 

JOHN: So indeed, yes, it was some people who were associated with the Borg ecosystem who were involved in its creation. So it came out of this combination of the Borg and the Cloud ecosystem that we were building internally. And somebody noticed this wonderful use of containers. We use them internally. We have used them for a very long time. 

Borg is built around allocating containers. They're just a way of encapsulating your program so that it can run pretty much anywhere. I talked before about running on the desktop and then also being able to move into the Borg universe. The same thing is now possible in the external world thanks to Docker, which is just a really nice tasteful combination of a bunch of technologies that were floating around that somebody went and said, good grief, if we put these things together, we've got essentially the same idea. 

So Docker came out into the outside world and about the same time, our Cloud business was getting going, an interesting way. And we went, ah, wonderful opportunity for us to share our expertise and make this available to the larger ecosystem. So if you've got one instance of one application running in one place, then a Docker container is just fine, right? You can launch new copies of it, you can send it up, you can test it. 

Once you get to about 10 or 100 of these things, it gets tedious to do this by hand. Hold on. We've done that before. There's a pattern we've seen here. Let's see if we can replicate that pattern in the outside world using off-the-shelf software in the Open Source community and make it available to other people so that we can build an ecosystem and have everybody contribute to this so it's not just a Google project, it's actually an Open Source community that's been created around this stuff. We have lots of contributors-- thousands of them on the last count-- trying to help Kubernetes become better. 

Kubernetes is the odd outcome, right? One way of looking at it is it's a sort of Borg Lite version 2 done to try and take the most important parts of the lessons we've learned, including things like the failure tolerance, so Borg uses pack source for its internal persistent store. Kubernetes uses etcd to get the same effect. 

There's a central place where you can have the master, and you can say I wish this to be true. And the same kind of protocols that we talked about before are applied. There's an agent to every machine called the Kubelet, much the same way there's a Borg [INAUDIBLE] machine in the Borg universe. So all those ideas are very similar. 

And then we added a few new ones based on our experience with Borg. We've been running this thing for a decade or so now, and we've learned there are a few things it does that we wished it didn't. Let's not impose that on the outside world. See if we can-- only new mistakes. 

So that's really how it came, and it turned out a lot of the people who are now currently on the Google portion of the Kubernetes effort are ex-Borg people. They either moved 20 feet down the corridor or stayed where they were and switched projects and understood applying the expertise they built up over the years in the Borg universe to the Kubernetes space. 

FRANCESC: So that is interesting you said that we could see Kubernetes as kind of an evolution of Borg with all the things we've learned over the years. What is the biggest difference do you think is worth mentioning? 

JOHN: It's open source. 

FRANCESC: OK. That is a very good point. 

JOHN: People every now and again ask me, so why didn't you open source Borg? And I sort of look at them gently and go, you have no idea how much of the internal Google ecosystem tentacles reach their way inside our implementation. We couldn't do it even if we wanted to. 

FRANCESC: Yeah. 

JOHN: It's just too hard. But it you start from scratch, and if you target being an open source project and you aim for an Apache license and you use a different language to make sure you don't accidentally have dependencies on things-- So Borg is in C++, Kubernetes is in Go-- you end up with a thing that is actually far more malleable to the outside world, which is great. That's what it's all for, and as a result, we have many people contributing to it, and it's going to make rapid progress. 

FRANCESC: So one of the differences that I heard was also very important, other than open sourcing or not, was labels. I've heard that labels is a thing that is not part of Borg. Is that true, and why do you think that labels were added to Kubernetes? 

JOHN: Because we actually were trying to add them for Borg, and we made progress on it. We used them in the outside world in our Google Cloud product e-platform. And they turned out to be a much more flexible way of grouping things together. 

So Borg has a notion, which we call a job. A job is just a set of pretty much identical tasks, but that's all it has. It doesn't have any way of grouping subsets together or overlapping subsets and those kind of things. And labels let you do this. You put a label-- any label you like-- on a set of tasks, and then say do something like tell me the performance of it or do an upgrade on or take it down or bring up a new version, et cetera, all the things for which this set of labels applies. 

So now I have basically sort of end diagram set-like behavior on any mix that you like, and you get to define it. You don't just have this one single factor that is a very constrained way of doing business. So that was one of the lessons. So Borg provided a primitive. It was helpful, but it didn't go far enough. It was just a simple new abstraction of labels we get to take-- you can reproduce the behavior we used to have in Borg, but you also get all this other stuff as well. So that's a win-win. 

FRANCESC: Yeah. So that actually makes, I guess, monitoring easier because you can monitor really the tasks that you care about, which made me think about, OK, so you said that everything at Google runs on Borg-- or mostly everything. 

JOHN: Mostly everything. 

FRANCESC: And that to make sure that Borg is working correctly, we have monitoring. Doesn't monitoring for Borg run on Borg? 

JOHN: Good question. Yes it does. So the monitoring systems are jobs that Borg runs but, remember, I told you if the Borg Master goes down, the systems it was running stay up. There's no reason why they should stop. And you can also monitor one Borg cell from another. 

MARK: Interesting. 

JOHN: So actually it's one of the interesting projects underway at the moment is to say, what would happen if we turned off all of Google and tried to pick it up from scratch? 

MARK: Oh, God. 

JOHN: Because the standard way of booting up a new cell is to go grab a bunch of stuff from another one because it's up there. 

MARK: Yeah. But you need to have another cell to go to when you go. 

JOHN: She you need one to start from, yes. Exactly. So this is the kind of thinking where somebody starts going, let's talk about failure modes we haven't thought about before. This goes back to one of our earlier topics. 

FRANCESC: Yeah. 

JOHN: Imagine the worst case. No, no, the worst case. 

FRANCESC: Really the worst case. Wow. 

MARK: Then it almost comes back to like when you were talking about Kubernetes directly like federated communities and being able to do it across Cloud. It's like, OK, yeah. We have this cluster of 10, 50, 100,000 machines. That's great. What if that data center goes down or what if that Cloud provider goes down? Or what if my own print, like-- 

JOHN: Yeah. 

MARK: --I want it to be in multiple places at once. Let's think about that as a failure scenario. 

JOHN: Exactly. And it also gives you freedom of deployment. This separates the decision about where you run from what your application developers write. If you have a standard API like the Kubernetes one, you get to write to this API, and you can run exactly the same thing locally. You can run it on premises in your own data center if you want. You can run it on Cloud provider one, Cloud provider two, or maybe a mix of all of these things. 

MARK: Yeah. 

JOHN: And you can change your mind at any time. You're not bound to one of those things. So that freedom of flexibility in deployment is a wonderful thing that Kubernetes gives you. 

MARK: Unfortunately we are running out of time. I'm dreadfully disappointed. Is there anything that we haven't touched on or you want to mention or talk about or plug or anything like that that we haven't had time to cover? 

JOHN: Google Cloud is a wonderful way of being able to leverage pretty much a bunch of stuff like the things I've been describing so you don't have to do all that work. The same freedom that we give internal developers is the part of the message behind things like the Cloud products, right? 

MARK: Yeah. 

JOHN: So you can rely on stuff. I was in Illinois giving a talk last week about some of our Dataflow and storage products. And in the middle of it, I was able to do a live demo of doing a search in a petabyte table. It took about 12 seconds. 

FRANCESC: Oh, wow. 

MARK: Wow. 

JOHN: That's the kind of thing you want to be able to take advantage of to get your job done. You shouldn't have to be worrying about building the infrastructure to do that. So this isl the story behind Borg, it's the story behind Kubernetes, and it's the story behind the entire Google Cloud product line. Focus on what you can bring and add value to it and then build on best-in-class implementations of stuff underneath that you can get from other people. 

FRANCESC: Great. I have one more question. Can you share-- so you've been working on Borg for quite a while. Can you share what are you working on and like what is the next crazy thing you're going to be working about? If we interview you in a couple years, what would we talk about? 

JOHN: That's a great question I'm going to duck. 

FRANCESC: OK. 

MARK: So you know what? You know what that means? A couple years from now, we'll grab John again, and we'll interview him once more. 

FRANCESC: That sounds good. 

JOHN: I'd love that. This was fun. 

FRANCESC: Thank you very much. 

MARK: Thank you very much. 

FRANCESC: So thanks so much again to John Wilkes for such an interesting episode. I was so sad that the time ran over. I want to have him again. 

MARK: We could talk to him for days-- days and days and days. 

FRANCESC: Yeah. A very interesting conversation. I don't know. I think that I learned a lot. We will have a bunch of links, especially to the talk he gave at dotScale. 

MARK: Yeah. 

FRANCESC: I think that is a very good talk to watch too to understand a little bit more about we're talking about. But, yeah, he's amazing. So, again, thanks so much for coming. 

So I think it's time to go with the Question of the Week. 

MARK: Yeah. I think this is a really interesting one. So within the SDKs, we provide for Google Cloud for accessing services that we have, like say maybe Datastore or authentication or storage, stuff like that. 

We have a thing in there called Application Default Credentials, and that makes it really easy. So if I've got, say, some code, maybe it's running on App Engine or GCE, I can default and just go, oh OK, I know that you're running on GCE, which is internal to our project, so you don't have to do anything special to authenticate to log into like a particular service. That's great. That's dandy. That's awesome. 

What do I do if I'm testing locally, but I want to be able to connect to that thing in the Cloud that I would do normally? 

FRANCESC: So internally? 

MARK: Is there an easy way? 

FRANCESC: Yeah. So the important thing to know is that the way this works is by accessing some URL that is only accessible from inside of your own network. 

MARK: OK. 

FRANCESC: So say if you're running it locally, fortunately you don't have access to that, because security. 

MARK: Yeah. 

FRANCESC: So the only way of doing this before was to download a JSON file, so go create a new service account on the console and then download that file, put it in the group place, and then make sure that you have the correct global variable-- environment variable-- pointing to that JSON file. 

MARK: Ow. 

FRANCESC: Yeah. 

MARK: My brain now hurts. 

FRANCESC: Now you can do G Cloud beta application default login. That's it. 

MARK: Oh, and that just grabs the thing it needs, pulls it-- 

FRANCESC: That does all the things-- 

MARK: Does the magic, and then suddenly it works. 

FRANCESC: And it's automatic, so basically if you have a call to get application default credentials from your code, it will just work. 

MARK: That's really cool. 

FRANCESC: It is pretty amazing. I've used it a couple times, and I was surprised because I really expected, oh, so what's next step, and the next step is, like, you're done. 

MARK: You're done. 

FRANCESC: Yeah. 

MARK: So that's really cool. It means then you can be like sometimes maybe if you want to use an emulator, if that's available, you can do that or you can connect to the service that's actually in the Cloud, and you have really easy ways of doing both. 

FRANCESC: Yeah, as we mentioned in a previous episode, there are some emulators, like, Datastore has an emulator for it, which is really cool, but some of the services do not have those emulators. And sometimes you do not want to emulate, you actually want to talk to the real service. And doing the authentication in those cases can be a little bit hard, right? 

MARK: Yeah. 

FRANCESC: So, yeah, that way you can run your test directly on your laptop, which is on a completely different network, without having any other issues. 

MARK: Which is awesome. Cool. Well, why don't we tease a little about what we're going to be talking about in the next couple of episodes, because we do have those lined up. 

FRANCESC: Yeah. So one of the topic's going to be Cloud abuse. 

MARK: Yeah, so possibly if there is anything bad happening on your account or doing anything that possibly breaks terms of service. 

FRANCESC: Yeah, basically what are the things you should avoid doing and what happens if someone is somehow hacking you and doing those, you will get a notice saying, hey, something was going on. What do you do? 

So very interesting topic and most of the things are related to, well, you got hacked. Somehow someone got access to your instances, and they're doing something that they should not be doing. So the episode right after is going to be about how do I secure my network, basically. So networking on Google Cloud Platform. 

MARK: Yeah, two really good conversations, which you should definitely listen in for. 

FRANCESC: Yeah. I'm pretty excited about those. They're pretty pragmatic. They're like, OK, so this happened. What do you do next? 

MARK: What do you do next, yeah. Worst case scenario-type stuff, which is great. So I know you're out and about a bit over the next week or so. I think when this episode comes out, you'll be in New York. Is that right? 

FRANCESC: Yeah. So when this episode comes out, I will be in New York, and actually I'll be probably on my way to go to The Economist where it will be running, learn How to Build High-Scalable Web Apps with Go workshop hosted by Women Who Go. But if you want to join, it is open to anyone. So feel free to check out the show notes and join. And if you cannot go, it is totally fine because on Monday I will be running basically the same thing, but on a Go Remote Meet Up. 

MARK: That sounds like loads of fun. I have looked at that workshop. Its a lot of fun. 

FRANCESC: Yeah, because its about to be open sourced. 

MARK: Yay. 

FRANCESC: Yay. Soon, soon. What about you? 

MARK: The day after this episode comes out, I will be at Siege in Atlanta. I'm particularly excited about that because they said, oh, we'll give you four minutes to rant about whatever you like in regards to the games industry. 

FRANCESC: Nice. 

MARK: And I like complaining. It's lots of fun. 

FRANCESC: Developer advocate. 

MARK: Developer advocate. 

FRANCESC: Professional whiner. 

MARK: So I am actually complaining about people not being able to talk about their games. 

FRANCESC: Nice. Very interesting. 

MARK: Yeah. So that'll be lots and lots of fun. 

FRANCESC: Cool. And if you are anywhere where you can find us, don't forget that we do have stickers. 

MARK: Stickers. 

FRANCESC: So come get them. I think that we have not done this for ages, so why don't we remind everyone how to get in touch with us. 

MARK: Sounds good. So what's the website? 

FRANCESC: gcppodcast.com or cloud.google.com/podcast. 

MARK: If people want to email us? 

FRANCESC: Don't. No-- 

MARK: No, please do. 

FRANCESC: hellogcppodcast.com 

MARK: Excellent. Subreddit? 

FRANCESC: R/gcppodast. 

MARK: Google ? 

FRANCESC:  gcppodcast. 

MARK: Twitter? 

FRANCESC: @gcppodcast. 

MARK: Slack? 

FRANCESC: There's a podcast channel in the Google Cloud Platform community. 

MARK: Yes. 

FRANCESC: Channel community. 

MARK: Yes. You got it. 

FRANCESC: I got it. 

MARK: You got it. Did I miss anything? 

FRANCESC: I feel like you forgot something, but I don't know which one. 

MARK: I don't think so. 

FRANCESC: OK. So anyway, get in touch with us. Send us your Questions of the Week. 

MARK: Definitely. 

FRANCESC: Send us any question or any Cool Thing of the Week that you think we should share. Just let us know. 

MARK: Yeah. Actually, you know what would be really cool? If somebody sent us an audio recording of their question. 

FRANCESC: Ooh, that would be cool. Yes, do that. 

MARK: Yeah. 

FRANCESC: Record your own audio asking a question and-- 

MARK: Email it to us. 

FRANCESC: That would be awesome. Or tweet it or whatever. 

MARK: Yeah. We'll find a way. Awesome. 

FRANCESC: That's a great idea, Mark. 

MARK: Thank you. 

FRANCESC: You're welcome. So, yeah, waiting for those, and talk to you Mark and talk to you all next week. 

MARK: See you next week. 
{{< /transcript >}}
