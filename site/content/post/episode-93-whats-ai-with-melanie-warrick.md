+++
audioDuration = "00:44:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.93.mp3"
audioSize = 64918957
categories = ["Machine Learning", "AI"]
date = "2017-09-06T01:07:49Z"
description = "What is the difference between AI and ML? Melanie Warrick joins your co-hosts Mark and Francesc to discuss the differences and what applications it can have."
draft = false
episodeNumber = 93
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "What's AI with Melanie Warrick"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/ecPzsuNJoUG"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6yhu4a/episode_93_whats_ai_with_melanie_warrick/"
+++

What is the difference between AI and ML? [Melanie Warrick](https://twitter.com/nyghtowl) joins your 
co-hosts [Mark](https://twitter.com/Neurotic) and [Francesc](https://twitter.com/francesc) to discuss the
differences and what applications it can have.

<!--more-->

##### About Melanie Warrick

[Melanie](https://twitter.com/nyghtowl) is a Senior Developer Advocate at Google. Previous experience includes work as
a founding engineer on Deeplearning4J as well as implementing machine learning in production at Change.org.
Prior experience also covers business consulting and large enterprise technology implementations for a wide variety
of companies. Over the last couple years, she's spoken at many conferences about artificial intelligence, and her
passions are working on machine learning problems at scale.

##### Cool things of the week

- Announcing new Stackdriver Logging features and expanded free logs limits [blog](https://cloudplatform.googleblog.com/2017/08/announcing-new-Stackdriver-Logging-features-and-expanded-free-logs-limits.html)
- Preventing log waste with Stackdriver Logging [blog](https://cloudplatform.googleblog.com/2017/08/preventing-log-waste-with-Stackdriver-Logging.html)
- How to build a conversational app using Cloud Machine Learning APIs, Part 3 [blog](https://cloudplatform.googleblog.com/2017/08/how-to-build-a-conversational-app-using-Cloud-Machine-Learning-APIs-Part-3-of-3-Google-Assistant.html)
- Your next app might be a bot! Building conversational UX with API.AI [youtube](https://www.youtube.com/watch?v=LHX1GqZuaII) 
- The canonical new book about stream processing [announcement](https://cloud.google.com/blog/big-data/2017/08/the-canonical-new-book-about-stream-processing)
- Quickdraw [site](https://quickdraw.withgoogle.com/data) [github](https://github.com/googlecreativelab/quickdraw-dataset)

##### Interview

- Narrow AI [wikipedia](https://en.wikipedia.org/wiki/Weak_AI)
- Quantum Computing [wikipedia](https://en.wikipedia.org/wiki/Quantum_computing)
- TensorFlow [site](https://www.tensorflow.org/)
- DeepMind [site](https://deepmind.com/)
- Cloud Machine Learning Engine [site](https://cloud.google.com/ml-engine/)
- Keras [site](https://keras.io/)
- Pytorch [site](http://pytorch.org/)
- Caffe [site](http://caffe.berkeleyvision.org/)
- [O’Reilly Artificial Intelligence](https://conferences.oreilly.com/artificial-intelligence/ai-ny) (San Francisco) talk about reinforcement learning
- [Strata Data Conference](https://conferences.oreilly.com/strata/strata-ny) (New York) talk about AI 
- [Grace Hopper](https://ghc.anitaborg.org/) (Orlando) talk about AI
- [Minds Mastering Machines](http://www.mcubed.london/) (London) talk about AI
- [Crunch](http://crunchconf.com/) (Budapest)  talk about machine learning

##### Question of the week

What if you want you want to do an action whenever any Pod is created or destroyed on Kubernetes?

- Kubernetes Pod Watch API [docs](https://kubernetes.io/docs/api-reference/v1.7/#watch-list-65)
- `kubectl get` command [docs](https://kubernetes.io/docs/user-guide/kubectl/v1.7/#get)

##### Where can you find us next?

Francesc just released an episode of [justforfunc](http://justforfunc.com) last week on [Go Type Aliases](https://www.youtube.com/watch?v=Vg603e9C-Vg),
and will be presenting at [Google Cloud Summit in Sydney](https://cloudplatformonline.com/Summit-Sydney-2017.html) in September and then heading to [Google Cloud Summit in Chicago](https://cloudplatformonline.com/summit-chicago-2017-schedule.html).

Mark is speaking at [Gameacon](http://www.gameaconvegas.com/) and [Austin Game Conference](http://austingamecon.com/) and attending [Strangeloop](https://www.thestrangeloop.com/) once he's done with all that.
He is also heading to Australia in October for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) as well.

{{< transcript "FRANCESC: Hi, and welcome to episode number 93 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey Mark, how are you doing?" >}}

MARK: I am good. I'm in Seattle, so we're doing the remote thing today. 

FRANCESC: Yay. And I had all of the issues possible to have trying to set up the mic today because I'm learning still. It's only 93 episodes, you know-- first time. 

MARK: That's fine. 

FRANCESC: Anyway-- we have, today, a very special episode. I'm actually very excited because we have one of the developer advocates from our team that we have not had before in the podcast. 

MARK: Yeah, we have Melanie Warrick joining us today. She's going to talk to us about, what is AI? What does that mean? What does that relate to machine learning? Is it just a brand new thing? Is it something just different? Who knows? 

FRANCESC: Yeah. I really like that because this episode came up after basically having lunch. And we were talking about machine learning and AI and everything. And she was like, well, you know, AI and machine learning are very different things. And we were like, really? And she has opinions-- 

MARK: Yes, tell us more. 

FRANCESC: Yeah, she has opinions of this. So we decided to make an episode out of her opinions. And they're really interesting. So I'm very excited about the whole episode. 

MARK: Yep. And then after that, we have our usual Question of the Week, where we talk about, say, you want to do something whenever any pod within your Kubernetes cluster is either created or destroyed. How do you do that? 

FRANCESC: Interesting. I have some ideas. But before we go to that, and before we go with the main content we have, as always, our cool things of the week. And we have four of them today. So I'm going to let you start. 

MARK: Cool. So the first one here is around Stackdriver Logging. It went GA a little while ago. But we've been basically talking to a bunch of the people who use this product, and we want to give them some new features that are super cool. So there's a bunch of stuff. I will link to the full articles. Actually, there's a couple that come out of the blog post. 

But you can do neat stuff like being able to pull metrics out of Logging now, so if you're tracking response times or any other types of metrics, you can pull that in. We've made it faster to make log entries available within there. You can manage logs across organizations, so not only just managing logs within a project, you can do log aggregation, exports, across wide varieties of projects all together. 

And you can also do this really cool thing which I quite like-- and we'll link to a longer article about it-- which is now called exclusion filters, which is say, for example, you might have debug statements that you have that are spitting out from your applications, but most of the time you actually don't care about them. So you can say, hey, I don't really care about these within Stackdriver. So that means it's not going to count towards the gigabytes or the storage costs that you would necessarily have there within your project, which is probably good to know because Stackdriver Logging now offers 50 gigabytes of logs per project per month for free. That will be starting on December 1. I think most people will probably not hit that 50 gigabytes, but some will. So be aware of that. That is coming. But yeah, up to 50 gigabytes. 

But yeah, you can use exclusion filters, pull that down. Maybe if you're getting health checks, you're like, hm, don't care about those, 200 requests, stuff like that. There's a longer conversation about that that one of our other teammates, Aja Hammerly, who wrote a whole article about preventing log waste with Stackdriver Logging that we'll also link to as well. 

FRANCESC: Very cool. 50 gigabytes sounds like a lot, but I guess that some of our customers might be somewhere around there, even higher. 

MARK: Definitely. 

FRANCESC: So good to know. The second cool thing of the week is a new article. It's actually the third part of a trilogy on how to build conversational applications using cloud machine learning APIs. And it is really cool, partly because I'm actually preparing a talk for Sydney. I will be talking exactly about this topic. So it's very good to see that there's a new article on it. 

And basically, it's about how do you describe intents for Google? Not Google Home. The example is with Google Home, but you can actually do with whatever you want to do, actions on Google Home, but you can also do things like Facebook Messenger or Slack. And all of these things work through API.AI. 

And it is very cool because it is actually incredibly simple to use. You basically say, OK, if someone says, "I'd like to buy some milk," then you know that you're going to relate that to a use case, which is the buy, buy something, and the product is milk. And then you can make it be like, oh, well, we don't know the quantity. So let's ask the quantity. So you can actually create these kind of two-ways conversation that then you can use from any device. 

So you write it only once. You write your back-end on the other side. And then people will be able to access your smart service from, as I was saying, Facebook Messenger or Slack or Google Home, but also like Skype and Line and way more services. It's pretty cool. 

MARK: That is cool. I can't wait to see your talk, Francesc. 

FRANCESC: I can't wait to see it either. Especially I can't wait to be done with it, especially the slides. But soon. Soon, I'll be working on that. If the organizer of Cloud Summit Sydney is listening, my slides are done. Yes, they're totally finished. 

[LAUGHTER] 

MARK: So we've also got this book that has recently been released. I'm going to mess up all these names. But I'll try my best. So Tyler Akidau, Slava Chernyak, and Reuven Lax, they're co-authors of an upcoming O'Reilly book called "Streaming Systems-- The What, Where, When, and How of Large-scale Data Processing." Say that three times quickly. It's now in early release. 

Basically, it is intended to be the canonical resource for streaming big data and managing it and analyzing it and processing it at scale with really big scale-- Google scale-- for people who want to be doing that as well in the companies that they are involved in. It looks like it's going to be a really cool book. We're going to have a link here, basically, to a little interview that was done with some of the authors there, telling about why they wrote the book, what sort of stuff people can look at, what do they really even mean by streaming-- what does that mean-- and sort of barriers to adoption and really, like, why did they write this thing in the first place? 

FRANCESC: So I'm going to ask you a question. What do you think is my favorite part of this book? 

MARK: That it's all written in Java? 

FRANCESC: No, no. No. No, the fact that they're talking about streaming, and on the cover of the book, there's a fish because, you know, like a river. 

MARK: Fishes. Streams. 

FRANCESC: Yeah. 

MARK: Yeah, OK. 

FRANCESC: Yeah, I'm easy, easy humor. If you're really interested in it, you can access a thing with the free trial on O'Reilly. And also, it's available on Amazon if you want to read it. Very cool book. 

And we're going to have our last cool thing of the week, which is something that, in my opinion, is super cool. I don't know if you've ever heard about this thing called Quick, Draw! It's Quick, Draw! with google.com. And it's this little app that you can use on your phone or on your computer, and basically you access it, and you draw whatever, and it guesses what it is. So it's kind of like Pictionary. And this is powered by machine learning, of course, with neural networks and convolutional neural networks. 

The cool thing is that convolutional networks are cool, but they need a lot of data. And we just open sourced that data, the data that was used to train that neural network, which is super useful, because then you can do whatever you want with that. You can train how do a pictionary again, but also, you can do more analysis like according to all of these drawings of a cat, what does a cat look like according to each country? And you can do an average and be like, oh, cats in Japan are actually slightly different to cats in the United States. It is really cool. You can do lots of really cool data processing, and also, you can even understand that data even includes not only the finished drawing, but also how it was drawn, so you can actually follow the traces. 

MARK: This is amazing. I'm just playing with just the Data Explorer, and I clicked-- randomly I clicked on parrot, and I'm currently looking at 163,567 parrot drawings made by real people on the internet. 

FRANCESC: Yeah. It is amazing. 

MARK: And you can even go through it-- yeah, you can go through it, and be like, nope, that's not a parrot. This is so cool. 

FRANCESC: I know. 

MARK: I just want to play with this all day. 

FRANCESC: I told you, that's why that was the cool thing of the week. It is super cool. And if you're into machine learning, definitely check it out. But if you're not into machine learning, check it out because it's actually lots of fun. 

MARK: Yeah. Yeah, and I'm going to stare at this for hours if I don't close it now. Cool. Well, I'll tell you what, why don't we go have a chat with our good friend Melanie and talk all about AI and ML and all that fun stuff? 

FRANCESC: Sure. Let's do that. I am very, very happy today to welcome one of the latest additions to the Cloud Developer Advocacy team, Melanie Warrick. How are you doing, Melanie? 

MELANIE: Doing great, thanks. 

FRANCESC: So I'm very happy because we're going to be talking about a very interesting topic that we were actually discussing over lunch, and we decided that this conversation would be a great episode. So we're going to be talking about AI and stuff. But before that, why don't you tell us a little bit about yourself, what do you do at Google, when did you join, stuff like that? 

MELANIE: Right. So I am a senior developer advocate at Google and started four months ago. I know you guys know about that. But prior to that, I was working for a startup on a neural net platform that was not TensorFlow and developing that out. And before that, I was working at change.org, implementing machine learning algorithms into production. And change.org, for anybody who doesn't know, is an online petition platform. 

FRANCESC: And somehow, in one of those conferences, I think that you met Mark before that, right? 

MELANIE: I did. Back in the day, Mark and I met at Strange Loop, actually. 

MARK: A long, long, long time ago, in a land far away. 

MELANIE: Yes. 

MARK: But yes. I got very excited when I found out Melanie was joining the team. 

MELANIE: I know, me too. 

FRANCESC: Awesome. All right, so we're here to talk about AI. So what is AI? Is it ML just with, like, a new coat of paint, or what's the deal? 

MELANIE: That's what it feels like lately. Everything's called AI. So Artificial Intelligence, in particular, is-- OK, the actual definition is the science and engineering of technology or tech, in some way, shape, or form. And this was initially coined back in the '50s, to give us a history lesson, because I know that's what everybody wants to hear. But that's when it originally was labeled. And then over the years, it's been this process of seeing if we can actually achieve what people expect from it. 

But the reality is the expectations are constantly kind of changing. And what people really want when they say AI, a lot of people are really just looking for human-like artificial intelligence. They want to see robots that are like humans. It's what we have fun with, all of our sci-fi and fantasy. 

When we see it labeled today, most people are talking about what's known as narrow AI. And so they're expecting these-- technology that's really good in a specific area that's constantly learning and adapting. So that's where that term is getting used, and it's replacing, a lot of times, ML or Machine Learning, when machine learning, in essence, is the algorithms that are used in AI or some of the algorithms that are used in AI. And when I say algorithms, I mean the math part, stuff that you use the computation for. 

FRANCESC: So you mentioned narrow intelligence. I can imagine like, for instance, there was an example that we talked about as a cool thing of the week where there was like this farm of cucumbers, and there was something that was able to decide the kind of cucumber that it was able to see. That would be narrow, right? 

MELANIE: Right. So what you're talking about in that cucumber example, in particular, that is using an algorithm that is known as deep learning or neural nets. And in particular, that's a type of machine learning algorithm. And machine learning is a set of algorithms that are used in artificial intelligence. But it's not the only thing you use for artificial intelligence. 

And so for the cucumber example-- and I'd have to look at it to really make sure I'm on point on this, but basically the cucumber example is machine learning, for sure. And if it's continually adapting and changing in terms of how it operates, then technically it's narrow AI. Now some would say, well, it's definitely AI, based on this current paradigm we're living in. But you know, I would say, for narrow AI, it's probably there, but it just depends on how much it continues to change and learn. 

MARK: Cool. And you said something before that I thought was kind of interesting. You said that when people come to AI, what they often want is like a human-like response. But when you're talking about sort of narrow AI, I'm almost wondering whether the response you get out of machines is almost things that possibly humans couldn't do. 

MELANIE: Right. So when I say when they come to AI and they want human-like response, you know, they want to see a robot that really can think and feel and have ideas. And you have to say, when you look at a car that can drive itself, does it have an awareness of itself? Is it conscious? Can it generalize not just from driving to actually doing other things that are out there? And granted, it's pretty general to be able to drive. 

But in terms of narrow, you have to think about the fact that it's able to specifically be an expert in a specific field. And it could be better than humans in that field, like the AlphaGo, and DeepMind had successfully beat a number of the best players in that field. That is a great example of where you have an algorithm that has been successfully trained to exceed what humans are capable of. So you know, that's definitely very possible. 

FRANCESC: So that would be narrow AI. And for general AI or wide AI-- I don't know how to call it-- other than "Prometheus" and "Alien" and movies like that, is there something like that that you can come up, like an actual use case of that kind of AI? 

MELANIE: Do we have that now? As far as everybody knows, no. I mean, maybe someone is hiding something in a back room somewhere, but as far as we all know, all we have right now is what's termed as narrow AI. We don't actually have general AI, which is what you usually mean when you're talking about anything that's human-like. And then there's super AI because you know, you've got to have the super, with all the various "Superman," super shows that are coming out. 

FRANCESC: Tell me about this! 

MARK: Oh, now I'm excited. 

MELANIE: I know! So this is where you start to get down to where they talk about singularity, and they say this is having AI that will go above and beyond what humans can actually understand, like it's capable of doing things that go beyond our comprehension. And that's where you start to dive into the real extreme, you know, the world will come to an end or we will live forever. And there's some real serious concerns in this space for certain people. It gets used especially in the fun sci-fi fantasy world especially. But the reality is that it's not really something that the people who are really researching this space are concerned about. And they don't see it as being a reality, if ever, if any time soon. 

FRANCESC: Yeah. We'll come back to those concerns a little bit later. But you mentioned something that I thought was very interesting. You said that machine learning is the algorithms that are used for AI. But AI is more than machine learning. 

MELANIE: Right. 

FRANCESC: What else do we have in AI that is not machine learning? 

MELANIE: I mean, so machine learning is a field of research in this space. And there's a number of different fields. You know, you have statistics and probability models that get intermixed with machine learning, but they are their own thing. They're not necessarily machine learning. 

You have graph theory. Some people might even touch on quantum mechanics or quantum computing, which is also a little bit of more of a not fully concrete space itself, but it's fun to explore and think about what's the possibility there and how it could potentially have impact in AI at some point. So there are a number of different fields that will come together, sometimes on their own, sometimes in concert, to be able to achieve this artificial intelligence. 

MARK: Cool. So probably bringing it back to say, like, Google Cloud or some of open source projects, is TensorFlow AI, or is it machine learning, or does it just depend on how you use the thing? 

MELANIE: So TensorFlow primarily gets referenced and used in relation to deep learning. And as I mentioned, that's where you start talking about neural nets and applying neural nets, which are one of many algorithms that are in the machine learning space. So yes, it can play a role and be used and has been used in artificial intelligence projects. DeepMind for example, currently uses TensorFlow in some of their algorithms when they're doing anything around gaming. Not everything, but I know that it's used in some of the work that they're doing and other research spaces that they're in. Just because you're using TensorFlow doesn't mean you're doing AI. 

FRANCESC: Yeah, I mean the Hello World of TensorFlow is you do two plus two, and you run it, it says four. It's probably not AI. 

MELANIE: No. That's now. 

FRANCESC: No, OK. 

MELANIE: But yeah, it's definitely deep learning-- or it can be deep learning. And primarily, that is machine learning, as the bigger umbrella. 

FRANCESC: Cool. So since you're a developer advocating-- your main topic is AI, machine learning, can you tell us a little bit about what kind of things can you do with AI or machine learning on Google Cloud Platform? Or what do people tend to do? What do you see the most often? 

MELANIE: So in terms of machine learning on Google Cloud Platform, Google Cloud Platform is-- I mean, it's basically servers. It's computers, at the end of the day. So you can do whatever you want that you currently can do on Google Cloud Platform. That's something that I think is really important to stress, that it's like any cloud platform you're going to use. You can use any tools you want. You just have to configure it. 

FRANCESC: So one of those tools might be, for instance, TensorFlow, for which we have a managed version, which is Cloud ML Engine? 

MARK: What is it called now? 

MELANIE: Yeah, that's my knowledge as well, is that it's-- 

FRANCESC: OK, so it's Cloud ML Engine. But if you were interested in using something else other than TensorFlow, you could also use it. 

MELANIE: Correct. 

FRANCESC: Now the thing is that I have no idea what other things are out there other than TensorFlow, so I don't know. Is there some other very well known library, some competitor of TensorFlow that you've seen before and that people use it? 

MELANIE: Right. So Keras gets referenced a lot because it's a great way to engage with TensorFlow or with other neural net platforms that exist out there. It's a nice sort of higher-level abstract to engage with that space. So Keras is great. You can definitely use that on Google Cloud Platform. You just have to configure the actual servers to be able to use it. 

There are other libraries that are constantly being referenced, like Pytorch and Caffe. And there's definitely a few others that are out there that I would recommend exploring because each one has its own value in terms of how it's being applied. 

MARK: So I know with Cloud ML Engine, the TensorFlow set up can be-- the calculations can be distributed across multiple computers. If you were coming to GCP and were using something else, like Pytorch or whatever it is, something like that, do those come with tools that also will enable you to set up a multitude of computers so you can distribute that workload? Or how does that kind of thing work? 

MELANIE: Right. And I know we were talking about this earlier. So I wrote a blog post about this recently because I wanted to make sure it was clear to people that TensorFlow is very valuable, and I recommend people exploring that. But if you are already using something and you want to be able to use Google Cloud Platform, I think it is important to understand that whatever you're using you can bring over. 

So I wrote this post, in particular, to show you have to spend some time doing the configuration. If you already have, like, an install script or some type of Docker image that you use to configure your instances, then you can use that. You don't have to spend the time doing the configuration. You just kick off whatever you need using Kubernetes, using whatever it is that will help get those servers up and running for you. You just have to have some way of doing the configuration, and then you can bring your software. 

FRANCESC: So when using that software, as soon as Mark said big scale in the cloud stuff, I started thinking about big data. And I'm curious about the relationship between big data and things like Spark and MapReduce and stuff like that. And when we talk about machine learning and AI, is AI part of big data? Is big data part of AI? What are the relationships there? 

MELANIE: The relationship between big data and AI is that in some of these algorithms-- and many of the algorithms-- the data will actually help build them and make them successful and make them actually work well, especially when you get to neural nets. So big data is about having the data you need to train the model. And that's what it's all about. 

I mean frankly, to get-- most of the work you do when you're building these models is getting the data and having the data cleaned and ready to go. And something I like to tell people all the time is never trust the data. The data needs to be fully vetted and cleaned and processed, and like 80% of your time can be spent on that. But you do have to spend the time figuring out what it is you have, what you need, and getting it into a format and into some type of data platform that will serve it to your models for training, for inference, for whatever it is you're going to do. Well, the tools we have for big data, we just have to be able to plug that into the software and the server site you're using. 

MARK: So now I'm also curious. I think you alluded earlier that sort of the whole aspect of AI is around sort of continual learning and the platform learning from itself as it goes forward. 

MELANIE: Right. 

MARK: What does that look like? Are you just redoing the same training over and over again? Or is that like a slightly different process as it, like, grows? How does that work? 

MELANIE: It can vary. You know, when you're using some type of algorithm like a Markov algorithm where the statistics that are involved in it will continually adapt based on real-time readings of reactions from people, that would be one way where the algorithm itself is adapting as the reactions are coming in and it's reading it real time. Sometimes you do have to do training offline, or many times you have to do training offline, where you will pick frequency of how often you do and with the new data that you've captured. So it can take a couple different forms in terms of like real-time versus offline. 

FRANCESC: So following the same topic, since you have algorithms that continuously adapt to the conditions and to the context where they're executing, does that mean that you should be worried about the algorithms learning something wrong? 

MELANIE: Oh, yeah. 

FRANCESC: By that I mean, how do you-- like, if for instance, you have a self-driving car that learns how to learn by itself-- how to drive by itself. How do you make sure that it doesn't learn how to drive backwards on the highway? 

MELANIE: The human in the mix. You've got to have some levels of humans evaluating the system as well as you definitely need to put in safeguards. And yes, this is why I say never trust the data. You also don't fully trust the models. You have to constantly be testing and evaluating. 

We've seen examples of products that are out there that didn't really work the way they expected. I think frankly, as an engineer, you learn really quickly-- you want to believe, like, you can write this code that you don't need to fully test. But all of it needs to be tested constantly, and you have to constantly be thinking about what it is you might be missing. 

FRANCESC: And how do you test it? 

MELANIE: Well, it depends on what you're doing. Sometimes you test it by writing tests. Sometimes you test it by exposing it to small samples. Sometimes you put it into the wild, , and then you find out really quickly that maybe you shouldn't have and you pull it back, and then you hope for better results the next time you do it. 

MARK: Yeah, so I've definitely heard that in people's minds, people think, oh, I'm just going to write-- like, I'm going to sprinkle AI or ML over a thing, and it's just going to give me this perfect result. But it seems like it's more the AI or the ML might get you 80% of there, and then from there, it's sort of nudging and scraping and crafting until you get a good product. 

MELANIE: And something I like to stress to people, you know, it's true with anything with modeling when you're doing anything with machine learning, you have to come up with the right question or the right problem you're solving for before you pick any tools, before you do anything. Then you start to have to think about what is the data that I have to do this? And it doesn't have to be big data all the time. People can do artificial intelligence with small samples. There's research on that. But you have to think about the data. What's the current set up of the data? And then you can start to do the model. And you know, it takes time to actually develop anything and to really see is it effective? 

And you have to also ask yourself what is it you're trying to achieve for? We're typically evaluating and saying, you know, accuracy is the easiest thing to explain. There's a number of ways to evaluate these metrics. But you have to ask yourself, at what percentage is acceptable? If it's something that's life or death, you may be, I need to be 99.9999% accurate on this. If it's something that is like we're playing a game and it needs to win most of the time, you know, maybe 80% to 90% accuracy is acceptable. 

MARK: This is where I ask questions based on very vague knowledge. I believe you can sort of overtrain if you have certain data sets, so that it works-- 

MELANIE: Oh, yeah. 

MARK: Can you explain what that is and how to beat that or hopefully that doesn't happen. Is there a magic wand or something? 

MELANIE: You guys are asking all the good questions. It's like, tell us exactly. And it's interesting to try to do this verbally versus actually having-- I usually love showing images because it sometimes helps kind of hit the point home. 

But yes, you can definitely overfit. And you can also underfit. So when you overfit, it means you've made it so that the model perfectly fits the training data set that it's been exposed to, but it doesn't generalize. It doesn't mean it can-- it can't-- if you show it anything new that it hasn't seen before, then it won't be able to give any kind of prediction or classification that is actually useful because it's become so perfectly fit to the data. When you look at, like, drawing a line for linear regression to a data set, that's a great example where if you look up what overfitting looks like for just linear regression, I think you can get a good visual sense of what that looks like. 

And so people put what's known as regularization into your models. It makes it kind of fuzzy. It makes it a little more general. And regularization is extremely key when you're doing deep learning and anything with neural nets because that's an area that easily overfits. So you don't want it to be too perfectly matched to the training set, and you always want to set aside some data it's never seen before to see, when you're testing it, does it work and apply? 

FRANCESC: Yeah. I heard an example that I thought was really cool. I think it was when we did the episode with Kaggle. A very good example of overfitting was you tried to predict price of houses. And one of the houses is like, let's say, $2 million, and it has one broken door. And you could learn that whenever any house has a broken door, it should be at [? $3 ?] million, no matter how big it is. So it's like this specific thing, it's like, oh yeah, that's totally wrong. So yeah, I really liked that. It's very interesting. 

MELANIE: I don't know the exact details of this, but I had this example explained to me once where, way back in the day when they were first exploring neural nets, they did this training on a-- I think it was tanks. And they were trying to get recognizing between the US and Russian tanks. But the problem is they trained the actual algorithm with all these US tanks that were taken by really well-done marketing shots in really sunny spaces, whereas the Russian tanks were all, you know, like cloudy and difficult and grainy. When they tried it out in the real world, they had it thinking everything was a tank because it was grainy and dark. And it had basically trained on the clouds and on the sunshine versus the actual tank itself. 

So anyways, yes. It's funny when you start to dig into these algorithms to see what specifically is it really focusing on as the way to say this is my way to classify or predict. And it's very common that people resist using deep learning in particular because of that, because it's hard to fully break into. And they're working on this. It's called interpretability. But they're working on understanding like why is the algorithm picking the classification that it is? 

FRANCESC: That is actually super interesting. And I thought that that was not a thing at all, like once you have a neural network, if you have something that predicts numbers, somehow you can see some layers inside of the neural network kind of showing like, well, these are recognized as a circle. So you kind of figure out, is that a thing at higher scale, like if you're trying to recognize, is this a cat? Like, can you actually see that in the neural network? 

MELANIE: Yeah, they've got some great examples out there in terms of showing what are these nets really seeing? When it looks for the cat, what are some of the distinct what's known as features to help identify the data set in particular. And there's great images out there actually, online, that will give you a perspective on how it focuses. Like classifying a seven versus a nine, it'll look at that loop that the nine will have that the seven won't have. And that will be the feature that helps it distinguish between the two numbers and creates a higher probability. 

MARK: So how does it do that given like a neural net is essentially, like it's math, right? So how can you determine that from these numbers, that there's a loop? Like, it's looking at the loop? 

MELANIE: Well, yeah, now you want me to explain the math verbally. This is awesome. I mean, the way it's doing it, it's-- OK, it's basically converting the image. So on images, in particular, it converts it all into numerical values. And then based on the way you do the math, it will find a way to emphasize specifically the numerical values for that part of the image. 

So the image itself gets converted into numerical values. There's a lot of math that's going on. And within that, it's emphasizing and saying, focus on this specific area. If you see this area in terms of numerical values-- like you know, when I'm saying, let's say it's all grayscale, right? And ones and zeros-- I'll just make it really simple-- are focused in this specific area of the picture. Then if you see that, then that's a high probability it's going to be a nine. 

So that's certain ways. And how you actually see that in the image itself or how you see that in the neural net is ways that we take the actual data set in the inside of the net and visualize it. I'm going to say that's my best way of explaining that, frankly, right now. 

MARK: That's fine. 

MELANIE: But you find ways to sort of surface it and visualize and convert what it looks- what the actual model looks like into some type of-- 

FRANCESC: So I see that as almost like debugging a program-- 

MELANIE: Yes! 

FRANCESC: --where you're actually able too see, like, the value of the variables when you're executing. You can actually see, it's like, oh, these are the pieces that are activating because [? C's ?] around or whatever. Does that mean that whenever you train a big neural network that is able to recognize, let's say, circles, or if it's able to recognize circles on lines and whatever, you could reuse that part to then train on something else? Like for instance, let's say now you're going to try to recognize diagrams or something like that? 

MELANIE: So you're bringing up transfer learning, and that's become a really popular thing. A couple things I'll say about this around neural nets in particular, neural nets came to popularity recently in the last few years because the computation power was there to actually do these computations. You have to do the intensive computation you have to do for it, and the data was available. 

What was initially popular for neural nets was feature engineering, feature engineering meaning that you can run data through it and you identify the primary important parts of the data that will help you build the model. And that's something that people had to do manually, and it was really intensive for a long time. But using a neural net made it a lot easier. 

Now people are getting excited about what's known as transfer learning where it's more so with neural nets, because you've already got trained models that have been successful. And they're good at some type of image classification. And you can take parts of that model and apply it to a different image classification problem. And it's quick to train, quick to apply, quick to adapt. So it's cool. It's like, figuring out a cat and a dog, and it gets used for, like, figuring out trees or something. 

MARK: Yeah, that's very human in that way. Have you ever taken, like, I've done sport X, and I used to do one thing, and then I can do exactly the same thing. Like you know, basketball skills, took it over to netball or something like that. And that's kind of super cool. So when is the robot uprising? And when should I expect the robot overlords? 

MELANIE: Tomorrow. 

MARK: OK. 

MELANIE: It's already here. You just didn't know that they were already telling you all the things. 

MARK: Like, I'm OK with this. I just thought I'd ask. 

MELANIE: You know, I will say this. There was some research done around the super intelligence space and all the people who were predicting when we were going to have super intelligence. And they averaged out the time frame, and the expectation is 2040. 

FRANCESC: OK, 2040-- oh, wow. 

MARK: Oh, wow. That's soon, sooner than I thought. 

MELANIE: But you've got time. 

MARK: I've got time. 

MELANIE: You've got plenty of time. 

FRANCESC: So there was this kind of can clash of titans. There was Matt Zuckerberg and Elon Musk publicly discussing AI. And basically one was saying AI is super dangerous. We should be super careful with it. The other one was saying, no, AI will save the world. What is your bent on this? What is your opinion? Will AI destroy or save the world? 

MARK: And it can only be one or the other. There's no in between. 

FRANCESC: Yeah. 

MELANIE: I plead the fifth. So I've seen this argument playing out, especially in the last couple of years. I think that the fear is used to get people to do things or to-- I don't know-- react in ways that is not necessarily as beneficial, frankly. I'm not a fan of doing a lot of let's be afraid, let's be really afraid. 

But I do think you need to be careful. And I know a lot of the researchers are trying to advocate for some of the challenges that they see coming and trying to advocate responsibly for ways we can come up against those challenges. I know this isn't as much fun as, like, yeah, they should throw down and fight it out. And this is the best person in there. 

I do see there's a lot of hype in this space. There's a lot of hype. And it is concerning in some ways because I think people can get caught up in it and make poor decisions and buy into things that are not going to be useful for them in the long run. 

But unlike the past with AI, where we saw hype in the '50s and then this AI winter, and hype again in the '80s and '90s, and again, like a drop-out, we are seeing real applications now like identifying cancer cells in images that are beneficial, so beneficial to us. And so this isn't completely overhyped in terms of it's not-- there's not some real value there. It's just you have to be careful about the hype and the fear and be realistic about what is it being used for, where is it useful, and then, you know, see what you need to do to be responsible about it. 

FRANCESC: You mentioned that researchers were being very careful about some concerns they had. Can you give an example of one of those concerns? 

MELANIE: Some of the concerns I've heard more recently-- and I think most people are talking about this-- is jobs, right? Are we going to automate away all the jobs? I don't know. I don't know. 

There's conversations around do we automate them all away or do we just make new jobs? And so I'm not enough of an expert to be able to completely weigh in on, like, will this really happen? And I think most of the researchers don't fully know. But there's some conversations and discussion of, like, what does that look like? 

Some other concerns are along what you were talking about before with testing, and how do we know we're putting stuff out into the wild that is not going to harm people and make sure we have the right level? And I say harm. I'm not talking about them killing everybody off. But I am saying, you know, having the right safeguards in place. And so they're not completely off-base, those who talk about this. And I know Elon Musk is one of those, where they are trying to say, like, do we have the right safeguards to make sure that AI is going to be impactful in useful ways? 

MARK: And like what you were talking about, making sure that a human stays in the mix. You know, it's great if you have a computer saying these are cancer cells or these are not, but having a doctor alongside saying, like, actually, let's double check that. And we will take an action, and I'll take that information as a suggestion or part of the packet of overall everything I'm doing. I think it's quite interesting. 

I mean, I've heard things of, like, chess leagues and stuff where they allow human and computer AI interactions as teams being able to work together. And I think, you know, going forward, you could see that as being the thing that happens. You know, it's never just one or the other. It's both together. 

MELANIE: Right. 

MARK: We are running out of time, unfortunately. I'm having a great conversation. Before we finish up, though, is there anything you want to make sure you plug, any events you're going to, maybe something you're super excited about that you just want to make sure that gets on the podcast before we finish up? 

MELANIE: I'm looking forward to speaking on the AI panel at Grace Hopper in Orlando. So that's coming up in October. And I definitely want to mention that. But yeah, I've got a number of talks that are coming up at Strata and O'Reilly's AI conference. So thanks. Thanks for letting me plug. 

FRANCESC: Yeah. We'll have all of those on the show notes, so in case anyone wants to go find you and ask you about a robot uprising, we'll definitely help them doing that. Thank you. Thank you so much. 

MELANIE: Thank you. 

FRANCESC: This was amazing. 

MARK: Thank you. 

FRANCESC: Thanks so much to Melanie for sharing her opinions on AI and machine learning, and what are the differences, and also what's going to happen in the future. Are we going to have to welcome our machine learned overlords? 

MARK: Yeah, I welcome them. Totally. I just want to be clear on that. 

FRANCESC: Yeah, absolutely. Me too. I love them. 

OK, so I guess it's time to go with our Question of the Week. It's about Kubernetes. So in Kubernetes, you have pods. And those pods, they die whenever they die. They are actually pretty short-lived sometimes. And whenever one dies, if you have a service that says, well, I should have, let's say, 10 instances of it, a new one is created, right? And you don't really have control on that. Whenever a pod dies, a new one is created. 

Now, how would you do something in between those actions, meaning like, if I want to do something at the moment a new pod is created, how do I do that? And if I want to do something at the moment a pod is killed or it's detected or considered to be dead, how do you do that? 

MARK: Cool. So this is actually something that gets me kind of very excited about Kubernetes. So Kubernetes has a whole REST API as well as a series of clients for most languages like Go and Python and other ones as well. And what makes me get excited about Kubernetes is that Kubernetes is this amazing thing that does a lot of really cool work in terms of deployments and services and stuff like that. But it also gives you so much of the building blocks and the APIs to make it do all sorts of other interesting stuff programmatically, so you can really control it. 

So one of those things that it has is basically a whole watch API. Most of the clients wrap that up. You can access it also directly through the REST API as well. You can basically say, hey, tell me whenever this stuff happens. So, for example, what we're talking about here, hey, tell me whenever an event happens for a pod. And you can actually apply filters to those as well, and you can do fun stuff like that. 

And what's cool about that, then, is that I can just have, maybe, a deployment that happens. It sits on Kubernetes. It can connect to the Kubernetes API through the client. And it can be, say, hey, tell me whenever something happens with a pod. And so when one gets created, it'll get a message saying something happened. When one gets deleted, it gets a message something happened. And then programmatically, you could either tell Kubernetes to do something else, maybe fire off a message to our log, do some analytics or some sort of metrics. There's all sorts of fun stuff you could definitely do here. 

FRANCESC: So does that mean that you do a request and you give some kind of callback that it will be called, like a WebHook? Or is it like a lone thing and you just get new messages from that connection? 

MARK: So it depends on your client and how it does it. So I usually use the Go client. So what it normally does is it hands you back a channel, and then data gets pushed into that channel. If people aren't familiar with channels, think of it basically as like a blocking queue. And then data goes into that, and then I can just pick up that as it comes through. And then and then I can do a Go routine, so basically fork off another thread, and keep on running from there. And it's really straightforward. And I don't have to worry about starting processes or killing processes or tracking any of that stuff. Kubernetes handles all that for me, which is lovely. 

FRANCESC: Nice. My favorite thing is actually not only the fact that this API exists, but that this API is also used by "kyoob cuddle," also known as kubectl, but "kyoob cuddle" in my house. And it is something that not that many people know, but you can do things like kubectl get pods dash w, and that w stands for watch. 

MARK: I did not know that until today. I'd been using the command line watch, and then going watch kube get pods. And I'm like, I'm totally blown away. This is fantastic. 

FRANCESC: Yeah, you do dash w, and it does exactly that. Basically, it sets up a connection, and it just shows you the pods that are there at that moment. But it doesn't stop the command. It just stays there. So if you're waiting for something-- like normally I use it when I'm waiting for-- let's say I create a load balancer, and I want to wait for that IP, the external IP for the service, to appear. What I will do is I just do get services dash w, and it will show me that the IP is pending. And as soon as the API appears, it will just appear there. 

MARK: That's changed how I do a bunch of demos. This is so cool. 

FRANCESC: Mind blowing. I know. It is really cool. And it's super simple. So yeah, best of all worlds 

MARK: Excellent. All right, well, before we wrap up, Francesc, where are you going to be? What are you doing? Is there a JustForFunc coming out? 

FRANCESC: So I released a JustForFunc last week on how to use Go type aliases. And I'm working on one-- I'm working on a bunch of them, actually. I'm working on one with you that who knows when it will happen, because you travel so much? You're so complicated. 

MARK: I'm sorry. 

FRANCESC: But I'm also working on a couple of them on machine learning and on how to use APIs concurrently and stuff like that. So a lot more of episodes coming. But in between, that I will also, next week, be in Sydney to go to Cloud Summit, which is going to be on September 13, if I'm not mistaken, because it may be 12, because I don't know how to do dates over the planet. But it's something that. I'll be there. 

And then after that, I will go to Melbourne. Or "Mel-born" I think it's pronounced. And after that, I will be, too, in next Chicago-- that will be on September 27-- to talk about TensorFlow and machine learning. What about you? 

MARK: So when this episode comes out, I will be back in San Francisco for a short period. And then I'll be getting on a plane to go to Gameacon Las Vegas, which will be the eighth of September. Then I'll be doing Austin Game Conference, which is the 25th of September. I'll be speaking at both of those. I will be attending Strange Loop, so I'll just be hanging out because that's an awesome place to be, and I love it so much. 

And then in October, I'm also going to Australia. So I'll be speaking at DevFest Melbourne, which is on the 21st. I will be speaking at GCAP, the Game Connect Asia Pacific on the 24th. And then I'll be probably doing all the other Melbourne international game stuff around that time as well. 

We should also mention our dear interviewee, Melanie. She is also going to be at a bunch of events. She's going to be at the O'Reilly Artificial Intelligence Conference on the 20th in San Francisco. She will also be doing the Strata Data Conference in the 26th in New York. She will also be at Grace Hopper on the fifth of October, Minds Mastering Machines in London on the 10th, Crunch in Budapest-- also talking about machine learning-- on the 18th as well. 

FRANCESC: Cool. So I think it's time to finish. But before we finish, I actually wanted to mention something real quick, which is back in March, we had a big bug that messed up with our analytics. I don't know if you remember that? 

MARK: I remember that. 

FRANCESC: So we ended up having way more downloads than we actually had. So we've been fighting for a very long time to have more downloads than in that month. And we broke that record. 

MARK: Oh, cool! 

FRANCESC: So thank you so much to all of our listeners. There's so many of you right now. So send more Questions of the Week, send more messages. We are always, always welcome them. 

MARK: Awesome. Yeah, thanks to everyone. Well, Francesc, thank you very much for yet another episode this week. 

FRANCESC: Thank you, Mark, for taking the time to join the episode from far, far, far away Seattle. 

MARK: Seattle is not that far. But it's fine. And we'll see you all next week. 

FRANCESC: See you all next week. 
{{< /transcript >}}