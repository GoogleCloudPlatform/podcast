+++
audioDuration = "00:36:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.250.mp3"
audioSize = 36435875
categories = ["Laptop", "Chromebook", "Intel"]
date = "2021-03-10"
description = "Jenny Brown and Mark Mirchandani are back this week to celebrate a special anniversary!"
draft = false
episodeNumber = 250
hosts = ["Mark Mirchandani", "Jenny Brown"]
title = "Chromebook's 10th Birthday with Angela Gosz and Courtney Harrison from Intel"
image="/post/episode-250-chromebooks-10th-birthday-with-angela-gosz-and-courtney-harrison-from-intel/images/hero/hero-EP-250.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/m279vc/episode_250_chromebooks_10th_birthday_with_angela/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jenny Brown](https://twitter.com/jbrojbrojbro) and [Mark Mirchandani](https://twitter.com/markmirch) are back this week to celebrate a special anniversary! This year marks ten years since the launch of the first Chromebooks, and our guests, Angela Gosz and Courtney Harrison, are here to reflect on the past and talk about the future Chrome OS.  Chromebooks powered by Intel allow users to get the most out of their endpoints, serving as a secure and stable entrypoint to the Cloud.

Our guests describe the key groups of Chromebook users and how the security, ease of use, and portability of Chrome OS benefits each group. The Google Admin Console allows more than 500 customizable security features to tailor the experience for employees or end customers, Angela explains. The changes brought on by the pandemic meant more companies had to support a distributed business, and Chrome OS has been able to facilitate this transition easily. With zero-touch enrollment, Chromebooks can be sent directly to employees, bypassing IT. Chromebooks can be configured through the Google Admin Console without any physical contact.

Courtney tells us about her experiences with Chrome OS at Intel and how the automatic updates, computing speed, and other features have made her job easier. She explains the process of working with Google to develop Chromebook hardware and how the cloud comes into play for maximum performance. We talk about the many Chromebook options offered and what options will be available in the future.

##### Angela Gosz

Angela Gosz is a Customer Success Manager on the Chrome Enterprise Team, based out of Google Chicago. With 17 years of experience in the IT Industry, Angela has been on the leading edge of digital transformation implementations, supporting Enterprise organizations and partners to adopt and optimize their endpoint computing strategy - especially in Healthcare. Today she ensures customers realize the full potential of their investment in Chrome OS as a cloud-first endpoint. Outside of work, she has been meditating daily for 5 years, teaches yoga and is a certified Reiki practitioner. Angela holds a Bachelor’s Degree in Journalism from the University of Wisconsin-Madison.

##### Courtney Harrison

Courtney is an Account Director with Intel Corporation based in the San Francisco Bay area. Currently Courtney leads a team that supports all of the Intel business interactions with Alphabet and Google. A twenty-one year Intel veteran, Courtney has spent the past fifteen years in field sales working with top multi-national customers and local OEMs. Courtney began her career at Intel in CPU operations. Courtney has both a Bachelor’s and Master’s Degree from Stanford University in Industrial Engineering.

##### Cool things of the week

