+++
audioDuration = "00:28:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.197.mp3"
audioSize = 40780851
categories = ["Qubit", "Data Science", "Machine Learning", "Statistics"]
date = "2019-10-02"
description = "Our guests Matthew Tamsett and Ravi Upreti join Gabi Ferrara and Aja Hammerly to talk about data science and their project, Qubit."
draft = false
episodeNumber = 197
hosts = ["Gabi Ferrara", "Aja Hammerly"]
title = "Qubit with Matthew Tamsett and Ravi Upreti"
image="/post/episode-197-qubit-with-matthew-tamsett-and-ravi-upreti/images/hero/hero-EP-197.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dceqbe/episode_197_qubit_with_matthew_tamsett_and_ravi/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Our guests Matthew Tamsett and Ravi Upreti join [Gabi Ferrara](https://twitter.com/gabidavila) and [Aja Hammerly](https://twitter.com/the_thagomizer) to talk about data science and their project, Qubit. Qubit helps web companies by measuring different user experiences, analyzing that information, and using it to improve the website. They also use the collected data along with ML to predict things, such as which products users will prefer, in order to provide a customized website experience. 

Matthew talks a little about his time at CERN and his transition from working in academia to industry. It's actually fairly common for physicists to branch out into data science and high performance computing, Matthew explains. Later, Ravi and Matthew talk GCP shop with us, explaining how they moved Qubit to GCP and why. Using PubSub, BigQuery, and BigQuery ML, they can provide their customers with real-time solutions, which allows for more reactive personalization. Data can be analyzed and updates can be created and pushed much faster with GCP. Autoscaling and cloud management services provided by GCP have given the data scientists at Qubit back their sleep!

<!--more-->

##### Matthew Tamsett

Matthew was trained in experimental particle physics at Royal Holloway University of London, and did his Ph.D. on the use of leptonic triggers for the detection of super symmetric signals at the ATLAS detector at CERN. Following this, he completed three post doctoral positions at CERN and on the neutrino experiment NOvA at Louisiana Tech University, Brookhaven National Laboratory, New York, and the University of Sussex UK, culminating in a EU Marie Curie fellowship. During this time, Matt co-authored many papers including playing a minor part in the discovery of the Higgs Boson. Since leaving academia in 2016, he's worked at Qubit as a data scientist and later as lead data scientist where he lead a team working to improve the online shopping experience via the use of personalization, statistics and predictive modeling.

##### Ravi Upreti

