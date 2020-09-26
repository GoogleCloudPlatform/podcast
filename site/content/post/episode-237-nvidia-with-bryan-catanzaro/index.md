+++
audioDuration = "00:42:47"
audioFile = "Google.Cloud.Platform.Podcast.Episode.237.mp3"
audioSize = 61615232
categories = ["Deep Learning", "Machine Learning", "GPU"]
date = "2020-09-23"
description = "Mark Mirchandani and Jon Foust are together again this week, speaking with NVIDIA VP of Applied Deep Learning Research Bryan Catanzaro."
draft = false
episodeNumber = 237
hosts = ["Mark Mirchandani", "Jon Foust"]
title = "NVIDIA with Bryan Catanzaro"
image="/post/episode-237-nvidia-with-bryan-catanzaro/images/hero/hero-EP-237.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/iye4yy/episode_237_nvidia_with_bryan_catanzaro/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Jon Foust](https://twitter.com/syntxerror1) are together again this week, speaking with NVIDIA VP of Applied Deep Learning Research [Bryan Catanzaro](https://twitter.com/ctnzr). Bryan and his team focus on using deep learning to enhance NVIDIA's offerings.

Since Bryan was last a guest on the show, NVIDIA has been doing some amazing things. We talk about the A100 Tensor Core GPU and the massive effort it took to create, the new RTX graphics cards great for gaming, and the differences between them. Bryan explains how the new A100 chips compare to the previous versions, saying the new chips are larger, but with almost three times the power, making them ideal for things like precise calculations. And, as Bryan says, with better computation and more insight, we can make discoveries that benefit humanity. While the new RTX graphic cards are cheaper than previous versions, they are faster and more powerful, making gaming and video streaming much more enjoyable. Background noises and objects can even be removed with the help of deep learning. 

Jon and Bryan talk about The Black Box at NVIDIA and what demos Jon hopes to see on his next visit. With this as the catalyst, Bryan talks more about how the NVIDIA architecture and the deep learning they employ have created efficient 8k graphics rendering for truly powerful gaming experiences. Outside of gaming, DLSS could have farther reaching benefits as the model learns new purposes, and Bryan talks us through some fun examples.

With the acquisitions of Mellanox and ARM, Bryan explains that NVIDIA has been able to streamline networking and really take advantage of powerful performance at all stages. The future of AI and HPC is about the data center, Bryan explains, and NVIDIA is hoping to push the boundaries on latency reduction and more.

##### Bryan Catanzaro

