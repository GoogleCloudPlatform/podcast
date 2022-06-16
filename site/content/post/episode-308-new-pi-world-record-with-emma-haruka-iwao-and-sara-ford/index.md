+++
audioDuration = "00:39:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.308.mp3"
audioSize = 56200194
categories = ["Mathematics", "Pi",]
date = "2022-06-15"
description = "Carter Morgan and Brian Dorsey are working on their math skills today with guests Emma Haruka Iwao and Sara Ford."
draft = false
episodeNumber = 308
hosts = ["Carter Morgan", "Brian Dorsey"]
title = "New Pi World Record with Emma Haruka Iwao and Sara Ford"
image="/post/episode-308-new-pi-world-record-with-emma-haruka-iwao-and-sara-ford/images/hero/hero-EP-308.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/vcz421/episode_308_new_pi_world_record_with_emma_haruka/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Carter Morgan](https://twitter.com/carterthecomic) and [Brian Dorsey](https://twitter.com/briandorsey) are working on their math skills today with guests [Emma Haruka Iwao](https://twitter.com/Yuryu) and Sara Ford. What kind of computing power does it take to break the world record for pi computations? Emma and Sara are here to tell us.

Emma tells us how she started with pi and how she and Sara came to work together to break the record. In 2019, Emma was on the show with her previous world record, and with the advancements in technology and Google products since, she knew she could do even more this year. Her 100 trillion digit goal wasn't enough to scare people away, and Sara, along with other partners, joined Emma on the pi computation journey. Together, Sara and Emma talk about the hardware required, building the algorithm, how it's run, and where the data is stored. Running on a personal computer was cheaper and easier than a super computer, and Emma explains why.  Performing these immense calculations can also help illustrate just how far computers have come.

The storage required for this project was immense, and Emma tells us how they worked around some of the storage limitations. We hear more about Ycruncher and how it was used to help with calculations. Our guests talk about how things might change for computing and specifically for pi computations in the next few years, and Sara tells us about the storage journey from the perspective of a mathematician, and gives us some interesting facts about the algorithms involved, and we learn how world records are verified.
 
##### Emma Haruka Iwao