[Ravi](https://twitter.com/raviupreti85) has been working with Qubit for almost 4 years now and leads the platform engineering team there. He learned distributed computing, parallel algorithms and extreme computing at Edinburgh University. His four year stint at Ocado helped developed a strong domain knowledge for e-commerce, along with deep technical knowledge. Now it has all come together, as he gets to apply all these learnings to Qubit, at scale.

##### Cool things of the week

* A developer goes to a DevOps conference [blog](https://www.darkcoding.net/software/a-developer-goes-to-a-devops-conference/)
* Cloud Build brings advanced CI/CD capabilities to GitHub [blog](https://cloud.google.com/blog/products/devops-sre/cloud-build-brings-advanced-cicd-capabilities-to-github)
* Cloud Build called out in Forrester Wave [twitter](https://twitter.com/googlecloud/status/1175079173901209600)
* 6 strategies for scaling your serverless applications [blog](https://cloud.google.com/blog/products/serverless/6-strategies-for-scaling-your-serverless-applications)

##### Interview

* Qubit [site](https://www.qubit.com)
* Qubit Blog [blog](https://blog.qubit.com)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* BigQuery [site](https://cloud.google.com/bigquery/)
* BigQuery ML [site](https://cloud.google.com/bigquery-ml/docs/)
* Cloud Datastore [site](https://cloud.google.com/datastore/)
* Cloud Memorystore [site](https://cloud.google.com/memorystore/)
* Cloud Bigtable [site](https://cloud.google.com/bigtable/)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Cloud AutoML [site](https://cloud.google.com/automl/)
* Goodbye Hadoop. Building a streaming data processing pipeline on Google Cloud [blog](https://cloud.google.com/blog/products/data-analytics/goodbye-hadoop-building-a-streaming-data-processing-pipeline-on-google-cloud)

##### Question of the week

[How do you deploy a Windows container on GKE?](https://cloud.google.com/blog/products/containers-kubernetes/how-to-deploy-a-windows-container-on-google-kubernetes-engine)

##### Where can you find us next?

Gabi will be at the [Google Cloud Summit in Sao Paulo, Brazil](https://translate.google.com/translate?sl=pt&tl=en&u=https%3A%2F%2Finthecloud.withgoogle.com%2Fsummit-sp-19%2Fhome.html).

Aja will be at [Cloud Next London](https://cloud.withgoogle.com/next/uk).

##### Sound Effect Attribution

* "Small Group Laugh 6" by Tim.Kahn of [Freesound.org](https://freesound.org)

{{< transcript "[ELECTRONIC MUSIC PLAYING] GABI: Hi, and welcome to episode number 197 of the weekly Google Cloud podcast. I am Gabi, and I'm here with my colleague, Aja Hammerly. Hi, Aja." >}} 

AJA: Hey, Gabi. 

GABI: Today we talk with Matthew Tamsett and Ravi Upreti from Qubit about AI recommendations. And later, we have a question of the week about Windows containers. 

AJA: But first, it's time for cool thing of the week. I've got one, Gabi. And we'll put a link in the show notes, but there's a blog post entitled "A Developer Goes to a DevOps Conference," and it does one of the most accurate and concise descriptions of what DevOps actually is and describes DevOps culture for those who haven't been involved in the community. And I really recommend you give it a read. It's a really short read, maybe 1, 2, 3 minutes at most. 

GABI: We also have another blog post, but this one is on the Google Cloud blog post. It's how Cloud Build is bringing advance continuous integration, continuous deployment, for GitHub. Basically, every time you can trigger a deployment, every time you have a [? PR ?] [? merged, ?] deployment, or integration. 

AJA: Speaking of Cloud Build, the other thing I wanted to point out as my cool thing of the week was that Cloud Build was called off by Forrester as a best in class CI/CD solution. We'll put a link to the Google Cloud blog post about that, but I wanted to say that Cloud Build's really cool, and it's great to see the community finally recognizing that. 

GABI: That's so deserved. And then we have six strategies for scaling your serverless applications. So basically, talks about six ways that you can-- scaling capabilities of your serverless by using different [? maximum ?] [? of ?] instances using Redis and other tips that you can read on the blog post. So go there and check it out. So it's a quick read. 

And now, let's go on to our interview with the folks on Qubit. 

[INAUDIBLE] 

[ELECTRONIC MUSIC PLAYING] 

AJA: So our guests today are from Qubit. How about y'all introduce yourselves? 

RAVI: All right. I'm Ravi. I work as lead platform engineer with Qubit, which means I wear different hats, being an individual contributor to actually making sure the platform engineers are happy and engaged. Responsibility would be to make sure our core data pipeline is running fine, we are not lagging behind, we are real time, and making sure all the systems are up and running. 

MATTHEW: Hey, I'm Matthew. I'm the lead data scientist here at Qubit. I've been here for about three years. Before that, I was an experimental particle physicist, and I worked at CERN. And since leaving academia, I've been working Qubit, first of all, here as a data scientist and more recently as a lead, which means I lead a small team, about three data scientists, who use statistics, machine learning, and tools like this to try and create a better online experience for our customers' customers. 

AJA: Awesome. 

GABI: So you said, Matt, that you were a physicist? 

MATTHEW: Mm-hmm. 

GABI: And now you work with data science. How it was to work as a physicist turning into data scientist now? 

MATTHEW: It's really surprisingly common. So when I first graduated after finishing my PhD, there was this strange uncertainty that opened up in front of me in front of lots of my colleagues, where we didn't really know what to do. You know, you could carry on in physics, or you could get another job. But no one was really clear what that meant. 

But over the next four years, I started to hear this term data science coming up more and more. At first, I didn't really know what it meant. And then after investigating it a bit more, we-- me and my colleagues realized that there was this whole world out there emerging to do with the proliferation of data and high performance computing and things like this that meant there was a whole new area where we could apply very similar skills to those we'd used in our academic lives, but in industry. 

So at first, the whole idea of leaving academia was a bit scary. So I think when I learned more about it, I started to realize actually it was quite similar to everyday life in academia. You still had the same sort of problems where you had huge data sets and you had-- you know, it wasn't really clear what the noisy signals in them meant. And there was now this place where I could work and apply those same skills, but in industry. 

GABI: So what does Qubit does with the data science and-- as a company? 

MATTHEW: We do a lot of things. I think you could say is we split what we're doing into a few different realms. The first one is just simply measurement. So Qubit's history is rooted in a A/B testing, where you had multiple variants of a single website, and what you wanted to know is which one of those works best to my user base at large, or maybe four individual groups of users within that? 

And measuring the difference between those two things is not necessarily an easy problem. The reason it's not necessarily easy is because you don't really care about things like click through rates or conversion rates. You really only care about things like revenue and loyalty and things like this. And these can be quite complicated noisy distributions. So one of the things my team does is work on modeling these revenue distributions and looking for small differences that you can measure by changing the website in various ways. 

On top of that, we also try and predict things about users. So Qubit has access to what we collect, a vast store of behavioral information to do with how individual visitors interact with the website. And one great thing you can do with that is use an individual's historic data to change the online experience to personalize it. So we'd say, so, you know, if you like a lot of hats, then we want to show you the most relevant hats. 

ML and data sciences gives you a way of doing that not only in a rearwards looking way, but also in a more forward-looking, predictive way. So my team spends a reasonable amount of time building models to try and predict interesting facets of these users that we can then use to personalize the experience, whether this is from recommendation models, which products we think you're going to engage with, whether you're going to churn, what your next spend will be, things like that. 

Then in addition, we used to do a lot of work around dividing our customers' customers, again, up into sets or clusters of people that behave in similar ways, partially to allow our clients to understand who is interacting with their website and why, but also so that we can build these more specific models off of them that take into account many of the different facets of the users. 

GABI: I know your product works, because I'm a customer for one of your customers. [CHUCKLES] 

MATTHEW: Oh, yeah? 

GABI: Like, I do receive recommendations all the time, and I ended up buying everything. 

MATTHEW: [CHUCKLES] 

GABI: What it makes-- between giving this value to your customers, do you think the impact is also bigger-- I mean, on revenue, of course, but there is this merchant that-- because I bought a baby bag, they think I have a baby now, and they keep sending me baby stuff. 

MATTHEW: [CHUCKLES] 

GABI: So what I want to say to them like, I don't have a baby. 

[BABY CRYING] 

MATTHEW: Yeah. 

GABI: So do you think it aggregates how people shop? 

MATTHEW: I think at its most basic level, it does. So the simplest recommendation algorithms you can come up with just use facets of the population at whole to try and work out what you're going to do next. So in that case, the most common action is people who've bought baby bags is to buy other baby-related things. I think the challenge is taking that global view and making it more nuanced to you as a consumer, either by building algorithms that are clever enough to realize that, OK, we've shown you these baby outfits five or six times and you're not engaging with them. Maybe we should show you something different. Or by maybe giving you a greater aspect of influence over that. So if you could just tell the algorithm you aren't interested in that, that would probably be the quickest, simplest way for it to be able to learn that. 

So yeah, no, it's incredibly challenging to try and use this to give each individual the best experience when individuals vary so much. I think one of the big challenges here is that we're dealing with people. And people are all different and complicated. And even compared to, again, in my previous life as a physicist, the underlying systems were complicated, but there were only finitely complicated, whereas a person can have so many different variations, and can act in different ways day-to-day. So trying to come up with things that use the limited amount of data that you have cleverly but can also account for this really high amount of individual variation is a huge challenge. 

AJA: So this is super cool. I'm super into personalization-based stuff. I spent a lot of my early career working on products with personalization built in, but I'm actually super curious about how y'all are using GCP? Because we have you on the podcast, because you're customers. So what does your stack look like? How did you make decisions? When tools work really well for these giant, data science problems? 

RAVI: You know, as Matt mentioned before, we collect vast behavioral data. So in order to do that, how we use GCP is basically we have a gateway where all these events come through the Qubit platform. And we use, actually, quite a bit of GCPs from Pub/Sub which would be responsible for acting these buffers between different data flows. And data flows are these logics which-- for example, business logics like validations or enriching things, to actually making sure that we let our data enter into BigQuery, that we use as our data warehouse. 

On top of that, yeah, of course, once we have the data in BigQuery, then we let other systems, for example Matt's machine learning systems to actually use that and create something, smarter intelligence things, on top of that. 

Also what we do with these GCP pipelines are it enables us to be real time, so we can have real time solutions as well. For example, as a client or as a user is browsing this site, they might be changing from a segment to a segment. All of a sudden, a first time customer becomes a first time buyer, and things like that. So we can have these real time solutions working as well, and that helps us deliver better personalizations, more reactive or more real time personalizations. 

AJA: So what kinds of decisions did you have to make, and what did the process look like before you brought in GCP's tools like Pub/Sub? And I think you all are BigQuery users, too? 

RAVI: Yeah, yeah. 

AJA: And what does it look like now? Because the ability to do machine learning in real time is kind of awesome. 

RAVI: So yeah, I mean, for [? our ?] [? past, ?] it was quite different, actually. Before, we used to manage our infrastructure ourselves. [? We were ?] asking for bare metal machines from these providers to actually having our own Hadoop clusters over there. 

Something that flows through real time right now would before look like, OK, we see a behavioral information. We store it somewhere in a storage bucket. And then we'll have these massive batch jobs that probably run once a day in the evening when we have to manually, most likely, provisions, so that, oh, we have enough machines so that we can run these jobs on time, to actually an analyst waiting for the next day to see, OK, how was my day yesterday? How did our customers behave yesterday? They have to wait today. 

This, actually moving on to BigQuery, as an example, changed from, well, you could just query it faster. So before, when we had the Hadoop clusters, you could run these hive queries, which sometimes even used to take hours to do simple things like attribution or another [? analytical ?] queries, to actually now being able to do them sometimes in seconds, or you know, worse come worse, in minute, it was amazing. 

And, yeah. I mean, decision for us, so we already had the pattern, the pattern that works for us. And it was so easy for us to map these individual components into something that GCP provides. So for example, if we were using Kafka, we know, OK, we could just use Pub/Sub. If we had Apache Storm pipeline, we knew we could, OK, just change it very easily to Cloud Dataflow. And in terms of warehouse, yeah, we were using Redshift, and then we knew, OK, we can use BigQuery for that. 

We did try franken-cloud stuff where we had a few processing happening on GCP and trying to actually land data to Redshift, which we realized quite quickly was not working for us, because we were not really able to stream data that fast into Redshift as we were into BigQuery. And that was, again, a big win. 

AJA: So it sounds like you're using BigQuery, and it sounds like you're using BigQuery partly because of how fast it can ingest data. Are y'all using BigQuery ML at all? 

MATTHEW: Yeah, so we've been using BigQuery ML, I think, slightly over a year. I think we got involved in the alpha of it fairly early on. So some of our initial reactions were, oh, we know this is only logistic and linear regression, which were quite simple models. So at first we found a little bit easy to say, OK, that's not for us, because we were really interested in getting the absolute best performance from any individual model. 

But over time, I think we realized that the real power of that system wasn't in the fact that it would train the best model for every single scenario. It was that it would enable us to do it really, really fast. Qubit's infrastructure is based around streaming events from online touch points, like browsers, in real time, and ingesting this into to BigQuery. Now, because that's where all of our behavioral data ends up, we already have a lot of tools that make this actionable to you in your website. So by that, I mean you can query out what a user's done in the past and enable that to adapt their future website experience. 

Now, when BigQuery ML came along, that meant that we could do not only historic, backwards-looking queries. We could also train new models to predict forwards-looking things. And that was done in the system that was already commoditized within Qubit. So by that, I mean we already had all of the tooling and data engineering around it that meant the data scientist's job changed from writing a model in a notebook, building that into a Python module, deploying that somewhere, worrying about how it scales and how it's scheduled and the performance and the API, to writing one query. 

And the performance of that model, like I said before, is never going to be better than the custom, hand-built pipeline, but it meant that instead of taking weeks, maybe, to build out a new use case, you could do it in a day. So I think once we realized the speed with which that allowed us to innovate, it completely changed things. And we really decided to invest a lot of time into it. 

And one of the reasons I think that works well in Qubit is because we have this, like, there's so many things you can do with a user behavioral data, and to explore all of them in minute detail would take many lifetimes. So instead, what we want to do is explore a lot of them fairly rapidly and work out which ones give us the biggest bang for our buck. It's very easy to judge the quality of your models by an offline performance metric, how well it does in your test set. But really, for us, what you care about is, does that change a user's end experience? Does this make a shop, an online shop, more compelling, and give them something that makes them want to come back again and again? 

So for us, the proof of the pudding is not whether this thing gets a really good ROC AUC score or whatever, or some other offline metric. It's about whether it, when deployed online, drives a meaningful change to revenue or loyalty or some other measure of engagement. 

So what we want to do there is to explore with this rapidly, get it in front of users, and be able to learn from that. And with this system we already had, and the fact that BigQuery ML is essentially just BigQuery, yeah, we really dove into it head-first. We've churned out more models, I think, in the past three months using this than we did in the previous couple of years. And it's really interesting to see. And then, like I said, again, these things end up in the hands of the customers' customers very quickly. 

GABI: I have a question. So do you think that the ability of using BigQuery ML-- because in the end, it's basically SQL that you're writing on, BigQuery ML. Do you think that's a lower barrier for-- like, let's say you have new data scientists. They may be able to predict models in a bit more of cost benefit way, as you said before, because the models now, it doesn't take that long to be refined. Do you think that helps anyhow? 

MATTHEW: I'd say yes and no. So most data scientists, when they come in, are very fluent in Python or R or something like that. So they tend to be very good at doing their own feature transformations and training their own model. SQL is almost like a second language to a lot of people, certainly that we have here. And though they're good at it, it doesn't necessarily give them all the tools they'd be used to in their everyday life. So in some ways, it's not as fast. 

However, the breadth of the people within the company you have access to SQL skills is-- it's much larger than those who have Python skills. So what it does do is enable people in other departments to get involved a lot more easily. So product managers or product specialists or analysts or client engineers, all of these people suddenly can join in, as well. I also think with SQL there's a pretty steep learning curve, but once you're over the hill, then it does become quite quick to iterate. 

So I'd say that's a bit mixed in some ways. I think you've got a much wider pool of talent you can draw on, but sometimes it's not the power tools that data scientists would be used to. 

GABI: Like, it's good to do one thing, like [? I ?] [? was saying, ?] like take this out of the way and do a quick thing. Instead of having to create a notebook work all over, did you know, or do you use, somehow, other data sources, other GCP products, other databases, anything like that? 

MATTHEW: [INAUDIBLE], but Ravi could also have a view on this, but we use them for different purposes. So almost all of our behavioral data ends up in BigQuery, but we'll use different databases for other things. So for instance I-- my team uses Cloud Data Store configurations and model summaries and things like this. And I'm not entirely clear on the reasons for that. Ravi can say more. But it enables us to have our Qubit [? native ?] deployments dependent upon them so that if I just have a model that I train in batch, I can update the [? params ?] in Cloud Data Store and it'll restart that. 

Yeah, I guess it's horses for courses. Perhaps you should talk about this a bit more, Ravi. 

RAVI: Yeah, I mean, apart from BigQuery, yes, we use Bigtable a lot. We use Memorystore, Redis, as well, a lot. And this is something we are experimenting with more right now. We have recommendations right now that uses that [INAUDIBLE] Redis and some other cloud. And we want to actually try it out here. 

I think as Matt said before, we usually use to get access to these things as they are introduced, like in maybe alpha version. So we were first-- one of the first customers to actually try Cloud Bigtable, where we build our solutions stash, which is where you can keep certain user attributes temporarily and then access them online and add a bit of personalization to certain experiences. And we use Cloud SQL as well. 

Yeah, so these are the databases that we use. 

GABI: Just a follow up, you mentioned Cloud SQL. And do you use the new feature for federated queries inside BigQuery to Cloud SQL? It's a beta feature. 

RAVI: No, we don't use that, but that is something, yeah, we would love to try, actually, because right now, we have a process where we have certain information, meta information, let's say, around segments or experiences, that we could keep in my SQL boxes, which we would like to be used in our [INAUDIBLE] queries as well. Right now, what we do is we try to sync it to BigQuery. We do a bit of transformation and sync it there. So using the federated one would be a good thing for us to experiment, actually. 

What we have used before is having a bit of external tables. So for example, if the data is stored on GCS, we have those external tables and try to use it in our different queries. 

GABI: Tell me-- you mentioned Python and R. What else [INAUDIBLE] on your stack, language-wise? 

MATTHEW: And so for my team's point of view, we have a bit of history. It's all reflective of the skills of people who joined the company over the years. So we have things in R, in the middle of R Stats Engine, which is the tool that we use for measuring these differences between A/B tests. There's a bit of Stan in there. And then layered on top of that, we have C++ and Python. 

And then from the data science point of view, that's pretty much where it ends, and we're in the process of unifying that as we go along. I think part of the problem that we had is that people come in with different skill sets. They're not software engineers by training, so they want to use the tools that they've got close at hand to solve problems. But that can lead to a proliferation of languages over time. So we're trying to unify under one umbrella in my team, and that's Python. All over the place we used loads more, so Ravi can talk about. 

RAVI: Yeah, I mean, for us, we use Apache Beam SDK for the data flows, which is the Java one that we use. We have lots of web services that are built with a mix of being in [? Go ?] [? Line ?] or in Java. And then we do use Python as well, which is mostly for our recommendations ecosystem. The services that we have there, we use Python, mostly because we wanted data scientists, as well, to get involved there. 

Rarely, but we have a few systems which use Scala as well. And yeah, we use Apache Spark. And we use-- actually, we use Dataproc from GCP as well, where we spin up these thousands of clusters, where we run [INAUDIBLE] recommendation jobs. And actually, we use quite a lot here, spanning all these different services. 

AJA: I know you all are doing a lot of events. I got the little blurb on your company, and you're doing tons and tons and tons of events, leading to tons and tons and tons of data. Do you have any particular stories, [? war ?] stories or particularly interesting anecdotes you can share with us? You know, days that have been particularly good or particularly bad? I know that lots and lots of times we get a bunch of nerdy folks together, they like to tell about those days where everything went wrong or everything went great. 

RAVI: We used to have such days. So for example, things like Black Fridays, where everybody, all of a sudden, is looking for deals and the traffic spikes are going up. And the days when we were managing our own infrastructures, those were the days when it reminds you of these movies where you are putting out a fire. So every day, it would be like, OK, people entering office at 11:00 AM or 12:00, and you're standing there clapping for them, because you know they were up all late actually managing these things. 

So it used to be that bad. But moving to GCP, we actually-- you know, Black Fridays have became a bit more manageable for us. We could auto scale very easily. We could provision systems whenever we wanted to do, rather than actually putting a request in a month back or weeks back. So those are the days where I joined Qubit. I remember, like, yeah, everyday, oh, this is dumb. 

And you know, being new, OK, we didn't get to get involved too much there, but I knew other people actually really, really being involved there. So those were the tricky days. Christmas could get tricky as well. 

GABI: So GCP gave you back your sleep? 

RAVI: Yeah, it did. 

AJA: I can't think of a more resounding endorsement than that. 

[CHUCKLING] 

No, I totally get that. 

[CHUCKLING] 

Is there anything else that y'all have experienced from moving to the cloud versus being on your own hardware? Is there stuff that it makes easier? Stuff that it makes harder? 

RAVI: I think easier, even the journey, you know, the beginning of the journey to actually moving to cloud or to GCP was how easy, sometimes, it can be to prototype stuff. So for example, I remember when we had to move over one of these pipelines into GCP. Like, OK, we have data flow. There's the framework. Let's see how quickly we can improve that this will work. 

And sometimes it used to be a day or two and we'll be done with a proof of concept that this is going to work for us. And in a month or two, we would have something which is ready for production. Having this ability to actually prototype things very fast, experiment a lot, and see what really works for us. 

And yeah, I mean, having this serverless nature where all the engineers and the infrastructure can focus on solving the problems that matter rather than these problems that everybody's solving everywhere, we could just focus on the problems that matter to us. 

Yeah, and the speed of new features coming in also helps a lot, right? Like, every now and then you'll have some new feature in one of these products, and you can quickly try it out and yeah, that works for you. And auto scaling. Always the-- I keep on saying auto scaling is pretty big for most of the products. 

AJA: Yeah, auto scaling's great, though, because that means you're not paying for stuff you're not using. How about on the data science side? Is there anything that is easier once you're in the cloud in the data science realm? 

MATTHEW: So I think for me, it's all about reducing the amount of data engineering my team has to do. So we're not data engineers. We're not software engineers by training. We can do these things, but we're not really the right people to be doing them in terms of speed and impact and things like that. So the thing I get most excited about Cloud Services are tools that can remove part of that pain, whether that's through enabling me to easily train and host my models in the cloud, or if it's something as complete as an AutoML solution, where if I-- you know, I've got a data set and I want to have a first pass of the model, I can just click a button, pay as much as I want, and get a state of the art model out at the end. 

So for me, it's all about reducing the reliance on other teams and enabling us to quickly come up with and test ideas and build prototype models and scale and experiment. So for instance, we had a period of time every Christmas, I think, last year, when we were trying to build out some TensorFlow-based recommendations models. And we found we needed 40 machines with GPUs, and we just have those, and it's great. 

And that was something that was true in my previous job, to some extent, in physics, to some extent. However, you'd be in a queue. So the difference there was that you had these distributed computing centers at universities around the world, but there was only so many of them. And so you potentially have access to huge resources, but you had to wait for everybody else to be done with them, whereas with the cloud computing, there is a limit to the scale, but practically, we don't see it. So if we need 100 machines at 10 minutes notice, it really makes better use of our time or frees us up, to some extent, because you're not sitting around worrying about the hardware. You're not worrying about debugging these distributed systems that we don't really understand. It enables you to focus the time on the statistics and the machine learning that we're here to do. 

AJA: That totally makes sense, and it sounds like for both of you, the advantages of the cloud are getting to focus on the parts that are unique to your business and/or you find interesting and not having to focus on the other bits. That's why I like it, too. 

[CHUCKLING] 

Cool. Folks are interested in y'all's product, where can they learn more about Qubit? 

MATTHEW: Qubit.com, I think, is probably the right place to go. 

RAVI: We also have certain blogs, as well. You could try looking at the blogs. Yeah, we usually are quite active at Google Cloud Next and things like that, so you'll definitely find YouTube videos for that, too. 

AJA: Awesome. Well, we'll make sure that there's a link in the show notes so that folks don't have to type. [INAUDIBLE] click on the link. Well, thank you for being on the podcast with us today. It was very educational, and I love hearing stories about people's cloud migrations. 

GABI: And I love databases, so it's really nice to see people-- [LAUGHS] 

AJA: Yeah. 

GABI: --talking [? data ?] [? with me. ?] 

MATTHEW: OK, great. Thanks a lot. 

RAVI: All right, cool. Thank you. 

AJA: So that was a great conversation we had with the folks from Qubit. Now, time for a question of the week. 

[ELECTRONIC MUSIC PLAYING] 

This week's question is, how do you deploy Windows container on GKE? Gabi, do you know? 

GABI: I possibly don't, but I read it on the blog post, and I think I can do it. 

[LAUGHTER] 

Basically, you need to have your container image or container registry, and then also you have that, there is a caveat. You still have to have a Linux pool with one node, at least, but then you create a Windows node pool, and you can have your containers deployed there. That's the only thing that I saw that was different. And you need GKE 114 to be running that. 

So that's how you do it. It's on the blog post. It's basically the same YMAL files that you create for Linux deployments. Go there. Check it out there, so you can see how to do it from Windows. 

AJA: That's awesome. So where are you going to be at, Gabi? 

GABI: I'll be at Google Cloud's Summit in Sao Paolo. It's on the second week of October. And Aja, where are you going to be going? 

AJA: I'm going to be-- it's a long way out, but I'm going to be at Cloud Next London in the end of November. So if folks want to come hang out at the DevZone and say hi to me there, I look forward to seeing them. 

GABI: Cool. Thank you all for listening, and we'll see you all next week. 

[ELECTRONIC MUSIC PLAYING]