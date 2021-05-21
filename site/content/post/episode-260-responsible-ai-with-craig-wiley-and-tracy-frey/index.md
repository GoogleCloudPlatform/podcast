+++
audioDuration = "00:41:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.260.mp3"
audioSize = 59531505
categories = ["AI", "Artificial Intelligence", "Machine Learning"]
date = "2021-05-19"
description = "Stephanie Wong and Priyanka Vergadia host the podcast this week as we talk responsible AI with guests Craig Wiley and Tracy Frey."
draft = false
episodeNumber = 260
hosts = ["Priyanka Vergadia", "Stephanie Wong"]
title = "Responsible AI with Craig Wiley and Tracy Frey"
image="/post/episode-260-responsible-ai-with-craig-wiley-and-tracy-frey/images/hero/hero-EP-260.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ngaylb/episode_260_responsible_ai_with_craig_wiley_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and [Priyanka Vergadia](https://twitter.com/pvergadia) host the podcast this week as we talk responsible AI with guests Craig Wiley and [Tracy Frey](https://twitter.com/tracyfrey). 

Vertex AI, the newly released AI platform from Google, is where Craig starts, telling us that it helps seamlessly integrate AI best practices into AI projects. When designing and building machine learning projects, it's important to plan and integrate functions that support a responsible model as well. Tracy and Craig help us understand the process of designing and building these responsible, efficient projects, from problem identification and data set collection and refinement to ethical model considerations and finally project construction.

Part of Responsible AI is considering all the stakeholders of a project and how they will be impacted. Through examples, Tracy demonstrates how businesses can decide if the software solution affects stakeholders in a way the business would be proud of. Starting in the planning stages and continuing through data collection and model training, companies employing responsible AI techniques will consider input from groups that may use or be affected by the model, from social scientist who specialize in human behavior, and others. Craig elaborates on these principles in the context of Vertex AI and how the time savings of Vertex could be used to make thoughtful, responsible AI decisions.

Craig teaches us more about Vertex as we wrap up the interview. Its ability to analyze data and perform ongoing model monitoring make for richer, more accurate projects. Tracy talks about the future of Responsible AI and how the marriage of tech and humanity will continue to produce ethical, effective AI projects.

##### Craig Wiley

Craig is the Director of Product for Google Cloud’s AI Platform. Previous to Google, Craig spent nine years at Amazon as the General Manager of Amazon SageMaker, AWS’ machine learning platform as well as in Amazon’s 3rd Party Seller Business. Craig has a deep belief in democratizing the power of data, and he pushes to improve the tooling for experienced users while seeking to simplify it for the growing set of less experienced users. Outside of work he enjoys spending time with his family, eating delicious meals, and enthusiastically struggling through small home improvement projects.

##### Tracy Frey

Tracy Frey is Google Cloud AI & Industry Solution’s Managing Director of Outbound Product Management, Incubation and Responsible AI and is dedicated to ensuring Google Cloud AI & Industry Solutions is responsible, thoughtful, and collaborative as it continues to advance artificial intelligence and machine learning. She has been at Google for more than 10 years where she has worked on many different products and areas. Before joining Google she worked at multiple early-stage tech startups where she held multiple functions including product management, developer relations, product marketing, business development and strategy. Prior to her life in tech she taught children traditional wilderness survival skills, taught in a traditional classroom, studied private reserves in Costa Rica and has been a professional hip hop dancer.

##### Cool things of the week

