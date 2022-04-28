+++
audioDuration = "00:41:22"
audioFile = "Google.Cloud.Platform.Podcast.Episode.302.mp3"
audioSize = 59581895
categories = ["Data", "Data Storage", "BigQuery", "BigLake", "Data Warehouse", "Cyber Security"]
date = "2022-04-27"
description = "Stephanie Wong and Debi Cabrera are learning all about BigLake from guests Gaurav Saxena and Justin Levandoski of the BigQuery team. "
draft = false
episodeNumber = 302
hosts = ["Stephanie Wong", "Debi Cabrera"]
title = "BigLake with Gaurav Saxena and Justin Levandoski"
image="/post/episode-302-biglake-with-gaurav-saxena-and-justin-levandoski/images/hero/hero-EP-302.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ud8bnd/episode_302_biglake_with_gaurav_saxena_and_justin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Stephanie Wong](https://twitter.com/stephr_wong) and Debi Cabrera are learning all about BigLake from guests [Gaurav Saxena](https://twitter.com/gavsa82) and [Justin Levandoski](https://twitter.com/jstnlvndski) of the BigQuery team. 

BigLake offers unified data management from both data warehouses and data lakes. What exactly is the difference between a data warehouse and a data lake? Justin explains what a data lake is, how they came to be, and the benefits. Each data option has its cons too, like the limitations of data lakes for enterprise use. Enter BigLake built on BigQuery, which helps enterprise clients manage and analyze their data from both data warehouses and data lakes. The best features of BigQuery are now available for Google Cloud Storage and across multi-cloud solutions.

Guarav describes BigLake behind the scenes and how the principles of BigQuery's data management can now be used for open file formats in BigLake. It's BigQuery for more data formats, Justin explains. BigLake solves many data problems quickly with a special emphasis on improving security. Our guests talk specifically about clients who gain the most from using BigLake, especially those looking to analyze distributed data and those who need easy and fast security and compliance solutions. With tightened security, BigLake offers access delegation and secure APIs that work over object storage. We hear about the user experience and how easy it is to get started, especially for customers already familiar with and using other GCP products.

Google's advocacy of open source projects means many clients are coming in with workloads built with open source software. BigLake supports multi-cloud projects so that tables can be built on top of any data system. No matter the format of your data, you can run analytics with BigLake. We talk more about the security features of BigLake and how easy it is to unify data warehouses and data lakes with optimal data security. 

The customers have helped shape BigLake, and Gaurav describes how these clients are using this data software. We hear about integration with BigQuery Omni and Dataplex and how BigLake is different. In the future, Google will continue to make simple, effective solutions for data management and analytics, building further off of BigQuery.

##### Gaurav Saxena

