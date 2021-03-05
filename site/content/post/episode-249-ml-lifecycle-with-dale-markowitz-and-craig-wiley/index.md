+++
audioDuration = "00:44:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.249.mp3"
audioSize = 63763893
categories = ["ML", "Machine Learning", "AI"]
date = "2021-03-03"
description = "Jenny Brown co-hosts with Mark Mirchandani this week for a great conversation about the ML lifecycle with our guests Craig Wiley and Dale Markowitz."
draft = false
episodeNumber = 249
hosts = ["Mark Mirchandani", "Jenny Brown"]
title = "ML Lifecycle with Dale Markowitz and Craig Wiley"
image="/post/episode-249-ml-lifecycle-with-dale-markowitz-and-craig-wiley/images/hero/hero-EP-249.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/lx00eh/episode_249_ml_lifecycle_with_dale_markowitz_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Jenny Brown co-hosts with [Mark Mirchandani](https://twitter.com/markmirch) this week for a great conversation about the ML lifecycle with our guests Craig Wiley and Dale Markowitz. Using a real-life example of bus cameras detecting potholes, Dale and Craig walk us through the steps of designing, building, implementing, and improving on a piece of machine learning software. 

The first step, Craig tells us, is to identify the data collected and determine its viability in an ML model. He describes how to get the best data for your project and how to keep the data, code, and libraries consistent to allow better analysis by your ML models. He talks about the importance of a Feature Store to aid in data consistency. Craig explains how machine learning pipelines like TensorFlow are great tools to improve consistency in the ML environment as well, making it easier to improve your model and even to build new ones using the same data. Keeping this consistency from data scientist analyzation to ML developer to model deployment means a more efficient process and product. 

Evaluating models after production is an important step in the lifecycle as well to ensure accuracy, validity, and performance of the model. Craig gives us some examples and tips on monitoring models after they've been deployed. We talk about the challenges of scaling ML projects and Craig offers advice for developers and companies looking to build ML projects.

##### Dale Markowitz

Dale Markowitz is an Applied AI Engineer for ML on Google Cloud. Before that, she was a software engineer in Google Research and an engineer at the online dating site OkCupid.

##### Craig Wiley

Craig is the Director of Product for Google Cloud's AI Platform. Previous to Google, Craig spent nine years at Amazon, as the General Manager of Amazon SageMaker, AWS' machine learning platform as well as in Amazon's 3rd Party Seller Business. Craig has a deep belief in democratizing the power of data, he pushes to improve the tooling for experienced users while seeking to simplifying it for the growing set of less experienced users.  Outside of work he enjoys spending time with his family, eating delicious meals, and enthusiastically struggling through small home improvement projects.

##### Cool things of the week

