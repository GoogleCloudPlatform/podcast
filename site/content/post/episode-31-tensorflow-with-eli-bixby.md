+++
audioDuration = "00:31:44"
audioFile = "Google.Cloud.Platform.Podcast.Episode.31.mp3"
audioSize = 45747421
categories = ["TensorFlow", "Machine Learning"]
date = "2016-06-22T01:07:49Z"
description = "Eli Bixby, Developer Programs Engineer at Google, tells us all about TensorFlow and its applications."
draft = false
episodeNumber = 31
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "TensorFlow with Eli Bixby"
externalimage = "https://www.tensorflow.org/images/tf_logo_transp.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/HXEjUNKvmJA"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4pbdti/episode_31_tensorflow_with_eli_bixby/"
+++

Eli Bixby, Developer Programs Engineer at Google, tells your cohosts
[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
all about [TensorFlow](https://www.tensorflow.org/) and its applications.
Do you want to know what neural networks are? Why does TensorFlow exists? How to get
started with it? We cover that and more in our thirsty first episode.

<!--more-->

##### About Eli

Eli is a Developer Programs Engineer at Google. He joined in 2014 and currently develops on Google
Cloud Platform's machine learning and big data offerings, Tensorflow in particular. Eli is an
all-purpose nerd, having dabbled in several research areas, including biophysics, algorithmic game
theory, and computational biology, before a recent dive into machine learning.

##### Cool thing of the week

- New Google Cloud Platform Education Grants offer free credits to students [announcement](https://cloudplatform.googleblog.com/2016/06/new-Google-Cloud-Platform-Education-Grants-offer-free-credits-to-students.html)

##### Interview

- TensorFlow [homepage](https://www.tensorflow.org/)

<div style="width:100%; text-align: center">
  <img src="https://www.tensorflow.org/images/tf_logo_transp.png" width="50%">
</div>

- Artificial Neural Network [wikipedia](https://en.wikipedia.org/wiki/Artificial_neural_network)
- Tensors [wikipedia](https://en.wikipedia.org/wiki/Tensor)
- Google supercharges machine learning tasks with TPU custom chip [blog](https://cloudplatform.googleblog.com/2016/05/Google-supercharges-machine-learning-tasks-with-custom-chip.html)
- TensorFlow Serving [GitHub](https://github.com/tensorflow/serving)
- Diving into Machine Learning through TensorFlow - PyCon 2016 [video](https://www.youtube.com/watch?v=GZBIPwdGtkk)
- TensorFlow workshop materials [GitHub](https://github.com/amygdala/tensorflow-workshop)
- TensorFlow tutorials [docs](https://www.tensorflow.org/tutorials)
- Generative Adversarial Networks [research paper](http://arxiv.org/abs/1406.2661)
- DCGAN in Tensorflow [GitHub](https://github.com/carpedm20/DCGAN-tensorflow)

##### Question of the week

- Offline Media Import to Google Cloud Storage [docs](https://cloud.google.com/storage/docs/offline-media-import-export)
- Google Cloud Interconnect [docs](https://cloud.google.com/interconnect/docs)

{{< transcript "FRANCESC: Hi, and welcome to episode number 31 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with Mark Mandel, my colleague. How are you doing, Mark?">}}
MARK: I'm doing well, Francesc. How are you doing? 

FRANCESC: I'm pretty well. I'm very happy with the interview we're going to be having today with one of our colleagues working here in the San Francisco office, Eli Bixby. 

MARK: Yeah. It's going to be a really interesting discussion on TensorFlow. We're going to go quite deep on it. I think it's going to be fun. 

FRANCESC: Yep. You're going to learn about, among other things, why is it called TensorFlow? That, I didn't know actually. 

MARK: No, no. 

FRANCESC: I learned something today. And after that, we're going to be discussing-- we're going to be talking about big data, but not how to process it, but like how to upload really big data. 

MARK: Yeah. What do you do when you have lots of data that you want to give to Google Cloud? 

FRANCESC: Yeah. So we're going to be talking about the couple of options that we have available for you if you have like, I don't know, terabytes or petabytes or whatever. 

MARK: Yeah, lots and lots of data. But first, we've got our Cool Thing of the Week. 

FRANCESC: Yeah, and it is very cool this week. 

MARK: Yeah, so we just-- literally just, as we were recording this-- announced the Google Cloud Platform Education Grants, or, for those less Australian, grants. 

FRANCESC: Thank you. 

MARK: This is a pretty cool endeavor. I'm very excited about it. Basically, currently, it only applies to the United States. But we're hoping to expand it internationally soon, too. 

FRANCESC: Soon, yeah. 

MARK: Yes, soon. But basically, if you're looking to use Google Cloud Platform in your educational institution, and you want to have free Cloud Credits-- say that three times quickly-- free Cloud Credits for your students to be able to use the resources at Google Cloud, we now offer you the ability to apply for that. 

FRANCESC: And it is very cool because so far, we've been doing it in some specific cases. And actually, we have a link to the blog post where we announced the educational program. But one of the links is actually Cloud4Cancer. And I was reading about it. I thought it was very cool. 

It was basically like a neural network-- and if you don't know what a neural network is, don't worry. We're going to be talking about it in like a minute. But basically a neural network that allows doctors to upload the properties of a melanoma and detect if it's malign or not. So it basically is trying to provide very good, very high-quality information. I think that they mention they have like 99.9% accuracy for doctors all around the world, which is pretty awesome. And it runs for free on App Engine. 

MARK: That's pretty cool. 

FRANCESC: Yeah, that is pretty awesome. 

MARK: There's a couple other things that I quite like about this. One, it's not just a, hey, here's some stuff. Do with it as you will. There's also a documentation for students and teachers that's provided. So there's some extra resources you have to help teach this to the students, as well as that our faculty sponsors of technology focus groups, such as Women Techmakers, Google Developer groups, et cetera, et cetera, are also able to apply as well. 

FRANCESC: Yep. No, it is pretty awesome. And for those that don't have access to it yet, don't forget that if you want to give it a try, there's also the free trial program. So you have, I think it's three months. During three months, you have-- 

MARK: 60 days, $300 I think it was, last time I looked at it. 

FRANCESC: Yeah, $300, 60 days, which is not three months. It is two months. Check it out. And if you're interested, we'll have a link on the show notes so you can apply directly and maybe be one of the lucky first ones to get our grants. 

MARK: That'd be great. Awesome. Well, why don't we go have a chat with Eli and talk about TensorFlow? 

FRANCESC: Cool. Let's start with him. 

MARK: Sounds good. 

Today we are joined by Eli Bixby. He is happily agreed to grace us with his presence. How are you doing today, Eli? 

ELI: I'm doing great. 

MARK: Eli, why don't you tell us a little about who you are and what you do here Google? 

ELI: Great, so I'm a developer programs engineer at Google. I work on Google Cloud Platform, and specifically, the big data and machine learning offerings. 

FRANCESC: Cool. So what is a developer programs engineer in like one sentence? 

ELI: Yeah, that's a hard task, though I'll give it a shot. 

FRANCESC: We could do an episode on that in one day. 

ELI: So we write code to teach users how to use the platform. So this code may end up in blog posts, in tutorials and workshops, or it may end up on a website. 

FRANCESC: Cool. So we have you here today because we wanted to discuss a little bit about TensorFlow. But before we start talking about TensorFlow, for all the audience that have ever done any machine learning, what is-- TensorFlow, I've heard is neural networks. What is a neural network? 

ELI: So TensorFlow is mainly for neural networks. A neural network in general is-- you can think of it sort of like is a directed graph where the nodes are simply like arithmetic activations of their input. So there are some nodes upstream. They feed into a downstream node. And the node has a single output based on the upstream nodes. 

And it was sort of discovered a long time ago, like in the '70s, that you could use these. And you could use back propagation, which basically says, I want the top layer of nodes to have this certain-- or I want the output layer to have a certain output when the top layer has a certain input. And you can use back propagation to adjust the function that each node operates on to line up with these outputs, and that you can model very complex functions with many layers of neural networks. 

MARK: Where did this idea come from. Do you know any of the history of how it came about? 

ELI: I'm not sure. I think it was actually originally sort of a theoretical attempt to model human cognition, which is why it's neural networks. I'm not sure that that is part of its usage now. But I think that's where the name came from. 

FRANCESC: Cool. So just to try to understand a bit better what neural networks are, basically, at the end of the day, what you have is a bunch of nodes, and every node is like a function where you get a bunch of parameters in an output? 

ELI: Yeah. And the nodes are actually really a helpful abstraction for us to think about it. But it's actually, TensorFlow is named TensorFlow because it's tensors flowing along a graph. And really, you think of it as the layers are single entities that are tensor transformations from one to the next layer. And so often, we talk about layers and the activation function of a layer of the tensor graph, rather than individual nodes. 

FRANCESC: Cool. So now we know what TensorFlow comes from, the name. Why is TensorFlow a thing? 

ELI: So TensorFlow is the successor to Google's previous machine learning framework. And really, the reason it's open sourced is we believe that there is going to be a lot of innovation in machine learning. And we think it's important for these tools to sort of be standardized and for work to be shared among the machine learning community. And so having a common framework for expressing machine learning algorithms is really important. 

So previously, you'd see papers. And you'd see people kind of informally describe the algorithm that they were writing about. But now, you can actually publish the code. And it's another step towards reproducible research. It allows people to collaborate more easily, all the great things we love about open source. 

MARK: So you touched on it a little bit when you started talking about tensors flowing through a graph. But like can we break that down even further? What's a tensor? How does this work? Give us sort of like a base level understanding. 

ELI: Yeah, so mathematicians are going to hate me for this definition. But a tensor is a multi-dimensional matrix. So you think of a vector as just a list of numbers, so like an array in Python. And a matrix, then, this is a list of lists of numbers. And so a vector is a one-dimensional tensor. A matrix is a two-dimensional tensor. And then a matrix of vectors is a three-dimensional tensor. And you can expand that. And you get this concept of shape, which is a vector that represents the shape of a tensor. 

And so for the users who have used NumPy before, this should be a very familiar concept. TensorFlow actually follows the exact same syntax that NumPy does for defining these things. 

MARK: And so how does that correlate into like how we do machine learning? Why is that important? 

ELI: Yeah, so it's really important, in particular, for deep learning because a lot of these algorithms can be thought of as a series of tensor computations. And there's a lot of optimization. You can also do restricting the data that's flowing along your graph to tensors. 

So if you compare it with something like Apache Beam or Spark where there's sort of arbitrary data flowing along your computation graph and you can define your own serialization or deserialization, TensorFlow, by contrast, is all in memory, and calls out to very fast C implementations of these tensor operations. And obviously, that allows you to make-- plug into like Cuda and use GPUs really easily. So restricting it to tensors gives us a lot of functionality. 

FRANCESC: Interesting. So now, you actually mentioned GPUs, because I'm assuming that GPUs are better suited for this kind of computations? But we also announced these other things, TPUs. 

ELI: Yeah, so the strength of GPUs actually ties a lot into why we're seeing a resurgence in neural networks. The techniques have been around for a long time. And now, we have this commodity hardware that's just fantastic for neural networks. And we're seeing neural networks be extremely useful in all of these applications. And so we're seeing a huge growth. And we're actually getting to the point where it makes sense to actually have ASICs for TensorFlow. So that's what a TPU is. 

MARK: What's an ASIC? 

ELI: An ASIC is a-- 

FRANCESC: Thank you. 

ELI: I think the acronym is application-specific integrated chip. So it's a custom piece of hardware that-- and the optimization you're looking for, right, because we have these big data centers, the optimization you're looking for is performance per watt. So they allow you to do the operations that are common in machine learning at a lower power. And that means you get a higher throughput because you can run a lot more of them for the same amount of electricity. 

FRANCESC: Cool. So it sounds like TensorFlow is kind of a complicated and pretty complex framework. Does that the mean that to get started with it, I need to understand what tensors and monads are? 

ELI: No. So the actual goal is that developers can start writing machine learning algorithms and start incorporating machine learning easily into their code. And that's a huge goal of TensorFlow. 

So TensorFlow, itself, there's a lot you can do with it. You can write custom operations. You can fiddle around with the internals. But we try to provide a high-level interface for people who don't necessarily want to do that. And we're actually looking at building more layers on top of TensorFlow to make it easier for developers to get started with it. So I think it's publicly available, but not-- I think it's like whatever the open source version of Alpha would be considered. 

We have a package called Wide and Deep, which provides a higher level abstraction on top of TensorFlow that allows you to say, I have sparse features. Learn these sparse features. Or like, I have dense features. Learn these dense features. And so it's very-- all you really have to know about is what your data looks like. 

FRANCESC: Cool. So how do I know if TensorFlow is good for me? What are the typical use cases where the answer is, oh, yeah, TensorFlow. 

ELI: Yeah, so we hope to expand it to a lot of different machine learning applications. I think, in particular, if you have a problem that's well suited to deep learning, TensorFlow is a great solution for you. Again, deep learning algorithms, they require a huge amount of data to train, more so than many other machine learning algorithms. So you need to have that at least somewhat available to you. 

MARK: What like a good heuristic for a large amount of data? 

ELI: I think sort of like the ballpark lower level is maybe like 100,000 labeled is common, for example, for text or image. 

FRANCESC: Cool. So you mentioned this, labeled, does that mean that your data needs to be labeled? Actually, what does it mean to be labeled? And do you need that? 

ELI: So there's-- we commonly break down usage of deep learning into two different parts, training and inference. And so training is you're running this TensorFlow graph on your labeled data and using it to generate the proper weights. And then inference is you have this unlabeled data where you want to predict the label. And so you're giving that to the trained TensorFlow graph, and it's spinning out a probability for the label. 

MARK: So when you say label, it's kind of like, all right, so I've got a bunch of data wherein-- I don't know. Pick an example. 

FRANCESC: You have a bunch of emails and you need to know if it's spam or not. 

MARK: Yeah, that works. That's great. So you know whether it's spam, and so you can feed that through the system and be like, yes, these are spam. These aren't. And it can be like, yay, now I'm learning. And then at the end, when you're doing your inference, you can hand it an email, and it will tell you whether or not it's spam. And I guess, some degree of certainty? 

ELI: Yeah, email's a perfect example because then you have a bunch of users, essentially, providing you with labels. They click the Report Spam button and, bam, you have another labeled piece of data. And there's increasing levels of sophistication. But that's sort of the basics is like, I have this label. I want to predict the label of something else. So maybe you have a confidence cut off. And you're like, oh, my model is not very confident about this piece of spam. So I'm going to surface it to the user. 

FRANCESC: You were mentioning something before, which I thought it was very cool. It was the one with Reddit, subreddits. 

ELI: Yeah, so we gave a talk at OSCON and PyCon where we made a little example algorithm based on some colleague's work with text classification. And we used it to classify Reddit post titles by subreddit. And we got, I think a pretty good accuracy, not state of the art. But I think it was mid '90s. And these are topics that are very well suited because there's large data sets available. 

FRANCESC: So let's talk about that specific example. How does it look for a developer to do that? I imagine they'd have all the titles and what subreddit they belong to. What is the next step? 

ELI: So there's going to be like a preprocessing set up. And we frequently use Apache Beam to preprocess our data. And so then, once you have your data in sort of this nice vector format, you can go and grab theirs and try to adapt for your use case one of the many open source. There's many models already out there. 

So frequently, you'll try to figure out, so, what category does my problem fit into? It's, OK, it's a text classification problem. Oh, great someone's already written a tax classification model. And then you'll try training that model on your data with your preprocessed data. And then you'll do some testing and some validation and say, OK, this worked. This didn't work. Let me tinker around with the model a little bit until you get sort of an accuracy you're happy with. 

MARK: Let's take an even further step back. OK, so you say model. What is that input and output look like? What's a model? How does that work together? 

ELI: So TensorFlow graphs are defined with this Python code. So TensorFlow is like a Python package. You write, sort of, operations. And an operation will typically have arguments that are previous operations you define. So in this way, you're defining like the directed graph. 

So there's two parts. There's the graph definition. And then there's the training step where you're running through basically a loop saying, OK, grab a batch of my training data. Run it through the graph. It'll calculate gradients. It'll update the operations on each node, like we were talking about. And then, you know, do that until we're satisfied with whatever accuracy we're getting or whatever loss we're getting, whatever function we've decided is our metric. And then that will constitute a model. 

And then there are also lots of sort of [? OPsier ?] packages that we've open sourced. So for example, TensorFlow Serving allows you to serve models, so do inference. That's the other half. So you'll export a model, which is exporting these weights and this graph, to a file. And then TensorFlow Serving can load it for you and then provides you an API, a gRPC API where you can, say, you can call it with a vector. And it'll return back the output vector that you'd expect, maybe the labels. 

MARK: So if I was taking, say, like a Reddit title, and I'm going to convert that into a vector, what does that vector look like? 

ELI: So I talked a little bit about before, without explaining myself, about sparse data and dense data. So maybe a Reddit title is a list of vectors where each vector is your entire vocabulary, so maybe like 40,000 words in the English language or whatever. And there's a one somewhere in there corresponding to the word, like cat this is a one. And maybe cat is like the 30,250th word, so like the 30,250th index in your vector is a one, and everything else is zeros. So that's a sparse data. 

Frequently, in deep learning, we'll do embeddings. So we'll try to learn denser representations of data because the neural nets tend to handle these denser representations better. And this is something we talked about in our workshop. Words actually lend themselves very well to this dense embedding. So you may actually already have a model. So there may be, if you look at-- so we open sourced Syntax Net, for example, which is a piece of Google's natural language processing written in TensorFlow. 

FRANCESC: But wasn't it called Parsey McParsey. 

ELI: Yeah, so there's a subtle difference here. We open source two things. We open source Syntax Net, which is the graph definition. And then we open sourced a trained model, so including the weights and all the trained bits, called Parsey McParseface, which was trained on a subset of the data that we have. 

And so if you look at Syntax Net, it's actually a bunch of trained pieces, a bunch of different neural nets that feed into each other. So there's this sense of composability, which brings me back to embedding. So you may have a model that somebody else has already written for generating word embeddings where you feed in your one hot vector, and it gives you back a denser representation of words. So maybe what you're learning is a mapping from these word embeddings to subreddit classification. 

And so that's part of what we hope to spur by this ecosystem, is like this sense of composability, and other people taking their models and using them as pieces of their own models, and then providing those models as pieces for other people to use, and just sort of building this whole ecosystem. 

FRANCESC: Cool. So we've been talking about models and that, basically, you're going to be training some [INAUDIBLE] where you create that model, and then that model is a valuable piece of information that you can use. How big is a model? 

ELI: Oh, man. I think it varies a huge amount. I'm not even sure how I can give a ballpark. I think it depends a huge amount on the variables, like the size. So if we had a vocabulary of 50 words and we are doing-- or not a vocabulary of 50 words. If we were doing an embedding in a vector of 50 length, that's going to be a much smaller file than an embedding of a vector of 100 length. 

FRANCESC: Are we talking gigabytes here? Terabytes? 

ELI: I think we can be talking gigabytes, smaller models, I think, maybe under that, but definitely. I think probably not a terabyte. 

FRANCESC: So OK. So it's going to be quite a-- 

ELI: On the order of gigabytes. 

MARK: So if I want to sit down, and I'm like, all right. This thing sounds super cool, sounds super interesting. How would I get started with TensorFlow? Where's a good place to start? 

ELI: So TensorFlow.org has a bunch of great tutorials that the Brain Team has provided. MNIST is kind of the Hello, World of TensorFlow. So that's this problem that's been around for a long time where you have handwritten digits. And you want to classify them to the correct number. And so I think that's sort of the first place to get started. 

And there's an MNIST for beginners. And there's an MNIST for ML experts. So it'll walk you through, what is MNIST? Why is it important? Here's a little bit of the math behind the state of the art MNIST algorithms if you're a beginner. And if not, it'll be just like, here's TensorFlow. And here's how it corresponds to the MNIST algorithm that you're familiar with. 

FRANCESC: Very cool. Also, since you mentioned that workshop that you gave at OSCON and PyCon, that was like three hours, and it is online. Do you-- could you recommend that as an entry point to someone that has never done TensorFlow? 

ELI: Yeah. Yeah. I mean, we tried to make it pretty accessible, I think. Even three hours, it's kind of hard to fit in a comprehensive intro. And so I think it is a little squashed. But I certainly-- you should check that out. And even if it's just for the resource slides, we have a lot of resource slides in there to sort of get you started on your own. 

FRANCESC: Cool. That sounds very interesting. We're kind of running out of time. Is there anything else that you would like to mention before we finish? 

ELI: Not off the top of my head. Definitely check out TensorFlow. It's worth a look. 

FRANCESC: One last question, actually. What is the best use case of TensorFlow, the most fun-- 

ELI: Oh, the most fun-- 

FRANCESC: --usage of TensorFlow you've ever seen? 

ELI: So I love DCGANs, which is some crazy acronym. But Generative Adversarial Network is the last bit. So it's actually two neural nets that are competing against each other. One of them is trying to classify the output of the first one and your training data. And the other one is trying to generate from noise things that look like your training data. 

And so you're training this neural network to generate, to trick this other neural network, basically. And so you generate-- there's a bunch of hilarious pictures in the paper and in the GitHub of like generated bedrooms. And they're like uncanny valley bedrooms. They're things that look almost like bedrooms, but there's something wrong about them. And there's generated faces. And they're like uncanny valley faces. They're almost faces. 

FRANCESC: OK. We're going to add a link to that, and I'm going to definitely to check it out. It sounds very fun. 

MARK: Absolutely. Well, Eli, thank you so much for joining us today. We really appreciate you taking the time. 

ELI: Thanks for having me. 

FRANCESC: Thank you. So thank you to Eli for such an interesting conversation. Before we move to our next topic, I wanted to add a couple of corrections that he actually gave as soon as we stopped recording. 

One of them, we asked him how big TensorFlow models are. And he said that, probably around gigabyte. And it turns out, it's more like megabytes. And he said that the problem is that he's not used to counting that low anymore since he works at Google, kind of humble brag. But it's actually megabytes. So you can consider sending them to your mobile phone and having them as part of your app, which is pretty cool. 

And then, something that is not a correction, but I wanted to add anyway, is he mentioned Apache Beam, which is actually something you can run on Google Cloud Platform, on Google Cloud Dataflow, and also on TensorFlow, you can run it-- or you'll be able to run it soon because it's a limited preview for now on Google Cloud ML, ML standing for Machine Learning, obviously. 

MARK: Yes. 

FRANCESC: Cool. So let's go with the Question of the Week. And I think it comes from-- you got the question of the week. 

MARK: I did get the question of the week. It was from some people I was chatting with this week. And they were talking about how, say you have 10 terabytes, 15 terabytes, 20 terabytes of data, sort of lying around, maybe on a [INAUDIBLE] maybe on a hard drive, maybe running on prem, something like that, and you want to move everything over to Google Cloud Platform. And you're like, this is going to take me a really long time to upload if I have to do it over the wire. So what do I do? 

FRANCESC: You encode it into XML, and then you-- no. No, no no. I mean, there's only one option which is you can use gsutil and just start sending that file through the network. And that's going to take a very long time. 

MARK: Yeah, weeks, months, Yeah. 

FRANCESC: Like, long long, long time. So instead of doing that, there's a couple options. And one of them was the one that you mentioned. 

MARK: Yeah, so we have a couple of partners, one of which is Iron Mountain for US areas. And the other one is Prime Focus Technologies for EMEA and APAC, pretty much is you can take a hard drive, bundle it up, stick it on a courier like FedEx or UPS, and send it directly to them. And they'll load it for you quick smart. 

FRANCESC: So that is actually-- I think that Eli mentioned that there is no higher load. None, no wider ban-- no. How do you say it? 

MARK: What? 

FRANCESC: The band is bandwidth. There's the-- there you go. 

MARK: There we go. 

FRANCESC: There's no connection with higher bandwidth that the mail, like post mail. You just send it, and we receive it. Well, our partners receive it and upload it. And they appear directly onto Google Cloud Storage. So that is probably one of the fastest options. 

But I wanted to add one more, which is what if you really wanted to make this very fast and all the time? It's not that you're sending-- you have 10 terabytes. And you have to send them once. But you keep on generating 10 terabytes per day. And you want to send that as soon as possible onto Google Cloud. And there's a solution for that. It's what we call Google Cloud Interconnect. 

And basically, what you get is, rather than having public internet connection from your data center to ours, you're going to get a very good quality connection. I think they use the term enterprise-grade, which I'm not really sure what that means. But I'm assuming it's really fast. And it connect directly from your data center to Google's network [INAUDIBLE] 

MARK: So this would be if you had like a sort of on-prem Cloud mix up type deal. 

FRANCESC: Yeah, basically. I could imagine something like that where, for instance, you're doing something like very, very intense data, like big data. And you're generating a huge amount of data. And you want to send it directly to be queried, or something like that. And in that case, if you have set a huge amount of data, you need to send it somehow. And maybe sending disks via mail is not good enough. So in that case, you can go through Cloud Interconnect. 

The pricing for it, it's actually something that depends on the cases. So you need to contact a provider. And I guess it depends how far away you live from a data center, stuff like that. 

MARK: Now, that sounds really cool. Maybe you have requirements that mean you have to be on-prem for various things, like your app has to be there. But you want to use their big data tools. And you want to be able to send that data through. That sounds really good. 

But no, that's cool. And the whole sending of hard drives via UPS or FedEx could be like the one-time thing you do if you're moving over to the Cloud. If you're on-prem and you want to make that shift as well. 

FRANCESC: Cool. Well, I think we're pretty much done with the episode. But I'm curious about what are going to be up to next week and after that? 

MARK: So I am staying in San Francisco for the next week and a half. But I will be off to New York after that for a panel at a playcrafting event we'll be holding in the New York offices. So that will be lots of fun. And then after that, I'm hanging around in San Francisco for a little while. So I think I'm pretty good. What are you up to? 

FRANCESC: So next week, I'm going to Los Angeles again. This time, I'm flying. So it should be faster. And I'm going to be giving a talk at, I think the name is Los Angeles Gophers Meetup. It's the Go meetup in LA. So basically, it's going to be kind of my rehearsal for GopherCon. And then in the second week of July, I'll be at GopherCon in Denver, Colorado. 

MARK: That'll be fun. 

FRANCESC: And that's pretty much it. Then after that, I think holidays are deserved. 

MARK: That sounds pretty good. Well, Francesc, thank you once more for joining me for this weekly episode of the podcast. 

FRANCESC: Thank you very much, Mark. 

MARK: Thank you very much to our listeners for paying attention once more. 

FRANCESC: Yep, and talk to you all next week. 

MARK: See you next week. 
{{< /transcript >}}