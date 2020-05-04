+++
audioDuration = "00:38:12"
audioFile = "Google.Cloud.Platform.Podcast.Episode.218.mp3"
audioSize = 54947320
categories = ["Chronicle Security", "Cyber Security"]
date = "2020-04-29"
description = "It's cyber security week on the podcast as Priyanka Vergadia joins Mark Mirchandani to talk with the folks of Chronicle Security Team."
draft = false
episodeNumber = 218
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Chronicle Security with Dr. Anton Chuvakin and Ansh Patniak"
image="/post/episode-218-chronicle-security-with-dr-anton-chuvakin-and-ansh-patniak/images/hero/hero-EP-218.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/gab8tw/episode_218_chronicle_security_with_dr_anton/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

It's cyber security week on the podcast as  [Priyanka Vergadia](https://twitter.com/pvergadia) joins [Mark Mirchandani](https://twitter.com/markmirch) to talk with the folks of the Chronicle Security Team. Our guests Ansh Patniak and Dr. Anton Chuvakin start the show off with a brief explanation of Chronicle, which is a security analytics platform that can identify threats and correct them. 

Anton details the threats facing clients today and why it's important to continue to guard against old threats as well. Cyber security developers must constantly examine the landscape, adjust tools used, and think ahead to try to predict possible future problems. Ansh elaborates, pointing out that sometimes, all the security needed to protect against old, current, and potentially new threats can create a data overload that causes some threats to be lost in a jungle of notifications. Analyzing this data to gain insights about the health of a company's cyber security is an important part of the process, and Chronicle can help with that. We discuss other challenges in the security analytics world and learn tips and tricks to help overcome them. 

Our guests wrap up the show explaining how Chronicle, as part of GCP, benefits Google Cloud customers.

<!--more-->

##### Dr. Anton Chuvakin 