* Introducing GKE Autopilot: a revolution in managed Kubernetes [blog](https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot)
* At your service! With schedule-based autoscaling, VMs are at the ready [blog](https://cloud.google.com/blog/products/compute/introducing-schedule-based-autoscaling-for-compute-engine)

##### Interview

* Google Cloud AI and Machine Learning Products [site](https://cloud.google.com/products/ai)
* GCP Podcast Episode 240: reCAPTCHA Enterprise with Kelly Anderson + Spring ML Potholes with Eric Clark [podcast](https://www.gcppodcast.com/post/episode-240-recaptcha-enterprise-kelly-anderson-springml-potholes-eric-clark/)
* Using machine learning to improve road maintenance [blog](https://cloud.google.com/blog/products/ai-machine-learning/video-intelligence-machine-learning-improves-pothole-detection)
* Key requirements for an MLOps foundation [blog](https://cloud.google.com/blog/products/ai-machine-learning/key-requirements-for-an-mlops-foundation)
* TensorFLow [site](https://www.tensorflow.org)
* Kubeflow Pipelines [site](https://www.kubeflow.org/docs/pipelines/)
* TensorBoard [site](https://www.tensorflow.org/tensorboard)
* How to dub a video with AI [video](https://www.youtube.com/watch?v=T2TAAHmNBnE)
* Can AI make a good baking recipe? [video](https://www.youtube.com/watch?v=7sn8df97-JU)
* Machine learning without code in the browser [video](https://www.youtube.com/watch?v=i9tjzr1KME0)

##### What's something cool you're working on?

Jenny started a new podcast that reads interesting Google blog posts over at [Google Cloud Reader](https://feeds.transistor.fm/google-cloud-reader).

Our friend Dr. Anton Chuvakin started the Cloud Security Podcast by Google. Read more about it and listen [here](https://cloud.google.com/blog/products/identity-security/introducing-google-clouds-new-cloud-security-podcast). Follow the show and hosts on Twitter [Cloud Security Podcast](https://twitter.com/CloudSecPodcast) [Anton](https://twitter.com/anton_chuvakin) and [Tim](https://twitter.com/_TimPeacock)

And listen to Anton on the [GCP Podcast Episode 218: Chronicle Security with Dr. Anton Chuvakin and Ansh Patniak](https://www.gcppodcast.com/post/episode-218-chronicle-security-with-dr-anton-chuvakin-and-ansh-patniak/).

 {{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 249 of the weekly Google Cloud Platform podcast. As always, I'm Mark, but today we're here with a new special host, Jenny, yay. Hey, Jenny. How you doing?" >}} 

JENNY: Hi, everybody. It's going. Neutral is what we hope for these days, right? 

MARK: You know what, but it is going, and no one can argue with that. Well, I am super excited to have you here, and we had a super jam packed episode, actually. Tons and tons of stuff. Jenny, can you give us a little hint as who we're going to be talking to you today? 

JENNY: So we are talking to Dale Markowitz and Craig Wylie. We're talking about AI, we're talking about potholes, we're talking about ML ops. It's going to be great. 

MARK: You might think to yourself, what do AI, ML, and potholes have to do with each other? Well, stay tuned for that conversation because it's a really, really cool one. But before we go into all of that, why don't we start with our cool things of the week. 

[MUSIC PLAYING] 

MARK: So for my cool thing-- and you may have seen this-- but there's actually this new announcement about GKE Autopilot. I mean, this is just phenomenal. It's super, super cool stuff. I've heard a lot of cool people talking about it on Twitter and all the social medias, but we do have a blog post that will go into a lot more detail than I will. But it's just really cool to see this new announcement about how you can kind of choose between GKE standard and Autopilot. 

And GKE has always been something that's been really interesting because you're not having to worry about the control plan anymore. Fully managed control plan, but then you really get to do everything else. Well Autopilot is like the next level, and now you don't even need to worry about the nodes anymore. I mean, this is extra managed? Manage squared? I don't know what to call-- I guess Autopilot is probably the right word. 

But it is really, really neat. There's a video in the blog post I recommend checking out because it'll do way better justice to what it actually does than what I just mentioned. However, I do think it's a really cool way to capture the benefits of Kubernetes with once again, not being burdened with having to worry about maintaining all the stuff. This is the whole idea. Let's not worry about the infrastructure, let's really focus even more on just getting all the benefits of the Kubernetes API. 

JENNY: Yeah, absolutely. I mean, with Cloud computing, like you're offloading a lot of that worry, a lot of that infrastructure, so why would you then hold on to something if you don't need to, if you could have it be done automatically for you and probably better. 

MARK: Probably better. 

JENNY: Probably better. 

MARK: But definitely more portable too, right? 

JENNY: Oh, yeah. 

MARK: Because you're already taking advantage of Kubernetes. It's a cool thing. Check out the blog, check out the video. Really exciting, and I think you're going to hear a lot of people talking about this real soon. 

JENNY: That was originally my cool thing for the week but-- 

MARK: But I stole it. 

JENNY: Yeah, right, stolen because it's the coolest thing of the week. 

MARK: That's fair. I apologize. I should not have stolen the coolest thing. 

JENNY: My cool thing of the week is that we've also introduced schedule-based auto scaling for Compute Engine. So this is pretty rad. It's along the same lines of kind of the set it and forget it kind of thing like you were talking about with Kubernetes over there, and it's really neat because we've got schedule-based auto scaling that's going to let you improve the availability of your workloads by just scheduling that capacity ahead of the anticipated load. 

So if you've got something that kind of pops up every now and again, you've got those usage spikes that you can kind of anticipate, you can just schedule this ahead of time now and you don't need to worry about it. Nothing's going to fall apart for you. So if you run that workload on a managed instance group, you can schedule the required number of VMs, you can schedule the required number of VM instances for recurring load patterns, as well as one off events. 

So there's a lot going on there. The blog post is going to break it down a lot better than I am, but I guess the theme of today is why do it yourself when you can schedule in advance or have the machines do it for you, really. 

MARK: Yeah. That's a good theme, actually. I like it. And I think you hit it right on the head when you said that it's very similar to the Kubernetes thing. I like this auto scaling thing especially because you can do downscaling in the nighttimes. 

So this is a great example if you're running a bunch of dev-based workloads. One of the biggest cost expenditures that you might have if you have a huge dev environment is well, your devs probably aren't working at night, maybe they're not working on the weekends, maybe they're not working during certain times of the day. Those are great times to scale down your instances or even shut them off. 

So anything you can do to save money in that regard is always super helpful, so schedule-based auto scaling might be another great way to handle that, as well. 

JENNY: Oh, totally. 

MARK: Well, with our cool things out of the way, why don't we go ahead and turn it over to our conversation with Dale and Craig. 

[MUSIC PLAYING] 

MARK: Hey, everyone. Super excited to have this conversation, but to get things started, why don't you go ahead and introduce yourselves. 

DALE: I'm Dale, I'm an applied AI engineer here at Google Cloud AI, and I'm joined by Craig Wylie. 

CRAIG: Hi, I'm Craig, director of product management for Google Cloud's AI platform and the tools and services that we build to help others build machine learning more easily. 

MARK: And that's what we're talking about today is machine learning, And Dale and I were chatting, and we had this great idea to kind of walk through and understand-- because I really don't know much about this stuff-- I want to know a lot more about what it looks like to take machine learning and actually put it into production. So I think the best way, Dale, that we were talking about this, to kind of give an overview of what this looks like is to come up with an example, right? 

DALE: Yeah, totally. I read about a really cool and the other day actually on the Google Cloud blog that I thought was fascinating. It was that the city of Memphis had recently deployed these models. It was based on cameras on buses that would look for potholes in the street to try to report errors. I thought that was a great machine learning use case. 

MARK: And we also had a great interview with Max from our team and with the folks over at SpringML who helped implement that. But in the meantime, they talked a little bit about what went into the process, but they didn't really talk about the production [INAUDIBLE] of it, so let's talk more about that. Where do we even start with a concept like this? 

CRAIG: I think for me, it all starts with identifying the data and determining whether or not that data is data that's fit for using in an ML environment. And all too often, that can happen with folks looking at data sets they may have internally, things like data warehouse capabilities or other data lakes they have, or they may be going out and-- like in the case of the potholes-- going out and instrumenting something new to kind build purposes fit for that data collection for that model. 

DALE: It's funny because as a practitioner, when you're learning machine learning, a lot of times the learning begins once you already have the data set. Like, you found a data set on Kaggle and then all the learning is centered around figuring out how to build a model. And I feel like we don't think that much about how the collection process works or what its challenges are. 

CRAIG: Having said that, once that data set is identified and you start working on it and you start doing some of the critical data preparation needed to make it machine learning ready, we can often find ourselves getting caught by the first of a series of gotchas, between the application of machine learning and data science all the way through to the productionalization. And what I mean by that is, certainly when I would manage machine learning teams, we would go build a new forecasting model or something like that off of the data warehouse only to realize that the data sources we have in production to actually score this model when we want to use it are actually materially different than the data set that we had captured for building and training the model. 

And those differences, while they might seem small to us or to other folks who might look at the problem from a distance, once you get up close, they can actually cause material problems to the performance of the model once it gets into production. 

DALE: This is interesting. So you're saying basically that there can be a surprising difference between the data that you've collected to train and then the data that you're actually evaluating on in production. Why can this happen? 

CRAIG: What I've traditionally seen is when organizations go to great lengths to create really strong BI environments and things of that nature, often that data has gone through a series of cleansing steps that make it different than the production data sources that it was coming from. Maybe you've gotten rid of outliers or you've gotten rid of cancellations or you've gotten rid of bots or something like this. 

And you've gotten rid of them in your very prepared data warehouse, your highly curated data lake, but then when you actually go to run the model in production, it's seen some of those things that have been removed from the data set and what have you, and those types of issues can all of a sudden make the data behave much differently than it did when the data scientist was building, training, and evaluating the effectiveness of that model. 

MARK: So does that mean that you'd always want to just have the raw production data when you're training a model? 

CRAIG: I guess in some ways it would mean that. Having said that, that can get pretty messy and pretty ugly pretty quickly. One of the I think growing trends in data science right now is this idea of a feature store, or this idea that your data science team would actually start collecting and identifying specific features that are related to categories of machine learning problems they might find. 

You could imagine in an e-commerce environment somebody saying, hey, I'm going to get a series of features about our customers. Maybe where they live, how old they are, some other demographic information, their recent purchase history. And now, instead of this being something the data scientist has to go and create some strange aggregates in the data warehouse that hopefully they create similarly the next time they go after it, instead, this idea of a future store would be that you could describe these calculations you want to do and then actually start recording the production data sources right there, and then serving those stored production service values so that you don't end up with this kind of difference between, hey, where we store our data and the systems that actually create our data that our machine learning models are going to be required to run on. 

This idea of consistency between the real world that you're trying to predict or the system you're trying to predict, the environment that your data scientist is building in and doing their discovery in, and then finally, the environment that the model is being ultimately produced in or deployed in. Ensuring that those different areas of this process all have identical environmental variables around not only the data, but also the code in the libraries and what have you becomes a critical step as we start to try and understand machine learning as not the little fun science project that sits in the corner, but instead, the center of how we create value for the organization. 

MARK: Yeah, and so that's a great point for our example here with the potholes. We're going to be looking at what I assume is pictures of the road because we did talk about that and we'll link to the podcast episode that has it with a bit more information, but they were taking these pictures from cameras that were attached to city buses. So what does that look like in terms of making sure that we're getting the right amount of data and the right style of data and maybe even creating a feature store for training an ML model on top of it? 

CRAIG: That can mean a lot of things. For example, very infrequently do we actually build a single model that solves the whole problem. And we may end up with, hey, understanding is this the street, is this the driving surface we're going after, and if so, do we think that this thing in front of us might be some sort of anomaly like a pothole. And ensuring that-- you could imagine that if all we're building the model off of is, is this a pothole or not a pothole? Then that becomes a real challenge when all of a sudden we start looking at a stream that is the street. Now, all of a sudden, we need to ensure that we're breaking that down the same way when we're doing our data exploration and when we're doing our data investigation as we do when we're actually deploying the model in production. 

And so ensuring that we're asking the same question to the same type of data in both environments. These kind of hyper simplistic elementary school rules of, hey, look at the same thing both in dev as you do in production. I think they're very simple to us, but they're unbelievably easy to get wrong once you're actually trying to run at this as fast as you can in an effort to try and please your boss or your boss's boss to try and get this job done quickly. 

DALE: It sounds to me that the feature story, in addition to just helping ensure consistency, sounds like in the case of the pothole, it's sort of like, well, if we can make this data source easily accessible to everyone and processed in the same way, it also makes it easier to build other projects. Like maybe it's potholes this time and maybe it's ice damage next time or something like that. 

CRAIG: I think that's exactly right. What we've seen with customers who start using products such as feature stores is that the next time they come build a model, instead of starting with the data discovery and having each new model be something that requires somebody to kind of go to first principles to understand, instead they can come in and say, oh, what features do I have that might be similar to the problem I'm trying to solve here? 

Whether that's road furniture or different kind of driveway or road interruptions, or whether that's different customer demographics in a more e-commerce setting or something like that, what it does is it allows that next group not to have to reinvent the wheel, but instead, now all of a sudden they're just going to grab these features and start doing drag and drop, pulling these things together to see whether or not they can get 3/4 of the way there with what's been built already. 

DALE: And theoretically having more confidence, I would imagine. Like, this worked for all those other use cases. 

CRAIG: Absolutely. I've certainly been part of building a model where we get the whole thing built and somebody says, oh, well I just ran an aggregate across feature X and it looks like you've got 3x the value the company has ever seen or something like that. And you realize, oh, I've got duplicates in there. Something awful, I've summed the wrong column or something. And so I think, Dale, to your point ensuring that that is all the source of truth as best we have a source of truth for these topics becomes critical. 

MARK: And I think that naturally kind of takes us into the next step, which would be that once you have this data, you need to start training a model on it. How does that work? Which is probably the broadest of broad questions, but-- 

CRAIG: What's interesting is if we were to kind of rewind the clock I don't know, three years, four years, training the model was the activity. You would turn to your friends after training a model and say, hey, I just trained this model and it gets this kind of accuracy and pat myself on the back, aren't I proud. Training has improved substantively over that time in terms of speed, stability, the ease of with which errors are found in debugged. 

But once that model is trained, figuring out how to make sure you move it into deployment effectively, and then making sure that you have all of that kind of environmental consistency as you move it from your notebook into a cloud training system and then into production becomes critical. And so that's an area where I think there are still tons of opportunities to kind of improve on best practices. 

And one technology we see customers leaning on heavily here is this idea of starting to use machine learning pipelines, whether this is technologies like TensorFlow Extended, or TFX, or whether it's technologies like Kubeflow Pipelines, the ability to-- instead of saying, oh, for training, I hit Train on my laptop or I called this API or something like that-- instead, by building this into a set of pipeline steps, now all of a sudden, this becomes a repeatable, improvable process that I or others can come through and audit and improve and debug without having to crawl through a monolith of impossible code. 

DALE: To add a little bit of color here as someone that builds models and also someone who's written production software, building these two things is often super different. Building a model is so messy. A lot of times, you're just kind of throwing everything at the wall to see what works. You're like, oh, did I run this code or not, and it's just so much more-- in my opinion-- hacky than building a lot of production software. 

And so a lot of times, you would have these data scientists that were really good at the model building part, but then the handoff between them and the engineers that actually had to put it into process, they'd be like, I can't believe you just gave me this thing. So it sounds like these pipelines really help with that sort of bridging the gap between the software deployment and the actual tinkering and model building. 

CRAIG: I joke with the team that when you work on machine learning tooling in 2021, it's a pretty cool, out front, at the tip of the technological barrier, but if we're lucky, we will just become code builder tools in the fullness of time. While what we're building is being used and applied to new and transformational technology, ultimately the objective here, I think to your point, Dale, is to make it look and feel a lot more like traditional computer science. 

Because we have decades of experience making sure that the traditional computer science we deploy is effective, is bug free, is stable, doesn't have any significant regression, and these ideas in machine learning are relatively new. A lot of these concepts that we've just come to kind of take for granted in computer science, concepts that we're just now starting to solve and figure out with machine learning. I think the objective here is to help us really try and accelerate that process so that folks can get the benefits that we have of modern DevOps and find those benefits when they're running machine learning with those ideas of MLOps that are becoming so popular right now. 

MARK: And it sounded like the consistency question that you brought up earlier, or how to make sure everything is the same on dev and production, a lot of these pipeline solutions are also aiming to solve. 

CRAIG: That's right. Many of these pipeline solutions are built on some kind of container type abstraction, with the ideal that that way they can carry through all of the libraries you might have had. It's funny because we sit there today with competing frameworks that folks might want to use, whether it's TensorFlow, PyTorch, SciKit, and ensuring that not only are those frameworks appropriately installed and will they operate effectively with the underlying hardware, and then will they also have at their beck and call the appropriate libraries that were used to help create them or help do some of the preprocessing necessary to make that data and that model as performant as possible. 

I think one of the challenges is-- because of where we are with computer science, we're pretty good at creating environmental consistency, that's not a new concept-- but ensuring that that environmental consistency also matches up with this data consistency that we've been talking about before because now instead of just having code be the variable in this case the way it would be in a more traditional computer science project, we now have two of these variables. We have the data and the code, and we need to make sure that not only are they both coming in the way we want them to, but operating together the way we would want them to, as well. 

MARK: Which I think brings up the next step in this whole equation of the life cycle of ML, which sounds like is evaluating these models and making sure that the predictions they're making are valid and accurate. 

CRAIG: That's right. And we continue to support customers effectively with things like batch inference to ensure that they have the ability to do the types of evaluations, whether it's evaluations around things such as model fit, or whether it's evaluations around more of the behavior of the model with things like explanatory variables, like feature importance or what have you. That way, ultimately the data scientist or the author of that model can determine whether or not the model is effectively working the way they want it to. They can explore where some of the outliers are using tools like TensorBoard or others to help visualize and understand these models and the differences between maybe some of the candidate models they considered while creating this, but then ultimately once they've found that model and they've found it to be at the level of performance that they want it to. 

For me, I'll say when I was running a data science team a number of years ago, we always celebrated the moment when we had found the model. Hey, we've trained the model, we've done the evaluation, it's super accurate, let's go brag about it. And we would brag about it and inevitably the VP or someone like that would hear about it and say, oh yeah, I can't wait to see how this goes. Then the embarrassing thing would be a month later, three months later, six months later when the model still wouldn't be in production. The VP or the leader above would be looking down saying, hey, whatever happened to that model you guys built? And we'd be stuck trying to figure out how to reconcile all these pieces and get it into production. 

DALE: It's kind of like you celebrate building the Mars Rover but you haven't yet landed it on Mars I want to ask you a bit more about what happens. You build this model, you have the data set that you collected to train it, it's looking good, you put it into production. I want to ask you more about what happens next and all of the ways that this sometimes breaks with the way it performs in production. 

You mentioned that models could make mistakes and maybe you care about that, or maybe you want to understand how they're working under the hood. What's the simplest thing that can go wrong when you put a model into production? 

CRAIG: Assuming that we've done all the stuff we've talked about so far and that we're now hosting the model in a highly scalable environment, we actually use the production data to train the model and now we're using that data to host the model. One of the kind of I think critical new areas is this idea of model monitoring, and ensuring that once your model is in production, you're actually keeping track of what it's doing, how it's performing. 

And there's a classic statement here within Google of, if your model is not experiencing skew or drift, then you're probably not monitoring it closely enough. 

DALE: Can you give us a little tip on what those are? 

CRAIG: Absolutely. So I mean effectively, this is the idea that over time, the behavior of the world might change. I think the best example we all had of this was last spring as COVID-19 started to really ramp up. Collectively, human behavior changed. We all started doing things differently than we had previously. And we were all relatively quick to adapt. The challenge is that if I had models built upon your human behavior, now all of a sudden, your behaviors changed. And so now all of a sudden, those models are going to be predicting based on your past behavior. 

Best example of this for me was I got inside my car a couple weeks after we started lockdown, and my car said, oh, you must be ready to drive to work. And here was a machine learning model suggesting to me-- completely reasonable idea-- that early in the morning, I get in my car, it must be time to go to work. I was talking to a senior executive at a very, very large retailer and I asked them, I said, hey, when human behavior massively changed a couple of weeks ago or a couple of months ago-- this was in Q2 that we were talking-- how did you prioritize which models to go after? Help me understand, how did you look across the way in which the input variables were changing or the predictions were changing? 

And they kind of smiled and laughed and said, you seem to believe that we have a system keeping track of this for all of our models. Wouldn't that be great, but we're just collectively not there yet. Most people-- I think, Dale, to your point-- we get so proud and so excited when that mess of a model that we've created is finally ready that we throw it into production, we crack the champagne, and we turn around and we start the next model, not realizing that if we don't have the right safeguards in place then this model won't perform the way we want it to when there are new externalities in the world. 

And the externality I've called out is obviously a gigantic one, but this can happen with very small changes. You could imagine, for example, in the pothole case, what if we had a new underpass that has shadows across the road? Are we now going to think that the entire shadow is a pothole? How are we going to deal with these types of changes to the environment that we're in? 

DALE: So what is the answer to that? So the world changes, the weather patterns change, the roads are different, how do you adapt? 

CRAIG: Yeah, well, I mean, so we keep track of the model, and then ultimately we go back and we either continue to audit the model and maybe improve the data set. We can be watching the model and we can sit there and say, oh, look, we know that our pothole model doesn't perform well with shadows-- and let me just take a quick moment and say, huge fan of SpringML, I am sure their model does very well with shadows-- but let's say all of a sudden that we're seeing that it's not doing well with shadows. This is an opportunity for us to do things like go augment the data set. Let's go get some additional data that shows this item with shadows so that we can better fill out the model performance in this area where we're weak. 

Something like what we saw with COVID, you could imagine that let's say I had a retail recommendation system. Well that retail recommendation system, all of a sudden, it starts thinking that no matter what you buy, I should recommend masks because everybody is buying masks. And so given all else, I'm going to just recommend masks. 

DALE: Masks and toilet paper. 

CRAIG: Exactly, masks and toilet paper. Well, when I'm shopping for my wife for Valentine's Day or I'm shopping for my child's birthday or something, there are times when masks or toilet paper might not feel super appropriate. And so having that awareness of are things changing, and then actually having a human in the loop. Go and take a look at what are some of the outliers we're seeing or what are some of the common things we're missing. And then starting to retrain a model, realizing that the world is different than it was when we last trained that model. 

And so whether that's a kind of human process of identifying the issues we have, identifying additional data or identifying the need to retrain a model, or whether it's a fully automated process. Again, coming back to this idea of pipelines, I could go build a pipeline set. Hey, I'm going to keep track of all the predictions I made, I'm going to keep track of all of the ultimate outcomes that our users found, and if my model starts performing in ways that I'm not expecting, I'm just going to automatically have it go back and retrain against the most current data set, maybe using something like hyperparameter optimizations. 

But now a data scientist doesn't need to worry about going in, finagling and trying to create a perfect fit, and instead can really come in and audit the model, check on it before we deploy the new candidate to production, or maybe even using pipelines and a prediction system, promoting it into an A/B test environment to see how it does in a shadow production or something like this. These are all concepts that, again, we've had for a long time in computer science, but now we're increasingly trying to find how we will apply them in this world of data science. 

MARK: And like you said, I think there's a lot that can be taken from the world of computer science and operated and brought over to machine learning because at the end of the day, they have a lot in common, slash maybe everything. But I do think one of the challenging problems that often comes up with computer science questions is-- and probably forever will be-- scaling. So this is a very different story from having one model analyze a little bit of data every day to having something like the entire bus fleet of an entire city constantly scanning and grabbing this information. So how does all of this change with scale? 

CRAIG: Ultimately, I think one of the reasons why machine learning in the cloud has been so successful is because of the natural scale benefits of doing this type of work in cloud. And really, we've gotten to watch machine learning and cloud mature together, which has been, I think, a lot of fun, and probably has pushed the boundaries of some of what we're capable to do across both mediums or both platforms. 

When we look at scale specifically here, you're absolutely right. This idea that my data science team has four or five models in production and we all know what they are, this is a kind of a fun idea. But once we start getting to the point where we're creating more and more models, first of all, we're going to want to make sure we are building and deploying those in as scalable way as possible with things like a model registry or the appropriate metadata. You can imagine if I had found out that a specific data set had a problem in it or had some significant inaccuracies. I may want to go retrain all of the models that were downstream of that data set. And unless you have the appropriate metadata set up to support that, I think you find yourself kind of struggling again. 

But as we start to get models into production, and as we start to get more and more of them, and assuming that we're doing the appropriate types of model monitoring and things of this nature, then it really comes down to do we have the right policies and people in place to handle the kind of abnormalities or the anomalies that the data starts finding. The good news about this data science stuff is that if what we're trying to do is predict potholes and we go from having three buses to 3,000 buses trying to do it, that really doesn't have to be painful. That doesn't have to hurt things. We can now scale up to handle the compute or the increase in inferences or something like that with ease. 

I think the challenge is going to be are there the right systems in place and the right people in place to ensure that as these models evolve and improve, do we have the right people there to ensure that they're doing so in a way in which meets our businesses needs. 

DALE: If I can ask you a question, keeping my own job security in mind, I'm curious because a couple of years ago, it seemed like if you wanted to work in machine learning at Google or wherever, you needed a PhD because nobody else knew anything about this stuff. But going forward, who do you think these people are that you need as a company to be able to do machine learning at scale? 

CRAIG: As I watch it grow and evolve, it mirrors a lot of, I think, other computer science systems we've seen. If I think back to a couple of decades ago with databases, the only person allowed to touch the database was the database administrator. If I fast forward to even, I don't know, a decade ago with databases, yes the database administrator was still there, but now if the business owner wanted some answer, they would go get the business analyst or the SQL writer to start writing them the SQL. 

Now my experience is that either with strong visualization software or with just deciding that SQL doesn't have to be real hard, what we see are those business owners or those marketing professionals or what have you writing their own queries or doing their own data analysis. And I think a similar thing is true of distributed systems. A decade ago, you had to have a PhD in distributed systems to have a conversation about how these types of systems would work. Today, any college graduate in computer science is comfortable working with distributed systems. 

My hope is that machine learning follows a similar tact, and I am sure that not unlike databases and distributed systems, we will have specialists who will be solving research problems at the forefront of the space. But that ultimately, I think there's no reason to believe that those day to day practitioners aren't developers. And they may be developers who have a certain interest-- we have front end developers and full stack developers or back end developers-- I think it's very likely that we could end up with data science developers or something like this. 

But this idea that this has to be saved for only the students of one of 15 universities or something like this, it's just not true anymore, I think. With the improving usability of tools across this space, the barriers to entry have dropped substantively for folks to get involved and start building and deploying their own models. 

MARK: Well that was really awesome and I learned a lot about what the life cycle looks like. I think there's a lot of really interesting things to keep in mind. And I'm probably going to have to look up a few of the terms we mentioned, but thank you so much for coming on. Unfortunately, we are just about out of time, so before we wrap things up, is there anything else you wanted to mention? 

CRAIG: I would say just stay tuned, stay close to us. We have a lot of exciting announcements in this space coming over the next couple of months. We continue to be excited to see the way in which our customers impress us with the way they use these tools to solve novel problems. 

DALE: Awesome, I'll be looking forward to it. 

MARK: Once again, thank you so much to Dale and Craig for coming in and talking about it. Yeah, I mean, it was a fascinating conversation. We don't spend too much time talking about ML here, but it is such a different world when you have to think about training a single model and maybe putting it out there and making some predictions versus, what does this look like when I have 500 models, or, I'm huge business, I have all these different models doing all these different things. Managing that world, I can't even wrap my head around it. 

JENNY: Yeah, it's beyond the scope that you can even imagine, which is why we need the machines, frankly. A lot of data goes into training those models, a lot of the different stuff that happens. The pothole recognition was really interesting, talking about what if there's a shadow on the road. And so it's neat to think about this as an iterative process, and I loved when Dale was talking about how the goal of ML in this process is almost to get back to the basics of computing. It's sort of like you go around the swing set of technology, what you need to do, and how it's an iterative process, but it really always goes back to those core values and those core actions. It's pretty cool. 

MARK: Yeah, I'm really excited to see what's coming down the road for that, too. So hopefully we'll get a chance to have Dale and Craig back in here to talk a little bit more about some of the ways that you can work on that inside of Google Cloud. 

JENNY: Sign me up, yeah. 

MARK: Awesome. Well, you know Jenny, this is your first time on the podcast. So we're super excited to have you here, and one of the things that I typically ask people is, hey, what have you been working on? Now you've got everything that you can choose from. So what have you been working on? 

JENNY: So working going on a lot of stuff. A lot of stuff is going on, but like everyone else this past year, I've started a podcast. So one of the cool things that I love about what's going on currently with Google Cloud is that we've got this great blog. There's a ton of wonderful content there, and reading through it is great, but you kind of have to be in a specific spot mentally, sometimes even physically to read through a blog post, whereas with podcasting, you can just listen to it. 

And so I was just thinking, no matter why you might want an audio format, whether you're dealing with a puppy or whether you need to keep your eyes on the road, whatever the case may be, why not make these blog posts accessible to a wider audience by giving them an audio format. So that's what we're doing. It's called Google Cloud Reader, and myself and a bunch of my wonderful colleagues are going to be reading a selection of blog posts to y'all. 

So whether you need it as a bedtime story, a study aid, or something to help you get that edge at your job, please go for it. Go ahead and check it out. They will be posted on the accompanying blogs, and they will also have their own little RSS feed for you to check out. But pretty straightforward, pretty simple, and again, it's an audio format of the content that you might want and need to consume. 

MARK: Yeah, we'll put a link in the show notes to the RSS feed and then it'll be on all the standard places that you get other podcasts, I guess, including this one. So wherever you're listening to this, you can probably also listen to Google Cloud reader. 

JENNY: Yeah. 

MARK: And you-- spoiler alert-- may or may not hear me talk about some budget stuff because I'm sure our listeners aren't sick of that. But it was a lot of fun to record, and yeah, I mean, I love the idea of being able to catch up on some of this news in the audio format. Because I have a morning routine and I like to listen to podcasts during that and when, maybe, some of the world gets back to commuting, that's also another time that I used to love just churning through different podcasts and stories. 

JENNY: Absolutely. I found that my podcast listening really dropped off after my commute dropped off. These especially, I think the longest episode we have is maybe 12 minutes, so they're all really bite size, really great, and it's just a quick and easy rundown of some of these really wonderful announcements and cloud topics. So definitely check it out. 

MARK: Super, super cool. And just like you said, you're not the only one who started a podcast. Well, our good friend Anton, who was on episode 218 when we were talking about Chronicle Security, has also started a cloud security podcast. Now, I got a chance to sit down with Anton and his new partner in crime, Tim, to talk a little bit more about what their podcast is. 

ANTON: It focuses on information security, specifically security in the cloud, from the cloud, around the cloud. It's a podcast focused on cloud security. Think about it, how amazing is that? 

TIM: And wonderfully enough, we've given it the most exciting name on the planet, "The Cloud Security Podcast." 

MARK: Worked hard on that one, huh? I like that a lot. And of course, Anton, we had you on back in-- gosh-- last year, so about 300 years ago, for episode 218 where we were talking a little bit more about Chronicle. So first off, I think the immediate question is, what inspired y'all to make "The Cloud Security Podcast?" 

ANTON: The reason for this is that we wanted to have a channel for a discussion around cloud security that isn't directly focused on products. At this point, we're going to talk about products for sure, our products, but we also want to have a discussion forum for security challenges in the cloud that customers are facing, what organizations deal with. So we want to have a cloud security discussion forum that's focused on that so we can build the audience that's interested in this topic alone. Not just cloud, not just security, but cloud security. 

There are also ways to have guests both from Google and outside to contribute, to start a discussion, to build the value. To me this story is to have an open discussion forum on these topics. 

TIM: I really like the format of discussing it. It's so easy for security marketing when written down to become overwrought and overcooked. Anton and I are really willing to ask people questions and put them on the spot and say, what's actually your threat model there, bud? 

MARK: I like that kind of casual phrasing for asking people what their security is. Now, we did talk a little bit about this in our previous interview, Anton, but I think for both of you, what makes the cloud security world so much different from kind of a more traditional security world? Why is cloud security special? 

ANTON: My answer would be probably around six hours long. 

TIM: My answer is not likely to be a lot shorter, but if I were to highlight three areas that are fundamentally different in cloud security, I would say one, you're no longer completely in control of your stack. You have a relationship with your cloud provider, you need to trust in the shared responsibility model that your cloud provider is doing the things that they say they are and not doing the things they say they aren't. 

Two is probably the role of identity. We're in a world now where everything is mediated by identity when it comes to API access and usage of services in the cloud, and that really changes the picture both for the proactive side as well as the detector side. And then I think the third one is honestly some combination of the rise of containerization and whatever comes after containerization. I think that between those three pillars, you just have a really different security model when it comes to cloud computing. I am curious if Anton can give as a brief answer, though. 

ANTON: Sure, and I'm going to refer to our third episode where we had somebody whose title in the past was Head of Cloud Native Security. And to me, this is interesting because it's an organization that kind of focused on doing security the cloud native way rather than by importing the thinking from the data center world. One of the most exciting angles of why cloud security is special is because cloud itself is special in many ways, in technology, in process, in the trust boundaries. So to me the fact that we have to teach people to do security the cloud native or cloud focused way rather than import thinking is a big challenge, and we're going to be dedicating a fair number of episodes to that specifically. 

MARK: I love the idea, and like you said, there's so much to explore there, so it totally makes sense to have a podcast where you're going to be able to really dive deep into those issues. So what are the kind of episodes you've already had, and what kind of episodes do we see coming up? 

TIM: Yeah, we've had three episodes so far. We've had to talk about confidential computing, which is a fascinating way of bringing cryptography to a part of the compute stack that's never been encrypted before. We had to talk about data security in the cloud, which is actually more exciting than it sounds. And then our third and most recent episode was about automation, what you can and can't automate when it comes to cloud security. 

ANTON: And I would say that this shows range of interests, and again, we wanted to hit security inside the cloud platform, like confidential, security in the cloud environment run by the client, like data securities in the cloud, and of course, operational issues and processes. So it's almost like a micro universe of cloud security issues in three podcasts. 

Our next immediate one is probably going to be on zero trust simply because it's a really hot issue. Google is, of course, a major player. A lot of people are asking, a lot of people are deploying. So to me, that's a key one. And then we will do a lot more on security operations, detection in the cloud. We're going to describe maybe a few episodes in the future and then we'll see what will happen. We have now more ideas in time. 

MARK: Yeah, I'm sure that this is going to be something that you're never going to run out of topics for because like you said, the more you go into security, just the more that opens up and the more topics there are to discuss. One of the things that you kind of brought up earlier, Anton, was what is the balance between Google Cloud specific conversation and just general cloud security conversation? 

ANTON: My original thinking was that we would focus no more than one third on Google products. I don't know it'll happen, but my impression was it will focus on what Google does maybe no more than half the time. Because there's so much more to cloud security. Of course, we are one of the major cloud providers, we are the big part of cloud, so our issues overlap with a lot of issues clients sense. 

At the same time, we have clients in different stages of the journey. We have clients who aren't GCP clients, they just use some other cloud. So I want to deal with cloud security challenges overall and help organizations, whether they a GCP client or not, but at the same time, we don't want to be decoupled from Google. 

TIM: I would give a simpler answer to that question of how much time are we going to spend on Google, I would say I spend all day thinking about security products in Google Cloud. I actually really appreciate taking a break from thinking about that and hearing about other people's perspectives, just in a purely selfish way. So I suspect the balance is going to end up being in part, a function of what guests we can get on to the show, in part, a function of what feedback we get to users, and in part, a function of keeping people out of my inbox who are my colleagues who want to come on the show and talk about what they're launching next month. 

ANTON: This is such a PM answer. We're going to look at clients. 

MARK: It brings up a great perspective, though, right? Because there are great things that Google is doing in the world of security, and there are going to be security challenges that are going to be very tangential or even unrelated to those things. So I mean, the best way to get a well-rounded conversation on security is going to be to loop in people who are using Google, people who are using Google and other things, and then people who are using Google at all. 

All right, well where can people learn more about the podcast, where can they listen to the episodes, and what's coming up? 

ANTON: At this point, we are in Google Podcasts, we are in Apple Podcasts, we are in Spotify, we're in a couple of other places. We, of course, have a direct download site at Libsyn, and we also have social media presence on Twitter, @CloudSecPodcast on Twitter. We're going to have a real website built eventually, but at this point, that's where you can find us. 

TIM: You can also follow both of us on Twitter. My handle is @_TimPeacock, Anton, you're @anton_chuvakin, right? 

MARK: Perfect. And we'll make sure to, of course, put those links into the show notes for people who want to follow it. And of course, I highly recommend checking it out. It's such a great way to dive deeper on security and hear more about everything that's going on, Google or not, in the world of cloud security. So thank you both so much for coming on and telling us a little bit more about the podcast. 

TIM: Thank you. 

ANTON: Thank you. 

MARK: So super excited to hear about the other podcast that Anton and Tim are working on where you can really get into details specifically about the security landscape, what that looks like in cloud. They're going to have tons of great guests, so make sure to check that out, as well. And just like Jenny's podcast, we'll make sure we put a link down in the show notes. 

JENNY: Woo-hoo. 

MARK: Awesome. Well, for our listeners, there's no shortage of links to check out in the show notes. Definitely take a look. And otherwise, I think we're all about done for this episode, so we will see you all next week. Thank you for listening 

JENNY: Bye. 

[MUSIC PLAYING]