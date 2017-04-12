+++
audioDuration = "00:40:19"
audioFile = "Google.Cloud.Platform.Podcast.Episode.71.mp3"
audioSize = 58077628
categories = ["Machine Learning", "Tensorflow"]
date = "2017-04-05T11:34:59-07:00"
description = "One of our dear Developer Advocates, Yufeng Guo joins us to talk about the Cloud Machine Learning Engine."
draft = false
episodeNumber = 71
hosts = ["Francesc Campoy Flores","Mark Mandel"]
title = "Cloud Machine Learning Engine with Yufeng Guo"
image="/images/icons/ml/Cloud-Machine-Learning.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/2W71BmtbR8r"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/63mwec/episode_71_cloud_machine_learning_engine_with/"
+++

One of our dear Developer Advocates, [Yufeng Guo](https://twitter.com/yufengg),
joins your co-hosts,
[Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc),
to talk about the [Cloud Machine Learning Engine](https://cloud.google.com/ml-engine/).

Cloud Machine Learning Engine offers a managed platform for training and serving Tensorflow models.

<!--more-->

##### About Yufeng Guo

Yufeng is a Developer Advocate for the Google Cloud Platform, where he is trying to make machine learning more understandable and usable for all.
He enjoys hearing about new and interesting applications of machine learning,
share your use case with him on Twitter [@YufengG](https://twitter.com/YufengG).

##### Cool things of the week

Kubernetes 1.6:

- Kubernetes 1.6: Multi-user, Multi-workloads at Scale [blog post](http://blog.kubernetes.io/2017/03/kubernetes-1.6-multi-user-multi-workloads-at-scale.html)
- Five Days of Kubernetes 1.6 [blog post](http://blog.kubernetes.io/2017/03/five-days-of-kubernetes-1.6.html)

Recapping Google Next '17 by Kalev Leetaru:

- Deep Learning As A Service [Forbes](http://www.forbes.com/sites/kalevleetaru/2017/03/24/recapping-google-next-2017-deep-learning-as-a-service/)
- Making Security [Forbes](http://www.forbes.com/sites/kalevleetaru/2017/03/20/recapping-google-next-17-making-security-seamless/)
- The Great Cloud Shift From Renting Hardware To Services And Experts [Forbes](http://www.forbes.com/sites/kalevleetaru/2017/03/17/recapping-google-next-17-the-great-cloud-shift-from-renting-hardware-to-services-and-experts/)

##### Interview

- Tensorflow [homepage](https://www.tensorflow.org)
- On-device machine learning: TensorFlow on Android (Google Cloud Next '17) [YouTube](https://youtu.be/EnFyneRScQ8)
- TensorFlow and Deep Learning without a PhD [part 1](https://www.youtube.com/watch?v=u4alGiomYP4) and [part 2](https://www.youtube.com/watch?v=fTUwdXUFfI8)
- Cloud Machine Learning Engine [docs](https://cloud.google.com/ml-engine/docs/)
- Huggable or not? Build smart applications with your new superpower: cloud machine learning [YouTube](https://www.youtube.com/watch?v=Ja2hxBAwG_0)
- Kaggle [homepage](https://www.kaggle.com/)

<div style="text-align: center">
  <a href="https://cloud.google.com/ml-engine/"><img src="/images/icons/ml/Cloud-Machine-Learning.png" style="margin: auto;"></a>
   <p style="font-size:0.8em">Cloud Machine Learning Engine has a cool logo<p>
</div>

##### Question of the week

What are API keys and when should I use them?

- Why and When to use API Keys [docs](https://cloud.google.com/endpoints/docs/when-why-api-key)

##### Where can you find us next?

Mark is at [Vancouver Unity Games Meetup](https://www.meetup.com/UnityGames/events/238574781/) 
and on Thursday he'll be at [Polyglot Vancouver Meetup](https://www.meetup.com/PolyglotVancouver/events/238312555/), then on to [East Coast Games Conference](http://ecgconf.com/) and [Vector](http://vectorconf.com/) in April.

Francesc will be presenting at [Gophercon China](http://www.bagevent.com/event/357764) in April, and will then head off to New York!

Then he'll be back to San Francisco for [GopherFest](https://www.meetup.com/golangsf/events/238748981/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 71 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy and I'm here with my colleague Mark Mandel. Hey Mark, how are you doing?" >}}
MARK: I'm good, thanks, Francesc. How are you doing today? 

FRANCESC: Pretty good. Pretty happy. Feeling lonely. Where are you? 

MARK: I am in Vancouver. It's cold here. I left sunny San Francisco to come to Vancouver. 

FRANCESC: Yeah. Yeah, that will teach you. Anyway, today we're going to have a pretty cool episode. We have one of our dear developer advocates from our team at Google Cloud Platform, Yufeng Guo, to talk about the cloud machine learning engine. 

MARK: Yeah, he's going to come have a chat with us about TensorFlow, machine learning, how to do it in the cloud. How can you use it? What is this crazy thing? 

FRANCESC: Yeah. It's a very interesting topic. And the cool thing is that basically makes TensorFlow basically as a service. You don't have to install anything, it's just there. So it's very, very useful. 

MARK: Yeah, and if you have huge data sets, it's very, very useful. Oh yeah, especially for that, yeah. Awesome. And then after that we're going to have our question of the week, which I think you're going to know a whole lot about. We're going to talk about API keys and Cloud Endpoints. When do I need them? When do I want them? Yep, it's a pretty common question, so hopefully will be pretty useful for lots of people. But before that I think we have today a bunch of different cool things of the week, the first one coming from you, you either the Kubernetes 1.6. And I don't know much about what's new on Kubernetes 1.6, so why don't you tell us a little bit? 

MARK: Sweet. So Kubernetes 1.6-- I'm a huge Kubernetes fan, as many people know. There is a huge amount of stuff going on in 1.6, which is great. Huge, huge scale increase, which I think is really cool. We're up from 2,000 Nodes supports to 5,000 Nodes and 150,000 Nodes supports. 

Overview at a high level-- there's new stuff around security. There's a whole bunch of different scheduling features, storage provision, and more. There's some pretty cool stuff going on. 

If you want to know more about it, go to the Kubernetes blog. They're doing five days of Kubernetes 1.6. They're up to day three, currently, of all deep dives into all the new stuff. They've covered dynamic provisioning, some scalability updates, advance scheduling. Day four and five, don't know what's coming, but pretty excited to see what's coming. 

FRANCESC: Cool. Maybe we should have someone from the Kubernetes team to tell us a little bit about all the new things. 

MARK: Absolutely, we should totally do that. 

FRANCESC: And we have, then, one more cool thing. I'm going to go with that one, which is-- I'm a big fan of Google App Engine. And one of the flavors of App Engine is App Engine flexible environment. And the new thing is that is now available in Europe, west region. So if you've ever tried to run Node or Ruby or any of those languages that run on App Engine flex, so now if you're one of those people that run Ruby or Node and you want to run them on App Engine flex, you can now run them in Europe west, which means that if you have customers in there, you have a way shorter latency, which is always a nice thing to have. 

MARK: Awesome. Now, super excited to have that in the region. I'm sure there's plenty of people who are in Europe and surrounding areas who are very excited as well. Cool. 

So finally, cool things of the week-- just want to say a quick shout out to one of the gentlemen who joined us on the podcast at the Community Summit for Next. I'm probably going to massacre his name-- Kalev Leetaru-- I think I got that vaguely right. He wrote a series of articles for "Forbes" magazine, now "Forbes Online," talking about Google Cloud Next, his experiences, and what his views and his viewpoints are. It's fairly long, but there's some really cool and interesting content in there where he talks about security scale, learning as a service-- much like what we're talking about today-- lots of really good stuff. 

FRANCESC: Yeah and we'll have links to every single one of the three articles that he wrote-- nonetheless, three articles-- on the show notes. So if you're interested in going there, just go check it out and have a long and nice read. 

MARK: Excellent. So why don't we go talk to Yufeng. 

FRANCESC: I am very happy today to welcome to the podcast one more of our dear fellow developer advocates. Yufeng, well, how are you doing? 

YUFENG: I'm great, thank you. 

FRANCESC: And we have you here to talk about many things, but mostly Machine Learning. But before we start doing that, why don't you tell us a little bit about yourself and what you do at Google. 

YUFENG: Sure. So I'm, like you guys, a developer advocate on the Google Cloud team. And lately, I've been focusing on a lot of Machine Learning stuff. And what that means is on the cloud side, I've been talking about and playing with the Cloud Machine Learning engine, which recently went to GA. And also as a corollary to that, a lot of work with TensorFlow. 

MARK: Awesome. So we said a little products there, but this is probably a very big question, but what is Machine Learning? 

YUFENG: Yeah. So Machine Learning, the "what is it?" question is definitely a big one that everybody is wondering right now. And in general, my short version of what is Machine Learning is-- I define it with five or six words-- it's using examples to answer questions, or answering questions using many examples. So I think that's five words. 

So then all-- and I've distilled it down to that, so all the words are important. Using-- you want to answer questions. We're not just using Machine Learning for the sake of it. The purpose of it is to answer the questions that you have. And then we want to use examples to do that. So that means you need to have examples to show your system, and you need lots of them. So [INAUDIBLE] questions-- 

FRANCESC: So instead of basically writing an algorithm, what you do is, you just throw data at something, like this is how you're supposed to do it, and the machine learns. That's the Machine Learning part of it. 

YUFENG: Right. And another way to visualize that is to think of traditional programming as you writing a bunch of rules. You can think of them all as the flow of a river. So the information flows from the top of your program downwards, goes to different functions, flows through if statements and for loops, and then the output of your various functions in your program is something. 

So a Machine Learning algorithm is doing the same thing with data. You're writing-- you're creating some structure, and all of this data is flowing through and all this math is happening. And then on the other side of that, there's some output. But there is this additional step beforehand where you need to write code to make that something where the data flows through. So you need to make the structures that the data will flow through in the first place, whereas with normal programming, that is your code. 

FRANCESC: Interesting. So given all of that context, where is TensorFlow? 

YUFENG: Right. So TensorFlow, then, is an open-source library that Google released a little over a year ago in November of 2015. And it's an open-source library written, at its core, in C++ and C, and has a Python API, and now a couple of APIs in other languages. 

FRANCESC: There's a Go binding. 

YUFENG: Yes. And so that's a library for facilitating the creation of the structures that we were talking about earlier that the data would flow through. We call them graphs. 

MARK: Cool. So say I'm like, yes, Machine Learning and TensorFlow, but I don't know where to apply. What is some common or regular-type things that people tend to do with Machine Learning that people could then apply themselves? 

YUFENG: So that two or three big categories of use cases that we're seeing emerge is image classification data, structured data classification or regression, and finally, something to the effect of time series. So whether it's streaming log data or videos or audio that the time series where you care about the previous data points. Those are the three broad categories that we're seeing. 

MARK: So when you say classification, what does that actually mean though, just so people understand 100%? 

YUFENG: Right. So classification is where you put the data into different buckets, different categories, if you will. And you could have as few as two categories. And those two could even be, is it X or is it not X? It doesn't necessarily have to be X and Y. It could be like, I'm recognizing these pictures as apples or other. Doesn't necessarily have to be apples or bananas. 

And so the classification has also emerged as this place where you end up being able to put a lot of problem sets into, like you can fit a lot of problems into the domain of classification, quote unquote, because you can also go from not just two classes, but many, many classes. So you can, say, have 100 classes, or even 1,000 classes. So then you begin to get into a situation where you're able to bucket things into many, many different buckets. And that can also be very powerful. 

FRANCESC: Could you give an example of when you're saying 1,000 buckets. What kind of application would do that? 

YUFENG: So one classic example is the Image Net competition, which is an international Machine Learning competition for image recognition. So they provide 1,000 categories that you, as the Machine Learning scientist or the competitor, need to create a Machine Learning model which will classify the input data, the pictures, into the correct one of these 1,000 categories. So if you get a picture of a specific breed of dog, that might be a particular category, or bucket, in those thousands. 

FRANCESC: Interesting. So what about when you have something that is not really-- I'd say it's probably not a classification problem, because rather than having a bunch of buckets, however many you might have, it is something continuous, like-- I don't know-- it's something. You're trying to predict a value and it's a float, so there's infinite, technically. Well, technically not, but whatever. 

YUFENG: Absolutely. And so that is what is typically referred to as regression. So that's the other side of this particular subset of problems where you are trying to predict the value. One example that treads the line is, let's say you had a Machine Learning model that took a bunch of inputs, such as your diet, when you went to sleep-- there's lots of these quantified self-tracking variables-- and trying to predict your age. 

FRANCESC: OK, I thought you were going to say, trying to predict the day you die, because [INAUDIBLE] pages. 

YUFENG: It's the same thing. 

FRANCESC: There's more pages that do that, that's why. 

YUFENG: I'm pretty sure the day you die, that's probably just a random generator-- X time in the future. So with that, what's tricky about it is, if you just output a number, like an integer number, do you count that as regression or classification? Because yeah, there are a lot of ages-- 1 through something on the order of 100-- but as we said, you could pretty easily classify between 100 different things. And maybe you say, well, I don't think I can be as precise as to say, your age is of 35.7 or something like that. 

But at the same time, maybe you don't even want to be as specific as saying it's 35. So then you get into saying bucketing into different age groups and saying, OK, you're in the 18 to 25 age group. And you can see that and think about surveys and things like that. And they operate in a similar way. 

FRANCESC: So basically, there's classification problems, there's regression problems, and then something in the middle where you could choose going one way or the other. Out of all of those problems treatable with TensorFlow. 

YUFENG: Absolutely, absolutely. TensorFlow is really meant to be a general purpose Machine Learning library. And it's actually, in some ways, broader than that, because all it's really doing is creating this graph that we were talking about earlier, where all the numbers flow through, and you can create that to do anything you want. You can have it do math, just like addition or multiplication, and then compute other more complicated math things that are not Machine Learning. 

FRANCESC: Interesting. 

YUFENG: That being said, the high-level tooling around it, that says, just make this thing for me. That's all geared toward Machine Learning. But if you go into it and you use some of the low-level tooling where you can really control the graph and build it from scratch or piece by piece, you can build anything you want. 

MARK: Cool. So I've got a question. So I'm actually curious. So we've seen examples, like you said, where image classification is a classification problem. But Francesc talked about Martin's talk last episode in that he was generating stuff out of models that he'd put TensorFlow to, basically making things sound like Shakespeare or Shakespearean-like text. Where does that sit where it's like you're generating stuff to seem like similar other things. Is that predictive, or what's the deal there? 

YUFENG: Yeah, absolutely. So these generative models is a newish class of Machine Learning algorithm, Machine Learning models. And part of it is mapped to the traditional things that we were talking about, where you have this model. In this particular case, you're taking all the works of Shakespeare and running through the model so that the output is this model that can recognize whether something is or isn't Shakespeare so that you could give it some new text, and then it will run it through. And then on the other side, it will say, yes, this is Shakespeare, or no, it's not Shakespeare. 

Now, in doing that, you've basically created a little system that can also generate Shakespeare in that it knows what Shakespeare is like. It's encoded into that model. So then if you massage it in the right way, you can also have it output what it thinks Shakespeare would be. 

And another way to think about that or design that would be to say, give it Shakespeare and have it learn this is more of that sequencing model that we were talking about, the third class where you're looking at a sequence of words. So with Shakespeare, you have any writing that's a sequence of words. So you teach it to say, OK, I know that after word A, usually there's either words B1, B2, or B3. And then it's like C1, C2, or-- these words, and so these are the possible sequences. 

So given some input, it can continue. And that's the exact same idea and basis for some of the audio models that we see, like the music-related ones, where you can play the first few notes and then it picks up for you. It's just analyzing the data that's embedded in a music signal, whether that's just straight audio or something like MIDI. 

MARK: All right, cool. So we've talked about TensorFlow through the Open Source Project. Let's talk about Cloud Machine Learning Engine and what is that thing. So can you tell us what's the difference, or what is the Cloud Machine Learning Engine from a high level? 

YUFENG: So the Cloud Machine Learning Engine is, really, at its core, managed infrastructure for running TensorFlow on the Google Cloud Platform. And so we'll break down each of those points. The part about it being managed infrastructure, the difference there is, it's not that you need to spin up some virtual machines, allocate some storage, or persistent disk, and then tell it, oh, here's where I want you to run the things. It will do that for you. It will spin up the machines, it will make sure the right libraries are installed, et cetera. 

And so you have this managed infrastructure, and then you, then, just have to give it your TensorFlow code. And we have the G Cloud command line tool that will take care of that for you as well. The code goes up, and then the machines are automatically created for you, spun up, and your code is loaded in, and then it runs it for you. 

And then when it's done, that output goes to Google Cloud Storage where your data was as well. And so you can define all of those parameters, including how many machines, how powerful you want those machines to be, whether those machines should have GPU attached to them, et cetera. But at the end of the day, the code that you write, the Machine Learning code, is just pure TensorFlow code. 

FRANCESC: Cool. So you mentioned the output. What is the output? Is that the prediction that you make, or what is it? 

YUFENG: Usually in the first half of the work that you do, which is your training, the output of that is the model itself. So that's just a file, or a few files, that together, define that graph of, basically, that mathematical model that can take an input and generate the desired output, usually a prediction. 

FRANCESC: OK, so that's what all the people also got a neural network itself? Is that what we're talking about? 

YUFENG: Exactly. So in the case of a neural network, that file would just be lots and lots of numbers, and it's packed down into a binary format. And you can pass in a picture, and it'll tell you is it a kitten or a puppy. 

FRANCESC: Cool. 

YUFENG: And so that first step is just half of the Machine Learning Engine in that, that's the training half. And the other half of Machine Learning is the answering of questions. And so to facilitate that, you have the prediction service. So that's what I view as another large chunk of it that is often overlooked, because so much emphasis is placed on the training, because it is the more challenging half by and large. 

But after you've gathered all your data, cleaned it, picked the right model, tuned its parameters, spent who knows how long training it and waiting for it to finish, the last thing you want to be doing is then going and looking up on Stack Overflow, how exactly do I spin up a web server to wrap this model to scale that server logging quotas, all that good stuff? Especially for someone who is well-versed in Machine Learning-- that tends to be your data scientists or Machine Learning researcher-- they are oftentimes not as experienced in managing infrastructure. They might not-- because they're spending all their time in Machine Learning land, they're not over here learning about Kubernetes and Docker and scalable systems, and things like that. So the prediction service helps you with that. It says, just give us the model, that folder with the couple files that was output from your training-- 

MARK: And it gives you a rest endpoint or something like that? 

YUFENG: Exactly. It gives you a scalable rest endpoint that just is deployed for you. And it also takes care of versioning so that you can say, OK, I'm going to make a model, my puppies versus kittens model, and this is going to be V1. And then later, when you turn a new model, you can say, this is V2. And you'll have both of them, and you can switch between them as which one's default. 

MARK: It's like App Engine and Endpoints merged together for Machine Learning. 

FRANCESC: Yeah, that's pretty cool. 

YUFENG: Yeah. So I think that that's a really neat feature in that those two steps are decoupled thanks to TensorFlow, in that you have this model file output, which means that if you do local training, you output that same exact file because Cloud Machine Learning Engine is just running TensorFlow. The outputs of training in the cloud and outputs of training on your laptop are pretty much the same. It's just a question of, do you want it to be distributed? Do you want it to be faster? And so that output, then, you can just push or upload those files to the cloud yourself and then put it to the prediction engine. So you could train locally and predict in a scalable way on the cloud. 

FRANCESC: So I see the value of serving those models, that prediction, on the cloud because you want people to access it. What is the benefit of training on the cloud rather than training on your own laptop? 

YUFENG: That's a really good question. So when training on the cloud, there are a couple of reasons you might want to do it on both sides. If you're just working with a small data set and you're OK with the performance on your laptop, then by all means, train your laptop, train on your desktop, train on your local GPU cluster if you have one. But when you get into situations where your data sizes are too big to be stored on your one machine-- and that that can be a number of different thresholds, because if I just have my laptop here and my laptop maybe just has one terabyte of disk. 

And so something less than a terabyte but more than a couple hundred gigs, I probably don't want to be wrangling that around. Maybe what I'll do, though, is take a section. I'll take a representative sample of that data, and put that on my laptop, and train that locally so I can get the code working correctly because that's a nice and fast iteration cycle. 

FRANCESC: So it's like your development cycle is on the computer, but then when you actually train, you will not turn on your computer because it's too slow, or-- 

YUFENG: So usually, yeah, if your data set is really quite large, it can be too slow. 

MARK: What does large mean? Can you give us a rule of thumb? I know, obviously, ballpark figures-ish, but where would you say that line would be in terms of moving-- 

FRANCESC: How many kittens versus puppies are we talking about here? 

YUFENG: Yeah, because-- and before I try to come up with a number here, there's so many other parameters that play around that data because it depends on how big your network is that you're trying to train, how big are these images that you're pushing in, whether or not you're going to downsample them to a lower resolution will also make a big difference, and then finally, just your general hardware and ops configurations around transfer speed. So a lot of times, you end up with situations where you're I/O bound, sometimes it's compute bound, and then sometimes it's like memory bound, just shuffling things around. There are situations where people have had to move to distributed CPUs because the data could not fit on the 6 gigs or 12 gigs of RAM on the GPU card. 

FRANCESC: Oh, wow. OK. 

YUFENG: They had to hold all that at once. I'm not saying the whole data set was bigger than that because, of course, a lot of times they are, but-- 

MARK: For the computation, yeah. 

YUFENG: One particular path should hold over 6 or 12 gigs of data. It's like, that's crazy. 

FRANCESC: So you didn't answer the question. 

[LAUGHTER] 

YUFENG: Nicely done. 

FRANCESC: From your-- very good, very developer advocate. So given that one concrete example that you've done, how big was the data and how long it took to train on your laptop, or how long it took to train on Cloud ML Engine? 

YUFENG: So one good example of that was when I was training a transfer learning model for-- actually, I was running through one of our code labs. It was for an image model for recognizing five different types of flowers. 

FRANCESC: I need more than I can-- 

[LAUGHTER] 

YUFENG: They were common flowers, like roses and tulips and lilies, and things like that. So that data set, I believe, it was a couple hundred thousand-- 

FRANCESC: Images? 

YUFENG: Images, I think they were images. And training locally on my CPU, it was taking on the order of half an hour. So it was getting to the point where I was like, well, I don't really want to be taking this-- I can't use my browser, it's slow, it's burning through my battery, the fan is spinning. And so pushing that to the cloud, I was able-- it was coming down to-- not including spin-up time. 

And that's the other thing we'll get into. It was taking about 15-ish minutes, so about half. But it was not that powerful of a configuration. I think it was just basically a fancy desktop. And so moving from a laptop to a fancy desktop, you've got some boost, but nothing crazy. I think the crazy scaling factors happen when you have truly tremendous data sets, maybe on the order of-- 

FRANCESC: Terabytes. 

YUFENG: Yeah, possibly terabytes, like hundreds of gigs to multiple terabytes worth of data and up. And the data size is a really hard number to really just go against because if you have image data, it's bigger. If you have logs files, it'll be smaller. 

But you can fit a lot of log files in 10,000 JPEGs. And then those log files are rich data. And so pushing that all through, and if it's a complex model, can also take a long time. So it's not a easy rule of thumb. 

FRANCESC: Cool. So I'm curious about-- so TensorFlow, what it is is an open-source library, right? 

YUFENG: Yeah. 

FRANCESC: It is not the only one, I'm assuming. Could you give it a little bit of a comparison? Why would you use TensorFlow rather than something else? And I personally don't know any other, so I'm going to let you answer that question completely. 

YUFENG: So with TensorFlow, the advantages there, I think, are primarily around the ability to go from research to production easily. In the past, and in a lot of other fields as well where you have research and production as separate parts of the industry, you end up with a situation where the research is doing things in one language or writing their own custom frameworks, and then to implement it to make it run fast, you'd rewrite everything in C++ or Java. And what's great about TensorFlow is that the underlying implementation is already in C++, but you get to work on it via Python, or in your case, Go. 

FRANCESC: I have not tried it yet, but yeah. 

YUFENG: So that allows you to have flexibility while maintaining high performance. And one of the things in the TensorFlow 1.0 release, which came out in February 15th, is the release of XLA, which is still experimental. And it stands for Accelerated Linear Algebra. And I know everybody loves talking about linear algebra, but in a nutshell, what it does is, it takes your trained graph or model and think about compiling that down. So instead of representing it with C++, it actually represents it with machine code. So it makes it-- 

MARK: Like another layer. 

YUFENG: Exactly, or another layer of optimization. So instead of running a compiler on your code, think about compiling your code, and now it's really fast. What we're going to do is, we're going to compile the graph which, in our analogy, is the code. That's what the data is flowing through. We'll compile that down to machine code, or something like machine code, so that the data can run through even faster. 

MARK: Cool. That is pretty amazing. That is very cool. I'm curious now, so as well, what's been the most interesting or crazy or wonderful Machine Learning thing that you've seen people do with either TensorFlow or Machine Learning Engine? 

FRANCESC: I have an answer to that question too, but you go first. 

YUFENG: Sounds good. So I think one of the most relevant in terms of real-world applications of Machine Learning that I've seen is the recent research that came out around skin cancer and diabetic retinopathy detection. And there's many groups doing similar work for other areas of medicine as well, because these are areas where you have a task that is highly sophisticated, but well-defined and repeatable, and right now is limited to the domain of trained experts who are human, and thus subject to tiredness, sleepiness, grumpiness, things like that. And so having a machine that can at least do that initial first pass for you is great. 

It's like you don't have a traffic cop standing at every single intersection waiting for someone to run a red light, you have a camera. It will flag them for you. And then maybe you have a human at the end of the chain that says, oh no, that was fine, he was turning on a red, or something like that. But it helps you give that first pass. 

And so in the example with skin cancer, you have very good detection rates that are actually comparable to professionals. But even if you didn't, even for domains where it's not perfect, I think it would be interesting to see. Because image recognition and computer vision are kind of more advanced than some other areas of Machine Learning right now, it would be really interesting to see those applications in places where it's not as perfect, as long as you can have a human in the chain, because if it's not perfect and you're making a lot of mistakes, then it can lead to a bad experience. 

MARK: I guess it also gets interesting, too, where personnel on ground is probably less easy to get to or able to reach to. And so if you can make that first pass in a way that can be automated or something like that-- 

FRANCESC: Yeah, I can imagine if you're able to create basically a mobile app that anywhere in the world can use, like if you're a doctor that doesn't have access to that training, that is pretty amazing. 

YUFENG: Absolutely. And in certain countries around the world, there are certain types of doctors that are in super high demand. And you have just lines going down the street around the corner. And they only come every once in a while and they can't even see everybody in time. And then you can imagine the quality of care in those kinds of scenarios, where you're just churning through everybody is not going to be very high. 

MARK: Cool. You had something. What was it Francesc? 

FRANCESC: Yeah. My answer is way more lame, but my answer is actually-- one of our colleagues, she used to be a developer advocate-- Julia Ferraioli. She gave a really good talk on huggable or not, which basically was a machine-- it was a neural network trained with a bunch of images and telling that either it was huggable, like you should hug it, or not. And the coolest part is it shows an octopus, like you should not hug an octopus. And then it shows a little plush. It's like you should definitely hug the plush. 

And then it shows a plush octopus. And the Machine Learning algorithm was actually able to tell that, yeah, you should definitely hug a octopus plush. Oh, that is really cool. So yeah, it's like it's not saving lives, but I thought it was pretty cool. 

YUFENG: Yeah, I mean blending this knowledge and generalizing two examples that it hasn't seen before is one of the strengths of Machine Learning. Especially in the area of deep learning, you're building something that is generalizing beyond just memorizing things. Yeah. 

FRANCESC: So we're running out of time, and I'd like to give you the opportunity to give us anything else that you have. Is there anything else that you'd like to mention? 

YUFENG: We recently hired Fei-Fei Li from Stanford, and she is just awesome. I believe the exact quote from Next was, she is another badass woman. 

FRANCESC: She is a badass woman, absolutely. 

YUFENG: And so between that and the recent acquisition of Kaggle, it really feels like there's this gathering of forces. And within Google and within the community, that is propelling the Machine Learning community forward and creating an ecosystem where people can get started quickly, can run their systems cheaply, fast, and have the support that they need to grow and interact with their peers. So the Kaggle acquisition really helps further a platform that has already gained a lot of traction. Kaggle is definitely the place for data scientists and data sets to live. And having that be in a position to continue to grow and be funded and not go away is really fantastic. 

FRANCESC: Since you mentioned them, if anyone from Kaggle wants to come to the podcast, they're definitely invited. And if, [INAUDIBLE], you are listening to this-- 

YUFENG: You are definitely, definitely invited. 

FRANCESC: You're definitely, definitely invited. So please, please-- you know how to reach us. So thank you so much for your time, Yufeng. That was a super interesting conversation. 

YUFENG: Yeah, thank you, Francesc, Mark. This was great. 

FRANCESC: Thanks. Thanks so much to Yufeng for taking the time to explain all the cool things that you can do with Cloud Machine Learning Engine. That's the fourth time I said it. I'm still having issue with the Engine part of it. 

I knew a lot about TensorFlow. I've been watching some of the talks that we said that Martin Gorner gave at Cloud Next amazing talks. And it was a very interesting thing to add a little bit of, OK, so on top of that, what is Cloud Machine Learning Engine? 

MARK: Absolutely, totally agreed. I don't get to dabble very much for the ML stuff, so super happy to have Yufeng on to help educate us and talk to us all about the whole platform. 

FRANCESC: Cool So I think it's time to go to our question of the week. 

MARK: Yeah, so I think this is an interesting one, and I think probably right up your alley. So when talking about REST Endpoints, often I hear about these things called API keys. So what are API keys, and how can I use them on Cloud Endpoints? What would I want to use them for and why would I use them? 

FRANCESC: OK, so the first part of the question is, what is an API key? An API key is a key that you use to authorize some API call. And the important thing is that this authorization, not really authentication. 

These are not really secure. You should not use them as a security measure, really, because they're actually easy to intercept. Once they're intercepted, they do not have any expiration time. So it's like once you have it, you have it forever, unless it's, of course, banned, which means that for some things, they're very useful, because they're very easy to use. 

Basically, in general, you just add them as a parameter to a query. Very often you will see them on the URL. They can be very useful for servers-to-servers authentication, for instance, specifically when one of the services is not really behaving in the name of a user, but just as a project. 

You have a project acting as a project itself. That is one of the ways to do it, very simple to do, and especially when you actually trust the whole chain and it is a chain over HTTPS or something where, basically, the content is not shown to everyone looking. The other option is to use authentication tokens, which is OAuth 2, stuff like that, which is way more advanced, but also, it's harder to maintain. It's harder to use. I don't know if you've implemented OAuth 2 on a server. 

MARK: No. 

FRANCESC: It is not fun. It is really not fun. It is the kind of thing that makes you love Firebase authentications, stuff like that, really. 

So when to use API keys? Well, the answer is pretty simple. The answer is whenever you authenticating a project-- not a user, because you don't want to have an API key per user. 

It's per project per group of an app, for instance. If you have a mobile app, you might want to use an API key there, and also, when you're able to make sure that that is actually hidden enough or secured enough that people will not be able to find it easy. And no matter when you're using an API key, those API keys should never be the only security measure that you have. 

MARK: All right, cool. So it sounds like API keys are just a nice, light way to give people access to APIs, but also be able to determine who is accessing your APIs, and on what of behalf they are accessing your APIs. 

FRANCESC: Yeah, basically. So if you want to control security, like hardcore security, it's not the way to do it. But if you want to control things like quotas or basically having a better way of tracking who is using what, something that you can grab from the logs and stuff like that, API keys are great for that. 

MARK: Excellent. And so Cloud Endpoints, they give you an easy way to set up API keys, is that right? 

FRANCESC: Oh, yes, it's super simple. So the cool thing is that, basically, once you deploy the Cloud Endpoints API on your project, then only the API keys created from a project that have access to that API are valid, which means that, then, what you can do is, you create your API, you deploy it, and then you create as many API keys as you want from your project directly. And then you can share those, which is very simple. 

Or even better, you share your API with whoever you want to give access to your API. Then they activate their API or their project like you would activate any other API like, let's say, Computer Engine or Kubernetes Container Engine. All of those are different APIs. 

Just go to the API Manager, you activate it, and then you can create a new API from that project directly. So it's basically you are able to expose an API as if you were Google, basically. And anyone that has access to that API can create an API key and get direct access to your API. 

MARK: Cool. Sounds great. I can't wait to get started with API keys. 

FRANCESC: Great. So I think it's time to finish the episode. But before we say goodbye, you are, right now, in Canada. What are you up to and what are you up to after? 

MARK: So I'm in Canada. By the time this episode airs, I will have already spoken at the Unity meetup, but I will be doing the Polyglot Vancouver meetup the day after. So I'll be talking about gRPC and Kubernetes. 

After that, I am doing an east coast game conference and then vector conference talking about gaming stuff with Kubernetes. Shortly after that, I want to highlight doing a Game Jam for Playcrafting with Extra Life. So it's a two-weekend special event to help run raise money for UCSF children's hospitals. 

FRANCESC: Nice. 

MARK: So it's going to be on May 5th and 7th here in San Francisco. The URL will be in the show notes. What are you up to? 

FRANCESC: I'm basically on my way to China. I'm leaving next week for GopherCon China in Shanghai. It's going to be pretty amazing. 

I'm going to be also organizing a couple of meetups. Then after that, I will be in New York. And I actually got confirmed that I will be speaking at the Google Developer Group meetup in New York with our dear friend, Brett. 

MARK: Nice. 

FRANCESC: Yeah, we're going to be having a serverless meetup. He will be talking about Cloud Functions and I will be talking about Cloud Endpoints. 

MARK: Excellent. 

FRANCESC: And Go, obviously. 

MARK: Obviously. 

FRANCESC: And then on May 15th, we actually have a pretty big event here in San Francisco. It's Gopherfest 2017, so it's going to be a lot of really cool Go talks. And we're going to be hosting at the Launch Pad here near the Google office in San Francisco. 

We'll have a link in the show notes, so you can RSVP. I'm pretty sure the RSVP list is going to go full really fast. So if you're interested in it, go find it right now. 

MARK: Sounds good. Let me know if you can get me a spot, maybe I'll come along. 

FRANCESC: Yeah, I don't think so. 

MARK: OK. awesome. Francesc, thank you so much for yet another week and yet another wonderful episode. 

FRANCESC: Thank you so much, Mark, and have lots of fun in Canada. 

MARK: I will. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}