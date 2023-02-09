+++
audioDuration = "00:32:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.327.mp3"
audioSize = 46387365
categories = ["Dataiku", "Data", "Analytics"]
date = "2022-11-09"
description = "On the show this week, Carter Morgan and Anu Srivastava talk about Ai and ML data analytics with Dataiku VP of Platform Strategy Jed Dougherty and Google's Dan Darnell."
draft = false
episodeNumber = 327
hosts = ["Carter Morgan", "Anu Srivastava"]
title = "ML/AI Data Science for Data Analytics with Jed Dougherty and Dan Darnell"
image="/post/episode-327-ml-ai-data-science-for-data-analytics-with-jed-dougherty-and-dan-darnell/images/hero/hero-EP-327.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/yqslm9/episode_327_mlai_data_science_for_data_analytics/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show this week, [Carter Morgan](https://twitter.com/carterthecomic) and [Anu Srivastava](https://twitter.com/asrivas_dev) talk about AI and ML data analytics with Dataiku VP of Platform Strategy, Jed Dougherty, and Head of Product Marketing, Dan Darnell. Dataiku is an AI platform targeted for business team collaboration. The low and no code environments make it easy for developers and not so tech savvy employees to work together on analytics projects. It strives for everyday AI, making these normally highly technical data processes more accessible. 

Our guests detail the tools Dataiku provides customers, including ML Ops features for efficient models. Dataiku's managed offering allows businesses to concentrate on the model while Dataiku takes care of things like the deployment processes behind the scenes. We hear about the partnership between Dataiku and Google Cloud and Dataiku's integration with AlloyDB. Through a real example, our guests run us through the use of these two tools together. Jed talks about why Google Cloud works so well with Dataiku, especially for businesses looking for cutting edge technology. 
 
##### Jed Dougherty

Jed is the VP of Platform Strategy at Dataiku. In this role he acts as a strategic technical advisor to Dataiku customers and prospects. He also works tightly with Engineering and Product stakeholders in order to ensure that all technical platform requests are properly followed, scoped and implemented.

##### Dan Darnell

Dan has over 20 years of experience in the analytics industry at established software companies, hyper-growth technology companies, and small technology start-ups. As the Head of Product Marketing at Dataiku, he owns positioning, evangelism, and content creation for product offerings and education on products for customers and partners.

##### Cool things of the week

