+++
audioDuration = "00:39:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.238.mp3"
audioSize = 56666236
categories = ["Machine Learning", "ML", "Autonomous AI"]
date = "2020-09-30"
description = "ML in machinery is our main topic this week as Mark Mirchandani and Brian Dorsey talk with Arnaud Hubaux, development lead for ASML."
draft = false
episodeNumber = 238
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "ASML with Arnaud Hubaux"
image="/post/episode-238-asml-with-arnaud-hubaux/images/hero/hero-EP-238.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/j2pxei/episode_238_asml_with_arnaud_hubaux/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

ML in machinery is our main topic this week as [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) talk with Arnaud Hubaux, development lead for ASML. Our good friend, fellow Googler, and ML specialist [Dale Markowitz](https://twitter.com/dalequark) joins the conversation as well!

With a potent combination of physics and Machine Learning, ASML develops machines that build the chips powering our essential devices. These highly refined machines optimize production for each specific customer, detect defects, and make corrections quickly and accurately by harnessing the power of Machine Learning. The machines also effectively train themselves to ensure the intense accuracy required is sustained over time. Arnaud describes the process these machines go through in order to accomplish these goals, including how they build and train their ML models with the help of physics.

Arnaud tells us how the machine's closed ML system works from zero to train the particular job it will do. By taking a minimum spec chip that has already been created, the machine learns the process for creating that chip and continues to improve that process. These machines are not only able to detect problems but can figure out why these issues are occurring, decreasing production downtime. 

Recently, ASML moved to Google Cloud. We talk about the products they use, why they chose Google Cloud, and their journey to the cloud.

##### Arnaud Hubaux

Arnaud Hubaux is development lead for Artificial Intelligence and Machine Learning products at ASML. He works with the world's biggest chip manufacturers on AI-driven solutions to solve problems like optimizing production yield. As a trailblazer, Arnaud and his team implemented the first ASML AI application development pipeline on Google Cloud. With a PhD on applied constraint solving, Arnaud has deep experience as an architect of software platforms and product lifecycle management.

##### Cool things of the week

* Cloud migration: What you need to know (and where to find it) [blog](https://cloud.google.com/blog/products/cloud-migration/guide-to-all-google-cloud-migration-guides)
* All together now: Fleet-wide monitoring for your Compute Engine VMs [blog](https://cloud.google.com/blog/products/management-tools/cloud-monitoring-gets-fleet-wide-vm-monitoring)
* SRE Classroom: exercises for non-abstract large systems design [blog](https://cloud.google.com/blog/products/devops-sre/join-sre-classroom-nalsd-workshops)
* gVisor: Protecting GKE and serverless users in the real world [blog](https://cloud.google.com/blog/products/containers-kubernetes/how-gvisor-protects-google-cloud-services-from-cve-2020-14386)

##### Interview

* ASML [site](https://www.asml.com/en)
* ASML in One Minute [video](https://www.youtube.com/watch?v=wI6nCmG-PpI)
* Zoom in on the chip in your smartphone [video](https://youtu.be/2z9qme_ygRI)
* KubeFlow [site](https://www.kubeflow.org)
* BigQuery [site](https://cloud.google.com/bigquery)
* AI Platform Notebooks [site](https://cloud.google.com/ai-platform-notebooks)
* Cloud Build [site](https://cloud.google.com/cloud-build)
* Introduction to Kubeflow [video](https://www.youtube.com/watch?v=cTZArDgbIWw&t=49s)
* Intro to Kubeflow Pipelines [video](https://www.youtube.com/watch?v=_AY8mmbR1o4)
* How to Build a Kubeflow Pipeline [video](https://www.youtube.com/watch?v=JY7za08sAIU)

##### Tip of the week

We have a super cool tip on combining AI and WTH with meetings and webcams! Check out the [Level Up - AI Director](https://www.youtube.com/watch?v=jIyM_qT9RZw) and [Level Up - Real-Time Video Translation with AR Subtitles](https://www.youtube.com/watch?v=DvZRm-cqE7s) videos!

##### What's something cool you're working on?

Mark is working on some upcoming Kubernetes content.

Brian is working on an upcoming series of GCE videos with Carter Morgan.

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody and welcome to episode 238 of the weekly Google Cloud Platform podcast. As always, I'm Mark. And today I'm here with Brian." >}} 

BRIAN: Hello. 

MARK: Super excited to see you again. It's been a little while. 

BRIAN: It has. 

MARK: I say that to everybody on the podcast, because it really does feel like it's been forever since I've gotten the chance. And sometimes I only get the chance to see these people when we get to record podcasts. 

BRIAN: Also, and I think this may be a common feeling, time appears to be flowing differently lately. 

MARK: I feel like the last four podcasts I've started out being like, oh three weeks? That 70 years. 

BRIAN: Wait, a repeated joke. OK, moving on. What are the-- 

MARK: No, it's good to remind people. So today, this is a really interesting one. We got Arnaud from ASML. I wasn't familiar with ASML. But in the conversation, it turns out ASML is a manufacturer of the machines that make a lot of microchip style stuff. So a lot of transistor work, a lot of very, very, very careful science. 

And of course, this is a very cool thing. But he talks about how and why they actually bring in ML as they're designing those chips in real time. It blew me away, because I couldn't make that connection immediately. But in the conversation with him, and also we brought in our good friend, Dale Markowitz, to talk with Arnaud. It's just so fascinating to understand how an ML plays a part in this, and then some of the new things that brings up. So it's a great conversation. 

BRIAN: Awesome. Looking forward to it. 

MARK: For sure. But, before we do the interview, why don't we jump into our cool things of the week. 

[MUSIC PLAYING] 

BRIAN: OK, so I will kick it off. There was recently published, on the Google Cloud blog, a guide to all the Google Cloud migration guides. 

MARK: Yeah, guide of guides. 

BRIAN: Yes, exactly, the guide of guides. But I think it's really cool, because actually, migrating to the Cloud is pretty complicated sometimes. And partly just because there's so many options. 

And this article just lays out a whole framework for how to think about it, what the options are and then pointers to much more specific guides. When you get the lay of the land a little bit. So I found that really useful. 

MARK: Yeah. Exactly like you said, there's so many guides for migrating out there. But the reason that there are so many guides is because there's so many ways to do it. And certain ways might not work for you, certain ways might work great for you. But it's really hard to figure out which one makes sense. So a guide on guides does seem pretty useful. 

BRIAN: Yep. And you get in the middle of something, you're halfway through it. It helps to take a step back. So I found it really useful. Just get the lay land, what are the options, here's how to think about things. 

MARK: It's very cool. 

BRIAN: So take a look at that. All these links will be in the show notes down below. The other one I wanted to mention is a new collected view in our Cloud monitoring system for Computer Engine VMs. So we've had metrics around VMs in there for a very long time, but this brings it all together and gives you some summary and overview stuff about your entire fleet within a project. 

So that's super useful. And then, you folks may or may not be aware of, we do some really high level metrics gathering, things you can see from outside the computer level. But we don't ever look inside VMs by default. And so if you want more detail about what's going on with the memory usage, more detail about what processes are running, which things are using the network that sort of thing. 

There's an agent you can install that pushes metrics into various places, including Cloud monitoring. And so this fleet view will actually also show you which computers have the agent installed, and allow you to install it with a click. So altogether, just really useful and if you didn't know to look for it, you wouldn't know about it. So I wanted to highlight it. 

MARK: Yeah. There is so much value in being able to take a whole bunch of stuff and manage it from one place. So especially these huge systems that just involve tons of machines. I don't know how people keep track of that. But it's nice to see solutions that help you. 

BRIAN: Indeed. OK, what do you got? 

MARK: So I actually found two blog posts myself that I thought were really cool. The first one, it's an interesting one. Basically, Google is releasing some of the contents for this distributed PubSub workshop. Now, the article goes into more detail about what that actually means. But of course, SRE is a very popular concept. 

And these people do a lot of work when they're thinking about how to build huge systems that might go all over the place and have to deal with a whole bunch of events, especially. So it's always cool to see Google teaches a lot of this stuff to the people who are working here. And they use that information to set some and release, obviously, a lot of information. The SRE Handbook, being one of the classic examples that came out of the engineering we were doing. 

So this is just another example of a very cool workshop that if your teams are interested in, or if you know any group is interested, you can download all the materials. Both from the teacher side and from the student side. 

BRIAN: And that's pretty neat. So I thought that was a really cool offering. 

MARK: Yeah. And then the second one, I thought this was just a very curious little read. It's pretty interesting as well, but it's a little more specific. So I guess there was a recent container vulnerability that I wasn't aware of. But one of the reasons I may not have been aware of it is because of gVisor, which is open source. So you can check that out as well. 

But apparently, gVisor actually had the built in security ahead of time, so that when this container vulnerability came out, gVisor wasn't affected. Because it already protected people. And gVisor is the stuff that gets used for products like App Engine and Cloud Run. So it's super awesome to hear about that. And obviously, it sounds like gVisor does some cool things. 

But the blog post goes into some detail about what that security vulnerability was, how gVisor protected against it. It's a really cool read. 

BRIAN: It seems like these kind of vulnerabilities are always super nuanced to detailed things. So it's great to have a deep write up of that. 

MARK: Yeah, absolutely. Well, with all of our cool things out of the way, why don't we go ahead and jump into our interview with Arnaud. 

[MUSIC PLAYING] 

Hey, Arnaud. Thanks so much for joining us. To get things started, can you tell us a little more about yourself? 

ARNAUD: Hey, Mark. I'm Arnaud. I lead the development of performance applications for our lithography machines. Those applications combines physics and machine learning to detect defects or optimize corrections. And my team is the first team at ASML who moved its whole research and development to Google Cloud. 

MARK: Well, that's always awesome to. Hear so ASML is the company you just mentioned. So you said, lithography machines? What are those? 

ARNAUD: I think they're marvels of engineering. Just let me give you a few facts about this machine. So you have to imagine machine that is the size of two cell matrix, stacked on top of each other. And those machines are equipped with a laser. And that laser is so powerful that it can split a train rail in half in just a few seconds. 

And that laser also needs to hit a very tiny drop, twice, 50,000 times per second, to emit a special light. And that light has to travel to more than 2000 mirrors. And each mirror is so flat that if you scale it to the size of California, the biggest bump will be the size of a post stamp. And there are some parts in this machine that accelerate as fast as the fighter jets, and they stop without causing any vibration. 

It's very important that we don't cause any vibration. Because, those machines are building 3D structures on silicon wafers. So if those layers are misaligned, the whole chip must be scrapped. And just to give you a level of precision there, it's a bit as if you were driving from San Francisco to Los Angeles. 

When you're driving back, you can only deviate from your initial track by one millimeter. So that's the lithographic machine. It's used to make chips. 

DALE: That's so cool. It's funny, you just described an incredibly precise process, probably one of those precise processes that I ever hear about in technology. So it struck me as really funny or unusual that you're using machine learning, which is this probabilistic blurry thing that you don't usually think of as being ultra precise. 

ARNAUD: That's correct. Because you're right, the whole industry is grounded in physics. Everything must be modeled mathematically. Every phenomenon, optical, thermal, mechanical, you name it. And this is what we need to control the behavior of those machines and make them robust, make them predictable. 

At the same time, those machines are operating in completely sealed environments. There is no access to the internet. And the designs of the chips, the way the customers operate our machines, is completely unknown to us. Yet, we need to optimize the behavior of those machines to the context of the operating conditions. 

And this is where the machine learning comes. It learns from the context to further optimize the behavior of the machine. So this is the first type of machine learning we do. The second type is, because every machine is very precise, but like every piece of engineering, it drifts through time. 

Optics drift, other parts drift. So you must continuously adapt to those drifts. And also the conditions to determine if the processing step is OK or not OK. Those conditions, they also can change through time because the customer's specifications are changing. 

So you need a second layer of machinery that tells the first one when to retrain itself, to continuously be accurate. So it's a continuous learning process. And fully autonomous, because as I said, those machines operate completely in a vacuum. 

DALE: So what I'm hearing is, basically, this is the hardest machine learning problem of all time. Incredibly precise, you don't get to see where it's deployed, conditions change over time, and it's completely on device. 

ARNAUD: Yeah, that's pretty much it. 

MARK: So you've got these machines that are making chips, like you just said, in these environments that are completely locked down. And it sounds like, based on what you were saying, machines, they change over time and that can sometimes cause problems. And as you earlier described, there is really no room for error here. So what exactly is the machine learning doing in order to make sure that those mistakes aren't happening? How does that process work? 

ARNAUD: Well, it starts with us knowing the machines. So before we can make a reliable machine learning model, you need to define, what is the inputs of the model? And you can either go brute force and throw the thousands of perimeters that the machine is measuring, all the sensors, everything. Just throw it in the model and let the model learn and make the predictions. But obviously this just doesn't work. 

So in order to make it work, we need to apply-- I mentioned earlier, physics. We need to apply physics on this whole mass of data so that we go from a dimension space of thousands and thousands of parameters, to one maybe that is 50, 100. But those 100 features, they are extremely precise. 

You know that the ability of those features to differentiate phenomena is extremely precise. So that means that the layer of machine learning you apply on top of it can be rather minimal. And this is how we can mitigate the lack of data, by having extremely well engineers features. 

This is how it mitigate first our ability to deploy good machine learning without much data. The second step is, because we know that the conditions evolve, that the context is continuously changing, we need to make the system able to learn by itself and have multiple models compete with each other. Even do high [INAUDIBLE] tuning on the fly. 

So that every time we do a training run, it's not one model that you retrain. It's maybe 5, or 6, or 10. And every time, you will serve the best performing model. 

DALE: Let me make sure that I understand what's going on here. So you build the machines that build these very high [INAUDIBLE] chips. And you're using machine learning to adapt the machines to different customers environments? 

ARNAUD: Not per se to adapt the machine behavior. It's more to first, detect if the machine is doing what it's supposed to be doing. So this is the part where you do mostly defect detection. And why is it important? This is something that is also strange to the industry. 

Because if you look at the silicon wafer, there we have per chip, billions of transistors. So because the resolution is so high, there is no way you can just go there, take picture and look, is everything looking OK? Yes. Then we can move on. Now this is just not possible. 

So even when you do that, you need special equipment, special microscopes, that focus on very specific areas of the whole wafer. But that doesn't guarantee that the processing step was actually OK. So if you cannot visually inspect the whole wafer, you have to look for proxies. And the proxy is, how is the machine behaving? 

And this is where the machine learning comes into the picture. Because if you look at all the physics models we have, if you put them together and you apply machine learning, and you know, if the customer tells you, we tested this wafer. We know it's good or we know it's bad. 

While you can slowly learn about their own behavior, their own criteria for determining if the processing step was OK or not OK. And this is how you link what they physically measure, very scarcely, to what we can learn from the machine behavior. 

DALE: So your machine is manufacturing chips. Your customers are telling you this chip was accurate. And you're using that to do Q&A on the chips to make sure that they're produced correctly? 

ARNAUD: Yeah. That's correct. That is correct, yes. 

MARK: But then there's one more really interesting thing that you just mentioned, which is that these environments are sealed. And obviously, my expertise isn't ML. But generally speaking, when you've got machine learning, you're going to want to be able to take additional data, go back and retrain those models. But when the environment's sealed, that's not so easy, right? 

ARNAUD: That's correct. And this is why, actually when we ship a system, it has been through zero training. So it is completely vanilla. So the training starts when you install it. 

And this is why also it is acceptable for the customers to use it. Because there is no sharing across sites, which is of course, would be a very big issue from an IP perspective. So every time we store it, it is completely new. It starts from scratch. You start learning. 

Because even the different customer sites, even the chips we are making are also different. Then actually transferring the learning from one site to another doesn't really make sense. 

DALE: First of all, what happens when you don't have machine learning? Then as this model's learning, in the beginning, you have bad chips that you can't really control it, but then over time you get better at understanding that they're flawed? 

ARNAUD: Yes. So typically, before you install, the chips have been processed already. So the customers already have some historical data of what went well, what didn't go well. This is typically when you have the run phase, where you start experimenting with the whole fleet you're putting together. 

So there is data already. So you build upon that to not start from scratch completely, but really learn from a circle of data that is already available, which is already, in most cases, a few months of production. So that is good enough to get your model to the minimum spec you want. And then it will keep on improving. 

DALE: Very neat. 

MARK: Now of course, like you said, this is something that's very sensitive to changes. And it's going to be specific to customers. So obviously it sounds super complicated. In a way that I don't think I can fully grasp my head around. But you're be able to take this existing data from these customers and use that for a base level of the machines you're using. But then your machines also are expected to create the proper chips immediately when they're deployed. 

ARNAUD: Correct. 

MARK: How is that possible? There's not that much data that's coming in from these customers before you're sending them over, right? 

ARNAUD: No, exactly. So there are two things there. Obviously, the machines are already performing extremely well. So what you really want to do is squeeze the last few percentages of yield that you're losing today. 

So the machines don't need it to operate, fortunately. But this is, again, to go to levels of accuracy and precision that would be very hard to reach otherwise. And when it comes to us first building the system, we don't get much data. But of course, to prove that your machine learning works, you need data. 

It's like this chicken and egg issue. So usually what happens is that a customer gives us a small data set. And just to give you an order of magnitude, they maybe give us 20,000 data sets over three months of production. 

That is very sparse. Because if you look at what the real fab would be crunching, they would be producing those 20,000 wafers in a week. So we get 20,000 in three months. So that's anyway good enough for us to get going. But the danger there is you could easily say, well, I have a sparse data set. So if I reach 60% accuracy, that is good enough. I know that when I will deploy it, I will reach 80%, 90%, 95%. 

But that's not how it works. When a customer actually want to deploy your product, you first have to provide evidence that even on a small data, you will reach that. And there is where the physics comes in. 

DALE: So you're describing, it's a classically difficult problem in machine learning. Where for one reason or another, the data that you have access to train your model on is actually different than the data that your model will be predicting on in production? 

ARNAUD: Correct, yes. 

DALE: And so what's the next step? How do you convince the customer that it's going to work? 

ARNAUD: Well first, obviously, you need to prove on your data sets that you meet some minimum performance level in accuracy and precision, or recall, or [? AUC. ?] Once you meet that, then you deploy. And then you actually will have to prove two things. 

One is, you can be accurate. The second thing is, you need to be able to explain why you are accurate. Because I remember I was visiting a customer once and we were very happy with our results. We were above specs, so we were all fueled up to present. 

And after five minutes, he stopped us there and he said, You know guys, I don't really care if your accuracy is 100% or not. Unless you can tell me when you predict that it's OK, that it's actually OK. And when it's not OK, that is actually not OK. You need to tell me why. Why are you right? I don't want a system that gives me correlations. I need a system that can prove and tell me that there is a causal relationship between your prediction and your features that you use as inputs. 

And that's very important to understand. Because if you flag that's a processing step was not correctly executed, they can take the wafer, rework it and they don't take a giant hit. But then, what they really need to know is, is it something that is [INAUDIBLE], so it's bad luck? It happened once, but this is it. Or if it's something that is going to be recurring. 

Because if it's going to be recurring, it means that there might be something wrong with the hardware. And that there is something wrong with the hardware, it means that maybe two weeks, three weeks from now, the machine might just go down without it being scheduled. And schedule down is where they lose most of their money. So being able to explain is really critical. 

Because they don't just want an alarm bell. They want to know, OK, well if you raise your alarm, then tell me how to fix it. This is what also we, as equipment providers, where we are strong. So we need to explain also to our support people. Because they know when they go to the machine, that if they see that the rate of failure prediction is increasing, they need to know, why is that. 

Where should I look in this monster of a system to be able to troubleshoot it as fast as possible? So explainability is key for our local engineers, the support teams, but also for us. Because if we don't understand what is going on, it means we don't understand how the equipment is behaving. If you don't understand how the equipment behaves, it means at some point, you won't be able to improve it anymore. And if you can't improve your own equipment, well, your business is dead. 

MARK: Yeah. Obviously, explainability has been a huge topic recently. And now that machine learning models-- I think yours is a great example-- of just how complicated they can be. It really is about explaining how you got from the actual data to the prediction. And then for a business that's this intense and this kind of small scoped, right? Because it's very, very tight and you have so little room for error. Explain-ability has to be such a critical feature that I'm sure everybody absolutely has to have. 

ARNAUD H: Exactly, yes. We saw that, as I said, you're dead in the water. If it's just about sharing correlations and proving your model can be accurate, any AI startup can do it. You don't need to be ASML to do it. The key for us is really to bring our very deep knowledge of all the modules in the system and link that to a prediction that can then be actionable. I think the action part of the prediction is the make or break condition for any machine learning solution. 

DALE: So when I think about machine learning models and explainability, I group them into like two buckets. So on the one hand, there's your, what people usually call, a black box, neural network where you feed in an image, which is a million pixel color values. And it does a magic, and then it spits out a prediction. 

You can try to figure out, maybe it was looking at this corner of the image or that corner. But it's really hard to know. And then there's the other side of the spectrum where you're not just putting in a ton of data, you're putting in somebody's age and their height, and these features or variables that you really understand. 

And then you're using a much more simple algorithm to make the prediction. And people think that that's less black boxy, more understandable. It seems like for you guys, that's a large part of it. It's what are you putting into the model? And you have so much knowledge of the domain. 

You understand the physics of how the machines work, that you can actually make more intelligent features. So can you tell me about that? What sort of data is going in and how are you making it understandable? 

ARNAUD: So data going in is anything the machine can produce. So that's sensory information, really any kind of calculation that is done during the lot processing. And there we are talking about thousands and thousands of parameters. 

So this is, of course, something to throw at a huge neural net and let it figure out. But then very likely you will end up with all kinds of correlations. Some might be correct, some might be incorrect, but mostly noise. So you first need to do step of dimension reduction. 

And dimension reduction, you can go for principal component analysis, if you want something very generic. Or we can go on for the physics. So this is the step where you reduce first dimension with domain knowledge. So putting a lot of physics on top of the thousands of parameters. So this reduces dramatically the number of features that will go as input to your model. 

DALE: I don't want to get too into the physics details, because I don't know them. But can you tell us a little bit? What does it look like? 

ARNAUD: Let's take something simple. So I talked about the big laser. When you shoot a laser or something, it's pretty hot. Which means that, in our case, we shoot a laser at a reticle And the reticle is, physically it's a bit like a negative in good old fashioned cameras, that contains the design of the layer that we have to process. 

And when you shoot light at it, it starts to expand and deform. And the deformation vary. They can take all kind of shape, like a barrel shape or on it the bottom will expand, or the top will expand. And if you know how it is expanding, you know how the light that goes through will deform. 

Let's say you want to shoot an L, and on the reticle, it's a straight L. But because it starts to deform, it's not really a completely straight L anymore. It's a bit slanted, it's a bit bolder. And you know that this kind of deformation, if you just directly shoot it on the silicon wafer, that will not cut it. You have to apply some corrections in line to make sure that it is an actual L, as you want the L to be projected. 

So the physics model is actually for every bit of information or every module that we know, we try to predict what is going to be the ideal shape versus what the actual shape is. And if you know the difference between the two, you can make features. And if you apply it to the hundreds of modules we have in the system, then you have the inputs for your machine learning model. 

DALE: I see. So this is very interesting. So you start with tons of features that are kind of meaningless, like various sensor readings. So then you say, well, I don't really have an opinion about what the sensor readings should be. But I know that this light should refract at this angle. I'm botching that. So you compute that, and that makes a lot more sense to everybody else looking at the algorithm? 

ARNAUD H: Yes. Also because, if you turn into these kind of high level models, you can really explain the causation between, OK, I observe this. I'm pretty sure the consequence will be this, which makes troubleshooting issues a lot easier. 

MARK: So this really reinforces the point you made earlier, about spending a lot of time on feature engineering. This is the most important thing in order to make sure that your models continue to be accurate time and time again. 

ARNAUD: Correct, yes. And so this is the thing, so we were just discussing explainability. So your feature part, if you don't get your features right, you will never get the output right. And then we still apply a ring fencing around the machine learning. Because even the output of the machine learning, you don't want to use your row features as the units of explanation. 

Because the features we use as input are pretty fine grained. To give something meaningful to people, you need to combine some of them into higher level explanations that can have physical meaning. So you have to wrap the machine learning into, the input is physics that is fully known. Then you have the machine learning in the middle and then the output for an explanation is back to physics. 

So it's not just using any standard algorithm for feature ranking. No, on top of this ranking you apply another layer of physics with known causation relationships to provide an explanation that is as good as possible. 

DALE: It's funny because I think that a lot of times people think machine learning just takes a problem and automates it, and the computer does it. But actually I feel like your application kind of perfectly sums it up where the model is doing this one piece, but you and your understanding of physics is really on the input and the output, really making sense of the data. It's really like expertise with a little sprinkle of machine learning in there. 

ARNAUD: Exactly. And I think it's the only way to be successful, at least in the manufacturing area. Because you have physical consequences. And here we talk consequences like, detecting defects. But the other consequences can be hurting people, killing people and damaging equipment. There, the machine learning must be tamed. It must be put in a box, just to make sure that even if something goes wrong, you don't have physical consequences. 

MARK: So of course, one of the things you actually mentioned earlier was that your team inside of ASML has been also the first one to adopt Google Cloud. I'd like to pivot away from the machine learning side and understand how are you all using Google Cloud? And I'm assuming you're doing some sort of machine learning training on Google Cloud. 

ARNAUD: So we noticed that because we don't have a lot of data, we need to compensate for that. And to compensate, you need something that helps you experiment and learn super quickly. So we needed an environment where it was extremely easy to make hypothesis, test them, check the results, deploy, see how it goes, and then learn from there. to make some kind of a million baby steps, and then eventually those steps will bring you to the real solution. 

There you, of course, leverage all the compute power of the Cloud and the scalability of the Cloud. But also we love really combining KubeFlow with BigQuery, with the AI Notebooks because their engineers have the perfect combo to test locally, experiment, visualize, and then when they want to do full blown experimentation, they give it to KubeFlow. 

It will crunch the results in no time, put the results back in BigQuery, and then you iterate, and iterate, and iterate. And if you weave it in using Cloud Build, you can have applications out of the door in no time, and still providing the right level of quality. Because you experiment fast and you want to learn fast, you should not compromise on quality. 

And having a fast experimentation environment and then a fast build environments is key to be able to guarantee your customers that when you come with software, there might still be a bit of experimentation to be done there. But it is good quality. It is rock solid. And there, the combination of the two environments, I think for that, Google Cloud it's perfect. 

MARK: Yeah. I think we'll have to make sure we put a link in those show notes too. Because our friend, Stephanie Wong, just put out a couple of videos on KubeFlow that go over something very similar. Because a couple of the episodes specifically are using KubeFlow to crunch from data from BigQuery. And so that might be a very cool way for listeners who want to try it out for themselves. But I'm sure the ASML version is much, much more complicated. 

ARNAUD: Yeah. What is also nice about KubeFlow, what we see is that a lot of the compute time actually doesn't go into training phase because the data sets are so small, but more in the physics calculation. 

And what you really want to know and KubeFlow for is, how is my physics drifting through time? If you have three months of production, are my model stable? So you want to look at their distribution from week to week, or months to months. Is it changing? Is it the same? And there, KubeFlow also helps us because you can visualize it if you tweak it a bit, and see how it is evolve through time? 

And there also, all the different physics experts can learn from to see, OK, I see that this one is drifting. This one is not. What is the impact on my machine learning model? Is it normal? Is it not? Is this drift OK or not OK? 

Because there are some drifts that are totally fine, some drifts are not. So how to differentiate between the two. And that really is extremely difficult. Because it can have a big impact on explainability. 

DALE: I'd like to ask a little philosophical question here. Do you find this project-- when you describe your deployment, it sounds similar to the way that you would deploy lots of different types of software. Do you find that there's something unique about it being this machine learning, probabilistic type of model, that makes the whole software development process feel different? 

ARNAUD H: I think when I tell the story, most people believe that what is unique is that, when you find machine learning in the Cloud, but deploy it on prem, in a completely sealed environment. And they say, oh, this is so unique for ASML. Guys, how can you do it? That's not how I see it. Yeah, I think in a way they are right. But what is really, really for me, the interesting part, is because we have these constraints of deploying in a sealed environment, we need to build a really autonomous AI. 

So it's not just to do [INAUDIBLE] and then every once in a while an ML guy will just look at the data and check if it looks. OK and if it's OK, we'll serve a new model. Otherwise, just let the old one run. We just don't have that luxury. 

So it means that in our development, in our tests, in everything we do, we need to make sure that this bloody software is autonomous. That if something happens, it is smart enough to retrain yourself, to adapt itself, to the variations in the context that are happening without any monitoring. And that, I think, is the part that is unique. 

And there, if you see it like this, it doesn't matter if it's running in the cloud or in prem. What really is important is, how do you set up your whole development or research by applying your development pipeline to support this autonomous AS use case? 

DALE: It almost sounds like you're building a Mars Rover. I'm going to send it out there and then it can't make any fixes. So I better get it right. 

ARNAUD: Exactly. That's exactly that. Yeah. 

MARK: I also love how it shows this case where the cloud is super useful. Because you do all your training there, you can do all the work there, even though your end product doesn't need to be on the Cloud. And in fact, in this case, it's the extreme opposite. It's on prem and it's cut off from the internet. 

So I think it does do a good job of showing, hey, your Cloud can be used to help make this-- hopefully it's been a good experience. and made these model training, like you said, pretty quick. Of course, everyone loves BigQuery. It's a great product. 

So being able to do that, do all of the work, have all of your teams participate in different areas and generate this model. And then, eventually like Dale said, go put it in the Mars Rover, deploy it and cross your fingers. I think it's a really cool use case. 

ARNAUD: And it's also future proof. Because if the industry turns around into 10 years from now, and there is more migration towards the Cloud, you already are Cloud friendly. So you already anticipate on your development costs that it will not have this big legacy application that you will have to refactor completely. 

DALE: One thing that I always wonder is, at ASML, what was it like to start on this machine learning project? Was it considered edgy? Did you know it was going to work? Did you have to convince people it was a good idea? 

ARNAUD: It's all that. It was edgy. We had to convince lots of people. And the whole industry is grounded in physics. So as soon as you come with machine learning, all kinds of strange bird names comes out, it's not reliable. It's just correlating stuff. You are correlating this with the moon, and that makes no sense. 

So there is a lot of convincing you need to do. So you need to be very fact driven and accept that you will fail, and that you will need many iterations to get there and prove it. I think this is the only way you can make it work. 

The great thing about the culture of ASML is that, even if people believe that you will fail, they will still let you go. Because maybe you will be lucky and actually, your idea is better than theirs, and you might be successful. And I think this is how we managed to engage in those kinds of projects Every great breakthrough we had was deemed impossible. So this is why we can do those kinds of things and slowly make steps, and prove it works one step at a time. 

DALE: Is there anything you can tell us, anyway you can quantify how much money people save because now we have this model? Any correlative of that? 

ARNAUD: I would love to. I'm not allowed. Because this is typically, if the customer tells you how much money they save, they put a price tag on the product, which they won't do. 

DALE: Yeah. That's a good point. They're like, eh, It's OK. Take it or leave it? 

ARNAUD: Know that if they want it, it brings value. 

MARK: That's the important part, is that ultimately they're using these things. They're going to be saving a huge chunk of money. And it's just one more factor to think about that is in this very complex system of how these machines actually operate. And that very, very small room for error. 

ARNAUD: Yeah. 

MARK: All right, well, I think we're just about out of time. Before we wrap things up, Arnaud, is there anything else you wanted to mention? 

ARNAUD: No. Thanks a lot for having me. I really liked it. 

MARK: Yeah, happy to. And then, I see that there's a YouTube link in there. Can you tell us what those videos are? 

ARNAUD: Oh, yes. So there is one video about, what is ASML. The second one is really interesting, because it shows you how you go from something we use everyday, like a phone, to deep, deep, deep down, how does a chip look like? And you will see it if as you zoom in, what looks like the skyline of a big city is actually billions of transistors. And it gives you the type of work that those machines are doing. It's really spectacular. 

MARK: Awesome. We'll make sure to put those links in the show notes for people who want to check it out. 

ARNAUD: Thank you. 

MARK: All right, Arnaud, thank you so much for joining us. Had a lot of fun. Learned a lot, talked a lot about things I don't quite understand. But that's the best way to learn. So, thanks again for joining us. 

ARNAUD: Thank you. 

DALE: Thanks. 

MARK: And of course, thanks again to Arnaud for coming on. And of course to Dale, for joining us and having a really cool conversation. Like I said, we talked to Nvidia last week and they kind of blew my mind with how they use ML for GPUs stuff. And now Arnaud comes in and tells a story about how ASML is using machine learning for actual manufacturing. Like in the process of shooting lasers at things. 

it's so cool to see what the applications of ML are. And I think obviously, as time goes one, we're just going to see more people coming up with good solutions. 

BRIAN: And using these solutions to help make our solutions better. 

MARK: I mean, I'm sure there's already ML for ML. But at one point, soon, I'm sure we're going to have ML, for ML, for ML. 

BRIAN: Perhaps a little too deep for me today. I'm going to have to take a drink of tea and think about that. 

MARK: That's so much learning. That's way too much learning. 

BRIAN: So question of the week time. 

MARK: So Brian, you found a really cool topic for this week's question of the week. 

[MUSIC PLAYING] 

So Brian, what kind of cool videos can I find about the applications of ML in other services? 

BRIAN: This is kind of a staged question, if you will. It's just really neat and it combines AI with something that is common to a lot of folks that are working from home now, which is webcams and such. And so basically, I want to encourage everybody to check out this video. It's a demo of using local AI. So it's running on this little coral USB device, to analyze the frames from video feeds, and in this case multi camera video feeds. 

And so you've got different cameras around the person speaking, and then it does a pose detection. So it figures out which direction your face is looking, and based on that, picks the camera where you have the most direct eye contact going on, or at least kind of facial orientation. And then it takes it a step further and actually controls a couple of different switchers to actually change the camera feed that's going out. So you can have automatically those dramatic look to the side, gopher moments, or what have you. Anyway, I thought it was just a really nice example of local ML and automation, and glue with this kind of both fun and real world, tangible connection. 

MARK: Yeah. That goes back to our ML on ML on ML conversation. But the reality is, is that he's built a really cool solution that kind of automates something that would have to be a little bit more manual before. But it's also a really cool tech demo of how these pieces fit together, and the kinds of things you can do. And actually, last week we had Zack come on for a couple of minutes to talk about a solution he built using ML on the edge. And it's just another example of how all of this stuff is enabled. And when people see these, the hope is of course, that they're like, Oh, you know what? I have this problem that I think I could try now based on ML. 

BRIAN: It's funny you said that. Because that's exactly where I was going. Maybe this example is not exactly what the situation you have. It's really easy to think about and reason about. Oh, I've got images coming through and I want to do something different with the images. 

So that can be applied in a whole bunch of different scenarios. I find it difficult to imagine what's possible when things are new. And so I just love seeing these examples, and it's also just a great presentation. So I encourage folks to save that link for later and watch it when you're at a computer and you can look at YouTube. 

MARK: Yeah. And actually, he did another really, really cool video. I think we want to include that one as well. I don't know if you saw this one. But he hooked up the Google Cloud speech API. So he was talking on a camera. It went to the speech API. So it came out as text so you can transcribe it 

Then he sent it to the Translation API. So as he was talking, we were getting basically real time translations. And then he sent that to a projector pointed at his shirt. And he was having a call with someone, with real time transcribed translated version of what he's saying right there. Again, it's just super, super cool. And this one isn't even using custom ML. It's just using two Google Cloud Services. 

BRIAN: That's awesome. Love, love, love it. So we've been kind of in the abstract here. So this is Marco, solutions architect on Cloud who's built these demos. And they're just great. So check them out and hopefully you get inspired to build something that connects your pieces and solves problems for you. 

MARK: It's really cool stuff. Definitely go check that out. And they're short videos, four, seven minutes. They're awesome. And it is really, really cool to hear about these solutions based on relatively little actual work. 

BRIAN: I think this principle applies across the board where you've got this kind of riches of API kind of scenario, where you have very capable APIs is with a reasonable amount of glue work. You can stitch them together to solve real problems that you have in your applications. And I think that pattern just shows up over and over again. 

MARK: Then I've talked about this before, but I think the next step is to figure out how we can use ML to replace us on the podcast. 

SPEAKER 1: I just think the show sounds better than watching Love Island Australia. Just let me know when you want me to take over. 

MARK: I would never do that. I have way too much fun doing this. So that would never happen. 

SPEAKER 1: That's too bad. I had an interview with Rebel Wilson lined up to talk about ML assisted choreography. 

MARK: But we should do at least one. 

SPEAKER 1: Now you're talking. 

MARK: We can try. We got some ideas. We'll try something out. 

BRIAN: It'll be fun. 

MARK: Let's see how this goes. 

SPEAKER 1: I'm trusting you guys that we'll make this happen. 

MARK: Well, in the meantime, Brian, what have you been working on? 

BRIAN: So I'm pretty excited. Carter Morgan and I have been working on a series of videos about Compute Engine. You might not be surprised to hear that, kind of excited about Compete Engine, our VM. So I'm looking forward to those coming out. 

MARK: Well you know, I've also been working with Carter Morgan on a very different series talking about Kubernetes. And actually, it's probably not that different. But I think I talked about this a couple episodes ago. And it's been a lot of work putting all this stuff together. But we're coming close to the finish line, and it's really, really cool to see all the cool things that we've done. 

So be on the lookout for that on the YouTube channel because it's so much fun to be able to create these things. And we get to learn a lot while creating them, as well as sharing the information we think is helpful. 

BRIAN: Awesome. OK, well thank you all for listening. And it's the end of another podcast. 

MARK: Stay safe out there. 

[MUSIC PLAYING] 

We know that monster trucks are obviously designed to do stunts and collisions, all those kind of things, and be driven around. But there's a huge safety factor in there too. 

BRIAN: Yeah. So we need remote control monster trucks. 

MARK: That's what I'm thinking about. So if we could use the Cloud to control the monster trucks, we could do this without putting people in danger. 

SPEAKER 2: Sunday, Sunday, Sunday with the Google Cloud Podcast. The monster trucks will be there. 

[CHEERING] 

[ENGINE REVVING]