* A new podcast explores the unseen world of data centers [blog](https://blog.google/inside-google/infrastructure/where-the-internet-lives-new-podcast/)
* Back by popular demand: Google Cloud products in 4 words or less (2021 edition) [blog](https://cloud.google.com/blog/topics/developers-practitioners/back-popular-demand-google-cloud-products-4-words-or-less-2021-edition)
* Save the date for Google Cloud Next ‘21: October 12-14, 2021 [blog](https://cloud.google.com/blog/topics/google-cloud-next/announcing-google-cloud-next21)

##### Interview

* Intel [site](https://www.intel.com/content/www/us/en/homepage.html)
* Chromebook [site](https://www.google.com/chromebook/)
* Chrome OS [site](https://www.google.com/chromebook/chrome-os/)
* Chromebook turns 10 [site](https://www.google.com/chromebook/10th-birthday/)
* Building the future of business computing: 10 years of Chrome OS [blog](https://cloud.google.com/blog/products/chrome-enterprise/10thbirthday-chromeos-enterprise)
* Form Factor Portfolio [site](https://chromeenterprise.google/devices/)
* Deploy devices with zero-touch enrollment [site](https://support.google.com/a/answer/9508498?hl=en)
* Thunderbolt [site](https://www.intel.com/content/www/us/en/products/docs/io/thunderbolt/thunderbolt-technology-general.html)
* WiFi 6 [site](https://www.intel.com/content/www/us/en/products/wireless/wi-fi-6-series.html?wapkw=wifi%206)
* CloudReady [site](https://www.neverware.com/freedownload#intro-text)
* MCA [site](https://chromeenterprise.google/moderncomputing/)

##### What's something cool you're working on?

Mark is working on [Costs meet code with programmatic budget notifications](https://cloud.google.com/blog/topics/developers-practitioners/costs-meet-code-programmatic-budget-notifications).

##### Sound Effects Attribution

* "LeDancing" by Frankum of [Freesound.org](https://Freesound.org)
* "Jingle Romantic" by Jay_You of [Freesound.org](https://Freesound.org)
 
 {{< transcript "[MUSIC PLAYING] MARK: Angela and Courtney, thank you so much for joining us. To get things started, can you tell us a little bit more about what you do?" >}} 

COURTNEY: Sure, so Courtney Harrison. Thanks so much for having me. I'm at Intel, and I've been there for 21 years, the last 15 in sales, and currently I am the account director supporting team Alphabet internally, so the team of people that supports all of the Intel interactions with Alphabet and Google. Most of our time we spend with the Chrome teams, Waymo and your data center and Cloud teams. And just a fun personal fact, I was a synchronized swimmer in college, so I am anxiously awaiting the Olympics, hopefully, this summer in Tokyo. 

ANGELA: Oh, that's super exciting. Hi, everyone. I'm Angela Gosz. I'm a customer success manager on the Chrome Enterprise team. . Actually, as of this month, I've been in technology sales for the last 17 years-- thanks, Mark, for the jazz hands-- with Google for the last 3 and 1/2. 

In my role as a customer success manager, my charter is really to help our existing Chrome OS customers maximize their investment in the solution, and on a personal note, I do also teach yoga at Google to my fellow Yogalers. So Mark, if you ever want to do a bonus episode to lead a meditation for our GCP podcast listeners here, you know who to call. 

MARK: That's a good idea, yeah. I hadn't thought about-- I've been working on my Tree Pose lately, but I got a long way to go before I think I reach Angela's level. But today we're talking about something that's a little bit different from what we normally talk about because rather than talking about Cloud specifically, we're talking about Chromebooks and Chrome OS. 

So I think the first question that's worth asking is-- let's talk a little bit about what a Chromebook is and what Chrome OS is. But then second of all, what is the relationship between Chrome and the Cloud? 

ANGELA: Yeah, the way that I always like to describe it-- so you have GCP and the wonderful suite of products from Google Cloud, at lot of which you talk about here on the show every week. I'm a big fan and listener, so I'm really excited to be here with you today. So you've got GCP, which is kind of that overarching AIML, Cloud Storage, Compute, amazing, amazing, brilliant tools. 

Then you have productivity and collaboration tools through Google Workspace, Docs, Sheets, Calendar, Drive, et cetera. But then you need an endpoint to be able to enter and access all of your mission-critical, amazing data points. And that's really where Chrome OS comes in. 

MARK: And I think one of the big follow-up questions there is-- there's Chrome OS and there's a Chromebook. What's the distinction between those two? 

ANGELA: Great question. So actually, Chrome OS, believe it or not, just celebrated its 10th anniversary, so we're really excited about it. It's almost like we timed this podcast to be intended with that. 

COURTNEY: Funny how things work. 

MARK: Strange how that works out. 

ANGELA: And also a fun fact on Chrome OS, as of last month GeekWire reported that it slid into the world's second-most popular operating system, so really, really exciting news there. But essentially, Chrome OS-- it's a platform that serves up a browsing experience, in other words, is a Cloud-first endpoint. And it's really a gateway to all of the data points in the Cloud that you need to enter and access to be productive in your job and/or content to enjoy as an individual. 

JENNY: So what I'm hearing here is that Chrome OS is-- it's the operating system, Chrome OS. That one could've been a little bit obvious there. And then the Chromebook is how you access that operating system, how you then actually are able to have that experience as a user. 

ANGELA: Absolutely. And one of the big questions-- if you ever listened to Thomas Kurian speak, the president of Google Cloud, he always has like a three or a five-point response. And so my sort if three-point response to that question is, I would consider the audience. So the answer of what is Chrome OS based upon if you're an end user, an IT department, or an organization-- a Chromebook, as an end user, is a super fast, productive way to get work done as the IT department. It is a streamlined way to manage simply a distributed workforce, and as an organization, it is a way to get endpoints into the hands of your end users for a great total cost of ownership. And happy end users and a happy IT department equals a productive, successful company ultimately. 

JENNY: I love that breakdown. That's really, really helpful, and it's spot on. 

ANGELA: Thanks, Jenny. 

MARK: Yeah, I think we'll dive into more information on each of those and kind of what they mean to a company. But I also want to understand a little bit more about the relationship between Google and Intel. So Courtney, you said your team mainly works with Alphabet as a whole, right? 

COURTNEY: One of the biggest teams we do work with is the Chrome OS team because-- you kind of go back and just understand a little bit more about Intel. The purpose, and mission, and vision we would say for Intel is to deliver world-changing technologies that enrich the lives of every person on Earth. 

But we can't do that by ourselves. Intel is mainly a hardware supplier, and specifically we're usually a hardware ingredient supplier. So we actually have to go and work with partners like the Google team and the Chrome OS team to build these wonderful products on top of our hardware, our silicon to deliver that experience that Angela described to the end customer. So we look at the partnership with the Chrome OS team to really help deliver on that vision of providing a speedy, simple, secure, modern Cloud-based computing platform to one of those happy end users that she described. 

JENNY: So tell us a little bit more. We have the breakdown from IT to end user to a company-wide value here. How do people use Chromebooks? How do we want to sort of paint that picture? 

COURTNEY: Yeah, so at Intel we've actually done a bunch of market research to see how people use their Chromebooks, and how they value their Chromebooks, and what are the things that really attract people to buying a Chromebook out in the market. And so the first value propositions they say are they're simple. They're easy to use, and they provide great value for money. 

But if you actually dig into that and see the features and the things that people value, they actually show that people use their Chromebooks unplugged and outside the house or even just moving around inside of the house much more often than other types of PCs. And they also show that Chromebook users use a lot more video conferencing features, and so that's another area that just we've really focused with on the Chrome team to deliver the best user experience. 

ANGELA: And I would say from the Google side, we enjoy so much great technology today, and the thing about a lot of us as humans is that we have high expectations of how we want that technology to perform, right? 

JENNY: Oh, yeah. 

ANGELA: We expect that on-demand, instant, always-on access, and Chrome can really meet you where you're at, whether you are using a device for a personal-- whether it's like YouTube, or enjoying your favorite content, Netflix, et cetera, or if you want to be productive in your Docs and your collaboration tools. So that's, again, from the end user side. You have instant access to your information from whatever device you're logging in from. 

And then from an IT department perspective, one story I like to share-- a customer described to me one time that Chrome OS is like LEGOs because you can really control and curate that end user experience to be whatever you want it to be. The way that that works is that, through the Google Admin console, there are actually 500 different security policies that you can configure and really make that device perform in the way that you want the end user to experience it, whether it is an employee for your organization or an end customer that's like serving up in a public setting. 

And three ways that you can enroll a Chrome device are through kiosk mode, managed guest session, or logged-in user. And so that's where that kind of LEGO analogy comes in because one device can be many things to many different people. 

JENNY: That's awesome. 

MARK: Yeah, I want to dive more into the IT deployment and what that looks like, especially when you're rolling that out across a company. But I do think it's worth mentioning that, even if you've been living under a rock for this past year, the world has changed a little bit, and by a little bit, of course, I mean tremendously. And a lot of people are working remotely, and a lot of businesses are adapting. I'm sure Chromebooks have played, actually, a pretty big role in the way that some businesses were able to adapt. Can you talk a little bit more about that? 

ANGELA: We actually, on the Chrome team-- so again, speaking as a customer success manager, living through 2020 along with our customers, we had a lot of organizations that were new to Chrome, so had never used it before, and/or already had a small footprint of Chrome and literally over a weekend, in some cases not having tested the solution before, implemented Chrome OS for the first time to really support that distributed workforce. 

And so we were all in it together, and it was definitely something to live through. But now what we're hearing in the trends and things from our customers is a lot of those team members that went home, in some cases, are staying home. And so that's where, for the future planning, this need to continue streamlining and having a centralized management of a distributed workforce is going to be really important. 

JENNY: And how has this changed the more traditional IT side of things? You spoke to the Management Console. That seems to really pack quite a punch there and make things much easier, but tell us a bit more about that. 

ANGELA: I lived a former life before coming to Google, and in my previous role, I spent a lot of time with customers and health care. And managing and reducing cost, the cost of care and expenditures, was critically important, so when I came to the Chrome OS team in 2017, I thought that that was going to be just the number-one focus and this was going to be a way that we were able to serve customers through our total cost of ownership ability. 

And time and time again, what I found firsthand was that the number-one differentiator was actually the ability to streamline management through the actual Google Admin console itself and that centralized management, really allowing for a small and nimble team of technologists to manage, in some cases, thousands upon thousands of devices. So that was really eye-opening for me to go through that and to learn from customers firsthand. 

And kind of touching back on that, on the distributed workforce and serving customers in this remote world that we now live in, at the end of last year we rolled out this capability ZTE, Zero Touch Enrollment. So we're really excited that now we're able to drop-ship directly to end users, so zero touch from the IT department, enrolling a hardware device into management-- that's something that we now have the ability to do through select partners and select devices, which are available to view on our website. 

MARK: Yeah, that's awesome, the ability to kind of jump in and not have to do that, oh, IT's got to hold onto it and do a bunch of stuff before it's ready for the user. You can just give it to the user, and it's good to go. 

JENNY: Yeah, and especially, in some cases, where IT departments are working from home, too. So it used to be where there might be this large inventory area and perhaps like a workshop space where there would literally be hands-on-keyboard, Control-Alt-E, this Zero Touch Enrollment capability now removes that need. And so it's just a real time-saver. 

COURTNEY: Well, I was going to say, I can jump in and give you my experience just as a Chrome user, as an Enterprise user. One of the things I think you guys take for granted just because you're so used to using Chromebooks with all of the automatic updates, and security, and patches, and everything that just happen-- like you don't even have to think about them. And so to be able to turn on a Chromebook, literally just log into my Intel Enterprise account, and be able to use it you know after minutes of setup, seconds, honestly, was just a phenomenal experience. 

And then the other part-- the very first time I met with the Chrome OS team at Google, they kind of explained to me, and this really resonated. They said, a lot of times when you buy a new PC, a Windows PC, a Mac PC, and you turn it on, it's like, you're going to have your best performance experience that day. And it's kind of like downhill from there as things-- you add more software and things. And they said, whereas a Chromebook, every time you turn it on and you get that update, it could get better, and your experience over the lifetime of that Chromebook can continue to improve. 

And so it just-- it was like a mindblowing paradigm shift for me to kind of think about that and just the way you guys are able to constantly improve and manage the software in such a seamless way for the end user. 

ANGELA: I guess on behalf of the Chrome engineers I'll say thanks, Courtney. No, I'm just kidding. But in all seriousness, I would like to thank all of our customers because-- just another data point, Mark and Jenny-- when I joined the team in 2017, we had 250 security policies available in the Admin console. And today we ended 2020 with more than 500, and the reason for that really was out of customer request. We continue to improve because our customers are growing with us, so I just wanted to kind of shout out. 

JENNY: How nice it is to make products that people use, and enjoy, and can have feedback onto. That's so important, really changes the game. And so we've touched on this a little, but what does it look like to use one? 

ANGELA: In three bullet points, fast, secure, and easy to use. Using a Chromebook is so cool because it comes out of standby in seconds. It boots up in seven seconds or less, and my favorite thing about my Chromebook-- when I came to Google, there was never any downtime associated with that little pop up in the bottom right window. Your computer needs to restart, update to restart. All of the automatic updates happen in the background. They're served up for the end user, so it's a very seamless experience. 

And then there is great security features that the engineering team has built in, like sandboxing, Verified Boot, and the layers of hardware and software work together to provide proactive security so that, as an end user, that's part of what makes that experience so seamless and so fast to Courtney's point about how the experience improves over time. 

MARK: Yeah, and Courtney, you mentioned earlier that there's a lot of people now who are using just phenomenal amounts of video conferencing. And Angela, you just talked about how there's kind of this hardware and software aspect to the Chromebook and to Chrome OS. So when you bring those two together, you kind of have more power to do more things. And as we all know, video conferencing is pretty expensive process. What is the hardware-software story, and how has video conferencing played a major role in that? 

COURTNEY: Yeah, I thought this would be a good place to maybe share the specific example of how we can really get in with the Chrome OS team and do some hands-on optimization and engineering because we've spent a ton of time looking at video conferencing, and breaking it down into each little, specific atomic element, and then figuring out what's the best way from both a performance and a power standpoint because, again, if you're on video conferencing and your battery just dies after 20 minutes, no one's going to have a good experience. 

And so we can look at each little piece of the video conferencing process and say, if it's too power performance-hungry, maybe it needs to be done in the Cloud because, again, you guys have the great GCP Cloud power behind all the Chromebooks. Or maybe it's something we need to offload off the CPU if that device has a GPU, or an IPU, or another piece of silicon that could be able to maybe do that video image processing in a more performance-efficient way and then kind of put all of those little subatomic elements back together to actually give the best kind of Cloud-to-endpoint performance for the end user and people have the best video conferencing experience. 

So it's a really cool example where we've been able to use some of the technical things in the Intel portfolio but then all of the power of Google Cloud and the Chrome OS to deliver the best experience. And we know people are just spending, like you said, hours upon hours of time on video now, so it's a really important use case. 

ANGELA: I'm raising my hand right there with you, Courtney, and thank you for doing all that optimization work so that we can connect on video. One question we get a lot is, can I access applications that are not already in the Cloud or not web-enabled? And Chrome really got its start and foothold in education years ago, but again, as I mentioned, yesterday was the 10-year anniversary. And so as requests came in more and more over time-- like wow, this technology is so cool, but I wish that it did this-- Google always listened and then created strategic partnerships. 

Intel is one of them, also Citrix VMware, Parallels, Cameyo, and those are all organizations that can serve up a virtual instance or a VDI instance so that end users can get to their legacy apps on a Chrome OS device. 

MARK: Yeah, that's a fascinating part about the Chromebook story as well because we were talking earlier about how much time we spend in the Cloud. And although you can think of for traditional computer sign systems as either having a dev machine locally, now you can have a lot of that in the Cloud. And being able to have the Chromebook as an interface to the Cloud and using great stuff like Cloud Shell, you can pretty much do everything that you would typically do on a dev machine right on your Chromebook and just offload the actual work to the Cloud. 

ANGELA: I think that should be the promo bit for this podcast. That can just be right up front. 

COURTNEY: Yeah, but I also like-- Angela was kind of looking at what I think people don't understand about Chromebooks, that you can use one of these virtualization partners and software and run your legacy Enterprise apps, too. So it's kind of-- you've got the best of both worlds of your super-modern Cloud Developer experience, but if you still have something that's kind of a legacy application, you're able to run that as well. 

JENNY: As we've mentioned a couple of times now, it's the 10th anniversary coming up, and Chromebooks have so clearly evolved over that time, for models to feature components. So why don't we talk a little bit more about those different options, about the different options for Chromebooks that are currently on the market and where can they be bought, what does that all look like? 

ANGELA: Speaking of the partnership between Google and Intel, yeah, this is such a great part of the story. The device portfolio has expanded so much. So for anyone who is not already familiar, just covering the basics, Chrome OS devices are available and all of the regular form factors that you're used to, so notebook, desktop, all-in-one tablet. We call it the Chromebook, the Chromebox, a Chromebase. My own friends didn't know that, they told me recently. And I was like, I'm on the Chrome team, and you didn't know it's called the Chromebase? 

And so tablets from everyone's favorite, OEM partners, Acer, Asis, AOPEN, Dell, HP, Lenovo, Samsung. I hope I'm not missing anyone. And then that device portfolio is available from the normal reseller channel where people are used to getting all of their regular devices from. So it's actually a very mature product portfolio today with lots of different options from entry to mid to Enterprise-grade. 

COURTNEY: Yeah, and I'd say the same thing. Chromebooks used to be, like you said, very education-focused and really started with the Intel Atom and Celeron and the lower end of the processor stack, but now we see Chromebooks that span the whole Intel processor portfolio just because people are demanding more from those devices. And so as we see more performance-intensive workloads, we're seeing more Chromebooks use what we call our core processors, which are sort of the premium line of Intel processors. 

And so you'll hear us talk about Core on Chrome to get that best performance experience, and so the very latest and greatest of the Intel Core processors are our 11th Generation. And we can go through. There's lots of great performance stats, but you'll hear us really talk about multitasking productivity. That's more than doubled if you look for a Core on Chrome processor that's the 11th generation, and then you'll start to hear about new features that we're bringing in that platform, like Thunderbolt and Wi-Fi 6 that give you better connectivity and performance. And so those are just launching this year, and so you'll continue to see more and more Chromebooks come out on the 11th Gen Core processor as the year goes on. 

ANGELA: That's awesome, Courtney. 

JENNY: That's so cool. 

COURTNEY: It's the latest and greatest you can find in your Chromebook right now. 

MARK: Well, you kind of stole my next question because I was going to ask-- there's already been such a great evolution from where Chromebooks launched and where people kind of thought about where they were good, and now it turns out there's just so many places where Chromebooks really add value. What does the future look like? What new things can we kind of get excited about for Chromebooks and Chrome OS? 

ANGELA: Google just recently made an acquisition of a company called Neverware, and so now the product that Neverware made was called CloudReady. And so it's now a Google product, and it basically converts an existing PC or Mac device to Chrome OS. For any Intel hardware that you're not ready to retire yet, you can keep that device going, convert it to Chrome, and then manage it centrally through the console, and that also is a forward-looking statement, too, because there is a lot serving organizations into the future that that software will be able to help with. 

But the future in general, Mark-- I think it's looking very bright. I think we're just getting started 10 years in, and so in December of last year Google actually announced the launch of the MCA, the Modern Computing Alliance. And I did come prepared. I'm just going to read this quote because I don't want to get it wrong. I came prepared to the show today. 

In the blog announcement about it, our VP of Chrome OS, John Solomon, said, "The end user experience is defined not only by the innovation of the building blocks themselves but also increasingly by how systems work together," so kind of that one plus one equals three or more than that. 

So all of the following organizations jumped into the MCA, including Intel, so it was Box, Citrix Dell, Okta, RingCentral, Slack, Zoom, Imprivata, VMware, and of course, that's in tandem with Google Workspace. So with all of those organizations working together to make it easier for our customers to grow and expand in scale and to really collaborate and create solutions that don't only address today's complexities but anticipating what tomorrow's needs will be and what end users of the future are going to be asking for/demanding. 

COURTNEY: And this totally aligns. Intel was a founding member with you guys in the MCA because we really share the same vision, that you can build a better product if you have that integration of hardware, software, and the platform solutions that really are delivering to the needs of our commercial customer. And so we really like that open approach for both hardware and software, Cloud to PC, and we really want to bring Intel's breadth and experience across Compute, and AI, and connectivity, and some of these kind of foundational technologies to let all of those partners build on top and really deliver a better product through the MCA. 

JENNY: Yeah, it seems like there's a lot to celebrate there, and so speaking of that, what are we doing for the 10th birthday here? 

ANGELA: Yeah, well, I have my party hat right here. Everyone on the team got one. It's so cute. It came in this little box with confetti. But for everyone at home listening, check out our website. We're launching a ton of productivity features, so there's just so many available and both on the IT administration and the end user piece. So check that out. And I don't know, Courtney, are you doing anything for the 10th anniversary celebration? 

COURTNEY: I think we're just echoing all of your things through socials and everything, but I think John's actually maybe going to come talk to our internal teams, but do a celebration just for all of our engineers that work on Chrome. So happy birthday. 

ANGELA: Yay, happy birthday, Chrome OS. 

MARK: Yeah, it's super exciting to see, and of course, in the show notes we'll include a couple of links to a few of the announcements. But there's going to be a bunch of just general, hey, here's what's coming up. Here's what's updated, so definitely it's super cool to check out. We're almost just about out of time, unfortunately, so before we wrap things up, are there any final things that we missed that you all want to mention? 

ANGELA: Yeah, one piece of homework, I would say, for anyone who is interested in anything that we talked about today or is curious about exploring-- as of yesterday, we just launched the Chromebook Readiness Assessment online, so that would-- once you download it, it would give you a report of how Cloud-ready your end users are to moving to Chrome OS. So essentially, it's like an application status report of what people are accessing and if they could do their jobs entirely on a Chrome OS device today or what would be in the gap to get them there. 

JENNY: That's really helpful. 

ANGELA: Chromebook Readiness Assessment. 

COURTNEY: And then I would just say, keep your eyes out as you continue to see more of the Intel 11th Gen Core-based Chromebooks launching this year. I can't pronounce any secrets or undisclosed products, but you'll see lots more excitement coming to that space as the year goes on. 

MARK: All right, well, Angela and Courtney, thank you so much, definitely super exciting to learn more about what's upcoming in Chromebook, and it's always great to hear more about all the things that have changed in the past 10 years. And like we said, we'll include lots of links in the show notes for people who want to learn more about that. 

ANGELA: Thanks, Mark. Thanks, Jenny. Thanks, Courtney. 

COURTNEY: Thank you guys for having us. This was wonderful to be on your podcast. 

JENNY: Yeah, thanks, y'all.