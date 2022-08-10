+++
audioDuration = "00:26:23"
audioFile = "Google.Cloud.Platform.Podcast.Episode.314.mp3"
audioSize = 38008939
categories = ["AI", "ML", "Machine Learning", "Deep Learning", "Model Training"]
date = "2022-08-03"
description = "Max Saltonstall and new host Anu Srivastava are in the studio today talking about Vertex Explainable AI with guests Irina Sigler and Ivan Nardini."
draft = false
episodeNumber = 314
hosts = ["Max Saltonstall", "Anu Srivastava"]
title = "Vertex Explainable AI with Irina Sigler and Ivan Nardini"
image="/post/episode-314-vertex-explainable-ai-with-irina-sigler-and-ivan-nardini/images/hero/hero-EP-314.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/wfbxfc/episode_314_vertex_explainable_ai_with_irina/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Max Saltonstall](https://twitter.com/maxsaltonstall) and new host [Anu Srivastava](https://twitter.com/asrivas_dev) are in the studio today talking about Vertex Explainable AI with guests Irina Sigler and [Ivan Nardini](https://twitter.com/ilnardo92). Vertex Explainable AI was born from a need for developers to better understand how their models determine classifications. Trusting the operation of models for business decision making and easier debugging are two reasons this classification understanding is so important. 

Explainable models help developers understand and describe how their trained models are making decisions. Google's managed service, Vertex Explainable AI, offers  Feature Attribution and Example Based Explanations to provide better understanding of model decision making. Irina describes these two services and how each works to foster better decision-making based on AI models. One or both services can be used in every stage of model building and to create a more precise model with better results. Example Based Explanations, Irina tells us, also makes it easier to explain the model to those who may not have strong technical backgrounds. 

Ivan runs us through a sample build of a model taking advantage of the Vertex Explainable AI tools. Presets provide easier setup and use as well. We talk more about the benefits of being able to easily explain your models. When decision-makers understand the importance of your AI tool, it's more likely to be cleared for production, for example. When you understand why your model is making certain choices, you can trust the model's outcomes as part of your decision-making process.
 
##### Irina Sigler

Irina Sigler is a Product Manager on the Vertex Explainable AI team. Before joining Google, Irina worked at McKinsey and did her Ph.D. in Explainable AI. She graduated from the Freie Universität Berlin and HEC Paris.

##### Ivan Nardini

