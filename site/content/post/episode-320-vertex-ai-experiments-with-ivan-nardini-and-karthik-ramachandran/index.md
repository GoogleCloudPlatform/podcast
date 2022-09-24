+++
audioDuration = "00:26:18"
audioFile = "Google.Cloud.Platform.Podcast.Episode.320.mp3"
audioSize = 37791400
categories = ["AI", "ML", "Machine Learning"]
date = "2022-09-21"
description = "Hosts Anu Srivastavatakes and Nikita Namjoshi are joined by guests Ivan Nardini and Karthik Ramachandran in a conversation about Vertex AI Experiments this week on the podcast."
draft = false
episodeNumber = 320
hosts = ["Nikita Namjoshi", "Anu Srivastava"]
title = "Vertex AI Experiments with Ivan Nardini and Karthik Ramachandran"
image="/post/episode-320-vertex-ai-experiments-with-ivan-nardini-and-karthik-ramachandran/images/hero/hero-EP-320.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/xkau4e/episode_320_vertex_ai_experiments_with_ivan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Hosts [Anu Srivastava](https://twitter.com/asrivas_dev) and Nikita Namjoshi are joined by guests [Ivan Nardini](https://twitter.com/ilnardo92) and [Karthik Ramachandran](https://twitter.com/karkumar) in a conversation about Vertex AI Experiments this week on the podcast. Vertex AI Experiments allows for easy, thorough ML experimentation and analysis of ML strategies.

Our guests start the show with a brief introduction to Vertex AI and go on to help us understand where Experiments fits in. Because building ML models takes trial and error as we figure out what architecture and data management will work best, Experiments is a handy tool that helps developers try different variations. With extensive tracking capabilities and analysis tools, developers can see what is working, what's not, and get ideas for other things to try. Ivan tells us about the two concepts to keep in mind before using Experiments: runs, which are training configurations, and experiments, adjustments you make as you look for the best solution.

Vertex ML Metadata, a managed ML metadata tool, helps analyze Experiment runs in a graph, Ivan tells us. He takes us through an example ML model build and training using Vertex AI Experiments and other tools. He and Karthik also elaborate on the relationship between Vertex AI Experiments and Pipelines. We talk about the future of AI, including the foundational model, and some cool examples of what's happening in the real world with Vertex AI Experiments.
 
##### Ivan Nardini

