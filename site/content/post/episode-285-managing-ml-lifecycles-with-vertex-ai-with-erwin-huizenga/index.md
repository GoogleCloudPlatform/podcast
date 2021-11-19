+++
audioDuration = "00:38:41"
audioFile = "Google.Cloud.Platform.Podcast.Episode.285.mp3"
audioSize = 55627154
categories = ["Machine Learning", "Artificial Intelligence", "Pipeline", "ML Ops"]
date = "2021-11-17"
description = "We're learning all about Vertex AI this week as Carter Morgan and Jay Jenkins host guest Erwin Huizenga."
draft = false
episodeNumber = 285
hosts = ["Jay Jenkins", "Carter Morgan"]
title = "Managing ML Lifecycles with Vertex AI with Erwin Huizenga"
image="/post/episode-285-managing-ml-lifecycles-with-vertex-ai-with-erwin-huizenga/images/hero/hero-EP-285.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/qw7677/episode_285_managing_ml_lifecycles_with_vertex_ai/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

We're learning all about Vertex AI this week as [Carter Morgan](https://twitter.com/carterthecomic) and [Jay Jenkins](https://twitter.com/jaydjenkins) host guest [Erwin Huizenga](https://twitter.com/erwinhuizenga). He helps us understand what is meant by Asia Pacific and how Machine Learning is growing there. APAC's Machine Learning scene is exciting for its enterprise companies leveraging ML for innovative projects at scale. The ML journey of many of these customers revealed challenges with things like efficiency that Vertex AI was built to solve. 

The Vertex AI platform boasts tools that help with everything from the beginning stages of data collection to analysis, validation, transformation, model training, evaluation, serving the model, and metadata tracking. Erwin offers detailed examples of this pipeline process and describes how Feature Store helps clients manage their projects. 

Using Vertex AI not only simplifies the initial development process but streamlines the iteration process as the model is adjusted over time. Pipelines offers automation options that help with this, Erwin explains. ML Operations are also built into Vertex AI to ensure everything is done in compliance with industry standards, even at scale. Using customer recommendations as an example, Erwin walks us through how Vertex AI can employ embedding to enhance customer experiences through ML. 

By using Vertex AI in combination with other Google offerings like AutoML, companies can effectively build working ML projects without data science experience. We talk about the Vertex AI user interface and the other tools and APIS that are available there. Erwin tells us how Digits Financial uses Vertex AI and Pipeline to bring models to production in days rather than months, and how others can get started with Vertex AI, too. 

##### Erwin Huizenga