[Ivan Nardini](https://twitter.com/ilnardo92) is a customer engineer specialized in ML and passionate about Developer Advocacy and MLE. He is currently collaborating and enabling Data Science developers and practitioners to define and implement MLOps on Vertex AI. He also leads a worldwide hackathon community initiative and he is an active contributor in Google Cloud. 

##### Cool things of the week

* Unify data lakes and warehouses with BigLake, now generally available [blog](https://cloud.google.com/blog/products/data-analytics/unify-data-lakes-and-warehouses-with-biglake-now-generally-available)
* What it's like to have a hybrid internship at Google [blog](https://blog.google/inside-google/googlers/what-its-like-to-have-a-hybrid-internship-at-google/)
 
##### Interview

* Vertex AI [site](https://cloud.google.com/vertex-ai)
* Explainable AI [site](https://cloud.google.com/explainable-ai)
* Vertex Explainable AI [docs](https://cloud.google.com/vertex-ai/docs/explainable-ai)
* Vertex Explainable AI Notebooks [docs](https://cloud.google.com/vertex-ai/docs/explainable-ai/overview)
* Feature Attribution [docs](https://cloud.google.com/vertex-ai/docs/explainable-ai/overview#feature_attributions)
* AI Explanations Whitepaper [site](https://storage.googleapis.com/cloud-ai-whitepapers/AI%20Explainability%20Whitepaper.pdf)
* Explainable AI with Google Cloud Vertex AI [article](https://medium.com/google-cloud/explainable-ai-with-google-cloud-vertex-ai-3b5cef44cbae)
* Why you need to explain machine learning models [blog](https://cloud.google.com/blog/products/ai-machine-learning/why-you-need-to-explain-machine-learning-models)

##### What's something cool you're working on?

Anu just got back from a nice vacation and is picking back up on how to use our AI APIs with Serverless workflows. She's working on some exciting tutorials for our AI backed Translation API.

Max just got back from family dance camp and is working to make excellent intern experiences.

{{< transcript "[MUSIC PLAYING] ANU: Hey, everyone. And welcome to episode 314 of the weekly Google Cloud Platform Podcast. I'm Anu Srivastava. And I'm here with my colleague and, actually, my neighbor Max Saltonstall. Hey, Max." >}}

MAX: Hey, Anu. Good to see you again. I'm glad we're actually in the same state for the first time in months. 

ANU: Same country. 

MAX: So this week we got to talk to two really cool AI experts at Google. And we're finding out how to get some more insight into all of the training and output stages of a vertex AI model, especially to help us just understand them better. And we've got some pretty cool new features that allow for a lot more accountability, transparency, and better explainability. Funny how that works. 

ANU: All things super important. OK, before we get into our conversation, what is your cool thing of the week? 

[MUSIC PLAYING] 

MAX: Well, I have been thinking a lot about interns and summer internships at Google. For most of the people who are here, including the interns that I'm hosting or co-hosting, this is their first in-person internship in three or four years. And so they are very happy to actually come into an office to enjoy some of the perks of the Google offices and to just get to sit with a team and their hosts. 

It's been fun for me to be a host for the first time and also to read about some of the cool experiences on the what it's like to have a hybrid internship post and others' just experiences about Google interns from all over the world on all different kinds of roles and teams. And I love learning about how other people are making it work and how they're learning a lot while they're here for 12 or 13 weeks. 

ANU: Super neat. 

MAX: What's been cool this week, now that you're back here and you've been catching up? 

ANU: Yeah, I have been catching up with the blog I was just reading about this morning-- Big Lake. So Big Lake just went to GA. It is a new offering that allows you to extend bigquery like a data lake. So I think this has been really needed on the platform for a long time. It allows you to get everything you need-- a secure, multi-cloud data lake over your files. And now it's actually in GA you get all those things that that entails. 

OK, hello everyone. We are so excited today to have Irina and Ivan. Would you all like to introduce yourselves to us? 

IRINA: My name is Irina Sigler. I'm a product manager in the vertex explainable AI team here in Google Cloud. Before joining Google, I worked in consulting. And I have a PhD in explainable AI. And I live in Berlin. 

IVAN: Hi, everyone. I'm Ivan Nardini. I'm a customer engineer at Google Cloud. I'm specialized in AI/ML. And I'm passionate with machine learning engineering. Currently, I spend my time to collaborate with data science team on customer side and try to enable them to put their model in productions using vertex AI. 

In my free time, I lead a hackathon community initiative. And I am an active contributor on Google Cloud. 

MAX: Thank you so much for joining us, Irina and Ivan. So people who are working in the AI space and ML space right now, obviously, a lot of challenges. But there's also kind of hidden difficulties. So what's the issue with the current models that needs something more-- some explanation perhaps. 

IVAN: Yeah, so actually, there is a sudden problem that a lot of machine learning engineering are facing. So let me try to explain. Imagine that you train a deep learning models that allow you to classify text. If this model is a vector-based model-- so basically what you have is a series of numbers that just classify the document for you to write the text and that you don't know which are the main factor that the terms this kind of classification because you need to look into these parameters, into these numbers. 

MAX: So this classification are we talking about-- this is a receipt versus this is a patent or are we talking about understanding individual sentences or something else? 

IVAN: Yeah. Let's say that you have a text. And you want to just classify this text in two categories, like if document has some kind of content rather than another. And you have this model to do that. It's quite simple. 

If you don't know how to interpret this parameter, then you have a problem, especially when you try to use this model in a business context. So first of all, I would say that when we talk about explainable AI, we are trying to understand the model. We are trying to interpret the reason or we are trying to interpret how the model makes some kind of classification. 

MAX: And why is that interpretation so important? 

IRINA: Just adding to what Ivan just said, one is, yeah, model understanding. How do you debug something that you don't even understand? How can you say that you trust something as a professional, say as a medical professional, if you don't really understand why the model reasoned the way it did. So that one is an important bucket. 

Two others I would name here is accountability. So if you're a decision maker who-- say in a professional capacity, again, like a medical professional, has to make a recommendation, you're required to have a level of, yeah, understanding and to build appropriate trust in the model. And then finally, it's risk management. So once you deploy a model, you want to understand how it functions under these real world conditions. And for that as well, you need to at least have a grasp of the underlying rationale that the model uses. 

ANU: That's pretty cool. 

MAX: Very cool. What would be a good way to get that broader perspective on what XAI can do for the developers? 

IVAN: Let's think about the example of a classification. You have these big models with parameters, right? Basically, these models are vector based. And so you have this vector of numbers. And you use this vector of numbers to classify your text-- let's say so. 

The problem is that when you move this model from research to business, it's not enough that you get a model that accurate classification your document or your text. But you need to explain the reason and why the model is so accurate. This is one of the things that we need to take into account. 

The other thing is that it's not just for who developed the model. It's also for who take decision on top of the result of this model, right? And so this is something that Irina was mentioning, trust and accountability. 

The decision makers really need to know the reason of why these models generate this kind of prediction. Last but not least, once the model goes in production and it start generating this prediction, it may happen that you made some mistake. And you really want to have a kind of technique that allow you understand, OK, why my model make these mistakes in the classification, right? These are the meaning three drivers. So model understanding, trust and accountability, and validation, right? Correct me if I'm wrong, Irina. 

IRINA: No, no, no. That sounds all good. And I think once we identify these problems, there's two ways you can really go about it. You can say, OK, I want to use models that are explainable. 

Well, if you want to use a lot of the state of the art models that we use today-- just aren't. So we need to apply some post-hoc explainers. So we need to explain already trained models. 

ANU: What are the different types of explainable AI that we now offer on Google Cloud? Radix explainable AI is a managed service that sits in Radix AI. And we provide a number of techniques to explain train models. Ultimately, we help our users build better models and make better decisions. 

We have two services that we provide. One is feature attributions, the other example based explanations. Feature attributions in a nutshell is a method that shows users how much each input feature contributed to their model's prediction. So for a tabular data set, feature attributions will tell you how much each column contributed to either a specific prediction or the model overall. 

MAX: That sounds pretty awesome because it can also help you trim your feature space if you've just been including too much unnecessary data, right? 

IRINA: Yes, absolutely. 

ANU: Well, I just love that this works for all different types of models that I might have on vertex. 

IRINA: Yep. And it's integrated into a number of vertex services, say automl tables [INAUDIBLE] so you can easily use it via that. 

ANU: Super cool. 

MAX: Can you tell me more about the example-based solution? 

IRINA: Absolutely. So we recently launched example based into preview. And this service, in a nutshell, enables users to understand model behavior by providing so-called nearest neighbor based explanations. So say for images, example based will show you which other images in the training data appeared most similar to the new image that you want to classify. 

ANU: Cool. Actually, for our listeners who might be a little bit rusty, do you mind explaining nearest neighbor? 

MAX: You're talking about Anu and I live on the same block, so I bump into her another way to work, right? 

ANU: Yeah. 

IRINA: Yeah, it's pretty much like that. So if you're both in the-- say the two of you in the training data set and you have some proximity to each other, then, yeah, the two of you would be nearest neighbors. If I [INAUDIBLE] predict live in the same block as well, then you would be my two nearest neighbors. 

MAX: So my model accidentally classifies a document as a patent when actually it should have been like an expense report. It'll show me other documents that were very similar to the example that may have been misclassified so I can see either there's some holes in my training data or I need to provide a little bit more supervision or I need to provide better examples on either side of that classification so that the model can make the correct call. 

IRINA: Yep. Yep. That's exactly right. 

MAX: OK. 

IRINA: And it's an interesting for you as, say, a developer to understand, well, what might make this expense report look like a patent? So maybe there's some Q that the model picks up where some spurious correlation. 

MAX: And can I combine these so I can get some nearest neighbor example-based explanations and some feature attributions so I can say, oh, it's actually because the header on top was from the law firm. And it thinks everything from that law firm is a patent, for example. 

IRINA: Yeah, we definitely love you to play around with both the services to get the full range of explanations. 

MAX: That sounds great. 

ANU: Yes, I was looking at an example for images. And it'll tell you exactly what pixels gave it that prediction. 

IRINA: Yeah, that would be feature attributions. 

ANU: Got it. 

MAX: That's really cool. It sounds like it can help me at multiple stages of my model lifecycle, as I'm establishing and training and productionizing the model. But also if I have an error when I'm deploying it, if I have a misclassification, it can help me troubleshoot that or go and tell my boss why have I messed up that expense report slash patent. 

IRINA: Correct. 

IVAN: Exactly. I mean, it's not a matter that it's only training related. I mean, it's also useful when you put the model in production and because it helps you to identify the misclassified examples. And so it helps you to also build better training data because when you put the model in production and you find some example that the model is not able to classify correctly, then you know that maybe you need to reach your data set in order to include these example and make the model aware of it. So, yes, it's important to highlight that it's not just for training, but it's also for serving phase of the model lifecycle. 

MAX: You mean that we don't always have a perfect training data set each time we try to make a new model? Is that what you're telling me? 

IVAN: Yeah, let's say so. I mean, you're not sure how your data set has been created. You don't know about the quality of your data. So that's the reason why this method can help you, Max? 

IRINA: And you don't know what's changing about the new data. Suddenly, there is a new image type that's coming in that that is just something that the model has never seen. And here you can easily understand what's driving the wrong prediction once a model is deployed. When you look at it, ultimately, a lot of model errors fail due to data issues either. It's the training data or it's the new data that we're showing the model. And this tool really helps you debug the model by looking deeply into your data. 

IVAN: Honestly, with you, Max, what made me so excited about the example-based technique is that they also enable model governance in your model lifecycle, right? Because think about the business user that at the end get this model, get this prediction. They also have these methods that allow you to explain this prediction, so allow the business user to understand the reason why model generate this kind of prediction. It helps you to improve governance in your machine learning environment. So it's really cool, actually. 

IRINA: Just to build on that, if you think about it-- with example-based explanations, it's even easier than with feature attributions to explain something to someone without the technical background because showing examples, reasoning, and analogies is something where humans are just very easily equipped to do. We don't need to explain to someone how machine learning works. We can just show two examples and ask if it makes sense to group these two together. 

MAX: Yes, that muffin does look a lot like a dog. I agree. 

IRINA: There you go. 

ANU: It's neat that this is applicable to different audiences, like the developer, your data scientist, your stakeholders. I think also this is very important for policy. Cool. So is example-based explanations limited to model training. 

IVAN: No, no. I mean, as I was mentioning before, it's also useful when you generate prediction, so when your model is in production because, actually, it allows you to debug the model in case it generates from prediction. So no, I would say that, yeah, it's a method also for when you serve your model, yeah. It's a technique useful also when you serve your model. 

MAX: So how does it all work? 

ANU: Yeah. 

MAX: I mean, behind the scenes, how did we make this happen? Because this sounds like a pretty impressive advance in helping me make better models, train better models, and then understand why they work or why they don't work. 

IVAN: I was kind of impressed as well. But then when I start playing with the Vertex AI SDK, which we provide and maintain as a Google Cloud, Max, I would say that is quite easy. It's just a three main steps. 

So first of all, you upload your model and your data set. And then the service representing the entire data set in the latent space, so basically generate the embeddings. And then as a second step, you deploy your index and the model. And you use the example-based API to create your model. And so once you start creating your model, you get similar example. 

So basically, from that point, you are able, for each prediction that you ask, to find the neighbor of example that are similar to this one. Base it on a metric that you define in the configuration of the service that you use. That's it. Quite simple. 

MAX: Do you need to then know the right metric to define neighbors? Is this kind of a chicken and egg or a recursive problem where to know what's nearby you need to know what's similar and then-- 

IVAN: Yeah, I would say that you have to know a little bit of vector space metrics. But it's not so complicated because when you define the configuration of the service, we have the documentation that explained these distances that you are going to use. So I would say that it's quite straightforward to figure it out. And, of course, in order to define the distances, you need to know your data because it depends on the distribution. So that's another point. 

MAX: Can't you just use AI to tell me which features I should be using for nearest neighbor? 

IVAN: Yeah. We cannot talk about that, Max. 

IRINA: Max, I take this as a feature suggestion and put it on our road map. 

MAX: Thank you. 

IRINA: But what we also have to make life a bit easier is we have some presets. You can choose between different query types. You care more for precise or for fast queries. And then you can also give us an indication of which data modality you're using. So with these two presets, we can already make life a lot easier for the developers so that you don't have to put as much effort going through the config. 

ANU: Cool. So you mentioned the SDK. What's the best way to get started? How do I try out explainable AI? What would you recommend? 

IVAN: My suggestions is just get your hands dirty with the services because it's the way that I learn about it. Just try. Use different data sets, explore the result, try to understand what happened behind the scenes, and try to interpret also the similar examples that you get once you just submit the prediction. That's what I would like to suggest. What do you think, Irina? 

IRINA: Testing the service, certainly, is the best first step. I think one second step, if I may add, is talk to your users. Talk to the non-technical people in your company. Show them the results you get with explanations, either by feature attributions or example based. And see if this helps create a meaningful dialogue between your data science team and the users of your data science product. So involve non-technical stakeholders early in this testing. 

MAX: Let's say I haven't done a lot of AI work and I still don't quite understand what we're all talking about here. Is there a place that I could go and look and see here's a problem, here's a model that I made to solve it, here's an explanation of a place where maybe that model got a certain prediction or output, and then maybe what I would do-- almost like a walk through of examples of each step that we just talked about. 

IRINA: Oh yeah, for sure. We have a number of notebooks that I'll just link in the show notes for both feature attributions and for example based explanations. We also have a blog post walking you through how to get started, how the output looks like. I'll link that all in the show notes. And hopefully, this will provide a bit more illustration. 

MAX: Yeah, because sometimes it's easy as to get your hands dirty playing around when there's something already existing. And then you can copy it, tweak it, futz with it. 

ANU: I love using an existing notebook. 

IVAN: Yeah. And please, please provide us feedback. We are trying to create much better examples, of course. 

MAX: For sure. 

IRINA: Just remember the services are mostly model agnostic. So whenever you see that some notebook works with image data, that doesn't suggest that the service doesn't work with tabular data. It all works for image, tabular, and text. We oftentimes just use image because it's the easiest one to explain stuff. 

IVAN: Yeah, it's intuitive, I would say. 

MAX: That's not a cat. That's a potato. What are you talking about? 

ANU: So this doesn't only work with my automl image data, right? I can use this if I have tensorflow models, right? 

IRINA: Yes. You can use this with your customized models. You can use this with your automl image models, whatever model you have at hand. 

MAX: Very cool. 

ANU: So, Ivan, I know you work with a lot of customers. And a lot of them are in regulated industries. So why should they care about explainable AI and take the time to invest in integrating explainable AI into their systems? 

IVAN: Some weeks ago, I was talking with this customer that-- and they trained these machine learning models. And they spent one month to figure it out, which would be the best model. But then at some point, one of the requirements that came over them, over the data science team, was, yeah, but once you find the best model, you need to provide me the reason. So you need to explain the reason why your model generates this kind of prediction or why we cannot put the model into production. 

So I think the main reason, if I have to provide just one reason to start considering explainable AI in your ml flow, is that sometime if you don't provide explanation of your model, your model will never see the light of production. So that's the reason why you need to care about explainable AI. 

ANU: Yeah, that's really important. I mean, something I like to say is it's great if you have a model. But what's the point if you can actually use it? 

IVAN: Correct. Exactly. 

MAX: I think as the enterprises and the teams get bigger and bigger, the amount of oversight and governance around the use of AI gets stricter and tougher. So being able to proactively address concerns, whether it's from outside regulators or from higher ups and stakeholders inside your company, having that explainable AI to say, here's why and here's what we've learned, can smooth out a lot of that lifecycle towards actual production launch. 

IRINA: And ultimately, it's just the right thing to do. Explainable AI is a tool in our toolkit to build AI that is responsible. And as we're starting to deploy models in increasingly critical environments, where they take decisions like autonomous driving or medical decisions, even-- or they support medical decisions at least, it's just important to understand why a model recommends a certain course of action so that we can appropriately trust it and make the best use of the machines that we're building. 

MAX: It sounds like it can also help us make those models better over time because they're not ever going to be perfect. But we can get better information about where they misstep through this kind of feedback that explainable AI offers. 

IRINA: Yes. And the important part is in this feedback loop, we don't only have data scientists. But with explainable AI, we have all types of experts and users who we invite to contribute feedback because we provide explanations that are not technical in nature. 

MAX: That sounds awesome. Thank you so much for coming on and explaining explainable AI to us and sharing some of these stories. I really appreciate it. 

ANU: I cannot wait to test this out in some of my demo apps. 

IVAN: Thank you. Thank you for hosting us. 

IRINA: Thank you for hosting us. 

ANU: OK, so let's recap what we just talked about. Explainable AI is a set of tools and frameworks to help you understand and interpret the predictions that your models are making. It is integrated into our very own vertex AI. So it falls into the umbrella of all things Vertex AI, our AI platform on Google Cloud. So you can expect the look and the feel of the developer experience to be the same. 

So what can you do with it? You can debug and improve your model performance and, most importantly, help others understand your model's behavior. It's not only for the data scientists that you're working with. It's also for the developers, your stakeholders, your users, the public, everyone so we can have more transparency into what AI is doing for us. 

MAX: That's great because those weird images that I keep seeing of, like, elmo riding a roller coaster through the apocalypse, I really want to know how the AI model comes up with those. 

ANU: Let's explain it. 

MAX: So now that you're back, what have you been working on lately? What's on your mind for the things that you're supposed to be doing? 

ANU: Yeah. So I just came back from a very long vacation. It was super exciting. We had a vacation in Bali. And we went to go explore locally a couple other areas, Bangkok. But now I've been inspired to actually pick up some new content tutorials on our AI powered translation services. 

So we have a full translation suite. We have a lot of exciting changes coming to it soon. So look out for some content around the translate API. 

MAX: It sounds like you may be needed to use some translation services recently. 

ANU: I did use Google translate a lot. 

MAX: I also just got back from a trip. My whole family was in Massachusetts for a family dance camp for a week, which didn't really feature any good AI use cases but did have a lot of fun folk music. But now that I'm back and recollecting myself, I'm excited to make some awesome intern experiences for the folks who are here with us in New York City. 

There's a lot of interns with a lot of really neat projects. But because we're still not at full office capacity, they don't always get to meet other hosts other Googlers, other interns. So I'm thinking a lot about how to make the interns I'm working with have an excellent experience but also how to help mix and socialize and just learn about each other for the interns in their final few weeks because most of them are going to be heading off and going back to school in August. 

ANU: It sounds fun. 

MAX: It's a lot of fun. Thank you all for listening and joining us for this episode of the "GCP Podcast." hope to see you all next week. 

ANU: Ciao. 

[MUSIC PLAYING] 

MAX: So I'm going to tell you my favorite AI joke in one minute. And then I'm going to let you go. So these three professors are debating, what is humanity's greatest invention? So there's an AI professor, there is a literature professor, and there is a mechanical engineering professor. 

And so the mechanical engineer says, listen, the wheel is the most significant human invention of all time. Without the wheel, we wouldn't have construction. We won't have transportation. We wouldn't have cities. 

We would just be in these little towns of hunters and gatherers. It allowed civilization to flourish. And the other to shake their head. 

So then the literature professor says, it's the written word, right? The alphabet-- without writing, we wouldn't pass on knowledge. We wouldn't build on science and literature and humanity. And we just would not have become as advanced as we are today in terms of our understanding the world around us. None of these things would be possible without written words. And the other to shake their head. 

The AI professor says the thermos. And the other two look quizzically, like, why a thermos? What about the wheel or the written word? The thermos, if you put hot coffee in, it stays hot. But if you put cold coffee in, it stays cold. 

And the other two stare at this AI engineer. And it's like, what? What are you talking about? Then the AI professor says, how does it know?