[Dr. Anton Chuvakin](http://chuvakin.org) is now involved with security solution strategy at Google Cloud, where he arrived via Chronicle Security (an Alphabet company) acquisition in July 2019. Anton was, until recently, a Research Vice President and Distinguished Analyst at Gartner for Technical Professionals (GTP) Security and Risk Management Strategies team. Anton is a recognized security expert in the field of log management, SIEM and PCI DSS compliance.

##### Ansh Patniak

Ansh Patnaik is responsible for product marketing at Chronicle. Previously, he was VP of Product Management at Oracle where he defined and launched their Security Analytics Cloud service. Ansh has held product management, marketing and sales engineering roles at several cybersecurity and data segment market leaders including Delphix, ArcSight (acquired by HP), and BindView (acquired by Symantec).

##### Cool things of the week

* UEFI, Shielded VM now the default for Google Compute Engine customers—no additional charge [blog](https://cloud.google.com/blog/products/identity-security/security-simplified-making-shielded-vm-default-compute-engine)
* Anthos—driving business agility and efficiency [blog](https://cloud.google.com/blog/topics/anthos/anthos-for-aws-is-now-ga)
* Anthos 101 [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKN73vzKpg2p2JmOGoAN0CG) 

##### Interview

* Chronicle Security [site](https://chronicle.security/)
* Chronicle Security Blog [blog](https://chronicle.security/blog/)
* Chronicle Security Resources [site](https://chronicle.security/resources/)
* Why Your Security Data Lake Project Will FAIL! [blog](https://blogs.gartner.com/anton-chuvakin/2017/04/11/why-your-security-data-lake-project-will-fail/)

##### Question of the week

[Whats one thing you have seen users ask about security on Google Cloud?](https://www.youtube.com/playlist?list=PLIivdWyY5sqLuKKx4pcdEAkJY1HevjVVm)
     
##### What's something cool you're working on?

Our guests be doing the [SANS Webinar](https://www.sans.org/webcasts/unwind-siem-improved-threat-hunting-detection-chronicle-114290) on April 30th.

13 days of GCP Architecture series! We're on day nine now, but you can catch up on [Twitter](https://twitter.com/pvergadia/status/1252352777482760195) with posts like [Day 6 on Data Lake](https://twitter.com/pvergadia/status/1254549135128068096) and join us for the next few!

{{< transcript "[MUSIC PLAYING] MARK: Hey there, and welcome to episode 218 of the weekly Google Cloud Platform podcast. As always, I'm Mark. And I'm here with my colleague, Priyanka." >}}

PRIYANKA: Hi, everyone. I'm so excited to be here today, especially because we're talking about security. 

MARK: We have a security-filled episode. So I am super, super excited to talk more about it, with lots of cool topics from a lot of different places. Can you tell us, Priyanka, who our guests are going to be today. 

PRIYANKA: Yeah. We are going to be talking to the Chronicle security team, Dr. Anton and Ansh, who are going to be talking about the landscape of security and all things security. 

MARK: Yeah, it's kind of interesting-- you know, Chronicle spun off of Google X, or one of the internal incubators here, and then now just recently rejoined Cloud. So hearing from them about what Chronicle does and a little bit more about what security looks like in the cloud. 

PRIYANKA: Yeah, yeah. It'll be amazing to hear that. I mean, there are different ways in which you can secure. And there are different security levels, like infrastructure, and application, and then how all of that fits together. So I am super excited to hear from them. 

MARK: And since we're talking about security, I thought that we could mix things up a little bit. And our question of the week is actually going to come from our friend, Yuri Grinshteyn, also known as the Stack Doctor. And he's going to be talking a little bit more about some of the security things that people have been asking him. 

PRIYANKA: That's amazing. I'm excited. Let's do it. 

MARK: Well, why don't we go ahead and jump right into our Cool Things of the Week? 

PRIYANKA: Cool, OK. 

[MUSIC PLAYING] 

MARK: So my Cool Thing of the Week is, again, security-focused. It turns out that shielded VMs were launched last year. And these shielded VMs are basically like your normal VMs in Compute Engine. But they have some extra features in them to protect against boot or kernel-level issues. Kind of makes sense. I actually don't know what the downside to running a shielded VM is. There's probably a little bit more processing on the boot-up side. I don't know. But it sounds like a really great tool. And as it turns out, now they're free and the default. So that's super, super cool. Because again, I don't know what the downside is to running these. It's one less thing to worry about, right? Like, you've already got this infrastructure in the cloud. 

PRIYANKA: Yeah, that makes sense. That's really cool. I would like to try this out. I've been spinning up some Compute Engine instances for multiple different demos. So I will just test this out. That's a great find. Awesome. 

Well, my Cool Thing of the Week is we announced, last week, Anthos has now GA support for multiple different clouds. I tested it out with AWS, and it worked amazing. So I had a container in AWS, and then I was managing it through Anthos and Google Cloud. 

So yeah, I would encourage everybody who's trying to learn Anthos to give that a try because that's pretty cool. And then, also, for those who are really new to Anthos and wanting to learn more about all the features and different things that they can do with Anthos, I've started this series called Anthos 101, where we're really just starting from what is Anthos, to what are the different tools, and how you can get started. 

So we'll maybe put the link for that video in the show notes. And yeah, get started with Anthos. Let us know how you're feeling. 

And it's a work in progress. So it would be great to get more feedback from you when you're working on it. Just all these different pieces are moving at all these different speeds. So there's a lot coming out there. And I think a lot of people are asking, what is it, how can I use it, those sorts of things. 

MARK: So having videos and helpful kind of blog posts and walkthroughs, I think people are just all about that right now. So it sounds like they should go check out the "What is Anthos?" the 101 video. And if they have any comments or suggestions they should leave them in there. And then we can kind of see, from those people, hey, what would be useful to create. What do you want? How can we help you learn Anthos? 

PRIYANKA: Exactly. 

MARK: Awesome. Very, very cool. Well, why don't we go ahead and dive right into our interview? [MUSIC PLAYING] 

Thank you so much for joining us. First of all, can you tell us who you are and what you do. 

ANSH: OK, Ansh Patniak. I'm responsible for product marketing at Chronicle, getting the message out on what Chronicle does, what's unique about it to customers, partners, and to our field. 

ANTON: And my name is Anton Chuvakin. I'm involved with marketing in Google Cloud and Chronicle. My role is a little more fuzzy, because I'm involved with product marketing of several product-- SATA security, Chronicle itself, of course, and a few others. 

MARK: So I think the first and foremost question here is, what is Chronicle? 

ANSH: You know, a simple way to think of is that it's a security analytics platform that's designed to enable detection of modern advanced threats, investigation of those threats at Google search speed, and then remediation or correction of those threats, both directly and through some of the partnerships that we have inked. 

Now, that's kind of a mouthful. So another way to sort of describe it is that security analytics today, which is really the focus of Chronicle, has ended up, over the years, becoming a very clear big-data problem. The amount of telemetry that you have to be able to capture ingest and store to detect and investigate modern threats is inordinate. For large organizations, we're almost always talking about petabytes of telemetry. And the idea behind Chronicle is to unleash that data towards detecting these threats, investigating them, and fixing them. 

ANTON: And to add to this, the market space that appeared to solve some of these problems historically was called SIM, Security Information and Event Management. A short way to describe Chronicle is how a SIM would look like if it were born today. In real life, the SIM market appeared perhaps at the very tail end of the 1990s, so 20 years ago, almost a quarter of a century ago. It kind of freaks me out when I say that the technology space was born a quarter of a century ago. And a lot of the other products, a lot of other tools in the space carry some of the thinking that was originated back in the '90s and kind of evolved over time. So it was hard to restart this space because there was a lot of legacy. 

Chronicle, to me, is how SIM would look like if it was born in 2019-- modern, in the cloud, super focused on search, but with quality data, enriched data, support for modern use cases like threat hunting. But of course there was support for classic use cases such as detecting threats, detecting malware, and of course producing telemetry in support of incident response. 

PRIYANKA: So what do you see as the state of security operations and threat landscape today? 

ANTON: Well, one of the things I have resisted in my past career as an analyst is to predict threats. Because in all honesty, much of what makes security industry special is that chief security officer, security leaders, security engineers, all the way down to security administrators kind of have to deal with whatever the attackers serve us. So in that sense, the trends, we can discuss, but predicting is very hard. For example, a good number of years ago, most of the people who created malicious software or malware focused on viruses, and worms, and stealing credit card numbers. And nobody has heard of ransomware. 

Now, later on, perhaps around '16, '17, ransomware became a big deal. And today, if you look at the news, many of the organizations suffered from pretty large ransomware infections. If it's a private person, the ransom may be a few hundred dollars. But we've seen, what, million-dollar ransoms when the enterprise data was encrypted by the militias too. 

So in all honesty, the domain of threats is so large that enterprise and actually other business security professionals have to deal with many of the old threats-- traditional malware, other type of malware, of course attackers trying to steal corporate data, or personal data, payment data, impersonate people and transfer money. And there's a pretty long list from that to threats that perhaps have their origins in the 1980s. Malicious insiders-- people who just try to do their job. While they do that, they violate some corporate security policies. So there is a pretty wide range of threats that organizations have to deal with. It almost makes security one of the most exciting occupations. 

I think one of the security visionaries-- I think it was Dan Geer-- once said that security is the most intellectually challenging profession on the planet. He really meant that we don't just build technology and use it. We have to deal with this type of ever-changing, dramatic landscape of threats that are built by people who are perhaps unlike us and they want something else. 

PRIYANKA: Yeah, so you always have to stay on top of what's going on, and keep changing the tools to meet those demands, but at the same time also think, in a way, what could be coming next and design for that. Yeah, it sounds really, really challenging, but also a lot of fun. 

ANTON: I'd also like to say sometimes that old threats almost never die. Because while we deal with a lot of new stuff and the landscape is kind of as you described, very agile, a lot of the badness with its origin in the 1980s-- people guessing passwords because they're weak, or people guessing passwords because somebody didn't change a default password-- have their origins almost half a century ago, and yet they still plague companies today. So not only you have to be agile, you have to be also quite aware of the history. You may succumb to something that is very old, you just aren't thinking about it. 

MARK: Right. Because you've kind of got these multiple factors, where not only has-- the entire technology landscape is basically changing every three to four minutes, but you've also got these applications that were built 30 years ago, some of which are still running. Now attackers have more time to focus on them. They can keep looking at them. So you kind of have to not only add to the front, but constantly revamp the backside too. And just this huge spectrum of stuff you need to deal with. 

ANTON: Yes, this actually is a really good metaphor, by the way, the whole front and back thing. Because you may miss something related to, say, threats against containers. But if you go and double down on containers, you'd miss something that affects your mainframe. And suddenly you're very much thrown from the 2020s to, you know, 1970s. 

PRIYANKA: So what are some of the underlying root causes of security incidents and problems that you see today that need to be addressed? 

ANSH: What we've been seeing, especially in the sort of security analytics space, also traditionally called SIM, as Anton was saying, is that there's this neverending problem of more tools and more infrastructure that organizations are contending with. So in one sense it's good, that as more infrastructure is added we do need different types of security solutions to protect against different threat vectors. 

But the reality of what's happened, sort of the state of security for operations teams, is that that's created a lot of noise, a lot of alerts, a lot of fatigue in the security operations center. And in many cases, actual threats are missed. So if we talk about root causes, I do think one is clearly there is this sort of data overload problem, not just about raw telemetry, but about the threats that are detected. It's overwhelmed teams. And a lot of noise is mixed in with a few threats that then are easier to miss. 

There's another problem, which is just a very pronounced and perhaps the biggest problem in security across the board but in operations in particular is the talent shortage problem. Unemployment in cybersecurity is literally zero. It's very hard to hire talent. It's even harder to retain and train good talent. And so that double whammy of having a high case load, a talent shortage, and solutions that aren't as effective as perhaps they need to be in uncovering the threats are, I'd say, some of the root causes. 

ANTON: Yeah, I think it's kind of useful to think of it as kind of a triple whammy of talent shortage, the expansion of the technologies we have to protect-- so from the new ones to the old ones-- the talent first, the technology second, but also the fact that the volume of data and complexity increases as well. So we have not quite enough people with the right skills, we have an ever-increasing stack of technologies, and we have larger volumes of data as far as visibility is concerned-- telemetry about activities, about attacks, about whatever else. So this does create a lot of challenges for both detecting threats, investigating incidents, or dealing with the fact that maybe you had an incident six months ago, and you're not really responding to a current event, you're kind of responding to past event, which often requires you to investigate something that's sort of long gone but still matters. 

And wasn't there a case in the media a few years ago-- I think it company in Canada that discovered that they were compromised since 2004, continuously, or something? So they discovered that they were first hacked 15 years ago, and the attackers retained access to their networks. I don't want to name names because I may not remember it right. But it was amazing. It was, I think, the longest dwell time of the attacker in somebody's environment that I've ever heard about. I think it was like 11 years. 

So its investigative is really hard. I would say it's practically impossible. The relevance of the investigation is also secondary. But imagine the volume of data. You have to go back through one month of logs, but then now you're looking at possibly five years of log data. 

So this really challenging. And while a lot of organizations and a lot of other vendors, perhaps, try to say, hey, let's just automate it, let's think of some kind of machine learning approach, it's been very challenging being an operationally-ready format. 

MARK: Yeah, I'd love to take a quick tangent actually, because I thought one of the things you mentioned was really interesting, was this kind of lack of current talent pool that's out there. I'd love to hear if you all have some thoughts on what's helpful, what people should be looking at. Obviously there will be an ever-increasing demand for cybersecurity jobs, as you just mentioned. There's just not enough people right now to fill what's needed. 

So for people who are interested in that, do you have any thoughts on that, any advice to give those people especially? 

ANTON: So the framework that many people looked at is hiring and growing talent, outsourcing, and automation. So it's kind of a triangle approach to, OK, so can we hire here? Yes. So in this case, if we can hire or we can grow our own talent, train people, teach them to think like security professionals, or maybe teach a good network admin, or a system admin, or a cloud account admin to be a security guy, that works. 

Now, if you cannot, you can try finding somebody else who offers it as a service. There is a pretty lively market space of managed security services who would do monitoring and some response. There are a lot of known limitations. I've dealt a lot with this market back in the Gartner days. But the idea is that outsourcing or rather finding a provider who can help out is very much an approach that's taken. And it has its own pitfalls. 

And the third approach is, of course, to try the same people you have more effective by giving them new tools, more automation, cleaner data, again more machine learning, and analytics, so that you can bulk up not just the productivity but also possibly cognitive abilities of the people. 

I'm not aware of any other answer but growing talent, finding a managed service, or automation. It kind of goes around and runs between these three points. 

ANSH: One other different perspective on that it's just around the awareness question. I mean, if we're talking about talent in the SOC, in security teams, that gap is-- all statistical evidence-- is only going to widen. There's going to be a continued shortage. 

As Anton said, you can address that partly through training, partly through automation. But the other thing that organizations probably need to focus more on is just building broader security awareness, not just in the security teams, but beyond that, among every information worker. We're still at a point where more basic attacks like phishing are things that account for-- a good chunk of major attacks start with someone clicking into a URL that probably they shouldn't have. And that just goes back to more wider security awareness across all business functions, not just IT, not just security. 

ANTON: To further go down that path, I think that argument splits into two. There is security awareness, namely, making employees think more about security. But there is also a side angle to this, namely that many types of roles in development, in operation, in DevOps, in application development, can be occasionally deputized to do security tasks. And again, the lately-popular DevOpsSec or DevSecOps idea was not about hiring and adding security people to a team. It was all about finding security-- almost like people with security as a hobby or security as a task within the other teams. So that, to me, is another critical aspect of finding talent. The talent you find may not be security professionals. They may be developers who care about security, admins who care about security, or somebody else who cares and know security to be useful. 

PRIYANKA: So changing gears a little bit here, what are some of the pitfalls or mistakes that you've seen in security analysis? 

ANTON: I would actually start with one and maybe hand it to Ansh for other things. Here's something I observed since my very first job with a vendor in this very area, which happened in 2002. We always had this situation of possibly too much data and not enough insight or information. It sounds like a cliche. But the thing is, if you've been repeating this for almost 20 years, it does become a cliche, but it doesn't become any less true than the vendors in the early 2000s, perhaps late '90s promised, give us your data, we'll give you the insight. And then every generation of after that, for the subsequent 18 years, promised the same. And I can't say they didn't deliver, but I have to say that it's rather suspicious that you keep promising the same thing for a long time. 

So is that a challenge today, that companies have "Hadoopfuls" of security data and not enough insight? Yeah, it's a problem. 

So in 1997, you may have had a relational database full of security data, and somebody complained about having to run reports-- I don't know, Crystal Reports in the '90s-- and how it was difficult to get insight. Today they formulate the problem in exactly the same manner. And it's sort of suspicious and nerve-racking that we had too much data, too little insight. 20 years pass by, what do we have? Too much data, too little insight. 

ANSH: Every four or five years, sometimes sooner, a technology space will go through some form of technological or architectural obsolescence. It's rendered obsolete because the architect was fundamentally not designed for, let's say, the volume of data or for the nature of analysis that was needed. And the security analytics space has certainly gone through those cycles. 

And the shortfall or the pitfalls of what customers are now encountering is exactly what Anton was alluding to, which is that they know that it's a big-data problem. The last generation of solutions have hit that point of obsolescence. And so if they're having to build this internally on their own, which is not what any of them want to do-- they'd ideally want this to be a cloud-scale performance solution that is priced right and that comes with the analytics that are needed. But to the extent that that has evaded them the last few years, organizations have had to try to go do this on their own. Couple of years later, they come out of it realizing that they don't want to be in the business of building their own cloud. And they'd rather be in the business of security operations and not infrastructure management. 

ANTON: Which reminds me, I had a blog post-- one of my most favorite and I think, actually, most popular blog posts in my analyst days was, 10 reasons why your security data lake project would fail. And it was really a very depressing blog post, because it was based on a good number of stories I've had, both at conferences and in different areas, where people would say, we don't want the commercial product of a past generation. We're just going to build something better because there's so much open source, so much other technologies. 

And then they try, and some things work out, but some things don't. And maybe three years later they realize they really shouldn't be in the business of building scalable analytics software from parts. It's almost like they were sold a car that wasn't quite good, so they bought a bunch of parts, and decided to buy their own car, which is better. 

It can happen, and it has happened to some people successfully. But to me, the percentage of successes down that path is quite tiny. While open-source components are become stronger, I'm still noticing a relative lack of success down that type of a DIY big-data security analytics or DIY security data lake path. People occasionally get to a data lake, but then they lose resolve right when they have to double down on the use cases, and on the insights, and the algorithms. 

MARK: Yeah. It's kind of like you said-- this is a really hard problem to solve that's constantly changing. And unless you're dedicating yourself huge amounts of teams and over 100% effort to it, you're not really going to be able to keep up. 

I would love to get the link to that blog post so that we can share it with our viewers. Could you share that? 

ANTON: Yes, absolutely. 

MARK: Awesome. That'd be great. 

So I do want to bring this back a little bit to Chronicle's position in all of this. Because obviously there's probably a bunch of great people on the Chronicle team who have been working in this security space. 

So some big news from last year was that Chronicle had kind of joined Google Cloud. I'm curious as to what that actually means for users of Google Cloud, for businesses on Google Cloud, and what it means for Chronicle as a whole. 

ANSH: Well, probably one thing to note is that, while we came back to Google Cloud originally, we came out of Google, and our founders were part of Google's internal security team. Google has generally had a pretty strong reputation in terms of protecting its infrastructure, intellectual property, customer data over the years. Naturally this was a team that responded to a major attack, literally a decade ago, called Aurora. And the idea of incubation, as you know, sometimes has done well in groups like X, which is where this was incubated. 

But at some point it was clear that there's an onus, a responsibility, and an opportunity to do this not just for organizations where they are today, which may be a lot of infrastructure on-prem, but also in the cloud, within GCP. And so it made a lot of sense to merge these efforts and to give customers the ability to protect their infrastructure and their assets regardless of where they are in their journey. So if they're all on-prem or if they have a hybrid across on-prem infrastructure or private data centers in Google Cloud-- or for that matter, in other cloud platforms-- the union of the two allows us to have that complete story. Because if there's one thing we know, it's that the threats won't discriminate. If your infrastructure is hybrid, which it increasingly is for large organizations, then you're always at risk of your threats moving around. And you have to have that visibility across all that real estate to be able to protect against those threats. 

ANTON: Being part of Google-- and actually, in this case, whether Alphabet or Google, it wouldn't matter-- allows us to have access to the technical infrastructure of Google. You can't buy it in stores, right? 

[CHUCKLES] 

You know, we have it and nobody else does. So to me, that does give us a set of advantages that it's probably literally impossible to replicate. And these are both technical advantages and economic advantages. It's not about, are you in the cloud? You can be in the cloud, but then you can still be killed by a big cloud bill. So to me, much of how Chronicle was built allows us to offer certain things-- searches, threat [? intel ?] correlation, a lot of other functionality, at a price not connected to the volume of data, which to me is a kind of crucial advantage. 

As a technologist, I probably am not a major fan of leading with a pricing story. But in this case I feel like the pricing model is a major part of our success, because we don't have to charge people per gigabyte when they're buying security. Buying security per gigabyte is really a strange idea if you think about it. You're not looking to buy security per kilogram, or per gigabyte, or per pound. You want to buy it somehow differently-- maybe per employee. So to me, this is a big part of our success as a technology and as a product, because we didn't go the charge-per-gigabyte route. 

PRIYANKA: And for listeners, if they want to start exploring Chronicle, what are some tips that you would provide them? 

ANSH: One of the best parts about Chronicle is that, because it is delivered in the SaaS model, it's extremely easy compared to some of the legacy solutions that would take a very long time to deploy. So you can be up and running very quickly. And there are a couple of ways in which you can get there. One is to have a full-scale proof of value, which is also fairly straightforward. But a lot of our organizations want to be able to explore data. So we also have the notion of sandboxes with data that's already in there, that allows customers to walk through realistic scenarios, both basic and advanced, things like phishing as well as more advanced persistent threats, get a feel of the performance, the scale, and the unique analytics that Chronicle brings. So you could do this in multiple ways, both with a sandbox and through an organized proof of value or trial if you will. 

PRIYANKA: Great. Is there anything else that we have missed that you would like to mention? 

ANTON: I would say that technologies in the area of security monitoring, security analytics, threat detection occasionally would have bad reputation with organizations because people think it's very hard. Hence the pressure to outsource, to look for somebody you can pay that so that they take it off your hands. In many cases, the resulting backlash focuses on the products. But I wanted to kind of highlight the fact that, unlike many other domains of digital technology and computers, when you are in security, you do deal with an intelligent, conscious, dedicated adversary on the other end. 

So sometimes the challenge is just harder. It's not about, is this a bad product, or is this a product that's too hard to implement. The mission itself is very hard. Sometimes if you are looking for threats that are meant to be well-hidden from you, or threats that are meant to be well-hidden from even a skilled defender-- this whole advanced persistent threat story, or government-sponsored threats, or whatever else, you are trying to play cat-and-mouse with people whose success depends on them hiding well. 

So you're not just like, hey, let's collect the data and analyze it. You collect the data and you analyze it. But the other side can adjust, can adapt, can change their tactics so they don't see you, or they may use intentional misdirection or whatever else. So it's something that, like, hardcore career security guys kind of have to explain to people who come from other areas of IT into security. And they think, well, yeah, security shouldn't be that hard. Let's just encrypt, let's deploy anti-malware, let's firewall it off. 

But the thing is, the other side, the proverbial bad guy, the adversary-- which is a polite term for the bad guy nowadays-- is kind of out to get you. You're really not paranoid. There are people out to get you. And occasionally they meant to evade detection, they meant to bypass your preventative controls, the things you built, the walls, the blocks. 

So to me, it's useful to appreciate the challenge of the mission, and not just the question of, should you use 2A or 2B. It's a hard problem. Chronicle does make it easier, but I would say it does not make it easy. I think it's still a very hard problem. 

PRIYANKA: Yeah. I've heard this time and again in a lot of conversations, where the attacker or the adversary has to just be right once, but we have to be right-- the person, the security team, the entire engineering world has to be right all the times. It's a very interesting approach if you think about security that way. 

ANTON: So this line is well known in the security community. And occasionally people overuse it, and kind of maybe use it to increase the level of depression among the security professionals. 

So if you are looking at a threat from a position of what's now called threat hunting, namely identifying attackers who are in your environment already, occasionally the wisdom becomes, if the attacker makes one mistake and forgets to delete some traces, as skilled defenders, we'll find him. So it's almost like the attacker cannot make mistakes in a well-secured, well-architected environment with a lot of sensors. The attacker has to be right every time. If they make a mistake, they're found. So in that sense, you do have kind of the opposite to be true as well. It's only true for people who are really skilled in blue-teaming, defending, monitoring, threat-detecting, threat-hunting, but it is true, and it does give you a morale boost that, if an attacker does manage to get in, they cannot make mistakes because we will find them. 

ANSH: With Chronicle. 

ANTON: With Chronicle. Thank you, Ansh. 

MARK: And with that last point, if people want to learn more about Chronicle, where should they go? 

ANSH: Chronicle.security is a good place to go to get information, latest [? other ?] webinars and events that we are spending-- digital or otherwise-- and you'll also find information on the blog there. 

MARK: OK, we'll include those links in there. Well, Ansh, Anton, thank you so much. It was such a great conversation to talk about. And it's really good to hear that security may not be as depressing and hard of a challenge as some people may think it is. 

ANSH: Great. Thank you, Mark. Thank you, Priyanka and Anton. 

PRIYANKA: Thank you. 

MARK: Great to hear from the folks at Chronicle. I was really interested in learning about-- again, that security landscape is so fascinating to me. I don't have the background in security. I know you worked for a few years. And it's so interesting to see how much has changed. But the fact that you have to secure everything from 40 years ago all the way up until now, that's so much to have to know about. 

So for cloud-native companies, it's so interesting to think about, they have such a small perimeter they need to deal with in terms of this cloud thing. And obviously Google does a lot of security stuff for you. But when you take a look at a huge enterprise and all the different sources they have, I mean, it's mind-boggling. 

PRIYANKA: Yeah. And the one thing that stuck out to me, having worked on a little bit of security-related things like web application firewalls and stuff a few years ago, is when you're thinking about cloud security, you have your applications in multiple different places. And it's important to think about it in a holistic fashion. So I might have a few applications here in Google Cloud, and some others in another cloud, and some others in on-premise. And what is it that ties all of the security telemetry together? So that's the part that I really, really enjoyed hearing from Anton and Ansh about the beauty of Chronicle security. So yeah, it was awesome. 

MARK: Yeah, so hopefully a lot of helpful tips in there for people who are interested in security, and just things to think about. And if not, if you don't care about security-- which seems like a bad idea-- at least it was an interesting conversation. 

PRIYANKA: Yep, yep. 

MARK: Well, continuing on that trend, one of the things we wanted to ask about for our Question of the Week-- 

[MUSIC PLAYING] 

--is talking to Yuri about some of the things that he's found while talking to users about security on Google Cloud. He talks to a lot of people about kind of getting spun up on the cloud, and how to think about security before you get started. So we turned to him and said, what's something that you think a lot of people are talking about? 

YURI: I talk to a lot of folks who are trying to address various security and compliance questions and requirements. And the one thing that inevitably comes up is, how can we have an audit trail of what people are doing in their projects. And of course they need this across their entire org for everyone who has access to the Cloud Console, they need this for all kinds of values of doing, and they need this and whatever they're using for that kind of auditing information, today on-premise. And as you can imagine, there are lots of systems and tools that may be used to consume this information. 

So this is actually a three-part question. The first part is, how does GCP track what users do? And as a corollary, how much control do I as an administrator have over that? The second part is, what can I do with this information? And specifically how can I get it out of GCP into whatever I need to analyze it. 

And the third part is, how do I make sense of it? What should I be looking for? So let's go through all three of these quickly. The first one is easy. Audit logs in Google Cloud are created in basically two cases. The first case is when any of what we call admin activity takes place, meaning when resources are created, deleted, modified. And this happens right out of the box without the need to turn anything on. And you can see those in your project just by clicking on the Activity tab on the project homepage. 

The second case is when data in those resources is accessed in any way-- again, created, deleted, modified, or read. So think of accessing the contents of a storage bucket versus creating the bucket. The second case is actually not on by default, but you can enable these for services you use if you go to the IAM menu and then select Audit Logs. 

So the next part is, OK, I've got all these audit logs being written. What can or should I be doing with them? So three things here-- first, I highly recommend creating an aggregated export across the entire org node for audit logs [INAUDIBLE], just something cheap like Cloud Storage-- or BigQuery if you think you'll need to query them. 

Secondly, consider also creating an exclusion. Without that, you may end up paying a lot for all those logs. And finally, you can export them to Pub/Sub, and then have your existing system on-premise subscribe to that topic to get them all to where you're used to in analyzing this kind of data. 

And now finally-- and this is the hardest part of the question-- what should I be looking for in these? And this is really where I'm not in my area of expertise. As you know, my focus is more on reliability than security. And I would generally defer to a real security practitioner. But in my general experience, your primary use for these is going to be forensic analysis of an incident rather than trying to detect an incident using these logs. That's definitely my own personal experience. 

So there you go-- turn on audit logs, fine-tune your exports and exclusions to optimize coverage and cost, and then use them when they're needed. 

PRIYANKA: Well, thanks, Yuri. That's amazing. That gives some pointers as to how to get started with audit logging. And somebody can enable some of these audit logs to get to know what's happening in their platform and in their infrastructure. 

MARK: Yep. Hopefully everyone should find that useful. And I think it's a pretty common thing, wanting to have those logs. So definitely highly recommended, of course, that everyone go enable those. 

And also, if you want to see more of Yuri, you can check out his YouTube series-- we'll put a link to the show notes-- "Stack Doctor," where he goes through a lot of the Google Cloud operations suite, and what that looks like, how to integrate with different libraries, how to look at SLOs and other SRE kind of concepts. Some great stuff there. 

Well, I think that will just about finish off security. Before we wrap up, Priyanka, what cool things are you working on? 

PRIYANKA: OK, so I thought that since we're all at home, I really wanted to start something where I can know more from everybody else who is trying to learn more about Google Cloud. So I started this series called "13 Days of GCP." And the idea behind it is just 13 days, and posting a new architecture of doing something in Google Cloud. 

So at this point I think we are on day 9 of the series. And we already talked about how to build websites on Google Cloud, how would you set up that architecture, how to do CI/CD, how to set up data lake in Google Cloud, so just very common things that folks are looking to do. And I've always gotten these questions. But this seems like the perfect opportunity and time to just learn more from what everybody else is trying to do on Google Cloud, and then create some assets like this. 

And the last two weeks have been just preparing to get them out. And I'm excited that we are on day 9. And I've learned so much from the community and the engagement on these posts as to, you know, what can come next. So yeah, it's been a great learning experience. Thanks for everybody who's engaging there and giving us more ideas and their thoughts in terms of how they're using Google Cloud Platform. It's always exciting to hear that. 

MARK: I love it. And I mean, for people who are thinking about, how do you build a data lake on Google Cloud, obviously it should very help them kind of kick that off. But if you're just playing around with the cloud, then these different architectures can give you some inspiration for how might you build some x or y tool that's out there. So super, super great to see. 

And of course, like you said, if you have thoughts on it, tweet us. Let us know. Because it's always really, really cool to hear from people, not only because we like hearing from you all, but also because it's a great way for us to get feedback. And what do you think would be helpful? Do you have specific architecture questions that you think you'd like to cover in the same way? Tons of feedback always super appreciated. 

And of course we're also very happy that you listen to us on the "Google Cloud Podcast." So if you have any thoughts or comments, let us know. 

PRIYANKA: So yeah, if this sounds exciting to you, if you have more ideas, want to share something with us, then follow me on Twitter and look at all these "13 Days of GCP" content. My Twitter handle is @pvergadia. And we'll include that in the show notes as well. 

MARK: Absolutely. And of course thank you all again for listening to us. Hopefully we'll see you all next week. 

[MUSIC PLAYING] 

Do you want to say bye? No? Just silence? Just silence. All the listeners are like, bye, everybody, and Priyanka's just like, mm-hmm, mm-hmm, mm-hmm. 

PRIYANKA: [CHUCKLES] 

Bye. 

MARK: I'm glad you took all of that energy and summoned it up into one bye. No, I think it's perfect. That's exactly right. 

PRIYANKA: I wish the editors can take some of that laugh that I had, and just create something out of it. 

[MASHUP OF PRIYANKA CHUCKLING OVER DANCE MUSIC] 

Whoa, that was loud. 

[VOICE ECHOS]