* Cloud CISO Perspectives: May 2021 [blog](https://cloud.google.com/blog/products/identity-security/cloud-ciso-perspectives-may-2021)
* The cloud developer’s guide to Google I/O 2021 [blog](https://cloud.google.com/blog/topics/developers-practitioners/cloud-developers-guide-google-io-2021)

##### Interview

* Vertex AI [site](https://cloud.google.com/vertex-ai?utm_source=blog&utm_medium=partner&utm_campaign=CDR_swo_aiml_vertexai_gcppodcast_052021)
* Responsible AI [site](https://cloud.google.com/responsible-ai)
* Staying ahead of the curve – The business case for responsible AI [article](https://www.eiu.com/n/staying-ahead-of-the-curve-the-business-case-for-responsible-ai/)
* Building responsible AI for everyone [site](https://ai.google/responsibilities/)
* Cloud Storage [site](https://cloud.google.com/storage)
* BigQuery [site](https://cloud.google.com/bigquery)
* Data Cloud Summit [site](https://cloudonair.withgoogle.com/events/summit-data-cloud)
* Applied ML Summit [site](https://cloudonair.withgoogle.com/events/summit-ml-practitioners)
* GCP Podcast Episode 249: ML Lifecycle with Dale Markowitz and Craig Wiley [podcast](https://www.gcppodcast.com/post/episode-249-ml-lifecycle-with-dale-markowitz-and-craig-wiley/)
* AI Edition Google's Tracy Frey: Creating Responsible AI [podcast](https://open.spotify.com/episode/0OKZN2PhM9p6P8Lwn7oQrR?si=WXAYe353TfGsmOXGi_e4Yw)
* TensorFlow Responsible AI Toolkit [site](https://www.tensorflow.org/responsible_ai)

##### What's something cool you're working on?

Priyanka has been working on the Vertex AI video series. [Episode 1](https://www.youtube.com/watch?v=gT4qqHMiEpA) and [episode 2](https://www.youtube.com/watch?v=CN2X6oIlnmI) are available now!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 260 of the weekly Google Cloud Platform podcast. It's Stephanie Wong. And today, I'm here with Priyanka Vergadia. Hey, Priyanka." >}}

PRIYANKA: Hi. 

STEPHANIE: So, Priyanka, I'm excited to bring you on because today's topic is responsible AI. And this is such a hugely important topic that we need to talk more about. And we're actually bringing on the managing director of our outbound product management and responsible AI, who's Tracy Frey, and also our director of product management for AI, who is Craig Wiley. 

And just a quick note that they're going to be covering both responsible AI and introducing Vertex AI, which is our new ML platform that just was announced yesterday at I/O, which is super, super exciting. And I know, frankly you've worked a ton on things around Vertex. So in a nutshell, what is it? 

PRIYANKA: Yeah, so I'll try and summarize it in one sentence. But I do want you to go check out our announcement and also some of the other content around it. So Vertex AI really is Google Cloud's end-to-end ML platform for data scientists and ML engineers. Really to accelerate the machine learning experimentation and deployment. So whichever phase you're at, it's going to help you make that faster to get your results. 

STEPHANIE: And I actually came out with a quick little intro video, as well, about Vertex AI and what it's all about. How we're trying to create a unified experience for developers who want both the SDK and CLI experience, as well as leveraging both our existing auto ML features, as well as our AI platform. So go ahead and check out the videos, blog posts, and all the material that Priyanka has created to learn a little bit more about it. 

But before we dive into our conversation with Tracy and Craig, let's go ahead and talk about some cool things of the week. 

[MUSIC PLAYING] 

PRIYANKA: As we know, all the time we get security questions. And I do like to cover and read a lot about how you can make your infrastructure secure and things like that. So I came across this blog post from our CSO. He gave his perspective. And he's doing that every month these days. 

So I caught the May 2021 version, here, where he was talking about risk governance of digital transformation, especially when it comes to cloud. And the importance of meeting the global compliance requirements and how you can do that. So he's covered some of those topics in there. And then he also teased some of the presenters for this year's RSA. 

So if you do want to check that out, that's all in that blog and, also, some of the really cool updates to our products pertaining to security. So if you're into security or interested in just knowing more about what's going on in the space, I do highly recommend that blog. We'll include that in the show notes. 

STEPHANIE: Yeah, I mean, security, regulations, compliance is all a very complex grouping of things that every organization needs to prioritize. And it's also very particular to the industry and the vertical that you're in, like supply chain versus health care, et cetera. And then, again, there's also endpoints versus network security versus workload security. So there's so many levels of it. So it's really nice to get that summary and birdseye overview of what's happening at Google Cloud and how we're trying to solve some of these challenges for every organization. 

So my cool thing of the week is, of course, surrounding I/O, which is happening right now as we speak. If you don't already know what it is, it is our annual conference for not just Google Cloud. But is actually for the entire company's announcements and developer toolings, updates, et cetera, for our developer and business audiences. So it's where you get an overview of what, in the last year, we've been working on. 

So I actually came out with a blog post for cloud developers. If you want a easy to read, quick guide to the best sessions of I/O for cloud developers, go ahead and check that out. I will say that we already came out with our big announcements around AI. 

But there's a bunch of other sessions that our teammates are doing, including Sarah Robinson, Dale, a bunch of people you've heard on this podcast before, who are going to be talking about things, like how to select an AI project. And how to actually implement it in production, as well as going over some demo derbies. As you know, a bunch of them have done some really cool stuff with machine learning in the real world, like reading PDF files as audio books, creating better athletic form, or even creating new cooking recipes. 

And then outside of that, we have some really exciting sessions around serverless. Going full stack with Kotlin or Dart on Google Cloud, another serverless demo derby, and how to go from dev to prod in three steps with Google Cloud Run. So lots of cross product information that you can look forward to, as well as workshops, AMAs, code labs, and adventures and community lounges. So go ahead and check that out. 

PRIYANKA: You know what I'm excited about? There's this rainbow rumpus competition where you're literally going to build a serverless application using Cloud Run and Microservices architecture from beginning to the end. And you get prizes at the end of it. So participating in something like that could be fun. So if you're into games, go do that. 

STEPHANIE: Yeah, we're trying to make it as interactive and fun as possible because we're in 2021-- we have virtual conferences. But hey, it makes it a little bit better when you have the chance to win swag and actual gifts that are going to be sent to you. 

PRIYANKA: Exactly. 

STEPHANIE: Well, be excited for I/O. We'll have the links in the show notes. Now, we're going to go ahead and jump into our conversation with Craig and Tracy. 

[MUSIC PLAYING] 

Craig and Tracy, thanks so much for joining the "GCP" podcast, again, for one of you. So why don't you go ahead and start off by just telling us about yourself and what you do here at Google. 

CRAIG: My name is Craig. I am the head of product management for our AI tools and applications here at Google Cloud. 

TRACY: Hi, everyone. I'm Tracy Frey. I work closely with Craig as part of the Cloud AI and Industry Solutions Organization. And I run our outbound product management incubation and our responsible AI. 

STEPHANIE: Tracy, that title sounds like it encompasses a lot of things. So I'm ready to dive into that more today, about everything that you cover. Craig, you were here on the podcast not too long ago. Last time, you were talking about the ML lifecycle and best practices around that including training, ML operations, and pipelines. So what has changed since you've been on? 

CRAIG: A lot has changed. Most excitedly is we've just announced Vertex AI, our new state of the art AI platform designed to help solve a lot of those problems we talked about last time, really designed with MLOps at its core. To ensure that customers have everything they need to be able to effectively build and integrate machine learning into their computer science stack. 

Having said that, that's only part of the challenge. We have Tracy here today, in large part, to help discuss the fact that the technical aspects of this are only one piece of how one effectively and responsibly gets this machine learning it into production. And so I think what Tracy and I hope to do today is to explore some of the areas in which there's intersection between some of these technical tools and capabilities, as well as some of these ethical and responsibility considerations that we have to have when building and integrating this type of technology. 

And so these two topics, they don't yet naturally fit with each other. It's a lot of online, offline type of conversations and things of this nature. And so while it may be a little strange at times, it may be a little awkward-- and Tracy and I may step on each other's toes at times. But I think our objective, today, is really to walk through how it is you can work with Google to really achieve the ends you're hoping to achieve. And to do it in a way that you can really be proud of. 

TRACY: And Craig and I are pretty good at stepping on each other's toes. And we've gotten really good at doing it virtually over the last year. So you're in for a treat. 

PRIYANKA: This sounds like a very exciting journey that we are going to take. And there'll be lots of here and there in it. So I'm totally excited. Where do we actually start? 

CRAIG: I'll tell you where I start. And I start usually in a brainstorming session with a bunch of folks on how we can create value for the business using math. And are there ways that we can use these new capabilities and technologies to generate nonlinear outcomes for the business that we're running? And doing that often, includes things like identifying critical data sets that are nearby, identifying critical talent who can help us build these pieces, and then figuring out what the kind of path will be from us identifying that data set, starting to refine that data set, and then ultimately building and hopefully integrating a model into our production system. 

Now, having said that, it's only a fraction of the overall conversation. And so, Tracy, maybe help illustrate some of the things that you're thinking about when this process gets kicked off. When a team embarks on building a new model, for example. 

TRACY: Absolutely. Stephanie, to your point earlier, in terms of the rest of my job, a lot of my job and my team is focused on really understanding what are the problems our customers are trying to solve at their core. And whether or not they can articulate those problems yet or not, it's our job to really try and understand. And unpack where are there repeated problem statements or challenges where machine learning and AI can be helpful and useful. And then where are the places where we should be focusing as an organization to try and address those. 

And we'll focus the rest of my conversation, input, on the responsibility AI part. Where I really start is focusing on the people who are going to be affected by and enabled by the technology that we're creating. That, then, is what creates a whole new set of inputs that we need to think about in the context of building any new machine learning system or application. 

I'm a process person. And so there's a lot-- and I think we can get into this in a little bit-- but there's a lot that I think is really important to put in place before you even get to the point of starting to build and design what you're going to build with that focus on people in mind. 

And in the context of enterprise AI, those stakeholders are not just our customers. It's our employees of our customers and it is their customers and end users. And it's our job, or I consider it to be our job, to be really understanding how any system will affect and enable all of those stakeholders. 

CRAIG: It's a critical piece because what I started out with was this idea that, hey, we were going to go identify a business need-- some metric in the business that we wanted to increase. And I think we've all probably been in cases where the business has gone out to do something and there have been unintended consequences. And when I reflect on what Tracy just said, and I think about how that impacts how we've gone about doing some of this work in the past, it really is, in many ways, about taking this 360 degree view and no longer saying, hey, am I able to deploy a piece of math or software that will improve my business metric. But what will I have done to do so? 

Who will I have affected? Who is impacted by me doing this? And are all of those folks impacted in a way that I and my business would be really proud to have them be impacted? Because if not, then despite the fact that I may be able to grow this metric on behalf of my business, it may not ultimately be the right thing to do. Because it may end up creating these unintended consequences that are far more harmful than the benefit of the model or the optimization itself. 

TRACY: I can actually give a couple of examples of exactly that, Craig, that are not technology specific. So one is Band-Aids. Band-Aids have been around for many, many, many decades. And for the vast majority of those many, many decades, they've been made in one color only, a soft pink color that happens to match my skin tone. And the reason that they are made to match that skin tone is so that they blend in, and they don't stand out. 

Now, you put those Band-Aids on anybody whose skin tone is darker than mine, which is the majority of the world, then it does stand out, which is not the desired outcome for a Band-Aid. A product that is designed and intended for widespread use shouldn't fail for an individual because of something they can't change about themselves and should be proud of for themselves, of course. So any product in technology should work for everyone. 

Another example-- and I find this just shocking-- until 2011, which is not that long ago, automobile manufacturers were not required to use crash test dummies that represented female bodies. And so what that meant was that women were 47% more likely to be seriously injured in a car accident than men. And when you don't think about it, and particularly, if you're only coming from your own frame of reference, and in this case, the majority of people who work in that industry are men, it just was not part of their frame of reference to include crash test dummies with lighter female oriented bodies. And that has massively harmful outcomes. 

CRAIG: For me, it comes down to this idea of you get what you measure at the end of the day. And if we take this very narrow view and we say, hey, we're building this machine learning capability so that we can optimize this single output or this single metric-- which to be honest, let's be clear, most machine learning is going to be pretty narrowly targeted at a very clear, probably, business metric or at a very clear outcome. And so as we engage with that level of focus to try and solve this problem-- I think the point that Tracy makes, which I couldn't agree with more, is that it's very easy at that time to lose sight of the bigger picture and the other impacts that can have. 

It would be very easy, for example, for Tracy to go in and create that soft pink Band-Aid because she's doing it in the lab. She reaches her hand out. She looks down, she goes, hey, it works, but without taking that broader view of how this will impact all of her stakeholders. 

Working in machine learning, once we've identified the problem, I often think of it as, hey, now we're going to go out and try and collect the data. And we're going to go to some series of prod systems, and we're going to collect a bunch of data. Or maybe we're going to go buy a data set or something like that. 

We're going to go collect a bunch of data. And we're going to start training a model at some point relatively soon here. I wonder, are there ways in which you see that process changing in a responsible AI thought leader versus if somebody were just blindly going out doing it themselves? 

TRACY: Yes, and I would say that those start before you are at the point of data and training. So, again, I think-- we were talking about this a little bit earlier-- but that idea that there's a whole new set of inputs that you need to have at the very beginning. And these are coming from the societal context understanding. 

And that then begs the inclusion of social scientists, human and civil rights stakeholders, and rights holders, and input from the groups and communities who would be negatively impacted. And that can feel like it's outside the scope of your responsibility, but it is not outside the scope of your responsibility. It doesn't mean that you are going to be solely responsible for solving all of those problems. 

It is an understanding, first, of that full sociotechnical context. Which is really acknowledging the reality that the social and technical dimensions of a technology are interconnected. And you cannot separate them because a machine learning model or system can't be considered apart from the people and the institutions who interact with the tool, and the beliefs, and the context, and the power hierarchies that shape the development and use. 

So all of those new set of inputs need to be taken into account. And in order to do that effectively, I think that there needs to be a set of things in place first. Which is that there needs to be a clear articulation of values. In our case, it's our AI principles. 

There needs to be a process under which you are operationalizing those values because no matter what, a set of values is not going to be a set of decision making words. And every use case actually really has to be looked at independently because it is the unique combination of the technology, the training data, what it's going to look like in production, the societal context, that full sociotechnical perspective that creates that unique picture of what needs to be evaluated. You actually have to define fairness every time because they're is no one definition. And it's dependent, again, on that use case. And once you have done those and you have a way that you are evaluating all of that, then you can get to the point where you are crafting a plan and you are starting to design and build. 

CRAIG: It's interesting that you say that because I was talking to a customer recently. And we were talking about AI principles. And they said, oh, well, we don't really need to worry. Our company doesn't have those. We can just go, and we don't need to worry too much. 

And I remember thinking, really? And I turned to the customer and I said, will you be OK if this model ends up marginalizing a plurality of your customers? And the person looked at me and said, of course not. 

And I was like, oh, so you do have principles. You're just not calling them those. You have this set of guidelines that is helping dictate how you're thinking about it. Now, I believe, as I'm sure you do Tracy, that sitting down and codifying those, and laying them out, and writing them down as an organization has a tremendous value. I wonder if you could talk a little bit about how you've seen that process change the machine learning that we create. 

TRACY: Totally, I think it does. And I'll also say that that is not a panacea. Writing them down and having the words on paper is not a solution unto itself by any stretch. What it does, though, is-- I think you can often end up in a case where you have a group of people who are well intended, whom you trust to make decisions, and that's great. And everybody believes that they are making the best decision possible. 

However, your decision, Craig, about something might be different than my decision about something. And we might both think it's right. And so having something like our AI principles creates a shared understanding of what we are building towards-- what we are committed to in terms of how we are aligning our products. And that shared understanding takes that individual difference out of the picture, not in that we're not individuals building products, but that we aren't making what is ethical and what is responsible decisions individually when we have something that we can look at together and evaluate against. 

Because the reality is too that, at least from my standpoint, it is not a goal for me in the work that we do that there is universal agreement in the decisions that we make through our responsible AI practice. I don't think that's realistic. And I also don't think it should be the goal. 

What is the goal for me is that there can be enough of a shared understanding of how we are arriving at those decisions. What do we take into account? How did we discuss it? What's the arc of that narrative? Are we really being as thorough as we can be? 

If there is enough trust that we can create in that, then I hope that even if people don't agree with every decision that we make that there can be in respect of the process itself. And that we are not simply washing over it. But I don't know, Craig, I'd be curious to hear-- you've been a part of that. Does that make sense to you in the context of everything you're doing? 

CRAIG: It's interesting because Vertex makes it really easy to go and connect to these data sources. Whether it's pulling data quickly and easily, directly out of BigQuery, whether it's getting unstructured data out of GCS, Vertex has really made it so that you no longer have to obsess about how are we going to get this data connected and how are we going to get it hooked up into the system. But what that has, I think, done or what I hope it does is it allows some of that time that is saved or freed up by making this much easier, to be used to start asking and answering some of these questions. I couldn't agree more around the value of not only codifying these things across the organization, but really developing an organizational muscle around having these discussions. 

Certainly, what I have found is that if I look at some of the areas where this has come to the forefront most, in things like celebrity recognition or other APIs that we have vended, we have created a far better product when we have thought to the left, to the right, up and down, and thought in a 360 way about these challenges versus when we say, oh, it's easy to connect Vertex to BigQuery? Great, I'll just go do that, and we'll be done here. And so instead-- freeing up some of that time to be able to start to think critically about these issues and really start to not take a pass at the human judgment necessary that goes into deploying some of these capabilities. 

TRACY: One of the things that's been a really interesting paradigm shift that I've recognized, more in hindsight-- we've been doing this now for a number of years-- is that any software that I've been involved in building before, we've talked a lot about who are the target users and what are the edge cases. And you're solving for your target users. And you either put aside for later or you ignore those edge cases. And you don't think about solving for them. 

And in the beginning, when we started doing these reviews, we were asking those kinds of questions. We don't ask those anymore because there aren't edge cases. There are opportunities. And there are harms. 

It is a function of then understanding what might create harm and how might we address that in what we build. And so if that obsession over where is the data going to come from can move into an understanding of OK, what is in the data that I have? And what is this data missing? What is this data hiding? Then you can make decisions about what to build, that are going to create a much better product in the end. 

CRAIG: We sometimes face, when talking to customers usually who haven't done a lot of machine learning, which is they come in imagining that these capabilities are there to help them predict the future. Not realizing that the future that they're predicting is one that is fully informed by their past. 

TRACY: That's right, and skewed by their past. 

CRAIG: Exactly that-- using machine learning, there is no predicting the future without really having to very critically view and understand what your past has looked like. And which areas of your past you're most excited to amplify. And which areas of your past are areas that you may want to make sure you're not having informed some of those future predictions. 

TRACY: Because I think a lot of people talk about AI as a reflection of humanity. But I actually really want to separate that. And I think, Craig, I'd love to hear how you think about this, particularly in the context of Vertex. 

So training data is a reflection of the skews we have in society. It's a reflection of what is our training data center on by who created it. When you put something into production, when you integrate it into the real world, then it is a reflection of society. And that is where things can break because you don't have in your training data what the real world is showing you. 

And that is the classic example of where if you think about that up front, then you are solving for those problems, those harms, before they become harms. And you can actually correct harms by doing that. And then I think-- you've talked a lot about MLOps as a way to think about this. How does that strike you? What would you do in those situations? 

CRAIG: One of the things within MLOps that we think a lot about and talk a lot about is this idea of features and features stores. So a feature store-- real quick, for those of you who missed the last MLOps podcast that we did. A feature store is really a place where your data scientists can sit and record different metrics or different variables that they expect to include in their machine learning or in the models that they build. And the benefit of a feature store over using something like the data warehouse is that the feature store actually trains on the production data itself. Instead of training on the data warehouse, which might have a different reflection of reality, insofar as that data is usually gone through quite a bit of transformation and curation before it gets into the data warehouse. And so moving upstream to train on those data sources. 

Now, the nuance here is that I'm sitting there saying, hey, be careful that you don't use a overly transformed set of data. Make sure you're using the rawest data so that when, in the future, you're doing inference with your model, you're using the same rawest data to do those inferences. You're not using data that's a month old in the data warehouse to do a realtime prediction. You're using the most recent data. So you'd want to train off of those same sources. 

I think the piece that we miss in MLOps, and the piece that really has to be brought into this, is that moment of reasoning that you talk about or that moment of human judgment when we say, hey, we've got this data. We've got the right clean version of this data. But then asking yourself, is this data reflective of what we want the future to look like? 

And knowing that often times, particularly in enterprise and in business, our objective is actually to change something about the future. It's to make it so that, hey, people always bought thing x in the past. I want them to buy my thing y in the future. And so we're already imbuing this process with a sense of we want to twist things just a little bit moving forward. Not just doing that with what is it I want someone to buy, but doing it with the is this predicting something with the data and in a way that is fair, equitable, just good for the stakeholders who are involved. 

TRACY: And good for the business, right? 

CRAIG: Absolutely. I do see them as deeply related. Although, again, we have a situation where we have hey, we've made the computer science a lot easier, which hopefully has freed up more time to have a richer dialogue about what it is we want to do with it and how we want to use it. 

TRACY: Absolutely And I think there's a lot of tools that you can then use to help you assess both what is in your data and then is it actually doing the thing that you want it to be doing. Because that's the point at which you can ask those questions-- what isn't here? And just a good example of this in action is if you think about something like demand forecasting, which is certainly something that is top of mind for a lot of organizations, particularly in retail, and if you take demand forecasting and you're going to apply it to a grocery chain. And that grocery chain has locations in marginalized communities, as well as privileged communities. And every store is stocking their inventory based on their analysis of their historical demand. 

That historical demand is a reflection of the sociotechnical context in which that system is going to live, which is different across those communities. And if you are not understanding and assessing within marginalized communities, if people are, which they are, traveling significant distances at great cost to themselves to buy fresh produce, which doesn't necessarily exist in their local grocery chain, then your system is going to create food deserts. And it will do it at incredible speed and scale. That is a loss to the retailer also. It is not bringing them the most business and the most community connection that they need to sustain their business. 

CRAIG: Absolutely, my hope is that we'll see more and more creative customers using tools like the explainable AI capabilities built into Vertex. Which help you understand how important are each of the attributes that a model is looking at. And not only overall for the model, but also for each individual inference-- how important was each attribute, as well as the what-if tool. 

And the what-if tool really allows you to ask the model, what would be different if the following were true? So that you can start to see-- I think, Tracy, to your point earlier, these edge cases-- I was in a fireside chat earlier today with the lead product managers from one of our customers. And it's autonomous vehicle company. So it's a company that's building self-driving cars. 

And they joked that in self-driving cars everything is considered an edge case. They don't believe there is anything that is considered normal. Everything is considered an edge case. 

And I think if we all said to ourselves, instead of me excepting this brutally simplistic view of the world, and saying, hey, this one metric is the only thing. And if I can drive that, then I'm great. If we all asked ourselves to take that step back and not just look at those edge cases, but consider those edge cases as a critical piece of it, I think we would, obviously, treat these problems very, very differently. 

TRACY: How do you think Vertex allows you to do that? 

CRAIG: I think with things like explainability and the what-if if tool-- it really seeks to do that. And then things like ongoing model monitoring-- so once your models in production, we're keeping track of ensuring that it's performing like you expected it to. And ensuring that over time it doesn't start deviating from what you expected. It keeps performing the way you wanted it to. 

Or it signals you, and pages you so that you can go after retraining the model or something like that. I want to be respectful of time here. And, Tracy, as we get ready to wrap up, I wonder as we move forward, what are you excited about with regards to responsible AI becoming more core to the way in which machine learning is built? 

TRACY: I am excited about a lot of things. I am excited about really fundamentally reshifting and reframing what success means for AI machine learning and all advanced technologies. And actually making it a real definition of success. So that's something that really excites me. 

I am really excited about the ability that we have with all of these tools and ways that we can evaluate them to fundamentally change and correct for a lot of historical and contemporary wrongs and harms. That ability is right in front of us. That opportunity is right in front of us. I'm so excited about all of the potential across all organizations to grab that opportunity and make the most out of it because that means better for everyone, including better for business. And so for me, that's amazing. 

It's so interesting what this work has done for me, which is it's actually made technology far more about humanity than any of my other work in tech has. I get excited about that every day because it's actually really marrying them. And the more we can do to amplify that, the better it is. 

CRAIG: A huge +1. To me, machine learning is the most transformational technology of our generation. This has the ability to allow us to achieve things that would never have been imaginable previously. 

And whether or not we do that well is how I think historians will look back on this time period. And we'll look back and say-- the grade we get is going to, I think, have a lot to do with how inclusive we are in the way in which this technology is integrated into our society and into the things we do. And so makes me extraordinarily proud to get to work at Google, at a place where responsibility is not a PR concern and a secondary thought, but it's really central to how we think about building and integrating this technology. So thanks a ton, Tracy, for your partnership on this. 

TRACY: You too. 

CRAIG: I look forward to seeing our customers build some remarkable software with Vertex. 

PRIYANKA: Before we do let you go, I have a question. For people who are curious to get started on the AI principles, laying down that structure, where should they start? What should be their starting point? 

TRACY: That is a great question. And it's one we are happy to help with. There's a number of tools and resources that we have available. And you can look on our sites. 

There is a Cloud AI-- responsible AI site. There's also the Google wide site about responsibility, and our principles, and resources, and best practices. So there are a lot of resources that are available. 

And we are always happy to help as much as we can. And so particularly, as you're using all of these new and awesome tools within Vertex, get in touch. And we want to help you as much as we can because the more we do this together, the better we all are. 

CRAIG: For the customers for whom AI is central to the way in which they seek to create value for their organizations, we are as actively involved with them on the responsibility front, oftentimes, as we are on the technical front. And we're excited to be in that position. 

STEPHANIE: Great, well, is there anything else that you wanted to add before we wrap up today? So we've got a lot going on here at "GCP." And so on May 26, there will be a data cloud event that we're really excited to welcome you to. And there is a track of that event dedicated to AI and visualization. 

And then on June 10th, we are holding our applied data science summit. And so this is an opportunity for machine learning developers, and leaders, and practitioners from around the world to come together and hear from some of the greatest minds, both at Google, as well as from some of our customers around what they're working on. There will be a lot about Vertex in there, but there will also be a lot just to learn from. For example, Francois Chollet will be giving the keynote. Which I cannot wait to hear what he is excited about over the next decade of machine learning. 

TRACY: And we have-- in the machine learning summit, we also have a session on designing inclusive ML systems, which goes into more detail and specifically more detail on a lot of the tools that are available, specifically tools that are available in Vertex. So come check that out too if you want to dive in more to those. 

STEPHANIE: That's really encouraging. And it's really exciting to see Vertex AI come out with these capabilities, MLOps related. That is going to enable everyone to be able to apply a much more holistic approach to their ML and think about the human side of things. 

And I just also want to highlight, Tracy, how it's brought you closer to the human side of the work, whereas most people might think it would have been the opposite. But we're seeing this intersection that you mentioned, sociotechnology, that I haven't heard that term before, but it really is that intersection between society and the technology that impacts society. So I just want to thank you both for your insight on this topic. It's a really, really accelerating field. And there's so much coming out every single day around it, including with I/O this week. So thanks so much for spending the time here today with us. 

CRAIG: Thank you. 

TRACY: Thank you. 

STEPHANIE: Wow, so that conversation was really thought provoking. I was just sitting back and deep thought the whole time thinking about all the ways that AI need to be responsible and needs to be holistic in its approach. And actually, I was just reading the article that our teammate Cassie put out. And I feel like there was a line in it that stood out to me that was very relevant in this case. 

But it basically said, even though a computer system can execute a decision, it can't be called a decision maker because it doesn't bear the responsibility for its outputs. That responsibility rests squarely on the shoulders of the humans who created it. So I think with those people who are concerned about the impact of machinery, computers, AI in society, it's very well warranted. We all have to remind ourselves that that responsibility of its impact, solely lies on the humans who create it and also continuously maintain it. 

PRIYANKA: It's just such a huge part. Craig mentioned this in his conversation where he's like, whatever we feed into it, we are going to get the result. If you feed bad data in it, the result would be modeled off of that. There's prediction happening, but then this prediction is based off of the fact that whatever was your past or that data, wherever you collected it from and whatever it represents, is what's going to be a reflection of what future you're trying to predict. So you better collect the data holistically and make sure that it represents all sections of whatever problem that you're trying to solve-- it's holistic in nature that data. 

It was very enlightening. I was super quiet during the entire conversation just mainly because it was just taking all of it in. The insights were just amazing. 

STEPHANIE: Exactly, and it made me think is there a way to build responsible and ethical AI practices into a machine learning platform? And then it made me realize, this is a hard problem to tackle. You can't really expect a ML platform to automatically know what is ethical and what isn't, right? It can take inputs. 

You can apply very clean AI practices and data cleansing techniques to it, but that still falls on the person who is managing it and operating it. So you do have to have that approach taken into account. But at the same time, we're seeing with Vertex AI and other AI tooling that's coming out now that we are trying to provide the foundation and structure so that you have that visibility into what we call MLOps. So things like explainable AI to help you understand the importance of attributes of a model and each individual inference, the what-if tool, and then, of course, not just throwing it over the fence when you have the model in production, but ongoing model monitoring. And make sure that the model isn't deviating from your expectations, which is what Craig talked about. 

PRIYANKA: In my work with Vertex AI, so far, I have used explainable AI to a certain extent. And I was blown away with what you can find. I fed a few images of a kayak, maybe-- like a smaller boat sort of thing-- but then when I analyze my model, I figured that it's only taking the paddle into account to figure out that's the image of a kayak. Even though I actually wanted it to make that decision based off of the structure of the kayak. So that was a realization where-- all my images had a paddle in them. So it's just things like that that explainable AI can let you understand-- your image data is biased or whatever sort of data that you're providing is just biased. 

STEPHANIE: Exactly, and that surfaces-- the problem at hand is that your model may statistically be a very highly precise and accurate model, but until you can look under the hood and see exactly which variables are the most important at play, then you won't understand whether it is, in fact, bias and you need to change your training inputs. That's a small example. But if you can imagine it at scale in real world cases where you're affecting thousands or millions of people, this is important. 

PRIYANKA: Very enlightening. I have a lot of thoughts that I want to bring into some of my demos coming forward. 

STEPHANIE: So I know that you just mentioned you're working on a bunch of things around Vertex and AI. So what are the things that we all have to look forward to from you? 

PRIYANKA: So yesterday, along with the announcement of Vertex AI, we dropped three episodes of a new series. It's basically end-to-end Vertex AI. So we calling it AI simplified. And you can basically learn from different features that Craig was talking about. 

How do you ingest data? How it makes it easy to ingest data and then creating the models. And then as the new episodes come in, they'll drop every other week, where we are going to cover these topics, such as explainable AI, and feature models, and also what-if tools, and things like that. So do look out for that. 

I'm constantly seeking additional feedback, as well. So if you do check it out, just let us know what else you would like to see in the series. I'm excited. 

STEPHANIE: And what I love about that is that the title is simple. It's AI simplified. And that is exactly what we need more of. 

I think a lot of people want to get involved in AI, but it can be intimidating because it's not an easy task. And how can you apply it in your own situation and context? But the more that we democratize access to AI and the tools out there, the more we get diverse perspectives for the people that are actually creating AI models and productionizing it out to the world, and impacting people. 

So it's not just on the creators side, which is what Tracy was talking about, but it's also on the impact side of who were affecting. So I think we need to democratize it to the creators too. So thank you for your work there. 

PRIYANKA: Thank you, I'm excited. 

STEPHANIE: We'll include all the links in the show notes. And I hope that this conversation was just as thought provoking for everyone listening as it was for us. Priyanka, thanks so much for cohosting with me again. 

PRIYANKA: Thank you. It is always fun to be with you. 

STEPHANIE: Bye, everyone, see all next week. 

PRIYANKA: Bye. 

[MUSIC PLAYING]