[Bryan Catanzaro](https://twitter.com/ctnzr) is VP of Applied Deep Learning Research at NVIDIA, where he leads a team finding new ways to use deep learning for graphics, speech, audio, and system design. His research led to the creation of the CUDNN library.

##### Cool things of the week

* Introducing interactive code samples in Google Cloud documentation [blog](https://cloud.google.com/blog/products/application-development/introducing-interactive-code-samples-in-google-cloud-documentation)
* GCP Podcast Episode 228: Fastly with Tyler McMullen [podcast](https://www.gcppodcast.com/post/episode-228-fastly-with-tyler-mcmullen/)
* Fastly Offers First Partner Edge Cloud-Based Content Delivery Solution on Google Cloud Marketplace [press release](https://www.fastly.com/press/press-releases/fastly-offers-first-partner-edge-cloud-based-content-delivery-solution-on) and [marketplace](https://console.cloud.google.com/marketplace/details/fastly-mp-public/fastly-for-gcp-marketplace)

##### Interview

* NVIDIA [site](https://www.nvidia.com/en-us/)
* NVIDIA A100 [site](https://www.nvidia.com/en-us/data-center/a100/)
* NVIDIA RTX 30 Series [site](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/)
* Mellanox [site](https://www.mellanox.com)
* ARM [site](https://www.arm.com)
* Cuda [site](https://developer.nvidia.com/cuda-toolkit)
* GCP Podcast Episode 119: NVIDIA and Deep Learning Research with Bryan Catanzaro [podcast](https://www.gcppodcast.com/post/episode-119-nvidia-and-deep-learning-research-with-bryan-catanzaro/)
* GCP Podcast Episode 168: NVIDIA T4 with Ian Buck and Kari Briski [podcast](https://www.gcppodcast.com/post/episode-168-nvidia-t4-with-ian-buck-and-kari-briski/)
* Digital GTC [site](https://www.nvidia.com/en-us/gtc/)

##### Tip of the week

Zack Akil is here this week with a tip about ML on the edge with [Teachable Machine](https://teachablemachine.withgoogle.com) and [AutoML](https://cloud.google.com/automl).

##### What's something cool you're working on?

Jon has been working on [Open Match](https://openmatch.dev/site/) which went 1.0 recently! He's been working on samples for matchfunctions, sending requests from game clients, and putting all that content out for the world to play with!

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 237 of the weekly Google Cloud Platform podcast. As always, I'm Mark Mirchandani, and today, I am here with superstar, and someone we haven't seen in months, Jon Foust. Hey, Jon, how are you doing?" >}}

JON: Well, how are you doing? Thanks for the intro. That was amazing. 

MARK: I wanted to build it up. It's a big intro, man. I haven't seen you in such a long time. 

JON: Yeah, things have been pretty wild, you know. It's been a big shift for everybody. It's been hard for me to record, mainly because I live in the heart of downtown New York City, and it is very loud and very hard to soundproof and get things together. So, glad to be back, and hopefully, I can be on a lot more episodes. 

MARK: Yeah, I'm looking forward to it. We'll make sure to try and do the best we can to get you on as many episodes as possible. Always exciting. And of course, today, we also have a super exciting interview. 

JON: Yes, we are chatting with Bryan from NVIDIA about what's changed in GPUs, data centers, architecture, and some fancy new AI technology that they've been using to add additional features to a lot of the new things we'll be seeing in either data centers or personal GPUs. 

MARK: Yeah, it's amazing. And we had a great podcast with Bryan probably over a year ago now. And we'll make sure to put that episode in the show notes. 

But he does a good job of explaining some of the stuff that NVIDIA is doing. And then as we get to revisit that in this podcast episode, it blows my mind, some of this stuff. And it's so cool. And I know you're excited about the consumer version of the GPU, of course. 

JON: Luckily, I got to sit down with someone who was instrumental in a lot of the things that went into those personal GPUs and a lot of the technologies. And I got to chat with him just a bit before and after. So it was pretty cool to just sit down with them. 

MARK: Yep, so that's super exciting. And after that interview, we'll have a tip from our friend, Zack, about using AML on the Edge. Can't wait for that. But before we do either of those, let's get into our cool things of the week. 

[MUSIC PLAYING] 

JON: If you've ever browsed our documentation and you're proceeding through and trying to start up a project, whatever product you're trying to use, typically, we'll have code snippets that you can copy and paste. But now, they have interactive code samples which allow you to edit those code snippets right there in the documentation. You can even sometimes run the APIs right there and see the results. 

But the great thing about it is once you've updated, say, your project name or if you've launched a GKE cluster somewhere and you want to update the name, the region, and everything for you, you can do that there in documentation and actually copy that straight over once you want to run the command, whether you're using some type of shell. So it's really interesting. I think it's very helpful. And I thought that is something that I definitely had to share. 

MARK: I'm sure I'm not the only one who has problems, constantly copying and pasting code samples and then having to go back and edit it. And if the sample's 10 lines long, that's a lot of work. So it's a super cool feature. 

JON: Yeah, definitely. 

MARK: And so a really cool announcement from last week was actually Fastly, which is a great company that we got a chance to chat with a few weeks ago-- we brought on their CTO to give a really cool story about what Edge looks like. And so Fastly has actually launched their GCP marketplace offering, right? So the marketplace, you can download all kinds of preconfigured stuff and then obviously incorporate it into your cloud. 

And with Fastly, you're actually able to use the Fastly Edge that Tyler was talking about. It also all comes under your GCP billing, which makes it a lot more convenient. So it's super, super cool. I can't probably do it justice by explaining it. But we'll put the link in the show notes. 

And then it's just a cool thing to give a try out, right? And if it's super, super good and you like it, then you can look at maybe all the other services that Fastly has. Or you can just use it to kind of enhance your Google Cloud stuff. 

JON: It's exciting to see people still doing things on the Edge. I, back in the days, was trying to build, say, your ring doorbell and connecting it to my private network so I can make sure that no one is stealing my packages back when I was in college. But definitely interesting to see that people are still working on the Edge. And I'm very excited to see that Fastly is offering it as an offering on our marketplace. 

MARK: All right, well, why don't we go ahead and jump into our main interview with Bryan? 

[MUSIC PLAYING] 

Thanks so much for joining us, Bryan. To get things started, can you tell us a little bit more about yourself? 

BRYAN: Sure, so my name is Bryan Catanzaro, and I'm vice president of Applied Deep Learning Research at NVIDIA. And we have a team that I lead, focusing on finding new ways of using deep learning to make NVIDIA better. Both NVIDIA's products have new capabilities, as well as make NVIDIA more efficient and more productive. 

JON: That's great. So Bryan, you were on the podcast roughly a little bit over 100 episodes ago, so welcome back. 

BRYAN: Thanks. 

JON: I'm really excited about a lot of the things that are coming out in NVIDIA lately. So we're going to jump into a couple of things because I happened to do my last podcast episode at NVIDIA's headquarters. And-- 

BRYAN: Oh, awesome. 

JON: It was great. It was amazing. I believe we did it with Ian and Kari. 

BRYAN: Yeah. 

JON: Definitely had a ton of fun there. But I also got to take a tour of NVIDIA. And besides getting a Thai iced tea on the top floor, which was amazing, I got to get inside of the black box that is on the first floor. And that's where I got to see the T4 in action. 

BRYAN: Awesome. 

JON: Got to see a bunch of demos on procedurally generated, I believe, maps and imaging. There was definitely a game demo because that's where a lot of my interests lie. So I got to see Tomb Raider running on the T4, which was kind of cool, or the architecture of the T4. 

And I'm just curious. Since the T4, what has really come out of NVIDIA? What has happened since then? 

BRYAN: Well, a lot of stuff has come out. I think we're really excited about our Ampere architecture. So the T4 came from our touring generation. And now we have this new generation named after Ampere. 

In March, Jensen released the A100 GPU at GTC, did a virtual presentation on that. And that's our big data center Ampere. And it's enormous, built on 7 nanometer process. It has 54 billion transistors. It's just an absolutely gargantuan chip, one of the most complicated things humanity has ever tried to build. 

So we are shipping that. And I believe, actually, that Google Cloud announced beta availability of A100 instances, which is really exciting for us. So people can already start to explore that, which is great. 

And then, on September 1, Jensen did another announcement of our gaming focused Ampere cards, the RTX3080, the RTX3090 and 3070. He announced all those. And this morning, actually, the reviews came out for the RTX3080. I believe it goes on sale tomorrow, actually. 

So that's very exciting. I was just telling my friend that it's almost like Christmas for me, the day that NVIDIA gets to release a new lineup of GPUs because so much blood, sweat, and tears goes into creating them over the past several years. 

I have known about these cards and these processors. And I've known what we're going to be doing with them. And it's just so exciting. And now they're real, and everyone can experience them. It's really wonderful. 

MARK: Yeah, and of course, by the time this podcast actually launches, those will all be available. All the reviews will be there. And Jon will probably have built no less than three machines using these graphics cards. 

I want to jump back to something you mentioned earlier with the A100s, right? So you kind of qualified these as a data center graphics processor. What makes that different from, for instance, the gaming GPUs that you're making? 

BRYAN: There's a couple of things that make it different. The first is that the A100 is just so much bigger. I mean, it is 54 billion transistors, whereas the GPU in the RTX3090 is 28 billion transistors. So it's almost a factor of two larger. 

It has almost a factor of two more memory bandwidth. It has approximately a factor of two more tensor core bandwidth, maybe a little bit more, actually, so that the AI cores that are designed for training and deploying neural networks are much beefier on the A100. 

I guess the other really, really important thing is the interconnect. So the A100 has a large number of unveiling ports, which then can be connected to switches in order to collect the memories of many A100s together into kind of a super GPU. 

And in fact, on Google Cloud, I saw that you guys have instances with 16 A100s in a single instance, which is incredible. And the thing is about all those 16 A100s is that they're interconnected with switches such that any one of those GPUs can read and write memory freely to any one of those other GPUs at extremely high throughputs. 

And that helps people train models that just would not be possible to fit on a single GPU. The ability to take a whole collection of them and form kind of a super GPU out of it, that's really special. And our gamers don't typically do that, so we don't include that functionality on the gaming chips. 

JON: So I'm quite familiar with NVLink-- well, closely related to-- come from the days of SLI and obviously with the [INAUDIBLE] NVLink. So I'm quite familiar with connecting multiple cards together. And you did mention the form factor, the two times four factor between your desktop GPUs and your data center GPUs. 

And it's interesting to see that we can offer 16 of these running pretty much connected to one another. What would you say when we're talking about HPC or High Performance Computing, what kind of improvements can we see based upon the previous generation, the T4? 

BRYAN: Yeah, well, that's a great question. For HPC specifically, I would say that V100 was actually the better frame of comparison because a lot of HPC workloads actually run in 64-bit floating point. So all of the calculations that they're doing are on these extremely high precision numbers, which they need in order to accurately simulate, for example, the flow of air over the wing of an airplane or the way that heat is going to move around inside of an engine. 

Try to do it without those very high precision numbers, sometimes you just get the wrong answer. So HPC tends to be fairly conservative. And V100 was approximately 7 and 1/2 teraflops of double precision performance. And A100 is approximately 20, if I am remembering correctly. 

So that's a pretty big leap. And the way that we did that involved making the chip much bigger, but it also involved creating tensor cores specifically for HPC. So the A100 for the first time has very flexible tensor cores that can actually handle 64-bit matrix multiplication instructions, in addition to a suite of matrix multiplication instructions for deep learning training and deployment that go all the way from 32-bit inputs to 16-bit inputs to even 8 and 4-bit, even 1-bit inputs. 

With the A100 tensor core, we have just an incredible flexibility that allows us to address the needs of HPC applications, deep learning applications, all of these large scale applications using the A100 GPU. 

MARK: Yeah, I mean, obviously, those are huge numbers. And I'll actually recommend people to check out the previous podcast that you were on the previous episode because you did a pretty good job of explaining, A, how large those numbers were and, B, what a lot of these terms actually mean, right? 

Because I feel like there's always a bunch of these things get thrown around, right? And high performance computing is maybe more of just a fancy way of saying, we need to do a lot really, really fast, really efficiently. And so it sounds like these A100s are just a great fit for extremely large workloads. 

BRYAN: That's what we built it for sure. And at NVIDIA, it gives us great joy to be part of the world's most difficult problems. When we think about artificial intelligence and when we think about high performance computing, we're really trying to use computers to solve the most difficult things that humanity is dealing with. 

There's a lot of coronavirus research happening right now. There's a lot of alternative energy research. There's a lot of medical research. And these problems are very, very complicated problems. But at the heart of it is our belief that with better computation, we can learn things about the universe that help us live better. 

So it's really exciting for us to be part of that and to bring our best effort. And A100 certainly represents that. It's kind of a swing for the fences. It's the largest possible chip that can be made on 7 nanometers. I mean, it absolutely fills the reticule, which is the frame that they use to print chips. It cannot be any bigger than what we've got. 

And we did that on purpose because we knew we needed to solve the biggest problems that we can. And so it's exciting for us to be part of that. 

MARK: I'm just going to assume that that's the most you can fit to that space for now, kind of thing. Because we keep making laws and then breaking them. So I'm sure the A1000 will be a billion times better. 

BRYAN: Well, eventually. We're always subject to the laws of physics and the laws of manufacturability, right? So the A100 is an extraordinarily aggressive thing to build. It has five channels of HBM2 activated. There's actually six on the package, but five of them are activated in the A100. 

If you just look at it, the square millimeters, we should start measuring silicon in acres when we look at an A100 because it's pretty aggressive. But again, we're trying to solve big problems so it makes sense to bring the biggest tools that we can build. 

JON: That's awesome. I have a very interesting question. If I ever get back to NVIDIA, will I be able to see, in the black box, the A100 in action? And, obviously, for my interests, I'm just curious, will we get to see another Tomb Raider demo or another high graphic game like Cyberpunk on the A100 running? 

BRYAN: So the black box is always being updated. So basically what we put in there is whatever our latest and greatest and most awesome stuff is so that when people visit, they can experience kind of how we feel about the work we're doing. And obviously, we care a lot about it. We're excited about it. And the black box kind of reflects that. So we are always putting our best stuff in there. 

Having said that, I think that the A100 is designed really for the data center. And one of the things that means is that it doesn't actually have display outputs. And by the way, NVIDIA has built GPUs in the past without display outputs, so this isn't the first time. 

But it is kind of a unique thing. It kind of speaks to the single purpose that we had with the A100 as a data center GPU. We wanted to devote absolutely as much power to the HPC and AI workloads that we could muster. And so we threw threw out the part of the GPU that talks to the television. 

So if you go to the black box in the future, likely you're going to see some amazing demos, probably running on an RTX3090, which is built out of a GA102 chip. And so that could be pretty awesome as well. 

During the announcement, Jensen actually showed the RTX3090 running an 8K resolution. Now 8K is not twice the pixels of 4K. It is four times the pixels of 4K. And then, of course, four times 4K is four times the pixels of high def. At 8K resolution, that 8K resolution is 16 times more pixels than a high definition display. 

And playing a game at 8K resolution is amazing. And it's really only possible with these brand new Ampere GPUs and also possible thanks to deep learning. Because in order to reach these extreme resolutions, we've actually found the best way to do that is to use DLSS, which is this algorithm that we've been inventing and working on for a while that uses deep learning to do graphics rendering in a more efficient way. 

And so not only is the RTX3090 just an awesome beast of a GPU, but with AI algorithms, it's actually rendering more intelligently so that we can actually render at 8K. And that's an awesome experience for the black box. So I would expect, if you were to come back, that you would get to try that out. 

JON: So what does a DLSS stand for? 

BRYAN: It stands for Deep Learning Super Sampling. 

JON: Super sampling, OK. 

MARK: And so you actually did a pretty good job of covering this in your last podcast. But I think it's worth revisiting. You said you were able to do amazing things with those graphics card by using machine learning and pseudo AI, right? 

BRYAN: It's a new idea because it's never been done before Turing was launched. Turing was our generation that brought ray tracing and AI to real-time graphics for the first time ever. No other GPU had ever tried to do that before. And we're very proud of it, and Ampere kind of brings that to the next level. 

There's a lot of different ways to use artificial intelligence to make graphics better. But the one that we've been talking about, DLSS, what it does is renders the game in a smarter way. So a traditional rendering when you're playing a game, it's running a program for every pixel. And for every frame, it runs that program to figure out what color that pixel should be. 

The thing is that there are a lot of correlations between the pixels, both in terms of spatially, as well as in terms of temporal correlation. So if you think about it from frame to frame, the pixels are not all changing randomly all the time. That would give you a headache, right? You wouldn't be able to see anything. 

So the reason that there's these correlations is because there's a structure to the video, right? You've got objects moving around. You've got the game being rendered. So we are taking advantage of artificial intelligence to use those correlations to make the rendering process more efficient. 

So what we do is we render the game using fewer samples. And instead of running a program for every pixel, we're going to do it more sparsely. And then we're going to combine those samples in time and in space using algorithms that we learn with deep learning. 

Then, what that allows us to do is render a video that is actually more detailed and higher quality than a video that you would get with rendering brute force because our model can actually use information over long periods of time in ways that traditional rendering cannot. And also, it's able to learn from the enormous amount of training data that we have built up to train these models. It knows how things should look. 

And so it can kind of use those memories of other things that it's seen during the training process to fill in some missing details. And so a combination of those things means that when you render with DLSS, you're actually rendering in a smarter way. It uses less brute force. It's a sparse rendering technique, so it's a little bit more elegant. 

Overall, the results, I think, speak for themselves, that you get a massive boost in frame rate and you also get image quality that, at times, looks better than traditional rendering techniques. At other times, there's some artifacts. It's not identical, right? It is a different rendering technology. But I think on the whole, the reception has been really positive that people can see that this technology really makes games more fun to play. 

JON: So I was kind of interested in seeing what DLSS could be used for outside of gaming, if it can be. And when you mentioned that it's based on a bunch of trained data, I was wondering, what if it were used for a non-gaming purpose, such as you could potentially train a model to add color to a black and white film? 

That was the first thing I thought of when I thought we're going to be looking at imaging, and it's going to be inferring or adding more resolution. And I thought, hey, maybe DLSS could probably do this. So is this kind of in the scope of what DLSS can do, or no? 

BRYAN: Well, I would say it's related. I wouldn't actually call it DLSS anymore if the goal was to colorize a black and white film. I would call that something like-- I don't know-- deep color, right? There's a unique name for you, right? So it's doing a different thing. 

Now the algorithm might be related for two reasons. One is that you need to have a temporal stability component if you are doing colorization. Otherwise, you could run into this problem where it decided to make something one color in one frame, and then that same thing it decided to make a different color in the next frame, which would be awful. 

So the model would need to learn about correlations in time. And it would also learn about correlations in space, about figuring out what kinds of objects sort of belong together, what are the different things in the scene, and what kinds of colors make sense to go along with those things in the scene. That kind of problem is related to what we do with DLSS. 

So if we were to go about trying to do that, we might go about doing that by taking a model similar to the DLSS deep learning model and then training it on a different data set. And then we could have a model that does automatic colorization. And so you can imagine that there are a lot of ways to use deep learning for computer graphics besides DLSS. And I think automatic colorization is one of them, but there's a lot more. 

And I'm very excited about that. My job is to figure out how to use deep learning to make NVIDIA's products better. And I think we're at the very beginning of the era of AI-accelerated graphics. And there's so many new cool projects to work on. And that's kind of why I'm here. 

MARK: So for people who are purchasing these new RTX editions, those are the ones that are using DLSS? 

BRYAN: Yeah, so any RTX card, whether that's RTX 20 series card, the Turing architecture, or the RTX 30 series cards, the Ampere architecture, they all have the tensor cores that are necessary to run DLSS. 

JON: So thanks for asking that, Mark, because I've been bouncing in my seat. I've been waiting to ask him about the new 30 series graphics cards. By the way, if Jensen ever listens to this, I want to let him know, your leather jacket is the definition of style. Let's just start there. 

The second thing is I saw that graphics card early on in the video because no one has that many silicon or rubber spatulas on their countertop. I zoned in and just saw the card back there. I was like, ah, there it is. He's not pulling it out the oven, but-- 

BRYAN: OK, so the spatulas were actually there for his A100 launch back in the spring and because he gave that from the same place. And people on Reddit really loved his collection of spatulas. And there was a lot of comments about how colorful they were and how it made the presentation more fun. 

And so I think Jensen saw those comments, and I think that's why he decided to have fun by hiding the new GPU behind the spatulas. And then when it was time for the reveal, he just goes and moves the spatulas to pull out this amazing piece of technology that's been hidden in plain sight the whole time. It was a great moment. I loved it. 

JON: We'll definitely link that so that people can actually experience that moment, because it was pretty great. 

BRYAN: Yeah, and then there was the other moment where he takes the RTX3090 out of his oven because it's so enormous that you could not possibly conceal that behind the spatula. So he was baking that. 

JON: So let's talk about these RTX30 series cards because they are running on the Ampere architecture. So there were a lot of new features that came out and a lot of announcements. And it was amazing. 

I think anybody who is an enthusiast would be lining up or pretty much staying up in the wee hours of the night, trying to get these cards. Can you speak a little bit more about why these cards are so much better than the Turing architecture that the initial RTX cards ran on? 

BRYAN: Well, this is our second generation RTX architecture. So we've learned a lot from Turing. Turing was the first GPU to try to do ray tracing and AI for graphics. And I'm very proud of Turing. I'm very proud of what we accomplished with it. I think we learned some things about how to make it even better with Ampere. 

And so I think with Ampere, people are really excited about the value that they're getting. So with Turing, our 2080 TI GPU, that was a $1,200 GPU. And now the 3080 is quite a bit faster than the 20 ADTI, but it's only $800. So people look at that. They can see that the value is quite a bit better. The performance per dollar has gotten a lot better. That's exciting to people. 

At the same time, we've really improved the core architecture. So one of the features that is exciting is that we doubled up the FP32 Cuda cores for the Ampere gaming cards. And so they have twice as many Cuda cores as people were perhaps expecting, which means that their FP32 compute throughput is really dramatically higher. And that can really help in a lot of games, especially at high resolutions. 

And then we've also perfected the tensor cores. The tensor cores are more flexible. They're faster. The ray tracing cores that we use for accelerating bounding volume hierarchy calculations in order to make ray tracing work, those are twice as fast, and they also have new capabilities as well. 

So I think, overall, I feel like Ampere is, as is often the case for a second generation, it's something that is just better in basically every way. And I think consumers are excited about that. 

MARK: Yeah, I mean, I understood about 30% of those words. But I think the key takeaway is that it's cheaper and it's much more gooder. 

BRYAN: That's right. 

MARK: What about non-video game graphics things, right? So take streaming, for example. Does this graphics card help out with other non-game activities? 

BRYAN: Absolutely, so we have this suite of technologies we're calling RTX Broadcast, which is designed to help gamers interact online. It has a couple of different technologies. For example, RTX Voice, which we've released previously, which helps remove background noises from your audio using deep learning. 

And then also, now we have an RTX greenscreen, which is basically removing backgrounds using deep learning to try to make it so that you can make your streams look better. So there's a whole suite of RTX Broadcast technologies. And then another thing we announced with the Ampere launch was our reflex initiative, which is aiming to lower latency. 

So when you play a video game, one of the things that makes it feel real is that when you move your character or when you press a button, the time that it takes for that to actually be reflected in the game for you to see something change, that's what we call the latency. And the lower that latency is, the more immersive the game feels, and also the more accurately you can play it. 

Some games, especially games that require really fast Twitch reflexes, the latency can really impede your accuracy. And so you have a competitive advantage if you have lower latency. 

And so with the Ampere launch, we announced some technologies to help people get the absolute minimum latency, including software that makes fast paths through the driver and through the game so that we're cutting out any latency that might be in the processing of the game, as well as some tools to help people calibrate their systems so that they can actually measure the latency that they're seeing with their current mouse, keyboard, computer setup. 

And then maybe they can try switching out some things like changing some modes on their mouse or on their monitor or turning off VSync or these different things that people might want to do in order to tweak their latency to get the absolute best experience. 

MARK: And then, obviously, the next step is to make AI to networking to go faster, right? Just put a bunch of NVIDIA chips on all the network tubes throughout the world, and somehow, it can make it go faster. 

BRYAN: Well, we did acquire Mellanox recently. So Mellanox is one of the biggest networking providers in the world. And they make some of the very best. We're calling them actually data processing units now. 

So you can imagine a data center is built out of a whole bunch of different kinds of processors. We've got the GPU doing high throughput computing. We've got the CPU that's doing low latency computing. And then we've got the DPU that's coordinating all these and moving information around. 

So NVIDIA, we acquired Mellanox for a very important reason, which is that the future of artificial intelligence and much of high performance computing is about the data center and about how we are able to move data around. And having the ability to optimize the GPU and data processor together in order to reduce latencies, that's something that we think is going to be really exciting going forward. 

JON: That's really cool to see you guys in the networking space. So another interesting acquisition that I had to just bring up was NVIDIA's acquisition of ARM. That was very interesting and amazing to hear because ARM processors are pretty much everywhere in a lot of devices. So what does that acquisition really mean to NVIDIA? 

BRYAN: Yeah, well, I was just saying that the data center has three processors-- the GPU, the DPU, and the CPU. And so it stands to reason that NVIDIA would care a lot about the CPU as well, as we're trying to build the data centers of the future. 

And the reach of ARM is really extraordinary. ARM processors are used by so many different companies in so many different applications, from cell phones to data centers. And they have just an extraordinary ecosystem. And I think that was really exciting for NVIDIA to contemplate what it could mean if we were to join forces with them. 

I think one of the things that I've seen people say on the internet about this acquisition is that they're worried that ARM's business and NVIDIA's business are too different. Because ARM has been about sort of licensing IP and sort of enabling many, many different kinds of companies that all compete with each other to succeed using sort of the same base technology, whereas NVIDIA traditionally has been more integrated. 

What we like to do is build systems that have GPUs and software, and it's all very tightly integrated and it comes together. And it's sort of the core NVIDIA platform. It's less about licensing and more about actually making systems. 

And so there's been some concern that these things are too different, and maybe ARM's business model was going to run into challenges integrating with NVIDIA. And the future has to be written still, but I would like to say that NVIDIA does not intend to make such an important acquisition and screw it up, right? 

The reason that we're doing this is actually because we see ARM's reach. And ARM's business model is very complementary to what we do and something that we, frankly, would like to benefit from. We would love to increase the ability that we have to integrate with the rest of the world. And I think ARM does that better than anybody. 

So we're very excited about this acquisition. I have to say, it's going to take a while to go through the regulatory approvals. And so until that happens, we're still two separate entities, so it's going to be a while before this actually goes through. 

But you can see where we're thinking about the data center being the fundamental unit of the computing and consisting of three important processors-- CPUs for low latency, GPUs for high throughput, and DPUs for data movement. And we would like to be able to create systems that compose those in new ways that really open up new doors. 

MARK: Yeah, I think it's super exciting, because it's also going to be a great chance for NVIDIA to bring all the work that you've done in ML and AI kind of see what can you do now that you have better integration with ARM. 

BRYAN: That's right. It's very exciting. I was surprised. There had been rumors about it, and I had sort of been hoping that the rumors were true. But I didn't know anything about it until Sunday, when Jensen sent me an email, along with everybody else, to say that we have signed this agreement with ARM, and we're so excited and here's why. 

So it's been an exciting past few days for me to think about what that could mean for me and my work here at NVIDIA. Obviously, I'm trying to figure out new ways of using deep learning to make the world better. And DLSS, for example, was developed in my team, at least the DLSS version 2.0. That was built by my team. 

And I would have so much joy to see DLSS 2.0 being used, for example, in cell phones. That would give me great joy. And right now, DLSS 2.0 is tied to RTX GPUS. But, for example, there could be a future in which RTX software could run on cell phones because of our integration with ARM. And that would give me great joy. 

And to think about the scope of the work that my team has been doing to figure out new ways of using deep learning to make NVIDIA better, with ARM as part of NVIDIA, I think there could be new opportunities that could be really exciting for all of us. 

JON: So you kind of just crushed that hidden question that we typically asks our guests towards the end of our episodes where we ask them, what interesting thing would you like to see or that you do see with the new technologies that NVIDIA has been building as of late? So you kind of killed us there. 

But before I start to ramble on about more things gaming, more things Ampere, RTX30 series, we're coming towards the end of our time for the episode. So before we say goodbye-- a very, very sad goodbye, because I can do this for hours-- is there anything that you would like to mention that you would like our listeners to hear, events coming up, new articles, or any type of content that you would like the listeners to be aware of? 

BRYAN: Well, we do have our GTC conference coming up in early October. I believe it's October 5 through 9. And GTC stands for GPU Technology Conference. We, with the coronavirus, have had to kind of shift around exactly what GTC is and how it works. 

But basically, it's a time for NVIDIA to tell the story of the things that we're building and also for people in our community to tell the story about what they're doing with NVIDIA technology that is helping them solve important problems. 

And so there's usually a lot of really interesting talks about the technology itself. And then sometimes there's some announcements. We are in the middle of Ampere. The Ampere rollout started with A100. Now today, we have the RTX 3080. So we'll see what happens in the future. GTC is a good place to go if you're interested in hearing whatever the latest is. 

MARK: So we'll make sure to include a link in the show notes for people who are interested in that. But I'm sure there will probably be a lot of cool things at that event. So make sure to check that out. Once again, Bryan, thank you so much for coming on. I got most of this. I understand it now, but it's very complicated, but it's very cool to see. 

And like you said, the potentials, especially when working with so many mass devices that are much smaller, I think there is a lot of opportunity there to really get leaps and bounds over where they are now. So it's really cool to see what might be in the future. 

BRYAN: Thank you. I mean, we're very excited about the future here at NVIDIA. I like to say that Jensen Huang is our little time machine. Maybe not so little-- our big time machine. He lives in the future. And the success that NVIDIA is having now is built exactly on his vision and on strategic decisions that he made 15 years ago, for example, building Cuda. 

And Cuda took 15 years to become something that really changed the world. But we made that investment because we had the belief that that's what the world needed, and we wanted to solve the biggest problems that we could. And so a lot of the things we've been talking about today I think relate to that vision. 

And we're very excited about it. We think there's just enormous potential to take it to the next level. And it makes me very excited. That's why I'm here. 

JON: Thanks again for joining us. I'm very excited for the future that NVIDIA is bringing towards the world, not only in March, but obviously today. And I'm letting Jensen know I will be in line waiting for that RTX card this afternoon. So thanks again for joining us. 

BRYAN: That's awesome. I hope you get it. 

MARK: Once again, thank you so much to Bryan for coming out. It was such a fascinating talk, and I learned a lot because this stuff is well beyond me. But it is super, super cool because I never would have thought that ML would kind of be a part of GPU processing, right? 

JON: Right, those two things never occurred to me. And now to see it and kind of hear it described, it's so cool. 

And it's really exciting to see the additional features that are coming out of ML and using the Ampere architecture. I'm super excited because you and I know that we have noise filtering in our calls. 

But to see that it's built in as a feature for your RTX cards, which is super amazing, that's perfect for people who are streaming or people who are using their cards for presentations and filtering out background noise, which I should personally probably do because I live in the heart of New York City. It's kind of cool. And I can't wait to play around with it when I get my hands on one of those cards. 

MARK: Yeah, it's super, super cool, and I love the ecosystem they're kind of building and showing all the different ways that ML can affect these processing things. So, looking forward a lot to hearing what comes out of that over the next few weeks and then, of course, over the next few years as NVIDIA does lots of more cool stuff. 

Well, speaking of ML and Edge, I figured, well, hey, you know what? Zack just did something really cool with ML on the Edge. So for this week's tip of the week-- 

[MUSIC PLAYING] 

--I decided that we should talk to Zack because he's done an amazing demo. And honestly, I can't do this demo justice because it is just too cool for words. But Zack, I would love for you to kind of explain what your demo just showed. 

ZACK: Oh, OK, that's quite the compliments. What the demo showed, it was a virtual reality demo, which immerses the viewer in a fictional factory. And this fictional factory is a fictional company called Hind Cycle, who, through the power of hindsight, decided that it wasn't the best idea just to bury all of the rubbish of the world in landfill. And instead, the factory's goal is to dig up all of the rubbish and classify it properly into recycling bins. 

So you, as the kind of player in this virtual world, are tasked with classifying these by hand initially. But as the story unfolds, you learn some tools and apply some machine learning tools to automate the process using Google Cloud AutoML to build an object detection model. And you harness the Edge model feature to deploy the model in the factory locally to get nice, low latency predictions to classify the garbage. 

MARK: Yeah, and obviously, it's a cool mission, right? Because we all want to help recycling and reduce the amount of trash in the world. But on top of that, it was totally immersive. I absolutely want to do everything I can to get people to actually see this demo. 

But the key part that you said was actually taking the machine learning model and deploying it on the Edge, right? So what does that actually mean? And why is that important? 

ZACK: Yeah, I mean, I'm a huge fan of doing things on the Edge mainly because when I first got into coding, I did stuff with Arduinos and Raspberry Pis, which are the very sort of ubiquitous Edge computing, these small, low power devices. 

Deploying models to the Edge, it comes in super handy. I think there's a couple of key factors, which is, if you don't have access the internet-- that's key one-- then you need to work on the Edge, and you need to work with technologies that support that, things like TensorFlow Lite and even things like TensorFlow JS, which, although it runs in JavaScript, which is a web technology, you can run these web pages locally if you just download the web page. So it also counts as Edge-based models. 

So yeah, if you don't have access to the internet, so in remote scenarios maybe you're working in a factory, which isn't well connected, or maybe even for security reasons, they don't want to send pictures of their factory over the internet, where it might be intercepted or something. 

So yeah, security and remote access, so things like if you're working in wildlife, working maybe camera traps in the wild, they want to run image processing on that, that has to all be done on the Edge. 

And then the other key factor is latency because no matter how fast the models are running in the cloud, you still have that latency of the initial request. And if you're sending quite detailed photos, that latency can be upwards of a second between requests. 

And if you're doing things, especially on a factory floor, where there's a lot of items or products speeding past, you want that latency to be as low as possible, so in the millisecond range. And yeah, tools like TensorFlow Lite help support that. 

MARK: So it totally makes sense that, like you said, for security, for speed, for all those things, we want to have a model on the Edge to give you the best results. How did you actually train the model, though? 

ZACK: Now that I'm more focused on building-- I think more about the ideas and trying to bring the ideas to fruition as fast as possible, any chance I get to, I'll just use AutoML to build the model. Because it will handle things like data augmentation where if you upload 100 images, it will do some fancy tricks to kind of tweeze out maybe 1,000 images from that, like change the rotation and stuff. It'll do all that stuff automatically. 

And doing things like [INAUDIBLE], nobody has time for that. It's kind of a brute force role anytime you're going to do it anyway. So you might as well have the whole process automated. 

So yeah, I used Cloud AutoML Object Detection to train the model. And then when you do that, you can just select a button that says, train an Edge-based model, and it will actually train the model in the end that you can just download. 

MARK: So I mean, I would love to take the power of pictures and put it into a podcast. Obviously, that's not going to work. I guess, that's kind of a video. But at the end of the day, like you said, people can go to AutoML, upload a whole bunch of images, and then choose Edge to export the model. 

ZACK: Exactly. 

MARK: Do you have any tips for anyone who wants to get started trying this out? 

ZACK: If you just care about trying it out, then there is actually a really quick website. It's called Teachable Machine. It's kind of like an AutoML interface, but it's rather than training a TensorFlow Lite model, it also trains TensorFlow JS. So you don't need a whole data set, and you don't need to be comfortable with GCP stuff. 

You can just capture images directly from your webcam and test out training a model. And it will also train an Edge-based model, whereby it's a TensorFlow Lite or TensorFlow JS model. So I think it's called Teachablemachine.withGoogle.com. And that's a really quick way to get up to speed with what the power of Edge-based models. 

But then if you want to do sort of more production grade models, that's where AutoML comes into play, because that does all the other extra stuff, like hyper primary tuning and data augmentation. And if you want to get started with that, then I recommend looking at some AutoML Code Labs. 

Personally, I got up to speed with AutoML because when I went to the AutoML docks, my teammate, Sarah Robinson, has a 3-minute video on how to use it. And that was all the information I needed to learn how to use it because it is pretty straightforward. You upload your images and click Train if you've already got the labels with them. So yeah, I recommend looking at the AutoML docs. There's a video that Sarah made that's really, really good. 

MARK: Awesome. Well, Zack, thank you so much. I'll make sure to put the Teaching Machines link, as well as Sarah's video, in the show notes for people who want to check it out. 

And then, yeah, I mean, it's kind of one of those things, like you said. Just go in, play with it, see what kind of comes out, really get a feel for it, and then come up with these cool ideas like the recycling one you just came up with that just really shows how great it is to have kind of ML on the Edge. 

ZACK: Exactly. 

MARK: All right, Zack, thanks for joining us. 

ZACK: No worries. Thank you very much, Mark. Always a pleasure. 

MARK: All right, well, Jon, what have you been working on? Like I said, it's been a long time. 

JON: Well, I'm still working on Open Match. We went 1.0 in June-- yay. It's very exciting. We're definitely seeing a lot of interest from a lot of studios and a lot of people who want to contribute. I'm currently working on samples from match functions and sending requests from game clients, which are probably some of the highly demanded type of content that people like to see. And I'm just trying to put it out there for the world to play with. 

MARK: Yeah, I love it. It's super cool. And of course, I think there's a couple of people who are already starting to use Open Match in A or AAA game. So it's pretty cool to see, and you know what? I think it makes sense for us to sit down and talk a lot more about Open Match in the future. 

JON: Yeah, hopefully. 

MARK: Yeah, we'll work on that one. But it is super exciting. All right, well, Jon, thank you so much for coming on. Always a pleasure to talk to you. And like I said, I will make sure that we try to get a few more of these in. 

JON: I'm looking forward to it. I'm going to use RTX Voice to make sure that I have no background noise coming from New York City. And we'll see if I can get on more episodes. 

MARK: Oh, that would be super cool. I would love that. And of course, there's no commitment, right? We'll just do the best we can. These are very bizarre times. So we're all just doing what we can. 

JON: But always a pleasure to be on the podcast. 

MARK: Well, thank you to all of our listeners, as always, for joining us today. And we'll see you all next week. Stay safe out there. 

JON: Yep, see you. 

[MUSIC PLAYING] 

People are still working on the Edge and very excited to see that Fastly's offering as an offering in our marketplace. 

MARK: Yeah, I think it's super cool. And maybe that Edge is outside of your house or across the globe. That was too terrible of a pun. Yeah, I felt like it was a little cheesy. All right, we'll just move on.