[Erwin Huizenga](https://twitter.com/erwinhuizenga) is a Data Scientist at Google specializing in TensorFLow, Python, and ML.

##### Cool things of the week

* Announcing Spot Pods for GKE Autopilot—save on fault tolerant workloads [blog](https://cloud.google.com/blog/products/containers-kubernetes/announcing-spot-pods-for-gke-autopilot)
* Indosat Ooredoo and Google Launch Strategic Partnership to Accelerate Digitalization Across SMBs and Enterprises in Indonesia [site](https://www.googlecloudpresscorner.com/2021-11-08-Indosat-Ooredoo-and-Google-Launch-Strategic-Partnership-to-Accelerate-Digitalization-Across-SMBs-and-Enterprises-in-Indonesia)
* Indosat Ooredoo dan Google Luncurkan Kemitraan Strategis untuk Percepatan Digitalisasi UMKM dan Perusahaan di Indonesia [site](https://indonesia.googleblog.com/2021/11/indosat-ooredoo-dan-google-luncurkan.html)

##### Interview

* Vertex AI [site](https://cloud.google.com/vertex-ai)
* Google Cloud in Asia Pacific [blog](https://cloud.google.com/blog/topics/google-cloud-asia-pacific)
* Introduction to Vertex AI [docs](https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
* What Is a Machine Learning Pipeline? [site](https://valohai.com/machine-learning-pipeline/)
* TensorFlow [site](https://www.tensorflow.org)
* PyTorch [site](https://pytorch.org)
* Vertex AI Feature Store [docs](https://cloud.google.com/vertex-ai/docs/featurestore)
* AutoML [site](https://cloud.google.com/automl)
* BigQuery ML [site](https://cloud.google.com/bigquery-ml/docs)
* Vertex AI Matching Engine [docs](https://cloud.google.com/vertex-ai/docs/matching-engine/overview)
* ScaNN [site](https://github.com/google-research/google-research/tree/master/scann)
* Announcing ScaNN: Efficient Vector Similarity Search [blog](https://ai.googleblog.com/2020/07/announcing-scann-efficient-vector.html)
* Vertex AI Workbench [site](https://cloud.google.com/vertex-ai-workbench)
* Vertex Pipeline Case Study: Digits Financial [site](https://www.techvalidate.com/product-research/cloud-ai-ml/case-studies/B8A-A64-3A7)
* Intro to Vertex Pipelines Codelab [site](https://codelabs.developers.google.com/vertex-pipelines-intro#0)
* Vertex AI: Training and serving a custom model Codelab [site](https://codelabs.developers.google.com/vertex_custom_training_prediction#0)
* Vertex AI Workbench: Build an image classification model with transfer learning and the notebook executor Codelab [site](https://codelabs.developers.google.com/vertex_notebook_executor#0)
* APAC Best of Next 2021 [site](https://cloudonair.withgoogle.com/events/apac-best-of-next21)
* TFX: A TensorFlow-Based Production-Scale Machine Learning Platform [site](https://research.google/pubs/pub46484/)
* Rules of Machine Learning [site](https://developers.google.com/machine-learning/guides/rules-of-ml)
* Google Cloud Skills Boost: Build and Deploy Machine Learning Solutions on Vertex AI [site](https://www.cloudskillsboost.google/quests/183)
* Monitoring feature attributions: How Google saved one of the largest ML services in trouble [blog](https://cloud.google.com/blog/topics/developers-practitioners/monitoring-feature-attributions-how-google-saved-one-largest-ml-services-trouble)

##### What's something cool you're working on?

Jay is working on [APAC Best of Next](https://cloudonair.withgoogle.com/events/apac-best-of-next21) and will be doing a session on sustainability!

Carter is working on transitioning the GCP Podcast to a video format!

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 285 of the weekly Google Cloud Platform podcast. I'm Carter Morgan, and I'm here today with my colleague, Jay Jenkins. Hi, Jay. Thanks for being here." >}}

JAY: Thanks, Carter, for having me. I'm super excited to be here coming to you from Singapore, and representing Asia-Pacific. 

CARTER: Yes, and I'm loving this because this entire episode is highlighting a different region of the world than I normally get to talk about, and interact with, and think about. And so really quick, what do you do over in APAC? 

JAY: Yeah, so I lead tech strategy and evangelism for Google Cloud in Asia-Pacific. So essentially, my job is to try to align some of our engineering messages for Asia-Pacific, taking some of the things that we build in the US and in EMEA, and thinking about how are those things important for Asia-Pacific, and what are our customers interested in, and what are they doing at this moment in time so that we can talk to them about those, and help them solve these sort of hyper-localized problems in Asia-Pacific. 

CARTER: Yeah, and that actually came up a lot in today's episode. We were talking with one of your coworkers, Erwin Huizenga, about Vertex AI. It seemed like you and him really had a kind of chemistry. That was really fun to see. 

JAY: I've had the pleasure of working with Erwin here in Singapore over the past couple of years. Erwin actually moved to Singapore from Europe, and really has obviously a lot of knowledge around machine learning, but a deep enthusiasm and a deep love of what machine learning can do. 

And I think for him, in Asia-Pacific, he's able to really bring some of those passions to our customers here, and help them solve some of these problems. And as the machine learning ecosystem continues to evolve and solve some of these harder problems, it just enthuses him even more that we can take away some of this pain from developers. 

CARTER: Yes. I was ready like mid-conversation to stop the interview, and go try some of those Vertex AI out. But before we get into this episode, I want to talk about some other cool things-- some things that I'm excited about. 

[MUSIC PLAYING] 

I don't know if you've seen the announcement for Spot Pods for GKE Autopilot. But if you're interested in saving money, then you're going to want to check this out if you're using GKE. What it does is basically, if you have a fault tolerant workload-- something that can afford to go down-- doesn't have to be running all the time-- you can save a lot of money by using what's called Spot Pods. 

So this is part of GKE Autopilot, which is an easier way to manage and handle GKE at scale. Definitely go into the blog and check that out. It was written by William Dennis, who's a product manager, and it was very interesting. What about you, Jay? Is there anything going around that you're excited about? 

JAY: Yeah. So the biggest thing that I'm excited about here in Asia-Pacific is we've just signed this extremely large partnership with Indosat Ooredoo, which is a large telco in Indonesia. So Indonesia, a population of almost 280 million people. 

And aligning with the government initiatives to help out and digitize small businesses, we are working with Indosat Ooredoo to essentially do that. To work with these smaller businesses that aren't digital today, and getting them prepared for this future where they can compete in industries which are traditionally not digital. But as they become more and more digital, allowing them to scale up and take advantage of all of these awesome, amazing technologies which are being built today. 

CARTER: Wow, that is really cool. Well, without any further ado, what do you say we get into this conversation with Erwin? 

JAY: Oh, man. I'm so excited. His enthusiasm is just contagious. 

[MUSIC PLAYING] 

CARTER: Hey. Well, thanks for being here today, Erwin. 

ERWIN: Thank you for having me Carter and Jay. 

CARTER: Really quickly, could you just, for our audience, give a little background about who you are, what you do at Google, and why you're so passionate about today's topic? 

ERWIN: My name is Erwin. I'm a machine learning solutions lead. That's the official title, but what I do is I look after everything machine learning for Google Cloud Asia-Pacific. We'll explain later what is Asia-Pacific as well. And what I do basically in my day-to-day job is I work with our awesome customer-facing teams and our awesome customers, and I help them solving business use cases using our machine learning technology. 

And I also work closely with our product teams. I saw you had Tracy and Greg a while back on the podcast. So I work with the Cloud AI product teams as well, making sure that our roadmaps are aligned with what our customers want and need. So it's a very diverse role. 

I've always been in machine learning. So I've worked at tech companies all my life. I worked in machine learning all my career. I always say I'm a one-trick pony. I can only do one thing. 

So if machine learning goes away, I have a big problem. So I've always been doing that. And I've relocated from Europe to Singapore, so I'm now based out of Singapore location. 

JAY: Yeah. So I'm also based in Singapore, Erwin, and I've had the pleasure of working with you across many of our customers here. 

But what is Asia-Pacific? How would you describe those boundaries? And I guess more importantly, how do you see machine learning in Asia-Pacific? 

ERWIN: So Asia-Pacific is one of the regions, as we call it within Google Cloud, where we have our Google Cloud teams working with our customers. And some of the subregions, as we like to call them, in this APAC region are North Asia, with countries like Korea, the greater China, and Taiwan is there. 

We have India, we have Southeast Asia region where Jay and I sit. And we have Australia, New Zealand. So it's a very large region. It's a lot of different time zones, a lot of different awesome cultures, great customers. 

And machine learning in APAC-- yes, so it's very interesting to do machine learning in Asia-Pacific, because the customers are very, very advanced. So we have large digital natives and unicorns. They do very advanced stuff-- cutting edge machine learning to say it like that. 

We have also a lot of large enterprise customers, so financial services customers, telcos. So there's a lot of diversity, but one thing that I see across APAC that is very similar, and especially compared to Europe where I worked before for Google, is that everything is at scale. 

So there's a lot of data, there's a lot of complexity in what they do with our technology, what they do from a use case perspective. So that makes it very, very interesting for us to work with customers here in APAC. 

CARTER: Wow, this is one of my first times really hearing about APAC, and how large it is, and the types of customers that are out there. And I find that interesting because you're a machine learning expert here to talk about Vertex AI. But before we get into this new platform, let's talk a little bit about some of the problems that are inherent in the machine learning space, like what are some of the problems that Vertex AI maybe solves? 

ERWIN: When we look at our customers, they said they've had a journey when it comes to machine learning, and every one is at a different place in that journey. So some are a bit more advanced than others, but what we've seen is that most of the customers we work with, they do some type of machine learning already. 

So that means is they have maybe a data science team, they have a machine learning team, or they work with one of our partners who does the work for them. So they do some type of machinery to solve a specific business problem. 

So that could go from doing recommendations on a website to fraud detection. We've seen many, many different use cases. So they are working on machine learning. 

I think where still a lot of our users or customers struggle or have difficulties is how do you, first of all, bring those use cases into production. So how do we integrate it maybe with our application if it's a recommendation system, or with internal application that we have? 

So how do we actually use this model that we built and that we're happy with? But also if you want to do more use cases, how do you iterate through those new use cases you have, and how do you do that quicker and more efficient? 

So you have these great data science teams, you have these machine learning teams, but how do you make sure that they are efficient, and that they can do their job very well? And that's something where we help our customers with a lot, I think. 

It's less and less of the customers that want to know about what is machine learning. I think everyone nowadays has some idea and does some machine learning. But getting that into a real life setting, that's something where we help with. 

CARTER: And I know a lot of our listeners would be familiar with frameworks like TensorFlow and PyTorch. What is it that Vertex AI brings to the table that helps enhance that developer experience? 

ERWIN: From a high level, what we do is we help with the end-to-end lifecycle of machine learning? So what does that mean-- end-to-end lifecycle? It means going through the different phases of bringing a machine learning model into production. 

So it goes all the way from doing data collection. So we need to collect some data to work with. We need to analyze that data, so that's the second step. 

Then we need to validate that data, so that means what is the quality of data? Do we have any missing values? Is there anything we need to understand about this data or validate about this data? 

Of course, then we are going to transform our data. So we're going to clean it up, we're going to maybe deal with the missing values. So then we have a data set that we can basically train our model on. 

So that's then the next step-- that's the fifth step. So then we do some model training, or we train multiple models. We can train models in different ways, and we can talk about that later as well. 

And then once we have a model, we would like to evaluate that model as well. Well, how is the performance of that model? Is there no bias in that model? 

And so we're validating, basically, that model. And then we need to bring that model to serving. Serving a model has a lot of complexity with it as well. 

And then also we want to typically track metadata across the pipeline, we want to orchestrate that whole flow, maybe you want to store some of those components of that pipeline. And if you want to read more about that, Google has published a paper which is called a TensorFlow based production scale machine learning system, which talks about the lessons we learned at Google of building those machine learning lifecycles, machine learning systems. 

And it's still, for me, a great paper. I share it also a lot with our users, because you learn a lot about what is needed, what are some of the mistakes maybe we made, or lessons we learned at Google. But that's typically something where we-- with Vertex AI, going back to your question, Jay-- is what we try to solve is building those end-to-end and machine learning workflows, and how to do that more efficient and at scale, of course. 

CARTER: Wow. Yeah, so I just learned a lot about the entire pipeline. I'm familiar with TensorFlow and whatnot, or some of the other tools, but I've never seen the whole pipeline laid out like that. 

And so how does Vertex AI help with that? Is it that there's a bunch of complementary tools that people can use? Is it a hub that aggregates all this data in one place? How does it work? 

ERWIN: That's the key question here, of course. So it's a platform like you said, Carter. I think that's spot on what you said earlier. 

So we offer capabilities, which are tools to basically build this pipeline yourself. So to stitch together those different steps all the way from data validation-- the first step-- to having a model into production. I always say it's a box of LEGO, and you can build basically the machine learning workflow that you want to have. 

And what we do is we abstract a lot of the complexity away. Managing your infrastructure, tracking your metadata. If you have a model deployed, managing that. 

So I can give a few examples based on that pipeline that I've talked about. So for example, if you have features-- features are basically the data that you prepared, and that you cleaned, and now you maybe want to use that for machine learning. That's your data that you're going to use for machine learning. 

So managing features for the training phase, but also for the production phase is not easy, and it's difficult for-- challenging for our customers to do. So we have on Vertex AI a service called Feature Store, which helps you with managing your features for the training phase, but also having those same features available when you serve your models into production. So when you need those features to maybe get a prediction from your model to get a recommendation is the example and [INAUDIBLE]. 

But we also have technology for training models. There's different ways we can train a model, and we can do custom models like Jay mentioned using TensorFlow or PyTorch. So I'm a data scientist-- I know how these frameworks work. 

You-- Google will worry about the infrastructure and all the boring things. I'll do the machine learning [INAUDIBLE]. You can train a custom model on Vertex, but also you can use AutoML. 

So you can let Google train a model. So we then do the whole process of training, and tuning, and deploying the model as well. And also you can leverage something like BigQuery ML to train a model using SQL and data you maybe have in your BigQuery data warehouse. 

So many different options. I think for our customers to look at this, is that for every use case they have, we offer technology to help them bring a use case into production, and to speed up the work they're doing to make their life, hopefully, a bit easier. 

JAY: I can really see that, and one of the things I'm hearing that I really like about Vertex AI is I think in particular for those developers or engineers that are putting these machine learning workflows together, a lot of the things that are hard for them to do or things that they don't think about at first because they think, oh, I'll sort those things out later. So being able to look at things like bias, look at things like explainability, things that three or four years ago were extremely difficult, and now are becoming easier and more automated. 

ERWIN: I couldn't agree more with you, Jay. A lot of these things have become easier to do for machine learning developers or data scientists. And I think you've pointed out already a few that are very important-- detecting things like bias, but also scaling things. 

And we talked about Asia-Pacific having use cases with a lot of data. And everything is at scale here, so doing machine learning at scale. So it's very challenging for our customers. 

And that's where Vertex helps as well. We have things around explainability. There's this awesome story-- and you shared it actually with me, Jay-- which is a blog post, where we talk about how we track the performance of models in production at Google, and how we basically use a proxy metric. 

Because normally, when you want to track the performance of a machine learning model, you need to have the prediction of the model, and you need to have the ground truth. So if you have a recommendation system, what did the system recommend, and what did the user actually watch, and is that the same? Or if there is a difference, then you can see how your model is performing. 

But you don't always have the ground truth. And maybe someone-- if you're telco, they'll buy that new phone later in a month, or-- so it takes time to get that ground truth. So you can use proxy metrics to measure the performance of your model. We do at Google. 

So we've taken these best practices at Google, and implemented it in the platform as well. So what you talk about, Jay, about understanding your model in production. We, for example, have the ability to use feature attribution. So use some of these proxies to see if something in the performance changes. 

So if, for example, maybe one of the features and the importance of a feature for a prediction drops, you would be able to automatically get a message from the platform, and you could maybe retrain the model to see if you can adjust again for that drop in performance. 

CARTER: Oh, wow. This is really cool, because it sounds like the ease of use of using ML in production is drastically increasing. And I'm curious what do you think that means for customers that are using ML now? Does that mean they can focus on different parts of the pipeline now, or like implementing better models? What does that mean for users? 

ERWIN: That is the biggest progress we've made in the past years, I think, for machine learning users. They can focus more on their use case like I said. So maybe on the actual model they're training, on the data that they have, or the actual-- bringing the actual model into production where they can impact that use case. 

So I think they have more time to focus on those things. And also, I think once it is in production, it's easier to iterate through maybe updating your model, maybe adding some new data that you found, a new feature you created, and then improving the performance of that model as well. 

So I think building it-- the first use case, it's become easier. But also once it's in production, like you said, Carter-- mentioned things in production have become way easier through things like if you use Vertex to deploy your model as an API, we take care of the monitoring, we take care of the scaling up and scaling down. 

Like I just mentioned, and Jay talked about, we have things like bias detection or drift detection. So you can get alerts if there's something happening with the model in production or with your data, and you can update it. In the past, you had to build these systems yourself for every use case you do. So I think having that available-- that technology makes your life a lot easier. 

JAY: I feel that a lot of people in the community, whenever they think about training and developing these ML models, it's sort of just we develop it, we put it in production, and then it's good for life. And it sounds to me that we really need to think about how we continuously improve those models, and react to what's happening, with customer behavior as an example, of changing. 

How difficult is it to then retrain these models, and put them back into production? And how does a tool like Vertex AI help and assist with that? I mean, a lot of times, this training can take days. 

ERWIN: When you do software development, is that you bring code-- your application to production. And typically, when it runs, it runs. There might be a bug here and there. You fix it, but if it runs, if you don't touch it, it's fine. 

With machine learning, if you bring a model like a recommendation system into production, things can change in the behavior of people. Or if you bring it to a different country, people can be different culture, different preferences, so it can work different there. So you need to update this model over time because the performance can change. 

And doing this in the past was not easy, because you had to go back, you had to do everything again almost from scratch. You had to retrain, clean the data again. But now we have something on Vertex which we call Pipelines. 

And you can use this to orchestrate your pipeline. So I've talked about this machine learning lifecycle-- so this process for bringing something to a model to production. This is orchestrated, or it can be orchestrated, by Vertex Pipelines. 

And once you have that pipeline, you can also trigger that pipeline again. So for example, if you get a message from our monitoring system saying that, hey, the importance of this feature is going down, you could think, I maybe need to retrain my model. 

So you can say trigger this pipeline so it will be run the end-to-end process again, and you can automatically deploy a new version. And you can even A/B test it if you want. So I think that automation, that makes it easy. 

CARTER: This is so cool. I come from a Kubernetes world, like a DevOps world, I love CI/CD. And it sounds like with Vertex AI, it's building in a lot of that capability automatically. 

So I would like to dig a little bit deeper here if it's possible. Like take A/B testing. If I was using like a CI/CD tool, I might do like a canary deployment. Does it work the same way for A/B testing models with Vertex AI? 

ERWIN: It's exactly the same way-- is that I think as machine learning folks and data scientists realize that our friends in the DevOps world have all these great best practices that we might want to look at, and might want to reuse. So that has happened in the machine learning space. And what we've done, we've taken those best practices, and we actually implemented it in the machine learning space. 

And it's what we call machine learning operations. So we stole part of the name as well. Apologies for that. But yeah, so it's machine learning operations. 

So it's following those best practices. So having CI/CD process, doing A/B testing, or canary testing. Whatever you want to leverage. So it's [INAUDIBLE]. And that's where Vertex helps as well. So Vertex has the capabilities to implement end-to-end and machine learning ops workflow. 

CARTER: Wow. And so I want to dig a little bit deeper here, because this is really cool. There are some things that I haven't seen much of in the DevOps world, and that you see a lot more in ML like using GPUs, and other special types of processing unit. Is that something that Vertex AI helps with too? 

ERWIN: Yes. And I think Jay, you asked in a previous question as well machine learning at scale. So that's something we see across APAC as well a lot. I think there's two things that we see-- is that our customers have a lot of data, and our customers want to train more and more complex models. 

With complex models, I mean models that have a lot of parameters that are very large. There's a lot of data, very large models-- that is a complex thing to do. So what we see, and what we work on with our customers, is we help them with things like distributed training. 

So how can we train these models on what we call accelerators. And accelerators are things like graphical processing units or TensorFlow processing units. So how can we train these models, basically, at scale on a lot of the hardware that we have on GCP. That's one thing-- the training at scale. 

And we have customers that train models with billions of parameters. And it's mind blowing sometimes also for me to see what they're doing. And then to finish that up, that question is that if you have model trained where you're happy with it-- it's a huge model-- you need to bring that to production as well. 

And that's also something that's not easy. So if you have large embeddings or a very large model. So we also offer the ability to use those same GPUs to serve those models in production as well to bring your latency down, for example. If you do a recommendation, and you don't want a user to wait for a minute before they get a recommendation. So there's a lot of complexity around that as well. It's something we see in APAC a lot using GPUs for training, but also for serving off machine learning models. 

JAY: Let's dive a little bit deeper into that specific example you mentioned around recommendation engines and embeddings. I do understand that embeddings are very important to recommendation engines, but can you explain a little bit more about those embeddings, and how it is able to increase the efficiency of those inferences for recommendations? 

ERWIN: Yeah. So what we see nowadays, and especially when it comes to also recommendation systems, is that customers use embedding. So what they do is, if you do, for example, a movie recommendation is you have a lot of movies you could recommend. 

So what you do is you have those movies, and you put them in what we call multi-dimensional space, so into an embedded. And what we can do with that, for example, is that once we have that embedding, we can do what we call is a lookup. 

So we can say, OK, this user, Erwin, has watched this movie X-- are there movies that are close to it? You can imagine that embedding has a lot of different movies. So we only want the ones that are close to the movie that Erwin already watched. 

So what we could say is, OK, we have this movie, and we typically create a vector out of it. But we won't go into too much technical detail around that. But in that multidimensional space, we'll see which of these movies are close to this one that we have. 

So we do a lookup [INAUDIBLE]. And then once we have a group of those movies, we can rank them, and we can say what would be the best recommendation for that. But the thing here is that creating that embedding is one thing, but serving the embedding and doing a lookup in production is something that is not easy, because an embedding can be very, very large. So it's something you have to serve on a lot of compute, but also doing a lookup. 

So doing that lookup in the embedding space with very low latency, very fast and accurate as well is something that's not easy. And Vertex AI has a service-- I think it's one of the coolest services we have-- is what we call Vertex Matching Engine, which is based on open source technology which is called scan, which is developed by Google research. And Google uses similar technology in production as well. 

CARTER: I was going to say, I wish the people that were at home could see just like the energy and how excited you are talking about this. You really do believe this is really cool, and that excites me hearing about it. It does make me want to ask a question-- like some of these models, like this recommendation engine, it sounds so powerful, but is this something I would have to code on my own, or can I borrow tools to have this prebuilt? Or how does this work now? 

ERWIN: So let me first answer your question, then I'll tell a story. So you can nowadays, of course, borrow models as well. So you can build from scratch yourself. 

So we have customers who like to do that. They have their research teams that know their use case very well-- build it from scratch. They can do that on Vertex. But as we mentioned, is that we have other options on Vertex as well to maybe use our pre-trained APIs. 

If you do image classification, you can use the vision API. You send an image, and you get metadata back. That's always been there. It's still there, it's still awesome. A lot of our customers use it. 

But also we've launched a couple of years ago our AutoML capabilities as well. So you have AutoML who will do basically the whole lifecycle for you. You only need to bring your data. The rest of the lifecycle, we'll take care of it. 

We were working on this use case for a big bank, where we were building this custom model. Me and a colleague, we worked on this model for like a couple of weeks, and we were happy with it. We thought we did an awesome job, and then AutoML came out. 

And we threw the data in AutoML, and it actually outperformed our model, and I trained it in a couple of hours. It tells you, first of all, that the AutoML is awesome. You can get a really good model in a very short period of time. 

And the second thing it tells you-- I'm just a mediocre data scientist. I can't outperform AutoML. But yeah, and the recommendation system-- Carter, just finish up that question-- I think we also have a service for doing recommendations. So again, all of these best practices we've learned at Google, we've wrapped in a managed service for doing recommendations. So you can also borrow it from us if you want to do recommendations. 

JAY: Yeah, and I think that's really great because you have these tools like AutoML you mentioned earlier BigQuery ML as well. So if you have a BigQuery data warehouse, being able to train these models from directly inside of your warehouse. 

And it really speaks to the efficiency of being able to create these models very quickly without a lot of extra work from a data science team. But then if you think about scaling that out, how easy is it now for a startup or for a smaller business to be able to create machine learning models off of their data, and Bootstrap their startup to get started quickly? 

ERWIN: I'm a mentor in a Google startup program as well, and have a lot of friends who have startups. And actually, a good friend of mine who-- they're now probably in this scale up phase. He built his whole startup based on our APIs and AutoML technology. 

They don't have one data scientist. They only have engineers, and they exactly did what you said, Jay. They just bootstrapped everything together. And they are very successful, and the AI does an awesome job, and it scales easily. 

Nowadays, for startups, it's so easy to build these things from scratch. And if you're a DevOps background maybe, like [INAUDIBLE], it's very easy for you to train a model and to bring it into production. And you can focus on building the application around it, all the other awesome stuff. 

So that's made it a lot easier. We also see a lot of usage of BigQuery machine learning. A lot of business analysts, data engineers who know SQL, and the data sets in BigQuery, they will use BigQuery machine learning to train these models, but also do batch predictions in BigQuery. 

So no need to move your data out of BigQuery. And I've been impressed by the pace of the product teams at how many new models they add every quarter or every half of the year. There's just new models, new models in BigQuery. 

And like, I'm thinking we don't need to move the data out of BigQuery. We can do the predictions there. It makes your life so much easier as well. And now you can even do AutoML models with BigQuery, so-- 

CARTER: I'm sold. Like you said, hey, Carter, you're maybe thinking about using this, and now I definitely am. So I work with standup comedy a lot of times, and I'll analyze it, and I have spreadsheets, and databases. And I'm like, I wonder what would happen if I drop this in there? 

So to that end, how do people actually use this? Because you said there's an API, there's an API, there's an API. Is this command line, is this GUI, is this a REST thing? How does this work? 

ERWIN: Yeah. So let me talk about the platform in general-- Vertex-- just to make sure that everyone knows what I'm talking about. So there's different ways to use the platform. 

There's still, of course, the command line if you want to use that. We have Python libraries to interact with the platform. That's definitely something a lot of data scientists use. 

They use maybe a notebook environment. And we-- it's a shameless plug-- recently announced Workbench. Go have a look at that as well. But from a notebook, you can interact with the platform using your Python libraries. 

But I think where we made a lot of progress-- a ton of progress is that-- those Python libraries, command line, the APIs were always there. Google Cloud-- I think our foundation there is a very, very strong. But we made a lot of progress on the GUI-- the UI as well. 

So now you can also use the UI to build a lot of this stuff as well, for example, using AutoML, or just interacting with the platform, or seeing what's happening with your model and monitoring. So a lot of things are now also available in the UI, and they're adding more as well. So you can interact in different levels depending on what type of user you are as well. 

CARTER: This is amazing. 

JAY: Specific to customers that you've worked with, do you have a good, solid example of what they've been able to do with Vertex AI and machine learning? 

ERWIN: Digits Financial, they had this quote. So they have machine learning teams. They built custom models, so they do machine learning operations, Carter, and they follow a lot of the dev ops best practices as well. 

And what the quote I really, really liked is that since they use Vertex, and especially since they use Vertex, they have Pipeline-- so to create these machine learning pipelines that we talked about, they were able to retrain and deploy models in days, not in months. 

It took them months to bring models into production, and now it takes them days. And also the retraining-- like we said, what if something changes or we need to update? So Vertex very much helps with making that easier, and you spend less time on that process. 

So for me, when I heard that quote, I think that is exactly something that we're trying to achieve with our customers. Of course, we're trying to help you with the business use case as well and have that business impact. But sometimes, we forget that making developers, but also machine learning engineers, work more efficient is also a great business goal to achieve, because they can then work on other use cases, they can do more use cases, they're happier. 

So I really like that quote. And I think you see a lot of interest, especially also in APAC on Vertex. And when they start using it, everyone says, yeah, this definitely makes your life easier. And we spend less time on bringing things into production. 

CARTER: So say someone is like me, and they've heard about Vertex AI for the first time today, and they're sold. They want to go test it out, they want to play around with that, see what it's capable of. Where can we go to learn more? 

ERWIN: We have a lot of great examples on our website as well, so in the documentation. But I think we're going to share as well a new lab that we created. Let's see if we can add that to the notes or somewhere. 

So that's an awesome lab where you use Vertex AI to train and deploy a model. So it's using Qwiklabs-- I think that's awesome example. Also, we have-- on our Google Cloud GitHub page, there's a lot of awesome notebooks, examples. 

Big shoutout to DevRel, SAs, CEs, everyone who created that awesome content. I think our customers love it. So there's a lot of stuff. We're also working on updating videos on YouTube. They're also working on updating some of the courses we have, so there's probably going to be news on that as well. 

So we have a best of Next session for APAC soon. Keep an eye out for that as well. Best of Next-- APAC. We're going to talk about a lot of the awesome new launches we've done at Next, and we're going to do some demos as well. 

CARTER: Hey, I'm sold. Can't wait to check out that session-- the best of Next at APAC. I think I'm going to learn a lot from that. Is there anything we missed that you want to mention to the audience before we get out of here? 

ERWIN: Yeah, I think the one thing I say to all of our customers-- we can talk about things, but just try it out yourself. I think once you start working with the stuff, you see how awesome it is. 

And you said it, Carter-- you have this use case with standup comedians. Just throw the data in AutoML, see what happens, is exactly what I tell all of our customers. So just try it yourself. I think there's enough content. And everyone, good luck with your use cases. 

CARTER: Thank you so much for coming in today. And Jay, thank you so much for helping guide this conversation. 

JAY: I'm super excited. And again, as Carter said earlier, just to see your enthusiasm for the machine learning space, it's great to see, and it's contagious. 

ERWIN: Thanks for having me and asking these awesome questions. 

CARTER: Wow, I am so excited, one, to check out this Codelab, because I think that's going to be a nice, easy hands-on way of really making some of these concepts we talked about concrete. 

So I think that's going to be the first thing I do. But just, wow, my mind is blown, because some of these concepts that I'm familiar with from DevOps, and from the CI/CD world, and all that, I didn't know that it was possible to have all of that built into like a ML framework or a machine learning framework. This has been a really cool episode. What did you think, Jay? 

JAY: One of the concepts that I really loved that we talk about internally is how we try to make things for developers and engineers-- the things that they need to do every day simple and amazing experiences. But at the same time, trying to make sure that the complex things are possible. 

And I think that's really what this platform does, is it tries to make the things that these developers need-- whenever they're trying to make these things production ready, making those things easier, and there by default, and allowing them to focus on what they need to be complex-- maybe the complexity of the model. 

But it really sort of can vary. So Erwin talked about the easier side of ML, so using things like BigQuery ML, using things like AutoML. But sort of the sliding scale that allows you to then also develop these deep learning models, but still be able to operate those at scale in an easier and simple way. 

CARTER: Right. So to be able to handle-- if you have to update your model, well, how do you get that out to production in a timely manner and whatnot? That is really interesting, because I don't know much about machine learning. I haven't used it very often. I've read about it and I stay abreast, but I never once considered what it takes to actually run it in production, like the infrastructure behind it and all of that. 

And so Vertex AI makes it seem approachable to me. This is a whole new topic where I'm like, a notebook, what's that? Even I'm like, you know what, I can do this-- I can try-- I can learn ML. And so I think that's very cool. 

JAY: He also talks about how things have been borrowed from the developer space, because some of the same problems exist. So if you're a developer, you love just focusing on your code. And sometimes, we don't think about productionization, and sometimes, we don't think about the deployment aspects because a lot of those things have been automated away from the developer side of things. 

Previously, the data engineers did not have that. They had to sort of think about that whole toolchain, and how they might do that once they productionize. But now that you have things like ML Ops, they can focus on their model, and they can focus on the question they're trying to answer, and everything else is kind of taken care of for them. 

CARTER: These data scientists were roughing it before, but now there's no excuses. I want to see some great AI out there. 

JAY: That's right. 

CARTER: That was an amazing episode. Before we get out of here, what are some things that you're doing in the next few months that you're excited about? 

JAY: Yeah. Well, Erwin mentioned the best of Next APAC, so I will be hosting that. And we'll be taking those 300 sessions that we had at Next, and trying to focus specifically on Asia-Pacific. So what's interesting for APAC, what's happening new here, bringing in some customer stories as well, thinking about those hard problems that we're solving. 

And I'll also be doing a session on sustainability during best of Next as well. It is something I'm extremely passionate about, and I'm currently leading that for Asia-Pacific. It's not an easy region to talk about sustainability since so much of this region is growing and emerging economy, and they're focused on growth. And that's why I sort of feel that a lot of the innovation that we've come out with inside a Google Cloud is important, because we make a lot of those things easy. So the easier we can make those choices for those customers, the easier it's going to be for them to make the right choice by providing that transparency. 

CARTER: Jay, that is really cool. Both of those things, by the way-- one, that you're hosting, and then the sustainability aspect of pursuing a passion, and trying to make the world better in some way-- in a way that you can. I love that. 

I wish, again, that the people at home could have seen the passion on Jay's face just now because he was super excited. And so what I'm working on for next year for 2022 is trying to get the podcast-- the GCP podcast that you listen to-- trying to turn that into a video podcast so that if you like to consume things via video, you'll be able to do that. Thanks again, everyone, for listening, and we'll see you next week. 

[MUSIC PLAYING] 

JAY: Thanks so much for having me, Carter. See ya, everyone. 

[MUSIC PLAYING] 