[Ivan Nardini](https://twitter.com/ilnardo92) is a customer engineer specialized in ML and passionate about Developer Advocacy and MLE. He is currently collaborating and enabling Data Science developers and practitioners to define and implement MLOps on Vertex AI. He is an active contributor in Google Cloud.

##### Karthik Ramachandran

[Karthik Ramachandran](https://twitter.com/karkumar) is a Product Managed on the VertexAI team. He’s been focused on developing MLOps tools like Vertex Pipelines and Experiments.

##### Cool things of the week

* Expanding the Google Cloud Ready - Sustainability initiative with 12 new partners [blog](https://cloud.google.com/blog/topics/sustainability/how-partners-benefit-from-google-cloud-ready-sustainability)
* Large Language Models and how they are used with Natural Language Understanding. [pdf](https://arxiv.org/pdf/2208.11857.pdf)
 
##### Interview

* Vertex AI [site](https://cloud.google.com/vertex-ai)
* Vertex AI Experiments [docs](https://cloud.google.com/vertex-ai/docs/experiments/intro-vertex-ai-experiments)
* Vertex AI SDK for Python [docs](https://cloud.google.com/vertex-ai/docs/start/client-libraries#python)
* Vertex ML Metedata [docs](https://cloud.google.com/vertex-ai/docs/ml-metadata)
* Vertex AI Pipelines [docs](https://cloud.google.com/vertex-ai/docs/pipelines)
* Vertex AI Workbench [docs](https://cloud.google.com/vertex-ai/docs/workbench)
* Vertex AI Tensorboard [docs](https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview)
* Track, compare, manage experiments with Vertex AI Experiments [blog](https://cloud.google.com/blog/topics/developers-practitioners/track-compare-manage-experiments-vertex-ai-experiments)
* Vertex AI Experiments Notebooks [site](https://github.com/GoogleCloudPlatform/vertex-ai-samples/tree/main/notebooks/official/experiments)

##### What's something cool you're working on?

Anu is working on demos for [Next](https://cloud.withgoogle.com/next).

Nikita is testing new features for [Vertex AI](https://cloud.google.com/vertex-ai).

{{< transcript "[MUSIC PLAYING] ANU: Hello, Cloud friends. Welcome to episode 320 of the weekly Google Cloud Platform Podcast. I am Anu Srivastava, and I am so excited to be here with my teammate Nikita. Hey, Nikita." >}} 

NIKITA: Hi, Anu. Thanks for having me today. 

ANU: Yeah, this is the first time we've hosted together. It's super fun because we're actually on the same team, and we have another special connection. 

NIKITA: Yeah, we're both from Texas. 

ANU: Yeah. 

NIKITA: We're Texans. 

ANU: Yeah, the thing about people from Texas is that they will tell you. You never have to guess. 

NIKITA: Yeah, you're from Houston, right? 

ANU: Yep, I'm from Houston. Cool, so do you want to tell everyone what we are talking about today? 

NIKITA: Definitely. Today, we're talking with Ivan and Karthik from the Vertex AI team about Vertex AI experiments. This is a managed service for seamless ML experimentation. So we're going to hear from Karthik and Ivan about the different features and how you can use the service in your ML workflows. 

ANU: So I'm ready to dive in, but first, let's actually share our cool things of the week. 

[MUSIC PLAYING] 

So Nikita, do you want to share your cool thing of the week first? 

NIKITA: Definitely. The Google Cloud ready sustainability designation showcases partners that are committed to helping global businesses and governments accelerate their sustainability programs. And 12 new partners have just joined this initiative, and they bring their sustainability platforms to Google Cloud. 

So it was really cool this week reading about all these different companies and organizations and the creative ways that people are using data to help reduce their carbon footprints. One of these partners is Electricity Maps, and they provide data on how carbon intensive electricity is on an hourly basis. 

So I'm low-key, deeply fascinated by the electric grid. So I went in and was looking at their map and trying to check out what the electric mix was like in Texas. So I highly recommend you look at what they're up to as well as the other 11 partners. 

ANU: My cool thing of the week-- sorry, everyone, we're going very machine learning heavy because all four of us today are all super enthusiasts for machine learning. So my cool thing of the week is I've actually been researching what we call large language models-- this is a new thing in the machine learning space-- and how they can really supercharge how we use natural language understanding. 

So natural language understanding, abbreviated NLU, is how we can actually get structured data from unstructured text. So for example, let's give a concrete example. If you have free form user feedback from comments on your app, or maybe you sent out a survey and you want to really analyze this at scale. 

You can't just read every single review that comes in. This is a mechanism that you can actually structure it, and you can actually score the sentiment, give it a score. Or you can programmatically pick out keywords and understand them. 

So once your data is structured, you can stick it in a dashboard. You can stick it in a presentation. You can run analytics. So when we move to large language models, these are trained on orders of magnitude larger than what we've done before in the past. You can really supercharge this process. So that is my cool thing of the week. 

So all right, let's go ahead and jump into our conversation with Ivan and Karthik. 

[MUSIC PLAYING] 

OK, so today, I'm really excited. We have Karthik and Ivan here. Do you all want to take a second to introduce yourselves? 

KARTHIK: Hi, this is Karthik Ramachandran. I'm a product manager on the Vertex team. I've been working on a lot of our ML ops tools, including Pipelines and Experiments. 

IVAN: Hi, everyone. I'm Ivan Nardini. I'm a customer engineer at Google Cloud, passionate with machine learning, and happy to be here again. 

NIKITA: Awesome, so before we dive into Vertex AI Experiments, let's step back a little for those who aren't familiar with the AI ML stack on Google Cloud. Karthik, can you tell us about what Vertex AI is? 

KARTHIK: Sure, Vertex AI is the end-to-end platform we have for building machine learning models on Google Cloud. It includes all the tools you need to build the model, all of our ML ops tools. It includes all of our AutoML tools so you can just bring your own data, and then we'll give you a model that makes sense for your data and your problem. And includes our APIs. 

So you can just submit a prediction request and get back a response in that case. So it covers the full gamut of the ML tools that you need for working with custom models as well as our APIs in one place. 

NIKITA: So with that in mind, what is Vertex AI Experiments? What is this tool? How do we use it? Why do we need it? 

KARTHIK: I think maybe one of the things that a lot of people don't realize is building machine learning models is a little different than your average software development process. And that it's not nearly as deterministic. You don't always know what's going to work when you start building your models. 

There are lots of different model architectures you can try, lots of different things you can do to your data to get different results or better results, lots of different parameters to tweak and tune as you go along. So it's really always not clear at the beginning what the right combination of those things is. 

So really, in the world of machine learning, you have to just try a bunch of stuff and see what works and what doesn't. And then, based on what works, you get ideas about what else you can try and how you can define the process from there. 

Vertex Experiments is a tool that's really meant to enable you to track all the different things that you can try as you're building models. So you can see in one place what's working, what's not, and then go forward from there. 

It gives you a couple of different tools. It gives you a nice APIs that you can embed within your code to automatically track things like parameters. It also gives you a visualization, so you can compare performance of models against each other. It allows you to do this both from within your own code in a notebook or from within a pipeline that you've written to train your model. 

NIKITA: So if I'm a data scientist, what's the alternative? If I'm not using a tracking service like Vertex AI Experiments, what am I probably doing? 

KARTHIK: A lot of people actually do this in spreadsheets. And it's a little tough, we found, because you have to be pretty disciplined about keeping track of everything in the spreadsheet, updating all that information after each run. It's all on you to keep that spreadsheet up to date and accurate. 

Whereas, with a training service you can do this programmatically, embedded directly into your training code and have that information automatically stored by the system so that you can go back at any point and take a look and see what happened. 

NIKITA: Yeah, I will definitely admit to having tracked experiments in random Google Docs on many occasions. And the worst is when you forget to record a parameter, like you said, you're not diligent about it. And then you just have some metric and you have no idea how you got there or why or how to reproduce it. It's frustrating and not a great way to manage your ML projects. 

KARTHIK: And I think that's the core of this, right? This is all about reproducibility, right? It's about being able to go back and understand what you did and be able to do it again if you want and then go from there and make tweaks. 

ANU: Neat. So let's define some terminology before we really dive into the details and the features of how to use Experiments. So Ivan, could you help us with setting the stage? 

IVAN: Sure, before to start using a Vertex AI Experiments, you need to keep in mind two main concepts, the concept of run and the concept of experiment. So basically, when we talk about run, we are referring to a particular training configuration that you as a data science or model builder, what you would like to use in order to solve a particular machine learning challenge. 

So for each run, what you can record is parameters, both of your data and your model. And then you can also track the summary and the time series metrics, a.k.a. the metrics that you get when you train a model over different epochs. And last but not least, you can also use run to track artifacts, like the input data, the preprocessing data set that you get along the experiments, and also, of course, the train and model once you run your code. 

So this is the concept of run, right, so the training configuration. But then what is happening is that, as Karthik said, you need to iterate this process. You need to change the training configuration in order to find the best modeling approach. 

So maybe what you would like to have is a container concept that a group different runs in a way that at the end you can compare them and find which is the best training configuration. And so that's the reason why Vertex AI Experiments support also this concept of experiment, which is actually just a way to organize different experiment runs. 

Now, one important thing to mention is that Vertex AI Experiments is just a service for tracking your model experiments. But because it is integrated with ML metadata service, what you can do is also analyze the bug and audit your old metadata and artifacts that are associated to your experiment. So think about the data set that you generate along the experiment runs or the model that at the end you get. 

ANU: Wow, yeah, it's a lot to consider. 

NIKITA: I would love if you could elaborate a little bit on that last part and maybe share a little more about what ML metadata is and what we can learn from it, why it's important to track? 

IVAN: Yeah, as I mentioned, ML metadata, it's managed ML metadata store. Basically, what allows you is to create this experimental lineage in such a way that, for example, if you start an experiment run, and in the experiment run you do some preprocessing step and you get some data set and then you consume this data set. You train your model. 

Thanks to the integration with the Vertex ML metadata, you can visualize the lineage of experiments. So you will be able to answer the question, in these experiments, I use this data set that was generated by this preprocessing execution. And then, thanks to this training configuration, I get this model, all in graph in the Vertex AI UI. 

NIKITA: That's interesting. I think sometimes we only think about experiments as just the hyperparameters that we selected and then the metrics that came out at the end. But this is a little bit more comprehensive where you can see, actually, the input data, which is obviously really important and will impact your model. 

IVAN: Yes, especially in terms of reproducibility that Karthik was mentioned before. 

NIKITA: So let's assume that I'm a data scientist and I need to train a new model. How would I go about leveraging Vertex AI Experiments? 

IVAN: As a data scientist, you will probably start training your model locally in your personal notebook. So in order to find the best modeling approach, as I mentioned before, you will try different training configuration. So for example, let's assume that you are going to build a TensorFlow model. 

You probably would like to set some data parameters, such as the buffer sides or the batch sides of the TensorFlow data set. And also, you would like to set some model parameters, such as the learning rate or the kind of layer that you are going to use in your models. 

So all these kind of information you need a way to track them, right, because as soon as you have different of them, you will need to, again, be able to compare the results of training based on the configuration that you use for a particular experiment run. 

So with the Vertex AI Experiments, what you can do you can easily create an experiment and track all these kinds of parameters, metrics, and artifact at the run level using both DSDK and the UI. And particularly, the Vertex AI provide easy to use SDK that basically allows you to log parameters, metrics, and record this artifact in the experiment lineage that we were talking before. So this is the starting point. 

NIKITA: So one of the examples that you just mentioned was training a TensorFlow model and then trying out different batch size, buffer size, et cetera, or learning rate. So generally, for me, I tend to use TensorBoard when I'm training a TensorFlow model, and I'll use that to track experiments and other things. So does this mean that I now have to change my way of tracking experiments? 

IVAN: No, actually not because Vertex AI Experiment is integrated with the Vertex AI TensorBoard, which is a managed TensorBoard services on Vertex AI. So imagine that you are still training your model locally. What you can do you can use the SDK that we provide to create the TensorBoard distances and log your parameters and metrics in the TensorBoard instances on Vertex AI. 

So I would say are free to choose the experiment tracking services that you prefer more compared to the model you're training. 

NIKITA: So in addition to being able to see my experiments in the Vertex, the experiments section of the Cloud Console, I would also be able to see that same information tracked in my Vertex AI TensorBoard instance. 

IVAN: Correct, yes. 

NIKITA: So Ivan, when you were talking about terminology, one thing you mentioned a few times was this idea of an experiment lineage. Can you define that and explain why that's important? 

IVAN: Sure Nikita, we just mentioned about the training your model, right? Try different training configuration and find out the best modeling approach. The problem is that model training is just a single step of an experiment. Typically, what happens is that you have some data preprocessing which is required. And it may happen that either you or some of your team both create data preprocessing code or the data set that you can use directly in your experiment. 

In both cases, what you need is a services that allow you to track the data preprocessing steps and the data set that will be generated because, in this way, you can guarantee some kind of reproducibility of your experiment thanks to this services of data set tracking. 

So with the Vertex AI Experiments, thanks to the integration that he has with Vertex ML metadata, you can both track preprocessing steps and resulting data set as a part of an experimental lineage. So that's where the experimental lineage comes into play. 

NIKITA: So this relates to what you were mentioning earlier when we were talking about thinking of an experiment as more than just the hyperparameters you tried out and the metrics, but also where the data came from, this bigger picture. That is the lineage. 

IVAN: Yes, correct. So just to give you an idea, let's assume that you received the training data set, right? You will not cover the preprocessing steps. So once you initiate your experiment run, you can assign the data set as an artifact, as an input artifact, and consume the data set in your training code and pass the training model as an outward artifact of the experiment run. Again, thanks to the integration with Vertex ML metadata, you will able to visualize this process, this experimentation process. 

And so you, as I mentioned at the beginning, you will be able to answer a question right like which data set I use, which kind of parameters I set, and which kind of model I got, and which are the [? occurancy ?] or other metrics that you use to evaluate your model. 

ANU: Cool, so you mentioned that you can use Experiments plus Pipelines as a way to formalize the experimentation process. Can you elaborate on that, give us some great, concrete examples for our users to visualize in their heads? 

IVAN: Yeah, so here the idea is simple in the sense that, as soon as you formalize your experiments in a pipeline component, the easier and faster is going to be for you moving your model or your experiments to production. So as a data scientist, maybe you need to formalize your experiments in a pipeline component. And this pipeline component, as a training component, is going to take a series of parameters, right, in order to train your model? 

Also, in this formalization phase, you need to track, evaluate, and validate your pipeline run associated to your experiments in a way that, if you are going to formalize different experiments, you will be able also to track and compare them in terms of parameters and metrics. 

So thanks to the integration of Vertex AI Experiments with Vertex AI Pipeline, you can easily do that. You can easily track pipeline parameters, artifact metrics, and compare different pipeline runs in your experiments in such a way that, yeah, at the end of the day, you will conclude your experimentation phase with a component that is already formalized and ready to be operationalized in a pipeline, in a machine learning pipeline for training a model to production. 

ANU: Really neat. Karthik, do you want to add anything about how to really take this to production, how it can really help people with their business solutions and data scientists? 

KARTHIK: I think one of the points that Ivan made is when you have a model that you're going to use regularly in production, let's say you have a demand forecasting model that you want to use and you want to update that demand forecasting model as new information comes in. 

You're going to want to have the training process for that encoded in a pipeline because you want to be able to run that independent of anybody's laptops. You don't want to have to deal with the question of, hey, it works on my laptop but it doesn't work in production. So you want all that stuff systematized, encoded, running on the Cloud in a way that is completely reproducible. 

So what we always tell people is the sooner you can move into this pipelining phase of your development process, the more reproducible it's going to be and the less work it's going to be in the long run for you, the safer your models are going to be in terms of always being sure that you're going to get the results-- building the model that you want to build, and you're going to get results that actually reflect your intentions around that model. 

So I think that's probably one really important piece that we always encourage people to think about as they're figuring out how to train their models. And the nice thing is, if you build your pipeline with a set of parameters that really reflect the set of levers that you have to pull on the performance of the model, then you can just run a bunch of experiments at once. 

You can go through and just run a ton. And then maybe, even as you go to production, you can encode that type of parameter scanning directly into your pipeline and be able to use it to select the best model for any given run of your model training process. 

So experimentation doesn't have to be something that you do just up front. It could actually be something that you do every time you retrain the model. You can generate a bunch of different candidate models, and then, from those candidate models, pick the model that is the best one for that particular version of your data. 

For example, maybe you have the demand forecasting model and December comes up and you want do different with Christmas time. And so you want a different type of model architecture. You have to have a different set of parameters for the model that month than you did maybe in the model that you produced in October or something like that. So just a few things to think about. 

ANU: Oh, yeah, I love retail use cases. 

KARTHIK: Yeah, it always fun. Seasonality makes everything interesting. 

[LAUGHS] 

NIKITA: Where do you see this area going the next five, 10 years? 

KARTHIK: I think it's dangerous to ask anybody in AI ML where things are going over five or 10 years. That's just too long of a window for us to effectively predict. But I will talk about one of the bigger changes that we're seeing today is the introduction of these foundational models. 

So these are extremely large models that are being built by people like Google and Open AI, and Facebook, and being published in the world. And we've seen people having a lot of luck taking these extremely large models that have been prebuilt and fine tuning them for their specific use cases. 

So one of the things we see, maybe not in the next 5 to 10 years but probably in the next 2 to 3 years is a lot of experimentation will probably also involve a step where you say, hey, let me try a couple of different foundational models against my problem and uptrain that and see which of those foundational models is actually maybe giving me better result than my fully homegrown custom model is. 

NIKITA: Great, great diplomatic answer. 

ANU: I guess our last question is, do you have any user success stories? What are the use cases you've seen the people that you've been working with, anything you all want to elaborate there? 

IVAN: Yeah, so we launch Vertex AI Experiment recently, but I was talking with data science team and they said that they were able to reduce time of training formalization and speed up the process of model training just because they were able to automate and track experiment run as a pipeline runs in the Vertex AI Experiment. 

So I will say that having experiment tracking services that allow you to track and record your pipeline experiment, your pipeline runs as well, it's a disrupt to the capabilities that can really help to accelerate the process of operationalization of your model. 

NIKITA: That's a great story. I think it really also speaks to how the world of ML has really started to formalize this experimentation process over the last few years and how that's really changing and continuing to become more and more important. 

Yeah, well thank you all so much for hanging out with us this morning. Super excited to hear about this, especially the part about helping people get this into production because I always say, what's the point of machine learning if you can't really use it? 

IVAN: Yeah, I agree. I agree with you. And thank you both for hosting us. 

NIKITA: Yeah, thank you guys. 

KARTHIK: Thanks, everybody. It was a pleasure. 

ANU: Neat, what a great conversation. What I really loved most about this is that the concept of experiments in software has been around for forever, it feels like. We've heard about A/B testing. Maybe you're running an experiment where a certain percentage of your users get one layout placement. Another percentage of your users get something else, and it's a way for you to do these comparisons and actually get data on how new features perform. 

It's something we definitely do at Google, and it's cool to see that this concept, how we're trying to bring it into the machine learning space, since we're really at the infancy of productionizing machine learning and using it at scale. 

NIKITA: Definitely, experimentation is such a key part of machine learning. When you start a new ML problem, you just don't know what the optimal model is going to be. So you go through this process of trying out different model architectures, and there's all these different parameters that you can tune. And each of these different configurations is essentially an experiment. 

But what I really thought was interesting about what Karthik and Ivan shared today was this idea of the ML experiment being more than just the modeling component and thinking a little bit more holistically about experiment lineage, which encompasses the input data, how we preprocess that data, how we prepare that data, and making sure that that is really connected to, ultimately, the model that we trained from there. So it's really this idea of bringing reproducibility to the field of machine learning. 

So before we wrap up today, Anu, I would love to hear what you're working on. It's usually just so much fun to get to work on things together. We don't usually, but I would love to hear what you're up to. 

ANU: Yeah, it's funny. We're both in the same team, but we work on different areas of different audiences for machine learning. So if you follow, not just this podcast but some of our other Google Cloud channels, you have more than likely seen that our big, annual conference, Google Cloud Next is coming up soon. 

So lately, what I've been working on is making sure we have some cool, real demos that you all will get to see of some of our new products launching. What are you working on, Nikita? 

NIKITA: I've been testing out a new feature that's in preview right now as part of the Vertex AI Training Service. It's the TensorBoard Profiler. So this is based off of the open source TensorBoard profiler tool, and now you can use it with the Vertex AI Training Service. 

Basically, it's just this really awesome dashboard that you can get. It's a little confusing and complicated at first to take in all the information. But when you get the hang of it, it provides so many insights into hardware resource consumption of different operations in your model. 

So you can use it to resolve performance bottlenecks, make sure you're getting the most performance out of your GPUs, and ultimately, make your models execute faster. So it's a really cool tool, and I've just been trying it out on Vertex AI. 

ANU: Oh, all sounds like great stuff. Well, thank you all for listening, and we will see you next week. Thanks, everyone. 

[MUSIC PLAYING] 