+++
audioDuration = "00:39:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.229.mp3"
audioSize = 56660481
categories = ["AI", "ML", "Solr"]
date = "2020-07-29"
description = "Mark Mirchandani is joined again by Priyanka Vergadia this week for an ML-filled interview with Radu Miclaus of Lucidworks."
draft = false
episodeNumber = 229
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "Lucidworks with Radu Miclaus"
image="/post/episode-229-lucidworks-with-radu-miclaus/images/hero/hero-EP-229.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/i047iy/episode_229_lucidworks_with_radu_miclaus/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) is joined again by [Priyanka Vergadia](https://twitter.com/pvergadia) this week for an ML-filled interview with Radu Miclaus of Lucidworks. Lucidworks, a company specializing in information retrieval, strives to make data searching easier for developers and users. Building off Solr, Lucidworks created Fusion, an environment more conducive to easy AI-enhanced query capabilities, better scalability, and more. With Fusion, developers can take advantage of the highly advanced relevance tuning tools such as query rewrites, which analyze user behavior and automatically rewrite queries based on that information. 

On the tech side, Fusion was built with a combination of Java, Kubernetes to increase scalability, Solr management tools, and logging and reporting tools.  The engineers at Lucidworks have created Fusion-specific system-enhancing pieces as well, including a machine learning service that allows data scientists to train their models elsewhere and plug them in for a completely customized experience. The team also created Smart Answers, which is a Q-And-A system built on a search engine that can connect to chatbots, virtual assistants, and others. Radu goes into detail explaining the Smart Answers system and how the layers of the project work together. We also learn about the customization capabilities and integration of Smart Answers. 

Radu wraps up the show with interesting use-case stories and how Fusion is working in the real world. In the future, Lucidworks will be available right in the GCP marketplace!

##### Radu Miclaus

Radu has over 12 years of experience in the data science space with applications in general machine learning architecture, search, customer analytics, risk and financial analysis. At Lucidworks, Radu focuses on low-code AI for search developers, pluggable machine learning for data scientists, and cloud managed services that offload the burden of operating search applications.

##### Cool things of the week

