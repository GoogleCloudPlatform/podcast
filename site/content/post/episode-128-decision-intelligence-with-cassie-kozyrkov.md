+++
audioDuration = "00:39:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.128.mp3"
audioSize = 57444388
categories = ["Machine Learning", "AI", "Decision Intelligence"]
date = "2018-05-23"
description = "Chief Decision Scientist, Cassie Kozyrkov joins Mark and Melanie to explain data science, analytics, machine learning and statistical inference, in relation to decision intelligence."
draft = false
episodeNumber = 128
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Decision Intelligence with Cassie Kozyrkov"
#image="/images/post/Don't_Panic.svg.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/BNvfJvt2iHz"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8llmam/episode_128_decision_intelligence_with_cassie/"
+++

Chief Decision Scientist, [Cassie Kozyrkov](https://twitter.com/quaesita) joins [Mark](https://twitter.com/Neurotic)
and [Melanie](https://twitter.com/nyghtowl) this week to explain data science, analytics, 
machine learning and statistical inference, in relation to decision intelligence.

<!--more-->

##### Cassie Kozyrkov

As Chief Decision Scientist at Google Cloud, [Cassie](https://twitter.com/quaesita) advises leadership teams on decision process, AI strategy, and building data-driven organizations. She works to democratize statistical thinking and machine learning so that everyone - Google, its customers, the world! - can harness the beauty and power of data. She is the innovator behind the practice of Decision Intelligence Engineering at Google and she has personally trained over 15,000 Googlers in machine learning, statistics, and data-driven decision-making. Before her current role, she served in Google's Office of the CTO as Chief Data Scientist. Prior to joining Google, Cassie worked as a data scientist and consultant. She holds degrees in mathematical statistics, economics, psychology, and cognitive neuroscience. When she’s not working, you’re most likely to find Cassie at the theater, in an art museum, exploring the world, or curled up with a good novel.


##### Cool things of the week

- Cloud ML Engine adds Cloud TPU support for training [blog](https://cloud.google.com/blog/big-data/2018/05/cloud-ml-engine-adds-cloud-tpu-support-for-training) [docs](https://cloud.google.com/ml-engine/docs/tensorflow/using-tpus)
- Google Kubernetes Engine 1.10 is generally available and ready for the enterprise [blog](https://cloudplatform.googleblog.com/2018/05/Google-Kubernetes-Engine-1-10-is-generally-available-and-ready-for-the-enterprise.html)
- Introducing ultramem Google Compute Engine machine types [blog](https://cloudplatform.googleblog.com/2018/05/Introducing-ultramem-Google-Compute-Engine-machine-types.html)
- Increase performance while reducing costs with the new App Engine scheduler [blog](https://cloudplatform.googleblog.com/2018/05/Increase-performance-while-reducing-costs-with-the-new-App-Engine-scheduler.html) [docs](https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed#scaling_dynamic_instances)

##### Interview

- Decision Intelligence [wikipedia](https://en.wikipedia.org/wiki/Decision_Intelligence)
- Redhat Summit Keynote [youtube](https://youtu.be/hu2BmE1Wk_Q?t=7097)
- Data Analytics [wikipedia](https://en.wikipedia.org/wiki/Data_analysis)
- Statistical Analysis [wikipedia](https://en.wikipedia.org/wiki/Statistics)
- Machine Learning [wikipedia](https://en.wikipedia.org/wiki/Machine_learning)
- Deep Learning [wikipedia](https://en.wikipedia.org/wiki/Deep_learning)

There are several other episodes that provide insights into data science:

- #31 TensorFlow with Eli Bixby [podcast](https://www.gcppodcast.com/post/episode-31-tensorflow-with-eli-bixby/)
- #84 Kaggle with Wendy Kan [podcast](https://www.gcppodcast.com/post/episode-84-kaggle-with-wendy-kan/)
- #109 Cloud AutoML Vision with Amy Unruh and Sara Robinson [podcast](https://www.gcppodcast.com/post/episode-109-cloud-automl-vision-with-amy-unruh-and-sara-robinson/)
- #113 Open Source TensorFlow with Yifei Feng [podcast](https://www.gcppodcast.com/post/episode-113-open-source-tensorflow-with-yifei-feng/)
- #122 Project Jupyter with Jessica Forde, Yuvi Panda and Chris Holdgraf [podcast](https://www.gcppodcast.com/post/episode-122-project-jupyter-with-jessica-forde-yuvi-panda-and-chris-holdgraf/)

As well as case studies on real world problems:

- #91 The Future of Media with Machine Learning with Amit Pande [podcast](https://www.gcppodcast.com/post/episode-91-the-future-of-media-with-machine-learning-with-amit-pande/)
- #115 Google Play Marketing with Dom Elliott and Stewart Bryson [podcast](https://www.gcppodcast.com/post/episode-115-google-play-marketing-with-dom-elliott-and-stewart-bryson/)

##### Question of the week

How can I secure my Google Cloud Platoform acoount using a YubiKey?

- Securing your Cloud Platform Account with Security Keys [docs](https://cloud.google.com/solutions/securing-gcp-account-security-keys)
- Encrypting Google Application Default and gcloud credentials with GPG SmardCard [blog](https://medium.com/google-cloud/encrypting-google-application-default-and-gcloud-credentials-with-gpg-smardcard-fb6fec5c6e48) 

##### Where can you find us next?

Mark will be speaking at the [Monthly SF Game Development Community](https://www.meetup.com/Monthly-SF-Game-Development-Community/), presenting on
[You Can't Just Add More Servers](https://www.meetup.com/Monthly-SF-Game-Development-Community/events/250559719/) on May the 30th in San Francisco.

Melanie is speaking at a joint [WiMLDS](http://wimlds.org) and [PyLadies](http://www.pyladies.com) event "Paths to Data Science" on June 26th. More details to come.

{{< transcript "MARK: Hi, and welcome to episode number 128 of the weekly Google Cloud Platform podcast. My name is Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you do, Melanie?" >}}

MELANIE: I'm doing good, Mark. How are you doing? 

MARK: I'm doing all right. It's a Monday. 

MELANIE: I know, and I'm back from Mexico City, where I was at the Understanding Risk Forum conference, which was pretty impressive. 

MARK: That was good? 

MELANIE: Yeah, It was really great. 

MARK: That's awesome. 

MELANIE: We talked a lot about disaster recovery, actually, which was really interesting. Yeah, and how to use tech to help with disaster recovery. But it's good to be back. 

MARK: Indeed. This week, we have Cassie Kozyrkov joining us to talk about decision intelligence. It's a super interesting episode, actually. 

MELANIE: Yes, very much so. 

MARK: And we also have cool things of the week, but we finally will finish up with our question of the week, talking about how you can secure your Google Cloud Platform account using a YubiKey, or basically, a physical device. 

MELANIE: I like anything around security. So, as you mentioned, Mark, we're going to start out with the cool things of the week. And this week, we wanted to bring up that TPUs are now available in beta on Cloud Machine Learning Engine. So if you want to play around with the TPU, you don't have to sign up to get approved to have access. You can just go onto the Machine Learning Engine and set that up. We have a link to the information about this on our ShowNets, as always. And one of the links, in particular, will tell you exactly how to set this up, and also, how to use a ResNet model. It gives a nice little example of setting up a ResNet model and running that on the Machine Learning Engine. So check it out. 

MARK: Nice. As per always, I have to talk about Kubernetes. Kubernetes 1.10 is now generally available and ready for the enterprise-- I love that tagline. Not only are you getting the lovely new features of 1.10, there's a bunch of new features for GKE, including shared virtual private clouds-- so VPCs-- I know there's been a lot of requests for those, as well as node order repairs, regional persistent disks, and a few other fun things. So if you're looking to upgrade to 1.10, now you can. 

MELANIE: We also want to mention that the Ultraman Google Compute Engine machine types are now available. And those are basically a family of memory optimized virtual machine instances. And they come with a lot more memory. 

MARK: --a lot. 

MELANIE: What was it? 

MARK: 961 gigabytes. 

MELANIE: 1,922 gigabytes of memory, and the 80-- well, you mentioned the 961 gigabytes of memory and that's in the Ultraman 40. And it goes up to Ultraman 160, and it's got 3,844 gigabytes of memory. It's a lot of memory. 

MARK: --and 160 CPUs. 

MELANIE: And I know from training models in the past, you love memory. If you can run a bunch of stuff in memory, it's pretty fantastic. There's many reasons and many cases out there for using-- 

MARK: Really big, Redis instance, just a really-- 

MELANIE: --really big-- like, loading all the data up-- 

MARK: --one machine-- 

MELANIE: --doing all the calculations-- 

MARK: --it'll be fine. 

MELANIE: It'll be fantastic. 

MARK: Awesome. 

MELANIE: No more parallel computing. Not really, but-- 

MARK: --just bigger machines. Awesome. Finally, there was an article that came out on the 15th of May titled, "Increase Performance While Reducing Costs with the New App Engine Scheduler." what's cool about this is you don't actually have to do anything if you're using App Engine. 

MELANIE: That's even better. 

MARK: It's even better. So basically, the new scheduler improves the number of cold starts by 30%, but also reduces cost by 7%. So, all around goodness. 

MELANIE: Yes. And also, an average of 5% reduction in median and tail request latencies. It's all about saving time. 

MARK: Excellent. 

MELANIE: Saving time is the best. All right, Mark, I think it's time that we go and talk with Cassie. 

MARK: Let's go do that. 

MELANIE: This week, we're excited to have join us, Cassie Kozyrkov, who is one of our teammates. And she's here today to talk to us about decision intelligence. Welcome to the podcast. 

CASSIE: Delighted to be here. 

MELANIE: Well, I'm glad you're here. So, Cassie, I know we've talked a little bit about this, what decision intelligence is. But before we even get into what that is, can you tell us a little bit about yourself? 

CASSIE: Sure, I service chief decision scientist for Google Cloud. And what I'm really passionate about is data science plus decision-making together. And you can think of me as a sort of reformed statistician, if you will. That's my core academic background, supplemented with psychology, economics, and neuroscience. And my experience before this role was consulting, academia, and data science. 

MELANIE: Great. So, why are you passionate about decision-making? 

CASSIE: Well, see, anything we think we know-- our knowledge, our insights, our impressions-- they only really begin to matter when they drive our actions. So, decisions are the way that we interact with the world around us. And while some people might think of decision-making as the way that you meet your goals or beat your competition, there's really so much more to it than that. Businesses and people who don't know how to make decisions well are in danger of having really large negative impact on the world around them. So I think of decision-making as a way in which we can build a better world for all of us. 

MELANIE: That's great. 

MARK: So what exactly is decision intelligence engineering? 

CASSIE: Well, I like to think of it as data science plus-plus, if you will-- or, machine learning plus-plus. It focuses on the applied aspects of data science-- making decisions with data and how to do that, building processes for getting from the conception of an idea to a data science project running reliably and automating decision-making. 

MELANIE: What is data-inspired? What does that mean? 

CASSIE: Data-inspired is a sort of joke about a serious subject. It's a term that we use around Google a lot that has to do with not being data-driven when you think you are. So, let me give you an example. If I tell you that a hotel has a star rating of 4.2, and then I ask you whether or not you'd like to stay at that hotel, I have destroyed your ability to be data driven. You can't use that data-- that 4.2-- to make your decision. That's because if you really wanted to stay at this hotel all along, you will look at that 4.2, and you will say, hey, that's more than 4.0. Sure, I'll go for it. Whereas if, in your heart of hearts, you really wanted to keep looking for a different hotel, you're going to say, what am I? Some kind of animal to stay at a hotel that's got less than 4.5 stars? 

And so, the way that you interact with that information will be driven by the decision you want to make all along, by your unconscious biases, and not by the data itself. So, in order for you to be data driven, the data has to drive the decision. And so, you have to have thought about what it takes to make you want to stay at the hotel versus not, before you see that 4.2. Where was your cutoff? Was it 4.1? Was it 3.5? Commit to that early and upfront, then look at the data-- that's data-driven. 

Whereas data-inspired is when we-- like whales encountering plankton-- swim around in some numbers. And then, we reach some emotional tipping point, and we decide. And sure, there were numbers near that decision somewhere. It's just not the numbers that drove the decision. So that decision would be at best, data-inspired. 

MARK: It sounds like-- as you talk through it-- a lot of that is behavioral sciences as well as data sciences. Why have those two really combined here? 

CASSIE: Yeah, so, I think of decision intelligence engineering as augmenting data science with the behavioral and managerial sciences. And the key here is that in order for us to let the data drive the decision, that decision context has to be framed upfront. So the decision-maker has to understand what it actually takes to get them to want to do one thing versus another. 

And so, that process where they actually think through how they want to make their decision, that process isn't taught in data science. That's not an engineering process. That's taught in behavioral psychology and in economics. That's about incentive design, cost benefit analysis, risk assessment, all of the subjects that are not covered in typical data science courses. 

MELANIE: --but definitely play a role in terms of those types of decisions. So, for the decision-makers-- and I know the decision-makers can span the company-- but especially those who are more on the leadership side of things, how should they approach decision-making so it's data-driven? 

CASSIE: So, they have to frame their decision context carefully and thoughtfully at the beginning. So here's where you want to start. Let's take that hotel example. Your first move is to think about how you would want to make the decision if you could not get any more information. You know nothing about the hotel. Are you going to stay in it by default, or not? So you have to commit to your default action upfront. 

Your next move, then-- and this is where it takes a lot of training and mental flexibility on the part of the decision-maker-- is to think about what information you would want, what information you would use if you could have access to everything that's true about the universe-- you were all-knowing. So you have to think about framing your decision context under full information. Would you want to use the star rating on average? Would you want to know how many bad reviews? Or, have people written about bed bugs? Or, what would you actually want to know about this hotel, in order to make your decision? And where is your cutoff? If you're using that average star's review, if you knew for a fact it was 4.1, what would you do about it? If you knew it was, for a fact, 4.9, what would you do then? Where is your cutoff? and you don't need data to do this, you need imagination. But it's not easy. 

And then, after you've dealt with full information, you ask yourself, can I actually have access to this information I've requested? Or, am I forced to deal with only a partial view of reality-- not the facts I wanted, but a pale shadow of them? If I only have partial information, then I'm making the decision under uncertainty, then it is statistical. And then, what I need to do is I need to realize that I could make a mistake. Uncertainty means, well, mistakes are possible now. And I could leave my default action incorrectly, but I might also stay on my default action incorrectly. 

And then, I have to think about how I would balance the risks there. Which one is worse, and how much worse? How much risk am I willing to accept? And only after we've done all of that can we go to a statistician and have them help us move the rest of the way through making that data-driven decision. 

MELANIE: Data science, I know, plays a role here. How do you define data science? What is that? 

CASSIE: So, a lot of folks think that the areas within data science-- descriptive analytics, statistical inference, or statistics for short, machine learning, and AI-- are defined by the algorithms used in them. But that's not true. If you're a creative, smart data scientist, you realize that you can use any algorithm for any of these sub-disciplines. And so, really, the difference between them is how they are used for decision-making. Data science is just the umbrella term that contains these three things. How they're used for decision-making is what separates them. So let's have a look. 

If we're making no decisions, then we're doing descriptive analytics. Descriptive analytics is all about asking, what is here in my data-- so that either we can make a fact-based decision, or we can just get inspired. If we are making one or a few important decisions under uncertainty-- decisions with no do-overs-- should we launch this product? Yes, or no? Then, that's statistical inference-- statistics for short. 

And if we are stitching a recipe for making a lot of repeated decisions, then that is machine learning. Data science is the umbrella that connects all three of these together. 

MARK: Excellent. So, from a decision intelligence perspective, why should we be excited about machine learning? What does that bring to the table? 

CASSIE: So, machine learning is all about algorithmically creating recipes for making decisions. And we call those recipes models. What that really means is that machine learning, well, it's a thing labeler, essentially-- that's what it is, to put it bluntly. The reason that we should be excited about that approach for thing labeling, as opposed to the traditional one-- where a programmer has to think really hard about the problem and then handcraft the code that it takes us from the inputs to the label that we want-- is that some tasks, it's really, really hard to come up with the instructions for. 

So think about, if you see a picture of an animal, and you just know that it's a cat, what does your brain actually do to those pixels to get that label? It's really hard to describe what you've done. And so, how could you possibly write those instructions explicitly for the computer? Your only hope is to try to get that recipe stitched by giving the computer a whole bunch of examples, and then saying to an algorithm-- a machine learning algorithm-- figure it out. Make that recipe for me because I can't express it. I think of this as giving us the ability to automate the ineffable. And that's why we should really be excited. 

This is a fundamental leap in human progress. This unlocks a whole class of tasks that we couldn't get computers to do because we couldn't explain to the computer how to do them. Now, we explain not with instructions, but with examples. 

MELANIE: I see machine learning always spoken about in conjunction with artificial intelligence. And I know I have my own perspective on this space, but I'd like to hear how you define artificial intelligence. How do you define AI? 

CASSIE: So, I see AI typically spoken about one of two different ways. The first option is to stay true to how that term has been used throughout history. And that means staying true to how it was defined in the '50s. And sometimes, I like to joke that that version is whatever would have impressed folks in the '50s. And whenever we end up building that impressive thing-- maybe our calculators today might have impressed them-- then, we just move the goalposts further and further away. So that version is a little unhelpful for my taste because it's both everything and nothing. 

The other version, what industry is really excited about, everyone wants to get into AI today. That's the version that I prefer as well. And to be more formal, that version is deep learning. That is that part of machine learning where the recipe-- the model-- could not possibly be stitched by a human programmer. There is no way to solve that task, except to go with examples. 

So, a difference-- and to give you a quick example here-- I like wine. And I have, without any kind of data, got little heuristic that goes something like, check the color of the bottle. If it's white, don't bother. If it's red, let's talk-- that kind of heuristic. And I imagine if I use data to try to predict whether I'll like a new bottle of wine-- use machine learning-- I might do a little better than this hacky recipe that I have. 

The point is, my recipe does OK. I can kind of take a stab at that task. That would be a machine learning task. Whereas this version of, look at the image and figure out whether there's a cat in it or not, I have no idea how I would even start expressing that recipe. So that one is AI. I would have to use an algorithm that's flexible enough and sophisticated enough to just figure that out from examples, even though I can't express it. And that would be deep learning. 

MELANIE: I like that you're using recipe, definitely a great way to express it. 

CASSIE: I used to use model, like people in my field do-- model this, model that. And then I got feedback that not everyone actually knows what that word model means. But recipe, I think, we can all get behind. 

MARK: Well, it sounds like, then, that AI is more applicable to decision intelligence to ML? Like, where does AI fit into this? 

CASSIE: So, actually, what I prefer for people to do is to start with what task they want to perform, if they're going to apply it. And it's enough for you to figure out whether or not you need machine learning. And if it so happens that you need the deep learning algorithm, you will end up with an AI application. And if you didn't need it, the right process might have you use a much more lightweight algorithm. But you don't need to know in advance whether it's the AI kind of machine learning. You just need a good process for machine learning. 

MELANIE: And then, off of that note, what are some common mistakes that you're seeing leaders make with AI-- or companies make with AI? 

CASSIE: When we talk about machine learning, I think we do the field a little bit of a disservice because we make it sound like there's only one discipline there, when actually, there are two machine learnings. And they're two completely different disciplines. So maybe we should break them up into research machine learning and applied machine learning. 

And my analogy for this is the humble microwave. If I said that I were a microwave specialist, microwave expert, you might think I'm a person who builds microwaves. Maybe you'd think I know how to innovate with microwaves in kitchens, build recipes involving microwaves. You might not realize which one I am. So these are the two different disciplines. 

The research machine learning is about building the microwaves, the general purpose tools for everyone to use. And see, you need quite a lot of education to get into that game. Because how are you going to build a better algorithm-- or, for that matter, a better microwave-- than the one that exists already, if you have no idea how this one works, you've never seen its wiring diagram? So, for research machine learning, you need a lot of background. It's all about building those algorithms. 

And on the other hand, if you're going to innovate in recipes and actually use these things at scale in an industrial scale kitchen, you need to know a bunch of things, but they're not the same as what you would need in order to build the microwave. I mean, think about this, how does a chef know that the microwave works and is what they need? Certainly, not by reading the wiring diagram. I'm pretty sure that most chefs don't do that. Instead, it's by actually checking that it works and it does what they want it to do. 

And in addition to having a microwave that works, tasting what it outputs, they need to have thought about what they want to serve to their customers. They need to have thought about their ingredients. They have thought about their process and how they've done their taste tests and how they run that whole kitchen. So there's a huge science on that side. 

And the mistake that leaders make is they don't see that there is a difference between these two. And so, what they try to do is they try to build themselves a machine learning team-- an AI team-- and they staff that entirely with researchers. And that is exactly the same as you want to run an industrial scale kitchen, and the only people you hire are the folks who've built microwaves their whole lives. Those folks might not know anything about cooking, might have no empathy for restaurant customers. 

Now, sometimes, businesses luck out. They've hired a bunch of researchers, and things turn out OK. That's a happy accident. That's because in addition to the core skills taught in a PhD, those researchers ended up developing a love for the application. That's a whole other set of skills that they got by accident. 

And as our site reliability folks say at Google, hope is not a strategy. Don't hope that your researchers will just develop that capability out of nowhere. Instead, hire for the applied kitchen. Hire for the end-to-end process. Hire leaders who know their business. Hire engineers who can process and visualize those ingredients-- that data-- well for you. Hire statisticians who can do that taste test and check that it works on the other side. And maybe you don't even need the researchers because academia and Google Cloud and other places like that are building those microwaves for you. So, as long as you know where to go and shop for one, and take it and try it out, maybe you don't need to reinvent the wheel, build that thing from scratch yourselves. So, leaders, please don't start by hiring the researcher only and hoping that everything's going to be great. 

MELANIE: I like that you brought up end-to-end. It's the common major challenge trying to figure out how to actually make the full pipeline work. But all these kitchen and food analogies are making me hungry, Mark. 

MARK: So, we talked a little about common mistakes. But where, then, should leaders actually start? What's a great starting point? 

CASSIE: Before you even hire any one leaders, you have a job to do. This process should always start with you. And in machine learning, the first thing you need to think about is, what outputs is your system going to make? Machine learning is essentially a thing labeler. So what do you need labeled? And if you can't even think of what you need labeled, diving right into machine learning is a little too soon for you. Maybe you want to do some descriptive analytics and hopefully, we'll get a chance to chat about that soon. 

But imagine in this wine example, you want to build yourself a wine classifier. Well, what do you want this system to output for you? Maybe I'll like it, or I won't like it on a new bottle of wine. You have to be able to say what those outputs should be. And then, you need to think about how you would measure success and what mistakes are possible. And there are really a lot of options here, decision-makers. Maybe you're after accuracy. All mistakes are equally bad, as far as you're concerned. Missing out on a good bottle or getting a bad bottle, same to you. 

But maybe you are a starving grad student. I've been there, and money is really precious. And you're quite happy to miss out on good wines. But if the system says, buy this one, you don't want it to waste your time. Well, that's a different metric from accuracy. That one is called precision. 

Maybe, on the other hand, you are now past your graduate school years. And now, you're really worried about missing out on the good, beautiful wines you would have liked. Well, now, you're after recall, which is a different thing entirely. Of all the beautiful ones that were there, how many did it return correctly for me? So you have to think about how you want to measure success. And then, what you need to do-- going back to being data-driven-- you need to make sure that you can be data-driven at your launch/don't launch decision at the end. So you need to commit to your minimum performance criterion. 

If you picked accuracy, where's your minimum cutoff for letting the system see the light of day? Is it 80% accuracy? Is it 70%? You must commit upfront. And what you'll realize, leaders, you can do all of this without any data, without any employees, without any equations or textbooks. This is just do you meditating in a closet. And so, everyone who's listening here, you can now start thinking about what would you label, if you had an awesome thing labeler? 

And so, you could all get started on this. And if anyone asks you, are you doing machine learning? You can-- with a completely clear conscience-- say absolutely, yes, I am. Because you are doing the right first step in the applied process. 

MELANIE: Off that note, is there any additional advice that you would have, especially for the data science teams? 

CASSIE: So, I find myself repeating three words over and over so it's become a sort of slogan, and that is, split your data. Data splitting is a way that you can have your cake and eat it too in data science. See, when we talked about data-driven, and we saw that if you've already seen the data, then at best, your decision based on that data will be data inspired. It won't actually be driven by the data because if you use the data to decide what question to ask of the data, well, you see what you get. 

The trouble is, you can't use the same data set for both inspiration and rigorous data-driven decision-making. So what's the quick hack? Well, you've got one data set. You need more than one data set. So turn one data set into more than one, into an exploratory piece and a test piece. That lets you have your cake and eat it too. Because now, what you do is you give the exploratory piece to everyone in the organization, no matter their educational level. And everyone can go do some descriptive analytics on it. And the 10 second lecture on descriptive analytics is plot all the things, but stay skeptical. 

So you don't need a whole lot of educational background, just have a look at what's in the data. And if you can't look at all of it, look at the first five entries-- that's better than nothing. Just get inspired. The only mistake you can make during exploring data is taking yourself too seriously. We humans are really good at finding patterns. We'll find Elvis in a piece of toast. And we shouldn't take that seriously. 

And so, here, you have your entire organization looking for tasty tidbits of insight in this exploratory set. What they're sort of doing is baiting a hook that they're going to fling into the ocean where decision-makers swim. They're going to try to get decision-makers to react to that information and make a decision. And decision-makers will, for the most part, completely ignore that plot and make their decision some other way. That's fine, that's par for the course. But every now and then, that data insight makes the decision-maker want to bite and take an action. 

And if that's not such a very important decision, well, fling that fish back into the ocean and make the decision based on inspiration-- that's fine. We're allowed to make decisions based on intuition, as long as we're honest with ourselves about it. 

But if that's a really important decision, then the decision-maker might not want to run headlong into the war based on Elvis found in a slice of toast. They want to make sure that this is something worth taking seriously. They want to approach the decision rigorously. Well, then, they can use that inspiration to frame their decision context. And that's really easy to do because they knew what they were doing before the insight came in. They know how they thought about changing their minds in response to the data. They know what it is about it that made them want to change their minds. 

And then, they can go to the other data set and have their experts check that it's actually worth taking that action, that we should take it seriously. And statistics, really, is the science of changing your mind. So you'll bring the statistician in and see if it's worth actually reacting to that piece of insight. So split your data. 

Now, why haven't people been doing this all along? So, until fairly recently, it was hard enough to scrape together enough data for one respectably sized data set, never mind more than one. But now, as the world is generating more and more data, most of our listeners, I think, have no excuse not to split their data. You've got so much. Don't be stingy. Make two data sets. Use one for inspiration, and use the other one for making decisions well. 

MARK: So, what would you say to data scientists who are worried about exploring these data sets, but they don't necessarily have that deep educational background? What do you suggest for those sort of people? 

CASSIE: Well, look, exploration is supposed to be sloppy. We don't want to come to conclusions here. We don't want to take ourselves too seriously. Again, we're looking at that piece of toast, and we're seeing if we find Elvis in it or not. This isn't the stage where we get rigorous. And so, actually, I'd like to rather say to data scientists who think you need a deep educational background here to please calm down a little bit and not bully everyone else. The skills that you need for doing this bit are exactly the same skills that you use for looking at photographs. 

And by the way, photographs are stored as data. They're not stored as this beautiful visual thing that you can make sense of. And when you take those numbers that photographs are stored as, and you visualize them with appropriate software-- I don't know, Paint or Google Photos, or what have you-- then you can begin to get inspired. But you must never take that photograph too seriously. 

If you've just walked down the street and you find some photograph lying around, don't go learning all kinds of things about the world based on it. You don't know anything about where it came from. The best that you can do is say, this is what is here. And so, as long as everyone has the discipline to plot it and stick to, well, what we learned is that this is what's here, and maybe we might be inspired, we shouldn't take ourselves too seriously-- let's not come to conclusions until we've gone to the other data set-- then it's fine. Everyone should be allowed in and empowered to just go for it. You already have the right skills. What you're doing with digital photographs is what you should be doing with all the rest of the data sets. 

Now, funny thing is, though, data scientists may have a habit-- many of them. Now, I'm saying "they". I should say "we" because I was guilty of this when I just finished my statistics graduate training. We spent a long time in school, getting a gold star every time that we used the most complicated tool in our arsenal. And so when we leave, after years and years of that reinforcement, our comfort zone, our natural behavior is to keep doing the most sophisticated thing possible-- the most rigorous thing possible. And we even kid ourselves that we are saving, rescuing decision-makers in some way. Because decision-makers don't even know that they need this. 

Well, look, in the exploratory phase, taking ourselves too seriously has no place. So don't be rigorous for its own sake there. Take it lightly. Do things quickly. And when we're moving from the exploratory phase to the data-driven decision making phase in the other data set, that should be kicked off by the decision-maker. And the decision-maker is the one who's had the training to think about, well, how scared should we be? How should we trade risk? How important is this? How much rigor is required? Because they don't teach that in a data science, computer science, statistics training program. So everyone should be allowed in. And don't do rigor for its own sake. Decision-makers should kick off the rigor. 

MELANIE: Great I know we're getting a little short on time. But I wanted to give us the chance to dive into just a couple of things. One question that definitely comes to mind-- people are interested in decision intelligence. What are some of the resources? Where do you recommend that they go to, to start exploring this space? 

CASSIE: So, decision intelligence engineering is a practice that we've put a lot of effort into developing at Google. And we've got a lot of training and resources internally. But there's not a lot out there externally. When I went about getting my own training, I had to have full immersion in a whole lot of separate degrees. I had to study statistics separately from psychology, separately from economics, separately from neuroscience. That's an awful lot of schooling time. Sometimes, I wonder about my life choices. But we can't expect-- 

MELANIE: Don't we all? 

CASSIE: Right. We can't expect everyone out there who's interested in this to go and pursue full degrees on a whole bunch of different disciplines. So, since there's not that much out there, and we've been developing it in here, we've decided to start sharing a lot of resources with the world-- sharing what we know. So stay tuned. Watch this space. There'll be a lot of information about decision intelligence coming soon. 

MARK: Follow you on Twitter? 

CASSIE: Sure, if you like. 

MELANIE: Was there anything else, actually, you did want to say, in terms of decision intelligence, decision-making that we haven't had a chance to cover? You've had some wonderful analogies, but was there anything else you wanted to touch on? 

CASSIE: Yes. I want to talk very briefly about some challenges in AI. When we move from research machine learning to applied machine learning as our focus, we move from, how does the microwave work, so we can build a better one, to, does it work so that I can serve my customers well and solve my business problems? Now, how does it work sounds easy. But it isn't because there are three things we have to deal with there. What does it mean to work? What is the "it" that we're trying to do? And that is on decision-makers. 

Then, the does it work, that is on the statisticians working with the decision-makers actually making sure that it delivers. And the last bit, the sort of hidden bit, is that in any kitchen-- data science kitchen as well-- your ingredients matter. On what ingredients does it work? If you put bad ingredients, bad data in, you shouldn't expect good results out on the other side. What I liked, say, about machine learning, is that the world represented by your training data is the only world that you can expect to succeed in. 

Think of your training data little bit like textbooks that your student might study from. Maybe you want to teach your student calculus. You give them a bunch of textbooks to learn from. The examples in those textbooks-- the world represented by them-- is the only thing that student is going to learn from that process. So just because you have data, just because you have textbooks, doesn't mean your student's going to learn calculus. Open that textbook and check that what's in there is calculus, and not-- I don't know, Japanese/English vocabulary pairs. Because your student's going to find some patterns in there, sure, and stitch a recipe that connects Japanese with English. It just won't be relevant to your task. So your ingredients really matter. So, please make sure that you have thought about what it is, that you have checked that it does work before you release it, and that you've thought really carefully about your ingredients, and split your data. 

MELANIE: That's great. Well, thank you, Cassie. I appreciate you joining us again on the podcast, especially to give us this robust perspective on decision intelligence. Thank you again. 

CASSIE: Thanks so much. It was a lot of fun to be here. 

MARK: Thank you. 

MELANIE: Thank you again, Cassie, for coming on the show and talking to us about decision intelligence. 

MARK: Yeah, really interesting conversation, super interested to hear more about the research that you're doing in this space. 

MELANIE: Agreed. All right, Mark, how can I secure my GCP account using a YubiKey? 

MARK: So, I'm sure many of us-- but if you haven't, that's totally fine-- have heard of, say, things like two factor authentication. So you want to have a password for something, like a thing you know. And you want to have a thing you have, like, say, a-- 

MELANIE: --through your email. Or sometimes, it's a text or it's a phone call. But it's your password in combination with something else. 

MARK: Yeah. So, there is also are these devices like security keys, or you may have heard YubiKeys, for physical devices that can be used as a two factor authentication. Basically, it's that thing you have. 

MELANIE: Some of them are shaped almost like a thumb drive. But they're not a thumb drive in terms of holding actual data on them, but they're a way of proving that you exist and that you are next to the device that you're using. 

MARK: What you can do is basically, you can secure your Google Cloud account that gives you access to Google Cloud Platform using all these actual options. So you can actually do it through-- you have two factor authentication using text messages as a Google Authenticator, which is a rolling number that you can use as a two factor authentication you have on your Android and iOS devices, as well as security keys themselves. We'll have a link in the show notes describing how you can do that. 

But what that ends up happening is when you, say, do a GCloud auth login, so you're doing like GCloud authentication, or you're trying to do something through the console, it asks you for you two factor auth when you log in, so that your authentication has that extra layer of security. 

MELANIE: Yes. And YubiKeys, in particular, are up and coming in the security field. So seen as more secure in comparison to, like, receiving a text. So if you have the opportunity, use that. And I know you can use that on a number of different sites that you can log into, like GitHub, for example. You should explore it-- your Gmail-- but definitely look at that for the Google Cloud. 

Something else we wanted to give a shout out to is one of our community members actually wrote a blog post-- not exactly the same thing, but still interesting, where he wanted to experiment with encrypting his GCloud credentials on his laptop using a YubiKey. And this was from Salman Rashid. And he even says this in the post, which is kind of great, is that this is not really a practical use of it. But if you have application credentials on your laptop that you wanted to try encrypting with the YubiKey or Smart Card, the GPG smart card is the YubiKey, is my understanding, or close enough. 

Anyway, he takes you through steps on how to do that encryption, and tells you where to find the different files, and what files to change. And we'll include that link for those who might be curious to explore this and experiment and play around with it, and get more comfortable with YubiKeys. 

MARK: Yeah, it's pretty neat. He really does, he kind of hacks GCloud, so that anytime he does a GCloud operation, he has to have his YubiKey to make sure it works. 

MELANIE: One thing to stress that he points out in his article, and you definitely want to do this, is make copies and back up the actual access tokens. Because you will not want to lose those if, for some reason your encryption works, but there is something that gets broken along the way. 

MARK: Use at your own risk. 

MELANIE: Exactly, exactly. And again, not necessarily something that you need to do, but also, just sort of a fun experimental thing to play with. 

MARK: Yeah. 

MELANIE: Yeah. All right, Mark, you going to go anywhere in the next month, couple of months? 

MARK: So, I will be presenting at the monthly San Francisco game development community at the meetup here in San Francisco. So I will be doing that on the 30th of May during my talk called, You Can't Just Add Moresoes. 

MELANIE: Yes, you can't. 

MARK: You can't. 

MELANIE: Well, that's great. You going to be speaking every month on this? 

MARK: No. 

MELANIE: Just next month? 

MARK: Just next month. 

MELANIE: Got it. 

MARK: What are you up to? 

MELANIE: Next month, on June 26, I will be speaking at an event that's being co-hosted by the Women and Machine Learning and Data Science and Pi Ladies at DoorDash. So we will be doing a couple of talks on careers in data science. 

MARK: Nice. 

MELANIE: Yeah. 

MARK: Excellent. Well, Melanie, thank you so much for hanging out with me for yet another podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 