[Gaurav Saxena](https://twitter.com/gavsa82) is a product management lead at Google BigQuery. He has 12+ years of experience building products at the intersection of cloud, data and AI. Before Google, Gaurav led product management at Microsoft Azure and Amazon Web Services for some of the most widely used cloud offerings in storage and data.

##### Justin Levandoski

[Justin](https://twitter.com/jstnlvndski) is a tech lead/manager in BigQuery leading BigLake and other projects pushing the frontier of BigQuery. Prior to Google, just worked on Amazon Aurora and was part of the Database research group at Microsoft Research.

##### Cool things of the week

* Your ultimate guide to Speech on Google Cloud [blog](https://cloud.google.com/blog/products/ai-machine-learning/your-ultimate-guide-to-speech-on-google-cloud)
* Announcing the Climate Innovation Challenge—grants to support cutting-edge earth research [blog](https://cloud.google.com/blog/topics/sustainability/climate-innovation-challenge-provides-google-cloud-credits)
 
##### Interview

* BigLake [site](https://cloud.google.com/biglake)
* BigQuery [site](https://cloud.google.com/bigquery)
* Cloud Storage [site](https://cloud.google.com/storage)
* Spark [site](https://spark.apache.org)
* Apache Ranger [site](https://ranger.apache.org)
* BigQuery Omni [docs](https://cloud.google.com/bigquery-omni/docs/introduction)
* Apache Iceberg [site](https://iceberg.apache.org)
* Delta Lake [site](https://delta.io)
* Presto [site](https://prestodb.io)
* TensorFlow [site](https://www.tensorflow.org)
* Dataplex [site](https://cloud.google.com/dataplex)

##### What's something cool you're working on?

Debi is working on a series about automatic DLP. Cloud Data Loss Prevention is now automatic and allows you to scan data across your whole org with the click of one button! 

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hello, hello, everyone, and welcome to episode number 302-- yes, 302. I wasn't here to celebrate the 300, so I'm excited now. 302 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and I am here with my teammate Debi. What's up, Debi?" >}} 

DEBI: Hey, Steph, I'm good. Congratulations on 300 episodes. That is so awesome. 

STEPHANIE: I know. I feel like we should get a cake or something and just pass it across different parts of the country, so we can each have a piece. 

DEBI: Yeah, we'll just mail a cake. 

STEPHANIE: And that's actually an inconvenient way of doing that. We can just each order our own cupcakes. [LAUGHS] 

Well, today we have another celebratory moment because we are talking about one of the recent announcements from our Cloud Data Summit, which happened this past month. It is BigLake, which you're probably wondering, what does that mean, and it sounds vaguely similar to our other popular product BigQuery. And you'll find out why those names are similar in just a moment as we bring in our guests here. But, Debi, what did you think of the conversation today? 

DEBI: I thought it was such a great conversation. We really dive deep into data lakes versus data warehouses and the whole conversation around that. And BigLake is a really distinctive product that's solving a lot of issues for customers. So it was really super entertaining and interesting to talk to the folks today. 

STEPHANIE: Yes, so we're going to go into a conversation with the product leads here who were pivotal in designing this product, BigLake, with their customers, as well. So before we get into that, let's go ahead and jump into our cool things of the week. 

[MUSIC PLAYING] 

All right, so my cool thing of the week is a new blog post by our very own Dale Markowitz, "Your Ultimate Guide to Speech on Google Cloud." And there's no better person to talk about this because she has done a number of demos going into conversational AI, how to use the speech API, and more. 

And as you may know, we're already very used to using speech and technology, whether that is using our phones and talking into our phones. But there are so many more use cases available to us now, such as having our speech transcribed during live video conferencing meetings. 

So this guide actually summarizes and walks through a bunch of the demos that not only Dale has done, but our other great colleague Marku has done as well, where they do things like generating subtitles via a video, do real-time captioning, translating speech, and the combination of speech and NLP, or Natural Language Processing. 

So it's a really great article. I definitely recommend it, and go ahead and check it out. 

DEBI: That is super interesting. My cool thing of the week is The Climate Innovation Challenge, which is grants to support cutting-edge Earth research by Justin Keeble and Emma Fish. Sustainability is a business critical agenda, and we need intelligent technologies, leadership, and collaboration to drive industry transformations and reach a net-zero world. 

So through this new program, individual climate researchers in higher education and not-for-profit research organizations can actually apply for Google Cloud credit grants of up to $100,000 to accelerate their projects. I am really passionate about sustainability, and I agree that it is a business critical agenda. So I love to see that Google Cloud is putting these grants out there. 

STEPHANIE: Yeah, a lot of work can't be done until there are resources available to do these kind of projects. So at the end of the day, this is the reality of it. So it's really nice to see this push towards supporting researchers in the quest to save our climate. All right. And with that, let's go ahead and dive into our conversation with Justin and Gaurav. 

[MUSIC PLAYING] 

All right, Justin and Gaurav, thank you so much for joining. Of course, we have to ask you first, tell us about yourself and what you do here at Google. 

JUSTIN: Sure. Hi. I'm Justin Levandoski and I'm an engineering leader in BigQuery, and I founded BigLake project and the BigLake team, roughly two years ago, after joining GCP. 

GAURAV: And I am Gaurav Saxena. I'm a product management lead here at BigQuery. We work on BigQuery pillars that make it really easy for BigQuery to work with data lakes. 

DEBI: Great, thank you so much for being here, like Steph said. So let's talk about a little bit of a basic question first. Can you tell us what is a data warehouse versus a data lake? 

JUSTIN: Yeah, very good question. This is one that is coming up again and again as we talk with customers and across the industry, as well. So if you look back on the history of the database industry, we started out with data warehouses, which are-- essentially, what I'd put them as is scalable, kind of relational databases used for business intelligence, your typical reports over structured data, so on and so forth. 

And that took us well through the early 2000s up to 2010. And beginning in 2010, around that time period, we saw the rise of data lakes. And roughly how I describe a data lake is the customers and users were putting all types of data types on cheap object storage, so Google Cloud Storage, S3, so on and so forth, ranging from unstructured images-- files and so forth-- to semi-structured, like JSON, log data, so on and so forth, all the way to structured data in the form of open-source formats like Parquet or so on and so forth. 

And on top of this, open-source analytics engines-- Spark, of course, is now a big one, but before that there was Hive and Presto and so forth. And they're using these engines to, essentially, query the data in situ, no matter what type and so forth. So there is more flexibility in the data-lake side rather than there was in that more enterprise-y data warehouse side. 

So as I think we'll talk about more and more in this interview, these things are converging now in interesting ways. Because there's shortcomings on the data-lake side, just as there was in the data-warehouse side. 

DEBI: Yeah, I think it's a distinction that even I need to remind myself of each time. Data warehouse versus data lake, it seems like one is more structured versus data lake, which can be coming from a lot of different sources. So there has historically been a lot of challenges, I'm sure, but can you walk through some of those specific challenges with data warehouses and data lakes? 

JUSTIN: Right, so I think I'll start from the data-lake side. And, Gaurav, feel free to add color here, as well. From my perspective, data lakes were incredibly useful-- a useful kind of design-pattern invention in the industry because they taught us, essentially, there's a number of analytics use cases for which data warehouses weren't originally built for or adept enough to do. 

So you look at things like building AI/ML pipelines, working with unstructured data, just flexibility in query processing, and so forth. These are all things that data lakes provide. However, they typically don't have all the enterprise-rich features that you'd expect, as enterprises go forth and want to build data analytics platforms off of. 

So think about things like fine-grained security, auditing, predictable performance, so on and so forth. All of these things were relatively missing from data lakes in the early days. It was kind of the-- I'd equate it to the Wild West for data. But as we go forward, you're typically looking at large enterprises that want to use the design pattern for their use cases. 

They like some data to be in data lakes. They like other data that's more structured, as this plays more in the data warehouse, and they'd like this to just work and the enterprise features to be uniform across these things. And I think this is where, generally, the industry is headed and the reason we built BigLake. 

GAURAV: So I would add to that that 12 years ago, if you look at how analytics was done, it was primarily about, hey, move all data together in a data warehouse and enable SQL workloads on top of that. I think what happened was that when data volumes became large enough, Hadoop really paved the way for large-scale data processing, and object stores matured to become data lakes. 

While that really helped customers, what happened was that data lakes have typically lacked the features that data warehouses provided, things like fine-grained security, perform and query execution transactions. And because these are two different silos, at this time, in server-specific use cases, that means that customers have to write a lot of data pipelines to shuffle the data between two places, keep it in sync. 

And in a world where users are demanding more and more use cases, this approach has increasingly become non-scalable. 

DEBI: I find it interesting because, with all the stages that you just mentioned between the on-prem data warehouses in the early 2000s, the data lakes in the 2010s, and now data warehouses and point solutions, there seems to always be somewhat of a value gap, whether it's scale and cost, management overhead, or operating and integration with AI systems. 

How do you see us catching up? Is it more so that we have the tooling now in place to meet the scalability needs or the data volume, but there's kind of a trailing lag in terms of management of these tools? 

GAURAV: This is like-- if you see the value gap that you're describing, it's really about the expansion of use cases. We have really evolved from decision making nodes needing SQL workloads to really AI, operational, real-time streaming, all of those use cases, while the data volume has constantly been growing. 

So we really are at a point where it's really important to break down these data silos because conventional methods of doing these things are no longer going to enable these use cases at a velocity that your business wants. And I think this is one of the reasons why you are seeing a lot of interest and market around BigLake, because it is exactly the problem that we are set out to solve. 

JUSTIN: And I'll just add to that. If you think about the tooling and so forth as the crux of your question, this is why we set out to build BigLake based on BigQuery and not just another kind of solution. BigLake is solidly built on BigQuery. This team has upwards of 10 plus years of experience, having built BigQuery from the ground up using Dremel and then enabling BigQuery around that. 

So in terms of tooling and so forth, we have, essentially, the basis in BigQuery that we're able to expand now to these data lake scenarios. We know for a fact that BigQuery is very useful in terms of an enterprise and a data warehouse tool that we're now able to provide customers more scenarios. 

DEBI: That makes total sense. So I guess let's hop into talking about BigLake, then. So what is BigLake? What are its key features? 

GAURAV: Yeah, so BigLake is a storage engine. It's a storage engine that brings the best of BigQuery features to object stores. If you think about the earlier point that you mentioned, that object stores have lacked the features that a data warehouse provides, which is typically transactions, performance, fine-grained security-- well, it's enabling all of that. 

So BigLake enables all of these BigQuery storage features extended to Google Cloud Storage and also to multi-cloud object stores on S3 and Azure Data Lake. The idea is that BigLake makes data residing in all of these storage tiers look just like a BigQuery table. 

So from a data administration perspective, you can really give permissions to your users. You can interact with this table. You can do row column level security, and you get all of these features that now makes it a uniform, consistent experience to interact with your data. 

And also, BigLake provides an API abstraction. So multiple query engines can come and transact with this data, in a manner that not only enforces consistent security, but also provides a performant query experience for end users. 

JUSTIN: And I'll just add to that. Architecturally, BigQuery was built as the original data lake if you will. So it started as a Dremel query engine, which was internal Google infrastructure to query logs, data, and so on and so forth. And BigQuery is essentially a number of services built around Dremel, service as architecture, if you will. 

So it's architected in the right way, and this is why we're able to fairly easily take it forward and expand out to data lakes as well, because it's built as you would build it for the cloud-- very modular, very easy to extend. So this is a key piece of why BigLake is unique in that it's really built on BigQuery pieces. 

DEBI: Yeah, so it sounds like it's majorly built on the power of BigQuery, but I still have to ask the question of how this is possible. Because I'm sure, given the historical usage of data lakes, it's got most people scratching their heads on how to manage these incoming sources of various levels of structured data and unstructured data. 

So can you just walk through how it really works behind the scenes? What makes it unique? And why are we able to overcome these existing shortcomings of other tools out there? 

GAURAV: Yeah, so I think one of the key ways we achieve that is, if you look at how BigQuery manages the data-- over the course of last 10 years, BigQuery for us decoupled compute and storage altogether. And that provided an elasticity for these use cases to come on and grow. 

And a lot of customers today actually think of BigQuery Manage Store as just a data lake. It is those exact same principles that we are taking for open-file formats. In other words, this is really taking the secret sauce of BigQuery out and making it work for open-file formats, which really provides all of these features for data lakes. 

JUSTIN: And just in terms of usability and so forth, to BigQuery users, this looks nothing more than an external table that looks more and more like a managed BigQuery table, although the data is residing in open format on object storage and so forth. 

So to just add to what Gaurav said, the key here is that it's all BigQuery. It's just that we're expanding it to different file formats and different data types, as well. So as long as we keep BigQuery nice and modular and extensible, this will continue to pay dividends for us and our customers, quite frankly. 

DEBI: Would it be fair to say, then, that this is just a way to wrangle all of your data and make it more manageable? 

JUSTIN: Yes, I would say that's a clear value proposition of BigLake. So one thing we hear again and again from customers is that depending on-- say, if you were to go to another platform, you'd have a data warehouse and a data lake. And how these things work together in terms of just semantics of the security model, it might not even match. 

You'd have, say, security policies on your data lake which don't necessarily match the enterprise data warehouse. And the data warehouse doesn't necessarily abide by, say, the security policies that are placed on your data lake, say, through Apache Ranger or whatever other kind of security tooling that you use. 

In a sense, this is one way to have a single umbrella, kind of single pane of glass for all your data assets managed simply with uniform principles across the data, no matter where it resides. 

GAURAV: Yeah, we already see-- we have had a lot of customers using BigLake in preview. One of the big ways they found value was that, previously, they were moving a lot of data from data warehouses to lakes, or vice versa, to enable use cases. 

The biggest benefit is now they can have the data spread across in open formats, in internal file formats, and it doesn't really matter. Now, they can just store a single copy of data without duplicating and writing multiple infrastructure pieces to copy it, yet make it accessible to the users in a manner that is governed and secure. So this enables, really, then, a lot of use cases without writing any new additional infrastructure. 

DEBI: We love it when something increases security, decreases our risk, is easy to use, more efficient. We love to hear that. OK, great. So in terms of what is currently available to folks now out there, what would you say are the main shortcomings of existing tools? 

GAURAV: So today, if you have to make data lakes work for your query engines, you have to deal with files. And that is one of the major challenges that customers have today. As you can imagine, if there are tools actually writing data to those files and your end users are creating, they don't really get a consistent experience. 

Nor the performance is really great because they rely on the object-store APIs, which were not originally built out for big data problems. They also don't get any fine-grained security. In order to get that, you have to really stitch together a number of tools to make it work. 

Where BigLake really comes in is that provides all of these and addresses all of these problems. And particularly, on the security aspect, the security is decoupled from the query engine. So it's really on the API layer, and you don't have to trust the query engine to provide that security. 

All of these features put together really make it easy for customers to achieve compliance on their workloads, as well as enable access to the users for enabling, whether it be data-science use cases with Spark, SQL querying, BI, or other building data applications. 

JUSTIN: And I'll just add to that, briefly. That was a very good description by Gaurav. But if you just look today and just take the security policy issue that customers run into, today, to stand up with kind of a Apache Ranger instance to try and govern your data lake, that can be a months-long process, just to get clearance, standing stuff up, getting something to work. 

With BigLake it's simply two lines of SQL to say, like, table definition and any security policies that you want to add to that. It's very, very simple, very straightforward, and you can get it working in a matter of less than a half hour. 

DEBI: Wow, less than a half hour, that's very impressive, yeah. So you talked about some of these example use cases between data scientists and others, but who should be the ones using BigLake? And also, who is really deriving the value out of it as well? 

GAURAV: So BigLake is valuable to anybody who is trying to make sense of distributed data and enable use cases on top of that data. Specifically speaking, if you are building data lakes and enabling SQL, non-SQL workloads on top of it, BigLake allows you to get performant query execution. BigLake allows you to get fine-grained security on top of this data. 

So it really helps you achieve various forms of compliance, as well as enable querying use cases. If you are someone who is actually using data lakes as well as data warehouses like BigQuery, and previously you were moving a lot of data between the two places and duplicating it, you no longer need to do so. You can just maintain a single copy of data, make it accessible to multiple query engines, and really get the value from your data with a very short time to insight. 

Likewise, if you have data scientists who were previously inputting data from BigQuery or from data lakes just to make the models work, they don't need to do so now. They can use the connectors that BigLake provides, which are basically built on top of the BigLake API, to really access the data in place, build their models, and accelerate their time to building models. 

Also, if you have data residing on other clouds, BigLake provides you with the storage capabilities, fine-grained security, and performance that you can use BigQuery Omni, and to be able to make sense of the data. 

DEBI: That's so great that it supports hybrid environments because, as we know, we have a big multi-cloud strategy that we love to keep up with. So that's super interesting. So we talked about this a little bit before, that this is powered by BigQuery. It is all BigQuery. Can you touch a little bit more in detail on how is it built on BigQuery? And what does that really entail? 

JUSTIN: Sure, certainly, yeah, and like before, yes, again, this is BigQuery through and through. But I think the best way to answer this question is, I can talk us through how we built the capabilities for fine-grained security, and we'll be able to see how it's built, how we're extending BigQuery onto the data lake with BigLake. 

So if you look at the history of BigQuery being able to query external data, roughly a little more than two years ago, we released support for, I'd say, primitive capabilities to point BigQuery at files and object storage and be able to query them. And we made some improvements to that over time. 

But if you look at what we've done with BigLake in this first version that we released recently, we had to do a number of things around tightening the security posture of both BigQuery and our storage APIs. So starting with the whole BigQuery stack all up, we had to essentially add the ability to have access delegation for files and object storage-- so no longer using end-user credentials and floating them all the way down when it's time to access files on GCS. 

BigLake tables have something called the connection or a delegate service account that accesses the files on behalf of BigQuery. And then all the security, kind of [INAUDIBLE] and everything else, is done within the BigQuery infrastructure itself. So that was closing a security gap there. 

And, of course, we also needed to make our APIs, our read/write storage APIs, work over object storage as well-- again, with the security posture still in place to be able to make it work and close all the back doors to make this secure, to make sure fine-grained security actually worked. 

So, yeah, when we mean this is built on BigQuery, this is literally the extension of BigQuery, out to the data lake and making sure our BigQuery infrastructure works uniformly across data that's in what we call BigQuery managed storage, or data lakes, as well. This is the key to it all in how things stay uniform across whether your data is on data lakes, or managed storage, or so forth. 

DEBI: Yeah, it's really incredible to see all the extended capabilities that are enabled through having BigQuery as its foundation-- security policies and that being one example, but I'm sure there are many other capabilities in terms of how compute and storage are architecturally separated and what that can enable. 

JUSTIN: Yeah, I think in the fullness of time, you'll see this more and more. Through this year and early next year, I think we'll see more and more things that are taking BigQuery forward in a number of ways to the data lake. And again, the architecture allows us to do that, and it'll be a big win for customers, as well. 

DEBI: Yeah, so I'm curious what the developer or the user experience is like. You talked a little bit about that in terms of who should be using BigLake. But you also talked about how quickly you can get up and running using BigLake. What is it actually like once you're up and running? 

GAURAV: Yeah, so we have built BigLake in a manner that it's really natively integrated with GCP products. So the whole experience is delivered through the query engine you are on. So if you're using BigQuery today, you can actually create a BigLake table. You can discover it right in the BigQuery catalog, and you can query it right from the BigQuery experience. 

On the other hand, if you are a customer running open-source engines, you can achieve the same using your Dataproc notebook. And if you want to manage all of these BigLake tables at scale, these are all discoverable in the catalog. And then BigLake provides the management capabilities in order to be able to centrally manage and govern all of these tables. 

So we don't really have a separate place to go for setting up your BigLake. It's all really through the inline experiences of the products that you are already using. 

JUSTIN: Yeah, and I would add to that, this is a benefit for us, as well-- not one more thing for customers to manage. It just works with the existing tooling and, frankly, best of breed kind of tooling that we have in GCP. 

DEBI: It just works, another set of words that we love to hear when you're getting a new product. [LAUGHS] 

JUSTIN: That's right. 

DEBI: Great, OK. So in terms of this being open source and other integrations that are available, can you give us a little bit more detail on that and touch on why multicloud is so key as well? 

GAURAV: Yeah, so I think one of the key principles for us to build BigLake was to really be able to embrace the open-source community and the open-source implementations that customers are doing. Today, we have a lot of customers who come to Google Cloud because they find it the best place to run workloads built on an open stack. 

This is why, whether your data is in Parquet, JSON, Avro, ORG, or other open formats, we allow BigLake tables to be created on top of it. We are also going to, as we showed in our Data Cloud Summit roadmap, bring in open table formats, as well, including Iceberg, Hudi, and delta.io. 

The idea is that if you want to run open source, BigLake provides you to enable analytics regardless of the format of the data that you are choosing to run on. I would also add that the API layer also serves data using Apache Arrow format. So it's really designed for you to make it really easy to run open workloads in the most performant manner, in a secure and governed manner on Google Cloud. 

JUSTIN: Yeah, and I'll also add to that, opening up beyond GCP to the multicloud area with Omni, everything we do in the service of building BigLake will also work on Omni as well, by default. So if you think about just running Omni on data lakes, on, say, S3 on AWS, or Azure Blob Storage or Azure Data Lake storage on Azure-- if you squint at it, this is BigQuery running on other data lakes across other clouds. So what works on GCP clouds will also work on other clouds through BigLake. 

GAURAV: Yeah, I would also add that we provide connectors on top of the APIs, which really make it easy for customers to use open-source engines. So if you are running engines like Spark, Presto, Reno, or TensorFlow, you can take advantage of these connectors, which have already built-in optimizations and really make it easy for your end users to take advantage of BigLake tables using these open-source engines. 

DEBI: Yeah, I think that is absolutely key here, because the big data world is predicated on so many open-source tools, since day zero. And on top of that, I think a lot of people sometimes poke fun at how much people talk about multicloud, but the reality of it is that when you're talking about big data or data processing, data engineering, it often ends up being multicloud, sometimes not by choice. Or if it's not multicloud, multi-environment on-premise hybrid. 

So I think this is a huge fueling force in what you're doing here at the BigLake team. 

JUSTIN: Yeah, that's right, and I'd just add to that. It's our position in BigLake, as well, to let customers pick and choose the engines of their choice. I think what BigLake provides-- one of its key value propositions is it provides the common data management functionality that you don't want to be rebuilding for every scenario. 

So it's kind of the core piece layered over the data that provides all these enterprise features, while you get to pick and choose your engine of choice, whether it be Spark, Presto, TensorFlow, or so on and so forth, or your cloud, as well. 

DEBI: Yeah, so we touched on this a little bit about the BigQuery fine-grained security capabilities that it brings, but anything else that you want to touch on in terms of how BigLake is so unique in terms of fine-grained security over data lakes? 

JUSTIN: Yeah, I'd say at this point in releasing this, it's fairly unique in the industry. Because I'll come back to the point that there really isn't one uniform solution that you can go and tell customers prior to BigLake that just work and unify things. Again, prior to BigLake, if you had to go and you're going to choose a data platform on any one of the clouds, you'd say, OK, I have a data warehouse, and I have my data lake. 

These two don't necessarily play nicely with each other when it comes to things like enforcing fine-grained security and the security posture and whether you can claim that customers running their Spark jobs with arbitrary UDFs-- whether that's really secure and where they're getting their security from. 

So I'd say what's unique here is that we've built the common infrastructure to define security policies and enforce them uniformly, whether you're querying data from the entire BigQuery stack, or you're using our APIs, that will filter the data before it gets sent back to the clusters running your open-source tooling and so forth. 

So in this sense, again, this one umbrella, one thing to set up, uniformly enforcing security across your data assets, is something really unique in the industry at this point. 

DEBI: I just think that the more I hear you talking about this, this really hits on the Google values of respect the user, respect the opportunity. It sounds like this is solving a problem for everyone, and it's solving the real problem. So multicloud, we really want it to be inclusive, so that we can solve these issues for anybody and not just folks that are maybe using only BigQuery or something. So just a moment there that I had of reflection. 

JUSTIN: Exactly, exactly. Yeah, and again, it's not our job to be overly prescriptive to customers. We understand that our customers have a number of scenarios that they're coming from, various points in their data lifecycle and building out data pipelines. And we want to be able to, again, provide the core common data-management principles that are hard to reimplement across systems and make work, but then allow the flexibility in data storage formats, clouds you're using, or even the analytics engines that you want to use, as well. 

DEBI: Great. Well, so speaking of what we love to do for our customers, any good customer stories who have helped the design of the product along the way? 

GAURAV: Yeah, we are thankful to be able to partner with customers to be able to really evolve this product. There are quite a few customers who helped us along the way. Like, one story I think worth narrating is we had a large e-commerce customer who were using BigQuery and also had a significant amount of data on the lake. 

They're kind of dependent on the central team to be able to make use cases work and move data around. I think where they found value was they had this large amount of data on the lake that previously was-- they were just not able to open up to end users because of the compliance need. 

And they had to stitch together multiple number of views because some data has specific columns, which had PIA data that needed to be protected. With BigLake tables, they were able to create fine-grained security on the data lake and also be able to query that data in a performant manner. 

This allowed them to really save a lot of infrastructure around the creation of those views and movement of data and immediately make that data accessible to their end users. Not only did this enable a large number of their analysts to write SQL on top of the data lakes through BigQuery, but also through their data scientists, who were using Spark machine-learning libraries to be able to access this data, while ensuring that they were protecting data with row- and column-level security and meeting their compliance goals. 

At the end of the day, we realized that this customer was able to unlock two sets of new use cases for their different population of users, without actually needing to write any additional data infrastructure moment. And they continue to do more of these things as they expand their usage of BigLake. 

DEBI: That's huge, actually, let me just say, because you just mentioned that they were able to enable new sets of users to run SQL queries against data sources existing in a data lake. I feel like that's like-- we should restate that again because that's pretty powerful right there. 

Now, you mentioned Omni and Dataplex as points of integration throughout the conversation. I don't know if we had a chance to introduce those two just yet because I know we launched those last year during our Data Cloud Summit. And now we're a year later in our next Data Cloud Summit. But can you talk a bit about how it's different from Omni and Dataplex, and how we are truly integrating with them? 

GAURAV: Yeah, so I think one way to think about this is, BigQuery Omni is an extension of BigQuery on other clouds. It allows you to do multi-cloud analytics. So prior to this BigLake announcement, BigQuery Omni would allow you to create tables on top of your S3 or ADLS data and be able to query that. 

Well, now, BigQuery Omni users can actually create BigLake tables, which provides all of these capabilities of BigQuery storage on top of multi-cloud data lakes. So this makes the analytics experience more governed, more performant, more secure on other clouds, as well. 

Dataplex is all about helping customers ensure to manage data at scale. So while BigLake provides all of these table-level features that BigQuery has, Dataplex will allow you to manage all of these BigLake tables at scale. So you can create all of these BigLake tables from BigQuery from your Dataproc notebooks. 

But once you have created them, you can actually go to Dataplex. You can discover them in one place. You can logically organize them, and then you can set up policies based on lakes and zones that allows you to centrally govern the security policies for this data and also provide tools to build data much like architectural patents and implement that. 

In addition to that, Dataplex also provides metadata management capabilities. So Dataplex can actually go and scan your GCS bucket and automatically create BigLake tables for you, register it in BigQuery catalog or Dataproc Metastore for your end users to discover, without you needing to do these tasks and building it out from scratch. 

These are all the integrations available today, but going further, we will enable all of these integrations, including managing multi-cloud data with consistent policies. 

JUSTIN: Right. And just to add to that, to summarize what Gaurav just said-- that's a very nice job-- but you can look at BigLake as the core infrastructure that's sitting close to the data, the storage engine, the runtime, that's actually sitting close and doing the data processing and enforcing fine-grained security, doing performance accelerations, and so forth. 

Omni is our ability to infrastructure, to ship pieces of BigQuery on other clouds. And then Dataplex is kind of management of data assets at scale across different-- whether it be databases, data lakes, or data warehouses. 

DEBI: Covering the full gamut of both management, as well as the data processing as well, and Analytics So I'm honestly curious, what's next for Google to cover in this space? I know that there's a lot more left, but anything in terms of what bigger themes that we're hoping to achieve in these product areas? 

JUSTIN: Well, I can't speak to the things that are not yet public, but I think a general theme that you'll see, and I think that we're well set up for, is Google understands how to build infrastructure for the cloud and data processing infrastructure. 

So I think you'll continue to see these themes of, certainly, reusing pieces of BigQuery to make it simpler for customers. And I think you'll see this across other data platforms, as well. 

GAURAV: Yeah and to add to that, we are seeing an evolution in the analytics stack because of all the reasons we discussed earlier. The new analytics stack requires you to make sense of distributed data, or data in different formats, data in different clouds and regions and making it accessible to multiple-query engines that enable AI, BI, data transformation, data applications, and a host of other use cases. 

But I think what you will see is that BigLake will evolve in that direction to support this kind of analytics tech and help customers modernize to get more value from their data. 

DEBI: So in my head, I'm just thinking, wow, this is so useful. This is really something that's coming along, and it's going to help people a lot. So what my first thought is, also, what was the hardest part of this? What was the part that really maybe stuck you guys for a little bit, even if it was just the planning? I'd love to hear. 

JUSTIN: Yeah, I'll start. Gaurav, you can definitely join in, as well. I think several things. The decision to index on BigQuery, I think, was kind of a no-brainer, but really getting the customer scenario right and choosing what problems to solve first. So there's many things you can do when you're starting a project like this. 

But really, it was spending the time with customers, figuring out what's the most prominent pain point, if you will, and then building our agenda around that. So one of the things that we saw that we could immediately help customers with was just the security problem. How do you provide uniform fine-grained security across your data lake and your data warehouses? 

So this is what we started with. So really kind of iterating with early customer feedback and doing the planning, the interviews with customers and so forth, and really finding our footing, that was, I'd say, the time-consuming piece. 

GAURAV: Yeah. I'd also add, we work with a lot of large enterprises. And the idea is if we can solve their use cases, we would be able to solve everybody's use cases. But I think one big thing that we have covered is, as customers are moving from the Hadoop-era world and they are landing into the-- they want to get to this whole take advantage of the cloud technologies, there is a state in the middle. 

And it's really important that we prioritize features so that we can help ease of the transition. I think customers come from a variety of deployments. And one of the key learnings for us was, that security is the number-one principle that all of our customers are adopting. 

And that's why you will see that the first set of BigLake features is really heavily indexed on security features to make sure that we are enabling all the analytics by first ensuring that they are done in a secure and governed manner. 

DEBI: Yeah, I think that's something that's becoming more prominent. We also had someone come onto the podcast last year about data governance, and they had also published a book about it. So it's top of mind, I think, often because of takeaways and learnings from past enveloping projects or expanding, ballooning projects that seem to be causing issues down the line. 

So this is great. So BigLake just came out recently at the Cloud Data Summit. There was a lot of action around it. But for those who want to go learn more, where should they head? 

GAURAV: Well, you can start by learning at cloud.google.com/BigLake. You will find all the resources there, including get-started tutorials, where you can learn more. If you are already working and building on Google Cloud and have account management relationships, you can work with them. They can help you, advise on the right architectural patterns and how BigLake fits into it. Or just reach out to one of our representatives. We would love to work with you. 

DEBI: Awesome, OK. And then before we finish up here, is there anything that we missed that you want to mention? 

JUSTIN: I think we covered, basically, what BigLake is, how it's built, and our initial features. I'll just say we're looking forward to iterating with our customers and bring together the roadmap that will make them successful. And I think we have a number of really neat things coming out later this year and early next year that I think will really move the industry and help our customers solve their data management problems and simplify. 

DEBI: Yeah, from what you've told us, the customers have been at the forefront of helping us create and design this product from day one. And it's going to continue doing so. And so I'm expecting that, next year same time, same place, the next Cloud Data Summit, we're going to have a new set of features to talk about. 

JUSTIN: Certainly. 

DEBI: So thank you so much. 

JUSTIN: Thank you very much, and thank you for having us. 

GAURAV: Yeah, likewise. Thank you so much. 

STEPHANIE: Wow, what a great interview. Honestly, I just had such a great time learning about BigLake. You can tell that this product is really just solving so many issues for users or just making life a little easier. It's really nice to see teams working on a product that increases security and therefore decreases risk, decreases costs, and decreases time to insight for the customer. 

So this is something that's really adding value. There are less parts of the machine, which means it's more efficient, and there are less resources that we need to trust. So as a user, it really just helps bring everything together and consolidate things that were previously really laborious to do. 

DEBI: Yeah, I mean, being able to spin up an instance of BigLake in-- I think he said 30 minutes-- it seems very, I'm going to say it, revolutionary in the sense that people who were doing this type of work with bespoke tooling, with various sources and types of data, it's a huge time saving. 

And not to mention, they did dive very deep into talking about the fine-grained security policies as a result of what we've been able to build over many years of our work for BigQuery. So it's a very exciting space. And I'm glad to see that they were able to bring in much of customer direction early on in the process of product design for BigLake. 

STEPHANIE: Great. Well, there you have it. BigLake, we're going to see a lot more in the next year in this space. But for now, Debi, what are you working on these days? 

DEBI: I am working on a series about Cloud Data Loss Prevention, or DLP. So DLP is now automatic, and it allows you to scan data across your whole organization with just a few clicks of a button. It's really interesting how they're upgrading the Cloud DLP product and making it automatic. 

So now folks can scan across their whole org and folders and projects. And there's a bunch of new selections of how you can write and consume that data, as well as really making a more specific and deeply-detailed scan configuration. 

So you can leave things out or, add things in, and make it really specific to your business needs. So look out for videos about automatic DLP coming soon. 

STEPHANIE: Awesome. Yeah, looking forward to that series. For everyone who's interested in checking out Devi's DLP series, then subscribe to the Google Cloud Tech YouTube channel, where you will get notified for any new episodes. And with that, we'll see everyone next time for our next episode of the GCP Podcast. Thanks again, Debi, and thanks, everyone else. 

DEBI: Thank you and thanks, all, for listening. See you next week. 

[MUSIC PLAYING]