* Week 2 sessions on productivity and collaboration [site](https://cloud.withgoogle.com/next/sf/sessions#productivity-collaboration)
* Online shopping gets more personal with Recommendations AI [blog](https://cloud.google.com/blog/products/ai-machine-learning/online-shopping-gets-personal-with-recommendations-ai)
* Using new traffic control features in External HTTP(S) load balancer [blog](https://cloud.google.com/blog/products/networking/how-to-use-new-traffic-control-features-in-cloud-load-balancing)
* Optimizing your costs on Compute Engine [video](https://cloud.withgoogle.com/next/sf/demos?demo=307#infrastructure)
* Google Cloud Talks by DevRel [site](https://cloudonair.withgoogle.com/events/talks-by-devrel)
* Giving you better cost analytics capabilities—and a simpler invoice [blog](https://cloud.google.com/blog/topics/cost-management/cost-management-tools-in-google-cloud-console)
* GCP Podcast Episode 217: Cost Optimization with Justin Lerma and Pathik Sharma [podcast](https://www.gcppodcast.com/post/episode-217-cost-optimization-with-justin-lerma-and-pathik-sharma/)

##### Interview

* Lucidworks [site](https://lucidworks.com)
* Solr [site](https://lucene.apache.org/solr/)
* Lucene [site](https://lucene.apache.org)
* Fusion [site](https://lucidworks.com/products/fusion/) 
* Try Fusion [site](https://lucidworks.com/try/)
* Smart Answers [site](https://lucidworks.com/products/smart-answers/)
* Spark [site](https://spark.apache.org)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Dialogflow [site](https://cloud.google.com/dialogflow)
* Webinar: Smart Answers for Employee and Customer Support After COVID-19 [site](https://lucidworks.com/videos/product-smart-answers/)
* Deconstructing Chatbots [video](https://www.youtube.com/playlist?list=PLIivdWyY5sqK5SM34zbkitWLOV-b3V40B)
* GCP Podcast Episode 227: Pandium with Cristina Flaschen and Kelly Sarabyn [podcast](https://www.gcppodcast.com/post/episode-227-pandium-with-cristina-flaschen-and-kelly-sarabyn/)
* GCP Podcast Episode 188: Conversation AI with Priyanka Vergadia [podcast](https://www.gcppodcast.com/post/episode-188-conversation-ai-with-priyanka-vergadia/)
* GCP Podcast Episode 195: Conversational AI Best Practices with Cathy Pearl and Jessica Dene Earley-Cha [podcast](https://gcppodcast.com/post/episode-195-conversation-ai-best-practices/)

##### Tip of the week

We're talking to Dale Markowitz about [Prototyping Machine Learning projects](https://daleonai.com). 

You can also hear more from Dale in [GCP Podcast Episode 214: AI in Healthcare with Dale Markowitz](https://gcppodcast.com/post/episode-214-ai-in-healthcare-with-dale-markowitz/) and [GCP Podcast Episode 194: ML with Dale Markowitz](https://gcppodcast.com/post/episode-194-ml-with-dale-markowitz/).

     
##### What's something cool you're working on?

Priyanka has been working on [GCP Comics](https://medium.com/google-cloud/gcpcomics/home) and [Sketchnote](https://www.youtube.com/watch?time_continue=1&v=hEK5SMzI_n4&feature=emb_logo).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 229 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani. And I'm here with Priyanka. How you doing, Priyanka?" >}}

PRIYANKA: I'm good. Nice to be here again. 

MARK: Always exciting to work with you. And of course, we have a great episode today. First things first though, Priyanka, can you tell us who we're going to be talking to? 

PRIYANKA: We are going to be talking to Radu Miclaus from Lucidworks about their Fusion platform and custom search. 

MARK: It's a super awesome chat. And we get to learn a lot and think about-- I don't know if people have experience with Solr. Oh, well, you know what, we'll get into that in the interview. But it's a great time. And of course, after that, we're going to have a great tip from our friend Dale Markowitz about bootstrapping some machine learning projects-- or I should say, prototyping with machine learning. We'll get into that after the interview. But before we do any of that, why don't we do our cool things of the week? 

PRIYANKA: Yes. 

[MUSIC PLAYING] 

As you know, that next OnAir is in full swing right now. So we have lots of announcements to watch for. So I have pulled out two that struck me. One is really watching the AI and ML announcements. And the first one was around retail and online shopping, which is the recommendations AI. There's been a lot of dates made to recommendations AI. And they were all announced in a blog, which we will link below. 

But overall, it's really how easy they've made to collect the data from the integration sources, like wherever your data is sitting, like in BigQuery or in other external platforms, and then do analysis on it to provide recommendations. So do check that out. I think that's very exciting. 

And then the second one that struck my eye was-- I have a lot of interest in networking. So load balancer and anything we do along those lines to make that experience around taking your request and load balancing it with different parameters has always been interesting. So we just announced new traffic features into our external HTTPS load balancer. So do check those out. 

There's HTTP to HTTPS redirect, which is interesting, which was not there, and then back end reorganization with URL rewrites, which is also interesting. Because now you can rewrite your URLs to go to specific back ends. So I thought those two were exciting from the Next announcements in the past few days. 

MARK: Yeah, I mean, there's been a ton of Next announcements. I haven't kept up to date with the networking one. But if that's like the HTTP to HTTPS on the load balancer redirect, I think people have been asking for that for a long time. So I'm definitely going to have to check out the article after this. Because that is a super, super handy feature. 

Like you said, there's been so many announcements. So this week is week three of Google Cloud Next. And that week is about infrastructure. So when you think about infrastructure, of course, we always think about our friend Brian Dorsey, who often is on the podcast. But he's actually working on a bunch of cool stuff for Next as well. So we'll have some links in the show notes. 

But he's got a session where he talks about where you can run your things. And he's running this Talks by DevRel for this week, where they do kind of a recap of the cool sessions. And he's doing a Q&A. So we'll have all those links in the description-- super, super great stuff. And I'm sure Brian's always super excited to talk about Compute Engine and all the other compute technologies we have. 

I have one more story that I like a lot. And it probably doesn't apply to most people, because it's about invoices. And I don't know how many of our listeners deal with Google Cloud invoices too often. But at the very least, this is a cool, little, short blog on how some of the details from the invoice are getting moved into the console. 

So the whole goal here is, instead of having, like, a 70-page PDF full of just stuff that nobody wants to read because it's just way too complicated, let's let the invoice just have the amount that your cost is. And then all the details and the breakdown are in the console. So it's just a lot easier to manage. And there's some cool new tables. I actually have a talk in week seven, I think, of Next that goes over some of the ways the Cloud Console for billing has changed. So this is just one of the announcements that ties into that. Always exciting to streamline that cost experience. 

PRIYANKA: I know us developers, when we think about developing something, don't think too much about the cost at that point. But it is one of the very important aspects of using anything, right? So I'm pretty sure this will be useful. And I'm going to go check it out as well after. 

MARK: Yeah, and we had that great conversation a few weeks back with Justin and Patik talking about cost optimization. And a big part of that, I think, is the responsibility of developers to also think about costs, right? I mean, you want to play around with things, and you don't want to worry too much about costs then. But when you build out a system and actually look at what it takes to run that system in production, one of the things you want to think about is how much that's going to cost, and how can you optimize that. 

So that was a great, great discussion on just a bunch of ways, basically, to save money. Because at the end of the day, we all want the stuff, we just don't want to pay for as much of it. 

PRIYANKA: Yep. 

MARK: All right, well, actually, that's a lot of cool things. We usually don't go through that many. 

PRIYANKA: Yeah. 

MARK: But hopefully, for people who are excited about that, they've got a lot of links in this show notes to follow. All right, with all the cool things out of the way, why don't we go ahead and jump into our interview with Radu. 

[MUSIC PLAYING] 

Radu, thanks so much for joining us. To kick things off, can you tell us who you are and what you do? 

RADU: Yeah, hi. My name is Radu Miclaus. I'm a director of product for AI and cloud services at Lucidworks. 

MARK: And of course, I think the first question we usually ask after that is what is Lucidworks? 

RADU: Lucidworks is a technology company that specializes in information retrieval. It started, initially, as a consulting facility around Solr, Solr and Lucene. A few Solr and Lucene contributors teamed up and, in 2007, started the company. And yeah, it grew, initially, organically as a consulting shop around Solr. And then over time, we started layering software on top to make the life of search developers easier. 

PRIYANKA: For those of us who be familiar with Solr, do you want to just give us a little bit of information about what Solr is and what it does? 

RADU: Yeah, Solr is open source project built Lucene. It's another project that sprung off of Lucene. It enables people to index data and search on those indexes-- so very focused on keyword search. Very popular project, because it's very customizable, if you will. It's got a lot of flexibility. So you see Solr in a lot of companies that have developers and would like to engage in some very interesting and robust search problems. And Solr is one of the projects that can help with that. 

MARK: Yeah, and as a consulting company, I'm sure you saw all kinds of wacky use cases for when people were trying to implement it. And then you mentioned building software on top of that, right? 

RADU: Yeah, initially, the start was around more admin functions. So we started with more like an admin UI on top. Around 2012, when the need for Solr to become more of a distributed and scalable system came, we sponsored the Solr cloud design. Lucidworks is the commercial sponsor for the Solr project. 

And after that, we started thinking about, what are the repeatable tasks that we see in consulting more and more? Around 2012, our current CEO Will Hayes came on board. And he came from Splunk. And he definitely championed the idea of creating workflow and, what we call internally, pipelines around how data gets ingested, how it gets pre-processed, and also at query time, how you design queries, how you do relevance, fine-tuning, et cetera. And all of this was kind of designed around a workflow that is more intuitive for the developers. 

You know, over time, we added more componentry to the stack. We saw a great need for running batch analytics. So Spark became a part of the stack, as I mentioned earlier, a lot more robust applications around how we think about AI and machine learning, how we can treat queries and do query rewrites, how signals and telematics can be used to boost the relevance. And also, we added a great facility for building UI on top of search applications as well. And this is basically how our software stack, which, now, we call Fusion, became the platform that we represent going forward as a commercial option on top of Solr. 

PRIYANKA: How does a developer get started with Fusion? And if you can talk more about Fusion at the same time, how would somebody get started using Fusion? 

RADU: Sure, I mean, we have the same model, if you will, like your other companies, with trials, right? So we have the ability for users to trial Fusion, download it, and play with it. Obviously, this is for your developer persona. For more enterprise-type use cases and customers, that would be more of a direct B2B kind of engagement. And we have multiple options. We can deploy on premise. We can deploy on the Lucidworks cloud as a hosted facility as well-- very easy ways to access the technology and actually work with it. 

MARK: So let's take a step back and pull on one of the points you said earlier. You know, obviously, Solr kind of does some searching stuff. And it kind of makes sense that you needed to build some things on top of it for common use cases. 

RADU: Mm-hmm. 

MARK: I would definitely love to hear if you had any awesome stories of people using search in completely wacky ways that you hadn't thought of. But on top of that, why couldn't people just keep using Solr, right? Why did it have to be scalable? What made it need to have this expansion that you ended up building Fusion on top of? 

RADU: Just like everything else, the optionality and having a customizable framework to develop on, what makes it just that, right, where the development effort to actually build anything from almost close from scratch is actually very expensive. So we've actually seen a huge interest coming from Solr developers that want to basically accelerate their development. And there's a lot of concepts around that are very cumbersome in Solr, or not even available in Solr, specifically related to data ingestion, right? So Solr, for example, has very few data formats that it works with. Our Fusion platform has been purposely adding and focusing on enterprise data connectors. And it may sound boring, right? For enterprise use cases, it's the type of stuff that makes or breaks the applications. 

We've also built very robust SDKs around building your own connectors, right? So if there's certain types of customization for data ingestion, people can do that. When it comes to indexing, the type of effort needed to do data pre-processing, and working with fields, and doing document-type work, those were very valuable for us to formalize into what we call pipeline stages. There's a ton of examples around accelerators, detecting language, excluding certain components, parsing, mapping of fields of terms, regex, right, how you build regular expressions, et cetera-- so very valuable and accelerates that data pre-processing for developers. 

And then finally, relevance tuning, which is huge as well, which, for us, it kind of started initially with where we rewrite-- so using signals and user behavior to enable and automate the way queries are rewritten, anything from misspelling, to synonym detections, to doing head-tail analysis, where you basically can rewrite queries based on head type similarity versus tail, head being the majority of queries versus tail being very obscure or not as often seen queries, and then layer, also, on top things like recommendations, and applying experiments to the query pipelines, and understand which query pipelines and query behavior does better than the next. Those are a lot of the things that basically accelerate the search developer on top of Solr to build more robust applications, experiment more, scale it, make it enterprise grade, and so on and so forth. 

PRIYANKA: That was a very insightful explanation of why somebody would want to use Fusion. But can we dive a bit deeper into how, actually, you build the platform? Because that would unwrap a lot of things in terms of how you're ingesting the data and querying that stuff. 

RADU: Yeah, so the platform is Java. So there's Java scripting. We have a very robust admin UI that allows us to build jobs-- so collection management, job management. And the jobs could be transformations, et cetera-- and the whole concept of a workflow that allows you to build these pipelines. So that's kind of like the UI of the application, right? 

On the back end, you have a collection of componentry, including the way you manage Solr, the collections, et cetera, how you share them, replicate them, et cetera. There's the analytics piece, which is how you connect with Spark, and how you calculate things, and aggregations for signals, which is a telematics, the behavior in the search application, et cetera. And of course, there's logging and the reporting, the KPIs that go with that as well. 

So initially, the application. was monolithic. It was a monolith-based architecture, which made it cumbersome to update, right, and upgrade, and migrate, and so on and so forth. And starting last year, we had a massive effort to refactor it. And we went to Kubernetes obviously. And we had, obviously, the logical separation for microservices and also the physical separation with containers. And that allows us to do a lot of very interesting things. Because now the platform allows us to segregate workloads, for example, very easily. 

Your search workloads are going to require a lot of concurrency, very, very fast processing. You also need scalability for the batch side of the processing like analytics, and signal management, and model training sometimes, et cetera. So this platform allows us to do very interesting things around scaling, and also scaling separate type of profiles, which is very useful. So that monolith moving to a cloud-native architecture then also opens us up to have different conversations with what the total cost of ownership is for the customers that want to deploy on prem, same with public cloud providers. 

GCP is kind of our preferred, if you will, because it has been the backbone that we developed the Kubernetes architecture on, on GKE. And yeah, it allows us to do scalability and the elastic side of things very, very nicely here. And not only that, but now that you have an open platform-- and we are an open core platform to begin with, right, with Solr and Spark-- now we can use a lot of very interesting plugins to augment the intelligence of the platform. 

So for example, one of the big areas that we wanted to improve was the fact that we wanted access to other data science libraries than just Spark offered for machine learning. So for that, we built a machine learning service that allowed us to make models pluggable. So you can train your models somewhere else and then plug them into Fusion. And when we say pluggable, we'll make these models available either at index time or at query time. And that opened us to all the cool frameworks in TensorFlow and PyTorch to bring in, and not only that, allow the data science teams in our customers' base to come to the pipelines easier and reduce that friction between data scientists and production-grade search engines and search applications that need to be scalable, fast, optimized, et cetera. That's, in a nutshell, how we're evolving and building the framework, if you will, in the platform. 

MARK: Yeah, I mean, it's kind of a very standard monolith to microservices architecture. And of course, Kubernetes-- because of course. But it's awesome to hear. And obviously, like you said, there's a lot of concrete areas where that does make it a lot easier to independently scale. And then you kind of built your system in a way that, like you said, made it easier to plug in. 

And so as I understand, you've also built a bunch of components for Fusion that are really helpful. And one I'd like to ask more about is Smart Answers. So what is Smart Answers? 

RADU: Smart Answers was actually the first application that we built on the pluggability concept. Because we wanted to go in and use modeling frameworks that were outside of Spark for this. So Python and TensorFlow libraries now were made available to the platform. This is how Smart Answers kind of came about as one of the first production applications that we've built on top of Fusion using this pluggability concept. 

So at a high level, Smart Answers is a Q&A system that is built on top of a search engine, which makes it unique. And I'll touch on these aspects a little bit later. But it's basically middleware that allows you to connect it to chat bots. It allows you to connect it to virtual assistants. It allows you to connect it to your search facility on your website, or even a custom research application. Everything is API first, so we're open to that connectivity. And in many ways, the methodology that we've leveraged is the semantic search methodology that's relying on embeddings. 

So as some of the folks in the audience may know, once you go to deep learning, it allows you to build models that the effect on the end user is they can ask a question or input a query in many different formats. And they can get back the same exact answer as it was curated by the people that trained the model, from the knowledge base or the FAQ that is needed. While that may not be as concrete, being able to ask a question in colloquial or formal ways all of a sudden opens you up to this conversation of self service. 

Because you're basically signaling to the user, hey, you don't have to have special skills to search or ask for something, right? You can type it in or speak it casually, or formally, and the technology underneath the models will be able to find the most similar answer for you and serve it back to you through the same input or output that you choose to use. That's basically, in a nutshell, what Smart Answers does for us. And I can touch on, a little bit later, if you guys like, on some of the things that are interesting when you layer a Q&A system with a search engine. 

PRIYANKA: I think, let's dive a little bit deeper into that. Because I think that's a very interesting aspect of a smart answer system, right? A lot of questions that I get around building chat bots with, for example, Dialogflow is-- and I always say this to people who are asking, right, or were just starting to build out bots-- you need to have a very smart and intelligent system behind the scenes to power your bot. Because otherwise, it's just NLP that's responding. But you need a solid back end that can answer the questions. And I think that's why it's very important for us to touch a little bit on what's powering the Q&A system and how it works. 

RADU: You brought up Dialogflow So this is cool, because Lucidworks has a partnership with GCP. We're very excited about it. And one of the perks of this was us using a bunch of the tools available on the GCP stack to present to customers to show the technology. And Dialogflow was actually front and center around how we wanted to present this intelligence back end to users. I'm just trying to build a little bit of backdrop here, right? 

Dialogflow obviously has open APIs to communicate with back ends. And it also has this really cool concept of intents, right? And as part of some of your past conversations on conversational frameworks, some of the other podcasts you guys have, it's almost like arts and science on how you can design the usage of intents on the front end-- workflows, clarifying questions, and so on and so forth. 

The way we've built the integration was a very simple one. And the first piece was just connect it to a query pipeline in which a model that was already trained against a block of information, a set of FAQs. And the second intent that we wanted to build in there was a voting intent, what we call as signals. Because as users ask questions, they may signal that the answers coming back may not be suitable. So they can actually use intent to ask for a new answer. And if they agree with the new answer, they can say, yes, that works. And all of a sudden, that becomes a positive signal. And the next time a question like that is asked, it can be boosted up, or it can be the first one in the queue. 

If I was to dive a little bit deeper, the query pipeline that the intents call to has multiple steps, including taking in the query, representing that query as a vector, and then looking back and understanding what pre-process vectors for question and answers we already have in the system, calculating similarity between the query or the question and answer that we have already modeled, and then serving back the most similar answer. The development environment is very flexible. Because as a developer, you have the option to turn some dials. You also have Solr scores, right-- so keyword search scores that you can combine with the semantic search or the cosine similarity between vectors. So as a developer, you have a lot of flexibility to fine-tune this system and say, you know what, I want 20% of the score to be keyword-based versus 80% of the response to be Q&A-based. 

MARK: I haven't worked with Solr in many, many years. But I'm suddenly having flashbacks to sitting there and tweaking individual Solr script for hours and hours on end. Because like you said, it's complicated to build all this and to get it working exactly the way you want. 

RADU: The main things that we focused in the design of Fusion is to make it a open box that allows developers to kind of see through all the options that are providing and working with as opposed to make it a more closed box and less developer-friendly, if you will. That is why, sometimes, we get some of the gnarliest use cases out there, right, in terms of customers coming to us as a last resort, if you will. 

PRIYANKA: Yeah, you're basically making it easier for developers to use the tools. That's kind of what the use case is. Before we switch off of Smart Answers, just one more question. Because I'm excited to try it. To use it, where do I go? What do I do? How do I get started with Smart Answers specifically? 

RADU: Same thing-- our website has a try now trial you can get and trial Smart Answers. It's pretty straightforward. Our documentation is very well-written as well. It's step by step how you load your training data sets, the parameters you use. The whole UI is low code. There's no coding involved. So yeah, it's a pretty easy experience. 

PRIYANKA: We're going to get the links from you and put them in the show notes so that people can get started-- awesome. 

MARK: Well, I love what you said about kind of making your platform transparent, right? So instead of sealing off everything and saying, oh, it just works, and you just have to accept that it works, you open it up. And you let people see what's going on on the inside. And you let them tweak what's going on on the inside. So with that being said, if you share some stories about people who have used Fusion, or again, any of those use cases that have kind of surprised you, I'd love to hear more about that. 

RADU: I want to kind of break it off a little bit into two use cases for us. Everybody, right, is writing the digital transformation storyline. Why not us too, right? So the way we think about search scenarios, we see these two big classes. We see e-commerce, right, which is kind of exploding in terms of the need for an Amazon-like experience on any e-commerce site. And then you have the workplace, your intranet, the place where your employees are actually residing, right, and trying to be productive, and trying to find content across the wide spectrum of data sources that are out there organizationally, right? So if I was to break it up into those two, I can talk about, maybe, use cases from each one if that's OK with you guys. 

In the workplace, you see this phenomenon of many, many sources of documents and number of documents, millions of documents. And if you put it in perspective, right, these companies that are going through digital transformations, by definition, are companies that were not digital first. So what's happening is they're adding new digital data sources, but they're slower to actually retire old data sources. So you have this plethora of data formats, data environments, and new data coming from, maybe, software as a service environments and others that are needed to actually put together environments that can be searchable, right, index curated correctly, and so on and so forth. 

A story like this is an interesting one. I won't necessarily name the name of the company. But their claim to fame is that they had the largest SharePoint implementation in the world. 

MARK: That has to be one of the more questionable claims to fame that-- 

RADU: Sure. And that's fine. You asked about interesting scenarios, right? And this is one of them. 

MARK: That's very interesting. 

RADU: One of the big things that they had issues with was access level control. Why is it a search problem? Well, security trimming is big, especially for a workplace search, being able to meet the requirements of the users actually having access to the documents based on their access control groups. They had such a complicated access control group setup that it was very expensive computational. And the user experience was terrible when they were trying to filter based on these access control groups. 

And this is where a very cool capability from Solr came in, which is our graph capability in Solr. We were able to actually use graph traverse to run these filters that were matching the ACL document description for the access with the main index documents. So all of a sudden, this company that had a problem doing basic things because the implementation was so massive, this company all of a sudden was able to run and improve that user experience by running Solr, Fusion and ACL-type filtering very fast, right-- so sub-second. And now the user experience is great. 

The same company was actually also one of the first adopters of this whole concept of pluggable data science. So when we came out with the machine learning service, these guys had a massive data science team that was kind of like a centralized data science team that was dealing with search problems as well. And they had a lot of models around document clustering, and embeddings calculations, et cetera that they wanted to bring to Fusion, into the pipeline. So they've been a great early adopter and great success for us. 

Now the second piece is e-commerce, right? So if we were to talk about e-commerce in general, I can probably bet that somebody in the audience have had a bad experience searching for things on an e-commerce site. And this goes anywhere from no results to actually getting what you don't want. And everything is all about focusing on context and intent of the query and then matching with the results. So all of a sudden, you're having a very interesting blend of keyword search, semantic search, and recommendations kind of all mashing in together. Because even when you go to, let's say, a product detail page on an e-commerce site, it's not just the product, right? There's also several things like bought together, like this, all of these other recommended products, et cetera. 

So the whole experience in the home page, the categories, the product description page, in the search, all of these, all a sudden, you see search and recommendations pervasive across all of them. And this is not actually a very straightforward problem. Because what we've seen in a lot of e-commerce customers that we have is very small percentage of them that use AI. A lot of them are still very focused on business rules, right, in the way they set up and they merchandise. 

So from a product perspective, we have a domain-type solution for merchandisers that we're augmenting more and more with how you rewrite queries, how you handle recommendations, and so on and so forth, to enable the merchandisers to create a very robust experience on e-commerce. And implementations, we have payroll companies, grocery stores, et cetera that are starting to buy into this use of telematics signals for boosting semantic search recommendations all used together for the user experience. And you start to get closer and closer to that Amazon experience where you get search results, but you also get a bunch of other things as well that will help you research better. 

PRIYANKA: All very, very exciting and interesting-- yes, you were right, I go on at least one e-commerce site a day that is not giving the result that I want to see. So I'm pretty sure that would relate to everybody out there. Is there anything else, at this point, that we may have missed, that you want to throw some light on before we wrap up? 

RADU: I mentioned, earlier, the GCP partnership that we have with Lucidworks. And this will get even tighter now. And to your point, how can people access Fusion easily, so we're making an effort towards that in the context of the partnership itself. So we're working towards making Fusion available on GCP Marketplace. It's going to be a bring your own license type of environment where you can work with Lucidworks to get your license. But the deployment and the access will be straight through the GCP marketplace. And that, we're expecting, in the next couple months here, shortly, to materialize. 

So the partnership is exciting. Also, the type of opportunity to expose Fusion to many more users is exciting for us as well. 

MARK: Yeah, that's awesome. And it just makes it easier for people to try out. We'll definitely make sure to have a link in the description for people too, who want to go and play around with it right now just to make it easy for them. 

RADU: Perfect. 

MARK: Well, Radu, thank you so much for coming in. Really appreciate your time. 

RADU: Thank you all. 

PRIYANKA: Thank you. 

MARK: It's super exciting to hear about all the different things they thought about while building the Fusion platform. And of course, we have that link for people who want to go try it out. It was a really cool conversation. And I really enjoy talking about the things you have to think about when you're dealing with search, and how are these users, whether they're internal or external, going to be able to access your actual data? 

PRIYANKA: I thought it was interesting that it also has a UI on the top. So it makes it easier to get started even if you don't know much about, how do I search, what are the keywords, what should I be using? And they do all that heavy lifting behind the scenes so that the experience as a developer is easier. 

MARK: Yeah, we had a great conversation with Pandium not too long ago about yes code, no code tools and what that looks like. I realize now that the show notes are probably just going to be a bunch of links to previous episodes of the podcast, which means, hopefully, I'll get to the point where the podcast is just two minutes of me talking and then 50 links of previous episodes. But hopefully, we won't get there. There's a lot of references in this episode. 

And speaking of which, obviously, Priyanka, you've done a ton of stuff with chat bots and what that looks like. And we can put some links in the show notes for those too, right? 

PRIYANKA: Yeah, and along the lines of Smart Answers that Radu had mentioned, from the Lucidwords platform, we have a deconstructing chat bots series that I'd created with all the basics of how to get started with Dialogflow within Google Cloud. So if you're interested in getting started with building your own chat bots, you could do that. Basically, what Lucidworks had done is created-- used Dialogflow to connect to their Fusion back end in order to provide those Smart Answers. 

So you could do something similar as well with your back end. And that's the power that Dialogflow offers, the built-in machine learning and natural language processing. So check out the link for that as well. We're mentioning too many links today. 

MARK: There's a lot of homework for our listeners. I'm sorry, listeners. And you know what, it's optional. You don't have to do it. They're great resources if you want to do it. 

PRIYANKA: We also brought on some guest speakers for our previous podcast episodes where we had this conversation with Cathy Pearl from our Google design team. She helps design virtual user interfaces-- so again, very much aligned with people who want to learn more about how to design chat bots, and from the linguistics perspective as well. So there was a little bit of that that we talked about, which was a very good conversation-- because I know nothing about linguistics-- and also some best practices. So we'll again link the episodes in the description. But there's a bunch of stuff if you want to get started with conversational experiences on Google Cloud. 

MARK: Yeah, those were some great conversations. I had a lot of fun there. They're really informative too. Because like you said, I had no knowledge, going into that, of what it does take. What are the considerations you actually want to think about when you're building a chat bot? And how do you want to build that conversation? I learned so many things. Those are some of my favorite episodes. 

And we obviously are talking a little bit about ML. And so a question I had earlier was, OK, well, we talk a lot about ML. But what's a practical way to get started with it? So I turned to our friend Dale Markowitz and asked her, well, what is the best way to prototype machine learning? And so let's turn it over to Dale to hear a little bit more about that. 

[MUSIC PLAYING] 

DALE: Hey, Mark. Dale here, applied AI engineer. Glad to be back on the podcast. So sometimes I think my job title should actually be professional prototyper, because I spend so much time building machine learning prototypes. It turns out that with machine learning especially, this is really important. Because you often don't know if a thing that you want to do is going to work, or even, if it works, if the quality will be high or if it will work well. And the best way to verify that is to build a proof of concept fast. 

Plus, prototypes are a really great way to convince the people that you work with that what you're doing is useful. Because a lot of times, people don't understand machine learning. So how do you build an ML prototype fast? Well, I tend to use the same architecture over and over again. And if you read any of the how to posts on my blog, you'll see that I talk about it all the time. 

First, I find an ML model that I want to use. So maybe it's one that I trained from scratch on my own data. Or maybe it's a pre-trained model like the Google Vision API or the Google Speech API. 

So let's say, for example, I want to build a model that uses the Vision API to build a dog breed identifier. The Vision API actually can look at a photo of a dog and predict the breed, which is pretty cool. So usually, with machine learning, what you want to be able to do for your prototype is to quickly test out the model on your data and also make it so that other people can test out the model on their own data. So what I do is I create a Cloud Storage bucket. And then I use Cloud Functions to call my model when data is uploaded to the bucket. And then I'll write the results of the model to Firestore. 

So for example, I have a bucket called "dog pics." And if I upload a photo of a dog to that bucket, a cloud function will fire on the upload. And that cloud function will call the Google Vision API to identify the dog breed. When Vision API returns the results, then I'll have that same cloud function write the results to Firestore. Firestore, by the way, is a Firebase database that's really easy to integrate with front ends like a web app, or iOS, or Android. 

Not only is this demo architecture really quick to build, it's also easy to share with people, because there's a Cloud Storage UI, and there's a Firebase UI. So even if the people you're sharing with aren't technical, they can still try it out. And the other nice thing is, like I said before, because Firebase is really designed for app development, this back end is a great first step. It's very easy to integrate with a front end. It's very easy to build on top of. 

Now I've been building a lot of prototypes recently for my new series on the Google Cloud YouTube channel called "Making with Machine Learning." I built in an AI video archive for my Father's Day videos. I built a Discord moderator and a tennis server analyzer. And next week, I'm talking about AI and video games. So make sure you check out that series if you want more tips on prototyping ML, or read my blog, DaleOnAI.com. 

MARK: Awesome, thanks so much, Dale. And as she mentioned, we'll have her website in the show notes. And then, we actually had her on the podcast before-- so a link to those episodes. And at this point, this is basically a clip show version of a podcast. But no, there's a ton of great resources. And obviously, it's because we've had a ton of great conversations. And when you look at something like Lucidworks, it really does show you how many different areas you need to touch to build a complete system-- so super, super cool, tons of references and resources in the links. So hopefully people find those useful. 

Well, with all of that being said, Priyanka, what have you been working on? 

PRIYANKA: In the last week, the one thing that I am really excited about sharing is, if you follow me on Twitter, I had posted a sketch note, which is the first sketchnote that I've ever built. And I thought that it would be great to start with something that a lot of people had been asking for, which is, how do you decide where I should run my application, whether I should use Compute Engine, or Cloud Run, or App Engine, or Functions, Kubernetes Engine? There's lots of options, right? And they all serve different type of purposes for different reasons. 

So I thought it would be great to combine the learnings from different places. I actually referred to Brian Dorsey's 2019 talk from Next to come up with that. But yeah, if you're interested in notes, and sketchnoting, and a little bit of art, and like colors, you might want to check that out. And plus, I'm also working on some of the future ones. So it would be great to hear your take on what is it that you may be interested in seeing. 

And I am a great believer that visual learning is very powerful. And it actually makes an impression on our minds and retains information for longer. So I think I'm going to keep experimenting with some of these sketchnotes and see what the reception is like. So if you are interested in that, please do let us know what are some of the topics that you might want to see. 

With that, the second one, again, along the lines of visual learning and understanding type thing is comics. I don't know if we have talked about comics before on the show. I don't quite remember. But at this point, we have two episodes out, of the comics. And what we are doing there is explaining very simple cloud security concepts in the form of a comic. 

So we'll link those as well in the description. Do check them out, and let us know what you're thinking. Again, these are some of the very cool experiments on visual learning. I'm really interested in learning from you all. These are working. 

MARK: Yeah, I mean, we've seen a lot of positive response to the visualization, especially for complex subjects. And I remember there was Kubernetes one that was really, really popular, because it helped explain. And Kubernetes is complicated, right? As much as we like to talk about it, it can be very difficult to understand. And so having a visualization of it kind of helped break down those concepts. So that was super exciting. And of course, there's no shortage of complex cloud topics. So I'm sure we'll be seeing many, many more sketchnotes and many more comics in the future. 

PRIYANKA: Yeah, I'm super excited about that. 

MARK: Awesome. Well, for all of our listeners, make sure you check out one of the 17,000 links below to follow up on any of the things we've talked about today, which is quite a gamut. But of course, we do thank you so much for listening. We're super excited to see all next week. And we hope you stay safe out there. 

PRIYANKA: Thank you so much for listening, you all. 

[MUSIC PLAYING]