* Google Cloud supercharges NLP with large language models [blog](https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-supercharges-nlp-with-large-language-models)
* Practicing the principle of least privilege with Cloud Build and Artifact Registry [blog](https://cloud.google.com/blog/topics/developers-practitioners/practicing-principle-least-privilege-cloud-build-and-artifact-registry)
 
##### Interview

* Dataiku [site](https://www.dataiku.com)
* Dataiku YouTube [videos](https://www.youtube.com/c/Dataiku)
* BigQuery [site](https://cloud.google.com/bigquery)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* AlloyDB for PostgreSQL [site](https://cloud.google.com/alloydb)
* Accelerate AI Adoption: 3 Steps to Deploy Dataiku for Google Cloud Platform [blog](https://blog.dataiku.com/deploy-dataiku-for-google-cloud-platform)
* Implementing Dataiku with BigQuery [docs](https://doc.dataiku.com/dss/latest/connecting/sql/bigquery.html)
* GCP Podcast Episode 238: ASML with Arnaud Hubaux [podcast](https://www.gcppodcast.com/post/episode-238-asml-with-arnaud-hubaux/)
* GCP Podcast Episode 229: Lucidworks with Radu Miclaus [podcast](https://www.gcppodcast.com/post/episode-229-lucidworks-with-radu-miclaus/)

##### What's something cool you're working on?

Anu is working on interesting speech use cases and Google's Speech to Text. Join in with this [tutorial](https://cloud-dot-devsite-v2-prod.appspot.com/walkthroughs/speech-to-text/speech-to-text-java)!

Carter is working on getting organized and working on something super cool! 

{{< transcript "[MUSIC PLAYING] CARTER: Hi, and welcome to episode number 327 of the weekly Google Cloud Platform Podcast. I'm Carter Morgan, and I'm beyond excited to have the brilliant Anu Srivastava here with us today. Hello, Anu." >}}

ANU: Hey, Carter. It's great to be doing this podcast together. It's great to see you. 

CARTER: Yeah, it's been a minute. 

ANU: And hear you. 

CARTER: And hear me. Yes. Anu, you're a senior VP here at Google. And one of the things you focus on is bringing ML to app developers. So I feel like this episode's got to be especially exciting for you. 

ANU: Yeah. I am super excited to be interviewing Dataiku. I think their product is really neat, really helps people get off the ground quicker with machine learning and data science. And their whole goal is to solve real problems. So we'll get into that later. 

CARTER: MK, MK, I'm excited. You're excited. You know what else I'm excited about, though? 

ANU: What? 

CARTER: Cool things of the week. 

[MUSIC PLAYING] 

Do you have anything that you want to share or talk about that's going around the Google Cloud metaverse? 

ANU: [CHUCKLES] Well, you know, I'm all things AI now. So I have actually been learning about large language models. So this has been a new term that's been around in this area. It's the next generation of how we use this technology to turbocharge understanding data and getting insights from unstructured text or even just me and you talking. 

How could we quantify that? How do we use it? So that's what I'm learning about this week. 

CARTER: I love that. If you could take words that I say and somehow make an AI summary so they go, wow, that Carter Morgan guy is really insightful. 

ANU: Let's do it. 

CARTER: In my world, I'm really excited. There's a blog post that came out from one of my teammates, actually. It just came out the day we're recording this. So it's by Anthony Bushong, who's a developer relations engineer. 

And the article's called, "Practicing the Principle of Least Privilege with Cloud Build and Artifact Registry." And what's interesting about this is a lot of times, when you're doing CICD, you'll push a change or you have these different builds going on. And sometimes the tooling that you're using doesn't have a granular enough permission scope. So basically, anybody can push anything anywhere. And that can be a problem. 

And so in this article, he details how to set up a per-trigger service account in Cloud Build and a per-repository permissions in Artifact Registry so that basically everything has the least amount of permissions it needs so that things that happen in Cloud Build can't break things in Artifact Registry and vice versa. So to learn more about that, you can go and check out the website, the Cloud blog, there's a link. It'll be in the description. And they also have some tutorials on Cloud Build and Artifact Registry. 

ANU: I mean, who hasn't been bitten by a permissions issue before? That sounds really interesting. Yeah, yeah. So kudos, Anthony Bushong and team. And I guess, I guess if you're ready, I'm ready to go to the main episode. 

ANU: Let's do it. 

[MUSIC PLAYING] 

OK, so let's get into it. Jed and Dan, thank you so much for taking some time to chat with us today. So let's get started. Why don't you tell us who you are, and what is Dataiku? 

JED: I'm Jed Dougherty. I'm the VP of platform strategy at Dataiku, which is a title we made up just for me. I've been at Dataiku for eight years now as a data scientist, as a field engineer, support engineer, sales engineer, all engineer types of things. And I'm currently working on further designing out the infrastructure and platform of our product for the future. 

DAN: Yeah, Dan Darnell. I run product marketing for Dataiku globally. And I've been in the AI space, AI application space, and AI platforms for over 10 years. My team helps with messaging, positioning, and marketing of the product itself. So we're a bit technical and a bit producty. And so I'm excited to be here. 

CARTER: I like that-- a bit technical, a bit producty. That's how I describe myself, so very cool. So can you tell us a little bit about Dataiku, like what is it? It's an AI platform. I know that much. But I know there's more. 

DAN: Sure. I'm happy to start that one. So Dataiku is an AI platform for business. So lots of people probably think of AI platforms, they think of expert data scientists or data science platforms. We definitely have expert data scientists in the system, but we're a platform for business teams to collaborate. 

About 80% of our users are using our no-code, low-code environment to create data pipelines, to build analytics projects and AI projects. 20% of the users are code first, so those experts and developers. And our platform gives them an environment to collaborate together on projects so they can all work together, bring their skills to the table. 

It gives experts the ability to have people help them with things, like data preparation maybe, to prepare data for their projects, to have the experts do that. It gives people like citizen data scientists access to expert help and guidance maybe for their projects so they can make sure they're doing the right things and have someone come in and check it over and review it and make sure their project's high quality. 

So lots of benefits to collaboration. And it's more than that. It's the IT people as well. It's the data engineers, the ML engineers, and the operations folks in IT can also collaborate with those teams in Dataiku. 

JED: So to follow up on what Dan was saying, Dataiku, and specifically our founder Florian Douetteau, believes strongly in this concept of everyday AI. What we mean by everyday AI is that what we think of now as maybe moonshot are challenging processes that are controlled by very small portion of the organization, very, very highly technical, are going to become democratized and are already in the process of becoming democratized across entire businesses. 

And Dataiku is a tool that helps with that democratization process. So we're really taking the AI processes and workflows, not out of the hands of the elite programmers, but spreading them so that far more people can be working with these processes because we believe they're, by definition, going to be forced to be across entire businesses in the near future. 

CARTER: I want to know a little bit more because that sounds so interesting, like this idea of everyday AI. What's, like, a quick example of a workflow we might see or an example of this everyday AI, where you're taking this AI model that maybe someone elite that went to a lot of school, is very deeply technical, would know how to program or code, and now everyone can use it? 

JED: We have a large manufacturer that we work with, and they have a relatively simple problem. They have a bunch of tool carts that sit out in their manufacturing plant. And these tool carts need to have a certain set of tools on them every day. When the guys walk in or the people building, the thing that they're manufacturing, when they walk in, they need to have these eight tools on each one of these hundreds and hundreds of carts. 

And when they leave every day, they need to make sure they didn't accidentally leave the tools in the big thing that they're building. So they need to put them back on the carts in the exact same place. 

A cart manager, so not a high falutin data scientist or anything like that, a manager of this shop floor recognized that if there was some way to easily take pictures of the carts at the beginning of the day and at the end of the day, and compare, and make sure that all the tools were back in the right place, then they would lose fewer tools. There would be less danger to the machines that were being manufactured. And generally, life would roll a lot smoother. 

So with the help of Dataiku and a bunch of fancy cameras, they were able to build a visual workflow that was able to identify every single day for every single cart that all the tools were back in place. And these ideas for this type of AI-- and again, it doesn't sound like crazy robots or anything like that. It seems like a pretty normal, sane thing to do. 

These ideas are coming from the people doing the work. And much of the implementation and the verification that these ideas are the work-- the machine learning is actually working are also being verified by the people doing the regular, day-to-day work. I think that's a really great example of this democratization and everyday-ification of AI. 

DAN: That example, we just talked about a computer vision, deep learning use case in a very straightforward way, right? We used cameras to make sure the tools are in the right place. It all sounds great and straightforward, but that's some pretty sophisticated stuff behind the scenes that didn't use to be accessible, broadly, for those kinds of use cases or without the help of an expert data scientist. 

JED: Or many expert data scientists. 

DAN: Or many, yeah. And the other advantages of a platform like Dataiku is projects like that can happen in days or weeks, right, because a lot of this stuff's already built in. We're giving access to the right frameworks, and stuff's pre-built in a lot of ways that make that project-- just streamline that project from experimentation all the way through to production. 

JED: Yeah. And the quality of the results can be verified by the people on the ground who are actually doing the job. I know I said that already, but I really think that's an important aspect of it. The see-throughness of the platform means somebody who is not technical can come in, understand at a high level what's been done, and verify results easily. 

DAN: Trust. That's about trust. 

JED: Yeah. 

DAN: That end user or that manager of the shop floor has to trust that the computer's giving good results because if they don't trust it, they're still going to be having to manually verify every cart. So then they just wasted time, right? For this to work, they have to trust that it works. 

CARTER: OK, wow. So now you have floor managers, people that work in the field that are able to say, here's the tools that we need, and then they're able to easily access technology that they probably couldn't have before to verify that what's happening on the floor is what they wanted. 

What does this mean, though, for the data experts before, the people that designed this model before? Are they unneeded? Are they unnecessary? Let's talk about that. 

DAN: I would say a lot of the expert data scientists out there are probably listening to this. They may feel some trepidation, but they shouldn't. There's way more work to do out there in the world for those experts than can be done. So their jobs are not going anywhere. 

There's lots of expert use cases that they're still needed. There's lots of unique, differentiated work. The really cool moonshot stuff we still need those experts for. So what's happening is, as we can bring more people into the system and they can work together, hopefully that's going to help our expert data scientists do more expert data science. 

That's one thing that's going to happen because there's a lot of mundane work that they have to do. There's a lot of mundane work that experts have to do to clean and prepare their data for a project, to deploy that project in production. Any expert out there who's on an expert team where they don't have a lot of support around them will tell you as soon as you start putting stuff in production, you become a production data scientist. 

You're just maintaining those projects in production. That's all you're spending time doing. So they should welcome the opportunity to one have some people on the front end to help them, maybe who have a better understanding of the data, who can help them clean and prepare the data for their projects. 

They also now have an opportunity to have somebody in production who can help test the project, get it ready for production, put it in production, and manage it so they don't have to do that work. All of that frees bandwidth from the experts to do more of what they love. But there's a cost to that. 

As this evolves, as their role in this environment evolves, they also are going to have to contribute back. So as we have many, many more people in the organization doing data science, who are the experts who know what are the right processes and guardrails? Who can look at a project and say, yeah, that's good, that meets the right qualifications, you did the right things? 

There are experts. So there's a bit of a contribution they're going to have to make as well. They can't just go back into a dark cave somewhere and do expert data science. They're going to have to come out of their shells a bit. 

They're going to have to participate a little bit. They're going to have to help provide some oversight on some of these other projects. They're going to have to be leaders in the organization around data science best practices. They may even contribute to these projects and say, hey, there's a custom-coded module here that only we can build. 

Well, with a platform like Dataiku, they can build that custom-coded module, contribute it to the larger project, and then someone else can take that, implement it, and run with it. So I think there's lots of work for the expert community still, even in this highly democratized and everyday AI world. 

ANU: Yeah. I love that you were alluding to MLOps and getting these models and AI things into production so people actually use it. I always like to say, what's the point in building a model if no one can actually use it? 

So increasing accuracy, actually solving your business needs, these are all really important. What are the different tools and ways that Dataiku can help this iterative process? 

DAN: MLOps is a huge focus for us. We've had great MLOps features since, I think, version 2, Jed. You were probably there for it. 

JED: Yeah, so one funny thing about that is, we've had to kind of let the industry catch up to us in that we had these great features, like, six years ago, deploying ML models as API services onto a highly available Kubernetes cluster. It wasn't Kubernetes back then, but on highly available nodes, et cetera. This concept of tracking different versions of models, feature stores. 

And we weren't calling it MLOps because nobody had said that word yet. And so now it's sort of funny to take these features that already existed in Dataiku and explain that, yes, indeed, these are MLOps features. 

DAN: It's true. MLOps is a new space. I joined after having worked at an MLOps pure play. So I kind of had that viewpoint of seeing the MLOps space pretty holistically. And as I joined Dataiku, I said, wow, we already have a lot of capabilities. 

And over the past few years that I've been here, we've continued to add more and more capabilities to help customers deploy their projects easily. As Jed mentioned, we have nodes where you can deploy a batch project to run, and you can schedule it. You can do all those things, make it easy to do that with no code. 

You can deploy to an API node and get a highly available API service that you can consume into an app. But on top of that, we provide the monitoring, the scheduling, all the things you need to make sure that project stays healthy and continues to provide good results to production because there's nothing that people hate worse than a project that gets up and running and then stops working properly. 

And one comment I'll make there is, to Jed's point, of the biggest things that can break down in a project is not the model. It's the data pipeline. If your underlying infrastructure and data pipelines don't also perform well, and you're not also monitoring those, you're actually probably more likely to have problems there than you are with your model degradation. So it's a very holistic process. You have to look at everything and monitor everything, from the quality of the data coming in, that it's what you expect, that your underlying infrastructure is fully available, and that your model is continuing to perform as you expected. 

JED: One thing I see a lot with the current MLOps conversation that's-- I'm not saying taking over the data science space, but definitely a huge thing that everybody is talking about right now is that the folks from the bottom up, the engineers are thinking of it from a tooling perspective. So when you ask, what does MLOps mean to you, it's whatever their tool stack is. So whatever repos they're checking things into, however they're doing their CI/CD pipeline, whatever that might be. That's really what they think about. 

And it's really the tooling around deployment of models, whereas if you ask an executive, what does MLOps mean to you, it means oversight, it means governance, it means ensuring that the models that are already deployed are still running because they're in production, and they need to be relied on. And there's a gap and a discrepancy between the bottom-up approach of, MLOps is the tools we choose, and then from top down, MLOps is the results we need. 

I think there's a lot of tension right now in a bunch of organizations around, OK, which one of these is it? Can the tools that the engineers have chosen to do this actually provide the results that the executives are expecting? Or have the engineers just overtooled themselves into a corner? Which I do think happens sometimes. So, interesting space right now. 

CARTER: So then how is Dataiku navigating that space? Because I heard you mentioned Kubernetes before. I heard you earlier, Dan, talking about pushing down, pushing down, pushing down. So it seems like this is a focus of yours, of navigating this tension between these two levels of MLOps and using ML. 

JED: Dataiku really tries to separate your business user from a lot of these decisions. We're pretty opinionated about good ways of doing it. We've built into our tool a lot of the MLOps capabilities that you would expect. And we do ask, for the trust of our users, that, hey, we're doing this right so you can concentrate on the modeling. And you can concentrate on ensuring that your data pipeline is up and running. 

You can let us worry about the actual CI/CD process and then the deployment process underneath the covers. Your average business analyst maybe has heard of Kubernetes, but definitely doesn't want to deal with it on a day-to-day basis, right? Even a lot of data scientists do not want to spend their time managing GKE clusters or load balancers in front of them and things like that, right? That's not the job they want. So the fact that Dataiku can perform those actions for them, let them focus on the things that they're trained to do, is very nice. That's our pitch. 

DAN: The push-down aspect of that is just that, yeah, we're built on a very kind of infrastructure and platform agnostic way to be able to push down workloads, whether those are data preparation, transformation workloads, or model training, model scoring. All those workloads get pushed down to an underlying system. 

And so we can take advantage of the massive scale of storage and compute that's now available on cloud platforms, like Google. So our customers really are able to consume the credits that they already have with their preferred cloud platform while working in a very visual and easy-to-use environment in Dataiku. 

JED: When I talk to end users like data scientists and data analysts, I talk about our great features. But when I talk to IT of large organizations, I talk about Dataiku as a control plane on top of their existing infrastructure. So we're a way to allow many, many, many more people in your organization to leverage the infrastructure that you've already invested in, whether it's Google, or Amazon, or Azure, or Snowflake, or Databricks, whatever that might be. 

ANU: So let's dive down a bit more into the partnership. Could you tell us more about what's on the roadmap, more about your Google Cloud partnership? 

DAN: Sure. Jed, do you want to talk about recent developments in our partnership? 

JED: Sure. So yesterday, we became the first Google partner to release a full integration for AlloyDB. 

ANU: Woo-hoo. 

JED: I believe I'm saying that right. So that literally came out 24 hours ago or so. I'm really excited about that. We already have deep integration with BigQuery and, obviously, with GKE, which I just mentioned, the Google Kubernetes offering. Dataiku also has what we call Cloud Stacks, meaning from inside of your Google Cloud platform, you can do a few clicks and have Dataiku deployed entirely inside your Google Cloud offering. So very smooth, very easy installation. 

Many of our very largest clients, our most technically advanced clients, are pure Google Cloud, which I actually find really interesting. A lot of mid-sized clients use AWS. A lot of very conservative clients use Azure because they've been Microsoft shops for 30 years or whatever. 

And a lot of our very, very biggest, most advanced folks who are taking the biggest chances, maybe trying to push the envelope the most, are on Google Cloud. It's interesting how easily they kind of break down into those chunks. 

CARTER: Jed, I know when we talked, there are some good reasons for that, right? I think performance-wise, they're getting some pretty strong performance out of the platform. 

JED: Yeah. I mean, when you think about it, you guys invent it, and then everybody else ends up using it a couple of years later. That's generally the case for a wide variety of tools that come out of Google. So I think without showing too much being on that platform means you're getting the cutting edge, especially with Kubernetes. 

Kubernetes will spin up on Google much, much faster. Just talking about spinning up extra nodes, putting pods into an existing node. Any of that Kubernetes work is fastest on Google. 

CARTER: So let's dig a little bit deeper into AlloyDB. I mean, this is a big deal, one of the first API partners to get certified. So what is the advantage to customers for using this? Why would they use it? Why does this matter? 

JED: AlloyDB is basically a Google-hosted Postgres grass optimized for high throughput queries and optimized for rapidly changing transactional tables. Why does it matter? It's a space that Google didn't have a clear product for in the past. 

It's very different from BigQuery, which is kind of the other top of mind, analytical SQL database that people think of when they think of Google. BigQuery is built for huge queries, big queries, on top of slowly changing data, whereas AlloyDB is built for very rapidly changing data. So both have a place inside of a customer's organization, which is why both have a place with Dataiku. 

ANU: Great. Yeah. So it's been really interesting seeing the launch of AlloyDB over the last two months. What use cases really make sense for this setup? 

JED: So we have a large consumer packaged goods company that we're working with right now on a pretty interesting use case that we're going to recommend AlloyDB before. In fact, we've already recommended it. This use case is basically, anytime somebody purchases a, we'll call it a T-shirt on their online store, they need to decide, in real time, whether or not this T-shirt is going to be shipped from a warehouse or from some store in the area of the person who ordered it. 

So there's advantages to shipping from a store. If a store has too much inventory, then this can lower the inventory-- basically, the goal of every CPG company is to have exactly zero inventory, just as the new inventory comes in. The shirts left on the store have to go to consignment or whatever. 

So here they need to make a decision, should I ship from a store, or should I ship from a warehouse? And the ML part that comes in is they are also trying to predict whether there's going to be a burst of sales at a store that may appear right now to have a surplus inventory of this item. 

So a lot of operations have to happen very fast. We need to get inventory, real-time inventory information from a wide variety of stores. We need to get inventory information from the warehouse. We need to do a quick ML model to predict whether these stores are going to be selling out of their inventory. And then we need to decide which of these is the best option to ship the shirt. 

So for this, fast transactional requests, AlloyDB is perfect for. All of these tables are changing super, super fast because literally anytime anybody buys a shirt anywhere, these tables need to be updated. And so this is a great option for that. 

ANU: Yeah. It sounds like these are more traditional traffic patterns you'd see with app development, like no one's using BigQuery as the storage for their Android app or iPhone app, things that you need to do on the fly for individual transactions versus if you try to do this with BigQuery, you'd really lock that database up quickly. So it's interesting to see these worlds blend-- analytics, app dev, to actually solve these business problems. 

JED: Yeah, absolutely. 

CARTER: This has been a very interesting conversation just because seeing the power of things like Everyday AI and this idea of people that are on the work floor that are dealing with these problems can now use these toolings to make their workflow easier and faster. And now experts are freed up to work on more interesting technical problems. 

That makes me wonder where you see this going in the future, or where people can go and learn more about it. Like if someone was like, oh, I want to go and learn more about Dataiku right now, where could they go? 

DAN: Well, I have one recommendation. If you're interested in Dataiku, obviously you can go to our website. But you can start a free online trial in a few minutes. If you really want to get hands on and if you want more, you can download the free version. You can integrate that with components with Google if you want. 

Try that out. There's lots that you can do if you want to get hands on. And we have tons of great resources on our website as well as on YouTube. You can watch lots of great videos, lots of great demos of the product, if I don't say so myself. Lots of great demos you can watch that we've created, so-- Jed, what do you think? 

JED: Yeah, absolutely. With a free trial or your online version, you can connect to the database, as we just mentioned-- AlloyDB, BigQuery, et cetera. You can be leveraging your existing tools completely for free on Dataiku. Where else would I go to learn about data science in general? I mean, Google itself has a ton of great services. Google is a leader in the space, so keeping track of this podcast is probably a good idea. 

CARTER: Is there anything that you would just leave, any, like notes or tips or tricks for the audience that's listening? Because it seems like a paradigm shift in how people even think about ML and who it's accessible to. Any key takeaways for the audience before we go? 

DAN: Yeah, I think data science is evolving. It's evolving both for experts and for everyone else. And if you're in a subject matter expert role, or you're an engineer on the shop floor, or you're an actuary in insurance company, or any of these technical roles, or these people who have use cases that you're thinking about, it's possible for you to start to act on those and to build something. 

And for the experts, freedom is coming, right? The freedom to really hit those moonshot projects. And you shouldn't be worried at all about the future of what you're doing. You should be excited to have the freedom and the capability to really do some amazing work. 

JED: I'm going to be a little more pessimistic than Dan. This world is changing. The world of AI is changing, and the things we're applying it to are changing. And in some ways, it's changing to be more mundane and to be, dare I say it, a little more boring, which is good because boring also means predictable, and deployable, and trackable, and everything like that. 

But there's that famous thing a few years ago-- data scientist is the sexiest job in America or something like that. I guarantee you, in five years, data scientist will not be the sexiest job in America. It will be a-- it may not even have a title as that anymore because data science or AI, whatever you want to call it, is going to be so widespread across organizations that everybody is going to be doing this stuff. It's not going to be for the reserved few anymore. 

CARTER: Oh, wow. Ooh, ooh, that's somber. But I love it. Thank you, Dan. Thank you, Jed, so much. I learned a lot this conversation. It was a lot of fun. 

DAN: Thanks, Carter. Thanks, Anu. Appreciate you having us. 

CARTER: Bye, everyone. Bye. 

JED: Bye, Carter. Bye, Anu. Nice to meet you both. 

CARTER: OK. That's that episode. Anu, what'd you think? 

ANU: That was awesome, so let's actually just do the recap. So Dataiku is a no-code, data science and machine learning platform. Their goal is to not only bring but also manage and deploy AI solutions for everyone, whether you're doing inventory management and retail, or you're on the field, or you want to ensure compliance and safety is met in manufacturing. 

The goal isn't to replace the people who have been traditionally doing these roles. It's to empower them to do more and even more complex things that are pushing the boundaries of what we can do with data today. 

CARTER: So let's take you and me as an example here. You know AI and ML a lot better than I do. You could say, in this instance, you're an expert on this, and I'm not. So basically, if I was working on something, and before, if I wanted to use AI and ML, I'd have to go to and take up your precious time. And now they're using, like, Dataiku and some of the technology there so that you can share knowledge in a different way? 

ANU: Yeah, so we'd actually be able to empower you to build these solutions yourselves or take it to another level and do more complex things that maybe aren't as automatable today. But for the record, my door is always open. Our offices are diagonal from each other. 

CARTER: I'm going to come into the office just to hang out. You know what I think is cool about this is this is introducing new patterns. I used to be a C programmer and a C++ programmer and all that, and it was interesting going from C to C++ because there were patterns in C that just don't get talked about anymore because they were built into the language. 

So like, there used to be like-- I forget what it was called but like an object chaining method or like an object pointer reference table method. Basically, you would add pointers to a C object. And then in C++, just object-oriented programming was built in. 

That pattern didn't exist anymore. It was unnecessary. And I think we're seeing that with ML. In the future, things that used to be very difficult and things that people had to really work to learn, it's going to be almost commonplace so people can think at a higher level. I think that's really cool. 

ANU: That's a great metaphor. 

CARTER: Let's summarize that with AI. I'm ready. So we talked about this episode. It was amazing. I would regret if we left, and I didn't know what you were working on. What are you up to? 

ANU: Yeah, so this week, still in the AI world. I am actually deep diving into speech use cases. So we have a service that uses AI to give you high-accuracy speech transcription. And what I think is more interesting is like, how do we actually use this in our day-to-day lives, like tangibly? 

So one example is building apps to do media voice control. Can you use your phone as a remote control for your whole house? Another one is content captioning. And, you know, there's a lot of great use cases to make support more human. 

So that's what I'm doing. So I'm playing around with this API. And on the note of object-oriented programming languages, I have linked the Java tutorial for the speech-to-text API. 

CARTER: As a C++ guy, that hurts my soul. No. 

[CHUCKLING] 

No, that sounds so cool. And especially-- like, because the things that I generally work on and I'm focused on right now is like getting organized. And if I could write, like, a speech-to-text thing that would call another program to run functions or something that could help me organize things, I would pay millions of dollars for that, assuming I get a raise soon. 

[CHUCKLING] 

No, that's really cool. And I guess that segues into what I'm working on, which is-- because I can't talk about this super cool thing I'm working on just yet, but soon. But I can talk about, I'm really trying to get organized. I've been just overwhelmed lately and then just trying to use technology to help in that regard. It's a difficult journey. I don't know about you. Are you super organized? 

ANU: Oh, man-- well, I don't want to admit it, but I'm not. And I actually, I'm really focusing on getting organized this week too. The first thing I need to do is unpack. I just came back from an amazing wedding of my two really good friends, John Michael and Hannah. 

So shout out, shout out, DVC crew from Houston. I think together, me and you, Carter, we can figure out some technology to help us, help us stay on top of things. That's the future. 

CARTER: That's the future. Fingers crossed. And congrats to your friends, and thanks to everyone that listened at home. I hope you liked the episode and, you know, be sure to like and subscribe for more. 

[MUSIC PLAYING]