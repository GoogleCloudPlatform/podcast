+++
audioDuration = "00:26:54"
audioFile = "Google.Cloud.Platform.Podcast.Episode.167.mp3"
audioSize = 39140137
categories = ["Pi"]
date = "2019-03-20"
description = "World Pi Day is behind us, but our guest today, Emma Iwao, joins hosts Gabi and Mark to teach us all about pi."
draft = false
episodeNumber = 167
hosts = ["Mark Mandel", "Gabriela Ferrara"]
title = "World Pi Day with Emma Haruka Iwao"
image="/post/episode-167-world-pi-day-with-emma-haruka-iwao/images/hero/hero-EP-167.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/117267610519909886476/posts/KqogW9Hv9UR"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/b3eno7/episode_167_world_pi_day_with_emma_haruka_iwao/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

World Pi Day is behind us, but our guest today, [Emma Iwao](https://twitter.com/Yuryu), joins hosts [Gabi](https://twitter.com/gabidavila) and [Mark](https://twitter.com/Neurotic) to teach us all about pi. Pi is the constant of the ratio of a circle's circumference to its diameter. Anytime you see a circle on a computer, pi has been used. It's vital for everything from gaming to calculating rocket trajectories!

Emma crushed the world record for calculating digits of pi using Google Cloud over four months! Listen in to hear more about how she did it!

<!--more-->

##### Emma Haruka Iwao

[Emma](https://twitter.com/Yuryu) is a developer advocate for Google Cloud Platform, focusing on application developers' experience and high performance computing. She has been a C++ developer for 15 years and worked on embedded systems and the Chromium Project. Emma is passionate about learning and explaining the most fundamental technologies such as operating systems, distributed systems, and internet protocols. Besides software engineering, she likes games, traveling, and eating delicious food.

##### Cool things of the week

* The Next OnAir site is live today and provides many of the details viewers could be looking for ahead of the event [site](http://g.co/cloudnext/onair)
* Get Google Cloud Certified at Next '19: What you need to know [blog](https://cloud.google.com/blog/topics/training-certifications/get-google-cloud-certified-at-next-19-what-you-need-to-know)
* Game Playing on Google Maps (see more at GDC) [blog](https://cloud.google.com/blog/products/maps-platform/announcing-new-styling-and-gameplay-features)
* Your mission, gumshoe: Catch Carmen San Diego in Google Earth [blog](https://www.blog.google/products/earth/your-mission-gumshoe-catch-carmen-sandiego-google-earth/)

##### Interview

* Y-cruncher [site](http://www.numberworld.org/y-cruncher/)
* Join the pi-31415926535897 Google Group [group](https://groups.google.com/forum/#!forum/pi-31415926535897)
* Fetching pi digits [site](https://pi.delivery/#apipi_get)
* Pi digit snapshots [site](https://cloud.google.com/storage/docs/locations#location-mr)

##### Question of the week
[How do I track what is happening to my containers? Who has access to them, changes, etc?](https://cloud.google.com/container-registry/docs/container-analysis-audit-logging)

##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com), [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [ECGC](http://ecgconf.com), and [IO](https://events.google.com/io/).

Gabi will be at [Cloud NEXT](https://cloud.withgoogle.com/next/sf), [PyTexas 2019](https://www.pytexas.org/2019/), and she will be conducting a [Cloud on Air Webinar](https://cloudonair.withgoogle.com) on Migrating to Cloud SQL

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 167 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague, the wonderful Gabi Ferrara. How are you doing today, Gabi?" >}} 

GABI: Good. I like the wonderful. How are you? 

MARK: I'm doing pretty well. Who do we have joining us today? 

GABI: We have, today, Emma Haruka Iwao. She will be talking a bit about the number pi. 

MARK: If you've seen any of the news recently, it's kind of gone everywhere, which is awesome. So Emma's going to talk about how she broke the world record for pi, which is pretty amazing. 

GABI: After we finish with Emma, I'm going to be asking Mark the question of the week. How do I track what is happening to my containers, who has access to them, changes, and so on and so on? 

MARK: But like always, why don't we start with our cool things of the week? 

GABI: Let's go. 

MARK: Yeah, I'm going to go first. 

GABI: OK, you can go first. 

MARK: So the first cool thing of the week, the website has gone live for Next On Air. So as probably many of you know, the flagship event for Google Cloud, Cloud Next, is coming up. But if you're unable to attend in San Francisco, there is a livestream that you can watch, Next On Air. 

It's actually pretty cool. Their website's live. We'll have it in the show notes. 

But it has multiple channels. There's a livestream, so you can see the exhibitions. You can see particular breakouts. There will be exclusive content, customized programming, all sorts of good stuff. 

Probably also worth noting is that if you're interested, you could also organize a Next Extended event. So if you want to bring your local community together and basically watch the livestream together and do awesome things, read the guide. You have a look at the becoming a host, and all the details therein. 

There already are a few setups. So you can also check out the map that shows you where Next Extended events are happening. So if you want to check those out or attend any of them, you can see which ones are local. So make sure to check out that. I think it's going to be really cool if you aren't going to be there in person here in San Francisco. 

GABI: But another cool thing is, if you are going to be there in San Francisco for Next, you can get Cloud-certified. And we are going to be making available six Cloud-certifying exams to be taken at Next, on site. So there is a link on the blog to see what you need to know to be able to do the exam. 

MARK: Fantastic. We're going to do a shout out to our friends over at Google Maps. They're pushing out a few new releases with the GDC. Well, GDC will be right now, actually. 

But they're adding some new features. So if you wanted to have gameplay data that was based on, say, Google Maps pathfinding and routing algorithms, you'll have access to that now. They also have interesting information about biome data. So basically, what kind of environment you're in, like a desert or a grassland or things like that. 

They're also exposing elevation information as well. So whether you can go up and down, the height of where you are, that kind of stuff. So if you want to learn more, we'll put a link in the show notes. But if you're going to be at Game Developers Conference, which is, literally, right now, make sure to come to the Google booth and check it out and talk to all the people there. 

GABI: Now, a trip to memory land and nostalgia from the '90s. 

MARK: Oh, I'm so excited. 

GABI: Yeah, I have a mission. Google Earth just released a game within the app, where you can try to catch Carmen Sandiego. And you go around the world to find the jewelry that was stolen by Carmen. 

[POLICE SIREN] 

So this is actually the first game. And it's going to be a series of games. So you just need to keep an eye for it. Literally, an eye for it. 

MARK: I'm so excited. I need to play this very badly. This is literally my childhood. 

GABI: You just said your age, you know? 

MARK: That's OK, I don't mind. Well, I'll tell you what. Why don't we go chat to Emma, and hear about all the amazing things she's doing with pi? 

GABI: Let's go. Let's go talk to Emma. I'm very impressed. 

MARK: Let's do it. So it is an exquisite pleasure to have Emma Haruka Iwao joining us today, fellow developer advocate. How are you doing, Emma? 

EMMA: I'm doing good. Thank you for having me today. 

MARK: Yeah, thanks for coming to join us in the podcast booth. We're going to talk about Pi Day today. But before we do that, why don't you tell us a little bit about who you are and what do you do here at Google? 

EMMA: Sure. I'm a developer advocate with Google Cloud Platform. So on the same team as Gabi and Mark. I was working in Tokyo until December, and I just moved to Seattle. So I'm one of you. 

GABI: Welcome. 

MARK: Welcome. 

EMMA: Thank you. My work is usually around computing products, like virtual machines, storage, network. These all subtle products and technologies, not like containers, machine learning, or something like everything you just think of when you hear the word "cloud." 

GABI: So Emma, what is pi? Tell us, what is pi, for the layman or laywoman in this podcast? 

EMMA: Sure. Pi is the constant of the ratio-- so I can read this-- a circle's circumference to its diameter. So usually, you'd use 3.141. And it goes on like this. You probably [INAUDIBLE]-- 

MARK: How many numbers of pi can you remember? 

EMMA: So I can do in Japanese better. [JAPANESE]. It's usually four. 

GABI: Yeah. 

MARK: OK. It's more than I can remember. I get 3.14, and that's it. Then I'm done. 

EMMA: Yeah, 3.14. That's a usual approximation, yes. 

MARK: Yeah, that's what our calculators are for. So what would I use pi for? What was this application? 

EMMA: It's everywhere, right? So whenever you see a circle on your computer, they use pi. And if you want to play a game-- and usually, you have some kind of UI-- part of those are circular, right? When you launch a rocket, they use pi to calculate their trajectory. It's everywhere. 

GABI: So Emma, how do you calculate pi? 

EMMA: Good question. I used y-cruncher. That's a program developed by Alexander Yee. So I just designed the cluster on Google Cloud, ran the program for four months. And here, I got the results. 

MARK: Did you just say-- 

GABI: You design a cluster? Yeah? 

EMMA: Yeah. Yes, the amount of data didn't fit on a single machine, so I had to use 25 machines. 

[DING] 

And it takes a little time. Like, four months. 

[REPEATED DINGING] 

GABI: Wow. 

MARK: Four months? 

EMMA: Yes. 

MARK: How many numbers of pi did you calculate for? 

EMMA: 31 trillion digits-- 

[REPEATED DINGING] 

--and a little bit. 

[DING] 

So it goes like, 3.141-- exactly like the sequence of pi. 

GABI: Oh, that's neat. 

EMMA: 31 trillion digits, and a little bit. 

MARK: So step us through this. So there's a particular algorithm that you use for calculating pi, and there was an existing program for that? 

EMMA: Yes, exactly. 

MARK: Cool. And then, you distributed that across multiple machines? Is that right? 

EMMA: Not technically. So the program doesn't work in a distributed manner. And pi is fundamentally difficult for parallel computing. It doesn't work well. And so here's a problem. On Google Cloud Platform, you can attach up to 64 terabytes of storage to a single virtual machine. 

MARK: Right. 

EMMA: And in order to calculate 31 trillion of the digits of pi, you would need more than 170 terabytes of disk. And to mount that amount of storage, I had to run 24 storage nodes, and attach them remotely over three networks. So I had to use 25 machines. 

GABI: So you used 24 machines. But how did you got from one digit to another? It's not made to work distributed. How did you get to link one thing to another? 

EMMA: Sure. So the computation, the main program, run only one of the machines. And the other machines were just storage. They are literally disks, NFS. 

So you just mount these disks on the main node. And you just store the data on other nodes. So the calculation, the algorithm itself, wasn't distributed at all. And we used iSCSI instead of the regular NFS protocol, because iSCSI is better for random access. And we needed lower latency, more bandwidth for a lot of random reason, right? 

MARK: So you made 31.4 trillion and a little bit, apparently. 

EMMA: And a little bit. 

MARK: And a little bit. 

EMMA: A little bit. 

MARK: Why that number? 

EMMA: The previous world record was around 22 trillion digits. And I wanted to make it significant. I could do 23 trillion digits, but it would be like, oh, you just did it to break the world record. 

And I wanted make it similar to pi a meaningful little bit by making the sequence exactly as the same as pi. Pi goes on, like 3.14. So the actual number of digits goes like, 3.1 dot, dot, 4 trillion digits. 

MARK: Is this all of pi? 

EMMA: No, pi continues infinitely. So you never get the entire digits. It's a irrational number. There's no end. 

GABI: So why did you do that, Emma? Why did you decide to break the world record? 

EMMA: Because it sounded cool. 

MARK: That's a good reason. 

EMMA: Yeah. I have a long story here. Basically, when I was a kid, like, 11 years old, I learned about pi and circle. In school, probably. And at that time, I had access to some videos. 

[DIAL-UP MODEM SCREECHING] 

Not the internet. Before the internet. And I was able to download a program to calculate pi. 

So I could do something on the computer that I learned at school. So it was cool. And I wanted to actually calculate more digits. So the program had a text about the current world record. And was, I think, billions of digits, or something. 

MARK: Oh, yeah. 

EMMA: And I wanted to calculate more digits, but I couldn't. I was terrible at math. I had no idea how these algorithms worked. So I had to wait. 

MARK: Until you got to Google. 

EMMA: Yeah, basically. And I didn't have enough computing resources, either. I had no access to supercomputers, because I was an ordinary kid. 

And I just started calculating 22 divided by 7. It's a good approximation of pi. But it took a while to realize it was not actually true value of pi. 

My math teacher told me the approximation. And I wrote a program. That's one of my first programs I wrote in C. And I was cheated. 

MARK: How much disk space did you end up actually using when you calculated pi to 3.4 plus a little bit? I'm just going to keep saying that, trillion digits. How much disk space did you actually end up using up? 

EMMA: So for the temporary work space, it used about 170 terabytes. And to store the digits, you'd need about 30 terabytes, because each digit is a byte. 

MARK: Oh, that makes sense. And is this data set available to use? Can other people play with it? 

EMMA: Yes, sure. So we have the digits available via HTTP. So you can actually download the digits entirely from Google Cloud. It takes a little bit of time-- like, weeks-- to download the digits. And if you just wanted to play with it, you can launch a virtual machine on Google Cloud and copy snapshots of the digits. I'll put a link somewhere. 

MARK: In the show notes, yeah. 

EMMA: So it's really easy. So we have snapshots of the disks' images. You just need to copy it. It takes, usually, 10 minutes to copy the digit. Like, 30 terabytes of data. 

And we'll make the digits as a disk for your virtual machines. And you just need to mount it from your virtual machine. If you're running Linux, you just need to run Mount command. If you are running Windows, you need to open the control panel and mount it. 

MARK: So you said that it took four months to calculate it all. How much did that actually cost? 

EMMA: That's a good question. I don't know precisely, because I use a Google Cloud project shared with other people. So I don't have access to the exact number. But I did some math, and it's around $200,000. 

MARK: That's fine. 

GABI: Yeah. 

MARK: It's fine. 

EMMA: It's fine. 

GABI: That's cheap. 

EMMA: It is not cheap! If you build a computer, buying parts from hardware stores and eBay and stuff, you could probably build a computer that can calculate 31 trillion digits of pi in four months for tens of thousand dollars. So if you build a computer, it will be much, much cheaper. 

GABI: Yeah, but it's a trade-off. 

MARK: Where would the fun in that be? 

GABI: It's a trade-off. It's on cloud, so you have redundancy. You have all that kind of stuff. So it's just not the storage, you know. 

EMMA: Exactly. So if you run these calculations on your computer-- physical computer-- you'd have to take care of disk failures, because hard drives break. 

[DRIVE FAILURE SOUND] 

Even necessities break. So you probably need to replace disks couple of times during your calculation. If your disk fails, you need to stop the calculation and replace disk, and restart the calculation from a checkpoint. You'll lose some time for that. And backups and restoring is much harder on physical hardware. 

Because if you're running the program on Cloud, you just need to take snapshots of your disks. So that's easy. You even don't have to stop your program. But with physical hardware, because hard drives are not designed for simultaneous I/Os, you need to stop the program, copy the data to other disks, and restart the program. So it's much harder on physical hardware. 

MARK: I was going to ask, did you actually have any failures during the four months? Or did it just keep running? 

EMMA: From hardware standpoint, we had no post failures or interruptions. But during the early experiments, when there's live migration-- because on Google Cloud, when there's something like maintenance or software upgrades on the host side, we live migrate virtual machines to another host. And live migrations usually takes tens of milliseconds if you're running. We have application on that. But for pi calculation, it takes as long as 15 minutes. 

MARK: Whoa. 

EMMA: So that migration works in this way. The program starts to copy memory regions and disk to a new host. And it usually doesn't impact your compute calculation. 

And then, when the program thinks that it copied most of the memory regions-- because you never catch up-- it stops the virtual machine, copy the rest of the memory regions, and restart the computing on the new node. But pi program works in a way that literally rewrites every memory on the virtual machine. So memory bandwidth is faster than network bandwidth in most environment. 

So the live migration program never catches up with memory copies. So it needs to stop a little bit longer. Usually, a minute. And then, it restart the calculation. 

But it still needs to copy the rest of memory from the older machine to the new machine. So that slows down the calculation for 15 minutes, because we used iSCSI to mount remote disks. There is a timeout value for iSCSI and the default value is around 10 seconds to 15 second. That's usually enough on any network switch, but we had to increase the value to 15 minutes. 

MARK: Got it. But once you increased the value, it was fine. 

EMMA: And there were small softwares. Large-scale computing is hard. 

MARK: Yeah. I was going to say, stuff breaks. 

EMMA: Stuff breaks. And usually, memory disks are protected by checksums or ECCs or some kind of error detection and correction mechanisms. But we read and wrote around 10 petabytes of data over the four months. And there were two occasions that the data was corrupt silently. And y-cruncher, the program, detected the corruption. 

MARK: Oh, no. 

GABI: Well, good that that program detected it. 

EMMA: Yeah. 

MARK: So in that case, can the y-cruncher pick up where it left off? Or do you have to start all-- 

EMMA: Yup. 

MARK: Oh, that's good. 

EMMA: Yeah. 

GABI: I have a curiosity. It does a double write, or one to save the disk and one to a saving point? Or how does it work? Like, it has saving points every 100 digits, or something like that? 

EMMA: Sure. So y-cruncher saves checkpoints. So checkpoints are internal structure of its work memory. 

So it flushes its internal structure to the disk occasionally. Maybe twice a day or once a week, depending on the progress of calculation. And pi is calculated in a way that you need to store, actually, all the digits you're working on at any point of the calculation. It doesn't work like, you calculate the first 400 digits, and then store data and continue the next 100 digits, or something like that. You need to decide how many digits are you going to calculate before you begin and move on. 

MARK: You mentioned how much disk space you were using. How much memory was in there? 

EMMA: So I used one of the biggest virtual machines, with 1.4 terabytes of memory. 

MARK: How much of that did you actually end up using? Like, a lot of it? 

EMMA: I don't know. Like, 99% of-- 

MARK: Wow. 

EMMA: I just left 20 gigabytes or something for extra, just in case. 

GABI: And how many cores? 

EMMA: 96 cores, vCPUs. It's on a Xeon Skylake processor. So there were a couple of virtual machines I could choose from. One is the n1-megamem-94. That's the machine I used, with Skylake processor, 96 cores, 1.4 terahertz memory. The other choice was n1-ultramem-160, with 4 terabytes memory, and 160 cores. 

GABI: Wow. 

EMMA: But it uses Broadwell processor of Intel. And it doesn't support AVX-512, which would significantly speed up the calculation. And y-cruncher doesn't work very well with NUMA. 

So the NUMA is an architecture where you have multiple processors' memories attached to each of the processors. So they have no uniform access, like latency and bandwidth, to each region of the memory. So the more cores you have, the more complex and slower the memory access will be. 

So actually, adding more cores might have slowed down the calculation. So I decided to go with the two socket system with AVX-512 support. AVX-512 is an accelerated instructions by Intel. So it processes 512 bits of data in one clock. So it's much faster than regular floating point operations. 

GABI: I never thought actually changing the number of cores would actually make the access to memory slower. That's a cool, interesting test case to show up how that can influence proportionally inversed situation. That's totally cool. 

EMMA: Yeah, totally. It's counter-intuitive, isn't it? So for large-scale computing or mathematical simulations, memory bandwidth is one of the important factors to determine hardware and algorithms. 

And recent computers are really constrained by memory bandwidth. So you can't actually feed a CPU with enough data that you need. So CPUs are much, much faster. Usually, more than 10 times faster than the main memory. And storage is much slower than memory. So in order to keep CPUs busy, you need to design memory architecture and memory access patterns carefully. 

MARK: That's really interesting. What was, probably, the most surprising realization you had when you were building this stuff? 

EMMA: It was much harder than I thought. So in the first place, before actually doing the project, I thought it would be not easy, but not too hard. Because you have cloud, everything is redundant and protected by different layers of software. So usually, you don't have to worry about single disk failures or anything like that. 

So I thought I wouldn't have to stop the calculation, or I wouldn't have to worry about disk failures, anything like that. But there was live migrations, and it did affect calculations. And mounting 64 terabytes of storage require some kind of design and trial and errors. 

And y-cruncher has some tunable parameters. So you can control the disk I/O size, block size of disk I/Os. For hard drives, you don't want to write data by a small chunk, like 4 kilobytes or something. You usually want to write in blocks of megabytes. But with SSD, I used SSD for the project. SSD is much better with random access and smaller access. So I had to run some benchmark to determine the best block size for disk access. 

GABI: Thank you. So I remember when I had school, and I had to calculate the exponential. And that was hard, because I could only do it for so long because of the memory allocation, that kind of stuff. So doing math in a regular computer is really hard, because you don't have enough resources to do so. What the common person should look for if they want to try to do more advanced math, like you did? 

EMMA: Sure. So there is a website. It's called WolframAlpha. That's a free web service. There is a pro subscription. You probably want to pay for it. 

But with WolframAlpha, you only need to enter any algorithm or equation formulas, and WolframAlpha will solve that equation for you. So you can render graphs and plot charts, axes, solve equations on WolframAlpha. It's really convenient. 

I usually use it to start with any new equations or mathematical problem. So usually, when you use a calculator or computer, you only get approximations. If you put 1/3, 1 divided by 3, you never get the true value of 1 divided by 3. But with WolframAlpha, it treats the rational number as it is, so you usually get the true value of a formula. So that's really convenient. 

If you want to play more with math, y-cruncher has a feature called Custom Constants. So you actually enter the formula you want to calculate, and y-cruncher handle the rest. So you can calculate, for example, 1 divided by square root of something, something like that, with y-cruncher. 

And somewhere in between, we have Colibri, which is a hosted version of Jupyter Notebook. Jupyter Notebook is a Python program that you can interactively run Python or any other programs. So there are a couple of services where you can use Jupyter Notebook. Kaggle is one of them. Colibri is one of them. 

So you just need to log in. And you can try different math problems or machine learning problems and do that. So it's really easy. Yeah, I use it all the time. 

MARK: Before we finish up, Emma, is there anything you want to make sure you get on the podcast, or anything cool that you're up to in the near future that you want people to come say hi to you at? 

EMMA: So we are planning a talk on this project at Next 19, in San Francisco. That's in April. I don't think we have free tickets. 

MARK: I don't think we have free tickets, no. 

EMMA: I don't think we have free tickets. But if you happen to be at Next 19, please come to our talk. We'll invite Alexander Yee, the actual developer of y-cruncher. 

MARK: Oh, cool. 

EMMA: Yeah, at Next. So it's going to be exciting. His program was used to calculate, break the world record five times before our record. So it's really a popular program. 

GABI: Mark, I'm probably going to leave you at the booth and go straight to Emma's talk. 

MARK: That seems fair. That's reasonable. I don't blame you. That seems totally fair. Well, Emma, thank you so much for joining us today on the podcast, and talking to us all about pi and math and doing really crazy stuff on the Cloud. 

GABI: Thank you, Emma. 

EMMA: Thank you so much for having me. 

GABI: So thank you, Emma, for coming and talking to us. And now we're going to ask Mark the question of the week again. So how do I track what is happening to my containers and who has access to them, changes, et cetera? 

MARK: Yeah, that's a really good question. If people aren't aware, on Google Cloud, there is a thing called Cloud Audit Logging. Cloud Audit Logging is essentially set up to answer that question of, who did what, where, and when? And that's the thing. 

And part of Cloud Audit Logging is being able to do audit logging on your containers as well. So by default, container analysis audit logging is set up for admin activity. So basically, anything in admin that would do to any of your containers. 

But for example, container analysis writes and things like that-- and reads-- are not necessarily set up by default. But you can set those up. So if you go into your Cloud console and you go into configuring data access logs, you're able to configure exactly what it is that you want to track with your audit logs regarding to your containers, maybe other audit logs as well. So you can see exactly what's going on inside your system If you to track certain security things, or maybe just see what's actually happening, or maybe even debug a problem. So super, super handy things, so that if you ever need to see who does what, where, and when to your containers, you are able to do so. 

GABI: So George Orwell? 

MARK: Excellent. Before we finish up, Gabi, what are you up to? What are you doing? 

GABI: I'm doing a lot of stuff. I am going to be on Cloud Next 2019. That's going to be awesome. 

MARK: Nice. 

GABI: I'll be doing Pi Texas right after that, on the weekend after Cloud Next. And before all of that, I'm doing a webinar on migrating to Cloud SQL on the Google website. The link is on the blog. 

MARK: Nice. Awesome. So when this comes out, it'll be Wednesday, at Game Developers Conference. 

So at which point, actually, the Google booth will be open. I will probably be floating through there a lot. I will be presenting at the conference on Wednesday. I'll be doing a booth talk, talking about open source and game development, I want to say, Thursday afternoon. Check the booth for details. 

I'll be floating around, doing all sorts of-- Game Developers Conference is huge. I'll also be at Cloud Next, as Gabi will be as well, doing podcasty stuff and giving a talk on Agones and all the other good things. I'll be at East Coast Game Conference in Raleigh, North Carolina shortly thereafter, talking about Agones and again, open source. 

GABI: That's awesome. 

MARK: And then, finally, I'm also going to be at I/O, doing some fun stuff as well, too. So if you're going to be at I/O, make sure to come and say hello. 

GABI: Not even I go to I/O. I'm jealous. 

MARK: Yeah. I haven't been to I/O in a while, actually. I'm pretty excited. 

GABI: Thank you. 

MARK: Awesome. Well, yeah, Gabi, thank you so much for joining me on the podcast this week. 

GABI: Thank you, Mark. Have a nice week. 

MARK: Yeah, and thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]