[Emma](https://twitter.com/Yuryu) is a developer advocate for Google Cloud Platform, focusing on application developers’ experience and high performance computing. She has been a C++ developer for 15 years and worked on embedded systems and the Chromium Project. Emma is passionate about learning and explaining the most fundamental technologies such as operating systems, distributed systems, and internet protocols. Besides software engineering, she likes games, traveling, and eating delicious food.

##### Sara Ford

Sara Ford is a Developer Advocate on Google Cloud focusing on Serverless. She received a Masters degree in Human Factors (UX) because she wants to make dev tools more usable. Her lifelong dream is to be a 97-year old weightlifter so she can be featured on the local news. 

##### Cool things of the week

* New Cloud Podcasts Website [site](https://cloud.google.com/podcasts)
* Even more pi in the sky: Calculating 100 trillion digits of pi on Google Cloud [blog](https://cloud.google.com/blog/products/compute/calculating-100-trillion-digits-of-pi-on-google-cloud)
 
##### Interview

* GCP Podcast Episode 167: World Pi Day with Emma Haruka Iwao [podcast](https://www.gcppodcast.com/post/episode-167-world-pi-day-with-emma-haruka-iwao/)
* pi.delivery 100 Trillion Digits [site](https://pi.delivery)
* pi.delivery Github [site](https://github.com/GoogleCloudPlatform/pi-delivery/tree/main/pi-100t)
* A History of Pi [book](https://www.amazon.com/History-Pi-Petr-Beckmann/dp/0312381859)
* Distributing historically linear calculations of Pi with serverless [video](https://www.youtube.com/watch?v=cWTScWr52I0)
* Ycruncher [site](http://www.numberworld.org/y-cruncher/)
* Compute Engine [site](https://cloud.google.com/compute)
* Cloud Functions [site](https://cloud.google.com/functions)
* SRE [site](https://cloud.google.com/sre)
* Terraform [site](https://www.terraform.io)

##### What's something cool you're working on?

Carter and Brian are working on a new season of [VM End to End](https://www.youtube.com/playlist?list=PLIivdWyY5sqIteZONy-rTwyf3w3OddFQ1)

{{< transcript "CARTER: Hello, world, and welcome to episode number 308 of the weekly Google Cloud Platform Podcast. I'm Carter Morgan, and I'm here with my colleague and friend Brian Dorsey. Hey, Brian." >}}

BRIAN: Awesome. Glad to be here. I love the hello, world intro. It's like, I don't know. It feels so core tech-- 

CARTER: Yeah. 

BRIAN: --concept to me. Let's keep it. 

CARTER: All right. If I'm here and if I remember, I'll try and do it. 

BRIAN: Sweet. 

CARTER: Ooh, did you love anything else about anything that you might have heard? 

BRIAN: I did hear something different. There was kind of a different vibe to the getting going in the podcast this time. 

CARTER: Yes, we got a brand new jingle. It's exciting. It's energetic, kind of like this podcast I hope. I'm really excited about that. 

BRIAN: Well, I'll try to live up to my end on that, keep the vibe going. 

CARTER: All right. Well, that was one cool thing, this new jingle. I'm sure there's other cool things. Why don't we talk about those? 

BRIAN: Yeah, well this is quite local and specific to the podcast, but the podcast has a new home at cloud.google.com/podcasts. 

CARTER: Yes, it's a new hub that I probably should have remembered to mention, so thank you so much, where you can find all of Google Cloud's podcast efforts in one place and see all the content you know and love, a bunch of different series beyond ours, including a Kubernetes Podcast. Definitely check that out. It's pretty cool. 

BRIAN: Sweet. What else is going on? 

CARTER: Well, I saw a blog that inspired this episode I think you know where I'm going next with this. 

BRIAN: I do. 

CARTER: There's recently just a blog post that came out called Calculating 100 Trillion Digits of Pi on Google Cloud. 

BRIAN: That number is so big. I cannot hold that in my head. 

CARTER: Exactly. I know it's a lot, but why don't we get in with our guests? We have today our developer advocate colleagues Emma [INAUDIBLE] and Sara Ford. Let's get in and talk to them about what went into calculating these digits and what it means going forward. Sound good? 

BRIAN: Let's do it. 

CARTER: So for everyone listening at home for the podcast, Emma and Sara, could you introduce yourselves? What do you do? What do you work on at Google? 

EMMA: Sure. Hi. My name is Emma [INAUDIBLE]. I'm a developer advocate for computer [? engine. ?] So everything about computers like virtual machine, storage network, disks, are all my focus areas. 

SARA: Hi. I'm Sara Ford. I'm a cloud developer advocate, and I focus on serverless. 

CARTER: Amazing. So really quick, you all work on very interesting concepts. And so what is the day to day life like for you when you're actually working and development. 

EMMA: I don't repeat like a typical day. So sometimes, I have a lot of meetings. But I usually wake up like 8:00, 9:00 in the morning. I'm really late and start working, sometimes take early mornings from home. 

And these days, I can come in office and work there, process emails, write some sample calls, and develop some demos. In the afternoon, I usually have the same. And I usually keep working until like 7:00 or 8:00 PM. So my work schedule is a little bit shift towards data. 

SARA: For me, I focused mostly on cloud functions. So I'm writing code to test code most of the time because I like to give the product teams early feedback as soon as possible. But I also like to put together demos, how do I videos, things like that. 

So for me, my typical day is meeting driven. So I've always been thinking, like, how many more hours to my next meeting? And then I look for those blocks, like two to three hour time blocks, to carve out time to block it out to say, OK, this is what I'm going to be heads down writing code because I just can't be-- even if I have a 15 minute meeting in the middle of it, I can't work under those conditions. 

I have to, if I'm writing code or I'm in the flow of doing kind of like a UX review, I need uninterrupted time. So it's kind of how I structure my day. And something a little bit niche about me is I have a master's degree in user experience even though my undergrad is in software engineering computer programming and math. I wanted to make DevTools usable. 

BRIAN: I think we can all appreciate DevTools getting more usable. So thank you for that. The main topic today is, I think, going to be around this recent pi announcement-- pi the number, not the food. So I'm curious if you could give us a little quick overview of what that is, and then how did you end up working on that together? 

EMMA: Sure. I did pi calculations before in 2019. I did 31.4 trillion digits and broke the world record back then. And looking at some of the improvements to our products, like Google [? Glass ?] products, I thought, hey, this might be a good time to try it again, and we can go bigger. 

And I asked around, saying in the team chat, like, hey, is anyone interested in working on this together? And I said, maybe we can go 100 trillion digits. And Sarah and a few others-- Ben, [INAUDIBLE]-- said they were interested. And we started working together. 

CARTER: I have a question here. How many digits did you get to this time? 

EMMA: 100 trillion. 

CARTER: Wow. So I'm pretty new to this and what goes into calculating pi and all of that. I know Sara, you're pretty focused on the beginner experience and the usability experience sometimes. What are some of the things that people think about here? What are some of the questions that you had when you were wrapping up on this? 

SARA: The reason why I wanted to join the project and was so excited when Emma had reached out if anyone was curious about joining was when I watched her 2019 video where she talked about the result previously, I had a bunch of questions. I was so curious about the algorithm that was being used, the complexity of that algorithm. Did she write it? 

How was this number stored? What does this number look like on disk? Just a ton of questions. And I have a math degree, but I haven't touched math in-- like, I haven't differentiated or integrated anything in like 20 years. 

I could probably still do e to the x. It's a math joke. I had to throw that in there. 

But-- thank you. I'm here all week. But yeah, I just had just a ton of questions of how this all worked. 

And also, I'm extremely visual. You should see me trying to learn guitar. It's like, if it is not written down, it does not exist in my mind. I have to see things. So that's why Emma got a ton of questions for me about how do I visualize what is happening here. 

CARTER: It's interesting because I definitely would like to know more about that. So maybe we'll get into that in a second because it looked like Brian was ready with question. 

BRIAN: Sweet. So I think one of those beginner questions might be a good lead in to this next thing. Who wrote this algorithm? Like, where is it run, and maybe you could answer that. 

And then Emma, why is this interesting to run in a Cloud? It's kind of two part, I guess. What is it, where does it run, and then why interesting in Cloud? 

EMMA: Right. What is [INAUDIBLE] run? So we need a big computer. 

Historically, we used supercomputers like the one you have in university and research institutes until 2009. And since 2009, people started using personal computers like the one you run games or applications in your home. 

BRIAN: You don't usually hear about things moving from supercomputers to personal computers. 

EMMA: Right. 

BRIAN: How does that work? The bottleneck isn't the computer? 

EMMA: So the way you run the calculation is completely different on these two different platforms. 

BRIAN: OK. 

EMMA: On supercomputers, you run massively parallel. So you use thousands of CPUs and run it very, very quickly and run everything in memory. And on desktop computers, you use disks instead of memory. 

Disks are slower but cheaper. So you need to run longer, like several months. But you can still get the job done as long as if you have the same amount of memory and storage. It might take longer, shorter, but you can still do it. 

BRIAN: And the personal computers, you can actually get more disk than memory even compared to supercomputer? Is that accurate? 

EMMA: I think there are a lot of reasons. There aren't a lot many people who can calculate pi and use supercomputers for these purposes. And there are only a few people working on, like, pi calculations before 2009. 

They stopped doing this. This is probably one of the biggest reasons. They probably won't do, but there are reasons why this gets more difficult on supercomputers. 

One, they are more optimized towards deep learning, machine learning, and workloads and more distributed style workloads instead of this kind of tightly coupled. This involves fast Fourier transform, which requires a lot of communication between nodes. And running these kind of workloads is getting increasingly difficult on supercomputers because today, they have millions of CPU cores. And coordinating millions of CPU cores, enormous challenge. 

So yes, I think we still have enough memory. Supercomputers have petabytes of memory. So we can still put everything in memory. I think technically, we can use supercomputers. But they are more expensive, more difficult to use. on the other hand, storage, SSDs, hard drives prices went down over the past decade. 

And I think we are in a really weird position where you can add a bunch of storage to your personal computers. Like, servers are essentially personal computers. They are the same architecture. You only have single node, and you have storage. 

Supercomputers, you have thousands, sometimes tens of thousands, of computers connected to each other. So they are entirely different. But we are in a position where you can do this easier, somewhat easier, with personal computer rather than a supercomputer. 

Another thing is we have a program you can download from the internet called y-cruncher. So you can just go to the website and download the program. If you have a Windows machine or Linux machine, you can download it, run it, and calculate billions of trillions of digital pi if you have enough memory or storage. 

So that software appeared around 2009 and 2010. So people started using it. And without this software, I think doing this on cloud would have been much, much more difficult. 

CARTER: This now makes me wonder about Brian's second part of that question. So Sara, when it came to visualizing this and understanding these algorithms, even how this data is represented on disk now, what did you come up with? What did you find? 

SARA: Well, the first thing that I noticed when I was looking at historically the calculations of pi was I wanted to put together a historical timeline. If you look in the past, like, you would get maybe one or two digits of accuracy every maybe 50 or 100 years. And I'm really generalizing across the millennia. But since like 1950s, there was this point of inflection when you have now a pocket calculator or, like, some sort of way to use a computer to calculate the digits of pi. 

And the graph, it's almost like a straight line. And then it just starts to skyrocket. And especially in the past 10 years, it's just like exponential growth now, especially with y-cruncher. And I'll defer to [INAUDIBLE] about the specific algorithms being used for y-cruncher. 

But yeah, because of y-cruncher now, it's just like straight north in the graph. And the thing that I found most fascinating is when you look back at this is every time there was a new discovery in mathematics, like differential equations, the infinite series, things like that, people calculating pi, the mathematicians would get more and more accurate digits of pi. The accuracy improved. There was these new discoveries. 

But what I find fascinating is now that we have 100 trillion digits of pi, what does this imply? And I'm just curious is are we going to see, like, new mathematics? New math? 

New interpretations of things now that we have all these digits? Could it be now this inverse thing that people are going to discover new patterns, new trends, whatever it might be? 

I'm visual. I like to see these things. And then once I start to see it, then I can ask these questions. So that was part of my interest as well. 

BRIAN: That's awesome. The outcome maybe generates more research. That would be amazing. 

SARA: Exactly. 

BRIAN: Thanks for that explanation on how this scales. And then this seems like it would be really hard to do in Cloud, and then you did what was a world record in 2019 and then now an even bigger one. Could you talk about why this is hard to do in cloud and how things changed between the first attempt and now? 

EMMA: Sure. So the biggest challenge is having enough storage. And for 31 trillion digits, I think the amount of storage we needed was 160 terabytes, I think. 

We need to double check the number but hundreds of terabytes. And for 100 trillion digits, we need 550 terabytes of storage. It's a lot of disks. And on Cloud, you have limits how many disks you can attach to a single virtual machine. 

Back in 2019, it was 64 terabytes. And today, it's 257 terabytes per virtual machine. So if you have one virtual machine, you cannot possibly mount hundreds of terabytes of disks by just using cloud features. So we need to work around this limitation. 

I did some research and figured out a network storage protocol called [INAUDIBLE] was good for this specific purpose. So I spin up a bunch of storage servers using Linux-- these are also regular virtual machines-- and mounted these disks using the protocol. So everything you write and read to those disks is through the network. 

So the network performance was the bottleneck. And in 2019, we had 16 gigabits per second for egress bandwidth. And that was quite fast, but that was the limit primarily. 

And today, we have 100 gigabits per second. So it's six-fold. It's much, much faster. That means we can move more data. 

We moved about 90 petabytes, 19,000 terabytes, in 2019. And this time, we moved 82 petabytes. So that increase is the difference between 31 trillion and 100 trillion. 

CARTER: It's so interesting listening to this because to get three times the amount of digits, it was something like four or five times the amount of space, six or seven times the amount of egress, you said. So it seems like there's an exponential growth to how much data and storage you need to get more digits as you go on. Visually, does that seem to make sense, Sara? 

SARA: So you're asking the more the numbers that you compute that the more space you need? 

CARTER: Yeah, I'm asking, like, it seems like as these numbers grow-- like, from 30,000-- sorry, 30-- I don't even know how to reason about numbers this big is what I'm [INAUDIBLE]. 

SARA: 30 trillion to 100 trillion. 

CARTER: Yeah. 

SARA: Yeah. 

CARTER: And so I'm just curious. Like, are there any patterns with that and like [INAUDIBLE] anything you saw there? Like, how do you visualize data this big? 

SARA: One of the things that was interesting about y-cruncher tool and one of the things I also wanted to share-- like, one of the beginner questions I had-- was, what does y-cruncher do to be able to visualize it? So it not only calculate-- you'd say, I want to know this many pictures of pi using this. I believe you can specify the formula as well. Emma, correct me on that one. 

EMMA: Yes. 

SARA: OK, yeah. And then it would produce it. But it also generates storage, temporary storage. And that was one of the things that we put together-- architectural diagram of just how much temporary storage was needed as y-cruncher was calculating this result. 

So it was something else also to keep in mind and think about not just the storage of the digit. Like, when I was doing my own little mini-calculations, you had to start thinking about, am I saving this, like, in plaintext? Am I saying this as a binary object? It was just really fascinating some of the nuances that went into this but also the temporary storage. Oh yeah, you would need this algorithm, or this-- the y-cruncher tool will [INAUDIBLE] a place for as it's calculating. 

EMMA: So the first thing we did was, OK, download y-cruncher and run it on a workstation or virtual machine. We need to know how to do this. Everybody needs to be familiar with the tool before we get started on the world record breaking calculation. 

BRIAN: This is amazing and a lot. You are pushing the boundaries of kind of what you can do on computers in general and in cloud on this really network chatty problem. But I don't think most people are trying to calculate digits of pi. Like, for somebody listening, like, why is this interesting to know that it's possible, or why should people care? 

EMMA: I think this is a very good measure to show how fast our computers have become over time. So there are lots of benchmarks, like specific to CPUs, network, storage, and everything. But when you look back and comparing these numbers with computers in the 1970s, 1980s, and 2020s, then there are many can compare across decades, and pi is one of them. 

You might have different algorithms. You might have different architecture, software, methodologies. But you can still get a kind of rough order of magnitude for the improvements of computers. So that's why I really like calculating pi. 

SARA: And there's also, in that textbook-- I'm completely blinking on the name, but it's by Donald Kunth. K-U-N-T-H. 

EMMA: Donald Kunth. 

SARA: Yeah. They say calculating pi is one of the ways of benchmarking human progress in computers. Highly paraphrasing here. It's a nice benchmark. 

EMMA: One of the professors in my lab back in the university said calculating pi is a measure to human progress in civilization. So there are a lot of different takes, but I really think this is fascinating because you can use the same number, same mathematical constant, and compare that over time. If you look back centuries, then you still have the number of decimals they calculated using cans or manual calculators. And today, we use electronic computers. 

Also, for computers specifically, this is general benchmark for everything. So you need to combine everything-- CPU, memory, storage, sometimes network if you decide to use a network attached storage, and reliability because you need to run a program for such a long time. and process a lot of data. So it checks everything-- every component, every aspect of the system. 

So I think calculating more digits, it's a good proxy to the overall capabilities of computers. So we didn't calculate 100 trillion digits in 2019, and today, we do 100 trillion digits. And somebody-- Timothy [? Malcolm ?] calculated 50 trillion digits using a server in his house. 

And the University of Applied Sciences in Switzerland calculated 62.8 trillion digits last year. And so each time we see improvements and compare-- so when you just look at the result, OK, 31 trillion to 100 trillion. But if you start breaking it down, you have improvements in CPU. 

We have newer CPUs and faster, and we have faster network, faster storage. And the storage is actually cheaper than the last time. So we were able to control the cost as well. 

So there are a lot of factors. And I think this is a good tool to combine everything because as a developer advocate, we test our products and write the friction logs, right? And this was such a great opportunity to write a massive friction log and give feedback to the product team. 

So that's one. And everyone knows pi. Hey, computers became faster. 

Now we can calculate 100 trillion digits of pi. Oh, that's cool. I don't know everything, but we can see that. So these stories-- I think these stories are all important. 

CARTER: Oh, wow. Yeah, thank you so much just for that and getting that context of why this is important because I didn't realize that. And so that makes me wonder. 

We've seen all these developments in the last decade or so. Even in the jump from three or four years ago to now, there's been this massive improvement to what you can calculate. Where do you think it's going to go in the future? Are we still going to see these types of rapid improvements in the next few years, or is there going to have to be some kind of shake up to a different approach? 

EMMA: In the next few years, I think we continue to see improvements. This is not specific to Google Cloud but in the computer architecture and computer industry or academia, computer science in general, because we'll probably have faster network, faster storage, faster CPUs, and more memory in the short term. So I'm reasonably sure we will continue to see more digits. 

And beyond , that I think we need some breakthrough because using these technologies we have right now-- hard drives, SSDs, or network-- I don't think we can calculate quadrillions next to trillions or more. You may be able to calculate one quadrillion digits, but 10 quadrillion digits, 100 quadrillion digits, or what's next-- and thinking of these, you need exabytes of storage and terabits per second of storage I/O like throughput. And you need more memory. 

And the CPI express bandwidth is limited to x number, and memory throughput is like not-- so the increase in memory bandwidth is one of the slowest improvements in computer architectures. So by combining these factors, we probably need to see something fundamentally different in the next maybe few decades. But that was the case in the past. 

Like, we didn't see much improvement for hundreds of years until we had an electronic computer, and I think when you look at the entire history, this is such a short time. It's been 70 years since we started using electronic computers, and we've been calculating pi for thousands of years. So how can we say we won't see the next tool to calculate more pi? 

BRIAN: Oh, I love that. That's inspiring. So if people want to dig in more into how this works this time and explore pi a little bit, where can they go? 

EMMA: I think the blogs we wrote is a good place to start. It has all the technical details. It has a link to the GitHub repository where we publish Terraform scripts, show scripts we used for automation and cross-site provisioning. 

So you can actually see the code we use. Also, we have [INAUDIBLE] pi delivery. It's the URL. And we publish all 100 digits of pi, and we have some demos where you can listen to and view pi if you're curious what it looks like. Go to pi.delivery, and you can see that. 

BRIAN: Fantastic. So if people want to do the kind of exploration that Sara was talking about, they can look at the digits there and do searches and stuff. Awesome. We'll include a link to the blog post in the show notes for this as well. 

CARTER: I'm looking at this pi.delivery site right now. It is very cool. There's so many interactive little games almost, like widgets, you know? Pick the starting digit. 

Oh wow. So thank you for sharing that. That's just very exciting. We still have a little bit more time. 

As we start to wrap up, though, is there anything that we missed? Especially like Sara, is there anything that you'd like to mention or anything like that? We'd love to hear about it. 

SARA: I had two things if we have time for it, talking about the distributive approach because that was a section we skipped. I want to geek out a little bit and call attention to the moment when the 100 trillion digit result was final and Emma opened it up and looked at it. She was the first human to know what the 100 trillionth digit was. 

And that's just neat. I mean, I get chills when I think about it. You know, we talk about human exploration in kind of like the physical world sense. But there's also in the mathematical sense too. So I got to give a shout out to Emma for that particular achievement. 

CARTER: [INAUDIBLE] 

SARA: Emma, I'll let you say it. What was the digit? 

EMMA: It's 0. 

SARA: The 100 trillionth digit of pi is 0. 

EMMA: Right. 

CARTER: Wow. 

SARA: Yeah. 

CARTER: I love that. You said something else, Sara, you wanted to touch on. 

SARA: About, yeah, the distributed. Yeah, so again, going as complete newbie here coming in to this project, Emma had-- when she first asked people, like, hey, does anyone want to help? And I have very limited knowledge about storage, databases compared to Emma and others. But I want to learn as a part of my role. 

I can't conceptualize how you're storing these big numbers, how this y-cruncher work. And as a part of that, they were explaining, well, since I'm working on serverless, I'm used to thinking about cloud from a horizontal approach, not so much a vertical approach. 

And so one of the questions I asked was, OK, now that I understand what y-cruncher-- that there's a central node that's calculating the result using all this temporary storage. OK, I get to that now. But could there be a way to do kind of like using serverless, like my tools that I'm used to, could we divvy up the work? 

Could we divide it out and make it parallel somehow? And Emma did a quick search, and she said, like, hey, there's this BBP algorithm, Bailey Borwein, and Plouffe-- I think that's how they pronounce it-- algorithm. And what is really interesting about this algorithm is that you can specify get me one digit of pi or a range of digits of pi, like 10 digits of pi, anywhere in the series without having to know any previous digits. 

So for example, if I say, hey, algorithm, give me the 100th digit of pi, it will give you the 100th digit of pi. And you don't have to know any of the previous digits. So it will return whatever that number is. 

I was like, this is perfect. I could spin up a bunch-- I can-- like, I'm laughing because I'm waiting for people to realize where this is going. I could spin up a bunch of cloud functions and say, OK, your task is to do digit one, digit two, digit three, or like, let's say, like, 20 or 30 of the digits. And then I'll just kind of a map reduce. 

I'll spin up all the workers, give them their assignments, come back, and then put together the result. What could possibly be an issue with this approach? And what it comes back down to is the algorithmic complexity of the BPP algorithm is n log n. 

CARTER: Ah. 

SARA: So it's actually slower than linear. So that means I never had a chance against y-cruncher. But that's not going to stop me from building this thing. 

I'm not going to let, quote, n log n slow me down. So I'm going to build this anyway because I'm doing cloud functions. This is the thing. 

I like doing demos and for my product and trying, like, all existing problems in a new light. So let's just try this and see what happens. So the problem is so it's not truly parallel or, what do you call it, embarrassingly parallel because the longer you go out in the series, the slower it gets. 

But it still works. It was a nice little proof of concept demo. And what I also learned about this, a couple of interesting things about this algorithm. One is it was actually used in a "Simpsons" episode. 

I cannot make this up. When I was reading about the history, the writers needed to know what the 40,000 digit of pi was, and they contacted the mathematician Bailey. And they-- I'll figure what year it was. 

But they printed it out and mailed it to them. Here's all the digits. Go pick the one that you need. And he was the one that invented this algorithm. And the other thing too is that this algorithm was discovered by an algorithm. 

CARTER: What? 

SARA: So these researchers are doing-- I don't know if number theory is the right way to categorize this research, but they were looking at relationships between numbers-- real numbers, AKA, the numbers that can have fractions, versus integers like 1, 2, 3. And they're trying to figure out, OK, between two real numbers or between various groups of real numbers, what are the patterns that exist with integers within those numbers? So they were using an algorithm PLSQ, I believe it is. 

And so they were basically just saying, hey, we think there might be this type of relationship, and they were like, run that algorithm to see whether or not it ever halted. And if it didn't halt, then they would know something might be up here. And basically, when they were trying this particular series, they were like, wait, there might be something here related to pi. 

And that's how they discovered this BBP algorithm. So it was interesting that it was an algorithm invented by an algorithm or discovered-- not so much discovered, but it kind of gave them an inkling that, hey, we should go and do some research here. So really fascinating that you can calculate the digits of pi without needing to know any previous digit. Yeah, I know that-- maybe we could talk them into another challenge of, like, maybe we could find just, like, one digits far out there and see what it can be. 

EMMA: There is actually a separate world record for that. We have a world record for the hexadecimal of pi because you can just run BBP and get the far, far away digit. And I think the current world record is 100 quadrillion digit-- 10 to 16, I think. So it's the current world record for that particular methodology. 

SARA: Yeah, so there is something out there. Oh yeah, and then the algorithm itself returns it in hexadecimal. So that's another one. 

I was working on this for so long, when people would ask me what's the digits of pi, I would say 3.243F6A and so-- OK, now can I say? Like, what was the episode number? 308? Did we really miss it by just six episodes to have 314? 

BRIAN: We couldn't wait. We couldn't wait any longer. We wanted to have this conversation. 

SARA: For large values of 308, we could say. 

EMMA: And also, we used that algorithm to verify our results because we need to make sure that we got the results right. So we run BBP and verify the last 70 digits-- 70, 80 digits. And the way the calculation works is the last step is multiply. So if you get the last dozens of digits right, there is a possibility of error of 1 in 10 to 17 [INAUDIBLE] 0. 

So that's how we guarantee the result is correct. So we use that algorithm. Not the way Sarah and I first thought we would use, but we did. 

BRIAN: That's amazing. Comes full circle back around. OK, so I think we're going to ask you for some links to this afterwards because the algorithms sound really interesting, and I think people are going to want to follow up on that. Emma, did you have anything you wanted to add as we wrap up? 

EMMA: Oh yeah. So people sometimes say, hey, they just downloaded the program, and they run it in Cloud, and anybody could do that. It's not that simple. 

Google has hundreds of thousands of engineers-- like, [INAUDIBLE] people. All have resources through classes. And not everybody does this. 

And the core differentiator here-- like, why is it just a bunch of us instead of, like, anybody who has access to Cloud-- is the passion to calculate pi in the first place because this takes a lot of time. And two, combining existing tools-- so I know how to use y-cruncher. I know what y-cruncher does. 

I know how to use cloud, and I know how to optimize on top of cloud. And we did a lot of benchmarks. Even if the calculation is 1% faster, if you spend 100 days, it's one day longer. Or if it's 10% slower, it takes like 10 days more. 

And if you run it for 150 days, it's 15 days longer. So optimization was really important in designing the right architecture for this problem. So we use a lot of tools, including Terraform, shell scripts, a Ruby script to run y-cruncher with different parameters to optimize settings. And these small, small details are, I think, all important. And that is why we were able to do this in 157 days. 

BRIAN: Fantastic. And like, the tools you ended up using are on that GitHub repo you mentioned. 

EMMA: Yes. 

BRIAN: That's awesome. 

EMMA: It's four of us that were directly involved. It's just for us. It's, I think, magical computer. So we have [INAUDIBLE] taking care of the clusters. We have software engineers adding new features. We obviously have people in the data center taking care of the servers. 

But we just use the public interface anybody can use on Google Cloud. So we didn't need to talk to them and, hey, this hard drive is broken, or we need to stop the machine or anything. It just happened behind the scenes. 

CARTER: Thank you so much, Emma and Sara, just for everything that you mentioned. There were so many things that-- yeah, just brain expanding, things I hadn't considered-- the amount of automation and infrastructure. How do you verify a world record? I never thought about any of this. So thank you so much for sharing your insights and your excitement about this. 

SARA: And thank you, Emma, for offering to do collaborative work here and letting those of us tag along as well. It was exciting to be a part of it. 

EMMA: This time, it was much better working as a team than last time. We had new perspectives. The final messaging was very different, and some of the optimizations were proposed by other team members. So I think we were able to finish this much, much faster than what I've done by myself. So it was a lot of fun and learning. 

CARTER: Amazing. Bye, thank you. 

BRIAN: Awesome thank you both. 

SARA: See you. 

EMMA: Thank you. 

CARTER: Bam. OK, well, that episode. I'm so glad it went in the direction it did because I wasn't even thinking about everything that goes into a world record effort like this. 

How do you verify a world record? That came up very late in the conversation. It was like, oh, you need some kind of other outside source to check these digits. The automation work that goes into it. 

BRIAN: How do you even know you did it right? 

CARTER: Right, the infrastructure where Emma mentioned Terraform for a second-- and it's like, there's so much that went into this. And Emma had to have so much knowledge from all these different areas to pull that together to be able to make this happen. I'm just amazed that we get to work with people like that. 

BRIAN: It's so cool, and I love that they have shared how they ended up doing it-- you know, like, the tools and the configuration they ended up using. And you know, it involves-- like I guess all, like, big cloud projects, you've got some configuration and automation and other stuff. So it sounds like they used Terraform and a bunch of other bits together. 

So I don't know. I'm going to go check that out later. It was awesome. 

CARTER: Yeah, and I was serious about that website that they shared. Pi.discovery I think it is. 

BRIAN: Yeah. 

CARTER: It is very cool. Like, it's one of those things that it's like, I think you can see maybe some of Sara's UX background too because like, how do you make something so hard to imagine, so hard to visualize, how do you make that approachable? And it's like, little sites like this is how you do it. So-- 

BRIAN: Make it more real. 

CARTER: --kudos to both of them. Yeah. 

BRIAN: And to go with the music theme of the episode, there's even a way to listen to the digits of pi on that site. 

CARTER: Yeah. Now you're the sound person. So I think you're going to understand that a lot more than me, like, what's happening there. But I'm excited to play around with that. 

BRIAN: I think they're mapping the digits to notes, to pitches, and then kind of play that through. 

CARTER: Oh, that's amazing. Was there anything that just stood out to you in this episode or anything that you just really, like, were charmed by? 

BRIAN: Yeah, I mean, the whole flow is great to kind of, like, hear it in context and that sort of thing. But I think you can feel it in, like, we all got really alive towards the end. Sara was talking about what other ways there are to calculate. 

All of us try to apply our usual tricks to things, and that doesn't necessarily work. So they tried a bunch of stuff. And then this, I don't know, just kind of more human discovery aspect of it-- they said last digit, but maybe somebody had actually done that but definitely the last 70 digits. Emma is the first human to have ever seen those in that order together, and that's kind of amazing. 

CARTER: What an anticlimactic 100 trillionth digit, though. Like, 0? 

BRIAN: It's 0. 

CARTER: 0. 

BRIAN: I mean, it's perfect, though. 

CARTER: Yeah. 

BRIAN: It feels right to me in a way. 

CARTER: I thought 0 wasn't even a number. That's the question we have to ask Sara in the math background in the future. 

BRIAN: Discovery of 0, I think, is a whole thing, right? 

CARTER: Yeah, that was amazing. I don't know if you noticed, but I was having trouble a little bit. I just spent, like, almost a year in London, like, on and off. 

One of the people I care about most in the whole world is named Sah-ra, and her name is spelled exactly the same. So I was doing my best to make sure to keep it straight the whole time. Took focus, effort. 

BRIAN: Well, I heard it. I think you did it. 

CARTER: All right. 

BRIAN: So that was amazing. I don't know. What's-- I don't know. We've been working on other stuff together. Like, what are you working on next, or are we doing more of that? 

CARTER: Well, what should we be working on? Brian, I think we've got to kick off VME season three, maybe the final season. 

BRIAN: OK, what is VME? Because I think a lot of people don't know what that is. Yeah, so we've done this video series together. So it's on YouTube all about virtual machines and, like, why they're worth caring about. 

CARTER: Yes, and so this episode again was very interesting because the types of things that you can do with compute-- 

BRIAN: Yep. 

CARTER: --the type of power that you have with computers. And going into this show VME that we worked on, I was very skeptical about that. And Brian, you came on. You introduced me, and you said, no, these things are relevant. They matter. 

BRIAN: [INAUDIBLE] 

CARTER: And so yeah, definitely check that out. And you and me, we need to get in the lab somewhere and start getting this last season going. 

BRIAN: We need to get that going. So yeah, so we are in the planning stages, everybody, for another season of kind of virtual machines, VMs, end to end. Use compute engine. This theme, I think, is going to be a lot of fun using them with other stuff. So if there's something you'd like to hear about, ping either of us on Twitter or wherever and let us know, and we'll try to mix that in. 

CARTER: Mm-hm. And so with that, it's time to say goodbye. Some quick thanks really quick-- thank you, Brian, for coming, being a great co-host. 

Thank you, Emma and Sara, for sharing your knowledge. Thank you, Kevin and Clarissa, for making all this happen in the background. And thank you all at home for listening. We'll see you all next week. 

BRIAN: See you next week.